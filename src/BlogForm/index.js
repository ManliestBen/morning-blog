import React, { Component } from 'react';
import './BlogForm.css'

class BlogForm extends Component {
    state = {
        title : '',
        content: '',
        user: '',
    }
    
    
    handleOnChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    render() {
        return(
            <form className="blog-form">
                <h1>{this.state.title}</h1>
                <h1>{this.state.user}</h1>
                <h1>{this.state.content}</h1>
                <input 
                type="text" 
                name="title" 
                onChange={this.handleOnChange} 
                value={this.state.title} 
                />
                <input 
                type="text" 
                name="user" 
                onChange={this.handleOnChange} 
                value ={this.state.user} 
                />
                <input 
                type="text" 
                name="content" 
                onChange={this.handleOnChange} 
                value ={this.state.content} 
                />
            </form>
        )
    }
}

export default BlogForm