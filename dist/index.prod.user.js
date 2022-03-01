// ==UserScript==
// @name        macaw-unit4
// @namespace   https://ubw.unit4cloud.com/
// @version     0.9.3
// @author      Carsten Wilhelm <carsten.wilhelm@macaw.net>
// @source      https://github.com/macaw-cad/tampermonkey-unit4
// @license     MIT
// @match       https://ubw.unit4cloud.com/*
// @run-at      document-end
// ==/UserScript==


/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/***/ ((module) => {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/

module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ "./src/external/gm_config/gm_config.js":
/***/ (() => {

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
} // This is the initializer function


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
      basic: ["#GM_config * { font-family: arial,tahoma,myriad pro,sans-serif; }", "#GM_config { background: #FFF; }", "#GM_config input[type='radio'] { margin-right: 8px; }", "#GM_config .indent40 { margin-left: 40%; }", "#GM_config .field_label { font-size: 12px; font-weight: bold; margin-right: 6px; }", "#GM_config .radio_label { font-size: 12px; }", "#GM_config .block { display: block; }", "#GM_config .saveclose_buttons { margin: 16px 10px 10px; padding: 2px 12px; }", "#GM_config .reset, #GM_config .reset a," + " #GM_config_buttons_holder { color: #000; text-align: right; }", "#GM_config .config_header { font-size: 20pt; margin: 0; }", "#GM_config .config_desc, #GM_config .section_desc, #GM_config .reset { font-size: 9pt; }", "#GM_config .center { text-align: center; }", "#GM_config .section_header_holder { margin-top: 8px; }", "#GM_config .config_var { margin: 0 0 4px; }", "#GM_config .section_header { background: #414141; border: 1px solid #000; color: #FFF;", " font-size: 13pt; margin: 0; }", "#GM_config .section_desc { background: #EFEFEF; border: 1px solid #CCC; color: #575757;" + " font-size: 9pt; margin: 0 0 6px; }"].join('\n') + '\n',
      basicPrefix: "GM_config",
      stylish: ""
    };
  }

  if (args.length == 1 && typeof args[0].id == "string" && typeof args[0].appendChild != "function") var settings = args[0];else {
    // Provide backwards-compatibility with argument style intialization
    var settings = {}; // loop through GM_config.init() arguments

    for (var i = 0, l = args.length, arg; i < l; ++i) {
      arg = args[i]; // An element to use as the config window

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

  if (settings.id) config.id = settings.id;else if (typeof config.id == "undefined") config.id = 'GM_config'; // Set the title

  if (settings.title) config.title = settings.title; // Set the custom css

  if (settings.css) config.css.stylish = settings.css; // Set the frame

  if (settings.frame) config.frame = settings.frame; // Set the event callbacks

  if (settings.events) {
    var events = settings.events;

    for (var e in events) config["on" + e.charAt(0).toUpperCase() + e.slice(1)] = events[e];
  } // Create the fields


  if (settings.fields) {
    var stored = config.read(),
        // read the stored settings
    fields = settings.fields,
        customTypes = settings.types || {},
        configId = config.id;

    for (var id in fields) {
      var field = fields[id]; // for each field definition create a field object

      if (field) config.fields[id] = new GM_configField(field, stored[id], id, customTypes[field.type], configId);else if (config.fields[id]) delete config.fields[id];
    }
  } // If the id has changed we must modify the default style


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
    if (match && (match.tagName == "IFRAME" || match.childNodes.length > 0)) return; // Sometimes "this" gets overwritten so create an alias

    var config = this; // Function to build the mighty config window :)

    function buildConfigWin(body, head) {
      var create = config.create,
          fields = config.fields,
          configId = config.id,
          bodyWrapper = create('div', {
        id: configId + '_wrapper'
      }); // Append the style which is our default style plus the user style

      head.appendChild(create('style', {
        type: 'text/css',
        textContent: config.css.basic + config.css.stylish
      })); // Add header and title

      bodyWrapper.appendChild(create('div', {
        id: configId + '_header',
        className: 'config_header block center'
      }, config.title)); // Append elements

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
        } // Create field elements and append to current section


        section.appendChild(field.wrapper = field.toNode());
      } // Add save and close buttons


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
      }, // Reset link
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

      config.onOpen(config.frame.contentDocument || config.frame.ownerDocument, config.frame.contentWindow || window, config.frame); // Close frame on window close

      window.addEventListener('beforeunload', function () {
        config.close();
      }, false); // Now that everything is loaded, make it visible

      config.frame.style.display = "block";
      config.isOpen = true;
    } // Change this in the onOpen callback using this.frame.setAttribute('style', '')


    var defaultStyle = 'bottom: auto; border: 1px solid #000; display: none; height: 75%;' + ' left: 0; margin: 0; max-height: 95%; max-width: 95%; opacity: 0;' + ' overflow: auto; padding: 0; position: fixed; right: auto; top: 0;' + ' width: 75%; z-index: 9999;'; // Either use the element passed to init() or create an iframe

    if (this.frame) {
      this.frame.id = this.id; // Allows for prefixing styles with the config id

      this.frame.setAttribute('style', defaultStyle);
      buildConfigWin(this.frame, this.frame.ownerDocument.getElementsByTagName('head')[0]);
    } else {
      // Create frame
      document.body.appendChild(this.frame = this.create('iframe', {
        id: this.id,
        style: defaultStyle
      })); // In WebKit src can't be set until it is added to the page

      this.frame.src = 'about:blank'; // we wait for the iframe to load before we can modify it

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
    } // Null out all the fields so we don't leak memory


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
    var fields = this.fields; // Reset all the fields

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
}; // Define a bunch of API stuff

(function () {
  var isGM = typeof GM_getValue != 'undefined' && typeof GM_getValue('a', 'b') != 'undefined',
      setValue,
      getValue,
      stringify,
      parser; // Define value storing and reading API

  if (!isGM) {
    setValue = function (name, value) {
      return localStorage.setItem(name, value);
    };

    getValue = function (name, def) {
      var s = localStorage.getItem(name);
      return s == null ? def : s;
    }; // We only support JSON parser outside GM


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
  GM_configStruct.prototype.log = window.console ? console.log : isGM && typeof GM_log != 'undefined' ? GM_log : window.opera ? opera.postError : function () {
    /* no logging */
  };
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
  this.save = typeof settings.save == "undefined" ? true : settings.save; // Buttons are static and don't have a stored value

  if (settings.type == "button") this.save = false; // if a default value wasn't passed through init() then
  //   if the type is custom use its default value
  //   else use default value for type
  // else use the default value passed through init()

  this['default'] = typeof settings['default'] == "undefined" ? customType ? customType['default'] : GM_configDefaultValue(settings.type, settings.options) : settings['default']; // Store the field's value

  this.value = typeof stored == "undefined" ? this['default'] : stored; // Setup methods for a custom type

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
        firstProp; // Retrieve the first prop

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
        var num = Number(node.value);
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
}; // Create default instance of GM_config

window.GM_config = new GM_configStruct();

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/modules/global/global.less":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body table.MainTable {\n  width: 100% !important;\n}\ntable.Excel {\n  width: 100% !important;\n  position: relative;\n  /*\n    th {\n        position: sticky !important;\n        top: 0;\n        background-color: rgb(245, 246, 246);\n    }\n    */\n}\ntable.Excel .ListDescription {\n  display: none;\n}\ntable.Excel *[data-type=\"cell-zoom\"] {\n  width: 35px !important;\n}\ntable.Excel *[data-type=\"cell-status\"] {\n  width: 70px !important;\n}\ntable.Excel *[data-type=\"cell-timecode\"] {\n  width: 0 !important;\n  pointer-events: none;\n}\ntable.Excel *[data-type=\"cell-activity\"] {\n  width: 60px !important;\n}\ntable.Excel *[data-type=\"cell-timeunit\"] {\n  width: 50px !important;\n}\ntable.Excel *[data-type=\"cell-weekday\"] {\n  width: 55px !important;\n}\ntable.Excel *[data-type=\"cell-sum\"] {\n  width: 55px !important;\n}\ntable.Excel *[data-type=\"cell-workorder\"] {\n  width: 120px !important;\n}\ntable.Excel *[data-type=\"cell-description\"] {\n  width: auto !important;\n}\ntable.Excel *[data-type=\"cell-servicelines\"] {\n  width: 0 !important;\n  pointer-events: none;\n}\ntable.Excel *[data-type=\"cell-finprjtype\"] {\n  width: 0 !important;\n  pointer-events: none;\n}\ntable.Excel *[data-type=\"cell-invunit\"] {\n  width: 0 !important;\n  pointer-events: none;\n}\ntable.Excel *[data-type=\"cell-value\"] {\n  width: 0 !important;\n  pointer-events: none;\n}\ntable.Excel *[data-type=\"cell-workorder\"],\ntable.Excel *[data-type=\"cell-project\"] {\n  width: 250px !important;\n}\ntable.Excel *[data-type=\"cell-workorder\"] .ListDescription,\ntable.Excel *[data-type=\"cell-project\"] .ListDescription {\n  display: block;\n  font-size: 11px;\n  color: #aaa;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/modules/timeentry/timeentry.less":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/modules/timesheet/timesheet.less":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".timesheetDetails table.Excel th {\n  position: sticky !important;\n  top: 0;\n  background-color: #f5f6f6;\n}\n.timesheetDetails table.Excel .LockedRow {\n  opacity: 0.4 !important;\n  pointer-events: none;\n}\n.timesheetDetails.hideLocked table.Excel .LockedRow {\n  display: none;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/***/ ((module) => {

"use strict";


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

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/***/ ((module) => {

"use strict";


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
  } // For old IE

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

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/***/ ((module) => {

"use strict";


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

/***/ })

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

;// CONCATENATED MODULE: ./package.json
const package_namespaceObject = {"i8":"0.9.3"};
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
;// CONCATENATED MODULE: ./src/modules/timeentry/timeentry.less

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(timeentry/* default */.Z, options);




       /* harmony default export */ const timeentry_timeentry = (timeentry/* default */.Z && timeentry/* default.locals */.Z.locals ? timeentry/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: ./src/external/gm_config/gm_config.js
var gm_config = __webpack_require__("./src/external/gm_config/gm_config.js");
;// CONCATENATED MODULE: ./src/configuration.ts
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/// <reference path="./external/gm_config/types/index.d.ts"/>

class Configuration {
  static getInstance() {
    return this.instance;
  }

  constructor() {
    GM_config.init({
      'id': 'MacawUnit4Config',
      'fields': {
        'allowCommaEntry': {
          'label': 'allow time entry with "," as separator',
          'type': 'checkbox',
          'default': false
        },
        'alwaysShowDescriptions': {
          'label': 'always show work item & project descriptions',
          'type': 'checkbox',
          'default': true
        },
        'handleTimeEntry': {
          'label': 'handle time entry screen (for entering bookings)',
          'type': 'checkbox',
          'default': true
        },
        'handleTimesheetDetails': {
          'label': 'handle timesheet details (for approving bookings)',
          'type': 'checkbox',
          'default': true
        },
        'hideLockedRows': {
          'label': 'hide rows in details that you cannot accept/reject',
          'type': 'checkbox',
          'default': true
        }
      }
    });
  }

  allowCommaEntry() {
    return GM_config.get('allowCommaEntry');
  }

  alwaysShowDescriptions() {
    return GM_config.get('alwaysShowDescriptions');
  }

  handleTimeEntry() {
    return GM_config.get('handleTimeEntry');
  }

  handleTimesheetDetails() {
    return GM_config.get('handleTimesheetDetails');
  }

  hideLockedRows() {
    return GM_config.get('hideLockedRows');
  }

  show() {
    GM_config.open();
  }

  close() {
    GM_config.close();
  }

}

_defineProperty(Configuration, "instance", new Configuration());
;// CONCATENATED MODULE: ./src/modules/MarkupUtility.ts
class MarkupUtility {
  /**
   * Add a data attribute to table head and cells
   * @param table  DOM element of table
   * @param th     DOM element of header cell
   * @param col    column number of header cell
   * @param type   type for data attribute
   */
  static markTableCells(table, th, col, type) {
    // add type to header cell
    th.dataset.type = type; // iterate over all rows of the table

    table.querySelectorAll(':scope > tbody > tr').forEach(row => {
      // iterate over all table data cells of the row
      row.querySelectorAll(':scope > td').forEach((td, key) => {
        // if column number matches, set type data attribute on data cell as well
        if (key == col) {
          td.dataset.type = type;
        }
      });
    });
  }

  static addTypeToTableCells(section) {
    // since Unit45 changes the DOM frequently (and there are no callbacks or events), we need to check
    // and re-add the classes on a regular basis
    window.setInterval(() => {
      section.querySelectorAll('table.Excel').forEach(table => {
        if (!table.classList.contains("tmFix")) {
          table.classList.add("tmFix");
          table.querySelectorAll('th').forEach((th, col) => {
            const text = th.innerText.replace(/[_.\s]/g, '').toLowerCase();

            switch (text) {
              case '':
                // ignore headers with empty text
                break;

              case 'zoom':
              case 'status':
              case 'timecode':
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
                // add CSS class for some headers
                MarkupUtility.markTableCells(table, th, col, 'cell-' + text);
                break;

              default:
                // check if day of week is found
                if (text.match(/(mon|tue|wed|thu|fri|sat|sun)[0-9]+\/[0-9]+/)) {
                  MarkupUtility.markTableCells(table, th, col, 'cell-weekday');
                } else {
                  console.log("Unknown header '" + text + "'", th);
                }

            }
          });
        }
      });
    }, 100);
  }

}
;// CONCATENATED MODULE: ./src/modules/timeentry/timeentry.ts



class TimeEntry {
  // ----------------------------------------------------------------------
  // Time Entry Screen
  // ----------------------------------------------------------------------
  constructor() {
    // mark time entry table with special CSS class
    document.querySelectorAll('h2.SectionTitle').forEach(e => {
      if (Configuration.getInstance().handleTimeEntry()) {
        if (e.textContent == 'Time entry') {
          let section = e.closest('.u4-section-container');

          if (section != null) {
            this.processTimeEntry(section);
          }
        }
      }
    });
  }

  processTimeEntry(section) {
    // add data tape attributes to table
    MarkupUtility.addTypeToTableCells(section);
    window.setInterval(() => {
      if (!section.classList.contains("timeEntry")) {
        section.classList.add('timeEntry'); // scroll to current entry

        section.querySelectorAll('input[title="Work order - Mandatory"]').forEach(e => {
          e.focus();
          setTimeout(function () {
            e.scrollIntoView();
          }, 100);
        });
      } // really disable some fields to avoid errors


      section.querySelectorAll('input[title="Time code"]').forEach(e => {
        e.disabled = true;
        e.readOnly = true;
      }); // always show work item & project descriptions in time entry

      if (Configuration.getInstance().alwaysShowDescriptions()) {
        section.querySelectorAll('tr.ListItem td[title], tr.ListItem td[title], tr.AltListItem td[title]').forEach(e => {
          if (e.querySelectorAll('.tmFixDescription').length == 0) {
            let x = document.createElement('div');
            x.className = 'Message DivOverflowNoWrap Ellipsis Description ListDescription tmFixDescription';
            x.style.whiteSpace = "break-spaces";
            x.appendChild(document.createTextNode(e.getAttribute('title')));
            e.appendChild(x);
          }
        });
      }
    }, 100);
  }

}
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/modules/timesheet/timesheet.less
var timesheet = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/modules/timesheet/timesheet.less");
;// CONCATENATED MODULE: ./src/modules/timesheet/timesheet.less

      
      
      
      
      
      
      
      
      

var timesheet_options = {};

timesheet_options.styleTagTransform = (styleTagTransform_default());
timesheet_options.setAttributes = (setAttributesWithoutAttributes_default());

      timesheet_options.insert = insertBySelector_default().bind(null, "head");
    
timesheet_options.domAPI = (styleDomAPI_default());
timesheet_options.insertStyleElement = (insertStyleElement_default());

var timesheet_update = injectStylesIntoStyleTag_default()(timesheet/* default */.Z, timesheet_options);




       /* harmony default export */ const timesheet_timesheet = (timesheet/* default */.Z && timesheet/* default.locals */.Z.locals ? timesheet/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/modules/timesheet/timesheet.ts



class TimeSheet {
  // ----------------------------------------------------------------------
  // Time Entry Screen
  // ----------------------------------------------------------------------
  constructor() {
    // mark time entry table with special CSS class
    document.querySelectorAll('h2.SectionTitle').forEach(e => {
      if (Configuration.getInstance().handleTimesheetDetails()) {
        if (e.textContent.startsWith('Workflow log')) {
          let section = e.closest('.u4-section-placeholder');

          if (section != null) {
            this.processWorkflowLow(section);
          }
        }

        if (e.textContent == 'Timesheet details') {
          let section = e.closest('.u4-section-container');

          if (section != null) {
            this.processTimesheetDetails(section);
          }
        }
      }
    });
  } // ----------------------------------------------------------------------
  // Workflow Logh (in Timesheet Details)
  // ----------------------------------------------------------------------


  processWorkflowLow(section) {
    section.classList.add('workflowLog');
    GM_addStyle('.workflowLog { position: fixed; top: 0px; z-index: 10; background: white; right: 20px; width: 35% !important; }');
  } // ----------------------------------------------------------------------
  // Timesheet Details
  // ----------------------------------------------------------------------


  processTimesheetDetails(section) {
    // add data tape attributes to table
    MarkupUtility.addTypeToTableCells(section);
    window.setInterval(() => {
      if (section.querySelector('input[type="checkbox"]') == null) {
        section.classList.add('timesheetDetails', 'timesheetDetailsSimple');
      } else {
        section.classList.add('timesheetDetails', 'timesheetDetailsAdvanced');
      }

      if (Configuration.getInstance().hideLockedRows()) {
        section.classList.add('hideLocked');
      } // mark complete rows for locked cells


      section.querySelectorAll('.GridCell.Locked').forEach(e => {
        e.closest('tr').classList.add('LockedRow');
      }); // always show work item & project descriptions in timesheet details

      if (Configuration.getInstance().alwaysShowDescriptions()) {
        section.querySelectorAll('tr.MarkRow td[title], tr.ListItemReadOnly td[title], tr.AltListItemReadOnly td[title]').forEach(e => {
          let x = document.createElement('div');
          x.className = 'Message DivOverflowNoWrap Ellipsis Description ListDescription';
          x.style.whiteSpace = "break-spaces";
          x.appendChild(document.createTextNode(e.getAttribute('title')));
          e.appendChild(x);
        });
      }
    }, 100);
  }

}
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/modules/global/global.less
var global = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/modules/global/global.less");
;// CONCATENATED MODULE: ./src/modules/global/global.less

      
      
      
      
      
      
      
      
      

var global_options = {};

global_options.styleTagTransform = (styleTagTransform_default());
global_options.setAttributes = (setAttributesWithoutAttributes_default());

      global_options.insert = insertBySelector_default().bind(null, "head");
    
global_options.domAPI = (styleDomAPI_default());
global_options.insertStyleElement = (insertStyleElement_default());

var global_update = injectStylesIntoStyleTag_default()(global/* default */.Z, global_options);




       /* harmony default export */ const global_global = (global/* default */.Z && global/* default.locals */.Z.locals ? global/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/modules/global/global.ts


class Global {
  // ----------------------------------------------------------------------
  // Time Entry Screen
  // ----------------------------------------------------------------------
  constructor() {
    // allow time entry with "," as separator
    if (Configuration.getInstance().allowCommaEntry()) {
      document.querySelectorAll('.timeEntry input[data-type="Double"]').forEach(e => {
        e.addEventListener('keydown', event => {
          if (event.key == ',') {
            let sel = e.selectionStart;
            e.value = e.value.slice(0, sel) + "." + e.value.slice(sel);
            e.setSelectionRange(sel + 1, sel + 1);
          }
        });
      });
    } // scroll input with focus into view


    var currentFocus = null;
    document.querySelectorAll('.timeEntry').forEach(e => {
      e.addEventListener('focusin', event => {
        const ele = event.target;

        if (ele.dataset.type && ele !== currentFocus) {
          currentFocus = ele;
          console.log("Scroll into view", window.scrollY, ele.getBoundingClientRect()); //ele.scrollIntoView({block: "end", inline: "nearest"});
        }
      });
    });
  }

}
;// CONCATENATED MODULE: ./src/index.ts





class Unit4Enhancer {
  async main() {
    new TimeEntry();
    new TimeSheet();
    new Global();
    console.log("Unit4 enhancements " + package_namespaceObject.i8 + " active ... "); //Configuration.getInstance().show();
  }

}

const inst = new Unit4Enhancer();
inst.main().catch(e => {
  console.error(e);
});
})();

/******/ })()
;