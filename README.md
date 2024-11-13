# Blog Application

A responsive and feature-rich blog application. It's built with **React** for the frontend and **AppWrite** for backend services such as authentication and data management. This app allows users to create, edit, delete, and view blog posts, offering a simple yet elegant blogging platform. It is an ideal project for demonstrating the power of AppWrite as a backend service, making it easy to manage data, users, and more.

## Table of Contents

1. [Features](#features)
2. [Prerequisites](#prerequisites)
3. [Getting Started](#getting-started)
4. [AppWrite Configuration](#appwrite-configuration)
5. [Deployment](#deployment)
6. [Contributing](#contributing)

---

## Features

- **User Authentication**: Secure sign-up, login, and logout using AppWrite authentication.
- **CRUD Functionality**: Create, Read, Update, and Delete blog posts.
- **Rich Text Editor**: Provides a rich text editing experience for blog content.
- **Responsive Design**: Optimized for mobile and desktop viewports.

## Prerequisites

Before you begin, ensure that you have the following installed:

- **Node.js**
- **npm** (Node Package Manager)
- **AppWrite**: An instance of AppWrite to manage backend functionalities.
- **Git**: Version control for managing codebase.

## Getting Started

To get this application up and running on your local machine, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/panderonak/blogApplication.git
   cd blogApplication
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the application**:
   ```bash
   npm run dev
   ```

## AppWrite Configuration

After creating an account on [AppWrite](https://appwrite.io/), follow these steps to configure the backend:

1. **Create a new project** in the AppWrite console and note down the **Project ID**.
2. **Enable authentication** and choose the desired authentication methods (e.g., email/password, OAuth).
3. **Set up the database**:
   - Create a collection called `articles` with attributes such as:
     - `Document ID`
     - `Title`
     - `Content`
     - `Status`
     - `User_ID`
   - Create a **Bucket** to store images associated with blog posts (if your app supports image uploads). Note down the **Bucket ID**.
   - Enable the necessary permissions for creating, reading, and updating posts.
4. **Configure environment variables**: Add your AppWrite `Endpoint`, `Project ID`, `Database ID`, `Collection ID`, and `Bucket ID` to your `.env` file to ensure smooth integration.

## Deployment

For production deployment, you can deploy the build directory to any static hosting provider. Examples include **Netlify**, **Vercel**, and etc.

- **Netlify** (Recommended for React apps)
- **Vercel** (Great for fast and easy deployments)

For more detailed deployment instructions, refer to the documentation for your chosen hosting platform.

## Contributing

Contributions are welcome! Please fork the repository and make changes as you'd like. Ensure all contributions align with the project’s coding standards and include tests where applicable.

1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/YourFeature`).
3. Commit your Changes (`git commit -m 'Add YourFeature'`).
4. Push to the Branch (`git push origin feature/YourFeature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License.
