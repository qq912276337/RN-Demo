/**
 * Created by sml2 on 2017/11/24.
 */
'use strict';

var React = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    NavigatorIOS,
} = React;
import PropTypes from 'prop-types';

var QRCodeScreen = require('./QRCodeScreen');

var cameraApp = React.createClass({
    render: function() {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
          title: 'Index',
          backButtonTitle: 'Back',
          component: Index,
        }}
            />
        );
    }
});

var Index = React.createClass({

    render: function() {
        return (
            <View style={styles.contentContainer}>
                <TouchableOpacity onPress={this._onPressQRCode}>
                    <Text>Read QRCode</Text>
                </TouchableOpacity>
            </View>
        );
    },

    _onPressQRCode: function() {
        this.props.navigator.push({
            component: QRCodeScreen,
            title: 'QRCode',
            passProps: {
                onSucess: this._onSucess,
            },
        });
    },

    _onSucess: function(result) {
        console.log(result);
    },

});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

AppRegistry.registerComponent('cameraApp', () => cameraApp);