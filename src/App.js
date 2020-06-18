import React, { Component } from 'react';
import './css/App.css';
import Homepage from './container/Homepage'

import {BrowserRouter as Router, Route} from "react-router-dom";
import Projects from './components/Projects';
import About from './components/About';
import NavBar from './components/NavBar'
import Footer from './components/Footer';
import Contact from './components/Contact';


class App extends Component {
  constructor(props){
    super(props);
    this.main = React.createRef()
    this.state = {
        data: [],
        homepay:'yes'
    }
  }


  componentDidMount(){
    fetch("https://raw.githubusercontent.com/fatima03598/-portfolio-project-react/rorie-update/Fatima.json")
    .then(response => response.json())
    .then(data => this.setState({data: data},()=> console.log(this.state.data)))
    .catch(error => console.log(error))
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
    console.log(this.state.data.about)

    return (
      <div className="App"  ref={this.main}>
          <Router> 
           <Route exact path='/'  data={this.state.data} render={(props) => (<Homepage {...props} data={this.state.data} /> )} />
           <NavBar  handleScroll={this.handleScroll}/>  
           <Route   render={(props) => (<About {...props}  about={this.state.data.about}  skills={this.state.data.skills} /> )} />
           <Route exact  component={Projects} />
           <Route exact component={Contact}/>
          </Router>  
          <Footer/> 
     
      </div>
    );
  }

}
export default App;
