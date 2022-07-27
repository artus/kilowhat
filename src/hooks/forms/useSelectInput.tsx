import { PickerEntry, SelectInputField } from '../../components/atoms/input/SelectInputField';
import { SelectInputGroup } from '../../components/molecules/input/SelectInputGroup';
import { FormInput, FormInputParams, useFormValue } from './useFormValue';

interface SelectInputProps {
  readonly entries: PickerEntry[];
  readonly selectedItem?: PickerEntry;
  readonly defaultValue: PickerEntry;
}

export const useSelectInput = ({
  isRequired,
  label,
  validator,
  defaultValue,
  entries,
  selectedItem,
  validateInitially = false
}: FormInputParams<PickerEntry> & SelectInputProps): FormInput<PickerEntry> => {

  const formValue = useFormValue<PickerEntry>({
    validator,
    isRequired,
    defaultValue,
    validateInitially
  });

  const jsx = <>
    <SelectInputGroup
      labelText={label}
      error={formValue.error}
      selectedValue={selectedItem}
      entries={entries}
      onSelectedValue={formValue.onChange}
    />
  </>

  return new FormInput(
    formValue,
    jsx,
    formValue.onChange
  );
}