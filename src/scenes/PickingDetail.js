/**
 * Created by Jason.liu on 2016-06-12.
 */


import React, { Component,PropTypes} from 'react';
import {
    StyleSheet,
    AppRegistry,
    Text,
    View,
    Image,
    DrawerLayoutAndroid,
    Navigator,
    ScrollView,

    TextInput

} from 'react-native';

import {
    Button,
    List,
    Card,
    Avatar,
    COLOR,
    TYPO,
    Subheader,
    Divider,
    Icon,
    IconToggle
} from 'react-native-material-design'


export default class PickingDetail extends Component{

    render(){

        const  {navigator} = this.context;

        return (
            <ScrollView style={{backgroundColor: '#fff'}}>

            </ScrollView>
        );
    }

}





const styles = {
    content: {
        padding: 16
    }
};



