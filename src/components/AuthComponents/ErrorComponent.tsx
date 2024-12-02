import React from 'react';
import { ErrorMessage as FormikErrorMessage } from 'formik';

type ErrorProps ={
  name: string; // Name of the field for which the error is displayed
  component: string | React.ComponentType<any>; // Type of HTML element or custom component to render
}

function Error({ name, component }: ErrorProps) {
  return (
    <FormikErrorMessage
      name={name}
      component={component}
      className="text-red-500 text-sm pt-1"
    />
  );
}

export default Error;
