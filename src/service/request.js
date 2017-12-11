import axios from 'axios';
import querystring from 'query-string';
// const baseUrl = process.env.NODE_ENV !== 'production' ? 'http://api.myslxs.com' :
//                 'http://www.easy-mock.com/mock/5a0cf3511e9be34076f9175f';

const baseUrl = "http://www.easy-mock.com/mock/5a0cf3511e9be34076f9175f";
export default async function request(url, options = {}) {
    let params = {},
        method = (options.method || 'get').toLowerCase(),
        data = options.data || {};
    params.url = url;
    params.method = method;
    params.baseURL = baseUrl;
    switch(method){
        case 'get' :
            params.params = data;
            break;
        case 'post' :
            params.data = querystring.stringify(data);
            break;
        case 'delete' :
            params.params = data;
            break;
        case 'put' :
            params.data = querystring.stringify(data);
            break;
    }
    // let token = window.localStorage.getItem('token');
    // if (token) {
    //     params.headers = { Authorization: token };
    // }
    // catch写在前面能阻断model effect里面的执行
    return await axios(params).catch(errHandle).then(parse);
}
function errHandle(res) {
    alert('错误'+JSON.stringify(res));
}
function parse(response) {
    if (response.code == 401) {
        throw response;
    }
    return response.data;
}