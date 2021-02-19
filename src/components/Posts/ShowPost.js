import React from 'react';
import { Link } from 'react-router-dom'

const ShowPost = () => {
    return (

        <div className="col-lg-12 col-md-6 col-sm-12 d-flex justify-content-center " >
            <div className="card text-center">
                <div className="card-header">
                    Post Title
                </div>
                <div className="card-body">

                   <Link to="categories/showcategory"> <h5 className="card-title">Category</h5></Link>

                    <p className="card-text">With supporting text below as a natural lead-in to additional content. This is the post content....</p>

                </div>
            </div>
        </div>
    )
}

export default ShowPost;