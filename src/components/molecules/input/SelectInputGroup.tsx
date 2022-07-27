import { InputLabel } from "../../atoms/input/InputLabel"
import { PickerEntry, SelectInputField } from "../../atoms/input/SelectInputField"

interface SelectInputGroupProps {
  labelText: string,
  error?: string,
  selectedValue?: PickerEntry,
  entries: PickerEntry[],
  onSelectedValue: (value: PickerEntry) => void | Promise<void>
}

export const SelectInputGroup: React.FC<SelectInputGroupProps> = ({
  labelText,
  error,
  selectedValue,
  entries,
  onSelectedValue
}: SelectInputGroupProps) => {
  return <>
    <InputLabel
      text={labelText}
      isError={!!error}
    />
    <SelectInputField
      entries={entries}
      selectedValue={selectedValue}
      onSelectedValue={onSelectedValue}
    />
  </>
}