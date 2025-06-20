// src/components/RegistrationForm.jsx
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Header from '../../components/header';
import * as Yup from 'yup';
import '../../css/signup.css'; // Import the local CSS

const RegistrationForm = () => {
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Full Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    phone: Yup.string()
      .matches(/^\d{10,15}$/, 'Phone must be 10 to 15 digits')
      .required('Phone is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  const initialValues = {
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    alert('Registration Successful:\n' + JSON.stringify(values, null, 2));
    resetForm();
  };

  return (
    <section style={{ backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
            <Header />
    <div className="registration-container">
      <div className="registration-card">
        <div className="logo">P</div>
        <h1 className="brand">Product Hunt</h1>
        <h2 className="form-title">Sign Up</h2>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <Form className="form-body">
            <div className="form-group">
              <label>Fullname</label>
              <Field name="fullName" type="text" className="form-input" />
              <ErrorMessage name="fullName" component="div" className="error" />
            </div>

            <div className="form-group">
              <label>Email</label>
              <Field name="email" type="email" className="form-input" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <Field name="phone" type="text" className="form-input" />
              <ErrorMessage name="phone" component="div" className="error" />
            </div>

            <div className="form-group">
              <label>Password</label>
              <Field name="password" type="password" className="form-input" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <Field name="confirmPassword" type="password" className="form-input" />
              <ErrorMessage name="confirmPassword" component="div" className="error" />
            </div>

            <button type="submit" className="submit-btn">
              Sign Up
            </button>
          </Form>
        </Formik>
      </div>
    </div>
    </section>
  );
};

export default RegistrationForm;
