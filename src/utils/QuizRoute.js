import { Outlet, Navigate } from "react-router";

import { useContext } from "react"
import { AuthContext } from '../contexts/DetailsContext';

const QuizRoutes = (props) => {
    const { userinfo } = useContext(AuthContext)
    console.log("QuizRoute: ", props.level)
    return (
        userinfo ? <Outlet /> : <Navigate to="/"/>
    )
    
}

export default QuizRoutes