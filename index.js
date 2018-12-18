import React from 'react';
import { AppRegistry, View, Text, Linking } from 'react-native';
import Header from './src/components/Header';
import StockDetail from './src/components/StockDetail';
import Button from './src/components/Button';

const stockLookUpUrl = "https://thecse.com/en/listings/life-sciences/dionymed-brands-inc";

const App = () => {
	return (
		<View>
			<Header headerText="Dionymed"/>
			<StockDetail />
			<Button onPress={() => {Linking.openURL(stockLookUpUrl)}}>
      	Look Up
     	</Button>
		</View>
	);
}

AppRegistry.registerComponent("CNSTracker", () => App);
