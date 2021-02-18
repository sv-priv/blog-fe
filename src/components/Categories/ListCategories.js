import React from 'react';
import { Link } from 'react-router-dom';
import ShowCategory from './ShowCategory';

const ListCategories = () => {
    return (
        <div className="container">

            <div className="col-lg-12 col-md-6 col-sm-12 d-flex justify-content-center">
                <h1>CATEGORIES</h1>
                <button className="btn btn-primary text-light"><Link to="/categories/add" style={{ textDecoration: 'none', color: 'white' }}>Add Category</Link></button>
            </div>

            <ShowCategory></ShowCategory>
            <ShowCategory></ShowCategory>
            <ShowCategory></ShowCategory>
            <ShowCategory></ShowCategory>
            <ShowCategory></ShowCategory>

        </div>
    )
}

export default ListCategories;