import React from 'react';
import { AppRegistry, View, Text, Linking } from 'react-native';
import Header from './src/components/Header';
import StockDetail from './src/components/StockDetail';

const App = () => {
	return (
		<View style={{ flex: 1 }}>
			<Header headerText="Stocks"/>
			<StockDetail />
		</View>
	);
}

AppRegistry.registerComponent("CNSTracker", () => App);
