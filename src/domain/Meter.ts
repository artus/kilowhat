import { Dial } from "./Dial";
import { idValidator } from "./validators/IdValidator";
import { meterDescriptionValidator, meterDialsValidator, meterNameValidator } from "./validators/MeterValidators";

export class Meter {

  constructor(
    readonly id: string,
    readonly name: string,
    readonly description: string,
    readonly dials: Dial[] = []
  ) {
    idValidator(id);
    meterNameValidator(name);
    meterDescriptionValidator(description);
    meterDialsValidator(dials);
  }
}