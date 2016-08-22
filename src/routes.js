/**
 * Created by Jason on 2016-06-01.
 */

export default {


    receiving: {
        initialRoute: true,
        title: '收货任务',
        component: require('./scenes/Receiving').default,

        children: {
            receivingdetail: {
                title: '收货', // optional
                component: require('./scenes/ReceivingDetail').default,
                children:{
                    goodsdetail: {
                        title: '商品', // optional
                        component: require('./scenes/GoodsDetail').default,
                        children:{
                            swipering:{
                                title:'图片',
                                component:require('./scenes/ImageSwiper').default
                            }
                        }
                    }
                }
            },
        }
    },

    boarding: {
        title: '上架任务',
        component: require('./scenes/Boarding').default
    },
    picking: {
        title: '拣货任务',
        component: require('./scenes/Picking').default,

        children: {
            pickingdetail: {
                title: '拣货', // optional
                component: require('./scenes/PickingDetail').default
            }
        }
    },
    warehousing: {
        title: '仓储',
        component: require('./scenes/Warehousing').default
    },

    barcodescanning:{
        title:'条码',
        component: require('./scenes/BarcodeScanner').default
    },

 

}