import { useState } from "react"
import { Meter } from "../../../domain/Meter"
import { meterDescriptionValidator, meterNameValidator } from "../../../domain/validators/MeterValidators"
import { useSubmitButton } from "../../../hooks/forms/useSubmitButton"
import { useTextInput } from "../../../hooks/forms/useTextInput"
import { useMeterManager } from "../../../hooks/useMeterManager"
import { OnAfter, useNavigationManager } from "../../../hooks/useNavigationManager"
import { Card } from "../../atoms/card/Card"
import { ErrorMessage } from "../../atoms/text/ErrorMessage"

interface UpdateMeterFormProps {
  meter: Meter,
  onMeterUpdated: OnAfter<Meter>
}

export const UpdateMeterForm: React.FC<UpdateMeterFormProps> = ({
  meter,
  onMeterUpdated
}: UpdateMeterFormProps) => {

  const { updateMeter } = useMeterManager();
  const [error, setError] = useState('');

  const nameInput = useTextInput({
    defaultValue: meter.name,
    isRequired: true,
    label: "Meter name",
    validator: (name: string) => {
      meterNameValidator(name);
      return name
    },
    placeholder: 'Meter name'
  });

  const descriptionInput = useTextInput({
    defaultValue: meter.description,
    isRequired: false,
    label: "Meter description",
    validator: (description: string) => {
      meterDescriptionValidator(description);
      return description;
    },
    placeholder: 'Meter description'
  });

  const onClick = async (stopLoading: () => void) => {
    try {
      const updatedMeter = new Meter(
        meter.id,
        nameInput.formValue.value!,
        descriptionInput.formValue.value!,
        meter.dials
      );

      updateMeter(updatedMeter);
      onMeterUpdated(updatedMeter);
    } catch (error) {
      setError((error as Error).message);
    }
    stopLoading();
  };

  const createMeterButton = useSubmitButton({
    onClick,
    inputs: [nameInput, descriptionInput],
    text: 'Update meter'
  });

  return <Card>
    {!!error && <ErrorMessage>{error}</ErrorMessage>}
    {nameInput.jsx}
    {descriptionInput.jsx}
    {createMeterButton.jsx}
  </Card>
}