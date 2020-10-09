import React, { Component } from 'react';
import './css/App.css';
import Homepage from './container/Homepage'
// contacts={this.state.contacts}
import {BrowserRouter as Router, Route} from "react-router-dom";
import Projects from './components/Projects';
import About from './components/About';
import NavBar from './components/NavBar'
import Footer from './components/Footer';
import Contact from './components/Contact';
import { Container } from 'reactstrap';


class App extends Component {
  constructor(props){
    super(props);
    this.main = React.createRef()
    this.state = {
        data: [],
        homepay:'yes',
        skills:null,
        soloProjects:null,
        groupProjects:null,
        contacts:null
    }
  }


  componentDidMount(){
    fetch("https://raw.githubusercontent.com/fatima03598/-portfolio-project-react/master/Fatima.json")
    .then(response => response.json())
    .then(data => this.setState({
      data: data, 
      skills: data.skills, 
      soloProjects:data["solo-projects"], 
      groupProjects:data["group-projects"], 
      contacts: data.contacts},()=> console.log(this.state.contacts)))
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
     console.log(this.state.soloProjects)

    return (
      
      <div className="App"  ref={this.main}>
        
          <Router> 
           <Route exact path='/'  data={this.state.data} render={(props) => (<Homepage {...props} data={this.state.data} /> )} />
           <NavBar  handleScroll={this.handleScroll}/>  
           <Route   render={(props) => (<About {...props}  about={this.state.data.about}  skills={this.state.skills} /> )} />
           <Route exact  render={(props) => (<Projects {...props}  group={this.state.groupProjects}  solo={this.state.soloProjects} /> )}/>
           <Route exact  render={(props) => (<Contact {...props}   contacts={this.state.contacts}  /> )}/>
          </Router>  
          <Footer/> 
      
      </div>
    );
  }

}
export default App;
