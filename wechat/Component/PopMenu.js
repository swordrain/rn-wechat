import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  Animated,
  LayoutAnimation
} from 'react-native';

var styles = StyleSheet.create({
	popMenu: {
		backgroundColor: 'rgb(26, 31, 33)',
		position:'absolute',
		top: 50,
		right: 10,
	}
})

export default class PopMenu extends Component{
	constructor(props) {
		super(props);
		this.state = {
			scale: 0,
			width: 0,
			height: 0
		}
	}


	componentDidMount() {
		//Animated动画目前无法改变transform origin，只能使用如下方式
		var intervalId = setInterval(()=>{
			this.setState({
				width: this.state.width + 20,
				height: this.state.height + 25
			});

			if(this.state.width >=200 ){
				clearInterval(intervalId);
			}


		}, 10);
	}

	render() {
	return(<View style={[styles.popMenu, {
			width: this.state.width,
			height: this.state.height
		}
		]}>



		</View>);
	}
}