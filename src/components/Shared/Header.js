import React from 'react';
import { Link , Redirect }  from 'react-router-dom';
import Logout from '../Auth/Logout';

//if global token === null don't show header

class Header extends React.Component{


    constructor(props){
        super(props);

        this.state = {
            hasToken: false
        }

    }

    render(){


        return (
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link to= "/posts" className="navbar-brand" >LOKA</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav mr-auto">
                         <li className="nav-item active">
                            <Link to= "/posts" className="navbar-brand">Posts</Link>
                        </li>
                         <li className="nav-item">
                            <Link to= "/categories" className="navbar-brand" >Categories</Link>
                        </li>
                       </ul>


                       {this.props.token ? <Link  style= {{ margin:"%"}} to="/logout"> <button className="btn btn-primary" type="submit">Logout</button></Link> :
                       <div>
                       <Link style= {{ margin:"1%"}} to="/register"> <button className="btn btn-primary" type="submit" >Register</button></Link>{"\n"}
                                {/* <Link to="/login" style= {{ margin:"1%"}} > <button className="btn btn-primary" type="submit" >Login</button></Link> */}
                        </div>
                       }








                   </div>
                </nav>
             </div>
        );
    }
}


export default Header;