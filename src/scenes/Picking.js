/**
 * Created by Jason.liu on 2016-06-12.
 */
/**
 * Created by Jason on 2016-06-03.
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
    TouchableWithoutFeedback,
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


export default class Picking extends Component{

    render(){

        const  {navigator} = this.context;

        return (
            <ScrollView style={{backgroundColor: '#fff'}}>
                <View style={styles.searchRow}>
                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        clearButtonMode="always"
                        placeholder="销售单"
                        style={styles.searchTextInput}
                    />
                </View>
                <Card>
                    <Card.Body>
                        <Subheader text="销售单123456789"/>
                    </Card.Body>
                    <Divider/>
                    
                    <View style={{flex:1,flexDirection:'column'}}>

                        <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                            <View style={{flex:5}}>
                                <Subheader text="棉纱XXXX"/>
                            </View>
                        </View>
                        <Divider inset />
                        <View style={{flex:2,flexDirection:'row',alignItems:'center'}}>
                            <View style={{flex:1}}>
                            </View>
                            <View style={{flex:1,flexDirection:'column'}}>
                                <View style={{flex:1}} >
                                    <Subheader text="库位"/>
                                </View>
                                <View style={{flex:1}} >
                                    <Subheader text="托盘"/>
                                </View>
                            </View>
                            <View style={{flex:2,flexDirection:'column'}}>
                                <View style={{flex:1}} >
                                    <Subheader text="AB1234-56-78" />
                                </View>
                                <View style={{flex:1}} >
                                    <Subheader text="AB1234-56-78" />
                                </View>
                            </View>
                            <View style={{flex:1,flexDirection:'column',alignItems:'flex-start'}}>
                                <TouchableWithoutFeedback onPress={() => {  }}>
                                    <View><Icon name="FontAwesomeIcons|barcode"  size={24}  /></View>
                                </TouchableWithoutFeedback>
                            </View>
                        </View>
                        <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                            <View style={{flex:1}}>
                            </View>
                            <View style={{flex:1}}>
                                <Subheader text="批次"/>
                            </View>
                            <View style={{flex:2}}>
                                <Text>20016674</Text>
                            </View>
                            <View style={{flex:1}}>
                            </View>
                        </View>
                        <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                            <View style={{flex:1}}>
                            </View>
                            <View style={{flex:1}}>
                                <Subheader text="预出"/>
                            </View>
                            <View style={{flex:2}}>
                                <Text>30</Text>
                            </View>
                            <View style={{flex:1}}>
                            </View>
                        </View>
                        <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                            <View style={{flex:1}}>
                            </View>
                            <View style={{flex:1}}>
                                <Subheader text="实出"/>
                            </View>
                            <View style={{flex:2}}>
                                <TextInput>30</TextInput>
                            </View>
                            <View style={{flex:1}}>
                            </View>
                        </View>
                        
                    </View>

                    <View style={{flex:1,flexDirection:'column'}}>

                        <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                            <View style={{flex:5}}>
                                <Subheader text="棉纱XXXX"/>
                            </View>
                        </View>
                        <Divider inset />
                        <View style={{flex:2,flexDirection:'row',alignItems:'center'}}>
                            <View style={{flex:1}}>
                            </View>
                            <View style={{flex:1,flexDirection:'column'}}>
                                <View style={{flex:1}} >
                                    <Subheader text="库位"/>
                                </View>
                                <View style={{flex:1}} >
                                    <Subheader text="托盘"/>
                                </View>
                            </View>
                            <View style={{flex:2,flexDirection:'column'}}>
                                <View style={{flex:1}} >
                                    <Subheader text="AB1234-56-78" />
                                </View>
                                <View style={{flex:1}} >
                                    <Subheader text="AB1234-56-78" />
                                </View>
                            </View>
                            <View style={{flex:1,flexDirection:'column',alignItems:'flex-start'}}>
                                <TouchableWithoutFeedback onPress={() => {  }}>
                                    <View><Icon name="FontAwesomeIcons|barcode"  size={24}  /></View>
                                </TouchableWithoutFeedback>
                            </View>
                        </View>
                        <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                            <View style={{flex:1}}>
                            </View>
                            <View style={{flex:1}}>
                                <Subheader text="批次"/>
                            </View>
                            <View style={{flex:2}}>
                                <Text>20016674</Text>
                            </View>
                            <View style={{flex:1}}>
                            </View>
                        </View>
                        <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                            <View style={{flex:1}}>
                            </View>
                            <View style={{flex:1}}>
                                <Subheader text="预出"/>
                            </View>
                            <View style={{flex:2}}>
                                <Text>30</Text>
                            </View>
                            <View style={{flex:1}}>
                            </View>
                        </View>
                        <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                            <View style={{flex:1}}>
                            </View>
                            <View style={{flex:1}}>
                                <Subheader text="实出"/>
                            </View>
                            <View style={{flex:2}}>
                                <TextInput>30</TextInput>
                            </View>
                            <View style={{flex:1}}>
                            </View>
                        </View>

                    </View>

                    <Divider/>

                    <Card.Actions position="right">
                        <Button primary='paperTeal' text="拣货" onPress={() =>{}} />
                    </Card.Actions>
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
