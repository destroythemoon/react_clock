(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,c){},14:function(t,e,c){"use strict";c.r(e);var n=c(7),o=c.n(n),a=c(2),s=c(3),i=c(5),l=c(4),r=c(1),m=(c(12),c(0)),u=function(t){Object(i.a)(c,t);var e=Object(l.a)(c);function c(){var t;Object(a.a)(this,c);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(t=e.call.apply(e,[this].concat(o))).state={time:(new Date).toLocaleTimeString(),timerId:void 0},t}return Object(s.a)(c,[{key:"componentDidMount",value:function(){var t=this,e=setInterval((function(){var e=t.state.time;t.setState({time:(new Date).toLocaleTimeString()}),console.log(e)}),1e3);this.setState({timerId:e})}},{key:"componentDidUpdate",value:function(t){this.props.clockName!==t.clockName&&console.log("The Clock was renamed from ".concat(t.clockName," to ").concat(this.props.clockName))}},{key:"componentWillUnmount",value:function(){this.state.timerId&&clearInterval(this.state.timerId)}},{key:"render",value:function(){return Object(m.jsx)(m.Fragment,{children:this.state.time})}}]),c}(r.Component);function h(t){for(var e="",c="abcdefghijklmnopqrstuvwxyz",n=c.length,o=0;o<t;o++)e+=c.charAt(Math.floor(Math.random()*n));return e}var b=function(t){Object(i.a)(c,t);var e=Object(l.a)(c);function c(){var t;Object(a.a)(this,c);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(t=e.call.apply(e,[this].concat(o))).state={isClockVisible:!0,clockName:"a clock"},t.showClock=function(){t.setState({isClockVisible:!0})},t.hideClock=function(){t.setState({isClockVisible:!1})},t.setRandomName=function(){t.setState({clockName:h(10)})},t}return Object(s.a)(c,[{key:"render",value:function(){var t=this.state,e=t.clockName,c=t.isClockVisible;return Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)("div",{className:"allClock",children:[Object(m.jsxs)("div",{className:"clock",children:[Object(m.jsx)("h1",{className:"clock__name",children:'React clock "'.concat(e,'"')}),Object(m.jsxs)("p",{children:["Current time:"," ",c&&Object(m.jsx)(u,{clockName:e})]})]}),Object(m.jsxs)("div",{className:"buttons",children:[Object(m.jsx)("button",{className:"button",type:"button",onClick:this.hideClock,children:"Hide Clock\ud83d\udc80"}),Object(m.jsx)("button",{className:"button",type:"button",onClick:this.setRandomName,children:"Set random name"}),Object(m.jsx)("button",{className:"button",type:"button",onClick:this.showClock,children:"Show Clock\ud83d\udc80"})]})]})})}}]),c}(r.Component);o.a.render(Object(m.jsx)(b,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.1507005f.chunk.js.map