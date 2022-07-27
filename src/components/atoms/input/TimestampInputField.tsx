import RNDateTimePicker from "@react-native-community/datetimepicker"
import { DateTime } from "luxon"
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../../styles/Colors";
import { sizing } from "../../../styles/Sizing";

interface TimestampInputFieldProps {
  onChange: (value: DateTime) => void,
  defaultValue?: DateTime
}

export const TimestampInputField: React.FC<TimestampInputFieldProps> = ({
  onChange,
  defaultValue = DateTime.now()
}) => {

  const [show, setShow] = useState(false);
  const [timestamp, setTimestamp] = useState(defaultValue.toJSDate());

  const onPress = () => {
    setShow(true);
  }

  const onTimestampChange = (_event: any, selectedDate: Date | undefined) => {
    setShow(false);
    if (selectedDate) {
      setTimestamp(selectedDate);
    }
  }

  useEffect(() => {
    onChange(DateTime.fromJSDate(timestamp));
  }, [timestamp]);

  return <>
    <View
      style={styles.button}
      onTouchStart={onPress}
    >
      <Text style={styles.buttonText}>{timestamp.toLocaleDateString()}</Text>
    </View>

    {show && <RNDateTimePicker
      mode="date"
      value={DateTime.now().toJSDate()}
      onChange={onTimestampChange}
    />
    }
  </>
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    padding: sizing.padding.medium,
    margin: sizing.margin.small,
    backgroundColor: colors.buttons.orange,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: colors.white
  }
});