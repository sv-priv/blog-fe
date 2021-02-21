import React from 'react';
import { Link , Redirect} from 'react-router-dom'


class ShowPostNoCategory extends React.Component{


    constructor(props){
        super(props);

        this.state = {

            title: this.props.data.title,
            content: this.props.data.content,
        }
        // console.log(this.props.data.title);


    }

    render(){



        return (

            <div className="col-lg-12 col-md-6 col-sm-12 d-flex justify-content-center " >
                <div className="card text-center"  style={{ margin: "3%", minWidth:"350px", minHeight:"150px",minWidth:"350px" }}>
                    <div className="card-header">
                        { this.state.title }
                    </div>
                    <div className="card-body">
                        <p className="card-text">{this.state.content} </p>

                    </div>
                </div>
            </div>

        )

    }

}


export default ShowPostNoCategory;