import React, { useState, useContext, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import PostAuthor from "../components/PostAuthor"
import Loader from "../pages/Loader"
import DeletePost from "../pages/DeletePost"
import { UserContext } from "../context/UserContext"
import axios from "axios"

const PostDetails = () => {
    const {id} = useParams()
    const [post, setPost] = useState(null)
    const [creatorId, setCreatorId] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { currentUser } = useContext(UserContext);

    useEffect(() => {
        setIsLoading(true);
        axios.get(`/api/v1/posts/${id}`)
        .then(res => {
            setIsLoading(false);
            setPost(res.data.data);
            setCreatorId(res.data.data.creator);
        })
        .catch(err => {
            setError(error);
        })
    }, [])

    if(isLoading) return <Loader />

  return (
    <section className="post__detail">
        {error && <p className="error">{error}</p>}
        { !error && post && <div className="container post-detail__container">
            <div className="post__detail-header">
                <PostAuthor creator={post.creator} createdAt={post.createdAt} />
                {(currentUser?._id === creatorId) && <div className="post__detail-buttons">
                    <Link to={`/posts/${id}/edit`} className="btn sm primary">Edit</Link>
                    <DeletePost postId={id} />
                </div>}
            </div>
            <h1>{post.title}</h1>
            <div className="post__detail-thumbnail">
                <img src={post.thumbnail} alt="" />
            </div>
            <p dangerouslySetInnerHTML={{__html: post.description}} />
        </div>
        }
    </section>
  )
}

export default PostDetails