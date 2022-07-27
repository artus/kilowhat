import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { LineChart as RNLineChart } from 'react-native-chart-kit';
import { colors } from '../../../styles/Colors';
import { sizing } from '../../../styles/Sizing';
import { PaddingSpacer } from '../spacers/PaddingSpacer';

interface LineChartData {
  dataset: number[],
  labels?: string[],
  width?: string | number,
  height?: string | number,
  color?: string,
  backgroundColor?: string,
  borderRadius?: number,
  padding?: number
}

export const LineChart: React.FC<LineChartData> = ({
  labels = [],
  dataset,
  width = '100%',
  height = 150,
  backgroundColor = colors.white,
  color = colors.black,
  borderRadius = 15,
  padding = sizing.padding.large
}) => {

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  return <PaddingSpacer
    style={paddingContainerStyle(backgroundColor, borderRadius).paddingSpacerContainer}
    size={padding}
    right={25}
  >
    <View
      style={styles(width, height).chartContainer}
      onLayout={(event) => {
        const { width, height } = event.nativeEvent.layout;
        setDimensions({ width, height });
      }}
    >
      <RNLineChart
        data={{
          labels,
          datasets: [
            {
              data: dataset
            }
          ]
        }}
        width={dimensions.width}
        height={dimensions.height}
        withInnerLines={false}
        withVerticalLabels={false}
        withHorizontalLabels={false}
        segments={3}
        style={{ 
          paddingRight: 0,
        }}
        chartConfig={{
          backgroundGradientFrom: backgroundColor,
          backgroundGradientTo: backgroundColor,
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 1) => color,
          labelColor: (opacity = 1) => color,
          style: {
            borderRadius: 25
          },
          propsForDots: {
            r: "0"
          }
        }}
      />
    </View>
  </PaddingSpacer>
}

const styles = (width: string | number, height: string | number) => StyleSheet.create({
  chartContainer: {
    width,
    height
  }
});

const paddingContainerStyle = (
  backgroundColor: string,
  borderRadius: number
) => StyleSheet.create({
  paddingSpacerContainer: {
    backgroundColor,
    borderRadius
  }
})