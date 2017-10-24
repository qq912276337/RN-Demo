/**
 * Created by sml2 on 2017/8/17.
 */
//
// import React, { Component } from 'react';
// import { AppRegistry, Text, TextInput, View } from 'react-native';
//
// class ReactDemo01 extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {text: ''};
//     }
//
//     render() {
//         return (
//             <View style={{padding: 10}}>
//                 <TextInput
//                     style={{height: 40}}
//                     placeholder="Type here to translate!"
//                     onChangeText={(text) => this.setState({text})}
//                 />
//                 <Text style={{padding: 10, fontSize: 42}}>
//                     {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
//                 </Text>
//             </View>
//         );
//     }
// }
// // 注册应用(registerComponent)后才能正确渲染
// // 注意：只把应用作为一个整体注册一次，而不是每个组件/模块都注册
//
// AppRegistry.registerComponent('ReactDemo01',()=>ReactDemo01);



// import React, { Component } from 'react';
// import{ AppRegistry, ScrollView, Image, Text, View } from 'react-native'
//
// class ReactDemo01 extends Component {
//     render() {
//         return(
//             <ScrollView>
//                 <Text style={{fontSize:96}}>Scroll me plz</Text>
//                 <Image source={require('./img/favicon.png')} />
//                 <Image source={require('./img/favicon.png')} />
//                 <Image source={require('./img/favicon.png')} />
//                 <Image source={require('./img/favicon.png')} />
//                 <Image source={require('./img/favicon.png')} />
//                 <Text style={{fontSize:96}}>If you like</Text>
//                 <Image source={require('./img/favicon.png')} />
//                 <Image source={require('./img/favicon.png')} />
//                 <Image source={require('./img/favicon.png')} />
//                 <Image source={require('./img/favicon.png')} />
//                 <Image source={require('./img/favicon.png')} />
//                 <Text style={{fontSize:96}}>Scrolling down</Text>
//                 <Image source={require('./img/favicon.png')} />
//                 <Image source={require('./img/favicon.png')} />
//                 <Image source={require('./img/favicon.png')} />
//                 <Image source={require('./img/favicon.png')} />
//                 <Image source={require('./img/favicon.png')} />
//                 <Text style={{fontSize:96}}>What's the best</Text>
//                 <Image source={require('./img/favicon.png')} />
//                 <Image source={require('./img/favicon.png')} />
//                 <Image source={require('./img/favicon.png')} />
//                 <Image source={require('./img/favicon.png')} />
//                 <Image source={require('./img/favicon.png')} />
//                 <Text style={{fontSize:96}}>Framework around?</Text>
//                 <Image source={require('./img/favicon.png')} />
//                 <Image source={require('./img/favicon.png')} />
//                 <Image source={require('./img/favicon.png')} />
//                 <Image source={require('./img/favicon.png')} />
//                 <Image source={require('./img/favicon.png')} />
//                 <Text style={{fontSize:80}}>React Native</Text>
//             </ScrollView>
//         );
//     }
// }
//
// // 注册应用(registerComponent)后才能正确渲染
// // 注意：只把应用作为一个整体注册一次，而不是每个组件/模块都注册
// AppRegistry.registerComponent(
//     'ReactDemo01',
//     () => ReactDemo01);


// import React, { Component } from 'react';
// import { AppRegistry, FlatList, StyleSheet, Text, View } from 'react-native';
//
// export default class ReactDemo01 extends Component {
//     // render() {
//     //     return (
//     //         <View style={styles.container}>
//     //             <FlatList
//     //                 data={
//     //                 [
//     //                 {key: 'Devinsml'},
//     //                 {key: 'Jacksonsml'},
//     //                 {key: 'Jamessml'},
//     //                 {key: 'Joel'},
//     //                 {key: 'John'},
//     //                 {key: 'Jillian'},
//     //                 {key: 'Jimmy'},
//     //                 {key: 'Julie'},
//     //                 ]
//     //                        }
//     //                 renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
//     //             />
//     //         </View>
//     //     );
//     // }
//     render(){
//         return(
//             <View>
//                 <FlatList data={[{key:'sml'},{key:"sml2"}]} renderItem={({item})=><Text>{item.key}</Text>}>
//
//                 </FlatList>
//             </View>
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         paddingTop: 22
//     },
//     item: {
//         padding: 10,
//         fontSize: 18,
//         height: 44,
//     },
// })
//
// // skip this line if using Create React Native App
// AppRegistry.registerComponent('ReactDemo01', () => ReactDemo01);


import React, { Component } from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View } from 'react-native';

export default class ReactDemo01 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SectionList
                    sections={[
            {title2: 'D', data: ['Devin']},
            {title2: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
                    renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                    renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title2}</Text>}
                />

                fetch('https://mywebsite.com/endpoint/', {
                method: 'POST',
                body: JSON.stringify({
                firstParam: 'yourValue',
                secondParam: 'yourOtherValue',
            })
            })
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('ReactDemo01', () => ReactDemo01);