import { DateTime } from "luxon";
import { idValidator } from "./validators/IdValidator";
import { readingTimestampValidator, readingValueValidator } from "./validators/ReadingValidators";

export class Reading {

  constructor(
    readonly id: string,
    readonly value: number,
    readonly timestamp: DateTime
  ) {
    idValidator(id);
    readingValueValidator(value);
    readingTimestampValidator(timestamp);
  }
}