(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{267:function(e,n,t){__NEXT_REGISTER_PAGE("/login",function(){return e.exports=t(268),{page:e.exports.default}})},268:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),r=t(56),c=t(57),i=t(58),l=t(55),u=t.n(l);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,n){return(m=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var h=function(e){function n(e){var t,o,a,r,c,l;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),o=this,t=!(a=p(n).call(this,e))||"object"!==s(a)&&"function"!=typeof a?b(o):a,r=b(b(t)),l=function(){i.a.auth().signInWithEmailAndPassword("sonhoai272@gmail.com","admin@0123").then(function(){u.a.push({pathname:"/"})}).catch(function(e){console.log(e)})},(c="login")in r?Object.defineProperty(r,c,{value:l,enumerable:!0,configurable:!0,writable:!0}):r[c]=l,t}var t,o,r;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&m(e,n)}(n,a.a.Component),t=n,(o=[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(c.a,null),a.a.createElement("div",{className:"col-12 login"},a.a.createElement("div",{className:"container",style:{display:"flex",alignItems:"center",height:"100vh"}},a.a.createElement("div",{className:"row",style:{alignItems:"center"}},a.a.createElement("div",{className:"col-sm-5"},a.a.createElement("h1",null,"Luôn luôn bên nhau."),a.a.createElement("p",null,"Cách đơn giản để nhắn tin, chat video, lên kế hoạch - ở cùng một nơi."),a.a.createElement("span",{className:"login_btn",onClick:this.login},"Đăng nhập")),a.a.createElement("div",{className:"col-sm-7"},a.a.createElement("img",{src:"https://www.pubnub.com/wp-content/uploads/2017/11/chat-app-messaging-app.png",className:"img-fluid"}))))))}}])&&f(t.prototype,o),r&&f(t,r),n}();n.default=Object(r.a)(h)}},[[267,1,0]]]);