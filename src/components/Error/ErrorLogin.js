import React from 'react';
import { Link } from 'react-router-dom';




const Error = () => {
    return (
        <div>
            You are not logged in. Please log in here  <Link to="/register"> LOGIN </Link>
        </div>
    )
}

export default Error;