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
        const token = localStorage.getItem('token');


        axios.post('https://blog-loka-be.herokuapp.com/api/categories/new', {name}, {
             headers: {
                Authorization: token
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

                <form  style= {{margin: "5%"}} onSubmit= { this.onFormSubmit }>
                <h3 style={{ margin: "6%", textAlign: "center"}} > Add Category</h3>

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