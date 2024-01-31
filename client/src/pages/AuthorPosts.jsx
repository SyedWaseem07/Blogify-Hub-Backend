import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import PostItem from "../components/PostItem"
import Loader from "./Loader"

const AuthorPosts = () => {
    const [allPosts, setAllPosts] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        const fetchPosts = () => {
            setIsLoading(true)
            axios.get(`/api/v1/posts/users/${id}`)
                .then(res => {
                    setIsLoading(false);
                    setAllPosts(res?.data.data);
                })
                .catch(err => { })
        }

        fetchPosts();
    }, [id])

    if (isLoading) return <Loader />
    return (
        <section>
            {allPosts.length > 0 ? <div className="container posts__container">
                {
                    allPosts.map(
                        ({ _id: id, thumbnail, category, title, desc, creator, createdAt }) => 
                            <PostItem key={id} id={id} thumbnail={thumbnail} title={title} category={category} desc={desc} creator={creator} createdAt={createdAt} />
                    )
                }
            </div> : <h2 className="center">No post found</h2>}
        </section>
    )
}

export default AuthorPosts