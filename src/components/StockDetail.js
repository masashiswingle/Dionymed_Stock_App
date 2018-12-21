import React, { Component } from 'react';
import { View, Text, Linking, ScrollView } from 'react-native';
import axios from 'axios';
import moment from 'moment';
import StockSection from './StockSection';
import StockChart from './StockChart';
import StockStats from './StockStats';
import StockTitle from './StockTitle';
import Button from './Button';

const stockAPIUrl = "https://webapi.thecse.com/trading/listed/securities/DYME.json";
const stockLookUpUrl = "https://thecse.com/en/listings/life-sciences/dionymed-brands-inc";
const preloadChartData = [{time: 0, price: 0}, {time: 4, price: 0}];

class StockDetail extends Component { 
  state = { chartData: preloadChartData, stockData: {}, stockTitle: {}, chartBoundry: 4};

  processTickerData(ticker) {
    delete ticker["CSE25 Index Contribution"];
    delete ticker["Composite Index Contribution"];
    delete ticker["Trading Value (CAD)"];
    delete ticker["Time"];

    return ticker
  }

  componentWillMount() {
    axios.get(stockAPIUrl).then((response) => {
      let { ticker, trades, metatdata } = response.data;
      let filteredTrades = [trades[24], trades[20], trades[15], trades[10], trades[0]];
      
      let stockTitleData = {
        company: metatdata.security_name,
        ticker: metatdata.symbol,
        value: ticker["Last Price"],
        valueChange: ticker["Net Change"],
        percentChange: ticker["Net Change Percentage"]
      }
      console.log('stockTitleData.value.length', stockTitleData.value);
      if (stockTitleData.value.toString().length === 3){
        stockTitleData.value += "0"; 
      }

      let processedTrades = filteredTrades.map((trade) => {
        trade.time = moment.unix(trade.timestamp).format('hh:mm A');
        return trade; 
      });
      
      this.setState({ stockTitle: stockTitleData});
      this.setState({ stockData: this.processTickerData(ticker)});
      this.setState({ chartData: processedTrades});
    });
  }

  render() {
    return (
      <ScrollView>
        <StockSection>
          <StockTitle 
            title={this.state.stockTitle} 
          />
          <StockChart data={this.state.chartData}></StockChart>
        </StockSection>
        <StockSection>
          <StockStats info={this.state.stockData}></StockStats>
        </StockSection>
      </ScrollView>
    );
  }
}

export default StockDetail;
