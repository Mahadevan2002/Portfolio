import React, { useState } from "react";
import { motion } from "framer-motion";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <section className="contact-section">
      <Container>
        <motion.h2 
          className="section-title text-center"
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          Contact Me
        </motion.h2>
        
        {showAlert && <Alert variant="success" className="text-center">Message sent successfully!</Alert>}
        
        <Row className="mt-4">
          {/* Contact Info */}
          <Col md={5}>
            <motion.div 
              className="contact-info"
              initial={{ opacity: 0, x: -50 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8 }}
            >
              <p><FaEnvelope /> mahadevam713@gmail.comcom</p>
              <p><FaPhone /> +91 7695888038</p>
              <p><FaMapMarkerAlt /> Chennai, India</p>
            </motion.div>
          </Col>
          
          {/* Contact Form */}
          <Col md={7}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Your message" required />
                </Form.Group>
                <Button variant="primary" type="submit" className="send-btn">
                  Send Message
                </Button>
              </Form>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
