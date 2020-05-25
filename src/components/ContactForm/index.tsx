import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';

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
          <Field
            name="name"
            type="text"
            className="input is-medium"
            placeholder="Name"
          />
          <ErrorMessage name="name" />
          <Field
            name="email"
            type="email"
            className="input is-medium"
            placeholder="Email"
          />
          <ErrorMessage name="email" />
          <Field
            name="message"
            as="textarea"
            className="textarea is-medium"
            placeholder="Message..."
          />
          <ErrorMessage name="message" />
          <button className="button is-tmtech is-medium" type="submit">
            Send
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default ContactForm;
