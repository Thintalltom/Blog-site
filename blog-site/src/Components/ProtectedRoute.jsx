import React,{useContext, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userContext } from './Context/Context'
const ProtectedRoute = ({children}) => {
    const navigate = useNavigate();
    const { user } = useContext(userContext);

    useEffect(() => {
        // Redirect to '/signup' if user is not logged in
        if (!user) {
            navigate('/signup');
        }
    }, [user, navigate]);

    return children;
}

export default ProtectedRoute