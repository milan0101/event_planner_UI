import React from 'react';
import { Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import './signup.scss';
import { Link } from 'react-router-dom';



const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .matches(/^[a-zA-Z0-9]+(\.)[a-z]+@Thinkpalm\.com$/, 'Email must be from Thinkpalm.com domain')
    .required('Email is required'),
    password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters'),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required')  
});


const Signup = () => {
  
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
              <div className='bodys'>
                <div className='form'>
                  <h1 className='sign'>Sign Up</h1>
                  <div className='content'>
                    <Field className="input" type="text" name="user" placeholder="username" />
                    <ErrorMessage name='username' component="div"></ErrorMessage>
                  </div>
                  <div className='content'>
                    <Field className="input" type="email" name="email" placeholder="Email " />
                    <ErrorMessage name='email' component="div"></ErrorMessage>
                  </div>
                  <div className='content'>
                    <Field className="input" type="password" name="password" placeholder="Password" />
                    <ErrorMessage name='password' component="div"></ErrorMessage>
                  </div>
                  <div className='content'>
                    <Field className="input" type="password" name="confirmPassword" placeholder="Confirm Password" />
                    <ErrorMessage name='confirmPassword' component="div"></ErrorMessage>
                  </div>
                  <button type="submit" className='btn'  >Sign Up</button>
                  <p>Already have account?</p>
                  <div className='signup'>
                  <Link to="/" className='signin'>Sign in Now</Link>
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
export default Signup