import AsyncStorage from '@react-native-async-storage/async-storage';
import { Meter } from "../domain/Meter";
import { MeterSerializer } from './serializers/MeterSerializer';

const KILOWHAT_STORAGE_ID = '@kilowhat_storage_id';

export const save = async (meters: Meter[]) => {
  try {
    await AsyncStorage.setItem(KILOWHAT_STORAGE_ID, MeterSerializer.serialize(meters));
  } catch (error) {
    throw new Error(`Something went wrong while saving: ${(error as Error).message}`);
  }
}

export const load = async () => {
  try {
    const serializedMeters = await AsyncStorage.getItem(KILOWHAT_STORAGE_ID);
    if (serializedMeters == null) {
      return [];
    }
    return MeterSerializer.deserialize(serializedMeters);
  } catch (error) {
    throw new Error(`Something went wrong while loading: ${(error as Error).message}`);
  }
}