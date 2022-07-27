import { chainable } from "valivalue";
import { idValidator } from "./validators/IdValidator";
import { unitNameValidator, unitNotationValidator } from "./validators/UnitValidators";

export class Unit {

  constructor(
    readonly id: string,
    readonly name: string,
    readonly notation: string
  ) {
    idValidator(id);
    unitNameValidator(name);
    unitNotationValidator(notation);
  }
}

export const DEFAULT_UNITS = [
  new Unit('1', 'Kilowatt-hour', 'kWh'),
  new Unit('2', 'Kilowhatt', 'kW'),
  new Unit('3', 'Liter', 'l'),
  new Unit('4', 'Gallon', 'gal'),
  new Unit('5', 'Cubic meter', 'm3'),
  new Unit('6', 'Cubic feet', 'cf'),
  new Unit('7', 'Barrel', 'bbl')
]