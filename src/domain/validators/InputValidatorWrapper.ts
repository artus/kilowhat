export function inputValidatorWrapper<T>(validator: (value: T) => void): (value: T) => T {
  return (value: T) => {
    validator(value);
    return value;
  }
}