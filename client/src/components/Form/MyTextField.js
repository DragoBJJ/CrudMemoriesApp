import React from 'react';
import { Input, Label, ErrorMessage } from './StyledForm';
import { useField } from 'formik';

const MyTextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <Label>
        {label}
        <Input touched={meta.touched ? 'true' : null} error={meta.error} {...field} {...props} />
        <ErrorMessage>{meta.touched && meta.error ? meta.error : null}</ErrorMessage>
      </Label>
    </>
  );
};

export default MyTextField;
