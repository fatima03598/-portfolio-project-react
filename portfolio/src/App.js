import React, { Component } from 'react';
import './App.css';
import Homepage from './container/Homepage'
import About from './components/About'
import Projects from './components/Projects'
import SearchBar from './components/Searchbar'
import NavBar from './components/NavBar'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

class App extends Component {
  render () {

  
  return (
    <div className="App">
     
        <Router>           
       <NavBar/>          
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
