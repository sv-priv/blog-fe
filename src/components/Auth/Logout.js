import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

// delete global token, delete user by and then redirect to login
class Logout extends React.Component{

    constructor(props){
        super(props);

        localStorage.setItem('token', null);
        // oke

    }

    render(){

        if(!!this.props.token){
            this.props.setToken(null)
        }

       return  (
           <div>
               <h3>Logging out..</h3>


               <Redirect to='/login'/>;


           </div>

       )
    }

}

export default Logout;