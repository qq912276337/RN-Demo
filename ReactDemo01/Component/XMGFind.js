/**
 * Created by sml2 on 2017/10/17.
 */

import React,{Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;

var Find = React.createClass({
    render(){
        return(
            <View style={styles.container}>
                <Text>Find</Text>
            </View>
        );
    }
})

const styles = StyleSheet.create({
    container:{
        backgroundColor:'red',
        height:ScreenHeight,
        alignItems:'center',
        justifyContent:'center',
    }
});

module.exports =  Find;
