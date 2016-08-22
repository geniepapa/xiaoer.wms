/**
 * Created by Jason.liu on 2016-07-25.
 */
/**
 * Created by Jason.liu on 2016-07-25.
 */


import React, {
    Component,PropTypes
} from 'react';


import {
    StyleSheet,
    AppRegistry,
    Text,
    View,
    Image,
    DrawerLayoutAndroid,
    TouchableOpacity,
    Navigator,
    ScrollView
} from 'react-native';


import Swiper from 'react-native-swiper'
import { connect } from 'react-redux';


const renderPagination = (index, total, context) => {
    return (
        <View style={{position: 'absolute',bottom: -25,right: 10}}>
            <Text>
                <Text style={{color: '#007aff',fontSize: 20 }}>{index + 1}</Text>/{total}
            </Text>
        </View>
    )
}

export default class ImageSwiper extends Component{

    static contextTypes = {
        navigator: PropTypes.object.isRequired,
        images: PropTypes.object
    }


    render(){


        const { navigator } = this.context;
        const { dispatch,images } = this.props;

        return (

                <Swiper style={styles.wrapper}
                        loop={false}
                        index={images.index}>
                    {images.list.map((img,index)=>
                        <View style={styles.slide} key={index}>
                            <TouchableOpacity onPress={()=>navigator.back()}>
                                <Image style={styles.image} source={{uri:img.uri}} />
                            </TouchableOpacity>
                        </View>
                    )}

                </Swiper>

        )
    }

}

const styles = StyleSheet.create({
    wrapper: {
    },

    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },

    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },

    image: {
        flex: 1,
        height:400
    }
})

function imageSwiperConnection(state) {
    return {
        images:state.pallet.images
    }
}

export default connect(imageSwiperConnection)(ImageSwiper)