import React from 'react';
import axios  from 'axios'
import ShowPostNoCategory from '../Posts/ShowPostNoCategory'

//prakjam props onClick od parent ListPosts to ShowCategory with the category id

class ShowCategoryPosts  extends React.Component{

    //this.props.id

    constructor(props){
        super(props);

        const {id} = props.location.state

        this.state = {
            posts: [],
            name: null
        }

        axios.get(`http://localhost:3000/api/categories/category-posts/${id}`, {
            headers: {
                Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlN0ZWZhbiIsImlhdCI6MTYxMzc4MTcyOX0.O3zJWLlLvu9xQlRDSJcd3-NXsQh0d9mWAfUn_S9_yuw"
            }
        }).then(response =>{

                 this.setState({
                     posts: response.data.Posts,
                     name: response.data.name
                    })

                // console.log(this.state.data.length);
                console.log(response.data);
        });
    }

    render(){
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

export default ShowCategoryPosts;