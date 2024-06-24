import React from 'react'

import emailjs from "emailjs-com";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import Swal from "sweetalert2";
import {MdEmail} from 'react-icons/md'
import './email.css'

const SERVICE_ID = "service_i8dwhuq";
const TEMPLATE_ID = "template_2ycjw5o";
const PUBLIC_KEY = "IqsNXZMSXvj959Jxn"

const Email = () => {
    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
          .then((result) => {
            console.log(result.text);
            Swal.fire({
              icon: "success",
              title: "Message Sent Successfully"
            })
          }, (error) => {
            console.log(error.text);
            Swal.fire({
              icon: "error",
              title: "Ooops, something went wrong",
              text: error.text,
            })
          });
        e.target.reset()
      };
  return (
   
    <div className='formone'>
         <h2>SEND US AN EMAIL</h2>
    <Form className='formi' onSubmit={handleOnSubmit}>
       
      <Form.Field
      className='formii'
        id="form-input-control-email"
        control={Input}
        label="Email*"
        name="from_email"
        placeholder="Email…"
        required
        icon= "mail"
        iconPosition="left"
        
      />
       <div className='img'><MdEmail/></div>
      <Form.Field
       className='formii'
        id="form-input-control-last-name"
        control={Input}
        label="Name*"
        name="from_name"
        placeholder="Name…"
        required
        icon="user circle"
        iconPosition="left"
      />
      <Form.Field
       className='formii'
        id="form-textarea-control-opinion"
        control={TextArea}
        label="Message*"
        name="message"
        placeholder="Message…"
        required
      />
      <Button className='btn-form' type="submit" color="green">Submit</Button>
    </Form>
  </div>
  )
}

export default Email