var _this=this;export default function(){var r,n,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null,o=(o=Array.prototype.slice.call(e?document.querySelectorAll(e):document.getElementsByTagName("img"))).filter(function(e){return e.dataset.src}),t=function(){for(var e=o.length,t=0;t<e;t++){var n=o[t];n.getBoundingClientRect().top<document.documentElement.clientHeight&&(n.src=n.dataset.src,o.splice(t,1),e--,t--,0===o.length&&document.removeEventListener("scroll",r))}},i=function(n){var r,o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:100,i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:30,c=0,l=_this;return function(){var e=+new Date,t=Array.prototype.slice.call(arguments);clearTimeout(r),i<e-(c=c||e)?(n.apply(l,t),c=e):r=setTimeout(function(){n.apply(l,t)},o)}};"IntersectionObserver"in window?(n=new IntersectionObserver(function(e,t){e.forEach(function(e,t){e.isIntersecting&&((e=e.target).src=e.dataset.src,e.classList.remove("lazy-image"),n.unobserve(e),o.splice(t,1))})}),o.forEach(function(e){n.observe(e)})):(t(),r=i(t),document.addEventListener("scroll",r.bind(_this)))}