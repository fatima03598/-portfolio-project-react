import React, { Component } from 'react'
import { Element } from 'react-scroll'
import '../css/About.css'
import Skills from './Skills'




 class About extends Component {
    

    render() {
        return (
            <React.Fragment>

            <Element id='About' name='About'>
            
           
               <div className='About-main'>
               <div className="horizontal-about"></div> 
                <section className='About-me'>
                <h1>About</h1>
                <p>{this.props.about ? this.props.about : null}</p>
               </section>
               <section className='About-skills'>
               <Skills />
               </section>

 

               </div>
            </Element>

         </React.Fragment>
        )}
}

export default About
