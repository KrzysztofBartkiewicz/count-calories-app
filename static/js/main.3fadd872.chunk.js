(this["webpackJsonpcount-calories-app"]=this["webpackJsonpcount-calories-app"]||[]).push([[0],{101:function(e,t,n){e.exports=n(191)},106:function(e,t,n){},107:function(e,t,n){},109:function(e,t,n){},110:function(e,t,n){},191:function(e,t,n){"use strict";n.r(t);var a=n(5),o=n.n(a),r=n(95),c=n.n(r),i=(n(106),n(107),n(56)),s=n.n(i),u=n(96),l=n(97),d=n(98),v=n(99),m=n(100),p=(n(109),n(110),n(55)),h=function(e){Object(m.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={result:"---",devices:"devices"},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(s.a.mark((function e(){var t,n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new p.BrowserQRCodeReader,e.next=3,t.listVideoInputDevices();case 3:return n=e.sent,this.setState({devices:n}),e.next=7,t.decodeOnceFromVideoDevice(n[0].deviceId,"video");case 7:a=e.sent,console.log(a),this.setState({result:a});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return o.a.createElement("main",{className:"homepage"},o.a.createElement("video",{id:"video"}),o.a.createElement("span",null,this.state.devices),o.a.createElement("span",null,this.state.result))}}]),n}(o.a.Component);var f=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[101,1,2]]]);
//# sourceMappingURL=main.3fadd872.chunk.js.map