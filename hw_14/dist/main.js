(()=>{var e={961:()=>{const e=15.678,t=123.965,n=90.2345,r=Math.max(e,t,n);console.log(r);const o=Math.min(e,t,n);console.log(o);const l=229.8775;console.log(l);const a=Math.floor(e)+Math.floor(t)+Math.floor(n);console.log(a);const s=100*Math.ceil(a/100);console.log(s),console.log(!1),console.log(270.1225);const c=(l/3).toFixed(2);console.log(c);const u=50*Math.random();console.log(u);const i=(l-u).toFixed(2);console.log(i);const d=i/2;console.log(d)},312:()=>{const e=document.getElementById("biggest-number-form"),t=document.getElementById("biggest-number-result"),n=document.getElementById("biggest-number-error");e.addEventListener("submit",(e=>{e.preventDefault();const o=e.target[0].value;t.innerHTML="",n.innerHTML="",+o>=0?t.innerHTML=r(o):n.innerHTML="The number must be greater than null"}));const r=e=>Math.max(...e.split("")),o=document.getElementById("first-letter-capitalize-form"),l=document.getElementById("first-letter-capitalize-result");o.addEventListener("submit",(e=>{e.preventDefault();const t=e.target[0].value;l.innerHTML=a(t)}));const a=e=>e[0].toUpperCase()+e.substring(1).toLowerCase(),s=document.getElementById("calculating-salary-difference-form"),c=document.getElementById("calculating-salary-difference-result"),u=document.getElementById("calculating-salary-difference-error");s.addEventListener("submit",(e=>{e.preventDefault();const t=e.target[0].value,n=e.target[1].value;c.innerHTML="",u.innerHTML="",t>0&&n>0?c.innerHTML=i(t,n):u.innerHTML="The number must be greater than null"}));const i=(e,t)=>e-e/100*t,d=document.getElementById("return-random-number-form"),m=document.getElementById("return-random-number-result"),g=document.getElementById("return-random-number-error");d.addEventListener("submit",(e=>{e.preventDefault();const t=+e.target[0].value,n=+e.target[1].value;m.innerHTML=" ",g.innerHTML=" ",t<n?m.innerHTML=f(t,n):g.innerHTML="the first number mast to be less then second"}));const f=(e,t)=>Math.round(Math.random()*(t-e)+e),h=document.getElementById("calculate-letter-form"),M=document.getElementById("calculate-letter-result"),p=document.getElementById("calculate-letter-error");h.addEventListener("submit",(e=>{e.preventDefault();const t=e.target[0].value;M.innerHTML="",p.innerHTML="",M.innerHTML=t.split("a").length-1}));const v=document.getElementById("calculate-degree-form"),y=document.getElementById("calculate-degree-result");v.addEventListener("submit",(e=>{e.preventDefault();const t=e.target[0].value,n=e.target[1].value;M.innerHTML="",p.innerHTML="",y.innerHTML=L(t,n)}));const L=(e,t)=>{let n=e;if(t>0)for(let r=0;r<t-1;r++)n*=e;else if(0===t)n=1;else{for(let r=0;r<-1*t-1;r++)n*=e;n=1/n}return n},E=document.getElementById("generates-random-pass-form"),T=document.getElementById("generates-random-pass-result"),b=document.getElementById("generates-random-pass-error");E.addEventListener("submit",(e=>{e.preventDefault();const t=e.target[0].value;T.innerHTML="",b.innerHTML="",T.innerHTML=H(t)}));const H=()=>Math.floor(1e3+9e7*Math.random()),I=document.getElementById("replace-character-form"),B=document.getElementById("replace-character-result"),x=document.getElementById("replace-character-error");I.addEventListener("submit",(e=>{e.preventDefault();const t=e.target[0].value;B.innerHTML="",x.innerHTML="",B.innerHTML=D(t)}));const D=e=>newString=e.replace(/a/gi,""),S=document.getElementById("polindrom-seeker-form"),j=document.getElementById("polindrom-seek-result"),k=document.getElementById("polindrom-seek-error");S.addEventListener("submit",(e=>{e.preventDefault();const t=e.target[0].value;j.innerHTML="",k.innerHTML="",j.innerHTML=w(t)}));const w=e=>{const t=e.toLowerCase().split(" ").join("");return t===t.split("").reverse().join("")}},445:()=>{const e=["Олександр","Ігор","Олена","Іра","Олексій","Світлана"],t=e=>[[e[0],e[2]],[e[1],e[3]],[e[4],e[5]]];console.log(((e,n)=>{const r=[...t(e)],o=[];for(let e=0;e<r.length;e++)o.push([r[e].join(" i "),n[e]]);return o})(e,["Диференційне рівняння","Теорія автоматів","Алгоритми і структури даних"])),console.log(((e,t)=>{const n=[];for(let r=0;r<t.length;r++)n.push([t[r],e[r]]);return n})([4,5,5,3,4,5],e)),console.log((()=>{const n=[...t(e)],r=[];for(let e=0;e<n.length;e++)r.push([n[e],Math.round(4*Math.random()+1)]);return r})())},760:()=>{console.log(function(e,t,n){let r=[];for(i=0;i<15;i++)r.push(Math.floor(99*Math.random()+1));return r}());let e=[1,-1,2,-2,3,0].filter((function(e){return e>0}));console.log(e.length);let t=[1,3,4,6,8,3,9,10,22].filter((function(e){return e%2==1}));console.log(t);let n=[22,20,25,6,8,55,9,10,22].filter((function(e){return e%5==0}));console.log(n);const r=[6,2,55,11,78,2,55,77,57,87,23,2,56,3,2,2.2,2.1].filter((e=>Number.isInteger(e)));let o=r.reduce((function(e,t){return e+t}));console.log(o/r.length);const l="Are you fucking kidding?".split([" "]);console.log((e=>e.join(" ").replace("fuck","****").replace("shit","****"))(l))},764:()=>{const e={tax:.195,middleSalary:1789,vacancies:11476},t={tax:.25,middleSalary:1586,vacancies:3921},n={tax:.15,middleSalary:1509,vacancies:1114};function r(){const e=this.middleSalary/100*this.tax;return console.log(e),e}function o(){const e=this.tax*this.middleSalary;return console.log(e),e}function l(){const e=this.tax*this.middleSalary*this.vacancies;return console.log(e),e}function a(){const e=Math.round(500*Math.random()+1500);return console.log({salary:e,taxes:this.tax,profit:e-this.tax})}r.call(e),r.call(t),r.call(n),o.call(e),o.call(t),o.call(n),l.call(e),l.call(t),l.call(n),setInterval((()=>a.call(e)),1e4)}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var l=t[r]={exports:{}};return e[r](l,l.exports,n),l.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";n(961),n(445),n(760),n(764),n(312)})()})();