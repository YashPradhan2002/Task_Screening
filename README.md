# Student Search Application

This project is a simple React application for searching and displaying student information.

## Setup

To set up the project, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/YashPradhan2002/Task_Screening.git
   ```
2. Navigate to the project directory:
   ```sh
   cd Task_Screening
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```
4. Navigate to the backend directory and install its dependencies:
   ```sh
   cd backend
   npm install
   ```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
To run tests once and exit, use:
   ```sh
   npm test -- --watchAll=false
   ```

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

## Project Structure

- `src/pages/SearchPage.js`: Contains the main search functionality and UI for searching students.
- `public/`: Contains the public assets and the main HTML file.
- `backend/server.js`: Contains the Express server setup.
- `backend/routes/studentRoutes.js`: Contains the API routes for fetching student data.

## API

The application fetches student data from the following API endpoint:

```
https://screeningtask.onrender.com/api/students?query={searchTerm}
```

