(()=>{var t={757:(t,e,n)=>{t.exports=n(666)},666:t=>{var e=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var a=e&&e.prototype instanceof m?e:m,o=Object.create(a.prototype),i=new q(r||[]);return o._invoke=function(t,e,n){var r=h;return function(a,o){if(r===p)throw new Error("Generator is already running");if(r===f){if("throw"===a)throw o;return O()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=_(i,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=f,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var s=l(t,e,n);if("normal"===s.type){if(r=n.done?f:d,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=f,n.method="throw",n.arg=s.arg)}}}(t,n,i),o}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var h="suspendedStart",d="suspendedYield",p="executing",f="completed",v={};function m(){}function b(){}function y(){}var g={};s(g,o,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(T([])));x&&x!==n&&r.call(x,o)&&(g=x);var k=y.prototype=m.prototype=Object.create(g);function L(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function n(a,o,i,c){var s=l(t[a],t,o);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return n("throw",t,i,c)}))}c(s.arg)}var a;this._invoke=function(t,r){function o(){return new e((function(e,a){n(t,r,e,a)}))}return a=a?a.then(o,o):o()}}function _(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,_(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var a=l(r,t.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,v;var o=a.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function q(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function T(t){if(t){var n=t[o];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function n(){for(;++a<t.length;)if(r.call(t,a))return n.value=t[a],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}return{next:O}}function O(){return{value:e,done:!0}}return b.prototype=y,s(k,"constructor",y),s(y,"constructor",b),b.displayName=s(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,c,"GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},L(E.prototype),s(E.prototype,i,(function(){return this})),t.AsyncIterator=E,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var i=new E(u(e,n,r,a),o);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(k),s(k,c,"Generator"),s(k,o,(function(){return this})),s(k,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=T,q.prototype={constructor:q,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function a(r,a){return c.type="throw",c.arg=t,n.next=r,a&&(n.method="next",n.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;j(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:T(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t=document.querySelector("#main-content"),e=function(){var e;(e=document.createElement("div")).innerHTML='\n        <div>\n            <h2>\n                Introducción\n            </h2>\n            <p class="text-break">\n                El propósito de esta App es el de practicar el uso de las \n                promesas, async y await en JavaScript. <br>\n                También hacemos uso del \'fetch()\' para realizar distintas peticiones\n                http a distintas APIS.\n            </p>\n            <p>\n                Dentro de las APIS utilizadas para este ejercicio se encuentran las siguientes:\n            </p>\n            <ul>\n                <li>\n                    <a href=\'https://cloudinary.com\' target="_blank">https://cloudinary.com</a>\n                </li>\n                <li>\n                    <a href="https://reqres.in/api" target="_blank">\n                        https://reqres.in/api\n                    </a>\n                </li>\n                <li>\n                    <a href="https://api.chucknorris.io" target="_blank">\n                        https://api.chucknorris.io\n                    </a>\n                </li>\n            </ul>\n        </div>\n    ',t.append(e)};function r(t,e,n,r,a,o,i){try{var c=t[o](i),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,a)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(a,o){var i=t.apply(e,n);function c(t){r(i,a,o,c,s,"next",t)}function s(t){r(i,a,o,c,s,"throw",t)}c(void 0)}))}}var o,i,c,s,u,l,h,d=n(757),p=n.n(d),f=function(){var t=a(p().mark((function t(){var e,n,r,a,o;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.chucknorris.io/jokes/random");case 3:if((e=t.sent).ok){t.next=6;break}throw"No se pudo realizar la peticion";case 6:return t.next=8,e.json();case 8:return n=t.sent,r=n.icon_url,a=n.id,o=n.value,t.abrupt("return",{icon_url:r,id:a,value:o});case 15:throw t.prev=15,t.t0=t.catch(0),t.t0;case 18:case"end":return t.stop()}}),t,null,[[0,15]])})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=a(p().mark((function t(){var e,n,r;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://reqres.in/api/users?page=2");case 2:return e=t.sent,t.next=5,e.json();case 5:return n=t.sent,r=n.data,t.abrupt("return",r);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),m=function(){var t=a(p().mark((function t(e){var n,r,a;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=new FormData).append("upload_preset","nkdxio9g"),n.append("file",e),t.prev=3,t.next=6,fetch("https://api.cloudinary.com/v1_1/dwthsnldq/upload",{method:"POST",body:n});case 6:if(!(r=t.sent).ok){t.next=14;break}return t.next=10,r.json();case 10:return a=t.sent,t.abrupt("return",a.secure_url);case 14:return t.next=16,r.json();case 16:throw t.sent;case 17:t.next=22;break;case 19:throw t.prev=19,t.t0=t.catch(3),t.t0;case 22:case"end":return t.stop()}}),t,null,[[3,19]])})));return function(e){return t.apply(this,arguments)}}(),b=document.querySelector("#main-content"),y=function(){var t;(t=document.createElement("div")).innerHTML='\n        <div class="mb-3 border-bottom pb-3">\n            <h2 class="mt-5">\n                Subir Archivos\n            </h2>\n            <p class="small text-muted">\n                Hacemos uso de cloudinary ( <a href=\'https://cloudinary.com\' target="_blank">https://cloudinary.com</a>)\n                para cargar una imagen a sus servidores  <br>\n                haciendo una petición \'POST\' hacia la API de cloudinary. <br>\n                Luego de esto mostramos la imagen cargada en nuestra pantalla.\n            </p>   \n        </div>\n\n\n        <br>  \n        <label for="">\n            Selecciona una fotografia\n        </label>\n        <br>  \n        <input id="iptImg" type="file" accept="image/png, image/jpeg, image/jpg">\n\n        <br>\n        <div id="fotoDiv">\n            <img id="foto" class="mt-3 mb-4 small shadow rounded" width="350" src="" >\n            <br>  \n        </div>\n\n    ',b.append(t),o=document.querySelector("#iptImg"),i=document.querySelector("#foto"),o.addEventListener("change",(function(t){var e=t.target.files[0];m(e).then((function(t){i.src=t,c=t;var e=document.createElement("label");e.innerText="Cloudinary link";var n=document.createElement("a");n.href=c,n.text=c,n.target="_blank";var r=document.querySelector("#fotoDiv"),a=document.createElement("br");r.append(e),r.append(a),r.append(n)}))}))},g=document.querySelector("#main-content"),w=0,x=function(t){var e=document.createElement("li");e.innerHTML='\n        <small class="font-weight-bold text-dark">\n            '.concat(w," -  ").concat(t.value,"\n        </small>\n    "),e.classList.add("list-group-item","shadow-sm","rounded","mb-2"),u.append(e),w+=1},k=function(){var t;(t=document.createElement("div")).innerHTML='\n        <h2 class="text-dark font-weight-bold mt-5">\n            Chistes\n        </h2>\n        <p class="small text-muted">\n            Agrega un nuevo chiste de Chuck Norris pulsando el boton \'Agregar Chiste\' <br>\n            el cual realizará una petición GET a la siguiente API:\n            <a href="https://api.chucknorris.io/jokes/random" target="_blank">\n                https://api.chucknorris.io/jokes/random\n            </a>\n        </p>\n        <hr>\n        \n        <button id="btnOtroChiste" class="btn btn-success">\n            Agregar Chiste\n        </button>\n\n        <ol id="lista-chistes" class="mt-2 list-group">\n            <li class="list-group-item shadow-sm rounded mb-2 font-weight-bold text-white bg-dark"> \n                Listado de Chistes\n            </li>\n        </ol>\n    ',g.append(t),u=document.querySelector("#lista-chistes"),(s=document.querySelector("#btnOtroChiste")).addEventListener("click",a(p().mark((function t(){return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s.disabled=!0,t.t0=x,t.next=4,f();case 4:t.t1=t.sent,(0,t.t0)(t.t1),s.disabled=!1;case 7:case"end":return t.stop()}}),t)}))))},L=document.querySelector("#main-content"),E=0,_=function(t){var e='\n        <td class="font-weight-bold"> \n            '.concat(E,"\n        </td>\n        <td> \n            ").concat(t.email,"\n        </td>\n        <td>\n            ").concat(t.first_name," ").concat(t.last_name,'\n        </td>\n        <td>\n            <img class="" style="border-radius:50%; width:50px; height:50px;" src="').concat(t.avatar,'" alt="">\n        </td>\n    '),n=document.createElement("tr");n.innerHTML=e,document.querySelector("#tbody").append(n),E++},S=function(){var t=a(p().mark((function t(){return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return E=0,e=void 0,(e=document.createElement("div")).innerHTML='\n\n        <h2 class="mt-5"> Usuarios </h2>\n        <p class="small text-muted">\n            Listado de usuarios obtenido\n            utilizando JavaScript \'fetch()\' </br>  a la siguiente api:\n            <a href="https://reqres.in/api/users?page=2" target="_blank">\n                https://reqres.in/api/users?page=2\n            </a>\n        </p>\n        <br>\n        <table id="tblUsers" class="table table-stripped mb-5">\n            <thead class="thead-dark">\n                <tr>\n                    <th>#</th>\n                    <th>Email</th>\n                    <th>Nombre</th>\n                    <th>Avatar</th>\n                </tr>\n            </thead>\n            <tbody id="tbody" class=""> </tbody>\n        </table>\n    \n    ',L.appendChild(e),t.next=4,v();case 4:t.sent.map((function(t){return _(t)}));case 6:case"end":return t.stop()}var e}),t)})));return function(){return t.apply(this,arguments)}}(),j=document.querySelector("#main-content"),q=function(){document.querySelector("#header").innerHTML='\n         <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">\n            <div class="container-fluid">\n                <a class="navbar-brand " href="#">\n                    Prueba: Peticiones a APIS\n                </a>\n                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">\n                    <span class="navbar-toggler-icon"></span>\n                </button>\n                <div class="offcanvas offcanvas-end bg-dark" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">\n                    <div class="offcanvas-header">\n                        <h5 class="offcanvas-title text-white" id="offcanvasNavbarLabel">\n                            Menú\n                        </h5>\n                        <button type="button" class="btn-close bg-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>\n                    </div>\n                    <div class="offcanvas-body">\n                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">\n                            <li class="nav-item">\n                                <a id="inicio" class="nav-link enlace" href="#">Inicio</a>\n                            </li>   \n                            <li class="nav-item">\n                                <a id="chistes" class="nav-link enlace" href="#">Chistes</a>\n                            </li>\n                            <li class="nav-item">\n                                <a id="usuarios" class="nav-link enlace" href="#">Usuarios</a>\n                            </li>\n                            <li class="nav-item">\n                                <a id="archivos" class="nav-link enlace" href="#">Subir Archivos</a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </nav>\n    ',document.querySelectorAll(".enlace").forEach((function(t){t.addEventListener("click",(function(t){switch(j.innerHTML="",t.target.id){case"inicio":T(e);break;case"chistes":T(k);break;case"archivos":T(y);break;case"usuarios":T(S)}}))}))},T=function(t){t()};q(),T(e),l=document.querySelector("#date"),h=new Date,l.append("- ".concat(h))})()})();