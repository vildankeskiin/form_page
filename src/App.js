// App.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <div className="form">
        <h1>User Information Form</h1>
        <Formik
          initialValues={{
            username: '',
            name: '',
            surname: '',
            department: '',
            position: '',
          }}
          validationSchema={Yup.object({
            username: Yup.string().required('Username is required'),
            name: Yup.string().required('Name is required'),
            surname: Yup.string().required('Surname is required'),
            department: Yup.string().required('Department is required'),
            position: Yup.string().required('Position is required'),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            console.log(values);
            setTimeout(() => {
              setSubmitting(false);
              resetForm();
            }, 500);
          }}
        >
          <Form>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <Field type="text" id="username" name="username" />
              <ErrorMessage name="username" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="name">First Name:</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="surname">Last Name:</label>
              <Field type="text" id="surname" name="surname" />
              <ErrorMessage name="surname" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="department">Department:</label>
              <Field type="text" id="department" name="department" />
              <ErrorMessage name="department" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="position">Position:</label>
              <Field type="text" id="position" name="position" />
              <ErrorMessage name="position" component="div" className="error" />
            </div>

            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default App;