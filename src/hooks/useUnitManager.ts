import { useEffect, useState } from "react";
import { singletonHook } from "react-singleton-hook";
import { Unit } from "../domain/Unit";
import { loadUnits, saveUnits } from "../persistence/UnitStorage";

const initialState = {
  loading: true,
  units: [] as Unit[],
  addUnit: (unit: Unit) => {},
  removeUnit: (unit: Unit) => {},
  updateUnit: (unit: Unit) => {},
  persist: () => {}
}

const useUnitManagerImpl = () => {

  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [units, setUnits] = useState<Unit[]>([]);

  useEffect(() => {
    (async () => {
      const units = await loadUnits();
      setUnits(units);
    })();
  }, []);

  useEffect(() => {
    if (isInitialLoad) {
      setIsInitialLoad(false);
    } else {
      persist();
    }
  }, [units])

  const addUnit = async (unit: Unit) => {
    setUnits([...units, unit]);
  }

  const updateUnit = async (unit: Unit) => {
    const updatedUnits = units.map(currentUnit => {
      if (currentUnit.id === unit.id) {
        return unit;
      }
      return currentUnit;
    });
    setUnits(updatedUnits)
  }

  const removeUnit = async (unit: Unit) => {
    setUnits(units.filter(currentUnit => currentUnit.id !== unit.id));
  }

  const persist = async () => {
    saveUnits(units);
  }

  return {
    units,
    addUnit,
    updateUnit,
    removeUnit,
    persist,
    loading: isInitialLoad
  };
}

export const useUnitManager = singletonHook(initialState, useUnitManagerImpl);