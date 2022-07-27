import { Dial } from "../../domain/Dial";
import { ReadingSerializer } from "./ReadingSerializer";
import { UnitSerializer } from "./UnitSerializer";

export class DialSerializer {

  static deserialize(dials: string): Dial[] {

    if (dials == null || dials === "") {
      return [];
    }

    const deserializedDials = JSON.parse(dials);

    return deserializedDials.map((dial: any) => {
      try {
        return new Dial(
          dial.id,
          dial.name,
          UnitSerializer.deserializeOne(dial.unit),
          ReadingSerializer.deserialize(dial.readings)
        );
      } catch (error) {
        // Unfortunately, do nothing
      }
    }).filter((deserializedDial: Dial | undefined) => !!deserializedDial) as Dial[];
  }

  static serialize(dials: Dial[]): string {
    return JSON.stringify(dials.map(dial => {
      return {
        id: dial.id,
        name: dial.name,
        unit: UnitSerializer.serializeOne(dial.unit),
        readings: ReadingSerializer.serialize(dial.readings)
      }
    }));
  }
}