import React, { Component } from 'react'
import { Element } from 'react-scroll'

 class Skills extends Component {
    render() {
        return (
            <React.Fragment>

            <Element id='Skills' name='Skills'>
            <div>    
             <h1>Skills</h1>
        {this.props.skills ? this.props.skills.map(item => <h1>{item.title}</h1>) : null }
            </div>
            </Element>

            </React.Fragment>
        )
    }
}

export default Skills
