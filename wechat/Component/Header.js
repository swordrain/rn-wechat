import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight
} from 'react-native';
import PopMenu from './PopMenu';

var styles = StyleSheet.create({
	headerContainer: {
		height: 50,
		marginTop:20,
		backgroundColor: 'rgb(26, 31, 33)',
		flexDirection: 'row',
		alignItems:'center',
	},
	headerTitle: {
		fontSize: 18,
		marginLeft: 15,
		color: 'white'
	},
	headerTitleContainer: {
		flex: 1
	},
	headerIconButtonContainer: {
		alignItems:'center',
		justifyContent: 'center',
		marginLeft: 10,
		marginRight: 10,
		height: 50,
		width:50
	},
	headerIconButton: {
		width: 20,
		height: 20,		
		tintColor: 'white',
	},
	
});

export default class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showPopMenu: false
		}
	}

	_showMenu() {
		this.setState({
			showPopMenu: !this.state.showPopMenu
		})
	}

	render() {
		return (
			<View style={styles.headerContainer}>
				<View style={styles.headerTitleContainer}>
					<Text style={styles.headerTitle}>微信(243)</Text>
				</View>
				<TouchableHighlight onPress={()=>{}} underlayColor='black' style={styles.headerIconButtonContainer}>
					<Image style={styles.headerIconButton} source={require('../image/search.png')}/>
				</TouchableHighlight>
				<TouchableHighlight onPress={this._showMenu.bind(this)}  underlayColor='black' style={styles.headerIconButtonContainer}>
					<Image style={styles.headerIconButton} source={require('../image/add.png')}/>
				</TouchableHighlight>
				{ this.state.showPopMenu?(<PopMenu />): null}
			</View>
			)
	}
}