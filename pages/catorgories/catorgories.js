// pages/catorgories/catorgories.js
Page({
  data: {
    categorise: [],
    slugs: [],
    courses: [],
    currentIndex: 0,
    bodyHeight: ''
  },
  onLoad: function () {
    this.init()
  },
  init() {
    wx.request({
      url: `https://itfun.tv/api/v1/categories.json`,
      success: res => {
        // console.log(res)
        let slugs = res.data.categories.map( item => {
          return item.slug
        }) 
        this.setData({
          categorise: res.data.categories,
          slugs: slugs
        })
        // console.log(this.data.slugs)
        this.initCourses()
      }
    })
  },
  initCourses(){
    let slug = this.data.slugs[this.data.currentIndex]
    wx.request({
      url: `https://itfun.tv/api/v1/categories/${slug}.json`,
      success: res => {
        // console.log(res)
        this.setData({
          courses: res.data.courses
        })
      }
    })
  },
  change(e){
    // console.log(e)
    let index = e.currentTarget.dataset.index
    this.setData({
      currentIndex: index
    })
    // console.log(this.data.currentIndex)
    this.initCourses()
  },
  // changePage(e){
  //   // console.log(e.detail)
  //   this.setData({
  //     currentIndex: e.detail.current
  //   })
  //   this.initCourses()
  // },
  // setHeight(){
  //   let bodyHeight = this.data.courses.length*526+'rpx'
  //   this.setData({
  //     bodyHeight: bodyHeight
  //   })
  // },
  toCourse(e){
    // console.log(e.currentTarget.dataset.id)
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/courses/courses?id=${id}`
    })
  }
})