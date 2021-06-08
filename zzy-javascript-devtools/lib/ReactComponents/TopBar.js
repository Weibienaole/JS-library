function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function ownKeys(e,t){var r,o=Object.keys(e);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(e),t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,r)),o}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){_defineProperty(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function _defineProperty(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),t}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _createSuper(r){var o=_isNativeReflectConstruct();return function(){var t,e=_getPrototypeOf(r);return _possibleConstructorReturn(this,o?(t=_getPrototypeOf(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments))}}function _possibleConstructorReturn(t,e){return!e||"object"!==_typeof(e)&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}import React,{Component}from"react";import image1 from"./image/backArrow_black.svg";import image2 from"./image/backArrow.svg";var classObj={"topBar-component_zzyDevtools":{width:"100vw",height:"5.5rem",display:"flex","align-items":"center","justify-content":"center",position:"relative"},arrow:{position:"absolute",left:"0",top:"0",width:"5.5rem",height:"5.5rem"},topBarTil:{"font-size":"2.25rem","font-family":"PingFangSC-Medium, PingFang SC","font-weight":500},rigTxt:{position:"absolute",right:"3rem","font-size":"1.75rem"}},TopBar=function(){_inherits(e,Component);var t=_createSuper(e);function e(){return _classCallCheck(this,e),t.apply(this,arguments)}return _createClass(e,[{key:"render",value:function(){var t=this,e="0"==this.props.type?image1:image2;return React.createElement("div",{className:"topBar-component_zzyDevtools",style:_objectSpread({background:0==this.props.type?"#fff":1==this.props.type?"#000":"none"},classObj["topBar-component_zzyDevtools"])},!this.props.noArrow&&React.createElement("img",{src:(null==e?void 0:e.default)||e,alt:"",className:"arrow",onClick:function(){return t.props.arrowBack()},style:classObj.arrow}),React.createElement("span",{className:"topBarTil",style:_objectSpread({color:"0"==this.props.type?"#000":"#fff"},classObj.topBarTil)},this.props.title),this.props.rigTxt&&React.createElement("span",{className:"rigTxt",style:_objectSpread({color:"0"==this.props.type?"#000":"#fff"},classObj.rigTxt),onClick:function(){return t.props.clickRigTxt()}},this.props.rigTxt))}}]),e}();export{TopBar as default};