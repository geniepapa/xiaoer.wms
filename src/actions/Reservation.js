/**
 * Created by Jason.liu on 2016-07-01.
 */
/**
 * Created by Jason.liu on 2016-06-14.
 */
import { RESERVATION_LOAD,RESERVATION_SCAN,RESERVATION_SELECTED } from '../constants/ActionTypes'

export function reservationScan(filter){
    return {type: RESERVATION_SCAN ,filter:filter};
}
export function reservationLoad(user){
    //fetch reservation data
    return {type:RESERVATION_LOAD,user:user}
}

export function reservationSelected(reservationId){
    return {type:RESERVATION_SELECTED,reservationId:reservationId}
}



