"use strict";(self.webpackChunkpendle_documentation=self.webpackChunkpendle_documentation||[]).push([[131],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),h=i,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||r;return n?a.createElement(m,s(s({ref:t},u),{},{components:n})):a.createElement(m,s({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5049:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={hide_table_of_contents:!0},s="Buy Assets at a Discount",o={unversionedId:"UsingPendle/Discount",id:"UsingPendle/Discount",title:"Buy Assets at a Discount",description:"Buy Assets at a Discount",source:"@site/docs/UsingPendle/Discount.md",sourceDirName:"UsingPendle",slug:"/UsingPendle/Discount",permalink:"/UsingPendle/Discount",draft:!1,tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"myAutogeneratedSidebar",previous:{title:"Simple UI",permalink:"/UsingPendle/Simple"},next:{title:"Pools",permalink:"/UsingPendle/Pools"}},l={},c=[{value:"How it works",id:"how-it-works",level:2},{value:"Tutorial",id:"tutorial",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"buy-assets-at-a-discount"},"Buy Assets at a Discount"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Buy Assets at a Discount",src:n(5263).Z,title:"Buy Assets at a Discount",width:"1999",height:"755"})),(0,i.kt)("h2",{id:"how-it-works"},"How it works"),(0,i.kt)("p",null,"We enable users to purchase assets for less than market price by splitting yield-bearing tokens into principal and yield. The principal of the yield-bearing token is represented by PT until a fixed maturity date, while the entitlement to the yield during that period is represented by YT and is sold to other buyers. With the monetary value of YT separated, the principal asset (i.e. PT) can then be sold at a lower price."),(0,i.kt)("p",null,"Certain pools may also carry more discount if the underlying asset such as rETH appreciates in price overtime against its base asset like ETH. This results in an even higher discount for PT."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Tokenization",src:n(8867).Z,title:"Tokenization",width:"4000",height:"1600"})),(0,i.kt)("p",null,"Once the maturity date is reached, the PT can then be claimed for the underlying yield-bearing token. However, even though there is a fixed maturity, you can choose to exit your position and take profit at any time before maturity. By not paying for the yield, the asset can be obtained at less than market price."),(0,i.kt)("p",null,"For example, ETH sells on Pendle for 5% discount with a 1 year maturity. This means our savvy trader Anton can buy the entitlement to 100 ETH for the price of 95 ETH. After a year, he will be entitled to claim the full 100 ETH."),(0,i.kt)("p",null,"If Anton decides to exit before the PT matures, he can still sell the discounted ETH, likely at an appreciated value albeit not the full 100 ETH value."),(0,i.kt)("h2",{id:"tutorial"},"Tutorial"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to the ",(0,i.kt)("a",{parentName:"li",href:"https://app.pendle.finance/simple/discounted-assets/"},"Discounts page"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Assets at a Discount",src:n(1463).Z,title:"Assets at a Discount",width:"1999",height:"953"})),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Select your desired asset"),(0,i.kt)("li",{parentName:"ol"},"Choose your asset\u2019s maturity date")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Asset&#39;s maturity date",src:n(2073).Z,title:"Asset's maturity date",width:"1158",height:"430"})),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Enter your transaction amount")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Transaction amount",src:n(9515).Z,title:"Transaction amount",width:"1148",height:"378"})),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"(Advanced) Control your slippage tolerance by clicking the Gear icon in the top right")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Slippage tolerance",src:n(8144).Z,title:"Slippage tolerance",width:"762",height:"350"})),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"Check the details of your transaction")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Transaction details",src:n(1254).Z,title:"Transaction details",width:"1146",height:"300"}),"\n",(0,i.kt)("img",{alt:"Transaction details",src:n(50).Z,title:"Transaction details",width:"1272",height:"352"})),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},"Approve the transaction and Buy Now!")))}p.isMDXComponent=!0},1463:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/assets_at_a_discount-a21e683c7e10fceb304b9b6666bb06b5.png"},2073:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/assets_maturity_date-9117f0db164a376a06af3c8927dc3eb4.png"},5263:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/discount_banner-bf06c2aa34f67628f0aeb721fc3c5aa5.png"},8144:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/slippage_tolerance-e522ef444ed62409d765ee8535b98624.png"},8867:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tokenization_graphic-084a4efcc4219a74aa2cb9ae539ded48.jpg"},9515:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/transaction_amount-0ff97aa612bc3db5c26f1ecc1265980b.png"},1254:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/transaction_details_1-38dd5398de1ca27f3df9d7fdd1aece51.png"},50:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/transaction_details_2-f738d36d4dab17ac855b81f6aa1b19e4.png"}}]);