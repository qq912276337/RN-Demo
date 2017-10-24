/**
 * Created by sml2 on 2017/10/13.
 */
import React,{Component} from 'react';
import {AppRegister,View,Text,StyleSheet,ListView,Image,TouchableOpacity,FlatList} from 'react-native';

var ShareData = require('./shareData.json');
var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;

// 一些常量设置
var cols = 3;
var cellWH = 100;
var vMargin = (ScreenWidth - cellWH * cols) / (cols + 1);
var hMargin = 25;


// ES5
var NineListView = React.createClass({
    // 设置默认值,固定值()
    getDefaultProps(){
        return{

        }
    },

    // 设置一些初始值(可以变化)
    getInitialState(){
        // 创建数据源
        var ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2});
        return{
            dataSource: ds.cloneWithRows(ShareData.data)
        }
    },

    render(){
        return(
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                contentContainerStyle={styles.listViewStyle}
            />
        );
    },

    // 单独的cell
    renderRow(rowData){
        return(
            <TouchableOpacity activeOpacity={0.5} onPress={()=>{AlertIOS.alert('哈哈')}}>
                <View style={styles.innerViewStyle}>
                    <Image source={{uri: rowData.icon}} style={styles.iconStyle}/>
                    <Text>{rowData.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }

});


const styles = StyleSheet.create({
    listViewStyle:{
        // 改变主轴的方向
        flexDirection:'row',
        // 多行显示
        flexWrap:'wrap'
    },

    iconStyle:{
        width:80,
        height:80
    },

    innerViewStyle:{
        width:cellWH,
        height:cellWH,
        marginLeft:vMargin,
        marginTop:hMargin,
        // 居中
        alignItems:'center',
        backgroundColor:'red',
    }
});

// class NineListView extends Component {
//     render(){
//         return(
//             <View>
//                 <Text>123456</Text>
//             </View>
//         );
//     }
//
// }
module.exports = NineListView;