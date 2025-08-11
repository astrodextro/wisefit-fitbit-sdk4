# WiseFit  Proverbs Daily

A Fitbit OS application that displays a daily Bible verse from the book of Proverbs.

## 📖 About The Project

WiseFit is a simple and elegant application for your Fitbit device that provides you with a "Proverb of the Day". The chapter for the daily verse corresponds to the current day of the month. For example, on the 15th of the month, you'll get a random verse from Proverbs chapter 15.

Tap on the verse to explore the entire chapter and read all its verses in a scrollable list.

The scripture text is from the King James Version (KJV).

## ✨ Features

*   **Daily Verse**: A new verse from Proverbs is displayed each day, corresponding to the day of the month.
*   **Chapter View**: Tap the screen to view the full chapter for the daily verse.
*   **Full Book of Proverbs**: Scroll through all 31 chapters and 915 verses of Proverbs.
*   **Clean Interface**: A minimalist design to focus on the text.

## 📸 Screenshots

**Verse View**

![Verse View]("screenshots\Screenshot 2025-08-08 at 14.11.44.png")

**Chapter View**

![Chapter View]("screenshots\Screenshot 2025-08-08 at 14.12.02.png")

## 🛠️ Built With

*   [Fitbit OS SDK4](https://dev.fitbit.com/build/guides/sdk/)
*   TypeScript

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need the Fitbit OS command-line tools. You can set them up by following the [Fitbit SDK guide](https://dev.fitbit.com/build/guides/command-line-interface/).

### Installation

1.  Clone the repo:
    ```sh
    git clone https://github.com/your_username/WiseFit.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd WiseFit
    ```
3.  Install NPM packages:
    ```sh
    npm install
    ```
4.  Build and install the app on your Fitbit device or simulator:
    ```sh
    npx fitbit-build
    npx fitbit-install
    ```

I recommend renaming the project folder from `fitbit-sdk4` to something more descriptive like `WiseFit` before you push it to GitHub.

Good luck with your project!