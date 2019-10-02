import React, { Component } from 'react';
import './BlogForm.css'
import PropTypes from 'prop-types';

class BlogForm extends Component {
    state = {
        title : '',
        post: '',
        author: '',
    }
    
    
    handleOnChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    
    handleSubmit = event => {
        event.preventDefault()
        this.props.handleAddPost({...this.state})
    }

    render() {
        return(
            <form className="blog-form" onSubmit={this.handleSubmit}>
                
            <div className='post-title-author'>
                
                <div>
                <label> New Post </label>
                <input 
                type="text" 
                name="title" 
                onChange={this.handleOnChange} 
                value={this.state.title} 
                />
                </div>
                <div>
                <label> Author </label>
                <input 
                type="text" 
                name="author" 
                onChange={this.handleOnChange} 
                value ={this.state.author} 
                />
                </div>
            </div>
                <label> Post </label>
                <textarea 
                type="text" 
                name="post" 
                onChange={this.handleOnChange} 
                value ={this.state.post} 
                />
                <input type='submit' value='Add'></input>
                <button className='button-primary' onClick={this.props.handleToggle} >Close</button>
            </form>
        )
    }
}

export default BlogForm

BlogForm.propTypes = {
    handleToggle : PropTypes.func,
    handleAddPost : PropTypes.func
}