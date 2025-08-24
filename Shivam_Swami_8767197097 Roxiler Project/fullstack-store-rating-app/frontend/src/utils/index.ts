import { useState } from 'react';

export const useFormValidation = (initialState, validate) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
    isSubmitting,
  };
};

export const validateSignup = (values) => {
  let errors = {};
  
  if (!values.name) {
    errors.name = 'Name is required';
  } else if (values.name.length < 20 || values.name.length > 60) {
    errors.name = 'Name must be between 20 and 60 characters';
  }

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }

  if (!values.address) {
    errors.address = 'Address is required';
  } else if (values.address.length > 400) {
    errors.address = 'Address must be less than 400 characters';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 8 || values.password.length > 16) {
    errors.password = 'Password must be between 8 and 16 characters';
  } else if (!/[A-Z]/.test(values.password) || !/[!@#$%^&*]/.test(values.password)) {
    errors.password = 'Password must include at least one uppercase letter and one special character';
  }

  return errors;
};