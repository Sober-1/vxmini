import {getGoods} from '../../server/detail.js'
Page({
  data: {
    list:['商品','参数','评论','推荐'],
    topImg:[],
    goodsInfo:{},
    scrollTo:0,
    canInfo:0
  },
  onLoad:function(options){
    this._getGoods(options.iid)
    this._getGoodsInfo(options.iid)
  },
  _getGoods(iid){
    getGoods(iid).then(res => {
      console.log(res)
      this.setData({
        topImg:res.data.result.itemInfo.topImages
      })
    })
  },
  _getGoodsInfo(iid){
    getGoods(iid).then(res => {
      this.setData({
        goodsInfo:res.data.result
      })
    })
  },
  handleClick(e){
    const index = e.detail.index
    if(index === 0){
      this.setData({
        scrollTo:0
      })
    }
    else if(index === 1){
      this.setData({
        scrollTo:this.data.canInfo
      })
    }
  },
  imgLoad(){
    wx.createSelectorQuery().select('#info').boundingClientRect(rect => {
      this.setData({
        canInfo:rect.top
      })
      console.log(rect)
    }).exec()
  },
  onPageScroll(options){
    console.log(options)
  }
})