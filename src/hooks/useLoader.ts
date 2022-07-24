import { useMemo, useState } from "react";

export class LoaderControls {

  constructor(
    readonly isLoading: boolean,
    readonly start: () => void,
    readonly stop: () => void
  ) { }
}

export const useLoader = (isLoadingInitially = true): LoaderControls => {

  const [isLoading, setIsLoading] = useState(isLoadingInitially);

  const result = useMemo(() => {
    return new LoaderControls(
      isLoading,
      () => setIsLoading(true),
      () => setIsLoading(false)
    );
  }, [isLoading]);

  return result;
}