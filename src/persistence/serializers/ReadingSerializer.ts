import { DateTime } from "luxon";
import { Reading } from "../../domain/Reading";

export class ReadingSerializer {

  static deserialize(readings: string): Reading[] {
    if (readings == null || readings === "") {
      return [];
    }

    const deserializedReadings = JSON.parse(readings);

    return deserializedReadings.map((reading: any) => {
      try {
        return new Reading(
          reading.id,
          reading.value,
          DateTime.fromISO(reading.timestamp)
        )
      } catch (error) {
        // Unfortunately, do nothing
      }
    }).filter((deserializedReading: Reading | undefined) => !!deserializedReading) as Reading[];
  }

  static serialize(readings: Reading[]): string {

    return JSON.stringify(readings.map(reading => {
      return {
        id: reading.id,
        value: reading.value,
        timestamp: reading.timestamp.toISO()
      }
    }));
  }
}