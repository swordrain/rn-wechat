import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  Animated,
  LayoutAnimation
} from 'react-native';
import PopMenuItem from './PopMenuItem';

var styles = StyleSheet.create({
	popMenu: {
		backgroundColor: 'rgb(26, 31, 33)',
		position:'absolute',
		width: 200,
		height: 250,
		right: 10,
	}
})

export default class PopMenu extends Component{
	constructor(props) {
		super(props);
		this.state = {
			scale: new Animated.Value(0),
			top: new Animated.Value(-100),
		}
	}


	componentDidMount() {
		Animated.parallel([
		Animated.timing(                          
	      this.state.top,                 
	      {
	        toValue: 50,
	        duration: 100                    
	      }
	    ),
		Animated.timing(                          
	      this.state.scale,                 
	      {
	        toValue: 1,
	        duration: 100                    
	      }
	    )

	    ]).start();    


	}


	render() {
	return(<Animated.View style={[styles.popMenu, {
			top: this.state.top,
			transform: [                        // `transform`是一个有序数组（动画按顺序执行）
            {scale: this.state.scale},  // 将`bounceValue`赋值给 `scale`
          ]
		}
		]}>
			<PopMenuItem title="发起群聊" />
			<PopMenuItem title="添加朋友" />
			<PopMenuItem title="扫一扫" />
			<PopMenuItem title="收付款" />
			<PopMenuItem title="帮助与反馈" />
		</Animated.View>);
	}
}