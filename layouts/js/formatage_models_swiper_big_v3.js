/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../AppVuejs/wbu-atomique/node_modules/dom7/dom7.esm.js":
/*!********************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/dom7/dom7.esm.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": function() { return /* binding */ $; },
/* harmony export */   "add": function() { return /* binding */ add; },
/* harmony export */   "addClass": function() { return /* binding */ addClass; },
/* harmony export */   "animate": function() { return /* binding */ animate; },
/* harmony export */   "animationEnd": function() { return /* binding */ animationEnd; },
/* harmony export */   "append": function() { return /* binding */ append; },
/* harmony export */   "appendTo": function() { return /* binding */ appendTo; },
/* harmony export */   "attr": function() { return /* binding */ attr; },
/* harmony export */   "blur": function() { return /* binding */ blur; },
/* harmony export */   "change": function() { return /* binding */ change; },
/* harmony export */   "children": function() { return /* binding */ children; },
/* harmony export */   "click": function() { return /* binding */ click; },
/* harmony export */   "closest": function() { return /* binding */ closest; },
/* harmony export */   "css": function() { return /* binding */ css; },
/* harmony export */   "data": function() { return /* binding */ data; },
/* harmony export */   "dataset": function() { return /* binding */ dataset; },
/* harmony export */   "detach": function() { return /* binding */ detach; },
/* harmony export */   "each": function() { return /* binding */ each; },
/* harmony export */   "empty": function() { return /* binding */ empty; },
/* harmony export */   "eq": function() { return /* binding */ eq; },
/* harmony export */   "filter": function() { return /* binding */ filter; },
/* harmony export */   "find": function() { return /* binding */ find; },
/* harmony export */   "focus": function() { return /* binding */ focus; },
/* harmony export */   "focusin": function() { return /* binding */ focusin; },
/* harmony export */   "focusout": function() { return /* binding */ focusout; },
/* harmony export */   "hasClass": function() { return /* binding */ hasClass; },
/* harmony export */   "height": function() { return /* binding */ height; },
/* harmony export */   "hide": function() { return /* binding */ hide; },
/* harmony export */   "html": function() { return /* binding */ html; },
/* harmony export */   "index": function() { return /* binding */ index; },
/* harmony export */   "insertAfter": function() { return /* binding */ insertAfter; },
/* harmony export */   "insertBefore": function() { return /* binding */ insertBefore; },
/* harmony export */   "is": function() { return /* binding */ is; },
/* harmony export */   "keydown": function() { return /* binding */ keydown; },
/* harmony export */   "keypress": function() { return /* binding */ keypress; },
/* harmony export */   "keyup": function() { return /* binding */ keyup; },
/* harmony export */   "mousedown": function() { return /* binding */ mousedown; },
/* harmony export */   "mouseenter": function() { return /* binding */ mouseenter; },
/* harmony export */   "mouseleave": function() { return /* binding */ mouseleave; },
/* harmony export */   "mousemove": function() { return /* binding */ mousemove; },
/* harmony export */   "mouseout": function() { return /* binding */ mouseout; },
/* harmony export */   "mouseover": function() { return /* binding */ mouseover; },
/* harmony export */   "mouseup": function() { return /* binding */ mouseup; },
/* harmony export */   "next": function() { return /* binding */ next; },
/* harmony export */   "nextAll": function() { return /* binding */ nextAll; },
/* harmony export */   "off": function() { return /* binding */ off; },
/* harmony export */   "offset": function() { return /* binding */ offset; },
/* harmony export */   "on": function() { return /* binding */ on; },
/* harmony export */   "once": function() { return /* binding */ once; },
/* harmony export */   "outerHeight": function() { return /* binding */ outerHeight; },
/* harmony export */   "outerWidth": function() { return /* binding */ outerWidth; },
/* harmony export */   "parent": function() { return /* binding */ parent; },
/* harmony export */   "parents": function() { return /* binding */ parents; },
/* harmony export */   "prepend": function() { return /* binding */ prepend; },
/* harmony export */   "prependTo": function() { return /* binding */ prependTo; },
/* harmony export */   "prev": function() { return /* binding */ prev; },
/* harmony export */   "prevAll": function() { return /* binding */ prevAll; },
/* harmony export */   "prop": function() { return /* binding */ prop; },
/* harmony export */   "remove": function() { return /* binding */ remove; },
/* harmony export */   "removeAttr": function() { return /* binding */ removeAttr; },
/* harmony export */   "removeClass": function() { return /* binding */ removeClass; },
/* harmony export */   "removeData": function() { return /* binding */ removeData; },
/* harmony export */   "resize": function() { return /* binding */ resize; },
/* harmony export */   "scroll": function() { return /* binding */ scroll; },
/* harmony export */   "scrollLeft": function() { return /* binding */ scrollLeft; },
/* harmony export */   "scrollTo": function() { return /* binding */ scrollTo; },
/* harmony export */   "scrollTop": function() { return /* binding */ scrollTop; },
/* harmony export */   "show": function() { return /* binding */ show; },
/* harmony export */   "siblings": function() { return /* binding */ siblings; },
/* harmony export */   "stop": function() { return /* binding */ stop; },
/* harmony export */   "styles": function() { return /* binding */ styles; },
/* harmony export */   "submit": function() { return /* binding */ submit; },
/* harmony export */   "text": function() { return /* binding */ text; },
/* harmony export */   "toggleClass": function() { return /* binding */ toggleClass; },
/* harmony export */   "touchend": function() { return /* binding */ touchend; },
/* harmony export */   "touchmove": function() { return /* binding */ touchmove; },
/* harmony export */   "touchstart": function() { return /* binding */ touchstart; },
/* harmony export */   "transform": function() { return /* binding */ transform; },
/* harmony export */   "transition": function() { return /* binding */ transition; },
/* harmony export */   "transitionEnd": function() { return /* binding */ transitionEnd; },
/* harmony export */   "trigger": function() { return /* binding */ trigger; },
/* harmony export */   "val": function() { return /* binding */ val; },
/* harmony export */   "value": function() { return /* binding */ value; },
/* harmony export */   "width": function() { return /* binding */ width; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "../../../AppVuejs/wbu-atomique/node_modules/ssr-window/ssr-window.esm.js");
/**
 * Dom7 4.0.0
 * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
 * https://framework7.io/docs/dom7.html
 *
 * Copyright 2021, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: August 25, 2021
 */


/* eslint-disable no-proto */
function makeReactive(obj) {
  const proto = obj.__proto__;
  Object.defineProperty(obj, '__proto__', {
    get() {
      return proto;
    },

    set(value) {
      proto.__proto__ = value;
    }

  });
}

class Dom7 extends Array {
  constructor(items) {
    super(...(items || []));
    makeReactive(this);
  }

}

function arrayFlat(arr = []) {
  const res = [];
  arr.forEach(el => {
    if (Array.isArray(el)) {
      res.push(...arrayFlat(el));
    } else {
      res.push(el);
    }
  });
  return res;
}
function arrayFilter(arr, callback) {
  return Array.prototype.filter.call(arr, callback);
}
function arrayUnique(arr) {
  const uniqueArray = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
  }

  return uniqueArray;
}
function toCamelCase(string) {
  return string.toLowerCase().replace(/-(.)/g, (match, group) => group.toUpperCase());
}

// eslint-disable-next-line

function qsa(selector, context) {
  if (typeof selector !== 'string') {
    return [selector];
  }

  const a = [];
  const res = context.querySelectorAll(selector);

  for (let i = 0; i < res.length; i += 1) {
    a.push(res[i]);
  }

  return a;
}

function $(selector, context) {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  let arr = [];

  if (!context && selector instanceof Dom7) {
    return selector;
  }

  if (!selector) {
    return new Dom7(arr);
  }

  if (typeof selector === 'string') {
    const html = selector.trim();

    if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
      let toCreate = 'div';
      if (html.indexOf('<li') === 0) toCreate = 'ul';
      if (html.indexOf('<tr') === 0) toCreate = 'tbody';
      if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr';
      if (html.indexOf('<tbody') === 0) toCreate = 'table';
      if (html.indexOf('<option') === 0) toCreate = 'select';
      const tempParent = document.createElement(toCreate);
      tempParent.innerHTML = html;

      for (let i = 0; i < tempParent.childNodes.length; i += 1) {
        arr.push(tempParent.childNodes[i]);
      }
    } else {
      arr = qsa(selector.trim(), context || document);
    } // arr = qsa(selector, document);

  } else if (selector.nodeType || selector === window || selector === document) {
    arr.push(selector);
  } else if (Array.isArray(selector)) {
    if (selector instanceof Dom7) return selector;
    arr = selector;
  }

  return new Dom7(arrayUnique(arr));
}

$.fn = Dom7.prototype;

// eslint-disable-next-line

function addClass(...classes) {
  const classNames = arrayFlat(classes.map(c => c.split(' ')));
  this.forEach(el => {
    el.classList.add(...classNames);
  });
  return this;
}

function removeClass(...classes) {
  const classNames = arrayFlat(classes.map(c => c.split(' ')));
  this.forEach(el => {
    el.classList.remove(...classNames);
  });
  return this;
}

function toggleClass(...classes) {
  const classNames = arrayFlat(classes.map(c => c.split(' ')));
  this.forEach(el => {
    classNames.forEach(className => {
      el.classList.toggle(className);
    });
  });
}

function hasClass(...classes) {
  const classNames = arrayFlat(classes.map(c => c.split(' ')));
  return arrayFilter(this, el => {
    return classNames.filter(className => el.classList.contains(className)).length > 0;
  }).length > 0;
}

function attr(attrs, value) {
  if (arguments.length === 1 && typeof attrs === 'string') {
    // Get attr
    if (this[0]) return this[0].getAttribute(attrs);
    return undefined;
  } // Set attrs


  for (let i = 0; i < this.length; i += 1) {
    if (arguments.length === 2) {
      // String
      this[i].setAttribute(attrs, value);
    } else {
      // Object
      for (const attrName in attrs) {
        this[i][attrName] = attrs[attrName];
        this[i].setAttribute(attrName, attrs[attrName]);
      }
    }
  }

  return this;
}

function removeAttr(attr) {
  for (let i = 0; i < this.length; i += 1) {
    this[i].removeAttribute(attr);
  }

  return this;
}

function prop(props, value) {
  if (arguments.length === 1 && typeof props === 'string') {
    // Get prop
    if (this[0]) return this[0][props];
  } else {
    // Set props
    for (let i = 0; i < this.length; i += 1) {
      if (arguments.length === 2) {
        // String
        this[i][props] = value;
      } else {
        // Object
        for (const propName in props) {
          this[i][propName] = props[propName];
        }
      }
    }

    return this;
  }

  return this;
}

function data(key, value) {
  let el;

  if (typeof value === 'undefined') {
    el = this[0];
    if (!el) return undefined; // Get value

    if (el.dom7ElementDataStorage && key in el.dom7ElementDataStorage) {
      return el.dom7ElementDataStorage[key];
    }

    const dataKey = el.getAttribute(`data-${key}`);

    if (dataKey) {
      return dataKey;
    }

    return undefined;
  } // Set value


  for (let i = 0; i < this.length; i += 1) {
    el = this[i];
    if (!el.dom7ElementDataStorage) el.dom7ElementDataStorage = {};
    el.dom7ElementDataStorage[key] = value;
  }

  return this;
}

function removeData(key) {
  for (let i = 0; i < this.length; i += 1) {
    const el = this[i];

    if (el.dom7ElementDataStorage && el.dom7ElementDataStorage[key]) {
      el.dom7ElementDataStorage[key] = null;
      delete el.dom7ElementDataStorage[key];
    }
  }
}

function dataset() {
  const el = this[0];
  if (!el) return undefined;
  const dataset = {}; // eslint-disable-line

  if (el.dataset) {
    for (const dataKey in el.dataset) {
      dataset[dataKey] = el.dataset[dataKey];
    }
  } else {
    for (let i = 0; i < el.attributes.length; i += 1) {
      const attr = el.attributes[i];

      if (attr.name.indexOf('data-') >= 0) {
        dataset[toCamelCase(attr.name.split('data-')[1])] = attr.value;
      }
    }
  }

  for (const key in dataset) {
    if (dataset[key] === 'false') dataset[key] = false;else if (dataset[key] === 'true') dataset[key] = true;else if (parseFloat(dataset[key]) === dataset[key] * 1) dataset[key] *= 1;
  }

  return dataset;
}

function val(value) {
  if (typeof value === 'undefined') {
    // get value
    const el = this[0];
    if (!el) return undefined;

    if (el.multiple && el.nodeName.toLowerCase() === 'select') {
      const values = [];

      for (let i = 0; i < el.selectedOptions.length; i += 1) {
        values.push(el.selectedOptions[i].value);
      }

      return values;
    }

    return el.value;
  } // set value


  for (let i = 0; i < this.length; i += 1) {
    const el = this[i];

    if (Array.isArray(value) && el.multiple && el.nodeName.toLowerCase() === 'select') {
      for (let j = 0; j < el.options.length; j += 1) {
        el.options[j].selected = value.indexOf(el.options[j].value) >= 0;
      }
    } else {
      el.value = value;
    }
  }

  return this;
}

function value(value) {
  return this.val(value);
}

function transform(transform) {
  for (let i = 0; i < this.length; i += 1) {
    this[i].style.transform = transform;
  }

  return this;
}

function transition(duration) {
  for (let i = 0; i < this.length; i += 1) {
    this[i].style.transitionDuration = typeof duration !== 'string' ? `${duration}ms` : duration;
  }

  return this;
}

function on(...args) {
  let [eventType, targetSelector, listener, capture] = args;

  if (typeof args[1] === 'function') {
    [eventType, listener, capture] = args;
    targetSelector = undefined;
  }

  if (!capture) capture = false;

  function handleLiveEvent(e) {
    const target = e.target;
    if (!target) return;
    const eventData = e.target.dom7EventData || [];

    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }

    if ($(target).is(targetSelector)) listener.apply(target, eventData);else {
      const parents = $(target).parents(); // eslint-disable-line

      for (let k = 0; k < parents.length; k += 1) {
        if ($(parents[k]).is(targetSelector)) listener.apply(parents[k], eventData);
      }
    }
  }

  function handleEvent(e) {
    const eventData = e && e.target ? e.target.dom7EventData || [] : [];

    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }

    listener.apply(this, eventData);
  }

  const events = eventType.split(' ');
  let j;

  for (let i = 0; i < this.length; i += 1) {
    const el = this[i];

    if (!targetSelector) {
      for (j = 0; j < events.length; j += 1) {
        const event = events[j];
        if (!el.dom7Listeners) el.dom7Listeners = {};
        if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
        el.dom7Listeners[event].push({
          listener,
          proxyListener: handleEvent
        });
        el.addEventListener(event, handleEvent, capture);
      }
    } else {
      // Live events
      for (j = 0; j < events.length; j += 1) {
        const event = events[j];
        if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
        if (!el.dom7LiveListeners[event]) el.dom7LiveListeners[event] = [];
        el.dom7LiveListeners[event].push({
          listener,
          proxyListener: handleLiveEvent
        });
        el.addEventListener(event, handleLiveEvent, capture);
      }
    }
  }

  return this;
}

function off(...args) {
  let [eventType, targetSelector, listener, capture] = args;

  if (typeof args[1] === 'function') {
    [eventType, listener, capture] = args;
    targetSelector = undefined;
  }

  if (!capture) capture = false;
  const events = eventType.split(' ');

  for (let i = 0; i < events.length; i += 1) {
    const event = events[i];

    for (let j = 0; j < this.length; j += 1) {
      const el = this[j];
      let handlers;

      if (!targetSelector && el.dom7Listeners) {
        handlers = el.dom7Listeners[event];
      } else if (targetSelector && el.dom7LiveListeners) {
        handlers = el.dom7LiveListeners[event];
      }

      if (handlers && handlers.length) {
        for (let k = handlers.length - 1; k >= 0; k -= 1) {
          const handler = handlers[k];

          if (listener && handler.listener === listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          } else if (!listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          }
        }
      }
    }
  }

  return this;
}

function once(...args) {
  const dom = this;
  let [eventName, targetSelector, listener, capture] = args;

  if (typeof args[1] === 'function') {
    [eventName, listener, capture] = args;
    targetSelector = undefined;
  }

  function onceHandler(...eventArgs) {
    listener.apply(this, eventArgs);
    dom.off(eventName, targetSelector, onceHandler, capture);

    if (onceHandler.dom7proxy) {
      delete onceHandler.dom7proxy;
    }
  }

  onceHandler.dom7proxy = listener;
  return dom.on(eventName, targetSelector, onceHandler, capture);
}

function trigger(...args) {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  const events = args[0].split(' ');
  const eventData = args[1];

  for (let i = 0; i < events.length; i += 1) {
    const event = events[i];

    for (let j = 0; j < this.length; j += 1) {
      const el = this[j];

      if (window.CustomEvent) {
        const evt = new window.CustomEvent(event, {
          detail: eventData,
          bubbles: true,
          cancelable: true
        });
        el.dom7EventData = args.filter((data, dataIndex) => dataIndex > 0);
        el.dispatchEvent(evt);
        el.dom7EventData = [];
        delete el.dom7EventData;
      }
    }
  }

  return this;
}

function transitionEnd(callback) {
  const dom = this;

  function fireCallBack(e) {
    if (e.target !== this) return;
    callback.call(this, e);
    dom.off('transitionend', fireCallBack);
  }

  if (callback) {
    dom.on('transitionend', fireCallBack);
  }

  return this;
}

function animationEnd(callback) {
  const dom = this;

  function fireCallBack(e) {
    if (e.target !== this) return;
    callback.call(this, e);
    dom.off('animationend', fireCallBack);
  }

  if (callback) {
    dom.on('animationend', fireCallBack);
  }

  return this;
}

function width() {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();

  if (this[0] === window) {
    return window.innerWidth;
  }

  if (this.length > 0) {
    return parseFloat(this.css('width'));
  }

  return null;
}

function outerWidth(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      const styles = this.styles();
      return this[0].offsetWidth + parseFloat(styles.getPropertyValue('margin-right')) + parseFloat(styles.getPropertyValue('margin-left'));
    }

    return this[0].offsetWidth;
  }

  return null;
}

function height() {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();

  if (this[0] === window) {
    return window.innerHeight;
  }

  if (this.length > 0) {
    return parseFloat(this.css('height'));
  }

  return null;
}

function outerHeight(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      const styles = this.styles();
      return this[0].offsetHeight + parseFloat(styles.getPropertyValue('margin-top')) + parseFloat(styles.getPropertyValue('margin-bottom'));
    }

    return this[0].offsetHeight;
  }

  return null;
}

function offset() {
  if (this.length > 0) {
    const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
    const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
    const el = this[0];
    const box = el.getBoundingClientRect();
    const body = document.body;
    const clientTop = el.clientTop || body.clientTop || 0;
    const clientLeft = el.clientLeft || body.clientLeft || 0;
    const scrollTop = el === window ? window.scrollY : el.scrollTop;
    const scrollLeft = el === window ? window.scrollX : el.scrollLeft;
    return {
      top: box.top + scrollTop - clientTop,
      left: box.left + scrollLeft - clientLeft
    };
  }

  return null;
}

function hide() {
  for (let i = 0; i < this.length; i += 1) {
    this[i].style.display = 'none';
  }

  return this;
}

function show() {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();

  for (let i = 0; i < this.length; i += 1) {
    const el = this[i];

    if (el.style.display === 'none') {
      el.style.display = '';
    }

    if (window.getComputedStyle(el, null).getPropertyValue('display') === 'none') {
      // Still not visible
      el.style.display = 'block';
    }
  }

  return this;
}

function styles() {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  if (this[0]) return window.getComputedStyle(this[0], null);
  return {};
}

function css(props, value) {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  let i;

  if (arguments.length === 1) {
    if (typeof props === 'string') {
      // .css('width')
      if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
    } else {
      // .css({ width: '100px' })
      for (i = 0; i < this.length; i += 1) {
        for (const prop in props) {
          this[i].style[prop] = props[prop];
        }
      }

      return this;
    }
  }

  if (arguments.length === 2 && typeof props === 'string') {
    // .css('width', '100px')
    for (i = 0; i < this.length; i += 1) {
      this[i].style[props] = value;
    }

    return this;
  }

  return this;
}

function each(callback) {
  if (!callback) return this;
  this.forEach((el, index) => {
    callback.apply(el, [el, index]);
  });
  return this;
}

function filter(callback) {
  const result = arrayFilter(this, callback);
  return $(result);
}

function html(html) {
  if (typeof html === 'undefined') {
    return this[0] ? this[0].innerHTML : null;
  }

  for (let i = 0; i < this.length; i += 1) {
    this[i].innerHTML = html;
  }

  return this;
}

function text(text) {
  if (typeof text === 'undefined') {
    return this[0] ? this[0].textContent.trim() : null;
  }

  for (let i = 0; i < this.length; i += 1) {
    this[i].textContent = text;
  }

  return this;
}

function is(selector) {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  const el = this[0];
  let compareWith;
  let i;
  if (!el || typeof selector === 'undefined') return false;

  if (typeof selector === 'string') {
    if (el.matches) return el.matches(selector);
    if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
    if (el.msMatchesSelector) return el.msMatchesSelector(selector);
    compareWith = $(selector);

    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) return true;
    }

    return false;
  }

  if (selector === document) {
    return el === document;
  }

  if (selector === window) {
    return el === window;
  }

  if (selector.nodeType || selector instanceof Dom7) {
    compareWith = selector.nodeType ? [selector] : selector;

    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) return true;
    }

    return false;
  }

  return false;
}

function index() {
  let child = this[0];
  let i;

  if (child) {
    i = 0; // eslint-disable-next-line

    while ((child = child.previousSibling) !== null) {
      if (child.nodeType === 1) i += 1;
    }

    return i;
  }

  return undefined;
}

function eq(index) {
  if (typeof index === 'undefined') return this;
  const length = this.length;

  if (index > length - 1) {
    return $([]);
  }

  if (index < 0) {
    const returnIndex = length + index;
    if (returnIndex < 0) return $([]);
    return $([this[returnIndex]]);
  }

  return $([this[index]]);
}

function append(...els) {
  let newChild;
  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();

  for (let k = 0; k < els.length; k += 1) {
    newChild = els[k];

    for (let i = 0; i < this.length; i += 1) {
      if (typeof newChild === 'string') {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = newChild;

        while (tempDiv.firstChild) {
          this[i].appendChild(tempDiv.firstChild);
        }
      } else if (newChild instanceof Dom7) {
        for (let j = 0; j < newChild.length; j += 1) {
          this[i].appendChild(newChild[j]);
        }
      } else {
        this[i].appendChild(newChild);
      }
    }
  }

  return this;
}

function appendTo(parent) {
  $(parent).append(this);
  return this;
}

function prepend(newChild) {
  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  let i;
  let j;

  for (i = 0; i < this.length; i += 1) {
    if (typeof newChild === 'string') {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = newChild;

      for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
        this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
      }
    } else if (newChild instanceof Dom7) {
      for (j = 0; j < newChild.length; j += 1) {
        this[i].insertBefore(newChild[j], this[i].childNodes[0]);
      }
    } else {
      this[i].insertBefore(newChild, this[i].childNodes[0]);
    }
  }

  return this;
}

function prependTo(parent) {
  $(parent).prepend(this);
  return this;
}

function insertBefore(selector) {
  const before = $(selector);

  for (let i = 0; i < this.length; i += 1) {
    if (before.length === 1) {
      before[0].parentNode.insertBefore(this[i], before[0]);
    } else if (before.length > 1) {
      for (let j = 0; j < before.length; j += 1) {
        before[j].parentNode.insertBefore(this[i].cloneNode(true), before[j]);
      }
    }
  }
}

function insertAfter(selector) {
  const after = $(selector);

  for (let i = 0; i < this.length; i += 1) {
    if (after.length === 1) {
      after[0].parentNode.insertBefore(this[i], after[0].nextSibling);
    } else if (after.length > 1) {
      for (let j = 0; j < after.length; j += 1) {
        after[j].parentNode.insertBefore(this[i].cloneNode(true), after[j].nextSibling);
      }
    }
  }
}

function next(selector) {
  if (this.length > 0) {
    if (selector) {
      if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
        return $([this[0].nextElementSibling]);
      }

      return $([]);
    }

    if (this[0].nextElementSibling) return $([this[0].nextElementSibling]);
    return $([]);
  }

  return $([]);
}

function nextAll(selector) {
  const nextEls = [];
  let el = this[0];
  if (!el) return $([]);

  while (el.nextElementSibling) {
    const next = el.nextElementSibling; // eslint-disable-line

    if (selector) {
      if ($(next).is(selector)) nextEls.push(next);
    } else nextEls.push(next);

    el = next;
  }

  return $(nextEls);
}

function prev(selector) {
  if (this.length > 0) {
    const el = this[0];

    if (selector) {
      if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
        return $([el.previousElementSibling]);
      }

      return $([]);
    }

    if (el.previousElementSibling) return $([el.previousElementSibling]);
    return $([]);
  }

  return $([]);
}

function prevAll(selector) {
  const prevEls = [];
  let el = this[0];
  if (!el) return $([]);

  while (el.previousElementSibling) {
    const prev = el.previousElementSibling; // eslint-disable-line

    if (selector) {
      if ($(prev).is(selector)) prevEls.push(prev);
    } else prevEls.push(prev);

    el = prev;
  }

  return $(prevEls);
}

function siblings(selector) {
  return this.nextAll(selector).add(this.prevAll(selector));
}

function parent(selector) {
  const parents = []; // eslint-disable-line

  for (let i = 0; i < this.length; i += 1) {
    if (this[i].parentNode !== null) {
      if (selector) {
        if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
      } else {
        parents.push(this[i].parentNode);
      }
    }
  }

  return $(parents);
}

function parents(selector) {
  const parents = []; // eslint-disable-line

  for (let i = 0; i < this.length; i += 1) {
    let parent = this[i].parentNode; // eslint-disable-line

    while (parent) {
      if (selector) {
        if ($(parent).is(selector)) parents.push(parent);
      } else {
        parents.push(parent);
      }

      parent = parent.parentNode;
    }
  }

  return $(parents);
}

function closest(selector) {
  let closest = this; // eslint-disable-line

  if (typeof selector === 'undefined') {
    return $([]);
  }

  if (!closest.is(selector)) {
    closest = closest.parents(selector).eq(0);
  }

  return closest;
}

function find(selector) {
  const foundElements = [];

  for (let i = 0; i < this.length; i += 1) {
    const found = this[i].querySelectorAll(selector);

    for (let j = 0; j < found.length; j += 1) {
      foundElements.push(found[j]);
    }
  }

  return $(foundElements);
}

function children(selector) {
  const children = []; // eslint-disable-line

  for (let i = 0; i < this.length; i += 1) {
    const childNodes = this[i].children;

    for (let j = 0; j < childNodes.length; j += 1) {
      if (!selector || $(childNodes[j]).is(selector)) {
        children.push(childNodes[j]);
      }
    }
  }

  return $(children);
}

function remove() {
  for (let i = 0; i < this.length; i += 1) {
    if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
  }

  return this;
}

function detach() {
  return this.remove();
}

function add(...els) {
  const dom = this;
  let i;
  let j;

  for (i = 0; i < els.length; i += 1) {
    const toAdd = $(els[i]);

    for (j = 0; j < toAdd.length; j += 1) {
      dom.push(toAdd[j]);
    }
  }

  return dom;
}

function empty() {
  for (let i = 0; i < this.length; i += 1) {
    const el = this[i];

    if (el.nodeType === 1) {
      for (let j = 0; j < el.childNodes.length; j += 1) {
        if (el.childNodes[j].parentNode) {
          el.childNodes[j].parentNode.removeChild(el.childNodes[j]);
        }
      }

      el.textContent = '';
    }
  }

  return this;
}

// eslint-disable-next-line

function scrollTo(...args) {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  let [left, top, duration, easing, callback] = args;

  if (args.length === 4 && typeof easing === 'function') {
    callback = easing;
    [left, top, duration, callback, easing] = args;
  }

  if (typeof easing === 'undefined') easing = 'swing';
  return this.each(function animate() {
    const el = this;
    let currentTop;
    let currentLeft;
    let maxTop;
    let maxLeft;
    let newTop;
    let newLeft;
    let scrollTop; // eslint-disable-line

    let scrollLeft; // eslint-disable-line

    let animateTop = top > 0 || top === 0;
    let animateLeft = left > 0 || left === 0;

    if (typeof easing === 'undefined') {
      easing = 'swing';
    }

    if (animateTop) {
      currentTop = el.scrollTop;

      if (!duration) {
        el.scrollTop = top;
      }
    }

    if (animateLeft) {
      currentLeft = el.scrollLeft;

      if (!duration) {
        el.scrollLeft = left;
      }
    }

    if (!duration) return;

    if (animateTop) {
      maxTop = el.scrollHeight - el.offsetHeight;
      newTop = Math.max(Math.min(top, maxTop), 0);
    }

    if (animateLeft) {
      maxLeft = el.scrollWidth - el.offsetWidth;
      newLeft = Math.max(Math.min(left, maxLeft), 0);
    }

    let startTime = null;
    if (animateTop && newTop === currentTop) animateTop = false;
    if (animateLeft && newLeft === currentLeft) animateLeft = false;

    function render(time = new Date().getTime()) {
      if (startTime === null) {
        startTime = time;
      }

      const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
      const easeProgress = easing === 'linear' ? progress : 0.5 - Math.cos(progress * Math.PI) / 2;
      let done;
      if (animateTop) scrollTop = currentTop + easeProgress * (newTop - currentTop);
      if (animateLeft) scrollLeft = currentLeft + easeProgress * (newLeft - currentLeft);

      if (animateTop && newTop > currentTop && scrollTop >= newTop) {
        el.scrollTop = newTop;
        done = true;
      }

      if (animateTop && newTop < currentTop && scrollTop <= newTop) {
        el.scrollTop = newTop;
        done = true;
      }

      if (animateLeft && newLeft > currentLeft && scrollLeft >= newLeft) {
        el.scrollLeft = newLeft;
        done = true;
      }

      if (animateLeft && newLeft < currentLeft && scrollLeft <= newLeft) {
        el.scrollLeft = newLeft;
        done = true;
      }

      if (done) {
        if (callback) callback();
        return;
      }

      if (animateTop) el.scrollTop = scrollTop;
      if (animateLeft) el.scrollLeft = scrollLeft;
      window.requestAnimationFrame(render);
    }

    window.requestAnimationFrame(render);
  });
} // scrollTop(top, duration, easing, callback) {


function scrollTop(...args) {
  let [top, duration, easing, callback] = args;

  if (args.length === 3 && typeof easing === 'function') {
    [top, duration, callback, easing] = args;
  }

  const dom = this;

  if (typeof top === 'undefined') {
    if (dom.length > 0) return dom[0].scrollTop;
    return null;
  }

  return dom.scrollTo(undefined, top, duration, easing, callback);
}

function scrollLeft(...args) {
  let [left, duration, easing, callback] = args;

  if (args.length === 3 && typeof easing === 'function') {
    [left, duration, callback, easing] = args;
  }

  const dom = this;

  if (typeof left === 'undefined') {
    if (dom.length > 0) return dom[0].scrollLeft;
    return null;
  }

  return dom.scrollTo(left, undefined, duration, easing, callback);
}

// eslint-disable-next-line

function animate(initialProps, initialParams) {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  const els = this;
  const a = {
    props: Object.assign({}, initialProps),
    params: Object.assign({
      duration: 300,
      easing: 'swing' // or 'linear'

      /* Callbacks
      begin(elements)
      complete(elements)
      progress(elements, complete, remaining, start, tweenValue)
      */

    }, initialParams),
    elements: els,
    animating: false,
    que: [],

    easingProgress(easing, progress) {
      if (easing === 'swing') {
        return 0.5 - Math.cos(progress * Math.PI) / 2;
      }

      if (typeof easing === 'function') {
        return easing(progress);
      }

      return progress;
    },

    stop() {
      if (a.frameId) {
        window.cancelAnimationFrame(a.frameId);
      }

      a.animating = false;
      a.elements.each(el => {
        const element = el;
        delete element.dom7AnimateInstance;
      });
      a.que = [];
    },

    done(complete) {
      a.animating = false;
      a.elements.each(el => {
        const element = el;
        delete element.dom7AnimateInstance;
      });
      if (complete) complete(els);

      if (a.que.length > 0) {
        const que = a.que.shift();
        a.animate(que[0], que[1]);
      }
    },

    animate(props, params) {
      if (a.animating) {
        a.que.push([props, params]);
        return a;
      }

      const elements = []; // Define & Cache Initials & Units

      a.elements.each((el, index) => {
        let initialFullValue;
        let initialValue;
        let unit;
        let finalValue;
        let finalFullValue;
        if (!el.dom7AnimateInstance) a.elements[index].dom7AnimateInstance = a;
        elements[index] = {
          container: el
        };
        Object.keys(props).forEach(prop => {
          initialFullValue = window.getComputedStyle(el, null).getPropertyValue(prop).replace(',', '.');
          initialValue = parseFloat(initialFullValue);
          unit = initialFullValue.replace(initialValue, '');
          finalValue = parseFloat(props[prop]);
          finalFullValue = props[prop] + unit;
          elements[index][prop] = {
            initialFullValue,
            initialValue,
            unit,
            finalValue,
            finalFullValue,
            currentValue: initialValue
          };
        });
      });
      let startTime = null;
      let time;
      let elementsDone = 0;
      let propsDone = 0;
      let done;
      let began = false;
      a.animating = true;

      function render() {
        time = new Date().getTime();
        let progress;
        let easeProgress; // let el;

        if (!began) {
          began = true;
          if (params.begin) params.begin(els);
        }

        if (startTime === null) {
          startTime = time;
        }

        if (params.progress) {
          // eslint-disable-next-line
          params.progress(els, Math.max(Math.min((time - startTime) / params.duration, 1), 0), startTime + params.duration - time < 0 ? 0 : startTime + params.duration - time, startTime);
        }

        elements.forEach(element => {
          const el = element;
          if (done || el.done) return;
          Object.keys(props).forEach(prop => {
            if (done || el.done) return;
            progress = Math.max(Math.min((time - startTime) / params.duration, 1), 0);
            easeProgress = a.easingProgress(params.easing, progress);
            const {
              initialValue,
              finalValue,
              unit
            } = el[prop];
            el[prop].currentValue = initialValue + easeProgress * (finalValue - initialValue);
            const currentValue = el[prop].currentValue;

            if (finalValue > initialValue && currentValue >= finalValue || finalValue < initialValue && currentValue <= finalValue) {
              el.container.style[prop] = finalValue + unit;
              propsDone += 1;

              if (propsDone === Object.keys(props).length) {
                el.done = true;
                elementsDone += 1;
              }

              if (elementsDone === elements.length) {
                done = true;
              }
            }

            if (done) {
              a.done(params.complete);
              return;
            }

            el.container.style[prop] = currentValue + unit;
          });
        });
        if (done) return; // Then call

        a.frameId = window.requestAnimationFrame(render);
      }

      a.frameId = window.requestAnimationFrame(render);
      return a;
    }

  };

  if (a.elements.length === 0) {
    return els;
  }

  let animateInstance;

  for (let i = 0; i < a.elements.length; i += 1) {
    if (a.elements[i].dom7AnimateInstance) {
      animateInstance = a.elements[i].dom7AnimateInstance;
    } else a.elements[i].dom7AnimateInstance = a;
  }

  if (!animateInstance) {
    animateInstance = a;
  }

  if (initialProps === 'stop') {
    animateInstance.stop();
  } else {
    animateInstance.animate(a.props, a.params);
  }

  return els;
}

function stop() {
  const els = this;

  for (let i = 0; i < els.length; i += 1) {
    if (els[i].dom7AnimateInstance) {
      els[i].dom7AnimateInstance.stop();
    }
  }
}

const noTrigger = 'resize scroll'.split(' ');

function shortcut(name) {
  function eventHandler(...args) {
    if (typeof args[0] === 'undefined') {
      for (let i = 0; i < this.length; i += 1) {
        if (noTrigger.indexOf(name) < 0) {
          if (name in this[i]) this[i][name]();else {
            $(this[i]).trigger(name);
          }
        }
      }

      return this;
    }

    return this.on(name, ...args);
  }

  return eventHandler;
}

const click = shortcut('click');
const blur = shortcut('blur');
const focus = shortcut('focus');
const focusin = shortcut('focusin');
const focusout = shortcut('focusout');
const keyup = shortcut('keyup');
const keydown = shortcut('keydown');
const keypress = shortcut('keypress');
const submit = shortcut('submit');
const change = shortcut('change');
const mousedown = shortcut('mousedown');
const mousemove = shortcut('mousemove');
const mouseup = shortcut('mouseup');
const mouseenter = shortcut('mouseenter');
const mouseleave = shortcut('mouseleave');
const mouseout = shortcut('mouseout');
const mouseover = shortcut('mouseover');
const touchstart = shortcut('touchstart');
const touchend = shortcut('touchend');
const touchmove = shortcut('touchmove');
const resize = shortcut('resize');
const scroll = shortcut('scroll');

/* harmony default export */ __webpack_exports__["default"] = ($);



/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/ssr-window/ssr-window.esm.js":
/*!********************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/ssr-window/ssr-window.esm.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "extend": function() { return /* binding */ extend; },
/* harmony export */   "getDocument": function() { return /* binding */ getDocument; },
/* harmony export */   "getWindow": function() { return /* binding */ getWindow; },
/* harmony export */   "ssrDocument": function() { return /* binding */ ssrDocument; },
/* harmony export */   "ssrWindow": function() { return /* binding */ ssrWindow; }
/* harmony export */ });
/**
 * SSR Window 4.0.0
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2021, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: August 25, 2021
 */
/* eslint-disable no-param-reassign */
function isObject(obj) {
    return (obj !== null &&
        typeof obj === 'object' &&
        'constructor' in obj &&
        obj.constructor === Object);
}
function extend(target = {}, src = {}) {
    Object.keys(src).forEach((key) => {
        if (typeof target[key] === 'undefined')
            target[key] = src[key];
        else if (isObject(src[key]) &&
            isObject(target[key]) &&
            Object.keys(src[key]).length > 0) {
            extend(target[key], src[key]);
        }
    });
}

const ssrDocument = {
    body: {},
    addEventListener() { },
    removeEventListener() { },
    activeElement: {
        blur() { },
        nodeName: '',
    },
    querySelector() {
        return null;
    },
    querySelectorAll() {
        return [];
    },
    getElementById() {
        return null;
    },
    createEvent() {
        return {
            initEvent() { },
        };
    },
    createElement() {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute() { },
            getElementsByTagName() {
                return [];
            },
        };
    },
    createElementNS() {
        return {};
    },
    importNode() {
        return null;
    },
    location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: '',
    },
};
function getDocument() {
    const doc = typeof document !== 'undefined' ? document : {};
    extend(doc, ssrDocument);
    return doc;
}

const ssrWindow = {
    document: ssrDocument,
    navigator: {
        userAgent: '',
    },
    location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: '',
    },
    history: {
        replaceState() { },
        pushState() { },
        go() { },
        back() { },
    },
    CustomEvent: function CustomEvent() {
        return this;
    },
    addEventListener() { },
    removeEventListener() { },
    getComputedStyle() {
        return {
            getPropertyValue() {
                return '';
            },
        };
    },
    Image() { },
    Date() { },
    screen: {},
    setTimeout() { },
    clearTimeout() { },
    matchMedia() {
        return {};
    },
    requestAnimationFrame(callback) {
        if (typeof setTimeout === 'undefined') {
            callback();
            return null;
        }
        return setTimeout(callback, 0);
    },
    cancelAnimationFrame(id) {
        if (typeof setTimeout === 'undefined') {
            return;
        }
        clearTimeout(id);
    },
};
function getWindow() {
    const win = typeof window !== 'undefined' ? window : {};
    extend(win, ssrWindow);
    return win;
}




/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/breakpoints/getBreakpoint.js":
/*!********************************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/core/breakpoints/getBreakpoint.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getBreakpoint; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "../../../AppVuejs/wbu-atomique/node_modules/ssr-window/ssr-window.esm.js");

function getBreakpoint(breakpoints, base = 'window', containerEl) {
  if (!breakpoints || base === 'container' && !containerEl) return undefined;
  let breakpoint = false;
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  const currentHeight = base === 'window' ? window.innerHeight : containerEl.clientHeight;
  const points = Object.keys(breakpoints).map(point => {
    if (typeof point === 'string' && point.indexOf('@') === 0) {
      const minRatio = parseFloat(point.substr(1));
      const value = currentHeight * minRatio;
      return {
        value,
        point
      };
    }

    return {
      value: point,
      point
    };
  });
  points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));

  for (let i = 0; i < points.length; i += 1) {
    const {
      point,
      value
    } = points[i];

    if (base === 'window') {
      if (window.matchMedia(`(min-width: ${value}px)`).matches) {
        breakpoint = point;
      }
    } else if (value <= containerEl.clientWidth) {
      breakpoint = point;
    }
  }

  return breakpoint || 'max';
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/breakpoints/index.js":
/*!************************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/core/breakpoints/index.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setBreakpoint_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setBreakpoint.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/breakpoints/setBreakpoint.js");
/* harmony import */ var _getBreakpoint_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getBreakpoint.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/breakpoints/getBreakpoint.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  setBreakpoint: _setBreakpoint_js__WEBPACK_IMPORTED_MODULE_0__.default,
  getBreakpoint: _getBreakpoint_js__WEBPACK_IMPORTED_MODULE_1__.default
});

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/breakpoints/setBreakpoint.js":
/*!********************************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/core/breakpoints/setBreakpoint.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ setBreakpoint; }
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/utils.js");


const isGridEnabled = (swiper, params) => {
  return swiper.grid && params.grid && params.grid.rows > 1;
};

function setBreakpoint() {
  const swiper = this;
  const {
    activeIndex,
    initialized,
    loopedSlides = 0,
    params,
    $el
  } = swiper;
  const breakpoints = params.breakpoints;
  if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return; // Get breakpoint for window width and update parameters

  const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
  if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
  const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
  const breakpointParams = breakpointOnlyParams || swiper.originalParams;
  const wasMultiRow = isGridEnabled(swiper, params);
  const isMultiRow = isGridEnabled(swiper, breakpointParams);
  const wasEnabled = params.enabled;

  if (wasMultiRow && !isMultiRow) {
    $el.removeClass(`${params.containerModifierClass}grid ${params.containerModifierClass}grid-column`);
    swiper.emitContainerClasses();
  } else if (!wasMultiRow && isMultiRow) {
    $el.addClass(`${params.containerModifierClass}grid`);

    if (breakpointParams.grid.fill && breakpointParams.grid.fill === 'column' || !breakpointParams.grid.fill && params.grid.fill === 'column') {
      $el.addClass(`${params.containerModifierClass}grid-column`);
    }

    swiper.emitContainerClasses();
  }

  const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
  const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);

  if (directionChanged && initialized) {
    swiper.changeDirection();
  }

  (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.extend)(swiper.params, breakpointParams);
  const isEnabled = swiper.params.enabled;
  Object.assign(swiper, {
    allowTouchMove: swiper.params.allowTouchMove,
    allowSlideNext: swiper.params.allowSlideNext,
    allowSlidePrev: swiper.params.allowSlidePrev
  });

  if (wasEnabled && !isEnabled) {
    swiper.disable();
  } else if (!wasEnabled && isEnabled) {
    swiper.enable();
  }

  swiper.currentBreakpoint = breakpoint;
  swiper.emit('_beforeBreakpoint', breakpointParams);

  if (needsReLoop && initialized) {
    swiper.loopDestroy();
    swiper.loopCreate();
    swiper.updateSlides();
    swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
  }

  swiper.emit('breakpoint', breakpointParams);
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/check-overflow/index.js":
/*!***************************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/core/check-overflow/index.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function checkOverflow() {
  const swiper = this;
  const {
    isLocked: wasLocked,
    params
  } = swiper;
  const {
    slidesOffsetBefore
  } = params;

  if (slidesOffsetBefore) {
    const lastSlideIndex = swiper.slides.length - 1;
    const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
    swiper.isLocked = swiper.size > lastSlideRightEdge;
  } else {
    swiper.isLocked = swiper.snapGrid.length === 1;
  }

  if (params.allowSlideNext === true) {
    swiper.allowSlideNext = !swiper.isLocked;
  }

  if (params.allowSlidePrev === true) {
    swiper.allowSlidePrev = !swiper.isLocked;
  }

  if (wasLocked && wasLocked !== swiper.isLocked) {
    swiper.isEnd = false;
  }

  if (wasLocked !== swiper.isLocked) {
    swiper.emit(swiper.isLocked ? 'lock' : 'unlock');
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  checkOverflow
});

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/classes/addClasses.js":
/*!*************************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/core/classes/addClasses.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ addClasses; }
/* harmony export */ });
function prepareClasses(entries, prefix) {
  const resultClasses = [];
  entries.forEach(item => {
    if (typeof item === 'object') {
      Object.keys(item).forEach(classNames => {
        if (item[classNames]) {
          resultClasses.push(prefix + classNames);
        }
      });
    } else if (typeof item === 'string') {
      resultClasses.push(prefix + item);
    }
  });
  return resultClasses;
}

function addClasses() {
  const swiper = this;
  const {
    classNames,
    params,
    rtl,
    $el,
    device,
    support
  } = swiper; // prettier-ignore

  const suffixes = prepareClasses(['initialized', params.direction, {
    'pointer-events': !support.touch
  }, {
    'free-mode': swiper.params.freeMode && params.freeMode.enabled
  }, {
    'autoheight': params.autoHeight
  }, {
    'rtl': rtl
  }, {
    'grid': params.grid && params.grid.rows > 1
  }, {
    'grid-column': params.grid && params.grid.rows > 1 && params.grid.fill === 'column'
  }, {
    'android': device.android
  }, {
    'ios': device.ios
  }, {
    'css-mode': params.cssMode
  }, {
    'centered': params.cssMode && params.centeredSlides
  }], params.containerModifierClass);
  classNames.push(...suffixes);
  $el.addClass([...classNames].join(' '));
  swiper.emitContainerClasses();
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/classes/index.js":
/*!********************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/core/classes/index.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addClasses_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addClasses.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/classes/addClasses.js");
/* harmony import */ var _removeClasses_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./removeClasses.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/classes/removeClasses.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  addClasses: _addClasses_js__WEBPACK_IMPORTED_MODULE_0__.default,
  removeClasses: _removeClasses_js__WEBPACK_IMPORTED_MODULE_1__.default
});

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/classes/removeClasses.js":
/*!****************************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/core/classes/removeClasses.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ removeClasses; }
/* harmony export */ });
function removeClasses() {
  const swiper = this;
  const {
    $el,
    classNames
  } = swiper;
  $el.removeClass(classNames.join(' '));
  swiper.emitContainerClasses();
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/core.js":
/*!***********************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/core/core.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "../../../AppVuejs/wbu-atomique/node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/dom.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/dom.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/utils.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/utils.js");
/* harmony import */ var _shared_get_support_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/get-support.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/get-support.js");
/* harmony import */ var _shared_get_device_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/get-device.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/get-device.js");
/* harmony import */ var _shared_get_browser_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/get-browser.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/get-browser.js");
/* harmony import */ var _modules_resize_resize_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/resize/resize.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/modules/resize/resize.js");
/* harmony import */ var _modules_observer_observer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/observer/observer.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/modules/observer/observer.js");
/* harmony import */ var _events_emitter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./events-emitter.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/events-emitter.js");
/* harmony import */ var _update_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./update/index.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/update/index.js");
/* harmony import */ var _translate_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./translate/index.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/translate/index.js");
/* harmony import */ var _transition_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./transition/index.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/transition/index.js");
/* harmony import */ var _slide_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./slide/index.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/slide/index.js");
/* harmony import */ var _loop_index_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./loop/index.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/loop/index.js");
/* harmony import */ var _grab_cursor_index_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./grab-cursor/index.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/grab-cursor/index.js");
/* harmony import */ var _events_index_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./events/index.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/events/index.js");
/* harmony import */ var _breakpoints_index_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./breakpoints/index.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/breakpoints/index.js");
/* harmony import */ var _classes_index_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./classes/index.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/classes/index.js");
/* harmony import */ var _images_index_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./images/index.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/images/index.js");
/* harmony import */ var _check_overflow_index_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./check-overflow/index.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/check-overflow/index.js");
/* harmony import */ var _defaults_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./defaults.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/defaults.js");
/* harmony import */ var _moduleExtendParams_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./moduleExtendParams.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/moduleExtendParams.js");
/* eslint no-param-reassign: "off" */






















const prototypes = {
  eventsEmitter: _events_emitter_js__WEBPACK_IMPORTED_MODULE_8__.default,
  update: _update_index_js__WEBPACK_IMPORTED_MODULE_9__.default,
  translate: _translate_index_js__WEBPACK_IMPORTED_MODULE_10__.default,
  transition: _transition_index_js__WEBPACK_IMPORTED_MODULE_11__.default,
  slide: _slide_index_js__WEBPACK_IMPORTED_MODULE_12__.default,
  loop: _loop_index_js__WEBPACK_IMPORTED_MODULE_13__.default,
  grabCursor: _grab_cursor_index_js__WEBPACK_IMPORTED_MODULE_14__.default,
  events: _events_index_js__WEBPACK_IMPORTED_MODULE_15__.default,
  breakpoints: _breakpoints_index_js__WEBPACK_IMPORTED_MODULE_16__.default,
  checkOverflow: _check_overflow_index_js__WEBPACK_IMPORTED_MODULE_19__.default,
  classes: _classes_index_js__WEBPACK_IMPORTED_MODULE_17__.default,
  images: _images_index_js__WEBPACK_IMPORTED_MODULE_18__.default
};
const extendedDefaults = {};

class Swiper {
  constructor(...args) {
    let el;
    let params;

    if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') {
      params = args[0];
    } else {
      [el, params] = args;
    }

    if (!params) params = {};
    params = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.extend)({}, params);
    if (el && !params.el) params.el = el;

    if (params.el && (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__.default)(params.el).length > 1) {
      const swipers = [];
      (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__.default)(params.el).each(containerEl => {
        const newParams = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.extend)({}, params, {
          el: containerEl
        });
        swipers.push(new Swiper(newParams));
      });
      return swipers;
    } // Swiper Instance


    const swiper = this;
    swiper.__swiper__ = true;
    swiper.support = (0,_shared_get_support_js__WEBPACK_IMPORTED_MODULE_3__.getSupport)();
    swiper.device = (0,_shared_get_device_js__WEBPACK_IMPORTED_MODULE_4__.getDevice)({
      userAgent: params.userAgent
    });
    swiper.browser = (0,_shared_get_browser_js__WEBPACK_IMPORTED_MODULE_5__.getBrowser)();
    swiper.eventsListeners = {};
    swiper.eventsAnyListeners = [];
    swiper.modules = [...swiper.__modules__];

    if (params.modules && Array.isArray(params.modules)) {
      swiper.modules.push(...params.modules);
    }

    const allModulesParams = {};
    swiper.modules.forEach(mod => {
      mod({
        swiper,
        extendParams: (0,_moduleExtendParams_js__WEBPACK_IMPORTED_MODULE_21__.default)(params, allModulesParams),
        on: swiper.on.bind(swiper),
        once: swiper.once.bind(swiper),
        off: swiper.off.bind(swiper),
        emit: swiper.emit.bind(swiper)
      });
    }); // Extend defaults with modules params

    const swiperParams = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.extend)({}, _defaults_js__WEBPACK_IMPORTED_MODULE_20__.default, allModulesParams); // Extend defaults with passed params

    swiper.params = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.extend)({}, swiperParams, extendedDefaults, params);
    swiper.originalParams = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.extend)({}, swiper.params);
    swiper.passedParams = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.extend)({}, params); // add event listeners

    if (swiper.params && swiper.params.on) {
      Object.keys(swiper.params.on).forEach(eventName => {
        swiper.on(eventName, swiper.params.on[eventName]);
      });
    }

    if (swiper.params && swiper.params.onAny) {
      swiper.onAny(swiper.params.onAny);
    } // Save Dom lib


    swiper.$ = _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__.default; // Extend Swiper

    Object.assign(swiper, {
      enabled: swiper.params.enabled,
      el,
      // Classes
      classNames: [],
      // Slides
      slides: (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__.default)(),
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],

      // isDirection
      isHorizontal() {
        return swiper.params.direction === 'horizontal';
      },

      isVertical() {
        return swiper.params.direction === 'vertical';
      },

      // Indexes
      activeIndex: 0,
      realIndex: 0,
      //
      isBeginning: true,
      isEnd: false,
      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: false,
      // Locks
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,
      // Touch Events
      touchEvents: function touchEvents() {
        const touch = ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
        const desktop = ['pointerdown', 'pointermove', 'pointerup'];
        swiper.touchEventsTouch = {
          start: touch[0],
          move: touch[1],
          end: touch[2],
          cancel: touch[3]
        };
        swiper.touchEventsDesktop = {
          start: desktop[0],
          move: desktop[1],
          end: desktop[2]
        };
        return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
      }(),
      touchEventsData: {
        isTouched: undefined,
        isMoved: undefined,
        allowTouchCallbacks: undefined,
        touchStartTime: undefined,
        isScrolling: undefined,
        currentTranslate: undefined,
        startTranslate: undefined,
        allowThresholdMove: undefined,
        // Form elements to match
        focusableElements: swiper.params.focusableElements,
        // Last click time
        lastClickTime: (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.now)(),
        clickTimeout: undefined,
        // Velocities
        velocities: [],
        allowMomentumBounce: undefined,
        isTouchEvent: undefined,
        startMoving: undefined
      },
      // Clicks
      allowClick: true,
      // Touches
      allowTouchMove: swiper.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      // Images
      imagesToLoad: [],
      imagesLoaded: 0
    });
    swiper.emit('_swiper'); // Init

    if (swiper.params.init) {
      swiper.init();
    } // Return app instance


    return swiper;
  }

  enable() {
    const swiper = this;
    if (swiper.enabled) return;
    swiper.enabled = true;

    if (swiper.params.grabCursor) {
      swiper.setGrabCursor();
    }

    swiper.emit('enable');
  }

  disable() {
    const swiper = this;
    if (!swiper.enabled) return;
    swiper.enabled = false;

    if (swiper.params.grabCursor) {
      swiper.unsetGrabCursor();
    }

    swiper.emit('disable');
  }

  setProgress(progress, speed) {
    const swiper = this;
    progress = Math.min(Math.max(progress, 0), 1);
    const min = swiper.minTranslate();
    const max = swiper.maxTranslate();
    const current = (max - min) * progress + min;
    swiper.translateTo(current, typeof speed === 'undefined' ? 0 : speed);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }

  emitContainerClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    const cls = swiper.el.className.split(' ').filter(className => {
      return className.indexOf('swiper') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
    });
    swiper.emit('_containerClasses', cls.join(' '));
  }

  getSlideClasses(slideEl) {
    const swiper = this;
    return slideEl.className.split(' ').filter(className => {
      return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
    }).join(' ');
  }

  emitSlidesClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    const updates = [];
    swiper.slides.each(slideEl => {
      const classNames = swiper.getSlideClasses(slideEl);
      updates.push({
        slideEl,
        classNames
      });
      swiper.emit('_slideClass', slideEl, classNames);
    });
    swiper.emit('_slideClasses', updates);
  }

  slidesPerViewDynamic(view = 'current', exact = false) {
    const swiper = this;
    const {
      params,
      slides,
      slidesGrid,
      slidesSizesGrid,
      size: swiperSize,
      activeIndex
    } = swiper;
    let spv = 1;

    if (params.centeredSlides) {
      let slideSize = slides[activeIndex].swiperSlideSize;
      let breakLoop;

      for (let i = activeIndex + 1; i < slides.length; i += 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }

      for (let i = activeIndex - 1; i >= 0; i -= 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
    } else {
      // eslint-disable-next-line
      if (view === 'current') {
        for (let i = activeIndex + 1; i < slides.length; i += 1) {
          const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;

          if (slideInView) {
            spv += 1;
          }
        }
      } else {
        // previous
        for (let i = activeIndex - 1; i >= 0; i -= 1) {
          const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;

          if (slideInView) {
            spv += 1;
          }
        }
      }
    }

    return spv;
  }

  update() {
    const swiper = this;
    if (!swiper || swiper.destroyed) return;
    const {
      snapGrid,
      params
    } = swiper; // Breakpoints

    if (params.breakpoints) {
      swiper.setBreakpoint();
    }

    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateProgress();
    swiper.updateSlidesClasses();

    function setTranslate() {
      const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
      const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
      swiper.setTranslate(newTranslate);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }

    let translated;

    if (swiper.params.freeMode && swiper.params.freeMode.enabled) {
      setTranslate();

      if (swiper.params.autoHeight) {
        swiper.updateAutoHeight();
      }
    } else {
      if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
        translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
      } else {
        translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
      }

      if (!translated) {
        setTranslate();
      }
    }

    if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }

    swiper.emit('update');
  }

  changeDirection(newDirection, needUpdate = true) {
    const swiper = this;
    const currentDirection = swiper.params.direction;

    if (!newDirection) {
      // eslint-disable-next-line
      newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
    }

    if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
      return swiper;
    }

    swiper.$el.removeClass(`${swiper.params.containerModifierClass}${currentDirection}`).addClass(`${swiper.params.containerModifierClass}${newDirection}`);
    swiper.emitContainerClasses();
    swiper.params.direction = newDirection;
    swiper.slides.each(slideEl => {
      if (newDirection === 'vertical') {
        slideEl.style.width = '';
      } else {
        slideEl.style.height = '';
      }
    });
    swiper.emit('changeDirection');
    if (needUpdate) swiper.update();
    return swiper;
  }

  mount(el) {
    const swiper = this;
    if (swiper.mounted) return true; // Find el

    const $el = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__.default)(el || swiper.params.el);
    el = $el[0];

    if (!el) {
      return false;
    }

    el.swiper = swiper;

    const getWrapperSelector = () => {
      return `.${(swiper.params.wrapperClass || '').trim().split(' ').join('.')}`;
    };

    const getWrapper = () => {
      if (el && el.shadowRoot && el.shadowRoot.querySelector) {
        const res = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__.default)(el.shadowRoot.querySelector(getWrapperSelector())); // Children needs to return slot items

        res.children = options => $el.children(options);

        return res;
      }

      return $el.children(getWrapperSelector());
    }; // Find Wrapper


    let $wrapperEl = getWrapper();

    if ($wrapperEl.length === 0 && swiper.params.createElements) {
      const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
      const wrapper = document.createElement('div');
      $wrapperEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__.default)(wrapper);
      wrapper.className = swiper.params.wrapperClass;
      $el.append(wrapper);
      $el.children(`.${swiper.params.slideClass}`).each(slideEl => {
        $wrapperEl.append(slideEl);
      });
    }

    Object.assign(swiper, {
      $el,
      el,
      $wrapperEl,
      wrapperEl: $wrapperEl[0],
      mounted: true,
      // RTL
      rtl: el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl',
      rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
      wrongRTL: $wrapperEl.css('display') === '-webkit-box'
    });
    return true;
  }

  init(el) {
    const swiper = this;
    if (swiper.initialized) return swiper;
    const mounted = swiper.mount(el);
    if (mounted === false) return swiper;
    swiper.emit('beforeInit'); // Set breakpoint

    if (swiper.params.breakpoints) {
      swiper.setBreakpoint();
    } // Add Classes


    swiper.addClasses(); // Create loop

    if (swiper.params.loop) {
      swiper.loopCreate();
    } // Update size


    swiper.updateSize(); // Update slides

    swiper.updateSlides();

    if (swiper.params.watchOverflow) {
      swiper.checkOverflow();
    } // Set Grab Cursor


    if (swiper.params.grabCursor && swiper.enabled) {
      swiper.setGrabCursor();
    }

    if (swiper.params.preloadImages) {
      swiper.preloadImages();
    } // Slide To Initial Slide


    if (swiper.params.loop) {
      swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit, false, true);
    } else {
      swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
    } // Attach events


    swiper.attachEvents(); // Init Flag

    swiper.initialized = true; // Emit

    swiper.emit('init');
    swiper.emit('afterInit');
    return swiper;
  }

  destroy(deleteInstance = true, cleanStyles = true) {
    const swiper = this;
    const {
      params,
      $el,
      $wrapperEl,
      slides
    } = swiper;

    if (typeof swiper.params === 'undefined' || swiper.destroyed) {
      return null;
    }

    swiper.emit('beforeDestroy'); // Init Flag

    swiper.initialized = false; // Detach events

    swiper.detachEvents(); // Destroy loop

    if (params.loop) {
      swiper.loopDestroy();
    } // Cleanup styles


    if (cleanStyles) {
      swiper.removeClasses();
      $el.removeAttr('style');
      $wrapperEl.removeAttr('style');

      if (slides && slides.length) {
        slides.removeClass([params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-slide-index');
      }
    }

    swiper.emit('destroy'); // Detach emitter events

    Object.keys(swiper.eventsListeners).forEach(eventName => {
      swiper.off(eventName);
    });

    if (deleteInstance !== false) {
      swiper.$el[0].swiper = null;
      (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.deleteProps)(swiper);
    }

    swiper.destroyed = true;
    return null;
  }

  static extendDefaults(newDefaults) {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.extend)(extendedDefaults, newDefaults);
  }

  static get extendedDefaults() {
    return extendedDefaults;
  }

  static get defaults() {
    return _defaults_js__WEBPACK_IMPORTED_MODULE_20__.default;
  }

  static installModule(mod) {
    if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
    const modules = Swiper.prototype.__modules__;

    if (typeof mod === 'function' && modules.indexOf(mod) < 0) {
      modules.push(mod);
    }
  }

  static use(module) {
    if (Array.isArray(module)) {
      module.forEach(m => Swiper.installModule(m));
      return Swiper;
    }

    Swiper.installModule(module);
    return Swiper;
  }

}

Object.keys(prototypes).forEach(prototypeGroup => {
  Object.keys(prototypes[prototypeGroup]).forEach(protoMethod => {
    Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
  });
});
Swiper.use([_modules_resize_resize_js__WEBPACK_IMPORTED_MODULE_6__.default, _modules_observer_observer_js__WEBPACK_IMPORTED_MODULE_7__.default]);
/* harmony default export */ __webpack_exports__["default"] = (Swiper);

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/defaults.js":
/*!***************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/core/defaults.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  init: true,
  direction: 'horizontal',
  touchEventsTarget: 'wrapper',
  initialSlide: 0,
  speed: 300,
  cssMode: false,
  updateOnWindowResize: true,
  resizeObserver: true,
  nested: false,
  createElements: false,
  enabled: true,
  focusableElements: 'input, select, option, textarea, button, video, label',
  // Overrides
  width: null,
  height: null,
  //
  preventInteractionOnTransition: false,
  // ssr
  userAgent: null,
  url: null,
  // To support iOS's swipe-to-go-back gesture (when being used in-app).
  edgeSwipeDetection: false,
  edgeSwipeThreshold: 20,
  // Autoheight
  autoHeight: false,
  // Set wrapper width
  setWrapperSize: false,
  // Virtual Translate
  virtualTranslate: false,
  // Effects
  effect: 'slide',
  // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
  // Breakpoints
  breakpoints: undefined,
  breakpointsBase: 'window',
  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  slidesPerGroupAuto: false,
  centeredSlides: false,
  centeredSlidesBounds: false,
  slidesOffsetBefore: 0,
  // in px
  slidesOffsetAfter: 0,
  // in px
  normalizeSlideIndex: true,
  centerInsufficientSlides: false,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: true,
  // Round length
  roundLengths: false,
  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  shortSwipes: true,
  longSwipes: true,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: true,
  allowTouchMove: true,
  threshold: 0,
  touchMoveStopPropagation: false,
  touchStartPreventDefault: true,
  touchStartForcePreventDefault: false,
  touchReleaseOnEdges: false,
  // Unique Navigation Elements
  uniqueNavElements: true,
  // Resistance
  resistance: true,
  resistanceRatio: 0.85,
  // Progress
  watchSlidesProgress: false,
  // Cursor
  grabCursor: false,
  // Clicks
  preventClicks: true,
  preventClicksPropagation: true,
  slideToClickedSlide: false,
  // Images
  preloadImages: true,
  updateOnImagesReady: true,
  // loop
  loop: false,
  loopAdditionalSlides: 0,
  loopedSlides: null,
  loopFillGroupWithBlank: false,
  loopPreventsSlide: true,
  // Swiping/no swiping
  allowSlidePrev: true,
  allowSlideNext: true,
  swipeHandler: null,
  // '.swipe-handler',
  noSwiping: true,
  noSwipingClass: 'swiper-no-swiping',
  noSwipingSelector: null,
  // Passive Listeners
  passiveListeners: true,
  // NS
  containerModifierClass: 'swiper-',
  // NEW
  slideClass: 'swiper-slide',
  slideBlankClass: 'swiper-slide-invisible-blank',
  slideActiveClass: 'swiper-slide-active',
  slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
  slideVisibleClass: 'swiper-slide-visible',
  slideDuplicateClass: 'swiper-slide-duplicate',
  slideNextClass: 'swiper-slide-next',
  slideDuplicateNextClass: 'swiper-slide-duplicate-next',
  slidePrevClass: 'swiper-slide-prev',
  slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
  wrapperClass: 'swiper-wrapper',
  // Callbacks
  runCallbacksOnInit: true,
  // Internals
  _emitClasses: false
});

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/events-emitter.js":
/*!*********************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/core/events-emitter.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* eslint-disable no-underscore-dangle */
/* harmony default export */ __webpack_exports__["default"] = ({
  on(events, handler, priority) {
    const self = this;
    if (typeof handler !== 'function') return self;
    const method = priority ? 'unshift' : 'push';
    events.split(' ').forEach(event => {
      if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
      self.eventsListeners[event][method](handler);
    });
    return self;
  },

  once(events, handler, priority) {
    const self = this;
    if (typeof handler !== 'function') return self;

    function onceHandler(...args) {
      self.off(events, onceHandler);

      if (onceHandler.__emitterProxy) {
        delete onceHandler.__emitterProxy;
      }

      handler.apply(self, args);
    }

    onceHandler.__emitterProxy = handler;
    return self.on(events, onceHandler, priority);
  },

  onAny(handler, priority) {
    const self = this;
    if (typeof handler !== 'function') return self;
    const method = priority ? 'unshift' : 'push';

    if (self.eventsAnyListeners.indexOf(handler) < 0) {
      self.eventsAnyListeners[method](handler);
    }

    return self;
  },

  offAny(handler) {
    const self = this;
    if (!self.eventsAnyListeners) return self;
    const index = self.eventsAnyListeners.indexOf(handler);

    if (index >= 0) {
      self.eventsAnyListeners.splice(index, 1);
    }

    return self;
  },

  off(events, handler) {
    const self = this;
    if (!self.eventsListeners) return self;
    events.split(' ').forEach(event => {
      if (typeof handler === 'undefined') {
        self.eventsListeners[event] = [];
      } else if (self.eventsListeners[event]) {
        self.eventsListeners[event].forEach((eventHandler, index) => {
          if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
            self.eventsListeners[event].splice(index, 1);
          }
        });
      }
    });
    return self;
  },

  emit(...args) {
    const self = this;
    if (!self.eventsListeners) return self;
    let events;
    let data;
    let context;

    if (typeof args[0] === 'string' || Array.isArray(args[0])) {
      events = args[0];
      data = args.slice(1, args.length);
      context = self;
    } else {
      events = args[0].events;
      data = args[0].data;
      context = args[0].context || self;
    }

    data.unshift(context);
    const eventsArray = Array.isArray(events) ? events : events.split(' ');
    eventsArray.forEach(event => {
      if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
        self.eventsAnyListeners.forEach(eventHandler => {
          eventHandler.apply(context, [event, ...data]);
        });
      }

      if (self.eventsListeners && self.eventsListeners[event]) {
        self.eventsListeners[event].forEach(eventHandler => {
          eventHandler.apply(context, data);
        });
      }
    });
    return self;
  }

});

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/events/index.js":
/*!*******************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/core/events/index.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "../../../AppVuejs/wbu-atomique/node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _onTouchStart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onTouchStart.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/events/onTouchStart.js");
/* harmony import */ var _onTouchMove_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./onTouchMove.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/events/onTouchMove.js");
/* harmony import */ var _onTouchEnd_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./onTouchEnd.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/events/onTouchEnd.js");
/* harmony import */ var _onResize_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./onResize.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/events/onResize.js");
/* harmony import */ var _onClick_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./onClick.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/events/onClick.js");
/* harmony import */ var _onScroll_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./onScroll.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/events/onScroll.js");







let dummyEventAttached = false;

function dummyEventListener() {}

const events = (swiper, method) => {
  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  const {
    params,
    touchEvents,
    el,
    wrapperEl,
    device,
    support
  } = swiper;
  const capture = !!params.nested;
  const domMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
  const swiperMethod = method; // Touch Events

  if (!support.touch) {
    el[domMethod](touchEvents.start, swiper.onTouchStart, false);
    document[domMethod](touchEvents.move, swiper.onTouchMove, capture);
    document[domMethod](touchEvents.end, swiper.onTouchEnd, false);
  } else {
    const passiveListener = touchEvents.start === 'touchstart' && support.passiveListener && params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    el[domMethod](touchEvents.start, swiper.onTouchStart, passiveListener);
    el[domMethod](touchEvents.move, swiper.onTouchMove, support.passiveListener ? {
      passive: false,
      capture
    } : capture);
    el[domMethod](touchEvents.end, swiper.onTouchEnd, passiveListener);

    if (touchEvents.cancel) {
      el[domMethod](touchEvents.cancel, swiper.onTouchEnd, passiveListener);
    }
  } // Prevent Links Clicks


  if (params.preventClicks || params.preventClicksPropagation) {
    el[domMethod]('click', swiper.onClick, true);
  }

  if (params.cssMode) {
    wrapperEl[domMethod]('scroll', swiper.onScroll);
  } // Resize handler


  if (params.updateOnWindowResize) {
    swiper[swiperMethod](device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', _onResize_js__WEBPACK_IMPORTED_MODULE_4__.default, true);
  } else {
    swiper[swiperMethod]('observerUpdate', _onResize_js__WEBPACK_IMPORTED_MODULE_4__.default, true);
  }
};

function attachEvents() {
  const swiper = this;
  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  const {
    params,
    support
  } = swiper;
  swiper.onTouchStart = _onTouchStart_js__WEBPACK_IMPORTED_MODULE_1__.default.bind(swiper);
  swiper.onTouchMove = _onTouchMove_js__WEBPACK_IMPORTED_MODULE_2__.default.bind(swiper);
  swiper.onTouchEnd = _onTouchEnd_js__WEBPACK_IMPORTED_MODULE_3__.default.bind(swiper);

  if (params.cssMode) {
    swiper.onScroll = _onScroll_js__WEBPACK_IMPORTED_MODULE_6__.default.bind(swiper);
  }

  swiper.onClick = _onClick_js__WEBPACK_IMPORTED_MODULE_5__.default.bind(swiper);

  if (support.touch && !dummyEventAttached) {
    document.addEventListener('touchstart', dummyEventListener);
    dummyEventAttached = true;
  }

  events(swiper, 'on');
}

function detachEvents() {
  const swiper = this;
  events(swiper, 'off');
}

/* harmony default export */ __webpack_exports__["default"] = ({
  attachEvents,
  detachEvents
});

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/events/onClick.js":
/*!*********************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/core/events/onClick.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ onClick; }
/* harmony export */ });
function onClick(e) {
  const swiper = this;
  if (!swiper.enabled) return;

  if (!swiper.allowClick) {
    if (swiper.params.preventClicks) e.preventDefault();

    if (swiper.params.preventClicksPropagation && swiper.animating) {
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/events/onResize.js":
/*!**********************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/core/events/onResize.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ onResize; }
/* harmony export */ });
function onResize() {
  const swiper = this;
  const {
    params,
    el
  } = swiper;
  if (el && el.offsetWidth === 0) return; // Breakpoints

  if (params.breakpoints) {
    swiper.setBreakpoint();
  } // Save locks


  const {
    allowSlideNext,
    allowSlidePrev,
    snapGrid
  } = swiper; // Disable locks on resize

  swiper.allowSlideNext = true;
  swiper.allowSlidePrev = true;
  swiper.updateSize();
  swiper.updateSlides();
  swiper.updateSlidesClasses();

  if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) {
    swiper.slideTo(swiper.slides.length - 1, 0, false, true);
  } else {
    swiper.slideTo(swiper.activeIndex, 0, false, true);
  }

  if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
    swiper.autoplay.run();
  } // Return locks after resize


  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;

  if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
    swiper.checkOverflow();
  }
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/events/onScroll.js":
/*!**********************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/core/events/onScroll.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ onScroll; }
/* harmony export */ });
function onScroll() {
  const swiper = this;
  const {
    wrapperEl,
    rtlTranslate,
    enabled
  } = swiper;
  if (!enabled) return;
  swiper.previousTranslate = swiper.translate;

  if (swiper.isHorizontal()) {
    swiper.translate = -wrapperEl.scrollLeft;
  } else {
    swiper.translate = -wrapperEl.scrollTop;
  } // eslint-disable-next-line


  if (swiper.translate === -0) swiper.translate = 0;
  swiper.updateActiveIndex();
  swiper.updateSlidesClasses();
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
  }

  if (newProgress !== swiper.progress) {
    swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
  }

  swiper.emit('setTranslate', swiper.translate, false);
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/events/onTouchEnd.js":
/*!************************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/core/events/onTouchEnd.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ onTouchEnd; }
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/utils.js");

function onTouchEnd(event) {
  const swiper = this;
  const data = swiper.touchEventsData;
  const {
    params,
    touches,
    rtlTranslate: rtl,
    slidesGrid,
    enabled
  } = swiper;
  if (!enabled) return;
  let e = event;
  if (e.originalEvent) e = e.originalEvent;

  if (data.allowTouchCallbacks) {
    swiper.emit('touchEnd', e);
  }

  data.allowTouchCallbacks = false;

  if (!data.isTouched) {
    if (data.isMoved && params.grabCursor) {
      swiper.setGrabCursor(false);
    }

    data.isMoved = false;
    data.startMoving = false;
    return;
  } // Return Grab Cursor


  if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
    swiper.setGrabCursor(false);
  } // Time diff


  const touchEndTime = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.now)();
  const timeDiff = touchEndTime - data.touchStartTime; // Tap, doubleTap, Click

  if (swiper.allowClick) {
    swiper.updateClickedSlide(e);
    swiper.emit('tap click', e);

    if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
      swiper.emit('doubleTap doubleClick', e);
    }
  }

  data.lastClickTime = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.now)();
  (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => {
    if (!swiper.destroyed) swiper.allowClick = true;
  });

  if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    return;
  }

  data.isTouched = false;
  data.isMoved = false;
  data.startMoving = false;
  let currentPos;

  if (params.followFinger) {
    currentPos = rtl ? swiper.translate : -swiper.translate;
  } else {
    currentPos = -data.currentTranslate;
  }

  if (params.cssMode) {
    return;
  }

  if (swiper.params.freeMode && params.freeMode.enabled) {
    swiper.freeMode.onTouchEnd({
      currentPos
    });
    return;
  } // Find current slide


  let stopIndex = 0;
  let groupSize = swiper.slidesSizesGrid[0];

  for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
    const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

    if (typeof slidesGrid[i + increment] !== 'undefined') {
      if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
        stopIndex = i;
        groupSize = slidesGrid[i + increment] - slidesGrid[i];
      }
    } else if (currentPos >= slidesGrid[i]) {
      stopIndex = i;
      groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
    }
  } // Find current slide size


  const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
  const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

  if (timeDiff > params.longSwipesMs) {
    // Long touches
    if (!params.longSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }

    if (swiper.swipeDirection === 'next') {
      if (ratio >= params.longSwipesRatio) swiper.slideTo(stopIndex + increment);else swiper.slideTo(stopIndex);
    }

    if (swiper.swipeDirection === 'prev') {
      if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment);else swiper.slideTo(stopIndex);
    }
  } else {
    // Short swipes
    if (!params.shortSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }

    const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);

    if (!isNavButtonTarget) {
      if (swiper.swipeDirection === 'next') {
        swiper.slideTo(stopIndex + increment);
      }

      if (swiper.swipeDirection === 'prev') {
        swiper.slideTo(stopIndex);
      }
    } else if (e.target === swiper.navigation.nextEl) {
      swiper.slideTo(stopIndex + increment);
    } else {
      swiper.slideTo(stopIndex);
    }
  }
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/events/onTouchMove.js":
/*!*************************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/core/events/onTouchMove.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ onTouchMove; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "../../../AppVuejs/wbu-atomique/node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/dom.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/utils.js");



function onTouchMove(event) {
  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  const swiper = this;
  const data = swiper.touchEventsData;
  const {
    params,
    touches,
    rtlTranslate: rtl,
    enabled
  } = swiper;
  if (!enabled) return;
  let e = event;
  if (e.originalEvent) e = e.originalEvent;

  if (!data.isTouched) {
    if (data.startMoving && data.isScrolling) {
      swiper.emit('touchMoveOpposite', e);
    }

    return;
  }

  if (data.isTouchEvent && e.type !== 'touchmove') return;
  const targetTouch = e.type === 'touchmove' && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
  const pageX = e.type === 'touchmove' ? targetTouch.pageX : e.pageX;
  const pageY = e.type === 'touchmove' ? targetTouch.pageY : e.pageY;

  if (e.preventedByNestedSwiper) {
    touches.startX = pageX;
    touches.startY = pageY;
    return;
  }

  if (!swiper.allowTouchMove) {
    // isMoved = true;
    swiper.allowClick = false;

    if (data.isTouched) {
      Object.assign(touches, {
        startX: pageX,
        startY: pageY,
        currentX: pageX,
        currentY: pageY
      });
      data.touchStartTime = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.now)();
    }

    return;
  }

  if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
    if (swiper.isVertical()) {
      // Vertical
      if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
        data.isTouched = false;
        data.isMoved = false;
        return;
      }
    } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
      return;
    }
  }

  if (data.isTouchEvent && document.activeElement) {
    if (e.target === document.activeElement && (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__.default)(e.target).is(data.focusableElements)) {
      data.isMoved = true;
      swiper.allowClick = false;
      return;
    }
  }

  if (data.allowTouchCallbacks) {
    swiper.emit('touchMove', e);
  }

  if (e.targetTouches && e.targetTouches.length > 1) return;
  touches.currentX = pageX;
  touches.currentY = pageY;
  const diffX = touches.currentX - touches.startX;
  const diffY = touches.currentY - touches.startY;
  if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;

  if (typeof data.isScrolling === 'undefined') {
    let touchAngle;

    if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
      data.isScrolling = false;
    } else {
      // eslint-disable-next-line
      if (diffX * diffX + diffY * diffY >= 25) {
        touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
        data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
      }
    }
  }

  if (data.isScrolling) {
    swiper.emit('touchMoveOpposite', e);
  }

  if (typeof data.startMoving === 'undefined') {
    if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
      data.startMoving = true;
    }
  }

  if (data.isScrolling) {
    data.isTouched = false;
    return;
  }

  if (!data.startMoving) {
    return;
  }

  swiper.allowClick = false;

  if (!params.cssMode && e.cancelable) {
    e.preventDefault();
  }

  if (params.touchMoveStopPropagation && !params.nested) {
    e.stopPropagation();
  }

  if (!data.isMoved) {
    if (params.loop && !params.cssMode) {
      swiper.loopFix();
    }

    data.startTranslate = swiper.getTranslate();
    swiper.setTransition(0);

    if (swiper.animating) {
      swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
    }

    data.allowMomentumBounce = false; // Grab Cursor

    if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(true);
    }

    swiper.emit('sliderFirstMove', e);
  }

  swiper.emit('sliderMove', e);
  data.isMoved = true;
  let diff = swiper.isHorizontal() ? diffX : diffY;
  touches.diff = diff;
  diff *= params.touchRatio;
  if (rtl) diff = -diff;
  swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
  data.currentTranslate = diff + data.startTranslate;
  let disableParentSwiper = true;
  let resistanceRatio = params.resistanceRatio;

  if (params.touchReleaseOnEdges) {
    resistanceRatio = 0;
  }

  if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
    disableParentSwiper = false;
    if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
  } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
    disableParentSwiper = false;
    if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
  }

  if (disableParentSwiper) {
    e.preventedByNestedSwiper = true;
  } // Directions locks


  if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }

  if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }

  if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
    data.currentTranslate = data.startTranslate;
  } // Threshold


  if (params.threshold > 0) {
    if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
      if (!data.allowThresholdMove) {
        data.allowThresholdMove = true;
        touches.startX = touches.currentX;
        touches.startY = touches.currentY;
        data.currentTranslate = data.startTranslate;
        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
        return;
      }
    } else {
      data.currentTranslate = data.startTranslate;
      return;
    }
  }

  if (!params.followFinger || params.cssMode) return; // Update active index in free mode

  if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }

  if (swiper.params.freeMode && params.freeMode.enabled && swiper.freeMode) {
    swiper.freeMode.onTouchMove();
  } // Update progress


  swiper.updateProgress(data.currentTranslate); // Update translate

  swiper.setTranslate(data.currentTranslate);
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/events/onTouchStart.js":
/*!**************************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/core/events/onTouchStart.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ onTouchStart; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "../../../AppVuejs/wbu-atomique/node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/dom.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/utils.js");


 // Modified from https://stackoverflow.com/questions/54520554/custom-element-getrootnode-closest-function-crossing-multiple-parent-shadowd

function closestElement(selector, base = this) {
  function __closestFrom(el) {
    if (!el || el === (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)() || el === (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)()) return null;
    if (el.assignedSlot) el = el.assignedSlot;
    const found = el.closest(selector);
    return found || __closestFrom(el.getRootNode().host);
  }

  return __closestFrom(base);
}

function onTouchStart(event) {
  const swiper = this;
  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  const data = swiper.touchEventsData;
  const {
    params,
    touches,
    enabled
  } = swiper;
  if (!enabled) return;

  if (swiper.animating && params.preventInteractionOnTransition) {
    return;
  }

  if (!swiper.animating && params.cssMode && params.loop) {
    swiper.loopFix();
  }

  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  let $targetEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__.default)(e.target);

  if (params.touchEventsTarget === 'wrapper') {
    if (!$targetEl.closest(swiper.wrapperEl).length) return;
  }

  data.isTouchEvent = e.type === 'touchstart';
  if (!data.isTouchEvent && 'which' in e && e.which === 3) return;
  if (!data.isTouchEvent && 'button' in e && e.button > 0) return;
  if (data.isTouched && data.isMoved) return; // change target el for shadow root component

  const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== '';

  if (swipingClassHasValue && e.target && e.target.shadowRoot && event.path && event.path[0]) {
    $targetEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__.default)(event.path[0]);
  }

  const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
  const isTargetShadow = !!(e.target && e.target.shadowRoot); // use closestElement for shadow root element to get the actual closest for nested shadow root element

  if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, e.target) : $targetEl.closest(noSwipingSelector)[0])) {
    swiper.allowClick = true;
    return;
  }

  if (params.swipeHandler) {
    if (!$targetEl.closest(params.swipeHandler)[0]) return;
  }

  touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
  touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
  const startX = touches.currentX;
  const startY = touches.currentY; // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore

  const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
  const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;

  if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
    if (edgeSwipeDetection === 'prevent') {
      event.preventDefault();
    } else {
      return;
    }
  }

  Object.assign(data, {
    isTouched: true,
    isMoved: false,
    allowTouchCallbacks: true,
    isScrolling: undefined,
    startMoving: undefined
  });
  touches.startX = startX;
  touches.startY = startY;
  data.touchStartTime = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.now)();
  swiper.allowClick = true;
  swiper.updateSize();
  swiper.swipeDirection = undefined;
  if (params.threshold > 0) data.allowThresholdMove = false;

  if (e.type !== 'touchstart') {
    let preventDefault = true;
    if ($targetEl.is(data.focusableElements)) preventDefault = false;

    if (document.activeElement && (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__.default)(document.activeElement).is(data.focusableElements) && document.activeElement !== $targetEl[0]) {
      document.activeElement.blur();
    }

    const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;

    if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) {
      e.preventDefault();
    }
  }

  swiper.emit('touchStart', e);
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/grab-cursor/index.js":
/*!************************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/core/grab-cursor/index.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setGrabCursor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setGrabCursor.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/grab-cursor/setGrabCursor.js");
/* harmony import */ var _unsetGrabCursor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unsetGrabCursor.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/grab-cursor/unsetGrabCursor.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  setGrabCursor: _setGrabCursor_js__WEBPACK_IMPORTED_MODULE_0__.default,
  unsetGrabCursor: _unsetGrabCursor_js__WEBPACK_IMPORTED_MODULE_1__.default
});

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/grab-cursor/setGrabCursor.js":
/*!********************************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/core/grab-cursor/setGrabCursor.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ setGrabCursor; }
/* harmony export */ });
function setGrabCursor(moving) {
  const swiper = this;
  if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
  const el = swiper.params.touchEventsTarget === 'container' ? swiper.el : swiper.wrapperEl;
  el.style.cursor = 'move';
  el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
  el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
  el.style.cursor = moving ? 'grabbing' : 'grab';
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/grab-cursor/unsetGrabCursor.js":
/*!**********************************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/core/grab-cursor/unsetGrabCursor.js ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ unsetGrabCursor; }
/* harmony export */ });
function unsetGrabCursor() {
  const swiper = this;

  if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
    return;
  }

  swiper[swiper.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = '';
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/images/index.js":
/*!*******************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/core/images/index.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loadImage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadImage.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/images/loadImage.js");
/* harmony import */ var _preloadImages_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preloadImages.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/images/preloadImages.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  loadImage: _loadImage_js__WEBPACK_IMPORTED_MODULE_0__.default,
  preloadImages: _preloadImages_js__WEBPACK_IMPORTED_MODULE_1__.default
});

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/images/loadImage.js":
/*!***********************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/core/images/loadImage.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ loadImage; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "../../../AppVuejs/wbu-atomique/node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/dom.js");


function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  let image;

  function onReady() {
    if (callback) callback();
  }

  const isPicture = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__.default)(imageEl).parent('picture')[0];

  if (!isPicture && (!imageEl.complete || !checkForComplete)) {
    if (src) {
      image = new window.Image();
      image.onload = onReady;
      image.onerror = onReady;

      if (sizes) {
        image.sizes = sizes;
      }

      if (srcset) {
        image.srcset = srcset;
      }

      if (src) {
        image.src = src;
      }
    } else {
      onReady();
    }
  } else {
    // image already loaded...
    onReady();
  }
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/images/preloadImages.js":
/*!***************************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/core/images/preloadImages.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ preloadImages; }
/* harmony export */ });
function preloadImages() {
  const swiper = this;
  swiper.imagesToLoad = swiper.$el.find('img');

  function onReady() {
    if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) return;
    if (swiper.imagesLoaded !== undefined) swiper.imagesLoaded += 1;

    if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
      if (swiper.params.updateOnImagesReady) swiper.update();
      swiper.emit('imagesReady');
    }
  }

  for (let i = 0; i < swiper.imagesToLoad.length; i += 1) {
    const imageEl = swiper.imagesToLoad[i];
    swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute('src'), imageEl.srcset || imageEl.getAttribute('srcset'), imageEl.sizes || imageEl.getAttribute('sizes'), true, onReady);
  }
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/loop/index.js":
/*!*****************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/core/loop/index.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loopCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loopCreate.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/loop/loopCreate.js");
/* harmony import */ var _loopFix_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loopFix.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/loop/loopFix.js");
/* harmony import */ var _loopDestroy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loopDestroy.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/loop/loopDestroy.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  loopCreate: _loopCreate_js__WEBPACK_IMPORTED_MODULE_0__.default,
  loopFix: _loopFix_js__WEBPACK_IMPORTED_MODULE_1__.default,
  loopDestroy: _loopDestroy_js__WEBPACK_IMPORTED_MODULE_2__.default
});

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/loop/loopCreate.js":
/*!**********************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/core/loop/loopCreate.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ loopCreate; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "../../../AppVuejs/wbu-atomique/node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/dom.js");


function loopCreate() {
  const swiper = this;
  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  const {
    params,
    $wrapperEl
  } = swiper; // Remove duplicated slides

  $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}`).remove();
  let slides = $wrapperEl.children(`.${params.slideClass}`);

  if (params.loopFillGroupWithBlank) {
    const blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;

    if (blankSlidesNum !== params.slidesPerGroup) {
      for (let i = 0; i < blankSlidesNum; i += 1) {
        const blankNode = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__.default)(document.createElement('div')).addClass(`${params.slideClass} ${params.slideBlankClass}`);
        $wrapperEl.append(blankNode);
      }

      slides = $wrapperEl.children(`.${params.slideClass}`);
    }
  }

  if (params.slidesPerView === 'auto' && !params.loopedSlides) params.loopedSlides = slides.length;
  swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
  swiper.loopedSlides += params.loopAdditionalSlides;

  if (swiper.loopedSlides > slides.length) {
    swiper.loopedSlides = slides.length;
  }

  const prependSlides = [];
  const appendSlides = [];
  slides.each((el, index) => {
    const slide = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__.default)(el);

    if (index < swiper.loopedSlides) {
      appendSlides.push(el);
    }

    if (index < slides.length && index >= slides.length - swiper.loopedSlides) {
      prependSlides.push(el);
    }

    slide.attr('data-swiper-slide-index', index);
  });

  for (let i = 0; i < appendSlides.length; i += 1) {
    $wrapperEl.append((0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__.default)(appendSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
  }

  for (let i = prependSlides.length - 1; i >= 0; i -= 1) {
    $wrapperEl.prepend((0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__.default)(prependSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
  }
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/loop/loopDestroy.js":
/*!***********************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/core/loop/loopDestroy.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ loopDestroy; }
/* harmony export */ });
function loopDestroy() {
  const swiper = this;
  const {
    $wrapperEl,
    params,
    slides
  } = swiper;
  $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass},.${params.slideClass}.${params.slideBlankClass}`).remove();
  slides.removeAttr('data-swiper-slide-index');
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/loop/loopFix.js":
/*!*******************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/core/loop/loopFix.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ loopFix; }
/* harmony export */ });
function loopFix() {
  const swiper = this;
  swiper.emit('beforeLoopFix');
  const {
    activeIndex,
    slides,
    loopedSlides,
    allowSlidePrev,
    allowSlideNext,
    snapGrid,
    rtlTranslate: rtl
  } = swiper;
  let newIndex;
  swiper.allowSlidePrev = true;
  swiper.allowSlideNext = true;
  const snapTranslate = -snapGrid[activeIndex];
  const diff = snapTranslate - swiper.getTranslate(); // Fix For Negative Oversliding

  if (activeIndex < loopedSlides) {
    newIndex = slides.length - loopedSlides * 3 + activeIndex;
    newIndex += loopedSlides;
    const slideChanged = swiper.slideTo(newIndex, 0, false, true);

    if (slideChanged && diff !== 0) {
      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
  } else if (activeIndex >= slides.length - loopedSlides) {
    // Fix For Positive Oversliding
    newIndex = -slides.length + activeIndex + loopedSlides;
    newIndex += loopedSlides;
    const slideChanged = swiper.slideTo(newIndex, 0, false, true);

    if (slideChanged && diff !== 0) {
      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
  }

  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  swiper.emit('loopFix');
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/moduleExtendParams.js":
/*!*************************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/core/moduleExtendParams.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ moduleExtendParams; }
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/utils.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/utils.js");

function moduleExtendParams(params, allModulesParams) {
  return function extendParams(obj = {}) {
    const moduleParamName = Object.keys(obj)[0];
    const moduleParams = obj[moduleParamName];

    if (typeof moduleParams !== 'object' || moduleParams === null) {
      (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.extend)(allModulesParams, obj);
      return;
    }

    if (['navigation', 'pagination', 'scrollbar'].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) {
      params[moduleParamName] = {
        auto: true
      };
    }

    if (!(moduleParamName in params && 'enabled' in moduleParams)) {
      (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.extend)(allModulesParams, obj);
      return;
    }

    if (params[moduleParamName] === true) {
      params[moduleParamName] = {
        enabled: true
      };
    }

    if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
      params[moduleParamName].enabled = true;
    }

    if (!params[moduleParamName]) params[moduleParamName] = {
      enabled: false
    };
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.extend)(allModulesParams, obj);
  };
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/modules/observer/observer.js":
/*!********************************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/core/modules/observer/observer.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Observer; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "../../../AppVuejs/wbu-atomique/node_modules/ssr-window/ssr-window.esm.js");

function Observer({
  swiper,
  extendParams,
  on,
  emit
}) {
  const observers = [];
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();

  const attach = (target, options = {}) => {
    const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
    const observer = new ObserverFunc(mutations => {
      // The observerUpdate event should only be triggered
      // once despite the number of mutations.  Additional
      // triggers are redundant and are very costly
      if (mutations.length === 1) {
        emit('observerUpdate', mutations[0]);
        return;
      }

      const observerUpdate = function observerUpdate() {
        emit('observerUpdate', mutations[0]);
      };

      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(observerUpdate);
      } else {
        window.setTimeout(observerUpdate, 0);
      }
    });
    observer.observe(target, {
      attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
      childList: typeof options.childList === 'undefined' ? true : options.childList,
      characterData: typeof options.characterData === 'undefined' ? true : options.characterData
    });
    observers.push(observer);
  };

  const init = () => {
    if (!swiper.params.observer) return;

    if (swiper.params.observeParents) {
      const containerParents = swiper.$el.parents();

      for (let i = 0; i < containerParents.length; i += 1) {
        attach(containerParents[i]);
      }
    } // Observe container


    attach(swiper.$el[0], {
      childList: swiper.params.observeSlideChildren
    }); // Observe wrapper

    attach(swiper.$wrapperEl[0], {
      attributes: false
    });
  };

  const destroy = () => {
    observers.forEach(observer => {
      observer.disconnect();
    });
    observers.splice(0, observers.length);
  };

  extendParams({
    observer: false,
    observeParents: false,
    observeSlideChildren: false
  });
  on('init', init);
  on('destroy', destroy);
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/modules/resize/resize.js":
/*!****************************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/core/modules/resize/resize.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Resize; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "../../../AppVuejs/wbu-atomique/node_modules/ssr-window/ssr-window.esm.js");

function Resize({
  swiper,
  on,
  emit
}) {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  let observer = null;

  const resizeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit('beforeResize');
    emit('resize');
  };

  const createObserver = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    observer = new ResizeObserver(entries => {
      const {
        width,
        height
      } = swiper;
      let newWidth = width;
      let newHeight = height;
      entries.forEach(({
        contentBoxSize,
        contentRect,
        target
      }) => {
        if (target && target !== swiper.el) return;
        newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
        newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
      });

      if (newWidth !== width || newHeight !== height) {
        resizeHandler();
      }
    });
    observer.observe(swiper.el);
  };

  const removeObserver = () => {
    if (observer && observer.unobserve && swiper.el) {
      observer.unobserve(swiper.el);
      observer = null;
    }
  };

  const orientationChangeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit('orientationchange');
  };

  on('init', () => {
    if (swiper.params.resizeObserver && typeof window.ResizeObserver !== 'undefined') {
      createObserver();
      return;
    }

    window.addEventListener('resize', resizeHandler);
    window.addEventListener('orientationchange', orientationChangeHandler);
  });
  on('destroy', () => {
    removeObserver();
    window.removeEventListener('resize', resizeHandler);
    window.removeEventListener('orientationchange', orientationChangeHandler);
  });
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/slide/index.js":
/*!******************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/core/slide/index.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _slideTo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slideTo.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/slide/slideTo.js");
/* harmony import */ var _slideToLoop_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slideToLoop.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/slide/slideToLoop.js");
/* harmony import */ var _slideNext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slideNext.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/slide/slideNext.js");
/* harmony import */ var _slidePrev_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slidePrev.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/slide/slidePrev.js");
/* harmony import */ var _slideReset_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slideReset.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/slide/slideReset.js");
/* harmony import */ var _slideToClosest_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slideToClosest.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/slide/slideToClosest.js");
/* harmony import */ var _slideToClickedSlide_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slideToClickedSlide.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/slide/slideToClickedSlide.js");







/* harmony default export */ __webpack_exports__["default"] = ({
  slideTo: _slideTo_js__WEBPACK_IMPORTED_MODULE_0__.default,
  slideToLoop: _slideToLoop_js__WEBPACK_IMPORTED_MODULE_1__.default,
  slideNext: _slideNext_js__WEBPACK_IMPORTED_MODULE_2__.default,
  slidePrev: _slidePrev_js__WEBPACK_IMPORTED_MODULE_3__.default,
  slideReset: _slideReset_js__WEBPACK_IMPORTED_MODULE_4__.default,
  slideToClosest: _slideToClosest_js__WEBPACK_IMPORTED_MODULE_5__.default,
  slideToClickedSlide: _slideToClickedSlide_js__WEBPACK_IMPORTED_MODULE_6__.default
});

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/slide/slideNext.js":
/*!**********************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/core/slide/slideNext.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ slideNext; }
/* harmony export */ });
/* eslint no-unused-vars: "off" */
function slideNext(speed = this.params.speed, runCallbacks = true, internal) {
  const swiper = this;
  const {
    animating,
    enabled,
    params
  } = swiper;
  if (!enabled) return swiper;
  let perGroup = params.slidesPerGroup;

  if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
    perGroup = Math.max(swiper.slidesPerViewDynamic('current', true), 1);
  }

  const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;

  if (params.loop) {
    if (animating && params.loopPreventsSlide) return false;
    swiper.loopFix(); // eslint-disable-next-line

    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
  }

  return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/slide/slidePrev.js":
/*!**********************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/core/slide/slidePrev.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ slidePrev; }
/* harmony export */ });
/* eslint no-unused-vars: "off" */
function slidePrev(speed = this.params.speed, runCallbacks = true, internal) {
  const swiper = this;
  const {
    params,
    animating,
    snapGrid,
    slidesGrid,
    rtlTranslate,
    enabled
  } = swiper;
  if (!enabled) return swiper;

  if (params.loop) {
    if (animating && params.loopPreventsSlide) return false;
    swiper.loopFix(); // eslint-disable-next-line

    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
  }

  const translate = rtlTranslate ? swiper.translate : -swiper.translate;

  function normalize(val) {
    if (val < 0) return -Math.floor(Math.abs(val));
    return Math.floor(val);
  }

  const normalizedTranslate = normalize(translate);
  const normalizedSnapGrid = snapGrid.map(val => normalize(val));
  let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];

  if (typeof prevSnap === 'undefined' && params.cssMode) {
    let prevSnapIndex;
    snapGrid.forEach((snap, snapIndex) => {
      if (normalizedTranslate >= snap) {
        // prevSnap = snap;
        prevSnapIndex = snapIndex;
      }
    });

    if (typeof prevSnapIndex !== 'undefined') {
      prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
    }
  }

  let prevIndex = 0;

  if (typeof prevSnap !== 'undefined') {
    prevIndex = slidesGrid.indexOf(prevSnap);
    if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;

    if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
      prevIndex = prevIndex - swiper.slidesPerViewDynamic('previous', true) + 1;
      prevIndex = Math.max(prevIndex, 0);
    }
  }

  return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/slide/slideReset.js":
/*!***********************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/core/slide/slideReset.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ slideReset; }
/* harmony export */ });
/* eslint no-unused-vars: "off" */
function slideReset(speed = this.params.speed, runCallbacks = true, internal) {
  const swiper = this;
  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/slide/slideTo.js":
/*!********************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/core/slide/slideTo.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ slideTo; }
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/utils.js");

function slideTo(index = 0, speed = this.params.speed, runCallbacks = true, internal, initial) {
  if (typeof index !== 'number' && typeof index !== 'string') {
    throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof index}] given.`);
  }

  if (typeof index === 'string') {
    /**
     * The `index` argument converted from `string` to `number`.
     * @type {number}
     */
    const indexAsNumber = parseInt(index, 10);
    /**
     * Determines whether the `index` argument is a valid `number`
     * after being converted from the `string` type.
     * @type {boolean}
     */

    const isValidNumber = isFinite(indexAsNumber);

    if (!isValidNumber) {
      throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`);
    } // Knowing that the converted `index` is a valid number,
    // we can update the original argument's value.


    index = indexAsNumber;
  }

  const swiper = this;
  let slideIndex = index;
  if (slideIndex < 0) slideIndex = 0;
  const {
    params,
    snapGrid,
    slidesGrid,
    previousIndex,
    activeIndex,
    rtlTranslate: rtl,
    wrapperEl,
    enabled
  } = swiper;

  if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) {
    return false;
  }

  const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
  let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

  if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
    swiper.emit('beforeSlideChangeStart');
  }

  const translate = -snapGrid[snapIndex]; // Update progress

  swiper.updateProgress(translate); // Normalize slideIndex

  if (params.normalizeSlideIndex) {
    for (let i = 0; i < slidesGrid.length; i += 1) {
      const normalizedTranslate = -Math.floor(translate * 100);
      const normalizedGrid = Math.floor(slidesGrid[i] * 100);
      const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);

      if (typeof slidesGrid[i + 1] !== 'undefined') {
        if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
          slideIndex = i;
        } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
          slideIndex = i + 1;
        }
      } else if (normalizedTranslate >= normalizedGrid) {
        slideIndex = i;
      }
    }
  } // Directions locks


  if (swiper.initialized && slideIndex !== activeIndex) {
    if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
      return false;
    }

    if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
      if ((activeIndex || 0) !== slideIndex) return false;
    }
  }

  let direction;
  if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset'; // Update Index

  if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
    swiper.updateActiveIndex(slideIndex); // Update Height

    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }

    swiper.updateSlidesClasses();

    if (params.effect !== 'slide') {
      swiper.setTranslate(translate);
    }

    if (direction !== 'reset') {
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    }

    return false;
  }

  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    const t = rtl ? translate : -translate;

    if (speed === 0) {
      const isVirtual = swiper.virtual && swiper.params.virtual.enabled;

      if (isVirtual) {
        swiper.wrapperEl.style.scrollSnapType = 'none';
        swiper._immediateVirtual = true;
      }

      wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;

      if (isVirtual) {
        requestAnimationFrame(() => {
          swiper.wrapperEl.style.scrollSnapType = '';
          swiper._swiperImmediateVirtual = false;
        });
      }
    } else {
      if (!swiper.support.smoothScroll) {
        (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.animateCSSModeScroll)({
          swiper,
          targetPosition: t,
          side: isH ? 'left' : 'top'
        });
        return true;
      }

      wrapperEl.scrollTo({
        [isH ? 'left' : 'top']: t,
        behavior: 'smooth'
      });
    }

    return true;
  }

  if (speed === 0) {
    swiper.setTransition(0);
    swiper.setTranslate(translate);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit('beforeTransitionStart', speed, internal);
    swiper.transitionStart(runCallbacks, direction);
    swiper.transitionEnd(runCallbacks, direction);
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(translate);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit('beforeTransitionStart', speed, internal);
    swiper.transitionStart(runCallbacks, direction);

    if (!swiper.animating) {
      swiper.animating = true;

      if (!swiper.onSlideToWrapperTransitionEnd) {
        swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
          swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
          swiper.onSlideToWrapperTransitionEnd = null;
          delete swiper.onSlideToWrapperTransitionEnd;
          swiper.transitionEnd(runCallbacks, direction);
        };
      }

      swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
      swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
    }
  }

  return true;
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/slide/slideToClickedSlide.js":
/*!********************************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/core/slide/slideToClickedSlide.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ slideToClickedSlide; }
/* harmony export */ });
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/dom.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/dom.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/utils.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/utils.js");


function slideToClickedSlide() {
  const swiper = this;
  const {
    params,
    $wrapperEl
  } = swiper;
  const slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
  let slideToIndex = swiper.clickedIndex;
  let realIndex;

  if (params.loop) {
    if (swiper.animating) return;
    realIndex = parseInt((0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__.default)(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);

    if (params.centeredSlides) {
      if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
        swiper.loopFix();
        slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
        (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.nextTick)(() => {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else if (slideToIndex > swiper.slides.length - slidesPerView) {
      swiper.loopFix();
      slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
      (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.nextTick)(() => {
        swiper.slideTo(slideToIndex);
      });
    } else {
      swiper.slideTo(slideToIndex);
    }
  } else {
    swiper.slideTo(slideToIndex);
  }
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/slide/slideToClosest.js":
/*!***************************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/core/slide/slideToClosest.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ slideToClosest; }
/* harmony export */ });
/* eslint no-unused-vars: "off" */
function slideToClosest(speed = this.params.speed, runCallbacks = true, internal, threshold = 0.5) {
  const swiper = this;
  let index = swiper.activeIndex;
  const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
  const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;

  if (translate >= swiper.snapGrid[snapIndex]) {
    // The current translate is on or after the current snap index, so the choice
    // is between the current index and the one after it.
    const currentSnap = swiper.snapGrid[snapIndex];
    const nextSnap = swiper.snapGrid[snapIndex + 1];

    if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
      index += swiper.params.slidesPerGroup;
    }
  } else {
    // The current translate is before the current snap index, so the choice
    // is between the current index and the one before it.
    const prevSnap = swiper.snapGrid[snapIndex - 1];
    const currentSnap = swiper.snapGrid[snapIndex];

    if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) {
      index -= swiper.params.slidesPerGroup;
    }
  }

  index = Math.max(index, 0);
  index = Math.min(index, swiper.slidesGrid.length - 1);
  return swiper.slideTo(index, speed, runCallbacks, internal);
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/slide/slideToLoop.js":
/*!************************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/core/slide/slideToLoop.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ slideToLoop; }
/* harmony export */ });
function slideToLoop(index = 0, speed = this.params.speed, runCallbacks = true, internal) {
  const swiper = this;
  let newIndex = index;

  if (swiper.params.loop) {
    newIndex += swiper.loopedSlides;
  }

  return swiper.slideTo(newIndex, speed, runCallbacks, internal);
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/transition/index.js":
/*!***********************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/core/transition/index.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setTransition_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setTransition.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/transition/setTransition.js");
/* harmony import */ var _transitionStart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transitionStart.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/transition/transitionStart.js");
/* harmony import */ var _transitionEnd_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transitionEnd.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/transition/transitionEnd.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  setTransition: _setTransition_js__WEBPACK_IMPORTED_MODULE_0__.default,
  transitionStart: _transitionStart_js__WEBPACK_IMPORTED_MODULE_1__.default,
  transitionEnd: _transitionEnd_js__WEBPACK_IMPORTED_MODULE_2__.default
});

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/transition/setTransition.js":
/*!*******************************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/core/transition/setTransition.js ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ setTransition; }
/* harmony export */ });
function setTransition(duration, byController) {
  const swiper = this;

  if (!swiper.params.cssMode) {
    swiper.$wrapperEl.transition(duration);
  }

  swiper.emit('setTransition', duration, byController);
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/transition/transitionEmit.js":
/*!********************************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/core/transition/transitionEmit.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ transitionEmit; }
/* harmony export */ });
function transitionEmit({
  swiper,
  runCallbacks,
  direction,
  step
}) {
  const {
    activeIndex,
    previousIndex
  } = swiper;
  let dir = direction;

  if (!dir) {
    if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
  }

  swiper.emit(`transition${step}`);

  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === 'reset') {
      swiper.emit(`slideResetTransition${step}`);
      return;
    }

    swiper.emit(`slideChangeTransition${step}`);

    if (dir === 'next') {
      swiper.emit(`slideNextTransition${step}`);
    } else {
      swiper.emit(`slidePrevTransition${step}`);
    }
  }
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/transition/transitionEnd.js":
/*!*******************************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/core/transition/transitionEnd.js ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ transitionEnd; }
/* harmony export */ });
/* harmony import */ var _transitionEmit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transitionEmit.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/transition/transitionEmit.js");

function transitionEnd(runCallbacks = true, direction) {
  const swiper = this;
  const {
    params
  } = swiper;
  swiper.animating = false;
  if (params.cssMode) return;
  swiper.setTransition(0);
  (0,_transitionEmit_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    swiper,
    runCallbacks,
    direction,
    step: 'End'
  });
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/transition/transitionStart.js":
/*!*********************************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/core/transition/transitionStart.js ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ transitionStart; }
/* harmony export */ });
/* harmony import */ var _transitionEmit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transitionEmit.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/transition/transitionEmit.js");

function transitionStart(runCallbacks = true, direction) {
  const swiper = this;
  const {
    params
  } = swiper;
  if (params.cssMode) return;

  if (params.autoHeight) {
    swiper.updateAutoHeight();
  }

  (0,_transitionEmit_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    swiper,
    runCallbacks,
    direction,
    step: 'Start'
  });
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/translate/getTranslate.js":
/*!*****************************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/core/translate/getTranslate.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getSwiperTranslate; }
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/utils.js");

function getSwiperTranslate(axis = this.isHorizontal() ? 'x' : 'y') {
  const swiper = this;
  const {
    params,
    rtlTranslate: rtl,
    translate,
    $wrapperEl
  } = swiper;

  if (params.virtualTranslate) {
    return rtl ? -translate : translate;
  }

  if (params.cssMode) {
    return translate;
  }

  let currentTranslate = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.getTranslate)($wrapperEl[0], axis);
  if (rtl) currentTranslate = -currentTranslate;
  return currentTranslate || 0;
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/translate/index.js":
/*!**********************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/core/translate/index.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getTranslate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getTranslate.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/translate/getTranslate.js");
/* harmony import */ var _setTranslate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setTranslate.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/translate/setTranslate.js");
/* harmony import */ var _minTranslate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./minTranslate.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/translate/minTranslate.js");
/* harmony import */ var _maxTranslate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maxTranslate.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/translate/maxTranslate.js");
/* harmony import */ var _translateTo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./translateTo.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/translate/translateTo.js");





/* harmony default export */ __webpack_exports__["default"] = ({
  getTranslate: _getTranslate_js__WEBPACK_IMPORTED_MODULE_0__.default,
  setTranslate: _setTranslate_js__WEBPACK_IMPORTED_MODULE_1__.default,
  minTranslate: _minTranslate_js__WEBPACK_IMPORTED_MODULE_2__.default,
  maxTranslate: _maxTranslate_js__WEBPACK_IMPORTED_MODULE_3__.default,
  translateTo: _translateTo_js__WEBPACK_IMPORTED_MODULE_4__.default
});

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/translate/maxTranslate.js":
/*!*****************************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/core/translate/maxTranslate.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ maxTranslate; }
/* harmony export */ });
function maxTranslate() {
  return -this.snapGrid[this.snapGrid.length - 1];
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/translate/minTranslate.js":
/*!*****************************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/core/translate/minTranslate.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ minTranslate; }
/* harmony export */ });
function minTranslate() {
  return -this.snapGrid[0];
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/translate/setTranslate.js":
/*!*****************************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/core/translate/setTranslate.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ setTranslate; }
/* harmony export */ });
function setTranslate(translate, byController) {
  const swiper = this;
  const {
    rtlTranslate: rtl,
    params,
    $wrapperEl,
    wrapperEl,
    progress
  } = swiper;
  let x = 0;
  let y = 0;
  const z = 0;

  if (swiper.isHorizontal()) {
    x = rtl ? -translate : translate;
  } else {
    y = translate;
  }

  if (params.roundLengths) {
    x = Math.floor(x);
    y = Math.floor(y);
  }

  if (params.cssMode) {
    wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
  } else if (!params.virtualTranslate) {
    $wrapperEl.transform(`translate3d(${x}px, ${y}px, ${z}px)`);
  }

  swiper.previousTranslate = swiper.translate;
  swiper.translate = swiper.isHorizontal() ? x : y; // Check if we need to update progress

  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (translate - swiper.minTranslate()) / translatesDiff;
  }

  if (newProgress !== progress) {
    swiper.updateProgress(translate);
  }

  swiper.emit('setTranslate', swiper.translate, byController);
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/translate/translateTo.js":
/*!****************************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/core/translate/translateTo.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ translateTo; }
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/utils.js");

function translateTo(translate = 0, speed = this.params.speed, runCallbacks = true, translateBounds = true, internal) {
  const swiper = this;
  const {
    params,
    wrapperEl
  } = swiper;

  if (swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }

  const minTranslate = swiper.minTranslate();
  const maxTranslate = swiper.maxTranslate();
  let newTranslate;
  if (translateBounds && translate > minTranslate) newTranslate = minTranslate;else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;else newTranslate = translate; // Update progress

  swiper.updateProgress(newTranslate);

  if (params.cssMode) {
    const isH = swiper.isHorizontal();

    if (speed === 0) {
      wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
    } else {
      if (!swiper.support.smoothScroll) {
        (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.animateCSSModeScroll)({
          swiper,
          targetPosition: -newTranslate,
          side: isH ? 'left' : 'top'
        });
        return true;
      }

      wrapperEl.scrollTo({
        [isH ? 'left' : 'top']: -newTranslate,
        behavior: 'smooth'
      });
    }

    return true;
  }

  if (speed === 0) {
    swiper.setTransition(0);
    swiper.setTranslate(newTranslate);

    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionEnd');
    }
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(newTranslate);

    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionStart');
    }

    if (!swiper.animating) {
      swiper.animating = true;

      if (!swiper.onTranslateToWrapperTransitionEnd) {
        swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
          swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
          swiper.onTranslateToWrapperTransitionEnd = null;
          delete swiper.onTranslateToWrapperTransitionEnd;

          if (runCallbacks) {
            swiper.emit('transitionEnd');
          }
        };
      }

      swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
      swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
    }
  }

  return true;
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/update/index.js":
/*!*******************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/core/update/index.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _updateSize_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateSize.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/update/updateSize.js");
/* harmony import */ var _updateSlides_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateSlides.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/update/updateSlides.js");
/* harmony import */ var _updateAutoHeight_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updateAutoHeight.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/update/updateAutoHeight.js");
/* harmony import */ var _updateSlidesOffset_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updateSlidesOffset.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/update/updateSlidesOffset.js");
/* harmony import */ var _updateSlidesProgress_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./updateSlidesProgress.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/update/updateSlidesProgress.js");
/* harmony import */ var _updateProgress_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./updateProgress.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/update/updateProgress.js");
/* harmony import */ var _updateSlidesClasses_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./updateSlidesClasses.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/update/updateSlidesClasses.js");
/* harmony import */ var _updateActiveIndex_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./updateActiveIndex.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/update/updateActiveIndex.js");
/* harmony import */ var _updateClickedSlide_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./updateClickedSlide.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/update/updateClickedSlide.js");









/* harmony default export */ __webpack_exports__["default"] = ({
  updateSize: _updateSize_js__WEBPACK_IMPORTED_MODULE_0__.default,
  updateSlides: _updateSlides_js__WEBPACK_IMPORTED_MODULE_1__.default,
  updateAutoHeight: _updateAutoHeight_js__WEBPACK_IMPORTED_MODULE_2__.default,
  updateSlidesOffset: _updateSlidesOffset_js__WEBPACK_IMPORTED_MODULE_3__.default,
  updateSlidesProgress: _updateSlidesProgress_js__WEBPACK_IMPORTED_MODULE_4__.default,
  updateProgress: _updateProgress_js__WEBPACK_IMPORTED_MODULE_5__.default,
  updateSlidesClasses: _updateSlidesClasses_js__WEBPACK_IMPORTED_MODULE_6__.default,
  updateActiveIndex: _updateActiveIndex_js__WEBPACK_IMPORTED_MODULE_7__.default,
  updateClickedSlide: _updateClickedSlide_js__WEBPACK_IMPORTED_MODULE_8__.default
});

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/update/updateActiveIndex.js":
/*!*******************************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/core/update/updateActiveIndex.js ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ updateActiveIndex; }
/* harmony export */ });
function updateActiveIndex(newActiveIndex) {
  const swiper = this;
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  const {
    slidesGrid,
    snapGrid,
    params,
    activeIndex: previousIndex,
    realIndex: previousRealIndex,
    snapIndex: previousSnapIndex
  } = swiper;
  let activeIndex = newActiveIndex;
  let snapIndex;

  if (typeof activeIndex === 'undefined') {
    for (let i = 0; i < slidesGrid.length; i += 1) {
      if (typeof slidesGrid[i + 1] !== 'undefined') {
        if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
          activeIndex = i;
        } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
          activeIndex = i + 1;
        }
      } else if (translate >= slidesGrid[i]) {
        activeIndex = i;
      }
    } // Normalize slideIndex


    if (params.normalizeSlideIndex) {
      if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
    }
  }

  if (snapGrid.indexOf(translate) >= 0) {
    snapIndex = snapGrid.indexOf(translate);
  } else {
    const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
    snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
  }

  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

  if (activeIndex === previousIndex) {
    if (snapIndex !== previousSnapIndex) {
      swiper.snapIndex = snapIndex;
      swiper.emit('snapIndexChange');
    }

    return;
  } // Get real index


  const realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);
  Object.assign(swiper, {
    snapIndex,
    realIndex,
    previousIndex,
    activeIndex
  });
  swiper.emit('activeIndexChange');
  swiper.emit('snapIndexChange');

  if (previousRealIndex !== realIndex) {
    swiper.emit('realIndexChange');
  }

  if (swiper.initialized || swiper.params.runCallbacksOnInit) {
    swiper.emit('slideChange');
  }
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/update/updateAutoHeight.js":
/*!******************************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/core/update/updateAutoHeight.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ updateAutoHeight; }
/* harmony export */ });
function updateAutoHeight(speed) {
  const swiper = this;
  const activeSlides = [];
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  let newHeight = 0;
  let i;

  if (typeof speed === 'number') {
    swiper.setTransition(speed);
  } else if (speed === true) {
    swiper.setTransition(swiper.params.speed);
  }

  const getSlideByIndex = index => {
    if (isVirtual) {
      return swiper.slides.filter(el => parseInt(el.getAttribute('data-swiper-slide-index'), 10) === index)[0];
    }

    return swiper.slides.eq(index)[0];
  }; // Find slides currently in view


  if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
    if (swiper.params.centeredSlides) {
      swiper.visibleSlides.each(slide => {
        activeSlides.push(slide);
      });
    } else {
      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
        const index = swiper.activeIndex + i;
        if (index > swiper.slides.length && !isVirtual) break;
        activeSlides.push(getSlideByIndex(index));
      }
    }
  } else {
    activeSlides.push(getSlideByIndex(swiper.activeIndex));
  } // Find new height from highest slide in view


  for (i = 0; i < activeSlides.length; i += 1) {
    if (typeof activeSlides[i] !== 'undefined') {
      const height = activeSlides[i].offsetHeight;
      newHeight = height > newHeight ? height : newHeight;
    }
  } // Update Height


  if (newHeight) swiper.$wrapperEl.css('height', `${newHeight}px`);
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/update/updateClickedSlide.js":
/*!********************************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/core/update/updateClickedSlide.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ updateClickedSlide; }
/* harmony export */ });
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/dom.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/dom.js");

function updateClickedSlide(e) {
  const swiper = this;
  const params = swiper.params;
  const slide = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__.default)(e.target).closest(`.${params.slideClass}`)[0];
  let slideFound = false;
  let slideIndex;

  if (slide) {
    for (let i = 0; i < swiper.slides.length; i += 1) {
      if (swiper.slides[i] === slide) {
        slideFound = true;
        slideIndex = i;
        break;
      }
    }
  }

  if (slide && slideFound) {
    swiper.clickedSlide = slide;

    if (swiper.virtual && swiper.params.virtual.enabled) {
      swiper.clickedIndex = parseInt((0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__.default)(slide).attr('data-swiper-slide-index'), 10);
    } else {
      swiper.clickedIndex = slideIndex;
    }
  } else {
    swiper.clickedSlide = undefined;
    swiper.clickedIndex = undefined;
    return;
  }

  if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
    swiper.slideToClickedSlide();
  }
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/update/updateProgress.js":
/*!****************************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/core/update/updateProgress.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ updateProgress; }
/* harmony export */ });
function updateProgress(translate) {
  const swiper = this;

  if (typeof translate === 'undefined') {
    const multiplier = swiper.rtlTranslate ? -1 : 1; // eslint-disable-next-line

    translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
  }

  const params = swiper.params;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  let {
    progress,
    isBeginning,
    isEnd
  } = swiper;
  const wasBeginning = isBeginning;
  const wasEnd = isEnd;

  if (translatesDiff === 0) {
    progress = 0;
    isBeginning = true;
    isEnd = true;
  } else {
    progress = (translate - swiper.minTranslate()) / translatesDiff;
    isBeginning = progress <= 0;
    isEnd = progress >= 1;
  }

  Object.assign(swiper, {
    progress,
    isBeginning,
    isEnd
  });
  if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);

  if (isBeginning && !wasBeginning) {
    swiper.emit('reachBeginning toEdge');
  }

  if (isEnd && !wasEnd) {
    swiper.emit('reachEnd toEdge');
  }

  if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
    swiper.emit('fromEdge');
  }

  swiper.emit('progress', progress);
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/update/updateSize.js":
/*!************************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/core/update/updateSize.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ updateSize; }
/* harmony export */ });
function updateSize() {
  const swiper = this;
  let width;
  let height;
  const $el = swiper.$el;

  if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {
    width = swiper.params.width;
  } else {
    width = $el[0].clientWidth;
  }

  if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) {
    height = swiper.params.height;
  } else {
    height = $el[0].clientHeight;
  }

  if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
    return;
  } // Subtract paddings


  width = width - parseInt($el.css('padding-left') || 0, 10) - parseInt($el.css('padding-right') || 0, 10);
  height = height - parseInt($el.css('padding-top') || 0, 10) - parseInt($el.css('padding-bottom') || 0, 10);
  if (Number.isNaN(width)) width = 0;
  if (Number.isNaN(height)) height = 0;
  Object.assign(swiper, {
    width,
    height,
    size: swiper.isHorizontal() ? width : height
  });
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/update/updateSlides.js":
/*!**************************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/core/update/updateSlides.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ updateSlides; }
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/utils.js");

function updateSlides() {
  const swiper = this;

  function getDirectionLabel(property) {
    if (swiper.isHorizontal()) {
      return property;
    } // prettier-ignore


    return {
      'width': 'height',
      'margin-top': 'margin-left',
      'margin-bottom ': 'margin-right',
      'margin-left': 'margin-top',
      'margin-right': 'margin-bottom',
      'padding-left': 'padding-top',
      'padding-right': 'padding-bottom',
      'marginRight': 'marginBottom'
    }[property];
  }

  function getDirectionPropertyValue(node, label) {
    return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
  }

  const params = swiper.params;
  const {
    $wrapperEl,
    size: swiperSize,
    rtlTranslate: rtl,
    wrongRTL
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
  const slides = $wrapperEl.children(`.${swiper.params.slideClass}`);
  const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
  let snapGrid = [];
  const slidesGrid = [];
  const slidesSizesGrid = [];
  let offsetBefore = params.slidesOffsetBefore;

  if (typeof offsetBefore === 'function') {
    offsetBefore = params.slidesOffsetBefore.call(swiper);
  }

  let offsetAfter = params.slidesOffsetAfter;

  if (typeof offsetAfter === 'function') {
    offsetAfter = params.slidesOffsetAfter.call(swiper);
  }

  const previousSnapGridLength = swiper.snapGrid.length;
  const previousSlidesGridLength = swiper.slidesGrid.length;
  let spaceBetween = params.spaceBetween;
  let slidePosition = -offsetBefore;
  let prevSlideSize = 0;
  let index = 0;

  if (typeof swiperSize === 'undefined') {
    return;
  }

  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
  }

  swiper.virtualSize = -spaceBetween; // reset margins

  if (rtl) slides.css({
    marginLeft: '',
    marginBottom: '',
    marginTop: ''
  });else slides.css({
    marginRight: '',
    marginBottom: '',
    marginTop: ''
  }); // reset cssMode offsets

  if (params.centeredSlides && params.cssMode) {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.setCSSProperty)(swiper.wrapperEl, '--swiper-centered-offset-before', '');
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.setCSSProperty)(swiper.wrapperEl, '--swiper-centered-offset-after', '');
  }

  const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;

  if (gridEnabled) {
    swiper.grid.initSlides(slidesLength);
  } // Calc slides


  let slideSize;
  const shouldResetSlideSize = params.slidesPerView === 'auto' && params.breakpoints && Object.keys(params.breakpoints).filter(key => {
    return typeof params.breakpoints[key].slidesPerView !== 'undefined';
  }).length > 0;

  for (let i = 0; i < slidesLength; i += 1) {
    slideSize = 0;
    const slide = slides.eq(i);

    if (gridEnabled) {
      swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);
    }

    if (slide.css('display') === 'none') continue; // eslint-disable-line

    if (params.slidesPerView === 'auto') {
      if (shouldResetSlideSize) {
        slides[i].style[getDirectionLabel('width')] = ``;
      }

      const slideStyles = getComputedStyle(slide[0]);
      const currentTransform = slide[0].style.transform;
      const currentWebKitTransform = slide[0].style.webkitTransform;

      if (currentTransform) {
        slide[0].style.transform = 'none';
      }

      if (currentWebKitTransform) {
        slide[0].style.webkitTransform = 'none';
      }

      if (params.roundLengths) {
        slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
      } else {
        // eslint-disable-next-line
        const width = getDirectionPropertyValue(slideStyles, 'width');
        const paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');
        const paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');
        const marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');
        const marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');
        const boxSizing = slideStyles.getPropertyValue('box-sizing');

        if (boxSizing && boxSizing === 'border-box') {
          slideSize = width + marginLeft + marginRight;
        } else {
          const {
            clientWidth,
            offsetWidth
          } = slide[0];
          slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
        }
      }

      if (currentTransform) {
        slide[0].style.transform = currentTransform;
      }

      if (currentWebKitTransform) {
        slide[0].style.webkitTransform = currentWebKitTransform;
      }

      if (params.roundLengths) slideSize = Math.floor(slideSize);
    } else {
      slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
      if (params.roundLengths) slideSize = Math.floor(slideSize);

      if (slides[i]) {
        slides[i].style[getDirectionLabel('width')] = `${slideSize}px`;
      }
    }

    if (slides[i]) {
      slides[i].swiperSlideSize = slideSize;
    }

    slidesSizesGrid.push(slideSize);

    if (params.centeredSlides) {
      slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
      if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
    } else {
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
      slidePosition = slidePosition + slideSize + spaceBetween;
    }

    swiper.virtualSize += slideSize + spaceBetween;
    prevSlideSize = slideSize;
    index += 1;
  }

  swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;

  if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
    $wrapperEl.css({
      width: `${swiper.virtualSize + params.spaceBetween}px`
    });
  }

  if (params.setWrapperSize) {
    $wrapperEl.css({
      [getDirectionLabel('width')]: `${swiper.virtualSize + params.spaceBetween}px`
    });
  }

  if (gridEnabled) {
    swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
  } // Remove last grid elements depending on width


  if (!params.centeredSlides) {
    const newSlidesGrid = [];

    for (let i = 0; i < snapGrid.length; i += 1) {
      let slidesGridItem = snapGrid[i];
      if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);

      if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
        newSlidesGrid.push(slidesGridItem);
      }
    }

    snapGrid = newSlidesGrid;

    if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
      snapGrid.push(swiper.virtualSize - swiperSize);
    }
  }

  if (snapGrid.length === 0) snapGrid = [0];

  if (params.spaceBetween !== 0) {
    const key = swiper.isHorizontal() && rtl ? 'marginLeft' : getDirectionLabel('marginRight');
    slides.filter((_, slideIndex) => {
      if (!params.cssMode) return true;

      if (slideIndex === slides.length - 1) {
        return false;
      }

      return true;
    }).css({
      [key]: `${spaceBetween}px`
    });
  }

  if (params.centeredSlides && params.centeredSlidesBounds) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach(slideSizeValue => {
      allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
    });
    allSlidesSize -= params.spaceBetween;
    const maxSnap = allSlidesSize - swiperSize;
    snapGrid = snapGrid.map(snap => {
      if (snap < 0) return -offsetBefore;
      if (snap > maxSnap) return maxSnap + offsetAfter;
      return snap;
    });
  }

  if (params.centerInsufficientSlides) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach(slideSizeValue => {
      allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
    });
    allSlidesSize -= params.spaceBetween;

    if (allSlidesSize < swiperSize) {
      const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
      snapGrid.forEach((snap, snapIndex) => {
        snapGrid[snapIndex] = snap - allSlidesOffset;
      });
      slidesGrid.forEach((snap, snapIndex) => {
        slidesGrid[snapIndex] = snap + allSlidesOffset;
      });
    }
  }

  Object.assign(swiper, {
    slides,
    snapGrid,
    slidesGrid,
    slidesSizesGrid
  });

  if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.setCSSProperty)(swiper.wrapperEl, '--swiper-centered-offset-before', `${-snapGrid[0]}px`);
    (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.setCSSProperty)(swiper.wrapperEl, '--swiper-centered-offset-after', `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
    const addToSnapGrid = -swiper.snapGrid[0];
    const addToSlidesGrid = -swiper.slidesGrid[0];
    swiper.snapGrid = swiper.snapGrid.map(v => v + addToSnapGrid);
    swiper.slidesGrid = swiper.slidesGrid.map(v => v + addToSlidesGrid);
  }

  if (slidesLength !== previousSlidesLength) {
    swiper.emit('slidesLengthChange');
  }

  if (snapGrid.length !== previousSnapGridLength) {
    if (swiper.params.watchOverflow) swiper.checkOverflow();
    swiper.emit('snapGridLengthChange');
  }

  if (slidesGrid.length !== previousSlidesGridLength) {
    swiper.emit('slidesGridLengthChange');
  }

  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset();
  }
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/update/updateSlidesClasses.js":
/*!*********************************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/core/update/updateSlidesClasses.js ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ updateSlidesClasses; }
/* harmony export */ });
function updateSlidesClasses() {
  const swiper = this;
  const {
    slides,
    params,
    $wrapperEl,
    activeIndex,
    realIndex
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  slides.removeClass(`${params.slideActiveClass} ${params.slideNextClass} ${params.slidePrevClass} ${params.slideDuplicateActiveClass} ${params.slideDuplicateNextClass} ${params.slideDuplicatePrevClass}`);
  let activeSlide;

  if (isVirtual) {
    activeSlide = swiper.$wrapperEl.find(`.${params.slideClass}[data-swiper-slide-index="${activeIndex}"]`);
  } else {
    activeSlide = slides.eq(activeIndex);
  } // Active classes


  activeSlide.addClass(params.slideActiveClass);

  if (params.loop) {
    // Duplicate to all looped slides
    if (activeSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
    } else {
      $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
    }
  } // Next Slide


  let nextSlide = activeSlide.nextAll(`.${params.slideClass}`).eq(0).addClass(params.slideNextClass);

  if (params.loop && nextSlide.length === 0) {
    nextSlide = slides.eq(0);
    nextSlide.addClass(params.slideNextClass);
  } // Prev Slide


  let prevSlide = activeSlide.prevAll(`.${params.slideClass}`).eq(0).addClass(params.slidePrevClass);

  if (params.loop && prevSlide.length === 0) {
    prevSlide = slides.eq(-1);
    prevSlide.addClass(params.slidePrevClass);
  }

  if (params.loop) {
    // Duplicate to all looped slides
    if (nextSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${nextSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicateNextClass);
    } else {
      $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${nextSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicateNextClass);
    }

    if (prevSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${prevSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicatePrevClass);
    } else {
      $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${prevSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicatePrevClass);
    }
  }

  swiper.emitSlidesClasses();
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/update/updateSlidesOffset.js":
/*!********************************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/core/update/updateSlidesOffset.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ updateSlidesOffset; }
/* harmony export */ });
function updateSlidesOffset() {
  const swiper = this;
  const slides = swiper.slides;

  for (let i = 0; i < slides.length; i += 1) {
    slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
  }
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/update/updateSlidesProgress.js":
/*!**********************************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/core/update/updateSlidesProgress.js ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ updateSlidesProgress; }
/* harmony export */ });
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/dom.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/dom.js");

function updateSlidesProgress(translate = this && this.translate || 0) {
  const swiper = this;
  const params = swiper.params;
  const {
    slides,
    rtlTranslate: rtl
  } = swiper;
  if (slides.length === 0) return;
  if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
  let offsetCenter = -translate;
  if (rtl) offsetCenter = translate; // Visible Slides

  slides.removeClass(params.slideVisibleClass);
  swiper.visibleSlidesIndexes = [];
  swiper.visibleSlides = [];

  for (let i = 0; i < slides.length; i += 1) {
    const slide = slides[i];
    let slideOffset = slide.swiperSlideOffset;

    if (params.cssMode && params.centeredSlides) {
      slideOffset -= slides[0].swiperSlideOffset;
    }

    const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
    const slideBefore = -(offsetCenter - slideOffset);
    const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
    const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;

    if (isVisible) {
      swiper.visibleSlides.push(slide);
      swiper.visibleSlidesIndexes.push(i);
      slides.eq(i).addClass(params.slideVisibleClass);
    }

    slide.progress = rtl ? -slideProgress : slideProgress;
  }

  swiper.visibleSlides = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__.default)(swiper.visibleSlides);
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/a11y/a11y.js":
/*!*******************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/a11y/a11y.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ A11y; }
/* harmony export */ });
/* harmony import */ var _shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/classes-to-selector.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/classes-to-selector.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/dom.js");


function A11y({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    a11y: {
      enabled: true,
      notificationClass: 'swiper-notification',
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
      firstSlideMessage: 'This is the first slide',
      lastSlideMessage: 'This is the last slide',
      paginationBulletMessage: 'Go to slide {{index}}',
      slideLabelMessage: '{{index}} / {{slidesLength}}',
      containerMessage: null,
      containerRoleDescriptionMessage: null,
      itemRoleDescriptionMessage: null,
      slideRole: 'group'
    }
  });
  let liveRegion = null;

  function notify(message) {
    const notification = liveRegion;
    if (notification.length === 0) return;
    notification.html('');
    notification.html(message);
  }

  function getRandomNumber(size = 16) {
    const randomChar = () => Math.round(16 * Math.random()).toString(16);

    return 'x'.repeat(size).replace(/x/g, randomChar);
  }

  function makeElFocusable($el) {
    $el.attr('tabIndex', '0');
  }

  function makeElNotFocusable($el) {
    $el.attr('tabIndex', '-1');
  }

  function addElRole($el, role) {
    $el.attr('role', role);
  }

  function addElRoleDescription($el, description) {
    $el.attr('aria-roledescription', description);
  }

  function addElControls($el, controls) {
    $el.attr('aria-controls', controls);
  }

  function addElLabel($el, label) {
    $el.attr('aria-label', label);
  }

  function addElId($el, id) {
    $el.attr('id', id);
  }

  function addElLive($el, live) {
    $el.attr('aria-live', live);
  }

  function disableEl($el) {
    $el.attr('aria-disabled', true);
  }

  function enableEl($el) {
    $el.attr('aria-disabled', false);
  }

  function onEnterOrSpaceKey(e) {
    if (e.keyCode !== 13 && e.keyCode !== 32) return;
    const params = swiper.params.a11y;
    const $targetEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__.default)(e.target);

    if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
      if (!(swiper.isEnd && !swiper.params.loop)) {
        swiper.slideNext();
      }

      if (swiper.isEnd) {
        notify(params.lastSlideMessage);
      } else {
        notify(params.nextSlideMessage);
      }
    }

    if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
      if (!(swiper.isBeginning && !swiper.params.loop)) {
        swiper.slidePrev();
      }

      if (swiper.isBeginning) {
        notify(params.firstSlideMessage);
      } else {
        notify(params.prevSlideMessage);
      }
    }

    if (swiper.pagination && $targetEl.is((0,_shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_0__.default)(swiper.params.pagination.bulletClass))) {
      $targetEl[0].click();
    }
  }

  function updateNavigation() {
    if (swiper.params.loop || !swiper.navigation) return;
    const {
      $nextEl,
      $prevEl
    } = swiper.navigation;

    if ($prevEl && $prevEl.length > 0) {
      if (swiper.isBeginning) {
        disableEl($prevEl);
        makeElNotFocusable($prevEl);
      } else {
        enableEl($prevEl);
        makeElFocusable($prevEl);
      }
    }

    if ($nextEl && $nextEl.length > 0) {
      if (swiper.isEnd) {
        disableEl($nextEl);
        makeElNotFocusable($nextEl);
      } else {
        enableEl($nextEl);
        makeElFocusable($nextEl);
      }
    }
  }

  function hasPagination() {
    return swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length;
  }

  function updatePagination() {
    const params = swiper.params.a11y;

    if (hasPagination()) {
      swiper.pagination.bullets.each(bulletEl => {
        const $bulletEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__.default)(bulletEl);
        makeElFocusable($bulletEl);

        if (!swiper.params.pagination.renderBullet) {
          addElRole($bulletEl, 'button');
          addElLabel($bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, $bulletEl.index() + 1));
        }
      });
    }
  }

  const initNavEl = ($el, wrapperId, message) => {
    makeElFocusable($el);

    if ($el[0].tagName !== 'BUTTON') {
      addElRole($el, 'button');
      $el.on('keydown', onEnterOrSpaceKey);
    }

    addElLabel($el, message);
    addElControls($el, wrapperId);
  };

  function init() {
    const params = swiper.params.a11y;
    swiper.$el.append(liveRegion); // Container

    const $containerEl = swiper.$el;

    if (params.containerRoleDescriptionMessage) {
      addElRoleDescription($containerEl, params.containerRoleDescriptionMessage);
    }

    if (params.containerMessage) {
      addElLabel($containerEl, params.containerMessage);
    } // Wrapper


    const $wrapperEl = swiper.$wrapperEl;
    const wrapperId = $wrapperEl.attr('id') || `swiper-wrapper-${getRandomNumber(16)}`;
    const live = swiper.params.autoplay && swiper.params.autoplay.enabled ? 'off' : 'polite';
    addElId($wrapperEl, wrapperId);
    addElLive($wrapperEl, live); // Slide

    if (params.itemRoleDescriptionMessage) {
      addElRoleDescription((0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__.default)(swiper.slides), params.itemRoleDescriptionMessage);
    }

    addElRole((0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__.default)(swiper.slides), params.slideRole);
    const slidesLength = swiper.params.loop ? swiper.slides.filter(el => !el.classList.contains(swiper.params.slideDuplicateClass)).length : swiper.slides.length;
    swiper.slides.each((slideEl, index) => {
      const $slideEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__.default)(slideEl);
      const slideIndex = swiper.params.loop ? parseInt($slideEl.attr('data-swiper-slide-index'), 10) : index;
      const ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
      addElLabel($slideEl, ariaLabelMessage);
    }); // Navigation

    let $nextEl;
    let $prevEl;

    if (swiper.navigation && swiper.navigation.$nextEl) {
      $nextEl = swiper.navigation.$nextEl;
    }

    if (swiper.navigation && swiper.navigation.$prevEl) {
      $prevEl = swiper.navigation.$prevEl;
    }

    if ($nextEl && $nextEl.length) {
      initNavEl($nextEl, wrapperId, params.nextSlideMessage);
    }

    if ($prevEl && $prevEl.length) {
      initNavEl($prevEl, wrapperId, params.prevSlideMessage);
    } // Pagination


    if (hasPagination()) {
      swiper.pagination.$el.on('keydown', (0,_shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_0__.default)(swiper.params.pagination.bulletClass), onEnterOrSpaceKey);
    }
  }

  function destroy() {
    if (liveRegion && liveRegion.length > 0) liveRegion.remove();
    let $nextEl;
    let $prevEl;

    if (swiper.navigation && swiper.navigation.$nextEl) {
      $nextEl = swiper.navigation.$nextEl;
    }

    if (swiper.navigation && swiper.navigation.$prevEl) {
      $prevEl = swiper.navigation.$prevEl;
    }

    if ($nextEl) {
      $nextEl.off('keydown', onEnterOrSpaceKey);
    }

    if ($prevEl) {
      $prevEl.off('keydown', onEnterOrSpaceKey);
    } // Pagination


    if (hasPagination()) {
      swiper.pagination.$el.off('keydown', (0,_shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_0__.default)(swiper.params.pagination.bulletClass), onEnterOrSpaceKey);
    }
  }

  on('beforeInit', () => {
    liveRegion = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__.default)(`<span class="${swiper.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`);
  });
  on('afterInit', () => {
    if (!swiper.params.a11y.enabled) return;
    init();
    updateNavigation();
  });
  on('toEdge', () => {
    if (!swiper.params.a11y.enabled) return;
    updateNavigation();
  });
  on('fromEdge', () => {
    if (!swiper.params.a11y.enabled) return;
    updateNavigation();
  });
  on('paginationUpdate', () => {
    if (!swiper.params.a11y.enabled) return;
    updatePagination();
  });
  on('destroy', () => {
    if (!swiper.params.a11y.enabled) return;
    destroy();
  });
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/autoplay/autoplay.js":
/*!***************************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/autoplay/autoplay.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Autoplay; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "../../../AppVuejs/wbu-atomique/node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/utils.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/utils.js");
/* eslint no-underscore-dangle: "off" */

/* eslint no-use-before-define: "off" */


function Autoplay({
  swiper,
  extendParams,
  on,
  emit
}) {
  let timeout;
  swiper.autoplay = {
    running: false,
    paused: false
  };
  extendParams({
    autoplay: {
      enabled: false,
      delay: 3000,
      waitForTransition: true,
      disableOnInteraction: true,
      stopOnLastSlide: false,
      reverseDirection: false,
      pauseOnMouseEnter: false
    }
  });

  function run() {
    const $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
    let delay = swiper.params.autoplay.delay;

    if ($activeSlideEl.attr('data-swiper-autoplay')) {
      delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
    }

    clearTimeout(timeout);
    timeout = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.nextTick)(() => {
      let autoplayResult;

      if (swiper.params.autoplay.reverseDirection) {
        if (swiper.params.loop) {
          swiper.loopFix();
          autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
          emit('autoplay');
        } else if (!swiper.isBeginning) {
          autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
          emit('autoplay');
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          autoplayResult = swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
          emit('autoplay');
        } else {
          stop();
        }
      } else if (swiper.params.loop) {
        swiper.loopFix();
        autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
        emit('autoplay');
      } else if (!swiper.isEnd) {
        autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
        emit('autoplay');
      } else if (!swiper.params.autoplay.stopOnLastSlide) {
        autoplayResult = swiper.slideTo(0, swiper.params.speed, true, true);
        emit('autoplay');
      } else {
        stop();
      }

      if (swiper.params.cssMode && swiper.autoplay.running) run();else if (autoplayResult === false) {
        run();
      }
    }, delay);
  }

  function start() {
    if (typeof timeout !== 'undefined') return false;
    if (swiper.autoplay.running) return false;
    swiper.autoplay.running = true;
    emit('autoplayStart');
    run();
    return true;
  }

  function stop() {
    if (!swiper.autoplay.running) return false;
    if (typeof timeout === 'undefined') return false;

    if (timeout) {
      clearTimeout(timeout);
      timeout = undefined;
    }

    swiper.autoplay.running = false;
    emit('autoplayStop');
    return true;
  }

  function pause(speed) {
    if (!swiper.autoplay.running) return;
    if (swiper.autoplay.paused) return;
    if (timeout) clearTimeout(timeout);
    swiper.autoplay.paused = true;

    if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
      swiper.autoplay.paused = false;
      run();
    } else {
      ['transitionend', 'webkitTransitionEnd'].forEach(event => {
        swiper.$wrapperEl[0].addEventListener(event, onTransitionEnd);
      });
    }
  }

  function onVisibilityChange() {
    const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();

    if (document.visibilityState === 'hidden' && swiper.autoplay.running) {
      pause();
    }

    if (document.visibilityState === 'visible' && swiper.autoplay.paused) {
      run();
      swiper.autoplay.paused = false;
    }
  }

  function onTransitionEnd(e) {
    if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;
    if (e.target !== swiper.$wrapperEl[0]) return;
    ['transitionend', 'webkitTransitionEnd'].forEach(event => {
      swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
    });
    swiper.autoplay.paused = false;

    if (!swiper.autoplay.running) {
      stop();
    } else {
      run();
    }
  }

  function onMouseEnter() {
    if (swiper.params.autoplay.disableOnInteraction) {
      stop();
    } else {
      pause();
    }

    ['transitionend', 'webkitTransitionEnd'].forEach(event => {
      swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
    });
  }

  function onMouseLeave() {
    if (swiper.params.autoplay.disableOnInteraction) {
      return;
    }

    swiper.autoplay.paused = false;
    run();
  }

  function attachMouseEvents() {
    if (swiper.params.autoplay.pauseOnMouseEnter) {
      swiper.$el.on('mouseenter', onMouseEnter);
      swiper.$el.on('mouseleave', onMouseLeave);
    }
  }

  function detachMouseEvents() {
    swiper.$el.off('mouseenter', onMouseEnter);
    swiper.$el.off('mouseleave', onMouseLeave);
  }

  on('init', () => {
    if (swiper.params.autoplay.enabled) {
      start();
      const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
      document.addEventListener('visibilitychange', onVisibilityChange);
      attachMouseEvents();
    }
  });
  on('beforeTransitionStart', (_s, speed, internal) => {
    if (swiper.autoplay.running) {
      if (internal || !swiper.params.autoplay.disableOnInteraction) {
        swiper.autoplay.pause(speed);
      } else {
        stop();
      }
    }
  });
  on('sliderFirstMove', () => {
    if (swiper.autoplay.running) {
      if (swiper.params.autoplay.disableOnInteraction) {
        stop();
      } else {
        pause();
      }
    }
  });
  on('touchEnd', () => {
    if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) {
      run();
    }
  });
  on('destroy', () => {
    detachMouseEvents();

    if (swiper.autoplay.running) {
      stop();
    }

    const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
    document.removeEventListener('visibilitychange', onVisibilityChange);
  });
  Object.assign(swiper.autoplay, {
    pause,
    run,
    start,
    stop
  });
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/controller/controller.js":
/*!*******************************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/controller/controller.js ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Controller; }
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/utils.js");
/* eslint no-bitwise: ["error", { "allow": [">>"] }] */

function Controller({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    controller: {
      control: undefined,
      inverse: false,
      by: 'slide' // or 'container'

    }
  });
  swiper.controller = {
    control: undefined
  };

  function LinearSpline(x, y) {
    const binarySearch = function search() {
      let maxIndex;
      let minIndex;
      let guess;
      return (array, val) => {
        minIndex = -1;
        maxIndex = array.length;

        while (maxIndex - minIndex > 1) {
          guess = maxIndex + minIndex >> 1;

          if (array[guess] <= val) {
            minIndex = guess;
          } else {
            maxIndex = guess;
          }
        }

        return maxIndex;
      };
    }();

    this.x = x;
    this.y = y;
    this.lastIndex = x.length - 1; // Given an x value (x2), return the expected y2 value:
    // (x1,y1) is the known point before given value,
    // (x3,y3) is the known point after given value.

    let i1;
    let i3;

    this.interpolate = function interpolate(x2) {
      if (!x2) return 0; // Get the indexes of x1 and x3 (the array indexes before and after given x2):

      i3 = binarySearch(this.x, x2);
      i1 = i3 - 1; // We have our indexes i1 & i3, so we can calculate already:
      // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1

      return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
    };

    return this;
  } // xxx: for now i will just save one spline function to to


  function getInterpolateFunction(c) {
    if (!swiper.controller.spline) {
      swiper.controller.spline = swiper.params.loop ? new LinearSpline(swiper.slidesGrid, c.slidesGrid) : new LinearSpline(swiper.snapGrid, c.snapGrid);
    }
  }

  function setTranslate(_t, byController) {
    const controlled = swiper.controller.control;
    let multiplier;
    let controlledTranslate;
    const Swiper = swiper.constructor;

    function setControlledTranslate(c) {
      // this will create an Interpolate function based on the snapGrids
      // x is the Grid of the scrolled scroller and y will be the controlled scroller
      // it makes sense to create this only once and recall it for the interpolation
      // the function does a lot of value caching for performance
      const translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;

      if (swiper.params.controller.by === 'slide') {
        getInterpolateFunction(c); // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
        // but it did not work out

        controlledTranslate = -swiper.controller.spline.interpolate(-translate);
      }

      if (!controlledTranslate || swiper.params.controller.by === 'container') {
        multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
        controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
      }

      if (swiper.params.controller.inverse) {
        controlledTranslate = c.maxTranslate() - controlledTranslate;
      }

      c.updateProgress(controlledTranslate);
      c.setTranslate(controlledTranslate, swiper);
      c.updateActiveIndex();
      c.updateSlidesClasses();
    }

    if (Array.isArray(controlled)) {
      for (let i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTranslate(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTranslate(controlled);
    }
  }

  function setTransition(duration, byController) {
    const Swiper = swiper.constructor;
    const controlled = swiper.controller.control;
    let i;

    function setControlledTransition(c) {
      c.setTransition(duration, swiper);

      if (duration !== 0) {
        c.transitionStart();

        if (c.params.autoHeight) {
          (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => {
            c.updateAutoHeight();
          });
        }

        c.$wrapperEl.transitionEnd(() => {
          if (!controlled) return;

          if (c.params.loop && swiper.params.controller.by === 'slide') {
            c.loopFix();
          }

          c.transitionEnd();
        });
      }
    }

    if (Array.isArray(controlled)) {
      for (i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTransition(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTransition(controlled);
    }
  }

  function removeSpline() {
    if (!swiper.controller.control) return;

    if (swiper.controller.spline) {
      swiper.controller.spline = undefined;
      delete swiper.controller.spline;
    }
  }

  on('beforeInit', () => {
    swiper.controller.control = swiper.params.controller.control;
  });
  on('update', () => {
    removeSpline();
  });
  on('resize', () => {
    removeSpline();
  });
  on('observerUpdate', () => {
    removeSpline();
  });
  on('setTranslate', (_s, translate, byController) => {
    if (!swiper.controller.control) return;
    swiper.controller.setTranslate(translate, byController);
  });
  on('setTransition', (_s, duration, byController) => {
    if (!swiper.controller.control) return;
    swiper.controller.setTransition(duration, byController);
  });
  Object.assign(swiper.controller, {
    setTranslate,
    setTransition
  });
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/effect-cards/effect-cards.js":
/*!***********************************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/effect-cards/effect-cards.js ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ EffectCards; }
/* harmony export */ });
/* harmony import */ var _shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/create-shadow.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/create-shadow.js");
/* harmony import */ var _shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/effect-init.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/effect-init.js");
/* harmony import */ var _shared_effect_target_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/effect-target.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/effect-target.js");
/* harmony import */ var _shared_effect_virtual_transition_end_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/effect-virtual-transition-end.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/effect-virtual-transition-end.js");




function EffectCards({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    cardsEffect: {
      slideShadows: true,
      transformEl: null
    }
  });

  const setTranslate = () => {
    const {
      slides,
      activeIndex
    } = swiper;
    const params = swiper.params.cardsEffect;
    const {
      startTranslate,
      isTouched
    } = swiper.touchEventsData;
    const currentTranslate = swiper.translate;

    for (let i = 0; i < slides.length; i += 1) {
      const $slideEl = slides.eq(i);
      const slideProgress = $slideEl[0].progress;
      const progress = Math.min(Math.max(slideProgress, -4), 4);
      let offset = $slideEl[0].swiperSlideOffset;

      if (swiper.params.centeredSlides && !swiper.params.cssMode) {
        swiper.$wrapperEl.transform(`translateX(${swiper.minTranslate()}px)`);
      }

      if (swiper.params.centeredSlides && swiper.params.cssMode) {
        offset -= slides[0].swiperSlideOffset;
      }

      let tX = swiper.params.cssMode ? -offset - swiper.translate : -offset;
      let tY = 0;
      const tZ = -100 * Math.abs(progress);
      let scale = 1;
      let rotate = -2 * progress;
      let tXAdd = 8 - Math.abs(progress) * 0.75;
      const isSwipeToNext = (i === activeIndex || i === activeIndex - 1) && progress > 0 && progress < 1 && (isTouched || swiper.params.cssMode) && currentTranslate < startTranslate;
      const isSwipeToPrev = (i === activeIndex || i === activeIndex + 1) && progress < 0 && progress > -1 && (isTouched || swiper.params.cssMode) && currentTranslate > startTranslate;

      if (isSwipeToNext || isSwipeToPrev) {
        const subProgress = (1 - Math.abs((Math.abs(progress) - 0.5) / 0.5)) ** 0.5;
        rotate += -28 * progress * subProgress;
        scale += -0.5 * subProgress;
        tXAdd += 96 * subProgress;
        tY = `${-25 * subProgress * Math.abs(progress)}%`;
      }

      if (progress < 0) {
        // next
        tX = `calc(${tX}px + (${tXAdd * Math.abs(progress)}%))`;
      } else if (progress > 0) {
        // prev
        tX = `calc(${tX}px + (-${tXAdd * Math.abs(progress)}%))`;
      } else {
        tX = `${tX}px`;
      }

      if (!swiper.isHorizontal()) {
        const prevY = tY;
        tY = tX;
        tX = prevY;
      }

      const scaleString = progress < 0 ? `${1 + (1 - scale) * progress}` : `${1 - (1 - scale) * progress}`;
      const transform = `
        translate3d(${tX}, ${tY}, ${tZ}px)
        rotateZ(${rotate}deg)
        scale(${scaleString})
      `;

      if (params.slideShadows) {
        // Set shadows
        let $shadowEl = $slideEl.find('.swiper-slide-shadow');

        if ($shadowEl.length === 0) {
          $shadowEl = (0,_shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__.default)(params, $slideEl);
        }

        if ($shadowEl.length) $shadowEl[0].style.opacity = Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1);
      }

      $slideEl[0].style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
      const $targetEl = (0,_shared_effect_target_js__WEBPACK_IMPORTED_MODULE_2__.default)(params, $slideEl);
      $targetEl.transform(transform);
    }
  };

  const setTransition = duration => {
    const {
      transformEl
    } = swiper.params.cardsEffect;
    const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
    $transitionElements.transition(duration).find('.swiper-slide-shadow').transition(duration);
    (0,_shared_effect_virtual_transition_end_js__WEBPACK_IMPORTED_MODULE_3__.default)({
      swiper,
      duration,
      transformEl
    });
  };

  (0,_shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__.default)({
    effect: 'cards',
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => true,
    overwriteParams: () => ({
      watchSlidesProgress: true,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/effect-coverflow/effect-coverflow.js":
/*!*******************************************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/effect-coverflow/effect-coverflow.js ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ EffectCoverflow; }
/* harmony export */ });
/* harmony import */ var _shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/create-shadow.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/create-shadow.js");
/* harmony import */ var _shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/effect-init.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/effect-init.js");
/* harmony import */ var _shared_effect_target_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/effect-target.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/effect-target.js");



function EffectCoverflow({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      scale: 1,
      modifier: 1,
      slideShadows: true,
      transformEl: null
    }
  });

  const setTranslate = () => {
    const {
      width: swiperWidth,
      height: swiperHeight,
      slides,
      slidesSizesGrid
    } = swiper;
    const params = swiper.params.coverflowEffect;
    const isHorizontal = swiper.isHorizontal();
    const transform = swiper.translate;
    const center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
    const rotate = isHorizontal ? params.rotate : -params.rotate;
    const translate = params.depth; // Each slide offset from center

    for (let i = 0, length = slides.length; i < length; i += 1) {
      const $slideEl = slides.eq(i);
      const slideSize = slidesSizesGrid[i];
      const slideOffset = $slideEl[0].swiperSlideOffset;
      const offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * params.modifier;
      let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
      let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier; // var rotateZ = 0

      let translateZ = -translate * Math.abs(offsetMultiplier);
      let stretch = params.stretch; // Allow percentage to make a relative stretch for responsive sliders

      if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) {
        stretch = parseFloat(params.stretch) / 100 * slideSize;
      }

      let translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
      let translateX = isHorizontal ? stretch * offsetMultiplier : 0;
      let scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier); // Fix for ultra small values

      if (Math.abs(translateX) < 0.001) translateX = 0;
      if (Math.abs(translateY) < 0.001) translateY = 0;
      if (Math.abs(translateZ) < 0.001) translateZ = 0;
      if (Math.abs(rotateY) < 0.001) rotateY = 0;
      if (Math.abs(rotateX) < 0.001) rotateX = 0;
      if (Math.abs(scale) < 0.001) scale = 0;
      const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
      const $targetEl = (0,_shared_effect_target_js__WEBPACK_IMPORTED_MODULE_2__.default)(params, $slideEl);
      $targetEl.transform(slideTransform);
      $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;

      if (params.slideShadows) {
        // Set shadows
        let $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
        let $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

        if ($shadowBeforeEl.length === 0) {
          $shadowBeforeEl = (0,_shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__.default)(params, $slideEl, isHorizontal ? 'left' : 'top');
        }

        if ($shadowAfterEl.length === 0) {
          $shadowAfterEl = (0,_shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__.default)(params, $slideEl, isHorizontal ? 'right' : 'bottom');
        }

        if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
        if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
      }
    }
  };

  const setTransition = duration => {
    const {
      transformEl
    } = swiper.params.coverflowEffect;
    const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
    $transitionElements.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
  };

  (0,_shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__.default)({
    effect: 'coverflow',
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => true,
    overwriteParams: () => ({
      watchSlidesProgress: true
    })
  });
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/effect-creative/effect-creative.js":
/*!*****************************************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/effect-creative/effect-creative.js ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ EffectCreative; }
/* harmony export */ });
/* harmony import */ var _shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/create-shadow.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/create-shadow.js");
/* harmony import */ var _shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/effect-init.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/effect-init.js");
/* harmony import */ var _shared_effect_target_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/effect-target.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/effect-target.js");
/* harmony import */ var _shared_effect_virtual_transition_end_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/effect-virtual-transition-end.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/effect-virtual-transition-end.js");




function EffectCreative({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    creativeEffect: {
      transformEl: null,
      limitProgress: 1,
      shadowPerProgress: false,
      progressMultiplier: 1,
      perspective: true,
      prev: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      },
      next: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      }
    }
  });

  const getTranslateValue = value => {
    if (typeof value === 'string') return value;
    return `${value}px`;
  };

  const setTranslate = () => {
    const {
      slides
    } = swiper;
    const params = swiper.params.creativeEffect;
    const {
      progressMultiplier: multiplier
    } = params;

    for (let i = 0; i < slides.length; i += 1) {
      const $slideEl = slides.eq(i);
      const slideProgress = $slideEl[0].progress;
      const progress = Math.min(Math.max($slideEl[0].progress, -params.limitProgress), params.limitProgress);
      const offset = $slideEl[0].swiperSlideOffset;
      const t = [swiper.params.cssMode ? -offset - swiper.translate : -offset, 0, 0];
      const r = [0, 0, 0];
      let custom = false;

      if (!swiper.isHorizontal()) {
        t[1] = t[0];
        t[0] = 0;
      }

      let data = {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        scale: 1,
        opacity: 1
      };

      if (progress < 0) {
        data = params.next;
        custom = true;
      } else if (progress > 0) {
        data = params.prev;
        custom = true;
      } // set translate


      t.forEach((value, index) => {
        t[index] = `calc(${value}px + (${getTranslateValue(data.translate[index])} * ${Math.abs(progress * multiplier)}))`;
      }); // set rotates

      r.forEach((value, index) => {
        r[index] = data.rotate[index] * Math.abs(progress * multiplier);
      });
      $slideEl[0].style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
      const translateString = t.join(', ');
      const rotateString = `rotateX(${r[0]}deg) rotateY(${r[1]}deg) rotateZ(${r[2]}deg)`;
      const scaleString = progress < 0 ? `scale(${1 + (1 - data.scale) * progress * multiplier})` : `scale(${1 - (1 - data.scale) * progress * multiplier})`;
      const opacityString = progress < 0 ? 1 + (1 - data.opacity) * progress * multiplier : 1 - (1 - data.opacity) * progress * multiplier;
      const transform = `translate3d(${translateString}) ${rotateString} ${scaleString}`; // Set shadows

      if (custom && data.shadow || !custom) {
        let $shadowEl = $slideEl.children('.swiper-slide-shadow');

        if ($shadowEl.length === 0 && data.shadow) {
          $shadowEl = (0,_shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__.default)(params, $slideEl);
        }

        if ($shadowEl.length) {
          const shadowOpacity = params.shadowPerProgress ? progress * (1 / params.limitProgress) : progress;
          $shadowEl[0].style.opacity = Math.min(Math.max(Math.abs(shadowOpacity), 0), 1);
        }
      }

      const $targetEl = (0,_shared_effect_target_js__WEBPACK_IMPORTED_MODULE_2__.default)(params, $slideEl);
      $targetEl.transform(transform).css({
        opacity: opacityString
      });

      if (data.origin) {
        $targetEl.css('transform-origin', data.origin);
      }
    }
  };

  const setTransition = duration => {
    const {
      transformEl
    } = swiper.params.creativeEffect;
    const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
    $transitionElements.transition(duration).find('.swiper-slide-shadow').transition(duration);
    (0,_shared_effect_virtual_transition_end_js__WEBPACK_IMPORTED_MODULE_3__.default)({
      swiper,
      duration,
      transformEl,
      allSlides: true
    });
  };

  (0,_shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__.default)({
    effect: 'creative',
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => swiper.params.creativeEffect.perspective,
    overwriteParams: () => ({
      watchSlidesProgress: true,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/effect-cube/effect-cube.js":
/*!*********************************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/effect-cube/effect-cube.js ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ EffectCube; }
/* harmony export */ });
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/dom.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/dom.js");
/* harmony import */ var _shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/effect-init.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/effect-init.js");


function EffectCube({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    cubeEffect: {
      slideShadows: true,
      shadow: true,
      shadowOffset: 20,
      shadowScale: 0.94
    }
  });

  const setTranslate = () => {
    const {
      $el,
      $wrapperEl,
      slides,
      width: swiperWidth,
      height: swiperHeight,
      rtlTranslate: rtl,
      size: swiperSize,
      browser
    } = swiper;
    const params = swiper.params.cubeEffect;
    const isHorizontal = swiper.isHorizontal();
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    let wrapperRotate = 0;
    let $cubeShadowEl;

    if (params.shadow) {
      if (isHorizontal) {
        $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');

        if ($cubeShadowEl.length === 0) {
          $cubeShadowEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__.default)('<div class="swiper-cube-shadow"></div>');
          $wrapperEl.append($cubeShadowEl);
        }

        $cubeShadowEl.css({
          height: `${swiperWidth}px`
        });
      } else {
        $cubeShadowEl = $el.find('.swiper-cube-shadow');

        if ($cubeShadowEl.length === 0) {
          $cubeShadowEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__.default)('<div class="swiper-cube-shadow"></div>');
          $el.append($cubeShadowEl);
        }
      }
    }

    for (let i = 0; i < slides.length; i += 1) {
      const $slideEl = slides.eq(i);
      let slideIndex = i;

      if (isVirtual) {
        slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
      }

      let slideAngle = slideIndex * 90;
      let round = Math.floor(slideAngle / 360);

      if (rtl) {
        slideAngle = -slideAngle;
        round = Math.floor(-slideAngle / 360);
      }

      const progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
      let tx = 0;
      let ty = 0;
      let tz = 0;

      if (slideIndex % 4 === 0) {
        tx = -round * 4 * swiperSize;
        tz = 0;
      } else if ((slideIndex - 1) % 4 === 0) {
        tx = 0;
        tz = -round * 4 * swiperSize;
      } else if ((slideIndex - 2) % 4 === 0) {
        tx = swiperSize + round * 4 * swiperSize;
        tz = swiperSize;
      } else if ((slideIndex - 3) % 4 === 0) {
        tx = -swiperSize;
        tz = 3 * swiperSize + swiperSize * 4 * round;
      }

      if (rtl) {
        tx = -tx;
      }

      if (!isHorizontal) {
        ty = tx;
        tx = 0;
      }

      const transform = `rotateX(${isHorizontal ? 0 : -slideAngle}deg) rotateY(${isHorizontal ? slideAngle : 0}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;

      if (progress <= 1 && progress > -1) {
        wrapperRotate = slideIndex * 90 + progress * 90;
        if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
      }

      $slideEl.transform(transform);

      if (params.slideShadows) {
        // Set shadows
        let shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
        let shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

        if (shadowBefore.length === 0) {
          shadowBefore = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__.default)(`<div class="swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}"></div>`);
          $slideEl.append(shadowBefore);
        }

        if (shadowAfter.length === 0) {
          shadowAfter = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__.default)(`<div class="swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}"></div>`);
          $slideEl.append(shadowAfter);
        }

        if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
        if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
      }
    }

    $wrapperEl.css({
      '-webkit-transform-origin': `50% 50% -${swiperSize / 2}px`,
      'transform-origin': `50% 50% -${swiperSize / 2}px`
    });

    if (params.shadow) {
      if (isHorizontal) {
        $cubeShadowEl.transform(`translate3d(0px, ${swiperWidth / 2 + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(90deg) rotateZ(0deg) scale(${params.shadowScale})`);
      } else {
        const shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
        const multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
        const scale1 = params.shadowScale;
        const scale2 = params.shadowScale / multiplier;
        const offset = params.shadowOffset;
        $cubeShadowEl.transform(`scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${swiperHeight / 2 + offset}px, ${-swiperHeight / 2 / scale2}px) rotateX(-90deg)`);
      }
    }

    const zFactor = browser.isSafari || browser.isWebView ? -swiperSize / 2 : 0;
    $wrapperEl.transform(`translate3d(0px,0,${zFactor}px) rotateX(${swiper.isHorizontal() ? 0 : wrapperRotate}deg) rotateY(${swiper.isHorizontal() ? -wrapperRotate : 0}deg)`);
  };

  const setTransition = duration => {
    const {
      $el,
      slides
    } = swiper;
    slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);

    if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
      $el.find('.swiper-cube-shadow').transition(duration);
    }
  };

  (0,_shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__.default)({
    effect: 'cube',
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => true,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      resistanceRatio: 0,
      spaceBetween: 0,
      centeredSlides: false,
      virtualTranslate: true
    })
  });
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/effect-fade/effect-fade.js":
/*!*********************************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/effect-fade/effect-fade.js ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ EffectFade; }
/* harmony export */ });
/* harmony import */ var _shared_effect_init_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/effect-init.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/effect-init.js");
/* harmony import */ var _shared_effect_target_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/effect-target.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/effect-target.js");
/* harmony import */ var _shared_effect_virtual_transition_end_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/effect-virtual-transition-end.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/effect-virtual-transition-end.js");



function EffectFade({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    fadeEffect: {
      crossFade: false,
      transformEl: null
    }
  });

  const setTranslate = () => {
    const {
      slides
    } = swiper;
    const params = swiper.params.fadeEffect;

    for (let i = 0; i < slides.length; i += 1) {
      const $slideEl = swiper.slides.eq(i);
      const offset = $slideEl[0].swiperSlideOffset;
      let tx = -offset;
      if (!swiper.params.virtualTranslate) tx -= swiper.translate;
      let ty = 0;

      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
      }

      const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
      const $targetEl = (0,_shared_effect_target_js__WEBPACK_IMPORTED_MODULE_1__.default)(params, $slideEl);
      $targetEl.css({
        opacity: slideOpacity
      }).transform(`translate3d(${tx}px, ${ty}px, 0px)`);
    }
  };

  const setTransition = duration => {
    const {
      transformEl
    } = swiper.params.fadeEffect;
    const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
    $transitionElements.transition(duration);
    (0,_shared_effect_virtual_transition_end_js__WEBPACK_IMPORTED_MODULE_2__.default)({
      swiper,
      duration,
      transformEl,
      allSlides: true
    });
  };

  (0,_shared_effect_init_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    effect: 'fade',
    swiper,
    on,
    setTranslate,
    setTransition,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      spaceBetween: 0,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/effect-flip/effect-flip.js":
/*!*********************************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/effect-flip/effect-flip.js ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ EffectFlip; }
/* harmony export */ });
/* harmony import */ var _shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/create-shadow.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/create-shadow.js");
/* harmony import */ var _shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/effect-init.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/effect-init.js");
/* harmony import */ var _shared_effect_target_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/effect-target.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/effect-target.js");
/* harmony import */ var _shared_effect_virtual_transition_end_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/effect-virtual-transition-end.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/effect-virtual-transition-end.js");




function EffectFlip({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    flipEffect: {
      slideShadows: true,
      limitRotation: true,
      transformEl: null
    }
  });

  const setTranslate = () => {
    const {
      slides,
      rtlTranslate: rtl
    } = swiper;
    const params = swiper.params.flipEffect;

    for (let i = 0; i < slides.length; i += 1) {
      const $slideEl = slides.eq(i);
      let progress = $slideEl[0].progress;

      if (swiper.params.flipEffect.limitRotation) {
        progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
      }

      const offset = $slideEl[0].swiperSlideOffset;
      const rotate = -180 * progress;
      let rotateY = rotate;
      let rotateX = 0;
      let tx = swiper.params.cssMode ? -offset - swiper.translate : -offset;
      let ty = 0;

      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
        rotateX = -rotateY;
        rotateY = 0;
      } else if (rtl) {
        rotateY = -rotateY;
      }

      $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;

      if (params.slideShadows) {
        // Set shadows
        let shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
        let shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

        if (shadowBefore.length === 0) {
          shadowBefore = (0,_shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__.default)(params, $slideEl, swiper.isHorizontal() ? 'left' : 'top');
        }

        if (shadowAfter.length === 0) {
          shadowAfter = (0,_shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__.default)(params, $slideEl, swiper.isHorizontal() ? 'right' : 'bottom');
        }

        if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
        if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
      }

      const transform = `translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      const $targetEl = (0,_shared_effect_target_js__WEBPACK_IMPORTED_MODULE_2__.default)(params, $slideEl);
      $targetEl.transform(transform);
    }
  };

  const setTransition = duration => {
    const {
      transformEl
    } = swiper.params.flipEffect;
    const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
    $transitionElements.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
    (0,_shared_effect_virtual_transition_end_js__WEBPACK_IMPORTED_MODULE_3__.default)({
      swiper,
      duration,
      transformEl
    });
  };

  (0,_shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__.default)({
    effect: 'flip',
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => true,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      spaceBetween: 0,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/free-mode/free-mode.js":
/*!*****************************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/free-mode/free-mode.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ freeMode; }
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/utils.js");

function freeMode({
  swiper,
  extendParams,
  emit,
  once
}) {
  extendParams({
    freeMode: {
      enabled: false,
      momentum: true,
      momentumRatio: 1,
      momentumBounce: true,
      momentumBounceRatio: 1,
      momentumVelocityRatio: 1,
      sticky: false,
      minimumVelocity: 0.02
    }
  });

  function onTouchMove() {
    const {
      touchEventsData: data,
      touches
    } = swiper; // Velocity

    if (data.velocities.length === 0) {
      data.velocities.push({
        position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
        time: data.touchStartTime
      });
    }

    data.velocities.push({
      position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
      time: (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.now)()
    });
  }

  function onTouchEnd({
    currentPos
  }) {
    const {
      params,
      $wrapperEl,
      rtlTranslate: rtl,
      snapGrid,
      touchEventsData: data
    } = swiper; // Time diff

    const touchEndTime = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.now)();
    const timeDiff = touchEndTime - data.touchStartTime;

    if (currentPos < -swiper.minTranslate()) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }

    if (currentPos > -swiper.maxTranslate()) {
      if (swiper.slides.length < snapGrid.length) {
        swiper.slideTo(snapGrid.length - 1);
      } else {
        swiper.slideTo(swiper.slides.length - 1);
      }

      return;
    }

    if (params.freeMode.momentum) {
      if (data.velocities.length > 1) {
        const lastMoveEvent = data.velocities.pop();
        const velocityEvent = data.velocities.pop();
        const distance = lastMoveEvent.position - velocityEvent.position;
        const time = lastMoveEvent.time - velocityEvent.time;
        swiper.velocity = distance / time;
        swiper.velocity /= 2;

        if (Math.abs(swiper.velocity) < params.freeMode.minimumVelocity) {
          swiper.velocity = 0;
        } // this implies that the user stopped moving a finger then released.
        // There would be no events with distance zero, so the last event is stale.


        if (time > 150 || (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.now)() - lastMoveEvent.time > 300) {
          swiper.velocity = 0;
        }
      } else {
        swiper.velocity = 0;
      }

      swiper.velocity *= params.freeMode.momentumVelocityRatio;
      data.velocities.length = 0;
      let momentumDuration = 1000 * params.freeMode.momentumRatio;
      const momentumDistance = swiper.velocity * momentumDuration;
      let newPosition = swiper.translate + momentumDistance;
      if (rtl) newPosition = -newPosition;
      let doBounce = false;
      let afterBouncePosition;
      const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeMode.momentumBounceRatio;
      let needsLoopFix;

      if (newPosition < swiper.maxTranslate()) {
        if (params.freeMode.momentumBounce) {
          if (newPosition + swiper.maxTranslate() < -bounceAmount) {
            newPosition = swiper.maxTranslate() - bounceAmount;
          }

          afterBouncePosition = swiper.maxTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.maxTranslate();
        }

        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (newPosition > swiper.minTranslate()) {
        if (params.freeMode.momentumBounce) {
          if (newPosition - swiper.minTranslate() > bounceAmount) {
            newPosition = swiper.minTranslate() + bounceAmount;
          }

          afterBouncePosition = swiper.minTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.minTranslate();
        }

        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (params.freeMode.sticky) {
        let nextSlide;

        for (let j = 0; j < snapGrid.length; j += 1) {
          if (snapGrid[j] > -newPosition) {
            nextSlide = j;
            break;
          }
        }

        if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
          newPosition = snapGrid[nextSlide];
        } else {
          newPosition = snapGrid[nextSlide - 1];
        }

        newPosition = -newPosition;
      }

      if (needsLoopFix) {
        once('transitionEnd', () => {
          swiper.loopFix();
        });
      } // Fix duration


      if (swiper.velocity !== 0) {
        if (rtl) {
          momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
        } else {
          momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
        }

        if (params.freeMode.sticky) {
          // If freeMode.sticky is active and the user ends a swipe with a slow-velocity
          // event, then durations can be 20+ seconds to slide one (or zero!) slides.
          // It's easy to see this when simulating touch with mouse events. To fix this,
          // limit single-slide swipes to the default slide duration. This also has the
          // nice side effect of matching slide speed if the user stopped moving before
          // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
          // For faster swipes, also apply limits (albeit higher ones).
          const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
          const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];

          if (moveDistance < currentSlideSize) {
            momentumDuration = params.speed;
          } else if (moveDistance < 2 * currentSlideSize) {
            momentumDuration = params.speed * 1.5;
          } else {
            momentumDuration = params.speed * 2.5;
          }
        }
      } else if (params.freeMode.sticky) {
        swiper.slideToClosest();
        return;
      }

      if (params.freeMode.momentumBounce && doBounce) {
        swiper.updateProgress(afterBouncePosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        swiper.animating = true;
        $wrapperEl.transitionEnd(() => {
          if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
          emit('momentumBounce');
          swiper.setTransition(params.speed);
          setTimeout(() => {
            swiper.setTranslate(afterBouncePosition);
            $wrapperEl.transitionEnd(() => {
              if (!swiper || swiper.destroyed) return;
              swiper.transitionEnd();
            });
          }, 0);
        });
      } else if (swiper.velocity) {
        emit('_freeModeNoMomentumRelease');
        swiper.updateProgress(newPosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);

        if (!swiper.animating) {
          swiper.animating = true;
          $wrapperEl.transitionEnd(() => {
            if (!swiper || swiper.destroyed) return;
            swiper.transitionEnd();
          });
        }
      } else {
        swiper.updateProgress(newPosition);
      }

      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    } else if (params.freeMode.sticky) {
      swiper.slideToClosest();
      return;
    } else if (params.freeMode) {
      emit('_freeModeNoMomentumRelease');
    }

    if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {
      swiper.updateProgress();
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
  }

  Object.assign(swiper, {
    freeMode: {
      onTouchMove,
      onTouchEnd
    }
  });
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/grid/grid.js":
/*!*******************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/grid/grid.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Grid; }
/* harmony export */ });
function Grid({
  swiper,
  extendParams
}) {
  extendParams({
    grid: {
      rows: 1,
      fill: 'column'
    }
  });
  let slidesNumberEvenToRows;
  let slidesPerRow;
  let numFullColumns;

  const initSlides = slidesLength => {
    const {
      slidesPerView
    } = swiper.params;
    const {
      rows,
      fill
    } = swiper.params.grid;
    slidesPerRow = slidesNumberEvenToRows / rows;
    numFullColumns = Math.floor(slidesLength / rows);

    if (Math.floor(slidesLength / rows) === slidesLength / rows) {
      slidesNumberEvenToRows = slidesLength;
    } else {
      slidesNumberEvenToRows = Math.ceil(slidesLength / rows) * rows;
    }

    if (slidesPerView !== 'auto' && fill === 'row') {
      slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, slidesPerView * rows);
    }
  };

  const updateSlide = (i, slide, slidesLength, getDirectionLabel) => {
    const {
      slidesPerGroup,
      spaceBetween
    } = swiper.params;
    const {
      rows,
      fill
    } = swiper.params.grid; // Set slides order

    let newSlideOrderIndex;
    let column;
    let row;

    if (fill === 'row' && slidesPerGroup > 1) {
      const groupIndex = Math.floor(i / (slidesPerGroup * rows));
      const slideIndexInGroup = i - rows * slidesPerGroup * groupIndex;
      const columnsInGroup = groupIndex === 0 ? slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * rows * slidesPerGroup) / rows), slidesPerGroup);
      row = Math.floor(slideIndexInGroup / columnsInGroup);
      column = slideIndexInGroup - row * columnsInGroup + groupIndex * slidesPerGroup;
      newSlideOrderIndex = column + row * slidesNumberEvenToRows / rows;
      slide.css({
        '-webkit-order': newSlideOrderIndex,
        order: newSlideOrderIndex
      });
    } else if (fill === 'column') {
      column = Math.floor(i / rows);
      row = i - column * rows;

      if (column > numFullColumns || column === numFullColumns && row === rows - 1) {
        row += 1;

        if (row >= rows) {
          row = 0;
          column += 1;
        }
      }
    } else {
      row = Math.floor(i / slidesPerRow);
      column = i - row * slidesPerRow;
    }

    slide.css(getDirectionLabel('margin-top'), row !== 0 ? spaceBetween && `${spaceBetween}px` : '');
  };

  const updateWrapperSize = (slideSize, snapGrid, getDirectionLabel) => {
    const {
      spaceBetween,
      centeredSlides,
      roundLengths
    } = swiper.params;
    const {
      rows
    } = swiper.params.grid;
    swiper.virtualSize = (slideSize + spaceBetween) * slidesNumberEvenToRows;
    swiper.virtualSize = Math.ceil(swiper.virtualSize / rows) - spaceBetween;
    swiper.$wrapperEl.css({
      [getDirectionLabel('width')]: `${swiper.virtualSize + spaceBetween}px`
    });

    if (centeredSlides) {
      snapGrid.splice(0, snapGrid.length);
      const newSlidesGrid = [];

      for (let i = 0; i < snapGrid.length; i += 1) {
        let slidesGridItem = snapGrid[i];
        if (roundLengths) slidesGridItem = Math.floor(slidesGridItem);
        if (snapGrid[i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
      }

      snapGrid.push(...newSlidesGrid);
    }
  };

  swiper.grid = {
    initSlides,
    updateSlide,
    updateWrapperSize
  };
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/hash-navigation/hash-navigation.js":
/*!*****************************************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/hash-navigation/hash-navigation.js ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ HashNavigation; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "../../../AppVuejs/wbu-atomique/node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/dom.js");


function HashNavigation({
  swiper,
  extendParams,
  emit,
  on
}) {
  let initialized = false;
  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  extendParams({
    hashNavigation: {
      enabled: false,
      replaceState: false,
      watchState: false
    }
  });

  const onHashChange = () => {
    emit('hashChange');
    const newHash = document.location.hash.replace('#', '');
    const activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');

    if (newHash !== activeSlideHash) {
      const newIndex = swiper.$wrapperEl.children(`.${swiper.params.slideClass}[data-hash="${newHash}"]`).index();
      if (typeof newIndex === 'undefined') return;
      swiper.slideTo(newIndex);
    }
  };

  const setHash = () => {
    if (!initialized || !swiper.params.hashNavigation.enabled) return;

    if (swiper.params.hashNavigation.replaceState && window.history && window.history.replaceState) {
      window.history.replaceState(null, null, `#${swiper.slides.eq(swiper.activeIndex).attr('data-hash')}` || '');
      emit('hashSet');
    } else {
      const slide = swiper.slides.eq(swiper.activeIndex);
      const hash = slide.attr('data-hash') || slide.attr('data-history');
      document.location.hash = hash || '';
      emit('hashSet');
    }
  };

  const init = () => {
    if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
    initialized = true;
    const hash = document.location.hash.replace('#', '');

    if (hash) {
      const speed = 0;

      for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
        const slide = swiper.slides.eq(i);
        const slideHash = slide.attr('data-hash') || slide.attr('data-history');

        if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
          const index = slide.index();
          swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
        }
      }
    }

    if (swiper.params.hashNavigation.watchState) {
      (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__.default)(window).on('hashchange', onHashChange);
    }
  };

  const destroy = () => {
    if (swiper.params.hashNavigation.watchState) {
      (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__.default)(window).off('hashchange', onHashChange);
    }
  };

  on('init', () => {
    if (swiper.params.hashNavigation.enabled) {
      init();
    }
  });
  on('destroy', () => {
    if (swiper.params.hashNavigation.enabled) {
      destroy();
    }
  });
  on('transitionEnd _freeModeNoMomentumRelease', () => {
    if (initialized) {
      setHash();
    }
  });
  on('slideChange', () => {
    if (initialized && swiper.params.cssMode) {
      setHash();
    }
  });
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/history/history.js":
/*!*************************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/history/history.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ History; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "../../../AppVuejs/wbu-atomique/node_modules/ssr-window/ssr-window.esm.js");

function History({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    history: {
      enabled: false,
      root: '',
      replaceState: false,
      key: 'slides'
    }
  });
  let initialized = false;
  let paths = {};

  const slugify = text => {
    return text.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
  };

  const getPathValues = urlOverride => {
    const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
    let location;

    if (urlOverride) {
      location = new URL(urlOverride);
    } else {
      location = window.location;
    }

    const pathArray = location.pathname.slice(1).split('/').filter(part => part !== '');
    const total = pathArray.length;
    const key = pathArray[total - 2];
    const value = pathArray[total - 1];
    return {
      key,
      value
    };
  };

  const setHistory = (key, index) => {
    const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
    if (!initialized || !swiper.params.history.enabled) return;
    let location;

    if (swiper.params.url) {
      location = new URL(swiper.params.url);
    } else {
      location = window.location;
    }

    const slide = swiper.slides.eq(index);
    let value = slugify(slide.attr('data-history'));

    if (swiper.params.history.root.length > 0) {
      let root = swiper.params.history.root;
      if (root[root.length - 1] === '/') root = root.slice(0, root.length - 1);
      value = `${root}/${key}/${value}`;
    } else if (!location.pathname.includes(key)) {
      value = `${key}/${value}`;
    }

    const currentState = window.history.state;

    if (currentState && currentState.value === value) {
      return;
    }

    if (swiper.params.history.replaceState) {
      window.history.replaceState({
        value
      }, null, value);
    } else {
      window.history.pushState({
        value
      }, null, value);
    }
  };

  const scrollToSlide = (speed, value, runCallbacks) => {
    if (value) {
      for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
        const slide = swiper.slides.eq(i);
        const slideHistory = slugify(slide.attr('data-history'));

        if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
          const index = slide.index();
          swiper.slideTo(index, speed, runCallbacks);
        }
      }
    } else {
      swiper.slideTo(0, speed, runCallbacks);
    }
  };

  const setHistoryPopState = () => {
    paths = getPathValues(swiper.params.url);
    scrollToSlide(swiper.params.speed, swiper.paths.value, false);
  };

  const init = () => {
    const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
    if (!swiper.params.history) return;

    if (!window.history || !window.history.pushState) {
      swiper.params.history.enabled = false;
      swiper.params.hashNavigation.enabled = true;
      return;
    }

    initialized = true;
    paths = getPathValues(swiper.params.url);
    if (!paths.key && !paths.value) return;
    scrollToSlide(0, paths.value, swiper.params.runCallbacksOnInit);

    if (!swiper.params.history.replaceState) {
      window.addEventListener('popstate', setHistoryPopState);
    }
  };

  const destroy = () => {
    const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();

    if (!swiper.params.history.replaceState) {
      window.removeEventListener('popstate', setHistoryPopState);
    }
  };

  on('init', () => {
    if (swiper.params.history.enabled) {
      init();
    }
  });
  on('destroy', () => {
    if (swiper.params.history.enabled) {
      destroy();
    }
  });
  on('transitionEnd _freeModeNoMomentumRelease', () => {
    if (initialized) {
      setHistory(swiper.params.history.key, swiper.activeIndex);
    }
  });
  on('slideChange', () => {
    if (initialized && swiper.params.cssMode) {
      setHistory(swiper.params.history.key, swiper.activeIndex);
    }
  });
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/keyboard/keyboard.js":
/*!***************************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/keyboard/keyboard.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Keyboard; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "../../../AppVuejs/wbu-atomique/node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/dom.js");
/* eslint-disable consistent-return */


function Keyboard({
  swiper,
  extendParams,
  on,
  emit
}) {
  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  swiper.keyboard = {
    enabled: false
  };
  extendParams({
    keyboard: {
      enabled: false,
      onlyInViewport: true,
      pageUpDown: true
    }
  });

  function handle(event) {
    if (!swiper.enabled) return;
    const {
      rtlTranslate: rtl
    } = swiper;
    let e = event;
    if (e.originalEvent) e = e.originalEvent; // jquery fix

    const kc = e.keyCode || e.charCode;
    const pageUpDown = swiper.params.keyboard.pageUpDown;
    const isPageUp = pageUpDown && kc === 33;
    const isPageDown = pageUpDown && kc === 34;
    const isArrowLeft = kc === 37;
    const isArrowRight = kc === 39;
    const isArrowUp = kc === 38;
    const isArrowDown = kc === 40; // Directions locks

    if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) {
      return false;
    }

    if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) {
      return false;
    }

    if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
      return undefined;
    }

    if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
      return undefined;
    }

    if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
      let inView = false; // Check that swiper should be inside of visible area of window

      if (swiper.$el.parents(`.${swiper.params.slideClass}`).length > 0 && swiper.$el.parents(`.${swiper.params.slideActiveClass}`).length === 0) {
        return undefined;
      }

      const $el = swiper.$el;
      const swiperWidth = $el[0].clientWidth;
      const swiperHeight = $el[0].clientHeight;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const swiperOffset = swiper.$el.offset();
      if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
      const swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiperWidth, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiperHeight], [swiperOffset.left + swiperWidth, swiperOffset.top + swiperHeight]];

      for (let i = 0; i < swiperCoord.length; i += 1) {
        const point = swiperCoord[i];

        if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
          if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line

          inView = true;
        }
      }

      if (!inView) return undefined;
    }

    if (swiper.isHorizontal()) {
      if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      }

      if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
      if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
    } else {
      if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      }

      if (isPageDown || isArrowDown) swiper.slideNext();
      if (isPageUp || isArrowUp) swiper.slidePrev();
    }

    emit('keyPress', kc);
    return undefined;
  }

  function enable() {
    if (swiper.keyboard.enabled) return;
    (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__.default)(document).on('keydown', handle);
    swiper.keyboard.enabled = true;
  }

  function disable() {
    if (!swiper.keyboard.enabled) return;
    (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__.default)(document).off('keydown', handle);
    swiper.keyboard.enabled = false;
  }

  on('init', () => {
    if (swiper.params.keyboard.enabled) {
      enable();
    }
  });
  on('destroy', () => {
    if (swiper.keyboard.enabled) {
      disable();
    }
  });
  Object.assign(swiper.keyboard, {
    enable,
    disable
  });
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/lazy/lazy.js":
/*!*******************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/lazy/lazy.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Lazy; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "../../../AppVuejs/wbu-atomique/node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/dom.js");


function Lazy({
  swiper,
  extendParams,
  on,
  emit
}) {
  extendParams({
    lazy: {
      checkInView: false,
      enabled: false,
      loadPrevNext: false,
      loadPrevNextAmount: 1,
      loadOnTransitionStart: false,
      scrollingElement: '',
      elementClass: 'swiper-lazy',
      loadingClass: 'swiper-lazy-loading',
      loadedClass: 'swiper-lazy-loaded',
      preloaderClass: 'swiper-lazy-preloader'
    }
  });
  swiper.lazy = {};
  let scrollHandlerAttached = false;
  let initialImageLoaded = false;

  function loadInSlide(index, loadInDuplicate = true) {
    const params = swiper.params.lazy;
    if (typeof index === 'undefined') return;
    if (swiper.slides.length === 0) return;
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    const $slideEl = isVirtual ? swiper.$wrapperEl.children(`.${swiper.params.slideClass}[data-swiper-slide-index="${index}"]`) : swiper.slides.eq(index);
    const $images = $slideEl.find(`.${params.elementClass}:not(.${params.loadedClass}):not(.${params.loadingClass})`);

    if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
      $images.push($slideEl[0]);
    }

    if ($images.length === 0) return;
    $images.each(imageEl => {
      const $imageEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__.default)(imageEl);
      $imageEl.addClass(params.loadingClass);
      const background = $imageEl.attr('data-background');
      const src = $imageEl.attr('data-src');
      const srcset = $imageEl.attr('data-srcset');
      const sizes = $imageEl.attr('data-sizes');
      const $pictureEl = $imageEl.parent('picture');
      swiper.loadImage($imageEl[0], src || background, srcset, sizes, false, () => {
        if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper && !swiper.params || swiper.destroyed) return;

        if (background) {
          $imageEl.css('background-image', `url("${background}")`);
          $imageEl.removeAttr('data-background');
        } else {
          if (srcset) {
            $imageEl.attr('srcset', srcset);
            $imageEl.removeAttr('data-srcset');
          }

          if (sizes) {
            $imageEl.attr('sizes', sizes);
            $imageEl.removeAttr('data-sizes');
          }

          if ($pictureEl.length) {
            $pictureEl.children('source').each(sourceEl => {
              const $source = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__.default)(sourceEl);

              if ($source.attr('data-srcset')) {
                $source.attr('srcset', $source.attr('data-srcset'));
                $source.removeAttr('data-srcset');
              }
            });
          }

          if (src) {
            $imageEl.attr('src', src);
            $imageEl.removeAttr('data-src');
          }
        }

        $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
        $slideEl.find(`.${params.preloaderClass}`).remove();

        if (swiper.params.loop && loadInDuplicate) {
          const slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');

          if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
            const originalSlide = swiper.$wrapperEl.children(`[data-swiper-slide-index="${slideOriginalIndex}"]:not(.${swiper.params.slideDuplicateClass})`);
            loadInSlide(originalSlide.index(), false);
          } else {
            const duplicatedSlide = swiper.$wrapperEl.children(`.${swiper.params.slideDuplicateClass}[data-swiper-slide-index="${slideOriginalIndex}"]`);
            loadInSlide(duplicatedSlide.index(), false);
          }
        }

        emit('lazyImageReady', $slideEl[0], $imageEl[0]);

        if (swiper.params.autoHeight) {
          swiper.updateAutoHeight();
        }
      });
      emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
    });
  }

  function load() {
    const {
      $wrapperEl,
      params: swiperParams,
      slides,
      activeIndex
    } = swiper;
    const isVirtual = swiper.virtual && swiperParams.virtual.enabled;
    const params = swiperParams.lazy;
    let slidesPerView = swiperParams.slidesPerView;

    if (slidesPerView === 'auto') {
      slidesPerView = 0;
    }

    function slideExist(index) {
      if (isVirtual) {
        if ($wrapperEl.children(`.${swiperParams.slideClass}[data-swiper-slide-index="${index}"]`).length) {
          return true;
        }
      } else if (slides[index]) return true;

      return false;
    }

    function slideIndex(slideEl) {
      if (isVirtual) {
        return (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__.default)(slideEl).attr('data-swiper-slide-index');
      }

      return (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__.default)(slideEl).index();
    }

    if (!initialImageLoaded) initialImageLoaded = true;

    if (swiper.params.watchSlidesProgress) {
      $wrapperEl.children(`.${swiperParams.slideVisibleClass}`).each(slideEl => {
        const index = isVirtual ? (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__.default)(slideEl).attr('data-swiper-slide-index') : (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__.default)(slideEl).index();
        loadInSlide(index);
      });
    } else if (slidesPerView > 1) {
      for (let i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
        if (slideExist(i)) loadInSlide(i);
      }
    } else {
      loadInSlide(activeIndex);
    }

    if (params.loadPrevNext) {
      if (slidesPerView > 1 || params.loadPrevNextAmount && params.loadPrevNextAmount > 1) {
        const amount = params.loadPrevNextAmount;
        const spv = slidesPerView;
        const maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
        const minIndex = Math.max(activeIndex - Math.max(spv, amount), 0); // Next Slides

        for (let i = activeIndex + slidesPerView; i < maxIndex; i += 1) {
          if (slideExist(i)) loadInSlide(i);
        } // Prev Slides


        for (let i = minIndex; i < activeIndex; i += 1) {
          if (slideExist(i)) loadInSlide(i);
        }
      } else {
        const nextSlide = $wrapperEl.children(`.${swiperParams.slideNextClass}`);
        if (nextSlide.length > 0) loadInSlide(slideIndex(nextSlide));
        const prevSlide = $wrapperEl.children(`.${swiperParams.slidePrevClass}`);
        if (prevSlide.length > 0) loadInSlide(slideIndex(prevSlide));
      }
    }
  }

  function checkInViewOnLoad() {
    const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
    if (!swiper || swiper.destroyed) return;
    const $scrollElement = swiper.params.lazy.scrollingElement ? (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__.default)(swiper.params.lazy.scrollingElement) : (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__.default)(window);
    const isWindow = $scrollElement[0] === window;
    const scrollElementWidth = isWindow ? window.innerWidth : $scrollElement[0].offsetWidth;
    const scrollElementHeight = isWindow ? window.innerHeight : $scrollElement[0].offsetHeight;
    const swiperOffset = swiper.$el.offset();
    const {
      rtlTranslate: rtl
    } = swiper;
    let inView = false;
    if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
    const swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiper.width, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiper.height], [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height]];

    for (let i = 0; i < swiperCoord.length; i += 1) {
      const point = swiperCoord[i];

      if (point[0] >= 0 && point[0] <= scrollElementWidth && point[1] >= 0 && point[1] <= scrollElementHeight) {
        if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line

        inView = true;
      }
    }

    const passiveListener = swiper.touchEvents.start === 'touchstart' && swiper.support.passiveListener && swiper.params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;

    if (inView) {
      load();
      $scrollElement.off('scroll', checkInViewOnLoad, passiveListener);
    } else if (!scrollHandlerAttached) {
      scrollHandlerAttached = true;
      $scrollElement.on('scroll', checkInViewOnLoad, passiveListener);
    }
  }

  on('beforeInit', () => {
    if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
      swiper.params.preloadImages = false;
    }
  });
  on('init', () => {
    if (swiper.params.lazy.enabled) {
      if (swiper.params.lazy.checkInView) {
        checkInViewOnLoad();
      } else {
        load();
      }
    }
  });
  on('scroll', () => {
    if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.freeMode.sticky) {
      load();
    }
  });
  on('scrollbarDragMove resize _freeModeNoMomentumRelease', () => {
    if (swiper.params.lazy.enabled) {
      if (swiper.params.lazy.checkInView) {
        checkInViewOnLoad();
      } else {
        load();
      }
    }
  });
  on('transitionStart', () => {
    if (swiper.params.lazy.enabled) {
      if (swiper.params.lazy.loadOnTransitionStart || !swiper.params.lazy.loadOnTransitionStart && !initialImageLoaded) {
        if (swiper.params.lazy.checkInView) {
          checkInViewOnLoad();
        } else {
          load();
        }
      }
    }
  });
  on('transitionEnd', () => {
    if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
      if (swiper.params.lazy.checkInView) {
        checkInViewOnLoad();
      } else {
        load();
      }
    }
  });
  on('slideChange', () => {
    const {
      lazy,
      cssMode,
      watchSlidesProgress,
      touchReleaseOnEdges,
      resistanceRatio
    } = swiper.params;

    if (lazy.enabled && (cssMode || watchSlidesProgress && (touchReleaseOnEdges || resistanceRatio === 0))) {
      load();
    }
  });
  Object.assign(swiper.lazy, {
    load,
    loadInSlide
  });
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/manipulation/manipulation.js":
/*!***********************************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/manipulation/manipulation.js ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Manipulation; }
/* harmony export */ });
/* harmony import */ var _methods_appendSlide_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./methods/appendSlide.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/manipulation/methods/appendSlide.js");
/* harmony import */ var _methods_prependSlide_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./methods/prependSlide.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/manipulation/methods/prependSlide.js");
/* harmony import */ var _methods_addSlide_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./methods/addSlide.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/manipulation/methods/addSlide.js");
/* harmony import */ var _methods_removeSlide_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./methods/removeSlide.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/manipulation/methods/removeSlide.js");
/* harmony import */ var _methods_removeAllSlides_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./methods/removeAllSlides.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/manipulation/methods/removeAllSlides.js");





function Manipulation({
  swiper
}) {
  Object.assign(swiper, {
    appendSlide: _methods_appendSlide_js__WEBPACK_IMPORTED_MODULE_0__.default.bind(swiper),
    prependSlide: _methods_prependSlide_js__WEBPACK_IMPORTED_MODULE_1__.default.bind(swiper),
    addSlide: _methods_addSlide_js__WEBPACK_IMPORTED_MODULE_2__.default.bind(swiper),
    removeSlide: _methods_removeSlide_js__WEBPACK_IMPORTED_MODULE_3__.default.bind(swiper),
    removeAllSlides: _methods_removeAllSlides_js__WEBPACK_IMPORTED_MODULE_4__.default.bind(swiper)
  });
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/manipulation/methods/addSlide.js":
/*!***************************************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/manipulation/methods/addSlide.js ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ addSlide; }
/* harmony export */ });
function addSlide(index, slides) {
  const swiper = this;
  const {
    $wrapperEl,
    params,
    activeIndex
  } = swiper;
  let activeIndexBuffer = activeIndex;

  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
    swiper.slides = $wrapperEl.children(`.${params.slideClass}`);
  }

  const baseLength = swiper.slides.length;

  if (index <= 0) {
    swiper.prependSlide(slides);
    return;
  }

  if (index >= baseLength) {
    swiper.appendSlide(slides);
    return;
  }

  let newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
  const slidesBuffer = [];

  for (let i = baseLength - 1; i >= index; i -= 1) {
    const currentSlide = swiper.slides.eq(i);
    currentSlide.remove();
    slidesBuffer.unshift(currentSlide);
  }

  if (typeof slides === 'object' && 'length' in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) $wrapperEl.append(slides[i]);
    }

    newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
  } else {
    $wrapperEl.append(slides);
  }

  for (let i = 0; i < slidesBuffer.length; i += 1) {
    $wrapperEl.append(slidesBuffer[i]);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!params.observer) {
    swiper.update();
  }

  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/manipulation/methods/appendSlide.js":
/*!******************************************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/manipulation/methods/appendSlide.js ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ appendSlide; }
/* harmony export */ });
function appendSlide(slides) {
  const swiper = this;
  const {
    $wrapperEl,
    params
  } = swiper;

  if (params.loop) {
    swiper.loopDestroy();
  }

  if (typeof slides === 'object' && 'length' in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) $wrapperEl.append(slides[i]);
    }
  } else {
    $wrapperEl.append(slides);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!params.observer) {
    swiper.update();
  }
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/manipulation/methods/prependSlide.js":
/*!*******************************************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/manipulation/methods/prependSlide.js ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ prependSlide; }
/* harmony export */ });
function prependSlide(slides) {
  const swiper = this;
  const {
    params,
    $wrapperEl,
    activeIndex
  } = swiper;

  if (params.loop) {
    swiper.loopDestroy();
  }

  let newActiveIndex = activeIndex + 1;

  if (typeof slides === 'object' && 'length' in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) $wrapperEl.prepend(slides[i]);
    }

    newActiveIndex = activeIndex + slides.length;
  } else {
    $wrapperEl.prepend(slides);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!params.observer) {
    swiper.update();
  }

  swiper.slideTo(newActiveIndex, 0, false);
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/manipulation/methods/removeAllSlides.js":
/*!**********************************************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/manipulation/methods/removeAllSlides.js ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ removeAllSlides; }
/* harmony export */ });
function removeAllSlides() {
  const swiper = this;
  const slidesIndexes = [];

  for (let i = 0; i < swiper.slides.length; i += 1) {
    slidesIndexes.push(i);
  }

  swiper.removeSlide(slidesIndexes);
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/manipulation/methods/removeSlide.js":
/*!******************************************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/manipulation/methods/removeSlide.js ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ removeSlide; }
/* harmony export */ });
function removeSlide(slidesIndexes) {
  const swiper = this;
  const {
    params,
    $wrapperEl,
    activeIndex
  } = swiper;
  let activeIndexBuffer = activeIndex;

  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
    swiper.slides = $wrapperEl.children(`.${params.slideClass}`);
  }

  let newActiveIndex = activeIndexBuffer;
  let indexToRemove;

  if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
    for (let i = 0; i < slidesIndexes.length; i += 1) {
      indexToRemove = slidesIndexes[i];
      if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
      if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    }

    newActiveIndex = Math.max(newActiveIndex, 0);
  } else {
    indexToRemove = slidesIndexes;
    if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
    if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    newActiveIndex = Math.max(newActiveIndex, 0);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!params.observer) {
    swiper.update();
  }

  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/mousewheel/mousewheel.js":
/*!*******************************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/mousewheel/mousewheel.js ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Mousewheel; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "../../../AppVuejs/wbu-atomique/node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/dom.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/utils.js");
/* eslint-disable consistent-return */



function Mousewheel({
  swiper,
  extendParams,
  on,
  emit
}) {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  extendParams({
    mousewheel: {
      enabled: false,
      releaseOnEdges: false,
      invert: false,
      forceToAxis: false,
      sensitivity: 1,
      eventsTarget: 'container',
      thresholdDelta: null,
      thresholdTime: null
    }
  });
  swiper.mousewheel = {
    enabled: false
  };
  let timeout;
  let lastScrollTime = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.now)();
  let lastEventBeforeSnap;
  const recentWheelEvents = [];

  function normalize(e) {
    // Reasonable defaults
    const PIXEL_STEP = 10;
    const LINE_HEIGHT = 40;
    const PAGE_HEIGHT = 800;
    let sX = 0;
    let sY = 0; // spinX, spinY

    let pX = 0;
    let pY = 0; // pixelX, pixelY
    // Legacy

    if ('detail' in e) {
      sY = e.detail;
    }

    if ('wheelDelta' in e) {
      sY = -e.wheelDelta / 120;
    }

    if ('wheelDeltaY' in e) {
      sY = -e.wheelDeltaY / 120;
    }

    if ('wheelDeltaX' in e) {
      sX = -e.wheelDeltaX / 120;
    } // side scrolling on FF with DOMMouseScroll


    if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
      sX = sY;
      sY = 0;
    }

    pX = sX * PIXEL_STEP;
    pY = sY * PIXEL_STEP;

    if ('deltaY' in e) {
      pY = e.deltaY;
    }

    if ('deltaX' in e) {
      pX = e.deltaX;
    }

    if (e.shiftKey && !pX) {
      // if user scrolls with shift he wants horizontal scroll
      pX = pY;
      pY = 0;
    }

    if ((pX || pY) && e.deltaMode) {
      if (e.deltaMode === 1) {
        // delta in LINE units
        pX *= LINE_HEIGHT;
        pY *= LINE_HEIGHT;
      } else {
        // delta in PAGE units
        pX *= PAGE_HEIGHT;
        pY *= PAGE_HEIGHT;
      }
    } // Fall-back if spin cannot be determined


    if (pX && !sX) {
      sX = pX < 1 ? -1 : 1;
    }

    if (pY && !sY) {
      sY = pY < 1 ? -1 : 1;
    }

    return {
      spinX: sX,
      spinY: sY,
      pixelX: pX,
      pixelY: pY
    };
  }

  function handleMouseEnter() {
    if (!swiper.enabled) return;
    swiper.mouseEntered = true;
  }

  function handleMouseLeave() {
    if (!swiper.enabled) return;
    swiper.mouseEntered = false;
  }

  function animateSlider(newEvent) {
    if (swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta) {
      // Prevent if delta of wheel scroll delta is below configured threshold
      return false;
    }

    if (swiper.params.mousewheel.thresholdTime && (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.now)() - lastScrollTime < swiper.params.mousewheel.thresholdTime) {
      // Prevent if time between scrolls is below configured threshold
      return false;
    } // If the movement is NOT big enough and
    // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
    //   Don't go any further (avoid insignificant scroll movement).


    if (newEvent.delta >= 6 && (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.now)() - lastScrollTime < 60) {
      // Return false as a default
      return true;
    } // If user is scrolling towards the end:
    //   If the slider hasn't hit the latest slide or
    //   if the slider is a loop and
    //   if the slider isn't moving right now:
    //     Go to next slide and
    //     emit a scroll event.
    // Else (the user is scrolling towards the beginning) and
    // if the slider hasn't hit the first slide or
    // if the slider is a loop and
    // if the slider isn't moving right now:
    //   Go to prev slide and
    //   emit a scroll event.


    if (newEvent.direction < 0) {
      if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
        swiper.slideNext();
        emit('scroll', newEvent.raw);
      }
    } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
      swiper.slidePrev();
      emit('scroll', newEvent.raw);
    } // If you got here is because an animation has been triggered so store the current time


    lastScrollTime = new window.Date().getTime(); // Return false as a default

    return false;
  }

  function releaseScroll(newEvent) {
    const params = swiper.params.mousewheel;

    if (newEvent.direction < 0) {
      if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
        // Return true to animate scroll on edges
        return true;
      }
    } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
      // Return true to animate scroll on edges
      return true;
    }

    return false;
  }

  function handle(event) {
    let e = event;
    let disableParentSwiper = true;
    if (!swiper.enabled) return;
    const params = swiper.params.mousewheel;

    if (swiper.params.cssMode) {
      e.preventDefault();
    }

    let target = swiper.$el;

    if (swiper.params.mousewheel.eventsTarget !== 'container') {
      target = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__.default)(swiper.params.mousewheel.eventsTarget);
    }

    if (!swiper.mouseEntered && !target[0].contains(e.target) && !params.releaseOnEdges) return true;
    if (e.originalEvent) e = e.originalEvent; // jquery fix

    let delta = 0;
    const rtlFactor = swiper.rtlTranslate ? -1 : 1;
    const data = normalize(e);

    if (params.forceToAxis) {
      if (swiper.isHorizontal()) {
        if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;else return true;
      } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;else return true;
    } else {
      delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
    }

    if (delta === 0) return true;
    if (params.invert) delta = -delta; // Get the scroll positions

    let positions = swiper.getTranslate() + delta * params.sensitivity;
    if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
    if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate(); // When loop is true:
    //     the disableParentSwiper will be true.
    // When loop is false:
    //     if the scroll positions is not on edge,
    //     then the disableParentSwiper will be true.
    //     if the scroll on edge positions,
    //     then the disableParentSwiper will be false.

    disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
    if (disableParentSwiper && swiper.params.nested) e.stopPropagation();

    if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
      // Register the new event in a variable which stores the relevant data
      const newEvent = {
        time: (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.now)(),
        delta: Math.abs(delta),
        direction: Math.sign(delta),
        raw: event
      }; // Keep the most recent events

      if (recentWheelEvents.length >= 2) {
        recentWheelEvents.shift(); // only store the last N events
      }

      const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
      recentWheelEvents.push(newEvent); // If there is at least one previous recorded event:
      //   If direction has changed or
      //   if the scroll is quicker than the previous one:
      //     Animate the slider.
      // Else (this is the first time the wheel is moved):
      //     Animate the slider.

      if (prevEvent) {
        if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
          animateSlider(newEvent);
        }
      } else {
        animateSlider(newEvent);
      } // If it's time to release the scroll:
      //   Return now so you don't hit the preventDefault.


      if (releaseScroll(newEvent)) {
        return true;
      }
    } else {
      // Freemode or scrollContainer:
      // If we recently snapped after a momentum scroll, then ignore wheel events
      // to give time for the deceleration to finish. Stop ignoring after 500 msecs
      // or if it's a new scroll (larger delta or inverse sign as last event before
      // an end-of-momentum snap).
      const newEvent = {
        time: (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.now)(),
        delta: Math.abs(delta),
        direction: Math.sign(delta)
      };
      const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;

      if (!ignoreWheelEvents) {
        lastEventBeforeSnap = undefined;

        if (swiper.params.loop) {
          swiper.loopFix();
        }

        let position = swiper.getTranslate() + delta * params.sensitivity;
        const wasBeginning = swiper.isBeginning;
        const wasEnd = swiper.isEnd;
        if (position >= swiper.minTranslate()) position = swiper.minTranslate();
        if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
        swiper.setTransition(0);
        swiper.setTranslate(position);
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();

        if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
          swiper.updateSlidesClasses();
        }

        if (swiper.params.freeMode.sticky) {
          // When wheel scrolling starts with sticky (aka snap) enabled, then detect
          // the end of a momentum scroll by storing recent (N=15?) wheel events.
          // 1. do all N events have decreasing or same (absolute value) delta?
          // 2. did all N events arrive in the last M (M=500?) msecs?
          // 3. does the earliest event have an (absolute value) delta that's
          //    at least P (P=1?) larger than the most recent event's delta?
          // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
          // If 1-4 are "yes" then we're near the end of a momentum scroll deceleration.
          // Snap immediately and ignore remaining wheel events in this scroll.
          // See comment above for "remaining wheel events in this scroll" determination.
          // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
          clearTimeout(timeout);
          timeout = undefined;

          if (recentWheelEvents.length >= 15) {
            recentWheelEvents.shift(); // only store the last N events
          }

          const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
          const firstEvent = recentWheelEvents[0];
          recentWheelEvents.push(newEvent);

          if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) {
            // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
            recentWheelEvents.splice(0);
          } else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {
            // We're at the end of the deceleration of a momentum scroll, so there's no need
            // to wait for more events. Snap ASAP on the next tick.
            // Also, because there's some remaining momentum we'll bias the snap in the
            // direction of the ongoing scroll because it's better UX for the scroll to snap
            // in the same direction as the scroll instead of reversing to snap.  Therefore,
            // if it's already scrolled more than 20% in the current direction, keep going.
            const snapToThreshold = delta > 0 ? 0.8 : 0.2;
            lastEventBeforeSnap = newEvent;
            recentWheelEvents.splice(0);
            timeout = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.nextTick)(() => {
              swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
            }, 0); // no delay; move on next tick
          }

          if (!timeout) {
            // if we get here, then we haven't detected the end of a momentum scroll, so
            // we'll consider a scroll "complete" when there haven't been any wheel events
            // for 500ms.
            timeout = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.nextTick)(() => {
              const snapToThreshold = 0.5;
              lastEventBeforeSnap = newEvent;
              recentWheelEvents.splice(0);
              swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
            }, 500);
          }
        } // Emit event


        if (!ignoreWheelEvents) emit('scroll', e); // Stop autoplay

        if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop(); // Return page scroll on edge positions

        if (position === swiper.minTranslate() || position === swiper.maxTranslate()) return true;
      }
    }

    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
    return false;
  }

  function events(method) {
    let target = swiper.$el;

    if (swiper.params.mousewheel.eventsTarget !== 'container') {
      target = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__.default)(swiper.params.mousewheel.eventsTarget);
    }

    target[method]('mouseenter', handleMouseEnter);
    target[method]('mouseleave', handleMouseLeave);
    target[method]('wheel', handle);
  }

  function enable() {
    if (swiper.params.cssMode) {
      swiper.wrapperEl.removeEventListener('wheel', handle);
      return true;
    }

    if (swiper.mousewheel.enabled) return false;
    events('on');
    swiper.mousewheel.enabled = true;
    return true;
  }

  function disable() {
    if (swiper.params.cssMode) {
      swiper.wrapperEl.addEventListener(event, handle);
      return true;
    }

    if (!swiper.mousewheel.enabled) return false;
    events('off');
    swiper.mousewheel.enabled = false;
    return true;
  }

  on('init', () => {
    if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
      disable();
    }

    if (swiper.params.mousewheel.enabled) enable();
  });
  on('destroy', () => {
    if (swiper.params.cssMode) {
      enable();
    }

    if (swiper.mousewheel.enabled) disable();
  });
  Object.assign(swiper.mousewheel, {
    enable,
    disable
  });
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/navigation/navigation.js":
/*!*******************************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/navigation/navigation.js ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Navigation; }
/* harmony export */ });
/* harmony import */ var _shared_create_element_if_not_defined_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/create-element-if-not-defined.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/create-element-if-not-defined.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/dom.js");


function Navigation({
  swiper,
  extendParams,
  on,
  emit
}) {
  extendParams({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: false,
      disabledClass: 'swiper-button-disabled',
      hiddenClass: 'swiper-button-hidden',
      lockClass: 'swiper-button-lock'
    }
  });
  swiper.navigation = {
    nextEl: null,
    $nextEl: null,
    prevEl: null,
    $prevEl: null
  };

  function getEl(el) {
    let $el;

    if (el) {
      $el = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__.default)(el);

      if (swiper.params.uniqueNavElements && typeof el === 'string' && $el.length > 1 && swiper.$el.find(el).length === 1) {
        $el = swiper.$el.find(el);
      }
    }

    return $el;
  }

  function toggleEl($el, disabled) {
    const params = swiper.params.navigation;

    if ($el && $el.length > 0) {
      $el[disabled ? 'addClass' : 'removeClass'](params.disabledClass);
      if ($el[0] && $el[0].tagName === 'BUTTON') $el[0].disabled = disabled;

      if (swiper.params.watchOverflow && swiper.enabled) {
        $el[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
      }
    }
  }

  function update() {
    // Update Navigation Buttons
    if (swiper.params.loop) return;
    const {
      $nextEl,
      $prevEl
    } = swiper.navigation;
    toggleEl($prevEl, swiper.isBeginning);
    toggleEl($nextEl, swiper.isEnd);
  }

  function onPrevClick(e) {
    e.preventDefault();
    if (swiper.isBeginning && !swiper.params.loop) return;
    swiper.slidePrev();
  }

  function onNextClick(e) {
    e.preventDefault();
    if (swiper.isEnd && !swiper.params.loop) return;
    swiper.slideNext();
  }

  function init() {
    const params = swiper.params.navigation;
    swiper.params.navigation = (0,_shared_create_element_if_not_defined_js__WEBPACK_IMPORTED_MODULE_0__.default)(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
      nextEl: 'swiper-button-next',
      prevEl: 'swiper-button-prev'
    });
    if (!(params.nextEl || params.prevEl)) return;
    const $nextEl = getEl(params.nextEl);
    const $prevEl = getEl(params.prevEl);

    if ($nextEl && $nextEl.length > 0) {
      $nextEl.on('click', onNextClick);
    }

    if ($prevEl && $prevEl.length > 0) {
      $prevEl.on('click', onPrevClick);
    }

    Object.assign(swiper.navigation, {
      $nextEl,
      nextEl: $nextEl && $nextEl[0],
      $prevEl,
      prevEl: $prevEl && $prevEl[0]
    });

    if (!swiper.enabled) {
      if ($nextEl) $nextEl.addClass(params.lockClass);
      if ($prevEl) $prevEl.addClass(params.lockClass);
    }
  }

  function destroy() {
    const {
      $nextEl,
      $prevEl
    } = swiper.navigation;

    if ($nextEl && $nextEl.length) {
      $nextEl.off('click', onNextClick);
      $nextEl.removeClass(swiper.params.navigation.disabledClass);
    }

    if ($prevEl && $prevEl.length) {
      $prevEl.off('click', onPrevClick);
      $prevEl.removeClass(swiper.params.navigation.disabledClass);
    }
  }

  on('init', () => {
    init();
    update();
  });
  on('toEdge fromEdge lock unlock', () => {
    update();
  });
  on('destroy', () => {
    destroy();
  });
  on('enable disable', () => {
    const {
      $nextEl,
      $prevEl
    } = swiper.navigation;

    if ($nextEl) {
      $nextEl[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.navigation.lockClass);
    }

    if ($prevEl) {
      $prevEl[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.navigation.lockClass);
    }
  });
  on('click', (_s, e) => {
    const {
      $nextEl,
      $prevEl
    } = swiper.navigation;
    const targetEl = e.target;

    if (swiper.params.navigation.hideOnClick && !(0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__.default)(targetEl).is($prevEl) && !(0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__.default)(targetEl).is($nextEl)) {
      if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
      let isHidden;

      if ($nextEl) {
        isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
      } else if ($prevEl) {
        isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
      }

      if (isHidden === true) {
        emit('navigationShow');
      } else {
        emit('navigationHide');
      }

      if ($nextEl) {
        $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
      }

      if ($prevEl) {
        $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
      }
    }
  });
  Object.assign(swiper.navigation, {
    update,
    init,
    destroy
  });
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/pagination/pagination.js":
/*!*******************************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/pagination/pagination.js ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Pagination; }
/* harmony export */ });
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/dom.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/dom.js");
/* harmony import */ var _shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/classes-to-selector.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/classes-to-selector.js");
/* harmony import */ var _shared_create_element_if_not_defined_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/create-element-if-not-defined.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/create-element-if-not-defined.js");



function Pagination({
  swiper,
  extendParams,
  on,
  emit
}) {
  const pfx = 'swiper-pagination';
  extendParams({
    pagination: {
      el: null,
      bulletElement: 'span',
      clickable: false,
      hideOnClick: false,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: false,
      type: 'bullets',
      // 'bullets' or 'progressbar' or 'fraction' or 'custom'
      dynamicBullets: false,
      dynamicMainBullets: 1,
      formatFractionCurrent: number => number,
      formatFractionTotal: number => number,
      bulletClass: `${pfx}-bullet`,
      bulletActiveClass: `${pfx}-bullet-active`,
      modifierClass: `${pfx}-`,
      currentClass: `${pfx}-current`,
      totalClass: `${pfx}-total`,
      hiddenClass: `${pfx}-hidden`,
      progressbarFillClass: `${pfx}-progressbar-fill`,
      progressbarOppositeClass: `${pfx}-progressbar-opposite`,
      clickableClass: `${pfx}-clickable`,
      lockClass: `${pfx}-lock`,
      horizontalClass: `${pfx}-horizontal`,
      verticalClass: `${pfx}-vertical`
    }
  });
  swiper.pagination = {
    el: null,
    $el: null,
    bullets: []
  };
  let bulletSize;
  let dynamicBulletIndex = 0;

  function isPaginationDisabled() {
    return !swiper.params.pagination.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0;
  }

  function setSideBullets($bulletEl, position) {
    const {
      bulletActiveClass
    } = swiper.params.pagination;
    $bulletEl[position]().addClass(`${bulletActiveClass}-${position}`)[position]().addClass(`${bulletActiveClass}-${position}-${position}`);
  }

  function update() {
    // Render || Update Pagination bullets/items
    const rtl = swiper.rtl;
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    const $el = swiper.pagination.$el; // Current/Total

    let current;
    const total = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

    if (swiper.params.loop) {
      current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);

      if (current > slidesLength - 1 - swiper.loopedSlides * 2) {
        current -= slidesLength - swiper.loopedSlides * 2;
      }

      if (current > total - 1) current -= total;
      if (current < 0 && swiper.params.paginationType !== 'bullets') current = total + current;
    } else if (typeof swiper.snapIndex !== 'undefined') {
      current = swiper.snapIndex;
    } else {
      current = swiper.activeIndex || 0;
    } // Types


    if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
      const bullets = swiper.pagination.bullets;
      let firstIndex;
      let lastIndex;
      let midIndex;

      if (params.dynamicBullets) {
        bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
        $el.css(swiper.isHorizontal() ? 'width' : 'height', `${bulletSize * (params.dynamicMainBullets + 4)}px`);

        if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
          dynamicBulletIndex += current - swiper.previousIndex;

          if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
            dynamicBulletIndex = params.dynamicMainBullets - 1;
          } else if (dynamicBulletIndex < 0) {
            dynamicBulletIndex = 0;
          }
        }

        firstIndex = current - dynamicBulletIndex;
        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
        midIndex = (lastIndex + firstIndex) / 2;
      }

      bullets.removeClass(['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map(suffix => `${params.bulletActiveClass}${suffix}`).join(' '));

      if ($el.length > 1) {
        bullets.each(bullet => {
          const $bullet = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__.default)(bullet);
          const bulletIndex = $bullet.index();

          if (bulletIndex === current) {
            $bullet.addClass(params.bulletActiveClass);
          }

          if (params.dynamicBullets) {
            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
              $bullet.addClass(`${params.bulletActiveClass}-main`);
            }

            if (bulletIndex === firstIndex) {
              setSideBullets($bullet, 'prev');
            }

            if (bulletIndex === lastIndex) {
              setSideBullets($bullet, 'next');
            }
          }
        });
      } else {
        const $bullet = bullets.eq(current);
        const bulletIndex = $bullet.index();
        $bullet.addClass(params.bulletActiveClass);

        if (params.dynamicBullets) {
          const $firstDisplayedBullet = bullets.eq(firstIndex);
          const $lastDisplayedBullet = bullets.eq(lastIndex);

          for (let i = firstIndex; i <= lastIndex; i += 1) {
            bullets.eq(i).addClass(`${params.bulletActiveClass}-main`);
          }

          if (swiper.params.loop) {
            if (bulletIndex >= bullets.length - params.dynamicMainBullets) {
              for (let i = params.dynamicMainBullets; i >= 0; i -= 1) {
                bullets.eq(bullets.length - i).addClass(`${params.bulletActiveClass}-main`);
              }

              bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(`${params.bulletActiveClass}-prev`);
            } else {
              setSideBullets($firstDisplayedBullet, 'prev');
              setSideBullets($lastDisplayedBullet, 'next');
            }
          } else {
            setSideBullets($firstDisplayedBullet, 'prev');
            setSideBullets($lastDisplayedBullet, 'next');
          }
        }
      }

      if (params.dynamicBullets) {
        const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
        const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
        const offsetProp = rtl ? 'right' : 'left';
        bullets.css(swiper.isHorizontal() ? offsetProp : 'top', `${bulletsOffset}px`);
      }
    }

    if (params.type === 'fraction') {
      $el.find((0,_shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_1__.default)(params.currentClass)).text(params.formatFractionCurrent(current + 1));
      $el.find((0,_shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_1__.default)(params.totalClass)).text(params.formatFractionTotal(total));
    }

    if (params.type === 'progressbar') {
      let progressbarDirection;

      if (params.progressbarOpposite) {
        progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
      } else {
        progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
      }

      const scale = (current + 1) / total;
      let scaleX = 1;
      let scaleY = 1;

      if (progressbarDirection === 'horizontal') {
        scaleX = scale;
      } else {
        scaleY = scale;
      }

      $el.find((0,_shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_1__.default)(params.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`).transition(swiper.params.speed);
    }

    if (params.type === 'custom' && params.renderCustom) {
      $el.html(params.renderCustom(swiper, current + 1, total));
      emit('paginationRender', $el[0]);
    } else {
      emit('paginationUpdate', $el[0]);
    }

    if (swiper.params.watchOverflow && swiper.enabled) {
      $el[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
    }
  }

  function render() {
    // Render Container
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    const $el = swiper.pagination.$el;
    let paginationHTML = '';

    if (params.type === 'bullets') {
      let numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

      if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.loop && numberOfBullets > slidesLength) {
        numberOfBullets = slidesLength;
      }

      for (let i = 0; i < numberOfBullets; i += 1) {
        if (params.renderBullet) {
          paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
        } else {
          paginationHTML += `<${params.bulletElement} class="${params.bulletClass}"></${params.bulletElement}>`;
        }
      }

      $el.html(paginationHTML);
      swiper.pagination.bullets = $el.find((0,_shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_1__.default)(params.bulletClass));
    }

    if (params.type === 'fraction') {
      if (params.renderFraction) {
        paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
      } else {
        paginationHTML = `<span class="${params.currentClass}"></span>` + ' / ' + `<span class="${params.totalClass}"></span>`;
      }

      $el.html(paginationHTML);
    }

    if (params.type === 'progressbar') {
      if (params.renderProgressbar) {
        paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
      } else {
        paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
      }

      $el.html(paginationHTML);
    }

    if (params.type !== 'custom') {
      emit('paginationRender', swiper.pagination.$el[0]);
    }
  }

  function init() {
    swiper.params.pagination = (0,_shared_create_element_if_not_defined_js__WEBPACK_IMPORTED_MODULE_2__.default)(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
      el: 'swiper-pagination'
    });
    const params = swiper.params.pagination;
    if (!params.el) return;
    let $el = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__.default)(params.el);
    if ($el.length === 0) return;

    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1) {
      $el = swiper.$el.find(params.el); // check if it belongs to another nested Swiper

      if ($el.length > 1) {
        $el = $el.filter(el => {
          if ((0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__.default)(el).parents('.swiper')[0] !== swiper.el) return false;
          return true;
        });
      }
    }

    if (params.type === 'bullets' && params.clickable) {
      $el.addClass(params.clickableClass);
    }

    $el.addClass(params.modifierClass + params.type);
    $el.addClass(params.modifierClass + swiper.params.direction);

    if (params.type === 'bullets' && params.dynamicBullets) {
      $el.addClass(`${params.modifierClass}${params.type}-dynamic`);
      dynamicBulletIndex = 0;

      if (params.dynamicMainBullets < 1) {
        params.dynamicMainBullets = 1;
      }
    }

    if (params.type === 'progressbar' && params.progressbarOpposite) {
      $el.addClass(params.progressbarOppositeClass);
    }

    if (params.clickable) {
      $el.on('click', (0,_shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_1__.default)(params.bulletClass), function onClick(e) {
        e.preventDefault();
        let index = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__.default)(this).index() * swiper.params.slidesPerGroup;
        if (swiper.params.loop) index += swiper.loopedSlides;
        swiper.slideTo(index);
      });
    }

    Object.assign(swiper.pagination, {
      $el,
      el: $el[0]
    });

    if (!swiper.enabled) {
      $el.addClass(params.lockClass);
    }
  }

  function destroy() {
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    const $el = swiper.pagination.$el;
    $el.removeClass(params.hiddenClass);
    $el.removeClass(params.modifierClass + params.type);
    $el.removeClass(params.modifierClass + swiper.params.direction);
    if (swiper.pagination.bullets && swiper.pagination.bullets.removeClass) swiper.pagination.bullets.removeClass(params.bulletActiveClass);

    if (params.clickable) {
      $el.off('click', (0,_shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_1__.default)(params.bulletClass));
    }
  }

  on('init', () => {
    init();
    render();
    update();
  });
  on('activeIndexChange', () => {
    if (swiper.params.loop) {
      update();
    } else if (typeof swiper.snapIndex === 'undefined') {
      update();
    }
  });
  on('snapIndexChange', () => {
    if (!swiper.params.loop) {
      update();
    }
  });
  on('slidesLengthChange', () => {
    if (swiper.params.loop) {
      render();
      update();
    }
  });
  on('snapGridLengthChange', () => {
    if (!swiper.params.loop) {
      render();
      update();
    }
  });
  on('destroy', () => {
    destroy();
  });
  on('enable disable', () => {
    const {
      $el
    } = swiper.pagination;

    if ($el) {
      $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.pagination.lockClass);
    }
  });
  on('lock unlock', () => {
    update();
  });
  on('click', (_s, e) => {
    const targetEl = e.target;
    const {
      $el
    } = swiper.pagination;

    if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && $el.length > 0 && !(0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__.default)(targetEl).hasClass(swiper.params.pagination.bulletClass)) {
      if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
      const isHidden = $el.hasClass(swiper.params.pagination.hiddenClass);

      if (isHidden === true) {
        emit('paginationShow');
      } else {
        emit('paginationHide');
      }

      $el.toggleClass(swiper.params.pagination.hiddenClass);
    }
  });
  Object.assign(swiper.pagination, {
    render,
    update,
    init,
    destroy
  });
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/parallax/parallax.js":
/*!***************************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/parallax/parallax.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Parallax; }
/* harmony export */ });
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/dom.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/dom.js");

function Parallax({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    parallax: {
      enabled: false
    }
  });

  const setTransform = (el, progress) => {
    const {
      rtl
    } = swiper;
    const $el = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__.default)(el);
    const rtlFactor = rtl ? -1 : 1;
    const p = $el.attr('data-swiper-parallax') || '0';
    let x = $el.attr('data-swiper-parallax-x');
    let y = $el.attr('data-swiper-parallax-y');
    const scale = $el.attr('data-swiper-parallax-scale');
    const opacity = $el.attr('data-swiper-parallax-opacity');

    if (x || y) {
      x = x || '0';
      y = y || '0';
    } else if (swiper.isHorizontal()) {
      x = p;
      y = '0';
    } else {
      y = p;
      x = '0';
    }

    if (x.indexOf('%') >= 0) {
      x = `${parseInt(x, 10) * progress * rtlFactor}%`;
    } else {
      x = `${x * progress * rtlFactor}px`;
    }

    if (y.indexOf('%') >= 0) {
      y = `${parseInt(y, 10) * progress}%`;
    } else {
      y = `${y * progress}px`;
    }

    if (typeof opacity !== 'undefined' && opacity !== null) {
      const currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
      $el[0].style.opacity = currentOpacity;
    }

    if (typeof scale === 'undefined' || scale === null) {
      $el.transform(`translate3d(${x}, ${y}, 0px)`);
    } else {
      const currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
      $el.transform(`translate3d(${x}, ${y}, 0px) scale(${currentScale})`);
    }
  };

  const setTranslate = () => {
    const {
      $el,
      slides,
      progress,
      snapGrid
    } = swiper;
    $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(el => {
      setTransform(el, progress);
    });
    slides.each((slideEl, slideIndex) => {
      let slideProgress = slideEl.progress;

      if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
        slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
      }

      slideProgress = Math.min(Math.max(slideProgress, -1), 1);
      (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__.default)(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(el => {
        setTransform(el, slideProgress);
      });
    });
  };

  const setTransition = (duration = swiper.params.speed) => {
    const {
      $el
    } = swiper;
    $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(parallaxEl => {
      const $parallaxEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__.default)(parallaxEl);
      let parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
      if (duration === 0) parallaxDuration = 0;
      $parallaxEl.transition(parallaxDuration);
    });
  };

  on('beforeInit', () => {
    if (!swiper.params.parallax.enabled) return;
    swiper.params.watchSlidesProgress = true;
    swiper.originalParams.watchSlidesProgress = true;
  });
  on('init', () => {
    if (!swiper.params.parallax.enabled) return;
    setTranslate();
  });
  on('setTranslate', () => {
    if (!swiper.params.parallax.enabled) return;
    setTranslate();
  });
  on('setTransition', (_swiper, duration) => {
    if (!swiper.params.parallax.enabled) return;
    setTransition(duration);
  });
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/scrollbar/scrollbar.js":
/*!*****************************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/scrollbar/scrollbar.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Scrollbar; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "../../../AppVuejs/wbu-atomique/node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/dom.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/utils.js");
/* harmony import */ var _shared_create_element_if_not_defined_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/create-element-if-not-defined.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/create-element-if-not-defined.js");




function Scrollbar({
  swiper,
  extendParams,
  on,
  emit
}) {
  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  let isTouched = false;
  let timeout = null;
  let dragTimeout = null;
  let dragStartPos;
  let dragSize;
  let trackSize;
  let divider;
  extendParams({
    scrollbar: {
      el: null,
      dragSize: 'auto',
      hide: false,
      draggable: false,
      snapOnRelease: true,
      lockClass: 'swiper-scrollbar-lock',
      dragClass: 'swiper-scrollbar-drag'
    }
  });
  swiper.scrollbar = {
    el: null,
    dragEl: null,
    $el: null,
    $dragEl: null
  };

  function setTranslate() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    const {
      scrollbar,
      rtlTranslate: rtl,
      progress
    } = swiper;
    const {
      $dragEl,
      $el
    } = scrollbar;
    const params = swiper.params.scrollbar;
    let newSize = dragSize;
    let newPos = (trackSize - dragSize) * progress;

    if (rtl) {
      newPos = -newPos;

      if (newPos > 0) {
        newSize = dragSize - newPos;
        newPos = 0;
      } else if (-newPos + dragSize > trackSize) {
        newSize = trackSize + newPos;
      }
    } else if (newPos < 0) {
      newSize = dragSize + newPos;
      newPos = 0;
    } else if (newPos + dragSize > trackSize) {
      newSize = trackSize - newPos;
    }

    if (swiper.isHorizontal()) {
      $dragEl.transform(`translate3d(${newPos}px, 0, 0)`);
      $dragEl[0].style.width = `${newSize}px`;
    } else {
      $dragEl.transform(`translate3d(0px, ${newPos}px, 0)`);
      $dragEl[0].style.height = `${newSize}px`;
    }

    if (params.hide) {
      clearTimeout(timeout);
      $el[0].style.opacity = 1;
      timeout = setTimeout(() => {
        $el[0].style.opacity = 0;
        $el.transition(400);
      }, 1000);
    }
  }

  function setTransition(duration) {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    swiper.scrollbar.$dragEl.transition(duration);
  }

  function updateSize() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    const {
      scrollbar
    } = swiper;
    const {
      $dragEl,
      $el
    } = scrollbar;
    $dragEl[0].style.width = '';
    $dragEl[0].style.height = '';
    trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;
    divider = swiper.size / (swiper.virtualSize + swiper.params.slidesOffsetBefore - (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));

    if (swiper.params.scrollbar.dragSize === 'auto') {
      dragSize = trackSize * divider;
    } else {
      dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
    }

    if (swiper.isHorizontal()) {
      $dragEl[0].style.width = `${dragSize}px`;
    } else {
      $dragEl[0].style.height = `${dragSize}px`;
    }

    if (divider >= 1) {
      $el[0].style.display = 'none';
    } else {
      $el[0].style.display = '';
    }

    if (swiper.params.scrollbar.hide) {
      $el[0].style.opacity = 0;
    }

    if (swiper.params.watchOverflow && swiper.enabled) {
      scrollbar.$el[swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
    }
  }

  function getPointerPosition(e) {
    if (swiper.isHorizontal()) {
      return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientX : e.clientX;
    }

    return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientY : e.clientY;
  }

  function setDragPosition(e) {
    const {
      scrollbar,
      rtlTranslate: rtl
    } = swiper;
    const {
      $el
    } = scrollbar;
    let positionRatio;
    positionRatio = (getPointerPosition(e) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
    positionRatio = Math.max(Math.min(positionRatio, 1), 0);

    if (rtl) {
      positionRatio = 1 - positionRatio;
    }

    const position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
    swiper.updateProgress(position);
    swiper.setTranslate(position);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }

  function onDragStart(e) {
    const params = swiper.params.scrollbar;
    const {
      scrollbar,
      $wrapperEl
    } = swiper;
    const {
      $el,
      $dragEl
    } = scrollbar;
    isTouched = true;
    dragStartPos = e.target === $dragEl[0] || e.target === $dragEl ? getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
    e.preventDefault();
    e.stopPropagation();
    $wrapperEl.transition(100);
    $dragEl.transition(100);
    setDragPosition(e);
    clearTimeout(dragTimeout);
    $el.transition(0);

    if (params.hide) {
      $el.css('opacity', 1);
    }

    if (swiper.params.cssMode) {
      swiper.$wrapperEl.css('scroll-snap-type', 'none');
    }

    emit('scrollbarDragStart', e);
  }

  function onDragMove(e) {
    const {
      scrollbar,
      $wrapperEl
    } = swiper;
    const {
      $el,
      $dragEl
    } = scrollbar;
    if (!isTouched) return;
    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
    setDragPosition(e);
    $wrapperEl.transition(0);
    $el.transition(0);
    $dragEl.transition(0);
    emit('scrollbarDragMove', e);
  }

  function onDragEnd(e) {
    const params = swiper.params.scrollbar;
    const {
      scrollbar,
      $wrapperEl
    } = swiper;
    const {
      $el
    } = scrollbar;
    if (!isTouched) return;
    isTouched = false;

    if (swiper.params.cssMode) {
      swiper.$wrapperEl.css('scroll-snap-type', '');
      $wrapperEl.transition('');
    }

    if (params.hide) {
      clearTimeout(dragTimeout);
      dragTimeout = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.nextTick)(() => {
        $el.css('opacity', 0);
        $el.transition(400);
      }, 1000);
    }

    emit('scrollbarDragEnd', e);

    if (params.snapOnRelease) {
      swiper.slideToClosest();
    }
  }

  function events(method) {
    const {
      scrollbar,
      touchEventsTouch,
      touchEventsDesktop,
      params,
      support
    } = swiper;
    const $el = scrollbar.$el;
    const target = $el[0];
    const activeListener = support.passiveListener && params.passiveListeners ? {
      passive: false,
      capture: false
    } : false;
    const passiveListener = support.passiveListener && params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    if (!target) return;
    const eventMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';

    if (!support.touch) {
      target[eventMethod](touchEventsDesktop.start, onDragStart, activeListener);
      document[eventMethod](touchEventsDesktop.move, onDragMove, activeListener);
      document[eventMethod](touchEventsDesktop.end, onDragEnd, passiveListener);
    } else {
      target[eventMethod](touchEventsTouch.start, onDragStart, activeListener);
      target[eventMethod](touchEventsTouch.move, onDragMove, activeListener);
      target[eventMethod](touchEventsTouch.end, onDragEnd, passiveListener);
    }
  }

  function enableDraggable() {
    if (!swiper.params.scrollbar.el) return;
    events('on');
  }

  function disableDraggable() {
    if (!swiper.params.scrollbar.el) return;
    events('off');
  }

  function init() {
    const {
      scrollbar,
      $el: $swiperEl
    } = swiper;
    swiper.params.scrollbar = (0,_shared_create_element_if_not_defined_js__WEBPACK_IMPORTED_MODULE_3__.default)(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, {
      el: 'swiper-scrollbar'
    });
    const params = swiper.params.scrollbar;
    if (!params.el) return;
    let $el = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__.default)(params.el);

    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
      $el = $swiperEl.find(params.el);
    }

    let $dragEl = $el.find(`.${swiper.params.scrollbar.dragClass}`);

    if ($dragEl.length === 0) {
      $dragEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__.default)(`<div class="${swiper.params.scrollbar.dragClass}"></div>`);
      $el.append($dragEl);
    }

    Object.assign(scrollbar, {
      $el,
      el: $el[0],
      $dragEl,
      dragEl: $dragEl[0]
    });

    if (params.draggable) {
      enableDraggable();
    }

    if ($el) {
      $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.scrollbar.lockClass);
    }
  }

  function destroy() {
    disableDraggable();
  }

  on('init', () => {
    init();
    updateSize();
    setTranslate();
  });
  on('update resize observerUpdate lock unlock', () => {
    updateSize();
  });
  on('setTranslate', () => {
    setTranslate();
  });
  on('setTransition', (_s, duration) => {
    setTransition(duration);
  });
  on('enable disable', () => {
    const {
      $el
    } = swiper.scrollbar;

    if ($el) {
      $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.scrollbar.lockClass);
    }
  });
  on('destroy', () => {
    destroy();
  });
  Object.assign(swiper.scrollbar, {
    updateSize,
    setTranslate,
    init,
    destroy
  });
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/thumbs/thumbs.js":
/*!***********************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/thumbs/thumbs.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Thumb; }
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/utils.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/dom.js");


function Thumb({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    thumbs: {
      swiper: null,
      multipleActiveThumbs: true,
      autoScrollOffset: 0,
      slideThumbActiveClass: 'swiper-slide-thumb-active',
      thumbsContainerClass: 'swiper-thumbs'
    }
  });
  let initialized = false;
  let swiperCreated = false;
  swiper.thumbs = {
    swiper: null
  };

  function onThumbClick() {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper) return;
    const clickedIndex = thumbsSwiper.clickedIndex;
    const clickedSlide = thumbsSwiper.clickedSlide;
    if (clickedSlide && (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__.default)(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) return;
    if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
    let slideToIndex;

    if (thumbsSwiper.params.loop) {
      slideToIndex = parseInt((0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__.default)(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);
    } else {
      slideToIndex = clickedIndex;
    }

    if (swiper.params.loop) {
      let currentIndex = swiper.activeIndex;

      if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
        swiper.loopFix(); // eslint-disable-next-line

        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
        currentIndex = swiper.activeIndex;
      }

      const prevIndex = swiper.slides.eq(currentIndex).prevAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index();
      const nextIndex = swiper.slides.eq(currentIndex).nextAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index();
      if (typeof prevIndex === 'undefined') slideToIndex = nextIndex;else if (typeof nextIndex === 'undefined') slideToIndex = prevIndex;else if (nextIndex - currentIndex < currentIndex - prevIndex) slideToIndex = nextIndex;else slideToIndex = prevIndex;
    }

    swiper.slideTo(slideToIndex);
  }

  function init() {
    const {
      thumbs: thumbsParams
    } = swiper.params;
    if (initialized) return false;
    initialized = true;
    const SwiperClass = swiper.constructor;

    if (thumbsParams.swiper instanceof SwiperClass) {
      swiper.thumbs.swiper = thumbsParams.swiper;
      Object.assign(swiper.thumbs.swiper.originalParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      Object.assign(swiper.thumbs.swiper.params, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
    } else if ((0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_0__.isObject)(thumbsParams.swiper)) {
      const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);
      Object.assign(thumbsSwiperParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
      swiperCreated = true;
    }

    swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
    swiper.thumbs.swiper.on('tap', onThumbClick);
    return true;
  }

  function update(initial) {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper) return;
    const slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;
    const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
    const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;

    if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
      let currentThumbsIndex = thumbsSwiper.activeIndex;
      let newThumbsIndex;
      let direction;

      if (thumbsSwiper.params.loop) {
        if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
          thumbsSwiper.loopFix(); // eslint-disable-next-line

          thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
          currentThumbsIndex = thumbsSwiper.activeIndex;
        } // Find actual thumbs index to slide to


        const prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll(`[data-swiper-slide-index="${swiper.realIndex}"]`).eq(0).index();
        const nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll(`[data-swiper-slide-index="${swiper.realIndex}"]`).eq(0).index();

        if (typeof prevThumbsIndex === 'undefined') {
          newThumbsIndex = nextThumbsIndex;
        } else if (typeof nextThumbsIndex === 'undefined') {
          newThumbsIndex = prevThumbsIndex;
        } else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) {
          newThumbsIndex = thumbsSwiper.params.slidesPerGroup > 1 ? nextThumbsIndex : currentThumbsIndex;
        } else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) {
          newThumbsIndex = nextThumbsIndex;
        } else {
          newThumbsIndex = prevThumbsIndex;
        }

        direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev';
      } else {
        newThumbsIndex = swiper.realIndex;
        direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev';
      }

      if (useOffset) {
        newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;
      }

      if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
        if (thumbsSwiper.params.centeredSlides) {
          if (newThumbsIndex > currentThumbsIndex) {
            newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
          } else {
            newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
          }
        } else if (newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup === 1) {// newThumbsIndex = newThumbsIndex - slidesPerView + 1;
        }

        thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
      }
    } // Activate thumbs


    let thumbsToActivate = 1;
    const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;

    if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
      thumbsToActivate = swiper.params.slidesPerView;
    }

    if (!swiper.params.thumbs.multipleActiveThumbs) {
      thumbsToActivate = 1;
    }

    thumbsToActivate = Math.floor(thumbsToActivate);
    thumbsSwiper.slides.removeClass(thumbActiveClass);

    if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {
      for (let i = 0; i < thumbsToActivate; i += 1) {
        thumbsSwiper.$wrapperEl.children(`[data-swiper-slide-index="${swiper.realIndex + i}"]`).addClass(thumbActiveClass);
      }
    } else {
      for (let i = 0; i < thumbsToActivate; i += 1) {
        thumbsSwiper.slides.eq(swiper.realIndex + i).addClass(thumbActiveClass);
      }
    }
  }

  on('beforeInit', () => {
    const {
      thumbs
    } = swiper.params;
    if (!thumbs || !thumbs.swiper) return;
    init();
    update(true);
  });
  on('slideChange update resize observerUpdate', () => {
    if (!swiper.thumbs.swiper) return;
    update();
  });
  on('setTransition', (_s, duration) => {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper) return;
    thumbsSwiper.setTransition(duration);
  });
  on('beforeDestroy', () => {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper) return;

    if (swiperCreated && thumbsSwiper) {
      thumbsSwiper.destroy();
    }
  });
  Object.assign(swiper.thumbs, {
    init,
    update
  });
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/virtual/virtual.js":
/*!*************************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/virtual/virtual.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Virtual; }
/* harmony export */ });
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/dom.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/dom.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/utils.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/utils.js");


function Virtual({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    virtual: {
      enabled: false,
      slides: [],
      cache: true,
      renderSlide: null,
      renderExternal: null,
      renderExternalUpdate: true,
      addSlidesBefore: 0,
      addSlidesAfter: 0
    }
  });
  let cssModeTimeout;
  swiper.virtual = {
    cache: {},
    from: undefined,
    to: undefined,
    slides: [],
    offset: 0,
    slidesGrid: []
  };

  function renderSlide(slide, index) {
    const params = swiper.params.virtual;

    if (params.cache && swiper.virtual.cache[index]) {
      return swiper.virtual.cache[index];
    }

    const $slideEl = params.renderSlide ? (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__.default)(params.renderSlide.call(swiper, slide, index)) : (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_0__.default)(`<div class="${swiper.params.slideClass}" data-swiper-slide-index="${index}">${slide}</div>`);
    if (!$slideEl.attr('data-swiper-slide-index')) $slideEl.attr('data-swiper-slide-index', index);
    if (params.cache) swiper.virtual.cache[index] = $slideEl;
    return $slideEl;
  }

  function update(force) {
    const {
      slidesPerView,
      slidesPerGroup,
      centeredSlides
    } = swiper.params;
    const {
      addSlidesBefore,
      addSlidesAfter
    } = swiper.params.virtual;
    const {
      from: previousFrom,
      to: previousTo,
      slides,
      slidesGrid: previousSlidesGrid,
      offset: previousOffset
    } = swiper.virtual;

    if (!swiper.params.cssMode) {
      swiper.updateActiveIndex();
    }

    const activeIndex = swiper.activeIndex || 0;
    let offsetProp;
    if (swiper.rtlTranslate) offsetProp = 'right';else offsetProp = swiper.isHorizontal() ? 'left' : 'top';
    let slidesAfter;
    let slidesBefore;

    if (centeredSlides) {
      slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
      slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
    } else {
      slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
      slidesBefore = slidesPerGroup + addSlidesBefore;
    }

    const from = Math.max((activeIndex || 0) - slidesBefore, 0);
    const to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
    const offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
    Object.assign(swiper.virtual, {
      from,
      to,
      offset,
      slidesGrid: swiper.slidesGrid
    });

    function onRendered() {
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();

      if (swiper.lazy && swiper.params.lazy.enabled) {
        swiper.lazy.load();
      }
    }

    if (previousFrom === from && previousTo === to && !force) {
      if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
        swiper.slides.css(offsetProp, `${offset}px`);
      }

      swiper.updateProgress();
      return;
    }

    if (swiper.params.virtual.renderExternal) {
      swiper.params.virtual.renderExternal.call(swiper, {
        offset,
        from,
        to,
        slides: function getSlides() {
          const slidesToRender = [];

          for (let i = from; i <= to; i += 1) {
            slidesToRender.push(slides[i]);
          }

          return slidesToRender;
        }()
      });

      if (swiper.params.virtual.renderExternalUpdate) {
        onRendered();
      }

      return;
    }

    const prependIndexes = [];
    const appendIndexes = [];

    if (force) {
      swiper.$wrapperEl.find(`.${swiper.params.slideClass}`).remove();
    } else {
      for (let i = previousFrom; i <= previousTo; i += 1) {
        if (i < from || i > to) {
          swiper.$wrapperEl.find(`.${swiper.params.slideClass}[data-swiper-slide-index="${i}"]`).remove();
        }
      }
    }

    for (let i = 0; i < slides.length; i += 1) {
      if (i >= from && i <= to) {
        if (typeof previousTo === 'undefined' || force) {
          appendIndexes.push(i);
        } else {
          if (i > previousTo) appendIndexes.push(i);
          if (i < previousFrom) prependIndexes.push(i);
        }
      }
    }

    appendIndexes.forEach(index => {
      swiper.$wrapperEl.append(renderSlide(slides[index], index));
    });
    prependIndexes.sort((a, b) => b - a).forEach(index => {
      swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
    });
    swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, `${offset}px`);
    onRendered();
  }

  function appendSlide(slides) {
    if (typeof slides === 'object' && 'length' in slides) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.push(slides[i]);
      }
    } else {
      swiper.virtual.slides.push(slides);
    }

    update(true);
  }

  function prependSlide(slides) {
    const activeIndex = swiper.activeIndex;
    let newActiveIndex = activeIndex + 1;
    let numberOfNewSlides = 1;

    if (Array.isArray(slides)) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
      }

      newActiveIndex = activeIndex + slides.length;
      numberOfNewSlides = slides.length;
    } else {
      swiper.virtual.slides.unshift(slides);
    }

    if (swiper.params.virtual.cache) {
      const cache = swiper.virtual.cache;
      const newCache = {};
      Object.keys(cache).forEach(cachedIndex => {
        const $cachedEl = cache[cachedIndex];
        const cachedElIndex = $cachedEl.attr('data-swiper-slide-index');

        if (cachedElIndex) {
          $cachedEl.attr('data-swiper-slide-index', parseInt(cachedElIndex, 10) + numberOfNewSlides);
        }

        newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = $cachedEl;
      });
      swiper.virtual.cache = newCache;
    }

    update(true);
    swiper.slideTo(newActiveIndex, 0);
  }

  function removeSlide(slidesIndexes) {
    if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;
    let activeIndex = swiper.activeIndex;

    if (Array.isArray(slidesIndexes)) {
      for (let i = slidesIndexes.length - 1; i >= 0; i -= 1) {
        swiper.virtual.slides.splice(slidesIndexes[i], 1);

        if (swiper.params.virtual.cache) {
          delete swiper.virtual.cache[slidesIndexes[i]];
        }

        if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
        activeIndex = Math.max(activeIndex, 0);
      }
    } else {
      swiper.virtual.slides.splice(slidesIndexes, 1);

      if (swiper.params.virtual.cache) {
        delete swiper.virtual.cache[slidesIndexes];
      }

      if (slidesIndexes < activeIndex) activeIndex -= 1;
      activeIndex = Math.max(activeIndex, 0);
    }

    update(true);
    swiper.slideTo(activeIndex, 0);
  }

  function removeAllSlides() {
    swiper.virtual.slides = [];

    if (swiper.params.virtual.cache) {
      swiper.virtual.cache = {};
    }

    update(true);
    swiper.slideTo(0, 0);
  }

  on('beforeInit', () => {
    if (!swiper.params.virtual.enabled) return;
    swiper.virtual.slides = swiper.params.virtual.slides;
    swiper.classNames.push(`${swiper.params.containerModifierClass}virtual`);
    swiper.params.watchSlidesProgress = true;
    swiper.originalParams.watchSlidesProgress = true;

    if (!swiper.params.initialSlide) {
      update();
    }
  });
  on('setTranslate', () => {
    if (!swiper.params.virtual.enabled) return;

    if (swiper.params.cssMode && !swiper._immediateVirtual) {
      clearTimeout(cssModeTimeout);
      cssModeTimeout = setTimeout(() => {
        update();
      }, 100);
    } else {
      update();
    }
  });
  on('init update resize', () => {
    if (!swiper.params.virtual.enabled) return;

    if (swiper.params.cssMode) {
      (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_1__.setCSSProperty)(swiper.wrapperEl, '--swiper-virtual-size', `${swiper.virtualSize}px`);
    }
  });
  Object.assign(swiper.virtual, {
    appendSlide,
    prependSlide,
    removeSlide,
    removeAllSlides,
    update
  });
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/zoom/zoom.js":
/*!*******************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/zoom/zoom.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Zoom; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "../../../AppVuejs/wbu-atomique/node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/dom.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/utils.js");



function Zoom({
  swiper,
  extendParams,
  on,
  emit
}) {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  extendParams({
    zoom: {
      enabled: false,
      maxRatio: 3,
      minRatio: 1,
      toggle: true,
      containerClass: 'swiper-zoom-container',
      zoomedSlideClass: 'swiper-slide-zoomed'
    }
  });
  swiper.zoom = {
    enabled: false
  };
  let currentScale = 1;
  let isScaling = false;
  let gesturesEnabled;
  let fakeGestureTouched;
  let fakeGestureMoved;
  const gesture = {
    $slideEl: undefined,
    slideWidth: undefined,
    slideHeight: undefined,
    $imageEl: undefined,
    $imageWrapEl: undefined,
    maxRatio: 3
  };
  const image = {
    isTouched: undefined,
    isMoved: undefined,
    currentX: undefined,
    currentY: undefined,
    minX: undefined,
    minY: undefined,
    maxX: undefined,
    maxY: undefined,
    width: undefined,
    height: undefined,
    startX: undefined,
    startY: undefined,
    touchesStart: {},
    touchesCurrent: {}
  };
  const velocity = {
    x: undefined,
    y: undefined,
    prevPositionX: undefined,
    prevPositionY: undefined,
    prevTime: undefined
  };
  let scale = 1;
  Object.defineProperty(swiper.zoom, 'scale', {
    get() {
      return scale;
    },

    set(value) {
      if (scale !== value) {
        const imageEl = gesture.$imageEl ? gesture.$imageEl[0] : undefined;
        const slideEl = gesture.$slideEl ? gesture.$slideEl[0] : undefined;
        emit('zoomChange', value, imageEl, slideEl);
      }

      scale = value;
    }

  });

  function getDistanceBetweenTouches(e) {
    if (e.targetTouches.length < 2) return 1;
    const x1 = e.targetTouches[0].pageX;
    const y1 = e.targetTouches[0].pageY;
    const x2 = e.targetTouches[1].pageX;
    const y2 = e.targetTouches[1].pageY;
    const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    return distance;
  } // Events


  function onGestureStart(e) {
    const support = swiper.support;
    const params = swiper.params.zoom;
    fakeGestureTouched = false;
    fakeGestureMoved = false;

    if (!support.gestures) {
      if (e.type !== 'touchstart' || e.type === 'touchstart' && e.targetTouches.length < 2) {
        return;
      }

      fakeGestureTouched = true;
      gesture.scaleStart = getDistanceBetweenTouches(e);
    }

    if (!gesture.$slideEl || !gesture.$slideEl.length) {
      gesture.$slideEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__.default)(e.target).closest(`.${swiper.params.slideClass}`);
      if (gesture.$slideEl.length === 0) gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
      gesture.$imageEl = gesture.$slideEl.find(`.${params.containerClass}`).eq(0).find('img, svg, canvas, picture, .swiper-zoom-target');
      gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
      gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;

      if (gesture.$imageWrapEl.length === 0) {
        gesture.$imageEl = undefined;
        return;
      }
    }

    if (gesture.$imageEl) {
      gesture.$imageEl.transition(0);
    }

    isScaling = true;
  }

  function onGestureChange(e) {
    const support = swiper.support;
    const params = swiper.params.zoom;
    const zoom = swiper.zoom;

    if (!support.gestures) {
      if (e.type !== 'touchmove' || e.type === 'touchmove' && e.targetTouches.length < 2) {
        return;
      }

      fakeGestureMoved = true;
      gesture.scaleMove = getDistanceBetweenTouches(e);
    }

    if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
      if (e.type === 'gesturechange') onGestureStart(e);
      return;
    }

    if (support.gestures) {
      zoom.scale = e.scale * currentScale;
    } else {
      zoom.scale = gesture.scaleMove / gesture.scaleStart * currentScale;
    }

    if (zoom.scale > gesture.maxRatio) {
      zoom.scale = gesture.maxRatio - 1 + (zoom.scale - gesture.maxRatio + 1) ** 0.5;
    }

    if (zoom.scale < params.minRatio) {
      zoom.scale = params.minRatio + 1 - (params.minRatio - zoom.scale + 1) ** 0.5;
    }

    gesture.$imageEl.transform(`translate3d(0,0,0) scale(${zoom.scale})`);
  }

  function onGestureEnd(e) {
    const device = swiper.device;
    const support = swiper.support;
    const params = swiper.params.zoom;
    const zoom = swiper.zoom;

    if (!support.gestures) {
      if (!fakeGestureTouched || !fakeGestureMoved) {
        return;
      }

      if (e.type !== 'touchend' || e.type === 'touchend' && e.changedTouches.length < 2 && !device.android) {
        return;
      }

      fakeGestureTouched = false;
      fakeGestureMoved = false;
    }

    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
    gesture.$imageEl.transition(swiper.params.speed).transform(`translate3d(0,0,0) scale(${zoom.scale})`);
    currentScale = zoom.scale;
    isScaling = false;
    if (zoom.scale === 1) gesture.$slideEl = undefined;
  }

  function onTouchStart(e) {
    const device = swiper.device;
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    if (image.isTouched) return;
    if (device.android && e.cancelable) e.preventDefault();
    image.isTouched = true;
    image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
    image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
  }

  function onTouchMove(e) {
    const zoom = swiper.zoom;
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    swiper.allowClick = false;
    if (!image.isTouched || !gesture.$slideEl) return;

    if (!image.isMoved) {
      image.width = gesture.$imageEl[0].offsetWidth;
      image.height = gesture.$imageEl[0].offsetHeight;
      image.startX = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.getTranslate)(gesture.$imageWrapEl[0], 'x') || 0;
      image.startY = (0,_shared_utils_js__WEBPACK_IMPORTED_MODULE_2__.getTranslate)(gesture.$imageWrapEl[0], 'y') || 0;
      gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
      gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
      gesture.$imageWrapEl.transition(0);
    } // Define if we need image drag


    const scaledWidth = image.width * zoom.scale;
    const scaledHeight = image.height * zoom.scale;
    if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;
    image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
    image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;

    if (!image.isMoved && !isScaling) {
      if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
        image.isTouched = false;
        return;
      }

      if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
        image.isTouched = false;
        return;
      }
    }

    if (e.cancelable) {
      e.preventDefault();
    }

    e.stopPropagation();
    image.isMoved = true;
    image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX;
    image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY;

    if (image.currentX < image.minX) {
      image.currentX = image.minX + 1 - (image.minX - image.currentX + 1) ** 0.8;
    }

    if (image.currentX > image.maxX) {
      image.currentX = image.maxX - 1 + (image.currentX - image.maxX + 1) ** 0.8;
    }

    if (image.currentY < image.minY) {
      image.currentY = image.minY + 1 - (image.minY - image.currentY + 1) ** 0.8;
    }

    if (image.currentY > image.maxY) {
      image.currentY = image.maxY - 1 + (image.currentY - image.maxY + 1) ** 0.8;
    } // Velocity


    if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
    if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
    if (!velocity.prevTime) velocity.prevTime = Date.now();
    velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
    velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
    if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
    if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
    velocity.prevPositionX = image.touchesCurrent.x;
    velocity.prevPositionY = image.touchesCurrent.y;
    velocity.prevTime = Date.now();
    gesture.$imageWrapEl.transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`);
  }

  function onTouchEnd() {
    const zoom = swiper.zoom;
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;

    if (!image.isTouched || !image.isMoved) {
      image.isTouched = false;
      image.isMoved = false;
      return;
    }

    image.isTouched = false;
    image.isMoved = false;
    let momentumDurationX = 300;
    let momentumDurationY = 300;
    const momentumDistanceX = velocity.x * momentumDurationX;
    const newPositionX = image.currentX + momentumDistanceX;
    const momentumDistanceY = velocity.y * momentumDurationY;
    const newPositionY = image.currentY + momentumDistanceY; // Fix duration

    if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
    if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
    const momentumDuration = Math.max(momentumDurationX, momentumDurationY);
    image.currentX = newPositionX;
    image.currentY = newPositionY; // Define if we need image drag

    const scaledWidth = image.width * zoom.scale;
    const scaledHeight = image.height * zoom.scale;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;
    image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
    image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
    gesture.$imageWrapEl.transition(momentumDuration).transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`);
  }

  function onTransitionEnd() {
    const zoom = swiper.zoom;

    if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
      if (gesture.$imageEl) {
        gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
      }

      if (gesture.$imageWrapEl) {
        gesture.$imageWrapEl.transform('translate3d(0,0,0)');
      }

      zoom.scale = 1;
      currentScale = 1;
      gesture.$slideEl = undefined;
      gesture.$imageEl = undefined;
      gesture.$imageWrapEl = undefined;
    }
  }

  function zoomIn(e) {
    const zoom = swiper.zoom;
    const params = swiper.params.zoom;

    if (!gesture.$slideEl) {
      if (e && e.target) {
        gesture.$slideEl = (0,_shared_dom_js__WEBPACK_IMPORTED_MODULE_1__.default)(e.target).closest(`.${swiper.params.slideClass}`);
      }

      if (!gesture.$slideEl) {
        if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
          gesture.$slideEl = swiper.$wrapperEl.children(`.${swiper.params.slideActiveClass}`);
        } else {
          gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
        }
      }

      gesture.$imageEl = gesture.$slideEl.find(`.${params.containerClass}`).eq(0).find('img, svg, canvas, picture, .swiper-zoom-target');
      gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
    }

    if (!gesture.$imageEl || gesture.$imageEl.length === 0 || !gesture.$imageWrapEl || gesture.$imageWrapEl.length === 0) return;

    if (swiper.params.cssMode) {
      swiper.wrapperEl.style.overflow = 'hidden';
      swiper.wrapperEl.style.touchAction = 'none';
    }

    gesture.$slideEl.addClass(`${params.zoomedSlideClass}`);
    let touchX;
    let touchY;
    let offsetX;
    let offsetY;
    let diffX;
    let diffY;
    let translateX;
    let translateY;
    let imageWidth;
    let imageHeight;
    let scaledWidth;
    let scaledHeight;
    let translateMinX;
    let translateMinY;
    let translateMaxX;
    let translateMaxY;
    let slideWidth;
    let slideHeight;

    if (typeof image.touchesStart.x === 'undefined' && e) {
      touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
      touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
    } else {
      touchX = image.touchesStart.x;
      touchY = image.touchesStart.y;
    }

    zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
    currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;

    if (e) {
      slideWidth = gesture.$slideEl[0].offsetWidth;
      slideHeight = gesture.$slideEl[0].offsetHeight;
      offsetX = gesture.$slideEl.offset().left + window.scrollX;
      offsetY = gesture.$slideEl.offset().top + window.scrollY;
      diffX = offsetX + slideWidth / 2 - touchX;
      diffY = offsetY + slideHeight / 2 - touchY;
      imageWidth = gesture.$imageEl[0].offsetWidth;
      imageHeight = gesture.$imageEl[0].offsetHeight;
      scaledWidth = imageWidth * zoom.scale;
      scaledHeight = imageHeight * zoom.scale;
      translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
      translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
      translateMaxX = -translateMinX;
      translateMaxY = -translateMinY;
      translateX = diffX * zoom.scale;
      translateY = diffY * zoom.scale;

      if (translateX < translateMinX) {
        translateX = translateMinX;
      }

      if (translateX > translateMaxX) {
        translateX = translateMaxX;
      }

      if (translateY < translateMinY) {
        translateY = translateMinY;
      }

      if (translateY > translateMaxY) {
        translateY = translateMaxY;
      }
    } else {
      translateX = 0;
      translateY = 0;
    }

    gesture.$imageWrapEl.transition(300).transform(`translate3d(${translateX}px, ${translateY}px,0)`);
    gesture.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${zoom.scale})`);
  }

  function zoomOut() {
    const zoom = swiper.zoom;
    const params = swiper.params.zoom;

    if (!gesture.$slideEl) {
      if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
        gesture.$slideEl = swiper.$wrapperEl.children(`.${swiper.params.slideActiveClass}`);
      } else {
        gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
      }

      gesture.$imageEl = gesture.$slideEl.find(`.${params.containerClass}`).eq(0).find('img, svg, canvas, picture, .swiper-zoom-target');
      gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
    }

    if (!gesture.$imageEl || gesture.$imageEl.length === 0 || !gesture.$imageWrapEl || gesture.$imageWrapEl.length === 0) return;

    if (swiper.params.cssMode) {
      swiper.wrapperEl.style.overflow = '';
      swiper.wrapperEl.style.touchAction = '';
    }

    zoom.scale = 1;
    currentScale = 1;
    gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
    gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
    gesture.$slideEl.removeClass(`${params.zoomedSlideClass}`);
    gesture.$slideEl = undefined;
  } // Toggle Zoom


  function zoomToggle(e) {
    const zoom = swiper.zoom;

    if (zoom.scale && zoom.scale !== 1) {
      // Zoom Out
      zoomOut();
    } else {
      // Zoom In
      zoomIn(e);
    }
  }

  function getListeners() {
    const support = swiper.support;
    const passiveListener = swiper.touchEvents.start === 'touchstart' && support.passiveListener && swiper.params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    const activeListenerWithCapture = support.passiveListener ? {
      passive: false,
      capture: true
    } : true;
    return {
      passiveListener,
      activeListenerWithCapture
    };
  }

  function getSlideSelector() {
    return `.${swiper.params.slideClass}`;
  }

  function toggleGestures(method) {
    const {
      passiveListener
    } = getListeners();
    const slideSelector = getSlideSelector();
    swiper.$wrapperEl[method]('gesturestart', slideSelector, onGestureStart, passiveListener);
    swiper.$wrapperEl[method]('gesturechange', slideSelector, onGestureChange, passiveListener);
    swiper.$wrapperEl[method]('gestureend', slideSelector, onGestureEnd, passiveListener);
  }

  function enableGestures() {
    if (gesturesEnabled) return;
    gesturesEnabled = true;
    toggleGestures('on');
  }

  function disableGestures() {
    if (!gesturesEnabled) return;
    gesturesEnabled = false;
    toggleGestures('off');
  } // Attach/Detach Events


  function enable() {
    const zoom = swiper.zoom;
    if (zoom.enabled) return;
    zoom.enabled = true;
    const support = swiper.support;
    const {
      passiveListener,
      activeListenerWithCapture
    } = getListeners();
    const slideSelector = getSlideSelector(); // Scale image

    if (support.gestures) {
      swiper.$wrapperEl.on(swiper.touchEvents.start, enableGestures, passiveListener);
      swiper.$wrapperEl.on(swiper.touchEvents.end, disableGestures, passiveListener);
    } else if (swiper.touchEvents.start === 'touchstart') {
      swiper.$wrapperEl.on(swiper.touchEvents.start, slideSelector, onGestureStart, passiveListener);
      swiper.$wrapperEl.on(swiper.touchEvents.move, slideSelector, onGestureChange, activeListenerWithCapture);
      swiper.$wrapperEl.on(swiper.touchEvents.end, slideSelector, onGestureEnd, passiveListener);

      if (swiper.touchEvents.cancel) {
        swiper.$wrapperEl.on(swiper.touchEvents.cancel, slideSelector, onGestureEnd, passiveListener);
      }
    } // Move image


    swiper.$wrapperEl.on(swiper.touchEvents.move, `.${swiper.params.zoom.containerClass}`, onTouchMove, activeListenerWithCapture);
  }

  function disable() {
    const zoom = swiper.zoom;
    if (!zoom.enabled) return;
    const support = swiper.support;
    zoom.enabled = false;
    const {
      passiveListener,
      activeListenerWithCapture
    } = getListeners();
    const slideSelector = getSlideSelector(); // Scale image

    if (support.gestures) {
      swiper.$wrapperEl.off(swiper.touchEvents.start, enableGestures, passiveListener);
      swiper.$wrapperEl.off(swiper.touchEvents.end, disableGestures, passiveListener);
    } else if (swiper.touchEvents.start === 'touchstart') {
      swiper.$wrapperEl.off(swiper.touchEvents.start, slideSelector, onGestureStart, passiveListener);
      swiper.$wrapperEl.off(swiper.touchEvents.move, slideSelector, onGestureChange, activeListenerWithCapture);
      swiper.$wrapperEl.off(swiper.touchEvents.end, slideSelector, onGestureEnd, passiveListener);

      if (swiper.touchEvents.cancel) {
        swiper.$wrapperEl.off(swiper.touchEvents.cancel, slideSelector, onGestureEnd, passiveListener);
      }
    } // Move image


    swiper.$wrapperEl.off(swiper.touchEvents.move, `.${swiper.params.zoom.containerClass}`, onTouchMove, activeListenerWithCapture);
  }

  on('init', () => {
    if (swiper.params.zoom.enabled) {
      enable();
    }
  });
  on('destroy', () => {
    disable();
  });
  on('touchStart', (_s, e) => {
    if (!swiper.zoom.enabled) return;
    onTouchStart(e);
  });
  on('touchEnd', (_s, e) => {
    if (!swiper.zoom.enabled) return;
    onTouchEnd(e);
  });
  on('doubleTap', (_s, e) => {
    if (!swiper.animating && swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
      zoomToggle(e);
    }
  });
  on('transitionEnd', () => {
    if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
      onTransitionEnd();
    }
  });
  on('slideChange', () => {
    if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
      onTransitionEnd();
    }
  });
  Object.assign(swiper.zoom, {
    enable,
    disable,
    in: zoomIn,
    out: zoomOut,
    toggle: zoomToggle
  });
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/classes-to-selector.js":
/*!****************************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/classes-to-selector.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ classesToSelector; }
/* harmony export */ });
function classesToSelector(classes = '') {
  return `.${classes.trim().replace(/([\.:!\/])/g, '\\$1') // eslint-disable-line
  .replace(/ /g, '.')}`;
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/create-element-if-not-defined.js":
/*!**************************************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/create-element-if-not-defined.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createElementIfNotDefined; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "../../../AppVuejs/wbu-atomique/node_modules/ssr-window/ssr-window.esm.js");

function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();

  if (swiper.params.createElements) {
    Object.keys(checkProps).forEach(key => {
      if (!params[key] && params.auto === true) {
        let element = swiper.$el.children(`.${checkProps[key]}`)[0];

        if (!element) {
          element = document.createElement('div');
          element.className = checkProps[key];
          swiper.$el.append(element);
        }

        params[key] = element;
        originalParams[key] = element;
      }
    });
  }

  return params;
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/create-shadow.js":
/*!**********************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/create-shadow.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createShadow; }
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/dom.js");

function createShadow(params, $slideEl, side) {
  const shadowClass = `swiper-slide-shadow${side ? `-${side}` : ''}`;
  const $shadowContainer = params.transformEl ? $slideEl.find(params.transformEl) : $slideEl;
  let $shadowEl = $shadowContainer.children(`.${shadowClass}`);

  if (!$shadowEl.length) {
    $shadowEl = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.default)(`<div class="swiper-slide-shadow${side ? `-${side}` : ''}"></div>`);
    $shadowContainer.append($shadowEl);
  }

  return $shadowEl;
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/dom.js":
/*!************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/dom.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dom7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dom7 */ "../../../AppVuejs/wbu-atomique/node_modules/dom7/dom7.esm.js");

const Methods = {
  addClass: dom7__WEBPACK_IMPORTED_MODULE_0__.addClass,
  removeClass: dom7__WEBPACK_IMPORTED_MODULE_0__.removeClass,
  hasClass: dom7__WEBPACK_IMPORTED_MODULE_0__.hasClass,
  toggleClass: dom7__WEBPACK_IMPORTED_MODULE_0__.toggleClass,
  attr: dom7__WEBPACK_IMPORTED_MODULE_0__.attr,
  removeAttr: dom7__WEBPACK_IMPORTED_MODULE_0__.removeAttr,
  transform: dom7__WEBPACK_IMPORTED_MODULE_0__.transform,
  transition: dom7__WEBPACK_IMPORTED_MODULE_0__.transition,
  on: dom7__WEBPACK_IMPORTED_MODULE_0__.on,
  off: dom7__WEBPACK_IMPORTED_MODULE_0__.off,
  trigger: dom7__WEBPACK_IMPORTED_MODULE_0__.trigger,
  transitionEnd: dom7__WEBPACK_IMPORTED_MODULE_0__.transitionEnd,
  outerWidth: dom7__WEBPACK_IMPORTED_MODULE_0__.outerWidth,
  outerHeight: dom7__WEBPACK_IMPORTED_MODULE_0__.outerHeight,
  styles: dom7__WEBPACK_IMPORTED_MODULE_0__.styles,
  offset: dom7__WEBPACK_IMPORTED_MODULE_0__.offset,
  css: dom7__WEBPACK_IMPORTED_MODULE_0__.css,
  each: dom7__WEBPACK_IMPORTED_MODULE_0__.each,
  html: dom7__WEBPACK_IMPORTED_MODULE_0__.html,
  text: dom7__WEBPACK_IMPORTED_MODULE_0__.text,
  is: dom7__WEBPACK_IMPORTED_MODULE_0__.is,
  index: dom7__WEBPACK_IMPORTED_MODULE_0__.index,
  eq: dom7__WEBPACK_IMPORTED_MODULE_0__.eq,
  append: dom7__WEBPACK_IMPORTED_MODULE_0__.append,
  prepend: dom7__WEBPACK_IMPORTED_MODULE_0__.prepend,
  next: dom7__WEBPACK_IMPORTED_MODULE_0__.next,
  nextAll: dom7__WEBPACK_IMPORTED_MODULE_0__.nextAll,
  prev: dom7__WEBPACK_IMPORTED_MODULE_0__.prev,
  prevAll: dom7__WEBPACK_IMPORTED_MODULE_0__.prevAll,
  parent: dom7__WEBPACK_IMPORTED_MODULE_0__.parent,
  parents: dom7__WEBPACK_IMPORTED_MODULE_0__.parents,
  closest: dom7__WEBPACK_IMPORTED_MODULE_0__.closest,
  find: dom7__WEBPACK_IMPORTED_MODULE_0__.find,
  children: dom7__WEBPACK_IMPORTED_MODULE_0__.children,
  filter: dom7__WEBPACK_IMPORTED_MODULE_0__.filter,
  remove: dom7__WEBPACK_IMPORTED_MODULE_0__.remove
};
Object.keys(Methods).forEach(methodName => {
  Object.defineProperty(dom7__WEBPACK_IMPORTED_MODULE_0__.$.fn, methodName, {
    value: Methods[methodName],
    writable: true
  });
});
/* harmony default export */ __webpack_exports__["default"] = (dom7__WEBPACK_IMPORTED_MODULE_0__.$);

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/effect-init.js":
/*!********************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/effect-init.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ effectInit; }
/* harmony export */ });
function effectInit(params) {
  const {
    effect,
    swiper,
    on,
    setTranslate,
    setTransition,
    overwriteParams,
    perspective
  } = params;
  on('beforeInit', () => {
    if (swiper.params.effect !== effect) return;
    swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);

    if (perspective && perspective()) {
      swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
    }

    const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
    Object.assign(swiper.params, overwriteParamsResult);
    Object.assign(swiper.originalParams, overwriteParamsResult);
  });
  on('setTranslate', () => {
    if (swiper.params.effect !== effect) return;
    setTranslate();
  });
  on('setTransition', (_s, duration) => {
    if (swiper.params.effect !== effect) return;
    setTransition(duration);
  });
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/effect-target.js":
/*!**********************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/effect-target.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ effectTarget; }
/* harmony export */ });
function effectTarget(effectParams, $slideEl) {
  if (effectParams.transformEl) {
    return $slideEl.find(effectParams.transformEl).css({
      'backface-visibility': 'hidden',
      '-webkit-backface-visibility': 'hidden'
    });
  }

  return $slideEl;
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/effect-virtual-transition-end.js":
/*!**************************************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/effect-virtual-transition-end.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ effectVirtualTransitionEnd; }
/* harmony export */ });
function effectVirtualTransitionEnd({
  swiper,
  duration,
  transformEl,
  allSlides
}) {
  const {
    slides,
    activeIndex,
    $wrapperEl
  } = swiper;

  if (swiper.params.virtualTranslate && duration !== 0) {
    let eventTriggered = false;
    let $transitionEndTarget;

    if (allSlides) {
      $transitionEndTarget = transformEl ? slides.find(transformEl) : slides;
    } else {
      $transitionEndTarget = transformEl ? slides.eq(activeIndex).find(transformEl) : slides.eq(activeIndex);
    }

    $transitionEndTarget.transitionEnd(() => {
      if (eventTriggered) return;
      if (!swiper || swiper.destroyed) return;
      eventTriggered = true;
      swiper.animating = false;
      const triggerEvents = ['webkitTransitionEnd', 'transitionend'];

      for (let i = 0; i < triggerEvents.length; i += 1) {
        $wrapperEl.trigger(triggerEvents[i]);
      }
    });
  }
}

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/get-browser.js":
/*!********************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/get-browser.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBrowser": function() { return /* binding */ getBrowser; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "../../../AppVuejs/wbu-atomique/node_modules/ssr-window/ssr-window.esm.js");

let browser;

function calcBrowser() {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();

  function isSafari() {
    const ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
  }

  return {
    isSafari: isSafari(),
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
  };
}

function getBrowser() {
  if (!browser) {
    browser = calcBrowser();
  }

  return browser;
}



/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/get-device.js":
/*!*******************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/get-device.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDevice": function() { return /* binding */ getDevice; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "../../../AppVuejs/wbu-atomique/node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _get_support_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-support.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/get-support.js");


let deviceCached;

function calcDevice({
  userAgent
} = {}) {
  const support = (0,_get_support_js__WEBPACK_IMPORTED_MODULE_1__.getSupport)();
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  const platform = window.navigator.platform;
  const ua = userAgent || window.navigator.userAgent;
  const device = {
    ios: false,
    android: false
  };
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line

  let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
  const windows = platform === 'Win32';
  let macos = platform === 'MacIntel'; // iPadOs 13 fix

  const iPadScreens = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768', '820x1180', '1180x820', '810x1080', '1080x810'];

  if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
    ipad = ua.match(/(Version)\/([\d.]+)/);
    if (!ipad) ipad = [0, 1, '13_0_0'];
    macos = false;
  } // Android


  if (android && !windows) {
    device.os = 'android';
    device.android = true;
  }

  if (ipad || iphone || ipod) {
    device.os = 'ios';
    device.ios = true;
  } // Export object


  return device;
}

function getDevice(overrides = {}) {
  if (!deviceCached) {
    deviceCached = calcDevice(overrides);
  }

  return deviceCached;
}



/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/get-support.js":
/*!********************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/get-support.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSupport": function() { return /* binding */ getSupport; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "../../../AppVuejs/wbu-atomique/node_modules/ssr-window/ssr-window.esm.js");

let support;

function calcSupport() {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  const document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  return {
    smoothScroll: document.documentElement && 'scrollBehavior' in document.documentElement.style,
    touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch),
    passiveListener: function checkPassiveListener() {
      let supportsPassive = false;

      try {
        const opts = Object.defineProperty({}, 'passive', {
          // eslint-disable-next-line
          get() {
            supportsPassive = true;
          }

        });
        window.addEventListener('testPassiveListener', null, opts);
      } catch (e) {// No support
      }

      return supportsPassive;
    }(),
    gestures: function checkGestures() {
      return 'ongesturestart' in window;
    }()
  };
}

function getSupport() {
  if (!support) {
    support = calcSupport();
  }

  return support;
}



/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/utils.js":
/*!**************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/shared/utils.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "animateCSSModeScroll": function() { return /* binding */ animateCSSModeScroll; },
/* harmony export */   "deleteProps": function() { return /* binding */ deleteProps; },
/* harmony export */   "nextTick": function() { return /* binding */ nextTick; },
/* harmony export */   "now": function() { return /* binding */ now; },
/* harmony export */   "getTranslate": function() { return /* binding */ getTranslate; },
/* harmony export */   "isObject": function() { return /* binding */ isObject; },
/* harmony export */   "extend": function() { return /* binding */ extend; },
/* harmony export */   "getComputedStyle": function() { return /* binding */ getComputedStyle; },
/* harmony export */   "setCSSProperty": function() { return /* binding */ setCSSProperty; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "../../../AppVuejs/wbu-atomique/node_modules/ssr-window/ssr-window.esm.js");


function deleteProps(obj) {
  const object = obj;
  Object.keys(object).forEach(key => {
    try {
      object[key] = null;
    } catch (e) {// no getter for object
    }

    try {
      delete object[key];
    } catch (e) {// something got wrong
    }
  });
}

function nextTick(callback, delay = 0) {
  return setTimeout(callback, delay);
}

function now() {
  return Date.now();
}

function getComputedStyle(el) {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  let style;

  if (window.getComputedStyle) {
    style = window.getComputedStyle(el, null);
  }

  if (!style && el.currentStyle) {
    style = el.currentStyle;
  }

  if (!style) {
    style = el.style;
  }

  return style;
}

function getTranslate(el, axis = 'x') {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  let matrix;
  let curTransform;
  let transformMatrix;
  const curStyle = getComputedStyle(el, null);

  if (window.WebKitCSSMatrix) {
    curTransform = curStyle.transform || curStyle.webkitTransform;

    if (curTransform.split(',').length > 6) {
      curTransform = curTransform.split(', ').map(a => a.replace(',', '.')).join(', ');
    } // Some old versions of Webkit choke when 'none' is passed; pass
    // empty string instead in this case


    transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
  } else {
    transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
    matrix = transformMatrix.toString().split(',');
  }

  if (axis === 'x') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); // Normal Browsers
    else curTransform = parseFloat(matrix[4]);
  }

  if (axis === 'y') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); // Normal Browsers
    else curTransform = parseFloat(matrix[5]);
  }

  return curTransform || 0;
}

function isObject(o) {
  return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
}

function isNode(node) {
  // eslint-disable-next-line
  if (typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined') {
    return node instanceof HTMLElement;
  }

  return node && (node.nodeType === 1 || node.nodeType === 11);
}

function extend(...args) {
  const to = Object(args[0]);
  const noExtend = ['__proto__', 'constructor', 'prototype'];

  for (let i = 1; i < args.length; i += 1) {
    const nextSource = args[i];

    if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {
      const keysArray = Object.keys(Object(nextSource)).filter(key => noExtend.indexOf(key) < 0);

      for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
        const nextKey = keysArray[nextIndex];
        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

        if (desc !== undefined && desc.enumerable) {
          if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend(to[nextKey], nextSource[nextKey]);
            }
          } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            to[nextKey] = {};

            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend(to[nextKey], nextSource[nextKey]);
            }
          } else {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
  }

  return to;
}

function setCSSProperty(el, varName, varValue) {
  el.style.setProperty(varName, varValue);
}

function animateCSSModeScroll({
  swiper,
  targetPosition,
  side
}) {
  const window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  const startPosition = -swiper.translate;
  let startTime = null;
  let time;
  const duration = swiper.params.speed;
  swiper.wrapperEl.style.scrollSnapType = 'none';
  window.cancelAnimationFrame(swiper.cssModeFrameID);
  const dir = targetPosition > startPosition ? 'next' : 'prev';

  const isOutOfBound = (current, target) => {
    return dir === 'next' && current >= target || dir === 'prev' && current <= target;
  };

  const animate = () => {
    time = new Date().getTime();

    if (startTime === null) {
      startTime = time;
    }

    const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
    const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
    let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);

    if (isOutOfBound(currentPosition, targetPosition)) {
      currentPosition = targetPosition;
    }

    swiper.wrapperEl.scrollTo({
      [side]: currentPosition
    });

    if (isOutOfBound(currentPosition, targetPosition)) {
      swiper.wrapperEl.style.overflow = 'hidden';
      swiper.wrapperEl.style.scrollSnapType = '';
      setTimeout(() => {
        swiper.wrapperEl.style.overflow = '';
        swiper.wrapperEl.scrollTo({
          [side]: currentPosition
        });
      });
      window.cancelAnimationFrame(swiper.cssModeFrameID);
      return;
    }

    swiper.cssModeFrameID = window.requestAnimationFrame(animate);
  };

  animate();
}



/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/swiper.esm.js":
/*!************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/swiper.esm.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Swiper": function() { return /* reexport safe */ _core_core_js__WEBPACK_IMPORTED_MODULE_0__.default; },
/* harmony export */   "default": function() { return /* reexport safe */ _core_core_js__WEBPACK_IMPORTED_MODULE_0__.default; },
/* harmony export */   "Virtual": function() { return /* reexport safe */ _modules_virtual_virtual_js__WEBPACK_IMPORTED_MODULE_1__.default; },
/* harmony export */   "Keyboard": function() { return /* reexport safe */ _modules_keyboard_keyboard_js__WEBPACK_IMPORTED_MODULE_2__.default; },
/* harmony export */   "Mousewheel": function() { return /* reexport safe */ _modules_mousewheel_mousewheel_js__WEBPACK_IMPORTED_MODULE_3__.default; },
/* harmony export */   "Navigation": function() { return /* reexport safe */ _modules_navigation_navigation_js__WEBPACK_IMPORTED_MODULE_4__.default; },
/* harmony export */   "Pagination": function() { return /* reexport safe */ _modules_pagination_pagination_js__WEBPACK_IMPORTED_MODULE_5__.default; },
/* harmony export */   "Scrollbar": function() { return /* reexport safe */ _modules_scrollbar_scrollbar_js__WEBPACK_IMPORTED_MODULE_6__.default; },
/* harmony export */   "Parallax": function() { return /* reexport safe */ _modules_parallax_parallax_js__WEBPACK_IMPORTED_MODULE_7__.default; },
/* harmony export */   "Zoom": function() { return /* reexport safe */ _modules_zoom_zoom_js__WEBPACK_IMPORTED_MODULE_8__.default; },
/* harmony export */   "Lazy": function() { return /* reexport safe */ _modules_lazy_lazy_js__WEBPACK_IMPORTED_MODULE_9__.default; },
/* harmony export */   "Controller": function() { return /* reexport safe */ _modules_controller_controller_js__WEBPACK_IMPORTED_MODULE_10__.default; },
/* harmony export */   "A11y": function() { return /* reexport safe */ _modules_a11y_a11y_js__WEBPACK_IMPORTED_MODULE_11__.default; },
/* harmony export */   "History": function() { return /* reexport safe */ _modules_history_history_js__WEBPACK_IMPORTED_MODULE_12__.default; },
/* harmony export */   "HashNavigation": function() { return /* reexport safe */ _modules_hash_navigation_hash_navigation_js__WEBPACK_IMPORTED_MODULE_13__.default; },
/* harmony export */   "Autoplay": function() { return /* reexport safe */ _modules_autoplay_autoplay_js__WEBPACK_IMPORTED_MODULE_14__.default; },
/* harmony export */   "Thumbs": function() { return /* reexport safe */ _modules_thumbs_thumbs_js__WEBPACK_IMPORTED_MODULE_15__.default; },
/* harmony export */   "FreeMode": function() { return /* reexport safe */ _modules_free_mode_free_mode_js__WEBPACK_IMPORTED_MODULE_16__.default; },
/* harmony export */   "Grid": function() { return /* reexport safe */ _modules_grid_grid_js__WEBPACK_IMPORTED_MODULE_17__.default; },
/* harmony export */   "Manipulation": function() { return /* reexport safe */ _modules_manipulation_manipulation_js__WEBPACK_IMPORTED_MODULE_18__.default; },
/* harmony export */   "EffectFade": function() { return /* reexport safe */ _modules_effect_fade_effect_fade_js__WEBPACK_IMPORTED_MODULE_19__.default; },
/* harmony export */   "EffectCube": function() { return /* reexport safe */ _modules_effect_cube_effect_cube_js__WEBPACK_IMPORTED_MODULE_20__.default; },
/* harmony export */   "EffectFlip": function() { return /* reexport safe */ _modules_effect_flip_effect_flip_js__WEBPACK_IMPORTED_MODULE_21__.default; },
/* harmony export */   "EffectCoverflow": function() { return /* reexport safe */ _modules_effect_coverflow_effect_coverflow_js__WEBPACK_IMPORTED_MODULE_22__.default; },
/* harmony export */   "EffectCreative": function() { return /* reexport safe */ _modules_effect_creative_effect_creative_js__WEBPACK_IMPORTED_MODULE_23__.default; },
/* harmony export */   "EffectCards": function() { return /* reexport safe */ _modules_effect_cards_effect_cards_js__WEBPACK_IMPORTED_MODULE_24__.default; }
/* harmony export */ });
/* harmony import */ var _core_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/core.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/core/core.js");
/* harmony import */ var _modules_virtual_virtual_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/virtual/virtual.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/virtual/virtual.js");
/* harmony import */ var _modules_keyboard_keyboard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/keyboard/keyboard.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/keyboard/keyboard.js");
/* harmony import */ var _modules_mousewheel_mousewheel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/mousewheel/mousewheel.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/mousewheel/mousewheel.js");
/* harmony import */ var _modules_navigation_navigation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/navigation/navigation.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/navigation/navigation.js");
/* harmony import */ var _modules_pagination_pagination_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/pagination/pagination.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/pagination/pagination.js");
/* harmony import */ var _modules_scrollbar_scrollbar_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/scrollbar/scrollbar.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/scrollbar/scrollbar.js");
/* harmony import */ var _modules_parallax_parallax_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/parallax/parallax.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/parallax/parallax.js");
/* harmony import */ var _modules_zoom_zoom_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/zoom/zoom.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/zoom/zoom.js");
/* harmony import */ var _modules_lazy_lazy_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/lazy/lazy.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/lazy/lazy.js");
/* harmony import */ var _modules_controller_controller_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/controller/controller.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/controller/controller.js");
/* harmony import */ var _modules_a11y_a11y_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/a11y/a11y.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/a11y/a11y.js");
/* harmony import */ var _modules_history_history_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/history/history.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/history/history.js");
/* harmony import */ var _modules_hash_navigation_hash_navigation_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/hash-navigation/hash-navigation.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/hash-navigation/hash-navigation.js");
/* harmony import */ var _modules_autoplay_autoplay_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/autoplay/autoplay.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/autoplay/autoplay.js");
/* harmony import */ var _modules_thumbs_thumbs_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/thumbs/thumbs.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/thumbs/thumbs.js");
/* harmony import */ var _modules_free_mode_free_mode_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/free-mode/free-mode.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/free-mode/free-mode.js");
/* harmony import */ var _modules_grid_grid_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modules/grid/grid.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/grid/grid.js");
/* harmony import */ var _modules_manipulation_manipulation_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modules/manipulation/manipulation.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/manipulation/manipulation.js");
/* harmony import */ var _modules_effect_fade_effect_fade_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modules/effect-fade/effect-fade.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/effect-fade/effect-fade.js");
/* harmony import */ var _modules_effect_cube_effect_cube_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./modules/effect-cube/effect-cube.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/effect-cube/effect-cube.js");
/* harmony import */ var _modules_effect_flip_effect_flip_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modules/effect-flip/effect-flip.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/effect-flip/effect-flip.js");
/* harmony import */ var _modules_effect_coverflow_effect_coverflow_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modules/effect-coverflow/effect-coverflow.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/effect-coverflow/effect-coverflow.js");
/* harmony import */ var _modules_effect_creative_effect_creative_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./modules/effect-creative/effect-creative.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/effect-creative/effect-creative.js");
/* harmony import */ var _modules_effect_cards_effect_cards_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./modules/effect-cards/effect-cards.js */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/modules/effect-cards/effect-cards.js");
/**
 * Swiper 7.0.8
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2021 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: October 4, 2021
 */



























/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/js/swiper/swiper-big-v3.js":
/*!*****************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/js/swiper/swiper-big-v3.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/swiper.esm.js");
/* harmony import */ var swiper_css_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/css/bundle */ "../../../AppVuejs/wbu-atomique/node_modules/swiper/swiper-bundle.min.css");
 // configure Swiper to use modules

swiper__WEBPACK_IMPORTED_MODULE_0__.default.use([swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_0__.Parallax, swiper__WEBPACK_IMPORTED_MODULE_0__.Autoplay]); // import Swiper styles

 //import "../../scss/organisme/sections/swiper-big-v3.scss";

/**
 * --
 */

var mySwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__.default(".swiper-big-v3", {
  direction: "horizontal",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true
  },
  //grabCursor: true,
  speed: 1000,
  parallax: true,
  //effect: "slide",
  //mousewheelControl: 1,
  autoplay: {
    delay: 8000
  } //autoplay: false,

});

/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/node_modules/swiper/swiper-bundle.min.css":
/*!********************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/node_modules/swiper/swiper-bundle.min.css ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../../../AppVuejs/wbu-atomique/scss/organisme/sections/swiper-big-v3.scss":
/*!*********************************************************************************!*\
  !*** ../../../AppVuejs/wbu-atomique/scss/organisme/sections/swiper-big-v3.scss ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!***********************************************************!*\
  !*** ./src/js/sections/formatage_models_swiper_big_v3.js ***!
  \***********************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stephane888_wbu_atomique_js_swiper_swiper_big_v3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stephane888/wbu-atomique/js/swiper/swiper-big-v3.js */ "../../../AppVuejs/wbu-atomique/js/swiper/swiper-big-v3.js");
/* harmony import */ var _stephane888_wbu_atomique_scss_organisme_sections_swiper_big_v3_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stephane888/wbu-atomique/scss/organisme/sections/swiper-big-v3.scss */ "../../../AppVuejs/wbu-atomique/scss/organisme/sections/swiper-big-v3.scss");


}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4uL0FwcFZ1ZWpzL3didS1hdG9taXF1ZS9ub2RlX21vZHVsZXMvZG9tNy9kb203LmVzbS5qcyIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4uL0FwcFZ1ZWpzL3didS1hdG9taXF1ZS9ub2RlX21vZHVsZXMvc3NyLXdpbmRvdy9zc3Itd2luZG93LmVzbS5qcyIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4uL0FwcFZ1ZWpzL3didS1hdG9taXF1ZS9ub2RlX21vZHVsZXMvc3dpcGVyL2NvcmUvYnJlYWtwb2ludHMvZ2V0QnJlYWtwb2ludC5qcyIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4uL0FwcFZ1ZWpzL3didS1hdG9taXF1ZS9ub2RlX21vZHVsZXMvc3dpcGVyL2NvcmUvYnJlYWtwb2ludHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uLi9BcHBWdWVqcy93YnUtYXRvbWlxdWUvbm9kZV9tb2R1bGVzL3N3aXBlci9jb3JlL2JyZWFrcG9pbnRzL3NldEJyZWFrcG9pbnQuanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uLi9BcHBWdWVqcy93YnUtYXRvbWlxdWUvbm9kZV9tb2R1bGVzL3N3aXBlci9jb3JlL2NoZWNrLW92ZXJmbG93L2luZGV4LmpzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi4vQXBwVnVlanMvd2J1LWF0b21pcXVlL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS9jbGFzc2VzL2FkZENsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uLi9BcHBWdWVqcy93YnUtYXRvbWlxdWUvbm9kZV9tb2R1bGVzL3N3aXBlci9jb3JlL2NsYXNzZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uLi9BcHBWdWVqcy93YnUtYXRvbWlxdWUvbm9kZV9tb2R1bGVzL3N3aXBlci9jb3JlL2NsYXNzZXMvcmVtb3ZlQ2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4uL0FwcFZ1ZWpzL3didS1hdG9taXF1ZS9ub2RlX21vZHVsZXMvc3dpcGVyL2NvcmUvY29yZS5qcyIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4uL0FwcFZ1ZWpzL3didS1hdG9taXF1ZS9ub2RlX21vZHVsZXMvc3dpcGVyL2NvcmUvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uLi9BcHBWdWVqcy93YnUtYXRvbWlxdWUvbm9kZV9tb2R1bGVzL3N3aXBlci9jb3JlL2V2ZW50cy1lbWl0dGVyLmpzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi4vQXBwVnVlanMvd2J1LWF0b21pcXVlL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS9ldmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uLi9BcHBWdWVqcy93YnUtYXRvbWlxdWUvbm9kZV9tb2R1bGVzL3N3aXBlci9jb3JlL2V2ZW50cy9vbkNsaWNrLmpzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi4vQXBwVnVlanMvd2J1LWF0b21pcXVlL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS9ldmVudHMvb25SZXNpemUuanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uLi9BcHBWdWVqcy93YnUtYXRvbWlxdWUvbm9kZV9tb2R1bGVzL3N3aXBlci9jb3JlL2V2ZW50cy9vblNjcm9sbC5qcyIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4uL0FwcFZ1ZWpzL3didS1hdG9taXF1ZS9ub2RlX21vZHVsZXMvc3dpcGVyL2NvcmUvZXZlbnRzL29uVG91Y2hFbmQuanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uLi9BcHBWdWVqcy93YnUtYXRvbWlxdWUvbm9kZV9tb2R1bGVzL3N3aXBlci9jb3JlL2V2ZW50cy9vblRvdWNoTW92ZS5qcyIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4uL0FwcFZ1ZWpzL3didS1hdG9taXF1ZS9ub2RlX21vZHVsZXMvc3dpcGVyL2NvcmUvZXZlbnRzL29uVG91Y2hTdGFydC5qcyIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4uL0FwcFZ1ZWpzL3didS1hdG9taXF1ZS9ub2RlX21vZHVsZXMvc3dpcGVyL2NvcmUvZ3JhYi1jdXJzb3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uLi9BcHBWdWVqcy93YnUtYXRvbWlxdWUvbm9kZV9tb2R1bGVzL3N3aXBlci9jb3JlL2dyYWItY3Vyc29yL3NldEdyYWJDdXJzb3IuanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uLi9BcHBWdWVqcy93YnUtYXRvbWlxdWUvbm9kZV9tb2R1bGVzL3N3aXBlci9jb3JlL2dyYWItY3Vyc29yL3Vuc2V0R3JhYkN1cnNvci5qcyIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4uL0FwcFZ1ZWpzL3didS1hdG9taXF1ZS9ub2RlX21vZHVsZXMvc3dpcGVyL2NvcmUvaW1hZ2VzL2luZGV4LmpzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi4vQXBwVnVlanMvd2J1LWF0b21pcXVlL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS9pbWFnZXMvbG9hZEltYWdlLmpzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi4vQXBwVnVlanMvd2J1LWF0b21pcXVlL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS9pbWFnZXMvcHJlbG9hZEltYWdlcy5qcyIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4uL0FwcFZ1ZWpzL3didS1hdG9taXF1ZS9ub2RlX21vZHVsZXMvc3dpcGVyL2NvcmUvbG9vcC9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4uL0FwcFZ1ZWpzL3didS1hdG9taXF1ZS9ub2RlX21vZHVsZXMvc3dpcGVyL2NvcmUvbG9vcC9sb29wQ3JlYXRlLmpzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi4vQXBwVnVlanMvd2J1LWF0b21pcXVlL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS9sb29wL2xvb3BEZXN0cm95LmpzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi4vQXBwVnVlanMvd2J1LWF0b21pcXVlL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS9sb29wL2xvb3BGaXguanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uLi9BcHBWdWVqcy93YnUtYXRvbWlxdWUvbm9kZV9tb2R1bGVzL3N3aXBlci9jb3JlL21vZHVsZUV4dGVuZFBhcmFtcy5qcyIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4uL0FwcFZ1ZWpzL3didS1hdG9taXF1ZS9ub2RlX21vZHVsZXMvc3dpcGVyL2NvcmUvbW9kdWxlcy9vYnNlcnZlci9vYnNlcnZlci5qcyIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4uL0FwcFZ1ZWpzL3didS1hdG9taXF1ZS9ub2RlX21vZHVsZXMvc3dpcGVyL2NvcmUvbW9kdWxlcy9yZXNpemUvcmVzaXplLmpzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi4vQXBwVnVlanMvd2J1LWF0b21pcXVlL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS9zbGlkZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4uL0FwcFZ1ZWpzL3didS1hdG9taXF1ZS9ub2RlX21vZHVsZXMvc3dpcGVyL2NvcmUvc2xpZGUvc2xpZGVOZXh0LmpzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi4vQXBwVnVlanMvd2J1LWF0b21pcXVlL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS9zbGlkZS9zbGlkZVByZXYuanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uLi9BcHBWdWVqcy93YnUtYXRvbWlxdWUvbm9kZV9tb2R1bGVzL3N3aXBlci9jb3JlL3NsaWRlL3NsaWRlUmVzZXQuanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uLi9BcHBWdWVqcy93YnUtYXRvbWlxdWUvbm9kZV9tb2R1bGVzL3N3aXBlci9jb3JlL3NsaWRlL3NsaWRlVG8uanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uLi9BcHBWdWVqcy93YnUtYXRvbWlxdWUvbm9kZV9tb2R1bGVzL3N3aXBlci9jb3JlL3NsaWRlL3NsaWRlVG9DbGlja2VkU2xpZGUuanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uLi9BcHBWdWVqcy93YnUtYXRvbWlxdWUvbm9kZV9tb2R1bGVzL3N3aXBlci9jb3JlL3NsaWRlL3NsaWRlVG9DbG9zZXN0LmpzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi4vQXBwVnVlanMvd2J1LWF0b21pcXVlL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS9zbGlkZS9zbGlkZVRvTG9vcC5qcyIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4uL0FwcFZ1ZWpzL3didS1hdG9taXF1ZS9ub2RlX21vZHVsZXMvc3dpcGVyL2NvcmUvdHJhbnNpdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4uL0FwcFZ1ZWpzL3didS1hdG9taXF1ZS9ub2RlX21vZHVsZXMvc3dpcGVyL2NvcmUvdHJhbnNpdGlvbi9zZXRUcmFuc2l0aW9uLmpzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi4vQXBwVnVlanMvd2J1LWF0b21pcXVlL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS90cmFuc2l0aW9uL3RyYW5zaXRpb25FbWl0LmpzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi4vQXBwVnVlanMvd2J1LWF0b21pcXVlL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS90cmFuc2l0aW9uL3RyYW5zaXRpb25FbmQuanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uLi9BcHBWdWVqcy93YnUtYXRvbWlxdWUvbm9kZV9tb2R1bGVzL3N3aXBlci9jb3JlL3RyYW5zaXRpb24vdHJhbnNpdGlvblN0YXJ0LmpzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi4vQXBwVnVlanMvd2J1LWF0b21pcXVlL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS90cmFuc2xhdGUvZ2V0VHJhbnNsYXRlLmpzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi4vQXBwVnVlanMvd2J1LWF0b21pcXVlL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS90cmFuc2xhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uLi9BcHBWdWVqcy93YnUtYXRvbWlxdWUvbm9kZV9tb2R1bGVzL3N3aXBlci9jb3JlL3RyYW5zbGF0ZS9tYXhUcmFuc2xhdGUuanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uLi9BcHBWdWVqcy93YnUtYXRvbWlxdWUvbm9kZV9tb2R1bGVzL3N3aXBlci9jb3JlL3RyYW5zbGF0ZS9taW5UcmFuc2xhdGUuanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uLi9BcHBWdWVqcy93YnUtYXRvbWlxdWUvbm9kZV9tb2R1bGVzL3N3aXBlci9jb3JlL3RyYW5zbGF0ZS9zZXRUcmFuc2xhdGUuanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uLi9BcHBWdWVqcy93YnUtYXRvbWlxdWUvbm9kZV9tb2R1bGVzL3N3aXBlci9jb3JlL3RyYW5zbGF0ZS90cmFuc2xhdGVUby5qcyIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4uL0FwcFZ1ZWpzL3didS1hdG9taXF1ZS9ub2RlX21vZHVsZXMvc3dpcGVyL2NvcmUvdXBkYXRlL2luZGV4LmpzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi4vQXBwVnVlanMvd2J1LWF0b21pcXVlL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS91cGRhdGUvdXBkYXRlQWN0aXZlSW5kZXguanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uLi9BcHBWdWVqcy93YnUtYXRvbWlxdWUvbm9kZV9tb2R1bGVzL3N3aXBlci9jb3JlL3VwZGF0ZS91cGRhdGVBdXRvSGVpZ2h0LmpzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi4vQXBwVnVlanMvd2J1LWF0b21pcXVlL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS91cGRhdGUvdXBkYXRlQ2xpY2tlZFNsaWRlLmpzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi4vQXBwVnVlanMvd2J1LWF0b21pcXVlL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS91cGRhdGUvdXBkYXRlUHJvZ3Jlc3MuanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uLi9BcHBWdWVqcy93YnUtYXRvbWlxdWUvbm9kZV9tb2R1bGVzL3N3aXBlci9jb3JlL3VwZGF0ZS91cGRhdGVTaXplLmpzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi4vQXBwVnVlanMvd2J1LWF0b21pcXVlL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS91cGRhdGUvdXBkYXRlU2xpZGVzLmpzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi4vQXBwVnVlanMvd2J1LWF0b21pcXVlL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS91cGRhdGUvdXBkYXRlU2xpZGVzQ2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4uL0FwcFZ1ZWpzL3didS1hdG9taXF1ZS9ub2RlX21vZHVsZXMvc3dpcGVyL2NvcmUvdXBkYXRlL3VwZGF0ZVNsaWRlc09mZnNldC5qcyIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4uL0FwcFZ1ZWpzL3didS1hdG9taXF1ZS9ub2RlX21vZHVsZXMvc3dpcGVyL2NvcmUvdXBkYXRlL3VwZGF0ZVNsaWRlc1Byb2dyZXNzLmpzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi4vQXBwVnVlanMvd2J1LWF0b21pcXVlL25vZGVfbW9kdWxlcy9zd2lwZXIvbW9kdWxlcy9hMTF5L2ExMXkuanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uLi9BcHBWdWVqcy93YnUtYXRvbWlxdWUvbm9kZV9tb2R1bGVzL3N3aXBlci9tb2R1bGVzL2F1dG9wbGF5L2F1dG9wbGF5LmpzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi4vQXBwVnVlanMvd2J1LWF0b21pcXVlL25vZGVfbW9kdWxlcy9zd2lwZXIvbW9kdWxlcy9jb250cm9sbGVyL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uLi9BcHBWdWVqcy93YnUtYXRvbWlxdWUvbm9kZV9tb2R1bGVzL3N3aXBlci9tb2R1bGVzL2VmZmVjdC1jYXJkcy9lZmZlY3QtY2FyZHMuanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uLi9BcHBWdWVqcy93YnUtYXRvbWlxdWUvbm9kZV9tb2R1bGVzL3N3aXBlci9tb2R1bGVzL2VmZmVjdC1jb3ZlcmZsb3cvZWZmZWN0LWNvdmVyZmxvdy5qcyIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4uL0FwcFZ1ZWpzL3didS1hdG9taXF1ZS9ub2RlX21vZHVsZXMvc3dpcGVyL21vZHVsZXMvZWZmZWN0LWNyZWF0aXZlL2VmZmVjdC1jcmVhdGl2ZS5qcyIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4uL0FwcFZ1ZWpzL3didS1hdG9taXF1ZS9ub2RlX21vZHVsZXMvc3dpcGVyL21vZHVsZXMvZWZmZWN0LWN1YmUvZWZmZWN0LWN1YmUuanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uLi9BcHBWdWVqcy93YnUtYXRvbWlxdWUvbm9kZV9tb2R1bGVzL3N3aXBlci9tb2R1bGVzL2VmZmVjdC1mYWRlL2VmZmVjdC1mYWRlLmpzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi4vQXBwVnVlanMvd2J1LWF0b21pcXVlL25vZGVfbW9kdWxlcy9zd2lwZXIvbW9kdWxlcy9lZmZlY3QtZmxpcC9lZmZlY3QtZmxpcC5qcyIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4uL0FwcFZ1ZWpzL3didS1hdG9taXF1ZS9ub2RlX21vZHVsZXMvc3dpcGVyL21vZHVsZXMvZnJlZS1tb2RlL2ZyZWUtbW9kZS5qcyIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4uL0FwcFZ1ZWpzL3didS1hdG9taXF1ZS9ub2RlX21vZHVsZXMvc3dpcGVyL21vZHVsZXMvZ3JpZC9ncmlkLmpzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi4vQXBwVnVlanMvd2J1LWF0b21pcXVlL25vZGVfbW9kdWxlcy9zd2lwZXIvbW9kdWxlcy9oYXNoLW5hdmlnYXRpb24vaGFzaC1uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi4vQXBwVnVlanMvd2J1LWF0b21pcXVlL25vZGVfbW9kdWxlcy9zd2lwZXIvbW9kdWxlcy9oaXN0b3J5L2hpc3RvcnkuanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uLi9BcHBWdWVqcy93YnUtYXRvbWlxdWUvbm9kZV9tb2R1bGVzL3N3aXBlci9tb2R1bGVzL2tleWJvYXJkL2tleWJvYXJkLmpzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi4vQXBwVnVlanMvd2J1LWF0b21pcXVlL25vZGVfbW9kdWxlcy9zd2lwZXIvbW9kdWxlcy9sYXp5L2xhenkuanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uLi9BcHBWdWVqcy93YnUtYXRvbWlxdWUvbm9kZV9tb2R1bGVzL3N3aXBlci9tb2R1bGVzL21hbmlwdWxhdGlvbi9tYW5pcHVsYXRpb24uanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uLi9BcHBWdWVqcy93YnUtYXRvbWlxdWUvbm9kZV9tb2R1bGVzL3N3aXBlci9tb2R1bGVzL21hbmlwdWxhdGlvbi9tZXRob2RzL2FkZFNsaWRlLmpzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi4vQXBwVnVlanMvd2J1LWF0b21pcXVlL25vZGVfbW9kdWxlcy9zd2lwZXIvbW9kdWxlcy9tYW5pcHVsYXRpb24vbWV0aG9kcy9hcHBlbmRTbGlkZS5qcyIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4uL0FwcFZ1ZWpzL3didS1hdG9taXF1ZS9ub2RlX21vZHVsZXMvc3dpcGVyL21vZHVsZXMvbWFuaXB1bGF0aW9uL21ldGhvZHMvcHJlcGVuZFNsaWRlLmpzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi4vQXBwVnVlanMvd2J1LWF0b21pcXVlL25vZGVfbW9kdWxlcy9zd2lwZXIvbW9kdWxlcy9tYW5pcHVsYXRpb24vbWV0aG9kcy9yZW1vdmVBbGxTbGlkZXMuanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uLi9BcHBWdWVqcy93YnUtYXRvbWlxdWUvbm9kZV9tb2R1bGVzL3N3aXBlci9tb2R1bGVzL21hbmlwdWxhdGlvbi9tZXRob2RzL3JlbW92ZVNsaWRlLmpzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi4vQXBwVnVlanMvd2J1LWF0b21pcXVlL25vZGVfbW9kdWxlcy9zd2lwZXIvbW9kdWxlcy9tb3VzZXdoZWVsL21vdXNld2hlZWwuanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uLi9BcHBWdWVqcy93YnUtYXRvbWlxdWUvbm9kZV9tb2R1bGVzL3N3aXBlci9tb2R1bGVzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4uL0FwcFZ1ZWpzL3didS1hdG9taXF1ZS9ub2RlX21vZHVsZXMvc3dpcGVyL21vZHVsZXMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmpzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi4vQXBwVnVlanMvd2J1LWF0b21pcXVlL25vZGVfbW9kdWxlcy9zd2lwZXIvbW9kdWxlcy9wYXJhbGxheC9wYXJhbGxheC5qcyIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4uL0FwcFZ1ZWpzL3didS1hdG9taXF1ZS9ub2RlX21vZHVsZXMvc3dpcGVyL21vZHVsZXMvc2Nyb2xsYmFyL3Njcm9sbGJhci5qcyIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4uL0FwcFZ1ZWpzL3didS1hdG9taXF1ZS9ub2RlX21vZHVsZXMvc3dpcGVyL21vZHVsZXMvdGh1bWJzL3RodW1icy5qcyIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4uL0FwcFZ1ZWpzL3didS1hdG9taXF1ZS9ub2RlX21vZHVsZXMvc3dpcGVyL21vZHVsZXMvdmlydHVhbC92aXJ0dWFsLmpzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi4vQXBwVnVlanMvd2J1LWF0b21pcXVlL25vZGVfbW9kdWxlcy9zd2lwZXIvbW9kdWxlcy96b29tL3pvb20uanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uLi9BcHBWdWVqcy93YnUtYXRvbWlxdWUvbm9kZV9tb2R1bGVzL3N3aXBlci9zaGFyZWQvY2xhc3Nlcy10by1zZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4uL0FwcFZ1ZWpzL3didS1hdG9taXF1ZS9ub2RlX21vZHVsZXMvc3dpcGVyL3NoYXJlZC9jcmVhdGUtZWxlbWVudC1pZi1ub3QtZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4uL0FwcFZ1ZWpzL3didS1hdG9taXF1ZS9ub2RlX21vZHVsZXMvc3dpcGVyL3NoYXJlZC9jcmVhdGUtc2hhZG93LmpzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi4vQXBwVnVlanMvd2J1LWF0b21pcXVlL25vZGVfbW9kdWxlcy9zd2lwZXIvc2hhcmVkL2RvbS5qcyIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4uL0FwcFZ1ZWpzL3didS1hdG9taXF1ZS9ub2RlX21vZHVsZXMvc3dpcGVyL3NoYXJlZC9lZmZlY3QtaW5pdC5qcyIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4uL0FwcFZ1ZWpzL3didS1hdG9taXF1ZS9ub2RlX21vZHVsZXMvc3dpcGVyL3NoYXJlZC9lZmZlY3QtdGFyZ2V0LmpzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi4vQXBwVnVlanMvd2J1LWF0b21pcXVlL25vZGVfbW9kdWxlcy9zd2lwZXIvc2hhcmVkL2VmZmVjdC12aXJ0dWFsLXRyYW5zaXRpb24tZW5kLmpzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi4vQXBwVnVlanMvd2J1LWF0b21pcXVlL25vZGVfbW9kdWxlcy9zd2lwZXIvc2hhcmVkL2dldC1icm93c2VyLmpzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi4vQXBwVnVlanMvd2J1LWF0b21pcXVlL25vZGVfbW9kdWxlcy9zd2lwZXIvc2hhcmVkL2dldC1kZXZpY2UuanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uLi9BcHBWdWVqcy93YnUtYXRvbWlxdWUvbm9kZV9tb2R1bGVzL3N3aXBlci9zaGFyZWQvZ2V0LXN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uLi9BcHBWdWVqcy93YnUtYXRvbWlxdWUvbm9kZV9tb2R1bGVzL3N3aXBlci9zaGFyZWQvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uLi9BcHBWdWVqcy93YnUtYXRvbWlxdWUvbm9kZV9tb2R1bGVzL3N3aXBlci9zd2lwZXIuZXNtLmpzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi4vQXBwVnVlanMvd2J1LWF0b21pcXVlL2pzL3N3aXBlci9zd2lwZXItYmlnLXYzLmpzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvQXBwVnVlanMvd2J1LWF0b21pcXVlL25vZGVfbW9kdWxlcy9zd2lwZXIvc3dpcGVyLWJ1bmRsZS5taW4uY3NzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvQXBwVnVlanMvd2J1LWF0b21pcXVlL3Njc3Mvb3JnYW5pc21lL3NlY3Rpb25zL3N3aXBlci1iaWctdjMuc2NzcyIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uL3NyYy9qcy9zZWN0aW9ucy9mb3JtYXRhZ2VfbW9kZWxzX3N3aXBlcl9iaWdfdjMuanMiXSwibmFtZXMiOlsiU3dpcGVyIiwiTmF2aWdhdGlvbiIsIlBhZ2luYXRpb24iLCJQYXJhbGxheCIsIkF1dG9wbGF5IiwibXlTd2lwZXIiLCJkaXJlY3Rpb24iLCJsb29wIiwicGFnaW5hdGlvbiIsImVsIiwidHlwZSIsImNsaWNrYWJsZSIsInNwZWVkIiwicGFyYWxsYXgiLCJhdXRvcGxheSIsImRlbGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDb0Q7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsZ0JBQWdCO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixnQkFBZ0I7QUFDakM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLHFEQUFTO0FBQzFCLG1CQUFtQix1REFBVztBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixrQ0FBa0M7QUFDdkQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7O0FB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QTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIscURBQVM7QUFDMUI7QUFDQTs7QUFFQSxpQkFBaUIsbUJBQW1CO0FBQ3BDOztBQUVBLG1CQUFtQixpQkFBaUI7QUFDcEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIscURBQVM7O0FBRTFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLHFEQUFTOztBQUUxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLHFEQUFTO0FBQzVCLHFCQUFxQix1REFBVztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLHFEQUFTOztB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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNILENBQUM7OztBQUdEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGlCQUFpQixxREFBUztBQUMxQjtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEI7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUJBQXlCOztBQUV6QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1QseUJBQXlCOztBQUV6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsaUJBQWlCLHVCQUF1QjtBQUN4QztBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixnQkFBZ0I7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtEQUFlLENBQUMsRUFBQztBQUNvdEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyOENydUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLFVBQVU7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLFlBQVk7QUFDWix3QkFBd0IsRUFBRTtBQUMxQiwyQkFBMkIsRUFBRTtBQUM3QjtBQUNBLGdCQUFnQixFQUFFO0FBQ2xCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSx5QkFBeUIsRUFBRTtBQUMzQjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQiw0QkFBNEIsRUFBRTtBQUM5QjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLHdCQUF3QixFQUFFO0FBQzFCLHFCQUFxQixFQUFFO0FBQ3ZCLGNBQWMsRUFBRTtBQUNoQixnQkFBZ0IsRUFBRTtBQUNsQixLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCx3QkFBd0IsRUFBRTtBQUMxQiwyQkFBMkIsRUFBRTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTCxhQUFhLEVBQUU7QUFDZixZQUFZLEVBQUU7QUFDZCxjQUFjO0FBQ2Qsa0JBQWtCLEVBQUU7QUFDcEIsb0JBQW9CLEVBQUU7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWtFOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkozQjtBQUN4QjtBQUNmO0FBQ0E7QUFDQSxpQkFBaUIscURBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUJBQWlCLG1CQUFtQjtBQUNwQztBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsMkNBQTJDLE1BQU07QUFDakQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7O0FDdkMrQztBQUNBO0FBQy9DLCtEQUFlO0FBQ2YsZUFBZTtBQUNmLGVBQWU7QUFDZixDQUFDLEU7Ozs7Ozs7Ozs7Ozs7OztBQ0w4Qzs7QUFFL0M7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxtRkFBbUY7O0FBRW5GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLDhCQUE4QixPQUFPLDhCQUE4QjtBQUMxRjtBQUNBLEdBQUc7QUFDSCxvQkFBb0IsOEJBQThCOztBQUVsRDtBQUNBLHNCQUFzQiw4QkFBOEI7QUFDcEQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLHdEQUFNO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7QUN2RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtEQUFlO0FBQ2Y7QUFDQSxDQUFDLEU7Ozs7Ozs7Ozs7Ozs7O0FDckNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLFVBQVU7O0FBRWI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7O0FDbkR5QztBQUNNO0FBQy9DLCtEQUFlO0FBQ2YsWUFBWTtBQUNaLGVBQWU7QUFDZixDQUFDLEU7Ozs7Ozs7Ozs7Ozs7O0FDTGM7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDeUM7QUFDUjtBQUM2QjtBQUNSO0FBQ0Y7QUFDRTtBQUNOO0FBQ007QUFDTjtBQUNUO0FBQ007QUFDRTtBQUNWO0FBQ0Y7QUFDYTtBQUNUO0FBQ1U7QUFDUjtBQUNGO0FBQ2U7QUFDakI7QUFDb0I7QUFDekQ7QUFDQSxlQUFlO0FBQ2YsUUFBUTtBQUNSLFdBQVc7QUFDWCxZQUFZO0FBQ1osT0FBTztBQUNQLE1BQU07QUFDTixZQUFZO0FBQ1osUUFBUTtBQUNSLGFBQWE7QUFDYixlQUFlO0FBQ2YsU0FBUztBQUNULFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLGFBQWEsd0RBQU0sR0FBRztBQUN0Qjs7QUFFQSxxQkFBcUIsdURBQUM7QUFDdEI7QUFDQSxNQUFNLHVEQUFDO0FBQ1AsMEJBQTBCLHdEQUFNLEdBQUc7QUFDbkM7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0EscUJBQXFCLGtFQUFVO0FBQy9CLG9CQUFvQixnRUFBUztBQUM3QjtBQUNBLEtBQUs7QUFDTCxxQkFBcUIsa0VBQVU7QUFDL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixnRUFBa0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSyxFQUFFOztBQUVQLHlCQUF5Qix3REFBTSxHQUFHLEVBQUUsa0RBQVEsb0JBQW9COztBQUVoRSxvQkFBb0Isd0RBQU0sR0FBRztBQUM3Qiw0QkFBNEIsd0RBQU0sR0FBRztBQUNyQywwQkFBMEIsd0RBQU0sR0FBRyxVQUFVOztBQUU3QztBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLEtBQUs7OztBQUdMLGVBQWUsbURBQUMsQ0FBQzs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyx1REFBQztBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixxREFBRztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLDJCQUEyQjs7QUFFM0I7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUNBQW1DLG1CQUFtQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUNBQW1DLFFBQVE7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxxQ0FBcUMsbUJBQW1CO0FBQ3hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EscUNBQXFDLFFBQVE7QUFDN0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxVQUFVOztBQUVmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw4QkFBOEIscUNBQXFDLEVBQUUsaUJBQWlCLGVBQWUscUNBQXFDLEVBQUUsYUFBYTtBQUN6SjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9DQUFvQzs7QUFFcEMsZ0JBQWdCLHVEQUFDO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGlCQUFpQiwrREFBK0Q7QUFDaEY7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQix1REFBQyxvREFBb0Q7O0FBRXpFOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNOzs7QUFHTjs7QUFFQTtBQUNBLHVCQUF1Qix1REFBVztBQUNsQztBQUNBLG1CQUFtQix1REFBQztBQUNwQjtBQUNBO0FBQ0EsdUJBQXVCLHlCQUF5QjtBQUNoRDtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7O0FBRTlCO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTCx3QkFBd0I7O0FBRXhCO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTCx3QkFBd0I7O0FBRXhCOztBQUVBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLOzs7QUFHTCwwQkFBMEI7O0FBRTFCLDhCQUE4Qjs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUM7O0FBRWpDLCtCQUErQjs7QUFFL0IsMEJBQTBCOztBQUUxQjtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCOztBQUUzQjtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBTSw2REFBVztBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLHdEQUFNO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxrREFBUTtBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRCxZQUFZLDhEQUFNLEVBQUUsa0VBQVE7QUFDNUIsK0RBQWUsTUFBTSxFOzs7Ozs7Ozs7OztBQ2ptQnJCLCtEQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEU7Ozs7Ozs7Ozs7O0FDdkhEO0FBQ0EsK0RBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxDQUFDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNHd0M7QUFDSTtBQUNGO0FBQ0Y7QUFDSjtBQUNG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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0I7O0FBRXhCO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0NBQWtDO0FBQ2xDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsdUJBQXVCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVLDBEQUFRO0FBQ2xCO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDOzs7Ozs7Ozs7Ozs7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LHVEQUFXO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsdUNBQXVDLE9BQU87QUFDOUMsa0NBQWtDLFFBQVE7QUFDMUMsS0FBSztBQUNMLDRDQUE0QyxPQUFPO0FBQ25ELG1DQUFtQyxRQUFRO0FBQzNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0MsU0FBUztBQUMzQyxLQUFLO0FBQ0wsbUNBQW1DLFNBQVM7QUFDNUM7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxL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QjtBQUMxQ00sV0FBUyxFQUFFLFlBRCtCO0FBRTFDQyxNQUFJLEVBQUUsSUFGb0M7QUFHMUNDLFlBQVUsRUFBRTtBQUFFQyxNQUFFLEVBQUUsb0JBQU47QUFBNEJDLFFBQUksRUFBRSxTQUFsQztBQUE2Q0MsYUFBUyxFQUFFO0FBQXhELEdBSDhCO0FBSTFDO0FBQ0FDLE9BQUssRUFBRSxJQUxtQztBQU0xQ0MsVUFBUSxFQUFFLElBTmdDO0FBTzFDO0FBQ0E7QUFDQUMsVUFBUSxFQUFFO0FBQ1JDLFNBQUssRUFBRTtBQURDLEdBVGdDLENBWTFDOztBQVowQyxDQUE3QixDQUFmLEM7Ozs7Ozs7Ozs7O0FDVkE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLDZDQUE2Qyx3REFBd0QsRTs7Ozs7V0NBckc7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7QUNOQSIsImZpbGUiOiIuL2xheW91dHMvanMvZm9ybWF0YWdlX21vZGVsc19zd2lwZXJfYmlnX3YzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBEb203IDQuMC4wXG4gKiBNaW5pbWFsaXN0aWMgSmF2YVNjcmlwdCBsaWJyYXJ5IGZvciBET00gbWFuaXB1bGF0aW9uLCB3aXRoIGEgalF1ZXJ5LWNvbXBhdGlibGUgQVBJXG4gKiBodHRwczovL2ZyYW1ld29yazcuaW8vZG9jcy9kb203Lmh0bWxcbiAqXG4gKiBDb3B5cmlnaHQgMjAyMSwgVmxhZGltaXIgS2hhcmxhbXBpZGlcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciBNSVRcbiAqXG4gKiBSZWxlYXNlZCBvbjogQXVndXN0IDI1LCAyMDIxXG4gKi9cbmltcG9ydCB7IGdldFdpbmRvdywgZ2V0RG9jdW1lbnQgfSBmcm9tICdzc3Itd2luZG93JztcblxuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbmZ1bmN0aW9uIG1ha2VSZWFjdGl2ZShvYmopIHtcbiAgY29uc3QgcHJvdG8gPSBvYmouX19wcm90b19fO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCAnX19wcm90b19fJywge1xuICAgIGdldCgpIHtcbiAgICAgIHJldHVybiBwcm90bztcbiAgICB9LFxuXG4gICAgc2V0KHZhbHVlKSB7XG4gICAgICBwcm90by5fX3Byb3RvX18gPSB2YWx1ZTtcbiAgICB9XG5cbiAgfSk7XG59XG5cbmNsYXNzIERvbTcgZXh0ZW5kcyBBcnJheSB7XG4gIGNvbnN0cnVjdG9yKGl0ZW1zKSB7XG4gICAgc3VwZXIoLi4uKGl0ZW1zIHx8IFtdKSk7XG4gICAgbWFrZVJlYWN0aXZlKHRoaXMpO1xuICB9XG5cbn1cblxuZnVuY3Rpb24gYXJyYXlGbGF0KGFyciA9IFtdKSB7XG4gIGNvbnN0IHJlcyA9IFtdO1xuICBhcnIuZm9yRWFjaChlbCA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZWwpKSB7XG4gICAgICByZXMucHVzaCguLi5hcnJheUZsYXQoZWwpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzLnB1c2goZWwpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXM7XG59XG5mdW5jdGlvbiBhcnJheUZpbHRlcihhcnIsIGNhbGxiYWNrKSB7XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoYXJyLCBjYWxsYmFjayk7XG59XG5mdW5jdGlvbiBhcnJheVVuaXF1ZShhcnIpIHtcbiAgY29uc3QgdW5pcXVlQXJyYXkgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmICh1bmlxdWVBcnJheS5pbmRleE9mKGFycltpXSkgPT09IC0xKSB1bmlxdWVBcnJheS5wdXNoKGFycltpXSk7XG4gIH1cblxuICByZXR1cm4gdW5pcXVlQXJyYXk7XG59XG5mdW5jdGlvbiB0b0NhbWVsQ2FzZShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLy0oLikvZywgKG1hdGNoLCBncm91cCkgPT4gZ3JvdXAudG9VcHBlckNhc2UoKSk7XG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXG5mdW5jdGlvbiBxc2Eoc2VsZWN0b3IsIGNvbnRleHQpIHtcbiAgaWYgKHR5cGVvZiBzZWxlY3RvciAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gW3NlbGVjdG9yXTtcbiAgfVxuXG4gIGNvbnN0IGEgPSBbXTtcbiAgY29uc3QgcmVzID0gY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGEucHVzaChyZXNbaV0pO1xuICB9XG5cbiAgcmV0dXJuIGE7XG59XG5cbmZ1bmN0aW9uICQoc2VsZWN0b3IsIGNvbnRleHQpIHtcbiAgY29uc3Qgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gIGNvbnN0IGRvY3VtZW50ID0gZ2V0RG9jdW1lbnQoKTtcbiAgbGV0IGFyciA9IFtdO1xuXG4gIGlmICghY29udGV4dCAmJiBzZWxlY3RvciBpbnN0YW5jZW9mIERvbTcpIHtcbiAgICByZXR1cm4gc2VsZWN0b3I7XG4gIH1cblxuICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIG5ldyBEb203KGFycik7XG4gIH1cblxuICBpZiAodHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IGh0bWwgPSBzZWxlY3Rvci50cmltKCk7XG5cbiAgICBpZiAoaHRtbC5pbmRleE9mKCc8JykgPj0gMCAmJiBodG1sLmluZGV4T2YoJz4nKSA+PSAwKSB7XG4gICAgICBsZXQgdG9DcmVhdGUgPSAnZGl2JztcbiAgICAgIGlmIChodG1sLmluZGV4T2YoJzxsaScpID09PSAwKSB0b0NyZWF0ZSA9ICd1bCc7XG4gICAgICBpZiAoaHRtbC5pbmRleE9mKCc8dHInKSA9PT0gMCkgdG9DcmVhdGUgPSAndGJvZHknO1xuICAgICAgaWYgKGh0bWwuaW5kZXhPZignPHRkJykgPT09IDAgfHwgaHRtbC5pbmRleE9mKCc8dGgnKSA9PT0gMCkgdG9DcmVhdGUgPSAndHInO1xuICAgICAgaWYgKGh0bWwuaW5kZXhPZignPHRib2R5JykgPT09IDApIHRvQ3JlYXRlID0gJ3RhYmxlJztcbiAgICAgIGlmIChodG1sLmluZGV4T2YoJzxvcHRpb24nKSA9PT0gMCkgdG9DcmVhdGUgPSAnc2VsZWN0JztcbiAgICAgIGNvbnN0IHRlbXBQYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRvQ3JlYXRlKTtcbiAgICAgIHRlbXBQYXJlbnQuaW5uZXJIVE1MID0gaHRtbDtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZW1wUGFyZW50LmNoaWxkTm9kZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgYXJyLnB1c2godGVtcFBhcmVudC5jaGlsZE5vZGVzW2ldKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYXJyID0gcXNhKHNlbGVjdG9yLnRyaW0oKSwgY29udGV4dCB8fCBkb2N1bWVudCk7XG4gICAgfSAvLyBhcnIgPSBxc2Eoc2VsZWN0b3IsIGRvY3VtZW50KTtcblxuICB9IGVsc2UgaWYgKHNlbGVjdG9yLm5vZGVUeXBlIHx8IHNlbGVjdG9yID09PSB3aW5kb3cgfHwgc2VsZWN0b3IgPT09IGRvY3VtZW50KSB7XG4gICAgYXJyLnB1c2goc2VsZWN0b3IpO1xuICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoc2VsZWN0b3IpKSB7XG4gICAgaWYgKHNlbGVjdG9yIGluc3RhbmNlb2YgRG9tNykgcmV0dXJuIHNlbGVjdG9yO1xuICAgIGFyciA9IHNlbGVjdG9yO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBEb203KGFycmF5VW5pcXVlKGFycikpO1xufVxuXG4kLmZuID0gRG9tNy5wcm90b3R5cGU7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXG5mdW5jdGlvbiBhZGRDbGFzcyguLi5jbGFzc2VzKSB7XG4gIGNvbnN0IGNsYXNzTmFtZXMgPSBhcnJheUZsYXQoY2xhc3Nlcy5tYXAoYyA9PiBjLnNwbGl0KCcgJykpKTtcbiAgdGhpcy5mb3JFYWNoKGVsID0+IHtcbiAgICBlbC5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzTmFtZXMpO1xuICB9KTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUNsYXNzKC4uLmNsYXNzZXMpIHtcbiAgY29uc3QgY2xhc3NOYW1lcyA9IGFycmF5RmxhdChjbGFzc2VzLm1hcChjID0+IGMuc3BsaXQoJyAnKSkpO1xuICB0aGlzLmZvckVhY2goZWwgPT4ge1xuICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoLi4uY2xhc3NOYW1lcyk7XG4gIH0pO1xuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gdG9nZ2xlQ2xhc3MoLi4uY2xhc3Nlcykge1xuICBjb25zdCBjbGFzc05hbWVzID0gYXJyYXlGbGF0KGNsYXNzZXMubWFwKGMgPT4gYy5zcGxpdCgnICcpKSk7XG4gIHRoaXMuZm9yRWFjaChlbCA9PiB7XG4gICAgY2xhc3NOYW1lcy5mb3JFYWNoKGNsYXNzTmFtZSA9PiB7XG4gICAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKGNsYXNzTmFtZSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBoYXNDbGFzcyguLi5jbGFzc2VzKSB7XG4gIGNvbnN0IGNsYXNzTmFtZXMgPSBhcnJheUZsYXQoY2xhc3Nlcy5tYXAoYyA9PiBjLnNwbGl0KCcgJykpKTtcbiAgcmV0dXJuIGFycmF5RmlsdGVyKHRoaXMsIGVsID0+IHtcbiAgICByZXR1cm4gY2xhc3NOYW1lcy5maWx0ZXIoY2xhc3NOYW1lID0+IGVsLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKS5sZW5ndGggPiAwO1xuICB9KS5sZW5ndGggPiAwO1xufVxuXG5mdW5jdGlvbiBhdHRyKGF0dHJzLCB2YWx1ZSkge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSAmJiB0eXBlb2YgYXR0cnMgPT09ICdzdHJpbmcnKSB7XG4gICAgLy8gR2V0IGF0dHJcbiAgICBpZiAodGhpc1swXSkgcmV0dXJuIHRoaXNbMF0uZ2V0QXR0cmlidXRlKGF0dHJzKTtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9IC8vIFNldCBhdHRyc1xuXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcbiAgICAgIC8vIFN0cmluZ1xuICAgICAgdGhpc1tpXS5zZXRBdHRyaWJ1dGUoYXR0cnMsIHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gT2JqZWN0XG4gICAgICBmb3IgKGNvbnN0IGF0dHJOYW1lIGluIGF0dHJzKSB7XG4gICAgICAgIHRoaXNbaV1bYXR0ck5hbWVdID0gYXR0cnNbYXR0ck5hbWVdO1xuICAgICAgICB0aGlzW2ldLnNldEF0dHJpYnV0ZShhdHRyTmFtZSwgYXR0cnNbYXR0ck5hbWVdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQXR0cihhdHRyKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHRoaXNbaV0ucmVtb3ZlQXR0cmlidXRlKGF0dHIpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIHByb3AocHJvcHMsIHZhbHVlKSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxICYmIHR5cGVvZiBwcm9wcyA9PT0gJ3N0cmluZycpIHtcbiAgICAvLyBHZXQgcHJvcFxuICAgIGlmICh0aGlzWzBdKSByZXR1cm4gdGhpc1swXVtwcm9wc107XG4gIH0gZWxzZSB7XG4gICAgLy8gU2V0IHByb3BzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAvLyBTdHJpbmdcbiAgICAgICAgdGhpc1tpXVtwcm9wc10gPSB2YWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE9iamVjdFxuICAgICAgICBmb3IgKGNvbnN0IHByb3BOYW1lIGluIHByb3BzKSB7XG4gICAgICAgICAgdGhpc1tpXVtwcm9wTmFtZV0gPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBkYXRhKGtleSwgdmFsdWUpIHtcbiAgbGV0IGVsO1xuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZWwgPSB0aGlzWzBdO1xuICAgIGlmICghZWwpIHJldHVybiB1bmRlZmluZWQ7IC8vIEdldCB2YWx1ZVxuXG4gICAgaWYgKGVsLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2UgJiYga2V5IGluIGVsLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2UpIHtcbiAgICAgIHJldHVybiBlbC5kb203RWxlbWVudERhdGFTdG9yYWdlW2tleV07XG4gICAgfVxuXG4gICAgY29uc3QgZGF0YUtleSA9IGVsLmdldEF0dHJpYnV0ZShgZGF0YS0ke2tleX1gKTtcblxuICAgIGlmIChkYXRhS2V5KSB7XG4gICAgICByZXR1cm4gZGF0YUtleTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9IC8vIFNldCB2YWx1ZVxuXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgZWwgPSB0aGlzW2ldO1xuICAgIGlmICghZWwuZG9tN0VsZW1lbnREYXRhU3RvcmFnZSkgZWwuZG9tN0VsZW1lbnREYXRhU3RvcmFnZSA9IHt9O1xuICAgIGVsLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2Vba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZURhdGEoa2V5KSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGVsID0gdGhpc1tpXTtcblxuICAgIGlmIChlbC5kb203RWxlbWVudERhdGFTdG9yYWdlICYmIGVsLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2Vba2V5XSkge1xuICAgICAgZWwuZG9tN0VsZW1lbnREYXRhU3RvcmFnZVtrZXldID0gbnVsbDtcbiAgICAgIGRlbGV0ZSBlbC5kb203RWxlbWVudERhdGFTdG9yYWdlW2tleV07XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRhdGFzZXQoKSB7XG4gIGNvbnN0IGVsID0gdGhpc1swXTtcbiAgaWYgKCFlbCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgY29uc3QgZGF0YXNldCA9IHt9OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgaWYgKGVsLmRhdGFzZXQpIHtcbiAgICBmb3IgKGNvbnN0IGRhdGFLZXkgaW4gZWwuZGF0YXNldCkge1xuICAgICAgZGF0YXNldFtkYXRhS2V5XSA9IGVsLmRhdGFzZXRbZGF0YUtleV07XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWwuYXR0cmlidXRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgYXR0ciA9IGVsLmF0dHJpYnV0ZXNbaV07XG5cbiAgICAgIGlmIChhdHRyLm5hbWUuaW5kZXhPZignZGF0YS0nKSA+PSAwKSB7XG4gICAgICAgIGRhdGFzZXRbdG9DYW1lbENhc2UoYXR0ci5uYW1lLnNwbGl0KCdkYXRhLScpWzFdKV0gPSBhdHRyLnZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZvciAoY29uc3Qga2V5IGluIGRhdGFzZXQpIHtcbiAgICBpZiAoZGF0YXNldFtrZXldID09PSAnZmFsc2UnKSBkYXRhc2V0W2tleV0gPSBmYWxzZTtlbHNlIGlmIChkYXRhc2V0W2tleV0gPT09ICd0cnVlJykgZGF0YXNldFtrZXldID0gdHJ1ZTtlbHNlIGlmIChwYXJzZUZsb2F0KGRhdGFzZXRba2V5XSkgPT09IGRhdGFzZXRba2V5XSAqIDEpIGRhdGFzZXRba2V5XSAqPSAxO1xuICB9XG5cbiAgcmV0dXJuIGRhdGFzZXQ7XG59XG5cbmZ1bmN0aW9uIHZhbCh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgIC8vIGdldCB2YWx1ZVxuICAgIGNvbnN0IGVsID0gdGhpc1swXTtcbiAgICBpZiAoIWVsKSByZXR1cm4gdW5kZWZpbmVkO1xuXG4gICAgaWYgKGVsLm11bHRpcGxlICYmIGVsLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdzZWxlY3QnKSB7XG4gICAgICBjb25zdCB2YWx1ZXMgPSBbXTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbC5zZWxlY3RlZE9wdGlvbnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgdmFsdWVzLnB1c2goZWwuc2VsZWN0ZWRPcHRpb25zW2ldLnZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICB9XG5cbiAgICByZXR1cm4gZWwudmFsdWU7XG4gIH0gLy8gc2V0IHZhbHVlXG5cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBlbCA9IHRoaXNbaV07XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgZWwubXVsdGlwbGUgJiYgZWwubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZWwub3B0aW9ucy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICBlbC5vcHRpb25zW2pdLnNlbGVjdGVkID0gdmFsdWUuaW5kZXhPZihlbC5vcHRpb25zW2pdLnZhbHVlKSA+PSAwO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBlbC52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiB2YWx1ZSh2YWx1ZSkge1xuICByZXR1cm4gdGhpcy52YWwodmFsdWUpO1xufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm0odHJhbnNmb3JtKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHRoaXNbaV0uc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIHRyYW5zaXRpb24oZHVyYXRpb24pIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdGhpc1tpXS5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSB0eXBlb2YgZHVyYXRpb24gIT09ICdzdHJpbmcnID8gYCR7ZHVyYXRpb259bXNgIDogZHVyYXRpb247XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gb24oLi4uYXJncykge1xuICBsZXQgW2V2ZW50VHlwZSwgdGFyZ2V0U2VsZWN0b3IsIGxpc3RlbmVyLCBjYXB0dXJlXSA9IGFyZ3M7XG5cbiAgaWYgKHR5cGVvZiBhcmdzWzFdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgW2V2ZW50VHlwZSwgbGlzdGVuZXIsIGNhcHR1cmVdID0gYXJncztcbiAgICB0YXJnZXRTZWxlY3RvciA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmICghY2FwdHVyZSkgY2FwdHVyZSA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUxpdmVFdmVudChlKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgaWYgKCF0YXJnZXQpIHJldHVybjtcbiAgICBjb25zdCBldmVudERhdGEgPSBlLnRhcmdldC5kb203RXZlbnREYXRhIHx8IFtdO1xuXG4gICAgaWYgKGV2ZW50RGF0YS5pbmRleE9mKGUpIDwgMCkge1xuICAgICAgZXZlbnREYXRhLnVuc2hpZnQoZSk7XG4gICAgfVxuXG4gICAgaWYgKCQodGFyZ2V0KS5pcyh0YXJnZXRTZWxlY3RvcikpIGxpc3RlbmVyLmFwcGx5KHRhcmdldCwgZXZlbnREYXRhKTtlbHNlIHtcbiAgICAgIGNvbnN0IHBhcmVudHMgPSAkKHRhcmdldCkucGFyZW50cygpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgcGFyZW50cy5sZW5ndGg7IGsgKz0gMSkge1xuICAgICAgICBpZiAoJChwYXJlbnRzW2tdKS5pcyh0YXJnZXRTZWxlY3RvcikpIGxpc3RlbmVyLmFwcGx5KHBhcmVudHNba10sIGV2ZW50RGF0YSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlRXZlbnQoZSkge1xuICAgIGNvbnN0IGV2ZW50RGF0YSA9IGUgJiYgZS50YXJnZXQgPyBlLnRhcmdldC5kb203RXZlbnREYXRhIHx8IFtdIDogW107XG5cbiAgICBpZiAoZXZlbnREYXRhLmluZGV4T2YoZSkgPCAwKSB7XG4gICAgICBldmVudERhdGEudW5zaGlmdChlKTtcbiAgICB9XG5cbiAgICBsaXN0ZW5lci5hcHBseSh0aGlzLCBldmVudERhdGEpO1xuICB9XG5cbiAgY29uc3QgZXZlbnRzID0gZXZlbnRUeXBlLnNwbGl0KCcgJyk7XG4gIGxldCBqO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGVsID0gdGhpc1tpXTtcblxuICAgIGlmICghdGFyZ2V0U2VsZWN0b3IpIHtcbiAgICAgIGZvciAoaiA9IDA7IGogPCBldmVudHMubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgY29uc3QgZXZlbnQgPSBldmVudHNbal07XG4gICAgICAgIGlmICghZWwuZG9tN0xpc3RlbmVycykgZWwuZG9tN0xpc3RlbmVycyA9IHt9O1xuICAgICAgICBpZiAoIWVsLmRvbTdMaXN0ZW5lcnNbZXZlbnRdKSBlbC5kb203TGlzdGVuZXJzW2V2ZW50XSA9IFtdO1xuICAgICAgICBlbC5kb203TGlzdGVuZXJzW2V2ZW50XS5wdXNoKHtcbiAgICAgICAgICBsaXN0ZW5lcixcbiAgICAgICAgICBwcm94eUxpc3RlbmVyOiBoYW5kbGVFdmVudFxuICAgICAgICB9KTtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlRXZlbnQsIGNhcHR1cmUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBMaXZlIGV2ZW50c1xuICAgICAgZm9yIChqID0gMDsgaiA8IGV2ZW50cy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICBjb25zdCBldmVudCA9IGV2ZW50c1tqXTtcbiAgICAgICAgaWYgKCFlbC5kb203TGl2ZUxpc3RlbmVycykgZWwuZG9tN0xpdmVMaXN0ZW5lcnMgPSB7fTtcbiAgICAgICAgaWYgKCFlbC5kb203TGl2ZUxpc3RlbmVyc1tldmVudF0pIGVsLmRvbTdMaXZlTGlzdGVuZXJzW2V2ZW50XSA9IFtdO1xuICAgICAgICBlbC5kb203TGl2ZUxpc3RlbmVyc1tldmVudF0ucHVzaCh7XG4gICAgICAgICAgbGlzdGVuZXIsXG4gICAgICAgICAgcHJveHlMaXN0ZW5lcjogaGFuZGxlTGl2ZUV2ZW50XG4gICAgICAgIH0pO1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVMaXZlRXZlbnQsIGNhcHR1cmUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBvZmYoLi4uYXJncykge1xuICBsZXQgW2V2ZW50VHlwZSwgdGFyZ2V0U2VsZWN0b3IsIGxpc3RlbmVyLCBjYXB0dXJlXSA9IGFyZ3M7XG5cbiAgaWYgKHR5cGVvZiBhcmdzWzFdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgW2V2ZW50VHlwZSwgbGlzdGVuZXIsIGNhcHR1cmVdID0gYXJncztcbiAgICB0YXJnZXRTZWxlY3RvciA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmICghY2FwdHVyZSkgY2FwdHVyZSA9IGZhbHNlO1xuICBjb25zdCBldmVudHMgPSBldmVudFR5cGUuc3BsaXQoJyAnKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGV2ZW50ID0gZXZlbnRzW2ldO1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICBjb25zdCBlbCA9IHRoaXNbal07XG4gICAgICBsZXQgaGFuZGxlcnM7XG5cbiAgICAgIGlmICghdGFyZ2V0U2VsZWN0b3IgJiYgZWwuZG9tN0xpc3RlbmVycykge1xuICAgICAgICBoYW5kbGVycyA9IGVsLmRvbTdMaXN0ZW5lcnNbZXZlbnRdO1xuICAgICAgfSBlbHNlIGlmICh0YXJnZXRTZWxlY3RvciAmJiBlbC5kb203TGl2ZUxpc3RlbmVycykge1xuICAgICAgICBoYW5kbGVycyA9IGVsLmRvbTdMaXZlTGlzdGVuZXJzW2V2ZW50XTtcbiAgICAgIH1cblxuICAgICAgaWYgKGhhbmRsZXJzICYmIGhhbmRsZXJzLmxlbmd0aCkge1xuICAgICAgICBmb3IgKGxldCBrID0gaGFuZGxlcnMubGVuZ3RoIC0gMTsgayA+PSAwOyBrIC09IDEpIHtcbiAgICAgICAgICBjb25zdCBoYW5kbGVyID0gaGFuZGxlcnNba107XG5cbiAgICAgICAgICBpZiAobGlzdGVuZXIgJiYgaGFuZGxlci5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIucHJveHlMaXN0ZW5lciwgY2FwdHVyZSk7XG4gICAgICAgICAgICBoYW5kbGVycy5zcGxpY2UoaywgMSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChsaXN0ZW5lciAmJiBoYW5kbGVyLmxpc3RlbmVyICYmIGhhbmRsZXIubGlzdGVuZXIuZG9tN3Byb3h5ICYmIGhhbmRsZXIubGlzdGVuZXIuZG9tN3Byb3h5ID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlci5wcm94eUxpc3RlbmVyLCBjYXB0dXJlKTtcbiAgICAgICAgICAgIGhhbmRsZXJzLnNwbGljZShrLCAxKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKCFsaXN0ZW5lcikge1xuICAgICAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlci5wcm94eUxpc3RlbmVyLCBjYXB0dXJlKTtcbiAgICAgICAgICAgIGhhbmRsZXJzLnNwbGljZShrLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gb25jZSguLi5hcmdzKSB7XG4gIGNvbnN0IGRvbSA9IHRoaXM7XG4gIGxldCBbZXZlbnROYW1lLCB0YXJnZXRTZWxlY3RvciwgbGlzdGVuZXIsIGNhcHR1cmVdID0gYXJncztcblxuICBpZiAodHlwZW9mIGFyZ3NbMV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICBbZXZlbnROYW1lLCBsaXN0ZW5lciwgY2FwdHVyZV0gPSBhcmdzO1xuICAgIHRhcmdldFNlbGVjdG9yID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgZnVuY3Rpb24gb25jZUhhbmRsZXIoLi4uZXZlbnRBcmdzKSB7XG4gICAgbGlzdGVuZXIuYXBwbHkodGhpcywgZXZlbnRBcmdzKTtcbiAgICBkb20ub2ZmKGV2ZW50TmFtZSwgdGFyZ2V0U2VsZWN0b3IsIG9uY2VIYW5kbGVyLCBjYXB0dXJlKTtcblxuICAgIGlmIChvbmNlSGFuZGxlci5kb203cHJveHkpIHtcbiAgICAgIGRlbGV0ZSBvbmNlSGFuZGxlci5kb203cHJveHk7XG4gICAgfVxuICB9XG5cbiAgb25jZUhhbmRsZXIuZG9tN3Byb3h5ID0gbGlzdGVuZXI7XG4gIHJldHVybiBkb20ub24oZXZlbnROYW1lLCB0YXJnZXRTZWxlY3Rvciwgb25jZUhhbmRsZXIsIGNhcHR1cmUpO1xufVxuXG5mdW5jdGlvbiB0cmlnZ2VyKC4uLmFyZ3MpIHtcbiAgY29uc3Qgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gIGNvbnN0IGV2ZW50cyA9IGFyZ3NbMF0uc3BsaXQoJyAnKTtcbiAgY29uc3QgZXZlbnREYXRhID0gYXJnc1sxXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGV2ZW50ID0gZXZlbnRzW2ldO1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICBjb25zdCBlbCA9IHRoaXNbal07XG5cbiAgICAgIGlmICh3aW5kb3cuQ3VzdG9tRXZlbnQpIHtcbiAgICAgICAgY29uc3QgZXZ0ID0gbmV3IHdpbmRvdy5DdXN0b21FdmVudChldmVudCwge1xuICAgICAgICAgIGRldGFpbDogZXZlbnREYXRhLFxuICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgZWwuZG9tN0V2ZW50RGF0YSA9IGFyZ3MuZmlsdGVyKChkYXRhLCBkYXRhSW5kZXgpID0+IGRhdGFJbmRleCA+IDApO1xuICAgICAgICBlbC5kaXNwYXRjaEV2ZW50KGV2dCk7XG4gICAgICAgIGVsLmRvbTdFdmVudERhdGEgPSBbXTtcbiAgICAgICAgZGVsZXRlIGVsLmRvbTdFdmVudERhdGE7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIHRyYW5zaXRpb25FbmQoY2FsbGJhY2spIHtcbiAgY29uc3QgZG9tID0gdGhpcztcblxuICBmdW5jdGlvbiBmaXJlQ2FsbEJhY2soZSkge1xuICAgIGlmIChlLnRhcmdldCAhPT0gdGhpcykgcmV0dXJuO1xuICAgIGNhbGxiYWNrLmNhbGwodGhpcywgZSk7XG4gICAgZG9tLm9mZigndHJhbnNpdGlvbmVuZCcsIGZpcmVDYWxsQmFjayk7XG4gIH1cblxuICBpZiAoY2FsbGJhY2spIHtcbiAgICBkb20ub24oJ3RyYW5zaXRpb25lbmQnLCBmaXJlQ2FsbEJhY2spO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIGFuaW1hdGlvbkVuZChjYWxsYmFjaykge1xuICBjb25zdCBkb20gPSB0aGlzO1xuXG4gIGZ1bmN0aW9uIGZpcmVDYWxsQmFjayhlKSB7XG4gICAgaWYgKGUudGFyZ2V0ICE9PSB0aGlzKSByZXR1cm47XG4gICAgY2FsbGJhY2suY2FsbCh0aGlzLCBlKTtcbiAgICBkb20ub2ZmKCdhbmltYXRpb25lbmQnLCBmaXJlQ2FsbEJhY2spO1xuICB9XG5cbiAgaWYgKGNhbGxiYWNrKSB7XG4gICAgZG9tLm9uKCdhbmltYXRpb25lbmQnLCBmaXJlQ2FsbEJhY2spO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIHdpZHRoKCkge1xuICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coKTtcblxuICBpZiAodGhpc1swXSA9PT0gd2luZG93KSB7XG4gICAgcmV0dXJuIHdpbmRvdy5pbm5lcldpZHRoO1xuICB9XG5cbiAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KHRoaXMuY3NzKCd3aWR0aCcpKTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBvdXRlcldpZHRoKGluY2x1ZGVNYXJnaW5zKSB7XG4gIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICBpZiAoaW5jbHVkZU1hcmdpbnMpIHtcbiAgICAgIGNvbnN0IHN0eWxlcyA9IHRoaXMuc3R5bGVzKCk7XG4gICAgICByZXR1cm4gdGhpc1swXS5vZmZzZXRXaWR0aCArIHBhcnNlRmxvYXQoc3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ21hcmdpbi1yaWdodCcpKSArIHBhcnNlRmxvYXQoc3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ21hcmdpbi1sZWZ0JykpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzWzBdLm9mZnNldFdpZHRoO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGhlaWdodCgpIHtcbiAgY29uc3Qgd2luZG93ID0gZ2V0V2luZG93KCk7XG5cbiAgaWYgKHRoaXNbMF0gPT09IHdpbmRvdykge1xuICAgIHJldHVybiB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIH1cblxuICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQodGhpcy5jc3MoJ2hlaWdodCcpKTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBvdXRlckhlaWdodChpbmNsdWRlTWFyZ2lucykge1xuICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgaWYgKGluY2x1ZGVNYXJnaW5zKSB7XG4gICAgICBjb25zdCBzdHlsZXMgPSB0aGlzLnN0eWxlcygpO1xuICAgICAgcmV0dXJuIHRoaXNbMF0ub2Zmc2V0SGVpZ2h0ICsgcGFyc2VGbG9hdChzdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgnbWFyZ2luLXRvcCcpKSArIHBhcnNlRmxvYXQoc3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ21hcmdpbi1ib3R0b20nKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXNbMF0ub2Zmc2V0SGVpZ2h0O1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIG9mZnNldCgpIHtcbiAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHdpbmRvdyA9IGdldFdpbmRvdygpO1xuICAgIGNvbnN0IGRvY3VtZW50ID0gZ2V0RG9jdW1lbnQoKTtcbiAgICBjb25zdCBlbCA9IHRoaXNbMF07XG4gICAgY29uc3QgYm94ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgY29uc3QgY2xpZW50VG9wID0gZWwuY2xpZW50VG9wIHx8IGJvZHkuY2xpZW50VG9wIHx8IDA7XG4gICAgY29uc3QgY2xpZW50TGVmdCA9IGVsLmNsaWVudExlZnQgfHwgYm9keS5jbGllbnRMZWZ0IHx8IDA7XG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gZWwgPT09IHdpbmRvdyA/IHdpbmRvdy5zY3JvbGxZIDogZWwuc2Nyb2xsVG9wO1xuICAgIGNvbnN0IHNjcm9sbExlZnQgPSBlbCA9PT0gd2luZG93ID8gd2luZG93LnNjcm9sbFggOiBlbC5zY3JvbGxMZWZ0O1xuICAgIHJldHVybiB7XG4gICAgICB0b3A6IGJveC50b3AgKyBzY3JvbGxUb3AgLSBjbGllbnRUb3AsXG4gICAgICBsZWZ0OiBib3gubGVmdCArIHNjcm9sbExlZnQgLSBjbGllbnRMZWZ0XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBoaWRlKCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB0aGlzW2ldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gc2hvdygpIHtcbiAgY29uc3Qgd2luZG93ID0gZ2V0V2luZG93KCk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgZWwgPSB0aGlzW2ldO1xuXG4gICAgaWYgKGVsLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgZWwuc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgIH1cblxuICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZSgnZGlzcGxheScpID09PSAnbm9uZScpIHtcbiAgICAgIC8vIFN0aWxsIG5vdCB2aXNpYmxlXG4gICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gc3R5bGVzKCkge1xuICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgaWYgKHRoaXNbMF0pIHJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzWzBdLCBudWxsKTtcbiAgcmV0dXJuIHt9O1xufVxuXG5mdW5jdGlvbiBjc3MocHJvcHMsIHZhbHVlKSB7XG4gIGNvbnN0IHdpbmRvdyA9IGdldFdpbmRvdygpO1xuICBsZXQgaTtcblxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgIGlmICh0eXBlb2YgcHJvcHMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyAuY3NzKCd3aWR0aCcpXG4gICAgICBpZiAodGhpc1swXSkgcmV0dXJuIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXNbMF0sIG51bGwpLmdldFByb3BlcnR5VmFsdWUocHJvcHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyAuY3NzKHsgd2lkdGg6ICcxMDBweCcgfSlcbiAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGZvciAoY29uc3QgcHJvcCBpbiBwcm9wcykge1xuICAgICAgICAgIHRoaXNbaV0uc3R5bGVbcHJvcF0gPSBwcm9wc1twcm9wXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH1cblxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMiAmJiB0eXBlb2YgcHJvcHMgPT09ICdzdHJpbmcnKSB7XG4gICAgLy8gLmNzcygnd2lkdGgnLCAnMTAwcHgnKVxuICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICB0aGlzW2ldLnN0eWxlW3Byb3BzXSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIGVhY2goY2FsbGJhY2spIHtcbiAgaWYgKCFjYWxsYmFjaykgcmV0dXJuIHRoaXM7XG4gIHRoaXMuZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XG4gICAgY2FsbGJhY2suYXBwbHkoZWwsIFtlbCwgaW5kZXhdKTtcbiAgfSk7XG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXIoY2FsbGJhY2spIHtcbiAgY29uc3QgcmVzdWx0ID0gYXJyYXlGaWx0ZXIodGhpcywgY2FsbGJhY2spO1xuICByZXR1cm4gJChyZXN1bHQpO1xufVxuXG5mdW5jdGlvbiBodG1sKGh0bWwpIHtcbiAgaWYgKHR5cGVvZiBodG1sID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiB0aGlzWzBdID8gdGhpc1swXS5pbm5lckhUTUwgOiBudWxsO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdGhpc1tpXS5pbm5lckhUTUwgPSBodG1sO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIHRleHQodGV4dCkge1xuICBpZiAodHlwZW9mIHRleHQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIHRoaXNbMF0gPyB0aGlzWzBdLnRleHRDb250ZW50LnRyaW0oKSA6IG51bGw7XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB0aGlzW2ldLnRleHRDb250ZW50ID0gdGV4dDtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBpcyhzZWxlY3Rvcikge1xuICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgY29uc3QgZG9jdW1lbnQgPSBnZXREb2N1bWVudCgpO1xuICBjb25zdCBlbCA9IHRoaXNbMF07XG4gIGxldCBjb21wYXJlV2l0aDtcbiAgbGV0IGk7XG4gIGlmICghZWwgfHwgdHlwZW9mIHNlbGVjdG9yID09PSAndW5kZWZpbmVkJykgcmV0dXJuIGZhbHNlO1xuXG4gIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKGVsLm1hdGNoZXMpIHJldHVybiBlbC5tYXRjaGVzKHNlbGVjdG9yKTtcbiAgICBpZiAoZWwud2Via2l0TWF0Y2hlc1NlbGVjdG9yKSByZXR1cm4gZWwud2Via2l0TWF0Y2hlc1NlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICBpZiAoZWwubXNNYXRjaGVzU2VsZWN0b3IpIHJldHVybiBlbC5tc01hdGNoZXNTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgY29tcGFyZVdpdGggPSAkKHNlbGVjdG9yKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBjb21wYXJlV2l0aC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKGNvbXBhcmVXaXRoW2ldID09PSBlbCkgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHNlbGVjdG9yID09PSBkb2N1bWVudCkge1xuICAgIHJldHVybiBlbCA9PT0gZG9jdW1lbnQ7XG4gIH1cblxuICBpZiAoc2VsZWN0b3IgPT09IHdpbmRvdykge1xuICAgIHJldHVybiBlbCA9PT0gd2luZG93O1xuICB9XG5cbiAgaWYgKHNlbGVjdG9yLm5vZGVUeXBlIHx8IHNlbGVjdG9yIGluc3RhbmNlb2YgRG9tNykge1xuICAgIGNvbXBhcmVXaXRoID0gc2VsZWN0b3Iubm9kZVR5cGUgPyBbc2VsZWN0b3JdIDogc2VsZWN0b3I7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgY29tcGFyZVdpdGgubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChjb21wYXJlV2l0aFtpXSA9PT0gZWwpIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gaW5kZXgoKSB7XG4gIGxldCBjaGlsZCA9IHRoaXNbMF07XG4gIGxldCBpO1xuXG4gIGlmIChjaGlsZCkge1xuICAgIGkgPSAwOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcblxuICAgIHdoaWxlICgoY2hpbGQgPSBjaGlsZC5wcmV2aW91c1NpYmxpbmcpICE9PSBudWxsKSB7XG4gICAgICBpZiAoY2hpbGQubm9kZVR5cGUgPT09IDEpIGkgKz0gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gaTtcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGVxKGluZGV4KSB7XG4gIGlmICh0eXBlb2YgaW5kZXggPT09ICd1bmRlZmluZWQnKSByZXR1cm4gdGhpcztcbiAgY29uc3QgbGVuZ3RoID0gdGhpcy5sZW5ndGg7XG5cbiAgaWYgKGluZGV4ID4gbGVuZ3RoIC0gMSkge1xuICAgIHJldHVybiAkKFtdKTtcbiAgfVxuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICBjb25zdCByZXR1cm5JbmRleCA9IGxlbmd0aCArIGluZGV4O1xuICAgIGlmIChyZXR1cm5JbmRleCA8IDApIHJldHVybiAkKFtdKTtcbiAgICByZXR1cm4gJChbdGhpc1tyZXR1cm5JbmRleF1dKTtcbiAgfVxuXG4gIHJldHVybiAkKFt0aGlzW2luZGV4XV0pO1xufVxuXG5mdW5jdGlvbiBhcHBlbmQoLi4uZWxzKSB7XG4gIGxldCBuZXdDaGlsZDtcbiAgY29uc3QgZG9jdW1lbnQgPSBnZXREb2N1bWVudCgpO1xuXG4gIGZvciAobGV0IGsgPSAwOyBrIDwgZWxzLmxlbmd0aDsgayArPSAxKSB7XG4gICAgbmV3Q2hpbGQgPSBlbHNba107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmICh0eXBlb2YgbmV3Q2hpbGQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbnN0IHRlbXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGVtcERpdi5pbm5lckhUTUwgPSBuZXdDaGlsZDtcblxuICAgICAgICB3aGlsZSAodGVtcERpdi5maXJzdENoaWxkKSB7XG4gICAgICAgICAgdGhpc1tpXS5hcHBlbmRDaGlsZCh0ZW1wRGl2LmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG5ld0NoaWxkIGluc3RhbmNlb2YgRG9tNykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG5ld0NoaWxkLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgdGhpc1tpXS5hcHBlbmRDaGlsZChuZXdDaGlsZFtqXSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXNbaV0uYXBwZW5kQ2hpbGQobmV3Q2hpbGQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRUbyhwYXJlbnQpIHtcbiAgJChwYXJlbnQpLmFwcGVuZCh0aGlzKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIHByZXBlbmQobmV3Q2hpbGQpIHtcbiAgY29uc3QgZG9jdW1lbnQgPSBnZXREb2N1bWVudCgpO1xuICBsZXQgaTtcbiAgbGV0IGo7XG5cbiAgZm9yIChpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAodHlwZW9mIG5ld0NoaWxkID09PSAnc3RyaW5nJykge1xuICAgICAgY29uc3QgdGVtcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGVtcERpdi5pbm5lckhUTUwgPSBuZXdDaGlsZDtcblxuICAgICAgZm9yIChqID0gdGVtcERpdi5jaGlsZE5vZGVzLmxlbmd0aCAtIDE7IGogPj0gMDsgaiAtPSAxKSB7XG4gICAgICAgIHRoaXNbaV0uaW5zZXJ0QmVmb3JlKHRlbXBEaXYuY2hpbGROb2Rlc1tqXSwgdGhpc1tpXS5jaGlsZE5vZGVzWzBdKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG5ld0NoaWxkIGluc3RhbmNlb2YgRG9tNykge1xuICAgICAgZm9yIChqID0gMDsgaiA8IG5ld0NoaWxkLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIHRoaXNbaV0uaW5zZXJ0QmVmb3JlKG5ld0NoaWxkW2pdLCB0aGlzW2ldLmNoaWxkTm9kZXNbMF0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzW2ldLmluc2VydEJlZm9yZShuZXdDaGlsZCwgdGhpc1tpXS5jaGlsZE5vZGVzWzBdKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gcHJlcGVuZFRvKHBhcmVudCkge1xuICAkKHBhcmVudCkucHJlcGVuZCh0aGlzKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydEJlZm9yZShzZWxlY3Rvcikge1xuICBjb25zdCBiZWZvcmUgPSAkKHNlbGVjdG9yKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoYmVmb3JlLmxlbmd0aCA9PT0gMSkge1xuICAgICAgYmVmb3JlWzBdLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXNbaV0sIGJlZm9yZVswXSk7XG4gICAgfSBlbHNlIGlmIChiZWZvcmUubGVuZ3RoID4gMSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBiZWZvcmUubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgYmVmb3JlW2pdLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXNbaV0uY2xvbmVOb2RlKHRydWUpLCBiZWZvcmVbal0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpbnNlcnRBZnRlcihzZWxlY3Rvcikge1xuICBjb25zdCBhZnRlciA9ICQoc2VsZWN0b3IpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChhZnRlci5sZW5ndGggPT09IDEpIHtcbiAgICAgIGFmdGVyWzBdLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXNbaV0sIGFmdGVyWzBdLm5leHRTaWJsaW5nKTtcbiAgICB9IGVsc2UgaWYgKGFmdGVyLmxlbmd0aCA+IDEpIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYWZ0ZXIubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgYWZ0ZXJbal0ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpc1tpXS5jbG9uZU5vZGUodHJ1ZSksIGFmdGVyW2pdLm5leHRTaWJsaW5nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbmV4dChzZWxlY3Rvcikge1xuICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICBpZiAodGhpc1swXS5uZXh0RWxlbWVudFNpYmxpbmcgJiYgJCh0aGlzWzBdLm5leHRFbGVtZW50U2libGluZykuaXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIHJldHVybiAkKFt0aGlzWzBdLm5leHRFbGVtZW50U2libGluZ10pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gJChbXSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXNbMF0ubmV4dEVsZW1lbnRTaWJsaW5nKSByZXR1cm4gJChbdGhpc1swXS5uZXh0RWxlbWVudFNpYmxpbmddKTtcbiAgICByZXR1cm4gJChbXSk7XG4gIH1cblxuICByZXR1cm4gJChbXSk7XG59XG5cbmZ1bmN0aW9uIG5leHRBbGwoc2VsZWN0b3IpIHtcbiAgY29uc3QgbmV4dEVscyA9IFtdO1xuICBsZXQgZWwgPSB0aGlzWzBdO1xuICBpZiAoIWVsKSByZXR1cm4gJChbXSk7XG5cbiAgd2hpbGUgKGVsLm5leHRFbGVtZW50U2libGluZykge1xuICAgIGNvbnN0IG5leHQgPSBlbC5uZXh0RWxlbWVudFNpYmxpbmc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgaWYgKCQobmV4dCkuaXMoc2VsZWN0b3IpKSBuZXh0RWxzLnB1c2gobmV4dCk7XG4gICAgfSBlbHNlIG5leHRFbHMucHVzaChuZXh0KTtcblxuICAgIGVsID0gbmV4dDtcbiAgfVxuXG4gIHJldHVybiAkKG5leHRFbHMpO1xufVxuXG5mdW5jdGlvbiBwcmV2KHNlbGVjdG9yKSB7XG4gIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCBlbCA9IHRoaXNbMF07XG5cbiAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgIGlmIChlbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nICYmICQoZWwucHJldmlvdXNFbGVtZW50U2libGluZykuaXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIHJldHVybiAkKFtlbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAkKFtdKTtcbiAgICB9XG5cbiAgICBpZiAoZWwucHJldmlvdXNFbGVtZW50U2libGluZykgcmV0dXJuICQoW2VsLnByZXZpb3VzRWxlbWVudFNpYmxpbmddKTtcbiAgICByZXR1cm4gJChbXSk7XG4gIH1cblxuICByZXR1cm4gJChbXSk7XG59XG5cbmZ1bmN0aW9uIHByZXZBbGwoc2VsZWN0b3IpIHtcbiAgY29uc3QgcHJldkVscyA9IFtdO1xuICBsZXQgZWwgPSB0aGlzWzBdO1xuICBpZiAoIWVsKSByZXR1cm4gJChbXSk7XG5cbiAgd2hpbGUgKGVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmcpIHtcbiAgICBjb25zdCBwcmV2ID0gZWwucHJldmlvdXNFbGVtZW50U2libGluZzsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICBpZiAoJChwcmV2KS5pcyhzZWxlY3RvcikpIHByZXZFbHMucHVzaChwcmV2KTtcbiAgICB9IGVsc2UgcHJldkVscy5wdXNoKHByZXYpO1xuXG4gICAgZWwgPSBwcmV2O1xuICB9XG5cbiAgcmV0dXJuICQocHJldkVscyk7XG59XG5cbmZ1bmN0aW9uIHNpYmxpbmdzKHNlbGVjdG9yKSB7XG4gIHJldHVybiB0aGlzLm5leHRBbGwoc2VsZWN0b3IpLmFkZCh0aGlzLnByZXZBbGwoc2VsZWN0b3IpKTtcbn1cblxuZnVuY3Rpb24gcGFyZW50KHNlbGVjdG9yKSB7XG4gIGNvbnN0IHBhcmVudHMgPSBbXTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmICh0aGlzW2ldLnBhcmVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICBpZiAoJCh0aGlzW2ldLnBhcmVudE5vZGUpLmlzKHNlbGVjdG9yKSkgcGFyZW50cy5wdXNoKHRoaXNbaV0ucGFyZW50Tm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJlbnRzLnB1c2godGhpc1tpXS5wYXJlbnROb2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gJChwYXJlbnRzKTtcbn1cblxuZnVuY3Rpb24gcGFyZW50cyhzZWxlY3Rvcikge1xuICBjb25zdCBwYXJlbnRzID0gW107IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBsZXQgcGFyZW50ID0gdGhpc1tpXS5wYXJlbnROb2RlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgICB3aGlsZSAocGFyZW50KSB7XG4gICAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgICAgaWYgKCQocGFyZW50KS5pcyhzZWxlY3RvcikpIHBhcmVudHMucHVzaChwYXJlbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyZW50cy5wdXNoKHBhcmVudCk7XG4gICAgICB9XG5cbiAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAkKHBhcmVudHMpO1xufVxuXG5mdW5jdGlvbiBjbG9zZXN0KHNlbGVjdG9yKSB7XG4gIGxldCBjbG9zZXN0ID0gdGhpczsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuICQoW10pO1xuICB9XG5cbiAgaWYgKCFjbG9zZXN0LmlzKHNlbGVjdG9yKSkge1xuICAgIGNsb3Nlc3QgPSBjbG9zZXN0LnBhcmVudHMoc2VsZWN0b3IpLmVxKDApO1xuICB9XG5cbiAgcmV0dXJuIGNsb3Nlc3Q7XG59XG5cbmZ1bmN0aW9uIGZpbmQoc2VsZWN0b3IpIHtcbiAgY29uc3QgZm91bmRFbGVtZW50cyA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGZvdW5kID0gdGhpc1tpXS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgZm91bmQubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgIGZvdW5kRWxlbWVudHMucHVzaChmb3VuZFtqXSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICQoZm91bmRFbGVtZW50cyk7XG59XG5cbmZ1bmN0aW9uIGNoaWxkcmVuKHNlbGVjdG9yKSB7XG4gIGNvbnN0IGNoaWxkcmVuID0gW107IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpc1tpXS5jaGlsZHJlbjtcblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgY2hpbGROb2Rlcy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgaWYgKCFzZWxlY3RvciB8fCAkKGNoaWxkTm9kZXNbal0pLmlzKHNlbGVjdG9yKSkge1xuICAgICAgICBjaGlsZHJlbi5wdXNoKGNoaWxkTm9kZXNbal0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAkKGNoaWxkcmVuKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlKCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAodGhpc1tpXS5wYXJlbnROb2RlKSB0aGlzW2ldLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpc1tpXSk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gZGV0YWNoKCkge1xuICByZXR1cm4gdGhpcy5yZW1vdmUoKTtcbn1cblxuZnVuY3Rpb24gYWRkKC4uLmVscykge1xuICBjb25zdCBkb20gPSB0aGlzO1xuICBsZXQgaTtcbiAgbGV0IGo7XG5cbiAgZm9yIChpID0gMDsgaSA8IGVscy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IHRvQWRkID0gJChlbHNbaV0pO1xuXG4gICAgZm9yIChqID0gMDsgaiA8IHRvQWRkLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICBkb20ucHVzaCh0b0FkZFtqXSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRvbTtcbn1cblxuZnVuY3Rpb24gZW1wdHkoKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGVsID0gdGhpc1tpXTtcblxuICAgIGlmIChlbC5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBlbC5jaGlsZE5vZGVzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIGlmIChlbC5jaGlsZE5vZGVzW2pdLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICBlbC5jaGlsZE5vZGVzW2pdLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwuY2hpbGROb2Rlc1tqXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZWwudGV4dENvbnRlbnQgPSAnJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5cbmZ1bmN0aW9uIHNjcm9sbFRvKC4uLmFyZ3MpIHtcbiAgY29uc3Qgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gIGxldCBbbGVmdCwgdG9wLCBkdXJhdGlvbiwgZWFzaW5nLCBjYWxsYmFja10gPSBhcmdzO1xuXG4gIGlmIChhcmdzLmxlbmd0aCA9PT0gNCAmJiB0eXBlb2YgZWFzaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2FsbGJhY2sgPSBlYXNpbmc7XG4gICAgW2xlZnQsIHRvcCwgZHVyYXRpb24sIGNhbGxiYWNrLCBlYXNpbmddID0gYXJncztcbiAgfVxuXG4gIGlmICh0eXBlb2YgZWFzaW5nID09PSAndW5kZWZpbmVkJykgZWFzaW5nID0gJ3N3aW5nJztcbiAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiBhbmltYXRlKCkge1xuICAgIGNvbnN0IGVsID0gdGhpcztcbiAgICBsZXQgY3VycmVudFRvcDtcbiAgICBsZXQgY3VycmVudExlZnQ7XG4gICAgbGV0IG1heFRvcDtcbiAgICBsZXQgbWF4TGVmdDtcbiAgICBsZXQgbmV3VG9wO1xuICAgIGxldCBuZXdMZWZ0O1xuICAgIGxldCBzY3JvbGxUb3A7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICAgIGxldCBzY3JvbGxMZWZ0OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgICBsZXQgYW5pbWF0ZVRvcCA9IHRvcCA+IDAgfHwgdG9wID09PSAwO1xuICAgIGxldCBhbmltYXRlTGVmdCA9IGxlZnQgPiAwIHx8IGxlZnQgPT09IDA7XG5cbiAgICBpZiAodHlwZW9mIGVhc2luZyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGVhc2luZyA9ICdzd2luZyc7XG4gICAgfVxuXG4gICAgaWYgKGFuaW1hdGVUb3ApIHtcbiAgICAgIGN1cnJlbnRUb3AgPSBlbC5zY3JvbGxUb3A7XG5cbiAgICAgIGlmICghZHVyYXRpb24pIHtcbiAgICAgICAgZWwuc2Nyb2xsVG9wID0gdG9wO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhbmltYXRlTGVmdCkge1xuICAgICAgY3VycmVudExlZnQgPSBlbC5zY3JvbGxMZWZ0O1xuXG4gICAgICBpZiAoIWR1cmF0aW9uKSB7XG4gICAgICAgIGVsLnNjcm9sbExlZnQgPSBsZWZ0O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghZHVyYXRpb24pIHJldHVybjtcblxuICAgIGlmIChhbmltYXRlVG9wKSB7XG4gICAgICBtYXhUb3AgPSBlbC5zY3JvbGxIZWlnaHQgLSBlbC5vZmZzZXRIZWlnaHQ7XG4gICAgICBuZXdUb3AgPSBNYXRoLm1heChNYXRoLm1pbih0b3AsIG1heFRvcCksIDApO1xuICAgIH1cblxuICAgIGlmIChhbmltYXRlTGVmdCkge1xuICAgICAgbWF4TGVmdCA9IGVsLnNjcm9sbFdpZHRoIC0gZWwub2Zmc2V0V2lkdGg7XG4gICAgICBuZXdMZWZ0ID0gTWF0aC5tYXgoTWF0aC5taW4obGVmdCwgbWF4TGVmdCksIDApO1xuICAgIH1cblxuICAgIGxldCBzdGFydFRpbWUgPSBudWxsO1xuICAgIGlmIChhbmltYXRlVG9wICYmIG5ld1RvcCA9PT0gY3VycmVudFRvcCkgYW5pbWF0ZVRvcCA9IGZhbHNlO1xuICAgIGlmIChhbmltYXRlTGVmdCAmJiBuZXdMZWZ0ID09PSBjdXJyZW50TGVmdCkgYW5pbWF0ZUxlZnQgPSBmYWxzZTtcblxuICAgIGZ1bmN0aW9uIHJlbmRlcih0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCkpIHtcbiAgICAgIGlmIChzdGFydFRpbWUgPT09IG51bGwpIHtcbiAgICAgICAgc3RhcnRUaW1lID0gdGltZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvZ3Jlc3MgPSBNYXRoLm1heChNYXRoLm1pbigodGltZSAtIHN0YXJ0VGltZSkgLyBkdXJhdGlvbiwgMSksIDApO1xuICAgICAgY29uc3QgZWFzZVByb2dyZXNzID0gZWFzaW5nID09PSAnbGluZWFyJyA/IHByb2dyZXNzIDogMC41IC0gTWF0aC5jb3MocHJvZ3Jlc3MgKiBNYXRoLlBJKSAvIDI7XG4gICAgICBsZXQgZG9uZTtcbiAgICAgIGlmIChhbmltYXRlVG9wKSBzY3JvbGxUb3AgPSBjdXJyZW50VG9wICsgZWFzZVByb2dyZXNzICogKG5ld1RvcCAtIGN1cnJlbnRUb3ApO1xuICAgICAgaWYgKGFuaW1hdGVMZWZ0KSBzY3JvbGxMZWZ0ID0gY3VycmVudExlZnQgKyBlYXNlUHJvZ3Jlc3MgKiAobmV3TGVmdCAtIGN1cnJlbnRMZWZ0KTtcblxuICAgICAgaWYgKGFuaW1hdGVUb3AgJiYgbmV3VG9wID4gY3VycmVudFRvcCAmJiBzY3JvbGxUb3AgPj0gbmV3VG9wKSB7XG4gICAgICAgIGVsLnNjcm9sbFRvcCA9IG5ld1RvcDtcbiAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChhbmltYXRlVG9wICYmIG5ld1RvcCA8IGN1cnJlbnRUb3AgJiYgc2Nyb2xsVG9wIDw9IG5ld1RvcCkge1xuICAgICAgICBlbC5zY3JvbGxUb3AgPSBuZXdUb3A7XG4gICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoYW5pbWF0ZUxlZnQgJiYgbmV3TGVmdCA+IGN1cnJlbnRMZWZ0ICYmIHNjcm9sbExlZnQgPj0gbmV3TGVmdCkge1xuICAgICAgICBlbC5zY3JvbGxMZWZ0ID0gbmV3TGVmdDtcbiAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChhbmltYXRlTGVmdCAmJiBuZXdMZWZ0IDwgY3VycmVudExlZnQgJiYgc2Nyb2xsTGVmdCA8PSBuZXdMZWZ0KSB7XG4gICAgICAgIGVsLnNjcm9sbExlZnQgPSBuZXdMZWZ0O1xuICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRvbmUpIHtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjaygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChhbmltYXRlVG9wKSBlbC5zY3JvbGxUb3AgPSBzY3JvbGxUb3A7XG4gICAgICBpZiAoYW5pbWF0ZUxlZnQpIGVsLnNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0O1xuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xuICAgIH1cblxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbiAgfSk7XG59IC8vIHNjcm9sbFRvcCh0b3AsIGR1cmF0aW9uLCBlYXNpbmcsIGNhbGxiYWNrKSB7XG5cblxuZnVuY3Rpb24gc2Nyb2xsVG9wKC4uLmFyZ3MpIHtcbiAgbGV0IFt0b3AsIGR1cmF0aW9uLCBlYXNpbmcsIGNhbGxiYWNrXSA9IGFyZ3M7XG5cbiAgaWYgKGFyZ3MubGVuZ3RoID09PSAzICYmIHR5cGVvZiBlYXNpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICBbdG9wLCBkdXJhdGlvbiwgY2FsbGJhY2ssIGVhc2luZ10gPSBhcmdzO1xuICB9XG5cbiAgY29uc3QgZG9tID0gdGhpcztcblxuICBpZiAodHlwZW9mIHRvcCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAoZG9tLmxlbmd0aCA+IDApIHJldHVybiBkb21bMF0uc2Nyb2xsVG9wO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGRvbS5zY3JvbGxUbyh1bmRlZmluZWQsIHRvcCwgZHVyYXRpb24sIGVhc2luZywgY2FsbGJhY2spO1xufVxuXG5mdW5jdGlvbiBzY3JvbGxMZWZ0KC4uLmFyZ3MpIHtcbiAgbGV0IFtsZWZ0LCBkdXJhdGlvbiwgZWFzaW5nLCBjYWxsYmFja10gPSBhcmdzO1xuXG4gIGlmIChhcmdzLmxlbmd0aCA9PT0gMyAmJiB0eXBlb2YgZWFzaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgW2xlZnQsIGR1cmF0aW9uLCBjYWxsYmFjaywgZWFzaW5nXSA9IGFyZ3M7XG4gIH1cblxuICBjb25zdCBkb20gPSB0aGlzO1xuXG4gIGlmICh0eXBlb2YgbGVmdCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAoZG9tLmxlbmd0aCA+IDApIHJldHVybiBkb21bMF0uc2Nyb2xsTGVmdDtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBkb20uc2Nyb2xsVG8obGVmdCwgdW5kZWZpbmVkLCBkdXJhdGlvbiwgZWFzaW5nLCBjYWxsYmFjayk7XG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXG5mdW5jdGlvbiBhbmltYXRlKGluaXRpYWxQcm9wcywgaW5pdGlhbFBhcmFtcykge1xuICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgY29uc3QgZWxzID0gdGhpcztcbiAgY29uc3QgYSA9IHtcbiAgICBwcm9wczogT2JqZWN0LmFzc2lnbih7fSwgaW5pdGlhbFByb3BzKSxcbiAgICBwYXJhbXM6IE9iamVjdC5hc3NpZ24oe1xuICAgICAgZHVyYXRpb246IDMwMCxcbiAgICAgIGVhc2luZzogJ3N3aW5nJyAvLyBvciAnbGluZWFyJ1xuXG4gICAgICAvKiBDYWxsYmFja3NcbiAgICAgIGJlZ2luKGVsZW1lbnRzKVxuICAgICAgY29tcGxldGUoZWxlbWVudHMpXG4gICAgICBwcm9ncmVzcyhlbGVtZW50cywgY29tcGxldGUsIHJlbWFpbmluZywgc3RhcnQsIHR3ZWVuVmFsdWUpXG4gICAgICAqL1xuXG4gICAgfSwgaW5pdGlhbFBhcmFtcyksXG4gICAgZWxlbWVudHM6IGVscyxcbiAgICBhbmltYXRpbmc6IGZhbHNlLFxuICAgIHF1ZTogW10sXG5cbiAgICBlYXNpbmdQcm9ncmVzcyhlYXNpbmcsIHByb2dyZXNzKSB7XG4gICAgICBpZiAoZWFzaW5nID09PSAnc3dpbmcnKSB7XG4gICAgICAgIHJldHVybiAwLjUgLSBNYXRoLmNvcyhwcm9ncmVzcyAqIE1hdGguUEkpIC8gMjtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBlYXNpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGVhc2luZyhwcm9ncmVzcyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcm9ncmVzcztcbiAgICB9LFxuXG4gICAgc3RvcCgpIHtcbiAgICAgIGlmIChhLmZyYW1lSWQpIHtcbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKGEuZnJhbWVJZCk7XG4gICAgICB9XG5cbiAgICAgIGEuYW5pbWF0aW5nID0gZmFsc2U7XG4gICAgICBhLmVsZW1lbnRzLmVhY2goZWwgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZWw7XG4gICAgICAgIGRlbGV0ZSBlbGVtZW50LmRvbTdBbmltYXRlSW5zdGFuY2U7XG4gICAgICB9KTtcbiAgICAgIGEucXVlID0gW107XG4gICAgfSxcblxuICAgIGRvbmUoY29tcGxldGUpIHtcbiAgICAgIGEuYW5pbWF0aW5nID0gZmFsc2U7XG4gICAgICBhLmVsZW1lbnRzLmVhY2goZWwgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZWw7XG4gICAgICAgIGRlbGV0ZSBlbGVtZW50LmRvbTdBbmltYXRlSW5zdGFuY2U7XG4gICAgICB9KTtcbiAgICAgIGlmIChjb21wbGV0ZSkgY29tcGxldGUoZWxzKTtcblxuICAgICAgaWYgKGEucXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgcXVlID0gYS5xdWUuc2hpZnQoKTtcbiAgICAgICAgYS5hbmltYXRlKHF1ZVswXSwgcXVlWzFdKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYW5pbWF0ZShwcm9wcywgcGFyYW1zKSB7XG4gICAgICBpZiAoYS5hbmltYXRpbmcpIHtcbiAgICAgICAgYS5xdWUucHVzaChbcHJvcHMsIHBhcmFtc10pO1xuICAgICAgICByZXR1cm4gYTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZWxlbWVudHMgPSBbXTsgLy8gRGVmaW5lICYgQ2FjaGUgSW5pdGlhbHMgJiBVbml0c1xuXG4gICAgICBhLmVsZW1lbnRzLmVhY2goKGVsLCBpbmRleCkgPT4ge1xuICAgICAgICBsZXQgaW5pdGlhbEZ1bGxWYWx1ZTtcbiAgICAgICAgbGV0IGluaXRpYWxWYWx1ZTtcbiAgICAgICAgbGV0IHVuaXQ7XG4gICAgICAgIGxldCBmaW5hbFZhbHVlO1xuICAgICAgICBsZXQgZmluYWxGdWxsVmFsdWU7XG4gICAgICAgIGlmICghZWwuZG9tN0FuaW1hdGVJbnN0YW5jZSkgYS5lbGVtZW50c1tpbmRleF0uZG9tN0FuaW1hdGVJbnN0YW5jZSA9IGE7XG4gICAgICAgIGVsZW1lbnRzW2luZGV4XSA9IHtcbiAgICAgICAgICBjb250YWluZXI6IGVsXG4gICAgICAgIH07XG4gICAgICAgIE9iamVjdC5rZXlzKHByb3BzKS5mb3JFYWNoKHByb3AgPT4ge1xuICAgICAgICAgIGluaXRpYWxGdWxsVmFsdWUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZShwcm9wKS5yZXBsYWNlKCcsJywgJy4nKTtcbiAgICAgICAgICBpbml0aWFsVmFsdWUgPSBwYXJzZUZsb2F0KGluaXRpYWxGdWxsVmFsdWUpO1xuICAgICAgICAgIHVuaXQgPSBpbml0aWFsRnVsbFZhbHVlLnJlcGxhY2UoaW5pdGlhbFZhbHVlLCAnJyk7XG4gICAgICAgICAgZmluYWxWYWx1ZSA9IHBhcnNlRmxvYXQocHJvcHNbcHJvcF0pO1xuICAgICAgICAgIGZpbmFsRnVsbFZhbHVlID0gcHJvcHNbcHJvcF0gKyB1bml0O1xuICAgICAgICAgIGVsZW1lbnRzW2luZGV4XVtwcm9wXSA9IHtcbiAgICAgICAgICAgIGluaXRpYWxGdWxsVmFsdWUsXG4gICAgICAgICAgICBpbml0aWFsVmFsdWUsXG4gICAgICAgICAgICB1bml0LFxuICAgICAgICAgICAgZmluYWxWYWx1ZSxcbiAgICAgICAgICAgIGZpbmFsRnVsbFZhbHVlLFxuICAgICAgICAgICAgY3VycmVudFZhbHVlOiBpbml0aWFsVmFsdWVcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgbGV0IHN0YXJ0VGltZSA9IG51bGw7XG4gICAgICBsZXQgdGltZTtcbiAgICAgIGxldCBlbGVtZW50c0RvbmUgPSAwO1xuICAgICAgbGV0IHByb3BzRG9uZSA9IDA7XG4gICAgICBsZXQgZG9uZTtcbiAgICAgIGxldCBiZWdhbiA9IGZhbHNlO1xuICAgICAgYS5hbmltYXRpbmcgPSB0cnVlO1xuXG4gICAgICBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgbGV0IHByb2dyZXNzO1xuICAgICAgICBsZXQgZWFzZVByb2dyZXNzOyAvLyBsZXQgZWw7XG5cbiAgICAgICAgaWYgKCFiZWdhbikge1xuICAgICAgICAgIGJlZ2FuID0gdHJ1ZTtcbiAgICAgICAgICBpZiAocGFyYW1zLmJlZ2luKSBwYXJhbXMuYmVnaW4oZWxzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGFydFRpbWUgPT09IG51bGwpIHtcbiAgICAgICAgICBzdGFydFRpbWUgPSB0aW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcmFtcy5wcm9ncmVzcykge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgIHBhcmFtcy5wcm9ncmVzcyhlbHMsIE1hdGgubWF4KE1hdGgubWluKCh0aW1lIC0gc3RhcnRUaW1lKSAvIHBhcmFtcy5kdXJhdGlvbiwgMSksIDApLCBzdGFydFRpbWUgKyBwYXJhbXMuZHVyYXRpb24gLSB0aW1lIDwgMCA/IDAgOiBzdGFydFRpbWUgKyBwYXJhbXMuZHVyYXRpb24gLSB0aW1lLCBzdGFydFRpbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICBjb25zdCBlbCA9IGVsZW1lbnQ7XG4gICAgICAgICAgaWYgKGRvbmUgfHwgZWwuZG9uZSkgcmV0dXJuO1xuICAgICAgICAgIE9iamVjdC5rZXlzKHByb3BzKS5mb3JFYWNoKHByb3AgPT4ge1xuICAgICAgICAgICAgaWYgKGRvbmUgfHwgZWwuZG9uZSkgcmV0dXJuO1xuICAgICAgICAgICAgcHJvZ3Jlc3MgPSBNYXRoLm1heChNYXRoLm1pbigodGltZSAtIHN0YXJ0VGltZSkgLyBwYXJhbXMuZHVyYXRpb24sIDEpLCAwKTtcbiAgICAgICAgICAgIGVhc2VQcm9ncmVzcyA9IGEuZWFzaW5nUHJvZ3Jlc3MocGFyYW1zLmVhc2luZywgcHJvZ3Jlc3MpO1xuICAgICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgICBpbml0aWFsVmFsdWUsXG4gICAgICAgICAgICAgIGZpbmFsVmFsdWUsXG4gICAgICAgICAgICAgIHVuaXRcbiAgICAgICAgICAgIH0gPSBlbFtwcm9wXTtcbiAgICAgICAgICAgIGVsW3Byb3BdLmN1cnJlbnRWYWx1ZSA9IGluaXRpYWxWYWx1ZSArIGVhc2VQcm9ncmVzcyAqIChmaW5hbFZhbHVlIC0gaW5pdGlhbFZhbHVlKTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IGVsW3Byb3BdLmN1cnJlbnRWYWx1ZTtcblxuICAgICAgICAgICAgaWYgKGZpbmFsVmFsdWUgPiBpbml0aWFsVmFsdWUgJiYgY3VycmVudFZhbHVlID49IGZpbmFsVmFsdWUgfHwgZmluYWxWYWx1ZSA8IGluaXRpYWxWYWx1ZSAmJiBjdXJyZW50VmFsdWUgPD0gZmluYWxWYWx1ZSkge1xuICAgICAgICAgICAgICBlbC5jb250YWluZXIuc3R5bGVbcHJvcF0gPSBmaW5hbFZhbHVlICsgdW5pdDtcbiAgICAgICAgICAgICAgcHJvcHNEb25lICs9IDE7XG5cbiAgICAgICAgICAgICAgaWYgKHByb3BzRG9uZSA9PT0gT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGVsLmRvbmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGVsZW1lbnRzRG9uZSArPSAxO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKGVsZW1lbnRzRG9uZSA9PT0gZWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGRvbmUpIHtcbiAgICAgICAgICAgICAgYS5kb25lKHBhcmFtcy5jb21wbGV0ZSk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZWwuY29udGFpbmVyLnN0eWxlW3Byb3BdID0gY3VycmVudFZhbHVlICsgdW5pdDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChkb25lKSByZXR1cm47IC8vIFRoZW4gY2FsbFxuXG4gICAgICAgIGEuZnJhbWVJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbiAgICAgIH1cblxuICAgICAgYS5mcmFtZUlkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xuICAgICAgcmV0dXJuIGE7XG4gICAgfVxuXG4gIH07XG5cbiAgaWYgKGEuZWxlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGVscztcbiAgfVxuXG4gIGxldCBhbmltYXRlSW5zdGFuY2U7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhLmVsZW1lbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKGEuZWxlbWVudHNbaV0uZG9tN0FuaW1hdGVJbnN0YW5jZSkge1xuICAgICAgYW5pbWF0ZUluc3RhbmNlID0gYS5lbGVtZW50c1tpXS5kb203QW5pbWF0ZUluc3RhbmNlO1xuICAgIH0gZWxzZSBhLmVsZW1lbnRzW2ldLmRvbTdBbmltYXRlSW5zdGFuY2UgPSBhO1xuICB9XG5cbiAgaWYgKCFhbmltYXRlSW5zdGFuY2UpIHtcbiAgICBhbmltYXRlSW5zdGFuY2UgPSBhO1xuICB9XG5cbiAgaWYgKGluaXRpYWxQcm9wcyA9PT0gJ3N0b3AnKSB7XG4gICAgYW5pbWF0ZUluc3RhbmNlLnN0b3AoKTtcbiAgfSBlbHNlIHtcbiAgICBhbmltYXRlSW5zdGFuY2UuYW5pbWF0ZShhLnByb3BzLCBhLnBhcmFtcyk7XG4gIH1cblxuICByZXR1cm4gZWxzO1xufVxuXG5mdW5jdGlvbiBzdG9wKCkge1xuICBjb25zdCBlbHMgPSB0aGlzO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZWxzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKGVsc1tpXS5kb203QW5pbWF0ZUluc3RhbmNlKSB7XG4gICAgICBlbHNbaV0uZG9tN0FuaW1hdGVJbnN0YW5jZS5zdG9wKCk7XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IG5vVHJpZ2dlciA9ICdyZXNpemUgc2Nyb2xsJy5zcGxpdCgnICcpO1xuXG5mdW5jdGlvbiBzaG9ydGN1dChuYW1lKSB7XG4gIGZ1bmN0aW9uIGV2ZW50SGFuZGxlciguLi5hcmdzKSB7XG4gICAgaWYgKHR5cGVvZiBhcmdzWzBdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChub1RyaWdnZXIuaW5kZXhPZihuYW1lKSA8IDApIHtcbiAgICAgICAgICBpZiAobmFtZSBpbiB0aGlzW2ldKSB0aGlzW2ldW25hbWVdKCk7ZWxzZSB7XG4gICAgICAgICAgICAkKHRoaXNbaV0pLnRyaWdnZXIobmFtZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLm9uKG5hbWUsIC4uLmFyZ3MpO1xuICB9XG5cbiAgcmV0dXJuIGV2ZW50SGFuZGxlcjtcbn1cblxuY29uc3QgY2xpY2sgPSBzaG9ydGN1dCgnY2xpY2snKTtcbmNvbnN0IGJsdXIgPSBzaG9ydGN1dCgnYmx1cicpO1xuY29uc3QgZm9jdXMgPSBzaG9ydGN1dCgnZm9jdXMnKTtcbmNvbnN0IGZvY3VzaW4gPSBzaG9ydGN1dCgnZm9jdXNpbicpO1xuY29uc3QgZm9jdXNvdXQgPSBzaG9ydGN1dCgnZm9jdXNvdXQnKTtcbmNvbnN0IGtleXVwID0gc2hvcnRjdXQoJ2tleXVwJyk7XG5jb25zdCBrZXlkb3duID0gc2hvcnRjdXQoJ2tleWRvd24nKTtcbmNvbnN0IGtleXByZXNzID0gc2hvcnRjdXQoJ2tleXByZXNzJyk7XG5jb25zdCBzdWJtaXQgPSBzaG9ydGN1dCgnc3VibWl0Jyk7XG5jb25zdCBjaGFuZ2UgPSBzaG9ydGN1dCgnY2hhbmdlJyk7XG5jb25zdCBtb3VzZWRvd24gPSBzaG9ydGN1dCgnbW91c2Vkb3duJyk7XG5jb25zdCBtb3VzZW1vdmUgPSBzaG9ydGN1dCgnbW91c2Vtb3ZlJyk7XG5jb25zdCBtb3VzZXVwID0gc2hvcnRjdXQoJ21vdXNldXAnKTtcbmNvbnN0IG1vdXNlZW50ZXIgPSBzaG9ydGN1dCgnbW91c2VlbnRlcicpO1xuY29uc3QgbW91c2VsZWF2ZSA9IHNob3J0Y3V0KCdtb3VzZWxlYXZlJyk7XG5jb25zdCBtb3VzZW91dCA9IHNob3J0Y3V0KCdtb3VzZW91dCcpO1xuY29uc3QgbW91c2VvdmVyID0gc2hvcnRjdXQoJ21vdXNlb3ZlcicpO1xuY29uc3QgdG91Y2hzdGFydCA9IHNob3J0Y3V0KCd0b3VjaHN0YXJ0Jyk7XG5jb25zdCB0b3VjaGVuZCA9IHNob3J0Y3V0KCd0b3VjaGVuZCcpO1xuY29uc3QgdG91Y2htb3ZlID0gc2hvcnRjdXQoJ3RvdWNobW92ZScpO1xuY29uc3QgcmVzaXplID0gc2hvcnRjdXQoJ3Jlc2l6ZScpO1xuY29uc3Qgc2Nyb2xsID0gc2hvcnRjdXQoJ3Njcm9sbCcpO1xuXG5leHBvcnQgZGVmYXVsdCAkO1xuZXhwb3J0IHsgJCwgYWRkLCBhZGRDbGFzcywgYW5pbWF0ZSwgYW5pbWF0aW9uRW5kLCBhcHBlbmQsIGFwcGVuZFRvLCBhdHRyLCBibHVyLCBjaGFuZ2UsIGNoaWxkcmVuLCBjbGljaywgY2xvc2VzdCwgY3NzLCBkYXRhLCBkYXRhc2V0LCBkZXRhY2gsIGVhY2gsIGVtcHR5LCBlcSwgZmlsdGVyLCBmaW5kLCBmb2N1cywgZm9jdXNpbiwgZm9jdXNvdXQsIGhhc0NsYXNzLCBoZWlnaHQsIGhpZGUsIGh0bWwsIGluZGV4LCBpbnNlcnRBZnRlciwgaW5zZXJ0QmVmb3JlLCBpcywga2V5ZG93biwga2V5cHJlc3MsIGtleXVwLCBtb3VzZWRvd24sIG1vdXNlZW50ZXIsIG1vdXNlbGVhdmUsIG1vdXNlbW92ZSwgbW91c2VvdXQsIG1vdXNlb3ZlciwgbW91c2V1cCwgbmV4dCwgbmV4dEFsbCwgb2ZmLCBvZmZzZXQsIG9uLCBvbmNlLCBvdXRlckhlaWdodCwgb3V0ZXJXaWR0aCwgcGFyZW50LCBwYXJlbnRzLCBwcmVwZW5kLCBwcmVwZW5kVG8sIHByZXYsIHByZXZBbGwsIHByb3AsIHJlbW92ZSwgcmVtb3ZlQXR0ciwgcmVtb3ZlQ2xhc3MsIHJlbW92ZURhdGEsIHJlc2l6ZSwgc2Nyb2xsLCBzY3JvbGxMZWZ0LCBzY3JvbGxUbywgc2Nyb2xsVG9wLCBzaG93LCBzaWJsaW5ncywgc3RvcCwgc3R5bGVzLCBzdWJtaXQsIHRleHQsIHRvZ2dsZUNsYXNzLCB0b3VjaGVuZCwgdG91Y2htb3ZlLCB0b3VjaHN0YXJ0LCB0cmFuc2Zvcm0sIHRyYW5zaXRpb24sIHRyYW5zaXRpb25FbmQsIHRyaWdnZXIsIHZhbCwgdmFsdWUsIHdpZHRoIH07XG4iLCIvKipcbiAqIFNTUiBXaW5kb3cgNC4wLjBcbiAqIEJldHRlciBoYW5kbGluZyBmb3Igd2luZG93IG9iamVjdCBpbiBTU1IgZW52aXJvbm1lbnRcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2xpbWl0czR3ZWIvc3NyLXdpbmRvd1xuICpcbiAqIENvcHlyaWdodCAyMDIxLCBWbGFkaW1pciBLaGFybGFtcGlkaVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVFxuICpcbiAqIFJlbGVhc2VkIG9uOiBBdWd1c3QgMjUsIDIwMjFcbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KG9iaikge1xuICAgIHJldHVybiAob2JqICE9PSBudWxsICYmXG4gICAgICAgIHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmXG4gICAgICAgICdjb25zdHJ1Y3RvcicgaW4gb2JqICYmXG4gICAgICAgIG9iai5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KTtcbn1cbmZ1bmN0aW9uIGV4dGVuZCh0YXJnZXQgPSB7fSwgc3JjID0ge30pIHtcbiAgICBPYmplY3Qua2V5cyhzcmMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHRhcmdldFtrZXldID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gc3JjW2tleV07XG4gICAgICAgIGVsc2UgaWYgKGlzT2JqZWN0KHNyY1trZXldKSAmJlxuICAgICAgICAgICAgaXNPYmplY3QodGFyZ2V0W2tleV0pICYmXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzcmNba2V5XSkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZXh0ZW5kKHRhcmdldFtrZXldLCBzcmNba2V5XSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuY29uc3Qgc3NyRG9jdW1lbnQgPSB7XG4gICAgYm9keToge30sXG4gICAgYWRkRXZlbnRMaXN0ZW5lcigpIHsgfSxcbiAgICByZW1vdmVFdmVudExpc3RlbmVyKCkgeyB9LFxuICAgIGFjdGl2ZUVsZW1lbnQ6IHtcbiAgICAgICAgYmx1cigpIHsgfSxcbiAgICAgICAgbm9kZU5hbWU6ICcnLFxuICAgIH0sXG4gICAgcXVlcnlTZWxlY3RvcigpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcbiAgICBxdWVyeVNlbGVjdG9yQWxsKCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfSxcbiAgICBnZXRFbGVtZW50QnlJZCgpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcbiAgICBjcmVhdGVFdmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGluaXRFdmVudCgpIHsgfSxcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIGNyZWF0ZUVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgICAgICAgICBjaGlsZE5vZGVzOiBbXSxcbiAgICAgICAgICAgIHN0eWxlOiB7fSxcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZSgpIHsgfSxcbiAgICAgICAgICAgIGdldEVsZW1lbnRzQnlUYWdOYW1lKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBjcmVhdGVFbGVtZW50TlMoKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9LFxuICAgIGltcG9ydE5vZGUoKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG4gICAgbG9jYXRpb246IHtcbiAgICAgICAgaGFzaDogJycsXG4gICAgICAgIGhvc3Q6ICcnLFxuICAgICAgICBob3N0bmFtZTogJycsXG4gICAgICAgIGhyZWY6ICcnLFxuICAgICAgICBvcmlnaW46ICcnLFxuICAgICAgICBwYXRobmFtZTogJycsXG4gICAgICAgIHByb3RvY29sOiAnJyxcbiAgICAgICAgc2VhcmNoOiAnJyxcbiAgICB9LFxufTtcbmZ1bmN0aW9uIGdldERvY3VtZW50KCkge1xuICAgIGNvbnN0IGRvYyA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgPyBkb2N1bWVudCA6IHt9O1xuICAgIGV4dGVuZChkb2MsIHNzckRvY3VtZW50KTtcbiAgICByZXR1cm4gZG9jO1xufVxuXG5jb25zdCBzc3JXaW5kb3cgPSB7XG4gICAgZG9jdW1lbnQ6IHNzckRvY3VtZW50LFxuICAgIG5hdmlnYXRvcjoge1xuICAgICAgICB1c2VyQWdlbnQ6ICcnLFxuICAgIH0sXG4gICAgbG9jYXRpb246IHtcbiAgICAgICAgaGFzaDogJycsXG4gICAgICAgIGhvc3Q6ICcnLFxuICAgICAgICBob3N0bmFtZTogJycsXG4gICAgICAgIGhyZWY6ICcnLFxuICAgICAgICBvcmlnaW46ICcnLFxuICAgICAgICBwYXRobmFtZTogJycsXG4gICAgICAgIHByb3RvY29sOiAnJyxcbiAgICAgICAgc2VhcmNoOiAnJyxcbiAgICB9LFxuICAgIGhpc3Rvcnk6IHtcbiAgICAgICAgcmVwbGFjZVN0YXRlKCkgeyB9LFxuICAgICAgICBwdXNoU3RhdGUoKSB7IH0sXG4gICAgICAgIGdvKCkgeyB9LFxuICAgICAgICBiYWNrKCkgeyB9LFxuICAgIH0sXG4gICAgQ3VzdG9tRXZlbnQ6IGZ1bmN0aW9uIEN1c3RvbUV2ZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIGFkZEV2ZW50TGlzdGVuZXIoKSB7IH0sXG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcigpIHsgfSxcbiAgICBnZXRDb21wdXRlZFN0eWxlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZ2V0UHJvcGVydHlWYWx1ZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgSW1hZ2UoKSB7IH0sXG4gICAgRGF0ZSgpIHsgfSxcbiAgICBzY3JlZW46IHt9LFxuICAgIHNldFRpbWVvdXQoKSB7IH0sXG4gICAgY2xlYXJUaW1lb3V0KCkgeyB9LFxuICAgIG1hdGNoTWVkaWEoKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9LFxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShjYWxsYmFjaykge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoY2FsbGJhY2ssIDApO1xuICAgIH0sXG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoaWQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNsZWFyVGltZW91dChpZCk7XG4gICAgfSxcbn07XG5mdW5jdGlvbiBnZXRXaW5kb3coKSB7XG4gICAgY29uc3Qgd2luID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB7fTtcbiAgICBleHRlbmQod2luLCBzc3JXaW5kb3cpO1xuICAgIHJldHVybiB3aW47XG59XG5cbmV4cG9ydCB7IGV4dGVuZCwgZ2V0RG9jdW1lbnQsIGdldFdpbmRvdywgc3NyRG9jdW1lbnQsIHNzcldpbmRvdyB9O1xuIiwiaW1wb3J0IHsgZ2V0V2luZG93IH0gZnJvbSAnc3NyLXdpbmRvdyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRCcmVha3BvaW50KGJyZWFrcG9pbnRzLCBiYXNlID0gJ3dpbmRvdycsIGNvbnRhaW5lckVsKSB7XG4gIGlmICghYnJlYWtwb2ludHMgfHwgYmFzZSA9PT0gJ2NvbnRhaW5lcicgJiYgIWNvbnRhaW5lckVsKSByZXR1cm4gdW5kZWZpbmVkO1xuICBsZXQgYnJlYWtwb2ludCA9IGZhbHNlO1xuICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgY29uc3QgY3VycmVudEhlaWdodCA9IGJhc2UgPT09ICd3aW5kb3cnID8gd2luZG93LmlubmVySGVpZ2h0IDogY29udGFpbmVyRWwuY2xpZW50SGVpZ2h0O1xuICBjb25zdCBwb2ludHMgPSBPYmplY3Qua2V5cyhicmVha3BvaW50cykubWFwKHBvaW50ID0+IHtcbiAgICBpZiAodHlwZW9mIHBvaW50ID09PSAnc3RyaW5nJyAmJiBwb2ludC5pbmRleE9mKCdAJykgPT09IDApIHtcbiAgICAgIGNvbnN0IG1pblJhdGlvID0gcGFyc2VGbG9hdChwb2ludC5zdWJzdHIoMSkpO1xuICAgICAgY29uc3QgdmFsdWUgPSBjdXJyZW50SGVpZ2h0ICogbWluUmF0aW87XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZSxcbiAgICAgICAgcG9pbnRcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiBwb2ludCxcbiAgICAgIHBvaW50XG4gICAgfTtcbiAgfSk7XG4gIHBvaW50cy5zb3J0KChhLCBiKSA9PiBwYXJzZUludChhLnZhbHVlLCAxMCkgLSBwYXJzZUludChiLnZhbHVlLCAxMCkpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3Qge1xuICAgICAgcG9pbnQsXG4gICAgICB2YWx1ZVxuICAgIH0gPSBwb2ludHNbaV07XG5cbiAgICBpZiAoYmFzZSA9PT0gJ3dpbmRvdycpIHtcbiAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYShgKG1pbi13aWR0aDogJHt2YWx1ZX1weClgKS5tYXRjaGVzKSB7XG4gICAgICAgIGJyZWFrcG9pbnQgPSBwb2ludDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHZhbHVlIDw9IGNvbnRhaW5lckVsLmNsaWVudFdpZHRoKSB7XG4gICAgICBicmVha3BvaW50ID0gcG9pbnQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJyZWFrcG9pbnQgfHwgJ21heCc7XG59IiwiaW1wb3J0IHNldEJyZWFrcG9pbnQgZnJvbSAnLi9zZXRCcmVha3BvaW50LmpzJztcbmltcG9ydCBnZXRCcmVha3BvaW50IGZyb20gJy4vZ2V0QnJlYWtwb2ludC5qcyc7XG5leHBvcnQgZGVmYXVsdCB7XG4gIHNldEJyZWFrcG9pbnQsXG4gIGdldEJyZWFrcG9pbnRcbn07IiwiaW1wb3J0IHsgZXh0ZW5kIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3V0aWxzLmpzJztcblxuY29uc3QgaXNHcmlkRW5hYmxlZCA9IChzd2lwZXIsIHBhcmFtcykgPT4ge1xuICByZXR1cm4gc3dpcGVyLmdyaWQgJiYgcGFyYW1zLmdyaWQgJiYgcGFyYW1zLmdyaWQucm93cyA+IDE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRCcmVha3BvaW50KCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCB7XG4gICAgYWN0aXZlSW5kZXgsXG4gICAgaW5pdGlhbGl6ZWQsXG4gICAgbG9vcGVkU2xpZGVzID0gMCxcbiAgICBwYXJhbXMsXG4gICAgJGVsXG4gIH0gPSBzd2lwZXI7XG4gIGNvbnN0IGJyZWFrcG9pbnRzID0gcGFyYW1zLmJyZWFrcG9pbnRzO1xuICBpZiAoIWJyZWFrcG9pbnRzIHx8IGJyZWFrcG9pbnRzICYmIE9iamVjdC5rZXlzKGJyZWFrcG9pbnRzKS5sZW5ndGggPT09IDApIHJldHVybjsgLy8gR2V0IGJyZWFrcG9pbnQgZm9yIHdpbmRvdyB3aWR0aCBhbmQgdXBkYXRlIHBhcmFtZXRlcnNcblxuICBjb25zdCBicmVha3BvaW50ID0gc3dpcGVyLmdldEJyZWFrcG9pbnQoYnJlYWtwb2ludHMsIHN3aXBlci5wYXJhbXMuYnJlYWtwb2ludHNCYXNlLCBzd2lwZXIuZWwpO1xuICBpZiAoIWJyZWFrcG9pbnQgfHwgc3dpcGVyLmN1cnJlbnRCcmVha3BvaW50ID09PSBicmVha3BvaW50KSByZXR1cm47XG4gIGNvbnN0IGJyZWFrcG9pbnRPbmx5UGFyYW1zID0gYnJlYWtwb2ludCBpbiBicmVha3BvaW50cyA/IGJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdIDogdW5kZWZpbmVkO1xuICBjb25zdCBicmVha3BvaW50UGFyYW1zID0gYnJlYWtwb2ludE9ubHlQYXJhbXMgfHwgc3dpcGVyLm9yaWdpbmFsUGFyYW1zO1xuICBjb25zdCB3YXNNdWx0aVJvdyA9IGlzR3JpZEVuYWJsZWQoc3dpcGVyLCBwYXJhbXMpO1xuICBjb25zdCBpc011bHRpUm93ID0gaXNHcmlkRW5hYmxlZChzd2lwZXIsIGJyZWFrcG9pbnRQYXJhbXMpO1xuICBjb25zdCB3YXNFbmFibGVkID0gcGFyYW1zLmVuYWJsZWQ7XG5cbiAgaWYgKHdhc011bHRpUm93ICYmICFpc011bHRpUm93KSB7XG4gICAgJGVsLnJlbW92ZUNsYXNzKGAke3BhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzfWdyaWQgJHtwYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzc31ncmlkLWNvbHVtbmApO1xuICAgIHN3aXBlci5lbWl0Q29udGFpbmVyQ2xhc3NlcygpO1xuICB9IGVsc2UgaWYgKCF3YXNNdWx0aVJvdyAmJiBpc011bHRpUm93KSB7XG4gICAgJGVsLmFkZENsYXNzKGAke3BhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzfWdyaWRgKTtcblxuICAgIGlmIChicmVha3BvaW50UGFyYW1zLmdyaWQuZmlsbCAmJiBicmVha3BvaW50UGFyYW1zLmdyaWQuZmlsbCA9PT0gJ2NvbHVtbicgfHwgIWJyZWFrcG9pbnRQYXJhbXMuZ3JpZC5maWxsICYmIHBhcmFtcy5ncmlkLmZpbGwgPT09ICdjb2x1bW4nKSB7XG4gICAgICAkZWwuYWRkQ2xhc3MoYCR7cGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3N9Z3JpZC1jb2x1bW5gKTtcbiAgICB9XG5cbiAgICBzd2lwZXIuZW1pdENvbnRhaW5lckNsYXNzZXMoKTtcbiAgfVxuXG4gIGNvbnN0IGRpcmVjdGlvbkNoYW5nZWQgPSBicmVha3BvaW50UGFyYW1zLmRpcmVjdGlvbiAmJiBicmVha3BvaW50UGFyYW1zLmRpcmVjdGlvbiAhPT0gcGFyYW1zLmRpcmVjdGlvbjtcbiAgY29uc3QgbmVlZHNSZUxvb3AgPSBwYXJhbXMubG9vcCAmJiAoYnJlYWtwb2ludFBhcmFtcy5zbGlkZXNQZXJWaWV3ICE9PSBwYXJhbXMuc2xpZGVzUGVyVmlldyB8fCBkaXJlY3Rpb25DaGFuZ2VkKTtcblxuICBpZiAoZGlyZWN0aW9uQ2hhbmdlZCAmJiBpbml0aWFsaXplZCkge1xuICAgIHN3aXBlci5jaGFuZ2VEaXJlY3Rpb24oKTtcbiAgfVxuXG4gIGV4dGVuZChzd2lwZXIucGFyYW1zLCBicmVha3BvaW50UGFyYW1zKTtcbiAgY29uc3QgaXNFbmFibGVkID0gc3dpcGVyLnBhcmFtcy5lbmFibGVkO1xuICBPYmplY3QuYXNzaWduKHN3aXBlciwge1xuICAgIGFsbG93VG91Y2hNb3ZlOiBzd2lwZXIucGFyYW1zLmFsbG93VG91Y2hNb3ZlLFxuICAgIGFsbG93U2xpZGVOZXh0OiBzd2lwZXIucGFyYW1zLmFsbG93U2xpZGVOZXh0LFxuICAgIGFsbG93U2xpZGVQcmV2OiBzd2lwZXIucGFyYW1zLmFsbG93U2xpZGVQcmV2XG4gIH0pO1xuXG4gIGlmICh3YXNFbmFibGVkICYmICFpc0VuYWJsZWQpIHtcbiAgICBzd2lwZXIuZGlzYWJsZSgpO1xuICB9IGVsc2UgaWYgKCF3YXNFbmFibGVkICYmIGlzRW5hYmxlZCkge1xuICAgIHN3aXBlci5lbmFibGUoKTtcbiAgfVxuXG4gIHN3aXBlci5jdXJyZW50QnJlYWtwb2ludCA9IGJyZWFrcG9pbnQ7XG4gIHN3aXBlci5lbWl0KCdfYmVmb3JlQnJlYWtwb2ludCcsIGJyZWFrcG9pbnRQYXJhbXMpO1xuXG4gIGlmIChuZWVkc1JlTG9vcCAmJiBpbml0aWFsaXplZCkge1xuICAgIHN3aXBlci5sb29wRGVzdHJveSgpO1xuICAgIHN3aXBlci5sb29wQ3JlYXRlKCk7XG4gICAgc3dpcGVyLnVwZGF0ZVNsaWRlcygpO1xuICAgIHN3aXBlci5zbGlkZVRvKGFjdGl2ZUluZGV4IC0gbG9vcGVkU2xpZGVzICsgc3dpcGVyLmxvb3BlZFNsaWRlcywgMCwgZmFsc2UpO1xuICB9XG5cbiAgc3dpcGVyLmVtaXQoJ2JyZWFrcG9pbnQnLCBicmVha3BvaW50UGFyYW1zKTtcbn0iLCJmdW5jdGlvbiBjaGVja092ZXJmbG93KCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCB7XG4gICAgaXNMb2NrZWQ6IHdhc0xvY2tlZCxcbiAgICBwYXJhbXNcbiAgfSA9IHN3aXBlcjtcbiAgY29uc3Qge1xuICAgIHNsaWRlc09mZnNldEJlZm9yZVxuICB9ID0gcGFyYW1zO1xuXG4gIGlmIChzbGlkZXNPZmZzZXRCZWZvcmUpIHtcbiAgICBjb25zdCBsYXN0U2xpZGVJbmRleCA9IHN3aXBlci5zbGlkZXMubGVuZ3RoIC0gMTtcbiAgICBjb25zdCBsYXN0U2xpZGVSaWdodEVkZ2UgPSBzd2lwZXIuc2xpZGVzR3JpZFtsYXN0U2xpZGVJbmRleF0gKyBzd2lwZXIuc2xpZGVzU2l6ZXNHcmlkW2xhc3RTbGlkZUluZGV4XSArIHNsaWRlc09mZnNldEJlZm9yZSAqIDI7XG4gICAgc3dpcGVyLmlzTG9ja2VkID0gc3dpcGVyLnNpemUgPiBsYXN0U2xpZGVSaWdodEVkZ2U7XG4gIH0gZWxzZSB7XG4gICAgc3dpcGVyLmlzTG9ja2VkID0gc3dpcGVyLnNuYXBHcmlkLmxlbmd0aCA9PT0gMTtcbiAgfVxuXG4gIGlmIChwYXJhbXMuYWxsb3dTbGlkZU5leHQgPT09IHRydWUpIHtcbiAgICBzd2lwZXIuYWxsb3dTbGlkZU5leHQgPSAhc3dpcGVyLmlzTG9ja2VkO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5hbGxvd1NsaWRlUHJldiA9PT0gdHJ1ZSkge1xuICAgIHN3aXBlci5hbGxvd1NsaWRlUHJldiA9ICFzd2lwZXIuaXNMb2NrZWQ7XG4gIH1cblxuICBpZiAod2FzTG9ja2VkICYmIHdhc0xvY2tlZCAhPT0gc3dpcGVyLmlzTG9ja2VkKSB7XG4gICAgc3dpcGVyLmlzRW5kID0gZmFsc2U7XG4gIH1cblxuICBpZiAod2FzTG9ja2VkICE9PSBzd2lwZXIuaXNMb2NrZWQpIHtcbiAgICBzd2lwZXIuZW1pdChzd2lwZXIuaXNMb2NrZWQgPyAnbG9jaycgOiAndW5sb2NrJyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBjaGVja092ZXJmbG93XG59OyIsImZ1bmN0aW9uIHByZXBhcmVDbGFzc2VzKGVudHJpZXMsIHByZWZpeCkge1xuICBjb25zdCByZXN1bHRDbGFzc2VzID0gW107XG4gIGVudHJpZXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICBpZiAodHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyhpdGVtKS5mb3JFYWNoKGNsYXNzTmFtZXMgPT4ge1xuICAgICAgICBpZiAoaXRlbVtjbGFzc05hbWVzXSkge1xuICAgICAgICAgIHJlc3VsdENsYXNzZXMucHVzaChwcmVmaXggKyBjbGFzc05hbWVzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJlc3VsdENsYXNzZXMucHVzaChwcmVmaXggKyBpdGVtKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0Q2xhc3Nlcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkQ2xhc3NlcygpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3Qge1xuICAgIGNsYXNzTmFtZXMsXG4gICAgcGFyYW1zLFxuICAgIHJ0bCxcbiAgICAkZWwsXG4gICAgZGV2aWNlLFxuICAgIHN1cHBvcnRcbiAgfSA9IHN3aXBlcjsgLy8gcHJldHRpZXItaWdub3JlXG5cbiAgY29uc3Qgc3VmZml4ZXMgPSBwcmVwYXJlQ2xhc3NlcyhbJ2luaXRpYWxpemVkJywgcGFyYW1zLmRpcmVjdGlvbiwge1xuICAgICdwb2ludGVyLWV2ZW50cyc6ICFzdXBwb3J0LnRvdWNoXG4gIH0sIHtcbiAgICAnZnJlZS1tb2RlJzogc3dpcGVyLnBhcmFtcy5mcmVlTW9kZSAmJiBwYXJhbXMuZnJlZU1vZGUuZW5hYmxlZFxuICB9LCB7XG4gICAgJ2F1dG9oZWlnaHQnOiBwYXJhbXMuYXV0b0hlaWdodFxuICB9LCB7XG4gICAgJ3J0bCc6IHJ0bFxuICB9LCB7XG4gICAgJ2dyaWQnOiBwYXJhbXMuZ3JpZCAmJiBwYXJhbXMuZ3JpZC5yb3dzID4gMVxuICB9LCB7XG4gICAgJ2dyaWQtY29sdW1uJzogcGFyYW1zLmdyaWQgJiYgcGFyYW1zLmdyaWQucm93cyA+IDEgJiYgcGFyYW1zLmdyaWQuZmlsbCA9PT0gJ2NvbHVtbidcbiAgfSwge1xuICAgICdhbmRyb2lkJzogZGV2aWNlLmFuZHJvaWRcbiAgfSwge1xuICAgICdpb3MnOiBkZXZpY2UuaW9zXG4gIH0sIHtcbiAgICAnY3NzLW1vZGUnOiBwYXJhbXMuY3NzTW9kZVxuICB9LCB7XG4gICAgJ2NlbnRlcmVkJzogcGFyYW1zLmNzc01vZGUgJiYgcGFyYW1zLmNlbnRlcmVkU2xpZGVzXG4gIH1dLCBwYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcyk7XG4gIGNsYXNzTmFtZXMucHVzaCguLi5zdWZmaXhlcyk7XG4gICRlbC5hZGRDbGFzcyhbLi4uY2xhc3NOYW1lc10uam9pbignICcpKTtcbiAgc3dpcGVyLmVtaXRDb250YWluZXJDbGFzc2VzKCk7XG59IiwiaW1wb3J0IGFkZENsYXNzZXMgZnJvbSAnLi9hZGRDbGFzc2VzLmpzJztcbmltcG9ydCByZW1vdmVDbGFzc2VzIGZyb20gJy4vcmVtb3ZlQ2xhc3Nlcy5qcyc7XG5leHBvcnQgZGVmYXVsdCB7XG4gIGFkZENsYXNzZXMsXG4gIHJlbW92ZUNsYXNzZXNcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVtb3ZlQ2xhc3NlcygpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3Qge1xuICAgICRlbCxcbiAgICBjbGFzc05hbWVzXG4gIH0gPSBzd2lwZXI7XG4gICRlbC5yZW1vdmVDbGFzcyhjbGFzc05hbWVzLmpvaW4oJyAnKSk7XG4gIHN3aXBlci5lbWl0Q29udGFpbmVyQ2xhc3NlcygpO1xufSIsIi8qIGVzbGludCBuby1wYXJhbS1yZWFzc2lnbjogXCJvZmZcIiAqL1xuaW1wb3J0IHsgZ2V0RG9jdW1lbnQgfSBmcm9tICdzc3Itd2luZG93JztcbmltcG9ydCAkIGZyb20gJy4uL3NoYXJlZC9kb20uanMnO1xuaW1wb3J0IHsgZXh0ZW5kLCBub3csIGRlbGV0ZVByb3BzIH0gZnJvbSAnLi4vc2hhcmVkL3V0aWxzLmpzJztcbmltcG9ydCB7IGdldFN1cHBvcnQgfSBmcm9tICcuLi9zaGFyZWQvZ2V0LXN1cHBvcnQuanMnO1xuaW1wb3J0IHsgZ2V0RGV2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2dldC1kZXZpY2UuanMnO1xuaW1wb3J0IHsgZ2V0QnJvd3NlciB9IGZyb20gJy4uL3NoYXJlZC9nZXQtYnJvd3Nlci5qcyc7XG5pbXBvcnQgUmVzaXplIGZyb20gJy4vbW9kdWxlcy9yZXNpemUvcmVzaXplLmpzJztcbmltcG9ydCBPYnNlcnZlciBmcm9tICcuL21vZHVsZXMvb2JzZXJ2ZXIvb2JzZXJ2ZXIuanMnO1xuaW1wb3J0IGV2ZW50c0VtaXR0ZXIgZnJvbSAnLi9ldmVudHMtZW1pdHRlci5qcyc7XG5pbXBvcnQgdXBkYXRlIGZyb20gJy4vdXBkYXRlL2luZGV4LmpzJztcbmltcG9ydCB0cmFuc2xhdGUgZnJvbSAnLi90cmFuc2xhdGUvaW5kZXguanMnO1xuaW1wb3J0IHRyYW5zaXRpb24gZnJvbSAnLi90cmFuc2l0aW9uL2luZGV4LmpzJztcbmltcG9ydCBzbGlkZSBmcm9tICcuL3NsaWRlL2luZGV4LmpzJztcbmltcG9ydCBsb29wIGZyb20gJy4vbG9vcC9pbmRleC5qcyc7XG5pbXBvcnQgZ3JhYkN1cnNvciBmcm9tICcuL2dyYWItY3Vyc29yL2luZGV4LmpzJztcbmltcG9ydCBldmVudHMgZnJvbSAnLi9ldmVudHMvaW5kZXguanMnO1xuaW1wb3J0IGJyZWFrcG9pbnRzIGZyb20gJy4vYnJlYWtwb2ludHMvaW5kZXguanMnO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9jbGFzc2VzL2luZGV4LmpzJztcbmltcG9ydCBpbWFnZXMgZnJvbSAnLi9pbWFnZXMvaW5kZXguanMnO1xuaW1wb3J0IGNoZWNrT3ZlcmZsb3cgZnJvbSAnLi9jaGVjay1vdmVyZmxvdy9pbmRleC5qcyc7XG5pbXBvcnQgZGVmYXVsdHMgZnJvbSAnLi9kZWZhdWx0cy5qcyc7XG5pbXBvcnQgbW9kdWxlRXh0ZW5kUGFyYW1zIGZyb20gJy4vbW9kdWxlRXh0ZW5kUGFyYW1zLmpzJztcbmNvbnN0IHByb3RvdHlwZXMgPSB7XG4gIGV2ZW50c0VtaXR0ZXIsXG4gIHVwZGF0ZSxcbiAgdHJhbnNsYXRlLFxuICB0cmFuc2l0aW9uLFxuICBzbGlkZSxcbiAgbG9vcCxcbiAgZ3JhYkN1cnNvcixcbiAgZXZlbnRzLFxuICBicmVha3BvaW50cyxcbiAgY2hlY2tPdmVyZmxvdyxcbiAgY2xhc3NlcyxcbiAgaW1hZ2VzXG59O1xuY29uc3QgZXh0ZW5kZWREZWZhdWx0cyA9IHt9O1xuXG5jbGFzcyBTd2lwZXIge1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgbGV0IGVsO1xuICAgIGxldCBwYXJhbXM7XG5cbiAgICBpZiAoYXJncy5sZW5ndGggPT09IDEgJiYgYXJnc1swXS5jb25zdHJ1Y3RvciAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJnc1swXSkuc2xpY2UoOCwgLTEpID09PSAnT2JqZWN0Jykge1xuICAgICAgcGFyYW1zID0gYXJnc1swXTtcbiAgICB9IGVsc2Uge1xuICAgICAgW2VsLCBwYXJhbXNdID0gYXJncztcbiAgICB9XG5cbiAgICBpZiAoIXBhcmFtcykgcGFyYW1zID0ge307XG4gICAgcGFyYW1zID0gZXh0ZW5kKHt9LCBwYXJhbXMpO1xuICAgIGlmIChlbCAmJiAhcGFyYW1zLmVsKSBwYXJhbXMuZWwgPSBlbDtcblxuICAgIGlmIChwYXJhbXMuZWwgJiYgJChwYXJhbXMuZWwpLmxlbmd0aCA+IDEpIHtcbiAgICAgIGNvbnN0IHN3aXBlcnMgPSBbXTtcbiAgICAgICQocGFyYW1zLmVsKS5lYWNoKGNvbnRhaW5lckVsID0+IHtcbiAgICAgICAgY29uc3QgbmV3UGFyYW1zID0gZXh0ZW5kKHt9LCBwYXJhbXMsIHtcbiAgICAgICAgICBlbDogY29udGFpbmVyRWxcbiAgICAgICAgfSk7XG4gICAgICAgIHN3aXBlcnMucHVzaChuZXcgU3dpcGVyKG5ld1BhcmFtcykpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gc3dpcGVycztcbiAgICB9IC8vIFN3aXBlciBJbnN0YW5jZVxuXG5cbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgIHN3aXBlci5fX3N3aXBlcl9fID0gdHJ1ZTtcbiAgICBzd2lwZXIuc3VwcG9ydCA9IGdldFN1cHBvcnQoKTtcbiAgICBzd2lwZXIuZGV2aWNlID0gZ2V0RGV2aWNlKHtcbiAgICAgIHVzZXJBZ2VudDogcGFyYW1zLnVzZXJBZ2VudFxuICAgIH0pO1xuICAgIHN3aXBlci5icm93c2VyID0gZ2V0QnJvd3NlcigpO1xuICAgIHN3aXBlci5ldmVudHNMaXN0ZW5lcnMgPSB7fTtcbiAgICBzd2lwZXIuZXZlbnRzQW55TGlzdGVuZXJzID0gW107XG4gICAgc3dpcGVyLm1vZHVsZXMgPSBbLi4uc3dpcGVyLl9fbW9kdWxlc19fXTtcblxuICAgIGlmIChwYXJhbXMubW9kdWxlcyAmJiBBcnJheS5pc0FycmF5KHBhcmFtcy5tb2R1bGVzKSkge1xuICAgICAgc3dpcGVyLm1vZHVsZXMucHVzaCguLi5wYXJhbXMubW9kdWxlcyk7XG4gICAgfVxuXG4gICAgY29uc3QgYWxsTW9kdWxlc1BhcmFtcyA9IHt9O1xuICAgIHN3aXBlci5tb2R1bGVzLmZvckVhY2gobW9kID0+IHtcbiAgICAgIG1vZCh7XG4gICAgICAgIHN3aXBlcixcbiAgICAgICAgZXh0ZW5kUGFyYW1zOiBtb2R1bGVFeHRlbmRQYXJhbXMocGFyYW1zLCBhbGxNb2R1bGVzUGFyYW1zKSxcbiAgICAgICAgb246IHN3aXBlci5vbi5iaW5kKHN3aXBlciksXG4gICAgICAgIG9uY2U6IHN3aXBlci5vbmNlLmJpbmQoc3dpcGVyKSxcbiAgICAgICAgb2ZmOiBzd2lwZXIub2ZmLmJpbmQoc3dpcGVyKSxcbiAgICAgICAgZW1pdDogc3dpcGVyLmVtaXQuYmluZChzd2lwZXIpXG4gICAgICB9KTtcbiAgICB9KTsgLy8gRXh0ZW5kIGRlZmF1bHRzIHdpdGggbW9kdWxlcyBwYXJhbXNcblxuICAgIGNvbnN0IHN3aXBlclBhcmFtcyA9IGV4dGVuZCh7fSwgZGVmYXVsdHMsIGFsbE1vZHVsZXNQYXJhbXMpOyAvLyBFeHRlbmQgZGVmYXVsdHMgd2l0aCBwYXNzZWQgcGFyYW1zXG5cbiAgICBzd2lwZXIucGFyYW1zID0gZXh0ZW5kKHt9LCBzd2lwZXJQYXJhbXMsIGV4dGVuZGVkRGVmYXVsdHMsIHBhcmFtcyk7XG4gICAgc3dpcGVyLm9yaWdpbmFsUGFyYW1zID0gZXh0ZW5kKHt9LCBzd2lwZXIucGFyYW1zKTtcbiAgICBzd2lwZXIucGFzc2VkUGFyYW1zID0gZXh0ZW5kKHt9LCBwYXJhbXMpOyAvLyBhZGQgZXZlbnQgbGlzdGVuZXJzXG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcyAmJiBzd2lwZXIucGFyYW1zLm9uKSB7XG4gICAgICBPYmplY3Qua2V5cyhzd2lwZXIucGFyYW1zLm9uKS5mb3JFYWNoKGV2ZW50TmFtZSA9PiB7XG4gICAgICAgIHN3aXBlci5vbihldmVudE5hbWUsIHN3aXBlci5wYXJhbXMub25bZXZlbnROYW1lXSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcyAmJiBzd2lwZXIucGFyYW1zLm9uQW55KSB7XG4gICAgICBzd2lwZXIub25Bbnkoc3dpcGVyLnBhcmFtcy5vbkFueSk7XG4gICAgfSAvLyBTYXZlIERvbSBsaWJcblxuXG4gICAgc3dpcGVyLiQgPSAkOyAvLyBFeHRlbmQgU3dpcGVyXG5cbiAgICBPYmplY3QuYXNzaWduKHN3aXBlciwge1xuICAgICAgZW5hYmxlZDogc3dpcGVyLnBhcmFtcy5lbmFibGVkLFxuICAgICAgZWwsXG4gICAgICAvLyBDbGFzc2VzXG4gICAgICBjbGFzc05hbWVzOiBbXSxcbiAgICAgIC8vIFNsaWRlc1xuICAgICAgc2xpZGVzOiAkKCksXG4gICAgICBzbGlkZXNHcmlkOiBbXSxcbiAgICAgIHNuYXBHcmlkOiBbXSxcbiAgICAgIHNsaWRlc1NpemVzR3JpZDogW10sXG5cbiAgICAgIC8vIGlzRGlyZWN0aW9uXG4gICAgICBpc0hvcml6b250YWwoKSB7XG4gICAgICAgIHJldHVybiBzd2lwZXIucGFyYW1zLmRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnO1xuICAgICAgfSxcblxuICAgICAgaXNWZXJ0aWNhbCgpIHtcbiAgICAgICAgcmV0dXJuIHN3aXBlci5wYXJhbXMuZGlyZWN0aW9uID09PSAndmVydGljYWwnO1xuICAgICAgfSxcblxuICAgICAgLy8gSW5kZXhlc1xuICAgICAgYWN0aXZlSW5kZXg6IDAsXG4gICAgICByZWFsSW5kZXg6IDAsXG4gICAgICAvL1xuICAgICAgaXNCZWdpbm5pbmc6IHRydWUsXG4gICAgICBpc0VuZDogZmFsc2UsXG4gICAgICAvLyBQcm9wc1xuICAgICAgdHJhbnNsYXRlOiAwLFxuICAgICAgcHJldmlvdXNUcmFuc2xhdGU6IDAsXG4gICAgICBwcm9ncmVzczogMCxcbiAgICAgIHZlbG9jaXR5OiAwLFxuICAgICAgYW5pbWF0aW5nOiBmYWxzZSxcbiAgICAgIC8vIExvY2tzXG4gICAgICBhbGxvd1NsaWRlTmV4dDogc3dpcGVyLnBhcmFtcy5hbGxvd1NsaWRlTmV4dCxcbiAgICAgIGFsbG93U2xpZGVQcmV2OiBzd2lwZXIucGFyYW1zLmFsbG93U2xpZGVQcmV2LFxuICAgICAgLy8gVG91Y2ggRXZlbnRzXG4gICAgICB0b3VjaEV2ZW50czogZnVuY3Rpb24gdG91Y2hFdmVudHMoKSB7XG4gICAgICAgIGNvbnN0IHRvdWNoID0gWyd0b3VjaHN0YXJ0JywgJ3RvdWNobW92ZScsICd0b3VjaGVuZCcsICd0b3VjaGNhbmNlbCddO1xuICAgICAgICBjb25zdCBkZXNrdG9wID0gWydwb2ludGVyZG93bicsICdwb2ludGVybW92ZScsICdwb2ludGVydXAnXTtcbiAgICAgICAgc3dpcGVyLnRvdWNoRXZlbnRzVG91Y2ggPSB7XG4gICAgICAgICAgc3RhcnQ6IHRvdWNoWzBdLFxuICAgICAgICAgIG1vdmU6IHRvdWNoWzFdLFxuICAgICAgICAgIGVuZDogdG91Y2hbMl0sXG4gICAgICAgICAgY2FuY2VsOiB0b3VjaFszXVxuICAgICAgICB9O1xuICAgICAgICBzd2lwZXIudG91Y2hFdmVudHNEZXNrdG9wID0ge1xuICAgICAgICAgIHN0YXJ0OiBkZXNrdG9wWzBdLFxuICAgICAgICAgIG1vdmU6IGRlc2t0b3BbMV0sXG4gICAgICAgICAgZW5kOiBkZXNrdG9wWzJdXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBzd2lwZXIuc3VwcG9ydC50b3VjaCB8fCAhc3dpcGVyLnBhcmFtcy5zaW11bGF0ZVRvdWNoID8gc3dpcGVyLnRvdWNoRXZlbnRzVG91Y2ggOiBzd2lwZXIudG91Y2hFdmVudHNEZXNrdG9wO1xuICAgICAgfSgpLFxuICAgICAgdG91Y2hFdmVudHNEYXRhOiB7XG4gICAgICAgIGlzVG91Y2hlZDogdW5kZWZpbmVkLFxuICAgICAgICBpc01vdmVkOiB1bmRlZmluZWQsXG4gICAgICAgIGFsbG93VG91Y2hDYWxsYmFja3M6IHVuZGVmaW5lZCxcbiAgICAgICAgdG91Y2hTdGFydFRpbWU6IHVuZGVmaW5lZCxcbiAgICAgICAgaXNTY3JvbGxpbmc6IHVuZGVmaW5lZCxcbiAgICAgICAgY3VycmVudFRyYW5zbGF0ZTogdW5kZWZpbmVkLFxuICAgICAgICBzdGFydFRyYW5zbGF0ZTogdW5kZWZpbmVkLFxuICAgICAgICBhbGxvd1RocmVzaG9sZE1vdmU6IHVuZGVmaW5lZCxcbiAgICAgICAgLy8gRm9ybSBlbGVtZW50cyB0byBtYXRjaFxuICAgICAgICBmb2N1c2FibGVFbGVtZW50czogc3dpcGVyLnBhcmFtcy5mb2N1c2FibGVFbGVtZW50cyxcbiAgICAgICAgLy8gTGFzdCBjbGljayB0aW1lXG4gICAgICAgIGxhc3RDbGlja1RpbWU6IG5vdygpLFxuICAgICAgICBjbGlja1RpbWVvdXQ6IHVuZGVmaW5lZCxcbiAgICAgICAgLy8gVmVsb2NpdGllc1xuICAgICAgICB2ZWxvY2l0aWVzOiBbXSxcbiAgICAgICAgYWxsb3dNb21lbnR1bUJvdW5jZTogdW5kZWZpbmVkLFxuICAgICAgICBpc1RvdWNoRXZlbnQ6IHVuZGVmaW5lZCxcbiAgICAgICAgc3RhcnRNb3Zpbmc6IHVuZGVmaW5lZFxuICAgICAgfSxcbiAgICAgIC8vIENsaWNrc1xuICAgICAgYWxsb3dDbGljazogdHJ1ZSxcbiAgICAgIC8vIFRvdWNoZXNcbiAgICAgIGFsbG93VG91Y2hNb3ZlOiBzd2lwZXIucGFyYW1zLmFsbG93VG91Y2hNb3ZlLFxuICAgICAgdG91Y2hlczoge1xuICAgICAgICBzdGFydFg6IDAsXG4gICAgICAgIHN0YXJ0WTogMCxcbiAgICAgICAgY3VycmVudFg6IDAsXG4gICAgICAgIGN1cnJlbnRZOiAwLFxuICAgICAgICBkaWZmOiAwXG4gICAgICB9LFxuICAgICAgLy8gSW1hZ2VzXG4gICAgICBpbWFnZXNUb0xvYWQ6IFtdLFxuICAgICAgaW1hZ2VzTG9hZGVkOiAwXG4gICAgfSk7XG4gICAgc3dpcGVyLmVtaXQoJ19zd2lwZXInKTsgLy8gSW5pdFxuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMuaW5pdCkge1xuICAgICAgc3dpcGVyLmluaXQoKTtcbiAgICB9IC8vIFJldHVybiBhcHAgaW5zdGFuY2VcblxuXG4gICAgcmV0dXJuIHN3aXBlcjtcbiAgfVxuXG4gIGVuYWJsZSgpIHtcbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgIGlmIChzd2lwZXIuZW5hYmxlZCkgcmV0dXJuO1xuICAgIHN3aXBlci5lbmFibGVkID0gdHJ1ZTtcblxuICAgIGlmIChzd2lwZXIucGFyYW1zLmdyYWJDdXJzb3IpIHtcbiAgICAgIHN3aXBlci5zZXRHcmFiQ3Vyc29yKCk7XG4gICAgfVxuXG4gICAgc3dpcGVyLmVtaXQoJ2VuYWJsZScpO1xuICB9XG5cbiAgZGlzYWJsZSgpIHtcbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgIGlmICghc3dpcGVyLmVuYWJsZWQpIHJldHVybjtcbiAgICBzd2lwZXIuZW5hYmxlZCA9IGZhbHNlO1xuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMuZ3JhYkN1cnNvcikge1xuICAgICAgc3dpcGVyLnVuc2V0R3JhYkN1cnNvcigpO1xuICAgIH1cblxuICAgIHN3aXBlci5lbWl0KCdkaXNhYmxlJyk7XG4gIH1cblxuICBzZXRQcm9ncmVzcyhwcm9ncmVzcywgc3BlZWQpIHtcbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgIHByb2dyZXNzID0gTWF0aC5taW4oTWF0aC5tYXgocHJvZ3Jlc3MsIDApLCAxKTtcbiAgICBjb25zdCBtaW4gPSBzd2lwZXIubWluVHJhbnNsYXRlKCk7XG4gICAgY29uc3QgbWF4ID0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpO1xuICAgIGNvbnN0IGN1cnJlbnQgPSAobWF4IC0gbWluKSAqIHByb2dyZXNzICsgbWluO1xuICAgIHN3aXBlci50cmFuc2xhdGVUbyhjdXJyZW50LCB0eXBlb2Ygc3BlZWQgPT09ICd1bmRlZmluZWQnID8gMCA6IHNwZWVkKTtcbiAgICBzd2lwZXIudXBkYXRlQWN0aXZlSW5kZXgoKTtcbiAgICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuICB9XG5cbiAgZW1pdENvbnRhaW5lckNsYXNzZXMoKSB7XG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBpZiAoIXN3aXBlci5wYXJhbXMuX2VtaXRDbGFzc2VzIHx8ICFzd2lwZXIuZWwpIHJldHVybjtcbiAgICBjb25zdCBjbHMgPSBzd2lwZXIuZWwuY2xhc3NOYW1lLnNwbGl0KCcgJykuZmlsdGVyKGNsYXNzTmFtZSA9PiB7XG4gICAgICByZXR1cm4gY2xhc3NOYW1lLmluZGV4T2YoJ3N3aXBlcicpID09PSAwIHx8IGNsYXNzTmFtZS5pbmRleE9mKHN3aXBlci5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcykgPT09IDA7XG4gICAgfSk7XG4gICAgc3dpcGVyLmVtaXQoJ19jb250YWluZXJDbGFzc2VzJywgY2xzLmpvaW4oJyAnKSk7XG4gIH1cblxuICBnZXRTbGlkZUNsYXNzZXMoc2xpZGVFbCkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgcmV0dXJuIHNsaWRlRWwuY2xhc3NOYW1lLnNwbGl0KCcgJykuZmlsdGVyKGNsYXNzTmFtZSA9PiB7XG4gICAgICByZXR1cm4gY2xhc3NOYW1lLmluZGV4T2YoJ3N3aXBlci1zbGlkZScpID09PSAwIHx8IGNsYXNzTmFtZS5pbmRleE9mKHN3aXBlci5wYXJhbXMuc2xpZGVDbGFzcykgPT09IDA7XG4gICAgfSkuam9pbignICcpO1xuICB9XG5cbiAgZW1pdFNsaWRlc0NsYXNzZXMoKSB7XG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBpZiAoIXN3aXBlci5wYXJhbXMuX2VtaXRDbGFzc2VzIHx8ICFzd2lwZXIuZWwpIHJldHVybjtcbiAgICBjb25zdCB1cGRhdGVzID0gW107XG4gICAgc3dpcGVyLnNsaWRlcy5lYWNoKHNsaWRlRWwgPT4ge1xuICAgICAgY29uc3QgY2xhc3NOYW1lcyA9IHN3aXBlci5nZXRTbGlkZUNsYXNzZXMoc2xpZGVFbCk7XG4gICAgICB1cGRhdGVzLnB1c2goe1xuICAgICAgICBzbGlkZUVsLFxuICAgICAgICBjbGFzc05hbWVzXG4gICAgICB9KTtcbiAgICAgIHN3aXBlci5lbWl0KCdfc2xpZGVDbGFzcycsIHNsaWRlRWwsIGNsYXNzTmFtZXMpO1xuICAgIH0pO1xuICAgIHN3aXBlci5lbWl0KCdfc2xpZGVDbGFzc2VzJywgdXBkYXRlcyk7XG4gIH1cblxuICBzbGlkZXNQZXJWaWV3RHluYW1pYyh2aWV3ID0gJ2N1cnJlbnQnLCBleGFjdCA9IGZhbHNlKSB7XG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBjb25zdCB7XG4gICAgICBwYXJhbXMsXG4gICAgICBzbGlkZXMsXG4gICAgICBzbGlkZXNHcmlkLFxuICAgICAgc2xpZGVzU2l6ZXNHcmlkLFxuICAgICAgc2l6ZTogc3dpcGVyU2l6ZSxcbiAgICAgIGFjdGl2ZUluZGV4XG4gICAgfSA9IHN3aXBlcjtcbiAgICBsZXQgc3B2ID0gMTtcblxuICAgIGlmIChwYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgIGxldCBzbGlkZVNpemUgPSBzbGlkZXNbYWN0aXZlSW5kZXhdLnN3aXBlclNsaWRlU2l6ZTtcbiAgICAgIGxldCBicmVha0xvb3A7XG5cbiAgICAgIGZvciAobGV0IGkgPSBhY3RpdmVJbmRleCArIDE7IGkgPCBzbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHNsaWRlc1tpXSAmJiAhYnJlYWtMb29wKSB7XG4gICAgICAgICAgc2xpZGVTaXplICs9IHNsaWRlc1tpXS5zd2lwZXJTbGlkZVNpemU7XG4gICAgICAgICAgc3B2ICs9IDE7XG4gICAgICAgICAgaWYgKHNsaWRlU2l6ZSA+IHN3aXBlclNpemUpIGJyZWFrTG9vcCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgaSA9IGFjdGl2ZUluZGV4IC0gMTsgaSA+PSAwOyBpIC09IDEpIHtcbiAgICAgICAgaWYgKHNsaWRlc1tpXSAmJiAhYnJlYWtMb29wKSB7XG4gICAgICAgICAgc2xpZGVTaXplICs9IHNsaWRlc1tpXS5zd2lwZXJTbGlkZVNpemU7XG4gICAgICAgICAgc3B2ICs9IDE7XG4gICAgICAgICAgaWYgKHNsaWRlU2l6ZSA+IHN3aXBlclNpemUpIGJyZWFrTG9vcCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICBpZiAodmlldyA9PT0gJ2N1cnJlbnQnKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSBhY3RpdmVJbmRleCArIDE7IGkgPCBzbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBjb25zdCBzbGlkZUluVmlldyA9IGV4YWN0ID8gc2xpZGVzR3JpZFtpXSArIHNsaWRlc1NpemVzR3JpZFtpXSAtIHNsaWRlc0dyaWRbYWN0aXZlSW5kZXhdIDwgc3dpcGVyU2l6ZSA6IHNsaWRlc0dyaWRbaV0gLSBzbGlkZXNHcmlkW2FjdGl2ZUluZGV4XSA8IHN3aXBlclNpemU7XG5cbiAgICAgICAgICBpZiAoc2xpZGVJblZpZXcpIHtcbiAgICAgICAgICAgIHNwdiArPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gcHJldmlvdXNcbiAgICAgICAgZm9yIChsZXQgaSA9IGFjdGl2ZUluZGV4IC0gMTsgaSA+PSAwOyBpIC09IDEpIHtcbiAgICAgICAgICBjb25zdCBzbGlkZUluVmlldyA9IHNsaWRlc0dyaWRbYWN0aXZlSW5kZXhdIC0gc2xpZGVzR3JpZFtpXSA8IHN3aXBlclNpemU7XG5cbiAgICAgICAgICBpZiAoc2xpZGVJblZpZXcpIHtcbiAgICAgICAgICAgIHNwdiArPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzcHY7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBpZiAoIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkKSByZXR1cm47XG4gICAgY29uc3Qge1xuICAgICAgc25hcEdyaWQsXG4gICAgICBwYXJhbXNcbiAgICB9ID0gc3dpcGVyOyAvLyBCcmVha3BvaW50c1xuXG4gICAgaWYgKHBhcmFtcy5icmVha3BvaW50cykge1xuICAgICAgc3dpcGVyLnNldEJyZWFrcG9pbnQoKTtcbiAgICB9XG5cbiAgICBzd2lwZXIudXBkYXRlU2l6ZSgpO1xuICAgIHN3aXBlci51cGRhdGVTbGlkZXMoKTtcbiAgICBzd2lwZXIudXBkYXRlUHJvZ3Jlc3MoKTtcbiAgICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuXG4gICAgZnVuY3Rpb24gc2V0VHJhbnNsYXRlKCkge1xuICAgICAgY29uc3QgdHJhbnNsYXRlVmFsdWUgPSBzd2lwZXIucnRsVHJhbnNsYXRlID8gc3dpcGVyLnRyYW5zbGF0ZSAqIC0xIDogc3dpcGVyLnRyYW5zbGF0ZTtcbiAgICAgIGNvbnN0IG5ld1RyYW5zbGF0ZSA9IE1hdGgubWluKE1hdGgubWF4KHRyYW5zbGF0ZVZhbHVlLCBzd2lwZXIubWF4VHJhbnNsYXRlKCkpLCBzd2lwZXIubWluVHJhbnNsYXRlKCkpO1xuICAgICAgc3dpcGVyLnNldFRyYW5zbGF0ZShuZXdUcmFuc2xhdGUpO1xuICAgICAgc3dpcGVyLnVwZGF0ZUFjdGl2ZUluZGV4KCk7XG4gICAgICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuICAgIH1cblxuICAgIGxldCB0cmFuc2xhdGVkO1xuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMuZnJlZU1vZGUgJiYgc3dpcGVyLnBhcmFtcy5mcmVlTW9kZS5lbmFibGVkKSB7XG4gICAgICBzZXRUcmFuc2xhdGUoKTtcblxuICAgICAgaWYgKHN3aXBlci5wYXJhbXMuYXV0b0hlaWdodCkge1xuICAgICAgICBzd2lwZXIudXBkYXRlQXV0b0hlaWdodCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoKHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyVmlldyA9PT0gJ2F1dG8nIHx8IHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyVmlldyA+IDEpICYmIHN3aXBlci5pc0VuZCAmJiAhc3dpcGVyLnBhcmFtcy5jZW50ZXJlZFNsaWRlcykge1xuICAgICAgICB0cmFuc2xhdGVkID0gc3dpcGVyLnNsaWRlVG8oc3dpcGVyLnNsaWRlcy5sZW5ndGggLSAxLCAwLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmFuc2xhdGVkID0gc3dpcGVyLnNsaWRlVG8oc3dpcGVyLmFjdGl2ZUluZGV4LCAwLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghdHJhbnNsYXRlZCkge1xuICAgICAgICBzZXRUcmFuc2xhdGUoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLndhdGNoT3ZlcmZsb3cgJiYgc25hcEdyaWQgIT09IHN3aXBlci5zbmFwR3JpZCkge1xuICAgICAgc3dpcGVyLmNoZWNrT3ZlcmZsb3coKTtcbiAgICB9XG5cbiAgICBzd2lwZXIuZW1pdCgndXBkYXRlJyk7XG4gIH1cblxuICBjaGFuZ2VEaXJlY3Rpb24obmV3RGlyZWN0aW9uLCBuZWVkVXBkYXRlID0gdHJ1ZSkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgY29uc3QgY3VycmVudERpcmVjdGlvbiA9IHN3aXBlci5wYXJhbXMuZGlyZWN0aW9uO1xuXG4gICAgaWYgKCFuZXdEaXJlY3Rpb24pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgbmV3RGlyZWN0aW9uID0gY3VycmVudERpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJztcbiAgICB9XG5cbiAgICBpZiAobmV3RGlyZWN0aW9uID09PSBjdXJyZW50RGlyZWN0aW9uIHx8IG5ld0RpcmVjdGlvbiAhPT0gJ2hvcml6b250YWwnICYmIG5ld0RpcmVjdGlvbiAhPT0gJ3ZlcnRpY2FsJykge1xuICAgICAgcmV0dXJuIHN3aXBlcjtcbiAgICB9XG5cbiAgICBzd2lwZXIuJGVsLnJlbW92ZUNsYXNzKGAke3N3aXBlci5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzc30ke2N1cnJlbnREaXJlY3Rpb259YCkuYWRkQ2xhc3MoYCR7c3dpcGVyLnBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzfSR7bmV3RGlyZWN0aW9ufWApO1xuICAgIHN3aXBlci5lbWl0Q29udGFpbmVyQ2xhc3NlcygpO1xuICAgIHN3aXBlci5wYXJhbXMuZGlyZWN0aW9uID0gbmV3RGlyZWN0aW9uO1xuICAgIHN3aXBlci5zbGlkZXMuZWFjaChzbGlkZUVsID0+IHtcbiAgICAgIGlmIChuZXdEaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgc2xpZGVFbC5zdHlsZS53aWR0aCA9ICcnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2xpZGVFbC5zdHlsZS5oZWlnaHQgPSAnJztcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzd2lwZXIuZW1pdCgnY2hhbmdlRGlyZWN0aW9uJyk7XG4gICAgaWYgKG5lZWRVcGRhdGUpIHN3aXBlci51cGRhdGUoKTtcbiAgICByZXR1cm4gc3dpcGVyO1xuICB9XG5cbiAgbW91bnQoZWwpIHtcbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgIGlmIChzd2lwZXIubW91bnRlZCkgcmV0dXJuIHRydWU7IC8vIEZpbmQgZWxcblxuICAgIGNvbnN0ICRlbCA9ICQoZWwgfHwgc3dpcGVyLnBhcmFtcy5lbCk7XG4gICAgZWwgPSAkZWxbMF07XG5cbiAgICBpZiAoIWVsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZWwuc3dpcGVyID0gc3dpcGVyO1xuXG4gICAgY29uc3QgZ2V0V3JhcHBlclNlbGVjdG9yID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIGAuJHsoc3dpcGVyLnBhcmFtcy53cmFwcGVyQ2xhc3MgfHwgJycpLnRyaW0oKS5zcGxpdCgnICcpLmpvaW4oJy4nKX1gO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRXcmFwcGVyID0gKCkgPT4ge1xuICAgICAgaWYgKGVsICYmIGVsLnNoYWRvd1Jvb3QgJiYgZWwuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKSB7XG4gICAgICAgIGNvbnN0IHJlcyA9ICQoZWwuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKGdldFdyYXBwZXJTZWxlY3RvcigpKSk7IC8vIENoaWxkcmVuIG5lZWRzIHRvIHJldHVybiBzbG90IGl0ZW1zXG5cbiAgICAgICAgcmVzLmNoaWxkcmVuID0gb3B0aW9ucyA9PiAkZWwuY2hpbGRyZW4ob3B0aW9ucyk7XG5cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuICRlbC5jaGlsZHJlbihnZXRXcmFwcGVyU2VsZWN0b3IoKSk7XG4gICAgfTsgLy8gRmluZCBXcmFwcGVyXG5cblxuICAgIGxldCAkd3JhcHBlckVsID0gZ2V0V3JhcHBlcigpO1xuXG4gICAgaWYgKCR3cmFwcGVyRWwubGVuZ3RoID09PSAwICYmIHN3aXBlci5wYXJhbXMuY3JlYXRlRWxlbWVudHMpIHtcbiAgICAgIGNvbnN0IGRvY3VtZW50ID0gZ2V0RG9jdW1lbnQoKTtcbiAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICR3cmFwcGVyRWwgPSAkKHdyYXBwZXIpO1xuICAgICAgd3JhcHBlci5jbGFzc05hbWUgPSBzd2lwZXIucGFyYW1zLndyYXBwZXJDbGFzcztcbiAgICAgICRlbC5hcHBlbmQod3JhcHBlcik7XG4gICAgICAkZWwuY2hpbGRyZW4oYC4ke3N3aXBlci5wYXJhbXMuc2xpZGVDbGFzc31gKS5lYWNoKHNsaWRlRWwgPT4ge1xuICAgICAgICAkd3JhcHBlckVsLmFwcGVuZChzbGlkZUVsKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIE9iamVjdC5hc3NpZ24oc3dpcGVyLCB7XG4gICAgICAkZWwsXG4gICAgICBlbCxcbiAgICAgICR3cmFwcGVyRWwsXG4gICAgICB3cmFwcGVyRWw6ICR3cmFwcGVyRWxbMF0sXG4gICAgICBtb3VudGVkOiB0cnVlLFxuICAgICAgLy8gUlRMXG4gICAgICBydGw6IGVsLmRpci50b0xvd2VyQ2FzZSgpID09PSAncnRsJyB8fCAkZWwuY3NzKCdkaXJlY3Rpb24nKSA9PT0gJ3J0bCcsXG4gICAgICBydGxUcmFuc2xhdGU6IHN3aXBlci5wYXJhbXMuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcgJiYgKGVsLmRpci50b0xvd2VyQ2FzZSgpID09PSAncnRsJyB8fCAkZWwuY3NzKCdkaXJlY3Rpb24nKSA9PT0gJ3J0bCcpLFxuICAgICAgd3JvbmdSVEw6ICR3cmFwcGVyRWwuY3NzKCdkaXNwbGF5JykgPT09ICctd2Via2l0LWJveCdcbiAgICB9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGluaXQoZWwpIHtcbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgIGlmIChzd2lwZXIuaW5pdGlhbGl6ZWQpIHJldHVybiBzd2lwZXI7XG4gICAgY29uc3QgbW91bnRlZCA9IHN3aXBlci5tb3VudChlbCk7XG4gICAgaWYgKG1vdW50ZWQgPT09IGZhbHNlKSByZXR1cm4gc3dpcGVyO1xuICAgIHN3aXBlci5lbWl0KCdiZWZvcmVJbml0Jyk7IC8vIFNldCBicmVha3BvaW50XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5icmVha3BvaW50cykge1xuICAgICAgc3dpcGVyLnNldEJyZWFrcG9pbnQoKTtcbiAgICB9IC8vIEFkZCBDbGFzc2VzXG5cblxuICAgIHN3aXBlci5hZGRDbGFzc2VzKCk7IC8vIENyZWF0ZSBsb29wXG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5sb29wKSB7XG4gICAgICBzd2lwZXIubG9vcENyZWF0ZSgpO1xuICAgIH0gLy8gVXBkYXRlIHNpemVcblxuXG4gICAgc3dpcGVyLnVwZGF0ZVNpemUoKTsgLy8gVXBkYXRlIHNsaWRlc1xuXG4gICAgc3dpcGVyLnVwZGF0ZVNsaWRlcygpO1xuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMud2F0Y2hPdmVyZmxvdykge1xuICAgICAgc3dpcGVyLmNoZWNrT3ZlcmZsb3coKTtcbiAgICB9IC8vIFNldCBHcmFiIEN1cnNvclxuXG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5ncmFiQ3Vyc29yICYmIHN3aXBlci5lbmFibGVkKSB7XG4gICAgICBzd2lwZXIuc2V0R3JhYkN1cnNvcigpO1xuICAgIH1cblxuICAgIGlmIChzd2lwZXIucGFyYW1zLnByZWxvYWRJbWFnZXMpIHtcbiAgICAgIHN3aXBlci5wcmVsb2FkSW1hZ2VzKCk7XG4gICAgfSAvLyBTbGlkZSBUbyBJbml0aWFsIFNsaWRlXG5cblxuICAgIGlmIChzd2lwZXIucGFyYW1zLmxvb3ApIHtcbiAgICAgIHN3aXBlci5zbGlkZVRvKHN3aXBlci5wYXJhbXMuaW5pdGlhbFNsaWRlICsgc3dpcGVyLmxvb3BlZFNsaWRlcywgMCwgc3dpcGVyLnBhcmFtcy5ydW5DYWxsYmFja3NPbkluaXQsIGZhbHNlLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLnBhcmFtcy5pbml0aWFsU2xpZGUsIDAsIHN3aXBlci5wYXJhbXMucnVuQ2FsbGJhY2tzT25Jbml0LCBmYWxzZSwgdHJ1ZSk7XG4gICAgfSAvLyBBdHRhY2ggZXZlbnRzXG5cblxuICAgIHN3aXBlci5hdHRhY2hFdmVudHMoKTsgLy8gSW5pdCBGbGFnXG5cbiAgICBzd2lwZXIuaW5pdGlhbGl6ZWQgPSB0cnVlOyAvLyBFbWl0XG5cbiAgICBzd2lwZXIuZW1pdCgnaW5pdCcpO1xuICAgIHN3aXBlci5lbWl0KCdhZnRlckluaXQnKTtcbiAgICByZXR1cm4gc3dpcGVyO1xuICB9XG5cbiAgZGVzdHJveShkZWxldGVJbnN0YW5jZSA9IHRydWUsIGNsZWFuU3R5bGVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgY29uc3Qge1xuICAgICAgcGFyYW1zLFxuICAgICAgJGVsLFxuICAgICAgJHdyYXBwZXJFbCxcbiAgICAgIHNsaWRlc1xuICAgIH0gPSBzd2lwZXI7XG5cbiAgICBpZiAodHlwZW9mIHN3aXBlci5wYXJhbXMgPT09ICd1bmRlZmluZWQnIHx8IHN3aXBlci5kZXN0cm95ZWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHN3aXBlci5lbWl0KCdiZWZvcmVEZXN0cm95Jyk7IC8vIEluaXQgRmxhZ1xuXG4gICAgc3dpcGVyLmluaXRpYWxpemVkID0gZmFsc2U7IC8vIERldGFjaCBldmVudHNcblxuICAgIHN3aXBlci5kZXRhY2hFdmVudHMoKTsgLy8gRGVzdHJveSBsb29wXG5cbiAgICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICAgIHN3aXBlci5sb29wRGVzdHJveSgpO1xuICAgIH0gLy8gQ2xlYW51cCBzdHlsZXNcblxuXG4gICAgaWYgKGNsZWFuU3R5bGVzKSB7XG4gICAgICBzd2lwZXIucmVtb3ZlQ2xhc3NlcygpO1xuICAgICAgJGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAkd3JhcHBlckVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG5cbiAgICAgIGlmIChzbGlkZXMgJiYgc2xpZGVzLmxlbmd0aCkge1xuICAgICAgICBzbGlkZXMucmVtb3ZlQ2xhc3MoW3BhcmFtcy5zbGlkZVZpc2libGVDbGFzcywgcGFyYW1zLnNsaWRlQWN0aXZlQ2xhc3MsIHBhcmFtcy5zbGlkZU5leHRDbGFzcywgcGFyYW1zLnNsaWRlUHJldkNsYXNzXS5qb2luKCcgJykpLnJlbW92ZUF0dHIoJ3N0eWxlJykucmVtb3ZlQXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzd2lwZXIuZW1pdCgnZGVzdHJveScpOyAvLyBEZXRhY2ggZW1pdHRlciBldmVudHNcblxuICAgIE9iamVjdC5rZXlzKHN3aXBlci5ldmVudHNMaXN0ZW5lcnMpLmZvckVhY2goZXZlbnROYW1lID0+IHtcbiAgICAgIHN3aXBlci5vZmYoZXZlbnROYW1lKTtcbiAgICB9KTtcblxuICAgIGlmIChkZWxldGVJbnN0YW5jZSAhPT0gZmFsc2UpIHtcbiAgICAgIHN3aXBlci4kZWxbMF0uc3dpcGVyID0gbnVsbDtcbiAgICAgIGRlbGV0ZVByb3BzKHN3aXBlcik7XG4gICAgfVxuXG4gICAgc3dpcGVyLmRlc3Ryb3llZCA9IHRydWU7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBzdGF0aWMgZXh0ZW5kRGVmYXVsdHMobmV3RGVmYXVsdHMpIHtcbiAgICBleHRlbmQoZXh0ZW5kZWREZWZhdWx0cywgbmV3RGVmYXVsdHMpO1xuICB9XG5cbiAgc3RhdGljIGdldCBleHRlbmRlZERlZmF1bHRzKCkge1xuICAgIHJldHVybiBleHRlbmRlZERlZmF1bHRzO1xuICB9XG5cbiAgc3RhdGljIGdldCBkZWZhdWx0cygpIHtcbiAgICByZXR1cm4gZGVmYXVsdHM7XG4gIH1cblxuICBzdGF0aWMgaW5zdGFsbE1vZHVsZShtb2QpIHtcbiAgICBpZiAoIVN3aXBlci5wcm90b3R5cGUuX19tb2R1bGVzX18pIFN3aXBlci5wcm90b3R5cGUuX19tb2R1bGVzX18gPSBbXTtcbiAgICBjb25zdCBtb2R1bGVzID0gU3dpcGVyLnByb3RvdHlwZS5fX21vZHVsZXNfXztcblxuICAgIGlmICh0eXBlb2YgbW9kID09PSAnZnVuY3Rpb24nICYmIG1vZHVsZXMuaW5kZXhPZihtb2QpIDwgMCkge1xuICAgICAgbW9kdWxlcy5wdXNoKG1vZCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHVzZShtb2R1bGUpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShtb2R1bGUpKSB7XG4gICAgICBtb2R1bGUuZm9yRWFjaChtID0+IFN3aXBlci5pbnN0YWxsTW9kdWxlKG0pKTtcbiAgICAgIHJldHVybiBTd2lwZXI7XG4gICAgfVxuXG4gICAgU3dpcGVyLmluc3RhbGxNb2R1bGUobW9kdWxlKTtcbiAgICByZXR1cm4gU3dpcGVyO1xuICB9XG5cbn1cblxuT2JqZWN0LmtleXMocHJvdG90eXBlcykuZm9yRWFjaChwcm90b3R5cGVHcm91cCA9PiB7XG4gIE9iamVjdC5rZXlzKHByb3RvdHlwZXNbcHJvdG90eXBlR3JvdXBdKS5mb3JFYWNoKHByb3RvTWV0aG9kID0+IHtcbiAgICBTd2lwZXIucHJvdG90eXBlW3Byb3RvTWV0aG9kXSA9IHByb3RvdHlwZXNbcHJvdG90eXBlR3JvdXBdW3Byb3RvTWV0aG9kXTtcbiAgfSk7XG59KTtcblN3aXBlci51c2UoW1Jlc2l6ZSwgT2JzZXJ2ZXJdKTtcbmV4cG9ydCBkZWZhdWx0IFN3aXBlcjsiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGluaXQ6IHRydWUsXG4gIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxuICB0b3VjaEV2ZW50c1RhcmdldDogJ3dyYXBwZXInLFxuICBpbml0aWFsU2xpZGU6IDAsXG4gIHNwZWVkOiAzMDAsXG4gIGNzc01vZGU6IGZhbHNlLFxuICB1cGRhdGVPbldpbmRvd1Jlc2l6ZTogdHJ1ZSxcbiAgcmVzaXplT2JzZXJ2ZXI6IHRydWUsXG4gIG5lc3RlZDogZmFsc2UsXG4gIGNyZWF0ZUVsZW1lbnRzOiBmYWxzZSxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgZm9jdXNhYmxlRWxlbWVudHM6ICdpbnB1dCwgc2VsZWN0LCBvcHRpb24sIHRleHRhcmVhLCBidXR0b24sIHZpZGVvLCBsYWJlbCcsXG4gIC8vIE92ZXJyaWRlc1xuICB3aWR0aDogbnVsbCxcbiAgaGVpZ2h0OiBudWxsLFxuICAvL1xuICBwcmV2ZW50SW50ZXJhY3Rpb25PblRyYW5zaXRpb246IGZhbHNlLFxuICAvLyBzc3JcbiAgdXNlckFnZW50OiBudWxsLFxuICB1cmw6IG51bGwsXG4gIC8vIFRvIHN1cHBvcnQgaU9TJ3Mgc3dpcGUtdG8tZ28tYmFjayBnZXN0dXJlICh3aGVuIGJlaW5nIHVzZWQgaW4tYXBwKS5cbiAgZWRnZVN3aXBlRGV0ZWN0aW9uOiBmYWxzZSxcbiAgZWRnZVN3aXBlVGhyZXNob2xkOiAyMCxcbiAgLy8gQXV0b2hlaWdodFxuICBhdXRvSGVpZ2h0OiBmYWxzZSxcbiAgLy8gU2V0IHdyYXBwZXIgd2lkdGhcbiAgc2V0V3JhcHBlclNpemU6IGZhbHNlLFxuICAvLyBWaXJ0dWFsIFRyYW5zbGF0ZVxuICB2aXJ0dWFsVHJhbnNsYXRlOiBmYWxzZSxcbiAgLy8gRWZmZWN0c1xuICBlZmZlY3Q6ICdzbGlkZScsXG4gIC8vICdzbGlkZScgb3IgJ2ZhZGUnIG9yICdjdWJlJyBvciAnY292ZXJmbG93JyBvciAnZmxpcCdcbiAgLy8gQnJlYWtwb2ludHNcbiAgYnJlYWtwb2ludHM6IHVuZGVmaW5lZCxcbiAgYnJlYWtwb2ludHNCYXNlOiAnd2luZG93JyxcbiAgLy8gU2xpZGVzIGdyaWRcbiAgc3BhY2VCZXR3ZWVuOiAwLFxuICBzbGlkZXNQZXJWaWV3OiAxLFxuICBzbGlkZXNQZXJHcm91cDogMSxcbiAgc2xpZGVzUGVyR3JvdXBTa2lwOiAwLFxuICBzbGlkZXNQZXJHcm91cEF1dG86IGZhbHNlLFxuICBjZW50ZXJlZFNsaWRlczogZmFsc2UsXG4gIGNlbnRlcmVkU2xpZGVzQm91bmRzOiBmYWxzZSxcbiAgc2xpZGVzT2Zmc2V0QmVmb3JlOiAwLFxuICAvLyBpbiBweFxuICBzbGlkZXNPZmZzZXRBZnRlcjogMCxcbiAgLy8gaW4gcHhcbiAgbm9ybWFsaXplU2xpZGVJbmRleDogdHJ1ZSxcbiAgY2VudGVySW5zdWZmaWNpZW50U2xpZGVzOiBmYWxzZSxcbiAgLy8gRGlzYWJsZSBzd2lwZXIgYW5kIGhpZGUgbmF2aWdhdGlvbiB3aGVuIGNvbnRhaW5lciBub3Qgb3ZlcmZsb3dcbiAgd2F0Y2hPdmVyZmxvdzogdHJ1ZSxcbiAgLy8gUm91bmQgbGVuZ3RoXG4gIHJvdW5kTGVuZ3RoczogZmFsc2UsXG4gIC8vIFRvdWNoZXNcbiAgdG91Y2hSYXRpbzogMSxcbiAgdG91Y2hBbmdsZTogNDUsXG4gIHNpbXVsYXRlVG91Y2g6IHRydWUsXG4gIHNob3J0U3dpcGVzOiB0cnVlLFxuICBsb25nU3dpcGVzOiB0cnVlLFxuICBsb25nU3dpcGVzUmF0aW86IDAuNSxcbiAgbG9uZ1N3aXBlc01zOiAzMDAsXG4gIGZvbGxvd0ZpbmdlcjogdHJ1ZSxcbiAgYWxsb3dUb3VjaE1vdmU6IHRydWUsXG4gIHRocmVzaG9sZDogMCxcbiAgdG91Y2hNb3ZlU3RvcFByb3BhZ2F0aW9uOiBmYWxzZSxcbiAgdG91Y2hTdGFydFByZXZlbnREZWZhdWx0OiB0cnVlLFxuICB0b3VjaFN0YXJ0Rm9yY2VQcmV2ZW50RGVmYXVsdDogZmFsc2UsXG4gIHRvdWNoUmVsZWFzZU9uRWRnZXM6IGZhbHNlLFxuICAvLyBVbmlxdWUgTmF2aWdhdGlvbiBFbGVtZW50c1xuICB1bmlxdWVOYXZFbGVtZW50czogdHJ1ZSxcbiAgLy8gUmVzaXN0YW5jZVxuICByZXNpc3RhbmNlOiB0cnVlLFxuICByZXNpc3RhbmNlUmF0aW86IDAuODUsXG4gIC8vIFByb2dyZXNzXG4gIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IGZhbHNlLFxuICAvLyBDdXJzb3JcbiAgZ3JhYkN1cnNvcjogZmFsc2UsXG4gIC8vIENsaWNrc1xuICBwcmV2ZW50Q2xpY2tzOiB0cnVlLFxuICBwcmV2ZW50Q2xpY2tzUHJvcGFnYXRpb246IHRydWUsXG4gIHNsaWRlVG9DbGlja2VkU2xpZGU6IGZhbHNlLFxuICAvLyBJbWFnZXNcbiAgcHJlbG9hZEltYWdlczogdHJ1ZSxcbiAgdXBkYXRlT25JbWFnZXNSZWFkeTogdHJ1ZSxcbiAgLy8gbG9vcFxuICBsb29wOiBmYWxzZSxcbiAgbG9vcEFkZGl0aW9uYWxTbGlkZXM6IDAsXG4gIGxvb3BlZFNsaWRlczogbnVsbCxcbiAgbG9vcEZpbGxHcm91cFdpdGhCbGFuazogZmFsc2UsXG4gIGxvb3BQcmV2ZW50c1NsaWRlOiB0cnVlLFxuICAvLyBTd2lwaW5nL25vIHN3aXBpbmdcbiAgYWxsb3dTbGlkZVByZXY6IHRydWUsXG4gIGFsbG93U2xpZGVOZXh0OiB0cnVlLFxuICBzd2lwZUhhbmRsZXI6IG51bGwsXG4gIC8vICcuc3dpcGUtaGFuZGxlcicsXG4gIG5vU3dpcGluZzogdHJ1ZSxcbiAgbm9Td2lwaW5nQ2xhc3M6ICdzd2lwZXItbm8tc3dpcGluZycsXG4gIG5vU3dpcGluZ1NlbGVjdG9yOiBudWxsLFxuICAvLyBQYXNzaXZlIExpc3RlbmVyc1xuICBwYXNzaXZlTGlzdGVuZXJzOiB0cnVlLFxuICAvLyBOU1xuICBjb250YWluZXJNb2RpZmllckNsYXNzOiAnc3dpcGVyLScsXG4gIC8vIE5FV1xuICBzbGlkZUNsYXNzOiAnc3dpcGVyLXNsaWRlJyxcbiAgc2xpZGVCbGFua0NsYXNzOiAnc3dpcGVyLXNsaWRlLWludmlzaWJsZS1ibGFuaycsXG4gIHNsaWRlQWN0aXZlQ2xhc3M6ICdzd2lwZXItc2xpZGUtYWN0aXZlJyxcbiAgc2xpZGVEdXBsaWNhdGVBY3RpdmVDbGFzczogJ3N3aXBlci1zbGlkZS1kdXBsaWNhdGUtYWN0aXZlJyxcbiAgc2xpZGVWaXNpYmxlQ2xhc3M6ICdzd2lwZXItc2xpZGUtdmlzaWJsZScsXG4gIHNsaWRlRHVwbGljYXRlQ2xhc3M6ICdzd2lwZXItc2xpZGUtZHVwbGljYXRlJyxcbiAgc2xpZGVOZXh0Q2xhc3M6ICdzd2lwZXItc2xpZGUtbmV4dCcsXG4gIHNsaWRlRHVwbGljYXRlTmV4dENsYXNzOiAnc3dpcGVyLXNsaWRlLWR1cGxpY2F0ZS1uZXh0JyxcbiAgc2xpZGVQcmV2Q2xhc3M6ICdzd2lwZXItc2xpZGUtcHJldicsXG4gIHNsaWRlRHVwbGljYXRlUHJldkNsYXNzOiAnc3dpcGVyLXNsaWRlLWR1cGxpY2F0ZS1wcmV2JyxcbiAgd3JhcHBlckNsYXNzOiAnc3dpcGVyLXdyYXBwZXInLFxuICAvLyBDYWxsYmFja3NcbiAgcnVuQ2FsbGJhY2tzT25Jbml0OiB0cnVlLFxuICAvLyBJbnRlcm5hbHNcbiAgX2VtaXRDbGFzc2VzOiBmYWxzZVxufTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICBvbihldmVudHMsIGhhbmRsZXIsIHByaW9yaXR5KSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgaWYgKHR5cGVvZiBoYW5kbGVyICE9PSAnZnVuY3Rpb24nKSByZXR1cm4gc2VsZjtcbiAgICBjb25zdCBtZXRob2QgPSBwcmlvcml0eSA/ICd1bnNoaWZ0JyA6ICdwdXNoJztcbiAgICBldmVudHMuc3BsaXQoJyAnKS5mb3JFYWNoKGV2ZW50ID0+IHtcbiAgICAgIGlmICghc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdKSBzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF0gPSBbXTtcbiAgICAgIHNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XVttZXRob2RdKGhhbmRsZXIpO1xuICAgIH0pO1xuICAgIHJldHVybiBzZWxmO1xuICB9LFxuXG4gIG9uY2UoZXZlbnRzLCBoYW5kbGVyLCBwcmlvcml0eSkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGlmICh0eXBlb2YgaGFuZGxlciAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHNlbGY7XG5cbiAgICBmdW5jdGlvbiBvbmNlSGFuZGxlciguLi5hcmdzKSB7XG4gICAgICBzZWxmLm9mZihldmVudHMsIG9uY2VIYW5kbGVyKTtcblxuICAgICAgaWYgKG9uY2VIYW5kbGVyLl9fZW1pdHRlclByb3h5KSB7XG4gICAgICAgIGRlbGV0ZSBvbmNlSGFuZGxlci5fX2VtaXR0ZXJQcm94eTtcbiAgICAgIH1cblxuICAgICAgaGFuZGxlci5hcHBseShzZWxmLCBhcmdzKTtcbiAgICB9XG5cbiAgICBvbmNlSGFuZGxlci5fX2VtaXR0ZXJQcm94eSA9IGhhbmRsZXI7XG4gICAgcmV0dXJuIHNlbGYub24oZXZlbnRzLCBvbmNlSGFuZGxlciwgcHJpb3JpdHkpO1xuICB9LFxuXG4gIG9uQW55KGhhbmRsZXIsIHByaW9yaXR5KSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgaWYgKHR5cGVvZiBoYW5kbGVyICE9PSAnZnVuY3Rpb24nKSByZXR1cm4gc2VsZjtcbiAgICBjb25zdCBtZXRob2QgPSBwcmlvcml0eSA/ICd1bnNoaWZ0JyA6ICdwdXNoJztcblxuICAgIGlmIChzZWxmLmV2ZW50c0FueUxpc3RlbmVycy5pbmRleE9mKGhhbmRsZXIpIDwgMCkge1xuICAgICAgc2VsZi5ldmVudHNBbnlMaXN0ZW5lcnNbbWV0aG9kXShoYW5kbGVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZjtcbiAgfSxcblxuICBvZmZBbnkoaGFuZGxlcikge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGlmICghc2VsZi5ldmVudHNBbnlMaXN0ZW5lcnMpIHJldHVybiBzZWxmO1xuICAgIGNvbnN0IGluZGV4ID0gc2VsZi5ldmVudHNBbnlMaXN0ZW5lcnMuaW5kZXhPZihoYW5kbGVyKTtcblxuICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICBzZWxmLmV2ZW50c0FueUxpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cblxuICAgIHJldHVybiBzZWxmO1xuICB9LFxuXG4gIG9mZihldmVudHMsIGhhbmRsZXIpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBpZiAoIXNlbGYuZXZlbnRzTGlzdGVuZXJzKSByZXR1cm4gc2VsZjtcbiAgICBldmVudHMuc3BsaXQoJyAnKS5mb3JFYWNoKGV2ZW50ID0+IHtcbiAgICAgIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdID0gW107XG4gICAgICB9IGVsc2UgaWYgKHNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XSkge1xuICAgICAgICBzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF0uZm9yRWFjaCgoZXZlbnRIYW5kbGVyLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGlmIChldmVudEhhbmRsZXIgPT09IGhhbmRsZXIgfHwgZXZlbnRIYW5kbGVyLl9fZW1pdHRlclByb3h5ICYmIGV2ZW50SGFuZGxlci5fX2VtaXR0ZXJQcm94eSA9PT0gaGFuZGxlcikge1xuICAgICAgICAgICAgc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc2VsZjtcbiAgfSxcblxuICBlbWl0KC4uLmFyZ3MpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBpZiAoIXNlbGYuZXZlbnRzTGlzdGVuZXJzKSByZXR1cm4gc2VsZjtcbiAgICBsZXQgZXZlbnRzO1xuICAgIGxldCBkYXRhO1xuICAgIGxldCBjb250ZXh0O1xuXG4gICAgaWYgKHR5cGVvZiBhcmdzWzBdID09PSAnc3RyaW5nJyB8fCBBcnJheS5pc0FycmF5KGFyZ3NbMF0pKSB7XG4gICAgICBldmVudHMgPSBhcmdzWzBdO1xuICAgICAgZGF0YSA9IGFyZ3Muc2xpY2UoMSwgYXJncy5sZW5ndGgpO1xuICAgICAgY29udGV4dCA9IHNlbGY7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV2ZW50cyA9IGFyZ3NbMF0uZXZlbnRzO1xuICAgICAgZGF0YSA9IGFyZ3NbMF0uZGF0YTtcbiAgICAgIGNvbnRleHQgPSBhcmdzWzBdLmNvbnRleHQgfHwgc2VsZjtcbiAgICB9XG5cbiAgICBkYXRhLnVuc2hpZnQoY29udGV4dCk7XG4gICAgY29uc3QgZXZlbnRzQXJyYXkgPSBBcnJheS5pc0FycmF5KGV2ZW50cykgPyBldmVudHMgOiBldmVudHMuc3BsaXQoJyAnKTtcbiAgICBldmVudHNBcnJheS5mb3JFYWNoKGV2ZW50ID0+IHtcbiAgICAgIGlmIChzZWxmLmV2ZW50c0FueUxpc3RlbmVycyAmJiBzZWxmLmV2ZW50c0FueUxpc3RlbmVycy5sZW5ndGgpIHtcbiAgICAgICAgc2VsZi5ldmVudHNBbnlMaXN0ZW5lcnMuZm9yRWFjaChldmVudEhhbmRsZXIgPT4ge1xuICAgICAgICAgIGV2ZW50SGFuZGxlci5hcHBseShjb250ZXh0LCBbZXZlbnQsIC4uLmRhdGFdKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzZWxmLmV2ZW50c0xpc3RlbmVycyAmJiBzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF0pIHtcbiAgICAgICAgc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdLmZvckVhY2goZXZlbnRIYW5kbGVyID0+IHtcbiAgICAgICAgICBldmVudEhhbmRsZXIuYXBwbHkoY29udGV4dCwgZGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBzZWxmO1xuICB9XG5cbn07IiwiaW1wb3J0IHsgZ2V0RG9jdW1lbnQgfSBmcm9tICdzc3Itd2luZG93JztcbmltcG9ydCBvblRvdWNoU3RhcnQgZnJvbSAnLi9vblRvdWNoU3RhcnQuanMnO1xuaW1wb3J0IG9uVG91Y2hNb3ZlIGZyb20gJy4vb25Ub3VjaE1vdmUuanMnO1xuaW1wb3J0IG9uVG91Y2hFbmQgZnJvbSAnLi9vblRvdWNoRW5kLmpzJztcbmltcG9ydCBvblJlc2l6ZSBmcm9tICcuL29uUmVzaXplLmpzJztcbmltcG9ydCBvbkNsaWNrIGZyb20gJy4vb25DbGljay5qcyc7XG5pbXBvcnQgb25TY3JvbGwgZnJvbSAnLi9vblNjcm9sbC5qcyc7XG5sZXQgZHVtbXlFdmVudEF0dGFjaGVkID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGR1bW15RXZlbnRMaXN0ZW5lcigpIHt9XG5cbmNvbnN0IGV2ZW50cyA9IChzd2lwZXIsIG1ldGhvZCkgPT4ge1xuICBjb25zdCBkb2N1bWVudCA9IGdldERvY3VtZW50KCk7XG4gIGNvbnN0IHtcbiAgICBwYXJhbXMsXG4gICAgdG91Y2hFdmVudHMsXG4gICAgZWwsXG4gICAgd3JhcHBlckVsLFxuICAgIGRldmljZSxcbiAgICBzdXBwb3J0XG4gIH0gPSBzd2lwZXI7XG4gIGNvbnN0IGNhcHR1cmUgPSAhIXBhcmFtcy5uZXN0ZWQ7XG4gIGNvbnN0IGRvbU1ldGhvZCA9IG1ldGhvZCA9PT0gJ29uJyA/ICdhZGRFdmVudExpc3RlbmVyJyA6ICdyZW1vdmVFdmVudExpc3RlbmVyJztcbiAgY29uc3Qgc3dpcGVyTWV0aG9kID0gbWV0aG9kOyAvLyBUb3VjaCBFdmVudHNcblxuICBpZiAoIXN1cHBvcnQudG91Y2gpIHtcbiAgICBlbFtkb21NZXRob2RdKHRvdWNoRXZlbnRzLnN0YXJ0LCBzd2lwZXIub25Ub3VjaFN0YXJ0LCBmYWxzZSk7XG4gICAgZG9jdW1lbnRbZG9tTWV0aG9kXSh0b3VjaEV2ZW50cy5tb3ZlLCBzd2lwZXIub25Ub3VjaE1vdmUsIGNhcHR1cmUpO1xuICAgIGRvY3VtZW50W2RvbU1ldGhvZF0odG91Y2hFdmVudHMuZW5kLCBzd2lwZXIub25Ub3VjaEVuZCwgZmFsc2UpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHBhc3NpdmVMaXN0ZW5lciA9IHRvdWNoRXZlbnRzLnN0YXJ0ID09PSAndG91Y2hzdGFydCcgJiYgc3VwcG9ydC5wYXNzaXZlTGlzdGVuZXIgJiYgcGFyYW1zLnBhc3NpdmVMaXN0ZW5lcnMgPyB7XG4gICAgICBwYXNzaXZlOiB0cnVlLFxuICAgICAgY2FwdHVyZTogZmFsc2VcbiAgICB9IDogZmFsc2U7XG4gICAgZWxbZG9tTWV0aG9kXSh0b3VjaEV2ZW50cy5zdGFydCwgc3dpcGVyLm9uVG91Y2hTdGFydCwgcGFzc2l2ZUxpc3RlbmVyKTtcbiAgICBlbFtkb21NZXRob2RdKHRvdWNoRXZlbnRzLm1vdmUsIHN3aXBlci5vblRvdWNoTW92ZSwgc3VwcG9ydC5wYXNzaXZlTGlzdGVuZXIgPyB7XG4gICAgICBwYXNzaXZlOiBmYWxzZSxcbiAgICAgIGNhcHR1cmVcbiAgICB9IDogY2FwdHVyZSk7XG4gICAgZWxbZG9tTWV0aG9kXSh0b3VjaEV2ZW50cy5lbmQsIHN3aXBlci5vblRvdWNoRW5kLCBwYXNzaXZlTGlzdGVuZXIpO1xuXG4gICAgaWYgKHRvdWNoRXZlbnRzLmNhbmNlbCkge1xuICAgICAgZWxbZG9tTWV0aG9kXSh0b3VjaEV2ZW50cy5jYW5jZWwsIHN3aXBlci5vblRvdWNoRW5kLCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgIH1cbiAgfSAvLyBQcmV2ZW50IExpbmtzIENsaWNrc1xuXG5cbiAgaWYgKHBhcmFtcy5wcmV2ZW50Q2xpY2tzIHx8IHBhcmFtcy5wcmV2ZW50Q2xpY2tzUHJvcGFnYXRpb24pIHtcbiAgICBlbFtkb21NZXRob2RdKCdjbGljaycsIHN3aXBlci5vbkNsaWNrLCB0cnVlKTtcbiAgfVxuXG4gIGlmIChwYXJhbXMuY3NzTW9kZSkge1xuICAgIHdyYXBwZXJFbFtkb21NZXRob2RdKCdzY3JvbGwnLCBzd2lwZXIub25TY3JvbGwpO1xuICB9IC8vIFJlc2l6ZSBoYW5kbGVyXG5cblxuICBpZiAocGFyYW1zLnVwZGF0ZU9uV2luZG93UmVzaXplKSB7XG4gICAgc3dpcGVyW3N3aXBlck1ldGhvZF0oZGV2aWNlLmlvcyB8fCBkZXZpY2UuYW5kcm9pZCA/ICdyZXNpemUgb3JpZW50YXRpb25jaGFuZ2Ugb2JzZXJ2ZXJVcGRhdGUnIDogJ3Jlc2l6ZSBvYnNlcnZlclVwZGF0ZScsIG9uUmVzaXplLCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzd2lwZXJbc3dpcGVyTWV0aG9kXSgnb2JzZXJ2ZXJVcGRhdGUnLCBvblJlc2l6ZSwgdHJ1ZSk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGF0dGFjaEV2ZW50cygpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3QgZG9jdW1lbnQgPSBnZXREb2N1bWVudCgpO1xuICBjb25zdCB7XG4gICAgcGFyYW1zLFxuICAgIHN1cHBvcnRcbiAgfSA9IHN3aXBlcjtcbiAgc3dpcGVyLm9uVG91Y2hTdGFydCA9IG9uVG91Y2hTdGFydC5iaW5kKHN3aXBlcik7XG4gIHN3aXBlci5vblRvdWNoTW92ZSA9IG9uVG91Y2hNb3ZlLmJpbmQoc3dpcGVyKTtcbiAgc3dpcGVyLm9uVG91Y2hFbmQgPSBvblRvdWNoRW5kLmJpbmQoc3dpcGVyKTtcblxuICBpZiAocGFyYW1zLmNzc01vZGUpIHtcbiAgICBzd2lwZXIub25TY3JvbGwgPSBvblNjcm9sbC5iaW5kKHN3aXBlcik7XG4gIH1cblxuICBzd2lwZXIub25DbGljayA9IG9uQ2xpY2suYmluZChzd2lwZXIpO1xuXG4gIGlmIChzdXBwb3J0LnRvdWNoICYmICFkdW1teUV2ZW50QXR0YWNoZWQpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZHVtbXlFdmVudExpc3RlbmVyKTtcbiAgICBkdW1teUV2ZW50QXR0YWNoZWQgPSB0cnVlO1xuICB9XG5cbiAgZXZlbnRzKHN3aXBlciwgJ29uJyk7XG59XG5cbmZ1bmN0aW9uIGRldGFjaEV2ZW50cygpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgZXZlbnRzKHN3aXBlciwgJ29mZicpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGF0dGFjaEV2ZW50cyxcbiAgZGV0YWNoRXZlbnRzXG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBpZiAoIXN3aXBlci5lbmFibGVkKSByZXR1cm47XG5cbiAgaWYgKCFzd2lwZXIuYWxsb3dDbGljaykge1xuICAgIGlmIChzd2lwZXIucGFyYW1zLnByZXZlbnRDbGlja3MpIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmIChzd2lwZXIucGFyYW1zLnByZXZlbnRDbGlja3NQcm9wYWdhdGlvbiAmJiBzd2lwZXIuYW5pbWF0aW5nKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvblJlc2l6ZSgpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3Qge1xuICAgIHBhcmFtcyxcbiAgICBlbFxuICB9ID0gc3dpcGVyO1xuICBpZiAoZWwgJiYgZWwub2Zmc2V0V2lkdGggPT09IDApIHJldHVybjsgLy8gQnJlYWtwb2ludHNcblxuICBpZiAocGFyYW1zLmJyZWFrcG9pbnRzKSB7XG4gICAgc3dpcGVyLnNldEJyZWFrcG9pbnQoKTtcbiAgfSAvLyBTYXZlIGxvY2tzXG5cblxuICBjb25zdCB7XG4gICAgYWxsb3dTbGlkZU5leHQsXG4gICAgYWxsb3dTbGlkZVByZXYsXG4gICAgc25hcEdyaWRcbiAgfSA9IHN3aXBlcjsgLy8gRGlzYWJsZSBsb2NrcyBvbiByZXNpemVcblxuICBzd2lwZXIuYWxsb3dTbGlkZU5leHQgPSB0cnVlO1xuICBzd2lwZXIuYWxsb3dTbGlkZVByZXYgPSB0cnVlO1xuICBzd2lwZXIudXBkYXRlU2l6ZSgpO1xuICBzd2lwZXIudXBkYXRlU2xpZGVzKCk7XG4gIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG5cbiAgaWYgKChwYXJhbXMuc2xpZGVzUGVyVmlldyA9PT0gJ2F1dG8nIHx8IHBhcmFtcy5zbGlkZXNQZXJWaWV3ID4gMSkgJiYgc3dpcGVyLmlzRW5kICYmICFzd2lwZXIuaXNCZWdpbm5pbmcgJiYgIXN3aXBlci5wYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuc2xpZGVzLmxlbmd0aCAtIDEsIDAsIGZhbHNlLCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuYWN0aXZlSW5kZXgsIDAsIGZhbHNlLCB0cnVlKTtcbiAgfVxuXG4gIGlmIChzd2lwZXIuYXV0b3BsYXkgJiYgc3dpcGVyLmF1dG9wbGF5LnJ1bm5pbmcgJiYgc3dpcGVyLmF1dG9wbGF5LnBhdXNlZCkge1xuICAgIHN3aXBlci5hdXRvcGxheS5ydW4oKTtcbiAgfSAvLyBSZXR1cm4gbG9ja3MgYWZ0ZXIgcmVzaXplXG5cblxuICBzd2lwZXIuYWxsb3dTbGlkZVByZXYgPSBhbGxvd1NsaWRlUHJldjtcbiAgc3dpcGVyLmFsbG93U2xpZGVOZXh0ID0gYWxsb3dTbGlkZU5leHQ7XG5cbiAgaWYgKHN3aXBlci5wYXJhbXMud2F0Y2hPdmVyZmxvdyAmJiBzbmFwR3JpZCAhPT0gc3dpcGVyLnNuYXBHcmlkKSB7XG4gICAgc3dpcGVyLmNoZWNrT3ZlcmZsb3coKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9uU2Nyb2xsKCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCB7XG4gICAgd3JhcHBlckVsLFxuICAgIHJ0bFRyYW5zbGF0ZSxcbiAgICBlbmFibGVkXG4gIH0gPSBzd2lwZXI7XG4gIGlmICghZW5hYmxlZCkgcmV0dXJuO1xuICBzd2lwZXIucHJldmlvdXNUcmFuc2xhdGUgPSBzd2lwZXIudHJhbnNsYXRlO1xuXG4gIGlmIChzd2lwZXIuaXNIb3Jpem9udGFsKCkpIHtcbiAgICBzd2lwZXIudHJhbnNsYXRlID0gLXdyYXBwZXJFbC5zY3JvbGxMZWZ0O1xuICB9IGVsc2Uge1xuICAgIHN3aXBlci50cmFuc2xhdGUgPSAtd3JhcHBlckVsLnNjcm9sbFRvcDtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcblxuXG4gIGlmIChzd2lwZXIudHJhbnNsYXRlID09PSAtMCkgc3dpcGVyLnRyYW5zbGF0ZSA9IDA7XG4gIHN3aXBlci51cGRhdGVBY3RpdmVJbmRleCgpO1xuICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuICBsZXQgbmV3UHJvZ3Jlc3M7XG4gIGNvbnN0IHRyYW5zbGF0ZXNEaWZmID0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpIC0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpO1xuXG4gIGlmICh0cmFuc2xhdGVzRGlmZiA9PT0gMCkge1xuICAgIG5ld1Byb2dyZXNzID0gMDtcbiAgfSBlbHNlIHtcbiAgICBuZXdQcm9ncmVzcyA9IChzd2lwZXIudHJhbnNsYXRlIC0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpKSAvIHRyYW5zbGF0ZXNEaWZmO1xuICB9XG5cbiAgaWYgKG5ld1Byb2dyZXNzICE9PSBzd2lwZXIucHJvZ3Jlc3MpIHtcbiAgICBzd2lwZXIudXBkYXRlUHJvZ3Jlc3MocnRsVHJhbnNsYXRlID8gLXN3aXBlci50cmFuc2xhdGUgOiBzd2lwZXIudHJhbnNsYXRlKTtcbiAgfVxuXG4gIHN3aXBlci5lbWl0KCdzZXRUcmFuc2xhdGUnLCBzd2lwZXIudHJhbnNsYXRlLCBmYWxzZSk7XG59IiwiaW1wb3J0IHsgbm93LCBuZXh0VGljayB9IGZyb20gJy4uLy4uL3NoYXJlZC91dGlscy5qcyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvblRvdWNoRW5kKGV2ZW50KSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IGRhdGEgPSBzd2lwZXIudG91Y2hFdmVudHNEYXRhO1xuICBjb25zdCB7XG4gICAgcGFyYW1zLFxuICAgIHRvdWNoZXMsXG4gICAgcnRsVHJhbnNsYXRlOiBydGwsXG4gICAgc2xpZGVzR3JpZCxcbiAgICBlbmFibGVkXG4gIH0gPSBzd2lwZXI7XG4gIGlmICghZW5hYmxlZCkgcmV0dXJuO1xuICBsZXQgZSA9IGV2ZW50O1xuICBpZiAoZS5vcmlnaW5hbEV2ZW50KSBlID0gZS5vcmlnaW5hbEV2ZW50O1xuXG4gIGlmIChkYXRhLmFsbG93VG91Y2hDYWxsYmFja3MpIHtcbiAgICBzd2lwZXIuZW1pdCgndG91Y2hFbmQnLCBlKTtcbiAgfVxuXG4gIGRhdGEuYWxsb3dUb3VjaENhbGxiYWNrcyA9IGZhbHNlO1xuXG4gIGlmICghZGF0YS5pc1RvdWNoZWQpIHtcbiAgICBpZiAoZGF0YS5pc01vdmVkICYmIHBhcmFtcy5ncmFiQ3Vyc29yKSB7XG4gICAgICBzd2lwZXIuc2V0R3JhYkN1cnNvcihmYWxzZSk7XG4gICAgfVxuXG4gICAgZGF0YS5pc01vdmVkID0gZmFsc2U7XG4gICAgZGF0YS5zdGFydE1vdmluZyA9IGZhbHNlO1xuICAgIHJldHVybjtcbiAgfSAvLyBSZXR1cm4gR3JhYiBDdXJzb3JcblxuXG4gIGlmIChwYXJhbXMuZ3JhYkN1cnNvciAmJiBkYXRhLmlzTW92ZWQgJiYgZGF0YS5pc1RvdWNoZWQgJiYgKHN3aXBlci5hbGxvd1NsaWRlTmV4dCA9PT0gdHJ1ZSB8fCBzd2lwZXIuYWxsb3dTbGlkZVByZXYgPT09IHRydWUpKSB7XG4gICAgc3dpcGVyLnNldEdyYWJDdXJzb3IoZmFsc2UpO1xuICB9IC8vIFRpbWUgZGlmZlxuXG5cbiAgY29uc3QgdG91Y2hFbmRUaW1lID0gbm93KCk7XG4gIGNvbnN0IHRpbWVEaWZmID0gdG91Y2hFbmRUaW1lIC0gZGF0YS50b3VjaFN0YXJ0VGltZTsgLy8gVGFwLCBkb3VibGVUYXAsIENsaWNrXG5cbiAgaWYgKHN3aXBlci5hbGxvd0NsaWNrKSB7XG4gICAgc3dpcGVyLnVwZGF0ZUNsaWNrZWRTbGlkZShlKTtcbiAgICBzd2lwZXIuZW1pdCgndGFwIGNsaWNrJywgZSk7XG5cbiAgICBpZiAodGltZURpZmYgPCAzMDAgJiYgdG91Y2hFbmRUaW1lIC0gZGF0YS5sYXN0Q2xpY2tUaW1lIDwgMzAwKSB7XG4gICAgICBzd2lwZXIuZW1pdCgnZG91YmxlVGFwIGRvdWJsZUNsaWNrJywgZSk7XG4gICAgfVxuICB9XG5cbiAgZGF0YS5sYXN0Q2xpY2tUaW1lID0gbm93KCk7XG4gIG5leHRUaWNrKCgpID0+IHtcbiAgICBpZiAoIXN3aXBlci5kZXN0cm95ZWQpIHN3aXBlci5hbGxvd0NsaWNrID0gdHJ1ZTtcbiAgfSk7XG5cbiAgaWYgKCFkYXRhLmlzVG91Y2hlZCB8fCAhZGF0YS5pc01vdmVkIHx8ICFzd2lwZXIuc3dpcGVEaXJlY3Rpb24gfHwgdG91Y2hlcy5kaWZmID09PSAwIHx8IGRhdGEuY3VycmVudFRyYW5zbGF0ZSA9PT0gZGF0YS5zdGFydFRyYW5zbGF0ZSkge1xuICAgIGRhdGEuaXNUb3VjaGVkID0gZmFsc2U7XG4gICAgZGF0YS5pc01vdmVkID0gZmFsc2U7XG4gICAgZGF0YS5zdGFydE1vdmluZyA9IGZhbHNlO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGRhdGEuaXNUb3VjaGVkID0gZmFsc2U7XG4gIGRhdGEuaXNNb3ZlZCA9IGZhbHNlO1xuICBkYXRhLnN0YXJ0TW92aW5nID0gZmFsc2U7XG4gIGxldCBjdXJyZW50UG9zO1xuXG4gIGlmIChwYXJhbXMuZm9sbG93RmluZ2VyKSB7XG4gICAgY3VycmVudFBvcyA9IHJ0bCA/IHN3aXBlci50cmFuc2xhdGUgOiAtc3dpcGVyLnRyYW5zbGF0ZTtcbiAgfSBlbHNlIHtcbiAgICBjdXJyZW50UG9zID0gLWRhdGEuY3VycmVudFRyYW5zbGF0ZTtcbiAgfVxuXG4gIGlmIChwYXJhbXMuY3NzTW9kZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChzd2lwZXIucGFyYW1zLmZyZWVNb2RlICYmIHBhcmFtcy5mcmVlTW9kZS5lbmFibGVkKSB7XG4gICAgc3dpcGVyLmZyZWVNb2RlLm9uVG91Y2hFbmQoe1xuICAgICAgY3VycmVudFBvc1xuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfSAvLyBGaW5kIGN1cnJlbnQgc2xpZGVcblxuXG4gIGxldCBzdG9wSW5kZXggPSAwO1xuICBsZXQgZ3JvdXBTaXplID0gc3dpcGVyLnNsaWRlc1NpemVzR3JpZFswXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNsaWRlc0dyaWQubGVuZ3RoOyBpICs9IGkgPCBwYXJhbXMuc2xpZGVzUGVyR3JvdXBTa2lwID8gMSA6IHBhcmFtcy5zbGlkZXNQZXJHcm91cCkge1xuICAgIGNvbnN0IGluY3JlbWVudCA9IGkgPCBwYXJhbXMuc2xpZGVzUGVyR3JvdXBTa2lwIC0gMSA/IDEgOiBwYXJhbXMuc2xpZGVzUGVyR3JvdXA7XG5cbiAgICBpZiAodHlwZW9mIHNsaWRlc0dyaWRbaSArIGluY3JlbWVudF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBpZiAoY3VycmVudFBvcyA+PSBzbGlkZXNHcmlkW2ldICYmIGN1cnJlbnRQb3MgPCBzbGlkZXNHcmlkW2kgKyBpbmNyZW1lbnRdKSB7XG4gICAgICAgIHN0b3BJbmRleCA9IGk7XG4gICAgICAgIGdyb3VwU2l6ZSA9IHNsaWRlc0dyaWRbaSArIGluY3JlbWVudF0gLSBzbGlkZXNHcmlkW2ldO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY3VycmVudFBvcyA+PSBzbGlkZXNHcmlkW2ldKSB7XG4gICAgICBzdG9wSW5kZXggPSBpO1xuICAgICAgZ3JvdXBTaXplID0gc2xpZGVzR3JpZFtzbGlkZXNHcmlkLmxlbmd0aCAtIDFdIC0gc2xpZGVzR3JpZFtzbGlkZXNHcmlkLmxlbmd0aCAtIDJdO1xuICAgIH1cbiAgfSAvLyBGaW5kIGN1cnJlbnQgc2xpZGUgc2l6ZVxuXG5cbiAgY29uc3QgcmF0aW8gPSAoY3VycmVudFBvcyAtIHNsaWRlc0dyaWRbc3RvcEluZGV4XSkgLyBncm91cFNpemU7XG4gIGNvbnN0IGluY3JlbWVudCA9IHN0b3BJbmRleCA8IHBhcmFtcy5zbGlkZXNQZXJHcm91cFNraXAgLSAxID8gMSA6IHBhcmFtcy5zbGlkZXNQZXJHcm91cDtcblxuICBpZiAodGltZURpZmYgPiBwYXJhbXMubG9uZ1N3aXBlc01zKSB7XG4gICAgLy8gTG9uZyB0b3VjaGVzXG4gICAgaWYgKCFwYXJhbXMubG9uZ1N3aXBlcykge1xuICAgICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLmFjdGl2ZUluZGV4KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoc3dpcGVyLnN3aXBlRGlyZWN0aW9uID09PSAnbmV4dCcpIHtcbiAgICAgIGlmIChyYXRpbyA+PSBwYXJhbXMubG9uZ1N3aXBlc1JhdGlvKSBzd2lwZXIuc2xpZGVUbyhzdG9wSW5kZXggKyBpbmNyZW1lbnQpO2Vsc2Ugc3dpcGVyLnNsaWRlVG8oc3RvcEluZGV4KTtcbiAgICB9XG5cbiAgICBpZiAoc3dpcGVyLnN3aXBlRGlyZWN0aW9uID09PSAncHJldicpIHtcbiAgICAgIGlmIChyYXRpbyA+IDEgLSBwYXJhbXMubG9uZ1N3aXBlc1JhdGlvKSBzd2lwZXIuc2xpZGVUbyhzdG9wSW5kZXggKyBpbmNyZW1lbnQpO2Vsc2Ugc3dpcGVyLnNsaWRlVG8oc3RvcEluZGV4KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gU2hvcnQgc3dpcGVzXG4gICAgaWYgKCFwYXJhbXMuc2hvcnRTd2lwZXMpIHtcbiAgICAgIHN3aXBlci5zbGlkZVRvKHN3aXBlci5hY3RpdmVJbmRleCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaXNOYXZCdXR0b25UYXJnZXQgPSBzd2lwZXIubmF2aWdhdGlvbiAmJiAoZS50YXJnZXQgPT09IHN3aXBlci5uYXZpZ2F0aW9uLm5leHRFbCB8fCBlLnRhcmdldCA9PT0gc3dpcGVyLm5hdmlnYXRpb24ucHJldkVsKTtcblxuICAgIGlmICghaXNOYXZCdXR0b25UYXJnZXQpIHtcbiAgICAgIGlmIChzd2lwZXIuc3dpcGVEaXJlY3Rpb24gPT09ICduZXh0Jykge1xuICAgICAgICBzd2lwZXIuc2xpZGVUbyhzdG9wSW5kZXggKyBpbmNyZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3dpcGVyLnN3aXBlRGlyZWN0aW9uID09PSAncHJldicpIHtcbiAgICAgICAgc3dpcGVyLnNsaWRlVG8oc3RvcEluZGV4KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0ID09PSBzd2lwZXIubmF2aWdhdGlvbi5uZXh0RWwpIHtcbiAgICAgIHN3aXBlci5zbGlkZVRvKHN0b3BJbmRleCArIGluY3JlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXBlci5zbGlkZVRvKHN0b3BJbmRleCk7XG4gICAgfVxuICB9XG59IiwiaW1wb3J0IHsgZ2V0RG9jdW1lbnQgfSBmcm9tICdzc3Itd2luZG93JztcbmltcG9ydCAkIGZyb20gJy4uLy4uL3NoYXJlZC9kb20uanMnO1xuaW1wb3J0IHsgbm93IH0gZnJvbSAnLi4vLi4vc2hhcmVkL3V0aWxzLmpzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9uVG91Y2hNb3ZlKGV2ZW50KSB7XG4gIGNvbnN0IGRvY3VtZW50ID0gZ2V0RG9jdW1lbnQoKTtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3QgZGF0YSA9IHN3aXBlci50b3VjaEV2ZW50c0RhdGE7XG4gIGNvbnN0IHtcbiAgICBwYXJhbXMsXG4gICAgdG91Y2hlcyxcbiAgICBydGxUcmFuc2xhdGU6IHJ0bCxcbiAgICBlbmFibGVkXG4gIH0gPSBzd2lwZXI7XG4gIGlmICghZW5hYmxlZCkgcmV0dXJuO1xuICBsZXQgZSA9IGV2ZW50O1xuICBpZiAoZS5vcmlnaW5hbEV2ZW50KSBlID0gZS5vcmlnaW5hbEV2ZW50O1xuXG4gIGlmICghZGF0YS5pc1RvdWNoZWQpIHtcbiAgICBpZiAoZGF0YS5zdGFydE1vdmluZyAmJiBkYXRhLmlzU2Nyb2xsaW5nKSB7XG4gICAgICBzd2lwZXIuZW1pdCgndG91Y2hNb3ZlT3Bwb3NpdGUnLCBlKTtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoZGF0YS5pc1RvdWNoRXZlbnQgJiYgZS50eXBlICE9PSAndG91Y2htb3ZlJykgcmV0dXJuO1xuICBjb25zdCB0YXJnZXRUb3VjaCA9IGUudHlwZSA9PT0gJ3RvdWNobW92ZScgJiYgZS50YXJnZXRUb3VjaGVzICYmIChlLnRhcmdldFRvdWNoZXNbMF0gfHwgZS5jaGFuZ2VkVG91Y2hlc1swXSk7XG4gIGNvbnN0IHBhZ2VYID0gZS50eXBlID09PSAndG91Y2htb3ZlJyA/IHRhcmdldFRvdWNoLnBhZ2VYIDogZS5wYWdlWDtcbiAgY29uc3QgcGFnZVkgPSBlLnR5cGUgPT09ICd0b3VjaG1vdmUnID8gdGFyZ2V0VG91Y2gucGFnZVkgOiBlLnBhZ2VZO1xuXG4gIGlmIChlLnByZXZlbnRlZEJ5TmVzdGVkU3dpcGVyKSB7XG4gICAgdG91Y2hlcy5zdGFydFggPSBwYWdlWDtcbiAgICB0b3VjaGVzLnN0YXJ0WSA9IHBhZ2VZO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghc3dpcGVyLmFsbG93VG91Y2hNb3ZlKSB7XG4gICAgLy8gaXNNb3ZlZCA9IHRydWU7XG4gICAgc3dpcGVyLmFsbG93Q2xpY2sgPSBmYWxzZTtcblxuICAgIGlmIChkYXRhLmlzVG91Y2hlZCkge1xuICAgICAgT2JqZWN0LmFzc2lnbih0b3VjaGVzLCB7XG4gICAgICAgIHN0YXJ0WDogcGFnZVgsXG4gICAgICAgIHN0YXJ0WTogcGFnZVksXG4gICAgICAgIGN1cnJlbnRYOiBwYWdlWCxcbiAgICAgICAgY3VycmVudFk6IHBhZ2VZXG4gICAgICB9KTtcbiAgICAgIGRhdGEudG91Y2hTdGFydFRpbWUgPSBub3coKTtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoZGF0YS5pc1RvdWNoRXZlbnQgJiYgcGFyYW1zLnRvdWNoUmVsZWFzZU9uRWRnZXMgJiYgIXBhcmFtcy5sb29wKSB7XG4gICAgaWYgKHN3aXBlci5pc1ZlcnRpY2FsKCkpIHtcbiAgICAgIC8vIFZlcnRpY2FsXG4gICAgICBpZiAocGFnZVkgPCB0b3VjaGVzLnN0YXJ0WSAmJiBzd2lwZXIudHJhbnNsYXRlIDw9IHN3aXBlci5tYXhUcmFuc2xhdGUoKSB8fCBwYWdlWSA+IHRvdWNoZXMuc3RhcnRZICYmIHN3aXBlci50cmFuc2xhdGUgPj0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpKSB7XG4gICAgICAgIGRhdGEuaXNUb3VjaGVkID0gZmFsc2U7XG4gICAgICAgIGRhdGEuaXNNb3ZlZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChwYWdlWCA8IHRvdWNoZXMuc3RhcnRYICYmIHN3aXBlci50cmFuc2xhdGUgPD0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpIHx8IHBhZ2VYID4gdG91Y2hlcy5zdGFydFggJiYgc3dpcGVyLnRyYW5zbGF0ZSA+PSBzd2lwZXIubWluVHJhbnNsYXRlKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBpZiAoZGF0YS5pc1RvdWNoRXZlbnQgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xuICAgIGlmIChlLnRhcmdldCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiAkKGUudGFyZ2V0KS5pcyhkYXRhLmZvY3VzYWJsZUVsZW1lbnRzKSkge1xuICAgICAgZGF0YS5pc01vdmVkID0gdHJ1ZTtcbiAgICAgIHN3aXBlci5hbGxvd0NsaWNrID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgaWYgKGRhdGEuYWxsb3dUb3VjaENhbGxiYWNrcykge1xuICAgIHN3aXBlci5lbWl0KCd0b3VjaE1vdmUnLCBlKTtcbiAgfVxuXG4gIGlmIChlLnRhcmdldFRvdWNoZXMgJiYgZS50YXJnZXRUb3VjaGVzLmxlbmd0aCA+IDEpIHJldHVybjtcbiAgdG91Y2hlcy5jdXJyZW50WCA9IHBhZ2VYO1xuICB0b3VjaGVzLmN1cnJlbnRZID0gcGFnZVk7XG4gIGNvbnN0IGRpZmZYID0gdG91Y2hlcy5jdXJyZW50WCAtIHRvdWNoZXMuc3RhcnRYO1xuICBjb25zdCBkaWZmWSA9IHRvdWNoZXMuY3VycmVudFkgLSB0b3VjaGVzLnN0YXJ0WTtcbiAgaWYgKHN3aXBlci5wYXJhbXMudGhyZXNob2xkICYmIE1hdGguc3FydChkaWZmWCAqKiAyICsgZGlmZlkgKiogMikgPCBzd2lwZXIucGFyYW1zLnRocmVzaG9sZCkgcmV0dXJuO1xuXG4gIGlmICh0eXBlb2YgZGF0YS5pc1Njcm9sbGluZyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgdG91Y2hBbmdsZTtcblxuICAgIGlmIChzd2lwZXIuaXNIb3Jpem9udGFsKCkgJiYgdG91Y2hlcy5jdXJyZW50WSA9PT0gdG91Y2hlcy5zdGFydFkgfHwgc3dpcGVyLmlzVmVydGljYWwoKSAmJiB0b3VjaGVzLmN1cnJlbnRYID09PSB0b3VjaGVzLnN0YXJ0WCkge1xuICAgICAgZGF0YS5pc1Njcm9sbGluZyA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgIGlmIChkaWZmWCAqIGRpZmZYICsgZGlmZlkgKiBkaWZmWSA+PSAyNSkge1xuICAgICAgICB0b3VjaEFuZ2xlID0gTWF0aC5hdGFuMihNYXRoLmFicyhkaWZmWSksIE1hdGguYWJzKGRpZmZYKSkgKiAxODAgLyBNYXRoLlBJO1xuICAgICAgICBkYXRhLmlzU2Nyb2xsaW5nID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gdG91Y2hBbmdsZSA+IHBhcmFtcy50b3VjaEFuZ2xlIDogOTAgLSB0b3VjaEFuZ2xlID4gcGFyYW1zLnRvdWNoQW5nbGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGRhdGEuaXNTY3JvbGxpbmcpIHtcbiAgICBzd2lwZXIuZW1pdCgndG91Y2hNb3ZlT3Bwb3NpdGUnLCBlKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZGF0YS5zdGFydE1vdmluZyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAodG91Y2hlcy5jdXJyZW50WCAhPT0gdG91Y2hlcy5zdGFydFggfHwgdG91Y2hlcy5jdXJyZW50WSAhPT0gdG91Y2hlcy5zdGFydFkpIHtcbiAgICAgIGRhdGEuc3RhcnRNb3ZpbmcgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChkYXRhLmlzU2Nyb2xsaW5nKSB7XG4gICAgZGF0YS5pc1RvdWNoZWQgPSBmYWxzZTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoIWRhdGEuc3RhcnRNb3ZpbmcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBzd2lwZXIuYWxsb3dDbGljayA9IGZhbHNlO1xuXG4gIGlmICghcGFyYW1zLmNzc01vZGUgJiYgZS5jYW5jZWxhYmxlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgaWYgKHBhcmFtcy50b3VjaE1vdmVTdG9wUHJvcGFnYXRpb24gJiYgIXBhcmFtcy5uZXN0ZWQpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgaWYgKCFkYXRhLmlzTW92ZWQpIHtcbiAgICBpZiAocGFyYW1zLmxvb3AgJiYgIXBhcmFtcy5jc3NNb2RlKSB7XG4gICAgICBzd2lwZXIubG9vcEZpeCgpO1xuICAgIH1cblxuICAgIGRhdGEuc3RhcnRUcmFuc2xhdGUgPSBzd2lwZXIuZ2V0VHJhbnNsYXRlKCk7XG4gICAgc3dpcGVyLnNldFRyYW5zaXRpb24oMCk7XG5cbiAgICBpZiAoc3dpcGVyLmFuaW1hdGluZykge1xuICAgICAgc3dpcGVyLiR3cmFwcGVyRWwudHJpZ2dlcignd2Via2l0VHJhbnNpdGlvbkVuZCB0cmFuc2l0aW9uZW5kJyk7XG4gICAgfVxuXG4gICAgZGF0YS5hbGxvd01vbWVudHVtQm91bmNlID0gZmFsc2U7IC8vIEdyYWIgQ3Vyc29yXG5cbiAgICBpZiAocGFyYW1zLmdyYWJDdXJzb3IgJiYgKHN3aXBlci5hbGxvd1NsaWRlTmV4dCA9PT0gdHJ1ZSB8fCBzd2lwZXIuYWxsb3dTbGlkZVByZXYgPT09IHRydWUpKSB7XG4gICAgICBzd2lwZXIuc2V0R3JhYkN1cnNvcih0cnVlKTtcbiAgICB9XG5cbiAgICBzd2lwZXIuZW1pdCgnc2xpZGVyRmlyc3RNb3ZlJywgZSk7XG4gIH1cblxuICBzd2lwZXIuZW1pdCgnc2xpZGVyTW92ZScsIGUpO1xuICBkYXRhLmlzTW92ZWQgPSB0cnVlO1xuICBsZXQgZGlmZiA9IHN3aXBlci5pc0hvcml6b250YWwoKSA/IGRpZmZYIDogZGlmZlk7XG4gIHRvdWNoZXMuZGlmZiA9IGRpZmY7XG4gIGRpZmYgKj0gcGFyYW1zLnRvdWNoUmF0aW87XG4gIGlmIChydGwpIGRpZmYgPSAtZGlmZjtcbiAgc3dpcGVyLnN3aXBlRGlyZWN0aW9uID0gZGlmZiA+IDAgPyAncHJldicgOiAnbmV4dCc7XG4gIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA9IGRpZmYgKyBkYXRhLnN0YXJ0VHJhbnNsYXRlO1xuICBsZXQgZGlzYWJsZVBhcmVudFN3aXBlciA9IHRydWU7XG4gIGxldCByZXNpc3RhbmNlUmF0aW8gPSBwYXJhbXMucmVzaXN0YW5jZVJhdGlvO1xuXG4gIGlmIChwYXJhbXMudG91Y2hSZWxlYXNlT25FZGdlcykge1xuICAgIHJlc2lzdGFuY2VSYXRpbyA9IDA7XG4gIH1cblxuICBpZiAoZGlmZiA+IDAgJiYgZGF0YS5jdXJyZW50VHJhbnNsYXRlID4gc3dpcGVyLm1pblRyYW5zbGF0ZSgpKSB7XG4gICAgZGlzYWJsZVBhcmVudFN3aXBlciA9IGZhbHNlO1xuICAgIGlmIChwYXJhbXMucmVzaXN0YW5jZSkgZGF0YS5jdXJyZW50VHJhbnNsYXRlID0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpIC0gMSArICgtc3dpcGVyLm1pblRyYW5zbGF0ZSgpICsgZGF0YS5zdGFydFRyYW5zbGF0ZSArIGRpZmYpICoqIHJlc2lzdGFuY2VSYXRpbztcbiAgfSBlbHNlIGlmIChkaWZmIDwgMCAmJiBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPCBzd2lwZXIubWF4VHJhbnNsYXRlKCkpIHtcbiAgICBkaXNhYmxlUGFyZW50U3dpcGVyID0gZmFsc2U7XG4gICAgaWYgKHBhcmFtcy5yZXNpc3RhbmNlKSBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPSBzd2lwZXIubWF4VHJhbnNsYXRlKCkgKyAxIC0gKHN3aXBlci5tYXhUcmFuc2xhdGUoKSAtIGRhdGEuc3RhcnRUcmFuc2xhdGUgLSBkaWZmKSAqKiByZXNpc3RhbmNlUmF0aW87XG4gIH1cblxuICBpZiAoZGlzYWJsZVBhcmVudFN3aXBlcikge1xuICAgIGUucHJldmVudGVkQnlOZXN0ZWRTd2lwZXIgPSB0cnVlO1xuICB9IC8vIERpcmVjdGlvbnMgbG9ja3NcblxuXG4gIGlmICghc3dpcGVyLmFsbG93U2xpZGVOZXh0ICYmIHN3aXBlci5zd2lwZURpcmVjdGlvbiA9PT0gJ25leHQnICYmIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA8IGRhdGEuc3RhcnRUcmFuc2xhdGUpIHtcbiAgICBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPSBkYXRhLnN0YXJ0VHJhbnNsYXRlO1xuICB9XG5cbiAgaWYgKCFzd2lwZXIuYWxsb3dTbGlkZVByZXYgJiYgc3dpcGVyLnN3aXBlRGlyZWN0aW9uID09PSAncHJldicgJiYgZGF0YS5jdXJyZW50VHJhbnNsYXRlID4gZGF0YS5zdGFydFRyYW5zbGF0ZSkge1xuICAgIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA9IGRhdGEuc3RhcnRUcmFuc2xhdGU7XG4gIH1cblxuICBpZiAoIXN3aXBlci5hbGxvd1NsaWRlUHJldiAmJiAhc3dpcGVyLmFsbG93U2xpZGVOZXh0KSB7XG4gICAgZGF0YS5jdXJyZW50VHJhbnNsYXRlID0gZGF0YS5zdGFydFRyYW5zbGF0ZTtcbiAgfSAvLyBUaHJlc2hvbGRcblxuXG4gIGlmIChwYXJhbXMudGhyZXNob2xkID4gMCkge1xuICAgIGlmIChNYXRoLmFicyhkaWZmKSA+IHBhcmFtcy50aHJlc2hvbGQgfHwgZGF0YS5hbGxvd1RocmVzaG9sZE1vdmUpIHtcbiAgICAgIGlmICghZGF0YS5hbGxvd1RocmVzaG9sZE1vdmUpIHtcbiAgICAgICAgZGF0YS5hbGxvd1RocmVzaG9sZE1vdmUgPSB0cnVlO1xuICAgICAgICB0b3VjaGVzLnN0YXJ0WCA9IHRvdWNoZXMuY3VycmVudFg7XG4gICAgICAgIHRvdWNoZXMuc3RhcnRZID0gdG91Y2hlcy5jdXJyZW50WTtcbiAgICAgICAgZGF0YS5jdXJyZW50VHJhbnNsYXRlID0gZGF0YS5zdGFydFRyYW5zbGF0ZTtcbiAgICAgICAgdG91Y2hlcy5kaWZmID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gdG91Y2hlcy5jdXJyZW50WCAtIHRvdWNoZXMuc3RhcnRYIDogdG91Y2hlcy5jdXJyZW50WSAtIHRvdWNoZXMuc3RhcnRZO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA9IGRhdGEuc3RhcnRUcmFuc2xhdGU7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgaWYgKCFwYXJhbXMuZm9sbG93RmluZ2VyIHx8IHBhcmFtcy5jc3NNb2RlKSByZXR1cm47IC8vIFVwZGF0ZSBhY3RpdmUgaW5kZXggaW4gZnJlZSBtb2RlXG5cbiAgaWYgKHBhcmFtcy5mcmVlTW9kZSAmJiBwYXJhbXMuZnJlZU1vZGUuZW5hYmxlZCAmJiBzd2lwZXIuZnJlZU1vZGUgfHwgcGFyYW1zLndhdGNoU2xpZGVzUHJvZ3Jlc3MpIHtcbiAgICBzd2lwZXIudXBkYXRlQWN0aXZlSW5kZXgoKTtcbiAgICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuICB9XG5cbiAgaWYgKHN3aXBlci5wYXJhbXMuZnJlZU1vZGUgJiYgcGFyYW1zLmZyZWVNb2RlLmVuYWJsZWQgJiYgc3dpcGVyLmZyZWVNb2RlKSB7XG4gICAgc3dpcGVyLmZyZWVNb2RlLm9uVG91Y2hNb3ZlKCk7XG4gIH0gLy8gVXBkYXRlIHByb2dyZXNzXG5cblxuICBzd2lwZXIudXBkYXRlUHJvZ3Jlc3MoZGF0YS5jdXJyZW50VHJhbnNsYXRlKTsgLy8gVXBkYXRlIHRyYW5zbGF0ZVxuXG4gIHN3aXBlci5zZXRUcmFuc2xhdGUoZGF0YS5jdXJyZW50VHJhbnNsYXRlKTtcbn0iLCJpbXBvcnQgeyBnZXRXaW5kb3csIGdldERvY3VtZW50IH0gZnJvbSAnc3NyLXdpbmRvdyc7XG5pbXBvcnQgJCBmcm9tICcuLi8uLi9zaGFyZWQvZG9tLmpzJztcbmltcG9ydCB7IG5vdyB9IGZyb20gJy4uLy4uL3NoYXJlZC91dGlscy5qcyc7IC8vIE1vZGlmaWVkIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNTQ1MjA1NTQvY3VzdG9tLWVsZW1lbnQtZ2V0cm9vdG5vZGUtY2xvc2VzdC1mdW5jdGlvbi1jcm9zc2luZy1tdWx0aXBsZS1wYXJlbnQtc2hhZG93ZFxuXG5mdW5jdGlvbiBjbG9zZXN0RWxlbWVudChzZWxlY3RvciwgYmFzZSA9IHRoaXMpIHtcbiAgZnVuY3Rpb24gX19jbG9zZXN0RnJvbShlbCkge1xuICAgIGlmICghZWwgfHwgZWwgPT09IGdldERvY3VtZW50KCkgfHwgZWwgPT09IGdldFdpbmRvdygpKSByZXR1cm4gbnVsbDtcbiAgICBpZiAoZWwuYXNzaWduZWRTbG90KSBlbCA9IGVsLmFzc2lnbmVkU2xvdDtcbiAgICBjb25zdCBmb3VuZCA9IGVsLmNsb3Nlc3Qoc2VsZWN0b3IpO1xuICAgIHJldHVybiBmb3VuZCB8fCBfX2Nsb3Nlc3RGcm9tKGVsLmdldFJvb3ROb2RlKCkuaG9zdCk7XG4gIH1cblxuICByZXR1cm4gX19jbG9zZXN0RnJvbShiYXNlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb25Ub3VjaFN0YXJ0KGV2ZW50KSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IGRvY3VtZW50ID0gZ2V0RG9jdW1lbnQoKTtcbiAgY29uc3Qgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gIGNvbnN0IGRhdGEgPSBzd2lwZXIudG91Y2hFdmVudHNEYXRhO1xuICBjb25zdCB7XG4gICAgcGFyYW1zLFxuICAgIHRvdWNoZXMsXG4gICAgZW5hYmxlZFxuICB9ID0gc3dpcGVyO1xuICBpZiAoIWVuYWJsZWQpIHJldHVybjtcblxuICBpZiAoc3dpcGVyLmFuaW1hdGluZyAmJiBwYXJhbXMucHJldmVudEludGVyYWN0aW9uT25UcmFuc2l0aW9uKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCFzd2lwZXIuYW5pbWF0aW5nICYmIHBhcmFtcy5jc3NNb2RlICYmIHBhcmFtcy5sb29wKSB7XG4gICAgc3dpcGVyLmxvb3BGaXgoKTtcbiAgfVxuXG4gIGxldCBlID0gZXZlbnQ7XG4gIGlmIChlLm9yaWdpbmFsRXZlbnQpIGUgPSBlLm9yaWdpbmFsRXZlbnQ7XG4gIGxldCAkdGFyZ2V0RWwgPSAkKGUudGFyZ2V0KTtcblxuICBpZiAocGFyYW1zLnRvdWNoRXZlbnRzVGFyZ2V0ID09PSAnd3JhcHBlcicpIHtcbiAgICBpZiAoISR0YXJnZXRFbC5jbG9zZXN0KHN3aXBlci53cmFwcGVyRWwpLmxlbmd0aCkgcmV0dXJuO1xuICB9XG5cbiAgZGF0YS5pc1RvdWNoRXZlbnQgPSBlLnR5cGUgPT09ICd0b3VjaHN0YXJ0JztcbiAgaWYgKCFkYXRhLmlzVG91Y2hFdmVudCAmJiAnd2hpY2gnIGluIGUgJiYgZS53aGljaCA9PT0gMykgcmV0dXJuO1xuICBpZiAoIWRhdGEuaXNUb3VjaEV2ZW50ICYmICdidXR0b24nIGluIGUgJiYgZS5idXR0b24gPiAwKSByZXR1cm47XG4gIGlmIChkYXRhLmlzVG91Y2hlZCAmJiBkYXRhLmlzTW92ZWQpIHJldHVybjsgLy8gY2hhbmdlIHRhcmdldCBlbCBmb3Igc2hhZG93IHJvb3QgY29tcG9uZW50XG5cbiAgY29uc3Qgc3dpcGluZ0NsYXNzSGFzVmFsdWUgPSAhIXBhcmFtcy5ub1N3aXBpbmdDbGFzcyAmJiBwYXJhbXMubm9Td2lwaW5nQ2xhc3MgIT09ICcnO1xuXG4gIGlmIChzd2lwaW5nQ2xhc3NIYXNWYWx1ZSAmJiBlLnRhcmdldCAmJiBlLnRhcmdldC5zaGFkb3dSb290ICYmIGV2ZW50LnBhdGggJiYgZXZlbnQucGF0aFswXSkge1xuICAgICR0YXJnZXRFbCA9ICQoZXZlbnQucGF0aFswXSk7XG4gIH1cblxuICBjb25zdCBub1N3aXBpbmdTZWxlY3RvciA9IHBhcmFtcy5ub1N3aXBpbmdTZWxlY3RvciA/IHBhcmFtcy5ub1N3aXBpbmdTZWxlY3RvciA6IGAuJHtwYXJhbXMubm9Td2lwaW5nQ2xhc3N9YDtcbiAgY29uc3QgaXNUYXJnZXRTaGFkb3cgPSAhIShlLnRhcmdldCAmJiBlLnRhcmdldC5zaGFkb3dSb290KTsgLy8gdXNlIGNsb3Nlc3RFbGVtZW50IGZvciBzaGFkb3cgcm9vdCBlbGVtZW50IHRvIGdldCB0aGUgYWN0dWFsIGNsb3Nlc3QgZm9yIG5lc3RlZCBzaGFkb3cgcm9vdCBlbGVtZW50XG5cbiAgaWYgKHBhcmFtcy5ub1N3aXBpbmcgJiYgKGlzVGFyZ2V0U2hhZG93ID8gY2xvc2VzdEVsZW1lbnQobm9Td2lwaW5nU2VsZWN0b3IsIGUudGFyZ2V0KSA6ICR0YXJnZXRFbC5jbG9zZXN0KG5vU3dpcGluZ1NlbGVjdG9yKVswXSkpIHtcbiAgICBzd2lwZXIuYWxsb3dDbGljayA9IHRydWU7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5zd2lwZUhhbmRsZXIpIHtcbiAgICBpZiAoISR0YXJnZXRFbC5jbG9zZXN0KHBhcmFtcy5zd2lwZUhhbmRsZXIpWzBdKSByZXR1cm47XG4gIH1cblxuICB0b3VjaGVzLmN1cnJlbnRYID0gZS50eXBlID09PSAndG91Y2hzdGFydCcgPyBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVggOiBlLnBhZ2VYO1xuICB0b3VjaGVzLmN1cnJlbnRZID0gZS50eXBlID09PSAndG91Y2hzdGFydCcgPyBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVkgOiBlLnBhZ2VZO1xuICBjb25zdCBzdGFydFggPSB0b3VjaGVzLmN1cnJlbnRYO1xuICBjb25zdCBzdGFydFkgPSB0b3VjaGVzLmN1cnJlbnRZOyAvLyBEbyBOT1Qgc3RhcnQgaWYgaU9TIGVkZ2Ugc3dpcGUgaXMgZGV0ZWN0ZWQuIE90aGVyd2lzZSBpT1MgYXBwIGNhbm5vdCBzd2lwZS10by1nby1iYWNrIGFueW1vcmVcblxuICBjb25zdCBlZGdlU3dpcGVEZXRlY3Rpb24gPSBwYXJhbXMuZWRnZVN3aXBlRGV0ZWN0aW9uIHx8IHBhcmFtcy5pT1NFZGdlU3dpcGVEZXRlY3Rpb247XG4gIGNvbnN0IGVkZ2VTd2lwZVRocmVzaG9sZCA9IHBhcmFtcy5lZGdlU3dpcGVUaHJlc2hvbGQgfHwgcGFyYW1zLmlPU0VkZ2VTd2lwZVRocmVzaG9sZDtcblxuICBpZiAoZWRnZVN3aXBlRGV0ZWN0aW9uICYmIChzdGFydFggPD0gZWRnZVN3aXBlVGhyZXNob2xkIHx8IHN0YXJ0WCA+PSB3aW5kb3cuaW5uZXJXaWR0aCAtIGVkZ2VTd2lwZVRocmVzaG9sZCkpIHtcbiAgICBpZiAoZWRnZVN3aXBlRGV0ZWN0aW9uID09PSAncHJldmVudCcpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBPYmplY3QuYXNzaWduKGRhdGEsIHtcbiAgICBpc1RvdWNoZWQ6IHRydWUsXG4gICAgaXNNb3ZlZDogZmFsc2UsXG4gICAgYWxsb3dUb3VjaENhbGxiYWNrczogdHJ1ZSxcbiAgICBpc1Njcm9sbGluZzogdW5kZWZpbmVkLFxuICAgIHN0YXJ0TW92aW5nOiB1bmRlZmluZWRcbiAgfSk7XG4gIHRvdWNoZXMuc3RhcnRYID0gc3RhcnRYO1xuICB0b3VjaGVzLnN0YXJ0WSA9IHN0YXJ0WTtcbiAgZGF0YS50b3VjaFN0YXJ0VGltZSA9IG5vdygpO1xuICBzd2lwZXIuYWxsb3dDbGljayA9IHRydWU7XG4gIHN3aXBlci51cGRhdGVTaXplKCk7XG4gIHN3aXBlci5zd2lwZURpcmVjdGlvbiA9IHVuZGVmaW5lZDtcbiAgaWYgKHBhcmFtcy50aHJlc2hvbGQgPiAwKSBkYXRhLmFsbG93VGhyZXNob2xkTW92ZSA9IGZhbHNlO1xuXG4gIGlmIChlLnR5cGUgIT09ICd0b3VjaHN0YXJ0Jykge1xuICAgIGxldCBwcmV2ZW50RGVmYXVsdCA9IHRydWU7XG4gICAgaWYgKCR0YXJnZXRFbC5pcyhkYXRhLmZvY3VzYWJsZUVsZW1lbnRzKSkgcHJldmVudERlZmF1bHQgPSBmYWxzZTtcblxuICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmICQoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkuaXMoZGF0YS5mb2N1c2FibGVFbGVtZW50cykgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPT0gJHRhcmdldEVsWzBdKSB7XG4gICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgICB9XG5cbiAgICBjb25zdCBzaG91bGRQcmV2ZW50RGVmYXVsdCA9IHByZXZlbnREZWZhdWx0ICYmIHN3aXBlci5hbGxvd1RvdWNoTW92ZSAmJiBwYXJhbXMudG91Y2hTdGFydFByZXZlbnREZWZhdWx0O1xuXG4gICAgaWYgKChwYXJhbXMudG91Y2hTdGFydEZvcmNlUHJldmVudERlZmF1bHQgfHwgc2hvdWxkUHJldmVudERlZmF1bHQpICYmICEkdGFyZ2V0RWxbMF0uaXNDb250ZW50RWRpdGFibGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICBzd2lwZXIuZW1pdCgndG91Y2hTdGFydCcsIGUpO1xufSIsImltcG9ydCBzZXRHcmFiQ3Vyc29yIGZyb20gJy4vc2V0R3JhYkN1cnNvci5qcyc7XG5pbXBvcnQgdW5zZXRHcmFiQ3Vyc29yIGZyb20gJy4vdW5zZXRHcmFiQ3Vyc29yLmpzJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgc2V0R3JhYkN1cnNvcixcbiAgdW5zZXRHcmFiQ3Vyc29yXG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldEdyYWJDdXJzb3IobW92aW5nKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGlmIChzd2lwZXIuc3VwcG9ydC50b3VjaCB8fCAhc3dpcGVyLnBhcmFtcy5zaW11bGF0ZVRvdWNoIHx8IHN3aXBlci5wYXJhbXMud2F0Y2hPdmVyZmxvdyAmJiBzd2lwZXIuaXNMb2NrZWQgfHwgc3dpcGVyLnBhcmFtcy5jc3NNb2RlKSByZXR1cm47XG4gIGNvbnN0IGVsID0gc3dpcGVyLnBhcmFtcy50b3VjaEV2ZW50c1RhcmdldCA9PT0gJ2NvbnRhaW5lcicgPyBzd2lwZXIuZWwgOiBzd2lwZXIud3JhcHBlckVsO1xuICBlbC5zdHlsZS5jdXJzb3IgPSAnbW92ZSc7XG4gIGVsLnN0eWxlLmN1cnNvciA9IG1vdmluZyA/ICctd2Via2l0LWdyYWJiaW5nJyA6ICctd2Via2l0LWdyYWInO1xuICBlbC5zdHlsZS5jdXJzb3IgPSBtb3ZpbmcgPyAnLW1vei1ncmFiYmluJyA6ICctbW96LWdyYWInO1xuICBlbC5zdHlsZS5jdXJzb3IgPSBtb3ZpbmcgPyAnZ3JhYmJpbmcnIDogJ2dyYWInO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVuc2V0R3JhYkN1cnNvcigpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcblxuICBpZiAoc3dpcGVyLnN1cHBvcnQudG91Y2ggfHwgc3dpcGVyLnBhcmFtcy53YXRjaE92ZXJmbG93ICYmIHN3aXBlci5pc0xvY2tlZCB8fCBzd2lwZXIucGFyYW1zLmNzc01vZGUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBzd2lwZXJbc3dpcGVyLnBhcmFtcy50b3VjaEV2ZW50c1RhcmdldCA9PT0gJ2NvbnRhaW5lcicgPyAnZWwnIDogJ3dyYXBwZXJFbCddLnN0eWxlLmN1cnNvciA9ICcnO1xufSIsImltcG9ydCBsb2FkSW1hZ2UgZnJvbSAnLi9sb2FkSW1hZ2UuanMnO1xuaW1wb3J0IHByZWxvYWRJbWFnZXMgZnJvbSAnLi9wcmVsb2FkSW1hZ2VzLmpzJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgbG9hZEltYWdlLFxuICBwcmVsb2FkSW1hZ2VzXG59OyIsImltcG9ydCB7IGdldFdpbmRvdyB9IGZyb20gJ3Nzci13aW5kb3cnO1xuaW1wb3J0ICQgZnJvbSAnLi4vLi4vc2hhcmVkL2RvbS5qcyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkSW1hZ2UoaW1hZ2VFbCwgc3JjLCBzcmNzZXQsIHNpemVzLCBjaGVja0ZvckNvbXBsZXRlLCBjYWxsYmFjaykge1xuICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgbGV0IGltYWdlO1xuXG4gIGZ1bmN0aW9uIG9uUmVhZHkoKSB7XG4gICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjaygpO1xuICB9XG5cbiAgY29uc3QgaXNQaWN0dXJlID0gJChpbWFnZUVsKS5wYXJlbnQoJ3BpY3R1cmUnKVswXTtcblxuICBpZiAoIWlzUGljdHVyZSAmJiAoIWltYWdlRWwuY29tcGxldGUgfHwgIWNoZWNrRm9yQ29tcGxldGUpKSB7XG4gICAgaWYgKHNyYykge1xuICAgICAgaW1hZ2UgPSBuZXcgd2luZG93LkltYWdlKCk7XG4gICAgICBpbWFnZS5vbmxvYWQgPSBvblJlYWR5O1xuICAgICAgaW1hZ2Uub25lcnJvciA9IG9uUmVhZHk7XG5cbiAgICAgIGlmIChzaXplcykge1xuICAgICAgICBpbWFnZS5zaXplcyA9IHNpemVzO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3Jjc2V0KSB7XG4gICAgICAgIGltYWdlLnNyY3NldCA9IHNyY3NldDtcbiAgICAgIH1cblxuICAgICAgaWYgKHNyYykge1xuICAgICAgICBpbWFnZS5zcmMgPSBzcmM7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG9uUmVhZHkoKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gaW1hZ2UgYWxyZWFkeSBsb2FkZWQuLi5cbiAgICBvblJlYWR5KCk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmVsb2FkSW1hZ2VzKCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBzd2lwZXIuaW1hZ2VzVG9Mb2FkID0gc3dpcGVyLiRlbC5maW5kKCdpbWcnKTtcblxuICBmdW5jdGlvbiBvblJlYWR5KCkge1xuICAgIGlmICh0eXBlb2Ygc3dpcGVyID09PSAndW5kZWZpbmVkJyB8fCBzd2lwZXIgPT09IG51bGwgfHwgIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkKSByZXR1cm47XG4gICAgaWYgKHN3aXBlci5pbWFnZXNMb2FkZWQgIT09IHVuZGVmaW5lZCkgc3dpcGVyLmltYWdlc0xvYWRlZCArPSAxO1xuXG4gICAgaWYgKHN3aXBlci5pbWFnZXNMb2FkZWQgPT09IHN3aXBlci5pbWFnZXNUb0xvYWQubGVuZ3RoKSB7XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy51cGRhdGVPbkltYWdlc1JlYWR5KSBzd2lwZXIudXBkYXRlKCk7XG4gICAgICBzd2lwZXIuZW1pdCgnaW1hZ2VzUmVhZHknKTtcbiAgICB9XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN3aXBlci5pbWFnZXNUb0xvYWQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBpbWFnZUVsID0gc3dpcGVyLmltYWdlc1RvTG9hZFtpXTtcbiAgICBzd2lwZXIubG9hZEltYWdlKGltYWdlRWwsIGltYWdlRWwuY3VycmVudFNyYyB8fCBpbWFnZUVsLmdldEF0dHJpYnV0ZSgnc3JjJyksIGltYWdlRWwuc3Jjc2V0IHx8IGltYWdlRWwuZ2V0QXR0cmlidXRlKCdzcmNzZXQnKSwgaW1hZ2VFbC5zaXplcyB8fCBpbWFnZUVsLmdldEF0dHJpYnV0ZSgnc2l6ZXMnKSwgdHJ1ZSwgb25SZWFkeSk7XG4gIH1cbn0iLCJpbXBvcnQgbG9vcENyZWF0ZSBmcm9tICcuL2xvb3BDcmVhdGUuanMnO1xuaW1wb3J0IGxvb3BGaXggZnJvbSAnLi9sb29wRml4LmpzJztcbmltcG9ydCBsb29wRGVzdHJveSBmcm9tICcuL2xvb3BEZXN0cm95LmpzJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgbG9vcENyZWF0ZSxcbiAgbG9vcEZpeCxcbiAgbG9vcERlc3Ryb3lcbn07IiwiaW1wb3J0IHsgZ2V0RG9jdW1lbnQgfSBmcm9tICdzc3Itd2luZG93JztcbmltcG9ydCAkIGZyb20gJy4uLy4uL3NoYXJlZC9kb20uanMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9vcENyZWF0ZSgpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3QgZG9jdW1lbnQgPSBnZXREb2N1bWVudCgpO1xuICBjb25zdCB7XG4gICAgcGFyYW1zLFxuICAgICR3cmFwcGVyRWxcbiAgfSA9IHN3aXBlcjsgLy8gUmVtb3ZlIGR1cGxpY2F0ZWQgc2xpZGVzXG5cbiAgJHdyYXBwZXJFbC5jaGlsZHJlbihgLiR7cGFyYW1zLnNsaWRlQ2xhc3N9LiR7cGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3N9YCkucmVtb3ZlKCk7XG4gIGxldCBzbGlkZXMgPSAkd3JhcHBlckVsLmNoaWxkcmVuKGAuJHtwYXJhbXMuc2xpZGVDbGFzc31gKTtcblxuICBpZiAocGFyYW1zLmxvb3BGaWxsR3JvdXBXaXRoQmxhbmspIHtcbiAgICBjb25zdCBibGFua1NsaWRlc051bSA9IHBhcmFtcy5zbGlkZXNQZXJHcm91cCAtIHNsaWRlcy5sZW5ndGggJSBwYXJhbXMuc2xpZGVzUGVyR3JvdXA7XG5cbiAgICBpZiAoYmxhbmtTbGlkZXNOdW0gIT09IHBhcmFtcy5zbGlkZXNQZXJHcm91cCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBibGFua1NsaWRlc051bTsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IGJsYW5rTm9kZSA9ICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpLmFkZENsYXNzKGAke3BhcmFtcy5zbGlkZUNsYXNzfSAke3BhcmFtcy5zbGlkZUJsYW5rQ2xhc3N9YCk7XG4gICAgICAgICR3cmFwcGVyRWwuYXBwZW5kKGJsYW5rTm9kZSk7XG4gICAgICB9XG5cbiAgICAgIHNsaWRlcyA9ICR3cmFwcGVyRWwuY2hpbGRyZW4oYC4ke3BhcmFtcy5zbGlkZUNsYXNzfWApO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwYXJhbXMuc2xpZGVzUGVyVmlldyA9PT0gJ2F1dG8nICYmICFwYXJhbXMubG9vcGVkU2xpZGVzKSBwYXJhbXMubG9vcGVkU2xpZGVzID0gc2xpZGVzLmxlbmd0aDtcbiAgc3dpcGVyLmxvb3BlZFNsaWRlcyA9IE1hdGguY2VpbChwYXJzZUZsb2F0KHBhcmFtcy5sb29wZWRTbGlkZXMgfHwgcGFyYW1zLnNsaWRlc1BlclZpZXcsIDEwKSk7XG4gIHN3aXBlci5sb29wZWRTbGlkZXMgKz0gcGFyYW1zLmxvb3BBZGRpdGlvbmFsU2xpZGVzO1xuXG4gIGlmIChzd2lwZXIubG9vcGVkU2xpZGVzID4gc2xpZGVzLmxlbmd0aCkge1xuICAgIHN3aXBlci5sb29wZWRTbGlkZXMgPSBzbGlkZXMubGVuZ3RoO1xuICB9XG5cbiAgY29uc3QgcHJlcGVuZFNsaWRlcyA9IFtdO1xuICBjb25zdCBhcHBlbmRTbGlkZXMgPSBbXTtcbiAgc2xpZGVzLmVhY2goKGVsLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHNsaWRlID0gJChlbCk7XG5cbiAgICBpZiAoaW5kZXggPCBzd2lwZXIubG9vcGVkU2xpZGVzKSB7XG4gICAgICBhcHBlbmRTbGlkZXMucHVzaChlbCk7XG4gICAgfVxuXG4gICAgaWYgKGluZGV4IDwgc2xpZGVzLmxlbmd0aCAmJiBpbmRleCA+PSBzbGlkZXMubGVuZ3RoIC0gc3dpcGVyLmxvb3BlZFNsaWRlcykge1xuICAgICAgcHJlcGVuZFNsaWRlcy5wdXNoKGVsKTtcbiAgICB9XG5cbiAgICBzbGlkZS5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcsIGluZGV4KTtcbiAgfSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcHBlbmRTbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAkd3JhcHBlckVsLmFwcGVuZCgkKGFwcGVuZFNsaWRlc1tpXS5jbG9uZU5vZGUodHJ1ZSkpLmFkZENsYXNzKHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSk7XG4gIH1cblxuICBmb3IgKGxldCBpID0gcHJlcGVuZFNsaWRlcy5sZW5ndGggLSAxOyBpID49IDA7IGkgLT0gMSkge1xuICAgICR3cmFwcGVyRWwucHJlcGVuZCgkKHByZXBlbmRTbGlkZXNbaV0uY2xvbmVOb2RlKHRydWUpKS5hZGRDbGFzcyhwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcykpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9vcERlc3Ryb3koKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IHtcbiAgICAkd3JhcHBlckVsLFxuICAgIHBhcmFtcyxcbiAgICBzbGlkZXNcbiAgfSA9IHN3aXBlcjtcbiAgJHdyYXBwZXJFbC5jaGlsZHJlbihgLiR7cGFyYW1zLnNsaWRlQ2xhc3N9LiR7cGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3N9LC4ke3BhcmFtcy5zbGlkZUNsYXNzfS4ke3BhcmFtcy5zbGlkZUJsYW5rQ2xhc3N9YCkucmVtb3ZlKCk7XG4gIHNsaWRlcy5yZW1vdmVBdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvb3BGaXgoKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIHN3aXBlci5lbWl0KCdiZWZvcmVMb29wRml4Jyk7XG4gIGNvbnN0IHtcbiAgICBhY3RpdmVJbmRleCxcbiAgICBzbGlkZXMsXG4gICAgbG9vcGVkU2xpZGVzLFxuICAgIGFsbG93U2xpZGVQcmV2LFxuICAgIGFsbG93U2xpZGVOZXh0LFxuICAgIHNuYXBHcmlkLFxuICAgIHJ0bFRyYW5zbGF0ZTogcnRsXG4gIH0gPSBzd2lwZXI7XG4gIGxldCBuZXdJbmRleDtcbiAgc3dpcGVyLmFsbG93U2xpZGVQcmV2ID0gdHJ1ZTtcbiAgc3dpcGVyLmFsbG93U2xpZGVOZXh0ID0gdHJ1ZTtcbiAgY29uc3Qgc25hcFRyYW5zbGF0ZSA9IC1zbmFwR3JpZFthY3RpdmVJbmRleF07XG4gIGNvbnN0IGRpZmYgPSBzbmFwVHJhbnNsYXRlIC0gc3dpcGVyLmdldFRyYW5zbGF0ZSgpOyAvLyBGaXggRm9yIE5lZ2F0aXZlIE92ZXJzbGlkaW5nXG5cbiAgaWYgKGFjdGl2ZUluZGV4IDwgbG9vcGVkU2xpZGVzKSB7XG4gICAgbmV3SW5kZXggPSBzbGlkZXMubGVuZ3RoIC0gbG9vcGVkU2xpZGVzICogMyArIGFjdGl2ZUluZGV4O1xuICAgIG5ld0luZGV4ICs9IGxvb3BlZFNsaWRlcztcbiAgICBjb25zdCBzbGlkZUNoYW5nZWQgPSBzd2lwZXIuc2xpZGVUbyhuZXdJbmRleCwgMCwgZmFsc2UsIHRydWUpO1xuXG4gICAgaWYgKHNsaWRlQ2hhbmdlZCAmJiBkaWZmICE9PSAwKSB7XG4gICAgICBzd2lwZXIuc2V0VHJhbnNsYXRlKChydGwgPyAtc3dpcGVyLnRyYW5zbGF0ZSA6IHN3aXBlci50cmFuc2xhdGUpIC0gZGlmZik7XG4gICAgfVxuICB9IGVsc2UgaWYgKGFjdGl2ZUluZGV4ID49IHNsaWRlcy5sZW5ndGggLSBsb29wZWRTbGlkZXMpIHtcbiAgICAvLyBGaXggRm9yIFBvc2l0aXZlIE92ZXJzbGlkaW5nXG4gICAgbmV3SW5kZXggPSAtc2xpZGVzLmxlbmd0aCArIGFjdGl2ZUluZGV4ICsgbG9vcGVkU2xpZGVzO1xuICAgIG5ld0luZGV4ICs9IGxvb3BlZFNsaWRlcztcbiAgICBjb25zdCBzbGlkZUNoYW5nZWQgPSBzd2lwZXIuc2xpZGVUbyhuZXdJbmRleCwgMCwgZmFsc2UsIHRydWUpO1xuXG4gICAgaWYgKHNsaWRlQ2hhbmdlZCAmJiBkaWZmICE9PSAwKSB7XG4gICAgICBzd2lwZXIuc2V0VHJhbnNsYXRlKChydGwgPyAtc3dpcGVyLnRyYW5zbGF0ZSA6IHN3aXBlci50cmFuc2xhdGUpIC0gZGlmZik7XG4gICAgfVxuICB9XG5cbiAgc3dpcGVyLmFsbG93U2xpZGVQcmV2ID0gYWxsb3dTbGlkZVByZXY7XG4gIHN3aXBlci5hbGxvd1NsaWRlTmV4dCA9IGFsbG93U2xpZGVOZXh0O1xuICBzd2lwZXIuZW1pdCgnbG9vcEZpeCcpO1xufSIsImltcG9ydCB7IGV4dGVuZCB9IGZyb20gJy4uL3NoYXJlZC91dGlscy5qcyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtb2R1bGVFeHRlbmRQYXJhbXMocGFyYW1zLCBhbGxNb2R1bGVzUGFyYW1zKSB7XG4gIHJldHVybiBmdW5jdGlvbiBleHRlbmRQYXJhbXMob2JqID0ge30pIHtcbiAgICBjb25zdCBtb2R1bGVQYXJhbU5hbWUgPSBPYmplY3Qua2V5cyhvYmopWzBdO1xuICAgIGNvbnN0IG1vZHVsZVBhcmFtcyA9IG9ialttb2R1bGVQYXJhbU5hbWVdO1xuXG4gICAgaWYgKHR5cGVvZiBtb2R1bGVQYXJhbXMgIT09ICdvYmplY3QnIHx8IG1vZHVsZVBhcmFtcyA9PT0gbnVsbCkge1xuICAgICAgZXh0ZW5kKGFsbE1vZHVsZXNQYXJhbXMsIG9iaik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKFsnbmF2aWdhdGlvbicsICdwYWdpbmF0aW9uJywgJ3Njcm9sbGJhciddLmluZGV4T2YobW9kdWxlUGFyYW1OYW1lKSA+PSAwICYmIHBhcmFtc1ttb2R1bGVQYXJhbU5hbWVdID09PSB0cnVlKSB7XG4gICAgICBwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXSA9IHtcbiAgICAgICAgYXV0bzogdHJ1ZVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoIShtb2R1bGVQYXJhbU5hbWUgaW4gcGFyYW1zICYmICdlbmFibGVkJyBpbiBtb2R1bGVQYXJhbXMpKSB7XG4gICAgICBleHRlbmQoYWxsTW9kdWxlc1BhcmFtcywgb2JqKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zW21vZHVsZVBhcmFtTmFtZV0gPT09IHRydWUpIHtcbiAgICAgIHBhcmFtc1ttb2R1bGVQYXJhbU5hbWVdID0ge1xuICAgICAgICBlbmFibGVkOiB0cnVlXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcGFyYW1zW21vZHVsZVBhcmFtTmFtZV0gPT09ICdvYmplY3QnICYmICEoJ2VuYWJsZWQnIGluIHBhcmFtc1ttb2R1bGVQYXJhbU5hbWVdKSkge1xuICAgICAgcGFyYW1zW21vZHVsZVBhcmFtTmFtZV0uZW5hYmxlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCFwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXSkgcGFyYW1zW21vZHVsZVBhcmFtTmFtZV0gPSB7XG4gICAgICBlbmFibGVkOiBmYWxzZVxuICAgIH07XG4gICAgZXh0ZW5kKGFsbE1vZHVsZXNQYXJhbXMsIG9iaik7XG4gIH07XG59IiwiaW1wb3J0IHsgZ2V0V2luZG93IH0gZnJvbSAnc3NyLXdpbmRvdyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPYnNlcnZlcih7XG4gIHN3aXBlcixcbiAgZXh0ZW5kUGFyYW1zLFxuICBvbixcbiAgZW1pdFxufSkge1xuICBjb25zdCBvYnNlcnZlcnMgPSBbXTtcbiAgY29uc3Qgd2luZG93ID0gZ2V0V2luZG93KCk7XG5cbiAgY29uc3QgYXR0YWNoID0gKHRhcmdldCwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgY29uc3QgT2JzZXJ2ZXJGdW5jID0gd2luZG93Lk11dGF0aW9uT2JzZXJ2ZXIgfHwgd2luZG93LldlYmtpdE11dGF0aW9uT2JzZXJ2ZXI7XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgT2JzZXJ2ZXJGdW5jKG11dGF0aW9ucyA9PiB7XG4gICAgICAvLyBUaGUgb2JzZXJ2ZXJVcGRhdGUgZXZlbnQgc2hvdWxkIG9ubHkgYmUgdHJpZ2dlcmVkXG4gICAgICAvLyBvbmNlIGRlc3BpdGUgdGhlIG51bWJlciBvZiBtdXRhdGlvbnMuICBBZGRpdGlvbmFsXG4gICAgICAvLyB0cmlnZ2VycyBhcmUgcmVkdW5kYW50IGFuZCBhcmUgdmVyeSBjb3N0bHlcbiAgICAgIGlmIChtdXRhdGlvbnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGVtaXQoJ29ic2VydmVyVXBkYXRlJywgbXV0YXRpb25zWzBdKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBvYnNlcnZlclVwZGF0ZSA9IGZ1bmN0aW9uIG9ic2VydmVyVXBkYXRlKCkge1xuICAgICAgICBlbWl0KCdvYnNlcnZlclVwZGF0ZScsIG11dGF0aW9uc1swXSk7XG4gICAgICB9O1xuXG4gICAgICBpZiAod2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKG9ic2VydmVyVXBkYXRlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KG9ic2VydmVyVXBkYXRlLCAwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKHRhcmdldCwge1xuICAgICAgYXR0cmlidXRlczogdHlwZW9mIG9wdGlvbnMuYXR0cmlidXRlcyA9PT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogb3B0aW9ucy5hdHRyaWJ1dGVzLFxuICAgICAgY2hpbGRMaXN0OiB0eXBlb2Ygb3B0aW9ucy5jaGlsZExpc3QgPT09ICd1bmRlZmluZWQnID8gdHJ1ZSA6IG9wdGlvbnMuY2hpbGRMaXN0LFxuICAgICAgY2hhcmFjdGVyRGF0YTogdHlwZW9mIG9wdGlvbnMuY2hhcmFjdGVyRGF0YSA9PT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogb3B0aW9ucy5jaGFyYWN0ZXJEYXRhXG4gICAgfSk7XG4gICAgb2JzZXJ2ZXJzLnB1c2gob2JzZXJ2ZXIpO1xuICB9O1xuXG4gIGNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgaWYgKCFzd2lwZXIucGFyYW1zLm9ic2VydmVyKSByZXR1cm47XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5vYnNlcnZlUGFyZW50cykge1xuICAgICAgY29uc3QgY29udGFpbmVyUGFyZW50cyA9IHN3aXBlci4kZWwucGFyZW50cygpO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRhaW5lclBhcmVudHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgYXR0YWNoKGNvbnRhaW5lclBhcmVudHNbaV0pO1xuICAgICAgfVxuICAgIH0gLy8gT2JzZXJ2ZSBjb250YWluZXJcblxuXG4gICAgYXR0YWNoKHN3aXBlci4kZWxbMF0sIHtcbiAgICAgIGNoaWxkTGlzdDogc3dpcGVyLnBhcmFtcy5vYnNlcnZlU2xpZGVDaGlsZHJlblxuICAgIH0pOyAvLyBPYnNlcnZlIHdyYXBwZXJcblxuICAgIGF0dGFjaChzd2lwZXIuJHdyYXBwZXJFbFswXSwge1xuICAgICAgYXR0cmlidXRlczogZmFsc2VcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBkZXN0cm95ID0gKCkgPT4ge1xuICAgIG9ic2VydmVycy5mb3JFYWNoKG9ic2VydmVyID0+IHtcbiAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICB9KTtcbiAgICBvYnNlcnZlcnMuc3BsaWNlKDAsIG9ic2VydmVycy5sZW5ndGgpO1xuICB9O1xuXG4gIGV4dGVuZFBhcmFtcyh7XG4gICAgb2JzZXJ2ZXI6IGZhbHNlLFxuICAgIG9ic2VydmVQYXJlbnRzOiBmYWxzZSxcbiAgICBvYnNlcnZlU2xpZGVDaGlsZHJlbjogZmFsc2VcbiAgfSk7XG4gIG9uKCdpbml0JywgaW5pdCk7XG4gIG9uKCdkZXN0cm95JywgZGVzdHJveSk7XG59IiwiaW1wb3J0IHsgZ2V0V2luZG93IH0gZnJvbSAnc3NyLXdpbmRvdyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXNpemUoe1xuICBzd2lwZXIsXG4gIG9uLFxuICBlbWl0XG59KSB7XG4gIGNvbnN0IHdpbmRvdyA9IGdldFdpbmRvdygpO1xuICBsZXQgb2JzZXJ2ZXIgPSBudWxsO1xuXG4gIGNvbnN0IHJlc2l6ZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgaWYgKCFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZCB8fCAhc3dpcGVyLmluaXRpYWxpemVkKSByZXR1cm47XG4gICAgZW1pdCgnYmVmb3JlUmVzaXplJyk7XG4gICAgZW1pdCgncmVzaXplJyk7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlT2JzZXJ2ZXIgPSAoKSA9PiB7XG4gICAgaWYgKCFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZCB8fCAhc3dpcGVyLmluaXRpYWxpemVkKSByZXR1cm47XG4gICAgb2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoZW50cmllcyA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHdpZHRoLFxuICAgICAgICBoZWlnaHRcbiAgICAgIH0gPSBzd2lwZXI7XG4gICAgICBsZXQgbmV3V2lkdGggPSB3aWR0aDtcbiAgICAgIGxldCBuZXdIZWlnaHQgPSBoZWlnaHQ7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKHtcbiAgICAgICAgY29udGVudEJveFNpemUsXG4gICAgICAgIGNvbnRlbnRSZWN0LFxuICAgICAgICB0YXJnZXRcbiAgICAgIH0pID0+IHtcbiAgICAgICAgaWYgKHRhcmdldCAmJiB0YXJnZXQgIT09IHN3aXBlci5lbCkgcmV0dXJuO1xuICAgICAgICBuZXdXaWR0aCA9IGNvbnRlbnRSZWN0ID8gY29udGVudFJlY3Qud2lkdGggOiAoY29udGVudEJveFNpemVbMF0gfHwgY29udGVudEJveFNpemUpLmlubGluZVNpemU7XG4gICAgICAgIG5ld0hlaWdodCA9IGNvbnRlbnRSZWN0ID8gY29udGVudFJlY3QuaGVpZ2h0IDogKGNvbnRlbnRCb3hTaXplWzBdIHx8IGNvbnRlbnRCb3hTaXplKS5ibG9ja1NpemU7XG4gICAgICB9KTtcblxuICAgICAgaWYgKG5ld1dpZHRoICE9PSB3aWR0aCB8fCBuZXdIZWlnaHQgIT09IGhlaWdodCkge1xuICAgICAgICByZXNpemVIYW5kbGVyKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShzd2lwZXIuZWwpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZU9ic2VydmVyID0gKCkgPT4ge1xuICAgIGlmIChvYnNlcnZlciAmJiBvYnNlcnZlci51bm9ic2VydmUgJiYgc3dpcGVyLmVsKSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoc3dpcGVyLmVsKTtcbiAgICAgIG9ic2VydmVyID0gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgb3JpZW50YXRpb25DaGFuZ2VIYW5kbGVyID0gKCkgPT4ge1xuICAgIGlmICghc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQgfHwgIXN3aXBlci5pbml0aWFsaXplZCkgcmV0dXJuO1xuICAgIGVtaXQoJ29yaWVudGF0aW9uY2hhbmdlJyk7XG4gIH07XG5cbiAgb24oJ2luaXQnLCAoKSA9PiB7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMucmVzaXplT2JzZXJ2ZXIgJiYgdHlwZW9mIHdpbmRvdy5SZXNpemVPYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNyZWF0ZU9ic2VydmVyKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUhhbmRsZXIpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbmNoYW5nZScsIG9yaWVudGF0aW9uQ2hhbmdlSGFuZGxlcik7XG4gIH0pO1xuICBvbignZGVzdHJveScsICgpID0+IHtcbiAgICByZW1vdmVPYnNlcnZlcigpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVIYW5kbGVyKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignb3JpZW50YXRpb25jaGFuZ2UnLCBvcmllbnRhdGlvbkNoYW5nZUhhbmRsZXIpO1xuICB9KTtcbn0iLCJpbXBvcnQgc2xpZGVUbyBmcm9tICcuL3NsaWRlVG8uanMnO1xuaW1wb3J0IHNsaWRlVG9Mb29wIGZyb20gJy4vc2xpZGVUb0xvb3AuanMnO1xuaW1wb3J0IHNsaWRlTmV4dCBmcm9tICcuL3NsaWRlTmV4dC5qcyc7XG5pbXBvcnQgc2xpZGVQcmV2IGZyb20gJy4vc2xpZGVQcmV2LmpzJztcbmltcG9ydCBzbGlkZVJlc2V0IGZyb20gJy4vc2xpZGVSZXNldC5qcyc7XG5pbXBvcnQgc2xpZGVUb0Nsb3Nlc3QgZnJvbSAnLi9zbGlkZVRvQ2xvc2VzdC5qcyc7XG5pbXBvcnQgc2xpZGVUb0NsaWNrZWRTbGlkZSBmcm9tICcuL3NsaWRlVG9DbGlja2VkU2xpZGUuanMnO1xuZXhwb3J0IGRlZmF1bHQge1xuICBzbGlkZVRvLFxuICBzbGlkZVRvTG9vcCxcbiAgc2xpZGVOZXh0LFxuICBzbGlkZVByZXYsXG4gIHNsaWRlUmVzZXQsXG4gIHNsaWRlVG9DbG9zZXN0LFxuICBzbGlkZVRvQ2xpY2tlZFNsaWRlXG59OyIsIi8qIGVzbGludCBuby11bnVzZWQtdmFyczogXCJvZmZcIiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2xpZGVOZXh0KHNwZWVkID0gdGhpcy5wYXJhbXMuc3BlZWQsIHJ1bkNhbGxiYWNrcyA9IHRydWUsIGludGVybmFsKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IHtcbiAgICBhbmltYXRpbmcsXG4gICAgZW5hYmxlZCxcbiAgICBwYXJhbXNcbiAgfSA9IHN3aXBlcjtcbiAgaWYgKCFlbmFibGVkKSByZXR1cm4gc3dpcGVyO1xuICBsZXQgcGVyR3JvdXAgPSBwYXJhbXMuc2xpZGVzUGVyR3JvdXA7XG5cbiAgaWYgKHBhcmFtcy5zbGlkZXNQZXJWaWV3ID09PSAnYXV0bycgJiYgcGFyYW1zLnNsaWRlc1Blckdyb3VwID09PSAxICYmIHBhcmFtcy5zbGlkZXNQZXJHcm91cEF1dG8pIHtcbiAgICBwZXJHcm91cCA9IE1hdGgubWF4KHN3aXBlci5zbGlkZXNQZXJWaWV3RHluYW1pYygnY3VycmVudCcsIHRydWUpLCAxKTtcbiAgfVxuXG4gIGNvbnN0IGluY3JlbWVudCA9IHN3aXBlci5hY3RpdmVJbmRleCA8IHBhcmFtcy5zbGlkZXNQZXJHcm91cFNraXAgPyAxIDogcGVyR3JvdXA7XG5cbiAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgaWYgKGFuaW1hdGluZyAmJiBwYXJhbXMubG9vcFByZXZlbnRzU2xpZGUpIHJldHVybiBmYWxzZTtcbiAgICBzd2lwZXIubG9vcEZpeCgpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcblxuICAgIHN3aXBlci5fY2xpZW50TGVmdCA9IHN3aXBlci4kd3JhcHBlckVsWzBdLmNsaWVudExlZnQ7XG4gIH1cblxuICByZXR1cm4gc3dpcGVyLnNsaWRlVG8oc3dpcGVyLmFjdGl2ZUluZGV4ICsgaW5jcmVtZW50LCBzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCk7XG59IiwiLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBcIm9mZlwiICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzbGlkZVByZXYoc3BlZWQgPSB0aGlzLnBhcmFtcy5zcGVlZCwgcnVuQ2FsbGJhY2tzID0gdHJ1ZSwgaW50ZXJuYWwpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3Qge1xuICAgIHBhcmFtcyxcbiAgICBhbmltYXRpbmcsXG4gICAgc25hcEdyaWQsXG4gICAgc2xpZGVzR3JpZCxcbiAgICBydGxUcmFuc2xhdGUsXG4gICAgZW5hYmxlZFxuICB9ID0gc3dpcGVyO1xuICBpZiAoIWVuYWJsZWQpIHJldHVybiBzd2lwZXI7XG5cbiAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgaWYgKGFuaW1hdGluZyAmJiBwYXJhbXMubG9vcFByZXZlbnRzU2xpZGUpIHJldHVybiBmYWxzZTtcbiAgICBzd2lwZXIubG9vcEZpeCgpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcblxuICAgIHN3aXBlci5fY2xpZW50TGVmdCA9IHN3aXBlci4kd3JhcHBlckVsWzBdLmNsaWVudExlZnQ7XG4gIH1cblxuICBjb25zdCB0cmFuc2xhdGUgPSBydGxUcmFuc2xhdGUgPyBzd2lwZXIudHJhbnNsYXRlIDogLXN3aXBlci50cmFuc2xhdGU7XG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplKHZhbCkge1xuICAgIGlmICh2YWwgPCAwKSByZXR1cm4gLU1hdGguZmxvb3IoTWF0aC5hYnModmFsKSk7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IodmFsKTtcbiAgfVxuXG4gIGNvbnN0IG5vcm1hbGl6ZWRUcmFuc2xhdGUgPSBub3JtYWxpemUodHJhbnNsYXRlKTtcbiAgY29uc3Qgbm9ybWFsaXplZFNuYXBHcmlkID0gc25hcEdyaWQubWFwKHZhbCA9PiBub3JtYWxpemUodmFsKSk7XG4gIGxldCBwcmV2U25hcCA9IHNuYXBHcmlkW25vcm1hbGl6ZWRTbmFwR3JpZC5pbmRleE9mKG5vcm1hbGl6ZWRUcmFuc2xhdGUpIC0gMV07XG5cbiAgaWYgKHR5cGVvZiBwcmV2U25hcCA9PT0gJ3VuZGVmaW5lZCcgJiYgcGFyYW1zLmNzc01vZGUpIHtcbiAgICBsZXQgcHJldlNuYXBJbmRleDtcbiAgICBzbmFwR3JpZC5mb3JFYWNoKChzbmFwLCBzbmFwSW5kZXgpID0+IHtcbiAgICAgIGlmIChub3JtYWxpemVkVHJhbnNsYXRlID49IHNuYXApIHtcbiAgICAgICAgLy8gcHJldlNuYXAgPSBzbmFwO1xuICAgICAgICBwcmV2U25hcEluZGV4ID0gc25hcEluZGV4O1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHR5cGVvZiBwcmV2U25hcEluZGV4ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcHJldlNuYXAgPSBzbmFwR3JpZFtwcmV2U25hcEluZGV4ID4gMCA/IHByZXZTbmFwSW5kZXggLSAxIDogcHJldlNuYXBJbmRleF07XG4gICAgfVxuICB9XG5cbiAgbGV0IHByZXZJbmRleCA9IDA7XG5cbiAgaWYgKHR5cGVvZiBwcmV2U25hcCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBwcmV2SW5kZXggPSBzbGlkZXNHcmlkLmluZGV4T2YocHJldlNuYXApO1xuICAgIGlmIChwcmV2SW5kZXggPCAwKSBwcmV2SW5kZXggPSBzd2lwZXIuYWN0aXZlSW5kZXggLSAxO1xuXG4gICAgaWYgKHBhcmFtcy5zbGlkZXNQZXJWaWV3ID09PSAnYXV0bycgJiYgcGFyYW1zLnNsaWRlc1Blckdyb3VwID09PSAxICYmIHBhcmFtcy5zbGlkZXNQZXJHcm91cEF1dG8pIHtcbiAgICAgIHByZXZJbmRleCA9IHByZXZJbmRleCAtIHN3aXBlci5zbGlkZXNQZXJWaWV3RHluYW1pYygncHJldmlvdXMnLCB0cnVlKSArIDE7XG4gICAgICBwcmV2SW5kZXggPSBNYXRoLm1heChwcmV2SW5kZXgsIDApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzd2lwZXIuc2xpZGVUbyhwcmV2SW5kZXgsIHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsKTtcbn0iLCIvKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFwib2ZmXCIgKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNsaWRlUmVzZXQoc3BlZWQgPSB0aGlzLnBhcmFtcy5zcGVlZCwgcnVuQ2FsbGJhY2tzID0gdHJ1ZSwgaW50ZXJuYWwpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgcmV0dXJuIHN3aXBlci5zbGlkZVRvKHN3aXBlci5hY3RpdmVJbmRleCwgc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpO1xufSIsImltcG9ydCB7IGFuaW1hdGVDU1NNb2RlU2Nyb2xsIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3V0aWxzLmpzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNsaWRlVG8oaW5kZXggPSAwLCBzcGVlZCA9IHRoaXMucGFyYW1zLnNwZWVkLCBydW5DYWxsYmFja3MgPSB0cnVlLCBpbnRlcm5hbCwgaW5pdGlhbCkge1xuICBpZiAodHlwZW9mIGluZGV4ICE9PSAnbnVtYmVyJyAmJiB0eXBlb2YgaW5kZXggIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJ2luZGV4JyBhcmd1bWVudCBjYW5ub3QgaGF2ZSB0eXBlIG90aGVyIHRoYW4gJ251bWJlcicgb3IgJ3N0cmluZycuIFske3R5cGVvZiBpbmRleH1dIGdpdmVuLmApO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBpbmRleCA9PT0gJ3N0cmluZycpIHtcbiAgICAvKipcbiAgICAgKiBUaGUgYGluZGV4YCBhcmd1bWVudCBjb252ZXJ0ZWQgZnJvbSBgc3RyaW5nYCB0byBgbnVtYmVyYC5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIGNvbnN0IGluZGV4QXNOdW1iZXIgPSBwYXJzZUludChpbmRleCwgMTApO1xuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgd2hldGhlciB0aGUgYGluZGV4YCBhcmd1bWVudCBpcyBhIHZhbGlkIGBudW1iZXJgXG4gICAgICogYWZ0ZXIgYmVpbmcgY29udmVydGVkIGZyb20gdGhlIGBzdHJpbmdgIHR5cGUuXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG5cbiAgICBjb25zdCBpc1ZhbGlkTnVtYmVyID0gaXNGaW5pdGUoaW5kZXhBc051bWJlcik7XG5cbiAgICBpZiAoIWlzVmFsaWROdW1iZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHBhc3NlZC1pbiAnaW5kZXgnIChzdHJpbmcpIGNvdWxkbid0IGJlIGNvbnZlcnRlZCB0byAnbnVtYmVyJy4gWyR7aW5kZXh9XSBnaXZlbi5gKTtcbiAgICB9IC8vIEtub3dpbmcgdGhhdCB0aGUgY29udmVydGVkIGBpbmRleGAgaXMgYSB2YWxpZCBudW1iZXIsXG4gICAgLy8gd2UgY2FuIHVwZGF0ZSB0aGUgb3JpZ2luYWwgYXJndW1lbnQncyB2YWx1ZS5cblxuXG4gICAgaW5kZXggPSBpbmRleEFzTnVtYmVyO1xuICB9XG5cbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgbGV0IHNsaWRlSW5kZXggPSBpbmRleDtcbiAgaWYgKHNsaWRlSW5kZXggPCAwKSBzbGlkZUluZGV4ID0gMDtcbiAgY29uc3Qge1xuICAgIHBhcmFtcyxcbiAgICBzbmFwR3JpZCxcbiAgICBzbGlkZXNHcmlkLFxuICAgIHByZXZpb3VzSW5kZXgsXG4gICAgYWN0aXZlSW5kZXgsXG4gICAgcnRsVHJhbnNsYXRlOiBydGwsXG4gICAgd3JhcHBlckVsLFxuICAgIGVuYWJsZWRcbiAgfSA9IHN3aXBlcjtcblxuICBpZiAoc3dpcGVyLmFuaW1hdGluZyAmJiBwYXJhbXMucHJldmVudEludGVyYWN0aW9uT25UcmFuc2l0aW9uIHx8ICFlbmFibGVkICYmICFpbnRlcm5hbCAmJiAhaW5pdGlhbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IHNraXAgPSBNYXRoLm1pbihzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwU2tpcCwgc2xpZGVJbmRleCk7XG4gIGxldCBzbmFwSW5kZXggPSBza2lwICsgTWF0aC5mbG9vcigoc2xpZGVJbmRleCAtIHNraXApIC8gc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJHcm91cCk7XG4gIGlmIChzbmFwSW5kZXggPj0gc25hcEdyaWQubGVuZ3RoKSBzbmFwSW5kZXggPSBzbmFwR3JpZC5sZW5ndGggLSAxO1xuXG4gIGlmICgoYWN0aXZlSW5kZXggfHwgcGFyYW1zLmluaXRpYWxTbGlkZSB8fCAwKSA9PT0gKHByZXZpb3VzSW5kZXggfHwgMCkgJiYgcnVuQ2FsbGJhY2tzKSB7XG4gICAgc3dpcGVyLmVtaXQoJ2JlZm9yZVNsaWRlQ2hhbmdlU3RhcnQnKTtcbiAgfVxuXG4gIGNvbnN0IHRyYW5zbGF0ZSA9IC1zbmFwR3JpZFtzbmFwSW5kZXhdOyAvLyBVcGRhdGUgcHJvZ3Jlc3NcblxuICBzd2lwZXIudXBkYXRlUHJvZ3Jlc3ModHJhbnNsYXRlKTsgLy8gTm9ybWFsaXplIHNsaWRlSW5kZXhcblxuICBpZiAocGFyYW1zLm5vcm1hbGl6ZVNsaWRlSW5kZXgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNsaWRlc0dyaWQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWRUcmFuc2xhdGUgPSAtTWF0aC5mbG9vcih0cmFuc2xhdGUgKiAxMDApO1xuICAgICAgY29uc3Qgbm9ybWFsaXplZEdyaWQgPSBNYXRoLmZsb29yKHNsaWRlc0dyaWRbaV0gKiAxMDApO1xuICAgICAgY29uc3Qgbm9ybWFsaXplZEdyaWROZXh0ID0gTWF0aC5mbG9vcihzbGlkZXNHcmlkW2kgKyAxXSAqIDEwMCk7XG5cbiAgICAgIGlmICh0eXBlb2Ygc2xpZGVzR3JpZFtpICsgMV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGlmIChub3JtYWxpemVkVHJhbnNsYXRlID49IG5vcm1hbGl6ZWRHcmlkICYmIG5vcm1hbGl6ZWRUcmFuc2xhdGUgPCBub3JtYWxpemVkR3JpZE5leHQgLSAobm9ybWFsaXplZEdyaWROZXh0IC0gbm9ybWFsaXplZEdyaWQpIC8gMikge1xuICAgICAgICAgIHNsaWRlSW5kZXggPSBpO1xuICAgICAgICB9IGVsc2UgaWYgKG5vcm1hbGl6ZWRUcmFuc2xhdGUgPj0gbm9ybWFsaXplZEdyaWQgJiYgbm9ybWFsaXplZFRyYW5zbGF0ZSA8IG5vcm1hbGl6ZWRHcmlkTmV4dCkge1xuICAgICAgICAgIHNsaWRlSW5kZXggPSBpICsgMTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChub3JtYWxpemVkVHJhbnNsYXRlID49IG5vcm1hbGl6ZWRHcmlkKSB7XG4gICAgICAgIHNsaWRlSW5kZXggPSBpO1xuICAgICAgfVxuICAgIH1cbiAgfSAvLyBEaXJlY3Rpb25zIGxvY2tzXG5cblxuICBpZiAoc3dpcGVyLmluaXRpYWxpemVkICYmIHNsaWRlSW5kZXggIT09IGFjdGl2ZUluZGV4KSB7XG4gICAgaWYgKCFzd2lwZXIuYWxsb3dTbGlkZU5leHQgJiYgdHJhbnNsYXRlIDwgc3dpcGVyLnRyYW5zbGF0ZSAmJiB0cmFuc2xhdGUgPCBzd2lwZXIubWluVHJhbnNsYXRlKCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIXN3aXBlci5hbGxvd1NsaWRlUHJldiAmJiB0cmFuc2xhdGUgPiBzd2lwZXIudHJhbnNsYXRlICYmIHRyYW5zbGF0ZSA+IHN3aXBlci5tYXhUcmFuc2xhdGUoKSkge1xuICAgICAgaWYgKChhY3RpdmVJbmRleCB8fCAwKSAhPT0gc2xpZGVJbmRleCkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGxldCBkaXJlY3Rpb247XG4gIGlmIChzbGlkZUluZGV4ID4gYWN0aXZlSW5kZXgpIGRpcmVjdGlvbiA9ICduZXh0JztlbHNlIGlmIChzbGlkZUluZGV4IDwgYWN0aXZlSW5kZXgpIGRpcmVjdGlvbiA9ICdwcmV2JztlbHNlIGRpcmVjdGlvbiA9ICdyZXNldCc7IC8vIFVwZGF0ZSBJbmRleFxuXG4gIGlmIChydGwgJiYgLXRyYW5zbGF0ZSA9PT0gc3dpcGVyLnRyYW5zbGF0ZSB8fCAhcnRsICYmIHRyYW5zbGF0ZSA9PT0gc3dpcGVyLnRyYW5zbGF0ZSkge1xuICAgIHN3aXBlci51cGRhdGVBY3RpdmVJbmRleChzbGlkZUluZGV4KTsgLy8gVXBkYXRlIEhlaWdodFxuXG4gICAgaWYgKHBhcmFtcy5hdXRvSGVpZ2h0KSB7XG4gICAgICBzd2lwZXIudXBkYXRlQXV0b0hlaWdodCgpO1xuICAgIH1cblxuICAgIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG5cbiAgICBpZiAocGFyYW1zLmVmZmVjdCAhPT0gJ3NsaWRlJykge1xuICAgICAgc3dpcGVyLnNldFRyYW5zbGF0ZSh0cmFuc2xhdGUpO1xuICAgIH1cblxuICAgIGlmIChkaXJlY3Rpb24gIT09ICdyZXNldCcpIHtcbiAgICAgIHN3aXBlci50cmFuc2l0aW9uU3RhcnQocnVuQ2FsbGJhY2tzLCBkaXJlY3Rpb24pO1xuICAgICAgc3dpcGVyLnRyYW5zaXRpb25FbmQocnVuQ2FsbGJhY2tzLCBkaXJlY3Rpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChwYXJhbXMuY3NzTW9kZSkge1xuICAgIGNvbnN0IGlzSCA9IHN3aXBlci5pc0hvcml6b250YWwoKTtcbiAgICBjb25zdCB0ID0gcnRsID8gdHJhbnNsYXRlIDogLXRyYW5zbGF0ZTtcblxuICAgIGlmIChzcGVlZCA9PT0gMCkge1xuICAgICAgY29uc3QgaXNWaXJ0dWFsID0gc3dpcGVyLnZpcnR1YWwgJiYgc3dpcGVyLnBhcmFtcy52aXJ0dWFsLmVuYWJsZWQ7XG5cbiAgICAgIGlmIChpc1ZpcnR1YWwpIHtcbiAgICAgICAgc3dpcGVyLndyYXBwZXJFbC5zdHlsZS5zY3JvbGxTbmFwVHlwZSA9ICdub25lJztcbiAgICAgICAgc3dpcGVyLl9pbW1lZGlhdGVWaXJ0dWFsID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgd3JhcHBlckVsW2lzSCA/ICdzY3JvbGxMZWZ0JyA6ICdzY3JvbGxUb3AnXSA9IHQ7XG5cbiAgICAgIGlmIChpc1ZpcnR1YWwpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICBzd2lwZXIud3JhcHBlckVsLnN0eWxlLnNjcm9sbFNuYXBUeXBlID0gJyc7XG4gICAgICAgICAgc3dpcGVyLl9zd2lwZXJJbW1lZGlhdGVWaXJ0dWFsID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXN3aXBlci5zdXBwb3J0LnNtb290aFNjcm9sbCkge1xuICAgICAgICBhbmltYXRlQ1NTTW9kZVNjcm9sbCh7XG4gICAgICAgICAgc3dpcGVyLFxuICAgICAgICAgIHRhcmdldFBvc2l0aW9uOiB0LFxuICAgICAgICAgIHNpZGU6IGlzSCA/ICdsZWZ0JyA6ICd0b3AnXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgd3JhcHBlckVsLnNjcm9sbFRvKHtcbiAgICAgICAgW2lzSCA/ICdsZWZ0JyA6ICd0b3AnXTogdCxcbiAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChzcGVlZCA9PT0gMCkge1xuICAgIHN3aXBlci5zZXRUcmFuc2l0aW9uKDApO1xuICAgIHN3aXBlci5zZXRUcmFuc2xhdGUodHJhbnNsYXRlKTtcbiAgICBzd2lwZXIudXBkYXRlQWN0aXZlSW5kZXgoc2xpZGVJbmRleCk7XG4gICAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcbiAgICBzd2lwZXIuZW1pdCgnYmVmb3JlVHJhbnNpdGlvblN0YXJ0Jywgc3BlZWQsIGludGVybmFsKTtcbiAgICBzd2lwZXIudHJhbnNpdGlvblN0YXJ0KHJ1bkNhbGxiYWNrcywgZGlyZWN0aW9uKTtcbiAgICBzd2lwZXIudHJhbnNpdGlvbkVuZChydW5DYWxsYmFja3MsIGRpcmVjdGlvbik7XG4gIH0gZWxzZSB7XG4gICAgc3dpcGVyLnNldFRyYW5zaXRpb24oc3BlZWQpO1xuICAgIHN3aXBlci5zZXRUcmFuc2xhdGUodHJhbnNsYXRlKTtcbiAgICBzd2lwZXIudXBkYXRlQWN0aXZlSW5kZXgoc2xpZGVJbmRleCk7XG4gICAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcbiAgICBzd2lwZXIuZW1pdCgnYmVmb3JlVHJhbnNpdGlvblN0YXJ0Jywgc3BlZWQsIGludGVybmFsKTtcbiAgICBzd2lwZXIudHJhbnNpdGlvblN0YXJ0KHJ1bkNhbGxiYWNrcywgZGlyZWN0aW9uKTtcblxuICAgIGlmICghc3dpcGVyLmFuaW1hdGluZykge1xuICAgICAgc3dpcGVyLmFuaW1hdGluZyA9IHRydWU7XG5cbiAgICAgIGlmICghc3dpcGVyLm9uU2xpZGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kKSB7XG4gICAgICAgIHN3aXBlci5vblNsaWRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCA9IGZ1bmN0aW9uIHRyYW5zaXRpb25FbmQoZSkge1xuICAgICAgICAgIGlmICghc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQpIHJldHVybjtcbiAgICAgICAgICBpZiAoZS50YXJnZXQgIT09IHRoaXMpIHJldHVybjtcbiAgICAgICAgICBzd2lwZXIuJHdyYXBwZXJFbFswXS5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgc3dpcGVyLm9uU2xpZGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kKTtcbiAgICAgICAgICBzd2lwZXIuJHdyYXBwZXJFbFswXS5yZW1vdmVFdmVudExpc3RlbmVyKCd3ZWJraXRUcmFuc2l0aW9uRW5kJywgc3dpcGVyLm9uU2xpZGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kKTtcbiAgICAgICAgICBzd2lwZXIub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQgPSBudWxsO1xuICAgICAgICAgIGRlbGV0ZSBzd2lwZXIub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQ7XG4gICAgICAgICAgc3dpcGVyLnRyYW5zaXRpb25FbmQocnVuQ2FsbGJhY2tzLCBkaXJlY3Rpb24pO1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBzd2lwZXIuJHdyYXBwZXJFbFswXS5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgc3dpcGVyLm9uU2xpZGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kKTtcbiAgICAgIHN3aXBlci4kd3JhcHBlckVsWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCBzd2lwZXIub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufSIsImltcG9ydCAkIGZyb20gJy4uLy4uL3NoYXJlZC9kb20uanMnO1xuaW1wb3J0IHsgbmV4dFRpY2sgfSBmcm9tICcuLi8uLi9zaGFyZWQvdXRpbHMuanMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2xpZGVUb0NsaWNrZWRTbGlkZSgpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3Qge1xuICAgIHBhcmFtcyxcbiAgICAkd3JhcHBlckVsXG4gIH0gPSBzd2lwZXI7XG4gIGNvbnN0IHNsaWRlc1BlclZpZXcgPSBwYXJhbXMuc2xpZGVzUGVyVmlldyA9PT0gJ2F1dG8nID8gc3dpcGVyLnNsaWRlc1BlclZpZXdEeW5hbWljKCkgOiBwYXJhbXMuc2xpZGVzUGVyVmlldztcbiAgbGV0IHNsaWRlVG9JbmRleCA9IHN3aXBlci5jbGlja2VkSW5kZXg7XG4gIGxldCByZWFsSW5kZXg7XG5cbiAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgaWYgKHN3aXBlci5hbmltYXRpbmcpIHJldHVybjtcbiAgICByZWFsSW5kZXggPSBwYXJzZUludCgkKHN3aXBlci5jbGlja2VkU2xpZGUpLmF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JyksIDEwKTtcblxuICAgIGlmIChwYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgIGlmIChzbGlkZVRvSW5kZXggPCBzd2lwZXIubG9vcGVkU2xpZGVzIC0gc2xpZGVzUGVyVmlldyAvIDIgfHwgc2xpZGVUb0luZGV4ID4gc3dpcGVyLnNsaWRlcy5sZW5ndGggLSBzd2lwZXIubG9vcGVkU2xpZGVzICsgc2xpZGVzUGVyVmlldyAvIDIpIHtcbiAgICAgICAgc3dpcGVyLmxvb3BGaXgoKTtcbiAgICAgICAgc2xpZGVUb0luZGV4ID0gJHdyYXBwZXJFbC5jaGlsZHJlbihgLiR7cGFyYW1zLnNsaWRlQ2xhc3N9W2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJHtyZWFsSW5kZXh9XCJdOm5vdCguJHtwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzc30pYCkuZXEoMCkuaW5kZXgoKTtcbiAgICAgICAgbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgIHN3aXBlci5zbGlkZVRvKHNsaWRlVG9JbmRleCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3dpcGVyLnNsaWRlVG8oc2xpZGVUb0luZGV4KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNsaWRlVG9JbmRleCA+IHN3aXBlci5zbGlkZXMubGVuZ3RoIC0gc2xpZGVzUGVyVmlldykge1xuICAgICAgc3dpcGVyLmxvb3BGaXgoKTtcbiAgICAgIHNsaWRlVG9JbmRleCA9ICR3cmFwcGVyRWwuY2hpbGRyZW4oYC4ke3BhcmFtcy5zbGlkZUNsYXNzfVtkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIiR7cmVhbEluZGV4fVwiXTpub3QoLiR7cGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3N9KWApLmVxKDApLmluZGV4KCk7XG4gICAgICBuZXh0VGljaygoKSA9PiB7XG4gICAgICAgIHN3aXBlci5zbGlkZVRvKHNsaWRlVG9JbmRleCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpcGVyLnNsaWRlVG8oc2xpZGVUb0luZGV4KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgc3dpcGVyLnNsaWRlVG8oc2xpZGVUb0luZGV4KTtcbiAgfVxufSIsIi8qIGVzbGludCBuby11bnVzZWQtdmFyczogXCJvZmZcIiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2xpZGVUb0Nsb3Nlc3Qoc3BlZWQgPSB0aGlzLnBhcmFtcy5zcGVlZCwgcnVuQ2FsbGJhY2tzID0gdHJ1ZSwgaW50ZXJuYWwsIHRocmVzaG9sZCA9IDAuNSkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBsZXQgaW5kZXggPSBzd2lwZXIuYWN0aXZlSW5kZXg7XG4gIGNvbnN0IHNraXAgPSBNYXRoLm1pbihzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwU2tpcCwgaW5kZXgpO1xuICBjb25zdCBzbmFwSW5kZXggPSBza2lwICsgTWF0aC5mbG9vcigoaW5kZXggLSBza2lwKSAvIHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyR3JvdXApO1xuICBjb25zdCB0cmFuc2xhdGUgPSBzd2lwZXIucnRsVHJhbnNsYXRlID8gc3dpcGVyLnRyYW5zbGF0ZSA6IC1zd2lwZXIudHJhbnNsYXRlO1xuXG4gIGlmICh0cmFuc2xhdGUgPj0gc3dpcGVyLnNuYXBHcmlkW3NuYXBJbmRleF0pIHtcbiAgICAvLyBUaGUgY3VycmVudCB0cmFuc2xhdGUgaXMgb24gb3IgYWZ0ZXIgdGhlIGN1cnJlbnQgc25hcCBpbmRleCwgc28gdGhlIGNob2ljZVxuICAgIC8vIGlzIGJldHdlZW4gdGhlIGN1cnJlbnQgaW5kZXggYW5kIHRoZSBvbmUgYWZ0ZXIgaXQuXG4gICAgY29uc3QgY3VycmVudFNuYXAgPSBzd2lwZXIuc25hcEdyaWRbc25hcEluZGV4XTtcbiAgICBjb25zdCBuZXh0U25hcCA9IHN3aXBlci5zbmFwR3JpZFtzbmFwSW5kZXggKyAxXTtcblxuICAgIGlmICh0cmFuc2xhdGUgLSBjdXJyZW50U25hcCA+IChuZXh0U25hcCAtIGN1cnJlbnRTbmFwKSAqIHRocmVzaG9sZCkge1xuICAgICAgaW5kZXggKz0gc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJHcm91cDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gVGhlIGN1cnJlbnQgdHJhbnNsYXRlIGlzIGJlZm9yZSB0aGUgY3VycmVudCBzbmFwIGluZGV4LCBzbyB0aGUgY2hvaWNlXG4gICAgLy8gaXMgYmV0d2VlbiB0aGUgY3VycmVudCBpbmRleCBhbmQgdGhlIG9uZSBiZWZvcmUgaXQuXG4gICAgY29uc3QgcHJldlNuYXAgPSBzd2lwZXIuc25hcEdyaWRbc25hcEluZGV4IC0gMV07XG4gICAgY29uc3QgY3VycmVudFNuYXAgPSBzd2lwZXIuc25hcEdyaWRbc25hcEluZGV4XTtcblxuICAgIGlmICh0cmFuc2xhdGUgLSBwcmV2U25hcCA8PSAoY3VycmVudFNuYXAgLSBwcmV2U25hcCkgKiB0aHJlc2hvbGQpIHtcbiAgICAgIGluZGV4IC09IHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyR3JvdXA7XG4gICAgfVxuICB9XG5cbiAgaW5kZXggPSBNYXRoLm1heChpbmRleCwgMCk7XG4gIGluZGV4ID0gTWF0aC5taW4oaW5kZXgsIHN3aXBlci5zbGlkZXNHcmlkLmxlbmd0aCAtIDEpO1xuICByZXR1cm4gc3dpcGVyLnNsaWRlVG8oaW5kZXgsIHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzbGlkZVRvTG9vcChpbmRleCA9IDAsIHNwZWVkID0gdGhpcy5wYXJhbXMuc3BlZWQsIHJ1bkNhbGxiYWNrcyA9IHRydWUsIGludGVybmFsKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGxldCBuZXdJbmRleCA9IGluZGV4O1xuXG4gIGlmIChzd2lwZXIucGFyYW1zLmxvb3ApIHtcbiAgICBuZXdJbmRleCArPSBzd2lwZXIubG9vcGVkU2xpZGVzO1xuICB9XG5cbiAgcmV0dXJuIHN3aXBlci5zbGlkZVRvKG5ld0luZGV4LCBzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCk7XG59IiwiaW1wb3J0IHNldFRyYW5zaXRpb24gZnJvbSAnLi9zZXRUcmFuc2l0aW9uLmpzJztcbmltcG9ydCB0cmFuc2l0aW9uU3RhcnQgZnJvbSAnLi90cmFuc2l0aW9uU3RhcnQuanMnO1xuaW1wb3J0IHRyYW5zaXRpb25FbmQgZnJvbSAnLi90cmFuc2l0aW9uRW5kLmpzJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgc2V0VHJhbnNpdGlvbixcbiAgdHJhbnNpdGlvblN0YXJ0LFxuICB0cmFuc2l0aW9uRW5kXG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldFRyYW5zaXRpb24oZHVyYXRpb24sIGJ5Q29udHJvbGxlcikge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuXG4gIGlmICghc3dpcGVyLnBhcmFtcy5jc3NNb2RlKSB7XG4gICAgc3dpcGVyLiR3cmFwcGVyRWwudHJhbnNpdGlvbihkdXJhdGlvbik7XG4gIH1cblxuICBzd2lwZXIuZW1pdCgnc2V0VHJhbnNpdGlvbicsIGR1cmF0aW9uLCBieUNvbnRyb2xsZXIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRyYW5zaXRpb25FbWl0KHtcbiAgc3dpcGVyLFxuICBydW5DYWxsYmFja3MsXG4gIGRpcmVjdGlvbixcbiAgc3RlcFxufSkge1xuICBjb25zdCB7XG4gICAgYWN0aXZlSW5kZXgsXG4gICAgcHJldmlvdXNJbmRleFxuICB9ID0gc3dpcGVyO1xuICBsZXQgZGlyID0gZGlyZWN0aW9uO1xuXG4gIGlmICghZGlyKSB7XG4gICAgaWYgKGFjdGl2ZUluZGV4ID4gcHJldmlvdXNJbmRleCkgZGlyID0gJ25leHQnO2Vsc2UgaWYgKGFjdGl2ZUluZGV4IDwgcHJldmlvdXNJbmRleCkgZGlyID0gJ3ByZXYnO2Vsc2UgZGlyID0gJ3Jlc2V0JztcbiAgfVxuXG4gIHN3aXBlci5lbWl0KGB0cmFuc2l0aW9uJHtzdGVwfWApO1xuXG4gIGlmIChydW5DYWxsYmFja3MgJiYgYWN0aXZlSW5kZXggIT09IHByZXZpb3VzSW5kZXgpIHtcbiAgICBpZiAoZGlyID09PSAncmVzZXQnKSB7XG4gICAgICBzd2lwZXIuZW1pdChgc2xpZGVSZXNldFRyYW5zaXRpb24ke3N0ZXB9YCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc3dpcGVyLmVtaXQoYHNsaWRlQ2hhbmdlVHJhbnNpdGlvbiR7c3RlcH1gKTtcblxuICAgIGlmIChkaXIgPT09ICduZXh0Jykge1xuICAgICAgc3dpcGVyLmVtaXQoYHNsaWRlTmV4dFRyYW5zaXRpb24ke3N0ZXB9YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXBlci5lbWl0KGBzbGlkZVByZXZUcmFuc2l0aW9uJHtzdGVwfWApO1xuICAgIH1cbiAgfVxufSIsImltcG9ydCB0cmFuc2l0aW9uRW1pdCBmcm9tICcuL3RyYW5zaXRpb25FbWl0LmpzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRyYW5zaXRpb25FbmQocnVuQ2FsbGJhY2tzID0gdHJ1ZSwgZGlyZWN0aW9uKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IHtcbiAgICBwYXJhbXNcbiAgfSA9IHN3aXBlcjtcbiAgc3dpcGVyLmFuaW1hdGluZyA9IGZhbHNlO1xuICBpZiAocGFyYW1zLmNzc01vZGUpIHJldHVybjtcbiAgc3dpcGVyLnNldFRyYW5zaXRpb24oMCk7XG4gIHRyYW5zaXRpb25FbWl0KHtcbiAgICBzd2lwZXIsXG4gICAgcnVuQ2FsbGJhY2tzLFxuICAgIGRpcmVjdGlvbixcbiAgICBzdGVwOiAnRW5kJ1xuICB9KTtcbn0iLCJpbXBvcnQgdHJhbnNpdGlvbkVtaXQgZnJvbSAnLi90cmFuc2l0aW9uRW1pdC5qcyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0cmFuc2l0aW9uU3RhcnQocnVuQ2FsbGJhY2tzID0gdHJ1ZSwgZGlyZWN0aW9uKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IHtcbiAgICBwYXJhbXNcbiAgfSA9IHN3aXBlcjtcbiAgaWYgKHBhcmFtcy5jc3NNb2RlKSByZXR1cm47XG5cbiAgaWYgKHBhcmFtcy5hdXRvSGVpZ2h0KSB7XG4gICAgc3dpcGVyLnVwZGF0ZUF1dG9IZWlnaHQoKTtcbiAgfVxuXG4gIHRyYW5zaXRpb25FbWl0KHtcbiAgICBzd2lwZXIsXG4gICAgcnVuQ2FsbGJhY2tzLFxuICAgIGRpcmVjdGlvbixcbiAgICBzdGVwOiAnU3RhcnQnXG4gIH0pO1xufSIsImltcG9ydCB7IGdldFRyYW5zbGF0ZSB9IGZyb20gJy4uLy4uL3NoYXJlZC91dGlscy5qcyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRTd2lwZXJUcmFuc2xhdGUoYXhpcyA9IHRoaXMuaXNIb3Jpem9udGFsKCkgPyAneCcgOiAneScpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3Qge1xuICAgIHBhcmFtcyxcbiAgICBydGxUcmFuc2xhdGU6IHJ0bCxcbiAgICB0cmFuc2xhdGUsXG4gICAgJHdyYXBwZXJFbFxuICB9ID0gc3dpcGVyO1xuXG4gIGlmIChwYXJhbXMudmlydHVhbFRyYW5zbGF0ZSkge1xuICAgIHJldHVybiBydGwgPyAtdHJhbnNsYXRlIDogdHJhbnNsYXRlO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5jc3NNb2RlKSB7XG4gICAgcmV0dXJuIHRyYW5zbGF0ZTtcbiAgfVxuXG4gIGxldCBjdXJyZW50VHJhbnNsYXRlID0gZ2V0VHJhbnNsYXRlKCR3cmFwcGVyRWxbMF0sIGF4aXMpO1xuICBpZiAocnRsKSBjdXJyZW50VHJhbnNsYXRlID0gLWN1cnJlbnRUcmFuc2xhdGU7XG4gIHJldHVybiBjdXJyZW50VHJhbnNsYXRlIHx8IDA7XG59IiwiaW1wb3J0IGdldFRyYW5zbGF0ZSBmcm9tICcuL2dldFRyYW5zbGF0ZS5qcyc7XG5pbXBvcnQgc2V0VHJhbnNsYXRlIGZyb20gJy4vc2V0VHJhbnNsYXRlLmpzJztcbmltcG9ydCBtaW5UcmFuc2xhdGUgZnJvbSAnLi9taW5UcmFuc2xhdGUuanMnO1xuaW1wb3J0IG1heFRyYW5zbGF0ZSBmcm9tICcuL21heFRyYW5zbGF0ZS5qcyc7XG5pbXBvcnQgdHJhbnNsYXRlVG8gZnJvbSAnLi90cmFuc2xhdGVUby5qcyc7XG5leHBvcnQgZGVmYXVsdCB7XG4gIGdldFRyYW5zbGF0ZSxcbiAgc2V0VHJhbnNsYXRlLFxuICBtaW5UcmFuc2xhdGUsXG4gIG1heFRyYW5zbGF0ZSxcbiAgdHJhbnNsYXRlVG9cbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWF4VHJhbnNsYXRlKCkge1xuICByZXR1cm4gLXRoaXMuc25hcEdyaWRbdGhpcy5zbmFwR3JpZC5sZW5ndGggLSAxXTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaW5UcmFuc2xhdGUoKSB7XG4gIHJldHVybiAtdGhpcy5zbmFwR3JpZFswXTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRUcmFuc2xhdGUodHJhbnNsYXRlLCBieUNvbnRyb2xsZXIpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3Qge1xuICAgIHJ0bFRyYW5zbGF0ZTogcnRsLFxuICAgIHBhcmFtcyxcbiAgICAkd3JhcHBlckVsLFxuICAgIHdyYXBwZXJFbCxcbiAgICBwcm9ncmVzc1xuICB9ID0gc3dpcGVyO1xuICBsZXQgeCA9IDA7XG4gIGxldCB5ID0gMDtcbiAgY29uc3QgeiA9IDA7XG5cbiAgaWYgKHN3aXBlci5pc0hvcml6b250YWwoKSkge1xuICAgIHggPSBydGwgPyAtdHJhbnNsYXRlIDogdHJhbnNsYXRlO1xuICB9IGVsc2Uge1xuICAgIHkgPSB0cmFuc2xhdGU7XG4gIH1cblxuICBpZiAocGFyYW1zLnJvdW5kTGVuZ3Rocykge1xuICAgIHggPSBNYXRoLmZsb29yKHgpO1xuICAgIHkgPSBNYXRoLmZsb29yKHkpO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5jc3NNb2RlKSB7XG4gICAgd3JhcHBlckVsW3N3aXBlci5pc0hvcml6b250YWwoKSA/ICdzY3JvbGxMZWZ0JyA6ICdzY3JvbGxUb3AnXSA9IHN3aXBlci5pc0hvcml6b250YWwoKSA/IC14IDogLXk7XG4gIH0gZWxzZSBpZiAoIXBhcmFtcy52aXJ0dWFsVHJhbnNsYXRlKSB7XG4gICAgJHdyYXBwZXJFbC50cmFuc2Zvcm0oYHRyYW5zbGF0ZTNkKCR7eH1weCwgJHt5fXB4LCAke3p9cHgpYCk7XG4gIH1cblxuICBzd2lwZXIucHJldmlvdXNUcmFuc2xhdGUgPSBzd2lwZXIudHJhbnNsYXRlO1xuICBzd2lwZXIudHJhbnNsYXRlID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8geCA6IHk7IC8vIENoZWNrIGlmIHdlIG5lZWQgdG8gdXBkYXRlIHByb2dyZXNzXG5cbiAgbGV0IG5ld1Byb2dyZXNzO1xuICBjb25zdCB0cmFuc2xhdGVzRGlmZiA9IHN3aXBlci5tYXhUcmFuc2xhdGUoKSAtIHN3aXBlci5taW5UcmFuc2xhdGUoKTtcblxuICBpZiAodHJhbnNsYXRlc0RpZmYgPT09IDApIHtcbiAgICBuZXdQcm9ncmVzcyA9IDA7XG4gIH0gZWxzZSB7XG4gICAgbmV3UHJvZ3Jlc3MgPSAodHJhbnNsYXRlIC0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpKSAvIHRyYW5zbGF0ZXNEaWZmO1xuICB9XG5cbiAgaWYgKG5ld1Byb2dyZXNzICE9PSBwcm9ncmVzcykge1xuICAgIHN3aXBlci51cGRhdGVQcm9ncmVzcyh0cmFuc2xhdGUpO1xuICB9XG5cbiAgc3dpcGVyLmVtaXQoJ3NldFRyYW5zbGF0ZScsIHN3aXBlci50cmFuc2xhdGUsIGJ5Q29udHJvbGxlcik7XG59IiwiaW1wb3J0IHsgYW5pbWF0ZUNTU01vZGVTY3JvbGwgfSBmcm9tICcuLi8uLi9zaGFyZWQvdXRpbHMuanMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdHJhbnNsYXRlVG8odHJhbnNsYXRlID0gMCwgc3BlZWQgPSB0aGlzLnBhcmFtcy5zcGVlZCwgcnVuQ2FsbGJhY2tzID0gdHJ1ZSwgdHJhbnNsYXRlQm91bmRzID0gdHJ1ZSwgaW50ZXJuYWwpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3Qge1xuICAgIHBhcmFtcyxcbiAgICB3cmFwcGVyRWxcbiAgfSA9IHN3aXBlcjtcblxuICBpZiAoc3dpcGVyLmFuaW1hdGluZyAmJiBwYXJhbXMucHJldmVudEludGVyYWN0aW9uT25UcmFuc2l0aW9uKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgbWluVHJhbnNsYXRlID0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpO1xuICBjb25zdCBtYXhUcmFuc2xhdGUgPSBzd2lwZXIubWF4VHJhbnNsYXRlKCk7XG4gIGxldCBuZXdUcmFuc2xhdGU7XG4gIGlmICh0cmFuc2xhdGVCb3VuZHMgJiYgdHJhbnNsYXRlID4gbWluVHJhbnNsYXRlKSBuZXdUcmFuc2xhdGUgPSBtaW5UcmFuc2xhdGU7ZWxzZSBpZiAodHJhbnNsYXRlQm91bmRzICYmIHRyYW5zbGF0ZSA8IG1heFRyYW5zbGF0ZSkgbmV3VHJhbnNsYXRlID0gbWF4VHJhbnNsYXRlO2Vsc2UgbmV3VHJhbnNsYXRlID0gdHJhbnNsYXRlOyAvLyBVcGRhdGUgcHJvZ3Jlc3NcblxuICBzd2lwZXIudXBkYXRlUHJvZ3Jlc3MobmV3VHJhbnNsYXRlKTtcblxuICBpZiAocGFyYW1zLmNzc01vZGUpIHtcbiAgICBjb25zdCBpc0ggPSBzd2lwZXIuaXNIb3Jpem9udGFsKCk7XG5cbiAgICBpZiAoc3BlZWQgPT09IDApIHtcbiAgICAgIHdyYXBwZXJFbFtpc0ggPyAnc2Nyb2xsTGVmdCcgOiAnc2Nyb2xsVG9wJ10gPSAtbmV3VHJhbnNsYXRlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXN3aXBlci5zdXBwb3J0LnNtb290aFNjcm9sbCkge1xuICAgICAgICBhbmltYXRlQ1NTTW9kZVNjcm9sbCh7XG4gICAgICAgICAgc3dpcGVyLFxuICAgICAgICAgIHRhcmdldFBvc2l0aW9uOiAtbmV3VHJhbnNsYXRlLFxuICAgICAgICAgIHNpZGU6IGlzSCA/ICdsZWZ0JyA6ICd0b3AnXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgd3JhcHBlckVsLnNjcm9sbFRvKHtcbiAgICAgICAgW2lzSCA/ICdsZWZ0JyA6ICd0b3AnXTogLW5ld1RyYW5zbGF0ZSxcbiAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChzcGVlZCA9PT0gMCkge1xuICAgIHN3aXBlci5zZXRUcmFuc2l0aW9uKDApO1xuICAgIHN3aXBlci5zZXRUcmFuc2xhdGUobmV3VHJhbnNsYXRlKTtcblxuICAgIGlmIChydW5DYWxsYmFja3MpIHtcbiAgICAgIHN3aXBlci5lbWl0KCdiZWZvcmVUcmFuc2l0aW9uU3RhcnQnLCBzcGVlZCwgaW50ZXJuYWwpO1xuICAgICAgc3dpcGVyLmVtaXQoJ3RyYW5zaXRpb25FbmQnKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgc3dpcGVyLnNldFRyYW5zaXRpb24oc3BlZWQpO1xuICAgIHN3aXBlci5zZXRUcmFuc2xhdGUobmV3VHJhbnNsYXRlKTtcblxuICAgIGlmIChydW5DYWxsYmFja3MpIHtcbiAgICAgIHN3aXBlci5lbWl0KCdiZWZvcmVUcmFuc2l0aW9uU3RhcnQnLCBzcGVlZCwgaW50ZXJuYWwpO1xuICAgICAgc3dpcGVyLmVtaXQoJ3RyYW5zaXRpb25TdGFydCcpO1xuICAgIH1cblxuICAgIGlmICghc3dpcGVyLmFuaW1hdGluZykge1xuICAgICAgc3dpcGVyLmFuaW1hdGluZyA9IHRydWU7XG5cbiAgICAgIGlmICghc3dpcGVyLm9uVHJhbnNsYXRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCkge1xuICAgICAgICBzd2lwZXIub25UcmFuc2xhdGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kID0gZnVuY3Rpb24gdHJhbnNpdGlvbkVuZChlKSB7XG4gICAgICAgICAgaWYgKCFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZCkgcmV0dXJuO1xuICAgICAgICAgIGlmIChlLnRhcmdldCAhPT0gdGhpcykgcmV0dXJuO1xuICAgICAgICAgIHN3aXBlci4kd3JhcHBlckVsWzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBzd2lwZXIub25UcmFuc2xhdGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kKTtcbiAgICAgICAgICBzd2lwZXIuJHdyYXBwZXJFbFswXS5yZW1vdmVFdmVudExpc3RlbmVyKCd3ZWJraXRUcmFuc2l0aW9uRW5kJywgc3dpcGVyLm9uVHJhbnNsYXRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCk7XG4gICAgICAgICAgc3dpcGVyLm9uVHJhbnNsYXRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCA9IG51bGw7XG4gICAgICAgICAgZGVsZXRlIHN3aXBlci5vblRyYW5zbGF0ZVRvV3JhcHBlclRyYW5zaXRpb25FbmQ7XG5cbiAgICAgICAgICBpZiAocnVuQ2FsbGJhY2tzKSB7XG4gICAgICAgICAgICBzd2lwZXIuZW1pdCgndHJhbnNpdGlvbkVuZCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgc3dpcGVyLiR3cmFwcGVyRWxbMF0uYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHN3aXBlci5vblRyYW5zbGF0ZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpO1xuICAgICAgc3dpcGVyLiR3cmFwcGVyRWxbMF0uYWRkRXZlbnRMaXN0ZW5lcignd2Via2l0VHJhbnNpdGlvbkVuZCcsIHN3aXBlci5vblRyYW5zbGF0ZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufSIsImltcG9ydCB1cGRhdGVTaXplIGZyb20gJy4vdXBkYXRlU2l6ZS5qcyc7XG5pbXBvcnQgdXBkYXRlU2xpZGVzIGZyb20gJy4vdXBkYXRlU2xpZGVzLmpzJztcbmltcG9ydCB1cGRhdGVBdXRvSGVpZ2h0IGZyb20gJy4vdXBkYXRlQXV0b0hlaWdodC5qcyc7XG5pbXBvcnQgdXBkYXRlU2xpZGVzT2Zmc2V0IGZyb20gJy4vdXBkYXRlU2xpZGVzT2Zmc2V0LmpzJztcbmltcG9ydCB1cGRhdGVTbGlkZXNQcm9ncmVzcyBmcm9tICcuL3VwZGF0ZVNsaWRlc1Byb2dyZXNzLmpzJztcbmltcG9ydCB1cGRhdGVQcm9ncmVzcyBmcm9tICcuL3VwZGF0ZVByb2dyZXNzLmpzJztcbmltcG9ydCB1cGRhdGVTbGlkZXNDbGFzc2VzIGZyb20gJy4vdXBkYXRlU2xpZGVzQ2xhc3Nlcy5qcyc7XG5pbXBvcnQgdXBkYXRlQWN0aXZlSW5kZXggZnJvbSAnLi91cGRhdGVBY3RpdmVJbmRleC5qcyc7XG5pbXBvcnQgdXBkYXRlQ2xpY2tlZFNsaWRlIGZyb20gJy4vdXBkYXRlQ2xpY2tlZFNsaWRlLmpzJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgdXBkYXRlU2l6ZSxcbiAgdXBkYXRlU2xpZGVzLFxuICB1cGRhdGVBdXRvSGVpZ2h0LFxuICB1cGRhdGVTbGlkZXNPZmZzZXQsXG4gIHVwZGF0ZVNsaWRlc1Byb2dyZXNzLFxuICB1cGRhdGVQcm9ncmVzcyxcbiAgdXBkYXRlU2xpZGVzQ2xhc3NlcyxcbiAgdXBkYXRlQWN0aXZlSW5kZXgsXG4gIHVwZGF0ZUNsaWNrZWRTbGlkZVxufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGRhdGVBY3RpdmVJbmRleChuZXdBY3RpdmVJbmRleCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCB0cmFuc2xhdGUgPSBzd2lwZXIucnRsVHJhbnNsYXRlID8gc3dpcGVyLnRyYW5zbGF0ZSA6IC1zd2lwZXIudHJhbnNsYXRlO1xuICBjb25zdCB7XG4gICAgc2xpZGVzR3JpZCxcbiAgICBzbmFwR3JpZCxcbiAgICBwYXJhbXMsXG4gICAgYWN0aXZlSW5kZXg6IHByZXZpb3VzSW5kZXgsXG4gICAgcmVhbEluZGV4OiBwcmV2aW91c1JlYWxJbmRleCxcbiAgICBzbmFwSW5kZXg6IHByZXZpb3VzU25hcEluZGV4XG4gIH0gPSBzd2lwZXI7XG4gIGxldCBhY3RpdmVJbmRleCA9IG5ld0FjdGl2ZUluZGV4O1xuICBsZXQgc25hcEluZGV4O1xuXG4gIGlmICh0eXBlb2YgYWN0aXZlSW5kZXggPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbGlkZXNHcmlkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAodHlwZW9mIHNsaWRlc0dyaWRbaSArIDFdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBpZiAodHJhbnNsYXRlID49IHNsaWRlc0dyaWRbaV0gJiYgdHJhbnNsYXRlIDwgc2xpZGVzR3JpZFtpICsgMV0gLSAoc2xpZGVzR3JpZFtpICsgMV0gLSBzbGlkZXNHcmlkW2ldKSAvIDIpIHtcbiAgICAgICAgICBhY3RpdmVJbmRleCA9IGk7XG4gICAgICAgIH0gZWxzZSBpZiAodHJhbnNsYXRlID49IHNsaWRlc0dyaWRbaV0gJiYgdHJhbnNsYXRlIDwgc2xpZGVzR3JpZFtpICsgMV0pIHtcbiAgICAgICAgICBhY3RpdmVJbmRleCA9IGkgKyAxO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRyYW5zbGF0ZSA+PSBzbGlkZXNHcmlkW2ldKSB7XG4gICAgICAgIGFjdGl2ZUluZGV4ID0gaTtcbiAgICAgIH1cbiAgICB9IC8vIE5vcm1hbGl6ZSBzbGlkZUluZGV4XG5cblxuICAgIGlmIChwYXJhbXMubm9ybWFsaXplU2xpZGVJbmRleCkge1xuICAgICAgaWYgKGFjdGl2ZUluZGV4IDwgMCB8fCB0eXBlb2YgYWN0aXZlSW5kZXggPT09ICd1bmRlZmluZWQnKSBhY3RpdmVJbmRleCA9IDA7XG4gICAgfVxuICB9XG5cbiAgaWYgKHNuYXBHcmlkLmluZGV4T2YodHJhbnNsYXRlKSA+PSAwKSB7XG4gICAgc25hcEluZGV4ID0gc25hcEdyaWQuaW5kZXhPZih0cmFuc2xhdGUpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHNraXAgPSBNYXRoLm1pbihwYXJhbXMuc2xpZGVzUGVyR3JvdXBTa2lwLCBhY3RpdmVJbmRleCk7XG4gICAgc25hcEluZGV4ID0gc2tpcCArIE1hdGguZmxvb3IoKGFjdGl2ZUluZGV4IC0gc2tpcCkgLyBwYXJhbXMuc2xpZGVzUGVyR3JvdXApO1xuICB9XG5cbiAgaWYgKHNuYXBJbmRleCA+PSBzbmFwR3JpZC5sZW5ndGgpIHNuYXBJbmRleCA9IHNuYXBHcmlkLmxlbmd0aCAtIDE7XG5cbiAgaWYgKGFjdGl2ZUluZGV4ID09PSBwcmV2aW91c0luZGV4KSB7XG4gICAgaWYgKHNuYXBJbmRleCAhPT0gcHJldmlvdXNTbmFwSW5kZXgpIHtcbiAgICAgIHN3aXBlci5zbmFwSW5kZXggPSBzbmFwSW5kZXg7XG4gICAgICBzd2lwZXIuZW1pdCgnc25hcEluZGV4Q2hhbmdlJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9IC8vIEdldCByZWFsIGluZGV4XG5cblxuICBjb25zdCByZWFsSW5kZXggPSBwYXJzZUludChzd2lwZXIuc2xpZGVzLmVxKGFjdGl2ZUluZGV4KS5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpIHx8IGFjdGl2ZUluZGV4LCAxMCk7XG4gIE9iamVjdC5hc3NpZ24oc3dpcGVyLCB7XG4gICAgc25hcEluZGV4LFxuICAgIHJlYWxJbmRleCxcbiAgICBwcmV2aW91c0luZGV4LFxuICAgIGFjdGl2ZUluZGV4XG4gIH0pO1xuICBzd2lwZXIuZW1pdCgnYWN0aXZlSW5kZXhDaGFuZ2UnKTtcbiAgc3dpcGVyLmVtaXQoJ3NuYXBJbmRleENoYW5nZScpO1xuXG4gIGlmIChwcmV2aW91c1JlYWxJbmRleCAhPT0gcmVhbEluZGV4KSB7XG4gICAgc3dpcGVyLmVtaXQoJ3JlYWxJbmRleENoYW5nZScpO1xuICB9XG5cbiAgaWYgKHN3aXBlci5pbml0aWFsaXplZCB8fCBzd2lwZXIucGFyYW1zLnJ1bkNhbGxiYWNrc09uSW5pdCkge1xuICAgIHN3aXBlci5lbWl0KCdzbGlkZUNoYW5nZScpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlQXV0b0hlaWdodChzcGVlZCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCBhY3RpdmVTbGlkZXMgPSBbXTtcbiAgY29uc3QgaXNWaXJ0dWFsID0gc3dpcGVyLnZpcnR1YWwgJiYgc3dpcGVyLnBhcmFtcy52aXJ0dWFsLmVuYWJsZWQ7XG4gIGxldCBuZXdIZWlnaHQgPSAwO1xuICBsZXQgaTtcblxuICBpZiAodHlwZW9mIHNwZWVkID09PSAnbnVtYmVyJykge1xuICAgIHN3aXBlci5zZXRUcmFuc2l0aW9uKHNwZWVkKTtcbiAgfSBlbHNlIGlmIChzcGVlZCA9PT0gdHJ1ZSkge1xuICAgIHN3aXBlci5zZXRUcmFuc2l0aW9uKHN3aXBlci5wYXJhbXMuc3BlZWQpO1xuICB9XG5cbiAgY29uc3QgZ2V0U2xpZGVCeUluZGV4ID0gaW5kZXggPT4ge1xuICAgIGlmIChpc1ZpcnR1YWwpIHtcbiAgICAgIHJldHVybiBzd2lwZXIuc2xpZGVzLmZpbHRlcihlbCA9PiBwYXJzZUludChlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JyksIDEwKSA9PT0gaW5kZXgpWzBdO1xuICAgIH1cblxuICAgIHJldHVybiBzd2lwZXIuc2xpZGVzLmVxKGluZGV4KVswXTtcbiAgfTsgLy8gRmluZCBzbGlkZXMgY3VycmVudGx5IGluIHZpZXdcblxuXG4gIGlmIChzd2lwZXIucGFyYW1zLnNsaWRlc1BlclZpZXcgIT09ICdhdXRvJyAmJiBzd2lwZXIucGFyYW1zLnNsaWRlc1BlclZpZXcgPiAxKSB7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgIHN3aXBlci52aXNpYmxlU2xpZGVzLmVhY2goc2xpZGUgPT4ge1xuICAgICAgICBhY3RpdmVTbGlkZXMucHVzaChzbGlkZSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChpID0gMDsgaSA8IE1hdGguY2VpbChzd2lwZXIucGFyYW1zLnNsaWRlc1BlclZpZXcpOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBzd2lwZXIuYWN0aXZlSW5kZXggKyBpO1xuICAgICAgICBpZiAoaW5kZXggPiBzd2lwZXIuc2xpZGVzLmxlbmd0aCAmJiAhaXNWaXJ0dWFsKSBicmVhaztcbiAgICAgICAgYWN0aXZlU2xpZGVzLnB1c2goZ2V0U2xpZGVCeUluZGV4KGluZGV4KSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGFjdGl2ZVNsaWRlcy5wdXNoKGdldFNsaWRlQnlJbmRleChzd2lwZXIuYWN0aXZlSW5kZXgpKTtcbiAgfSAvLyBGaW5kIG5ldyBoZWlnaHQgZnJvbSBoaWdoZXN0IHNsaWRlIGluIHZpZXdcblxuXG4gIGZvciAoaSA9IDA7IGkgPCBhY3RpdmVTbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAodHlwZW9mIGFjdGl2ZVNsaWRlc1tpXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnN0IGhlaWdodCA9IGFjdGl2ZVNsaWRlc1tpXS5vZmZzZXRIZWlnaHQ7XG4gICAgICBuZXdIZWlnaHQgPSBoZWlnaHQgPiBuZXdIZWlnaHQgPyBoZWlnaHQgOiBuZXdIZWlnaHQ7XG4gICAgfVxuICB9IC8vIFVwZGF0ZSBIZWlnaHRcblxuXG4gIGlmIChuZXdIZWlnaHQpIHN3aXBlci4kd3JhcHBlckVsLmNzcygnaGVpZ2h0JywgYCR7bmV3SGVpZ2h0fXB4YCk7XG59IiwiaW1wb3J0ICQgZnJvbSAnLi4vLi4vc2hhcmVkL2RvbS5qcyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGRhdGVDbGlja2VkU2xpZGUoZSkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCBwYXJhbXMgPSBzd2lwZXIucGFyYW1zO1xuICBjb25zdCBzbGlkZSA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoYC4ke3BhcmFtcy5zbGlkZUNsYXNzfWApWzBdO1xuICBsZXQgc2xpZGVGb3VuZCA9IGZhbHNlO1xuICBsZXQgc2xpZGVJbmRleDtcblxuICBpZiAoc2xpZGUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN3aXBlci5zbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChzd2lwZXIuc2xpZGVzW2ldID09PSBzbGlkZSkge1xuICAgICAgICBzbGlkZUZvdW5kID0gdHJ1ZTtcbiAgICAgICAgc2xpZGVJbmRleCA9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChzbGlkZSAmJiBzbGlkZUZvdW5kKSB7XG4gICAgc3dpcGVyLmNsaWNrZWRTbGlkZSA9IHNsaWRlO1xuXG4gICAgaWYgKHN3aXBlci52aXJ0dWFsICYmIHN3aXBlci5wYXJhbXMudmlydHVhbC5lbmFibGVkKSB7XG4gICAgICBzd2lwZXIuY2xpY2tlZEluZGV4ID0gcGFyc2VJbnQoJChzbGlkZSkuYXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKSwgMTApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzd2lwZXIuY2xpY2tlZEluZGV4ID0gc2xpZGVJbmRleDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgc3dpcGVyLmNsaWNrZWRTbGlkZSA9IHVuZGVmaW5lZDtcbiAgICBzd2lwZXIuY2xpY2tlZEluZGV4ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChwYXJhbXMuc2xpZGVUb0NsaWNrZWRTbGlkZSAmJiBzd2lwZXIuY2xpY2tlZEluZGV4ICE9PSB1bmRlZmluZWQgJiYgc3dpcGVyLmNsaWNrZWRJbmRleCAhPT0gc3dpcGVyLmFjdGl2ZUluZGV4KSB7XG4gICAgc3dpcGVyLnNsaWRlVG9DbGlja2VkU2xpZGUoKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZVByb2dyZXNzKHRyYW5zbGF0ZSkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuXG4gIGlmICh0eXBlb2YgdHJhbnNsYXRlID09PSAndW5kZWZpbmVkJykge1xuICAgIGNvbnN0IG11bHRpcGxpZXIgPSBzd2lwZXIucnRsVHJhbnNsYXRlID8gLTEgOiAxOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcblxuICAgIHRyYW5zbGF0ZSA9IHN3aXBlciAmJiBzd2lwZXIudHJhbnNsYXRlICYmIHN3aXBlci50cmFuc2xhdGUgKiBtdWx0aXBsaWVyIHx8IDA7XG4gIH1cblxuICBjb25zdCBwYXJhbXMgPSBzd2lwZXIucGFyYW1zO1xuICBjb25zdCB0cmFuc2xhdGVzRGlmZiA9IHN3aXBlci5tYXhUcmFuc2xhdGUoKSAtIHN3aXBlci5taW5UcmFuc2xhdGUoKTtcbiAgbGV0IHtcbiAgICBwcm9ncmVzcyxcbiAgICBpc0JlZ2lubmluZyxcbiAgICBpc0VuZFxuICB9ID0gc3dpcGVyO1xuICBjb25zdCB3YXNCZWdpbm5pbmcgPSBpc0JlZ2lubmluZztcbiAgY29uc3Qgd2FzRW5kID0gaXNFbmQ7XG5cbiAgaWYgKHRyYW5zbGF0ZXNEaWZmID09PSAwKSB7XG4gICAgcHJvZ3Jlc3MgPSAwO1xuICAgIGlzQmVnaW5uaW5nID0gdHJ1ZTtcbiAgICBpc0VuZCA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcHJvZ3Jlc3MgPSAodHJhbnNsYXRlIC0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpKSAvIHRyYW5zbGF0ZXNEaWZmO1xuICAgIGlzQmVnaW5uaW5nID0gcHJvZ3Jlc3MgPD0gMDtcbiAgICBpc0VuZCA9IHByb2dyZXNzID49IDE7XG4gIH1cblxuICBPYmplY3QuYXNzaWduKHN3aXBlciwge1xuICAgIHByb2dyZXNzLFxuICAgIGlzQmVnaW5uaW5nLFxuICAgIGlzRW5kXG4gIH0pO1xuICBpZiAocGFyYW1zLndhdGNoU2xpZGVzUHJvZ3Jlc3MgfHwgcGFyYW1zLmNlbnRlcmVkU2xpZGVzICYmIHBhcmFtcy5hdXRvSGVpZ2h0KSBzd2lwZXIudXBkYXRlU2xpZGVzUHJvZ3Jlc3ModHJhbnNsYXRlKTtcblxuICBpZiAoaXNCZWdpbm5pbmcgJiYgIXdhc0JlZ2lubmluZykge1xuICAgIHN3aXBlci5lbWl0KCdyZWFjaEJlZ2lubmluZyB0b0VkZ2UnKTtcbiAgfVxuXG4gIGlmIChpc0VuZCAmJiAhd2FzRW5kKSB7XG4gICAgc3dpcGVyLmVtaXQoJ3JlYWNoRW5kIHRvRWRnZScpO1xuICB9XG5cbiAgaWYgKHdhc0JlZ2lubmluZyAmJiAhaXNCZWdpbm5pbmcgfHwgd2FzRW5kICYmICFpc0VuZCkge1xuICAgIHN3aXBlci5lbWl0KCdmcm9tRWRnZScpO1xuICB9XG5cbiAgc3dpcGVyLmVtaXQoJ3Byb2dyZXNzJywgcHJvZ3Jlc3MpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZVNpemUoKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGxldCB3aWR0aDtcbiAgbGV0IGhlaWdodDtcbiAgY29uc3QgJGVsID0gc3dpcGVyLiRlbDtcblxuICBpZiAodHlwZW9mIHN3aXBlci5wYXJhbXMud2lkdGggIT09ICd1bmRlZmluZWQnICYmIHN3aXBlci5wYXJhbXMud2lkdGggIT09IG51bGwpIHtcbiAgICB3aWR0aCA9IHN3aXBlci5wYXJhbXMud2lkdGg7XG4gIH0gZWxzZSB7XG4gICAgd2lkdGggPSAkZWxbMF0uY2xpZW50V2lkdGg7XG4gIH1cblxuICBpZiAodHlwZW9mIHN3aXBlci5wYXJhbXMuaGVpZ2h0ICE9PSAndW5kZWZpbmVkJyAmJiBzd2lwZXIucGFyYW1zLmhlaWdodCAhPT0gbnVsbCkge1xuICAgIGhlaWdodCA9IHN3aXBlci5wYXJhbXMuaGVpZ2h0O1xuICB9IGVsc2Uge1xuICAgIGhlaWdodCA9ICRlbFswXS5jbGllbnRIZWlnaHQ7XG4gIH1cblxuICBpZiAod2lkdGggPT09IDAgJiYgc3dpcGVyLmlzSG9yaXpvbnRhbCgpIHx8IGhlaWdodCA9PT0gMCAmJiBzd2lwZXIuaXNWZXJ0aWNhbCgpKSB7XG4gICAgcmV0dXJuO1xuICB9IC8vIFN1YnRyYWN0IHBhZGRpbmdzXG5cblxuICB3aWR0aCA9IHdpZHRoIC0gcGFyc2VJbnQoJGVsLmNzcygncGFkZGluZy1sZWZ0JykgfHwgMCwgMTApIC0gcGFyc2VJbnQoJGVsLmNzcygncGFkZGluZy1yaWdodCcpIHx8IDAsIDEwKTtcbiAgaGVpZ2h0ID0gaGVpZ2h0IC0gcGFyc2VJbnQoJGVsLmNzcygncGFkZGluZy10b3AnKSB8fCAwLCAxMCkgLSBwYXJzZUludCgkZWwuY3NzKCdwYWRkaW5nLWJvdHRvbScpIHx8IDAsIDEwKTtcbiAgaWYgKE51bWJlci5pc05hTih3aWR0aCkpIHdpZHRoID0gMDtcbiAgaWYgKE51bWJlci5pc05hTihoZWlnaHQpKSBoZWlnaHQgPSAwO1xuICBPYmplY3QuYXNzaWduKHN3aXBlciwge1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBzaXplOiBzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyB3aWR0aCA6IGhlaWdodFxuICB9KTtcbn0iLCJpbXBvcnQgeyBzZXRDU1NQcm9wZXJ0eSB9IGZyb20gJy4uLy4uL3NoYXJlZC91dGlscy5qcyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGRhdGVTbGlkZXMoKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG5cbiAgZnVuY3Rpb24gZ2V0RGlyZWN0aW9uTGFiZWwocHJvcGVydHkpIHtcbiAgICBpZiAoc3dpcGVyLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICByZXR1cm4gcHJvcGVydHk7XG4gICAgfSAvLyBwcmV0dGllci1pZ25vcmVcblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICd3aWR0aCc6ICdoZWlnaHQnLFxuICAgICAgJ21hcmdpbi10b3AnOiAnbWFyZ2luLWxlZnQnLFxuICAgICAgJ21hcmdpbi1ib3R0b20gJzogJ21hcmdpbi1yaWdodCcsXG4gICAgICAnbWFyZ2luLWxlZnQnOiAnbWFyZ2luLXRvcCcsXG4gICAgICAnbWFyZ2luLXJpZ2h0JzogJ21hcmdpbi1ib3R0b20nLFxuICAgICAgJ3BhZGRpbmctbGVmdCc6ICdwYWRkaW5nLXRvcCcsXG4gICAgICAncGFkZGluZy1yaWdodCc6ICdwYWRkaW5nLWJvdHRvbScsXG4gICAgICAnbWFyZ2luUmlnaHQnOiAnbWFyZ2luQm90dG9tJ1xuICAgIH1bcHJvcGVydHldO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RGlyZWN0aW9uUHJvcGVydHlWYWx1ZShub2RlLCBsYWJlbCkge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KG5vZGUuZ2V0UHJvcGVydHlWYWx1ZShnZXREaXJlY3Rpb25MYWJlbChsYWJlbCkpIHx8IDApO1xuICB9XG5cbiAgY29uc3QgcGFyYW1zID0gc3dpcGVyLnBhcmFtcztcbiAgY29uc3Qge1xuICAgICR3cmFwcGVyRWwsXG4gICAgc2l6ZTogc3dpcGVyU2l6ZSxcbiAgICBydGxUcmFuc2xhdGU6IHJ0bCxcbiAgICB3cm9uZ1JUTFxuICB9ID0gc3dpcGVyO1xuICBjb25zdCBpc1ZpcnR1YWwgPSBzd2lwZXIudmlydHVhbCAmJiBwYXJhbXMudmlydHVhbC5lbmFibGVkO1xuICBjb25zdCBwcmV2aW91c1NsaWRlc0xlbmd0aCA9IGlzVmlydHVhbCA/IHN3aXBlci52aXJ0dWFsLnNsaWRlcy5sZW5ndGggOiBzd2lwZXIuc2xpZGVzLmxlbmd0aDtcbiAgY29uc3Qgc2xpZGVzID0gJHdyYXBwZXJFbC5jaGlsZHJlbihgLiR7c3dpcGVyLnBhcmFtcy5zbGlkZUNsYXNzfWApO1xuICBjb25zdCBzbGlkZXNMZW5ndGggPSBpc1ZpcnR1YWwgPyBzd2lwZXIudmlydHVhbC5zbGlkZXMubGVuZ3RoIDogc2xpZGVzLmxlbmd0aDtcbiAgbGV0IHNuYXBHcmlkID0gW107XG4gIGNvbnN0IHNsaWRlc0dyaWQgPSBbXTtcbiAgY29uc3Qgc2xpZGVzU2l6ZXNHcmlkID0gW107XG4gIGxldCBvZmZzZXRCZWZvcmUgPSBwYXJhbXMuc2xpZGVzT2Zmc2V0QmVmb3JlO1xuXG4gIGlmICh0eXBlb2Ygb2Zmc2V0QmVmb3JlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb2Zmc2V0QmVmb3JlID0gcGFyYW1zLnNsaWRlc09mZnNldEJlZm9yZS5jYWxsKHN3aXBlcik7XG4gIH1cblxuICBsZXQgb2Zmc2V0QWZ0ZXIgPSBwYXJhbXMuc2xpZGVzT2Zmc2V0QWZ0ZXI7XG5cbiAgaWYgKHR5cGVvZiBvZmZzZXRBZnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9mZnNldEFmdGVyID0gcGFyYW1zLnNsaWRlc09mZnNldEFmdGVyLmNhbGwoc3dpcGVyKTtcbiAgfVxuXG4gIGNvbnN0IHByZXZpb3VzU25hcEdyaWRMZW5ndGggPSBzd2lwZXIuc25hcEdyaWQubGVuZ3RoO1xuICBjb25zdCBwcmV2aW91c1NsaWRlc0dyaWRMZW5ndGggPSBzd2lwZXIuc2xpZGVzR3JpZC5sZW5ndGg7XG4gIGxldCBzcGFjZUJldHdlZW4gPSBwYXJhbXMuc3BhY2VCZXR3ZWVuO1xuICBsZXQgc2xpZGVQb3NpdGlvbiA9IC1vZmZzZXRCZWZvcmU7XG4gIGxldCBwcmV2U2xpZGVTaXplID0gMDtcbiAgbGV0IGluZGV4ID0gMDtcblxuICBpZiAodHlwZW9mIHN3aXBlclNpemUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBzcGFjZUJldHdlZW4gPT09ICdzdHJpbmcnICYmIHNwYWNlQmV0d2Vlbi5pbmRleE9mKCclJykgPj0gMCkge1xuICAgIHNwYWNlQmV0d2VlbiA9IHBhcnNlRmxvYXQoc3BhY2VCZXR3ZWVuLnJlcGxhY2UoJyUnLCAnJykpIC8gMTAwICogc3dpcGVyU2l6ZTtcbiAgfVxuXG4gIHN3aXBlci52aXJ0dWFsU2l6ZSA9IC1zcGFjZUJldHdlZW47IC8vIHJlc2V0IG1hcmdpbnNcblxuICBpZiAocnRsKSBzbGlkZXMuY3NzKHtcbiAgICBtYXJnaW5MZWZ0OiAnJyxcbiAgICBtYXJnaW5Cb3R0b206ICcnLFxuICAgIG1hcmdpblRvcDogJydcbiAgfSk7ZWxzZSBzbGlkZXMuY3NzKHtcbiAgICBtYXJnaW5SaWdodDogJycsXG4gICAgbWFyZ2luQm90dG9tOiAnJyxcbiAgICBtYXJnaW5Ub3A6ICcnXG4gIH0pOyAvLyByZXNldCBjc3NNb2RlIG9mZnNldHNcblxuICBpZiAocGFyYW1zLmNlbnRlcmVkU2xpZGVzICYmIHBhcmFtcy5jc3NNb2RlKSB7XG4gICAgc2V0Q1NTUHJvcGVydHkoc3dpcGVyLndyYXBwZXJFbCwgJy0tc3dpcGVyLWNlbnRlcmVkLW9mZnNldC1iZWZvcmUnLCAnJyk7XG4gICAgc2V0Q1NTUHJvcGVydHkoc3dpcGVyLndyYXBwZXJFbCwgJy0tc3dpcGVyLWNlbnRlcmVkLW9mZnNldC1hZnRlcicsICcnKTtcbiAgfVxuXG4gIGNvbnN0IGdyaWRFbmFibGVkID0gcGFyYW1zLmdyaWQgJiYgcGFyYW1zLmdyaWQucm93cyA+IDEgJiYgc3dpcGVyLmdyaWQ7XG5cbiAgaWYgKGdyaWRFbmFibGVkKSB7XG4gICAgc3dpcGVyLmdyaWQuaW5pdFNsaWRlcyhzbGlkZXNMZW5ndGgpO1xuICB9IC8vIENhbGMgc2xpZGVzXG5cblxuICBsZXQgc2xpZGVTaXplO1xuICBjb25zdCBzaG91bGRSZXNldFNsaWRlU2l6ZSA9IHBhcmFtcy5zbGlkZXNQZXJWaWV3ID09PSAnYXV0bycgJiYgcGFyYW1zLmJyZWFrcG9pbnRzICYmIE9iamVjdC5rZXlzKHBhcmFtcy5icmVha3BvaW50cykuZmlsdGVyKGtleSA9PiB7XG4gICAgcmV0dXJuIHR5cGVvZiBwYXJhbXMuYnJlYWtwb2ludHNba2V5XS5zbGlkZXNQZXJWaWV3ICE9PSAndW5kZWZpbmVkJztcbiAgfSkubGVuZ3RoID4gMDtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNsaWRlc0xlbmd0aDsgaSArPSAxKSB7XG4gICAgc2xpZGVTaXplID0gMDtcbiAgICBjb25zdCBzbGlkZSA9IHNsaWRlcy5lcShpKTtcblxuICAgIGlmIChncmlkRW5hYmxlZCkge1xuICAgICAgc3dpcGVyLmdyaWQudXBkYXRlU2xpZGUoaSwgc2xpZGUsIHNsaWRlc0xlbmd0aCwgZ2V0RGlyZWN0aW9uTGFiZWwpO1xuICAgIH1cblxuICAgIGlmIChzbGlkZS5jc3MoJ2Rpc3BsYXknKSA9PT0gJ25vbmUnKSBjb250aW51ZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gICAgaWYgKHBhcmFtcy5zbGlkZXNQZXJWaWV3ID09PSAnYXV0bycpIHtcbiAgICAgIGlmIChzaG91bGRSZXNldFNsaWRlU2l6ZSkge1xuICAgICAgICBzbGlkZXNbaV0uc3R5bGVbZ2V0RGlyZWN0aW9uTGFiZWwoJ3dpZHRoJyldID0gYGA7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHNsaWRlU3R5bGVzID0gZ2V0Q29tcHV0ZWRTdHlsZShzbGlkZVswXSk7XG4gICAgICBjb25zdCBjdXJyZW50VHJhbnNmb3JtID0gc2xpZGVbMF0uc3R5bGUudHJhbnNmb3JtO1xuICAgICAgY29uc3QgY3VycmVudFdlYktpdFRyYW5zZm9ybSA9IHNsaWRlWzBdLnN0eWxlLndlYmtpdFRyYW5zZm9ybTtcblxuICAgICAgaWYgKGN1cnJlbnRUcmFuc2Zvcm0pIHtcbiAgICAgICAgc2xpZGVbMF0uc3R5bGUudHJhbnNmb3JtID0gJ25vbmUnO1xuICAgICAgfVxuXG4gICAgICBpZiAoY3VycmVudFdlYktpdFRyYW5zZm9ybSkge1xuICAgICAgICBzbGlkZVswXS5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSAnbm9uZSc7XG4gICAgICB9XG5cbiAgICAgIGlmIChwYXJhbXMucm91bmRMZW5ndGhzKSB7XG4gICAgICAgIHNsaWRlU2l6ZSA9IHN3aXBlci5pc0hvcml6b250YWwoKSA/IHNsaWRlLm91dGVyV2lkdGgodHJ1ZSkgOiBzbGlkZS5vdXRlckhlaWdodCh0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgICBjb25zdCB3aWR0aCA9IGdldERpcmVjdGlvblByb3BlcnR5VmFsdWUoc2xpZGVTdHlsZXMsICd3aWR0aCcpO1xuICAgICAgICBjb25zdCBwYWRkaW5nTGVmdCA9IGdldERpcmVjdGlvblByb3BlcnR5VmFsdWUoc2xpZGVTdHlsZXMsICdwYWRkaW5nLWxlZnQnKTtcbiAgICAgICAgY29uc3QgcGFkZGluZ1JpZ2h0ID0gZ2V0RGlyZWN0aW9uUHJvcGVydHlWYWx1ZShzbGlkZVN0eWxlcywgJ3BhZGRpbmctcmlnaHQnKTtcbiAgICAgICAgY29uc3QgbWFyZ2luTGVmdCA9IGdldERpcmVjdGlvblByb3BlcnR5VmFsdWUoc2xpZGVTdHlsZXMsICdtYXJnaW4tbGVmdCcpO1xuICAgICAgICBjb25zdCBtYXJnaW5SaWdodCA9IGdldERpcmVjdGlvblByb3BlcnR5VmFsdWUoc2xpZGVTdHlsZXMsICdtYXJnaW4tcmlnaHQnKTtcbiAgICAgICAgY29uc3QgYm94U2l6aW5nID0gc2xpZGVTdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgnYm94LXNpemluZycpO1xuXG4gICAgICAgIGlmIChib3hTaXppbmcgJiYgYm94U2l6aW5nID09PSAnYm9yZGVyLWJveCcpIHtcbiAgICAgICAgICBzbGlkZVNpemUgPSB3aWR0aCArIG1hcmdpbkxlZnQgKyBtYXJnaW5SaWdodDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBjbGllbnRXaWR0aCxcbiAgICAgICAgICAgIG9mZnNldFdpZHRoXG4gICAgICAgICAgfSA9IHNsaWRlWzBdO1xuICAgICAgICAgIHNsaWRlU2l6ZSA9IHdpZHRoICsgcGFkZGluZ0xlZnQgKyBwYWRkaW5nUmlnaHQgKyBtYXJnaW5MZWZ0ICsgbWFyZ2luUmlnaHQgKyAob2Zmc2V0V2lkdGggLSBjbGllbnRXaWR0aCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGN1cnJlbnRUcmFuc2Zvcm0pIHtcbiAgICAgICAgc2xpZGVbMF0uc3R5bGUudHJhbnNmb3JtID0gY3VycmVudFRyYW5zZm9ybTtcbiAgICAgIH1cblxuICAgICAgaWYgKGN1cnJlbnRXZWJLaXRUcmFuc2Zvcm0pIHtcbiAgICAgICAgc2xpZGVbMF0uc3R5bGUud2Via2l0VHJhbnNmb3JtID0gY3VycmVudFdlYktpdFRyYW5zZm9ybTtcbiAgICAgIH1cblxuICAgICAgaWYgKHBhcmFtcy5yb3VuZExlbmd0aHMpIHNsaWRlU2l6ZSA9IE1hdGguZmxvb3Ioc2xpZGVTaXplKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2xpZGVTaXplID0gKHN3aXBlclNpemUgLSAocGFyYW1zLnNsaWRlc1BlclZpZXcgLSAxKSAqIHNwYWNlQmV0d2VlbikgLyBwYXJhbXMuc2xpZGVzUGVyVmlldztcbiAgICAgIGlmIChwYXJhbXMucm91bmRMZW5ndGhzKSBzbGlkZVNpemUgPSBNYXRoLmZsb29yKHNsaWRlU2l6ZSk7XG5cbiAgICAgIGlmIChzbGlkZXNbaV0pIHtcbiAgICAgICAgc2xpZGVzW2ldLnN0eWxlW2dldERpcmVjdGlvbkxhYmVsKCd3aWR0aCcpXSA9IGAke3NsaWRlU2l6ZX1weGA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHNsaWRlc1tpXSkge1xuICAgICAgc2xpZGVzW2ldLnN3aXBlclNsaWRlU2l6ZSA9IHNsaWRlU2l6ZTtcbiAgICB9XG5cbiAgICBzbGlkZXNTaXplc0dyaWQucHVzaChzbGlkZVNpemUpO1xuXG4gICAgaWYgKHBhcmFtcy5jZW50ZXJlZFNsaWRlcykge1xuICAgICAgc2xpZGVQb3NpdGlvbiA9IHNsaWRlUG9zaXRpb24gKyBzbGlkZVNpemUgLyAyICsgcHJldlNsaWRlU2l6ZSAvIDIgKyBzcGFjZUJldHdlZW47XG4gICAgICBpZiAocHJldlNsaWRlU2l6ZSA9PT0gMCAmJiBpICE9PSAwKSBzbGlkZVBvc2l0aW9uID0gc2xpZGVQb3NpdGlvbiAtIHN3aXBlclNpemUgLyAyIC0gc3BhY2VCZXR3ZWVuO1xuICAgICAgaWYgKGkgPT09IDApIHNsaWRlUG9zaXRpb24gPSBzbGlkZVBvc2l0aW9uIC0gc3dpcGVyU2l6ZSAvIDIgLSBzcGFjZUJldHdlZW47XG4gICAgICBpZiAoTWF0aC5hYnMoc2xpZGVQb3NpdGlvbikgPCAxIC8gMTAwMCkgc2xpZGVQb3NpdGlvbiA9IDA7XG4gICAgICBpZiAocGFyYW1zLnJvdW5kTGVuZ3Rocykgc2xpZGVQb3NpdGlvbiA9IE1hdGguZmxvb3Ioc2xpZGVQb3NpdGlvbik7XG4gICAgICBpZiAoaW5kZXggJSBwYXJhbXMuc2xpZGVzUGVyR3JvdXAgPT09IDApIHNuYXBHcmlkLnB1c2goc2xpZGVQb3NpdGlvbik7XG4gICAgICBzbGlkZXNHcmlkLnB1c2goc2xpZGVQb3NpdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwYXJhbXMucm91bmRMZW5ndGhzKSBzbGlkZVBvc2l0aW9uID0gTWF0aC5mbG9vcihzbGlkZVBvc2l0aW9uKTtcbiAgICAgIGlmICgoaW5kZXggLSBNYXRoLm1pbihzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwU2tpcCwgaW5kZXgpKSAlIHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyR3JvdXAgPT09IDApIHNuYXBHcmlkLnB1c2goc2xpZGVQb3NpdGlvbik7XG4gICAgICBzbGlkZXNHcmlkLnB1c2goc2xpZGVQb3NpdGlvbik7XG4gICAgICBzbGlkZVBvc2l0aW9uID0gc2xpZGVQb3NpdGlvbiArIHNsaWRlU2l6ZSArIHNwYWNlQmV0d2VlbjtcbiAgICB9XG5cbiAgICBzd2lwZXIudmlydHVhbFNpemUgKz0gc2xpZGVTaXplICsgc3BhY2VCZXR3ZWVuO1xuICAgIHByZXZTbGlkZVNpemUgPSBzbGlkZVNpemU7XG4gICAgaW5kZXggKz0gMTtcbiAgfVxuXG4gIHN3aXBlci52aXJ0dWFsU2l6ZSA9IE1hdGgubWF4KHN3aXBlci52aXJ0dWFsU2l6ZSwgc3dpcGVyU2l6ZSkgKyBvZmZzZXRBZnRlcjtcblxuICBpZiAocnRsICYmIHdyb25nUlRMICYmIChwYXJhbXMuZWZmZWN0ID09PSAnc2xpZGUnIHx8IHBhcmFtcy5lZmZlY3QgPT09ICdjb3ZlcmZsb3cnKSkge1xuICAgICR3cmFwcGVyRWwuY3NzKHtcbiAgICAgIHdpZHRoOiBgJHtzd2lwZXIudmlydHVhbFNpemUgKyBwYXJhbXMuc3BhY2VCZXR3ZWVufXB4YFxuICAgIH0pO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5zZXRXcmFwcGVyU2l6ZSkge1xuICAgICR3cmFwcGVyRWwuY3NzKHtcbiAgICAgIFtnZXREaXJlY3Rpb25MYWJlbCgnd2lkdGgnKV06IGAke3N3aXBlci52aXJ0dWFsU2l6ZSArIHBhcmFtcy5zcGFjZUJldHdlZW59cHhgXG4gICAgfSk7XG4gIH1cblxuICBpZiAoZ3JpZEVuYWJsZWQpIHtcbiAgICBzd2lwZXIuZ3JpZC51cGRhdGVXcmFwcGVyU2l6ZShzbGlkZVNpemUsIHNuYXBHcmlkLCBnZXREaXJlY3Rpb25MYWJlbCk7XG4gIH0gLy8gUmVtb3ZlIGxhc3QgZ3JpZCBlbGVtZW50cyBkZXBlbmRpbmcgb24gd2lkdGhcblxuXG4gIGlmICghcGFyYW1zLmNlbnRlcmVkU2xpZGVzKSB7XG4gICAgY29uc3QgbmV3U2xpZGVzR3JpZCA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbmFwR3JpZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgbGV0IHNsaWRlc0dyaWRJdGVtID0gc25hcEdyaWRbaV07XG4gICAgICBpZiAocGFyYW1zLnJvdW5kTGVuZ3Rocykgc2xpZGVzR3JpZEl0ZW0gPSBNYXRoLmZsb29yKHNsaWRlc0dyaWRJdGVtKTtcblxuICAgICAgaWYgKHNuYXBHcmlkW2ldIDw9IHN3aXBlci52aXJ0dWFsU2l6ZSAtIHN3aXBlclNpemUpIHtcbiAgICAgICAgbmV3U2xpZGVzR3JpZC5wdXNoKHNsaWRlc0dyaWRJdGVtKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzbmFwR3JpZCA9IG5ld1NsaWRlc0dyaWQ7XG5cbiAgICBpZiAoTWF0aC5mbG9vcihzd2lwZXIudmlydHVhbFNpemUgLSBzd2lwZXJTaXplKSAtIE1hdGguZmxvb3Ioc25hcEdyaWRbc25hcEdyaWQubGVuZ3RoIC0gMV0pID4gMSkge1xuICAgICAgc25hcEdyaWQucHVzaChzd2lwZXIudmlydHVhbFNpemUgLSBzd2lwZXJTaXplKTtcbiAgICB9XG4gIH1cblxuICBpZiAoc25hcEdyaWQubGVuZ3RoID09PSAwKSBzbmFwR3JpZCA9IFswXTtcblxuICBpZiAocGFyYW1zLnNwYWNlQmV0d2VlbiAhPT0gMCkge1xuICAgIGNvbnN0IGtleSA9IHN3aXBlci5pc0hvcml6b250YWwoKSAmJiBydGwgPyAnbWFyZ2luTGVmdCcgOiBnZXREaXJlY3Rpb25MYWJlbCgnbWFyZ2luUmlnaHQnKTtcbiAgICBzbGlkZXMuZmlsdGVyKChfLCBzbGlkZUluZGV4KSA9PiB7XG4gICAgICBpZiAoIXBhcmFtcy5jc3NNb2RlKSByZXR1cm4gdHJ1ZTtcblxuICAgICAgaWYgKHNsaWRlSW5kZXggPT09IHNsaWRlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSkuY3NzKHtcbiAgICAgIFtrZXldOiBgJHtzcGFjZUJldHdlZW59cHhgXG4gICAgfSk7XG4gIH1cblxuICBpZiAocGFyYW1zLmNlbnRlcmVkU2xpZGVzICYmIHBhcmFtcy5jZW50ZXJlZFNsaWRlc0JvdW5kcykge1xuICAgIGxldCBhbGxTbGlkZXNTaXplID0gMDtcbiAgICBzbGlkZXNTaXplc0dyaWQuZm9yRWFjaChzbGlkZVNpemVWYWx1ZSA9PiB7XG4gICAgICBhbGxTbGlkZXNTaXplICs9IHNsaWRlU2l6ZVZhbHVlICsgKHBhcmFtcy5zcGFjZUJldHdlZW4gPyBwYXJhbXMuc3BhY2VCZXR3ZWVuIDogMCk7XG4gICAgfSk7XG4gICAgYWxsU2xpZGVzU2l6ZSAtPSBwYXJhbXMuc3BhY2VCZXR3ZWVuO1xuICAgIGNvbnN0IG1heFNuYXAgPSBhbGxTbGlkZXNTaXplIC0gc3dpcGVyU2l6ZTtcbiAgICBzbmFwR3JpZCA9IHNuYXBHcmlkLm1hcChzbmFwID0+IHtcbiAgICAgIGlmIChzbmFwIDwgMCkgcmV0dXJuIC1vZmZzZXRCZWZvcmU7XG4gICAgICBpZiAoc25hcCA+IG1heFNuYXApIHJldHVybiBtYXhTbmFwICsgb2Zmc2V0QWZ0ZXI7XG4gICAgICByZXR1cm4gc25hcDtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChwYXJhbXMuY2VudGVySW5zdWZmaWNpZW50U2xpZGVzKSB7XG4gICAgbGV0IGFsbFNsaWRlc1NpemUgPSAwO1xuICAgIHNsaWRlc1NpemVzR3JpZC5mb3JFYWNoKHNsaWRlU2l6ZVZhbHVlID0+IHtcbiAgICAgIGFsbFNsaWRlc1NpemUgKz0gc2xpZGVTaXplVmFsdWUgKyAocGFyYW1zLnNwYWNlQmV0d2VlbiA/IHBhcmFtcy5zcGFjZUJldHdlZW4gOiAwKTtcbiAgICB9KTtcbiAgICBhbGxTbGlkZXNTaXplIC09IHBhcmFtcy5zcGFjZUJldHdlZW47XG5cbiAgICBpZiAoYWxsU2xpZGVzU2l6ZSA8IHN3aXBlclNpemUpIHtcbiAgICAgIGNvbnN0IGFsbFNsaWRlc09mZnNldCA9IChzd2lwZXJTaXplIC0gYWxsU2xpZGVzU2l6ZSkgLyAyO1xuICAgICAgc25hcEdyaWQuZm9yRWFjaCgoc25hcCwgc25hcEluZGV4KSA9PiB7XG4gICAgICAgIHNuYXBHcmlkW3NuYXBJbmRleF0gPSBzbmFwIC0gYWxsU2xpZGVzT2Zmc2V0O1xuICAgICAgfSk7XG4gICAgICBzbGlkZXNHcmlkLmZvckVhY2goKHNuYXAsIHNuYXBJbmRleCkgPT4ge1xuICAgICAgICBzbGlkZXNHcmlkW3NuYXBJbmRleF0gPSBzbmFwICsgYWxsU2xpZGVzT2Zmc2V0O1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmFzc2lnbihzd2lwZXIsIHtcbiAgICBzbGlkZXMsXG4gICAgc25hcEdyaWQsXG4gICAgc2xpZGVzR3JpZCxcbiAgICBzbGlkZXNTaXplc0dyaWRcbiAgfSk7XG5cbiAgaWYgKHBhcmFtcy5jZW50ZXJlZFNsaWRlcyAmJiBwYXJhbXMuY3NzTW9kZSAmJiAhcGFyYW1zLmNlbnRlcmVkU2xpZGVzQm91bmRzKSB7XG4gICAgc2V0Q1NTUHJvcGVydHkoc3dpcGVyLndyYXBwZXJFbCwgJy0tc3dpcGVyLWNlbnRlcmVkLW9mZnNldC1iZWZvcmUnLCBgJHstc25hcEdyaWRbMF19cHhgKTtcbiAgICBzZXRDU1NQcm9wZXJ0eShzd2lwZXIud3JhcHBlckVsLCAnLS1zd2lwZXItY2VudGVyZWQtb2Zmc2V0LWFmdGVyJywgYCR7c3dpcGVyLnNpemUgLyAyIC0gc2xpZGVzU2l6ZXNHcmlkW3NsaWRlc1NpemVzR3JpZC5sZW5ndGggLSAxXSAvIDJ9cHhgKTtcbiAgICBjb25zdCBhZGRUb1NuYXBHcmlkID0gLXN3aXBlci5zbmFwR3JpZFswXTtcbiAgICBjb25zdCBhZGRUb1NsaWRlc0dyaWQgPSAtc3dpcGVyLnNsaWRlc0dyaWRbMF07XG4gICAgc3dpcGVyLnNuYXBHcmlkID0gc3dpcGVyLnNuYXBHcmlkLm1hcCh2ID0+IHYgKyBhZGRUb1NuYXBHcmlkKTtcbiAgICBzd2lwZXIuc2xpZGVzR3JpZCA9IHN3aXBlci5zbGlkZXNHcmlkLm1hcCh2ID0+IHYgKyBhZGRUb1NsaWRlc0dyaWQpO1xuICB9XG5cbiAgaWYgKHNsaWRlc0xlbmd0aCAhPT0gcHJldmlvdXNTbGlkZXNMZW5ndGgpIHtcbiAgICBzd2lwZXIuZW1pdCgnc2xpZGVzTGVuZ3RoQ2hhbmdlJyk7XG4gIH1cblxuICBpZiAoc25hcEdyaWQubGVuZ3RoICE9PSBwcmV2aW91c1NuYXBHcmlkTGVuZ3RoKSB7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMud2F0Y2hPdmVyZmxvdykgc3dpcGVyLmNoZWNrT3ZlcmZsb3coKTtcbiAgICBzd2lwZXIuZW1pdCgnc25hcEdyaWRMZW5ndGhDaGFuZ2UnKTtcbiAgfVxuXG4gIGlmIChzbGlkZXNHcmlkLmxlbmd0aCAhPT0gcHJldmlvdXNTbGlkZXNHcmlkTGVuZ3RoKSB7XG4gICAgc3dpcGVyLmVtaXQoJ3NsaWRlc0dyaWRMZW5ndGhDaGFuZ2UnKTtcbiAgfVxuXG4gIGlmIChwYXJhbXMud2F0Y2hTbGlkZXNQcm9ncmVzcykge1xuICAgIHN3aXBlci51cGRhdGVTbGlkZXNPZmZzZXQoKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZVNsaWRlc0NsYXNzZXMoKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IHtcbiAgICBzbGlkZXMsXG4gICAgcGFyYW1zLFxuICAgICR3cmFwcGVyRWwsXG4gICAgYWN0aXZlSW5kZXgsXG4gICAgcmVhbEluZGV4XG4gIH0gPSBzd2lwZXI7XG4gIGNvbnN0IGlzVmlydHVhbCA9IHN3aXBlci52aXJ0dWFsICYmIHBhcmFtcy52aXJ0dWFsLmVuYWJsZWQ7XG4gIHNsaWRlcy5yZW1vdmVDbGFzcyhgJHtwYXJhbXMuc2xpZGVBY3RpdmVDbGFzc30gJHtwYXJhbXMuc2xpZGVOZXh0Q2xhc3N9ICR7cGFyYW1zLnNsaWRlUHJldkNsYXNzfSAke3BhcmFtcy5zbGlkZUR1cGxpY2F0ZUFjdGl2ZUNsYXNzfSAke3BhcmFtcy5zbGlkZUR1cGxpY2F0ZU5leHRDbGFzc30gJHtwYXJhbXMuc2xpZGVEdXBsaWNhdGVQcmV2Q2xhc3N9YCk7XG4gIGxldCBhY3RpdmVTbGlkZTtcblxuICBpZiAoaXNWaXJ0dWFsKSB7XG4gICAgYWN0aXZlU2xpZGUgPSBzd2lwZXIuJHdyYXBwZXJFbC5maW5kKGAuJHtwYXJhbXMuc2xpZGVDbGFzc31bZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XCIke2FjdGl2ZUluZGV4fVwiXWApO1xuICB9IGVsc2Uge1xuICAgIGFjdGl2ZVNsaWRlID0gc2xpZGVzLmVxKGFjdGl2ZUluZGV4KTtcbiAgfSAvLyBBY3RpdmUgY2xhc3Nlc1xuXG5cbiAgYWN0aXZlU2xpZGUuYWRkQ2xhc3MocGFyYW1zLnNsaWRlQWN0aXZlQ2xhc3MpO1xuXG4gIGlmIChwYXJhbXMubG9vcCkge1xuICAgIC8vIER1cGxpY2F0ZSB0byBhbGwgbG9vcGVkIHNsaWRlc1xuICAgIGlmIChhY3RpdmVTbGlkZS5oYXNDbGFzcyhwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcykpIHtcbiAgICAgICR3cmFwcGVyRWwuY2hpbGRyZW4oYC4ke3BhcmFtcy5zbGlkZUNsYXNzfTpub3QoLiR7cGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3N9KVtkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIiR7cmVhbEluZGV4fVwiXWApLmFkZENsYXNzKHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUFjdGl2ZUNsYXNzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJHdyYXBwZXJFbC5jaGlsZHJlbihgLiR7cGFyYW1zLnNsaWRlQ2xhc3N9LiR7cGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3N9W2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJHtyZWFsSW5kZXh9XCJdYCkuYWRkQ2xhc3MocGFyYW1zLnNsaWRlRHVwbGljYXRlQWN0aXZlQ2xhc3MpO1xuICAgIH1cbiAgfSAvLyBOZXh0IFNsaWRlXG5cblxuICBsZXQgbmV4dFNsaWRlID0gYWN0aXZlU2xpZGUubmV4dEFsbChgLiR7cGFyYW1zLnNsaWRlQ2xhc3N9YCkuZXEoMCkuYWRkQ2xhc3MocGFyYW1zLnNsaWRlTmV4dENsYXNzKTtcblxuICBpZiAocGFyYW1zLmxvb3AgJiYgbmV4dFNsaWRlLmxlbmd0aCA9PT0gMCkge1xuICAgIG5leHRTbGlkZSA9IHNsaWRlcy5lcSgwKTtcbiAgICBuZXh0U2xpZGUuYWRkQ2xhc3MocGFyYW1zLnNsaWRlTmV4dENsYXNzKTtcbiAgfSAvLyBQcmV2IFNsaWRlXG5cblxuICBsZXQgcHJldlNsaWRlID0gYWN0aXZlU2xpZGUucHJldkFsbChgLiR7cGFyYW1zLnNsaWRlQ2xhc3N9YCkuZXEoMCkuYWRkQ2xhc3MocGFyYW1zLnNsaWRlUHJldkNsYXNzKTtcblxuICBpZiAocGFyYW1zLmxvb3AgJiYgcHJldlNsaWRlLmxlbmd0aCA9PT0gMCkge1xuICAgIHByZXZTbGlkZSA9IHNsaWRlcy5lcSgtMSk7XG4gICAgcHJldlNsaWRlLmFkZENsYXNzKHBhcmFtcy5zbGlkZVByZXZDbGFzcyk7XG4gIH1cblxuICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICAvLyBEdXBsaWNhdGUgdG8gYWxsIGxvb3BlZCBzbGlkZXNcbiAgICBpZiAobmV4dFNsaWRlLmhhc0NsYXNzKHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSkge1xuICAgICAgJHdyYXBwZXJFbC5jaGlsZHJlbihgLiR7cGFyYW1zLnNsaWRlQ2xhc3N9Om5vdCguJHtwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzc30pW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJHtuZXh0U2xpZGUuYXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKX1cIl1gKS5hZGRDbGFzcyhwYXJhbXMuc2xpZGVEdXBsaWNhdGVOZXh0Q2xhc3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkd3JhcHBlckVsLmNoaWxkcmVuKGAuJHtwYXJhbXMuc2xpZGVDbGFzc30uJHtwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzc31bZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XCIke25leHRTbGlkZS5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpfVwiXWApLmFkZENsYXNzKHBhcmFtcy5zbGlkZUR1cGxpY2F0ZU5leHRDbGFzcyk7XG4gICAgfVxuXG4gICAgaWYgKHByZXZTbGlkZS5oYXNDbGFzcyhwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcykpIHtcbiAgICAgICR3cmFwcGVyRWwuY2hpbGRyZW4oYC4ke3BhcmFtcy5zbGlkZUNsYXNzfTpub3QoLiR7cGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3N9KVtkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIiR7cHJldlNsaWRlLmF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4Jyl9XCJdYCkuYWRkQ2xhc3MocGFyYW1zLnNsaWRlRHVwbGljYXRlUHJldkNsYXNzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJHdyYXBwZXJFbC5jaGlsZHJlbihgLiR7cGFyYW1zLnNsaWRlQ2xhc3N9LiR7cGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3N9W2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJHtwcmV2U2xpZGUuYXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKX1cIl1gKS5hZGRDbGFzcyhwYXJhbXMuc2xpZGVEdXBsaWNhdGVQcmV2Q2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIHN3aXBlci5lbWl0U2xpZGVzQ2xhc3NlcygpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZVNsaWRlc09mZnNldCgpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3Qgc2xpZGVzID0gc3dpcGVyLnNsaWRlcztcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHNsaWRlc1tpXS5zd2lwZXJTbGlkZU9mZnNldCA9IHN3aXBlci5pc0hvcml6b250YWwoKSA/IHNsaWRlc1tpXS5vZmZzZXRMZWZ0IDogc2xpZGVzW2ldLm9mZnNldFRvcDtcbiAgfVxufSIsImltcG9ydCAkIGZyb20gJy4uLy4uL3NoYXJlZC9kb20uanMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlU2xpZGVzUHJvZ3Jlc3ModHJhbnNsYXRlID0gdGhpcyAmJiB0aGlzLnRyYW5zbGF0ZSB8fCAwKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IHBhcmFtcyA9IHN3aXBlci5wYXJhbXM7XG4gIGNvbnN0IHtcbiAgICBzbGlkZXMsXG4gICAgcnRsVHJhbnNsYXRlOiBydGxcbiAgfSA9IHN3aXBlcjtcbiAgaWYgKHNsaWRlcy5sZW5ndGggPT09IDApIHJldHVybjtcbiAgaWYgKHR5cGVvZiBzbGlkZXNbMF0uc3dpcGVyU2xpZGVPZmZzZXQgPT09ICd1bmRlZmluZWQnKSBzd2lwZXIudXBkYXRlU2xpZGVzT2Zmc2V0KCk7XG4gIGxldCBvZmZzZXRDZW50ZXIgPSAtdHJhbnNsYXRlO1xuICBpZiAocnRsKSBvZmZzZXRDZW50ZXIgPSB0cmFuc2xhdGU7IC8vIFZpc2libGUgU2xpZGVzXG5cbiAgc2xpZGVzLnJlbW92ZUNsYXNzKHBhcmFtcy5zbGlkZVZpc2libGVDbGFzcyk7XG4gIHN3aXBlci52aXNpYmxlU2xpZGVzSW5kZXhlcyA9IFtdO1xuICBzd2lwZXIudmlzaWJsZVNsaWRlcyA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3Qgc2xpZGUgPSBzbGlkZXNbaV07XG4gICAgbGV0IHNsaWRlT2Zmc2V0ID0gc2xpZGUuc3dpcGVyU2xpZGVPZmZzZXQ7XG5cbiAgICBpZiAocGFyYW1zLmNzc01vZGUgJiYgcGFyYW1zLmNlbnRlcmVkU2xpZGVzKSB7XG4gICAgICBzbGlkZU9mZnNldCAtPSBzbGlkZXNbMF0uc3dpcGVyU2xpZGVPZmZzZXQ7XG4gICAgfVxuXG4gICAgY29uc3Qgc2xpZGVQcm9ncmVzcyA9IChvZmZzZXRDZW50ZXIgKyAocGFyYW1zLmNlbnRlcmVkU2xpZGVzID8gc3dpcGVyLm1pblRyYW5zbGF0ZSgpIDogMCkgLSBzbGlkZU9mZnNldCkgLyAoc2xpZGUuc3dpcGVyU2xpZGVTaXplICsgcGFyYW1zLnNwYWNlQmV0d2Vlbik7XG4gICAgY29uc3Qgc2xpZGVCZWZvcmUgPSAtKG9mZnNldENlbnRlciAtIHNsaWRlT2Zmc2V0KTtcbiAgICBjb25zdCBzbGlkZUFmdGVyID0gc2xpZGVCZWZvcmUgKyBzd2lwZXIuc2xpZGVzU2l6ZXNHcmlkW2ldO1xuICAgIGNvbnN0IGlzVmlzaWJsZSA9IHNsaWRlQmVmb3JlID49IDAgJiYgc2xpZGVCZWZvcmUgPCBzd2lwZXIuc2l6ZSAtIDEgfHwgc2xpZGVBZnRlciA+IDEgJiYgc2xpZGVBZnRlciA8PSBzd2lwZXIuc2l6ZSB8fCBzbGlkZUJlZm9yZSA8PSAwICYmIHNsaWRlQWZ0ZXIgPj0gc3dpcGVyLnNpemU7XG5cbiAgICBpZiAoaXNWaXNpYmxlKSB7XG4gICAgICBzd2lwZXIudmlzaWJsZVNsaWRlcy5wdXNoKHNsaWRlKTtcbiAgICAgIHN3aXBlci52aXNpYmxlU2xpZGVzSW5kZXhlcy5wdXNoKGkpO1xuICAgICAgc2xpZGVzLmVxKGkpLmFkZENsYXNzKHBhcmFtcy5zbGlkZVZpc2libGVDbGFzcyk7XG4gICAgfVxuXG4gICAgc2xpZGUucHJvZ3Jlc3MgPSBydGwgPyAtc2xpZGVQcm9ncmVzcyA6IHNsaWRlUHJvZ3Jlc3M7XG4gIH1cblxuICBzd2lwZXIudmlzaWJsZVNsaWRlcyA9ICQoc3dpcGVyLnZpc2libGVTbGlkZXMpO1xufSIsImltcG9ydCBjbGFzc2VzVG9TZWxlY3RvciBmcm9tICcuLi8uLi9zaGFyZWQvY2xhc3Nlcy10by1zZWxlY3Rvci5qcyc7XG5pbXBvcnQgJCBmcm9tICcuLi8uLi9zaGFyZWQvZG9tLmpzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEExMXkoe1xuICBzd2lwZXIsXG4gIGV4dGVuZFBhcmFtcyxcbiAgb25cbn0pIHtcbiAgZXh0ZW5kUGFyYW1zKHtcbiAgICBhMTF5OiB7XG4gICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgbm90aWZpY2F0aW9uQ2xhc3M6ICdzd2lwZXItbm90aWZpY2F0aW9uJyxcbiAgICAgIHByZXZTbGlkZU1lc3NhZ2U6ICdQcmV2aW91cyBzbGlkZScsXG4gICAgICBuZXh0U2xpZGVNZXNzYWdlOiAnTmV4dCBzbGlkZScsXG4gICAgICBmaXJzdFNsaWRlTWVzc2FnZTogJ1RoaXMgaXMgdGhlIGZpcnN0IHNsaWRlJyxcbiAgICAgIGxhc3RTbGlkZU1lc3NhZ2U6ICdUaGlzIGlzIHRoZSBsYXN0IHNsaWRlJyxcbiAgICAgIHBhZ2luYXRpb25CdWxsZXRNZXNzYWdlOiAnR28gdG8gc2xpZGUge3tpbmRleH19JyxcbiAgICAgIHNsaWRlTGFiZWxNZXNzYWdlOiAne3tpbmRleH19IC8ge3tzbGlkZXNMZW5ndGh9fScsXG4gICAgICBjb250YWluZXJNZXNzYWdlOiBudWxsLFxuICAgICAgY29udGFpbmVyUm9sZURlc2NyaXB0aW9uTWVzc2FnZTogbnVsbCxcbiAgICAgIGl0ZW1Sb2xlRGVzY3JpcHRpb25NZXNzYWdlOiBudWxsLFxuICAgICAgc2xpZGVSb2xlOiAnZ3JvdXAnXG4gICAgfVxuICB9KTtcbiAgbGV0IGxpdmVSZWdpb24gPSBudWxsO1xuXG4gIGZ1bmN0aW9uIG5vdGlmeShtZXNzYWdlKSB7XG4gICAgY29uc3Qgbm90aWZpY2F0aW9uID0gbGl2ZVJlZ2lvbjtcbiAgICBpZiAobm90aWZpY2F0aW9uLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgIG5vdGlmaWNhdGlvbi5odG1sKCcnKTtcbiAgICBub3RpZmljYXRpb24uaHRtbChtZXNzYWdlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFJhbmRvbU51bWJlcihzaXplID0gMTYpIHtcbiAgICBjb25zdCByYW5kb21DaGFyID0gKCkgPT4gTWF0aC5yb3VuZCgxNiAqIE1hdGgucmFuZG9tKCkpLnRvU3RyaW5nKDE2KTtcblxuICAgIHJldHVybiAneCcucmVwZWF0KHNpemUpLnJlcGxhY2UoL3gvZywgcmFuZG9tQ2hhcik7XG4gIH1cblxuICBmdW5jdGlvbiBtYWtlRWxGb2N1c2FibGUoJGVsKSB7XG4gICAgJGVsLmF0dHIoJ3RhYkluZGV4JywgJzAnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1ha2VFbE5vdEZvY3VzYWJsZSgkZWwpIHtcbiAgICAkZWwuYXR0cigndGFiSW5kZXgnLCAnLTEnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZEVsUm9sZSgkZWwsIHJvbGUpIHtcbiAgICAkZWwuYXR0cigncm9sZScsIHJvbGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkRWxSb2xlRGVzY3JpcHRpb24oJGVsLCBkZXNjcmlwdGlvbikge1xuICAgICRlbC5hdHRyKCdhcmlhLXJvbGVkZXNjcmlwdGlvbicsIGRlc2NyaXB0aW9uKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZEVsQ29udHJvbHMoJGVsLCBjb250cm9scykge1xuICAgICRlbC5hdHRyKCdhcmlhLWNvbnRyb2xzJywgY29udHJvbHMpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkRWxMYWJlbCgkZWwsIGxhYmVsKSB7XG4gICAgJGVsLmF0dHIoJ2FyaWEtbGFiZWwnLCBsYWJlbCk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRFbElkKCRlbCwgaWQpIHtcbiAgICAkZWwuYXR0cignaWQnLCBpZCk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRFbExpdmUoJGVsLCBsaXZlKSB7XG4gICAgJGVsLmF0dHIoJ2FyaWEtbGl2ZScsIGxpdmUpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGlzYWJsZUVsKCRlbCkge1xuICAgICRlbC5hdHRyKCdhcmlhLWRpc2FibGVkJywgdHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBlbmFibGVFbCgkZWwpIHtcbiAgICAkZWwuYXR0cignYXJpYS1kaXNhYmxlZCcsIGZhbHNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRW50ZXJPclNwYWNlS2V5KGUpIHtcbiAgICBpZiAoZS5rZXlDb2RlICE9PSAxMyAmJiBlLmtleUNvZGUgIT09IDMyKSByZXR1cm47XG4gICAgY29uc3QgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy5hMTF5O1xuICAgIGNvbnN0ICR0YXJnZXRFbCA9ICQoZS50YXJnZXQpO1xuXG4gICAgaWYgKHN3aXBlci5uYXZpZ2F0aW9uICYmIHN3aXBlci5uYXZpZ2F0aW9uLiRuZXh0RWwgJiYgJHRhcmdldEVsLmlzKHN3aXBlci5uYXZpZ2F0aW9uLiRuZXh0RWwpKSB7XG4gICAgICBpZiAoIShzd2lwZXIuaXNFbmQgJiYgIXN3aXBlci5wYXJhbXMubG9vcCkpIHtcbiAgICAgICAgc3dpcGVyLnNsaWRlTmV4dCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3dpcGVyLmlzRW5kKSB7XG4gICAgICAgIG5vdGlmeShwYXJhbXMubGFzdFNsaWRlTWVzc2FnZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub3RpZnkocGFyYW1zLm5leHRTbGlkZU1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzd2lwZXIubmF2aWdhdGlvbiAmJiBzd2lwZXIubmF2aWdhdGlvbi4kcHJldkVsICYmICR0YXJnZXRFbC5pcyhzd2lwZXIubmF2aWdhdGlvbi4kcHJldkVsKSkge1xuICAgICAgaWYgKCEoc3dpcGVyLmlzQmVnaW5uaW5nICYmICFzd2lwZXIucGFyYW1zLmxvb3ApKSB7XG4gICAgICAgIHN3aXBlci5zbGlkZVByZXYoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN3aXBlci5pc0JlZ2lubmluZykge1xuICAgICAgICBub3RpZnkocGFyYW1zLmZpcnN0U2xpZGVNZXNzYWdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vdGlmeShwYXJhbXMucHJldlNsaWRlTWVzc2FnZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN3aXBlci5wYWdpbmF0aW9uICYmICR0YXJnZXRFbC5pcyhjbGFzc2VzVG9TZWxlY3Rvcihzd2lwZXIucGFyYW1zLnBhZ2luYXRpb24uYnVsbGV0Q2xhc3MpKSkge1xuICAgICAgJHRhcmdldEVsWzBdLmNsaWNrKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlTmF2aWdhdGlvbigpIHtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5sb29wIHx8ICFzd2lwZXIubmF2aWdhdGlvbikgcmV0dXJuO1xuICAgIGNvbnN0IHtcbiAgICAgICRuZXh0RWwsXG4gICAgICAkcHJldkVsXG4gICAgfSA9IHN3aXBlci5uYXZpZ2F0aW9uO1xuXG4gICAgaWYgKCRwcmV2RWwgJiYgJHByZXZFbC5sZW5ndGggPiAwKSB7XG4gICAgICBpZiAoc3dpcGVyLmlzQmVnaW5uaW5nKSB7XG4gICAgICAgIGRpc2FibGVFbCgkcHJldkVsKTtcbiAgICAgICAgbWFrZUVsTm90Rm9jdXNhYmxlKCRwcmV2RWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZW5hYmxlRWwoJHByZXZFbCk7XG4gICAgICAgIG1ha2VFbEZvY3VzYWJsZSgkcHJldkVsKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoJG5leHRFbCAmJiAkbmV4dEVsLmxlbmd0aCA+IDApIHtcbiAgICAgIGlmIChzd2lwZXIuaXNFbmQpIHtcbiAgICAgICAgZGlzYWJsZUVsKCRuZXh0RWwpO1xuICAgICAgICBtYWtlRWxOb3RGb2N1c2FibGUoJG5leHRFbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbmFibGVFbCgkbmV4dEVsKTtcbiAgICAgICAgbWFrZUVsRm9jdXNhYmxlKCRuZXh0RWwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhc1BhZ2luYXRpb24oKSB7XG4gICAgcmV0dXJuIHN3aXBlci5wYWdpbmF0aW9uICYmIHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbi5jbGlja2FibGUgJiYgc3dpcGVyLnBhZ2luYXRpb24uYnVsbGV0cyAmJiBzd2lwZXIucGFnaW5hdGlvbi5idWxsZXRzLmxlbmd0aDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVBhZ2luYXRpb24oKSB7XG4gICAgY29uc3QgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy5hMTF5O1xuXG4gICAgaWYgKGhhc1BhZ2luYXRpb24oKSkge1xuICAgICAgc3dpcGVyLnBhZ2luYXRpb24uYnVsbGV0cy5lYWNoKGJ1bGxldEVsID0+IHtcbiAgICAgICAgY29uc3QgJGJ1bGxldEVsID0gJChidWxsZXRFbCk7XG4gICAgICAgIG1ha2VFbEZvY3VzYWJsZSgkYnVsbGV0RWwpO1xuXG4gICAgICAgIGlmICghc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uLnJlbmRlckJ1bGxldCkge1xuICAgICAgICAgIGFkZEVsUm9sZSgkYnVsbGV0RWwsICdidXR0b24nKTtcbiAgICAgICAgICBhZGRFbExhYmVsKCRidWxsZXRFbCwgcGFyYW1zLnBhZ2luYXRpb25CdWxsZXRNZXNzYWdlLnJlcGxhY2UoL1xce1xce2luZGV4XFx9XFx9LywgJGJ1bGxldEVsLmluZGV4KCkgKyAxKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGluaXROYXZFbCA9ICgkZWwsIHdyYXBwZXJJZCwgbWVzc2FnZSkgPT4ge1xuICAgIG1ha2VFbEZvY3VzYWJsZSgkZWwpO1xuXG4gICAgaWYgKCRlbFswXS50YWdOYW1lICE9PSAnQlVUVE9OJykge1xuICAgICAgYWRkRWxSb2xlKCRlbCwgJ2J1dHRvbicpO1xuICAgICAgJGVsLm9uKCdrZXlkb3duJywgb25FbnRlck9yU3BhY2VLZXkpO1xuICAgIH1cblxuICAgIGFkZEVsTGFiZWwoJGVsLCBtZXNzYWdlKTtcbiAgICBhZGRFbENvbnRyb2xzKCRlbCwgd3JhcHBlcklkKTtcbiAgfTtcblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIGNvbnN0IHBhcmFtcyA9IHN3aXBlci5wYXJhbXMuYTExeTtcbiAgICBzd2lwZXIuJGVsLmFwcGVuZChsaXZlUmVnaW9uKTsgLy8gQ29udGFpbmVyXG5cbiAgICBjb25zdCAkY29udGFpbmVyRWwgPSBzd2lwZXIuJGVsO1xuXG4gICAgaWYgKHBhcmFtcy5jb250YWluZXJSb2xlRGVzY3JpcHRpb25NZXNzYWdlKSB7XG4gICAgICBhZGRFbFJvbGVEZXNjcmlwdGlvbigkY29udGFpbmVyRWwsIHBhcmFtcy5jb250YWluZXJSb2xlRGVzY3JpcHRpb25NZXNzYWdlKTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLmNvbnRhaW5lck1lc3NhZ2UpIHtcbiAgICAgIGFkZEVsTGFiZWwoJGNvbnRhaW5lckVsLCBwYXJhbXMuY29udGFpbmVyTWVzc2FnZSk7XG4gICAgfSAvLyBXcmFwcGVyXG5cblxuICAgIGNvbnN0ICR3cmFwcGVyRWwgPSBzd2lwZXIuJHdyYXBwZXJFbDtcbiAgICBjb25zdCB3cmFwcGVySWQgPSAkd3JhcHBlckVsLmF0dHIoJ2lkJykgfHwgYHN3aXBlci13cmFwcGVyLSR7Z2V0UmFuZG9tTnVtYmVyKDE2KX1gO1xuICAgIGNvbnN0IGxpdmUgPSBzd2lwZXIucGFyYW1zLmF1dG9wbGF5ICYmIHN3aXBlci5wYXJhbXMuYXV0b3BsYXkuZW5hYmxlZCA/ICdvZmYnIDogJ3BvbGl0ZSc7XG4gICAgYWRkRWxJZCgkd3JhcHBlckVsLCB3cmFwcGVySWQpO1xuICAgIGFkZEVsTGl2ZSgkd3JhcHBlckVsLCBsaXZlKTsgLy8gU2xpZGVcblxuICAgIGlmIChwYXJhbXMuaXRlbVJvbGVEZXNjcmlwdGlvbk1lc3NhZ2UpIHtcbiAgICAgIGFkZEVsUm9sZURlc2NyaXB0aW9uKCQoc3dpcGVyLnNsaWRlcyksIHBhcmFtcy5pdGVtUm9sZURlc2NyaXB0aW9uTWVzc2FnZSk7XG4gICAgfVxuXG4gICAgYWRkRWxSb2xlKCQoc3dpcGVyLnNsaWRlcyksIHBhcmFtcy5zbGlkZVJvbGUpO1xuICAgIGNvbnN0IHNsaWRlc0xlbmd0aCA9IHN3aXBlci5wYXJhbXMubG9vcCA/IHN3aXBlci5zbGlkZXMuZmlsdGVyKGVsID0+ICFlbC5jbGFzc0xpc3QuY29udGFpbnMoc3dpcGVyLnBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSkubGVuZ3RoIDogc3dpcGVyLnNsaWRlcy5sZW5ndGg7XG4gICAgc3dpcGVyLnNsaWRlcy5lYWNoKChzbGlkZUVsLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgJHNsaWRlRWwgPSAkKHNsaWRlRWwpO1xuICAgICAgY29uc3Qgc2xpZGVJbmRleCA9IHN3aXBlci5wYXJhbXMubG9vcCA/IHBhcnNlSW50KCRzbGlkZUVsLmF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JyksIDEwKSA6IGluZGV4O1xuICAgICAgY29uc3QgYXJpYUxhYmVsTWVzc2FnZSA9IHBhcmFtcy5zbGlkZUxhYmVsTWVzc2FnZS5yZXBsYWNlKC9cXHtcXHtpbmRleFxcfVxcfS8sIHNsaWRlSW5kZXggKyAxKS5yZXBsYWNlKC9cXHtcXHtzbGlkZXNMZW5ndGhcXH1cXH0vLCBzbGlkZXNMZW5ndGgpO1xuICAgICAgYWRkRWxMYWJlbCgkc2xpZGVFbCwgYXJpYUxhYmVsTWVzc2FnZSk7XG4gICAgfSk7IC8vIE5hdmlnYXRpb25cblxuICAgIGxldCAkbmV4dEVsO1xuICAgIGxldCAkcHJldkVsO1xuXG4gICAgaWYgKHN3aXBlci5uYXZpZ2F0aW9uICYmIHN3aXBlci5uYXZpZ2F0aW9uLiRuZXh0RWwpIHtcbiAgICAgICRuZXh0RWwgPSBzd2lwZXIubmF2aWdhdGlvbi4kbmV4dEVsO1xuICAgIH1cblxuICAgIGlmIChzd2lwZXIubmF2aWdhdGlvbiAmJiBzd2lwZXIubmF2aWdhdGlvbi4kcHJldkVsKSB7XG4gICAgICAkcHJldkVsID0gc3dpcGVyLm5hdmlnYXRpb24uJHByZXZFbDtcbiAgICB9XG5cbiAgICBpZiAoJG5leHRFbCAmJiAkbmV4dEVsLmxlbmd0aCkge1xuICAgICAgaW5pdE5hdkVsKCRuZXh0RWwsIHdyYXBwZXJJZCwgcGFyYW1zLm5leHRTbGlkZU1lc3NhZ2UpO1xuICAgIH1cblxuICAgIGlmICgkcHJldkVsICYmICRwcmV2RWwubGVuZ3RoKSB7XG4gICAgICBpbml0TmF2RWwoJHByZXZFbCwgd3JhcHBlcklkLCBwYXJhbXMucHJldlNsaWRlTWVzc2FnZSk7XG4gICAgfSAvLyBQYWdpbmF0aW9uXG5cblxuICAgIGlmIChoYXNQYWdpbmF0aW9uKCkpIHtcbiAgICAgIHN3aXBlci5wYWdpbmF0aW9uLiRlbC5vbigna2V5ZG93bicsIGNsYXNzZXNUb1NlbGVjdG9yKHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbi5idWxsZXRDbGFzcyksIG9uRW50ZXJPclNwYWNlS2V5KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIGlmIChsaXZlUmVnaW9uICYmIGxpdmVSZWdpb24ubGVuZ3RoID4gMCkgbGl2ZVJlZ2lvbi5yZW1vdmUoKTtcbiAgICBsZXQgJG5leHRFbDtcbiAgICBsZXQgJHByZXZFbDtcblxuICAgIGlmIChzd2lwZXIubmF2aWdhdGlvbiAmJiBzd2lwZXIubmF2aWdhdGlvbi4kbmV4dEVsKSB7XG4gICAgICAkbmV4dEVsID0gc3dpcGVyLm5hdmlnYXRpb24uJG5leHRFbDtcbiAgICB9XG5cbiAgICBpZiAoc3dpcGVyLm5hdmlnYXRpb24gJiYgc3dpcGVyLm5hdmlnYXRpb24uJHByZXZFbCkge1xuICAgICAgJHByZXZFbCA9IHN3aXBlci5uYXZpZ2F0aW9uLiRwcmV2RWw7XG4gICAgfVxuXG4gICAgaWYgKCRuZXh0RWwpIHtcbiAgICAgICRuZXh0RWwub2ZmKCdrZXlkb3duJywgb25FbnRlck9yU3BhY2VLZXkpO1xuICAgIH1cblxuICAgIGlmICgkcHJldkVsKSB7XG4gICAgICAkcHJldkVsLm9mZigna2V5ZG93bicsIG9uRW50ZXJPclNwYWNlS2V5KTtcbiAgICB9IC8vIFBhZ2luYXRpb25cblxuXG4gICAgaWYgKGhhc1BhZ2luYXRpb24oKSkge1xuICAgICAgc3dpcGVyLnBhZ2luYXRpb24uJGVsLm9mZigna2V5ZG93bicsIGNsYXNzZXNUb1NlbGVjdG9yKHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbi5idWxsZXRDbGFzcyksIG9uRW50ZXJPclNwYWNlS2V5KTtcbiAgICB9XG4gIH1cblxuICBvbignYmVmb3JlSW5pdCcsICgpID0+IHtcbiAgICBsaXZlUmVnaW9uID0gJChgPHNwYW4gY2xhc3M9XCIke3N3aXBlci5wYXJhbXMuYTExeS5ub3RpZmljYXRpb25DbGFzc31cIiBhcmlhLWxpdmU9XCJhc3NlcnRpdmVcIiBhcmlhLWF0b21pYz1cInRydWVcIj48L3NwYW4+YCk7XG4gIH0pO1xuICBvbignYWZ0ZXJJbml0JywgKCkgPT4ge1xuICAgIGlmICghc3dpcGVyLnBhcmFtcy5hMTF5LmVuYWJsZWQpIHJldHVybjtcbiAgICBpbml0KCk7XG4gICAgdXBkYXRlTmF2aWdhdGlvbigpO1xuICB9KTtcbiAgb24oJ3RvRWRnZScsICgpID0+IHtcbiAgICBpZiAoIXN3aXBlci5wYXJhbXMuYTExeS5lbmFibGVkKSByZXR1cm47XG4gICAgdXBkYXRlTmF2aWdhdGlvbigpO1xuICB9KTtcbiAgb24oJ2Zyb21FZGdlJywgKCkgPT4ge1xuICAgIGlmICghc3dpcGVyLnBhcmFtcy5hMTF5LmVuYWJsZWQpIHJldHVybjtcbiAgICB1cGRhdGVOYXZpZ2F0aW9uKCk7XG4gIH0pO1xuICBvbigncGFnaW5hdGlvblVwZGF0ZScsICgpID0+IHtcbiAgICBpZiAoIXN3aXBlci5wYXJhbXMuYTExeS5lbmFibGVkKSByZXR1cm47XG4gICAgdXBkYXRlUGFnaW5hdGlvbigpO1xuICB9KTtcbiAgb24oJ2Rlc3Ryb3knLCAoKSA9PiB7XG4gICAgaWYgKCFzd2lwZXIucGFyYW1zLmExMXkuZW5hYmxlZCkgcmV0dXJuO1xuICAgIGRlc3Ryb3koKTtcbiAgfSk7XG59IiwiLyogZXNsaW50IG5vLXVuZGVyc2NvcmUtZGFuZ2xlOiBcIm9mZlwiICovXG5cbi8qIGVzbGludCBuby11c2UtYmVmb3JlLWRlZmluZTogXCJvZmZcIiAqL1xuaW1wb3J0IHsgZ2V0RG9jdW1lbnQgfSBmcm9tICdzc3Itd2luZG93JztcbmltcG9ydCB7IG5leHRUaWNrIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3V0aWxzLmpzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF1dG9wbGF5KHtcbiAgc3dpcGVyLFxuICBleHRlbmRQYXJhbXMsXG4gIG9uLFxuICBlbWl0XG59KSB7XG4gIGxldCB0aW1lb3V0O1xuICBzd2lwZXIuYXV0b3BsYXkgPSB7XG4gICAgcnVubmluZzogZmFsc2UsXG4gICAgcGF1c2VkOiBmYWxzZVxuICB9O1xuICBleHRlbmRQYXJhbXMoe1xuICAgIGF1dG9wbGF5OiB7XG4gICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgIGRlbGF5OiAzMDAwLFxuICAgICAgd2FpdEZvclRyYW5zaXRpb246IHRydWUsXG4gICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogdHJ1ZSxcbiAgICAgIHN0b3BPbkxhc3RTbGlkZTogZmFsc2UsXG4gICAgICByZXZlcnNlRGlyZWN0aW9uOiBmYWxzZSxcbiAgICAgIHBhdXNlT25Nb3VzZUVudGVyOiBmYWxzZVxuICAgIH1cbiAgfSk7XG5cbiAgZnVuY3Rpb24gcnVuKCkge1xuICAgIGNvbnN0ICRhY3RpdmVTbGlkZUVsID0gc3dpcGVyLnNsaWRlcy5lcShzd2lwZXIuYWN0aXZlSW5kZXgpO1xuICAgIGxldCBkZWxheSA9IHN3aXBlci5wYXJhbXMuYXV0b3BsYXkuZGVsYXk7XG5cbiAgICBpZiAoJGFjdGl2ZVNsaWRlRWwuYXR0cignZGF0YS1zd2lwZXItYXV0b3BsYXknKSkge1xuICAgICAgZGVsYXkgPSAkYWN0aXZlU2xpZGVFbC5hdHRyKCdkYXRhLXN3aXBlci1hdXRvcGxheScpIHx8IHN3aXBlci5wYXJhbXMuYXV0b3BsYXkuZGVsYXk7XG4gICAgfVxuXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIHRpbWVvdXQgPSBuZXh0VGljaygoKSA9PiB7XG4gICAgICBsZXQgYXV0b3BsYXlSZXN1bHQ7XG5cbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLmF1dG9wbGF5LnJldmVyc2VEaXJlY3Rpb24pIHtcbiAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMubG9vcCkge1xuICAgICAgICAgIHN3aXBlci5sb29wRml4KCk7XG4gICAgICAgICAgYXV0b3BsYXlSZXN1bHQgPSBzd2lwZXIuc2xpZGVQcmV2KHN3aXBlci5wYXJhbXMuc3BlZWQsIHRydWUsIHRydWUpO1xuICAgICAgICAgIGVtaXQoJ2F1dG9wbGF5Jyk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXN3aXBlci5pc0JlZ2lubmluZykge1xuICAgICAgICAgIGF1dG9wbGF5UmVzdWx0ID0gc3dpcGVyLnNsaWRlUHJldihzd2lwZXIucGFyYW1zLnNwZWVkLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICBlbWl0KCdhdXRvcGxheScpO1xuICAgICAgICB9IGVsc2UgaWYgKCFzd2lwZXIucGFyYW1zLmF1dG9wbGF5LnN0b3BPbkxhc3RTbGlkZSkge1xuICAgICAgICAgIGF1dG9wbGF5UmVzdWx0ID0gc3dpcGVyLnNsaWRlVG8oc3dpcGVyLnNsaWRlcy5sZW5ndGggLSAxLCBzd2lwZXIucGFyYW1zLnNwZWVkLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICBlbWl0KCdhdXRvcGxheScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzd2lwZXIucGFyYW1zLmxvb3ApIHtcbiAgICAgICAgc3dpcGVyLmxvb3BGaXgoKTtcbiAgICAgICAgYXV0b3BsYXlSZXN1bHQgPSBzd2lwZXIuc2xpZGVOZXh0KHN3aXBlci5wYXJhbXMuc3BlZWQsIHRydWUsIHRydWUpO1xuICAgICAgICBlbWl0KCdhdXRvcGxheScpO1xuICAgICAgfSBlbHNlIGlmICghc3dpcGVyLmlzRW5kKSB7XG4gICAgICAgIGF1dG9wbGF5UmVzdWx0ID0gc3dpcGVyLnNsaWRlTmV4dChzd2lwZXIucGFyYW1zLnNwZWVkLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgZW1pdCgnYXV0b3BsYXknKTtcbiAgICAgIH0gZWxzZSBpZiAoIXN3aXBlci5wYXJhbXMuYXV0b3BsYXkuc3RvcE9uTGFzdFNsaWRlKSB7XG4gICAgICAgIGF1dG9wbGF5UmVzdWx0ID0gc3dpcGVyLnNsaWRlVG8oMCwgc3dpcGVyLnBhcmFtcy5zcGVlZCwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIGVtaXQoJ2F1dG9wbGF5Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdG9wKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLmNzc01vZGUgJiYgc3dpcGVyLmF1dG9wbGF5LnJ1bm5pbmcpIHJ1bigpO2Vsc2UgaWYgKGF1dG9wbGF5UmVzdWx0ID09PSBmYWxzZSkge1xuICAgICAgICBydW4oKTtcbiAgICAgIH1cbiAgICB9LCBkZWxheSk7XG4gIH1cblxuICBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICBpZiAodHlwZW9mIHRpbWVvdXQgIT09ICd1bmRlZmluZWQnKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHN3aXBlci5hdXRvcGxheS5ydW5uaW5nKSByZXR1cm4gZmFsc2U7XG4gICAgc3dpcGVyLmF1dG9wbGF5LnJ1bm5pbmcgPSB0cnVlO1xuICAgIGVtaXQoJ2F1dG9wbGF5U3RhcnQnKTtcbiAgICBydW4oKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgaWYgKCFzd2lwZXIuYXV0b3BsYXkucnVubmluZykgcmV0dXJuIGZhbHNlO1xuICAgIGlmICh0eXBlb2YgdGltZW91dCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBmYWxzZTtcblxuICAgIGlmICh0aW1lb3V0KSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICB0aW1lb3V0ID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHN3aXBlci5hdXRvcGxheS5ydW5uaW5nID0gZmFsc2U7XG4gICAgZW1pdCgnYXV0b3BsYXlTdG9wJyk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBwYXVzZShzcGVlZCkge1xuICAgIGlmICghc3dpcGVyLmF1dG9wbGF5LnJ1bm5pbmcpIHJldHVybjtcbiAgICBpZiAoc3dpcGVyLmF1dG9wbGF5LnBhdXNlZCkgcmV0dXJuO1xuICAgIGlmICh0aW1lb3V0KSBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgc3dpcGVyLmF1dG9wbGF5LnBhdXNlZCA9IHRydWU7XG5cbiAgICBpZiAoc3BlZWQgPT09IDAgfHwgIXN3aXBlci5wYXJhbXMuYXV0b3BsYXkud2FpdEZvclRyYW5zaXRpb24pIHtcbiAgICAgIHN3aXBlci5hdXRvcGxheS5wYXVzZWQgPSBmYWxzZTtcbiAgICAgIHJ1bigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBbJ3RyYW5zaXRpb25lbmQnLCAnd2Via2l0VHJhbnNpdGlvbkVuZCddLmZvckVhY2goZXZlbnQgPT4ge1xuICAgICAgICBzd2lwZXIuJHdyYXBwZXJFbFswXS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBvblRyYW5zaXRpb25FbmQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25WaXNpYmlsaXR5Q2hhbmdlKCkge1xuICAgIGNvbnN0IGRvY3VtZW50ID0gZ2V0RG9jdW1lbnQoKTtcblxuICAgIGlmIChkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgPT09ICdoaWRkZW4nICYmIHN3aXBlci5hdXRvcGxheS5ydW5uaW5nKSB7XG4gICAgICBwYXVzZSgpO1xuICAgIH1cblxuICAgIGlmIChkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgPT09ICd2aXNpYmxlJyAmJiBzd2lwZXIuYXV0b3BsYXkucGF1c2VkKSB7XG4gICAgICBydW4oKTtcbiAgICAgIHN3aXBlci5hdXRvcGxheS5wYXVzZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvblRyYW5zaXRpb25FbmQoZSkge1xuICAgIGlmICghc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQgfHwgIXN3aXBlci4kd3JhcHBlckVsKSByZXR1cm47XG4gICAgaWYgKGUudGFyZ2V0ICE9PSBzd2lwZXIuJHdyYXBwZXJFbFswXSkgcmV0dXJuO1xuICAgIFsndHJhbnNpdGlvbmVuZCcsICd3ZWJraXRUcmFuc2l0aW9uRW5kJ10uZm9yRWFjaChldmVudCA9PiB7XG4gICAgICBzd2lwZXIuJHdyYXBwZXJFbFswXS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBvblRyYW5zaXRpb25FbmQpO1xuICAgIH0pO1xuICAgIHN3aXBlci5hdXRvcGxheS5wYXVzZWQgPSBmYWxzZTtcblxuICAgIGlmICghc3dpcGVyLmF1dG9wbGF5LnJ1bm5pbmcpIHtcbiAgICAgIHN0b3AoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcnVuKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25Nb3VzZUVudGVyKCkge1xuICAgIGlmIChzd2lwZXIucGFyYW1zLmF1dG9wbGF5LmRpc2FibGVPbkludGVyYWN0aW9uKSB7XG4gICAgICBzdG9wKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhdXNlKCk7XG4gICAgfVxuXG4gICAgWyd0cmFuc2l0aW9uZW5kJywgJ3dlYmtpdFRyYW5zaXRpb25FbmQnXS5mb3JFYWNoKGV2ZW50ID0+IHtcbiAgICAgIHN3aXBlci4kd3JhcHBlckVsWzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIG9uVHJhbnNpdGlvbkVuZCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBvbk1vdXNlTGVhdmUoKSB7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMuYXV0b3BsYXkuZGlzYWJsZU9uSW50ZXJhY3Rpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzd2lwZXIuYXV0b3BsYXkucGF1c2VkID0gZmFsc2U7XG4gICAgcnVuKCk7XG4gIH1cblxuICBmdW5jdGlvbiBhdHRhY2hNb3VzZUV2ZW50cygpIHtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5hdXRvcGxheS5wYXVzZU9uTW91c2VFbnRlcikge1xuICAgICAgc3dpcGVyLiRlbC5vbignbW91c2VlbnRlcicsIG9uTW91c2VFbnRlcik7XG4gICAgICBzd2lwZXIuJGVsLm9uKCdtb3VzZWxlYXZlJywgb25Nb3VzZUxlYXZlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkZXRhY2hNb3VzZUV2ZW50cygpIHtcbiAgICBzd2lwZXIuJGVsLm9mZignbW91c2VlbnRlcicsIG9uTW91c2VFbnRlcik7XG4gICAgc3dpcGVyLiRlbC5vZmYoJ21vdXNlbGVhdmUnLCBvbk1vdXNlTGVhdmUpO1xuICB9XG5cbiAgb24oJ2luaXQnLCAoKSA9PiB7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMuYXV0b3BsYXkuZW5hYmxlZCkge1xuICAgICAgc3RhcnQoKTtcbiAgICAgIGNvbnN0IGRvY3VtZW50ID0gZ2V0RG9jdW1lbnQoKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCBvblZpc2liaWxpdHlDaGFuZ2UpO1xuICAgICAgYXR0YWNoTW91c2VFdmVudHMoKTtcbiAgICB9XG4gIH0pO1xuICBvbignYmVmb3JlVHJhbnNpdGlvblN0YXJ0JywgKF9zLCBzcGVlZCwgaW50ZXJuYWwpID0+IHtcbiAgICBpZiAoc3dpcGVyLmF1dG9wbGF5LnJ1bm5pbmcpIHtcbiAgICAgIGlmIChpbnRlcm5hbCB8fCAhc3dpcGVyLnBhcmFtcy5hdXRvcGxheS5kaXNhYmxlT25JbnRlcmFjdGlvbikge1xuICAgICAgICBzd2lwZXIuYXV0b3BsYXkucGF1c2Uoc3BlZWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RvcCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIG9uKCdzbGlkZXJGaXJzdE1vdmUnLCAoKSA9PiB7XG4gICAgaWYgKHN3aXBlci5hdXRvcGxheS5ydW5uaW5nKSB7XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5hdXRvcGxheS5kaXNhYmxlT25JbnRlcmFjdGlvbikge1xuICAgICAgICBzdG9wKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXVzZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIG9uKCd0b3VjaEVuZCcsICgpID0+IHtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5jc3NNb2RlICYmIHN3aXBlci5hdXRvcGxheS5wYXVzZWQgJiYgIXN3aXBlci5wYXJhbXMuYXV0b3BsYXkuZGlzYWJsZU9uSW50ZXJhY3Rpb24pIHtcbiAgICAgIHJ1bigpO1xuICAgIH1cbiAgfSk7XG4gIG9uKCdkZXN0cm95JywgKCkgPT4ge1xuICAgIGRldGFjaE1vdXNlRXZlbnRzKCk7XG5cbiAgICBpZiAoc3dpcGVyLmF1dG9wbGF5LnJ1bm5pbmcpIHtcbiAgICAgIHN0b3AoKTtcbiAgICB9XG5cbiAgICBjb25zdCBkb2N1bWVudCA9IGdldERvY3VtZW50KCk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsIG9uVmlzaWJpbGl0eUNoYW5nZSk7XG4gIH0pO1xuICBPYmplY3QuYXNzaWduKHN3aXBlci5hdXRvcGxheSwge1xuICAgIHBhdXNlLFxuICAgIHJ1bixcbiAgICBzdGFydCxcbiAgICBzdG9wXG4gIH0pO1xufSIsIi8qIGVzbGludCBuby1iaXR3aXNlOiBbXCJlcnJvclwiLCB7IFwiYWxsb3dcIjogW1wiPj5cIl0gfV0gKi9cbmltcG9ydCB7IG5leHRUaWNrIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3V0aWxzLmpzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRyb2xsZXIoe1xuICBzd2lwZXIsXG4gIGV4dGVuZFBhcmFtcyxcbiAgb25cbn0pIHtcbiAgZXh0ZW5kUGFyYW1zKHtcbiAgICBjb250cm9sbGVyOiB7XG4gICAgICBjb250cm9sOiB1bmRlZmluZWQsXG4gICAgICBpbnZlcnNlOiBmYWxzZSxcbiAgICAgIGJ5OiAnc2xpZGUnIC8vIG9yICdjb250YWluZXInXG5cbiAgICB9XG4gIH0pO1xuICBzd2lwZXIuY29udHJvbGxlciA9IHtcbiAgICBjb250cm9sOiB1bmRlZmluZWRcbiAgfTtcblxuICBmdW5jdGlvbiBMaW5lYXJTcGxpbmUoeCwgeSkge1xuICAgIGNvbnN0IGJpbmFyeVNlYXJjaCA9IGZ1bmN0aW9uIHNlYXJjaCgpIHtcbiAgICAgIGxldCBtYXhJbmRleDtcbiAgICAgIGxldCBtaW5JbmRleDtcbiAgICAgIGxldCBndWVzcztcbiAgICAgIHJldHVybiAoYXJyYXksIHZhbCkgPT4ge1xuICAgICAgICBtaW5JbmRleCA9IC0xO1xuICAgICAgICBtYXhJbmRleCA9IGFycmF5Lmxlbmd0aDtcblxuICAgICAgICB3aGlsZSAobWF4SW5kZXggLSBtaW5JbmRleCA+IDEpIHtcbiAgICAgICAgICBndWVzcyA9IG1heEluZGV4ICsgbWluSW5kZXggPj4gMTtcblxuICAgICAgICAgIGlmIChhcnJheVtndWVzc10gPD0gdmFsKSB7XG4gICAgICAgICAgICBtaW5JbmRleCA9IGd1ZXNzO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtYXhJbmRleCA9IGd1ZXNzO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtYXhJbmRleDtcbiAgICAgIH07XG4gICAgfSgpO1xuXG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMubGFzdEluZGV4ID0geC5sZW5ndGggLSAxOyAvLyBHaXZlbiBhbiB4IHZhbHVlICh4MiksIHJldHVybiB0aGUgZXhwZWN0ZWQgeTIgdmFsdWU6XG4gICAgLy8gKHgxLHkxKSBpcyB0aGUga25vd24gcG9pbnQgYmVmb3JlIGdpdmVuIHZhbHVlLFxuICAgIC8vICh4Myx5MykgaXMgdGhlIGtub3duIHBvaW50IGFmdGVyIGdpdmVuIHZhbHVlLlxuXG4gICAgbGV0IGkxO1xuICAgIGxldCBpMztcblxuICAgIHRoaXMuaW50ZXJwb2xhdGUgPSBmdW5jdGlvbiBpbnRlcnBvbGF0ZSh4Mikge1xuICAgICAgaWYgKCF4MikgcmV0dXJuIDA7IC8vIEdldCB0aGUgaW5kZXhlcyBvZiB4MSBhbmQgeDMgKHRoZSBhcnJheSBpbmRleGVzIGJlZm9yZSBhbmQgYWZ0ZXIgZ2l2ZW4geDIpOlxuXG4gICAgICBpMyA9IGJpbmFyeVNlYXJjaCh0aGlzLngsIHgyKTtcbiAgICAgIGkxID0gaTMgLSAxOyAvLyBXZSBoYXZlIG91ciBpbmRleGVzIGkxICYgaTMsIHNvIHdlIGNhbiBjYWxjdWxhdGUgYWxyZWFkeTpcbiAgICAgIC8vIHkyIDo9ICgoeDLiiJJ4MSkgw5cgKHkz4oiSeTEpKSDDtyAoeDPiiJJ4MSkgKyB5MVxuXG4gICAgICByZXR1cm4gKHgyIC0gdGhpcy54W2kxXSkgKiAodGhpcy55W2kzXSAtIHRoaXMueVtpMV0pIC8gKHRoaXMueFtpM10gLSB0aGlzLnhbaTFdKSArIHRoaXMueVtpMV07XG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9IC8vIHh4eDogZm9yIG5vdyBpIHdpbGwganVzdCBzYXZlIG9uZSBzcGxpbmUgZnVuY3Rpb24gdG8gdG9cblxuXG4gIGZ1bmN0aW9uIGdldEludGVycG9sYXRlRnVuY3Rpb24oYykge1xuICAgIGlmICghc3dpcGVyLmNvbnRyb2xsZXIuc3BsaW5lKSB7XG4gICAgICBzd2lwZXIuY29udHJvbGxlci5zcGxpbmUgPSBzd2lwZXIucGFyYW1zLmxvb3AgPyBuZXcgTGluZWFyU3BsaW5lKHN3aXBlci5zbGlkZXNHcmlkLCBjLnNsaWRlc0dyaWQpIDogbmV3IExpbmVhclNwbGluZShzd2lwZXIuc25hcEdyaWQsIGMuc25hcEdyaWQpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFRyYW5zbGF0ZShfdCwgYnlDb250cm9sbGVyKSB7XG4gICAgY29uc3QgY29udHJvbGxlZCA9IHN3aXBlci5jb250cm9sbGVyLmNvbnRyb2w7XG4gICAgbGV0IG11bHRpcGxpZXI7XG4gICAgbGV0IGNvbnRyb2xsZWRUcmFuc2xhdGU7XG4gICAgY29uc3QgU3dpcGVyID0gc3dpcGVyLmNvbnN0cnVjdG9yO1xuXG4gICAgZnVuY3Rpb24gc2V0Q29udHJvbGxlZFRyYW5zbGF0ZShjKSB7XG4gICAgICAvLyB0aGlzIHdpbGwgY3JlYXRlIGFuIEludGVycG9sYXRlIGZ1bmN0aW9uIGJhc2VkIG9uIHRoZSBzbmFwR3JpZHNcbiAgICAgIC8vIHggaXMgdGhlIEdyaWQgb2YgdGhlIHNjcm9sbGVkIHNjcm9sbGVyIGFuZCB5IHdpbGwgYmUgdGhlIGNvbnRyb2xsZWQgc2Nyb2xsZXJcbiAgICAgIC8vIGl0IG1ha2VzIHNlbnNlIHRvIGNyZWF0ZSB0aGlzIG9ubHkgb25jZSBhbmQgcmVjYWxsIGl0IGZvciB0aGUgaW50ZXJwb2xhdGlvblxuICAgICAgLy8gdGhlIGZ1bmN0aW9uIGRvZXMgYSBsb3Qgb2YgdmFsdWUgY2FjaGluZyBmb3IgcGVyZm9ybWFuY2VcbiAgICAgIGNvbnN0IHRyYW5zbGF0ZSA9IHN3aXBlci5ydGxUcmFuc2xhdGUgPyAtc3dpcGVyLnRyYW5zbGF0ZSA6IHN3aXBlci50cmFuc2xhdGU7XG5cbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLmNvbnRyb2xsZXIuYnkgPT09ICdzbGlkZScpIHtcbiAgICAgICAgZ2V0SW50ZXJwb2xhdGVGdW5jdGlvbihjKTsgLy8gaSBhbSBub3Qgc3VyZSB3aHkgdGhlIHZhbHVlcyBoYXZlIHRvIGJlIG11bHRpcGxpY2F0ZWQgdGhpcyB3YXksIHRyaWVkIHRvIGludmVydCB0aGUgc25hcEdyaWRcbiAgICAgICAgLy8gYnV0IGl0IGRpZCBub3Qgd29yayBvdXRcblxuICAgICAgICBjb250cm9sbGVkVHJhbnNsYXRlID0gLXN3aXBlci5jb250cm9sbGVyLnNwbGluZS5pbnRlcnBvbGF0ZSgtdHJhbnNsYXRlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFjb250cm9sbGVkVHJhbnNsYXRlIHx8IHN3aXBlci5wYXJhbXMuY29udHJvbGxlci5ieSA9PT0gJ2NvbnRhaW5lcicpIHtcbiAgICAgICAgbXVsdGlwbGllciA9IChjLm1heFRyYW5zbGF0ZSgpIC0gYy5taW5UcmFuc2xhdGUoKSkgLyAoc3dpcGVyLm1heFRyYW5zbGF0ZSgpIC0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpKTtcbiAgICAgICAgY29udHJvbGxlZFRyYW5zbGF0ZSA9ICh0cmFuc2xhdGUgLSBzd2lwZXIubWluVHJhbnNsYXRlKCkpICogbXVsdGlwbGllciArIGMubWluVHJhbnNsYXRlKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLmNvbnRyb2xsZXIuaW52ZXJzZSkge1xuICAgICAgICBjb250cm9sbGVkVHJhbnNsYXRlID0gYy5tYXhUcmFuc2xhdGUoKSAtIGNvbnRyb2xsZWRUcmFuc2xhdGU7XG4gICAgICB9XG5cbiAgICAgIGMudXBkYXRlUHJvZ3Jlc3MoY29udHJvbGxlZFRyYW5zbGF0ZSk7XG4gICAgICBjLnNldFRyYW5zbGF0ZShjb250cm9sbGVkVHJhbnNsYXRlLCBzd2lwZXIpO1xuICAgICAgYy51cGRhdGVBY3RpdmVJbmRleCgpO1xuICAgICAgYy51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY29udHJvbGxlZCkpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udHJvbGxlZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoY29udHJvbGxlZFtpXSAhPT0gYnlDb250cm9sbGVyICYmIGNvbnRyb2xsZWRbaV0gaW5zdGFuY2VvZiBTd2lwZXIpIHtcbiAgICAgICAgICBzZXRDb250cm9sbGVkVHJhbnNsYXRlKGNvbnRyb2xsZWRbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjb250cm9sbGVkIGluc3RhbmNlb2YgU3dpcGVyICYmIGJ5Q29udHJvbGxlciAhPT0gY29udHJvbGxlZCkge1xuICAgICAgc2V0Q29udHJvbGxlZFRyYW5zbGF0ZShjb250cm9sbGVkKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZXRUcmFuc2l0aW9uKGR1cmF0aW9uLCBieUNvbnRyb2xsZXIpIHtcbiAgICBjb25zdCBTd2lwZXIgPSBzd2lwZXIuY29uc3RydWN0b3I7XG4gICAgY29uc3QgY29udHJvbGxlZCA9IHN3aXBlci5jb250cm9sbGVyLmNvbnRyb2w7XG4gICAgbGV0IGk7XG5cbiAgICBmdW5jdGlvbiBzZXRDb250cm9sbGVkVHJhbnNpdGlvbihjKSB7XG4gICAgICBjLnNldFRyYW5zaXRpb24oZHVyYXRpb24sIHN3aXBlcik7XG5cbiAgICAgIGlmIChkdXJhdGlvbiAhPT0gMCkge1xuICAgICAgICBjLnRyYW5zaXRpb25TdGFydCgpO1xuXG4gICAgICAgIGlmIChjLnBhcmFtcy5hdXRvSGVpZ2h0KSB7XG4gICAgICAgICAgbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgYy51cGRhdGVBdXRvSGVpZ2h0KCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjLiR3cmFwcGVyRWwudHJhbnNpdGlvbkVuZCgoKSA9PiB7XG4gICAgICAgICAgaWYgKCFjb250cm9sbGVkKSByZXR1cm47XG5cbiAgICAgICAgICBpZiAoYy5wYXJhbXMubG9vcCAmJiBzd2lwZXIucGFyYW1zLmNvbnRyb2xsZXIuYnkgPT09ICdzbGlkZScpIHtcbiAgICAgICAgICAgIGMubG9vcEZpeCgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGMudHJhbnNpdGlvbkVuZCgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShjb250cm9sbGVkKSkge1xuICAgICAgZm9yIChpID0gMDsgaSA8IGNvbnRyb2xsZWQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKGNvbnRyb2xsZWRbaV0gIT09IGJ5Q29udHJvbGxlciAmJiBjb250cm9sbGVkW2ldIGluc3RhbmNlb2YgU3dpcGVyKSB7XG4gICAgICAgICAgc2V0Q29udHJvbGxlZFRyYW5zaXRpb24oY29udHJvbGxlZFtpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGNvbnRyb2xsZWQgaW5zdGFuY2VvZiBTd2lwZXIgJiYgYnlDb250cm9sbGVyICE9PSBjb250cm9sbGVkKSB7XG4gICAgICBzZXRDb250cm9sbGVkVHJhbnNpdGlvbihjb250cm9sbGVkKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVTcGxpbmUoKSB7XG4gICAgaWYgKCFzd2lwZXIuY29udHJvbGxlci5jb250cm9sKSByZXR1cm47XG5cbiAgICBpZiAoc3dpcGVyLmNvbnRyb2xsZXIuc3BsaW5lKSB7XG4gICAgICBzd2lwZXIuY29udHJvbGxlci5zcGxpbmUgPSB1bmRlZmluZWQ7XG4gICAgICBkZWxldGUgc3dpcGVyLmNvbnRyb2xsZXIuc3BsaW5lO1xuICAgIH1cbiAgfVxuXG4gIG9uKCdiZWZvcmVJbml0JywgKCkgPT4ge1xuICAgIHN3aXBlci5jb250cm9sbGVyLmNvbnRyb2wgPSBzd2lwZXIucGFyYW1zLmNvbnRyb2xsZXIuY29udHJvbDtcbiAgfSk7XG4gIG9uKCd1cGRhdGUnLCAoKSA9PiB7XG4gICAgcmVtb3ZlU3BsaW5lKCk7XG4gIH0pO1xuICBvbigncmVzaXplJywgKCkgPT4ge1xuICAgIHJlbW92ZVNwbGluZSgpO1xuICB9KTtcbiAgb24oJ29ic2VydmVyVXBkYXRlJywgKCkgPT4ge1xuICAgIHJlbW92ZVNwbGluZSgpO1xuICB9KTtcbiAgb24oJ3NldFRyYW5zbGF0ZScsIChfcywgdHJhbnNsYXRlLCBieUNvbnRyb2xsZXIpID0+IHtcbiAgICBpZiAoIXN3aXBlci5jb250cm9sbGVyLmNvbnRyb2wpIHJldHVybjtcbiAgICBzd2lwZXIuY29udHJvbGxlci5zZXRUcmFuc2xhdGUodHJhbnNsYXRlLCBieUNvbnRyb2xsZXIpO1xuICB9KTtcbiAgb24oJ3NldFRyYW5zaXRpb24nLCAoX3MsIGR1cmF0aW9uLCBieUNvbnRyb2xsZXIpID0+IHtcbiAgICBpZiAoIXN3aXBlci5jb250cm9sbGVyLmNvbnRyb2wpIHJldHVybjtcbiAgICBzd2lwZXIuY29udHJvbGxlci5zZXRUcmFuc2l0aW9uKGR1cmF0aW9uLCBieUNvbnRyb2xsZXIpO1xuICB9KTtcbiAgT2JqZWN0LmFzc2lnbihzd2lwZXIuY29udHJvbGxlciwge1xuICAgIHNldFRyYW5zbGF0ZSxcbiAgICBzZXRUcmFuc2l0aW9uXG4gIH0pO1xufSIsImltcG9ydCBjcmVhdGVTaGFkb3cgZnJvbSAnLi4vLi4vc2hhcmVkL2NyZWF0ZS1zaGFkb3cuanMnO1xuaW1wb3J0IGVmZmVjdEluaXQgZnJvbSAnLi4vLi4vc2hhcmVkL2VmZmVjdC1pbml0LmpzJztcbmltcG9ydCBlZmZlY3RUYXJnZXQgZnJvbSAnLi4vLi4vc2hhcmVkL2VmZmVjdC10YXJnZXQuanMnO1xuaW1wb3J0IGVmZmVjdFZpcnR1YWxUcmFuc2l0aW9uRW5kIGZyb20gJy4uLy4uL3NoYXJlZC9lZmZlY3QtdmlydHVhbC10cmFuc2l0aW9uLWVuZC5qcyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZmZlY3RDYXJkcyh7XG4gIHN3aXBlcixcbiAgZXh0ZW5kUGFyYW1zLFxuICBvblxufSkge1xuICBleHRlbmRQYXJhbXMoe1xuICAgIGNhcmRzRWZmZWN0OiB7XG4gICAgICBzbGlkZVNoYWRvd3M6IHRydWUsXG4gICAgICB0cmFuc2Zvcm1FbDogbnVsbFxuICAgIH1cbiAgfSk7XG5cbiAgY29uc3Qgc2V0VHJhbnNsYXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIHNsaWRlcyxcbiAgICAgIGFjdGl2ZUluZGV4XG4gICAgfSA9IHN3aXBlcjtcbiAgICBjb25zdCBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLmNhcmRzRWZmZWN0O1xuICAgIGNvbnN0IHtcbiAgICAgIHN0YXJ0VHJhbnNsYXRlLFxuICAgICAgaXNUb3VjaGVkXG4gICAgfSA9IHN3aXBlci50b3VjaEV2ZW50c0RhdGE7XG4gICAgY29uc3QgY3VycmVudFRyYW5zbGF0ZSA9IHN3aXBlci50cmFuc2xhdGU7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgJHNsaWRlRWwgPSBzbGlkZXMuZXEoaSk7XG4gICAgICBjb25zdCBzbGlkZVByb2dyZXNzID0gJHNsaWRlRWxbMF0ucHJvZ3Jlc3M7XG4gICAgICBjb25zdCBwcm9ncmVzcyA9IE1hdGgubWluKE1hdGgubWF4KHNsaWRlUHJvZ3Jlc3MsIC00KSwgNCk7XG4gICAgICBsZXQgb2Zmc2V0ID0gJHNsaWRlRWxbMF0uc3dpcGVyU2xpZGVPZmZzZXQ7XG5cbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLmNlbnRlcmVkU2xpZGVzICYmICFzd2lwZXIucGFyYW1zLmNzc01vZGUpIHtcbiAgICAgICAgc3dpcGVyLiR3cmFwcGVyRWwudHJhbnNmb3JtKGB0cmFuc2xhdGVYKCR7c3dpcGVyLm1pblRyYW5zbGF0ZSgpfXB4KWApO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5jZW50ZXJlZFNsaWRlcyAmJiBzd2lwZXIucGFyYW1zLmNzc01vZGUpIHtcbiAgICAgICAgb2Zmc2V0IC09IHNsaWRlc1swXS5zd2lwZXJTbGlkZU9mZnNldDtcbiAgICAgIH1cblxuICAgICAgbGV0IHRYID0gc3dpcGVyLnBhcmFtcy5jc3NNb2RlID8gLW9mZnNldCAtIHN3aXBlci50cmFuc2xhdGUgOiAtb2Zmc2V0O1xuICAgICAgbGV0IHRZID0gMDtcbiAgICAgIGNvbnN0IHRaID0gLTEwMCAqIE1hdGguYWJzKHByb2dyZXNzKTtcbiAgICAgIGxldCBzY2FsZSA9IDE7XG4gICAgICBsZXQgcm90YXRlID0gLTIgKiBwcm9ncmVzcztcbiAgICAgIGxldCB0WEFkZCA9IDggLSBNYXRoLmFicyhwcm9ncmVzcykgKiAwLjc1O1xuICAgICAgY29uc3QgaXNTd2lwZVRvTmV4dCA9IChpID09PSBhY3RpdmVJbmRleCB8fCBpID09PSBhY3RpdmVJbmRleCAtIDEpICYmIHByb2dyZXNzID4gMCAmJiBwcm9ncmVzcyA8IDEgJiYgKGlzVG91Y2hlZCB8fCBzd2lwZXIucGFyYW1zLmNzc01vZGUpICYmIGN1cnJlbnRUcmFuc2xhdGUgPCBzdGFydFRyYW5zbGF0ZTtcbiAgICAgIGNvbnN0IGlzU3dpcGVUb1ByZXYgPSAoaSA9PT0gYWN0aXZlSW5kZXggfHwgaSA9PT0gYWN0aXZlSW5kZXggKyAxKSAmJiBwcm9ncmVzcyA8IDAgJiYgcHJvZ3Jlc3MgPiAtMSAmJiAoaXNUb3VjaGVkIHx8IHN3aXBlci5wYXJhbXMuY3NzTW9kZSkgJiYgY3VycmVudFRyYW5zbGF0ZSA+IHN0YXJ0VHJhbnNsYXRlO1xuXG4gICAgICBpZiAoaXNTd2lwZVRvTmV4dCB8fCBpc1N3aXBlVG9QcmV2KSB7XG4gICAgICAgIGNvbnN0IHN1YlByb2dyZXNzID0gKDEgLSBNYXRoLmFicygoTWF0aC5hYnMocHJvZ3Jlc3MpIC0gMC41KSAvIDAuNSkpICoqIDAuNTtcbiAgICAgICAgcm90YXRlICs9IC0yOCAqIHByb2dyZXNzICogc3ViUHJvZ3Jlc3M7XG4gICAgICAgIHNjYWxlICs9IC0wLjUgKiBzdWJQcm9ncmVzcztcbiAgICAgICAgdFhBZGQgKz0gOTYgKiBzdWJQcm9ncmVzcztcbiAgICAgICAgdFkgPSBgJHstMjUgKiBzdWJQcm9ncmVzcyAqIE1hdGguYWJzKHByb2dyZXNzKX0lYDtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2dyZXNzIDwgMCkge1xuICAgICAgICAvLyBuZXh0XG4gICAgICAgIHRYID0gYGNhbGMoJHt0WH1weCArICgke3RYQWRkICogTWF0aC5hYnMocHJvZ3Jlc3MpfSUpKWA7XG4gICAgICB9IGVsc2UgaWYgKHByb2dyZXNzID4gMCkge1xuICAgICAgICAvLyBwcmV2XG4gICAgICAgIHRYID0gYGNhbGMoJHt0WH1weCArICgtJHt0WEFkZCAqIE1hdGguYWJzKHByb2dyZXNzKX0lKSlgO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdFggPSBgJHt0WH1weGA7XG4gICAgICB9XG5cbiAgICAgIGlmICghc3dpcGVyLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICAgIGNvbnN0IHByZXZZID0gdFk7XG4gICAgICAgIHRZID0gdFg7XG4gICAgICAgIHRYID0gcHJldlk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHNjYWxlU3RyaW5nID0gcHJvZ3Jlc3MgPCAwID8gYCR7MSArICgxIC0gc2NhbGUpICogcHJvZ3Jlc3N9YCA6IGAkezEgLSAoMSAtIHNjYWxlKSAqIHByb2dyZXNzfWA7XG4gICAgICBjb25zdCB0cmFuc2Zvcm0gPSBgXG4gICAgICAgIHRyYW5zbGF0ZTNkKCR7dFh9LCAke3RZfSwgJHt0Wn1weClcbiAgICAgICAgcm90YXRlWigke3JvdGF0ZX1kZWcpXG4gICAgICAgIHNjYWxlKCR7c2NhbGVTdHJpbmd9KVxuICAgICAgYDtcblxuICAgICAgaWYgKHBhcmFtcy5zbGlkZVNoYWRvd3MpIHtcbiAgICAgICAgLy8gU2V0IHNoYWRvd3NcbiAgICAgICAgbGV0ICRzaGFkb3dFbCA9ICRzbGlkZUVsLmZpbmQoJy5zd2lwZXItc2xpZGUtc2hhZG93Jyk7XG5cbiAgICAgICAgaWYgKCRzaGFkb3dFbC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAkc2hhZG93RWwgPSBjcmVhdGVTaGFkb3cocGFyYW1zLCAkc2xpZGVFbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJHNoYWRvd0VsLmxlbmd0aCkgJHNoYWRvd0VsWzBdLnN0eWxlLm9wYWNpdHkgPSBNYXRoLm1pbihNYXRoLm1heCgoTWF0aC5hYnMocHJvZ3Jlc3MpIC0gMC41KSAvIDAuNSwgMCksIDEpO1xuICAgICAgfVxuXG4gICAgICAkc2xpZGVFbFswXS5zdHlsZS56SW5kZXggPSAtTWF0aC5hYnMoTWF0aC5yb3VuZChzbGlkZVByb2dyZXNzKSkgKyBzbGlkZXMubGVuZ3RoO1xuICAgICAgY29uc3QgJHRhcmdldEVsID0gZWZmZWN0VGFyZ2V0KHBhcmFtcywgJHNsaWRlRWwpO1xuICAgICAgJHRhcmdldEVsLnRyYW5zZm9ybSh0cmFuc2Zvcm0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzZXRUcmFuc2l0aW9uID0gZHVyYXRpb24gPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIHRyYW5zZm9ybUVsXG4gICAgfSA9IHN3aXBlci5wYXJhbXMuY2FyZHNFZmZlY3Q7XG4gICAgY29uc3QgJHRyYW5zaXRpb25FbGVtZW50cyA9IHRyYW5zZm9ybUVsID8gc3dpcGVyLnNsaWRlcy5maW5kKHRyYW5zZm9ybUVsKSA6IHN3aXBlci5zbGlkZXM7XG4gICAgJHRyYW5zaXRpb25FbGVtZW50cy50cmFuc2l0aW9uKGR1cmF0aW9uKS5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdycpLnRyYW5zaXRpb24oZHVyYXRpb24pO1xuICAgIGVmZmVjdFZpcnR1YWxUcmFuc2l0aW9uRW5kKHtcbiAgICAgIHN3aXBlcixcbiAgICAgIGR1cmF0aW9uLFxuICAgICAgdHJhbnNmb3JtRWxcbiAgICB9KTtcbiAgfTtcblxuICBlZmZlY3RJbml0KHtcbiAgICBlZmZlY3Q6ICdjYXJkcycsXG4gICAgc3dpcGVyLFxuICAgIG9uLFxuICAgIHNldFRyYW5zbGF0ZSxcbiAgICBzZXRUcmFuc2l0aW9uLFxuICAgIHBlcnNwZWN0aXZlOiAoKSA9PiB0cnVlLFxuICAgIG92ZXJ3cml0ZVBhcmFtczogKCkgPT4gKHtcbiAgICAgIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXG4gICAgICB2aXJ0dWFsVHJhbnNsYXRlOiAhc3dpcGVyLnBhcmFtcy5jc3NNb2RlXG4gICAgfSlcbiAgfSk7XG59IiwiaW1wb3J0IGNyZWF0ZVNoYWRvdyBmcm9tICcuLi8uLi9zaGFyZWQvY3JlYXRlLXNoYWRvdy5qcyc7XG5pbXBvcnQgZWZmZWN0SW5pdCBmcm9tICcuLi8uLi9zaGFyZWQvZWZmZWN0LWluaXQuanMnO1xuaW1wb3J0IGVmZmVjdFRhcmdldCBmcm9tICcuLi8uLi9zaGFyZWQvZWZmZWN0LXRhcmdldC5qcyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZmZlY3RDb3ZlcmZsb3coe1xuICBzd2lwZXIsXG4gIGV4dGVuZFBhcmFtcyxcbiAgb25cbn0pIHtcbiAgZXh0ZW5kUGFyYW1zKHtcbiAgICBjb3ZlcmZsb3dFZmZlY3Q6IHtcbiAgICAgIHJvdGF0ZTogNTAsXG4gICAgICBzdHJldGNoOiAwLFxuICAgICAgZGVwdGg6IDEwMCxcbiAgICAgIHNjYWxlOiAxLFxuICAgICAgbW9kaWZpZXI6IDEsXG4gICAgICBzbGlkZVNoYWRvd3M6IHRydWUsXG4gICAgICB0cmFuc2Zvcm1FbDogbnVsbFxuICAgIH1cbiAgfSk7XG5cbiAgY29uc3Qgc2V0VHJhbnNsYXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIHdpZHRoOiBzd2lwZXJXaWR0aCxcbiAgICAgIGhlaWdodDogc3dpcGVySGVpZ2h0LFxuICAgICAgc2xpZGVzLFxuICAgICAgc2xpZGVzU2l6ZXNHcmlkXG4gICAgfSA9IHN3aXBlcjtcbiAgICBjb25zdCBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLmNvdmVyZmxvd0VmZmVjdDtcbiAgICBjb25zdCBpc0hvcml6b250YWwgPSBzd2lwZXIuaXNIb3Jpem9udGFsKCk7XG4gICAgY29uc3QgdHJhbnNmb3JtID0gc3dpcGVyLnRyYW5zbGF0ZTtcbiAgICBjb25zdCBjZW50ZXIgPSBpc0hvcml6b250YWwgPyAtdHJhbnNmb3JtICsgc3dpcGVyV2lkdGggLyAyIDogLXRyYW5zZm9ybSArIHN3aXBlckhlaWdodCAvIDI7XG4gICAgY29uc3Qgcm90YXRlID0gaXNIb3Jpem9udGFsID8gcGFyYW1zLnJvdGF0ZSA6IC1wYXJhbXMucm90YXRlO1xuICAgIGNvbnN0IHRyYW5zbGF0ZSA9IHBhcmFtcy5kZXB0aDsgLy8gRWFjaCBzbGlkZSBvZmZzZXQgZnJvbSBjZW50ZXJcblxuICAgIGZvciAobGV0IGkgPSAwLCBsZW5ndGggPSBzbGlkZXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0ICRzbGlkZUVsID0gc2xpZGVzLmVxKGkpO1xuICAgICAgY29uc3Qgc2xpZGVTaXplID0gc2xpZGVzU2l6ZXNHcmlkW2ldO1xuICAgICAgY29uc3Qgc2xpZGVPZmZzZXQgPSAkc2xpZGVFbFswXS5zd2lwZXJTbGlkZU9mZnNldDtcbiAgICAgIGNvbnN0IG9mZnNldE11bHRpcGxpZXIgPSAoY2VudGVyIC0gc2xpZGVPZmZzZXQgLSBzbGlkZVNpemUgLyAyKSAvIHNsaWRlU2l6ZSAqIHBhcmFtcy5tb2RpZmllcjtcbiAgICAgIGxldCByb3RhdGVZID0gaXNIb3Jpem9udGFsID8gcm90YXRlICogb2Zmc2V0TXVsdGlwbGllciA6IDA7XG4gICAgICBsZXQgcm90YXRlWCA9IGlzSG9yaXpvbnRhbCA/IDAgOiByb3RhdGUgKiBvZmZzZXRNdWx0aXBsaWVyOyAvLyB2YXIgcm90YXRlWiA9IDBcblxuICAgICAgbGV0IHRyYW5zbGF0ZVogPSAtdHJhbnNsYXRlICogTWF0aC5hYnMob2Zmc2V0TXVsdGlwbGllcik7XG4gICAgICBsZXQgc3RyZXRjaCA9IHBhcmFtcy5zdHJldGNoOyAvLyBBbGxvdyBwZXJjZW50YWdlIHRvIG1ha2UgYSByZWxhdGl2ZSBzdHJldGNoIGZvciByZXNwb25zaXZlIHNsaWRlcnNcblxuICAgICAgaWYgKHR5cGVvZiBzdHJldGNoID09PSAnc3RyaW5nJyAmJiBzdHJldGNoLmluZGV4T2YoJyUnKSAhPT0gLTEpIHtcbiAgICAgICAgc3RyZXRjaCA9IHBhcnNlRmxvYXQocGFyYW1zLnN0cmV0Y2gpIC8gMTAwICogc2xpZGVTaXplO1xuICAgICAgfVxuXG4gICAgICBsZXQgdHJhbnNsYXRlWSA9IGlzSG9yaXpvbnRhbCA/IDAgOiBzdHJldGNoICogb2Zmc2V0TXVsdGlwbGllcjtcbiAgICAgIGxldCB0cmFuc2xhdGVYID0gaXNIb3Jpem9udGFsID8gc3RyZXRjaCAqIG9mZnNldE11bHRpcGxpZXIgOiAwO1xuICAgICAgbGV0IHNjYWxlID0gMSAtICgxIC0gcGFyYW1zLnNjYWxlKSAqIE1hdGguYWJzKG9mZnNldE11bHRpcGxpZXIpOyAvLyBGaXggZm9yIHVsdHJhIHNtYWxsIHZhbHVlc1xuXG4gICAgICBpZiAoTWF0aC5hYnModHJhbnNsYXRlWCkgPCAwLjAwMSkgdHJhbnNsYXRlWCA9IDA7XG4gICAgICBpZiAoTWF0aC5hYnModHJhbnNsYXRlWSkgPCAwLjAwMSkgdHJhbnNsYXRlWSA9IDA7XG4gICAgICBpZiAoTWF0aC5hYnModHJhbnNsYXRlWikgPCAwLjAwMSkgdHJhbnNsYXRlWiA9IDA7XG4gICAgICBpZiAoTWF0aC5hYnMocm90YXRlWSkgPCAwLjAwMSkgcm90YXRlWSA9IDA7XG4gICAgICBpZiAoTWF0aC5hYnMocm90YXRlWCkgPCAwLjAwMSkgcm90YXRlWCA9IDA7XG4gICAgICBpZiAoTWF0aC5hYnMoc2NhbGUpIDwgMC4wMDEpIHNjYWxlID0gMDtcbiAgICAgIGNvbnN0IHNsaWRlVHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7dHJhbnNsYXRlWH1weCwke3RyYW5zbGF0ZVl9cHgsJHt0cmFuc2xhdGVafXB4KSAgcm90YXRlWCgke3JvdGF0ZVh9ZGVnKSByb3RhdGVZKCR7cm90YXRlWX1kZWcpIHNjYWxlKCR7c2NhbGV9KWA7XG4gICAgICBjb25zdCAkdGFyZ2V0RWwgPSBlZmZlY3RUYXJnZXQocGFyYW1zLCAkc2xpZGVFbCk7XG4gICAgICAkdGFyZ2V0RWwudHJhbnNmb3JtKHNsaWRlVHJhbnNmb3JtKTtcbiAgICAgICRzbGlkZUVsWzBdLnN0eWxlLnpJbmRleCA9IC1NYXRoLmFicyhNYXRoLnJvdW5kKG9mZnNldE11bHRpcGxpZXIpKSArIDE7XG5cbiAgICAgIGlmIChwYXJhbXMuc2xpZGVTaGFkb3dzKSB7XG4gICAgICAgIC8vIFNldCBzaGFkb3dzXG4gICAgICAgIGxldCAkc2hhZG93QmVmb3JlRWwgPSBpc0hvcml6b250YWwgPyAkc2xpZGVFbC5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0JykgOiAkc2xpZGVFbC5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3AnKTtcbiAgICAgICAgbGV0ICRzaGFkb3dBZnRlckVsID0gaXNIb3Jpem9udGFsID8gJHNsaWRlRWwuZmluZCgnLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQnKSA6ICRzbGlkZUVsLmZpbmQoJy5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbScpO1xuXG4gICAgICAgIGlmICgkc2hhZG93QmVmb3JlRWwubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgJHNoYWRvd0JlZm9yZUVsID0gY3JlYXRlU2hhZG93KHBhcmFtcywgJHNsaWRlRWwsIGlzSG9yaXpvbnRhbCA/ICdsZWZ0JyA6ICd0b3AnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkc2hhZG93QWZ0ZXJFbC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAkc2hhZG93QWZ0ZXJFbCA9IGNyZWF0ZVNoYWRvdyhwYXJhbXMsICRzbGlkZUVsLCBpc0hvcml6b250YWwgPyAncmlnaHQnIDogJ2JvdHRvbScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRzaGFkb3dCZWZvcmVFbC5sZW5ndGgpICRzaGFkb3dCZWZvcmVFbFswXS5zdHlsZS5vcGFjaXR5ID0gb2Zmc2V0TXVsdGlwbGllciA+IDAgPyBvZmZzZXRNdWx0aXBsaWVyIDogMDtcbiAgICAgICAgaWYgKCRzaGFkb3dBZnRlckVsLmxlbmd0aCkgJHNoYWRvd0FmdGVyRWxbMF0uc3R5bGUub3BhY2l0eSA9IC1vZmZzZXRNdWx0aXBsaWVyID4gMCA/IC1vZmZzZXRNdWx0aXBsaWVyIDogMDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2V0VHJhbnNpdGlvbiA9IGR1cmF0aW9uID0+IHtcbiAgICBjb25zdCB7XG4gICAgICB0cmFuc2Zvcm1FbFxuICAgIH0gPSBzd2lwZXIucGFyYW1zLmNvdmVyZmxvd0VmZmVjdDtcbiAgICBjb25zdCAkdHJhbnNpdGlvbkVsZW1lbnRzID0gdHJhbnNmb3JtRWwgPyBzd2lwZXIuc2xpZGVzLmZpbmQodHJhbnNmb3JtRWwpIDogc3dpcGVyLnNsaWRlcztcbiAgICAkdHJhbnNpdGlvbkVsZW1lbnRzLnRyYW5zaXRpb24oZHVyYXRpb24pLmZpbmQoJy5zd2lwZXItc2xpZGUtc2hhZG93LXRvcCwgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQsIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSwgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCcpLnRyYW5zaXRpb24oZHVyYXRpb24pO1xuICB9O1xuXG4gIGVmZmVjdEluaXQoe1xuICAgIGVmZmVjdDogJ2NvdmVyZmxvdycsXG4gICAgc3dpcGVyLFxuICAgIG9uLFxuICAgIHNldFRyYW5zbGF0ZSxcbiAgICBzZXRUcmFuc2l0aW9uLFxuICAgIHBlcnNwZWN0aXZlOiAoKSA9PiB0cnVlLFxuICAgIG92ZXJ3cml0ZVBhcmFtczogKCkgPT4gKHtcbiAgICAgIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWVcbiAgICB9KVxuICB9KTtcbn0iLCJpbXBvcnQgY3JlYXRlU2hhZG93IGZyb20gJy4uLy4uL3NoYXJlZC9jcmVhdGUtc2hhZG93LmpzJztcbmltcG9ydCBlZmZlY3RJbml0IGZyb20gJy4uLy4uL3NoYXJlZC9lZmZlY3QtaW5pdC5qcyc7XG5pbXBvcnQgZWZmZWN0VGFyZ2V0IGZyb20gJy4uLy4uL3NoYXJlZC9lZmZlY3QtdGFyZ2V0LmpzJztcbmltcG9ydCBlZmZlY3RWaXJ0dWFsVHJhbnNpdGlvbkVuZCBmcm9tICcuLi8uLi9zaGFyZWQvZWZmZWN0LXZpcnR1YWwtdHJhbnNpdGlvbi1lbmQuanMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWZmZWN0Q3JlYXRpdmUoe1xuICBzd2lwZXIsXG4gIGV4dGVuZFBhcmFtcyxcbiAgb25cbn0pIHtcbiAgZXh0ZW5kUGFyYW1zKHtcbiAgICBjcmVhdGl2ZUVmZmVjdDoge1xuICAgICAgdHJhbnNmb3JtRWw6IG51bGwsXG4gICAgICBsaW1pdFByb2dyZXNzOiAxLFxuICAgICAgc2hhZG93UGVyUHJvZ3Jlc3M6IGZhbHNlLFxuICAgICAgcHJvZ3Jlc3NNdWx0aXBsaWVyOiAxLFxuICAgICAgcGVyc3BlY3RpdmU6IHRydWUsXG4gICAgICBwcmV2OiB7XG4gICAgICAgIHRyYW5zbGF0ZTogWzAsIDAsIDBdLFxuICAgICAgICByb3RhdGU6IFswLCAwLCAwXSxcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgc2NhbGU6IDFcbiAgICAgIH0sXG4gICAgICBuZXh0OiB7XG4gICAgICAgIHRyYW5zbGF0ZTogWzAsIDAsIDBdLFxuICAgICAgICByb3RhdGU6IFswLCAwLCAwXSxcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgc2NhbGU6IDFcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGdldFRyYW5zbGF0ZVZhbHVlID0gdmFsdWUgPT4ge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSByZXR1cm4gdmFsdWU7XG4gICAgcmV0dXJuIGAke3ZhbHVlfXB4YDtcbiAgfTtcblxuICBjb25zdCBzZXRUcmFuc2xhdGUgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgc2xpZGVzXG4gICAgfSA9IHN3aXBlcjtcbiAgICBjb25zdCBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLmNyZWF0aXZlRWZmZWN0O1xuICAgIGNvbnN0IHtcbiAgICAgIHByb2dyZXNzTXVsdGlwbGllcjogbXVsdGlwbGllclxuICAgIH0gPSBwYXJhbXM7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgJHNsaWRlRWwgPSBzbGlkZXMuZXEoaSk7XG4gICAgICBjb25zdCBzbGlkZVByb2dyZXNzID0gJHNsaWRlRWxbMF0ucHJvZ3Jlc3M7XG4gICAgICBjb25zdCBwcm9ncmVzcyA9IE1hdGgubWluKE1hdGgubWF4KCRzbGlkZUVsWzBdLnByb2dyZXNzLCAtcGFyYW1zLmxpbWl0UHJvZ3Jlc3MpLCBwYXJhbXMubGltaXRQcm9ncmVzcyk7XG4gICAgICBjb25zdCBvZmZzZXQgPSAkc2xpZGVFbFswXS5zd2lwZXJTbGlkZU9mZnNldDtcbiAgICAgIGNvbnN0IHQgPSBbc3dpcGVyLnBhcmFtcy5jc3NNb2RlID8gLW9mZnNldCAtIHN3aXBlci50cmFuc2xhdGUgOiAtb2Zmc2V0LCAwLCAwXTtcbiAgICAgIGNvbnN0IHIgPSBbMCwgMCwgMF07XG4gICAgICBsZXQgY3VzdG9tID0gZmFsc2U7XG5cbiAgICAgIGlmICghc3dpcGVyLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICAgIHRbMV0gPSB0WzBdO1xuICAgICAgICB0WzBdID0gMDtcbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgIHRyYW5zbGF0ZTogWzAsIDAsIDBdLFxuICAgICAgICByb3RhdGU6IFswLCAwLCAwXSxcbiAgICAgICAgc2NhbGU6IDEsXG4gICAgICAgIG9wYWNpdHk6IDFcbiAgICAgIH07XG5cbiAgICAgIGlmIChwcm9ncmVzcyA8IDApIHtcbiAgICAgICAgZGF0YSA9IHBhcmFtcy5uZXh0O1xuICAgICAgICBjdXN0b20gPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChwcm9ncmVzcyA+IDApIHtcbiAgICAgICAgZGF0YSA9IHBhcmFtcy5wcmV2O1xuICAgICAgICBjdXN0b20gPSB0cnVlO1xuICAgICAgfSAvLyBzZXQgdHJhbnNsYXRlXG5cblxuICAgICAgdC5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgICAgdFtpbmRleF0gPSBgY2FsYygke3ZhbHVlfXB4ICsgKCR7Z2V0VHJhbnNsYXRlVmFsdWUoZGF0YS50cmFuc2xhdGVbaW5kZXhdKX0gKiAke01hdGguYWJzKHByb2dyZXNzICogbXVsdGlwbGllcil9KSlgO1xuICAgICAgfSk7IC8vIHNldCByb3RhdGVzXG5cbiAgICAgIHIuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAgIHJbaW5kZXhdID0gZGF0YS5yb3RhdGVbaW5kZXhdICogTWF0aC5hYnMocHJvZ3Jlc3MgKiBtdWx0aXBsaWVyKTtcbiAgICAgIH0pO1xuICAgICAgJHNsaWRlRWxbMF0uc3R5bGUuekluZGV4ID0gLU1hdGguYWJzKE1hdGgucm91bmQoc2xpZGVQcm9ncmVzcykpICsgc2xpZGVzLmxlbmd0aDtcbiAgICAgIGNvbnN0IHRyYW5zbGF0ZVN0cmluZyA9IHQuam9pbignLCAnKTtcbiAgICAgIGNvbnN0IHJvdGF0ZVN0cmluZyA9IGByb3RhdGVYKCR7clswXX1kZWcpIHJvdGF0ZVkoJHtyWzFdfWRlZykgcm90YXRlWigke3JbMl19ZGVnKWA7XG4gICAgICBjb25zdCBzY2FsZVN0cmluZyA9IHByb2dyZXNzIDwgMCA/IGBzY2FsZSgkezEgKyAoMSAtIGRhdGEuc2NhbGUpICogcHJvZ3Jlc3MgKiBtdWx0aXBsaWVyfSlgIDogYHNjYWxlKCR7MSAtICgxIC0gZGF0YS5zY2FsZSkgKiBwcm9ncmVzcyAqIG11bHRpcGxpZXJ9KWA7XG4gICAgICBjb25zdCBvcGFjaXR5U3RyaW5nID0gcHJvZ3Jlc3MgPCAwID8gMSArICgxIC0gZGF0YS5vcGFjaXR5KSAqIHByb2dyZXNzICogbXVsdGlwbGllciA6IDEgLSAoMSAtIGRhdGEub3BhY2l0eSkgKiBwcm9ncmVzcyAqIG11bHRpcGxpZXI7XG4gICAgICBjb25zdCB0cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHt0cmFuc2xhdGVTdHJpbmd9KSAke3JvdGF0ZVN0cmluZ30gJHtzY2FsZVN0cmluZ31gOyAvLyBTZXQgc2hhZG93c1xuXG4gICAgICBpZiAoY3VzdG9tICYmIGRhdGEuc2hhZG93IHx8ICFjdXN0b20pIHtcbiAgICAgICAgbGV0ICRzaGFkb3dFbCA9ICRzbGlkZUVsLmNoaWxkcmVuKCcuc3dpcGVyLXNsaWRlLXNoYWRvdycpO1xuXG4gICAgICAgIGlmICgkc2hhZG93RWwubGVuZ3RoID09PSAwICYmIGRhdGEuc2hhZG93KSB7XG4gICAgICAgICAgJHNoYWRvd0VsID0gY3JlYXRlU2hhZG93KHBhcmFtcywgJHNsaWRlRWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRzaGFkb3dFbC5sZW5ndGgpIHtcbiAgICAgICAgICBjb25zdCBzaGFkb3dPcGFjaXR5ID0gcGFyYW1zLnNoYWRvd1BlclByb2dyZXNzID8gcHJvZ3Jlc3MgKiAoMSAvIHBhcmFtcy5saW1pdFByb2dyZXNzKSA6IHByb2dyZXNzO1xuICAgICAgICAgICRzaGFkb3dFbFswXS5zdHlsZS5vcGFjaXR5ID0gTWF0aC5taW4oTWF0aC5tYXgoTWF0aC5hYnMoc2hhZG93T3BhY2l0eSksIDApLCAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCAkdGFyZ2V0RWwgPSBlZmZlY3RUYXJnZXQocGFyYW1zLCAkc2xpZGVFbCk7XG4gICAgICAkdGFyZ2V0RWwudHJhbnNmb3JtKHRyYW5zZm9ybSkuY3NzKHtcbiAgICAgICAgb3BhY2l0eTogb3BhY2l0eVN0cmluZ1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChkYXRhLm9yaWdpbikge1xuICAgICAgICAkdGFyZ2V0RWwuY3NzKCd0cmFuc2Zvcm0tb3JpZ2luJywgZGF0YS5vcmlnaW4pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBzZXRUcmFuc2l0aW9uID0gZHVyYXRpb24gPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIHRyYW5zZm9ybUVsXG4gICAgfSA9IHN3aXBlci5wYXJhbXMuY3JlYXRpdmVFZmZlY3Q7XG4gICAgY29uc3QgJHRyYW5zaXRpb25FbGVtZW50cyA9IHRyYW5zZm9ybUVsID8gc3dpcGVyLnNsaWRlcy5maW5kKHRyYW5zZm9ybUVsKSA6IHN3aXBlci5zbGlkZXM7XG4gICAgJHRyYW5zaXRpb25FbGVtZW50cy50cmFuc2l0aW9uKGR1cmF0aW9uKS5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdycpLnRyYW5zaXRpb24oZHVyYXRpb24pO1xuICAgIGVmZmVjdFZpcnR1YWxUcmFuc2l0aW9uRW5kKHtcbiAgICAgIHN3aXBlcixcbiAgICAgIGR1cmF0aW9uLFxuICAgICAgdHJhbnNmb3JtRWwsXG4gICAgICBhbGxTbGlkZXM6IHRydWVcbiAgICB9KTtcbiAgfTtcblxuICBlZmZlY3RJbml0KHtcbiAgICBlZmZlY3Q6ICdjcmVhdGl2ZScsXG4gICAgc3dpcGVyLFxuICAgIG9uLFxuICAgIHNldFRyYW5zbGF0ZSxcbiAgICBzZXRUcmFuc2l0aW9uLFxuICAgIHBlcnNwZWN0aXZlOiAoKSA9PiBzd2lwZXIucGFyYW1zLmNyZWF0aXZlRWZmZWN0LnBlcnNwZWN0aXZlLFxuICAgIG92ZXJ3cml0ZVBhcmFtczogKCkgPT4gKHtcbiAgICAgIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXG4gICAgICB2aXJ0dWFsVHJhbnNsYXRlOiAhc3dpcGVyLnBhcmFtcy5jc3NNb2RlXG4gICAgfSlcbiAgfSk7XG59IiwiaW1wb3J0ICQgZnJvbSAnLi4vLi4vc2hhcmVkL2RvbS5qcyc7XG5pbXBvcnQgZWZmZWN0SW5pdCBmcm9tICcuLi8uLi9zaGFyZWQvZWZmZWN0LWluaXQuanMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWZmZWN0Q3ViZSh7XG4gIHN3aXBlcixcbiAgZXh0ZW5kUGFyYW1zLFxuICBvblxufSkge1xuICBleHRlbmRQYXJhbXMoe1xuICAgIGN1YmVFZmZlY3Q6IHtcbiAgICAgIHNsaWRlU2hhZG93czogdHJ1ZSxcbiAgICAgIHNoYWRvdzogdHJ1ZSxcbiAgICAgIHNoYWRvd09mZnNldDogMjAsXG4gICAgICBzaGFkb3dTY2FsZTogMC45NFxuICAgIH1cbiAgfSk7XG5cbiAgY29uc3Qgc2V0VHJhbnNsYXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgICRlbCxcbiAgICAgICR3cmFwcGVyRWwsXG4gICAgICBzbGlkZXMsXG4gICAgICB3aWR0aDogc3dpcGVyV2lkdGgsXG4gICAgICBoZWlnaHQ6IHN3aXBlckhlaWdodCxcbiAgICAgIHJ0bFRyYW5zbGF0ZTogcnRsLFxuICAgICAgc2l6ZTogc3dpcGVyU2l6ZSxcbiAgICAgIGJyb3dzZXJcbiAgICB9ID0gc3dpcGVyO1xuICAgIGNvbnN0IHBhcmFtcyA9IHN3aXBlci5wYXJhbXMuY3ViZUVmZmVjdDtcbiAgICBjb25zdCBpc0hvcml6b250YWwgPSBzd2lwZXIuaXNIb3Jpem9udGFsKCk7XG4gICAgY29uc3QgaXNWaXJ0dWFsID0gc3dpcGVyLnZpcnR1YWwgJiYgc3dpcGVyLnBhcmFtcy52aXJ0dWFsLmVuYWJsZWQ7XG4gICAgbGV0IHdyYXBwZXJSb3RhdGUgPSAwO1xuICAgIGxldCAkY3ViZVNoYWRvd0VsO1xuXG4gICAgaWYgKHBhcmFtcy5zaGFkb3cpIHtcbiAgICAgIGlmIChpc0hvcml6b250YWwpIHtcbiAgICAgICAgJGN1YmVTaGFkb3dFbCA9ICR3cmFwcGVyRWwuZmluZCgnLnN3aXBlci1jdWJlLXNoYWRvdycpO1xuXG4gICAgICAgIGlmICgkY3ViZVNoYWRvd0VsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICRjdWJlU2hhZG93RWwgPSAkKCc8ZGl2IGNsYXNzPVwic3dpcGVyLWN1YmUtc2hhZG93XCI+PC9kaXY+Jyk7XG4gICAgICAgICAgJHdyYXBwZXJFbC5hcHBlbmQoJGN1YmVTaGFkb3dFbCk7XG4gICAgICAgIH1cblxuICAgICAgICAkY3ViZVNoYWRvd0VsLmNzcyh7XG4gICAgICAgICAgaGVpZ2h0OiBgJHtzd2lwZXJXaWR0aH1weGBcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkY3ViZVNoYWRvd0VsID0gJGVsLmZpbmQoJy5zd2lwZXItY3ViZS1zaGFkb3cnKTtcblxuICAgICAgICBpZiAoJGN1YmVTaGFkb3dFbC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAkY3ViZVNoYWRvd0VsID0gJCgnPGRpdiBjbGFzcz1cInN3aXBlci1jdWJlLXNoYWRvd1wiPjwvZGl2PicpO1xuICAgICAgICAgICRlbC5hcHBlbmQoJGN1YmVTaGFkb3dFbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgJHNsaWRlRWwgPSBzbGlkZXMuZXEoaSk7XG4gICAgICBsZXQgc2xpZGVJbmRleCA9IGk7XG5cbiAgICAgIGlmIChpc1ZpcnR1YWwpIHtcbiAgICAgICAgc2xpZGVJbmRleCA9IHBhcnNlSW50KCRzbGlkZUVsLmF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JyksIDEwKTtcbiAgICAgIH1cblxuICAgICAgbGV0IHNsaWRlQW5nbGUgPSBzbGlkZUluZGV4ICogOTA7XG4gICAgICBsZXQgcm91bmQgPSBNYXRoLmZsb29yKHNsaWRlQW5nbGUgLyAzNjApO1xuXG4gICAgICBpZiAocnRsKSB7XG4gICAgICAgIHNsaWRlQW5nbGUgPSAtc2xpZGVBbmdsZTtcbiAgICAgICAgcm91bmQgPSBNYXRoLmZsb29yKC1zbGlkZUFuZ2xlIC8gMzYwKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvZ3Jlc3MgPSBNYXRoLm1heChNYXRoLm1pbigkc2xpZGVFbFswXS5wcm9ncmVzcywgMSksIC0xKTtcbiAgICAgIGxldCB0eCA9IDA7XG4gICAgICBsZXQgdHkgPSAwO1xuICAgICAgbGV0IHR6ID0gMDtcblxuICAgICAgaWYgKHNsaWRlSW5kZXggJSA0ID09PSAwKSB7XG4gICAgICAgIHR4ID0gLXJvdW5kICogNCAqIHN3aXBlclNpemU7XG4gICAgICAgIHR6ID0gMDtcbiAgICAgIH0gZWxzZSBpZiAoKHNsaWRlSW5kZXggLSAxKSAlIDQgPT09IDApIHtcbiAgICAgICAgdHggPSAwO1xuICAgICAgICB0eiA9IC1yb3VuZCAqIDQgKiBzd2lwZXJTaXplO1xuICAgICAgfSBlbHNlIGlmICgoc2xpZGVJbmRleCAtIDIpICUgNCA9PT0gMCkge1xuICAgICAgICB0eCA9IHN3aXBlclNpemUgKyByb3VuZCAqIDQgKiBzd2lwZXJTaXplO1xuICAgICAgICB0eiA9IHN3aXBlclNpemU7XG4gICAgICB9IGVsc2UgaWYgKChzbGlkZUluZGV4IC0gMykgJSA0ID09PSAwKSB7XG4gICAgICAgIHR4ID0gLXN3aXBlclNpemU7XG4gICAgICAgIHR6ID0gMyAqIHN3aXBlclNpemUgKyBzd2lwZXJTaXplICogNCAqIHJvdW5kO1xuICAgICAgfVxuXG4gICAgICBpZiAocnRsKSB7XG4gICAgICAgIHR4ID0gLXR4O1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzSG9yaXpvbnRhbCkge1xuICAgICAgICB0eSA9IHR4O1xuICAgICAgICB0eCA9IDA7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRyYW5zZm9ybSA9IGByb3RhdGVYKCR7aXNIb3Jpem9udGFsID8gMCA6IC1zbGlkZUFuZ2xlfWRlZykgcm90YXRlWSgke2lzSG9yaXpvbnRhbCA/IHNsaWRlQW5nbGUgOiAwfWRlZykgdHJhbnNsYXRlM2QoJHt0eH1weCwgJHt0eX1weCwgJHt0en1weClgO1xuXG4gICAgICBpZiAocHJvZ3Jlc3MgPD0gMSAmJiBwcm9ncmVzcyA+IC0xKSB7XG4gICAgICAgIHdyYXBwZXJSb3RhdGUgPSBzbGlkZUluZGV4ICogOTAgKyBwcm9ncmVzcyAqIDkwO1xuICAgICAgICBpZiAocnRsKSB3cmFwcGVyUm90YXRlID0gLXNsaWRlSW5kZXggKiA5MCAtIHByb2dyZXNzICogOTA7XG4gICAgICB9XG5cbiAgICAgICRzbGlkZUVsLnRyYW5zZm9ybSh0cmFuc2Zvcm0pO1xuXG4gICAgICBpZiAocGFyYW1zLnNsaWRlU2hhZG93cykge1xuICAgICAgICAvLyBTZXQgc2hhZG93c1xuICAgICAgICBsZXQgc2hhZG93QmVmb3JlID0gaXNIb3Jpem9udGFsID8gJHNsaWRlRWwuZmluZCgnLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCcpIDogJHNsaWRlRWwuZmluZCgnLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wJyk7XG4gICAgICAgIGxldCBzaGFkb3dBZnRlciA9IGlzSG9yaXpvbnRhbCA/ICRzbGlkZUVsLmZpbmQoJy5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0JykgOiAkc2xpZGVFbC5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20nKTtcblxuICAgICAgICBpZiAoc2hhZG93QmVmb3JlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHNoYWRvd0JlZm9yZSA9ICQoYDxkaXYgY2xhc3M9XCJzd2lwZXItc2xpZGUtc2hhZG93LSR7aXNIb3Jpem9udGFsID8gJ2xlZnQnIDogJ3RvcCd9XCI+PC9kaXY+YCk7XG4gICAgICAgICAgJHNsaWRlRWwuYXBwZW5kKHNoYWRvd0JlZm9yZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2hhZG93QWZ0ZXIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgc2hhZG93QWZ0ZXIgPSAkKGA8ZGl2IGNsYXNzPVwic3dpcGVyLXNsaWRlLXNoYWRvdy0ke2lzSG9yaXpvbnRhbCA/ICdyaWdodCcgOiAnYm90dG9tJ31cIj48L2Rpdj5gKTtcbiAgICAgICAgICAkc2xpZGVFbC5hcHBlbmQoc2hhZG93QWZ0ZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNoYWRvd0JlZm9yZS5sZW5ndGgpIHNoYWRvd0JlZm9yZVswXS5zdHlsZS5vcGFjaXR5ID0gTWF0aC5tYXgoLXByb2dyZXNzLCAwKTtcbiAgICAgICAgaWYgKHNoYWRvd0FmdGVyLmxlbmd0aCkgc2hhZG93QWZ0ZXJbMF0uc3R5bGUub3BhY2l0eSA9IE1hdGgubWF4KHByb2dyZXNzLCAwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAkd3JhcHBlckVsLmNzcyh7XG4gICAgICAnLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luJzogYDUwJSA1MCUgLSR7c3dpcGVyU2l6ZSAvIDJ9cHhgLFxuICAgICAgJ3RyYW5zZm9ybS1vcmlnaW4nOiBgNTAlIDUwJSAtJHtzd2lwZXJTaXplIC8gMn1weGBcbiAgICB9KTtcblxuICAgIGlmIChwYXJhbXMuc2hhZG93KSB7XG4gICAgICBpZiAoaXNIb3Jpem9udGFsKSB7XG4gICAgICAgICRjdWJlU2hhZG93RWwudHJhbnNmb3JtKGB0cmFuc2xhdGUzZCgwcHgsICR7c3dpcGVyV2lkdGggLyAyICsgcGFyYW1zLnNoYWRvd09mZnNldH1weCwgJHstc3dpcGVyV2lkdGggLyAyfXB4KSByb3RhdGVYKDkwZGVnKSByb3RhdGVaKDBkZWcpIHNjYWxlKCR7cGFyYW1zLnNoYWRvd1NjYWxlfSlgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHNoYWRvd0FuZ2xlID0gTWF0aC5hYnMod3JhcHBlclJvdGF0ZSkgLSBNYXRoLmZsb29yKE1hdGguYWJzKHdyYXBwZXJSb3RhdGUpIC8gOTApICogOTA7XG4gICAgICAgIGNvbnN0IG11bHRpcGxpZXIgPSAxLjUgLSAoTWF0aC5zaW4oc2hhZG93QW5nbGUgKiAyICogTWF0aC5QSSAvIDM2MCkgLyAyICsgTWF0aC5jb3Moc2hhZG93QW5nbGUgKiAyICogTWF0aC5QSSAvIDM2MCkgLyAyKTtcbiAgICAgICAgY29uc3Qgc2NhbGUxID0gcGFyYW1zLnNoYWRvd1NjYWxlO1xuICAgICAgICBjb25zdCBzY2FsZTIgPSBwYXJhbXMuc2hhZG93U2NhbGUgLyBtdWx0aXBsaWVyO1xuICAgICAgICBjb25zdCBvZmZzZXQgPSBwYXJhbXMuc2hhZG93T2Zmc2V0O1xuICAgICAgICAkY3ViZVNoYWRvd0VsLnRyYW5zZm9ybShgc2NhbGUzZCgke3NjYWxlMX0sIDEsICR7c2NhbGUyfSkgdHJhbnNsYXRlM2QoMHB4LCAke3N3aXBlckhlaWdodCAvIDIgKyBvZmZzZXR9cHgsICR7LXN3aXBlckhlaWdodCAvIDIgLyBzY2FsZTJ9cHgpIHJvdGF0ZVgoLTkwZGVnKWApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHpGYWN0b3IgPSBicm93c2VyLmlzU2FmYXJpIHx8IGJyb3dzZXIuaXNXZWJWaWV3ID8gLXN3aXBlclNpemUgLyAyIDogMDtcbiAgICAkd3JhcHBlckVsLnRyYW5zZm9ybShgdHJhbnNsYXRlM2QoMHB4LDAsJHt6RmFjdG9yfXB4KSByb3RhdGVYKCR7c3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gMCA6IHdyYXBwZXJSb3RhdGV9ZGVnKSByb3RhdGVZKCR7c3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gLXdyYXBwZXJSb3RhdGUgOiAwfWRlZylgKTtcbiAgfTtcblxuICBjb25zdCBzZXRUcmFuc2l0aW9uID0gZHVyYXRpb24gPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgICRlbCxcbiAgICAgIHNsaWRlc1xuICAgIH0gPSBzd2lwZXI7XG4gICAgc2xpZGVzLnRyYW5zaXRpb24oZHVyYXRpb24pLmZpbmQoJy5zd2lwZXItc2xpZGUtc2hhZG93LXRvcCwgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQsIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSwgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCcpLnRyYW5zaXRpb24oZHVyYXRpb24pO1xuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMuY3ViZUVmZmVjdC5zaGFkb3cgJiYgIXN3aXBlci5pc0hvcml6b250YWwoKSkge1xuICAgICAgJGVsLmZpbmQoJy5zd2lwZXItY3ViZS1zaGFkb3cnKS50cmFuc2l0aW9uKGR1cmF0aW9uKTtcbiAgICB9XG4gIH07XG5cbiAgZWZmZWN0SW5pdCh7XG4gICAgZWZmZWN0OiAnY3ViZScsXG4gICAgc3dpcGVyLFxuICAgIG9uLFxuICAgIHNldFRyYW5zbGF0ZSxcbiAgICBzZXRUcmFuc2l0aW9uLFxuICAgIHBlcnNwZWN0aXZlOiAoKSA9PiB0cnVlLFxuICAgIG92ZXJ3cml0ZVBhcmFtczogKCkgPT4gKHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICBzbGlkZXNQZXJHcm91cDogMSxcbiAgICAgIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXG4gICAgICByZXNpc3RhbmNlUmF0aW86IDAsXG4gICAgICBzcGFjZUJldHdlZW46IDAsXG4gICAgICBjZW50ZXJlZFNsaWRlczogZmFsc2UsXG4gICAgICB2aXJ0dWFsVHJhbnNsYXRlOiB0cnVlXG4gICAgfSlcbiAgfSk7XG59IiwiaW1wb3J0IGVmZmVjdEluaXQgZnJvbSAnLi4vLi4vc2hhcmVkL2VmZmVjdC1pbml0LmpzJztcbmltcG9ydCBlZmZlY3RUYXJnZXQgZnJvbSAnLi4vLi4vc2hhcmVkL2VmZmVjdC10YXJnZXQuanMnO1xuaW1wb3J0IGVmZmVjdFZpcnR1YWxUcmFuc2l0aW9uRW5kIGZyb20gJy4uLy4uL3NoYXJlZC9lZmZlY3QtdmlydHVhbC10cmFuc2l0aW9uLWVuZC5qcyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZmZlY3RGYWRlKHtcbiAgc3dpcGVyLFxuICBleHRlbmRQYXJhbXMsXG4gIG9uXG59KSB7XG4gIGV4dGVuZFBhcmFtcyh7XG4gICAgZmFkZUVmZmVjdDoge1xuICAgICAgY3Jvc3NGYWRlOiBmYWxzZSxcbiAgICAgIHRyYW5zZm9ybUVsOiBudWxsXG4gICAgfVxuICB9KTtcblxuICBjb25zdCBzZXRUcmFuc2xhdGUgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgc2xpZGVzXG4gICAgfSA9IHN3aXBlcjtcbiAgICBjb25zdCBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLmZhZGVFZmZlY3Q7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgJHNsaWRlRWwgPSBzd2lwZXIuc2xpZGVzLmVxKGkpO1xuICAgICAgY29uc3Qgb2Zmc2V0ID0gJHNsaWRlRWxbMF0uc3dpcGVyU2xpZGVPZmZzZXQ7XG4gICAgICBsZXQgdHggPSAtb2Zmc2V0O1xuICAgICAgaWYgKCFzd2lwZXIucGFyYW1zLnZpcnR1YWxUcmFuc2xhdGUpIHR4IC09IHN3aXBlci50cmFuc2xhdGU7XG4gICAgICBsZXQgdHkgPSAwO1xuXG4gICAgICBpZiAoIXN3aXBlci5pc0hvcml6b250YWwoKSkge1xuICAgICAgICB0eSA9IHR4O1xuICAgICAgICB0eCA9IDA7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHNsaWRlT3BhY2l0eSA9IHN3aXBlci5wYXJhbXMuZmFkZUVmZmVjdC5jcm9zc0ZhZGUgPyBNYXRoLm1heCgxIC0gTWF0aC5hYnMoJHNsaWRlRWxbMF0ucHJvZ3Jlc3MpLCAwKSA6IDEgKyBNYXRoLm1pbihNYXRoLm1heCgkc2xpZGVFbFswXS5wcm9ncmVzcywgLTEpLCAwKTtcbiAgICAgIGNvbnN0ICR0YXJnZXRFbCA9IGVmZmVjdFRhcmdldChwYXJhbXMsICRzbGlkZUVsKTtcbiAgICAgICR0YXJnZXRFbC5jc3Moe1xuICAgICAgICBvcGFjaXR5OiBzbGlkZU9wYWNpdHlcbiAgICAgIH0pLnRyYW5zZm9ybShgdHJhbnNsYXRlM2QoJHt0eH1weCwgJHt0eX1weCwgMHB4KWApO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzZXRUcmFuc2l0aW9uID0gZHVyYXRpb24gPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIHRyYW5zZm9ybUVsXG4gICAgfSA9IHN3aXBlci5wYXJhbXMuZmFkZUVmZmVjdDtcbiAgICBjb25zdCAkdHJhbnNpdGlvbkVsZW1lbnRzID0gdHJhbnNmb3JtRWwgPyBzd2lwZXIuc2xpZGVzLmZpbmQodHJhbnNmb3JtRWwpIDogc3dpcGVyLnNsaWRlcztcbiAgICAkdHJhbnNpdGlvbkVsZW1lbnRzLnRyYW5zaXRpb24oZHVyYXRpb24pO1xuICAgIGVmZmVjdFZpcnR1YWxUcmFuc2l0aW9uRW5kKHtcbiAgICAgIHN3aXBlcixcbiAgICAgIGR1cmF0aW9uLFxuICAgICAgdHJhbnNmb3JtRWwsXG4gICAgICBhbGxTbGlkZXM6IHRydWVcbiAgICB9KTtcbiAgfTtcblxuICBlZmZlY3RJbml0KHtcbiAgICBlZmZlY3Q6ICdmYWRlJyxcbiAgICBzd2lwZXIsXG4gICAgb24sXG4gICAgc2V0VHJhbnNsYXRlLFxuICAgIHNldFRyYW5zaXRpb24sXG4gICAgb3ZlcndyaXRlUGFyYW1zOiAoKSA9PiAoe1xuICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgIHNsaWRlc1Blckdyb3VwOiAxLFxuICAgICAgd2F0Y2hTbGlkZXNQcm9ncmVzczogdHJ1ZSxcbiAgICAgIHNwYWNlQmV0d2VlbjogMCxcbiAgICAgIHZpcnR1YWxUcmFuc2xhdGU6ICFzd2lwZXIucGFyYW1zLmNzc01vZGVcbiAgICB9KVxuICB9KTtcbn0iLCJpbXBvcnQgY3JlYXRlU2hhZG93IGZyb20gJy4uLy4uL3NoYXJlZC9jcmVhdGUtc2hhZG93LmpzJztcbmltcG9ydCBlZmZlY3RJbml0IGZyb20gJy4uLy4uL3NoYXJlZC9lZmZlY3QtaW5pdC5qcyc7XG5pbXBvcnQgZWZmZWN0VGFyZ2V0IGZyb20gJy4uLy4uL3NoYXJlZC9lZmZlY3QtdGFyZ2V0LmpzJztcbmltcG9ydCBlZmZlY3RWaXJ0dWFsVHJhbnNpdGlvbkVuZCBmcm9tICcuLi8uLi9zaGFyZWQvZWZmZWN0LXZpcnR1YWwtdHJhbnNpdGlvbi1lbmQuanMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWZmZWN0RmxpcCh7XG4gIHN3aXBlcixcbiAgZXh0ZW5kUGFyYW1zLFxuICBvblxufSkge1xuICBleHRlbmRQYXJhbXMoe1xuICAgIGZsaXBFZmZlY3Q6IHtcbiAgICAgIHNsaWRlU2hhZG93czogdHJ1ZSxcbiAgICAgIGxpbWl0Um90YXRpb246IHRydWUsXG4gICAgICB0cmFuc2Zvcm1FbDogbnVsbFxuICAgIH1cbiAgfSk7XG5cbiAgY29uc3Qgc2V0VHJhbnNsYXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIHNsaWRlcyxcbiAgICAgIHJ0bFRyYW5zbGF0ZTogcnRsXG4gICAgfSA9IHN3aXBlcjtcbiAgICBjb25zdCBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLmZsaXBFZmZlY3Q7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgJHNsaWRlRWwgPSBzbGlkZXMuZXEoaSk7XG4gICAgICBsZXQgcHJvZ3Jlc3MgPSAkc2xpZGVFbFswXS5wcm9ncmVzcztcblxuICAgICAgaWYgKHN3aXBlci5wYXJhbXMuZmxpcEVmZmVjdC5saW1pdFJvdGF0aW9uKSB7XG4gICAgICAgIHByb2dyZXNzID0gTWF0aC5tYXgoTWF0aC5taW4oJHNsaWRlRWxbMF0ucHJvZ3Jlc3MsIDEpLCAtMSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG9mZnNldCA9ICRzbGlkZUVsWzBdLnN3aXBlclNsaWRlT2Zmc2V0O1xuICAgICAgY29uc3Qgcm90YXRlID0gLTE4MCAqIHByb2dyZXNzO1xuICAgICAgbGV0IHJvdGF0ZVkgPSByb3RhdGU7XG4gICAgICBsZXQgcm90YXRlWCA9IDA7XG4gICAgICBsZXQgdHggPSBzd2lwZXIucGFyYW1zLmNzc01vZGUgPyAtb2Zmc2V0IC0gc3dpcGVyLnRyYW5zbGF0ZSA6IC1vZmZzZXQ7XG4gICAgICBsZXQgdHkgPSAwO1xuXG4gICAgICBpZiAoIXN3aXBlci5pc0hvcml6b250YWwoKSkge1xuICAgICAgICB0eSA9IHR4O1xuICAgICAgICB0eCA9IDA7XG4gICAgICAgIHJvdGF0ZVggPSAtcm90YXRlWTtcbiAgICAgICAgcm90YXRlWSA9IDA7XG4gICAgICB9IGVsc2UgaWYgKHJ0bCkge1xuICAgICAgICByb3RhdGVZID0gLXJvdGF0ZVk7XG4gICAgICB9XG5cbiAgICAgICRzbGlkZUVsWzBdLnN0eWxlLnpJbmRleCA9IC1NYXRoLmFicyhNYXRoLnJvdW5kKHByb2dyZXNzKSkgKyBzbGlkZXMubGVuZ3RoO1xuXG4gICAgICBpZiAocGFyYW1zLnNsaWRlU2hhZG93cykge1xuICAgICAgICAvLyBTZXQgc2hhZG93c1xuICAgICAgICBsZXQgc2hhZG93QmVmb3JlID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gJHNsaWRlRWwuZmluZCgnLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCcpIDogJHNsaWRlRWwuZmluZCgnLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wJyk7XG4gICAgICAgIGxldCBzaGFkb3dBZnRlciA9IHN3aXBlci5pc0hvcml6b250YWwoKSA/ICRzbGlkZUVsLmZpbmQoJy5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0JykgOiAkc2xpZGVFbC5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20nKTtcblxuICAgICAgICBpZiAoc2hhZG93QmVmb3JlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHNoYWRvd0JlZm9yZSA9IGNyZWF0ZVNoYWRvdyhwYXJhbXMsICRzbGlkZUVsLCBzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyAnbGVmdCcgOiAndG9wJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2hhZG93QWZ0ZXIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgc2hhZG93QWZ0ZXIgPSBjcmVhdGVTaGFkb3cocGFyYW1zLCAkc2xpZGVFbCwgc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gJ3JpZ2h0JyA6ICdib3R0b20nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzaGFkb3dCZWZvcmUubGVuZ3RoKSBzaGFkb3dCZWZvcmVbMF0uc3R5bGUub3BhY2l0eSA9IE1hdGgubWF4KC1wcm9ncmVzcywgMCk7XG4gICAgICAgIGlmIChzaGFkb3dBZnRlci5sZW5ndGgpIHNoYWRvd0FmdGVyWzBdLnN0eWxlLm9wYWNpdHkgPSBNYXRoLm1heChwcm9ncmVzcywgMCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgke3R4fXB4LCAke3R5fXB4LCAwcHgpIHJvdGF0ZVgoJHtyb3RhdGVYfWRlZykgcm90YXRlWSgke3JvdGF0ZVl9ZGVnKWA7XG4gICAgICBjb25zdCAkdGFyZ2V0RWwgPSBlZmZlY3RUYXJnZXQocGFyYW1zLCAkc2xpZGVFbCk7XG4gICAgICAkdGFyZ2V0RWwudHJhbnNmb3JtKHRyYW5zZm9ybSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNldFRyYW5zaXRpb24gPSBkdXJhdGlvbiA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgdHJhbnNmb3JtRWxcbiAgICB9ID0gc3dpcGVyLnBhcmFtcy5mbGlwRWZmZWN0O1xuICAgIGNvbnN0ICR0cmFuc2l0aW9uRWxlbWVudHMgPSB0cmFuc2Zvcm1FbCA/IHN3aXBlci5zbGlkZXMuZmluZCh0cmFuc2Zvcm1FbCkgOiBzd2lwZXIuc2xpZGVzO1xuICAgICR0cmFuc2l0aW9uRWxlbWVudHMudHJhbnNpdGlvbihkdXJhdGlvbikuZmluZCgnLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wLCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCwgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tLCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0JykudHJhbnNpdGlvbihkdXJhdGlvbik7XG4gICAgZWZmZWN0VmlydHVhbFRyYW5zaXRpb25FbmQoe1xuICAgICAgc3dpcGVyLFxuICAgICAgZHVyYXRpb24sXG4gICAgICB0cmFuc2Zvcm1FbFxuICAgIH0pO1xuICB9O1xuXG4gIGVmZmVjdEluaXQoe1xuICAgIGVmZmVjdDogJ2ZsaXAnLFxuICAgIHN3aXBlcixcbiAgICBvbixcbiAgICBzZXRUcmFuc2xhdGUsXG4gICAgc2V0VHJhbnNpdGlvbixcbiAgICBwZXJzcGVjdGl2ZTogKCkgPT4gdHJ1ZSxcbiAgICBvdmVyd3JpdGVQYXJhbXM6ICgpID0+ICh7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgc2xpZGVzUGVyR3JvdXA6IDEsXG4gICAgICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAwLFxuICAgICAgdmlydHVhbFRyYW5zbGF0ZTogIXN3aXBlci5wYXJhbXMuY3NzTW9kZVxuICAgIH0pXG4gIH0pO1xufSIsImltcG9ydCB7IG5vdyB9IGZyb20gJy4uLy4uL3NoYXJlZC91dGlscy5qcyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmcmVlTW9kZSh7XG4gIHN3aXBlcixcbiAgZXh0ZW5kUGFyYW1zLFxuICBlbWl0LFxuICBvbmNlXG59KSB7XG4gIGV4dGVuZFBhcmFtcyh7XG4gICAgZnJlZU1vZGU6IHtcbiAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgbW9tZW50dW06IHRydWUsXG4gICAgICBtb21lbnR1bVJhdGlvOiAxLFxuICAgICAgbW9tZW50dW1Cb3VuY2U6IHRydWUsXG4gICAgICBtb21lbnR1bUJvdW5jZVJhdGlvOiAxLFxuICAgICAgbW9tZW50dW1WZWxvY2l0eVJhdGlvOiAxLFxuICAgICAgc3RpY2t5OiBmYWxzZSxcbiAgICAgIG1pbmltdW1WZWxvY2l0eTogMC4wMlxuICAgIH1cbiAgfSk7XG5cbiAgZnVuY3Rpb24gb25Ub3VjaE1vdmUoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdG91Y2hFdmVudHNEYXRhOiBkYXRhLFxuICAgICAgdG91Y2hlc1xuICAgIH0gPSBzd2lwZXI7IC8vIFZlbG9jaXR5XG5cbiAgICBpZiAoZGF0YS52ZWxvY2l0aWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZGF0YS52ZWxvY2l0aWVzLnB1c2goe1xuICAgICAgICBwb3NpdGlvbjogdG91Y2hlc1tzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyAnc3RhcnRYJyA6ICdzdGFydFknXSxcbiAgICAgICAgdGltZTogZGF0YS50b3VjaFN0YXJ0VGltZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGF0YS52ZWxvY2l0aWVzLnB1c2goe1xuICAgICAgcG9zaXRpb246IHRvdWNoZXNbc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gJ2N1cnJlbnRYJyA6ICdjdXJyZW50WSddLFxuICAgICAgdGltZTogbm93KClcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uVG91Y2hFbmQoe1xuICAgIGN1cnJlbnRQb3NcbiAgfSkge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhcmFtcyxcbiAgICAgICR3cmFwcGVyRWwsXG4gICAgICBydGxUcmFuc2xhdGU6IHJ0bCxcbiAgICAgIHNuYXBHcmlkLFxuICAgICAgdG91Y2hFdmVudHNEYXRhOiBkYXRhXG4gICAgfSA9IHN3aXBlcjsgLy8gVGltZSBkaWZmXG5cbiAgICBjb25zdCB0b3VjaEVuZFRpbWUgPSBub3coKTtcbiAgICBjb25zdCB0aW1lRGlmZiA9IHRvdWNoRW5kVGltZSAtIGRhdGEudG91Y2hTdGFydFRpbWU7XG5cbiAgICBpZiAoY3VycmVudFBvcyA8IC1zd2lwZXIubWluVHJhbnNsYXRlKCkpIHtcbiAgICAgIHN3aXBlci5zbGlkZVRvKHN3aXBlci5hY3RpdmVJbmRleCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGN1cnJlbnRQb3MgPiAtc3dpcGVyLm1heFRyYW5zbGF0ZSgpKSB7XG4gICAgICBpZiAoc3dpcGVyLnNsaWRlcy5sZW5ndGggPCBzbmFwR3JpZC5sZW5ndGgpIHtcbiAgICAgICAgc3dpcGVyLnNsaWRlVG8oc25hcEdyaWQubGVuZ3RoIC0gMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuc2xpZGVzLmxlbmd0aCAtIDEpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy5mcmVlTW9kZS5tb21lbnR1bSkge1xuICAgICAgaWYgKGRhdGEudmVsb2NpdGllcy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGNvbnN0IGxhc3RNb3ZlRXZlbnQgPSBkYXRhLnZlbG9jaXRpZXMucG9wKCk7XG4gICAgICAgIGNvbnN0IHZlbG9jaXR5RXZlbnQgPSBkYXRhLnZlbG9jaXRpZXMucG9wKCk7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gbGFzdE1vdmVFdmVudC5wb3NpdGlvbiAtIHZlbG9jaXR5RXZlbnQucG9zaXRpb247XG4gICAgICAgIGNvbnN0IHRpbWUgPSBsYXN0TW92ZUV2ZW50LnRpbWUgLSB2ZWxvY2l0eUV2ZW50LnRpbWU7XG4gICAgICAgIHN3aXBlci52ZWxvY2l0eSA9IGRpc3RhbmNlIC8gdGltZTtcbiAgICAgICAgc3dpcGVyLnZlbG9jaXR5IC89IDI7XG5cbiAgICAgICAgaWYgKE1hdGguYWJzKHN3aXBlci52ZWxvY2l0eSkgPCBwYXJhbXMuZnJlZU1vZGUubWluaW11bVZlbG9jaXR5KSB7XG4gICAgICAgICAgc3dpcGVyLnZlbG9jaXR5ID0gMDtcbiAgICAgICAgfSAvLyB0aGlzIGltcGxpZXMgdGhhdCB0aGUgdXNlciBzdG9wcGVkIG1vdmluZyBhIGZpbmdlciB0aGVuIHJlbGVhc2VkLlxuICAgICAgICAvLyBUaGVyZSB3b3VsZCBiZSBubyBldmVudHMgd2l0aCBkaXN0YW5jZSB6ZXJvLCBzbyB0aGUgbGFzdCBldmVudCBpcyBzdGFsZS5cblxuXG4gICAgICAgIGlmICh0aW1lID4gMTUwIHx8IG5vdygpIC0gbGFzdE1vdmVFdmVudC50aW1lID4gMzAwKSB7XG4gICAgICAgICAgc3dpcGVyLnZlbG9jaXR5ID0gMDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3dpcGVyLnZlbG9jaXR5ID0gMDtcbiAgICAgIH1cblxuICAgICAgc3dpcGVyLnZlbG9jaXR5ICo9IHBhcmFtcy5mcmVlTW9kZS5tb21lbnR1bVZlbG9jaXR5UmF0aW87XG4gICAgICBkYXRhLnZlbG9jaXRpZXMubGVuZ3RoID0gMDtcbiAgICAgIGxldCBtb21lbnR1bUR1cmF0aW9uID0gMTAwMCAqIHBhcmFtcy5mcmVlTW9kZS5tb21lbnR1bVJhdGlvO1xuICAgICAgY29uc3QgbW9tZW50dW1EaXN0YW5jZSA9IHN3aXBlci52ZWxvY2l0eSAqIG1vbWVudHVtRHVyYXRpb247XG4gICAgICBsZXQgbmV3UG9zaXRpb24gPSBzd2lwZXIudHJhbnNsYXRlICsgbW9tZW50dW1EaXN0YW5jZTtcbiAgICAgIGlmIChydGwpIG5ld1Bvc2l0aW9uID0gLW5ld1Bvc2l0aW9uO1xuICAgICAgbGV0IGRvQm91bmNlID0gZmFsc2U7XG4gICAgICBsZXQgYWZ0ZXJCb3VuY2VQb3NpdGlvbjtcbiAgICAgIGNvbnN0IGJvdW5jZUFtb3VudCA9IE1hdGguYWJzKHN3aXBlci52ZWxvY2l0eSkgKiAyMCAqIHBhcmFtcy5mcmVlTW9kZS5tb21lbnR1bUJvdW5jZVJhdGlvO1xuICAgICAgbGV0IG5lZWRzTG9vcEZpeDtcblxuICAgICAgaWYgKG5ld1Bvc2l0aW9uIDwgc3dpcGVyLm1heFRyYW5zbGF0ZSgpKSB7XG4gICAgICAgIGlmIChwYXJhbXMuZnJlZU1vZGUubW9tZW50dW1Cb3VuY2UpIHtcbiAgICAgICAgICBpZiAobmV3UG9zaXRpb24gKyBzd2lwZXIubWF4VHJhbnNsYXRlKCkgPCAtYm91bmNlQW1vdW50KSB7XG4gICAgICAgICAgICBuZXdQb3NpdGlvbiA9IHN3aXBlci5tYXhUcmFuc2xhdGUoKSAtIGJvdW5jZUFtb3VudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhZnRlckJvdW5jZVBvc2l0aW9uID0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpO1xuICAgICAgICAgIGRvQm91bmNlID0gdHJ1ZTtcbiAgICAgICAgICBkYXRhLmFsbG93TW9tZW50dW1Cb3VuY2UgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld1Bvc2l0aW9uID0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcmFtcy5sb29wICYmIHBhcmFtcy5jZW50ZXJlZFNsaWRlcykgbmVlZHNMb29wRml4ID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAobmV3UG9zaXRpb24gPiBzd2lwZXIubWluVHJhbnNsYXRlKCkpIHtcbiAgICAgICAgaWYgKHBhcmFtcy5mcmVlTW9kZS5tb21lbnR1bUJvdW5jZSkge1xuICAgICAgICAgIGlmIChuZXdQb3NpdGlvbiAtIHN3aXBlci5taW5UcmFuc2xhdGUoKSA+IGJvdW5jZUFtb3VudCkge1xuICAgICAgICAgICAgbmV3UG9zaXRpb24gPSBzd2lwZXIubWluVHJhbnNsYXRlKCkgKyBib3VuY2VBbW91bnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYWZ0ZXJCb3VuY2VQb3NpdGlvbiA9IHN3aXBlci5taW5UcmFuc2xhdGUoKTtcbiAgICAgICAgICBkb0JvdW5jZSA9IHRydWU7XG4gICAgICAgICAgZGF0YS5hbGxvd01vbWVudHVtQm91bmNlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdQb3NpdGlvbiA9IHN3aXBlci5taW5UcmFuc2xhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJhbXMubG9vcCAmJiBwYXJhbXMuY2VudGVyZWRTbGlkZXMpIG5lZWRzTG9vcEZpeCA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKHBhcmFtcy5mcmVlTW9kZS5zdGlja3kpIHtcbiAgICAgICAgbGV0IG5leHRTbGlkZTtcblxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNuYXBHcmlkLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgaWYgKHNuYXBHcmlkW2pdID4gLW5ld1Bvc2l0aW9uKSB7XG4gICAgICAgICAgICBuZXh0U2xpZGUgPSBqO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKE1hdGguYWJzKHNuYXBHcmlkW25leHRTbGlkZV0gLSBuZXdQb3NpdGlvbikgPCBNYXRoLmFicyhzbmFwR3JpZFtuZXh0U2xpZGUgLSAxXSAtIG5ld1Bvc2l0aW9uKSB8fCBzd2lwZXIuc3dpcGVEaXJlY3Rpb24gPT09ICduZXh0Jykge1xuICAgICAgICAgIG5ld1Bvc2l0aW9uID0gc25hcEdyaWRbbmV4dFNsaWRlXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdQb3NpdGlvbiA9IHNuYXBHcmlkW25leHRTbGlkZSAtIDFdO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV3UG9zaXRpb24gPSAtbmV3UG9zaXRpb247XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkc0xvb3BGaXgpIHtcbiAgICAgICAgb25jZSgndHJhbnNpdGlvbkVuZCcsICgpID0+IHtcbiAgICAgICAgICBzd2lwZXIubG9vcEZpeCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0gLy8gRml4IGR1cmF0aW9uXG5cblxuICAgICAgaWYgKHN3aXBlci52ZWxvY2l0eSAhPT0gMCkge1xuICAgICAgICBpZiAocnRsKSB7XG4gICAgICAgICAgbW9tZW50dW1EdXJhdGlvbiA9IE1hdGguYWJzKCgtbmV3UG9zaXRpb24gLSBzd2lwZXIudHJhbnNsYXRlKSAvIHN3aXBlci52ZWxvY2l0eSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbW9tZW50dW1EdXJhdGlvbiA9IE1hdGguYWJzKChuZXdQb3NpdGlvbiAtIHN3aXBlci50cmFuc2xhdGUpIC8gc3dpcGVyLnZlbG9jaXR5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJhbXMuZnJlZU1vZGUuc3RpY2t5KSB7XG4gICAgICAgICAgLy8gSWYgZnJlZU1vZGUuc3RpY2t5IGlzIGFjdGl2ZSBhbmQgdGhlIHVzZXIgZW5kcyBhIHN3aXBlIHdpdGggYSBzbG93LXZlbG9jaXR5XG4gICAgICAgICAgLy8gZXZlbnQsIHRoZW4gZHVyYXRpb25zIGNhbiBiZSAyMCsgc2Vjb25kcyB0byBzbGlkZSBvbmUgKG9yIHplcm8hKSBzbGlkZXMuXG4gICAgICAgICAgLy8gSXQncyBlYXN5IHRvIHNlZSB0aGlzIHdoZW4gc2ltdWxhdGluZyB0b3VjaCB3aXRoIG1vdXNlIGV2ZW50cy4gVG8gZml4IHRoaXMsXG4gICAgICAgICAgLy8gbGltaXQgc2luZ2xlLXNsaWRlIHN3aXBlcyB0byB0aGUgZGVmYXVsdCBzbGlkZSBkdXJhdGlvbi4gVGhpcyBhbHNvIGhhcyB0aGVcbiAgICAgICAgICAvLyBuaWNlIHNpZGUgZWZmZWN0IG9mIG1hdGNoaW5nIHNsaWRlIHNwZWVkIGlmIHRoZSB1c2VyIHN0b3BwZWQgbW92aW5nIGJlZm9yZVxuICAgICAgICAgIC8vIGxpZnRpbmcgZmluZ2VyIG9yIG1vdXNlIHZzLiBtb3Zpbmcgc2xvd2x5IGJlZm9yZSBsaWZ0aW5nIHRoZSBmaW5nZXIvbW91c2UuXG4gICAgICAgICAgLy8gRm9yIGZhc3RlciBzd2lwZXMsIGFsc28gYXBwbHkgbGltaXRzIChhbGJlaXQgaGlnaGVyIG9uZXMpLlxuICAgICAgICAgIGNvbnN0IG1vdmVEaXN0YW5jZSA9IE1hdGguYWJzKChydGwgPyAtbmV3UG9zaXRpb24gOiBuZXdQb3NpdGlvbikgLSBzd2lwZXIudHJhbnNsYXRlKTtcbiAgICAgICAgICBjb25zdCBjdXJyZW50U2xpZGVTaXplID0gc3dpcGVyLnNsaWRlc1NpemVzR3JpZFtzd2lwZXIuYWN0aXZlSW5kZXhdO1xuXG4gICAgICAgICAgaWYgKG1vdmVEaXN0YW5jZSA8IGN1cnJlbnRTbGlkZVNpemUpIHtcbiAgICAgICAgICAgIG1vbWVudHVtRHVyYXRpb24gPSBwYXJhbXMuc3BlZWQ7XG4gICAgICAgICAgfSBlbHNlIGlmIChtb3ZlRGlzdGFuY2UgPCAyICogY3VycmVudFNsaWRlU2l6ZSkge1xuICAgICAgICAgICAgbW9tZW50dW1EdXJhdGlvbiA9IHBhcmFtcy5zcGVlZCAqIDEuNTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9tZW50dW1EdXJhdGlvbiA9IHBhcmFtcy5zcGVlZCAqIDIuNTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocGFyYW1zLmZyZWVNb2RlLnN0aWNreSkge1xuICAgICAgICBzd2lwZXIuc2xpZGVUb0Nsb3Nlc3QoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAocGFyYW1zLmZyZWVNb2RlLm1vbWVudHVtQm91bmNlICYmIGRvQm91bmNlKSB7XG4gICAgICAgIHN3aXBlci51cGRhdGVQcm9ncmVzcyhhZnRlckJvdW5jZVBvc2l0aW9uKTtcbiAgICAgICAgc3dpcGVyLnNldFRyYW5zaXRpb24obW9tZW50dW1EdXJhdGlvbik7XG4gICAgICAgIHN3aXBlci5zZXRUcmFuc2xhdGUobmV3UG9zaXRpb24pO1xuICAgICAgICBzd2lwZXIudHJhbnNpdGlvblN0YXJ0KHRydWUsIHN3aXBlci5zd2lwZURpcmVjdGlvbik7XG4gICAgICAgIHN3aXBlci5hbmltYXRpbmcgPSB0cnVlO1xuICAgICAgICAkd3JhcHBlckVsLnRyYW5zaXRpb25FbmQoKCkgPT4ge1xuICAgICAgICAgIGlmICghc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQgfHwgIWRhdGEuYWxsb3dNb21lbnR1bUJvdW5jZSkgcmV0dXJuO1xuICAgICAgICAgIGVtaXQoJ21vbWVudHVtQm91bmNlJyk7XG4gICAgICAgICAgc3dpcGVyLnNldFRyYW5zaXRpb24ocGFyYW1zLnNwZWVkKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHN3aXBlci5zZXRUcmFuc2xhdGUoYWZ0ZXJCb3VuY2VQb3NpdGlvbik7XG4gICAgICAgICAgICAkd3JhcHBlckVsLnRyYW5zaXRpb25FbmQoKCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkKSByZXR1cm47XG4gICAgICAgICAgICAgIHN3aXBlci50cmFuc2l0aW9uRW5kKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LCAwKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHN3aXBlci52ZWxvY2l0eSkge1xuICAgICAgICBlbWl0KCdfZnJlZU1vZGVOb01vbWVudHVtUmVsZWFzZScpO1xuICAgICAgICBzd2lwZXIudXBkYXRlUHJvZ3Jlc3MobmV3UG9zaXRpb24pO1xuICAgICAgICBzd2lwZXIuc2V0VHJhbnNpdGlvbihtb21lbnR1bUR1cmF0aW9uKTtcbiAgICAgICAgc3dpcGVyLnNldFRyYW5zbGF0ZShuZXdQb3NpdGlvbik7XG4gICAgICAgIHN3aXBlci50cmFuc2l0aW9uU3RhcnQodHJ1ZSwgc3dpcGVyLnN3aXBlRGlyZWN0aW9uKTtcblxuICAgICAgICBpZiAoIXN3aXBlci5hbmltYXRpbmcpIHtcbiAgICAgICAgICBzd2lwZXIuYW5pbWF0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAkd3JhcHBlckVsLnRyYW5zaXRpb25FbmQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZCkgcmV0dXJuO1xuICAgICAgICAgICAgc3dpcGVyLnRyYW5zaXRpb25FbmQoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3dpcGVyLnVwZGF0ZVByb2dyZXNzKG5ld1Bvc2l0aW9uKTtcbiAgICAgIH1cblxuICAgICAgc3dpcGVyLnVwZGF0ZUFjdGl2ZUluZGV4KCk7XG4gICAgICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuICAgIH0gZWxzZSBpZiAocGFyYW1zLmZyZWVNb2RlLnN0aWNreSkge1xuICAgICAgc3dpcGVyLnNsaWRlVG9DbG9zZXN0KCk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChwYXJhbXMuZnJlZU1vZGUpIHtcbiAgICAgIGVtaXQoJ19mcmVlTW9kZU5vTW9tZW50dW1SZWxlYXNlJyk7XG4gICAgfVxuXG4gICAgaWYgKCFwYXJhbXMuZnJlZU1vZGUubW9tZW50dW0gfHwgdGltZURpZmYgPj0gcGFyYW1zLmxvbmdTd2lwZXNNcykge1xuICAgICAgc3dpcGVyLnVwZGF0ZVByb2dyZXNzKCk7XG4gICAgICBzd2lwZXIudXBkYXRlQWN0aXZlSW5kZXgoKTtcbiAgICAgIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmFzc2lnbihzd2lwZXIsIHtcbiAgICBmcmVlTW9kZToge1xuICAgICAgb25Ub3VjaE1vdmUsXG4gICAgICBvblRvdWNoRW5kXG4gICAgfVxuICB9KTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHcmlkKHtcbiAgc3dpcGVyLFxuICBleHRlbmRQYXJhbXNcbn0pIHtcbiAgZXh0ZW5kUGFyYW1zKHtcbiAgICBncmlkOiB7XG4gICAgICByb3dzOiAxLFxuICAgICAgZmlsbDogJ2NvbHVtbidcbiAgICB9XG4gIH0pO1xuICBsZXQgc2xpZGVzTnVtYmVyRXZlblRvUm93cztcbiAgbGV0IHNsaWRlc1BlclJvdztcbiAgbGV0IG51bUZ1bGxDb2x1bW5zO1xuXG4gIGNvbnN0IGluaXRTbGlkZXMgPSBzbGlkZXNMZW5ndGggPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIHNsaWRlc1BlclZpZXdcbiAgICB9ID0gc3dpcGVyLnBhcmFtcztcbiAgICBjb25zdCB7XG4gICAgICByb3dzLFxuICAgICAgZmlsbFxuICAgIH0gPSBzd2lwZXIucGFyYW1zLmdyaWQ7XG4gICAgc2xpZGVzUGVyUm93ID0gc2xpZGVzTnVtYmVyRXZlblRvUm93cyAvIHJvd3M7XG4gICAgbnVtRnVsbENvbHVtbnMgPSBNYXRoLmZsb29yKHNsaWRlc0xlbmd0aCAvIHJvd3MpO1xuXG4gICAgaWYgKE1hdGguZmxvb3Ioc2xpZGVzTGVuZ3RoIC8gcm93cykgPT09IHNsaWRlc0xlbmd0aCAvIHJvd3MpIHtcbiAgICAgIHNsaWRlc051bWJlckV2ZW5Ub1Jvd3MgPSBzbGlkZXNMZW5ndGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNsaWRlc051bWJlckV2ZW5Ub1Jvd3MgPSBNYXRoLmNlaWwoc2xpZGVzTGVuZ3RoIC8gcm93cykgKiByb3dzO1xuICAgIH1cblxuICAgIGlmIChzbGlkZXNQZXJWaWV3ICE9PSAnYXV0bycgJiYgZmlsbCA9PT0gJ3JvdycpIHtcbiAgICAgIHNsaWRlc051bWJlckV2ZW5Ub1Jvd3MgPSBNYXRoLm1heChzbGlkZXNOdW1iZXJFdmVuVG9Sb3dzLCBzbGlkZXNQZXJWaWV3ICogcm93cyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVNsaWRlID0gKGksIHNsaWRlLCBzbGlkZXNMZW5ndGgsIGdldERpcmVjdGlvbkxhYmVsKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgc2xpZGVzUGVyR3JvdXAsXG4gICAgICBzcGFjZUJldHdlZW5cbiAgICB9ID0gc3dpcGVyLnBhcmFtcztcbiAgICBjb25zdCB7XG4gICAgICByb3dzLFxuICAgICAgZmlsbFxuICAgIH0gPSBzd2lwZXIucGFyYW1zLmdyaWQ7IC8vIFNldCBzbGlkZXMgb3JkZXJcblxuICAgIGxldCBuZXdTbGlkZU9yZGVySW5kZXg7XG4gICAgbGV0IGNvbHVtbjtcbiAgICBsZXQgcm93O1xuXG4gICAgaWYgKGZpbGwgPT09ICdyb3cnICYmIHNsaWRlc1Blckdyb3VwID4gMSkge1xuICAgICAgY29uc3QgZ3JvdXBJbmRleCA9IE1hdGguZmxvb3IoaSAvIChzbGlkZXNQZXJHcm91cCAqIHJvd3MpKTtcbiAgICAgIGNvbnN0IHNsaWRlSW5kZXhJbkdyb3VwID0gaSAtIHJvd3MgKiBzbGlkZXNQZXJHcm91cCAqIGdyb3VwSW5kZXg7XG4gICAgICBjb25zdCBjb2x1bW5zSW5Hcm91cCA9IGdyb3VwSW5kZXggPT09IDAgPyBzbGlkZXNQZXJHcm91cCA6IE1hdGgubWluKE1hdGguY2VpbCgoc2xpZGVzTGVuZ3RoIC0gZ3JvdXBJbmRleCAqIHJvd3MgKiBzbGlkZXNQZXJHcm91cCkgLyByb3dzKSwgc2xpZGVzUGVyR3JvdXApO1xuICAgICAgcm93ID0gTWF0aC5mbG9vcihzbGlkZUluZGV4SW5Hcm91cCAvIGNvbHVtbnNJbkdyb3VwKTtcbiAgICAgIGNvbHVtbiA9IHNsaWRlSW5kZXhJbkdyb3VwIC0gcm93ICogY29sdW1uc0luR3JvdXAgKyBncm91cEluZGV4ICogc2xpZGVzUGVyR3JvdXA7XG4gICAgICBuZXdTbGlkZU9yZGVySW5kZXggPSBjb2x1bW4gKyByb3cgKiBzbGlkZXNOdW1iZXJFdmVuVG9Sb3dzIC8gcm93cztcbiAgICAgIHNsaWRlLmNzcyh7XG4gICAgICAgICctd2Via2l0LW9yZGVyJzogbmV3U2xpZGVPcmRlckluZGV4LFxuICAgICAgICBvcmRlcjogbmV3U2xpZGVPcmRlckluZGV4XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGZpbGwgPT09ICdjb2x1bW4nKSB7XG4gICAgICBjb2x1bW4gPSBNYXRoLmZsb29yKGkgLyByb3dzKTtcbiAgICAgIHJvdyA9IGkgLSBjb2x1bW4gKiByb3dzO1xuXG4gICAgICBpZiAoY29sdW1uID4gbnVtRnVsbENvbHVtbnMgfHwgY29sdW1uID09PSBudW1GdWxsQ29sdW1ucyAmJiByb3cgPT09IHJvd3MgLSAxKSB7XG4gICAgICAgIHJvdyArPSAxO1xuXG4gICAgICAgIGlmIChyb3cgPj0gcm93cykge1xuICAgICAgICAgIHJvdyA9IDA7XG4gICAgICAgICAgY29sdW1uICs9IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcm93ID0gTWF0aC5mbG9vcihpIC8gc2xpZGVzUGVyUm93KTtcbiAgICAgIGNvbHVtbiA9IGkgLSByb3cgKiBzbGlkZXNQZXJSb3c7XG4gICAgfVxuXG4gICAgc2xpZGUuY3NzKGdldERpcmVjdGlvbkxhYmVsKCdtYXJnaW4tdG9wJyksIHJvdyAhPT0gMCA/IHNwYWNlQmV0d2VlbiAmJiBgJHtzcGFjZUJldHdlZW59cHhgIDogJycpO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVdyYXBwZXJTaXplID0gKHNsaWRlU2l6ZSwgc25hcEdyaWQsIGdldERpcmVjdGlvbkxhYmVsKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgc3BhY2VCZXR3ZWVuLFxuICAgICAgY2VudGVyZWRTbGlkZXMsXG4gICAgICByb3VuZExlbmd0aHNcbiAgICB9ID0gc3dpcGVyLnBhcmFtcztcbiAgICBjb25zdCB7XG4gICAgICByb3dzXG4gICAgfSA9IHN3aXBlci5wYXJhbXMuZ3JpZDtcbiAgICBzd2lwZXIudmlydHVhbFNpemUgPSAoc2xpZGVTaXplICsgc3BhY2VCZXR3ZWVuKSAqIHNsaWRlc051bWJlckV2ZW5Ub1Jvd3M7XG4gICAgc3dpcGVyLnZpcnR1YWxTaXplID0gTWF0aC5jZWlsKHN3aXBlci52aXJ0dWFsU2l6ZSAvIHJvd3MpIC0gc3BhY2VCZXR3ZWVuO1xuICAgIHN3aXBlci4kd3JhcHBlckVsLmNzcyh7XG4gICAgICBbZ2V0RGlyZWN0aW9uTGFiZWwoJ3dpZHRoJyldOiBgJHtzd2lwZXIudmlydHVhbFNpemUgKyBzcGFjZUJldHdlZW59cHhgXG4gICAgfSk7XG5cbiAgICBpZiAoY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgIHNuYXBHcmlkLnNwbGljZSgwLCBzbmFwR3JpZC5sZW5ndGgpO1xuICAgICAgY29uc3QgbmV3U2xpZGVzR3JpZCA9IFtdO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNuYXBHcmlkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGxldCBzbGlkZXNHcmlkSXRlbSA9IHNuYXBHcmlkW2ldO1xuICAgICAgICBpZiAocm91bmRMZW5ndGhzKSBzbGlkZXNHcmlkSXRlbSA9IE1hdGguZmxvb3Ioc2xpZGVzR3JpZEl0ZW0pO1xuICAgICAgICBpZiAoc25hcEdyaWRbaV0gPCBzd2lwZXIudmlydHVhbFNpemUgKyBzbmFwR3JpZFswXSkgbmV3U2xpZGVzR3JpZC5wdXNoKHNsaWRlc0dyaWRJdGVtKTtcbiAgICAgIH1cblxuICAgICAgc25hcEdyaWQucHVzaCguLi5uZXdTbGlkZXNHcmlkKTtcbiAgICB9XG4gIH07XG5cbiAgc3dpcGVyLmdyaWQgPSB7XG4gICAgaW5pdFNsaWRlcyxcbiAgICB1cGRhdGVTbGlkZSxcbiAgICB1cGRhdGVXcmFwcGVyU2l6ZVxuICB9O1xufSIsImltcG9ydCB7IGdldFdpbmRvdywgZ2V0RG9jdW1lbnQgfSBmcm9tICdzc3Itd2luZG93JztcbmltcG9ydCAkIGZyb20gJy4uLy4uL3NoYXJlZC9kb20uanMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGFzaE5hdmlnYXRpb24oe1xuICBzd2lwZXIsXG4gIGV4dGVuZFBhcmFtcyxcbiAgZW1pdCxcbiAgb25cbn0pIHtcbiAgbGV0IGluaXRpYWxpemVkID0gZmFsc2U7XG4gIGNvbnN0IGRvY3VtZW50ID0gZ2V0RG9jdW1lbnQoKTtcbiAgY29uc3Qgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gIGV4dGVuZFBhcmFtcyh7XG4gICAgaGFzaE5hdmlnYXRpb246IHtcbiAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgcmVwbGFjZVN0YXRlOiBmYWxzZSxcbiAgICAgIHdhdGNoU3RhdGU6IGZhbHNlXG4gICAgfVxuICB9KTtcblxuICBjb25zdCBvbkhhc2hDaGFuZ2UgPSAoKSA9PiB7XG4gICAgZW1pdCgnaGFzaENoYW5nZScpO1xuICAgIGNvbnN0IG5ld0hhc2ggPSBkb2N1bWVudC5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoJyMnLCAnJyk7XG4gICAgY29uc3QgYWN0aXZlU2xpZGVIYXNoID0gc3dpcGVyLnNsaWRlcy5lcShzd2lwZXIuYWN0aXZlSW5kZXgpLmF0dHIoJ2RhdGEtaGFzaCcpO1xuXG4gICAgaWYgKG5ld0hhc2ggIT09IGFjdGl2ZVNsaWRlSGFzaCkge1xuICAgICAgY29uc3QgbmV3SW5kZXggPSBzd2lwZXIuJHdyYXBwZXJFbC5jaGlsZHJlbihgLiR7c3dpcGVyLnBhcmFtcy5zbGlkZUNsYXNzfVtkYXRhLWhhc2g9XCIke25ld0hhc2h9XCJdYCkuaW5kZXgoKTtcbiAgICAgIGlmICh0eXBlb2YgbmV3SW5kZXggPT09ICd1bmRlZmluZWQnKSByZXR1cm47XG4gICAgICBzd2lwZXIuc2xpZGVUbyhuZXdJbmRleCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNldEhhc2ggPSAoKSA9PiB7XG4gICAgaWYgKCFpbml0aWFsaXplZCB8fCAhc3dpcGVyLnBhcmFtcy5oYXNoTmF2aWdhdGlvbi5lbmFibGVkKSByZXR1cm47XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5oYXNoTmF2aWdhdGlvbi5yZXBsYWNlU3RhdGUgJiYgd2luZG93Lmhpc3RvcnkgJiYgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKSB7XG4gICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUobnVsbCwgbnVsbCwgYCMke3N3aXBlci5zbGlkZXMuZXEoc3dpcGVyLmFjdGl2ZUluZGV4KS5hdHRyKCdkYXRhLWhhc2gnKX1gIHx8ICcnKTtcbiAgICAgIGVtaXQoJ2hhc2hTZXQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc2xpZGUgPSBzd2lwZXIuc2xpZGVzLmVxKHN3aXBlci5hY3RpdmVJbmRleCk7XG4gICAgICBjb25zdCBoYXNoID0gc2xpZGUuYXR0cignZGF0YS1oYXNoJykgfHwgc2xpZGUuYXR0cignZGF0YS1oaXN0b3J5Jyk7XG4gICAgICBkb2N1bWVudC5sb2NhdGlvbi5oYXNoID0gaGFzaCB8fCAnJztcbiAgICAgIGVtaXQoJ2hhc2hTZXQnKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgICBpZiAoIXN3aXBlci5wYXJhbXMuaGFzaE5hdmlnYXRpb24uZW5hYmxlZCB8fCBzd2lwZXIucGFyYW1zLmhpc3RvcnkgJiYgc3dpcGVyLnBhcmFtcy5oaXN0b3J5LmVuYWJsZWQpIHJldHVybjtcbiAgICBpbml0aWFsaXplZCA9IHRydWU7XG4gICAgY29uc3QgaGFzaCA9IGRvY3VtZW50LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgnIycsICcnKTtcblxuICAgIGlmIChoYXNoKSB7XG4gICAgICBjb25zdCBzcGVlZCA9IDA7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsZW5ndGggPSBzd2lwZXIuc2xpZGVzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IHNsaWRlID0gc3dpcGVyLnNsaWRlcy5lcShpKTtcbiAgICAgICAgY29uc3Qgc2xpZGVIYXNoID0gc2xpZGUuYXR0cignZGF0YS1oYXNoJykgfHwgc2xpZGUuYXR0cignZGF0YS1oaXN0b3J5Jyk7XG5cbiAgICAgICAgaWYgKHNsaWRlSGFzaCA9PT0gaGFzaCAmJiAhc2xpZGUuaGFzQ2xhc3Moc3dpcGVyLnBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSkge1xuICAgICAgICAgIGNvbnN0IGluZGV4ID0gc2xpZGUuaW5kZXgoKTtcbiAgICAgICAgICBzd2lwZXIuc2xpZGVUbyhpbmRleCwgc3BlZWQsIHN3aXBlci5wYXJhbXMucnVuQ2FsbGJhY2tzT25Jbml0LCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzd2lwZXIucGFyYW1zLmhhc2hOYXZpZ2F0aW9uLndhdGNoU3RhdGUpIHtcbiAgICAgICQod2luZG93KS5vbignaGFzaGNoYW5nZScsIG9uSGFzaENoYW5nZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGRlc3Ryb3kgPSAoKSA9PiB7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMuaGFzaE5hdmlnYXRpb24ud2F0Y2hTdGF0ZSkge1xuICAgICAgJCh3aW5kb3cpLm9mZignaGFzaGNoYW5nZScsIG9uSGFzaENoYW5nZSk7XG4gICAgfVxuICB9O1xuXG4gIG9uKCdpbml0JywgKCkgPT4ge1xuICAgIGlmIChzd2lwZXIucGFyYW1zLmhhc2hOYXZpZ2F0aW9uLmVuYWJsZWQpIHtcbiAgICAgIGluaXQoKTtcbiAgICB9XG4gIH0pO1xuICBvbignZGVzdHJveScsICgpID0+IHtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5oYXNoTmF2aWdhdGlvbi5lbmFibGVkKSB7XG4gICAgICBkZXN0cm95KCk7XG4gICAgfVxuICB9KTtcbiAgb24oJ3RyYW5zaXRpb25FbmQgX2ZyZWVNb2RlTm9Nb21lbnR1bVJlbGVhc2UnLCAoKSA9PiB7XG4gICAgaWYgKGluaXRpYWxpemVkKSB7XG4gICAgICBzZXRIYXNoKCk7XG4gICAgfVxuICB9KTtcbiAgb24oJ3NsaWRlQ2hhbmdlJywgKCkgPT4ge1xuICAgIGlmIChpbml0aWFsaXplZCAmJiBzd2lwZXIucGFyYW1zLmNzc01vZGUpIHtcbiAgICAgIHNldEhhc2goKTtcbiAgICB9XG4gIH0pO1xufSIsImltcG9ydCB7IGdldFdpbmRvdyB9IGZyb20gJ3Nzci13aW5kb3cnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGlzdG9yeSh7XG4gIHN3aXBlcixcbiAgZXh0ZW5kUGFyYW1zLFxuICBvblxufSkge1xuICBleHRlbmRQYXJhbXMoe1xuICAgIGhpc3Rvcnk6IHtcbiAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgcm9vdDogJycsXG4gICAgICByZXBsYWNlU3RhdGU6IGZhbHNlLFxuICAgICAga2V5OiAnc2xpZGVzJ1xuICAgIH1cbiAgfSk7XG4gIGxldCBpbml0aWFsaXplZCA9IGZhbHNlO1xuICBsZXQgcGF0aHMgPSB7fTtcblxuICBjb25zdCBzbHVnaWZ5ID0gdGV4dCA9PiB7XG4gICAgcmV0dXJuIHRleHQudG9TdHJpbmcoKS5yZXBsYWNlKC9cXHMrL2csICctJykucmVwbGFjZSgvW15cXHctXSsvZywgJycpLnJlcGxhY2UoLy0tKy9nLCAnLScpLnJlcGxhY2UoL14tKy8sICcnKS5yZXBsYWNlKC8tKyQvLCAnJyk7XG4gIH07XG5cbiAgY29uc3QgZ2V0UGF0aFZhbHVlcyA9IHVybE92ZXJyaWRlID0+IHtcbiAgICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgICBsZXQgbG9jYXRpb247XG5cbiAgICBpZiAodXJsT3ZlcnJpZGUpIHtcbiAgICAgIGxvY2F0aW9uID0gbmV3IFVSTCh1cmxPdmVycmlkZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IHBhdGhBcnJheSA9IGxvY2F0aW9uLnBhdGhuYW1lLnNsaWNlKDEpLnNwbGl0KCcvJykuZmlsdGVyKHBhcnQgPT4gcGFydCAhPT0gJycpO1xuICAgIGNvbnN0IHRvdGFsID0gcGF0aEFycmF5Lmxlbmd0aDtcbiAgICBjb25zdCBrZXkgPSBwYXRoQXJyYXlbdG90YWwgLSAyXTtcbiAgICBjb25zdCB2YWx1ZSA9IHBhdGhBcnJheVt0b3RhbCAtIDFdO1xuICAgIHJldHVybiB7XG4gICAgICBrZXksXG4gICAgICB2YWx1ZVxuICAgIH07XG4gIH07XG5cbiAgY29uc3Qgc2V0SGlzdG9yeSA9IChrZXksIGluZGV4KSA9PiB7XG4gICAgY29uc3Qgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gICAgaWYgKCFpbml0aWFsaXplZCB8fCAhc3dpcGVyLnBhcmFtcy5oaXN0b3J5LmVuYWJsZWQpIHJldHVybjtcbiAgICBsZXQgbG9jYXRpb247XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy51cmwpIHtcbiAgICAgIGxvY2F0aW9uID0gbmV3IFVSTChzd2lwZXIucGFyYW1zLnVybCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IHNsaWRlID0gc3dpcGVyLnNsaWRlcy5lcShpbmRleCk7XG4gICAgbGV0IHZhbHVlID0gc2x1Z2lmeShzbGlkZS5hdHRyKCdkYXRhLWhpc3RvcnknKSk7XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5oaXN0b3J5LnJvb3QubGVuZ3RoID4gMCkge1xuICAgICAgbGV0IHJvb3QgPSBzd2lwZXIucGFyYW1zLmhpc3Rvcnkucm9vdDtcbiAgICAgIGlmIChyb290W3Jvb3QubGVuZ3RoIC0gMV0gPT09ICcvJykgcm9vdCA9IHJvb3Quc2xpY2UoMCwgcm9vdC5sZW5ndGggLSAxKTtcbiAgICAgIHZhbHVlID0gYCR7cm9vdH0vJHtrZXl9LyR7dmFsdWV9YDtcbiAgICB9IGVsc2UgaWYgKCFsb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICB2YWx1ZSA9IGAke2tleX0vJHt2YWx1ZX1gO1xuICAgIH1cblxuICAgIGNvbnN0IGN1cnJlbnRTdGF0ZSA9IHdpbmRvdy5oaXN0b3J5LnN0YXRlO1xuXG4gICAgaWYgKGN1cnJlbnRTdGF0ZSAmJiBjdXJyZW50U3RhdGUudmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMuaGlzdG9yeS5yZXBsYWNlU3RhdGUpIHtcbiAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh7XG4gICAgICAgIHZhbHVlXG4gICAgICB9LCBudWxsLCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7XG4gICAgICAgIHZhbHVlXG4gICAgICB9LCBudWxsLCB2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNjcm9sbFRvU2xpZGUgPSAoc3BlZWQsIHZhbHVlLCBydW5DYWxsYmFja3MpID0+IHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsZW5ndGggPSBzd2lwZXIuc2xpZGVzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IHNsaWRlID0gc3dpcGVyLnNsaWRlcy5lcShpKTtcbiAgICAgICAgY29uc3Qgc2xpZGVIaXN0b3J5ID0gc2x1Z2lmeShzbGlkZS5hdHRyKCdkYXRhLWhpc3RvcnknKSk7XG5cbiAgICAgICAgaWYgKHNsaWRlSGlzdG9yeSA9PT0gdmFsdWUgJiYgIXNsaWRlLmhhc0NsYXNzKHN3aXBlci5wYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcykpIHtcbiAgICAgICAgICBjb25zdCBpbmRleCA9IHNsaWRlLmluZGV4KCk7XG4gICAgICAgICAgc3dpcGVyLnNsaWRlVG8oaW5kZXgsIHNwZWVkLCBydW5DYWxsYmFja3MpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXBlci5zbGlkZVRvKDAsIHNwZWVkLCBydW5DYWxsYmFja3MpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzZXRIaXN0b3J5UG9wU3RhdGUgPSAoKSA9PiB7XG4gICAgcGF0aHMgPSBnZXRQYXRoVmFsdWVzKHN3aXBlci5wYXJhbXMudXJsKTtcbiAgICBzY3JvbGxUb1NsaWRlKHN3aXBlci5wYXJhbXMuc3BlZWQsIHN3aXBlci5wYXRocy52YWx1ZSwgZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgY29uc3Qgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gICAgaWYgKCFzd2lwZXIucGFyYW1zLmhpc3RvcnkpIHJldHVybjtcblxuICAgIGlmICghd2luZG93Lmhpc3RvcnkgfHwgIXdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSkge1xuICAgICAgc3dpcGVyLnBhcmFtcy5oaXN0b3J5LmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgIHN3aXBlci5wYXJhbXMuaGFzaE5hdmlnYXRpb24uZW5hYmxlZCA9IHRydWU7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIHBhdGhzID0gZ2V0UGF0aFZhbHVlcyhzd2lwZXIucGFyYW1zLnVybCk7XG4gICAgaWYgKCFwYXRocy5rZXkgJiYgIXBhdGhzLnZhbHVlKSByZXR1cm47XG4gICAgc2Nyb2xsVG9TbGlkZSgwLCBwYXRocy52YWx1ZSwgc3dpcGVyLnBhcmFtcy5ydW5DYWxsYmFja3NPbkluaXQpO1xuXG4gICAgaWYgKCFzd2lwZXIucGFyYW1zLmhpc3RvcnkucmVwbGFjZVN0YXRlKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCBzZXRIaXN0b3J5UG9wU3RhdGUpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBkZXN0cm95ID0gKCkgPT4ge1xuICAgIGNvbnN0IHdpbmRvdyA9IGdldFdpbmRvdygpO1xuXG4gICAgaWYgKCFzd2lwZXIucGFyYW1zLmhpc3RvcnkucmVwbGFjZVN0YXRlKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCBzZXRIaXN0b3J5UG9wU3RhdGUpO1xuICAgIH1cbiAgfTtcblxuICBvbignaW5pdCcsICgpID0+IHtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5oaXN0b3J5LmVuYWJsZWQpIHtcbiAgICAgIGluaXQoKTtcbiAgICB9XG4gIH0pO1xuICBvbignZGVzdHJveScsICgpID0+IHtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5oaXN0b3J5LmVuYWJsZWQpIHtcbiAgICAgIGRlc3Ryb3koKTtcbiAgICB9XG4gIH0pO1xuICBvbigndHJhbnNpdGlvbkVuZCBfZnJlZU1vZGVOb01vbWVudHVtUmVsZWFzZScsICgpID0+IHtcbiAgICBpZiAoaW5pdGlhbGl6ZWQpIHtcbiAgICAgIHNldEhpc3Rvcnkoc3dpcGVyLnBhcmFtcy5oaXN0b3J5LmtleSwgc3dpcGVyLmFjdGl2ZUluZGV4KTtcbiAgICB9XG4gIH0pO1xuICBvbignc2xpZGVDaGFuZ2UnLCAoKSA9PiB7XG4gICAgaWYgKGluaXRpYWxpemVkICYmIHN3aXBlci5wYXJhbXMuY3NzTW9kZSkge1xuICAgICAgc2V0SGlzdG9yeShzd2lwZXIucGFyYW1zLmhpc3Rvcnkua2V5LCBzd2lwZXIuYWN0aXZlSW5kZXgpO1xuICAgIH1cbiAgfSk7XG59IiwiLyogZXNsaW50LWRpc2FibGUgY29uc2lzdGVudC1yZXR1cm4gKi9cbmltcG9ydCB7IGdldFdpbmRvdywgZ2V0RG9jdW1lbnQgfSBmcm9tICdzc3Itd2luZG93JztcbmltcG9ydCAkIGZyb20gJy4uLy4uL3NoYXJlZC9kb20uanMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gS2V5Ym9hcmQoe1xuICBzd2lwZXIsXG4gIGV4dGVuZFBhcmFtcyxcbiAgb24sXG4gIGVtaXRcbn0pIHtcbiAgY29uc3QgZG9jdW1lbnQgPSBnZXREb2N1bWVudCgpO1xuICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgc3dpcGVyLmtleWJvYXJkID0ge1xuICAgIGVuYWJsZWQ6IGZhbHNlXG4gIH07XG4gIGV4dGVuZFBhcmFtcyh7XG4gICAga2V5Ym9hcmQ6IHtcbiAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgb25seUluVmlld3BvcnQ6IHRydWUsXG4gICAgICBwYWdlVXBEb3duOiB0cnVlXG4gICAgfVxuICB9KTtcblxuICBmdW5jdGlvbiBoYW5kbGUoZXZlbnQpIHtcbiAgICBpZiAoIXN3aXBlci5lbmFibGVkKSByZXR1cm47XG4gICAgY29uc3Qge1xuICAgICAgcnRsVHJhbnNsYXRlOiBydGxcbiAgICB9ID0gc3dpcGVyO1xuICAgIGxldCBlID0gZXZlbnQ7XG4gICAgaWYgKGUub3JpZ2luYWxFdmVudCkgZSA9IGUub3JpZ2luYWxFdmVudDsgLy8ganF1ZXJ5IGZpeFxuXG4gICAgY29uc3Qga2MgPSBlLmtleUNvZGUgfHwgZS5jaGFyQ29kZTtcbiAgICBjb25zdCBwYWdlVXBEb3duID0gc3dpcGVyLnBhcmFtcy5rZXlib2FyZC5wYWdlVXBEb3duO1xuICAgIGNvbnN0IGlzUGFnZVVwID0gcGFnZVVwRG93biAmJiBrYyA9PT0gMzM7XG4gICAgY29uc3QgaXNQYWdlRG93biA9IHBhZ2VVcERvd24gJiYga2MgPT09IDM0O1xuICAgIGNvbnN0IGlzQXJyb3dMZWZ0ID0ga2MgPT09IDM3O1xuICAgIGNvbnN0IGlzQXJyb3dSaWdodCA9IGtjID09PSAzOTtcbiAgICBjb25zdCBpc0Fycm93VXAgPSBrYyA9PT0gMzg7XG4gICAgY29uc3QgaXNBcnJvd0Rvd24gPSBrYyA9PT0gNDA7IC8vIERpcmVjdGlvbnMgbG9ja3NcblxuICAgIGlmICghc3dpcGVyLmFsbG93U2xpZGVOZXh0ICYmIChzd2lwZXIuaXNIb3Jpem9udGFsKCkgJiYgaXNBcnJvd1JpZ2h0IHx8IHN3aXBlci5pc1ZlcnRpY2FsKCkgJiYgaXNBcnJvd0Rvd24gfHwgaXNQYWdlRG93bikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIXN3aXBlci5hbGxvd1NsaWRlUHJldiAmJiAoc3dpcGVyLmlzSG9yaXpvbnRhbCgpICYmIGlzQXJyb3dMZWZ0IHx8IHN3aXBlci5pc1ZlcnRpY2FsKCkgJiYgaXNBcnJvd1VwIHx8IGlzUGFnZVVwKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChlLnNoaWZ0S2V5IHx8IGUuYWx0S2V5IHx8IGUuY3RybEtleSB8fCBlLm1ldGFLZXkpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ub2RlTmFtZSAmJiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaW5wdXQnIHx8IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3RleHRhcmVhJykpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMua2V5Ym9hcmQub25seUluVmlld3BvcnQgJiYgKGlzUGFnZVVwIHx8IGlzUGFnZURvd24gfHwgaXNBcnJvd0xlZnQgfHwgaXNBcnJvd1JpZ2h0IHx8IGlzQXJyb3dVcCB8fCBpc0Fycm93RG93bikpIHtcbiAgICAgIGxldCBpblZpZXcgPSBmYWxzZTsgLy8gQ2hlY2sgdGhhdCBzd2lwZXIgc2hvdWxkIGJlIGluc2lkZSBvZiB2aXNpYmxlIGFyZWEgb2Ygd2luZG93XG5cbiAgICAgIGlmIChzd2lwZXIuJGVsLnBhcmVudHMoYC4ke3N3aXBlci5wYXJhbXMuc2xpZGVDbGFzc31gKS5sZW5ndGggPiAwICYmIHN3aXBlci4kZWwucGFyZW50cyhgLiR7c3dpcGVyLnBhcmFtcy5zbGlkZUFjdGl2ZUNsYXNzfWApLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICBjb25zdCAkZWwgPSBzd2lwZXIuJGVsO1xuICAgICAgY29uc3Qgc3dpcGVyV2lkdGggPSAkZWxbMF0uY2xpZW50V2lkdGg7XG4gICAgICBjb25zdCBzd2lwZXJIZWlnaHQgPSAkZWxbMF0uY2xpZW50SGVpZ2h0O1xuICAgICAgY29uc3Qgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgIGNvbnN0IHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgIGNvbnN0IHN3aXBlck9mZnNldCA9IHN3aXBlci4kZWwub2Zmc2V0KCk7XG4gICAgICBpZiAocnRsKSBzd2lwZXJPZmZzZXQubGVmdCAtPSBzd2lwZXIuJGVsWzBdLnNjcm9sbExlZnQ7XG4gICAgICBjb25zdCBzd2lwZXJDb29yZCA9IFtbc3dpcGVyT2Zmc2V0LmxlZnQsIHN3aXBlck9mZnNldC50b3BdLCBbc3dpcGVyT2Zmc2V0LmxlZnQgKyBzd2lwZXJXaWR0aCwgc3dpcGVyT2Zmc2V0LnRvcF0sIFtzd2lwZXJPZmZzZXQubGVmdCwgc3dpcGVyT2Zmc2V0LnRvcCArIHN3aXBlckhlaWdodF0sIFtzd2lwZXJPZmZzZXQubGVmdCArIHN3aXBlcldpZHRoLCBzd2lwZXJPZmZzZXQudG9wICsgc3dpcGVySGVpZ2h0XV07XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3dpcGVyQ29vcmQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3QgcG9pbnQgPSBzd2lwZXJDb29yZFtpXTtcblxuICAgICAgICBpZiAocG9pbnRbMF0gPj0gMCAmJiBwb2ludFswXSA8PSB3aW5kb3dXaWR0aCAmJiBwb2ludFsxXSA+PSAwICYmIHBvaW50WzFdIDw9IHdpbmRvd0hlaWdodCkge1xuICAgICAgICAgIGlmIChwb2ludFswXSA9PT0gMCAmJiBwb2ludFsxXSA9PT0gMCkgY29udGludWU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICAgICAgICAgIGluVmlldyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFpblZpZXcpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgaWYgKHN3aXBlci5pc0hvcml6b250YWwoKSkge1xuICAgICAgaWYgKGlzUGFnZVVwIHx8IGlzUGFnZURvd24gfHwgaXNBcnJvd0xlZnQgfHwgaXNBcnJvd1JpZ2h0KSB7XG4gICAgICAgIGlmIChlLnByZXZlbnREZWZhdWx0KSBlLnByZXZlbnREZWZhdWx0KCk7ZWxzZSBlLnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmICgoaXNQYWdlRG93biB8fCBpc0Fycm93UmlnaHQpICYmICFydGwgfHwgKGlzUGFnZVVwIHx8IGlzQXJyb3dMZWZ0KSAmJiBydGwpIHN3aXBlci5zbGlkZU5leHQoKTtcbiAgICAgIGlmICgoaXNQYWdlVXAgfHwgaXNBcnJvd0xlZnQpICYmICFydGwgfHwgKGlzUGFnZURvd24gfHwgaXNBcnJvd1JpZ2h0KSAmJiBydGwpIHN3aXBlci5zbGlkZVByZXYoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGlzUGFnZVVwIHx8IGlzUGFnZURvd24gfHwgaXNBcnJvd1VwIHx8IGlzQXJyb3dEb3duKSB7XG4gICAgICAgIGlmIChlLnByZXZlbnREZWZhdWx0KSBlLnByZXZlbnREZWZhdWx0KCk7ZWxzZSBlLnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChpc1BhZ2VEb3duIHx8IGlzQXJyb3dEb3duKSBzd2lwZXIuc2xpZGVOZXh0KCk7XG4gICAgICBpZiAoaXNQYWdlVXAgfHwgaXNBcnJvd1VwKSBzd2lwZXIuc2xpZGVQcmV2KCk7XG4gICAgfVxuXG4gICAgZW1pdCgna2V5UHJlc3MnLCBrYyk7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVuYWJsZSgpIHtcbiAgICBpZiAoc3dpcGVyLmtleWJvYXJkLmVuYWJsZWQpIHJldHVybjtcbiAgICAkKGRvY3VtZW50KS5vbigna2V5ZG93bicsIGhhbmRsZSk7XG4gICAgc3dpcGVyLmtleWJvYXJkLmVuYWJsZWQgPSB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gZGlzYWJsZSgpIHtcbiAgICBpZiAoIXN3aXBlci5rZXlib2FyZC5lbmFibGVkKSByZXR1cm47XG4gICAgJChkb2N1bWVudCkub2ZmKCdrZXlkb3duJywgaGFuZGxlKTtcbiAgICBzd2lwZXIua2V5Ym9hcmQuZW5hYmxlZCA9IGZhbHNlO1xuICB9XG5cbiAgb24oJ2luaXQnLCAoKSA9PiB7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMua2V5Ym9hcmQuZW5hYmxlZCkge1xuICAgICAgZW5hYmxlKCk7XG4gICAgfVxuICB9KTtcbiAgb24oJ2Rlc3Ryb3knLCAoKSA9PiB7XG4gICAgaWYgKHN3aXBlci5rZXlib2FyZC5lbmFibGVkKSB7XG4gICAgICBkaXNhYmxlKCk7XG4gICAgfVxuICB9KTtcbiAgT2JqZWN0LmFzc2lnbihzd2lwZXIua2V5Ym9hcmQsIHtcbiAgICBlbmFibGUsXG4gICAgZGlzYWJsZVxuICB9KTtcbn0iLCJpbXBvcnQgeyBnZXRXaW5kb3cgfSBmcm9tICdzc3Itd2luZG93JztcbmltcG9ydCAkIGZyb20gJy4uLy4uL3NoYXJlZC9kb20uanMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF6eSh7XG4gIHN3aXBlcixcbiAgZXh0ZW5kUGFyYW1zLFxuICBvbixcbiAgZW1pdFxufSkge1xuICBleHRlbmRQYXJhbXMoe1xuICAgIGxhenk6IHtcbiAgICAgIGNoZWNrSW5WaWV3OiBmYWxzZSxcbiAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgbG9hZFByZXZOZXh0OiBmYWxzZSxcbiAgICAgIGxvYWRQcmV2TmV4dEFtb3VudDogMSxcbiAgICAgIGxvYWRPblRyYW5zaXRpb25TdGFydDogZmFsc2UsXG4gICAgICBzY3JvbGxpbmdFbGVtZW50OiAnJyxcbiAgICAgIGVsZW1lbnRDbGFzczogJ3N3aXBlci1sYXp5JyxcbiAgICAgIGxvYWRpbmdDbGFzczogJ3N3aXBlci1sYXp5LWxvYWRpbmcnLFxuICAgICAgbG9hZGVkQ2xhc3M6ICdzd2lwZXItbGF6eS1sb2FkZWQnLFxuICAgICAgcHJlbG9hZGVyQ2xhc3M6ICdzd2lwZXItbGF6eS1wcmVsb2FkZXInXG4gICAgfVxuICB9KTtcbiAgc3dpcGVyLmxhenkgPSB7fTtcbiAgbGV0IHNjcm9sbEhhbmRsZXJBdHRhY2hlZCA9IGZhbHNlO1xuICBsZXQgaW5pdGlhbEltYWdlTG9hZGVkID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gbG9hZEluU2xpZGUoaW5kZXgsIGxvYWRJbkR1cGxpY2F0ZSA9IHRydWUpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLmxhenk7XG4gICAgaWYgKHR5cGVvZiBpbmRleCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcbiAgICBpZiAoc3dpcGVyLnNsaWRlcy5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICBjb25zdCBpc1ZpcnR1YWwgPSBzd2lwZXIudmlydHVhbCAmJiBzd2lwZXIucGFyYW1zLnZpcnR1YWwuZW5hYmxlZDtcbiAgICBjb25zdCAkc2xpZGVFbCA9IGlzVmlydHVhbCA/IHN3aXBlci4kd3JhcHBlckVsLmNoaWxkcmVuKGAuJHtzd2lwZXIucGFyYW1zLnNsaWRlQ2xhc3N9W2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJHtpbmRleH1cIl1gKSA6IHN3aXBlci5zbGlkZXMuZXEoaW5kZXgpO1xuICAgIGNvbnN0ICRpbWFnZXMgPSAkc2xpZGVFbC5maW5kKGAuJHtwYXJhbXMuZWxlbWVudENsYXNzfTpub3QoLiR7cGFyYW1zLmxvYWRlZENsYXNzfSk6bm90KC4ke3BhcmFtcy5sb2FkaW5nQ2xhc3N9KWApO1xuXG4gICAgaWYgKCRzbGlkZUVsLmhhc0NsYXNzKHBhcmFtcy5lbGVtZW50Q2xhc3MpICYmICEkc2xpZGVFbC5oYXNDbGFzcyhwYXJhbXMubG9hZGVkQ2xhc3MpICYmICEkc2xpZGVFbC5oYXNDbGFzcyhwYXJhbXMubG9hZGluZ0NsYXNzKSkge1xuICAgICAgJGltYWdlcy5wdXNoKCRzbGlkZUVsWzBdKTtcbiAgICB9XG5cbiAgICBpZiAoJGltYWdlcy5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICAkaW1hZ2VzLmVhY2goaW1hZ2VFbCA9PiB7XG4gICAgICBjb25zdCAkaW1hZ2VFbCA9ICQoaW1hZ2VFbCk7XG4gICAgICAkaW1hZ2VFbC5hZGRDbGFzcyhwYXJhbXMubG9hZGluZ0NsYXNzKTtcbiAgICAgIGNvbnN0IGJhY2tncm91bmQgPSAkaW1hZ2VFbC5hdHRyKCdkYXRhLWJhY2tncm91bmQnKTtcbiAgICAgIGNvbnN0IHNyYyA9ICRpbWFnZUVsLmF0dHIoJ2RhdGEtc3JjJyk7XG4gICAgICBjb25zdCBzcmNzZXQgPSAkaW1hZ2VFbC5hdHRyKCdkYXRhLXNyY3NldCcpO1xuICAgICAgY29uc3Qgc2l6ZXMgPSAkaW1hZ2VFbC5hdHRyKCdkYXRhLXNpemVzJyk7XG4gICAgICBjb25zdCAkcGljdHVyZUVsID0gJGltYWdlRWwucGFyZW50KCdwaWN0dXJlJyk7XG4gICAgICBzd2lwZXIubG9hZEltYWdlKCRpbWFnZUVsWzBdLCBzcmMgfHwgYmFja2dyb3VuZCwgc3Jjc2V0LCBzaXplcywgZmFsc2UsICgpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzd2lwZXIgPT09ICd1bmRlZmluZWQnIHx8IHN3aXBlciA9PT0gbnVsbCB8fCAhc3dpcGVyIHx8IHN3aXBlciAmJiAhc3dpcGVyLnBhcmFtcyB8fCBzd2lwZXIuZGVzdHJveWVkKSByZXR1cm47XG5cbiAgICAgICAgaWYgKGJhY2tncm91bmQpIHtcbiAgICAgICAgICAkaW1hZ2VFbC5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnLCBgdXJsKFwiJHtiYWNrZ3JvdW5kfVwiKWApO1xuICAgICAgICAgICRpbWFnZUVsLnJlbW92ZUF0dHIoJ2RhdGEtYmFja2dyb3VuZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChzcmNzZXQpIHtcbiAgICAgICAgICAgICRpbWFnZUVsLmF0dHIoJ3NyY3NldCcsIHNyY3NldCk7XG4gICAgICAgICAgICAkaW1hZ2VFbC5yZW1vdmVBdHRyKCdkYXRhLXNyY3NldCcpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzaXplcykge1xuICAgICAgICAgICAgJGltYWdlRWwuYXR0cignc2l6ZXMnLCBzaXplcyk7XG4gICAgICAgICAgICAkaW1hZ2VFbC5yZW1vdmVBdHRyKCdkYXRhLXNpemVzJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCRwaWN0dXJlRWwubGVuZ3RoKSB7XG4gICAgICAgICAgICAkcGljdHVyZUVsLmNoaWxkcmVuKCdzb3VyY2UnKS5lYWNoKHNvdXJjZUVsID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgJHNvdXJjZSA9ICQoc291cmNlRWwpO1xuXG4gICAgICAgICAgICAgIGlmICgkc291cmNlLmF0dHIoJ2RhdGEtc3Jjc2V0JykpIHtcbiAgICAgICAgICAgICAgICAkc291cmNlLmF0dHIoJ3NyY3NldCcsICRzb3VyY2UuYXR0cignZGF0YS1zcmNzZXQnKSk7XG4gICAgICAgICAgICAgICAgJHNvdXJjZS5yZW1vdmVBdHRyKCdkYXRhLXNyY3NldCcpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc3JjKSB7XG4gICAgICAgICAgICAkaW1hZ2VFbC5hdHRyKCdzcmMnLCBzcmMpO1xuICAgICAgICAgICAgJGltYWdlRWwucmVtb3ZlQXR0cignZGF0YS1zcmMnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAkaW1hZ2VFbC5hZGRDbGFzcyhwYXJhbXMubG9hZGVkQ2xhc3MpLnJlbW92ZUNsYXNzKHBhcmFtcy5sb2FkaW5nQ2xhc3MpO1xuICAgICAgICAkc2xpZGVFbC5maW5kKGAuJHtwYXJhbXMucHJlbG9hZGVyQ2xhc3N9YCkucmVtb3ZlKCk7XG5cbiAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMubG9vcCAmJiBsb2FkSW5EdXBsaWNhdGUpIHtcbiAgICAgICAgICBjb25zdCBzbGlkZU9yaWdpbmFsSW5kZXggPSAkc2xpZGVFbC5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpO1xuXG4gICAgICAgICAgaWYgKCRzbGlkZUVsLmhhc0NsYXNzKHN3aXBlci5wYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcykpIHtcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsU2xpZGUgPSBzd2lwZXIuJHdyYXBwZXJFbC5jaGlsZHJlbihgW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJHtzbGlkZU9yaWdpbmFsSW5kZXh9XCJdOm5vdCguJHtzd2lwZXIucGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3N9KWApO1xuICAgICAgICAgICAgbG9hZEluU2xpZGUob3JpZ2luYWxTbGlkZS5pbmRleCgpLCBmYWxzZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGR1cGxpY2F0ZWRTbGlkZSA9IHN3aXBlci4kd3JhcHBlckVsLmNoaWxkcmVuKGAuJHtzd2lwZXIucGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3N9W2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJHtzbGlkZU9yaWdpbmFsSW5kZXh9XCJdYCk7XG4gICAgICAgICAgICBsb2FkSW5TbGlkZShkdXBsaWNhdGVkU2xpZGUuaW5kZXgoKSwgZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGVtaXQoJ2xhenlJbWFnZVJlYWR5JywgJHNsaWRlRWxbMF0sICRpbWFnZUVsWzBdKTtcblxuICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy5hdXRvSGVpZ2h0KSB7XG4gICAgICAgICAgc3dpcGVyLnVwZGF0ZUF1dG9IZWlnaHQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBlbWl0KCdsYXp5SW1hZ2VMb2FkJywgJHNsaWRlRWxbMF0sICRpbWFnZUVsWzBdKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxvYWQoKSB7XG4gICAgY29uc3Qge1xuICAgICAgJHdyYXBwZXJFbCxcbiAgICAgIHBhcmFtczogc3dpcGVyUGFyYW1zLFxuICAgICAgc2xpZGVzLFxuICAgICAgYWN0aXZlSW5kZXhcbiAgICB9ID0gc3dpcGVyO1xuICAgIGNvbnN0IGlzVmlydHVhbCA9IHN3aXBlci52aXJ0dWFsICYmIHN3aXBlclBhcmFtcy52aXJ0dWFsLmVuYWJsZWQ7XG4gICAgY29uc3QgcGFyYW1zID0gc3dpcGVyUGFyYW1zLmxhenk7XG4gICAgbGV0IHNsaWRlc1BlclZpZXcgPSBzd2lwZXJQYXJhbXMuc2xpZGVzUGVyVmlldztcblxuICAgIGlmIChzbGlkZXNQZXJWaWV3ID09PSAnYXV0bycpIHtcbiAgICAgIHNsaWRlc1BlclZpZXcgPSAwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNsaWRlRXhpc3QoaW5kZXgpIHtcbiAgICAgIGlmIChpc1ZpcnR1YWwpIHtcbiAgICAgICAgaWYgKCR3cmFwcGVyRWwuY2hpbGRyZW4oYC4ke3N3aXBlclBhcmFtcy5zbGlkZUNsYXNzfVtkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIiR7aW5kZXh9XCJdYCkubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2xpZGVzW2luZGV4XSkgcmV0dXJuIHRydWU7XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzbGlkZUluZGV4KHNsaWRlRWwpIHtcbiAgICAgIGlmIChpc1ZpcnR1YWwpIHtcbiAgICAgICAgcmV0dXJuICQoc2xpZGVFbCkuYXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuICQoc2xpZGVFbCkuaW5kZXgoKTtcbiAgICB9XG5cbiAgICBpZiAoIWluaXRpYWxJbWFnZUxvYWRlZCkgaW5pdGlhbEltYWdlTG9hZGVkID0gdHJ1ZTtcblxuICAgIGlmIChzd2lwZXIucGFyYW1zLndhdGNoU2xpZGVzUHJvZ3Jlc3MpIHtcbiAgICAgICR3cmFwcGVyRWwuY2hpbGRyZW4oYC4ke3N3aXBlclBhcmFtcy5zbGlkZVZpc2libGVDbGFzc31gKS5lYWNoKHNsaWRlRWwgPT4ge1xuICAgICAgICBjb25zdCBpbmRleCA9IGlzVmlydHVhbCA/ICQoc2xpZGVFbCkuYXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKSA6ICQoc2xpZGVFbCkuaW5kZXgoKTtcbiAgICAgICAgbG9hZEluU2xpZGUoaW5kZXgpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChzbGlkZXNQZXJWaWV3ID4gMSkge1xuICAgICAgZm9yIChsZXQgaSA9IGFjdGl2ZUluZGV4OyBpIDwgYWN0aXZlSW5kZXggKyBzbGlkZXNQZXJWaWV3OyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHNsaWRlRXhpc3QoaSkpIGxvYWRJblNsaWRlKGkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsb2FkSW5TbGlkZShhY3RpdmVJbmRleCk7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy5sb2FkUHJldk5leHQpIHtcbiAgICAgIGlmIChzbGlkZXNQZXJWaWV3ID4gMSB8fCBwYXJhbXMubG9hZFByZXZOZXh0QW1vdW50ICYmIHBhcmFtcy5sb2FkUHJldk5leHRBbW91bnQgPiAxKSB7XG4gICAgICAgIGNvbnN0IGFtb3VudCA9IHBhcmFtcy5sb2FkUHJldk5leHRBbW91bnQ7XG4gICAgICAgIGNvbnN0IHNwdiA9IHNsaWRlc1BlclZpZXc7XG4gICAgICAgIGNvbnN0IG1heEluZGV4ID0gTWF0aC5taW4oYWN0aXZlSW5kZXggKyBzcHYgKyBNYXRoLm1heChhbW91bnQsIHNwdiksIHNsaWRlcy5sZW5ndGgpO1xuICAgICAgICBjb25zdCBtaW5JbmRleCA9IE1hdGgubWF4KGFjdGl2ZUluZGV4IC0gTWF0aC5tYXgoc3B2LCBhbW91bnQpLCAwKTsgLy8gTmV4dCBTbGlkZXNcblxuICAgICAgICBmb3IgKGxldCBpID0gYWN0aXZlSW5kZXggKyBzbGlkZXNQZXJWaWV3OyBpIDwgbWF4SW5kZXg7IGkgKz0gMSkge1xuICAgICAgICAgIGlmIChzbGlkZUV4aXN0KGkpKSBsb2FkSW5TbGlkZShpKTtcbiAgICAgICAgfSAvLyBQcmV2IFNsaWRlc1xuXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IG1pbkluZGV4OyBpIDwgYWN0aXZlSW5kZXg7IGkgKz0gMSkge1xuICAgICAgICAgIGlmIChzbGlkZUV4aXN0KGkpKSBsb2FkSW5TbGlkZShpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbmV4dFNsaWRlID0gJHdyYXBwZXJFbC5jaGlsZHJlbihgLiR7c3dpcGVyUGFyYW1zLnNsaWRlTmV4dENsYXNzfWApO1xuICAgICAgICBpZiAobmV4dFNsaWRlLmxlbmd0aCA+IDApIGxvYWRJblNsaWRlKHNsaWRlSW5kZXgobmV4dFNsaWRlKSk7XG4gICAgICAgIGNvbnN0IHByZXZTbGlkZSA9ICR3cmFwcGVyRWwuY2hpbGRyZW4oYC4ke3N3aXBlclBhcmFtcy5zbGlkZVByZXZDbGFzc31gKTtcbiAgICAgICAgaWYgKHByZXZTbGlkZS5sZW5ndGggPiAwKSBsb2FkSW5TbGlkZShzbGlkZUluZGV4KHByZXZTbGlkZSkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrSW5WaWV3T25Mb2FkKCkge1xuICAgIGNvbnN0IHdpbmRvdyA9IGdldFdpbmRvdygpO1xuICAgIGlmICghc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQpIHJldHVybjtcbiAgICBjb25zdCAkc2Nyb2xsRWxlbWVudCA9IHN3aXBlci5wYXJhbXMubGF6eS5zY3JvbGxpbmdFbGVtZW50ID8gJChzd2lwZXIucGFyYW1zLmxhenkuc2Nyb2xsaW5nRWxlbWVudCkgOiAkKHdpbmRvdyk7XG4gICAgY29uc3QgaXNXaW5kb3cgPSAkc2Nyb2xsRWxlbWVudFswXSA9PT0gd2luZG93O1xuICAgIGNvbnN0IHNjcm9sbEVsZW1lbnRXaWR0aCA9IGlzV2luZG93ID8gd2luZG93LmlubmVyV2lkdGggOiAkc2Nyb2xsRWxlbWVudFswXS5vZmZzZXRXaWR0aDtcbiAgICBjb25zdCBzY3JvbGxFbGVtZW50SGVpZ2h0ID0gaXNXaW5kb3cgPyB3aW5kb3cuaW5uZXJIZWlnaHQgOiAkc2Nyb2xsRWxlbWVudFswXS5vZmZzZXRIZWlnaHQ7XG4gICAgY29uc3Qgc3dpcGVyT2Zmc2V0ID0gc3dpcGVyLiRlbC5vZmZzZXQoKTtcbiAgICBjb25zdCB7XG4gICAgICBydGxUcmFuc2xhdGU6IHJ0bFxuICAgIH0gPSBzd2lwZXI7XG4gICAgbGV0IGluVmlldyA9IGZhbHNlO1xuICAgIGlmIChydGwpIHN3aXBlck9mZnNldC5sZWZ0IC09IHN3aXBlci4kZWxbMF0uc2Nyb2xsTGVmdDtcbiAgICBjb25zdCBzd2lwZXJDb29yZCA9IFtbc3dpcGVyT2Zmc2V0LmxlZnQsIHN3aXBlck9mZnNldC50b3BdLCBbc3dpcGVyT2Zmc2V0LmxlZnQgKyBzd2lwZXIud2lkdGgsIHN3aXBlck9mZnNldC50b3BdLCBbc3dpcGVyT2Zmc2V0LmxlZnQsIHN3aXBlck9mZnNldC50b3AgKyBzd2lwZXIuaGVpZ2h0XSwgW3N3aXBlck9mZnNldC5sZWZ0ICsgc3dpcGVyLndpZHRoLCBzd2lwZXJPZmZzZXQudG9wICsgc3dpcGVyLmhlaWdodF1dO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzd2lwZXJDb29yZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgcG9pbnQgPSBzd2lwZXJDb29yZFtpXTtcblxuICAgICAgaWYgKHBvaW50WzBdID49IDAgJiYgcG9pbnRbMF0gPD0gc2Nyb2xsRWxlbWVudFdpZHRoICYmIHBvaW50WzFdID49IDAgJiYgcG9pbnRbMV0gPD0gc2Nyb2xsRWxlbWVudEhlaWdodCkge1xuICAgICAgICBpZiAocG9pbnRbMF0gPT09IDAgJiYgcG9pbnRbMV0gPT09IDApIGNvbnRpbnVlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgICAgICAgaW5WaWV3ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwYXNzaXZlTGlzdGVuZXIgPSBzd2lwZXIudG91Y2hFdmVudHMuc3RhcnQgPT09ICd0b3VjaHN0YXJ0JyAmJiBzd2lwZXIuc3VwcG9ydC5wYXNzaXZlTGlzdGVuZXIgJiYgc3dpcGVyLnBhcmFtcy5wYXNzaXZlTGlzdGVuZXJzID8ge1xuICAgICAgcGFzc2l2ZTogdHJ1ZSxcbiAgICAgIGNhcHR1cmU6IGZhbHNlXG4gICAgfSA6IGZhbHNlO1xuXG4gICAgaWYgKGluVmlldykge1xuICAgICAgbG9hZCgpO1xuICAgICAgJHNjcm9sbEVsZW1lbnQub2ZmKCdzY3JvbGwnLCBjaGVja0luVmlld09uTG9hZCwgcGFzc2l2ZUxpc3RlbmVyKTtcbiAgICB9IGVsc2UgaWYgKCFzY3JvbGxIYW5kbGVyQXR0YWNoZWQpIHtcbiAgICAgIHNjcm9sbEhhbmRsZXJBdHRhY2hlZCA9IHRydWU7XG4gICAgICAkc2Nyb2xsRWxlbWVudC5vbignc2Nyb2xsJywgY2hlY2tJblZpZXdPbkxvYWQsIHBhc3NpdmVMaXN0ZW5lcik7XG4gICAgfVxuICB9XG5cbiAgb24oJ2JlZm9yZUluaXQnLCAoKSA9PiB7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMubGF6eS5lbmFibGVkICYmIHN3aXBlci5wYXJhbXMucHJlbG9hZEltYWdlcykge1xuICAgICAgc3dpcGVyLnBhcmFtcy5wcmVsb2FkSW1hZ2VzID0gZmFsc2U7XG4gICAgfVxuICB9KTtcbiAgb24oJ2luaXQnLCAoKSA9PiB7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMubGF6eS5lbmFibGVkKSB7XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5sYXp5LmNoZWNrSW5WaWV3KSB7XG4gICAgICAgIGNoZWNrSW5WaWV3T25Mb2FkKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2FkKCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgb24oJ3Njcm9sbCcsICgpID0+IHtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5mcmVlTW9kZSAmJiBzd2lwZXIucGFyYW1zLmZyZWVNb2RlLmVuYWJsZWQgJiYgIXN3aXBlci5wYXJhbXMuZnJlZU1vZGUuc3RpY2t5KSB7XG4gICAgICBsb2FkKCk7XG4gICAgfVxuICB9KTtcbiAgb24oJ3Njcm9sbGJhckRyYWdNb3ZlIHJlc2l6ZSBfZnJlZU1vZGVOb01vbWVudHVtUmVsZWFzZScsICgpID0+IHtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5sYXp5LmVuYWJsZWQpIHtcbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLmxhenkuY2hlY2tJblZpZXcpIHtcbiAgICAgICAgY2hlY2tJblZpZXdPbkxvYWQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvYWQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICBvbigndHJhbnNpdGlvblN0YXJ0JywgKCkgPT4ge1xuICAgIGlmIChzd2lwZXIucGFyYW1zLmxhenkuZW5hYmxlZCkge1xuICAgICAgaWYgKHN3aXBlci5wYXJhbXMubGF6eS5sb2FkT25UcmFuc2l0aW9uU3RhcnQgfHwgIXN3aXBlci5wYXJhbXMubGF6eS5sb2FkT25UcmFuc2l0aW9uU3RhcnQgJiYgIWluaXRpYWxJbWFnZUxvYWRlZCkge1xuICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy5sYXp5LmNoZWNrSW5WaWV3KSB7XG4gICAgICAgICAgY2hlY2tJblZpZXdPbkxvYWQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsb2FkKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICBvbigndHJhbnNpdGlvbkVuZCcsICgpID0+IHtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5sYXp5LmVuYWJsZWQgJiYgIXN3aXBlci5wYXJhbXMubGF6eS5sb2FkT25UcmFuc2l0aW9uU3RhcnQpIHtcbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLmxhenkuY2hlY2tJblZpZXcpIHtcbiAgICAgICAgY2hlY2tJblZpZXdPbkxvYWQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvYWQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICBvbignc2xpZGVDaGFuZ2UnLCAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgbGF6eSxcbiAgICAgIGNzc01vZGUsXG4gICAgICB3YXRjaFNsaWRlc1Byb2dyZXNzLFxuICAgICAgdG91Y2hSZWxlYXNlT25FZGdlcyxcbiAgICAgIHJlc2lzdGFuY2VSYXRpb1xuICAgIH0gPSBzd2lwZXIucGFyYW1zO1xuXG4gICAgaWYgKGxhenkuZW5hYmxlZCAmJiAoY3NzTW9kZSB8fCB3YXRjaFNsaWRlc1Byb2dyZXNzICYmICh0b3VjaFJlbGVhc2VPbkVkZ2VzIHx8IHJlc2lzdGFuY2VSYXRpbyA9PT0gMCkpKSB7XG4gICAgICBsb2FkKCk7XG4gICAgfVxuICB9KTtcbiAgT2JqZWN0LmFzc2lnbihzd2lwZXIubGF6eSwge1xuICAgIGxvYWQsXG4gICAgbG9hZEluU2xpZGVcbiAgfSk7XG59IiwiaW1wb3J0IGFwcGVuZFNsaWRlIGZyb20gJy4vbWV0aG9kcy9hcHBlbmRTbGlkZS5qcyc7XG5pbXBvcnQgcHJlcGVuZFNsaWRlIGZyb20gJy4vbWV0aG9kcy9wcmVwZW5kU2xpZGUuanMnO1xuaW1wb3J0IGFkZFNsaWRlIGZyb20gJy4vbWV0aG9kcy9hZGRTbGlkZS5qcyc7XG5pbXBvcnQgcmVtb3ZlU2xpZGUgZnJvbSAnLi9tZXRob2RzL3JlbW92ZVNsaWRlLmpzJztcbmltcG9ydCByZW1vdmVBbGxTbGlkZXMgZnJvbSAnLi9tZXRob2RzL3JlbW92ZUFsbFNsaWRlcy5qcyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYW5pcHVsYXRpb24oe1xuICBzd2lwZXJcbn0pIHtcbiAgT2JqZWN0LmFzc2lnbihzd2lwZXIsIHtcbiAgICBhcHBlbmRTbGlkZTogYXBwZW5kU2xpZGUuYmluZChzd2lwZXIpLFxuICAgIHByZXBlbmRTbGlkZTogcHJlcGVuZFNsaWRlLmJpbmQoc3dpcGVyKSxcbiAgICBhZGRTbGlkZTogYWRkU2xpZGUuYmluZChzd2lwZXIpLFxuICAgIHJlbW92ZVNsaWRlOiByZW1vdmVTbGlkZS5iaW5kKHN3aXBlciksXG4gICAgcmVtb3ZlQWxsU2xpZGVzOiByZW1vdmVBbGxTbGlkZXMuYmluZChzd2lwZXIpXG4gIH0pO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFNsaWRlKGluZGV4LCBzbGlkZXMpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3Qge1xuICAgICR3cmFwcGVyRWwsXG4gICAgcGFyYW1zLFxuICAgIGFjdGl2ZUluZGV4XG4gIH0gPSBzd2lwZXI7XG4gIGxldCBhY3RpdmVJbmRleEJ1ZmZlciA9IGFjdGl2ZUluZGV4O1xuXG4gIGlmIChwYXJhbXMubG9vcCkge1xuICAgIGFjdGl2ZUluZGV4QnVmZmVyIC09IHN3aXBlci5sb29wZWRTbGlkZXM7XG4gICAgc3dpcGVyLmxvb3BEZXN0cm95KCk7XG4gICAgc3dpcGVyLnNsaWRlcyA9ICR3cmFwcGVyRWwuY2hpbGRyZW4oYC4ke3BhcmFtcy5zbGlkZUNsYXNzfWApO1xuICB9XG5cbiAgY29uc3QgYmFzZUxlbmd0aCA9IHN3aXBlci5zbGlkZXMubGVuZ3RoO1xuXG4gIGlmIChpbmRleCA8PSAwKSB7XG4gICAgc3dpcGVyLnByZXBlbmRTbGlkZShzbGlkZXMpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmRleCA+PSBiYXNlTGVuZ3RoKSB7XG4gICAgc3dpcGVyLmFwcGVuZFNsaWRlKHNsaWRlcyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IG5ld0FjdGl2ZUluZGV4ID0gYWN0aXZlSW5kZXhCdWZmZXIgPiBpbmRleCA/IGFjdGl2ZUluZGV4QnVmZmVyICsgMSA6IGFjdGl2ZUluZGV4QnVmZmVyO1xuICBjb25zdCBzbGlkZXNCdWZmZXIgPSBbXTtcblxuICBmb3IgKGxldCBpID0gYmFzZUxlbmd0aCAtIDE7IGkgPj0gaW5kZXg7IGkgLT0gMSkge1xuICAgIGNvbnN0IGN1cnJlbnRTbGlkZSA9IHN3aXBlci5zbGlkZXMuZXEoaSk7XG4gICAgY3VycmVudFNsaWRlLnJlbW92ZSgpO1xuICAgIHNsaWRlc0J1ZmZlci51bnNoaWZ0KGN1cnJlbnRTbGlkZSk7XG4gIH1cblxuICBpZiAodHlwZW9mIHNsaWRlcyA9PT0gJ29iamVjdCcgJiYgJ2xlbmd0aCcgaW4gc2xpZGVzKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChzbGlkZXNbaV0pICR3cmFwcGVyRWwuYXBwZW5kKHNsaWRlc1tpXSk7XG4gICAgfVxuXG4gICAgbmV3QWN0aXZlSW5kZXggPSBhY3RpdmVJbmRleEJ1ZmZlciA+IGluZGV4ID8gYWN0aXZlSW5kZXhCdWZmZXIgKyBzbGlkZXMubGVuZ3RoIDogYWN0aXZlSW5kZXhCdWZmZXI7XG4gIH0gZWxzZSB7XG4gICAgJHdyYXBwZXJFbC5hcHBlbmQoc2xpZGVzKTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2xpZGVzQnVmZmVyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgJHdyYXBwZXJFbC5hcHBlbmQoc2xpZGVzQnVmZmVyW2ldKTtcbiAgfVxuXG4gIGlmIChwYXJhbXMubG9vcCkge1xuICAgIHN3aXBlci5sb29wQ3JlYXRlKCk7XG4gIH1cblxuICBpZiAoIXBhcmFtcy5vYnNlcnZlcikge1xuICAgIHN3aXBlci51cGRhdGUoKTtcbiAgfVxuXG4gIGlmIChwYXJhbXMubG9vcCkge1xuICAgIHN3aXBlci5zbGlkZVRvKG5ld0FjdGl2ZUluZGV4ICsgc3dpcGVyLmxvb3BlZFNsaWRlcywgMCwgZmFsc2UpO1xuICB9IGVsc2Uge1xuICAgIHN3aXBlci5zbGlkZVRvKG5ld0FjdGl2ZUluZGV4LCAwLCBmYWxzZSk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhcHBlbmRTbGlkZShzbGlkZXMpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3Qge1xuICAgICR3cmFwcGVyRWwsXG4gICAgcGFyYW1zXG4gIH0gPSBzd2lwZXI7XG5cbiAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgc3dpcGVyLmxvb3BEZXN0cm95KCk7XG4gIH1cblxuICBpZiAodHlwZW9mIHNsaWRlcyA9PT0gJ29iamVjdCcgJiYgJ2xlbmd0aCcgaW4gc2xpZGVzKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChzbGlkZXNbaV0pICR3cmFwcGVyRWwuYXBwZW5kKHNsaWRlc1tpXSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgICR3cmFwcGVyRWwuYXBwZW5kKHNsaWRlcyk7XG4gIH1cblxuICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICBzd2lwZXIubG9vcENyZWF0ZSgpO1xuICB9XG5cbiAgaWYgKCFwYXJhbXMub2JzZXJ2ZXIpIHtcbiAgICBzd2lwZXIudXBkYXRlKCk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmVwZW5kU2xpZGUoc2xpZGVzKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IHtcbiAgICBwYXJhbXMsXG4gICAgJHdyYXBwZXJFbCxcbiAgICBhY3RpdmVJbmRleFxuICB9ID0gc3dpcGVyO1xuXG4gIGlmIChwYXJhbXMubG9vcCkge1xuICAgIHN3aXBlci5sb29wRGVzdHJveSgpO1xuICB9XG5cbiAgbGV0IG5ld0FjdGl2ZUluZGV4ID0gYWN0aXZlSW5kZXggKyAxO1xuXG4gIGlmICh0eXBlb2Ygc2xpZGVzID09PSAnb2JqZWN0JyAmJiAnbGVuZ3RoJyBpbiBzbGlkZXMpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHNsaWRlc1tpXSkgJHdyYXBwZXJFbC5wcmVwZW5kKHNsaWRlc1tpXSk7XG4gICAgfVxuXG4gICAgbmV3QWN0aXZlSW5kZXggPSBhY3RpdmVJbmRleCArIHNsaWRlcy5sZW5ndGg7XG4gIH0gZWxzZSB7XG4gICAgJHdyYXBwZXJFbC5wcmVwZW5kKHNsaWRlcyk7XG4gIH1cblxuICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICBzd2lwZXIubG9vcENyZWF0ZSgpO1xuICB9XG5cbiAgaWYgKCFwYXJhbXMub2JzZXJ2ZXIpIHtcbiAgICBzd2lwZXIudXBkYXRlKCk7XG4gIH1cblxuICBzd2lwZXIuc2xpZGVUbyhuZXdBY3RpdmVJbmRleCwgMCwgZmFsc2UpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbW92ZUFsbFNsaWRlcygpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3Qgc2xpZGVzSW5kZXhlcyA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3dpcGVyLnNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHNsaWRlc0luZGV4ZXMucHVzaChpKTtcbiAgfVxuXG4gIHN3aXBlci5yZW1vdmVTbGlkZShzbGlkZXNJbmRleGVzKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW1vdmVTbGlkZShzbGlkZXNJbmRleGVzKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IHtcbiAgICBwYXJhbXMsXG4gICAgJHdyYXBwZXJFbCxcbiAgICBhY3RpdmVJbmRleFxuICB9ID0gc3dpcGVyO1xuICBsZXQgYWN0aXZlSW5kZXhCdWZmZXIgPSBhY3RpdmVJbmRleDtcblxuICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICBhY3RpdmVJbmRleEJ1ZmZlciAtPSBzd2lwZXIubG9vcGVkU2xpZGVzO1xuICAgIHN3aXBlci5sb29wRGVzdHJveSgpO1xuICAgIHN3aXBlci5zbGlkZXMgPSAkd3JhcHBlckVsLmNoaWxkcmVuKGAuJHtwYXJhbXMuc2xpZGVDbGFzc31gKTtcbiAgfVxuXG4gIGxldCBuZXdBY3RpdmVJbmRleCA9IGFjdGl2ZUluZGV4QnVmZmVyO1xuICBsZXQgaW5kZXhUb1JlbW92ZTtcblxuICBpZiAodHlwZW9mIHNsaWRlc0luZGV4ZXMgPT09ICdvYmplY3QnICYmICdsZW5ndGgnIGluIHNsaWRlc0luZGV4ZXMpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNsaWRlc0luZGV4ZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGluZGV4VG9SZW1vdmUgPSBzbGlkZXNJbmRleGVzW2ldO1xuICAgICAgaWYgKHN3aXBlci5zbGlkZXNbaW5kZXhUb1JlbW92ZV0pIHN3aXBlci5zbGlkZXMuZXEoaW5kZXhUb1JlbW92ZSkucmVtb3ZlKCk7XG4gICAgICBpZiAoaW5kZXhUb1JlbW92ZSA8IG5ld0FjdGl2ZUluZGV4KSBuZXdBY3RpdmVJbmRleCAtPSAxO1xuICAgIH1cblxuICAgIG5ld0FjdGl2ZUluZGV4ID0gTWF0aC5tYXgobmV3QWN0aXZlSW5kZXgsIDApO1xuICB9IGVsc2Uge1xuICAgIGluZGV4VG9SZW1vdmUgPSBzbGlkZXNJbmRleGVzO1xuICAgIGlmIChzd2lwZXIuc2xpZGVzW2luZGV4VG9SZW1vdmVdKSBzd2lwZXIuc2xpZGVzLmVxKGluZGV4VG9SZW1vdmUpLnJlbW92ZSgpO1xuICAgIGlmIChpbmRleFRvUmVtb3ZlIDwgbmV3QWN0aXZlSW5kZXgpIG5ld0FjdGl2ZUluZGV4IC09IDE7XG4gICAgbmV3QWN0aXZlSW5kZXggPSBNYXRoLm1heChuZXdBY3RpdmVJbmRleCwgMCk7XG4gIH1cblxuICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICBzd2lwZXIubG9vcENyZWF0ZSgpO1xuICB9XG5cbiAgaWYgKCFwYXJhbXMub2JzZXJ2ZXIpIHtcbiAgICBzd2lwZXIudXBkYXRlKCk7XG4gIH1cblxuICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICBzd2lwZXIuc2xpZGVUbyhuZXdBY3RpdmVJbmRleCArIHN3aXBlci5sb29wZWRTbGlkZXMsIDAsIGZhbHNlKTtcbiAgfSBlbHNlIHtcbiAgICBzd2lwZXIuc2xpZGVUbyhuZXdBY3RpdmVJbmRleCwgMCwgZmFsc2UpO1xuICB9XG59IiwiLyogZXNsaW50LWRpc2FibGUgY29uc2lzdGVudC1yZXR1cm4gKi9cbmltcG9ydCB7IGdldFdpbmRvdyB9IGZyb20gJ3Nzci13aW5kb3cnO1xuaW1wb3J0ICQgZnJvbSAnLi4vLi4vc2hhcmVkL2RvbS5qcyc7XG5pbXBvcnQgeyBub3csIG5leHRUaWNrIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3V0aWxzLmpzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vdXNld2hlZWwoe1xuICBzd2lwZXIsXG4gIGV4dGVuZFBhcmFtcyxcbiAgb24sXG4gIGVtaXRcbn0pIHtcbiAgY29uc3Qgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gIGV4dGVuZFBhcmFtcyh7XG4gICAgbW91c2V3aGVlbDoge1xuICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICByZWxlYXNlT25FZGdlczogZmFsc2UsXG4gICAgICBpbnZlcnQ6IGZhbHNlLFxuICAgICAgZm9yY2VUb0F4aXM6IGZhbHNlLFxuICAgICAgc2Vuc2l0aXZpdHk6IDEsXG4gICAgICBldmVudHNUYXJnZXQ6ICdjb250YWluZXInLFxuICAgICAgdGhyZXNob2xkRGVsdGE6IG51bGwsXG4gICAgICB0aHJlc2hvbGRUaW1lOiBudWxsXG4gICAgfVxuICB9KTtcbiAgc3dpcGVyLm1vdXNld2hlZWwgPSB7XG4gICAgZW5hYmxlZDogZmFsc2VcbiAgfTtcbiAgbGV0IHRpbWVvdXQ7XG4gIGxldCBsYXN0U2Nyb2xsVGltZSA9IG5vdygpO1xuICBsZXQgbGFzdEV2ZW50QmVmb3JlU25hcDtcbiAgY29uc3QgcmVjZW50V2hlZWxFdmVudHMgPSBbXTtcblxuICBmdW5jdGlvbiBub3JtYWxpemUoZSkge1xuICAgIC8vIFJlYXNvbmFibGUgZGVmYXVsdHNcbiAgICBjb25zdCBQSVhFTF9TVEVQID0gMTA7XG4gICAgY29uc3QgTElORV9IRUlHSFQgPSA0MDtcbiAgICBjb25zdCBQQUdFX0hFSUdIVCA9IDgwMDtcbiAgICBsZXQgc1ggPSAwO1xuICAgIGxldCBzWSA9IDA7IC8vIHNwaW5YLCBzcGluWVxuXG4gICAgbGV0IHBYID0gMDtcbiAgICBsZXQgcFkgPSAwOyAvLyBwaXhlbFgsIHBpeGVsWVxuICAgIC8vIExlZ2FjeVxuXG4gICAgaWYgKCdkZXRhaWwnIGluIGUpIHtcbiAgICAgIHNZID0gZS5kZXRhaWw7XG4gICAgfVxuXG4gICAgaWYgKCd3aGVlbERlbHRhJyBpbiBlKSB7XG4gICAgICBzWSA9IC1lLndoZWVsRGVsdGEgLyAxMjA7XG4gICAgfVxuXG4gICAgaWYgKCd3aGVlbERlbHRhWScgaW4gZSkge1xuICAgICAgc1kgPSAtZS53aGVlbERlbHRhWSAvIDEyMDtcbiAgICB9XG5cbiAgICBpZiAoJ3doZWVsRGVsdGFYJyBpbiBlKSB7XG4gICAgICBzWCA9IC1lLndoZWVsRGVsdGFYIC8gMTIwO1xuICAgIH0gLy8gc2lkZSBzY3JvbGxpbmcgb24gRkYgd2l0aCBET01Nb3VzZVNjcm9sbFxuXG5cbiAgICBpZiAoJ2F4aXMnIGluIGUgJiYgZS5heGlzID09PSBlLkhPUklaT05UQUxfQVhJUykge1xuICAgICAgc1ggPSBzWTtcbiAgICAgIHNZID0gMDtcbiAgICB9XG5cbiAgICBwWCA9IHNYICogUElYRUxfU1RFUDtcbiAgICBwWSA9IHNZICogUElYRUxfU1RFUDtcblxuICAgIGlmICgnZGVsdGFZJyBpbiBlKSB7XG4gICAgICBwWSA9IGUuZGVsdGFZO1xuICAgIH1cblxuICAgIGlmICgnZGVsdGFYJyBpbiBlKSB7XG4gICAgICBwWCA9IGUuZGVsdGFYO1xuICAgIH1cblxuICAgIGlmIChlLnNoaWZ0S2V5ICYmICFwWCkge1xuICAgICAgLy8gaWYgdXNlciBzY3JvbGxzIHdpdGggc2hpZnQgaGUgd2FudHMgaG9yaXpvbnRhbCBzY3JvbGxcbiAgICAgIHBYID0gcFk7XG4gICAgICBwWSA9IDA7XG4gICAgfVxuXG4gICAgaWYgKChwWCB8fCBwWSkgJiYgZS5kZWx0YU1vZGUpIHtcbiAgICAgIGlmIChlLmRlbHRhTW9kZSA9PT0gMSkge1xuICAgICAgICAvLyBkZWx0YSBpbiBMSU5FIHVuaXRzXG4gICAgICAgIHBYICo9IExJTkVfSEVJR0hUO1xuICAgICAgICBwWSAqPSBMSU5FX0hFSUdIVDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGRlbHRhIGluIFBBR0UgdW5pdHNcbiAgICAgICAgcFggKj0gUEFHRV9IRUlHSFQ7XG4gICAgICAgIHBZICo9IFBBR0VfSEVJR0hUO1xuICAgICAgfVxuICAgIH0gLy8gRmFsbC1iYWNrIGlmIHNwaW4gY2Fubm90IGJlIGRldGVybWluZWRcblxuXG4gICAgaWYgKHBYICYmICFzWCkge1xuICAgICAgc1ggPSBwWCA8IDEgPyAtMSA6IDE7XG4gICAgfVxuXG4gICAgaWYgKHBZICYmICFzWSkge1xuICAgICAgc1kgPSBwWSA8IDEgPyAtMSA6IDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHNwaW5YOiBzWCxcbiAgICAgIHNwaW5ZOiBzWSxcbiAgICAgIHBpeGVsWDogcFgsXG4gICAgICBwaXhlbFk6IHBZXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU1vdXNlRW50ZXIoKSB7XG4gICAgaWYgKCFzd2lwZXIuZW5hYmxlZCkgcmV0dXJuO1xuICAgIHN3aXBlci5tb3VzZUVudGVyZWQgPSB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlTW91c2VMZWF2ZSgpIHtcbiAgICBpZiAoIXN3aXBlci5lbmFibGVkKSByZXR1cm47XG4gICAgc3dpcGVyLm1vdXNlRW50ZXJlZCA9IGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gYW5pbWF0ZVNsaWRlcihuZXdFdmVudCkge1xuICAgIGlmIChzd2lwZXIucGFyYW1zLm1vdXNld2hlZWwudGhyZXNob2xkRGVsdGEgJiYgbmV3RXZlbnQuZGVsdGEgPCBzd2lwZXIucGFyYW1zLm1vdXNld2hlZWwudGhyZXNob2xkRGVsdGEpIHtcbiAgICAgIC8vIFByZXZlbnQgaWYgZGVsdGEgb2Ygd2hlZWwgc2Nyb2xsIGRlbHRhIGlzIGJlbG93IGNvbmZpZ3VyZWQgdGhyZXNob2xkXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMubW91c2V3aGVlbC50aHJlc2hvbGRUaW1lICYmIG5vdygpIC0gbGFzdFNjcm9sbFRpbWUgPCBzd2lwZXIucGFyYW1zLm1vdXNld2hlZWwudGhyZXNob2xkVGltZSkge1xuICAgICAgLy8gUHJldmVudCBpZiB0aW1lIGJldHdlZW4gc2Nyb2xscyBpcyBiZWxvdyBjb25maWd1cmVkIHRocmVzaG9sZFxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gLy8gSWYgdGhlIG1vdmVtZW50IGlzIE5PVCBiaWcgZW5vdWdoIGFuZFxuICAgIC8vIGlmIHRoZSBsYXN0IHRpbWUgdGhlIHVzZXIgc2Nyb2xsZWQgd2FzIHRvbyBjbG9zZSB0byB0aGUgY3VycmVudCBvbmUgKGF2b2lkIGNvbnRpbnVvdXNseSB0cmlnZ2VyaW5nIHRoZSBzbGlkZXIpOlxuICAgIC8vICAgRG9uJ3QgZ28gYW55IGZ1cnRoZXIgKGF2b2lkIGluc2lnbmlmaWNhbnQgc2Nyb2xsIG1vdmVtZW50KS5cblxuXG4gICAgaWYgKG5ld0V2ZW50LmRlbHRhID49IDYgJiYgbm93KCkgLSBsYXN0U2Nyb2xsVGltZSA8IDYwKSB7XG4gICAgICAvLyBSZXR1cm4gZmFsc2UgYXMgYSBkZWZhdWx0XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IC8vIElmIHVzZXIgaXMgc2Nyb2xsaW5nIHRvd2FyZHMgdGhlIGVuZDpcbiAgICAvLyAgIElmIHRoZSBzbGlkZXIgaGFzbid0IGhpdCB0aGUgbGF0ZXN0IHNsaWRlIG9yXG4gICAgLy8gICBpZiB0aGUgc2xpZGVyIGlzIGEgbG9vcCBhbmRcbiAgICAvLyAgIGlmIHRoZSBzbGlkZXIgaXNuJ3QgbW92aW5nIHJpZ2h0IG5vdzpcbiAgICAvLyAgICAgR28gdG8gbmV4dCBzbGlkZSBhbmRcbiAgICAvLyAgICAgZW1pdCBhIHNjcm9sbCBldmVudC5cbiAgICAvLyBFbHNlICh0aGUgdXNlciBpcyBzY3JvbGxpbmcgdG93YXJkcyB0aGUgYmVnaW5uaW5nKSBhbmRcbiAgICAvLyBpZiB0aGUgc2xpZGVyIGhhc24ndCBoaXQgdGhlIGZpcnN0IHNsaWRlIG9yXG4gICAgLy8gaWYgdGhlIHNsaWRlciBpcyBhIGxvb3AgYW5kXG4gICAgLy8gaWYgdGhlIHNsaWRlciBpc24ndCBtb3ZpbmcgcmlnaHQgbm93OlxuICAgIC8vICAgR28gdG8gcHJldiBzbGlkZSBhbmRcbiAgICAvLyAgIGVtaXQgYSBzY3JvbGwgZXZlbnQuXG5cblxuICAgIGlmIChuZXdFdmVudC5kaXJlY3Rpb24gPCAwKSB7XG4gICAgICBpZiAoKCFzd2lwZXIuaXNFbmQgfHwgc3dpcGVyLnBhcmFtcy5sb29wKSAmJiAhc3dpcGVyLmFuaW1hdGluZykge1xuICAgICAgICBzd2lwZXIuc2xpZGVOZXh0KCk7XG4gICAgICAgIGVtaXQoJ3Njcm9sbCcsIG5ld0V2ZW50LnJhdyk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICgoIXN3aXBlci5pc0JlZ2lubmluZyB8fCBzd2lwZXIucGFyYW1zLmxvb3ApICYmICFzd2lwZXIuYW5pbWF0aW5nKSB7XG4gICAgICBzd2lwZXIuc2xpZGVQcmV2KCk7XG4gICAgICBlbWl0KCdzY3JvbGwnLCBuZXdFdmVudC5yYXcpO1xuICAgIH0gLy8gSWYgeW91IGdvdCBoZXJlIGlzIGJlY2F1c2UgYW4gYW5pbWF0aW9uIGhhcyBiZWVuIHRyaWdnZXJlZCBzbyBzdG9yZSB0aGUgY3VycmVudCB0aW1lXG5cblxuICAgIGxhc3RTY3JvbGxUaW1lID0gbmV3IHdpbmRvdy5EYXRlKCkuZ2V0VGltZSgpOyAvLyBSZXR1cm4gZmFsc2UgYXMgYSBkZWZhdWx0XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiByZWxlYXNlU2Nyb2xsKG5ld0V2ZW50KSB7XG4gICAgY29uc3QgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy5tb3VzZXdoZWVsO1xuXG4gICAgaWYgKG5ld0V2ZW50LmRpcmVjdGlvbiA8IDApIHtcbiAgICAgIGlmIChzd2lwZXIuaXNFbmQgJiYgIXN3aXBlci5wYXJhbXMubG9vcCAmJiBwYXJhbXMucmVsZWFzZU9uRWRnZXMpIHtcbiAgICAgICAgLy8gUmV0dXJuIHRydWUgdG8gYW5pbWF0ZSBzY3JvbGwgb24gZWRnZXNcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChzd2lwZXIuaXNCZWdpbm5pbmcgJiYgIXN3aXBlci5wYXJhbXMubG9vcCAmJiBwYXJhbXMucmVsZWFzZU9uRWRnZXMpIHtcbiAgICAgIC8vIFJldHVybiB0cnVlIHRvIGFuaW1hdGUgc2Nyb2xsIG9uIGVkZ2VzXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGUoZXZlbnQpIHtcbiAgICBsZXQgZSA9IGV2ZW50O1xuICAgIGxldCBkaXNhYmxlUGFyZW50U3dpcGVyID0gdHJ1ZTtcbiAgICBpZiAoIXN3aXBlci5lbmFibGVkKSByZXR1cm47XG4gICAgY29uc3QgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy5tb3VzZXdoZWVsO1xuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMuY3NzTW9kZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGxldCB0YXJnZXQgPSBzd2lwZXIuJGVsO1xuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMubW91c2V3aGVlbC5ldmVudHNUYXJnZXQgIT09ICdjb250YWluZXInKSB7XG4gICAgICB0YXJnZXQgPSAkKHN3aXBlci5wYXJhbXMubW91c2V3aGVlbC5ldmVudHNUYXJnZXQpO1xuICAgIH1cblxuICAgIGlmICghc3dpcGVyLm1vdXNlRW50ZXJlZCAmJiAhdGFyZ2V0WzBdLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhcGFyYW1zLnJlbGVhc2VPbkVkZ2VzKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAoZS5vcmlnaW5hbEV2ZW50KSBlID0gZS5vcmlnaW5hbEV2ZW50OyAvLyBqcXVlcnkgZml4XG5cbiAgICBsZXQgZGVsdGEgPSAwO1xuICAgIGNvbnN0IHJ0bEZhY3RvciA9IHN3aXBlci5ydGxUcmFuc2xhdGUgPyAtMSA6IDE7XG4gICAgY29uc3QgZGF0YSA9IG5vcm1hbGl6ZShlKTtcblxuICAgIGlmIChwYXJhbXMuZm9yY2VUb0F4aXMpIHtcbiAgICAgIGlmIChzd2lwZXIuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgICAgaWYgKE1hdGguYWJzKGRhdGEucGl4ZWxYKSA+IE1hdGguYWJzKGRhdGEucGl4ZWxZKSkgZGVsdGEgPSAtZGF0YS5waXhlbFggKiBydGxGYWN0b3I7ZWxzZSByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoTWF0aC5hYnMoZGF0YS5waXhlbFkpID4gTWF0aC5hYnMoZGF0YS5waXhlbFgpKSBkZWx0YSA9IC1kYXRhLnBpeGVsWTtlbHNlIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWx0YSA9IE1hdGguYWJzKGRhdGEucGl4ZWxYKSA+IE1hdGguYWJzKGRhdGEucGl4ZWxZKSA/IC1kYXRhLnBpeGVsWCAqIHJ0bEZhY3RvciA6IC1kYXRhLnBpeGVsWTtcbiAgICB9XG5cbiAgICBpZiAoZGVsdGEgPT09IDApIHJldHVybiB0cnVlO1xuICAgIGlmIChwYXJhbXMuaW52ZXJ0KSBkZWx0YSA9IC1kZWx0YTsgLy8gR2V0IHRoZSBzY3JvbGwgcG9zaXRpb25zXG5cbiAgICBsZXQgcG9zaXRpb25zID0gc3dpcGVyLmdldFRyYW5zbGF0ZSgpICsgZGVsdGEgKiBwYXJhbXMuc2Vuc2l0aXZpdHk7XG4gICAgaWYgKHBvc2l0aW9ucyA+PSBzd2lwZXIubWluVHJhbnNsYXRlKCkpIHBvc2l0aW9ucyA9IHN3aXBlci5taW5UcmFuc2xhdGUoKTtcbiAgICBpZiAocG9zaXRpb25zIDw9IHN3aXBlci5tYXhUcmFuc2xhdGUoKSkgcG9zaXRpb25zID0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpOyAvLyBXaGVuIGxvb3AgaXMgdHJ1ZTpcbiAgICAvLyAgICAgdGhlIGRpc2FibGVQYXJlbnRTd2lwZXIgd2lsbCBiZSB0cnVlLlxuICAgIC8vIFdoZW4gbG9vcCBpcyBmYWxzZTpcbiAgICAvLyAgICAgaWYgdGhlIHNjcm9sbCBwb3NpdGlvbnMgaXMgbm90IG9uIGVkZ2UsXG4gICAgLy8gICAgIHRoZW4gdGhlIGRpc2FibGVQYXJlbnRTd2lwZXIgd2lsbCBiZSB0cnVlLlxuICAgIC8vICAgICBpZiB0aGUgc2Nyb2xsIG9uIGVkZ2UgcG9zaXRpb25zLFxuICAgIC8vICAgICB0aGVuIHRoZSBkaXNhYmxlUGFyZW50U3dpcGVyIHdpbGwgYmUgZmFsc2UuXG5cbiAgICBkaXNhYmxlUGFyZW50U3dpcGVyID0gc3dpcGVyLnBhcmFtcy5sb29wID8gdHJ1ZSA6ICEocG9zaXRpb25zID09PSBzd2lwZXIubWluVHJhbnNsYXRlKCkgfHwgcG9zaXRpb25zID09PSBzd2lwZXIubWF4VHJhbnNsYXRlKCkpO1xuICAgIGlmIChkaXNhYmxlUGFyZW50U3dpcGVyICYmIHN3aXBlci5wYXJhbXMubmVzdGVkKSBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgaWYgKCFzd2lwZXIucGFyYW1zLmZyZWVNb2RlIHx8ICFzd2lwZXIucGFyYW1zLmZyZWVNb2RlLmVuYWJsZWQpIHtcbiAgICAgIC8vIFJlZ2lzdGVyIHRoZSBuZXcgZXZlbnQgaW4gYSB2YXJpYWJsZSB3aGljaCBzdG9yZXMgdGhlIHJlbGV2YW50IGRhdGFcbiAgICAgIGNvbnN0IG5ld0V2ZW50ID0ge1xuICAgICAgICB0aW1lOiBub3coKSxcbiAgICAgICAgZGVsdGE6IE1hdGguYWJzKGRlbHRhKSxcbiAgICAgICAgZGlyZWN0aW9uOiBNYXRoLnNpZ24oZGVsdGEpLFxuICAgICAgICByYXc6IGV2ZW50XG4gICAgICB9OyAvLyBLZWVwIHRoZSBtb3N0IHJlY2VudCBldmVudHNcblxuICAgICAgaWYgKHJlY2VudFdoZWVsRXZlbnRzLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgIHJlY2VudFdoZWVsRXZlbnRzLnNoaWZ0KCk7IC8vIG9ubHkgc3RvcmUgdGhlIGxhc3QgTiBldmVudHNcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJldkV2ZW50ID0gcmVjZW50V2hlZWxFdmVudHMubGVuZ3RoID8gcmVjZW50V2hlZWxFdmVudHNbcmVjZW50V2hlZWxFdmVudHMubGVuZ3RoIC0gMV0gOiB1bmRlZmluZWQ7XG4gICAgICByZWNlbnRXaGVlbEV2ZW50cy5wdXNoKG5ld0V2ZW50KTsgLy8gSWYgdGhlcmUgaXMgYXQgbGVhc3Qgb25lIHByZXZpb3VzIHJlY29yZGVkIGV2ZW50OlxuICAgICAgLy8gICBJZiBkaXJlY3Rpb24gaGFzIGNoYW5nZWQgb3JcbiAgICAgIC8vICAgaWYgdGhlIHNjcm9sbCBpcyBxdWlja2VyIHRoYW4gdGhlIHByZXZpb3VzIG9uZTpcbiAgICAgIC8vICAgICBBbmltYXRlIHRoZSBzbGlkZXIuXG4gICAgICAvLyBFbHNlICh0aGlzIGlzIHRoZSBmaXJzdCB0aW1lIHRoZSB3aGVlbCBpcyBtb3ZlZCk6XG4gICAgICAvLyAgICAgQW5pbWF0ZSB0aGUgc2xpZGVyLlxuXG4gICAgICBpZiAocHJldkV2ZW50KSB7XG4gICAgICAgIGlmIChuZXdFdmVudC5kaXJlY3Rpb24gIT09IHByZXZFdmVudC5kaXJlY3Rpb24gfHwgbmV3RXZlbnQuZGVsdGEgPiBwcmV2RXZlbnQuZGVsdGEgfHwgbmV3RXZlbnQudGltZSA+IHByZXZFdmVudC50aW1lICsgMTUwKSB7XG4gICAgICAgICAgYW5pbWF0ZVNsaWRlcihuZXdFdmVudCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFuaW1hdGVTbGlkZXIobmV3RXZlbnQpO1xuICAgICAgfSAvLyBJZiBpdCdzIHRpbWUgdG8gcmVsZWFzZSB0aGUgc2Nyb2xsOlxuICAgICAgLy8gICBSZXR1cm4gbm93IHNvIHlvdSBkb24ndCBoaXQgdGhlIHByZXZlbnREZWZhdWx0LlxuXG5cbiAgICAgIGlmIChyZWxlYXNlU2Nyb2xsKG5ld0V2ZW50KSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRnJlZW1vZGUgb3Igc2Nyb2xsQ29udGFpbmVyOlxuICAgICAgLy8gSWYgd2UgcmVjZW50bHkgc25hcHBlZCBhZnRlciBhIG1vbWVudHVtIHNjcm9sbCwgdGhlbiBpZ25vcmUgd2hlZWwgZXZlbnRzXG4gICAgICAvLyB0byBnaXZlIHRpbWUgZm9yIHRoZSBkZWNlbGVyYXRpb24gdG8gZmluaXNoLiBTdG9wIGlnbm9yaW5nIGFmdGVyIDUwMCBtc2Vjc1xuICAgICAgLy8gb3IgaWYgaXQncyBhIG5ldyBzY3JvbGwgKGxhcmdlciBkZWx0YSBvciBpbnZlcnNlIHNpZ24gYXMgbGFzdCBldmVudCBiZWZvcmVcbiAgICAgIC8vIGFuIGVuZC1vZi1tb21lbnR1bSBzbmFwKS5cbiAgICAgIGNvbnN0IG5ld0V2ZW50ID0ge1xuICAgICAgICB0aW1lOiBub3coKSxcbiAgICAgICAgZGVsdGE6IE1hdGguYWJzKGRlbHRhKSxcbiAgICAgICAgZGlyZWN0aW9uOiBNYXRoLnNpZ24oZGVsdGEpXG4gICAgICB9O1xuICAgICAgY29uc3QgaWdub3JlV2hlZWxFdmVudHMgPSBsYXN0RXZlbnRCZWZvcmVTbmFwICYmIG5ld0V2ZW50LnRpbWUgPCBsYXN0RXZlbnRCZWZvcmVTbmFwLnRpbWUgKyA1MDAgJiYgbmV3RXZlbnQuZGVsdGEgPD0gbGFzdEV2ZW50QmVmb3JlU25hcC5kZWx0YSAmJiBuZXdFdmVudC5kaXJlY3Rpb24gPT09IGxhc3RFdmVudEJlZm9yZVNuYXAuZGlyZWN0aW9uO1xuXG4gICAgICBpZiAoIWlnbm9yZVdoZWVsRXZlbnRzKSB7XG4gICAgICAgIGxhc3RFdmVudEJlZm9yZVNuYXAgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMubG9vcCkge1xuICAgICAgICAgIHN3aXBlci5sb29wRml4KCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcG9zaXRpb24gPSBzd2lwZXIuZ2V0VHJhbnNsYXRlKCkgKyBkZWx0YSAqIHBhcmFtcy5zZW5zaXRpdml0eTtcbiAgICAgICAgY29uc3Qgd2FzQmVnaW5uaW5nID0gc3dpcGVyLmlzQmVnaW5uaW5nO1xuICAgICAgICBjb25zdCB3YXNFbmQgPSBzd2lwZXIuaXNFbmQ7XG4gICAgICAgIGlmIChwb3NpdGlvbiA+PSBzd2lwZXIubWluVHJhbnNsYXRlKCkpIHBvc2l0aW9uID0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpO1xuICAgICAgICBpZiAocG9zaXRpb24gPD0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpKSBwb3NpdGlvbiA9IHN3aXBlci5tYXhUcmFuc2xhdGUoKTtcbiAgICAgICAgc3dpcGVyLnNldFRyYW5zaXRpb24oMCk7XG4gICAgICAgIHN3aXBlci5zZXRUcmFuc2xhdGUocG9zaXRpb24pO1xuICAgICAgICBzd2lwZXIudXBkYXRlUHJvZ3Jlc3MoKTtcbiAgICAgICAgc3dpcGVyLnVwZGF0ZUFjdGl2ZUluZGV4KCk7XG4gICAgICAgIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG5cbiAgICAgICAgaWYgKCF3YXNCZWdpbm5pbmcgJiYgc3dpcGVyLmlzQmVnaW5uaW5nIHx8ICF3YXNFbmQgJiYgc3dpcGVyLmlzRW5kKSB7XG4gICAgICAgICAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzd2lwZXIucGFyYW1zLmZyZWVNb2RlLnN0aWNreSkge1xuICAgICAgICAgIC8vIFdoZW4gd2hlZWwgc2Nyb2xsaW5nIHN0YXJ0cyB3aXRoIHN0aWNreSAoYWthIHNuYXApIGVuYWJsZWQsIHRoZW4gZGV0ZWN0XG4gICAgICAgICAgLy8gdGhlIGVuZCBvZiBhIG1vbWVudHVtIHNjcm9sbCBieSBzdG9yaW5nIHJlY2VudCAoTj0xNT8pIHdoZWVsIGV2ZW50cy5cbiAgICAgICAgICAvLyAxLiBkbyBhbGwgTiBldmVudHMgaGF2ZSBkZWNyZWFzaW5nIG9yIHNhbWUgKGFic29sdXRlIHZhbHVlKSBkZWx0YT9cbiAgICAgICAgICAvLyAyLiBkaWQgYWxsIE4gZXZlbnRzIGFycml2ZSBpbiB0aGUgbGFzdCBNIChNPTUwMD8pIG1zZWNzP1xuICAgICAgICAgIC8vIDMuIGRvZXMgdGhlIGVhcmxpZXN0IGV2ZW50IGhhdmUgYW4gKGFic29sdXRlIHZhbHVlKSBkZWx0YSB0aGF0J3NcbiAgICAgICAgICAvLyAgICBhdCBsZWFzdCBQIChQPTE/KSBsYXJnZXIgdGhhbiB0aGUgbW9zdCByZWNlbnQgZXZlbnQncyBkZWx0YT9cbiAgICAgICAgICAvLyA0LiBkb2VzIHRoZSBsYXRlc3QgZXZlbnQgaGF2ZSBhIGRlbHRhIHRoYXQncyBzbWFsbGVyIHRoYW4gUSAoUT02PykgcGl4ZWxzP1xuICAgICAgICAgIC8vIElmIDEtNCBhcmUgXCJ5ZXNcIiB0aGVuIHdlJ3JlIG5lYXIgdGhlIGVuZCBvZiBhIG1vbWVudHVtIHNjcm9sbCBkZWNlbGVyYXRpb24uXG4gICAgICAgICAgLy8gU25hcCBpbW1lZGlhdGVseSBhbmQgaWdub3JlIHJlbWFpbmluZyB3aGVlbCBldmVudHMgaW4gdGhpcyBzY3JvbGwuXG4gICAgICAgICAgLy8gU2VlIGNvbW1lbnQgYWJvdmUgZm9yIFwicmVtYWluaW5nIHdoZWVsIGV2ZW50cyBpbiB0aGlzIHNjcm9sbFwiIGRldGVybWluYXRpb24uXG4gICAgICAgICAgLy8gSWYgMS00IGFyZW4ndCBzYXRpc2ZpZWQsIHRoZW4gd2FpdCB0byBzbmFwIHVudGlsIDUwMG1zIGFmdGVyIHRoZSBsYXN0IGV2ZW50LlxuICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgICB0aW1lb3V0ID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgaWYgKHJlY2VudFdoZWVsRXZlbnRzLmxlbmd0aCA+PSAxNSkge1xuICAgICAgICAgICAgcmVjZW50V2hlZWxFdmVudHMuc2hpZnQoKTsgLy8gb25seSBzdG9yZSB0aGUgbGFzdCBOIGV2ZW50c1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHByZXZFdmVudCA9IHJlY2VudFdoZWVsRXZlbnRzLmxlbmd0aCA/IHJlY2VudFdoZWVsRXZlbnRzW3JlY2VudFdoZWVsRXZlbnRzLmxlbmd0aCAtIDFdIDogdW5kZWZpbmVkO1xuICAgICAgICAgIGNvbnN0IGZpcnN0RXZlbnQgPSByZWNlbnRXaGVlbEV2ZW50c1swXTtcbiAgICAgICAgICByZWNlbnRXaGVlbEV2ZW50cy5wdXNoKG5ld0V2ZW50KTtcblxuICAgICAgICAgIGlmIChwcmV2RXZlbnQgJiYgKG5ld0V2ZW50LmRlbHRhID4gcHJldkV2ZW50LmRlbHRhIHx8IG5ld0V2ZW50LmRpcmVjdGlvbiAhPT0gcHJldkV2ZW50LmRpcmVjdGlvbikpIHtcbiAgICAgICAgICAgIC8vIEluY3JlYXNpbmcgb3IgcmV2ZXJzZS1zaWduIGRlbHRhIG1lYW5zIHRoZSB1c2VyIHN0YXJ0ZWQgc2Nyb2xsaW5nIGFnYWluLiBDbGVhciB0aGUgd2hlZWwgZXZlbnQgbG9nLlxuICAgICAgICAgICAgcmVjZW50V2hlZWxFdmVudHMuc3BsaWNlKDApO1xuICAgICAgICAgIH0gZWxzZSBpZiAocmVjZW50V2hlZWxFdmVudHMubGVuZ3RoID49IDE1ICYmIG5ld0V2ZW50LnRpbWUgLSBmaXJzdEV2ZW50LnRpbWUgPCA1MDAgJiYgZmlyc3RFdmVudC5kZWx0YSAtIG5ld0V2ZW50LmRlbHRhID49IDEgJiYgbmV3RXZlbnQuZGVsdGEgPD0gNikge1xuICAgICAgICAgICAgLy8gV2UncmUgYXQgdGhlIGVuZCBvZiB0aGUgZGVjZWxlcmF0aW9uIG9mIGEgbW9tZW50dW0gc2Nyb2xsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgICAgICAgICAgIC8vIHRvIHdhaXQgZm9yIG1vcmUgZXZlbnRzLiBTbmFwIEFTQVAgb24gdGhlIG5leHQgdGljay5cbiAgICAgICAgICAgIC8vIEFsc28sIGJlY2F1c2UgdGhlcmUncyBzb21lIHJlbWFpbmluZyBtb21lbnR1bSB3ZSdsbCBiaWFzIHRoZSBzbmFwIGluIHRoZVxuICAgICAgICAgICAgLy8gZGlyZWN0aW9uIG9mIHRoZSBvbmdvaW5nIHNjcm9sbCBiZWNhdXNlIGl0J3MgYmV0dGVyIFVYIGZvciB0aGUgc2Nyb2xsIHRvIHNuYXBcbiAgICAgICAgICAgIC8vIGluIHRoZSBzYW1lIGRpcmVjdGlvbiBhcyB0aGUgc2Nyb2xsIGluc3RlYWQgb2YgcmV2ZXJzaW5nIHRvIHNuYXAuICBUaGVyZWZvcmUsXG4gICAgICAgICAgICAvLyBpZiBpdCdzIGFscmVhZHkgc2Nyb2xsZWQgbW9yZSB0aGFuIDIwJSBpbiB0aGUgY3VycmVudCBkaXJlY3Rpb24sIGtlZXAgZ29pbmcuXG4gICAgICAgICAgICBjb25zdCBzbmFwVG9UaHJlc2hvbGQgPSBkZWx0YSA+IDAgPyAwLjggOiAwLjI7XG4gICAgICAgICAgICBsYXN0RXZlbnRCZWZvcmVTbmFwID0gbmV3RXZlbnQ7XG4gICAgICAgICAgICByZWNlbnRXaGVlbEV2ZW50cy5zcGxpY2UoMCk7XG4gICAgICAgICAgICB0aW1lb3V0ID0gbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgICBzd2lwZXIuc2xpZGVUb0Nsb3Nlc3Qoc3dpcGVyLnBhcmFtcy5zcGVlZCwgdHJ1ZSwgdW5kZWZpbmVkLCBzbmFwVG9UaHJlc2hvbGQpO1xuICAgICAgICAgICAgfSwgMCk7IC8vIG5vIGRlbGF5OyBtb3ZlIG9uIG5leHQgdGlja1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghdGltZW91dCkge1xuICAgICAgICAgICAgLy8gaWYgd2UgZ2V0IGhlcmUsIHRoZW4gd2UgaGF2ZW4ndCBkZXRlY3RlZCB0aGUgZW5kIG9mIGEgbW9tZW50dW0gc2Nyb2xsLCBzb1xuICAgICAgICAgICAgLy8gd2UnbGwgY29uc2lkZXIgYSBzY3JvbGwgXCJjb21wbGV0ZVwiIHdoZW4gdGhlcmUgaGF2ZW4ndCBiZWVuIGFueSB3aGVlbCBldmVudHNcbiAgICAgICAgICAgIC8vIGZvciA1MDBtcy5cbiAgICAgICAgICAgIHRpbWVvdXQgPSBuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHNuYXBUb1RocmVzaG9sZCA9IDAuNTtcbiAgICAgICAgICAgICAgbGFzdEV2ZW50QmVmb3JlU25hcCA9IG5ld0V2ZW50O1xuICAgICAgICAgICAgICByZWNlbnRXaGVlbEV2ZW50cy5zcGxpY2UoMCk7XG4gICAgICAgICAgICAgIHN3aXBlci5zbGlkZVRvQ2xvc2VzdChzd2lwZXIucGFyYW1zLnNwZWVkLCB0cnVlLCB1bmRlZmluZWQsIHNuYXBUb1RocmVzaG9sZCk7XG4gICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSAvLyBFbWl0IGV2ZW50XG5cblxuICAgICAgICBpZiAoIWlnbm9yZVdoZWVsRXZlbnRzKSBlbWl0KCdzY3JvbGwnLCBlKTsgLy8gU3RvcCBhdXRvcGxheVxuXG4gICAgICAgIGlmIChzd2lwZXIucGFyYW1zLmF1dG9wbGF5ICYmIHN3aXBlci5wYXJhbXMuYXV0b3BsYXlEaXNhYmxlT25JbnRlcmFjdGlvbikgc3dpcGVyLmF1dG9wbGF5LnN0b3AoKTsgLy8gUmV0dXJuIHBhZ2Ugc2Nyb2xsIG9uIGVkZ2UgcG9zaXRpb25zXG5cbiAgICAgICAgaWYgKHBvc2l0aW9uID09PSBzd2lwZXIubWluVHJhbnNsYXRlKCkgfHwgcG9zaXRpb24gPT09IHN3aXBlci5tYXhUcmFuc2xhdGUoKSkgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGUucHJldmVudERlZmF1bHQpIGUucHJldmVudERlZmF1bHQoKTtlbHNlIGUucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBldmVudHMobWV0aG9kKSB7XG4gICAgbGV0IHRhcmdldCA9IHN3aXBlci4kZWw7XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5tb3VzZXdoZWVsLmV2ZW50c1RhcmdldCAhPT0gJ2NvbnRhaW5lcicpIHtcbiAgICAgIHRhcmdldCA9ICQoc3dpcGVyLnBhcmFtcy5tb3VzZXdoZWVsLmV2ZW50c1RhcmdldCk7XG4gICAgfVxuXG4gICAgdGFyZ2V0W21ldGhvZF0oJ21vdXNlZW50ZXInLCBoYW5kbGVNb3VzZUVudGVyKTtcbiAgICB0YXJnZXRbbWV0aG9kXSgnbW91c2VsZWF2ZScsIGhhbmRsZU1vdXNlTGVhdmUpO1xuICAgIHRhcmdldFttZXRob2RdKCd3aGVlbCcsIGhhbmRsZSk7XG4gIH1cblxuICBmdW5jdGlvbiBlbmFibGUoKSB7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMuY3NzTW9kZSkge1xuICAgICAgc3dpcGVyLndyYXBwZXJFbC5yZW1vdmVFdmVudExpc3RlbmVyKCd3aGVlbCcsIGhhbmRsZSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc3dpcGVyLm1vdXNld2hlZWwuZW5hYmxlZCkgcmV0dXJuIGZhbHNlO1xuICAgIGV2ZW50cygnb24nKTtcbiAgICBzd2lwZXIubW91c2V3aGVlbC5lbmFibGVkID0gdHJ1ZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRpc2FibGUoKSB7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMuY3NzTW9kZSkge1xuICAgICAgc3dpcGVyLndyYXBwZXJFbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGUpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCFzd2lwZXIubW91c2V3aGVlbC5lbmFibGVkKSByZXR1cm4gZmFsc2U7XG4gICAgZXZlbnRzKCdvZmYnKTtcbiAgICBzd2lwZXIubW91c2V3aGVlbC5lbmFibGVkID0gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBvbignaW5pdCcsICgpID0+IHtcbiAgICBpZiAoIXN3aXBlci5wYXJhbXMubW91c2V3aGVlbC5lbmFibGVkICYmIHN3aXBlci5wYXJhbXMuY3NzTW9kZSkge1xuICAgICAgZGlzYWJsZSgpO1xuICAgIH1cblxuICAgIGlmIChzd2lwZXIucGFyYW1zLm1vdXNld2hlZWwuZW5hYmxlZCkgZW5hYmxlKCk7XG4gIH0pO1xuICBvbignZGVzdHJveScsICgpID0+IHtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5jc3NNb2RlKSB7XG4gICAgICBlbmFibGUoKTtcbiAgICB9XG5cbiAgICBpZiAoc3dpcGVyLm1vdXNld2hlZWwuZW5hYmxlZCkgZGlzYWJsZSgpO1xuICB9KTtcbiAgT2JqZWN0LmFzc2lnbihzd2lwZXIubW91c2V3aGVlbCwge1xuICAgIGVuYWJsZSxcbiAgICBkaXNhYmxlXG4gIH0pO1xufSIsImltcG9ydCBjcmVhdGVFbGVtZW50SWZOb3REZWZpbmVkIGZyb20gJy4uLy4uL3NoYXJlZC9jcmVhdGUtZWxlbWVudC1pZi1ub3QtZGVmaW5lZC5qcyc7XG5pbXBvcnQgJCBmcm9tICcuLi8uLi9zaGFyZWQvZG9tLmpzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmlnYXRpb24oe1xuICBzd2lwZXIsXG4gIGV4dGVuZFBhcmFtcyxcbiAgb24sXG4gIGVtaXRcbn0pIHtcbiAgZXh0ZW5kUGFyYW1zKHtcbiAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICBuZXh0RWw6IG51bGwsXG4gICAgICBwcmV2RWw6IG51bGwsXG4gICAgICBoaWRlT25DbGljazogZmFsc2UsXG4gICAgICBkaXNhYmxlZENsYXNzOiAnc3dpcGVyLWJ1dHRvbi1kaXNhYmxlZCcsXG4gICAgICBoaWRkZW5DbGFzczogJ3N3aXBlci1idXR0b24taGlkZGVuJyxcbiAgICAgIGxvY2tDbGFzczogJ3N3aXBlci1idXR0b24tbG9jaydcbiAgICB9XG4gIH0pO1xuICBzd2lwZXIubmF2aWdhdGlvbiA9IHtcbiAgICBuZXh0RWw6IG51bGwsXG4gICAgJG5leHRFbDogbnVsbCxcbiAgICBwcmV2RWw6IG51bGwsXG4gICAgJHByZXZFbDogbnVsbFxuICB9O1xuXG4gIGZ1bmN0aW9uIGdldEVsKGVsKSB7XG4gICAgbGV0ICRlbDtcblxuICAgIGlmIChlbCkge1xuICAgICAgJGVsID0gJChlbCk7XG5cbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLnVuaXF1ZU5hdkVsZW1lbnRzICYmIHR5cGVvZiBlbCA9PT0gJ3N0cmluZycgJiYgJGVsLmxlbmd0aCA+IDEgJiYgc3dpcGVyLiRlbC5maW5kKGVsKS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgJGVsID0gc3dpcGVyLiRlbC5maW5kKGVsKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gJGVsO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlRWwoJGVsLCBkaXNhYmxlZCkge1xuICAgIGNvbnN0IHBhcmFtcyA9IHN3aXBlci5wYXJhbXMubmF2aWdhdGlvbjtcblxuICAgIGlmICgkZWwgJiYgJGVsLmxlbmd0aCA+IDApIHtcbiAgICAgICRlbFtkaXNhYmxlZCA/ICdhZGRDbGFzcycgOiAncmVtb3ZlQ2xhc3MnXShwYXJhbXMuZGlzYWJsZWRDbGFzcyk7XG4gICAgICBpZiAoJGVsWzBdICYmICRlbFswXS50YWdOYW1lID09PSAnQlVUVE9OJykgJGVsWzBdLmRpc2FibGVkID0gZGlzYWJsZWQ7XG5cbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLndhdGNoT3ZlcmZsb3cgJiYgc3dpcGVyLmVuYWJsZWQpIHtcbiAgICAgICAgJGVsW3N3aXBlci5pc0xvY2tlZCA/ICdhZGRDbGFzcycgOiAncmVtb3ZlQ2xhc3MnXShwYXJhbXMubG9ja0NsYXNzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgLy8gVXBkYXRlIE5hdmlnYXRpb24gQnV0dG9uc1xuICAgIGlmIChzd2lwZXIucGFyYW1zLmxvb3ApIHJldHVybjtcbiAgICBjb25zdCB7XG4gICAgICAkbmV4dEVsLFxuICAgICAgJHByZXZFbFxuICAgIH0gPSBzd2lwZXIubmF2aWdhdGlvbjtcbiAgICB0b2dnbGVFbCgkcHJldkVsLCBzd2lwZXIuaXNCZWdpbm5pbmcpO1xuICAgIHRvZ2dsZUVsKCRuZXh0RWwsIHN3aXBlci5pc0VuZCk7XG4gIH1cblxuICBmdW5jdGlvbiBvblByZXZDbGljayhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChzd2lwZXIuaXNCZWdpbm5pbmcgJiYgIXN3aXBlci5wYXJhbXMubG9vcCkgcmV0dXJuO1xuICAgIHN3aXBlci5zbGlkZVByZXYoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uTmV4dENsaWNrKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHN3aXBlci5pc0VuZCAmJiAhc3dpcGVyLnBhcmFtcy5sb29wKSByZXR1cm47XG4gICAgc3dpcGVyLnNsaWRlTmV4dCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLm5hdmlnYXRpb247XG4gICAgc3dpcGVyLnBhcmFtcy5uYXZpZ2F0aW9uID0gY3JlYXRlRWxlbWVudElmTm90RGVmaW5lZChzd2lwZXIsIHN3aXBlci5vcmlnaW5hbFBhcmFtcy5uYXZpZ2F0aW9uLCBzd2lwZXIucGFyYW1zLm5hdmlnYXRpb24sIHtcbiAgICAgIG5leHRFbDogJ3N3aXBlci1idXR0b24tbmV4dCcsXG4gICAgICBwcmV2RWw6ICdzd2lwZXItYnV0dG9uLXByZXYnXG4gICAgfSk7XG4gICAgaWYgKCEocGFyYW1zLm5leHRFbCB8fCBwYXJhbXMucHJldkVsKSkgcmV0dXJuO1xuICAgIGNvbnN0ICRuZXh0RWwgPSBnZXRFbChwYXJhbXMubmV4dEVsKTtcbiAgICBjb25zdCAkcHJldkVsID0gZ2V0RWwocGFyYW1zLnByZXZFbCk7XG5cbiAgICBpZiAoJG5leHRFbCAmJiAkbmV4dEVsLmxlbmd0aCA+IDApIHtcbiAgICAgICRuZXh0RWwub24oJ2NsaWNrJywgb25OZXh0Q2xpY2spO1xuICAgIH1cblxuICAgIGlmICgkcHJldkVsICYmICRwcmV2RWwubGVuZ3RoID4gMCkge1xuICAgICAgJHByZXZFbC5vbignY2xpY2snLCBvblByZXZDbGljayk7XG4gICAgfVxuXG4gICAgT2JqZWN0LmFzc2lnbihzd2lwZXIubmF2aWdhdGlvbiwge1xuICAgICAgJG5leHRFbCxcbiAgICAgIG5leHRFbDogJG5leHRFbCAmJiAkbmV4dEVsWzBdLFxuICAgICAgJHByZXZFbCxcbiAgICAgIHByZXZFbDogJHByZXZFbCAmJiAkcHJldkVsWzBdXG4gICAgfSk7XG5cbiAgICBpZiAoIXN3aXBlci5lbmFibGVkKSB7XG4gICAgICBpZiAoJG5leHRFbCkgJG5leHRFbC5hZGRDbGFzcyhwYXJhbXMubG9ja0NsYXNzKTtcbiAgICAgIGlmICgkcHJldkVsKSAkcHJldkVsLmFkZENsYXNzKHBhcmFtcy5sb2NrQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgY29uc3Qge1xuICAgICAgJG5leHRFbCxcbiAgICAgICRwcmV2RWxcbiAgICB9ID0gc3dpcGVyLm5hdmlnYXRpb247XG5cbiAgICBpZiAoJG5leHRFbCAmJiAkbmV4dEVsLmxlbmd0aCkge1xuICAgICAgJG5leHRFbC5vZmYoJ2NsaWNrJywgb25OZXh0Q2xpY2spO1xuICAgICAgJG5leHRFbC5yZW1vdmVDbGFzcyhzd2lwZXIucGFyYW1zLm5hdmlnYXRpb24uZGlzYWJsZWRDbGFzcyk7XG4gICAgfVxuXG4gICAgaWYgKCRwcmV2RWwgJiYgJHByZXZFbC5sZW5ndGgpIHtcbiAgICAgICRwcmV2RWwub2ZmKCdjbGljaycsIG9uUHJldkNsaWNrKTtcbiAgICAgICRwcmV2RWwucmVtb3ZlQ2xhc3Moc3dpcGVyLnBhcmFtcy5uYXZpZ2F0aW9uLmRpc2FibGVkQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIG9uKCdpbml0JywgKCkgPT4ge1xuICAgIGluaXQoKTtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG4gIG9uKCd0b0VkZ2UgZnJvbUVkZ2UgbG9jayB1bmxvY2snLCAoKSA9PiB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xuICBvbignZGVzdHJveScsICgpID0+IHtcbiAgICBkZXN0cm95KCk7XG4gIH0pO1xuICBvbignZW5hYmxlIGRpc2FibGUnLCAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgJG5leHRFbCxcbiAgICAgICRwcmV2RWxcbiAgICB9ID0gc3dpcGVyLm5hdmlnYXRpb247XG5cbiAgICBpZiAoJG5leHRFbCkge1xuICAgICAgJG5leHRFbFtzd2lwZXIuZW5hYmxlZCA/ICdyZW1vdmVDbGFzcycgOiAnYWRkQ2xhc3MnXShzd2lwZXIucGFyYW1zLm5hdmlnYXRpb24ubG9ja0NsYXNzKTtcbiAgICB9XG5cbiAgICBpZiAoJHByZXZFbCkge1xuICAgICAgJHByZXZFbFtzd2lwZXIuZW5hYmxlZCA/ICdyZW1vdmVDbGFzcycgOiAnYWRkQ2xhc3MnXShzd2lwZXIucGFyYW1zLm5hdmlnYXRpb24ubG9ja0NsYXNzKTtcbiAgICB9XG4gIH0pO1xuICBvbignY2xpY2snLCAoX3MsIGUpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICAkbmV4dEVsLFxuICAgICAgJHByZXZFbFxuICAgIH0gPSBzd2lwZXIubmF2aWdhdGlvbjtcbiAgICBjb25zdCB0YXJnZXRFbCA9IGUudGFyZ2V0O1xuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMubmF2aWdhdGlvbi5oaWRlT25DbGljayAmJiAhJCh0YXJnZXRFbCkuaXMoJHByZXZFbCkgJiYgISQodGFyZ2V0RWwpLmlzKCRuZXh0RWwpKSB7XG4gICAgICBpZiAoc3dpcGVyLnBhZ2luYXRpb24gJiYgc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uICYmIHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbi5jbGlja2FibGUgJiYgKHN3aXBlci5wYWdpbmF0aW9uLmVsID09PSB0YXJnZXRFbCB8fCBzd2lwZXIucGFnaW5hdGlvbi5lbC5jb250YWlucyh0YXJnZXRFbCkpKSByZXR1cm47XG4gICAgICBsZXQgaXNIaWRkZW47XG5cbiAgICAgIGlmICgkbmV4dEVsKSB7XG4gICAgICAgIGlzSGlkZGVuID0gJG5leHRFbC5oYXNDbGFzcyhzd2lwZXIucGFyYW1zLm5hdmlnYXRpb24uaGlkZGVuQ2xhc3MpO1xuICAgICAgfSBlbHNlIGlmICgkcHJldkVsKSB7XG4gICAgICAgIGlzSGlkZGVuID0gJHByZXZFbC5oYXNDbGFzcyhzd2lwZXIucGFyYW1zLm5hdmlnYXRpb24uaGlkZGVuQ2xhc3MpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNIaWRkZW4gPT09IHRydWUpIHtcbiAgICAgICAgZW1pdCgnbmF2aWdhdGlvblNob3cnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVtaXQoJ25hdmlnYXRpb25IaWRlJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICgkbmV4dEVsKSB7XG4gICAgICAgICRuZXh0RWwudG9nZ2xlQ2xhc3Moc3dpcGVyLnBhcmFtcy5uYXZpZ2F0aW9uLmhpZGRlbkNsYXNzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCRwcmV2RWwpIHtcbiAgICAgICAgJHByZXZFbC50b2dnbGVDbGFzcyhzd2lwZXIucGFyYW1zLm5hdmlnYXRpb24uaGlkZGVuQ2xhc3MpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5hc3NpZ24oc3dpcGVyLm5hdmlnYXRpb24sIHtcbiAgICB1cGRhdGUsXG4gICAgaW5pdCxcbiAgICBkZXN0cm95XG4gIH0pO1xufSIsImltcG9ydCAkIGZyb20gJy4uLy4uL3NoYXJlZC9kb20uanMnO1xuaW1wb3J0IGNsYXNzZXNUb1NlbGVjdG9yIGZyb20gJy4uLy4uL3NoYXJlZC9jbGFzc2VzLXRvLXNlbGVjdG9yLmpzJztcbmltcG9ydCBjcmVhdGVFbGVtZW50SWZOb3REZWZpbmVkIGZyb20gJy4uLy4uL3NoYXJlZC9jcmVhdGUtZWxlbWVudC1pZi1ub3QtZGVmaW5lZC5qcyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdpbmF0aW9uKHtcbiAgc3dpcGVyLFxuICBleHRlbmRQYXJhbXMsXG4gIG9uLFxuICBlbWl0XG59KSB7XG4gIGNvbnN0IHBmeCA9ICdzd2lwZXItcGFnaW5hdGlvbic7XG4gIGV4dGVuZFBhcmFtcyh7XG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgZWw6IG51bGwsXG4gICAgICBidWxsZXRFbGVtZW50OiAnc3BhbicsXG4gICAgICBjbGlja2FibGU6IGZhbHNlLFxuICAgICAgaGlkZU9uQ2xpY2s6IGZhbHNlLFxuICAgICAgcmVuZGVyQnVsbGV0OiBudWxsLFxuICAgICAgcmVuZGVyUHJvZ3Jlc3NiYXI6IG51bGwsXG4gICAgICByZW5kZXJGcmFjdGlvbjogbnVsbCxcbiAgICAgIHJlbmRlckN1c3RvbTogbnVsbCxcbiAgICAgIHByb2dyZXNzYmFyT3Bwb3NpdGU6IGZhbHNlLFxuICAgICAgdHlwZTogJ2J1bGxldHMnLFxuICAgICAgLy8gJ2J1bGxldHMnIG9yICdwcm9ncmVzc2Jhcicgb3IgJ2ZyYWN0aW9uJyBvciAnY3VzdG9tJ1xuICAgICAgZHluYW1pY0J1bGxldHM6IGZhbHNlLFxuICAgICAgZHluYW1pY01haW5CdWxsZXRzOiAxLFxuICAgICAgZm9ybWF0RnJhY3Rpb25DdXJyZW50OiBudW1iZXIgPT4gbnVtYmVyLFxuICAgICAgZm9ybWF0RnJhY3Rpb25Ub3RhbDogbnVtYmVyID0+IG51bWJlcixcbiAgICAgIGJ1bGxldENsYXNzOiBgJHtwZnh9LWJ1bGxldGAsXG4gICAgICBidWxsZXRBY3RpdmVDbGFzczogYCR7cGZ4fS1idWxsZXQtYWN0aXZlYCxcbiAgICAgIG1vZGlmaWVyQ2xhc3M6IGAke3BmeH0tYCxcbiAgICAgIGN1cnJlbnRDbGFzczogYCR7cGZ4fS1jdXJyZW50YCxcbiAgICAgIHRvdGFsQ2xhc3M6IGAke3BmeH0tdG90YWxgLFxuICAgICAgaGlkZGVuQ2xhc3M6IGAke3BmeH0taGlkZGVuYCxcbiAgICAgIHByb2dyZXNzYmFyRmlsbENsYXNzOiBgJHtwZnh9LXByb2dyZXNzYmFyLWZpbGxgLFxuICAgICAgcHJvZ3Jlc3NiYXJPcHBvc2l0ZUNsYXNzOiBgJHtwZnh9LXByb2dyZXNzYmFyLW9wcG9zaXRlYCxcbiAgICAgIGNsaWNrYWJsZUNsYXNzOiBgJHtwZnh9LWNsaWNrYWJsZWAsXG4gICAgICBsb2NrQ2xhc3M6IGAke3BmeH0tbG9ja2AsXG4gICAgICBob3Jpem9udGFsQ2xhc3M6IGAke3BmeH0taG9yaXpvbnRhbGAsXG4gICAgICB2ZXJ0aWNhbENsYXNzOiBgJHtwZnh9LXZlcnRpY2FsYFxuICAgIH1cbiAgfSk7XG4gIHN3aXBlci5wYWdpbmF0aW9uID0ge1xuICAgIGVsOiBudWxsLFxuICAgICRlbDogbnVsbCxcbiAgICBidWxsZXRzOiBbXVxuICB9O1xuICBsZXQgYnVsbGV0U2l6ZTtcbiAgbGV0IGR5bmFtaWNCdWxsZXRJbmRleCA9IDA7XG5cbiAgZnVuY3Rpb24gaXNQYWdpbmF0aW9uRGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuICFzd2lwZXIucGFyYW1zLnBhZ2luYXRpb24uZWwgfHwgIXN3aXBlci5wYWdpbmF0aW9uLmVsIHx8ICFzd2lwZXIucGFnaW5hdGlvbi4kZWwgfHwgc3dpcGVyLnBhZ2luYXRpb24uJGVsLmxlbmd0aCA9PT0gMDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFNpZGVCdWxsZXRzKCRidWxsZXRFbCwgcG9zaXRpb24pIHtcbiAgICBjb25zdCB7XG4gICAgICBidWxsZXRBY3RpdmVDbGFzc1xuICAgIH0gPSBzd2lwZXIucGFyYW1zLnBhZ2luYXRpb247XG4gICAgJGJ1bGxldEVsW3Bvc2l0aW9uXSgpLmFkZENsYXNzKGAke2J1bGxldEFjdGl2ZUNsYXNzfS0ke3Bvc2l0aW9ufWApW3Bvc2l0aW9uXSgpLmFkZENsYXNzKGAke2J1bGxldEFjdGl2ZUNsYXNzfS0ke3Bvc2l0aW9ufS0ke3Bvc2l0aW9ufWApO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIC8vIFJlbmRlciB8fCBVcGRhdGUgUGFnaW5hdGlvbiBidWxsZXRzL2l0ZW1zXG4gICAgY29uc3QgcnRsID0gc3dpcGVyLnJ0bDtcbiAgICBjb25zdCBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLnBhZ2luYXRpb247XG4gICAgaWYgKGlzUGFnaW5hdGlvbkRpc2FibGVkKCkpIHJldHVybjtcbiAgICBjb25zdCBzbGlkZXNMZW5ndGggPSBzd2lwZXIudmlydHVhbCAmJiBzd2lwZXIucGFyYW1zLnZpcnR1YWwuZW5hYmxlZCA/IHN3aXBlci52aXJ0dWFsLnNsaWRlcy5sZW5ndGggOiBzd2lwZXIuc2xpZGVzLmxlbmd0aDtcbiAgICBjb25zdCAkZWwgPSBzd2lwZXIucGFnaW5hdGlvbi4kZWw7IC8vIEN1cnJlbnQvVG90YWxcblxuICAgIGxldCBjdXJyZW50O1xuICAgIGNvbnN0IHRvdGFsID0gc3dpcGVyLnBhcmFtcy5sb29wID8gTWF0aC5jZWlsKChzbGlkZXNMZW5ndGggLSBzd2lwZXIubG9vcGVkU2xpZGVzICogMikgLyBzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwKSA6IHN3aXBlci5zbmFwR3JpZC5sZW5ndGg7XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5sb29wKSB7XG4gICAgICBjdXJyZW50ID0gTWF0aC5jZWlsKChzd2lwZXIuYWN0aXZlSW5kZXggLSBzd2lwZXIubG9vcGVkU2xpZGVzKSAvIHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyR3JvdXApO1xuXG4gICAgICBpZiAoY3VycmVudCA+IHNsaWRlc0xlbmd0aCAtIDEgLSBzd2lwZXIubG9vcGVkU2xpZGVzICogMikge1xuICAgICAgICBjdXJyZW50IC09IHNsaWRlc0xlbmd0aCAtIHN3aXBlci5sb29wZWRTbGlkZXMgKiAyO1xuICAgICAgfVxuXG4gICAgICBpZiAoY3VycmVudCA+IHRvdGFsIC0gMSkgY3VycmVudCAtPSB0b3RhbDtcbiAgICAgIGlmIChjdXJyZW50IDwgMCAmJiBzd2lwZXIucGFyYW1zLnBhZ2luYXRpb25UeXBlICE9PSAnYnVsbGV0cycpIGN1cnJlbnQgPSB0b3RhbCArIGN1cnJlbnQ7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygc3dpcGVyLnNuYXBJbmRleCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGN1cnJlbnQgPSBzd2lwZXIuc25hcEluZGV4O1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50ID0gc3dpcGVyLmFjdGl2ZUluZGV4IHx8IDA7XG4gICAgfSAvLyBUeXBlc1xuXG5cbiAgICBpZiAocGFyYW1zLnR5cGUgPT09ICdidWxsZXRzJyAmJiBzd2lwZXIucGFnaW5hdGlvbi5idWxsZXRzICYmIHN3aXBlci5wYWdpbmF0aW9uLmJ1bGxldHMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgYnVsbGV0cyA9IHN3aXBlci5wYWdpbmF0aW9uLmJ1bGxldHM7XG4gICAgICBsZXQgZmlyc3RJbmRleDtcbiAgICAgIGxldCBsYXN0SW5kZXg7XG4gICAgICBsZXQgbWlkSW5kZXg7XG5cbiAgICAgIGlmIChwYXJhbXMuZHluYW1pY0J1bGxldHMpIHtcbiAgICAgICAgYnVsbGV0U2l6ZSA9IGJ1bGxldHMuZXEoMClbc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gJ291dGVyV2lkdGgnIDogJ291dGVySGVpZ2h0J10odHJ1ZSk7XG4gICAgICAgICRlbC5jc3Moc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gJ3dpZHRoJyA6ICdoZWlnaHQnLCBgJHtidWxsZXRTaXplICogKHBhcmFtcy5keW5hbWljTWFpbkJ1bGxldHMgKyA0KX1weGApO1xuXG4gICAgICAgIGlmIChwYXJhbXMuZHluYW1pY01haW5CdWxsZXRzID4gMSAmJiBzd2lwZXIucHJldmlvdXNJbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgZHluYW1pY0J1bGxldEluZGV4ICs9IGN1cnJlbnQgLSBzd2lwZXIucHJldmlvdXNJbmRleDtcblxuICAgICAgICAgIGlmIChkeW5hbWljQnVsbGV0SW5kZXggPiBwYXJhbXMuZHluYW1pY01haW5CdWxsZXRzIC0gMSkge1xuICAgICAgICAgICAgZHluYW1pY0J1bGxldEluZGV4ID0gcGFyYW1zLmR5bmFtaWNNYWluQnVsbGV0cyAtIDE7XG4gICAgICAgICAgfSBlbHNlIGlmIChkeW5hbWljQnVsbGV0SW5kZXggPCAwKSB7XG4gICAgICAgICAgICBkeW5hbWljQnVsbGV0SW5kZXggPSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZpcnN0SW5kZXggPSBjdXJyZW50IC0gZHluYW1pY0J1bGxldEluZGV4O1xuICAgICAgICBsYXN0SW5kZXggPSBmaXJzdEluZGV4ICsgKE1hdGgubWluKGJ1bGxldHMubGVuZ3RoLCBwYXJhbXMuZHluYW1pY01haW5CdWxsZXRzKSAtIDEpO1xuICAgICAgICBtaWRJbmRleCA9IChsYXN0SW5kZXggKyBmaXJzdEluZGV4KSAvIDI7XG4gICAgICB9XG5cbiAgICAgIGJ1bGxldHMucmVtb3ZlQ2xhc3MoWycnLCAnLW5leHQnLCAnLW5leHQtbmV4dCcsICctcHJldicsICctcHJldi1wcmV2JywgJy1tYWluJ10ubWFwKHN1ZmZpeCA9PiBgJHtwYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3N9JHtzdWZmaXh9YCkuam9pbignICcpKTtcblxuICAgICAgaWYgKCRlbC5sZW5ndGggPiAxKSB7XG4gICAgICAgIGJ1bGxldHMuZWFjaChidWxsZXQgPT4ge1xuICAgICAgICAgIGNvbnN0ICRidWxsZXQgPSAkKGJ1bGxldCk7XG4gICAgICAgICAgY29uc3QgYnVsbGV0SW5kZXggPSAkYnVsbGV0LmluZGV4KCk7XG5cbiAgICAgICAgICBpZiAoYnVsbGV0SW5kZXggPT09IGN1cnJlbnQpIHtcbiAgICAgICAgICAgICRidWxsZXQuYWRkQ2xhc3MocGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAocGFyYW1zLmR5bmFtaWNCdWxsZXRzKSB7XG4gICAgICAgICAgICBpZiAoYnVsbGV0SW5kZXggPj0gZmlyc3RJbmRleCAmJiBidWxsZXRJbmRleCA8PSBsYXN0SW5kZXgpIHtcbiAgICAgICAgICAgICAgJGJ1bGxldC5hZGRDbGFzcyhgJHtwYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3N9LW1haW5gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGJ1bGxldEluZGV4ID09PSBmaXJzdEluZGV4KSB7XG4gICAgICAgICAgICAgIHNldFNpZGVCdWxsZXRzKCRidWxsZXQsICdwcmV2Jyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChidWxsZXRJbmRleCA9PT0gbGFzdEluZGV4KSB7XG4gICAgICAgICAgICAgIHNldFNpZGVCdWxsZXRzKCRidWxsZXQsICduZXh0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0ICRidWxsZXQgPSBidWxsZXRzLmVxKGN1cnJlbnQpO1xuICAgICAgICBjb25zdCBidWxsZXRJbmRleCA9ICRidWxsZXQuaW5kZXgoKTtcbiAgICAgICAgJGJ1bGxldC5hZGRDbGFzcyhwYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3MpO1xuXG4gICAgICAgIGlmIChwYXJhbXMuZHluYW1pY0J1bGxldHMpIHtcbiAgICAgICAgICBjb25zdCAkZmlyc3REaXNwbGF5ZWRCdWxsZXQgPSBidWxsZXRzLmVxKGZpcnN0SW5kZXgpO1xuICAgICAgICAgIGNvbnN0ICRsYXN0RGlzcGxheWVkQnVsbGV0ID0gYnVsbGV0cy5lcShsYXN0SW5kZXgpO1xuXG4gICAgICAgICAgZm9yIChsZXQgaSA9IGZpcnN0SW5kZXg7IGkgPD0gbGFzdEluZGV4OyBpICs9IDEpIHtcbiAgICAgICAgICAgIGJ1bGxldHMuZXEoaSkuYWRkQ2xhc3MoYCR7cGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzfS1tYWluYCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMubG9vcCkge1xuICAgICAgICAgICAgaWYgKGJ1bGxldEluZGV4ID49IGJ1bGxldHMubGVuZ3RoIC0gcGFyYW1zLmR5bmFtaWNNYWluQnVsbGV0cykge1xuICAgICAgICAgICAgICBmb3IgKGxldCBpID0gcGFyYW1zLmR5bmFtaWNNYWluQnVsbGV0czsgaSA+PSAwOyBpIC09IDEpIHtcbiAgICAgICAgICAgICAgICBidWxsZXRzLmVxKGJ1bGxldHMubGVuZ3RoIC0gaSkuYWRkQ2xhc3MoYCR7cGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzfS1tYWluYCk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBidWxsZXRzLmVxKGJ1bGxldHMubGVuZ3RoIC0gcGFyYW1zLmR5bmFtaWNNYWluQnVsbGV0cyAtIDEpLmFkZENsYXNzKGAke3BhcmFtcy5idWxsZXRBY3RpdmVDbGFzc30tcHJldmApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc2V0U2lkZUJ1bGxldHMoJGZpcnN0RGlzcGxheWVkQnVsbGV0LCAncHJldicpO1xuICAgICAgICAgICAgICBzZXRTaWRlQnVsbGV0cygkbGFzdERpc3BsYXllZEJ1bGxldCwgJ25leHQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0U2lkZUJ1bGxldHMoJGZpcnN0RGlzcGxheWVkQnVsbGV0LCAncHJldicpO1xuICAgICAgICAgICAgc2V0U2lkZUJ1bGxldHMoJGxhc3REaXNwbGF5ZWRCdWxsZXQsICduZXh0Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChwYXJhbXMuZHluYW1pY0J1bGxldHMpIHtcbiAgICAgICAgY29uc3QgZHluYW1pY0J1bGxldHNMZW5ndGggPSBNYXRoLm1pbihidWxsZXRzLmxlbmd0aCwgcGFyYW1zLmR5bmFtaWNNYWluQnVsbGV0cyArIDQpO1xuICAgICAgICBjb25zdCBidWxsZXRzT2Zmc2V0ID0gKGJ1bGxldFNpemUgKiBkeW5hbWljQnVsbGV0c0xlbmd0aCAtIGJ1bGxldFNpemUpIC8gMiAtIG1pZEluZGV4ICogYnVsbGV0U2l6ZTtcbiAgICAgICAgY29uc3Qgb2Zmc2V0UHJvcCA9IHJ0bCA/ICdyaWdodCcgOiAnbGVmdCc7XG4gICAgICAgIGJ1bGxldHMuY3NzKHN3aXBlci5pc0hvcml6b250YWwoKSA/IG9mZnNldFByb3AgOiAndG9wJywgYCR7YnVsbGV0c09mZnNldH1weGApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwYXJhbXMudHlwZSA9PT0gJ2ZyYWN0aW9uJykge1xuICAgICAgJGVsLmZpbmQoY2xhc3Nlc1RvU2VsZWN0b3IocGFyYW1zLmN1cnJlbnRDbGFzcykpLnRleHQocGFyYW1zLmZvcm1hdEZyYWN0aW9uQ3VycmVudChjdXJyZW50ICsgMSkpO1xuICAgICAgJGVsLmZpbmQoY2xhc3Nlc1RvU2VsZWN0b3IocGFyYW1zLnRvdGFsQ2xhc3MpKS50ZXh0KHBhcmFtcy5mb3JtYXRGcmFjdGlvblRvdGFsKHRvdGFsKSk7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy50eXBlID09PSAncHJvZ3Jlc3NiYXInKSB7XG4gICAgICBsZXQgcHJvZ3Jlc3NiYXJEaXJlY3Rpb247XG5cbiAgICAgIGlmIChwYXJhbXMucHJvZ3Jlc3NiYXJPcHBvc2l0ZSkge1xuICAgICAgICBwcm9ncmVzc2JhckRpcmVjdGlvbiA9IHN3aXBlci5pc0hvcml6b250YWwoKSA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9ncmVzc2JhckRpcmVjdGlvbiA9IHN3aXBlci5pc0hvcml6b250YWwoKSA/ICdob3Jpem9udGFsJyA6ICd2ZXJ0aWNhbCc7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHNjYWxlID0gKGN1cnJlbnQgKyAxKSAvIHRvdGFsO1xuICAgICAgbGV0IHNjYWxlWCA9IDE7XG4gICAgICBsZXQgc2NhbGVZID0gMTtcblxuICAgICAgaWYgKHByb2dyZXNzYmFyRGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgc2NhbGVYID0gc2NhbGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzY2FsZVkgPSBzY2FsZTtcbiAgICAgIH1cblxuICAgICAgJGVsLmZpbmQoY2xhc3Nlc1RvU2VsZWN0b3IocGFyYW1zLnByb2dyZXNzYmFyRmlsbENsYXNzKSkudHJhbnNmb3JtKGB0cmFuc2xhdGUzZCgwLDAsMCkgc2NhbGVYKCR7c2NhbGVYfSkgc2NhbGVZKCR7c2NhbGVZfSlgKS50cmFuc2l0aW9uKHN3aXBlci5wYXJhbXMuc3BlZWQpO1xuICAgIH1cblxuICAgIGlmIChwYXJhbXMudHlwZSA9PT0gJ2N1c3RvbScgJiYgcGFyYW1zLnJlbmRlckN1c3RvbSkge1xuICAgICAgJGVsLmh0bWwocGFyYW1zLnJlbmRlckN1c3RvbShzd2lwZXIsIGN1cnJlbnQgKyAxLCB0b3RhbCkpO1xuICAgICAgZW1pdCgncGFnaW5hdGlvblJlbmRlcicsICRlbFswXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVtaXQoJ3BhZ2luYXRpb25VcGRhdGUnLCAkZWxbMF0pO1xuICAgIH1cblxuICAgIGlmIChzd2lwZXIucGFyYW1zLndhdGNoT3ZlcmZsb3cgJiYgc3dpcGVyLmVuYWJsZWQpIHtcbiAgICAgICRlbFtzd2lwZXIuaXNMb2NrZWQgPyAnYWRkQ2xhc3MnIDogJ3JlbW92ZUNsYXNzJ10ocGFyYW1zLmxvY2tDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIC8vIFJlbmRlciBDb250YWluZXJcbiAgICBjb25zdCBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLnBhZ2luYXRpb247XG4gICAgaWYgKGlzUGFnaW5hdGlvbkRpc2FibGVkKCkpIHJldHVybjtcbiAgICBjb25zdCBzbGlkZXNMZW5ndGggPSBzd2lwZXIudmlydHVhbCAmJiBzd2lwZXIucGFyYW1zLnZpcnR1YWwuZW5hYmxlZCA/IHN3aXBlci52aXJ0dWFsLnNsaWRlcy5sZW5ndGggOiBzd2lwZXIuc2xpZGVzLmxlbmd0aDtcbiAgICBjb25zdCAkZWwgPSBzd2lwZXIucGFnaW5hdGlvbi4kZWw7XG4gICAgbGV0IHBhZ2luYXRpb25IVE1MID0gJyc7XG5cbiAgICBpZiAocGFyYW1zLnR5cGUgPT09ICdidWxsZXRzJykge1xuICAgICAgbGV0IG51bWJlck9mQnVsbGV0cyA9IHN3aXBlci5wYXJhbXMubG9vcCA/IE1hdGguY2VpbCgoc2xpZGVzTGVuZ3RoIC0gc3dpcGVyLmxvb3BlZFNsaWRlcyAqIDIpIC8gc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJHcm91cCkgOiBzd2lwZXIuc25hcEdyaWQubGVuZ3RoO1xuXG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5mcmVlTW9kZSAmJiBzd2lwZXIucGFyYW1zLmZyZWVNb2RlLmVuYWJsZWQgJiYgIXN3aXBlci5wYXJhbXMubG9vcCAmJiBudW1iZXJPZkJ1bGxldHMgPiBzbGlkZXNMZW5ndGgpIHtcbiAgICAgICAgbnVtYmVyT2ZCdWxsZXRzID0gc2xpZGVzTGVuZ3RoO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlck9mQnVsbGV0czsgaSArPSAxKSB7XG4gICAgICAgIGlmIChwYXJhbXMucmVuZGVyQnVsbGV0KSB7XG4gICAgICAgICAgcGFnaW5hdGlvbkhUTUwgKz0gcGFyYW1zLnJlbmRlckJ1bGxldC5jYWxsKHN3aXBlciwgaSwgcGFyYW1zLmJ1bGxldENsYXNzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYWdpbmF0aW9uSFRNTCArPSBgPCR7cGFyYW1zLmJ1bGxldEVsZW1lbnR9IGNsYXNzPVwiJHtwYXJhbXMuYnVsbGV0Q2xhc3N9XCI+PC8ke3BhcmFtcy5idWxsZXRFbGVtZW50fT5gO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICRlbC5odG1sKHBhZ2luYXRpb25IVE1MKTtcbiAgICAgIHN3aXBlci5wYWdpbmF0aW9uLmJ1bGxldHMgPSAkZWwuZmluZChjbGFzc2VzVG9TZWxlY3RvcihwYXJhbXMuYnVsbGV0Q2xhc3MpKTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLnR5cGUgPT09ICdmcmFjdGlvbicpIHtcbiAgICAgIGlmIChwYXJhbXMucmVuZGVyRnJhY3Rpb24pIHtcbiAgICAgICAgcGFnaW5hdGlvbkhUTUwgPSBwYXJhbXMucmVuZGVyRnJhY3Rpb24uY2FsbChzd2lwZXIsIHBhcmFtcy5jdXJyZW50Q2xhc3MsIHBhcmFtcy50b3RhbENsYXNzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhZ2luYXRpb25IVE1MID0gYDxzcGFuIGNsYXNzPVwiJHtwYXJhbXMuY3VycmVudENsYXNzfVwiPjwvc3Bhbj5gICsgJyAvICcgKyBgPHNwYW4gY2xhc3M9XCIke3BhcmFtcy50b3RhbENsYXNzfVwiPjwvc3Bhbj5gO1xuICAgICAgfVxuXG4gICAgICAkZWwuaHRtbChwYWdpbmF0aW9uSFRNTCk7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy50eXBlID09PSAncHJvZ3Jlc3NiYXInKSB7XG4gICAgICBpZiAocGFyYW1zLnJlbmRlclByb2dyZXNzYmFyKSB7XG4gICAgICAgIHBhZ2luYXRpb25IVE1MID0gcGFyYW1zLnJlbmRlclByb2dyZXNzYmFyLmNhbGwoc3dpcGVyLCBwYXJhbXMucHJvZ3Jlc3NiYXJGaWxsQ2xhc3MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFnaW5hdGlvbkhUTUwgPSBgPHNwYW4gY2xhc3M9XCIke3BhcmFtcy5wcm9ncmVzc2JhckZpbGxDbGFzc31cIj48L3NwYW4+YDtcbiAgICAgIH1cblxuICAgICAgJGVsLmh0bWwocGFnaW5hdGlvbkhUTUwpO1xuICAgIH1cblxuICAgIGlmIChwYXJhbXMudHlwZSAhPT0gJ2N1c3RvbScpIHtcbiAgICAgIGVtaXQoJ3BhZ2luYXRpb25SZW5kZXInLCBzd2lwZXIucGFnaW5hdGlvbi4kZWxbMF0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uID0gY3JlYXRlRWxlbWVudElmTm90RGVmaW5lZChzd2lwZXIsIHN3aXBlci5vcmlnaW5hbFBhcmFtcy5wYWdpbmF0aW9uLCBzd2lwZXIucGFyYW1zLnBhZ2luYXRpb24sIHtcbiAgICAgIGVsOiAnc3dpcGVyLXBhZ2luYXRpb24nXG4gICAgfSk7XG4gICAgY29uc3QgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uO1xuICAgIGlmICghcGFyYW1zLmVsKSByZXR1cm47XG4gICAgbGV0ICRlbCA9ICQocGFyYW1zLmVsKTtcbiAgICBpZiAoJGVsLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMudW5pcXVlTmF2RWxlbWVudHMgJiYgdHlwZW9mIHBhcmFtcy5lbCA9PT0gJ3N0cmluZycgJiYgJGVsLmxlbmd0aCA+IDEpIHtcbiAgICAgICRlbCA9IHN3aXBlci4kZWwuZmluZChwYXJhbXMuZWwpOyAvLyBjaGVjayBpZiBpdCBiZWxvbmdzIHRvIGFub3RoZXIgbmVzdGVkIFN3aXBlclxuXG4gICAgICBpZiAoJGVsLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgJGVsID0gJGVsLmZpbHRlcihlbCA9PiB7XG4gICAgICAgICAgaWYgKCQoZWwpLnBhcmVudHMoJy5zd2lwZXInKVswXSAhPT0gc3dpcGVyLmVsKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwYXJhbXMudHlwZSA9PT0gJ2J1bGxldHMnICYmIHBhcmFtcy5jbGlja2FibGUpIHtcbiAgICAgICRlbC5hZGRDbGFzcyhwYXJhbXMuY2xpY2thYmxlQ2xhc3MpO1xuICAgIH1cblxuICAgICRlbC5hZGRDbGFzcyhwYXJhbXMubW9kaWZpZXJDbGFzcyArIHBhcmFtcy50eXBlKTtcbiAgICAkZWwuYWRkQ2xhc3MocGFyYW1zLm1vZGlmaWVyQ2xhc3MgKyBzd2lwZXIucGFyYW1zLmRpcmVjdGlvbik7XG5cbiAgICBpZiAocGFyYW1zLnR5cGUgPT09ICdidWxsZXRzJyAmJiBwYXJhbXMuZHluYW1pY0J1bGxldHMpIHtcbiAgICAgICRlbC5hZGRDbGFzcyhgJHtwYXJhbXMubW9kaWZpZXJDbGFzc30ke3BhcmFtcy50eXBlfS1keW5hbWljYCk7XG4gICAgICBkeW5hbWljQnVsbGV0SW5kZXggPSAwO1xuXG4gICAgICBpZiAocGFyYW1zLmR5bmFtaWNNYWluQnVsbGV0cyA8IDEpIHtcbiAgICAgICAgcGFyYW1zLmR5bmFtaWNNYWluQnVsbGV0cyA9IDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy50eXBlID09PSAncHJvZ3Jlc3NiYXInICYmIHBhcmFtcy5wcm9ncmVzc2Jhck9wcG9zaXRlKSB7XG4gICAgICAkZWwuYWRkQ2xhc3MocGFyYW1zLnByb2dyZXNzYmFyT3Bwb3NpdGVDbGFzcyk7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy5jbGlja2FibGUpIHtcbiAgICAgICRlbC5vbignY2xpY2snLCBjbGFzc2VzVG9TZWxlY3RvcihwYXJhbXMuYnVsbGV0Q2xhc3MpLCBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgaW5kZXggPSAkKHRoaXMpLmluZGV4KCkgKiBzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwO1xuICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy5sb29wKSBpbmRleCArPSBzd2lwZXIubG9vcGVkU2xpZGVzO1xuICAgICAgICBzd2lwZXIuc2xpZGVUbyhpbmRleCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBPYmplY3QuYXNzaWduKHN3aXBlci5wYWdpbmF0aW9uLCB7XG4gICAgICAkZWwsXG4gICAgICBlbDogJGVsWzBdXG4gICAgfSk7XG5cbiAgICBpZiAoIXN3aXBlci5lbmFibGVkKSB7XG4gICAgICAkZWwuYWRkQ2xhc3MocGFyYW1zLmxvY2tDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLnBhZ2luYXRpb247XG4gICAgaWYgKGlzUGFnaW5hdGlvbkRpc2FibGVkKCkpIHJldHVybjtcbiAgICBjb25zdCAkZWwgPSBzd2lwZXIucGFnaW5hdGlvbi4kZWw7XG4gICAgJGVsLnJlbW92ZUNsYXNzKHBhcmFtcy5oaWRkZW5DbGFzcyk7XG4gICAgJGVsLnJlbW92ZUNsYXNzKHBhcmFtcy5tb2RpZmllckNsYXNzICsgcGFyYW1zLnR5cGUpO1xuICAgICRlbC5yZW1vdmVDbGFzcyhwYXJhbXMubW9kaWZpZXJDbGFzcyArIHN3aXBlci5wYXJhbXMuZGlyZWN0aW9uKTtcbiAgICBpZiAoc3dpcGVyLnBhZ2luYXRpb24uYnVsbGV0cyAmJiBzd2lwZXIucGFnaW5hdGlvbi5idWxsZXRzLnJlbW92ZUNsYXNzKSBzd2lwZXIucGFnaW5hdGlvbi5idWxsZXRzLnJlbW92ZUNsYXNzKHBhcmFtcy5idWxsZXRBY3RpdmVDbGFzcyk7XG5cbiAgICBpZiAocGFyYW1zLmNsaWNrYWJsZSkge1xuICAgICAgJGVsLm9mZignY2xpY2snLCBjbGFzc2VzVG9TZWxlY3RvcihwYXJhbXMuYnVsbGV0Q2xhc3MpKTtcbiAgICB9XG4gIH1cblxuICBvbignaW5pdCcsICgpID0+IHtcbiAgICBpbml0KCk7XG4gICAgcmVuZGVyKCk7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xuICBvbignYWN0aXZlSW5kZXhDaGFuZ2UnLCAoKSA9PiB7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMubG9vcCkge1xuICAgICAgdXBkYXRlKCk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygc3dpcGVyLnNuYXBJbmRleCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHVwZGF0ZSgpO1xuICAgIH1cbiAgfSk7XG4gIG9uKCdzbmFwSW5kZXhDaGFuZ2UnLCAoKSA9PiB7XG4gICAgaWYgKCFzd2lwZXIucGFyYW1zLmxvb3ApIHtcbiAgICAgIHVwZGF0ZSgpO1xuICAgIH1cbiAgfSk7XG4gIG9uKCdzbGlkZXNMZW5ndGhDaGFuZ2UnLCAoKSA9PiB7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMubG9vcCkge1xuICAgICAgcmVuZGVyKCk7XG4gICAgICB1cGRhdGUoKTtcbiAgICB9XG4gIH0pO1xuICBvbignc25hcEdyaWRMZW5ndGhDaGFuZ2UnLCAoKSA9PiB7XG4gICAgaWYgKCFzd2lwZXIucGFyYW1zLmxvb3ApIHtcbiAgICAgIHJlbmRlcigpO1xuICAgICAgdXBkYXRlKCk7XG4gICAgfVxuICB9KTtcbiAgb24oJ2Rlc3Ryb3knLCAoKSA9PiB7XG4gICAgZGVzdHJveSgpO1xuICB9KTtcbiAgb24oJ2VuYWJsZSBkaXNhYmxlJywgKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgICRlbFxuICAgIH0gPSBzd2lwZXIucGFnaW5hdGlvbjtcblxuICAgIGlmICgkZWwpIHtcbiAgICAgICRlbFtzd2lwZXIuZW5hYmxlZCA/ICdyZW1vdmVDbGFzcycgOiAnYWRkQ2xhc3MnXShzd2lwZXIucGFyYW1zLnBhZ2luYXRpb24ubG9ja0NsYXNzKTtcbiAgICB9XG4gIH0pO1xuICBvbignbG9jayB1bmxvY2snLCAoKSA9PiB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xuICBvbignY2xpY2snLCAoX3MsIGUpID0+IHtcbiAgICBjb25zdCB0YXJnZXRFbCA9IGUudGFyZ2V0O1xuICAgIGNvbnN0IHtcbiAgICAgICRlbFxuICAgIH0gPSBzd2lwZXIucGFnaW5hdGlvbjtcblxuICAgIGlmIChzd2lwZXIucGFyYW1zLnBhZ2luYXRpb24uZWwgJiYgc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uLmhpZGVPbkNsaWNrICYmICRlbC5sZW5ndGggPiAwICYmICEkKHRhcmdldEVsKS5oYXNDbGFzcyhzd2lwZXIucGFyYW1zLnBhZ2luYXRpb24uYnVsbGV0Q2xhc3MpKSB7XG4gICAgICBpZiAoc3dpcGVyLm5hdmlnYXRpb24gJiYgKHN3aXBlci5uYXZpZ2F0aW9uLm5leHRFbCAmJiB0YXJnZXRFbCA9PT0gc3dpcGVyLm5hdmlnYXRpb24ubmV4dEVsIHx8IHN3aXBlci5uYXZpZ2F0aW9uLnByZXZFbCAmJiB0YXJnZXRFbCA9PT0gc3dpcGVyLm5hdmlnYXRpb24ucHJldkVsKSkgcmV0dXJuO1xuICAgICAgY29uc3QgaXNIaWRkZW4gPSAkZWwuaGFzQ2xhc3Moc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uLmhpZGRlbkNsYXNzKTtcblxuICAgICAgaWYgKGlzSGlkZGVuID09PSB0cnVlKSB7XG4gICAgICAgIGVtaXQoJ3BhZ2luYXRpb25TaG93Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbWl0KCdwYWdpbmF0aW9uSGlkZScpO1xuICAgICAgfVxuXG4gICAgICAkZWwudG9nZ2xlQ2xhc3Moc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uLmhpZGRlbkNsYXNzKTtcbiAgICB9XG4gIH0pO1xuICBPYmplY3QuYXNzaWduKHN3aXBlci5wYWdpbmF0aW9uLCB7XG4gICAgcmVuZGVyLFxuICAgIHVwZGF0ZSxcbiAgICBpbml0LFxuICAgIGRlc3Ryb3lcbiAgfSk7XG59IiwiaW1wb3J0ICQgZnJvbSAnLi4vLi4vc2hhcmVkL2RvbS5qcyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYXJhbGxheCh7XG4gIHN3aXBlcixcbiAgZXh0ZW5kUGFyYW1zLFxuICBvblxufSkge1xuICBleHRlbmRQYXJhbXMoe1xuICAgIHBhcmFsbGF4OiB7XG4gICAgICBlbmFibGVkOiBmYWxzZVxuICAgIH1cbiAgfSk7XG5cbiAgY29uc3Qgc2V0VHJhbnNmb3JtID0gKGVsLCBwcm9ncmVzcykgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIHJ0bFxuICAgIH0gPSBzd2lwZXI7XG4gICAgY29uc3QgJGVsID0gJChlbCk7XG4gICAgY29uc3QgcnRsRmFjdG9yID0gcnRsID8gLTEgOiAxO1xuICAgIGNvbnN0IHAgPSAkZWwuYXR0cignZGF0YS1zd2lwZXItcGFyYWxsYXgnKSB8fCAnMCc7XG4gICAgbGV0IHggPSAkZWwuYXR0cignZGF0YS1zd2lwZXItcGFyYWxsYXgteCcpO1xuICAgIGxldCB5ID0gJGVsLmF0dHIoJ2RhdGEtc3dpcGVyLXBhcmFsbGF4LXknKTtcbiAgICBjb25zdCBzY2FsZSA9ICRlbC5hdHRyKCdkYXRhLXN3aXBlci1wYXJhbGxheC1zY2FsZScpO1xuICAgIGNvbnN0IG9wYWNpdHkgPSAkZWwuYXR0cignZGF0YS1zd2lwZXItcGFyYWxsYXgtb3BhY2l0eScpO1xuXG4gICAgaWYgKHggfHwgeSkge1xuICAgICAgeCA9IHggfHwgJzAnO1xuICAgICAgeSA9IHkgfHwgJzAnO1xuICAgIH0gZWxzZSBpZiAoc3dpcGVyLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICB4ID0gcDtcbiAgICAgIHkgPSAnMCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHkgPSBwO1xuICAgICAgeCA9ICcwJztcbiAgICB9XG5cbiAgICBpZiAoeC5pbmRleE9mKCclJykgPj0gMCkge1xuICAgICAgeCA9IGAke3BhcnNlSW50KHgsIDEwKSAqIHByb2dyZXNzICogcnRsRmFjdG9yfSVgO1xuICAgIH0gZWxzZSB7XG4gICAgICB4ID0gYCR7eCAqIHByb2dyZXNzICogcnRsRmFjdG9yfXB4YDtcbiAgICB9XG5cbiAgICBpZiAoeS5pbmRleE9mKCclJykgPj0gMCkge1xuICAgICAgeSA9IGAke3BhcnNlSW50KHksIDEwKSAqIHByb2dyZXNzfSVgO1xuICAgIH0gZWxzZSB7XG4gICAgICB5ID0gYCR7eSAqIHByb2dyZXNzfXB4YDtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9wYWNpdHkgIT09ICd1bmRlZmluZWQnICYmIG9wYWNpdHkgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRPcGFjaXR5ID0gb3BhY2l0eSAtIChvcGFjaXR5IC0gMSkgKiAoMSAtIE1hdGguYWJzKHByb2dyZXNzKSk7XG4gICAgICAkZWxbMF0uc3R5bGUub3BhY2l0eSA9IGN1cnJlbnRPcGFjaXR5O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygc2NhbGUgPT09ICd1bmRlZmluZWQnIHx8IHNjYWxlID09PSBudWxsKSB7XG4gICAgICAkZWwudHJhbnNmb3JtKGB0cmFuc2xhdGUzZCgke3h9LCAke3l9LCAwcHgpYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRTY2FsZSA9IHNjYWxlIC0gKHNjYWxlIC0gMSkgKiAoMSAtIE1hdGguYWJzKHByb2dyZXNzKSk7XG4gICAgICAkZWwudHJhbnNmb3JtKGB0cmFuc2xhdGUzZCgke3h9LCAke3l9LCAwcHgpIHNjYWxlKCR7Y3VycmVudFNjYWxlfSlgKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2V0VHJhbnNsYXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgICRlbCxcbiAgICAgIHNsaWRlcyxcbiAgICAgIHByb2dyZXNzLFxuICAgICAgc25hcEdyaWRcbiAgICB9ID0gc3dpcGVyO1xuICAgICRlbC5jaGlsZHJlbignW2RhdGEtc3dpcGVyLXBhcmFsbGF4XSwgW2RhdGEtc3dpcGVyLXBhcmFsbGF4LXhdLCBbZGF0YS1zd2lwZXItcGFyYWxsYXgteV0sIFtkYXRhLXN3aXBlci1wYXJhbGxheC1vcGFjaXR5XSwgW2RhdGEtc3dpcGVyLXBhcmFsbGF4LXNjYWxlXScpLmVhY2goZWwgPT4ge1xuICAgICAgc2V0VHJhbnNmb3JtKGVsLCBwcm9ncmVzcyk7XG4gICAgfSk7XG4gICAgc2xpZGVzLmVhY2goKHNsaWRlRWwsIHNsaWRlSW5kZXgpID0+IHtcbiAgICAgIGxldCBzbGlkZVByb2dyZXNzID0gc2xpZGVFbC5wcm9ncmVzcztcblxuICAgICAgaWYgKHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyR3JvdXAgPiAxICYmIHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyVmlldyAhPT0gJ2F1dG8nKSB7XG4gICAgICAgIHNsaWRlUHJvZ3Jlc3MgKz0gTWF0aC5jZWlsKHNsaWRlSW5kZXggLyAyKSAtIHByb2dyZXNzICogKHNuYXBHcmlkLmxlbmd0aCAtIDEpO1xuICAgICAgfVxuXG4gICAgICBzbGlkZVByb2dyZXNzID0gTWF0aC5taW4oTWF0aC5tYXgoc2xpZGVQcm9ncmVzcywgLTEpLCAxKTtcbiAgICAgICQoc2xpZGVFbCkuZmluZCgnW2RhdGEtc3dpcGVyLXBhcmFsbGF4XSwgW2RhdGEtc3dpcGVyLXBhcmFsbGF4LXhdLCBbZGF0YS1zd2lwZXItcGFyYWxsYXgteV0sIFtkYXRhLXN3aXBlci1wYXJhbGxheC1vcGFjaXR5XSwgW2RhdGEtc3dpcGVyLXBhcmFsbGF4LXNjYWxlXScpLmVhY2goZWwgPT4ge1xuICAgICAgICBzZXRUcmFuc2Zvcm0oZWwsIHNsaWRlUHJvZ3Jlc3MpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgc2V0VHJhbnNpdGlvbiA9IChkdXJhdGlvbiA9IHN3aXBlci5wYXJhbXMuc3BlZWQpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICAkZWxcbiAgICB9ID0gc3dpcGVyO1xuICAgICRlbC5maW5kKCdbZGF0YS1zd2lwZXItcGFyYWxsYXhdLCBbZGF0YS1zd2lwZXItcGFyYWxsYXgteF0sIFtkYXRhLXN3aXBlci1wYXJhbGxheC15XSwgW2RhdGEtc3dpcGVyLXBhcmFsbGF4LW9wYWNpdHldLCBbZGF0YS1zd2lwZXItcGFyYWxsYXgtc2NhbGVdJykuZWFjaChwYXJhbGxheEVsID0+IHtcbiAgICAgIGNvbnN0ICRwYXJhbGxheEVsID0gJChwYXJhbGxheEVsKTtcbiAgICAgIGxldCBwYXJhbGxheER1cmF0aW9uID0gcGFyc2VJbnQoJHBhcmFsbGF4RWwuYXR0cignZGF0YS1zd2lwZXItcGFyYWxsYXgtZHVyYXRpb24nKSwgMTApIHx8IGR1cmF0aW9uO1xuICAgICAgaWYgKGR1cmF0aW9uID09PSAwKSBwYXJhbGxheER1cmF0aW9uID0gMDtcbiAgICAgICRwYXJhbGxheEVsLnRyYW5zaXRpb24ocGFyYWxsYXhEdXJhdGlvbik7XG4gICAgfSk7XG4gIH07XG5cbiAgb24oJ2JlZm9yZUluaXQnLCAoKSA9PiB7XG4gICAgaWYgKCFzd2lwZXIucGFyYW1zLnBhcmFsbGF4LmVuYWJsZWQpIHJldHVybjtcbiAgICBzd2lwZXIucGFyYW1zLndhdGNoU2xpZGVzUHJvZ3Jlc3MgPSB0cnVlO1xuICAgIHN3aXBlci5vcmlnaW5hbFBhcmFtcy53YXRjaFNsaWRlc1Byb2dyZXNzID0gdHJ1ZTtcbiAgfSk7XG4gIG9uKCdpbml0JywgKCkgPT4ge1xuICAgIGlmICghc3dpcGVyLnBhcmFtcy5wYXJhbGxheC5lbmFibGVkKSByZXR1cm47XG4gICAgc2V0VHJhbnNsYXRlKCk7XG4gIH0pO1xuICBvbignc2V0VHJhbnNsYXRlJywgKCkgPT4ge1xuICAgIGlmICghc3dpcGVyLnBhcmFtcy5wYXJhbGxheC5lbmFibGVkKSByZXR1cm47XG4gICAgc2V0VHJhbnNsYXRlKCk7XG4gIH0pO1xuICBvbignc2V0VHJhbnNpdGlvbicsIChfc3dpcGVyLCBkdXJhdGlvbikgPT4ge1xuICAgIGlmICghc3dpcGVyLnBhcmFtcy5wYXJhbGxheC5lbmFibGVkKSByZXR1cm47XG4gICAgc2V0VHJhbnNpdGlvbihkdXJhdGlvbik7XG4gIH0pO1xufSIsImltcG9ydCB7IGdldERvY3VtZW50IH0gZnJvbSAnc3NyLXdpbmRvdyc7XG5pbXBvcnQgJCBmcm9tICcuLi8uLi9zaGFyZWQvZG9tLmpzJztcbmltcG9ydCB7IG5leHRUaWNrIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3V0aWxzLmpzJztcbmltcG9ydCBjcmVhdGVFbGVtZW50SWZOb3REZWZpbmVkIGZyb20gJy4uLy4uL3NoYXJlZC9jcmVhdGUtZWxlbWVudC1pZi1ub3QtZGVmaW5lZC5qcyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTY3JvbGxiYXIoe1xuICBzd2lwZXIsXG4gIGV4dGVuZFBhcmFtcyxcbiAgb24sXG4gIGVtaXRcbn0pIHtcbiAgY29uc3QgZG9jdW1lbnQgPSBnZXREb2N1bWVudCgpO1xuICBsZXQgaXNUb3VjaGVkID0gZmFsc2U7XG4gIGxldCB0aW1lb3V0ID0gbnVsbDtcbiAgbGV0IGRyYWdUaW1lb3V0ID0gbnVsbDtcbiAgbGV0IGRyYWdTdGFydFBvcztcbiAgbGV0IGRyYWdTaXplO1xuICBsZXQgdHJhY2tTaXplO1xuICBsZXQgZGl2aWRlcjtcbiAgZXh0ZW5kUGFyYW1zKHtcbiAgICBzY3JvbGxiYXI6IHtcbiAgICAgIGVsOiBudWxsLFxuICAgICAgZHJhZ1NpemU6ICdhdXRvJyxcbiAgICAgIGhpZGU6IGZhbHNlLFxuICAgICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICAgIHNuYXBPblJlbGVhc2U6IHRydWUsXG4gICAgICBsb2NrQ2xhc3M6ICdzd2lwZXItc2Nyb2xsYmFyLWxvY2snLFxuICAgICAgZHJhZ0NsYXNzOiAnc3dpcGVyLXNjcm9sbGJhci1kcmFnJ1xuICAgIH1cbiAgfSk7XG4gIHN3aXBlci5zY3JvbGxiYXIgPSB7XG4gICAgZWw6IG51bGwsXG4gICAgZHJhZ0VsOiBudWxsLFxuICAgICRlbDogbnVsbCxcbiAgICAkZHJhZ0VsOiBudWxsXG4gIH07XG5cbiAgZnVuY3Rpb24gc2V0VHJhbnNsYXRlKCkge1xuICAgIGlmICghc3dpcGVyLnBhcmFtcy5zY3JvbGxiYXIuZWwgfHwgIXN3aXBlci5zY3JvbGxiYXIuZWwpIHJldHVybjtcbiAgICBjb25zdCB7XG4gICAgICBzY3JvbGxiYXIsXG4gICAgICBydGxUcmFuc2xhdGU6IHJ0bCxcbiAgICAgIHByb2dyZXNzXG4gICAgfSA9IHN3aXBlcjtcbiAgICBjb25zdCB7XG4gICAgICAkZHJhZ0VsLFxuICAgICAgJGVsXG4gICAgfSA9IHNjcm9sbGJhcjtcbiAgICBjb25zdCBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLnNjcm9sbGJhcjtcbiAgICBsZXQgbmV3U2l6ZSA9IGRyYWdTaXplO1xuICAgIGxldCBuZXdQb3MgPSAodHJhY2tTaXplIC0gZHJhZ1NpemUpICogcHJvZ3Jlc3M7XG5cbiAgICBpZiAocnRsKSB7XG4gICAgICBuZXdQb3MgPSAtbmV3UG9zO1xuXG4gICAgICBpZiAobmV3UG9zID4gMCkge1xuICAgICAgICBuZXdTaXplID0gZHJhZ1NpemUgLSBuZXdQb3M7XG4gICAgICAgIG5ld1BvcyA9IDA7XG4gICAgICB9IGVsc2UgaWYgKC1uZXdQb3MgKyBkcmFnU2l6ZSA+IHRyYWNrU2l6ZSkge1xuICAgICAgICBuZXdTaXplID0gdHJhY2tTaXplICsgbmV3UG9zO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobmV3UG9zIDwgMCkge1xuICAgICAgbmV3U2l6ZSA9IGRyYWdTaXplICsgbmV3UG9zO1xuICAgICAgbmV3UG9zID0gMDtcbiAgICB9IGVsc2UgaWYgKG5ld1BvcyArIGRyYWdTaXplID4gdHJhY2tTaXplKSB7XG4gICAgICBuZXdTaXplID0gdHJhY2tTaXplIC0gbmV3UG9zO1xuICAgIH1cblxuICAgIGlmIChzd2lwZXIuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgICRkcmFnRWwudHJhbnNmb3JtKGB0cmFuc2xhdGUzZCgke25ld1Bvc31weCwgMCwgMClgKTtcbiAgICAgICRkcmFnRWxbMF0uc3R5bGUud2lkdGggPSBgJHtuZXdTaXplfXB4YDtcbiAgICB9IGVsc2Uge1xuICAgICAgJGRyYWdFbC50cmFuc2Zvcm0oYHRyYW5zbGF0ZTNkKDBweCwgJHtuZXdQb3N9cHgsIDApYCk7XG4gICAgICAkZHJhZ0VsWzBdLnN0eWxlLmhlaWdodCA9IGAke25ld1NpemV9cHhgO1xuICAgIH1cblxuICAgIGlmIChwYXJhbXMuaGlkZSkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgJGVsWzBdLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAkZWxbMF0uc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgICRlbC50cmFuc2l0aW9uKDQwMCk7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZXRUcmFuc2l0aW9uKGR1cmF0aW9uKSB7XG4gICAgaWYgKCFzd2lwZXIucGFyYW1zLnNjcm9sbGJhci5lbCB8fCAhc3dpcGVyLnNjcm9sbGJhci5lbCkgcmV0dXJuO1xuICAgIHN3aXBlci5zY3JvbGxiYXIuJGRyYWdFbC50cmFuc2l0aW9uKGR1cmF0aW9uKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVNpemUoKSB7XG4gICAgaWYgKCFzd2lwZXIucGFyYW1zLnNjcm9sbGJhci5lbCB8fCAhc3dpcGVyLnNjcm9sbGJhci5lbCkgcmV0dXJuO1xuICAgIGNvbnN0IHtcbiAgICAgIHNjcm9sbGJhclxuICAgIH0gPSBzd2lwZXI7XG4gICAgY29uc3Qge1xuICAgICAgJGRyYWdFbCxcbiAgICAgICRlbFxuICAgIH0gPSBzY3JvbGxiYXI7XG4gICAgJGRyYWdFbFswXS5zdHlsZS53aWR0aCA9ICcnO1xuICAgICRkcmFnRWxbMF0uc3R5bGUuaGVpZ2h0ID0gJyc7XG4gICAgdHJhY2tTaXplID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gJGVsWzBdLm9mZnNldFdpZHRoIDogJGVsWzBdLm9mZnNldEhlaWdodDtcbiAgICBkaXZpZGVyID0gc3dpcGVyLnNpemUgLyAoc3dpcGVyLnZpcnR1YWxTaXplICsgc3dpcGVyLnBhcmFtcy5zbGlkZXNPZmZzZXRCZWZvcmUgLSAoc3dpcGVyLnBhcmFtcy5jZW50ZXJlZFNsaWRlcyA/IHN3aXBlci5zbmFwR3JpZFswXSA6IDApKTtcblxuICAgIGlmIChzd2lwZXIucGFyYW1zLnNjcm9sbGJhci5kcmFnU2l6ZSA9PT0gJ2F1dG8nKSB7XG4gICAgICBkcmFnU2l6ZSA9IHRyYWNrU2l6ZSAqIGRpdmlkZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRyYWdTaXplID0gcGFyc2VJbnQoc3dpcGVyLnBhcmFtcy5zY3JvbGxiYXIuZHJhZ1NpemUsIDEwKTtcbiAgICB9XG5cbiAgICBpZiAoc3dpcGVyLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICAkZHJhZ0VsWzBdLnN0eWxlLndpZHRoID0gYCR7ZHJhZ1NpemV9cHhgO1xuICAgIH0gZWxzZSB7XG4gICAgICAkZHJhZ0VsWzBdLnN0eWxlLmhlaWdodCA9IGAke2RyYWdTaXplfXB4YDtcbiAgICB9XG5cbiAgICBpZiAoZGl2aWRlciA+PSAxKSB7XG4gICAgICAkZWxbMF0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9IGVsc2Uge1xuICAgICAgJGVsWzBdLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICB9XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5zY3JvbGxiYXIuaGlkZSkge1xuICAgICAgJGVsWzBdLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgIH1cblxuICAgIGlmIChzd2lwZXIucGFyYW1zLndhdGNoT3ZlcmZsb3cgJiYgc3dpcGVyLmVuYWJsZWQpIHtcbiAgICAgIHNjcm9sbGJhci4kZWxbc3dpcGVyLmlzTG9ja2VkID8gJ2FkZENsYXNzJyA6ICdyZW1vdmVDbGFzcyddKHN3aXBlci5wYXJhbXMuc2Nyb2xsYmFyLmxvY2tDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UG9pbnRlclBvc2l0aW9uKGUpIHtcbiAgICBpZiAoc3dpcGVyLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICByZXR1cm4gZS50eXBlID09PSAndG91Y2hzdGFydCcgfHwgZS50eXBlID09PSAndG91Y2htb3ZlJyA/IGUudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRYIDogZS5jbGllbnRYO1xuICAgIH1cblxuICAgIHJldHVybiBlLnR5cGUgPT09ICd0b3VjaHN0YXJ0JyB8fCBlLnR5cGUgPT09ICd0b3VjaG1vdmUnID8gZS50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFkgOiBlLmNsaWVudFk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXREcmFnUG9zaXRpb24oZSkge1xuICAgIGNvbnN0IHtcbiAgICAgIHNjcm9sbGJhcixcbiAgICAgIHJ0bFRyYW5zbGF0ZTogcnRsXG4gICAgfSA9IHN3aXBlcjtcbiAgICBjb25zdCB7XG4gICAgICAkZWxcbiAgICB9ID0gc2Nyb2xsYmFyO1xuICAgIGxldCBwb3NpdGlvblJhdGlvO1xuICAgIHBvc2l0aW9uUmF0aW8gPSAoZ2V0UG9pbnRlclBvc2l0aW9uKGUpIC0gJGVsLm9mZnNldCgpW3N3aXBlci5pc0hvcml6b250YWwoKSA/ICdsZWZ0JyA6ICd0b3AnXSAtIChkcmFnU3RhcnRQb3MgIT09IG51bGwgPyBkcmFnU3RhcnRQb3MgOiBkcmFnU2l6ZSAvIDIpKSAvICh0cmFja1NpemUgLSBkcmFnU2l6ZSk7XG4gICAgcG9zaXRpb25SYXRpbyA9IE1hdGgubWF4KE1hdGgubWluKHBvc2l0aW9uUmF0aW8sIDEpLCAwKTtcblxuICAgIGlmIChydGwpIHtcbiAgICAgIHBvc2l0aW9uUmF0aW8gPSAxIC0gcG9zaXRpb25SYXRpbztcbiAgICB9XG5cbiAgICBjb25zdCBwb3NpdGlvbiA9IHN3aXBlci5taW5UcmFuc2xhdGUoKSArIChzd2lwZXIubWF4VHJhbnNsYXRlKCkgLSBzd2lwZXIubWluVHJhbnNsYXRlKCkpICogcG9zaXRpb25SYXRpbztcbiAgICBzd2lwZXIudXBkYXRlUHJvZ3Jlc3MocG9zaXRpb24pO1xuICAgIHN3aXBlci5zZXRUcmFuc2xhdGUocG9zaXRpb24pO1xuICAgIHN3aXBlci51cGRhdGVBY3RpdmVJbmRleCgpO1xuICAgIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG4gIH1cblxuICBmdW5jdGlvbiBvbkRyYWdTdGFydChlKSB7XG4gICAgY29uc3QgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy5zY3JvbGxiYXI7XG4gICAgY29uc3Qge1xuICAgICAgc2Nyb2xsYmFyLFxuICAgICAgJHdyYXBwZXJFbFxuICAgIH0gPSBzd2lwZXI7XG4gICAgY29uc3Qge1xuICAgICAgJGVsLFxuICAgICAgJGRyYWdFbFxuICAgIH0gPSBzY3JvbGxiYXI7XG4gICAgaXNUb3VjaGVkID0gdHJ1ZTtcbiAgICBkcmFnU3RhcnRQb3MgPSBlLnRhcmdldCA9PT0gJGRyYWdFbFswXSB8fCBlLnRhcmdldCA9PT0gJGRyYWdFbCA/IGdldFBvaW50ZXJQb3NpdGlvbihlKSAtIGUudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpW3N3aXBlci5pc0hvcml6b250YWwoKSA/ICdsZWZ0JyA6ICd0b3AnXSA6IG51bGw7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgJHdyYXBwZXJFbC50cmFuc2l0aW9uKDEwMCk7XG4gICAgJGRyYWdFbC50cmFuc2l0aW9uKDEwMCk7XG4gICAgc2V0RHJhZ1Bvc2l0aW9uKGUpO1xuICAgIGNsZWFyVGltZW91dChkcmFnVGltZW91dCk7XG4gICAgJGVsLnRyYW5zaXRpb24oMCk7XG5cbiAgICBpZiAocGFyYW1zLmhpZGUpIHtcbiAgICAgICRlbC5jc3MoJ29wYWNpdHknLCAxKTtcbiAgICB9XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5jc3NNb2RlKSB7XG4gICAgICBzd2lwZXIuJHdyYXBwZXJFbC5jc3MoJ3Njcm9sbC1zbmFwLXR5cGUnLCAnbm9uZScpO1xuICAgIH1cblxuICAgIGVtaXQoJ3Njcm9sbGJhckRyYWdTdGFydCcsIGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25EcmFnTW92ZShlKSB7XG4gICAgY29uc3Qge1xuICAgICAgc2Nyb2xsYmFyLFxuICAgICAgJHdyYXBwZXJFbFxuICAgIH0gPSBzd2lwZXI7XG4gICAgY29uc3Qge1xuICAgICAgJGVsLFxuICAgICAgJGRyYWdFbFxuICAgIH0gPSBzY3JvbGxiYXI7XG4gICAgaWYgKCFpc1RvdWNoZWQpIHJldHVybjtcbiAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkgZS5wcmV2ZW50RGVmYXVsdCgpO2Vsc2UgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgIHNldERyYWdQb3NpdGlvbihlKTtcbiAgICAkd3JhcHBlckVsLnRyYW5zaXRpb24oMCk7XG4gICAgJGVsLnRyYW5zaXRpb24oMCk7XG4gICAgJGRyYWdFbC50cmFuc2l0aW9uKDApO1xuICAgIGVtaXQoJ3Njcm9sbGJhckRyYWdNb3ZlJywgZSk7XG4gIH1cblxuICBmdW5jdGlvbiBvbkRyYWdFbmQoZSkge1xuICAgIGNvbnN0IHBhcmFtcyA9IHN3aXBlci5wYXJhbXMuc2Nyb2xsYmFyO1xuICAgIGNvbnN0IHtcbiAgICAgIHNjcm9sbGJhcixcbiAgICAgICR3cmFwcGVyRWxcbiAgICB9ID0gc3dpcGVyO1xuICAgIGNvbnN0IHtcbiAgICAgICRlbFxuICAgIH0gPSBzY3JvbGxiYXI7XG4gICAgaWYgKCFpc1RvdWNoZWQpIHJldHVybjtcbiAgICBpc1RvdWNoZWQgPSBmYWxzZTtcblxuICAgIGlmIChzd2lwZXIucGFyYW1zLmNzc01vZGUpIHtcbiAgICAgIHN3aXBlci4kd3JhcHBlckVsLmNzcygnc2Nyb2xsLXNuYXAtdHlwZScsICcnKTtcbiAgICAgICR3cmFwcGVyRWwudHJhbnNpdGlvbignJyk7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy5oaWRlKSB7XG4gICAgICBjbGVhclRpbWVvdXQoZHJhZ1RpbWVvdXQpO1xuICAgICAgZHJhZ1RpbWVvdXQgPSBuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICRlbC5jc3MoJ29wYWNpdHknLCAwKTtcbiAgICAgICAgJGVsLnRyYW5zaXRpb24oNDAwKTtcbiAgICAgIH0sIDEwMDApO1xuICAgIH1cblxuICAgIGVtaXQoJ3Njcm9sbGJhckRyYWdFbmQnLCBlKTtcblxuICAgIGlmIChwYXJhbXMuc25hcE9uUmVsZWFzZSkge1xuICAgICAgc3dpcGVyLnNsaWRlVG9DbG9zZXN0KCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZXZlbnRzKG1ldGhvZCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHNjcm9sbGJhcixcbiAgICAgIHRvdWNoRXZlbnRzVG91Y2gsXG4gICAgICB0b3VjaEV2ZW50c0Rlc2t0b3AsXG4gICAgICBwYXJhbXMsXG4gICAgICBzdXBwb3J0XG4gICAgfSA9IHN3aXBlcjtcbiAgICBjb25zdCAkZWwgPSBzY3JvbGxiYXIuJGVsO1xuICAgIGNvbnN0IHRhcmdldCA9ICRlbFswXTtcbiAgICBjb25zdCBhY3RpdmVMaXN0ZW5lciA9IHN1cHBvcnQucGFzc2l2ZUxpc3RlbmVyICYmIHBhcmFtcy5wYXNzaXZlTGlzdGVuZXJzID8ge1xuICAgICAgcGFzc2l2ZTogZmFsc2UsXG4gICAgICBjYXB0dXJlOiBmYWxzZVxuICAgIH0gOiBmYWxzZTtcbiAgICBjb25zdCBwYXNzaXZlTGlzdGVuZXIgPSBzdXBwb3J0LnBhc3NpdmVMaXN0ZW5lciAmJiBwYXJhbXMucGFzc2l2ZUxpc3RlbmVycyA/IHtcbiAgICAgIHBhc3NpdmU6IHRydWUsXG4gICAgICBjYXB0dXJlOiBmYWxzZVxuICAgIH0gOiBmYWxzZTtcbiAgICBpZiAoIXRhcmdldCkgcmV0dXJuO1xuICAgIGNvbnN0IGV2ZW50TWV0aG9kID0gbWV0aG9kID09PSAnb24nID8gJ2FkZEV2ZW50TGlzdGVuZXInIDogJ3JlbW92ZUV2ZW50TGlzdGVuZXInO1xuXG4gICAgaWYgKCFzdXBwb3J0LnRvdWNoKSB7XG4gICAgICB0YXJnZXRbZXZlbnRNZXRob2RdKHRvdWNoRXZlbnRzRGVza3RvcC5zdGFydCwgb25EcmFnU3RhcnQsIGFjdGl2ZUxpc3RlbmVyKTtcbiAgICAgIGRvY3VtZW50W2V2ZW50TWV0aG9kXSh0b3VjaEV2ZW50c0Rlc2t0b3AubW92ZSwgb25EcmFnTW92ZSwgYWN0aXZlTGlzdGVuZXIpO1xuICAgICAgZG9jdW1lbnRbZXZlbnRNZXRob2RdKHRvdWNoRXZlbnRzRGVza3RvcC5lbmQsIG9uRHJhZ0VuZCwgcGFzc2l2ZUxpc3RlbmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFyZ2V0W2V2ZW50TWV0aG9kXSh0b3VjaEV2ZW50c1RvdWNoLnN0YXJ0LCBvbkRyYWdTdGFydCwgYWN0aXZlTGlzdGVuZXIpO1xuICAgICAgdGFyZ2V0W2V2ZW50TWV0aG9kXSh0b3VjaEV2ZW50c1RvdWNoLm1vdmUsIG9uRHJhZ01vdmUsIGFjdGl2ZUxpc3RlbmVyKTtcbiAgICAgIHRhcmdldFtldmVudE1ldGhvZF0odG91Y2hFdmVudHNUb3VjaC5lbmQsIG9uRHJhZ0VuZCwgcGFzc2l2ZUxpc3RlbmVyKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBlbmFibGVEcmFnZ2FibGUoKSB7XG4gICAgaWYgKCFzd2lwZXIucGFyYW1zLnNjcm9sbGJhci5lbCkgcmV0dXJuO1xuICAgIGV2ZW50cygnb24nKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRpc2FibGVEcmFnZ2FibGUoKSB7XG4gICAgaWYgKCFzd2lwZXIucGFyYW1zLnNjcm9sbGJhci5lbCkgcmV0dXJuO1xuICAgIGV2ZW50cygnb2ZmJyk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHNjcm9sbGJhcixcbiAgICAgICRlbDogJHN3aXBlckVsXG4gICAgfSA9IHN3aXBlcjtcbiAgICBzd2lwZXIucGFyYW1zLnNjcm9sbGJhciA9IGNyZWF0ZUVsZW1lbnRJZk5vdERlZmluZWQoc3dpcGVyLCBzd2lwZXIub3JpZ2luYWxQYXJhbXMuc2Nyb2xsYmFyLCBzd2lwZXIucGFyYW1zLnNjcm9sbGJhciwge1xuICAgICAgZWw6ICdzd2lwZXItc2Nyb2xsYmFyJ1xuICAgIH0pO1xuICAgIGNvbnN0IHBhcmFtcyA9IHN3aXBlci5wYXJhbXMuc2Nyb2xsYmFyO1xuICAgIGlmICghcGFyYW1zLmVsKSByZXR1cm47XG4gICAgbGV0ICRlbCA9ICQocGFyYW1zLmVsKTtcblxuICAgIGlmIChzd2lwZXIucGFyYW1zLnVuaXF1ZU5hdkVsZW1lbnRzICYmIHR5cGVvZiBwYXJhbXMuZWwgPT09ICdzdHJpbmcnICYmICRlbC5sZW5ndGggPiAxICYmICRzd2lwZXJFbC5maW5kKHBhcmFtcy5lbCkubGVuZ3RoID09PSAxKSB7XG4gICAgICAkZWwgPSAkc3dpcGVyRWwuZmluZChwYXJhbXMuZWwpO1xuICAgIH1cblxuICAgIGxldCAkZHJhZ0VsID0gJGVsLmZpbmQoYC4ke3N3aXBlci5wYXJhbXMuc2Nyb2xsYmFyLmRyYWdDbGFzc31gKTtcblxuICAgIGlmICgkZHJhZ0VsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgJGRyYWdFbCA9ICQoYDxkaXYgY2xhc3M9XCIke3N3aXBlci5wYXJhbXMuc2Nyb2xsYmFyLmRyYWdDbGFzc31cIj48L2Rpdj5gKTtcbiAgICAgICRlbC5hcHBlbmQoJGRyYWdFbCk7XG4gICAgfVxuXG4gICAgT2JqZWN0LmFzc2lnbihzY3JvbGxiYXIsIHtcbiAgICAgICRlbCxcbiAgICAgIGVsOiAkZWxbMF0sXG4gICAgICAkZHJhZ0VsLFxuICAgICAgZHJhZ0VsOiAkZHJhZ0VsWzBdXG4gICAgfSk7XG5cbiAgICBpZiAocGFyYW1zLmRyYWdnYWJsZSkge1xuICAgICAgZW5hYmxlRHJhZ2dhYmxlKCk7XG4gICAgfVxuXG4gICAgaWYgKCRlbCkge1xuICAgICAgJGVsW3N3aXBlci5lbmFibGVkID8gJ3JlbW92ZUNsYXNzJyA6ICdhZGRDbGFzcyddKHN3aXBlci5wYXJhbXMuc2Nyb2xsYmFyLmxvY2tDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICBkaXNhYmxlRHJhZ2dhYmxlKCk7XG4gIH1cblxuICBvbignaW5pdCcsICgpID0+IHtcbiAgICBpbml0KCk7XG4gICAgdXBkYXRlU2l6ZSgpO1xuICAgIHNldFRyYW5zbGF0ZSgpO1xuICB9KTtcbiAgb24oJ3VwZGF0ZSByZXNpemUgb2JzZXJ2ZXJVcGRhdGUgbG9jayB1bmxvY2snLCAoKSA9PiB7XG4gICAgdXBkYXRlU2l6ZSgpO1xuICB9KTtcbiAgb24oJ3NldFRyYW5zbGF0ZScsICgpID0+IHtcbiAgICBzZXRUcmFuc2xhdGUoKTtcbiAgfSk7XG4gIG9uKCdzZXRUcmFuc2l0aW9uJywgKF9zLCBkdXJhdGlvbikgPT4ge1xuICAgIHNldFRyYW5zaXRpb24oZHVyYXRpb24pO1xuICB9KTtcbiAgb24oJ2VuYWJsZSBkaXNhYmxlJywgKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgICRlbFxuICAgIH0gPSBzd2lwZXIuc2Nyb2xsYmFyO1xuXG4gICAgaWYgKCRlbCkge1xuICAgICAgJGVsW3N3aXBlci5lbmFibGVkID8gJ3JlbW92ZUNsYXNzJyA6ICdhZGRDbGFzcyddKHN3aXBlci5wYXJhbXMuc2Nyb2xsYmFyLmxvY2tDbGFzcyk7XG4gICAgfVxuICB9KTtcbiAgb24oJ2Rlc3Ryb3knLCAoKSA9PiB7XG4gICAgZGVzdHJveSgpO1xuICB9KTtcbiAgT2JqZWN0LmFzc2lnbihzd2lwZXIuc2Nyb2xsYmFyLCB7XG4gICAgdXBkYXRlU2l6ZSxcbiAgICBzZXRUcmFuc2xhdGUsXG4gICAgaW5pdCxcbiAgICBkZXN0cm95XG4gIH0pO1xufSIsImltcG9ydCB7IGlzT2JqZWN0IH0gZnJvbSAnLi4vLi4vc2hhcmVkL3V0aWxzLmpzJztcbmltcG9ydCAkIGZyb20gJy4uLy4uL3NoYXJlZC9kb20uanMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGh1bWIoe1xuICBzd2lwZXIsXG4gIGV4dGVuZFBhcmFtcyxcbiAgb25cbn0pIHtcbiAgZXh0ZW5kUGFyYW1zKHtcbiAgICB0aHVtYnM6IHtcbiAgICAgIHN3aXBlcjogbnVsbCxcbiAgICAgIG11bHRpcGxlQWN0aXZlVGh1bWJzOiB0cnVlLFxuICAgICAgYXV0b1Njcm9sbE9mZnNldDogMCxcbiAgICAgIHNsaWRlVGh1bWJBY3RpdmVDbGFzczogJ3N3aXBlci1zbGlkZS10aHVtYi1hY3RpdmUnLFxuICAgICAgdGh1bWJzQ29udGFpbmVyQ2xhc3M6ICdzd2lwZXItdGh1bWJzJ1xuICAgIH1cbiAgfSk7XG4gIGxldCBpbml0aWFsaXplZCA9IGZhbHNlO1xuICBsZXQgc3dpcGVyQ3JlYXRlZCA9IGZhbHNlO1xuICBzd2lwZXIudGh1bWJzID0ge1xuICAgIHN3aXBlcjogbnVsbFxuICB9O1xuXG4gIGZ1bmN0aW9uIG9uVGh1bWJDbGljaygpIHtcbiAgICBjb25zdCB0aHVtYnNTd2lwZXIgPSBzd2lwZXIudGh1bWJzLnN3aXBlcjtcbiAgICBpZiAoIXRodW1ic1N3aXBlcikgcmV0dXJuO1xuICAgIGNvbnN0IGNsaWNrZWRJbmRleCA9IHRodW1ic1N3aXBlci5jbGlja2VkSW5kZXg7XG4gICAgY29uc3QgY2xpY2tlZFNsaWRlID0gdGh1bWJzU3dpcGVyLmNsaWNrZWRTbGlkZTtcbiAgICBpZiAoY2xpY2tlZFNsaWRlICYmICQoY2xpY2tlZFNsaWRlKS5oYXNDbGFzcyhzd2lwZXIucGFyYW1zLnRodW1icy5zbGlkZVRodW1iQWN0aXZlQ2xhc3MpKSByZXR1cm47XG4gICAgaWYgKHR5cGVvZiBjbGlja2VkSW5kZXggPT09ICd1bmRlZmluZWQnIHx8IGNsaWNrZWRJbmRleCA9PT0gbnVsbCkgcmV0dXJuO1xuICAgIGxldCBzbGlkZVRvSW5kZXg7XG5cbiAgICBpZiAodGh1bWJzU3dpcGVyLnBhcmFtcy5sb29wKSB7XG4gICAgICBzbGlkZVRvSW5kZXggPSBwYXJzZUludCgkKHRodW1ic1N3aXBlci5jbGlja2VkU2xpZGUpLmF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JyksIDEwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2xpZGVUb0luZGV4ID0gY2xpY2tlZEluZGV4O1xuICAgIH1cblxuICAgIGlmIChzd2lwZXIucGFyYW1zLmxvb3ApIHtcbiAgICAgIGxldCBjdXJyZW50SW5kZXggPSBzd2lwZXIuYWN0aXZlSW5kZXg7XG5cbiAgICAgIGlmIChzd2lwZXIuc2xpZGVzLmVxKGN1cnJlbnRJbmRleCkuaGFzQ2xhc3Moc3dpcGVyLnBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSkge1xuICAgICAgICBzd2lwZXIubG9vcEZpeCgpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcblxuICAgICAgICBzd2lwZXIuX2NsaWVudExlZnQgPSBzd2lwZXIuJHdyYXBwZXJFbFswXS5jbGllbnRMZWZ0O1xuICAgICAgICBjdXJyZW50SW5kZXggPSBzd2lwZXIuYWN0aXZlSW5kZXg7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByZXZJbmRleCA9IHN3aXBlci5zbGlkZXMuZXEoY3VycmVudEluZGV4KS5wcmV2QWxsKGBbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XCIke3NsaWRlVG9JbmRleH1cIl1gKS5lcSgwKS5pbmRleCgpO1xuICAgICAgY29uc3QgbmV4dEluZGV4ID0gc3dpcGVyLnNsaWRlcy5lcShjdXJyZW50SW5kZXgpLm5leHRBbGwoYFtkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIiR7c2xpZGVUb0luZGV4fVwiXWApLmVxKDApLmluZGV4KCk7XG4gICAgICBpZiAodHlwZW9mIHByZXZJbmRleCA9PT0gJ3VuZGVmaW5lZCcpIHNsaWRlVG9JbmRleCA9IG5leHRJbmRleDtlbHNlIGlmICh0eXBlb2YgbmV4dEluZGV4ID09PSAndW5kZWZpbmVkJykgc2xpZGVUb0luZGV4ID0gcHJldkluZGV4O2Vsc2UgaWYgKG5leHRJbmRleCAtIGN1cnJlbnRJbmRleCA8IGN1cnJlbnRJbmRleCAtIHByZXZJbmRleCkgc2xpZGVUb0luZGV4ID0gbmV4dEluZGV4O2Vsc2Ugc2xpZGVUb0luZGV4ID0gcHJldkluZGV4O1xuICAgIH1cblxuICAgIHN3aXBlci5zbGlkZVRvKHNsaWRlVG9JbmRleCk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRodW1iczogdGh1bWJzUGFyYW1zXG4gICAgfSA9IHN3aXBlci5wYXJhbXM7XG4gICAgaWYgKGluaXRpYWxpemVkKSByZXR1cm4gZmFsc2U7XG4gICAgaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIGNvbnN0IFN3aXBlckNsYXNzID0gc3dpcGVyLmNvbnN0cnVjdG9yO1xuXG4gICAgaWYgKHRodW1ic1BhcmFtcy5zd2lwZXIgaW5zdGFuY2VvZiBTd2lwZXJDbGFzcykge1xuICAgICAgc3dpcGVyLnRodW1icy5zd2lwZXIgPSB0aHVtYnNQYXJhbXMuc3dpcGVyO1xuICAgICAgT2JqZWN0LmFzc2lnbihzd2lwZXIudGh1bWJzLnN3aXBlci5vcmlnaW5hbFBhcmFtcywge1xuICAgICAgICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxuICAgICAgICBzbGlkZVRvQ2xpY2tlZFNsaWRlOiBmYWxzZVxuICAgICAgfSk7XG4gICAgICBPYmplY3QuYXNzaWduKHN3aXBlci50aHVtYnMuc3dpcGVyLnBhcmFtcywge1xuICAgICAgICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxuICAgICAgICBzbGlkZVRvQ2xpY2tlZFNsaWRlOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChpc09iamVjdCh0aHVtYnNQYXJhbXMuc3dpcGVyKSkge1xuICAgICAgY29uc3QgdGh1bWJzU3dpcGVyUGFyYW1zID0gT2JqZWN0LmFzc2lnbih7fSwgdGh1bWJzUGFyYW1zLnN3aXBlcik7XG4gICAgICBPYmplY3QuYXNzaWduKHRodW1ic1N3aXBlclBhcmFtcywge1xuICAgICAgICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxuICAgICAgICBzbGlkZVRvQ2xpY2tlZFNsaWRlOiBmYWxzZVxuICAgICAgfSk7XG4gICAgICBzd2lwZXIudGh1bWJzLnN3aXBlciA9IG5ldyBTd2lwZXJDbGFzcyh0aHVtYnNTd2lwZXJQYXJhbXMpO1xuICAgICAgc3dpcGVyQ3JlYXRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgc3dpcGVyLnRodW1icy5zd2lwZXIuJGVsLmFkZENsYXNzKHN3aXBlci5wYXJhbXMudGh1bWJzLnRodW1ic0NvbnRhaW5lckNsYXNzKTtcbiAgICBzd2lwZXIudGh1bWJzLnN3aXBlci5vbigndGFwJywgb25UaHVtYkNsaWNrKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZShpbml0aWFsKSB7XG4gICAgY29uc3QgdGh1bWJzU3dpcGVyID0gc3dpcGVyLnRodW1icy5zd2lwZXI7XG4gICAgaWYgKCF0aHVtYnNTd2lwZXIpIHJldHVybjtcbiAgICBjb25zdCBzbGlkZXNQZXJWaWV3ID0gdGh1bWJzU3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJWaWV3ID09PSAnYXV0bycgPyB0aHVtYnNTd2lwZXIuc2xpZGVzUGVyVmlld0R5bmFtaWMoKSA6IHRodW1ic1N3aXBlci5wYXJhbXMuc2xpZGVzUGVyVmlldztcbiAgICBjb25zdCBhdXRvU2Nyb2xsT2Zmc2V0ID0gc3dpcGVyLnBhcmFtcy50aHVtYnMuYXV0b1Njcm9sbE9mZnNldDtcbiAgICBjb25zdCB1c2VPZmZzZXQgPSBhdXRvU2Nyb2xsT2Zmc2V0ICYmICF0aHVtYnNTd2lwZXIucGFyYW1zLmxvb3A7XG5cbiAgICBpZiAoc3dpcGVyLnJlYWxJbmRleCAhPT0gdGh1bWJzU3dpcGVyLnJlYWxJbmRleCB8fCB1c2VPZmZzZXQpIHtcbiAgICAgIGxldCBjdXJyZW50VGh1bWJzSW5kZXggPSB0aHVtYnNTd2lwZXIuYWN0aXZlSW5kZXg7XG4gICAgICBsZXQgbmV3VGh1bWJzSW5kZXg7XG4gICAgICBsZXQgZGlyZWN0aW9uO1xuXG4gICAgICBpZiAodGh1bWJzU3dpcGVyLnBhcmFtcy5sb29wKSB7XG4gICAgICAgIGlmICh0aHVtYnNTd2lwZXIuc2xpZGVzLmVxKGN1cnJlbnRUaHVtYnNJbmRleCkuaGFzQ2xhc3ModGh1bWJzU3dpcGVyLnBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSkge1xuICAgICAgICAgIHRodW1ic1N3aXBlci5sb29wRml4KCk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXG4gICAgICAgICAgdGh1bWJzU3dpcGVyLl9jbGllbnRMZWZ0ID0gdGh1bWJzU3dpcGVyLiR3cmFwcGVyRWxbMF0uY2xpZW50TGVmdDtcbiAgICAgICAgICBjdXJyZW50VGh1bWJzSW5kZXggPSB0aHVtYnNTd2lwZXIuYWN0aXZlSW5kZXg7XG4gICAgICAgIH0gLy8gRmluZCBhY3R1YWwgdGh1bWJzIGluZGV4IHRvIHNsaWRlIHRvXG5cblxuICAgICAgICBjb25zdCBwcmV2VGh1bWJzSW5kZXggPSB0aHVtYnNTd2lwZXIuc2xpZGVzLmVxKGN1cnJlbnRUaHVtYnNJbmRleCkucHJldkFsbChgW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJHtzd2lwZXIucmVhbEluZGV4fVwiXWApLmVxKDApLmluZGV4KCk7XG4gICAgICAgIGNvbnN0IG5leHRUaHVtYnNJbmRleCA9IHRodW1ic1N3aXBlci5zbGlkZXMuZXEoY3VycmVudFRodW1ic0luZGV4KS5uZXh0QWxsKGBbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XCIke3N3aXBlci5yZWFsSW5kZXh9XCJdYCkuZXEoMCkuaW5kZXgoKTtcblxuICAgICAgICBpZiAodHlwZW9mIHByZXZUaHVtYnNJbmRleCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBuZXdUaHVtYnNJbmRleCA9IG5leHRUaHVtYnNJbmRleDtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbmV4dFRodW1ic0luZGV4ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIG5ld1RodW1ic0luZGV4ID0gcHJldlRodW1ic0luZGV4O1xuICAgICAgICB9IGVsc2UgaWYgKG5leHRUaHVtYnNJbmRleCAtIGN1cnJlbnRUaHVtYnNJbmRleCA9PT0gY3VycmVudFRodW1ic0luZGV4IC0gcHJldlRodW1ic0luZGV4KSB7XG4gICAgICAgICAgbmV3VGh1bWJzSW5kZXggPSB0aHVtYnNTd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwID4gMSA/IG5leHRUaHVtYnNJbmRleCA6IGN1cnJlbnRUaHVtYnNJbmRleDtcbiAgICAgICAgfSBlbHNlIGlmIChuZXh0VGh1bWJzSW5kZXggLSBjdXJyZW50VGh1bWJzSW5kZXggPCBjdXJyZW50VGh1bWJzSW5kZXggLSBwcmV2VGh1bWJzSW5kZXgpIHtcbiAgICAgICAgICBuZXdUaHVtYnNJbmRleCA9IG5leHRUaHVtYnNJbmRleDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdUaHVtYnNJbmRleCA9IHByZXZUaHVtYnNJbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpcmVjdGlvbiA9IHN3aXBlci5hY3RpdmVJbmRleCA+IHN3aXBlci5wcmV2aW91c0luZGV4ID8gJ25leHQnIDogJ3ByZXYnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3VGh1bWJzSW5kZXggPSBzd2lwZXIucmVhbEluZGV4O1xuICAgICAgICBkaXJlY3Rpb24gPSBuZXdUaHVtYnNJbmRleCA+IHN3aXBlci5wcmV2aW91c0luZGV4ID8gJ25leHQnIDogJ3ByZXYnO1xuICAgICAgfVxuXG4gICAgICBpZiAodXNlT2Zmc2V0KSB7XG4gICAgICAgIG5ld1RodW1ic0luZGV4ICs9IGRpcmVjdGlvbiA9PT0gJ25leHQnID8gYXV0b1Njcm9sbE9mZnNldCA6IC0xICogYXV0b1Njcm9sbE9mZnNldDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRodW1ic1N3aXBlci52aXNpYmxlU2xpZGVzSW5kZXhlcyAmJiB0aHVtYnNTd2lwZXIudmlzaWJsZVNsaWRlc0luZGV4ZXMuaW5kZXhPZihuZXdUaHVtYnNJbmRleCkgPCAwKSB7XG4gICAgICAgIGlmICh0aHVtYnNTd2lwZXIucGFyYW1zLmNlbnRlcmVkU2xpZGVzKSB7XG4gICAgICAgICAgaWYgKG5ld1RodW1ic0luZGV4ID4gY3VycmVudFRodW1ic0luZGV4KSB7XG4gICAgICAgICAgICBuZXdUaHVtYnNJbmRleCA9IG5ld1RodW1ic0luZGV4IC0gTWF0aC5mbG9vcihzbGlkZXNQZXJWaWV3IC8gMikgKyAxO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXdUaHVtYnNJbmRleCA9IG5ld1RodW1ic0luZGV4ICsgTWF0aC5mbG9vcihzbGlkZXNQZXJWaWV3IC8gMikgLSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChuZXdUaHVtYnNJbmRleCA+IGN1cnJlbnRUaHVtYnNJbmRleCAmJiB0aHVtYnNTd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwID09PSAxKSB7Ly8gbmV3VGh1bWJzSW5kZXggPSBuZXdUaHVtYnNJbmRleCAtIHNsaWRlc1BlclZpZXcgKyAxO1xuICAgICAgICB9XG5cbiAgICAgICAgdGh1bWJzU3dpcGVyLnNsaWRlVG8obmV3VGh1bWJzSW5kZXgsIGluaXRpYWwgPyAwIDogdW5kZWZpbmVkKTtcbiAgICAgIH1cbiAgICB9IC8vIEFjdGl2YXRlIHRodW1ic1xuXG5cbiAgICBsZXQgdGh1bWJzVG9BY3RpdmF0ZSA9IDE7XG4gICAgY29uc3QgdGh1bWJBY3RpdmVDbGFzcyA9IHN3aXBlci5wYXJhbXMudGh1bWJzLnNsaWRlVGh1bWJBY3RpdmVDbGFzcztcblxuICAgIGlmIChzd2lwZXIucGFyYW1zLnNsaWRlc1BlclZpZXcgPiAxICYmICFzd2lwZXIucGFyYW1zLmNlbnRlcmVkU2xpZGVzKSB7XG4gICAgICB0aHVtYnNUb0FjdGl2YXRlID0gc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJWaWV3O1xuICAgIH1cblxuICAgIGlmICghc3dpcGVyLnBhcmFtcy50aHVtYnMubXVsdGlwbGVBY3RpdmVUaHVtYnMpIHtcbiAgICAgIHRodW1ic1RvQWN0aXZhdGUgPSAxO1xuICAgIH1cblxuICAgIHRodW1ic1RvQWN0aXZhdGUgPSBNYXRoLmZsb29yKHRodW1ic1RvQWN0aXZhdGUpO1xuICAgIHRodW1ic1N3aXBlci5zbGlkZXMucmVtb3ZlQ2xhc3ModGh1bWJBY3RpdmVDbGFzcyk7XG5cbiAgICBpZiAodGh1bWJzU3dpcGVyLnBhcmFtcy5sb29wIHx8IHRodW1ic1N3aXBlci5wYXJhbXMudmlydHVhbCAmJiB0aHVtYnNTd2lwZXIucGFyYW1zLnZpcnR1YWwuZW5hYmxlZCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aHVtYnNUb0FjdGl2YXRlOyBpICs9IDEpIHtcbiAgICAgICAgdGh1bWJzU3dpcGVyLiR3cmFwcGVyRWwuY2hpbGRyZW4oYFtkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIiR7c3dpcGVyLnJlYWxJbmRleCArIGl9XCJdYCkuYWRkQ2xhc3ModGh1bWJBY3RpdmVDbGFzcyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGh1bWJzVG9BY3RpdmF0ZTsgaSArPSAxKSB7XG4gICAgICAgIHRodW1ic1N3aXBlci5zbGlkZXMuZXEoc3dpcGVyLnJlYWxJbmRleCArIGkpLmFkZENsYXNzKHRodW1iQWN0aXZlQ2xhc3MpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uKCdiZWZvcmVJbml0JywgKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIHRodW1ic1xuICAgIH0gPSBzd2lwZXIucGFyYW1zO1xuICAgIGlmICghdGh1bWJzIHx8ICF0aHVtYnMuc3dpcGVyKSByZXR1cm47XG4gICAgaW5pdCgpO1xuICAgIHVwZGF0ZSh0cnVlKTtcbiAgfSk7XG4gIG9uKCdzbGlkZUNoYW5nZSB1cGRhdGUgcmVzaXplIG9ic2VydmVyVXBkYXRlJywgKCkgPT4ge1xuICAgIGlmICghc3dpcGVyLnRodW1icy5zd2lwZXIpIHJldHVybjtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG4gIG9uKCdzZXRUcmFuc2l0aW9uJywgKF9zLCBkdXJhdGlvbikgPT4ge1xuICAgIGNvbnN0IHRodW1ic1N3aXBlciA9IHN3aXBlci50aHVtYnMuc3dpcGVyO1xuICAgIGlmICghdGh1bWJzU3dpcGVyKSByZXR1cm47XG4gICAgdGh1bWJzU3dpcGVyLnNldFRyYW5zaXRpb24oZHVyYXRpb24pO1xuICB9KTtcbiAgb24oJ2JlZm9yZURlc3Ryb3knLCAoKSA9PiB7XG4gICAgY29uc3QgdGh1bWJzU3dpcGVyID0gc3dpcGVyLnRodW1icy5zd2lwZXI7XG4gICAgaWYgKCF0aHVtYnNTd2lwZXIpIHJldHVybjtcblxuICAgIGlmIChzd2lwZXJDcmVhdGVkICYmIHRodW1ic1N3aXBlcikge1xuICAgICAgdGh1bWJzU3dpcGVyLmRlc3Ryb3koKTtcbiAgICB9XG4gIH0pO1xuICBPYmplY3QuYXNzaWduKHN3aXBlci50aHVtYnMsIHtcbiAgICBpbml0LFxuICAgIHVwZGF0ZVxuICB9KTtcbn0iLCJpbXBvcnQgJCBmcm9tICcuLi8uLi9zaGFyZWQvZG9tLmpzJztcbmltcG9ydCB7IHNldENTU1Byb3BlcnR5IH0gZnJvbSAnLi4vLi4vc2hhcmVkL3V0aWxzLmpzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpcnR1YWwoe1xuICBzd2lwZXIsXG4gIGV4dGVuZFBhcmFtcyxcbiAgb25cbn0pIHtcbiAgZXh0ZW5kUGFyYW1zKHtcbiAgICB2aXJ0dWFsOiB7XG4gICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgIHNsaWRlczogW10sXG4gICAgICBjYWNoZTogdHJ1ZSxcbiAgICAgIHJlbmRlclNsaWRlOiBudWxsLFxuICAgICAgcmVuZGVyRXh0ZXJuYWw6IG51bGwsXG4gICAgICByZW5kZXJFeHRlcm5hbFVwZGF0ZTogdHJ1ZSxcbiAgICAgIGFkZFNsaWRlc0JlZm9yZTogMCxcbiAgICAgIGFkZFNsaWRlc0FmdGVyOiAwXG4gICAgfVxuICB9KTtcbiAgbGV0IGNzc01vZGVUaW1lb3V0O1xuICBzd2lwZXIudmlydHVhbCA9IHtcbiAgICBjYWNoZToge30sXG4gICAgZnJvbTogdW5kZWZpbmVkLFxuICAgIHRvOiB1bmRlZmluZWQsXG4gICAgc2xpZGVzOiBbXSxcbiAgICBvZmZzZXQ6IDAsXG4gICAgc2xpZGVzR3JpZDogW11cbiAgfTtcblxuICBmdW5jdGlvbiByZW5kZXJTbGlkZShzbGlkZSwgaW5kZXgpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLnZpcnR1YWw7XG5cbiAgICBpZiAocGFyYW1zLmNhY2hlICYmIHN3aXBlci52aXJ0dWFsLmNhY2hlW2luZGV4XSkge1xuICAgICAgcmV0dXJuIHN3aXBlci52aXJ0dWFsLmNhY2hlW2luZGV4XTtcbiAgICB9XG5cbiAgICBjb25zdCAkc2xpZGVFbCA9IHBhcmFtcy5yZW5kZXJTbGlkZSA/ICQocGFyYW1zLnJlbmRlclNsaWRlLmNhbGwoc3dpcGVyLCBzbGlkZSwgaW5kZXgpKSA6ICQoYDxkaXYgY2xhc3M9XCIke3N3aXBlci5wYXJhbXMuc2xpZGVDbGFzc31cIiBkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIiR7aW5kZXh9XCI+JHtzbGlkZX08L2Rpdj5gKTtcbiAgICBpZiAoISRzbGlkZUVsLmF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JykpICRzbGlkZUVsLmF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JywgaW5kZXgpO1xuICAgIGlmIChwYXJhbXMuY2FjaGUpIHN3aXBlci52aXJ0dWFsLmNhY2hlW2luZGV4XSA9ICRzbGlkZUVsO1xuICAgIHJldHVybiAkc2xpZGVFbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZShmb3JjZSkge1xuICAgIGNvbnN0IHtcbiAgICAgIHNsaWRlc1BlclZpZXcsXG4gICAgICBzbGlkZXNQZXJHcm91cCxcbiAgICAgIGNlbnRlcmVkU2xpZGVzXG4gICAgfSA9IHN3aXBlci5wYXJhbXM7XG4gICAgY29uc3Qge1xuICAgICAgYWRkU2xpZGVzQmVmb3JlLFxuICAgICAgYWRkU2xpZGVzQWZ0ZXJcbiAgICB9ID0gc3dpcGVyLnBhcmFtcy52aXJ0dWFsO1xuICAgIGNvbnN0IHtcbiAgICAgIGZyb206IHByZXZpb3VzRnJvbSxcbiAgICAgIHRvOiBwcmV2aW91c1RvLFxuICAgICAgc2xpZGVzLFxuICAgICAgc2xpZGVzR3JpZDogcHJldmlvdXNTbGlkZXNHcmlkLFxuICAgICAgb2Zmc2V0OiBwcmV2aW91c09mZnNldFxuICAgIH0gPSBzd2lwZXIudmlydHVhbDtcblxuICAgIGlmICghc3dpcGVyLnBhcmFtcy5jc3NNb2RlKSB7XG4gICAgICBzd2lwZXIudXBkYXRlQWN0aXZlSW5kZXgoKTtcbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmVJbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleCB8fCAwO1xuICAgIGxldCBvZmZzZXRQcm9wO1xuICAgIGlmIChzd2lwZXIucnRsVHJhbnNsYXRlKSBvZmZzZXRQcm9wID0gJ3JpZ2h0JztlbHNlIG9mZnNldFByb3AgPSBzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyAnbGVmdCcgOiAndG9wJztcbiAgICBsZXQgc2xpZGVzQWZ0ZXI7XG4gICAgbGV0IHNsaWRlc0JlZm9yZTtcblxuICAgIGlmIChjZW50ZXJlZFNsaWRlcykge1xuICAgICAgc2xpZGVzQWZ0ZXIgPSBNYXRoLmZsb29yKHNsaWRlc1BlclZpZXcgLyAyKSArIHNsaWRlc1Blckdyb3VwICsgYWRkU2xpZGVzQWZ0ZXI7XG4gICAgICBzbGlkZXNCZWZvcmUgPSBNYXRoLmZsb29yKHNsaWRlc1BlclZpZXcgLyAyKSArIHNsaWRlc1Blckdyb3VwICsgYWRkU2xpZGVzQmVmb3JlO1xuICAgIH0gZWxzZSB7XG4gICAgICBzbGlkZXNBZnRlciA9IHNsaWRlc1BlclZpZXcgKyAoc2xpZGVzUGVyR3JvdXAgLSAxKSArIGFkZFNsaWRlc0FmdGVyO1xuICAgICAgc2xpZGVzQmVmb3JlID0gc2xpZGVzUGVyR3JvdXAgKyBhZGRTbGlkZXNCZWZvcmU7XG4gICAgfVxuXG4gICAgY29uc3QgZnJvbSA9IE1hdGgubWF4KChhY3RpdmVJbmRleCB8fCAwKSAtIHNsaWRlc0JlZm9yZSwgMCk7XG4gICAgY29uc3QgdG8gPSBNYXRoLm1pbigoYWN0aXZlSW5kZXggfHwgMCkgKyBzbGlkZXNBZnRlciwgc2xpZGVzLmxlbmd0aCAtIDEpO1xuICAgIGNvbnN0IG9mZnNldCA9IChzd2lwZXIuc2xpZGVzR3JpZFtmcm9tXSB8fCAwKSAtIChzd2lwZXIuc2xpZGVzR3JpZFswXSB8fCAwKTtcbiAgICBPYmplY3QuYXNzaWduKHN3aXBlci52aXJ0dWFsLCB7XG4gICAgICBmcm9tLFxuICAgICAgdG8sXG4gICAgICBvZmZzZXQsXG4gICAgICBzbGlkZXNHcmlkOiBzd2lwZXIuc2xpZGVzR3JpZFxuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gb25SZW5kZXJlZCgpIHtcbiAgICAgIHN3aXBlci51cGRhdGVTbGlkZXMoKTtcbiAgICAgIHN3aXBlci51cGRhdGVQcm9ncmVzcygpO1xuICAgICAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcblxuICAgICAgaWYgKHN3aXBlci5sYXp5ICYmIHN3aXBlci5wYXJhbXMubGF6eS5lbmFibGVkKSB7XG4gICAgICAgIHN3aXBlci5sYXp5LmxvYWQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocHJldmlvdXNGcm9tID09PSBmcm9tICYmIHByZXZpb3VzVG8gPT09IHRvICYmICFmb3JjZSkge1xuICAgICAgaWYgKHN3aXBlci5zbGlkZXNHcmlkICE9PSBwcmV2aW91c1NsaWRlc0dyaWQgJiYgb2Zmc2V0ICE9PSBwcmV2aW91c09mZnNldCkge1xuICAgICAgICBzd2lwZXIuc2xpZGVzLmNzcyhvZmZzZXRQcm9wLCBgJHtvZmZzZXR9cHhgKTtcbiAgICAgIH1cblxuICAgICAgc3dpcGVyLnVwZGF0ZVByb2dyZXNzKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMudmlydHVhbC5yZW5kZXJFeHRlcm5hbCkge1xuICAgICAgc3dpcGVyLnBhcmFtcy52aXJ0dWFsLnJlbmRlckV4dGVybmFsLmNhbGwoc3dpcGVyLCB7XG4gICAgICAgIG9mZnNldCxcbiAgICAgICAgZnJvbSxcbiAgICAgICAgdG8sXG4gICAgICAgIHNsaWRlczogZnVuY3Rpb24gZ2V0U2xpZGVzKCkge1xuICAgICAgICAgIGNvbnN0IHNsaWRlc1RvUmVuZGVyID0gW107XG5cbiAgICAgICAgICBmb3IgKGxldCBpID0gZnJvbTsgaSA8PSB0bzsgaSArPSAxKSB7XG4gICAgICAgICAgICBzbGlkZXNUb1JlbmRlci5wdXNoKHNsaWRlc1tpXSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHNsaWRlc1RvUmVuZGVyO1xuICAgICAgICB9KClcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy52aXJ0dWFsLnJlbmRlckV4dGVybmFsVXBkYXRlKSB7XG4gICAgICAgIG9uUmVuZGVyZWQoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHByZXBlbmRJbmRleGVzID0gW107XG4gICAgY29uc3QgYXBwZW5kSW5kZXhlcyA9IFtdO1xuXG4gICAgaWYgKGZvcmNlKSB7XG4gICAgICBzd2lwZXIuJHdyYXBwZXJFbC5maW5kKGAuJHtzd2lwZXIucGFyYW1zLnNsaWRlQ2xhc3N9YCkucmVtb3ZlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSBwcmV2aW91c0Zyb207IGkgPD0gcHJldmlvdXNUbzsgaSArPSAxKSB7XG4gICAgICAgIGlmIChpIDwgZnJvbSB8fCBpID4gdG8pIHtcbiAgICAgICAgICBzd2lwZXIuJHdyYXBwZXJFbC5maW5kKGAuJHtzd2lwZXIucGFyYW1zLnNsaWRlQ2xhc3N9W2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJHtpfVwiXWApLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChpID49IGZyb20gJiYgaSA8PSB0bykge1xuICAgICAgICBpZiAodHlwZW9mIHByZXZpb3VzVG8gPT09ICd1bmRlZmluZWQnIHx8IGZvcmNlKSB7XG4gICAgICAgICAgYXBwZW5kSW5kZXhlcy5wdXNoKGkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChpID4gcHJldmlvdXNUbykgYXBwZW5kSW5kZXhlcy5wdXNoKGkpO1xuICAgICAgICAgIGlmIChpIDwgcHJldmlvdXNGcm9tKSBwcmVwZW5kSW5kZXhlcy5wdXNoKGkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgYXBwZW5kSW5kZXhlcy5mb3JFYWNoKGluZGV4ID0+IHtcbiAgICAgIHN3aXBlci4kd3JhcHBlckVsLmFwcGVuZChyZW5kZXJTbGlkZShzbGlkZXNbaW5kZXhdLCBpbmRleCkpO1xuICAgIH0pO1xuICAgIHByZXBlbmRJbmRleGVzLnNvcnQoKGEsIGIpID0+IGIgLSBhKS5mb3JFYWNoKGluZGV4ID0+IHtcbiAgICAgIHN3aXBlci4kd3JhcHBlckVsLnByZXBlbmQocmVuZGVyU2xpZGUoc2xpZGVzW2luZGV4XSwgaW5kZXgpKTtcbiAgICB9KTtcbiAgICBzd2lwZXIuJHdyYXBwZXJFbC5jaGlsZHJlbignLnN3aXBlci1zbGlkZScpLmNzcyhvZmZzZXRQcm9wLCBgJHtvZmZzZXR9cHhgKTtcbiAgICBvblJlbmRlcmVkKCk7XG4gIH1cblxuICBmdW5jdGlvbiBhcHBlbmRTbGlkZShzbGlkZXMpIHtcbiAgICBpZiAodHlwZW9mIHNsaWRlcyA9PT0gJ29iamVjdCcgJiYgJ2xlbmd0aCcgaW4gc2xpZGVzKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoc2xpZGVzW2ldKSBzd2lwZXIudmlydHVhbC5zbGlkZXMucHVzaChzbGlkZXNbaV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzd2lwZXIudmlydHVhbC5zbGlkZXMucHVzaChzbGlkZXMpO1xuICAgIH1cblxuICAgIHVwZGF0ZSh0cnVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByZXBlbmRTbGlkZShzbGlkZXMpIHtcbiAgICBjb25zdCBhY3RpdmVJbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleDtcbiAgICBsZXQgbmV3QWN0aXZlSW5kZXggPSBhY3RpdmVJbmRleCArIDE7XG4gICAgbGV0IG51bWJlck9mTmV3U2xpZGVzID0gMTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KHNsaWRlcykpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChzbGlkZXNbaV0pIHN3aXBlci52aXJ0dWFsLnNsaWRlcy51bnNoaWZ0KHNsaWRlc1tpXSk7XG4gICAgICB9XG5cbiAgICAgIG5ld0FjdGl2ZUluZGV4ID0gYWN0aXZlSW5kZXggKyBzbGlkZXMubGVuZ3RoO1xuICAgICAgbnVtYmVyT2ZOZXdTbGlkZXMgPSBzbGlkZXMubGVuZ3RoO1xuICAgIH0gZWxzZSB7XG4gICAgICBzd2lwZXIudmlydHVhbC5zbGlkZXMudW5zaGlmdChzbGlkZXMpO1xuICAgIH1cblxuICAgIGlmIChzd2lwZXIucGFyYW1zLnZpcnR1YWwuY2FjaGUpIHtcbiAgICAgIGNvbnN0IGNhY2hlID0gc3dpcGVyLnZpcnR1YWwuY2FjaGU7XG4gICAgICBjb25zdCBuZXdDYWNoZSA9IHt9O1xuICAgICAgT2JqZWN0LmtleXMoY2FjaGUpLmZvckVhY2goY2FjaGVkSW5kZXggPT4ge1xuICAgICAgICBjb25zdCAkY2FjaGVkRWwgPSBjYWNoZVtjYWNoZWRJbmRleF07XG4gICAgICAgIGNvbnN0IGNhY2hlZEVsSW5kZXggPSAkY2FjaGVkRWwuYXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKTtcblxuICAgICAgICBpZiAoY2FjaGVkRWxJbmRleCkge1xuICAgICAgICAgICRjYWNoZWRFbC5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcsIHBhcnNlSW50KGNhY2hlZEVsSW5kZXgsIDEwKSArIG51bWJlck9mTmV3U2xpZGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5ld0NhY2hlW3BhcnNlSW50KGNhY2hlZEluZGV4LCAxMCkgKyBudW1iZXJPZk5ld1NsaWRlc10gPSAkY2FjaGVkRWw7XG4gICAgICB9KTtcbiAgICAgIHN3aXBlci52aXJ0dWFsLmNhY2hlID0gbmV3Q2FjaGU7XG4gICAgfVxuXG4gICAgdXBkYXRlKHRydWUpO1xuICAgIHN3aXBlci5zbGlkZVRvKG5ld0FjdGl2ZUluZGV4LCAwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZVNsaWRlKHNsaWRlc0luZGV4ZXMpIHtcbiAgICBpZiAodHlwZW9mIHNsaWRlc0luZGV4ZXMgPT09ICd1bmRlZmluZWQnIHx8IHNsaWRlc0luZGV4ZXMgPT09IG51bGwpIHJldHVybjtcbiAgICBsZXQgYWN0aXZlSW5kZXggPSBzd2lwZXIuYWN0aXZlSW5kZXg7XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShzbGlkZXNJbmRleGVzKSkge1xuICAgICAgZm9yIChsZXQgaSA9IHNsaWRlc0luZGV4ZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpIC09IDEpIHtcbiAgICAgICAgc3dpcGVyLnZpcnR1YWwuc2xpZGVzLnNwbGljZShzbGlkZXNJbmRleGVzW2ldLCAxKTtcblxuICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy52aXJ0dWFsLmNhY2hlKSB7XG4gICAgICAgICAgZGVsZXRlIHN3aXBlci52aXJ0dWFsLmNhY2hlW3NsaWRlc0luZGV4ZXNbaV1dO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNsaWRlc0luZGV4ZXNbaV0gPCBhY3RpdmVJbmRleCkgYWN0aXZlSW5kZXggLT0gMTtcbiAgICAgICAgYWN0aXZlSW5kZXggPSBNYXRoLm1heChhY3RpdmVJbmRleCwgMCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXBlci52aXJ0dWFsLnNsaWRlcy5zcGxpY2Uoc2xpZGVzSW5kZXhlcywgMSk7XG5cbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLnZpcnR1YWwuY2FjaGUpIHtcbiAgICAgICAgZGVsZXRlIHN3aXBlci52aXJ0dWFsLmNhY2hlW3NsaWRlc0luZGV4ZXNdO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2xpZGVzSW5kZXhlcyA8IGFjdGl2ZUluZGV4KSBhY3RpdmVJbmRleCAtPSAxO1xuICAgICAgYWN0aXZlSW5kZXggPSBNYXRoLm1heChhY3RpdmVJbmRleCwgMCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKHRydWUpO1xuICAgIHN3aXBlci5zbGlkZVRvKGFjdGl2ZUluZGV4LCAwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUFsbFNsaWRlcygpIHtcbiAgICBzd2lwZXIudmlydHVhbC5zbGlkZXMgPSBbXTtcblxuICAgIGlmIChzd2lwZXIucGFyYW1zLnZpcnR1YWwuY2FjaGUpIHtcbiAgICAgIHN3aXBlci52aXJ0dWFsLmNhY2hlID0ge307XG4gICAgfVxuXG4gICAgdXBkYXRlKHRydWUpO1xuICAgIHN3aXBlci5zbGlkZVRvKDAsIDApO1xuICB9XG5cbiAgb24oJ2JlZm9yZUluaXQnLCAoKSA9PiB7XG4gICAgaWYgKCFzd2lwZXIucGFyYW1zLnZpcnR1YWwuZW5hYmxlZCkgcmV0dXJuO1xuICAgIHN3aXBlci52aXJ0dWFsLnNsaWRlcyA9IHN3aXBlci5wYXJhbXMudmlydHVhbC5zbGlkZXM7XG4gICAgc3dpcGVyLmNsYXNzTmFtZXMucHVzaChgJHtzd2lwZXIucGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3N9dmlydHVhbGApO1xuICAgIHN3aXBlci5wYXJhbXMud2F0Y2hTbGlkZXNQcm9ncmVzcyA9IHRydWU7XG4gICAgc3dpcGVyLm9yaWdpbmFsUGFyYW1zLndhdGNoU2xpZGVzUHJvZ3Jlc3MgPSB0cnVlO1xuXG4gICAgaWYgKCFzd2lwZXIucGFyYW1zLmluaXRpYWxTbGlkZSkge1xuICAgICAgdXBkYXRlKCk7XG4gICAgfVxuICB9KTtcbiAgb24oJ3NldFRyYW5zbGF0ZScsICgpID0+IHtcbiAgICBpZiAoIXN3aXBlci5wYXJhbXMudmlydHVhbC5lbmFibGVkKSByZXR1cm47XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5jc3NNb2RlICYmICFzd2lwZXIuX2ltbWVkaWF0ZVZpcnR1YWwpIHtcbiAgICAgIGNsZWFyVGltZW91dChjc3NNb2RlVGltZW91dCk7XG4gICAgICBjc3NNb2RlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB1cGRhdGUoKTtcbiAgICAgIH0sIDEwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVwZGF0ZSgpO1xuICAgIH1cbiAgfSk7XG4gIG9uKCdpbml0IHVwZGF0ZSByZXNpemUnLCAoKSA9PiB7XG4gICAgaWYgKCFzd2lwZXIucGFyYW1zLnZpcnR1YWwuZW5hYmxlZCkgcmV0dXJuO1xuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMuY3NzTW9kZSkge1xuICAgICAgc2V0Q1NTUHJvcGVydHkoc3dpcGVyLndyYXBwZXJFbCwgJy0tc3dpcGVyLXZpcnR1YWwtc2l6ZScsIGAke3N3aXBlci52aXJ0dWFsU2l6ZX1weGApO1xuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5hc3NpZ24oc3dpcGVyLnZpcnR1YWwsIHtcbiAgICBhcHBlbmRTbGlkZSxcbiAgICBwcmVwZW5kU2xpZGUsXG4gICAgcmVtb3ZlU2xpZGUsXG4gICAgcmVtb3ZlQWxsU2xpZGVzLFxuICAgIHVwZGF0ZVxuICB9KTtcbn0iLCJpbXBvcnQgeyBnZXRXaW5kb3cgfSBmcm9tICdzc3Itd2luZG93JztcbmltcG9ydCAkIGZyb20gJy4uLy4uL3NoYXJlZC9kb20uanMnO1xuaW1wb3J0IHsgZ2V0VHJhbnNsYXRlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3V0aWxzLmpzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFpvb20oe1xuICBzd2lwZXIsXG4gIGV4dGVuZFBhcmFtcyxcbiAgb24sXG4gIGVtaXRcbn0pIHtcbiAgY29uc3Qgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gIGV4dGVuZFBhcmFtcyh7XG4gICAgem9vbToge1xuICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICBtYXhSYXRpbzogMyxcbiAgICAgIG1pblJhdGlvOiAxLFxuICAgICAgdG9nZ2xlOiB0cnVlLFxuICAgICAgY29udGFpbmVyQ2xhc3M6ICdzd2lwZXItem9vbS1jb250YWluZXInLFxuICAgICAgem9vbWVkU2xpZGVDbGFzczogJ3N3aXBlci1zbGlkZS16b29tZWQnXG4gICAgfVxuICB9KTtcbiAgc3dpcGVyLnpvb20gPSB7XG4gICAgZW5hYmxlZDogZmFsc2VcbiAgfTtcbiAgbGV0IGN1cnJlbnRTY2FsZSA9IDE7XG4gIGxldCBpc1NjYWxpbmcgPSBmYWxzZTtcbiAgbGV0IGdlc3R1cmVzRW5hYmxlZDtcbiAgbGV0IGZha2VHZXN0dXJlVG91Y2hlZDtcbiAgbGV0IGZha2VHZXN0dXJlTW92ZWQ7XG4gIGNvbnN0IGdlc3R1cmUgPSB7XG4gICAgJHNsaWRlRWw6IHVuZGVmaW5lZCxcbiAgICBzbGlkZVdpZHRoOiB1bmRlZmluZWQsXG4gICAgc2xpZGVIZWlnaHQ6IHVuZGVmaW5lZCxcbiAgICAkaW1hZ2VFbDogdW5kZWZpbmVkLFxuICAgICRpbWFnZVdyYXBFbDogdW5kZWZpbmVkLFxuICAgIG1heFJhdGlvOiAzXG4gIH07XG4gIGNvbnN0IGltYWdlID0ge1xuICAgIGlzVG91Y2hlZDogdW5kZWZpbmVkLFxuICAgIGlzTW92ZWQ6IHVuZGVmaW5lZCxcbiAgICBjdXJyZW50WDogdW5kZWZpbmVkLFxuICAgIGN1cnJlbnRZOiB1bmRlZmluZWQsXG4gICAgbWluWDogdW5kZWZpbmVkLFxuICAgIG1pblk6IHVuZGVmaW5lZCxcbiAgICBtYXhYOiB1bmRlZmluZWQsXG4gICAgbWF4WTogdW5kZWZpbmVkLFxuICAgIHdpZHRoOiB1bmRlZmluZWQsXG4gICAgaGVpZ2h0OiB1bmRlZmluZWQsXG4gICAgc3RhcnRYOiB1bmRlZmluZWQsXG4gICAgc3RhcnRZOiB1bmRlZmluZWQsXG4gICAgdG91Y2hlc1N0YXJ0OiB7fSxcbiAgICB0b3VjaGVzQ3VycmVudDoge31cbiAgfTtcbiAgY29uc3QgdmVsb2NpdHkgPSB7XG4gICAgeDogdW5kZWZpbmVkLFxuICAgIHk6IHVuZGVmaW5lZCxcbiAgICBwcmV2UG9zaXRpb25YOiB1bmRlZmluZWQsXG4gICAgcHJldlBvc2l0aW9uWTogdW5kZWZpbmVkLFxuICAgIHByZXZUaW1lOiB1bmRlZmluZWRcbiAgfTtcbiAgbGV0IHNjYWxlID0gMTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN3aXBlci56b29tLCAnc2NhbGUnLCB7XG4gICAgZ2V0KCkge1xuICAgICAgcmV0dXJuIHNjYWxlO1xuICAgIH0sXG5cbiAgICBzZXQodmFsdWUpIHtcbiAgICAgIGlmIChzY2FsZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgY29uc3QgaW1hZ2VFbCA9IGdlc3R1cmUuJGltYWdlRWwgPyBnZXN0dXJlLiRpbWFnZUVsWzBdIDogdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCBzbGlkZUVsID0gZ2VzdHVyZS4kc2xpZGVFbCA/IGdlc3R1cmUuJHNsaWRlRWxbMF0gOiB1bmRlZmluZWQ7XG4gICAgICAgIGVtaXQoJ3pvb21DaGFuZ2UnLCB2YWx1ZSwgaW1hZ2VFbCwgc2xpZGVFbCk7XG4gICAgICB9XG5cbiAgICAgIHNjYWxlID0gdmFsdWU7XG4gICAgfVxuXG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGdldERpc3RhbmNlQmV0d2VlblRvdWNoZXMoZSkge1xuICAgIGlmIChlLnRhcmdldFRvdWNoZXMubGVuZ3RoIDwgMikgcmV0dXJuIDE7XG4gICAgY29uc3QgeDEgPSBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVg7XG4gICAgY29uc3QgeTEgPSBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVk7XG4gICAgY29uc3QgeDIgPSBlLnRhcmdldFRvdWNoZXNbMV0ucGFnZVg7XG4gICAgY29uc3QgeTIgPSBlLnRhcmdldFRvdWNoZXNbMV0ucGFnZVk7XG4gICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLnNxcnQoKHgyIC0geDEpICoqIDIgKyAoeTIgLSB5MSkgKiogMik7XG4gICAgcmV0dXJuIGRpc3RhbmNlO1xuICB9IC8vIEV2ZW50c1xuXG5cbiAgZnVuY3Rpb24gb25HZXN0dXJlU3RhcnQoZSkge1xuICAgIGNvbnN0IHN1cHBvcnQgPSBzd2lwZXIuc3VwcG9ydDtcbiAgICBjb25zdCBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLnpvb207XG4gICAgZmFrZUdlc3R1cmVUb3VjaGVkID0gZmFsc2U7XG4gICAgZmFrZUdlc3R1cmVNb3ZlZCA9IGZhbHNlO1xuXG4gICAgaWYgKCFzdXBwb3J0Lmdlc3R1cmVzKSB7XG4gICAgICBpZiAoZS50eXBlICE9PSAndG91Y2hzdGFydCcgfHwgZS50eXBlID09PSAndG91Y2hzdGFydCcgJiYgZS50YXJnZXRUb3VjaGVzLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBmYWtlR2VzdHVyZVRvdWNoZWQgPSB0cnVlO1xuICAgICAgZ2VzdHVyZS5zY2FsZVN0YXJ0ID0gZ2V0RGlzdGFuY2VCZXR3ZWVuVG91Y2hlcyhlKTtcbiAgICB9XG5cbiAgICBpZiAoIWdlc3R1cmUuJHNsaWRlRWwgfHwgIWdlc3R1cmUuJHNsaWRlRWwubGVuZ3RoKSB7XG4gICAgICBnZXN0dXJlLiRzbGlkZUVsID0gJChlLnRhcmdldCkuY2xvc2VzdChgLiR7c3dpcGVyLnBhcmFtcy5zbGlkZUNsYXNzfWApO1xuICAgICAgaWYgKGdlc3R1cmUuJHNsaWRlRWwubGVuZ3RoID09PSAwKSBnZXN0dXJlLiRzbGlkZUVsID0gc3dpcGVyLnNsaWRlcy5lcShzd2lwZXIuYWN0aXZlSW5kZXgpO1xuICAgICAgZ2VzdHVyZS4kaW1hZ2VFbCA9IGdlc3R1cmUuJHNsaWRlRWwuZmluZChgLiR7cGFyYW1zLmNvbnRhaW5lckNsYXNzfWApLmVxKDApLmZpbmQoJ2ltZywgc3ZnLCBjYW52YXMsIHBpY3R1cmUsIC5zd2lwZXItem9vbS10YXJnZXQnKTtcbiAgICAgIGdlc3R1cmUuJGltYWdlV3JhcEVsID0gZ2VzdHVyZS4kaW1hZ2VFbC5wYXJlbnQoYC4ke3BhcmFtcy5jb250YWluZXJDbGFzc31gKTtcbiAgICAgIGdlc3R1cmUubWF4UmF0aW8gPSBnZXN0dXJlLiRpbWFnZVdyYXBFbC5hdHRyKCdkYXRhLXN3aXBlci16b29tJykgfHwgcGFyYW1zLm1heFJhdGlvO1xuXG4gICAgICBpZiAoZ2VzdHVyZS4kaW1hZ2VXcmFwRWwubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGdlc3R1cmUuJGltYWdlRWwgPSB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZ2VzdHVyZS4kaW1hZ2VFbCkge1xuICAgICAgZ2VzdHVyZS4kaW1hZ2VFbC50cmFuc2l0aW9uKDApO1xuICAgIH1cblxuICAgIGlzU2NhbGluZyA9IHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBvbkdlc3R1cmVDaGFuZ2UoZSkge1xuICAgIGNvbnN0IHN1cHBvcnQgPSBzd2lwZXIuc3VwcG9ydDtcbiAgICBjb25zdCBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLnpvb207XG4gICAgY29uc3Qgem9vbSA9IHN3aXBlci56b29tO1xuXG4gICAgaWYgKCFzdXBwb3J0Lmdlc3R1cmVzKSB7XG4gICAgICBpZiAoZS50eXBlICE9PSAndG91Y2htb3ZlJyB8fCBlLnR5cGUgPT09ICd0b3VjaG1vdmUnICYmIGUudGFyZ2V0VG91Y2hlcy5sZW5ndGggPCAyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZmFrZUdlc3R1cmVNb3ZlZCA9IHRydWU7XG4gICAgICBnZXN0dXJlLnNjYWxlTW92ZSA9IGdldERpc3RhbmNlQmV0d2VlblRvdWNoZXMoZSk7XG4gICAgfVxuXG4gICAgaWYgKCFnZXN0dXJlLiRpbWFnZUVsIHx8IGdlc3R1cmUuJGltYWdlRWwubGVuZ3RoID09PSAwKSB7XG4gICAgICBpZiAoZS50eXBlID09PSAnZ2VzdHVyZWNoYW5nZScpIG9uR2VzdHVyZVN0YXJ0KGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChzdXBwb3J0Lmdlc3R1cmVzKSB7XG4gICAgICB6b29tLnNjYWxlID0gZS5zY2FsZSAqIGN1cnJlbnRTY2FsZTtcbiAgICB9IGVsc2Uge1xuICAgICAgem9vbS5zY2FsZSA9IGdlc3R1cmUuc2NhbGVNb3ZlIC8gZ2VzdHVyZS5zY2FsZVN0YXJ0ICogY3VycmVudFNjYWxlO1xuICAgIH1cblxuICAgIGlmICh6b29tLnNjYWxlID4gZ2VzdHVyZS5tYXhSYXRpbykge1xuICAgICAgem9vbS5zY2FsZSA9IGdlc3R1cmUubWF4UmF0aW8gLSAxICsgKHpvb20uc2NhbGUgLSBnZXN0dXJlLm1heFJhdGlvICsgMSkgKiogMC41O1xuICAgIH1cblxuICAgIGlmICh6b29tLnNjYWxlIDwgcGFyYW1zLm1pblJhdGlvKSB7XG4gICAgICB6b29tLnNjYWxlID0gcGFyYW1zLm1pblJhdGlvICsgMSAtIChwYXJhbXMubWluUmF0aW8gLSB6b29tLnNjYWxlICsgMSkgKiogMC41O1xuICAgIH1cblxuICAgIGdlc3R1cmUuJGltYWdlRWwudHJhbnNmb3JtKGB0cmFuc2xhdGUzZCgwLDAsMCkgc2NhbGUoJHt6b29tLnNjYWxlfSlgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uR2VzdHVyZUVuZChlKSB7XG4gICAgY29uc3QgZGV2aWNlID0gc3dpcGVyLmRldmljZTtcbiAgICBjb25zdCBzdXBwb3J0ID0gc3dpcGVyLnN1cHBvcnQ7XG4gICAgY29uc3QgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy56b29tO1xuICAgIGNvbnN0IHpvb20gPSBzd2lwZXIuem9vbTtcblxuICAgIGlmICghc3VwcG9ydC5nZXN0dXJlcykge1xuICAgICAgaWYgKCFmYWtlR2VzdHVyZVRvdWNoZWQgfHwgIWZha2VHZXN0dXJlTW92ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoZS50eXBlICE9PSAndG91Y2hlbmQnIHx8IGUudHlwZSA9PT0gJ3RvdWNoZW5kJyAmJiBlLmNoYW5nZWRUb3VjaGVzLmxlbmd0aCA8IDIgJiYgIWRldmljZS5hbmRyb2lkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZmFrZUdlc3R1cmVUb3VjaGVkID0gZmFsc2U7XG4gICAgICBmYWtlR2VzdHVyZU1vdmVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCFnZXN0dXJlLiRpbWFnZUVsIHx8IGdlc3R1cmUuJGltYWdlRWwubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgem9vbS5zY2FsZSA9IE1hdGgubWF4KE1hdGgubWluKHpvb20uc2NhbGUsIGdlc3R1cmUubWF4UmF0aW8pLCBwYXJhbXMubWluUmF0aW8pO1xuICAgIGdlc3R1cmUuJGltYWdlRWwudHJhbnNpdGlvbihzd2lwZXIucGFyYW1zLnNwZWVkKS50cmFuc2Zvcm0oYHRyYW5zbGF0ZTNkKDAsMCwwKSBzY2FsZSgke3pvb20uc2NhbGV9KWApO1xuICAgIGN1cnJlbnRTY2FsZSA9IHpvb20uc2NhbGU7XG4gICAgaXNTY2FsaW5nID0gZmFsc2U7XG4gICAgaWYgKHpvb20uc2NhbGUgPT09IDEpIGdlc3R1cmUuJHNsaWRlRWwgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBvblRvdWNoU3RhcnQoZSkge1xuICAgIGNvbnN0IGRldmljZSA9IHN3aXBlci5kZXZpY2U7XG4gICAgaWYgKCFnZXN0dXJlLiRpbWFnZUVsIHx8IGdlc3R1cmUuJGltYWdlRWwubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgaWYgKGltYWdlLmlzVG91Y2hlZCkgcmV0dXJuO1xuICAgIGlmIChkZXZpY2UuYW5kcm9pZCAmJiBlLmNhbmNlbGFibGUpIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpbWFnZS5pc1RvdWNoZWQgPSB0cnVlO1xuICAgIGltYWdlLnRvdWNoZXNTdGFydC54ID0gZS50eXBlID09PSAndG91Y2hzdGFydCcgPyBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVggOiBlLnBhZ2VYO1xuICAgIGltYWdlLnRvdWNoZXNTdGFydC55ID0gZS50eXBlID09PSAndG91Y2hzdGFydCcgPyBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVkgOiBlLnBhZ2VZO1xuICB9XG5cbiAgZnVuY3Rpb24gb25Ub3VjaE1vdmUoZSkge1xuICAgIGNvbnN0IHpvb20gPSBzd2lwZXIuem9vbTtcbiAgICBpZiAoIWdlc3R1cmUuJGltYWdlRWwgfHwgZ2VzdHVyZS4kaW1hZ2VFbC5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICBzd2lwZXIuYWxsb3dDbGljayA9IGZhbHNlO1xuICAgIGlmICghaW1hZ2UuaXNUb3VjaGVkIHx8ICFnZXN0dXJlLiRzbGlkZUVsKSByZXR1cm47XG5cbiAgICBpZiAoIWltYWdlLmlzTW92ZWQpIHtcbiAgICAgIGltYWdlLndpZHRoID0gZ2VzdHVyZS4kaW1hZ2VFbFswXS5vZmZzZXRXaWR0aDtcbiAgICAgIGltYWdlLmhlaWdodCA9IGdlc3R1cmUuJGltYWdlRWxbMF0ub2Zmc2V0SGVpZ2h0O1xuICAgICAgaW1hZ2Uuc3RhcnRYID0gZ2V0VHJhbnNsYXRlKGdlc3R1cmUuJGltYWdlV3JhcEVsWzBdLCAneCcpIHx8IDA7XG4gICAgICBpbWFnZS5zdGFydFkgPSBnZXRUcmFuc2xhdGUoZ2VzdHVyZS4kaW1hZ2VXcmFwRWxbMF0sICd5JykgfHwgMDtcbiAgICAgIGdlc3R1cmUuc2xpZGVXaWR0aCA9IGdlc3R1cmUuJHNsaWRlRWxbMF0ub2Zmc2V0V2lkdGg7XG4gICAgICBnZXN0dXJlLnNsaWRlSGVpZ2h0ID0gZ2VzdHVyZS4kc2xpZGVFbFswXS5vZmZzZXRIZWlnaHQ7XG4gICAgICBnZXN0dXJlLiRpbWFnZVdyYXBFbC50cmFuc2l0aW9uKDApO1xuICAgIH0gLy8gRGVmaW5lIGlmIHdlIG5lZWQgaW1hZ2UgZHJhZ1xuXG5cbiAgICBjb25zdCBzY2FsZWRXaWR0aCA9IGltYWdlLndpZHRoICogem9vbS5zY2FsZTtcbiAgICBjb25zdCBzY2FsZWRIZWlnaHQgPSBpbWFnZS5oZWlnaHQgKiB6b29tLnNjYWxlO1xuICAgIGlmIChzY2FsZWRXaWR0aCA8IGdlc3R1cmUuc2xpZGVXaWR0aCAmJiBzY2FsZWRIZWlnaHQgPCBnZXN0dXJlLnNsaWRlSGVpZ2h0KSByZXR1cm47XG4gICAgaW1hZ2UubWluWCA9IE1hdGgubWluKGdlc3R1cmUuc2xpZGVXaWR0aCAvIDIgLSBzY2FsZWRXaWR0aCAvIDIsIDApO1xuICAgIGltYWdlLm1heFggPSAtaW1hZ2UubWluWDtcbiAgICBpbWFnZS5taW5ZID0gTWF0aC5taW4oZ2VzdHVyZS5zbGlkZUhlaWdodCAvIDIgLSBzY2FsZWRIZWlnaHQgLyAyLCAwKTtcbiAgICBpbWFnZS5tYXhZID0gLWltYWdlLm1pblk7XG4gICAgaW1hZ2UudG91Y2hlc0N1cnJlbnQueCA9IGUudHlwZSA9PT0gJ3RvdWNobW92ZScgPyBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVggOiBlLnBhZ2VYO1xuICAgIGltYWdlLnRvdWNoZXNDdXJyZW50LnkgPSBlLnR5cGUgPT09ICd0b3VjaG1vdmUnID8gZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VZIDogZS5wYWdlWTtcblxuICAgIGlmICghaW1hZ2UuaXNNb3ZlZCAmJiAhaXNTY2FsaW5nKSB7XG4gICAgICBpZiAoc3dpcGVyLmlzSG9yaXpvbnRhbCgpICYmIChNYXRoLmZsb29yKGltYWdlLm1pblgpID09PSBNYXRoLmZsb29yKGltYWdlLnN0YXJ0WCkgJiYgaW1hZ2UudG91Y2hlc0N1cnJlbnQueCA8IGltYWdlLnRvdWNoZXNTdGFydC54IHx8IE1hdGguZmxvb3IoaW1hZ2UubWF4WCkgPT09IE1hdGguZmxvb3IoaW1hZ2Uuc3RhcnRYKSAmJiBpbWFnZS50b3VjaGVzQ3VycmVudC54ID4gaW1hZ2UudG91Y2hlc1N0YXJ0LngpKSB7XG4gICAgICAgIGltYWdlLmlzVG91Y2hlZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghc3dpcGVyLmlzSG9yaXpvbnRhbCgpICYmIChNYXRoLmZsb29yKGltYWdlLm1pblkpID09PSBNYXRoLmZsb29yKGltYWdlLnN0YXJ0WSkgJiYgaW1hZ2UudG91Y2hlc0N1cnJlbnQueSA8IGltYWdlLnRvdWNoZXNTdGFydC55IHx8IE1hdGguZmxvb3IoaW1hZ2UubWF4WSkgPT09IE1hdGguZmxvb3IoaW1hZ2Uuc3RhcnRZKSAmJiBpbWFnZS50b3VjaGVzQ3VycmVudC55ID4gaW1hZ2UudG91Y2hlc1N0YXJ0LnkpKSB7XG4gICAgICAgIGltYWdlLmlzVG91Y2hlZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGUuY2FuY2VsYWJsZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaW1hZ2UuaXNNb3ZlZCA9IHRydWU7XG4gICAgaW1hZ2UuY3VycmVudFggPSBpbWFnZS50b3VjaGVzQ3VycmVudC54IC0gaW1hZ2UudG91Y2hlc1N0YXJ0LnggKyBpbWFnZS5zdGFydFg7XG4gICAgaW1hZ2UuY3VycmVudFkgPSBpbWFnZS50b3VjaGVzQ3VycmVudC55IC0gaW1hZ2UudG91Y2hlc1N0YXJ0LnkgKyBpbWFnZS5zdGFydFk7XG5cbiAgICBpZiAoaW1hZ2UuY3VycmVudFggPCBpbWFnZS5taW5YKSB7XG4gICAgICBpbWFnZS5jdXJyZW50WCA9IGltYWdlLm1pblggKyAxIC0gKGltYWdlLm1pblggLSBpbWFnZS5jdXJyZW50WCArIDEpICoqIDAuODtcbiAgICB9XG5cbiAgICBpZiAoaW1hZ2UuY3VycmVudFggPiBpbWFnZS5tYXhYKSB7XG4gICAgICBpbWFnZS5jdXJyZW50WCA9IGltYWdlLm1heFggLSAxICsgKGltYWdlLmN1cnJlbnRYIC0gaW1hZ2UubWF4WCArIDEpICoqIDAuODtcbiAgICB9XG5cbiAgICBpZiAoaW1hZ2UuY3VycmVudFkgPCBpbWFnZS5taW5ZKSB7XG4gICAgICBpbWFnZS5jdXJyZW50WSA9IGltYWdlLm1pblkgKyAxIC0gKGltYWdlLm1pblkgLSBpbWFnZS5jdXJyZW50WSArIDEpICoqIDAuODtcbiAgICB9XG5cbiAgICBpZiAoaW1hZ2UuY3VycmVudFkgPiBpbWFnZS5tYXhZKSB7XG4gICAgICBpbWFnZS5jdXJyZW50WSA9IGltYWdlLm1heFkgLSAxICsgKGltYWdlLmN1cnJlbnRZIC0gaW1hZ2UubWF4WSArIDEpICoqIDAuODtcbiAgICB9IC8vIFZlbG9jaXR5XG5cblxuICAgIGlmICghdmVsb2NpdHkucHJldlBvc2l0aW9uWCkgdmVsb2NpdHkucHJldlBvc2l0aW9uWCA9IGltYWdlLnRvdWNoZXNDdXJyZW50Lng7XG4gICAgaWYgKCF2ZWxvY2l0eS5wcmV2UG9zaXRpb25ZKSB2ZWxvY2l0eS5wcmV2UG9zaXRpb25ZID0gaW1hZ2UudG91Y2hlc0N1cnJlbnQueTtcbiAgICBpZiAoIXZlbG9jaXR5LnByZXZUaW1lKSB2ZWxvY2l0eS5wcmV2VGltZSA9IERhdGUubm93KCk7XG4gICAgdmVsb2NpdHkueCA9IChpbWFnZS50b3VjaGVzQ3VycmVudC54IC0gdmVsb2NpdHkucHJldlBvc2l0aW9uWCkgLyAoRGF0ZS5ub3coKSAtIHZlbG9jaXR5LnByZXZUaW1lKSAvIDI7XG4gICAgdmVsb2NpdHkueSA9IChpbWFnZS50b3VjaGVzQ3VycmVudC55IC0gdmVsb2NpdHkucHJldlBvc2l0aW9uWSkgLyAoRGF0ZS5ub3coKSAtIHZlbG9jaXR5LnByZXZUaW1lKSAvIDI7XG4gICAgaWYgKE1hdGguYWJzKGltYWdlLnRvdWNoZXNDdXJyZW50LnggLSB2ZWxvY2l0eS5wcmV2UG9zaXRpb25YKSA8IDIpIHZlbG9jaXR5LnggPSAwO1xuICAgIGlmIChNYXRoLmFicyhpbWFnZS50b3VjaGVzQ3VycmVudC55IC0gdmVsb2NpdHkucHJldlBvc2l0aW9uWSkgPCAyKSB2ZWxvY2l0eS55ID0gMDtcbiAgICB2ZWxvY2l0eS5wcmV2UG9zaXRpb25YID0gaW1hZ2UudG91Y2hlc0N1cnJlbnQueDtcbiAgICB2ZWxvY2l0eS5wcmV2UG9zaXRpb25ZID0gaW1hZ2UudG91Y2hlc0N1cnJlbnQueTtcbiAgICB2ZWxvY2l0eS5wcmV2VGltZSA9IERhdGUubm93KCk7XG4gICAgZ2VzdHVyZS4kaW1hZ2VXcmFwRWwudHJhbnNmb3JtKGB0cmFuc2xhdGUzZCgke2ltYWdlLmN1cnJlbnRYfXB4LCAke2ltYWdlLmN1cnJlbnRZfXB4LDApYCk7XG4gIH1cblxuICBmdW5jdGlvbiBvblRvdWNoRW5kKCkge1xuICAgIGNvbnN0IHpvb20gPSBzd2lwZXIuem9vbTtcbiAgICBpZiAoIWdlc3R1cmUuJGltYWdlRWwgfHwgZ2VzdHVyZS4kaW1hZ2VFbC5sZW5ndGggPT09IDApIHJldHVybjtcblxuICAgIGlmICghaW1hZ2UuaXNUb3VjaGVkIHx8ICFpbWFnZS5pc01vdmVkKSB7XG4gICAgICBpbWFnZS5pc1RvdWNoZWQgPSBmYWxzZTtcbiAgICAgIGltYWdlLmlzTW92ZWQgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpbWFnZS5pc1RvdWNoZWQgPSBmYWxzZTtcbiAgICBpbWFnZS5pc01vdmVkID0gZmFsc2U7XG4gICAgbGV0IG1vbWVudHVtRHVyYXRpb25YID0gMzAwO1xuICAgIGxldCBtb21lbnR1bUR1cmF0aW9uWSA9IDMwMDtcbiAgICBjb25zdCBtb21lbnR1bURpc3RhbmNlWCA9IHZlbG9jaXR5LnggKiBtb21lbnR1bUR1cmF0aW9uWDtcbiAgICBjb25zdCBuZXdQb3NpdGlvblggPSBpbWFnZS5jdXJyZW50WCArIG1vbWVudHVtRGlzdGFuY2VYO1xuICAgIGNvbnN0IG1vbWVudHVtRGlzdGFuY2VZID0gdmVsb2NpdHkueSAqIG1vbWVudHVtRHVyYXRpb25ZO1xuICAgIGNvbnN0IG5ld1Bvc2l0aW9uWSA9IGltYWdlLmN1cnJlbnRZICsgbW9tZW50dW1EaXN0YW5jZVk7IC8vIEZpeCBkdXJhdGlvblxuXG4gICAgaWYgKHZlbG9jaXR5LnggIT09IDApIG1vbWVudHVtRHVyYXRpb25YID0gTWF0aC5hYnMoKG5ld1Bvc2l0aW9uWCAtIGltYWdlLmN1cnJlbnRYKSAvIHZlbG9jaXR5LngpO1xuICAgIGlmICh2ZWxvY2l0eS55ICE9PSAwKSBtb21lbnR1bUR1cmF0aW9uWSA9IE1hdGguYWJzKChuZXdQb3NpdGlvblkgLSBpbWFnZS5jdXJyZW50WSkgLyB2ZWxvY2l0eS55KTtcbiAgICBjb25zdCBtb21lbnR1bUR1cmF0aW9uID0gTWF0aC5tYXgobW9tZW50dW1EdXJhdGlvblgsIG1vbWVudHVtRHVyYXRpb25ZKTtcbiAgICBpbWFnZS5jdXJyZW50WCA9IG5ld1Bvc2l0aW9uWDtcbiAgICBpbWFnZS5jdXJyZW50WSA9IG5ld1Bvc2l0aW9uWTsgLy8gRGVmaW5lIGlmIHdlIG5lZWQgaW1hZ2UgZHJhZ1xuXG4gICAgY29uc3Qgc2NhbGVkV2lkdGggPSBpbWFnZS53aWR0aCAqIHpvb20uc2NhbGU7XG4gICAgY29uc3Qgc2NhbGVkSGVpZ2h0ID0gaW1hZ2UuaGVpZ2h0ICogem9vbS5zY2FsZTtcbiAgICBpbWFnZS5taW5YID0gTWF0aC5taW4oZ2VzdHVyZS5zbGlkZVdpZHRoIC8gMiAtIHNjYWxlZFdpZHRoIC8gMiwgMCk7XG4gICAgaW1hZ2UubWF4WCA9IC1pbWFnZS5taW5YO1xuICAgIGltYWdlLm1pblkgPSBNYXRoLm1pbihnZXN0dXJlLnNsaWRlSGVpZ2h0IC8gMiAtIHNjYWxlZEhlaWdodCAvIDIsIDApO1xuICAgIGltYWdlLm1heFkgPSAtaW1hZ2UubWluWTtcbiAgICBpbWFnZS5jdXJyZW50WCA9IE1hdGgubWF4KE1hdGgubWluKGltYWdlLmN1cnJlbnRYLCBpbWFnZS5tYXhYKSwgaW1hZ2UubWluWCk7XG4gICAgaW1hZ2UuY3VycmVudFkgPSBNYXRoLm1heChNYXRoLm1pbihpbWFnZS5jdXJyZW50WSwgaW1hZ2UubWF4WSksIGltYWdlLm1pblkpO1xuICAgIGdlc3R1cmUuJGltYWdlV3JhcEVsLnRyYW5zaXRpb24obW9tZW50dW1EdXJhdGlvbikudHJhbnNmb3JtKGB0cmFuc2xhdGUzZCgke2ltYWdlLmN1cnJlbnRYfXB4LCAke2ltYWdlLmN1cnJlbnRZfXB4LDApYCk7XG4gIH1cblxuICBmdW5jdGlvbiBvblRyYW5zaXRpb25FbmQoKSB7XG4gICAgY29uc3Qgem9vbSA9IHN3aXBlci56b29tO1xuXG4gICAgaWYgKGdlc3R1cmUuJHNsaWRlRWwgJiYgc3dpcGVyLnByZXZpb3VzSW5kZXggIT09IHN3aXBlci5hY3RpdmVJbmRleCkge1xuICAgICAgaWYgKGdlc3R1cmUuJGltYWdlRWwpIHtcbiAgICAgICAgZ2VzdHVyZS4kaW1hZ2VFbC50cmFuc2Zvcm0oJ3RyYW5zbGF0ZTNkKDAsMCwwKSBzY2FsZSgxKScpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZ2VzdHVyZS4kaW1hZ2VXcmFwRWwpIHtcbiAgICAgICAgZ2VzdHVyZS4kaW1hZ2VXcmFwRWwudHJhbnNmb3JtKCd0cmFuc2xhdGUzZCgwLDAsMCknKTtcbiAgICAgIH1cblxuICAgICAgem9vbS5zY2FsZSA9IDE7XG4gICAgICBjdXJyZW50U2NhbGUgPSAxO1xuICAgICAgZ2VzdHVyZS4kc2xpZGVFbCA9IHVuZGVmaW5lZDtcbiAgICAgIGdlc3R1cmUuJGltYWdlRWwgPSB1bmRlZmluZWQ7XG4gICAgICBnZXN0dXJlLiRpbWFnZVdyYXBFbCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB6b29tSW4oZSkge1xuICAgIGNvbnN0IHpvb20gPSBzd2lwZXIuem9vbTtcbiAgICBjb25zdCBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLnpvb207XG5cbiAgICBpZiAoIWdlc3R1cmUuJHNsaWRlRWwpIHtcbiAgICAgIGlmIChlICYmIGUudGFyZ2V0KSB7XG4gICAgICAgIGdlc3R1cmUuJHNsaWRlRWwgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KGAuJHtzd2lwZXIucGFyYW1zLnNsaWRlQ2xhc3N9YCk7XG4gICAgICB9XG5cbiAgICAgIGlmICghZ2VzdHVyZS4kc2xpZGVFbCkge1xuICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy52aXJ0dWFsICYmIHN3aXBlci5wYXJhbXMudmlydHVhbC5lbmFibGVkICYmIHN3aXBlci52aXJ0dWFsKSB7XG4gICAgICAgICAgZ2VzdHVyZS4kc2xpZGVFbCA9IHN3aXBlci4kd3JhcHBlckVsLmNoaWxkcmVuKGAuJHtzd2lwZXIucGFyYW1zLnNsaWRlQWN0aXZlQ2xhc3N9YCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZ2VzdHVyZS4kc2xpZGVFbCA9IHN3aXBlci5zbGlkZXMuZXEoc3dpcGVyLmFjdGl2ZUluZGV4KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBnZXN0dXJlLiRpbWFnZUVsID0gZ2VzdHVyZS4kc2xpZGVFbC5maW5kKGAuJHtwYXJhbXMuY29udGFpbmVyQ2xhc3N9YCkuZXEoMCkuZmluZCgnaW1nLCBzdmcsIGNhbnZhcywgcGljdHVyZSwgLnN3aXBlci16b29tLXRhcmdldCcpO1xuICAgICAgZ2VzdHVyZS4kaW1hZ2VXcmFwRWwgPSBnZXN0dXJlLiRpbWFnZUVsLnBhcmVudChgLiR7cGFyYW1zLmNvbnRhaW5lckNsYXNzfWApO1xuICAgIH1cblxuICAgIGlmICghZ2VzdHVyZS4kaW1hZ2VFbCB8fCBnZXN0dXJlLiRpbWFnZUVsLmxlbmd0aCA9PT0gMCB8fCAhZ2VzdHVyZS4kaW1hZ2VXcmFwRWwgfHwgZ2VzdHVyZS4kaW1hZ2VXcmFwRWwubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5jc3NNb2RlKSB7XG4gICAgICBzd2lwZXIud3JhcHBlckVsLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICBzd2lwZXIud3JhcHBlckVsLnN0eWxlLnRvdWNoQWN0aW9uID0gJ25vbmUnO1xuICAgIH1cblxuICAgIGdlc3R1cmUuJHNsaWRlRWwuYWRkQ2xhc3MoYCR7cGFyYW1zLnpvb21lZFNsaWRlQ2xhc3N9YCk7XG4gICAgbGV0IHRvdWNoWDtcbiAgICBsZXQgdG91Y2hZO1xuICAgIGxldCBvZmZzZXRYO1xuICAgIGxldCBvZmZzZXRZO1xuICAgIGxldCBkaWZmWDtcbiAgICBsZXQgZGlmZlk7XG4gICAgbGV0IHRyYW5zbGF0ZVg7XG4gICAgbGV0IHRyYW5zbGF0ZVk7XG4gICAgbGV0IGltYWdlV2lkdGg7XG4gICAgbGV0IGltYWdlSGVpZ2h0O1xuICAgIGxldCBzY2FsZWRXaWR0aDtcbiAgICBsZXQgc2NhbGVkSGVpZ2h0O1xuICAgIGxldCB0cmFuc2xhdGVNaW5YO1xuICAgIGxldCB0cmFuc2xhdGVNaW5ZO1xuICAgIGxldCB0cmFuc2xhdGVNYXhYO1xuICAgIGxldCB0cmFuc2xhdGVNYXhZO1xuICAgIGxldCBzbGlkZVdpZHRoO1xuICAgIGxldCBzbGlkZUhlaWdodDtcblxuICAgIGlmICh0eXBlb2YgaW1hZ2UudG91Y2hlc1N0YXJ0LnggPT09ICd1bmRlZmluZWQnICYmIGUpIHtcbiAgICAgIHRvdWNoWCA9IGUudHlwZSA9PT0gJ3RvdWNoZW5kJyA/IGUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVggOiBlLnBhZ2VYO1xuICAgICAgdG91Y2hZID0gZS50eXBlID09PSAndG91Y2hlbmQnID8gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWSA6IGUucGFnZVk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvdWNoWCA9IGltYWdlLnRvdWNoZXNTdGFydC54O1xuICAgICAgdG91Y2hZID0gaW1hZ2UudG91Y2hlc1N0YXJ0Lnk7XG4gICAgfVxuXG4gICAgem9vbS5zY2FsZSA9IGdlc3R1cmUuJGltYWdlV3JhcEVsLmF0dHIoJ2RhdGEtc3dpcGVyLXpvb20nKSB8fCBwYXJhbXMubWF4UmF0aW87XG4gICAgY3VycmVudFNjYWxlID0gZ2VzdHVyZS4kaW1hZ2VXcmFwRWwuYXR0cignZGF0YS1zd2lwZXItem9vbScpIHx8IHBhcmFtcy5tYXhSYXRpbztcblxuICAgIGlmIChlKSB7XG4gICAgICBzbGlkZVdpZHRoID0gZ2VzdHVyZS4kc2xpZGVFbFswXS5vZmZzZXRXaWR0aDtcbiAgICAgIHNsaWRlSGVpZ2h0ID0gZ2VzdHVyZS4kc2xpZGVFbFswXS5vZmZzZXRIZWlnaHQ7XG4gICAgICBvZmZzZXRYID0gZ2VzdHVyZS4kc2xpZGVFbC5vZmZzZXQoKS5sZWZ0ICsgd2luZG93LnNjcm9sbFg7XG4gICAgICBvZmZzZXRZID0gZ2VzdHVyZS4kc2xpZGVFbC5vZmZzZXQoKS50b3AgKyB3aW5kb3cuc2Nyb2xsWTtcbiAgICAgIGRpZmZYID0gb2Zmc2V0WCArIHNsaWRlV2lkdGggLyAyIC0gdG91Y2hYO1xuICAgICAgZGlmZlkgPSBvZmZzZXRZICsgc2xpZGVIZWlnaHQgLyAyIC0gdG91Y2hZO1xuICAgICAgaW1hZ2VXaWR0aCA9IGdlc3R1cmUuJGltYWdlRWxbMF0ub2Zmc2V0V2lkdGg7XG4gICAgICBpbWFnZUhlaWdodCA9IGdlc3R1cmUuJGltYWdlRWxbMF0ub2Zmc2V0SGVpZ2h0O1xuICAgICAgc2NhbGVkV2lkdGggPSBpbWFnZVdpZHRoICogem9vbS5zY2FsZTtcbiAgICAgIHNjYWxlZEhlaWdodCA9IGltYWdlSGVpZ2h0ICogem9vbS5zY2FsZTtcbiAgICAgIHRyYW5zbGF0ZU1pblggPSBNYXRoLm1pbihzbGlkZVdpZHRoIC8gMiAtIHNjYWxlZFdpZHRoIC8gMiwgMCk7XG4gICAgICB0cmFuc2xhdGVNaW5ZID0gTWF0aC5taW4oc2xpZGVIZWlnaHQgLyAyIC0gc2NhbGVkSGVpZ2h0IC8gMiwgMCk7XG4gICAgICB0cmFuc2xhdGVNYXhYID0gLXRyYW5zbGF0ZU1pblg7XG4gICAgICB0cmFuc2xhdGVNYXhZID0gLXRyYW5zbGF0ZU1pblk7XG4gICAgICB0cmFuc2xhdGVYID0gZGlmZlggKiB6b29tLnNjYWxlO1xuICAgICAgdHJhbnNsYXRlWSA9IGRpZmZZICogem9vbS5zY2FsZTtcblxuICAgICAgaWYgKHRyYW5zbGF0ZVggPCB0cmFuc2xhdGVNaW5YKSB7XG4gICAgICAgIHRyYW5zbGF0ZVggPSB0cmFuc2xhdGVNaW5YO1xuICAgICAgfVxuXG4gICAgICBpZiAodHJhbnNsYXRlWCA+IHRyYW5zbGF0ZU1heFgpIHtcbiAgICAgICAgdHJhbnNsYXRlWCA9IHRyYW5zbGF0ZU1heFg7XG4gICAgICB9XG5cbiAgICAgIGlmICh0cmFuc2xhdGVZIDwgdHJhbnNsYXRlTWluWSkge1xuICAgICAgICB0cmFuc2xhdGVZID0gdHJhbnNsYXRlTWluWTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRyYW5zbGF0ZVkgPiB0cmFuc2xhdGVNYXhZKSB7XG4gICAgICAgIHRyYW5zbGF0ZVkgPSB0cmFuc2xhdGVNYXhZO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2xhdGVYID0gMDtcbiAgICAgIHRyYW5zbGF0ZVkgPSAwO1xuICAgIH1cblxuICAgIGdlc3R1cmUuJGltYWdlV3JhcEVsLnRyYW5zaXRpb24oMzAwKS50cmFuc2Zvcm0oYHRyYW5zbGF0ZTNkKCR7dHJhbnNsYXRlWH1weCwgJHt0cmFuc2xhdGVZfXB4LDApYCk7XG4gICAgZ2VzdHVyZS4kaW1hZ2VFbC50cmFuc2l0aW9uKDMwMCkudHJhbnNmb3JtKGB0cmFuc2xhdGUzZCgwLDAsMCkgc2NhbGUoJHt6b29tLnNjYWxlfSlgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHpvb21PdXQoKSB7XG4gICAgY29uc3Qgem9vbSA9IHN3aXBlci56b29tO1xuICAgIGNvbnN0IHBhcmFtcyA9IHN3aXBlci5wYXJhbXMuem9vbTtcblxuICAgIGlmICghZ2VzdHVyZS4kc2xpZGVFbCkge1xuICAgICAgaWYgKHN3aXBlci5wYXJhbXMudmlydHVhbCAmJiBzd2lwZXIucGFyYW1zLnZpcnR1YWwuZW5hYmxlZCAmJiBzd2lwZXIudmlydHVhbCkge1xuICAgICAgICBnZXN0dXJlLiRzbGlkZUVsID0gc3dpcGVyLiR3cmFwcGVyRWwuY2hpbGRyZW4oYC4ke3N3aXBlci5wYXJhbXMuc2xpZGVBY3RpdmVDbGFzc31gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdlc3R1cmUuJHNsaWRlRWwgPSBzd2lwZXIuc2xpZGVzLmVxKHN3aXBlci5hY3RpdmVJbmRleCk7XG4gICAgICB9XG5cbiAgICAgIGdlc3R1cmUuJGltYWdlRWwgPSBnZXN0dXJlLiRzbGlkZUVsLmZpbmQoYC4ke3BhcmFtcy5jb250YWluZXJDbGFzc31gKS5lcSgwKS5maW5kKCdpbWcsIHN2ZywgY2FudmFzLCBwaWN0dXJlLCAuc3dpcGVyLXpvb20tdGFyZ2V0Jyk7XG4gICAgICBnZXN0dXJlLiRpbWFnZVdyYXBFbCA9IGdlc3R1cmUuJGltYWdlRWwucGFyZW50KGAuJHtwYXJhbXMuY29udGFpbmVyQ2xhc3N9YCk7XG4gICAgfVxuXG4gICAgaWYgKCFnZXN0dXJlLiRpbWFnZUVsIHx8IGdlc3R1cmUuJGltYWdlRWwubGVuZ3RoID09PSAwIHx8ICFnZXN0dXJlLiRpbWFnZVdyYXBFbCB8fCBnZXN0dXJlLiRpbWFnZVdyYXBFbC5sZW5ndGggPT09IDApIHJldHVybjtcblxuICAgIGlmIChzd2lwZXIucGFyYW1zLmNzc01vZGUpIHtcbiAgICAgIHN3aXBlci53cmFwcGVyRWwuc3R5bGUub3ZlcmZsb3cgPSAnJztcbiAgICAgIHN3aXBlci53cmFwcGVyRWwuc3R5bGUudG91Y2hBY3Rpb24gPSAnJztcbiAgICB9XG5cbiAgICB6b29tLnNjYWxlID0gMTtcbiAgICBjdXJyZW50U2NhbGUgPSAxO1xuICAgIGdlc3R1cmUuJGltYWdlV3JhcEVsLnRyYW5zaXRpb24oMzAwKS50cmFuc2Zvcm0oJ3RyYW5zbGF0ZTNkKDAsMCwwKScpO1xuICAgIGdlc3R1cmUuJGltYWdlRWwudHJhbnNpdGlvbigzMDApLnRyYW5zZm9ybSgndHJhbnNsYXRlM2QoMCwwLDApIHNjYWxlKDEpJyk7XG4gICAgZ2VzdHVyZS4kc2xpZGVFbC5yZW1vdmVDbGFzcyhgJHtwYXJhbXMuem9vbWVkU2xpZGVDbGFzc31gKTtcbiAgICBnZXN0dXJlLiRzbGlkZUVsID0gdW5kZWZpbmVkO1xuICB9IC8vIFRvZ2dsZSBab29tXG5cblxuICBmdW5jdGlvbiB6b29tVG9nZ2xlKGUpIHtcbiAgICBjb25zdCB6b29tID0gc3dpcGVyLnpvb207XG5cbiAgICBpZiAoem9vbS5zY2FsZSAmJiB6b29tLnNjYWxlICE9PSAxKSB7XG4gICAgICAvLyBab29tIE91dFxuICAgICAgem9vbU91dCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBab29tIEluXG4gICAgICB6b29tSW4oZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IHN1cHBvcnQgPSBzd2lwZXIuc3VwcG9ydDtcbiAgICBjb25zdCBwYXNzaXZlTGlzdGVuZXIgPSBzd2lwZXIudG91Y2hFdmVudHMuc3RhcnQgPT09ICd0b3VjaHN0YXJ0JyAmJiBzdXBwb3J0LnBhc3NpdmVMaXN0ZW5lciAmJiBzd2lwZXIucGFyYW1zLnBhc3NpdmVMaXN0ZW5lcnMgPyB7XG4gICAgICBwYXNzaXZlOiB0cnVlLFxuICAgICAgY2FwdHVyZTogZmFsc2VcbiAgICB9IDogZmFsc2U7XG4gICAgY29uc3QgYWN0aXZlTGlzdGVuZXJXaXRoQ2FwdHVyZSA9IHN1cHBvcnQucGFzc2l2ZUxpc3RlbmVyID8ge1xuICAgICAgcGFzc2l2ZTogZmFsc2UsXG4gICAgICBjYXB0dXJlOiB0cnVlXG4gICAgfSA6IHRydWU7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhc3NpdmVMaXN0ZW5lcixcbiAgICAgIGFjdGl2ZUxpc3RlbmVyV2l0aENhcHR1cmVcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U2xpZGVTZWxlY3RvcigpIHtcbiAgICByZXR1cm4gYC4ke3N3aXBlci5wYXJhbXMuc2xpZGVDbGFzc31gO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlR2VzdHVyZXMobWV0aG9kKSB7XG4gICAgY29uc3Qge1xuICAgICAgcGFzc2l2ZUxpc3RlbmVyXG4gICAgfSA9IGdldExpc3RlbmVycygpO1xuICAgIGNvbnN0IHNsaWRlU2VsZWN0b3IgPSBnZXRTbGlkZVNlbGVjdG9yKCk7XG4gICAgc3dpcGVyLiR3cmFwcGVyRWxbbWV0aG9kXSgnZ2VzdHVyZXN0YXJ0Jywgc2xpZGVTZWxlY3Rvciwgb25HZXN0dXJlU3RhcnQsIHBhc3NpdmVMaXN0ZW5lcik7XG4gICAgc3dpcGVyLiR3cmFwcGVyRWxbbWV0aG9kXSgnZ2VzdHVyZWNoYW5nZScsIHNsaWRlU2VsZWN0b3IsIG9uR2VzdHVyZUNoYW5nZSwgcGFzc2l2ZUxpc3RlbmVyKTtcbiAgICBzd2lwZXIuJHdyYXBwZXJFbFttZXRob2RdKCdnZXN0dXJlZW5kJywgc2xpZGVTZWxlY3Rvciwgb25HZXN0dXJlRW5kLCBwYXNzaXZlTGlzdGVuZXIpO1xuICB9XG5cbiAgZnVuY3Rpb24gZW5hYmxlR2VzdHVyZXMoKSB7XG4gICAgaWYgKGdlc3R1cmVzRW5hYmxlZCkgcmV0dXJuO1xuICAgIGdlc3R1cmVzRW5hYmxlZCA9IHRydWU7XG4gICAgdG9nZ2xlR2VzdHVyZXMoJ29uJyk7XG4gIH1cblxuICBmdW5jdGlvbiBkaXNhYmxlR2VzdHVyZXMoKSB7XG4gICAgaWYgKCFnZXN0dXJlc0VuYWJsZWQpIHJldHVybjtcbiAgICBnZXN0dXJlc0VuYWJsZWQgPSBmYWxzZTtcbiAgICB0b2dnbGVHZXN0dXJlcygnb2ZmJyk7XG4gIH0gLy8gQXR0YWNoL0RldGFjaCBFdmVudHNcblxuXG4gIGZ1bmN0aW9uIGVuYWJsZSgpIHtcbiAgICBjb25zdCB6b29tID0gc3dpcGVyLnpvb207XG4gICAgaWYgKHpvb20uZW5hYmxlZCkgcmV0dXJuO1xuICAgIHpvb20uZW5hYmxlZCA9IHRydWU7XG4gICAgY29uc3Qgc3VwcG9ydCA9IHN3aXBlci5zdXBwb3J0O1xuICAgIGNvbnN0IHtcbiAgICAgIHBhc3NpdmVMaXN0ZW5lcixcbiAgICAgIGFjdGl2ZUxpc3RlbmVyV2l0aENhcHR1cmVcbiAgICB9ID0gZ2V0TGlzdGVuZXJzKCk7XG4gICAgY29uc3Qgc2xpZGVTZWxlY3RvciA9IGdldFNsaWRlU2VsZWN0b3IoKTsgLy8gU2NhbGUgaW1hZ2VcblxuICAgIGlmIChzdXBwb3J0Lmdlc3R1cmVzKSB7XG4gICAgICBzd2lwZXIuJHdyYXBwZXJFbC5vbihzd2lwZXIudG91Y2hFdmVudHMuc3RhcnQsIGVuYWJsZUdlc3R1cmVzLCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgICAgc3dpcGVyLiR3cmFwcGVyRWwub24oc3dpcGVyLnRvdWNoRXZlbnRzLmVuZCwgZGlzYWJsZUdlc3R1cmVzLCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgIH0gZWxzZSBpZiAoc3dpcGVyLnRvdWNoRXZlbnRzLnN0YXJ0ID09PSAndG91Y2hzdGFydCcpIHtcbiAgICAgIHN3aXBlci4kd3JhcHBlckVsLm9uKHN3aXBlci50b3VjaEV2ZW50cy5zdGFydCwgc2xpZGVTZWxlY3Rvciwgb25HZXN0dXJlU3RhcnQsIHBhc3NpdmVMaXN0ZW5lcik7XG4gICAgICBzd2lwZXIuJHdyYXBwZXJFbC5vbihzd2lwZXIudG91Y2hFdmVudHMubW92ZSwgc2xpZGVTZWxlY3Rvciwgb25HZXN0dXJlQ2hhbmdlLCBhY3RpdmVMaXN0ZW5lcldpdGhDYXB0dXJlKTtcbiAgICAgIHN3aXBlci4kd3JhcHBlckVsLm9uKHN3aXBlci50b3VjaEV2ZW50cy5lbmQsIHNsaWRlU2VsZWN0b3IsIG9uR2VzdHVyZUVuZCwgcGFzc2l2ZUxpc3RlbmVyKTtcblxuICAgICAgaWYgKHN3aXBlci50b3VjaEV2ZW50cy5jYW5jZWwpIHtcbiAgICAgICAgc3dpcGVyLiR3cmFwcGVyRWwub24oc3dpcGVyLnRvdWNoRXZlbnRzLmNhbmNlbCwgc2xpZGVTZWxlY3Rvciwgb25HZXN0dXJlRW5kLCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgICAgfVxuICAgIH0gLy8gTW92ZSBpbWFnZVxuXG5cbiAgICBzd2lwZXIuJHdyYXBwZXJFbC5vbihzd2lwZXIudG91Y2hFdmVudHMubW92ZSwgYC4ke3N3aXBlci5wYXJhbXMuem9vbS5jb250YWluZXJDbGFzc31gLCBvblRvdWNoTW92ZSwgYWN0aXZlTGlzdGVuZXJXaXRoQ2FwdHVyZSk7XG4gIH1cblxuICBmdW5jdGlvbiBkaXNhYmxlKCkge1xuICAgIGNvbnN0IHpvb20gPSBzd2lwZXIuem9vbTtcbiAgICBpZiAoIXpvb20uZW5hYmxlZCkgcmV0dXJuO1xuICAgIGNvbnN0IHN1cHBvcnQgPSBzd2lwZXIuc3VwcG9ydDtcbiAgICB6b29tLmVuYWJsZWQgPSBmYWxzZTtcbiAgICBjb25zdCB7XG4gICAgICBwYXNzaXZlTGlzdGVuZXIsXG4gICAgICBhY3RpdmVMaXN0ZW5lcldpdGhDYXB0dXJlXG4gICAgfSA9IGdldExpc3RlbmVycygpO1xuICAgIGNvbnN0IHNsaWRlU2VsZWN0b3IgPSBnZXRTbGlkZVNlbGVjdG9yKCk7IC8vIFNjYWxlIGltYWdlXG5cbiAgICBpZiAoc3VwcG9ydC5nZXN0dXJlcykge1xuICAgICAgc3dpcGVyLiR3cmFwcGVyRWwub2ZmKHN3aXBlci50b3VjaEV2ZW50cy5zdGFydCwgZW5hYmxlR2VzdHVyZXMsIHBhc3NpdmVMaXN0ZW5lcik7XG4gICAgICBzd2lwZXIuJHdyYXBwZXJFbC5vZmYoc3dpcGVyLnRvdWNoRXZlbnRzLmVuZCwgZGlzYWJsZUdlc3R1cmVzLCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgIH0gZWxzZSBpZiAoc3dpcGVyLnRvdWNoRXZlbnRzLnN0YXJ0ID09PSAndG91Y2hzdGFydCcpIHtcbiAgICAgIHN3aXBlci4kd3JhcHBlckVsLm9mZihzd2lwZXIudG91Y2hFdmVudHMuc3RhcnQsIHNsaWRlU2VsZWN0b3IsIG9uR2VzdHVyZVN0YXJ0LCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgICAgc3dpcGVyLiR3cmFwcGVyRWwub2ZmKHN3aXBlci50b3VjaEV2ZW50cy5tb3ZlLCBzbGlkZVNlbGVjdG9yLCBvbkdlc3R1cmVDaGFuZ2UsIGFjdGl2ZUxpc3RlbmVyV2l0aENhcHR1cmUpO1xuICAgICAgc3dpcGVyLiR3cmFwcGVyRWwub2ZmKHN3aXBlci50b3VjaEV2ZW50cy5lbmQsIHNsaWRlU2VsZWN0b3IsIG9uR2VzdHVyZUVuZCwgcGFzc2l2ZUxpc3RlbmVyKTtcblxuICAgICAgaWYgKHN3aXBlci50b3VjaEV2ZW50cy5jYW5jZWwpIHtcbiAgICAgICAgc3dpcGVyLiR3cmFwcGVyRWwub2ZmKHN3aXBlci50b3VjaEV2ZW50cy5jYW5jZWwsIHNsaWRlU2VsZWN0b3IsIG9uR2VzdHVyZUVuZCwgcGFzc2l2ZUxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICB9IC8vIE1vdmUgaW1hZ2VcblxuXG4gICAgc3dpcGVyLiR3cmFwcGVyRWwub2ZmKHN3aXBlci50b3VjaEV2ZW50cy5tb3ZlLCBgLiR7c3dpcGVyLnBhcmFtcy56b29tLmNvbnRhaW5lckNsYXNzfWAsIG9uVG91Y2hNb3ZlLCBhY3RpdmVMaXN0ZW5lcldpdGhDYXB0dXJlKTtcbiAgfVxuXG4gIG9uKCdpbml0JywgKCkgPT4ge1xuICAgIGlmIChzd2lwZXIucGFyYW1zLnpvb20uZW5hYmxlZCkge1xuICAgICAgZW5hYmxlKCk7XG4gICAgfVxuICB9KTtcbiAgb24oJ2Rlc3Ryb3knLCAoKSA9PiB7XG4gICAgZGlzYWJsZSgpO1xuICB9KTtcbiAgb24oJ3RvdWNoU3RhcnQnLCAoX3MsIGUpID0+IHtcbiAgICBpZiAoIXN3aXBlci56b29tLmVuYWJsZWQpIHJldHVybjtcbiAgICBvblRvdWNoU3RhcnQoZSk7XG4gIH0pO1xuICBvbigndG91Y2hFbmQnLCAoX3MsIGUpID0+IHtcbiAgICBpZiAoIXN3aXBlci56b29tLmVuYWJsZWQpIHJldHVybjtcbiAgICBvblRvdWNoRW5kKGUpO1xuICB9KTtcbiAgb24oJ2RvdWJsZVRhcCcsIChfcywgZSkgPT4ge1xuICAgIGlmICghc3dpcGVyLmFuaW1hdGluZyAmJiBzd2lwZXIucGFyYW1zLnpvb20uZW5hYmxlZCAmJiBzd2lwZXIuem9vbS5lbmFibGVkICYmIHN3aXBlci5wYXJhbXMuem9vbS50b2dnbGUpIHtcbiAgICAgIHpvb21Ub2dnbGUoZSk7XG4gICAgfVxuICB9KTtcbiAgb24oJ3RyYW5zaXRpb25FbmQnLCAoKSA9PiB7XG4gICAgaWYgKHN3aXBlci56b29tLmVuYWJsZWQgJiYgc3dpcGVyLnBhcmFtcy56b29tLmVuYWJsZWQpIHtcbiAgICAgIG9uVHJhbnNpdGlvbkVuZCgpO1xuICAgIH1cbiAgfSk7XG4gIG9uKCdzbGlkZUNoYW5nZScsICgpID0+IHtcbiAgICBpZiAoc3dpcGVyLnpvb20uZW5hYmxlZCAmJiBzd2lwZXIucGFyYW1zLnpvb20uZW5hYmxlZCAmJiBzd2lwZXIucGFyYW1zLmNzc01vZGUpIHtcbiAgICAgIG9uVHJhbnNpdGlvbkVuZCgpO1xuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5hc3NpZ24oc3dpcGVyLnpvb20sIHtcbiAgICBlbmFibGUsXG4gICAgZGlzYWJsZSxcbiAgICBpbjogem9vbUluLFxuICAgIG91dDogem9vbU91dCxcbiAgICB0b2dnbGU6IHpvb21Ub2dnbGVcbiAgfSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2xhc3Nlc1RvU2VsZWN0b3IoY2xhc3NlcyA9ICcnKSB7XG4gIHJldHVybiBgLiR7Y2xhc3Nlcy50cmltKCkucmVwbGFjZSgvKFtcXC46IVxcL10pL2csICdcXFxcJDEnKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIC5yZXBsYWNlKC8gL2csICcuJyl9YDtcbn0iLCJpbXBvcnQgeyBnZXREb2N1bWVudCB9IGZyb20gJ3Nzci13aW5kb3cnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudElmTm90RGVmaW5lZChzd2lwZXIsIG9yaWdpbmFsUGFyYW1zLCBwYXJhbXMsIGNoZWNrUHJvcHMpIHtcbiAgY29uc3QgZG9jdW1lbnQgPSBnZXREb2N1bWVudCgpO1xuXG4gIGlmIChzd2lwZXIucGFyYW1zLmNyZWF0ZUVsZW1lbnRzKSB7XG4gICAgT2JqZWN0LmtleXMoY2hlY2tQcm9wcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgaWYgKCFwYXJhbXNba2V5XSAmJiBwYXJhbXMuYXV0byA9PT0gdHJ1ZSkge1xuICAgICAgICBsZXQgZWxlbWVudCA9IHN3aXBlci4kZWwuY2hpbGRyZW4oYC4ke2NoZWNrUHJvcHNba2V5XX1gKVswXTtcblxuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSBjaGVja1Byb3BzW2tleV07XG4gICAgICAgICAgc3dpcGVyLiRlbC5hcHBlbmQoZWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBwYXJhbXNba2V5XSA9IGVsZW1lbnQ7XG4gICAgICAgIG9yaWdpbmFsUGFyYW1zW2tleV0gPSBlbGVtZW50O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHBhcmFtcztcbn0iLCJpbXBvcnQgJCBmcm9tICcuL2RvbS5qcyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTaGFkb3cocGFyYW1zLCAkc2xpZGVFbCwgc2lkZSkge1xuICBjb25zdCBzaGFkb3dDbGFzcyA9IGBzd2lwZXItc2xpZGUtc2hhZG93JHtzaWRlID8gYC0ke3NpZGV9YCA6ICcnfWA7XG4gIGNvbnN0ICRzaGFkb3dDb250YWluZXIgPSBwYXJhbXMudHJhbnNmb3JtRWwgPyAkc2xpZGVFbC5maW5kKHBhcmFtcy50cmFuc2Zvcm1FbCkgOiAkc2xpZGVFbDtcbiAgbGV0ICRzaGFkb3dFbCA9ICRzaGFkb3dDb250YWluZXIuY2hpbGRyZW4oYC4ke3NoYWRvd0NsYXNzfWApO1xuXG4gIGlmICghJHNoYWRvd0VsLmxlbmd0aCkge1xuICAgICRzaGFkb3dFbCA9ICQoYDxkaXYgY2xhc3M9XCJzd2lwZXItc2xpZGUtc2hhZG93JHtzaWRlID8gYC0ke3NpZGV9YCA6ICcnfVwiPjwvZGl2PmApO1xuICAgICRzaGFkb3dDb250YWluZXIuYXBwZW5kKCRzaGFkb3dFbCk7XG4gIH1cblxuICByZXR1cm4gJHNoYWRvd0VsO1xufSIsImltcG9ydCB7ICQsIGFkZENsYXNzLCByZW1vdmVDbGFzcywgaGFzQ2xhc3MsIHRvZ2dsZUNsYXNzLCBhdHRyLCByZW1vdmVBdHRyLCB0cmFuc2Zvcm0sIHRyYW5zaXRpb24sIG9uLCBvZmYsIHRyaWdnZXIsIHRyYW5zaXRpb25FbmQsIG91dGVyV2lkdGgsIG91dGVySGVpZ2h0LCBzdHlsZXMsIG9mZnNldCwgY3NzLCBlYWNoLCBodG1sLCB0ZXh0LCBpcywgaW5kZXgsIGVxLCBhcHBlbmQsIHByZXBlbmQsIG5leHQsIG5leHRBbGwsIHByZXYsIHByZXZBbGwsIHBhcmVudCwgcGFyZW50cywgY2xvc2VzdCwgZmluZCwgY2hpbGRyZW4sIGZpbHRlciwgcmVtb3ZlIH0gZnJvbSAnZG9tNyc7XG5jb25zdCBNZXRob2RzID0ge1xuICBhZGRDbGFzcyxcbiAgcmVtb3ZlQ2xhc3MsXG4gIGhhc0NsYXNzLFxuICB0b2dnbGVDbGFzcyxcbiAgYXR0cixcbiAgcmVtb3ZlQXR0cixcbiAgdHJhbnNmb3JtLFxuICB0cmFuc2l0aW9uLFxuICBvbixcbiAgb2ZmLFxuICB0cmlnZ2VyLFxuICB0cmFuc2l0aW9uRW5kLFxuICBvdXRlcldpZHRoLFxuICBvdXRlckhlaWdodCxcbiAgc3R5bGVzLFxuICBvZmZzZXQsXG4gIGNzcyxcbiAgZWFjaCxcbiAgaHRtbCxcbiAgdGV4dCxcbiAgaXMsXG4gIGluZGV4LFxuICBlcSxcbiAgYXBwZW5kLFxuICBwcmVwZW5kLFxuICBuZXh0LFxuICBuZXh0QWxsLFxuICBwcmV2LFxuICBwcmV2QWxsLFxuICBwYXJlbnQsXG4gIHBhcmVudHMsXG4gIGNsb3Nlc3QsXG4gIGZpbmQsXG4gIGNoaWxkcmVuLFxuICBmaWx0ZXIsXG4gIHJlbW92ZVxufTtcbk9iamVjdC5rZXlzKE1ldGhvZHMpLmZvckVhY2gobWV0aG9kTmFtZSA9PiB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSgkLmZuLCBtZXRob2ROYW1lLCB7XG4gICAgdmFsdWU6IE1ldGhvZHNbbWV0aG9kTmFtZV0sXG4gICAgd3JpdGFibGU6IHRydWVcbiAgfSk7XG59KTtcbmV4cG9ydCBkZWZhdWx0ICQ7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZWZmZWN0SW5pdChwYXJhbXMpIHtcbiAgY29uc3Qge1xuICAgIGVmZmVjdCxcbiAgICBzd2lwZXIsXG4gICAgb24sXG4gICAgc2V0VHJhbnNsYXRlLFxuICAgIHNldFRyYW5zaXRpb24sXG4gICAgb3ZlcndyaXRlUGFyYW1zLFxuICAgIHBlcnNwZWN0aXZlXG4gIH0gPSBwYXJhbXM7XG4gIG9uKCdiZWZvcmVJbml0JywgKCkgPT4ge1xuICAgIGlmIChzd2lwZXIucGFyYW1zLmVmZmVjdCAhPT0gZWZmZWN0KSByZXR1cm47XG4gICAgc3dpcGVyLmNsYXNzTmFtZXMucHVzaChgJHtzd2lwZXIucGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3N9JHtlZmZlY3R9YCk7XG5cbiAgICBpZiAocGVyc3BlY3RpdmUgJiYgcGVyc3BlY3RpdmUoKSkge1xuICAgICAgc3dpcGVyLmNsYXNzTmFtZXMucHVzaChgJHtzd2lwZXIucGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3N9M2RgKTtcbiAgICB9XG5cbiAgICBjb25zdCBvdmVyd3JpdGVQYXJhbXNSZXN1bHQgPSBvdmVyd3JpdGVQYXJhbXMgPyBvdmVyd3JpdGVQYXJhbXMoKSA6IHt9O1xuICAgIE9iamVjdC5hc3NpZ24oc3dpcGVyLnBhcmFtcywgb3ZlcndyaXRlUGFyYW1zUmVzdWx0KTtcbiAgICBPYmplY3QuYXNzaWduKHN3aXBlci5vcmlnaW5hbFBhcmFtcywgb3ZlcndyaXRlUGFyYW1zUmVzdWx0KTtcbiAgfSk7XG4gIG9uKCdzZXRUcmFuc2xhdGUnLCAoKSA9PiB7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMuZWZmZWN0ICE9PSBlZmZlY3QpIHJldHVybjtcbiAgICBzZXRUcmFuc2xhdGUoKTtcbiAgfSk7XG4gIG9uKCdzZXRUcmFuc2l0aW9uJywgKF9zLCBkdXJhdGlvbikgPT4ge1xuICAgIGlmIChzd2lwZXIucGFyYW1zLmVmZmVjdCAhPT0gZWZmZWN0KSByZXR1cm47XG4gICAgc2V0VHJhbnNpdGlvbihkdXJhdGlvbik7XG4gIH0pO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVmZmVjdFRhcmdldChlZmZlY3RQYXJhbXMsICRzbGlkZUVsKSB7XG4gIGlmIChlZmZlY3RQYXJhbXMudHJhbnNmb3JtRWwpIHtcbiAgICByZXR1cm4gJHNsaWRlRWwuZmluZChlZmZlY3RQYXJhbXMudHJhbnNmb3JtRWwpLmNzcyh7XG4gICAgICAnYmFja2ZhY2UtdmlzaWJpbGl0eSc6ICdoaWRkZW4nLFxuICAgICAgJy13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eSc6ICdoaWRkZW4nXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gJHNsaWRlRWw7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZWZmZWN0VmlydHVhbFRyYW5zaXRpb25FbmQoe1xuICBzd2lwZXIsXG4gIGR1cmF0aW9uLFxuICB0cmFuc2Zvcm1FbCxcbiAgYWxsU2xpZGVzXG59KSB7XG4gIGNvbnN0IHtcbiAgICBzbGlkZXMsXG4gICAgYWN0aXZlSW5kZXgsXG4gICAgJHdyYXBwZXJFbFxuICB9ID0gc3dpcGVyO1xuXG4gIGlmIChzd2lwZXIucGFyYW1zLnZpcnR1YWxUcmFuc2xhdGUgJiYgZHVyYXRpb24gIT09IDApIHtcbiAgICBsZXQgZXZlbnRUcmlnZ2VyZWQgPSBmYWxzZTtcbiAgICBsZXQgJHRyYW5zaXRpb25FbmRUYXJnZXQ7XG5cbiAgICBpZiAoYWxsU2xpZGVzKSB7XG4gICAgICAkdHJhbnNpdGlvbkVuZFRhcmdldCA9IHRyYW5zZm9ybUVsID8gc2xpZGVzLmZpbmQodHJhbnNmb3JtRWwpIDogc2xpZGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICAkdHJhbnNpdGlvbkVuZFRhcmdldCA9IHRyYW5zZm9ybUVsID8gc2xpZGVzLmVxKGFjdGl2ZUluZGV4KS5maW5kKHRyYW5zZm9ybUVsKSA6IHNsaWRlcy5lcShhY3RpdmVJbmRleCk7XG4gICAgfVxuXG4gICAgJHRyYW5zaXRpb25FbmRUYXJnZXQudHJhbnNpdGlvbkVuZCgoKSA9PiB7XG4gICAgICBpZiAoZXZlbnRUcmlnZ2VyZWQpIHJldHVybjtcbiAgICAgIGlmICghc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQpIHJldHVybjtcbiAgICAgIGV2ZW50VHJpZ2dlcmVkID0gdHJ1ZTtcbiAgICAgIHN3aXBlci5hbmltYXRpbmcgPSBmYWxzZTtcbiAgICAgIGNvbnN0IHRyaWdnZXJFdmVudHMgPSBbJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCAndHJhbnNpdGlvbmVuZCddO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRyaWdnZXJFdmVudHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgJHdyYXBwZXJFbC50cmlnZ2VyKHRyaWdnZXJFdmVudHNbaV0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59IiwiaW1wb3J0IHsgZ2V0V2luZG93IH0gZnJvbSAnc3NyLXdpbmRvdyc7XG5sZXQgYnJvd3NlcjtcblxuZnVuY3Rpb24gY2FsY0Jyb3dzZXIoKSB7XG4gIGNvbnN0IHdpbmRvdyA9IGdldFdpbmRvdygpO1xuXG4gIGZ1bmN0aW9uIGlzU2FmYXJpKCkge1xuICAgIGNvbnN0IHVhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcbiAgICByZXR1cm4gdWEuaW5kZXhPZignc2FmYXJpJykgPj0gMCAmJiB1YS5pbmRleE9mKCdjaHJvbWUnKSA8IDAgJiYgdWEuaW5kZXhPZignYW5kcm9pZCcpIDwgMDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaXNTYWZhcmk6IGlzU2FmYXJpKCksXG4gICAgaXNXZWJWaWV3OiAvKGlQaG9uZXxpUG9kfGlQYWQpLipBcHBsZVdlYktpdCg/IS4qU2FmYXJpKS9pLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldEJyb3dzZXIoKSB7XG4gIGlmICghYnJvd3Nlcikge1xuICAgIGJyb3dzZXIgPSBjYWxjQnJvd3NlcigpO1xuICB9XG5cbiAgcmV0dXJuIGJyb3dzZXI7XG59XG5cbmV4cG9ydCB7IGdldEJyb3dzZXIgfTsiLCJpbXBvcnQgeyBnZXRXaW5kb3cgfSBmcm9tICdzc3Itd2luZG93JztcbmltcG9ydCB7IGdldFN1cHBvcnQgfSBmcm9tICcuL2dldC1zdXBwb3J0LmpzJztcbmxldCBkZXZpY2VDYWNoZWQ7XG5cbmZ1bmN0aW9uIGNhbGNEZXZpY2Uoe1xuICB1c2VyQWdlbnRcbn0gPSB7fSkge1xuICBjb25zdCBzdXBwb3J0ID0gZ2V0U3VwcG9ydCgpO1xuICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgY29uc3QgcGxhdGZvcm0gPSB3aW5kb3cubmF2aWdhdG9yLnBsYXRmb3JtO1xuICBjb25zdCB1YSA9IHVzZXJBZ2VudCB8fCB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgY29uc3QgZGV2aWNlID0ge1xuICAgIGlvczogZmFsc2UsXG4gICAgYW5kcm9pZDogZmFsc2VcbiAgfTtcbiAgY29uc3Qgc2NyZWVuV2lkdGggPSB3aW5kb3cuc2NyZWVuLndpZHRoO1xuICBjb25zdCBzY3JlZW5IZWlnaHQgPSB3aW5kb3cuc2NyZWVuLmhlaWdodDtcbiAgY29uc3QgYW5kcm9pZCA9IHVhLm1hdGNoKC8oQW5kcm9pZCk7P1tcXHNcXC9dKyhbXFxkLl0rKT8vKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gIGxldCBpcGFkID0gdWEubWF0Y2goLyhpUGFkKS4qT1NcXHMoW1xcZF9dKykvKTtcbiAgY29uc3QgaXBvZCA9IHVhLm1hdGNoKC8oaVBvZCkoLipPU1xccyhbXFxkX10rKSk/Lyk7XG4gIGNvbnN0IGlwaG9uZSA9ICFpcGFkICYmIHVhLm1hdGNoKC8oaVBob25lXFxzT1N8aU9TKVxccyhbXFxkX10rKS8pO1xuICBjb25zdCB3aW5kb3dzID0gcGxhdGZvcm0gPT09ICdXaW4zMic7XG4gIGxldCBtYWNvcyA9IHBsYXRmb3JtID09PSAnTWFjSW50ZWwnOyAvLyBpUGFkT3MgMTMgZml4XG5cbiAgY29uc3QgaVBhZFNjcmVlbnMgPSBbJzEwMjR4MTM2NicsICcxMzY2eDEwMjQnLCAnODM0eDExOTQnLCAnMTE5NHg4MzQnLCAnODM0eDExMTInLCAnMTExMng4MzQnLCAnNzY4eDEwMjQnLCAnMTAyNHg3NjgnLCAnODIweDExODAnLCAnMTE4MHg4MjAnLCAnODEweDEwODAnLCAnMTA4MHg4MTAnXTtcblxuICBpZiAoIWlwYWQgJiYgbWFjb3MgJiYgc3VwcG9ydC50b3VjaCAmJiBpUGFkU2NyZWVucy5pbmRleE9mKGAke3NjcmVlbldpZHRofXgke3NjcmVlbkhlaWdodH1gKSA+PSAwKSB7XG4gICAgaXBhZCA9IHVhLm1hdGNoKC8oVmVyc2lvbilcXC8oW1xcZC5dKykvKTtcbiAgICBpZiAoIWlwYWQpIGlwYWQgPSBbMCwgMSwgJzEzXzBfMCddO1xuICAgIG1hY29zID0gZmFsc2U7XG4gIH0gLy8gQW5kcm9pZFxuXG5cbiAgaWYgKGFuZHJvaWQgJiYgIXdpbmRvd3MpIHtcbiAgICBkZXZpY2Uub3MgPSAnYW5kcm9pZCc7XG4gICAgZGV2aWNlLmFuZHJvaWQgPSB0cnVlO1xuICB9XG5cbiAgaWYgKGlwYWQgfHwgaXBob25lIHx8IGlwb2QpIHtcbiAgICBkZXZpY2Uub3MgPSAnaW9zJztcbiAgICBkZXZpY2UuaW9zID0gdHJ1ZTtcbiAgfSAvLyBFeHBvcnQgb2JqZWN0XG5cblxuICByZXR1cm4gZGV2aWNlO1xufVxuXG5mdW5jdGlvbiBnZXREZXZpY2Uob3ZlcnJpZGVzID0ge30pIHtcbiAgaWYgKCFkZXZpY2VDYWNoZWQpIHtcbiAgICBkZXZpY2VDYWNoZWQgPSBjYWxjRGV2aWNlKG92ZXJyaWRlcyk7XG4gIH1cblxuICByZXR1cm4gZGV2aWNlQ2FjaGVkO1xufVxuXG5leHBvcnQgeyBnZXREZXZpY2UgfTsiLCJpbXBvcnQgeyBnZXRXaW5kb3csIGdldERvY3VtZW50IH0gZnJvbSAnc3NyLXdpbmRvdyc7XG5sZXQgc3VwcG9ydDtcblxuZnVuY3Rpb24gY2FsY1N1cHBvcnQoKSB7XG4gIGNvbnN0IHdpbmRvdyA9IGdldFdpbmRvdygpO1xuICBjb25zdCBkb2N1bWVudCA9IGdldERvY3VtZW50KCk7XG4gIHJldHVybiB7XG4gICAgc21vb3RoU2Nyb2xsOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgJ3Njcm9sbEJlaGF2aW9yJyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUsXG4gICAgdG91Y2g6ICEhKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyB8fCB3aW5kb3cuRG9jdW1lbnRUb3VjaCAmJiBkb2N1bWVudCBpbnN0YW5jZW9mIHdpbmRvdy5Eb2N1bWVudFRvdWNoKSxcbiAgICBwYXNzaXZlTGlzdGVuZXI6IGZ1bmN0aW9uIGNoZWNrUGFzc2l2ZUxpc3RlbmVyKCkge1xuICAgICAgbGV0IHN1cHBvcnRzUGFzc2l2ZSA9IGZhbHNlO1xuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBvcHRzID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAncGFzc2l2ZScsIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICBzdXBwb3J0c1Bhc3NpdmUgPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3RQYXNzaXZlTGlzdGVuZXInLCBudWxsLCBvcHRzKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsvLyBObyBzdXBwb3J0XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdXBwb3J0c1Bhc3NpdmU7XG4gICAgfSgpLFxuICAgIGdlc3R1cmVzOiBmdW5jdGlvbiBjaGVja0dlc3R1cmVzKCkge1xuICAgICAgcmV0dXJuICdvbmdlc3R1cmVzdGFydCcgaW4gd2luZG93O1xuICAgIH0oKVxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRTdXBwb3J0KCkge1xuICBpZiAoIXN1cHBvcnQpIHtcbiAgICBzdXBwb3J0ID0gY2FsY1N1cHBvcnQoKTtcbiAgfVxuXG4gIHJldHVybiBzdXBwb3J0O1xufVxuXG5leHBvcnQgeyBnZXRTdXBwb3J0IH07IiwiaW1wb3J0IHsgZ2V0V2luZG93IH0gZnJvbSAnc3NyLXdpbmRvdyc7XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb3BzKG9iaikge1xuICBjb25zdCBvYmplY3QgPSBvYmo7XG4gIE9iamVjdC5rZXlzKG9iamVjdCkuZm9yRWFjaChrZXkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYmplY3Rba2V5XSA9IG51bGw7XG4gICAgfSBjYXRjaCAoZSkgey8vIG5vIGdldHRlciBmb3Igb2JqZWN0XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGRlbGV0ZSBvYmplY3Rba2V5XTtcbiAgICB9IGNhdGNoIChlKSB7Ly8gc29tZXRoaW5nIGdvdCB3cm9uZ1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG5leHRUaWNrKGNhbGxiYWNrLCBkZWxheSA9IDApIHtcbiAgcmV0dXJuIHNldFRpbWVvdXQoY2FsbGJhY2ssIGRlbGF5KTtcbn1cblxuZnVuY3Rpb24gbm93KCkge1xuICByZXR1cm4gRGF0ZS5ub3coKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29tcHV0ZWRTdHlsZShlbCkge1xuICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgbGV0IHN0eWxlO1xuXG4gIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSkge1xuICAgIHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwsIG51bGwpO1xuICB9XG5cbiAgaWYgKCFzdHlsZSAmJiBlbC5jdXJyZW50U3R5bGUpIHtcbiAgICBzdHlsZSA9IGVsLmN1cnJlbnRTdHlsZTtcbiAgfVxuXG4gIGlmICghc3R5bGUpIHtcbiAgICBzdHlsZSA9IGVsLnN0eWxlO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBnZXRUcmFuc2xhdGUoZWwsIGF4aXMgPSAneCcpIHtcbiAgY29uc3Qgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gIGxldCBtYXRyaXg7XG4gIGxldCBjdXJUcmFuc2Zvcm07XG4gIGxldCB0cmFuc2Zvcm1NYXRyaXg7XG4gIGNvbnN0IGN1clN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbCwgbnVsbCk7XG5cbiAgaWYgKHdpbmRvdy5XZWJLaXRDU1NNYXRyaXgpIHtcbiAgICBjdXJUcmFuc2Zvcm0gPSBjdXJTdHlsZS50cmFuc2Zvcm0gfHwgY3VyU3R5bGUud2Via2l0VHJhbnNmb3JtO1xuXG4gICAgaWYgKGN1clRyYW5zZm9ybS5zcGxpdCgnLCcpLmxlbmd0aCA+IDYpIHtcbiAgICAgIGN1clRyYW5zZm9ybSA9IGN1clRyYW5zZm9ybS5zcGxpdCgnLCAnKS5tYXAoYSA9PiBhLnJlcGxhY2UoJywnLCAnLicpKS5qb2luKCcsICcpO1xuICAgIH0gLy8gU29tZSBvbGQgdmVyc2lvbnMgb2YgV2Via2l0IGNob2tlIHdoZW4gJ25vbmUnIGlzIHBhc3NlZDsgcGFzc1xuICAgIC8vIGVtcHR5IHN0cmluZyBpbnN0ZWFkIGluIHRoaXMgY2FzZVxuXG5cbiAgICB0cmFuc2Zvcm1NYXRyaXggPSBuZXcgd2luZG93LldlYktpdENTU01hdHJpeChjdXJUcmFuc2Zvcm0gPT09ICdub25lJyA/ICcnIDogY3VyVHJhbnNmb3JtKTtcbiAgfSBlbHNlIHtcbiAgICB0cmFuc2Zvcm1NYXRyaXggPSBjdXJTdHlsZS5Nb3pUcmFuc2Zvcm0gfHwgY3VyU3R5bGUuT1RyYW5zZm9ybSB8fCBjdXJTdHlsZS5Nc1RyYW5zZm9ybSB8fCBjdXJTdHlsZS5tc1RyYW5zZm9ybSB8fCBjdXJTdHlsZS50cmFuc2Zvcm0gfHwgY3VyU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgndHJhbnNmb3JtJykucmVwbGFjZSgndHJhbnNsYXRlKCcsICdtYXRyaXgoMSwgMCwgMCwgMSwnKTtcbiAgICBtYXRyaXggPSB0cmFuc2Zvcm1NYXRyaXgudG9TdHJpbmcoKS5zcGxpdCgnLCcpO1xuICB9XG5cbiAgaWYgKGF4aXMgPT09ICd4Jykge1xuICAgIC8vIExhdGVzdCBDaHJvbWUgYW5kIHdlYmtpdHMgRml4XG4gICAgaWYgKHdpbmRvdy5XZWJLaXRDU1NNYXRyaXgpIGN1clRyYW5zZm9ybSA9IHRyYW5zZm9ybU1hdHJpeC5tNDE7IC8vIENyYXp5IElFMTAgTWF0cml4XG4gICAgZWxzZSBpZiAobWF0cml4Lmxlbmd0aCA9PT0gMTYpIGN1clRyYW5zZm9ybSA9IHBhcnNlRmxvYXQobWF0cml4WzEyXSk7IC8vIE5vcm1hbCBCcm93c2Vyc1xuICAgIGVsc2UgY3VyVHJhbnNmb3JtID0gcGFyc2VGbG9hdChtYXRyaXhbNF0pO1xuICB9XG5cbiAgaWYgKGF4aXMgPT09ICd5Jykge1xuICAgIC8vIExhdGVzdCBDaHJvbWUgYW5kIHdlYmtpdHMgRml4XG4gICAgaWYgKHdpbmRvdy5XZWJLaXRDU1NNYXRyaXgpIGN1clRyYW5zZm9ybSA9IHRyYW5zZm9ybU1hdHJpeC5tNDI7IC8vIENyYXp5IElFMTAgTWF0cml4XG4gICAgZWxzZSBpZiAobWF0cml4Lmxlbmd0aCA9PT0gMTYpIGN1clRyYW5zZm9ybSA9IHBhcnNlRmxvYXQobWF0cml4WzEzXSk7IC8vIE5vcm1hbCBCcm93c2Vyc1xuICAgIGVsc2UgY3VyVHJhbnNmb3JtID0gcGFyc2VGbG9hdChtYXRyaXhbNV0pO1xuICB9XG5cbiAgcmV0dXJuIGN1clRyYW5zZm9ybSB8fCAwO1xufVxuXG5mdW5jdGlvbiBpc09iamVjdChvKSB7XG4gIHJldHVybiB0eXBlb2YgbyA9PT0gJ29iamVjdCcgJiYgbyAhPT0gbnVsbCAmJiBvLmNvbnN0cnVjdG9yICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSkgPT09ICdPYmplY3QnO1xufVxuXG5mdW5jdGlvbiBpc05vZGUobm9kZSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cuSFRNTEVsZW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudDtcbiAgfVxuXG4gIHJldHVybiBub2RlICYmIChub2RlLm5vZGVUeXBlID09PSAxIHx8IG5vZGUubm9kZVR5cGUgPT09IDExKTtcbn1cblxuZnVuY3Rpb24gZXh0ZW5kKC4uLmFyZ3MpIHtcbiAgY29uc3QgdG8gPSBPYmplY3QoYXJnc1swXSk7XG4gIGNvbnN0IG5vRXh0ZW5kID0gWydfX3Byb3RvX18nLCAnY29uc3RydWN0b3InLCAncHJvdG90eXBlJ107XG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBhcmdzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgbmV4dFNvdXJjZSA9IGFyZ3NbaV07XG5cbiAgICBpZiAobmV4dFNvdXJjZSAhPT0gdW5kZWZpbmVkICYmIG5leHRTb3VyY2UgIT09IG51bGwgJiYgIWlzTm9kZShuZXh0U291cmNlKSkge1xuICAgICAgY29uc3Qga2V5c0FycmF5ID0gT2JqZWN0LmtleXMoT2JqZWN0KG5leHRTb3VyY2UpKS5maWx0ZXIoa2V5ID0+IG5vRXh0ZW5kLmluZGV4T2Yoa2V5KSA8IDApO1xuXG4gICAgICBmb3IgKGxldCBuZXh0SW5kZXggPSAwLCBsZW4gPSBrZXlzQXJyYXkubGVuZ3RoOyBuZXh0SW5kZXggPCBsZW47IG5leHRJbmRleCArPSAxKSB7XG4gICAgICAgIGNvbnN0IG5leHRLZXkgPSBrZXlzQXJyYXlbbmV4dEluZGV4XTtcbiAgICAgICAgY29uc3QgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobmV4dFNvdXJjZSwgbmV4dEtleSk7XG5cbiAgICAgICAgaWYgKGRlc2MgIT09IHVuZGVmaW5lZCAmJiBkZXNjLmVudW1lcmFibGUpIHtcbiAgICAgICAgICBpZiAoaXNPYmplY3QodG9bbmV4dEtleV0pICYmIGlzT2JqZWN0KG5leHRTb3VyY2VbbmV4dEtleV0pKSB7XG4gICAgICAgICAgICBpZiAobmV4dFNvdXJjZVtuZXh0S2V5XS5fX3N3aXBlcl9fKSB7XG4gICAgICAgICAgICAgIHRvW25leHRLZXldID0gbmV4dFNvdXJjZVtuZXh0S2V5XTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGV4dGVuZCh0b1tuZXh0S2V5XSwgbmV4dFNvdXJjZVtuZXh0S2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmICghaXNPYmplY3QodG9bbmV4dEtleV0pICYmIGlzT2JqZWN0KG5leHRTb3VyY2VbbmV4dEtleV0pKSB7XG4gICAgICAgICAgICB0b1tuZXh0S2V5XSA9IHt9O1xuXG4gICAgICAgICAgICBpZiAobmV4dFNvdXJjZVtuZXh0S2V5XS5fX3N3aXBlcl9fKSB7XG4gICAgICAgICAgICAgIHRvW25leHRLZXldID0gbmV4dFNvdXJjZVtuZXh0S2V5XTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGV4dGVuZCh0b1tuZXh0S2V5XSwgbmV4dFNvdXJjZVtuZXh0S2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRvW25leHRLZXldID0gbmV4dFNvdXJjZVtuZXh0S2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdG87XG59XG5cbmZ1bmN0aW9uIHNldENTU1Byb3BlcnR5KGVsLCB2YXJOYW1lLCB2YXJWYWx1ZSkge1xuICBlbC5zdHlsZS5zZXRQcm9wZXJ0eSh2YXJOYW1lLCB2YXJWYWx1ZSk7XG59XG5cbmZ1bmN0aW9uIGFuaW1hdGVDU1NNb2RlU2Nyb2xsKHtcbiAgc3dpcGVyLFxuICB0YXJnZXRQb3NpdGlvbixcbiAgc2lkZVxufSkge1xuICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgY29uc3Qgc3RhcnRQb3NpdGlvbiA9IC1zd2lwZXIudHJhbnNsYXRlO1xuICBsZXQgc3RhcnRUaW1lID0gbnVsbDtcbiAgbGV0IHRpbWU7XG4gIGNvbnN0IGR1cmF0aW9uID0gc3dpcGVyLnBhcmFtcy5zcGVlZDtcbiAgc3dpcGVyLndyYXBwZXJFbC5zdHlsZS5zY3JvbGxTbmFwVHlwZSA9ICdub25lJztcbiAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHN3aXBlci5jc3NNb2RlRnJhbWVJRCk7XG4gIGNvbnN0IGRpciA9IHRhcmdldFBvc2l0aW9uID4gc3RhcnRQb3NpdGlvbiA/ICduZXh0JyA6ICdwcmV2JztcblxuICBjb25zdCBpc091dE9mQm91bmQgPSAoY3VycmVudCwgdGFyZ2V0KSA9PiB7XG4gICAgcmV0dXJuIGRpciA9PT0gJ25leHQnICYmIGN1cnJlbnQgPj0gdGFyZ2V0IHx8IGRpciA9PT0gJ3ByZXYnICYmIGN1cnJlbnQgPD0gdGFyZ2V0O1xuICB9O1xuXG4gIGNvbnN0IGFuaW1hdGUgPSAoKSA9PiB7XG4gICAgdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gICAgaWYgKHN0YXJ0VGltZSA9PT0gbnVsbCkge1xuICAgICAgc3RhcnRUaW1lID0gdGltZTtcbiAgICB9XG5cbiAgICBjb25zdCBwcm9ncmVzcyA9IE1hdGgubWF4KE1hdGgubWluKCh0aW1lIC0gc3RhcnRUaW1lKSAvIGR1cmF0aW9uLCAxKSwgMCk7XG4gICAgY29uc3QgZWFzZVByb2dyZXNzID0gMC41IC0gTWF0aC5jb3MocHJvZ3Jlc3MgKiBNYXRoLlBJKSAvIDI7XG4gICAgbGV0IGN1cnJlbnRQb3NpdGlvbiA9IHN0YXJ0UG9zaXRpb24gKyBlYXNlUHJvZ3Jlc3MgKiAodGFyZ2V0UG9zaXRpb24gLSBzdGFydFBvc2l0aW9uKTtcblxuICAgIGlmIChpc091dE9mQm91bmQoY3VycmVudFBvc2l0aW9uLCB0YXJnZXRQb3NpdGlvbikpIHtcbiAgICAgIGN1cnJlbnRQb3NpdGlvbiA9IHRhcmdldFBvc2l0aW9uO1xuICAgIH1cblxuICAgIHN3aXBlci53cmFwcGVyRWwuc2Nyb2xsVG8oe1xuICAgICAgW3NpZGVdOiBjdXJyZW50UG9zaXRpb25cbiAgICB9KTtcblxuICAgIGlmIChpc091dE9mQm91bmQoY3VycmVudFBvc2l0aW9uLCB0YXJnZXRQb3NpdGlvbikpIHtcbiAgICAgIHN3aXBlci53cmFwcGVyRWwuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgIHN3aXBlci53cmFwcGVyRWwuc3R5bGUuc2Nyb2xsU25hcFR5cGUgPSAnJztcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzd2lwZXIud3JhcHBlckVsLnN0eWxlLm92ZXJmbG93ID0gJyc7XG4gICAgICAgIHN3aXBlci53cmFwcGVyRWwuc2Nyb2xsVG8oe1xuICAgICAgICAgIFtzaWRlXTogY3VycmVudFBvc2l0aW9uXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoc3dpcGVyLmNzc01vZGVGcmFtZUlEKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzd2lwZXIuY3NzTW9kZUZyYW1lSUQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICB9O1xuXG4gIGFuaW1hdGUoKTtcbn1cblxuZXhwb3J0IHsgYW5pbWF0ZUNTU01vZGVTY3JvbGwsIGRlbGV0ZVByb3BzLCBuZXh0VGljaywgbm93LCBnZXRUcmFuc2xhdGUsIGlzT2JqZWN0LCBleHRlbmQsIGdldENvbXB1dGVkU3R5bGUsIHNldENTU1Byb3BlcnR5IH07IiwiLyoqXG4gKiBTd2lwZXIgNy4wLjhcbiAqIE1vc3QgbW9kZXJuIG1vYmlsZSB0b3VjaCBzbGlkZXIgYW5kIGZyYW1ld29yayB3aXRoIGhhcmR3YXJlIGFjY2VsZXJhdGVkIHRyYW5zaXRpb25zXG4gKiBodHRwczovL3N3aXBlcmpzLmNvbVxuICpcbiAqIENvcHlyaWdodCAyMDE0LTIwMjEgVmxhZGltaXIgS2hhcmxhbXBpZGlcbiAqXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2VcbiAqXG4gKiBSZWxlYXNlZCBvbjogT2N0b2JlciA0LCAyMDIxXG4gKi9cblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTd2lwZXIsIGRlZmF1bHQgfSBmcm9tICcuL2NvcmUvY29yZS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFZpcnR1YWwgfSBmcm9tICcuL21vZHVsZXMvdmlydHVhbC92aXJ0dWFsLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgS2V5Ym9hcmQgfSBmcm9tICcuL21vZHVsZXMva2V5Ym9hcmQva2V5Ym9hcmQuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNb3VzZXdoZWVsIH0gZnJvbSAnLi9tb2R1bGVzL21vdXNld2hlZWwvbW91c2V3aGVlbC5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE5hdmlnYXRpb24gfSBmcm9tICcuL21vZHVsZXMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUGFnaW5hdGlvbiB9IGZyb20gJy4vbW9kdWxlcy9wYWdpbmF0aW9uL3BhZ2luYXRpb24uanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTY3JvbGxiYXIgfSBmcm9tICcuL21vZHVsZXMvc2Nyb2xsYmFyL3Njcm9sbGJhci5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFBhcmFsbGF4IH0gZnJvbSAnLi9tb2R1bGVzL3BhcmFsbGF4L3BhcmFsbGF4LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgWm9vbSB9IGZyb20gJy4vbW9kdWxlcy96b29tL3pvb20uanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMYXp5IH0gZnJvbSAnLi9tb2R1bGVzL2xhenkvbGF6eS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENvbnRyb2xsZXIgfSBmcm9tICcuL21vZHVsZXMvY29udHJvbGxlci9jb250cm9sbGVyLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQTExeSB9IGZyb20gJy4vbW9kdWxlcy9hMTF5L2ExMXkuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBIaXN0b3J5IH0gZnJvbSAnLi9tb2R1bGVzL2hpc3RvcnkvaGlzdG9yeS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEhhc2hOYXZpZ2F0aW9uIH0gZnJvbSAnLi9tb2R1bGVzL2hhc2gtbmF2aWdhdGlvbi9oYXNoLW5hdmlnYXRpb24uanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBBdXRvcGxheSB9IGZyb20gJy4vbW9kdWxlcy9hdXRvcGxheS9hdXRvcGxheS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRodW1icyB9IGZyb20gJy4vbW9kdWxlcy90aHVtYnMvdGh1bWJzLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRnJlZU1vZGUgfSBmcm9tICcuL21vZHVsZXMvZnJlZS1tb2RlL2ZyZWUtbW9kZS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEdyaWQgfSBmcm9tICcuL21vZHVsZXMvZ3JpZC9ncmlkLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWFuaXB1bGF0aW9uIH0gZnJvbSAnLi9tb2R1bGVzL21hbmlwdWxhdGlvbi9tYW5pcHVsYXRpb24uanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBFZmZlY3RGYWRlIH0gZnJvbSAnLi9tb2R1bGVzL2VmZmVjdC1mYWRlL2VmZmVjdC1mYWRlLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRWZmZWN0Q3ViZSB9IGZyb20gJy4vbW9kdWxlcy9lZmZlY3QtY3ViZS9lZmZlY3QtY3ViZS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEVmZmVjdEZsaXAgfSBmcm9tICcuL21vZHVsZXMvZWZmZWN0LWZsaXAvZWZmZWN0LWZsaXAuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBFZmZlY3RDb3ZlcmZsb3cgfSBmcm9tICcuL21vZHVsZXMvZWZmZWN0LWNvdmVyZmxvdy9lZmZlY3QtY292ZXJmbG93LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRWZmZWN0Q3JlYXRpdmUgfSBmcm9tICcuL21vZHVsZXMvZWZmZWN0LWNyZWF0aXZlL2VmZmVjdC1jcmVhdGl2ZS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEVmZmVjdENhcmRzIH0gZnJvbSAnLi9tb2R1bGVzL2VmZmVjdC1jYXJkcy9lZmZlY3QtY2FyZHMuanMnOyIsImltcG9ydCBTd2lwZXIsIHsgTmF2aWdhdGlvbiwgUGFnaW5hdGlvbiwgUGFyYWxsYXgsIEF1dG9wbGF5IH0gZnJvbSBcInN3aXBlclwiO1xuLy8gY29uZmlndXJlIFN3aXBlciB0byB1c2UgbW9kdWxlc1xuU3dpcGVyLnVzZShbTmF2aWdhdGlvbiwgUGFnaW5hdGlvbiwgUGFyYWxsYXgsIEF1dG9wbGF5XSk7XG4vLyBpbXBvcnQgU3dpcGVyIHN0eWxlc1xuaW1wb3J0IFwic3dpcGVyL2Nzcy9idW5kbGVcIjtcbi8vaW1wb3J0IFwiLi4vLi4vc2Nzcy9vcmdhbmlzbWUvc2VjdGlvbnMvc3dpcGVyLWJpZy12My5zY3NzXCI7XG5cbi8qKlxuICogLS1cbiAqL1xudmFyIG15U3dpcGVyID0gbmV3IFN3aXBlcihcIi5zd2lwZXItYmlnLXYzXCIsIHtcbiAgZGlyZWN0aW9uOiBcImhvcml6b250YWxcIixcbiAgbG9vcDogdHJ1ZSxcbiAgcGFnaW5hdGlvbjogeyBlbDogXCIuc3dpcGVyLXBhZ2luYXRpb25cIiwgdHlwZTogXCJidWxsZXRzXCIsIGNsaWNrYWJsZTogdHJ1ZSB9LFxuICAvL2dyYWJDdXJzb3I6IHRydWUsXG4gIHNwZWVkOiAxMDAwLFxuICBwYXJhbGxheDogdHJ1ZSxcbiAgLy9lZmZlY3Q6IFwic2xpZGVcIixcbiAgLy9tb3VzZXdoZWVsQ29udHJvbDogMSxcbiAgYXV0b3BsYXk6IHtcbiAgICBkZWxheTogODAwMCxcbiAgfSxcbiAgLy9hdXRvcGxheTogZmFsc2UsXG59KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIkBzdGVwaGFuZTg4OC93YnUtYXRvbWlxdWUvanMvc3dpcGVyL3N3aXBlci1iaWctdjMuanNcIjtcbmltcG9ydCBcIkBzdGVwaGFuZTg4OC93YnUtYXRvbWlxdWUvc2Nzcy9vcmdhbmlzbWUvc2VjdGlvbnMvc3dpcGVyLWJpZy12My5zY3NzXCI7XG4iXSwic291cmNlUm9vdCI6IiJ9