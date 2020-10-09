import React, { Component } from 'react'
import { Element } from 'react-scroll'
import '../css/About.css'
import { Table } from 'reactstrap';



 class Skills extends Component {

    render() {
        
        return (
            <React.Fragment>

                <Element id='Skills' name="Skills">
                    <div className="skilled"> 
                        <h3>Technical Skills</h3>
                        <ul>
                                <li className="skillsBullet"> 
                                    HTML <img className='skills-icon' src="/html.png"  alt="htmlIcon"/> &
                                    CSS <img className='skills-icon' src="/css.png" alt="cssIcon"/>
                                </li>
                        </ul>
                        <div className="languages">
                            <section className="javascript">
                                    <article className="languageTitle">
                                        <div className="skill-main" >
                                            JavaScript <img className='skillsIcon' src="/js.png" alt="JavaScriptIcon" /> 
                                        </div> 
                                        <h5>with&nbsp;Node.js</h5>
                                    </article>
                                    <article className="languageSkills" >
                                        <div className="unitarySkill">
                                                <h4>Libraries: </h4>
                                                <div className="unitaryDes">
                                                    <div className="skill">
                                                        jQuery <img className='skills-icon' src="/JQuery.png" alt="jqueryIcon"/>
                                                    </div>
                                                    <div className="skill">
                                                        React <img  className='skills-icon' src="/react.png" alt="reactIcon" />
                                                    </div>   
                                                </div>
                                        </div>
                                        <div className="unitarySkill">
                                                <h4>Frameworks: </h4>
                                                <div className="unitaryDes" >
                                                    <div className="skill">
                                                        Express.js <img className='skills-icon' src="/expressjs.png" alt="expressIcon" />
                                                    </div>
                                               </div>
                                        </div>
                                    </article>

                            </section>
                            <section className="python">
                                    <article className="languageTitle">
                                        <div className="skill-main">
                                            Python <img className='skillsIcon' src="/python.png" alt="pythonIcon" />
                                        </div>
                                    </article>
                                    <article className="languageSkills">
                                        <div className="unitarySkill">
                                                <h4>Frameworks: </h4>
                                                <div className="unitaryDes" >
                                                    <div className="skill" >
                                                        Django <img  className='skills-icon' src="/django.png" alt="djangoIcon" />
                                                    </div>
                                                    <div className="skill" >
                                                        Flask <img  className='skills-icon' src="/flask.png"alt="flaskIcon" />
                                                    </div>
                                                </div>
                                        </div>
  
                                    </article>

                            </section>
                       </div>

                    </div>
                </Element>

            </React.Fragment>
        )
    }
}

export default Skills
