import { chainable } from "valivalue";

export class Unit {

  constructor(
    readonly name: string,
    readonly notation: string
  ) {
    chainable(true)
      .objects.validateNotNullOrUndefined(name, 'Unit name')
      .objects.validateNotNullOrUndefined(notation, 'Unit notation')
      .strings.validateMinAndMaxLength(name, 1, 64, 'Unit name')
      .strings.validateMinAndMaxLength(name, 1, 10, 'Unit notation');
  }
}