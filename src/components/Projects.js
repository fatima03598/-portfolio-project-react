import React, { Component } from 'react'
import { Element } from 'react-scroll'
import '../css/Projects.css'

class Projects extends Component {
    constructor(props){
        super(props);
        this.main = React.createRef()
        this.state = {
            projectImage:'projectImage',
            hoverDescription:'hoverDescription',
            isHovered: {}
        }
      }
    


    handleMouseEnter = index => {
        this.setState(prevState => {
          return { isHovered: { ...prevState.isHovered, [index]: true } };
        }, () => this.boxHovered());
      };

    handleMouseLeave = index => {
        this.setState(prevState => {
          return { isHovered: { ...prevState.isHovered, [index]: false }};
        }, () => this.boxLeft())
      };
    
    
    boxHovered = () => {
       if(this.state.isHovered === true) {
        this.setState({
            projectImage: 'projectImageHover',
            hoverDescription: 'hoverDescriptionOn'
        })
    }
    }

    boxLeft = () => {
        if(this.state.isHovered === false ){
        this.setState({
            projectImage: 'projectImage',
            hoverDescription: 'hoverDescription'
        })
    }
    }


    render() {
        return (
            <React.Fragment>

            <Element id='Projects' name='Projects'>
            <div className='Projects'>
               
                <h1>Solo Projects</h1>
                <section className='soloProjects'>
                {this.props.solo ?  this.props.solo.map((project, index) => <div className="projectImage" >
                                                                        <h3>{project.title}</h3>
                                                                        <h5>Main Technologies:</h5> <p>{project["main-technologies"].join(', ')}</p>
        <div className="hoverDescription"><p>{project.description}</p><a  target="_blank" rel="noopener noreferrer" href={project.url}>repo link</a></div></div>) : null}
                </section>
                <h1>Group Projects</h1>
                <section className='groupProjects'>
        {this.props.group ?  this.props.group.map((project, index) =><div className="projectImage"  >
                                                                <h3>{project.title}</h3> 
                                                                <h5>Main Technologies:</h5> 
                                                                <p>{project["main-technologies"].join(', ')}</p>
        <div className='hoverDescription'><p>{project.description}</p> <a target="_blank" rel="noopener noreferrer" href={project.url}>repo link</a></div></div>) : null}
                </section>
            
            </div>
            </Element>

            </React.Fragment>

        )
    }
}

export default Projects
