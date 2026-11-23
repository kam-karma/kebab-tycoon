(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=new Set([`helper`,`fridge`,`window`,`chicken`,`counter`,`fryer`,`cashier`,`tables`]);function t(t){return t.type===`branchOpened`?{icon:`branch`,star:t.branch+1}:t.type===`upgrade`&&t.level===1&&e.has(t.padId)?{icon:t.padId}:null}function n(e){return e.type===`upgrade`||e.type===`missionDone`||e.type===`branchOpened`}var r={maxDt:.1,bounds:{minX:-3.2,maxX:3.2,minZ:-1.3,maxZ:7.6},player:{start:{x:0,z:1.5},speed:4.4,startCarry:4,moveThreshold:.05,spitCarrySpeed:.65},spit:{pos:{x:-3.45,z:3.55},radius:1.55,obstacleRadius:.6,frontClear:1.4,baseInterval:.45,intervalFactor:.78,size:40,startCooked:8,cookedMax:8,cookRate:1.5,cookRatePerLevel:.5},chicken:{pos:{x:-3.45,z:5.3},cookFactor:1.6,chance:.45,perSale:4,demandFactor:.75},fryer:{pos:{x:-3.45,z:7.05},radius:1.55,obstacleRadius:.6,batch:6,cookTime:1.2,pickInterval:.2,chance:.5,bonus:3},courier:{afterServed:15,every:35,min:3,max:5,payFactor:1.5,patience:30,takeInterval:.3,speed:3.4,spot:{x:2.3,z:-2.9},spawn:{x:6.5,z:-10},exit:{x:6.5,z:-10}},tables:{spots:[{x:-2.9,z:-7.4},{x:2.9,z:-7.4},{x:5.6,z:-5.2},{x:-4.8,z:-7.4}],perLevel:2,seatOffset:{x:0,z:.95},every:9,patience:45,eatTime:7,clearTime:1.6,portions:2,bonus:4,iskender:{portions:3,bonus:8,chance:.4,fromBranch:1},tea:{chance:.5,time:4,coins:2},takeInterval:.3,waiter:{speed:3.2,home:{x:-2.3,z:-4.3},reach:.95}},shopSign:{word:`KEBAB`,maxLength:10},style:{floor:[{colour:null,cost:0},{colour:15914906,cost:250},{colour:15905732,cost:700},{colour:11126002,cost:1600}],awning:[{colour:14826299,cost:0},{colour:3108816,cost:250},{colour:3120213,cost:700},{colour:9064400,cost:1600}],sign:[{colour:14826299,cost:0},{colour:3108816,cost:250},{colour:3120213,cost:700},{colour:2827296,cost:1600}],coat:[{colour:14826299,cost:0},{colour:3108816,cost:250},{colour:3120213,cost:700},{colour:2827296,cost:1600}]},day:{length:160,rush:[{from:.28,to:.42},{from:.7,to:.86}],rushPace:.6,rushAfterServed:30,districts:4},bread:{chance:.3,bonus:1,afterCounterLevel:1},cashier:{spot:{x:-2.75,z:-1.25},delay:1.2,interval:.12},supply:{lavash:{capacity:60,orderAt:15},garnish:{capacity:40,orderAt:8},carrySpeed:.8},coldStore:{pos:{x:-3,z:.2},radius:1.2},fridge:{pos:{x:-3.45,z:1.8},radius:1.55,obstacleRadius:.6,interval:.3},counter:{pos:{x:0,z:-1.9},reach:1.6,columns:8,columnsPerLevel:2,capacity:16,sharedCapacity:8,drinkCapacity:8,transferInterval:.07},queue:{head:{x:-.9,z:-3},laneGap:1.8,spacing:.95,maxLength:6,initialWaiting:3,spawn:{x:2.6,z:-10},exit:{x:-5.4,z:-5},spawnInterval:1,speed:2.6,serveTime:.35,arriveEpsilon:.05,looks:5,substituteAfter:4,patience:22,tipWithin:.5,drinkChance:.6,salgamChance:.4,vipChance:.08,vipFactor:3,vipAfterServed:10},coins:{perSale:3,drinkBonus:2,salgamBonus:3,tip:1,baseValue:2,magnetRadius:1.15,settleTime:.4,dropArea:{minX:-1.4,maxX:1.4,minZ:-1,maxZ:.2}},carry:{base:4,perLevel:2},helper:{speed:3,baseCarry:2,carryPerLevel:1,sliceFactor:1.5,transferFactor:2,spitSpot:{x:-2.05,z:3.55},counterSpot:{x:-1.5,z:-1.3},swapLevel:2,storeSpot:{x:-2,z:.6}},pads:{radius:.5,tickInterval:.04,ticksToFill:30,defs:{carry:{pos:{x:2.4,z:-.6},costs:[130,450,850,2200,2700]},slice:{pos:{x:2.4,z:.4},costs:[160,750,1600,2450]},price:{pos:{x:2.4,z:1.4},costs:[180,800,1650,2500]},helper:{pos:{x:2.4,z:2.4},costs:[480,1400,2300]},counter:{pos:{x:2.4,z:3.4},costs:[1350,2350]},cashier:{pos:{x:2.4,z:4.4},costs:[2150]},window:{pos:{x:2.4,z:5.4},costs:[1450]},tables:{pos:{x:2.4,z:5.4},costs:[2100,2600]},branch:{pos:{x:2.4,z:6.4},costs:[3250]},fridge:{pos:{x:-1.9,z:1.8},costs:[700]},chicken:{pos:{x:-1.9,z:5.3},costs:[1100]},fryer:{pos:{x:-1.9,z:7.05},costs:[1550]}}},boost:{duration:45,multiplier:2},branch:{incomeFactor:2,costFactor:2.1,max:30},missions:{serveBase:10,serveStep:5,serveMax:60,serveRewardPerSale:3,earnBase:60,earnStep:40,earnMax:600,earnRewardShare:.4,maxIndex:1e6},ads:{saveEverySeconds:5},save:{version:1,maxCount:2**53-1}},i=[`carry`,`slice`,`price`,`helper`,`fridge`,`window`,`chicken`,`counter`,`fryer`,`cashier`,`tables`,`branch`],a={tables:`window`},o=[`floor`,`awning`,`sign`,`coat`],s=i,c=r.day;function l(e){let t=e%c.length/c.length;return t<0?t+1:t}function u(e){let t=l(e);return c.rush.some(e=>t>=e.from&&t<e.to)}function d(e,t=c.rushAfterServed){return f({time:e,served:t})?c.rushPace:1}function f(e){return e.served>=c.rushAfterServed&&u(e.time)}function p(e){return(e%c.districts+c.districts)%c.districts}var m=[`#5fb86a`,`#e58a3a`,`#39a9d8`,`#c9553f`];function h(e){return m[p(e)%m.length]??m[0]}function g(e){return e.icon===`branch`&&e.star!==void 0}function _(e,n,r){let i=[],a=null;return{add(e){let n=e.map(t).filter(e=>e!==null);n.length>0&&(i=[...i,...n])},show(){let t=i[0];t===void 0||e.isAdRunning()||e.pausedBy()===`shop`||r.isPlaying()||(e.pause(`card`),g(t)&&t!==a&&(a=t,r.play(h(t.star-1),()=>void 0),r.isPlaying())||n.showCard(t))},hasWaiting:()=>i.length>0,dismiss(){e.pausedBy()===`card`&&(r.isPlaying()?r.skip():(i=i.slice(1),i.length>0||(n.showCard(null),e.resume())))}}}var v=`doner-tezgahi-save-v1`;function y(){try{let e=window.localStorage.getItem(v);return e===null?null:JSON.parse(e)}catch(e){return console.error(`Saved game could not be read:`,e),null}}function b(e){try{return window.localStorage.setItem(v,JSON.stringify(e)),!0}catch(e){return console.error(`Game could not be saved:`,e),!1}}var x=`doner-tezgahi-camera`;function S(){try{return window.localStorage.getItem(x)}catch(e){return console.error(`Camera choice could not be read:`,e),null}}function C(e){try{window.localStorage.setItem(x,e)}catch(e){console.error(`Camera choice could not be stored:`,e)}}var w=`doner-tezgahi-sound`;function T(){try{return window.localStorage.getItem(w)!==`off`}catch(e){return console.error(`Sound choice could not be read:`,e),!0}}function E(e){try{window.localStorage.setItem(w,e?`on`:`off`)}catch(e){console.error(`Sound choice could not be stored:`,e)}}var D=`doner-tezgahi-tutorial`;function O(){try{return window.localStorage.getItem(D)===`done`}catch(e){return console.error(`Tutorial progress could not be read:`,e),!1}}function k(){try{window.localStorage.setItem(D,`done`)}catch(e){console.error(`Tutorial progress could not be stored:`,e)}}var A=[`wide`,`close`,`side`],j=`close`;function M(e){return A[(A.indexOf(e)+1)%A.length]??`wide`}function N(e){return A.find(t=>t===e)??`close`}function ee(e,t){if(t===0)return e;let n=Math.cos(t),r=Math.sin(t);return{x:e.x*n+e.z*r,z:-e.x*r+e.z*n}}var te=`KeyC`,ne=new Set([`Space`,`Enter`]);function re(e,t,n,r){let i=()=>{e.pausedBy()===`shop`?r():e.pausedBy()===`menu`?e.resume():e.pausedBy()===null&&e.pause(`menu`)},a=()=>{e.pausedBy()===`card`?n():e.pausedBy()===`menu`&&e.resume()};t.onPauseAsked(()=>e.pause(`menu`)),t.onResumeAsked(()=>e.resume()),t.onCardDismissed(n),window.addEventListener(`keydown`,t=>{if(t.isComposing)return;let n=t.code===`Escape`;(n||ne.has(t.code))&&(n||e.pausedBy()!==null&&e.pausedBy()!==`shop`)&&(t.preventDefault(),t.repeat||(n?i():a()))}),window.addEventListener(`blur`,()=>e.pause(`menu`)),document.addEventListener(`visibilitychange`,()=>{document.visibilityState===`hidden`&&e.pageHidden()})}function ie(e,t){let n=N(S());e.setCamera(n);let r=()=>{n=M(n),e.setCamera(n),C(n)};document.getElementById(`camera-button`)?.addEventListener(`click`,r),window.addEventListener(`keydown`,e=>{let n=!e.ctrlKey&&!e.metaKey&&!e.altKey;e.code===te&&n&&!e.repeat&&!t()&&r()})}function ae(e,t){let n=document.getElementById(`sound-button`),r=T(),i=()=>{e.setMuted(!r),t.setMuted(!r),n?.setAttribute(`aria-pressed`,String(r))};i(),n?.addEventListener(`click`,()=>{r=!r,E(r),i()})}function oe(e,t){return e.pads.find(e=>e.id===t)?.level??0}function se(e){return r.carry.base+r.carry.perLevel*oe(e,`carry`)}function ce(e){if(e.player.carryingSpit!==null||e.player.carryingCrate)return 0;let{carry:t,chicken:n,drinks:r,fries:i}=e.player;return se(e)-t-n-r-i}function le(e){return Math.max(r.spit.cookedMax,se(e))}function ue(e){return r.spit.baseInterval*r.spit.intervalFactor**oe(e,`slice`)}function de(e){return r.spit.cookRate+r.spit.cookRatePerLevel*oe(e,`slice`)}function fe(e){return oe(e,`fridge`)>0}function pe(e){return fe(e)&&e.branch>=1}function me(e){return oe(e,`counter`)>=r.bread.afterCounterLevel}function he(e,t){let n=a[t];return n!==void 0&&oe(e,n)===0}function ge(e){return 1+oe(e,`window`)}function _e(e){let t=oe(e,`helper`);return t===0?0:r.helper.baseCarry+r.helper.carryPerLevel*t}function ve(e){return e.time<e.boostUntil}function ye(e){return r.branch.incomeFactor**e}function be(e){return(r.coins.baseValue+oe(e,`price`))*ye(e.branch)}function xe(e){let t=be(e);return ve(e)?t*r.boost.multiplier:t}function Se(e,t){if(e.id===`branch`&&t>=r.branch.max)return null;let n=r.pads.defs[e.id].costs[e.level];return n===void 0?null:Math.round(n*r.branch.costFactor**t)}function Ce(e,t=0){return{x:r.queue.head.x+t*r.queue.laneGap,z:r.queue.head.z-e*r.queue.spacing}}function we(e,t){return e.customers.filter(e=>e.phase===`queue`&&(t===void 0||e.lane===t)).length}function P(e,t){return`${e}:${t}`}function Te(e,t){return Number.isInteger(t)&&t>=0&&t<r.style[e].length}function Ee(e,t){return r.style[e][t]?.cost??0}function De(e,t,n){return n===0||e.style.owned.includes(P(t,n))}function F(){return{owned:[],chosen:{floor:0,awning:0,sign:0,coat:0},signText:r.shopSign.word}}function Oe(e,t,n){if(!Te(t,n))return e;let r={...e.style.chosen,[t]:n};if(De(e,t,n))return{...e,style:{...e.style,chosen:r}};let i=Ee(t,n);return e.wallet<i?e:{...e,wallet:e.wallet-i,style:{...e.style,owned:[...e.style.owned,P(t,n)],chosen:r}}}var I=/[\p{L}\p{M}\p{N} ]/u;function L(e){let{word:t,maxLength:n}=r.shopSign;if(typeof e!=`string`)return t;let i=Array.from(e.normalize(`NFC`).toUpperCase()).filter(e=>I.test(e)).join(``).replace(/ +/g,` `).trimStart(),a=Array.from(i).slice(0,n).join(``).trimEnd();return a===``?t:a}function ke(e,t){let n=L(t);return n===e.style.signText?e:{...e,style:{...e.style,signText:n}}}function Ae(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}function je(e){let t=F();if(!Ae(e))return t;if(!Array.isArray(e.owned))return{...t,signText:L(e.signText)};let n=o.flatMap(e=>r.style[e].map((t,n)=>P(e,n))),i=e.owned,a=i.filter((e,t)=>typeof e==`string`&&n.includes(e)&&i.indexOf(e)===t),s=Ae(e.chosen)?e.chosen:{};return{owned:a,chosen:o.reduce((e,t)=>{let n=s[t];return typeof n==`number`&&Te(t,n)&&(n===0||a.includes(P(t,n)))?{...e,[t]:n}:e},t.chosen),signText:L(e.signText)}}function Me(e){return{v:r.save.version,wallet:e.wallet,served:e.served,sliced:e.sliced,branch:e.branch,mission:e.mission,pads:Object.fromEntries(e.pads.map(e=>[e.id,{level:e.level,paid:e.paid}])),spits:{meat:e.spit,chicken:e.chickenSpit},supplies:{lavash:e.lavash,garnish:e.garnish},style:e.style}}function Ne(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}function Pe(e){return typeof e==`number`&&Number.isInteger(e)&&e>=0&&e<=r.save.maxCount}function Fe(e,t,n){if(!Ne(t)||!Pe(t.level)||!Pe(t.paid)||t.level>r.pads.defs[e.id].costs.length)return e;let i=e.id===`branch`?0:t.level,a=Se({...e,level:i},n),o=a===null?0:Math.min(t.paid,a-1);return{...e,level:i,paid:o}}function Ie(e){return e===void 0?0:Pe(e)&&e<=r.branch.max?e:null}function Le(e){return e===void 0?{index:0,progress:0}:!Ne(e)||!Pe(e.index)||!Pe(e.progress)||e.index>r.missions.maxIndex?null:{index:e.index,progress:e.progress}}function Re(e,t){if(!Ne(e))return t;let{portions:n,cooked:i}=e;return!Pe(n)||n>r.spit.size||typeof i!=`number`||!(i>=0)||i>n?t:{portions:n,cooked:i}}function ze(e,t){return Pe(e)&&e<=t?e:t}function Be(e){let t=t=>e.find(e=>e.id===t)?.level??0;return e.map(e=>{let n=a[e.id];return n!==void 0&&t(n)===0?{...e,level:0,paid:0}:e})}function Ve(e,t){if(!Ne(t)||t.v!==r.save.version)return e;let{wallet:n,served:i,sliced:a,pads:o}=t,s=Ie(t.branch),c=Le(t.mission);if(!Pe(n)||!Pe(i)||!Pe(a)||!Ne(o)||s===null||c===null)return e;let l=Ne(t.spits)?t.spits:{},u=Ne(t.supplies)?t.supplies:{};return{...e,player:i>0?{...e.player,carry:0}:e.player,wallet:n,served:i,sliced:a,branch:s,mission:c,spit:Re(l.meat,e.spit),chickenSpit:Re(l.chicken,e.chickenSpit),style:je(t.style),lavash:ze(u.lavash,r.supply.lavash.capacity),garnish:ze(u.garnish,r.supply.garnish.capacity),pads:Be(e.pads.map(e=>Fe(e,o[e.id],s)))}}var He=1;function Ue(e){return{id:e+1,slot:e,lane:0,pos:Ce(e),phase:`queue`,serveTimer:0,look:e%r.queue.looks,wantsDrink:!1,wantsSalgam:!1,drink:!1,wantsFries:!1,fries:!1,vip:!1,wants:`meat`,waited:0,unserved:!1,wantsBread:!1}}function We(e=He){let t=Array.from({length:r.queue.initialWaiting},(e,t)=>Ue(t)),n=i.map(e=>({id:e,pos:r.pads.defs[e].pos,level:0,paid:0}));return{time:0,player:{pos:r.player.start,facing:Math.PI,carry:r.player.startCarry,chicken:0,drinks:0,fries:0,carryingSpit:null,carryingCrate:!1,moving:!1},helper:null,spit:{portions:r.spit.size,cooked:r.spit.startCooked},chickenSpit:{portions:r.spit.size,cooked:0},sliceTimer:0,chickenTimer:0,drinkTimer:0,transferTimer:r.counter.transferInterval,padTimer:0,counterStock:0,counterChicken:0,counterFries:0,fryer:{ready:0,timer:0},friesTimer:0,courier:null,courierTimer:0,cashierTimer:0,style:F(),guests:[],dirtyTables:[],waiter:null,guestTimer:0,lavash:r.supply.lavash.capacity,garnish:r.supply.garnish.capacity,counterDrinks:0,customers:t,spawnTimer:0,coins:[],wallet:0,pads:n,nextId:t.length+1,served:0,sliced:0,boostUntil:0,branch:0,mission:{index:0,progress:0},seed:e}}function Ge(e,t){return Math.hypot(e.x-t.x,e.z-t.z)}function Ke(e,t,n){return e+(t-e)*n}function qe(e,t){return{x:Math.min(Math.max(e.x,t.minX),t.maxX),z:Math.min(Math.max(e.z,t.minZ),t.maxZ)}}function Je(e,t,n){let r=Ge(e,t);if(r<=n)return{pos:{x:t.x,z:t.z},arrived:!0};let i=n/r;return{pos:{x:Ke(e.x,t.x,i),z:Ke(e.z,t.z,i)},arrived:!1}}function Ye(e,t,n){let r=Ge(e,t);if(r>=n)return e;if(r===0)return{x:t.x+n,z:t.z};let i=n/r;return{x:t.x+(e.x-t.x)*i,z:t.z+(e.z-t.z)*i}}var Xe=[`meat`,`chicken`];function Ze(e){return oe(e,`chicken`)>0?Xe:[`meat`]}function Qe(e){return e===`meat`?r.spit.pos:r.chicken.pos}function $e(e,t){return t===`meat`?e.spit:e.chickenSpit}function et(e,t,n){return t===`meat`?{...e,spit:n}:{...e,chickenSpit:n}}function tt(e,t){return t===`meat`?e.sliceTimer:e.chickenTimer}function nt(e,t,n){return t===`meat`?{...e,sliceTimer:n}:{...e,chickenTimer:n}}function rt(e,t){return t===`meat`?e.carry:e.chicken}function it(e,t,n){return t===`meat`?{...e,carry:n}:{...e,chicken:n}}function at(e,t){return t===`meat`?e.counterStock:e.counterChicken}function ot(e,t,n){return t===`meat`?{...e,counterStock:n}:{...e,counterChicken:n}}function st(e,t){return Ge(e.player.pos,Qe(t))<=r.spit.radius&&ce(e)>0}function ct(e,t){return st(e,t)&&$e(e,t).cooked>=1&&e.lavash>=1}function lt(e){return r.counter.columns+r.counter.columnsPerLevel*oe(e,`counter`)}function ut(e){return lt(e)*(Ze(e).length>1?1:2)}function dt(e){return lt(e)}function ft(e){return oe(e,`fryer`)>0}function pt(e,t){return t===`meat`?de(e):de(e)*r.chicken.cookFactor}function mt(e){return e===`meat`?r.coins.perSale:r.chicken.perSale}var{lavash:ht,garnish:gt}=r.supply;function _t(e){return e.lavash<=ht.orderAt||e.garnish<=gt.orderAt}function vt(e){let{player:t}=e;if(t.carryingCrate)return Ge(t.pos,r.counter.pos)>r.counter.reach?{state:e,events:[]}:{state:{...e,lavash:ht.capacity,garnish:gt.capacity,player:{...t,carryingCrate:!1}},events:[{type:`supplied`}]};let n=t.carry+t.chicken+t.drinks+t.fries===0&&t.carryingSpit===null,i=Ge(t.pos,r.coldStore.pos)<=r.coldStore.radius;return!n||!i||!_t(e)?{state:e,events:[]}:{state:{...e,player:{...t,carryingCrate:!0}},events:[{type:`cratePicked`}]}}var yt=1.4,bt=1.2;function xt(e){let{player:t}=e;return t.carryingSpit!==null||t.carryingCrate?null:Ze(e).some(t=>$e(e,t).portions===0)?{kind:`spit`,pos:r.coldStore.pos,height:bt}:_t(e)?{kind:`crate`,pos:r.coldStore.pos,height:bt}:null}function St(e){return Array.from({length:ge(e)},(e,t)=>t).filter(t=>e.customers.some(e=>e.phase===`queue`&&e.lane===t&&e.slot===0&&e.waited>0)).map(e=>({kind:`queue`,pos:Ce(0,e),height:yt}))}function Ct(e){return e.guests.filter(e=>e.phase===`waiting`).map(e=>({kind:`table`,pos:e.pos,height:yt}))}function wt(e){return[xt(e),e.courier?.phase===`waiting`?{kind:`courier`,pos:e.courier.pos,height:yt}:null,...St(e),...Ct(e)].filter(e=>e!==null).slice(0,4)}var Tt=(e,t,n)=>Math.min(Math.max(e,t),n);function Et(e,t,n,r){return t+r>e.x0&&t-r<e.x1&&n+r>e.y0&&n-r<e.y1}function Dt(e,t,n,r){let{track:i,radius:a}=r,o=[{x:e.x0-a,y:n},{x:e.x1+a,y:n},{x:t,y:e.y0-a},{x:t,y:e.y1+a}].filter(e=>e.x>=i.x0&&e.x<=i.x1&&e.y>=i.y0&&e.y<=i.y1);return o.length===0?{x:t,y:n}:o.reduce((e,r)=>Math.abs(r.x-t)+Math.abs(r.y-n)<Math.abs(e.x-t)+Math.abs(e.y-n)?r:e)}function Ot(e,t,n,r){let i=n?e:-e,a=n?t:-t,o=(i*.5+.5)*r.width,s=(-a*.5+.5)*r.height,{track:c}=r;if(n&&o>=c.x0&&o<=c.x1&&s>=c.y0&&s<=c.y1||!Number.isFinite(o)||!Number.isFinite(s))return null;let l=(c.x0+c.x1)/2,u=(c.y0+c.y1)/2,d=o-l,f=o===l&&s===u?1:s-u,p=d===0?1/0:(d>0?c.x1-l:l-c.x0)/Math.abs(d),m=f===0?1/0:(f>0?c.y1-u:u-c.y0)/Math.abs(f),h=Math.min(p,m,n?1:1/0),g={x:Tt(l+d*h,c.x0,c.x1),y:Tt(u+f*h,c.y0,c.y1)},_=r.keepOut.reduce((e,t)=>Et(t,e.x,e.y,r.radius)?Dt(t,e.x,e.y,r):e,g);return{x:Math.round(_.x),y:Math.round(_.y),angle:Math.atan2(f,d)}}var kt={stepSeconds:.17,rushTempo:1.12,stepsPerBar:8,root:293.66,scale:[0,1,4,5,7,8,10],melodies:[{lead:[4,null,5,4,2,null,1,null,0,null,1,2,4,null,2,null,5,null,4,2,1,null,2,null,4,null,2,1,0,null,null,null,7,null,6,5,4,null,5,null,6,null,5,4,2,null,4,null,5,null,4,2,1,null,2,1,0,null,null,1,0,null,null,null],bass:[0,0,3,0,4,3,1,0]},{lead:[7,null,8,7,6,null,5,null,4,null,5,6,7,null,null,null,8,null,7,6,5,null,4,null,5,null,4,2,1,null,2,null,4,5,4,2,1,null,0,null,1,null,2,4,2,null,1,null,2,null,1,0,-1,null,0,null,0,null,null,null,0,null,null,null],bass:[0,3,0,4,3,0,4,0]}]},At=kt.melodies.reduce((e,t)=>e+t.lead.length,0);function jt(e,t=kt.root){let n=kt.scale.length;return t*2**(Math.floor(e/n)+(kt.scale[(e%n+n)%n]??0)/12)}function Mt(e){return e?kt.stepSeconds/kt.rushTempo:kt.stepSeconds}function Nt(e){return kt.melodies.reduce((e,t)=>e.melody===void 0?e.at<t.lead.length?{melody:t,at:e.at}:{melody:void 0,at:e.at-t.lead.length}:e,{melody:void 0,at:e})}function Pt(e){let{melody:t,at:n}=Nt((e%At+At)%At),r=n%kt.stepsPerBar===0;return{step:e,lead:t?.lead[n]??null,bass:r?t?.bass[n/kt.stepsPerBar]??null:null}}var Ft=.25,It=.05,Lt=.15,Rt=.5,zt=.05,Bt=kt.root/4;function Vt(e,t,n){let r=e.createOscillator(),i=e.createGain();r.type=n.wave,r.frequency.setValueAtTime(n.pitch,n.at),i.gain.setValueAtTime(1e-4,n.at),i.gain.exponentialRampToValueAtTime(n.level,n.at+.012),i.gain.exponentialRampToValueAtTime(1e-4,n.at+n.seconds),r.connect(i).connect(t),r.start(n.at),r.stop(n.at+n.seconds+.02)}function Ht(e,t,n,r,i){let a=Pt(n);a.lead!==null&&Vt(e,t,{pitch:jt(a.lead),at:r,seconds:i*2.2,level:.5,wave:`triangle`}),a.bass!==null&&Vt(e,t,{pitch:jt(a.bass,Bt),at:r,seconds:i*6,level:.9,wave:`sine`})}function Ut(){let e=null,t=!1,n=!1,r=0,i=0;return{update(a,o,s){if(a===null||a.state!==`running`)return;e===null&&(e=a.createGain(),e.gain.value=0,e.connect(a.destination));let c=o&&!t;if(c!==n&&(n=c,e.gain.setTargetAtTime(c?It:0,a.currentTime,Lt/3),c&&(i=a.currentTime+zt)),!c)return;i<a.currentTime-Rt&&(i=a.currentTime+zt);let l=Mt(s);for(;i<a.currentTime+Ft;)Ht(a,e,r,Math.max(i,a.currentTime),l),r+=1,i+=l},setMuted(e){t=e}}}var Wt=(...e)=>e.map(([e,t,n,r,i,a])=>({wave:e,from:t,to:n,at:r,seconds:i,gain:a})),Gt=392,Kt=523,qt=659,Jt=784,Yt=1047,Xt=1319,Zt={slice:Wt([`noise`,3e3,1800,0,.07,.1],[`triangle`,240,150,0,.06,.09],[`noise`,5200,6800,.05,.12,.035]),drink:Wt([`sine`,1320,1300,0,.1,.08],[`sine`,1980,1900,0,.13,.04],[`sine`,520,700,.04,.08,.06]),fries:Wt([`noise`,4500,2500,0,.09,.08],[`sine`,640,860,0,.07,.08],[`noise`,6e3,4e3,.08,.06,.04]),deposit:Wt([`sine`,380,300,0,.05,.1],[`triangle`,760,600,0,.03,.04]),serve:Wt([`sine`,Jt,Jt,0,.1,.12],[`sine`,Yt,Yt,.07,.18,.12],[`triangle`,Yt*2,Yt*2,.07,.1,.03]),collect:Wt([`square`,1245,1245,0,.04,.04],[`square`,1661,1661,.04,.09,.045],[`noise`,7e3,9e3,0,.05,.03]),pay:Wt([`sine`,620,660,0,.03,.05],[`triangle`,1240,1320,0,.02,.02]),upgrade:Wt([`triangle`,Kt,Kt,0,.14,.13],[`triangle`,qt,qt,.08,.14,.13],[`triangle`,Jt,Jt,.16,.14,.13],[`triangle`,Yt,Yt,.24,.3,.14],[`sine`,Yt*2,Yt*2,.24,.25,.04]),spitEmpty:Wt([`triangle`,Gt,370,0,.16,.13],[`triangle`,262,180,.15,.26,.14]),spitPicked:Wt([`sine`,300,460,0,.12,.12],[`noise`,800,500,0,.08,.05]),spitMounted:Wt([`sine`,160,90,0,.12,.18],[`triangle`,380,900,.05,.25,.12],[`noise`,5e3,7e3,.1,.4,.05]),cratePicked:Wt([`sine`,240,400,0,.1,.12],[`noise`,700,400,0,.07,.05]),supplied:Wt([`noise`,3e3,1500,0,.1,.05],[`triangle`,420,840,0,.14,.13],[`triangle`,630,1260,.1,.2,.12]),courierArrived:Wt([`square`,494,494,0,.1,.05],[`square`,qt,qt,.13,.16,.05],[`sine`,988,988,.13,.16,.04]),courierTook:Wt([`sine`,460,560,0,.05,.09],[`noise`,2e3,1500,0,.04,.04]),courierPaid:Wt([`square`,1245,1245,0,.07,.04],[`square`,1661,1661,.06,.07,.04],[`square`,1245,1245,.12,.07,.04],[`square`,1976,1976,.18,.12,.04],[`triangle`,700,1500,0,.3,.1]),walkedOut:Wt([`sine`,330,300,0,.14,.08],[`sine`,247,190,.13,.22,.08]),waiterTook:Wt([`sine`,500,600,0,.05,.07],[`sine`,1e3,1200,0,.04,.03]),plateServed:Wt([`sine`,880,880,0,.12,.1],[`sine`,1320,1320,.06,.2,.08],[`triangle`,2640,2640,.06,.08,.025]),tableCleared:Wt([`noise`,2500,4500,0,.12,.05],[`sine`,520,620,.02,.06,.06]),rushStarted:Wt([`square`,qt,qt,0,.08,.05],[`square`,qt,qt,.12,.08,.05],[`square`,988,988,.24,.2,.05],[`sine`,Xt,Xt,.24,.3,.05]),boostStarted:Wt([`triangle`,440,1760,0,.45,.14],[`sine`,880,3520,.1,.4,.06],[`square`,1760,1760,.4,.12,.04]),missionDone:Wt([`triangle`,qt,qt,0,.1,.13],[`triangle`,Jt,Jt,.1,.1,.13],[`triangle`,Yt,Yt,.2,.1,.13],[`triangle`,Xt,Xt,.3,.28,.14],[`sine`,Xt*2,Xt*2,.3,.3,.04]),branchOpened:Wt([`sine`,Gt/2,Gt/2,0,.75,.12],[`triangle`,Gt,Gt,0,.14,.13],[`triangle`,Kt,Kt,.12,.14,.13],[`triangle`,qt,qt,.24,.14,.13],[`triangle`,Jt,Yt,.36,.45,.14])};function Qt(e){return Object.hasOwn(Zt,e)?Zt[e]??[]:[]}var $t=.04,en=.004,tn=1e-4,nn=1,rn=1.2;function an(e){let t=e.createBuffer(1,Math.floor(e.sampleRate*nn),e.sampleRate),n=t.getChannelData(0);return n.forEach((e,t)=>{n[t]=Math.random()*2-1}),t}function on(e,t,n){let r=e.createGain();return r.gain.setValueAtTime(tn,n),r.gain.exponentialRampToValueAtTime(t.gain,n+en),r.gain.exponentialRampToValueAtTime(tn,n+t.seconds),r.connect(e.destination),r}function sn(e,t,n,r){let i=e.createOscillator();i.type=n,i.frequency.setValueAtTime(t.from,r),i.frequency.exponentialRampToValueAtTime(t.to,r+t.seconds),i.connect(on(e,t,r)),i.start(r),i.stop(r+t.seconds+.01)}function cn(e,t,n,r){let i=e.createBufferSource(),a=e.createBiquadFilter();i.buffer=n,a.type=`bandpass`,a.Q.value=rn,a.frequency.setValueAtTime(t.from,r),a.frequency.exponentialRampToValueAtTime(t.to,r+t.seconds),i.connect(a).connect(on(e,t,r)),i.start(r,Math.random()*(nn-t.seconds),t.seconds+.01)}function ln(){let e=null,t=null,n={},r=!1,i=(e,n)=>{let r=e.currentTime+n.at;n.wave===`noise`?(t??(t=an(e)),cn(e,n,t,r)):sn(e,n,n.wave,r)};return{unlock(){try{e??(e=new AudioContext),e.state!==`running`&&e.resume().catch(e=>{console.error(`Audio could not resume:`,e)})}catch(e){console.error(`Audio could not start:`,e)}},setMuted(e){r=e},context:()=>e,play(t){let a=e;a===null||a.state!==`running`||r||t.forEach(e=>{let t=Qt(e.type),r=n[e.type]??-1;t.length===0||a.currentTime-r<$t||(n={...n,[e.type]:a.currentTime},t.forEach(e=>i(a,e)))})}}}var un={KeyW:{x:0,z:-1},ArrowUp:{x:0,z:-1},KeyS:{x:0,z:1},ArrowDown:{x:0,z:1},KeyA:{x:-1,z:0},ArrowLeft:{x:-1,z:0},KeyD:{x:1,z:0},ArrowRight:{x:1,z:0}},dn=new Set([`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,`Space`]);function fn(e){let t=e?.tagName;return t===`INPUT`||t===`TEXTAREA`}function pn(e){let t=new Set;return e.addEventListener(`keydown`,e=>{fn(e.target)||(dn.has(e.code)&&e.preventDefault(),e.code in un&&(t=new Set([...t,e.code])))}),e.addEventListener(`keyup`,e=>{t=new Set([...t].filter(t=>t!==e.code))}),e.addEventListener(`wheel`,e=>e.preventDefault(),{passive:!1}),e.addEventListener(`blur`,()=>{t=new Set}),{read(){return[...t].reduce((e,t)=>{let n=un[t];return n===void 0?e:{x:e.x+n.x,z:e.z+n.z}},{x:0,z:0})}}}var mn=56;function hn(e){let t=document.createElement(`div`),n=document.createElement(`div`);t.className=`stick`,n.className=`stick-knob`,t.hidden=!0,t.append(n),document.body.append(t);let r=null,i=()=>{r=null,t.hidden=!0},a=e=>{r!==null&&e.pointerId===r.pointerId&&i()};return e.addEventListener(`pointerdown`,i=>{r!==null||i.pointerType===`mouse`&&i.button!==0||(i.preventDefault(),e.setPointerCapture(i.pointerId),r={pointerId:i.pointerId,originX:i.clientX,originY:i.clientY,input:{x:0,z:0}},t.hidden=!1,t.style.transform=`translate(${i.clientX}px, ${i.clientY}px)`,n.style.transform=`translate(0px, 0px)`)}),e.addEventListener(`pointermove`,e=>{if(r===null||e.pointerId!==r.pointerId)return;let t=e.clientX-r.originX,i=e.clientY-r.originY,a=Math.hypot(t,i),o=a>mn?mn/a:1;n.style.transform=`translate(${t*o}px, ${i*o}px)`,r={...r,input:{x:t*o/mn,z:i*o/mn}}}),e.addEventListener(`pointerup`,a),e.addEventListener(`pointercancel`,a),e.addEventListener(`lostpointercapture`,a),e.addEventListener(`contextmenu`,e=>e.preventDefault()),window.addEventListener(`blur`,i),{read:()=>r?.input??null}}function gn(e){let t=hn(e),n=pn(window);return{read:()=>t.read()??n.read()}}function _n(e,t){return{play(){t.started&&!t.playing&&(t.playing=!0,e.gameplayStart())},halt(){t.playing&&(t.playing=!1,e.gameplayStop())}}}function vn(e){let t={started:!1,playing:!1,paused:null,adRunning:!1,granted:!1,pauseAfterAd:!1},n=_n(e,t),r=e=>{t.adRunning=!0,n.halt(),Promise.resolve().then(e).then(e=>{t.granted=t.granted||e}).catch(e=>{console.error(`Ad break failed:`,e)}).finally(()=>{t.adRunning=!1,t.paused=t.pauseAfterAd?`menu`:null,t.pauseAfterAd=!1,t.paused===null&&n.play()})},i=e=>{t.adRunning||(t.paused=t.paused===`card`||t.paused===`shop`?t.paused:e,n.halt())};return{firstInput(){t.started||t.adRunning||(t.started=!0,t.paused===null&&n.play())},pause:i,handOver(e){t.paused!==null&&!t.adRunning&&(t.paused=e)},pageHidden(){t.adRunning?t.pauseAfterAd=!0:i(`menu`)},resume(){t.paused===null||t.adRunning||(t.started?r(()=>e.commercialBreak().then(()=>!1)):t.paused=null)},requestReward(){t.paused!==null||t.adRunning||r(()=>e.rewardedBreak())},isFrozen:()=>t.paused!==null||t.adRunning,pausedBy:()=>t.paused,isAdRunning:()=>t.adRunning,takeGrant(){let e=t.granted;return t.granted=!1,e}}}function yn(e){return{init:()=>e.init().catch(e=>{console.error(`Poki SDK could not initialise:`,e)}),loadingFinished:()=>e.gameLoadingFinished(),gameplayStart:()=>e.gameplayStart(),gameplayStop:()=>e.gameplayStop(),canReward:()=>!0,rewardedBreak:()=>e.rewardedBreak(),commercialBreak:()=>e.commercialBreak().then(()=>void 0)}}function bn(e){return{init:()=>Promise.resolve(),loadingFinished(){},gameplayStart(){},gameplayStop(){},canReward:()=>e,rewardedBreak:()=>Promise.resolve(e),commercialBreak:()=>Promise.resolve()}}function xn(){return window.PokiSDK===void 0?bn(!1):yn(window.PokiSDK)}var Sn,Cn,wn,Tn,En,Dn,On,kn,An,jn=1e3,Mn=1001,Nn=1002,Pn=1003,Fn=1004,In=1005,Ln=1006,Rn=1007,zn=1008,Bn=1009,Vn=1010,Hn=1011,Un=1012,Wn=1013,Gn=1014,Kn=1015,qn=1016,Jn=1017,Yn=1018,Xn=1020,Zn=35902,Qn=35899,$n=1021,er=1022,tr=1023,nr=1026,rr=1027,ir=1028,ar=1029,or=1030,sr=1031,cr=1033,lr=33776,ur=33777,dr=33778,fr=33779,pr=35840,mr=35841,hr=35842,gr=35843,_r=36196,vr=37492,yr=37496,br=37488,xr=37489,Sr=37490,Cr=37491,wr=37808,Tr=37809,Er=37810,Dr=37811,Or=37812,kr=37813,Ar=37814,jr=37815,Mr=37816,Nr=37817,Pr=37818,Fr=37819,Ir=37820,Lr=37821,Rr=36492,zr=36494,Br=36495,Vr=36283,Hr=36284,Ur=36285,Wr=36286,Gr=2300,Kr=2301,qr=2302,Jr=2303,Yr=2400,Xr=2401,Zr=2402,Qr=3200,$r=`srgb`,ei=`srgb-linear`,ti=`linear`,ni=`srgb`,ri=7680,ii=35044,ai=2e3;function oi(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function si(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function ci(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function li(){let e=ci(`canvas`);return e.style.display=`block`,e}var ui={};function di(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function fi(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function R(...e){e=fi(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function z(...e){e=fi(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function pi(...e){let t=e.join(` `);t in ui||(ui[t]=!0,R(...e))}function mi(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var hi={0:0,2:6,4:4,3:5,1:1,6:2,7:7,5:3},gi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},_i=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),vi=1234567,yi=Math.PI/180,bi=180/Math.PI;function xi(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(_i[e&255]+_i[e>>8&255]+_i[e>>16&255]+_i[e>>24&255]+`-`+_i[t&255]+_i[t>>8&255]+`-`+_i[t>>16&15|64]+_i[t>>24&255]+`-`+_i[n&63|128]+_i[n>>8&255]+`-`+_i[n>>16&255]+_i[n>>24&255]+_i[r&255]+_i[r>>8&255]+_i[r>>16&255]+_i[r>>24&255]).toLowerCase()}function Si(e,t,n){return Math.max(t,Math.min(n,e))}function Ci(e,t){return(e%t+t)%t}function wi(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function Ti(e,t,n){return e===t?0:(n-e)/(t-e)}function Ei(e,t,n){return(1-n)*e+n*t}function Di(e,t,n,r){return Ei(e,t,1-Math.exp(-n*r))}function Oi(e,t=1){return t-Math.abs(Ci(e,t*2)-t)}function ki(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function Ai(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function ji(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Mi(e,t){return e+Math.random()*(t-e)}function Ni(e){return e*(.5-Math.random())}function Pi(e){e!==void 0&&(vi=e);let t=vi+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Fi(e){return e*yi}function Ii(e){return e*bi}function Li(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function Ri(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function zi(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Bi(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:R(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Vi(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Hi(e,t){if(t.constructor===Float32Array)return e;let n=Vi(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.max(e/n,-1)}function Ui(e,t){if(t.constructor===Float32Array)return e;let n=Vi(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.round(e*n)}var Wi={DEG2RAD:yi,RAD2DEG:bi,generateUUID:xi,clamp:Si,euclideanModulo:Ci,mapLinear:wi,inverseLerp:Ti,lerp:Ei,damp:Di,pingpong:Oi,smoothstep:ki,smootherstep:Ai,randInt:ji,randFloat:Mi,randFloatSpread:Ni,seededRandom:Pi,degToRad:Fi,radToDeg:Ii,isPowerOfTwo:Li,ceilPowerOfTwo:Ri,floorPowerOfTwo:zi,setQuaternionFromProperEuler:Bi,normalize:Ui,denormalize:Hi};On=Symbol.iterator;var B=class{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Si(this.x,e.x,t.x),this.y=Si(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Si(this.x,e,t),this.y=Si(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Si(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Si(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[On](){yield this.x,yield this.y}};Sn=B,Sn.prototype.isVector2=!0;var Gi=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:R(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Si(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};kn=Symbol.iterator;var V=class{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qi.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qi.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Si(this.x,e.x,t.x),this.y=Si(this.y,e.y,t.y),this.z=Si(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Si(this.x,e,t),this.y=Si(this.y,e,t),this.z=Si(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Si(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ki.copy(this).projectOnVector(e),this.sub(Ki)}reflect(e){return this.sub(Ki.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Si(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[kn](){yield this.x,yield this.y,yield this.z}};Cn=V,Cn.prototype.isVector3=!0;var Ki=new V,qi=new Gi,H=class{constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return pi(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Ji.makeScale(e,t)),this}rotate(e){return pi(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Ji.makeRotation(-e)),this}translate(e,t){return pi(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Ji.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};wn=H,wn.prototype.isMatrix3=!0;var Ji=new H,Yi=new H().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xi=new H().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Zi(){let e={enabled:!0,workingColorSpace:ei,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=$i(e.r),e.g=$i(e.g),e.b=$i(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=ea(e.r),e.g=ea(e.g),e.b=ea(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?ti:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[n].fromXYZ).multiply(this.spaces[t].toXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[ei]:{primaries:t,whitePoint:r,transfer:ti,toXYZ:Yi,fromXYZ:Xi,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:$r},outputColorSpaceConfig:{drawingBufferColorSpace:$r}},[$r]:{primaries:t,whitePoint:r,transfer:ni,toXYZ:Yi,fromXYZ:Xi,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:$r}}}),e}var Qi=Zi();function $i(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function ea(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var ta,na=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ta===void 0&&(ta=ci(`canvas`)),ta.width=e.width,ta.height=e.height;let t=ta.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=ta}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=ci(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=$i(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor($i(t[e]/255)*255):t[e]=$i(t[e]);return{data:t,width:e.width,height:e.height}}return R(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},ra=0,ia=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ra++}),this.uuid=xi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width||0,t.height||0,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(aa(r[t].image)):e.push(aa(r[t]))}else e=aa(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function aa(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?na.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(R(`Texture: Unable to serialize Texture.`),{})}var oa=0,sa=new V,ca=class e extends gi{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=Mn,i=Mn,a=Ln,o=zn,s=tr,c=Bn,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oa++}),this.uuid=xi(),this.name=``,this.source=new ia(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new B(0,0),this.repeat=new B(1,1),this.center=new B(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new H,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(sa).x}get height(){return this.source.getSize(sa).y}get depth(){return this.source.getSize(sa).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){R(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?R(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jn:e.x-=Math.floor(e.x);break;case Mn:e.x=e.x<0?0:1;break;case Nn:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case jn:e.y-=Math.floor(e.y);break;case Mn:e.y=e.y<0?0:1;break;case Nn:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ca.DEFAULT_IMAGE=null,ca.DEFAULT_MAPPING=300,ca.DEFAULT_ANISOTROPY=1,An=Symbol.iterator;var la=class{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Si(this.x,e.x,t.x),this.y=Si(this.y,e.y,t.y),this.z=Si(this.z,e.z,t.z),this.w=Si(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Si(this.x,e,t),this.y=Si(this.y,e,t),this.z=Si(this.z,e,t),this.w=Si(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Si(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[An](){yield this.x,yield this.y,yield this.z,yield this.w}};Tn=la,Tn.prototype.isVector4=!0;var ua=class extends gi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new la(0,0,e,t),this.scissorTest=!1,this.viewport=new la(0,0,e,t),this.textures=[];let r=n.count;for(let i=0;i<r;i++)this.textures[i]=new ca({width:e,height:t,depth:n.depth}),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ln,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new ia(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},da=class extends ua{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},fa=class extends ca{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},pa=class extends ca{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},ma=class e{constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/ha.setFromMatrixColumn(e,0).length(),i=1/ha.setFromMatrixColumn(e,1).length(),a=1/ha.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_a,e,va)}lookAt(e,t,n){let r=this.elements;return xa.subVectors(e,t),xa.lengthSq()===0&&(xa.z=1),xa.normalize(),ya.crossVectors(n,xa),ya.lengthSq()===0&&(Math.abs(n.z)===1?xa.x+=1e-4:xa.z+=1e-4,xa.normalize(),ya.crossVectors(n,xa)),ya.normalize(),ba.crossVectors(xa,ya),r[0]=ya.x,r[4]=ba.x,r[8]=xa.x,r[1]=ya.y,r[5]=ba.y,r[9]=xa.y,r[2]=ya.z,r[6]=ba.z,r[10]=xa.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],ee=r[7],te=r[11],ne=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*ee,i[8]=a*C+o*D+s*j+c*te,i[12]=a*w+o*O+s*M+c*ne,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*ee,i[9]=l*C+u*D+d*j+f*te,i[13]=l*w+u*O+d*M+f*ne,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*ee,i[10]=p*C+m*D+h*j+g*te,i[14]=p*w+m*O+h*M+g*ne,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*ee,i[11]=_*C+v*D+y*j+b*te,i[15]=_*w+v*O+y*M+b*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=ha.set(r[0],r[1],r[2]).length(),o=ha.set(r[4],r[5],r[6]).length(),s=ha.set(r[8],r[9],r[10]).length();i<0&&(a=-a),ga.copy(this);let c=1/a,l=1/o,u=1/s;return ga.elements[0]*=c,ga.elements[1]*=c,ga.elements[2]*=c,ga.elements[4]*=l,ga.elements[5]*=l,ga.elements[6]*=l,ga.elements[8]*=u,ga.elements[9]*=u,ga.elements[10]*=u,t.setFromRotationMatrix(ga),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=ai,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=ai,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};En=ma,En.prototype.isMatrix4=!0;var ha=new V,ga=new ma,_a=new V(0,0,0),va=new V(1,1,1),ya=new V,ba=new V,xa=new V,Sa=new ma,Ca=new Gi,wa=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(Si(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-Si(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(Si(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-Si(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(Si(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-Si(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:R(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Sa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ca.setFromEuler(this),this.setFromQuaternion(Ca,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};wa.DEFAULT_ORDER=`XYZ`;var Ta=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Ea=0,Da=new V,Oa=new Gi,ka=new ma,Aa=new V,ja=new V,Ma=new V,Na=new Gi,Pa=new V(1,0,0),Fa=new V(0,1,0),Ia=new V(0,0,1),La={type:`added`},Ra={type:`removed`},za={type:`childadded`,child:null},Ba={type:`childremoved`,child:null},Va=class e extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ea++}),this.uuid=xi(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new V,n=new wa,r=new Gi,i=new V(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ma},normalMatrix:{value:new H}}),this.matrix=new ma,this.matrixWorld=new ma,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ta,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Oa.setFromAxisAngle(e,t),this.quaternion.multiply(Oa),this}rotateOnWorldAxis(e,t){return Oa.setFromAxisAngle(e,t),this.quaternion.premultiply(Oa),this}rotateX(e){return this.rotateOnAxis(Pa,e)}rotateY(e){return this.rotateOnAxis(Fa,e)}rotateZ(e){return this.rotateOnAxis(Ia,e)}translateOnAxis(e,t){return Da.copy(e).applyQuaternion(this.quaternion),this.position.add(Da.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Pa,e)}translateY(e){return this.translateOnAxis(Fa,e)}translateZ(e){return this.translateOnAxis(Ia,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ka.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Aa.copy(e):Aa.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),ja.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ka.lookAt(ja,Aa,this.up):ka.lookAt(Aa,ja,this.up),this.quaternion.setFromRotationMatrix(ka),r&&(ka.extractRotation(r.matrixWorld),Oa.setFromRotationMatrix(ka),this.quaternion.premultiply(Oa.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(z(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(La),za.child=e,this.dispatchEvent(za),za.child=null):z(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ra),Ba.child=e,this.dispatchEvent(Ba),Ba.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ka.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ka.multiply(e.parent.matrixWorld)),e.applyMatrix4(ka),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(La),za.child=e,this.dispatchEvent(za),za.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ja,e,Ma),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ja,Na,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Va.DEFAULT_UP=new V(0,1,0),Va.DEFAULT_MATRIX_AUTO_UPDATE=!0,Va.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ha=class extends Va{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Ua={type:`move`},Wa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ha,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ha,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ha,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.quaternion,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ua)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ha;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ga={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ka={h:0,s:0,l:0},qa={h:0,s:0,l:0};function Ja(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var U=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$r){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qi.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Qi.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qi.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Qi.workingColorSpace){if(e=Ci(e,1),t=Si(t,0,1),n=Si(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Ja(i,r,e+1/3),this.g=Ja(i,r,e),this.b=Ja(i,r,e-1/3)}return Qi.colorSpaceToWorking(this,r),this}setStyle(e,t=$r){function n(t){t!==void 0&&parseFloat(t)<1&&R(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseFloat(i[1]))/100,Math.min(100,parseFloat(i[2]))/100,Math.min(100,parseFloat(i[3]))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:R(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);R(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$r){let n=Ga[e.toLowerCase()];return n===void 0?R(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}copyLinearToSRGB(e){return this.r=ea(e.r),this.g=ea(e.g),this.b=ea(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$r){return Qi.workingToColorSpace(Ya.copy(this),e),Math.round(Si(Ya.r*255,0,255))*65536+Math.round(Si(Ya.g*255,0,255))*256+Math.round(Si(Ya.b*255,0,255))}getHexString(e=$r){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qi.workingColorSpace){Qi.workingToColorSpace(Ya.copy(this),t);let n=Ya.r,r=Ya.g,i=Ya.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Qi.workingColorSpace){return Qi.workingToColorSpace(Ya.copy(this),t),e.r=Ya.r,e.g=Ya.g,e.b=Ya.b,e}getStyle(e=$r){Qi.workingToColorSpace(Ya.copy(this),e);let t=Ya.r,n=Ya.g,r=Ya.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Ka),this.setHSL(Ka.h+e,Ka.s+t,Ka.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ka),e.getHSL(qa);let n=Ei(Ka.h,qa.h,t),r=Ei(Ka.s,qa.s,t),i=Ei(Ka.l,qa.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ya=new U;U.NAMES=Ga;var Xa=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new U(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Za=class extends Va{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wa,this.environmentIntensity=1,this.environmentRotation=new wa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background===null?null:e.background.clone(),this.environment=e.environment===null?null:e.environment.clone(),this.fog=e.fog===null?null:e.fog.clone(),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial===null?null:e.overrideMaterial.clone(),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Qa=new V,$a=new V,eo=new V,to=new V,no=new V,ro=new V,io=new V,ao=new V,oo=new V,so=new V,co=new la,lo=new la,uo=new la,fo=class e{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Qa.subVectors(e,t),r.cross(Qa);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Qa.subVectors(r,t),$a.subVectors(n,t),eo.subVectors(e,t);let a=Qa.dot(Qa),o=Qa.dot($a),s=Qa.dot(eo),c=$a.dot($a),l=$a.dot(eo),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,to)!==null&&to.x>=0&&to.y>=0&&to.x+to.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,to)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,to.x),s.addScaledVector(a,to.y),s.addScaledVector(o,to.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return co.setScalar(0),lo.setScalar(0),uo.setScalar(0),co.fromBufferAttribute(e,t),lo.fromBufferAttribute(e,n),uo.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(co,i.x),a.addScaledVector(lo,i.y),a.addScaledVector(uo,i.z),a}static isFrontFacing(e,t,n,r){return Qa.subVectors(n,t),$a.subVectors(e,t),Qa.cross($a).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qa.subVectors(this.c,this.b),$a.subVectors(this.a,this.b),Qa.cross($a).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;no.subVectors(r,n),ro.subVectors(i,n),ao.subVectors(e,n);let s=no.dot(ao),c=ro.dot(ao);if(s<=0&&c<=0)return t.copy(n);oo.subVectors(e,r);let l=no.dot(oo),u=ro.dot(oo);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0&&s-l>0)return a=s/(s-l),t.copy(n).addScaledVector(no,a);so.subVectors(e,i);let f=no.dot(so),p=ro.dot(so);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(ro,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return io.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(io,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(no,a).addScaledVector(ro,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},po=class{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ho.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ho.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ho.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,ho):ho.fromBufferAttribute(r,t),ho.applyMatrix4(e.matrixWorld),this.expandByPoint(ho);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),go.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),go.copy(e.boundingBox)),go.applyMatrix4(e.matrixWorld),this.union(go)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ho),ho.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Co),wo.subVectors(this.max,Co),_o.subVectors(e.a,Co),vo.subVectors(e.b,Co),yo.subVectors(e.c,Co),bo.subVectors(vo,_o),xo.subVectors(yo,vo),So.subVectors(_o,yo);let t=[0,-bo.z,bo.y,0,-xo.z,xo.y,0,-So.z,So.y,bo.z,0,-bo.x,xo.z,0,-xo.x,So.z,0,-So.x,-bo.y,bo.x,0,-xo.y,xo.x,0,-So.y,So.x,0];return!Do(t,_o,vo,yo,wo)||(t=[1,0,0,0,1,0,0,0,1],!Do(t,_o,vo,yo,wo))?!1:(To.crossVectors(bo,xo),t=[To.x,To.y,To.z],Do(t,_o,vo,yo,wo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ho).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ho).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(mo[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mo[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mo[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mo[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mo[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mo[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mo[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mo[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mo)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},mo=[new V,new V,new V,new V,new V,new V,new V,new V],ho=new V,go=new po,_o=new V,vo=new V,yo=new V,bo=new V,xo=new V,So=new V,Co=new V,wo=new V,To=new V,Eo=new V;function Do(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Eo.fromArray(e,a);let o=i.x*Math.abs(Eo.x)+i.y*Math.abs(Eo.y)+i.z*Math.abs(Eo.z),s=t.dot(Eo),c=n.dot(Eo),l=r.dot(Eo);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Oo=new V,ko=new B,Ao=0,jo=class extends gi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ao++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=ii,this.updateRanges=[],this.gpuType=Kn,this.version=0,this._normalizationScale=e===void 0?void 0:Vi(e)}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ko.fromBufferAttribute(this,t),ko.applyMatrix3(e),this.setXY(t,ko.x,ko.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Oo.fromBufferAttribute(this,t),Oo.applyMatrix3(e),this.setXYZ(t,Oo.x,Oo.y,Oo.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Oo.fromBufferAttribute(this,t),Oo.applyMatrix4(e),this.setXYZ(t,Oo.x,Oo.y,Oo.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Oo.fromBufferAttribute(this,t),Oo.applyNormalMatrix(e),this.setXYZ(t,Oo.x,Oo.y,Oo.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Oo.fromBufferAttribute(this,t),Oo.transformDirection(e),this.setXYZ(t,Oo.x,Oo.y,Oo.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}_denormalize(e){let t=this._normalizationScale;return t===void 0?Hi(e,this.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?Ui(e,this.array):Math.round(e*t)}},Mo=class extends jo{constructor(e,t,n){super(new Uint16Array(e),t,n)}},No=class extends jo{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Po=class extends jo{constructor(e,t,n){super(new Float32Array(e),t,n)}},Fo=new po,Io=new V,Lo=new V,Ro=class{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Fo.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Io.subVectors(e,this.center);let t=Io.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Io,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Io.copy(e.center).add(Lo)),this.expandByPoint(Io.copy(e.center).sub(Lo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},zo=0,Bo=new ma,Vo=new Va,Ho=new V,Uo=new po,Wo=new po,Go=new V,Ko=class e extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zo++}),this.uuid=xi(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(oi(e)?No:Mo)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new H().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Bo.makeRotationFromQuaternion(e),this.applyMatrix4(Bo),this}rotateX(e){return Bo.makeRotationX(e),this.applyMatrix4(Bo),this}rotateY(e){return Bo.makeRotationY(e),this.applyMatrix4(Bo),this}rotateZ(e){return Bo.makeRotationZ(e),this.applyMatrix4(Bo),this}translate(e,t,n){return Bo.makeTranslation(e,t,n),this.applyMatrix4(Bo),this}scale(e,t,n){return Bo.makeScale(e,t,n),this.applyMatrix4(Bo),this}lookAt(e){return Vo.lookAt(e),Vo.updateMatrix(),this.applyMatrix4(Vo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ho).negate(),this.translate(Ho.x,Ho.y,Ho.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Po(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&R(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new po);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)z(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Uo.setFromBufferAttribute(n),this.morphTargetsRelative?(Go.addVectors(this.boundingBox.min,Uo.min),this.boundingBox.expandByPoint(Go),Go.addVectors(this.boundingBox.max,Uo.max),this.boundingBox.expandByPoint(Go)):(this.boundingBox.expandByPoint(Uo.min),this.boundingBox.expandByPoint(Uo.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&z(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ro);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)z(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new V,1/0);else if(e){let n=this.boundingSphere.center;if(Uo.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Wo.setFromBufferAttribute(n),this.morphTargetsRelative?(Go.addVectors(Uo.min,Wo.min),Uo.expandByPoint(Go),Go.addVectors(Uo.max,Wo.max),Uo.expandByPoint(Go)):(Uo.expandByPoint(Wo.min),Uo.expandByPoint(Wo.max))}Uo.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Go.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Go));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Go.fromBufferAttribute(a,t),o&&(Ho.fromBufferAttribute(e,t),Go.add(Ho)),r=Math.max(r,n.distanceToSquared(Go))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&z(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){z(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new jo(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[],c=new Uint8Array(n.count);for(let e=0;e<n.count;e++)o[e]=new V,s[e]=new V;let l=new V,u=new V,d=new V,f=new B,p=new B,m=new B,h=new V,g=new V;function _(e,t,r){c[e]=c[t]=c[r]=1,l.fromBufferAttribute(n,e),u.fromBufferAttribute(n,t),d.fromBufferAttribute(n,r),f.fromBufferAttribute(i,e),p.fromBufferAttribute(i,t),m.fromBufferAttribute(i,r),u.sub(l),d.sub(l),p.sub(f),m.sub(f);let a=1/(p.x*m.y-m.x*p.y);isFinite(a)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(a),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(a),o[e].add(h),o[t].add(h),o[r].add(h),s[e].add(g),s[t].add(g),s[r].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)_(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let y=new V,b=new V,x=new V,S=new V;function C(e){x.fromBufferAttribute(r,e),S.copy(x);let t=o[e];y.copy(t),y.sub(x.multiplyScalar(x.dot(t))).normalize(),b.crossVectors(S,t);let n=b.dot(s[e])<0?-1:1;a.setXYZW(e,y.x,y.y,y.z,n)}for(let e=0,t=n.count;e<t;++e)c[e]&&C(e);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new jo(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new V,i=new V,a=new V,o=new V,s=new V,c=new V,l=new V,u=new V;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Go.fromBufferAttribute(e,t),Go.normalize(),e.setXYZ(t,Go.x,Go.y,Go.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new jo(a,r,i)}if(this.index===null)return R(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},qo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=ii,this.updateRanges=[],this.version=0,this.uuid=xi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Jo(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),r=new this.constructor(n,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Jo(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Jo(e){return e.buffer._uuid===void 0&&(e.buffer._uuid=xi()),e.byteOffset===0&&e.byteLength===e.buffer.byteLength?e.buffer._uuid:e.buffer._uuid+`:`+e.byteOffset+`:`+e.byteLength}var Yo=new V,Xo=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r,this._normalizationScale=e===void 0?void 0:Vi(e.array)}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Yo.fromBufferAttribute(this,t),Yo.applyMatrix4(e),this.setXYZ(t,Yo.x,Yo.y,Yo.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Yo.fromBufferAttribute(this,t),Yo.applyNormalMatrix(e),this.setXYZ(t,Yo.x,Yo.y,Yo.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Yo.fromBufferAttribute(this,t),Yo.transformDirection(e),this.setXYZ(t,Yo.x,Yo.y,Yo.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){di(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new jo(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){di(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t===void 0?Hi(e,this.data.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?Ui(e,this.data.array):Math.round(e*t)}},Zo=new V,Qo=new V,$o=new H,es=class{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Zo.subVectors(n,t).cross(Qo.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Zo),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||$o.getNormalMatrix(e),r=this.coplanarPoint(Zo).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},ts=0,ns=class extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ts++}),this.uuid=xi(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new U(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ri,this.stencilZFail=ri,this.stencilZPass=ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){R(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?R(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new U().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new es().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new B().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new B().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},rs=class extends ns{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new U(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},is,as=new V,os=new V,ss=new V,cs=new B,ls=new B,us=new ma,ds=new V,fs=new V,ps=new V,ms=new B,hs=new B,gs=new B,_s=class extends Va{constructor(e=new rs){if(super(),this.isSprite=!0,this.type=`Sprite`,is===void 0){is=new Ko;let e=new qo(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);is.setIndex([0,1,2,0,2,3]),is.setAttribute(`position`,new Xo(e,3,0,!1)),is.setAttribute(`uv`,new Xo(e,2,3,!1))}this.geometry=is,this.material=e,this.center=new B(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&z(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),os.setFromMatrixScale(this.matrixWorld),us.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ss.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&os.multiplyScalar(-ss.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;vs(ds.set(-.5,-.5,0),ss,a,os,r,i),vs(fs.set(.5,-.5,0),ss,a,os,r,i),vs(ps.set(.5,.5,0),ss,a,os,r,i),ms.set(0,0),hs.set(1,0),gs.set(1,1);let o=e.ray.intersectTriangle(ds,fs,ps,!1,as);if(o===null&&(vs(fs.set(-.5,.5,0),ss,a,os,r,i),hs.set(0,1),o=e.ray.intersectTriangle(ds,ps,fs,!1,as),o===null))return;let s=e.ray.origin.distanceTo(as);s<e.near||s>e.far||t.push({distance:s,point:as.clone(),uv:fo.getInterpolation(as,ds,fs,ps,ms,hs,gs,new B),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function vs(e,t,n,r,i,a){cs.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?ls.copy(cs):(ls.x=a*cs.x-i*cs.y,ls.y=i*cs.x+a*cs.y),e.copy(t),e.x+=ls.x,e.y+=ls.y,e.applyMatrix4(us)}var ys=new V,bs=new V,xs=new V,Ss=new V,Cs=class{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ys)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ys.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ys.copy(this.origin).addScaledVector(this.direction,t),ys.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){bs.copy(e).add(t).multiplyScalar(.5),xs.copy(t).sub(e).normalize(),Ss.copy(this.origin).sub(bs);let i=e.distanceTo(t)*.5,a=-this.direction.dot(xs),o=Ss.dot(this.direction),s=-Ss.dot(xs),c=Ss.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(bs).addScaledVector(xs,d),f}intersectSphere(e,t){if(e.radius<0)return null;ys.subVectors(e.center,this.origin);let n=ys.dot(this.direction),r=ys.dot(ys)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ys)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,M,N;if(y>=b&&y>=x?(w=s,D=u,A=p,N=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,M=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,M=_)):b>=x?(w=c,D=d,A=m,N=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,M=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,M=v)):(w=l,D=f,A=h,N=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,M=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,M=g)),w===0)return null;let ee=S/w,te=C/w,ne=1/w,re=T-ee*D,ie=E-te*D,ae=O-ee*A,oe=k-te*A,se=j-ee*N,ce=M-te*N,le=se*oe-ce*ae,ue=re*ce-ie*se,de=ae*ie-oe*re;if(r){if(le<0||ue<0||de<0)return null}else if((le<0||ue<0||de<0)&&(le>0||ue>0||de>0))return null;let fe=le+ue+de;if(fe===0)return null;let pe=ne*(le*D+ue*A+de*N);return(fe>0?pe<0:pe>0)?null:this.at(pe/fe,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ws=class extends ns{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new U(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wa,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ts=new ma,Es=new Cs,Ds=new Ro,Os=new V,ks=new V,As=new V,js=new V,Ms=new V,Ns=new V,Ps=new V,Fs=new V,Is=class extends Va{constructor(e=new Ko,t=new ws){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Ns.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Ms.fromBufferAttribute(s,e),a?Ns.addScaledVector(Ms,r):Ns.addScaledVector(Ms.sub(t),r))}t.add(Ns)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ds.copy(n.boundingSphere),Ds.applyMatrix4(i),Es.copy(e.ray).recast(e.near),Ds.containsPoint(Es.origin)===!1&&(Es.intersectSphere(Ds,Os)===null||Es.origin.distanceToSquared(Os)>(e.far-e.near)**2)||(Ts.copy(i).invert(),Es.copy(e.ray).applyMatrix4(Ts),(n.boundingBox===null||Es.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Es)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Rs(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Rs(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Rs(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Rs(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Ls(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Fs.copy(s),Fs.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Fs);return l<n.near||l>n.far?null:{distance:l,point:Fs.clone(),object:e}}function Rs(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,ks),e.getVertexPosition(c,As),e.getVertexPosition(l,js);let u=Ls(e,t,n,r,ks,As,js,Ps);if(u){let e=new V;fo.getBarycoord(Ps,ks,As,js,e),i&&(u.uv=fo.getInterpolatedAttribute(i,s,c,l,e,new B)),a&&(u.uv1=fo.getInterpolatedAttribute(a,s,c,l,e,new B)),o&&(u.normal=fo.getInterpolatedAttribute(o,s,c,l,e,new V),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new V,materialIndex:0};fo.getNormal(ks,As,js,t.normal),u.face=t,u.barycoord=e}return u}var zs=class extends ca{constructor(e=null,t=1,n=1,r,i,a,o,s,c=Pn,l=Pn,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Bs=class extends jo{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Vs=new ma,Hs=new ma,Us=[],Ws=new po,Gs=new ma,Ks=new Is,qs=new Ro,Js=class extends Is{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Bs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Gs)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new po),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Vs),Ws.copy(e.boundingBox).applyMatrix4(Vs),this.boundingBox.union(Ws)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ro),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Vs),qs.copy(e.boundingSphere).applyMatrix4(Vs),this.boundingSphere.union(qs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture===null?null:e.morphTexture.clone(),this.instanceColor=e.instanceColor===null?null:e.instanceColor.clone(),this.count=e.count,this.boundingBox=e.boundingBox===null?null:e.boundingBox.clone(),this.boundingSphere=e.boundingSphere===null?null:e.boundingSphere.clone(),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Ks.geometry=this.geometry,Ks.material=this.material,Ks.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qs.copy(this.boundingSphere),qs.applyMatrix4(n),e.ray.intersectsSphere(qs)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,Vs),Hs.multiplyMatrices(n,Vs),Ks.matrixWorld=Hs,Ks.raycast(e,Us);for(let e=0,n=Us.length;e<n;e++){let n=Us[e];n.instanceId=i,n.object=this,t.push(n)}Us.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Bs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new zs(new Float32Array(r*this.count),r,this.count,ir,Kn));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ys=new Ro,Xs=new B(.5,.5),Zs=new V,Qs=class{constructor(e=new es,t=new es,n=new es,r=new es,i=new es,a=new es){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ai,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ys.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ys.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ys)}intersectsSprite(e){return Ys.center.set(0,0,0),Ys.radius=.7071067811865476+Xs.distanceTo(e.center),Ys.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ys)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Zs.x=r.normal.x>0?e.max.x:e.min.x,Zs.y=r.normal.y>0?e.max.y:e.min.y,Zs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Zs)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},$s=new ma,ec=class e{constructor(){this.coordinateSystem=ai,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let e=0;e<t.length;e++){let r=t[e];$s.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[e]===void 0&&(n[e]=new Qs),n[e].setFromProjectionMatrix($s,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new Qs),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new e().copy(this)}},tc=class extends ns{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new U(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},nc=new ma,rc=new Cs,ic=new Ro,ac=new V,oc=class extends Va{constructor(e=new Ko,t=new tc){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ic.copy(n.boundingSphere),ic.applyMatrix4(r),ic.radius+=i,e.ray.intersectsSphere(ic)===!1)return;nc.copy(r).invert(),rc.copy(e.ray).applyMatrix4(nc);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);ac.fromBufferAttribute(l,n),sc(ac,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)ac.fromBufferAttribute(l,a),sc(ac,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function sc(e,t,n,r,i,a,o){let s=rc.distanceSqToPoint(e);if(s<n){let n=new V;rc.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var cc=class extends ca{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},lc=class extends ca{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},uc=class extends ca{constructor(e,t,n=Gn,r,i,a,o=Pn,s=Pn,c,l=nr,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ia(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},dc=class extends uc{constructor(e,t=Gn,n=301,r,i,a=Pn,o=Pn,s,c=nr){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},fc=class extends ca{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},pc=class e extends Ko{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Po(c,3)),this.setAttribute(`normal`,new Po(l,3)),this.setAttribute(`uv`,new Po(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new V;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},mc=class e extends Ko{constructor(e=1,t=1,n=4,r=8,i=1){super(),this.type=`CapsuleGeometry`,this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:i},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),i=Math.max(1,Math.floor(i));let a=[],o=[],s=[],c=[],l=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+i,m=r+1,h=new V,g=new V;for(let _=0;_<=p;_++){let v=0,y=0,b=0,x=0;if(_<=n){let t=_/n,r=t*Math.PI/2;y=-l-e*Math.cos(r),b=e*Math.sin(r),x=-e*Math.cos(r),v=t*u}else if(_<=n+i){let r=(_-n)/i;y=-l+r*t,b=e,x=0,v=u+r*d}else{let t=(_-n-i)/n,r=t*Math.PI/2;y=l+e*Math.sin(r),b=e*Math.cos(r),x=e*Math.sin(r),v=u+d+t*u}let S=Math.max(0,Math.min(1,v/f)),C=0;_===0?C=.5/r:_===p&&(C=-.5/r);for(let e=0;e<=r;e++){let t=e/r,n=t*Math.PI*2,i=Math.sin(n),a=Math.cos(n);g.x=-b*a,g.y=y,g.z=b*i,o.push(g.x,g.y,g.z),h.set(-b*a,x,b*i),h.normalize(),s.push(h.x,h.y,h.z),c.push(t+C,S)}if(_>0){let e=(_-1)*m;for(let t=0;t<r;t++){let n=e+t,r=e+t+1,i=_*m+t,o=_*m+t+1;a.push(n,r,i),a.push(r,o,i)}}}this.setIndex(a),this.setAttribute(`position`,new Po(o,3)),this.setAttribute(`normal`,new Po(s,3)),this.setAttribute(`uv`,new Po(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},hc=class e extends Ko{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new V,l=new B;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new Po(a,3)),this.setAttribute(`normal`,new Po(o,3)),this.setAttribute(`uv`,new Po(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},gc=class e extends Ko{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new Po(u,3)),this.setAttribute(`normal`,new Po(d,3)),this.setAttribute(`uv`,new Po(f,2));function _(){let a=new V,_=new V,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new B,m=new V,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},_c=class e extends gc{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},vc=class e extends Ko{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new Po(i,3)),this.setAttribute(`normal`,new Po(i.slice(),3)),this.setAttribute(`uv`,new Po(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new V,r=new V,i=new V;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new V;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new V;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new V,t=new V,n=new V,r=new V,o=new B,s=new B,c=new B;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},yc=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){R(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new B:new V);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new V,r=[],i=[],a=[],o=new V,s=new ma;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new V)}i[0]=new V,a[0]=new V;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(Si(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(Si(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},bc=class extends yc{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new B){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},xc=class extends bc{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function Sc(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var Cc=new V,wc=new V,Tc=new Sc,Ec=new Sc,Dc=new Sc,Oc=class extends yc{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new V){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(wc.subVectors(r[0],r[1]).add(r[0]),c=wc);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(Cc.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=Cc),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),Tc.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),Ec.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),Dc.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(Tc.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),Ec.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),Dc.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(Tc.calc(s),Ec.calc(s),Dc.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new V().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function kc(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function Ac(e,t){let n=1-e;return n*n*t}function jc(e,t){return 2*(1-e)*e*t}function Mc(e,t){return e*e*t}function Nc(e,t,n,r){return Ac(e,t)+jc(e,n)+Mc(e,r)}function Pc(e,t){let n=1-e;return n*n*n*t}function Fc(e,t){let n=1-e;return 3*n*n*e*t}function Ic(e,t){return 3*(1-e)*e*e*t}function Lc(e,t){return e*e*e*t}function Rc(e,t,n,r,i){return Pc(e,t)+Fc(e,n)+Ic(e,r)+Lc(e,i)}var zc=class extends yc{constructor(e=new B,t=new B,n=new B,r=new B){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new B){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Rc(e,r.x,i.x,a.x,o.x),Rc(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Bc=class extends yc{constructor(e=new V,t=new V,n=new V,r=new V){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new V){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Rc(e,r.x,i.x,a.x,o.x),Rc(e,r.y,i.y,a.y,o.y),Rc(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Vc=class extends yc{constructor(e=new B,t=new B){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new B){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Hc=class extends yc{constructor(e=new V,t=new V){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new V){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new V){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Uc=class extends yc{constructor(e=new B,t=new B,n=new B){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new B){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Nc(e,r.x,i.x,a.x),Nc(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wc=class extends yc{constructor(e=new V,t=new V,n=new V){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new V){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Nc(e,r.x,i.x,a.x),Nc(e,r.y,i.y,a.y),Nc(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Gc=class extends yc{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new B){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(kc(o,s.x,c.x,l.x,u.x),kc(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new B().fromArray(n))}return this}},Kc=Object.freeze({__proto__:null,ArcCurve:xc,CatmullRomCurve3:Oc,CubicBezierCurve:zc,CubicBezierCurve3:Bc,EllipseCurve:bc,LineCurve:Vc,LineCurve3:Hc,QuadraticBezierCurve:Uc,QuadraticBezierCurve3:Wc,SplineCurve:Gc}),qc=class extends yc{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new Kc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new Kc[n.type]().fromJSON(n))}return this.cacheLengths=null,this}},Jc=class extends qc{constructor(e){super(),this.type=`Path`,this.currentPoint=new B,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Vc(this.currentPoint.clone(),new B(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new Uc(this.currentPoint.clone(),new B(e,t),new B(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new zc(this.currentPoint.clone(),new B(e,t),new B(n,r),new B(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new Gc([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new bc(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Yc=class extends Jc{constructor(e){super(e),this.uuid=xi(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new Jc().fromJSON(n))}return this}};function Xc(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=Zc(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=il(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return $c(a,o,n,s,c,l,0),o}function Zc(e,t,n,r,i){let a;if(i===Ol(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=Tl(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=Tl(i/r|0,e[i],e[i+1],a);return a&&_l(a,a.next)&&(El(a),a=a.next),a}function Qc(e,t){if(!e)return e;t||(t=e);let n=e,r;do if(r=!1,!n.steiner&&(_l(n,n.next)||gl(n.prev,n,n.next)===0)){if(El(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function $c(e,t,n,r,i,a,o){if(!e)return;!o&&a&&ll(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?tl(e,r,i,a):el(e))t.push(c.i,e.i,l.i),El(e),e=l.next,s=l.next;else if(e=l,e===s){o?o===1?(e=nl(Qc(e),t),$c(e,t,n,r,i,a,2)):o===2&&rl(e,t,n,r,i,a):$c(Qc(e),t,n,r,i,a,1);break}}}function el(e){let t=e.prev,n=e,r=e.next;if(gl(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&ml(i,s,a,c,o,l,m.x,m.y)&&gl(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function tl(e,t,n,r){let i=e.prev,a=e,o=e.next;if(gl(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=dl(p,m,t,n,r),v=dl(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&ml(s,u,c,d,l,f,y.x,y.y)&&gl(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&ml(s,u,c,d,l,f,b.x,b.y)&&gl(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&ml(s,u,c,d,l,f,y.x,y.y)&&gl(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&ml(s,u,c,d,l,f,b.x,b.y)&&gl(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function nl(e,t){let n=e;do{let r=n.prev,i=n.next.next;!_l(r,i)&&vl(r,n,n.next,i)&&Sl(r,i)&&Sl(i,r)&&(t.push(r.i,n.i,i.i),El(n),El(n.next),n=e=i),n=n.next}while(n!==e);return Qc(n)}function rl(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&hl(o,e)){let s=wl(o,e);o=Qc(o,o.next),s=Qc(s,s.next),$c(o,t,n,r,i,a,0),$c(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function il(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=Zc(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(fl(o))}i.sort(al);for(let e=0;e<i.length;e++)n=ol(i[e],n);return n}function al(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function ol(e,t){let n=sl(e,t);if(!n)return t;let r=wl(n,e);return Qc(r,r.next),Qc(n,n.next)}function sl(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(_l(e,n))return n;do{if(_l(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&pl(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);Sl(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&cl(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function cl(e,t){return gl(e.prev,e,t.prev)<0&&gl(t.next,e,e.next)<0}function ll(e,t,n,r){let i=e;do i.z===0&&(i.z=dl(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,ul(i)}function ul(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function dl(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function fl(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function pl(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function ml(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&pl(e,t,n,r,i,a,o,s)}function hl(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!xl(e,t)&&(Sl(e,t)&&Sl(t,e)&&Cl(e,t)&&(gl(e.prev,e,t.prev)||gl(e,t.prev,t))||_l(e,t)&&gl(e.prev,e,e.next)>0&&gl(t.prev,t,t.next)>0)}function gl(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function _l(e,t){return e.x===t.x&&e.y===t.y}function vl(e,t,n,r){let i=bl(gl(e,t,n)),a=bl(gl(e,t,r)),o=bl(gl(n,r,e)),s=bl(gl(n,r,t));return!!(i!==a&&o!==s||i===0&&yl(e,n,t)||a===0&&yl(e,r,t)||o===0&&yl(n,e,r)||s===0&&yl(n,t,r))}function yl(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function bl(e){return e>0?1:e<0?-1:0}function xl(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&vl(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function Sl(e,t){return gl(e.prev,e,e.next)<0?gl(e,t,e.next)>=0&&gl(e,e.prev,t)>=0:gl(e,t,e.prev)<0||gl(e,e.next,t)<0}function Cl(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function wl(e,t){let n=Dl(e.i,e.x,e.y),r=Dl(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function Tl(e,t,n,r){let i=Dl(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function El(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Dl(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ol(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var kl=class{static triangulate(e,t,n=2){return Xc(e,t,n)}},Al=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];jl(e),Ml(n,e);let a=e.length;t.forEach(jl);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,Ml(n,t[e]);let o=kl.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function jl(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Ml(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var Nl=class e extends vc{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Pl=class e extends Ko{constructor(e=[new B(0,-.5),new B(.5,0),new B(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type=`LatheGeometry`,this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=Si(r,0,Math.PI*2);let i=[],a=[],o=[],s=[],c=[],l=1/t,u=new V,d=new B,f=new V,p=new V,m=new V,h=0,g=0;for(let t=0;t<=e.length-1;t++)switch(t){case 0:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,m.copy(f),f.normalize(),s.push(f.x,f.y,f.z);break;case e.length-1:m.normalize(),s.push(m.x,m.y,m.z);break;default:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,p.copy(f),f.x+=m.x,f.y+=m.y,f.z+=m.z,f.normalize(),s.push(f.x,f.y,f.z),m.copy(p)}for(let i=0;i<=t;i++){let f=n+i*l*r,p=Math.sin(f),m=Math.cos(f);for(let n=0;n<=e.length-1;n++){u.x=e[n].x*p,u.y=e[n].y,u.z=e[n].x*m,a.push(u.x,u.y,u.z),d.x=i/t,d.y=n/(e.length-1),o.push(d.x,d.y);let r=s[3*n+0]*p,l=s[3*n+1],f=s[3*n+0]*m;c.push(r,l,f)}}for(let n=0;n<t;n++)for(let t=0;t<e.length-1;t++){let r=t+n*e.length,a=r,o=r+e.length,s=r+e.length+1,c=r+1;i.push(a,o,c),i.push(s,c,o)}this.setIndex(i),this.setAttribute(`position`,new Po(a,3)),this.setAttribute(`uv`,new Po(o,2)),this.setAttribute(`normal`,new Po(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.points,t.segments,t.phiStart,t.phiLength)}},Fl=class e extends Ko{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Po(p,3)),this.setAttribute(`normal`,new Po(m,3)),this.setAttribute(`uv`,new Po(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Il=class e extends Ko{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new V,p=new B;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new Po(s,3)),this.setAttribute(`normal`,new Po(c,3)),this.setAttribute(`uv`,new Po(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Ll=class e extends Ko{constructor(e=new Yc([new B(0,.5),new B(-.5,-.5),new B(.5,-.5)]),t=12){super(),this.type=`ShapeGeometry`,this.parameters={shapes:e,curveSegments:t};let n=[],r=[],i=[],a=[],o=0,s=0;if(Array.isArray(e)===!1)c(e);else for(let t=0;t<e.length;t++)c(e[t]),this.addGroup(o,s,t),o+=s,s=0;this.setIndex(n),this.setAttribute(`position`,new Po(r,3)),this.setAttribute(`normal`,new Po(i,3)),this.setAttribute(`uv`,new Po(a,2));function c(e){let o=r.length/3,c=e.extractPoints(t),l=c.shape,u=c.holes;Al.isClockWise(l)===!1&&(l=l.reverse());for(let e=0,t=u.length;e<t;e++){let t=u[e];Al.isClockWise(t)===!0&&(u[e]=t.reverse())}let d=Al.triangulateShape(l,u);for(let e=0,t=u.length;e<t;e++){let t=u[e];l=l.concat(t)}for(let e=0,t=l.length;e<t;e++){let t=l[e];r.push(t.x,t.y,0),i.push(0,0,1),a.push(t.x,t.y)}for(let e=0,t=d.length;e<t;e++){let t=d[e],r=t[0]+o,i=t[1]+o,a=t[2]+o;n.push(r,i,a),s+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Rl(t,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}return new e(r,t.curveSegments)}};function Rl(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}var zl=class e extends Ko{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new V,d=new V,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new Po(p,3)),this.setAttribute(`normal`,new Po(m,3)),this.setAttribute(`uv`,new Po(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Bl=class e extends Ko{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new V,f=new V,p=new V;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new Po(c,3)),this.setAttribute(`normal`,new Po(l,3)),this.setAttribute(`uv`,new Po(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Vl(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Ul(i))i.isRenderTargetTexture?(R(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Ul(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Hl(e){let t={};for(let n=0;n<e.length;n++){let r=Vl(e[n]);for(let e in r)t[e]=r[e]}return t}function Ul(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Wl(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Gl(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qi.workingColorSpace}var Kl={clone:Vl,merge:Hl},ql=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Yl=class extends ns{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ql,this.fragmentShader=Jl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vl(e.uniforms),this.uniformsGroups=Wl(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new U().setHex(r.value);break;case`v2`:this.uniforms[n].value=new B().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new V().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new la().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new H().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new ma().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Xl=class extends Yl{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Zl=class extends ns{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:``},this.type=`MeshToonMaterial`,this.color=new U(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new U(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new B(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ql=class extends ns{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new U(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new U(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new B(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wa,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},$l=class extends ns{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Qr,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},eu=class extends ns{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function tu(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function nu(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var ru=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},iu=class extends ru{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yr,endingEnd:Yr}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Xr:i=e,o=2*t-n;break;case Zr:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Xr:a=e,s=2*n-t;break;case Zr:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},au=class extends ru{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},ou=class extends ru{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},su=class extends ru{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=uu(n,t,g,y,r);i[p]=cu(x,o,_,b,m)}return i}};function cu(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function lu(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function uu(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=cu(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=lu(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var du=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=tu(t,this.TimeBufferType),this.values=tu(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:tu(e.times,Array),values:tu(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),nu(e.settings)&&(n.settings={inTangents:tu(e.settings.inTangents,Array),outTangents:tu(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ou(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new au(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new iu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new su(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Gr:t=this.InterpolantFactoryMethodDiscrete;break;case Kr:t=this.InterpolantFactoryMethodLinear;break;case qr:t=this.InterpolantFactoryMethodSmooth;break;case Jr:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return R(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Gr;case this.InterpolantFactoryMethodLinear:return Kr;case this.InterpolantFactoryMethodSmooth:return qr;case this.InterpolantFactoryMethodBezier:return Jr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;nu(this.settings)&&(fu(this.settings.inTangents,e),fu(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;nu(this.settings)&&(pu(this.settings.inTangents,e),pu(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(z(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(z(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){z(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){z(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&si(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){z(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===qr,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,nu(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function fu(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]+=t}function pu(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}du.prototype.ValueTypeName=``,du.prototype.TimeBufferType=Float32Array,du.prototype.ValueBufferType=Float32Array,du.prototype.DefaultInterpolation=Kr;var mu=class extends du{constructor(e,t,n){super(e,t,n)}};mu.prototype.ValueTypeName=`bool`,mu.prototype.ValueBufferType=Array,mu.prototype.DefaultInterpolation=Gr,mu.prototype.InterpolantFactoryMethodLinear=void 0,mu.prototype.InterpolantFactoryMethodSmooth=void 0;var hu=class extends du{constructor(e,t,n,r){super(e,t,n,r)}};hu.prototype.ValueTypeName=`color`;var gu=class extends du{constructor(e,t,n,r){super(e,t,n,r)}};gu.prototype.ValueTypeName=`number`;var _u=class extends ru{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Gi.slerpFlat(i,0,a,c-o,a,c,s);return i}},vu=class extends du{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new _u(this.times,this.values,this.getValueSize(),e)}};vu.prototype.ValueTypeName=`quaternion`,vu.prototype.InterpolantFactoryMethodSmooth=void 0;var yu=class extends du{constructor(e,t,n){super(e,t,n)}};yu.prototype.ValueTypeName=`string`,yu.prototype.ValueBufferType=Array,yu.prototype.DefaultInterpolation=Gr,yu.prototype.InterpolantFactoryMethodLinear=void 0,yu.prototype.InterpolantFactoryMethodSmooth=void 0;var bu=class extends du{constructor(e,t,n,r){super(e,t,n,r)}};bu.prototype.ValueTypeName=`vector`;var xu=class extends Va{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new U(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Su=class extends xu{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Va.DEFAULT_UP),this.updateMatrix(),this.groundColor=new U(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Cu=new ma,wu=new V,Tu=new V,Eu=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new B(512,512),this.mapType=Bn,this.map=null,this.mapPass=null,this.matrix=new ma,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qs,this._frameExtents=new B(1,1),this._viewportCount=1,this._viewports=[new la(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;wu.setFromMatrixPosition(e.matrixWorld),t.position.copy(wu),Tu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Tu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Cu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Cu,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Cu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Du=new V,Ou=new Gi,ku=new V,Au=class extends Va{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new ma,this.projectionMatrix=new ma,this.projectionMatrixInverse=new ma,this.coordinateSystem=ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Du,Ou,ku),ku.x===1&&ku.y===1&&ku.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Du,Ou,ku.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Du,Ou,ku),ku.x===1&&ku.y===1&&ku.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Du,Ou,ku.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ju=new V,Mu=new B,Nu=new B,Pu=class extends Au{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=bi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(yi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bi*2*Math.atan(Math.tan(yi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ju.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ju.x,ju.y).multiplyScalar(-e/ju.z),ju.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ju.x,ju.y).multiplyScalar(-e/ju.z)}getViewSize(e,t){return this.getViewBounds(e,Mu,Nu),t.subVectors(Nu,Mu)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(yi*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Fu=class extends Au{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Iu=class extends Eu{constructor(){super(new Fu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Lu=class extends xu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Va.DEFAULT_UP),this.updateMatrix(),this.target=new Va,this.shadow=new Iu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Ru=-90,zu=1,Bu=class extends Va{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Pu(Ru,zu,e,t);r.layers=this.layers,this.add(r);let i=new Pu(Ru,zu,e,t);i.layers=this.layers,this.add(i);let a=new Pu(Ru,zu,e,t);a.layers=this.layers,this.add(a);let o=new Pu(Ru,zu,e,t);o.layers=this.layers,this.add(o);let s=new Pu(Ru,zu,e,t);s.layers=this.layers,this.add(s);let c=new Pu(Ru,zu,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Vu=class extends Pu{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Hu=`\\[\\]\\.:\\/`,Uu=RegExp(`[\\[\\]\\.:\\/]`,`g`),Wu=`[^\\[\\]\\.:\\/]`,Gu=`[^`+Hu.replace(`\\.`,``)+`]`,Ku=`((?:WC+[\\/:])*)`.replace(`WC`,Wu),qu=`(WCOD+)?`.replace(`WCOD`,Gu),Ju=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Wu),Yu=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Wu),Xu=RegExp(`^`+Ku+qu+Ju+Yu+`$`),Zu=[`material`,`materials`,`bones`,`map`],Qu=class{constructor(e,t,n){let r=n||$u.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},$u=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Uu,``)}static parseTrackName(e){let t=Xu.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Zu.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){R(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){z(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){z(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){z(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){z(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){z(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){z(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){z(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;z(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){z(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){z(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};$u.Composite=Qu,$u.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},$u.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},$u.prototype.GetterByBindingType=[$u.prototype._getValue_direct,$u.prototype._getValue_array,$u.prototype._getValue_arrayElement,$u.prototype._getValue_toArray],$u.prototype.SetterByBindingTypeAndVersioning=[[$u.prototype._setValue_direct,$u.prototype._setValue_direct_setNeedsUpdate,$u.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$u.prototype._setValue_array,$u.prototype._setValue_array_setNeedsUpdate,$u.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$u.prototype._setValue_arrayElement,$u.prototype._setValue_arrayElement_setNeedsUpdate,$u.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$u.prototype._setValue_fromArray,$u.prototype._setValue_fromArray_setNeedsUpdate,$u.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],Dn=class{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}},Dn.prototype.isMatrix2=!0;function ed(e,t,n,r){let i=td(r);switch(n){case $n:return e*t;case ir:return e*t/i.components*i.byteLength;case ar:return e*t/i.components*i.byteLength;case or:return e*t*2/i.components*i.byteLength;case sr:return e*t*2/i.components*i.byteLength;case er:return e*t*3/i.components*i.byteLength;case tr:return e*t*4/i.components*i.byteLength;case cr:return e*t*4/i.components*i.byteLength;case lr:case ur:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case dr:case fr:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case mr:case gr:return Math.max(e,16)*Math.max(t,8)/4;case pr:case hr:return Math.max(e,8)*Math.max(t,8)/2;case _r:case vr:case br:case xr:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case yr:case Sr:case Cr:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case wr:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Tr:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Er:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Dr:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Or:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case kr:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Ar:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case jr:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Mr:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Nr:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Pr:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Fr:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Ir:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Lr:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Rr:case zr:case Br:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Vr:case Hr:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Ur:case Wr:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function td(e){switch(e){case Bn:case Vn:return{byteLength:1,components:1};case Un:case Hn:case qn:return{byteLength:2,components:1};case Jn:case Yn:return{byteLength:2,components:4};case Gn:case Wn:case Kn:return{byteLength:4,components:1};case Zn:case Qn:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`187`}})),typeof window<`u`&&(window.__THREE__?R(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`187`);function nd(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function rd(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var W={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},G={common:{diffuse:{value:new U(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new H},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new H}},envmap:{envMap:{value:null},envMapRotation:{value:new H},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new H}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new H}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new H},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new H},normalScale:{value:new B(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new H},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new H}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new H}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new H}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new U(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new U(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0},uvTransform:{value:new H}},sprite:{diffuse:{value:new U(16777215)},opacity:{value:1},center:{value:new B(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new H},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0}}},id={basic:{uniforms:Hl([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.fog]),vertexShader:W.meshbasic_vert,fragmentShader:W.meshbasic_frag},lambert:{uniforms:Hl([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.fog,G.lights,{emissive:{value:new U(0)},envMapIntensity:{value:1}}]),vertexShader:W.meshlambert_vert,fragmentShader:W.meshlambert_frag},phong:{uniforms:Hl([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.fog,G.lights,{emissive:{value:new U(0)},specular:{value:new U(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:W.meshphong_vert,fragmentShader:W.meshphong_frag},standard:{uniforms:Hl([G.common,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.roughnessmap,G.metalnessmap,G.fog,G.lights,{emissive:{value:new U(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:W.meshphysical_vert,fragmentShader:W.meshphysical_frag},toon:{uniforms:Hl([G.common,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.gradientmap,G.fog,G.lights,{emissive:{value:new U(0)}}]),vertexShader:W.meshtoon_vert,fragmentShader:W.meshtoon_frag},matcap:{uniforms:Hl([G.common,G.bumpmap,G.normalmap,G.displacementmap,G.fog,{matcap:{value:null}}]),vertexShader:W.meshmatcap_vert,fragmentShader:W.meshmatcap_frag},points:{uniforms:Hl([G.points,G.fog]),vertexShader:W.points_vert,fragmentShader:W.points_frag},dashed:{uniforms:Hl([G.common,G.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:W.linedashed_vert,fragmentShader:W.linedashed_frag},depth:{uniforms:Hl([G.common,G.displacementmap]),vertexShader:W.depth_vert,fragmentShader:W.depth_frag},normal:{uniforms:Hl([G.common,G.bumpmap,G.normalmap,G.displacementmap,{opacity:{value:1}}]),vertexShader:W.meshnormal_vert,fragmentShader:W.meshnormal_frag},sprite:{uniforms:Hl([G.sprite,G.fog]),vertexShader:W.sprite_vert,fragmentShader:W.sprite_frag},background:{uniforms:{uvTransform:{value:new H},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:W.background_vert,fragmentShader:W.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new H}},vertexShader:W.backgroundCube_vert,fragmentShader:W.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:W.cube_vert,fragmentShader:W.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:W.equirect_vert,fragmentShader:W.equirect_frag},distance:{uniforms:Hl([G.common,G.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:W.distance_vert,fragmentShader:W.distance_frag},shadow:{uniforms:Hl([G.lights,G.fog,{color:{value:new U(0)},opacity:{value:1}}]),vertexShader:W.shadow_vert,fragmentShader:W.shadow_frag}};id.physical={uniforms:Hl([id.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new H},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new H},clearcoatNormalScale:{value:new B(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new H},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new H},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new H},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new H},sheen:{value:0},sheenColor:{value:new U(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new H},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new H},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new H},transmissionSamplerSize:{value:new B},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new H},attenuationDistance:{value:0},attenuationColor:{value:new U(0)},specularColor:{value:new U(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new H},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new H},anisotropyVector:{value:new B},anisotropyMap:{value:null},anisotropyMapTransform:{value:new H}}]),vertexShader:W.meshphysical_vert,fragmentShader:W.meshphysical_frag};var ad={r:0,b:0,g:0},od=new ma,sd=new H;sd.set(-1,0,0,0,1,0,0,0,1);function cd(e,t,n,r,i,a){let o=new U(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&i.isCubeTexture?(l===void 0&&(l=new Is(new pc(1,1,1),new Yl({name:`BackgroundCubeMaterial`,uniforms:Vl(id.backgroundCube.uniforms),vertexShader:id.backgroundCube.vertexShader,fragmentShader:id.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(od.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(sd),l.material.toneMapped=Qi.getTransfer(i.colorSpace)!==ni,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new Is(new Fl(2,2),new Yl({name:`BackgroundMaterial`,uniforms:Vl(id.background.uniforms),vertexShader:id.background.vertexShader,fragmentShader:id.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Qi.getTransfer(i.colorSpace)!==ni,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(ad,Gl(e)),n.buffers.color.setClear(ad.r,ad.g,ad.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function ld(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function ud(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function dd(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(R(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&R(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&R(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function fd(e){let t=this,n=null,r=0,i=!1,a=!1,o=new es,s=new H,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var pd=class extends da{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new cc(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new pc(5,5,5),i=new Yl({name:`CubemapFromEquirect`,uniforms:Vl(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Is(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=Ln),new Bu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},md=256,hd=3,gd=20,_d=256,vd=16,yd=3,bd=new V,xd=new U,Sd=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Bu(1,10,null),this._boxMesh=new Is(new pc(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=bd}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(xd));let h=new Bu(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Od(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(md,zi(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?md:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Cd(e,!1,!1),n=Math.log2(e)-hd;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Cd(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=kd()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Od()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Td(),this._integrationMaterial=Ed());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/vd);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-yd)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(_d*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Dd());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function Cd(e,t,n){return new pd(e,{minFilter:zn,generateMipmaps:t,type:qn,colorSpace:ei,depthBuffer:n})}function wd(e,t,n){return new Yl({name:e,uniforms:t,vertexShader:W.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function Td(){return wd(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${_d}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Ed(){return wd(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:vd}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Dd(){return wd(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${gd}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Od(){return wd(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function kd(){return wd(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Ad(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new pd(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Sd(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Sd(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function jd(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&pi(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Md(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?No:Mo)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function Nd(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Pd(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:z(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Fd(e,t,n){let r=new WeakMap,i=new la;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new fa(h,p,m,u);g.type=Kn,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new B(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Id(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Ld={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Rd(e,t,n,r,i,a){let o=new da(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=null,u=new Ko;u.setAttribute(`position`,new Po([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new Po([0,2,0,0,2,0],2));let d=new Xl({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Is(u,d),p=new Fu(-1,1,1,-1,0,1),m=null,h=null,g=!1,_,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new da(t,n,{type:qn,depthBuffer:!1,stencilBuffer:!1}),c=new da(t,n,{type:qn,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&y.some(e=>e.needsDepthTexture===!0);r!==(o.depthTexture!==null)&&(r===!0&&l===null&&(l=new uc(t,n),a===!0&&(l.format=rr,l.type=Xn)),o.dispose(),o.depthTexture=r?l:null,o.resolveDepthBuffer=r,o.storeMultisampledDepthBuffer=r);for(let e=0;e<y.length;e++){let i=y[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(l)}},this.begin=function(e,t){if(g||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=_,g=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,d.defines={},Qi.getTransfer(m)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let t=Ld[h];t&&(d.defines[t]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(f,p),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}var zd=new ca,Bd=new uc(1,1),Vd=new dc(1),Hd=new fa,Ud=new pa,Wd=new cc,Gd=[],Kd=[],qd=new Float32Array(16),Jd=new Float32Array(9),Yd=new Float32Array(4);function Xd(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Gd[i];if(a===void 0&&(a=new Float32Array(i),Gd[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Zd(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Qd(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function $d(e,t){let n=Kd[t];n===void 0&&(n=new Int32Array(t),Kd[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function ef(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function tf(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Zd(n,t))return;e.uniform2fv(this.addr,t),Qd(n,t)}}function nf(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Zd(n,t))return;e.uniform3fv(this.addr,t),Qd(n,t)}}function rf(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Zd(n,t))return;e.uniform4fv(this.addr,t),Qd(n,t)}}function af(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Zd(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Qd(n,t)}else{if(Zd(n,r))return;Yd.set(r),e.uniformMatrix2fv(this.addr,!1,Yd),Qd(n,r)}}function of(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Zd(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Qd(n,t)}else{if(Zd(n,r))return;Jd.set(r),e.uniformMatrix3fv(this.addr,!1,Jd),Qd(n,r)}}function sf(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Zd(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Qd(n,t)}else{if(Zd(n,r))return;qd.set(r),e.uniformMatrix4fv(this.addr,!1,qd),Qd(n,r)}}function cf(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function lf(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Zd(n,t))return;e.uniform2iv(this.addr,t),Qd(n,t)}}function uf(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Zd(n,t))return;e.uniform3iv(this.addr,t),Qd(n,t)}}function df(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Zd(n,t))return;e.uniform4iv(this.addr,t),Qd(n,t)}}function ff(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function pf(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Zd(n,t))return;e.uniform2uiv(this.addr,t),Qd(n,t)}}function mf(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Zd(n,t))return;e.uniform3uiv(this.addr,t),Qd(n,t)}}function hf(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Zd(n,t))return;e.uniform4uiv(this.addr,t),Qd(n,t)}}function gf(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function _f(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?gf(Bd):zd,n.setTexture2D(t||a,i)}function vf(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Ud,i)}function yf(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?gf(Vd):Wd,n.setTextureCube(t||a,i)}function bf(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Hd,i)}function xf(e){switch(e){case 5126:return ef;case 35664:return tf;case 35665:return nf;case 35666:return rf;case 35674:return af;case 35675:return of;case 35676:return sf;case 5124:case 35670:return cf;case 35667:case 35671:return lf;case 35668:case 35672:return uf;case 35669:case 35673:return df;case 5125:return ff;case 36294:return pf;case 36295:return mf;case 36296:return hf;case 35678:case 36198:case 36298:case 36306:case 35682:return _f;case 35679:case 36299:case 36307:return vf;case 35680:case 36300:case 36308:case 36293:return yf;case 36289:case 36303:case 36311:case 36292:return bf}}function Sf(e,t){e.uniform1fv(this.addr,t)}function Cf(e,t){let n=Xd(t,this.size,2);e.uniform2fv(this.addr,n)}function wf(e,t){let n=Xd(t,this.size,3);e.uniform3fv(this.addr,n)}function Tf(e,t){let n=Xd(t,this.size,4);e.uniform4fv(this.addr,n)}function Ef(e,t){let n=Xd(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Df(e,t){let n=Xd(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Of(e,t){let n=Xd(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function kf(e,t){e.uniform1iv(this.addr,t)}function Af(e,t){e.uniform2iv(this.addr,t)}function jf(e,t){e.uniform3iv(this.addr,t)}function Mf(e,t){e.uniform4iv(this.addr,t)}function Nf(e,t){e.uniform1uiv(this.addr,t)}function Pf(e,t){e.uniform2uiv(this.addr,t)}function Ff(e,t){e.uniform3uiv(this.addr,t)}function If(e,t){e.uniform4uiv(this.addr,t)}function Lf(e,t,n){let r=this.cache,i=t.length,a=$d(n,i);Zd(r,a)||(e.uniform1iv(this.addr,a),Qd(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?gf(Bd):zd;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Rf(e,t,n){let r=this.cache,i=t.length,a=$d(n,i);Zd(r,a)||(e.uniform1iv(this.addr,a),Qd(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Ud,a[e])}function zf(e,t,n){let r=this.cache,i=t.length,a=$d(n,i);Zd(r,a)||(e.uniform1iv(this.addr,a),Qd(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?gf(Vd):Wd;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function Bf(e,t,n){let r=this.cache,i=t.length,a=$d(n,i);Zd(r,a)||(e.uniform1iv(this.addr,a),Qd(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Hd,a[e])}function Vf(e){switch(e){case 5126:return Sf;case 35664:return Cf;case 35665:return wf;case 35666:return Tf;case 35674:return Ef;case 35675:return Df;case 35676:return Of;case 5124:case 35670:return kf;case 35667:case 35671:return Af;case 35668:case 35672:return jf;case 35669:case 35673:return Mf;case 5125:return Nf;case 36294:return Pf;case 36295:return Ff;case 36296:return If;case 35678:case 36198:case 36298:case 36306:case 35682:return Lf;case 35679:case 36299:case 36307:return Rf;case 35680:case 36300:case 36308:case 36293:return zf;case 36289:case 36303:case 36311:case 36292:return Bf}}var Hf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=xf(t.type)}},Uf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Vf(t.type)}},Wf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Gf=/(\w+)(\])?(\[|\.)?/g;function Kf(e,t){e.seq.push(t),e.map[t.id]=t}function qf(e,t,n){let r=e.name,i=r.length;for(Gf.lastIndex=0;;){let a=Gf.exec(r),o=Gf.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Kf(n,l===void 0?new Hf(s,e,t):new Uf(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Wf(s),Kf(n,e)),n=e}}}var Jf=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);qf(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Yf(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Xf=37297,Zf=0;function Qf(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var $f=new H;function ep(e){Qi._getMatrix($f,Qi.workingColorSpace,e);let t=`mat3( ${$f.elements.map(e=>e.toFixed(4))} )`;switch(Qi.getTransfer(e)){case ti:return[t,`LinearTransferOETF`];case ni:return[t,`sRGBTransferOETF`];default:return R(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function tp(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Qf(e.getShaderSource(t),r)}return i}function np(e,t){let n=ep(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var rp={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function ip(e,t){let n=rp[t];return n===void 0?(R(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var ap=new V;function op(){return Qi.getLuminanceCoefficients(ap),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${ap.x.toFixed(4)}, ${ap.y.toFixed(4)}, ${ap.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function sp(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(up).join(`
`)}function cp(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function lp(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function up(e){return e!==``}function dp(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function fp(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var pp=/^[ \t]*#include +<([\w\d./]+)>/gm;function mp(e){return e.replace(pp,hp)}function hp(e,t){let n=W[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return mp(n)}var gp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _p(e){return e.replace(gp,vp)}function vp(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function yp(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var bp={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function xp(e){return bp[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Sp={302:`ENVMAP_MODE_REFRACTION`};function Cp(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Sp[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var wp={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Tp(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:wp[e.combine]||`ENVMAP_BLENDING_NONE`}function Ep(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=xp(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=Cp(n),d=Tp(n),f=sp(n),p=cp(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(up).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(up).join(`
`),g.length>0&&(g+=`
`)):(h=[yp(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(up).join(`
`),g=[yp(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:W.tonemapping_pars_fragment,n.toneMapping===0?``:ip(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,W.colorspace_pars_fragment,np(`linearToOutputTexel`,n.outputColorSpace),op(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(up).join(`
`)),o=mp(o),o=dp(o,n),o=fp(o,n),s=mp(s),s=dp(s,n),s=fp(s,n),o=_p(o),s=_p(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=Yf(i,i.VERTEX_SHADER,v),x=Yf(i,i.FRAGMENT_SHADER,y);i.attachShader(m,b),i.attachShader(m,x),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function S(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(b)||``,a=i.getShaderInfoLog(x)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,b,x);else{let e=tp(i,b,`vertex`),n=tp(i,x,`fragment`);z(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):R(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(b),i.deleteShader(x),C=new Jf(i,m),w=lp(i,m)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,Xf)),T},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Zf++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=x,this}var Dp=0,Op=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new kp(e),t.set(e,n)),n}},kp=class{constructor(e){this.id=Dp++,this.code=e,this.usedTimes=0}};function Ap(e){return e===1030||e===37490||e===36285}function jp(e,t,n,r,i,a){let o=new Ta,s=new Op,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function p(e){return c.add(e),e===0?`uv`:`uv${e}`}function m(i,o,l,u,m,h){let g=u.fog,_=m.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=f[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&R(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,O,k;if(x){let e=id[x];E=e.vertexShader,D=e.fragmentShader}else{E=i.vertexShader,D=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let A=e.getRenderTarget(),j=e.state.buffers.depth.getReversed(),M=m.isInstancedMesh===!0,N=m.isBatchedMesh===!0,ee=!!i.map,te=!!i.matcap,ne=!!b,re=ne&&b.isPMREMTexture===!0,ie=!!i.aoMap,ae=!!i.lightMap,oe=!!i.bumpMap&&i.wireframe===!1,se=!!i.normalMap,ce=!!i.displacementMap,le=!!i.emissiveMap,ue=!!i.metalnessMap,de=!!i.roughnessMap,fe=i.anisotropy>0,pe=i.clearcoat>0,me=i.diffuseRoughness>0,he=i.dispersion>0,ge=i.retroreflectivity>0,_e=i.iridescence>0,ve=i.sheen>0,ye=i.transmission>0,be=fe&&!!i.anisotropyMap,xe=pe&&!!i.clearcoatMap,Se=pe&&!!i.clearcoatNormalMap,Ce=pe&&!!i.clearcoatRoughnessMap,we=me&&!!i.diffuseRoughnessMap,P=_e&&!!i.iridescenceMap,Te=_e&&!!i.iridescenceThicknessMap,Ee=ve&&!!i.sheenColorMap,De=ve&&!!i.sheenRoughnessMap,F=!!i.specularMap,Oe=!!i.specularColorMap,I=!!i.specularIntensityMap,L=ye&&!!i.transmissionMap,ke=ye&&!!i.thicknessMap,Ae=!!i.gradientMap,je=!!i.alphaMap,Me=i.alphaTest>0,Ne=!!i.alphaHash,Pe=!!i.extensions,Fe=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Fe=e.toneMapping);let Ie=re?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,Le={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:N,batchingColor:N&&m._colorsTexture!==null,instancing:M,instancingColor:M&&m.instanceColor!==null,instancingMorph:M&&m.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Qi.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ee,matcap:te,envMap:ne,envMapMode:ne&&b.mapping,envMapPMREM:re,envMapMaxLod:re?Ie.length-1:null,envMapSize:re?Ie[0].width:null,aoMap:ie,lightMap:ae,bumpMap:oe,normalMap:se,displacementMap:ce,emissiveMap:le,normalMapObjectSpace:se&&i.normalMapType===1,normalMapTangentSpace:se&&i.normalMapType===0,packedNormalMap:se&&i.normalMapType===0&&Ap(i.normalMap.format),metalnessMap:ue,roughnessMap:de,anisotropy:fe,anisotropyMap:be,clearcoat:pe,clearcoatMap:xe,clearcoatNormalMap:Se,clearcoatRoughnessMap:Ce,diffuseRoughness:me,diffuseRoughnessMap:we,dispersion:he,retroreflection:ge,iridescence:_e,iridescenceMap:P,iridescenceThicknessMap:Te,sheen:ve,sheenColorMap:Ee,sheenRoughnessMap:De,specularMap:F,specularColorMap:Oe,specularIntensityMap:I,transmission:ye,transmissionMap:L,thicknessMap:ke,gradientMap:Ae,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:je,alphaTest:Me,alphaHash:Ne,combine:i.combine,mapUv:ee&&p(i.map.channel),aoMapUv:ie&&p(i.aoMap.channel),lightMapUv:ae&&p(i.lightMap.channel),bumpMapUv:oe&&p(i.bumpMap.channel),normalMapUv:se&&p(i.normalMap.channel),displacementMapUv:ce&&p(i.displacementMap.channel),emissiveMapUv:le&&p(i.emissiveMap.channel),metalnessMapUv:ue&&p(i.metalnessMap.channel),roughnessMapUv:de&&p(i.roughnessMap.channel),anisotropyMapUv:be&&p(i.anisotropyMap.channel),clearcoatMapUv:xe&&p(i.clearcoatMap.channel),clearcoatNormalMapUv:Se&&p(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&p(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:we&&p(i.diffuseRoughnessMap.channel),iridescenceMapUv:P&&p(i.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&p(i.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&p(i.sheenColorMap.channel),sheenRoughnessMapUv:De&&p(i.sheenRoughnessMap.channel),specularMapUv:F&&p(i.specularMap.channel),specularColorMapUv:Oe&&p(i.specularColorMap.channel),specularIntensityMapUv:I&&p(i.specularIntensityMap.channel),transmissionMapUv:L&&p(i.transmissionMap.channel),thicknessMapUv:ke&&p(i.thicknessMap.channel),alphaMapUv:je&&p(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(se||fe),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!_.attributes.uv&&(ee||je),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&se===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:j,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Fe,decodeVideoTexture:ee&&i.map.isVideoTexture===!0&&Qi.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:le&&i.emissiveMap.isVideoTexture===!0&&Qi.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Pe&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Pe&&i.extensions.multiDraw===!0||N)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Le.vertexUv1s=c.has(1),Le.vertexUv2s=c.has(2),Le.vertexUv3s=c.has(3),c.clear(),Le}function h(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(g(n,t),_(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function g(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function _(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.diffuseRoughness&&o.enable(25),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function v(e){let t=f[e.type],n;if(t){let e=id[t];n=Kl.clone(e.uniforms)}else n=e.uniforms;return n}function y(t,n){let r=u.get(n);return r===void 0?(r=new Ep(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function b(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function x(e){s.remove(e)}function S(){s.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:x,programs:l,dispose:S}}function Mp(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Np(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Pp(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Fp(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Np),r.length>1&&r.sort(t||Pp),i.length>1&&i.sort(t||Pp)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Ip(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Fp,e.set(t,[i])):n>=r.length?(i=new Fp,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Lp(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new V,color:new U};break;case`SpotLight`:n={position:new V,direction:new V,color:new U,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new V,color:new U,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new V,skyColor:new U,groundColor:new U};break;case`RectAreaLight`:n={color:new U,position:new V,halfWidth:new V,halfHeight:new V}}return e[t.id]=n,n}}}function Rp(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var zp=0;function Bp(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Vp(e){let t=new Lp,n=Rp(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new V);let i=new V,a=new ma,o=new ma;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Bp);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=G.LTC_FLOAT_1,r.rectAreaLTC2=G.LTC_FLOAT_2):(r.rectAreaLTC1=G.LTC_HALF_1,r.rectAreaLTC2=G.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=zp++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Hp(e){let t=new Vp(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function Up(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Hp(e),t.set(n,[a])):r>=i.length?(a=new Hp(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Wp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Kp=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],qp=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],Jp=new ma,Yp=new V,Xp=new V;function Zp(e,t,n){let r=new Qs,i=new B,a=new B,o=new la,s=new $l,c=new eu,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new Yl({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new B},radius:{value:4}},vertexShader:Wp,fragmentShader:Gp}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new Ko;m.setAttribute(`position`,new jo(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new Is(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(R(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){R(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){R(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new da(i.x,i.y,{format:or,type:qn,minFilter:Ln,magFilter:Ln,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new uc(i.x,i.y,Kn),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=nr,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=Pn,d.map.depthTexture.magFilter=Pn}else l.isPointLight?(d.map=new pd(i.x),d.map.depthTexture=new dc(i.x,Gn)):(d.map=new da(i.x,i.y),d.map.depthTexture=new uc(i.x,i.y,Gn)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=nr,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=Ln,d.map.depthTexture.magFilter=Ln):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=Pn,d.map.depthTexture.magFilter=Pn);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);let _=d.camera.layers.mask&4294967294?d.camera.layers:s.layers;for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Yp.setFromMatrixPosition(l.matrixWorld),e.position.copy(Yp),Xp.copy(e.position),Xp.add(Kp[t]),e.up.copy(qp[t]),e.lookAt(Xp),e.updateMatrixWorld(),n.makeTranslation(-Yp.x,-Yp.y,-Yp.z),Jp.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Jp,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),b(n,s,i,l,_,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new da(i.x,i.y,{format:or,type:qn}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),s=n.material;if(Array.isArray(s)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,c);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(s.visible){let t=y(n,s,o,c);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)b(l[e],i,a,o,s,c)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Qp(e,t){function n(){let t=!1,n=new la,r=null,i=new la(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?ue(e.DEPTH_TEST):de(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=hi[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?ue(e.STENCIL_TEST):de(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new U(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,ee=0,te=e.getParameter(e.VERSION);te.indexOf(`WebGL`)===-1?te.indexOf(`OpenGL ES`)!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),N=ee>=2):(ee=parseFloat(/^WebGL (\d)/.exec(te)[1]),N=ee>=1);let ne=null,re={},ie=e.getParameter(e.SCISSOR_BOX),ae=e.getParameter(e.VIEWPORT),oe=new la().fromArray(ie),se=new la().fromArray(ae);function ce(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let le={};le[e.TEXTURE_2D]=ce(e.TEXTURE_2D,e.TEXTURE_2D,1),le[e.TEXTURE_CUBE_MAP]=ce(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[e.TEXTURE_2D_ARRAY]=ce(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),le[e.TEXTURE_3D]=ce(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),ue(e.DEPTH_TEST),o.setFunc(3),ye(!1),be(1),ue(e.CULL_FACE),_e(0);function ue(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function de(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function fe(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function pe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function me(t){return h!==t&&(e.useProgram(t),h=t,!0)}let he={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};he[103]=e.MIN,he[104]=e.MAX;let ge={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function _e(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(de(e.BLEND),g=!1);else if(g===!1&&(ue(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:z(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:z(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:z(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:z(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a=a||n,o=o||r,s=s||i,(n!==v||a!==x)&&(e.blendEquationSeparate(he[n],he[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(ge[r],ge[i],ge[o],ge[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ve(t,n){t.side===2?de(e.CULL_FACE):ue(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ye(r),t.blending===1&&t.transparent===!1?_e(0):_e(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Se(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?ue(e.SAMPLE_ALPHA_TO_COVERAGE):de(e.SAMPLE_ALPHA_TO_COVERAGE)}function ye(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function be(t){t===0?de(e.CULL_FACE):(ue(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function xe(t){t!==k&&(N&&e.lineWidth(t),k=t)}function Se(t,n,r){t?(ue(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):de(e.POLYGON_OFFSET_FILL)}function Ce(t){t?ue(e.SCISSOR_TEST):de(e.SCISSOR_TEST)}function we(t){t===void 0&&(t=e.TEXTURE0+M-1),ne!==t&&(e.activeTexture(t),ne=t)}function P(t,n,r){r===void 0&&(r=ne===null?e.TEXTURE0+M-1:ne);let i=re[r];i===void 0&&(i={type:void 0,texture:void 0},re[r]=i),(i.type!==t||i.texture!==n)&&(ne!==r&&(e.activeTexture(r),ne=r),e.bindTexture(t,n||le[t]),i.type=t,i.texture=n)}function Te(){let t=re[ne];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Ee(){try{e.compressedTexImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function De(){try{e.compressedTexImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function F(){try{e.texSubImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Oe(){try{e.texSubImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function I(){try{e.compressedTexSubImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function L(){try{e.compressedTexSubImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function ke(){try{e.texStorage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ae(){try{e.texStorage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function je(){try{e.texImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Me(){try{e.texImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ne(t){return d[t]===void 0?e.getParameter(t):d[t]}function Pe(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Fe(t){oe.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),oe.copy(t))}function Ie(t){se.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),se.copy(t))}function Le(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function Re(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function ze(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},ne=null,re={},f={},c={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new U(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,oe.set(0,0,e.canvas.width,e.canvas.height),se.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:ue,disable:de,bindFramebuffer:fe,drawBuffers:pe,useProgram:me,setBlending:_e,setMaterial:ve,setFlipSided:ye,setCullFace:be,setLineWidth:xe,setPolygonOffset:Se,setScissorTest:Ce,activeTexture:we,bindTexture:P,unbindTexture:Te,compressedTexImage2D:Ee,compressedTexImage3D:De,texImage2D:je,texImage3D:Me,pixelStorei:Pe,getParameter:Ne,updateUBOMapping:Le,uniformBlockBinding:Re,texStorage2D:ke,texStorage3D:Ae,texSubImage2D:F,texSubImage3D:Oe,compressedTexSubImage2D:I,compressedTexSubImage3D:L,scissor:Fe,viewport:Ie,reset:ze}}function $p(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new B,u=new WeakMap,d=new Set,f,p=new WeakMap,m=new Set,h=new FinalizationRegistry(e=>m.delete(e)),g=!1;try{g=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function _(e,t){return g?new OffscreenCanvas(e,t):ci(`canvas`)}function v(e,t,n){let r=1,i=ke(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=_(n,a));let o=t?_(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),R(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&R(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function y(e){return e.generateMipmaps}function b(t){e.generateMipmap(t)}function x(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function S(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];R(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||R(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?ti:Qi.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function C(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,R(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function w(e,t){return y(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function T(e){let t=new WeakRef(e);r.get(e).__ref=t,m.add(t),h.register(e,t,t)}function E(e){let t=r.get(e).__ref;t!==void 0&&(m.delete(t),h.unregister(t))}function D(e){k(e.target)}function O(e){A(e.target)}function k(e){e.removeEventListener(`dispose`,D),E(e),M(e),e.isVideoTexture&&u.delete(e),e.isHTMLTexture&&d.delete(e)}function A(e){e.removeEventListener(`dispose`,O),E(e),ee(e)}function j(){for(let e of m){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?A(t):k(t))}m.clear(),d.clear()}function M(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&N(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function N(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function ee(t){let n=r.get(t);n.__depthDisposeCallback&&n.__depthDisposeCallback();let i=t.depthTexture;if(i&&i.renderTarget===t&&k(i),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let a=t.textures;for(let t=0,n=a.length;t<n;t++){let n=r.get(a[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(a[t])}r.remove(t)}let te=0;function ne(){te=0}function re(){return te}function ie(e){te=e}function ae(){let e=te;return e>=i.maxTextures&&R(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),te+=1,e}function oe(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function se(t,i){let a=r.get(t);if(t.isVideoTexture&&I(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)R(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)R(`WebGLRenderer: Texture marked for update but image is incomplete`);else{ve(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function ce(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?ve(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function le(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?ve(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function ue(t,i){let a=r.get(t);t.version>0&&a.__version!==t.version?ye(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let de={[jn]:e.REPEAT,[Mn]:e.CLAMP_TO_EDGE,[Nn]:e.MIRRORED_REPEAT},fe={[Pn]:e.NEAREST,[Fn]:e.NEAREST_MIPMAP_NEAREST,[In]:e.NEAREST_MIPMAP_LINEAR,[Ln]:e.LINEAR,[Rn]:e.LINEAR_MIPMAP_NEAREST,[zn]:e.LINEAR_MIPMAP_LINEAR},pe={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function me(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&R(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,de[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,de[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,de[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,fe[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,fe[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,pe[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function he(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,D),T(n));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=oe(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&N(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function ge(e,t,n){return Math.floor(Math.floor(e/n)/t)}function _e(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=ge(n.start,r.width,4),c=ge(t.start,r.width,4);n.start<=i+1&&a===c&&ge(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function ve(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=he(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=Qi.getPrimaries(Qi.workingColorSpace),r=o.colorSpace===``?null:Qi.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=v(o.image,!1,i.maxTextureSize);t=L(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=S(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);me(c,o);let h,g=o.mipmaps,_=o.isVideoTexture!==!0,x=f.__version===void 0||l===!0,T=u.dataReady,E=w(o,t);if(o.isDepthTexture)m=C(o.format===rr,o.type),x&&(_?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(g.length>0){_&&x&&n.texStorage2D(e.TEXTURE_2D,E,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],_?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else _?(x&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&_e(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){_&&x&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,g[0].width,g[0].height,t.depth);for(let i=0,a=g.length;i<a;i++)if(h=g[i],o.format!==1023){if(r!==null){if(_){if(T){if(o.layerUpdates.size>0){let t=ed(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else _?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{_&&x&&n.texStorage2D(e.TEXTURE_2D,E,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],o.format===1023?_?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):_?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(_){if(x&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=ed(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)_?(x&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(x){if(_)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(g.length>0){if(_&&x){let t=ke(g[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=g.length;t<i;t++)h=g[t],_?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(_){if(x){let r=ke(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);y(o)&&o.mipmapsAutoUpdate===!0&&b(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ye(t,o,s){if(o.image.length!==6)return;let c=he(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=Qi.getPrimaries(Qi.workingColorSpace),r=o.colorSpace===``?null:Qi.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=v(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=L(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),_=a.convert(o.type),x=S(o.internalFormat,g,_,o.normalized,o.colorSpace),T=o.isVideoTexture!==!0,E=u.__version===void 0||c===!0,D=l.dataReady,O=w(o,h);me(e.TEXTURE_CUBE_MAP,o);let k;if(o.isDepthTexture){if(x=C(o.format===rr,o.type),E){if(T)n.texStorage2D(e.TEXTURE_CUBE_MAP,1,x,h.width,h.height);else for(let t=0;t<6;t++)n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,h.width,h.height,0,g,_,null)}}else if(f){T&&E&&n.texStorage2D(e.TEXTURE_CUBE_MAP,O,x,h.width,h.height);for(let t=0;t<6;t++){k=m[t].mipmaps;for(let r=0;r<k.length;r++){let i=k[r];o.format===1023?T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,x,i.width,i.height,0,g,_,i.data):g===null?R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):T?D&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,x,i.width,i.height,0,i.data)}}}else{if(k=o.mipmaps,T&&E){k.length>0&&O++;let t=ke(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,O,x,t.width,t.height)}for(let t=0;t<6;t++)if(p){T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,m[t].width,m[t].height,0,g,_,m[t].data);for(let r=0;r<k.length;r++){let i=k[r].image[t].image;T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,x,i.width,i.height,0,g,_,i.data)}}else{T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,g,_,m[t]);for(let r=0;r<k.length;r++){let i=k[r];T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,x,g,_,i.image[t])}}}y(o)&&o.mipmapsAutoUpdate===!0&&b(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function be(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=S(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),Oe(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,F(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function xe(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=C(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Oe(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,F(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,F(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=S(o.internalFormat,c,l,o.normalized,o.colorSpace);Oe(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,F(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,F(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Se(t,i,a){let o=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let c=r.get(i.depthTexture);c.__renderTarget=i;let l=o?i.depthTexture.image[0]:i.depthTexture.image;c.__webglTexture&&l.width===i.width&&l.height===i.height||(l.width=i.width,l.height=i.height,i.depthTexture.needsUpdate=!0),o?ue(i.depthTexture,0):se(i.depthTexture,0);let u=c.__webglTexture,d=F(i),f=o?e.TEXTURE_CUBE_MAP_POSITIVE_X+a:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)Oe(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)Oe(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Ce(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)Se(i.__webglFramebuffer[e],t,e);else t.texture.mipmaps.length>0?Se(i.__webglFramebuffer[0],t,0):Se(i.__webglFramebuffer,t,0)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),xe(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else if(t.texture.mipmaps.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),xe(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function we(t,n,i){let a=r.get(t);n!==void 0&&be(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&Ce(t)}function P(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,O),T(t);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&Oe(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=S(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=F(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),xe(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),me(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)be(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else be(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);y(i)?b(e.TEXTURE_CUBE_MAP):i.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),me(c,a),be(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),y(a)&&b(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),me(r,i),i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)be(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else be(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);y(i)?b(r):i.mipmaps.length>0&&e.texParameteri(r,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}t.depthBuffer&&Ce(t)}function Te(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(y(a)&&a.mipmapsAutoUpdate===!0){let t=x(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),b(t),n.unbindTexture()}}}let Ee=[];function De(t){if(t.samples>0){if(Oe(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer),t.texture.mipmaps.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(Ee.length=0,Ee.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&Ee.push(l),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ee))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function F(e){return Math.min(i.maxSamples,e.samples)}function Oe(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function I(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function L(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Qi.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&R(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):z(`WebGLTextures: Unsupported texture color space:`,n)),t}function ke(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=ae,this.resetTextureUnits=ne,this.getTextureUnits=re,this.setTextureUnits=ie,this.setTexture2D=se,this.setTexture2DArray=ce,this.setTexture3D=le,this.setTextureCube=ue,this.rebindTextures=we,this.setupRenderTarget=P,this.updateRenderTargetMipmap=Te,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Oe,this.dispose=j}function em(e,t){function n(n,r=``){let i,a=Qi.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var tm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,rm=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new fc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Yl({vertexShader:tm,fragmentShader:nm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Is(new Fl(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},im=class extends gi{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new rm,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new B,C=null,w=null,T=new Pu;T.viewport=new la;let E=new Pu;E.viewport=new la;let D=[T,E],O=new Vu,k=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new Wa,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new Wa,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new Wa,b[e]=t),t.getHandSpace()};function j(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function M(){r.removeEventListener(`select`,j),r.removeEventListener(`selectstart`,j),r.removeEventListener(`selectend`,j),r.removeEventListener(`squeeze`,j),r.removeEventListener(`squeezestart`,j),r.removeEventListener(`squeezeend`,j),r.removeEventListener(`end`,M),r.removeEventListener(`inputsourceschange`,N);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}k=null,A=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,ie.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),w!==null){let e=w.camera;e.fov=w.fov,e.zoom=w.zoom,e.updateProjectionMatrix(),w=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&R(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&R(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,j),r.addEventListener(`selectstart`,j),r.addEventListener(`selectend`,j),r.addEventListener(`squeeze`,j),r.addEventListener(`squeezestart`,j),r.addEventListener(`squeezeend`,j),r.addEventListener(`end`,M),r.addEventListener(`inputsourceschange`,N),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?rr:nr,a=_.stencil?Xn:Gn);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new da(d.textureWidth,d.textureHeight,{format:tr,type:Bn,depthTexture:new uc(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new da(f.framebufferWidth,f.framebufferHeight,{format:tr,type:Bn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),ie.setContext(r),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function N(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}function ee(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),O.near=E.near=T.near=t,O.far=E.far=T.far=n,(k!==O.near||A!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),k=O.near,A=O.far),O.layers.mask=e.layers.mask|6,T.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;ee(O,i);for(let e=0;e<a.length;e++)ee(a[e],i);O.projectionMatrix.copy(T.projectionMatrix),O.projectionMatrixInverse.copy(T.projectionMatrixInverse),w===null&&e.isPerspectiveCamera&&(w={camera:e,fov:e.fov,zoom:e.zoom}),te(e,O,i)};function te(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=bi*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(O)},this.getCameraTexture=function(e){return g[e]};let ne=null;function re(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=D[n];o===void 0&&(o=new Pu,o.layers.enable(n),o.viewport=new la,D[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new fc,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ne&&ne(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let ie=new nd;ie.setAnimationLoop(re),this.setAnimationLoop=function(e){ne=e},this.dispose=function(){}}},am=new ma,om=new H;om.set(-1,0,0,0,1,0,0,0,1);function sm(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Gl(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(am.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(om),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function cm(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?R(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):R(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var lm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),um=null;function dm(){return um===null&&(um=new zs(lm,16,16,or,qn),um.name=`DFG_LUT`,um.minFilter=Ln,um.magFilter=Ln,um.wrapS=Mn,um.wrapT=Mn,um.generateMipmaps=!1,um.needsUpdate=!0),um}var fm=class{constructor(e={}){let{canvas:t=li(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Bn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([cr,sr,ar]),g=new Set([Bn,Gn,Un,Xn,Jn,Yn]),_=new Uint32Array(4),v=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null,O=null,k=null,A=null;this._outputColorSpace=$r;let j=0,M=0,N=null,ee=-1,te=null,ne=new la,re=new la,ie=null,ae=new U(0),oe=0,se=t.width,ce=t.height,le=1,ue=null,de=null,fe=new la(0,0,se,ce),pe=new la(0,0,se,ce),me=!1,he=new Qs,ge=new ec,_e=!1,ve=!1,ye=new ma,be=new V,xe=new la,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ce=!1;function we(){return N===null?le:1}let P=n;function Te(e,n){return t.getContext(e,n)}let Ee,De,F,Oe,I,L,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve,He,Ue,We,Ge;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,Je,!1),t.addEventListener(`webglcontextrestored`,Ye,!1),t.addEventListener(`webglcontextcreationerror`,Xe,!1),P===null){let t=`webgl2`;if(P=Te(t,e),P===null)throw Te(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}Ke()}catch(e){throw t.removeEventListener(`webglcontextlost`,Je,!1),t.removeEventListener(`webglcontextrestored`,Ye,!1),t.removeEventListener(`webglcontextcreationerror`,Xe,!1),z(`WebGLRenderer: `+e.message),e}function Ke(){Ee=new jd(P),Ee.init(),Ue=new em(P,Ee),De=new dd(P,Ee,e,Ue),F=new Qp(P,Ee),De.reversedDepthBuffer&&d&&F.buffers.depth.setReversed(!0),O=P.createFramebuffer(),k=P.createFramebuffer(),A=P.createFramebuffer(),Oe=new Pd(P),I=new Mp,L=new $p(P,Ee,F,I,De,Ue,Oe),ke=new Ad(T),Ae=new rd(P),We=new ld(P,Ae),je=new Md(P,Ae,Oe,We),Me=new Id(P,je,Ae,We,Oe),Be=new Fd(P,De,L),Le=new fd(I),Ne=new jp(T,ke,Ee,De,We,Le),Pe=new sm(T,I),Fe=new Ip,Ie=new Up(Ee),ze=new cd(T,ke,F,Me,p,s),Re=new Zp(T,Me,De),Ge=new cm(P,Oe,De,F),Ve=new ud(P,Ee,Oe),He=new Nd(P,Ee,Oe),Oe.programs=Ne.programs,T.capabilities=De,T.extensions=Ee,T.properties=I,T.renderLists=Fe,T.shadowMap=Re,T.state=F,T.info=Oe}m!==1009&&(w=new Rd(m,t.width,t.height,o,r,i));let qe=new im(T,P);this.xr=qe,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let e=Ee.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ee.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(e){e!==void 0&&(le=e,this.setSize(se,ce,!1))},this.getSize=function(e){return e.set(se,ce)},this.setSize=function(e,n,r=!0){qe.isPresenting?R(`WebGLRenderer: Can't change size while VR device is presenting.`):(se=e,ce=n,t.width=Math.floor(e*le),t.height=Math.floor(n*le),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(se*le,ce*le).floor()},this.setDrawingBufferSize=function(e,n,r){se=e,ce=n,le=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)z(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){R(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(ne)},this.getViewport=function(e){return e.copy(fe)},this.setViewport=function(e,t,n,r){e.isVector4?fe.set(e.x,e.y,e.z,e.w):fe.set(e,t,n,r),F.viewport(ne.copy(fe).multiplyScalar(we()).round())},this.getScissor=function(e){return e.copy(pe)},this.setScissor=function(e,t,n,r){e.isVector4?pe.set(e.x,e.y,e.z,e.w):pe.set(e,t,n,r),F.scissor(re.copy(pe).multiplyScalar(we()).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(e){F.setScissorTest(me=e)},this.setOpaqueSort=function(e){ue=e},this.setTransparentSort=function(e){de=e},this.getClearColor=function(e){return e.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor(...arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(N!==null){let t=N.texture.format;e=h.has(t)}if(e){let e=N.texture.type,t=g.has(e),n=ze.getClearColor(),r=ze.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,P.clearBufferuiv(P.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,P.clearBufferiv(P.COLOR,0,v))}else r|=P.COLOR_BUFFER_BIT}t&&(r|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&P.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Je,!1),t.removeEventListener(`webglcontextrestored`,Ye,!1),t.removeEventListener(`webglcontextcreationerror`,Xe,!1),ze.dispose(),Fe.dispose(),Ie.dispose(),L.dispose(),I.dispose(),ke.dispose(),Me.dispose(),je.dispose(),We.dispose(),Ge.dispose(),Ne.dispose(),qe.dispose(),qe.removeEventListener(`sessionstart`,rt),qe.removeEventListener(`sessionend`,it),at.stop()};function Je(e){e.preventDefault(),di(`WebGLRenderer: Context Lost.`),E=!0}function Ye(){di(`WebGLRenderer: Context Restored.`),E=!1;let e=Oe.autoReset,t=Re.enabled,n=Re.autoUpdate,r=Re.needsUpdate,i=Re.type;Ke(),Oe.autoReset=e,Re.enabled=t,Re.autoUpdate=n,Re.needsUpdate=r,Re.type=i}function Xe(e){z(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function Ze(e){let t=e.target;t.removeEventListener(`dispose`,Ze),Qe(t)}function Qe(e){$e(e),I.remove(e)}function $e(e){let t=I.get(e).programs;t!==void 0&&(t.forEach(function(e){Ne.releaseProgram(e)}),e.isShaderMaterial&&Ne.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Se);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=gt(e,t,n,r,i);F.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=je.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;We.setup(i,r,s,n,c);let h,g=Ve;if(c!==null&&(h=Ae.get(c),g=He,g.setIndex(h)),i.isMesh)r.wireframe===!0?(F.setLineWidth(r.wireframeLinewidth*we()),g.setMode(P.LINES)):g.setMode(P.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),F.setLineWidth(e*we()),i.isLineSegments?g.setMode(P.LINES):i.isLineLoop?g.setMode(P.LINE_LOOP):g.setMode(P.LINE_STRIP)}else i.isPoints?g.setMode(P.POINTS):i.isSprite&&g.setMode(P.TRIANGLES);if(i.isBatchedMesh){if(Ee.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ae.get(c).bytesPerElement:1,o=I.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(P,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function et(e,t,n,r){D!==null&&e.isNodeMaterial&&D.setObject(r,e),_e===!0&&Le.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,ft(e,t,r),e.side=0,e.needsUpdate=!0,ft(e,t,r),e.side=2):ft(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),D!==null&&D.renderStart(e,t,n),x=Ie.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),D!==null&&D.updateLights(x.state.lightsArray),ve=this.localClippingEnabled,_e=Le.init(this.clippingPlanes,ve),_e===!0&&Le.setGlobalState(this.clippingPlanes,t),D!==null&&Re.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];et(o,n,t,e),r.add(o)}else et(i,n,t,e),r.add(i)}}),x=C.pop(),D!==null&&D.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=I.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Ee.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let tt=null;function nt(e){tt&&tt(e)}function rt(){at.stop()}function it(){at.start()}let at=new nd;at.setAnimationLoop(nt),typeof self<`u`&&at.setContext(self),this.setAnimationLoop=function(e){tt=e,qe.setAnimationLoop(e),e===null?at.stop():at.start()},qe.addEventListener(`sessionstart`,rt),qe.addEventListener(`sessionend`,it),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){z(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=qe.enabled===!0&&qe.isPresenting===!0,r=w!==null&&(N===null||n)&&w.begin(T,N);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),qe.enabled===!0&&qe.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(qe.cameraAutoUpdate===!0&&qe.updateCamera(t),t=qe.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,N),x=Ie.get(e,C.length),x.init(t),x.state.textureUnits=L.getTextureUnits(),C.push(x),ye.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?ge.setFromArrayCamera(t):he.setFromProjectionMatrix(ye,ai,t.reversedDepth),ve=this.localClippingEnabled,_e=Le.init(this.clippingPlanes,ve),b=Fe.get(e,S.length),b.init(),S.push(b),this.info.render.frame++,qe.enabled===!0&&qe.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&ot(e,t,-1/0,T.sortObjects)}ot(e,t,0,T.sortObjects),b.finish(),D!==null&&D.updateLights(x.state.lightsArray),T.sortObjects===!0&&b.sort(ue,de),Ce=qe.enabled===!1||qe.isPresenting===!1||qe.hasDepthSensing()===!1,Ce&&ze.addToRenderList(b,e),this.info.autoReset===!0&&this.info.reset(),_e===!0&&Le.beginShadows();let i=x.state.shadowsArray;if(Re.render(i,e,t),_e===!0&&Le.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];ct(n,r,e,a)}Ce&&ze.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];st(b,e,n,n.viewport)}}else r.length>0&&ct(n,r,e,t),Ce&&ze.render(e),st(b,e,t)}N!==null&&M===0&&(L.updateMultisampleRenderTarget(N),L.updateRenderTargetMipmap(N)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),We.resetDefaultState(),ee=-1,te=null,C.pop(),C.length>0?(x=C[C.length-1],L.setTextureUnits(x.state.textureUnits),_e===!0&&Le.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function ot(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?ge:he;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&xe.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ye);let i=Me.update(e),a=e.material;a.visible&&b.push(e,i,a,n,xe.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?ge:he;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=Me.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),xe.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),xe.copy(e.boundingSphere.center)),xe.applyMatrix4(e.matrixWorld).applyMatrix4(ye)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,xe.z,s,t)}}else a.visible&&b.push(e,i,a,n,xe.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)ot(i[e],t,n,r)}function st(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),_e===!0&&Le.setGlobalState(T.clippingPlanes,n),r&&F.viewport(ne.copy(r)),i.length>0&&lt(i,t,n),a.length>0&&lt(a,t,n),o.length>0&&lt(o,t,n),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function ct(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=Ee.has(`EXT_color_buffer_half_float`)||Ee.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new da(1,1,{generateMipmaps:!0,type:e?qn:Bn,minFilter:zn,samples:Math.max(4,De.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Qi.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||ne;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(ae),oe=T.getClearAlpha(),oe<1&&T.setClearColor(16777215,.5),T.clear(),Ce&&ze.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),_e===!0&&Le.setGlobalState(T.clippingPlanes,r),lt(e,n,r),L.updateMultisampleRenderTarget(a),L.updateRenderTargetMipmap(a),Ee.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,ut(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(L.updateMultisampleRenderTarget(a),L.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(ae,oe),d!==void 0&&(r.viewport=d),T.toneMapping=u}function lt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&ut(o,t,n,s,l,c)}}function ut(e,t,n,r,i,a){D!==null&&i.isNodeMaterial&&D.setObject(e,i),e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function dt(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function ft(e,t,n){t.isScene!==!0&&(t=Se);let r=I.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=Ne.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=Ne.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=ke.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,Ze),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return ht(e,s),d}else s.uniforms=Ne.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=Ne.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Le.uniform),ht(e,s),r.needsLights=vt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=dt(x.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function pt(e,t,n,r,i){let a=I.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=ft(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function mt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Jf.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function ht(e,t){let n=I.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function gt(e,t,n,r,i){t.isScene!==!0&&(t=Se),L.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=N===null?T.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Qi.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=ke.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=I.get(r),b=x.state.lights;if(_e===!0&&(ve===!0||e!==te)){let t=e===te&&r.id===ee;Le.setState(r,e,t)}let S=!1,C=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==b.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?S=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Le.numPlanes||v.numIntersection!==Le.numIntersection)?S=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===dt(x.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(C=!0):S=!0:S=!0:(S=!0,v.__version=r.version);let w=v.currentProgram;(S===!0||C===!0)&&(w=C===!0?pt(r,t,i,s,h):ft(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,w,v));let E=!1,O=!1,k=!1,A=w.getUniforms(),j=v.uniforms;if(F.useProgram(w.program)&&(E=!0,O=!0,k=!0),r.id!==ee&&(ee=r.id,O=!0),E||te!==e){F.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),A.setValue(P,`projectionMatrix`,e.projectionMatrix),A.setValue(P,`viewMatrix`,e.matrixWorldInverse);let t=A.map.cameraPosition;t!==void 0&&t.setValue(P,be.setFromMatrixPosition(e.matrixWorld)),De.logarithmicDepthBuffer&&A.setValue(P,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&A.setValue(P,`isOrthographic`,e.isOrthographicCamera===!0),te!==e&&(te=e,O=!0,k=!0)}if(v.needsLights&&(b.state.sunShadowMap.length>0&&A.setValue(P,`sunShadowMap`,b.state.sunShadowMap,L),b.state.directionalShadowMap.length>0&&A.setValue(P,`directionalShadowMap`,b.state.directionalShadowMap,L),b.state.spotShadowMap.length>0&&A.setValue(P,`spotShadowMap`,b.state.spotShadowMap,L),b.state.pointShadowMap.length>0&&A.setValue(P,`pointShadowMap`,b.state.pointShadowMap,L)),i.isSkinnedMesh){A.setOptional(P,i,`bindMatrix`),A.setOptional(P,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),A.setValue(P,`boneTexture`,e.boneTexture,L))}i.isBatchedMesh&&(A.setOptional(P,i,`batchingTexture`),A.setValue(P,`batchingTexture`,i._matricesTexture,L),A.setOptional(P,i,`batchingIdTexture`),A.setValue(P,`batchingIdTexture`,i._indirectTexture,L),A.setOptional(P,i,`batchingColorTexture`),i._colorsTexture!==null&&A.setValue(P,`batchingColorTexture`,i._colorsTexture,L));let M=n.morphAttributes;if((M.position!==void 0||M.normal!==void 0||M.color!==void 0)&&Be.update(i,n,w),(O||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,A.setValue(P,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(j.envMapIntensity.value=t.environmentIntensity),j.dfgLUT!==void 0&&(j.dfgLUT.value=dm()),O){if(A.setValue(P,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&_t(j,k),a&&r.fog===!0&&Pe.refreshFogUniforms(j,a),Pe.refreshMaterialUniforms(j,r,le,ce,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=y,t=0;for(let n of x.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;j.probesSH.value=e.textures,j.probesMin.value=e.min,j.probesMax.value=e.max,j.probesResolution.value=e.resolution}Jf.upload(P,mt(v),j,L)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Jf.upload(P,mt(v),j,L),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&A.setValue(P,`center`,i.center),A.setValue(P,`modelViewMatrix`,i.modelViewMatrix),A.setValue(P,`normalMatrix`,i.normalMatrix),A.setValue(P,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Ge.update(n,w),Ge.bind(n,w)}}return w}function _t(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function vt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(e,t,n){let r=I.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),I.get(e.texture).__webglTexture=t,I.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=I.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){N=e,j=t,M=n;let r=null,i=!1,a=!1;if(e){let o=I.get(e);if(o.__useDefaultFramebuffer!==void 0){F.bindFramebuffer(P.FRAMEBUFFER,o.__webglFramebuffer),ne.copy(e.viewport),re.copy(e.scissor),ie=e.scissorTest,F.viewport(ne),F.scissor(re),F.setScissorTest(ie),ee=-1;return}if(o.__webglFramebuffer===void 0)L.setupRenderTarget(e);else if(o.__hasExternalTextures)L.rebindTextures(e,I.get(e.texture).__webglTexture,I.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&I.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);L.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=I.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&L.useMultisampledRTT(e)===!1?I.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,ne.copy(e.viewport),re.copy(e.scissor),ie=e.scissorTest}else ne.copy(fe).multiplyScalar(le).floor(),re.copy(pe).multiplyScalar(le).floor(),ie=me;if(n!==0&&(r=O),F.bindFramebuffer(P.FRAMEBUFFER,r)&&F.drawBuffers(e,r),F.viewport(ne),F.scissor(re),F.setScissorTest(ie),i){let r=I.get(e.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=I.get(e.textures[t]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=I.get(e.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,t.__webglTexture,n)}ee=-1};function yt(e){let t=I.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=De.textureFormatReadable(e.format),t.__typeReadable=De.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=I.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){F.bindFramebuffer(P.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+s);let u=yt(o);if(u.__formatReadable===!1){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&P.readPixels(t,n,r,i,Ue.convert(c),Ue.convert(l),a)}finally{let e=N===null?null:I.get(N).__webglFramebuffer;F.bindFramebuffer(P.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=I.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){F.bindFramebuffer(P.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+s);let d=yt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,f),P.bufferData(P.PIXEL_PACK_BUFFER,a.byteLength,P.STREAM_READ),P.readPixels(t,n,r,i,Ue.convert(l),Ue.convert(u),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let p=N===null?null:I.get(N).__webglFramebuffer;F.bindFramebuffer(P.FRAMEBUFFER,p);let m=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await mi(P,m,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,f),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,a),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(f),P.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;L.setTexture2D(e,0),P.copyTexSubImage2D(P.TEXTURE_2D,n,0,0,o,s,i,a),F.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Ue.convert(t.format),_=Ue.convert(t.type),v;t.isData3DTexture?(L.setTexture3D(t,0),v=P.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(L.setTexture2DArray(t,0),v=P.TEXTURE_2D_ARRAY):(L.setTexture2D(t,0),v=P.TEXTURE_2D),F.activeTexture(P.TEXTURE0),F.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,t.flipY),F.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),F.pixelStorei(P.UNPACK_ALIGNMENT,t.unpackAlignment);let y=F.getParameter(P.UNPACK_ROW_LENGTH),b=F.getParameter(P.UNPACK_IMAGE_HEIGHT),x=F.getParameter(P.UNPACK_SKIP_PIXELS),S=F.getParameter(P.UNPACK_SKIP_ROWS),C=F.getParameter(P.UNPACK_SKIP_IMAGES);F.pixelStorei(P.UNPACK_ROW_LENGTH,h.width),F.pixelStorei(P.UNPACK_IMAGE_HEIGHT,h.height),F.pixelStorei(P.UNPACK_SKIP_PIXELS,l),F.pixelStorei(P.UNPACK_SKIP_ROWS,u),F.pixelStorei(P.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=I.get(e),r=I.get(t),h=I.get(n.__renderTarget),g=I.get(r.__renderTarget);F.bindFramebuffer(P.READ_FRAMEBUFFER,h.__webglFramebuffer),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,I.get(e).__webglTexture,i,d+n),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,I.get(t).__webglTexture,a,m+n)),P.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,P.DEPTH_BUFFER_BIT,P.NEAREST);F.bindFramebuffer(P.READ_FRAMEBUFFER,null),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||I.has(e)){let n=I.get(e),r=I.get(t);F.bindFramebuffer(P.READ_FRAMEBUFFER,k),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,A);for(let e=0;e<c;e++)w?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,n.__webglTexture,i),T?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,r.__webglTexture,a),i===0?T?P.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):P.copyTexSubImage2D(v,a,f,p,l,u,o,s):P.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,P.COLOR_BUFFER_BIT,P.NEAREST);F.bindFramebuffer(P.READ_FRAMEBUFFER,null),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?P.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?P.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):P.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):P.texSubImage2D(P.TEXTURE_2D,a,f,p,o,s,g,_,h);F.pixelStorei(P.UNPACK_ROW_LENGTH,y),F.pixelStorei(P.UNPACK_IMAGE_HEIGHT,b),F.pixelStorei(P.UNPACK_SKIP_PIXELS,x),F.pixelStorei(P.UNPACK_SKIP_ROWS,S),F.pixelStorei(P.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&P.generateMipmap(v),F.unbindTexture()},this.initRenderTarget=function(e){I.get(e).__webglFramebuffer===void 0&&L.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?L.setTextureCube(e,0):e.isData3DTexture?L.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?L.setTexture2DArray(e,0):L.setTexture2D(e,0),F.unbindTexture()},this.resetState=function(){j=0,M=0,N=null,F.reset(),We.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Qi._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qi._getUnpackColorSpace()}};function pm(e){let{player:t}=e;if(t.carryingSpit!==null)return Qe(t.carryingSpit);if(t.carryingCrate)return r.counter.pos;let n=t.carry+t.chicken+t.drinks+t.fries>0;return e.lavash===0||Ze(e).some(t=>$e(e,t).portions===0)?n?r.counter.pos:r.coldStore.pos:(e.branch>0||e.pads.some(e=>e.level>0))&&e.sliced>0?null:n?r.counter.pos:e.coins.length>0?mm(e).pos:e.pads.find(t=>{let n=Se(t,e.branch);return n!==null&&!he(e,t.id)&&e.wallet>=n-t.paid})?.pos??r.spit.pos}function mm(e){return e.coins.reduce((t,n)=>Ge(n.pos,e.player.pos)<Ge(t.pos,e.player.pos)?n:t)}var hm=1831565813,gm=4294967296;function _m(e){let t=e+hm|0,n=Math.imul(t^t>>>15,1|t),r=n+Math.imul(n^n>>>7,61|n)^n;return{value:((r^r>>>14)>>>0)/gm,seed:t}}var vm=r.queue;function ym(e,t){let n=Array.from({length:ge(e)},(e,t)=>t).reduce((e,n)=>{let r=xm(e.state,n,t);return{state:r.state,events:[...e.events,...r.events]}},{state:bm(e,t),events:[]});return{state:Om(n.state,t),events:n.events}}function bm(e,t){let n=vm.speed*t,r=e.customers.flatMap(e=>{let t=e.phase===`queue`?Ce(e.slot,e.lane):vm.exit,r=Je(e.pos,t,n);return e.phase===`leaving`&&r.arrived?[]:[{...e,pos:r.pos}]});return{...e,customers:r}}function xm(e,t,n){let r=e.customers.find(e=>e.phase===`queue`&&e.lane===t&&e.slot===0),i=r!==void 0&&Ge(r.pos,Ce(0,t))<=vm.arriveEpsilon;if(r===void 0||!i)return{state:e,events:[]};let a=t=>({...e,customers:e.customers.map(e=>e.id===r.id?{...e,...t}:e)}),o=Sm(e,r);if(o===null){let t=r.waited+n;return t>=vm.patience?wm(e,r):{state:a({waited:t}),events:[]}}let s=r.serveTimer+n;return s<vm.serveTime?{state:a({serveTimer:s}),events:[]}:Tm(e,r,o)}function Sm(e,t){return at(e,t.wants)>0?t.wants:t.waited<vm.substituteAfter?null:Ze(e).find(n=>n!==t.wants&&at(e,n)>0)??null}function Cm(e,t){return e.phase===`queue`&&e.lane===t.lane?{...e,slot:e.slot-1}:e}function wm(e,t){let n=e.customers.map(e=>e.id===t.id?{...e,phase:`leaving`,unserved:!0}:Cm(e,t));return{state:{...e,customers:n},events:[{type:`walkedOut`,customerId:t.id}]}}function Tm(e,t,n){let i=t.wantsDrink&&e.counterDrinks>0,a=t.wantsFries&&e.counterFries>0,o=e.customers.map(e=>e.id===t.id?{...e,phase:`leaving`,drink:i,fries:a,wants:n}:Cm(e,t)),s=t.waited<=vm.tipWithin&&e.garnish>0,c=i&&t.wantsSalgam,l=c?r.coins.salgamBonus:r.coins.drinkBonus,u=(i?l:0)+(a?r.fryer.bonus:0),d=t.wantsBread,f=d?Math.min(e.lavash+1,r.supply.lavash.capacity):e.lavash,p=(mt(n)+u+(s?r.coins.tip:0)+(d?r.bread.bonus:0))*(t.vip?vm.vipFactor:1);return{state:{...ot(e,n,at(e,n)-1),...Em(e,p),customers:o,counterDrinks:e.counterDrinks-+!!i,counterFries:e.counterFries-+!!a,served:e.served+1,garnish:Math.max(e.garnish-1,0),lavash:f},events:[{type:`serve`,customerId:t.id,withDrink:i,withFries:a,kind:n,tip:s,salgam:c,bread:d}]}}function Em(e,t){let n=xe(e),i=r.coins.dropArea,a={coins:e.coins,seed:e.seed,nextId:e.nextId};return Array.from({length:t}).reduce(t=>{let r=_m(t.seed),a=_m(r.seed),o={id:t.nextId,value:n,bornAt:e.time,pos:{x:Ke(i.minX,i.maxX,r.value),z:Ke(i.minZ,i.maxZ,a.value)}};return{coins:[...t.coins,o],seed:a.seed,nextId:t.nextId+1}},a)}function Dm(e){return Array.from({length:ge(e)},(t,n)=>({lane:n,waiting:we(e,n)})).reduce((e,t)=>t.waiting<e.waiting?t:e)}function Om(e,t){let n=Ze(e).includes(`chicken`)?r.chicken.demandFactor:1,i=vm.spawnInterval/ge(e)*n*d(e.time,e.served),a=Math.min(e.spawnTimer+t,i),{lane:o,waiting:s}=Dm(e);if(a<i||s>=vm.maxLength)return{...e,spawnTimer:a};let c=_m(e.seed),l=_m(c.seed),u=_m(l.seed),f=_m(u.seed),p=pe(e)?_m(f.seed):{value:1,seed:f.seed},m=me(e)?_m(p.seed):{value:1,seed:p.seed},h=fe(e)&&c.value<vm.drinkChance,g=Ze(e).includes(`chicken`)&&u.value<r.chicken.chance,_={id:e.nextId,slot:s,lane:o,pos:vm.spawn,phase:`queue`,serveTimer:0,look:e.nextId%vm.looks,wantsDrink:h,wantsSalgam:h&&p.value<vm.salgamChance,drink:!1,wantsFries:ft(e)&&f.value<r.fryer.chance,fries:!1,vip:e.served>=vm.vipAfterServed&&l.value<vm.vipChance,wants:g?`chicken`:`meat`,waited:0,unserved:!1,wantsBread:m.value<r.bread.chance};return{...e,seed:m.seed,spawnTimer:0,nextId:e.nextId+1,customers:[...e.customers,_]}}var km=r.tables;function Am(e){return e.branch>=km.iskender.fromBranch}function jm(e){return e===`iskender`?km.iskender.portions:km.portions}function Mm(e){return e===`iskender`?km.iskender.bonus:km.bonus}var Nm=r.tables;function Pm(e){return Math.min(oe(e,`tables`)*Nm.perLevel,Nm.spots.length)}function Fm(e){let t=Nm.spots[e]??Nm.spots[0];return{x:t.x+Nm.seatOffset.x,z:t.z+Nm.seatOffset.z}}function Im(e){let t=Nm.spots[e]??Nm.spots[0];return{x:t.x-Math.sign(t.x)*Nm.waiter.reach,z:t.z}}var Lm=r.tables;function Rm(){return{pos:Lm.waiter.home,phase:`idle`,job:null,table:0,carry:0,kind:`meat`,timer:0}}function zm(e,t){return e.guests.find(e=>e.table===t.table&&e.phase===`waiting`)}function Bm(e,t){return at(e,t.wants)>0?t.wants:t.waited<r.queue.substituteAfter?null:Vm(e,t.wants)}function Vm(e,t){return Ze(e).find(n=>n!==t&&at(e,n)>0)??null}function Hm(e,t){let n=e.waiter??Rm(),r=(t,n=e)=>({state:t===void 0?n:{...n,waiter:t},events:[]}),i=(e,r)=>{let i=Je(n.pos,e,Lm.waiter.speed*t);return i.arrived?{...n,pos:i.pos,timer:0,...r}:{...n,pos:i.pos}};if(Um(e,n))return r(void 0,Wm(e,n));switch(n.phase){case`idle`:return r(Gm(e,i(Lm.waiter.home,{})));case`toCounter`:return r(i(Lm.waiter.home,{phase:`loading`}));case`loading`:return Km(e,n,t);case`toTable`:{let t=i(Im(n.table),{phase:n.job===`serve`?`idle`:`clearing`});return t.phase===`idle`?qm(e,t):r(t)}case`clearing`:return Jm(e,n,t)}}function Um(e,t){return t.job===`serve`&&(t.phase===`toCounter`||t.phase===`loading`)&&zm(e,t)===void 0}function Wm(e,t){return{...ot(e,t.kind,at(e,t.kind)+t.carry),waiter:{...t,phase:`idle`,job:null,carry:0,timer:0}}}function Gm(e,t){let n=e.guests.find(t=>t.phase===`waiting`&&Bm(e,t)!==null);if(n!==void 0){let r=Bm(e,n)??n.wants;return{...t,phase:`toCounter`,job:`serve`,table:n.table,kind:r}}let r=e.dirtyTables[0];return r===void 0?t:{...t,phase:`toTable`,job:`clear`,table:r}}function Km(e,t,n){let i=zm(e,t),a=(i?.waited??0)>=r.queue.substituteAfter,o=(t.carry===0&&a&&at(e,t.kind)===0?Vm(e,t.kind):null)??t.kind,s=at(e,o),c=s===0?0:t.timer+n;if(c<Lm.takeInterval)return{state:{...e,waiter:{...t,kind:o,timer:c}},events:[]};let l=t.carry+1,u=l>=jm(i?.dish??`porsiyon`),d={...t,kind:o,carry:l,timer:0,phase:u?`toTable`:`loading`};return{state:{...ot(e,o,s-1),waiter:d},events:[{type:`waiterTook`,kind:o}]}}function qm(e,t){let n=zm(e,t)?.dish??`porsiyon`,r=t.carry*mt(t.kind)+Mm(n),i=e.guests.map(e=>e.table===t.table&&e.phase===`waiting`?{...e,phase:`eating`,timer:0}:e);return{state:{...e,...Em(e,r),guests:i,served:e.served+1,waiter:{...t,carry:0,job:null}},events:[{type:`plateServed`,table:t.table,kind:t.kind,dish:n}]}}function Jm(e,t,n){let r=t.timer+n;return r<Lm.clearTime?{state:{...e,waiter:{...t,timer:r}},events:[]}:{state:{...e,dirtyTables:e.dirtyTables.filter(e=>e!==t.table),waiter:{...t,phase:`idle`,job:null,timer:0}},events:[{type:`tableCleared`,table:t.table}]}}var Ym=r.tables;function Xm(e,t){if(Pm(e)===0)return{state:e,events:[]};let n=eh(Qm(e,t),t),r=Hm(n.state,t);return{state:r.state,events:[...n.events,...r.events]}}function Zm(e,t){return!e.guests.some(e=>e.table===t&&e.phase!==`leaving`)&&!e.dirtyTables.includes(t)}function Qm(e,t){let n=Math.min(e.guestTimer+t,Ym.every),i=Array.from({length:Pm(e)},(e,t)=>t).find(t=>Zm(e,t));if(n<Ym.every||i===void 0)return{...e,guestTimer:n};let a=Ze(e),o=_m(e.seed),s=_m(o.seed),c=Am(e)?_m(s.seed):{value:1,seed:s.seed},l={id:e.nextId,table:i,pos:r.queue.spawn,phase:`coming`,wants:a[Math.floor(o.value*a.length)]??`meat`,dish:c.value<Ym.iskender.chance?`iskender`:`porsiyon`,wantsTea:s.value<Ym.tea.chance,waited:0,timer:0,look:e.nextId%r.queue.looks};return{...e,guestTimer:0,seed:c.seed,nextId:e.nextId+1,guests:[...e.guests,l]}}function $m(e,t,n){let i=r.queue.speed*t;switch(e.phase){case`coming`:{let t=Je(e.pos,Fm(e.table),i);return{...e,pos:t.pos,phase:t.arrived?`waiting`:`coming`}}case`leaving`:{let t=Je(e.pos,r.queue.exit,i);return t.arrived?null:{...e,pos:t.pos}}case`eating`:return e.timer+t<Ym.eatTime?{...e,timer:e.timer+t}:e.wantsTea?{...e,phase:`tea`,timer:0}:{...e,phase:`leaving`};case`tea`:return e.timer+t<Ym.tea.time?{...e,timer:e.timer+t}:{...e,phase:`leaving`};case`waiting`:{if(e.table===n)return e;let r=e.waited+t;return r>=Ym.patience?{...e,phase:`leaving`}:{...e,waited:r}}}}function eh(e,t){let n=e.waiter?.job===`serve`&&e.waiter.phase===`toTable`&&e.waiter!==null?e.waiter.table:null,r=e.guests.map(e=>({before:e,after:$m(e,t,n)})),i=r.flatMap(({after:e})=>e===null?[]:[e]),a=(e,t)=>r.filter(({before:n,after:r})=>e.includes(n.phase)&&r?.phase===t).map(({before:e})=>e.table),o=a([`eating`,`tea`],`leaving`),s=a([`eating`],`tea`),c=o.length===0?e.dirtyTables:[...e.dirtyTables,...o],l=s.map(e=>({type:`teaServed`,table:e})),u=s.length===0?{}:Em(e,s.length*Ym.tea.coins);return{state:{...e,...u,guests:i,dirtyTables:c},events:l}}var K={fovDeg:32,pitchDeg:58,maxPixelRatio:2,shadowMapSize:1024,focus:{x:0,z:.1},frame:[{x:-4,y:0,z:-8.2},{x:4,y:0,z:-8.2},{x:-4,y:2.4,z:-8.2},{x:4,y:2.4,z:-8.2},{x:-4,y:0,z:8.4},{x:4,y:0,z:8.4}],frameLimit:.96,camera:{wide:{pitchDeg:58,yawDeg:0},close:{pitchDeg:52,yawDeg:0,share:.76,followX:.3},side:{pitchDeg:50,yawDeg:32},ease:5},minDistance:6,maxDistance:90,fitIterations:24,turnRate:14,flier:{slice:.22,deposit:.16,serve:.2,collect:.18,arc:.6,handHeight:.8},popIn:{delay:.14,duration:.18},coinDrop:{duration:.35,arc:.9},order:{size:.95,height:2.05,shownSlots:2},patience:{width:.8,height:.13,y:1.85,yAboveOrder:2.68,showAfter:1.5,amber:.6,red:.3},spit:{rowScale:.8,thinnest:.3,idleSpin:.8,activeSpin:3.2,bandsAppear:.5,carriedScale:.7,spareScale:.55},chop:{rate:15,swing:.55,lean:.1},walk:{rate:12,stride:.75,holdAngle:-1.25},burst:{small:14,big:46,speed:4.2,lift:5.5,gravity:11,life:.9,poolSize:140,padHeight:.3},popup:{life:.8,rise:1.3,width:1.5,height:.75,startY:1.9,poolSize:6,cacheSize:64},gauge:{icon:.42,iconLift:.3,height:.95,gap:.62,inset:.3,pulse:.14},van:{from:-14,stop:-3.2,to:14,speed:7,pause:2.2},crate:{y:.78,z:.5},day:{steps:400,halo:{bulb:1.05,lamp:3},keys:[{at:0,sun:16769725,strength:.92,sky:1,lamps:.7,night:0},{at:.3,sun:16777215,strength:1,sky:1,lamps:.7,night:0},{at:.62,sun:16773334,strength:1,sky:1,lamps:.7,night:0},{at:.73,sun:16757866,strength:.88,sky:.92,lamps:.9,night:.12},{at:.8,sun:16754784,strength:.64,sky:.62,lamps:1,night:1},{at:.96,sun:16754784,strength:.64,sky:.62,lamps:1,night:1}]},limbSettle:10,giveWay:{gap:.8,rate:10,cashierReach:.75},coinIdle:{spin:1.8,bob:.02,bobRate:2.6,rock:.14,rockRate:1.9,flips:1},shave:{perSlice:3,poolSize:12,duration:.3,stagger:.035,arc:.28,scatter:.13,spin:17,trayHeight:.9,trayReach:.45,shudder:.014,shudderRate:70,shudderFade:12},seat:{distance:.82,swing:.5,top:.26,legs:-1,settle:8,rest:-1.75,lift:-2.35,biteRate:4.4,nod:.09,lean:.1,plate:.26},queueLife:{glance:.8,peek:.06,fretFrom:.5,shakeFrom:.72,tapRate:9,tap:.4,shakeRate:10,shake:.2,slump:.3,slumpRate:5},photo:{width:.44,height:.54,y:1,border:.045}},q={ground:15320463,paving:`#e9c58f`,pavingJoint:`#dcb57c`,floorA:`#8fd3ca`,floorB:`#7cc5bb`,curb:13208139,path:16179898,counterWood:11034410,counterTop:4871520,tableTop:16246726,stripeRed:`#e23b3b`,stripeWhite:`#ffffff`,signText:`#ffffff`,signEdge:`#ffd23f`,steel:13620957,steelDark:8358549,meat:11031851,meatRaw:14916236,chicken:14393919,chickenDark:12089890,chickenRaw:16178368,chickenSleeve:16765503,orderMeat:`#a8552b`,orderChicken:`#e6ab3d`,coldStore:14673902,coldStoreDoor:9418710,meatDark:8206361,heater:16742959,tomato:14828847,pepper:5219914,lavash:15783586,paper:16777215,coat:14826299,hat:16777215,apron:16777215,dark:2827296,skin:[15909531,14723191,13011547,10118464,16109744],hair:[3811872,7031343,2039588,14263361,9190186],shirts:[5214182,15905331,6274938,11562968,15759962],coin:16763187,coinRim:16767050,coinFace:15770908,coinStar:16773280,rice:16774880,yoghurt:16777215,tea:12075804,plant:5219914,pot:13201471,umbrellas:[14826299,5214182],arrow:16765503,cup:16777215,salgamCup:16176604,salgamLid:11018826,cupLid:3776728,fridge:3776728,fridgeDoor:14216953,helperCoat:5214182,cashierCoat:3120277,waiterCoat:2827296,plate:16249834,pads:{carry:`#4f8fe6`,slice:`#f07a5a`,price:`#3fa863`,helper:`#e0a01c`,fridge:`#39a0d8`,window:`#8a6fd8`,chicken:`#c98a1e`,counter:`#6f8296`,fryer:`#e0762a`,cashier:`#2f9c95`,tables:`#b0623c`,branch:`#d94f7a`,boost:`#a45fd0`},trousers:3883602,road:7040890,roadLine:16052710,trunk:9067051,tree:4168266,lamp:16773808,confetti:[14826299,16763187,5214182,4171875,10772432,16777215],vipShirt:16763187,crown:16769658,branchTints:[16777215,16765608,14272767,16760786,13168558,16773280]},th=1.25,nh=.22,rh=.07;function ih(e){let t=.46+e,n=.17+e,r=new Yc;return r.moveTo(0,-e*1.6),r.lineTo(t,.52),r.lineTo(n,.52),r.lineTo(n,1.05+e),r.lineTo(-n,1.05+e),r.lineTo(-n,.52),r.lineTo(-t,.52),r.closePath(),r}function ah(e){let t=new Ha,n=new Ha,r=new Is(new Ll(ih(0)),new ws({color:q.arrow,side:2})),i=new Is(new Ll(ih(rh)),new ws({color:q.dark,side:2}));i.position.z=-.01,n.add(i,r),n.rotation.x=-Wi.degToRad(90-K.pitchDeg);let a=new Is(new Il(.85,1,28).rotateX(-Math.PI/2),new ws({color:q.arrow,transparent:!0,opacity:.85,depthWrite:!1}));return a.position.y=.03,t.add(n,a),t.visible=!1,e.add(t),{update(e,r,i){t.visible=e!==null,e!==null&&(t.position.set(e.x,r,e.z),n.position.y=th+Math.abs(Math.sin(i*5))*nh,a.scale.setScalar(1+Math.sin(i*6)*.1))}}}var J={head:{y:1.14,radius:.25},torsoDepth:.8,shoulder:{x:.27,y:.8},hip:{x:.105,y:.36},legLength:.36,armLength:.33,walk:{radPerMetre:3.6,maxStep:.5,legSwing:.62,armSwing:.7,sway:.05,twist:.1,lean:.07},idle:{breath:.006,breathRate:2.2,shift:.035,shiftRate:.8,slide:.02,dangle:.05},armSplay:.1,hop:{height:.3,each:.3,count:2},holdRate:12,hand:{x:.2,y:.76,z:.32},build:{minScale:.89,scaleStep:.04,scaleSteps:5,vipScale:1.05,minGirth:.94,girthStep:.07,girthSteps:3},tray:{y:.72,z:.5,width:.82,depth:.52,thickness:.03},trayHold:-1.05,chefGirth:1.14,courierSign:{height:2.2,width:1.35,tall:.9},castSize:40,vipCastSize:4},Y={ink:q.dark,blush:15764090,tops:[5214182,6274938,11562968,15759962,3716776,16050904,3494031,10135626,11892298],accents:[16777215,16049072,2827296],cream:16052710,trousers:[q.trousers,3099256,7035723,9080729,3754810,14272936],shoes:[2827296,15855076,9063210,14238778],hair:[...q.hair,12170412],hats:[14238778,3494031,15855076,4168266,2827296],scarves:[13134735,6979536,15260864,4169103,9134015],straw:15255672,strawBand:9063210,gold:q.vipShirt,goldDark:14721052,crown:q.crown,cape:12724794,gem:3776728,chefButton:16767370,chefMedal:16102698,chefKerchief:16765503,apprenticeKerchief:14826299,flatCap:3033725,courier:16723592,courierDark:12851306,courierJacket:2961730,lettuce:8372810,toast:14264422,sleeveBand:14826299,fries:16765514,friesDark:15905331,friesBox:14826299,drinkStraw:14826299},oh=new V;function sh(e,t,n,r,i,a){let o=2*Math.PI*i/4,s=Math.max(a-2*i,0),c=Math.PI/4;oh.copy(t),oh[r]=0,oh.normalize();let l=.5*o/(o+s),u=1-oh.angleTo(e)/c;return Math.sign(oh[n])===1?u*l:s/(o+s)+l+l*(1-u)}var ch=class e extends pc{constructor(e=1,t=1,n=1,r=2,i=.1){let a=r*2+1;if(i=Math.min(e/2,t/2,n/2,i),super(1,1,1,a,a,a),this.type=`RoundedBoxGeometry`,this.parameters={width:e,height:t,depth:n,segments:r,radius:i},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let s=new V,c=new V,l=new V(e,t,n).divideScalar(2).subScalar(i),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,m=new V,h=.5/a;for(let r=0,a=0;r<u.length;r+=3,a+=2)switch(s.fromArray(u,r),c.copy(s),c.x-=Math.sign(c.x)*h,c.y-=Math.sign(c.y)*h,c.z-=Math.sign(c.z)*h,c.normalize(),u[r+0]=l.x*Math.sign(s.x)+c.x*i,u[r+1]=l.y*Math.sign(s.y)+c.y*i,u[r+2]=l.z*Math.sign(s.z)+c.z*i,d[r+0]=c.x,d[r+1]=c.y,d[r+2]=c.z,Math.floor(r/p)){case 0:m.set(1,0,0),f[a+0]=sh(m,c,`z`,`y`,i,n),f[a+1]=1-sh(m,c,`y`,`z`,i,t);break;case 1:m.set(-1,0,0),f[a+0]=1-sh(m,c,`z`,`y`,i,n),f[a+1]=1-sh(m,c,`y`,`z`,i,t);break;case 2:m.set(0,1,0),f[a+0]=1-sh(m,c,`x`,`z`,i,e),f[a+1]=sh(m,c,`z`,`x`,i,n);break;case 3:m.set(0,-1,0),f[a+0]=1-sh(m,c,`x`,`z`,i,e),f[a+1]=1-sh(m,c,`z`,`x`,i,n);break;case 4:m.set(0,0,1),f[a+0]=1-sh(m,c,`x`,`y`,i,e),f[a+1]=1-sh(m,c,`y`,`x`,i,t);break;case 5:m.set(0,0,-1),f[a+0]=sh(m,c,`x`,`y`,i,e),f[a+1]=1-sh(m,c,`y`,`x`,i,t)}}static fromJSON(t){return new e(t.width,t.height,t.depth,t.segments,t.radius)}};function lh(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new Ko;c.morphTargetsRelative=s;let l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0,p=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let t in d.morphAttributes){if(!i.has(t))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;if(d.morphAttributes[t].length!==e[0].morphAttributes[t].length)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have the same number of morph targets for the "`+t+`" morph attribute.`),null;o[t]===void 0&&(o[t]=[]),o[t].push(d.morphAttributes[t]),p++}if(p!==i.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of morph attributes.`),null;if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=uh(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=uh(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function uh(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new jo(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}var dh={shade:{midFrom:.05,fullFrom:.5,midLevel:.6,edge:.5,rampWidth:256},sheen:{color:16769720,strength:.42,power:2.4},sun:{color:16773330,top:.66,direction:{x:-7,y:16,z:11},distance:30},sky:{color:14674175,bounce:16767398,strength:.4},fill:{color:14674175,strength:.14,direction:{x:8,y:4,z:3}},night:{sky:5531848,bounce:3882874,backdrop:1317436,glassDim:.55},shadow:{volume:{minX:-5,maxX:7,minY:0,maxY:3.5,minZ:-11,maxZ:9},margin:.5,radius:1.6,bias:-4e-4,normalBias:.025,strength:1},haze:{enabled:!0,startZ:-13,endZ:-40}};function fh(e){return new V(e.x,e.y,e.z).normalize()}var ph=fh(dh.sun.direction),mh=fh(dh.fill.direction),hh=Math.PI,gh={sun:dh.sun.top/ph.y*hh,sky:dh.sky.strength*hh,fill:dh.fill.strength*hh};function _h(e,t,n){if(t<=e)return n<e?0:1;let r=Math.min(Math.max((n-e)/(t-e),0),1);return r*r*(3-2*r)}function vh(e){let{midFrom:t,fullFrom:n,midLevel:r,edge:i}=dh.shade,a=i/2,o=_h(t-a,t+a,e),s=_h(n-a,n+a,e);return r*o+(1-r)*s}var yh=null;function bh(){if(yh!==null)return yh;let e=dh.shade.rampWidth,t=new Uint8Array(e);for(let n=0;n<e;n+=1){let r=(n+.5)/e*2-1;t[n]=Math.round(vh(r)*ph.y*255)}let n=new zs(t,e,1,ir),r=dh.shade.edge>0?Ln:Pn;return n.minFilter=r,n.magFilter=r,n.needsUpdate=!0,yh=n,n}function xh(e){let t=new U(dh.sun.color).multiplyScalar(dh.sun.top).add(new U(dh.sky.color).multiplyScalar(dh.sky.strength)).add(new U(dh.fill.color).multiplyScalar(dh.fill.strength*Math.max(mh.y,0)));return new U(e).multiply(t)}var Sh=new Map;function Ch(e){return new U(e).getHexString()}function wh(e,t){let n=t.emissive===void 0?``:Ch(t.emissive),r=t.flatShading===!0?`flat`:``;return[Ch(e),n,t.emissiveIntensity??``,r,t.map?.uuid??``].join(`|`)}var Th=new U(dh.sheen.color),Eh=e=>e.toFixed(4),Dh=`
  float sheenEdge = pow(1.0 - saturate(dot(normalize(normal), normalize(vViewPosition))), ${Eh(dh.sheen.power)});
  outgoingLight += diffuseColor.rgb * vec3(${Eh(Th.r)}, ${Eh(Th.g)}, ${Eh(Th.b)}) * (sheenEdge * ${Eh(dh.sheen.strength)});
  #include <opaque_fragment>`,Oh=class extends Zl{onBeforeCompile(e){e.fragmentShader=e.fragmentShader.replace(`#include <opaque_fragment>`,Dh)}customProgramCacheKey(){return`sheen-toon`}};function kh(e,t){let n=new Oh({color:e,gradientMap:bh(),emissive:t.emissive??0,emissiveIntensity:t.emissiveIntensity??1,map:t.map??null});return t.flatShading===!0&&(n.flatShading=!0),n}function Ah(e,t={}){let n=wh(e,t),r=Sh.get(n);if(r!==void 0)return r;let i=kh(e,t);return Sh.set(n,i),i}function jh(e,t,n=0,r=0,i=0){let a=new Is(e,t);return a.position.set(n,r,i),a.castShadow=!0,a.receiveShadow=!0,a}function Mh(e,t,n,r){return e+(t-e)*(1-Math.exp(-n*r))}function Nh(e,t,n,r){return e+Math.atan2(Math.sin(t-e),Math.cos(t-e))*(1-Math.exp(-n*r))}var Ph=1.70158;function Fh(e){let t=Math.min(Math.max(e,0),1)-1;return 1+2.70158*t*t*t+Ph*t*t}var Ih={ball:new zl(1,12,8),ballFine:new zl(1,16,10),ballLow:new zl(1,6,4),dome:new zl(1,16,5,0,Math.PI*2,0,Math.PI/2),tube:new gc(1,1,1,12),ring:new gc(1,1,1,12,1,!0),cone:new _c(1,1,8),box:new ch(1,1,1,1,.12),crate:new pc(1,1,1)},Lh=new U;function X(e,t,n={}){let r=e.index===null?e.clone():e.toNonIndexed();r.deleteAttribute(`uv`),r.scale(n.sx??1,n.sy??1,n.sz??1),n.rz!==void 0&&r.rotateZ(n.rz),n.rx!==void 0&&r.rotateX(n.rx),n.ry!==void 0&&r.rotateY(n.ry),r.translate(n.x??0,n.y??0,n.z??0),n.flat===!0&&r.computeVertexNormals();let i=r.getAttribute(`position`).count,a=new Float32Array(i*3);Lh.set(t);for(let e=0;e<i;e+=1)a[e*3]=Lh.r,a[e*3+1]=Lh.g,a[e*3+2]=Lh.b;return r.setAttribute(`color`,new Po(a,3)),r}function Rh(e){let t=lh([...e],!1);if(t===null)throw Error(`Figure parts could not be merged into one geometry`);return e.forEach(e=>e.dispose()),t}function zh(e,t,n,r=10){return new gc(e,t,n,r)}function Bh(e,t=12,n=0,r=Math.PI*2){return new Pl(e.map(([e,t])=>new B(e,t)),t,n,r)}var Vh=null;function Hh(){if(Vh!==null)return Vh;let e=Ah(16777215).clone();return e.vertexColors=!0,Vh=e,e}function Uh(e,t){let n=new Is(e,Hh());return n.castShadow=t,n.receiveShadow=!1,n}function Wh(e,t){return new U(e).multiplyScalar(t).getHex()}function Gh(e,t,n){return new U(e).lerp(new U(t),n).getHex()}function Kh(e,t){let n=Math.imul(e+1,374761393)+Math.imul(t+1,668265263),r=Math.imul(n^n>>>13,1274126177);return(r^r>>>16)>>>0}function qh(e,t){return e[t%e.length]}var Jh=Math.PI,Yh=Math.PI*2;function Xh(e,t,n,r,i,a){return{round:new zl(1,e[0],e[1]),ball:new zl(1,t[0],t[1]),small:new zl(1,n[0],n[1]),tiny:new zl(1,r[0],r[1]),dome:new zl(1,i[0],i[1],0,Yh,0,Jh/2),tube:new gc(1,1,1,a),ring:new gc(1,1,1,a,1,!0),turns:a}}var Zh=Xh([16,10],[10,7],[8,5],[6,4],[14,5],12),Qh=Xh([24,16],[14,10],[10,7],[7,5],[24,7],24);function $h(e){return e?Qh:Zh}var eg=new zl(1,4,2),tg={radius:.066,long:.13,short:.05,shortRadius:.07},ng={y:-.102,radius:.073,height:.034},rg={wide:.05,tall:.062,deep:.056,thumbUp:.022,thumbOut:.046,thumb:.022,thumbTall:.03,thumbTilt:.6},ig={wide:.07,long:.125,sole:.03,tall:.078,forward:.045,upperInset:.93},ag=15855076,og=7031343,sg=.6;function cg(e,t,n){return{turns:t,longSleeve:new mc(tg.radius,tg.long,n,t),shortSleeve:new mc(tg.shortRadius,tg.short,n,t),toe:new zl(1,t+2,n+1,0,Math.PI*2,0,Math.PI/2),disc:new gc(1,1,1,t+2),thumb:e?$h(!0).tiny:eg,detail:$h(e)}}var lg=cg(!1,8,3),ug=cg(!0,14,4);function dg(e,t,n,r){return new gc(e,t,n,r,1,!0)}function fg(e,t){let n=-J.armLength;return[X(t.detail.small,e,{y:n,sx:rg.wide,sy:rg.tall,sz:rg.deep}),X(t.thumb,e,{y:n+rg.thumbUp,z:rg.thumbOut,sx:rg.thumb,sy:rg.thumbTall,sz:rg.thumb,rx:rg.thumbTilt})]}function pg(e,t){return e.shortSleeves?Rh([X(t.shortSleeve,e.sleeve,{y:-.04}),X(t.disc,Wh(e.sleeve,.88),{y:ng.y,sx:ng.radius,sy:ng.height,sz:ng.radius}),X(dg(.055,.048,.2,t.turns),e.skin,{y:-.2}),...fg(e.skin,t)]):Rh([X(t.longSleeve,e.sleeve,{y:-.09}),X(dg(.062,.055,.12,t.turns),Wh(e.sleeve,.9),{y:-.24}),...fg(e.skin,t)])}function mg(e){let t=new U(e);return(t.r+t.g+t.b)/3>sg?og:ag}function hg(e,t){let n=-J.legLength;return Rh([X(dg(.08,.066,.3,t.turns),e.legs,{y:-.14}),X(t.disc,mg(e.shoes),{y:n+ig.sole/2,z:ig.forward,sx:ig.wide,sy:ig.sole,sz:ig.long}),X(t.toe,e.shoes,{y:n+ig.sole,z:ig.forward,sx:ig.wide*ig.upperInset,sy:ig.tall,sz:ig.long*ig.upperInset})])}var gg=new Map,_g=new Map;function vg(e,t,n){let r=e.get(t);if(r!==void 0)return r;let i=n();return e.set(t,i),i}function yg(e,t,n){let r=Uh(e,!1);return r.position.set(t,n,0),r}function bg(e,t){let n=e.fine===!0,r=n?ug:lg,i=vg(gg,`${e.sleeve}|${e.skin}|${e.shortSleeves}|${n}`,()=>pg(e,r)),a=vg(_g,`${e.legs}|${e.shoes}|${n}`,()=>hg(e,r)),o=J.shoulder.x*t,s=J.hip.x*t;return{leftArm:yg(i,-o,J.shoulder.y),rightArm:yg(i,o,J.shoulder.y),leftLeg:yg(a,-s,J.hip.y),rightLeg:yg(a,s,J.hip.y)}}function xg(e,t,n){let r=new Ha,i=new Ha,a=bg(t,n);return i.add(Uh(e,!0),a.leftArm,a.rightArm),r.add(i,a.leftLeg,a.rightLeg),{group:r,body:i,limbs:a}}function Sg(e,t){return{phase:0,walk:0,heading:0,moving:!1,lastX:e,lastZ:t}}var Cg=5e-4;function wg(e,t,n,r){let i=t-e.lastX,a=n-e.lastZ,o=Math.hypot(i,a);e.moving=o>Cg,e.moving&&(e.heading=Math.atan2(i,a),e.phase+=Math.min(o,J.walk.maxStep)*J.walk.radPerMetre),e.walk=Mh(e.walk,+!!e.moving,K.limbSettle,r),e.lastX=t,e.lastZ=n}function Tg(e,t,n){return e+(t-e)*n}function Eg(e,t,n,r,i,a){let{body:o,limbs:s}=e,{walk:c,idle:l}=J,u=t.walk,d=1-u,f=i+a,p=Math.sin(t.phase),m=p*c.legSwing*u,h=J.legLength*(1-Math.cos(m));s.leftLeg.rotation.x=m,s.rightLeg.rotation.x=-m,s.leftLeg.position.y=J.hip.y-h,s.rightLeg.position.y=J.hip.y-h;let g=p*c.armSwing*u,_=Math.sin(f*1.3)*l.dangle*d;s.leftArm.rotation.x=Tg(-g+_,n.holdAngle,r),s.rightArm.rotation.x=Tg(g-_,n.holdAngle,r);let v=Tg(-J.armSplay,n.tuck,r);s.leftArm.rotation.z=v,s.rightArm.rotation.z=-v;let y=Math.sin(f*l.shiftRate)*d,b=Math.sin(f*.55)*Math.sin(f*.23+1)*n.look*d;o.position.x=y*l.slide,o.position.y=Math.sin(f*l.breathRate)*l.breath*d-h,o.rotation.x=c.lean*u,o.rotation.y=p*c.twist*u+b,o.rotation.z=p*c.sway*u+y*l.shift}function Dg(e,t,n){let{rings:r,sides:i,flatten:a,facing:o}=n,s=[],c=[],l=new V,u=new V,d=new V;for(let n=0;n<=r;n+=1){let c=n/r,f=e.getPoint(c);e.getTangent(c,l),u.crossVectors(o,l).normalize(),d.crossVectors(l,u).normalize();let p=t(c);for(let e=0;e<i;e+=1){let t=e/i*Math.PI*2,n=Math.cos(t)*p,r=Math.sin(t)*p*a;s.push(f.x+u.x*n+d.x*r,f.y+u.y*n+d.y*r,f.z+u.z*n+d.z*r)}}for(let e=0;e<r;e+=1)for(let t=0;t<i;t+=1){let n=(t+1)%i,r=e*i+t,a=e*i+n,o=(e+1)*i+t,s=(e+1)*i+n;c.push(r,a,o,a,s,o)}let f=new Ko;return f.setAttribute(`position`,new Po(s,3)),f.setIndex(c),f.computeVertexNormals(),f}var Og=[[-.012,.004,.022],[.035,-.006,.036],[.082,-.026,.037],[.125,-.036,.029],[.156,-.024,.02],[.17,.002,.013],[.163,.026,.008],[.146,.034,.002]],kg=.62,Ag={rings:16,sides:8,flatten:kg,facing:new V(0,0,1)},jg=.012;function Mg(e){let t=e*(Og.length-1),n=Math.min(Math.floor(t),Og.length-2),r=Og[n][2];return r+(Og[n+1][2]-r)*(t-n)}function Ng(e,t){let n=Og.length-1;return[-1,1].map(r=>Dg(new Oc(Og.map(([i,a,o],s)=>{let c=r*i,l=e+a,u=(s/n)**2*jg;return new V(c,l,t(c,l)+o*kg*.5+u)})),Mg,Ag))}var Pg=J.head,Fg=Pg.radius,Ig=.95,Lg={yaw:.36,pitch:.07,wide:.037,tall:.048,deep:.02},Rg={yaw:.05,pitch:.085,size:.012,lift:1.035},zg={pitch:.39,wide:.05,tall:.014,deep:.02,tilt:.16,heroScale:1.3},Bg={pitch:-.07,wide:.04,tall:.036,deep:.046},Vg={yaw:.72,pitch:-.14,wide:.046,tall:.034,deep:.02,blush:.42,heroBlush:.62},Hg={drop:.01,wide:.034,tall:.058,deep:.042},Ug={pitch:-.48,wide:.06,tall:.042,deep:.03,tilt:.42},Wg=-.27,Gg=5905436,Kg=15234415,qg=16777215,Jg=new Bl(.052,.011,4,8,Math.PI),Yg=new Bl(.052,.009,4,10),Xg=new zl(1,12,4,0,Math.PI*2,Math.PI/2,Math.PI/2);function Zg(e,t,n=1){let r=Math.cos(t)*Fg*n;return{x:Math.sin(e)*r,y:Pg.y+Math.sin(t)*Fg*Ig*n,z:Math.cos(e)*r*Ig}}function Qg(e,t,n=1){return{...Zg(e,t,n),rx:-t,ry:e}}function $g(e,t){let n=(t-Pg.y)/Ig;return Ig*Math.sqrt(Math.max(Fg*Fg-e*e-n*n,0))}function e_(e,t,n){let r=e*Lg.yaw;return[X(n.small,Y.ink,{...Qg(r,Lg.pitch,.975),sx:Lg.wide,sy:Lg.tall,sz:Lg.deep}),X(t?n.tiny:eg,16777215,{...Zg(r+Rg.yaw,Lg.pitch+Rg.pitch,Rg.lift),sx:Rg.size,sy:Rg.size,sz:Rg.size*.6})]}function t_(e){let t=Zg(0,Ug.pitch,.975),n=t.y??0,r=t.z??0;return[X(Xg,Gg,{...t,sx:Ug.wide,sy:Ug.tall,sz:Ug.deep,rx:Ug.tilt}),X(Ih.box,qg,{y:n-.006,z:r+.012,sx:Ug.wide*1.3,sy:.013,sz:.012,rx:Ug.tilt}),X(e.tiny,Kg,{y:n-Ug.tall*.62,z:r+.004,sx:Ug.wide*.5,sy:.015,sz:.02,rx:Ug.tilt})]}function n_(e,t){return e?t_(t):[X(Jg,Y.ink,{...Zg(0,-.42,.985),rz:Math.PI,rx:.4})]}function r_(e,t){let{skin:n,hero:r}=e,i=Gh(n,Y.blush,r?Vg.heroBlush:Vg.blush),a=r?zg.heroScale:1,o=[-1,1];return[X(t.round,n,{y:Pg.y,sx:Fg,sy:Fg*Ig,sz:Fg*Ig}),X(t.small,Wh(n,.9),{...Zg(0,Bg.pitch),sx:Bg.wide,sy:Bg.tall,sz:Bg.deep}),...n_(r,t),...o.flatMap(o=>[X(t.tiny,n,{x:o*Fg*.97,y:Pg.y-Hg.drop,sx:Hg.wide,sy:Hg.tall,sz:Hg.deep}),...e_(o,r,t),X(t.tiny,e.brow,{...Qg(o*Lg.yaw,zg.pitch,.99),sx:zg.wide*a,sy:zg.tall*a,sz:zg.deep,rz:o*-zg.tilt}),X(t.tiny,i,{...Qg(o*Vg.yaw,Vg.pitch,.972),sx:Vg.wide,sy:Vg.tall,sz:Vg.deep})])]}function i_(e,t,n){if(e===`none`)return[];if(e===`beard`)return[X(n.ball,t,{y:Pg.y-.17,z:.1,sx:.2,sy:.14,sz:.13})];let r=Zg(0,Wg);return e===`bigMoustache`?Ng(r.y??0,$g).map(e=>{let n=X(e,t);return e.dispose(),n}):[-1,1].map(e=>X(n.small,t,{x:e*.055,y:r.y,z:(r.z??0)+.005,sx:.075,sy:.03,sz:.035,rz:e*-.35}))}function a_(){return[X(Yg,Y.ink,{...Zg(-Lg.yaw,Lg.pitch,1.04),ry:-Lg.yaw}),X(Yg,Y.ink,{...Zg(Lg.yaw,Lg.pitch,1.04),ry:Lg.yaw}),X(Ih.crate,Y.ink,{...Zg(0,Lg.pitch,1.04),sx:.06,sy:.014,sz:.014})]}var o_=J.head,s_=o_.radius,c_=new Bl(.25,.036,4,12),l_=new gc(1,1,1,20);function u_(e,t){return X(t.dome,e,{y:o_.y,sx:s_*1.05,sy:s_*1.05,sz:s_*1.05,rx:-.45})}function d_(e,t,n){let r=u_(t,n);switch(e){case`bald`:return r.dispose(),[];case`short`:return[r];case`long`:return[r,X(n.ball,t,{y:o_.y-.1,z:-.12,sx:s_*1.04,sy:s_*1.15,sz:s_*.6})];case`bun`:return[r,X(n.ball,t,{y:o_.y+.24,z:-.13,sx:.1,sy:.1,sz:.1})];case`ponytail`:return[r,X(n.tiny,t,{y:o_.y+.07,z:-.27,sx:.06,sy:.06,sz:.06}),X(n.ball,t,{y:o_.y-.09,z:-.31,sx:.07,sy:.17,sz:.07,rx:-.2})];case`quiff`:return[r,X(n.ball,t,{y:o_.y+.23,z:.1,sx:.16,sy:.09,sz:.13})];case`afro`:return r.dispose(),[X(n.ball,t,{y:o_.y+.13,z:-.07,sx:.28,sy:.28,sz:.28})];case`pigtails`:return[r,X(n.ball,t,{x:-.28,y:o_.y-.07,z:-.05,sx:.085,sy:.11,sz:.085}),X(n.ball,t,{x:.28,y:o_.y-.07,z:-.05,sx:.085,sy:.11,sz:.085})]}}function f_(e,t,n){switch(e){case`none`:return[];case`cap`:return[X(n.dome,t,{y:o_.y+.05,sx:.264,sy:.215,sz:.264,rx:-.15}),X(l_,Wh(t,.8),{y:o_.y+.095,z:.31,sx:.17,sy:.022,sz:.14,rx:.12}),X(n.tiny,Wh(t,.8),{y:o_.y+.265,z:-.03,sx:.03,sy:.02,sz:.03})];case`beanie`:return[X(n.dome,t,{y:o_.y+.04,sx:.268,sy:.26,sz:.268,rx:-.2}),X(c_,Wh(t,.82),{y:o_.y+.06,rx:Math.PI/2-.2}),X(n.tiny,Y.cream,{y:o_.y+.33,z:-.06,sx:.07,sy:.07,sz:.07})];case`scarf`:return[X(n.round,t,{y:o_.y+.05,z:-.07,sx:.275,sy:.275,sz:.27}),X(zh(.13,.25,.16,n.turns),t,{y:.9,sz:J.torsoDepth})];case`straw`:return[X(l_,t,{y:o_.y+.15,sx:.34,sy:.022,sz:.34}),X(zh(.17,.205,.16,n.turns),t,{y:o_.y+.23}),X(n.ring,Y.strawBand,{y:o_.y+.19,sx:.207,sy:.045,sz:.207})]}}function p_(e,t){return t===`none`?e:t===`scarf`?`bald`:e===`afro`||e===`quiff`||e===`bun`?`short`:e}function m_(e){let t=e.hero===!0,n=$h(t);return[...r_({skin:e.skin,brow:Wh(e.hair,.8),hero:t},n),...i_(e.faceHair,e.hair,n),...e.glasses?a_():[],...d_(p_(e.hairStyle,e.hat),e.hair,n),...f_(e.hat,e.hatColor,n)]}var h_=J.head,g_=h_.y+.25,__=12,v_=48,y_=.05,b_=.1,x_=.47,S_=[[.2,-.02],[.238,.02],[.272,.08],[.298,.16],[.31,.25],[.3,.33],[.268,.4],[.21,.445],[.12,.465],[0,x_]],C_={radius:.23,bottom:.115,top:.275,lip:.012};function w_(){let e=g_,t=Bh(S_.map(([t,n])=>[t,e+n]),v_),n=t.getAttribute(`position`);for(let t=0;t<n.count;t+=1){let r=n.getX(t),i=n.getZ(t),a=n.getY(t)-e,o=Math.min(Math.max(a/b_,0),1),s=Math.min(Math.max((x_-a)/b_,.35),1),c=1+y_*Math.cos(Math.atan2(r,i)*__)*o*s;n.setX(t,r*c),n.setZ(t,i*c)}return t.computeVertexNormals(),T_(t,S_.length,v_),t}function T_(e,t,n){let r=e.getAttribute(`normal`);for(let e=0;e<t;e+=1){let i=e,a=n*t+e,o=r.getX(i)+r.getX(a),s=r.getY(i)+r.getY(a),c=r.getZ(i)+r.getZ(a),l=Math.hypot(o,s,c)||1;r.setXYZ(i,o/l,s/l,c/l),r.setXYZ(a,o/l,s/l,c/l)}}function E_(){let{radius:e,bottom:t,top:n,lip:r}=C_;return Bh([[e-r,h_.y+t],[e,h_.y+t+r],[e,h_.y+n-r],[e-r,h_.y+n]],Qh.turns)}function D_(){return[X(E_(),Wh(q.hat,.9)),X(w_(),q.hat)]}var O_=.06;function k_(e){return[X(Qh.dome,e,{y:h_.y+.13,z:.02,sx:.275,sy:.13,sz:.29,rx:O_}),X(Qh.ring,Wh(e,.88),{y:h_.y+.135,z:.02,sx:.277,sy:.03,sz:.292,rx:O_}),X(Qh.tube,Wh(e,.8),{y:h_.y+.118,z:.3,sx:.16,sy:.02,sz:.1}),X(Qh.tiny,Wh(e,.8),{y:h_.y+.26,z:.02,sx:.03,sy:.02,sz:.03})]}var A_=5;function j_(){let e=h_.y+.22,t=Array.from({length:A_},(t,n)=>{let r=n/A_*Math.PI*2;return X(Ih.cone,Y.crown,{x:Math.sin(r)*.165,y:e+.11,z:Math.cos(r)*.165,sx:.05,sy:.13,sz:.05})});return[X(zh(.2,.175,.1,Zh.turns),Y.crown,{y:e}),X(Zh.ball,Y.cape,{y:e+.05,sx:.15,sy:.07,sz:.15}),X(Zh.tiny,Y.gem,{y:e,z:.19,sx:.035,sy:.035,sz:.02}),...t]}var M_=-.45,N_=new zl(1,24,10,0,Math.PI*2,0,Math.PI*.62),P_=e=>new zl(1,3,10,e-.16,.32,0,Math.PI*.6);function F_(e){let t={y:h_.y+.03,z:-.02},n=Wh(e,.35);return[X(N_,e,{...t,sx:.285,sy:.285,sz:.285,rx:M_}),X(P_(Math.PI/2),16777215,{...t,sx:.29,sy:.29,sz:.29,rx:M_}),X(P_(Math.PI*1.5),16777215,{...t,sx:.29,sy:.29,sz:.29,rx:M_}),X(Ih.box,n,{y:h_.y+.065,z:.3,sx:.34,sy:.03,sz:.13,rx:.25}),X(Qh.tiny,n,{x:-.275,y:h_.y-.04,sx:.05,sy:.08,sz:.07}),X(Qh.tiny,n,{x:.275,y:h_.y-.04,sx:.05,sy:.08,sz:.07})]}var I_=J.torsoDepth,L_=[[.225,.44],[.22,.56],[.21,.68],[.222,.775],[.214,.825],[.185,.86],[.14,.883],[.08,.897],[0,.9]],R_=[[0,.3],[.11,.302],[.17,.32],[.205,.37],[.215,.46]],z_=[[0,.2],[.285,.2],[.3,.225],[.22,.5]];function B_(e){let t=L_[0];if(e<=t[1])return t[0];for(let t=1;t<L_.length;t+=1){let[n,r]=L_[t],[i,a]=L_[t-1];if(e<=r)return i+(n-i)*(e-a)/(r-a)}return 0}function V_(e){return .21*e*I_}function H_(e,t,n,r,i,a){return X(e.ring,t,{y:n,sx:r*a,sy:i,sz:r*a*I_})}var U_=.014,W_=[[.238,.585],[.229,.68],[.235,.765],[.23,.815]],G_=.6,K_=[[.286,.17],[.276,.3],[.262,.42],[.25,.52],[.243,.6]],q_=[[.262,.29],[.254,.4],[.246,.5],[.241,.6]],J_=1.3,Y_={y:.6,radius:.247,height:.036},X_=.86,Z_={fromAngle:.5,toAngle:1.75,fromY:.805,toY:.893,width:.017,proud:.006,points:6},Q_={rings:10,sides:6,flatten:.45,facing:new V(0,.75,.66)},$_={y:.852,size:.036,deep:.016,tilt:-.5},ev=[.63,.71,.79],tv=new Bl(.1,.024,6,20);function nv(e,t,n){let[r,i]=e[0],[a,o]=e[e.length-1];return Bh([[r-U_,i],...e,[a-U_,o]],n,-t,t*2)}function rv(e,t,n,r){let i=B_(t)+r;return new V(Math.sin(e)*i*n,t,Math.cos(e)*i*n*I_)}function iv(e){let{fromAngle:t,toAngle:n,fromY:r,toY:i,width:a,proud:o,points:s}=Z_;return[-1,1].map(c=>{let l=Dg(new Oc(Array.from({length:s},(a,l)=>{let u=l/(s-1);return rv(c*(t+(n-t)*u),r+(i-r)*u,e,o)})),()=>a,Q_),u=X(l,q.apron);return l.dispose(),u})}function av(e){return{sx:e,sz:e*I_}}function ov(e,t){let{top:n,girth:r}=e;return[X(nv(W_,G_,Math.round(t.turns/3)),q.apron,av(r)),X(nv(K_,J_,Math.round(t.turns/2)),q.apron,av(r)),H_(t,Wh(q.apron,X_),Y_.y,Y_.radius,Y_.height,r),...iv(r),X(tv,Wh(n,.82),{y:.887,rx:Math.PI/2,sx:1.12,sy:1.12}),X(t.small,Y.chefMedal,{y:$_.y,z:B_($_.y)*r*I_+$_.deep*.3,sx:$_.size,sy:$_.size,sz:$_.deep,rx:$_.tilt})]}function sv(e,t){let{top:n,accent:r,girth:i}=e,a=V_(i),o=ev.map((e,n)=>X(t.tiny,Y.chefButton,{y:e,z:a+.012-n*.004,sx:.022,sy:.022,sz:.016}));return[X(Ih.box,Wh(n,.86),{y:.71,z:a-.004,sx:.12,sy:.3,sz:.03}),...o,X(nv(q_,J_,Math.round(t.turns/2)),q.apron,av(i)),H_(t,Wh(q.apron,X_),Y_.y,Y_.radius,Y_.height,i),X(tv,n,{y:.885,rx:Math.PI/2,sx:1.1,sy:1.1}),X(Ih.cone,r,{y:.83,z:.165*i,sx:.065,sy:.1,sz:.03,rz:Math.PI})]}function cv(e,t){return e.outfit===`chef`?ov(e,t):sv(e,t)}var lv=new Bl(.1,.022,4,10),uv=new Bl(.19,.05,5,12);function dv(e){return X(lv,e,{y:.89,rx:Math.PI/2})}function fv(e,t){let n={sx:e.girth,sz:e.girth*I_},r=e.outfit===`dress`;return[X(Bh(r?z_:R_,t.turns),r?e.top:e.trousers,n),X(Bh(L_,t.turns),e.top,n),X(t.ring,e.skin,{y:.91,sx:.085,sy:.12,sz:.085})]}function pv(e,t){let{top:n,accent:r,girth:i}=e,a=V_(i);switch(e.outfit){case`stripe`:return[dv(Wh(n,.8)),H_(t,r,.58,.23,.05,i),H_(t,r,.68,.222,.05,i)];case`jacket`:return[X(Ih.box,r,{y:.66,z:a-.005,sx:.12,sy:.4,sz:.04}),X(Ih.crate,Wh(n,.78),{x:-.075,y:.74,z:a+.004,sx:.05,sy:.2,sz:.03,rz:.25}),X(Ih.crate,Wh(n,.78),{x:.075,y:.74,z:a+.004,sx:.05,sy:.2,sz:.03,rz:-.25})];case`dress`:return[dv(r),H_(t,r,.5,.232,.045,i)];default:return[dv(Wh(n,.8)),X(t.small,r,{y:.68,z:a-.003,sx:.07,sy:.07,sz:.02})]}}function mv(e,t){let n=V_(e.girth);return[X(Ih.box,Y.cream,{y:.68,z:n-.005,sx:.11,sy:.36,sz:.04}),X(t.tiny,Y.crown,{y:.74,z:n+.012,sx:.03,sy:.03,sz:.016}),X(Ih.box,Y.cape,{y:.58,z:-.2*e.girth,sx:.62,sy:.62,sz:.07,rx:.12}),X(uv,16777215,{y:.87,rx:Math.PI/2,sz:I_}),H_(t,Y.cape,.48,.232,.05,e.girth)]}function hv(e,t){let{accent:n,girth:r}=e,i=V_(r),a=Wh(n,.72);return[dv(Wh(e.top,1.5)),H_(t,16777215,.56,.232,.045,r),X(Ih.crate,n,{x:-.12,y:.72,z:i-.006,sx:.05,sy:.3,sz:.03}),X(Ih.crate,n,{x:.12,y:.72,z:i-.006,sx:.05,sy:.3,sz:.03}),X(Ih.box,n,{y:.66,z:-.4,sx:.6,sy:.54,sz:.42}),X(Ih.box,a,{y:.93,z:-.4,sx:.63,sy:.07,sz:.45}),X(t.tube,16777215,{y:.966,z:-.4,sx:.13,sy:.012,sz:.13}),X(t.tube,16777215,{y:.64,z:-.612,sx:.14,sy:.012,sz:.14,rx:Math.PI/2})]}function gv(e){let t=$h(e.hero===!0),n=fv(e,t);switch(e.outfit){case`chef`:case`apprentice`:return[...n,...cv(e,t)];case`royal`:return[...n,...mv(e,t)];case`rider`:return[...n,...hv(e,t)];default:return[...n,...pv(e,t)]}}function _v(){let{y:e,z:t,width:n,depth:r,thickness:i}=J.tray,a={sy:.05,y:e+.015};return[X(Ih.box,q.steel,{y:e,z:t,sx:n,sy:i,sz:r}),X(Ih.crate,q.steelDark,{...a,z:t-r/2,sx:n,sz:.03}),X(Ih.crate,q.steelDark,{...a,z:t+r/2,sx:n,sz:.03}),X(Ih.crate,q.steelDark,{...a,x:-n/2,z:t,sx:.03,sz:r}),X(Ih.crate,q.steelDark,{...a,x:n/2,z:t,sx:.03,sz:r})]}function vv(e){let t=e===`chef`;return{skin:q.skin[+!t],hair:q.hair[t?2:1],hairStyle:`short`,hat:`none`,hatColor:q.hat,faceHair:t?`bigMoustache`:`none`,glasses:!1,hero:!0}}function yv(e,t){let n=e===`chef`,r=vv(e),i=n?J.chefGirth:1,a=gv({outfit:e,top:t,accent:n?Y.chefKerchief:Y.apprenticeKerchief,trousers:q.trousers,skin:r.skin,girth:i,hero:!0}),o=n?D_():k_(Y.flatCap),s={sleeve:t,skin:r.skin,shortSleeves:n,legs:q.trousers,shoes:q.dark,fine:!0};return{geometry:Rh([...a,...m_(r),...o,..._v()]),limbs:s,girth:i}}function bv(){let e={skin:q.skin[2],hair:q.hair[0],hairStyle:`bald`,hat:`none`,hatColor:Y.courier,faceHair:`none`,glasses:!1,hero:!0},t=gv({outfit:`rider`,top:Y.courierJacket,accent:Y.courier,trousers:q.dark,skin:e.skin,girth:1,hero:!0}),n={sleeve:Y.courierJacket,skin:e.skin,shortSleeves:!1,legs:q.dark,shoes:Y.courierDark,fine:!0};return{geometry:Rh([...t,...m_(e),...F_(Y.courier)]),limbs:n,girth:1}}var xv=32,Sv=null;function Cv(){if(Sv!==null)return Sv;let e=document.createElement(`canvas`);e.width=xv,e.height=xv;let t=e.getContext(`2d`);if(t===null)throw Error(`The soft dot for heat effects could not be drawn`);let n=xv/2,r=t.createRadialGradient(n,n,0,n,n,n);r.addColorStop(0,`#ffffff`),r.addColorStop(.35,`#9a9a9a`),r.addColorStop(.7,`#2e2e2e`),r.addColorStop(1,`#000000`),t.fillStyle=`#000000`,t.fillRect(0,0,xv,xv),t.fillStyle=r,t.fillRect(0,0,xv,xv);let i=new lc(e);return i.colorSpace=$r,Sv=i,i}var Z={steelLight:15659765,iron:3949131,black:2369067,woodDark:8012572,woodLight:14263654,crate:13210970,wicker:13209413,terracottaRim:14386258,soil:5979432,leafLight:7323477,leafDark:3112259,flower:[16739211,16765503,16777215],onion:11880316,onionSack:15043132,potatoSack:12162664,gasBottle:15764014,bin:4165482,binLid:3108690,kerbLight:14262372,streetKerb:12172484,crossing:16052710,tarmacPatch:6448751,cushion:15905331,canvasWhite:16775402,awningRed:14826299,rope:5917244,bulbs:[16773808,16748395,9425919,12185738],flags:[14826299,16763187,5214182,4171875,16777215],glass:13627391,glassOpacity:.26,grease:9062946,oil:14260779,fries:16172356,friesDark:14853422,carton:14826299,sauces:[14234667,15909424,16447210],screen:9430738,knob:14710314,pilot:7331962,counter:{startColumns:8,startWidth:4.4,columnGap:.52,depth:.75,topOverhang:.25,topDepth:.95,topThickness:.1,plinth:.1,skirtStripe:.13,skirtDrop:.13,guardHeight:.4},awning:{keepClear:[{from:-1.5,to:1.5},{from:1.5,to:2.9}],overhang:.6,minBay:.45,stripe:.2,ridgeY:2.52,eaveY:2.28,ridgeZ:-.6,halfDepth:.38,valance:.09},meat:{height:1.36,layers:14,sides:18,rodTop:1.84},grill:{meatZ:.2,meatY:.46,housingTop:2.2,glowIdle:.82,glowActive:1.25,haloIdle:.45,haloActive:.75,turn:Math.PI/2,sliceReach:.42},fridge:{width:1.1,depth:.8,height:1.55},fryer:{top:.9,basketLift:.16,bobRate:9,bob:.008},rowTurn:Math.PI/2,wallInset:.06,ring:{width:.08,y:.02,opacity:.5}},wv=`#3a1410`,Tv=`#ffffff`,Ev=`#fff3d6`,Dv=`#ffc93c`,Ov=`#fff3b8`,kv=`"Lilita One", ui-rounded, system-ui, "Segoe UI", Arial, sans-serif`;function Av(e,t,n,r,i,a=0){e.save(),e.translate(t,n),e.rotate(a),e.scale(r,r),i(),e.restore()}function jv(e,t,n=7){e.fillStyle=t,e.fill(),e.lineJoin=`round`,e.lineCap=`round`,e.lineWidth=n,e.strokeStyle=wv,e.stroke()}function Mv(e,t,n,r,i,a){e.beginPath(),e.moveTo(t+a,n),e.arcTo(t+r,n,t+r,n+i,a),e.arcTo(t+r,n+i,t,n+i,a),e.arcTo(t,n+i,t,n,a),e.arcTo(t,n,t+r,n,a),e.closePath()}function Nv(e,t,n){let r=e.createLinearGradient(0,t-n/2,0,t+n/2);return r.addColorStop(.15,Ov),r.addColorStop(.85,Dv),r}function Pv(e,t,n,r,i,a){e.lineJoin=`round`,e.lineWidth=i/4.5,e.strokeStyle=wv,e.strokeText(t,n,r+i/12),e.strokeText(t,n,r),e.fillStyle=a,e.fillText(t,n,r)}function Fv(e){let t=e>>>0;return()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296)}function Iv(e,t,n){return t+(n-t)*e()}function Lv(e,t){let n=document.createElement(`canvas`);n.width=e,n.height=t;let r=n.getContext(`2d`);if(r===null)throw Error(`2D canvas is not available in this browser`);return r}function Rv(e){let t=new lc(e.canvas);return t.colorSpace=$r,t}var zv=4;function Bv(e,t,n){let r=Rv(e);return r.wrapS=jn,r.wrapT=jn,r.repeat.set(t,n),r.anisotropy=zv,r}function Vv(e){return`#${e.toString(16).padStart(6,`0`)}`}function Hv(e,t){return`#${new U(e).offsetHSL(0,0,t).getHexString()}`}function Uv(e,t,n){for(let r=0;r<n;r+=1){e.fillStyle=t()<.5?`rgba(255,255,255,0.10)`:`rgba(60,40,20,0.07)`;let n=t()*(e.canvas.width-2),r=t()*(e.canvas.height-2);e.fillRect(n,r,1+t()*2,1+t()*2)}}var Wv=64,Gv=4,Kv=2;function qv(e,t,n=q.floorA,r=q.floorB){let i=Lv(256,256),a=Fv(11);i.fillStyle=Hv(r,-.13),i.fillRect(0,0,256,256);for(let e=0;e<Gv;e+=1)for(let t=0;t<Gv;t+=1){let o=(e+t)%2==0?n:r,s=t*Wv+Kv/2,c=e*Wv+Kv/2;i.fillStyle=Hv(o,Iv(a,-.025,.025)),i.fillRect(s,c,62,62),i.fillStyle=`rgba(255,255,255,0.22)`,i.fillRect(s,c,62,2),i.fillRect(s,c,2,62),i.fillStyle=`rgba(0,40,40,0.10)`,i.fillRect(s,c+62-2,62,2),i.fillRect(s+62-2,c,2,62)}return Uv(i,a,90),Bv(i,e,t)}var Jv={width:128,height:64,joint:3,rows:4};function Yv(e,t){let n=Jv.height*Jv.rows,r=Lv(n,n),i=Fv(23);r.fillStyle=q.pavingJoint,r.fillRect(0,0,n,n);for(let e=0;e<Jv.rows;e+=1){let t=e%2==0?0:-Jv.width/2,a=[0,1].map(()=>Hv(q.paving,Iv(i,-.025,.025)));for(let i=0;i<=n/Jv.width;i+=1){r.fillStyle=a[i%2]??q.paving;let n=t+i*Jv.width+Jv.joint/2;r.fillRect(n,e*Jv.height+Jv.joint/2,Jv.width-Jv.joint,Jv.height-Jv.joint)}}return Uv(r,i,120),Bv(r,e,t)}function Xv(e,t,n,r){e.fillStyle=`#5b3a1c`,e.fillRect(t-r*.04,n-r*.62,r*.08,r*1.24),e.fillStyle=`#b8642e`,e.beginPath(),e.moveTo(t-r*.36,n-r*.42),e.lineTo(t+r*.36,n-r*.42),e.lineTo(t+r*.2,n+r*.44),e.lineTo(t-r*.2,n+r*.44),e.closePath(),e.fill(),e.fillStyle=`rgba(70,30,10,0.45)`;for(let i=0;i<3;i+=1)e.fillRect(t-r*.3,n-r*.24+i*r*.22,r*.6,r*.05);e.fillStyle=`#e2452f`,e.beginPath(),e.arc(t,n-r*.52,r*.12,0,Math.PI*2),e.fill()}function Zv(e,t,n){e.fillStyle=`#fff6c4`;let r=(t,n)=>{e.beginPath(),e.arc(t,n,5,0,Math.PI*2),e.fill()};for(let e=15;e<=t-15;e+=(t-30)/16)r(e,15),r(e,n-15);for(let e=15;e<=n-15;e+=(n-30)/5)r(15,e),r(t-15,e)}var Qv={size:96,room:300,smallest:34};function $v(e,t=q.stripeRed){let n=Lv(512,192);n.fillStyle=q.signEdge,n.fillRect(0,0,512,192),n.fillStyle=Hv(t,-.12),n.fillRect(6,6,500,180),n.fillStyle=t,n.fillRect(26,26,460,140),Zv(n,512,192),Xv(n,70,98,92),Xv(n,442,98,92),n.font=`900 ${Qv.size}px ${kv}`;let r=n.measureText(e).width;return n.font=`900 ${Math.max(Math.floor(Qv.size*Math.min(Qv.room/Math.max(r,1),1)),Qv.smallest)}px ${kv}`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillStyle=`rgba(0,0,0,0.4)`,n.fillText(e,260,106,Qv.room),n.fillStyle=q.signText,n.fillText(e,256,100,Qv.room),Rv(n)}var ey={size:256,wood:[0,96],blank:[96,160],steel:[160,256],margin:8};function ty(e){return 1-e/ey.size}var ny={wood:{from:ty(ey.wood[1]-ey.margin),to:ty(ey.wood[0]+ey.margin)},steel:{from:ty(ey.steel[1]-ey.margin),to:ty(ey.steel[0]+ey.margin)},plain:{u:.5,v:ty((ey.blank[0]+ey.blank[1])/2)}};function ry(e,t){let[n,r]=ey.wood;for(let i=0;i<30;i+=1){let i=Iv(t,n+2,r-2);e.strokeStyle=`rgba(110,60,20,${Iv(t,.1,.28).toFixed(2)})`,e.lineWidth=Iv(t,1,2.4),e.beginPath(),e.moveTo(0,i);let a=Iv(t,-3,3);e.bezierCurveTo(80,i+a,170,i-a,ey.size,i+a*.5),e.stroke()}e.fillStyle=`rgba(70,35,10,0.42)`,e.fillRect(0,n+32,ey.size,2),e.fillRect(0,n+64,ey.size,2)}function iy(e,t){let[n,r]=ey.steel;e.fillStyle=`#f1f4f7`,e.fillRect(0,n,ey.size,r-n);for(let i=n;i<r;i+=1)e.fillStyle=t()<.5?`rgba(255,255,255,0.55)`:`rgba(110,125,140,${Iv(t,.05,.2).toFixed(2)})`,e.fillRect(t()*ey.size-60,i,Iv(t,60,220),1)}var ay=null;function oy(){if(ay!==null)return ay;let e=Lv(ey.size,ey.size),t=Fv(5);return e.fillStyle=`#ffffff`,e.fillRect(0,0,ey.size,ey.size),ry(e,t),iy(e,t),ay=Rv(e),ay}function sy(e,t){return(n,r,i)=>{n.save(),n.translate(r,i),n.rotate(-.5),n.fillStyle=Vv(q.lavash),n.fillRect(-44,-15,88,30),n.fillStyle=t,n.beginPath(),n.arc(-44,0,15,0,Math.PI*2),n.fill(),n.fillStyle=e,n.fillRect(-2,-18,48,36),n.restore()}}var cy=(e,t,n)=>{e.fillStyle=`#ffffff`,e.beginPath(),e.moveTo(t-24,n-26),e.lineTo(t+24,n-26),e.lineTo(t+17,n+34),e.lineTo(t-17,n+34),e.closePath(),e.fill(),e.fillStyle=`#39a0d8`,e.fillRect(t-27,n-36,54,12),e.fillRect(t-21,n-4,42,12)},ly=(e,t,n)=>{e.fillStyle=`#f6c544`;for(let r=0;r<6;r+=1)e.fillRect(t-24+r*8,n-38+r%2*8,6,44);e.fillStyle=q.stripeRed,e.beginPath(),e.moveTo(t-28,n-6),e.lineTo(t+28,n-6),e.lineTo(t+20,n+36),e.lineTo(t-20,n+36),e.closePath(),e.fill()};function uy(e,t,n,r){for(let i=0;i<r;i+=1)e.fillStyle=`#ffc933`,e.beginPath(),e.arc(t+(i-(r-1)/2)*22,n,8,0,Math.PI*2),e.fill(),e.fillStyle=`#e09b12`,e.fillRect(t+(i-(r-1)/2)*22-1.5,n-4,3,8)}function dy(){let e=Lv(256,352);return e.fillStyle=`#2c3a35`,e.fillRect(0,0,256,352),e.strokeStyle=`rgba(255,255,255,0.55)`,e.lineWidth=3,e.strokeRect(10,10,236,332),Uv(e,Fv(31),160),[[sy(`#ffffff`,q.orderMeat),2],[sy(`#ffd23f`,q.orderChicken),3],[cy,1],[ly,2]].forEach(([t,n],r)=>{let i=70+r%2*116,a=84+Math.floor(r/2)*164;t(e,i,a),uy(e,i,a+62,n)}),Rv(e)}var fy=16;function py(e,t){let n=e.getAttribute(`position`).count,r=e.getAttribute(`uv`),i=new Float32Array(n*2);for(let e=0;e<n;e+=1)if(t===`plain`||r===void 0)i[e*2]=ny.plain.u,i[e*2+1]=ny.plain.v;else{let n=ny[t];i[e*2]=.02+.96*Math.min(Math.max(r.getX(e),0),1),i[e*2+1]=n.from+(n.to-n.from)*Math.min(Math.max(r.getY(e),0),1)}e.setAttribute(`uv`,new jo(i,2))}function my(e,t,n=`plain`){let r=e.index===null?e:e.toNonIndexed(),i=r.getAttribute(`position`).count,{r:a,g:o,b:s}=new U(t),c=new Float32Array(i*3);for(let e=0;e<i;e+=1)c.set([a,o,s],e*3);return r.setAttribute(`color`,new jo(c,3)),py(r,n),r}function hy(e,t,n,r,i=0,a=0,o=0,s=`plain`,c=.03){return my(new ch(e,t,n,1,Math.min(c,e/2,t/2,n/2)),r,s).translate(i,a,o)}function Q(e,t,n,r,i=0,a=0,o=0,s=`plain`){return my(new pc(e,t,n),r,s).translate(i,a,o)}function $(e,t,n,r,i=0,a=0,o=0,s=`plain`,c=fy){return my(new gc(e,t,n,c),r,s).translate(i,a,o)}function gy(e,t,n,r=0,i=0,a=0,o=12){return my(new gc(e,e,t,o).rotateX(Math.PI/2),n).translate(r,i,a)}function _y(e,t,n,r=0,i=0,a=0,o=`plain`){return my(new gc(e,e,t,12).rotateZ(Math.PI/2),n,o).translate(r,i,a)}function vy(e,t,n=0,r=0,i=0,a=1,o=fy){return my(new zl(e,o,Math.max(Math.round(o*.7),4)).scale(1,a,1),t).translate(n,r,i)}function yy(e,t,n=0,r=0,i=0,a=1){return my(new Nl(e,1).scale(1,a,1),t).translate(n,r,i)}function by(e,t,n,r=0,i=0,a=0,o=12){return my(new _c(e,t,o),n).translate(r,i,a)}function xy(e,t,n,r,i){return my(new hc(e,6,Math.PI,Math.PI),t).translate(n,r,i)}function Sy(e,t,n,r,i){return my(new hc(e,3,Math.PI/6),t).translate(n,r-e/2,i)}function Cy(e,t,n,r,i=`plain`){let a=new V(...e),o=new V(...t),s=new pc(n,n,a.distanceTo(o));s.lookAt(o.clone().sub(a));let c=a.add(o).multiplyScalar(.5);return my(s,r,i).translate(c.x,c.y,c.z)}function wy(e){let t=lh([...e],!1);if(t===null)throw Error(`Parts of a prop could not be fused: they differ in form`);return e.forEach(e=>e.dispose()),t}var Ty=null;function Ey(){if(Ty!==null)return Ty;let e=Ah(16777215,{map:oy()});return e.vertexColors=!0,Ty=e,e}var Dy=null;function Oy(){return Dy??(Dy=new ws({vertexColors:!0})),Dy}var ky=null;function Ay(){return ky??(ky=new ws({color:Z.glass,transparent:!0,opacity:Z.glassOpacity,depthWrite:!1})),ky}function jy(e,t=!0,n=Ey()){let r=new Is(wy(e),n);return r.castShadow=t,r.receiveShadow=!0,r}function My(e,t=16777215,n=Z.ring.opacity){let r=new Is(new Il(e-Z.ring.width,e,48).rotateX(-Math.PI/2),new ws({color:t,transparent:!0,opacity:n,depthWrite:!1}));return r.position.y=Z.ring.y,r}var Ny=Z.grill,Py=.4,Fy=-.43,Iy=-.295,Ly=[.77,1.32,1.87],Ry=[.495,1.045,1.595,2.145],zy=.5,By=8,Vy=.117,Hy={radius:.03,height:.42,sides:8},Uy=[-.17,.17],Wy=.24,Gy={element:16753210,back:12070924,lamp:8257418},Ky=2;function qy(e,t,n,r,i,a,o,s,c=`steel`){return my(new ch(e,t,n,Ky,s),r,c).translate(i,a,o)}function Jy(){return[Q(1.15,.08,1.1,Z.black,0,.04,.05),qy(1.25,.32,1.2,q.steel,0,.24,.05,.05),Q(.62,.17,.02,Z.iron,0,Wy,.655),gy(.06,.03,Z.black,0,Wy,.675,14),gy(.047,.06,Z.knob,0,Wy,.6950000000000001,14),Q(.016,.07,.012,Z.steelLight,0,.245,.728),...Uy.map(e=>gy(.036,.02,Z.black,e,Wy,.67,10)),$(.45,.42,.05,q.steelDark,0,.42500000000000004,Ny.meatZ,`steel`,24),$(.4,.4,.01,Z.grease,0,.452,Ny.meatZ,`plain`,24)]}function Yy(){let e=Ny.housingTop-Py,t=Py+e/2,n=-.283;return[qy(1.12,e,.26,q.steel,0,t,Fy,.04),...Ry.map(e=>Q(1,.05,.03,Z.steelLight,0,e,n,`steel`)),...[-.5,.5].map(e=>Q(.06,1.7,.03,Z.steelLight,e,1.32,n,`steel`)),Q(.03,1.7,.2,Z.steelLight,-.575,t,-.24,`steel`),Q(.03,1.7,.2,Z.steelLight,.575,t,-.24,`steel`)]}function Xy(){let e=Ny.meatY+Z.meat.rodTop,t=Ny.housingTop;return[qy(1.26,.07,.32,q.steelDark,0,t+.035,-.41,.025),qy(.5,.05,.22,q.steel,0,t+.09,-.4,.02),Q(.09,.05,Ny.meatZ+.36,q.steelDark,0,e-.005,(Ny.meatZ-.24)/2,`steel`),$(.055,.055,.08,Z.iron,0,e-.015,Ny.meatZ,`plain`,10)]}function Zy(){let e=.2,t=.27,n={x:-.765,y:.40800000000000003,z:.06},r=my(new pc(.06,.008,.4).rotateY(e),Z.steelLight),i=my(new pc(.045,.03,.14).rotateY(e),Z.black);return[Q(.26,.035,.5,Z.woodLight,-.755,.385,.1,`wood`),Cy([-.625,.18,-.05],[-.86,.37,-.05],.025,q.steelDark),Cy([-.625,.18,.25],[-.86,.37,.25],.025,q.steelDark),r.translate(n.x,n.y,n.z),i.translate(n.x+Math.sin(e)*t,n.y+.008,n.z+Math.cos(e)*t)]}function Qy(){return[...Jy(),...Yy(),...Xy(),...Zy()]}function $y(e){let t=-7/2*Vy,n=Array.from({length:By},(n,r)=>my(new gc(Hy.radius,Hy.radius,Hy.height,Hy.sides),Gy.element).translate(t+r*Vy,e,Iy));return[Q(.96,zy,.01,Gy.back,0,e,-.301),...n]}function eb(){return wy([...Ly.flatMap($y),...Uy.map(e=>vy(.028,Gy.lamp,e,Wy,.68,1,8))])}var tb={width:1.9,height:2.3,y:1.32,z:-.255},nb=Z.meat,rb=nb.height/nb.layers,ib=rb*1.35,ab=[[0,.28],[.3,.34],[.7,.385],[.88,.39],[1,.34]],ob=[[.55,-.3,.6],[.9,-.5,.68],[1,-.2,.95],[1.01,.14,1.16],[.92,.46,.86],[.55,.36,.72]],sb=[2,3,5],cb=[.05,.04,.022],lb=.012,ub=[.6,.48,.36],db=[.3,1,1,.55,.2,.1],fb=4165434,pb=6535247;function mb(e){let t=ab.findIndex(([t])=>t>=e);if(t<=0)return ab[0]?.[1]??0;let[n,r]=ab[t-1]??[0,0],[i,a]=ab[t]??[1,0];return r+(e-n)/(i-n)*(a-r)}function hb(){let e=Fv(7);return Array.from({length:nb.layers},(t,n)=>{let r=Iv(e,.86,1.04);return{y:(n+.5)*rb,radius:mb((n+.5)/nb.layers)*Iv(e,.94,1.05),dx:Iv(e,-.016,.016),dz:Iv(e,-.016,.016),tiltX:Iv(e,-.035,.035),tiltZ:Iv(e,-.035,.035),tint:[r,r*Iv(e,.92,1),r*Iv(e,.84,1)],phases:sb.map(()=>e()*Math.PI*2),ripplePhase:e()*Math.PI*2}})}function gb(e,t,n,r,i){let[a,o]=ob[r]??[1,0],s=i/nb.sides*Math.PI*2,c=sb.reduce((e,t,r)=>e+(cb[r]??0)*Math.sin(t*s+(n.phases[r]??0)),1),l=n.radius*a*c,u=Math.sin(s)*l+n.dx,d=Math.cos(s)*l+n.dz,f=lb*a*Math.sin(4*s+n.ripplePhase);e[t]=u,e[t+1]=n.y+o*ib+u*n.tiltX+d*n.tiltZ+f,e[t+2]=d}function _b(e,t,n){let r=[];for(let i=0;i<t-1;i+=1)for(let t=0;t<n;t+=1){let a=e+i*n+t,o=e+i*n+(t+1)%n;r.push(a,o,a+n,o,o+n,a+n)}return r}function vb(e,t){let n=Math.sin(2*t+(e.phases[1]??0))+.6*Math.sin(5*t+(e.phases[2]??0));return Math.min(Math.max(n-.05,0),1)}function yb(e,t){let n=ob.length*nb.sides,r=new Float32Array(e.length*n*3);return e.forEach((e,i)=>{for(let a=0;a<ob.length;a+=1)for(let o=0;o<nb.sides;o+=1){let s=o/nb.sides*Math.PI*2,c=1+.07*Math.sin(3*s+e.ripplePhase*2),l=(ob[a]?.[2]??1)*c,u=t?vb(e,s)*(db[a]??0):0,d=(i*n+a*nb.sides+o)*3;r.set(e.tint.map((e,t)=>e*l*(1+((ub[t]??1)-1)*u)),d)}}),new jo(r,3)}function bb(e){let t=ob.length*nb.sides,n=new Float32Array(e.length*t*3),r=e.flatMap((e,r)=>{for(let i=0;i<ob.length;i+=1)for(let a=0;a<nb.sides;a+=1)gb(n,(r*t+i*nb.sides+a)*3,e,i,a);return _b(r*t,ob.length,nb.sides)}),i=new Ko;i.setAttribute(`position`,new jo(n,3)),i.setIndex(r),i.computeVertexNormals();let a=i.clone();return i.setAttribute(`color`,yb(e,!1)),a.setAttribute(`color`,yb(e,!0)),{raw:i,done:a}}function xb(){let e=nb.height;return wy([$(.022,.022,nb.rodTop+.1,q.steelDark,0,(nb.rodTop-.1)/2,0,`steel`,6),$(.32,.32,.014,q.steelDark,0,-.007,0,`steel`,20),$(.2,.28,.04,q.steel,0,e+.03,0,`steel`,20),vy(.13,q.tomato,.008,e+.155,0,.9,14),by(.07,.03,fb,.008,e+.275,0,6),vy(.088,q.pepper,.012,e+.35,.008,1.05,12),vy(.045,pb,.012,e+.425,.008,.5,8),vy(.03,q.steelDark,0,nb.rodTop,0,1,6)])}var Sb=null;function Cb(){return Sb===null&&(Sb={...bb(hb()),garnish:xb()}),Sb}var wb={meat:{raw:q.meatRaw,done:q.meat},chicken:{raw:q.chickenRaw,done:q.chicken}},Tb=.16;function Eb(e=`meat`){let t=Cb(),n=wb[e],r=new U(n.raw),i=new U(n.done),a=Ah(n.done).clone();a.vertexColors=!0;let o=new Is(t.done,a);o.castShadow=!0;let s=new Ha;return s.add(o,new Is(t.garnish,Ey())),{group:s,setFullness(e){o.visible=e>0;let t=K.spit.thinnest+(1-K.spit.thinnest)*Math.min(Math.max(e,0),1);o.scale.set(t,1,t)},setCooked(e){let n=Math.min(Math.max(e,0),1);a.color.lerpColors(r,i,n),a.emissive.copy(i).multiplyScalar(Tb*n),o.geometry=n>K.spit.bandsAppear?t.done:t.raw}}}function Db(e){let{shudder:t,shudderRate:n,shudderFade:r}=K.shave,i=0,a=0;return{kick(){i=1},update(o){i=i<.01?0:Mh(i,0,r,o),a+=o*n,e.position.x=Math.sin(a)*t*i,e.position.z=Z.grill.meatZ+Math.cos(a*1.3)*t*.6*i,e.rotation.z=Math.sin(a*.8)*t*1.5*i}}}function Ob(){let e=new U(q.heater),t=new ws({map:Cv(),blending:2,transparent:!0,depthWrite:!1,fog:!1,toneMapped:!1}),n=new Is(new Fl(tb.width,tb.height),t);return n.position.set(0,tb.y,tb.z),{mesh:n,set:n=>void t.color.copy(e).multiplyScalar(n)}}function kb(e=`meat`){let t=new Ha,n=Eb(e);n.group.position.set(0,Z.grill.meatY,Z.grill.meatZ);let i=Oy().clone(),a=Ob(),o=new Va;o.position.set(0,Z.grill.meatY+Z.meat.height/2,Z.grill.meatZ);let s=new Ha;s.rotation.y=Z.grill.turn,s.add(jy(Qy()),new Is(eb(),i),a.mesh,n.group,o),t.add(s,My(r.spit.radius));let{x:c,z:l}=Qe(e);t.position.set(c,0,l);let u=c+Math.sin(Z.grill.turn)*Z.grill.meatZ,d=l+Math.cos(Z.grill.turn)*Z.grill.meatZ,f=K.spit.idleSpin,p=1,m=Z.grill.glowIdle,h=Z.grill.haloIdle,g=!1,_=Db(n.group);return{group:t,slicePoint:new V(u+Z.grill.sliceReach,1.1,d),heatAnchor:o,cooking:()=>g,shudder:_.kick,update(e,o,s){if(!t.visible)return;g=e.portions>0,_.update(s),f=Mh(f,o?K.spit.activeSpin:K.spit.idleSpin,6,s),n.group.rotation.y+=f*s,m=Mh(m,o?Z.grill.glowActive:Z.grill.glowIdle,8,s),i.color.setScalar(m),h=Mh(h,o?Z.grill.haloActive:Z.grill.haloIdle,8,s),a.set(h),p=e.portions===0?0:Mh(p,e.portions/r.spit.size,8,s),n.setFullness(p);let c=Math.min(r.spit.cookedMax,Math.max(e.portions,1));n.setCooked(e.cooked/c)}}}var Ab={lump:new zl(1,7,4),mound:new zl(1,9,5),slice:new gc(1,1,1,7),stick:new gc(1,1,1,6)},jb={lettuce:8834894,grillMark:11827774,foil:13489886,meatBand:14826299,straw:14826299,fries:16765514,friesDark:15905331,carton:14826299,cartonDark:12725549,sauce:14172202,butter:16769146,sugar:16777215};function Mb(e,t,n,r){return new gc(e,t,n,r,1,!0)}function Nb(e,t,n,r={}){let i=Bh(e,t),a=X(i,n,r);return i.dispose(),a}function Pb(e,t,n){let r=t/e.points*Math.PI*2,i=t%2==0?e.wave:-e.wave,a=n?e.rimRadius+i:e.innerRadius,o=n?e.rimY+i:e.innerY;return[Math.sin(r)*a,o,Math.cos(r)*a]}function Fb(e,t,n={}){let r=[];for(let t=0;t<e.points;t+=1){let n=Pb(e,t,!1),i=Pb(e,t+1,!1),a=Pb(e,t,!0),o=Pb(e,t+1,!0);r.push(...n,...i,...a,...i,...o,...a,...n,...a,...i,...i,...a,...o)}let i=new Ko;i.setAttribute(`position`,new jo(new Float32Array(r),3)),i.computeVertexNormals();let a=X(i,t,n);return i.dispose(),a}var Ib=Math.PI/2,Lb=14,Rb=[[.097,.082],[.099,.1],[.084,.113],[0,.118]],zb=new pc(1,1,1);function Bb(e){let t=e?q.salgamCup:q.cup,n=e?q.salgamLid:q.cupLid;return Rh([X(zh(.092,.07,.17,Lb),t),X(Mb(.0862,.0798,.05,Lb),n,{y:-.01}),Nb(Rb,Lb,n),X(new gc(.03,.034,.008,8),Wh(n,1.5),{y:.12}),X(Ab.stick,jb.straw,{x:.03,y:.15,sx:.011,sy:.1,sz:.011,rz:-.15})])}var Vb=[[-.062,.012,.3,.1],[-.04,-.018,.12,.13],[-.02,.02,.05,.11],[0,-.012,-.04,.145],[.022,.018,-.1,.115],[.04,-.02,-.16,.13],[.062,.01,-.32,.1],[.012,.03,.2,.09],[-.05,-.03,.22,.12],[.02,-.032,.06,.15],[-.012,-.03,-.12,.135]],Hb={thick:.024,length:.11},Ub=.113;function Wb(){let e=Vb.map(([e,t,n,r],i)=>X(zb,i%3==1?jb.friesDark:jb.fries,{x:e,y:r-.05,z:t,sx:Hb.thick,sy:Hb.length,sz:Hb.thick,rz:n}));return Rh([X(zh(.13,.09,.15,4).rotateY(Math.PI/4),jb.carton,{sz:.6,flat:!0}),X(zb,jb.cartonDark,{y:.088,z:-.05,sx:.172,sy:.05,sz:.012,rx:-.113}),X(Ab.slice,16777215,{y:-.005,z:.0485,sx:.036,sy:.008,sz:.036,rx:Ib+Ub}),X(zb,jb.fries,{y:.07,sx:.16,sy:.03,sz:.085}),...e])}var Gb=.2,Kb=Math.PI/2,qb=10,Jb=[[.07,-.2],[.086,-.1],[.096,.06],[.104,.19],[.094,.2]],Yb=[[0,-.222],[.09,-.2],[.1,-.045]],Xb=[[.095,.196],[0,.21]],Zb=[[.005,.0926],[.065,.0963],[.125,.1]],Qb={width:.014,lift:.002,flare:9e-4},$b={innerRadius:.088,innerY:.185,rimRadius:.107,rimY:.228,wave:.01,points:qb},ex={y:-.095,height:.1,top:.102,bottom:.0955};function tx([e,t]){let n=t+Qb.lift;return X(Mb(n+Qb.flare/2,n-Qb.flare/2,Qb.width,qb),jb.grillMark,{y:e})}function nx(e){let t=e===`meat`?q.meat:q.chicken,n=e===`meat`?q.meatDark:q.chickenDark,{lump:r,slice:i}=Ab;return[Nb(Xb,qb,n),Fb($b,jb.lettuce),X(i,q.tomato,{x:.04,y:.216,z:.04,sx:.042,sy:.014,sz:.042,rx:Kb,ry:.7}),X(i,q.tomato,{x:-.05,y:.212,z:-.025,sx:.04,sy:.014,sz:.04,rx:Kb,ry:-1.1}),X(r,t,{x:-.018,y:.228,z:.03,sx:.043,sy:.036,sz:.04}),X(r,t,{x:.028,y:.224,z:-.032,sx:.038,sy:.034,sz:.04})]}function rx(e){let t=e===`meat`?jb.meatBand:q.chickenSleeve;return Rh([Nb(Jb,qb,q.lavash),...Zb.map(tx),...nx(e),Nb(Yb,qb,jb.foil),X(Mb(ex.top,ex.bottom,ex.height,qb),t,{y:ex.y})]).rotateZ(Kb)}var ix=new Map;function ax(e,t){let n=ix.get(e);n===void 0&&(n=t(),ix.set(e,n));let r=new Ha;return r.add(Uh(n,!1)),r}function ox(e=`meat`){return ax(e,()=>rx(e))}function sx(e=!1){return ax(e?`salgam`:`cup`,()=>Bb(e))}function cx(){return ax(`fries`,Wb)}function lx(e){let t=e.map(()=>0);return{update(n,r){for(let i=0;i<e.length;i+=1){let a=e[i];if(a===void 0)continue;let o=i<n?(t[i]??0)+r:0;t[i]=o;let s=(o-K.popIn.delay)/K.popIn.duration;a.visible=s>0,a.scale.setScalar(Fh(s))}}}}var ux=J.tray,dx=.115,fx=.8,px=r.carry.base+r.carry.perLevel*r.pads.defs.carry.costs.length,mx={holdAngle:J.trayHold,tuck:0,look:.06};function hx(e){let t=Math.floor(e/2),n=e%2==0?-1:1;return new V(0,ux.y+.12+t*Gb,ux.z+n*dx)}var gx=Array.from({length:px},(e,t)=>hx(t)),_x=hx(px-1);function vx(e,t){let n=Array.from({length:t},e);return{items:n,update:lx(n).update}}function yx(e,t,n,r){for(let i=0;i<e.items.length;i+=1){let a=e.items[i];if(a===void 0||!a.visible)continue;let o=gx[t+i]??_x,s=Math.floor((t+i)/2);a.position.set(Math.sin(r*9-s*.55)*.012*s*n,o.y,o.z)}}function bx(e){let t=Eb(e);return t.setFullness(1),t.setCooked(0),t.group.scale.setScalar(K.spit.carriedScale),t.group.position.set(0,ux.y+.04,ux.z),t.group.visible=!1,t.group}function xx(e){let t=e.role??`chef`,n=yv(t,e.coat),r=xg(n.geometry,n.limbs,n.girth),{group:i,body:a}=r;i.scale.setScalar(e.scale);let o=t===`chef`?px:0,s=vx(()=>ox(`meat`),px),c=vx(()=>ox(`chicken`),o),l=vx(sx,o),u=vx(cx,o),d={meat:bx(`meat`),chicken:bx(`chicken`)};a.add(...s.items,...c.items,...l.items,...u.items,d.meat,d.chicken);let f=Sg(0,0);return{group:i,update(e,t,n){if(i.position.set(e.pos.x,0,e.pos.z),i.rotation.y=Nh(i.rotation.y,e.facing,K.turnRate,n),wg(f,e.pos.x,e.pos.z,n),Eg(r,f,mx,1,t,0),e.working===!0){let{rate:e,swing:n,lean:i}=K.chop;r.limbs.rightArm.rotation.x=mx.holdAngle-.35+Math.sin(t*e)*n,r.body.rotation.x+=i}d.meat.visible=e.carryingSpit===`meat`,d.chicken.visible=e.carryingSpit===`chicken`,s.update(e.carry,n),c.update(e.chicken,n),l.update(e.drinks,n),u.update(e.fries,n);let a=f.walk,o=e.carry+e.chicken;yx(s,0,a,t),yx(c,e.carry,a,t),yx(l,o,a,t),yx(u,o+e.drinks,a,t)},trayPoint:e=>a.localToWorld(hx(Math.max(e,0))),bodyPoint:()=>i.localToWorld(new V(0,fx,0))}}var{gap:Sx,rate:Cx}=K.giveWay,wx=1e-4;function Tx(e,t,n){return Math.min(Math.max(e,t),n)}function Ex(e){return Math.sqrt(Math.max(Sx*Sx-e*e,0))}function Dx(e,t,n,r,i,a){let o=e-t,s=Math.abs(o)>wx?Math.sign(o):r<0?-1:1,c=t+s*n;if(c>=i&&c<=a)return c;let l=t-s*n;return l>=i&&l<=a?l:Tx(c,i,a)}function Ox(e){let t={x:0,z:0},n=0,r=0,i=0,a=0,o=(t,o,s)=>{let c=Math.hypot(n,r),l=s>wx?(t.x-o.x)/s:c>wx?n/c:0,u=s>wx?(t.z-o.z)/s:c>wx?r/c:1,d=Tx(o.x+l*Sx,e.minX,e.maxX),f=Tx(o.z+u*Sx,e.minZ,e.maxZ);Math.hypot(d-o.x,f-o.z)<Sx-wx&&(f=Dx(f,o.z,Ex(d-o.x),r,e.minZ,e.maxZ)),Math.hypot(d-o.x,f-o.z)<Sx-wx&&(d=Dx(d,o.x,Ex(f-o.z),n,e.minX,e.maxX)),i=d-t.x,a=f-t.z};return{spot:t,update(e,s,c){let l=Math.hypot(e.x-s.x,e.z-s.z);i=0,a=0,l<Sx&&o(e,s,l),n=Mh(n,i,Cx,c),r=Mh(r,a,Cx,c),t.x=e.x+n,t.z=e.z+r}}}var kx=.9,Ax=Math.PI,jx=r.cashier.spot,Mx={...r.bounds,minX:jx.x-K.giveWay.cashierReach,minZ:jx.z};function Nx(e){let t=xx({coat:q.cashierCoat,scale:kx,role:`apprentice`});t.group.visible=!1,e.add(t.group);let n=Ox(Mx),r=0,i={pos:n.spot,facing:Ax,carry:0,chicken:0,drinks:0,fries:0,moving:!1,carryingSpit:null};return{update(e,a,o,s){if(t.group.visible=e,!e){r=0;return}r+=s,n.update(jx,a,s),t.update(i,o,s);let c=Fh(Math.min(r/K.popIn.duration,1));t.group.scale.setScalar(kx*c)}}}function Px(e){let t=new Ha,n=new Map,r=[],i=e,a=e=>{let r=n.get(e);if(r!==void 0)return r;let i=xx({coat:e,scale:1});return n.set(e,i),t.add(i.group),i},o=a(i),s=null;return{group:t,update(e,t,n){s={carrier:e,time:t},o.update(e,t,n)},trayPoint:e=>o.trayPoint(e),bodyPoint:()=>o.bodyPoint(),setCoat(e){if(e===i)return;i=e;let t=o;o=a(e),o.group.position.copy(t.group.position),o.group.rotation.copy(t.group.rotation),t.group.visible=!1,o.group.visible=!0,r.forEach(e=>o.group.add(e)),s!==null&&o.update(s.carrier,s.time,1)},carry(e){r.push(e),o.group.add(e)}}}var Fx=.12,Ix=240,Lx=.5,Rx={radius:.2,rimInner:.148,rimTop:.172,halfRim:.03,halfFace:.014,edge:.012,sides:12},zx={outer:.122,inner:.052,lift:.004,peak:.02,points:5};function Bx(){let{radius:e,rimInner:t,rimTop:n,halfRim:r,halfFace:i,edge:a,sides:o}=Rx;return Bh([[t,-i],[n,-r],[e,-r+a],[e,r-a],[n,r],[t,i]],o)}function Vx(e){let t=zx.points*2,n=e*(Rx.halfFace+zx.lift),r=Array.from({length:t},(e,r)=>{let i=r%2==0?zx.outer:zx.inner,a=r/t*Math.PI*2;return[Math.cos(a)*i,n,Math.sin(a)*i]}),i=[0,e*(Rx.halfFace+zx.peak),0],a=e=>r[e%t]??i,o=r.flatMap((t,n)=>e===1?[...i,...a(n+1),...a(n)]:[...i,...a(n),...a(n+1)]),s=new Ko;return s.setAttribute(`position`,new jo(new Float32Array(o),3)),s.computeVertexNormals(),s}function Hx(){let e=e=>X(new hc(Rx.rimInner,Rx.sides),q.coinFace,{rx:-e*Math.PI/2,y:e*Rx.halfFace});return Rh([X(Bx(),q.coinRim),e(1),e(-1),X(Vx(1),q.coinStar),X(Vx(-1),q.coinStar)])}var Ux=Hx(),Wx=new Ql({vertexColors:!0,emissive:8016384,emissiveIntensity:.4}),Gx=K.coinIdle;function Kx(e,t){let n=new Js(Ux,Wx,Ix);n.castShadow=!1,n.frustumCulled=!1,n.count=0,e.add(n);let r=new Map,i=new Map,a=new Va,o=0,s=new Map,c=(e,t)=>{s.get(t)!==o&&(s.delete(t),r.delete(t),i.delete(t))},l=(e,n,r,i)=>{let o=K.coinDrop.arc*4*r*(1-r),s=i+e.id*1.3,c=r<1?0:(1+Math.sin(s*Gx.bobRate))*Gx.bob;n.set(Ke(t.x,e.pos.x,r),Ke(t.y,Fx,r)+o+c,Ke(t.z,e.pos.z,r)),a.position.copy(n);let l=(1-r)*Gx.flips*Math.PI*2;a.rotation.set(Lx+l+Math.sin(s*Gx.rockRate)*Gx.rock*r,i*Gx.spin+e.id,0),a.updateMatrix()};return{update(e,t,u){o+=1;let d=Math.min(e.length,Ix);for(let c=0;c<d;c+=1){let d=e[c];if(d===void 0)continue;let f=(r.get(d.id)??Math.max(t-d.bornAt-u,0))+u;r.set(d.id,f),s.set(d.id,o);let p=i.get(d.id);p===void 0&&(p=new V,i.set(d.id,p)),l(d,p,Math.min(f/K.coinDrop.duration,1),t),n.setMatrixAt(c,a.matrix)}n.count=d,n.instanceMatrix.needsUpdate=!0,s.forEach(c)},release(t){let n=i.get(t);if(n===void 0)return null;let a=new Is(Ux,Wx);return a.castShadow=!1,a.position.copy(n),a.rotation.x=Lx,e.add(a),r.delete(t),i.delete(t),s.delete(t),a}}}var qx={width:128,height:160},Jx=K.photo,Yx={light:`#ecd9b0`,dark:`#b8915a`,ink:`#4a3320`,skin:`#dba878`,skinShade:`#c08a5c`,white:`#fbf6ea`,whiteShade:`#d9cdb6`,kerchief:`#b8402e`};function Xx(e,t,n,r,i,a,o=0){e.fillStyle=a,e.beginPath(),e.ellipse(t,n,r,i,o,0,Math.PI*2),e.fill()}function Zx(e){let{width:t,height:n}=qx,r=e.createRadialGradient(t/2,n*.45,10,t/2,n/2,n*.7);r.addColorStop(0,Yx.light),r.addColorStop(1,Yx.dark),e.fillStyle=r,e.fillRect(0,0,t,n)}function Qx(e){Xx(e,64,168,58,44,Yx.whiteShade),Xx(e,64,170,52,42,Yx.white),Xx(e,64,122,13,12,Yx.skinShade),e.fillStyle=Yx.kerchief,e.beginPath(),e.moveTo(46,126),e.lineTo(82,126),e.lineTo(64,150),e.closePath(),e.fill();for(let t of[146,156])Xx(e,84,t,2.5,2.5,Yx.whiteShade)}function $x(e){for(let[t,n,r]of[[46,30,17],[82,30,17],[64,24,20]])Xx(e,t,n,r+1.5,r+1.5,Yx.whiteShade);for(let[t,n,r]of[[46,30,17],[82,30,17],[64,24,20]])Xx(e,t,n,r,r,Yx.white);e.fillStyle=Yx.white,e.fillRect(36,36,56,20),e.fillStyle=Yx.whiteShade,e.fillRect(36,52,56,4);for(let t of[50,64,78])e.fillRect(t,30,1.5,22)}function eS(e){for(let t of[-1,1])Xx(e,64+t*30,86,6,9,Yx.skinShade);Xx(e,64,84,29,33,Yx.skin);for(let t of[-1,1])Xx(e,64+t*27,66,6,10,Yx.white);for(let t of[-1,1])Xx(e,64+t*12,80,3,3.6,Yx.ink),Xx(e,64+t*12.5,71,9,3,Yx.white,t*.2),Xx(e,64+t*19,92,6,4,`rgba(200, 96, 70, 0.35)`);Xx(e,64,92,6,7,Yx.skinShade);for(let t of[-1,1])Xx(e,64+t*12,103.5,15,7,Yx.whiteShade,t*.32),Xx(e,64+t*12,102,14,6,Yx.white,t*.32);Xx(e,64,111,7,2.5,Yx.skinShade)}function tS(e){let{width:t,height:n}=qx;e.fillStyle=`rgba(150, 100, 40, 0.16)`,e.fillRect(0,0,t,n),e.strokeStyle=Yx.light,e.lineWidth=6,e.strokeRect(3,3,t-6,n-6)}var nS=null;function rS(){if(nS!==null)return nS;let e=Lv(qx.width,qx.height);return Zx(e),Qx(e),eS(e),$x(e),tS(e),nS=new ws({map:Rv(e)}),nS}function iS(e,t){let n=new Is(new Fl(Jx.width,Jx.height).rotateY(-Math.PI/2),rS());return n.position.set(e-.022,Jx.y,t),n}function aS(e,t){let{width:n,height:r,y:i,border:a}=Jx,o=.04,s=e-o/2,c=(n+a)/2,l=(r+a)/2;return[Q(.016,r,n,Z.canvasWhite,e-.008,i,t),Q(o,a,n+a*2,Z.woodDark,s,i+l,t,`wood`),Q(o,a,n+a*2,Z.woodDark,s,i-l,t,`wood`),Q(o,r,a,Z.woodDark,s,i,t-c,`wood`),Q(o,r,a,Z.woodDark,s,i,t+c,`wood`),Q(.02,.03,.03,Z.iron,e-.01,i+l+a/2+.03,t)]}var oS=-1.8,sS=r.bounds.maxZ+.6,cS={width:7.8,depth:sS-oS,z:(sS+oS)/2,back:oS,front:sS},lS={z:-11.2,width:3.2,length:60,dashes:27},uS={x:r.queue.spawn.x,width:1.9,bars:5},dS={from:-1.9,to:uS.x+1.2},fS=[{x:-4.4,z:-8.9},{x:4.4,z:-8.9}],pS=3.1;function mS(){let e=lS.length/lS.dashes,t=Array.from({length:lS.dashes},(t,n)=>-lS.length/2+(n+.5)*e).filter(e=>Math.abs(e-uS.x)>uS.width/2+.4).map(t=>Q(e*.45,.004,.14,q.roadLine,t,.012,lS.z)),n=lS.width/uS.bars,r=Array.from({length:uS.bars},(e,t)=>Q(uS.width,.004,n*.55,Z.crossing,uS.x,.012,lS.z-lS.width/2+(t+.5)*n));return[...t,...r]}function hS(){let e=lS.length/2;return Array.from({length:e},(e,t)=>{let n=-lS.length/2+(t+.5)*2,r=t%2==0?Z.streetKerb:Z.steelLight,i=Q(1.96,.1,.2,r,n,.03,lS.z-lS.width/2-.1);return n>dS.from&&n<dS.to?[i]:[i,Q(1.96,.1,.2,r,n,.03,lS.z+lS.width/2+.1)]}).flat()}function gS(e,t){return[$(.13,.17,.3,Z.iron,e,.15,t,`plain`,8),$(.05,.08,2.8000000000000003,q.steelDark,e,1.7,t,`steel`,8),$(.12,.06,.1,Z.iron,e,2.9,t,`plain`,8),by(.32,.2,Z.iron,e,3.4,t,8)]}function _S(){return[Q(lS.length,.012,lS.width,q.road,0,0,lS.z),...mS(),...hS(),...fS.flatMap(e=>gS(e.x,e.z))]}function vS(){return fS.map(e=>vy(.22,q.lamp,e.x,pS,e.z))}function yS(){let e=cS.width/2+.1,t=(e,t)=>{let n=Math.round(e/1),r=e/n;return Array.from({length:n},(e,n)=>t((n+.5)*r,r,n))},n=e=>e%2==0?q.curb:Z.kerbLight,r=[-e,e].flatMap(e=>t(cS.depth,(t,r,i)=>hy(.2,.2,r-.03,n(i),e,.1,cS.back+t,`plain`,.035))),i=t(cS.width+.4,(t,r,i)=>hy(r-.03,.2,.2,n(i),-e-.1+t,.1,cS.front+.1,`plain`,.035));return[...r,...i]}function bS(e,t,n){return[$(.55*n,.55*n,.04,Z.soil,e,.02,t,`plain`,10),$(.11*n,.17*n,1.1*n,q.trunk,e,.55*n,t,`wood`,7),yy(.72*n,q.tree,e,1.5*n,t,.9),yy(.5*n,Z.leafLight,e-.32*n,1.95*n,t+.22*n),yy(.46*n,Z.leafDark,e+.36*n,1.8*n,t-.1*n),yy(.42*n,q.tree,e+.05*n,2.3*n,t+.05*n)]}var xS={radius:1.15,height:.5,y:2.45,panels:8};function SS(e,t,n){let r=Math.PI*2/xS.panels;return[...Array.from({length:xS.panels},(i,a)=>my(new _c(xS.radius,xS.height,1,1,!0,a*r,r),a%2==0?n:Z.canvasWhite).translate(e,xS.y,t)),$(.03,.03,1.75,Z.steelLight,e,1.6,t,`plain`,6),vy(.06,n,e,xS.y+xS.height/2+.03,t,1,6)]}function CS(e,t){return[$(.16,.19,.4,Z.woodLight,e,.2,t,`wood`,10),$(.2,.2,.06,Z.cushion,e,.43,t,`plain`,10)]}function wS(e,t,n){let r=e<0?-1:1;return[$(.28,.32,.04,Z.iron,e,.02,t,`plain`,10),$(.04,.04,.68,q.steelDark,e,.38,t,`steel`,6),$(.55,.55,.05,q.tableTop,e,.735,t,`wood`,16),$(.13,.1,.015,q.paper,e+.26,.768,t-.2,`plain`,8),$(.05,.04,.09,q.cupLid,e-.28,.805,t-.2,`plain`,7),...SS(e,t,n),...CS(e+r*.85,t+.2),...CS(e+r*.3,t-.85)]}function TS(e,t){return[$(.3,.22,.45,q.pot,e,.225,t,`plain`,10),$(.33,.33,.06,Z.terracottaRim,e,.45,t,`plain`,10),yy(.4,q.plant,e,.8,t),yy(.28,Z.leafLight,e+.12,1.12,t+.05),...[[.3,.95,.18],[-.28,.9,.22],[.05,1.28,.2],[-.1,.72,.36],[.26,1.2,-.05]].map(([n,r,i],a)=>vy(.06,Z.flower[a%Z.flower.length]??16777215,e+n,r,t+i,1,6))]}var ES=r.tables.spots.slice(0,2);function DS(e=bS){return[...yS(),...ES.flatMap((e,t)=>wS(e.x,e.z,q.umbrellas[t]??q.umbrellas[0])),...TS(-4.5,-1.5),...TS(4.5,-1.5),...TS(-4.45,8.75),...TS(4.45,8.75),...e(-5.2,1.2,1),...e(-5,5.4,.8),...e(5.2,3.4,1.1),...e(5.1,-.6,.85)]}var OS=-cS.width/2-Z.wallInset;function kS(e){return OS+e}var AS={x:-.62,z:-.24,width:.7,depth:.78,height:1.45,feet:.06},jS={x:AS.x+.74,z:AS.z,top:.46},MS=-Math.PI/2,NS=Math.PI/2,PS=.3,FS=.2,IS=[{dx:-.15,shelf:0,colour:q.meatRaw},{dx:.15,shelf:0,colour:q.meatRaw},{dx:-.15,shelf:1,colour:q.chickenRaw},{dx:.15,shelf:1,colour:q.meatRaw}],LS=4,RS={radius:.108,shrink:.012,height:.068,squash:.48,sides:7};function zS(e,t,n,r){let i=new U(e).multiplyScalar(.92).getHex(),a=Array.from({length:LS},(a,o)=>vy(RS.radius-o*RS.shrink,o%2==0?e:i,t+(o%2==0?.006:-.006),n+(o+.6)*RS.height,r,RS.squash,RS.sides)),o=n+LS*RS.height;return[...a,$(.1,.1,.012,q.steelDark,t,n+.006,r,`steel`,10),$(.012,.012,.42,q.steelDark,t,n+.21,r,`steel`,6),vy(.035,q.tomato,t,o+.045,r,.9,6)]}function BS(e,t,n){return[0,Math.PI/3,2*Math.PI/3].map(r=>hy(.15,.024,.01,q.yoghurt,0,0,0,`plain`,0).rotateZ(r).translate(e,t,n))}function VS(){let{x:e,z:t,height:n,feet:r}=AS,i=AS.depth,a=AS.width,o=t+a/2,s=t-a/2,c=r+n,l=n-PS-FS,u=r+PS,d=u+l/2,f=[u,d+.01];return[...[-1,1].flatMap(n=>[-1,1].map(i=>$(.03,.03,r,Z.black,e+n*.28,r/2,t+i*.32,`plain`,6))),hy(i,PS,a,q.coldStore,e,r+PS/2,t,`steel`,.04),...[.09,.15,.21].map(t=>Q(.5,.022,.012,Z.iron,e,r+t,o+.004)),hy(i,FS,a,q.coldStore,e,c-FS/2,t,`steel`,.04),Q(i-.1,.13,.012,q.coldStoreDoor,e,c-FS/2,o+.004),...BS(e,c-FS/2,o+.014),Q(i,l,.05,q.coldStore,e,d,s+.025,`steel`),Q(.05,l,a,q.coldStore,e-i/2+.025,d,t,`steel`),Q(.05,l,a,q.coldStore,e+i/2-.025,d,t,`steel`),Q(i-.1,l,.01,q.coldStoreDoor,e,d,s+.055),Q(i-.1,.02,a-.12,Z.steelLight,e,d,t,`steel`),...IS.flatMap(({dx:n,shelf:r,colour:i})=>{let a=f[r]??u;return zS(i,e+n,a+.03,t+.1)}),Q(.04,l,.02,q.steelDark,e-i/2+.02,d,o+.005,`steel`),Q(.04,l,.02,q.steelDark,e+i/2-.02,d,o+.005,`steel`),$(.018,.018,.4,q.steelDark,e+i/2-.02,d,o+.045,`steel`,6),hy(.5,.1,.5,q.steelDark,e,c+.05,t,`steel`,.02),...[-.15,-.05,.05,.15].map(n=>Q(.4,.012,.035,Z.iron,e,c+.104,t+n))].map(n=>n.translate(-e,0,-t).rotateY(MS).translate(e,0,t))}function HS(){let e=new Ha;e.position.set(AS.x,0,AS.z),e.rotation.y=NS;let t=-AS.depth/2;return e.add(jy(aS(t,0)),iS(t,0)),e}function US(){let{x:e,z:t,top:n}=jS,r=[-1,1].flatMap(n=>[-1,1].map(r=>[e+n*.21,t+r*.16]));return[...r.map(([e,t])=>$(.018,.018,n-.06,q.steelDark,e,n/2+.03,t,`steel`,6)),...r.map(([e,t])=>vy(.04,Z.black,e,.04,t,1,6)),Q(.5,.03,.4,q.steel,e,n,t,`steel`),Q(.46,.02,.36,q.steelDark,e,.17,t,`steel`),$(.2,.18,.03,q.steelDark,e,n+.03,t,`steel`,12)]}function WS(e){let{x:t,z:n}=r.coldStore.pos,i=new Ha,a=Eb();a.setFullness(1),a.setCooked(0),a.group.scale.setScalar(K.spit.spareScale),a.group.position.set(jS.x,jS.top+.05,jS.z);let o=My(r.coldStore.radius,q.arrow,.8);o.visible=!1;let s=new Ha;return s.rotation.y=Z.rowTurn,s.position.set(kS(AS.depth/2)-t-AS.z,0,AS.x),s.add(jy([...VS(),...US()]),HS(),a.group),i.add(s,o),i.position.set(t,0,n),e.add(i),{update(e,t){o.visible=e,o.scale.setScalar(1+Math.sin(t*6)*.06)}}}var GS=cS.width/2-.28;function KS(e,t,n,r,i=0){return e.map(e=>e.rotateY(i).translate(t,n,r))}function qS(e){let t=[-.15,0,.15].flatMap(t=>[-.08,.08].map(n=>vy(.075,e,t,.2,n,1,6)));return[Q(.5,.02,.36,Z.crate,0,.01,0,`wood`),Q(.5,.2,.02,Z.crate,0,.1,.17,`wood`),Q(.5,.2,.02,Z.crate,0,.1,-.17,`wood`),Q(.02,.2,.36,Z.crate,.24,.1,0,`wood`),Q(.02,.2,.36,Z.crate,-.24,.1,0,`wood`),...t]}function JS(e,t,n){return[yy(.27,n,e,.24,t,.9),by(.07,.14,n,e,.52,t,6)]}function YS(e,t){let n=[-.13,0,.13].flatMap(n=>[-.08,.08].map(r=>$(.05,.05,.03,q.cup,e+n,.55,t+r,`plain`,7)));return[hy(.46,.26,.34,q.fridge,e,.13,t,`plain`,.02),hy(.46,.26,.34,q.fridge,e+.02,.4,t-.01,`plain`,.02),...n]}function XS(e,t){return[$(.27,.22,.7,Z.bin,e,.35,t,`plain`,10),vy(.28,Z.binLid,e,.7,t,.5),Q(.22,.07,.02,Z.black,e,.6,t+.255)]}function ZS(){return[...KS(qS(q.tomato),GS,0,1.6),...KS(qS(Z.onion),GS,0,2.2,.08),...KS(qS(q.tomato),GS-.02,.27,1.66,.25),...JS(GS,3.4,Z.onionSack),...YS(GS,5.2),...JS(GS,7.8,Z.potatoSack),...XS(-4.55,-3)]}var QS={x:2.75,y:2.5,z:-3.4,lean:-.55,posts:.9},$S={width:2.52,height:1.14,tube:.05,gap:.07,colour:5813503};function eC(){return[hy(2.36,.98,.08,Z.woodDark,0,0,0,`wood`,.03).rotateX(QS.lean).translate(QS.x,QS.y,QS.z),...[-QS.posts,QS.posts].flatMap(e=>[$(.12,.15,.08,Z.iron,QS.x+e,.04,QS.z,`plain`,8),$(.05,.05,2.3,q.steelDark,QS.x+e,1.15,QS.z,`steel`,8)])]}function tC(e,t,n,r,i,a){let o=new Is(new Fl(e,t),n);return o.rotation.x=r,o.position.set(i[0],i[1]-Math.sin(r)*a,i[2]+Math.cos(r)*a),o}function nC(){return tC(2.2,.82,new ws({map:$v(r.shopSign.word)}),QS.lean,[QS.x,QS.y,QS.z],.045)}var rC={x:-2.5,z:-5.4,lean:-.3,spread:.14,y:.48};function iC(){let e=(e,t)=>hy(.7,1,.04,Z.woodDark,0,0,0,`wood`,.02).rotateX(e).translate(rC.x,rC.y,t);return[e(rC.lean,rC.z+rC.spread),e(-rC.lean,rC.z-rC.spread)]}function aC(){return tC(.58,.8,new ws({map:dy()}),rC.lean,[rC.x,rC.y,rC.z+rC.spread],.022)}function oC(e,t,n,r){return Array.from({length:r+1},(i,a)=>{let o=a/r,s=n*4*o*(1-o);return[e[0]+(t[0]-e[0])*o,e[1]+(t[1]-e[1])*o-s,e[2]+(t[2]-e[2])*o]})}function sC(e){return e.slice(1).map((t,n)=>Cy(e[n]??t,t,.014,Z.rope))}var cC={height:2.65,sag:.45,bulbs:14};function lC(){let e=cS.width/2+.1;return[-e,e].map(e=>oC([e,cC.height,cS.back],[e,cC.height,cS.front],cC.sag,cC.bulbs))}function uC(){let e=lC(),t=e.flatMap(e=>[e[0],e[e.length-1]].flatMap(e=>e===void 0?[]:[$(.035,.05,cC.height,Z.woodDark,e[0],cC.height/2,e[2],`wood`,6)])),[n,r]=fS,i=oC([n.x,pS-.25,n.z],[r.x,pS-.25,r.z],.4,18),a=i.slice(1).map((e,t)=>{let n=i[t]??e;return Sy(.17,Z.flags[t%Z.flags.length]??16777215,(n[0]+e[0])/2,(n[1]+e[1])/2,e[2]+.01)});return[...t,...e.flatMap(sC),...sC(i),...a]}function dC(){return lC().flatMap(e=>e.slice(1,-1).map(([e,t,n],r)=>({x:e,y:t-.07,z:n,colour:Z.bulbs[r%Z.bulbs.length]??16777215})))}function fC(){let{width:e,height:t,tube:n,gap:r,colour:i}=$S;return[hy(e,n,n,i,0,t/2,r,`plain`,n/2),hy(e,n,n,i,0,-t/2,r,`plain`,n/2),hy(n,t,n,i,-e/2,0,r,`plain`,n/2),hy(n,t,n,i,e/2,0,r,`plain`,n/2)].map(e=>e.rotateX(QS.lean).translate(QS.x,QS.y,QS.z))}function pC(){return lC().flatMap(e=>e.slice(1,-1).map(([e,t,n],r)=>vy(.065,Z.bulbs[r%Z.bulbs.length]??16777215,e,t-.07,n,1,6)))}var mC=q.trunk,hC={x:5.4,z:6.6};function gC(e,t,n){return $(.55*n,.55*n,.04,Z.soil,e,.02,t,`plain`,10)}function _C(e,t,n,r=[q.tree,Z.leafLight,Z.leafDark]){return[gC(e,t,n),$(.11*n,.17*n,1.1*n,mC,e,.55*n,t,`wood`,7),yy(.72*n,r[0],e,1.5*n,t,.9),yy(.5*n,r[1],e-.32*n,1.95*n,t+.22*n),yy(.46*n,r[2],e+.36*n,1.8*n,t-.1*n),yy(.42*n,r[0],e+.05*n,2.3*n,t+.05*n)]}function vC(e,t,n){return[gC(e,t,n),$(.1*n,.13*n,.5*n,mC,e,.25*n,t,`wood`,7),by(.5*n,2.6*n,3107653,e,1.75*n,t,9),by(.36*n,1.5*n,3965526,e,2.55*n,t,9)]}function yC(e,t,n){let r=2.5*n,i=Array.from({length:7},(i,a)=>{let o=a/7*Math.PI*2;return yy(.42*n,a%2==0?4168266:5814364,e+Math.cos(o)*.5*n,r-.08*n,t+Math.sin(o)*.5*n,.32)});return[gC(e,t,n),$(.09*n,.15*n,r,11108954,e,r/2,t,`wood`,7),yy(.3*n,4168266,e,r+.05*n,t,.6),vy(.1*n,9067051,e+.12*n,r-.2*n,t+.1*n,1,6),...i]}function bC(e,t,n){return _C(e,t,n,[14715436,15909182,13127722])}function xC(){let{x:e,z:t}=hC;return[Q(1.3,.06,.4,Z.woodDark,e,.45,t,`wood`),Q(1.3,.34,.06,Z.woodDark,e,.72,t-.2,`wood`),...[-.55,.55].map(n=>hy(.08,.45,.4,Z.iron,e+n,.225,t,`plain`,.02))]}function SC(){let{x:e,z:t}=hC,n=[[-.35,15764004],[-.1,15764004],[.15,5219914],[.4,15909182]];return[hy(1.3,.2,.8,Z.woodDark,e,.72,t,`wood`,.03),...[-.5,.5].map(n=>gy(.3,.08,Z.iron,e+n,.3,t+.42,12)),...[-.55,.55].map(n=>hy(.07,.62,.07,Z.woodDark,e+n,.31,t-.3,`wood`,.01)),...n.map(([n,r])=>vy(.16,r,e+n,.95,t,1,8)),...n.map(([n,r])=>vy(.14,r,e+n+.1,.93,t+.25,1,8)),Q(1.5,.04,1,14826299,e,1.75,t,`plain`),...[-.7,.7].map(n=>hy(.05,1,.05,Z.iron,e+n,1.25,t-.4,`plain`,.01))]}function CC(){let{x:e,z:t}=hC;return[$(1.2,1.2,.03,16179886,e,.015,t,`plain`,16),Q(.6,.08,1.5,3776728,e-.3,.3,t,`plain`),Q(.6,.08,.6,3776728,e-.3,.52,t-.85,`plain`),...[-.55,.55].map(n=>hy(.5,.26,.06,Z.woodDark,e-.3,.13,t+n,`wood`,.01)),vy(.26,14960427,e+.6,.26,t+.4,1,10),vy(.18,16777215,e+.66,.36,t+.5,1,8)]}function wC(){let{x:e,z:t}=hC,n=13620182;return[$(1.1,1.2,.35,n,e,.175,t,`plain`,16),$(.95,.95,.06,7324648,e,.36,t,`plain`,16),$(.16,.22,.9,n,e,.8,t,`plain`,10),$(.5,.2,.14,n,e,1.28,t,`plain`,12),$(.42,.42,.04,7324648,e,1.37,t,`plain`,12),vy(.12,10476789,e,1.5,t,1.4,8)]}var TC=[{paving:16777215,tree:_C,landmark:xC},{paving:14273983,tree:vC,landmark:SC},{paving:16773320,tree:yC,landmark:CC},{paving:14474460,tree:bC,landmark:wC}],EC=1.05,DC=Z.counter,OC=r.counter.pos.z,kC=OC+DC.depth/2,AC=OC+DC.topDepth/2,jC=OC-DC.topDepth/2+.045,MC=EC-DC.topThickness;function NC(e){return DC.startWidth+(e-DC.startColumns)*DC.columnGap}function PC(e){return e+DC.topOverhang*2}function FC(e){let t=MC-DC.plinth;return[Q(e-.1,DC.plinth,DC.depth-.1,Z.black,0,DC.plinth/2,OC),hy(e,t,DC.depth,q.counterWood,0,DC.plinth+t/2,OC,`wood`,.03),hy(PC(e),DC.topThickness,DC.topDepth,q.counterTop,0,EC-DC.topThickness/2,OC,`plain`,.025),Q(PC(e),.03,.012,q.steel,0,EC-DC.topThickness/2,AC+.004,`steel`)]}function IC(e,t){return[hy(t,.5,.025,Z.woodLight,e,.42,kC+.01,`wood`,.012),Q(.16,.03,.03,q.steel,e,.6,kC+.035,`steel`)]}function LC(e,t){return[Q(t,.5,.012,Z.woodDark,e,.42,kC+.004),Q(t,.025,.03,Z.woodLight,e,.42,kC+.018,`wood`),...[-.24,-.08,.08].map(t=>gy(.07,.04,q.paper,e+t,.51,kC+.025)),Q(.2,.17,.04,Z.crate,e-.18,.27,kC+.025,`wood`),Q(.16,.13,.04,q.lavash,e+.1,.25,kC+.025)]}function RC(e){let t=Math.max(2,Math.round(e/1.1)),n=e/t;return Array.from({length:t},(t,r)=>{let i=-e/2+(r+.5)*n;return r%2==0?IC(i,n-.12):LC(i,n-.12)}).flat()}function zC(e,t){let n=PC(e),r=Math.round(n/DC.skirtStripe),i=n/r,a=AC+.014;return Array.from({length:r},(e,r)=>{let o=-n/2+(r+.5)*i,s=r%2==0?t:Z.canvasWhite;return[Q(i,DC.skirtDrop,.008,s,o,MC-DC.skirtDrop/2,a),xy(i/2,s,o,MC-DC.skirtDrop,a+.004)]}).flat()}function BC(e){let t=PC(e)-.1,n=Math.max(2,Math.round(t/1.2)+1),r=EC+DC.guardHeight/2;return[...Array.from({length:n},(e,i)=>$(.016,.016,DC.guardHeight,q.steel,-t/2+i*t/(n-1),r,jC,`steel`,6)),_y(.016,t,q.steel,0,EC+DC.guardHeight,jC,`steel`)]}function VC(e){let t=-.5,n=my(new pc(.2,.14,.03).rotateX(t),Z.iron),r=my(new pc(.15,.08,.006).rotateX(t),Z.screen);return[hy(.28,.1,.3,Z.black,e,1.1,OC+.2,`plain`,.02),Q(.2,.012,.12,Z.steelLight,e,1.155,OC+.26),n.translate(e,1.22,OC+.1),r.translate(e,1.228,OC+.116),hy(.14,.1,.1,q.steel,e,1.1,OC-.2,`steel`,.01),Q(.1,.03,.07,q.paper,e,1.1600000000000001,OC-.2)]}function HC(e){let t=Z.sauces.flatMap((t,n)=>{let r=OC+.09+n*.11;return[$(.04,.045,.15,t,e,1.155,r,`plain`,8),by(.02,.06,t,e,1.26,r,6)]}),n=OC-.22;return[Q(.16,.03,.36,q.steelDark,e,1.065,OC+.2,`steel`),...t,$(.16,.12,.09,Z.wicker,e,1.095,n,`wood`,10),$(.17,.17,.02,Z.woodLight,e,1.1400000000000001,n,`wood`,10),vy(.075,q.lavash,e-.05,1.17,n+.03,.7,7),vy(.075,Z.woodLight,e+.06,1.175,n-.02,.7,7),vy(.07,q.lavash,e,1.2,n-.05,.7,7)]}function UC(e){let t=Z.awning,n=e/2+t.overhang,r=Math.min(...t.keepClear.map(e=>e.from)),i=Math.max(...t.keepClear.map(e=>e.to));return[[-n,Math.min(r,n)],[Math.max(i,-n),n]].filter(([e,n])=>n-e>=t.minBay)}function WC(e,t,n){let r=Z.awning,i=OC+r.ridgeZ,a=i+r.halfDepth,o=r.ridgeY-r.eaveY,s=Math.hypot(o,r.halfDepth),c=Math.atan2(o,r.halfDepth),l=(r.ridgeY+r.eaveY)/2,u=Math.max(2,Math.round((t-e)/r.stripe)),d=(t-e)/u,f=Array.from({length:u},(t,o)=>{let u=e+(o+.5)*d,f=o%2==0?n:Z.canvasWhite;return[my(new pc(d,.012,s).rotateX(c),f).translate(u,l,i+r.halfDepth/2),my(new pc(d,.012,s).rotateX(-c),f).translate(u,l,i-r.halfDepth/2),Q(d,r.valance,.01,f,u,r.eaveY-r.valance/2,a),xy(d/2,f,u,r.eaveY-r.valance,a+.006)]}).flat(),p=[e+.08,t-.08].flatMap(e=>[$(.03,.03,r.ridgeY,Z.steelLight,e,r.ridgeY/2,i,`plain`,6),Cy([e,r.ridgeY-.03,i],[e,r.eaveY-.02,a],.03,q.steelDark),Cy([e,r.ridgeY-.03,i],[e,r.eaveY-.02,i-r.halfDepth],.03,q.steelDark)]);return[...f,...p,_y(.02,t-e,q.steelDark,(e+t)/2,r.ridgeY-.025,i)]}function GC(e,t=Z.awningRed){let n=NC(e),r=PC(n)/2-.2,i=new Is(new pc(PC(n)-.14,DC.guardHeight-.04,.01),Ay());i.position.set(0,EC+DC.guardHeight/2,jC);let a=new Ha;return a.add(jy([...FC(n),...RC(n),...zC(n,t),...BC(n),...VC(-r),...HC(r),...UC(n).flatMap(([e,n])=>WC(e,n,t))]),i),a}var KC=.85;function qC(e,t){let n=new Float32Array(e.length*3),r=new Float32Array(e.length*3),i=new U;e.forEach((e,t)=>{n.set([e.x,e.y,e.z],t*3),i.set(e.colour),r.set([i.r,i.g,i.b],t*3)});let a=new Ko;a.setAttribute(`position`,new jo(n,3)),a.setAttribute(`color`,new jo(r,3));let o=new oc(a,new tc({map:Cv(),size:t,sizeAttenuation:!0,vertexColors:!0,transparent:!0,blending:2,depthWrite:!1,fog:!1,toneMapped:!1}));return o.visible=!1,o.renderOrder=2,o}function JC(e,t,n,r){let i=[qC(t,r.bulb),qC(n,r.lamp)];e.add(...i);let a=-1;return{set(e){let t=Math.round(Math.min(Math.max(e,0),1)*50)/50;t!==a&&(a=t,i.forEach(e=>{e.visible=t>0,e.material.color.setScalar(t*KC)}))}}}var YC={width:1.5,depth:9.4,y:.008,z:-7.1},XC={size:120,repeats:120},ZC={x:4,z:5},QC={light:`#ffffff`,dark:`#e9e9e9`},$C=16;function ew(e,t,n,r,i,a){let o=new Is(new Fl(e,t).rotateX(-Math.PI/2),n);return o.position.set(r,i,a),o.receiveShadow=!0,o}function tw(e,t,n,i){e.add(ew(XC.size,XC.size,i,0,0,0),ew(cS.width,cS.depth,t,0,.01,cS.z),ew(YC.width,YC.depth,Ah(q.path),r.queue.head.x,YC.y,YC.z),jy(_S(),!1),jy([...ZS(),...eC(),...iC(),...uC()]),jy([...vS(),...pC(),...fC()],!1,Oy()),n,aC())}function nw(e){return Number.isFinite(e)?Math.min(Math.max(Math.round(e),Z.counter.startColumns),$C):Z.counter.startColumns}function rw(e){let t=new Ql({map:qv(ZC.x,ZC.z)}),n=nC(),i=new Ql({map:Yv(XC.repeats,XC.repeats)});tw(e,t,n,i);let a=new Map,o=new Map,s=r.shopSign.word,c=null,l=0,u=new Map,d=()=>{let t=p(l),n=TC[t]??TC[0];if(n!==void 0){if(!u.has(t)){let r=jy([...DS(n.tree),...n.landmark()]);u.set(t,r),e.add(r)}u.forEach((e,n)=>{e.visible=n===t}),i.color.setHex(n.paving)}},f=null,m=Z.awningRed,h=Z.awningRed,g=t.map,_=null,v=()=>{let e=q.branchTints;f===null?(t.map=g,t.color.setHex(e[l%e.length]??e[0])):(_??(_=qv(ZC.x,ZC.z,QC.light,QC.dark)),t.map=_,t.color.setHex(f))},y=()=>{if(c===null)return;let t=`${nw(c)}|${m}`;if(!a.has(t)){let n=GC(nw(c),m);a.set(t,n),e.add(n)}a.forEach((e,n)=>{e.visible=n===t})},b={setNight:JC(e,dC(),fS.map(e=>({x:e.x,y:pS,z:e.z,colour:q.lamp})),K.day.halo).set,setBranch(e){e!==l&&(l=e,v(),d())},setCounterColumns(e){e!==c&&(c=e,y())},setStyle(e,t,r,i){if(e!==f&&(f=e,v()),t!==m&&(m=t,y()),r===h&&i===s)return;i!==s&&(o.forEach(e=>e.dispose()),o.clear(),s=i),h=r;let a=o.get(r)??$v(i,`#${r.toString(16).padStart(6,`0`)}`);o.set(r,a);let c=n.material;c instanceof ws&&(c.map!==null&&![...o.values()].includes(c.map)&&c.map.dispose(),c.map=a,c.needsUpdate=!0)}};return v(),d(),b.setCounterColumns(Z.counter.startColumns),b}var iw=.52,aw=r.counter.columns+r.counter.columnsPerLevel*r.pads.defs.counter.costs.length,ow={meat:[.36,.18],chicken:[0],drink:[-.18],fries:[-.36]},sw={meat:.1,chicken:.1,drink:.09,fries:.09},cw=[`meat`,`chicken`,`drink`,`fries`];function lw(e){return e===`drink`?sx():e===`fries`?cx():ox(e)}function uw(e,t,n){let i=ow[e],a=Math.min(Math.max(t,0),n*i.length-1),o=i[Math.floor(a/n)]??0;return new V(r.counter.pos.x+(a%n-(n-1)/2)*iw,EC+sw[e],r.counter.pos.z+o)}function dw(e,t){return t===`meat`?e.meat:t===`chicken`?e.chicken:t===`drink`?e.drinks:e.fries}function fw(e,t){let n=aw*ow[e].length,r=lw(e).children[0];if(!(r instanceof Is))throw Error(`The ${e} model has no mesh to copy`);let i=new Js(r.geometry,r.material,n);i.castShadow=!1,i.frustumCulled=!1,i.count=0;let a=Array.from({length:n},(n,r)=>uw(e,r,t));return{mesh:i,shownFor:a.map(()=>0),places:a,moving:!1,count:-1}}function pw(e){let t=r.counter.columns,n={meat:fw(`meat`,t),chicken:fw(`chicken`,t),drink:fw(`drink`,t),fries:fw(`fries`,t)};cw.forEach(t=>e.add(n[t].mesh));let i=new Va,a=(e,t,n)=>{if(t!==e.count||e.moving){e.count=t,e.moving=!1;for(let r=0;r<e.places.length;r+=1){let a=r<t?(e.shownFor[r]??0)+n:0;e.shownFor[r]=a;let o=e.places[r];if(r>=t||o===void 0)continue;let s=(a-K.popIn.delay)/K.popIn.duration;s<1&&(e.moving=!0),i.position.copy(o),i.scale.setScalar(s>0?Fh(s):0),i.updateMatrix(),e.mesh.setMatrixAt(r,i.matrix)}e.mesh.count=t,e.mesh.instanceMatrix.needsUpdate=!0}};return{update(e,r){e.columns!==t&&(t=Math.min(e.columns,aw),cw.forEach(e=>{let r=n[e];r.places=r.places.map((n,r)=>uw(e,r,t)),r.count=-1})),cw.forEach(t=>a(n[t],Math.min(dw(e,t),n[t].places.length),r))},point:(e,n)=>uw(e,n,t)}}var mw=new URL(`ayran-BnwKa-R3.webp`,import.meta.url).href,hw=new URL(`brush-BnR128_9.webp`,import.meta.url).href,gw=new URL(`camera-mSMzwW4l.webp`,import.meta.url).href,_w=new URL(`carry-D4B4daw0.webp`,import.meta.url).href,vw=new URL(`cashier-DZoqZTb7.webp`,import.meta.url).href,yw=new URL(`check-BaJOEJg-.webp`,import.meta.url).href,bw=new URL(`chef-C7k9hji-.webp`,import.meta.url).href,xw=new URL(`chicken-Dfm0I-jg.webp`,import.meta.url).href,Sw=new URL(`clock-CNz03_CV.webp`,import.meta.url).href,Cw=new URL(`coin-klQ5VaBY.webp`,import.meta.url).href,ww=new URL(`counter-DNJupBpo.webp`,import.meta.url).href,Tw=new URL(`crate-CQpPMlNY.webp`,import.meta.url).href,Ew=new URL(`doner-CgynXzPb.webp`,import.meta.url).href,Dw=new URL(`film-NLcxU51v.webp`,import.meta.url).href,Ow=new URL(`fire-Da6UDgfK.webp`,import.meta.url).href,kw=new URL(`fries-Co4LpZY_.webp`,import.meta.url).href,Aw=new URL(`garnish-Cwz4QdGu.webp`,import.meta.url).href,jw=new URL(`gift-vzMkkW5q.webp`,import.meta.url).href,Mw=new URL(`hand-2nB9tU3R.webp`,import.meta.url).href,Nw=new URL(`helper-D3xOAqLn.webp`,import.meta.url).href,Pw=new URL(`lavash-Dj989h5u.webp`,import.meta.url).href,Fw=new URL(`mute-11XKxUKg.webp`,import.meta.url).href,Iw=new URL(`pad-done-CMVRQDRZ.webp`,import.meta.url).href,Lw=new URL(`pad-DcB_dQVj.webp`,import.meta.url).href,Rw=new URL(`plaque-T6d5nrHV.webp`,import.meta.url).href,zw=new URL(`plate-BbrWFJ-P.webp`,import.meta.url).href,Bw=new URL(`price-BXucefnz.webp`,import.meta.url).href,Vw=new URL(`rush-LKFkgaa9.webp`,import.meta.url).href,Hw=new URL(`salgam-ChfrUzsX.webp`,import.meta.url).href,Uw=new URL(`scooter-B0nJ5OQF.webp`,import.meta.url).href,Ww=new URL(`serve-DI_K21hE.webp`,import.meta.url).href,Gw=new URL(`shop-DQZZ9Poy.webp`,import.meta.url).href,Kw=new URL(`sound-D3OxnfbY.webp`,import.meta.url).href,qw=new URL(`spark-oEnyiI27.webp`,import.meta.url).href,Jw=new URL(`style-awning-Cc5JXXAk.webp`,import.meta.url).href,Yw=new URL(`style-coat-EMnoL8d-.webp`,import.meta.url).href,Xw=new URL(`style-floor-BzSFycLF.webp`,import.meta.url).href,Zw=new URL(`style-sign-C8IQA4P3.webp`,import.meta.url).href,Qw=new URL(`tables-BNPH8COX.webp`,import.meta.url).href,$w=new URL(`upgrade-D6E834b-.webp`,import.meta.url).href,eT=new URL(`window-DLXwXtxF.webp`,import.meta.url).href,tT=new URL(`wrap-Dv17qqa6.webp`,import.meta.url).href,nT=`ayran.brush.camera.carry.cashier.check.chef.chicken.clock.coin.counter.crate.doner.film.fire.fries.garnish.gift.hand.helper.lavash.mute.pad.pad-done.plaque.plate.price.rush.salgam.scooter.serve.shop.sound.spark.style-awning.style-coat.style-floor.style-sign.tables.upgrade.window.wrap`.split(`.`),rT=160,iT=`http://www.w3.org/2000/svg`,aT=Object.assign({"./icons/ayran.webp":mw,"./icons/brush.webp":hw,"./icons/camera.webp":gw,"./icons/carry.webp":_w,"./icons/cashier.webp":vw,"./icons/check.webp":yw,"./icons/chef.webp":bw,"./icons/chicken.webp":xw,"./icons/clock.webp":Sw,"./icons/coin.webp":Cw,"./icons/counter.webp":ww,"./icons/crate.webp":Tw,"./icons/doner.webp":Ew,"./icons/film.webp":Dw,"./icons/fire.webp":Ow,"./icons/fries.webp":kw,"./icons/garnish.webp":Aw,"./icons/gift.webp":jw,"./icons/hand.webp":Mw,"./icons/helper.webp":Nw,"./icons/lavash.webp":Pw,"./icons/mute.webp":Fw,"./icons/pad-done.webp":Iw,"./icons/pad.webp":Lw,"./icons/plaque.webp":Rw,"./icons/plate.webp":zw,"./icons/price.webp":Bw,"./icons/rush.webp":Vw,"./icons/salgam.webp":Hw,"./icons/scooter.webp":Uw,"./icons/serve.webp":Ww,"./icons/shop.webp":Gw,"./icons/sound.webp":Kw,"./icons/spark.webp":qw,"./icons/style-awning.webp":Jw,"./icons/style-coat.webp":Yw,"./icons/style-floor.webp":Xw,"./icons/style-sign.webp":Zw,"./icons/tables.webp":Qw,"./icons/upgrade.webp":$w,"./icons/window.webp":eT,"./icons/wrap.webp":tT});function oT(e){let t=aT[`./icons/${e}.webp`];if(t===void 0)throw Error(`The icon "${e}" has no picture file`);return t}var sT=new Map;function cT(e){nT.forEach(t=>{let n=document.createElementNS(iT,`symbol`);n.setAttribute(`id`,`i-${t}`),n.setAttribute(`viewBox`,`0 0 ${rT} ${rT}`);let r=document.createElementNS(iT,`image`);r.setAttribute(`href`,oT(t)),r.setAttribute(`width`,String(rT)),r.setAttribute(`height`,String(rT)),n.append(r),e.append(n)})}function lT(e){return new Promise(t=>{let n=new Image;n.onload=()=>{sT.set(e,n),t()},n.onerror=()=>{console.error(`The icon "${e}" could not be loaded`),t()},n.src=oT(e)})}function uT(){return Promise.all(nT.map(lT)).then(()=>void 0)}function dT(e,t,n){let r=sT.get(t);r!==void 0&&e.drawImage(r,-n/2,-n/2,n,n)}var fT=192,pT=128;function mT(e){let[t,n,r,i,a]=[6,6,186,102,30];e.beginPath(),e.moveTo(t+a,n),e.arcTo(r,n,r,i,a),e.arcTo(r,i,t,i,a),e.arcTo(t,i,t,n,a),e.arcTo(t,n,r,n,a),e.closePath(),e.moveTo(fT/2-14,100),e.lineTo(fT/2,122),e.lineTo(110,100),e.fillStyle=Ev,e.fill(),e.lineWidth=6,e.strokeStyle=wv,e.stroke(),e.fillRect(fT/2-11,94,22,9)}var hT={meat:`doner`,chicken:`chicken`};function gT(e,t){let n=Lv(fT,pT);return mT(n),Av(n,54,54,1,()=>dT(n,hT[e],88)),n.fillStyle=wv,n.font=`900 58px ${kv}`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(`×${t}`,128,56),new rs({map:Rv(n),transparent:!0,depthWrite:!1})}var _T=new Map;function vT(e,t){let n=`${e}|${t}`,r=_T.get(n);if(r!==void 0)return r;let i=gT(e,t);return _T.set(n,i),i}var yT=new V(J.hand.x,J.hand.y,J.hand.z),bT={holdAngle:-1.1,tuck:.25,look:.2},xT=40;function ST(e){let t=ox(e);return t.position.copy(yT),t.rotation.z=-Math.PI/2,t.visible=!1,t}function CT(){let e=new _s(vT(`meat`,1));return e.scale.set(J.courierSign.width,J.courierSign.tall,1),e.position.y=J.courierSign.height,e.visible=!1,e}function wT(e){let t=`meat`,n=1;return r=>{let i=Math.max(r.need-r.got,0);e.visible=r.phase===`waiting`&&i>0,!e.visible||i===n&&r.wants===t||(e.material=vT(r.wants,i),t=r.wants,n=i)}}function TT(e){let t=bv(),n=xg(t.geometry,t.limbs,t.girth),{group:r,body:i}=n,a=CT(),o={meat:ST(`meat`),chicken:ST(`chicken`)};i.add(o.meat,o.chicken),r.add(a),r.visible=!1,e.add(r);let s=Sg(0,0),c=!1,l=0,u=wT(a);return{update(e,t,i){if(r.visible=e!==null,e===null){c=!1;return}let{x:a,z:d}=e.pos;c||(s.lastX=a,s.lastZ=d,s.walk=0,l=0,c=!0),wg(s,a,d,i),r.position.set(a,0,d),r.rotation.y=Nh(r.rotation.y,s.moving?s.heading:0,K.turnRate,i);let f=e.got>0;l=Mh(l,+!!f,J.holdRate,i),Eg(n,s,bT,l,t,xT),o.meat.visible=f&&e.wants===`meat`,o.chicken.visible=f&&e.wants===`chicken`,u(e)},handPoint:()=>c?r.localToWorld(yT.clone()):null}}var ET=K.queueLife,DT=K.seat,OT=.41,kT=.29,AT=Math.PI*2;function jT(e,t,n){return e+(t-e)*n}function MT(e,t){let n=Math.max(Math.sin(e)-t,0)/(1-t);return n*n*(3-2*n)}function NT(e){return Math.floor(e/AT)%2==0?1:-1}function PT(e,t){if(e===0)return 0;let n=t*OT;return MT(n,.7)*ET.glance*NT(n)}function FT(e,t,n,r){if(t===0)return;let i=r*kT+2,a=MT(i,.6)*NT(i)*n;e.body.position.x+=a*ET.peek,e.body.rotation.z-=a*ET.peek*1.2}function IT(e,t,n,r){if(t<ET.fretFrom)return;let i=Math.min((t-ET.fretFrom)/(ET.shakeFrom-ET.fretFrom),1);if(n||(e.limbs.rightLeg.rotation.x=-Math.abs(Math.sin(r*ET.tapRate))*ET.tap*i),t<ET.shakeFrom)return;let a=Math.max(Math.sin(r*1.3),0);e.body.rotation.y+=Math.sin(r*ET.shakeRate)*ET.shake*a}function LT(e,t,n){let{body:r,limbs:i}=e;r.rotation.x+=ET.slump*t,r.position.y-=.03*t,r.rotation.y+=Math.sin(n*3)*.12*t,i.leftArm.rotation.x=i.leftArm.rotation.x*(1-.7*t)-ET.slump*t,i.rightArm.rotation.x=i.rightArm.rotation.x*(1-.7*t)-ET.slump*t}function RT(e,t,n,r){let{body:i,limbs:a}=e,o=Math.max(Math.sin(r*DT.biteRate),0),s=o*o*n;a.leftLeg.rotation.x=jT(a.leftLeg.rotation.x,DT.legs,t),a.rightLeg.rotation.x=jT(a.rightLeg.rotation.x,DT.legs,t),a.leftLeg.position.y=J.hip.y,a.rightLeg.position.y=J.hip.y,a.leftArm.rotation.x=jT(a.leftArm.rotation.x,DT.rest,t),a.rightArm.rotation.x=jT(a.rightArm.rotation.x,jT(DT.rest,DT.lift,s),t),a.leftArm.rotation.z=jT(a.leftArm.rotation.z,.12,t),a.rightArm.rotation.z=jT(a.rightArm.rotation.z,-.12-.45*s,t),i.rotation.x=jT(i.rotation.x,DT.lean+DT.nod*s,t),i.position.y+=Math.sin(r*13)*.004*n*(1-o)*t}var zT={hats:[[`cap`,12],[`beanie`,10],[`scarf`,12],[`straw`,8]],outfits:[`tee`,`tee`,`stripe`,`stripe`,`jacket`,`jacket`,`dress`],tops:Y.tops,trousers:Y.trousers,shortSleeves:66},BT=[zT,{hats:[[`scarf`,28],[`cap`,22],[`beanie`,4],[`straw`,4]],outfits:[`jacket`,`jacket`,`jacket`,`stripe`,`tee`,`dress`,`dress`],tops:[11892298,9194042,10135626,3494031,16050904,7035786,4160874,11031851],trousers:[7035723,3883602,3754810,9080729],shortSleeves:40},{hats:[[`straw`,44],[`cap`,16]],outfits:[`tee`,`tee`,`tee`,`stripe`,`stripe`,`dress`,`dress`],tops:[16777215,16050904,9425896,16234403,10477760,13219568,5214182,15759962],trousers:[14272936,15855076,9418710,3099256],shortSleeves:95},{hats:[[`beanie`,40],[`scarf`,16],[`cap`,8]],outfits:[`jacket`,`jacket`,`jacket`,`jacket`,`jacket`,`stripe`,`dress`],tops:[3494031,7028538,3754810,5922667,9190218,11892298,3108723,4865899],trousers:[3883602,2827296,3099256,7035723],shortSleeves:0}],VT=BT.length;function HT(e){return BT[e]??zT}function UT(e,t){let n=0;for(let[r,i]of e.hats)if(n+=i,t<n)return r;return`none`}var WT=[`short`,`long`,`bun`,`ponytail`,`quiff`,`afro`,`pigtails`,`bald`],GT=97;function KT(e,t,n,r){return e!==`short`&&e!==`quiff`&&e!==`afro`&&e!==`bald`||t===`scarf`||n===`dress`?`none`:e===`bald`?r<50?`moustache`:`beard`:r<14?`moustache`:r<24?`beard`:`none`}function qT(e,t){return e===`scarf`?qh(Y.scarves,t):e===`straw`?Y.straw:qh(Y.hats,t)}function JT(e,t,n){let r=t=>Kh(e,t),i=UT(n,r(3)%100),a=qh(WT,r(4)),o=t===`dress`&&a===`bald`?`long`:a;return{skin:qh(q.skin,r(1)),hair:qh(Y.hair,r(2)),hairStyle:o,hat:i,hatColor:qT(i,r(5)),faceHair:KT(o,i,t,r(6)%100),glasses:r(7)%100<16}}function YT(e,t,n,r){let i=qh(r.tops,Kh(e,8)),a=J.build.minGirth+Kh(e,9)%J.build.girthSteps*J.build.girthStep;return{outfit:t,top:i,accent:t===`jacket`?Y.cream:t===`dress`?Wh(i,.7):qh(Y.accents,Kh(e,10)),trousers:qh(r.trousers,Kh(e,11)),skin:n,girth:a}}function XT(e,t){let n=qh(t.outfits,Kh(e,0)),r=JT(e,n,t),i=YT(e,n,r.skin,t),a=n===`dress`,o={sleeve:i.top,skin:r.skin,shortSleeves:n!==`jacket`&&Kh(e,12)%100<t.shortSleeves,legs:a?r.skin:i.trousers,shoes:qh(Y.shoes,Kh(e,14))};return{geometry:Rh([...gv(i),...m_(r)]),limbs:o,girth:i.girth}}function ZT(e){let t=qh(WT,Kh(e,4)),n={skin:qh(q.skin,Kh(e,1)),hair:qh(Y.hair,Kh(e,2)),hairStyle:t===`afro`||t===`quiff`||t===`bun`?`short`:t,hat:`none`,hatColor:Y.crown,faceHair:t===`bald`?`beard`:`none`,glasses:!1},r={outfit:`royal`,top:Y.gold,accent:Y.cape,trousers:Y.goldDark,skin:n.skin,girth:1.05},i={sleeve:Y.gold,skin:n.skin,shortSleeves:!1,legs:Y.goldDark,shoes:Y.crown};return{geometry:Rh([...gv(r),...m_(n),...j_()]),limbs:i,girth:r.girth}}var QT=new Map;function $T(e,t,n=0){let r=(Math.trunc(n)%VT+VT)%VT,i=t?J.castSize+e%J.vipCastSize:e%J.castSize,a=t?i:i+r*(J.castSize+J.vipCastSize),o=QT.get(a);if(o!==void 0)return o;let s=t?ZT(i):XT(i+r*GT,HT(r));return QT.set(a,s),s}function eE(e,t){return t?J.build.vipScale:J.build.minScale+e%J.build.scaleSteps*J.build.scaleStep}function tE(e,t,n,r){return r?e.limbs:{...e.limbs,shoes:qh(Y.shoes,n+Kh(t,14))}}var nE=192,rE=192,iE=264,aE={margin:6,bottom:156,radius:40,tailHalf:18,tailTip:187},oE={meat:`doner`,chicken:`chicken`},sE=132,cE=96,lE=198,uE={1:[{y:86,scale:1.05}],2:[{y:52,scale:.66},{y:116,scale:.66}]};function dE(e,t){let n=aE.margin,r=t-aE.margin,i=t/2;e.beginPath(),e.moveTo(n+aE.radius,aE.margin),e.arcTo(r,aE.margin,r,aE.bottom,aE.radius),e.arcTo(r,aE.bottom,n,aE.bottom,aE.radius),e.lineTo(i+aE.tailHalf,aE.bottom),e.lineTo(i,aE.tailTip),e.lineTo(i-aE.tailHalf,aE.bottom),e.arcTo(n,aE.bottom,n,aE.margin,aE.radius),e.arcTo(n,aE.margin,r,aE.margin,aE.radius),e.closePath(),jv(e,Ev,8)}function fE(e,t){let n=t.length===0?rE:iE,r=Lv(n,nE);dE(r,n),Av(r,t.length===0?n/2:82,82,1,()=>dT(r,oE[e],sE));let i=uE[t.length]??[];return t.forEach((e,t)=>{let n=i[t];n!==void 0&&Av(r,lE,n.y,n.scale,()=>dT(r,e,cE))}),new rs({map:Rv(r),transparent:!0,depthWrite:!1})}var pE=new Map;function mE(e,t,n,r){let i=`${e}|${t}|${n}|${r}`,a=pE.get(i);if(a!==void 0)return a;let o=fE(e,[...t?[r?`salgam`:`ayran`]:[],...n?[`fries`]:[]]);return pE.set(i,o),o}function hE(e,t,n,r=!1){let i=new _s(mE(e,t,n,t&&r)),a=t||n?iE:rE;return i.scale.set(K.order.size*a/nE,K.order.size,1),i.position.y=K.order.height,i}var{patience:gE}=K,_E=new rs({color:2827296,depthTest:!1}),vE={calm:new rs({color:4175971,depthTest:!1}),amber:new rs({color:16756768,depthTest:!1}),red:new rs({color:14960427,depthTest:!1})},yE=.035;function bE(e){return e<=gE.red?vE.red:e<=gE.amber?vE.amber:vE.calm}function xE(){let e=new Ha,t=new _s(_E);t.scale.set(gE.width,gE.height,1);let n=new _s(vE.calm);return n.center.set(0,.5),n.position.x=-gE.width/2+yE,n.renderOrder=1,e.add(t,n),e.visible=!1,{group:e,set(t,r){if(e.visible=t!==null,t===null)return;let i=Math.min(Math.max(t,0),1);e.position.y=r?gE.yAboveOrder:gE.y,n.material=bE(i),n.scale.set((gE.width-yE*2)*i,gE.height-yE*2,1)}}}var SE=new V(J.hand.x,J.hand.y,J.hand.z),CE={holdAngle:-1.1,tuck:.25,look:.3},wE=1.7,TE=.3,EE=.01;function DE(e,t){let n=$T(e.id,e.vip,t),r=tE(n,e.id,e.look,e.vip),i=xg(n.geometry,r,n.girth);i.group.traverse(e=>{e.castShadow=!1});let a=hE(e.wants,e.wantsDrink,e.wantsFries,e.wantsSalgam),o=xE();i.group.add(a,o.group);let s=eE(e.look,e.vip),{x:c,z:l}=e.pos;return i.group.scale.setScalar(s),i.group.position.set(c,0,l),{figure:i,motion:Sg(c,l),order:a,patience:o,food:null,hold:0,served:0,seenAt:0,scale:s,sit:0,eat:0,seatX:c,seatZ:l,slump:0}}function OE(e){let t=new Ha,n=ox(e.wants);if(n.position.copy(SE),n.rotation.z=-Math.PI/2,t.add(n),e.drink){let n=sx(e.wantsSalgam);n.position.set(-SE.x,SE.y-.04,SE.z),t.add(n)}if(e.fries){let e=cx();e.position.set(0,SE.y-.03,SE.z+.05),t.add(e)}return t}function kE(e){let{height:t,each:n,count:r}=J.hop;if(e>=n*r)return 0;let i=1-Math.floor(e/n)/r;return Math.abs(Math.sin(e/n*Math.PI))*t*i}function AE(e,t,n){return e+(t-e)*n}function jE(e,t,n,r,i,a){let{figure:o,motion:s}=e;e.sit=Mh(e.sit,n===void 0?0:1,K.seat.settle,a),e.eat=Mh(e.eat,+(n?.eating===!0),K.seat.settle,a),n!==void 0&&(e.seatX=n.x,e.seatZ=n.z);let c=(TE*e.scale-K.seat.top)*e.sit;o.group.position.set(AE(t.pos.x,e.seatX,e.sit),r-c,AE(t.pos.z,e.seatZ,e.sit));let l=t.phase===`queue`&&!s.moving&&n===void 0,u=n===void 0?s.moving?s.heading:0:n.facing,d=l?PT(t.slot,i):0;o.group.rotation.y=Nh(o.group.rotation.y,u+d,K.turnRate,a)}function ME(e,t,n,i,a){let{figure:o,motion:s}=e,c=t.phase===`leaving`,l=e.sit>EE;e.slump=Mh(e.slump,+!!n,K.queueLife.slumpRate,a),l?RT(o,e.sit,e.eat,i):c||FT(o,t.slot,1-s.walk,i),c||IT(o,t.waited/r.queue.patience,l,i),e.slump>EE&&LT(o,e.slump,i)}function NE(e,t,n,i,a,o){let{figure:s,motion:c}=e,l=t.phase===`leaving`,u=i+t.id*wE;wg(c,t.pos.x,t.pos.z,a);let d=l&&!t.unserved;d&&(e.served+=a,e.food===null&&(e.food=OE(t),s.body.add(e.food))),jE(e,t,o?.seats.get(t.id),kE(d?e.served:1/0),u,a),e.hold=Mh(e.hold,+!!d,J.holdRate,a),Eg(s,c,CE,e.hold,i,t.id*wE),ME(e,t,l&&t.unserved&&o?.fed.has(t.id)!==!0,u,a);let f=t.slot<K.order.shownSlots;e.order.visible=!l&&f&&(n||t.wantsDrink||t.wantsFries);let p=!l&&t.waited>=K.patience.showAfter;e.patience.set(p?1-t.waited/r.queue.patience:null,e.order.visible)}var PE=32,FE=.02,IE=new hc(.34,14).rotateX(-Math.PI/2),LE=new ws({color:0,transparent:!0,opacity:.2,depthWrite:!1});function RE(e){let t=new Js(IE,LE,PE);return t.frustumCulled=!1,t.count=0,t.renderOrder=-1,e.add(t),t}function zE(e){let t=new Map,n=RE(e),r=new Va,i=0,a=(n,r)=>{n.seenAt!==i&&(e.remove(n.figure.group),t.delete(r))};return{update(o,s,c,l,u=0,d=null){i+=1;for(let a=0;a<o.length;a+=1){let f=o[a];if(f===void 0)continue;let p=t.get(f.id);p===void 0&&(p=DE(f,u),t.set(f.id,p),e.add(p.figure.group)),p.seenAt=i,NE(p,f,s,c,l,d),a<PE&&(r.position.set(p.figure.group.position.x,FE,p.figure.group.position.z),r.updateMatrix(),n.setMatrixAt(a,r.matrix))}n.count=Math.min(o.length,PE),n.instanceMatrix.needsUpdate=!0,t.forEach(a)},handPoint(e){let n=t.get(e);return n===void 0?null:n.figure.group.localToWorld(SE.clone())}}}var{flier:BE}=K;function VE(e){return e.player.carry+e.player.chicken+e.player.drinks+e.player.fries}function HE(e){return VE(e)-e.player.fries}function UE(e){return e===`drink`?sx():e===`fries`?cx():ox(e)}function WE(e,t){return t===`drink`?e.counterDrinks:t===`fries`?e.counterFries:at(e,t)}function GE(e,t,n,r){let i=t.kind===`meat`?n.player.carry-1:n.player.carry+n.player.chicken-1,a=e.spits[t.kind].slicePoint.clone();r(()=>ox(t.kind),BE.slice,a,()=>e.chef.trayPoint(i));let{pos:o,facing:s}=n.player,{trayReach:c,trayHeight:l}=K.shave;e.spits[t.kind].shudder(),e.shavings.launch(t.kind,a.x,a.y,a.z,o.x+Math.sin(s)*c,l,o.z+Math.cos(s)*c)}function KE(e,t,n,r){let{item:i}=t,a=e.chef.trayPoint(VE(n)),o=e.stock.point(i,WE(n,i)-1);r(()=>UE(i),BE.deposit,a,()=>o)}function qE(e,t,n,r){let i=Ce(0,n.customers.find(e=>e.id===t.customerId)?.lane??0),a=new V(i.x,BE.handHeight,i.z),o=()=>e.customers.handPoint(t.customerId)??a,s=t=>r(()=>UE(t),BE.serve,e.stock.point(t,WE(n,t)),o);if(t.withDrink){let i=e.stock.point(`drink`,n.counterDrinks);r(()=>sx(t.salgam),BE.serve,i,o)}t.withFries&&s(`fries`),s(t.kind)}function JE(e,t,n,i){let{x:a,z:o}=r.courier.spot,s=new V(a,BE.handHeight,o),c=e.stock.point(t.kind,at(n,t.kind));i(()=>ox(t.kind),BE.serve,c,()=>e.courier.handPoint()??s)}var YE=new V(r.cashier.spot.x,BE.handHeight,r.cashier.spot.z);function XE(e,t){let n=e.coins.release(t.coinId);if(n===null)return;let r=t.by===`cashier`;e.fliers.launch({object:n,from:n.position.clone(),target:()=>r?YE:e.chef.bodyPoint(),duration:BE.collect,arc:BE.arc/2,shrink:!0})}function ZE(e,t,n){e.pads.celebrate(t.padId);let r=n.pads.find(e=>e.id===t.padId);r!==void 0&&s.includes(t.padId)&&e.particles.burst(new V(r.pos.x,K.burst.padHeight,r.pos.z),K.burst.small)}function QE(e){let t=(t,n,r,i)=>e.fliers.launch({object:t(),from:r,target:i,duration:n,arc:BE.arc});return(n,i)=>{switch(n.type){case`slice`:GE(e,n,i,t);return;case`drink`:t(sx,BE.slice,e.fridge.pickPoint.clone(),()=>e.chef.trayPoint(HE(i)-1));return;case`fries`:t(cx,BE.slice,e.fryer.pickPoint.clone(),()=>e.chef.trayPoint(VE(i)-1));return;case`courierTook`:JE(e,n,i,t);return;case`courierPaid`:{let{x:t,z:n}=r.courier.spot;e.particles.burst(new V(t,K.burst.padHeight,n),K.burst.small);return}case`deposit`:KE(e,n,i,t);return;case`serve`:qE(e,n,i,t);return;case`collect`:XE(e,n);return;case`upgrade`:ZE(e,n,i);return;case`missionDone`:case`branchOpened`:case`boostStarted`:e.particles.burst(e.chef.bodyPoint(),K.burst.big);return;case`spitMounted`:e.particles.burst(e.spits[n.kind].slicePoint.clone(),K.burst.small);return;case`waiterTook`:t(()=>ox(n.kind),BE.serve,e.stock.point(n.kind,at(i,n.kind)),()=>e.tables.trayPoint());return;case`plateServed`:{let t=r.tables.spots[n.table]??r.tables.spots[0];e.particles.burst(new V(t.x,K.burst.padHeight+1,t.z),K.burst.small);return}case`tableCleared`:case`rushStarted`:return;case`cratePicked`:e.van.call();return;case`supplied`:{let{x:t,z:n}=r.counter.pos;e.particles.burst(new V(t,K.burst.padHeight+1,n),K.burst.small);return}case`courierArrived`:case`walkedOut`:case`spitEmpty`:case`spitPicked`:case`pay`:return}}}function $E(e){let t=[],n=e=>{let t=Math.min(e.elapsed/e.duration,1);e.object.position.lerpVectors(e.from,e.target(),t),e.object.position.y+=e.arc*4*t*(1-t),e.shrink===!0&&e.object.scale.setScalar(1-t*.7)};return{launch(r){e.add(r.object);let i={...r,elapsed:0};n(i),t=[...t,i]},update(r){let i=t.map(e=>({...e,elapsed:e.elapsed+r}));i.forEach(n),i.filter(e=>e.elapsed>=e.duration).forEach(t=>e.remove(t.object)),t=i.filter(e=>e.elapsed<e.duration)}}}var{width:eD,depth:tD,height:nD}=Z.fridge,rD=.22,iD=.25,aD={height:nD-rD-iD,middle:rD+(nD-rD-iD)/2},oD=tD/2,sD=[rD,.585,.95],cD=[-.36,-.12,.12,.36],lD=[.2,-.03],uD=10;function dD(){return[hy(eD,rD,tD,q.fridge,0,rD/2,0,`plain`,.04),...[.07,.11,.15].map(e=>Q(.86,.014,.012,Z.iron,0,e,oD+.004)),hy(eD,iD,tD,q.fridge,0,nD-iD/2,0,`plain`,.05),Q(.9,.15,.012,q.fridgeDoor,0,nD-iD/2,oD+.004),$(.045,.034,.09,q.cup,0,nD-iD/2-.01,oD+.03,`plain`,12),$(.043,.05,.022,q.cupLid,0,nD-iD/2+.045,oD+.03,`plain`,12),Q(eD,aD.height,.05,q.fridge,0,aD.middle,-oD+.025),Q(.06,aD.height,tD,q.fridge,-eD/2+.03,aD.middle,0),Q(.06,aD.height,tD,q.fridge,eD/2-.03,aD.middle,0),Q(.98,aD.height,.01,Z.steelLight,0,aD.middle,-oD+.055),hy(.42,.18,.3,Z.crate,-.22,nD+.09,-.12,`wood`,.02)]}function fD(){let e=sD.slice(1).map(e=>Q(.98,.02,.66,Z.steelLight,0,e-.01,-.01,`steel`)),t=sD.flatMap(e=>lD.flatMap(t=>cD.flatMap(n=>[$(.085,.068,.16,q.cup,n,e+.08,t,`plain`,uD),$(.078,.091,.03,q.cupLid,n,e+.175,t,`plain`,uD)])));return[...e,...t]}function pD(){let e=oD+.005;return[Q(.05,aD.height,.03,Z.steelLight,-.5,aD.middle,e,`steel`),Q(.05,aD.height,.03,Z.steelLight,.5,aD.middle,e,`steel`),Q(1,.04,.03,Z.steelLight,0,.24,e,`steel`),Q(1,.04,.03,Z.steelLight,0,nD-iD-.02,e,`steel`),$(.02,.02,.5,q.steelDark,.42,aD.middle,e+.05,`steel`,6),gy(.014,.05,q.steelDark,.42,aD.middle+.2,e+.03,6),gy(.014,.05,q.steelDark,.42,aD.middle-.2,e+.03,6)]}function mD(e){let t=new Ha,{x:n,z:i}=r.fridge.pos,a=My(r.fridge.radius),o=new Is(new pc(.95,aD.height-.08,.012),Ay());o.position.set(0,aD.middle,oD+.005),t.add(jy([...dD(),...fD(),...pD()]),o,a);let s=kS(oD);t.position.set(s,0,i),t.rotation.y=Z.rowTurn,a.position.z=n-s,t.visible=!1,e.add(t);let c=0;return{pickPoint:new V(s+oD+.05,aD.middle+.25,i),update(e,n){c=e?c+n:0,t.visible=e,t.scale.setScalar(Fh(c/(K.popIn.duration*2)))}}}var hD=Z.fryer.top,gD=.36,_D={x:-.2,z:.02,size:.5},vD={size:.44,height:.13,wire:.008};function yD(){return[...[-1,1].flatMap(e=>[-1,1].map(t=>$(.035,.035,.08,Z.black,e*.42,.04,t*.28,`plain`,6))),hy(1,hD-.08,.72,q.steel,0,(hD+.08)/2,0,`steel`,.04),Q(.96,.06,.012,Z.knob,0,.2,.364),Q(.84,.16,.014,Z.iron,0,.72,.365),gy(.045,.05,Z.knob,-.26,.72,.39),gy(.045,.05,Z.knob,-.06,.72,.39),vy(.022,Z.pilot,.18,.72,.374,1,6),vy(.022,q.tomato,.28,.72,.374,1,6),Q(.012,.34,.01,q.steelDark,0,.44,.363),Q(.035,.12,.03,q.steelDark,-.06,.48,.372),Q(.035,.12,.03,q.steelDark,.06,.48,.372),gy(.02,.06,q.steelDark,-.38,.3,.39,6),Q(1,.36,.04,q.steel,0,hD+.18,-.34,`steel`),Q(1,.03,.12,q.steelDark,0,hD+.37,-.31,`steel`)]}function bD(){let e=_D.size/2+.015,t=hD+.015;return[Q(_D.size,.012,_D.size,Z.oil,_D.x,hD+.006,_D.z),Q(_D.size+.06,.03,.03,Z.steelLight,_D.x,t,_D.z-e,`steel`),Q(_D.size+.06,.03,.03,Z.steelLight,_D.x,t,_D.z+e,`steel`),Q(.03,.03,_D.size,Z.steelLight,_D.x-e,t,_D.z,`steel`),Q(.03,.03,_D.size,Z.steelLight,_D.x+e,t,_D.z,`steel`),Q(.32,.02,.5,q.steelDark,.31,hD+.01,_D.z,`steel`),...[0,1,2].map(e=>hy(.11,.12,.06,e===1?q.paper:Z.carton,.25,hD+.08,.2-e*.065,`plain`,.01)),$(.035,.035,.1,q.paper,.39,hD+.07,-.12,`plain`,8),$(.037,.037,.025,q.steelDark,.39,hD+.13,-.12,`steel`,8)]}function xD(){let e=vD.size/2,{height:t,wire:n}=vD,r=[-.11,0,.11];return[Q(vD.size-.02,.01,vD.size-.02,Z.iron,0,.005,0),...[-e,e].flatMap(i=>[Q(vD.size,.016,.016,q.steelDark,0,t,i),Q(.016,.016,vD.size,q.steelDark,i,t,0),Q(vD.size,n,n,Z.iron,0,t/2,i),Q(n,n,vD.size,Z.iron,i,t/2,0),...r.map(e=>Q(n,t,n,Z.iron,e,t/2,i)),...r.map(e=>Q(n,t,n,Z.iron,i,t/2,e)),...[-e,e].map(e=>Q(.016,t,.016,q.steelDark,i,t/2,e))]),Cy([0,t,e],[0,t+.07,e+.3],.02,q.steelDark),Cy([0,t+.07,e+.3],[0,t+.08,e+.44],.035,Z.black)]}function SD(){let e=Fv(41);return wy(Array.from({length:9},(t,n)=>my(new pc(.02,.02,.1).rotateX(Iv(e,-.5,.5)).rotateY(e()*Math.PI).translate(Iv(e,-.04,.04),Iv(e,.02,.07),Iv(e,-.035,.035)),n%3==0?Z.friesDark:Z.fries)))}function CD(e){let t=new Js(SD(),Ey(),e);t.frustumCulled=!1;let n=Math.ceil(e/2),r=Array.from({length:e},(e,t)=>({position:new V(t%2==0?-.1:.1,.012,(Math.floor(t/2)-(n-1)/2)*(.36/n)),turn:new Gi().setFromAxisAngle(new V(0,1,0),t*1.3)})),i=r.map(()=>0),a=new ma,o=new V,s=!0;return{mesh:t,update(e,n){r.forEach((r,c)=>{let l=i[c]??0,u=c<e?Math.min(l+n,K.popIn.duration):0;(u!==l||s)&&(i[c]=u,a.compose(r.position,r.turn,o.setScalar(Fh(u/K.popIn.duration))),t.setMatrixAt(c,a),t.instanceMatrix.needsUpdate=!0)}),s=!1}}}function wD(e){let t=new Ha,{x:n,z:i}=r.fryer.pos,a=CD(r.fryer.batch),o=new Ha;o.add(jy(xD(),!1),a.mesh),o.position.set(_D.x,hD,_D.z);let s=My(r.fryer.radius);t.add(jy([...yD(),...bD()]),o,s);let c=kS(gD);t.position.set(c,0,i),t.rotation.y=Z.rowTurn,s.position.z=n-c,t.visible=!1,e.add(t);let l=0,u=0,d=0;return{pickPoint:new V(c+_D.z,hD+.3,i-_D.x),update(e,n,i){if(l=e?l+i:0,t.visible=e,!e)return;t.scale.setScalar(Fh(l/(K.popIn.duration*2)));let s=n>=r.fryer.batch;d+=i,u=Mh(u,s?Z.fryer.basketLift:0,6,i);let c=s?0:Math.sin(d*Z.fryer.bobRate)*Z.fryer.bob;o.position.y=hD+u+c,a.update(n,i)}}}var TD={perSource:7,every:.34,life:2.4,ring:[.2,.45],height:[.45,.9],rise:[.24,.4],drift:.05,size:[.26,.7],colour:16777215,strength:1,additive:!1},ED={perSource:8,every:.18,life:1,ring:[.32,.5],height:[-.55,.45],rise:[.35,.7],drift:.16,size:[.08,.03],colour:16756800,strength:1,additive:!0},DD=8,OD=0,kD=1,AD=2,jD=5,MD=new Fl(1,1),ND=new Va,PD=new V,FD=new U;function ID(e,t){return e+(t-e)*Math.random()}function LD(e){let t=new ws({map:Cv(),transparent:!0,depthWrite:!1,fog:!1,toneMapped:!1});return e.additive?t.blending=2:(t.blending=5,t.blendEquation=100,t.blendSrc=201,t.blendDst=203),t}function RD(e,t,n){let r=t.perSource*n,i=new Js(MD,LD(t),r);i.castShadow=!1,i.receiveShadow=!1,i.frustumCulled=!1,i.visible=!1,i.renderOrder=2,e.add(i);let a=new U(t.colour),o=new Float32Array(r*DD),s=new Float32Array(n);ND.scale.setScalar(0),ND.updateMatrix();for(let e=0;e<r;e+=1)o[e*DD+kD]=-1,i.setMatrixAt(e,ND.matrix),i.setColorAt(e,FD.setScalar(0));let c=(e,n)=>{let r=e*DD;n.getWorldPosition(PD);let i=Math.random()*Math.PI*2,a=ID(t.ring[0],t.ring[1]);o[r+OD]=0,o[r+kD]=t.life*ID(.75,1),o[r+AD]=PD.x+Math.sin(i)*a,o[r+AD+1]=PD.y+ID(t.height[0],t.height[1]),o[r+AD+2]=PD.z+Math.cos(i)*a,o[r+jD]=ID(-t.drift,t.drift),o[r+jD+1]=ID(t.rise[0],t.rise[1]),o[r+jD+2]=ID(-t.drift,t.drift)},l=(e,n,r)=>{if(s[e]=(s[e]??0)-r,(s[e]??0)>0)return;s[e]=t.every*ID(.6,1.4);let i=e*t.perSource;for(let e=i;e<i+t.perSource;e+=1)if(!((o[e*DD+kD]??-1)>=0)){c(e,n.heatAnchor);return}},u=(e,n,r)=>{let s=e*DD,c=o[s+kD]??-1,l=(o[s+OD]??0)+r;o[s+OD]=l;let u=l>=c;u&&(o[s+kD]=-1);let d=u?1:l/c;for(let e=0;e<3;e+=1)o[s+AD+e]=(o[s+AD+e]??0)+(o[s+jD+e]??0)*r;ND.position.set(o[s+AD]??0,o[s+AD+1]??0,o[s+AD+2]??0),ND.quaternion.copy(n.quaternion),ND.scale.setScalar(u?0:t.size[0]+(t.size[1]-t.size[0])*d),ND.updateMatrix(),i.setMatrixAt(e,ND.matrix);let f=Math.min(d*6,1)*(1-d)*t.strength;i.setColorAt(e,FD.copy(a).multiplyScalar(f))};return{update(e,t,n){for(let t=0;t<e.length;t+=1){let r=e[t];r!==void 0&&r.group.visible&&r.cooking()&&l(t,r,n)}let a=!1;for(let e=0;e<r;e+=1)(o[e*DD+kD]??-1)<0||(u(e,t,n),a=!0);i.visible=a,a&&(i.instanceMatrix.needsUpdate=!0,i.instanceColor!==null&&(i.instanceColor.needsUpdate=!0))}}}function zD(e,t){let n=RD(e,TD,t.length),r=RD(e,ED,t.length);return{update(e,i){n.update(t,e,i),r.update(t,e,i)}}}var BD=.85,VD=5e-4,HD=r.spit.pos,UD={...r.bounds,minX:HD.x+r.spit.obstacleRadius};function WD(e){let t=xx({coat:q.helperCoat,scale:BD,role:`apprentice`});t.group.visible=!1,e.add(t.group);let n=Ox(UD),r=0,i=0,a=0;return{spot:n.spot,update(e,o,s,c){if(t.group.visible=e!==null,e===null)return;let l=e.pos.x-r,u=e.pos.z-i,d=Math.hypot(l,u)>VD;d&&(a=Math.atan2(l,u)),r=e.pos.x,i=e.pos.z,n.update(e.pos,o,c);let f=e.phase===`cutting`&&!d;f&&(a=Math.atan2(HD.x-n.spot.x,HD.z-n.spot.z));let p=e.phase===`carryingSpit`?`meat`:null,{carry:m}=e;t.update({pos:n.spot,facing:a,carry:m,chicken:0,drinks:0,fries:0,moving:d,carryingSpit:p,working:f},s,c)}}}var GD=[{size:0x38d7ea4c68000,suffix:`Q`},{size:0xe8d4a51000,suffix:`T`},{size:1e9,suffix:`B`},{size:1e6,suffix:`M`},{size:1e3,suffix:`k`}],KD=1e4;function qD(e){let t=Math.floor(e);if(t<KD)return String(t);let n=GD.find(e=>t>=e.size)??GD[GD.length-1],r=t/n.size;return`${r>=100?Math.floor(r):Math.floor(r*10)/10}${n.suffix}`}var JD=256,YD=JD/2,XD=256,ZD={left:40,top:40,side:176,radius:26},QD={y:106,size:164},$D=236,eO={y:205,size:178},tO={size:46,maxWidth:128,coin:.95,gap:.06},nO={carry:`carry`,slice:`fire`,price:`price`,helper:`helper`,fridge:`ayran`,window:`window`,chicken:`chicken`,counter:`counter`,fryer:`fries`,cashier:`cashier`,tables:`tables`,branch:`shop`};function rO(e,t,n,r=0){if(e.clearRect(0,0,JD,JD),n===``){Av(e,YD,YD,1,()=>dT(e,nO[t],$D));return}let i=n===`MAX`;Av(e,YD,YD,1,()=>dT(e,i?`pad-done`:`pad`,XD)),i||iO(e,r),Av(e,YD,QD.y,1,()=>dT(e,nO[t],QD.size)),Av(e,YD,eO.y,1,()=>dT(e,`plaque`,eO.size)),oO(e,n)}function iO(e,t){let n=Math.min(Math.max(t,0),1);if(n===0)return;let r=ZD.side*n,i=ZD.top+ZD.side-r,a=e.createLinearGradient(0,i,0,ZD.top+ZD.side);a.addColorStop(0,`rgba(255, 240, 168, 0.95)`),a.addColorStop(.12,`rgba(255, 201, 60, 0.85)`),a.addColorStop(1,`rgba(255, 138, 47, 0.8)`),e.save(),Mv(e,ZD.left,ZD.top,ZD.side,ZD.side,ZD.radius),e.clip(),e.fillStyle=a,e.fillRect(ZD.left,i,ZD.side,r),e.restore()}function aO(e,t){e.font=`900 ${t}px ${kv}`,e.textAlign=`left`,e.textBaseline=`middle`}function oO(e,t){let n=t!==`MAX`,r=n?tO.coin+tO.gap:0;aO(e,tO.size);let i=e.measureText(t).width+r*tO.size,a=Math.floor(tO.size*Math.min(1,tO.maxWidth/i));aO(e,a);let o=YD-(e.measureText(t).width+r*a)/2;n&&Av(e,o+tO.coin*a/2,eO.y,1,()=>dT(e,`coin`,tO.coin*a));let s=n?Tv:Nv(e,eO.y,a);Pv(e,t,o+r*a,eO.y+a*.04,a,s)}var sO=r.pads.radius*1.9,cO=sO*.84,lO=.12,uO=256,dO=9062930;function fO(e){let t=new Ha,n=Lv(uO,uO),r=Rv(n),i=jh(new ch(cO,lO,cO,2,.05),Ah(dO),0,lO/2,0);i.castShadow=!1;let a=new Is(new Fl(sO,sO).rotateX(-Math.PI/2),new ws({map:r,transparent:!0,depthWrite:!1}));return a.position.y=.132,t.add(i,a),t.position.set(e.x,0,e.z),{group:t,context:n,texture:r,labelKey:``,labelAge:pO,bounce:0}}var pO=.12;function mO(e,t,n,r,i){e.labelAge+=i;let a=`${t}|${n}`;e.labelKey===a||e.labelAge<pO||(e.labelKey=a,e.labelAge=0,rO(e.context,t,n,r),e.texture.needsUpdate=!0)}function hO(e,t){e.bounce=Mh(e.bounce,0,7,t),e.group.position.y=e.bounce*.35,e.group.scale.setScalar(1+e.bounce*.18)}function gO(e,t){let n=new Map(t.map(e=>[e.id,fO(e.pos)]));return e.add(...Array.from(n.values(),e=>e.group)),{update(e,t){let{branch:i}=e;e.pads.forEach(a=>{let o=n.get(a.id);if(o===void 0)return;let c=Se(a,i),l=c!==null||r.pads.defs[a.id].costs.length>1;o.group.visible=l&&!he(e,a.id)&&s.includes(a.id),mO(o,a.id,c===null?`MAX`:qD(c-a.paid),c===null?1:a.paid/c,t),hO(o,t)})},celebrate(e){let t=n.get(e);t!==void 0&&(t.bounce=1)}}}var _O=new pc(.11,.11,.03),{burst:vO}=K;function yO(e){let t=new Js(_O,Ah(16777215),vO.poolSize);t.castShadow=!1,t.receiveShadow=!1,t.frustumCulled=!1;let n=new U,r=Array.from({length:vO.poolSize},(e,r)=>(t.setColorAt(r,n.set(q.confetti[r%q.confetti.length]??16777215)),{position:new V,velocity:new V,spin:new V,life:0})),i=new Va,a=!1;e.add(t);let o=()=>{r.forEach((e,n)=>{let r=e.life>0&&e.position.y>0;i.position.copy(e.position),i.rotation.set(e.spin.x,e.spin.y,e.spin.z),i.scale.setScalar(r?Math.min(e.life/vO.life*2,1):0),i.updateMatrix(),t.setMatrixAt(n,i.matrix)}),t.instanceMatrix.needsUpdate=!0};o(),t.visible=!1;let s=(e,t)=>{let n=Math.random()*Math.PI*2,r=vO.speed*(.4+Math.random()*.6);e.life=vO.life*(.7+Math.random()*.3),e.velocity.set(Math.cos(n)*r,vO.lift*(.6+Math.random()*.4),Math.sin(n)*r),e.position.copy(t),e.spin.set(Math.random()*3,Math.random()*3,Math.random()*3)};return{burst(e,n){r.filter(e=>e.life<=0).slice(0,n).forEach(t=>s(t,e)),a=!0,t.visible=!0},update(e){a&&(r.forEach(t=>{t.life<=0||(t.life-=e,t.velocity.y-=vO.gravity*e,t.position.addScaledVector(t.velocity,e),t.spin.x+=e*9,t.spin.z+=e*7)}),o(),a=r.some(e=>e.life>0),t.visible=a)}}}var{popup:bO}=K;function xO(e){let t=Lv(256,128);return t.font=`900 84px ${kv}`,t.textAlign=`center`,t.textBaseline=`middle`,Pv(t,e,128,62,84,Nv(t,62,84)),Rv(t)}function SO(e){let t=new rs({transparent:!0,depthTest:!1,depthWrite:!1}),n=new _s(t);return n.scale.set(bO.width,bO.height,1),n.visible=!1,e.add(n),{sprite:n,material:t,age:bO.life}}function CO(e){let t=Array.from({length:bO.poolSize},()=>SO(e)),n=new Map,r=()=>{let e=new Set(t.filter(e=>e.sprite.visible).map(e=>e.material.map));n.forEach((t,r)=>{e.has(t)||(t.dispose(),n.delete(r))})},i=e=>{let t=n.get(e);if(t!==void 0)return t;n.size>=bO.cacheSize&&r();let i=xO(e);return n.set(e,i),i};return{show(e,n){let r=t.reduce((e,t)=>t.age>e.age?t:e);r.material.map=i(e),r.material.opacity=1,r.age=0,r.sprite.position.set(n.x,bO.startY,n.z),r.sprite.visible=!0},update(e){t.forEach(t=>{if(!t.sprite.visible)return;t.age+=e;let n=Math.min(t.age/bO.life,1);t.sprite.position.y=bO.startY+bO.rise*n,t.material.opacity=1-n*n,t.sprite.visible=n<1})}}}var wO=K.shave,TO=10,EO=0,DO=1,OO=2,kO=5,AO=8,jO=9,MO=new pc(.17,.014,.06),NO={meat:[new U(q.meat),new U(q.meatDark)],chicken:[new U(q.chicken),new U(q.chickenDark)]};function PO(){return(Math.random()-.5)*2*wO.scatter}function FO(e){let t=new Js(MO,Ah(16777215),wO.poolSize);t.castShadow=!1,t.frustumCulled=!1,t.visible=!1,e.add(t);let n=new Float32Array(wO.poolSize*TO),r=new Va,i=e=>{r.scale.setScalar(0),r.updateMatrix(),t.setMatrixAt(e,r.matrix)};for(let e=0;e<wO.poolSize;e+=1)n[e*TO+DO]=-1,t.setColorAt(e,NO.meat[0]),i(e);let a=0,o=(e,i,a)=>{let o=e*TO,s=i/a,c=(n[o+AO]??0)*4*s*(1-s),l=n[o+OO]??0,u=n[o+OO+1]??0,d=n[o+OO+2]??0;r.position.set(l+((n[o+kO]??0)-l)*s,u+((n[o+kO+1]??0)-u)*s+c,d+((n[o+kO+2]??0)-d)*s);let f=(n[o+jO]??0)+s*wO.spin;r.rotation.set(f,f*.6,f*.35),r.scale.setScalar(s<.75?1:(1-s)*4),r.updateMatrix(),t.setMatrixAt(e,r.matrix)};return{launch(e,r,o,s,c,l,u){for(let d=0;d<wO.perSlice;d+=1){let f=a,p=f*TO;a=(a+1)%wO.poolSize,n[p+EO]=-d*wO.stagger,n[p+DO]=wO.duration,n[p+OO]=r,n[p+OO+1]=o+PO(),n[p+OO+2]=s+PO(),n[p+kO]=c+PO(),n[p+kO+1]=l,n[p+kO+2]=u+PO(),n[p+AO]=wO.arc+PO(),n[p+jO]=Math.random()*6,t.setColorAt(f,NO[e][d%2==0?0:1]),i(f)}t.instanceColor!==null&&(t.instanceColor.needsUpdate=!0)},update(e){let r=0;for(let t=0;t<wO.poolSize;t+=1){let a=t*TO,s=n[a+DO]??-1;if(s<0)continue;let c=(n[a+EO]??0)+e;n[a+EO]=c,r+=1,c>=s?(n[a+DO]=-1,i(t)):c>=0&&o(t,c,s)}r>0&&(t.instanceMatrix.needsUpdate=!0),t.visible=r>0}}}var IO=e=>({pitch:Wi.degToRad(K.camera[e].pitchDeg),yaw:Wi.degToRad(K.camera[e].yawDeg)});function LO(e,t){let n=Math.cos(e.pitch);return t.set(Math.sin(e.yaw)*n,Math.sin(e.pitch),Math.cos(e.yaw)*n)}function RO(e){let t=j,n={wide:K.maxDistance,close:K.maxDistance,side:K.maxDistance},r=new V(K.focus.x,0,K.focus.z),i=r.clone(),a=new V,o=new V,s=new V,c=new V,l=new V,u=null,d=!1,f=t=>{LO(t,c);let n=t=>(e.position.copy(r).addScaledVector(c,t),e.lookAt(r),e.updateProjectionMatrix(),e.updateMatrixWorld(),K.frame.every(t=>(l.set(t.x,t.y,t.z).project(e),Math.abs(l.x)<=K.frameLimit&&Math.abs(l.y)<=K.frameLimit))),i=K.minDistance,a=K.maxDistance;for(let e=0;e<K.fitIterations;e+=1){let e=(i+a)/2;n(e)?a=e:i=e}return a},p=e=>{t===`close`&&e!==null?o.set(e.x*K.camera.close.followX,0,e.z):o.copy(r),s.copy(o).addScaledVector(LO(IO(t),c),n[t])},m=()=>{e.position.copy(a),e.lookAt(i)};return{mode:()=>t,setMode(e){t=e},yaw:()=>Math.atan2(a.x-i.x,a.z-i.z),refit(){let e=f(IO(`wide`));n={wide:e,close:e*K.camera.close.share,side:f(IO(`side`))},p(u),i.copy(o),a.copy(s),m()},pin(t){d=t!==null,t!==null&&(e.position.set(...t.eye),e.lookAt(...t.look))},update(e,t){if(u=e,d)return;p(e);let n=K.camera.ease;i.set(Mh(i.x,o.x,n,t),0,Mh(i.z,o.z,n,t)),a.set(Mh(a.x,s.x,n,t),Mh(a.y,s.y,n,t),Mh(a.z,s.z,n,t)),m()}}}var zO=(e,t,n)=>e+(t-e)*n;function BO(e,t){let n=t[0],r=t[t.length-1];if(n===void 0||r===void 0)throw Error(`The day needs at least one light key`);let i=t.findIndex(t=>t.at>e),a=i===-1?n:t[i]??n,o=i===-1?r:t[i-1]??r,s=i===0?o.at-1:o.at,c=i===-1?1+a.at:a.at,l=Math.min(Math.max((e-s)/Math.max(c-s,1e-6),0),1);return{from:o,to:a,mix:l,strength:zO(o.strength,a.strength,l),sky:zO(o.sky,a.sky,l),lamps:zO(o.lamps,a.lamps,l),night:zO(o.night,a.night,l)}}var VO=K.day.keys,HO=VO.map(e=>new U(e.sun)),UO=new U(dh.night.sky),WO=new U(dh.night.bounce),GO=new U(dh.night.backdrop);function KO(e,t,n){let r=e.intensity,i=t.intensity,a=t.color.clone(),o=t.groundColor.clone(),s=n[0]?.clone()??new U,c=Oy(),l=Ay(),u=l.color.clone(),d=-1,f=0;return{night:()=>f,set(p){let m=Math.floor(p*K.day.steps);if(m===d)return;d=m;let h=BO(m/K.day.steps,VO),g=HO[VO.indexOf(h.from)],_=HO[VO.indexOf(h.to)];g!==void 0&&_!==void 0&&(f=h.night,e.color.lerpColors(g,_,h.mix),e.intensity=r*h.strength,t.intensity=i*h.sky,t.color.lerpColors(a,UO,f),t.groundColor.lerpColors(o,WO,f),n.forEach(e=>e.lerpColors(s,GO,f)),c.color.setScalar(h.lamps),l.color.copy(u).multiplyScalar(1-dh.night.glassDim*f))}}}function qO(e){let t=JO(e),n=new Za,r=xh(q.ground);n.background=r;let i=dh.haze.enabled?new Xa(r,1,2):null;n.fog=i;let a=YO(n,i===null?[r]:[r,i.color]),o=new Pu(K.fovDeg,1,1,220),s=RO(o),c=()=>{let n=Math.max(e.clientWidth,1),r=Math.max(e.clientHeight,1);t.setPixelRatio(Math.min(window.devicePixelRatio,K.maxPixelRatio)),t.setSize(n,r,!1),o.aspect=n/r,s.refit(),i!==null&&ek(i,o)};return c(),{renderer:t,scene:n,camera:o,rig:{...s,update(e,t){s.update(e,t),i!==null&&ek(i,o)}},daylight:a,resize:c}}function JO(e){let t=new fm({canvas:e,antialias:!0,powerPreference:`high-performance`});return t.outputColorSpace=$r,t.toneMapping=0,t.shadowMap.enabled=!0,t.shadowMap.type=1,t}function YO(e,t){let n=XO().getCenter(new V),r=new Lu(dh.sun.color,gh.sun);r.position.copy(n).addScaledVector(ph,dh.sun.distance),r.target.position.copy(n),r.castShadow=!0,r.shadow.mapSize.set(K.shadowMapSize,K.shadowMapSize),r.shadow.bias=dh.shadow.bias,r.shadow.normalBias=dh.shadow.normalBias,r.shadow.radius=dh.shadow.radius,r.shadow.intensity=dh.shadow.strength,ZO(r);let i=new Lu(dh.fill.color,gh.fill);i.position.copy(n).addScaledVector(mh,dh.sun.distance),i.target.position.copy(n);let a=new Su(dh.sky.color,dh.sky.bounce,gh.sky);return e.add(a,r,r.target,i,i.target),KO(r,a,t)}function XO(){let{minX:e,maxX:t,minY:n,maxY:r,minZ:i,maxZ:a}=dh.shadow.volume;return new po(new V(e,n,i),new V(t,r,a))}function ZO(e){let t=e.shadow.camera;t.position.copy(e.position),t.lookAt(e.target.position),t.updateMatrixWorld();let{min:n,max:r}=XO(),i=new po,a=new V;for(let e of[n.x,r.x])for(let o of[n.y,r.y])for(let s of[n.z,r.z])i.expandByPoint(a.set(e,o,s).applyMatrix4(t.matrixWorldInverse));let o=dh.shadow.margin;t.left=i.min.x-o,t.right=i.max.x+o,t.bottom=i.min.y-o,t.top=i.max.y+o,t.near=Math.max(-i.max.z-o,.1),t.far=-i.min.z+o,t.updateProjectionMatrix()}var QO=new V,$O=new V;function ek(e,t){t.getWorldDirection($O);let n=e=>QO.set(K.focus.x,0,e).sub(t.position).dot($O),r=n(dh.haze.startZ),i=n(dh.haze.endZ);e.near=Math.max(Math.min(r,i),.1),e.far=Math.max(r,i,e.near+1)}var tk=13205566,nk=10116908,rk={width:.62,height:.26,depth:.42,wall:.04},ik=new pc(rk.width,rk.height,rk.wall),ak=new pc(rk.wall,rk.height,rk.depth),ok=new pc(rk.width,rk.wall,rk.depth),sk=new gc(.15,.15,.03,12),ck=new zl(.07,8,6);function lk(){let e=new Ha;return Array.from({length:5},(e,t)=>jh(sk,Ah(q.lavash),t%2*.015,rk.wall+.03*(t+.5),0)).forEach(t=>e.add(t)),e.position.x=-rk.width/4,e}function uk(){let e=new Ha,t={x:rk.width/2,y:rk.height/2,z:rk.depth/2};return e.add(jh(ok,Ah(nk),0,rk.wall/2,0),jh(ik,Ah(tk),0,t.y,t.z),jh(ik,Ah(tk),0,t.y,-t.z),jh(ak,Ah(tk),t.x,t.y,0),jh(ak,Ah(tk),-t.x,t.y,0),lk(),jh(ck,Ah(q.tomato),.12,.12,.08),jh(ck,Ah(q.tomato),.22,.12,-.06),jh(ck,Ah(q.pepper),.1,.12,-.09)),e.traverse(e=>{e.castShadow=!1}),e}var dk=128,{gauge:fk}=K;function pk(e){let t=Lv(dk,dk);Av(t,dk/2,dk/2,1,()=>dT(t,e,dk));let n=new _s(new rs({map:Rv(t),depthTest:!1}));n.scale.setScalar(fk.icon),n.position.y=fk.iconLift;let r=xE(),i=new Ha,a=new Ha;return a.position.y=-K.patience.y,a.add(r.group),i.add(n,a),{group:i,icon:n,bar:r}}function mk(e,t,n,r){e.bar.set(t/n.capacity,!1);let i=t<=n.orderAt;e.icon.scale.setScalar(fk.icon*(i?1+Math.sin(r*7)*fk.pulse:1))}function hk(e){let t=pk(`lavash`),n=pk(`garnish`);return e.add(t.group,n.group),{update(e,i,a,o){let s=r.counter.pos.x+NC(a)/2-fk.inset;t.group.position.set(s,EC+fk.height,r.counter.pos.z),n.group.position.set(s-fk.gap,EC+fk.height,r.counter.pos.z),mk(t,e,r.supply.lavash,o),mk(n,i,r.supply.garnish,o)}}}var gk=16052710,_k=3120277,vk=10474728,yk=2827296,bk=new pc(1.9,1.2,1.3),xk=new pc(.9,.95,1.25),Sk=new pc(.06,.42,1.05),Ck=new pc(1.9,.16,1.32),wk=new gc(.26,.26,.2,12).rotateX(Math.PI/2);function Tk(){let e=new Ha;return e.add(jh(bk,Ah(gk),-.35,.95,0),jh(Ck,Ah(_k),-.35,.7,0),jh(xk,Ah(_k),1.05,.82,0),jh(Sk,Ah(vk),1.5,.98,0),...[-.8,.95].flatMap(e=>[jh(wk,Ah(yk),e,.26,.6),jh(wk,Ah(yk),e,.26,-.6)])),e}function Ek(e){let{from:t,stop:n,to:r,speed:i,pause:a}=K.van,o=Tk();o.visible=!1,o.position.set(t,0,lS.z),e.add(o);let s=0;return{call(){o.visible||(o.visible=!0,o.position.x=t,s=0)},update(e){o.visible&&(o.position.x>=n&&s<a?s+=e:(o.position.x+=i*e,o.position.x>=r&&(o.visible=!1)))}}}var Dk=.76,Ok=K.seat,kk=r.tables.seatOffset;function Ak(e){let t=e.x<0?-1:1,n=Math.atan2(kk.x,kk.z)+Ok.swing*t,r=Math.sin(n),i=Math.cos(n);return{seat:{x:e.x+r*Ok.distance,z:e.z+i*Ok.distance,facing:Math.atan2(-r,-i),eating:!1},plate:{x:e.x+r*Ok.plate,z:e.z+i*Ok.plate}}}function jk(e,t){let n=.05,r=Ok.top-n;return[$(.17,.2,r,Z.woodLight,e,r/2,t,`wood`,10),$(.2,.2,n,Z.cushion,e,Ok.top-n/2,t,`plain`,10)]}var Mk=[[.12,0],[.2,.028],[.19,.034],[.13,.014],[0,.014]],Nk=14,Pk=10,Fk=[[.03,0],[.06,.008],[.062,.012],[0,.012]],Ik=[[.022,.012],[.03,.03],[.022,.052],[.033,.084],[0,.084]],Lk=new pc(1,1,1),{lump:Rk,mound:zk,slice:Bk}=Ab;function Vk(){return[Nb(Mk,Nk,q.plate)]}function Hk(e,t,n){return[X(Rk,Wh(e,.86),{x:t-.04,y:n,z:-.025,sx:.075,sy:.02,sz:.058,rz:.2}),X(Rk,e,{x:t,y:n+.01,z:.005,sx:.078,sy:.02,sz:.06,rz:.12,ry:.5}),X(Rk,Wh(e,1.1),{x:t+.035,y:n+.02,z:.03,sx:.07,sy:.018,sz:.052,ry:-.4})]}function Uk(e){return[...Hk(e,-.045,.036),X(zk,q.rice,{x:.09,y:.03,z:-.045,sx:.075,sy:.05,sz:.075}),X(Bk,q.tomato,{x:.07,y:.026,z:.09,sx:.036,sy:.012,sz:.036}),X(Bk,q.tomato,{x:.112,y:.034,z:.06,sx:.034,sy:.012,sz:.034,rz:.35}),X(Rk,q.pepper,{x:-.035,y:.03,z:.125,sx:.06,sy:.014,sz:.017,ry:.4})]}function Wk(e){return[X(zh(.15,.15,.02,12),q.lavash,{y:.026}),...Hk(e,-.02,.046),X(Rk,jb.sauce,{x:-.02,y:.074,sx:.085,sy:.014,sz:.068}),X(Lk,jb.butter,{x:-.03,y:.09,z:.005,sx:.032,sy:.016,sz:.032,ry:.5}),X(zk,q.yoghurt,{x:.115,y:.04,z:.05,sx:.055,sy:.04,sz:.055})]}function Gk(){let e=.27,t=.06;return[Nb(Fk,Pk,q.plate,{x:e,z:t}),Nb(Ik,Pk,q.tea,{x:e,z:t}),X(Mb(.035,.034,.008,Pk),q.plate,{x:e,y:.084,z:t}),X(Lk,jb.sugar,{x:.312,y:.018,z:.072,sx:.014,sy:.012,sz:.014,ry:.4}),X(Lk,jb.sugar,{x:.30000000000000004,y:.018,z:.096,sx:.014,sy:.012,sz:.014,ry:-.3})]}var Kk=new Map;function qk(e,t){let n=e===`iskender`||e===`tea`?e:`porsiyon`,r=n===`tea`?`tea`:t===null?`empty`:`${n}:${t}`,i=Kk.get(r);if(i!==void 0)return i;let a=t===`chicken`?q.chicken:q.meat,o=n===`tea`?Gk():t===null?[]:n===`iskender`?Wk(a):Uk(a),s=Rh([...Vk(),...o]);return Kk.set(r,s),s}var Jk=r.tables,Yk=.9,Xk=5e-4,Zk=99,Qk=2;function $k(e){return{id:e.id,pos:e.pos,phase:e.phase===`leaving`?`leaving`:`queue`,lane:0,slot:e.phase===`waiting`?0:Zk,serveTimer:0,look:e.look,wantsDrink:!1,wantsSalgam:!1,drink:!1,wantsFries:!1,fries:!1,vip:!1,wants:e.wants,waited:e.phase===`waiting`?e.waited/Jk.patience*r.queue.patience:0,unserved:!0,wantsBread:!1}}function eA(e,t){let n=t.slice(0,Qk).flatMap(e=>jk(e.seat.x,e.seat.z));n.length>0&&e.add(jy(n,!1))}function tA(e,t){return t.slice(Qk).map((t,n)=>{let r=Jk.spots[Qk+n]??Jk.spots[0],i=q.umbrellas[n%q.umbrellas.length]??q.umbrellas[0],a=jy([...wS(r.x,r.z,i),...jk(t.seat.x,t.seat.z)]);return a.visible=!1,e.add(a),a})}function nA(e,t){return t.map(t=>{let n=Uh(qk(void 0,null),!1);return n.position.set(t.plate.x,Dk,t.plate.z),n.visible=!1,e.add(n),n})}function rA(e){let t=xx({coat:q.waiterCoat,scale:Yk,role:`apprentice`});t.group.visible=!1,e.add(t.group);let n=0,r=0,i=0;return{draw(e,a,o){if(t.group.visible=e!==null,e===null)return;let s=e.pos.x-n,c=e.pos.z-r,l=Math.hypot(s,c)>Xk;l&&(i=Math.atan2(s,c)),n=e.pos.x,r=e.pos.z;let u=e.kind===`meat`?e.carry:0,d=e.carry-u;t.update({pos:e.pos,facing:i,carry:u,chicken:d,drinks:0,fries:0,moving:l,carryingSpit:null},a,o)},trayPoint:()=>t.trayPoint(0)}}function iA(e){let t=new Map,n=new Set,r=e.map(()=>null),i=e.map(()=>!1),a=[],o=e=>{a.some(t=>t.id===e)||n.delete(e)};return{seats:t,fed:n,diners:r,tea:i,update:s=>{t.clear(),r.fill(null),i.fill(!1),e.forEach(e=>{e.seat.eating=!1});for(let a of s){let o=e[a.table];o!==void 0&&a.phase!==`coming`&&a.phase!==`leaving`&&(t.set(a.id,o.seat),a.phase===`tea`&&(i[a.table]=!0),a.phase===`eating`&&(o.seat.eating=!0,r[a.table]=a,n.add(a.id)))}a=s,n.forEach(o)}}}function aA(e){let t=zE(e),n=Jk.spots.map(Ak);eA(e,n);let r=tA(e,n),i=nA(e,n),a=rA(e),o=iA(n),s=e=>{i.forEach((t,n)=>{let r=o.diners[n]??null,i=o.tea[n]===!0;t.visible=r!==null||i||e.dirtyTables.includes(n);let a=i?`tea`:r?.dish;t.visible&&(t.geometry=qk(a,r?.wants??null))})};return{update(e,n,i=Jk.spots.length){o.update(e.guests),t.update(e.guests.map($k),!0,e.time,n,p(e.branch),o),s(e),r.forEach((e,t)=>{e.visible=Qk+t<i}),a.draw(e.waiter,e.time,n)},trayPoint:a.trayPoint}}var oA=1.3;function sA(e){return e===r.counter.pos?EC:e===r.spit.pos||e===r.chicken.pos?oA:0}function cA(e){let t=e.helper?.phase===`cutting`&&e.spit.cooked>=1;return{meat:ct(e,`meat`)||t,chicken:ct(e,`chicken`)}}function lA(e){let t=new Is(new Fl(YC.width,YC.depth).rotateX(-Math.PI/2),Ah(q.path));return t.position.set(Ce(0,1).x,YC.y,YC.z),t.receiveShadow=!0,t.visible=!1,e.add(t),t}function uA(e,t){let n={meat:kb(`meat`),chicken:kb(`chicken`)},i=Px(q.coat);n.meat.group.scale.setScalar(K.spit.rowScale),n.chicken.group.scale.setScalar(K.spit.rowScale);let a=uk();a.position.set(0,K.crate.y,K.crate.z),a.visible=!1,i.carry(a),e.add(n.meat.group,n.chicken.group,i.group);let{x:o,z:s}=r.counter.pos;return{spits:n,chef:i,world:rw(e),helper:WD(e),coldStore:WS(e),fridge:mD(e),fryer:wD(e),courier:TT(e),cashier:Nx(e),crate:a,gauges:hk(e),van:Ek(e),tables:aA(e),lane:lA(e),stock:pw(e),customers:zE(e),coins:Kx(e,new V(o,EC+.2,s)),pads:gO(e,t.pads),arrow:ah(e),fliers:$E(e),particles:yO(e),popups:CO(e),shavings:FO(e),heat:zD(e,[n.meat,n.chicken])}}function dA(e,t){let n=qO(e),{scene:i}=n,a=uA(i,t),{spits:o,chef:s,world:c,helper:u,fridge:d,lane:f,stock:m,customers:h,coins:g,pads:_,arrow:v}=a,{fliers:y,particles:b,popups:x,coldStore:S,fryer:C,courier:w,cashier:T,crate:E,gauges:D,van:O,tables:k,shavings:A}=a,j=QE(a),M=new V,N={x:0,y:0,inFront:!0},ee=e=>{let t=e.reduce((e,t)=>e+(t.type===`collect`&&t.by===`player`?t.value:0),0);t>0&&x.show(`+${qD(t)}`,s.bodyPoint())},te=0,ne=e=>{let t=e.helper?.carry??0,n=e.helper?.phase===`cutting`&&t>te;if(te=t,!n)return;let r=o.meat.slicePoint;o.meat.shudder(),A.launch(`meat`,r.x,r.y,r.z,u.spot.x,K.shave.trayHeight,u.spot.z)};return{render(e,t,M){t.forEach(t=>j(t,e)),ee(t),b.update(M),x.update(M);let N=Ze(e),te=cA(e);o.chicken.group.visible=N.includes(`chicken`),N.forEach(t=>o[t].update($e(e,t),te[t],M));let re=N.some(t=>$e(e,t).portions===0),ie=e.helper?.phase===`toStore`||e.helper?.phase===`carryingSpit`,ae=re&&!(ie&&e.chickenSpit.portions>0),se=e.player.carryingSpit!==null||e.player.carryingCrate;S.update((ae||_t(e))&&!se,e.time),E.visible=e.player.carryingCrate,O.update(M);let ce=ct(e,`meat`)||ct(e,`chicken`);s.update({...e.player,working:ce},e.time,M),u.update(e.helper,e.player.pos,e.time,M),ne(e),d.update(fe(e),M),C.update(ft(e),e.fryer.ready,M),w.update(e.courier,e.time,M),T.update(oe(e,`cashier`)>0,e.player.pos,e.time,M),k.update(e,M,Pm(e)),f.visible=ge(e)>1;let le=lt(e);c.setCounterColumns(le),D.update(e.lavash,e.garnish,le,e.time),m.update({meat:e.counterStock,chicken:e.counterChicken,drinks:e.counterDrinks,fries:e.counterFries,columns:le},M),h.update(e.customers,N.length>1,e.time,M,p(e.branch)),g.update(e.coins,e.time,M),_.update(e,M),c.setBranch(e.branch);let{chosen:ue}=e.style,de=r.style;c.setStyle(de.floor[ue.floor]?.colour??null,de.awning[ue.awning]?.colour??de.awning[0].colour,de.sign[ue.sign]?.colour??de.sign[0].colour,e.style.signText),s.setCoat(de.coat[ue.coat]?.colour??de.coat[0].colour);let pe=pm(e);v.update(pe,sA(pe),e.time),y.update(M),A.update(M),n.daylight.set(l(e.time)),c.setNight(n.daylight.night()),n.rig.update(e.player.pos,M),a.heat.update(n.camera,M),n.renderer.render(i,n.camera)},resize:n.resize,setCamera:n.rig.setMode,cameraYaw:n.rig.yaw,pinCamera:n.rig.pin,project(e,t,r){return M.set(e,t,r).project(n.camera),N.x=M.x,N.y=M.y,N.inFront=M.z<1,N},stats:()=>({drawCalls:n.renderer.info.render.calls,triangles:n.renderer.info.render.triangles})}}function fA(e){return!ve(e)}function pA(e){return{...e,boostUntil:e.time+r.boost.duration}}function mA(e){let{state:t}=e;if(oe(t,`branch`)===0)return e;let n=We(t.seed),r=t.branch+1;return{state:{...n,player:{...n.player,carry:0},wallet:t.wallet,nextId:Math.max(t.nextId,n.nextId),time:t.time,boostUntil:t.boostUntil,served:t.served,sliced:t.sliced,mission:t.mission,style:t.style,branch:r},events:[...e.events,{type:`branchOpened`,branch:r}]}}var hA=r.missions;function gA(e){let t=Math.floor(e.mission.index/2),n=be(e)/r.coins.baseValue;if(e.mission.index%2==0){let e=Math.min(hA.serveBase+hA.serveStep*t,hA.serveMax);return{kind:`serve`,target:e,reward:Math.round(e*hA.serveRewardPerSale*n)}}let i=Math.round(Math.min(hA.earnBase+hA.earnStep*t,hA.earnMax)*n);return{kind:`earn`,target:i,reward:Math.round(i*hA.earnRewardShare)}}function _A(e,t){return e===`serve`?+(t.type===`serve`||t.type===`plateServed`):t.type===`collect`?t.value:0}function vA(e){let{state:t}=e,n=gA(t),r=e.events.reduce((e,t)=>e+_A(n.kind,t),0);if(r===0)return e;let i=t.mission.progress+r;return i<n.target?{...e,state:{...t,mission:{...t.mission,progress:i}}}:{state:{...t,wallet:t.wallet+n.reward,mission:{index:t.mission.index+1,progress:0}},events:[...e.events,{type:`missionDone`,reward:n.reward}]}}var yA=r.cashier;function bA(e,t){if(oe(e,`cashier`)===0)return{state:e,events:[]};let n=e.coins.find(t=>e.time-t.bornAt>=yA.delay),r=Math.min(e.cashierTimer+t,yA.interval);return n===void 0||r<yA.interval?{state:{...e,cashierTimer:r},events:[]}:{state:{...e,cashierTimer:0,coins:e.coins.filter(e=>e.id!==n.id),wallet:e.wallet+n.value},events:[{type:`collect`,coinId:n.id,value:n.value,by:`cashier`}]}}function xA(e){let t=t=>e.time-t.bornAt>=r.coins.settleTime&&Ge(t.pos,e.player.pos)<=r.coins.magnetRadius,n=e.coins.filter(t);return n.length===0?{state:e,events:[]}:{state:{...e,coins:e.coins.filter(e=>!t(e)),wallet:e.wallet+n.reduce((e,t)=>e+t.value,0)},events:n.map(e=>({type:`collect`,coinId:e.id,value:e.value,by:`player`}))}}var SA=r.counter.transferInterval,CA=[`meat`,`chicken`];function wA(e){let t=CA.find(t=>rt(e.player,t)>0&&at(e,t)<ut(e));if(t!==void 0)return t;let n=dt(e);return e.player.drinks>0&&e.counterDrinks<n?`drink`:e.player.fries>0&&e.counterFries<n?`fries`:null}function TA(e,t){return t===`fries`?{...e,counterFries:e.counterFries+1,player:{...e.player,fries:e.player.fries-1}}:t===`drink`?{...e,counterDrinks:e.counterDrinks+1,player:{...e.player,drinks:e.player.drinks-1}}:{...ot(e,t,at(e,t)+1),player:it(e.player,t,rt(e.player,t)-1)}}function EA(e,t){let n=Ge(e.player.pos,r.counter.pos)<=r.counter.reach?wA(e):null;if(n===null)return{state:e.transferTimer===SA?e:{...e,transferTimer:SA},events:[]};let i=e.transferTimer+t;return i<SA?{state:{...e,transferTimer:i},events:[]}:{state:{...TA(e,n),transferTimer:Math.min(i-SA,SA)},events:[{type:`deposit`,item:n}]}}var DA=r.courier;function OA(e,t){let{courier:n}=e;if(n===null)return kA(e,t);switch(n.phase){case`arriving`:return{state:AA(e,n,DA.spot,`waiting`,t),events:[]};case`waiting`:return jA(e,n,t);case`leaving`:return{state:AA(e,n,DA.exit,null,t),events:[]}}}function kA(e,t){if(e.served<DA.afterServed)return{state:e,events:[]};let n=e.courierTimer+t;if(n<DA.every)return{state:{...e,courierTimer:n},events:[]};let r=Ze(e),i=_m(e.seed),a=_m(i.seed),o=r[Math.floor(i.value*r.length)]??`meat`,s=DA.min+Math.floor(a.value*(DA.max-DA.min+1)),c={pos:DA.spawn,phase:`arriving`,wants:o,need:s,got:0,timer:0,waited:0};return{state:{...e,seed:a.seed,courierTimer:0,courier:c},events:[{type:`courierArrived`,need:s,kind:o}]}}function AA(e,t,n,r,i){let a=Je(t.pos,n,DA.speed*i);return a.arrived?{...e,courier:r===null?null:{...t,pos:a.pos,phase:r}}:{...e,courier:{...t,pos:a.pos}}}function jA(e,t,n){if(t.got>=t.need||t.waited>=DA.patience)return MA(e,t);let r={...t,waited:t.waited+n};if(at(e,t.wants)<=0)return{state:{...e,courier:r},events:[]};let i=t.timer+n;return i<DA.takeInterval?{state:{...e,courier:{...r,timer:i}},events:[]}:{state:{...ot(e,t.wants,at(e,t.wants)-1),courier:{...r,got:t.got+1,timer:0}},events:[{type:`courierTook`,kind:t.wants}]}}function MA(e,t){let n={...t,phase:`leaving`},i=Math.round(t.got*mt(t.wants)*DA.payFactor);if(i===0)return{state:{...e,courier:n},events:[]};let a=r.coins.dropArea,o=xe(e),s={coins:e.coins,seed:e.seed,nextId:e.nextId},c=Array.from({length:i}).reduce(t=>{let n=_m(t.seed),r=_m(n.seed),i={id:t.nextId,value:o,bornAt:e.time,pos:{x:Ke(a.minX,a.maxX,n.value),z:Ke(a.minZ,a.maxZ,r.value)}};return{coins:[...t.coins,i],seed:r.seed,nextId:t.nextId+1}},s);return{state:{...e,...c,courier:n},events:[{type:`courierPaid`,coins:i}]}}var NA={type:`drink`};function PA(e,t){let n=dt(e)-e.counterDrinks-e.player.drinks,i=Math.min(ce(e),n);if(!(fe(e)&&Ge(e.player.pos,r.fridge.pos)<=r.fridge.radius)||i<=0)return{state:e.drinkTimer===0?e:{...e,drinkTimer:0},events:[]};let{interval:a}=r.fridge,o=e.drinkTimer+t,s=Math.min(Math.floor(o/a),i);return s===0?{state:{...e,drinkTimer:o},events:[]}:{state:{...e,drinkTimer:s===i?0:o-s*a,player:{...e.player,drinks:e.player.drinks+s}},events:Array.from({length:s},()=>NA)}}var FA=r.fryer;function IA(e,t){return ft(e)?RA(LA(e,t),t):{state:e,events:[]}}function LA(e,t){let{ready:n,timer:r}=e.fryer;if(n>=FA.batch)return r===0?e:{...e,fryer:{ready:n,timer:0}};let i=r+t,a=Math.min(Math.floor(i/FA.cookTime),FA.batch-n);return{...e,fryer:{ready:n+a,timer:i-a*FA.cookTime}}}function RA(e,t){let n=dt(e)-e.counterFries-e.player.fries,r=Math.min(ce(e),n,e.fryer.ready);if(!(Ge(e.player.pos,FA.pos)<=FA.radius)||r<=0)return{state:e.friesTimer===0?e:{...e,friesTimer:0},events:[]};let i=e.friesTimer+t;return i<FA.pickInterval?{state:{...e,friesTimer:i},events:[]}:{state:{...e,friesTimer:Math.min(i-FA.pickInterval,FA.pickInterval),fryer:{...e.fryer,ready:e.fryer.ready-1},player:{...e.player,fries:e.player.fries+1}},events:[{type:`fries`}]}}var zA=r.helper;function BA(){return{pos:r.pads.defs.helper.pos,carry:0,phase:`toSpit`,timer:0}}function VA(e,t){let n=_e(e);if(n===0)return e;let r=e.helper??BA();if(HA(e,r))return{...e,helper:{...r,phase:`toStore`,timer:0}};switch(r.phase){case`toStore`:return{...e,helper:WA(r,zA.storeSpot,`carryingSpit`,t)};case`carryingSpit`:return UA(e,r,t);case`toSpit`:return{...e,helper:WA(r,zA.spitSpot,`cutting`,t)};case`toCounter`:return{...e,helper:WA(r,zA.counterSpot,`serving`,t)};case`cutting`:return GA(e,r,n,t);case`serving`:return KA(e,r,t)}}function HA(e,t){let n=oe(e,`helper`)>=zA.swapLevel,r=(t.phase===`toSpit`||t.phase===`cutting`)&&t.carry===0;return n&&r&&e.spit.portions===0&&e.player.carryingSpit!==`meat`}function UA(e,t,n){let i=WA(t,zA.spitSpot,`cutting`,n);return i.phase!==`cutting`||e.spit.portions>0?{...e,helper:i}:{...e,helper:i,spit:{portions:r.spit.size,cooked:0}}}function WA(e,t,n,r){let i=Je(e.pos,t,zA.speed*r);return i.arrived?{...e,pos:i.pos,phase:n,timer:0}:{...e,pos:i.pos}}function GA(e,t,n,r){let i=ue(e)*zA.sliceFactor,a=t.timer+r,o=Math.floor(e.spit.cooked),s=Math.min(Math.floor(a/i),n-t.carry,o,e.lavash),c=t.carry+s,l={portions:e.spit.portions-s,cooked:e.spit.cooked-s},u=l.portions===0||e.lavash-s===0,d=c>=n||u&&c>0?{...t,carry:c,phase:`toCounter`,timer:0}:{...t,carry:c,timer:Math.min(a-s*i,i)};return{...e,spit:l,lavash:e.lavash-s,helper:d}}function KA(e,t,n){if(t.carry===0)return{...e,helper:{...t,phase:`toSpit`,timer:0}};if(e.counterStock>=ut(e))return{...e,helper:t};let i=r.counter.transferInterval*zA.transferFactor,a=t.timer+n;return a<i?{...e,helper:{...t,timer:a}}:{...e,counterStock:e.counterStock+1,helper:{...t,carry:t.carry-1,timer:Math.min(a-i,i)}}}var qA={x:r.spit.pos.x+r.spit.frontClear,from:r.coldStore.pos.z-r.fridge.obstacleRadius,to:r.fryer.pos.z+r.fryer.obstacleRadius};function JA(e){return e.z>=qA.from&&e.z<=qA.to&&e.x<qA.x?{x:qA.x,z:e.z}:e}function YA(e,t,n){let i=Math.hypot(t.x,t.z);if(i<r.player.moveThreshold)return e.player.moving?{...e,player:{...e.player,moving:!1}}:e;let{carryingSpit:a,carryingCrate:o}=e.player,s=o?r.supply.carrySpeed:1,c=a===null?s:r.player.spitCarrySpeed,l=Math.min(i,1)/i*r.player.speed*c*n,u={x:e.player.pos.x+t.x*l,z:e.player.pos.z+t.z*l},d=Ze(e).reduce((e,t)=>Ye(e,Qe(t),r.spit.obstacleRadius),u),f=fe(e)?Ye(d,r.fridge.pos,r.fridge.obstacleRadius):d,p=ft(e)?Ye(f,r.fryer.pos,r.fryer.obstacleRadius):f;return{...e,player:{...e.player,pos:JA(qe(p,r.bounds)),facing:Math.atan2(t.x,t.z),moving:!0}}}var XA=r.pads;function ZA(e,t){let n=e.pads.find(t=>s.includes(t.id)&&Se(t,e.branch)!==null&&!he(e,t.id)&&Ge(e.player.pos,t.pos)<=XA.radius);if(n===void 0||e.wallet<=0||e.player.moving)return{state:e.padTimer===0?e:{...e,padTimer:0},events:[]};let r=e.padTimer+t;if(r<XA.tickInterval)return{state:{...e,padTimer:r},events:[]};let i=Math.min(r-XA.tickInterval,XA.tickInterval);return QA({...e,padTimer:i},n)}function QA(e,t){let n=Se(t,e.branch);if(n===null)return{state:e,events:[]};let r=Math.ceil(n/XA.ticksToFill),i=Math.min(e.wallet,n-t.paid,r),a=t.paid+i,o=a>=n,s=o?{...t,level:t.level+1,paid:0}:{...t,paid:a},c={type:`pay`,padId:t.id},l=o?[c,{type:`upgrade`,padId:t.id,level:s.level}]:[c];return{state:{...e,wallet:e.wallet-i,pads:e.pads.map(e=>e.id===t.id?s:e)},events:l}}function $A(e,t){return Ze(e).reduce((e,n)=>{let r=ej(e.state,n,t);return{state:r.state,events:[...e.events,...r.events]}},{state:e,events:[]})}function ej(e,t,n){let r=tt(e,t);if(!st(e,t))return{state:r===0?e:nt(e,t,0),events:[]};if(!ct(e,t))return{state:nt(e,t,Math.min(r+n,ue(e))),events:[]};let i=$e(e,t),a=Math.min(ce(e),Math.floor(i.cooked),e.lavash),o=ue(e),s=r+n,c=Math.min(Math.floor(s/o),a);return c===0?{state:nt(e,t,s),events:[]}:{state:{...et(nt(e,t,c===a?0:s-c*o),t,{portions:i.portions-c,cooked:i.cooked-c}),sliced:e.sliced+c,lavash:e.lavash-c,player:it(e.player,t,rt(e.player,t)+c)},events:Array.from({length:c},()=>({type:`slice`,kind:t}))}}function tj(e,t){return ij(rj({state:Ze(e).reduce((e,n)=>nj(e,n,t),e),events:[]}))}function nj(e,t,n){let{portions:r,cooked:i}=$e(e,t),a=Math.min(le(e),r);return i===a?e:et(e,t,{portions:r,cooked:i>a?a:Math.min(i+pt(e,t)*n,a)})}function rj(e){let{state:t}=e,{player:n}=t,i=n.carry+n.chicken+n.drinks+n.fries===0&&n.carryingSpit===null&&!n.carryingCrate,a=Ge(n.pos,r.coldStore.pos)<=r.coldStore.radius,o=t.helper?.phase===`toStore`||t.helper?.phase===`carryingSpit`,s=Ze(t).filter(e=>$e(t,e).portions===0&&!(e===`meat`&&o)),c=t.customers.find(e=>e.phase===`queue`&&e.slot===0&&s.includes(e.wants))?.wants??s[0];return c===void 0||!i||!a?e:{state:{...t,player:{...n,carryingSpit:c}},events:[...e.events,{type:`spitPicked`,kind:c}]}}function ij(e){let{state:t}=e,n=t.player.carryingSpit;return n===null||Ge(t.player.pos,Qe(n))>r.spit.radius?e:$e(t,n).portions>0?{state:{...t,player:{...t.player,carryingSpit:null}},events:e.events}:{state:{...et(t,n,{portions:r.spit.size,cooked:0}),player:{...t.player,carryingSpit:null}},events:[...e.events,{type:`spitMounted`,kind:n}]}}function aj(e){return Number.isFinite(e)?Math.min(Math.max(e,0),r.maxDt):0}function oj(e,t,n){let r=aj(n),i=YA({...e,time:e.time+r},t,r),a=[e=>tj(e,r),vt,e=>$A(e,r),e=>PA(e,r),e=>IA(e,r),e=>OA(e,r),e=>({state:VA(e,r),events:[]}),e=>EA(e,r),e=>ym(e,r),e=>Xm(e,r),xA,e=>bA(e,r),e=>ZA(e,r)].reduce((e,t)=>{let n=t(e.state);return{state:n.state,events:[...e.events,...n.events]}},{state:i,events:[]}),o=Ze(e).filter(t=>$e(e,t).portions>0&&$e(a.state,t).portions===0).map(e=>({type:`spitEmpty`,kind:e})),s=Ze(e).filter(t=>$e(e,t).portions===0&&$e(a.state,t).portions>0).filter(e=>!a.events.some(t=>t.type===`spitMounted`&&t.kind===e)).map(e=>({type:`spitMounted`,kind:e})),c=!f(e)&&f(a.state)?[{type:`rushStarted`}]:[];return vA(mA({state:a.state,events:[...a.events,...o,...s,...c]}))}function sj(e){let t=document.getElementById(e);if(t===null)throw Error(`Page is missing the #${e} element`);return t}function cj(e,t){e.classList.remove(t),e.offsetWidth,e.classList.add(t)}var lj=`http://www.w3.org/2000/svg`;function uj(e,t){let n=document.createElementNS(lj,`svg`);n.setAttribute(`aria-hidden`,`true`),n.setAttribute(`class`,t);let r=document.createElementNS(lj,`use`);return r.setAttribute(`href`,`#${e}`),n.append(r),n}function dj(){return window.matchMedia(`(prefers-reduced-motion: reduce)`).matches}var fj={queue:`#i-serve`,courier:`#i-scooter`,spit:`#i-doner`,crate:`#i-crate`,table:`#i-plate`},pj=30,mj=6,hj=460,gj=.05,_j={portalCorner:{width:70,height:70},upright:{top:126,buttons:{width:64,height:216}},leftColumn:{width:150,height:270},sideways:{top:56,buttons:{width:64,height:216},goalChip:{halfWidth:112,bottom:116},rushChip:{width:92,bottom:120}}};function vj(e){return Array.from(e.querySelectorAll(`.edge-marker`)).map(e=>{let t=e.querySelector(`use`);if(t===null)throw Error(`An edge marker is missing its picture`);return{box:e,use:t,shown:!1,kind:null,x:-1,y:-1,angle:0}})}function yj(e){let t=window.getComputedStyle(e),n=e=>Number.parseFloat(e)||0;return{top:n(t.paddingTop),right:n(t.paddingRight),bottom:n(t.paddingBottom),left:n(t.paddingLeft)}}function bj(e){let t=window.innerWidth,n=window.innerHeight,r=yj(e),i=n<=hj,a=i?_j.sideways:_j.upright,o={x0:0,y0:0,x1:_j.portalCorner.width+r.left,y1:_j.portalCorner.height+r.top},s={x0:t-a.buttons.width-r.right,y0:0,x1:t,y1:a.buttons.height+r.top},c={x0:0,y0:0,x1:_j.leftColumn.width+r.left,y1:_j.leftColumn.height+r.top},{goalChip:l,rushChip:u}=_j.sideways,d=i?[{x0:t/2-l.halfWidth,y0:0,x1:t/2+l.halfWidth,y1:l.bottom+r.top},{x0:0,y0:0,x1:u.width+r.left,y1:u.bottom+r.top}]:[];return{width:t,height:n,radius:pj,track:{x0:r.left+mj+pj,y0:r.top+a.top+pj,x1:t-r.right-mj-pj,y1:n-r.bottom-mj-pj},keepOut:[o,s,c,...d]}}function xj(e){e.shown&&(e.shown=!1,e.box.hidden=!0)}function Sj(e,t,n,r,i){t!==e.kind&&(e.kind=t,e.use.setAttribute(`href`,fj[t])),(n!==e.x||r!==e.y)&&(e.x=n,e.y=r,e.box.style.transform=`translate3d(${n}px, ${r}px, 0)`);let a=Math.round(i/gj)*gj;a!==e.angle&&(e.angle=a,e.box.style.setProperty(`--angle`,`${a.toFixed(2)}rad`)),e.shown||(e.shown=!0,e.box.hidden=!1)}function Cj(){let e=sj(`edge-markers`),t=vj(e),n=bj(e);return window.addEventListener(`resize`,()=>{n=bj(e)}),{update(e,r){let i=0;e.forEach(e=>{let a=t[i];if(a===void 0)return;let o=r(e.pos.x,e.height,e.pos.z),s=Ot(o.x,o.y,o.inFront,n);s!==null&&(Sj(a,e.kind,s.x,s.y,s.angle),i+=1)}),t.slice(i).forEach(xj)}}}var wj=5,Tj={serve:`Customers served`,earn:`Coins collected`};function Ej(e){let t=document.getElementById(`fatal`);t!==null&&(t.textContent=e,t.hidden=!1)}function Dj(){let e=sj(`wallet`),t=sj(`wallet-value`),n=-1;return r=>{r.wallet!==n&&(r.wallet>n&&n>=0&&cj(e,`bump`),n=r.wallet,t.textContent=qD(r.wallet))}}function Oj(){let e=sj(`boost`),t=sj(`boost-seconds`),n=-1;return r=>{let i=Math.max(Math.ceil(r.boostUntil-r.time),0);i!==n&&(n=i,e.hidden=i===0,e.classList.toggle(`low`,i>0&&i<=wj),t.textContent=String(i))}}function kj(){let e=sj(`branch`),t=sj(`branch-number`),n=-1;return r=>{r.branch!==n&&(n=r.branch,e.hidden=r.branch===0,t.textContent=String(r.branch+1))}}function Aj(){let e=sj(`mission`),t=sj(`mission-text`),n=sj(`mission-fill`),r=``,i=-1;return a=>{let o=gA(a),s=`${a.mission.index}|${a.mission.progress}|${o.target}`;if(s===r)return;r=s,i>=0&&a.mission.index!==i&&cj(e,`done`),i=a.mission.index;let c=qD(Math.min(a.mission.progress,o.target)),l=qD(o.target);e.dataset.kind=o.kind,e.setAttribute(`aria-label`,`${Tj[o.kind]}: ${c} of ${l}`),t.textContent=`${c}/${l}`,n.style.width=`${Math.min(a.mission.progress/o.target*100,100)}%`}}function jj(){let e=sj(`rush`),t=!1;return n=>{let r=f(n);r!==t&&(t=r,e.hidden=!r)}}function Mj(){let e=sj(`boost-button`),t=sj(`drag-hint`),n=[Dj(),Oj(),kj(),Aj(),jj()];t.hidden=!1;let r=!1;return{onBoostAsked(t){e.addEventListener(`click`,t)},update(t,i){i!==r&&(r=i,e.hidden=!i),n.forEach(e=>e(t))},dismissDragHint(){t.hidden=!0}}}var Nj=2500;function Pj(){let e=document.fonts.load(`900 20px "Lilita One"`).then(()=>void 0,()=>void 0),t=new Promise(e=>window.setTimeout(e,Nj));return Promise.race([e,t])}var Fj={carry:`Carry more wraps`,slice:`Hotter fire`,price:`Higher prices`,helper:`An apprentice`,fridge:`Ayran drinks`,window:`A second queue`,chicken:`Chicken döner`,counter:`A longer counter`,fryer:`A chip fryer`,cashier:`A cashier`,tables:`Table service`,branch:`A new shop`};function Ij(){let e=sj(`unlock-icon`);if(!(e instanceof HTMLCanvasElement))throw Error(`#unlock-icon must be a canvas`);let t=e.getContext(`2d`);if(t===null)throw Error(`2D canvas is not available in this browser`);return{screen:sj(`unlock`),box:sj(`unlock-card`),icon:e,context:t,badge:sj(`unlock-badge`),number:sj(`unlock-number`),button:sj(`unlock-continue`)}}function Lj(e,t){rO(e.context,t.icon,``);let n=Fj[t.icon];e.icon.setAttribute(`aria-label`,t.star===void 0?n:`${n}: number ${t.star}`),e.badge.hidden=t.star===void 0,e.number.textContent=t.star===void 0?``:String(t.star)}function Rj(){let e=sj(`hud-layer`),t=sj(`pause-button`),n=sj(`pause`),r=sj(`pause-resume`),i=Ij(),a=null,o=!1,s=!0,c=!1,l=()=>{e.toggleAttribute(`inert`,o||a!==null||c)};return{showPause(e,i){i!==s&&(s=i,t.hidden=!i),e!==o&&(o=e,n.hidden=!e,l(),e&&r.focus({preventScroll:!0}))},showCard(e){if(e===a)return;let t=a!==null&&e!==null;a=e,i.screen.hidden=e===null,l(),e!==null&&(Lj(i,e),t&&cj(i.box,`enter`),i.button.focus({preventScroll:!0}))},showOther(e){e!==c&&(c=e,l())},onPauseAsked:e=>t.addEventListener(`click`,e),onResumeAsked:e=>r.addEventListener(`click`,e),onCardDismissed:e=>i.button.addEventListener(`click`,e)}}var zj={floor:`Floor`,awning:`Awning`,sign:`Sign`,coat:`Cook's jacket`},Bj=`#8fd3ca`;function Vj(e){return e===null?Bj:`#${e.toString(16).padStart(6,`0`)}`}function Hj(e,t){let n=document.createElement(`button`);n.type=`button`,n.className=`swatch`,n.dataset.slot=e,n.dataset.index=String(t),n.style.setProperty(`--swatch`,Vj(r.style[e][t]?.colour??null));let i=document.createElement(`span`);i.className=`swatch-price`;let a=document.createElement(`span`);return a.textContent=qD(Ee(e,t)),i.append(uj(`i-coin`,`coin`),a),n.append(uj(`i-check`,`swatch-check`),i),{button:n,price:i}}function Uj(e){let t=t=>{let n=document.createElement(`div`);n.className=`style-row`,n.setAttribute(`role`,`group`),n.setAttribute(`aria-label`,zj[t]);let i=r.style[t].map((e,n)=>Hj(t,n));return n.append(uj(`i-style-${t}`,`style-icon`),...i.map(e=>e.button)),e.append(n),i};return{floor:t(`floor`),awning:t(`awning`),sign:t(`sign`),coat:t(`coat`)}}function Wj(e){let t=document.createElement(`label`);t.className=`style-row name-row`;let n=document.createElement(`input`);return n.type=`text`,n.className=`sign-name`,n.maxLength=r.shopSign.maxLength,n.autocomplete=`off`,n.autocapitalize=`characters`,n.spellcheck=!1,n.enterKeyHint=`done`,n.setAttribute(`aria-label`,`Name on the sign`),t.append(uj(`i-style-sign`,`style-icon`),n),e.append(t),n}function Gj(e,t,n,r){let i=De(t,n,r),a=t.style.chosen[n]===r,o=Ee(n,r),s=i||t.wallet>=o;e.button.classList.toggle(`is-worn`,a),e.button.classList.toggle(`is-owned`,i),e.button.setAttribute(`aria-disabled`,String(!s)),e.price.hidden=i;let c=a?`in use`:i?`owned`:`costs ${o} coins`;e.button.setAttribute(`aria-label`,`${zj[n]} look ${r+1}, ${c}`),e.button.setAttribute(`aria-pressed`,String(a))}function Kj(e,t){let n=Uj(e),r=Wj(e);r.addEventListener(`keydown`,e=>{e.key===`Enter`&&!e.isComposing&&t()});let i=null,a=-1;return{render(e){document.activeElement!==r&&r.value!==e.style.signText&&(r.value=e.style.signText),(e.style!==i||e.wallet!==a)&&(i=e.style,a=e.wallet,o.forEach(t=>n[t].forEach((n,r)=>Gj(n,e,t,r))))},onName(e){r.addEventListener(`input`,()=>e(r.value.toLocaleUpperCase(navigator.language)))},onPick(t){e.addEventListener(`click`,e=>{let n=e.target instanceof Element?e.target.closest(`.swatch`):null,r=o.find(e=>e===n?.dataset.slot);n!==null&&r!==void 0&&t(r,Number(n.dataset.index))})}}}function qj(){let e=sj(`shop-button`),t=sj(`shop`),n=sj(`shop-close`),r=Kj(sj(`shop-list`),()=>n.focus({preventScroll:!0})),i=!1;return{show(r){r!==i&&(i=r,t.hidden=!r,r?n.focus({preventScroll:!0}):e.focus({preventScroll:!0}))},render(e){i&&r.render(e)},onOpenAsked:t=>e.addEventListener(`click`,t),onCloseAsked:e=>n.addEventListener(`click`,e),onPick:r.onPick,onName:r.onName}}var Jj=[`cut`,`carry`,`collect`,`buy`],Yj={cut:!1,carry:!1,collect:!1,buy:!1};function Xj(e){let t=e.branch>0||e.pads.some(e=>e.level>0),n=e.pads.some(e=>e.paid>0),r=t||n||e.wallet>0,i=e.counterStock+e.counterChicken>0;return{cut:e.sliced>0,carry:r||i||e.served>0||e.coins.length>0,collect:r,buy:t}}function Zj(e,t){let n=Xj(t);return Jj.some(t=>n[t]&&!e[t])?{cut:e.cut||n.cut,carry:e.carry||n.carry,collect:e.collect||n.collect,buy:e.buy||n.buy}:e}function Qj(e){return Jj.every(t=>e[t])}function $j(e){return e.pads.some(t=>{if(!s.includes(t.id)||he(e,t.id))return!1;let n=Se(t,e.branch);return n!==null&&e.wallet>=n-t.paid})}function eM(e,t){let{player:n}=t,r=n.carry+n.chicken>0;return!e.collect&&t.coins.length>0?`collect`:!e.carry&&r?`carry`:!e.buy&&e.collect&&$j(t)?`buy`:Jj.find(t=>!e[t])??null}function tM(e,t){return{done:e,step:eM(e,t)}}var nM=2200,rM={cut:`cut döner at the fire`,carry:`carry it to the counter`,collect:`collect the coins`,buy:`buy an upgrade`};function iM(e,t){return`First steps: ${Jj.map(n=>{let r=e[n]?`done`:n===t?`now`:`to do`;return`${rM[n]} (${r})`}).join(`, `)}`}function aM(e){let t=t=>{let n=e.querySelector(`[data-step="${t}"]`);if(n===null)throw Error(`Page is missing the tutorial step "${t}"`);return n};return{cut:t(`cut`),carry:t(`carry`),collect:t(`collect`),buy:t(`buy`)}}function oM(e,t){let n=sj(`hud-layer`),r=sj(`tutorial`),i=aM(r),a=e,o=Yj,s=!1,c=null,l=null,u=e=>{Jj.forEach(t=>{i[t].classList.toggle(`is-done`,o[t]),i[t].classList.toggle(`is-now`,t===e)}),r.setAttribute(`aria-label`,iM(o,e))},d=()=>{r.hidden=!0,n.classList.remove(`has-tutorial`)},f=e=>{a=!0,t(),e&&(u(null),r.classList.add(`is-over`),window.setTimeout(d,nM))};return{update(e){if(a)return;if(o=Zj(o,e),Qj(o)){f(s);return}let t=tM(o,e);(o!==c||t.step!==l)&&(s||(s=!0,r.hidden=!1,n.classList.add(`has-tutorial`)),c=o,l=t.step,u(t.step))}}}var sM=650,cM=450;function lM(){let e=sj(`wipe`),t=!1,n=0,r=null,i=()=>{if(!t)return;t=!1,window.clearTimeout(n);let i=r;r=null,e.classList.add(`lifting`),n=window.setTimeout(()=>{e.hidden=!0},cM),i?.()};return e.addEventListener(`pointerdown`,i),{play(a,o){dj()?o():(window.clearTimeout(n),t=!0,r=o,e.style.setProperty(`--wipe`,a),e.classList.remove(`lifting`),e.hidden=!1,cj(e,`drawn`),n=window.setTimeout(i,sM))},skip:i,isPlaying:()=>t}}var uM=1e3,dM=2147483647,fM=r.ads.saveEverySeconds*uM,pM=`Something went wrong. Please reload the page.`;function mM(e){console.error(`The game stopped:`,e),Ej(pM)}function hM(){return{hud:Mj(),overlays:Rj(),shop:qj(),tutorial:oM(O(),k),markers:Cj(),wipe:lM()}}function gM(e,t,n,r,i){let a=r.isFrozen(),o=r.pausedBy()===`shop`&&!r.isAdRunning();e.hud.update(t,i&&fA(t)&&!a),e.overlays.showPause(r.pausedBy()===`menu`&&!r.isAdRunning(),!a),e.overlays.showOther(o||e.wipe.isPlaying()),e.shop.show(o),e.shop.render(t),e.tutorial.update(t),e.markers.update(wt(t),n.project)}function _M(e,t,n,r){let i=()=>t.pausedBy()===`shop`&&!t.isAdRunning();e.onOpenAsked(()=>t.pause(`shop`)),e.onCloseAsked(r),e.onPick((e,t)=>{i()&&n(n=>Oe(n,e,t))}),e.onName(e=>{i()&&n(t=>ke(t,e))})}function vM(e,t){let r=Ve(We(Math.floor(Math.random()*dM)),y()),i=dA(e,r),a=gn(e),o=hM(),s=ln(),c=Ut(),l=vn(t),u=_(l,o.overlays,o.wipe),d=null,p=0,m=!0,h=()=>{m&&(m=b(Me(r)))},g=e=>{if(l.isFrozen())return{state:r,events:[]};let t=l.takeGrant(),n=oj(r,ee(a.read(),i.cameraYaw()),e);return t?{state:pA(n.state),events:[...n.events,{type:`boostStarted`}]}:n},v=(e,t)=>{l.isAdRunning()||s.play(e),c.update(s.context(),!l.isFrozen(),f(r)),u.add(e),u.show(),(e.some(n)||t-p>fM)&&(p=t,h())},x=e=>{try{let n=aj(d===null?0:(e-d)/uM);d=e;let a=g(n);r=a.state,r.player.moving&&(l.firstInput(),o.hud.dismissDragHint()),v(a.events,e),i.render(r,a.events,l.isFrozen()?0:n),gM(o,r,i,l,t.canReward()),performance.now()-e,requestAnimationFrame(x)}catch(e){l.pageHidden(),mM(e)}};o.hud.onBoostAsked(()=>{fA(r)&&l.requestReward()});let S=()=>{l.pausedBy()===`shop`&&(u.hasWaiting()?l.handOver(`card`):l.resume())};re(l,o.overlays,u.dismiss,S),ie(i,l.isFrozen),ae(s,c),_M(o.shop,l,e=>{r=e(r),h()},S),window.addEventListener(`resize`,i.resize),window.addEventListener(`pointerup`,s.unlock),window.addEventListener(`keydown`,s.unlock),window.addEventListener(`pagehide`,h),e.addEventListener(`webglcontextlost`,e=>{e.preventDefault(),mM(Error(`WebGL context lost`))}),t.loadingFinished(),requestAnimationFrame(x)}var yM=xn();Promise.all([yM.init(),uT(),Pj()]).then(()=>{let e=document.getElementById(`game`);if(!(e instanceof HTMLCanvasElement))throw Error(`Page is missing the #game canvas`);cT(sj(`icon-sheet`)),sj(`hud-layer`).hidden=!1,vM(e,yM)}).catch(mM);