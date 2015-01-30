!function(t){function e(t,e,n,s){var r=n.lang();return r[t].call?r[t](n,s):r[t][e]}function n(t,e){return function(n){return o(t.call(this,n),e)}}function s(t){return function(e){var n=t.call(this,e);return n+this.lang().ordinal(n)}}function r(t,e,n){this._d=t,this._isUTC=!!e,this._a=t._a||null,this._lang=n||!1}function a(t){var e=this._data={},n=t.years||t.y||0,s=t.months||t.M||0,r=t.weeks||t.w||0,a=t.days||t.d||0,o=t.hours||t.h||0,u=t.minutes||t.m||0,h=t.seconds||t.s||0,d=t.milliseconds||t.ms||0;this._milliseconds=d+1e3*h+6e4*u+36e5*o,this._days=a+7*r,this._months=s+12*n,e.milliseconds=d%1e3,h+=i(d/1e3),e.seconds=h%60,u+=i(h/60),e.minutes=u%60,o+=i(u/60),e.hours=o%24,a+=i(o/24),a+=7*r,e.days=a%30,s+=i(a/30),e.months=s%12,n+=i(s/12),e.years=n,this._lang=!1}function i(t){return 0>t?Math.ceil(t):Math.floor(t)}function o(t,e){for(var n=t+"";n.length<e;)n="0"+n;return n}function u(t,e,n){var s,r=e._milliseconds,a=e._days,i=e._months;r&&t._d.setTime(+t+r*n),a&&t.date(t.date()+a*n),i&&(s=t.date(),t.date(1).month(t.month()+i*n).date(Math.min(s,t.daysInMonth())))}function h(t){return"[object Array]"===Object.prototype.toString.call(t)}function d(t,e){var n,s=Math.min(t.length,e.length),r=Math.abs(t.length-e.length),a=0;for(n=0;s>n;n++)~~t[n]!==~~e[n]&&a++;return a+r}function c(t,e,n,s){var r,a,i=[];for(r=0;7>r;r++)i[r]=t[r]=null==t[r]?2===r?1:0:t[r];return t[7]=i[7]=e,null!=t[8]&&(i[8]=t[8]),t[3]+=n||0,t[4]+=s||0,a=new Date(0),e?(a.setUTCFullYear(t[0],t[1],t[2]),a.setUTCHours(t[3],t[4],t[5],t[6])):(a.setFullYear(t[0],t[1],t[2]),a.setHours(t[3],t[4],t[5],t[6])),a._a=i,a}function f(t,e){var n,s,r=[];for(!e&&x&&(e=require("./lang/"+t)),n=0;n<A.length;n++)e[A[n]]=e[A[n]]||H.en[A[n]];for(n=0;12>n;n++)s=k([2e3,n]),r[n]=new RegExp("^"+(e.months[n]||e.months(s,""))+"|^"+(e.monthsShort[n]||e.monthsShort(s,"")).replace(".",""),"i");return e.monthsParse=e.monthsParse||r,H[t]=e,e}function l(t){var e="string"==typeof t&&t||t&&t._lang||null;return e?H[e]||f(e):k}function m(t){return t.match(/\[.*\]/)?t.replace(/^\[|\]$/g,""):t.replace(/\\/g,"")}function y(t){var e,n,s=t.match(U);for(e=0,n=s.length;n>e;e++)s[e]=ee[s[e]]?ee[s[e]]:m(s[e]);return function(r){var a="";for(e=0;n>e;e++)a+="function"==typeof s[e].call?s[e].call(r,t):s[e];return a}}function _(t,e){function n(e){return t.lang().longDateFormat[e]||e}for(var s=5;s--&&O.test(e);)e=e.replace(O,n);return Q[e]||(Q[e]=y(e)),Q[e](t)}function D(t){switch(t){case"DDDD":return J;case"YYYY":return N;case"S":case"SS":case"SSS":case"DDD":return E;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":case"a":case"A":return $;case"Z":case"ZZ":return j;case"T":return I;case"MM":case"DD":case"YY":case"HH":case"hh":case"mm":case"ss":case"M":case"D":case"d":case"H":case"h":case"m":case"s":return W;default:return new RegExp(t.replace("\\",""))}}function M(t,e,n,s){var r,a;switch(t){case"M":case"MM":n[1]=null==e?0:~~e-1;break;case"MMM":case"MMMM":for(r=0;12>r;r++)if(l().monthsParse[r].test(e)){n[1]=r,a=!0;break}a||(n[8]=!1);break;case"D":case"DD":case"DDD":case"DDDD":null!=e&&(n[2]=~~e);break;case"YY":n[0]=~~e+(~~e>70?1900:2e3);break;case"YYYY":n[0]=~~Math.abs(e);break;case"a":case"A":s.isPm="pm"===(e+"").toLowerCase();break;case"H":case"HH":case"h":case"hh":n[3]=~~e;break;case"m":case"mm":n[4]=~~e;break;case"s":case"ss":n[5]=~~e;break;case"S":case"SS":case"SSS":n[6]=~~(1e3*("0."+e));break;case"Z":case"ZZ":s.isUTC=!0,r=(e+"").match(B),r&&r[1]&&(s.tzh=~~r[1]),r&&r[2]&&(s.tzm=~~r[2]),r&&"+"===r[0]&&(s.tzh=-s.tzh,s.tzm=-s.tzm)}null==e&&(n[8]=!1)}function g(t,e){var n,s,r=[0,0,1,0,0,0,0],a={tzh:0,tzm:0},i=e.match(U);for(n=0;n<i.length;n++)s=(D(i[n]).exec(t)||[])[0],s&&(t=t.slice(t.indexOf(s)+s.length)),ee[i[n]]&&M(i[n],s,r,a);return a.isPm&&r[3]<12&&(r[3]+=12),a.isPm===!1&&12===r[3]&&(r[3]=0),c(r,a.isUTC,a.tzh,a.tzm)}function p(t,e){var n,s,a,i,o,u=t.match(P)||[],h=99;for(a=0;a<e.length;a++)i=g(t,e[a]),s=_(new r(i),e[a]).match(P)||[],o=d(u,s),h>o&&(h=o,n=i);return n}function Y(t){var e,n="YYYY-MM-DDT";if(R.exec(t)){for(e=0;4>e;e++)if(V[e][1].exec(t)){n+=V[e][0];break}return j.exec(t)?g(t,n+" Z"):g(t,n)}return new Date(t)}function T(t,e,n,s,r){var a=r.relativeTime[t];return"function"==typeof a?a(e||1,!!n,t,s):a.replace(/%d/i,e||1)}function v(t,e,n){var s=b(Math.abs(t)/1e3),r=b(s/60),a=b(r/60),i=b(a/24),o=b(i/365),u=45>s&&["s",s]||1===r&&["m"]||45>r&&["mm",r]||1===a&&["h"]||22>a&&["hh",a]||1===i&&["d"]||25>=i&&["dd",i]||45>=i&&["M"]||345>i&&["MM",b(i/30)]||1===o&&["y"]||["yy",o];return u[2]=e,u[3]=t>0,u[4]=n,T.apply({},u)}function w(t,e){k.fn[t]=function(t){var n=this._isUTC?"UTC":"";return null!=t?(this._d["set"+n+e](t),this):this._d["get"+n+e]()}}function S(t){k.duration.fn[t]=function(){return this._data[t]}}function F(t,e){k.duration.fn["as"+t]=function(){return+this/e}}for(var k,z,L="1.7.2",b=Math.round,H={},C="en",x="undefined"!=typeof module&&module.exports,A="months|monthsShort|weekdays|weekdaysShort|weekdaysMin|longDateFormat|calendar|relativeTime|ordinal|meridiem".split("|"),Z=/^\/?Date\((\-?\d+)/i,U=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|zz?|ZZ?|.)/g,O=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?)/g,P=/([0-9a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)/gi,W=/\d\d?/,E=/\d{1,3}/,J=/\d{3}/,N=/\d{1,4}/,$=/[0-9a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+/i,j=/Z|[\+\-]\d\d:?\d\d/i,I=/T/i,R=/^\s*\d{4}-\d\d-\d\d(T(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/,q="YYYY-MM-DDTHH:mm:ssZ",V=[["HH:mm:ss.S",/T\d\d:\d\d:\d\d\.\d{1,3}/],["HH:mm:ss",/T\d\d:\d\d:\d\d/],["HH:mm",/T\d\d:\d\d/],["HH",/T\d\d/]],B=/([\+\-]|\d\d)/gi,G="Month|Date|Hours|Minutes|Seconds|Milliseconds".split("|"),K={Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6},Q={},X="DDD w M D d".split(" "),te="M D H h m s w".split(" "),ee={M:function(){return this.month()+1},MMM:function(t){return e("monthsShort",this.month(),this,t)},MMMM:function(t){return e("months",this.month(),this,t)},D:function(){return this.date()},DDD:function(){var t=new Date(this.year(),this.month(),this.date()),e=new Date(this.year(),0,1);return~~((t-e)/864e5+1.5)},d:function(){return this.day()},dd:function(t){return e("weekdaysMin",this.day(),this,t)},ddd:function(t){return e("weekdaysShort",this.day(),this,t)},dddd:function(t){return e("weekdays",this.day(),this,t)},w:function(){var t=new Date(this.year(),this.month(),this.date()-this.day()+5),e=new Date(t.getFullYear(),0,4);return~~((t-e)/864e5/7+1.5)},YY:function(){return o(this.year()%100,2)},YYYY:function(){return o(this.year(),4)},a:function(){return this.lang().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.lang().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return~~(this.milliseconds()/100)},SS:function(){return o(~~(this.milliseconds()/10),2)},SSS:function(){return o(this.milliseconds(),3)},Z:function(){var t=-this.zone(),e="+";return 0>t&&(t=-t,e="-"),e+o(~~(t/60),2)+":"+o(~~t%60,2)},ZZ:function(){var t=-this.zone(),e="+";return 0>t&&(t=-t,e="-"),e+o(~~(10*t/6),4)}};X.length;)z=X.pop(),ee[z+"o"]=s(ee[z]);for(;te.length;)z=te.pop(),ee[z+z]=n(ee[z],2);for(ee.DDDD=n(ee.DDD,3),k=function(e,n){if(null===e||""===e)return null;var s,a;return k.isMoment(e)?new r(new Date(+e._d),e._isUTC,e._lang):(n?s=h(n)?p(e,n):g(e,n):(a=Z.exec(e),s=e===t?new Date:a?new Date(+a[1]):e instanceof Date?e:h(e)?c(e):"string"==typeof e?Y(e):new Date(e)),new r(s))},k.utc=function(t,e){return h(t)?new r(c(t,!0),!0):("string"==typeof t&&!j.exec(t)&&(t+=" +0000",e&&(e+=" Z")),k(t,e).utc())},k.unix=function(t){return k(1e3*t)},k.duration=function(t,e){var n,s=k.isDuration(t),r="number"==typeof t,i=s?t._data:r?{}:t;return r&&(e?i[e]=t:i.milliseconds=t),n=new a(i),s&&(n._lang=t._lang),n},k.humanizeDuration=function(t,e,n){return k.duration(t,e===!0?null:e).humanize(e===!0?!0:n)},k.version=L,k.defaultFormat=q,k.lang=function(t,e){var n;if(!t)return C;if((e||!H[t])&&f(t,e),H[t]){for(n=0;n<A.length;n++)k[A[n]]=H[t][A[n]];k.monthsParse=H[t].monthsParse,C=t}},k.langData=l,k.isMoment=function(t){return t instanceof r},k.isDuration=function(t){return t instanceof a},k.lang("en",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},meridiem:function(t,e,n){return t>11?n?"pm":"PM":n?"am":"AM"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinal:function(t){var e=t%10;return 1===~~(t%100/10)?"th":1===e?"st":2===e?"nd":3===e?"rd":"th"}}),k.fn=r.prototype={clone:function(){return k(this)},valueOf:function(){return+this._d},unix:function(){return Math.floor(+this._d/1e3)},toString:function(){return this._d.toString()},toDate:function(){return this._d},toArray:function(){var t=this;return[t.year(),t.month(),t.date(),t.hours(),t.minutes(),t.seconds(),t.milliseconds(),!!this._isUTC]},isValid:function(){return this._a?null!=this._a[8]?!!this._a[8]:!d(this._a,(this._a[7]?k.utc(this._a):k(this._a)).toArray()):!isNaN(this._d.getTime())},utc:function(){return this._isUTC=!0,this},local:function(){return this._isUTC=!1,this},format:function(t){return _(this,t?t:k.defaultFormat)},add:function(t,e){var n=e?k.duration(+e,t):k.duration(t);return u(this,n,1),this},subtract:function(t,e){var n=e?k.duration(+e,t):k.duration(t);return u(this,n,-1),this},diff:function(t,e,n){var s,r=this._isUTC?k(t).utc():k(t).local(),a=6e4*(this.zone()-r.zone()),i=this._d-r._d-a,o=this.year()-r.year(),u=this.month()-r.month(),h=this.date()-r.date();return s="months"===e?12*o+u+h/30:"years"===e?o+(u+h/30)/12:"seconds"===e?i/1e3:"minutes"===e?i/6e4:"hours"===e?i/36e5:"days"===e?i/864e5:"weeks"===e?i/6048e5:i,n?s:b(s)},from:function(t,e){return k.duration(this.diff(t)).lang(this._lang).humanize(!e)},fromNow:function(t){return this.from(k(),t)},calendar:function(){var t=this.diff(k().sod(),"days",!0),e=this.lang().calendar,n=e.sameElse,s=-6>t?n:-1>t?e.lastWeek:0>t?e.lastDay:1>t?e.sameDay:2>t?e.nextDay:7>t?e.nextWeek:n;return this.format("function"==typeof s?s.apply(this):s)},isLeapYear:function(){var t=this.year();return 0===t%4&&0!==t%100||0===t%400},isDST:function(){return this.zone()<k([this.year()]).zone()||this.zone()<k([this.year(),5]).zone()},day:function(t){var e=this._isUTC?this._d.getUTCDay():this._d.getDay();return null==t?e:this.add({d:t-e})},startOf:function(t){switch(t.replace(/s$/,"")){case"year":this.month(0);case"month":this.date(1);case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return this},endOf:function(t){return this.startOf(t).add(t.replace(/s?$/,"s"),1).subtract("ms",1)},sod:function(){return this.clone().startOf("day")},eod:function(){return this.clone().endOf("day")},zone:function(){return this._isUTC?0:this._d.getTimezoneOffset()},daysInMonth:function(){return k.utc([this.year(),this.month()+1,0]).date()},lang:function(e){return e===t?l(this):(this._lang=e,this)}},z=0;z<G.length;z++)w(G[z].toLowerCase(),G[z]);w("year","FullYear"),k.duration.fn=a.prototype={weeks:function(){return i(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+2592e6*this._months},humanize:function(t){var e=+this,n=this.lang().relativeTime,s=v(e,!t,this.lang()),r=0>=e?n.past:n.future;return t&&(s="function"==typeof r?r(s):r.replace(/%s/i,s)),s},lang:k.fn.lang};for(z in K)K.hasOwnProperty(z)&&(F(z,K[z]),S(z.toLowerCase()));F("Weeks",6048e5),x&&(module.exports=k),"undefined"==typeof ender&&(this.moment=k),"function"==typeof define&&define.amd&&define("moment",[],function(){return k})}.call(this);;