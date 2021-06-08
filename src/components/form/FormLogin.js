import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import TextField from "./TextField";

const FormLogin = () => {
  const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
  });
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}>
        {(formik) => (
          <div>
            <Form>
              <TextField type="email" label="Email" name="email" />
              <TextField type="password" label="Password" name="password" />
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default FormLogin;
