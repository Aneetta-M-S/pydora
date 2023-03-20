import { NavLink, Outlet } from 'react-router-dom';
import { AiFillHome, AiFillTrophy } from "react-icons/ai";
import { MdForum } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import './Navbar.css'

export const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="title">Pydora</div>
                <div className="nav_menu">
                    <NavLink className="nav_item" to="/learn">
                        <i><AiFillHome /></i>
                        <span>Dashboard</span>
                    </NavLink>
                    <NavLink className="nav_item" to="/leaderboard">
                        <i><AiFillTrophy /></i>
                        <span>Leaderboard</span>
                    </NavLink>
                    <NavLink className="nav_item" to="/forum">
                        <i><MdForum /></i>
                        <span>Forum</span>
                    </NavLink>
                    <NavLink className="nav_item" to="/profile">
                        <i><FaUser /></i>
                        <span>Profile</span>
                    </NavLink>
                </div>
                <div class="logout_btn">
                    <div class="logout_btn_text">Logout</div>
                    <div class="logout_btn_shadow"></div>
                </div>
            </div>

            <Outlet />
        </>
    )
}

