!function(t,e){for(var n in e)t[n]=e[n]}(exports,function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=35)}({35:function(t,e,n){const r=n(9);const o=(t,e)=>{for(i=0;i<myCutListLength;i++){if(0==t[i].length)return!0;if(0==t[i].amount)return!0}return 0==e||null==e},l=(t,e)=>{for(myCutListLength=t.length,i=0;i<myCutListLength;i++)if(t[i].length>e)return!0;return!1},u=t=>{for(myCutListLength=t.length,i=0;i<myCutListLength;i++){let e=t[i].length;for(j=0;j<myCutListLength;j++)if(j!=i&&e==t[j].length)return!0}return!1},a=(t,e)=>t.length>e.length?-1:t.length<e.length?1:0;t.exports={start:t=>{let e=t.cutList,n=t.maxCutLength;if(1==u(e))return void console.log("The lengths set for cutting cannot be repeated");if(1==l(e,n))return void console.log("At least one of the cutting lengths exceeds the specified material length");if(1==o(e,n))return void console.log("Lengths and quantities cannot be equal zero");e=e.sort(a);return r.algorithm(e,n)}}},9:function(t,e){const n=(t,e,n)=>{let r=t.length,o=e.length,l=0,i=0,u="",a="\n";for(let e=0;e<r;e++){a=a+""+t[e].length+" x "+t[e].amount+" pcs.\n",l+=t[e].length*t[e].amount;for(let n=0;n<t[e].amount;n++)u=u+t[e].length+","}let s,f=0,g=0,c=0,h=0,p=0,d="",m="";for(let t=0;t<o;t++){let r="";f=0,g=0;for(let n=0;n<Object.keys(e[t]).length;n++)g+=e[t][n],r=r+""+e[t][n]+", ",i+=e[t][n];f=n-g,c+=f,h+=g,p++,p=t<9?"0"+p:t+1,d=d+"\n"+p+") "+r+" = "+g+": waste = "+f+";"}return s=c/h*100,p<=9&&(p=p.substring(1,p.length)),m="Length of material to be cut:\n"+n+"\n\nOrder:"+a+"\nMaterial loss per cut is not counted!\nCutting:"+d+("\n\nTotal material required: "+n+" x "+p+" pcs. = "+n*p+"\nTotal waste: "+c+" ("+parseFloat(s).toPrecision(4)+"%)"),m};t.exports={algorithm:(t,e)=>{let r,o,l=t.length,i=[],u=0,a=[];for(r=0;r<l;r++)for(u=0,o=0;o<t[r].amount;)null==a[u]&&(a[u]=0),a[u]+t[r].length<=e?(i[u]=Array.prototype.concat(i[u],t[r].length),null==i[u][0]&&i[u].shift(),a[u]=a[u]+t[r].length,o++):u++;const s=n(t,i,e);return console.log("resultStr aea: ",s),s}}}}));