export default function(n){return new Promise(function(i,e){if(!window.setupWebViewJavascriptBridge)return e("请先将 JSBriged.js 引入！");window.setupWebViewJavascriptBridge(function(e){e.registerHandler(n,function(e){i(e)})})})}