import { Reading } from "../domain/Reading";
import { v4 as uuidv4} from 'uuid';
import { DateTime, Duration } from "luxon";
import { Dial } from "../domain/Dial";
import { DEFAULT_UNITS } from "../domain/Unit";
import { Meter } from "../domain/Meter";

export const generateTestData = (meters = 5, dialsPerMeter = 3, readingsPerDial = 100) => {

  const allMeters = [];

  for (let meterCount = 0; meterCount < meters; meterCount++) {

    let dials = [];

    for (let dialCount = 0; dialCount < dialsPerMeter; dialCount++) {

      let readings = [];

      for (let readingCount = 0; readingCount < readingsPerDial; readingCount++) {
        readings.push(new Reading(
          uuidv4(),
          Math.floor(Math.random() * (10000 - 10 + 1) + 10),
          DateTime.now().minus(Duration.fromObject({ days: readingCount }))
        ));
      }

      dials.push(new Dial(
        uuidv4(),
        `Test dial ${meterCount} - ${dialCount}`,
        DEFAULT_UNITS[0],
        readings
      ));
    }

    allMeters.push(new Meter(
      uuidv4(),
      `Test meter ${meterCount}`,
      `Test meter description ${meterCount}`,
      dials
    ));
  }

  return allMeters;
}