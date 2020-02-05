import {
  getMultiData,
  getGoodsData
  } from '../../server/home.js'

  const types = ['pop','new','sell'];
  const top = 1000;
Page({
  data:{
    banners:[],
    recommends:[],
    list: ['流行', '新款', '精选'],
    goods:{
      pop: { page: 0, list: [] },
      new: { page: 0, list: [] },
      sell: { page: 0, list: [] },
    },
    currentType:'pop',
    showBackTop:false,
    isFixed:false,
    tabScrollTop:0
  },
  onLoad:function(options){
    //1.请求轮播图数据
    this._getMultiData()

    //2.请求商品数据
    this._getGoodsData('pop')
    this._getGoodsData('new')
    this._getGoodsData('sell')
  },
  //---------------网络请求函数-------------------
  _getMultiData(){
    getMultiData().then(res => {
      //取出轮播图和推荐的数据
      const banners = res.data.data.banner.list;
      const recommends = res.data.data.recommend.list;
      //将banners和recommends放入data中
      this.setData({
        banners: banners,
        recommends: recommends
      })
    })
  },
_getGoodsData(type){
  //1.获取页码
  const page = this.data.goods[type].page + 1;
  //2.发送网络请求
  getGoodsData(type,page).then(res=>{
    //2.1取出数据
    const list = res.data.data.list;
    //2.2将数据设置到对应type的list里
    //...xxx是 将xxx数组的数据先遍历出来 再push进去
    const oldList = this.data.goods[type].list;
    oldList.push(...list)
    //2.3将数据设置到data中
    const typeKey = `goods.${type}.list`;
    const pageKey = `goods.${type}.page`;
    this.setData({
      [typeKey]:oldList,
      [pageKey]:page
    })
  })
},
  //-------------------事件监听函数--------------------
  handleTabClick(event){
    //取出index
    const index = event.detail.index
    //设置currentType
    const type = types[index]
    this.setData({
      currentType:type
    })
  },
  //-------------------------------------------------
  //监听页面滚动到底部
  onReachBottom(){
    //上拉加载更多 请求新的数据
    this._getGoodsData(this.data.currentType)
  },
  //--------------------------------------------------
  //监听页面滚动
  //不要在该函数中频繁调用setData
  onPageScroll(options){
    const scrollTop = options.scrollTop;
    //修改showBackTop的属性
    this.setData({
      showBackTop:scrollTop >= top
    })
    //修改isFixed属性
    const flag = scrollTop >= this.data.tabScrollTop;
    if(flag != this.data.isFixed){
      this.setData({
        isFixed:flag
      })
    }
  },
  //------------------------------------------------
  //监听图片加载完成
  handleImageLoad(){
    wx.createSelectorQuery().select('#tab-control').boundingClientRect(rect => {
      this.data.tabScrollTop = rect.top
    }).exec()
  }
})