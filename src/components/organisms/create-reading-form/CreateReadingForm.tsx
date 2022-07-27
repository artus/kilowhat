import { meterDescriptionValidator, meterNameValidator } from "../../../domain/validators/MeterValidators"
import { useSubmitButton } from "../../../hooks/forms/useSubmitButton"
import { useTextInput } from "../../../hooks/forms/useTextInput"
import { useMeterManager } from "../../../hooks/useMeterManager"
import { useNavigationManager } from "../../../hooks/useNavigationManager"
import { Card } from "../../atoms/card/Card"
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react"
import { ErrorMessage } from "../../atoms/text/ErrorMessage"
import { showSuccessToast } from "../../../helpers/ToastHelper"
import { Dial } from "../../../domain/Dial"
import { useNumberInput } from "../../../hooks/forms/useNumberInput"
import { inputValidatorWrapper } from "../../../domain/validators/InputValidatorWrapper"
import { readingValueValidator } from "../../../domain/validators/ReadingValidators"
import { Reading } from "../../../domain/Reading"
import { DateTime } from "luxon"
import { TimestampInputField } from "../../atoms/input/TimestampInputField"
import { Meter } from "../../../domain/Meter"

interface CreateReadingFormProps {
  dial: Dial,
  meter: Meter
}

export const CreateReadingForm: React.FC<CreateReadingFormProps> = ({
  dial,
  meter
}) => {

  const { persist } = useMeterManager();
  const navigationManager = useNavigationManager();
  const [error, setError] = useState<string>();

  const [timestamp, setTimestamp] = useState<DateTime>(DateTime.now());

  const valueInput = useNumberInput({
    isRequired: true,
    label: "Value",
    validator: inputValidatorWrapper(readingValueValidator)
  });

  const onClick = async (stopLoading: () => void) => {
    try {
      const reading = new Reading(
        uuidv4(),
        valueInput.formValue.value!,
        timestamp
      );

      dial.readings.push(reading);
      persist();
      navigationManager.toMeter(meter);
      showSuccessToast(`Added a new reading to dial ${dial.name}`);
    } catch (error) {
      setError((error as Error).message);
    }
    stopLoading();
  };

  const createReadingButton = useSubmitButton({
    onClick,
    inputs: [valueInput],
    text: 'Add reading'
  });

  return <Card>
    {error && <ErrorMessage>{error}</ErrorMessage>}
    {valueInput.jsx}
    <TimestampInputField
      onChange={setTimestamp}
      defaultValue={timestamp}
    />
    {createReadingButton.jsx}
  </Card>
}