# React-Projects

This repository contains several React projects that I learned during the Udemy course.

**1. [Project-Management](#1-project-management-app)**

**2. [Class-component](#2-search-mechanism-with-class-components)**

**3. [Multipage-App](#3-multipage-app-with-createbrowserrouter)**

**4. [Firebase-Backend](#4-movie-catalog-app-with-firebase-backend)**

**5. [Form-Validation](#5-react-form-with-basic-validation-using-custom-hook)**

**6. [Custom-Hooks](#6react-custom-hook---usecounter)**

**7. [Quiz-App](#7react-quiz-app)**

**8. [Tic-Tac-Toe](#8tic-tac-toe-game)**


If you want to understand more about this topic, check out the course: [React - The complete guide](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)

###  Common Installation Steps

To run any of these projects locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/Ponragavan/React-Projects.git
```

2. Navigate to the project directory:

```bash
cd React-Projects/<project-directory-as-in-the-top>
```

3. Install dependencies:

```bash
npm install
```

4. To run the project:

- For React Vite projects:

  ```bash
  npm run dev
  ```

- For Normal React projects:

  ```bash
  npm start
  ```

## 1. Project Management App

This project is a simple project management application built using React. It allows users to add projects, remove projects, add tasks to projects, and remove tasks from projects.<br/><br/>
**React vite**

[View code](https://github.com/Ponragavan/React-Projects/blob/main/Project-Management) 

[Go to top](#react-projects)

### About

The Project Management App is designed to simplify the management of projects and tasks within those projects. It provides an intuitive interface for users to create, organize, and track their projects and associated tasks.

### Features

- **Project Management**: Add new projects and remove existing projects.
- **Task Management**: Add tasks to specific projects and remove tasks from projects.
- **User-Friendly Interface**: Intuitive and easy-to-use interface for managing projects and tasks.

## 2. Search mechanism with class components

This project is a basic search mechanism built using React class components. It provides suggestions as users type in the search input field.<br/><br/>
**Normal React**

[View code](https://github.com/Ponragavan/React-Projects/blob/main/Class-Component) 

[Go to top](#react-projects)

### About

The Basic Search Mechanism with Suggestions project is designed to demonstrate a simple search feature with real-time suggestions as users type. It utilizes React class components to manage the state and handle user input.

### Features

- **Search Suggestions**: Provides real-time suggestions as users type in the search input field.
- **Class Components**: Utilizes React class components to manage state and handle user interactions.
- **Simple and Lightweight**: A minimalistic approach to implementing a basic search mechanism.

## 3. Multipage app with 'createBrowserRouter'

This project is a multi-page web application built using React and the BrowserRouter component. It consists of multiple pages with navigation between them.<br/><br/>
**Normal React**

[View code](https://github.com/Ponragavan/React-Projects/blob/main/Multipage-App) 

[Go to top](#react-projects)

### About

The React Multi-Page App with BrowserRouter project demonstrates how to create a multi-page application using React. It utilizes the BrowserRouter component from React Router for handling navigation between different pages.

### Features

- **Multiple Pages**: Consists of multiple pages, each with its own unique content.
- **Navigation**: Users can navigate between pages using links or buttons.
- **BrowserRouter**: Utilizes the BrowserRouter component from React Router for managing client-side routing.

## 4. Movie Catalog App with Firebase Backend
This project is a movie catalog web application that utilizes Firebase for backend services. Users can add, retrieve movie entries, which consist of titles, descriptions, and release dates.<br/><br/>
**Normal React**

[View code](https://github.com/Ponragavan/React-Projects/blob/main/Firebase-Backend) 

[Go to top](#react-projects)

### About

The Movie Catalog App with Firebase Backend is a simple web application that demonstrates how to integrate Firebase for backend services in a React application. It allows users to perform CR operations on movie entries, storing their titles, descriptions, and release dates in the Firebase Realtime Database.

### Features

- **Firebase Integration**: Utilizes Firebase Realtime Database for storing movie data.
- **CR Operations**: Supports Create and Read operations for movie entries.
- **User-Friendly Interface**: Provides an intuitive interface for managing movie catalog entries.

### Set up Firebase:

- Create a Firebase project on the Firebase console (https://firebase.google.com/).
- Obtain your Firebase configuration object.
- Replace the Firebase configuration in your project with your own configuration.
- Set up Firebase Realtime Database and define the necessary rules.

## 5. React Form with Basic Validation using Custom Hook

This project is a React application that demonstrates how to create forms with basic validation using a custom hook. It provides a reusable hook for form validation that can be easily integrated into any React application.<br/><br/>
**Normal React**

[View code](https://github.com/Ponragavan/React-Projects/blob/main/Form-Validation) 

[Go to top](#react-projects)

### About

The React Form with Basic Validation using Custom Hook project showcases how to implement form validation in React applications using a custom hook approach. It includes basic validation rules such as required fields, minimum length, and format validation for email addresses.

### Features

- **Custom Hook for Validation**: Utilizes a custom hook to handle form validation logic.
- **Basic Validation Rules**: Includes validation for required fields, minimum length, and email format.
- **Reusable and Flexible**: The custom hook can be easily reused across different forms in the application.
- **Dynamic Error Messages**: Displays dynamic error messages based on validation rules.

## 6.React Custom Hook - 'useCounter'

This project defines a custom React hook named useCounter that returns a counter value and accepts an argument indicating whether it should be a forward or backward counter.<br/><br/>
**Normal React**

[View code](https://github.com/Ponragavan/React-Projects/blob/main/Custom-Hooks) 

[Go to top](#react-projects)

### About

The useCounter custom hook is designed to provide a flexible way to manage a counter in React components. It can be configured to count either forwards or backwards based on the argument provided.

### Features

- **Custom Hook**: Provides a custom hook named useCounter for managing counter functionality.
- **Forward or Backward Counting**: Supports both forward and backward counting based on the boolean argument provided.
- **Flexible Integration**: Can be easily integrated into React components to add counter functionality.

## 7.React Quiz App

This project is a quiz application built using React. It contains several questions with four options for each question.<br/><br/>
**React vite**

[View code](https://github.com/Ponragavan/React-Projects/blob/main/Quiz-App) 

[Go to top](#react-projects)

### About

The React Quiz App with Timer is designed to provide users with an interactive quiz experience. It presents multiple-choice questions, each with four options. A timer is set for each question, ensuring a time-bound quiz session. Results are displayed at the end of the quiz.

### Features

- **Multiple Questions**: The quiz contains several questions with multiple-choice options.
- **Timer**: A timer is set for each question to ensure time-bound quiz sessions.
- **Results Display**: The quiz displays results at the end, showing the user's score and performance.
- **Interactive Interface**: Users can select options for each question and navigate through the quiz.

## 8.Tic Tac Toe Game

This project is a simple 3x3 Tic Tac Toe game built using React. It allows two players to play the game, change player names, and reset the game.<br/><br/>
**React vite**

[View code](https://github.com/Ponragavan/React-Projects/blob/main/Tic-Tac-Toe) 

[Go to top](#react-projects)

### About

The Tic Tac Toe Game is designed to provide a fun and interactive way to play the classic game of Tic Tac Toe. It offers an intuitive interface for players to engage in the game, change player names, and reset the game for a new round.

### Features

- **Gameplay**: Classic 3x3 Tic Tac Toe game for two players.
- **Change Player Names**: Ability to change the names of the players.
- **Reset Game**: Option to reset the game and start a new round.
- **User-Friendly Interface**: Simple and easy-to-use interface for playing the game.
