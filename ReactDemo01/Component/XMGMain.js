/**
 * Created by sml2 on 2017/10/17.
 */

import React,{Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TabBarIOS,
    NavigatorIOS,
} from 'react-native';

var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;

var XMGHome = require('./XMGHome');
var XMGFind = require('./XMGFind');
var XMGMessage = require('./XMGMessage');
var XMGMine = require('./XMGMine');


var Main = React.createClass({
    getInitialState(){
        return{
            selectedItem:0,
        }
    },


    render(){
        return(
            <View style={styles.container}>
                <TabBarIOS
                    tintColor="orange"
                >

                    <TabBarIOS.Item
                        icon={{uri:'tabbar_home'}}
                        title="首页"
                        style={styles.tabBarIOSItemStyle}
                        onPress={() => {this.setState({selectedItem:0})}}
                        selected={this.state.selectedItem == 0}
                    >


                        <NavigatorIOS
                            tintColor="orange"
                            style={{flex:1}}
                            initialRoute={{
                                component: XMGHome,
                                title: '首页',
                                leftButtonIcon:{uri:'navigationbar_friendattention'},
                                rightButtonIcon:{uri:'navigationbar_pop'},
                            }}
                        />
                    </TabBarIOS.Item
                    >



                    <TabBarIOS.Item
                        icon={{uri:'tabbar_discover'}}
                        title="发现"
                        style={styles.tabBarIOSItemStyle}
                        onPress={() => {this.setState({selectedItem:1})}}
                        selected={this.state.selectedItem == 1}
                    >
                        <NavigatorIOS
                            style={{flex:1}}

                            initialRoute={{
                                component: XMGFind,
                                title: '发现',
                            }}
                        />
                    </TabBarIOS.Item
                    >


                    <TabBarIOS.Item
                        icon={{uri:'tabbar_message_center'}}
                        title="消息"
                        style={styles.tabBarIOSItemStyle}
                        onPress={() => {this.setState({selectedItem:2})}}
                        selected={this.state.selectedItem == 2}

                    >
                        <NavigatorIOS
                            style={{flex:1}}

                            initialRoute={{
                                component: XMGMessage,
                                title: '消息',
                            }}
                        />
                    </TabBarIOS.Item
                    >


                    <TabBarIOS.Item
                        icon={{uri:'tabbar_profile'}}
                        title="我的"
                        onPress={() => {this.setState({selectedItem:3})}}
                        selected={this.state.selectedItem == 3}
                    >
                        <NavigatorIOS
                            style={{flex:1}}

                            initialRoute={{
                                component: XMGMine,
                                title: '我的',
                            }}
                        />
                    </TabBarIOS.Item
                    >



                </TabBarIOS>
            </View>
        );
    }
})

const styles = StyleSheet.create({
    container:{
        backgroundColor:'red',
        height:ScreenHeight,
    },

    tabBarIOSItemStyle:{

    }

});

module.exports =  Main;
