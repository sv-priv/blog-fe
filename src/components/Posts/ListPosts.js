import React from 'react';
import ShowPost from './ShowPost';
import { Link } from 'react-router-dom';

const ListPosts = () => {
    return (
        <div className="container">
            <div className="row">
            <div className="col-lg-12 col-md-6 col-sm-12 d-flex justify-content-center ">
                <h1>POSTS</h1>
                <button className="btn btn-primary text-light"><Link to="/posts/add" style={{ textDecoration: 'none', color: 'white' }}>Add Post</Link></button>




            </div>

            <ShowPost></ShowPost>
            <ShowPost></ShowPost>
            <ShowPost></ShowPost>
            <ShowPost></ShowPost>
            <ShowPost></ShowPost>


        </div>
        </div>
    )
}

export default ListPosts;