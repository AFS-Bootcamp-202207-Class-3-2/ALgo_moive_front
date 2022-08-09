import request from './api.js';
const  orderApi = {
    cycleQueryOrderState(orderId){
        return request({
            url: `/order/query/paystate/${orderId}`,
            method: 'get'
        })
    },
    generateOrderResponseById(id){
        return request({
            url: '/order/get/' + id,
            method: 'get'
        })
    }
}
export default orderApi