import React from 'react';
import axios from 'axios';
import ShowPost from './ShowPost';
import { Link, Redirect } from 'react-router-dom';


class ListPosts extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            posts: []

        }

    }

    componentDidMount(){

    //     const token = localStorage.getItem('token');

    console.log("component did mount posts", this.props.token);
    axios.get('https://blog-loka-be.herokuapp.com/api/posts/', {

        headers: {
            Authorization: this.props.token
        }

    }).then(response =>{
            // console.log('posts then ', response.data);
            console.log("component did mount shows posts", response.data);
            this.setState({posts: response.data})

    });

    }


    render (){

        console.log(" render list posts");
        if(!this.props.token){
            return <Redirect to="/error-login"></Redirect>
        }

        return(

        <div className="container" >
            <div className="row" style={{ margin: "8%" }} >
            <div className="col-lg-12 col-md-6 col-sm-12 d-flex justify-content-center" style={{ marginBottom: "4%" }}>
                <h3 style={{ margin: "2%" }} >POSTS</h3>
                <button className="btn btn-primary text-light"><Link to="/posts/add" style={{ textDecoration: 'none', color: 'white' }}>Add Post</Link></button>
            </div>

                {
                    this.state.posts.map((post, idx) => {

                      return  <ShowPost data = { post } key={ idx } />
                    })
                }

            </div>
         </div>


         )
        };
    }




export default ListPosts;