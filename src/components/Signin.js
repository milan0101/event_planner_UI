import React from 'react';
import "./signin.scss";
import { Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {Link, BrowserRouter} from 'react-router-dom';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .matches(/^[a-zA-Z0-9]+(\.)[a-z]+@Thinkpalm\.com$/, 'Email must be from Thinkpalm.com domain')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters'),
});


const Signin = () => {
  
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      debugger
      if (values) {
        const data = {
          email: values.email,
          password: values.password
        }
      }
    } catch (error) {
      console.log('error', error);
      
    }
   
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, isValid, isSubmitting, values }) => {
        console.log(errors, values);
        return (
          <Form>
            <div className='container'>
              <div className='logo'>
                <img src="https://d24hrkfl5wrd0k.cloudfront.net/themes/thinkpalm/images/logo.png" alt="Thinkpalm Technologies" title="Thinkpalm Technologies" class="loading" data-was-processed="true"></img>
              </div>
              <div className='body'>
                <div className='form'>
                  <h1 className='sign'>Sign in</h1>
                  <div className='content'>
                    <Field className="input" type="email" name="email" placeholder="Email " />
                    <ErrorMessage name='email' component="div"></ErrorMessage>
                  </div>
                  <div className='content'>
                    <Field className="input" type="password" name="password" placeholder="Password" />
                    <ErrorMessage name='password' component="div"></ErrorMessage>
                  </div>
                  <button type="submit" className='btn'>Sign In</button>
                  <p>Not regitered yet?</p>
                  <div className='signin'>
                  <Link to="/signup" className='signin'>Signup Now</Link>
                  <Link to="/home">go to home</Link>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  )
}
export default Signin