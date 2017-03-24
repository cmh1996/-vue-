export default {
  // 改变是否登录状态
  setLogin ({commit}, platform) {
    commit('SET_LOGIN', platform);
  },
  // 改变是否正在加载状态
  setLoading ({commit}, platform) {
    commit('SET_LOADING', platform);
  },
  setLoaded ({commit}, platform) {
    commit('SET_LOADED', platform);
  },
  // 首页加载更多
  setHomepageMore ({commit}, platform) {
    commit('SET_HOME_PAGE_MORE', platform);
  },
  // headline加载更多
  setHeadlineMore ({commit}, platform) {
    commit('SET_HEADLINE_MORE', platform);
  },
  // hot加载更多
  setHotMore ({commit}, platform) {
    commit('SET_HOT_MORE', platform);
  },
  // billboard加载更多
  setBillboardMore ({commit}, platform) {
    commit('SET_BILLBOARD_MORE', platform);
  },
  // Video加载更多
  setVideoMore ({commit}, platform) {
    commit('SET_VIDEO_MORE', platform);
  },
  // 添加订单
  setOrder ({commit}, platform) {
    commit('SET_ORDER', platform);
  }
};
