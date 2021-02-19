import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

// delete global token, delete user by and then redirect to login
class Logout extends React.Component{

    constructor(props){
        super(props);


    }

    render(){

        this.props.history.push("/login");
    }

}