// pages/mine/mine.js
Page({
  data: {
    access_token: '',
    navData:['我的主页','喜欢的课程','观看历史'],
    currentIndex: 0,
    user: {},
    likeCourse: [],
    learned: []
  },
  onLoad: function () {
    this.init()
  },
  onShow: function () {
    this.getUser()
  },
  toLogin(){
    wx.navigateTo({
      url: '/pages/login/login'
    })
  },
  init(){
    this.getUser()
    this.getLikeCourse()
    this.getLearnings()
    console.log(this.data)
  },
  getUser(){
    let token_type = wx.getStorageSync('token_type')
    let access_token = wx.getStorageSync('access_token')
    wx.request({
      url: `https://itfun.tv/api/v1/users/me.json`,
      header: {
        'Authorization': `${token_type} ${access_token}`
      },
      success: res => {
        // console.log(res)
        this.setData({
          user: res.data.user,
          access_token: access_token
        })
      }
    })
  },
  getLikeCourse(){
    let token_type = wx.getStorageSync('token_type')
    let access_token = wx.getStorageSync('access_token')
    wx.request({
      url: `https://itfun.tv/api/v1/users/like_courses.json`,
      header: {
        'Authorization': `${token_type} ${access_token}`
      },
      success: res => {
        // console.log(res)
        this.setData({
          likeCourse: res.data.courses
        })
      }
    })
  },
  getLearnings(){
    let token_type = wx.getStorageSync('token_type')
    let access_token = wx.getStorageSync('access_token')
    wx.request({
      url: `https://itfun.tv/api/v1/users/learnings.json`,
      header: {
        'Authorization': `${token_type} ${access_token}`
      },
      success: res => {
        console.log(res)
        this.setData({
          learned: res.data.courses
        })
      }
    })
  },
  changeNav(e){
    // console.log(e)
    this.setData({
      currentIndex: e.currentTarget.dataset.index
    })
  },
  changItem(e){
    // console.log(e.detail)
    this.setData({
      currentIndex: e.detail.current
    })
  }
})