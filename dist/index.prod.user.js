// ==UserScript==
// @name          userscript-macaw-unit4
// @description   Unit4 enhancements - will enhance the user interface and add some new features (macaw Unit4 only)
// @namespace     https://ubw.unit4cloud.com/
// @version       0.10.8
// @author        Carsten Wilhelm <carsten.wilhelm@macaw.net>
// @source        https://github.com/macaw-cad/tampermonkey-unit4
// @license       MIT
// @match         https://ubw.unit4cloud.com/*
// @match         https://ubw-preview.unit4cloud.com/*
// @run-at        document-end
// ==/UserScript==

/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js"
(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js"
(module) {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
(module) {



module.exports = function (i) {
  return i[1];
};

/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/index.less"
(module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 xml:space=%27preserve%27 viewBox=%270 0 569.613 569.614%27%3E%3Cpath d=%27m371.49 563.638 113.052-65.854a22.954 22.954 0 0 0 10.64-13.975c1.555-5.888.701-12.148-2.359-17.405l-30.769-52.807c4.789-6.524 9.083-13.115 12.972-19.918 3.893-6.799 7.405-13.84 10.606-21.275l61.114-.221c6.086-.021 11.915-2.464 16.202-6.781 4.287-4.32 6.687-10.165 6.665-16.255l-.48-130.833c-.024-6.089-2.464-11.919-6.784-16.206-4.299-4.269-10.113-6.662-16.166-6.662h-.089l-61.182.242c-6.444-14.462-14.428-28.14-23.871-40.913l30.417-53.143c6.294-11.001 2.481-25.025-8.52-31.316L369.403 5.335c-5.281-3.023-11.545-3.822-17.424-2.231-5.872 1.598-10.872 5.462-13.892 10.747L307.665 67c-15.766-1.662-31.653-1.613-47.363.144l-30.796-52.892c-3.063-5.263-8.094-9.091-13.975-10.646-5.884-1.551-12.148-.704-17.408 2.359L85.068 71.823c-10.949 6.38-14.657 20.429-8.28 31.38l30.765 52.831c-4.761 6.484-9.048 13.076-12.953 19.899-3.904 6.824-7.417 13.855-10.6 21.255l-61.139.235C10.187 197.472-.046 207.785 0 220.456L.48 351.29c.024 6.086 2.463 11.919 6.784 16.206 4.299 4.269 10.11 6.661 16.166 6.661h.086l61.203-.229c6.432 14.452 14.413 28.131 23.868 40.915l-30.413 53.141a22.968 22.968 0 0 0-2.231 17.423 22.9495 22.9495 0 0 0 10.747 13.896l113.535 64.977c3.596 2.056 7.513 3.032 11.38 3.032 7.962 0 15.701-4.146 19.942-11.552l30.417-53.149c15.799 1.671 31.684 1.619 47.348-.144l30.799 52.89A22.9755 22.9755 0 0 0 354.089 566a22.9313 22.9313 0 0 0 17.401-2.362zm-30.361-97.727c-4.902-8.418-14.599-12.815-24.137-10.994-20.588 3.935-42.174 3.999-63.128.202-9.572-1.735-19.184 2.741-24.015 11.181l-26.748 46.745-73.694-42.18 26.75-46.741c4.832-8.439 3.819-19.006-2.521-26.371-13.978-16.239-24.685-34.594-31.818-54.554-3.265-9.131-11.918-15.227-21.61-15.227h-.085l-53.825.199-.315-84.937 53.819-.205c9.722-.04 18.366-6.197 21.576-15.374 3.69-10.557 7.962-20.019 13.06-28.917 5.101-8.914 11.089-17.387 18.311-25.897 6.294-7.417 7.225-17.993 2.334-26.396l-27.081-46.509 73.385-42.754 27.078 46.497c4.893 8.4 14.544 12.821 24.095 11.004 20.716-3.911 42.317-3.978 63.189-.19 9.557 1.753 19.189-2.742 24.019-11.178l26.753-46.744 73.697 42.179-26.753 46.742c-4.826 8.437-3.816 19 2.521 26.368 13.956 16.221 24.669 34.587 31.842 54.59 3.271 9.119 11.919 15.202 21.604 15.202h.092l53.789-.214.315 84.927-53.783.192c-9.712.037-18.351 6.182-21.569 15.347-3.746 10.654-8.023 20.131-13.082 28.975-5.064 8.847-11.067 17.338-18.356 25.958-6.271 7.418-7.194 17.978-2.305 26.368l27.078 46.472-73.391 42.749-27.091-46.515z%27/%3E%3Cpath d=%27M392.531 346.458c16.472-28.773 20.746-62.24 12.047-94.232s-29.342-58.685-58.115-75.151c-18.761-10.74-40.05-16.417-61.562-16.417-44.446 0-85.762 23.944-107.822 62.485-33.994 59.404-13.327 135.39 46.071 169.386 18.764 10.737 40.052 16.411 61.564 16.411 44.444.003 85.761-23.939 107.817-62.482zm-39.835-22.8c-13.902 24.293-39.955 39.385-67.985 39.385-13.528 0-26.934-3.58-38.764-10.349-37.433-21.426-50.456-69.312-29.033-106.751 13.905-24.291 39.958-39.385 67.987-39.385 13.528 0 26.932 3.58 38.762 10.355 18.136 10.379 31.142 27.197 36.628 47.359 5.48 20.163 2.784 41.252-7.595 59.386z%27/%3E%3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.openConfigBtn {
  position: absolute;
  top: 50px;
  left: 1040px;
  width: 175px;
  background: #fff;
  z-index: 99999;
  border: 1px solid #a9b1b5;
  color: #424747;
  padding-block: 4px;
  padding-left: 0;
  cursor: pointer;
  font-size: 13px;
  font-family: dagny, arial, tahoma, verdana, sans-serif;
}
@media (min-width: 1260px) {
  .openConfigBtn {
    right: 45px;
    left: auto;
  }
}
.openConfigBtn:hover {
  background: #e0e0e0;
}
.openConfigBtn:before {
  content: "";
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  height: 14px;
  width: 25px;
  display: inline-block;
  background-repeat: no-repeat;
  background-position: center;
  vertical-align: text-top;
  opacity: 0.4;
}
.modalDialog {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  resize: none;
  background: #ffffffcc;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 5vh 5vw;
  z-index: 9999;
}
.modalDialog textarea {
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 16px;
}
.modalDialog__buttons {
  margin-bottom: 10px;
}
.modalDialog button {
  margin: 0 20px 0 0;
  height: 40px;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/modules/global/global.less"
(module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body table.MainTable {
  width: 100% !important;
}
table.Excel {
  width: 100% !important;
  position: relative;
  /*
    th {
        position: sticky !important;
        top: 0;
        background-color: rgb(245, 246, 246);
    }
    */
  /*
    *[data-type="cell-zoom"] { width: 35px !important; }
    *[data-type="cell-status"] { width: 70px !important; }
    *[data-type="cell-timecode"] { width: 70px !important; }
    *[data-type="cell-timecode"][data-hidden="true"] { width: 0 !important; pointer-events: none; }
    *[data-type="cell-activity"] { width: 60px !important; }
    *[data-type="cell-timeunit"] { width: 50px !important; }
    *[data-type="cell-weekday"] { width: 55px !important; }
    *[data-type="cell-sum"] { width: 55px !important; }
    *[data-type="cell-workorder"] { width: 250px !important }
    *[data-type="cell-project"] { width: 250px !important }
    *[data-type="cell-description"] { width: auto !important; min-width: 100px !important; }

    // hide/disable some columns
    *[data-type="cell-servicelines"] { width: 0 !important; pointer-events: none; }
    *[data-type="cell-finprjtype"] { width: 0 !important; pointer-events: none; }
    *[data-type="cell-invunit"] { width: 0 !important; pointer-events: none; }
    *[data-type="cell-value"] { width: 0 !important; pointer-events: none; }
    */
}
table.Excel .ListDescription {
  display: none;
}
table.Excel *[data-type="cell-zoom"] {
  width: 4% !important;
}
table.Excel *[data-type="cell-status"] {
  width: 6% !important;
}
table.Excel *[data-type="cell-timecode"] {
  width: 10% !important;
}
table.Excel *[data-type="cell-workorder"] {
  width: 15% !important;
}
table.Excel *[data-type="cell-project"] {
  width: 15% !important;
}
table.Excel *[data-type="cell-activity"] {
  width: 10% !important;
}
table.Excel *[data-type="cell-description"] {
  width: 20% !important;
}
table.Excel *[data-type="cell-weekday"] {
  width: 6% !important;
}
table.Excel *[data-type="cell-sum"] {
  width: 6% !important;
}
table.Excel *[data-hidden="true"] {
  width: 0 !important;
  pointer-events: none;
}
table.Excel *[data-type="cell-servicelines"] {
  width: 0 !important;
  pointer-events: none;
}
table.Excel *[data-type="cell-finprjtype"] {
  width: 0 !important;
  pointer-events: none;
}
table.Excel *[data-type="cell-invunit"] {
  width: 0 !important;
  pointer-events: none;
}
table.Excel *[data-type="cell-value"] {
  width: 0 !important;
  pointer-events: none;
}
table.Excel *[data-type="cell-timeunit"] {
  width: 0 !important;
  pointer-events: none;
}
table.Excel .tmFixDescription .ListDescription {
  display: block;
  font-size: 11px;
  color: #aaa;
}
body.alwaysShowActivity table.Excel *[data-type="cell-activity"] {
  width: 120px !important;
}
table.Excel th[data-type="cell-weekday"] > div {
  text-align: right;
  padding-inline: 5px;
}
body.fixedDialog [role=dialog] {
  position: fixed;
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%);
  z-index: 9999 !important;
}
body.fixedDialog #b_modalBackground {
  z-index: 1000 !important;
}
body.fixedDialog .slcPopup {
  z-index: 9999 !important;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/modules/timeentry/timeentry.less"
(module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/modules/timesheet/timesheet.less"
(module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.timesheetDetails {
  box-sizing: border-box;
  padding-left: 20%;
}
.timesheetDetails table.Excel th {
  position: sticky !important;
  top: 0;
  background-color: #f5f6f6;
}
.timesheetDetails table.Excel .LockedRow {
  opacity: 0.4 !important;
  pointer-events: none;
}
.timesheetDetails table.Excel *[data-type="cell-description"] div {
  white-space: break-spaces !important;
}
.timesheetDetails table.Excel *[data-type="cell-workorder"] {
  width: 120px !important;
}
.timesheetDetails table.Excel *[data-type="cell-project"] {
  width: 120px !important;
}
.timesheetDetails table.Excel *[data-type="cell-weekday"] {
  width: 45px !important;
}
.timesheetDetails table.Excel *[data-type="cell-sum"] {
  width: 45px !important;
}
.timesheetDetails.hideLocked table.Excel .LockedRow {
  display: none;
}
.workflowLog {
  width: 40% !important;
  position: fixed;
  z-index: 6;
  top: 35px;
  right: 19px;
  display: block !important;
  margin-bottom: 0 !important;
  background: #fff;
}
.workflowLog + div {
  display: none;
}
.workflowLog:hover {
  opacity: 1;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/modules/timesheetactions/timesheetactions.less"
(module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.timesheetDetails {
  box-sizing: border-box;
  padding-left: 20%;
}
.timesheetDetails table.Excel th {
  position: sticky !important;
  top: 0;
  background-color: #f5f6f6;
}
.timesheetDetails table.Excel .LockedRow {
  opacity: 0.4 !important;
  pointer-events: none;
}
.timesheetDetails table.Excel *[data-type="cell-description"] div {
  white-space: break-spaces !important;
}
.timesheetDetails table.Excel *[data-type="cell-workorder"] {
  width: 120px !important;
}
.timesheetDetails table.Excel *[data-type="cell-project"] {
  width: 120px !important;
}
.timesheetDetails table.Excel *[data-type="cell-weekday"] {
  width: 45px !important;
}
.timesheetDetails table.Excel *[data-type="cell-sum"] {
  width: 45px !important;
}
.timesheetDetails.hideLocked table.Excel .LockedRow {
  display: none;
}
.workflowLog {
  width: 40% !important;
  position: fixed;
  z-index: 6;
  top: 35px;
  right: 19px;
  display: block !important;
  margin-bottom: 0 !important;
  background: #fff;
}
.workflowLog + div {
  display: none;
}
.workflowLog:hover {
  opacity: 1;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/modules/timesheetimport/timesheetimport.less"
(module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.progress {
  position: fixed;
  z-index: 999999;
  top: 10px;
  right: 0px;
  transform: translateX(-50%);
  background: #fff;
  border: 1px solid #888;
  color: #888;
  font-size: 16px;
  padding: 12px;
  text-align: right;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
(module) {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
(module) {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
(module) {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
(module, __unused_webpack_exports, __webpack_require__) {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
(module) {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
(module) {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ },

/***/ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 xml:space=%27preserve%27 viewBox=%270 0 569.613 569.614%27%3E%3Cpath d=%27m371.49 563.638 113.052-65.854a22.954 22.954 0 0 0 10.64-13.975c1.555-5.888.701-12.148-2.359-17.405l-30.769-52.807c4.789-6.524 9.083-13.115 12.972-19.918 3.893-6.799 7.405-13.84 10.606-21.275l61.114-.221c6.086-.021 11.915-2.464 16.202-6.781 4.287-4.32 6.687-10.165 6.665-16.255l-.48-130.833c-.024-6.089-2.464-11.919-6.784-16.206-4.299-4.269-10.113-6.662-16.166-6.662h-.089l-61.182.242c-6.444-14.462-14.428-28.14-23.871-40.913l30.417-53.143c6.294-11.001 2.481-25.025-8.52-31.316L369.403 5.335c-5.281-3.023-11.545-3.822-17.424-2.231-5.872 1.598-10.872 5.462-13.892 10.747L307.665 67c-15.766-1.662-31.653-1.613-47.363.144l-30.796-52.892c-3.063-5.263-8.094-9.091-13.975-10.646-5.884-1.551-12.148-.704-17.408 2.359L85.068 71.823c-10.949 6.38-14.657 20.429-8.28 31.38l30.765 52.831c-4.761 6.484-9.048 13.076-12.953 19.899-3.904 6.824-7.417 13.855-10.6 21.255l-61.139.235C10.187 197.472-.046 207.785 0 220.456L.48 351.29c.024 6.086 2.463 11.919 6.784 16.206 4.299 4.269 10.11 6.661 16.166 6.661h.086l61.203-.229c6.432 14.452 14.413 28.131 23.868 40.915l-30.413 53.141a22.968 22.968 0 0 0-2.231 17.423 22.9495 22.9495 0 0 0 10.747 13.896l113.535 64.977c3.596 2.056 7.513 3.032 11.38 3.032 7.962 0 15.701-4.146 19.942-11.552l30.417-53.149c15.799 1.671 31.684 1.619 47.348-.144l30.799 52.89A22.9755 22.9755 0 0 0 354.089 566a22.9313 22.9313 0 0 0 17.401-2.362zm-30.361-97.727c-4.902-8.418-14.599-12.815-24.137-10.994-20.588 3.935-42.174 3.999-63.128.202-9.572-1.735-19.184 2.741-24.015 11.181l-26.748 46.745-73.694-42.18 26.75-46.741c4.832-8.439 3.819-19.006-2.521-26.371-13.978-16.239-24.685-34.594-31.818-54.554-3.265-9.131-11.918-15.227-21.61-15.227h-.085l-53.825.199-.315-84.937 53.819-.205c9.722-.04 18.366-6.197 21.576-15.374 3.69-10.557 7.962-20.019 13.06-28.917 5.101-8.914 11.089-17.387 18.311-25.897 6.294-7.417 7.225-17.993 2.334-26.396l-27.081-46.509 73.385-42.754 27.078 46.497c4.893 8.4 14.544 12.821 24.095 11.004 20.716-3.911 42.317-3.978 63.189-.19 9.557 1.753 19.189-2.742 24.019-11.178l26.753-46.744 73.697 42.179-26.753 46.742c-4.826 8.437-3.816 19 2.521 26.368 13.956 16.221 24.669 34.587 31.842 54.59 3.271 9.119 11.919 15.202 21.604 15.202h.092l53.789-.214.315 84.927-53.783.192c-9.712.037-18.351 6.182-21.569 15.347-3.746 10.654-8.023 20.131-13.082 28.975-5.064 8.847-11.067 17.338-18.356 25.958-6.271 7.418-7.194 17.978-2.305 26.368l27.078 46.472-73.391 42.749-27.091-46.515z%27/%3E%3Cpath d=%27M392.531 346.458c16.472-28.773 20.746-62.24 12.047-94.232s-29.342-58.685-58.115-75.151c-18.761-10.74-40.05-16.417-61.562-16.417-44.446 0-85.762 23.944-107.822 62.485-33.994 59.404-13.327 135.39 46.071 169.386 18.764 10.737 40.052 16.411 61.564 16.411 44.444.003 85.761-23.939 107.817-62.482zm-39.835-22.8c-13.902 24.293-39.955 39.385-67.985 39.385-13.528 0-26.934-3.58-38.764-10.349-37.433-21.426-50.456-69.312-29.033-106.751 13.905-24.291 39.958-39.385 67.987-39.385 13.528 0 26.932 3.58 38.762 10.355 18.136 10.379 31.142 27.197 36.628 47.359 5.48 20.163 2.784 41.252-7.595 59.386z%27/%3E%3C/svg%3E"
(module) {

module.exports = "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 xml:space=%27preserve%27 viewBox=%270 0 569.613 569.614%27%3E%3Cpath d=%27m371.49 563.638 113.052-65.854a22.954 22.954 0 0 0 10.64-13.975c1.555-5.888.701-12.148-2.359-17.405l-30.769-52.807c4.789-6.524 9.083-13.115 12.972-19.918 3.893-6.799 7.405-13.84 10.606-21.275l61.114-.221c6.086-.021 11.915-2.464 16.202-6.781 4.287-4.32 6.687-10.165 6.665-16.255l-.48-130.833c-.024-6.089-2.464-11.919-6.784-16.206-4.299-4.269-10.113-6.662-16.166-6.662h-.089l-61.182.242c-6.444-14.462-14.428-28.14-23.871-40.913l30.417-53.143c6.294-11.001 2.481-25.025-8.52-31.316L369.403 5.335c-5.281-3.023-11.545-3.822-17.424-2.231-5.872 1.598-10.872 5.462-13.892 10.747L307.665 67c-15.766-1.662-31.653-1.613-47.363.144l-30.796-52.892c-3.063-5.263-8.094-9.091-13.975-10.646-5.884-1.551-12.148-.704-17.408 2.359L85.068 71.823c-10.949 6.38-14.657 20.429-8.28 31.38l30.765 52.831c-4.761 6.484-9.048 13.076-12.953 19.899-3.904 6.824-7.417 13.855-10.6 21.255l-61.139.235C10.187 197.472-.046 207.785 0 220.456L.48 351.29c.024 6.086 2.463 11.919 6.784 16.206 4.299 4.269 10.11 6.661 16.166 6.661h.086l61.203-.229c6.432 14.452 14.413 28.131 23.868 40.915l-30.413 53.141a22.968 22.968 0 0 0-2.231 17.423 22.9495 22.9495 0 0 0 10.747 13.896l113.535 64.977c3.596 2.056 7.513 3.032 11.38 3.032 7.962 0 15.701-4.146 19.942-11.552l30.417-53.149c15.799 1.671 31.684 1.619 47.348-.144l30.799 52.89A22.9755 22.9755 0 0 0 354.089 566a22.9313 22.9313 0 0 0 17.401-2.362zm-30.361-97.727c-4.902-8.418-14.599-12.815-24.137-10.994-20.588 3.935-42.174 3.999-63.128.202-9.572-1.735-19.184 2.741-24.015 11.181l-26.748 46.745-73.694-42.18 26.75-46.741c4.832-8.439 3.819-19.006-2.521-26.371-13.978-16.239-24.685-34.594-31.818-54.554-3.265-9.131-11.918-15.227-21.61-15.227h-.085l-53.825.199-.315-84.937 53.819-.205c9.722-.04 18.366-6.197 21.576-15.374 3.69-10.557 7.962-20.019 13.06-28.917 5.101-8.914 11.089-17.387 18.311-25.897 6.294-7.417 7.225-17.993 2.334-26.396l-27.081-46.509 73.385-42.754 27.078 46.497c4.893 8.4 14.544 12.821 24.095 11.004 20.716-3.911 42.317-3.978 63.189-.19 9.557 1.753 19.189-2.742 24.019-11.178l26.753-46.744 73.697 42.179-26.753 46.742c-4.826 8.437-3.816 19 2.521 26.368 13.956 16.221 24.669 34.587 31.842 54.59 3.271 9.119 11.919 15.202 21.604 15.202h.092l53.789-.214.315 84.927-53.783.192c-9.712.037-18.351 6.182-21.569 15.347-3.746 10.654-8.023 20.131-13.082 28.975-5.064 8.847-11.067 17.338-18.356 25.958-6.271 7.418-7.194 17.978-2.305 26.368l27.078 46.472-73.391 42.749-27.091-46.515z%27/%3E%3Cpath d=%27M392.531 346.458c16.472-28.773 20.746-62.24 12.047-94.232s-29.342-58.685-58.115-75.151c-18.761-10.74-40.05-16.417-61.562-16.417-44.446 0-85.762 23.944-107.822 62.485-33.994 59.404-13.327 135.39 46.071 169.386 18.764 10.737 40.052 16.411 61.564 16.411 44.444.003 85.761-23.939 107.817-62.482zm-39.835-22.8c-13.902 24.293-39.955 39.385-67.985 39.385-13.528 0-26.934-3.58-38.764-10.349-37.433-21.426-50.456-69.312-29.033-106.751 13.905-24.291 39.958-39.385 67.987-39.385 13.528 0 26.932 3.58 38.762 10.355 18.136 10.379 31.142 27.197 36.628 47.359 5.48 20.163 2.784 41.252-7.595 59.386z%27/%3E%3C/svg%3E";

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			792: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// ./package.json
const package_namespaceObject = {"rE":"0.10.8"};
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js");
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js");
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js");
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js");
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/modules/timeentry/timeentry.less
var timeentry = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/modules/timeentry/timeentry.less");
;// ./src/modules/timeentry/timeentry.less

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(timeentry/* default */.A, options);




       /* harmony default export */ const timeentry_timeentry = (timeentry/* default */.A && timeentry/* default */.A.locals ? timeentry/* default */.A.locals : undefined);

;// ./src/modules/global/utils.ts
class Utils {
  static waitForElm(selector) {
    return new Promise(resolve => {
      const ele = document.querySelector(selector);
      if (ele) {
        return resolve(ele);
      }
      const observer = new MutationObserver(mutations => {
        const ele = document.querySelector(selector);
        if (ele) {
          observer.disconnect();
          return resolve(ele);
        }
      });

      // If you get "parameter 1 is not of type 'Node'" error, see https://stackoverflow.com/a/77855838/492336
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    });
  }
  static showDialog(content) {
    // create modal import dialog
    const dialog = document.createElement("div");
    dialog.classList.add("modalDialog");
    const dialogEntry = document.createElement("textarea");
    dialogEntry.readOnly = true;
    dialogEntry.value = content;
    dialog.appendChild(dialogEntry);
    const dialogButtons = document.createElement("div");
    dialogButtons.classList.add("modalDialog__buttons");
    dialog.appendChild(dialogButtons);
    const dialogOK = document.createElement("button");
    dialogOK.setAttribute("type", "button");
    dialogOK.classList.add("RibbonInlineButton", "RibbonInlineButtonHappy");
    dialogOK.innerHTML = "<span>OK</span>";
    dialogOK.addEventListener('click', () => {
      document.body.removeChild(dialog);
    });
    dialogButtons.appendChild(dialogOK);
    document.body.appendChild(dialog);
  }
  static hoursFromTimestring(time) {
    // parse time string in format "hh:mm AM/PM" or "hh:mm" in 24h format
    // and return hours as decimal number, e.g. "1:30 PM" => 13.5

    const parts = time.split(':');
    let hours = parseInt(parts[0]) + parseInt(parts[1]) / 60;
    if (time.endsWith('PM') && parts[0] !== "12") {
      // add 12 hours for PM times, except for 12:mm PM which is 12:mm in 24h format
      hours += 12;
    } else if (time.endsWith('AM') && parts[0] === "12") {
      // 12:mm AM is 0:mm in 24h format
      hours -= 12;
    }
    return hours;
  }
  static difference(from, to) {
    const startTime = Utils.hoursFromTimestring(from);
    const endTime = Utils.hoursFromTimestring(to);
    return endTime - startTime;
  }
  static formatHours(hours) {
    const h = Math.floor(hours);
    const m = Math.round((hours - h) * 60);
    return m > 0 ? `${h}h ${m}m` : `${h}h`;
  }
  static toNumber(value) {
    // handle different locale formats, e.g. 1,234.56 vs 1.234,56
    if (value.includes(',') && !value.includes('.')) {
      // format with comma as decimal separator, e.g. 1234,56 => 1234.56
      value = value.replace(',', '.');
    } else {
      // format with decimal dot
      value = value.replace(',', '');
    }
    return parseFloat(value);
  }
  static toLocaleString(value) {
    return value.toLocaleString(navigator.language, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }
}
;// ./src/external/gm_config/gm_config.js
/*
Copyright 2009+, GM_config Contributors (https://github.com/sizzlemctwizzle/GM_config)

GM_config Collaborators/Contributors:
    Mike Medley <medleymind@gmail.com>
    Joe Simmons
    Izzy Soft
    Marti Martz
    Adam Thompson-Sharpe

GM_config is distributed under the terms of the GNU Lesser General Public License.

    GM_config is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/



// ==UserScript==
// @exclude       *
// @author        Mike Medley <medleymind@gmail.com> (https://github.com/sizzlemctwizzle/GM_config)
// @icon          https://raw.githubusercontent.com/sizzlemctwizzle/GM_config/master/gm_config_icon_large.png

// ==UserLibrary==
// @name          GM_config
// @description   A lightweight, reusable, cross-browser graphical settings framework for inclusion in user scripts.
// @copyright     2009+, Mike Medley (https://github.com/sizzlemctwizzle)
// @license       LGPL-3.0-or-later; https://raw.githubusercontent.com/sizzlemctwizzle/GM_config/master/LICENSE

// @homepageURL   https://openuserjs.org/libs/sizzle/GM_config
// @homepageURL   https://github.com/sizzlemctwizzle/GM_config
// @supportURL    https://github.com/sizzlemctwizzle/GM_config/issues

// ==/UserScript==

// ==/UserLibrary==

// The GM_config constructor
function GM_configStruct() {
  // call init() if settings were passed to constructor
  if (arguments.length) {
    GM_configInit(this, arguments);
    this.onInit();
  }
}

// This is the initializer function
function GM_configInit(config, args) {
  // Initialize instance variables
  if (typeof config.fields == "undefined") {
    config.fields = {};
    config.onInit = config.onInit || function () {};
    config.onOpen = config.onOpen || function () {};
    config.onSave = config.onSave || function () {};
    config.onClose = config.onClose || function () {};
    config.onReset = config.onReset || function () {};
    config.isOpen = false;
    config.title = 'User Script Settings';
    config.css = {
      basic: ["#GM_config * { font-family: arial,tahoma,myriad pro,sans-serif; }", "#GM_config { background: #FFF; }", "#GM_config input[type='radio'] { margin-right: 8px; }", "#GM_config input[type='checkbox'] { height: 20px; width: 20px; vertical-align: middle; margin-right: 10px; }", "#GM_config .indent40 { margin-left: 40%; }", "#GM_config .field_label { font-size: 16px; font-weight: bold; margin-right: 6px; }", "#GM_config .radio_label { font-size: 16px; }", "#GM_config .block { display: block; }", "#GM_config .saveclose_buttons { margin: 16px 10px 10px; padding: 2px 16px; }", "#GM_config .reset, #GM_config .reset a," + " #GM_config_buttons_holder { color: #000; text-align: right; }", "#GM_config .config_header { font-size: 20pt; margin: 0; }", "#GM_config .config_desc, #GM_config .section_desc, #GM_config .reset { font-size: 9pt; }", "#GM_config .center { text-align: center; }", "#GM_config .section_header_holder { margin-top: 8px; }", "#GM_config .config_var { margin: 0 0 8px; }", "#GM_config .section_header { background: #414141; border: 1px solid #000; color: #FFF;", " font-size: 13pt; margin: 0; }", "#GM_config .section_desc { background: #EFEFEF; border: 1px solid #CCC; color: #575757;" + " font-size: 9pt; margin: 0 0 6px; }"].join('\n') + '\n',
      basicPrefix: "GM_config",
      stylish: ""
    };
  }
  if (args.length == 1 && typeof args[0].id == "string" && typeof args[0].appendChild != "function") var settings = args[0];else {
    // Provide backwards-compatibility with argument style intialization
    var settings = {};

    // loop through GM_config.init() arguments
    for (var i = 0, l = args.length, arg; i < l; ++i) {
      arg = args[i];

      // An element to use as the config window
      if (typeof arg.appendChild == "function") {
        settings.frame = arg;
        continue;
      }
      switch (typeof arg) {
        case 'object':
          for (var j in arg) {
            // could be a callback functions or settings object
            if (typeof arg[j] != "function") {
              // we are in the settings object
              settings.fields = arg; // store settings object
              break; // leave the loop
            } // otherwise it must be a callback function
            if (!settings.events) settings.events = {};
            settings.events[j] = arg[j];
          }
          break;
        case 'function':
          // passing a bare function is set to open callback
          settings.events = {
            onOpen: arg
          };
          break;
        case 'string':
          // could be custom CSS or the title string
          if (/\w+\s*\{\s*\w+\s*:\s*\w+[\s|\S]*\}/.test(arg)) settings.css = arg;else settings.title = arg;
          break;
      }
    }
  }

  /* Initialize everything using the new settings object */
  // Set the id
  if (settings.id) config.id = settings.id;else if (typeof config.id == "undefined") config.id = 'GM_config';

  // Set the title
  if (settings.title) config.title = settings.title;

  // Set the custom css
  if (settings.css) config.css.stylish = settings.css;

  // Set the frame
  if (settings.frame) config.frame = settings.frame;

  // Set the event callbacks
  if (settings.events) {
    var events = settings.events;
    for (var e in events) config["on" + e.charAt(0).toUpperCase() + e.slice(1)] = events[e];
  }

  // Create the fields
  if (settings.fields) {
    var stored = config.read(),
      // read the stored settings
      fields = settings.fields,
      customTypes = settings.types || {},
      configId = config.id;
    for (var id in fields) {
      var field = fields[id];

      // for each field definition create a field object
      if (field) config.fields[id] = new GM_configField(field, stored[id], id, customTypes[field.type], configId);else if (config.fields[id]) delete config.fields[id];
    }
  }

  // If the id has changed we must modify the default style
  if (config.id != config.css.basicPrefix) {
    config.css.basic = config.css.basic.replace(new RegExp('#' + config.css.basicPrefix, 'gm'), '#' + config.id);
    config.css.basicPrefix = config.id;
  }
}
GM_configStruct.prototype = {
  // Support old method of initalizing
  init: function () {
    GM_configInit(this, arguments);
    this.onInit();
  },
  // call GM_config.open() from your script to open the menu
  open: function () {
    // Die if the menu is already open on this page
    // You can have multiple instances but you can't open the same instance twice
    var match = document.getElementById(this.id);
    if (match && (match.tagName == "IFRAME" || match.childNodes.length > 0)) return;

    // Sometimes "this" gets overwritten so create an alias
    var config = this;

    // Function to build the mighty config window :)
    function buildConfigWin(body, head) {
      var create = config.create,
        fields = config.fields,
        configId = config.id,
        bodyWrapper = create('div', {
          id: configId + '_wrapper'
        });

      // Append the style which is our default style plus the user style
      head.appendChild(create('style', {
        type: 'text/css',
        textContent: config.css.basic + config.css.stylish
      }));

      // Add header and title
      bodyWrapper.appendChild(create('div', {
        id: configId + '_header',
        className: 'config_header block center'
      }, config.title));

      // Append elements
      var section = bodyWrapper,
        secNum = 0; // Section count

      // loop through fields
      for (var id in fields) {
        var field = fields[id],
          settings = field.settings;
        if (settings.section) {
          // the start of a new section
          section = bodyWrapper.appendChild(create('div', {
            className: 'section_header_holder',
            id: configId + '_section_' + secNum
          }));
          if (Object.prototype.toString.call(settings.section) !== '[object Array]') settings.section = [settings.section];
          if (settings.section[0]) section.appendChild(create('div', {
            className: 'section_header center',
            id: configId + '_section_header_' + secNum
          }, settings.section[0]));
          if (settings.section[1]) section.appendChild(create('p', {
            className: 'section_desc center',
            id: configId + '_section_desc_' + secNum
          }, settings.section[1]));
          ++secNum;
        }

        // Create field elements and append to current section
        section.appendChild(field.wrapper = field.toNode());
      }

      // Add save and close buttons
      bodyWrapper.appendChild(create('div', {
        id: configId + '_buttons_holder'
      }, create('button', {
        id: configId + '_saveBtn',
        textContent: 'Save',
        title: 'Save settings',
        className: 'saveclose_buttons',
        onclick: function () {
          config.save();
        }
      }), create('button', {
        id: configId + '_closeBtn',
        textContent: 'Close',
        title: 'Close window',
        className: 'saveclose_buttons',
        onclick: function () {
          config.close();
        }
      }), create('div', {
        className: 'reset_holder block'
      },
      // Reset link
      create('a', {
        id: configId + '_resetLink',
        textContent: 'Reset to defaults',
        href: '#',
        title: 'Reset fields to default values',
        className: 'reset',
        onclick: function (e) {
          e.preventDefault();
          config.reset();
        }
      }))));
      body.appendChild(bodyWrapper); // Paint everything to window at once
      config.center(); // Show and center iframe
      window.addEventListener('resize', config.center, false); // Center frame on resize

      // Call the open() callback function
      config.onOpen(config.frame.contentDocument || config.frame.ownerDocument, config.frame.contentWindow || window, config.frame);

      // Close frame on window close
      window.addEventListener('beforeunload', function () {
        config.close();
      }, false);

      // Now that everything is loaded, make it visible
      config.frame.style.display = "block";
      config.isOpen = true;
    }

    // Change this in the onOpen callback using this.frame.setAttribute('style', '')
    var defaultStyle = 'bottom: auto; border: 1px solid #000; display: none; height: 75%;' + ' left: 0; margin: 0; max-height: 95%; max-width: 95%; opacity: 0;' + ' overflow: auto; padding: 0; position: fixed; right: auto; top: 0;' + ' width: 50%; z-index: 9999;';

    // Either use the element passed to init() or create an iframe
    if (this.frame) {
      this.frame.id = this.id; // Allows for prefixing styles with the config id
      this.frame.setAttribute('style', defaultStyle);
      buildConfigWin(this.frame, this.frame.ownerDocument.getElementsByTagName('head')[0]);
    } else {
      // Create frame
      document.body.appendChild(this.frame = this.create('iframe', {
        id: this.id,
        style: defaultStyle
      }));

      // In WebKit src can't be set until it is added to the page
      this.frame.src = 'about:blank';
      // we wait for the iframe to load before we can modify it
      var that = this;
      this.frame.addEventListener('load', function (e) {
        var frame = config.frame;
        if (frame.src && !frame.contentDocument) {
          // Some agents need this as an empty string for newer context implementations
          frame.src = "";
        } else if (!frame.contentDocument) {
          that.log("GM_config failed to initialize default settings dialog node!");
        }
        var body = frame.contentDocument.getElementsByTagName('body')[0];
        body.id = config.id; // Allows for prefixing styles with the config id
        buildConfigWin(body, frame.contentDocument.getElementsByTagName('head')[0]);
      }, false);
    }
  },
  save: function () {
    var forgotten = this.write();
    this.onSave(forgotten); // Call the save() callback function
  },
  close: function () {
    // If frame is an iframe then remove it
    if (this.frame.contentDocument) {
      this.remove(this.frame);
      this.frame = null;
    } else {
      // else wipe its content
      this.frame.innerHTML = "";
      this.frame.style.display = "none";
    }

    // Null out all the fields so we don't leak memory
    var fields = this.fields;
    for (var id in fields) {
      var field = fields[id];
      field.wrapper = null;
      field.node = null;
    }
    this.onClose(); //  Call the close() callback function
    this.isOpen = false;
  },
  set: function (name, val) {
    this.fields[name].value = val;
    if (this.fields[name].node) {
      this.fields[name].reload();
    }
  },
  get: function (name, getLive) {
    var field = this.fields[name],
      fieldVal = null;
    if (getLive && field.node) {
      fieldVal = field.toValue();
    }
    return fieldVal != null ? fieldVal : field.value;
  },
  write: function (store, obj) {
    if (!obj) {
      var values = {},
        forgotten = {},
        fields = this.fields;
      for (var id in fields) {
        var field = fields[id];
        var value = field.toValue();
        if (field.save) {
          if (value != null) {
            values[id] = value;
            field.value = value;
          } else values[id] = field.value;
        } else forgotten[id] = value;
      }
    }
    try {
      this.setValue(store || this.id, this.stringify(obj || values));
    } catch (e) {
      this.log("GM_config failed to save settings!");
    }
    return forgotten;
  },
  read: function (store) {
    try {
      var rval = this.parser(this.getValue(store || this.id, '{}'));
    } catch (e) {
      this.log("GM_config failed to read saved settings!");
      var rval = {};
    }
    return rval;
  },
  reset: function () {
    var fields = this.fields;

    // Reset all the fields
    for (var id in fields) fields[id].reset();
    this.onReset(); // Call the reset() callback function
  },
  create: function () {
    switch (arguments.length) {
      case 1:
        var A = document.createTextNode(arguments[0]);
        break;
      default:
        var A = document.createElement(arguments[0]),
          B = arguments[1];
        for (var b in B) {
          if (b.indexOf("on") == 0) A.addEventListener(b.substring(2), B[b], false);else if (",style,accesskey,id,name,src,href,which,for".indexOf("," + b.toLowerCase()) != -1) A.setAttribute(b, B[b]);else A[b] = B[b];
        }
        if (typeof arguments[2] == "string") A.innerHTML = arguments[2];else for (var i = 2, len = arguments.length; i < len; ++i) A.appendChild(arguments[i]);
    }
    return A;
  },
  center: function () {
    var node = this.frame;
    if (!node) return;
    var style = node.style,
      beforeOpacity = style.opacity;
    if (style.display == 'none') style.opacity = '0';
    style.display = '';
    style.top = Math.floor(window.innerHeight / 2 - node.offsetHeight / 2) + 'px';
    style.left = Math.floor(window.innerWidth / 2 - node.offsetWidth / 2) + 'px';
    style.opacity = '1';
  },
  remove: function (el) {
    if (el && el.parentNode) el.parentNode.removeChild(el);
  }
};

// Define a bunch of API stuff
(function () {
  var isGM = typeof GM_getValue != 'undefined' && typeof GM_getValue('a', 'b') != 'undefined',
    setValue,
    getValue,
    stringify,
    parser;

  // Define value storing and reading API
  if (!isGM) {
    setValue = function (name, value) {
      return localStorage.setItem(name, value);
    };
    getValue = function (name, def) {
      var s = localStorage.getItem(name);
      return s == null ? def : s;
    };

    // We only support JSON parser outside GM
    stringify = JSON.stringify;
    parser = JSON.parse;
  } else {
    setValue = GM_setValue;
    getValue = GM_getValue;
    stringify = typeof JSON == "undefined" ? function (obj) {
      return obj.toSource();
    } : JSON.stringify;
    parser = typeof JSON == "undefined" ? function (jsonData) {
      return new Function('return ' + jsonData + ';')();
    } : JSON.parse;
  }
  GM_configStruct.prototype.isGM = isGM;
  GM_configStruct.prototype.setValue = setValue;
  GM_configStruct.prototype.getValue = getValue;
  GM_configStruct.prototype.stringify = stringify;
  GM_configStruct.prototype.parser = parser;
  GM_configStruct.prototype.log = window.console ? console.log : isGM && typeof GM_log != 'undefined' ? GM_log : window.opera ? opera.postError : function () {/* no logging */};
})();
function GM_configDefaultValue(type, options) {
  var value;
  if (type.indexOf('unsigned ') == 0) type = type.substring(9);
  switch (type) {
    case 'radio':
    case 'select':
      value = options[0];
      break;
    case 'checkbox':
      value = false;
      break;
    case 'int':
    case 'integer':
    case 'float':
    case 'number':
      value = 0;
      break;
    default:
      value = '';
  }
  return value;
}
function GM_configField(settings, stored, id, customType, configId) {
  // Store the field's settings
  this.settings = settings;
  this.id = id;
  this.configId = configId;
  this.node = null;
  this.wrapper = null;
  this.save = typeof settings.save == "undefined" ? true : settings.save;

  // Buttons are static and don't have a stored value
  if (settings.type == "button") this.save = false;

  // if a default value wasn't passed through init() then
  //   if the type is custom use its default value
  //   else use default value for type
  // else use the default value passed through init()
  this['default'] = typeof settings['default'] == "undefined" ? customType ? customType['default'] : GM_configDefaultValue(settings.type, settings.options) : settings['default'];

  // Store the field's value
  this.value = typeof stored == "undefined" ? this['default'] : stored;

  // Setup methods for a custom type
  if (customType) {
    this.toNode = customType.toNode;
    this.toValue = customType.toValue;
    this.reset = customType.reset;
  }
}
GM_configField.prototype = {
  create: GM_configStruct.prototype.create,
  toNode: function () {
    var field = this.settings,
      value = this.value,
      options = field.options,
      type = field.type,
      id = this.id,
      configId = this.configId,
      labelPos = field.labelPos,
      create = this.create;
    function addLabel(pos, labelEl, parentNode, beforeEl) {
      if (!beforeEl) beforeEl = parentNode.firstChild;
      switch (pos) {
        case 'right':
        case 'below':
          if (pos == 'below') parentNode.appendChild(create('br', {}));
          parentNode.appendChild(labelEl);
          break;
        default:
          if (pos == 'above') parentNode.insertBefore(create('br', {}), beforeEl);
          parentNode.insertBefore(labelEl, beforeEl);
      }
    }
    var retNode = create('div', {
        className: 'config_var',
        id: configId + '_' + id + '_var',
        title: field.title || ''
      }),
      firstProp;

    // Retrieve the first prop
    for (var i in field) {
      firstProp = i;
      break;
    }
    var label = field.label && type != "button" ? create('label', {
      id: configId + '_' + id + '_field_label',
      for: configId + '_field_' + id,
      className: 'field_label'
    }, field.label) : null;
    switch (type) {
      case 'textarea':
        retNode.appendChild(this.node = create('textarea', {
          innerHTML: value,
          id: configId + '_field_' + id,
          className: 'block',
          cols: field.cols ? field.cols : 20,
          rows: field.rows ? field.rows : 2
        }));
        break;
      case 'radio':
        var wrap = create('div', {
          id: configId + '_field_' + id
        });
        this.node = wrap;
        for (var i = 0, len = options.length; i < len; ++i) {
          var radLabel = create('label', {
            className: 'radio_label'
          }, options[i]);
          var rad = wrap.appendChild(create('input', {
            value: options[i],
            type: 'radio',
            name: id,
            checked: options[i] == value
          }));
          var radLabelPos = labelPos && (labelPos == 'left' || labelPos == 'right') ? labelPos : firstProp == 'options' ? 'left' : 'right';
          addLabel(radLabelPos, radLabel, wrap, rad);
        }
        retNode.appendChild(wrap);
        break;
      case 'select':
        var wrap = create('select', {
          id: configId + '_field_' + id
        });
        this.node = wrap;
        for (var i = 0, len = options.length; i < len; ++i) {
          var option = options[i];
          wrap.appendChild(create('option', {
            value: option,
            selected: option == value
          }, option));
        }
        retNode.appendChild(wrap);
        break;
      default:
        // fields using input elements
        var props = {
          id: configId + '_field_' + id,
          type: type,
          value: type == 'button' ? field.label : value
        };
        switch (type) {
          case 'checkbox':
            props.checked = value;
            break;
          case 'button':
            props.size = field.size ? field.size : 25;
            if (field.script) field.click = field.script;
            if (field.click) props.onclick = field.click;
            break;
          case 'hidden':
            break;
          default:
            // type = text, int, or float
            props.type = 'text';
            props.size = field.size ? field.size : 25;
        }
        retNode.appendChild(this.node = create('input', props));
    }
    if (label) {
      // If the label is passed first, insert it before the field
      // else insert it after
      if (!labelPos) labelPos = firstProp == "label" || type == "radio" ? "left" : "right";
      addLabel(labelPos, label, retNode);
    }
    return retNode;
  },
  toValue: function () {
    var node = this.node,
      field = this.settings,
      type = field.type,
      unsigned = false,
      rval = null;
    if (!node) return rval;
    if (type.indexOf('unsigned ') == 0) {
      type = type.substring(9);
      unsigned = true;
    }
    switch (type) {
      case 'checkbox':
        rval = node.checked;
        break;
      case 'select':
        rval = node[node.selectedIndex].value;
        break;
      case 'radio':
        var radios = node.getElementsByTagName('input');
        for (var i = 0, len = radios.length; i < len; ++i) if (radios[i].checked) rval = radios[i].value;
        break;
      case 'button':
        break;
      case 'int':
      case 'integer':
      case 'float':
      case 'number':
        var num = Utils.toNumber(node.value);
        var warn = 'Field labeled "' + field.label + '" expects a' + (unsigned ? ' positive ' : 'n ') + 'integer value';
        if (isNaN(num) || type.substr(0, 3) == 'int' && Math.ceil(num) != Math.floor(num) || unsigned && num < 0) {
          alert(warn + '.');
          return null;
        }
        if (!this._checkNumberRange(num, warn)) return null;
        rval = num;
        break;
      default:
        rval = node.value;
        break;
    }
    return rval; // value read successfully
  },
  reset: function () {
    var node = this.node,
      field = this.settings,
      type = field.type;
    if (!node) return;
    switch (type) {
      case 'checkbox':
        node.checked = this['default'];
        break;
      case 'select':
        for (var i = 0, len = node.options.length; i < len; ++i) if (node.options[i].textContent == this['default']) node.selectedIndex = i;
        break;
      case 'radio':
        var radios = node.getElementsByTagName('input');
        for (var i = 0, len = radios.length; i < len; ++i) if (radios[i].value == this['default']) radios[i].checked = true;
        break;
      case 'button':
        break;
      default:
        node.value = this['default'];
        break;
    }
  },
  remove: function (el) {
    GM_configStruct.prototype.remove(el || this.wrapper);
    this.wrapper = null;
    this.node = null;
  },
  reload: function () {
    var wrapper = this.wrapper;
    if (wrapper) {
      var fieldParent = wrapper.parentNode;
      fieldParent.insertBefore(this.wrapper = this.toNode(), wrapper);
      this.remove(wrapper);
    }
  },
  _checkNumberRange: function (num, warn) {
    var field = this.settings;
    if (typeof field.min == "number" && num < field.min) {
      alert(warn + ' greater than or equal to ' + field.min + '.');
      return null;
    }
    if (typeof field.max == "number" && num > field.max) {
      alert(warn + ' less than or equal to ' + field.max + '.');
      return null;
    }
    return true;
  }
};

// Create default instance of GM_config
window.GM_config = new GM_configStruct();
;// ./src/configuration.ts
/// <reference path="./external/gm_config/types/index.d.ts"/>


class Configuration {
  static instance = new Configuration();
  static getInstance() {
    return this.instance;
  }
  constructor() {
    GM_config.init({
      id: 'MacawUnit4Config',
      title: 'Unit4 enhancements configuration (v' + package_namespaceObject.rE + ')',
      events: {
        save: () => this.save()
      },
      fields: {
        alwaysShowDescriptions: {
          label: '[Global]: Always show descriptions for a workorder<copy>Display the name of the workorder and project whereever possible.</copy>',
          labelPos: 'right',
          type: 'checkbox',
          default: true
        },
        alwaysShowActivity: {
          label: '[Global]: Always show descriptions for an activity<copy>Display the name of the activity whereever possible.</copy>',
          labelPos: 'right',
          type: 'checkbox',
          default: false
        },
        allowCommaEntry: {
          label: '[Global]: allow time entry with "," as separator<copy>Enable comma as decimal separator (in addition to the dot). Does not work consistently, so by default it is disabled</copy>',
          labelPos: 'right',
          type: 'checkbox',
          default: false
        },
        fixedDialogs: {
          label: '[Global]: make dialogs sticky and centered',
          labelPos: 'right',
          type: 'checkbox',
          default: false
        },
        hideTimeCodeColumn: {
          label: '[Global]: hide TimeCode column<copy>If you need the column, disable this option</copy>',
          labelPos: 'right',
          type: 'checkbox',
          default: false
        },
        handleTimeEntry: {
          label: '[Timesheet Entry]: enable enhancements<copy>Enable enhancements on time entry screen</copy>',
          labelPos: 'right',
          type: 'checkbox',
          default: true
        },
        handleWorkingHours: {
          label: '[Timesheet Entry]: enable enhancements for working hours<copy>Enable enhancements on time entry screen for working hours. Only active when general time entry screen enhancements are active</copy>',
          labelPos: 'right',
          type: 'checkbox',
          default: true
        },
        experimentalNewActionButtons: {
          label: '[Timesheet Entry]: Add X rows at once</copy>',
          labelPos: 'right',
          type: 'checkbox',
          default: false
        },
        experimentalJsonImport: {
          label: '[Timesheet Entry]: Import data from JSON<copy>This is an experimental feature for now and enabled to fill in workorders based on a JSON document</copy>',
          labelPos: 'right',
          type: 'checkbox',
          default: false
        },
        handleTimesheetDetails: {
          label: '[Timesheet Approval]: enable enhancements<copy>Enable enhancements on approval / rejection screen</copy>',
          labelPos: 'right',
          type: 'checkbox',
          default: true
        },
        stickyWorkflowLog: {
          label: '[Timesheet Approval]: Make Workflow Log sticky (in approval view)<copy>In Approval/Reject view, make the box with the log entry sticky, so it it visible all the time. This might lead to the box overlapping your time entries, so by default this is disabled</copy>',
          labelPos: 'right',
          type: 'checkbox',
          default: true
        },
        hideLockedRows: {
          label: '[Timesheet Approval]: hide rows that you cannot accept/reject<copy>In Approval screen, hide all rows that you are not responsible for</copy>',
          labelPos: 'right',
          type: 'checkbox',
          default: true
        }
        /* will be read from "Normal hours" field, since that contains only working days excluded bank holidays and start/end of month
        workingHours: {
          label: 'Working hours per week: ',
          labelPos: 'left',
          type: 'text',
          title: 'Enter your working hours, e.g. 40 hours per week',
          default: '40'
        }
        */
      },
      css: 'copy { display: block; margin-left: 40px; font-weight: normal; } #MacawUnit4Config_wrapper { margin-bottom: 100px; } #MacawUnit4Config * { font-size: 13px; font-family: dagny, arial, tahoma, verdana, sans-serif; } #MacawUnit4Config_buttons_holder { background: #f8f8f8; position: fixed; bottom: 0; left: 0; right: 0; padding: 10px; border-top: 1px solid black; }'
    });
  }
  addConfigUI() {
    const btn = document.createElement("button");
    btn.className = "openConfigBtn";
    btn.innerText = "Configure enhancements";
    btn.title = "Click to configure Unit4 enhancements";
    btn.onclick = () => this.show();
    document.body.appendChild(btn);
  }
  allowCommaEntry() {
    return GM_config.get('allowCommaEntry');
  }
  fixedDialogs() {
    return GM_config.get('fixedDialogs');
  }
  alwaysShowDescriptions() {
    return GM_config.get('alwaysShowDescriptions');
  }
  alwaysShowActivity() {
    return GM_config.get('alwaysShowActivity');
  }
  handleTimeEntry() {
    return GM_config.get('handleTimeEntry');
  }
  handleWorkingHours() {
    return GM_config.get('handleWorkingHours');
  }
  hideTimeCodeColumn() {
    return GM_config.get('hideTimeCodeColumn');
  }
  handleTimesheetDetails() {
    return GM_config.get('handleTimesheetDetails');
  }
  stickyWorkflowLog() {
    return GM_config.get('stickyWorkflowLog');
  }
  hideLockedRows() {
    return GM_config.get('hideLockedRows');
  }
  experimentalNewActionButtons() {
    return GM_config.get('experimentalNewActionButtons');
  }
  experimentalJsonImport() {
    return GM_config.get('experimentalJsonImport');
  }

  /*
  myWorkingHours() {
    const value = GM_config.get('workingHours');
    if (typeof value === 'string') {
      const hours = parseFloat(value);
      if (!isNaN(hours)) {
        return hours;
      }
    }
    // use 40 as fallback
    return 40;
  }
  */

  show() {
    GM_config.open();
  }
  save() {
    // reload page to reflect changes
    window.location.reload();
  }
  close() {
    GM_config.close();
  }
}
;// ./src/modules/MarkupUtility.ts

class MarkupUtility {
  /**
   * Add a data attribute to table head and cells
   * @param table  DOM element of table
   * @param th     DOM element of header cell
   * @param col    column number of header cell
   * @param type   type for data attribute
   */
  static markTableCells(table, th, col, type, hidden = false) {
    // add type to header cell
    th.dataset.type = type;
    if (hidden) {
      th.dataset.hidden = "true";
      th.inert = true;
    }

    // iterate over all rows of the table
    table.querySelectorAll(':scope > tbody > tr').forEach(row => {
      // iterate over all table data cells of the row
      row.querySelectorAll(':scope > td').forEach((td, key) => {
        // if column number matches, set type data attribute on data cell as well
        if (td instanceof HTMLElement && key == col) {
          td.dataset.type = type;
          if (hidden) {
            td.dataset.hidden = "true";
            td.inert = true;
          }
        }
      });
    });
  }

  /**
   * Hide rows based on content
   * @param table  DOM element of table
   * @param search text to search in cell
   */
  static hideRow(table, search) {
    // iterate over all rows of the table
    table.querySelectorAll(':scope > tbody > tr').forEach(row => {
      // iterate over all table data cells of the row
      if (row instanceof HTMLTableRowElement) {
        row.querySelectorAll(':scope > td').forEach((td, key) => {
          // if column text matches, hide row
          if (td instanceof HTMLElement && td.innerText == search) {
            row.style.display = "none";
          }
        });
      }
    });
  }

  /**
   * Convert time to 24h
   * @param table  DOM element of table
   */
  static convertTime(table) {
    // iterate over all rows of the table
    table.querySelectorAll(':scope > tbody > tr').forEach(row => {
      // iterate over all table data cells of the row
      if (row instanceof HTMLTableRowElement) {
        row.querySelectorAll(':scope > td').forEach((td, key) => {
          // if column matches time, change it
          if (td instanceof HTMLElement) {
            var match;
            if ((match = td.innerText.match(/^([0-9]{1,2}):([0-9]{2})([AP]M)$/)) !== null) {
              // Convert to 24h format
              const [_, hours, minutes, period] = match;
              let hour = parseInt(hours, 10);
              if (period === 'PM' && hour !== 12) {
                hour += 12;
              } else if (period === 'AM' && hour === 12) {
                hour = 0;
              }
              td.innerText = `${hour.toString().padStart(2, '0')}:${minutes}`;
            }
          }
        });
      }
    });
  }

  /**
   * Add CSS classes and attributes to the whole table
   * 
   * @param table table
   */
  static addTypes(table) {
    var config = Configuration.getInstance();
    table.querySelectorAll('th').forEach((th, col) => {
      const text = th.innerText.replace(/[_.\s]/g, '').toLowerCase();
      switch (text) {
        case '':
          // ignore headers with empty text
          break;
        case 'zoom':
        case 'status':
        case 'workorder':
        case 'project':
        case 'activity':
        case 'description':
        case 'servicelines':
        case 'finprjtype':
        case 'timeunit':
        case 'sum':
        case 'invunit':
        case 'value':
        case 'time':
          // add type for some headers
          MarkupUtility.markTableCells(table, th, col, 'cell-' + text);
          break;
        case 'timecode':
          // add type for timecode based on config
          MarkupUtility.markTableCells(table, th, col, 'cell-timecode', !!config.hideTimeCodeColumn());
          break;
        default:
          // check if day of week is found
          // Either "Mon MM/DD" or "Mon DD.MM." (dots are removed above!)
          if (text.match(/(mon|tue|wed|thu|fri|sat|sun)[0-9]+\/?[0-9]+/)) {
            MarkupUtility.markTableCells(table, th, col, 'cell-weekday');
          } else {
            console.log("Unknown header '" + text + "'", th);
          }
      }
    });
  }
  static addTypeToTableCells(name, section) {
    return new Promise((resolve, reject) => {
      // since Unit45 changes the DOM frequently (and there are no callbacks or events), we need to check
      // and re-add the classes on a regular basis
      window.setInterval(() => {
        var config = Configuration.getInstance();
        section.querySelectorAll('table.Excel').forEach(table => {
          if (table instanceof HTMLTableElement && !table.classList.contains("tmFix")) {
            table.classList.add("tmFix", name);
            MarkupUtility.addTypes(table);
            if (config.handleWorkingHours()) {
              MarkupUtility.hideRow(table, 'Hours remaining');
              MarkupUtility.convertTime(table);
            }
            resolve();
          }
        });
      }, 100);
    });
  }
}
;// ./src/modules/AbstractModule.ts
class AbstractModule {
  active = false;
  isActive() {
    return this.active;
  }
  setActive() {
    this.active = true;
  }
}
;// ./src/modules/global/trans.ts
const translations = {
  'en': {
    'error_date_cell_not_found': 'Could not find cell for date %1',
    'error_summary_workinghours': 'Error while summarizing working hours: %1',
    'summary_hours_present': 'Working hours (From > To)',
    'summary_booked_breaks': 'Total booked breaks',
    'summary_booked_working': 'Total booked time entries',
    'missing_booked_hours': '%1 less booked hours than working hours',
    'missing_weekly_hours': '%1 less hours than expected (%2)',
    'summary_hours_working': 'Working hours (From > To w/o breaks)',
    'missing_working_hours': 'Missing booked hours: %1',
    'additional_hours': 'Additional hours: %1',
    'break_min': 'You need at least %1 minutes break',
    'maxhours_exceeded': 'You must not work more than %1 hours a day',
    'sum_breaks': '∑ breaks',
    'sum_compensation': '∑ compensation',
    'sum_working': '∑ working'
  },
  'de': {
    'error_date_cell_not_found': 'Zelle für Datum %1 wurde nicht gefunden',
    'error_summary_workinghours': 'Fehler beim Zusammenfassen der Arbeitsstunden: %1',
    'summary_hours_present': 'Anwesenheit (Von > Bis)',
    'summary_booked_breaks': 'Gebuchte Pausen',
    'summary_booked_working': 'Gebuchte Zeiteinträge',
    'missing_booked_hours': '%1 weniger Zeiteinträge als Arbeitsstunden',
    'missing_weekly_hours': '%1 weniger Stunden als erwartet (%2)',
    'summary_hours_working': 'Arbeitsstunden (Von > Bis ohne Pausen)',
    'missing_working_hours': 'Fehlende Arbeitsstunden: %1',
    'additional_hours': 'Zusätzliche Stunden: %1',
    'break_min': 'Du benötigst mindestens %1 Minuten Pause',
    'maxhours_exceeded': 'Du darfst nicht mehr als %1 Stunden pro Tag arbeiten',
    'sum_breaks': '∑ Pausen',
    'sum_compensation': '∑ Kompensation',
    'sum_working': '∑ Arbeit'
  }
};

/**
 * Return translated text for the given key based on the user's browser language.
 * If the translation for the current language is not available, it falls back to English.
 * If the English translation is also not available, it returns the key itself.
 * 
 * @param key The key for the translation.
 * @returns The translated text.
 */
const trans = (key, ...args) => {
  const lang = navigator.language.split('-')[0];
  // Try to get the translation for the current language, if not available, fallback to English, if still not available, return the key itself
  const txt = translations[lang][key] || translations['en'][key] || key;
  // Replace placeholders (%1, %2) with the corresponding argument from array
  return args.reduce((str, arg, index) => str.replace(`%${index + 1}`, arg), txt);
};
;// ./src/modules/timeentry/timeentry.ts






class TimeEntry extends AbstractModule {
  // ----------------------------------------------------------------------
  // Time Entry Screen
  // ----------------------------------------------------------------------

  normalHours = 40;
  initModule() {
    // mark time entry table with special CSS class
    if (Configuration.getInstance().handleTimeEntry()) {
      const promises = [];
      document.querySelectorAll('h2.SectionTitle').forEach(e => {
        if (e.textContent == 'Time entry') {
          let section = e.closest('.u4-section-container');
          if (section != null) {
            this.section = section;
            this.setActive();
            // add data type attributes to table
            promises.push(MarkupUtility.addTypeToTableCells('tmTimeentry', section));
          }
        } else if (e.textContent == 'Working hours') {
          let section = e.closest('.u4-section-container');
          if (section != null) {
            this.workingHoursSection = section;
            // add markup to working hours
            promises.push(MarkupUtility.addTypeToTableCells('tmWorkinghours', section));
          }
        } else if (e.textContent == 'Timesheet for') {
          let section = e.closest('.u4-section-container');
          if (section != null) {
            this.timesheetDetailsSection = section;
            // add markup to timesheet details
            section.classList.add('tmTimesheetDetails');
            section.querySelectorAll('td.label').forEach(td => {
              if (td.textContent.includes('Normal hours')) {
                const input = td.nextElementSibling?.querySelector('input[type="text"]');
                if (input) {
                  this.normalHours = Utils.toNumber(input.value);
                }
              }
            });
          }
        }
      });
      return Promise.all(promises);
    }
    return Promise.resolve();
  }
  executeModule() {
    const interval = window.setInterval(() => {
      if (!this.section.classList.contains("timeEntry")) {
        // cancel interval, since UI is now initialized
        window.clearInterval(interval);

        // add CSS class
        this.section.classList.add('timeEntry');

        // scroll to current entry
        this.section.querySelectorAll('input[title="Work order - Mandatory"]').forEach(e => {
          if (e instanceof HTMLInputElement) {
            setTimeout(function () {
              if (document.activeElement === null || document.activeElement.tagName !== "INPUT") {
                e.focus();
              }
              e.scrollIntoView();
            }, 100);
          }
        });

        // add all kind of functionality to the table
        this.add(this.section);
        this.summarize();

        // add observer to get changes after sort
        this.attachMutationObserver();
      }
    }, 100);
  }
  add(section) {
    // really disable some fields to avoid errors
    if (Configuration.getInstance().hideTimeCodeColumn()) {
      section.querySelectorAll('input[title="Time code"]').forEach(e => {
        if (e instanceof HTMLInputElement) {
          e.disabled = true;
          e.readOnly = true;
        }
      });
    }

    // always show work item & project descriptions in time entry
    const showDescriptions = Configuration.getInstance().alwaysShowDescriptions();
    const showActivity = Configuration.getInstance().alwaysShowActivity();
    section.querySelectorAll('tr.ListItem td[title], tr.ListItem td[title], tr.AltListItem td[title]').forEach(e => {
      if (e instanceof HTMLElement) {
        const add = showDescriptions && (e.getAttribute("data-type") === "cell-workorder" || e.getAttribute("data-type") === "cell-project") || showActivity && e.getAttribute("data-type") === "cell-activity";
        if (add) {
          if (!e.classList.contains('.tmFixDescription')) {
            let x = document.createElement('div');
            x.className = 'Message DivOverflowNoWrap Ellipsis Description ListDescription';
            x.style.whiteSpace = "break-spaces";
            x.appendChild(document.createTextNode(e.getAttribute('title') ?? ''));
            e.appendChild(x);
            e.classList.add('tmFixDescription');
          }
        }
      }
    });
  }
  attachMutationObserver() {
    const section = document.querySelector(".timeEntry");
    if (section) {
      const observer = new MutationObserver(mutationRecords => {
        // reintegrate functionality
        this.add(section);
      });
      // get the parent element of the table and start observing
      const e = section.querySelector(".Excel")?.parentNode;
      if (e) {
        observer.observe(e, {
          childList: true
        });
      }
    }
  }
  category(timecode, activity) {
    if (timecode === '99') {
      return 'break';
    }
    if (activity === '908') {
      return 'compensation';
    }
    return 'working';
  }
  summarize() {
    if (this.workingHoursSection) {
      try {
        const tableEntry = this.section.querySelector('table.tmTimeentry tbody');
        const tableWorking = this.workingHoursSection.querySelector('table.tmWorkinghours tbody');
        const sumWorking = [];
        const sumBreaks = [];
        const sumCompensation = [];
        const isHoliday = [];
        const dayAvailable = [];
        var overallBooked = 0;
        var overallCompensation = 0;
        var cellSumWorking = null;
        if (tableEntry) {
          // iterate over header to find time code column and first weekday column
          const columns = Array.from(this.section.querySelectorAll('table.Excel th'));
          var colTimeCode = Number.MAX_VALUE;
          var colActivity = Number.MAX_VALUE;
          var colWeekdays = Number.MAX_VALUE;
          for (var col = 0; col < columns.length; col++) {
            const cell = columns[col];
            switch (columns[col].getAttribute("data-type")) {
              case 'cell-weekday':
                colWeekdays = Math.min(col, colWeekdays);
                break;
              case 'cell-timecode':
                colTimeCode = col;
                break;
              case 'cell-activity':
                colActivity = col;
                break;
            }
          }

          // identify existing days
          for (var i = 0; i < 7; i++) {
            dayAvailable[i] = columns[colWeekdays + i]?.getAttribute("data-type") === 'cell-weekday';
          }

          // identify holidays
          for (var i = 0; i < 7; i++) {
            if (dayAvailable[i]) {
              const headlineCell = columns[colWeekdays + i].querySelector('& > div');
              const headline = headlineCell?.textContent ?? '';
              if (headlineCell?.style.color == 'rgb(50, 205, 50)') {
                isHoliday[i] = true;
              } else if (headline.includes('Sat') || headline.includes('Sun')) {
                isHoliday[i] = true;
              }
            }
          }

          // iterate over data
          tableEntry.querySelectorAll('& > tr:is(.ListItem, .AltListItem, .EditRow)').forEach(row => {
            const cells = Array.from(row.querySelectorAll('& > td'));
            if (cells[colTimeCode]) {
              const timeCode = this.getValueFromCell(cells[colTimeCode]);
              const activity = this.getValueFromCell(cells[colActivity]);
              for (var i = 0; i < 7; ++i) {
                if (dayAvailable[i]) {
                  const hours = Utils.toNumber(this.getValueFromCell(cells[colWeekdays + i]));
                  const cat = this.category(timeCode, activity);
                  if (cat === 'break') {
                    sumBreaks[i] = (sumBreaks[i] ?? 0) + hours;
                  } else if (cat === 'compensation') {
                    sumCompensation[i] = (sumCompensation[i] ?? 0) + hours;
                    overallCompensation += hours;
                  } else {
                    sumWorking[i] = (sumWorking[i] ?? 0) + hours;
                    overallBooked += hours;
                  }
                }
              }
            }
          });
          const lastRow = tableEntry.querySelector('tr.SumItem');
          if (lastRow) {
            // breaks only
            row = document.createElement('tr');
            row.className = "SumItem";
            lastRow.before(row);
            for (var i = 0; i < 8; ++i) {
              this.addCell(row, "");
            }
            this.addCell(row, trans('sum_breaks'));
            this.addCell(row, "");
            var sum = 0;
            for (var i = 0; i < 7; ++i) {
              if (dayAvailable[i]) {
                var value = sumBreaks[i] ?? 0;
                sum += value;
                const cell = this.addCell(row, Utils.toLocaleString(value), "right");
                if (isHoliday[i]) {
                  cell.style.setProperty("background-color", "#dcdcdc", "important");
                }
                if (sumWorking[i] > 0) {
                  if (sumWorking[i] > 9 && value < 0.75 || sumWorking[i] > 6 && value < 0.5) {
                    cell.style.color = "red";
                    cell.style.fontWeight = "700";
                  } else {
                    cell.style.color = "green";
                    cell.style.fontWeight = "700";
                  }
                }
              }
            }
            this.addCell(row, Utils.toLocaleString(sum));

            // compensation only
            row = document.createElement('tr');
            row.className = "SumItem";
            lastRow.before(row);
            for (var i = 0; i < 8; ++i) {
              this.addCell(row, "");
            }
            this.addCell(row, trans('sum_compensation'));
            this.addCell(row, "");
            var sum = 0;
            for (var i = 0; i < 7; ++i) {
              if (dayAvailable[i]) {
                var value = sumCompensation[i] ?? 0;
                sum += value;
                const cell = this.addCell(row, Utils.toLocaleString(value), "right");
                if (isHoliday[i]) {
                  cell.style.setProperty("background-color", "#dcdcdc", "important");
                }
              }
            }
            this.addCell(row, Utils.toLocaleString(sum));

            // working only
            row = document.createElement('tr');
            row.className = "SumItem";
            lastRow.before(row);
            for (var i = 0; i < 8; ++i) {
              this.addCell(row, "");
            }
            this.addCell(row, trans('sum_working'));
            this.addCell(row, "");
            var sum = 0;
            for (var i = 0; i < 7; ++i) {
              if (dayAvailable[i]) {
                var value = sumWorking[i] ?? 0;
                sum += value;
                const cell = this.addCell(row, Utils.toLocaleString(value), "right");
                if (isHoliday[i]) {
                  cell.style.setProperty("background-color", "#dcdcdc", "important");
                }
                if (sumWorking[i] > 10) {
                  cell.style.color = "red";
                  cell.style.fontWeight = "700";
                } else if (sumWorking[i] > 0) {
                  cell.style.color = "green";
                  cell.style.fontWeight = "700";
                }
              }
            }
            cellSumWorking = this.addCell(row, Utils.toLocaleString(sum));
            const missingBooked = this.normalHours - overallBooked - overallCompensation;
            if (cellSumWorking && missingBooked > 0) {
              cellSumWorking.style.color = 'red';
              cellSumWorking.style.fontWeight = '700';
              cellSumWorking.title = trans('missing_weekly_hours', Utils.formatHours(missingBooked), Utils.formatHours(this.normalHours));
            }
          }
        }
        if (tableWorking) {
          // iterate over whole table and calculate the numbers of breaks and other hours
          // for each day
          const timePresent = [];
          const timeWorking = [];
          var overallWorking = 0;

          // iterate over working hours
          const working = Array.from(tableWorking.querySelectorAll('tr:is(.EditRow,.ListItem,.AltListItem)'));
          if (working.length == 2) {
            const rowFrom = Array.from(working[0].querySelectorAll('& > td'));
            const rowTo = Array.from(working[1].querySelectorAll('& > td'));
            for (var i = 0; i < 7; ++i) {
              if (dayAvailable[i]) {
                const start = this.getValueFromCell(rowFrom[i + 2]);
                const end = this.getValueFromCell(rowTo[i + 2]);
                const diff = Utils.difference(start, end);
                const diff2 = diff - (sumBreaks[i] ?? 0) - (sumCompensation[i] ?? 0);
                timePresent[i] = diff;
                timeWorking[i] = diff2;
                overallWorking += diff2;
              }
            }
          }

          // add summary
          const lastRow = tableWorking.querySelector('tr[role="presentation"]');
          if (lastRow) {
            // breaks
            row = document.createElement('tr');
            row.className = "AltListItem";
            lastRow.before(row);
            this.addCell(row, "");
            this.addCell(row, trans('summary_booked_breaks'), "left");
            var sum = 0;
            for (var i = 0; i < 7; ++i) {
              if (dayAvailable[i]) {
                var value = sumBreaks[i] ?? 0;
                sum += value;
                const cell = this.addCell(row, Utils.formatHours(value), "right", isHoliday[i] ? {
                  background: '#dcdcdc'
                } : {});
                if (timeWorking[i] > 6 && value < 0.5) {
                  cell.style.color = "red";
                  cell.style.fontWeight = "700";
                  cell.title = trans('break_min', '30');
                } else if (timeWorking[i] > 9 && value < 0.75) {
                  cell.style.color = "red";
                  cell.style.fontWeight = "700";
                  cell.title = trans('break_min', '45');
                } else if (timeWorking[i] > 10) {
                  cell.style.color = "red";
                  cell.style.fontWeight = "700";
                  cell.title = trans('maxhours_exceeded', '10');
                }
              }
            }
            this.addCell(row, Utils.formatHours(sum));

            // working hours
            row = document.createElement('tr');
            row.className = "ListItem";
            lastRow.before(row);
            this.addCell(row, "");
            this.addCell(row, trans('summary_booked_working'), "left");
            var sum = 0;
            for (var i = 0; i < 7; ++i) {
              if (dayAvailable[i]) {
                var value = sumWorking[i] ?? 0;
                sum += value;
                this.addCell(row, Utils.formatHours(value), "right", isHoliday[i] ? {
                  background: '#dcdcdc'
                } : {});
              }
            }
            const cell = this.addCell(row, Utils.formatHours(sum));
            if (overallBooked < overallWorking) {
              cell.style.color = "red";
              cell.style.fontWeight = "700";
              cell.title = trans('missing_booked_hours', Utils.formatHours(overallWorking - overallBooked));
            }

            // hours from start and end of day
            var row = document.createElement('tr');
            row.className = "ListItem";
            lastRow.before(row);
            this.addCell(row, "");
            this.addCell(row, trans('summary_hours_present'), "left");
            var sum = 0;
            for (var i = 0; i < 7; ++i) {
              if (dayAvailable[i]) {
                var value = timePresent[i] ?? 0;
                sum += value;
                this.addCell(row, Utils.formatHours(value), "right", isHoliday[i] ? {
                  background: '#dcdcdc'
                } : {});
              }
            }
            this.addCell(row, Utils.formatHours(sum));

            // hours from start and end of day w/o breaks
            var row = document.createElement('tr');
            row.className = "ListItem";
            lastRow.before(row);
            this.addCell(row, "");
            this.addCell(row, trans('summary_hours_working'), "left");
            var sum = 0;
            for (var i = 0; i < 7; ++i) {
              if (dayAvailable[i]) {
                var value = (timePresent[i] ?? 0) - (sumBreaks[i] ?? 0);
                sum += value;
                this.addCell(row, Utils.formatHours(value), "right", isHoliday[i] ? {
                  background: '#dcdcdc'
                } : {});
              }
            }
            const cellSum = this.addCell(row, Utils.formatHours(sum));
            if (sum < this.normalHours - overallCompensation) {
              cellSum.style.color = "red";
              cellSum.style.fontWeight = "700";
              cellSum.title = trans('missing_working_hours', Utils.formatHours(this.normalHours - sum - overallCompensation));
            } else {
              cellSum.style.color = "green";
              cellSum.title = trans('additional_hours', Utils.formatHours(overallCompensation + sum - this.normalHours));
            }
          }
        }
      } catch (e) {
        // in case of any error, just ignore the summary
        console.error(trans('error_summary_workinghours', e.message));
      }
    }
  }
  getValueFromCell(cell) {
    const input = cell.querySelector('.InputCell input');
    return input ? input.value : cell.textContent ?? '';
  }
  addCell(row, value, align = "right", style = {}) {
    const cell = document.createElement('td');
    cell.className = "GridCell";
    cell.innerText = value;
    Object.entries(style).forEach(([key, value]) => {
      if (value !== undefined) {
        cell.style.setProperty(key, '' + value);
      }
    });
    cell.style.textAlign = align;
    row.appendChild(cell);
    return cell;
  }
}
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/modules/timesheet/timesheet.less
var timesheet = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/modules/timesheet/timesheet.less");
;// ./src/modules/timesheet/timesheet.less

      
      
      
      
      
      
      
      
      

var timesheet_options = {};

timesheet_options.styleTagTransform = (styleTagTransform_default());
timesheet_options.setAttributes = (setAttributesWithoutAttributes_default());
timesheet_options.insert = insertBySelector_default().bind(null, "head");
timesheet_options.domAPI = (styleDomAPI_default());
timesheet_options.insertStyleElement = (insertStyleElement_default());

var timesheet_update = injectStylesIntoStyleTag_default()(timesheet/* default */.A, timesheet_options);




       /* harmony default export */ const timesheet_timesheet = (timesheet/* default */.A && timesheet/* default */.A.locals ? timesheet/* default */.A.locals : undefined);

;// ./src/modules/timesheet/timesheet.ts




class TimeSheet extends AbstractModule {
  // ----------------------------------------------------------------------
  // Time Entry Screen
  // ----------------------------------------------------------------------

  initModule() {
    // mark time entry table with special CSS class
    document.querySelectorAll('h2.SectionTitle').forEach(e => {
      if (Configuration.getInstance().stickyWorkflowLog()) {
        if (e.textContent.startsWith('Workflow log')) {
          let section = e.closest('.u4-section-placeholder');
          if (section != null) {
            this.sectionWorkflow = section;
            this.setActive();
            this.sectionWorkflow.classList.add('workflowLog');
          }
        }
      }
      const promises = [];
      if (Configuration.getInstance().handleTimesheetDetails()) {
        if (e.textContent == 'Timesheet details') {
          let section = e.closest('.u4-section-placeholder');
          if (section != null) {
            this.sectionTimesheet = section;
            this.setActive();
            // add data tape attributes to table
            promises.push(MarkupUtility.addTypeToTableCells('timesheet', section));
          }
        }
      }
      return Promise.all(promises);
    });
    return Promise.resolve();
  }

  // ----------------------------------------------------------------------
  // Timesheet Details
  // ----------------------------------------------------------------------
  executeModule() {
    const interval = window.setInterval(() => {
      if (!this.sectionTimesheet.classList.contains("timeSheetDetails")) {
        // cancel interval, since UI is now initialized
        window.clearInterval(interval);

        // add CSS class for different types of view (simple / advanced)
        if (this.sectionTimesheet.querySelector('input[type="checkbox"]') == null) {
          this.sectionTimesheet.classList.add('timesheetDetails', 'timesheetDetailsSimple');
        } else {
          this.sectionTimesheet.classList.add('timesheetDetails', 'timesheetDetailsAdvanced');
        }

        // CSS class for locked rows
        if (Configuration.getInstance().hideLockedRows()) {
          this.sectionTimesheet.classList.add('hideLocked');
        }

        // mark complete rows for locked cells
        this.sectionTimesheet.querySelectorAll('.GridCell.Locked').forEach(e => {
          e.closest('tr')?.classList.add('LockedRow');
        });

        // always show work item & project descriptions in timesheet details
        if (Configuration.getInstance().alwaysShowDescriptions()) {
          this.sectionTimesheet.querySelectorAll('tr.MarkRow td[title], tr.ListItemReadOnly td[title], tr.AltListItemReadOnly td[title]').forEach(e => {
            let x = document.createElement('div');
            x.className = 'Message DivOverflowNoWrap Ellipsis Description ListDescription';
            x.style.whiteSpace = "break-spaces";
            x.appendChild(document.createTextNode(e.getAttribute('title') || ''));
            e.appendChild(x);
          });
        }
      }
    }, 100);
  }
}
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/modules/timesheetactions/timesheetactions.less
var timesheetactions = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/modules/timesheetactions/timesheetactions.less");
;// ./src/modules/timesheetactions/timesheetactions.less

      
      
      
      
      
      
      
      
      

var timesheetactions_options = {};

timesheetactions_options.styleTagTransform = (styleTagTransform_default());
timesheetactions_options.setAttributes = (setAttributesWithoutAttributes_default());
timesheetactions_options.insert = insertBySelector_default().bind(null, "head");
timesheetactions_options.domAPI = (styleDomAPI_default());
timesheetactions_options.insertStyleElement = (insertStyleElement_default());

var timesheetactions_update = injectStylesIntoStyleTag_default()(timesheetactions/* default */.A, timesheetactions_options);




       /* harmony default export */ const timesheetactions_timesheetactions = (timesheetactions/* default */.A && timesheetactions/* default */.A.locals ? timesheetactions/* default */.A.locals : undefined);

;// ./src/modules/timesheetactions/timesheetactions.ts



class Timesheetactions extends AbstractModule {
  // ----------------------------------------------------------------------
  // Time Entry Screen Action Buttons
  // ----------------------------------------------------------------------

  initModule() {
    // mark time entry table with special CSS class
    document.querySelectorAll('h2.SectionTitle').forEach(e => {
      if (Configuration.getInstance().experimentalNewActionButtons()) {
        if (e.textContent.startsWith('Time entry')) {
          let section = e.closest('.u4-section-placeholder');
          if (section != null) {
            this.section = section;
            this.setActive();
          }
        }
      }
    });
    return Promise.resolve();
  }
  executeModule() {
    if (this.section) {
      const table = this.section.querySelector('.TableButtonRow').closest('table');
      if (table) {
        //get Instance of original 'Add' btn
        table.querySelectorAll('button').forEach(e => {
          if (Configuration.getInstance().experimentalNewActionButtons()) {
            if (e.textContent.startsWith('Add')) {
              this.standardAddBtn = e;
            }
          }
        });

        //create new table cell
        const inputCell = table.rows[0].insertCell(0);
        inputCell.classList.add('Input');

        //create new table cell
        const buttonCell = table.rows[0].insertCell(1);
        buttonCell.classList.add('Button');

        //create new table cell
        const sepCell = table.rows[0].insertCell(2);

        //create new input
        const input = document.createElement('input');
        input.setAttribute("id", "add-rows-num");
        input.setAttribute('type', 'number');
        input.setAttribute('min', '1');
        input.setAttribute('max', '99');
        input.classList.add('Edit');
        input.value = '10';

        //create new button
        const button = document.createElement("button");
        button.setAttribute("id", "add-rows-btn");
        button.setAttribute("type", "button");
        button.setAttribute("role", "button");
        button.setAttribute("title", "Add new rows to the table");
        button.classList.add('BaseButton');
        button.classList.add('SectionButton');
        button.innerHTML = "<span>Add rows</span>";
        button.addEventListener("click", () => {
          let repeat = 10;
          if (!isNaN(parseInt(input.value))) {
            repeat = parseInt(input.value);
          }
          sessionStorage.setItem("sw_repeatbtnclick", String(repeat));
          this.standardAddBtn.dispatchEvent(new Event('click'));
        });

        //create seperator
        let sepWrapper = document.createElement("div");
        sepWrapper.innerHTML = '&nbsp;|&nbsp;';

        // when the first row was added, this should do the trick
        if (sessionStorage.getItem("sw_repeatbtnclick") !== "") {
          let item = parseInt(sessionStorage.getItem("sw_repeatbtnclick"));
          if (item > 1) {
            item = item - 1;
            sessionStorage.setItem("sw_repeatbtnclick", String(item));
            this.standardAddBtn.dispatchEvent(new Event('click'));
          } else {
            sessionStorage.setItem("sw_repeatbtnclick", "");
          }
        }
        inputCell.appendChild(input);
        buttonCell.appendChild(button);
        sepCell.appendChild(sepWrapper);
      }
    }
  }
  appendDeleteEmptyButton(tablesection) {
    if (tablesection) {
      const table = tablesection.querySelector('.TableButtonRow').closest('table');
      if (table) {
        //get Instance of original 'Delete' btn
        table.querySelectorAll('button').forEach(e => {
          if (Configuration.getInstance().experimentalNewActionButtons()) {
            if (e.textContent.startsWith('Delete')) {
              this.standardDeleteBtn = e;
            }
          }
        });

        //create new table cell
        const buttonCell = table.rows[0].insertCell(5);
        buttonCell.classList.add('Button');

        //create new button
        const button = document.createElement("button");
        button.setAttribute("id", "delete-empty-rows-btn");
        button.setAttribute("type", "button");
        button.setAttribute("role", "button");
        button.setAttribute("title", "Delete empty rows with no hours");
        button.setAttribute("onclick", "");
        button.classList.add('BaseButton');
        button.classList.add('SectionButton');
        button.innerHTML = "<span>Delete empty</span>";
        button.addEventListener("click", () => {
          let repeat = 1;
          //TODO: search empty rows and click selectbox
          //this.standardDeleteBtn.dispatchEvent(new Event('click'));
        });
        buttonCell.appendChild(button);
      }
    }
  }
}
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/modules/global/global.less
var global = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/modules/global/global.less");
;// ./src/modules/global/global.less

      
      
      
      
      
      
      
      
      

var global_options = {};

global_options.styleTagTransform = (styleTagTransform_default());
global_options.setAttributes = (setAttributesWithoutAttributes_default());
global_options.insert = insertBySelector_default().bind(null, "head");
global_options.domAPI = (styleDomAPI_default());
global_options.insertStyleElement = (insertStyleElement_default());

var global_update = injectStylesIntoStyleTag_default()(global/* default */.A, global_options);




       /* harmony default export */ const global_global = (global/* default */.A && global/* default */.A.locals ? global/* default */.A.locals : undefined);

;// ./src/modules/global/global.ts



class Global extends AbstractModule {
  // ----------------------------------------------------------------------
  // Time Entry Screen
  // ----------------------------------------------------------------------

  initModule() {
    const config = Configuration.getInstance();

    // allow time entry with "," as separator
    if (config.allowCommaEntry()) {
      document.querySelectorAll('.timeEntry input[data-type="Double"]').forEach(e => {
        this.setActive();
        e.addEventListener('keydown', event => {
          if (event.key == ',') {
            let sel = e.selectionStart;
            e.value = e.value.slice(0, sel) + "." + e.value.slice(sel);
            e.setSelectionRange(sel + 1, sel + 1);
          }
        });
      });
    }

    // scroll input with focus into view
    var currentFocus = null;
    document.querySelectorAll('.timeEntry').forEach(e => {
      this.setActive();
      e.addEventListener('focusin', event => {
        const ele = event.target;
        if (ele.dataset.type && ele !== currentFocus) {
          currentFocus = ele;
          //ele.scrollIntoView({block: "end", inline: "nearest"});
        }
      });
    });

    // fixed centered dialogs
    if (config.fixedDialogs()) {
      document.body.classList.add("fixedDialog");
    } else {
      document.body.classList.remove("fixedDialog");
    }

    // add some CSS classes based on configuration
    if (config.alwaysShowDescriptions()) document.body.classList.add("alwaysShowDescription");
    if (config.alwaysShowActivity()) document.body.classList.add("alwaysShowActivity");
    return Promise.resolve();
  }
  executeModule() {
    // no actions required
  }
}
;// ./src/modules/timesheetimport/importer/importtask.ts

class ImportTask {
  // max waiting time for a field to be available / get focus
  static retrySeconds = 10;
  constructor(groupId) {
    this.groupId = groupId;
    if (!ImportTask.section) {
      throw new Error('Section not set');
    }
  }
  getGroupId() {
    return this.groupId;
  }
  next() {
    return {
      task: this,
      done: true
    };
  }
  nextAfterReload(recoverable = true) {
    return {
      task: this,
      retry: false,
      reload: true,
      recoverable
    };
  }
  retryAfterReload(recoverable = true) {
    return {
      task: this,
      retry: true,
      reload: true,
      recoverable
    };
  }
  failure(reason) {
    return {
      task: this,
      failed: true,
      failureReason: reason
    };
  }
  // wait a few milliseconds
  wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  //
  // handling of DOM elements in Unit4
  //

  static setSection(section) {
    ImportTask.section = section;
  }

  // wait for element to be available (queried by CSS selector)
  async waitForElements(query) {
    var retries = ImportTask.retrySeconds;
    do {
      const res = ImportTask.section.ownerDocument.querySelectorAll(query);
      if (res !== null && res.length > 0) {
        return [...res];
      }
      await this.wait(1000);
    } while (--retries > 0);
    throw new Error(`Element field not found for: ${query}`);
  }
  async waitForElement(query) {
    const elements = await this.waitForElements(query);
    return elements[0];
  }
  async fieldElement(cell, fieldType) {
    // check if there is an input field in this cell
    const input = cell.querySelector('.InputCell input');
    if (input !== null) {
      input.focus();
      await this.wait(100);
      return {
        field: input,
        value: input.value
      };
    }
    // otherwise return the text of the first div
    const div = cell.querySelector('& > div');
    if (div !== null) {
      return {
        value: div.textContent
      };
    }
    throw new Error(`Field not found for: ${fieldType}`);
  }
  async waitForField(dataType) {
    // find the cell for the data type in the current edited row
    const cell = await this.waitForElement(`.EditRow td[data-type=${dataType}`);

    // check if there is an input field in this cell
    return this.fieldElement(cell, dataType);
  }
  async focusElement(query) {
    const elements = await this.waitForElements(query);
    const ele = elements[0];
    ele.focus();
    return ele;
  }
}
class CloseEditingModeTask extends ImportTask {
  constructor() {
    super('close-editing-mode');
  }
  actionDescription() {
    return "Close editing mode";
  }
  async run() {
    // click on "Close" button to close the editing mode
    const closeButton = ImportTask.section.ownerDocument.querySelector('[title="Close editing mode"');
    if (closeButton) {
      closeButton.click();
      // try to find another button after reload
      return this.retryAfterReload();
    }
    return this.next();
  }
}
class SanityCheckTask extends ImportTask {
  constructor(data) {
    super('sanity-check');
    this.data = data;
  }
  actionDescription() {
    return "Final sanity check";
  }
  async run() {
    const errors = [];
    var sumWorkingTime = 0;
    var sumBookedHours = 0;
    Object.entries(this.data).forEach(([dateStr, day]) => {
      if (day.hours > 9 && day.breaks < 0.75) {
        errors.push("Break issue: min. 45 min breaks on a day with " + day.hours + " hours of work, date: " + dateStr);
      } else if (day.hours > 6 && day.breaks < 0.5) {
        errors.push("Break issue: min. 30 min breaks on a day with " + day.hours + " hours of work, date: " + dateStr);
      }
      const workingTime = day.workingTime - day.breaks;
      sumWorkingTime += workingTime;
      sumBookedHours += day.hours - day.breaks;
      if (workingTime > 10) {
        errors.push("Working time issue: more than 10 hours of working time on date: " + dateStr + "\n   Working time: " + Utils.toLocaleString(workingTime) + " hours, breaks: " + Utils.toLocaleString(day.breaks) + " hours");
      } else if (day.workingTime <= 0) {
        errors.push("Working time issue: no working time on date: " + dateStr);
      }
    });
    if (sumWorkingTime < 40) {
      errors.push("Working time issue: total working time less than 40 hours: " + sumWorkingTime);
    }
    if (sumBookedHours < 40) {
      errors.push("Booked hours issue: total booked hours less than 40 hours: " + sumBookedHours);
    }
    if (errors.length > 0) {
      return this.failure(errors.join("\n\n * "));
    } else {
      return this.next();
    }
  }
}
;// ./src/modules/timesheetimport/importer/progress.ts
class Progress {
  constructor(parent, pending = 0) {
    this.progress = parent.ownerDocument.createElement("span");
    this.progress.classList.add("progress");
    parent.after(this.progress);
    const data = sessionStorage.getItem('import_progress');
    if (data) {
      this.data = JSON.parse(data);
    } else {
      this.data = {
        pending
      };
    }
    this.updateUI();
  }
  save() {
    sessionStorage.setItem('import_progress', JSON.stringify(this.data));
  }
  updatePending(pending) {
    this.data.pending = pending;
    this.save();
    this.updateUI();
  }
  updateUI() {
    if (this.progress) {
      const text = this.data.pending > 0 ? `${this.data.pending} actions pending` : '';
      this.progress.textContent = text;
      this.progress.style.display = this.data.pending > 0 ? 'inline-block' : 'none';
    }
  }
}
;// ./src/modules/timesheetimport/importer/workinghours.ts


class WHImportTask extends ImportTask {
  static createTask(taskData) {
    switch (taskData.task) {
      case 'WorkingStartImportTask':
        return new WorkingStartImportTask(taskData.groupId, new Date(taskData.date), taskData.value);
      case 'WorkingEndImportTask':
        return new WorkingEndImportTask(taskData.groupId, new Date(taskData.date), taskData.value);
    }
  }
  constructor(groupId, date, type, value) {
    super(groupId);
    this.date = date;
    this.type = type;
    this.value = value;
  }
  async lookupCell() {
    const headers = await this.waitForElements('.tmWorkinghours th');
    const rows = await this.waitForElements('.workinghours-section .ListItem, .workinghours-section .AltListItem, .workinghours-section .EditRow');
    const date = new Date(this.date);
    const dateEN = date.getMonth() + 1 + "/" + date.getDate(); // eEN format: M/D      

    const month = String(date.getMonth() + 1).padStart(2, '0');
    const dateDE = date.getDate() + "." + month; // DE format: DD.MM.

    for (var i = 0; i < headers.length; ++i) {
      const head = headers[i];
      if (head.title.includes(dateEN) || head.title.includes(dateDE)) {
        for (var j = 0; j < rows.length; ++j) {
          const cell = rows[j].querySelector('td:nth-of-type(' + (i + 1) + ')');
          const input = cell?.querySelector('.InputCell input');
          if (j === 0 && this.type === "start") {
            return {
              cell,
              input
            };
          } else if (j === 1 && this.type === "end") {
            return {
              cell,
              input
            };
          }
        }
      }
    }
    return {};
  }

  // format time string based on naviogator.language (e.g. AM/PM format)
  formatLocalTime(timeString, field) {
    // Parse the time string (assuming HH:MM or H:MM format)
    const [hours, minutes] = timeString.split(':').map(str => parseInt(str, 10));
    // create date object with the time
    const date = new Date();
    date.setHours(hours, minutes);
    // Format the time based on the user's locale
    return new Intl.DateTimeFormat(navigator.language, {
      hour: "numeric",
      minute: "numeric"
    }).format(date);
  }
  async run() {
    const cell = await this.lookupCell();
    if (cell.input) {
      // fill value
      cell.input.focus();
      cell.input.value = this.formatLocalTime(this.value, cell.input);
      cell.input.blur();
      return this.next();
    } else if (cell.cell) {
      // click to activate and try again
      cell.cell.click();
      return this.retryAfterReload();
    }
    return this.failure(trans('error_date_cell_not_found', this.date.toLocaleDateString()));
  }
}
class WorkingStartImportTask extends WHImportTask {
  constructor(groupId, day, time) {
    super(groupId, day, "start", time);
  }
  actionDescription() {
    return "Enter working time (From) for " + this.date.toLocaleDateString();
  }
}
class WorkingEndImportTask extends WHImportTask {
  constructor(groupId, day, time) {
    super(groupId, day, "end", time);
  }
  actionDescription() {
    return "Enter working time (To) for " + this.date.toLocaleDateString();
  }
}
;// ./src/modules/timesheetimport/importer/workorders.ts


class WOImportTask extends ImportTask {
  static setAddButton(button) {
    WOImportTask.addButton = button;
  }
  static createTask(taskData) {
    switch (taskData.task) {
      case 'StartWorkOrderImportTask':
        return new StartWorkOrderImportTask(taskData.groupId, taskData.workOrder);
      case 'TimecodeImportTask':
        return new TimecodeImportTask(taskData.groupId, taskData.workOrder);
      case 'WorkOrderImportTask':
        return new WorkOrderImportTask(taskData.groupId, taskData.workOrder);
      case 'ActivityImportTask':
        return new ActivityImportTask(taskData.groupId, taskData.workOrder);
      case 'DescriptionImportTask':
        return new DescriptionImportTask(taskData.groupId, taskData.workOrder);
      case 'HoursImportTask':
        return new HoursImportTask(taskData.groupId, taskData.workOrder, new Date(taskData.date), taskData.value);
      case 'WorkOrderSummaryTask':
        return new WorkOrderSummaryTask(taskData.sum, taskData.breaks);
    }
  }
  constructor(groupId, workOrder) {
    super(groupId);
    this.workOrder = workOrder;
    if (!WOImportTask.addButton) {
      throw new Error('Add button not set');
    }
  }

  /**
   * Search a row for the given work order.
   * 
   * @returns
   *   - HTMLElement of the editable row if found
   *   - true if new row will be created or exising row will be made editable (=> page reload)
   */
  async searchExistingRow() {
    // check all rows
    const rows = await this.waitForElements('tr.ListItem,tr.AltListItem,tr.EditRow');
    for (const row of rows) {
      const workOrder = row.querySelector('td[data-type="cell-workorder"] div.ww.ellipsis')?.textContent;
      const activity = row.querySelector('td[data-type="cell-activity"] div.ww.ellipsis')?.textContent;
      const description = row.querySelector('td[data-type="cell-description"] div.ww.ellipsis')?.textContent;
      const timeCode = row.querySelector('td[data-type="cell-timecode"] div.ww.ellipsis')?.textContent;
      if (this.workOrder.workOrder === workOrder && this.workOrder.activity === activity && this.workOrder.timeCode === timeCode && (this.workOrder.description === description || description === 'Internal - Break Time')) {
        // found existing row (readonly), make editable by clicking on it
        // => will reload the page
        const cell = row.querySelector("td[data-type=cell-description] div.ww.ellipsis");
        cell.click();
        return true;
      }
    }
    const editRows = WOImportTask.addButton.ownerDocument.querySelectorAll('tr.EditRow');
    for (const row of editRows) {
      const workOrder = row.querySelector('td[data-type="cell-workorder"] td.InputCell input')?.value;
      const activity = row.querySelector('td[data-type="cell-activity"] td.InputCell input')?.value;
      const description = row.querySelector('td[data-type="cell-description"] td.InputCell input')?.value;
      const timeCode = row.querySelector('td[data-type="cell-timecode"] td.InputCell input')?.value;
      if (this.workOrder.workOrder === workOrder && this.workOrder.activity === activity && this.workOrder.timeCode === timeCode && (this.workOrder.description === description || description === 'Internal - Break Time')) {
        // found existing row (editable), use it
        return row;
      }
    }

    // no mathing row found, create one by clicking "Add" button
    // => this will reload the page
    WOImportTask.addButton.dispatchEvent(new Event('click'));
    return true;
  }
  async activeRow() {
    return this.waitForElement('tr.EditRow');
  }
}
class StartWorkOrderImportTask extends WOImportTask {
  constructor(groupId, workOrder) {
    super(groupId, workOrder);
  }
  actionDescription() {
    return "Begin new work order entry for " + this.workOrder.workOrder;
  }
  async run() {
    const row = await this.searchExistingRow();
    if (row === true) {
      // row is not yet ready, retry after page reload
      return this.nextAfterReload();
    }
    // we found an editable row, use it directly
    return this.next();
  }
}
class WOFieldImportTask extends WOImportTask {
  constructor(groupId, workOrder, cellType, value, reloads) {
    super(groupId, workOrder);
    this.cellType = cellType;
    this.value = value;
    this.reloads = reloads;
  }
  async lookupField(row) {
    return this.waitForField(this.cellType);
  }
  async run() {
    const row = await this.activeRow();
    if (row) {
      const field = await this.lookupField(row);
      if (field === null) {
        // field not found, this should not happen
        return this.failure(`Could not find field for ${this.cellType}`);
      } else if (field.value !== this.value) {
        if (field.field) {
          field.field.dispatchEvent(new Event('focus'));
          field.field.value = this.value;
          field.field.dispatchEvent(new Event('blur'));
          field.field.dispatchEvent(new KeyboardEvent('keydown', {
            code: "Tab",
            key: "Tab",
            keyCode: 9,
            which: 9,
            bubbles: true,
            cancelable: true
          }));
          await this.wait(100);
          // page may reload if value has changed
          return this.reloads ? this.nextAfterReload() : this.next();
        } else {
          return this.failure(`Read-only field for ${this.cellType} has mismatched values, expected: ${this.value}, actual: ${field.value}`);
        }
      } else {
        // value already set, continue with next field
        return this.next();
      }
    } else {
      return this.failure("Could not find active row");
    }
  }
}
class TimecodeImportTask extends WOFieldImportTask {
  constructor(groupId, workOrder) {
    super(groupId, workOrder, 'cell-timecode', workOrder.timeCode, true);
  }
  actionDescription() {
    return "Enter time code for " + this.workOrder.workOrder;
  }
}
class WorkOrderImportTask extends WOFieldImportTask {
  constructor(groupId, workOrder) {
    super(groupId, workOrder, 'cell-workorder', workOrder.workOrder, true);
  }
  actionDescription() {
    return "Enter work order for " + this.workOrder.workOrder;
  }
}
class ActivityImportTask extends WOFieldImportTask {
  constructor(groupId, workOrder) {
    super(groupId, workOrder, 'cell-activity', workOrder.activity, true);
  }
  actionDescription() {
    return "Enter activity for " + this.workOrder.workOrder;
  }
}
class DescriptionImportTask extends WOFieldImportTask {
  constructor(groupId, workOrder) {
    super(groupId, workOrder, 'cell-description', workOrder.description, false);
  }
  actionDescription() {
    return "Enter description for " + this.workOrder.workOrder;
  }
}
class HoursImportTask extends WOFieldImportTask {
  constructor(groupId, workOrder, day, hours) {
    super(groupId, workOrder, 'cell-weekday', Utils.toLocaleString(hours), true);
    this.date = day;
  }
  actionDescription() {
    return "Enter hours for " + this.workOrder.workOrder + " on " + this.date.toLocaleDateString();
  }
  async lookupField(row) {
    const headers = await this.waitForElements('th[data-type=cell-weekday]');
    const cells = await this.waitForElements('.EditRow [data-type=cell-weekday]');

    // requested date
    const dateEN = this.date.getMonth() + 1 + "/" + this.date.getDate(); // eEN format: M/D
    const month = String(this.date.getMonth() + 1).padStart(2, '0');
    const dateDE = this.date.getDate() + "." + month; // DE format: DD.MM.

    for (var i = 0; i < headers.length; ++i) {
      const head = headers[i];
      if (head.title.includes(dateEN) || head.title.includes(dateDE)) {
        // seems to match the date          
        return await this.fieldElement(cells[i], 'cell-weekday[' + i + ']');
      }
    }
    return null;
  }
}
class WorkOrderSummaryTask extends ImportTask {
  constructor(sum, breaks) {
    super('work-order-summary');
    this.sum = sum;
    this.breaks = breaks;
  }
  actionDescription() {
    return "Final check of work order summary";
  }
  async run() {
    // get the sum of hours from Unit4 and compare with
    // given values
    const sumCells = await this.waitForElements('.SumColumn');
    const sumCell = sumCells.pop();
    if (sumCell) {
      const unit4Sum = parseFloat(sumCell.textContent || "0");
      if (unit4Sum !== this.sum) {
        // sum of hours does not match
        return this.failure(`Sum of hours does not match, expected: ${this.sum}, actual: ${unit4Sum}`);
      }
    }
    return this.next();
  }
}
;// ./src/modules/timesheetimport/importer/importer.ts





class Importer {
  tasks = [];
  static getInstance() {
    if (!Importer.instance) {
      Importer.instance = new Importer();
      window.addEventListener("beforeunload", event => {
        console.log("Page gets reloaded ...");
      });
    }
    return Importer.instance;
  }
  constructor() {
    const tasks = sessionStorage.getItem('importerTasks');
    this.tasks = tasks ? JSON.parse(tasks) : [];
    this.progress = new Progress(document.querySelector('.PageTitle'));
  }
  storeTasks() {
    const tasks = this.tasks.map(task => task instanceof ImportTask ? {
      task: task.constructor.name,
      ...task
    } : task);
    sessionStorage.setItem('importerTasks', JSON.stringify(tasks));
  }
  addTask(task) {
    this.tasks.push(task);
    this.storeTasks();
  }
  unshiftTask(task) {
    this.tasks.unshift(task);
    this.storeTasks();
  }
  clearTaskGroup(groupId) {
    this.tasks = this.tasks.filter(task => this.obj(task).getGroupId() !== groupId);
    this.storeTasks();
  }
  obj(taskData) {
    if (taskData instanceof ImportTask) {
      // already have a full object
      return taskData;
    }

    // decide based on task property

    // general tasks
    switch (taskData.task) {
      case 'CloseEditingModeTask':
        return new CloseEditingModeTask();
      case 'SanityCheckTask':
        return new SanityCheckTask(taskData.data);
    }

    // tasks from other modules
    const task = WOImportTask.createTask(taskData) || WHImportTask.createTask(taskData);
    if (task) {
      return task;
    }
    throw new Error('Unknown task type: ' + taskData.task + "|" + JSON.stringify(taskData));
  }
  currentTask() {
    const taskData = this.tasks[0];
    return taskData ? this.obj(taskData) : undefined;
  }
  popTask() {
    const task = this.tasks.shift();
    this.storeTasks();
    return task && this.obj(task);
  }
  async runTasks() {
    var task;
    if (this.tasks.length > 0) {
      sessionStorage.setItem("show_summary_on_finish", "true");
      this.progress.updatePending(this.tasks.length);
      while ((task = this.popTask()) !== undefined) {
        // run the task
        const result = await task.run();
        if (result.reload) {
          console.log("Expect page reload after running task: " + task.constructor.name);
          if (result.retry) {
            // retry the same task again
            this.unshiftTask(task);
          }
          // last action should reload the page - if this has not been done for 5s,
          // log an error and proceed with next action?
          await this.wait(5000);
          // page has not yet reloaded
          if (result.recoverable) {
            // recoverable => log error and move on with next action                    
            this.addFailed(task.actionDescription(), result.failureReason);
          } else {
            // not recoverable => log error and abort rest of workorder
            this.addFailed(task.actionDescription(), result.failureReason);
            // skip tasks for same group
            this.clearTaskGroup(task.getGroupId());
          }
        } else if (result.failed) {
          // not recoverable => log error and abort rest of workorder
          this.addFailed(task.actionDescription(), result.failureReason);
          // skip tasks for same group
          this.clearTaskGroup(task.getGroupId());
        } else if (result.done) {
          await this.wait(250);
        }
        this.progress.updatePending(this.tasks.length);
      }
    }
    if (sessionStorage.getItem("show_summary_on_finish") === "true") {
      // Show summary when at least one task has been processed
      sessionStorage.removeItem("show_summary_on_finish");
      const failed = this.getFailed();
      var text = '';
      if (failed.length > 0) {
        text = failed.length + ' failed actions from import (' + new Date().toLocaleString() + "):\n";
        failed.forEach(f => {
          text += "\n----------------------------------------------------------------------------------------------------\n\n";
          text += f.action + "\n";
          text += f.message;
          if (f.data) {
            text += " | data: " + JSON.stringify(f.data);
          }
          text += "\n";
        });
        // store last failures in storage
        sessionStorage.setItem("import_failed_summary", text);
      } else {
        text = "JSON import finished\n";
        // clear any previous failures from storage
        sessionStorage.removeItem("import_failed_summary");
      }
      Utils.showDialog(text);
    }
  }

  //
  // failure handling
  //
  // add an entry to the failed ones
  addFailed(action, message, data) {
    if (message) {
      // load failed ones    
      var failedList = this.getFailed();
      failedList.push({
        action,
        message,
        data
      });
      sessionStorage.setItem("import_failed", JSON.stringify(failedList));
    }
  }
  getFailed() {
    var rawFailedList = sessionStorage.getItem("import_failed");
    sessionStorage.removeItem("import_failed");
    var failedList = [];
    if (rawFailedList !== null && rawFailedList !== "") {
      failedList = JSON.parse(rawFailedList);
    }
    return failedList;
  }
  clearFailed() {
    sessionStorage.removeItem("import_failed");
    sessionStorage.removeItem("import_failed_summary");
  }
  async wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/modules/timesheetimport/timesheetimport.less
var timesheetimport = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/modules/timesheetimport/timesheetimport.less");
;// ./src/modules/timesheetimport/timesheetimport.less

      
      
      
      
      
      
      
      
      

var timesheetimport_options = {};

timesheetimport_options.styleTagTransform = (styleTagTransform_default());
timesheetimport_options.setAttributes = (setAttributesWithoutAttributes_default());
timesheetimport_options.insert = insertBySelector_default().bind(null, "head");
timesheetimport_options.domAPI = (styleDomAPI_default());
timesheetimport_options.insertStyleElement = (insertStyleElement_default());

var timesheetimport_update = injectStylesIntoStyleTag_default()(timesheetimport/* default */.A, timesheetimport_options);




       /* harmony default export */ const timesheetimport_timesheetimport = (timesheetimport/* default */.A && timesheetimport/* default */.A.locals ? timesheetimport/* default */.A.locals : undefined);

;// ./src/modules/timesheetimport/timesheetimport.ts








class Timesheetimport extends AbstractModule {
  // max waiting time for a field to be available / get focus
  static retrySeconds = 10;

  // ----------------------------------------------------------------------
  // Time Entry Screen Action Buttons
  // ----------------------------------------------------------------------

  //private progress!: HTMLElement;

  initModule() {
    if (Configuration.getInstance().experimentalJsonImport()) {
      // add import button and progress if this feature is enabled in configuration
      document.querySelectorAll('h2.SectionTitle').forEach(e => {
        if (e.textContent.startsWith('Time entry')) {
          let section = e.closest('.u4-section-placeholder');
          if (section != null) {
            this.section = section;
            this.section.classList.add("timeentry-section");
            this.setActive();
          }
        } else if (e.textContent.startsWith('Working hours')) {
          let section = e.closest('.u4-section-placeholder');
          if (section != null) {
            this.sectionWorkingHours = section;
            this.sectionWorkingHours.classList.add("workinghours-section");
          }
        }
      });
    }
    return Promise.resolve();
  }
  executeModule() {
    if (this.section) {
      const table = this.section.querySelector('.TableButtonRow')?.closest('table');
      if (table) {
        //get Instance of original 'Add' btn
        table.querySelectorAll('button').forEach(e => {
          if (e.textContent === 'Add') {
            this.standardAddBtn = e;
          }
        });
        if (this.standardAddBtn) {
          // create modal import dialog
          this.dialog = document.createElement("div");
          this.dialog.classList.add("modalDialog");
          this.dialog.style.display = 'none';
          this.dialogEntry = document.createElement("textarea");
          this.dialog.appendChild(this.dialogEntry);
          const dialogButtons = document.createElement("div");
          dialogButtons.classList.add("modalDialog__buttons");
          this.dialog.appendChild(dialogButtons);
          const dialogOK = document.createElement("button");
          dialogOK.setAttribute("type", "button");
          dialogOK.classList.add("RibbonInlineButton", "RibbonInlineButtonHappy");
          dialogOK.innerHTML = "<span>Start Import</span>";
          dialogOK.addEventListener('click', this.actionImport.bind(this));
          dialogButtons.appendChild(dialogOK);
          const dialogCancel = document.createElement("button");
          dialogCancel.setAttribute("type", "button");
          dialogCancel.classList.add("RibbonInlineButton");
          dialogCancel.innerHTML = "<span>Cancel</span>";
          dialogCancel.addEventListener('click', this.actionClose.bind(this));
          dialogButtons.appendChild(dialogCancel);
          document.body.appendChild(this.dialog);

          // create new button for import
          const buttonImportCell = document.createElement("td");
          table.rows[0].insertBefore(buttonImportCell, this.standardAddBtn.parentElement);
          buttonImportCell.classList.add('Button');
          buttonImportCell.style.paddingRight = "0";
          const buttonImport = document.createElement("button");
          buttonImport.setAttribute("id", "json-import-btn");
          buttonImport.setAttribute("type", "button");
          buttonImport.setAttribute("role", "button");
          buttonImport.setAttribute("title", "Import data from JSON");
          buttonImport.setAttribute("onclick", "");
          buttonImport.classList.add('BaseButton');
          buttonImport.classList.add('SectionButton');
          buttonImport.innerHTML = "<span>Import JSON</span>";
          buttonImport.addEventListener("click", this.actionDialog.bind(this));
          buttonImportCell.appendChild(buttonImport);

          // create new button for last errors
          const buttonFailedCell = document.createElement("td");
          table.rows[0].insertBefore(buttonFailedCell, this.standardAddBtn.parentElement);
          buttonFailedCell.classList.add('Button');
          buttonFailedCell.style.paddingLeft = "0";
          this.buttonFailed = document.createElement("button");
          this.buttonFailed.setAttribute("id", "json-import-failed-btn");
          this.buttonFailed.setAttribute("type", "button");
          this.buttonFailed.setAttribute("role", "button");
          this.buttonFailed.setAttribute("title", "Show last failed imports");
          this.buttonFailed.setAttribute("onclick", "");
          this.buttonFailed.classList.add('BaseButton');
          this.buttonFailed.classList.add('SectionButton');
          this.buttonFailed.innerHTML = "<span>failed</span>";
          this.buttonFailed.addEventListener("click", () => {
            Utils.showDialog(sessionStorage.getItem("import_failed_summary") ?? 'No failed actions');
          });
          this.failedUpdate();
          buttonFailedCell.appendChild(this.buttonFailed);
        }

        // Run pending tasks from importer
        const importer = Importer.getInstance();
        WOImportTask.setSection(this.section);
        WOImportTask.setAddButton(this.standardAddBtn);
        this.runTasks();
      }
    }
  }
  failedUpdate() {
    this.buttonFailed.disabled = sessionStorage.getItem("import_failed_summary") === null;
  }

  // show modal dialog
  actionDialog() {
    this.dialogEntry.value = '';
    this.dialog.style.display = 'flex';
    this.dialogEntry.focus();
  }

  // close modal dialog
  actionClose() {
    this.dialog.style.display = 'none';
    this.dialogEntry.value = '';
  }
  runTasks() {
    const importer = Importer.getInstance();
    importer.runTasks().then(() => {
      this.failedUpdate();
    });
  }

  // start the import
  actionImport() {
    try {
      const json = JSON.parse(this.dialogEntry.value);
      // check if we have old or new format
      var data = [];
      var days = {};
      if (json.hasOwnProperty('days') || json.hasOwnProperty('entries')) {
        // new format
        data = json.entries ?? [];
        days = json.days ?? {};
      } else {
        // old format
        data = json;
        days = {};
      }

      /*
      New format (including working times):
      {
        "days": {
            "2026-04-27": {
                "start": "08:00",
                "end": "18:00"
            }
        },
        "entries": [
          {
            "workOrder": "400002-10027", "activity": "100", "description": "Import test #1",
            "time": [
              { "date": "2023-05-01", "hours": "1.5" },
              { "date": "2023-05-02", "hours": "0.75" }
            ]
          },
          {
            "workOrder": "400002-10025", "activity": "100", "description": "Import test #2",
            "time": [
              { "date": "2023-05-03", "hours": "1.25" },
              { "date": "2023-05-05", "hours": "4.75" }
            ]
          }
        ]      
      }
      */

      const importer = Importer.getInstance();

      // import work orders
      WOImportTask.setSection(this.section);
      WOImportTask.setAddButton(this.standardAddBtn);
      const daily = {};

      // close all editing modes before import (so that no edit row is still active)
      importer.addTask(new CloseEditingModeTask());

      // import working hours
      Object.entries(days).forEach(([dateStr, day]) => {
        const date = new Date(dateStr);
        const groupId = ["workinghours", dateStr].join('|');
        importer.addTask(new WorkingStartImportTask(groupId, date, day.start));
        importer.addTask(new WorkingEndImportTask(groupId, date, day.end));
        // update daily working time for sanity check
        if (!daily[dateStr]) {
          daily[dateStr] = {
            hours: 0,
            breaks: 0,
            workingTime: 0
          };
        }
        // calculate working time based on start and end time (format: HH:MM)
        daily[dateStr].workingTime = Utils.difference(day.start, day.end);
      });

      // close all editing modes after storing working hours
      importer.addTask(new CloseEditingModeTask());
      var sumHours = 0,
        sumBreaks = 0;
      data.forEach(entry => {
        // group all tasks for the same work order together
        const groupId = ["workorders", entry.timeCode, entry.workOrder, entry.activity, entry.description].join('|');
        importer.addTask(new StartWorkOrderImportTask(groupId, entry));
        importer.addTask(new TimecodeImportTask(groupId, entry));
        importer.addTask(new WorkOrderImportTask(groupId, entry));
        importer.addTask(new ActivityImportTask(groupId, entry));
        importer.addTask(new DescriptionImportTask(groupId, entry));
        entry.time.forEach(timeEntry => {
          const hours = Utils.toNumber(timeEntry.hours);
          importer.addTask(new HoursImportTask(groupId, entry, new Date(timeEntry.date), hours));
          // sum hours and breaks
          sumHours += hours;
          if (entry.timeCode === "99") {
            sumBreaks += hours;
          }
          // data for sanity check
          if (!daily[timeEntry.date]) {
            daily[timeEntry.date] = {
              hours: 0,
              breaks: 0,
              workingTime: 0
            };
          }
          if (entry.timeCode === "99") {
            daily[timeEntry.date].breaks += hours;
          } else {
            daily[timeEntry.date].hours += hours;
          }
        });
      });

      // close all editing modes at the end
      importer.addTask(new CloseEditingModeTask());

      // check sum of hours
      importer.addTask(new WorkOrderSummaryTask(sumHours, sumBreaks));

      // General sanity check
      importer.addTask(new SanityCheckTask(daily));

      // close dialog
      this.actionClose();

      // handle first import item
      importer.clearFailed();
      importer.runTasks();
    } catch (e) {
      console.error(e);
      alert("Import data must be valid JSON");
    }
  }
}
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/index.less
var cjs_js_src = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/index.less");
;// ./src/index.less

      
      
      
      
      
      
      
      
      

var src_options = {};

src_options.styleTagTransform = (styleTagTransform_default());
src_options.setAttributes = (setAttributesWithoutAttributes_default());
src_options.insert = insertBySelector_default().bind(null, "head");
src_options.domAPI = (styleDomAPI_default());
src_options.insertStyleElement = (insertStyleElement_default());

var src_update = injectStylesIntoStyleTag_default()(cjs_js_src/* default */.A, src_options);




       /* harmony default export */ const src = (cjs_js_src/* default */.A && cjs_js_src/* default */.A.locals ? cjs_js_src/* default */.A.locals : undefined);

;// ./src/index.ts








class Unit4Enhancer {
  // list of modules to use
  static modules = [TimeEntry, TimeSheet, Timesheetactions, Timesheetimport, Global];
  async main() {
    const version = package_namespaceObject.rE;
    var active = false;
    var initialization = [];
    var modules = [];
    Unit4Enhancer.modules.forEach(m => {
      const module = new m();
      initialization.push(module.initModule());
      modules.push(module);
    });
    if (window.parent == window.self) {
      // only show config button on top level
      Configuration.getInstance().addConfigUI();
    }
    Promise.all(initialization).then(() => {
      // check if we have active modules at all
      modules.forEach(module => {
        if (module.isActive()) {
          active = true;
        }
      });

      // execute all active modules
      if (active) {
        console.log("Unit4 enhancements " + version + " active ... ");
        modules.forEach(m => {
          if (m.isActive()) {
            m.executeModule();
          }
        });
      }
    });
  }
}
const inst = new Unit4Enhancer();
inst.main().catch(e => {
  console.error(e);
});
/******/ })()
;