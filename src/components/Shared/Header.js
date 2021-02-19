import React from 'react';
import { Link }  from 'react-router-dom';


//if global token === null don't show header


class Header extends React.Component{

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
                     <Link to="/login"> <button className="btn btn-primary" type="submit">Login</button></Link>
                     <Link to="/logout"> <button className="btn btn-primary" type="submit">Logout</button></Link>
                   </div>
                </nav>
             </div>
        );
    }
}


export default Header;