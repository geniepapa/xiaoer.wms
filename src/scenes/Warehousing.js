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


export default class Warehousing extends Component{

    render(){

        const  {navigator} = this.context;

        return (
            <ScrollView style={{backgroundColor: '#fff'}}>

                <View style={styles.searchRow}>
                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        clearButtonMode="always"
                        placeholder="托盘号/库位号"
                        style={styles.searchTextInput}
                    />
                    
                </View>

                <Card>
                    <Card.Body>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                            <Subheader style={{flex:1}} text="仓位：AB1234-56-78"/>
                            <View style={{backgroundColor:'rgba(0,0,0,.12)',width:1,height:40}} />
                            <Subheader style={{flex:1}} text="托盘：AB1234-56-78"/>
                        </View>
                    </Card.Body>
                    <Divider/>

                    <List primaryText='食品XXXX（良）'
                          secondaryText = 'Google-XXXX'
                          captionText ='批次：2054148'

                          leftAvatar={<Avatar backgroundColor="#ffffff"  color="#000000" text={'30'} />}
                    />
                    <List primaryText='食品XXXX（良）'
                          secondaryText = '百度信息科技有限公司'
                          captionText ='批次：2054148'

                          leftAvatar={<Avatar  backgroundColor="#ffffff" color="#000000" text={'20'} />}
                    />
                    <List primaryText='食品XXXX'
                          secondaryText = '百度信息科技有限公司'
                          captionText ='批次：2054148'

                          leftAvatar={<Avatar  backgroundColor="#ffffff" color="#000000" text={'20'} />}
                    />

                </Card>

                <Card>
                    <Card.Body>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                            <Subheader style={{flex:1}} text="仓位：AB1234-56-78"/>
                            <View style={{backgroundColor:'rgba(0,0,0,.12)',width:1,height:40}} />
                            <Subheader style={{flex:1}} text="托盘：AB1234-56-78"/>
                        </View>
                    </Card.Body>
                    <Divider/>

                    <List primaryText='食品XXXX'
                          secondaryText = 'Google-XXXX'
                          captionText ='批次：2054148'

                          leftAvatar={<Avatar backgroundColor="#ffffff"  color="#000000" text={'30'} />}
                    />
                    <List primaryText='食品XXXX（良）'
                          secondaryText = '百度信息科技有限公司'
                          captionText ='批次：2054148'

                          leftAvatar={<Avatar  backgroundColor="#ffffff" color="#000000" text={'20'} />}
                    />
                    <List primaryText='食品XXXX'
                          secondaryText = '百度信息科技有限公司'
                          captionText ='批次：2054148'

                          leftAvatar={<Avatar  backgroundColor="#ffffff" color="#000000" text={'20'} />}
                    />

                </Card>


            </ScrollView>
        );
    }

}





const styles = {
    content: {
        padding: 16
    },
    searchRow: {
        backgroundColor: '#eeeeee',
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
    },
    searchTextInput: {
        backgroundColor: 'white',
        borderColor: '#cccccc',
        borderRadius: 3,
        borderWidth: 1,
        height: 40,
        paddingLeft: 8,
    },
};

