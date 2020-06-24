import React, { Component } from 'react'
import { Element } from 'react-scroll'
import '../css/About.css'



 class Skills extends Component {

    render() {
        
        return (
            <React.Fragment>

            <Element id='Skills' name='Skills'>
            <div className='skilled'> 
            <ul className="skills">
        {this.props.skills ? this.props.skills.map((skill, index) => <li key={skill.type} style={{ width: `${skill.level}%` }}> <p>{skill.type}</p></li>) : null }
        </ul>
            </div>
            </Element>

            </React.Fragment>
        )
    }
}

export default Skills
