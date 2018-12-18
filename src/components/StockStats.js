import React from 'react';
import { View, Text } from 'react-native';
import StockRow from './StockRow';

const StockStats = ({ info }) => {
  function renderRow () {
    
    return Object.keys(info).map(data => {
      return <StockRow key={data} name={data} val={info[data]} />
    });
  }

  return (
    <View style={styles.viewStyle}>
      {renderRow()}
    </View> 
  )
};

const styles = {
  viewStyle: {
    display: 'flex',
    flexDirection: 'column',
    height: 50,
  }
};


export default StockStats;
