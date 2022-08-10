import request from './api';
const UserOrdersApi = {
    getUserOrders(userId,page,pageSize){
        return request({
            url: `/order/user/${userId}?page=${page}&pageSize=${pageSize}`,
            method: 'get'
        })
    },deleteOrdersFromUserById(orderId){
        return request({
            url:`/order/user/d/${orderId}`,
            method:'delete'
        })
    }

}
export default UserOrdersApi;