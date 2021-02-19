import React from 'react';
import axios  from 'axios'

//prakjam props onClick od parent ListPosts to ShowCategory with the category id

class ShowCategory  extends React.Component{

    //this.props.id

    constructor(props){
        super(props);

        // const id = this.props.id;
        const id=1;

        axios.get(`http://localhost:3000/api/categories/category-posts/:${id}`, {
            headers: {
                Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlN0ZWZhbiIsImlhdCI6MTYxMzY2NjY1NX0.y8OJ7EYbt4Xk-E_QJTDL3lXgTYoo_JGT0XXQk_BxWNs'
            }
        }).then(response =>{

                // this.setState({data: response.data})
                // console.log(this.state.data.length);
                console.log(response);
        });
    }

    render(){
        return(
        <div className="col-lg-12 col-md-6 col-sm-12 d-flex justify-content-center " >
            <div className="card text-center">
                <div className="card-header">
                    Category number: x
                </div>
                <div className="card-body">
                    <h5 className="card-title"></h5>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
        )}
}

export default ShowCategory;