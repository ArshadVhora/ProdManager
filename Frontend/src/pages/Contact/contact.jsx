import React from 'react';
import Header from '../../components/header';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact = () => (
  <section>
    <Header/>
  <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
    <div className="card p-4 border rounded bg-white shadow-sm">
      <h1 className="mb-4">Contact Us</h1>
      <p><strong>Address:</strong> 123 React Street, UI City, CA 90210</p>
      <p><strong>Email:</strong> hello@prodmanage.com</p>
      <p><strong>Phone:</strong> +1 (555) 123-4567</p>
    </div>
  </div>
  </section>
);

export default Contact;
