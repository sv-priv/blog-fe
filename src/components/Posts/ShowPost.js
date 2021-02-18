import React from 'react';
import { Link } from 'react-router-dom'

const ShowPost = () => {
    return (

        <div className="col-lg-12 col-md-6 col-sm-12 d-flex justify-content-center " >
            <div class="card text-center">
                <div class="card-header">
                    Post Title
                </div>
                <div class="card-body">

                   <Link to="categories/showcategory"> <h5 class="card-title">Category</h5></Link>

                    <p class="card-text">With supporting text below as a natural lead-in to additional content. This is the post content....</p>

                </div>
            </div>
        </div>
    )
}

export default ShowPost;