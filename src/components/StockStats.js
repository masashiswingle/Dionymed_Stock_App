import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import StockRow from './StockRow';

const StockStats = ({ info }) => {
  function renderRow () {
    return Object.keys(info).map(data => {
      return <StockRow key={data} name={data} val={info[data]} />
    });
  }

  return (
    <ScrollView style={styles.viewStyle}>
      {renderRow()}
    </ScrollView> 
  )
};

const styles = {
  viewStyle: {
    display: 'flex',
    height: 400,
    flexDirection: 'column',
  }
};


export default StockStats;
