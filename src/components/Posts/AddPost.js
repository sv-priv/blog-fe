import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'


class AddPost extends React.Component {


    constructor(props){
        super(props);

        this.state = {
            title: null,
            content: null,
            category: null,
            data: null,
            categories: []
        }
        const token = localStorage.getItem('token');


        this.onFormSubmit = this.onFormSubmit.bind(this);

        axios.get('http://localhost:3000/api/categories/', {
                headers: {
                    Authorization: token
                }
            }).then(response =>{
                    this.setState({data: response.data})

                    const categoriesData = [];

                    for (let i = 0; i < response.data.length; i++) {

                            categoriesData.push({

                                id: response.data[i].id,
                                name: response.data[i].name

                            });
                    }
                    this.setState({categories: categoriesData})
                    // console.log(categoriesData);
                    // console.log(response.data);
            });

    }



    onFormSubmit(event){

        event.preventDefault();

        this.setState({
            title: event.target.elements.title.value,
            content: event.target.elements.content.value,
            category: event.target.elements.category.value,

        })

        const title = event.target.elements.title.value;
        const content = event.target.elements.content.value;
        const CategoryId = event.target.elements.category.value;

        const token = localStorage.getItem('token');

        axios.post('http://localhost:3000/api/posts/new', { title, content, CategoryId },{
        headers: {
            Authorization: token
        }
        })
        .then((resp) => {
            console.log(resp);
            console.log("Post created");
            this.props.history.push("/posts");
        }
        ).catch(e => console.log(e));

    }

    render(){
        return (
            <div className="col-lg-12 col-md-6 col-sm-12 d-flex justify-content-center" >

                <form style={{margin: "5%"}} onSubmit={ this.onFormSubmit }>

                    <h3 style={{ margin: "6%", textAlign: "center"}} >Add new post </h3>

                    <div className="form-group" >
                        <label htmlFor="title">Title</label>
                        <input type="text" className="form-control" name="title" required placeholder="Post Title.."/>
                     </div>

                    <div className="form-group">
                         <label htmlFor="content">Content</label>
                         <textarea className="form-control" name="content" rows="4" required placeholder="What's on your mind.."></textarea>
                    </div>

                    <div className="form-group">

                        <label htmlFor="category">Category</label>
                        <select className="form-control" name="category" required>

                            {
                                this.state.categories.map((option) => (
                                <option value={option.id}>{ option.name }</option>
                                ))
                            }

                        </select>
                    </div>

                    <button className="btn btn-primary text-light">Add</button>
                 </form>
            </div>
            //when post is added setTimeout to write that a post has been added and redirect to posts page
            // same for add
        );
    }
}


export default AddPost;