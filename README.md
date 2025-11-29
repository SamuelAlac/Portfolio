# Samuel Alac's Portfolio

[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/SamuelAlac/Portfolio)

This repository contains the source code for my personal portfolio website. It's a full-stack application designed to showcase my skills, projects, and professional experience. The project features a dynamic frontend built with React and Vite, and a robust backend powered by Node.js and Express.

<!-- A key feature of this portfolio is **Altera**, an integrated AI assistant. Altera is powered by LangChain and Google's Gemini LLM, using a FAISS vector store created from my resume to answer questions about my skills and experience. -->

**Live Demo:** [samuel-portfolio-three-gamma.vercel.app](https://samuel-portfolio-three-gamma.vercel.app)

## Features

-   **Responsive Design**: Fully responsive layout for optimal viewing on desktop, tablet, and mobile devices.
-   **Dynamic Project Showcase**: Fetches and displays project information directly from my GitHub repositories.
-   **GitHub Contribution Graph**: Visualizes my coding activity and contributions over the past year.
-   **Admin Dashboard**: A secure login for administrators to potentially manage site content.
<!-- -   **AI-Powered Chatbot**: Interact with "Altera," an AI assistant that can answer questions about my career, skills, and projects based on my resume. -->

## Tech Stack

### Frontend

-   **Framework/Library**: React, Vite, TypeScript
-   **Styling**: Tailwind CSS, shadcn/ui
-   **State Management**: Redux Toolkit
-   **Data Fetching**: React Query (TanStack Query)
-   **Routing**: React Router
-   **Animations**: Embla Carousel, Framer Motion (implied via `tw-animate-css`)

### Backend

-   **Framework**: Node.js, Express.js
-   **Database**: MongoDB with Mongoose
-   **Authentication**: Google OAuth 2.0, JSON Web Tokens (JWT)
<!-- -   **AI & Embeddings**:
    -   **LLM**: Google Gemini 2.0 Flash
    -   **Framework**: LangChain
    -   **Embeddings**: Cohere
    -   **Vector Store**: FAISS (faiss-node)
    -->

## Architecture

This project is a monorepo containing two main packages: `frontend` and `backend`.

-   `samuelalac-portfolio/`
    -   `backend/`: An Express.js server that handles API requests for fetching GitHub data, and managing user authentication.
    -   `frontend/`: A React client application built with Vite that consumes the backend APIs to display portfolio content and provide an interactive user experience.

The frontend communicates with the backend via a RESTful API to dynamically load project details, GitHub contributions, and interact with the AI chatbot.

## Getting Started

### Prerequisites

-   Node.js (v18.0.0 or higher)
-   npm (or a compatible package manager like yarn or pnpm)

### Backend Setup

1.  **Navigate to the backend directory:**
    ```sh
    cd backend
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Create a `.env` file** in the `backend` directory and add the following environment variables:
    ```env
    # Server Configuration
    PORT=8000
    NODE_ENV=development

    # MongoDB
    MONGO_DB_URI=<YOUR_MONGODB_CONNECTION_STRING>

    # Google OAuth & JWT
    OAUTH_CLIENT_ID=<YOUR_GOOGLE_OAUTH_CLIENT_ID>
    ADMIN_SECRET=<YOUR_ADMIN_LOGIN_PASSCODE>
    JWT_SECRET=<YOUR_JWT_SECRET>

    # Third-party API Keys
    GITHUB_TOKEN=<YOUR_GITHUB_PERSONAL_ACCESS_TOKEN>
    ```

4.  **Start the server:**
    ```sh
    npm start
    ```
    The server will be running on `http://localhost:8000`.

### Frontend Setup

1.  **Navigate to the frontend directory:**
    ```sh
    cd frontend
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Create a `.env` file** in the `frontend` directory and add the following environment variables:
    ```env
    VITE_API_BASE_URL=http://localhost:8000/api
    VITE_SITE_URL=http://localhost:5173
    VITE_GOOGLE_CLIENT_ID=<YOUR_GOOGLE_OAUTH_CLIENT_ID>
    ```

4.  **Start the development server:**
    ```sh
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.
