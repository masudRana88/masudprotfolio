import Button from '@restart/ui/esm/Button';
import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import contact from "../../Images/contact.svg"
import emailjs from 'emailjs-com'
import Aos from 'aos';

const ContactMe = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        
        console.log("clicked")
    emailjs.sendForm('service_ry7yo1z', 'template_lngxc08', form.current, 'user_qTMPaKLpZaPeb1hcc2fPI')
      .then((result) => {
          if (result.text === "OK") {
              document.getElementById('sentEmail').click()
              document.getElementById("contactForm").reset();
              console.log(result.text)
          }
      }, (error) => {
          console.log(error.text);
      });
    }
    useEffect(() => {
        Aos.init({ duration: 1000 });
    },[])
    return (
        <Container id="contact">
            <div data-aos="fade-up" class="alert alert-dismissible alert-primary mt-3">
                <Row>
                    <Col sm={12} md={6} lg={6}>
                        <img data-aos="fade-down-right" src={contact} alt="" className="img-fluid" />
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                        <strong className="fs-4">Contact Me_</strong>
                        <form ref={form} onSubmit={sendEmail} id="contactForm">
                            <div data-aos="zoom-in-left" className="mt-2">
                                <label for="exampleSubject" class="form-label mt-1">Name</label>
                                <input type="text" class="form-control" id="exampleSubject" aria-describedby="emailHelp" placeholder="Entear Your Name" name="user_name"/>
                            </div>

                            <div data-aos="zoom-in-right" class="">
                                <label for="exampleInputEmail1" class="form-label mt-1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="user_email"/>
                            </div>
                            
                            <div data-aos="zoom-in-left" class="">
                                <label for="exampleTextarea" class="form-label mt-2">Example textarea</label>
                                <textarea class="form-control" id="exampleTextarea" rows="3"placeholder="Enter Your Message" name="message"></textarea>
                            </div>
                        <input type="submit" value="SEND" className="btn btn-outline-primary text-light mt-2"/>
                        </form>
                    </Col>
                </Row>
            </div>
<button type="button" class="btn btn-primary" id="sentEmail" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{display:"none"}}>Launch modal</button>
 <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-content">
      <div class="modal-body">
        <p>Your Email is successfully Send</p>
      </div>
      <div class="pb-2 pe-2 text-end">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
        </Container>
    );
};

export default ContactMe;