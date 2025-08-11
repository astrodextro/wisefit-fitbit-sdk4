import document from "document";
import { VerseView } from "./verse";

export class ChapterView {
  proverbsData: any;
  chapterNum: number;
  verseNumber: number;
  ui: any;

  constructor(proverbsData: any, chapterNum = 0, verseNumber = 1) {
    document.replaceSync("chapter.gui")
    this.proverbsData = proverbsData;
    this.chapterNum = chapterNum;
    this.verseNumber = verseNumber;
      

    // Physical Key events
    document.onkeypress = function(evt) {
      console.log("ONKEYPRESS " + evt.key);
      evt.preventDefault();
      if ( evt.key === "up" ) {
        console.log("UP");
      } else if (evt.key === "down") {
        console.log("DOWN");
      } else if (evt.key === "back") {
        console.log("BACK");
        new VerseView();
      }
    }

    this.ui = {
        versesList: document.getElementById("versesList")
    };

    this.showChapter();
  }

  showChapter() {

    const NUM_ELEMS = this.proverbsData.versesCount + this.proverbsData.chaptersCount; // Total number of verses + chapters

    this.ui.versesList.delegate = {
      getTileInfo: (index: any) => {
        const verseText = this.getVerse(this.proverbsData, index)
        const poolType = verseText.lastIndexOf("Proverbs") == 0 ? "header-pool" : "item-pool"

        return {
          type: poolType,
          value: verseText,
          index: index
        };
      },
      configureTile: (tile: { getElementById: (arg0: string) => { (): any; new(): any; text: string; }; }, info: { type: string; value: any; index: number; }) => {
        if (info.type == "item-pool") {
          tile.getElementById("item-content").text = `${info.value}`;
        } else {
          tile.getElementById("header-content").text = `${info.value}`;
        }
      }
    };
    
    
    // length must be set AFTER delegate
    this.ui.versesList.length = NUM_ELEMS;

    // Get the selected index
    let currentIndex = this.ui.versesList.value;

    // Set the selected index
    this.ui.versesList.value = this.getCurrentVerseIndex(this.verseNumber, this.chapterNum, this.proverbsData); // Scroll to the 4th item
  }

  getCurrentVerseIndex(verseNumber: number, currentChapter: number, proverbsData: { chapters: { versesCount: number; }[]; }) {        
    const chapterData = proverbsData.chapters[currentChapter - 1];
    if (!chapterData) return -1;

    let verseIndex = verseNumber - 1; // Convert to zero-based index
    for (let i = 0; i < currentChapter - 1; i++) {
        verseIndex += proverbsData.chapters[i].versesCount + 1; // +1 for the chapter title
    }
    return verseIndex+1; // +1 to match the tile index
  }

  getVerse(proverbsData: { chapters: string | any[]; chaptersCount: any; versesCount: any; }, tilePos: number): string{
    let verseIndex = tilePos;
    // Get the verseText at the specified index
    if (!proverbsData || !proverbsData.chapters || proverbsData.chapters.length === 0) {
        console.error("No verses available in chapter data");
        return "No verses available";
    }

    if (tilePos < 0 || tilePos >= (proverbsData.chaptersCount + proverbsData.versesCount)) {
        console.error("Index out of bounds");
        return "Index out of bounds";
    }
    let chapterIndex = 0;
    for (chapterIndex = 0; chapterIndex < proverbsData.chapters.length; chapterIndex++) {
        const chapterData = proverbsData.chapters[chapterIndex];
        if (verseIndex >= chapterData.versesCount + 1) {
            verseIndex -= (chapterData.versesCount + 1);
            continue;
        }

        return verseIndex === 0 ? `Proverbs ${chapterIndex + 1}` : `${verseIndex}. ${chapterData.verses[verseIndex - 1]}`;
    }

    return "Verse not found";
  }
}