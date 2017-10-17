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
    ListView,
    TouchableOpacity,
    FlatList,
    ActivityIndicator,
} from 'react-native';
import { List, ListItem, SearchBar } from "react-native-elements";

var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
var Home = React.createClass({
    getInitialState(){
        return{
            data:[
                {key: 'Devin'},
                {key: 'Jackson'},
                {key: 'Devin1'},
                {key: 'Jackson1'},
                {key: 'Devin2'},
                {key: 'Jack2son'},
                {key: 'Devin12'},
                {key: 'Jacks2on1'},
            ],
            loading:false,

        }
    },

    renderSeparator(){
        return (
        <View
            style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
        />
        );
    },

    renderHeader (){
        return(
            <View style={styles.headerViewStyle}>

            </View>
        );
    },


    renderFooter() {
    if (!this.state.loading) return null;

    return (
        <View
            style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
        >
            <ActivityIndicator animating size="large" />
        </View>
        );
    },

    handleLoadMore(){
        this.setState({ loading: true });
    },

    render(){
        return(
            <View style={styles.container}>
                <FlatList
                    data={this.state.data}
                    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                    ItemSeparatorComponent={this.renderSeparator}
                    ListHeaderComponent={this.renderHeader}
                    ListFooterComponent={this.renderFooter}
                    onEndReached={this.handleLoadMore}
                    onEndReachedThreshold={0.2}
                />
            </View>
        );
    }
})

const styles = StyleSheet.create({
    container:{
        height:ScreenHeight,
    },
    item:{
        backgroundColor:'red',
        borderBottomColor:'black',
        borderBottomWidth:1,
        height:88,
    },
    headerViewStyle:{
        backgroundColor:'purple',
        height:50,
    }
});

module.exports =  Home;
