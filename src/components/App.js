import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import AddCategory from './Categories/AddCategory'
import DeleteCategory from './Categories/DeleteCategory'
import EditCategory from './Categories/EditCategory'
import ListCategories from './Categories/ListCategories'
import ShowCategory from './Categories/ShowCategory'
import Login from './Login/Login'
import AddPost from './Posts/AddPost'
import DeletePost from './Posts/DeletePost'
import EditPost from './Posts/EditPost'
import ListPosts from './Posts/ListPosts'
import ShowPost from './Posts/ShowPost'
import Error from './Error/Error'
import Header from './Shared/Header';
import 'bootstrap/dist/css/bootstrap.css'

const App = () =>{
    return(
        <div>
            <BrowserRouter>
            <Header/>
                <Route path= "/" exact component={ListPosts}/>
                <Route path= "/posts" exact component={ListPosts}/>
                <Route path= "/posts/add" exact component={AddPost}/>
                <Route path= "/posts/show" exact component={ShowPost}/>
                <Route path= "/posts/edit" exact component={EditPost}/>
                <Route path= "/posts/delete" exact component={DeletePost}/>
                <Route path= "/categories" exact component={ListCategories}/>
                <Route path= "/categories/add" exact component={AddCategory}/>
                <Route path= "/categories/show" exact component={ShowCategory}/>
                <Route path= "/categories/edit" exact component={EditCategory}/>
                <Route path= "/categories/delete" exact component={DeleteCategory}/>
                <Route path= "/login" exact component={Login}/>
                {/* <Route path ="/*" exact component={Error}/> */}

            </BrowserRouter>

        </div>
    )
};

export default App;
