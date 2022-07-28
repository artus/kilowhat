import { useNavigation } from "@react-navigation/native";
import { singletonHook } from "react-singleton-hook";
import { Dial } from "../domain/Dial";
import { Meter } from "../domain/Meter";
import { Reading } from "../domain/Reading";

export type OnAfter<T> = (value: T) => void;

const initialState = {
  toRoot: () => { },
  toCreateMeter: () => { },
  toUpdateMeter: () => { },
  toCreateDial: () => { },
  toCreateUnit: () => { },
  back: () => { },
  toMeter: () => { },
  toUnits: () => { },
  toCreateReading: () => {},
  toDial: () => {},
  toSettings: () => {}
}

const useNavigationManagerImpl = () => {

  const navigation = useNavigation();

  const toRoot = () => {
    navigation.navigate('Home' as never);
  }

  const toCreateMeter = (onMeterCreated: OnAfter<Meter>) => {
    // @ts-ignore
    navigation.navigate('CreateMeter' as never, { onMeterCreated});
  }

  const toUpdateMeter = (meter: Meter, onMeterUpdated: OnAfter<Meter>) => {
    // @ts-ignore
    navigation.navigate('UpdateMeter' as never, { meter, onMeterUpdated });
  }

  const toCreateDial = (meter: Meter, onDialCreated: OnAfter<Dial>) => {
    // @ts-ignore
    navigation.navigate('CreateDial' as never, { meter, onDialCreated });
  }

  const toCreateUnit = () => {
    navigation.navigate('CreateUnit' as never);
  }

  const back = () => {
    navigation.goBack();
  }

  const toMeter = (meter: Meter) => {
    // @ts-ignore
    navigation.navigate('MeterPage' as never, { meter });
  }

  const toUnits = () => {
    navigation.navigate('UnitsPage' as never);
  }

  const toCreateReading = (dial: Dial, onReadingCreated: OnAfter<Reading>) => {
    // @ts-ignore
    navigation.navigate('CreateReading' as never, { dial, onReadingCreated })
  }

  const toDial = (meter: Meter, dial: Dial) => {
    // @ts-ignore
    navigation.navigate('DialPage' as never, { meter, dial })
  }

  const toSettings = () => {
    navigation.navigate('SettingsPage' as never);
  }

  return {
    toRoot,
    back,
    toCreateMeter,
    toUpdateMeter,
    toCreateDial,
    toCreateUnit,
    toMeter,
    toUnits,
    toCreateReading,
    toDial,
    toSettings
  }
}

export const useNavigationManager = singletonHook(initialState, useNavigationManagerImpl);