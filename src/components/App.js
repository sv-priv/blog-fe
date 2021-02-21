import React from 'react';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom';
import AddCategory from './Categories/AddCategory'
import ListCategories from './Categories/ListCategories'
import ShowCategory from './Categories/ShowCategory'
import Login from './Auth/Login'
import AddPost from './Posts/AddPost'
import ListPosts from './Posts/ListPosts'
import ShowPost from './Posts/ShowPost'
import ErrorLogin from './Error/ErrorLogin'
import Header from './Shared/Header';
import Logout from './Auth/Logout';
import Register from  './Auth/Register'
import 'bootstrap/dist/css/bootstrap.css'
import '../style/CustomStyle.css';
import { createBrowserHistory } from "history";
import ShowCategoryPosts from './Categories/ShowCategoryPosts';
import Home from  './Home/Home'



class App extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            token: localStorage.getItem('tokenLocalStorage') || null
        }

    }

    setToken(token) {

        this.setState({token: token});
        localStorage.setItem('tokenLocalStorage', token)


    }
    componentDidUpdate(){
        this.state = {
            token: localStorage.getItem('tokenLocalStorage') || null
        }
    }


    render(){

        return(
            <div>
                <BrowserRouter >

                    <Header token = { this.state.token }/>


                    <Route path= "/" exact >
                        <Home token = { this.state.token }   />
                    </Route>
                    <Route path= "/posts" exact >
                        <ListPosts token = { this.state.token }   />
                    </Route>
                    <Route path= "/posts/add" exact >
                        <AddPost token = { this.state.token }  />
                    </Route>
                    <Route path= "/posts/show" exact >
                        <ShowPost token = { this.state.token }  />
                    </Route>
                    <Route path= "/categories" exact >
                        <ListCategories token = { this.state.token } />
                    </Route>
                    <Route path= "/categories/add" exact >
                        <AddCategory token = { this.state.token } />
                    </Route>
                    <Route path= "/categories/show" exact >
                        <ShowCategory token = { this.state.token }  />
                    </Route>
                    <Route path= "/categories/show-category-posts" exact >
                        <ShowCategoryPosts token = { this.state.token }  />
                    </Route>

                    <Route path= "/login" exact >
                        <Login token = { this.state.token } setToken={(token)=> this.setToken(token)}  />
                    </Route>

                    <Route path= "/logout" exact >
                        <Logout token = { this.state.token } setToken={(token)=> this.setToken(token)}  />
                    </Route>

                    <Route path= "/register" exact >
                        <Register token = { this.state.token } setToken={(token)=> this.setToken(token)}  />
                    </Route>

                    <Route path= "/error-login" exact component={ErrorLogin}/>

                </BrowserRouter>

            </div>
        )
    }


}

export default App;
