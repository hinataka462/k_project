(function(){"use strict";var e={6600:function(e,t,n){var r=n(5130),o=n(6768);const a={id:"app"};function s(e,t,n,r,s,u){const l=(0,o.g2)("ItemView");return(0,o.uX)(),(0,o.CE)("div",a,[(0,o.bF)(l)])}var u=n(4232);const l={class:"container"},i={key:0,class:"message"},c={key:"newestItem",class:"newest-item-card"},m={class:"item-list"},d=["onClick"],p={key:0,class:"popup"},f={class:"popup-content"};function v(e,t,n,a,s,v){return(0,o.uX)(),(0,o.CE)("div",l,[t[7]||(t[7]=(0,o.Lk)("h1",{class:"title"},"わらしべ長者",-1)),(0,o.bF)(r.eB,{name:"fade"},{default:(0,o.k6)((()=>[s.serverMessage?((0,o.uX)(),(0,o.CE)("div",i,(0,u.v_)(s.serverMessage),1)):(0,o.Q3)("",!0)])),_:1}),(0,o.bF)(r.eB,{name:"highlight"},{default:(0,o.k6)((()=>[s.newestItem?((0,o.uX)(),(0,o.CE)("div",c,[t[5]||(t[5]=(0,o.Lk)("h2",null,"現在のアイテム",-1)),(0,o.Lk)("p",null,[(0,o.eW)((0,u.v_)(s.newestItem.name)+" - "+(0,u.v_)(s.newestItem.amount)+" ",1),(0,o.Lk)("span",null," ("+(0,u.v_)(v.formatDate(s.newestItem.createdAt))+") ",1)])])):(0,o.Q3)("",!0)])),_:1}),(0,o.Lk)("form",{onSubmit:t[3]||(t[3]=(0,r.D$)(((...e)=>v.addItem&&v.addItem(...e)),["prevent"])),class:"form"},[(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>s.newItem.name=e),placeholder:"名前を書いてね",class:"input",required:""},null,512),[[r.Jo,s.newItem.name]]),(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>s.newItem.amount=e),placeholder:"金額を書いてね",class:"input",required:"",onInput:t[2]||(t[2]=(...e)=>v.validateNumericInput&&v.validateNumericInput(...e))},null,544),[[r.Jo,s.newItem.amount]]),t[6]||(t[6]=(0,o.Lk)("button",{type:"submit",class:"button"},"交換する",-1))],32),t[8]||(t[8]=(0,o.Lk)("h4",null,"金額は現在のアイテムの±10%以内にしてね",-1)),t[9]||(t[9]=(0,o.Lk)("h2",{class:"subtitle"},"いままで交換されたもの",-1)),(0,o.Lk)("ul",m,[(0,o.bF)(r.F,{name:"fade",tag:"div"},{default:(0,o.k6)((()=>[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(v.reversedItems,(e=>((0,o.uX)(),(0,o.CE)("li",{key:e.id,class:"item-card"},[(0,o.Lk)("span",null,(0,u.v_)(e.name)+" - "+(0,u.v_)(e.amount),1),(0,o.Lk)("span",null," ("+(0,u.v_)(v.formatDate(e.createdAt))+") ",1),(0,o.Lk)("button",{onClick:t=>v.deleteItem(e.id),class:"delete-button"},"削除",8,d)])))),128))])),_:1})]),s.valueError?((0,o.uX)(),(0,o.CE)("div",p,[(0,o.Lk)("div",f,[(0,o.Lk)("span",{class:"popup-close",onClick:t[4]||(t[4]=(...e)=>v.closePopup&&v.closePopup(...e))},"×"),(0,o.Lk)("p",null,(0,u.v_)(s.valueError),1)])])):(0,o.Q3)("",!0)])}var h=n(4373);const I="http://localhost:8081/api/items";var g={getItems(){return h.A.get(I)},async createItem(e){try{return await h.A.post(I,e)}catch(t){throw console.error("Error creating item:",t),t}},async deleteItem(e){try{return await h.A.delete(`${I}/${e}`)}catch(t){throw console.error("Error deleting item:",t),t}}},w={data(){return{Items:[],newItem:{name:"",amount:""},newestItem:null,serverMessage:null,valueError:null}},computed:{reversedItems(){return[...this.Items].reverse()}},methods:{fetchItems(){g.getItems().then((e=>{this.Items=e.data,this.newestItem=this.Items[this.Items.length-1]}))},addItem(){const e=parseFloat(this.newestItem?.amount||"0"),t=10,n=1.1*e,r=.9*e,o=parseFloat(this.newItem.amount||"0");o<t?this.valueError="金額は10円以上にしてね":o>n||o<r?this.valueError="金額は現在のアイテムの±10%以内にしてね":(this.valueError=null,g.createItem(this.newItem).then((e=>{this.serverMessage=e.data,this.fetchItems(),this.newItem={name:"",amount:""},setTimeout((()=>{this.serverMessage=null}),3e3)})))},deleteItem(e){g.deleteItem(e).then((e=>{this.serverMessage=e.data,this.fetchItems(),setTimeout((()=>{this.serverMessage=null}),3e3)})).catch((e=>{console.error("アイテム削除エラー:",e),this.serverMessage="アイテム削除に失敗しました"}))},validateNumericInput(e){const t=e.target.value,n=t.replace(/\D/g,"");this.newItem.amount=n},formatDate(e){if(!e)return"N/A";const t=new Date(e.replace(" ","T"));return t.toLocaleString()},closePopup(){this.valueError=null}},mounted(){this.fetchItems()}},k=n(1241);const b=(0,k.A)(w,[["render",v],["__scopeId","data-v-343fa148"]]);var y=b,E={name:"App",components:{ItemView:y}};const L=(0,k.A)(E,[["render",s]]);var _=L;(0,r.Ef)(_).mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var s=1/0;for(c=0;c<e.length;c++){r=e[c][0],o=e[c][1],a=e[c][2];for(var u=!0,l=0;l<r.length;l++)(!1&a||s>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(u=!1,a<s&&(s=a));if(u){e.splice(c--,1);var i=o();void 0!==i&&(t=i)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,s=r[0],u=r[1],l=r[2],i=0;if(s.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(l)var c=l(n)}for(t&&t(r);i<s.length;i++)a=s[i],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},r=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(6600)}));r=n.O(r)})();
//# sourceMappingURL=app.203ee438.js.map