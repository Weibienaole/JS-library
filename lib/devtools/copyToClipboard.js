export default function(e){var t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t);var o=0<(null===(e=document.getSelection())||void 0===e?void 0:e.rangeCount)&&(null===(o=document.getSelection())||void 0===o?void 0:o.getRangeAt(0));t.select(),document.execCommand("copy"),document.body.removeChild(t),o&&(null!==(t=document.getSelection())&&void 0!==t&&t.removeAllRanges(),null!==(t=document.getSelection())&&void 0!==t&&t.addRange(o))}