import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            You have gone missing, come back <Link to="/"> Home </Link>
        </div>
    )
}

export default Error;