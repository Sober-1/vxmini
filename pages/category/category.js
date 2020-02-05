import {getCategories,getImages} from '../../server/category.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles:[],
    imgs:{},
    currentMait:'3627'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getCategories()
    this._getImages(this.data.currentMait)
  },
  _getCategories(){
    getCategories().then(res => {
      this.setData({
        titles:res.data.data.category.list
      })
    })
  },
  _getImages(maitKey){
    getImages(maitKey).then(res => {
      this.setData({
        imgs: res.data.data.list
      })
    })
  },
  getImage(event){
    const mait = event.detail
    this.setData({
        currentMait: mait
      })
    this._getImages(mait)
  }
})