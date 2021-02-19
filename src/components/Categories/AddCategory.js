import React from 'react';
import axios from 'axios';



class AddCategory extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            name: null
        }

        this.onFormSubmit = this.onFormSubmit.bind(this)

    }

    onFormSubmit(event){

        event.preventDefault();

        this.setState({
            name: event.target.elements.name.value,
        });

        const name = event.target.elements.name.value;

        axios.post('http://localhost:3000/api/categories/new', {name}, {
             headers: {
                Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlN0ZWZhbiIsImlhdCI6MTYxMzY2NjY1NX0.y8OJ7EYbt4Xk-E_QJTDL3lXgTYoo_JGT0XXQk_BxWNs'
            }
        })
        .then((resp) => {
            console.log(resp);
            console.log("Category created");
            this.props.history.push("/posts");
        }
        ).catch(e => console.log(e));

    }

    render(){

        return (

            <div className="col-lg-12 col-md-6 col-sm-12 d-flex justify-content-center container" >

                <form  style= {{margin: "10%"}} onSubmit= { this.onFormSubmit }>
                <h3>Add Category</h3>

                    <div className="form-group">
                        <input type="text" className="form-control" name="name" required placeholder="Add Category.."/>
                    </div>

                    <button type="submit" className="btn btn-primary">Add</button>

                </form>
            </div>
        )
    }

}

export default AddCategory;