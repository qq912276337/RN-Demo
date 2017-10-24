/**
 * Created by sml2 on 2017/10/24.
 */
import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import { observable, useStrict, action } from 'mobx';
import { observer } from 'mobx-react';
useStrict(true);

class MyState {
    @observable num = 0;
    @action add = () => {
        this.num++;
    };
}

const myState = new MyState();

@observer
export default class Mobx_Demo extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render(){
        return(
            <View>
                <Text>{myState.num}</Text>

                <Button
                    onPress={()=>{
                        
                    }}
                    title="Learn More"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        );
    }
}
