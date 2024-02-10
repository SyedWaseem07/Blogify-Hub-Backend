import React, { useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { UserContext } from "../context/UserContext"

const Login = () => {
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })
    const [error, setError] = useState("");
    const navigate = useNavigate()
    const { currentUser, setCurrentUser } = useContext(UserContext);

    const loginUser = async (e) => {
        e.preventDefault();
        setError("");
        axios.post(`/api/v1/users/login`, userData)
            .then(res => {
                const loggedInUser = res.data.data;
                if (!loggedInUser) setError("Unable to register user")
                setCurrentUser(loggedInUser);
                navigate("/");
            })
            .catch(error => {
                const index = error.response.data.indexOf("<pre>")
                const Lastindex = error.response.data.indexOf("</pre>")
                const errMsg = error.response.data.substring(index + 5, Lastindex);
                setError(errMsg);
            })
    }

    const changeInputHandler = (e) => {
        setUserData((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }

    return (
        <section className="register">
            <div className="container">
                <h2>Sign In</h2>
                <form className="form login__form" onSubmit={loginUser}>
                    {error && <p className="form__error-message">{error}</p>}
                    <input type="text" name="email" placeholder="Email" value={userData.email}
                        onChange={changeInputHandler} autoFocus
                    />
                    <input type="Password" name="password" placeholder="Password" value={userData.password}
                        onChange={changeInputHandler}
                    />
                    <button type="submit" className="btn primary">Sign In</button>
                </form>
                <small>Don"t have an account?<Link to="/register"> sign up</Link></small>
            </div>
        </section>
    )
}

export default Login