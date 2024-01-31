import React, { useState, useEffect, useContext } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { FaEdit, FaCheck } from "react-icons/fa"
import axios from "axios"
import { UserContext } from "../context/UserContext"

const UserProfile = () => {
    const [avatar, setAvatar] = useState()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [currentPassword, setCurrentPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmNewPassword, setConfirmNewPassword] = useState("")
    const navigate = useNavigate();
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [isAvatarTouched, setIsAvatarTouched] = useState(false);
    const [error, setError] = useState();
    const { id } = useParams()


    useEffect(() => {
        const token = currentUser?.refreshToken;
        if (!token) navigate("/login");

        axios.get(`/api/v1/users/${id}`)
            .then(res => {
                setAvatar(res.data.data.avatar);
                setName(res.data.data.name);
                setEmail(res.data.data.email);
            })
    }, [])


    const changeAvatarHandler = (e) => {
        e.preventDefault();
        setIsAvatarTouched(false);
        const profileData = new FormData();
        profileData.set("avatar", avatar)

        axios.post(`/api/v1/users/change-avatar`, profileData)
            .then(res => {
                setAvatar(res.data.data.avatar);
            })
            .catch(err => {
                const index = err.response.data.indexOf("<pre>");
                const Lastindex = err.response.data.indexOf("</pre>");
                const errMsg = err.response.data.substring(index + 5, Lastindex);
                setError(errMsg);
            })

    }

    const editProfileHandler = (e) => {
        e.preventDefault()

        const editProfile = async () => {
            try {
                const response = await axios.post(`/api/v1/users/edit-profile`, {
                    name: name,
                    email: email,
                    currentPassword: currentPassword,
                    newPassword: newPassword,
                    confirmNewPassword: confirmNewPassword
                });
                setCurrentUser(response.data.data);
            } catch (error) {
                const index = error.response.data.indexOf("<pre>")
                const Lastindex = error.response.data.indexOf("</pre>")
                const errMsg = error.response.data.substring(index + 5, Lastindex);
                setError(errMsg);
            }
        }
        editProfile();
    }

    return (
        <section className="profile">
            <div className="container profile__container">
                <Link to={`/dashboard/${currentUser._id}`} className="btn">My Posts</Link>
                <div className="profile__details">
                    <div className="avatar__wrapper">
                        <div className="profile__avatar">
                            <img src={avatar} alt="profile picture" />
                        </div>

                        <form className="avatar__form">
                            <input type="file" name="avatar" id="avatar" accept="png, jpg, jpeg"
                                onChange={(e) => setAvatar(e.target.files[0])}
                            />
                            <label htmlFor="avatar" onClick={() => setIsAvatarTouched(true)}><FaEdit /></label>
                        </form>

                        {isAvatarTouched && <button className="profile__avatar-btn"
                            onClick={changeAvatarHandler}
                        ><FaCheck /></button>}
                    </div>

                    <h1>{currentUser.name}</h1>

                    <form className="form profile__form" onSubmit={editProfileHandler}>
                        
                        {error && <p className="form__error-message">
                            {error}
                        </p>}

                        <input type="text" placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} />

                        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />

                        <input type="password" placeholder="Current Password" value={currentPassword} onChange={e => setCurrentPassword(e.target.value)} />

                        <input type="password" placeholder="New Password" value={newPassword} onChange={e => setNewPassword(e.target.value)} />

                        <input type="password" placeholder="Confirm New Password" value={confirmNewPassword} onChange={e => setConfirmNewPassword(e.target.value)} />

                        <button type="submit" className="btn primary"
                        >Update Details</button>

                    </form>
                    
                </div>
            </div>
        </section>
    )
}

export default UserProfile