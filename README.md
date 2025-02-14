# About Assignment

This is a React-based web application that provides the following features:

- **Login with Email and Password**: Users can log in using their email and password.
- **Cookies for Storing User Info**: User login information is stored in cookies for maintaining session persistence.
- **Post List Page with CRUD Operations**: Users can create, read, update, and delete posts via a list interface.
- **Lazy Loading and Pagination**: Large lists of posts are handled efficiently with lazy loading and pagination.

## Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)

## Getting Started

Follow these steps to set up and run the application locally:

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/your-username/iouring-assignment.git
   ```

2. Navigate to the project directory:
   ```bash
   cd iouring-assignment
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

4. Run the application:
   ```bash
   npm run dev
   ```

   This will start the Vite development server, and you can view the application by navigating to [http://localhost:5173](http://localhost:5173) in your browser.

## Technologies Used

- **React**: Front-end JavaScript library for building user interfaces.
- **React Router**: For handling navigation and routing in the application.
- **React Cookies**: For managing cookies in the application to store user session data.
- **Tailwind CSS**: For styling and responsive layout.
- **Vite**: Fast development server and build tool for React.

## Features in Detail

### 1. Login with Email and Password

The application allows users to log in securely using their email and password. Upon successful login, the user's information is saved in cookies to ensure a persistent session.

### 2. Cookies for Storing User Info

Once the user logs in, a cookie is set to store the user's information. This enables the application to remember the user across different pages without requiring them to log in again after a page refresh.

### 3. Post List with CRUD Operations

A page is dedicated to displaying a list of posts. Users can:

- **Create** a new post.
- **Read** (view) the posts.
- **Update** an existing post.
- **Delete** a post.

Each post includes a simple interface to manage content easily.

### 4. Lazy Loading and Pagination

To optimize performance when viewing large sets of posts, the app uses lazy loading to load more posts as the user scrolls. Pagination is also implemented to break the post list into smaller, more manageable pages.

## Folder Structure

```
/src
  /api
    - api.js             // API service to handle HTTP requests
  /assets
    - react.svg          // Static assets like images and icons
  /components
    - Alert.jsx          // Alert component
    - Footer.jsx         // Footer component
    - Form.jsx           // Generic form component
    - Header.jsx         // Header component with navigation
    - Pagination.jsx     // Pagination component
    - PostCard.jsx       // Individual post card component
    - PostCardSkeleton.jsx // Loading skeleton for posts
    - PostForm.jsx       // Form for creating/editing posts
    - PostList.jsx       // Displays the list of posts
  /Page
    - Home.jsx           // Home page component
    - Login.jsx          // Login page component
  /utils
    - cookies.js         // Utility functions for managing cookies
  App.jsx                // Main application component
  index.css              // Global styles
  main.jsx               // Entry point for the application
```
