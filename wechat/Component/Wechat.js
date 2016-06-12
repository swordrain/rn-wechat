

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,

} from 'react-native';

import Header from './Header';
import Main from './Main';
import PopMenu from './PopMenu';

export default class Wechat extends Component{

	constructor(props){
		super(props);
		this.state = {
			showPopMenu: false
		}
	}

	_toggleMenu() {
	  	this.setState({
	  		showPopMenu: !this.state.showPopMenu
	  	});
	  }


	render() {
		//PopMenu必须放在最后，否则会被<Main>的内容阻挡
		return (<View style={{flex: 1}}>
			<Header toggleMenu={this._toggleMenu.bind(this)}/>
			
			<Main />
			{ this.state.showPopMenu?(<PopMenu />): null}
			</View>)
	}
}