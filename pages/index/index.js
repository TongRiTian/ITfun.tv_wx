
Page({
  data: {
    slide_courses: [],
    new_courses: [],
    likes_courses: [],
    recommended_courses: [],
    sliderIndex: 0
  },
  onLoad: function () {
    this.init()
  },
  init() {
    wx.request({
      url: `https://itfun.tv/api/v1/home.json`,
      success: res => {
        // console.log(res)
        this.setData({
          slide_courses: res.data.slide_courses,
          new_courses: res.data.new_courses,
          likes_courses: res.data.likes_courses,
          recommended_courses: res.data.recommended_courses
        })
        console.log(this.data)
      }
    })
  },
  changeDots(e){    
    // console.log(e.detail.current)
    this.setData({
      sliderIndex: e.detail.current
    })
    // console.log(this.data.sliderIndex)
  },
  toAbout(){
    wx.navigateTo({
      url: `/pages/about/about`,
    })
  },
  toSearch() {
    wx.navigateTo({
      url: `/pages/search/search`,
    })
  }
})
