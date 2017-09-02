/**
 * Created by sml2 on 2017/8/14.
 */
import React,{Component} from 'react';
import {AppRegistry,Text,View} from 'react-native';

class ReactDemo01 extends Component {
    render() {
        return (
            <View>
                <Blink text='I love to blink' />
                <Blink text='Yes blinking is so great' />
                <Blink text='Why did they ever take this out of HTML' />
                <Blink text='Look at me look at me look at me' />
            </View>
        );
    }
}

class Blink extends Component {
    constructor(props){
        super(props);

        this.state = {showText:true};

        setInterval(() => {
            this.setState(previousState => {
                return { showText: !previousState.showText };
            });
        },1000);
    }

    render(){
        // 根据当前showText的值决定是否显示text内容
        let display = this.state.showText ? this.props.text : ' ';
        return(
            <Text>{display}</Text>
        );
    }

}


AppRegistry.registerComponent('ReactDemo01',()=>ReactDemo01);
