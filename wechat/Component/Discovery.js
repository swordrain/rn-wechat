
import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

var styles = StyleSheet.create({
	container: {
		backgroundColor: 'rgb(223,223,223)',
		flex: 1
	},
	friend: {
		height: 50,
		backgroundColor: 'white',
		borderBottomWidth: 1,
		borderBottomColor: 'rgb(223,223,223)',
		flexDirection: 'row',
		alignItems:'center',
		marginTop: 20,
		paddingLeft: 50
	},
	friendText: {
		flex: 1
	},
	friendHeaderImage: {
		height: 30,
		width: 30
	},
	friendHeader: {
		marginRight: 20,
		position: 'relative'
	},
	dot: {
		width: 8,
		height: 8,
		borderRadius: 4,
		backgroundColor: 'red',
		position: 'absolute',
		right: -3,
		top: -3
	},
	scan: {
		height: 50,
		backgroundColor: 'white',
		borderBottomWidth: 1,
		borderBottomColor: 'rgb(223,223,223)',
		flexDirection: 'row',
		alignItems:'center',
		marginTop: 20,
		paddingLeft: 50
	},
	wave: {
		height: 50,
		backgroundColor: 'white',
		flexDirection: 'row',
		alignItems:'center',
		paddingLeft: 50
	},
	nearby: {
		height: 50,
		backgroundColor: 'white',
		borderBottomWidth: 1,
		borderBottomColor: 'rgb(223,223,223)',
		flexDirection: 'row',
		alignItems:'center',
		marginTop: 20,
		paddingLeft: 50
	},
	shopping: {
		height: 50,
		backgroundColor: 'white',
		borderBottomWidth: 1,
		borderBottomColor: 'rgb(223,223,223)',
		flexDirection: 'row',
		alignItems:'center',
		marginTop: 20,
		paddingLeft: 50
	},
	game: {
		height: 50,
		backgroundColor: 'white',
		flexDirection: 'row',
		alignItems:'center',
		paddingLeft: 50
	},
});

export default class Discovery extends Component {
	//静态实现，不再做成组件
	render() {
		return (<View style={styles.container}>
				<View style={styles.friend}>
					<Text style={styles.friendText}>朋友圈</Text>
					<View style={styles.friendHeader}>
						<Image source={require('../image/flash.jpg')} style={styles.friendHeaderImage} />
						<View style={styles.dot}></View>
					</View>
				</View>
				<View style={styles.scan}>
					<Text>扫一扫</Text>
				</View>
				<View style={styles.wave}>
					<Text>摇一摇</Text>
				</View>
				<View style={styles.nearby}>
					<Text>附近的人</Text>
				</View>

				<View style={styles.shopping}>
					<Text>购物</Text>
				</View>
				<View style={styles.game}>
					<Text>游戏</Text>
				</View>
			</View>)
	}
}