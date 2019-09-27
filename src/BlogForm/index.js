import React, { Component } from 'react';

class BlogForm extends Component {
    state = {
        title : ''
    }
    
    
    handleOnChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    render() {
        return(
            <form className="blogform">
                <h1>{this.state.title}</h1>
                <input type="text" name="title" onChange={this.handleOnChange} value={this.state.title} />
            </form>
        )
    }
}

export default BlogForm