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

        const token = localStorage.getItem('token');

        axios.get('http://blog-loka-be.herokuapp.com/api/posts/', {
            headers: {
                Authorization: token
            }
        }).then(response =>{

                this.setState({posts: response.data})
                console.log(this.state.posts);
                // console.log(response.data);
        });




    }

    componentDidMount(){

        const token = localStorage.getItem('token');

        axios.get('http://blog-loka-be.herokuapp.com/api/posts/', {
            headers: {
                Authorization: token
            }
        }).then(response =>{

                this.setState({posts: response.data})
                console.log(this.state.posts);
                // console.log(response.data);
        });
    }
    // componentDidUpdate(){
    //     const token = localStorage.getItem('token');

    //     axios.get('http://localhost:3000/api/posts/', {
    //         headers: {
    //             Authorization: token
    //         }
    //     }).then(response =>{

    //             this.setState({posts: response.data})
    //             console.log(this.state.posts);
    //             // console.log(response.data);
    //     });
    // }

    render (){

        return(

        <div className="container" >
            <div className="row" style={{ margin: "8%" }} >
            <div className="col-lg-12 col-md-6 col-sm-12 d-flex justify-content-center" style={{ marginBottom: "4%" }}>
                <h3 style={{ margin: "2%" }} >POSTS</h3>
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