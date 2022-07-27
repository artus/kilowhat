import { useSubmitButton } from "../../../hooks/forms/useSubmitButton"
import { useTextInput } from "../../../hooks/forms/useTextInput"
import { useNavigationManager } from "../../../hooks/useNavigationManager"
import { Card } from "../../atoms/card/Card"
import { v4 as uuidv4 } from 'uuid';
import { useUnitManager } from "../../../hooks/useUnitManager"
import { unitNameValidator, unitNotationValidator } from "../../../domain/validators/UnitValidators"
import { inputValidatorWrapper } from "../../../domain/validators/InputValidatorWrapper"
import { Unit } from "../../../domain/Unit"
import { ErrorMessage } from "../../atoms/text/ErrorMessage";
import { useState } from "react";
import { showSuccessToast } from "../../../helpers/ToastHelper";

export const CreateUnitForm: React.FC = () => {

  const { addUnit } = useUnitManager();
  const navigationManager = useNavigationManager();
  const [error, setError] = useState<string>();

  const nameInput = useTextInput({
    isRequired: true,
    label: "Unit name",
    validator: inputValidatorWrapper(unitNameValidator),
    placeholder: 'Liters'
  });

  const notationInput = useTextInput({
    isRequired: true,
    label: "Unit notation",
    validator: inputValidatorWrapper(unitNotationValidator),
    placeholder: 'l'
  });

  const onClick = async (stopLoading: () => void) => {
    try {
      const name = nameInput.formValue.value!;
      const unit = new Unit(
        uuidv4(),
        nameInput.formValue.value!,
        notationInput.formValue.value!
      );

      addUnit(unit);
      navigationManager.back();
      showSuccessToast(`Created unit ${name}`);
    } catch (error) {
      setError((error as Error).message);
    }
    stopLoading();
  };

  const createMeterButton = useSubmitButton({
    onClick,
    inputs: [nameInput, notationInput],
    text: 'Create unit'
  });

  return <Card>
    {error && <ErrorMessage>{error}</ErrorMessage>}
    {nameInput.jsx}
    {notationInput.jsx}
    {createMeterButton.jsx}
  </Card>
}