export default {
  // 得到是否登录
 // getLogin: (state) => state.isLogin,
  // 得到假用户名
 // getuname: (state) => state.username,
  // 得到假密码
//  getpwd: (state) => state.password,
  // 得到是否加载中
  getloading: (state) => state.isLoading,
  getloaded: (state) => state.loaded,
  // 得到消息
  getMessages: (state) => state.messages,
  // 得到单条微博
  getList: (state) => state.list,
  // 得到headline
  getHeadline: (state) => state.headline,
  // 得到hot
  getHot: (state) => state.hot,
  //得到发布页发布标签
  getItems1: (state) => state.items1,
  getItems2: (state) => state.items2,
  //得到个人中心列表
  getSetList: (state) => state.setList,
  //头条列表
  getBillboardList: (state) => state.billboardList,
  //视频列表
  getVideoList: (state) => state.videoList,
  //发现页隐藏的标签
  getBtnList: (state) => state.btnList,
};
