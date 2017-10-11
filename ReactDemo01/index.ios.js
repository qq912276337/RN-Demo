
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
var DemoScrollView = require('./DemoScrollView');

class ReactDemo01 extends Component {
    render() {
        return (
            <DemoScrollView />
        );
    }
}


AppRegistry.registerComponent('ReactDemo01', () => ReactDemo01);
