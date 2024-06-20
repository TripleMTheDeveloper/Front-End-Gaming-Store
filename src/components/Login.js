import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Login.css';
import profile from './images/profile.jpg';
import { Figure } from 'react-bootstrap';
import { useAuth } from './AuthContext';

const Login = () => {
  const { user, register, login, logout } = useAuth();
  const [isLoggingIn, setIsLoggingIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const registrationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    secondName: Yup.string().required('Second Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    username: Yup.string().required('Username is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .matches(/[A-Z]/, 'Password must contain an uppercase letter')
      .matches(/[a-z]/, 'Password must contain a lowercase letter')
      .matches(/\d/, 'Password must contain a number')
      .matches(/[@$!%*?&]/, 'Password must contain a special character')
      .required('Password is required'),
  });

  const loginSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleLogin = (values) => {
    const result = login(values);
    if (!result.success) {
      setErrorMessage(result.message);
    }
  };

  const handleRegister = (values) => {
    register(values);
    setIsLoggingIn(true);
  };

  return (
    <div className='container'>
      <Figure>
        <Figure.Image
          src={profile}
          alt="Profile"
          className="img-custom img1"
        />
      </Figure>
      {user ? (
        <>
          <p>Welcome, {user.username}!</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          {isLoggingIn ? (
            <div className='form-control'>
              <h2>Login</h2>
              {errorMessage && <div className='error-message'>{errorMessage}</div>}
              <Formik
                initialValues={{ username: '', password: '' }}
                validationSchema={loginSchema}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    handleLogin(values);
                    setSubmitting(false);
                  }, 500);
                }}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <div className='form-control'>
                      <label>Username</label>
                      <Field type="text" name="username" />
                      <ErrorMessage name="username" component="div" />
                    </div>
                    <div className='form-control'>
                      <label>Password</label>
                      <Field type="password" name="password" />
                      <ErrorMessage name="password" component="div" />
                    </div>
                    <button type="submit" disabled={isSubmitting}>
                      Login
                    </button>
                    <button type="button" onClick={() => setIsLoggingIn(false)}>
                      Register
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          ) : (
            <div>
              <h2>Register</h2>
              <Formik
                initialValues={{ firstName: '', secondName: '', email: '', username: '', password: '' }}
                validationSchema={registrationSchema}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    handleRegister(values);
                    setSubmitting(false);
                  }, 500);
                }}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <div className='form-control'>
                      <label>First Name</label>
                      <Field type="text" name="firstName" />
                      <ErrorMessage name="firstName" component="div" />
                    </div>
                    <div className='form-control'>
                      <label>Second Name</label>
                      <Field type="text" name="secondName" />
                      <ErrorMessage name="secondName" component="div" />
                    </div>
                    <div className='form-control'>
                      <label>Email</label>
                      <Field type="email" name="email" />
                      <ErrorMessage name="email" component="div" />
                    </div>
                    <div className='form-control'>
                      <label>Username</label>
                      <Field type="text" name="username" />
                      <ErrorMessage name="username" component="div" />
                    </div>
                    <div className='form-control'>
                      <label>Password</label>
                      <Field type="password" name="password" />
                      <ErrorMessage name="password" component="div" />
                    </div>
                    <button type="submit" disabled={isSubmitting}>
                      Register
                    </button>
                    <button type="button" onClick={() => setIsLoggingIn(true)}>
                      Login
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Login;




