import React, { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import { AiOutlineClose } from "react-icons/ai"
import { UserContext } from "../context/UserContext"
import Logo from "../images/logo.png"


const Header = () => {
    const [isNavShowing, setIsNavShowing] = useState(window.innerWidth > 800);
    const { currentUser } = useContext(UserContext);

    const closeNavBarHandler = () => {
        if(window.innerWidth < 800)  setIsNavShowing(false);
    }

    return (
        <nav>
            <div className="container nav__container">
                <Link to="/" className="nav__logo" onClick={closeNavBarHandler}>
                    <img src={Logo} alt="Navbar logo" />
                </Link>
                {currentUser && isNavShowing && <ul className="nav__menu">
                    <li><Link to={`/profile/${currentUser?._id}`} onClick={closeNavBarHandler}>{currentUser.name.toUpperCase()}</Link></li>
                    <li><Link to="/create" onClick={closeNavBarHandler}>Create Post</Link></li>
                    <li><Link to="/authors" onClick={closeNavBarHandler}>Authors</Link></li>
                    <li><Link to="/logout" onClick={closeNavBarHandler}>Logout</Link></li>
                </ul>
                }

                {!currentUser && isNavShowing && <ul className="nav__menu">
                    <li><Link to="/authors" onClick={closeNavBarHandler}>Authors</Link></li>
                    <li><Link to="/login" onClick={closeNavBarHandler}>Login</Link></li>
                </ul>
                }
                <button className="nav__toggle-btn"
                    onClick={() => setIsNavShowing(prev => !prev)}>
                    {
                        isNavShowing ? <AiOutlineClose /> : <FaBars />
                    }
                </button>
            </div>
        </nav>
    )
}

export default Header