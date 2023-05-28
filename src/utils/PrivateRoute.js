import { Outlet, Navigate } from "react-router";

import { useContext } from "react"
import { AuthContext } from '../contexts/DetailsContext';

const PrivateRoutes = () => {
    const { user } = useContext(AuthContext)
    return (
        user ? <Outlet /> : <Navigate to="/"/>
    )
    
}

export default PrivateRoutes