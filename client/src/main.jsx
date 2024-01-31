import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import Layout from"./components/Layout"

import {
    AuthorPosts, Authors,
    CategoryPost, CreatePost, DashBoard,
    DeletePost, EditPost, ErrorPage,
    Home, Loader, Login, 
    Logout, PostDetails, Register,
    UserProfile
} from "./pages/index"

import UserProvider from "./context/UserContext"
import './index.css'

if(process.env.NODE_ENV === "production")  disableReactDevTools();

const router = createBrowserRouter([
    {
        path: "/",
        element: <UserProvider> <Layout /> </UserProvider>,
        errorElement: <ErrorPage />,
        children: [
            {index: true, element: <Home />},
            {path: "posts/:id", element: <PostDetails />},
            {path: "register", element: <Register />},
            {path: "login", element: <Login />},
            {path: "profile/:id", element: <UserProfile />},
            {path: "authors", element: <Authors />},
            {path: "create", element: <CreatePost />},
            {path: "posts/:id/edit", element: <EditPost />},
            {path: "posts/:id/delete", element: <DeletePost />},
            {path: "posts/categories/:category", element: <CategoryPost />},
            {path: "posts/user/:id", element: <AuthorPosts />},
            {path: "dashboard/:id", element: <DashBoard />},
            {path: "logout", element: <Logout />},
        ]
    }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>,
)
