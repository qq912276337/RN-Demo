
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

// 引入外部的js文件
var LoginView = require('./loginView');
var DDShareView = require('./ShareView');

class ReactDemo01 extends Component {
    render() {
        return (
            <LoginView />
        );
    }
}


AppRegistry.registerComponent('ReactDemo01', () => ReactDemo01);
