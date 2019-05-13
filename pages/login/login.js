// pages/login/login.js
Page({
  data: {
    buttonData: ['登录','会员注册'],
    currentIndex: 0,
    radioData: [
      { name: '男', value: 1 },
      { name: '女', value: 2 },
      { name: '其他', value: 3 }
    ]
  },
  onLoad: function () {

  },
  change(e){
    this.setData({
      currentIndex: e.currentTarget.dataset.index
    })
  },
  login(e){
    console.log(e)
    const data = {
      grant_type: 'password',
      client_id: 'c60de69e571fae852bea53e347a2be36503ebba84247a054cb7eb6549d161ac9',    
      client_secret: 'd8491d666ee8749bc348eb25035ed0195dbd6cff586327ba9304013eb0d92734',
      username: e.detail.value.user,
      password: e.detail.value.password
    }
    wx.request({
      url: `https://itfun.tv/oauth/token`,
      method: 'post',
      data: data,
      success: res => {
        console.log(res)
        wx.setStorageSync('token_type', res.data.token_type,)
        wx.setStorageSync('access_token', res.data.access_token)
        console.log(res.statusCode === 200)
        if (res.statusCode === 200){
          wx.switchTab({
            url: '/pages/mine/mine'
          })
        }
      }
    })
  },
  register(e){

  },
  toIndex(){

  }
})