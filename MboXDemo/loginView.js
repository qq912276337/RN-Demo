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


} from 'react-native';

var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;


class loginView extends  Component {
    render(){
        return (
            <View style={styles.container}>
                <Image source={require('./img/icon.png')} style={styles.avatarStyle}></Image>

                <TextInput placeholder={'请输入用户名'} style={styles.textInputStyle}></TextInput>
                <TextInput placeholder={'请输入密码'} style={styles.textInputStyle} password={'true'}></TextInput>



                <TouchableOpacity style={styles.loginStyle} onPress={()=>{
                    alert(0);
                }}>
                        <Text style={{color:'white'}}>登录</Text>
                </TouchableOpacity>


                <View style={styles.noLoginStyle}>
                    <Text>无法登陆</Text>
                    <Text>新用户</Text>
                </View>

                <View style={styles.otherLoginStyle}>
                    <Text>其他登录方式</Text>

                    <Image source={require('./img/icon3.png')} style={styles.otherLoginImageStyle}></Image>
                    <Image source={require('./img/icon7.png')} style={styles.otherLoginImageStyle}></Image>
                    <Image source={require('./img/icon8.png')} style={styles.otherLoginImageStyle}></Image>
                </View>
            </View>
        );
    }

    pressLoginButton(){
        alert(0);
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#dddddd',
        alignItems:'center',

    },

    avatarStyle:{
        width:80,
        height:80,
        borderRadius:40,
        borderWidth:3,
        borderColor:'white',
        marginTop:100,
        marginBottom:10,
    },

    textInputStyle:{
        height:38,
        backgroundColor:'white',
        marginTop:2,
        textAlign:'center',


    },
    loginStyle:{
        height:35,
        backgroundColor:'blue',
        width:ScreenWidth * 0.9,
        marginTop:30,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8,
        marginBottom:8,
    },

    noLoginStyle:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:ScreenWidth * 0.9,

    },

    otherLoginStyle:{
        flexDirection:'row',
        alignItems:'center',

        position:'absolute',
        bottom:10,
        left:10,
    },

    otherLoginImageStyle:{
        width:50,
        height:50,
        borderRadius:25,
    }

})

module.exports = loginView;

// var Dimensions = require('Dimensions');
// var {width,height} = Dimensions.get('window');
//
// class loginView extends Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text>
//                     123hsdgfjshgfjahdfgjsadfg
//                 </Text>
//             </View>
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#dddddd',
//         // 设置侧轴的对齐方式
//         alignItems:'center'
//     },
//
//     iconStyle:{
//        marginTop:50,
//        marginBottom:30,
//        width:80,
//        height:80,
//        borderRadius:40,
//        borderWidth:2,
//        borderColor:'white'
//     },
//
//     textInputStyle:{
//         height:38,
//         backgroundColor:'white',
//         marginBottom:1,
//         // 内容居中
//         textAlign:'center'
//     },
//
//     loginBtnStyle:{
//         height:35,
//         width:width*0.9,
//         backgroundColor:'blue',
//         marginTop:30,
//         marginBottom:20,
//
//         justifyContent:'center',
//         alignItems:'center',
//
//         borderRadius:8
//     },
//
//     settingStyle:{
//         // 设置主轴的方向
//         flexDirection:'row',
//         // backgroundColor:'red',
//
//         // 主轴的对齐方式
//         width:width*0.9,
//         justifyContent:'space-between'
//     },
//
//     otherLoginStyle:{
//         // backgroundColor:'red',
//
//         // 设置主轴的方向
//         flexDirection:'row',
//
//         // 设置侧轴的对齐方式
//         alignItems:'center',
//
//         // 绝对定位
//         position:'absolute',
//         bottom:10,
//         left:20
//     },
//
//     otherImageStyle:{
//         width:50,
//         height:50,
//         borderRadius:25,
//         marginLeft:8
//     }
// });
//
// // 输出类
// module.exports = loginView;
