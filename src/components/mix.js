import React, { Component } from 'react'
import { Element } from 'react-scroll'
import '../css/About.css'
import { Table } from 'reactstrap';



 class Skills extends Component {

    render() {
        
        return (
            <React.Fragment>

                <Element id='Skills' name='Skills'>
                    <div className='skilled'> 
                        <h3>Technical Skills</h3>
                        <ul>
                                <li className="skillsBullet"> 
                                    <article className="skill"> HTML <img className='skills-icon' src="/html.png"  alt="htmlIcon"/> </article> &
                                    <article className="skill"> CSS <img className='skills-icon' src="/css.png" alt="cssIcon"/></article> 
                                </li>
                        </ul>
                        <Table responsive  >
                            <thead>
                                <tr>
                                    <th id='firstBox'>Languages</th>
                                    <th className='secondRow' >
                                        <div id='javascriptLang'>
                                            <article className="skill-main" >JavaScript<img className='skillsIcon' src="/js.png" alt="JavaScriptIcon" /> </article> <h5>with&nbsp;Node.js </h5>
                                           
                                        </div>
                                    </th>
                                    <th className='thirdRow' >
                                        <div id='pythonLang'>
                                            <article className="skill-main">Python <img className='skillsIcon' src="/python.png" alt="pythonIcon" /></article>
                                        </div>
                                    </th>
                                
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row" >Libraries</th>
                                    <td className='secondRow'>
                                        <div className='contentCell'>
                                            <article className="skill">jQuery <img className='skills-icon' src="/JQuery.png" alt="jqueryIcon"/></article>
                                            <article className="skill">React <img  className='skills-icon' src="/react.png" alt="reactIcon" /></article>
                                        </div>
                                    </td>
                                    <td className='thirdRow'></td>
                                
                                </tr>
                                <tr>
                                    <th scope="row" >Frameworks</th>
                                    <td  className='secondRow'>
                                    <div className='contentCell'>
                                        <article className="skill">Express.js <img className='skills-icon' src="/expressjs.png" alt="expressIcon" /></article>
                                    </div>
                                    </td>
                                    <td className='thirdRow'>
                                    <div className='contentCell'>
                                        <article className="skill" >Django <img  className='skills-icon' src="/django.png" alt="djangoIcon" /></article>
                                        <article className="skill" >Flask <img  className='skills-icon' src="/flask.png"alt="flaskIcon" /></article>
                                    </div>
                                    </td>
                                
                                </tr>
                            </tbody>
                        </Table>

                    </div>
                </Element>

            </React.Fragment>
        )
    }
}

export default Skills