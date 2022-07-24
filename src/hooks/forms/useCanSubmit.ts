import { useMemo } from "react";

import { FormInput } from "./useFormValue";

export const useCanSubmit = (formInputs: FormInput<any>[]): boolean => {
  return useMemo(() => {
    for (const formInput of formInputs) {
      if (!formInput.formValue.canSubmit()) {
        return false;
      }
    }
    return true;
  }, [formInputs]);
}