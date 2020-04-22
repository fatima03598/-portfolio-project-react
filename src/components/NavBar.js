import React, { Component } from 'react'
import Scroll from 'react-scroll'
import './NavBar.css'
const ScrollLink = Scroll.ScrollLink

class NavBar extends Component {
    render() {
        return (
            <div className="navbar">
                <ScrollLink to="/" className="styledLink">Home</ScrollLink>
                <ScrollLink to='/' className="styledLink">About</ScrollLink>
                <ScrollLink to='/' className="styledLink">Projects</ScrollLink>
            </div>
        )
    }
}

export default NavBar
