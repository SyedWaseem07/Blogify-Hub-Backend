import React, { useState, useContext, useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { UserContext } from "../context/UserContext"
import Loader from "./Loader"
import DeletePost from "./DeletePost"
const DashBoard = () => {
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { currentUser } = useContext(UserContext);
    const { id } = useParams();

    useEffect(() => {
        const token = currentUser?.refreshToken;
        if (!token) navigate("/login");

        setIsLoading(true);
        axios.get(`/api/v1/posts/users/${id}`)
            .then(res => {
                setIsLoading(false);
                setPosts(res.data.data);
            })
            .catch(err => { })
    }, [])

    if (isLoading) return <Loader />
    return (
        <section className="dashboard">
            {
                posts.length ? <div className="container dashboard__container">
                    {
                        posts.map(post => <article className="dashboard__post" key={post._id}>
                            <div className="dashboard__post-info">
                                <div className="dashboard__post-thumbnail">
                                    <img src={post.thumbnail} alt="post thumbnail" />
                                </div>
                                <h5>{post.title}</h5>
                            </div>
                            <div className="dashboard__post-actions">
                                <Link to={`/posts/${post._id}`} className="btn sm" >View</Link>
                                <Link to={`/posts/${post._id}/edit`} className="btn sm primary" >Edit</Link>
                                <DeletePost postId={post._id} />
                            </div>
                        </article>)
                    }
                </div> : <h2 className="center">You have no posts</h2>
            }
        </section>
    )
}

export default DashBoard