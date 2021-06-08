import React from "react";
import { ErrorMessage, useField } from "formik";

const TextField = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
    <div className="form-group">
      <label for={label}>{label}</label>
      <input
        className={`form-control ${meta.touched && meta.error && "is-invalid"}`}
        {...props}
        {...field}
      />
      <ErrorMessage
        name={field.name}
        component="div"
        className="error text-danger"
      />
    </div>
  );
};

export default TextField;
