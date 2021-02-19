import React from 'react';
import axios from 'axios';
import ShowPost from './ShowPost';
import { Link } from 'react-router-dom';



class ListPosts extends React.Component{


    constructor(props){
        super(props);

        this.state = {
            data: []
        }

        axios.get('http://localhost:3000/api/posts/', {
            headers: {
                Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlN0ZWZhbiIsImlhdCI6MTYxMzY2NjY1NX0.y8OJ7EYbt4Xk-E_QJTDL3lXgTYoo_JGT0XXQk_BxWNs'
            }
        }).then(response =>{

                this.setState({data: response.data})
                console.log(this.state.data.length);
                console.log(response.data);
        });

    }

    render (){

        return(

        <div className="container">
            <div className="row">
            <div className="col-lg-12 col-md-6 col-sm-12 d-flex justify-content-center ">
                <h1>POSTS</h1>
                <button className="btn btn-primary text-light"><Link to="/posts/add" style={{ textDecoration: 'none', color: 'white' }}>Add Post</Link></button>
            </div>

            </div>
         </div>


         )

        //  const posts = this.state.data.map({

        //     return(
        //         <div>
        //         <ShowPost></ShowPost>
        //         <ShowPost></ShowPost>
        //         <ShowPost></ShowPost>
        //         <ShowPost></ShowPost>
        //         <ShowPost></ShowPost>

        //         </div>

        //     );


        };

}


export default ListPosts;