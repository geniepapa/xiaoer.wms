/**
 * Created by Jason on 2016-06-01.
 */
import React, { Component,PropTypes} from 'react';
import {
    StyleSheet,
    AppRegistry,
    Text,
    TextInput,
    View,
    Image,
    DrawerLayoutAndroid,
    TouchableOpacity,
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
import { reservationLoad, reservationScan,reservationSelected } from '../actions/Reservation'

export default class Receiving extends Component {

    static contextTypes = {
        navigator: PropTypes.object.isRequired,
        reservation:PropTypes.object,
        filter:PropTypes.object
    };

    showBarcodePicker = ()=>{
        const { navigator } = this.context;
        navigator.to('barcodescanning','预约单扫描',{action:reservationScan ,back:"receiving"});
    }

    receivingGoodsLoad = (code)=>{
        const { navigator } = this.context;
        const { dispatch } = this.props;
        dispatch(reservationSelected(code));
        navigator.forward();
    }


    render() {
        const { navigator } = this.context;
        const { dispatch,reservation,filter } = this.props;
        
        return(

            <ScrollView style={{backgroundColor: '#fff'}} >

                <View style={{flex:1,flexDirection:'row',alignItems:'center',padding:10,backgroundColor: '#eeeeee',}}>
                    <View style={{flex:1}}>
                        <TextInput style={{ height: 40,borderColor: '#cccccc',backgroundColor: 'white',}}
                            autoCapitalize="none"
                            autoCorrect={false}
                            clearButtonMode="always"
                            placeholder="预约单" onChange={(event) => {dispatch(reservationScan(event.nativeEvent.text))  }}>{filter}</TextInput>
                    </View>
                    <View style={{width:40,backgroundColor: 'white',height:40,alignItems:'center',justifyContent:'center'}}>
                        <TouchableOpacity onPress={()=>this.showBarcodePicker()}>
                            <Icon name="FontAwesomeIcons|barcode" />
                        </TouchableOpacity>
                    </View>
                </View>
                {reservation&&reservation.map((r,index)=>
                    <Card key={index}>
                    <Card.Body>
                    <Text style={[TYPO.paperSubhead, COLOR.green]}>{r.company}-{r.code}</Text>
                    </Card.Body>
                    <Divider />

                    <List primaryText= {r.plateNumber}
                    secondaryText={'卸货月台：' + r.platformNumber}
                    leftIcon={<Icon name="FontAwesomeIcons|truck"/>}
                    captionText ={r.eta}
                    />

                    <Card.Actions position="right">
                    {
                        r.status == 1 ?
                        <Button primary='paperTeal' text="收货" onPress={
                        () => this.receivingGoodsLoad(r.reservationId)
                        }/> :
                        <Button primary='paperTeal' text="续收" onPress={
                        () => this.receivingGoodsLoad(r.reservationId)
                        }/>
                    }
                    </Card.Actions>
                    </Card>
                )}

                <Button primary='paperTeal' text="刷新" onPress={() => {  }} />


            </ScrollView>

        );
    }
}


function filterReservation(filter,reservation=[])
{
    if(filter)
        return reservation.filter(r=>r.code==filter);
    return reservation;

}

function receivingConnection(state) {
    return {
        reservation:filterReservation(state.reservation.filter,state.reservation.list),
        filter:state.reservation.filter
    }
}

export default connect(receivingConnection)(Receiving)

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

