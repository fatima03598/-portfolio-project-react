import React, { Component } from 'react'
import Scroll from 'react-scroll'
import './NavBar.css'
let Link = Scroll.Link;

class NavBar extends Component {
  


    render() {
        return (
            <div className="navbar">
                <Link to="/" onClick={this.props.handleScroll}  className="styledLink">Home</Link>
                <Link   to='About'  spy={true} smooth={true} duration={500}  className="styledLink">About</Link>
                <Link to='Projects'  spy={true} smooth={true} duration={500}  className="styledLink">Projects</Link>
            </div>
        )
    }
}

export default NavBar
