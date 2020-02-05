import request from './network.js'

const baseUrl = 'http://106.54.54.237:8000/api/hy'

export function getMultiData(){
  return request({
    url: baseUrl + '/home/multidata'
  })
}


export function getGoodsData(type,page){
  return request({
    url:baseUrl + '/home/data',
    data:{
      type:type,
      page:page
    }
  })
}