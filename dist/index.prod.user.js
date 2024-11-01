// ==UserScript==
// @name        userscript-macaw-unit4
// @namespace   https://ubw.unit4cloud.com/
// @version     0.9.28
// @author      Carsten Wilhelm <carsten.wilhelm@macaw.net>
// @source      https://github.com/macaw-cad/tampermonkey-unit4
// @license     MIT
// @match       https://ubw.unit4cloud.com/*
// @match       https://ubw-preview.unit4cloud.com/*
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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
      basic: ["#GM_config * { font-family: arial,tahoma,myriad pro,sans-serif; }", "#GM_config { background: #FFF; }", "#GM_config input[type='radio'] { margin-right: 8px; }", "#GM_config input[type='checkbox'] { height: 20px; width: 20px; vertical-align: middle; margin-right: 10px; }", "#GM_config .indent40 { margin-left: 40%; }", "#GM_config .field_label { font-size: 16px; font-weight: bold; margin-right: 6px; }", "#GM_config .radio_label { font-size: 16px; }", "#GM_config .block { display: block; }", "#GM_config .saveclose_buttons { margin: 16px 10px 10px; padding: 2px 16px; }", "#GM_config .reset, #GM_config .reset a," + " #GM_config_buttons_holder { color: #000; text-align: right; }", "#GM_config .config_header { font-size: 20pt; margin: 0; }", "#GM_config .config_desc, #GM_config .section_desc, #GM_config .reset { font-size: 9pt; }", "#GM_config .center { text-align: center; }", "#GM_config .section_header_holder { margin-top: 8px; }", "#GM_config .config_var { margin: 0 0 8px; }", "#GM_config .section_header { background: #414141; border: 1px solid #000; color: #FFF;", " font-size: 13pt; margin: 0; }", "#GM_config .section_desc { background: #EFEFEF; border: 1px solid #CCC; color: #575757;" + " font-size: 9pt; margin: 0 0 6px; }"].join('\n') + '\n',
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


    var defaultStyle = 'bottom: auto; border: 1px solid #000; display: none; height: 75%;' + ' left: 0; margin: 0; max-height: 95%; max-width: 95%; opacity: 0;' + ' overflow: auto; padding: 0; position: fixed; right: auto; top: 0;' + ' width: 50%; z-index: 9999;'; // Either use the element passed to init() or create an iframe

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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 xml:space=%27preserve%27 viewBox=%270 0 569.613 569.614%27%3E%3Cpath d=%27m371.49 563.638 113.052-65.854a22.954 22.954 0 0 0 10.64-13.975c1.555-5.888.701-12.148-2.359-17.405l-30.769-52.807c4.789-6.524 9.083-13.115 12.972-19.918 3.893-6.799 7.405-13.84 10.606-21.275l61.114-.221c6.086-.021 11.915-2.464 16.202-6.781 4.287-4.32 6.687-10.165 6.665-16.255l-.48-130.833c-.024-6.089-2.464-11.919-6.784-16.206-4.299-4.269-10.113-6.662-16.166-6.662h-.089l-61.182.242c-6.444-14.462-14.428-28.14-23.871-40.913l30.417-53.143c6.294-11.001 2.481-25.025-8.52-31.316L369.403 5.335c-5.281-3.023-11.545-3.822-17.424-2.231-5.872 1.598-10.872 5.462-13.892 10.747L307.665 67c-15.766-1.662-31.653-1.613-47.363.144l-30.796-52.892c-3.063-5.263-8.094-9.091-13.975-10.646-5.884-1.551-12.148-.704-17.408 2.359L85.068 71.823c-10.949 6.38-14.657 20.429-8.28 31.38l30.765 52.831c-4.761 6.484-9.048 13.076-12.953 19.899-3.904 6.824-7.417 13.855-10.6 21.255l-61.139.235C10.187 197.472-.046 207.785 0 220.456L.48 351.29c.024 6.086 2.463 11.919 6.784 16.206 4.299 4.269 10.11 6.661 16.166 6.661h.086l61.203-.229c6.432 14.452 14.413 28.131 23.868 40.915l-30.413 53.141a22.968 22.968 0 0 0-2.231 17.423 22.9495 22.9495 0 0 0 10.747 13.896l113.535 64.977c3.596 2.056 7.513 3.032 11.38 3.032 7.962 0 15.701-4.146 19.942-11.552l30.417-53.149c15.799 1.671 31.684 1.619 47.348-.144l30.799 52.89A22.9755 22.9755 0 0 0 354.089 566a22.9313 22.9313 0 0 0 17.401-2.362zm-30.361-97.727c-4.902-8.418-14.599-12.815-24.137-10.994-20.588 3.935-42.174 3.999-63.128.202-9.572-1.735-19.184 2.741-24.015 11.181l-26.748 46.745-73.694-42.18 26.75-46.741c4.832-8.439 3.819-19.006-2.521-26.371-13.978-16.239-24.685-34.594-31.818-54.554-3.265-9.131-11.918-15.227-21.61-15.227h-.085l-53.825.199-.315-84.937 53.819-.205c9.722-.04 18.366-6.197 21.576-15.374 3.69-10.557 7.962-20.019 13.06-28.917 5.101-8.914 11.089-17.387 18.311-25.897 6.294-7.417 7.225-17.993 2.334-26.396l-27.081-46.509 73.385-42.754 27.078 46.497c4.893 8.4 14.544 12.821 24.095 11.004 20.716-3.911 42.317-3.978 63.189-.19 9.557 1.753 19.189-2.742 24.019-11.178l26.753-46.744 73.697 42.179-26.753 46.742c-4.826 8.437-3.816 19 2.521 26.368 13.956 16.221 24.669 34.587 31.842 54.59 3.271 9.119 11.919 15.202 21.604 15.202h.092l53.789-.214.315 84.927-53.783.192c-9.712.037-18.351 6.182-21.569 15.347-3.746 10.654-8.023 20.131-13.082 28.975-5.064 8.847-11.067 17.338-18.356 25.958-6.271 7.418-7.194 17.978-2.305 26.368l27.078 46.472-73.391 42.749-27.091-46.515z%27/%3E%3Cpath d=%27M392.531 346.458c16.472-28.773 20.746-62.24 12.047-94.232s-29.342-58.685-58.115-75.151c-18.761-10.74-40.05-16.417-61.562-16.417-44.446 0-85.762 23.944-107.822 62.485-33.994 59.404-13.327 135.39 46.071 169.386 18.764 10.737 40.052 16.411 61.564 16.411 44.444.003 85.761-23.939 107.817-62.482zm-39.835-22.8c-13.902 24.293-39.955 39.385-67.985 39.385-13.528 0-26.934-3.58-38.764-10.349-37.433-21.426-50.456-69.312-29.033-106.751 13.905-24.291 39.958-39.385 67.987-39.385 13.528 0 26.932 3.58 38.762 10.355 18.136 10.379 31.142 27.197 36.628 47.359 5.48 20.163 2.784 41.252-7.595 59.386z%27/%3E%3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body table.MainTable {\n  width: 100% !important;\n}\n.openConfigBtn {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  background: #f0f0f0;\n  z-index: 99999;\n  border: 1px solid #888;\n  padding: 4px;\n  border-radius: 6px;\n  cursor: pointer;\n}\n.openConfigBtn:hover {\n  background: #e0e0e0;\n}\n.openConfigBtn:before {\n  content: \"\";\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  height: 14px;\n  width: 25px;\n  display: inline-block;\n  background-repeat: no-repeat;\n  background-position: center;\n  vertical-align: text-top;\n}\ntable.Excel {\n  width: 100% !important;\n  position: relative;\n  /*\n    th {\n        position: sticky !important;\n        top: 0;\n        background-color: rgb(245, 246, 246);\n    }\n    */\n}\ntable.Excel .ListDescription {\n  display: none;\n}\ntable.Excel *[data-type=\"cell-zoom\"] {\n  width: 35px !important;\n}\ntable.Excel *[data-type=\"cell-status\"] {\n  width: 70px !important;\n}\ntable.Excel *[data-type=\"cell-timecode\"] {\n  width: 70px !important;\n}\ntable.Excel *[data-type=\"cell-hidden-timecode\"] {\n  width: 0 !important;\n  pointer-events: none;\n}\ntable.Excel *[data-type=\"cell-activity\"] {\n  width: 60px !important;\n}\ntable.Excel *[data-type=\"cell-timeunit\"] {\n  width: 50px !important;\n}\ntable.Excel *[data-type=\"cell-weekday\"] {\n  width: 55px !important;\n}\ntable.Excel *[data-type=\"cell-sum\"] {\n  width: 55px !important;\n}\ntable.Excel *[data-type=\"cell-workorder\"] {\n  width: 250px !important;\n}\ntable.Excel *[data-type=\"cell-project\"] {\n  width: 250px !important;\n}\ntable.Excel *[data-type=\"cell-description\"] {\n  width: auto !important;\n}\ntable.Excel *[data-type=\"cell-servicelines\"] {\n  width: 0 !important;\n  pointer-events: none;\n}\ntable.Excel *[data-type=\"cell-finprjtype\"] {\n  width: 0 !important;\n  pointer-events: none;\n}\ntable.Excel *[data-type=\"cell-invunit\"] {\n  width: 0 !important;\n  pointer-events: none;\n}\ntable.Excel *[data-type=\"cell-value\"] {\n  width: 0 !important;\n  pointer-events: none;\n}\ntable.Excel .tmFixDescription .ListDescription {\n  display: block;\n  font-size: 11px;\n  color: #aaa;\n}\nbody.alwaysShowActivity table.Excel *[data-type=\"cell-activity\"] {\n  width: 120px !important;\n}\nbody.fixedDialog [role=dialog] {\n  position: fixed;\n  top: 50% !important;\n  left: 50% !important;\n  transform: translate(-50%, -50%);\n  z-index: 9999 !important;\n}\nbody.fixedDialog #b_modalBackground {\n  z-index: 1000 !important;\n}\nbody.fixedDialog .slcPopup {\n  z-index: 9999 !important;\n}\n", ""]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".timesheetDetails {\n  box-sizing: border-box;\n  padding-left: 20%;\n}\n.timesheetDetails table.Excel th {\n  position: sticky !important;\n  top: 0;\n  background-color: #f5f6f6;\n}\n.timesheetDetails table.Excel .LockedRow {\n  opacity: 0.4 !important;\n  pointer-events: none;\n}\n.timesheetDetails table.Excel *[data-type=\"cell-description\"] div {\n  white-space: break-spaces !important;\n}\n.timesheetDetails table.Excel *[data-type=\"cell-workorder\"] {\n  width: 120px !important;\n}\n.timesheetDetails table.Excel *[data-type=\"cell-project\"] {\n  width: 120px !important;\n}\n.timesheetDetails table.Excel *[data-type=\"cell-weekday\"] {\n  width: 45px !important;\n}\n.timesheetDetails table.Excel *[data-type=\"cell-sum\"] {\n  width: 45px !important;\n}\n.timesheetDetails.hideLocked table.Excel .LockedRow {\n  display: none;\n}\n.workflowLog {\n  width: 40% !important;\n  position: fixed;\n  z-index: 6;\n  top: 35px;\n  right: 19px;\n  display: block !important;\n  margin-bottom: 0 !important;\n  background: #fff;\n}\n.workflowLog + div {\n  display: none;\n}\n.workflowLog:hover {\n  opacity: 1;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/modules/timesheetactions/timesheetactions.less":
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
___CSS_LOADER_EXPORT___.push([module.id, ".timesheetDetails {\n  box-sizing: border-box;\n  padding-left: 20%;\n}\n.timesheetDetails table.Excel th {\n  position: sticky !important;\n  top: 0;\n  background-color: #f5f6f6;\n}\n.timesheetDetails table.Excel .LockedRow {\n  opacity: 0.4 !important;\n  pointer-events: none;\n}\n.timesheetDetails table.Excel *[data-type=\"cell-description\"] div {\n  white-space: break-spaces !important;\n}\n.timesheetDetails table.Excel *[data-type=\"cell-workorder\"] {\n  width: 120px !important;\n}\n.timesheetDetails table.Excel *[data-type=\"cell-project\"] {\n  width: 120px !important;\n}\n.timesheetDetails table.Excel *[data-type=\"cell-weekday\"] {\n  width: 45px !important;\n}\n.timesheetDetails table.Excel *[data-type=\"cell-sum\"] {\n  width: 45px !important;\n}\n.timesheetDetails.hideLocked table.Excel .LockedRow {\n  display: none;\n}\n.workflowLog {\n  width: 40% !important;\n  position: fixed;\n  z-index: 6;\n  top: 35px;\n  right: 19px;\n  display: block !important;\n  margin-bottom: 0 !important;\n  background: #fff;\n}\n.workflowLog + div {\n  display: none;\n}\n.workflowLog:hover {\n  opacity: 1;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/modules/timesheetimport/timesheetimport.less":
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
___CSS_LOADER_EXPORT___.push([module.id, ".modalDialog {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #ffffffcc;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding: 20px;\n  z-index: 9999;\n}\n.modalDialog textarea {\n  width: 100%;\n  height: 100%;\n  margin-bottom: 10px;\n  font-family: 'Courier New', Courier, monospace;\n  font-size: 16px;\n}\n.modalDialog__buttons {\n  margin-bottom: 10px;\n}\n.modalDialog button {\n  margin: 0 20px 0 0;\n  height: 40px;\n}\n", ""]);
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

/***/ }),

/***/ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 xml:space=%27preserve%27 viewBox=%270 0 569.613 569.614%27%3E%3Cpath d=%27m371.49 563.638 113.052-65.854a22.954 22.954 0 0 0 10.64-13.975c1.555-5.888.701-12.148-2.359-17.405l-30.769-52.807c4.789-6.524 9.083-13.115 12.972-19.918 3.893-6.799 7.405-13.84 10.606-21.275l61.114-.221c6.086-.021 11.915-2.464 16.202-6.781 4.287-4.32 6.687-10.165 6.665-16.255l-.48-130.833c-.024-6.089-2.464-11.919-6.784-16.206-4.299-4.269-10.113-6.662-16.166-6.662h-.089l-61.182.242c-6.444-14.462-14.428-28.14-23.871-40.913l30.417-53.143c6.294-11.001 2.481-25.025-8.52-31.316L369.403 5.335c-5.281-3.023-11.545-3.822-17.424-2.231-5.872 1.598-10.872 5.462-13.892 10.747L307.665 67c-15.766-1.662-31.653-1.613-47.363.144l-30.796-52.892c-3.063-5.263-8.094-9.091-13.975-10.646-5.884-1.551-12.148-.704-17.408 2.359L85.068 71.823c-10.949 6.38-14.657 20.429-8.28 31.38l30.765 52.831c-4.761 6.484-9.048 13.076-12.953 19.899-3.904 6.824-7.417 13.855-10.6 21.255l-61.139.235C10.187 197.472-.046 207.785 0 220.456L.48 351.29c.024 6.086 2.463 11.919 6.784 16.206 4.299 4.269 10.11 6.661 16.166 6.661h.086l61.203-.229c6.432 14.452 14.413 28.131 23.868 40.915l-30.413 53.141a22.968 22.968 0 0 0-2.231 17.423 22.9495 22.9495 0 0 0 10.747 13.896l113.535 64.977c3.596 2.056 7.513 3.032 11.38 3.032 7.962 0 15.701-4.146 19.942-11.552l30.417-53.149c15.799 1.671 31.684 1.619 47.348-.144l30.799 52.89A22.9755 22.9755 0 0 0 354.089 566a22.9313 22.9313 0 0 0 17.401-2.362zm-30.361-97.727c-4.902-8.418-14.599-12.815-24.137-10.994-20.588 3.935-42.174 3.999-63.128.202-9.572-1.735-19.184 2.741-24.015 11.181l-26.748 46.745-73.694-42.18 26.75-46.741c4.832-8.439 3.819-19.006-2.521-26.371-13.978-16.239-24.685-34.594-31.818-54.554-3.265-9.131-11.918-15.227-21.61-15.227h-.085l-53.825.199-.315-84.937 53.819-.205c9.722-.04 18.366-6.197 21.576-15.374 3.69-10.557 7.962-20.019 13.06-28.917 5.101-8.914 11.089-17.387 18.311-25.897 6.294-7.417 7.225-17.993 2.334-26.396l-27.081-46.509 73.385-42.754 27.078 46.497c4.893 8.4 14.544 12.821 24.095 11.004 20.716-3.911 42.317-3.978 63.189-.19 9.557 1.753 19.189-2.742 24.019-11.178l26.753-46.744 73.697 42.179-26.753 46.742c-4.826 8.437-3.816 19 2.521 26.368 13.956 16.221 24.669 34.587 31.842 54.59 3.271 9.119 11.919 15.202 21.604 15.202h.092l53.789-.214.315 84.927-53.783.192c-9.712.037-18.351 6.182-21.569 15.347-3.746 10.654-8.023 20.131-13.082 28.975-5.064 8.847-11.067 17.338-18.356 25.958-6.271 7.418-7.194 17.978-2.305 26.368l27.078 46.472-73.391 42.749-27.091-46.515z%27/%3E%3Cpath d=%27M392.531 346.458c16.472-28.773 20.746-62.24 12.047-94.232s-29.342-58.685-58.115-75.151c-18.761-10.74-40.05-16.417-61.562-16.417-44.446 0-85.762 23.944-107.822 62.485-33.994 59.404-13.327 135.39 46.071 169.386 18.764 10.737 40.052 16.411 61.564 16.411 44.444.003 85.761-23.939 107.817-62.482zm-39.835-22.8c-13.902 24.293-39.955 39.385-67.985 39.385-13.528 0-26.934-3.58-38.764-10.349-37.433-21.426-50.456-69.312-29.033-106.751 13.905-24.291 39.958-39.385 67.987-39.385 13.528 0 26.932 3.58 38.762 10.355 18.136 10.379 31.142 27.197 36.628 47.359 5.48 20.163 2.784 41.252-7.595 59.386z%27/%3E%3C/svg%3E":
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 xml:space=%27preserve%27 viewBox=%270 0 569.613 569.614%27%3E%3Cpath d=%27m371.49 563.638 113.052-65.854a22.954 22.954 0 0 0 10.64-13.975c1.555-5.888.701-12.148-2.359-17.405l-30.769-52.807c4.789-6.524 9.083-13.115 12.972-19.918 3.893-6.799 7.405-13.84 10.606-21.275l61.114-.221c6.086-.021 11.915-2.464 16.202-6.781 4.287-4.32 6.687-10.165 6.665-16.255l-.48-130.833c-.024-6.089-2.464-11.919-6.784-16.206-4.299-4.269-10.113-6.662-16.166-6.662h-.089l-61.182.242c-6.444-14.462-14.428-28.14-23.871-40.913l30.417-53.143c6.294-11.001 2.481-25.025-8.52-31.316L369.403 5.335c-5.281-3.023-11.545-3.822-17.424-2.231-5.872 1.598-10.872 5.462-13.892 10.747L307.665 67c-15.766-1.662-31.653-1.613-47.363.144l-30.796-52.892c-3.063-5.263-8.094-9.091-13.975-10.646-5.884-1.551-12.148-.704-17.408 2.359L85.068 71.823c-10.949 6.38-14.657 20.429-8.28 31.38l30.765 52.831c-4.761 6.484-9.048 13.076-12.953 19.899-3.904 6.824-7.417 13.855-10.6 21.255l-61.139.235C10.187 197.472-.046 207.785 0 220.456L.48 351.29c.024 6.086 2.463 11.919 6.784 16.206 4.299 4.269 10.11 6.661 16.166 6.661h.086l61.203-.229c6.432 14.452 14.413 28.131 23.868 40.915l-30.413 53.141a22.968 22.968 0 0 0-2.231 17.423 22.9495 22.9495 0 0 0 10.747 13.896l113.535 64.977c3.596 2.056 7.513 3.032 11.38 3.032 7.962 0 15.701-4.146 19.942-11.552l30.417-53.149c15.799 1.671 31.684 1.619 47.348-.144l30.799 52.89A22.9755 22.9755 0 0 0 354.089 566a22.9313 22.9313 0 0 0 17.401-2.362zm-30.361-97.727c-4.902-8.418-14.599-12.815-24.137-10.994-20.588 3.935-42.174 3.999-63.128.202-9.572-1.735-19.184 2.741-24.015 11.181l-26.748 46.745-73.694-42.18 26.75-46.741c4.832-8.439 3.819-19.006-2.521-26.371-13.978-16.239-24.685-34.594-31.818-54.554-3.265-9.131-11.918-15.227-21.61-15.227h-.085l-53.825.199-.315-84.937 53.819-.205c9.722-.04 18.366-6.197 21.576-15.374 3.69-10.557 7.962-20.019 13.06-28.917 5.101-8.914 11.089-17.387 18.311-25.897 6.294-7.417 7.225-17.993 2.334-26.396l-27.081-46.509 73.385-42.754 27.078 46.497c4.893 8.4 14.544 12.821 24.095 11.004 20.716-3.911 42.317-3.978 63.189-.19 9.557 1.753 19.189-2.742 24.019-11.178l26.753-46.744 73.697 42.179-26.753 46.742c-4.826 8.437-3.816 19 2.521 26.368 13.956 16.221 24.669 34.587 31.842 54.59 3.271 9.119 11.919 15.202 21.604 15.202h.092l53.789-.214.315 84.927-53.783.192c-9.712.037-18.351 6.182-21.569 15.347-3.746 10.654-8.023 20.131-13.082 28.975-5.064 8.847-11.067 17.338-18.356 25.958-6.271 7.418-7.194 17.978-2.305 26.368l27.078 46.472-73.391 42.749-27.091-46.515z%27/%3E%3Cpath d=%27M392.531 346.458c16.472-28.773 20.746-62.24 12.047-94.232s-29.342-58.685-58.115-75.151c-18.761-10.74-40.05-16.417-61.562-16.417-44.446 0-85.762 23.944-107.822 62.485-33.994 59.404-13.327 135.39 46.071 169.386 18.764 10.737 40.052 16.411 61.564 16.411 44.444.003 85.761-23.939 107.817-62.482zm-39.835-22.8c-13.902 24.293-39.955 39.385-67.985 39.385-13.528 0-26.934-3.58-38.764-10.349-37.433-21.426-50.456-69.312-29.033-106.751 13.905-24.291 39.958-39.385 67.987-39.385 13.528 0 26.932 3.58 38.762 10.355 18.136 10.379 31.142 27.197 36.628 47.359 5.48 20.163 2.784 41.252-7.595 59.386z%27/%3E%3C/svg%3E";

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
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			179: 0
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

;// CONCATENATED MODULE: ./package.json
const package_namespaceObject = {"i8":"0.9.28"};
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
      id: 'MacawUnit4Config',
      title: 'Unit4 enhancements configuration',
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
          default: true
        },
        hideTimeCodeColumn: {
          label: '[Global]: hide TimeCode column<copy>If you need the column, disable this option</copy>',
          labelPos: 'right',
          type: 'checkbox',
          default: true
        },
        handleTimeEntry: {
          label: '[Timesheet Entry]: enable enhancements<copy>Enable enhancements on time entry screen</copy>',
          labelPos: 'right',
          type: 'checkbox',
          default: true
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
        }
      },
      css: 'copy { display: block; margin-left: 40px; font-weight: normal }'
    });
  }

  addConfigUI() {
    const btn = document.createElement("button");
    btn.className = "openConfigBtn";
    btn.innerText = "Config";
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

  static addTypeToTableCells(name, section) {
    return new Promise((resolve, reject) => {
      // since Unit45 changes the DOM frequently (and there are no callbacks or events), we need to check
      // and re-add the classes on a regular basis
      window.setInterval(() => {
        section.querySelectorAll('table.Excel').forEach(table => {
          if (!table.classList.contains("tmFix")) {
            table.classList.add("tmFix");
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
                  // add type for some headers
                  MarkupUtility.markTableCells(table, th, col, 'cell-' + text);
                  break;

                case 'timecode':
                  // add type for timecode based on config
                  MarkupUtility.markTableCells(table, th, col, config.hideTimeCodeColumn() ? 'cell-hidden-timecode' : 'cell-timecode');
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
            resolve();
          }
        });
      }, 100);
    });
  }

}
;// CONCATENATED MODULE: ./src/modules/AbstractModule.ts
function AbstractModule_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class AbstractModule {
  constructor() {
    AbstractModule_defineProperty(this, "active", false);
  }

  isActive() {
    return this.active;
  }

  setActive() {
    this.active = true;
  }

}
;// CONCATENATED MODULE: ./src/modules/timeentry/timeentry.ts




class TimeEntry extends AbstractModule {
  // ----------------------------------------------------------------------
  // Time Entry Screen
  // ----------------------------------------------------------------------
  initModule() {
    // mark time entry table with special CSS class
    if (Configuration.getInstance().handleTimeEntry()) {
      const promises = [];
      document.querySelectorAll('h2.SectionTitle').forEach(e => {
        if (e.textContent == 'Time entry') {
          let section = e.closest('.u4-section-container');

          if (section != null) {
            this.section = section;
            this.setActive(); // add data typ3 attributes to table

            promises.push(MarkupUtility.addTypeToTableCells('timeentry', section));
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
        window.clearInterval(interval); // add CSS class

        this.section.classList.add('timeEntry'); // scroll to current entry

        this.section.querySelectorAll('input[title="Work order - Mandatory"]').forEach(e => {
          setTimeout(function () {
            if (document.activeElement === null || document.activeElement.tagName !== "INPUT") {
              e.focus();
            }

            e.scrollIntoView();
          }, 100);
        }); // add all kind of functionality to the table

        this.add(this.section); // add observer to get changes after sort

        this.attachMutationObserver();
      }
    }, 100);
  }

  add(section) {
    // really disable some fields to avoid errors
    if (Configuration.getInstance().hideTimeCodeColumn()) {
      section.querySelectorAll('input[title="Time code"]').forEach(e => {
        e.disabled = true;
        e.readOnly = true;
      });
    } // always show work item & project descriptions in time entry


    const showDescriptions = Configuration.getInstance().alwaysShowDescriptions();
    const showActivity = Configuration.getInstance().alwaysShowActivity();
    section.querySelectorAll('tr.ListItem td[title], tr.ListItem td[title], tr.AltListItem td[title]').forEach(e => {
      const add = showDescriptions && (e.getAttribute("data-type") === "cell-workorder" || e.getAttribute("data-type") === "cell-project") || showActivity && e.getAttribute("data-type") === "cell-activity";

      if (add) {
        if (!e.classList.contains('.tmFixDescription')) {
          let x = document.createElement('div');
          x.className = 'Message DivOverflowNoWrap Ellipsis Description ListDescription';
          x.style.whiteSpace = "break-spaces";
          x.appendChild(document.createTextNode(e.getAttribute('title')));
          e.appendChild(x);
          e.classList.add('tmFixDescription');
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
      }); // get the parent element of the table and start observing

      const e = section.querySelector(".Excel").parentNode;
      observer.observe(e, {
        childList: true
      });
    }
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
            this.setActive(); // add data tape attributes to table

            promises.push(MarkupUtility.addTypeToTableCells('timesheet', section));
          }
        }
      }

      return Promise.all(promises);
    });
    return Promise.resolve();
  } // ----------------------------------------------------------------------
  // Timesheet Details
  // ----------------------------------------------------------------------


  executeModule() {
    const interval = window.setInterval(() => {
      if (!this.sectionTimesheet.classList.contains("timeSheetDetails")) {
        // cancel interval, since UI is now initialized
        window.clearInterval(interval); // add CSS class for different types of view (simple / advanced)

        if (this.sectionTimesheet.querySelector('input[type="checkbox"]') == null) {
          this.sectionTimesheet.classList.add('timesheetDetails', 'timesheetDetailsSimple');
        } else {
          this.sectionTimesheet.classList.add('timesheetDetails', 'timesheetDetailsAdvanced');
        } // CSS class for locked rows


        if (Configuration.getInstance().hideLockedRows()) {
          this.sectionTimesheet.classList.add('hideLocked');
        } // mark complete rows for locked cells


        this.sectionTimesheet.querySelectorAll('.GridCell.Locked').forEach(e => {
          e.closest('tr').classList.add('LockedRow');
        }); // always show work item & project descriptions in timesheet details

        if (Configuration.getInstance().alwaysShowDescriptions()) {
          this.sectionTimesheet.querySelectorAll('tr.MarkRow td[title], tr.ListItemReadOnly td[title], tr.AltListItemReadOnly td[title]').forEach(e => {
            let x = document.createElement('div');
            x.className = 'Message DivOverflowNoWrap Ellipsis Description ListDescription';
            x.style.whiteSpace = "break-spaces";
            x.appendChild(document.createTextNode(e.getAttribute('title')));
            e.appendChild(x);
          });
        }
      }
    }, 100);
  }

}
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/modules/timesheetactions/timesheetactions.less
var timesheetactions = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/modules/timesheetactions/timesheetactions.less");
;// CONCATENATED MODULE: ./src/modules/timesheetactions/timesheetactions.less

      
      
      
      
      
      
      
      
      

var timesheetactions_options = {};

timesheetactions_options.styleTagTransform = (styleTagTransform_default());
timesheetactions_options.setAttributes = (setAttributesWithoutAttributes_default());

      timesheetactions_options.insert = insertBySelector_default().bind(null, "head");
    
timesheetactions_options.domAPI = (styleDomAPI_default());
timesheetactions_options.insertStyleElement = (insertStyleElement_default());

var timesheetactions_update = injectStylesIntoStyleTag_default()(timesheetactions/* default */.Z, timesheetactions_options);




       /* harmony default export */ const timesheetactions_timesheetactions = (timesheetactions/* default */.Z && timesheetactions/* default.locals */.Z.locals ? timesheetactions/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/modules/timesheetactions/timesheetactions.ts



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
        }); //create new table cell

        const inputCell = table.rows[0].insertCell(0);
        inputCell.classList.add('Input'); //create new table cell

        const buttonCell = table.rows[0].insertCell(1);
        buttonCell.classList.add('Button'); //create new table cell

        const sepCell = table.rows[0].insertCell(2); //create new input

        const input = document.createElement('input');
        input.setAttribute("id", "add-rows-num");
        input.setAttribute('type', 'number');
        input.setAttribute('min', '1');
        input.setAttribute('max', '99');
        input.classList.add('Edit');
        input.value = '10'; //create new button

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
        }); //create seperator

        let sepWrapper = document.createElement("div");
        sepWrapper.innerHTML = '&nbsp;|&nbsp;'; // when the first row was added, this should do the trick

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
        }); //create new table cell

        const buttonCell = table.rows[0].insertCell(5);
        buttonCell.classList.add('Button'); //create new button

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
          let repeat = 1; //TODO: search empty rows and click selectbox
          //this.standardDeleteBtn.dispatchEvent(new Event('click'));
        });
        buttonCell.appendChild(button);
      }
    }
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



class Global extends AbstractModule {
  // ----------------------------------------------------------------------
  // Time Entry Screen
  // ----------------------------------------------------------------------
  initModule() {
    const config = Configuration.getInstance(); // allow time entry with "," as separator

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
    } // scroll input with focus into view


    var currentFocus = null;
    document.querySelectorAll('.timeEntry').forEach(e => {
      this.setActive();
      e.addEventListener('focusin', event => {
        const ele = event.target;

        if (ele.dataset.type && ele !== currentFocus) {
          currentFocus = ele; //ele.scrollIntoView({block: "end", inline: "nearest"});
        }
      });
    }); // fixed centered dialogs

    if (config.fixedDialogs()) {
      document.body.classList.add("fixedDialog");
    } else {
      document.body.classList.remove("fixedDialog");
    } // add some CSS classes based on configuration


    if (config.alwaysShowDescriptions()) document.body.classList.add("alwaysShowDescription");
    if (config.alwaysShowActivity()) document.body.classList.add("alwaysShowActivity");
    return Promise.resolve();
  }

  executeModule() {// no actions required
  }

}
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/modules/timesheetimport/timesheetimport.less
var timesheetimport = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/modules/timesheetimport/timesheetimport.less");
;// CONCATENATED MODULE: ./src/modules/timesheetimport/timesheetimport.less

      
      
      
      
      
      
      
      
      

var timesheetimport_options = {};

timesheetimport_options.styleTagTransform = (styleTagTransform_default());
timesheetimport_options.setAttributes = (setAttributesWithoutAttributes_default());

      timesheetimport_options.insert = insertBySelector_default().bind(null, "head");
    
timesheetimport_options.domAPI = (styleDomAPI_default());
timesheetimport_options.insertStyleElement = (insertStyleElement_default());

var timesheetimport_update = injectStylesIntoStyleTag_default()(timesheetimport/* default */.Z, timesheetimport_options);




       /* harmony default export */ const timesheetimport_timesheetimport = (timesheetimport/* default */.Z && timesheetimport/* default.locals */.Z.locals ? timesheetimport/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/modules/timesheetimport/timesheetimport.ts
function timesheetimport_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




// status of currently imported work order
var ImportWorkOrderStatus; // class for storing work orders to import

(function (ImportWorkOrderStatus) {
  ImportWorkOrderStatus[ImportWorkOrderStatus["ADD"] = 1] = "ADD";
  ImportWorkOrderStatus[ImportWorkOrderStatus["WORKORDER"] = 2] = "WORKORDER";
  ImportWorkOrderStatus[ImportWorkOrderStatus["ACTIVITY"] = 3] = "ACTIVITY";
  ImportWorkOrderStatus[ImportWorkOrderStatus["DESCRIPTION"] = 4] = "DESCRIPTION";
  ImportWorkOrderStatus[ImportWorkOrderStatus["TIME"] = 5] = "TIME";
  ImportWorkOrderStatus[ImportWorkOrderStatus["DONE"] = 100] = "DONE";
})(ImportWorkOrderStatus || (ImportWorkOrderStatus = {}));

class ImportWorkOrder {}

class Timesheetimport extends AbstractModule {
  // max waiting time for a field to be available / get focus
  initModule() {
    if (Configuration.getInstance().experimentalJsonImport()) {
      // add import button if this feature is enabled in configuration
      document.querySelectorAll('h2.SectionTitle').forEach(e => {
        if (e.textContent.startsWith('Time entry')) {
          let section = e.closest('.u4-section-placeholder');

          if (section != null) {
            this.section = section;
            this.setActive();
          }
        }
      });
    }

    return Promise.resolve();
  }

  executeModule() {
    if (this.section) {
      const table = this.section.querySelector('.TableButtonRow').closest('table');

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
          document.body.appendChild(this.dialog); //create new table cell

          const buttonCell = document.createElement("td");
          table.rows[0].insertBefore(buttonCell, this.standardAddBtn.parentElement);
          buttonCell.classList.add('Button'); //create new button

          const button = document.createElement("button");
          button.setAttribute("id", "json-import-btn");
          button.setAttribute("type", "button");
          button.setAttribute("role", "button");
          button.setAttribute("title", "Import data from JSON");
          button.setAttribute("onclick", "");
          button.classList.add('BaseButton');
          button.classList.add('SectionButton');
          button.innerHTML = "<span>Import JSON</span>";
          button.addEventListener("click", this.actionDialog.bind(this));
          buttonCell.appendChild(button);
        } // Handle remaining data from last JSON import


        this.handleImportNextItem();
      }
    }
  } // show modal dialog


  actionDialog() {
    this.dialogEntry.value = '';
    this.dialog.style.display = 'flex';
  } // close modal dialog


  actionClose() {
    this.dialog.style.display = 'none';
    this.dialogEntry.value = '';
  } // start the import


  actionImport() {
    try {
      const data = JSON.parse(this.dialogEntry.value);
      /*
      [
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
      */
      // put data in session and start with first entry

      const next = data.shift();
      sessionStorage.setItem("workorder_import_running", "true");
      sessionStorage.setItem("workorder_import_next", JSON.stringify({
        status: ImportWorkOrderStatus.ADD,
        workOrder: next
      }));
      sessionStorage.setItem("workorder_import_pending", JSON.stringify(data));
      sessionStorage.setItem("workorder_import_failed", "[]"); // close dialog

      this.actionClose(); // handle first import item

      this.handleImportNextItem();
    } catch (e) {
      console.error(e);
      alert("Import data must be valid JSON");
    }
  } // get the import object that is currently active


  getCurrentImportWorkOrder() {
    // do we have a current import object?
    const rawNext = sessionStorage.getItem("workorder_import_next");

    if (rawNext !== null && rawNext !== "") {
      var next = JSON.parse(rawNext);

      if (next.status === ImportWorkOrderStatus.DONE) {
        // use next item from remaining list
        next = this.getNextFromPending();
      }

      return next;
    }
  } // store the import object that is currently active (e.g. after status change)


  storeCurrentImportWorkOrder(next) {
    sessionStorage.setItem("workorder_import_next", JSON.stringify(next));
  } // add an entry to the failed ones


  addFailed(failed) {
    // load failed ones    
    var failedList = this.getFailed();
    failedList.push(failed);
    sessionStorage.setItem("workorder_import_failed", JSON.stringify(failedList));
  }

  getFailed() {
    var rawFailedList = sessionStorage.getItem("workorder_import_failed");
    var failedList = [];

    if (rawFailedList !== null && rawFailedList !== "") {
      failedList = JSON.parse(rawFailedList);
    }

    return failedList;
  } // change status of import object and store in session


  updateImportState(next, status) {
    next.status = status;
    this.storeCurrentImportWorkOrder(next);
  } // get the next import object from the list of pending work orders


  getNextFromPending() {
    const raw = sessionStorage.getItem("workorder_import_pending");

    if (raw !== null && raw !== "") {
      const data = JSON.parse(raw);

      if (data.length > 0) {
        // get next item
        const next = data.shift(); // update shortened list in session

        sessionStorage.setItem("workorder_import_pending", JSON.stringify(data)); // return an import object with initial state

        return {
          status: ImportWorkOrderStatus.ADD,
          workOrder: next
        };
      } else {
        // no pending elements left
        sessionStorage.setItem("workorder_import_pending", "");
      }
    }
  } // wait a few seconds


  wait(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
  } // wait for a input field to be focussed (queried by title of parent element)


  async waitForFocus(title) {
    var retries = Timesheetimport.retrySeconds;

    do {
      const act = document.activeElement;

      if (act && act.nodeName === "INPUT" && act.parentElement.title === title) {
        return act;
      }

      if (act && act.nodeName === "BUTTON" && act.title === title) {
        return act;
      }

      await this.wait(1);
    } while (--retries > 0);

    throw new Error(`Input field not found for: ${title}`);
  } // wait for element to be available (queried by CSS selector)


  async waitForElements(query) {
    var retries = Timesheetimport.retrySeconds;

    do {
      const res = this.standardAddBtn.ownerDocument.querySelectorAll(query);

      if (res !== null && res.length > 0) {
        return [...res];
      }

      await this.wait(1);
    } while (--retries > 0);

    throw new Error(`Element field not found for: ${query}`);
  } // searches for a matching existing row


  searchExistingRow(next) {
    // check all rows
    const rows = this.section.querySelectorAll('tr.ListItem,tr.AltListItem');

    for (const row of rows) {
      var _row$querySelector, _row$querySelector2, _row$querySelector3;

      const workOrder = (_row$querySelector = row.querySelector('td[data-type="cell-workorder"] div.ww.ellipsis')) === null || _row$querySelector === void 0 ? void 0 : _row$querySelector.textContent;
      const activity = (_row$querySelector2 = row.querySelector('td[data-type="cell-activity"] div.ww.ellipsis')) === null || _row$querySelector2 === void 0 ? void 0 : _row$querySelector2.textContent;
      const description = (_row$querySelector3 = row.querySelector('td[data-type="cell-description"] div.ww.ellipsis')) === null || _row$querySelector3 === void 0 ? void 0 : _row$querySelector3.textContent;

      if (next.workOrder.workOrder === workOrder && next.workOrder.activity === activity && next.workOrder.description === description) {
        return row;
      }
    }

    const editRows = this.section.querySelectorAll('tr.EditRow');

    for (const row of editRows) {
      var _row$querySelector4, _row$querySelector5, _row$querySelector6;

      const workOrder = (_row$querySelector4 = row.querySelector('td[data-type="cell-workorder"] td.InputCell input')) === null || _row$querySelector4 === void 0 ? void 0 : _row$querySelector4.value;
      const activity = (_row$querySelector5 = row.querySelector('td[data-type="cell-activity"] td.InputCell input')) === null || _row$querySelector5 === void 0 ? void 0 : _row$querySelector5.value;
      const description = (_row$querySelector6 = row.querySelector('td[data-type="cell-description"] td.InputCell input')) === null || _row$querySelector6 === void 0 ? void 0 : _row$querySelector6.value;

      if (next.workOrder.workOrder === workOrder && next.workOrder.activity === activity && next.workOrder.description === description) {
        return row;
      }
    }
  } // add a new row in timesheet


  addNewRow(next) {
    // next state is workorder
    this.updateImportState(next, ImportWorkOrderStatus.WORKORDER); // click "Add" button
    //console.log("Add a new row");

    this.standardAddBtn.dispatchEvent(new Event('click')); // adding a row will reload the page

    return true;
  }

  activateRow(row, next) {
    // next state is time entry
    this.updateImportState(next, ImportWorkOrderStatus.TIME); // click on description field to activate the row

    const cell = row.querySelector("td[data-type=cell-description] div.ww.ellipsis");
    cell.click(); // activating a row always triggers a page reload

    return true;
  } // wait for workorder input in current row to get focus and fill in the given text


  async fillWorkorder(next) {
    // next state is description
    this.updateImportState(next, ImportWorkOrderStatus.ACTIVITY); // fill in workorder

    const input = await this.waitForFocus("Work order");
    const curr = input.value;
    input.value = next.workOrder.workOrder;
    input.dispatchEvent(new KeyboardEvent('keydown', {
      code: "Tab",
      key: "Tab",
      keyCode: 9,
      which: 9,
      bubbles: true,
      cancelable: true
    })); // page reloads if value has changed

    return curr !== input.value;
  } // wait for activity input in current row to get focus and fill in the given text


  async fillActivity(next) {
    // next state is workorder
    this.updateImportState(next, ImportWorkOrderStatus.DESCRIPTION); //console.log("Fill in activity");

    var input = await this.waitForFocus("Activity");
    const curr = input.value;
    input.value = next.workOrder.activity || "100";
    input.dispatchEvent(new Event("blur")); // page reloads if value has changed

    return curr !== input.value;
  } // look for description area in current row and fill in the given text


  async fillDescription(next) {
    // next state is time entry
    this.updateImportState(next, ImportWorkOrderStatus.TIME); //console.log("Fill in description", next.workOrder.description);

    const input = this.standardAddBtn.ownerDocument.querySelector(".EditRow [data-type=cell-description] .InputCell input");
    input.dispatchEvent(new Event("focus"));
    input.value = next.workOrder.description;
    input.dispatchEvent(new Event("blur")); // description changes NEVER trigger a page reload

    return false;
  } // look for next time entry with matching (date) title and fill in value


  async fillTime(next) {
    if (next.workOrder.time.length > 0) {
      // handle next time entry
      const entry = next.workOrder.time.shift();
      this.storeCurrentImportWorkOrder(next);
      const headers = await this.waitForElements('th[data-type=cell-weekday]');
      const fields = await this.waitForElements('.EditRow [data-type=cell-weekday] .InputCell input'); // TODO: when workorder is not valid, there is no EditRow InputCell and this throws an Exception
      // requested date

      const date = new Date(entry.date);
      const dateEN = date.getMonth() + 1 + "/" + date.getDate(); // eEN format: M/D

      const dateDE = date.getDate() + "." + (date.getMonth() + 1) + "."; // DE format: D.M.

      for (var i = 0; i < headers.length; ++i) {
        const head = headers[i];

        if (head.title.includes(dateEN) || head.title.includes(dateDE)) {
          // seems to match the date
          const field = fields[i];
          const curr = field.value;
          field.dispatchEvent(new Event("focus"));
          field.value = `${entry.hours}`;
          field.dispatchEvent(new Event("blur")); // page reloads if value has changed

          return curr !== field.value;
        }
      }

      return false;
    } // set to done if there are no more time entries left


    this.updateImportState(next, ImportWorkOrderStatus.DONE);
    return false;
  } // handle the import of the current import item


  async handleImportNextItem() {
    const next = this.getCurrentImportWorkOrder(); //console.log("Handle import", next);

    if (next) {
      var willReload = false; // run actions as long as we do not have a page reload

      var lastAction = "";
      var recoverable = true;

      do {
        if (next.status === ImportWorkOrderStatus.ADD) {
          const existingRow = this.searchExistingRow(next);

          if (!existingRow) {
            lastAction = "Add a new row";
            willReload = this.addNewRow(next);
          } else {
            lastAction = "Activated an existing row";
            willReload = this.activateRow(existingRow, next);
          }
        } else if (next.status === ImportWorkOrderStatus.WORKORDER) {
          lastAction = "Insert workorder";
          recoverable = false; // wrong workorders are not recoverable!

          willReload = await this.fillWorkorder(next);
        } else if (next.status === ImportWorkOrderStatus.ACTIVITY) {
          lastAction = "Insert activity";
          willReload = await this.fillActivity(next);
        } else if (next.status === ImportWorkOrderStatus.DESCRIPTION) {
          lastAction = "Insert description";
          willReload = await this.fillDescription(next);
        } else if (next.status === ImportWorkOrderStatus.TIME) {
          lastAction = "Insert time";

          try {
            willReload = await this.fillTime(next);
          } catch (e) {
            // time field not found = invalid workorder
            // skip the whole entry and mark as failed
            this.addFailed(next);
            this.updateImportState(next, ImportWorkOrderStatus.DONE);
          }
        } else if (next.status === ImportWorkOrderStatus.DONE) {
          // just reload the frame to finish
          lastAction = "Reload page";
          window.location.reload();
          willReload = true;
        }

        if (willReload) {
          // last action should reload the page - if this has not been done for 5s,
          // log an error and proceed with next action?
          await new Promise(f => setTimeout(f, 5000));
          alert("Last action (" + lastAction + ") seems to have failed, will retry next action");

          if (recoverable) {
            // move to next action
            willReload = false;
          } else {
            // remember this as failed, mark as done and try next one
            this.addFailed(next);
            this.updateImportState(next, ImportWorkOrderStatus.DONE);
          }
        }
      } while (!willReload);
    } else if (sessionStorage.getItem("workorder_import_running") === "true") {
      // HOORAY! We are done!
      sessionStorage.setItem("workorder_import_running", "false");
      const failed = this.getFailed();

      if (failed.length === 0) {
        // no failed rows!
        alert("JSON import finished without errors");
      } else {
        // we had some failed rows, show them in alert
        var failedMsg = "";
        failed.forEach(f => {
          failedMsg += `Failed: ${f.workOrder.workOrder} - ${f.workOrder.description}\n`;
        });
        alert("JSON import finished with " + failed.length + " failed workorders:\n" + failedMsg);
      }
    }
  }

}

timesheetimport_defineProperty(Timesheetimport, "retrySeconds", 10);
;// CONCATENATED MODULE: ./src/index.ts
function src_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class Unit4Enhancer {
  // list of modules to use
  async main() {
    const version = package_namespaceObject.i8;
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
      }); // execute all active modules

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

src_defineProperty(Unit4Enhancer, "modules", [TimeEntry, TimeSheet, Timesheetactions, Timesheetimport, Global]);

const inst = new Unit4Enhancer();
inst.main().catch(e => {
  console.error(e);
});
})();

/******/ })()
;