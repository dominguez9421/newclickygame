(this.webpackJsonpnewclickygame=this.webpackJsonpnewclickygame||[]).push([[0],{21:function(e){e.exports=JSON.parse('[{"id":1,"name":"dog1","image":"./imgs/dog1.jpg"},{"id":2,"name":"dog2","image":"./imgs/dog2.jpg"},{"id":3,"name":"dog3","image":"./imgs/dog3.jpg"},{"id":4,"name":"dog4","image":"./imgs/dog4.jpg"},{"id":5,"name":"dog5","image":"./imgs/dog5.jpg"},{"id":6,"name":"dog6","image":"./imgs/dog6.jpg"},{"id":7,"name":"dog7","image":"./imgs/dog7.jpg"},{"id":8,"name":"dog8","image":"./imgs/dog8.jpg"},{"id":9,"name":"dog9","image":"./imgs/dog9.jpg"},{"id":10,"name":"dog10","image":"./imgs/dog10.jpg"},{"id":11,"name":"dog11","image":"./imgs/dog11.jpg"},{"id":12,"name":"dog12","image":"./imgs/dog12.jpg"}]')},25:function(e,a,t){e.exports=t(38)},30:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(15),i=t.n(c),s=(t(30),t(16)),o=t(17),l=t(9),m=t(18),g=t(19),d=t(22),u=t(54),h=function(e){return r.a.createElement(u.a,e,e.children)},p=t(39),f=function(e){return r.a.createElement(p.a,null,e.children)},E=(t(34),function(e){var a=e.id,t=e.name,n=e.image,c=e.handlePicked;return(r.a.createElement("div",null,r.a.createElement("div",{className:"card",key:a,"data-id":a,name:t,style:{backgroundImage:"url(".concat(n,")")},onClick:c})))}),k=(t(35),function(e){return r.a.createElement("div",{className:"score"},e.type,": ",e.score)}),y=(t(36),function(e){return r.a.createElement("div",{className:"default",style:e.style},e.message?r.a.createElement("p",null,e.message):r.a.createElement("p",{className:"default-msg red"},"Click an image to begin!"))}),j=t(55),v=t(56),C=t(57),b=function(e){return r.a.createElement("div",null,r.a.createElement(j.a,Object.assign({position:"static"},e),r.a.createElement(v.a,null,r.a.createElement(C.a,{variant:"headline",color:"white",align:"center"},"DOG CLICKY GAME"))))},O=t(58),S=(t(37),function(e){return r.a.createElement(O.a,e,e.children)}),w=t(21),x=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(g.a)(a)).call.apply(e,[this].concat(r)))).state={characters:w,pickedChars:[],topScore:0,alertMessage:""},t.handlePicked=function(e){var a=e.target.attributes.getNamedItem("name").value;t.shuffleCharacters(),t.checkGuess(a,t.updateTopScore)},t.shuffleCharacters=function(){t.setState(t.state.characters=t.shuffleArray(t.state.characters))},t.shuffleArray=function(e){var a,t,n;for(n=e.length-1;n>0;n--)a=Math.floor(Math.random()*(n+1)),t=e[n],e[n]=e[a],e[a]=t;return e},t.checkGuess=function(e,a){var n=Object(s.a)({},t.state);n.pickedChars.includes(e)?(n.alertMessage='YOU ALREADY PICKED "'.concat(e.toUpperCase(),'"!'),n.pickedChars=[],t.setState(t.state=n)):(n.pickedChars.push(e),n.alertMessage="Good Choice !",t.setState(t.state=n)),a(n,t.alertWinner)},t.updateTopScore=function(e,a){e.pickedChars.length>e.topScore&&(e.topScore++,t.setState(t.state=e)),a(e)},t.alertWinner=function(e){12===e.pickedChars.length&&(e.alertMessage="CHAMPION!",e.pickedChars=[],t.setState(t.state=e))},t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(b,{style:{background:"#313133",marginBottom:"5px"}}),r.a.createElement(h,{container:!0,direction:"column",style:{margin:"0 auto",maxWidth:945}},r.a.createElement(h,{item:!0,lg:12},r.a.createElement(f,null,"GOOD CHOICE!"===this.state.alertMessage?r.a.createElement(y,{message:this.state.alertMessage,style:{color:"green"}}):r.a.createElement(y,{message:this.state.alertMessage,style:{color:"red"}}))),r.a.createElement(h,{container:!0,justify:"space-between"},r.a.createElement(h,{item:!0,lg:6,md:6,sm:12,xs:12},r.a.createElement(f,null,r.a.createElement(k,{type:"Score",score:this.state.pickedChars.length}))),r.a.createElement(h,{item:!0,lg:6,md:6,sm:12,xs:12},r.a.createElement(f,null,r.a.createElement(k,{type:"Top Score",score:this.state.topScore}))))),r.a.createElement(h,{container:!0,spacing:24,justify:"center",style:{maxWidth:945,margin:"0 auto"}},this.state.characters.map((function(a){return r.a.createElement(h,{item:!0,lg:3,md:3,sm:4,xs:6},r.a.createElement(E,{id:a.id,name:a.name,image:a.image,key:a.id,handlePicked:e.handlePicked}))}))),r.a.createElement(S,{style:{background:"#313133",marginTop:"17.5px",paddingTop:"15px",borderTop:"2.5px solid slategray"}},r.a.createElement("a",{href:"google.com",target:"_blank",className:"link",alt:"clicky-game-github-link"},r.a.createElement("i",{className:"fa fa-github fa-2x"}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.7ba6fedc.chunk.js.map