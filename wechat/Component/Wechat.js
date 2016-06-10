

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,

} from 'react-native';

import Header from './Header';
import Main from './Main';

export default class Wechat extends Component{
	render() {
		return (<View style={{flex: 1}}>
			<Header />
			<Main />

			</View>)
	}
}