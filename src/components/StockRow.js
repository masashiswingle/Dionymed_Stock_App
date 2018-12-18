import React from 'react';
import { View, Text } from 'react-native';

const StockRow = (props) => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.textStyleName}>{props.name} </Text>
      <Text style={styles.textStyleValue}>{props.val}</Text>
    </View>
  );
};

const styles = {
  containerStyle: { 
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  textStyleName: {
    padding: 10, 
    flex: 1, 
    height: 40,
    marginLeft: 5,
    paddingTop: 10
  },
  textStyleValue: {
    height: 40,
    flex: 1, 
    paddingTop: 10
  }
};


export default StockRow;