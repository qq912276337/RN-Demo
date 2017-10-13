/**
 * Created by sml2 on 2017/10/13.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TouchableOpacity, // 不透明度触摸
    AlertIOS,
    TabBarIOS,
} from 'react-native';

var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;

// ES5
var TabbarIOS = React.createClass({

    statics: {
        title: '<TabBarIOS>',
        description: 'Tab-based navigation.',
    },

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.headerViewStyle}>
                    <Text>TABBAR</Text>
                </View>

                <TabBarIOS
                    unselectedTintColor="yellow"
                    tintColor="white"
                    barTintColor="darkslateblue">
                    <TabBarIOS.Item
                        title="Blue Tab"
                    >
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        systemIcon="history">
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        systemIcon="history">
                    >
                    </TabBarIOS.Item>
                </TabBarIOS>
            </View>
        );
    },


});


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'green',
    },

    headerViewStyle:{
        height:ScreenHeight,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center'
    },

    barItemViewStyle:{
        // flex:1,
        justifyContent:'center',
        alignItems:'center',

    }
});
//
// // ES5
// var TabbarIOS = React.createClass({
//
//     // 设置初始值
//     getInitialState(){
//         return{
//             // 默认被选中的tabBarItem
//             selectedTabBarItem: 'home'
//         }
//     },
//
//
//     render() {
//         return (
//             <View style={styles.container}>
//                 {/*头部*/}
//                 <View style={styles.headerViewStyle}>
//                     <Text style={{color:'white'}}>Tab选项卡的切换</Text>
//                 </View>
//
//                 {/*选项卡*/}
//                 <TabBarIOS
//                     barTintColor='orange'
//                     tintColor = 'purple'
//                 >
//                     {/*第一块*/}
//                     <TabBarIOS.Item
//                         systemIcon="downloads"
//                         title="张三"
//                         badge="3"
//                         selected={this.state.selectedTabBarItem == 'home'}
//                         onPress = {()=>{this.setState({selectedTabBarItem: 'home'})}}
//                     >
//                         <View style={[styles.commonViewStyle,{backgroundColor:'red'}]}>
//                             <Text>首页</Text>
//                         </View>
//                     </TabBarIOS.Item>
//
//                     {/*第二块*/}
//                     <TabBarIOS.Item
//                         systemIcon="bookmarks"
//                         selected={this.state.selectedTabBarItem == 'second'}
//                         onPress = {()=>{this.setState({selectedTabBarItem: 'second'})}}
//                     >
//                         <View style={[styles.commonViewStyle,{backgroundColor:'green'}]}>
//                             <Text>第二页</Text>
//                         </View>
//                     </TabBarIOS.Item>
//
//                     {/*第三块*/}
//                     <TabBarIOS.Item
//                         systemIcon="downloads"
//                         selected={this.state.selectedTabBarItem == 'three'}
//                         onPress = {()=>{this.setState({selectedTabBarItem: 'three'})}}
//                     >
//                         <View style={[styles.commonViewStyle,{backgroundColor:'blue'}]}>
//                             <Text>第三页</Text>
//                         </View>
//                     </TabBarIOS.Item>
//
//                     {/*第四块*/}
//                     <TabBarIOS.Item
//                         systemIcon="search"
//                         selected={this.state.selectedTabBarItem == 'four'}
//                         onPress = {()=>{this.setState({selectedTabBarItem: 'four'})}}
//                     >
//                         <View style={[styles.commonViewStyle,{backgroundColor:'purple'}]}>
//                             <Text>第四页</Text>
//                         </View>
//                     </TabBarIOS.Item>
//                 </TabBarIOS>
//             </View>
//         );
//     }
// });
//
// const styles = StyleSheet.create({
//     container: {
//         flex:1,
//         backgroundColor: '#F5FCFF',
//     },
//
//     headerViewStyle:{
//         height:64,
//         backgroundColor:'red',
//         justifyContent:'center',
//         alignItems:'center'
//     },
//
//     commonViewStyle:{
//         flex:1,
//
//         justifyContent:'center',
//         alignItems:'center'
//
//     }
// });

module.exports = TabbarIOS;