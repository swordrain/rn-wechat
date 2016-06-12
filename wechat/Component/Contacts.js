
import React, { Component } from 'react';
import {
	AppRegistry,
	View,
	Text,

} from 'react-native';

import AlphabetListView from 'react-native-alphabetlistview';
import ContactsItem from './ContactsItem';

var contacts = {
	default: [{
		icon: 'new',
		name: '新的朋友'
	}, {
		icon: 'users',
		name: '群聊'
	},{
		icon: 'tag',
		name: "标签"
	},{
		icon: 'public',
		name: '公众号'
	}],
	enterprise: [{
		icon: 'enterprise',
		name: '企业号管理员助手'
	}],
	A: [{
		icon: 'Arya',
		name: 'Ayra',
	}],
	B: [{
		icon: 'Bran',
		name: 'Bran',
	}],
	C:[{
		icon: 'Cersei',
		name: 'Cersei',
	}],
	D: [{icon: 'Daenerys',
	name: 'Daenerys',}],
	E: [],
	F:[],
	G:[],
	H:[],
	I:[],
	J: [{
		icon: 'Jon',
		name: 'Jon'
	},{
		icon: 'Jaime',
		name: 'Jaime',
	}],
	K:[],
	L:[],
	M:[],
	N:[{
		icon: 'Ned',
		name: 'Ned'
	}],
	O:[],
	P:[],
	Q:[],
	R: [{icon: 'Robb',
	name: 'Robb',}],

	S: [{
		icon: 'Sansa',
		name: 'Sansa',
	}],
	T: [{
		icon: 'Tyrion',
		name: 'Tyrion',
	}],
	U:[],
	V:[],
	W:[],
	X:[],
	Y:[],
	Z:[]

	

}

/*
var contacts = [{
	icon: 'new',
	name: '新的朋友'
}, {
	icon: 'users',
	name: '群聊'
},{
	icon: 'tag',
	name: "标签"
},{
	icon: 'public',
	name: '公众号'
},{
	icon: 'enterprise',
	name: '企业号管理员助手'
},{
	icon: 'Jon',
	name: 'Jon'
},{
	icon: 'Arya',
	name: 'Ayra',
},{
	icon: 'Bran',
	name: 'Bran',
},{
	icon: 'Sansa',
	name: 'Sansa',
},{
	icon: 'Jaime',
	name: 'Jaime',
},{
	icon: 'Tyrion',
	name: 'Tyrion',
},{
	icon: 'Daenerys',
	name: 'Daenerys',
},{
	icon: 'Cersei',
	name: 'Cersei',
},{
	icon: 'Robb',
	name: 'Robb',
},{
	icon: 'Ned',
	name: 'Ned'
}];
*/

class SectionHeader extends Component {

	render() {
    // inline styles used for brevity, use a stylesheet when possible
    var textStyle = {
    	color:'gray',
    	fontSize:12,
    	paddingLeft: 15
    };

    var viewStyle = {
    	backgroundColor: '#ccc'
    };
    console.log(this.props)
    if(this.props.title&&this.props.sectionData.length > 0){
    return (
    	<View style={viewStyle}>
    		<Text style={textStyle}>{this.props.title}</Text>
    	</View>
    	);
	} else{
		return null;
	}
}
}

class SectionItem extends Component {
	render() {
		return (
			<Text style={{color:'black', fontSize:12}}>{this.props.title}</Text>
		);
	}
}

export default class Contacts extends Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		return (<AlphabetListView data={contacts}
			cell={ContactsItem}
			cellHeight={50}
			enableEmptySections={true}
			sectionListItem={SectionItem}
			sectionHeader={SectionHeader}
			sectionHeaderHeight={25}
			getSectionTitle={(title)=>{
				if(title === 'default'){
					return null;
				} else if (title === 'enterprise'){
					return '企业号';
				}
				return title;
			}}
			getSectionListTitle={(title)=>{
				if(title === 'default' || title ==='enterprise'){
					return null;
				}
				return title;
			}}
			/>)
	}
}