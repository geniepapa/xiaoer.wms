/**
 * Created by Jason on 2016-06-01.
 */
import React, { PropTypes,Component} from 'react';
import {

    StyleSheet,
    AppRegistry,
    Text,
    View,
    Image,
    DrawerLayoutAndroid,
    TouchableWithoutFeedback,
    Navigator,
    ScrollView,
    ProgressBarAndroid,
    TextInput,
    Switch
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
    IconToggle,
    Subheader
} from 'react-native-material-design'



export default class Boarding extends Component {


    static contextTypes = {
        navigator: PropTypes.object.isRequired,
    };


    render() {
        

        const  {navigator} = this.context;

        return (

            <ScrollView style={{backgroundColor: '#fff'}}>

                <View style={styles.searchRow}>
                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        clearButtonMode="always"
                        placeholder="托盘号"
                        style={styles.searchTextInput}
                    />
                </View>

                <Card>

                    <Card.Body>
                        <Subheader text="TP000001-001" />
                    </Card.Body>

                    <Divider />



                    <Card.Body>

                        <View style={{flexDirection:'column'}}>
                            <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                                <View style={{flex:3}}>
                                    <Subheader text="服装" />
                                </View>
                            </View>
                            <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                                <View style={{flex:1}}>
                                    <Subheader text="单位" />
                                </View>
                                <Text style={{flex:2}}>KG</Text>
                            </View>
                            <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                                <View style={{flex:1}}>
                                    <Subheader text="批次"/>
                                </View>
                                <Text style={{flex:2}}>2016060108</Text>
                            </View>
                            <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                                <View style={{flex:1}}>
                                    <Subheader text="生产日期" />
                                </View>
                                <Text style={{height: 40, flex:2}}>2016-05-01</Text>
                            </View>

                            <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                                <View style={{flex:1}}>
                                    <Subheader text="温度" />
                                </View>
                                <Text style={{ flex:2}}>23</Text>
                            </View>
                            <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                                <View style={{flex:1}}>
                                    <Subheader text="预收/实收"/>
                                </View>
                                <Text style={{flex:2}}>30/30</Text>
                            </View>
                            <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                                <View style={{flex:2}}>
                                    <Subheader text="库位"/>
                                </View>
                                <View style={{flex:3,flexDirection:'column'}}>
                                    <TextInput style={{height:30}}></TextInput>
                                </View>
                                <View style={{flex:1,flexDirection:'column',alignItems:'flex-start'}}>
                                    <TouchableWithoutFeedback onPress={() => {  }}>
                                        <View><Icon name="FontAwesomeIcons|barcode"  size={24}  /></View>
                                    </TouchableWithoutFeedback>
                                </View>
                            </View>


                            <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                                <View style={{flex:1,flexDirection:'column'}}>
                                    <Subheader text="冻结"/>
                                </View>
                                <View style={{flex:1,flexDirection:'column',alignItems:'flex-start',justifyContent:'center'}}>
                                    <Switch onValueChange={(value) => this.setState({})} value={true} />
                                </View>
                            </View>



                        </View>

                    </Card.Body>
                    <Card.Actions position="right">
                        <Button primary='paperTeal' text="上架" onPress={() =>{}} />
                    </Card.Actions>


                </Card>

                <Card>

                    <Card.Body>
                        <Subheader text="TP000001-001" />
                    </Card.Body>

                    <Divider />



                    <Card.Body>

                        <View style={{flexDirection:'column'}}>
                            <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                                <View style={{flex:3}}>
                                    <Subheader text="服装" />
                                </View>
                            </View>
                            <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                                <View style={{flex:1}}>
                                    <Subheader text="单位" />
                                </View>
                                <Text style={{flex:2}}>KG</Text>
                            </View>
                            <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                                <View style={{flex:1}}>
                                    <Subheader text="批次"/>
                                </View>
                                <Text style={{flex:2}}>2016060108</Text>
                            </View>
                            <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                                <View style={{flex:1}}>
                                    <Subheader text="生产日期" />
                                </View>
                                <Text style={{height: 40, flex:2}}>2016-05-01</Text>
                            </View>

                            <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                                <View style={{flex:1}}>
                                    <Subheader text="温度" />
                                </View>
                                <Text style={{ flex:2}}>23</Text>
                            </View>
                            <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                                <View style={{flex:1}}>
                                    <Subheader text="预收/实收"/>
                                </View>
                                <Text style={{flex:1}}>30/30</Text>
                            </View>
                            <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                                <View style={{flex:2}}>
                                    <Subheader text="库位"/>
                                </View>
                                <View style={{flex:3,flexDirection:'column'}}>
                                    <TextInput style={{height:30}}></TextInput>
                                </View>
                                <View style={{flex:1,flexDirection:'column',alignItems:'flex-start'}}>
                                    <TouchableWithoutFeedback onPress={() => {  }}>
                                        <View><Icon name="FontAwesomeIcons|barcode"  size={24}  /></View>
                                    </TouchableWithoutFeedback>
                                </View>
                            </View>


                            <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                                <View style={{flex:1,flexDirection:'column'}}>
                                    <Subheader text="冻结"/>
                                </View>
                                <View style={{flex:1,flexDirection:'column',alignItems:'flex-start',justifyContent:'center'}}>
                                    <Switch onValueChange={(value) => this.setState({})} value={true} />
                                </View>
                            </View>



                        </View>

                    </Card.Body>
                    <Card.Actions position="right">
                        <Button primary='paperTeal' text="上架" onPress={() =>{}} />
                    </Card.Actions>


                </Card>

            </ScrollView>
        )


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

