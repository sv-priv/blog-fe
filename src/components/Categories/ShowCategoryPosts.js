import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import axios  from 'axios'
import PropTypes from "prop-types";
import { withRouter } from "react-router";


import ShowPostNoCategory from '../Posts/ShowPostNoCategory'

//prakjam props onClick od parent ListPosts to ShowCategory with the category id

class ShowCategoryPosts  extends React.Component{

    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
      };



    constructor(props){
        super(props);

        // const {id} = this.props.location.data

        this.state = {
            posts: [],
            name: null
        }

        let id= this.props.location.params.id;
        // console.log(id);

        axios.get(`http://localhost:3000/api/categories/category-posts/${id}`, {
            headers: {
                Authorization: this.props.token
            }
        }).then(response =>{

                 this.setState({
                     posts: response.data.Posts,
                     name: response.data.name
                    })

        });
    }

    render(){

        console.log("props from show-category-posts",this.props);

        return(
        <div className="container" >
            <div className="row" style={{ margin: "10%" }} >
        <div className="col-lg-12 col-md-6 col-sm-12 d-flex justify-content-center " >
            <h3 style={{ margin: "3%" }}> Category name: { this.state.name }</h3>
            </div>

            {
                    this.state.posts.map((post) => {
                        console.log(post);
                      return  <ShowPostNoCategory data = { post } />
                    })
            }
        </div>
        </div>
        )}
}

export default withRouter(ShowCategoryPosts);

// const ShowTheLocationWithRouter = withRouter(ShowTheLocation);
