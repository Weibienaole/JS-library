export default function lazyImage(){var r,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null,o=Array.prototype.slice.call(e?document.querySelectorAll(e):document.getElementsByTagName("img"));function t(){for(var e=o.length,t=0;t<e;t++){var n=o[t];n.getBoundingClientRect().top<document.documentElement.clientHeight&&(n.src=n.dataset.src,o.splice(t,1),e--,t--,0===o.length&&document.removeEventListener("scroll",r))}}o=o.filter(function(e){return e.dataset.src}),function(){{var n;"IntersectionObserver"in window?(n=new IntersectionObserver(function(e,t){e.forEach(function(e,t){e.isIntersecting&&((e=e.target).src=e.dataset.src,e.classList.remove("lazy-image"),n.unobserve(e),o.splice(t,1))})}),o.forEach(function(e){n.observe(e)})):(t(),r=function(n){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:100,o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:30,c=null,i=null,l=this;return function(){var e=+new Date,t=Array.prototype.slice.call(arguments);clearTimeout(i),o<e-(c=c||e)?(n.apply(l,t),c=e):i=setTimeout(function(){n.apply(l,t)},r)}}(t),document.addEventListener("scroll",r.bind(this)))}}()}