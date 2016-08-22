/**
 * Created by Jason.liu on 2016-06-14.
 */
import { RESERVATION_LOAD,RESERVATION_SCAN,RESERVATION_SELECTED } from '../constants/ActionTypes'


const initState = {
    list:[
        {
            "reservationId":"1",
            "selected":true,
            "code": "9787210082859",
            "status": 1,
            "company": "Google",
            "plateNumber": "沪A123456",
            "eta": "AM 2:00 - AM 3:00",
            "platformNumber": "01",
            "goodsList": [
                {
                    "goodsName": "棉花",
                    "advanceNumber": 100,
                    "actualNumber": 0,
                    "palletList": []
                }
            ]
        },
        {
            "reservationId":"2",
            "selected":false,
            "code": "201606011235",
            "status": 1,
            "company": "百度",
            "plateNumber": "沪A888888",
            "eta": "AM 3:00 - AM 4:00",
            "platformNumber": "02",
            "goodsList": [
                {
                    "goodsName": "棉花",
                    "advanceNumber": 100,
                    "actualNumber": 0,
                    "palletList": []
                }
            ]
        }]

}

export default function reservation(state = initState, action) {
    switch (action.type) {
        case RESERVATION_SCAN:
            return Object.assign({}, state, {
                filter: action.filter
            })
        case RESERVATION_SELECTED:
            return Object.assign({},state,{
                list:state.list.map((l,index)=>{
                    if(l.reservationId == action.reservationId ){
                        return Object.assign({},l,{selected:true})
                    }
                    else{
                        return Object.assign({},l,{selected:false})

                    }

                })
            })
        case RESERVATION_LOAD:
        default:
            return state
    }
}

