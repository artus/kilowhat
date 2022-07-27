import { chainable } from "valivalue";
import { Reading } from "../Reading";
import { Unit } from "../Unit";

export const dialNameValidator = (name: string) => chainable(true)
  .objects.validateNotNullOrUndefined(name, 'Dial name')
  .strings.validateMinAndMaxLength(name, 1, 32, 'Dial name');

export const dialUnitValidator = (unit: Unit) => chainable(true)
  .objects.validateNotNullOrUndefined(unit, 'Dial unit');

export const dialReadingsValidator = (readings: Reading[]) => chainable(true)
  .objects.validateNotNullOrUndefined(readings, 'Dial readings');