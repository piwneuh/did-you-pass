import{r as e,R as t,a as l}from"./vendor.ef3cb9c8.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const l of e)if("childList"===l.type)for(const e of l.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var o="/did-you-pass/assets/ivan.23d933aa.png";function n(){const[l,n]=e.exports.useState(8);localStorage.setItem("count",l);const a=localStorage.getItem("count");return console.log(a),0==l?t.createElement("div",{className:"App"},t.createElement("header",{className:"App-header"},t.createElement("img",{src:o,className:"App-logo",alt:"logo"}),t.createElement("audio",{src:"https://assets.codepen.io/1256430/whistle.mp3",id:"sound",preload:"auto",hidden:!0}),t.createElement("p",null,"Hello Ivan !"),t.createElement("p",null,"Ladno si diplomirao "),t.createElement("p",null,"Congratujesns"))):1==l?t.createElement("div",{className:"App"},t.createElement("header",{className:"App-header"},t.createElement("img",{src:o,className:"App-logo",alt:"logo"}),t.createElement("p",null,"Hello Ivan !"),t.createElement("p",null,'Imas jos "samo": ',l," ispit "),t.createElement("p",null,t.createElement("button",{type:"button",className:"btn","fire:any":!0,onClick:()=>n(l-1)},"Ladno si polozio ispit")))):t.createElement("div",{className:"App"},t.createElement("header",{className:"App-header"},t.createElement("img",{src:o,className:"App-logo",alt:"logo"}),t.createElement("p",null,"Hello Ivan !"),t.createElement("p",null,'Imas jos "samo": ',l," ispita "),t.createElement("p",null,t.createElement("button",{type:"button",className:"btn",onClick:()=>n(l-1)},"Ladno si polozio ispit"))))}l.render(t.createElement(t.StrictMode,null,t.createElement(n,null)),document.getElementById("root"));