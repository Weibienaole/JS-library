function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(o){var r=_isNativeReflectConstruct();return function(){var e,t=_getPrototypeOf(o);return _possibleConstructorReturn(this,r?(e=_getPrototypeOf(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments))}}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}import React,{Component}from"react";var ErrorBoundary=function(){_inherits(o,Component);var t=_createSuper(o);function o(e){return _classCallCheck(this,o),(e=t.call(this,e)).state={hasError:!1},e}return _createClass(o,[{key:"componentDidCatch",value:function(e,t){console.log(this.props,"propssssss"),console.log(e,t,"将报错上传至服务器")}},{key:"render",value:function(){return this.state.hasError?React.createElement("div",{style:{fontSize:"2.5rem",color:"red",margin:"1rem","word-break":"break-word"}},"Something was wrong, please open the console to check the printing, or contact the Developer.",React.createElement("br",null),"development"===this.props.mode&&React.createElement("div",{onClick:function(){return copyToClipboard(window.location.href||"none")}},React.createElement("br",null),React.createElement("span",null,"link: ",window.location.href||"none"),React.createElement("br",null),React.createElement("br",null),"点击链接进行复制.")):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return console.error(e,"更新state 使下一次的UI是降级后的UI"),{hasError:!0}}}]),o}();function copyToClipboard(e){var t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t);e=0<document.getSelection().rangeCount&&document.getSelection().getRangeAt(0);t.select(),document.execCommand("copy"),document.body.removeChild(t),e&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(e))}export{ErrorBoundary as default};