import React from 'react';
import { View, Text } from 'react-native';
import { VictoryChart, VictoryArea, VictoryTheme} from "victory-native";

const StockChart = (props) => {
  console.log(props)
  props.data.map((chartPoint) => {

  })

  return (
    <VictoryChart theme={VictoryTheme.material}>
      <VictoryArea
        style={{data: {fill: "#1A912E", fillOpacity: 0.7, stroke: "#c43a31", strokeWidth: 3}}}
        data={ [{x: 0, y: 2.32}, {x: 1, y: 2.31}] }
        domain={{x: [0, 4]}}
      />
    </VictoryChart>
  );
}

export default StockChart;
