import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { singletonHook } from "react-singleton-hook";
import { Dial } from "../domain/Dial";
import { Meter } from "../domain/Meter";

enum ButtonState {
  CREATE,
  CANCEL
}

const initialState = {
  buttonIcon: "add-outline",
  onButtonPress: () => { },
  state: ButtonState.CREATE,
  toRoot: () => { },
  toCreateMeter: () => { },
  toUpdateMeter: () => { },
  toCreateDial: () => { },
  toCreateUnit: () => { },
  back: () => { },
  toMeter: () => { },
  toUnits: () => { },
  toCreateReading: () => {},
  toDial: () => {}
}

const useNavigationManagerImpl = () => {

  const navigation = useNavigation();
  const [buttonState, setButtonState] = useState<ButtonState>(ButtonState.CREATE);
  const [buttonIcon, setButtonIcon] = useState("add-outline");

  useEffect(() => {
    switch (buttonState) {
      case ButtonState.CREATE:
        setButtonIcon("add");
        break;
      case ButtonState.CANCEL:
        setButtonIcon("close-outline");
        break;
    }
  }, [buttonState]);

  const onButtonPress = () => {
    switch (buttonState) {
      case ButtonState.CREATE:
        toCreateMeter();
        break;
      case ButtonState.CANCEL:
        toRoot();
        break;
    }
  }

  const toRoot = () => {
    navigation.navigate('Home' as never);
    setButtonState(ButtonState.CREATE);
  }

  const toCreateMeter = () => {
    navigation.navigate('CreateMeter' as never);
    setButtonState(ButtonState.CANCEL);
  }

  const toUpdateMeter = (meter: Meter) => {
    // @ts-ignore
    navigation.navigate('UpdateMeter' as never, { meter });
    setButtonState(ButtonState.CANCEL)
  }

  const toCreateDial = (meter: Meter, onDialCreated?: () => void) => {
    // @ts-ignore
    navigation.navigate('CreateDial' as never, { meter, onDialCreated });
    setButtonState(ButtonState.CANCEL)
  }

  const toCreateUnit = () => {
    navigation.navigate('CreateUnit' as never);
    setButtonState(ButtonState.CANCEL)
  }

  const back = () => {
    navigation.goBack();
  }

  const toMeter = (meter: Meter) => {
    // @ts-ignore
    navigation.navigate('MeterPage' as never, { meter });
    setButtonState(ButtonState.CANCEL);
  }

  const toUnits = () => {
    navigation.navigate('UnitsPage' as never);
    setButtonState(ButtonState.CANCEL);
  }

  const toCreateReading = (meter: Meter, dial: Dial) => {
    // @ts-ignore
    navigation.navigate('CreateReading' as never, { meter, dial })
    setButtonState(ButtonState.CANCEL)
  }

  const toDial = (dial: Dial) => {
    // @ts-ignore
    navigation.navigate('DialPage' as never, { dial })
    setButtonState(ButtonState.CANCEL)
  }

  return {
    buttonIcon,
    onButtonPress,
    state: buttonState,
    toRoot,
    back,
    toCreateMeter,
    toUpdateMeter,
    toCreateDial,
    toCreateUnit,
    toMeter,
    toUnits,
    toCreateReading,
    toDial
  }
}

export const useNavigationManager = singletonHook(initialState, useNavigationManagerImpl);