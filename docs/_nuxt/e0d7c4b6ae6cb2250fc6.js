(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{145:function(t,e,n){var content=n(149);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("6add6edb",content,!0,{sourceMap:!1})},146:function(t,e,n){var content=n(151);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("6224379b",content,!0,{sourceMap:!1})},147:function(t,e,n){"use strict";var r=n(162),o=n.n(r),l={apiKey:"AIzaSyDgw7znG2kgpYAH6UPXF1k72zjpnYV7zRg",authDomain:"nippohub-daily-prod.firebaseapp.com",databaseURL:"https://nippohub-daily-prod.firebaseio.com",projectId:"nippohub-daily-prod",storageBucket:"",messagingSenderId:"729594218139"};0===o.a.apps.length&&o.a.initializeApp(l),e.a=o.a},148:function(t,e,n){"use strict";var r=n(145);n.n(r).a},149:function(t,e,n){(t.exports=n(50)(!1)).push([t.i,".p-header{padding:.5rem 0;box-shadow:0 3px 5px rgba(0,0,0,.1)}.p-header__container{display:flex;justify-content:space-between;align-items:center;width:640px;margin:0 auto}.p-page-title{margin:0;font-size:1.5rem}.p-page-title a{color:#000;text-decoration:none}.p-auth-links{list-style-type:none;padding:0;margin:0}.p-auth-links__item{display:inline-block}.p-auth-links__item:nth-of-type(n+2){margin-left:.5rem}@media(max-width:640px){.p-header__container{width:100%;padding:0 1.5rem;box-sizing:border-box}}",""])},150:function(t,e,n){"use strict";var r=n(146);n.n(r).a},151:function(t,e,n){(t.exports=n(50)(!1)).push([t.i,".p-footer div{margin:0 auto;width:640px}@media(max-width:640px){.p-footer div{width:100%;padding:0 1.5rem;box-sizing:border-box}}",""])},152:function(t,e,n){"use strict";var r=n(147),o={props:["currentUserId"],methods:{signOut:function(){r.a.auth().signOut()}}},l=(n(148),n(18)),component=Object(l.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"p-header"},[n("div",{staticClass:"p-header__container"},[n("h1",{staticClass:"p-page-title"},[n("nuxt-link",{attrs:{to:"/"}},[t._v("NippoHub")])],1),t._v(" "),n("nav",[n("ul",{staticClass:"p-auth-links"},[null!==t.currentUserId?n("li",{staticClass:"p-auth-links__item",on:{click:t.signOut}},[t._v("Sign out")]):[n("li",{staticClass:"p-auth-links__item"},[n("nuxt-link",{attrs:{to:"/sign_in"}},[t._v("Sign in")])],1),t._v(" "),n("li",{staticClass:"p-auth-links__item"},[n("nuxt-link",{attrs:{to:"/sign_up"}},[t._v("Sign up")])],1)]],2)])])])},[],!1,null,null,null);e.a=component.exports},153:function(t,e,n){"use strict";n(150);var r=n(18),component=Object(r.a)({},function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"p-footer"},[e("div",[e("span",[this._v("\n      ©NippoHub\n    ")]),this._v(" "),e("nuxt-link",{attrs:{to:"/agreements",target:"_blank"}},[this._v("利用規約")]),this._v(" "),e("nuxt-link",{attrs:{to:"/privacy",target:"_blank"}},[this._v("プライバシーポリシー")])],1)])},[],!1,null,null,null);e.a=component.exports},157:function(t,e,n){var content=n(174);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("2bfdbba2",content,!0,{sourceMap:!1})},173:function(t,e,n){"use strict";var r=n(157);n.n(r).a},174:function(t,e,n){(t.exports=n(50)(!1)).push([t.i,".u-mt-075{margin-top:.75em}.u-text-align-right{text-align:right}",""])},175:function(t,e,n){var content=n(225);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("9bfcc092",content,!0,{sourceMap:!1})},176:function(t,e,n){var content=n(227);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("24bfbbfc",content,!0,{sourceMap:!1})},177:function(t,e,n){var content=n(229);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("da02b386",content,!0,{sourceMap:!1})},186:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",function(){return r})},187:function(t,e,n){"use strict";function r(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",function(){return o})},202:function(t,e,n){"use strict";n.d(e,"a",function(){return l});var r=n(186),o=n(187),l=function(){function t(){Object(r.a)(this,t)}return Object(o.a)(t,null,[{key:"dateToString",value:function(t){var e=function(t){return"0".concat(t).slice(-2)};return"".concat(t.getFullYear(),"-").concat(e(t.getMonth()+1),"-").concat(e(t.getDate())," ").concat(e(t.getHours()),":").concat(e(t.getMinutes()))}}]),t}()},224:function(t,e,n){"use strict";var r=n(175);n.n(r).a},225:function(t,e,n){(t.exports=n(50)(!1)).push([t.i,".p-oneline-input{height:2.5em;padding:.25em .5em;outline:none;border:.1em solid #ddd;border-radius:.3em;box-sizing:border-box}",""])},226:function(t,e,n){"use strict";var r=n(176);n.n(r).a},227:function(t,e,n){(t.exports=n(50)(!1)).push([t.i,".p-btn,.p-submit{background-color:#fff;border:.1em solid #ddd;border-radius:.3em;padding:.25em 2em}",""])},228:function(t,e,n){"use strict";var r=n(177);n.n(r).a},229:function(t,e,n){(t.exports=n(50)(!1)).push([t.i,".p-daily-report-form__date-form{width:20%}.p-daily-report-form__title-form{margin-left:calc(3% - .5em);width:77%}.p-daily-report-form__content-form{width:100%;resize:vertical;box-sizing:border-box;border:.1em solid #ddd;border-radius:.3em;padding:.5em;height:10em;outline:none}@media(max-width:640px){.p-daily-report-form__date-form{width:100%}.p-daily-report-form__title-form{width:100%;margin:1rem 0 0}}",""])},233:function(t,e,n){"use strict";var r=n(147),o=n(202),l=(n(92),n(93),n(14),n(186),n(187),{props:["currentUserId","dailyReportId"],data:function(){return{date:"",title:"",content:""}},methods:{post:function(){var t=r.a.database(),e=new Date;null!=this.currentUserId&&(null!=this.dailyReportId?t.ref("users/".concat(this.currentUserId,"/daily_reports/").concat(this.dailyReportId)).update({date:this.date,title:this.title,content:this.content}).then(function(){return location.href="/"}):(t.ref("users/".concat(this.currentUserId,"/daily_reports")).push({date:this.date,title:this.title,content:this.content,createdAt:Date.now()}),this.date=o.a.dateToString(e),this.title="",this.content=""))}},mounted:function(){var t=this,e=r.a.database(),n=new Date;null!=this.currentUserId&&null!=this.dailyReportId?e.ref("users/".concat(this.currentUserId,"/daily_reports/").concat(this.dailyReportId)).once("value",function(e){var n=e.val();null!=n&&(t.date=n.date,t.title=n.title,t.content=n.content)}):this.date=o.a.dateToString(n)}}),c=(n(224),n(226),n(228),n(173),n(18)),component=Object(c.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"p-daily-report-form",on:{submit:function(e){return e.preventDefault(),t.post(e)}}},[n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.date,expression:"date"}],staticClass:"p-oneline-input p-daily-report-form__date-form",attrs:{type:"date",placeholder:"日付"},domProps:{value:t.date},on:{input:function(e){e.target.composing||(t.date=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"p-oneline-input p-daily-report-form__title-form",attrs:{type:"text",placeholder:"title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"u-mt-075",staticStyle:{"line-height":"1"}},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"p-daily-report-form__content-form",attrs:{name:"content"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}})]),t._v(" "),t._m(0)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"u-text-align-right u-mt-075"},[e("button",{staticClass:"p-submit",attrs:{type:"submit"}},[this._v("送信")])])}],!1,null,null,null);e.a=component.exports},342:function(t,e,n){"use strict";n.r(e);var r=n(147),o=n(152),l=n(233),c={props:["dailyReportId"],methods:{destroy:function(){r.a.database().ref("daily_reports/".concat(this.dailyReportId)).remove().then(function(){console.log("test")})}}},d=n(18),f=Object(d.a)(c,function(){var t=this.$createElement;return(this._self._c||t)("button",{on:{click:this.destroy}},[this._v("削除")])},[],!1,null,null,null).exports,m=n(153),h={components:{MainHeader:o.a,DailyReportForm:l.a,ButtonDeletingDailyReport:f,MainFooter:m.a},data:function(){return{currentUserId:null}},mounted:function(){var t=this;r.a.auth().onAuthStateChanged(function(e){t.currentUserId=null!=e?e.uid:null})}},v=Object(d.a)(h,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("main-header",{attrs:{currentUserId:t.currentUserId}}),t._v(" "),null!=t.currentUserId?n("div",{staticClass:"l-container"},[null!=t.currentUserId?n("daily-report-form",{attrs:{currentUserId:t.currentUserId,dailyReportId:t.$route.params.id}}):t._e(),t._v(" "),n("ButtonDeletingDailyReport",{attrs:{dailyReportId:t.$route.params.id}})],1):t._e(),t._v(" "),n("main-footer")],1)},[],!1,null,null,null);e.default=v.exports}}]);