(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{145:function(t,e,n){var content=n(152);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("6add6edb",content,!0,{sourceMap:!1})},146:function(t,e,n){var content=n(154);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("6224379b",content,!0,{sourceMap:!1})},148:function(t,e,n){"use strict";n(14);var r=n(147),c=n(150),o=n(149),l=function t(e,n){Object(r.a)(this,t),this.id=e,this.email=n};n.d(e,"a",function(){return d});var d=function(){function t(){Object(r.a)(this,t)}return Object(c.a)(t,[{key:"fetch",value:function(){return new Promise(function(t,e){o.a.auth().onAuthStateChanged(function(e){t(null!=e?new l(e.uid,e.email):null)})})}},{key:"create",value:function(t,e){return o.a.auth().createUserWithEmailAndPassword(t,e)}},{key:"authorize",value:function(t,e){return o.a.auth().signInWithEmailAndPassword(t,e)}},{key:"clearSession",value:function(){return o.a.auth().signOut()}}]),t}()},149:function(t,e,n){"use strict";var r=n(168),c=n.n(r),o=(n(171),n(172),{apiKey:"AIzaSyDgw7znG2kgpYAH6UPXF1k72zjpnYV7zRg",authDomain:"nippohub-daily-prod.firebaseapp.com",databaseURL:"https://nippohub-daily-prod.firebaseio.com",projectId:"nippohub-daily-prod",storageBucket:"",messagingSenderId:"729594218139"});0===c.a.apps.length&&c.a.initializeApp(o),e.a=c.a},151:function(t,e,n){"use strict";var r=n(145);n.n(r).a},152:function(t,e,n){(t.exports=n(50)(!1)).push([t.i,".p-header{padding:.5rem 0;box-shadow:0 3px 5px rgba(0,0,0,.1)}.p-header__container{display:flex;justify-content:space-between;align-items:center;width:640px;margin:0 auto}.p-page-title{margin:0;font-size:1.5rem}.p-page-title a{color:#000;text-decoration:none}.p-auth-links{list-style-type:none;padding:0;margin:0}.p-auth-links__item{display:inline-block}.p-auth-links__item:nth-of-type(n+2){margin-left:.5rem}@media(max-width:640px){.p-header__container{width:100%;padding:0 1.5rem;box-sizing:border-box}}",""])},153:function(t,e,n){"use strict";var r=n(146);n.n(r).a},154:function(t,e,n){(t.exports=n(50)(!1)).push([t.i,".p-footer div{margin:0 auto;width:640px}@media(max-width:640px){.p-footer div{width:100%;padding:0 1.5rem;box-sizing:border-box}}",""])},155:function(t,e,n){"use strict";var r=n(148),c={props:["currentUserId","currentUser"],methods:{signOut:function(){(new r.a).clearSession().then(function(){return location.href="/"})}}},o=(n(151),n(18)),component=Object(o.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"p-header"},[n("div",{staticClass:"p-header__container"},[n("h1",{staticClass:"p-page-title"},[n("nuxt-link",{attrs:{to:"/"}},[t._v("NippoHub")])],1),t._v(" "),n("nav",[n("ul",{staticClass:"p-auth-links"},[null!=t.currentUser||null!=t.currentUserId?n("li",{staticClass:"p-auth-links__item",on:{click:t.signOut}},[t._v("Sign out")]):[n("li",{staticClass:"p-auth-links__item"},[n("nuxt-link",{attrs:{to:"/sign_in"}},[t._v("Sign in")])],1),t._v(" "),n("li",{staticClass:"p-auth-links__item"},[n("nuxt-link",{attrs:{to:"/sign_up"}},[t._v("Sign up")])],1)]],2)])])])},[],!1,null,null,null);e.a=component.exports},156:function(t,e,n){"use strict";n(153);var r=n(18),component=Object(r.a)({},function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"p-footer"},[e("div",[e("span",[this._v("\n      ©NippoHub\n    ")]),this._v(" "),e("nuxt-link",{attrs:{to:"/agreements",target:"_blank"}},[this._v("利用規約")]),this._v(" "),e("nuxt-link",{attrs:{to:"/privacy",target:"_blank"}},[this._v("プライバシーポリシー")])],1)])},[],!1,null,null,null);e.a=component.exports},161:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n(147),c=n(150),o=function(){function t(){Object(r.a)(this,t)}return Object(c.a)(t,null,[{key:"dateToString",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=function(t){return"0".concat(t).slice(-2)};return e?"".concat(t.getFullYear(),"-").concat(n(t.getMonth()+1),"-").concat(n(t.getDate())," ").concat(n(t.getHours()),":").concat(n(t.getMinutes())):"".concat(t.getFullYear(),"-").concat(n(t.getMonth()+1),"-").concat(n(t.getDate()))}}]),t}()},167:function(t,e,n){"use strict";n(14);var r=n(147),c=n(150),o=n(149),l=n(161),d=function t(e,n,title,content,c,o){Object(r.a)(this,t),this.id=e,this.date=n,this.title=title,this.content=content,this.createdAt=c,this.accessKey=o};n.d(e,"a",function(){return f});var f=function(){function t(){Object(r.a)(this,t)}return Object(c.a)(t,[{key:"fetchList",value:function(t,e,n){var r=o.a.database().ref("users/".concat(t,"/daily_reports/")).orderByChild("date");return null!=e&&(r=r.startAt(l.a.dateToString(e,!1))),null!=n&&(r=r.endAt(l.a.dateToString(n,!1))),r.once("value").then(function(t){var e=t.val(),n=[];for(var r in e){var c=e[r],o=new Date(c.createdAt);n.push(new d(r,c.date,c.title,c.content,l.a.dateToString(o),c.access_key))}return n.sort(function(t,e){return t.date<e.date?-1:t.date===e.date?0:1}).reverse()})}},{key:"fetch",value:function(t,e){return o.a.database().ref("users/".concat(t,"/daily_reports/").concat(e)).once("value").then(function(t){var e=t.val();if(null!=e){var n=new Date(e.createdAt);return new d(e.Id,e.date,e.title,e.content,l.a.dateToString(n),e.access_key)}Promise.reject()})}},{key:"create",value:function(t,e,title,content){return o.a.database().ref("users/".concat(t,"/daily_reports")).push({date:e,title:title,content:content,createdAt:Date.now()})}},{key:"update",value:function(t,e,n,title,content){return o.a.database().ref("users/".concat(t,"/daily_reports/").concat(e)).update({date:n,title:title,content:content})}},{key:"updateAccessKey",value:function(t,e,n){return o.a.database().ref("users/".concat(t,"/daily_reports/").concat(e)).update({access_key:n})}},{key:"delete",value:function(t,e){return o.a.database().ref("users/".concat(t,"/daily_reports/").concat(e)).remove()}}]),t}()},225:function(t,e,n){"use strict";var r=n(254),c=n.n(r);c.a.setOptions({sanitize:!0}),e.a=c.a},239:function(t,e,n){"use strict";n(14);var r=n(147),c=n(150),o=n(149),l=function t(e,n){Object(r.a)(this,t),this.userId=e,this.dailyReportId=n};n.d(e,"a",function(){return d});var d=function(){function t(){Object(r.a)(this,t)}return Object(c.a)(t,[{key:"fetch",value:function(t){return o.a.database().ref("/access_keys/".concat(t)).once("value").then(function(t){var e=t.val();if(null!=e)return new l(e.user_id,e.daily_report_id);Promise.reject()})}},{key:"create",value:function(t,e){return o.a.database().ref("access_keys").push({user_id:t,daily_report_id:e}).then(function(t){return t.key})}},{key:"delete",value:function(t){return o.a.database().ref("/access_keys/".concat(t)).remove()}}]),t}()},348:function(t,e,n){"use strict";n.r(e);var r=n(148),c=n(155),o=n(225),l=n(239),d=n(167),f={props:["accessKey"],data:function(){return{title:"",content:"",didFind:!1}},mounted:function(){var t=this,e=new l.a,n=new d.a;e.fetch(this.accessKey).then(function(t){var e=t.userId,r=t.dailyReportId;return n.fetch(e,r)}).then(function(e){t.title="".concat(e.date," ").concat(e.title),t.content=Object(o.a)(e.content),t.didFind=!0}).catch(function(){console.fatal("日報が見つかりません")})}},h=n(18),v=Object(h.a)(f,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.didFind?[n("article",[n("h1",[t._v(t._s(t.title))]),t._v(" "),n("main",{domProps:{innerHTML:t._s(t.content)}})])]:n("div",[t._v("\n    日報が見つかりませんでした\n  ")])],2)},[],!1,null,null,null).exports,_=n(156),y={components:{MainHeader:c.a,DailyReportPublicDetail:v,MainFooter:_.a},data:function(){return{currentUserId:null}},mounted:function(){var t=this;(new r.a).fetch().then(function(e){t.currentUserId=null!=e?e.id:null})}},m=Object(h.a)(y,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("main-header",{attrs:{currentUserId:this.currentUserId}}),this._v(" "),e("div",{staticClass:"l-container"},[e("DailyReportPublicDetail",{attrs:{"access-key":this.$route.params.access_key}})],1),this._v(" "),e("main-footer")],1)},[],!1,null,null,null);e.default=m.exports}}]);