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
                   <section className='About-me'>
                <h3>About</h3>
                <p>{this.props.about ? this.props.about : null}</p>
               </section>
               <section className='About-skills'>
                   <Skills skills={this.props.skills}/>

               </section>

 

               </div>
            </Element>

         </React.Fragment>
        )}
}

export default About
