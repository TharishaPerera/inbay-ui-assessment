# Movie Finder App - Inbay Uptime Limited

## Overview
OMDB Movies is a simple movie finder app is a web application designed to search for movies, view detailed information, manage a list of favorites, and track the search history. This app provides an easy-to-use interface for discovering movies, with the added benefit of persistent local storage for favorites and search history.

## Features
- **Search** for movies by title
- **View** detailed information about each movie
- **Save favorites** in local storage for easy access
- **Search history** stored in local storage
- **Sort** movies by title or release year for better organization

## Tech Stack
- **React** with **TypeScript** for strong typing and component-based architecture
- **TailwindCSS** for utility-first styling and responsive design
- **Axios** for fetching movie data from external **OMDB** APIs
- **Local Storage** for persisting favorites and search history

## Setup Instructions

To get the OMDB Movies App up and running on your local machine, follow these steps:

### 1. Clone the Repository
Clone the repository to your local machine using Git:
```bash
git clone https://github.com/TharishaPerera/inbay-ui-assessment.git
cd inbay-ui-assessment
```

### 2. Install Dependencies
Install the required dependencies using your package manager of choice (npm, yarn, or pnpm):
```bash
# Using npm
npm install

# Or, if you're using yarn
yarn install

# Or, with pnpm
pnpm install
```

### 3. Setup Environment Variables
To setup the environment variables, follow the below instructions:
1. Create a copy of the .env.example file and rename it to `.env`.
2. Assign your OMDB API key to the `VITE_OMDB_API_KEY` variable.
3. Set the value `https://www.omdbapi.com/` to the `VITE_OMDB_BASE_URL` variable.

### 4. Start the Development Server
Run the app locally with the following command:
```bash
# Using npm
npm run dev

# Or, with yarn
yarn dev

# Or, with pnpm
pnpm dev

```
This will start the development server at http://localhost:3000.

## Additional Information

- **API Source:** The app fetches movie data from OMDb API.
- **Persistence:** The app uses local storage to store user favorites and search history, making it accessible even after a page reload.