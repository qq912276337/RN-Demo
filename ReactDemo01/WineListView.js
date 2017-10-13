/**
 * Created by sml2 on 2017/10/13.
 */
import React,{Component} from 'react';
import {AppRegister,View,Text,StyleSheet,ListView,Image,TouchableOpacity,FlatList} from 'react-native';

var Wine = require('./Wine.json');
var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;

class WineListView extends Component {
    render(){
        return(
            <View>
                <FlatList data={Wine}
                          renderItem={({item})=>{
                            return this.addListItem(item)
                          }}
                >

                </FlatList>
            </View>
        );
    }

    addListItem(item){


        return <TouchableOpacity activeOpacity={0.5}
                                 onPress={(e)=>{
                                    alert(item.key);
                                 }}
            ><View style={styles.cellViewStyle}>
            <Image source={{uri:item.image}} style={styles.cellLeftImageStyle}></Image>

            <View style={styles.cellRightViewStyle}>
                <Text style={styles.cellRightTopTitleStyle}>{item.name}</Text>
                <Text style={styles.cellRightBottomTitleStyle}>{item.money}</Text>
            </View>
        </View>
        </TouchableOpacity>
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },

    cellViewStyle:{
        borderBottomWidth:1,
        borderBottomColor:'#e8e8e8',
        flexDirection:'row',
        padding:10,

    },

    cellLeftImageStyle:{
        width:60,
        height:60,
        marginRight:10
    },

    cellRightViewStyle:{
        justifyContent:'center',

    },

    cellRightTopTitleStyle:{
        width:ScreenWidth * 0.7,
        marginBottom:10,
    },

    cellRightBottomTitleStyle:{
        color:'red',
    }
})

// var WineListView = React.createClass({
//     // 设置初始值
//     //     // 设置初始值
//     getInitialState(){
//         // 1.1 设置数据源
//         var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
//         // 1.2 设置返回数据
//         return{
//             dataSource: ds.cloneWithRows(Wine)  // cloneWithRows 放置数组
//         }
//     },
//
//     render(){
//         return(
//             <ListView
//                 dataSource={this.state.dataSource}  // 数据源
//                 renderRow={this.renderRow}
//             />
//         );
//     },
//
//     // 返回具体的cell
//     renderRow(rowData,sectionID,rowID,highlightRow){
//         return(
//             <TouchableOpacity activeOpacity={0.5} onPress={()=>{AlertIOS.alert('点击了'+rowID+'行')}}>
//                 <View style={styles.cellViewStyle}>
//                     {/*左边的图片*/}
//                     <Image source={{uri: rowData.image}} style={styles.leftImageStyle}/>
//                     {/*右边的View*/}
//                     <View style={styles.rightViewStyle}>
//                         {/*上边的Text*/}
//                         <Text style={styles.topTitleStyle}>{rowData.name}</Text>
//                         {/*下边的Text*/}
//                         <Text style={styles.bottomTitleStyle}>¥{rowData.money}</Text>
//                     </View>
//                 </View>
//             </TouchableOpacity>
//         );
//     }
//
// });

// export default class WineListView extends Component {
//
//     //     // 设置初始值
//     getInitialState(){
//         // 1.1 设置数据源
//         var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
//         // 1.2 设置返回数据
//         return{
//             dataSource: ds.cloneWithRows(Wine)  // cloneWithRows 放置数组
//         }
//     }
//
//     render(){
//         return(
//             <ListView
//                 dataSource={this.state.dataSource}  // 数据源
//                 renderRow={this.renderRow}
//             />
//         );
//     }
//
//     // 返回具体的cell
//     renderRow(rowData,sectionID,rowID,highlightRow){
//         return(
//             <TouchableOpacity activeOpacity={0.5} onPress={()=>{AlertIOS.alert('点击了'+rowID+'行')}}>
//                 <View style={styles.cellViewStyle}>
//                     {/*左边的图片*/}
//                     <Image source={{uri: rowData.image}} style={styles.leftImageStyle}/>
//                     {/*右边的View*/}
//                     <View style={styles.rightViewStyle}>
//                         {/*上边的Text*/}
//                         <Text style={styles.topTitleStyle}>{rowData.name}</Text>
//                         {/*下边的Text*/}
//                         <Text style={styles.bottomTitleStyle}>¥{rowData.money}</Text>
//                     </View>
//                 </View>
//             </TouchableOpacity>
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     container:{
//         backgroundColor:'gray',
//
//     }
// })
module.exports = WineListView;
