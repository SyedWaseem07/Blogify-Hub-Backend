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
```
## Screenshots of API testing via postman

### Users API's
- Get all authors API
![Screenshot1](https://github.com/SyedWaseem07/Blogify-Hub-Backend/assets/125558233/1e1e2fc6-5931-4301-95be-e26729121419)

- Register User API
![Screenshot2](https://github.com/SyedWaseem07/Blogify-Hub/assets/125558233/0a326c27-a81e-429f-b0d7-e2c65d611b6d)

- Login User API
![Screenshot3](https://github.com/SyedWaseem07/Blogify-Hub/assets/125558233/f705fb68-0edf-487a-9571-dc4dd9fe7f30)

- Logout User API
![Screenshot4](https://github.com/SyedWaseem07/Blogify-Hub/assets/125558233/29d44b33-68fe-4b90-b35b-53b6f1acc2e8)

- Change User Avatar API
![Screenshot5](https://github.com/SyedWaseem07/Blogify-Hub/assets/125558233/d51fc9fd-5d85-451f-a622-6f658ebff90f)

- Update User Profile API
![Screenshot6](https://github.com/SyedWaseem07/Blogify-Hub/assets/125558233/12ab8d5c-c1a0-428d-acfb-1957c960a86b)

- Get User Profile API
![Screenshot7](https://github.com/SyedWaseem07/Blogify-Hub/assets/125558233/e599dd34-29a1-4377-b264-3af8df6ca03e)

### Posts API's

- Get all post API
![Screenshot8](https://github.com/SyedWaseem07/Blogify-Hub/assets/125558233/ece7ab18-ff4e-402b-a36c-ca19d5e48ab0)

- Create post API
![Screenshot9](https://github.com/SyedWaseem07/Blogify-Hub/assets/125558233/23f06a31-678e-4845-b40e-986d9826f4df)

- Get single post API
![Screenshot10](https://github.com/SyedWaseem07/Blogify-Hub/assets/125558233/fd9081a8-0583-42f9-a990-a7c5733f1665)

- Edit single post API
![Screenshot11](https://github.com/SyedWaseem07/Blogify-Hub/assets/125558233/0afea078-af44-483d-ac5c-5e66ba3b7c22)

- Delete single post API
![Screenshot12](https://github.com/SyedWaseem07/Blogify-Hub/assets/125558233/0b71f942-78ce-45f2-a334-bb312cecd5d2)

- Get posts by Category API
![Screenshot13](https://github.com/SyedWaseem07/Blogify-Hub/assets/125558233/ddb74022-73e4-4bdc-8d7e-b7a6584022fd)

- Get posts by Author API
![Screenshot14](https://github.com/SyedWaseem07/Blogify-Hub/assets/125558233/582e2b30-6612-4c84-912c-70e3dfae83fb)
