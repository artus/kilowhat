import { Picker } from "@react-native-picker/picker"
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { sizing } from "../../../styles/Sizing";

export interface PickerEntry {
  value: string,
  label: string,
  onSelect?: () => void | Promise<void>
}

interface SelectInputFieldProps {
  entries: PickerEntry[],
  onSelectedValue: (value: PickerEntry) => void | Promise<void>,
  selectedValue?: PickerEntry
}

export const SelectInputField: React.FC<SelectInputFieldProps> = ({
  entries,
  onSelectedValue,
  selectedValue,
}: SelectInputFieldProps) => {

  const [innerSelectedValue, setInnerSelectedValue] = useState<PickerEntry>();

  useEffect(() => {
    if (selectedValue) {
      setInnerSelectedValue(selectedValue);
    }
  }, []);

  return <Picker
    selectedValue={innerSelectedValue}
    onValueChange={(selection: PickerEntry) => {
      if (selection.onSelect) {
        selection.onSelect();
      } else {
        setInnerSelectedValue(selection);
        onSelectedValue(selection);
      }
    }}
    style={styles.picker}
  >
    {entries.map((entry, index) => <Picker.Item
      key={`items-${index}`}
      value={entry}
      label={entry.label} />
    )}
  </Picker>
}

const styles = StyleSheet.create({
  picker: {
    marginLeft: sizing.margin.small
  }
})