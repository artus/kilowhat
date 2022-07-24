import { Reading } from "./Reading";
import { Unit } from "./Unit";
import { chainable } from "valivalue";

export class Dial {

  constructor(
    readonly name: string,
    readonly unit: Unit,
    readonly readings: Reading[] = []
  ) {
    chainable(true)
      .objects.validateNotNullOrUndefined(name, 'Dial name')
      .objects.validateNotNullOrUndefined(unit, 'Dial unit')
      .objects.validateNotNullOrUndefined(readings, 'Dial readings')
      .strings.validateMinAndMaxLength(name, 1, 64, "Dial name");
  }
}