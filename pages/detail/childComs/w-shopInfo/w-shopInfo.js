
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    shopInfo:{
      type:Object,
      value:{}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    toFix:function (num){
      if (num < 10000){
        return num;
      }
      return (num/10000).toFixed(1)+"万"
    }
  }
})
