/**
 * Created by Jason.liu on 2016-07-01.
 */

/**
 * Created by Jason.liu on 2016-06-14.
 */
import {
    RESERVATION_GOODS_LOAD,
    RESERVATION_GOODS_SELECTED,
    PALLET_SCAN,
    PALLET_ADD,
    PALLET_GOODS_CONFIRM,
    PALLET_GOODS_LOAD,
    PALLET_REMOVE,
    GOODS_CHANGE,
    PALLET_SELECTED,
    ADD_IMAGES,
SHOW_IMAGES
} from '../constants/ActionTypes'

const initState = {
    goodsList: [
        {
            "goodsId": 1,
            "selected": false,
            "goodsName": "棉花",
            "advanceNumber": 100,
            "actualNumber": 0,
            "palletNumber": "",
            "palletList": []
        },
        {
            "goodsId": 2,
            "selected": false,
            "goodsName": "衣服",
            "advanceNumber": 100,
            "actualNumber": 0,
            "palletNumber": "",
            "palletList": []
        }]
}


export default function pallet(state = initState, action) {
    switch (action.type) {


        case RESERVATION_GOODS_SELECTED:
            return Object.assign({},state,{
                goodsList:state.goodsList.map(
                    (g,index)=>{
                        if(g.goodsId == action.goodsId){
                            return Object.assign({},g,{selected:true})
                        }
                        else{
                            return Object.assign({},g,{selected:false})
                        }
                    }
                )})
        case PALLET_ADD:
            return Object.assign({}, state, {
                goodsList:state.goodsList.map(
                    (g,index)=>{
                        if(g.goodsId == action.pallet.goodsId){
                            return Object.assign({},g,{palletNumber:"",
                                palletList:[...g.palletList,Object.assign(action.pallet,{
                                    "selected":"true",
                                    "goods": {
                                    "goodName": action.goodName,
                                    "batchNumber": "2016080001",
                                    "pieces": 10,
                                    "weight": 100,
                                    "volume": 100,
                                    "productionDate": "2016-06-01",
                                    "temperature": -10,
                                    "quality": true,
                                    "actualNumber": 0,
                                    "images": []
                                    }
                                })]});
                        }
                        else{
                            return g;
                        }
                    }
                )})
        case PALLET_REMOVE:
            return Object.assign({}, state, {
                goodsList:state.goodsList.map(
                    (g,index)=>{
                            return Object.assign({},g,{
                                    palletList:g.palletList.filter((p)=>p.palletNumber != action.pallet.palletNumber)
                                    //palletList:[ p for (let p of g.palletList) if(p.palletNumber != action.pallet.palletNumber) ]
                            }
                            );
                    }
                )})
        case PALLET_SELECTED:
            return Object.assign({}, state, {
                goodsList:state.goodsList.map(
                    (g,index)=>{
                        return Object.assign({},g,{
                                palletList:g.palletList.map(
                                    (p,index)=>{
                                        if(p.palletNumber == action.palletNumber)
                                            return Object.assign({},p,{selected:true});
                                        else
                                            return Object.assign({},p,{selected:false});
                                        
                                    }
                                    
                                )
                            }
                        );
                    }
                )})
        
        case PALLET_SCAN:
            return Object.assign({}, state, {
                goodsList:state.goodsList.map(
                    (g,index)=>{
                        if(g.selected) {
                            return Object.assign({},g,{palletNumber:action.palletNumber}) 
                        }
                        else {
                            return g;
                        }
                    }
                )
            })
        case PALLET_GOODS_LOAD:
            return Object.assign({}, state, {
            })
        case GOODS_CHANGE:
            return Object.assign({},state,{
                goodsList:state.goodsList.map(
                    (g,index) => {
                        return Object.assign({},g,{
                            palletList:g.palletList.map((p,index)=>{

                                if(p.selected) {

                                    return Object.assign({}, p,
                                        {
                                            actualNumber: action.goods.actualNumber,
                                            goods: Object.assign({}, p.goods, action.goods)
                                        })
                                }
                                else {
                                    return p;
                                }
                            })
                        })
                    }
                )
            })
        case ADD_IMAGES:
            return Object.assign({},state,{
                goodsList:state.goodsList.map(
                    (g,index) => {
                        return Object.assign({},g,{
                            palletList:g.palletList.map((p,index)=>{
                                if(p.selected) {
                                    return Object.assign({}, p, {
                                            goods: Object.assign({},p.goods,{images:[...p.goods.images,action.image]})
                                        })
                                }
                                else {
                                    return p;
                                }
                            })
                        })
                    }
                )
            })
        case SHOW_IMAGES:
            return Object.assign({},state,{images:action.images});
        case RESERVATION_GOODS_LOAD:
        case PALLET_GOODS_CONFIRM:
        default:
            return state
    }
}


