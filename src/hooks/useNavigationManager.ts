import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { singletonHook } from "react-singleton-hook";

enum ButtonState {
  CREATE,
  CANCEl
}

const initialState = {
  buttonIcon: "add-outline",
  onButtonPress: () => { },
  state: ButtonState.CREATE,
  toRoot: () => { },
  toCreateMeter: () => { },
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
      case ButtonState.CANCEl:
        setButtonIcon("close-outline");
        break;
    }
  }, [buttonState]);

  const onButtonPress = () => {
    switch (buttonState) {
      case ButtonState.CREATE:
        toCreateMeter();
        break;
      case ButtonState.CANCEl:
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
    setButtonState(ButtonState.CANCEl);
  }

  return {
    buttonIcon,
    onButtonPress,
    state: buttonState,
    toRoot,
    toCreateMeter
  }
}

export const useNavigationManager = singletonHook(initialState, useNavigationManagerImpl);