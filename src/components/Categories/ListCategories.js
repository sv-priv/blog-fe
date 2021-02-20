import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ShowCategory from './ShowCategory';


class ListCategories extends React.Component{

    constructor (props){

        super(props);

        this.state = {
            categories: []
        }

        axios.get('http://localhost:3000/api/categories/', {
            headers: {
                Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlN0ZWZhbiIsImlhdCI6MTYxMzc4MTcyOX0.O3zJWLlLvu9xQlRDSJcd3-NXsQh0d9mWAfUn_S9_yuw"
            }
        }).then(response =>{

                this.setState({categories: response.data})
                console.log(this.state.categories);
                // console.log(response.data);
        });
    }


    render(){

        return(

            <div className="container">
            <div className="row" style={{ margin: "10%" }} >

               <div className="col-lg-12 col-md-6 col-sm-12 d-flex justify-content-center">
                   <h3 style={{ margin: "3%" }} >CATEGORIES</h3>

                   <button className="btn btn-primary text-light"><Link to="/categories/add" style={{ textDecoration: 'none', color: 'white' }}>Add Category</Link></button>
               </div>


               {
                    this.state.categories.map((category) => {

                      return  <ShowCategory data = { category } />
                    })
                }

           </div>
       </div>

        )
    }
}

export default ListCategories;