export default function JSB_appMethod(n){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;return new Promise(function(i,e){if(!window.setupWebViewJavascriptBridge)return e("请先将 JSBriged.js 引入！");window.setupWebViewJavascriptBridge(function(e){e.callHandler(n,t,function(e){i(e)})})})}