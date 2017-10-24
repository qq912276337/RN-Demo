
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
var WineListView = require('./WineListView');
var NineListView = require('./NineListView');
var TabbarIOS = require('./TabbarIOS');
var Main = require('./Component/XMGMain');

import DLFadeAnimationView from './DLFadeAnimationView';
// import Mobx_Demo from './Mobx_Demo';

class ReactDemo01 extends Component {
    render() {
        return (
            <Main>

            </Main>
        )
    }
}



AppRegistry.registerComponent('ReactDemo01', () => ReactDemo01);
