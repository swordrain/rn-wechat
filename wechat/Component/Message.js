
import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  ListView
} from 'react-native';

import ChatItem from './ChatItem';

var conversation = [{
				icon: 'Jon',
				name: 'Jon', 
				lastMessage: "My watch is ended.",
				time: '10:02'
			}, {
				icon: 'Arya',
				name: 'Ayra',
				lastMessage: "I'm nobody.",
				time: '07:12'
			},{
				icon: 'Bran',
				name: 'Bran',
				lastMessage: 'Hold the door!',
				time: '00: 02'
			},{
				icon: 'Sansa',
				name: 'Sansa',
				lastMessage: '[图片]',
				time: '昨天'
			},{
				icon: 'Jaime',
				name: 'Jaime',
				lastMessage: "I'm king slayer.",
				time: '周五'
			},{
				icon: 'Tyrion',
				name: 'Tyrion',
				lastMessage: 'Drink, and women',
				time: '周三'
			},{
				icon: 'Daenerys',
				name: 'Daenerys',
				lastMessage: "I'm stormborn, the unburnt, queen of Meereen, queen of the Andals and the Rhoynar and the First Men, Khaleesi of the Great Grass Sea, Breaker of CHains and Mother of Dragons.",
				time: '周一'
			},{
				icon: 'Cersei',
				name: 'Cersei',
				lastMessage: 'Shame',
				time: '4月23日'
			},{
				icon: 'Robb',
				name: 'Robb',
				lastMessage: 'Red Wedding.',
				time: '2015年8月03日'
			},{
				icon: 'Ned',
				name: 'Ned',
				lastMessage: 'Winter is coming!',
				time: '2015年3月12日'
			}];

export default class Message extends Component {

	constructor(props){
		super(props);
		var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
		   dataSource: ds.cloneWithRows(conversation),
		};
	}


	render() {
		return (<ListView style={{flex: 1}}
      dataSource={this.state.dataSource}
      renderRow={(rowData) => <ChatItem {...rowData} />}
    />)
	}
}