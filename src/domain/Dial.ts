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

  getEarliestReading(): Reading {
    const orderedReadings = this.getOrderedReadings();
    return orderedReadings[0];
  }

  getDailyAverageConsumption(): number {
    const latestReading = this.getLatestReading();
    const earliestReading = this.getEarliestReading();

    const duration = latestReading.timestamp.diff(earliestReading.timestamp, [ 'days' ]);

    if (duration.days > 0) {
      return this.getConsumptionSinceFirstReading() / duration.days;
    } else {
      return latestReading.value
    }
  }

  getConsumptionSinceFirstReading(): number {
    return this.getLatestReading().value - this.getEarliestReading().value;
  }

  getAveragePerReading(): number {
    let sum = 0;
    let previousReading = this.getEarliestReading();
    const allReadings = this.getOrderedReadings();

    for (let i = 1; i < allReadings.length; i++) {
      const currentReading = allReadings[i];
      sum += currentReading.value - previousReading.value;
      previousReading = currentReading
    }

    return sum / allReadings.length;
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