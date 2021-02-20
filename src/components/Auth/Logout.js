import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

// delete global token, delete user by and then redirect to login
class Logout extends React.Component{

    constructor(props){
        super(props);

        localStorage.setItem('token', null);

    }

    render(){


       return  (
           <div>
               <h3>Logging out..</h3>

        {this.props.history.push("/login")}

           </div>

       )
    }

}

export default Logout;