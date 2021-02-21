import React from 'react';
import { Link } from 'react-router-dom';




const ErrorLogin = () => {
    return (

        <div className="col-lg-12 col-md-6 col-sm-12 d-flex justify-content-center" >

           <h4 style={{ margin: "10%" }}>
                You are not logged in. Please log in here  <Link to="/login"> LOGIN </Link>
             </h4>
        </div>
    )
}

export default ErrorLogin;


