import { chainable } from "valivalue";
import { Dial } from "../../Dial";

export const meterNameValidator = (name: string) => chainable(true)
  .objects.validateNotNullOrUndefined(name, 'Meter name')
  .strings.validateMinAndMaxLength(name, 1, 64, 'Meter name');

export const meterDescriptionValidator = (description: string) => chainable(true)
  .objects.validateNotNullOrUndefined(description, 'Meter description')
  .strings.validateMaxLength(description, 128, 'Meter description');

export const meterDialsValidator = (dials: Dial[]) => chainable(true)
  .objects.validateNotNullOrUndefined(dials, 'Meter dials');
