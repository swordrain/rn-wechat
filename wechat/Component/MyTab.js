import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native';
import Tab from './Tab';


export default class MyTab extends Component {

	_setActiveIndex(index) {
		this.props.setActiveIndex(index);
	}

	render() {
		var {height, width} = Dimensions.get('window');
		return (<View style={[styles.tabContainer, {width: width}]}>
				<Tab title="微信" icon="message" isActive={this.props.activeIndex===0} setActiveIndex={this._setActiveIndex.bind(this, 0)}/>
				<Tab title="通讯录" icon="contacts" isActive={this.props.activeIndex===1}  setActiveIndex={this._setActiveIndex.bind(this, 1)}/>
				<Tab title="发现" icon="discovery" isActive={this.props.activeIndex===2} setActiveIndex={this._setActiveIndex.bind(this, 2)}/>
				<Tab title="我" icon="me" isActive={this.props.activeIndex===3} setActiveIndex={this._setActiveIndex.bind(this, 3)} />
			</View>)
	}
}

var styles = StyleSheet.create({
	tabContainer: {
		height: 45,
		borderTopWidth:2 ,
		borderTopColor: 'gray',
		flexDirection: 'row',
		flex: 1
	}
})