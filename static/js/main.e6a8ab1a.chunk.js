(this.webpackJsonp128_dice=this.webpackJsonp128_dice||[]).push([[0],[,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var i=n(1),c=n.n(i),s=n(8),a=n.n(s),o=(n(13),n(14),n(2)),l=n(3),r=n(4),d=n(6),u=n(5),h=(n(15),n(0)),j=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props.faces,e="fas fa-dice-".concat(t[this.props.current]);return Object(h.jsx)("div",{className:this.props.addClass,children:Object(h.jsx)("i",{className:e})})}}]),n}(i.Component);j.defaultProps={faces:["one","two","three","four","five","six"]};var b=j,f=(n(17),function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(t){var i;return Object(o.a)(this,n),(i=e.call(this,t)).state={dice1:1,dice2:1,isRolling:!1},i.roll=i.roll.bind(Object(r.a)(i)),i}return Object(l.a)(n,[{key:"roll",value:function(){var t=this,e=Math.floor(6*Math.random()),n=Math.floor(6*Math.random());this.setState({isRolling:!0}),this.setState({dice1:e,dice2:n}),setTimeout((function(){t.setState({isRolling:!1})}),1e3)}},{key:"render",value:function(){var t="Dice ".concat(this.state.isRolling?"Dice-animation":""),e="RollDice-btn ".concat(this.state.isRolling?"RollDice-btn-blocked":"");return Object(h.jsx)("div",{className:"RollDice",children:Object(h.jsxs)("div",{className:"RollDice-container",children:[Object(h.jsxs)("div",{className:"RollDice-display",children:[Object(h.jsx)(b,{current:this.state.dice1,addClass:t}),Object(h.jsx)(b,{current:this.state.dice2,addClass:t})]}),Object(h.jsx)("button",{className:e,onClick:this.roll,children:this.state.isRolling?"Rolling...":"Roll dice"})]})})}}]),n}(i.Component));var O=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(f,{})})},p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,i=e.getFID,c=e.getFCP,s=e.getLCP,a=e.getTTFB;n(t),i(t),c(t),s(t),a(t)}))};a.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(O,{})}),document.getElementById("root")),p()}],[[18,1,2]]]);
//# sourceMappingURL=main.e6a8ab1a.chunk.js.map