export default function appMethods(name, data = null) {
  /**
   * name: 事件名
   * data: 参数 - 仅有调app事件是有
   */
  return new Promise((reslove, reject) => {
    window.setupWebViewJavascriptBridge((bridge) => {
        bridge.callHandler(name, data, (result) => {
          reslove(result)
        })
    })
  })
}
/*
appMethods(name, data).then(res=>{
  // 回调返回数据
})
*/

// 目前已具有事件
/**
 * pageShare - app分享能力
 * JSON格式解码后
 * {
 *  shareTitle: 'shareTitle',
 *   shareContent: 'shareContent',
 *   shareUrl: 'shareUrl',
 *   shareImg: 'shareImg',
 *   shareChannels:  ["朋友圈","微信好友","QQ","微博","QQ空间"],
 * }
 * wxClientShare - 小程序分享 参数可以不传 如果传的话同上  shareUrl 不传  shareContent 不传 shareChannels 不传
 * closePage - 关闭H5页面
 * addVideo - 选择视频 参数配置：{type: Number} 1 -> 海选 其余待定
 */
