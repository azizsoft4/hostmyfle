function s(e,a){return (typeof a === 'undefined')?document.querySelector(e):document.querySelectorAll(e);}
function aj(l,d,f){let x=new XMLHttpRequest();x.onreadystatechange=function(){if(x.readyState==4&&x.status==200){f(x.response);}};x.open('POST',l,true);x.setRequestHeader('Content-type','application/x-www-form-urlencoded');x.send(Object.keys(d).map(function(key){return encodeURIComponent(key)+"="+encodeURIComponent(d[key]);}).join("&"));}
