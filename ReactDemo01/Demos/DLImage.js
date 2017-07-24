/**
 * Created by sml2 on 2017/7/24.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React,{Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default class ReactDemo01 extends Component {

    render(){

        return(
            <View style={styles.container}>
                <DLText name="sml"></DLText>
                <DLText name="sml"></DLText>
                <DLText name="sml"></DLText>
                <DLImage url="https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg" w={100} h={100}></DLImage>
                <DLImage url="https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg" w={100} h={100}></DLImage>
                <DLImage url="https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg" w={100} h={100}></DLImage>


            </View>
        );
    }
}

class DLText extends Component {

    render(){
        return(
            <Text>hello {this.props.name}</Text>
        );
    }
}

class DLImage extends Component {
    render(){
        let pic = {
            uri: this.props.url
        };
        return(
            <Image source={pic} style={{width: this.props.w, height: this.props.h}} />
        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'red',
        flex:1,
    }
});

AppRegistry.registerComponent('ReactDemo01',()=>ReactDemo01);


