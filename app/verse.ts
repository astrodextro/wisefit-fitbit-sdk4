import document from "document";
import { proverbsData } from "./data/proverbs-kjv";
import { ChapterView } from "./chapter";

export class VerseView {
  currentChapter: number;
  verseNumber: number;
  ui: { referenceLabel: any; verseText: any; verseContainer: any; };

  constructor() {
    document.replaceSync("verse.gui");

    this.currentChapter = new Date().getDate();
    this.verseNumber = 0; // Default verse number
    // Initialize views
    this.ui = {
      referenceLabel: document.getElementById("reference-label"),
      verseText: document.getElementById("verse-text"),
      verseContainer: document.getElementById("verse-container"),
    };

    this.ui.verseContainer.addEventListener("click", () => {
      new ChapterView(proverbsData, this.currentChapter, this.verseNumber)
    });

    // Display the daily verse on load
    this.displayDailyVerse();
  }
  
  displayDailyVerse() {
    const chapterData = proverbsData.chapters[this.currentChapter - 1];
    if (!chapterData) return;

    const randomIndex = Math.floor(Math.random() * chapterData.verses.length);
    this.verseNumber = randomIndex + 1;
    const verse = chapterData.verses[randomIndex];

    this.ui.referenceLabel.text = `Proverbs ${this.currentChapter}:${this.verseNumber}`;
    this.ui.verseText.text = verse;
  }
}

// Start the app
// export const app = new WiseFitApp();
