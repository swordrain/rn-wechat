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
		height: 50,
		flexDirection: 'row',
		alignItems:'center',
		paddingLeft: 15
		
	},
	icon: {
		height: 35,
		width: 35,
		marginRight: 10
	},
	name: {
		fontSize: 14
	}
});

export default class ContactsItem extends Component{

	render() {
		console.log(this.props);
		var icon;
		//Image只认静态字符串资源
		switch(this.props.item.icon){
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
			case "new":
				icon = require("../image/new.png");
				break;
			case "users":
				icon = require("../image/users.png");
				break;
			case "tag":
				icon = require("../image/tag.png");
				break;
			case "public":
				icon = require("../image/public.png");
				break;
			case "enterprise":
				icon = require("../image/enterprise.png");
				break;
		}

		var borderBottomStyle = this.props.isLast? null: {borderBottomColor: 'lightgrey',
		borderBottomWidth: 1,};
		if(this.props.item){
			return(<View style={[styles.container, borderBottomStyle]}>
				<Image resizeMode='cover' style={styles.icon} source={icon} />
				<Text numberOfLines={1} style={styles.name}>
					{this.props.item.name}
				</Text>

			</View>)
		}
	}


}