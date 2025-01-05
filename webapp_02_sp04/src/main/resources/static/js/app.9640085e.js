(function(){"use strict";var e={4417:function(e,n,r){var t=r(5130),o=r(6768);const u={id:"app"};function i(e,n,r,t,i,s){const a=(0,o.g2)("UserView");return(0,o.uX)(),(0,o.CE)("div",u,[(0,o.bF)(a)])}var s=r(4232);function a(e,n,r,u,i,a){return(0,o.uX)(),(0,o.CE)("div",null,[n[4]||(n[4]=(0,o.Lk)("h1",null,"User List",-1)),(0,o.Lk)("ul",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(i.users,(e=>((0,o.uX)(),(0,o.CE)("li",{key:e.id},(0,s.v_)(e.name)+" - "+(0,s.v_)(e.email),1)))),128))]),(0,o.Lk)("form",{onSubmit:n[2]||(n[2]=(0,t.D$)(((...e)=>a.addUser&&a.addUser(...e)),["prevent"]))},[(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":n[0]||(n[0]=e=>i.newUser.name=e),placeholder:"Name",required:""},null,512),[[t.Jo,i.newUser.name]]),(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":n[1]||(n[1]=e=>i.newUser.email=e),placeholder:"Email",required:""},null,512),[[t.Jo,i.newUser.email]]),n[3]||(n[3]=(0,o.Lk)("button",{type:"submit"},"Add User",-1))],32)])}var l=r(4373);const c="http://localhost:8081/api/users";var f={getUsers(){return l.A.get(c)},createUser(e){return l.A.post(c,e)}},d={data(){return{users:[],newUser:{name:"",email:""}}},methods:{fetchUsers(){f.getUsers().then((e=>{this.users=e.data}))},addUser(){f.createUser(this.newUser).then((()=>{this.fetchUsers(),this.newUser={name:"",email:""}}))}},mounted(){this.fetchUsers()}},p=r(1241);const v=(0,p.A)(d,[["render",a]]);var h=v,m={name:"App",components:{UserView:h}};const b=(0,p.A)(m,[["render",i]]);var U=b;(0,t.Ef)(U).mount("#app")}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var u=n[t]={exports:{}};return e[t].call(u.exports,u,u.exports,r),u.exports}r.m=e,function(){var e=[];r.O=function(n,t,o,u){if(!t){var i=1/0;for(c=0;c<e.length;c++){t=e[c][0],o=e[c][1],u=e[c][2];for(var s=!0,a=0;a<t.length;a++)(!1&u||i>=u)&&Object.keys(r.O).every((function(e){return r.O[e](t[a])}))?t.splice(a--,1):(s=!1,u<i&&(i=u));if(s){e.splice(c--,1);var l=o();void 0!==l&&(n=l)}}return n}u=u||0;for(var c=e.length;c>0&&e[c-1][2]>u;c--)e[c]=e[c-1];e[c]=[t,o,u]}}(),function(){r.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(n,{a:n}),n}}(),function(){r.d=function(e,n){for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};r.O.j=function(n){return 0===e[n]};var n=function(n,t){var o,u,i=t[0],s=t[1],a=t[2],l=0;if(i.some((function(n){return 0!==e[n]}))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(a)var c=a(r)}for(n&&n(t);l<i.length;l++)u=i[l],r.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return r.O(c)},t=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var t=r.O(void 0,[504],(function(){return r(4417)}));t=r.O(t)})();
//# sourceMappingURL=app.9640085e.js.map