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
            data:[],
            loading:false,
            refreshing:false,
            page: 1,
            seed: 1,
            error: null,
        }
    },

    makeRemoteRequest () {
    const { page, seed } = this.state;
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
    this.setState({ loading: true });

    fetch(url)
        .then(res => res.json())
        .then(res => {
            this.setState({
                data: page === 1 ? res.results : [...this.state.data, ...res.results],
                error: res.error || null,
                loading: false,
                refreshing: false
            });
        })
        .catch(error => {
            this.setState({ error, loading: false });
        });
    },

    renderSeparator(){
        return (
        <View
            style={{
          height: 1,
          width: "100%",
          backgroundColor: "#CED0CE",
          // marginLeft: "14%"
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

    handleRefresh(){
        this.setState(
            {
                page: 1,
                seed: this.state.seed + 1,
                refreshing: true
            },
            () => {
                this.makeRemoteRequest();
            }
        );
    },

    handleLoadMore(){
        this.setState(
            {
                page: this.state.page + 1
            },
            () => {
                this.makeRemoteRequest();
            }
        );
    },

    render(){
        return(
            <View style={styles.container}>
                <FlatList
                    style={styles.tableStyle}
                    data={this.state.data}
                    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                    ItemSeparatorComponent={this.renderSeparator}
                    // ListHeaderComponent={this.renderHeader}
                    ListFooterComponent={this.renderFooter}
                    onRefresh={this.handleRefresh}
                    refreshing={this.state.refreshing}
                    onEndReached={this.handleLoadMore}
                    onEndReachedThreshold={0.1}
                />
            </View>
        );

    }
})

const styles = StyleSheet.create({
    container:{
        backgroundColor:'red',
        // height:ScreenHeight,

    },
    tableStyle:{
        backgroundColor:'blue',
        height:'100%',
        margin:0,
        padding:0,
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
