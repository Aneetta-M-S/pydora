import { Outlet } from 'react-router-dom';
import './Navbar.css'

export const Navbar = () => {
    return (
        <>
        <div className="navbar">
            <div className="title">Pydora</div>
            <div className="nav_menu">
                <div className="nav_item"></div>
                <div className="nav_item"></div>
                <div className="nav_item"></div>
                <div className="nav_item"></div>
                <div className="nav_item"></div>
            </div>
            <div className="logout_btn">Logout</div>
        </div>

        <Outlet />
        </>
    )
}

