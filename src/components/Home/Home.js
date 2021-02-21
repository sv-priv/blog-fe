
import React from 'react';
import axios  from 'axios'
import { Link , Redirect} from 'react-router-dom'


class Home  extends React.Component{

    //this.props.id

    constructor(props){
        super(props);



    }

    render(){

        if(!this.props.token){
            return <Redirect to="/login"></Redirect>
        }
        return <Redirect to="/posts"></Redirect>

    }
}

export default Home;