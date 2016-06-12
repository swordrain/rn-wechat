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
		height: 70,
		flexDirection: 'row',
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop: 10,
		paddingBottom: 10,
		justifyContent: 'center',
		borderBottomColor: 'lightgrey',
		borderBottomWidth: 1
	},
	image: {
		height: 50,
		width: 50,

	},
	main: {
		flex: 1,
		paddingTop: 3,
		paddingLeft: 15
	},
	name: {
		fontSize: 18,
		marginBottom: 5
	},
	lastMessage: {
		color: 'gray',
		fontSize: 13
	},
	time: {
		marginTop: 10,
		color: 'gray',
		fontSize: 13
	}
})

export default class ChatItem extends Component{



	render() {
		var icon;
		//Image只认静态字符串资源
		switch(this.props.icon){
			case "Arya": 
			 	icon = require("../image/Arya.jpg");
			 	break;
			case "Bran": 
			 	icon = require("../image/Bran.jpg");
			 	break;
		 	case "Cersei": 
			 	icon = require("../image/Cersei.jpg");
			 	break;
		 	case "Daenerys": 
			 	icon = require("../image/Daenerys.jpg");
			 	break;
		 	case "Jaime": 
			 	icon = require("../image/Jaime.jpg");
			 	break;
		 	case "Jon": 
			 	icon = require("../image/Jon.jpg");
			 	break;
		 	case "Ned": 
			 	icon = require("../image/Ned.jpg");
			 	break;
		 	case "Robb": 
			 	icon = require("../image/Robb.jpg");
			 	break;
		 	case "Sansa": 
			 	icon = require("../image/Sansa.jpg");
			 	break;
		 	case "Tyrion": 
			 	icon = require("../image/Tyrion.jpg");
			 	break;
		}

		return(<View style={styles.container}>
				<Image resizeMode='cover' source={icon} style={styles.image} />
				<View style={styles.main}>
					<Text numberOfLines={1} style={styles.name}>{this.props.name}</Text>
					<Text numberOfLines={1} style={styles.lastMessage}>{this.props.lastMessage}</Text>
				</View>
				<Text style={styles.time}>{this.props.time}</Text>


			</View>)



	}
}