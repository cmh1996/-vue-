export default {
  // 设置是否登录
  SET_LOGIN (state, platform) {
    state.isLogin = platform;
  },
  // 设置是否在加载
  SET_LOADING (state, platform) {
    state.isLoading = platform;
  },
  SET_LOADED (state, platform) {
    state.loaded = platform;
  },
  // 首页加载更多
  SET_HOME_PAGE_MORE (state, platform) {
    state.list = platform;
  },
  //headline loadmore
  SET_HEADLINE_MORE (state,platform){
    state.headline = platform;
  },
  //hot loadmore
  SET_HOT_MORE (state,platform){
    state.hot = platform;
  },
  //hot loadmore
  SET_BILLBOARD_MORE (state,platform){
    state.billboardList = platform;
  },
  //hot loadmore
  SET_VIDEO_MORE (state,platform){
    state.videoList = platform;
  },
  // 添加订单
  SET_ORDER (state, platform) {
    state.falseOrder.unshift(platform);
  }
};
