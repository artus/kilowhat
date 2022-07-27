import { chainable } from "valivalue";

export const unitNameValidator = (name: string) => chainable(true)
  .objects.validateNotNullOrUndefined(name, 'Unit name')
  .strings.validateMinAndMaxLength(name, 1, 32, 'Unit name');

export const unitNotationValidator = (notation: string) => chainable(true)
  .objects.validateNotNullOrUndefined(notation, 'Unit notation')
  .strings.validateMinAndMaxLength(notation, 1, 10, 'Unit notation');