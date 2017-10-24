/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, { Component } from 'react'
// import App from './app/App'
import ListStore from './listStore'

import {
    AppRegistry,
    Navigator,
    StyleSheet,
} from 'react-native'

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

export default class App extends Component<{}> {
  renderScene (route, navigator) {
    return <route.component {...route.passProps} navigator={navigator} />
  }
  configureScene (route, routeStack) {
    if (route.type === 'Modal') {
      return Navigator.SceneConfigs.FloatFromBottom
    }
    return Navigator.SceneConfigs.PushFromRight
  }
  render () {
    return (
        <Navigator
            configureScene={this.configureScene.bind(this)}
            renderScene={this.renderScene.bind(this)}
            initialRoute={{
          // component: App,
          passProps: {
            store: ListStore
          }
        }} />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


// import React, { Component } from 'react'
// import App from './app/App'
// import ListStore from './app/mobx/listStore'
//
// import {
//     AppRegistry,
//     Navigator
// } from 'react-native'
//
// class ReactNativeMobX extends Component {
//   renderScene (route, navigator) {
//     return <route.component {...route.passProps} navigator={navigator} />
//   }
//   configureScene (route, routeStack) {
//     if (route.type === 'Modal') {
//       return Navigator.SceneConfigs.FloatFromBottom
//     }
//     return Navigator.SceneConfigs.PushFromRight
//   }
//   render () {
//     return (
//         <Navigator
//             configureScene={this.configureScene.bind(this)}
//             renderScene={this.renderScene.bind(this)}
//             initialRoute={{
//           component: App,
//           passProps: {
//             store: ListStore
//           }
//         }} />
//     )
//   }
// }
//
// AppRegistry.registerComponent('ReactNativeMobX', () => ReactNativeMobX)