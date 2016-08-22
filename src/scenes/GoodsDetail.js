/**
 * Created by Jason.liu on 2016-06-21.
 */
import React, { Component,PropTypes} from 'react';
import {
    StyleSheet,
    AppRegistry,
    Text,
    View,
    Image,
    DrawerLayoutAndroid,
    DatePickerAndroid,
    TouchableWithoutFeedback,
    TouchableOpacity,

    Picker,
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
    IconToggle,
    RadioButtonGroup,
} from 'react-native-material-design'

import ImagePicker from 'react-native-image-picker';

import { connect } from 'react-redux';
//import { reduxForm } from 'redux-form'
import { palletGoodsConfirm,palletGoodsLoad,handleGoodsChange,addImages,showImages } from '../actions/Pallet'


var base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==';



export default class GoodsDetail extends Component{

    static contextTypes = {
        navigator: PropTypes.object.isRequired,
        goods:PropTypes.object
    }



    showDatePicker = (stateKey, options)=>{
        try {
            const {action, year, month, day} = DatePickerAndroid.open(options);

        } catch ({code, message}) {
            console.warn(message);
        }
    }

    showSwiper = (images) =>{
       
        const { navigator } = this.context;
        const { dispatch } = this.props;
        
        dispatch(showImages(images));
        
        navigator.forward();

    }

    showImagePicker =()=> {
        const options = {
            takePhotoButtonTitle: '拍照照片',
            cancelButtonTitle: '取消',
            quality: 1,

            allowsEditing: false,
            storageOptions: {
                skipBackup: true
            }
        };

        ImagePicker.showImagePicker(options, (response) => {

            const { dispatch } = this.props;

            if (response.didCancel) {
            }
            else if (response.error) {
            }
            else {
                var source = { uri: 'data:image/jpeg;base64,' + response.data, isStatic: true };
                dispatch(addImages(source));
            }
        });
    }

    goodsConfirm = (goods)=>{

        const { navigator } = this.context;
        const { dispatch } = this.props;

        dispatch(palletGoodsConfirm(goods));
        navigator.back();

    }

    render(){

        const { navigator } = this.context;
        const { dispatch,goods } = this.props;
        const  pallet  = navigator.currentRoute.props;

        return (


            <ScrollView style={{backgroundColor: '#fff'}} keyboardShouldPersistTaps={true} >


                <Card>
                    <Card.Body>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                            <Subheader text={pallet&&pallet.goodsName} />
                            <View style={{backgroundColor:'rgba(0,0,0,.12)',width:1,height:40}} />
                            <Subheader style={{flex:1}} text={pallet&&pallet.palletNumber}/>
                        </View>
                    </Card.Body>
                    <Divider />
                   

                    <Card.Body>

                        <View style={{flexDirection:'column'}}>

                            <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                                <View style={{flex:1}}>
                                    <Subheader text="批次"/>
                                </View>
                                <TextInput style={{height: 40, borderColor: '#fff', borderWidth: 1,flex:2}}>{goods.batchNumber}</TextInput>
                                <View style={{flex:1,alignItems:"flex-start"}}>

                                </View>
                            </View>

                            <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                                <View style={{flex:1}}>
                                    <Subheader text="件数"/>
                                </View>
                                <TextInput style={{height: 40, borderColor: '#fff', borderWidth: 1,flex:2}}
                                           multiline={false}
                                           maxLength={4}>{goods.pieces}</TextInput>
                                <View style={{flex:1,alignItems:"flex-start"}}>

                                </View>
                            </View>
                            <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                                <View style={{flex:1}}>
                                    <Subheader text="重量"/>
                                </View>
                                <TextInput style={{height: 40, borderColor: '#fff', borderWidth: 1,flex:2}}
                                           multiline={false}
                                           maxLength={6}>{goods.weight}</TextInput>
                                <View style={{flex:1,alignItems:"flex-start"}}>
                                    <Subheader text="千克" />
                                </View>
                            </View>
                            <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                                <View style={{flex:1}}>
                                    <Subheader text="体积"/>
                                </View>
                                <TextInput style={{height: 40, borderColor: '#fff', borderWidth: 1,flex:2}}
                                           multiline={false}
                                           maxLength={6}>{goods.volume}</TextInput>
                                <View style={{flex:1,alignItems:"flex-start"}}>
                                    <Subheader text="立方米" />
                                </View>
                            </View>

                            <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                                <View style={{flex:1}}>
                                    <Subheader text="生产日期" />
                                </View>

                                <TouchableWithoutFeedback
                                    onPress={()=>this.showDatePicker('生产日期')}>
                                    <View style={{flex:2}}>
                                        <Text >{goods.productionDate}</Text>
                                    </View>
                                </TouchableWithoutFeedback>

                                <View style={{flex:1,alignItems:"flex-start"}}>

                                </View>

                            </View>

                            <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                                <View style={{flex:1}}>
                                    <Subheader text="温度" />
                                </View>
                                <TextInput style={{height: 40, borderColor: '#fff', borderWidth: 1,flex:2}}
                                           multiline={false}
                                           maxLength={2}>{goods.temperature}</TextInput>
                                <View style={{flex:1,alignItems:"flex-start"}}>
                                    <Subheader text="摄氏度" />
                                </View>
                            </View>

                            <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                                <View style={{flex:1}}>
                                    <Subheader text="实收"/>
                                </View>
                                <TextInput style={{height: 40, borderColor: '#fff', borderWidth: 1,flex:2}}
                                           keyboardType = 'numeric'
                                           multiline={false}
                                           maxLength={4}
                                           onChange={(event)=>dispatch(handleGoodsChange({actualNumber:event.nativeEvent.text}))}>{goods.actualNumber}</TextInput>
                                <View style={{flex:1,alignItems:"flex-start"}}>

                                </View>
                            </View>

                            <Subheader text="品质" />
                            <RadioButtonGroup
                                selected={goods.quality?1:2}
                                items={[{value: 1, label: '良品'},{value: 2, label: '次品'}]}
                            />
                            

                        </View>

                    </Card.Body>

                    <Divider />

                    <Card.Body>
                        <Subheader text="现场图片" />
                    </Card.Body>
                    <Divider />



                    <Card.Body>
                        

                        <View style={{flexDirection:'column',height:100}}>
                            <View style={{flex:1,flexDirection:'row',flexWrap:'wrap',alignItems:'center'}}>


                                <View style={{alignItems:'center',justifyContent:'center',borderRadius:4,borderWidth: 0.5,borderStyle: 'dashed',padding:10,margin:10,width:60,height:60,}}>
                                    <TouchableOpacity onPress={()=>this.showImagePicker()}>
                                        <Icon name="FontAwesomeIcons|camera" />
                                    </TouchableOpacity>
                                </View>
                                {goods.images.map((img,index)=>
                                <View key={index} style={{alignItems:'center',justifyContent:'center',borderRadius:4,borderWidth: 0.5,borderStyle: 'dashed',padding:10,margin:10,width:60, height:60,}}>
                                    <TouchableOpacity onPress={()=>this.showSwiper({list:goods.images,index:index})}>
                                        <Image source={{uri:img.uri}}
                                                   style={{width: 50, height: 50}} />
                                    </TouchableOpacity>

                                </View>
                                )}

                            </View>
                        </View>

                    </Card.Body>
                    
                    <Card.Actions position="right">
                        <Button primary='paperTeal' raised={false} text="确认" theme="dark" onPress={() =>{this.goodsConfirm(goods)}} />
                    </Card.Actions>

                </Card>
                

            </ScrollView>
        );
    }

}




function goodsDetailConnection(state) {
    return {
        goods:state.pallet.goodsList
            .filter(g=>g.selected)[0].palletList
            .filter(p=>p.selected)[0].goods
    }
}

export default connect(goodsDetailConnection)(GoodsDetail)


const styles = {
    content: {
        padding: 16
    },
    container:{
        flex:1,
        justifyContent:'center',
        padding:20,
    },
    innerContainer:{
        borderRadius:10,
        alignItems:'center',
        backgroundColor: '#fff',
        padding: 20
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 20,
    },
    rowTitle: {
        flex: 1,
        fontWeight: 'bold',
    },
    base64: {
        flex: 1,
        height: 50,
        resizeMode: 'contain',
    },


};



