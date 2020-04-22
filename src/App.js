import React, { Component } from 'react';
import './App.css';
import Homepage from './container/Homepage'
import About from './components/About'
import Projects from './components/Projects'
import SearchBar from './components/Searchbar'
import NavBar from './components/NavBar'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

class App extends Component {
  constructor(props){
    super(props);
    this.main = React.createRef()
    this.state = {
        data: null,
    }
    this.getData = this.getData.bind(this)
  }

  getData(){
    fetch("https://raw.githubusercontent.com/fatima03598/-portfolio-project-react/master/package.json")
    .then(response => response.json())
    .then(data => this.setState({data: data}))
    .catch(error => console.log(error))
  }

  componentDidMount(){
    this.getData()
  }

  handleScroll = e => {
    e.preventDefault();
    const main = this.main.current;
    window.scrollTo({
      top: main.offsetTop,
      left: 0,
      behavior: "instant"
    });
  };

  render () {
    console.log(this.state.data)
    return (
      <div className="App"  ref={this.main}>
        <Router>           
          <NavBar data={this.state} handleScroll={this.handleScroll}/>          
          <SearchBar/>
          <Homepage/>
          <About/>
          <Projects/>
        </Router> 
      </div>
    );
  }
}
export default App;
