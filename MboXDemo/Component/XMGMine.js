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

var Mine = React.createClass({
    render(){
        return(
            <View style={styles.container}>
                <Text>Mine</Text>
            </View>
        );
    }
})

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        height:ScreenHeight,
    }
});

module.exports =  Mine;
