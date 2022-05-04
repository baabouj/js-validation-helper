const e={email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase()),phone:e=>/^\+?[0-9]{10,12}$/.test(e),url:e=>/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(e),length:(e,t)=>e.length===parseInt(t),min:(e,t)=>e.length>=parseInt(t),max:(e,t)=>e.length<=parseInt(t),required(e){return!this.empty(e)},empty:e=>null==e||""===e,number:e=>"number"==typeof e,boolean:e=>"boolean"==typeof e,string:e=>"string"==typeof e,array:e=>Array.isArray(e),object:e=>"object"==typeof e,function:e=>"function"==typeof e,null:e=>null===e,undefined:e=>void 0===e,in:(e,t)=>t.split(",").includes(e),nin:(e,t)=>!t.split(",").includes(e),eq:(e,t)=>e==t,neq:(e,t)=>e!=t,gt:(e,t)=>e>t,gte:(e,t)=>e>=t,lt:(e,t)=>e<t,lte:(e,t)=>e<=t,between(e,t){const[i,s]=t.split(",");return e>=i&&e<=s},contains:(e,t)=>e.includes(t),sw:(e,t)=>e.startsWith(t),ew:(e,t)=>e.endsWith(t),regex:(e,t)=>new RegExp(t).test(e),not(e,t,i){return!this[t](e,i)}},t={email:"This field must be a valid email",phone:"This field must be a valid phone number",url:"This field must be a valid url",length:"This field must be of length {0}",between:"This field must be between {0}",min:"This field must be at least of length {0}",max:"This field must be at most of length {0}",required:"This field is required",empty:"This field must be empty",number:"This field must be a number",boolean:"This field must be a boolean",string:"This field must be a string",array:"This field must be an array",object:"This field must be an object",function:"This field must be a function",null:"This field must be null",undefined:"This field must be undefined",in:"This field must be one of {0}",nin:"This field must not be one of {0}",eq:"This field must be equal to {0}",neq:"This field must not be equal to {0}",gt:"This field must be greater than {0}",gte:"This field must be greater than or equal to {0}",lt:"This field must be less than {0}",lte:"This field must be less than or equal to {0}",contains:"This field must contain {0}",sw:"This field must start with {0}",ew:"This field must end with {0}",regex:"This field must match the regex {0}",not:"This field must not be {0}"},i=(i,s)=>{let n=[];return e.array(s)||(s=s.split("|")),s.forEach((s=>{let[l,r]=e.array(s)?s:[s,t[s]];const[u,...a]=l.split(":");((t,i,...s)=>{if(!e[i])throw new Error(`Rule '${i}' does not exist`);return e[i](t,...s)})(i,u,...a)||(r||(r=t[u],a.forEach(((e,t)=>{r=r.replace(`{${t}}`,e)}))),n.push(r))})),n.length?n:null},s=(e,t)=>{let s={};for(let n in t){const l=i(e[n],t[n]);l&&(s[n]=l)}return Object.keys(s).length?s:null};export{i as check,s as validate};