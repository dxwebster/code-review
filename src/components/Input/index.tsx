/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';
import { InputStyle } from './styles';

export default function Input({ name, ...rest }) {
  const inputRef = useRef(null);

  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = '';
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      <InputStyle id={fieldName} ref={inputRef} defaultValue={defaultValue} {...rest} />

      {error && (
        <span className="error" style={{ color: 'red' }}>
          {error}
        </span>
      )}
    </>
  );
}
