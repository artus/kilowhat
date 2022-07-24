import { useEffect, useState } from "react";
import { singletonHook } from "react-singleton-hook";
import { Meter } from "../domain/Meter";
import { load, save } from "../persistence/MeterStorage";

const initialState = {
  loading: true,
  meters: [] as Meter[],
  addMeter: (meter: Meter) => {},
  persist: () => {}
}

const useMeterManagerImpl = () => {

  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [meters, setMeters] = useState<Meter[]>([]);

  useEffect(() => {
    (async () => {
      const meters = await load();
      setMeters(meters);
    })();
  }, []);

  useEffect(() => {
    if (isInitialLoad) {
      setIsInitialLoad(false);
    } else {
      persist();
    }
  }, [meters])

  const addMeter = async (meter: Meter) => {
    setMeters([...meters, meter]);
  }

  const persist = async () => {
    save(meters);
  }

  return {
    meters, 
    addMeter,
    persist,
    loading: isInitialLoad
  };
}

export const useMeterManager = singletonHook(initialState, useMeterManagerImpl);