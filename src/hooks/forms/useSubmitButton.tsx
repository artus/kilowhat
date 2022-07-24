import React from 'react';
import { Text } from 'react-native';
import { Button } from '../../components/atoms/buttons/Button';
import { Loader } from '../../components/atoms/loader/Loader';

// import { Loader } from '../../components/loader/Loader';
import { useLoader } from '../../hooks/useLoader';
import { useCanSubmit } from "./useCanSubmit";
import { FormInput } from "./useFormValue";


interface SubmitButtonParams {
  onClick: (stopLoading: () => void) => Promise<void> | void,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  inputs?: FormInput<any>[];
  text?: string;
  children?: JSX.Element
}

class SubmitButtonState {
  constructor(
    readonly jsx: JSX.Element,
    readonly stopLoading: () => void
  ) { }
}

export const useSubmitButton = ({
  onClick,
  inputs = [],
  text,
  children
}: SubmitButtonParams): SubmitButtonState => {

  const canSubmit = useCanSubmit(inputs);
  const loader = useLoader(false);

  const innerOnClick = async () => {
    loader.start();
    await onClick(loader.stop);
  }

  const jsx = <Button
    isEnabled={!loader.isLoading && canSubmit}
    onClick={innerOnClick}
  >
    {
      loader.isLoading
        ? <Loader color="white" />
        : text
          ? <Text style={{ color: "white" }}>{text}</Text>
          : children
    }
  </Button>

  return new SubmitButtonState(jsx, loader.stop);
}