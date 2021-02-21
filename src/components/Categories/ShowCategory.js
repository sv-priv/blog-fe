import React from 'react';
import axios  from 'axios'
import { Link , Redirect} from 'react-router-dom'

//prakjam props onClick od parent ListPosts to ShowCategory with the category id

class ShowCategory  extends React.Component{

    //this.props.id

    constructor(props){
        super(props);

        // const id = this.props.id;
        this.state ={
            name: this.props.data.name,
            postsNum: this.props.data.Posts.length,
            id: this.props.data.id
        }

        console.log(this.state.postsNum);

    }

    render(){


        if(!this.props.token){
            return <Redirect to="/error-login"></Redirect>
        }

        console.log("props from show-category",this.props);
        return(
        <div className="col-lg-12 col-md-6 col-sm-12 d-flex justify-content-center " >
            <div className="card text-center" style={{ margin: "3%", minWidth:"300px", minHeight:"100px"}}>
                <div className="card-header">
                    {this.state.name}
                </div>
                <div className="card-body">
                    <p>Number of posts: { this.state.postsNum }</p>
                    <Link to={{ pathname: "/categories/show-category-posts",  params: { id: this.state.id }} }> <h5 className="card-title"></h5>Visit category</Link>
                </div>
            </div>
        </div>
        )}
}

export default ShowCategory;