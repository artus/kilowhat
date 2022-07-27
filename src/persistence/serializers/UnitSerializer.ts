import { Unit } from "../../domain/Unit";

export class UnitSerializer {

  static deserializeOne(unit: string): Unit {
    const deserializedUnit = JSON.parse(unit);
    return new Unit(
      deserializedUnit.id,
      deserializedUnit.name,
      deserializedUnit.notation
    );
  }

  static deserialize(units: string): Unit[] {
    const allUnits = JSON.parse(units);
    const toReturn = allUnits.map((unit: any) => {
      try {
        return new Unit(
          unit.id,
          unit.name,
          unit.notation
        );
      } catch (error) {
        // Unfortunately, do nothing
      }
    }).filter((deserializedUnit: Unit | undefined) => !!deserializedUnit)
    return toReturn;
  }

  static serialize(units: Unit[]): string {
    return JSON.stringify(units);
  }

  static serializeOne(unit: Unit): string {
    return JSON.stringify(unit);
  }
}