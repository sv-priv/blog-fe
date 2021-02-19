import React from 'react';
import { Link } from 'react-router-dom';
import ShowCategory from './ShowCategory';

const ListCategories = () => {
    return (
        <div style={{paddingTop: '5%'}} className="container">
            <div className="col-lg-12 col-md-6 col-sm-12 d-flex justify-content-center">
            <h3>CATEGORIES</h3>

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