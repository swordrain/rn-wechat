

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  StyleSheet
} from 'react-native';

import MySwiper from './MySwiper';
import Message from './Message';
import Contacts from './Contacts';
import Discovery from './Discovery';
import Me from './Me';
import MyTab from './MyTab';



export default class Main extends Component {
	constructor(props){
	    super(props);
	    this.state = {
	    	index:1,
	    	showPopMenu: false
	    };
	  }

	  _onMomentumScrollEnd(e, state, context) {
	  	this.setState({index: state.index});
	  	//console.log(this.state.index);
	  }

	  _setActiveIndex(index) {
	  	this.setState({index: index});
	  }
	  


	render() {
		//height= total-height 667 - statusbar 20 - header 50 - tabbar 45 = 552

		 return (
	       <View style={styles.container}>
	        	<MySwiper index={this.state.index} onMomentumScrollEnd={this._onMomentumScrollEnd.bind(this)} height={552} showsPagination={false}>
	        		<Message />
	        		<Contacts />
	        		<Discovery />
	        		<Me />
	        	</MySwiper>
	        	
		      	<MyTab activeIndex={this.state.index} setActiveIndex={this._setActiveIndex.bind(this)}/>
	      </View>
	    );
	}
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
