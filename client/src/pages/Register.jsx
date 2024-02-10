import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

const Register = () => {
    const [error, setError] = useState("");
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const navigate = useNavigate()

    const changeInputHandler = (e) => {
        setUserData((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }

    const registerUser = async (e) => {
        e.preventDefault();
        setError("");

        axios.post(`/api/v1/users/register`, userData)
            .then(response => {
                const newUser = response?.data
                if (!newUser) setError("Unable to register user")
                else navigate("/login");
            })
            .catch(error => {
                const index = error.response.data.indexOf("<pre>")
                const Lastindex = error.response.data.indexOf("</pre>")
                const errMsg = error.response.data.substring(index + 5, Lastindex);
                setError(errMsg);
        })
    }

    return (
        <section className="register">
            <div className="container">
                <h2>Sign Up</h2>
                <form className="form register__form" onSubmit={registerUser}>
                    {error && <p className="form__error-message">{error}</p>}
                    <input type="text" name="name" placeholder="Full Name" value={userData.name}
                        onChange={changeInputHandler}
                    />
                    <input type="text" name="email" placeholder="Email" value={userData.email}
                        onChange={changeInputHandler}
                    />
                    <input type="Password" name="password" placeholder="Password" value={userData.password}
                        onChange={changeInputHandler}
                    />
                    <input type="Password" name="confirmPassword" placeholder="Confirm Password" value={userData.confirmPassword}
                        onChange={changeInputHandler}
                    />
                    <button type="submit" className="btn primary">Register</button>
                </form>
                <small>Already have an account?<Link to="/login"> sign in</Link></small>
            </div>
        </section>
    )
}

export default Register