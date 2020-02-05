
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
      type:Array,
      value:[]
    },
    imgs: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0
  },
  /**
   * 组件的方法列表
   */
  methods: {
    itemClick(e){
      const index = e.currentTarget.dataset.index
      const mait = e.currentTarget.dataset.mait 
      this.setData({
        currentIndex:index
      })
      this.triggerEvent("tabClick",mait, {})
    }
  }
})
