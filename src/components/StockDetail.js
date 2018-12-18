import React, { Component } from 'react';
import { View, Text, Linking } from 'react-native';
import axios from 'axios';
import StockSection from './StockSection';
import StockChart from './StockChart';
import StockStats from './StockStats';
import Button from './Button';

const stockAPIUrl = "https://webapi.thecse.com/trading/listed/securities/DYME.json";
const stockLookUpUrl = "https://thecse.com/en/listings/life-sciences/dionymed-brands-inc";

class StockDetail extends Component { 
  state = { chartData: [], stockData: {}};

  componentWillMount() {
    axios.get(stockAPIUrl).then((response) => {
      const { ticker, trades } = response.data;
      delete ticker["CSE25 Index Contribution"];
      delete ticker["Composite Index Contribution"];
      delete ticker["Time"];

      this.setState({ stockData: ticker});
      this.setState({ chartData: trades});
    });
  }

  render() {
    return (
      <View>
        <StockSection>
          <StockChart data={this.state.chartData}></StockChart>
        </StockSection>
        <StockSection>
          <StockStats info={this.state.stockData}></StockStats>
        </StockSection>
      </View>
    );
  }
}

export default StockDetail;
