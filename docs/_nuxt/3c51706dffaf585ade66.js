(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{145:function(t,n,e){var content=e(152);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(51).default)("6add6edb",content,!0,{sourceMap:!1})},146:function(t,n,e){var content=e(154);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(51).default)("6224379b",content,!0,{sourceMap:!1})},148:function(t,n,e){"use strict";e(14);var r=e(147),o=e(150),l=e(149),c=function t(n,e){Object(r.a)(this,t),this.id=n,this.email=e};e.d(n,"a",function(){return d});var d=function(){function t(){Object(r.a)(this,t)}return Object(o.a)(t,[{key:"fetch",value:function(){return new Promise(function(t,n){l.a.auth().onAuthStateChanged(function(n){t(null!=n?new c(n.uid,n.email):null)})})}},{key:"create",value:function(t,n){return l.a.auth().createUserWithEmailAndPassword(t,n)}},{key:"authorize",value:function(t,n){return l.a.auth().signInWithEmailAndPassword(t,n)}},{key:"clearSession",value:function(){return l.a.auth().signOut()}}]),t}()},149:function(t,n,e){"use strict";var r=e(168),o=e.n(r),l=(e(171),e(172),{apiKey:"AIzaSyDgw7znG2kgpYAH6UPXF1k72zjpnYV7zRg",authDomain:"nippohub-daily-prod.firebaseapp.com",databaseURL:"https://nippohub-daily-prod.firebaseio.com",projectId:"nippohub-daily-prod",storageBucket:"",messagingSenderId:"729594218139"});0===o.a.apps.length&&o.a.initializeApp(l),n.a=o.a},151:function(t,n,e){"use strict";var r=e(145);e.n(r).a},152:function(t,n,e){(t.exports=e(50)(!1)).push([t.i,".p-header{padding:.5rem 0;box-shadow:0 3px 5px rgba(0,0,0,.1)}.p-header__container{display:flex;justify-content:space-between;align-items:center;width:640px;margin:0 auto}.p-page-title{margin:0;font-size:1.5rem}.p-page-title a{color:#000;text-decoration:none}.p-auth-links{list-style-type:none;padding:0;margin:0}.p-auth-links__item{display:inline-block}.p-auth-links__item:nth-of-type(n+2){margin-left:.5rem}@media(max-width:640px){.p-header__container{width:100%;padding:0 1.5rem;box-sizing:border-box}}",""])},153:function(t,n,e){"use strict";var r=e(146);e.n(r).a},154:function(t,n,e){(t.exports=e(50)(!1)).push([t.i,".p-footer div{margin:0 auto;width:640px}@media(max-width:640px){.p-footer div{width:100%;padding:0 1.5rem;box-sizing:border-box}}",""])},155:function(t,n,e){"use strict";var r=e(148),o={props:["currentUserId","currentUser"],methods:{signOut:function(){(new r.a).clearSession().then(function(){return location.href="/"})}}},l=(e(151),e(18)),component=Object(l.a)(o,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("header",{staticClass:"p-header"},[e("div",{staticClass:"p-header__container"},[e("h1",{staticClass:"p-page-title"},[e("nuxt-link",{attrs:{to:"/"}},[t._v("NippoHub")])],1),t._v(" "),e("nav",[e("ul",{staticClass:"p-auth-links"},[null!=t.currentUser||null!=t.currentUserId?e("li",{staticClass:"p-auth-links__item",on:{click:t.signOut}},[t._v("Sign out")]):[e("li",{staticClass:"p-auth-links__item"},[e("nuxt-link",{attrs:{to:"/sign_in"}},[t._v("Sign in")])],1),t._v(" "),e("li",{staticClass:"p-auth-links__item"},[e("nuxt-link",{attrs:{to:"/sign_up"}},[t._v("Sign up")])],1)]],2)])])])},[],!1,null,null,null);n.a=component.exports},156:function(t,n,e){"use strict";e(153);var r=e(18),component=Object(r.a)({},function(){var t=this.$createElement,n=this._self._c||t;return n("footer",{staticClass:"p-footer"},[n("div",[n("span",[this._v("\n      ©NippoHub\n    ")]),this._v(" "),n("nuxt-link",{attrs:{to:"/agreements",target:"_blank"}},[this._v("利用規約")]),this._v(" "),n("nuxt-link",{attrs:{to:"/privacy",target:"_blank"}},[this._v("プライバシーポリシー")])],1)])},[],!1,null,null,null);n.a=component.exports},181:function(t,n,e){"use strict";var r=e(148),o=e(155),l=e(156),c={components:{MainHeader:o.a,MainFooter:l.a},data:function(){return{currentUserId:null}},mounted:function(){var t=this;(new r.a).fetch().then(function(n){t.currentUserId=null!=n?n.id:null})}};n.a=c},220:function(t,n,e){var content=e(330);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(51).default)("09f8f00a",content,!0,{sourceMap:!1})},329:function(t,n,e){"use strict";var r=e(220);e.n(r).a},330:function(t,n,e){(t.exports=e(50)(!1)).push([t.i,".p-embedded-content{width:100%;height:70vh}",""])},353:function(t,n,e){"use strict";e.r(n);var r=e(181),o=(e(329),e(18)),component=Object(o.a)(r.a,function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("main-header",{attrs:{currentUserId:this.currentUserId}}),this._v(" "),this._m(0),this._v(" "),n("main-footer")],1)},[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"l-container"},[n("iframe",{staticClass:"p-embedded-content",attrs:{src:"/agreements_content.html"}})])}],!1,null,null,null);n.default=component.exports}}]);