export default function(e){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:7;if(r&&1!==r&&2!==r&&3!==r&&4!==r)return"";switch(r){case 1:return e.replace(/\s/g,"");case 2:return e.replace(/(^\s)|(\s*$)/g,"");case 3:return e.replace(/(^\s)/g,"");case 4:return e.replace(/(\s$)/g,"");default:return e}}