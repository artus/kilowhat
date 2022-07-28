import { Dial } from "./Dial";
import { idValidator } from "./validators/IdValidator";
import { meterDescriptionValidator, meterDialsValidator, meterNameValidator } from "./validators/MeterValidators";

export class Meter {

  constructor(
    readonly id: string,
    readonly name: string,
    readonly description: string,
    public dials: Dial[] = []
  ) {
    idValidator(id);
    meterNameValidator(name);
    meterDescriptionValidator(description);
    meterDialsValidator(dials);
  }

  addDial(dial: Dial): void {
    this.dials.push(dial);
  }

  removeDial(dial: Dial): void {
    this.dials = this.dials.filter(currentDial => currentDial.id !== dial.id);
  }
}