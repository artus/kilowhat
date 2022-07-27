import { DateTime } from "luxon";
import { chainable } from "valivalue";

export const readingValueValidator = (value: number) => chainable(true)
  .objects.validateNotNullOrUndefined(value, 'Reading value');

export const readingTimestampValidator = (value: DateTime) => chainable(true)
  .objects.validateNotNullOrUndefined(value, 'Reading timestamp');