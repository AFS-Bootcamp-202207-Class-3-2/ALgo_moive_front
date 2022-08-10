import request from './api';
const UserOrdersApi = {
    getUserOrders(userId,page,pageSize){
        return request({
            url: `/order/user/${userId}?page=${page}&pageSize=${pageSize}`,
            method: 'get'
        })
    }
}
export default UserOrdersApi;