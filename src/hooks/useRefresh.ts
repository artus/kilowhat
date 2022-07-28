import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";

export const useRefresh = <T>(initialState: T) => {
  const [state, setState] = useState<T>(initialState);
  const isFocused = useIsFocused();

  useEffect(() => {
    isFocused && setState(state);
  }, [isFocused]);

  return state;
}