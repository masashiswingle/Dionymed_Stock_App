import React from 'react';
import { View } from 'react-native';

const StockSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5, 
    borderColor: '#ddd'
  }
};

export default StockSection;

