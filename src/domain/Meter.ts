import { Dial } from "./Dial";
import { chainable } from "valivalue";
import { meterDescriptionValidator, meterDialsValidator, meterNameValidator } from "./validators/meter/MeterValidators";

export class Meter {

  constructor(
    readonly name: string,
    readonly description: string,
    readonly dials: Dial[] = []
  ) {
    meterNameValidator(name);
    meterDescriptionValidator(description);
    meterDialsValidator(dials);
  }
}