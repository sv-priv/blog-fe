import React from 'react';
import axios from 'axios';
import { Redirect , Link} from 'react-router-dom';
import { createBrowserHistory } from "history";


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
        // const token = event.target.elements.token.value;

        axios.post('http://blog-loka-be.herokuapp.com/api/auth/login', { username , password })
        .then((resp) => {
            console.log(resp);
            // console.log(resp.data[0].token);
            localStorage.setItem('token', resp.data[0].token )
            this.props.history.push("/posts");

        }
        ).catch(e => console.log(e));
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
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" required placeholder="Password.."/>
                    </div>
                    <button type="submit" className="btn btn-primary" >Login</button>
                    <h6>Don't have an account?  <Link to="/register" >Register</Link></h6>

                </form>

            </div>

        )


    }
}



export default Login;