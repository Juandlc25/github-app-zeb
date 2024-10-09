# Zeb GitHub Search App

This project is a **React Native** application built with **Expo**, **TypeScript**, and **NativeWind**. It allows users to search for GitHub users and repositories using the **GitHub API**, with results displayed in a clean and responsive interface.

## Features

- **Search GitHub Users**: Search for GitHub users by name and view their avatar, username, and profile link.
- **Search GitHub Repositories**: Search repositories by name and view details such as the repository description, owner, and repo link.
- **Mobile-First Design**: Optimized for mobile devices using **NativeWind** (Tailwind CSS for React Native).
- **Reusable Components**: Search bar, user cards, and headers to ensure clean, modular code.
- **Navigation**: Switch between user and repository searches via a tab navigation.

## Technologies Used

- **React Native**: For building the mobile app.
- **Expo**: Managed workflow for easy development and testing.
- **TypeScript**: Ensuring type safety across the codebase.
- **NativeWind**: Utility-based styling, similar to Tailwind CSS.
- **React Navigation**: For handling navigation between screens.
- **Axios**: For making API requests to GitHub.

## Installation

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v14 or higher)
- **Expo CLI** (`npm install -g expo-cli`)

### Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/zebrands-github-search-app.git
    cd zebrands-github-search-app
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the app:
    ```bash
    npx expo start
    ```

4. Run on a simulator or physical device using the **Expo Go** app.

## Screens

### User Search
- Accessible from the **Users** tab. 
- Enter a username in the search bar to fetch and display GitHub users with their avatar and link to their profile.

### Repository Search
- Accessible from the **Repositories** tab.
- Enter a repository name to fetch and display matching repositories with details like the repository name and owner.

## API

This app makes use of the GitHub Search API:

- **User Search**: `https://api.github.com/search/users?q=<query>`
- **Repository Search**: `https://api.github.com/search/repositories?q=<query>`

## Deployment

To deploy the app via Expo:

1. Log in to your Expo account:
    ```bash
    expo login
    ```

2. Publish the app:
    ```bash
    expo publish
    ```

This will generate a URL that you can share for others to test the app on their devices using **Expo Go**.

## License

This project is licensed under the MIT License. Feel free to use and modify the code as needed.

