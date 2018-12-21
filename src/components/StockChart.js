import React from 'react';
import { View, Text } from 'react-native';
import { VictoryChart, VictoryArea, VictoryTheme} from "victory-native";

const StockChart = (props) => {
  // red chart color fill: "#c43a31", fillOpacity: 0.7, stroke: "#c43a31", strokeWidth: 3
  return (
    <VictoryChart padding={{top: 25, left: 50, right: 50, bottom: 40}}
      theme={VictoryTheme.material}
      domainPadding={{ x: 2 }}
      animate={{duration: 2000, onLoad: { duration: 1000 }}}
    >
      <VictoryArea
        style={{data: {fill: "#2216db", stroke: "#2216db", strokeWidth: 3 }}}
        data={props.data}
        x="time"
        y="price"
        domain={{y: [0, 4]}}
        key={1}
      />
    </VictoryChart>
  );
}

export default StockChart;
