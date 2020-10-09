import React, { Component } from 'react'
import { Element } from 'react-scroll'
import '../css/Homepage.css'
import Scroll from 'react-scroll'
let Link = Scroll.Link;


 class Homepage extends Component {





    render() {
        return (
            <React.Fragment>
            <Element id='Home' name='Home'>
            <div className='homepage'>
            <div className="horizontal"></div> 
                <section className='home-main'>
                    <section className='home-about'>
                        <div className='about-image'>
                            <img  src='/me.png' alt='me'/>
                            <h1>Fatima Abdullahi</h1>
                            <h2>Software Engineering Trainee</h2>
                        </div>


                    </section>
                    <section className='home-menu'>
                        <article className='menu-article'><Link to='About'  spy={true} smooth={true} duration={500}  className="styledLink"><img className='menu-image' src="/woman.png" alt='about'/></Link> <h4 className='menu-title'>About Me</h4></article>
                    
                        <article className='menu-article'> <Link to='Skills'  spy={true} smooth={true} duration={500}  className="styledLink"><img className='menu-image' src='/avatar.png' alt='skills'/></Link><h4 className='menu-title'>Skills</h4></article>
                        <article className='menu-article'> <Link to='Projects'  spy={true} smooth={true} duration={500}  className="styledLink"><img className='menu-image' src='/folder.png' alt='projects'/></Link><h4 className='menu-title'>Projects</h4></article>
                        <article className='menu-article'><Link to='Contact'  spy={true} smooth={true} duration={500}  className="styledLink"><img className='menu-image' src='/contact.png' alt='contacts'/></Link><h4 className='menu-title'>Contact</h4></article>
                    </section>
                </section>
            </div>
            
            </Element>

           </React.Fragment>

        )
    }
}

export default Homepage
