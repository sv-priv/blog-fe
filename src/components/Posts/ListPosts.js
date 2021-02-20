import React from 'react';
import axios from 'axios';
import ShowPost from './ShowPost';
import { Link } from 'react-router-dom';



class ListPosts extends React.Component{


    constructor(props){
        super(props);

        this.state = {
            posts: []
        }

        axios.get('http://localhost:3000/api/posts/', {
            headers: {
                Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlN0ZWZhbiIsImlhdCI6MTYxMzc4MTcyOX0.O3zJWLlLvu9xQlRDSJcd3-NXsQh0d9mWAfUn_S9_yuw"
            }
        }).then(response =>{

                this.setState({posts: response.data})
                console.log(this.state.posts);
                // console.log(response.data);
        });



    }

    render (){

        return(

        <div className="container" >
            <div className="row" style={{ margin: "10%" }} >
            <div className="col-lg-12 col-md-6 col-sm-12 d-flex justify-content-center ">
                <h3 style={{ margin: "3%" }} >POSTS</h3>
                <button className="btn btn-primary text-light"><Link to="/posts/add" style={{ textDecoration: 'none', color: 'white' }}>Add Post</Link></button>
            </div>

                {
                    this.state.posts.map((post) => {

                      return  <ShowPost data = { post } />
                    })
                }

            </div>
         </div>


         )

        //  const posts = this.state.data.map({

        //     return(
        //         <div>
        //         <ShowPost></ShowPost>
        //         <ShowPost></ShowPost>
        //         <ShowPost></ShowPost>
        //         <ShowPost></ShowPost>
        //         <ShowPost></ShowPost>

        //         </div>

        //     );


        };

}


export default ListPosts;