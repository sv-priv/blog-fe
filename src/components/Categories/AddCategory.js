import React from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';


class AddCategory extends React.Component{

    // static propTypes = {
    //     match: PropTypes.object.isRequired,
    //     location: PropTypes.object.isRequired,
    //     history: PropTypes.object.isRequired
    //   };



    constructor(props){
        super(props);


        const { match, location, history } = this.props;


        this.state = {
            name: null,
            toRedirect: false
        }


        this.onFormSubmit = this.onFormSubmit.bind(this)

    }

    redirectToTarget = () => {
        this.props.history.push(`/categories`)
      }

    onFormSubmit(event){

        event.preventDefault();

        this.setState({
            name: event.target.elements.name.value,
        });

        const name = event.target.elements.name.value;


        axios.post('https://blog-loka-be.herokuapp.com/api/categories/new', {name}, {
             headers: {
                Authorization: this.props.token
            }
        })
        .then((resp) => {
            console.log(resp);
            console.log("Category created");
            // this.redirectToTarget();
            this.setState({toRedirect: true})
        }
        ).catch(e => console.log(e));

    }

    render(){

        if(!this.props.token){
            return <Redirect to="/error-login"></Redirect>
        }

        if(this.state.toRedirect){
            return <Redirect to ="/categories"></Redirect>
        }

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