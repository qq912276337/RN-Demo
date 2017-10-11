/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView,

} from 'react-native';

var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;


class DemoScrollView extends  Component {
    render(){
        return (
            <View style={styles.container}>
               
                <ScrollView
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {this.addSubViews()}
                </ScrollView>
            </View>
        );
    }

    addSubViews(){
        var childs = [];
        var colors = ['red','gray','green','yellow','red','blue'];
        for(var i = 0;i<6;i++){
            childs.push(<View key={i} style={{backgroundColor:colors[i],width:ScreenWidth,height:120}}>
                <Text>i</Text>
            </View>);
        }
        return childs;
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#dddddd',
        flex:1,
        
    }

})

module.exports = DemoScrollView;

