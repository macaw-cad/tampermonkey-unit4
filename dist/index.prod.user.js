// ==UserScript==
// @name          userscript-macaw-unit4
// @description   Unit4 enhancements - will enhance the user interface and add some new features (macaw Unit4 only)
// @namespace     https://ubw.unit4cloud.com/
// @version       0.10.11
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
.ftzCorrection {
  flex: 1 1 auto;
  width: 100%;
  box-sizing: border-box;
  overflow-y: auto;
  margin-bottom: 10px;
  padding: 20px;
  background: #fffdf0;
  border: 1px solid #c9b458;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}
.ftzCorrection__heading {
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 16px 0;
}
.ftzCorrection__warning {
  margin-bottom: 20px;
  padding: 12px 16px;
  background: #fde8e8;
  border: 1px solid #d9534f;
  border-radius: 6px;
}
.ftzCorrection__warning .ftzCorrection__heading {
  color: #a12622;
}
.ftzCorrection__info {
  margin-bottom: 20px;
  padding: 12px 16px;
  background: #eaf2fb;
  border: 1px solid #5b8fc7;
  border-radius: 6px;
}
.ftzCorrection__rowItem {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 4px 12px;
}
.ftzCorrection__linkButton {
  padding: 0 4px;
  border: 0;
  background: transparent;
  color: #2a6ab3;
  font-size: 12px;
  cursor: pointer;
}
.ftzCorrection__linkButton:hover {
  text-decoration: underline;
}
.ftzCorrection__override {
  flex: 1 0 100%;
  margin: 4px 0 6px 16px;
}
.ftzCorrection__override .ftzCorrection__row {
  margin-bottom: 4px;
}
.ftzCorrection__check {
  display: block;
  margin: 4px 0 6px 0;
  font-size: 14px;
  cursor: pointer;
}
.ftzCorrection__group {
  margin-bottom: 18px;
  padding-bottom: 12px;
  border-bottom: 1px solid #e6dca8;
}
.ftzCorrection__occurrences {
  margin: 6px 0 0 4px;
}
.ftzCorrection__occurrence {
  font-size: 13px;
  color: #555;
  padding: 2px 0;
}
.ftzCorrection__row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
}
.ftzCorrection__label {
  min-width: 220px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 15px;
}
.ftzCorrection__input {
  flex: 0 0 200px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 15px;
  padding: 4px 6px;
  border: 1px solid #888;
  border-radius: 4px;
}
.ftzCorrection__suggestions {
  max-height: 180px;
  overflow-y: auto;
  margin: 0 0 8px 0;
  font-size: 13px;
  color: #555;
}
.ftzCorrection__suggestion {
  display: flex;
  gap: 12px;
  width: 100%;
  padding: 3px 6px;
  border: 0;
  border-radius: 4px;
  background: transparent;
  text-align: left;
  font-size: 13px;
  cursor: pointer;
}
.ftzCorrection__suggestion:hover {
  background: #f3ecc4;
}
.ftzCorrection__suggestion--selected {
  background: #e6dca8;
  font-weight: bold;
}
.ftzCorrection__suggestionCode {
  flex: 0 0 110px;
  font-family: 'Courier New', Courier, monospace;
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
const package_namespaceObject = {"rE":"0.10.11"};
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


const DEFAULT_FTZ_DESCRIPTION_RULES = [{
  regex: '.+',
  template: '{{Ticket}} {{Comment}}'
}];

/**
 * Work orders whose bookings do not count as presence (vacation, bank holiday, overtime
 * compensation, sick leave, ...): the Excel import books their hours, but their start/end times
 * are neither used for the working hours (From/To) nor for the break gaps.
 * Format: work order with an optional activity in parentheses, "*" as wildcard.
 * Extend this list with new knowledge; users can add or remove rules in the configuration.
 */
const DEFAULT_NON_PRESENCE_RULES = ['950000-10000',
// DE3 internal: vacation (900), bank holiday (906), child sick (905), overtime compensation (908), ...
'950100-10025',
// DE3 sick leave (moved away from 950000-10000)
'940000-10000',
// DE2 internal, assumed to work like 950000-10000 in DE3
'940100-10025' // DE2 sick leave, assumed to work like 950100-10025 in DE3
];
/**
 * Work order (with activity) to book overtime compensation per Unit4 client, used by the Excel
 * import to fill up missing hours of a week. Users can override or add clients in the configuration.
 */
const DEFAULT_OVERTIME_WORK_ORDERS = {
  'DE3': '950000-10000 (908)',
  'DE2': '940000-10000 (908)' // assumed to work like DE3
};
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
        experimentalFtZExcelImport: {
          label: '[Timesheet Entry]: Import data from Florians tollige Zeiterfassung Excel<copy>This is an experimental feature to fill in workorders based on a "Florians tollige Zeiterfassung" Excel document</copy>',
          labelPos: 'right',
          type: 'checkbox',
          default: false
        },
        nonPresenceWorkOrders: {
          label: '[Timesheet Entry]: Work orders not counting as presence<copy>Bookings on these work orders (e.g. vacation, overtime compensation) are imported with their hours, but their times do not count for the working hours (From/To) and the breaks. One rule per line, optionally with an activity in parentheses and "*" as wildcard; text behind the rule is ignored.<br/>A line starting with "-" removes a default rule or adds an exception, e.g. "-950000-10000 (906)".<br/>Default rules: ' + DEFAULT_NON_PRESENCE_RULES.join(', ') + '</copy>',
          labelPos: 'left',
          type: 'textarea',
          default: ''
        },
        overtimeWorkOrders: {
          label: '[Timesheet Entry]: Work order for overtime compensation per client<copy>Used by the Excel import to fill up missing hours of a week. One client per line with the work order and activity, e.g. "DE3 950000-10000 (908)"; "DE3 -" disables it for a client.<br/>Defaults: ' + Object.entries(DEFAULT_OVERTIME_WORK_ORDERS).map(([client, wo]) => client + ' ' + wo).join(', ') + '</copy>',
          labelPos: 'left',
          type: 'textarea',
          default: ''
        },
        ftzDescriptionRules: {
          label: '[Timesheet Entry]: FtZ description rules<copy>JSON array of {regex, template} rules. First matching rule wins.<br/>Available placeholders: {{Weekday}}, {{Start}}, {{End}}, {{Duration}}, {{WorkOrder}}, {{WorkOrderInput}}, {{Ticket}}, {{Comment}}.<br/>Default: [{"regex":".+","template":"{{Ticket}} {{Comment}}"}]</copy>',
          labelPos: 'left',
          type: 'textarea',
          default: JSON.stringify(DEFAULT_FTZ_DESCRIPTION_RULES)
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
      css: 'copy { display: block; margin-left: 40px; font-weight: normal; } #MacawUnit4Config_wrapper { margin-bottom: 100px; } #MacawUnit4Config * { font-size: 13px; font-family: dagny, arial, tahoma, verdana, sans-serif; } #MacawUnit4Config_buttons_holder { background: #f8f8f8; position: fixed; bottom: 0; left: 0; right: 0; padding: 10px; border-top: 1px solid black; } #MacawUnit4Config .config_var textarea { display: block; width: 100%; margin-top: 4px; min-height: 80px; }'
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
  experimentalFtZExcelImport() {
    return GM_config.get('experimentalFtZExcelImport');
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

  // default rules plus the user's rules ("-" = exclude)
  nonPresenceRules() {
    const raw = GM_config.get('nonPresenceWorkOrders');
    const lines = [...DEFAULT_NON_PRESENCE_RULES, ...(typeof raw === 'string' ? raw.split(/\r?\n/) : [])];
    const glob = pattern => new RegExp('^' + pattern.replace(/[.+?^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '.*') + '$');
    const rules = [];
    lines.forEach(line => {
      // "[-|+]<work order> [(<activity>)] [comment]"
      const match = line.trim().match(/^([+-]?)\s*([\d*][\d*-]*)\s*(?:\(\s*([\d*]+)\s*\))?/);
      if (match) {
        rules.push({
          exclude: match[1] === '-',
          workOrder: glob(match[2]),
          activity: match[3] ? glob(match[3]) : null
        });
      }
    });
    return rules;
  }

  /**
   * Does a booking on this work order / activity count as presence? See DEFAULT_NON_PRESENCE_RULES.
   * An empty activity (Unit4 default) only matches rules without activity.
   */
  isNonPresence(workOrder, activity) {
    const matches = rule => rule.workOrder.test(workOrder) && (rule.activity === null || rule.activity.test(activity));
    const rules = this.nonPresenceRules();
    return rules.some(r => !r.exclude && matches(r)) && !rules.some(r => r.exclude && matches(r));
  }

  /**
   * Work order (e.g. "950000-10000 (908)") to book overtime compensation for a Unit4 client
   * (e.g. "DE3"), null if there is none.
   */
  overtimeWorkOrder(client) {
    const workOrders = {
      ...DEFAULT_OVERTIME_WORK_ORDERS
    };
    const raw = GM_config.get('overtimeWorkOrders');
    (typeof raw === 'string' ? raw.split(/\r?\n/) : []).forEach(line => {
      const match = line.trim().match(/^(\S+)\s+(.+)$/);
      if (match) {
        workOrders[match[1].toUpperCase()] = match[2].trim();
      }
    });
    const workOrder = workOrders[client.toUpperCase()];
    return workOrder && workOrder !== '-' ? workOrder : null;
  }
  ftzDescriptionRules() {
    const raw = GM_config.get('ftzDescriptionRules');
    if (typeof raw !== 'string' || raw.trim() === '') {
      return DEFAULT_FTZ_DESCRIPTION_RULES;
    }
    try {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        return parsed.filter(r => typeof r.regex === 'string' && typeof r.template === 'string');
      }
    } catch {
      // ignore malformed JSON and fall back to default
    }
    return DEFAULT_FTZ_DESCRIPTION_RULES;
  }

  /**
   * Build the description for a Florians tollige Zeiterfassung booking.
   * The first rule whose regex matches the ticket wins.
   * Falls back to "{{Ticket}} {{Comment}}" if no rule matches or no ticket is present.
   */
  formatFtZDescription(entry) {
    const rules = this.ftzDescriptionRules();
    const ticket = entry.ticket.trim();
    const comment = entry.comment.trim();
    for (const rule of rules) {
      let re;
      try {
        re = new RegExp(rule.regex, 'i');
      } catch {
        continue;
      }
      if (ticket !== '' && re.test(ticket)) {
        return rule.template.replace(/\{\{Weekday\}\}/g, entry.weekday).replace(/\{\{Start\}\}/g, entry.start).replace(/\{\{End\}\}/g, entry.end).replace(/\{\{Duration\}\}/g, entry.duration).replace(/\{\{WorkOrder\}\}/g, entry.workOrder).replace(/\{\{WorkOrderInput\}\}/g, entry.workOrderInput).replace(/\{\{Ticket\}\}/g, ticket).replace(/\{\{Comment\}\}/g, comment);
      }
    }
    return ticket !== '' ? `${ticket} ${comment}` : comment;
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
    'summary_hours_present': 'Attendance<br><small style="color:gray">From > To</small>',
    'summary_booked_breaks': 'Total booked breaks',
    'summary_booked_working': 'Total booked working time entries',
    'missing_booked_hours': '%1 less booked hours than working hours',
    'missing_weekly_hours': '%1 less hours than expected (%2)',
    'summary_hours_working': 'Working hours<br><small style="color:gray">From > To w/o breaks/nonworking</small>',
    'missing_working_hours': 'Missing booked hours: %1',
    'additional_hours': 'Additional hours: %1',
    'break_min': 'You need at least %1 minutes break',
    'maxhours_exceeded': 'You must not work more than %1 hours a day',
    'sum_breaks': '∑ breaks',
    'sum_nonworking': '∑ non-working',
    'sum_working': '∑ working'
  },
  'de': {
    'error_date_cell_not_found': 'Zelle für Datum %1 wurde nicht gefunden',
    'error_summary_workinghours': 'Fehler beim Zusammenfassen der Arbeitsstunden: %1',
    'summary_hours_present': 'Anwesenheit<br><small style="color:gray">Von > Bis</small>',
    'summary_booked_breaks': 'Gebuchte Pausen',
    'summary_booked_working': 'Gebuchte Arbeitszeiteinträge',
    'missing_booked_hours': '%1 weniger Zeiteinträge als Arbeitsstunden',
    'missing_weekly_hours': '%1 weniger Stunden als erwartet (%2)',
    'summary_hours_working': 'Arbeitszeit<br><small style="color:gray">Von > Bis ohne Pausen/Nicht-Arbeitszeit</small>',
    'missing_working_hours': 'Fehlende Arbeitszeit: %1',
    'additional_hours': 'Zusätzliche Stunden: %1',
    'break_min': 'Du benötigst mindestens %1 Minuten Pause',
    'maxhours_exceeded': 'Du darfst nicht mehr als %1 Stunden pro Tag arbeiten',
    'sum_breaks': '∑ Pausen',
    'sum_nonworking': '∑ Nicht-Arbeitszeit',
    'sum_working': '∑ Arbeitszeit'
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
  category(timecode, activity, workorder) {
    // breaks have special time code
    if (timecode === '99') return 'break';

    // non-working time (vacation, bank holiday, sick leave, overtime compensation, ...):
    // shared rules with the Excel import, see DEFAULT_NON_PRESENCE_RULES in the configuration
    if (Configuration.getInstance().isNonPresence(workorder.trim(), activity.trim())) return 'nonworking';

    // everything else is working time
    return 'working';
  }
  summarize() {
    if (this.workingHoursSection) {
      try {
        const tableEntry = this.section.querySelector('table.tmTimeentry tbody');
        const tableWorking = this.workingHoursSection.querySelector('table.tmWorkinghours tbody');
        const sumWorking = [];
        const sumBreaks = [];
        const sumNonworking = [];
        const isHoliday = [];
        const dayAvailable = [];
        var overallBooked = 0;
        var overallNonworking = 0;
        var cellSumWorking = null;
        if (tableEntry) {
          // iterate over header to find time code column and first weekday column
          const columns = Array.from(this.section.querySelectorAll('table.Excel th'));
          var colWorkOrder = Number.MAX_VALUE;
          var colTimeCode = Number.MAX_VALUE;
          var colActivity = Number.MAX_VALUE;
          var colWeekdays = Number.MAX_VALUE;
          for (var col = 0; col < columns.length; col++) {
            const cell = columns[col];
            switch (columns[col].getAttribute("data-type")) {
              case 'cell-weekday':
                colWeekdays = Math.min(col, colWeekdays);
                break;
              case 'cell-workorder':
                colWorkOrder = col;
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
              const workOrder = this.getValueFromCell(cells[colWorkOrder]);
              for (var i = 0; i < 7; ++i) {
                if (dayAvailable[i]) {
                  const hours = Utils.toNumber(this.getValueFromCell(cells[colWeekdays + i]));
                  const cat = this.category(timeCode, activity, workOrder);
                  if (cat === 'break') {
                    sumBreaks[i] = (sumBreaks[i] ?? 0) + hours;
                  } else if (cat === 'nonworking') {
                    sumNonworking[i] = (sumNonworking[i] ?? 0) + hours;
                    overallNonworking += hours;
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

            // non-working only
            row = document.createElement('tr');
            row.className = "SumItem";
            lastRow.before(row);
            for (var i = 0; i < 8; ++i) {
              this.addCell(row, "");
            }
            this.addCell(row, trans('sum_nonworking'));
            this.addCell(row, "");
            var sum = 0;
            for (var i = 0; i < 7; ++i) {
              if (dayAvailable[i]) {
                var value = sumNonworking[i] ?? 0;
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
            const missingBooked = this.normalHours - overallBooked - overallNonworking;
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
                // non-working time (e.g. a doctor's appointment) may lie within From/To or outside
                // (e.g. overtime compensation at the end of the day, a vacation day). The bookings
                // have no times, so only subtract as much of it as From/To leaves beside the
                // breaks and the booked working hours.
                const presentNonworking = Math.max(0, Math.min(sumNonworking[i] ?? 0, diff - (sumBreaks[i] ?? 0) - (sumWorking[i] ?? 0)));
                const diff2 = diff - (sumBreaks[i] ?? 0) - presentNonworking;
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

            // hours from start and end of day w/o breaks and non-working time within
            var row = document.createElement('tr');
            row.className = "ListItem";
            lastRow.before(row);
            this.addCell(row, "");
            this.addCell(row, trans('summary_hours_working'), "left");
            var sum = 0;
            for (var i = 0; i < 7; ++i) {
              if (dayAvailable[i]) {
                var value = timeWorking[i] ?? 0;
                sum += value;
                this.addCell(row, Utils.formatHours(value), "right", isHoliday[i] ? {
                  background: '#dcdcdc'
                } : {});
              }
            }
            const cellSum = this.addCell(row, Utils.formatHours(sum));
            if (sum < this.normalHours - overallNonworking) {
              cellSum.style.color = "red";
              cellSum.style.fontWeight = "700";
              cellSum.title = trans('missing_working_hours', Utils.formatHours(this.normalHours - sum - overallNonworking));
            } else {
              cellSum.style.color = "green";
              cellSum.title = trans('additional_hours', Utils.formatHours(overallNonworking + sum - this.normalHours));
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
    if (input) return input.value;
    const div = cell.querySelector('.DivOverflowNoWrap');
    if (div) return div.textContent ?? '';
    return cell.textContent ?? '';
  }
  addCell(row, value, align = "right", style = {}) {
    const cell = document.createElement('td');
    cell.className = "GridCell";
    cell.innerHTML = value;
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

/**
 * Set the value of a Unit4 input without triggering its request (page reload).
 * Unit4 takes over every field whose hidden IsDirty flag is set with the next request of the page
 * (e.g. Add, Close editing mode or activating another row), so several fields can be filled at once.
 */
function setValueWithoutRequest(input, value) {
  input.value = value;
  const dirty = input.closest('td[data-type]')?.querySelector('input[id$="_IsDirty"]');
  if (!dirty) {
    console.warn('No IsDirty flag found for ' + input.id + ', value will not be sent');
    return;
  }
  // do NOT fall back to a change event: for hour cells Unit4's onchange handler sends the request
  // right away, before the other cells of the row are filled
  const before = dirty.value;
  callPageFunction('setDirty', dirty.id);
  if (dirty.value === before) {
    console.warn('setDirty did not mark ' + dirty.id + ' as dirty, value may not be sent');
  }
}

/**
 * Call a global function of the Unit4 page. Tampermonkey may run the userscript in a sandbox where
 * the page's globals are not visible, in that case the call runs in a short-lived script element
 * inside the page context.
 */
function callPageFunction(name, ...args) {
  const fn = window[name];
  if (typeof fn === 'function') {
    fn(...args);
    return;
  }
  const script = document.createElement('script');
  script.textContent = name + '(' + args.map(arg => JSON.stringify(arg)).join(', ') + ');';
  (document.head ?? document.documentElement).appendChild(script);
  script.remove();
}

/**
 * Check if a day column header belongs to the given day: either an English weekday token as used
 * by the FtZ import (mon, tue, ...) or an ISO date as used by the JSON import (YYYY-MM-DD).
 */
function headerMatchesDay(head, day) {
  if (/^\d{4}-\d{2}-\d{2}$/.test(day)) {
    const date = new Date(day);
    const dateEN = date.getMonth() + 1 + "/" + date.getDate(); // EN format: M/D
    const dateDE = date.getDate() + "." + String(date.getMonth() + 1).padStart(2, '0'); // DE format: DD.MM.
    return head.title.includes(dateEN) || head.title.includes(dateDE);
  }
  return (head.textContent ?? '').replace(/[_.\s]/g, '').toLowerCase().startsWith(day);
}

/**
 * Expected hours of the timesheet from the "Normal hours" field of the timesheet header
 * (already reduced by bank holidays, part-time and month boundaries), null if not available.
 */
function readNormalHours(doc) {
  for (const td of doc.querySelectorAll('td.label')) {
    if (td.textContent?.includes('Normal hours')) {
      const input = td.nextElementSibling?.querySelector('input[type="text"]');
      const hours = input ? Utils.toNumber(input.value) : NaN;
      if (!isNaN(hours)) {
        return hours;
      }
    }
  }
  return null;
}
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
  /**
   * @param nonWorkingHours hours of the week that are no work but count towards the normal hours
   *   (e.g. vacation, overtime compensation)
   */
  constructor(data, nonWorkingHours = 0) {
    super('sanity-check');
    this.data = data;
    this.nonWorkingHours = nonWorkingHours;
  }
  actionDescription() {
    return "Final sanity check";
  }

  // expected hours of this timesheet, 40 if the "Normal hours" field is not available
  static normalHours() {
    return readNormalHours(ImportTask.section.ownerDocument) ?? 40;
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
      // day.hours already excludes the breaks (they are counted separately)
      sumBookedHours += day.hours;
      if (workingTime > 10) {
        errors.push("Working time issue: more than 10 hours of working time on date: " + dateStr + "\n   Working time: " + Utils.toLocaleString(workingTime) + " hours, breaks: " + Utils.toLocaleString(day.breaks) + " hours");
      } else if (day.workingTime <= 0) {
        errors.push("Working time issue: no working time on date: " + dateStr);
      }
    });
    const normalHours = SanityCheckTask.normalHours();
    const nonWorking = this.nonWorkingHours > 0 ? " + " + this.nonWorkingHours + " non-working" : "";
    if (sumWorkingTime + this.nonWorkingHours < normalHours) {
      errors.push("Working time issue: total working time less than " + normalHours + " hours (normal hours): " + sumWorkingTime + nonWorking);
    }
    if (sumBookedHours + this.nonWorkingHours < normalHours) {
      errors.push("Booked hours issue: total booked hours less than " + normalHours + " hours (normal hours): " + sumBookedHours + nonWorking);
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
      case 'WorkingRowImportTask':
        return new WorkingRowImportTask(taskData.groupId, taskData.type, taskData.times);
    }
  }
  constructor(groupId, type) {
    super(groupId);
    this.type = type;
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
}

// fills the whole From (or To) row at once. Only activating the row reloads the page; the values
// are sent with the next request (activating the other row or closing the editing mode).
class WorkingRowImportTask extends WHImportTask {
  // day (weekday token like "mon" or ISO date, see headerMatchesDay) -> time (HH:MM)

  constructor(groupId, type, times) {
    super(groupId, type);
    this.times = times;
  }
  actionDescription() {
    return "Enter working time (" + (this.type === "start" ? "From" : "To") + ") for " + Object.keys(this.times).join(', ');
  }
  async run() {
    const headers = await this.waitForElements('.tmWorkinghours th');
    const rows = await this.waitForElements('.workinghours-section .ListItem, .workinghours-section .AltListItem, .workinghours-section .EditRow');
    // first row: From, second row: To
    const row = rows[this.type === "start" ? 0 : 1];
    const cells = {};
    for (var i = 0; i < headers.length; ++i) {
      const day = Object.keys(this.times).find(d => headerMatchesDay(headers[i], d));
      const cell = row?.querySelector('td:nth-of-type(' + (i + 1) + ')');
      if (day && cell) {
        cells[day] = cell;
      }
    }
    const missing = Object.keys(this.times).filter(w => !cells[w]);
    if (missing.length === Object.keys(this.times).length) {
      return this.failure(trans('error_date_cell_not_found', missing.join(', ')));
    }
    const first = Object.values(cells)[0];
    if (!first.querySelector('.InputCell input')) {
      // row is not editable yet: click to activate and try again
      first.click();
      return this.retryAfterReload();
    }
    Object.entries(cells).forEach(([day, cell]) => {
      const input = cell.querySelector('.InputCell input');
      if (input) {
        setValueWithoutRequest(input, this.formatLocalTime(this.times[day], input));
      }
    });
    return missing.length > 0 ? this.failure(trans('error_date_cell_not_found', missing.join(', '))) : this.next();
  }
}
;// ./src/modules/timesheetimport/importer/workorders.ts


/**
 * Does a time entry row belong to this work order? An empty activity, time code or description in
 * the import data (e.g. the FtZ import) matches whatever Unit4 prefilled (activity 100, time code 0,
 * its default description).
 */
function rowMatchesWorkOrder(wo, row) {
  const matches = (expected, actual) => !expected || expected === actual;
  return wo.workOrder === row.workOrder && matches(wo.activity, row.activity) && matches(wo.timeCode, row.timeCode) && (matches(wo.description, row.description) || row.description === 'Internal - Break Time');
}
class WOImportTask extends ImportTask {
  static setAddButton(button) {
    WOImportTask.addButton = button;
  }
  static createTask(taskData) {
    switch (taskData.task) {
      case 'StartWorkOrderImportTask':
        return new StartWorkOrderImportTask(taskData.groupId, taskData.workOrder);
      case 'EmptyRowStartWorkOrderImportTask':
        return new EmptyRowStartWorkOrderImportTask(taskData.groupId, taskData.workOrder);
      case 'TimecodeImportTask':
        return new TimecodeImportTask(taskData.groupId, taskData.workOrder);
      case 'WorkOrderImportTask':
        return new WorkOrderImportTask(taskData.groupId, taskData.workOrder);
      case 'ActivityImportTask':
        return new ActivityImportTask(taskData.groupId, taskData.workOrder);
      case 'DescriptionImportTask':
        return new DescriptionImportTask(taskData.groupId, taskData.workOrder);
      case 'RowHoursImportTask':
        return new RowHoursImportTask(taskData.groupId, taskData.workOrder, taskData.hours);
      case 'StartBreakRowImportTask':
        return new StartBreakRowImportTask(taskData.groupId);
      case 'WorkOrderSummaryTask':
        return new WorkOrderSummaryTask(taskData.sum, taskData.breaks, taskData.rows, taskData.days);
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
    const found = await this.findExistingRow();
    if (found !== null) {
      return found;
    }

    // no mathing row found, create one by clicking "Add" button
    // => this will reload the page
    WOImportTask.addButton.dispatchEvent(new Event('click'));
    return true;
  }

  /**
   * Search an existing row for the given work order (without adding a new one).
   *
   * @returns
   *   - HTMLElement of the editable row if found
   *   - true if an existing row will be made editable (=> page reload)
   *   - null if there is no matching row
   */
  async findExistingRow() {
    // check all rows
    const rows = await this.waitForElements('tr.ListItem,tr.AltListItem,tr.EditRow');
    for (const row of rows) {
      const workOrder = row.querySelector('td[data-type="cell-workorder"] div.ww.ellipsis')?.textContent;
      const activity = row.querySelector('td[data-type="cell-activity"] div.ww.ellipsis')?.textContent;
      const description = row.querySelector('td[data-type="cell-description"] div.ww.ellipsis')?.textContent;
      const timeCode = row.querySelector('td[data-type="cell-timecode"] div.ww.ellipsis')?.textContent;
      if (this.matchesRow(workOrder, activity, timeCode, description)) {
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
      if (this.matchesRow(workOrder, activity, timeCode, description)) {
        // found existing row (editable), use it
        return row;
      }
    }
    return null;
  }
  async activeRow() {
    return this.waitForElement('tr.EditRow');
  }
  matchesRow(workOrder, activity, timeCode, description) {
    return rowMatchesWorkOrder(this.workOrder, {
      workOrder,
      activity,
      timeCode,
      description
    });
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

// reuse an empty time entry row before adding a new one. The import dialog adds such a row to get
// a context for Unit4's workorder lookup; Unit4 keeps it with an "Illegal value" warning.
// Only for normal hours (time code 0), as the empty row is prefilled with that time code.
class EmptyRowStartWorkOrderImportTask extends StartWorkOrderImportTask {
  async run() {
    // an existing row of this work order (repeated import) takes precedence over the empty row
    const existing = await this.findExistingRow();
    if (existing === true) {
      return this.nextAfterReload();
    } else if (existing !== null) {
      return this.next();
    }
    const rows = await this.waitForElements('.timeentry-section tr.ListItem, .timeentry-section tr.AltListItem, .timeentry-section tr.EditRow');
    for (const row of rows) {
      const cell = row.querySelector('td[data-type="cell-workorder"]');
      if (!cell) {
        continue; // no time entry row (e.g. summary rows)
      }
      // only an empty normal-hours row: no workorder, no hours and time code 0 (or none).
      // Unit4 prefills the description ("Normal hours") and activity (100) of a new row,
      // rows with another time code (e.g. absences) have no workorder either.
      // read the value only (input or value div), not the description the timeentry module
      // appends to workorder cells ("always show descriptions")
      const text = (td, valueDiv) => (td?.querySelector('.InputCell input')?.value ?? td?.querySelector(valueDiv)?.textContent ?? '').trim();
      const hasHours = [...row.querySelectorAll('td[data-type="cell-weekday"]')].some(td => (Utils.toNumber(text(td, 'div.ww')) || 0) !== 0);
      const timeCode = text(row.querySelector('td[data-type="cell-timecode"]'), 'div.ww.ellipsis');
      if (text(cell, 'div.ww.ellipsis') !== '' || hasHours || timeCode !== '' && timeCode !== '0') {
        continue;
      }
      if (row.classList.contains('EditRow')) {
        // empty row is already editable, fill it directly
        return this.next();
      }
      const description = row.querySelector('td[data-type=cell-description] div.ww.ellipsis');
      if (description) {
        // make the empty row editable => page reload
        description.click();
        return this.nextAfterReload();
      }
    }
    return super.run();
  }
}

// activate the break booking that Unit4 auto-inserts (activity 999 / "Internal - Break Time"),
// so that the following hour tasks can write into its day cells
class StartBreakRowImportTask extends ImportTask {
  constructor(groupId) {
    super(groupId);
  }
  actionDescription() {
    return "Open break row (activity 999)";
  }
  isBreakRow(row) {
    const activityText = row.querySelector('td[data-type="cell-activity"] div.ww.ellipsis')?.textContent?.trim();
    const activityInput = row.querySelector('td[data-type="cell-activity"] .InputCell input')?.value?.trim();
    const descText = row.querySelector('td[data-type="cell-description"] div.ww.ellipsis')?.textContent?.trim();
    const descInput = row.querySelector('td[data-type="cell-description"] .InputCell input')?.value?.trim();
    return activityText === '999' || activityInput === '999' || descText === 'Internal - Break Time' || descInput === 'Internal - Break Time';
  }
  async run() {
    const rows = await this.waitForElements('tr.ListItem, tr.AltListItem, tr.EditRow');
    for (const row of rows) {
      if (this.isBreakRow(row)) {
        if (row.classList.contains('EditRow')) {
          // break row is already editable
          return this.next();
        }
        const cell = row.querySelector('td[data-type=cell-description] div.ww.ellipsis');
        if (cell) {
          // make the break row editable => page reload
          cell.click();
          return this.nextAfterReload();
        }
        return this.failure('Break row description cell not found');
      }
    }
    return this.failure('Break row (activity 999) not found');
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
// enters the hours of all days into the active row at once. The values are only marked dirty and
// sent with the next request (Add for the next row or Close editing mode), instead of one page
// reload per day.
class RowHoursImportTask extends WOImportTask {
  // day (weekday token like "mon" or ISO date, see headerMatchesDay) -> hours

  constructor(groupId, workOrder, hours) {
    super(groupId, workOrder);
    this.hours = hours;
  }
  actionDescription() {
    return "Enter hours for " + (this.workOrder.workOrder || this.workOrder.description) + " on " + Object.keys(this.hours).join(', ');
  }
  async run() {
    // scope to the time entry grid: the working hours grid uses the same cell-weekday markup
    // and would otherwise receive the hours whenever its From/To row is in editing mode
    const headers = await this.waitForElements('.timeentry-section th[data-type=cell-weekday]');
    const cells = await this.waitForElements('.timeentry-section .EditRow [data-type=cell-weekday]');
    const missing = [];
    Object.entries(this.hours).forEach(([day, hours]) => {
      const i = headers.findIndex(head => headerMatchesDay(head, day));
      const input = i >= 0 ? cells[i]?.querySelector('.InputCell input') : null;
      if (input) {
        // leave unchanged values alone (e.g. zeros in a new row on a repeated import)
        if (Math.abs((Utils.toNumber(input.value) || 0) - hours) > 0.001) {
          setValueWithoutRequest(input, Utils.toLocaleString(hours));
        }
      } else {
        missing.push(day);
      }
    });
    return missing.length > 0 ? this.failure(`Could not find hour field for ${missing.join(', ')}`) : this.next();
  }
}

// a time entry row of the import (work order + description)

class WorkOrderSummaryTask extends ImportTask {
  /**
   * @param rows rows of this import and
   * @param days imported days (weekday tokens or ISO dates, see headerMatchesDay):
   *   used to list other rows with hours on these days when the sum does not match
   */
  constructor(sum, breaks, rows = [], days = []) {
    super('work-order-summary');
    this.sum = sum;
    this.breaks = breaks;
    this.rows = rows;
    this.days = days;
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
      // parse locale-aware: Unit4 renders the total with a decimal comma (e.g. "47,50"),
      // and parseFloat would stop at the comma and drop the fraction.
      const unit4Sum = Utils.toNumber(sumCell.textContent || "0");
      if (Math.abs(unit4Sum - this.sum) > 0.001) {
        // sum of hours does not match
        return this.failure(`Sum of hours does not match, expected: ${this.sum}, actual: ${unit4Sum}` + this.foreignRows());
      }
    }
    return this.next();
  }

  // explain a sum mismatch: rows with hours on imported days that are not part of this import,
  // e.g. an outdated row after the description changed, a partial import or manual bookings
  foreignRows() {
    const section = ImportTask.section;
    const headers = [...section.querySelectorAll('th[data-type=cell-weekday]')];
    const dayColumns = headers.map((head, i) => ({
      i,
      label: head.title.replace(/\s*-\s*Header\s*$/, '').trim()
    })).filter(({
      i
    }) => this.days.some(day => headerMatchesDay(headers[i], day)));
    const lines = [];
    section.querySelectorAll('tr.ListItem, tr.AltListItem').forEach(row => {
      const value = type => row.querySelector(`td[data-type="${type}"] div.ww.ellipsis`)?.textContent?.trim() ?? '';
      const workOrder = value('cell-workorder');
      const description = value('cell-description');
      if (workOrder === '' || value('cell-activity').startsWith('999') || this.rows.some(r => r.workOrder === workOrder && (!r.description || r.description === description))) {
        return; // no work order row (break, absence, summary) or part of this import
      }
      const cells = row.querySelectorAll('td[data-type=cell-weekday]');
      const hours = dayColumns.map(({
        i,
        label
      }) => ({
        label,
        text: cells[i]?.textContent?.trim() ?? ''
      })).filter(({
        text
      }) => (Utils.toNumber(text) || 0) !== 0).map(({
        label,
        text
      }) => `${label} ${text}`);
      if (hours.length > 0) {
        lines.push(` * ${workOrder} · ${description} (${hours.join(', ')})`);
      }
    });
    return lines.length === 0 ? '' : "\n\nRows with hours on imported days that are not part of this import" + " (e.g. changed description or work order, partial import, or booked manually):\n" + lines.join("\n");
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
        return new SanityCheckTask(taskData.data, taskData.nonWorkingHours);
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
        text = "Import finished\n";
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









// one parsed row of the "Florians tollige Zeiterfassung" day-log (columns A-I)

// a time entry row as currently shown in the timesheet, to skip unchanged rows on a repeated import

// missing hours of the week, to be booked as overtime compensation on the given weekdays

class Timesheetimport extends AbstractModule {
  // max waiting time for a field to be available / get focus
  static retrySeconds = 10;

  // valid Unit4 workorder format, e.g. 950100-10005
  static workOrderPattern = /^\d{6}-\d{5}$/;

  // weekday tokens of the merged "Wochentag" column
  static ftzWeekdays = new Set(['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So']);

  // German weekday (column B) -> English grid header token
  static ftzWeekdayToken = {
    'Mo': 'mon',
    'Di': 'tue',
    'Mi': 'wed',
    'Do': 'thu',
    'Fr': 'fri',
    'Sa': 'sat',
    'So': 'sun'
  };

  // a single time cell, e.g. 09:00 or 46:15
  static ftzTimeRe = /^\d{1,2}:\d{2}$/;

  // localStorage key for remembering how the user corrected invalid column-F workorders
  static ftzCorrectionStorageKey = 'ftzWorkOrderCorrections';

  // sessionStorage key for the pasted text while the page reloads to open a row for the workorder lookup
  static ftzPendingDialogStorageKey = 'ftzPendingDialog';

  // shared import dialog for JSON and FtZ data (the review view is FtZ only)

  ftzEntries = [];
  // parsed JSON data while its workorders are reviewed (null for FtZ data)
  jsonReview = null;
  // bookings on weekdays the current timesheet does not contain (skipped by the import)
  ftzOutsideEntries = [];
  ftzCorrectionInputs = new Map();
  // corrections that differ from the workorder's correction for single rows (original workorder +
  // description, see ftzRowKey), e.g. "123456-10002" for the meeting bookings on "123456"
  ftzRowOverrides = new Map();
  // a row has already been opened for the workorder lookup, do not try again
  ftzLookupRowRequested = false;
  // proposal to fill up the missing hours of the week with overtime compensation (FtZ review)
  ftzOvertimeFill = null;
  ftzOvertimeCheckbox = null;

  // ----------------------------------------------------------------------
  // Time Entry Screen Action Buttons
  // ----------------------------------------------------------------------

  //private progress!: HTMLElement;

  initModule() {
    if (Configuration.getInstance().experimentalJsonImport() || Configuration.getInstance().experimentalFtZExcelImport()) {
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
          // one import button for JSON and FtZ data, the format is detected on import
          this.addImportUI(table);
          this.addFailedButtonUI(table);
        }

        // Run pending tasks from importer
        const importer = Importer.getInstance();
        WOImportTask.setSection(this.section);
        WOImportTask.setAddButton(this.standardAddBtn);
        if (this.ftzDialog) {
          this.restoreFtZDialog();
        }
        this.runTasks();
      }
    }
  }
  addFailedButtonUI(table) {
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
  addImportUI(table) {
    // create modal import dialog for JSON and "Florians tollige Zeiterfassung" Excel data
    this.ftzDialog = document.createElement("div");
    this.ftzDialog.classList.add("modalDialog");
    this.ftzDialog.style.display = 'none';

    // paste area for JSON or the tab-separated Excel export
    this.ftzDialogEntry = document.createElement("textarea");
    this.ftzDialogEntry.setAttribute("placeholder", "JSON oder Excel-Daten hier einfügen (Excel: Select-All → Copy aus Florians tollige Zeiterfassung)");
    this.ftzDialog.appendChild(this.ftzDialogEntry);

    // correction area for invalid workorders (hidden until validation fails)
    this.ftzCorrectionContainer = document.createElement("div");
    this.ftzCorrectionContainer.classList.add("ftzCorrection");
    this.ftzCorrectionContainer.style.display = 'none';
    this.ftzDialog.appendChild(this.ftzCorrectionContainer);
    const dialogButtons = document.createElement("div");
    dialogButtons.classList.add("modalDialog__buttons");
    this.ftzDialog.appendChild(dialogButtons);
    this.ftzOkButton = document.createElement("button");
    this.ftzOkButton.setAttribute("type", "button");
    this.ftzOkButton.classList.add("RibbonInlineButton", "RibbonInlineButtonHappy");
    this.ftzOkButton.innerHTML = "<span>Start Import</span>";
    this.ftzOkButton.addEventListener('click', this.actionFtZExcelImport.bind(this));
    dialogButtons.appendChild(this.ftzOkButton);
    const dialogCancel = document.createElement("button");
    dialogCancel.setAttribute("type", "button");
    dialogCancel.classList.add("RibbonInlineButton");
    dialogCancel.innerHTML = "<span>Cancel</span>";
    dialogCancel.addEventListener('click', this.actionFtZExcelClose.bind(this));
    dialogButtons.appendChild(dialogCancel);
    document.body.appendChild(this.ftzDialog);

    // create new button for the import
    const buttonImportCell = document.createElement("td");
    table.rows[0].insertBefore(buttonImportCell, this.standardAddBtn.parentElement);
    buttonImportCell.classList.add('Button');
    buttonImportCell.style.paddingRight = "0";
    const buttonImport = document.createElement("button");
    buttonImport.setAttribute("id", "import-btn");
    buttonImport.setAttribute("type", "button");
    buttonImport.setAttribute("role", "button");
    buttonImport.setAttribute("title", "Import data from JSON or Florians tollige Zeiterfassung Excel");
    buttonImport.setAttribute("onclick", "");
    buttonImport.classList.add('BaseButton');
    buttonImport.classList.add('SectionButton');
    buttonImport.innerHTML = "<span>Import</span>";
    buttonImport.addEventListener("click", this.actionFtZExcelDialog.bind(this));
    buttonImportCell.appendChild(buttonImport);
  }
  failedUpdate() {
    if (!this.buttonFailed) {
      return;
    }
    this.buttonFailed.disabled = sessionStorage.getItem("import_failed_summary") === null;
  }

  // show the import modal dialog
  actionFtZExcelDialog() {
    this.ftzDialogEntry.value = '';
    this.ftzLookupRowRequested = false;
    this.resetFtZView();
    this.ftzDialog.style.display = 'flex';
    this.ftzDialogEntry.focus();
  }

  // close the import modal dialog
  actionFtZExcelClose() {
    this.ftzDialog.style.display = 'none';
    this.ftzDialogEntry.value = '';
    this.resetFtZView();
  }

  // reset the FtZ dialog back to the paste view
  resetFtZView() {
    this.ftzEntries = [];
    this.ftzOvertimeFill = null;
    this.ftzOvertimeCheckbox = null;
    this.jsonReview = null;
    this.ftzOutsideEntries = [];
    this.ftzCorrectionInputs = new Map();
    this.ftzRowOverrides = new Map();
    this.ftzCorrectionContainer.innerHTML = '';
    this.ftzCorrectionContainer.style.display = 'none';
    this.ftzDialogEntry.style.display = '';
    this.ftzOkButton.innerHTML = "<span>Start Import</span>";
    this.ftzOkButton.disabled = false;
  }
  runTasks() {
    const importer = Importer.getInstance();
    importer.runTasks().then(() => {
      this.failedUpdate();
    });
  }

  // start the import: JSON data goes to the JSON import, Excel data to the FtZ import
  actionFtZExcelImport() {
    const inCorrectionView = this.ftzCorrectionContainer.style.display !== 'none';
    if (!inCorrectionView) {
      // phase 1: detect the pasted format and branch to the matching importer
      const text = this.ftzDialogEntry.value;
      const format = Timesheetimport.detectImportFormat(text);
      if (format === 'json') {
        if (!Configuration.getInstance().experimentalJsonImport()) {
          alert("Der JSON-Import ist in der Konfiguration deaktiviert.");
          return;
        }
        this.jsonReview = Timesheetimport.parseJsonImport(text);
        if (this.jsonReview === null) {
          return;
        }

        // invalid workorders get the same review view (incl. workorder lookup) as the FtZ import
        const invalid = this.distinctInvalidWorkOrders();
        if (invalid.length > 0 && !this.ftzLookupRowRequested && this.ftzLookupContext() === null) {
          this.requestFtZLookupRow();
          return;
        }
        if (invalid.length > 0) {
          this.renderFtZCorrections(invalid, []);
          return;
        }
        this.startJsonImport();
        return;
      }
      if (format === null) {
        alert("Unbekanntes Format. Bitte JSON-Daten oder die kompletten Excel-Daten aus Florians tollige Zeiterfassung (inkl. Tabellenkopf) einfügen.");
        return;
      }
      if (!Configuration.getInstance().experimentalFtZExcelImport()) {
        alert("Der Excel-Import (Florians tollige Zeiterfassung) ist in der Konfiguration deaktiviert.");
        return;
      }

      // parse the pasted tab-separated data
      this.jsonReview = null;
      this.ftzEntries = Timesheetimport.parseFtZTsv(text);

      // set aside bookings on weekdays that are not part of the current timesheet
      // (e.g. a week split by a month end), they cannot be imported
      const gridWeekdays = this.ftzGridWeekdays();
      if (gridWeekdays.size > 0) {
        const inGrid = e => gridWeekdays.has(Timesheetimport.ftzWeekdayToken[e.weekday]);
        this.ftzOutsideEntries = this.ftzEntries.filter(e => !inGrid(e) && !Timesheetimport.isBreakEntry(e));
        this.ftzEntries = this.ftzEntries.filter(e => inGrid(e));
      }

      // on first pass: show the review view if anything needs attention (missing, invalid or outside the week)
      const missing = this.ftzEntries.filter(e => e.workOrder === '' && !Timesheetimport.isBreakEntry(e));
      const invalid = this.distinctInvalidWorkOrders();

      // the workorder lookup needs a time entry row in editing mode: open one (page reload),
      // the dialog is restored afterwards with suggestions
      if (invalid.length > 0 && !this.ftzLookupRowRequested && this.ftzLookupContext() === null) {
        this.requestFtZLookupRow();
        return;
      }

      // offer to fill up the week to the normal hours with overtime compensation
      this.ftzOvertimeFill = this.ftzOvertimeProposal();
      if (missing.length > 0 || invalid.length > 0 || this.ftzOutsideEntries.length > 0 || this.ftzOvertimeFill !== null) {
        this.renderFtZCorrections(invalid, missing);
        return;
      }
    } else {
      // phase 2: apply the user corrections to the stored entries: a correction for a single row
      // wins over the correction of its workorder
      this.reviewEntries().forEach(entry => {
        const original = entry.workOrder;
        const input = this.ftzCorrectionInputs.get(original);
        if (!input) {
          return;
        }
        const override = this.ftzRowOverrides.get(Timesheetimport.ftzRowKey(original, this.reviewDescription(entry)));
        // the correction may carry an activity as well, e.g. "950000-10000 (908)"
        // an empty or unchanged own correction (still the original workorder) falls back to the workorder's one
        const ownValue = override?.value.trim() ?? '';
        const corrected = Timesheetimport.splitFtZWorkOrder(ownValue !== '' && ownValue !== original ? ownValue : input.value);
        entry.workOrder = corrected.workOrder;
        if (corrected.activity !== '') {
          entry.activity = corrected.activity;
        }
      });

      // remember valid corrections of the workorders (incl. activity) so they are prefilled next time;
      // corrections of single rows are not remembered, as descriptions change from week to week
      this.ftzCorrectionInputs.forEach((input, original) => {
        const corrected = Timesheetimport.splitFtZWorkOrder(input.value);
        if (input.value.trim() !== original && Timesheetimport.workOrderPattern.test(corrected.workOrder)) {
          this.saveFtZCorrection(original, input.value.trim());
        }
      });

      // invalid workorders block the import until fixed; missing ones (FtZ only) are just a warning
      const invalid = this.distinctInvalidWorkOrders();
      if (invalid.length > 0) {
        const missing = this.jsonReview ? [] : this.ftzEntries.filter(e => e.workOrder === '' && !Timesheetimport.isBreakEntry(e));
        this.renderFtZCorrections(invalid, missing);
        return;
      }
    }

    // all invalid workorders resolved -> start the real import
    if (this.jsonReview) {
      this.startJsonImport();
    } else {
      this.startFtZImport();
    }
  }

  // start the JSON import with the (corrected) entries of the review
  startJsonImport() {
    const json = this.jsonReview;
    if (json && this.importJsonData(json.data, json.days)) {
      this.actionFtZExcelClose();
    }
  }

  // entries whose workorders are reviewed: the JSON entries or the FtZ bookings
  reviewEntries() {
    return this.jsonReview ? this.jsonReview.data : this.ftzEntries;
  }

  // description of the Unit4 row an entry ends up in
  reviewDescription(entry) {
    return this.jsonReview ? entry.description ?? '' : Configuration.getInstance().formatFtZDescription(entry);
  }

  // key of a Unit4 row in the review: original workorder + description
  static ftzRowKey(workOrder, description) {
    return workOrder + '\u0000' + description;
  }

  // open a time entry row for the workorder lookup. Unit4 reloads the page for that, so the pasted
  // text is kept in sessionStorage and restoreFtZDialog() reopens the dialog after the reload.
  requestFtZLookupRow() {
    this.ftzLookupRowRequested = true;
    sessionStorage.setItem(Timesheetimport.ftzPendingDialogStorageKey, this.ftzDialogEntry.value);

    // prefer an existing workorder row, otherwise add an empty one (reused by the import later)
    const row = [...this.section.querySelectorAll('tr.ListItem, tr.AltListItem')].find(r => r.querySelector('td[data-type="cell-workorder"]') && !Timesheetimport.isBreakRow(r));
    const cell = row?.querySelector('td[data-type=cell-description] div.ww.ellipsis');
    this.ftzDialogEntry.style.display = 'none';
    this.ftzCorrectionContainer.textContent = 'Workorder-Suche wird vorbereitet, Unit4 lädt kurz neu …';
    this.ftzCorrectionContainer.style.display = 'block';
    this.ftzOkButton.disabled = true;
    if (cell) {
      cell.click();
    } else {
      this.standardAddBtn.dispatchEvent(new Event('click'));
    }

    // Unit4 did not reload: continue without suggestions (unless the dialog was cancelled meanwhile)
    window.setTimeout(() => {
      sessionStorage.removeItem(Timesheetimport.ftzPendingDialogStorageKey);
      if (this.ftzDialog.style.display === 'none') {
        return;
      }
      this.resetFtZView();
      this.actionFtZExcelImport();
    }, 5000);
  }

  // reopen the FtZ dialog with the pasted text after the reload triggered by requestFtZLookupRow()
  restoreFtZDialog() {
    const text = sessionStorage.getItem(Timesheetimport.ftzPendingDialogStorageKey);
    if (text === null) {
      return;
    }
    sessionStorage.removeItem(Timesheetimport.ftzPendingDialogStorageKey);
    if (Importer.getInstance().currentTask()) {
      return; // an import is running, do not interfere
    }
    this.actionFtZExcelDialog();
    this.ftzDialogEntry.value = text;
    this.ftzLookupRowRequested = true;
    this.actionFtZExcelImport();
  }

  // JSON starts with [ or {, the Excel export is recognized by its bookings (never valid JSON)
  static detectImportFormat(text) {
    const trimmed = text.trim();
    if (trimmed.startsWith('[') || trimmed.startsWith('{')) {
      return 'json';
    }
    return Timesheetimport.parseFtZTsv(text).length > 0 ? 'ftz' : null;
  }

  // load the saved column-F -> corrected workorder map from localStorage
  loadFtZCorrections() {
    try {
      return JSON.parse(localStorage.getItem(Timesheetimport.ftzCorrectionStorageKey) ?? '{}');
    } catch {
      return {};
    }
  }

  // persist a single column-F -> corrected workorder mapping
  saveFtZCorrection(original, corrected) {
    const map = this.loadFtZCorrections();
    map[original] = corrected;
    localStorage.setItem(Timesheetimport.ftzCorrectionStorageKey, JSON.stringify(map));
  }

  // build and run the import tasks from the parsed (and corrected) FtZ entries
  startFtZImport() {
    const importer = Importer.getInstance();
    WOImportTask.setSection(this.section);
    WOImportTask.setAddButton(this.standardAddBtn);

    // group bookings by workorder + comment; sum the durations per weekday

    const groups = new Map();
    let sumHours = 0;

    // imported work hours per weekday, for the final sanity check
    const hoursByDay = new Map();

    // earliest start / latest end per weekday for the working-hours (From/To) fields

    const workingDay = new Map();

    // break hours per weekday, derived from the gaps between the day's bookings,
    // for the auto-inserted activity-999 row
    const breaksByDay = new Map();
    let sumBreaks = 0;

    // all booking intervals (decimal hours) per weekday, used to compute the break gaps

    const dayIntervals = new Map();

    // intervals of non-presence bookings per weekday: they do not define the working hours, but
    // a non-presence block within the working hours (e.g. a doctor's appointment) is no break
    const nonPresenceIntervals = new Map();

    // all weekdays with bookings (incl. days with non-presence bookings only, e.g. vacation)
    const importDays = new Set();
    // hours of bookings that do not count as presence (vacation, overtime compensation, ...)
    let nonWorkingHours = 0;
    this.ftzEntries.forEach(entry => {
      const token = Timesheetimport.ftzWeekdayToken[entry.weekday];
      if (!token) return; // unknown weekday

      // "Pause" marker rows carry no work time -> ignore them entirely
      if (Timesheetimport.isBreakEntry(entry)) return;
      const hours = Utils.hoursFromTimestring(entry.duration);
      if (isNaN(hours) || hours <= 0) return;
      importDays.add(token);

      // vacation, overtime compensation etc.: only the duration counts, the times in the Excel
      // are no presence (see DEFAULT_NON_PRESENCE_RULES)
      const nonPresence = entry.workOrder !== '' && Configuration.getInstance().isNonPresence(entry.workOrder, entry.activity);

      // collect the booking interval (defines presence -> gaps between them are breaks) and
      // the working-hours window (min start / max end). Bookings without a workorder count
      // as well, so that window and breaks are derived from the same bookings.
      if (nonPresence && entry.start !== '' && entry.end !== '') {
        const list = nonPresenceIntervals.get(token) ?? [];
        list.push({
          start: Utils.hoursFromTimestring(entry.start),
          end: Utils.hoursFromTimestring(entry.end)
        });
        nonPresenceIntervals.set(token, list);
      }
      if (!nonPresence && entry.start !== '' && entry.end !== '') {
        const list = dayIntervals.get(token) ?? [];
        list.push({
          start: Utils.hoursFromTimestring(entry.start),
          end: Utils.hoursFromTimestring(entry.end)
        });
        dayIntervals.set(token, list);
        const day = workingDay.get(token);
        if (!day) {
          workingDay.set(token, {
            start: entry.start,
            end: entry.end
          });
        } else {
          if (Utils.hoursFromTimestring(entry.start) < Utils.hoursFromTimestring(day.start)) {
            day.start = entry.start;
          }
          if (Utils.hoursFromTimestring(entry.end) > Utils.hoursFromTimestring(day.end)) {
            day.end = entry.end;
          }
        }
      }
      if (entry.workOrder === '') return; // missing workorder -> already warned, cannot import

      const description = Configuration.getInstance().formatFtZDescription(entry);
      const key = [entry.workOrder, entry.activity, description].join('\u0000');
      let group = groups.get(key);
      if (!group) {
        group = {
          wo: {
            workOrder: entry.workOrder,
            activity: entry.activity,
            timeCode: '',
            description
          },
          hours: new Map()
        };
        groups.set(key, group);
      }
      group.hours.set(token, (group.hours.get(token) ?? 0) + hours);
      sumHours += hours;
      if (nonPresence) {
        nonWorkingHours += hours;
      } else {
        hoursByDay.set(token, (hoursByDay.get(token) ?? 0) + hours);
      }
    });

    // fill up the missing hours of the week with overtime compensation, if accepted in the review.
    // Its times are unknown, so it never counts for the working hours or the breaks.
    const fill = this.ftzOvertimeCheckbox?.checked ? this.ftzOvertimeFill : null;
    if (fill) {
      const {
        workOrder,
        activity
      } = Timesheetimport.splitFtZWorkOrder(fill.workOrder);
      const nonPresence = Configuration.getInstance().isNonPresence(workOrder, activity);
      const key = [workOrder, activity, ''].join('\u0000');
      let group = groups.get(key);
      if (!group) {
        group = {
          wo: {
            workOrder,
            activity,
            timeCode: '',
            description: ''
          },
          hours: new Map()
        };
        groups.set(key, group);
      }
      const fillGroup = group;
      Object.entries(fill.hours).forEach(([token, hours]) => {
        fillGroup.hours.set(token, (fillGroup.hours.get(token) ?? 0) + hours);
        sumHours += hours;
        if (nonPresence) {
          nonWorkingHours += hours;
        } else {
          hoursByDay.set(token, (hoursByDay.get(token) ?? 0) + hours);
        }
      });
    }

    // derive the break per weekday as the sum of the gaps between consecutive bookings. Non-presence
    // bookings within the working hours (clipped to them) fill gaps as well, they are no break.
    // non-presence hours within the working hours per weekday, no working time for the sanity check
    const nonPresenceInWindow = new Map();
    dayIntervals.forEach((presence, token) => {
      const windowStart = Math.min(...presence.map(p => p.start));
      const windowEnd = Math.max(...presence.map(p => p.end));
      const inWindow = (nonPresenceIntervals.get(token) ?? []).map(p => ({
        start: Math.max(p.start, windowStart),
        end: Math.min(p.end, windowEnd)
      })).filter(p => p.end > p.start);
      nonPresenceInWindow.set(token, inWindow.reduce((sum, p) => sum + p.end - p.start, 0));
      const intervals = [...presence, ...inWindow];
      intervals.sort((a, b) => a.start - b.start);
      let gap = 0;
      let prevEnd = intervals[0].end;
      for (let i = 1; i < intervals.length; i++) {
        if (intervals[i].start > prevEnd) {
          gap += intervals[i].start - prevEnd;
        }
        prevEnd = Math.max(prevEnd, intervals[i].end);
      }
      // round to full minutes to avoid floating point noise
      gap = Math.round(gap * 60) / 60;
      if (gap > 0) {
        breaksByDay.set(token, gap);
        sumBreaks += gap;
      }
    });
    if (groups.size === 0 && breaksByDay.size === 0) {
      alert("Keine importierbaren Zeitbuchungen vorhanden.");
      return;
    }
    importer.addTask(new CloseEditingModeTask());

    // import the working hours (From/To) from the Excel start/end times: the whole From row first,
    // then the whole To row, so that only switching between the rows reloads the page
    if (importDays.size > 0) {
      const starts = {};
      const ends = {};
      importDays.forEach(token => {
        // days with non-presence bookings only (sick leave, vacation, ...) get no presence (00:00 - 00:00)
        // instead of keeping Unit4's default working hours
        const day = workingDay.get(token) ?? {
          start: '00:00',
          end: '00:00'
        };
        starts[token] = day.start;
        ends[token] = day.end;
      });
      // activating a row reloads the page: skip rows that already have these times
      const current = this.ftzWorkingHours();
      const unchanged = (row, times) => !!row && Object.entries(times).every(([token, time]) => Math.abs((row.get(token) ?? NaN) - Utils.hoursFromTimestring(time)) < 0.001);
      if (!unchanged(current?.start, starts)) {
        importer.addTask(new WorkingRowImportTask('ftz-workinghours|start', "start", starts));
      }
      if (!unchanged(current?.end, ends)) {
        importer.addTask(new WorkingRowImportTask('ftz-workinghours|end', "end", ends));
      }
    }
    importer.addTask(new CloseEditingModeTask());

    // all days of the Excel data: rows get hours for each of them (0 if none), so that hours moved
    // to another day are cleared in existing rows on a repeated import
    const withAllDays = hours => Object.fromEntries([...importDays].map(token => [token, hours.get(token) ?? 0]));

    // rows that already exist with the same hours on all imported days are skipped: checking them
    // would open each row and reload the page for nothing
    const gridRows = this.ftzGridRows();
    const sameHours = (current, hours) => Object.entries(hours).every(([token, h]) => Math.abs((current.get(token) ?? 0) - h) < 0.001);
    let unchangedRows = 0;
    groups.forEach((group, key) => {
      const existing = gridRows.find(row => !row.isBreak && rowMatchesWorkOrder(group.wo, row));
      if (existing && sameHours(existing.hours, withAllDays(group.hours))) {
        unchangedRows++;
        return;
      }
      const groupId = ['ftz', key].join('|');
      importer.addTask(new EmptyRowStartWorkOrderImportTask(groupId, group.wo));
      importer.addTask(new WorkOrderImportTask(groupId, group.wo));
      // Unit4 sets its default activity with the work order, so a given one comes afterwards
      if (group.wo.activity !== '') {
        importer.addTask(new ActivityImportTask(groupId, group.wo));
      }
      // without a description (e.g. overtime), Unit4's default text stays
      if (group.wo.description !== '') {
        importer.addTask(new DescriptionImportTask(groupId, group.wo));
      }
      importer.addTask(new RowHoursImportTask(groupId, group.wo, withAllDays(group.hours)));
    });
    importer.addTask(new CloseEditingModeTask());

    // book the breaks into Unit4's automatically inserted activity-999 row, also to clear old
    // breaks of a previous import (e.g. a day that became a sick day). Skipped if the break row
    // already has these values, as opening the row reloads the page.
    const breakRow = gridRows.find(row => row.isBreak);
    if (breakRow ? !sameHours(breakRow.hours, withAllDays(breaksByDay)) : breaksByDay.size > 0) {
      const breakGroupId = 'ftz-breaks';
      const breakWo = {
        workOrder: '',
        activity: '999',
        timeCode: '',
        description: 'Internal - Break Time'
      };
      importer.addTask(new StartBreakRowImportTask(breakGroupId));
      importer.addTask(new RowHoursImportTask(breakGroupId, breakWo, withAllDays(breaksByDay)));
      importer.addTask(new CloseEditingModeTask());
    }
    if (unchangedRows > 0) {
      console.log(`FtZ import: ${unchangedRows} unchanged row(s) skipped`);
    }
    const importedRows = [...groups.values()].map(g => ({
      workOrder: g.wo.workOrder,
      description: g.wo.description
    }));
    importer.addTask(new WorkOrderSummaryTask(sumHours + sumBreaks, sumBreaks, importedRows, [...importDays]));

    // same sanity check as the JSON import (break rules, max. working time per day, weekly totals),
    // keyed by weekday (e.g. "Mon") since the Excel carries no dates
    const daily = {};
    workingDay.forEach((day, token) => {
      const label = token.charAt(0).toUpperCase() + token.slice(1);
      daily[label] = {
        hours: hoursByDay.get(token) ?? 0,
        breaks: breaksByDay.get(token) ?? 0,
        workingTime: Utils.difference(day.start, day.end) - (nonPresenceInWindow.get(token) ?? 0)
      };
    });
    importer.addTask(new SanityCheckTask(daily, nonWorkingHours));
    importer.clearFailed();
    this.actionFtZExcelClose();
    this.runTasks();
  }

  // weekday tokens (mon, tue, ...) of the day columns in the time entry grid
  ftzGridWeekdays() {
    const tokens = new Set();
    this.section.querySelectorAll('th[data-type=cell-weekday]').forEach(head => {
      const text = (head.textContent ?? '').replace(/[_.\s]/g, '').toLowerCase();
      tokens.add(text.slice(0, 3));
    });
    return tokens;
  }

  // a booking that represents a break (column G / Workorder input contains "Pause")
  static isBreakEntry(entry) {
    return entry.workOrderInput.trim().toLowerCase() === 'pause';
  }

  // distinct workorders that are present but do not match the required format
  distinctInvalidWorkOrders() {
    return [...new Set(this.reviewEntries()
    // JSON entries with a time code only (e.g. absences) have no workorder
    .map(e => e.workOrder ?? '').filter(wo => wo !== '' && !Timesheetimport.workOrderPattern.test(wo)))];
  }

  // parse the tab-separated "Florians tollige Zeiterfassung" export into day-log entries.
  //
  // The user can copy two variants out of Excel, both of which end up here:
  //  - "großes Format": the whole table as a real grid (many lines). It has a leading
  //    spacer column (A), a statistics header on top and the week-summary block to the
  //    right of the "U4" column.
  //  - "kleines Format": only the day-log sub-range, which Excel flattens onto a single
  //    line (all rows/columns joined by tabs, no newlines).
  //
  // Both variants contain the exact same "core block" of columns in the same order:
  //   Gesamt(Tag) | Wochentag | Anfang | Ende | Dauer | Echte Workorder | Workorder | Ticket | Kommentar | U4
  // A preparser (ftzCoreCells) reduces every variant to that core block, dropping the
  // spacer column, the statistics header and the week-summary block. The shared extractor
  // then reads the columns by their fixed offset inside the block.
  static parseFtZTsv(text) {
    return Timesheetimport.ftzBookingsFromCells(Timesheetimport.ftzCoreCells(text));
  }

  // preparser: reduce either copy variant to a flat stream of the day-log core-block cells
  static ftzCoreCells(text) {
    const grid = text.split(/\r?\n/).map(line => line.split('\t').map(cell => cell.trim()));

    // the day-log header row carries the literal labels "Gesamt (Tag)" and "U4"
    const headerRow = grid.find(row => row.includes('Gesamt (Tag)') && row.includes('U4'));
    if (headerRow) {
      const startCol = headerRow.indexOf('Gesamt (Tag)');
      const endCol = headerRow.indexOf('U4');

      // "großes Format": header on its own line -> keep only the core columns of every
      // row, cutting off the leading spacer, the statistics header and the week-summary.
      // "kleines Format" flattens header AND data onto one line, so the header row itself
      // already contains bookings; in that case we keep the raw stream (there is no
      // week-summary to strip) and let the extractor scan it.
      if (endCol >= startCol && !Timesheetimport.rowHasBooking(headerRow)) {
        return grid.flatMap(row => row.slice(startCol, endCol + 1));
      }
    }
    return grid.flat();
  }

  // shared extractor: pick the bookings out of the core-block cell stream by column offset
  static ftzBookingsFromCells(cells) {
    const entries = [];
    let weekday = '';
    for (let i = 0; i < cells.length; i++) {
      // remember the merged "Wochentag" cell for the following bookings of that day
      if (Timesheetimport.ftzWeekdays.has(cells[i])) {
        weekday = cells[i];
        continue;
      }
      const [start, end, duration] = [cells[i], cells[i + 1], cells[i + 2]];
      if (!Timesheetimport.isFtZBooking(start, end, duration)) {
        continue;
      }

      // read the work columns by their fixed offset behind the Anfang/Ende/Dauer triplet:
      // +3 Echte Workorder, +4 Workorder, +5 Ticket, +6 Kommentar
      const {
        workOrder,
        activity
      } = Timesheetimport.splitFtZWorkOrder(cells[i + 3] ?? '');
      entries.push({
        weekday,
        start,
        end,
        duration,
        workOrder,
        activity,
        workOrderInput: cells[i + 4] ?? '',
        ticket: cells[i + 5] ?? '',
        comment: cells[i + 6] ?? ''
      });

      // skip the cells consumed by this booking so they are not re-scanned
      i += 6;
    }
    return entries;
  }

  // "Echte Workorder" may carry the activity in parentheses, e.g. "950000-10000 (908)" for overtime
  static splitFtZWorkOrder(value) {
    const match = value.trim().match(/^(.*?)\s*\(\s*(\d+)\s*\)$/);
    return match ? {
      workOrder: match[1],
      activity: match[2]
    } : {
      workOrder: value.trim(),
      activity: ''
    };
  }

  // true if the row contains a valid Anfang/Ende/Dauer time-triplet anywhere
  static rowHasBooking(row) {
    for (let i = 0; i + 2 < row.length; i++) {
      if (Timesheetimport.isFtZBooking(row[i], row[i + 1], row[i + 2])) {
        return true;
      }
    }
    return false;
  }

  // a real booking is three HH:MM cells whose duration matches the Anfang->Ende span.
  // this rejects day totals, empty/zero rows and the week-summary block (which reuse HH:MM).
  static isFtZBooking(start, end, duration) {
    const re = Timesheetimport.ftzTimeRe;
    if (!re.test(start) || !re.test(end) || !re.test(duration)) {
      return false;
    }
    const span = Utils.difference(start, end);
    return span > 0 && Math.abs(span - Utils.hoursFromTimestring(duration)) <= 0.02;
  }

  // show the review view: non-blocking warnings for missing workorders and correction inputs for invalid ones
  renderFtZCorrections(invalidWorkOrders, missingEntries) {
    this.ftzCorrectionInputs = new Map();
    this.ftzRowOverrides = new Map();
    this.ftzCorrectionContainer.innerHTML = '';

    // remembered corrections from previous imports (column F -> corrected workorder)
    const savedCorrections = this.loadFtZCorrections();

    // context for Unit4's workorder lookup, only available while a time entry row is in editing mode
    const lookupContext = invalidWorkOrders.length > 0 ? this.ftzLookupContext() : null;

    // offer to fill up the missing hours of the week with overtime compensation (FtZ only)
    const fill = this.jsonReview ? null : this.ftzOvertimeFill;
    const fillChecked = this.ftzOvertimeCheckbox?.checked ?? false;
    this.ftzOvertimeCheckbox = null;
    if (fill) {
      const info = document.createElement("div");
      info.classList.add("ftzCorrection__info");
      const heading = document.createElement("p");
      heading.classList.add("ftzCorrection__heading");
      heading.textContent = `Diese Woche sind ${Utils.toLocaleString(fill.booked)} h gebucht, Soll laut Unit4 (Normal hours): ${Utils.toLocaleString(fill.normal)} h. Es fehlen ${Utils.toLocaleString(fill.missing)} h.`;
      info.appendChild(heading);
      const label = document.createElement("label");
      label.classList.add("ftzCorrection__check");
      const checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      checkbox.checked = fillChecked;
      label.appendChild(checkbox);
      label.appendChild(document.createTextNode(` Fehlende Stunden als Überstundenabbau buchen (${fill.workOrder})`));
      info.appendChild(label);
      this.ftzOvertimeCheckbox = checkbox;
      const weekday = token => Object.keys(Timesheetimport.ftzWeekdayToken).find(de => Timesheetimport.ftzWeekdayToken[de] === token) ?? token;
      const distribution = document.createElement("div");
      distribution.classList.add("ftzCorrection__occurrence");
      distribution.textContent = 'Verteilung: ' + Object.entries(fill.hours).map(([token, hours]) => `${weekday(token)} ${Utils.toLocaleString(hours)} h`).join(' · ');
      info.appendChild(distribution);
      this.ftzCorrectionContainer.appendChild(info);
    }

    // warning block for bookings without any workorder (does not block the import)
    if (missingEntries.length > 0) {
      const warning = document.createElement("div");
      warning.classList.add("ftzCorrection__warning");
      const warningHeading = document.createElement("p");
      warningHeading.classList.add("ftzCorrection__heading");
      warningHeading.textContent = `⚠ ${missingEntries.length} Buchung(en) ohne Workorder. Im Normalfall ein Fehler – bitte in der Excel ergänzen und neu einfügen (blockiert den Import aber nicht):`;
      warning.appendChild(warningHeading);
      missingEntries.forEach(entry => {
        const line = document.createElement("div");
        line.classList.add("ftzCorrection__occurrence");
        line.textContent = Timesheetimport.formatOccurrence(entry);
        warning.appendChild(line);
      });
      this.ftzCorrectionContainer.appendChild(warning);
    }

    // warning block for bookings on days that are not part of the current timesheet (skipped)
    if (this.ftzOutsideEntries.length > 0) {
      const warning = document.createElement("div");
      warning.classList.add("ftzCorrection__warning");
      const warningHeading = document.createElement("p");
      warningHeading.classList.add("ftzCorrection__heading");
      warningHeading.textContent = `⚠ ${this.ftzOutsideEntries.length} Buchung(en) an Tagen, die es in diesem Timesheet nicht gibt. Diese werden nicht importiert:`;
      warning.appendChild(warningHeading);
      this.ftzOutsideEntries.forEach(entry => {
        const line = document.createElement("div");
        line.classList.add("ftzCorrection__occurrence");
        line.textContent = Timesheetimport.formatOccurrence(entry);
        warning.appendChild(line);
      });
      this.ftzCorrectionContainer.appendChild(warning);
    }

    // correction block: one input per distinct invalid workorder, with all its occurrences as context
    if (invalidWorkOrders.length > 0) {
      const heading = document.createElement("p");
      heading.classList.add("ftzCorrection__heading");
      heading.textContent = `${invalidWorkOrders.length} ungültige Workorder(s) gefunden. Bitte im Format 950100-10005 korrigieren, optional mit Aktivität, z. B. 950000-10000 (908):`;
      this.ftzCorrectionContainer.appendChild(heading);
      invalidWorkOrders.forEach(wo => {
        const group = document.createElement("div");
        group.classList.add("ftzCorrection__group");
        const row = document.createElement("div");
        row.classList.add("ftzCorrection__row");
        const label = document.createElement("span");
        label.classList.add("ftzCorrection__label");
        label.textContent = wo;
        row.appendChild(label);
        const input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("placeholder", "950100-10005");
        input.classList.add("ftzCorrection__input");
        input.value = savedCorrections[wo] ?? wo;
        row.appendChild(input);
        group.appendChild(row);

        // suggestions from Unit4's workorder lookup, e.g. all 950100-* workorders for "950100-X"
        if (lookupContext) {
          const suggestions = document.createElement("div");
          suggestions.classList.add("ftzCorrection__suggestions");
          group.appendChild(suggestions);
          this.bindFtZSuggestions(input, suggestions, lookupContext, Timesheetimport.ftzSearchTerm(wo));
        }

        // list the Unit4 rows of this workorder (bookings grouped by description) so the user can
        // identify them; each row can get its own correction, e.g. a different suffix for meetings
        const occurrences = document.createElement("div");
        occurrences.classList.add("ftzCorrection__occurrences");
        const rows = new Map();
        this.reviewEntries().filter(e => e.workOrder === wo).forEach(e => {
          const description = this.reviewDescription(e);
          const times = this.jsonReview ? (e.time ?? []).map(t => `${t.date} (${t.hours})`) : [`${e.weekday} ${e.start}–${e.end}`];
          rows.set(description, [...(rows.get(description) ?? []), ...times]);
        });
        rows.forEach((times, description) => {
          occurrences.appendChild(this.renderFtZRowOverride(wo, description, times, lookupContext));
        });
        group.appendChild(occurrences);
        this.ftzCorrectionInputs.set(wo, input);
        this.ftzCorrectionContainer.appendChild(group);
      });
    }

    // switch from paste view to review view
    this.ftzDialogEntry.style.display = 'none';
    this.ftzCorrectionContainer.style.display = 'block';
    this.ftzOkButton.innerHTML = invalidWorkOrders.length > 0 ? "<span>Übernehmen &amp; Import</span>" : missingEntries.length > 0 || this.ftzOutsideEntries.length > 0 ? "<span>Trotzdem importieren</span>" : "<span>Start Import</span>";
    const firstInput = this.ftzCorrectionContainer.querySelector('input');
    if (firstInput) {
      firstInput.focus();
    }
  }

  // proposal to fill up the booked hours of the Excel data to the timesheet's normal hours with
  // overtime compensation, null if nothing is missing or the normal hours / work order are unknown
  ftzOvertimeProposal() {
    const normal = readNormalHours(document);
    const client = this.ftzClient();
    const workOrder = client ? Configuration.getInstance().overtimeWorkOrder(client) : null;
    if (normal === null || workOrder === null) {
      return null;
    }

    // hours per weekday of the bookings that will be imported (no breaks, no missing workorders)
    const dayHours = new Map();
    this.ftzEntries.forEach(entry => {
      const token = Timesheetimport.ftzWeekdayToken[entry.weekday];
      const hours = Utils.hoursFromTimestring(entry.duration);
      if (token && !Timesheetimport.isBreakEntry(entry) && entry.workOrder !== '' && hours > 0) {
        dayHours.set(token, (dayHours.get(token) ?? 0) + hours);
      }
    });
    const booked = [...dayHours.values()].reduce((sum, hours) => sum + hours, 0);
    const missing = Math.round((normal - booked) * 100) / 100;
    if (dayHours.size === 0 || missing <= 0) {
      return null;
    }
    return {
      workOrder,
      hours: Timesheetimport.distributeHours(dayHours, normal, missing),
      booked,
      normal,
      missing
    };
  }

  // distribute the missing hours over the days with bookings (part-time: only the days worked):
  // each day is filled up towards its share of the normal hours, in quarter hours; the rounding
  // remainder goes to the day with the largest gap, so that the total matches exactly
  static distributeHours(dayHours, normal, missing) {
    const share = normal / dayHours.size;
    const gaps = [...dayHours].map(([day, hours]) => ({
      day,
      gap: Math.max(0, share - hours)
    }));
    // the gaps add up to at least the missing hours, scale them down if some days are above their share
    const sumGaps = gaps.reduce((sum, g) => sum + g.gap, 0);
    const result = {};
    let assigned = 0;
    gaps.forEach(g => {
      const hours = Math.round(g.gap * missing / sumGaps * 4) / 4;
      if (hours > 0) {
        result[g.day] = hours;
        assigned += hours;
      }
    });
    const rest = Math.round((missing - assigned) * 100) / 100;
    if (rest !== 0) {
      const largest = gaps.reduce((a, b) => b.gap > a.gap ? b : a);
      result[largest.day] = Math.max(0, Math.round(((result[largest.day] ?? 0) + rest) * 100) / 100);
    }
    return result;
  }

  // Unit4 client of the timesheet (e.g. "DE3") from the time entry grid context
  ftzClient() {
    const grid = this.section.querySelector('th[data-type="cell-workorder"]')?.closest('table[data-context]');
    try {
      return grid?.dataset.context ? atob(grid.dataset.context).split('^')[3] ?? null : null;
    } catch {
      return null;
    }
  }

  // context for Unit4's workorder lookup service. It is bound to a time entry row in editing mode:
  // the grid context "TTS025^<instance>^TS1611^DE3^<section>" with the section replaced by
  // the workorder field id and the row number of the edit row.
  ftzLookupContext() {
    const grid = this.section.querySelector('th[data-type="cell-workorder"]')?.closest('table[data-context]');
    const editRow = [...(grid?.querySelectorAll('tr.EditRow') ?? [])].find(row => !Timesheetimport.isBreakRow(row));
    const rowNr = editRow?.id.match(/_row(\d+)$/)?.[1];
    const fieldId = editRow?.querySelector('td[data-type="cell-workorder"] [data-fieldid]')?.dataset.fieldid;
    if (!grid?.dataset.context || !rowNr || !fieldId) {
      return null;
    }
    try {
      const parts = atob(grid.dataset.context).split('^');
      return parts.length >= 5 ? btoa([...parts.slice(0, 4), fieldId, rowNr].join('^')) : null;
    } catch {
      return null;
    }
  }

  // time entry rows as currently shown in the timesheet (values of read-only and editable rows)
  ftzGridRows() {
    const tokens = [...this.section.querySelectorAll('th[data-type=cell-weekday]')].map(head => (head.textContent ?? '').replace(/[_.\s]/g, '').toLowerCase().slice(0, 3));
    // the input of an editable cell or the value div of a read-only one (not the description
    // the timeentry module appends to some cells)
    const value = (td, valueDiv) => (td?.querySelector('.InputCell input')?.value ?? td?.querySelector(valueDiv)?.textContent ?? '').trim();
    return [...this.section.querySelectorAll('tr.ListItem, tr.AltListItem, tr.EditRow')].filter(row => row.querySelector('td[data-type="cell-workorder"]')).map(row => {
      const field = type => value(row.querySelector(`td[data-type="${type}"]`), 'div.ww.ellipsis');
      const hours = new Map();
      row.querySelectorAll('td[data-type=cell-weekday]').forEach((td, i) => {
        if (tokens[i]) {
          hours.set(tokens[i], Utils.toNumber(value(td, 'div.ww')) || 0);
        }
      });
      return {
        workOrder: field('cell-workorder'),
        activity: field('cell-activity'),
        timeCode: field('cell-timecode'),
        description: field('cell-description'),
        isBreak: Timesheetimport.isBreakRow(row),
        hours
      };
    });
  }

  // current From (first row) and To (second row) times of the working hours per weekday token,
  // as decimal hours (NaN if empty), null if the working hours section is not available
  ftzWorkingHours() {
    if (!this.sectionWorkingHours) {
      return null;
    }
    const headers = [...this.sectionWorkingHours.querySelectorAll('.tmWorkinghours th')];
    const rows = [...this.sectionWorkingHours.querySelectorAll('.ListItem, .AltListItem, .EditRow')];
    const read = row => {
      const times = new Map();
      headers.forEach((head, i) => {
        const token = (head.textContent ?? '').replace(/[_.\s]/g, '').toLowerCase().slice(0, 3);
        const cell = row?.querySelector('td:nth-of-type(' + (i + 1) + ')');
        const text = (cell?.querySelector('.InputCell input')?.value ?? cell?.textContent ?? '').trim();
        times.set(token, /^\d{1,2}:\d{2}/.test(text) ? Utils.hoursFromTimestring(text) : NaN);
      });
      return times;
    };
    return {
      start: read(rows[0]),
      end: read(rows[1])
    };
  }

  // the break row (activity 999) never offers workorders in the lookup
  static isBreakRow(row) {
    const activity = row.querySelector('td[data-type="cell-activity"]');
    const value = activity?.querySelector('input')?.value ?? activity?.textContent ?? '';
    return value.trim().startsWith('999');
  }

  // search term for the lookup: the leading digits of a workorder, e.g. "950100" for "950100-X"
  static ftzSearchTerm(value) {
    return (value.trim().match(/^[\d-]*/)?.[0] ?? '').replace(/-+$/, '');
  }

  // query Unit4's autocomplete service, the same request the workorder field sends while typing
  static async lookupFtZWorkOrders(context, search) {
    try {
      const body = new URLSearchParams({
        Search: search,
        Context: context,
        BatchStart: '1',
        BatchSize: '50'
      });
      const res = await fetch('System/Services/DataListService.aspx', {
        method: 'POST',
        body
      });
      if (!res.ok) {
        return [];
      }
      const xml = new DOMParser().parseFromString(await res.text(), 'text/xml');
      return [...xml.querySelectorAll('item')].map(item => ({
        value: item.querySelector('value')?.textContent?.trim() ?? '',
        // descriptions are HTML-encoded twice, e.g. "f&amp;#246;rderung"
        descr: new DOMParser().parseFromString(item.querySelector('descr')?.textContent ?? '', 'text/html').body.textContent?.trim() ?? ''
      }))
      // drops the "[NEW]" entry that echoes the search term
      .filter(item => Timesheetimport.workOrderPattern.test(item.value));
    } catch (e) {
      console.warn('FtZ workorder lookup failed', e);
      return [];
    }
  }

  // fill the suggestion list of one correction input and search again while the user types
  bindFtZSuggestions(input, list, context, initialSearch) {
    let timer;
    let requestId = 0;
    const search = async term => {
      const id = ++requestId;
      if (term === '') {
        list.textContent = '';
        return;
      }
      list.textContent = 'Suche …';
      const items = await Timesheetimport.lookupFtZWorkOrders(context, term);
      if (id !== requestId) {
        return; // a newer search has been started meanwhile
      }
      list.textContent = items.length === 0 ? 'Keine passenden Workorders gefunden' : '';
      items.forEach(item => {
        const option = document.createElement("button");
        option.setAttribute("type", "button");
        option.classList.add("ftzCorrection__suggestion");
        if (item.value === input.value.trim()) {
          option.classList.add("ftzCorrection__suggestion--selected");
        }
        const code = document.createElement("span");
        code.classList.add("ftzCorrection__suggestionCode");
        code.textContent = item.value;
        option.appendChild(code);
        const descr = document.createElement("span");
        descr.textContent = item.descr;
        option.appendChild(descr);
        option.addEventListener('click', () => {
          input.value = item.value;
          list.querySelectorAll('.ftzCorrection__suggestion--selected').forEach(e => e.classList.remove("ftzCorrection__suggestion--selected"));
          option.classList.add("ftzCorrection__suggestion--selected");
        });
        list.appendChild(option);
      });
    };

    // same delay as Unit4's own autocomplete
    input.addEventListener('input', () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => search(Timesheetimport.ftzSearchTerm(input.value)), 400);
    });
    search(initialSearch);
  }

  // format a booking as "Wochentag Anfang–Ende · Kommentar" for the review lists
  static formatOccurrence(entry) {
    const time = `${entry.start}–${entry.end}`;
    const context = [entry.weekday, time].filter(v => v !== '').join(' ');
    return entry.comment !== '' ? `${context} · ${entry.comment}` : context;
  }

  // one Unit4 row of an invalid workorder in the review: description and times, plus a link to give
  // it a correction of its own (starting from the original workorder, with lookup suggestions)
  renderFtZRowOverride(workOrder, description, times, lookupContext) {
    const key = Timesheetimport.ftzRowKey(workOrder, description);
    const item = document.createElement("div");
    item.classList.add("ftzCorrection__occurrence", "ftzCorrection__rowItem");
    const text = document.createElement("span");
    text.textContent = `${description !== '' ? description : '(ohne Beschreibung)'} · ${times.join(', ')}`;
    item.appendChild(text);
    const toggle = document.createElement("button");
    toggle.setAttribute("type", "button");
    toggle.classList.add("ftzCorrection__linkButton");
    toggle.textContent = "abweichende Workorder";
    item.appendChild(toggle);
    const editor = document.createElement("div");
    editor.classList.add("ftzCorrection__override");
    editor.style.display = 'none';
    item.appendChild(editor);
    toggle.addEventListener('click', () => {
      // own correction for this row, starting from the original workorder of the Excel / JSON data
      editor.innerHTML = '';
      const row = document.createElement("div");
      row.classList.add("ftzCorrection__row");
      const input = document.createElement("input");
      input.setAttribute("type", "text");
      input.setAttribute("placeholder", "950100-10005");
      input.classList.add("ftzCorrection__input");
      input.value = workOrder;
      row.appendChild(input);
      const reset = document.createElement("button");
      reset.setAttribute("type", "button");
      reset.classList.add("ftzCorrection__linkButton");
      reset.title = "Wieder die Korrektur der Workorder verwenden";
      reset.textContent = "✕";
      reset.addEventListener('click', () => {
        this.ftzRowOverrides.delete(key);
        editor.innerHTML = '';
        editor.style.display = 'none';
        toggle.style.display = '';
      });
      row.appendChild(reset);
      editor.appendChild(row);
      if (lookupContext) {
        const suggestions = document.createElement("div");
        suggestions.classList.add("ftzCorrection__suggestions");
        editor.appendChild(suggestions);
        // search for the original workorder, e.g. all 123456-*
        this.bindFtZSuggestions(input, suggestions, lookupContext, Timesheetimport.ftzSearchTerm(workOrder));
      }
      this.ftzRowOverrides.set(key, input);
      toggle.style.display = 'none';
      editor.style.display = '';
      input.focus();
    });
    return item;
  }

  // parse JSON import data (old and new format), returns null (after telling the user) if it is not valid
  static parseJsonImport(text) {
    try {
      const json = JSON.parse(text);
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

      return {
        data,
        days
      };
    } catch (e) {
      console.error(e);
      alert("Import data must be valid JSON");
      return null;
    }
  }

  // create and run the import tasks for parsed JSON data, returns false (after telling the user) on errors
  importJsonData(data, days) {
    try {
      const importer = Importer.getInstance();

      // import work orders
      WOImportTask.setSection(this.section);
      WOImportTask.setAddButton(this.standardAddBtn);
      const daily = {};

      // close all editing modes before import (so that no edit row is still active)
      importer.addTask(new CloseEditingModeTask());

      // import working hours: the whole From row first, then the whole To row,
      // so that only switching between the rows reloads the page
      const starts = {};
      const ends = {};
      Object.entries(days).forEach(([dateStr, day]) => {
        starts[dateStr] = day.start;
        ends[dateStr] = day.end;
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
      if (Object.keys(days).length > 0) {
        importer.addTask(new WorkingRowImportTask('workinghours|start', "start", starts));
        importer.addTask(new WorkingRowImportTask('workinghours|end', "end", ends));
      }

      // close all editing modes after storing working hours
      importer.addTask(new CloseEditingModeTask());
      var sumHours = 0,
        sumBreaks = 0;
      data.forEach(entry => {
        // group all tasks for the same work order together
        const groupId = ["workorders", entry.timeCode, entry.workOrder, entry.activity, entry.description].join('|');
        // normal hours may reuse the empty row left by the workorder lookup of the review view
        const normalHours = (entry.timeCode ?? '0') === '0' || entry.timeCode === '';
        importer.addTask(normalHours ? new EmptyRowStartWorkOrderImportTask(groupId, entry) : new StartWorkOrderImportTask(groupId, entry));
        importer.addTask(new TimecodeImportTask(groupId, entry));
        importer.addTask(new WorkOrderImportTask(groupId, entry));
        importer.addTask(new ActivityImportTask(groupId, entry));
        // without a description, Unit4's default text stays
        if (entry.description) {
          importer.addTask(new DescriptionImportTask(groupId, entry));
        }
        // enter the hours of all days of this entry at once (sent with the next request)
        const hoursByDate = {};
        entry.time.forEach(timeEntry => {
          const hours = Utils.toNumber(timeEntry.hours);
          hoursByDate[timeEntry.date] = hours;
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
        importer.addTask(new RowHoursImportTask(groupId, entry, hoursByDate));
      });

      // close all editing modes at the end
      importer.addTask(new CloseEditingModeTask());

      // check sum of hours
      const importedRows = data.map(entry => ({
        workOrder: entry.workOrder,
        description: entry.description
      }));
      const importedDays = [...new Set(data.flatMap(entry => (entry.time ?? []).map(t => t.date)))];
      importer.addTask(new WorkOrderSummaryTask(sumHours, sumBreaks, importedRows, importedDays));

      // General sanity check
      importer.addTask(new SanityCheckTask(daily));

      // handle first import item
      importer.clearFailed();
      importer.runTasks();
      return true;
    } catch (e) {
      console.error(e);
      alert("Import data must be valid JSON");
      return false;
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