/**
 * Created by Jason.liu on 2016-06-20.
 */
/**
 * Created by Jason on 2016-06-01.
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
    ScrollView
} from 'react-native';

import {
    Button,
    List,
    Card,
    Avatar,
    COLOR,
    TYPO,
    Divider,
    Icon,
    IconToggle
} from 'react-native-material-design'

import { connect } from 'react-redux';

import BarcodeScannerView from 'react-native-barcodescanner/BarcodeScanner';

export default class BarcodeScanner extends Component {

    static contextTypes = {
        navigator: PropTypes.object.isRequired
    };


    barcodeReceived=(code)=> {
        
        const { navigator } = this.context;
        const { dispatch } = this.props;

        dispatch(navigator.currentRoute.props.action(code.data));
        navigator.to(navigator.currentRoute.props.back);

    }


    render() {
       
        return(

            <BarcodeScannerView
                onBarCodeRead={this.barcodeReceived}
                style={{ flex: 1 }}
                torchMode={"off"}
                cameraType={"back"}
            />


        );
    }
}

export default connect()(BarcodeScanner)