import React,{ Component} from 'react';
import {AppRegistry,View} from 'react-native';

class ReactDemo01 extends Component {
    render(){
        return(
            // // 尝试把`flexDirection`改为`column`看看
            // <View style={{flex: 1, flexDirection: 'column'}}>
            //     <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
            //     <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
            //     <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
            // </View>



            //       // 尝试把`justifyContent`改为`center`看看
            //       // 尝试把`flexDirection`改为`row`看看
            //       <View style={{
            //   flex: 1,
            //   flexDirection: 'row',
            //   justifyContent: 'center',
            // }}>
            //           <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
            //           <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
            //           <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
            //       </View>

            // 尝试把`alignItems`改为`flex-start`看看
            // 尝试把`justifyContent`改为`flex-end`看看
            // 尝试把`flexDirection`改为`row`看看
            <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
      }}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
            </View>
        );
    }
}



AppRegistry.registerComponent('ReactDemo01',()=>ReactDemo01);/**
 * Created by sml2 on 2017/8/14.
 */
