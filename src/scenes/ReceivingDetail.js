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
    TouchableOpacity,
    TouchableHighlight,
    TextInput,
    Modal

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
} from 'react-native-material-design'

import { connect } from 'react-redux';
import { palletSelected,palletScan,palletAdd,palletRemove,reservationGoodLoad,reservationGoodSelected } from '../actions/Pallet'


export default class ReceivingDetail extends Component{

    static contextTypes = {
        navigator: PropTypes.object.isRequired,
        reservationSelected:PropTypes.object,
        goodsList: PropTypes.object
    }


    refresh=()=>{

        const { dispatch,reservationSelected } = this.props;
        dispatch(reservationGoodLoad(reservationSelected));

    }
    
  
    scanBarcode = (goodsId)=>{

        const { navigator } = this.context;
        const { dispatch } = this.props;
        dispatch(reservationGoodSelected(goodsId))
        navigator.to('barcodescanning','托盘扫描',{action:palletScan ,back:"receiving.receivingdetail"});

    }
    inputBarcode = (goodsId,text)=>{

        const { navigator } = this.context;
        const { dispatch } = this.props;
        dispatch(reservationGoodSelected(goodsId))
        dispatch(palletScan(text));

    }

    goodsConfirm= (pallet) =>{
        const { navigator } = this.context;
        const { dispatch } = this.props;
        dispatch(palletSelected(pallet.palletNumber));
        
        navigator.forward('goodsdetail','货物上托',{...pallet});
    }


    

    render(){

        const { navigator } = this.context;
        const { dispatch,goodsList } = this.props;

        return (
            <ScrollView style={{backgroundColor: '#fff'}}>
                {goodsList&&goodsList.map((g,index)=>
                    <Card key={index}>
                        <Card.Body>
                            <TouchableHighlight>
                                <View style={{flex:1,flexDirection:'row',alignItems:'center',padding:10,backgroundColor: '#eeeeee'}}>

                                    <View style={{flex:1,flexDirection:'column'}}>
                                        <View><Text>{g.goodsName} </Text></View>
                                    </View>
                                    <View style={{flex:6,flexDirection:'column'}}>
                                        <TextInput style={{ height: 40,borderColor: '#cccccc',backgroundColor: 'white',}}
                                                   autoCapitalize="none"
                                                   autoCorrect={false}
                                                   clearButtonMode="always"
                                                   placeholder="托盘号"
                                                   onChange={(event) => {this.inputBarcode(g.goodsId,event.nativeEvent.text)}}>
                                            {g.palletNumber}
                                        </TextInput>
                                    </View>
                                    <View style={{width:40,backgroundColor: 'white',height:40,alignItems:'center',justifyContent:'center'}}>
                                        <TouchableOpacity onPress={() => this.scanBarcode(g.goodsId)}>
                                            <View><Icon name="FontAwesomeIcons|barcode" />
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{width:40,height:40,alignItems:'center',justifyContent:'center'}}>
                                        <TouchableOpacity onPress={() => {  dispatch(palletAdd({goodsId:g.goodsId,goodsName:g.goodsName,palletNumber:g.palletNumber,actualNumber:0})) }}>
                                            <View><Icon name="FontAwesomeIcons|plus"  /></View>
                                        </TouchableOpacity>
                                    </View>
                                    
                                </View>
                            </TouchableHighlight>
                        </Card.Body>
                        <Divider /> 
                        {g.palletList&&g.palletList.map((p,index)=>
                        <Card.Body key={index}>

                            <View style={{flex:1,flexDirection:'row',alignItems:'center',padding:5}}>

                                <View style={{flex:1,flexDirection:'column'}}>
                                </View>
                                <View style={{flex:4,flexDirection:'column'}}>
                                    <Subheader text={p&&p.palletNumber} />
                                </View>
                                <View style={{backgroundColor: 'white',flexDirection:'column',alignItems:'center'}}>
                                    <TouchableOpacity onPress={() => { this.goodsConfirm(p) }}>
                                        <Avatar text={p&&p.actualNumber.toString()} size={30}/>
                                    </TouchableOpacity>

                                </View>
                                <View style={{flex:1,flexDirection:'column'}}>
                                </View>
                                <View style={{flex:1,flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                                    <TouchableOpacity onPress={() => { dispatch(palletRemove(p)) }}>
                                        <View><Icon name="FontAwesomeIcons|remove"  size={24}  /></View>
                                    </TouchableOpacity>
                                </View>
                                <View style={{flex:1,flexDirection:'column'}}>
                                </View>

                            </View>
                        </Card.Body>
                    )}
                        
                        <Card.Actions position="right">
                            <Button primary='paperTeal' theme="dark" raised={false}  text="收货" onPress={() =>{}} />
                        </Card.Actions>
                    </Card>
                )}

                <Button primary='paperTeal' text="刷新" onPress={() => {this.refresh()}} />
            </ScrollView>
        );
    }

}

function getSelectedReservationId(reservationList){
    let selectedReservation = reservationList.filter((r)=>r.selected)[0];

    if(selectedReservation) {
        return selectedReservation.reservationId;
    }

    return 0;

}

function receivingDetailConnection(state) {
    return {
        reservationSelected:getSelectedReservationId(state.reservation.list),
        goodsList:state.pallet.goodsList
    }
}

export default connect(receivingDetailConnection)(ReceivingDetail)




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


};


