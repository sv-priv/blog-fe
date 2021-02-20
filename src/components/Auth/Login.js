import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Login extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            username: null,
            password: null
        }

        this.onFormSubmit = this.onFormSubmit.bind(this)

    }

    onFormSubmit(event){

        event.preventDefault();

        this.setState({
            username: event.target.elements.username.value,
            password : event.target.elements.password.value
        })

        const username = event.target.elements.username.value;
        const password = event.target.elements.password.value;

        axios.post('http://localhost:3000/api/auth/register', { username , password })
        .then((resp) => {
            console.log(resp);
            this.props.history.push("/posts");
        }
        ).catch(e => console.log(e));

            // <Redirect to="/login"></Redirect
    }


    render(){

        return (
            <div  className="col-lg-12 col-md-6 col-sm-12 d-flex justify-content-center" >

                <br></br>
                <form style={{ margin: "10%" }} onSubmit = { this.onFormSubmit }>
                    <div className="form-group">
                    <h3 >Login to enter the blog!</h3>

                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name="username" required placeholder="Enter username.."/>
                        <small  className="form-text text-muted">You must have an unique username</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" required placeholder="Password.."/>
                    </div>
                    <button type="submit" className="btn btn-primary" >Login</button>
                </form>

            </div>

        )


    }
}



export default Login;