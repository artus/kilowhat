import { useEffect, useMemo, useState } from "react";

export interface FormInputParams<T> {
  isRequired: boolean;
  label: string;
  validator: (value: T) => T;
  defaultValue?: T;
  placeholder?: string;
  validateInitially?: boolean;
}

export class FormInput<T> {
  constructor(
    readonly formValue: FormValueState<T>,
    readonly jsx: JSX.Element,
    readonly onChange: (value: T) => void
  ) { }
}

interface FormValueParams<T> {
  defaultValue?: T;
  validator: (value: T) => T;
  isRequired: boolean;
  validateInitially?: boolean;
}

const validate = <T>(
  value: T,
  validator: (value: T) => T,
  setError: (errorMessage: string) => void
): void => {
  try {
    validator(value);
    setError('');
  } catch (error) {
    setError((error as Error).message);
  }
}

export class FormValueState<T> {
  constructor(
    readonly isRequired: boolean,
    readonly value: T | undefined,
    readonly onChange: (value: T) => void,
    readonly error: string,
    readonly touched: boolean,
    readonly clear: () => void
  ) { }

  public isPresent(): boolean {
    return !!this.value;
  }

  public isError(): boolean {
    return this.touched && !!this.error;
  }

  public isSuccess(): boolean {
    return this.touched && !this.error;
  }

  public canSubmit(): boolean {
    return !this.error;
  }
}

export const useFormValue = <T>({
  defaultValue,
  validator,
  isRequired,
  validateInitially = false
}: FormValueParams<T>): FormValueState<T> => {

  const [value, setValue] = useState<T | undefined>(defaultValue);
  const [error, setError] = useState('');
  const [touched, setTouched] = useState(false);

  const actualValue = useMemo(() => {
    if (touched) {
      return value;
    } else {
      return defaultValue;
    }
  }, [touched, value, defaultValue]);

  useEffect(() => {
    if (validateInitially && value !== undefined && value !== null) {
      setTouched(true);
      validate(value, validator, setError);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!value && isRequired) {
      setError('Please enter a value');
    } else if (value) {
      validate(value, validator, setError);
    }
  }, [isRequired, validator, value]);

  const onChange = (value: T): void => {
    setTouched(true);
    setValue(value);
    validate(value, validator, setError);
  }

  const clear = () => {
    setTouched(true);
    setValue(undefined);
  }

  return new FormValueState(isRequired, actualValue, onChange, error, touched, clear);
}