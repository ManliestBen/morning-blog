import React, {Component} from 'react';
import './App.css';
import Nav from './Nav'
import Footer from './Footer'
import BlogForm from './BlogForm'

class App extends Component {
  
  state = {
    isShowing : true,
    posts : [
      {
        title : "My first confetti blog post.",
        content : "I love confetti!!!  It is the best!!!",
        user : "Ben"
      },
      {
        title: "Pandas are fun!",
        content:  "They are fun, but not as fun as confetti.",
        user: "CWill833"
      }
    ]

  }
   
  handleShowForm = event => {
    this.setState({
      isShowing : !this.state.isShowing
    })
  }
  render() {
    
    const title = <h1>Confetti Blog</h1>
    const composedPosts = this.state.posts.map((item, index) => {
      return (
        <li key={index} className='post'>
          <h3 className='postTitles'>{item.title}</h3>
          <p>{item.content}</p>
          <h6>{item.user}</h6>
        </li>
      )
    })
    return (
    <div className="App container">
      <Nav content="NAV"/>
        {this.state.isShowing ? <BlogForm handleToggle={this.handleShowForm} /> : <button onClick={this.handleShowForm}>Add Post</button>}
        <ul>{composedPosts}
        </ul>
        
      <Footer />
    </div>
  );
}}
export default App;
