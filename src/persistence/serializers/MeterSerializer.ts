import { Meter } from "../../domain/Meter";
import { DialSerializer } from "./DialSerializer";

export class MeterSerializer {

  static deserialize(meters: string): Meter[] {
    const allMeters = JSON.parse(meters);
    return allMeters.map((meter: any) => {
      try {

        const dials = DialSerializer.deserialize(meter.dials);

        return new Meter(
          meter.id,
          meter.name,
          meter.description,
          dials
        )
      } catch (error) {
        // Unfortunately, do nothing
      }
    }).filter((deserializedMeter: Meter | undefined) => !!deserializedMeter)
  }

  static serialize(meters: Meter[]): string {

    return JSON.stringify(meters.map(meter => {
      return {
        id: meter.id,
        name: meter.name,
        description: meter.description,
        dials: DialSerializer.serialize(meter.dials)
      }
    }));
  }
}