window.dapi=function(){function a(){l("connected"),f(),g()}function b(){var a=document.getElementsByTagName("canvas")[0];a&&c(a),c(document.body)}function c(a){a.addEventListener("touchstart",function(a){ca=a},!0),a.addEventListener("touchend",function(a){null==ca&&(ca=a)},!0)}function d(){window.onAFReady=function(a){Y=a},function(a,b,c){var d,e=a.getElementsByTagName(b)[0];a.getElementById(c)||(d=a.createElement(b),d.id=c,d.src=ba,e.parentNode.insertBefore(d,e))}(document,"script","AppsFlyer-jssdk")}function e(a){fa.postMessage(a)}function f(){fa.init(function(a){j(a)})}function g(){x(ka.getDapiData,{})}function h(a){var b=ea.version;ea=a,ea.version=b,!da&&ea.adData&&(da=!0,ea.adData.isAFAd&&d())}function i(a){w(a)}function j(a){a=fa.parseMessage(a);var b=a.name,c=a.data;k(b).call(null,c)}function k(a){return ha[a]||ha["default"]}function l(a,b){return!!a&&(e({name:a,data:b||{}}),!0)}function m(a){a=a||{},y(ia.failToCloseAd,a)}function n(a){y(ia.assetLoaded,a)}function o(){(ea.adData.isAFAd||ea.adData.shouldExtractXYCoordinates)&&b(),y(ia.ready)}function p(a){a=a||{},y(ia.viewableChange,a)}function q(a){a=a||{},y(ia.timeUpdate,a.timeElapsed)}function r(a){a=a||{},y(ia.closeButtonVisibilityChange,a.isCloseButtonVisible)}function s(){y(ia.audioVolumeChange,ea.audioVolume)}function t(a){a=a||{},y(ia.adResized,a)}function u(){y(ia.adRewarded,{})}function v(){return+new Date+""+Math.random()}function w(a){if(!ga.isObject(a)||!a.id)return!1;var b=Z[a.id];delete Z[a.id],ga.isFunction(b)&&b(a.callbackData)}function x(a,arguments,b){if(!ga.isString(a)||!a.length)return!1;var c=null;if(b){if(!ga.isFunction(b))return!1;c=v(),Z[c]=b}return l(a,{id:c,arguments:arguments}),!0}function y(a,b){var c=$[a];if(c){ga.isDefined(b)&&(b=[b]);for(var d=0;d<c.length;d++)c[d].apply(null,b)}}function z(a,b){return!(!ga.isFunction(b)||!ga.isString(a))&&void($[a]?$[a].push(b):$[a]=[b])}function A(a,b){var c;ga.isString(a)&&ga.isDefined($[a])&&(ga.isDefined(b)?(c=$[a].indexOf(b),c>-1&&($[a].splice(c,1),0===$[a].length&&delete $[a])):delete $[a])}function B(){x(ka.replay,{})}function C(){x(ka.close,{})}function D(a,b,c){x(ka.open,{url:a,params:b||{}},c||null)}function E(a){x(ka.useCustomClose,{useCustomClose:a})}function F(a){a.token=Y&&Y.hasOwnProperty("getToken")&&null!==ca?Y.getToken(ca):aa}function G(a,b){x(ka.openStoreUrl,a,b||null)}function H(a){ca&&ca.touches&&ca.touches[0]&&ca.touches[0].screenX&&ca.touches[0].screenY&&(a.screenX=ca.touches[0].screenX,a.screenY=ca.touches[0].screenY)}function I(a,b){var c=a||{};ea.adData.isAFAd&&F(c),ea.adData.shouldExtractXYCoordinates&&H(c),G(c,b)}function J(a,b){null==ca?setTimeout(function(){I(a,b)},0):I(a,b)}function K(){return"ready"==ea.state}function L(){return ea.version}function M(){return ea.isViewable}function N(){return ea.deviceData}function O(){return ea.adData}function P(){return ea.appData}function Q(){return ea.audioVolume}function R(){return ea.screenSize}function S(){return ea.adData.timeData}function T(){return ea.adData.isCloseButtonVisible}function U(){x(ka.reward,{})}function V(){return ea.creativeAssets}function W(a){x(ka.notifyAssetFailed,a||{})}function X(a,b){var c={eventName:a,data:b||{}};x(ka.triggerEvent,c)}var Y,Z={},$={},_={communicationPrefix:"connection."},aa="EMPTY_TOKEN",ba="https://fvalid.appsflyer.com/ironsource/cp.sdk.1.2.5.js",ca=null,da=!1,ea={version:"1.0.18",audioVolume:0,screenSize:{},deviceData:{},state:"loading",isViewable:!1,creativeAssets:{}};_.dapiEvents={stateChange:"stateChange",adRewarded:"adRewarded",ready:"ready",viewableChange:"viewableChange",timeUpdate:"timeUpdate",closeButtonVisibilityChange:"closeButtonVisibilityChange",audioVolumeChange:"audioVolumeChange",adResized:"adResized",failToCloseAd:"failToCloseAd",assetLoaded:"assetLoaded"},_.connectionEvents={adRewarded:_.communicationPrefix+"adRewarded",ready:_.communicationPrefix+"ready",adResized:_.communicationPrefix+"adResized",viewableChange:_.communicationPrefix+"viewableChange",timeUpdate:_.communicationPrefix+"timeUpdate",closeButtonVisibilityChange:_.communicationPrefix+"closeButtonVisibilityChange",audioVolumeChange:_.communicationPrefix+"audioVolumeChange",updateDapiData:_.communicationPrefix+"updateDapiData",handleFunctionCallback:_.communicationPrefix+"handleFunctionCallback",failToCloseAd:_.communicationPrefix+"failToCloseAd",assetLoaded:_.communicationPrefix+"assetLoaded"},_.connectionFunctions={open:_.communicationPrefix+"open",openStoreUrl:_.communicationPrefix+"openStoreUrl",close:_.communicationPrefix+"close",replay:_.communicationPrefix+"replay",useCustomClose:_.communicationPrefix+"useCustomClose",reward:_.communicationPrefix+"reward",getDapiData:_.communicationPrefix+"getDapiData",triggerEvent:_.communicationPrefix+"triggerEvent",notifyAssetFailed:_.communicationPrefix+"notifyAssetFailed"};var fa=function(){var a="$$",b="DAPI_SERVICE:",c="DAPI_AD:";return{init:function(a){window.addEventListener("message",a,!1)},formatMessage:function(a){return"$$"+c+JSON.stringify(a)},postMessage:function(a){a=this.formatMessage(a),window.parent.postMessage(a,"*")},parseMessage:function(c){var d=c.data,e=d.indexOf(a+b);if(e!==-1){var f=d.slice(e+a.length);return this.getParams(f)}return{}},getParams:function(a){var c,d=[],e=a.split("/"),f=e.length;if(a.indexOf(b)===-1){if(f>=2&&f%2===0)for(c=0;c<f;c+=2)d[e[c]]=e.length>=c+1?decodeURIComponent(e[c+1]):null}else{var g=a.split(b);"undefined"!=typeof g[1]&&(d=JSON&&JSON.parse(g[1]))}return d}}}(),ga=function(){function a(a,b){return typeof a===b}function b(b){return a(b,"object")}function c(b){return a(b,"string")}function d(b){return a(b,"function")}function e(b){return!a(b,"undefined")}function f(a){return Array.isArray(a)}return{isObject:b,isString:c,isFunction:d,isDefined:e,isArray:f}}(),ha={"default":function(){}},ia=_.dapiEvents,ja=_.connectionEvents,ka=_.connectionFunctions;ha[ja.updateDapiData]=h,ha[ja.ready]=o,ha[ja.adRewarded]=u,ha[ja.adResized]=t,ha[ja.viewableChange]=p,ha[ja.timeUpdate]=q,ha[ja.closeButtonVisibilityChange]=r,ha[ja.audioVolumeChange]=s,ha[ja.handleFunctionCallback]=i,ha[ja.failToCloseAd]=m,ha[ja.assetLoaded]=n,a();var la={replay:B,close:C,open:D,isReady:K,useCustomClose:E,addEventListener:z,removeEventListener:A,openStoreUrl:J,getVersion:L,getDeviceData:N,getAdData:O,getAppData:P,getScreenSize:R,isViewable:M,reward:U,triggerEvent:X,getAudioVolume:Q,getTimeData:S,isCloseButtonVisible:T,getCreativeAssets:V,notifyAssetFailed:W};return la}();
//# sourceMappingURL=dapi.js.map