/**
 * Created by Jason.liu on 2016-07-01.
 */
import {
    RESERVATION_GOODS_LOAD,
    RESERVATION_GOODS_SELECTED,
    PALLET_SCAN,
    PALLET_ADD,
    PALLET_REMOVE,
    PALLET_GOODS_LOAD,
    PALLET_GOODS_CONFIRM ,
    GOODS_CHANGE,
    PALLET_SELECTED,
    ADD_IMAGES,
    SHOW_IMAGES

} from '../constants/ActionTypes'


export function reservationGoodLoad(reservationCode){
    return {type: RESERVATION_GOODS_LOAD ,reservationCode:reservationCode};
}
export function reservationGoodSelected(goodsId){
    return {type: RESERVATION_GOODS_SELECTED ,goodsId:goodsId};
}

export function palletScan(palletNumber){
    return {type:PALLET_SCAN,palletNumber:palletNumber}
}

export function palletAdd(pallet){
    return {type:PALLET_ADD,pallet:pallet}
}
export function palletRemove(pallet){
    return {type:PALLET_REMOVE,pallet:pallet}
}
export function palletGoodsConfirm(goods){
    return {type:PALLET_GOODS_CONFIRM,goods:goods}
}
export function palletGoodsLoad(goodsname){
    return {type:PALLET_GOODS_LOAD,goodsName:goodsname}
}

export function handleGoodsChange(goods){
    return {type:GOODS_CHANGE,goods:goods}
}

export function palletSelected(palletNumber){
    return {type:PALLET_SELECTED,palletNumber:palletNumber}
}

export function addImages(image){
    return {type:ADD_IMAGES,image:image}
}

export function showImages(images){
    return {type:SHOW_IMAGES,images:images};
}




