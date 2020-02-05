import request from './network.js'

const baseUrl = 'http://106.54.54.237:8000/api/hy';

export function getCategories(){
  return request({
    url: baseUrl  + '/category'
  })
}

export function getImages(maitKey){
  return request({
    url: baseUrl + '/subcategory',
    data:{
      maitKey:maitKey
    }
  })
}