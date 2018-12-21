import React from 'react';
import { View, Text, Linking } from 'react-native';
import Button from './Button';

const StockTitle = ( { title } ) => {
  const stockLookUpUrl = "https://thecse.com/en/listings/life-sciences/dionymed-brands-inc";

  const styles = {
    tickerStyle: {
      alignItems: 'flex-end',
      flexDirection: 'row',
      alignContent: 'center',
      marginRight: 20,
      paddingTop: 3
    }, 
    fontStyle: {
      fontFamily: 'Helvetica',
      fontSize: 20
    },
    stockValueStyle: { 
      marginRight: 5,
      fontSize: 40,
      fontFamily: 'Helvetica Neue',
      fontWeight: '300',
      borderColor: '#007aff'
    },
    percentColorStyle: {
      color: 'green'
    }
  }

  return (
    <View style={styles.tickerStyle}>
      <View>
        <Text style={styles.stockValueStyle}> {title.value || ""}</Text>
      </View>
      <View>
        <Text style={styles.fontStyle}>{title.company || ""}</Text>
        <Text> {title.ticker || ""} <Text style={{color: 'green'}}>+{title.valueChange || ""} </Text><Text style={styles.percentColorStyle}>(+{title.percentChange}%)</Text> </Text>
      </View>
    </View>
  )
}

export default StockTitle;