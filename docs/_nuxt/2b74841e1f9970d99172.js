(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{128:function(t,e,n){"use strict";var r=n(135),o=n.n(r),l={apiKey:"AIzaSyDgw7znG2kgpYAH6UPXF1k72zjpnYV7zRg",authDomain:"nippohub-daily-prod.firebaseapp.com",databaseURL:"https://nippohub-daily-prod.firebaseio.com",projectId:"nippohub-daily-prod",storageBucket:"",messagingSenderId:"729594218139"};0===o.a.apps.length&&o.a.initializeApp(l),e.a=o.a},129:function(t,e,n){var content=n(133);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("6add6edb",content,!0,{sourceMap:!1})},131:function(t,e,n){var content=n(142);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("2bfdbba2",content,!0,{sourceMap:!1})},132:function(t,e,n){"use strict";var r=n(129);n.n(r).a},133:function(t,e,n){(t.exports=n(35)(!1)).push([t.i,".p-header{padding:6px 0;box-shadow:0 -2px 20px 3px #000}.p-header__container{display:flex;justify-content:space-between;align-items:center;width:640px;margin:0 auto}.p-page-title{margin:0;font-size:24px}.p-auth-links{list-style-type:none;padding:0;margin:0}.p-auth-links__item{display:inline-block}.p-auth-links__item:nth-of-type(n+2){margin-left:10px}",""])},134:function(t,e,n){"use strict";var r=n(128),o={props:["currentUserId"],methods:{signOut:function(){r.a.auth().signOut()}}},l=(n(132),n(15)),component=Object(l.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"p-header"},[n("div",{staticClass:"p-header__container"},[n("h1",{staticClass:"p-page-title"},[t._v("NippoHub")]),t._v(" "),n("nav",[n("ul",{staticClass:"p-auth-links"},[null!==t.currentUserId?n("li",{staticClass:"p-auth-links__item",on:{click:t.signOut}},[t._v("Sign out")]):[n("li",{staticClass:"p-auth-links__item"},[n("nuxt-link",{attrs:{to:"/sign_in"}},[t._v("Sign in")])],1),t._v(" "),n("li",{staticClass:"p-auth-links__item"},[n("nuxt-link",{attrs:{to:"/sign_up"}},[t._v("Sign up")])],1)]],2)])])])},[],!1,null,null,null);e.a=component.exports},141:function(t,e,n){"use strict";var r=n(131);n.n(r).a},142:function(t,e,n){(t.exports=n(35)(!1)).push([t.i,".u-mt-075{margin-top:.75em}.u-text-align-right{text-align:right}",""])},143:function(t,e,n){var content=n(155);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("9bfcc092",content,!0,{sourceMap:!1})},144:function(t,e,n){var content=n(157);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("24bfbbfc",content,!0,{sourceMap:!1})},145:function(t,e,n){var content=n(159);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("da02b386",content,!0,{sourceMap:!1})},154:function(t,e,n){"use strict";var r=n(143);n.n(r).a},155:function(t,e,n){(t.exports=n(35)(!1)).push([t.i,".p-oneline-input{height:2.5em;padding:.25em .5em;outline:none;border:.1em solid #ddd;border-radius:.3em;box-sizing:border-box}",""])},156:function(t,e,n){"use strict";var r=n(144);n.n(r).a},157:function(t,e,n){(t.exports=n(35)(!1)).push([t.i,".p-btn,.p-submit{background-color:#fff;border:.1em solid #ddd;border-radius:.3em;padding:.25em 2em}",""])},158:function(t,e,n){"use strict";var r=n(145);n.n(r).a},159:function(t,e,n){(t.exports=n(35)(!1)).push([t.i,".p-daily-report-form__date-form{width:20%}.p-daily-report-form__title-form{margin-left:calc(3% - .5em);width:77%}.p-daily-report-form__content-form{width:100%;resize:vertical;box-sizing:border-box;border:.1em solid #ddd;border-radius:.3em;padding:.5em;height:10em;outline:none}",""])},163:function(t,e,n){"use strict";var r=n(128);n(80),n(81);var o={props:["currentUserId","dailyReportId"],data:function(){return{date:"",title:"",content:""}},methods:{post:function(){var t=r.a.database();null!=this.currentUserId&&(null!=this.dailyReportId?t.ref("users/".concat(this.currentUserId,"/daily_reports/").concat(this.dailyReportId)).update({date:this.date,title:this.title,content:this.content}):(t.ref("users/".concat(this.currentUserId,"/daily_reports")).push({date:this.date,title:this.title,content:this.content,createdAt:Date.now()}),this.date=null,this.title="",this.content=""))}},mounted:function(){var t=this,e=r.a.database();null!=this.currentUserId&&null!=this.dailyReportId&&e.ref("users/".concat(this.currentUserId,"/daily_reports/").concat(this.dailyReportId)).once("value",function(e){var n=e.val();if(null!=n){var r=new Date(n.createdAt);"".concat(r.getFullYear(),"-").concat(r.getMonth(),"-").concat(r.getDate());t.date=n.date,t.title=n.title,t.content=n.content}})}},l=(n(154),n(156),n(158),n(141),n(15)),component=Object(l.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"p-daily-report-form",on:{submit:function(e){return e.preventDefault(),t.post(e)}}},[n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.date,expression:"date"}],staticClass:"p-oneline-input p-daily-report-form__date-form",attrs:{type:"date",placeholder:"日付"},domProps:{value:t.date},on:{input:function(e){e.target.composing||(t.date=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"p-oneline-input p-daily-report-form__title-form",attrs:{type:"text",placeholder:"title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"u-mt-075",staticStyle:{"line-height":"1"}},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"p-daily-report-form__content-form",attrs:{name:"content"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}})]),t._v(" "),t._m(0)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"u-text-align-right u-mt-075"},[e("button",{staticClass:"p-submit",attrs:{type:"submit"}},[this._v("送信")])])}],!1,null,null,null);e.a=component.exports},201:function(t,e,n){"use strict";n.r(e);var r=n(128),o=n(134),l=n(163),c={props:["dailyReportId"],methods:{destroy:function(){r.a.database().ref("daily_reports/".concat(this.dailyReportId)).remove().then(function(){console.log("test")})}}},d=n(15),f=Object(d.a)(c,function(){var t=this.$createElement;return(this._self._c||t)("button",{on:{click:this.destroy}},[this._v("削除")])},[],!1,null,null,null).exports,m={components:{MainHeader:o.a,DailyReportForm:l.a,ButtonDeletingDailyReport:f},data:function(){return{currentUserId:null}},mounted:function(){var t=this;r.a.auth().onAuthStateChanged(function(e){t.currentUserId=null!=e?e.uid:null})}},h=Object(d.a)(m,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("main-header",{attrs:{currentUserId:t.currentUserId}}),t._v(" "),null!=t.currentUserId?n("div",{staticClass:"l-container"},[null!=t.currentUserId?n("daily-report-form",{attrs:{currentUserId:t.currentUserId,dailyReportId:t.$route.params.id}}):t._e(),t._v(" "),n("ButtonDeletingDailyReport",{attrs:{dailyReportId:t.$route.params.id}})],1):t._e()],1)},[],!1,null,null,null);e.default=h.exports}}]);