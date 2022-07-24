import { useNavigation } from "@react-navigation/native"
import { Meter } from "../../../domain/Meter"
import { meterDescriptionValidator, meterNameValidator } from "../../../domain/validators/meter/MeterValidators"
import { useSubmitButton } from "../../../hooks/forms/useSubmitButton"
import { useTextInput } from "../../../hooks/forms/useTextInput"
import { useMeterManager } from "../../../hooks/useMeterManager"
import { useNavigationManager } from "../../../hooks/useNavigationManager"
import { Card } from "../../atoms/card/Card"
import { CardTitle } from "../../molecules/card-title/CardTitle"

export const CreateMeterForm: React.FC = () => {

  const { addMeter } = useMeterManager();
  const navigationManager = useNavigationManager();

  const nameInput = useTextInput({
    isRequired: true,
    label: "Meter name",
    validator: (name: string) => {
      meterNameValidator(name);
      return name
    },
    validateInitially: false
  });

  const descriptionInput = useTextInput({
    isRequired: false,
    label: "Meter description",
    validator: (description: string) => {
      meterDescriptionValidator(description);
      return description;
    }
  });

  const onClick = async (stopLoading: () => void) => {
    const meter = new Meter(
      nameInput.formValue.value!,
      descriptionInput.formValue.value!
    );

    addMeter(meter);
    stopLoading();
    navigationManager.toRoot();
  };

  const createMeterButton = useSubmitButton({
    onClick,
    inputs: [nameInput, descriptionInput],
    text: 'Create meter'
  });

  return <Card>
    {nameInput.jsx}
    {descriptionInput.jsx}
    {createMeterButton.jsx}
  </Card>
}