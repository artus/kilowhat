import React, { useEffect, useState } from "react";
import { NumberInputGroup } from "../../components/molecules/input/NumberInputGroup";

import { FormInput, FormInputParams, useFormValue } from "./useFormValue";

export const useNumberInput = ({
  isRequired,
  label,
  validator,
  defaultValue = 1,
  validateInitially = false
}: FormInputParams<number>): FormInput<number> => {

  const formValue = useFormValue({
    defaultValue,
    validator,
    isRequired,
    validateInitially
  });

  const [quantity, setQuantity] = useState<string>(defaultValue + "");

  const getParsedQuantity = (): number => {
    const parsedQuantity = parseFloat(quantity);
    return isNaN(parsedQuantity) ? 0 : parsedQuantity;
  }

  useEffect(() => {
    if (formValue.value !== getParsedQuantity()) {
      formValue.onChange(getParsedQuantity());
    }
  }, [quantity]);

  const jsx = <NumberInputGroup
    labelText={label}
    value={formValue.value}
    onChange={setQuantity}
    error={formValue.touched ? formValue.error : ''}
  />

  return new FormInput(
    formValue,
    jsx,
    formValue.onChange
  );
}