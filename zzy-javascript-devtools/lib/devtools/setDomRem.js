export default function setDomRem(){var t,n,o,i,d,e,s,l=0<arguments.length&&void 0!==arguments[0]?arguments[0]:8;function m(){var e=s.getBoundingClientRect().width,e=(e=(t=t||540)<e?t:e)*+l/375;if(i="html{font-size:"+e+"px !important}",o=document.getElementById("rootsize")||document.createElement("style"),document.getElementById("rootsize")||(document.getElementsByTagName("head")[0].appendChild(o),o.id="rootsize"),o.styleSheet)o.styleSheet.disabled||(o.styleSheet.cssText=i);else try{o.innerHTML=i}catch(e){o.innerText=i}s.style.fontSize=e+"px"}t=750,d=document,e=window,s=d.documentElement,m(),e.addEventListener("resize",function(){clearTimeout(n),n=setTimeout(m,300)},!1),e.addEventListener("pageshow",function(e){e.persisted&&(clearTimeout(n),n=setTimeout(m,300))},!1),"complete"===d.readyState?d.body.style.fontSize="16px":d.addEventListener("DOMContentLoaded",function(e){d.body.style.fontSize="16px"},!1)}