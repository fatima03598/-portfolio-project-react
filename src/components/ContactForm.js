import React, { Component } from 'react'
import emailjs from 'emailjs-com';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';


class ContactForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            sent: false,
           
       
        }
      }
    

    sendEmail = (e) => {
        e.preventDefault();
        console.log('yuppie')
        this.setState({
            sent: true
        })
    
        // emailjs.sendForm('gmail', 'portfolio', e.target, 'user_JBgT4bWLNhMvI0xi2weZ7')
        //   .then((result) => {
        //       console.log(result.text);
        //   }, (error) => {
        //       console.log(error.text);
        //   });
      }
    render() {
      if(this.state.sent === true) {
          return ( <h1> Message Sent</h1>)
      }

        return (
            <div> 
                 <Form className="contact-form" onSubmit={this.sendEmail} >
                    <FormGroup>
                        <Label for="fullName">Full Name </Label>
                        <Input type="text" name="user_name" id="fullName" placeholder="Full name" required />
                      
                    </FormGroup>
                    <FormGroup>
                        <Label for="Email">Email</Label>
                        <Input type="email" name="user_email" id="email" placeholder="Your Email"  required />
                    </FormGroup>
                    <FormGroup>
                        <Label for="message">Your message</Label>
                        <Input type="textarea" name="message" id="message"  required/>
                    </FormGroup>
                    <Button type="submit">Submit</Button>
                   </Form>
                

            </div>
        )
    }
}

export default ContactForm
