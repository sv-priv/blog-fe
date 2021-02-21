import React from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import ShowCategory from './ShowCategory';


class ListCategories extends React.Component{

    constructor (props){

        super(props);

        this.state = {
            categories: []
        }
    }

    componentDidMount(){


        axios.get('https://blog-loka-be.herokuapp.com/api/categories/', {
            headers: {
                Authorization: this.props.token
            }
        }).then(response =>{

                this.setState({categories: response.data})
                // console.log(this.state.categories);

                // console.log(this.state.token);
        });
    }


    render(){


        if(!this.props.token){
            return <Redirect to ="/error-login"></Redirect>
        }else{

            return(


                <div className="container">

                <div className="row" style={{ margin: "8%" }} >

                   <div className="col-lg-12 col-md-6 col-sm-12 d-flex justify-content-center" style={{ marginBottom: "5%" }}>
                       <h3 style={{ margin: "2%" }} >CATEGORIES</h3>

                       <button className="btn btn-primary text-light"><Link to="/categories/add" style={{ textDecoration: 'none', color: 'white' }}>Add Category</Link></button>
                   </div>


                   {
                        this.state.categories.map((category, idx) => {

                          return  <ShowCategory data = { category } token = { this.props.token } key={ idx } />
                        })
                    }

               </div>
           </div>

            )
        }
    }


}

export default ListCategories;