import { Meter } from "../../domain/Meter";

export class MeterSerializer {

  static deserialize(meters: string): Meter[] {
    const allMeters = JSON.parse(meters);
    return allMeters.map((meter: any) => new Meter(
      meter.name,
      meter.description
    ));
  }

  static serialize(meters: Meter[]): string {
    return JSON.stringify(meters);
  }
}