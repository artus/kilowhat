import AsyncStorage from '@react-native-async-storage/async-storage';
import { DEFAULT_UNITS, Unit } from '../domain/Unit';
import { UnitSerializer } from './serializers/UnitSerializer';

const UNIT_STORAGE_ID = '@kilowhat_storage_id_units';

export const saveUnits = async (units: Unit[]) => {
  try {
    await AsyncStorage.setItem(UNIT_STORAGE_ID, UnitSerializer.serialize(units));
  } catch (error) {
    throw new Error(`Something went wrong while saving: ${(error as Error).message}`);
  }
}

export const loadUnits = async (): Promise<Unit[]> => {
  try {
    const serializedUnits = await AsyncStorage.getItem(UNIT_STORAGE_ID);
    if (serializedUnits == null || JSON.parse(serializedUnits).length === 0) {
      return DEFAULT_UNITS;
    }
    return UnitSerializer.deserialize(serializedUnits);
  } catch (error) {
    throw new Error(`Something went wrong while loading: ${(error as Error).message}`);
  }
}