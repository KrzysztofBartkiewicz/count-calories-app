(this["webpackJsonpcount-calories-app"]=this["webpackJsonpcount-calories-app"]||[]).push([[0],{101:function(e,t,n){e.exports=n(191)},106:function(e,t,n){},107:function(e,t,n){},109:function(e,t,n){},110:function(e,t,n){},191:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(95),o=n.n(r),s=(n(106),n(107),n(56)),i=n.n(s),l=n(96),u=n(97),d=n(98),v=n(99),m=n(100),p=(n(109),n(110),n(55)),h=function(e){Object(m.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={result:"---",devices:"devices"},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new p.BrowserQRCodeReader,e.next=3,t.listVideoInputDevices();case 3:return n=e.sent,this.setState({devices:n}),console.log(n),e.next=8,t.decodeOnceFromVideoDevice(n[0].deviceId,"video");case 8:a=e.sent,console.log(a),this.setState({result:a});case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return c.a.createElement("main",{className:"homepage"},c.a.createElement("video",{id:"video"}),c.a.createElement("span",null,this.state.devices[0].deviceId,c.a.createElement("br",null),this.state.devices[0].label),c.a.createElement("span",null,this.state.devices[1].deviceId,c.a.createElement("br",null),this.state.devices[0].label),c.a.createElement("span",null,this.state.result))}}]),n}(c.a.Component);var f=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[101,1,2]]]);
//# sourceMappingURL=main.a65e8e1a.chunk.js.map