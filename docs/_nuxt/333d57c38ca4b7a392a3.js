(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{128:function(t,e,n){"use strict";var o=n(139),r=n.n(o),l={apiKey:"AIzaSyDgw7znG2kgpYAH6UPXF1k72zjpnYV7zRg",authDomain:"nippohub-daily-prod.firebaseapp.com",databaseURL:"https://nippohub-daily-prod.firebaseio.com",projectId:"nippohub-daily-prod",storageBucket:"",messagingSenderId:"729594218139"};0===r.a.apps.length&&r.a.initializeApp(l),e.a=r.a},164:function(t,e,n){"use strict";var o=n(128),r={props:["dailyReportId"],data:function(){return{title:"",content:""}},mounted:function(){var t=this;o.a.database().ref("/daily_reports/".concat(this.dailyReportId)).once("value",function(e){var n=e.val();null!=n&&(t.title="".concat(n.date," ").concat(n.title),t.content=n.content)})}},l=n(15),component=Object(l.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("article",[e("h2",[this._v(this._s(this.title))]),this._v(" "),e("p",[this._v(this._s(this.content))])])},[],!1,null,null,null);e.a=component.exports},198:function(t,e,n){"use strict";n.r(e);n(128);var o={components:{DailyReportDetail:n(164).a}},r=n(15),component=Object(r.a)(o,function(){var t=this.$createElement;return(this._self._c||t)("DailyReportDetail",{attrs:{"daily-report-id":this.$route.params.id}})},[],!1,null,null,null);e.default=component.exports}}]);