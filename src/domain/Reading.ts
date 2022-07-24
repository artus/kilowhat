import { DateTime } from "luxon";
import valivalue from "valivalue";

export class Reading {

  constructor(
    readonly value: number,
    readonly timestamp: DateTime
  ) {
    valivalue.objects.validateNotNull(timestamp, 'Timestamp');
  }
}