import { Reading } from "./Reading";
import { Unit } from "./Unit";
import { dialNameValidator, dialReadingsValidator, dialUnitValidator } from "./validators/DialValidators";
import { idValidator } from "./validators/IdValidator";

export class Dial {

  constructor(
    readonly id: string,
    readonly name: string,
    readonly unit: Unit,
    public readings: Reading[] = []
  ) {
    idValidator(id);
    dialNameValidator(name);
    dialUnitValidator(unit);
    dialReadingsValidator(readings)
  }

  hasReadings(): boolean {
    return this.readings.length > 0;
  }

  getOrderedReadings(): Reading[] {
    return this.readings.sort(
      (readingA, readingB) => readingA.timestamp.toUnixInteger() - readingB.timestamp.toUnixInteger()
    );
  }

  getLatestReading(): Reading {
    const orderedReadings = this.getOrderedReadings();
    return orderedReadings[orderedReadings.length - 1];
  }

  addReading(reading: Reading): void {
    this.readings.push(reading);
  }

  removeReading(reading: Reading): void {
    this.readings = this.readings.filter(currentReading => {
      return currentReading.id !== reading.id
    });
  }
}