import React, { useState, useEffect, useContext } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios"
import { UserContext } from "../context/UserContext"
import Loader from "./Loader";


const DeletePost = ({ postId }) => {
    const [posts, setPosts] = useState()
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { currentUser } = useContext(UserContext);
    const location = useLocation();
    
    useEffect(() => {
        const token = currentUser?.refreshToken;
        if (!token) navigate("/login");
    }, [])

    const deletePostHandler = (postId) => {
        setIsLoading(true);
        axios.delete(`/api/v1/posts/${postId}`)
            .then(res => {
                if (res.data.statusCode === 200) {
                    if (location.pathname === `/dashboard/${currentUser?._id}`) navigate(0)
                    else navigate("/")
                }
                setIsLoading(false);
            })
            .catch(err => { })
    }

    if(isLoading) return <Loader />
    
    return (
        <Link className="btn sm danger"
            onClick={() => deletePostHandler(postId)}
        >Delete</Link>
    )
}

export default DeletePost