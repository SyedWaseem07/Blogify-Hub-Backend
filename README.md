# Blogify Hub Backend

Welcome to the backend of a simple and customizable blog app named Blogify Hub - Where Ideas Thrive. 
The app is designed to allow users to create, edit, and delete blog posts, as well as browse through existing posts.
The app also allows browsing through different posts filtered by authors and categories.
It provides a user-friendly interface for managing blog content.

## Features

- **User Authentication:** Securely sign up and log in to start managing your own blog.

- **Create and Edit Posts:** Write and edit your blog posts with an easy-to-use editor.

- **Categories and Tags:** Organize your content by adding categories and tags to your posts.

- **Responsive Design:** Enjoy a seamless experience across devices - desktop, tablet, and mobile.

## API Documentation

- All api are tested using Postman and api documentation is also published using Postman, link is below
- **Link:** https://documenter.getpostman.com/view/32463080/2s9Yytg1Ae

## Technologies Used

- **Node.js**: Backend runtime environment.
- **Express.js**: Web application framework for Node.js.
- **MongoDB**: NoSQL database for data storage.
- **JWT**: JSON Web Tokens for authentication.
- **bcrypt**: for hashing the password of users.
- **Cookie-Parser**: for accessing and setting cookies in user's browser securely.
- **Multer**: for storing all the files uploaded on app in our local server.
- **Cloudinary**: for uploading all files from local server to cloudinary cloud.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/blog-app-backend.git
  
2. Install dependencies:
   ```bash
   npm install
   
3. Set up environment variables:
Create a .env file and add following content in it :
```bash
PORT=your_port
MONGO_DB_URI=your_DB_URL
CORS_ORIGIN=*

ACCESS_TOKEN_SECRET=your_access_token
ACCESS_TOKEN_EXPIRY=your_access_token_expiry

REFRESH_TOKEN_SECRET=your_refresh_token
REFRESH_TOKEN_EXPIRY=your_refresh_token_expiry

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

## Screenshots of API testing via postman

[![Screenshot 1](screenshots/Screenshot1.png)](screenshots/Screenshot1.png)
