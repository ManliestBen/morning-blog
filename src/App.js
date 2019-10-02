import React, {Component} from 'react';
import './App.css';
import Nav from './Nav'
import Footer from './Footer'
import BlogForm from './BlogForm'
import Post from './Post';

class App extends Component {
  
  state = {
    isShowing : true,
    posts : []

  }
  
  componentDidMount = () => {
    getAll()
      .then(results => {
        this.setState({posts: [...results]})
      })
  }

  handleShowForm = event => {
    this.setState({
      isShowing : !this.state.isShowing
    })
  }

  // update state and pass method down to another component

  handleAddPost = ({title, author, post}) => {
    const url = 'http://localhost:8000/api/post'
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({title, author, post})
    }
    handleVerbs(url, options).then(results=>
      this.setState({
        posts: [results, ...this.state.posts]
      })
      )
  }

  handleDelete = id => {
    let newState = this.state.posts.filter(item => this.state.posts[id] !== item)
    this.setState({
      posts: newState
    })
  }
  render() {
    
    const title = <h1>Confetti Blog</h1>
    const composedPosts = this.state.posts.map((item, index) => {
      return (
        <Post key={index} 
              title={item.title} 
              user={item.author} 
              content={item.post} 
              handleDelete={this.handleDelete}
              id={index} 
              />
      )
    })
    return (
    <div className="App container">
      <Nav content="NAV"/>
        {this.state.isShowing ? 
          <BlogForm 
            handleToggle={this.handleShowForm} 
            handleAddPost={this.handleAddPost} 
          /> : <button onClick={this.handleShowForm}>Add Post</button>}
        <ul>{composedPosts}
        </ul>
        
      <Footer />
    </div>
  );
}}
export default App;

async function getAll () {
  const url = 'http://localhost:8000/api/posts'
  const initialFetch = await fetch(url)
  const fetchJSON = await initialFetch.json()
  return await fetchJSON
}

async function handleVerbs (url, options) {
  
  const initialFetch = await fetch(url, options)
  const fetchJSON = await initialFetch.json()
  return await fetchJSON
}