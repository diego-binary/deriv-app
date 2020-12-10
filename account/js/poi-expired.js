/*! For license information please see poi-expired.js.LICENSE.txt */
!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("@deriv/components"),require("@deriv/shared"),require("@deriv/translations"),require("react")):"function"==typeof define&&define.amd?define(["@deriv/components","@deriv/shared","@deriv/translations","react"],n):"object"==typeof exports?exports["@deriv/account"]=n(require("@deriv/components"),require("@deriv/shared"),require("@deriv/translations"),require("react")):e["@deriv/account"]=n(e["@deriv/components"],e["@deriv/shared"],e["@deriv/translations"],e.react)}(window,(function(e,n,t,r){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/",t(t.s="./Components/poi-expired/index.js")}({"../../../node_modules/classnames/index.js":function(e,n,t){var r;!function(){"use strict";var t={}.hasOwnProperty;function o(){for(var e=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&e.push(i)}else if("object"===a)for(var s in r)t.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(n,[]))||(e.exports=r)}()},"./Components/icon-message-content/index.js":function(e,n,t){"use strict";t.r(n);var r=t("react"),o=t.n(r),a=t("../../../node_modules/classnames/index.js"),i=t.n(a),s=t("@deriv/components"),c=t("@deriv/shared");function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var l=function(e){var n=e.className,t=e.children,r=e.icon,a=e.icon_row,l=e.message,d=e.text;return o.a.createElement(s.Div100vhContainer,{className:"account-management__message-wrapper",is_disabled:Object(c.isDesktop)(),height_offset:"110px"},o.a.createElement("div",{className:i()("account-management__message-content",u({},"".concat(n,"__message-content"),n))},r&&o.a.createElement("div",{className:i()("account-management__message-icon",u({},"".concat(n,"__message-icon"),n))},r),a&&o.a.createElement("div",null,a),o.a.createElement("div",{className:i()("account-management__message",u({},"".concat(n,"__message"),n))},l),d&&o.a.createElement("div",{className:"account-management__text-container"},o.a.createElement(s.Text,{className:i()(u({},"".concat(n,"__text"),n)),as:"p",size:"xs",align:"center"},d)),t))};n.default=l},"./Components/poi-expired/index.js":function(e,n,t){"use strict";t.r(n);var r=t("@deriv/components"),o=t("@deriv/translations"),a=t("react"),i=t.n(a),s=t("./Components/icon-message-content/index.js");n.default=function(){return i.a.createElement(s.default,{message:Object(o.localize)("New proof of identity document needed"),text:i.a.createElement(o.Localize,{i18n_default_text:"Kindly send a scan of a valid proof of identity to <0>support@deriv.com</0>",components:[i.a.createElement("a",{key:0,className:"link link--orange",rel:"noopener noreferrer",target:"_blank",href:"mailto:support@deriv.com"})]}),icon:i.a.createElement(r.Icon,{icon:"IcPoiUpload",size:128})})}},"@deriv/components":function(n,t){n.exports=e},"@deriv/shared":function(e,t){e.exports=n},"@deriv/translations":function(e,n){e.exports=t},react:function(e,n){e.exports=r}}).default}));
//# sourceMappingURL=poi-expired.js.map