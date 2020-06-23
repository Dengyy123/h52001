import request from '@/utils/request';//引入axios对象

const BAST_API = process.env.VUE_APP_BASE_API;

export default {
    getlist() {
        return request({
            method: 'get',
            url: BAST_API + '/member/list'
        });
    },
    // 分页查询,
    // page当前页码, size 每页显示条数, searchMap 查询条件
    // 后台要通过 page 和 size 统计本次请求响应的数据
    search(page, size, searchMap) {
        return request({
            url: BAST_API + `/member/list/search/${page}/${size}`,
            method: 'get',
            data: searchMap
        })
    }
}
