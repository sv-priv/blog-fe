import React from 'react';
import {Link } from 'react-router-dom'

const AddPost = () => {
    return (

        <div className="col-lg-12 col-md-6 col-sm-12 d-flex justify-content-center" >

            <form>
                <div className="form-group">
                    <label for="exampleFormControlInput1">Title</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Post Title.."/>
                 </div>
                <div className="form-group">
                     <label for="exampleFormControlTextarea1">Content</label>
                     <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" placeholder="What's on your mind.."></textarea>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlSelect2">Category</label>
                    <select className="form-control">
                        <option>Default select</option>
                        <option>Default select</option>
                        <option>Default select</option>
                        <option>Default select</option>
                        <option>Default select</option>
                        <option>Default select</option>
                    </select>
                </div>
                <button className="btn btn-primary text-light"><Link to="/posts" style={{ textDecoration: 'none', color: 'white' }}>Add Post</Link></button>
             </form>
        </div>
    )
}

export default AddPost;