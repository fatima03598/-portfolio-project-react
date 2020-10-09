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
              <h1>Projects</h1>
               
                <h2>Solo</h2>
                
                <section className='soloProjects'>
                {this.props.solo ?  this.props.solo.map((project, index) => <div className="projectImage" key={index} >
                                                                        <div className='titleSection'>
                                                                          <div className='circles'>
                                                                            <div className='circle'></div>
                                                                            <div className='circle'></div>
                                                                            <div className='circle'></div>
                                                                          </div>
                                                                        <h4>{project.title}</h4>
                                                                        </div>
                                                                        <h5>Main Technologies:</h5> <p>{project["main-technologies"].join(', ')}</p>
        <div className="hoverDescription"><p className='description'>{project.description}</p><a  target="_blank" rel="noopener noreferrer" href={project.url}>repo link</a></div></div>) : null}
                </section>
                <h2>Group </h2>
                <section className='groupProjects'>
        {this.props.group ?  this.props.group.map((project, index) =><div className="projectImage" key={index}  >
                                                                         <div className='titleSection'>
                                                                          <div className='circles'>
                                                                            <div className='circle'></div>
                                                                            <div className='circle'></div>
                                                                            <div className='circle'></div>
                                                                          </div>
                                                                <h4>{project.title}</h4>
                                                                </div> 
                                                                <h5>Main Technologies:</h5> 
                                                                <p>{project["main-technologies"].join(', ')}</p>
        <div className='hoverDescription'><p className='description' >{project.description}</p> <a target="_blank" rel="noopener noreferrer" href={project.url}>repo link</a></div></div>) : null}
                </section>
            
            </div>
            </Element>

            </React.Fragment>

        )
    }
}

export default Projects
