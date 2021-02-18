import React from 'react';

const AddCategory = () => {
    return (

        <div className="col-lg-12 col-md-6 col-sm-12 d-flex justify-content-center container" >

            <div>
                <h2>Add Category</h2>
            </div>
            <br></br>
            <form>
                <div className="form-group">
                    <label for="exampleFormControlInput1">Category</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Add Category.."/>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>

            </form>
        </div>
    )
}

export default AddCategory;