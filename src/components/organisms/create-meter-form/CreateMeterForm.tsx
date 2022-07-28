import { Meter } from "../../../domain/Meter"
import { meterDescriptionValidator, meterNameValidator } from "../../../domain/validators/MeterValidators"
import { useSubmitButton } from "../../../hooks/forms/useSubmitButton"
import { useTextInput } from "../../../hooks/forms/useTextInput"
import { useMeterManager } from "../../../hooks/useMeterManager"
import { OnAfter, useNavigationManager } from "../../../hooks/useNavigationManager"
import { Card } from "../../atoms/card/Card"
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react"
import { ErrorMessage } from "../../atoms/text/ErrorMessage"
import { showSuccessToast } from "../../../helpers/ToastHelper"

interface CreateMeterFormProps {
  onMeterCreated: OnAfter<Meter>
}

export const CreateMeterForm: React.FC<CreateMeterFormProps> = ({
  onMeterCreated
}) => {

  const { addMeter } = useMeterManager();
  const [error, setError] = useState<string>();

  const nameInput = useTextInput({
    isRequired: true,
    label: "Meter name",
    validator: (name: string) => {
      meterNameValidator(name);
      return name
    },
    placeholder: 'Electricity meter'
  });

  const descriptionInput = useTextInput({
    isRequired: false,
    label: "Meter description",
    validator: (description: string) => {
      meterDescriptionValidator(description);
      return description;
    },
    placeholder: 'The electricity meter in our basement.'
  });

  const onClick = async (stopLoading: () => void) => {
    const name = nameInput.formValue.value!;
    try {
      const meter = new Meter(
        uuidv4(),
        nameInput.formValue.value!,
        descriptionInput.formValue.value!
      );

      addMeter(meter);
      onMeterCreated(meter);
      showSuccessToast(`Created meter ${name}`);
    } catch (error) {
      setError((error as Error).message);
    }
    stopLoading();
  };

  const createMeterButton = useSubmitButton({
    onClick,
    inputs: [nameInput, descriptionInput],
    text: 'Create meter'
  });

  return <Card>
    {!!error && <ErrorMessage>{error}</ErrorMessage>}
    {nameInput.jsx}
    {descriptionInput.jsx}
    {createMeterButton.jsx}
  </Card>
}