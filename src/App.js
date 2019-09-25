import React, {Component} from 'react';
import './App.css';
import Nav from './Nav'
import Footer from './Footer'

class App extends Component {
  
  state = {
    isShowing : true
  }
   
  handleClick = event => {
    this.setState({
      isShowing : !this.state.isShowing
    })
  }
  render() {
    const title = <h1>Confetti Blog</h1>
    return (
    <div className="App container">
      <Nav />
        {this.state.isShowing ? title : null}
        <button onClick={this.handleClick}>Click meeeee!</button>
      <Footer />
    </div>
  );
}}
export default App;
