import request from './network.js'

const baseUrl = 'http://106.54.54.237:8000/api/hy';

export function getGoods(iid){
  return request({
    url : baseUrl + '/detail',
    data:{
      iid:iid
    }
  })
}