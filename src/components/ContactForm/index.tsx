import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import './ContactForm.scss';

function ContactForm() {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        message: '',
      }}
      validationSchema={object().shape({
        name: string().required('We need to know what to call you'),
        email: string()
          .email('How can we contact you with an invalid email address')
          .required("We can't contact you without an email address"),
        message: string().required("We need to know why you're contacting us"),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => (
        <Form className="form">
          <div className="control">
            <Field
              name="name"
              type="text"
              className="input is-medium"
              placeholder="Name"
            />
            <span className="error">
              <ErrorMessage name="name" />
            </span>
          </div>
          <div className="control">
            <Field
              name="email"
              type="email"
              className="input is-medium"
              placeholder="Email"
            />
            <span className="error">
              <ErrorMessage name="email" />
            </span>
          </div>
          <div className="control">
            <Field
              name="message"
              as="textarea"
              className="textarea is-medium"
              placeholder="Message..."
            />
            <span className="error">
              <ErrorMessage name="message" />
            </span>
          </div>
          <div className="submit">
            <button className="button is-tmtech is-medium" type="submit">
              Send
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default ContactForm;
