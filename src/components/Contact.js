import React, { Component } from 'react'
import { Element } from 'react-scroll'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ContactForm from './ContactForm'
import '../css/Contact.css'
import { Tooltip } from 'reactstrap';
 class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            modal: false,
            linkedin:false,
            github:false,
            email:false
           
       
        }
      }
    
 

   toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  iconToggle = (event, name) => {
    this.setState(prevState => ({
      [name]: !prevState[name]
    }));
  }



    render() {
        return (
            <React.Fragment>

            <Element id='Contact' name='Contact'>
                <div className='contact'>
                <section className='contact-icons'>
                { this.props.contacts ? 
                    
                    <div>  
                    <a  id="github" target="_blank" rel="noopener noreferrer" href={this.props.contacts[0].url}><img className='contactIcon' src='/github.png' alt='github'/></a>
                    <Tooltip placement="left" isOpen={this.state.github} target="github" toggle={(e) => this.iconToggle(e, 'github')}  onClick={(event) => this.toggles(event)} >
        Github Profile
      </Tooltip>
                    <a id="linkedin" target="_blank" rel="noopener noreferrer" href={this.props.contacts[1].url}><img className='contactIcon' src='/linkedin.png' alt='linkedin'/></a> 
                    <Tooltip  placement="right" isOpen={this.state.linkedin} target="linkedin" toggle={(e) => this.iconToggle(e,'linkedin')}>
       LinkedIn Profile
      </Tooltip>
                
                    </div>   

                    :   null }
                      <img id="email" onClick={this.toggle} className='contactIcon' src='/mail.png' alt='mail'/>
                      <Tooltip  placement="right" isOpen={this.state.email} target="email" toggle={(e) => this.iconToggle(e,'email')}>
      Email
      </Tooltip>
                       
                        <Modal isOpen={this.state.modal} toggle={this.toggle}  className="modal-dialog">
                            <ModalHeader toggle={this.toggle}>Send Email</ModalHeader>
                            <ModalBody>
                            <ContactForm/>
                            </ModalBody>
                            <ModalFooter>
                            <Button color="secondary" onClick={this.toggle}>Close</Button>
                            </ModalFooter>
                        </Modal>
                    </section>
                </div>
            </Element>

            </React.Fragment>
        )
    }
}

export default Contact
