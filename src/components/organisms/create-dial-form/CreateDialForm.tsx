import { useMemo, useState } from "react"
import { Dial } from "../../../domain/Dial"
import { Meter } from "../../../domain/Meter"
import { dialNameValidator } from "../../../domain/validators/DialValidators"
import { useSelectInput } from "../../../hooks/forms/useSelectInput"
import { useSubmitButton } from "../../../hooks/forms/useSubmitButton"
import { useTextInput } from "../../../hooks/forms/useTextInput"
import { OnAfter, useNavigationManager } from "../../../hooks/useNavigationManager"
import { useUnitManager } from "../../../hooks/useUnitManager"
import { Card } from "../../atoms/card/Card"
import { PickerEntry } from "../../atoms/input/SelectInputField"
import { v4 as uuidv4 } from 'uuid';
import { Unit } from "../../../domain/Unit"
import { useMeterManager } from "../../../hooks/useMeterManager"
import { ErrorMessage } from "../../atoms/text/ErrorMessage"
import { showSuccessToast } from "../../../helpers/ToastHelper"
import { Alert } from "react-native"
import { useRefresh } from "../../../hooks/useRefresh"

interface CreateDialFormProms {
  meter: Meter,
  onDialCreated: OnAfter<Dial>
}

export const CreateDialForm: React.FC<CreateDialFormProms> = ({
  meter,
  onDialCreated
}: CreateDialFormProms) => {

  const { units } = useUnitManager();
  const { persist } = useMeterManager();
  const navigationManager = useNavigationManager();
  const [error, setError] = useState<string>();

  const unitEntries = useMemo(() => {
    return [
      ...units.map(unit => ({ label: `${unit.name} (${unit.notation})`, value: unit.id })),
      {
        label: 'Create new unit',
        value: 'illegal',
        onSelect: navigationManager.toCreateUnit
      }
    ]
  }, [units]);

  const nameInput = useTextInput({
    isRequired: true,
    label: 'Dial name',
    validator: (name: string) => {
      dialNameValidator(name);
      return name;
    },
    placeholder: 'Night tariff'
  });

  const unitInput = useSelectInput({
    isRequired: true,
    label: 'Unit',
    validator: (unit: PickerEntry) => {
      return unit;
    },
    defaultValue: unitEntries[0],
    entries: unitEntries
  });

  const submitButton = useSubmitButton({
    onClick: createDial,
    inputs: [nameInput, unitInput],
    text: 'Create dial'
  });

  function createDial(stopLoading: () => void) {
    try {
      const selectedUnitId = unitInput.formValue.value!;
      const selectedUnit: Unit = units.find(unit => unit.id === selectedUnitId.value)!;
      const name = nameInput.formValue.value!;
      const newDial = new Dial(
        uuidv4(),
        name,
        selectedUnit
      )
      meter.addDial(newDial);
      persist();

      Alert.alert(
        'Create another one?',
        `Do you want to add another dial for meter '${meter.name}'?`,
        [
          {
            text: 'Yes', onPress: () => {
              navigationManager.back();
              navigationManager.toCreateDial(meter, onDialCreated);
            }
          },
          { text: 'No', style: 'cancel', onPress: () => onDialCreated(newDial)}
        ]
      );

      showSuccessToast(`Created dial ${name}`)
    } catch (error) {
      setError((error as Error).message);
    }
    stopLoading();
  }

  return <Card>
    {error && <ErrorMessage>{error}</ErrorMessage>}
    {nameInput.jsx}
    {unitInput.jsx}
    {submitButton.jsx}
  </Card>
}