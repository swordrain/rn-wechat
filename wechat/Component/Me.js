
import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

var styles = StyleSheet.create({
	container: {
		backgroundColor: 'rgb(223,223,223)',
		flex: 1
	},
	introduction: {
		height: 80,
		backgroundColor: 'white',
		flexDirection: 'row',
		alignItems:'center',
		marginTop: 20
	},
	logo: {
		width: 60, 
		height: 60,
		marginLeft: 15 
	},
	name: {
		fontSize: 16,
		marginLeft: 15,
		flex: 1
	},
	qr: {
		width: 30,
		height: 30,
		marginRight: 20
	},
	album: {
		height: 50,
		backgroundColor: 'white',
		borderBottomWidth: 1,
		borderBottomColor: 'rgb(223,223,223)',
		flexDirection: 'row',
		alignItems:'center',
		marginTop: 20,
		paddingLeft: 50
	},
	collection: {
		height: 50,
		backgroundColor: 'white',
		flexDirection: 'row',
		alignItems:'center',
		paddingLeft: 50
	},
	wallet: {
		height: 50,
		backgroundColor: 'white',
		borderBottomWidth: 1,
		borderBottomColor: 'rgb(223,223,223)',
		flexDirection: 'row',
		alignItems:'center',
		marginTop: 20,
		paddingLeft: 50
	},
	card: {
		height: 50,
		backgroundColor: 'white',
		flexDirection: 'row',
		alignItems:'center',
		paddingLeft: 50
	},
	new: {
		marginLeft: 10,
		fontSize: 12,
		backgroundColor: 'red',
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop: 3,
		paddingBottom: 3,
		color: 'white',
		borderRadius: 10
	},
	face: {
		height: 50,
		backgroundColor: 'white',
		borderBottomWidth: 1,
		borderBottomColor: 'rgb(223,223,223)',
		flexDirection: 'row',
		alignItems:'center',
		marginTop: 20,
		paddingLeft: 50
	},
	setting: {
		height: 50,
		backgroundColor: 'white',
		borderBottomWidth: 1,
		borderBottomColor: 'rgb(223,223,223)',
		flexDirection: 'row',
		alignItems:'center',
		marginTop: 20,
		paddingLeft: 50
	},
})

export default class Me extends Component {
	//静态实现，不再做成组件
	render() {
		return (<View style={styles.container}>
				<View style={styles.introduction}>
					<Image source={require('../image/flash.jpg')} style={styles.logo} />
					<Text style={styles.name}>我的微信号</Text>
					<Image source={require('../image/qr.png')} style={styles.qr} />
				</View>
				<View style={styles.album}>
					<Text>相册</Text>
				</View>
				<View style={styles.collection}>
					<Text>收藏</Text>
				</View>
				<View style={styles.wallet}>
					<Text>钱包</Text>
				</View>
				<View style={styles.card}>
					<Text>卡券</Text>
					<Text style={styles.new}>New</Text>
				</View>
				<View style={styles.face}>
					<Text>表情</Text>
				</View>
				<View style={styles.setting}>
					<Text>设置</Text>
					<Text style={styles.new}>New</Text>
				</View>
			
			</View>)
	}
}