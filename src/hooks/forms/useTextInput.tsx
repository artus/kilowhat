import React from "react";
import { TextInputGroup } from "../../components/molecules/input/TextInputGroup";

import { FormInput, FormInputParams, useFormValue } from "./useFormValue";

interface TextInputParams {
  isMultiline?: boolean;
  lines?: number;
  isPassword?: boolean
}

export const useTextInput = ({
  isRequired,
  label,
  validator,
  defaultValue = '',
  placeholder = '',
  lines = 1,
  validateInitially = false,
  isPassword = false
}: FormInputParams<string> & TextInputParams): FormInput<string> => {

  const formValue = useFormValue({
    defaultValue,
    validator,
    isRequired,
    validateInitially
  });

  const jsx = <TextInputGroup
    labelText={label}
    lines={lines}
    value={formValue.value}
    onChange={formValue.onChange}
    placeholder={placeholder}
    isPassword={isPassword}
    error={formValue.error}
  />

  return new FormInput(
    formValue,
    jsx,
    formValue.onChange
  );
}