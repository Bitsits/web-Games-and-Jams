(function() {
var _UDS_CONST_LOCALE = 'en';
var _UDS_CONST_SHORT_DATE_PATTERN = 'MDY'; 
var _UDS_MSG_SEARCHER_IMAGE = ('Image'); 
var _UDS_MSG_SEARCHER_WEB = ('Web'); 
var _UDS_MSG_SEARCHER_BLOG = ('Blog'); 
var _UDS_MSG_SEARCHER_VIDEO = ('Video'); 
var _UDS_MSG_SEARCHER_LOCAL = ('Local'); 
var _UDS_MSG_SEARCHCONTROL_SAVE = ('save'); 
var _UDS_MSG_SEARCHCONTROL_KEEP = ('keep'); 
var _UDS_MSG_SEARCHCONTROL_INCLUDE = ('include'); 
var _UDS_MSG_SEARCHCONTROL_COPY = ('copy'); 
var _UDS_MSG_SEARCHCONTROL_CLOSE = ('close'); 
var _UDS_MSG_SEARCHCONTROL_SPONSORED_LINKS = ('Sponsored Links'); 
var _UDS_MSG_SEARCHCONTROL_SEE_MORE = ('see more...'); 
var _UDS_MSG_SEARCHCONTROL_WATERMARK = ('clipped from Google'); 
var _UDS_MSG_SEARCHER_CONFIG_SET_LOCATION = ('Search location'); 
var _UDS_MSG_SEARCHER_CONFIG_DISABLE_ADDRESS_LOOKUP = ('Disable address lookup'); 
var _UDS_MSG_SEARCHER_NEWS = ('News'); 
function _UDS_MSG_MINUTES_AGO(AGE_MINUTES_AGO) {return ('' + AGE_MINUTES_AGO + ' minutes ago');} 
var _UDS_MSG_ONE_HOUR_AGO = ('1 hour ago'); 
function _UDS_MSG_HOURS_AGO(AGE_HOURS_AGO) {return ('' + AGE_HOURS_AGO + ' hours ago');} 
function _UDS_MSG_NEWS_ALL_N_RELATED(NUMBER) {return ('all ' + NUMBER + ' related');} 
var _UDS_MSG_NEWS_RELATED = ('Related Articles'); 
var _UDS_MSG_BRANDING_STRING = ('powered by Google'); 
var _UDS_MSG_SORT_BY_DATE = ('Sort by date'); 
var _UDS_MSG_MONTH_ABBR_JAN = ('Jan'); 
var _UDS_MSG_MONTH_ABBR_FEB = ('Feb'); 
var _UDS_MSG_MONTH_ABBR_MAR = ('Mar'); 
var _UDS_MSG_MONTH_ABBR_APR = ('Apr'); 
var _UDS_MSG_MONTH_ABBR_MAY = ('May'); 
var _UDS_MSG_MONTH_ABBR_JUN = ('Jun'); 
var _UDS_MSG_MONTH_ABBR_JUL = ('Jul'); 
var _UDS_MSG_MONTH_ABBR_AUG = ('Aug'); 
var _UDS_MSG_MONTH_ABBR_SEP = ('Sep'); 
var _UDS_MSG_MONTH_ABBR_OCT = ('Oct'); 
var _UDS_MSG_MONTH_ABBR_NOV = ('Nov'); 
var _UDS_MSG_MONTH_ABBR_DEC = ('Dec'); 
var _UDS_MSG_DIRECTIONS = ('directions'); 
var _UDS_MSG_CLEAR_RESULTS = ('clear results'); 
var _UDS_MSG_SHOW_ONE_RESULT = ('show one result'); 
var _UDS_MSG_SHOW_MORE_RESULTS = ('show more results'); 
var _UDS_MSG_SHOW_ALL_RESULTS = ('show all results'); 
var _UDS_MSG_SETTINGS = ('settings'); 
var _UDS_MSG_SEARCH = ('search'); 
var _UDS_MSG_SEARCH_UC = ('Search'); 
var _UDS_MSG_POWERED_BY = ('powered by'); 
function _UDS_MSG_LOCAL_ATTRIBUTION(LOCAL_RESULTS_PROVIDER) {return ('Business listings provided by ' + LOCAL_RESULTS_PROVIDER + '');} 
var _UDS_MSG_SEARCHER_BOOK = ('Book'); 
function _UDS_MSG_FOUND_ON_PAGE(FOUND_ON_PAGE) {return ('Page ' + FOUND_ON_PAGE + '');} 
function _UDS_MSG_TOTAL_PAGE_COUNT(PAGE_COUNT) {return ('' + PAGE_COUNT + ' pages');} 
var _UDS_MSG_SEARCHER_BY = ('by'); 
var _UDS_MSG_SEARCHER_CODE = ('Code'); 
var _UDS_MSG_UNKNOWN_LICENSE = ('Unknown License'); 
var _UDS_MSG_SEARCHER_GSA = ('Search Appliance'); 
var _UDS_MSG_SEARCHCONTROL_MORERESULTS = ('More results'); 
var _UDS_MSG_SEARCHCONTROL_PREVIOUS = ('Previous'); 
var _UDS_MSG_SEARCHCONTROL_NEXT = ('Next'); 
var _UDS_MSG_GET_DIRECTIONS = ('Get directions'); 
var _UDS_MSG_GET_DIRECTIONS_TO_HERE = ('To here'); 
var _UDS_MSG_GET_DIRECTIONS_FROM_HERE = ('From here'); 
var _UDS_MSG_CLEAR_RESULTS_UC = ('Clear results'); 
var _UDS_MSG_SEARCH_THE_MAP = ('search the map'); 
var _UDS_MSG_SCROLL_THROUGH_RESULTS = ('scroll through results'); 
var _UDS_MSG_EDIT_TAGS = ('edit tags'); 
var _UDS_MSG_TAG_THIS_SEARCH = ('tag this search'); 
var _UDS_MSG_SEARCH_STRING = ('search string'); 
var _UDS_MSG_OPTIONAL_LABEL = ('optional label'); 
var _UDS_MSG_DELETE = ('delete'); 
var _UDS_MSG_DELETED = ('deleted'); 
var _UDS_MSG_CANCEL = ('cancel'); 
var _UDS_MSG_UPLOAD_YOUR_VIDEOS = ('upload your own video'); 
var _UDS_MSG_IM_DONE_WATCHING = ('i\047m done watching this'); 
var _UDS_MSG_CLOSE_VIDEO_PLAYER = ('close video player'); 
var _UDS_MSG_NO_RESULTS = ('No Results'); 
var _UDS_MSG_LINKEDCSE_ERROR_RESULTS = ('This Custom Search Engine is loading. Try again in a few seconds.'); 
var _UDS_MSG_COUPONS = ('Coupons'); 
var _UDS_MSG_BACK = ('back'); 
var _UDS_MSG_SUBSCRIBE = ('Subscribe'); 
var _UDS_MSG_SEARCHER_PATENT = ('Patent'); 
var _UDS_MSG_USPAT = ('US Pat.'); 
var _UDS_MSG_USPAT_APP = ('US Pat. App'); 
var _UDS_MSG_PATENT_FILED = ('Filed'); 
var _UDS_MSG_ADS_BY_GOOGLE = ('Ads by Google'); 
var _UDS_MSG_SET_DEFAULT_LOCATION = ('Set default location'); 
var _UDS_MSG_NEWSCAT_TOPSTORIES = ('Top Stories'); 
var _UDS_MSG_NEWSCAT_WORLD = ('World'); 
var _UDS_MSG_NEWSCAT_NATION = ('Nation'); 
var _UDS_MSG_NEWSCAT_BUSINESS = ('Business'); 
var _UDS_MSG_NEWSCAT_SCITECH = ('Sci/Tech'); 
var _UDS_MSG_NEWSCAT_ENTERTAINMENT = ('Entertainment'); 
var _UDS_MSG_NEWSCAT_HEALTH = ('Health'); 
var _UDS_MSG_NEWSCAT_SPORTS = ('Sports'); 
var _UDS_MSG_NEWSCAT_POLITICS = ('Politics');
var c=true,d=null,f=encodeURIComponent,j=google_exportSymbol,k=window,l=google,m=navigator,o=document;function p(a,b){return a.className=b}var q="appendChild",s="push",u="status",v="createElement",w="ServiceBase",x="length",y="prototype",z="className",A="loader",B="feeds",C="CurrentLocale",D="getElementsByTagNameNS",E={};E.blank="&nbsp;";E.image=_UDS_MSG_SEARCHER_IMAGE;E.web=_UDS_MSG_SEARCHER_WEB;E.blog=_UDS_MSG_SEARCHER_BLOG;E.video=_UDS_MSG_SEARCHER_VIDEO;E.local=_UDS_MSG_SEARCHER_LOCAL;
E.news=_UDS_MSG_SEARCHER_NEWS;E.book=_UDS_MSG_SEARCHER_BOOK;E.patent="Patent";E["ads-by-google"]=_UDS_MSG_ADS_BY_GOOGLE;E.cse="Custom Search Control";E.save=_UDS_MSG_SEARCHCONTROL_SAVE;E.keep=_UDS_MSG_SEARCHCONTROL_KEEP;E.include=_UDS_MSG_SEARCHCONTROL_INCLUDE;E.copy=_UDS_MSG_SEARCHCONTROL_COPY;E.close=_UDS_MSG_SEARCHCONTROL_CLOSE;E["sponsored-links"]=_UDS_MSG_SEARCHCONTROL_SPONSORED_LINKS;E["see-more"]=_UDS_MSG_SEARCHCONTROL_SEE_MORE;E.watermark=_UDS_MSG_SEARCHCONTROL_WATERMARK;
E["search-location"]=_UDS_MSG_SEARCHER_CONFIG_SET_LOCATION;E["disable-address-lookup"]=_UDS_MSG_SEARCHER_CONFIG_DISABLE_ADDRESS_LOOKUP;E["sort-by-date"]=_UDS_MSG_SORT_BY_DATE;E.pbg=_UDS_MSG_BRANDING_STRING;E["n-minutes-ago"]=_UDS_MSG_MINUTES_AGO;E["n-hours-ago"]=_UDS_MSG_HOURS_AGO;E["one-hour-ago"]=_UDS_MSG_ONE_HOUR_AGO;E["all-n-related"]=_UDS_MSG_NEWS_ALL_N_RELATED;E["related-articles"]=_UDS_MSG_NEWS_RELATED;E["page-count"]=_UDS_MSG_TOTAL_PAGE_COUNT;var G=[];G[0]=_UDS_MSG_MONTH_ABBR_JAN;G[1]=_UDS_MSG_MONTH_ABBR_FEB;
G[2]=_UDS_MSG_MONTH_ABBR_MAR;G[3]=_UDS_MSG_MONTH_ABBR_APR;G[4]=_UDS_MSG_MONTH_ABBR_MAY;G[5]=_UDS_MSG_MONTH_ABBR_JUN;G[6]=_UDS_MSG_MONTH_ABBR_JUL;G[7]=_UDS_MSG_MONTH_ABBR_AUG;G[8]=_UDS_MSG_MONTH_ABBR_SEP;G[9]=_UDS_MSG_MONTH_ABBR_OCT;G[10]=_UDS_MSG_MONTH_ABBR_NOV;G[11]=_UDS_MSG_MONTH_ABBR_DEC;E["month-abbr"]=G;E.directions=_UDS_MSG_DIRECTIONS;E["clear-results"]=_UDS_MSG_CLEAR_RESULTS;E["show-one-result"]=_UDS_MSG_SHOW_ONE_RESULT;E["show-more-results"]=_UDS_MSG_SHOW_MORE_RESULTS;
E["show-all-results"]=_UDS_MSG_SHOW_ALL_RESULTS;E.settings=_UDS_MSG_SETTINGS;E.search=_UDS_MSG_SEARCH;E["search-uc"]=_UDS_MSG_SEARCH_UC;E["powered-by"]=_UDS_MSG_POWERED_BY;E.sa=_UDS_MSG_SEARCHER_GSA;E.by=_UDS_MSG_SEARCHER_BY;E.code=_UDS_MSG_SEARCHER_CODE;E["unknown-license"]=_UDS_MSG_UNKNOWN_LICENSE;E["more-results"]=_UDS_MSG_SEARCHCONTROL_MORERESULTS;E.previous=_UDS_MSG_SEARCHCONTROL_PREVIOUS;E.next=_UDS_MSG_SEARCHCONTROL_NEXT;E["get-directions"]=_UDS_MSG_GET_DIRECTIONS;E["to-here"]=_UDS_MSG_GET_DIRECTIONS_TO_HERE;
E["from-here"]=_UDS_MSG_GET_DIRECTIONS_FROM_HERE;E["clear-results-uc"]=_UDS_MSG_CLEAR_RESULTS_UC;E["search-the-map"]=_UDS_MSG_SEARCH_THE_MAP;E["scroll-results"]=_UDS_MSG_SCROLL_THROUGH_RESULTS;E["edit-tags"]=_UDS_MSG_EDIT_TAGS;E["tag-search"]=_UDS_MSG_TAG_THIS_SEARCH;E["search-string"]=_UDS_MSG_SEARCH_STRING;E["optional-label"]=_UDS_MSG_OPTIONAL_LABEL;E["delete"]=_UDS_MSG_DELETE;E.deleted=_UDS_MSG_DELETED;E.cancel=_UDS_MSG_CANCEL;E["upload-video"]=_UDS_MSG_UPLOAD_YOUR_VIDEOS;E["im-done"]=_UDS_MSG_IM_DONE_WATCHING;
E["close-player"]=_UDS_MSG_CLOSE_VIDEO_PLAYER;E["no-results"]=_UDS_MSG_NO_RESULTS;E["linked-cse-error-results"]=_UDS_MSG_LINKEDCSE_ERROR_RESULTS;E.back=_UDS_MSG_BACK;E.subscribe=_UDS_MSG_SUBSCRIBE;E["us-pat"]="US Pat.";E["us-pat-app"]="US Pat. App";E["us-pat-filed"]="Filed";var _json_cache_defeater_=(new Date).getTime(),_json_request_require_prep=c;function H(a,b){I("msie")&&aa("msie 6.0")?k.setTimeout(J(this,ba,[a,b]),0):ba(a,b)}
function ba(a,b){var e=o.getElementsByTagName("head")[0];e||(e=o.body.parentNode[q](o[v]("head")));var g=o[v]("script");g.type="text/javascript";g.charset="utf-8";a=_json_request_require_prep?a+"&key="+l[A].ApiKey+"&v="+b:a;if(I("msie")||I("safari")||I("konqueror"))a=a+"&nocache="+_json_cache_defeater_++;g.src=a;var h=function(){g.onload=d;g.parentNode.removeChild(g);delete g};a=function(i){i=(i?i:k.event).target?(i?i:k.event).target:(i?i:k.event).srcElement;if(i.readyState=="loaded"||i.readyState==
"complete"){i.onreadystatechange=d;h()}};if(m.product=="Gecko")g.onload=h;else g.onreadystatechange=a;e[q](g)}function ca(a,b){return function(){return b.apply(a,arguments)}}function J(a,b,e){return function(){return b.apply(a,e)}}function K(a){for(;a.firstChild;)a.removeChild(a.firstChild)}function L(a,b){try{a[q](b)}catch(e){}return b}function M(a,b){var e=o[v]("div");if(a)e.innerHTML=a;if(b)p(e,b);return e}function N(a){var b=o[v]("div");if(a)p(b,a);return b}
function da(a,b,e){(a=a.insertRow(-1))||alert(a);for(var g=0;g<b;g++)P(a,e);return a}function P(a,b){a=a.insertCell(-1);if(b)p(a,b);return a}function ea(a,b){p(a,b)}function Q(a,b){var e;a:{if(!(a==d||a[z]==d)){e=a[z].split(" ");for(var g=0;g<e[x];g++)if(e[g]==b){e=c;break a}}e=false}e||(a.className+=" "+b)}function R(a,b){if(a[z]!=d){for(var e=a[z].split(" "),g=[],h=false,i=0;i<e[x];i++)if(e[i]!=b)e[i]&&g[s](e[i]);else h=c;if(h)p(a,g.join(" "))}}
function I(a){if(a in S)return S[a];return S[a]=m.userAgent.toLowerCase().indexOf(a)!=-1}function aa(a){if(a in T)return T[a];return T[a]=m.appVersion.toLowerCase().indexOf(a)!=-1}var S={},T={},fa,ga;if(k.va){fa=c;if(k.XMLHttpRequest)ga=c}function ha(a){this.G=a+"branding";this.w=a+"branding-vertical";this.wa=a+"branding-img";this.ya=a+"branding-user-defined";this.Q=a+"branding-img-noclear";this.ea=a+"branding-clickable";this.text=a+"branding-text"}
var ia={"zh-CN":{month:" \u6708 ",year:" \u5e74 ",day:" \u65e5 "},"zh-TW":{month:" \u6708 ",year:" \u5e74 ",day:" \u65e5 "},ja:{month:"\u6708",year:"\u5e74",day:"\u65e5"},ko:{month:" \uc6d4 ",year:" \ub144 ",day:" \uc77c "}};
function ja(a,b,e){var g=(new Date).getTime(),h=a.getTime();if(g<h)return E["n-minutes-ago"](2);g=g-h;if(g<36E5){b=Math.floor(g/6E4);b=b<=1?2:b;return E["n-minutes-ago"](b)}if(g<864E5){b=Math.floor(g/36E5);if(b<=1)return E["one-hour-ago"];else{b=b;return E["n-hours-ago"](b)}}g=a.getFullYear();h=a.getMonth();var i=E["month-abbr"][h];a=a.getDate();if(a<10)a="0"+a;switch(b){case "MDY":b=i+" "+a+", "+g;break;case "YMD":if(e&&(e=="zh-CN"||e=="zh-TW"||e=="ja"||e=="ko")){b=ia[e];b=g+b.year+(h+1)+b.month+
a+b.day}else b=g+" "+i+" "+a;break;default:case "DMY":b=a+" "+i+" "+g;break}return b};if(!U)var U=j;if(!V)var V=google_exportProperty;l[B].aa="_top";U("google.feeds.LINK_TARGET_TOP",l[B].aa);l[B].L="_self";U("google.feeds.LINK_TARGET_SELF",l[B].L);l[B].$="_parent";U("google.feeds.LINK_TARGET_PARENT",l[B].$);l[B].Z="_blank";U("google.feeds.LINK_TARGET_BLANK",l[B].Z);l[B].a=function(a){this.O=a;this.V=l[B].a.K;this.n=l[B].a.t;this.S=false};U("google.feeds.Feed",l[B].a);l[B].a.ca=-1;V(l[B].a,"MAX_ENTRIES",l[B].a.ca);l[B].a.K=4;V(l[B].a,"DEFAULT_NUM_ENTRIES",l[B].a.K);l[B].a.F="xml";
V(l[B].a,"XML_FORMAT",l[B].a.F);l[B].a.t="json";V(l[B].a,"JSON_FORMAT",l[B].a.t);l[B].a.C="json_xml";V(l[B].a,"MIXED_FORMAT",l[B].a.C);l[B].a.p=[];l[B].a.s=function(a,b){var e=false,g=d;if(a[x])for(var h=0;h<a[x];h++)if(a[h]==d){a[h]=b;g=h;e=c;break}if(!e){g=a[x];a[s](b)}return g};V(l[B].a,"AllocateCompletionMapContext",l[B].a.s);l[B].a.D=function(a,b,e,g,h){var i=0;if(a)i=parseInt(a,10);a=l[B].a.p[i];l[B].a.p[i]=d;a.I(b,e,g,h)};V(l[B].a,"RawCompletion",l[B].a.D);
l[B].a[y].load=function(a){var b=new l[B].j;b.h=a;b.n=this.n;a=this.pa("google.feeds.Feed.RawCompletion",l[B].a.s(l[B].a.p,b));H(a,l[B].Version)};V(l[B].a[y],"load",l[B].a[y].load);l[B].a[y].pa=function(a,b){a=l[A][w]+"/Gfeeds?callback="+a+"&context="+b+"&num="+this.V+"&hl="+l[B][C]+"&output="+this.n;if(this.O)a+="&q="+f(this.O);if(this.S)a+="&scoring=h";return a};l[B].a[y].q=function(a){this.V=a};V(l[B].a[y],"setNumEntries",l[B].a[y].q);
l[B].a[y].ta=function(a){switch(a){case l[B].a.F:case l[B].a.C:case l[B].a.t:this.n=a;break;default:this.n=l[B].a.t;break}};V(l[B].a[y],"setResultFormat",l[B].a[y].ta);l[B].a[y].R=function(){this.S=c};V(l[B].a[y],"includeHistoricalEntries",l[B].a[y].R);l[B].j=function(){};U("google.feeds.Result",l[B].j);
l[B].j[y].I=function(a,b,e){this.status={code:b};if(e)this[u].message=e;if(b!=200){this.error=this[u];switch(this.n){case l[B].a.F:this.xmlDocument=d;break;case l[B].a.C:this.xmlDocument=d;default:this.feed={};this.feed.entries=[];break}}else{if(a.feed)this.feed=a.feed;a.xmlString&&this.ma(a.xmlString)}this.h&&this.h(this)};
l[B].j[y].ma=function(a){if(a!=d){if(typeof DOMParser!="undefined")a=(new DOMParser).parseFromString(a,"application/xml");else if(typeof ActiveXObject!="undefined"){var b=new ActiveXObject("Microsoft.XMLDOM");b.loadXML(a);a=b}else{a="data:text/xml;charset=utf-8,"+f(a);b=new XMLHttpRequest;b.open("GET",a,false);b.send(d);a=b.responseXML}this.xmlDocument=a;this.ka()}};
l[B].j[y].ka=function(){if(!(this.xmlDocument==d||this.feed==d)){var a=l[B].j.X(this.feed.type);if(a!=d){var b=this.xmlDocument;if(a.e){b=l[B][D](this.xmlDocument,a.l,a.e);if(b==d||b[x]==0)return;b=b[0]}a=l[B][D](b,a.l,a.k);if(!(a==d||a[x]==0))if(a[x]==this.feed.entries[x])for(b=0;b<a[x];b++)this.feed.entries[b].xmlNode=a[b]}}};
l[B].j.X=function(a){var b=d;switch(a){case "rss":case "rss091":case "rss091u":case "rss091n":case "rss092":case "rss093":case "rss094":case "rss20":b={e:"channel",k:"item",l:""};break;case "rss090":b={e:"",k:"item",l:"http://my.netscape.com/rdf/simple/0.9/"};break;case "rss10":b={e:"",k:"item",l:"http://purl.org/rss/1.0/"};break;case "atom03":b={e:"feed",k:"entry",l:"http://purl.org/atom/ns#"};break;case "atom":case "atom10":b={e:"feed",k:"entry",l:"http://www.w3.org/2005/Atom"};break}return b};
l[B].M=1;U("google.feeds.VERTICAL_BRANDING",l[B].M);l[B].Y=2;U("google.feeds.HORIZONTAL_BRANDING",l[B].Y);
l[B].ia=function(a,b,e){var g=b&&b==l[B].M,h=new ha("gf-");b=N(h.G);var i=h.G,r=o[v]("table");r.setAttribute("cellSpacing",0);r.setAttribute("cellPadding",0);if(i)p(r,i);L(b,r);g=!g;if(!g){Q(b,h.w);Q(r,h.w)}var n=da(r,0),t;if(g)t=i=n;else{i=n;t=da(r,0)}var F="/css/small-logo.png",O=51;n=15;if(e)if(typeof e=="string")if(e.match(/^http:\/\/www\.youtube\.com/)){F="/css/youtube-logo-55x24.png";O=55;n=24;Q(b,h.G+"-youtube");if(!g){Q(b,h.w+"-youtube");Q(r,h.w+"-youtube")}}g=P(i,h.text);r=P(t,h.Q);i=M(E["powered-by"],
h.text);F=l[A][w]+F;O=O;n=n;t=h.Q;if(fa&&!ga){t=N(t);t.style.filter='progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+F+'")';t.style.width=O+"px";t.style.height=n+"px"}else{n=o[v]("img");n.src=F;if(t)p(n,t);t=n}n=t;L(g,i);if(e){g="http://www.google.com";if(typeof e=="string"&&(e.match(/^http:\/\/[a-z]*\.google\.com/)||e.match(/^http:\/\/www\.youtube\.com/)))g=e;e=g;g=o[v]("a");g.href=e;g.target="_BLANK";p(g,h.ea);L(g,n);L(r,g)}else L(r,n);if(a){a=typeof a=="string"?o.getElementById(a):a;
K(a);L(a,b)}return b};U("google.feeds.getBranding",l[B].ia);l[B].getElementsByTagNameNS=function(a,b,e){if(b==d)b="";if(a[D])a=a[D](b,e);else{var g=a.getElementsByTagName("*");a=[];for(var h=0;h<g[x];h++){var i=g[h].tagName;i=i.substring(i.lastIndexOf(":")+1);i==e&&g[h].namespaceURI==b&&a[s](g[h])}}return a};U("google.feeds.getElementsByTagNameNS",l[B][D]);j("google.feeds.Strings",E);j("google.feeds.CurrentLocale",_UDS_CONST_LOCALE);j("google.feeds.ShortDatePattern",_UDS_CONST_SHORT_DATE_PATTERN);l[B].ha=function(a,b){var e=new l[B].A;e.h=b;b=l[B].a.s(l[B].a.p,e);b=l[A][w]+"/GfindFeeds?callback=google.feeds.Feed.FindRawCompletion&context="+b+"&hl="+l[B][C];if(a)b+="&q="+f(a);H(b,l[B].Version)};U("google.feeds.findFeeds",l[B].ha);l[B].a.W=l[B].a.D;V(l[B].a,"FindRawCompletion",l[B].a.W);l[B].A=function(){};U("google.feeds.FindResult",l[B].A);
l[B].A[y].I=function(a,b,e){this.status={code:b};if(e)this[u].message=e;if(b!=200){this.error=this[u];this.k=[]}else{if(a.entries)this.entries=a.entries;if(a.query)this.query=a.query}this.h&&this.h(this)};l[B].na=function(a,b){var e=new l[B].B;e.h=b;b=l[B].a.s(l[B].a.p,e);b=l[A][w]+"/GlookupFeed?callback=google.feeds.Feed.LookupRawCompletion&context="+b+"&hl="+l[B][C];if(a)b+="&q="+f(a);H(b,l[B].Version)};U("google.feeds.lookupFeed",l[B].na);l[B].a.ba=l[B].a.D;V(l[B].a,"LookupRawCompletion",l[B].a.ba);l[B].B=function(){};U("google.feeds.LookupResult",l[B].B);
l[B].B[y].I=function(a,b,e){this.status={code:b};if(e)this[u].message=e;if(b!=200){this.error=this[u];this.url=d}else{if(a.url)this.url=a.url;if(a.query)this.query=a.query}this.h&&this.h(this)};l[B].b=function(){this.xa=d;this.d=[];this.U=l[B].L;this.u=l[B].b.z;this.r=this.v=this.m=d};U("google.feeds.FeedControl",l[B].b);l[B].b.o="tabbed";V(l[B].b,"DRAW_MODE_TABBED",l[B].b.o);l[B].b.z="linear";V(l[B].b,"DRAW_MODE_LINEAR",l[B].b.z);l[B].b[y].oa=function(a){if(a.drawMode)if(a.drawMode==l[B].b.o||a.drawMode==l[B].b.z)this.u=a.drawMode};l[B].b[y].da=function(a,b,e){this.d[s](new W(new l[B].a(a),b,this,e))};V(l[B].b[y],"addFeed",l[B].b[y].da);
l[B].b[y].fa=function(a,b){b&&this.oa(b);this.e=N(ka);this.v=N(la);if(this.u==l[B].b.o){this.r=N(ma);L(this.e,this.r);this.c=[];for(b=this.f=0;b<this.d[x];b++){var e={};e.g=M(this.d[b].T);e.i=d;e.g.onclick=J(this,l[B].b[y].ua,[b]);this.c[b]=e;L(this.r,e.g)}}L(this.e,this.v);for(b=0;b<this.d[x];b++){this.d[b].e=N(na);if(this.u==l[B].b.o)this.c[b].i=this.d[b].e;e=N(oa);var g=M(this.d[b].T,pa);L(e,g);this.d[b].J=N(qa);L(this.v,this.d[b].e);L(this.d[b].e,e);L(this.d[b].e,this.d[b].J)}if(this.u==l[B].b.o)for(b=
0;b<this.d[x];b++){Q(this.c[b].g,ra);Q(this.c[b].i,sa);if(b==this.f){Q(this.c[b].g,X);Q(this.c[b].i,Y)}else{Q(this.c[b].g,Z);Q(this.c[b].i,$)}}b=this.e;if(a)try{K(a);a[q](b)}catch(h){}this.qa()};V(l[B].b[y],"draw",l[B].b[y].fa);l[B].b[y].qa=function(){p(this.v,ta);this.r&&ea(this.r,ua);for(var a=0;a<this.d[x];a++){var b=this.d[a];this.m!=d&&b.m==d&&b.P.q(this.m);b.P.load(b.la)}};l[B].b[y].q=function(a){this.m=a};V(l[B].b[y],"setNumEntries",l[B].b[y].q);l[B].b[y].ra=function(a){this.U=a};
V(l[B].b[y],"setLinkTarget",l[B].b[y].ra);l[B].b[y].N=function(a){var b=N(va),e;e=a.link;var g=a.title,h=this.U,i=wa,r=M(d,i),n=o[v]("a");n.href=e;n.innerHTML=g;if(i)p(n,i);if(h)n.target=h;r[q](n);e=r;L(b,e);if(a.author){e=M(E.by+"&nbsp;"+a.author,xa);L(b,e);e="";if(a.publishedDate)e="-";e=M(e,ya);L(b,e)}if(a.publishedDate){e=M(ja(new Date(a.publishedDate),l[B].ShortDatePattern,l[B][C]),za);L(b,e)}e=M(a.contentSnippet,Aa);L(b,e);L(b,e);a.html=b};V(l[B].b[y],"createHtml",l[B].b[y].N);
l[B].b[y].H=function(a,b){var e,g;K(b.J);for(var h=0;h<a.feed.entries[x];h++){e=a.feed.entries[h];e.html||this.N(e);if(e.html){g=N(Ba);e=e.html.cloneNode(c);L(g,e);L(b.J,g)}}};l[B].b[y].ua=function(a){if(this.f!=a){R(this.c[this.f].g,X);R(this.c[this.f].i,Y);Q(this.c[this.f].g,Z);Q(this.c[this.f].i,$);this.f=a;Q(this.c[this.f].g,X);Q(this.c[this.f].i,Y);R(this.c[this.f].g,Z);R(this.c[this.f].i,$)}};
function W(a,b,e,g){this.P=a;this.T=b;this.m=d;if(g){if(g.numEntries){a.q(g.numEntries);this.m=g.numEntries}g.includeHistoricalEntries&&a.R()}this.ga=e;this.la=ca(this,W[y].H)}W[y].H=function(a){a.error||this.ga.H(a,this)};var va="gf-result",ya="gf-spacer",wa="gf-title",Aa="gf-snippet",xa="gf-author",za="gf-relativePublishedDate",ka="gfc-control",na="gfc-resultsRoot",qa="gfc-results",Ba="gfc-result",oa="gfc-resultsHeader",la="gfc-resultsbox-invisible",ta="gfc-resultsbox-visible",pa="gfc-title",ua="gfc-tabsArea",ma="gfc-tabsAreaInvisible",ra="gfc-tabHeader",X="gfc-tabhActive",Z="gfc-tabhInactive",Y="gfc-tabdActive",$="gfc-tabdInactive",sa="gfc-tabData";
google.loader.loaded({"module":"feeds","version":"1.0","components":["default"]});
google.loader.eval.feeds = function() {eval(arguments[0])}})()