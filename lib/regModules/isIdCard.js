export default function(r){function o(r,t,n,e){var u=(new Date).getFullYear();if(e.getFullYear()!==+r||e.getMonth()+1!==+t||e.getDate()!==+n)return!1;r=u-+r;return 0<=r&&r<=100}function d(r){if(15!==r.length)return r;var t,n=new Array(7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2),e=new Array("1","0","X","9","8","7","6","5","4","3","2"),u=0;for(r=r.substr(0,6)+"19"+r.substr(6,r.length-6),t=0;t<17;t++)u+=+r.substr(t,1)*n[t];return r+=e[u%11]}return r=(r="number"==typeof r?String(r):r).trim(),""!==(t=r)&&(!1!=(!1!==/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(t))&&(!1!==function(r,t){r=r.substr(0,2);return null!=t[r]}(t,{11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"})&&(!1!==function(r){var t=r.length;if(15===t){var n=r.match(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/),e=(null===(i=n)||void 0===i?void 0:i[2])||"",u=(null===(d=n)||void 0===d?void 0:d[3])||"",d=(null===(i=n)||void 0===i?void 0:i[4])||"",i=new Date("19"+e+"/"+u+"/"+d);return o("19"+e,u,d,i)}if(18!==t)return!1;var n=r.match(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X|x)$/),e=(null===(r=n)||void 0===r?void 0:r[2])||"",u=(null===(r=n)||void 0===r?void 0:r[3])||"",d=(null===(n=n)||void 0===n?void 0:n[4])||"",i=new Date(e+"/"+u+"/"+d);return o(e,u,d,i)}(t)&&!1!==function(r){if(18!==(r=d(r)).length)return!1;var t,n=new Array(7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2),e=new Array("1","0","X","9","8","7","6","5","4","3","2"),u=0;for(t=0;t<17;t++)u+=+r.substr(t,1)*n[t];return e[u%11]===r.substr(17,1).toLocaleUpperCase()}(t))));var t}