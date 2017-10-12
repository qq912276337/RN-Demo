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

// 引入定时器
var TimerMixin = require('react-timer-mixin');

// imageData
var ImageData = require('./ImageData.json');

var DemoScrollView = React.createClass({

    // 注册定时器
    mixins:[TimerMixin],

    getDefaultProps() {
        return{
            duration:1000,
        }
    },

    getInitialState() {
        return {
            currentPage: 0,
        }

    },

    componentDidMount(){
        this.startTimer();
    },

    startTimer(){
        var scrollView = this.refs.ScrollView;

        this.timer = this.setInterval(function () {
            var activePage = this.state.currentPage + 1 ;
            if(activePage >= ImageData.data.length){
                activePage = 0;
            }

            scrollView.scrollResponderScrollTo({x:activePage * ScreenWidth,y:0,animated:true});
            // this.setState({
            //     currentPage:activePage,
            // })

        },1000);
    },


    render(){
        return (
            <View style={styles.container}>
                <ScrollView
                    ref="ScrollView"
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                    onMomentumScrollEnd={(event)=>{
                        console.log(event.nativeEvent.contentOffset.x);

                        var offSetX = event.nativeEvent.contentOffset.x;
                        var page = Math.floor((offSetX / ScreenWidth + 0.5));

                        console.log(page);

                        this.setState({
                            currentPage:page,
                        })
                    }}
                    onScrollBeginDrag={()=>{
                        this.clearInterval(this.timer);
                    }}

                    onScrollEndDrag={()=>{
                        this.startTimer();
                    }}
                >
                    {this.addSubViews()}
                </ScrollView>


                <View style={styles.pageViewStyle}>
                    {this.addPageControls()}
                </View>
            </View>
        );
    },

    addSubViews(){
        var childs = [];
        var images = ImageData.data;

        for(var i = 0;i<images.length;i++) {
            var imageItem = images[i];

            childs.push(
                <Image key={i} source={{uri:imageItem.img}} style={{width:ScreenWidth,height:120}}></Image>
            )
        }
        return childs;
    },

    addPageControls(){
        var pages = [];
        var images = ImageData.data;
        var style;

        for(var i = 0;i<images.length;i++) {

            style = (i == this.state.currentPage) ? {color:'red'} : {color:'white'};

            pages.push(
                <Text key={i} style={[{fontSize:25,color:'red'},style]}>
                    &bull;
                </Text>
            )
        }
        return pages;
    },


});

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#dddddd',
        marginTop:30,
    },
    pageViewStyle:{
        width:ScreenWidth,
        height:20,
        backgroundColor:'rgba(0,0,0,0.4)',
        position:'absolute',
        bottom:0,
        flexDirection:'row',
        alignItems:'center',


    }
})


// ES6
// class DemoScrollView extends  Component {
//     render(){
//         return (
//             <View style={styles.container}>
//
//                 <ScrollView
//                     horizontal={true}
//                     pagingEnabled={true}
//                     showsHorizontalScrollIndicator={false}
//                 >
//                     {this.addSubViews()}
//                 </ScrollView>
//             </View>
//         );
//     }
//
//     addSubViews(){
//         var childs = [];
//         var colors = ['red','gray','green','yellow','red','blue'];
//         for(var i = 0;i<6;i++){
//             childs.push(<View key={i} style={{backgroundColor:colors[i],width:ScreenWidth,height:120}}>
//                 <Text>i</Text>
//             </View>);
//         }
//         return childs;
//     }
// }

// const styles = StyleSheet.create({
//     container:{
//         backgroundColor:'#dddddd',
//         flex:1,
//
//     }
//
// })

module.exports = DemoScrollView;

