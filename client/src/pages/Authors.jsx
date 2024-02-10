import React, { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import axios from "axios"
import Loader from "../pages/Loader"


const Authors = () => {
    const [authors, setAuthors] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true);
        const getAuthors = () => {
            axios.get(`/api/v1/users`)
                .then(res => {
                    setIsLoading(false);
                    setAuthors(res.data.data);
                })
                .catch(err => { })
            setIsLoading(false);
        }

        getAuthors();
    })

    if (isLoading) return <Loader />
    return (
        <section>
            {authors.length > 0 ? <div className="container authors__container">
                {
                    authors.map(({ _id, avatar, name, posts }) => <Link key={_id} to={`/posts/user/${_id}`} className="author">
                        <div>
                            <img src={avatar} alt="author avatar" className="author__avatar" />
                        </div>
                        <div className="author__info">
                            <h4> {name.toUpperCase()} </h4>
                            <p> {posts} </p>
                        </div>
                    </Link>)
                }
            </div> : <h2 className="center">No Authers Found</h2>}
        </section>
    )
}

export default Authors