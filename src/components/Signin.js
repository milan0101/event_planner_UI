import React from 'react';
// import "./signin.scss";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, BrowserRouter } from 'react-router-dom';


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

  const CustomErrorMessage = ({ name, className }) => (
    <ErrorMessage name={name}>
      {errorMessage => <div className={className}>{errorMessage}</div>}
    </ErrorMessage>
  );

  return (
    <div className='mains'>
       <img className='img' src="https://t3.ftcdn.net/jpg/05/07/34/36/240_F_507343640_aFRe4OtbwHm02AvcIlhiKMcxG9F5sbrB.jpg"></img>
      <div className='left'>
      </div>
      <div className='right'>
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
                <div className='container_in'>
                  {/* <div className='logo'>
                    <img src="https://d24hrkfl5wrd0k.cloudfront.net/themes/thinkpalm/images/logo.png" alt="Thinkpalm Technologies" title="Thinkpalm Technologies" class="loading" data-was-processed="true"></img>
                  </div> */}
                  <div className='body'>
                    <div className='form'>
                      <h1 className='sign'>Sign in</h1>
                      <div className='content'>
                        <Field className="input" type="email" name="email" placeholder="Email " />
                        {
                          touched && (
                            <CustomErrorMessage name='email' component="div" className='error'></CustomErrorMessage>
                          )}
                      </div>
                      <div className='content'>
                        <Field className="inputp" type="password" name="password" placeholder="Password" />
                        {
                          touched && (
                            <CustomErrorMessage name='password' component="div" className='error'></CustomErrorMessage>
                          )}
                      </div>
                      <button type="submit" className='btn'>Sign In</button>
                      <p className='para'>Not regitered yet?</p>
                      <div className='signin'>
                        <Link to="/signup" className='signin'>Signup Now</Link>
                      </div>
                      <Link to="/home">go to home</Link>
                      <Link to="/calendar">go to calendar</Link>
                    </div>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>

    </div>
  )
}
export default Signin