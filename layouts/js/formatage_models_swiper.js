/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/dom7/dom7.esm.js":
/*!***************************************!*\
  !*** ./node_modules/dom7/dom7.esm.js ***!
  \***************************************/
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
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
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

/***/ "./node_modules/swiper/swiper-bundle.min.css":
/*!***************************************************!*\
  !*** ./node_modules/swiper/swiper-bundle.min.css ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/sections/formatage_models_swiper.scss":
/*!********************************************************!*\
  !*** ./src/scss/sections/formatage_models_swiper.scss ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/ssr-window/ssr-window.esm.js":
/*!***************************************************!*\
  !*** ./node_modules/ssr-window/ssr-window.esm.js ***!
  \***************************************************/
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

/***/ "./node_modules/swiper/core/breakpoints/getBreakpoint.js":
/*!***************************************************************!*\
  !*** ./node_modules/swiper/core/breakpoints/getBreakpoint.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getBreakpoint; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");

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

/***/ "./node_modules/swiper/core/breakpoints/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/swiper/core/breakpoints/index.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setBreakpoint_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setBreakpoint.js */ "./node_modules/swiper/core/breakpoints/setBreakpoint.js");
/* harmony import */ var _getBreakpoint_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getBreakpoint.js */ "./node_modules/swiper/core/breakpoints/getBreakpoint.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  setBreakpoint: _setBreakpoint_js__WEBPACK_IMPORTED_MODULE_0__.default,
  getBreakpoint: _getBreakpoint_js__WEBPACK_IMPORTED_MODULE_1__.default
});

/***/ }),

/***/ "./node_modules/swiper/core/breakpoints/setBreakpoint.js":
/*!***************************************************************!*\
  !*** ./node_modules/swiper/core/breakpoints/setBreakpoint.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ setBreakpoint; }
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");


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

/***/ "./node_modules/swiper/core/check-overflow/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/swiper/core/check-overflow/index.js ***!
  \**********************************************************/
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

/***/ "./node_modules/swiper/core/classes/addClasses.js":
/*!********************************************************!*\
  !*** ./node_modules/swiper/core/classes/addClasses.js ***!
  \********************************************************/
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

/***/ "./node_modules/swiper/core/classes/index.js":
/*!***************************************************!*\
  !*** ./node_modules/swiper/core/classes/index.js ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addClasses_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addClasses.js */ "./node_modules/swiper/core/classes/addClasses.js");
/* harmony import */ var _removeClasses_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./removeClasses.js */ "./node_modules/swiper/core/classes/removeClasses.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  addClasses: _addClasses_js__WEBPACK_IMPORTED_MODULE_0__.default,
  removeClasses: _removeClasses_js__WEBPACK_IMPORTED_MODULE_1__.default
});

/***/ }),

/***/ "./node_modules/swiper/core/classes/removeClasses.js":
/*!***********************************************************!*\
  !*** ./node_modules/swiper/core/classes/removeClasses.js ***!
  \***********************************************************/
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

/***/ "./node_modules/swiper/core/core.js":
/*!******************************************!*\
  !*** ./node_modules/swiper/core/core.js ***!
  \******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/dom.js */ "./node_modules/swiper/shared/dom.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/swiper/shared/utils.js");
/* harmony import */ var _shared_get_support_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/get-support.js */ "./node_modules/swiper/shared/get-support.js");
/* harmony import */ var _shared_get_device_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/get-device.js */ "./node_modules/swiper/shared/get-device.js");
/* harmony import */ var _shared_get_browser_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/get-browser.js */ "./node_modules/swiper/shared/get-browser.js");
/* harmony import */ var _modules_resize_resize_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/resize/resize.js */ "./node_modules/swiper/core/modules/resize/resize.js");
/* harmony import */ var _modules_observer_observer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/observer/observer.js */ "./node_modules/swiper/core/modules/observer/observer.js");
/* harmony import */ var _events_emitter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./events-emitter.js */ "./node_modules/swiper/core/events-emitter.js");
/* harmony import */ var _update_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./update/index.js */ "./node_modules/swiper/core/update/index.js");
/* harmony import */ var _translate_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./translate/index.js */ "./node_modules/swiper/core/translate/index.js");
/* harmony import */ var _transition_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./transition/index.js */ "./node_modules/swiper/core/transition/index.js");
/* harmony import */ var _slide_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./slide/index.js */ "./node_modules/swiper/core/slide/index.js");
/* harmony import */ var _loop_index_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./loop/index.js */ "./node_modules/swiper/core/loop/index.js");
/* harmony import */ var _grab_cursor_index_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./grab-cursor/index.js */ "./node_modules/swiper/core/grab-cursor/index.js");
/* harmony import */ var _events_index_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./events/index.js */ "./node_modules/swiper/core/events/index.js");
/* harmony import */ var _breakpoints_index_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./breakpoints/index.js */ "./node_modules/swiper/core/breakpoints/index.js");
/* harmony import */ var _classes_index_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./classes/index.js */ "./node_modules/swiper/core/classes/index.js");
/* harmony import */ var _images_index_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./images/index.js */ "./node_modules/swiper/core/images/index.js");
/* harmony import */ var _check_overflow_index_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./check-overflow/index.js */ "./node_modules/swiper/core/check-overflow/index.js");
/* harmony import */ var _defaults_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./defaults.js */ "./node_modules/swiper/core/defaults.js");
/* harmony import */ var _moduleExtendParams_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./moduleExtendParams.js */ "./node_modules/swiper/core/moduleExtendParams.js");
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

/***/ "./node_modules/swiper/core/defaults.js":
/*!**********************************************!*\
  !*** ./node_modules/swiper/core/defaults.js ***!
  \**********************************************/
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

/***/ "./node_modules/swiper/core/events-emitter.js":
/*!****************************************************!*\
  !*** ./node_modules/swiper/core/events-emitter.js ***!
  \****************************************************/
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

/***/ "./node_modules/swiper/core/events/index.js":
/*!**************************************************!*\
  !*** ./node_modules/swiper/core/events/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _onTouchStart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onTouchStart.js */ "./node_modules/swiper/core/events/onTouchStart.js");
/* harmony import */ var _onTouchMove_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./onTouchMove.js */ "./node_modules/swiper/core/events/onTouchMove.js");
/* harmony import */ var _onTouchEnd_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./onTouchEnd.js */ "./node_modules/swiper/core/events/onTouchEnd.js");
/* harmony import */ var _onResize_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./onResize.js */ "./node_modules/swiper/core/events/onResize.js");
/* harmony import */ var _onClick_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./onClick.js */ "./node_modules/swiper/core/events/onClick.js");
/* harmony import */ var _onScroll_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./onScroll.js */ "./node_modules/swiper/core/events/onScroll.js");







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

/***/ "./node_modules/swiper/core/events/onClick.js":
/*!****************************************************!*\
  !*** ./node_modules/swiper/core/events/onClick.js ***!
  \****************************************************/
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

/***/ "./node_modules/swiper/core/events/onResize.js":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/core/events/onResize.js ***!
  \*****************************************************/
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

/***/ "./node_modules/swiper/core/events/onScroll.js":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/core/events/onScroll.js ***!
  \*****************************************************/
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

/***/ "./node_modules/swiper/core/events/onTouchEnd.js":
/*!*******************************************************!*\
  !*** ./node_modules/swiper/core/events/onTouchEnd.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ onTouchEnd; }
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");

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

/***/ "./node_modules/swiper/core/events/onTouchMove.js":
/*!********************************************************!*\
  !*** ./node_modules/swiper/core/events/onTouchMove.js ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ onTouchMove; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");



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

/***/ "./node_modules/swiper/core/events/onTouchStart.js":
/*!*********************************************************!*\
  !*** ./node_modules/swiper/core/events/onTouchStart.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ onTouchStart; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");


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

/***/ "./node_modules/swiper/core/grab-cursor/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/swiper/core/grab-cursor/index.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setGrabCursor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setGrabCursor.js */ "./node_modules/swiper/core/grab-cursor/setGrabCursor.js");
/* harmony import */ var _unsetGrabCursor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unsetGrabCursor.js */ "./node_modules/swiper/core/grab-cursor/unsetGrabCursor.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  setGrabCursor: _setGrabCursor_js__WEBPACK_IMPORTED_MODULE_0__.default,
  unsetGrabCursor: _unsetGrabCursor_js__WEBPACK_IMPORTED_MODULE_1__.default
});

/***/ }),

/***/ "./node_modules/swiper/core/grab-cursor/setGrabCursor.js":
/*!***************************************************************!*\
  !*** ./node_modules/swiper/core/grab-cursor/setGrabCursor.js ***!
  \***************************************************************/
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

/***/ "./node_modules/swiper/core/grab-cursor/unsetGrabCursor.js":
/*!*****************************************************************!*\
  !*** ./node_modules/swiper/core/grab-cursor/unsetGrabCursor.js ***!
  \*****************************************************************/
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

/***/ "./node_modules/swiper/core/images/index.js":
/*!**************************************************!*\
  !*** ./node_modules/swiper/core/images/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loadImage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadImage.js */ "./node_modules/swiper/core/images/loadImage.js");
/* harmony import */ var _preloadImages_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preloadImages.js */ "./node_modules/swiper/core/images/preloadImages.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  loadImage: _loadImage_js__WEBPACK_IMPORTED_MODULE_0__.default,
  preloadImages: _preloadImages_js__WEBPACK_IMPORTED_MODULE_1__.default
});

/***/ }),

/***/ "./node_modules/swiper/core/images/loadImage.js":
/*!******************************************************!*\
  !*** ./node_modules/swiper/core/images/loadImage.js ***!
  \******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ loadImage; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");


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

/***/ "./node_modules/swiper/core/images/preloadImages.js":
/*!**********************************************************!*\
  !*** ./node_modules/swiper/core/images/preloadImages.js ***!
  \**********************************************************/
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

/***/ "./node_modules/swiper/core/loop/index.js":
/*!************************************************!*\
  !*** ./node_modules/swiper/core/loop/index.js ***!
  \************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loopCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loopCreate.js */ "./node_modules/swiper/core/loop/loopCreate.js");
/* harmony import */ var _loopFix_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loopFix.js */ "./node_modules/swiper/core/loop/loopFix.js");
/* harmony import */ var _loopDestroy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loopDestroy.js */ "./node_modules/swiper/core/loop/loopDestroy.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  loopCreate: _loopCreate_js__WEBPACK_IMPORTED_MODULE_0__.default,
  loopFix: _loopFix_js__WEBPACK_IMPORTED_MODULE_1__.default,
  loopDestroy: _loopDestroy_js__WEBPACK_IMPORTED_MODULE_2__.default
});

/***/ }),

/***/ "./node_modules/swiper/core/loop/loopCreate.js":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/core/loop/loopCreate.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ loopCreate; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");


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

/***/ "./node_modules/swiper/core/loop/loopDestroy.js":
/*!******************************************************!*\
  !*** ./node_modules/swiper/core/loop/loopDestroy.js ***!
  \******************************************************/
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

/***/ "./node_modules/swiper/core/loop/loopFix.js":
/*!**************************************************!*\
  !*** ./node_modules/swiper/core/loop/loopFix.js ***!
  \**************************************************/
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

/***/ "./node_modules/swiper/core/moduleExtendParams.js":
/*!********************************************************!*\
  !*** ./node_modules/swiper/core/moduleExtendParams.js ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ moduleExtendParams; }
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/utils.js */ "./node_modules/swiper/shared/utils.js");

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

/***/ "./node_modules/swiper/core/modules/observer/observer.js":
/*!***************************************************************!*\
  !*** ./node_modules/swiper/core/modules/observer/observer.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Observer; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");

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

/***/ "./node_modules/swiper/core/modules/resize/resize.js":
/*!***********************************************************!*\
  !*** ./node_modules/swiper/core/modules/resize/resize.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Resize; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");

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

/***/ "./node_modules/swiper/core/slide/index.js":
/*!*************************************************!*\
  !*** ./node_modules/swiper/core/slide/index.js ***!
  \*************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _slideTo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slideTo.js */ "./node_modules/swiper/core/slide/slideTo.js");
/* harmony import */ var _slideToLoop_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slideToLoop.js */ "./node_modules/swiper/core/slide/slideToLoop.js");
/* harmony import */ var _slideNext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slideNext.js */ "./node_modules/swiper/core/slide/slideNext.js");
/* harmony import */ var _slidePrev_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slidePrev.js */ "./node_modules/swiper/core/slide/slidePrev.js");
/* harmony import */ var _slideReset_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slideReset.js */ "./node_modules/swiper/core/slide/slideReset.js");
/* harmony import */ var _slideToClosest_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slideToClosest.js */ "./node_modules/swiper/core/slide/slideToClosest.js");
/* harmony import */ var _slideToClickedSlide_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slideToClickedSlide.js */ "./node_modules/swiper/core/slide/slideToClickedSlide.js");







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

/***/ "./node_modules/swiper/core/slide/slideNext.js":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/core/slide/slideNext.js ***!
  \*****************************************************/
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

/***/ "./node_modules/swiper/core/slide/slidePrev.js":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/core/slide/slidePrev.js ***!
  \*****************************************************/
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

/***/ "./node_modules/swiper/core/slide/slideReset.js":
/*!******************************************************!*\
  !*** ./node_modules/swiper/core/slide/slideReset.js ***!
  \******************************************************/
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

/***/ "./node_modules/swiper/core/slide/slideTo.js":
/*!***************************************************!*\
  !*** ./node_modules/swiper/core/slide/slideTo.js ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ slideTo; }
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");

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
      }

      wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;

      if (isVirtual) {
        requestAnimationFrame(() => {
          swiper.wrapperEl.style.scrollSnapType = '';
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

/***/ "./node_modules/swiper/core/slide/slideToClickedSlide.js":
/*!***************************************************************!*\
  !*** ./node_modules/swiper/core/slide/slideToClickedSlide.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ slideToClickedSlide; }
/* harmony export */ });
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");


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

/***/ "./node_modules/swiper/core/slide/slideToClosest.js":
/*!**********************************************************!*\
  !*** ./node_modules/swiper/core/slide/slideToClosest.js ***!
  \**********************************************************/
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

/***/ "./node_modules/swiper/core/slide/slideToLoop.js":
/*!*******************************************************!*\
  !*** ./node_modules/swiper/core/slide/slideToLoop.js ***!
  \*******************************************************/
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

/***/ "./node_modules/swiper/core/transition/index.js":
/*!******************************************************!*\
  !*** ./node_modules/swiper/core/transition/index.js ***!
  \******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setTransition_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setTransition.js */ "./node_modules/swiper/core/transition/setTransition.js");
/* harmony import */ var _transitionStart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transitionStart.js */ "./node_modules/swiper/core/transition/transitionStart.js");
/* harmony import */ var _transitionEnd_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transitionEnd.js */ "./node_modules/swiper/core/transition/transitionEnd.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  setTransition: _setTransition_js__WEBPACK_IMPORTED_MODULE_0__.default,
  transitionStart: _transitionStart_js__WEBPACK_IMPORTED_MODULE_1__.default,
  transitionEnd: _transitionEnd_js__WEBPACK_IMPORTED_MODULE_2__.default
});

/***/ }),

/***/ "./node_modules/swiper/core/transition/setTransition.js":
/*!**************************************************************!*\
  !*** ./node_modules/swiper/core/transition/setTransition.js ***!
  \**************************************************************/
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

/***/ "./node_modules/swiper/core/transition/transitionEmit.js":
/*!***************************************************************!*\
  !*** ./node_modules/swiper/core/transition/transitionEmit.js ***!
  \***************************************************************/
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

/***/ "./node_modules/swiper/core/transition/transitionEnd.js":
/*!**************************************************************!*\
  !*** ./node_modules/swiper/core/transition/transitionEnd.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ transitionEnd; }
/* harmony export */ });
/* harmony import */ var _transitionEmit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transitionEmit.js */ "./node_modules/swiper/core/transition/transitionEmit.js");

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

/***/ "./node_modules/swiper/core/transition/transitionStart.js":
/*!****************************************************************!*\
  !*** ./node_modules/swiper/core/transition/transitionStart.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ transitionStart; }
/* harmony export */ });
/* harmony import */ var _transitionEmit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transitionEmit.js */ "./node_modules/swiper/core/transition/transitionEmit.js");

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

/***/ "./node_modules/swiper/core/translate/getTranslate.js":
/*!************************************************************!*\
  !*** ./node_modules/swiper/core/translate/getTranslate.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getSwiperTranslate; }
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");

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

/***/ "./node_modules/swiper/core/translate/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/core/translate/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getTranslate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getTranslate.js */ "./node_modules/swiper/core/translate/getTranslate.js");
/* harmony import */ var _setTranslate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setTranslate.js */ "./node_modules/swiper/core/translate/setTranslate.js");
/* harmony import */ var _minTranslate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./minTranslate.js */ "./node_modules/swiper/core/translate/minTranslate.js");
/* harmony import */ var _maxTranslate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maxTranslate.js */ "./node_modules/swiper/core/translate/maxTranslate.js");
/* harmony import */ var _translateTo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./translateTo.js */ "./node_modules/swiper/core/translate/translateTo.js");





/* harmony default export */ __webpack_exports__["default"] = ({
  getTranslate: _getTranslate_js__WEBPACK_IMPORTED_MODULE_0__.default,
  setTranslate: _setTranslate_js__WEBPACK_IMPORTED_MODULE_1__.default,
  minTranslate: _minTranslate_js__WEBPACK_IMPORTED_MODULE_2__.default,
  maxTranslate: _maxTranslate_js__WEBPACK_IMPORTED_MODULE_3__.default,
  translateTo: _translateTo_js__WEBPACK_IMPORTED_MODULE_4__.default
});

/***/ }),

/***/ "./node_modules/swiper/core/translate/maxTranslate.js":
/*!************************************************************!*\
  !*** ./node_modules/swiper/core/translate/maxTranslate.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ maxTranslate; }
/* harmony export */ });
function maxTranslate() {
  return -this.snapGrid[this.snapGrid.length - 1];
}

/***/ }),

/***/ "./node_modules/swiper/core/translate/minTranslate.js":
/*!************************************************************!*\
  !*** ./node_modules/swiper/core/translate/minTranslate.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ minTranslate; }
/* harmony export */ });
function minTranslate() {
  return -this.snapGrid[0];
}

/***/ }),

/***/ "./node_modules/swiper/core/translate/setTranslate.js":
/*!************************************************************!*\
  !*** ./node_modules/swiper/core/translate/setTranslate.js ***!
  \************************************************************/
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

/***/ "./node_modules/swiper/core/translate/translateTo.js":
/*!***********************************************************!*\
  !*** ./node_modules/swiper/core/translate/translateTo.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ translateTo; }
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");

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

/***/ "./node_modules/swiper/core/update/index.js":
/*!**************************************************!*\
  !*** ./node_modules/swiper/core/update/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _updateSize_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateSize.js */ "./node_modules/swiper/core/update/updateSize.js");
/* harmony import */ var _updateSlides_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateSlides.js */ "./node_modules/swiper/core/update/updateSlides.js");
/* harmony import */ var _updateAutoHeight_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updateAutoHeight.js */ "./node_modules/swiper/core/update/updateAutoHeight.js");
/* harmony import */ var _updateSlidesOffset_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updateSlidesOffset.js */ "./node_modules/swiper/core/update/updateSlidesOffset.js");
/* harmony import */ var _updateSlidesProgress_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./updateSlidesProgress.js */ "./node_modules/swiper/core/update/updateSlidesProgress.js");
/* harmony import */ var _updateProgress_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./updateProgress.js */ "./node_modules/swiper/core/update/updateProgress.js");
/* harmony import */ var _updateSlidesClasses_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./updateSlidesClasses.js */ "./node_modules/swiper/core/update/updateSlidesClasses.js");
/* harmony import */ var _updateActiveIndex_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./updateActiveIndex.js */ "./node_modules/swiper/core/update/updateActiveIndex.js");
/* harmony import */ var _updateClickedSlide_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./updateClickedSlide.js */ "./node_modules/swiper/core/update/updateClickedSlide.js");









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

/***/ "./node_modules/swiper/core/update/updateActiveIndex.js":
/*!**************************************************************!*\
  !*** ./node_modules/swiper/core/update/updateActiveIndex.js ***!
  \**************************************************************/
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

/***/ "./node_modules/swiper/core/update/updateAutoHeight.js":
/*!*************************************************************!*\
  !*** ./node_modules/swiper/core/update/updateAutoHeight.js ***!
  \*************************************************************/
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

/***/ "./node_modules/swiper/core/update/updateClickedSlide.js":
/*!***************************************************************!*\
  !*** ./node_modules/swiper/core/update/updateClickedSlide.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ updateClickedSlide; }
/* harmony export */ });
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");

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

/***/ "./node_modules/swiper/core/update/updateProgress.js":
/*!***********************************************************!*\
  !*** ./node_modules/swiper/core/update/updateProgress.js ***!
  \***********************************************************/
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

/***/ "./node_modules/swiper/core/update/updateSize.js":
/*!*******************************************************!*\
  !*** ./node_modules/swiper/core/update/updateSize.js ***!
  \*******************************************************/
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

/***/ "./node_modules/swiper/core/update/updateSlides.js":
/*!*********************************************************!*\
  !*** ./node_modules/swiper/core/update/updateSlides.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ updateSlides; }
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");

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

/***/ "./node_modules/swiper/core/update/updateSlidesClasses.js":
/*!****************************************************************!*\
  !*** ./node_modules/swiper/core/update/updateSlidesClasses.js ***!
  \****************************************************************/
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

/***/ "./node_modules/swiper/core/update/updateSlidesOffset.js":
/*!***************************************************************!*\
  !*** ./node_modules/swiper/core/update/updateSlidesOffset.js ***!
  \***************************************************************/
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

/***/ "./node_modules/swiper/core/update/updateSlidesProgress.js":
/*!*****************************************************************!*\
  !*** ./node_modules/swiper/core/update/updateSlidesProgress.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ updateSlidesProgress; }
/* harmony export */ });
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");

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

/***/ "./node_modules/swiper/modules/a11y/a11y.js":
/*!**************************************************!*\
  !*** ./node_modules/swiper/modules/a11y/a11y.js ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ A11y; }
/* harmony export */ });
/* harmony import */ var _shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/classes-to-selector.js */ "./node_modules/swiper/shared/classes-to-selector.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");


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

/***/ "./node_modules/swiper/modules/autoplay/autoplay.js":
/*!**********************************************************!*\
  !*** ./node_modules/swiper/modules/autoplay/autoplay.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Autoplay; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");
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

/***/ "./node_modules/swiper/modules/controller/controller.js":
/*!**************************************************************!*\
  !*** ./node_modules/swiper/modules/controller/controller.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Controller; }
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");
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

/***/ "./node_modules/swiper/modules/effect-cards/effect-cards.js":
/*!******************************************************************!*\
  !*** ./node_modules/swiper/modules/effect-cards/effect-cards.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ EffectCards; }
/* harmony export */ });
/* harmony import */ var _shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/create-shadow.js */ "./node_modules/swiper/shared/create-shadow.js");
/* harmony import */ var _shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/effect-init.js */ "./node_modules/swiper/shared/effect-init.js");
/* harmony import */ var _shared_effect_target_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/effect-target.js */ "./node_modules/swiper/shared/effect-target.js");
/* harmony import */ var _shared_effect_virtual_transition_end_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/effect-virtual-transition-end.js */ "./node_modules/swiper/shared/effect-virtual-transition-end.js");




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

/***/ "./node_modules/swiper/modules/effect-coverflow/effect-coverflow.js":
/*!**************************************************************************!*\
  !*** ./node_modules/swiper/modules/effect-coverflow/effect-coverflow.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ EffectCoverflow; }
/* harmony export */ });
/* harmony import */ var _shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/create-shadow.js */ "./node_modules/swiper/shared/create-shadow.js");
/* harmony import */ var _shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/effect-init.js */ "./node_modules/swiper/shared/effect-init.js");
/* harmony import */ var _shared_effect_target_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/effect-target.js */ "./node_modules/swiper/shared/effect-target.js");



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

/***/ "./node_modules/swiper/modules/effect-creative/effect-creative.js":
/*!************************************************************************!*\
  !*** ./node_modules/swiper/modules/effect-creative/effect-creative.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ EffectCreative; }
/* harmony export */ });
/* harmony import */ var _shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/create-shadow.js */ "./node_modules/swiper/shared/create-shadow.js");
/* harmony import */ var _shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/effect-init.js */ "./node_modules/swiper/shared/effect-init.js");
/* harmony import */ var _shared_effect_target_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/effect-target.js */ "./node_modules/swiper/shared/effect-target.js");
/* harmony import */ var _shared_effect_virtual_transition_end_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/effect-virtual-transition-end.js */ "./node_modules/swiper/shared/effect-virtual-transition-end.js");




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

/***/ "./node_modules/swiper/modules/effect-cube/effect-cube.js":
/*!****************************************************************!*\
  !*** ./node_modules/swiper/modules/effect-cube/effect-cube.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ EffectCube; }
/* harmony export */ });
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");
/* harmony import */ var _shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/effect-init.js */ "./node_modules/swiper/shared/effect-init.js");


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

/***/ "./node_modules/swiper/modules/effect-fade/effect-fade.js":
/*!****************************************************************!*\
  !*** ./node_modules/swiper/modules/effect-fade/effect-fade.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ EffectFade; }
/* harmony export */ });
/* harmony import */ var _shared_effect_init_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/effect-init.js */ "./node_modules/swiper/shared/effect-init.js");
/* harmony import */ var _shared_effect_target_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/effect-target.js */ "./node_modules/swiper/shared/effect-target.js");
/* harmony import */ var _shared_effect_virtual_transition_end_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/effect-virtual-transition-end.js */ "./node_modules/swiper/shared/effect-virtual-transition-end.js");



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

/***/ "./node_modules/swiper/modules/effect-flip/effect-flip.js":
/*!****************************************************************!*\
  !*** ./node_modules/swiper/modules/effect-flip/effect-flip.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ EffectFlip; }
/* harmony export */ });
/* harmony import */ var _shared_create_shadow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/create-shadow.js */ "./node_modules/swiper/shared/create-shadow.js");
/* harmony import */ var _shared_effect_init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/effect-init.js */ "./node_modules/swiper/shared/effect-init.js");
/* harmony import */ var _shared_effect_target_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/effect-target.js */ "./node_modules/swiper/shared/effect-target.js");
/* harmony import */ var _shared_effect_virtual_transition_end_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/effect-virtual-transition-end.js */ "./node_modules/swiper/shared/effect-virtual-transition-end.js");




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

/***/ "./node_modules/swiper/modules/free-mode/free-mode.js":
/*!************************************************************!*\
  !*** ./node_modules/swiper/modules/free-mode/free-mode.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ freeMode; }
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");

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

/***/ "./node_modules/swiper/modules/grid/grid.js":
/*!**************************************************!*\
  !*** ./node_modules/swiper/modules/grid/grid.js ***!
  \**************************************************/
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

/***/ "./node_modules/swiper/modules/hash-navigation/hash-navigation.js":
/*!************************************************************************!*\
  !*** ./node_modules/swiper/modules/hash-navigation/hash-navigation.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ HashNavigation; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");


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

/***/ "./node_modules/swiper/modules/history/history.js":
/*!********************************************************!*\
  !*** ./node_modules/swiper/modules/history/history.js ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ History; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");

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

/***/ "./node_modules/swiper/modules/keyboard/keyboard.js":
/*!**********************************************************!*\
  !*** ./node_modules/swiper/modules/keyboard/keyboard.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Keyboard; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");
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

/***/ "./node_modules/swiper/modules/lazy/lazy.js":
/*!**************************************************!*\
  !*** ./node_modules/swiper/modules/lazy/lazy.js ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Lazy; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");


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

/***/ "./node_modules/swiper/modules/manipulation/manipulation.js":
/*!******************************************************************!*\
  !*** ./node_modules/swiper/modules/manipulation/manipulation.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Manipulation; }
/* harmony export */ });
/* harmony import */ var _methods_appendSlide_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./methods/appendSlide.js */ "./node_modules/swiper/modules/manipulation/methods/appendSlide.js");
/* harmony import */ var _methods_prependSlide_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./methods/prependSlide.js */ "./node_modules/swiper/modules/manipulation/methods/prependSlide.js");
/* harmony import */ var _methods_addSlide_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./methods/addSlide.js */ "./node_modules/swiper/modules/manipulation/methods/addSlide.js");
/* harmony import */ var _methods_removeSlide_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./methods/removeSlide.js */ "./node_modules/swiper/modules/manipulation/methods/removeSlide.js");
/* harmony import */ var _methods_removeAllSlides_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./methods/removeAllSlides.js */ "./node_modules/swiper/modules/manipulation/methods/removeAllSlides.js");





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

/***/ "./node_modules/swiper/modules/manipulation/methods/addSlide.js":
/*!**********************************************************************!*\
  !*** ./node_modules/swiper/modules/manipulation/methods/addSlide.js ***!
  \**********************************************************************/
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

/***/ "./node_modules/swiper/modules/manipulation/methods/appendSlide.js":
/*!*************************************************************************!*\
  !*** ./node_modules/swiper/modules/manipulation/methods/appendSlide.js ***!
  \*************************************************************************/
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

/***/ "./node_modules/swiper/modules/manipulation/methods/prependSlide.js":
/*!**************************************************************************!*\
  !*** ./node_modules/swiper/modules/manipulation/methods/prependSlide.js ***!
  \**************************************************************************/
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

/***/ "./node_modules/swiper/modules/manipulation/methods/removeAllSlides.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/swiper/modules/manipulation/methods/removeAllSlides.js ***!
  \*****************************************************************************/
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

/***/ "./node_modules/swiper/modules/manipulation/methods/removeSlide.js":
/*!*************************************************************************!*\
  !*** ./node_modules/swiper/modules/manipulation/methods/removeSlide.js ***!
  \*************************************************************************/
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

/***/ "./node_modules/swiper/modules/mousewheel/mousewheel.js":
/*!**************************************************************!*\
  !*** ./node_modules/swiper/modules/mousewheel/mousewheel.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Mousewheel; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");
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

/***/ "./node_modules/swiper/modules/navigation/navigation.js":
/*!**************************************************************!*\
  !*** ./node_modules/swiper/modules/navigation/navigation.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Navigation; }
/* harmony export */ });
/* harmony import */ var _shared_create_element_if_not_defined_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/create-element-if-not-defined.js */ "./node_modules/swiper/shared/create-element-if-not-defined.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");


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

/***/ "./node_modules/swiper/modules/pagination/pagination.js":
/*!**************************************************************!*\
  !*** ./node_modules/swiper/modules/pagination/pagination.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Pagination; }
/* harmony export */ });
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");
/* harmony import */ var _shared_classes_to_selector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/classes-to-selector.js */ "./node_modules/swiper/shared/classes-to-selector.js");
/* harmony import */ var _shared_create_element_if_not_defined_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/create-element-if-not-defined.js */ "./node_modules/swiper/shared/create-element-if-not-defined.js");



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

/***/ "./node_modules/swiper/modules/parallax/parallax.js":
/*!**********************************************************!*\
  !*** ./node_modules/swiper/modules/parallax/parallax.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Parallax; }
/* harmony export */ });
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");

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

/***/ "./node_modules/swiper/modules/scrollbar/scrollbar.js":
/*!************************************************************!*\
  !*** ./node_modules/swiper/modules/scrollbar/scrollbar.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Scrollbar; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");
/* harmony import */ var _shared_create_element_if_not_defined_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/create-element-if-not-defined.js */ "./node_modules/swiper/shared/create-element-if-not-defined.js");




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

/***/ "./node_modules/swiper/modules/thumbs/thumbs.js":
/*!******************************************************!*\
  !*** ./node_modules/swiper/modules/thumbs/thumbs.js ***!
  \******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Thumb; }
/* harmony export */ });
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");


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

/***/ "./node_modules/swiper/modules/virtual/virtual.js":
/*!********************************************************!*\
  !*** ./node_modules/swiper/modules/virtual/virtual.js ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Virtual; }
/* harmony export */ });
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");


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
    swiper.updateActiveIndex();
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
          $cachedEl.attr('data-swiper-slide-index', parseInt(cachedElIndex, 10) + 1);
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
    update();
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

/***/ "./node_modules/swiper/modules/zoom/zoom.js":
/*!**************************************************!*\
  !*** ./node_modules/swiper/modules/zoom/zoom.js ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Zoom; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _shared_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/dom.js */ "./node_modules/swiper/shared/dom.js");
/* harmony import */ var _shared_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils.js */ "./node_modules/swiper/shared/utils.js");



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

/***/ "./node_modules/swiper/shared/classes-to-selector.js":
/*!***********************************************************!*\
  !*** ./node_modules/swiper/shared/classes-to-selector.js ***!
  \***********************************************************/
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

/***/ "./node_modules/swiper/shared/create-element-if-not-defined.js":
/*!*********************************************************************!*\
  !*** ./node_modules/swiper/shared/create-element-if-not-defined.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createElementIfNotDefined; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");

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

/***/ "./node_modules/swiper/shared/create-shadow.js":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/shared/create-shadow.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createShadow; }
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/swiper/shared/dom.js");

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

/***/ "./node_modules/swiper/shared/dom.js":
/*!*******************************************!*\
  !*** ./node_modules/swiper/shared/dom.js ***!
  \*******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dom7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dom7 */ "./node_modules/dom7/dom7.esm.js");

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

/***/ "./node_modules/swiper/shared/effect-init.js":
/*!***************************************************!*\
  !*** ./node_modules/swiper/shared/effect-init.js ***!
  \***************************************************/
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

/***/ "./node_modules/swiper/shared/effect-target.js":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/shared/effect-target.js ***!
  \*****************************************************/
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

/***/ "./node_modules/swiper/shared/effect-virtual-transition-end.js":
/*!*********************************************************************!*\
  !*** ./node_modules/swiper/shared/effect-virtual-transition-end.js ***!
  \*********************************************************************/
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

/***/ "./node_modules/swiper/shared/get-browser.js":
/*!***************************************************!*\
  !*** ./node_modules/swiper/shared/get-browser.js ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBrowser": function() { return /* binding */ getBrowser; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");

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

/***/ "./node_modules/swiper/shared/get-device.js":
/*!**************************************************!*\
  !*** ./node_modules/swiper/shared/get-device.js ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDevice": function() { return /* binding */ getDevice; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _get_support_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-support.js */ "./node_modules/swiper/shared/get-support.js");


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

/***/ "./node_modules/swiper/shared/get-support.js":
/*!***************************************************!*\
  !*** ./node_modules/swiper/shared/get-support.js ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSupport": function() { return /* binding */ getSupport; }
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");

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

/***/ "./node_modules/swiper/shared/utils.js":
/*!*********************************************!*\
  !*** ./node_modules/swiper/shared/utils.js ***!
  \*********************************************/
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
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");


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

/***/ "./node_modules/swiper/swiper.esm.js":
/*!*******************************************!*\
  !*** ./node_modules/swiper/swiper.esm.js ***!
  \*******************************************/
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
/* harmony import */ var _core_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/core.js */ "./node_modules/swiper/core/core.js");
/* harmony import */ var _modules_virtual_virtual_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/virtual/virtual.js */ "./node_modules/swiper/modules/virtual/virtual.js");
/* harmony import */ var _modules_keyboard_keyboard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/keyboard/keyboard.js */ "./node_modules/swiper/modules/keyboard/keyboard.js");
/* harmony import */ var _modules_mousewheel_mousewheel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/mousewheel/mousewheel.js */ "./node_modules/swiper/modules/mousewheel/mousewheel.js");
/* harmony import */ var _modules_navigation_navigation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/navigation/navigation.js */ "./node_modules/swiper/modules/navigation/navigation.js");
/* harmony import */ var _modules_pagination_pagination_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/pagination/pagination.js */ "./node_modules/swiper/modules/pagination/pagination.js");
/* harmony import */ var _modules_scrollbar_scrollbar_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/scrollbar/scrollbar.js */ "./node_modules/swiper/modules/scrollbar/scrollbar.js");
/* harmony import */ var _modules_parallax_parallax_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/parallax/parallax.js */ "./node_modules/swiper/modules/parallax/parallax.js");
/* harmony import */ var _modules_zoom_zoom_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/zoom/zoom.js */ "./node_modules/swiper/modules/zoom/zoom.js");
/* harmony import */ var _modules_lazy_lazy_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/lazy/lazy.js */ "./node_modules/swiper/modules/lazy/lazy.js");
/* harmony import */ var _modules_controller_controller_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/controller/controller.js */ "./node_modules/swiper/modules/controller/controller.js");
/* harmony import */ var _modules_a11y_a11y_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/a11y/a11y.js */ "./node_modules/swiper/modules/a11y/a11y.js");
/* harmony import */ var _modules_history_history_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/history/history.js */ "./node_modules/swiper/modules/history/history.js");
/* harmony import */ var _modules_hash_navigation_hash_navigation_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/hash-navigation/hash-navigation.js */ "./node_modules/swiper/modules/hash-navigation/hash-navigation.js");
/* harmony import */ var _modules_autoplay_autoplay_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/autoplay/autoplay.js */ "./node_modules/swiper/modules/autoplay/autoplay.js");
/* harmony import */ var _modules_thumbs_thumbs_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/thumbs/thumbs.js */ "./node_modules/swiper/modules/thumbs/thumbs.js");
/* harmony import */ var _modules_free_mode_free_mode_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/free-mode/free-mode.js */ "./node_modules/swiper/modules/free-mode/free-mode.js");
/* harmony import */ var _modules_grid_grid_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modules/grid/grid.js */ "./node_modules/swiper/modules/grid/grid.js");
/* harmony import */ var _modules_manipulation_manipulation_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modules/manipulation/manipulation.js */ "./node_modules/swiper/modules/manipulation/manipulation.js");
/* harmony import */ var _modules_effect_fade_effect_fade_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modules/effect-fade/effect-fade.js */ "./node_modules/swiper/modules/effect-fade/effect-fade.js");
/* harmony import */ var _modules_effect_cube_effect_cube_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./modules/effect-cube/effect-cube.js */ "./node_modules/swiper/modules/effect-cube/effect-cube.js");
/* harmony import */ var _modules_effect_flip_effect_flip_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modules/effect-flip/effect-flip.js */ "./node_modules/swiper/modules/effect-flip/effect-flip.js");
/* harmony import */ var _modules_effect_coverflow_effect_coverflow_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modules/effect-coverflow/effect-coverflow.js */ "./node_modules/swiper/modules/effect-coverflow/effect-coverflow.js");
/* harmony import */ var _modules_effect_creative_effect_creative_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./modules/effect-creative/effect-creative.js */ "./node_modules/swiper/modules/effect-creative/effect-creative.js");
/* harmony import */ var _modules_effect_cards_effect_cards_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./modules/effect-cards/effect-cards.js */ "./node_modules/swiper/modules/effect-cards/effect-cards.js");
/**
 * Swiper 7.0.6
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2021 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: September 16, 2021
 */



























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
/*!****************************************************!*\
  !*** ./src/js/sections/formatage_models_swiper.js ***!
  \****************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var swiper_css_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/css/bundle */ "./node_modules/swiper/swiper-bundle.min.css");
/* harmony import */ var _scss_sections_formatage_models_swiper_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../scss/sections/formatage_models_swiper.scss */ "./src/scss/sections/formatage_models_swiper.scss");
// import Swiper JS
// import Swiper from "swiper/bundle";
//--
 // configure Swiper to use modules

swiper__WEBPACK_IMPORTED_MODULE_0__.default.use([swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_0__.Parallax, swiper__WEBPACK_IMPORTED_MODULE_0__.Autoplay]); // import Swiper styles

 //custom style


/**
 * --
 */

var mySwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__.default(".swiper", {
  direction: "vertical",
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
  }
});
/**
 * --
 */
// const swiper = new Swiper(".swiper", {
//   // Optional parameters
//   direction: "vertical",
//   loop: true,
//   // If we need pagination
//   pagination: {
//     el: ".swiper-pagination",
//   },
//   // Navigation arrows
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   // And if we need scrollbar
//   scrollbar: {
//     el: ".swiper-scrollbar",
//   },
// });
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4vbm9kZV9tb2R1bGVzL2RvbTcvZG9tNy5lc20uanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uL25vZGVfbW9kdWxlcy9zd2lwZXIvc3dpcGVyLWJ1bmRsZS5taW4uY3NzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi9zcmMvc2Nzcy9zZWN0aW9ucy9mb3JtYXRhZ2VfbW9kZWxzX3N3aXBlci5zY3NzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi9ub2RlX21vZHVsZXMvc3NyLXdpbmRvdy9zc3Itd2luZG93LmVzbS5qcyIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9jb3JlL2JyZWFrcG9pbnRzL2dldEJyZWFrcG9pbnQuanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS9icmVha3BvaW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9jb3JlL2JyZWFrcG9pbnRzL3NldEJyZWFrcG9pbnQuanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS9jaGVjay1vdmVyZmxvdy9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9jb3JlL2NsYXNzZXMvYWRkQ2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9jb3JlL2NsYXNzZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS9jbGFzc2VzL3JlbW92ZUNsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS9jb3JlLmpzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi9ub2RlX21vZHVsZXMvc3dpcGVyL2NvcmUvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS9ldmVudHMtZW1pdHRlci5qcyIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9jb3JlL2V2ZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9jb3JlL2V2ZW50cy9vbkNsaWNrLmpzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi9ub2RlX21vZHVsZXMvc3dpcGVyL2NvcmUvZXZlbnRzL29uUmVzaXplLmpzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi9ub2RlX21vZHVsZXMvc3dpcGVyL2NvcmUvZXZlbnRzL29uU2Nyb2xsLmpzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi9ub2RlX21vZHVsZXMvc3dpcGVyL2NvcmUvZXZlbnRzL29uVG91Y2hFbmQuanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS9ldmVudHMvb25Ub3VjaE1vdmUuanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS9ldmVudHMvb25Ub3VjaFN0YXJ0LmpzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi9ub2RlX21vZHVsZXMvc3dpcGVyL2NvcmUvZ3JhYi1jdXJzb3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS9ncmFiLWN1cnNvci9zZXRHcmFiQ3Vyc29yLmpzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi9ub2RlX21vZHVsZXMvc3dpcGVyL2NvcmUvZ3JhYi1jdXJzb3IvdW5zZXRHcmFiQ3Vyc29yLmpzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi9ub2RlX21vZHVsZXMvc3dpcGVyL2NvcmUvaW1hZ2VzL2luZGV4LmpzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi9ub2RlX21vZHVsZXMvc3dpcGVyL2NvcmUvaW1hZ2VzL2xvYWRJbWFnZS5qcyIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9jb3JlL2ltYWdlcy9wcmVsb2FkSW1hZ2VzLmpzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi9ub2RlX21vZHVsZXMvc3dpcGVyL2NvcmUvbG9vcC9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9jb3JlL2xvb3AvbG9vcENyZWF0ZS5qcyIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9jb3JlL2xvb3AvbG9vcERlc3Ryb3kuanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS9sb29wL2xvb3BGaXguanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS9tb2R1bGVFeHRlbmRQYXJhbXMuanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS9tb2R1bGVzL29ic2VydmVyL29ic2VydmVyLmpzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi9ub2RlX21vZHVsZXMvc3dpcGVyL2NvcmUvbW9kdWxlcy9yZXNpemUvcmVzaXplLmpzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi9ub2RlX21vZHVsZXMvc3dpcGVyL2NvcmUvc2xpZGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS9zbGlkZS9zbGlkZU5leHQuanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS9zbGlkZS9zbGlkZVByZXYuanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS9zbGlkZS9zbGlkZVJlc2V0LmpzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi9ub2RlX21vZHVsZXMvc3dpcGVyL2NvcmUvc2xpZGUvc2xpZGVUby5qcyIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9jb3JlL3NsaWRlL3NsaWRlVG9DbGlja2VkU2xpZGUuanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS9zbGlkZS9zbGlkZVRvQ2xvc2VzdC5qcyIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9jb3JlL3NsaWRlL3NsaWRlVG9Mb29wLmpzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi9ub2RlX21vZHVsZXMvc3dpcGVyL2NvcmUvdHJhbnNpdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9jb3JlL3RyYW5zaXRpb24vc2V0VHJhbnNpdGlvbi5qcyIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9jb3JlL3RyYW5zaXRpb24vdHJhbnNpdGlvbkVtaXQuanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS90cmFuc2l0aW9uL3RyYW5zaXRpb25FbmQuanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS90cmFuc2l0aW9uL3RyYW5zaXRpb25TdGFydC5qcyIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9jb3JlL3RyYW5zbGF0ZS9nZXRUcmFuc2xhdGUuanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS90cmFuc2xhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS90cmFuc2xhdGUvbWF4VHJhbnNsYXRlLmpzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi9ub2RlX21vZHVsZXMvc3dpcGVyL2NvcmUvdHJhbnNsYXRlL21pblRyYW5zbGF0ZS5qcyIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9jb3JlL3RyYW5zbGF0ZS9zZXRUcmFuc2xhdGUuanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS90cmFuc2xhdGUvdHJhbnNsYXRlVG8uanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS91cGRhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS91cGRhdGUvdXBkYXRlQWN0aXZlSW5kZXguanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS91cGRhdGUvdXBkYXRlQXV0b0hlaWdodC5qcyIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9jb3JlL3VwZGF0ZS91cGRhdGVDbGlja2VkU2xpZGUuanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS91cGRhdGUvdXBkYXRlUHJvZ3Jlc3MuanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS91cGRhdGUvdXBkYXRlU2l6ZS5qcyIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9jb3JlL3VwZGF0ZS91cGRhdGVTbGlkZXMuanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS91cGRhdGUvdXBkYXRlU2xpZGVzQ2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9jb3JlL3VwZGF0ZS91cGRhdGVTbGlkZXNPZmZzZXQuanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uL25vZGVfbW9kdWxlcy9zd2lwZXIvY29yZS91cGRhdGUvdXBkYXRlU2xpZGVzUHJvZ3Jlc3MuanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uL25vZGVfbW9kdWxlcy9zd2lwZXIvbW9kdWxlcy9hMTF5L2ExMXkuanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uL25vZGVfbW9kdWxlcy9zd2lwZXIvbW9kdWxlcy9hdXRvcGxheS9hdXRvcGxheS5qcyIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9tb2R1bGVzL2NvbnRyb2xsZXIvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9tb2R1bGVzL2VmZmVjdC1jYXJkcy9lZmZlY3QtY2FyZHMuanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uL25vZGVfbW9kdWxlcy9zd2lwZXIvbW9kdWxlcy9lZmZlY3QtY292ZXJmbG93L2VmZmVjdC1jb3ZlcmZsb3cuanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uL25vZGVfbW9kdWxlcy9zd2lwZXIvbW9kdWxlcy9lZmZlY3QtY3JlYXRpdmUvZWZmZWN0LWNyZWF0aXZlLmpzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi9ub2RlX21vZHVsZXMvc3dpcGVyL21vZHVsZXMvZWZmZWN0LWN1YmUvZWZmZWN0LWN1YmUuanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uL25vZGVfbW9kdWxlcy9zd2lwZXIvbW9kdWxlcy9lZmZlY3QtZmFkZS9lZmZlY3QtZmFkZS5qcyIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9tb2R1bGVzL2VmZmVjdC1mbGlwL2VmZmVjdC1mbGlwLmpzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi9ub2RlX21vZHVsZXMvc3dpcGVyL21vZHVsZXMvZnJlZS1tb2RlL2ZyZWUtbW9kZS5qcyIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9tb2R1bGVzL2dyaWQvZ3JpZC5qcyIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9tb2R1bGVzL2hhc2gtbmF2aWdhdGlvbi9oYXNoLW5hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uL25vZGVfbW9kdWxlcy9zd2lwZXIvbW9kdWxlcy9oaXN0b3J5L2hpc3RvcnkuanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uL25vZGVfbW9kdWxlcy9zd2lwZXIvbW9kdWxlcy9rZXlib2FyZC9rZXlib2FyZC5qcyIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9tb2R1bGVzL2xhenkvbGF6eS5qcyIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9tb2R1bGVzL21hbmlwdWxhdGlvbi9tYW5pcHVsYXRpb24uanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uL25vZGVfbW9kdWxlcy9zd2lwZXIvbW9kdWxlcy9tYW5pcHVsYXRpb24vbWV0aG9kcy9hZGRTbGlkZS5qcyIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9tb2R1bGVzL21hbmlwdWxhdGlvbi9tZXRob2RzL2FwcGVuZFNsaWRlLmpzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi9ub2RlX21vZHVsZXMvc3dpcGVyL21vZHVsZXMvbWFuaXB1bGF0aW9uL21ldGhvZHMvcHJlcGVuZFNsaWRlLmpzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi9ub2RlX21vZHVsZXMvc3dpcGVyL21vZHVsZXMvbWFuaXB1bGF0aW9uL21ldGhvZHMvcmVtb3ZlQWxsU2xpZGVzLmpzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi9ub2RlX21vZHVsZXMvc3dpcGVyL21vZHVsZXMvbWFuaXB1bGF0aW9uL21ldGhvZHMvcmVtb3ZlU2xpZGUuanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uL25vZGVfbW9kdWxlcy9zd2lwZXIvbW9kdWxlcy9tb3VzZXdoZWVsL21vdXNld2hlZWwuanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uL25vZGVfbW9kdWxlcy9zd2lwZXIvbW9kdWxlcy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uL25vZGVfbW9kdWxlcy9zd2lwZXIvbW9kdWxlcy9wYWdpbmF0aW9uL3BhZ2luYXRpb24uanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uL25vZGVfbW9kdWxlcy9zd2lwZXIvbW9kdWxlcy9wYXJhbGxheC9wYXJhbGxheC5qcyIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9tb2R1bGVzL3Njcm9sbGJhci9zY3JvbGxiYXIuanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uL25vZGVfbW9kdWxlcy9zd2lwZXIvbW9kdWxlcy90aHVtYnMvdGh1bWJzLmpzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi9ub2RlX21vZHVsZXMvc3dpcGVyL21vZHVsZXMvdmlydHVhbC92aXJ0dWFsLmpzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi9ub2RlX21vZHVsZXMvc3dpcGVyL21vZHVsZXMvem9vbS96b29tLmpzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi9ub2RlX21vZHVsZXMvc3dpcGVyL3NoYXJlZC9jbGFzc2VzLXRvLXNlbGVjdG9yLmpzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi9ub2RlX21vZHVsZXMvc3dpcGVyL3NoYXJlZC9jcmVhdGUtZWxlbWVudC1pZi1ub3QtZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9zaGFyZWQvY3JlYXRlLXNoYWRvdy5qcyIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9zaGFyZWQvZG9tLmpzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi9ub2RlX21vZHVsZXMvc3dpcGVyL3NoYXJlZC9lZmZlY3QtaW5pdC5qcyIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9zaGFyZWQvZWZmZWN0LXRhcmdldC5qcyIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9zaGFyZWQvZWZmZWN0LXZpcnR1YWwtdHJhbnNpdGlvbi1lbmQuanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uL25vZGVfbW9kdWxlcy9zd2lwZXIvc2hhcmVkL2dldC1icm93c2VyLmpzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi9ub2RlX21vZHVsZXMvc3dpcGVyL3NoYXJlZC9nZXQtZGV2aWNlLmpzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvLi9ub2RlX21vZHVsZXMvc3dpcGVyL3NoYXJlZC9nZXQtc3VwcG9ydC5qcyIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9zaGFyZWQvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uL25vZGVfbW9kdWxlcy9zd2lwZXIvc3dpcGVyLmVzbS5qcyIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3N0YW4tY29tcGlsZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zdGFuLWNvbXBpbGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc3Rhbi1jb21waWxlci8uL3NyYy9qcy9zZWN0aW9ucy9mb3JtYXRhZ2VfbW9kZWxzX3N3aXBlci5qcyJdLCJuYW1lcyI6WyJTd2lwZXIiLCJOYXZpZ2F0aW9uIiwiUGFnaW5hdGlvbiIsIlBhcmFsbGF4IiwiQXV0b3BsYXkiLCJteVN3aXBlciIsImRpcmVjdGlvbiIsImxvb3AiLCJwYWdpbmF0aW9uIiwiZWwiLCJ0eXBlIiwiY2xpY2thYmxlIiwic3BlZWQiLCJwYXJhbGxheCIsImF1dG9wbGF5IiwiZGVsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNvRDs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixnQkFBZ0I7QUFDakM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLGdCQUFnQjtBQUNqQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIs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Q0EsaUJBQWlCLHFEQUFTO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjs7QUFFbEIsbUJBQW1COztBQUVuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7O0FBR0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsaUJBQWlCLHFEQUFTO0FBQzFCO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtB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Tzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIscURBQUc7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCwyQkFBMkI7O0FBRTNCO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1DQUFtQyxtQkFBbUI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1DQUFtQyxRQUFRO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFOzs7Ozs7Ozs7OztBQ3ZIRDtBQUNBLCtEQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDs7O0FBR0EsMEJBQTBCLHFEQUFHO0FBQzdCO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQOztBQUVBLHVCQUF1QixxQkFBcUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTzs7O0FBR1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixXQUFXO0FBQ1gsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNB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QUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsNkNBQTZDLHdEQUF3RCxFOzs7OztXQ0FyRztXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQUEsK0NBQUEsQ0FBVyxDQUFDQyw4Q0FBRCxFQUFhQyw4Q0FBYixFQUF5QkMsNENBQXpCLEVBQW1DQyw0Q0FBbkMsQ0FBWCxFLENBQ0E7O0NBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBSUMsUUFBUSxHQUFHLElBQUlMLDJDQUFKLENBQVcsU0FBWCxFQUFzQjtBQUNuQ00sV0FBUyxFQUFFLFVBRHdCO0FBRW5DQyxNQUFJLEVBQUUsSUFGNkI7QUFHbkNDLFlBQVUsRUFBRTtBQUFFQyxNQUFFLEVBQUUsb0JBQU47QUFBNEJDLFFBQUksRUFBRSxTQUFsQztBQUE2Q0MsYUFBUyxFQUFFO0FBQXhELEdBSHVCO0FBSW5DO0FBQ0FDLE9BQUssRUFBRSxJQUw0QjtBQU1uQ0MsVUFBUSxFQUFFLElBTnlCO0FBT25DO0FBQ0E7QUFDQUMsVUFBUSxFQUFFO0FBQ1JDLFNBQUssRUFBRTtBQURDO0FBVHlCLENBQXRCLENBQWY7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTSIsImZpbGUiOiIuL2xheW91dHMvanMvZm9ybWF0YWdlX21vZGVsc19zd2lwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIERvbTcgNC4wLjBcbiAqIE1pbmltYWxpc3RpYyBKYXZhU2NyaXB0IGxpYnJhcnkgZm9yIERPTSBtYW5pcHVsYXRpb24sIHdpdGggYSBqUXVlcnktY29tcGF0aWJsZSBBUElcbiAqIGh0dHBzOi8vZnJhbWV3b3JrNy5pby9kb2NzL2RvbTcuaHRtbFxuICpcbiAqIENvcHlyaWdodCAyMDIxLCBWbGFkaW1pciBLaGFybGFtcGlkaVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVFxuICpcbiAqIFJlbGVhc2VkIG9uOiBBdWd1c3QgMjUsIDIwMjFcbiAqL1xuaW1wb3J0IHsgZ2V0V2luZG93LCBnZXREb2N1bWVudCB9IGZyb20gJ3Nzci13aW5kb3cnO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xuZnVuY3Rpb24gbWFrZVJlYWN0aXZlKG9iaikge1xuICBjb25zdCBwcm90byA9IG9iai5fX3Byb3RvX187XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosICdfX3Byb3RvX18nLCB7XG4gICAgZ2V0KCkge1xuICAgICAgcmV0dXJuIHByb3RvO1xuICAgIH0sXG5cbiAgICBzZXQodmFsdWUpIHtcbiAgICAgIHByb3RvLl9fcHJvdG9fXyA9IHZhbHVlO1xuICAgIH1cblxuICB9KTtcbn1cblxuY2xhc3MgRG9tNyBleHRlbmRzIEFycmF5IHtcbiAgY29uc3RydWN0b3IoaXRlbXMpIHtcbiAgICBzdXBlciguLi4oaXRlbXMgfHwgW10pKTtcbiAgICBtYWtlUmVhY3RpdmUodGhpcyk7XG4gIH1cblxufVxuXG5mdW5jdGlvbiBhcnJheUZsYXQoYXJyID0gW10pIHtcbiAgY29uc3QgcmVzID0gW107XG4gIGFyci5mb3JFYWNoKGVsID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShlbCkpIHtcbiAgICAgIHJlcy5wdXNoKC4uLmFycmF5RmxhdChlbCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXMucHVzaChlbCk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlcztcbn1cbmZ1bmN0aW9uIGFycmF5RmlsdGVyKGFyciwgY2FsbGJhY2spIHtcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbChhcnIsIGNhbGxiYWNrKTtcbn1cbmZ1bmN0aW9uIGFycmF5VW5pcXVlKGFycikge1xuICBjb25zdCB1bmlxdWVBcnJheSA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKHVuaXF1ZUFycmF5LmluZGV4T2YoYXJyW2ldKSA9PT0gLTEpIHVuaXF1ZUFycmF5LnB1c2goYXJyW2ldKTtcbiAgfVxuXG4gIHJldHVybiB1bmlxdWVBcnJheTtcbn1cbmZ1bmN0aW9uIHRvQ2FtZWxDYXNlKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvLSguKS9nLCAobWF0Y2gsIGdyb3VwKSA9PiBncm91cC50b1VwcGVyQ2FzZSgpKTtcbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5cbmZ1bmN0aW9uIHFzYShzZWxlY3RvciwgY29udGV4dCkge1xuICBpZiAodHlwZW9mIHNlbGVjdG9yICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBbc2VsZWN0b3JdO1xuICB9XG5cbiAgY29uc3QgYSA9IFtdO1xuICBjb25zdCByZXMgPSBjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgYS5wdXNoKHJlc1tpXSk7XG4gIH1cblxuICByZXR1cm4gYTtcbn1cblxuZnVuY3Rpb24gJChzZWxlY3RvciwgY29udGV4dCkge1xuICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgY29uc3QgZG9jdW1lbnQgPSBnZXREb2N1bWVudCgpO1xuICBsZXQgYXJyID0gW107XG5cbiAgaWYgKCFjb250ZXh0ICYmIHNlbGVjdG9yIGluc3RhbmNlb2YgRG9tNykge1xuICAgIHJldHVybiBzZWxlY3RvcjtcbiAgfVxuXG4gIGlmICghc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gbmV3IERvbTcoYXJyKTtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgaHRtbCA9IHNlbGVjdG9yLnRyaW0oKTtcblxuICAgIGlmIChodG1sLmluZGV4T2YoJzwnKSA+PSAwICYmIGh0bWwuaW5kZXhPZignPicpID49IDApIHtcbiAgICAgIGxldCB0b0NyZWF0ZSA9ICdkaXYnO1xuICAgICAgaWYgKGh0bWwuaW5kZXhPZignPGxpJykgPT09IDApIHRvQ3JlYXRlID0gJ3VsJztcbiAgICAgIGlmIChodG1sLmluZGV4T2YoJzx0cicpID09PSAwKSB0b0NyZWF0ZSA9ICd0Ym9keSc7XG4gICAgICBpZiAoaHRtbC5pbmRleE9mKCc8dGQnKSA9PT0gMCB8fCBodG1sLmluZGV4T2YoJzx0aCcpID09PSAwKSB0b0NyZWF0ZSA9ICd0cic7XG4gICAgICBpZiAoaHRtbC5pbmRleE9mKCc8dGJvZHknKSA9PT0gMCkgdG9DcmVhdGUgPSAndGFibGUnO1xuICAgICAgaWYgKGh0bWwuaW5kZXhPZignPG9wdGlvbicpID09PSAwKSB0b0NyZWF0ZSA9ICdzZWxlY3QnO1xuICAgICAgY29uc3QgdGVtcFBhcmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodG9DcmVhdGUpO1xuICAgICAgdGVtcFBhcmVudC5pbm5lckhUTUwgPSBodG1sO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRlbXBQYXJlbnQuY2hpbGROb2Rlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBhcnIucHVzaCh0ZW1wUGFyZW50LmNoaWxkTm9kZXNbaV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBhcnIgPSBxc2Eoc2VsZWN0b3IudHJpbSgpLCBjb250ZXh0IHx8IGRvY3VtZW50KTtcbiAgICB9IC8vIGFyciA9IHFzYShzZWxlY3RvciwgZG9jdW1lbnQpO1xuXG4gIH0gZWxzZSBpZiAoc2VsZWN0b3Iubm9kZVR5cGUgfHwgc2VsZWN0b3IgPT09IHdpbmRvdyB8fCBzZWxlY3RvciA9PT0gZG9jdW1lbnQpIHtcbiAgICBhcnIucHVzaChzZWxlY3Rvcik7XG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShzZWxlY3RvcikpIHtcbiAgICBpZiAoc2VsZWN0b3IgaW5zdGFuY2VvZiBEb203KSByZXR1cm4gc2VsZWN0b3I7XG4gICAgYXJyID0gc2VsZWN0b3I7XG4gIH1cblxuICByZXR1cm4gbmV3IERvbTcoYXJyYXlVbmlxdWUoYXJyKSk7XG59XG5cbiQuZm4gPSBEb203LnByb3RvdHlwZTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5cbmZ1bmN0aW9uIGFkZENsYXNzKC4uLmNsYXNzZXMpIHtcbiAgY29uc3QgY2xhc3NOYW1lcyA9IGFycmF5RmxhdChjbGFzc2VzLm1hcChjID0+IGMuc3BsaXQoJyAnKSkpO1xuICB0aGlzLmZvckVhY2goZWwgPT4ge1xuICAgIGVsLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NOYW1lcyk7XG4gIH0pO1xuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoLi4uY2xhc3Nlcykge1xuICBjb25zdCBjbGFzc05hbWVzID0gYXJyYXlGbGF0KGNsYXNzZXMubWFwKGMgPT4gYy5zcGxpdCgnICcpKSk7XG4gIHRoaXMuZm9yRWFjaChlbCA9PiB7XG4gICAgZWwuY2xhc3NMaXN0LnJlbW92ZSguLi5jbGFzc05hbWVzKTtcbiAgfSk7XG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVDbGFzcyguLi5jbGFzc2VzKSB7XG4gIGNvbnN0IGNsYXNzTmFtZXMgPSBhcnJheUZsYXQoY2xhc3Nlcy5tYXAoYyA9PiBjLnNwbGl0KCcgJykpKTtcbiAgdGhpcy5mb3JFYWNoKGVsID0+IHtcbiAgICBjbGFzc05hbWVzLmZvckVhY2goY2xhc3NOYW1lID0+IHtcbiAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhhc0NsYXNzKC4uLmNsYXNzZXMpIHtcbiAgY29uc3QgY2xhc3NOYW1lcyA9IGFycmF5RmxhdChjbGFzc2VzLm1hcChjID0+IGMuc3BsaXQoJyAnKSkpO1xuICByZXR1cm4gYXJyYXlGaWx0ZXIodGhpcywgZWwgPT4ge1xuICAgIHJldHVybiBjbGFzc05hbWVzLmZpbHRlcihjbGFzc05hbWUgPT4gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpLmxlbmd0aCA+IDA7XG4gIH0pLmxlbmd0aCA+IDA7XG59XG5cbmZ1bmN0aW9uIGF0dHIoYXR0cnMsIHZhbHVlKSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxICYmIHR5cGVvZiBhdHRycyA9PT0gJ3N0cmluZycpIHtcbiAgICAvLyBHZXQgYXR0clxuICAgIGlmICh0aGlzWzBdKSByZXR1cm4gdGhpc1swXS5nZXRBdHRyaWJ1dGUoYXR0cnMpO1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH0gLy8gU2V0IGF0dHJzXG5cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgLy8gU3RyaW5nXG4gICAgICB0aGlzW2ldLnNldEF0dHJpYnV0ZShhdHRycywgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBPYmplY3RcbiAgICAgIGZvciAoY29uc3QgYXR0ck5hbWUgaW4gYXR0cnMpIHtcbiAgICAgICAgdGhpc1tpXVthdHRyTmFtZV0gPSBhdHRyc1thdHRyTmFtZV07XG4gICAgICAgIHRoaXNbaV0uc2V0QXR0cmlidXRlKGF0dHJOYW1lLCBhdHRyc1thdHRyTmFtZV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiByZW1vdmVBdHRyKGF0dHIpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdGhpc1tpXS5yZW1vdmVBdHRyaWJ1dGUoYXR0cik7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gcHJvcChwcm9wcywgdmFsdWUpIHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgJiYgdHlwZW9mIHByb3BzID09PSAnc3RyaW5nJykge1xuICAgIC8vIEdldCBwcm9wXG4gICAgaWYgKHRoaXNbMF0pIHJldHVybiB0aGlzWzBdW3Byb3BzXTtcbiAgfSBlbHNlIHtcbiAgICAvLyBTZXQgcHJvcHNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIC8vIFN0cmluZ1xuICAgICAgICB0aGlzW2ldW3Byb3BzXSA9IHZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gT2JqZWN0XG4gICAgICAgIGZvciAoY29uc3QgcHJvcE5hbWUgaW4gcHJvcHMpIHtcbiAgICAgICAgICB0aGlzW2ldW3Byb3BOYW1lXSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIGRhdGEoa2V5LCB2YWx1ZSkge1xuICBsZXQgZWw7XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBlbCA9IHRoaXNbMF07XG4gICAgaWYgKCFlbCkgcmV0dXJuIHVuZGVmaW5lZDsgLy8gR2V0IHZhbHVlXG5cbiAgICBpZiAoZWwuZG9tN0VsZW1lbnREYXRhU3RvcmFnZSAmJiBrZXkgaW4gZWwuZG9tN0VsZW1lbnREYXRhU3RvcmFnZSkge1xuICAgICAgcmV0dXJuIGVsLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2Vba2V5XTtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRhS2V5ID0gZWwuZ2V0QXR0cmlidXRlKGBkYXRhLSR7a2V5fWApO1xuXG4gICAgaWYgKGRhdGFLZXkpIHtcbiAgICAgIHJldHVybiBkYXRhS2V5O1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH0gLy8gU2V0IHZhbHVlXG5cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBlbCA9IHRoaXNbaV07XG4gICAgaWYgKCFlbC5kb203RWxlbWVudERhdGFTdG9yYWdlKSBlbC5kb203RWxlbWVudERhdGFTdG9yYWdlID0ge307XG4gICAgZWwuZG9tN0VsZW1lbnREYXRhU3RvcmFnZVtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRGF0YShrZXkpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgZWwgPSB0aGlzW2ldO1xuXG4gICAgaWYgKGVsLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2UgJiYgZWwuZG9tN0VsZW1lbnREYXRhU3RvcmFnZVtrZXldKSB7XG4gICAgICBlbC5kb203RWxlbWVudERhdGFTdG9yYWdlW2tleV0gPSBudWxsO1xuICAgICAgZGVsZXRlIGVsLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2Vba2V5XTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGF0YXNldCgpIHtcbiAgY29uc3QgZWwgPSB0aGlzWzBdO1xuICBpZiAoIWVsKSByZXR1cm4gdW5kZWZpbmVkO1xuICBjb25zdCBkYXRhc2V0ID0ge307IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICBpZiAoZWwuZGF0YXNldCkge1xuICAgIGZvciAoY29uc3QgZGF0YUtleSBpbiBlbC5kYXRhc2V0KSB7XG4gICAgICBkYXRhc2V0W2RhdGFLZXldID0gZWwuZGF0YXNldFtkYXRhS2V5XTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbC5hdHRyaWJ1dGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBhdHRyID0gZWwuYXR0cmlidXRlc1tpXTtcblxuICAgICAgaWYgKGF0dHIubmFtZS5pbmRleE9mKCdkYXRhLScpID49IDApIHtcbiAgICAgICAgZGF0YXNldFt0b0NhbWVsQ2FzZShhdHRyLm5hbWUuc3BsaXQoJ2RhdGEtJylbMV0pXSA9IGF0dHIudmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZm9yIChjb25zdCBrZXkgaW4gZGF0YXNldCkge1xuICAgIGlmIChkYXRhc2V0W2tleV0gPT09ICdmYWxzZScpIGRhdGFzZXRba2V5XSA9IGZhbHNlO2Vsc2UgaWYgKGRhdGFzZXRba2V5XSA9PT0gJ3RydWUnKSBkYXRhc2V0W2tleV0gPSB0cnVlO2Vsc2UgaWYgKHBhcnNlRmxvYXQoZGF0YXNldFtrZXldKSA9PT0gZGF0YXNldFtrZXldICogMSkgZGF0YXNldFtrZXldICo9IDE7XG4gIH1cblxuICByZXR1cm4gZGF0YXNldDtcbn1cblxuZnVuY3Rpb24gdmFsKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gZ2V0IHZhbHVlXG4gICAgY29uc3QgZWwgPSB0aGlzWzBdO1xuICAgIGlmICghZWwpIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICBpZiAoZWwubXVsdGlwbGUgJiYgZWwubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgIGNvbnN0IHZhbHVlcyA9IFtdO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsLnNlbGVjdGVkT3B0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICB2YWx1ZXMucHVzaChlbC5zZWxlY3RlZE9wdGlvbnNbaV0udmFsdWUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsdWVzO1xuICAgIH1cblxuICAgIHJldHVybiBlbC52YWx1ZTtcbiAgfSAvLyBzZXQgdmFsdWVcblxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGVsID0gdGhpc1tpXTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSAmJiBlbC5tdWx0aXBsZSAmJiBlbC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnc2VsZWN0Jykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBlbC5vcHRpb25zLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIGVsLm9wdGlvbnNbal0uc2VsZWN0ZWQgPSB2YWx1ZS5pbmRleE9mKGVsLm9wdGlvbnNbal0udmFsdWUpID49IDA7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIHZhbHVlKHZhbHVlKSB7XG4gIHJldHVybiB0aGlzLnZhbCh2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybSh0cmFuc2Zvcm0pIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdGhpc1tpXS5zdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gdHJhbnNpdGlvbihkdXJhdGlvbikge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB0aGlzW2ldLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IHR5cGVvZiBkdXJhdGlvbiAhPT0gJ3N0cmluZycgPyBgJHtkdXJhdGlvbn1tc2AgOiBkdXJhdGlvbjtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBvbiguLi5hcmdzKSB7XG4gIGxldCBbZXZlbnRUeXBlLCB0YXJnZXRTZWxlY3RvciwgbGlzdGVuZXIsIGNhcHR1cmVdID0gYXJncztcblxuICBpZiAodHlwZW9mIGFyZ3NbMV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICBbZXZlbnRUeXBlLCBsaXN0ZW5lciwgY2FwdHVyZV0gPSBhcmdzO1xuICAgIHRhcmdldFNlbGVjdG9yID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKCFjYXB0dXJlKSBjYXB0dXJlID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gaGFuZGxlTGl2ZUV2ZW50KGUpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICBpZiAoIXRhcmdldCkgcmV0dXJuO1xuICAgIGNvbnN0IGV2ZW50RGF0YSA9IGUudGFyZ2V0LmRvbTdFdmVudERhdGEgfHwgW107XG5cbiAgICBpZiAoZXZlbnREYXRhLmluZGV4T2YoZSkgPCAwKSB7XG4gICAgICBldmVudERhdGEudW5zaGlmdChlKTtcbiAgICB9XG5cbiAgICBpZiAoJCh0YXJnZXQpLmlzKHRhcmdldFNlbGVjdG9yKSkgbGlzdGVuZXIuYXBwbHkodGFyZ2V0LCBldmVudERhdGEpO2Vsc2Uge1xuICAgICAgY29uc3QgcGFyZW50cyA9ICQodGFyZ2V0KS5wYXJlbnRzKCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBwYXJlbnRzLmxlbmd0aDsgayArPSAxKSB7XG4gICAgICAgIGlmICgkKHBhcmVudHNba10pLmlzKHRhcmdldFNlbGVjdG9yKSkgbGlzdGVuZXIuYXBwbHkocGFyZW50c1trXSwgZXZlbnREYXRhKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVFdmVudChlKSB7XG4gICAgY29uc3QgZXZlbnREYXRhID0gZSAmJiBlLnRhcmdldCA/IGUudGFyZ2V0LmRvbTdFdmVudERhdGEgfHwgW10gOiBbXTtcblxuICAgIGlmIChldmVudERhdGEuaW5kZXhPZihlKSA8IDApIHtcbiAgICAgIGV2ZW50RGF0YS51bnNoaWZ0KGUpO1xuICAgIH1cblxuICAgIGxpc3RlbmVyLmFwcGx5KHRoaXMsIGV2ZW50RGF0YSk7XG4gIH1cblxuICBjb25zdCBldmVudHMgPSBldmVudFR5cGUuc3BsaXQoJyAnKTtcbiAgbGV0IGo7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgZWwgPSB0aGlzW2ldO1xuXG4gICAgaWYgKCF0YXJnZXRTZWxlY3Rvcikge1xuICAgICAgZm9yIChqID0gMDsgaiA8IGV2ZW50cy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICBjb25zdCBldmVudCA9IGV2ZW50c1tqXTtcbiAgICAgICAgaWYgKCFlbC5kb203TGlzdGVuZXJzKSBlbC5kb203TGlzdGVuZXJzID0ge307XG4gICAgICAgIGlmICghZWwuZG9tN0xpc3RlbmVyc1tldmVudF0pIGVsLmRvbTdMaXN0ZW5lcnNbZXZlbnRdID0gW107XG4gICAgICAgIGVsLmRvbTdMaXN0ZW5lcnNbZXZlbnRdLnB1c2goe1xuICAgICAgICAgIGxpc3RlbmVyLFxuICAgICAgICAgIHByb3h5TGlzdGVuZXI6IGhhbmRsZUV2ZW50XG4gICAgICAgIH0pO1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVFdmVudCwgY2FwdHVyZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIExpdmUgZXZlbnRzXG4gICAgICBmb3IgKGogPSAwOyBqIDwgZXZlbnRzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50ID0gZXZlbnRzW2pdO1xuICAgICAgICBpZiAoIWVsLmRvbTdMaXZlTGlzdGVuZXJzKSBlbC5kb203TGl2ZUxpc3RlbmVycyA9IHt9O1xuICAgICAgICBpZiAoIWVsLmRvbTdMaXZlTGlzdGVuZXJzW2V2ZW50XSkgZWwuZG9tN0xpdmVMaXN0ZW5lcnNbZXZlbnRdID0gW107XG4gICAgICAgIGVsLmRvbTdMaXZlTGlzdGVuZXJzW2V2ZW50XS5wdXNoKHtcbiAgICAgICAgICBsaXN0ZW5lcixcbiAgICAgICAgICBwcm94eUxpc3RlbmVyOiBoYW5kbGVMaXZlRXZlbnRcbiAgICAgICAgfSk7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZUxpdmVFdmVudCwgY2FwdHVyZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIG9mZiguLi5hcmdzKSB7XG4gIGxldCBbZXZlbnRUeXBlLCB0YXJnZXRTZWxlY3RvciwgbGlzdGVuZXIsIGNhcHR1cmVdID0gYXJncztcblxuICBpZiAodHlwZW9mIGFyZ3NbMV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICBbZXZlbnRUeXBlLCBsaXN0ZW5lciwgY2FwdHVyZV0gPSBhcmdzO1xuICAgIHRhcmdldFNlbGVjdG9yID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKCFjYXB0dXJlKSBjYXB0dXJlID0gZmFsc2U7XG4gIGNvbnN0IGV2ZW50cyA9IGV2ZW50VHlwZS5zcGxpdCgnICcpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgZXZlbnQgPSBldmVudHNbaV07XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgIGNvbnN0IGVsID0gdGhpc1tqXTtcbiAgICAgIGxldCBoYW5kbGVycztcblxuICAgICAgaWYgKCF0YXJnZXRTZWxlY3RvciAmJiBlbC5kb203TGlzdGVuZXJzKSB7XG4gICAgICAgIGhhbmRsZXJzID0gZWwuZG9tN0xpc3RlbmVyc1tldmVudF07XG4gICAgICB9IGVsc2UgaWYgKHRhcmdldFNlbGVjdG9yICYmIGVsLmRvbTdMaXZlTGlzdGVuZXJzKSB7XG4gICAgICAgIGhhbmRsZXJzID0gZWwuZG9tN0xpdmVMaXN0ZW5lcnNbZXZlbnRdO1xuICAgICAgfVxuXG4gICAgICBpZiAoaGFuZGxlcnMgJiYgaGFuZGxlcnMubGVuZ3RoKSB7XG4gICAgICAgIGZvciAobGV0IGsgPSBoYW5kbGVycy5sZW5ndGggLSAxOyBrID49IDA7IGsgLT0gMSkge1xuICAgICAgICAgIGNvbnN0IGhhbmRsZXIgPSBoYW5kbGVyc1trXTtcblxuICAgICAgICAgIGlmIChsaXN0ZW5lciAmJiBoYW5kbGVyLmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlci5wcm94eUxpc3RlbmVyLCBjYXB0dXJlKTtcbiAgICAgICAgICAgIGhhbmRsZXJzLnNwbGljZShrLCAxKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGxpc3RlbmVyICYmIGhhbmRsZXIubGlzdGVuZXIgJiYgaGFuZGxlci5saXN0ZW5lci5kb203cHJveHkgJiYgaGFuZGxlci5saXN0ZW5lci5kb203cHJveHkgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLnByb3h5TGlzdGVuZXIsIGNhcHR1cmUpO1xuICAgICAgICAgICAgaGFuZGxlcnMuc3BsaWNlKGssIDEpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoIWxpc3RlbmVyKSB7XG4gICAgICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLnByb3h5TGlzdGVuZXIsIGNhcHR1cmUpO1xuICAgICAgICAgICAgaGFuZGxlcnMuc3BsaWNlKGssIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBvbmNlKC4uLmFyZ3MpIHtcbiAgY29uc3QgZG9tID0gdGhpcztcbiAgbGV0IFtldmVudE5hbWUsIHRhcmdldFNlbGVjdG9yLCBsaXN0ZW5lciwgY2FwdHVyZV0gPSBhcmdzO1xuXG4gIGlmICh0eXBlb2YgYXJnc1sxXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIFtldmVudE5hbWUsIGxpc3RlbmVyLCBjYXB0dXJlXSA9IGFyZ3M7XG4gICAgdGFyZ2V0U2VsZWN0b3IgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBvbmNlSGFuZGxlciguLi5ldmVudEFyZ3MpIHtcbiAgICBsaXN0ZW5lci5hcHBseSh0aGlzLCBldmVudEFyZ3MpO1xuICAgIGRvbS5vZmYoZXZlbnROYW1lLCB0YXJnZXRTZWxlY3Rvciwgb25jZUhhbmRsZXIsIGNhcHR1cmUpO1xuXG4gICAgaWYgKG9uY2VIYW5kbGVyLmRvbTdwcm94eSkge1xuICAgICAgZGVsZXRlIG9uY2VIYW5kbGVyLmRvbTdwcm94eTtcbiAgICB9XG4gIH1cblxuICBvbmNlSGFuZGxlci5kb203cHJveHkgPSBsaXN0ZW5lcjtcbiAgcmV0dXJuIGRvbS5vbihldmVudE5hbWUsIHRhcmdldFNlbGVjdG9yLCBvbmNlSGFuZGxlciwgY2FwdHVyZSk7XG59XG5cbmZ1bmN0aW9uIHRyaWdnZXIoLi4uYXJncykge1xuICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgY29uc3QgZXZlbnRzID0gYXJnc1swXS5zcGxpdCgnICcpO1xuICBjb25zdCBldmVudERhdGEgPSBhcmdzWzFdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgZXZlbnQgPSBldmVudHNbaV07XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgIGNvbnN0IGVsID0gdGhpc1tqXTtcblxuICAgICAgaWYgKHdpbmRvdy5DdXN0b21FdmVudCkge1xuICAgICAgICBjb25zdCBldnQgPSBuZXcgd2luZG93LkN1c3RvbUV2ZW50KGV2ZW50LCB7XG4gICAgICAgICAgZGV0YWlsOiBldmVudERhdGEsXG4gICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICBjYW5jZWxhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBlbC5kb203RXZlbnREYXRhID0gYXJncy5maWx0ZXIoKGRhdGEsIGRhdGFJbmRleCkgPT4gZGF0YUluZGV4ID4gMCk7XG4gICAgICAgIGVsLmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgICAgICAgZWwuZG9tN0V2ZW50RGF0YSA9IFtdO1xuICAgICAgICBkZWxldGUgZWwuZG9tN0V2ZW50RGF0YTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gdHJhbnNpdGlvbkVuZChjYWxsYmFjaykge1xuICBjb25zdCBkb20gPSB0aGlzO1xuXG4gIGZ1bmN0aW9uIGZpcmVDYWxsQmFjayhlKSB7XG4gICAgaWYgKGUudGFyZ2V0ICE9PSB0aGlzKSByZXR1cm47XG4gICAgY2FsbGJhY2suY2FsbCh0aGlzLCBlKTtcbiAgICBkb20ub2ZmKCd0cmFuc2l0aW9uZW5kJywgZmlyZUNhbGxCYWNrKTtcbiAgfVxuXG4gIGlmIChjYWxsYmFjaykge1xuICAgIGRvbS5vbigndHJhbnNpdGlvbmVuZCcsIGZpcmVDYWxsQmFjayk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gYW5pbWF0aW9uRW5kKGNhbGxiYWNrKSB7XG4gIGNvbnN0IGRvbSA9IHRoaXM7XG5cbiAgZnVuY3Rpb24gZmlyZUNhbGxCYWNrKGUpIHtcbiAgICBpZiAoZS50YXJnZXQgIT09IHRoaXMpIHJldHVybjtcbiAgICBjYWxsYmFjay5jYWxsKHRoaXMsIGUpO1xuICAgIGRvbS5vZmYoJ2FuaW1hdGlvbmVuZCcsIGZpcmVDYWxsQmFjayk7XG4gIH1cblxuICBpZiAoY2FsbGJhY2spIHtcbiAgICBkb20ub24oJ2FuaW1hdGlvbmVuZCcsIGZpcmVDYWxsQmFjayk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gd2lkdGgoKSB7XG4gIGNvbnN0IHdpbmRvdyA9IGdldFdpbmRvdygpO1xuXG4gIGlmICh0aGlzWzBdID09PSB3aW5kb3cpIHtcbiAgICByZXR1cm4gd2luZG93LmlubmVyV2lkdGg7XG4gIH1cblxuICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQodGhpcy5jc3MoJ3dpZHRoJykpO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIG91dGVyV2lkdGgoaW5jbHVkZU1hcmdpbnMpIHtcbiAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xuICAgIGlmIChpbmNsdWRlTWFyZ2lucykge1xuICAgICAgY29uc3Qgc3R5bGVzID0gdGhpcy5zdHlsZXMoKTtcbiAgICAgIHJldHVybiB0aGlzWzBdLm9mZnNldFdpZHRoICsgcGFyc2VGbG9hdChzdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgnbWFyZ2luLXJpZ2h0JykpICsgcGFyc2VGbG9hdChzdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgnbWFyZ2luLWxlZnQnKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXNbMF0ub2Zmc2V0V2lkdGg7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gaGVpZ2h0KCkge1xuICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coKTtcblxuICBpZiAodGhpc1swXSA9PT0gd2luZG93KSB7XG4gICAgcmV0dXJuIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgfVxuXG4gIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gcGFyc2VGbG9hdCh0aGlzLmNzcygnaGVpZ2h0JykpO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIG91dGVySGVpZ2h0KGluY2x1ZGVNYXJnaW5zKSB7XG4gIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICBpZiAoaW5jbHVkZU1hcmdpbnMpIHtcbiAgICAgIGNvbnN0IHN0eWxlcyA9IHRoaXMuc3R5bGVzKCk7XG4gICAgICByZXR1cm4gdGhpc1swXS5vZmZzZXRIZWlnaHQgKyBwYXJzZUZsb2F0KHN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdtYXJnaW4tdG9wJykpICsgcGFyc2VGbG9hdChzdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgnbWFyZ2luLWJvdHRvbScpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpc1swXS5vZmZzZXRIZWlnaHQ7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gb2Zmc2V0KCkge1xuICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgY29uc3Qgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gICAgY29uc3QgZG9jdW1lbnQgPSBnZXREb2N1bWVudCgpO1xuICAgIGNvbnN0IGVsID0gdGhpc1swXTtcbiAgICBjb25zdCBib3ggPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICBjb25zdCBjbGllbnRUb3AgPSBlbC5jbGllbnRUb3AgfHwgYm9keS5jbGllbnRUb3AgfHwgMDtcbiAgICBjb25zdCBjbGllbnRMZWZ0ID0gZWwuY2xpZW50TGVmdCB8fCBib2R5LmNsaWVudExlZnQgfHwgMDtcbiAgICBjb25zdCBzY3JvbGxUb3AgPSBlbCA9PT0gd2luZG93ID8gd2luZG93LnNjcm9sbFkgOiBlbC5zY3JvbGxUb3A7XG4gICAgY29uc3Qgc2Nyb2xsTGVmdCA9IGVsID09PSB3aW5kb3cgPyB3aW5kb3cuc2Nyb2xsWCA6IGVsLnNjcm9sbExlZnQ7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogYm94LnRvcCArIHNjcm9sbFRvcCAtIGNsaWVudFRvcCxcbiAgICAgIGxlZnQ6IGJveC5sZWZ0ICsgc2Nyb2xsTGVmdCAtIGNsaWVudExlZnRcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGhpZGUoKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHRoaXNbaV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBzaG93KCkge1xuICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBlbCA9IHRoaXNbaV07XG5cbiAgICBpZiAoZWwuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgfVxuXG4gICAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKCdkaXNwbGF5JykgPT09ICdub25lJykge1xuICAgICAgLy8gU3RpbGwgbm90IHZpc2libGVcbiAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBzdHlsZXMoKSB7XG4gIGNvbnN0IHdpbmRvdyA9IGdldFdpbmRvdygpO1xuICBpZiAodGhpc1swXSkgcmV0dXJuIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXNbMF0sIG51bGwpO1xuICByZXR1cm4ge307XG59XG5cbmZ1bmN0aW9uIGNzcyhwcm9wcywgdmFsdWUpIHtcbiAgY29uc3Qgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gIGxldCBpO1xuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIC5jc3MoJ3dpZHRoJylcbiAgICAgIGlmICh0aGlzWzBdKSByZXR1cm4gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpc1swXSwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZShwcm9wcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIC5jc3MoeyB3aWR0aDogJzEwMHB4JyB9KVxuICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgZm9yIChjb25zdCBwcm9wIGluIHByb3BzKSB7XG4gICAgICAgICAgdGhpc1tpXS5zdHlsZVtwcm9wXSA9IHByb3BzW3Byb3BdO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfVxuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyICYmIHR5cGVvZiBwcm9wcyA9PT0gJ3N0cmluZycpIHtcbiAgICAvLyAuY3NzKCd3aWR0aCcsICcxMDBweCcpXG4gICAgZm9yIChpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHRoaXNbaV0uc3R5bGVbcHJvcHNdID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gZWFjaChjYWxsYmFjaykge1xuICBpZiAoIWNhbGxiYWNrKSByZXR1cm4gdGhpcztcbiAgdGhpcy5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcbiAgICBjYWxsYmFjay5hcHBseShlbCwgW2VsLCBpbmRleF0pO1xuICB9KTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIGZpbHRlcihjYWxsYmFjaykge1xuICBjb25zdCByZXN1bHQgPSBhcnJheUZpbHRlcih0aGlzLCBjYWxsYmFjayk7XG4gIHJldHVybiAkKHJlc3VsdCk7XG59XG5cbmZ1bmN0aW9uIGh0bWwoaHRtbCkge1xuICBpZiAodHlwZW9mIGh0bWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIHRoaXNbMF0gPyB0aGlzWzBdLmlubmVySFRNTCA6IG51bGw7XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB0aGlzW2ldLmlubmVySFRNTCA9IGh0bWw7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gdGV4dCh0ZXh0KSB7XG4gIGlmICh0eXBlb2YgdGV4dCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gdGhpc1swXSA/IHRoaXNbMF0udGV4dENvbnRlbnQudHJpbSgpIDogbnVsbDtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHRoaXNbaV0udGV4dENvbnRlbnQgPSB0ZXh0O1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIGlzKHNlbGVjdG9yKSB7XG4gIGNvbnN0IHdpbmRvdyA9IGdldFdpbmRvdygpO1xuICBjb25zdCBkb2N1bWVudCA9IGdldERvY3VtZW50KCk7XG4gIGNvbnN0IGVsID0gdGhpc1swXTtcbiAgbGV0IGNvbXBhcmVXaXRoO1xuICBsZXQgaTtcbiAgaWYgKCFlbCB8fCB0eXBlb2Ygc2VsZWN0b3IgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAoZWwubWF0Y2hlcykgcmV0dXJuIGVsLm1hdGNoZXMoc2VsZWN0b3IpO1xuICAgIGlmIChlbC53ZWJraXRNYXRjaGVzU2VsZWN0b3IpIHJldHVybiBlbC53ZWJraXRNYXRjaGVzU2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIGlmIChlbC5tc01hdGNoZXNTZWxlY3RvcikgcmV0dXJuIGVsLm1zTWF0Y2hlc1NlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICBjb21wYXJlV2l0aCA9ICQoc2VsZWN0b3IpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGNvbXBhcmVXaXRoLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoY29tcGFyZVdpdGhbaV0gPT09IGVsKSByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoc2VsZWN0b3IgPT09IGRvY3VtZW50KSB7XG4gICAgcmV0dXJuIGVsID09PSBkb2N1bWVudDtcbiAgfVxuXG4gIGlmIChzZWxlY3RvciA9PT0gd2luZG93KSB7XG4gICAgcmV0dXJuIGVsID09PSB3aW5kb3c7XG4gIH1cblxuICBpZiAoc2VsZWN0b3Iubm9kZVR5cGUgfHwgc2VsZWN0b3IgaW5zdGFuY2VvZiBEb203KSB7XG4gICAgY29tcGFyZVdpdGggPSBzZWxlY3Rvci5ub2RlVHlwZSA/IFtzZWxlY3Rvcl0gOiBzZWxlY3RvcjtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBjb21wYXJlV2l0aC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKGNvbXBhcmVXaXRoW2ldID09PSBlbCkgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBpbmRleCgpIHtcbiAgbGV0IGNoaWxkID0gdGhpc1swXTtcbiAgbGV0IGk7XG5cbiAgaWYgKGNoaWxkKSB7XG4gICAgaSA9IDA7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXG4gICAgd2hpbGUgKChjaGlsZCA9IGNoaWxkLnByZXZpb3VzU2libGluZykgIT09IG51bGwpIHtcbiAgICAgIGlmIChjaGlsZC5ub2RlVHlwZSA9PT0gMSkgaSArPSAxO1xuICAgIH1cblxuICAgIHJldHVybiBpO1xuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZXEoaW5kZXgpIHtcbiAgaWYgKHR5cGVvZiBpbmRleCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiB0aGlzO1xuICBjb25zdCBsZW5ndGggPSB0aGlzLmxlbmd0aDtcblxuICBpZiAoaW5kZXggPiBsZW5ndGggLSAxKSB7XG4gICAgcmV0dXJuICQoW10pO1xuICB9XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIGNvbnN0IHJldHVybkluZGV4ID0gbGVuZ3RoICsgaW5kZXg7XG4gICAgaWYgKHJldHVybkluZGV4IDwgMCkgcmV0dXJuICQoW10pO1xuICAgIHJldHVybiAkKFt0aGlzW3JldHVybkluZGV4XV0pO1xuICB9XG5cbiAgcmV0dXJuICQoW3RoaXNbaW5kZXhdXSk7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZCguLi5lbHMpIHtcbiAgbGV0IG5ld0NoaWxkO1xuICBjb25zdCBkb2N1bWVudCA9IGdldERvY3VtZW50KCk7XG5cbiAgZm9yIChsZXQgayA9IDA7IGsgPCBlbHMubGVuZ3RoOyBrICs9IDEpIHtcbiAgICBuZXdDaGlsZCA9IGVsc1trXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHR5cGVvZiBuZXdDaGlsZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29uc3QgdGVtcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0ZW1wRGl2LmlubmVySFRNTCA9IG5ld0NoaWxkO1xuXG4gICAgICAgIHdoaWxlICh0ZW1wRGl2LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICB0aGlzW2ldLmFwcGVuZENoaWxkKHRlbXBEaXYuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobmV3Q2hpbGQgaW5zdGFuY2VvZiBEb203KSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbmV3Q2hpbGQubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICB0aGlzW2ldLmFwcGVuZENoaWxkKG5ld0NoaWxkW2pdKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpc1tpXS5hcHBlbmRDaGlsZChuZXdDaGlsZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZFRvKHBhcmVudCkge1xuICAkKHBhcmVudCkuYXBwZW5kKHRoaXMpO1xuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gcHJlcGVuZChuZXdDaGlsZCkge1xuICBjb25zdCBkb2N1bWVudCA9IGdldERvY3VtZW50KCk7XG4gIGxldCBpO1xuICBsZXQgajtcblxuICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmICh0eXBlb2YgbmV3Q2hpbGQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zdCB0ZW1wRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0ZW1wRGl2LmlubmVySFRNTCA9IG5ld0NoaWxkO1xuXG4gICAgICBmb3IgKGogPSB0ZW1wRGl2LmNoaWxkTm9kZXMubGVuZ3RoIC0gMTsgaiA+PSAwOyBqIC09IDEpIHtcbiAgICAgICAgdGhpc1tpXS5pbnNlcnRCZWZvcmUodGVtcERpdi5jaGlsZE5vZGVzW2pdLCB0aGlzW2ldLmNoaWxkTm9kZXNbMF0pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobmV3Q2hpbGQgaW5zdGFuY2VvZiBEb203KSB7XG4gICAgICBmb3IgKGogPSAwOyBqIDwgbmV3Q2hpbGQubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgdGhpc1tpXS5pbnNlcnRCZWZvcmUobmV3Q2hpbGRbal0sIHRoaXNbaV0uY2hpbGROb2Rlc1swXSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXNbaV0uaW5zZXJ0QmVmb3JlKG5ld0NoaWxkLCB0aGlzW2ldLmNoaWxkTm9kZXNbMF0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBwcmVwZW5kVG8ocGFyZW50KSB7XG4gICQocGFyZW50KS5wcmVwZW5kKHRoaXMpO1xuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0QmVmb3JlKHNlbGVjdG9yKSB7XG4gIGNvbnN0IGJlZm9yZSA9ICQoc2VsZWN0b3IpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChiZWZvcmUubGVuZ3RoID09PSAxKSB7XG4gICAgICBiZWZvcmVbMF0ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpc1tpXSwgYmVmb3JlWzBdKTtcbiAgICB9IGVsc2UgaWYgKGJlZm9yZS5sZW5ndGggPiAxKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGJlZm9yZS5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICBiZWZvcmVbal0ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpc1tpXS5jbG9uZU5vZGUodHJ1ZSksIGJlZm9yZVtqXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGluc2VydEFmdGVyKHNlbGVjdG9yKSB7XG4gIGNvbnN0IGFmdGVyID0gJChzZWxlY3Rvcik7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKGFmdGVyLmxlbmd0aCA9PT0gMSkge1xuICAgICAgYWZ0ZXJbMF0ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpc1tpXSwgYWZ0ZXJbMF0ubmV4dFNpYmxpbmcpO1xuICAgIH0gZWxzZSBpZiAoYWZ0ZXIubGVuZ3RoID4gMSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhZnRlci5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICBhZnRlcltqXS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzW2ldLmNsb25lTm9kZSh0cnVlKSwgYWZ0ZXJbal0ubmV4dFNpYmxpbmcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBuZXh0KHNlbGVjdG9yKSB7XG4gIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgIGlmICh0aGlzWzBdLm5leHRFbGVtZW50U2libGluZyAmJiAkKHRoaXNbMF0ubmV4dEVsZW1lbnRTaWJsaW5nKS5pcyhzZWxlY3RvcikpIHtcbiAgICAgICAgcmV0dXJuICQoW3RoaXNbMF0ubmV4dEVsZW1lbnRTaWJsaW5nXSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAkKFtdKTtcbiAgICB9XG5cbiAgICBpZiAodGhpc1swXS5uZXh0RWxlbWVudFNpYmxpbmcpIHJldHVybiAkKFt0aGlzWzBdLm5leHRFbGVtZW50U2libGluZ10pO1xuICAgIHJldHVybiAkKFtdKTtcbiAgfVxuXG4gIHJldHVybiAkKFtdKTtcbn1cblxuZnVuY3Rpb24gbmV4dEFsbChzZWxlY3Rvcikge1xuICBjb25zdCBuZXh0RWxzID0gW107XG4gIGxldCBlbCA9IHRoaXNbMF07XG4gIGlmICghZWwpIHJldHVybiAkKFtdKTtcblxuICB3aGlsZSAoZWwubmV4dEVsZW1lbnRTaWJsaW5nKSB7XG4gICAgY29uc3QgbmV4dCA9IGVsLm5leHRFbGVtZW50U2libGluZzsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICBpZiAoJChuZXh0KS5pcyhzZWxlY3RvcikpIG5leHRFbHMucHVzaChuZXh0KTtcbiAgICB9IGVsc2UgbmV4dEVscy5wdXNoKG5leHQpO1xuXG4gICAgZWwgPSBuZXh0O1xuICB9XG5cbiAgcmV0dXJuICQobmV4dEVscyk7XG59XG5cbmZ1bmN0aW9uIHByZXYoc2VsZWN0b3IpIHtcbiAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IGVsID0gdGhpc1swXTtcblxuICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgaWYgKGVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmcgJiYgJChlbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKS5pcyhzZWxlY3RvcikpIHtcbiAgICAgICAgcmV0dXJuICQoW2VsLnByZXZpb3VzRWxlbWVudFNpYmxpbmddKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuICQoW10pO1xuICAgIH1cblxuICAgIGlmIChlbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKSByZXR1cm4gJChbZWwucHJldmlvdXNFbGVtZW50U2libGluZ10pO1xuICAgIHJldHVybiAkKFtdKTtcbiAgfVxuXG4gIHJldHVybiAkKFtdKTtcbn1cblxuZnVuY3Rpb24gcHJldkFsbChzZWxlY3Rvcikge1xuICBjb25zdCBwcmV2RWxzID0gW107XG4gIGxldCBlbCA9IHRoaXNbMF07XG4gIGlmICghZWwpIHJldHVybiAkKFtdKTtcblxuICB3aGlsZSAoZWwucHJldmlvdXNFbGVtZW50U2libGluZykge1xuICAgIGNvbnN0IHByZXYgPSBlbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgIGlmICgkKHByZXYpLmlzKHNlbGVjdG9yKSkgcHJldkVscy5wdXNoKHByZXYpO1xuICAgIH0gZWxzZSBwcmV2RWxzLnB1c2gocHJldik7XG5cbiAgICBlbCA9IHByZXY7XG4gIH1cblxuICByZXR1cm4gJChwcmV2RWxzKTtcbn1cblxuZnVuY3Rpb24gc2libGluZ3Moc2VsZWN0b3IpIHtcbiAgcmV0dXJuIHRoaXMubmV4dEFsbChzZWxlY3RvcikuYWRkKHRoaXMucHJldkFsbChzZWxlY3RvcikpO1xufVxuXG5mdW5jdGlvbiBwYXJlbnQoc2VsZWN0b3IpIHtcbiAgY29uc3QgcGFyZW50cyA9IFtdOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKHRoaXNbaV0ucGFyZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICAgIGlmICgkKHRoaXNbaV0ucGFyZW50Tm9kZSkuaXMoc2VsZWN0b3IpKSBwYXJlbnRzLnB1c2godGhpc1tpXS5wYXJlbnROb2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmVudHMucHVzaCh0aGlzW2ldLnBhcmVudE5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAkKHBhcmVudHMpO1xufVxuXG5mdW5jdGlvbiBwYXJlbnRzKHNlbGVjdG9yKSB7XG4gIGNvbnN0IHBhcmVudHMgPSBbXTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGxldCBwYXJlbnQgPSB0aGlzW2ldLnBhcmVudE5vZGU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICAgIHdoaWxlIChwYXJlbnQpIHtcbiAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICBpZiAoJChwYXJlbnQpLmlzKHNlbGVjdG9yKSkgcGFyZW50cy5wdXNoKHBhcmVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJlbnRzLnB1c2gocGFyZW50KTtcbiAgICAgIH1cblxuICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICQocGFyZW50cyk7XG59XG5cbmZ1bmN0aW9uIGNsb3Nlc3Qoc2VsZWN0b3IpIHtcbiAgbGV0IGNsb3Nlc3QgPSB0aGlzOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgaWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gJChbXSk7XG4gIH1cblxuICBpZiAoIWNsb3Nlc3QuaXMoc2VsZWN0b3IpKSB7XG4gICAgY2xvc2VzdCA9IGNsb3Nlc3QucGFyZW50cyhzZWxlY3RvcikuZXEoMCk7XG4gIH1cblxuICByZXR1cm4gY2xvc2VzdDtcbn1cblxuZnVuY3Rpb24gZmluZChzZWxlY3Rvcikge1xuICBjb25zdCBmb3VuZEVsZW1lbnRzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgZm91bmQgPSB0aGlzW2ldLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBmb3VuZC5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgZm91bmRFbGVtZW50cy5wdXNoKGZvdW5kW2pdKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gJChmb3VuZEVsZW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gY2hpbGRyZW4oc2VsZWN0b3IpIHtcbiAgY29uc3QgY2hpbGRyZW4gPSBbXTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzW2ldLmNoaWxkcmVuO1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBjaGlsZE5vZGVzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICBpZiAoIXNlbGVjdG9yIHx8ICQoY2hpbGROb2Rlc1tqXSkuaXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIGNoaWxkcmVuLnB1c2goY2hpbGROb2Rlc1tqXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICQoY2hpbGRyZW4pO1xufVxuXG5mdW5jdGlvbiByZW1vdmUoKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmICh0aGlzW2ldLnBhcmVudE5vZGUpIHRoaXNbaV0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzW2ldKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBkZXRhY2goKSB7XG4gIHJldHVybiB0aGlzLnJlbW92ZSgpO1xufVxuXG5mdW5jdGlvbiBhZGQoLi4uZWxzKSB7XG4gIGNvbnN0IGRvbSA9IHRoaXM7XG4gIGxldCBpO1xuICBsZXQgajtcblxuICBmb3IgKGkgPSAwOyBpIDwgZWxzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgdG9BZGQgPSAkKGVsc1tpXSk7XG5cbiAgICBmb3IgKGogPSAwOyBqIDwgdG9BZGQubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgIGRvbS5wdXNoKHRvQWRkW2pdKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZG9tO1xufVxuXG5mdW5jdGlvbiBlbXB0eSgpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgZWwgPSB0aGlzW2ldO1xuXG4gICAgaWYgKGVsLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGVsLmNoaWxkTm9kZXMubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgaWYgKGVsLmNoaWxkTm9kZXNbal0ucGFyZW50Tm9kZSkge1xuICAgICAgICAgIGVsLmNoaWxkTm9kZXNbal0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbC5jaGlsZE5vZGVzW2pdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBlbC50ZXh0Q29udGVudCA9ICcnO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcblxuZnVuY3Rpb24gc2Nyb2xsVG8oLi4uYXJncykge1xuICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgbGV0IFtsZWZ0LCB0b3AsIGR1cmF0aW9uLCBlYXNpbmcsIGNhbGxiYWNrXSA9IGFyZ3M7XG5cbiAgaWYgKGFyZ3MubGVuZ3RoID09PSA0ICYmIHR5cGVvZiBlYXNpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjYWxsYmFjayA9IGVhc2luZztcbiAgICBbbGVmdCwgdG9wLCBkdXJhdGlvbiwgY2FsbGJhY2ssIGVhc2luZ10gPSBhcmdzO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBlYXNpbmcgPT09ICd1bmRlZmluZWQnKSBlYXNpbmcgPSAnc3dpbmcnO1xuICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gICAgY29uc3QgZWwgPSB0aGlzO1xuICAgIGxldCBjdXJyZW50VG9wO1xuICAgIGxldCBjdXJyZW50TGVmdDtcbiAgICBsZXQgbWF4VG9wO1xuICAgIGxldCBtYXhMZWZ0O1xuICAgIGxldCBuZXdUb3A7XG4gICAgbGV0IG5ld0xlZnQ7XG4gICAgbGV0IHNjcm9sbFRvcDsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gICAgbGV0IHNjcm9sbExlZnQ7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICAgIGxldCBhbmltYXRlVG9wID0gdG9wID4gMCB8fCB0b3AgPT09IDA7XG4gICAgbGV0IGFuaW1hdGVMZWZ0ID0gbGVmdCA+IDAgfHwgbGVmdCA9PT0gMDtcblxuICAgIGlmICh0eXBlb2YgZWFzaW5nID09PSAndW5kZWZpbmVkJykge1xuICAgICAgZWFzaW5nID0gJ3N3aW5nJztcbiAgICB9XG5cbiAgICBpZiAoYW5pbWF0ZVRvcCkge1xuICAgICAgY3VycmVudFRvcCA9IGVsLnNjcm9sbFRvcDtcblxuICAgICAgaWYgKCFkdXJhdGlvbikge1xuICAgICAgICBlbC5zY3JvbGxUb3AgPSB0b3A7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGFuaW1hdGVMZWZ0KSB7XG4gICAgICBjdXJyZW50TGVmdCA9IGVsLnNjcm9sbExlZnQ7XG5cbiAgICAgIGlmICghZHVyYXRpb24pIHtcbiAgICAgICAgZWwuc2Nyb2xsTGVmdCA9IGxlZnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFkdXJhdGlvbikgcmV0dXJuO1xuXG4gICAgaWYgKGFuaW1hdGVUb3ApIHtcbiAgICAgIG1heFRvcCA9IGVsLnNjcm9sbEhlaWdodCAtIGVsLm9mZnNldEhlaWdodDtcbiAgICAgIG5ld1RvcCA9IE1hdGgubWF4KE1hdGgubWluKHRvcCwgbWF4VG9wKSwgMCk7XG4gICAgfVxuXG4gICAgaWYgKGFuaW1hdGVMZWZ0KSB7XG4gICAgICBtYXhMZWZ0ID0gZWwuc2Nyb2xsV2lkdGggLSBlbC5vZmZzZXRXaWR0aDtcbiAgICAgIG5ld0xlZnQgPSBNYXRoLm1heChNYXRoLm1pbihsZWZ0LCBtYXhMZWZ0KSwgMCk7XG4gICAgfVxuXG4gICAgbGV0IHN0YXJ0VGltZSA9IG51bGw7XG4gICAgaWYgKGFuaW1hdGVUb3AgJiYgbmV3VG9wID09PSBjdXJyZW50VG9wKSBhbmltYXRlVG9wID0gZmFsc2U7XG4gICAgaWYgKGFuaW1hdGVMZWZ0ICYmIG5ld0xlZnQgPT09IGN1cnJlbnRMZWZ0KSBhbmltYXRlTGVmdCA9IGZhbHNlO1xuXG4gICAgZnVuY3Rpb24gcmVuZGVyKHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSkge1xuICAgICAgaWYgKHN0YXJ0VGltZSA9PT0gbnVsbCkge1xuICAgICAgICBzdGFydFRpbWUgPSB0aW1lO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9ncmVzcyA9IE1hdGgubWF4KE1hdGgubWluKCh0aW1lIC0gc3RhcnRUaW1lKSAvIGR1cmF0aW9uLCAxKSwgMCk7XG4gICAgICBjb25zdCBlYXNlUHJvZ3Jlc3MgPSBlYXNpbmcgPT09ICdsaW5lYXInID8gcHJvZ3Jlc3MgOiAwLjUgLSBNYXRoLmNvcyhwcm9ncmVzcyAqIE1hdGguUEkpIC8gMjtcbiAgICAgIGxldCBkb25lO1xuICAgICAgaWYgKGFuaW1hdGVUb3ApIHNjcm9sbFRvcCA9IGN1cnJlbnRUb3AgKyBlYXNlUHJvZ3Jlc3MgKiAobmV3VG9wIC0gY3VycmVudFRvcCk7XG4gICAgICBpZiAoYW5pbWF0ZUxlZnQpIHNjcm9sbExlZnQgPSBjdXJyZW50TGVmdCArIGVhc2VQcm9ncmVzcyAqIChuZXdMZWZ0IC0gY3VycmVudExlZnQpO1xuXG4gICAgICBpZiAoYW5pbWF0ZVRvcCAmJiBuZXdUb3AgPiBjdXJyZW50VG9wICYmIHNjcm9sbFRvcCA+PSBuZXdUb3ApIHtcbiAgICAgICAgZWwuc2Nyb2xsVG9wID0gbmV3VG9wO1xuICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGFuaW1hdGVUb3AgJiYgbmV3VG9wIDwgY3VycmVudFRvcCAmJiBzY3JvbGxUb3AgPD0gbmV3VG9wKSB7XG4gICAgICAgIGVsLnNjcm9sbFRvcCA9IG5ld1RvcDtcbiAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChhbmltYXRlTGVmdCAmJiBuZXdMZWZ0ID4gY3VycmVudExlZnQgJiYgc2Nyb2xsTGVmdCA+PSBuZXdMZWZ0KSB7XG4gICAgICAgIGVsLnNjcm9sbExlZnQgPSBuZXdMZWZ0O1xuICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGFuaW1hdGVMZWZ0ICYmIG5ld0xlZnQgPCBjdXJyZW50TGVmdCAmJiBzY3JvbGxMZWZ0IDw9IG5ld0xlZnQpIHtcbiAgICAgICAgZWwuc2Nyb2xsTGVmdCA9IG5ld0xlZnQ7XG4gICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoZG9uZSkge1xuICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGFuaW1hdGVUb3ApIGVsLnNjcm9sbFRvcCA9IHNjcm9sbFRvcDtcbiAgICAgIGlmIChhbmltYXRlTGVmdCkgZWwuc2Nyb2xsTGVmdCA9IHNjcm9sbExlZnQ7XG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG4gICAgfVxuXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xuICB9KTtcbn0gLy8gc2Nyb2xsVG9wKHRvcCwgZHVyYXRpb24sIGVhc2luZywgY2FsbGJhY2spIHtcblxuXG5mdW5jdGlvbiBzY3JvbGxUb3AoLi4uYXJncykge1xuICBsZXQgW3RvcCwgZHVyYXRpb24sIGVhc2luZywgY2FsbGJhY2tdID0gYXJncztcblxuICBpZiAoYXJncy5sZW5ndGggPT09IDMgJiYgdHlwZW9mIGVhc2luZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIFt0b3AsIGR1cmF0aW9uLCBjYWxsYmFjaywgZWFzaW5nXSA9IGFyZ3M7XG4gIH1cblxuICBjb25zdCBkb20gPSB0aGlzO1xuXG4gIGlmICh0eXBlb2YgdG9wID09PSAndW5kZWZpbmVkJykge1xuICAgIGlmIChkb20ubGVuZ3RoID4gMCkgcmV0dXJuIGRvbVswXS5zY3JvbGxUb3A7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gZG9tLnNjcm9sbFRvKHVuZGVmaW5lZCwgdG9wLCBkdXJhdGlvbiwgZWFzaW5nLCBjYWxsYmFjayk7XG59XG5cbmZ1bmN0aW9uIHNjcm9sbExlZnQoLi4uYXJncykge1xuICBsZXQgW2xlZnQsIGR1cmF0aW9uLCBlYXNpbmcsIGNhbGxiYWNrXSA9IGFyZ3M7XG5cbiAgaWYgKGFyZ3MubGVuZ3RoID09PSAzICYmIHR5cGVvZiBlYXNpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICBbbGVmdCwgZHVyYXRpb24sIGNhbGxiYWNrLCBlYXNpbmddID0gYXJncztcbiAgfVxuXG4gIGNvbnN0IGRvbSA9IHRoaXM7XG5cbiAgaWYgKHR5cGVvZiBsZWZ0ID09PSAndW5kZWZpbmVkJykge1xuICAgIGlmIChkb20ubGVuZ3RoID4gMCkgcmV0dXJuIGRvbVswXS5zY3JvbGxMZWZ0O1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGRvbS5zY3JvbGxUbyhsZWZ0LCB1bmRlZmluZWQsIGR1cmF0aW9uLCBlYXNpbmcsIGNhbGxiYWNrKTtcbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5cbmZ1bmN0aW9uIGFuaW1hdGUoaW5pdGlhbFByb3BzLCBpbml0aWFsUGFyYW1zKSB7XG4gIGNvbnN0IHdpbmRvdyA9IGdldFdpbmRvdygpO1xuICBjb25zdCBlbHMgPSB0aGlzO1xuICBjb25zdCBhID0ge1xuICAgIHByb3BzOiBPYmplY3QuYXNzaWduKHt9LCBpbml0aWFsUHJvcHMpLFxuICAgIHBhcmFtczogT2JqZWN0LmFzc2lnbih7XG4gICAgICBkdXJhdGlvbjogMzAwLFxuICAgICAgZWFzaW5nOiAnc3dpbmcnIC8vIG9yICdsaW5lYXInXG5cbiAgICAgIC8qIENhbGxiYWNrc1xuICAgICAgYmVnaW4oZWxlbWVudHMpXG4gICAgICBjb21wbGV0ZShlbGVtZW50cylcbiAgICAgIHByb2dyZXNzKGVsZW1lbnRzLCBjb21wbGV0ZSwgcmVtYWluaW5nLCBzdGFydCwgdHdlZW5WYWx1ZSlcbiAgICAgICovXG5cbiAgICB9LCBpbml0aWFsUGFyYW1zKSxcbiAgICBlbGVtZW50czogZWxzLFxuICAgIGFuaW1hdGluZzogZmFsc2UsXG4gICAgcXVlOiBbXSxcblxuICAgIGVhc2luZ1Byb2dyZXNzKGVhc2luZywgcHJvZ3Jlc3MpIHtcbiAgICAgIGlmIChlYXNpbmcgPT09ICdzd2luZycpIHtcbiAgICAgICAgcmV0dXJuIDAuNSAtIE1hdGguY29zKHByb2dyZXNzICogTWF0aC5QSSkgLyAyO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGVhc2luZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gZWFzaW5nKHByb2dyZXNzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByb2dyZXNzO1xuICAgIH0sXG5cbiAgICBzdG9wKCkge1xuICAgICAgaWYgKGEuZnJhbWVJZCkge1xuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoYS5mcmFtZUlkKTtcbiAgICAgIH1cblxuICAgICAgYS5hbmltYXRpbmcgPSBmYWxzZTtcbiAgICAgIGEuZWxlbWVudHMuZWFjaChlbCA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbDtcbiAgICAgICAgZGVsZXRlIGVsZW1lbnQuZG9tN0FuaW1hdGVJbnN0YW5jZTtcbiAgICAgIH0pO1xuICAgICAgYS5xdWUgPSBbXTtcbiAgICB9LFxuXG4gICAgZG9uZShjb21wbGV0ZSkge1xuICAgICAgYS5hbmltYXRpbmcgPSBmYWxzZTtcbiAgICAgIGEuZWxlbWVudHMuZWFjaChlbCA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbDtcbiAgICAgICAgZGVsZXRlIGVsZW1lbnQuZG9tN0FuaW1hdGVJbnN0YW5jZTtcbiAgICAgIH0pO1xuICAgICAgaWYgKGNvbXBsZXRlKSBjb21wbGV0ZShlbHMpO1xuXG4gICAgICBpZiAoYS5xdWUubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBxdWUgPSBhLnF1ZS5zaGlmdCgpO1xuICAgICAgICBhLmFuaW1hdGUocXVlWzBdLCBxdWVbMV0pO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBhbmltYXRlKHByb3BzLCBwYXJhbXMpIHtcbiAgICAgIGlmIChhLmFuaW1hdGluZykge1xuICAgICAgICBhLnF1ZS5wdXNoKFtwcm9wcywgcGFyYW1zXSk7XG4gICAgICAgIHJldHVybiBhO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBlbGVtZW50cyA9IFtdOyAvLyBEZWZpbmUgJiBDYWNoZSBJbml0aWFscyAmIFVuaXRzXG5cbiAgICAgIGEuZWxlbWVudHMuZWFjaCgoZWwsIGluZGV4KSA9PiB7XG4gICAgICAgIGxldCBpbml0aWFsRnVsbFZhbHVlO1xuICAgICAgICBsZXQgaW5pdGlhbFZhbHVlO1xuICAgICAgICBsZXQgdW5pdDtcbiAgICAgICAgbGV0IGZpbmFsVmFsdWU7XG4gICAgICAgIGxldCBmaW5hbEZ1bGxWYWx1ZTtcbiAgICAgICAgaWYgKCFlbC5kb203QW5pbWF0ZUluc3RhbmNlKSBhLmVsZW1lbnRzW2luZGV4XS5kb203QW5pbWF0ZUluc3RhbmNlID0gYTtcbiAgICAgICAgZWxlbWVudHNbaW5kZXhdID0ge1xuICAgICAgICAgIGNvbnRhaW5lcjogZWxcbiAgICAgICAgfTtcbiAgICAgICAgT2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2gocHJvcCA9PiB7XG4gICAgICAgICAgaW5pdGlhbEZ1bGxWYWx1ZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKHByb3ApLnJlcGxhY2UoJywnLCAnLicpO1xuICAgICAgICAgIGluaXRpYWxWYWx1ZSA9IHBhcnNlRmxvYXQoaW5pdGlhbEZ1bGxWYWx1ZSk7XG4gICAgICAgICAgdW5pdCA9IGluaXRpYWxGdWxsVmFsdWUucmVwbGFjZShpbml0aWFsVmFsdWUsICcnKTtcbiAgICAgICAgICBmaW5hbFZhbHVlID0gcGFyc2VGbG9hdChwcm9wc1twcm9wXSk7XG4gICAgICAgICAgZmluYWxGdWxsVmFsdWUgPSBwcm9wc1twcm9wXSArIHVuaXQ7XG4gICAgICAgICAgZWxlbWVudHNbaW5kZXhdW3Byb3BdID0ge1xuICAgICAgICAgICAgaW5pdGlhbEZ1bGxWYWx1ZSxcbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZSxcbiAgICAgICAgICAgIHVuaXQsXG4gICAgICAgICAgICBmaW5hbFZhbHVlLFxuICAgICAgICAgICAgZmluYWxGdWxsVmFsdWUsXG4gICAgICAgICAgICBjdXJyZW50VmFsdWU6IGluaXRpYWxWYWx1ZVxuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBsZXQgc3RhcnRUaW1lID0gbnVsbDtcbiAgICAgIGxldCB0aW1lO1xuICAgICAgbGV0IGVsZW1lbnRzRG9uZSA9IDA7XG4gICAgICBsZXQgcHJvcHNEb25lID0gMDtcbiAgICAgIGxldCBkb25lO1xuICAgICAgbGV0IGJlZ2FuID0gZmFsc2U7XG4gICAgICBhLmFuaW1hdGluZyA9IHRydWU7XG5cbiAgICAgIGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICBsZXQgcHJvZ3Jlc3M7XG4gICAgICAgIGxldCBlYXNlUHJvZ3Jlc3M7IC8vIGxldCBlbDtcblxuICAgICAgICBpZiAoIWJlZ2FuKSB7XG4gICAgICAgICAgYmVnYW4gPSB0cnVlO1xuICAgICAgICAgIGlmIChwYXJhbXMuYmVnaW4pIHBhcmFtcy5iZWdpbihlbHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0YXJ0VGltZSA9PT0gbnVsbCkge1xuICAgICAgICAgIHN0YXJ0VGltZSA9IHRpbWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyYW1zLnByb2dyZXNzKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgcGFyYW1zLnByb2dyZXNzKGVscywgTWF0aC5tYXgoTWF0aC5taW4oKHRpbWUgLSBzdGFydFRpbWUpIC8gcGFyYW1zLmR1cmF0aW9uLCAxKSwgMCksIHN0YXJ0VGltZSArIHBhcmFtcy5kdXJhdGlvbiAtIHRpbWUgPCAwID8gMCA6IHN0YXJ0VGltZSArIHBhcmFtcy5kdXJhdGlvbiAtIHRpbWUsIHN0YXJ0VGltZSk7XG4gICAgICAgIH1cblxuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgIGNvbnN0IGVsID0gZWxlbWVudDtcbiAgICAgICAgICBpZiAoZG9uZSB8fCBlbC5kb25lKSByZXR1cm47XG4gICAgICAgICAgT2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2gocHJvcCA9PiB7XG4gICAgICAgICAgICBpZiAoZG9uZSB8fCBlbC5kb25lKSByZXR1cm47XG4gICAgICAgICAgICBwcm9ncmVzcyA9IE1hdGgubWF4KE1hdGgubWluKCh0aW1lIC0gc3RhcnRUaW1lKSAvIHBhcmFtcy5kdXJhdGlvbiwgMSksIDApO1xuICAgICAgICAgICAgZWFzZVByb2dyZXNzID0gYS5lYXNpbmdQcm9ncmVzcyhwYXJhbXMuZWFzaW5nLCBwcm9ncmVzcyk7XG4gICAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgIGluaXRpYWxWYWx1ZSxcbiAgICAgICAgICAgICAgZmluYWxWYWx1ZSxcbiAgICAgICAgICAgICAgdW5pdFxuICAgICAgICAgICAgfSA9IGVsW3Byb3BdO1xuICAgICAgICAgICAgZWxbcHJvcF0uY3VycmVudFZhbHVlID0gaW5pdGlhbFZhbHVlICsgZWFzZVByb2dyZXNzICogKGZpbmFsVmFsdWUgLSBpbml0aWFsVmFsdWUpO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFZhbHVlID0gZWxbcHJvcF0uY3VycmVudFZhbHVlO1xuXG4gICAgICAgICAgICBpZiAoZmluYWxWYWx1ZSA+IGluaXRpYWxWYWx1ZSAmJiBjdXJyZW50VmFsdWUgPj0gZmluYWxWYWx1ZSB8fCBmaW5hbFZhbHVlIDwgaW5pdGlhbFZhbHVlICYmIGN1cnJlbnRWYWx1ZSA8PSBmaW5hbFZhbHVlKSB7XG4gICAgICAgICAgICAgIGVsLmNvbnRhaW5lci5zdHlsZVtwcm9wXSA9IGZpbmFsVmFsdWUgKyB1bml0O1xuICAgICAgICAgICAgICBwcm9wc0RvbmUgKz0gMTtcblxuICAgICAgICAgICAgICBpZiAocHJvcHNEb25lID09PSBPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZWwuZG9uZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgZWxlbWVudHNEb25lICs9IDE7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoZWxlbWVudHNEb25lID09PSBlbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZG9uZSkge1xuICAgICAgICAgICAgICBhLmRvbmUocGFyYW1zLmNvbXBsZXRlKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbC5jb250YWluZXIuc3R5bGVbcHJvcF0gPSBjdXJyZW50VmFsdWUgKyB1bml0O1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGRvbmUpIHJldHVybjsgLy8gVGhlbiBjYWxsXG5cbiAgICAgICAgYS5mcmFtZUlkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xuICAgICAgfVxuXG4gICAgICBhLmZyYW1lSWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG4gICAgICByZXR1cm4gYTtcbiAgICB9XG5cbiAgfTtcblxuICBpZiAoYS5lbGVtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZWxzO1xuICB9XG5cbiAgbGV0IGFuaW1hdGVJbnN0YW5jZTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGEuZWxlbWVudHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoYS5lbGVtZW50c1tpXS5kb203QW5pbWF0ZUluc3RhbmNlKSB7XG4gICAgICBhbmltYXRlSW5zdGFuY2UgPSBhLmVsZW1lbnRzW2ldLmRvbTdBbmltYXRlSW5zdGFuY2U7XG4gICAgfSBlbHNlIGEuZWxlbWVudHNbaV0uZG9tN0FuaW1hdGVJbnN0YW5jZSA9IGE7XG4gIH1cblxuICBpZiAoIWFuaW1hdGVJbnN0YW5jZSkge1xuICAgIGFuaW1hdGVJbnN0YW5jZSA9IGE7XG4gIH1cblxuICBpZiAoaW5pdGlhbFByb3BzID09PSAnc3RvcCcpIHtcbiAgICBhbmltYXRlSW5zdGFuY2Uuc3RvcCgpO1xuICB9IGVsc2Uge1xuICAgIGFuaW1hdGVJbnN0YW5jZS5hbmltYXRlKGEucHJvcHMsIGEucGFyYW1zKTtcbiAgfVxuXG4gIHJldHVybiBlbHM7XG59XG5cbmZ1bmN0aW9uIHN0b3AoKSB7XG4gIGNvbnN0IGVscyA9IHRoaXM7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoZWxzW2ldLmRvbTdBbmltYXRlSW5zdGFuY2UpIHtcbiAgICAgIGVsc1tpXS5kb203QW5pbWF0ZUluc3RhbmNlLnN0b3AoKTtcbiAgICB9XG4gIH1cbn1cblxuY29uc3Qgbm9UcmlnZ2VyID0gJ3Jlc2l6ZSBzY3JvbGwnLnNwbGl0KCcgJyk7XG5cbmZ1bmN0aW9uIHNob3J0Y3V0KG5hbWUpIHtcbiAgZnVuY3Rpb24gZXZlbnRIYW5kbGVyKC4uLmFyZ3MpIHtcbiAgICBpZiAodHlwZW9mIGFyZ3NbMF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKG5vVHJpZ2dlci5pbmRleE9mKG5hbWUpIDwgMCkge1xuICAgICAgICAgIGlmIChuYW1lIGluIHRoaXNbaV0pIHRoaXNbaV1bbmFtZV0oKTtlbHNlIHtcbiAgICAgICAgICAgICQodGhpc1tpXSkudHJpZ2dlcihuYW1lKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMub24obmFtZSwgLi4uYXJncyk7XG4gIH1cblxuICByZXR1cm4gZXZlbnRIYW5kbGVyO1xufVxuXG5jb25zdCBjbGljayA9IHNob3J0Y3V0KCdjbGljaycpO1xuY29uc3QgYmx1ciA9IHNob3J0Y3V0KCdibHVyJyk7XG5jb25zdCBmb2N1cyA9IHNob3J0Y3V0KCdmb2N1cycpO1xuY29uc3QgZm9jdXNpbiA9IHNob3J0Y3V0KCdmb2N1c2luJyk7XG5jb25zdCBmb2N1c291dCA9IHNob3J0Y3V0KCdmb2N1c291dCcpO1xuY29uc3Qga2V5dXAgPSBzaG9ydGN1dCgna2V5dXAnKTtcbmNvbnN0IGtleWRvd24gPSBzaG9ydGN1dCgna2V5ZG93bicpO1xuY29uc3Qga2V5cHJlc3MgPSBzaG9ydGN1dCgna2V5cHJlc3MnKTtcbmNvbnN0IHN1Ym1pdCA9IHNob3J0Y3V0KCdzdWJtaXQnKTtcbmNvbnN0IGNoYW5nZSA9IHNob3J0Y3V0KCdjaGFuZ2UnKTtcbmNvbnN0IG1vdXNlZG93biA9IHNob3J0Y3V0KCdtb3VzZWRvd24nKTtcbmNvbnN0IG1vdXNlbW92ZSA9IHNob3J0Y3V0KCdtb3VzZW1vdmUnKTtcbmNvbnN0IG1vdXNldXAgPSBzaG9ydGN1dCgnbW91c2V1cCcpO1xuY29uc3QgbW91c2VlbnRlciA9IHNob3J0Y3V0KCdtb3VzZWVudGVyJyk7XG5jb25zdCBtb3VzZWxlYXZlID0gc2hvcnRjdXQoJ21vdXNlbGVhdmUnKTtcbmNvbnN0IG1vdXNlb3V0ID0gc2hvcnRjdXQoJ21vdXNlb3V0Jyk7XG5jb25zdCBtb3VzZW92ZXIgPSBzaG9ydGN1dCgnbW91c2VvdmVyJyk7XG5jb25zdCB0b3VjaHN0YXJ0ID0gc2hvcnRjdXQoJ3RvdWNoc3RhcnQnKTtcbmNvbnN0IHRvdWNoZW5kID0gc2hvcnRjdXQoJ3RvdWNoZW5kJyk7XG5jb25zdCB0b3VjaG1vdmUgPSBzaG9ydGN1dCgndG91Y2htb3ZlJyk7XG5jb25zdCByZXNpemUgPSBzaG9ydGN1dCgncmVzaXplJyk7XG5jb25zdCBzY3JvbGwgPSBzaG9ydGN1dCgnc2Nyb2xsJyk7XG5cbmV4cG9ydCBkZWZhdWx0ICQ7XG5leHBvcnQgeyAkLCBhZGQsIGFkZENsYXNzLCBhbmltYXRlLCBhbmltYXRpb25FbmQsIGFwcGVuZCwgYXBwZW5kVG8sIGF0dHIsIGJsdXIsIGNoYW5nZSwgY2hpbGRyZW4sIGNsaWNrLCBjbG9zZXN0LCBjc3MsIGRhdGEsIGRhdGFzZXQsIGRldGFjaCwgZWFjaCwgZW1wdHksIGVxLCBmaWx0ZXIsIGZpbmQsIGZvY3VzLCBmb2N1c2luLCBmb2N1c291dCwgaGFzQ2xhc3MsIGhlaWdodCwgaGlkZSwgaHRtbCwgaW5kZXgsIGluc2VydEFmdGVyLCBpbnNlcnRCZWZvcmUsIGlzLCBrZXlkb3duLCBrZXlwcmVzcywga2V5dXAsIG1vdXNlZG93biwgbW91c2VlbnRlciwgbW91c2VsZWF2ZSwgbW91c2Vtb3ZlLCBtb3VzZW91dCwgbW91c2VvdmVyLCBtb3VzZXVwLCBuZXh0LCBuZXh0QWxsLCBvZmYsIG9mZnNldCwgb24sIG9uY2UsIG91dGVySGVpZ2h0LCBvdXRlcldpZHRoLCBwYXJlbnQsIHBhcmVudHMsIHByZXBlbmQsIHByZXBlbmRUbywgcHJldiwgcHJldkFsbCwgcHJvcCwgcmVtb3ZlLCByZW1vdmVBdHRyLCByZW1vdmVDbGFzcywgcmVtb3ZlRGF0YSwgcmVzaXplLCBzY3JvbGwsIHNjcm9sbExlZnQsIHNjcm9sbFRvLCBzY3JvbGxUb3AsIHNob3csIHNpYmxpbmdzLCBzdG9wLCBzdHlsZXMsIHN1Ym1pdCwgdGV4dCwgdG9nZ2xlQ2xhc3MsIHRvdWNoZW5kLCB0b3VjaG1vdmUsIHRvdWNoc3RhcnQsIHRyYW5zZm9ybSwgdHJhbnNpdGlvbiwgdHJhbnNpdGlvbkVuZCwgdHJpZ2dlciwgdmFsLCB2YWx1ZSwgd2lkdGggfTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8qKlxuICogU1NSIFdpbmRvdyA0LjAuMFxuICogQmV0dGVyIGhhbmRsaW5nIGZvciB3aW5kb3cgb2JqZWN0IGluIFNTUiBlbnZpcm9ubWVudFxuICogaHR0cHM6Ly9naXRodWIuY29tL25vbGltaXRzNHdlYi9zc3Itd2luZG93XG4gKlxuICogQ29weXJpZ2h0IDIwMjEsIFZsYWRpbWlyIEtoYXJsYW1waWRpXG4gKlxuICogTGljZW5zZWQgdW5kZXIgTUlUXG4gKlxuICogUmVsZWFzZWQgb246IEF1Z3VzdCAyNSwgMjAyMVxuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuZnVuY3Rpb24gaXNPYmplY3Qob2JqKSB7XG4gICAgcmV0dXJuIChvYmogIT09IG51bGwgJiZcbiAgICAgICAgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgJ2NvbnN0cnVjdG9yJyBpbiBvYmogJiZcbiAgICAgICAgb2JqLmNvbnN0cnVjdG9yID09PSBPYmplY3QpO1xufVxuZnVuY3Rpb24gZXh0ZW5kKHRhcmdldCA9IHt9LCBzcmMgPSB7fSkge1xuICAgIE9iamVjdC5rZXlzKHNyYykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0W2tleV0gPT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzcmNba2V5XTtcbiAgICAgICAgZWxzZSBpZiAoaXNPYmplY3Qoc3JjW2tleV0pICYmXG4gICAgICAgICAgICBpc09iamVjdCh0YXJnZXRba2V5XSkgJiZcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHNyY1trZXldKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBleHRlbmQodGFyZ2V0W2tleV0sIHNyY1trZXldKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5jb25zdCBzc3JEb2N1bWVudCA9IHtcbiAgICBib2R5OiB7fSxcbiAgICBhZGRFdmVudExpc3RlbmVyKCkgeyB9LFxuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIoKSB7IH0sXG4gICAgYWN0aXZlRWxlbWVudDoge1xuICAgICAgICBibHVyKCkgeyB9LFxuICAgICAgICBub2RlTmFtZTogJycsXG4gICAgfSxcbiAgICBxdWVyeVNlbGVjdG9yKCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxuICAgIHF1ZXJ5U2VsZWN0b3JBbGwoKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9LFxuICAgIGdldEVsZW1lbnRCeUlkKCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxuICAgIGNyZWF0ZUV2ZW50KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaW5pdEV2ZW50KCkgeyB9LFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgY3JlYXRlRWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgICAgICAgIGNoaWxkTm9kZXM6IFtdLFxuICAgICAgICAgICAgc3R5bGU6IHt9LFxuICAgICAgICAgICAgc2V0QXR0cmlidXRlKCkgeyB9LFxuICAgICAgICAgICAgZ2V0RWxlbWVudHNCeVRhZ05hbWUoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIGNyZWF0ZUVsZW1lbnROUygpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH0sXG4gICAgaW1wb3J0Tm9kZSgpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcbiAgICBsb2NhdGlvbjoge1xuICAgICAgICBoYXNoOiAnJyxcbiAgICAgICAgaG9zdDogJycsXG4gICAgICAgIGhvc3RuYW1lOiAnJyxcbiAgICAgICAgaHJlZjogJycsXG4gICAgICAgIG9yaWdpbjogJycsXG4gICAgICAgIHBhdGhuYW1lOiAnJyxcbiAgICAgICAgcHJvdG9jb2w6ICcnLFxuICAgICAgICBzZWFyY2g6ICcnLFxuICAgIH0sXG59O1xuZnVuY3Rpb24gZ2V0RG9jdW1lbnQoKSB7XG4gICAgY29uc3QgZG9jID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyA/IGRvY3VtZW50IDoge307XG4gICAgZXh0ZW5kKGRvYywgc3NyRG9jdW1lbnQpO1xuICAgIHJldHVybiBkb2M7XG59XG5cbmNvbnN0IHNzcldpbmRvdyA9IHtcbiAgICBkb2N1bWVudDogc3NyRG9jdW1lbnQsXG4gICAgbmF2aWdhdG9yOiB7XG4gICAgICAgIHVzZXJBZ2VudDogJycsXG4gICAgfSxcbiAgICBsb2NhdGlvbjoge1xuICAgICAgICBoYXNoOiAnJyxcbiAgICAgICAgaG9zdDogJycsXG4gICAgICAgIGhvc3RuYW1lOiAnJyxcbiAgICAgICAgaHJlZjogJycsXG4gICAgICAgIG9yaWdpbjogJycsXG4gICAgICAgIHBhdGhuYW1lOiAnJyxcbiAgICAgICAgcHJvdG9jb2w6ICcnLFxuICAgICAgICBzZWFyY2g6ICcnLFxuICAgIH0sXG4gICAgaGlzdG9yeToge1xuICAgICAgICByZXBsYWNlU3RhdGUoKSB7IH0sXG4gICAgICAgIHB1c2hTdGF0ZSgpIHsgfSxcbiAgICAgICAgZ28oKSB7IH0sXG4gICAgICAgIGJhY2soKSB7IH0sXG4gICAgfSxcbiAgICBDdXN0b21FdmVudDogZnVuY3Rpb24gQ3VzdG9tRXZlbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgYWRkRXZlbnRMaXN0ZW5lcigpIHsgfSxcbiAgICByZW1vdmVFdmVudExpc3RlbmVyKCkgeyB9LFxuICAgIGdldENvbXB1dGVkU3R5bGUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBnZXRQcm9wZXJ0eVZhbHVlKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBJbWFnZSgpIHsgfSxcbiAgICBEYXRlKCkgeyB9LFxuICAgIHNjcmVlbjoge30sXG4gICAgc2V0VGltZW91dCgpIHsgfSxcbiAgICBjbGVhclRpbWVvdXQoKSB7IH0sXG4gICAgbWF0Y2hNZWRpYSgpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH0sXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2V0VGltZW91dChjYWxsYmFjaywgMCk7XG4gICAgfSxcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZShpZCkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY2xlYXJUaW1lb3V0KGlkKTtcbiAgICB9LFxufTtcbmZ1bmN0aW9uIGdldFdpbmRvdygpIHtcbiAgICBjb25zdCB3aW4gPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHt9O1xuICAgIGV4dGVuZCh3aW4sIHNzcldpbmRvdyk7XG4gICAgcmV0dXJuIHdpbjtcbn1cblxuZXhwb3J0IHsgZXh0ZW5kLCBnZXREb2N1bWVudCwgZ2V0V2luZG93LCBzc3JEb2N1bWVudCwgc3NyV2luZG93IH07XG4iLCJpbXBvcnQgeyBnZXRXaW5kb3cgfSBmcm9tICdzc3Itd2luZG93JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEJyZWFrcG9pbnQoYnJlYWtwb2ludHMsIGJhc2UgPSAnd2luZG93JywgY29udGFpbmVyRWwpIHtcbiAgaWYgKCFicmVha3BvaW50cyB8fCBiYXNlID09PSAnY29udGFpbmVyJyAmJiAhY29udGFpbmVyRWwpIHJldHVybiB1bmRlZmluZWQ7XG4gIGxldCBicmVha3BvaW50ID0gZmFsc2U7XG4gIGNvbnN0IHdpbmRvdyA9IGdldFdpbmRvdygpO1xuICBjb25zdCBjdXJyZW50SGVpZ2h0ID0gYmFzZSA9PT0gJ3dpbmRvdycgPyB3aW5kb3cuaW5uZXJIZWlnaHQgOiBjb250YWluZXJFbC5jbGllbnRIZWlnaHQ7XG4gIGNvbnN0IHBvaW50cyA9IE9iamVjdC5rZXlzKGJyZWFrcG9pbnRzKS5tYXAocG9pbnQgPT4ge1xuICAgIGlmICh0eXBlb2YgcG9pbnQgPT09ICdzdHJpbmcnICYmIHBvaW50LmluZGV4T2YoJ0AnKSA9PT0gMCkge1xuICAgICAgY29uc3QgbWluUmF0aW8gPSBwYXJzZUZsb2F0KHBvaW50LnN1YnN0cigxKSk7XG4gICAgICBjb25zdCB2YWx1ZSA9IGN1cnJlbnRIZWlnaHQgKiBtaW5SYXRpbztcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlLFxuICAgICAgICBwb2ludFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHBvaW50LFxuICAgICAgcG9pbnRcbiAgICB9O1xuICB9KTtcbiAgcG9pbnRzLnNvcnQoKGEsIGIpID0+IHBhcnNlSW50KGEudmFsdWUsIDEwKSAtIHBhcnNlSW50KGIudmFsdWUsIDEwKSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCB7XG4gICAgICBwb2ludCxcbiAgICAgIHZhbHVlXG4gICAgfSA9IHBvaW50c1tpXTtcblxuICAgIGlmIChiYXNlID09PSAnd2luZG93Jykge1xuICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKGAobWluLXdpZHRoOiAke3ZhbHVlfXB4KWApLm1hdGNoZXMpIHtcbiAgICAgICAgYnJlYWtwb2ludCA9IHBvaW50O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodmFsdWUgPD0gY29udGFpbmVyRWwuY2xpZW50V2lkdGgpIHtcbiAgICAgIGJyZWFrcG9pbnQgPSBwb2ludDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnJlYWtwb2ludCB8fCAnbWF4Jztcbn0iLCJpbXBvcnQgc2V0QnJlYWtwb2ludCBmcm9tICcuL3NldEJyZWFrcG9pbnQuanMnO1xuaW1wb3J0IGdldEJyZWFrcG9pbnQgZnJvbSAnLi9nZXRCcmVha3BvaW50LmpzJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgc2V0QnJlYWtwb2ludCxcbiAgZ2V0QnJlYWtwb2ludFxufTsiLCJpbXBvcnQgeyBleHRlbmQgfSBmcm9tICcuLi8uLi9zaGFyZWQvdXRpbHMuanMnO1xuXG5jb25zdCBpc0dyaWRFbmFibGVkID0gKHN3aXBlciwgcGFyYW1zKSA9PiB7XG4gIHJldHVybiBzd2lwZXIuZ3JpZCAmJiBwYXJhbXMuZ3JpZCAmJiBwYXJhbXMuZ3JpZC5yb3dzID4gMTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldEJyZWFrcG9pbnQoKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IHtcbiAgICBhY3RpdmVJbmRleCxcbiAgICBpbml0aWFsaXplZCxcbiAgICBsb29wZWRTbGlkZXMgPSAwLFxuICAgIHBhcmFtcyxcbiAgICAkZWxcbiAgfSA9IHN3aXBlcjtcbiAgY29uc3QgYnJlYWtwb2ludHMgPSBwYXJhbXMuYnJlYWtwb2ludHM7XG4gIGlmICghYnJlYWtwb2ludHMgfHwgYnJlYWtwb2ludHMgJiYgT2JqZWN0LmtleXMoYnJlYWtwb2ludHMpLmxlbmd0aCA9PT0gMCkgcmV0dXJuOyAvLyBHZXQgYnJlYWtwb2ludCBmb3Igd2luZG93IHdpZHRoIGFuZCB1cGRhdGUgcGFyYW1ldGVyc1xuXG4gIGNvbnN0IGJyZWFrcG9pbnQgPSBzd2lwZXIuZ2V0QnJlYWtwb2ludChicmVha3BvaW50cywgc3dpcGVyLnBhcmFtcy5icmVha3BvaW50c0Jhc2UsIHN3aXBlci5lbCk7XG4gIGlmICghYnJlYWtwb2ludCB8fCBzd2lwZXIuY3VycmVudEJyZWFrcG9pbnQgPT09IGJyZWFrcG9pbnQpIHJldHVybjtcbiAgY29uc3QgYnJlYWtwb2ludE9ubHlQYXJhbXMgPSBicmVha3BvaW50IGluIGJyZWFrcG9pbnRzID8gYnJlYWtwb2ludHNbYnJlYWtwb2ludF0gOiB1bmRlZmluZWQ7XG4gIGNvbnN0IGJyZWFrcG9pbnRQYXJhbXMgPSBicmVha3BvaW50T25seVBhcmFtcyB8fCBzd2lwZXIub3JpZ2luYWxQYXJhbXM7XG4gIGNvbnN0IHdhc011bHRpUm93ID0gaXNHcmlkRW5hYmxlZChzd2lwZXIsIHBhcmFtcyk7XG4gIGNvbnN0IGlzTXVsdGlSb3cgPSBpc0dyaWRFbmFibGVkKHN3aXBlciwgYnJlYWtwb2ludFBhcmFtcyk7XG4gIGNvbnN0IHdhc0VuYWJsZWQgPSBwYXJhbXMuZW5hYmxlZDtcblxuICBpZiAod2FzTXVsdGlSb3cgJiYgIWlzTXVsdGlSb3cpIHtcbiAgICAkZWwucmVtb3ZlQ2xhc3MoYCR7cGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3N9Z3JpZCAke3BhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzfWdyaWQtY29sdW1uYCk7XG4gICAgc3dpcGVyLmVtaXRDb250YWluZXJDbGFzc2VzKCk7XG4gIH0gZWxzZSBpZiAoIXdhc011bHRpUm93ICYmIGlzTXVsdGlSb3cpIHtcbiAgICAkZWwuYWRkQ2xhc3MoYCR7cGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3N9Z3JpZGApO1xuXG4gICAgaWYgKGJyZWFrcG9pbnRQYXJhbXMuZ3JpZC5maWxsICYmIGJyZWFrcG9pbnRQYXJhbXMuZ3JpZC5maWxsID09PSAnY29sdW1uJyB8fCAhYnJlYWtwb2ludFBhcmFtcy5ncmlkLmZpbGwgJiYgcGFyYW1zLmdyaWQuZmlsbCA9PT0gJ2NvbHVtbicpIHtcbiAgICAgICRlbC5hZGRDbGFzcyhgJHtwYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzc31ncmlkLWNvbHVtbmApO1xuICAgIH1cblxuICAgIHN3aXBlci5lbWl0Q29udGFpbmVyQ2xhc3NlcygpO1xuICB9XG5cbiAgY29uc3QgZGlyZWN0aW9uQ2hhbmdlZCA9IGJyZWFrcG9pbnRQYXJhbXMuZGlyZWN0aW9uICYmIGJyZWFrcG9pbnRQYXJhbXMuZGlyZWN0aW9uICE9PSBwYXJhbXMuZGlyZWN0aW9uO1xuICBjb25zdCBuZWVkc1JlTG9vcCA9IHBhcmFtcy5sb29wICYmIChicmVha3BvaW50UGFyYW1zLnNsaWRlc1BlclZpZXcgIT09IHBhcmFtcy5zbGlkZXNQZXJWaWV3IHx8IGRpcmVjdGlvbkNoYW5nZWQpO1xuXG4gIGlmIChkaXJlY3Rpb25DaGFuZ2VkICYmIGluaXRpYWxpemVkKSB7XG4gICAgc3dpcGVyLmNoYW5nZURpcmVjdGlvbigpO1xuICB9XG5cbiAgZXh0ZW5kKHN3aXBlci5wYXJhbXMsIGJyZWFrcG9pbnRQYXJhbXMpO1xuICBjb25zdCBpc0VuYWJsZWQgPSBzd2lwZXIucGFyYW1zLmVuYWJsZWQ7XG4gIE9iamVjdC5hc3NpZ24oc3dpcGVyLCB7XG4gICAgYWxsb3dUb3VjaE1vdmU6IHN3aXBlci5wYXJhbXMuYWxsb3dUb3VjaE1vdmUsXG4gICAgYWxsb3dTbGlkZU5leHQ6IHN3aXBlci5wYXJhbXMuYWxsb3dTbGlkZU5leHQsXG4gICAgYWxsb3dTbGlkZVByZXY6IHN3aXBlci5wYXJhbXMuYWxsb3dTbGlkZVByZXZcbiAgfSk7XG5cbiAgaWYgKHdhc0VuYWJsZWQgJiYgIWlzRW5hYmxlZCkge1xuICAgIHN3aXBlci5kaXNhYmxlKCk7XG4gIH0gZWxzZSBpZiAoIXdhc0VuYWJsZWQgJiYgaXNFbmFibGVkKSB7XG4gICAgc3dpcGVyLmVuYWJsZSgpO1xuICB9XG5cbiAgc3dpcGVyLmN1cnJlbnRCcmVha3BvaW50ID0gYnJlYWtwb2ludDtcbiAgc3dpcGVyLmVtaXQoJ19iZWZvcmVCcmVha3BvaW50JywgYnJlYWtwb2ludFBhcmFtcyk7XG5cbiAgaWYgKG5lZWRzUmVMb29wICYmIGluaXRpYWxpemVkKSB7XG4gICAgc3dpcGVyLmxvb3BEZXN0cm95KCk7XG4gICAgc3dpcGVyLmxvb3BDcmVhdGUoKTtcbiAgICBzd2lwZXIudXBkYXRlU2xpZGVzKCk7XG4gICAgc3dpcGVyLnNsaWRlVG8oYWN0aXZlSW5kZXggLSBsb29wZWRTbGlkZXMgKyBzd2lwZXIubG9vcGVkU2xpZGVzLCAwLCBmYWxzZSk7XG4gIH1cblxuICBzd2lwZXIuZW1pdCgnYnJlYWtwb2ludCcsIGJyZWFrcG9pbnRQYXJhbXMpO1xufSIsImZ1bmN0aW9uIGNoZWNrT3ZlcmZsb3coKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IHtcbiAgICBpc0xvY2tlZDogd2FzTG9ja2VkLFxuICAgIHBhcmFtc1xuICB9ID0gc3dpcGVyO1xuICBjb25zdCB7XG4gICAgc2xpZGVzT2Zmc2V0QmVmb3JlXG4gIH0gPSBwYXJhbXM7XG5cbiAgaWYgKHNsaWRlc09mZnNldEJlZm9yZSkge1xuICAgIGNvbnN0IGxhc3RTbGlkZUluZGV4ID0gc3dpcGVyLnNsaWRlcy5sZW5ndGggLSAxO1xuICAgIGNvbnN0IGxhc3RTbGlkZVJpZ2h0RWRnZSA9IHN3aXBlci5zbGlkZXNHcmlkW2xhc3RTbGlkZUluZGV4XSArIHN3aXBlci5zbGlkZXNTaXplc0dyaWRbbGFzdFNsaWRlSW5kZXhdICsgc2xpZGVzT2Zmc2V0QmVmb3JlICogMjtcbiAgICBzd2lwZXIuaXNMb2NrZWQgPSBzd2lwZXIuc2l6ZSA+IGxhc3RTbGlkZVJpZ2h0RWRnZTtcbiAgfSBlbHNlIHtcbiAgICBzd2lwZXIuaXNMb2NrZWQgPSBzd2lwZXIuc25hcEdyaWQubGVuZ3RoID09PSAxO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5hbGxvd1NsaWRlTmV4dCA9PT0gdHJ1ZSkge1xuICAgIHN3aXBlci5hbGxvd1NsaWRlTmV4dCA9ICFzd2lwZXIuaXNMb2NrZWQ7XG4gIH1cblxuICBpZiAocGFyYW1zLmFsbG93U2xpZGVQcmV2ID09PSB0cnVlKSB7XG4gICAgc3dpcGVyLmFsbG93U2xpZGVQcmV2ID0gIXN3aXBlci5pc0xvY2tlZDtcbiAgfVxuXG4gIGlmICh3YXNMb2NrZWQgJiYgd2FzTG9ja2VkICE9PSBzd2lwZXIuaXNMb2NrZWQpIHtcbiAgICBzd2lwZXIuaXNFbmQgPSBmYWxzZTtcbiAgfVxuXG4gIGlmICh3YXNMb2NrZWQgIT09IHN3aXBlci5pc0xvY2tlZCkge1xuICAgIHN3aXBlci5lbWl0KHN3aXBlci5pc0xvY2tlZCA/ICdsb2NrJyA6ICd1bmxvY2snKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNoZWNrT3ZlcmZsb3dcbn07IiwiZnVuY3Rpb24gcHJlcGFyZUNsYXNzZXMoZW50cmllcywgcHJlZml4KSB7XG4gIGNvbnN0IHJlc3VsdENsYXNzZXMgPSBbXTtcbiAgZW50cmllcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKGl0ZW0pLmZvckVhY2goY2xhc3NOYW1lcyA9PiB7XG4gICAgICAgIGlmIChpdGVtW2NsYXNzTmFtZXNdKSB7XG4gICAgICAgICAgcmVzdWx0Q2xhc3Nlcy5wdXNoKHByZWZpeCArIGNsYXNzTmFtZXMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJykge1xuICAgICAgcmVzdWx0Q2xhc3Nlcy5wdXNoKHByZWZpeCArIGl0ZW0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHRDbGFzc2VzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRDbGFzc2VzKCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCB7XG4gICAgY2xhc3NOYW1lcyxcbiAgICBwYXJhbXMsXG4gICAgcnRsLFxuICAgICRlbCxcbiAgICBkZXZpY2UsXG4gICAgc3VwcG9ydFxuICB9ID0gc3dpcGVyOyAvLyBwcmV0dGllci1pZ25vcmVcblxuICBjb25zdCBzdWZmaXhlcyA9IHByZXBhcmVDbGFzc2VzKFsnaW5pdGlhbGl6ZWQnLCBwYXJhbXMuZGlyZWN0aW9uLCB7XG4gICAgJ3BvaW50ZXItZXZlbnRzJzogIXN1cHBvcnQudG91Y2hcbiAgfSwge1xuICAgICdmcmVlLW1vZGUnOiBzd2lwZXIucGFyYW1zLmZyZWVNb2RlICYmIHBhcmFtcy5mcmVlTW9kZS5lbmFibGVkXG4gIH0sIHtcbiAgICAnYXV0b2hlaWdodCc6IHBhcmFtcy5hdXRvSGVpZ2h0XG4gIH0sIHtcbiAgICAncnRsJzogcnRsXG4gIH0sIHtcbiAgICAnZ3JpZCc6IHBhcmFtcy5ncmlkICYmIHBhcmFtcy5ncmlkLnJvd3MgPiAxXG4gIH0sIHtcbiAgICAnZ3JpZC1jb2x1bW4nOiBwYXJhbXMuZ3JpZCAmJiBwYXJhbXMuZ3JpZC5yb3dzID4gMSAmJiBwYXJhbXMuZ3JpZC5maWxsID09PSAnY29sdW1uJ1xuICB9LCB7XG4gICAgJ2FuZHJvaWQnOiBkZXZpY2UuYW5kcm9pZFxuICB9LCB7XG4gICAgJ2lvcyc6IGRldmljZS5pb3NcbiAgfSwge1xuICAgICdjc3MtbW9kZSc6IHBhcmFtcy5jc3NNb2RlXG4gIH0sIHtcbiAgICAnY2VudGVyZWQnOiBwYXJhbXMuY3NzTW9kZSAmJiBwYXJhbXMuY2VudGVyZWRTbGlkZXNcbiAgfV0sIHBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzKTtcbiAgY2xhc3NOYW1lcy5wdXNoKC4uLnN1ZmZpeGVzKTtcbiAgJGVsLmFkZENsYXNzKFsuLi5jbGFzc05hbWVzXS5qb2luKCcgJykpO1xuICBzd2lwZXIuZW1pdENvbnRhaW5lckNsYXNzZXMoKTtcbn0iLCJpbXBvcnQgYWRkQ2xhc3NlcyBmcm9tICcuL2FkZENsYXNzZXMuanMnO1xuaW1wb3J0IHJlbW92ZUNsYXNzZXMgZnJvbSAnLi9yZW1vdmVDbGFzc2VzLmpzJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgYWRkQ2xhc3NlcyxcbiAgcmVtb3ZlQ2xhc3Nlc1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW1vdmVDbGFzc2VzKCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCB7XG4gICAgJGVsLFxuICAgIGNsYXNzTmFtZXNcbiAgfSA9IHN3aXBlcjtcbiAgJGVsLnJlbW92ZUNsYXNzKGNsYXNzTmFtZXMuam9pbignICcpKTtcbiAgc3dpcGVyLmVtaXRDb250YWluZXJDbGFzc2VzKCk7XG59IiwiLyogZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOiBcIm9mZlwiICovXG5pbXBvcnQgeyBnZXREb2N1bWVudCB9IGZyb20gJ3Nzci13aW5kb3cnO1xuaW1wb3J0ICQgZnJvbSAnLi4vc2hhcmVkL2RvbS5qcyc7XG5pbXBvcnQgeyBleHRlbmQsIG5vdywgZGVsZXRlUHJvcHMgfSBmcm9tICcuLi9zaGFyZWQvdXRpbHMuanMnO1xuaW1wb3J0IHsgZ2V0U3VwcG9ydCB9IGZyb20gJy4uL3NoYXJlZC9nZXQtc3VwcG9ydC5qcyc7XG5pbXBvcnQgeyBnZXREZXZpY2UgfSBmcm9tICcuLi9zaGFyZWQvZ2V0LWRldmljZS5qcyc7XG5pbXBvcnQgeyBnZXRCcm93c2VyIH0gZnJvbSAnLi4vc2hhcmVkL2dldC1icm93c2VyLmpzJztcbmltcG9ydCBSZXNpemUgZnJvbSAnLi9tb2R1bGVzL3Jlc2l6ZS9yZXNpemUuanMnO1xuaW1wb3J0IE9ic2VydmVyIGZyb20gJy4vbW9kdWxlcy9vYnNlcnZlci9vYnNlcnZlci5qcyc7XG5pbXBvcnQgZXZlbnRzRW1pdHRlciBmcm9tICcuL2V2ZW50cy1lbWl0dGVyLmpzJztcbmltcG9ydCB1cGRhdGUgZnJvbSAnLi91cGRhdGUvaW5kZXguanMnO1xuaW1wb3J0IHRyYW5zbGF0ZSBmcm9tICcuL3RyYW5zbGF0ZS9pbmRleC5qcyc7XG5pbXBvcnQgdHJhbnNpdGlvbiBmcm9tICcuL3RyYW5zaXRpb24vaW5kZXguanMnO1xuaW1wb3J0IHNsaWRlIGZyb20gJy4vc2xpZGUvaW5kZXguanMnO1xuaW1wb3J0IGxvb3AgZnJvbSAnLi9sb29wL2luZGV4LmpzJztcbmltcG9ydCBncmFiQ3Vyc29yIGZyb20gJy4vZ3JhYi1jdXJzb3IvaW5kZXguanMnO1xuaW1wb3J0IGV2ZW50cyBmcm9tICcuL2V2ZW50cy9pbmRleC5qcyc7XG5pbXBvcnQgYnJlYWtwb2ludHMgZnJvbSAnLi9icmVha3BvaW50cy9pbmRleC5qcyc7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL2NsYXNzZXMvaW5kZXguanMnO1xuaW1wb3J0IGltYWdlcyBmcm9tICcuL2ltYWdlcy9pbmRleC5qcyc7XG5pbXBvcnQgY2hlY2tPdmVyZmxvdyBmcm9tICcuL2NoZWNrLW92ZXJmbG93L2luZGV4LmpzJztcbmltcG9ydCBkZWZhdWx0cyBmcm9tICcuL2RlZmF1bHRzLmpzJztcbmltcG9ydCBtb2R1bGVFeHRlbmRQYXJhbXMgZnJvbSAnLi9tb2R1bGVFeHRlbmRQYXJhbXMuanMnO1xuY29uc3QgcHJvdG90eXBlcyA9IHtcbiAgZXZlbnRzRW1pdHRlcixcbiAgdXBkYXRlLFxuICB0cmFuc2xhdGUsXG4gIHRyYW5zaXRpb24sXG4gIHNsaWRlLFxuICBsb29wLFxuICBncmFiQ3Vyc29yLFxuICBldmVudHMsXG4gIGJyZWFrcG9pbnRzLFxuICBjaGVja092ZXJmbG93LFxuICBjbGFzc2VzLFxuICBpbWFnZXNcbn07XG5jb25zdCBleHRlbmRlZERlZmF1bHRzID0ge307XG5cbmNsYXNzIFN3aXBlciB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBsZXQgZWw7XG4gICAgbGV0IHBhcmFtcztcblxuICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMSAmJiBhcmdzWzBdLmNvbnN0cnVjdG9yICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmdzWzBdKS5zbGljZSg4LCAtMSkgPT09ICdPYmplY3QnKSB7XG4gICAgICBwYXJhbXMgPSBhcmdzWzBdO1xuICAgIH0gZWxzZSB7XG4gICAgICBbZWwsIHBhcmFtc10gPSBhcmdzO1xuICAgIH1cblxuICAgIGlmICghcGFyYW1zKSBwYXJhbXMgPSB7fTtcbiAgICBwYXJhbXMgPSBleHRlbmQoe30sIHBhcmFtcyk7XG4gICAgaWYgKGVsICYmICFwYXJhbXMuZWwpIHBhcmFtcy5lbCA9IGVsO1xuXG4gICAgaWYgKHBhcmFtcy5lbCAmJiAkKHBhcmFtcy5lbCkubGVuZ3RoID4gMSkge1xuICAgICAgY29uc3Qgc3dpcGVycyA9IFtdO1xuICAgICAgJChwYXJhbXMuZWwpLmVhY2goY29udGFpbmVyRWwgPT4ge1xuICAgICAgICBjb25zdCBuZXdQYXJhbXMgPSBleHRlbmQoe30sIHBhcmFtcywge1xuICAgICAgICAgIGVsOiBjb250YWluZXJFbFxuICAgICAgICB9KTtcbiAgICAgICAgc3dpcGVycy5wdXNoKG5ldyBTd2lwZXIobmV3UGFyYW1zKSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBzd2lwZXJzO1xuICAgIH0gLy8gU3dpcGVyIEluc3RhbmNlXG5cblxuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgc3dpcGVyLl9fc3dpcGVyX18gPSB0cnVlO1xuICAgIHN3aXBlci5zdXBwb3J0ID0gZ2V0U3VwcG9ydCgpO1xuICAgIHN3aXBlci5kZXZpY2UgPSBnZXREZXZpY2Uoe1xuICAgICAgdXNlckFnZW50OiBwYXJhbXMudXNlckFnZW50XG4gICAgfSk7XG4gICAgc3dpcGVyLmJyb3dzZXIgPSBnZXRCcm93c2VyKCk7XG4gICAgc3dpcGVyLmV2ZW50c0xpc3RlbmVycyA9IHt9O1xuICAgIHN3aXBlci5ldmVudHNBbnlMaXN0ZW5lcnMgPSBbXTtcbiAgICBzd2lwZXIubW9kdWxlcyA9IFsuLi5zd2lwZXIuX19tb2R1bGVzX19dO1xuXG4gICAgaWYgKHBhcmFtcy5tb2R1bGVzICYmIEFycmF5LmlzQXJyYXkocGFyYW1zLm1vZHVsZXMpKSB7XG4gICAgICBzd2lwZXIubW9kdWxlcy5wdXNoKC4uLnBhcmFtcy5tb2R1bGVzKTtcbiAgICB9XG5cbiAgICBjb25zdCBhbGxNb2R1bGVzUGFyYW1zID0ge307XG4gICAgc3dpcGVyLm1vZHVsZXMuZm9yRWFjaChtb2QgPT4ge1xuICAgICAgbW9kKHtcbiAgICAgICAgc3dpcGVyLFxuICAgICAgICBleHRlbmRQYXJhbXM6IG1vZHVsZUV4dGVuZFBhcmFtcyhwYXJhbXMsIGFsbE1vZHVsZXNQYXJhbXMpLFxuICAgICAgICBvbjogc3dpcGVyLm9uLmJpbmQoc3dpcGVyKSxcbiAgICAgICAgb25jZTogc3dpcGVyLm9uY2UuYmluZChzd2lwZXIpLFxuICAgICAgICBvZmY6IHN3aXBlci5vZmYuYmluZChzd2lwZXIpLFxuICAgICAgICBlbWl0OiBzd2lwZXIuZW1pdC5iaW5kKHN3aXBlcilcbiAgICAgIH0pO1xuICAgIH0pOyAvLyBFeHRlbmQgZGVmYXVsdHMgd2l0aCBtb2R1bGVzIHBhcmFtc1xuXG4gICAgY29uc3Qgc3dpcGVyUGFyYW1zID0gZXh0ZW5kKHt9LCBkZWZhdWx0cywgYWxsTW9kdWxlc1BhcmFtcyk7IC8vIEV4dGVuZCBkZWZhdWx0cyB3aXRoIHBhc3NlZCBwYXJhbXNcblxuICAgIHN3aXBlci5wYXJhbXMgPSBleHRlbmQoe30sIHN3aXBlclBhcmFtcywgZXh0ZW5kZWREZWZhdWx0cywgcGFyYW1zKTtcbiAgICBzd2lwZXIub3JpZ2luYWxQYXJhbXMgPSBleHRlbmQoe30sIHN3aXBlci5wYXJhbXMpO1xuICAgIHN3aXBlci5wYXNzZWRQYXJhbXMgPSBleHRlbmQoe30sIHBhcmFtcyk7IC8vIGFkZCBldmVudCBsaXN0ZW5lcnNcblxuICAgIGlmIChzd2lwZXIucGFyYW1zICYmIHN3aXBlci5wYXJhbXMub24pIHtcbiAgICAgIE9iamVjdC5rZXlzKHN3aXBlci5wYXJhbXMub24pLmZvckVhY2goZXZlbnROYW1lID0+IHtcbiAgICAgICAgc3dpcGVyLm9uKGV2ZW50TmFtZSwgc3dpcGVyLnBhcmFtcy5vbltldmVudE5hbWVdKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChzd2lwZXIucGFyYW1zICYmIHN3aXBlci5wYXJhbXMub25BbnkpIHtcbiAgICAgIHN3aXBlci5vbkFueShzd2lwZXIucGFyYW1zLm9uQW55KTtcbiAgICB9IC8vIFNhdmUgRG9tIGxpYlxuXG5cbiAgICBzd2lwZXIuJCA9ICQ7IC8vIEV4dGVuZCBTd2lwZXJcblxuICAgIE9iamVjdC5hc3NpZ24oc3dpcGVyLCB7XG4gICAgICBlbmFibGVkOiBzd2lwZXIucGFyYW1zLmVuYWJsZWQsXG4gICAgICBlbCxcbiAgICAgIC8vIENsYXNzZXNcbiAgICAgIGNsYXNzTmFtZXM6IFtdLFxuICAgICAgLy8gU2xpZGVzXG4gICAgICBzbGlkZXM6ICQoKSxcbiAgICAgIHNsaWRlc0dyaWQ6IFtdLFxuICAgICAgc25hcEdyaWQ6IFtdLFxuICAgICAgc2xpZGVzU2l6ZXNHcmlkOiBbXSxcblxuICAgICAgLy8gaXNEaXJlY3Rpb25cbiAgICAgIGlzSG9yaXpvbnRhbCgpIHtcbiAgICAgICAgcmV0dXJuIHN3aXBlci5wYXJhbXMuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCc7XG4gICAgICB9LFxuXG4gICAgICBpc1ZlcnRpY2FsKCkge1xuICAgICAgICByZXR1cm4gc3dpcGVyLnBhcmFtcy5kaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCc7XG4gICAgICB9LFxuXG4gICAgICAvLyBJbmRleGVzXG4gICAgICBhY3RpdmVJbmRleDogMCxcbiAgICAgIHJlYWxJbmRleDogMCxcbiAgICAgIC8vXG4gICAgICBpc0JlZ2lubmluZzogdHJ1ZSxcbiAgICAgIGlzRW5kOiBmYWxzZSxcbiAgICAgIC8vIFByb3BzXG4gICAgICB0cmFuc2xhdGU6IDAsXG4gICAgICBwcmV2aW91c1RyYW5zbGF0ZTogMCxcbiAgICAgIHByb2dyZXNzOiAwLFxuICAgICAgdmVsb2NpdHk6IDAsXG4gICAgICBhbmltYXRpbmc6IGZhbHNlLFxuICAgICAgLy8gTG9ja3NcbiAgICAgIGFsbG93U2xpZGVOZXh0OiBzd2lwZXIucGFyYW1zLmFsbG93U2xpZGVOZXh0LFxuICAgICAgYWxsb3dTbGlkZVByZXY6IHN3aXBlci5wYXJhbXMuYWxsb3dTbGlkZVByZXYsXG4gICAgICAvLyBUb3VjaCBFdmVudHNcbiAgICAgIHRvdWNoRXZlbnRzOiBmdW5jdGlvbiB0b3VjaEV2ZW50cygpIHtcbiAgICAgICAgY29uc3QgdG91Y2ggPSBbJ3RvdWNoc3RhcnQnLCAndG91Y2htb3ZlJywgJ3RvdWNoZW5kJywgJ3RvdWNoY2FuY2VsJ107XG4gICAgICAgIGNvbnN0IGRlc2t0b3AgPSBbJ3BvaW50ZXJkb3duJywgJ3BvaW50ZXJtb3ZlJywgJ3BvaW50ZXJ1cCddO1xuICAgICAgICBzd2lwZXIudG91Y2hFdmVudHNUb3VjaCA9IHtcbiAgICAgICAgICBzdGFydDogdG91Y2hbMF0sXG4gICAgICAgICAgbW92ZTogdG91Y2hbMV0sXG4gICAgICAgICAgZW5kOiB0b3VjaFsyXSxcbiAgICAgICAgICBjYW5jZWw6IHRvdWNoWzNdXG4gICAgICAgIH07XG4gICAgICAgIHN3aXBlci50b3VjaEV2ZW50c0Rlc2t0b3AgPSB7XG4gICAgICAgICAgc3RhcnQ6IGRlc2t0b3BbMF0sXG4gICAgICAgICAgbW92ZTogZGVza3RvcFsxXSxcbiAgICAgICAgICBlbmQ6IGRlc2t0b3BbMl1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHN3aXBlci5zdXBwb3J0LnRvdWNoIHx8ICFzd2lwZXIucGFyYW1zLnNpbXVsYXRlVG91Y2ggPyBzd2lwZXIudG91Y2hFdmVudHNUb3VjaCA6IHN3aXBlci50b3VjaEV2ZW50c0Rlc2t0b3A7XG4gICAgICB9KCksXG4gICAgICB0b3VjaEV2ZW50c0RhdGE6IHtcbiAgICAgICAgaXNUb3VjaGVkOiB1bmRlZmluZWQsXG4gICAgICAgIGlzTW92ZWQ6IHVuZGVmaW5lZCxcbiAgICAgICAgYWxsb3dUb3VjaENhbGxiYWNrczogdW5kZWZpbmVkLFxuICAgICAgICB0b3VjaFN0YXJ0VGltZTogdW5kZWZpbmVkLFxuICAgICAgICBpc1Njcm9sbGluZzogdW5kZWZpbmVkLFxuICAgICAgICBjdXJyZW50VHJhbnNsYXRlOiB1bmRlZmluZWQsXG4gICAgICAgIHN0YXJ0VHJhbnNsYXRlOiB1bmRlZmluZWQsXG4gICAgICAgIGFsbG93VGhyZXNob2xkTW92ZTogdW5kZWZpbmVkLFxuICAgICAgICAvLyBGb3JtIGVsZW1lbnRzIHRvIG1hdGNoXG4gICAgICAgIGZvY3VzYWJsZUVsZW1lbnRzOiBzd2lwZXIucGFyYW1zLmZvY3VzYWJsZUVsZW1lbnRzLFxuICAgICAgICAvLyBMYXN0IGNsaWNrIHRpbWVcbiAgICAgICAgbGFzdENsaWNrVGltZTogbm93KCksXG4gICAgICAgIGNsaWNrVGltZW91dDogdW5kZWZpbmVkLFxuICAgICAgICAvLyBWZWxvY2l0aWVzXG4gICAgICAgIHZlbG9jaXRpZXM6IFtdLFxuICAgICAgICBhbGxvd01vbWVudHVtQm91bmNlOiB1bmRlZmluZWQsXG4gICAgICAgIGlzVG91Y2hFdmVudDogdW5kZWZpbmVkLFxuICAgICAgICBzdGFydE1vdmluZzogdW5kZWZpbmVkXG4gICAgICB9LFxuICAgICAgLy8gQ2xpY2tzXG4gICAgICBhbGxvd0NsaWNrOiB0cnVlLFxuICAgICAgLy8gVG91Y2hlc1xuICAgICAgYWxsb3dUb3VjaE1vdmU6IHN3aXBlci5wYXJhbXMuYWxsb3dUb3VjaE1vdmUsXG4gICAgICB0b3VjaGVzOiB7XG4gICAgICAgIHN0YXJ0WDogMCxcbiAgICAgICAgc3RhcnRZOiAwLFxuICAgICAgICBjdXJyZW50WDogMCxcbiAgICAgICAgY3VycmVudFk6IDAsXG4gICAgICAgIGRpZmY6IDBcbiAgICAgIH0sXG4gICAgICAvLyBJbWFnZXNcbiAgICAgIGltYWdlc1RvTG9hZDogW10sXG4gICAgICBpbWFnZXNMb2FkZWQ6IDBcbiAgICB9KTtcbiAgICBzd2lwZXIuZW1pdCgnX3N3aXBlcicpOyAvLyBJbml0XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5pbml0KSB7XG4gICAgICBzd2lwZXIuaW5pdCgpO1xuICAgIH0gLy8gUmV0dXJuIGFwcCBpbnN0YW5jZVxuXG5cbiAgICByZXR1cm4gc3dpcGVyO1xuICB9XG5cbiAgZW5hYmxlKCkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKHN3aXBlci5lbmFibGVkKSByZXR1cm47XG4gICAgc3dpcGVyLmVuYWJsZWQgPSB0cnVlO1xuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMuZ3JhYkN1cnNvcikge1xuICAgICAgc3dpcGVyLnNldEdyYWJDdXJzb3IoKTtcbiAgICB9XG5cbiAgICBzd2lwZXIuZW1pdCgnZW5hYmxlJyk7XG4gIH1cblxuICBkaXNhYmxlKCkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKCFzd2lwZXIuZW5hYmxlZCkgcmV0dXJuO1xuICAgIHN3aXBlci5lbmFibGVkID0gZmFsc2U7XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5ncmFiQ3Vyc29yKSB7XG4gICAgICBzd2lwZXIudW5zZXRHcmFiQ3Vyc29yKCk7XG4gICAgfVxuXG4gICAgc3dpcGVyLmVtaXQoJ2Rpc2FibGUnKTtcbiAgfVxuXG4gIHNldFByb2dyZXNzKHByb2dyZXNzLCBzcGVlZCkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgcHJvZ3Jlc3MgPSBNYXRoLm1pbihNYXRoLm1heChwcm9ncmVzcywgMCksIDEpO1xuICAgIGNvbnN0IG1pbiA9IHN3aXBlci5taW5UcmFuc2xhdGUoKTtcbiAgICBjb25zdCBtYXggPSBzd2lwZXIubWF4VHJhbnNsYXRlKCk7XG4gICAgY29uc3QgY3VycmVudCA9IChtYXggLSBtaW4pICogcHJvZ3Jlc3MgKyBtaW47XG4gICAgc3dpcGVyLnRyYW5zbGF0ZVRvKGN1cnJlbnQsIHR5cGVvZiBzcGVlZCA9PT0gJ3VuZGVmaW5lZCcgPyAwIDogc3BlZWQpO1xuICAgIHN3aXBlci51cGRhdGVBY3RpdmVJbmRleCgpO1xuICAgIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG4gIH1cblxuICBlbWl0Q29udGFpbmVyQ2xhc3NlcygpIHtcbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgIGlmICghc3dpcGVyLnBhcmFtcy5fZW1pdENsYXNzZXMgfHwgIXN3aXBlci5lbCkgcmV0dXJuO1xuICAgIGNvbnN0IGNscyA9IHN3aXBlci5lbC5jbGFzc05hbWUuc3BsaXQoJyAnKS5maWx0ZXIoY2xhc3NOYW1lID0+IHtcbiAgICAgIHJldHVybiBjbGFzc05hbWUuaW5kZXhPZignc3dpcGVyJykgPT09IDAgfHwgY2xhc3NOYW1lLmluZGV4T2Yoc3dpcGVyLnBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzKSA9PT0gMDtcbiAgICB9KTtcbiAgICBzd2lwZXIuZW1pdCgnX2NvbnRhaW5lckNsYXNzZXMnLCBjbHMuam9pbignICcpKTtcbiAgfVxuXG4gIGdldFNsaWRlQ2xhc3NlcyhzbGlkZUVsKSB7XG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICByZXR1cm4gc2xpZGVFbC5jbGFzc05hbWUuc3BsaXQoJyAnKS5maWx0ZXIoY2xhc3NOYW1lID0+IHtcbiAgICAgIHJldHVybiBjbGFzc05hbWUuaW5kZXhPZignc3dpcGVyLXNsaWRlJykgPT09IDAgfHwgY2xhc3NOYW1lLmluZGV4T2Yoc3dpcGVyLnBhcmFtcy5zbGlkZUNsYXNzKSA9PT0gMDtcbiAgICB9KS5qb2luKCcgJyk7XG4gIH1cblxuICBlbWl0U2xpZGVzQ2xhc3NlcygpIHtcbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgIGlmICghc3dpcGVyLnBhcmFtcy5fZW1pdENsYXNzZXMgfHwgIXN3aXBlci5lbCkgcmV0dXJuO1xuICAgIGNvbnN0IHVwZGF0ZXMgPSBbXTtcbiAgICBzd2lwZXIuc2xpZGVzLmVhY2goc2xpZGVFbCA9PiB7XG4gICAgICBjb25zdCBjbGFzc05hbWVzID0gc3dpcGVyLmdldFNsaWRlQ2xhc3NlcyhzbGlkZUVsKTtcbiAgICAgIHVwZGF0ZXMucHVzaCh7XG4gICAgICAgIHNsaWRlRWwsXG4gICAgICAgIGNsYXNzTmFtZXNcbiAgICAgIH0pO1xuICAgICAgc3dpcGVyLmVtaXQoJ19zbGlkZUNsYXNzJywgc2xpZGVFbCwgY2xhc3NOYW1lcyk7XG4gICAgfSk7XG4gICAgc3dpcGVyLmVtaXQoJ19zbGlkZUNsYXNzZXMnLCB1cGRhdGVzKTtcbiAgfVxuXG4gIHNsaWRlc1BlclZpZXdEeW5hbWljKHZpZXcgPSAnY3VycmVudCcsIGV4YWN0ID0gZmFsc2UpIHtcbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgIGNvbnN0IHtcbiAgICAgIHBhcmFtcyxcbiAgICAgIHNsaWRlcyxcbiAgICAgIHNsaWRlc0dyaWQsXG4gICAgICBzbGlkZXNTaXplc0dyaWQsXG4gICAgICBzaXplOiBzd2lwZXJTaXplLFxuICAgICAgYWN0aXZlSW5kZXhcbiAgICB9ID0gc3dpcGVyO1xuICAgIGxldCBzcHYgPSAxO1xuXG4gICAgaWYgKHBhcmFtcy5jZW50ZXJlZFNsaWRlcykge1xuICAgICAgbGV0IHNsaWRlU2l6ZSA9IHNsaWRlc1thY3RpdmVJbmRleF0uc3dpcGVyU2xpZGVTaXplO1xuICAgICAgbGV0IGJyZWFrTG9vcDtcblxuICAgICAgZm9yIChsZXQgaSA9IGFjdGl2ZUluZGV4ICsgMTsgaSA8IHNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoc2xpZGVzW2ldICYmICFicmVha0xvb3ApIHtcbiAgICAgICAgICBzbGlkZVNpemUgKz0gc2xpZGVzW2ldLnN3aXBlclNsaWRlU2l6ZTtcbiAgICAgICAgICBzcHYgKz0gMTtcbiAgICAgICAgICBpZiAoc2xpZGVTaXplID4gc3dpcGVyU2l6ZSkgYnJlYWtMb29wID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBpID0gYWN0aXZlSW5kZXggLSAxOyBpID49IDA7IGkgLT0gMSkge1xuICAgICAgICBpZiAoc2xpZGVzW2ldICYmICFicmVha0xvb3ApIHtcbiAgICAgICAgICBzbGlkZVNpemUgKz0gc2xpZGVzW2ldLnN3aXBlclNsaWRlU2l6ZTtcbiAgICAgICAgICBzcHYgKz0gMTtcbiAgICAgICAgICBpZiAoc2xpZGVTaXplID4gc3dpcGVyU2l6ZSkgYnJlYWtMb29wID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgIGlmICh2aWV3ID09PSAnY3VycmVudCcpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IGFjdGl2ZUluZGV4ICsgMTsgaSA8IHNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGNvbnN0IHNsaWRlSW5WaWV3ID0gZXhhY3QgPyBzbGlkZXNHcmlkW2ldICsgc2xpZGVzU2l6ZXNHcmlkW2ldIC0gc2xpZGVzR3JpZFthY3RpdmVJbmRleF0gPCBzd2lwZXJTaXplIDogc2xpZGVzR3JpZFtpXSAtIHNsaWRlc0dyaWRbYWN0aXZlSW5kZXhdIDwgc3dpcGVyU2l6ZTtcblxuICAgICAgICAgIGlmIChzbGlkZUluVmlldykge1xuICAgICAgICAgICAgc3B2ICs9IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBwcmV2aW91c1xuICAgICAgICBmb3IgKGxldCBpID0gYWN0aXZlSW5kZXggLSAxOyBpID49IDA7IGkgLT0gMSkge1xuICAgICAgICAgIGNvbnN0IHNsaWRlSW5WaWV3ID0gc2xpZGVzR3JpZFthY3RpdmVJbmRleF0gLSBzbGlkZXNHcmlkW2ldIDwgc3dpcGVyU2l6ZTtcblxuICAgICAgICAgIGlmIChzbGlkZUluVmlldykge1xuICAgICAgICAgICAgc3B2ICs9IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNwdjtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICAgIGlmICghc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQpIHJldHVybjtcbiAgICBjb25zdCB7XG4gICAgICBzbmFwR3JpZCxcbiAgICAgIHBhcmFtc1xuICAgIH0gPSBzd2lwZXI7IC8vIEJyZWFrcG9pbnRzXG5cbiAgICBpZiAocGFyYW1zLmJyZWFrcG9pbnRzKSB7XG4gICAgICBzd2lwZXIuc2V0QnJlYWtwb2ludCgpO1xuICAgIH1cblxuICAgIHN3aXBlci51cGRhdGVTaXplKCk7XG4gICAgc3dpcGVyLnVwZGF0ZVNsaWRlcygpO1xuICAgIHN3aXBlci51cGRhdGVQcm9ncmVzcygpO1xuICAgIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG5cbiAgICBmdW5jdGlvbiBzZXRUcmFuc2xhdGUoKSB7XG4gICAgICBjb25zdCB0cmFuc2xhdGVWYWx1ZSA9IHN3aXBlci5ydGxUcmFuc2xhdGUgPyBzd2lwZXIudHJhbnNsYXRlICogLTEgOiBzd2lwZXIudHJhbnNsYXRlO1xuICAgICAgY29uc3QgbmV3VHJhbnNsYXRlID0gTWF0aC5taW4oTWF0aC5tYXgodHJhbnNsYXRlVmFsdWUsIHN3aXBlci5tYXhUcmFuc2xhdGUoKSksIHN3aXBlci5taW5UcmFuc2xhdGUoKSk7XG4gICAgICBzd2lwZXIuc2V0VHJhbnNsYXRlKG5ld1RyYW5zbGF0ZSk7XG4gICAgICBzd2lwZXIudXBkYXRlQWN0aXZlSW5kZXgoKTtcbiAgICAgIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG4gICAgfVxuXG4gICAgbGV0IHRyYW5zbGF0ZWQ7XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5mcmVlTW9kZSAmJiBzd2lwZXIucGFyYW1zLmZyZWVNb2RlLmVuYWJsZWQpIHtcbiAgICAgIHNldFRyYW5zbGF0ZSgpO1xuXG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5hdXRvSGVpZ2h0KSB7XG4gICAgICAgIHN3aXBlci51cGRhdGVBdXRvSGVpZ2h0KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICgoc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJWaWV3ID09PSAnYXV0bycgfHwgc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJWaWV3ID4gMSkgJiYgc3dpcGVyLmlzRW5kICYmICFzd2lwZXIucGFyYW1zLmNlbnRlcmVkU2xpZGVzKSB7XG4gICAgICAgIHRyYW5zbGF0ZWQgPSBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuc2xpZGVzLmxlbmd0aCAtIDEsIDAsIGZhbHNlLCB0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zbGF0ZWQgPSBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuYWN0aXZlSW5kZXgsIDAsIGZhbHNlLCB0cnVlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0cmFuc2xhdGVkKSB7XG4gICAgICAgIHNldFRyYW5zbGF0ZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwYXJhbXMud2F0Y2hPdmVyZmxvdyAmJiBzbmFwR3JpZCAhPT0gc3dpcGVyLnNuYXBHcmlkKSB7XG4gICAgICBzd2lwZXIuY2hlY2tPdmVyZmxvdygpO1xuICAgIH1cblxuICAgIHN3aXBlci5lbWl0KCd1cGRhdGUnKTtcbiAgfVxuXG4gIGNoYW5nZURpcmVjdGlvbihuZXdEaXJlY3Rpb24sIG5lZWRVcGRhdGUgPSB0cnVlKSB7XG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBjb25zdCBjdXJyZW50RGlyZWN0aW9uID0gc3dpcGVyLnBhcmFtcy5kaXJlY3Rpb247XG5cbiAgICBpZiAoIW5ld0RpcmVjdGlvbikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICBuZXdEaXJlY3Rpb24gPSBjdXJyZW50RGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnO1xuICAgIH1cblxuICAgIGlmIChuZXdEaXJlY3Rpb24gPT09IGN1cnJlbnREaXJlY3Rpb24gfHwgbmV3RGlyZWN0aW9uICE9PSAnaG9yaXpvbnRhbCcgJiYgbmV3RGlyZWN0aW9uICE9PSAndmVydGljYWwnKSB7XG4gICAgICByZXR1cm4gc3dpcGVyO1xuICAgIH1cblxuICAgIHN3aXBlci4kZWwucmVtb3ZlQ2xhc3MoYCR7c3dpcGVyLnBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzfSR7Y3VycmVudERpcmVjdGlvbn1gKS5hZGRDbGFzcyhgJHtzd2lwZXIucGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3N9JHtuZXdEaXJlY3Rpb259YCk7XG4gICAgc3dpcGVyLmVtaXRDb250YWluZXJDbGFzc2VzKCk7XG4gICAgc3dpcGVyLnBhcmFtcy5kaXJlY3Rpb24gPSBuZXdEaXJlY3Rpb247XG4gICAgc3dpcGVyLnNsaWRlcy5lYWNoKHNsaWRlRWwgPT4ge1xuICAgICAgaWYgKG5ld0RpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICBzbGlkZUVsLnN0eWxlLndpZHRoID0gJyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzbGlkZUVsLnN0eWxlLmhlaWdodCA9ICcnO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHN3aXBlci5lbWl0KCdjaGFuZ2VEaXJlY3Rpb24nKTtcbiAgICBpZiAobmVlZFVwZGF0ZSkgc3dpcGVyLnVwZGF0ZSgpO1xuICAgIHJldHVybiBzd2lwZXI7XG4gIH1cblxuICBtb3VudChlbCkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKHN3aXBlci5tb3VudGVkKSByZXR1cm4gdHJ1ZTsgLy8gRmluZCBlbFxuXG4gICAgY29uc3QgJGVsID0gJChlbCB8fCBzd2lwZXIucGFyYW1zLmVsKTtcbiAgICBlbCA9ICRlbFswXTtcblxuICAgIGlmICghZWwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBlbC5zd2lwZXIgPSBzd2lwZXI7XG5cbiAgICBjb25zdCBnZXRXcmFwcGVyU2VsZWN0b3IgPSAoKSA9PiB7XG4gICAgICByZXR1cm4gYC4keyhzd2lwZXIucGFyYW1zLndyYXBwZXJDbGFzcyB8fCAnJykudHJpbSgpLnNwbGl0KCcgJykuam9pbignLicpfWA7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFdyYXBwZXIgPSAoKSA9PiB7XG4gICAgICBpZiAoZWwgJiYgZWwuc2hhZG93Um9vdCAmJiBlbC5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IpIHtcbiAgICAgICAgY29uc3QgcmVzID0gJChlbC5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoZ2V0V3JhcHBlclNlbGVjdG9yKCkpKTsgLy8gQ2hpbGRyZW4gbmVlZHMgdG8gcmV0dXJuIHNsb3QgaXRlbXNcblxuICAgICAgICByZXMuY2hpbGRyZW4gPSBvcHRpb25zID0+ICRlbC5jaGlsZHJlbihvcHRpb25zKTtcblxuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gJGVsLmNoaWxkcmVuKGdldFdyYXBwZXJTZWxlY3RvcigpKTtcbiAgICB9OyAvLyBGaW5kIFdyYXBwZXJcblxuXG4gICAgbGV0ICR3cmFwcGVyRWwgPSBnZXRXcmFwcGVyKCk7XG5cbiAgICBpZiAoJHdyYXBwZXJFbC5sZW5ndGggPT09IDAgJiYgc3dpcGVyLnBhcmFtcy5jcmVhdGVFbGVtZW50cykge1xuICAgICAgY29uc3QgZG9jdW1lbnQgPSBnZXREb2N1bWVudCgpO1xuICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgJHdyYXBwZXJFbCA9ICQod3JhcHBlcik7XG4gICAgICB3cmFwcGVyLmNsYXNzTmFtZSA9IHN3aXBlci5wYXJhbXMud3JhcHBlckNsYXNzO1xuICAgICAgJGVsLmFwcGVuZCh3cmFwcGVyKTtcbiAgICAgICRlbC5jaGlsZHJlbihgLiR7c3dpcGVyLnBhcmFtcy5zbGlkZUNsYXNzfWApLmVhY2goc2xpZGVFbCA9PiB7XG4gICAgICAgICR3cmFwcGVyRWwuYXBwZW5kKHNsaWRlRWwpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgT2JqZWN0LmFzc2lnbihzd2lwZXIsIHtcbiAgICAgICRlbCxcbiAgICAgIGVsLFxuICAgICAgJHdyYXBwZXJFbCxcbiAgICAgIHdyYXBwZXJFbDogJHdyYXBwZXJFbFswXSxcbiAgICAgIG1vdW50ZWQ6IHRydWUsXG4gICAgICAvLyBSVExcbiAgICAgIHJ0bDogZWwuZGlyLnRvTG93ZXJDYXNlKCkgPT09ICdydGwnIHx8ICRlbC5jc3MoJ2RpcmVjdGlvbicpID09PSAncnRsJyxcbiAgICAgIHJ0bFRyYW5zbGF0ZTogc3dpcGVyLnBhcmFtcy5kaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyAmJiAoZWwuZGlyLnRvTG93ZXJDYXNlKCkgPT09ICdydGwnIHx8ICRlbC5jc3MoJ2RpcmVjdGlvbicpID09PSAncnRsJyksXG4gICAgICB3cm9uZ1JUTDogJHdyYXBwZXJFbC5jc3MoJ2Rpc3BsYXknKSA9PT0gJy13ZWJraXQtYm94J1xuICAgIH0pO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaW5pdChlbCkge1xuICAgIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKHN3aXBlci5pbml0aWFsaXplZCkgcmV0dXJuIHN3aXBlcjtcbiAgICBjb25zdCBtb3VudGVkID0gc3dpcGVyLm1vdW50KGVsKTtcbiAgICBpZiAobW91bnRlZCA9PT0gZmFsc2UpIHJldHVybiBzd2lwZXI7XG4gICAgc3dpcGVyLmVtaXQoJ2JlZm9yZUluaXQnKTsgLy8gU2V0IGJyZWFrcG9pbnRcblxuICAgIGlmIChzd2lwZXIucGFyYW1zLmJyZWFrcG9pbnRzKSB7XG4gICAgICBzd2lwZXIuc2V0QnJlYWtwb2ludCgpO1xuICAgIH0gLy8gQWRkIENsYXNzZXNcblxuXG4gICAgc3dpcGVyLmFkZENsYXNzZXMoKTsgLy8gQ3JlYXRlIGxvb3BcblxuICAgIGlmIChzd2lwZXIucGFyYW1zLmxvb3ApIHtcbiAgICAgIHN3aXBlci5sb29wQ3JlYXRlKCk7XG4gICAgfSAvLyBVcGRhdGUgc2l6ZVxuXG5cbiAgICBzd2lwZXIudXBkYXRlU2l6ZSgpOyAvLyBVcGRhdGUgc2xpZGVzXG5cbiAgICBzd2lwZXIudXBkYXRlU2xpZGVzKCk7XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy53YXRjaE92ZXJmbG93KSB7XG4gICAgICBzd2lwZXIuY2hlY2tPdmVyZmxvdygpO1xuICAgIH0gLy8gU2V0IEdyYWIgQ3Vyc29yXG5cblxuICAgIGlmIChzd2lwZXIucGFyYW1zLmdyYWJDdXJzb3IgJiYgc3dpcGVyLmVuYWJsZWQpIHtcbiAgICAgIHN3aXBlci5zZXRHcmFiQ3Vyc29yKCk7XG4gICAgfVxuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMucHJlbG9hZEltYWdlcykge1xuICAgICAgc3dpcGVyLnByZWxvYWRJbWFnZXMoKTtcbiAgICB9IC8vIFNsaWRlIFRvIEluaXRpYWwgU2xpZGVcblxuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMubG9vcCkge1xuICAgICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLnBhcmFtcy5pbml0aWFsU2xpZGUgKyBzd2lwZXIubG9vcGVkU2xpZGVzLCAwLCBzd2lwZXIucGFyYW1zLnJ1bkNhbGxiYWNrc09uSW5pdCwgZmFsc2UsIHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzd2lwZXIuc2xpZGVUbyhzd2lwZXIucGFyYW1zLmluaXRpYWxTbGlkZSwgMCwgc3dpcGVyLnBhcmFtcy5ydW5DYWxsYmFja3NPbkluaXQsIGZhbHNlLCB0cnVlKTtcbiAgICB9IC8vIEF0dGFjaCBldmVudHNcblxuXG4gICAgc3dpcGVyLmF0dGFjaEV2ZW50cygpOyAvLyBJbml0IEZsYWdcblxuICAgIHN3aXBlci5pbml0aWFsaXplZCA9IHRydWU7IC8vIEVtaXRcblxuICAgIHN3aXBlci5lbWl0KCdpbml0Jyk7XG4gICAgc3dpcGVyLmVtaXQoJ2FmdGVySW5pdCcpO1xuICAgIHJldHVybiBzd2lwZXI7XG4gIH1cblxuICBkZXN0cm95KGRlbGV0ZUluc3RhbmNlID0gdHJ1ZSwgY2xlYW5TdHlsZXMgPSB0cnVlKSB7XG4gICAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgICBjb25zdCB7XG4gICAgICBwYXJhbXMsXG4gICAgICAkZWwsXG4gICAgICAkd3JhcHBlckVsLFxuICAgICAgc2xpZGVzXG4gICAgfSA9IHN3aXBlcjtcblxuICAgIGlmICh0eXBlb2Ygc3dpcGVyLnBhcmFtcyA9PT0gJ3VuZGVmaW5lZCcgfHwgc3dpcGVyLmRlc3Ryb3llZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgc3dpcGVyLmVtaXQoJ2JlZm9yZURlc3Ryb3knKTsgLy8gSW5pdCBGbGFnXG5cbiAgICBzd2lwZXIuaW5pdGlhbGl6ZWQgPSBmYWxzZTsgLy8gRGV0YWNoIGV2ZW50c1xuXG4gICAgc3dpcGVyLmRldGFjaEV2ZW50cygpOyAvLyBEZXN0cm95IGxvb3BcblxuICAgIGlmIChwYXJhbXMubG9vcCkge1xuICAgICAgc3dpcGVyLmxvb3BEZXN0cm95KCk7XG4gICAgfSAvLyBDbGVhbnVwIHN0eWxlc1xuXG5cbiAgICBpZiAoY2xlYW5TdHlsZXMpIHtcbiAgICAgIHN3aXBlci5yZW1vdmVDbGFzc2VzKCk7XG4gICAgICAkZWwucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICR3cmFwcGVyRWwucmVtb3ZlQXR0cignc3R5bGUnKTtcblxuICAgICAgaWYgKHNsaWRlcyAmJiBzbGlkZXMubGVuZ3RoKSB7XG4gICAgICAgIHNsaWRlcy5yZW1vdmVDbGFzcyhbcGFyYW1zLnNsaWRlVmlzaWJsZUNsYXNzLCBwYXJhbXMuc2xpZGVBY3RpdmVDbGFzcywgcGFyYW1zLnNsaWRlTmV4dENsYXNzLCBwYXJhbXMuc2xpZGVQcmV2Q2xhc3NdLmpvaW4oJyAnKSkucmVtb3ZlQXR0cignc3R5bGUnKS5yZW1vdmVBdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHN3aXBlci5lbWl0KCdkZXN0cm95Jyk7IC8vIERldGFjaCBlbWl0dGVyIGV2ZW50c1xuXG4gICAgT2JqZWN0LmtleXMoc3dpcGVyLmV2ZW50c0xpc3RlbmVycykuZm9yRWFjaChldmVudE5hbWUgPT4ge1xuICAgICAgc3dpcGVyLm9mZihldmVudE5hbWUpO1xuICAgIH0pO1xuXG4gICAgaWYgKGRlbGV0ZUluc3RhbmNlICE9PSBmYWxzZSkge1xuICAgICAgc3dpcGVyLiRlbFswXS5zd2lwZXIgPSBudWxsO1xuICAgICAgZGVsZXRlUHJvcHMoc3dpcGVyKTtcbiAgICB9XG5cbiAgICBzd2lwZXIuZGVzdHJveWVkID0gdHJ1ZTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHN0YXRpYyBleHRlbmREZWZhdWx0cyhuZXdEZWZhdWx0cykge1xuICAgIGV4dGVuZChleHRlbmRlZERlZmF1bHRzLCBuZXdEZWZhdWx0cyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGV4dGVuZGVkRGVmYXVsdHMoKSB7XG4gICAgcmV0dXJuIGV4dGVuZGVkRGVmYXVsdHM7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGRlZmF1bHRzKCkge1xuICAgIHJldHVybiBkZWZhdWx0cztcbiAgfVxuXG4gIHN0YXRpYyBpbnN0YWxsTW9kdWxlKG1vZCkge1xuICAgIGlmICghU3dpcGVyLnByb3RvdHlwZS5fX21vZHVsZXNfXykgU3dpcGVyLnByb3RvdHlwZS5fX21vZHVsZXNfXyA9IFtdO1xuICAgIGNvbnN0IG1vZHVsZXMgPSBTd2lwZXIucHJvdG90eXBlLl9fbW9kdWxlc19fO1xuXG4gICAgaWYgKHR5cGVvZiBtb2QgPT09ICdmdW5jdGlvbicgJiYgbW9kdWxlcy5pbmRleE9mKG1vZCkgPCAwKSB7XG4gICAgICBtb2R1bGVzLnB1c2gobW9kKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgdXNlKG1vZHVsZSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KG1vZHVsZSkpIHtcbiAgICAgIG1vZHVsZS5mb3JFYWNoKG0gPT4gU3dpcGVyLmluc3RhbGxNb2R1bGUobSkpO1xuICAgICAgcmV0dXJuIFN3aXBlcjtcbiAgICB9XG5cbiAgICBTd2lwZXIuaW5zdGFsbE1vZHVsZShtb2R1bGUpO1xuICAgIHJldHVybiBTd2lwZXI7XG4gIH1cblxufVxuXG5PYmplY3Qua2V5cyhwcm90b3R5cGVzKS5mb3JFYWNoKHByb3RvdHlwZUdyb3VwID0+IHtcbiAgT2JqZWN0LmtleXMocHJvdG90eXBlc1twcm90b3R5cGVHcm91cF0pLmZvckVhY2gocHJvdG9NZXRob2QgPT4ge1xuICAgIFN3aXBlci5wcm90b3R5cGVbcHJvdG9NZXRob2RdID0gcHJvdG90eXBlc1twcm90b3R5cGVHcm91cF1bcHJvdG9NZXRob2RdO1xuICB9KTtcbn0pO1xuU3dpcGVyLnVzZShbUmVzaXplLCBPYnNlcnZlcl0pO1xuZXhwb3J0IGRlZmF1bHQgU3dpcGVyOyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgaW5pdDogdHJ1ZSxcbiAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gIHRvdWNoRXZlbnRzVGFyZ2V0OiAnd3JhcHBlcicsXG4gIGluaXRpYWxTbGlkZTogMCxcbiAgc3BlZWQ6IDMwMCxcbiAgY3NzTW9kZTogZmFsc2UsXG4gIHVwZGF0ZU9uV2luZG93UmVzaXplOiB0cnVlLFxuICByZXNpemVPYnNlcnZlcjogdHJ1ZSxcbiAgbmVzdGVkOiBmYWxzZSxcbiAgY3JlYXRlRWxlbWVudHM6IGZhbHNlLFxuICBlbmFibGVkOiB0cnVlLFxuICBmb2N1c2FibGVFbGVtZW50czogJ2lucHV0LCBzZWxlY3QsIG9wdGlvbiwgdGV4dGFyZWEsIGJ1dHRvbiwgdmlkZW8sIGxhYmVsJyxcbiAgLy8gT3ZlcnJpZGVzXG4gIHdpZHRoOiBudWxsLFxuICBoZWlnaHQ6IG51bGwsXG4gIC8vXG4gIHByZXZlbnRJbnRlcmFjdGlvbk9uVHJhbnNpdGlvbjogZmFsc2UsXG4gIC8vIHNzclxuICB1c2VyQWdlbnQ6IG51bGwsXG4gIHVybDogbnVsbCxcbiAgLy8gVG8gc3VwcG9ydCBpT1MncyBzd2lwZS10by1nby1iYWNrIGdlc3R1cmUgKHdoZW4gYmVpbmcgdXNlZCBpbi1hcHApLlxuICBlZGdlU3dpcGVEZXRlY3Rpb246IGZhbHNlLFxuICBlZGdlU3dpcGVUaHJlc2hvbGQ6IDIwLFxuICAvLyBBdXRvaGVpZ2h0XG4gIGF1dG9IZWlnaHQ6IGZhbHNlLFxuICAvLyBTZXQgd3JhcHBlciB3aWR0aFxuICBzZXRXcmFwcGVyU2l6ZTogZmFsc2UsXG4gIC8vIFZpcnR1YWwgVHJhbnNsYXRlXG4gIHZpcnR1YWxUcmFuc2xhdGU6IGZhbHNlLFxuICAvLyBFZmZlY3RzXG4gIGVmZmVjdDogJ3NsaWRlJyxcbiAgLy8gJ3NsaWRlJyBvciAnZmFkZScgb3IgJ2N1YmUnIG9yICdjb3ZlcmZsb3cnIG9yICdmbGlwJ1xuICAvLyBCcmVha3BvaW50c1xuICBicmVha3BvaW50czogdW5kZWZpbmVkLFxuICBicmVha3BvaW50c0Jhc2U6ICd3aW5kb3cnLFxuICAvLyBTbGlkZXMgZ3JpZFxuICBzcGFjZUJldHdlZW46IDAsXG4gIHNsaWRlc1BlclZpZXc6IDEsXG4gIHNsaWRlc1Blckdyb3VwOiAxLFxuICBzbGlkZXNQZXJHcm91cFNraXA6IDAsXG4gIHNsaWRlc1Blckdyb3VwQXV0bzogZmFsc2UsXG4gIGNlbnRlcmVkU2xpZGVzOiBmYWxzZSxcbiAgY2VudGVyZWRTbGlkZXNCb3VuZHM6IGZhbHNlLFxuICBzbGlkZXNPZmZzZXRCZWZvcmU6IDAsXG4gIC8vIGluIHB4XG4gIHNsaWRlc09mZnNldEFmdGVyOiAwLFxuICAvLyBpbiBweFxuICBub3JtYWxpemVTbGlkZUluZGV4OiB0cnVlLFxuICBjZW50ZXJJbnN1ZmZpY2llbnRTbGlkZXM6IGZhbHNlLFxuICAvLyBEaXNhYmxlIHN3aXBlciBhbmQgaGlkZSBuYXZpZ2F0aW9uIHdoZW4gY29udGFpbmVyIG5vdCBvdmVyZmxvd1xuICB3YXRjaE92ZXJmbG93OiB0cnVlLFxuICAvLyBSb3VuZCBsZW5ndGhcbiAgcm91bmRMZW5ndGhzOiBmYWxzZSxcbiAgLy8gVG91Y2hlc1xuICB0b3VjaFJhdGlvOiAxLFxuICB0b3VjaEFuZ2xlOiA0NSxcbiAgc2ltdWxhdGVUb3VjaDogdHJ1ZSxcbiAgc2hvcnRTd2lwZXM6IHRydWUsXG4gIGxvbmdTd2lwZXM6IHRydWUsXG4gIGxvbmdTd2lwZXNSYXRpbzogMC41LFxuICBsb25nU3dpcGVzTXM6IDMwMCxcbiAgZm9sbG93RmluZ2VyOiB0cnVlLFxuICBhbGxvd1RvdWNoTW92ZTogdHJ1ZSxcbiAgdGhyZXNob2xkOiAwLFxuICB0b3VjaE1vdmVTdG9wUHJvcGFnYXRpb246IGZhbHNlLFxuICB0b3VjaFN0YXJ0UHJldmVudERlZmF1bHQ6IHRydWUsXG4gIHRvdWNoU3RhcnRGb3JjZVByZXZlbnREZWZhdWx0OiBmYWxzZSxcbiAgdG91Y2hSZWxlYXNlT25FZGdlczogZmFsc2UsXG4gIC8vIFVuaXF1ZSBOYXZpZ2F0aW9uIEVsZW1lbnRzXG4gIHVuaXF1ZU5hdkVsZW1lbnRzOiB0cnVlLFxuICAvLyBSZXNpc3RhbmNlXG4gIHJlc2lzdGFuY2U6IHRydWUsXG4gIHJlc2lzdGFuY2VSYXRpbzogMC44NSxcbiAgLy8gUHJvZ3Jlc3NcbiAgd2F0Y2hTbGlkZXNQcm9ncmVzczogZmFsc2UsXG4gIC8vIEN1cnNvclxuICBncmFiQ3Vyc29yOiBmYWxzZSxcbiAgLy8gQ2xpY2tzXG4gIHByZXZlbnRDbGlja3M6IHRydWUsXG4gIHByZXZlbnRDbGlja3NQcm9wYWdhdGlvbjogdHJ1ZSxcbiAgc2xpZGVUb0NsaWNrZWRTbGlkZTogZmFsc2UsXG4gIC8vIEltYWdlc1xuICBwcmVsb2FkSW1hZ2VzOiB0cnVlLFxuICB1cGRhdGVPbkltYWdlc1JlYWR5OiB0cnVlLFxuICAvLyBsb29wXG4gIGxvb3A6IGZhbHNlLFxuICBsb29wQWRkaXRpb25hbFNsaWRlczogMCxcbiAgbG9vcGVkU2xpZGVzOiBudWxsLFxuICBsb29wRmlsbEdyb3VwV2l0aEJsYW5rOiBmYWxzZSxcbiAgbG9vcFByZXZlbnRzU2xpZGU6IHRydWUsXG4gIC8vIFN3aXBpbmcvbm8gc3dpcGluZ1xuICBhbGxvd1NsaWRlUHJldjogdHJ1ZSxcbiAgYWxsb3dTbGlkZU5leHQ6IHRydWUsXG4gIHN3aXBlSGFuZGxlcjogbnVsbCxcbiAgLy8gJy5zd2lwZS1oYW5kbGVyJyxcbiAgbm9Td2lwaW5nOiB0cnVlLFxuICBub1N3aXBpbmdDbGFzczogJ3N3aXBlci1uby1zd2lwaW5nJyxcbiAgbm9Td2lwaW5nU2VsZWN0b3I6IG51bGwsXG4gIC8vIFBhc3NpdmUgTGlzdGVuZXJzXG4gIHBhc3NpdmVMaXN0ZW5lcnM6IHRydWUsXG4gIC8vIE5TXG4gIGNvbnRhaW5lck1vZGlmaWVyQ2xhc3M6ICdzd2lwZXItJyxcbiAgLy8gTkVXXG4gIHNsaWRlQ2xhc3M6ICdzd2lwZXItc2xpZGUnLFxuICBzbGlkZUJsYW5rQ2xhc3M6ICdzd2lwZXItc2xpZGUtaW52aXNpYmxlLWJsYW5rJyxcbiAgc2xpZGVBY3RpdmVDbGFzczogJ3N3aXBlci1zbGlkZS1hY3RpdmUnLFxuICBzbGlkZUR1cGxpY2F0ZUFjdGl2ZUNsYXNzOiAnc3dpcGVyLXNsaWRlLWR1cGxpY2F0ZS1hY3RpdmUnLFxuICBzbGlkZVZpc2libGVDbGFzczogJ3N3aXBlci1zbGlkZS12aXNpYmxlJyxcbiAgc2xpZGVEdXBsaWNhdGVDbGFzczogJ3N3aXBlci1zbGlkZS1kdXBsaWNhdGUnLFxuICBzbGlkZU5leHRDbGFzczogJ3N3aXBlci1zbGlkZS1uZXh0JyxcbiAgc2xpZGVEdXBsaWNhdGVOZXh0Q2xhc3M6ICdzd2lwZXItc2xpZGUtZHVwbGljYXRlLW5leHQnLFxuICBzbGlkZVByZXZDbGFzczogJ3N3aXBlci1zbGlkZS1wcmV2JyxcbiAgc2xpZGVEdXBsaWNhdGVQcmV2Q2xhc3M6ICdzd2lwZXItc2xpZGUtZHVwbGljYXRlLXByZXYnLFxuICB3cmFwcGVyQ2xhc3M6ICdzd2lwZXItd3JhcHBlcicsXG4gIC8vIENhbGxiYWNrc1xuICBydW5DYWxsYmFja3NPbkluaXQ6IHRydWUsXG4gIC8vIEludGVybmFsc1xuICBfZW1pdENsYXNzZXM6IGZhbHNlXG59OyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG5leHBvcnQgZGVmYXVsdCB7XG4gIG9uKGV2ZW50cywgaGFuZGxlciwgcHJpb3JpdHkpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBpZiAodHlwZW9mIGhhbmRsZXIgIT09ICdmdW5jdGlvbicpIHJldHVybiBzZWxmO1xuICAgIGNvbnN0IG1ldGhvZCA9IHByaW9yaXR5ID8gJ3Vuc2hpZnQnIDogJ3B1c2gnO1xuICAgIGV2ZW50cy5zcGxpdCgnICcpLmZvckVhY2goZXZlbnQgPT4ge1xuICAgICAgaWYgKCFzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF0pIHNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XSA9IFtdO1xuICAgICAgc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdW21ldGhvZF0oaGFuZGxlcik7XG4gICAgfSk7XG4gICAgcmV0dXJuIHNlbGY7XG4gIH0sXG5cbiAgb25jZShldmVudHMsIGhhbmRsZXIsIHByaW9yaXR5KSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgaWYgKHR5cGVvZiBoYW5kbGVyICE9PSAnZnVuY3Rpb24nKSByZXR1cm4gc2VsZjtcblxuICAgIGZ1bmN0aW9uIG9uY2VIYW5kbGVyKC4uLmFyZ3MpIHtcbiAgICAgIHNlbGYub2ZmKGV2ZW50cywgb25jZUhhbmRsZXIpO1xuXG4gICAgICBpZiAob25jZUhhbmRsZXIuX19lbWl0dGVyUHJveHkpIHtcbiAgICAgICAgZGVsZXRlIG9uY2VIYW5kbGVyLl9fZW1pdHRlclByb3h5O1xuICAgICAgfVxuXG4gICAgICBoYW5kbGVyLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgIH1cblxuICAgIG9uY2VIYW5kbGVyLl9fZW1pdHRlclByb3h5ID0gaGFuZGxlcjtcbiAgICByZXR1cm4gc2VsZi5vbihldmVudHMsIG9uY2VIYW5kbGVyLCBwcmlvcml0eSk7XG4gIH0sXG5cbiAgb25BbnkoaGFuZGxlciwgcHJpb3JpdHkpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBpZiAodHlwZW9mIGhhbmRsZXIgIT09ICdmdW5jdGlvbicpIHJldHVybiBzZWxmO1xuICAgIGNvbnN0IG1ldGhvZCA9IHByaW9yaXR5ID8gJ3Vuc2hpZnQnIDogJ3B1c2gnO1xuXG4gICAgaWYgKHNlbGYuZXZlbnRzQW55TGlzdGVuZXJzLmluZGV4T2YoaGFuZGxlcikgPCAwKSB7XG4gICAgICBzZWxmLmV2ZW50c0FueUxpc3RlbmVyc1ttZXRob2RdKGhhbmRsZXIpO1xuICAgIH1cblxuICAgIHJldHVybiBzZWxmO1xuICB9LFxuXG4gIG9mZkFueShoYW5kbGVyKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgaWYgKCFzZWxmLmV2ZW50c0FueUxpc3RlbmVycykgcmV0dXJuIHNlbGY7XG4gICAgY29uc3QgaW5kZXggPSBzZWxmLmV2ZW50c0FueUxpc3RlbmVycy5pbmRleE9mKGhhbmRsZXIpO1xuXG4gICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgIHNlbGYuZXZlbnRzQW55TGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbGY7XG4gIH0sXG5cbiAgb2ZmKGV2ZW50cywgaGFuZGxlcikge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGlmICghc2VsZi5ldmVudHNMaXN0ZW5lcnMpIHJldHVybiBzZWxmO1xuICAgIGV2ZW50cy5zcGxpdCgnICcpLmZvckVhY2goZXZlbnQgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF0gPSBbXTtcbiAgICAgIH0gZWxzZSBpZiAoc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdKSB7XG4gICAgICAgIHNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XS5mb3JFYWNoKChldmVudEhhbmRsZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgaWYgKGV2ZW50SGFuZGxlciA9PT0gaGFuZGxlciB8fCBldmVudEhhbmRsZXIuX19lbWl0dGVyUHJveHkgJiYgZXZlbnRIYW5kbGVyLl9fZW1pdHRlclByb3h5ID09PSBoYW5kbGVyKSB7XG4gICAgICAgICAgICBzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBzZWxmO1xuICB9LFxuXG4gIGVtaXQoLi4uYXJncykge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGlmICghc2VsZi5ldmVudHNMaXN0ZW5lcnMpIHJldHVybiBzZWxmO1xuICAgIGxldCBldmVudHM7XG4gICAgbGV0IGRhdGE7XG4gICAgbGV0IGNvbnRleHQ7XG5cbiAgICBpZiAodHlwZW9mIGFyZ3NbMF0gPT09ICdzdHJpbmcnIHx8IEFycmF5LmlzQXJyYXkoYXJnc1swXSkpIHtcbiAgICAgIGV2ZW50cyA9IGFyZ3NbMF07XG4gICAgICBkYXRhID0gYXJncy5zbGljZSgxLCBhcmdzLmxlbmd0aCk7XG4gICAgICBjb250ZXh0ID0gc2VsZjtcbiAgICB9IGVsc2Uge1xuICAgICAgZXZlbnRzID0gYXJnc1swXS5ldmVudHM7XG4gICAgICBkYXRhID0gYXJnc1swXS5kYXRhO1xuICAgICAgY29udGV4dCA9IGFyZ3NbMF0uY29udGV4dCB8fCBzZWxmO1xuICAgIH1cblxuICAgIGRhdGEudW5zaGlmdChjb250ZXh0KTtcbiAgICBjb25zdCBldmVudHNBcnJheSA9IEFycmF5LmlzQXJyYXkoZXZlbnRzKSA/IGV2ZW50cyA6IGV2ZW50cy5zcGxpdCgnICcpO1xuICAgIGV2ZW50c0FycmF5LmZvckVhY2goZXZlbnQgPT4ge1xuICAgICAgaWYgKHNlbGYuZXZlbnRzQW55TGlzdGVuZXJzICYmIHNlbGYuZXZlbnRzQW55TGlzdGVuZXJzLmxlbmd0aCkge1xuICAgICAgICBzZWxmLmV2ZW50c0FueUxpc3RlbmVycy5mb3JFYWNoKGV2ZW50SGFuZGxlciA9PiB7XG4gICAgICAgICAgZXZlbnRIYW5kbGVyLmFwcGx5KGNvbnRleHQsIFtldmVudCwgLi4uZGF0YV0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNlbGYuZXZlbnRzTGlzdGVuZXJzICYmIHNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XSkge1xuICAgICAgICBzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF0uZm9yRWFjaChldmVudEhhbmRsZXIgPT4ge1xuICAgICAgICAgIGV2ZW50SGFuZGxlci5hcHBseShjb250ZXh0LCBkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHNlbGY7XG4gIH1cblxufTsiLCJpbXBvcnQgeyBnZXREb2N1bWVudCB9IGZyb20gJ3Nzci13aW5kb3cnO1xuaW1wb3J0IG9uVG91Y2hTdGFydCBmcm9tICcuL29uVG91Y2hTdGFydC5qcyc7XG5pbXBvcnQgb25Ub3VjaE1vdmUgZnJvbSAnLi9vblRvdWNoTW92ZS5qcyc7XG5pbXBvcnQgb25Ub3VjaEVuZCBmcm9tICcuL29uVG91Y2hFbmQuanMnO1xuaW1wb3J0IG9uUmVzaXplIGZyb20gJy4vb25SZXNpemUuanMnO1xuaW1wb3J0IG9uQ2xpY2sgZnJvbSAnLi9vbkNsaWNrLmpzJztcbmltcG9ydCBvblNjcm9sbCBmcm9tICcuL29uU2Nyb2xsLmpzJztcbmxldCBkdW1teUV2ZW50QXR0YWNoZWQgPSBmYWxzZTtcblxuZnVuY3Rpb24gZHVtbXlFdmVudExpc3RlbmVyKCkge31cblxuY29uc3QgZXZlbnRzID0gKHN3aXBlciwgbWV0aG9kKSA9PiB7XG4gIGNvbnN0IGRvY3VtZW50ID0gZ2V0RG9jdW1lbnQoKTtcbiAgY29uc3Qge1xuICAgIHBhcmFtcyxcbiAgICB0b3VjaEV2ZW50cyxcbiAgICBlbCxcbiAgICB3cmFwcGVyRWwsXG4gICAgZGV2aWNlLFxuICAgIHN1cHBvcnRcbiAgfSA9IHN3aXBlcjtcbiAgY29uc3QgY2FwdHVyZSA9ICEhcGFyYW1zLm5lc3RlZDtcbiAgY29uc3QgZG9tTWV0aG9kID0gbWV0aG9kID09PSAnb24nID8gJ2FkZEV2ZW50TGlzdGVuZXInIDogJ3JlbW92ZUV2ZW50TGlzdGVuZXInO1xuICBjb25zdCBzd2lwZXJNZXRob2QgPSBtZXRob2Q7IC8vIFRvdWNoIEV2ZW50c1xuXG4gIGlmICghc3VwcG9ydC50b3VjaCkge1xuICAgIGVsW2RvbU1ldGhvZF0odG91Y2hFdmVudHMuc3RhcnQsIHN3aXBlci5vblRvdWNoU3RhcnQsIGZhbHNlKTtcbiAgICBkb2N1bWVudFtkb21NZXRob2RdKHRvdWNoRXZlbnRzLm1vdmUsIHN3aXBlci5vblRvdWNoTW92ZSwgY2FwdHVyZSk7XG4gICAgZG9jdW1lbnRbZG9tTWV0aG9kXSh0b3VjaEV2ZW50cy5lbmQsIHN3aXBlci5vblRvdWNoRW5kLCBmYWxzZSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcGFzc2l2ZUxpc3RlbmVyID0gdG91Y2hFdmVudHMuc3RhcnQgPT09ICd0b3VjaHN0YXJ0JyAmJiBzdXBwb3J0LnBhc3NpdmVMaXN0ZW5lciAmJiBwYXJhbXMucGFzc2l2ZUxpc3RlbmVycyA/IHtcbiAgICAgIHBhc3NpdmU6IHRydWUsXG4gICAgICBjYXB0dXJlOiBmYWxzZVxuICAgIH0gOiBmYWxzZTtcbiAgICBlbFtkb21NZXRob2RdKHRvdWNoRXZlbnRzLnN0YXJ0LCBzd2lwZXIub25Ub3VjaFN0YXJ0LCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgIGVsW2RvbU1ldGhvZF0odG91Y2hFdmVudHMubW92ZSwgc3dpcGVyLm9uVG91Y2hNb3ZlLCBzdXBwb3J0LnBhc3NpdmVMaXN0ZW5lciA/IHtcbiAgICAgIHBhc3NpdmU6IGZhbHNlLFxuICAgICAgY2FwdHVyZVxuICAgIH0gOiBjYXB0dXJlKTtcbiAgICBlbFtkb21NZXRob2RdKHRvdWNoRXZlbnRzLmVuZCwgc3dpcGVyLm9uVG91Y2hFbmQsIHBhc3NpdmVMaXN0ZW5lcik7XG5cbiAgICBpZiAodG91Y2hFdmVudHMuY2FuY2VsKSB7XG4gICAgICBlbFtkb21NZXRob2RdKHRvdWNoRXZlbnRzLmNhbmNlbCwgc3dpcGVyLm9uVG91Y2hFbmQsIHBhc3NpdmVMaXN0ZW5lcik7XG4gICAgfVxuICB9IC8vIFByZXZlbnQgTGlua3MgQ2xpY2tzXG5cblxuICBpZiAocGFyYW1zLnByZXZlbnRDbGlja3MgfHwgcGFyYW1zLnByZXZlbnRDbGlja3NQcm9wYWdhdGlvbikge1xuICAgIGVsW2RvbU1ldGhvZF0oJ2NsaWNrJywgc3dpcGVyLm9uQ2xpY2ssIHRydWUpO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5jc3NNb2RlKSB7XG4gICAgd3JhcHBlckVsW2RvbU1ldGhvZF0oJ3Njcm9sbCcsIHN3aXBlci5vblNjcm9sbCk7XG4gIH0gLy8gUmVzaXplIGhhbmRsZXJcblxuXG4gIGlmIChwYXJhbXMudXBkYXRlT25XaW5kb3dSZXNpemUpIHtcbiAgICBzd2lwZXJbc3dpcGVyTWV0aG9kXShkZXZpY2UuaW9zIHx8IGRldmljZS5hbmRyb2lkID8gJ3Jlc2l6ZSBvcmllbnRhdGlvbmNoYW5nZSBvYnNlcnZlclVwZGF0ZScgOiAncmVzaXplIG9ic2VydmVyVXBkYXRlJywgb25SZXNpemUsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN3aXBlcltzd2lwZXJNZXRob2RdKCdvYnNlcnZlclVwZGF0ZScsIG9uUmVzaXplLCB0cnVlKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gYXR0YWNoRXZlbnRzKCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCBkb2N1bWVudCA9IGdldERvY3VtZW50KCk7XG4gIGNvbnN0IHtcbiAgICBwYXJhbXMsXG4gICAgc3VwcG9ydFxuICB9ID0gc3dpcGVyO1xuICBzd2lwZXIub25Ub3VjaFN0YXJ0ID0gb25Ub3VjaFN0YXJ0LmJpbmQoc3dpcGVyKTtcbiAgc3dpcGVyLm9uVG91Y2hNb3ZlID0gb25Ub3VjaE1vdmUuYmluZChzd2lwZXIpO1xuICBzd2lwZXIub25Ub3VjaEVuZCA9IG9uVG91Y2hFbmQuYmluZChzd2lwZXIpO1xuXG4gIGlmIChwYXJhbXMuY3NzTW9kZSkge1xuICAgIHN3aXBlci5vblNjcm9sbCA9IG9uU2Nyb2xsLmJpbmQoc3dpcGVyKTtcbiAgfVxuXG4gIHN3aXBlci5vbkNsaWNrID0gb25DbGljay5iaW5kKHN3aXBlcik7XG5cbiAgaWYgKHN1cHBvcnQudG91Y2ggJiYgIWR1bW15RXZlbnRBdHRhY2hlZCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBkdW1teUV2ZW50TGlzdGVuZXIpO1xuICAgIGR1bW15RXZlbnRBdHRhY2hlZCA9IHRydWU7XG4gIH1cblxuICBldmVudHMoc3dpcGVyLCAnb24nKTtcbn1cblxuZnVuY3Rpb24gZGV0YWNoRXZlbnRzKCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBldmVudHMoc3dpcGVyLCAnb2ZmJyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYXR0YWNoRXZlbnRzLFxuICBkZXRhY2hFdmVudHNcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb25DbGljayhlKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGlmICghc3dpcGVyLmVuYWJsZWQpIHJldHVybjtcblxuICBpZiAoIXN3aXBlci5hbGxvd0NsaWNrKSB7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMucHJldmVudENsaWNrcykgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMucHJldmVudENsaWNrc1Byb3BhZ2F0aW9uICYmIHN3aXBlci5hbmltYXRpbmcpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9uUmVzaXplKCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCB7XG4gICAgcGFyYW1zLFxuICAgIGVsXG4gIH0gPSBzd2lwZXI7XG4gIGlmIChlbCAmJiBlbC5vZmZzZXRXaWR0aCA9PT0gMCkgcmV0dXJuOyAvLyBCcmVha3BvaW50c1xuXG4gIGlmIChwYXJhbXMuYnJlYWtwb2ludHMpIHtcbiAgICBzd2lwZXIuc2V0QnJlYWtwb2ludCgpO1xuICB9IC8vIFNhdmUgbG9ja3NcblxuXG4gIGNvbnN0IHtcbiAgICBhbGxvd1NsaWRlTmV4dCxcbiAgICBhbGxvd1NsaWRlUHJldixcbiAgICBzbmFwR3JpZFxuICB9ID0gc3dpcGVyOyAvLyBEaXNhYmxlIGxvY2tzIG9uIHJlc2l6ZVxuXG4gIHN3aXBlci5hbGxvd1NsaWRlTmV4dCA9IHRydWU7XG4gIHN3aXBlci5hbGxvd1NsaWRlUHJldiA9IHRydWU7XG4gIHN3aXBlci51cGRhdGVTaXplKCk7XG4gIHN3aXBlci51cGRhdGVTbGlkZXMoKTtcbiAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcblxuICBpZiAoKHBhcmFtcy5zbGlkZXNQZXJWaWV3ID09PSAnYXV0bycgfHwgcGFyYW1zLnNsaWRlc1BlclZpZXcgPiAxKSAmJiBzd2lwZXIuaXNFbmQgJiYgIXN3aXBlci5pc0JlZ2lubmluZyAmJiAhc3dpcGVyLnBhcmFtcy5jZW50ZXJlZFNsaWRlcykge1xuICAgIHN3aXBlci5zbGlkZVRvKHN3aXBlci5zbGlkZXMubGVuZ3RoIC0gMSwgMCwgZmFsc2UsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN3aXBlci5zbGlkZVRvKHN3aXBlci5hY3RpdmVJbmRleCwgMCwgZmFsc2UsIHRydWUpO1xuICB9XG5cbiAgaWYgKHN3aXBlci5hdXRvcGxheSAmJiBzd2lwZXIuYXV0b3BsYXkucnVubmluZyAmJiBzd2lwZXIuYXV0b3BsYXkucGF1c2VkKSB7XG4gICAgc3dpcGVyLmF1dG9wbGF5LnJ1bigpO1xuICB9IC8vIFJldHVybiBsb2NrcyBhZnRlciByZXNpemVcblxuXG4gIHN3aXBlci5hbGxvd1NsaWRlUHJldiA9IGFsbG93U2xpZGVQcmV2O1xuICBzd2lwZXIuYWxsb3dTbGlkZU5leHQgPSBhbGxvd1NsaWRlTmV4dDtcblxuICBpZiAoc3dpcGVyLnBhcmFtcy53YXRjaE92ZXJmbG93ICYmIHNuYXBHcmlkICE9PSBzd2lwZXIuc25hcEdyaWQpIHtcbiAgICBzd2lwZXIuY2hlY2tPdmVyZmxvdygpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb25TY3JvbGwoKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IHtcbiAgICB3cmFwcGVyRWwsXG4gICAgcnRsVHJhbnNsYXRlLFxuICAgIGVuYWJsZWRcbiAgfSA9IHN3aXBlcjtcbiAgaWYgKCFlbmFibGVkKSByZXR1cm47XG4gIHN3aXBlci5wcmV2aW91c1RyYW5zbGF0ZSA9IHN3aXBlci50cmFuc2xhdGU7XG5cbiAgaWYgKHN3aXBlci5pc0hvcml6b250YWwoKSkge1xuICAgIHN3aXBlci50cmFuc2xhdGUgPSAtd3JhcHBlckVsLnNjcm9sbExlZnQ7XG4gIH0gZWxzZSB7XG4gICAgc3dpcGVyLnRyYW5zbGF0ZSA9IC13cmFwcGVyRWwuc2Nyb2xsVG9wO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXG5cbiAgaWYgKHN3aXBlci50cmFuc2xhdGUgPT09IC0wKSBzd2lwZXIudHJhbnNsYXRlID0gMDtcbiAgc3dpcGVyLnVwZGF0ZUFjdGl2ZUluZGV4KCk7XG4gIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG4gIGxldCBuZXdQcm9ncmVzcztcbiAgY29uc3QgdHJhbnNsYXRlc0RpZmYgPSBzd2lwZXIubWF4VHJhbnNsYXRlKCkgLSBzd2lwZXIubWluVHJhbnNsYXRlKCk7XG5cbiAgaWYgKHRyYW5zbGF0ZXNEaWZmID09PSAwKSB7XG4gICAgbmV3UHJvZ3Jlc3MgPSAwO1xuICB9IGVsc2Uge1xuICAgIG5ld1Byb2dyZXNzID0gKHN3aXBlci50cmFuc2xhdGUgLSBzd2lwZXIubWluVHJhbnNsYXRlKCkpIC8gdHJhbnNsYXRlc0RpZmY7XG4gIH1cblxuICBpZiAobmV3UHJvZ3Jlc3MgIT09IHN3aXBlci5wcm9ncmVzcykge1xuICAgIHN3aXBlci51cGRhdGVQcm9ncmVzcyhydGxUcmFuc2xhdGUgPyAtc3dpcGVyLnRyYW5zbGF0ZSA6IHN3aXBlci50cmFuc2xhdGUpO1xuICB9XG5cbiAgc3dpcGVyLmVtaXQoJ3NldFRyYW5zbGF0ZScsIHN3aXBlci50cmFuc2xhdGUsIGZhbHNlKTtcbn0iLCJpbXBvcnQgeyBub3csIG5leHRUaWNrIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3V0aWxzLmpzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9uVG91Y2hFbmQoZXZlbnQpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3QgZGF0YSA9IHN3aXBlci50b3VjaEV2ZW50c0RhdGE7XG4gIGNvbnN0IHtcbiAgICBwYXJhbXMsXG4gICAgdG91Y2hlcyxcbiAgICBydGxUcmFuc2xhdGU6IHJ0bCxcbiAgICBzbGlkZXNHcmlkLFxuICAgIGVuYWJsZWRcbiAgfSA9IHN3aXBlcjtcbiAgaWYgKCFlbmFibGVkKSByZXR1cm47XG4gIGxldCBlID0gZXZlbnQ7XG4gIGlmIChlLm9yaWdpbmFsRXZlbnQpIGUgPSBlLm9yaWdpbmFsRXZlbnQ7XG5cbiAgaWYgKGRhdGEuYWxsb3dUb3VjaENhbGxiYWNrcykge1xuICAgIHN3aXBlci5lbWl0KCd0b3VjaEVuZCcsIGUpO1xuICB9XG5cbiAgZGF0YS5hbGxvd1RvdWNoQ2FsbGJhY2tzID0gZmFsc2U7XG5cbiAgaWYgKCFkYXRhLmlzVG91Y2hlZCkge1xuICAgIGlmIChkYXRhLmlzTW92ZWQgJiYgcGFyYW1zLmdyYWJDdXJzb3IpIHtcbiAgICAgIHN3aXBlci5zZXRHcmFiQ3Vyc29yKGZhbHNlKTtcbiAgICB9XG5cbiAgICBkYXRhLmlzTW92ZWQgPSBmYWxzZTtcbiAgICBkYXRhLnN0YXJ0TW92aW5nID0gZmFsc2U7XG4gICAgcmV0dXJuO1xuICB9IC8vIFJldHVybiBHcmFiIEN1cnNvclxuXG5cbiAgaWYgKHBhcmFtcy5ncmFiQ3Vyc29yICYmIGRhdGEuaXNNb3ZlZCAmJiBkYXRhLmlzVG91Y2hlZCAmJiAoc3dpcGVyLmFsbG93U2xpZGVOZXh0ID09PSB0cnVlIHx8IHN3aXBlci5hbGxvd1NsaWRlUHJldiA9PT0gdHJ1ZSkpIHtcbiAgICBzd2lwZXIuc2V0R3JhYkN1cnNvcihmYWxzZSk7XG4gIH0gLy8gVGltZSBkaWZmXG5cblxuICBjb25zdCB0b3VjaEVuZFRpbWUgPSBub3coKTtcbiAgY29uc3QgdGltZURpZmYgPSB0b3VjaEVuZFRpbWUgLSBkYXRhLnRvdWNoU3RhcnRUaW1lOyAvLyBUYXAsIGRvdWJsZVRhcCwgQ2xpY2tcblxuICBpZiAoc3dpcGVyLmFsbG93Q2xpY2spIHtcbiAgICBzd2lwZXIudXBkYXRlQ2xpY2tlZFNsaWRlKGUpO1xuICAgIHN3aXBlci5lbWl0KCd0YXAgY2xpY2snLCBlKTtcblxuICAgIGlmICh0aW1lRGlmZiA8IDMwMCAmJiB0b3VjaEVuZFRpbWUgLSBkYXRhLmxhc3RDbGlja1RpbWUgPCAzMDApIHtcbiAgICAgIHN3aXBlci5lbWl0KCdkb3VibGVUYXAgZG91YmxlQ2xpY2snLCBlKTtcbiAgICB9XG4gIH1cblxuICBkYXRhLmxhc3RDbGlja1RpbWUgPSBub3coKTtcbiAgbmV4dFRpY2soKCkgPT4ge1xuICAgIGlmICghc3dpcGVyLmRlc3Ryb3llZCkgc3dpcGVyLmFsbG93Q2xpY2sgPSB0cnVlO1xuICB9KTtcblxuICBpZiAoIWRhdGEuaXNUb3VjaGVkIHx8ICFkYXRhLmlzTW92ZWQgfHwgIXN3aXBlci5zd2lwZURpcmVjdGlvbiB8fCB0b3VjaGVzLmRpZmYgPT09IDAgfHwgZGF0YS5jdXJyZW50VHJhbnNsYXRlID09PSBkYXRhLnN0YXJ0VHJhbnNsYXRlKSB7XG4gICAgZGF0YS5pc1RvdWNoZWQgPSBmYWxzZTtcbiAgICBkYXRhLmlzTW92ZWQgPSBmYWxzZTtcbiAgICBkYXRhLnN0YXJ0TW92aW5nID0gZmFsc2U7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZGF0YS5pc1RvdWNoZWQgPSBmYWxzZTtcbiAgZGF0YS5pc01vdmVkID0gZmFsc2U7XG4gIGRhdGEuc3RhcnRNb3ZpbmcgPSBmYWxzZTtcbiAgbGV0IGN1cnJlbnRQb3M7XG5cbiAgaWYgKHBhcmFtcy5mb2xsb3dGaW5nZXIpIHtcbiAgICBjdXJyZW50UG9zID0gcnRsID8gc3dpcGVyLnRyYW5zbGF0ZSA6IC1zd2lwZXIudHJhbnNsYXRlO1xuICB9IGVsc2Uge1xuICAgIGN1cnJlbnRQb3MgPSAtZGF0YS5jdXJyZW50VHJhbnNsYXRlO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5jc3NNb2RlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHN3aXBlci5wYXJhbXMuZnJlZU1vZGUgJiYgcGFyYW1zLmZyZWVNb2RlLmVuYWJsZWQpIHtcbiAgICBzd2lwZXIuZnJlZU1vZGUub25Ub3VjaEVuZCh7XG4gICAgICBjdXJyZW50UG9zXG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9IC8vIEZpbmQgY3VycmVudCBzbGlkZVxuXG5cbiAgbGV0IHN0b3BJbmRleCA9IDA7XG4gIGxldCBncm91cFNpemUgPSBzd2lwZXIuc2xpZGVzU2l6ZXNHcmlkWzBdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2xpZGVzR3JpZC5sZW5ndGg7IGkgKz0gaSA8IHBhcmFtcy5zbGlkZXNQZXJHcm91cFNraXAgPyAxIDogcGFyYW1zLnNsaWRlc1Blckdyb3VwKSB7XG4gICAgY29uc3QgaW5jcmVtZW50ID0gaSA8IHBhcmFtcy5zbGlkZXNQZXJHcm91cFNraXAgLSAxID8gMSA6IHBhcmFtcy5zbGlkZXNQZXJHcm91cDtcblxuICAgIGlmICh0eXBlb2Ygc2xpZGVzR3JpZFtpICsgaW5jcmVtZW50XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGlmIChjdXJyZW50UG9zID49IHNsaWRlc0dyaWRbaV0gJiYgY3VycmVudFBvcyA8IHNsaWRlc0dyaWRbaSArIGluY3JlbWVudF0pIHtcbiAgICAgICAgc3RvcEluZGV4ID0gaTtcbiAgICAgICAgZ3JvdXBTaXplID0gc2xpZGVzR3JpZFtpICsgaW5jcmVtZW50XSAtIHNsaWRlc0dyaWRbaV07XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjdXJyZW50UG9zID49IHNsaWRlc0dyaWRbaV0pIHtcbiAgICAgIHN0b3BJbmRleCA9IGk7XG4gICAgICBncm91cFNpemUgPSBzbGlkZXNHcmlkW3NsaWRlc0dyaWQubGVuZ3RoIC0gMV0gLSBzbGlkZXNHcmlkW3NsaWRlc0dyaWQubGVuZ3RoIC0gMl07XG4gICAgfVxuICB9IC8vIEZpbmQgY3VycmVudCBzbGlkZSBzaXplXG5cblxuICBjb25zdCByYXRpbyA9IChjdXJyZW50UG9zIC0gc2xpZGVzR3JpZFtzdG9wSW5kZXhdKSAvIGdyb3VwU2l6ZTtcbiAgY29uc3QgaW5jcmVtZW50ID0gc3RvcEluZGV4IDwgcGFyYW1zLnNsaWRlc1Blckdyb3VwU2tpcCAtIDEgPyAxIDogcGFyYW1zLnNsaWRlc1Blckdyb3VwO1xuXG4gIGlmICh0aW1lRGlmZiA+IHBhcmFtcy5sb25nU3dpcGVzTXMpIHtcbiAgICAvLyBMb25nIHRvdWNoZXNcbiAgICBpZiAoIXBhcmFtcy5sb25nU3dpcGVzKSB7XG4gICAgICBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuYWN0aXZlSW5kZXgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChzd2lwZXIuc3dpcGVEaXJlY3Rpb24gPT09ICduZXh0Jykge1xuICAgICAgaWYgKHJhdGlvID49IHBhcmFtcy5sb25nU3dpcGVzUmF0aW8pIHN3aXBlci5zbGlkZVRvKHN0b3BJbmRleCArIGluY3JlbWVudCk7ZWxzZSBzd2lwZXIuc2xpZGVUbyhzdG9wSW5kZXgpO1xuICAgIH1cblxuICAgIGlmIChzd2lwZXIuc3dpcGVEaXJlY3Rpb24gPT09ICdwcmV2Jykge1xuICAgICAgaWYgKHJhdGlvID4gMSAtIHBhcmFtcy5sb25nU3dpcGVzUmF0aW8pIHN3aXBlci5zbGlkZVRvKHN0b3BJbmRleCArIGluY3JlbWVudCk7ZWxzZSBzd2lwZXIuc2xpZGVUbyhzdG9wSW5kZXgpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBTaG9ydCBzd2lwZXNcbiAgICBpZiAoIXBhcmFtcy5zaG9ydFN3aXBlcykge1xuICAgICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLmFjdGl2ZUluZGV4KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBpc05hdkJ1dHRvblRhcmdldCA9IHN3aXBlci5uYXZpZ2F0aW9uICYmIChlLnRhcmdldCA9PT0gc3dpcGVyLm5hdmlnYXRpb24ubmV4dEVsIHx8IGUudGFyZ2V0ID09PSBzd2lwZXIubmF2aWdhdGlvbi5wcmV2RWwpO1xuXG4gICAgaWYgKCFpc05hdkJ1dHRvblRhcmdldCkge1xuICAgICAgaWYgKHN3aXBlci5zd2lwZURpcmVjdGlvbiA9PT0gJ25leHQnKSB7XG4gICAgICAgIHN3aXBlci5zbGlkZVRvKHN0b3BJbmRleCArIGluY3JlbWVudCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzd2lwZXIuc3dpcGVEaXJlY3Rpb24gPT09ICdwcmV2Jykge1xuICAgICAgICBzd2lwZXIuc2xpZGVUbyhzdG9wSW5kZXgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQgPT09IHN3aXBlci5uYXZpZ2F0aW9uLm5leHRFbCkge1xuICAgICAgc3dpcGVyLnNsaWRlVG8oc3RvcEluZGV4ICsgaW5jcmVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpcGVyLnNsaWRlVG8oc3RvcEluZGV4KTtcbiAgICB9XG4gIH1cbn0iLCJpbXBvcnQgeyBnZXREb2N1bWVudCB9IGZyb20gJ3Nzci13aW5kb3cnO1xuaW1wb3J0ICQgZnJvbSAnLi4vLi4vc2hhcmVkL2RvbS5qcyc7XG5pbXBvcnQgeyBub3cgfSBmcm9tICcuLi8uLi9zaGFyZWQvdXRpbHMuanMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb25Ub3VjaE1vdmUoZXZlbnQpIHtcbiAgY29uc3QgZG9jdW1lbnQgPSBnZXREb2N1bWVudCgpO1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCBkYXRhID0gc3dpcGVyLnRvdWNoRXZlbnRzRGF0YTtcbiAgY29uc3Qge1xuICAgIHBhcmFtcyxcbiAgICB0b3VjaGVzLFxuICAgIHJ0bFRyYW5zbGF0ZTogcnRsLFxuICAgIGVuYWJsZWRcbiAgfSA9IHN3aXBlcjtcbiAgaWYgKCFlbmFibGVkKSByZXR1cm47XG4gIGxldCBlID0gZXZlbnQ7XG4gIGlmIChlLm9yaWdpbmFsRXZlbnQpIGUgPSBlLm9yaWdpbmFsRXZlbnQ7XG5cbiAgaWYgKCFkYXRhLmlzVG91Y2hlZCkge1xuICAgIGlmIChkYXRhLnN0YXJ0TW92aW5nICYmIGRhdGEuaXNTY3JvbGxpbmcpIHtcbiAgICAgIHN3aXBlci5lbWl0KCd0b3VjaE1vdmVPcHBvc2l0ZScsIGUpO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChkYXRhLmlzVG91Y2hFdmVudCAmJiBlLnR5cGUgIT09ICd0b3VjaG1vdmUnKSByZXR1cm47XG4gIGNvbnN0IHRhcmdldFRvdWNoID0gZS50eXBlID09PSAndG91Y2htb3ZlJyAmJiBlLnRhcmdldFRvdWNoZXMgJiYgKGUudGFyZ2V0VG91Y2hlc1swXSB8fCBlLmNoYW5nZWRUb3VjaGVzWzBdKTtcbiAgY29uc3QgcGFnZVggPSBlLnR5cGUgPT09ICd0b3VjaG1vdmUnID8gdGFyZ2V0VG91Y2gucGFnZVggOiBlLnBhZ2VYO1xuICBjb25zdCBwYWdlWSA9IGUudHlwZSA9PT0gJ3RvdWNobW92ZScgPyB0YXJnZXRUb3VjaC5wYWdlWSA6IGUucGFnZVk7XG5cbiAgaWYgKGUucHJldmVudGVkQnlOZXN0ZWRTd2lwZXIpIHtcbiAgICB0b3VjaGVzLnN0YXJ0WCA9IHBhZ2VYO1xuICAgIHRvdWNoZXMuc3RhcnRZID0gcGFnZVk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCFzd2lwZXIuYWxsb3dUb3VjaE1vdmUpIHtcbiAgICAvLyBpc01vdmVkID0gdHJ1ZTtcbiAgICBzd2lwZXIuYWxsb3dDbGljayA9IGZhbHNlO1xuXG4gICAgaWYgKGRhdGEuaXNUb3VjaGVkKSB7XG4gICAgICBPYmplY3QuYXNzaWduKHRvdWNoZXMsIHtcbiAgICAgICAgc3RhcnRYOiBwYWdlWCxcbiAgICAgICAgc3RhcnRZOiBwYWdlWSxcbiAgICAgICAgY3VycmVudFg6IHBhZ2VYLFxuICAgICAgICBjdXJyZW50WTogcGFnZVlcbiAgICAgIH0pO1xuICAgICAgZGF0YS50b3VjaFN0YXJ0VGltZSA9IG5vdygpO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChkYXRhLmlzVG91Y2hFdmVudCAmJiBwYXJhbXMudG91Y2hSZWxlYXNlT25FZGdlcyAmJiAhcGFyYW1zLmxvb3ApIHtcbiAgICBpZiAoc3dpcGVyLmlzVmVydGljYWwoKSkge1xuICAgICAgLy8gVmVydGljYWxcbiAgICAgIGlmIChwYWdlWSA8IHRvdWNoZXMuc3RhcnRZICYmIHN3aXBlci50cmFuc2xhdGUgPD0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpIHx8IHBhZ2VZID4gdG91Y2hlcy5zdGFydFkgJiYgc3dpcGVyLnRyYW5zbGF0ZSA+PSBzd2lwZXIubWluVHJhbnNsYXRlKCkpIHtcbiAgICAgICAgZGF0YS5pc1RvdWNoZWQgPSBmYWxzZTtcbiAgICAgICAgZGF0YS5pc01vdmVkID0gZmFsc2U7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHBhZ2VYIDwgdG91Y2hlcy5zdGFydFggJiYgc3dpcGVyLnRyYW5zbGF0ZSA8PSBzd2lwZXIubWF4VHJhbnNsYXRlKCkgfHwgcGFnZVggPiB0b3VjaGVzLnN0YXJ0WCAmJiBzd2lwZXIudHJhbnNsYXRlID49IHN3aXBlci5taW5UcmFuc2xhdGUoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGlmIChkYXRhLmlzVG91Y2hFdmVudCAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgaWYgKGUudGFyZ2V0ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmICQoZS50YXJnZXQpLmlzKGRhdGEuZm9jdXNhYmxlRWxlbWVudHMpKSB7XG4gICAgICBkYXRhLmlzTW92ZWQgPSB0cnVlO1xuICAgICAgc3dpcGVyLmFsbG93Q2xpY2sgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBpZiAoZGF0YS5hbGxvd1RvdWNoQ2FsbGJhY2tzKSB7XG4gICAgc3dpcGVyLmVtaXQoJ3RvdWNoTW92ZScsIGUpO1xuICB9XG5cbiAgaWYgKGUudGFyZ2V0VG91Y2hlcyAmJiBlLnRhcmdldFRvdWNoZXMubGVuZ3RoID4gMSkgcmV0dXJuO1xuICB0b3VjaGVzLmN1cnJlbnRYID0gcGFnZVg7XG4gIHRvdWNoZXMuY3VycmVudFkgPSBwYWdlWTtcbiAgY29uc3QgZGlmZlggPSB0b3VjaGVzLmN1cnJlbnRYIC0gdG91Y2hlcy5zdGFydFg7XG4gIGNvbnN0IGRpZmZZID0gdG91Y2hlcy5jdXJyZW50WSAtIHRvdWNoZXMuc3RhcnRZO1xuICBpZiAoc3dpcGVyLnBhcmFtcy50aHJlc2hvbGQgJiYgTWF0aC5zcXJ0KGRpZmZYICoqIDIgKyBkaWZmWSAqKiAyKSA8IHN3aXBlci5wYXJhbXMudGhyZXNob2xkKSByZXR1cm47XG5cbiAgaWYgKHR5cGVvZiBkYXRhLmlzU2Nyb2xsaW5nID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCB0b3VjaEFuZ2xlO1xuXG4gICAgaWYgKHN3aXBlci5pc0hvcml6b250YWwoKSAmJiB0b3VjaGVzLmN1cnJlbnRZID09PSB0b3VjaGVzLnN0YXJ0WSB8fCBzd2lwZXIuaXNWZXJ0aWNhbCgpICYmIHRvdWNoZXMuY3VycmVudFggPT09IHRvdWNoZXMuc3RhcnRYKSB7XG4gICAgICBkYXRhLmlzU2Nyb2xsaW5nID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgaWYgKGRpZmZYICogZGlmZlggKyBkaWZmWSAqIGRpZmZZID49IDI1KSB7XG4gICAgICAgIHRvdWNoQW5nbGUgPSBNYXRoLmF0YW4yKE1hdGguYWJzKGRpZmZZKSwgTWF0aC5hYnMoZGlmZlgpKSAqIDE4MCAvIE1hdGguUEk7XG4gICAgICAgIGRhdGEuaXNTY3JvbGxpbmcgPSBzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyB0b3VjaEFuZ2xlID4gcGFyYW1zLnRvdWNoQW5nbGUgOiA5MCAtIHRvdWNoQW5nbGUgPiBwYXJhbXMudG91Y2hBbmdsZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoZGF0YS5pc1Njcm9sbGluZykge1xuICAgIHN3aXBlci5lbWl0KCd0b3VjaE1vdmVPcHBvc2l0ZScsIGUpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBkYXRhLnN0YXJ0TW92aW5nID09PSAndW5kZWZpbmVkJykge1xuICAgIGlmICh0b3VjaGVzLmN1cnJlbnRYICE9PSB0b3VjaGVzLnN0YXJ0WCB8fCB0b3VjaGVzLmN1cnJlbnRZICE9PSB0b3VjaGVzLnN0YXJ0WSkge1xuICAgICAgZGF0YS5zdGFydE1vdmluZyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgaWYgKGRhdGEuaXNTY3JvbGxpbmcpIHtcbiAgICBkYXRhLmlzVG91Y2hlZCA9IGZhbHNlO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghZGF0YS5zdGFydE1vdmluZykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHN3aXBlci5hbGxvd0NsaWNrID0gZmFsc2U7XG5cbiAgaWYgKCFwYXJhbXMuY3NzTW9kZSAmJiBlLmNhbmNlbGFibGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBpZiAocGFyYW1zLnRvdWNoTW92ZVN0b3BQcm9wYWdhdGlvbiAmJiAhcGFyYW1zLm5lc3RlZCkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBpZiAoIWRhdGEuaXNNb3ZlZCkge1xuICAgIGlmIChwYXJhbXMubG9vcCAmJiAhcGFyYW1zLmNzc01vZGUpIHtcbiAgICAgIHN3aXBlci5sb29wRml4KCk7XG4gICAgfVxuXG4gICAgZGF0YS5zdGFydFRyYW5zbGF0ZSA9IHN3aXBlci5nZXRUcmFuc2xhdGUoKTtcbiAgICBzd2lwZXIuc2V0VHJhbnNpdGlvbigwKTtcblxuICAgIGlmIChzd2lwZXIuYW5pbWF0aW5nKSB7XG4gICAgICBzd2lwZXIuJHdyYXBwZXJFbC50cmlnZ2VyKCd3ZWJraXRUcmFuc2l0aW9uRW5kIHRyYW5zaXRpb25lbmQnKTtcbiAgICB9XG5cbiAgICBkYXRhLmFsbG93TW9tZW50dW1Cb3VuY2UgPSBmYWxzZTsgLy8gR3JhYiBDdXJzb3JcblxuICAgIGlmIChwYXJhbXMuZ3JhYkN1cnNvciAmJiAoc3dpcGVyLmFsbG93U2xpZGVOZXh0ID09PSB0cnVlIHx8IHN3aXBlci5hbGxvd1NsaWRlUHJldiA9PT0gdHJ1ZSkpIHtcbiAgICAgIHN3aXBlci5zZXRHcmFiQ3Vyc29yKHRydWUpO1xuICAgIH1cblxuICAgIHN3aXBlci5lbWl0KCdzbGlkZXJGaXJzdE1vdmUnLCBlKTtcbiAgfVxuXG4gIHN3aXBlci5lbWl0KCdzbGlkZXJNb3ZlJywgZSk7XG4gIGRhdGEuaXNNb3ZlZCA9IHRydWU7XG4gIGxldCBkaWZmID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gZGlmZlggOiBkaWZmWTtcbiAgdG91Y2hlcy5kaWZmID0gZGlmZjtcbiAgZGlmZiAqPSBwYXJhbXMudG91Y2hSYXRpbztcbiAgaWYgKHJ0bCkgZGlmZiA9IC1kaWZmO1xuICBzd2lwZXIuc3dpcGVEaXJlY3Rpb24gPSBkaWZmID4gMCA/ICdwcmV2JyA6ICduZXh0JztcbiAgZGF0YS5jdXJyZW50VHJhbnNsYXRlID0gZGlmZiArIGRhdGEuc3RhcnRUcmFuc2xhdGU7XG4gIGxldCBkaXNhYmxlUGFyZW50U3dpcGVyID0gdHJ1ZTtcbiAgbGV0IHJlc2lzdGFuY2VSYXRpbyA9IHBhcmFtcy5yZXNpc3RhbmNlUmF0aW87XG5cbiAgaWYgKHBhcmFtcy50b3VjaFJlbGVhc2VPbkVkZ2VzKSB7XG4gICAgcmVzaXN0YW5jZVJhdGlvID0gMDtcbiAgfVxuXG4gIGlmIChkaWZmID4gMCAmJiBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPiBzd2lwZXIubWluVHJhbnNsYXRlKCkpIHtcbiAgICBkaXNhYmxlUGFyZW50U3dpcGVyID0gZmFsc2U7XG4gICAgaWYgKHBhcmFtcy5yZXNpc3RhbmNlKSBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPSBzd2lwZXIubWluVHJhbnNsYXRlKCkgLSAxICsgKC1zd2lwZXIubWluVHJhbnNsYXRlKCkgKyBkYXRhLnN0YXJ0VHJhbnNsYXRlICsgZGlmZikgKiogcmVzaXN0YW5jZVJhdGlvO1xuICB9IGVsc2UgaWYgKGRpZmYgPCAwICYmIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA8IHN3aXBlci5tYXhUcmFuc2xhdGUoKSkge1xuICAgIGRpc2FibGVQYXJlbnRTd2lwZXIgPSBmYWxzZTtcbiAgICBpZiAocGFyYW1zLnJlc2lzdGFuY2UpIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA9IHN3aXBlci5tYXhUcmFuc2xhdGUoKSArIDEgLSAoc3dpcGVyLm1heFRyYW5zbGF0ZSgpIC0gZGF0YS5zdGFydFRyYW5zbGF0ZSAtIGRpZmYpICoqIHJlc2lzdGFuY2VSYXRpbztcbiAgfVxuXG4gIGlmIChkaXNhYmxlUGFyZW50U3dpcGVyKSB7XG4gICAgZS5wcmV2ZW50ZWRCeU5lc3RlZFN3aXBlciA9IHRydWU7XG4gIH0gLy8gRGlyZWN0aW9ucyBsb2Nrc1xuXG5cbiAgaWYgKCFzd2lwZXIuYWxsb3dTbGlkZU5leHQgJiYgc3dpcGVyLnN3aXBlRGlyZWN0aW9uID09PSAnbmV4dCcgJiYgZGF0YS5jdXJyZW50VHJhbnNsYXRlIDwgZGF0YS5zdGFydFRyYW5zbGF0ZSkge1xuICAgIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA9IGRhdGEuc3RhcnRUcmFuc2xhdGU7XG4gIH1cblxuICBpZiAoIXN3aXBlci5hbGxvd1NsaWRlUHJldiAmJiBzd2lwZXIuc3dpcGVEaXJlY3Rpb24gPT09ICdwcmV2JyAmJiBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPiBkYXRhLnN0YXJ0VHJhbnNsYXRlKSB7XG4gICAgZGF0YS5jdXJyZW50VHJhbnNsYXRlID0gZGF0YS5zdGFydFRyYW5zbGF0ZTtcbiAgfVxuXG4gIGlmICghc3dpcGVyLmFsbG93U2xpZGVQcmV2ICYmICFzd2lwZXIuYWxsb3dTbGlkZU5leHQpIHtcbiAgICBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPSBkYXRhLnN0YXJ0VHJhbnNsYXRlO1xuICB9IC8vIFRocmVzaG9sZFxuXG5cbiAgaWYgKHBhcmFtcy50aHJlc2hvbGQgPiAwKSB7XG4gICAgaWYgKE1hdGguYWJzKGRpZmYpID4gcGFyYW1zLnRocmVzaG9sZCB8fCBkYXRhLmFsbG93VGhyZXNob2xkTW92ZSkge1xuICAgICAgaWYgKCFkYXRhLmFsbG93VGhyZXNob2xkTW92ZSkge1xuICAgICAgICBkYXRhLmFsbG93VGhyZXNob2xkTW92ZSA9IHRydWU7XG4gICAgICAgIHRvdWNoZXMuc3RhcnRYID0gdG91Y2hlcy5jdXJyZW50WDtcbiAgICAgICAgdG91Y2hlcy5zdGFydFkgPSB0b3VjaGVzLmN1cnJlbnRZO1xuICAgICAgICBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPSBkYXRhLnN0YXJ0VHJhbnNsYXRlO1xuICAgICAgICB0b3VjaGVzLmRpZmYgPSBzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyB0b3VjaGVzLmN1cnJlbnRYIC0gdG91Y2hlcy5zdGFydFggOiB0b3VjaGVzLmN1cnJlbnRZIC0gdG91Y2hlcy5zdGFydFk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YS5jdXJyZW50VHJhbnNsYXRlID0gZGF0YS5zdGFydFRyYW5zbGF0ZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBpZiAoIXBhcmFtcy5mb2xsb3dGaW5nZXIgfHwgcGFyYW1zLmNzc01vZGUpIHJldHVybjsgLy8gVXBkYXRlIGFjdGl2ZSBpbmRleCBpbiBmcmVlIG1vZGVcblxuICBpZiAocGFyYW1zLmZyZWVNb2RlICYmIHBhcmFtcy5mcmVlTW9kZS5lbmFibGVkICYmIHN3aXBlci5mcmVlTW9kZSB8fCBwYXJhbXMud2F0Y2hTbGlkZXNQcm9ncmVzcykge1xuICAgIHN3aXBlci51cGRhdGVBY3RpdmVJbmRleCgpO1xuICAgIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG4gIH1cblxuICBpZiAoc3dpcGVyLnBhcmFtcy5mcmVlTW9kZSAmJiBwYXJhbXMuZnJlZU1vZGUuZW5hYmxlZCAmJiBzd2lwZXIuZnJlZU1vZGUpIHtcbiAgICBzd2lwZXIuZnJlZU1vZGUub25Ub3VjaE1vdmUoKTtcbiAgfSAvLyBVcGRhdGUgcHJvZ3Jlc3NcblxuXG4gIHN3aXBlci51cGRhdGVQcm9ncmVzcyhkYXRhLmN1cnJlbnRUcmFuc2xhdGUpOyAvLyBVcGRhdGUgdHJhbnNsYXRlXG5cbiAgc3dpcGVyLnNldFRyYW5zbGF0ZShkYXRhLmN1cnJlbnRUcmFuc2xhdGUpO1xufSIsImltcG9ydCB7IGdldFdpbmRvdywgZ2V0RG9jdW1lbnQgfSBmcm9tICdzc3Itd2luZG93JztcbmltcG9ydCAkIGZyb20gJy4uLy4uL3NoYXJlZC9kb20uanMnO1xuaW1wb3J0IHsgbm93IH0gZnJvbSAnLi4vLi4vc2hhcmVkL3V0aWxzLmpzJzsgLy8gTW9kaWZpZWQgZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy81NDUyMDU1NC9jdXN0b20tZWxlbWVudC1nZXRyb290bm9kZS1jbG9zZXN0LWZ1bmN0aW9uLWNyb3NzaW5nLW11bHRpcGxlLXBhcmVudC1zaGFkb3dkXG5cbmZ1bmN0aW9uIGNsb3Nlc3RFbGVtZW50KHNlbGVjdG9yLCBiYXNlID0gdGhpcykge1xuICBmdW5jdGlvbiBfX2Nsb3Nlc3RGcm9tKGVsKSB7XG4gICAgaWYgKCFlbCB8fCBlbCA9PT0gZ2V0RG9jdW1lbnQoKSB8fCBlbCA9PT0gZ2V0V2luZG93KCkpIHJldHVybiBudWxsO1xuICAgIGlmIChlbC5hc3NpZ25lZFNsb3QpIGVsID0gZWwuYXNzaWduZWRTbG90O1xuICAgIGNvbnN0IGZvdW5kID0gZWwuY2xvc2VzdChzZWxlY3Rvcik7XG4gICAgcmV0dXJuIGZvdW5kIHx8IF9fY2xvc2VzdEZyb20oZWwuZ2V0Um9vdE5vZGUoKS5ob3N0KTtcbiAgfVxuXG4gIHJldHVybiBfX2Nsb3Nlc3RGcm9tKGJhc2UpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvblRvdWNoU3RhcnQoZXZlbnQpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3QgZG9jdW1lbnQgPSBnZXREb2N1bWVudCgpO1xuICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgY29uc3QgZGF0YSA9IHN3aXBlci50b3VjaEV2ZW50c0RhdGE7XG4gIGNvbnN0IHtcbiAgICBwYXJhbXMsXG4gICAgdG91Y2hlcyxcbiAgICBlbmFibGVkXG4gIH0gPSBzd2lwZXI7XG4gIGlmICghZW5hYmxlZCkgcmV0dXJuO1xuXG4gIGlmIChzd2lwZXIuYW5pbWF0aW5nICYmIHBhcmFtcy5wcmV2ZW50SW50ZXJhY3Rpb25PblRyYW5zaXRpb24pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoIXN3aXBlci5hbmltYXRpbmcgJiYgcGFyYW1zLmNzc01vZGUgJiYgcGFyYW1zLmxvb3ApIHtcbiAgICBzd2lwZXIubG9vcEZpeCgpO1xuICB9XG5cbiAgbGV0IGUgPSBldmVudDtcbiAgaWYgKGUub3JpZ2luYWxFdmVudCkgZSA9IGUub3JpZ2luYWxFdmVudDtcbiAgbGV0ICR0YXJnZXRFbCA9ICQoZS50YXJnZXQpO1xuXG4gIGlmIChwYXJhbXMudG91Y2hFdmVudHNUYXJnZXQgPT09ICd3cmFwcGVyJykge1xuICAgIGlmICghJHRhcmdldEVsLmNsb3Nlc3Qoc3dpcGVyLndyYXBwZXJFbCkubGVuZ3RoKSByZXR1cm47XG4gIH1cblxuICBkYXRhLmlzVG91Y2hFdmVudCA9IGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnO1xuICBpZiAoIWRhdGEuaXNUb3VjaEV2ZW50ICYmICd3aGljaCcgaW4gZSAmJiBlLndoaWNoID09PSAzKSByZXR1cm47XG4gIGlmICghZGF0YS5pc1RvdWNoRXZlbnQgJiYgJ2J1dHRvbicgaW4gZSAmJiBlLmJ1dHRvbiA+IDApIHJldHVybjtcbiAgaWYgKGRhdGEuaXNUb3VjaGVkICYmIGRhdGEuaXNNb3ZlZCkgcmV0dXJuOyAvLyBjaGFuZ2UgdGFyZ2V0IGVsIGZvciBzaGFkb3cgcm9vdCBjb21wb25lbnRcblxuICBjb25zdCBzd2lwaW5nQ2xhc3NIYXNWYWx1ZSA9ICEhcGFyYW1zLm5vU3dpcGluZ0NsYXNzICYmIHBhcmFtcy5ub1N3aXBpbmdDbGFzcyAhPT0gJyc7XG5cbiAgaWYgKHN3aXBpbmdDbGFzc0hhc1ZhbHVlICYmIGUudGFyZ2V0ICYmIGUudGFyZ2V0LnNoYWRvd1Jvb3QgJiYgZXZlbnQucGF0aCAmJiBldmVudC5wYXRoWzBdKSB7XG4gICAgJHRhcmdldEVsID0gJChldmVudC5wYXRoWzBdKTtcbiAgfVxuXG4gIGNvbnN0IG5vU3dpcGluZ1NlbGVjdG9yID0gcGFyYW1zLm5vU3dpcGluZ1NlbGVjdG9yID8gcGFyYW1zLm5vU3dpcGluZ1NlbGVjdG9yIDogYC4ke3BhcmFtcy5ub1N3aXBpbmdDbGFzc31gO1xuICBjb25zdCBpc1RhcmdldFNoYWRvdyA9ICEhKGUudGFyZ2V0ICYmIGUudGFyZ2V0LnNoYWRvd1Jvb3QpOyAvLyB1c2UgY2xvc2VzdEVsZW1lbnQgZm9yIHNoYWRvdyByb290IGVsZW1lbnQgdG8gZ2V0IHRoZSBhY3R1YWwgY2xvc2VzdCBmb3IgbmVzdGVkIHNoYWRvdyByb290IGVsZW1lbnRcblxuICBpZiAocGFyYW1zLm5vU3dpcGluZyAmJiAoaXNUYXJnZXRTaGFkb3cgPyBjbG9zZXN0RWxlbWVudChub1N3aXBpbmdTZWxlY3RvciwgZS50YXJnZXQpIDogJHRhcmdldEVsLmNsb3Nlc3Qobm9Td2lwaW5nU2VsZWN0b3IpWzBdKSkge1xuICAgIHN3aXBlci5hbGxvd0NsaWNrID0gdHJ1ZTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAocGFyYW1zLnN3aXBlSGFuZGxlcikge1xuICAgIGlmICghJHRhcmdldEVsLmNsb3Nlc3QocGFyYW1zLnN3aXBlSGFuZGxlcilbMF0pIHJldHVybjtcbiAgfVxuXG4gIHRvdWNoZXMuY3VycmVudFggPSBlLnR5cGUgPT09ICd0b3VjaHN0YXJ0JyA/IGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWCA6IGUucGFnZVg7XG4gIHRvdWNoZXMuY3VycmVudFkgPSBlLnR5cGUgPT09ICd0b3VjaHN0YXJ0JyA/IGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWSA6IGUucGFnZVk7XG4gIGNvbnN0IHN0YXJ0WCA9IHRvdWNoZXMuY3VycmVudFg7XG4gIGNvbnN0IHN0YXJ0WSA9IHRvdWNoZXMuY3VycmVudFk7IC8vIERvIE5PVCBzdGFydCBpZiBpT1MgZWRnZSBzd2lwZSBpcyBkZXRlY3RlZC4gT3RoZXJ3aXNlIGlPUyBhcHAgY2Fubm90IHN3aXBlLXRvLWdvLWJhY2sgYW55bW9yZVxuXG4gIGNvbnN0IGVkZ2VTd2lwZURldGVjdGlvbiA9IHBhcmFtcy5lZGdlU3dpcGVEZXRlY3Rpb24gfHwgcGFyYW1zLmlPU0VkZ2VTd2lwZURldGVjdGlvbjtcbiAgY29uc3QgZWRnZVN3aXBlVGhyZXNob2xkID0gcGFyYW1zLmVkZ2VTd2lwZVRocmVzaG9sZCB8fCBwYXJhbXMuaU9TRWRnZVN3aXBlVGhyZXNob2xkO1xuXG4gIGlmIChlZGdlU3dpcGVEZXRlY3Rpb24gJiYgKHN0YXJ0WCA8PSBlZGdlU3dpcGVUaHJlc2hvbGQgfHwgc3RhcnRYID49IHdpbmRvdy5pbm5lcldpZHRoIC0gZWRnZVN3aXBlVGhyZXNob2xkKSkge1xuICAgIGlmIChlZGdlU3dpcGVEZXRlY3Rpb24gPT09ICdwcmV2ZW50Jykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5hc3NpZ24oZGF0YSwge1xuICAgIGlzVG91Y2hlZDogdHJ1ZSxcbiAgICBpc01vdmVkOiBmYWxzZSxcbiAgICBhbGxvd1RvdWNoQ2FsbGJhY2tzOiB0cnVlLFxuICAgIGlzU2Nyb2xsaW5nOiB1bmRlZmluZWQsXG4gICAgc3RhcnRNb3Zpbmc6IHVuZGVmaW5lZFxuICB9KTtcbiAgdG91Y2hlcy5zdGFydFggPSBzdGFydFg7XG4gIHRvdWNoZXMuc3RhcnRZID0gc3RhcnRZO1xuICBkYXRhLnRvdWNoU3RhcnRUaW1lID0gbm93KCk7XG4gIHN3aXBlci5hbGxvd0NsaWNrID0gdHJ1ZTtcbiAgc3dpcGVyLnVwZGF0ZVNpemUoKTtcbiAgc3dpcGVyLnN3aXBlRGlyZWN0aW9uID0gdW5kZWZpbmVkO1xuICBpZiAocGFyYW1zLnRocmVzaG9sZCA+IDApIGRhdGEuYWxsb3dUaHJlc2hvbGRNb3ZlID0gZmFsc2U7XG5cbiAgaWYgKGUudHlwZSAhPT0gJ3RvdWNoc3RhcnQnKSB7XG4gICAgbGV0IHByZXZlbnREZWZhdWx0ID0gdHJ1ZTtcbiAgICBpZiAoJHRhcmdldEVsLmlzKGRhdGEuZm9jdXNhYmxlRWxlbWVudHMpKSBwcmV2ZW50RGVmYXVsdCA9IGZhbHNlO1xuXG4gICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgJChkb2N1bWVudC5hY3RpdmVFbGVtZW50KS5pcyhkYXRhLmZvY3VzYWJsZUVsZW1lbnRzKSAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICE9PSAkdGFyZ2V0RWxbMF0pIHtcbiAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgIH1cblxuICAgIGNvbnN0IHNob3VsZFByZXZlbnREZWZhdWx0ID0gcHJldmVudERlZmF1bHQgJiYgc3dpcGVyLmFsbG93VG91Y2hNb3ZlICYmIHBhcmFtcy50b3VjaFN0YXJ0UHJldmVudERlZmF1bHQ7XG5cbiAgICBpZiAoKHBhcmFtcy50b3VjaFN0YXJ0Rm9yY2VQcmV2ZW50RGVmYXVsdCB8fCBzaG91bGRQcmV2ZW50RGVmYXVsdCkgJiYgISR0YXJnZXRFbFswXS5pc0NvbnRlbnRFZGl0YWJsZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIHN3aXBlci5lbWl0KCd0b3VjaFN0YXJ0JywgZSk7XG59IiwiaW1wb3J0IHNldEdyYWJDdXJzb3IgZnJvbSAnLi9zZXRHcmFiQ3Vyc29yLmpzJztcbmltcG9ydCB1bnNldEdyYWJDdXJzb3IgZnJvbSAnLi91bnNldEdyYWJDdXJzb3IuanMnO1xuZXhwb3J0IGRlZmF1bHQge1xuICBzZXRHcmFiQ3Vyc29yLFxuICB1bnNldEdyYWJDdXJzb3Jcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0R3JhYkN1cnNvcihtb3ZpbmcpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgaWYgKHN3aXBlci5zdXBwb3J0LnRvdWNoIHx8ICFzd2lwZXIucGFyYW1zLnNpbXVsYXRlVG91Y2ggfHwgc3dpcGVyLnBhcmFtcy53YXRjaE92ZXJmbG93ICYmIHN3aXBlci5pc0xvY2tlZCB8fCBzd2lwZXIucGFyYW1zLmNzc01vZGUpIHJldHVybjtcbiAgY29uc3QgZWwgPSBzd2lwZXIucGFyYW1zLnRvdWNoRXZlbnRzVGFyZ2V0ID09PSAnY29udGFpbmVyJyA/IHN3aXBlci5lbCA6IHN3aXBlci53cmFwcGVyRWw7XG4gIGVsLnN0eWxlLmN1cnNvciA9ICdtb3ZlJztcbiAgZWwuc3R5bGUuY3Vyc29yID0gbW92aW5nID8gJy13ZWJraXQtZ3JhYmJpbmcnIDogJy13ZWJraXQtZ3JhYic7XG4gIGVsLnN0eWxlLmN1cnNvciA9IG1vdmluZyA/ICctbW96LWdyYWJiaW4nIDogJy1tb3otZ3JhYic7XG4gIGVsLnN0eWxlLmN1cnNvciA9IG1vdmluZyA/ICdncmFiYmluZycgOiAnZ3JhYic7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdW5zZXRHcmFiQ3Vyc29yKCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuXG4gIGlmIChzd2lwZXIuc3VwcG9ydC50b3VjaCB8fCBzd2lwZXIucGFyYW1zLndhdGNoT3ZlcmZsb3cgJiYgc3dpcGVyLmlzTG9ja2VkIHx8IHN3aXBlci5wYXJhbXMuY3NzTW9kZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHN3aXBlcltzd2lwZXIucGFyYW1zLnRvdWNoRXZlbnRzVGFyZ2V0ID09PSAnY29udGFpbmVyJyA/ICdlbCcgOiAnd3JhcHBlckVsJ10uc3R5bGUuY3Vyc29yID0gJyc7XG59IiwiaW1wb3J0IGxvYWRJbWFnZSBmcm9tICcuL2xvYWRJbWFnZS5qcyc7XG5pbXBvcnQgcHJlbG9hZEltYWdlcyBmcm9tICcuL3ByZWxvYWRJbWFnZXMuanMnO1xuZXhwb3J0IGRlZmF1bHQge1xuICBsb2FkSW1hZ2UsXG4gIHByZWxvYWRJbWFnZXNcbn07IiwiaW1wb3J0IHsgZ2V0V2luZG93IH0gZnJvbSAnc3NyLXdpbmRvdyc7XG5pbXBvcnQgJCBmcm9tICcuLi8uLi9zaGFyZWQvZG9tLmpzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRJbWFnZShpbWFnZUVsLCBzcmMsIHNyY3NldCwgc2l6ZXMsIGNoZWNrRm9yQ29tcGxldGUsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IHdpbmRvdyA9IGdldFdpbmRvdygpO1xuICBsZXQgaW1hZ2U7XG5cbiAgZnVuY3Rpb24gb25SZWFkeSgpIHtcbiAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKCk7XG4gIH1cblxuICBjb25zdCBpc1BpY3R1cmUgPSAkKGltYWdlRWwpLnBhcmVudCgncGljdHVyZScpWzBdO1xuXG4gIGlmICghaXNQaWN0dXJlICYmICghaW1hZ2VFbC5jb21wbGV0ZSB8fCAhY2hlY2tGb3JDb21wbGV0ZSkpIHtcbiAgICBpZiAoc3JjKSB7XG4gICAgICBpbWFnZSA9IG5ldyB3aW5kb3cuSW1hZ2UoKTtcbiAgICAgIGltYWdlLm9ubG9hZCA9IG9uUmVhZHk7XG4gICAgICBpbWFnZS5vbmVycm9yID0gb25SZWFkeTtcblxuICAgICAgaWYgKHNpemVzKSB7XG4gICAgICAgIGltYWdlLnNpemVzID0gc2l6ZXM7XG4gICAgICB9XG5cbiAgICAgIGlmIChzcmNzZXQpIHtcbiAgICAgICAgaW1hZ2Uuc3Jjc2V0ID0gc3Jjc2V0O1xuICAgICAgfVxuXG4gICAgICBpZiAoc3JjKSB7XG4gICAgICAgIGltYWdlLnNyYyA9IHNyYztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgb25SZWFkeSgpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBpbWFnZSBhbHJlYWR5IGxvYWRlZC4uLlxuICAgIG9uUmVhZHkoKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZWxvYWRJbWFnZXMoKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIHN3aXBlci5pbWFnZXNUb0xvYWQgPSBzd2lwZXIuJGVsLmZpbmQoJ2ltZycpO1xuXG4gIGZ1bmN0aW9uIG9uUmVhZHkoKSB7XG4gICAgaWYgKHR5cGVvZiBzd2lwZXIgPT09ICd1bmRlZmluZWQnIHx8IHN3aXBlciA9PT0gbnVsbCB8fCAhc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQpIHJldHVybjtcbiAgICBpZiAoc3dpcGVyLmltYWdlc0xvYWRlZCAhPT0gdW5kZWZpbmVkKSBzd2lwZXIuaW1hZ2VzTG9hZGVkICs9IDE7XG5cbiAgICBpZiAoc3dpcGVyLmltYWdlc0xvYWRlZCA9PT0gc3dpcGVyLmltYWdlc1RvTG9hZC5sZW5ndGgpIHtcbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLnVwZGF0ZU9uSW1hZ2VzUmVhZHkpIHN3aXBlci51cGRhdGUoKTtcbiAgICAgIHN3aXBlci5lbWl0KCdpbWFnZXNSZWFkeScpO1xuICAgIH1cbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3dpcGVyLmltYWdlc1RvTG9hZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGltYWdlRWwgPSBzd2lwZXIuaW1hZ2VzVG9Mb2FkW2ldO1xuICAgIHN3aXBlci5sb2FkSW1hZ2UoaW1hZ2VFbCwgaW1hZ2VFbC5jdXJyZW50U3JjIHx8IGltYWdlRWwuZ2V0QXR0cmlidXRlKCdzcmMnKSwgaW1hZ2VFbC5zcmNzZXQgfHwgaW1hZ2VFbC5nZXRBdHRyaWJ1dGUoJ3NyY3NldCcpLCBpbWFnZUVsLnNpemVzIHx8IGltYWdlRWwuZ2V0QXR0cmlidXRlKCdzaXplcycpLCB0cnVlLCBvblJlYWR5KTtcbiAgfVxufSIsImltcG9ydCBsb29wQ3JlYXRlIGZyb20gJy4vbG9vcENyZWF0ZS5qcyc7XG5pbXBvcnQgbG9vcEZpeCBmcm9tICcuL2xvb3BGaXguanMnO1xuaW1wb3J0IGxvb3BEZXN0cm95IGZyb20gJy4vbG9vcERlc3Ryb3kuanMnO1xuZXhwb3J0IGRlZmF1bHQge1xuICBsb29wQ3JlYXRlLFxuICBsb29wRml4LFxuICBsb29wRGVzdHJveVxufTsiLCJpbXBvcnQgeyBnZXREb2N1bWVudCB9IGZyb20gJ3Nzci13aW5kb3cnO1xuaW1wb3J0ICQgZnJvbSAnLi4vLi4vc2hhcmVkL2RvbS5qcyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb29wQ3JlYXRlKCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCBkb2N1bWVudCA9IGdldERvY3VtZW50KCk7XG4gIGNvbnN0IHtcbiAgICBwYXJhbXMsXG4gICAgJHdyYXBwZXJFbFxuICB9ID0gc3dpcGVyOyAvLyBSZW1vdmUgZHVwbGljYXRlZCBzbGlkZXNcblxuICAkd3JhcHBlckVsLmNoaWxkcmVuKGAuJHtwYXJhbXMuc2xpZGVDbGFzc30uJHtwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzc31gKS5yZW1vdmUoKTtcbiAgbGV0IHNsaWRlcyA9ICR3cmFwcGVyRWwuY2hpbGRyZW4oYC4ke3BhcmFtcy5zbGlkZUNsYXNzfWApO1xuXG4gIGlmIChwYXJhbXMubG9vcEZpbGxHcm91cFdpdGhCbGFuaykge1xuICAgIGNvbnN0IGJsYW5rU2xpZGVzTnVtID0gcGFyYW1zLnNsaWRlc1Blckdyb3VwIC0gc2xpZGVzLmxlbmd0aCAlIHBhcmFtcy5zbGlkZXNQZXJHcm91cDtcblxuICAgIGlmIChibGFua1NsaWRlc051bSAhPT0gcGFyYW1zLnNsaWRlc1Blckdyb3VwKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJsYW5rU2xpZGVzTnVtOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3QgYmxhbmtOb2RlID0gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSkuYWRkQ2xhc3MoYCR7cGFyYW1zLnNsaWRlQ2xhc3N9ICR7cGFyYW1zLnNsaWRlQmxhbmtDbGFzc31gKTtcbiAgICAgICAgJHdyYXBwZXJFbC5hcHBlbmQoYmxhbmtOb2RlKTtcbiAgICAgIH1cblxuICAgICAgc2xpZGVzID0gJHdyYXBwZXJFbC5jaGlsZHJlbihgLiR7cGFyYW1zLnNsaWRlQ2xhc3N9YCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHBhcmFtcy5zbGlkZXNQZXJWaWV3ID09PSAnYXV0bycgJiYgIXBhcmFtcy5sb29wZWRTbGlkZXMpIHBhcmFtcy5sb29wZWRTbGlkZXMgPSBzbGlkZXMubGVuZ3RoO1xuICBzd2lwZXIubG9vcGVkU2xpZGVzID0gTWF0aC5jZWlsKHBhcnNlRmxvYXQocGFyYW1zLmxvb3BlZFNsaWRlcyB8fCBwYXJhbXMuc2xpZGVzUGVyVmlldywgMTApKTtcbiAgc3dpcGVyLmxvb3BlZFNsaWRlcyArPSBwYXJhbXMubG9vcEFkZGl0aW9uYWxTbGlkZXM7XG5cbiAgaWYgKHN3aXBlci5sb29wZWRTbGlkZXMgPiBzbGlkZXMubGVuZ3RoKSB7XG4gICAgc3dpcGVyLmxvb3BlZFNsaWRlcyA9IHNsaWRlcy5sZW5ndGg7XG4gIH1cblxuICBjb25zdCBwcmVwZW5kU2xpZGVzID0gW107XG4gIGNvbnN0IGFwcGVuZFNsaWRlcyA9IFtdO1xuICBzbGlkZXMuZWFjaCgoZWwsIGluZGV4KSA9PiB7XG4gICAgY29uc3Qgc2xpZGUgPSAkKGVsKTtcblxuICAgIGlmIChpbmRleCA8IHN3aXBlci5sb29wZWRTbGlkZXMpIHtcbiAgICAgIGFwcGVuZFNsaWRlcy5wdXNoKGVsKTtcbiAgICB9XG5cbiAgICBpZiAoaW5kZXggPCBzbGlkZXMubGVuZ3RoICYmIGluZGV4ID49IHNsaWRlcy5sZW5ndGggLSBzd2lwZXIubG9vcGVkU2xpZGVzKSB7XG4gICAgICBwcmVwZW5kU2xpZGVzLnB1c2goZWwpO1xuICAgIH1cblxuICAgIHNsaWRlLmF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JywgaW5kZXgpO1xuICB9KTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFwcGVuZFNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICR3cmFwcGVyRWwuYXBwZW5kKCQoYXBwZW5kU2xpZGVzW2ldLmNsb25lTm9kZSh0cnVlKSkuYWRkQ2xhc3MocGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MpKTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSBwcmVwZW5kU2xpZGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaSAtPSAxKSB7XG4gICAgJHdyYXBwZXJFbC5wcmVwZW5kKCQocHJlcGVuZFNsaWRlc1tpXS5jbG9uZU5vZGUodHJ1ZSkpLmFkZENsYXNzKHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb29wRGVzdHJveSgpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3Qge1xuICAgICR3cmFwcGVyRWwsXG4gICAgcGFyYW1zLFxuICAgIHNsaWRlc1xuICB9ID0gc3dpcGVyO1xuICAkd3JhcHBlckVsLmNoaWxkcmVuKGAuJHtwYXJhbXMuc2xpZGVDbGFzc30uJHtwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzc30sLiR7cGFyYW1zLnNsaWRlQ2xhc3N9LiR7cGFyYW1zLnNsaWRlQmxhbmtDbGFzc31gKS5yZW1vdmUoKTtcbiAgc2xpZGVzLnJlbW92ZUF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4Jyk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9vcEZpeCgpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgc3dpcGVyLmVtaXQoJ2JlZm9yZUxvb3BGaXgnKTtcbiAgY29uc3Qge1xuICAgIGFjdGl2ZUluZGV4LFxuICAgIHNsaWRlcyxcbiAgICBsb29wZWRTbGlkZXMsXG4gICAgYWxsb3dTbGlkZVByZXYsXG4gICAgYWxsb3dTbGlkZU5leHQsXG4gICAgc25hcEdyaWQsXG4gICAgcnRsVHJhbnNsYXRlOiBydGxcbiAgfSA9IHN3aXBlcjtcbiAgbGV0IG5ld0luZGV4O1xuICBzd2lwZXIuYWxsb3dTbGlkZVByZXYgPSB0cnVlO1xuICBzd2lwZXIuYWxsb3dTbGlkZU5leHQgPSB0cnVlO1xuICBjb25zdCBzbmFwVHJhbnNsYXRlID0gLXNuYXBHcmlkW2FjdGl2ZUluZGV4XTtcbiAgY29uc3QgZGlmZiA9IHNuYXBUcmFuc2xhdGUgLSBzd2lwZXIuZ2V0VHJhbnNsYXRlKCk7IC8vIEZpeCBGb3IgTmVnYXRpdmUgT3ZlcnNsaWRpbmdcblxuICBpZiAoYWN0aXZlSW5kZXggPCBsb29wZWRTbGlkZXMpIHtcbiAgICBuZXdJbmRleCA9IHNsaWRlcy5sZW5ndGggLSBsb29wZWRTbGlkZXMgKiAzICsgYWN0aXZlSW5kZXg7XG4gICAgbmV3SW5kZXggKz0gbG9vcGVkU2xpZGVzO1xuICAgIGNvbnN0IHNsaWRlQ2hhbmdlZCA9IHN3aXBlci5zbGlkZVRvKG5ld0luZGV4LCAwLCBmYWxzZSwgdHJ1ZSk7XG5cbiAgICBpZiAoc2xpZGVDaGFuZ2VkICYmIGRpZmYgIT09IDApIHtcbiAgICAgIHN3aXBlci5zZXRUcmFuc2xhdGUoKHJ0bCA/IC1zd2lwZXIudHJhbnNsYXRlIDogc3dpcGVyLnRyYW5zbGF0ZSkgLSBkaWZmKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoYWN0aXZlSW5kZXggPj0gc2xpZGVzLmxlbmd0aCAtIGxvb3BlZFNsaWRlcykge1xuICAgIC8vIEZpeCBGb3IgUG9zaXRpdmUgT3ZlcnNsaWRpbmdcbiAgICBuZXdJbmRleCA9IC1zbGlkZXMubGVuZ3RoICsgYWN0aXZlSW5kZXggKyBsb29wZWRTbGlkZXM7XG4gICAgbmV3SW5kZXggKz0gbG9vcGVkU2xpZGVzO1xuICAgIGNvbnN0IHNsaWRlQ2hhbmdlZCA9IHN3aXBlci5zbGlkZVRvKG5ld0luZGV4LCAwLCBmYWxzZSwgdHJ1ZSk7XG5cbiAgICBpZiAoc2xpZGVDaGFuZ2VkICYmIGRpZmYgIT09IDApIHtcbiAgICAgIHN3aXBlci5zZXRUcmFuc2xhdGUoKHJ0bCA/IC1zd2lwZXIudHJhbnNsYXRlIDogc3dpcGVyLnRyYW5zbGF0ZSkgLSBkaWZmKTtcbiAgICB9XG4gIH1cblxuICBzd2lwZXIuYWxsb3dTbGlkZVByZXYgPSBhbGxvd1NsaWRlUHJldjtcbiAgc3dpcGVyLmFsbG93U2xpZGVOZXh0ID0gYWxsb3dTbGlkZU5leHQ7XG4gIHN3aXBlci5lbWl0KCdsb29wRml4Jyk7XG59IiwiaW1wb3J0IHsgZXh0ZW5kIH0gZnJvbSAnLi4vc2hhcmVkL3V0aWxzLmpzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1vZHVsZUV4dGVuZFBhcmFtcyhwYXJhbXMsIGFsbE1vZHVsZXNQYXJhbXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGV4dGVuZFBhcmFtcyhvYmogPSB7fSkge1xuICAgIGNvbnN0IG1vZHVsZVBhcmFtTmFtZSA9IE9iamVjdC5rZXlzKG9iailbMF07XG4gICAgY29uc3QgbW9kdWxlUGFyYW1zID0gb2JqW21vZHVsZVBhcmFtTmFtZV07XG5cbiAgICBpZiAodHlwZW9mIG1vZHVsZVBhcmFtcyAhPT0gJ29iamVjdCcgfHwgbW9kdWxlUGFyYW1zID09PSBudWxsKSB7XG4gICAgICBleHRlbmQoYWxsTW9kdWxlc1BhcmFtcywgb2JqKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoWyduYXZpZ2F0aW9uJywgJ3BhZ2luYXRpb24nLCAnc2Nyb2xsYmFyJ10uaW5kZXhPZihtb2R1bGVQYXJhbU5hbWUpID49IDAgJiYgcGFyYW1zW21vZHVsZVBhcmFtTmFtZV0gPT09IHRydWUpIHtcbiAgICAgIHBhcmFtc1ttb2R1bGVQYXJhbU5hbWVdID0ge1xuICAgICAgICBhdXRvOiB0cnVlXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmICghKG1vZHVsZVBhcmFtTmFtZSBpbiBwYXJhbXMgJiYgJ2VuYWJsZWQnIGluIG1vZHVsZVBhcmFtcykpIHtcbiAgICAgIGV4dGVuZChhbGxNb2R1bGVzUGFyYW1zLCBvYmopO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXSA9PT0gdHJ1ZSkge1xuICAgICAgcGFyYW1zW21vZHVsZVBhcmFtTmFtZV0gPSB7XG4gICAgICAgIGVuYWJsZWQ6IHRydWVcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXSA9PT0gJ29iamVjdCcgJiYgISgnZW5hYmxlZCcgaW4gcGFyYW1zW21vZHVsZVBhcmFtTmFtZV0pKSB7XG4gICAgICBwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXS5lbmFibGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoIXBhcmFtc1ttb2R1bGVQYXJhbU5hbWVdKSBwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXSA9IHtcbiAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgfTtcbiAgICBleHRlbmQoYWxsTW9kdWxlc1BhcmFtcywgb2JqKTtcbiAgfTtcbn0iLCJpbXBvcnQgeyBnZXRXaW5kb3cgfSBmcm9tICdzc3Itd2luZG93JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9ic2VydmVyKHtcbiAgc3dpcGVyLFxuICBleHRlbmRQYXJhbXMsXG4gIG9uLFxuICBlbWl0XG59KSB7XG4gIGNvbnN0IG9ic2VydmVycyA9IFtdO1xuICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coKTtcblxuICBjb25zdCBhdHRhY2ggPSAodGFyZ2V0LCBvcHRpb25zID0ge30pID0+IHtcbiAgICBjb25zdCBPYnNlcnZlckZ1bmMgPSB3aW5kb3cuTXV0YXRpb25PYnNlcnZlciB8fCB3aW5kb3cuV2Via2l0TXV0YXRpb25PYnNlcnZlcjtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBPYnNlcnZlckZ1bmMobXV0YXRpb25zID0+IHtcbiAgICAgIC8vIFRoZSBvYnNlcnZlclVwZGF0ZSBldmVudCBzaG91bGQgb25seSBiZSB0cmlnZ2VyZWRcbiAgICAgIC8vIG9uY2UgZGVzcGl0ZSB0aGUgbnVtYmVyIG9mIG11dGF0aW9ucy4gIEFkZGl0aW9uYWxcbiAgICAgIC8vIHRyaWdnZXJzIGFyZSByZWR1bmRhbnQgYW5kIGFyZSB2ZXJ5IGNvc3RseVxuICAgICAgaWYgKG11dGF0aW9ucy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgZW1pdCgnb2JzZXJ2ZXJVcGRhdGUnLCBtdXRhdGlvbnNbMF0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG9ic2VydmVyVXBkYXRlID0gZnVuY3Rpb24gb2JzZXJ2ZXJVcGRhdGUoKSB7XG4gICAgICAgIGVtaXQoJ29ic2VydmVyVXBkYXRlJywgbXV0YXRpb25zWzBdKTtcbiAgICAgIH07XG5cbiAgICAgIGlmICh3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUob2JzZXJ2ZXJVcGRhdGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQob2JzZXJ2ZXJVcGRhdGUsIDApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIG9ic2VydmVyLm9ic2VydmUodGFyZ2V0LCB7XG4gICAgICBhdHRyaWJ1dGVzOiB0eXBlb2Ygb3B0aW9ucy5hdHRyaWJ1dGVzID09PSAndW5kZWZpbmVkJyA/IHRydWUgOiBvcHRpb25zLmF0dHJpYnV0ZXMsXG4gICAgICBjaGlsZExpc3Q6IHR5cGVvZiBvcHRpb25zLmNoaWxkTGlzdCA9PT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogb3B0aW9ucy5jaGlsZExpc3QsXG4gICAgICBjaGFyYWN0ZXJEYXRhOiB0eXBlb2Ygb3B0aW9ucy5jaGFyYWN0ZXJEYXRhID09PSAndW5kZWZpbmVkJyA/IHRydWUgOiBvcHRpb25zLmNoYXJhY3RlckRhdGFcbiAgICB9KTtcbiAgICBvYnNlcnZlcnMucHVzaChvYnNlcnZlcik7XG4gIH07XG5cbiAgY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgICBpZiAoIXN3aXBlci5wYXJhbXMub2JzZXJ2ZXIpIHJldHVybjtcblxuICAgIGlmIChzd2lwZXIucGFyYW1zLm9ic2VydmVQYXJlbnRzKSB7XG4gICAgICBjb25zdCBjb250YWluZXJQYXJlbnRzID0gc3dpcGVyLiRlbC5wYXJlbnRzKCk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udGFpbmVyUGFyZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBhdHRhY2goY29udGFpbmVyUGFyZW50c1tpXSk7XG4gICAgICB9XG4gICAgfSAvLyBPYnNlcnZlIGNvbnRhaW5lclxuXG5cbiAgICBhdHRhY2goc3dpcGVyLiRlbFswXSwge1xuICAgICAgY2hpbGRMaXN0OiBzd2lwZXIucGFyYW1zLm9ic2VydmVTbGlkZUNoaWxkcmVuXG4gICAgfSk7IC8vIE9ic2VydmUgd3JhcHBlclxuXG4gICAgYXR0YWNoKHN3aXBlci4kd3JhcHBlckVsWzBdLCB7XG4gICAgICBhdHRyaWJ1dGVzOiBmYWxzZVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGRlc3Ryb3kgPSAoKSA9PiB7XG4gICAgb2JzZXJ2ZXJzLmZvckVhY2gob2JzZXJ2ZXIgPT4ge1xuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIH0pO1xuICAgIG9ic2VydmVycy5zcGxpY2UoMCwgb2JzZXJ2ZXJzLmxlbmd0aCk7XG4gIH07XG5cbiAgZXh0ZW5kUGFyYW1zKHtcbiAgICBvYnNlcnZlcjogZmFsc2UsXG4gICAgb2JzZXJ2ZVBhcmVudHM6IGZhbHNlLFxuICAgIG9ic2VydmVTbGlkZUNoaWxkcmVuOiBmYWxzZVxuICB9KTtcbiAgb24oJ2luaXQnLCBpbml0KTtcbiAgb24oJ2Rlc3Ryb3knLCBkZXN0cm95KTtcbn0iLCJpbXBvcnQgeyBnZXRXaW5kb3cgfSBmcm9tICdzc3Itd2luZG93JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlc2l6ZSh7XG4gIHN3aXBlcixcbiAgb24sXG4gIGVtaXRcbn0pIHtcbiAgY29uc3Qgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gIGxldCBvYnNlcnZlciA9IG51bGw7XG5cbiAgY29uc3QgcmVzaXplSGFuZGxlciA9ICgpID0+IHtcbiAgICBpZiAoIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkIHx8ICFzd2lwZXIuaW5pdGlhbGl6ZWQpIHJldHVybjtcbiAgICBlbWl0KCdiZWZvcmVSZXNpemUnKTtcbiAgICBlbWl0KCdyZXNpemUnKTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVPYnNlcnZlciA9ICgpID0+IHtcbiAgICBpZiAoIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkIHx8ICFzd2lwZXIuaW5pdGlhbGl6ZWQpIHJldHVybjtcbiAgICBvYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcihlbnRyaWVzID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgd2lkdGgsXG4gICAgICAgIGhlaWdodFxuICAgICAgfSA9IHN3aXBlcjtcbiAgICAgIGxldCBuZXdXaWR0aCA9IHdpZHRoO1xuICAgICAgbGV0IG5ld0hlaWdodCA9IGhlaWdodDtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoe1xuICAgICAgICBjb250ZW50Qm94U2l6ZSxcbiAgICAgICAgY29udGVudFJlY3QsXG4gICAgICAgIHRhcmdldFxuICAgICAgfSkgPT4ge1xuICAgICAgICBpZiAodGFyZ2V0ICYmIHRhcmdldCAhPT0gc3dpcGVyLmVsKSByZXR1cm47XG4gICAgICAgIG5ld1dpZHRoID0gY29udGVudFJlY3QgPyBjb250ZW50UmVjdC53aWR0aCA6IChjb250ZW50Qm94U2l6ZVswXSB8fCBjb250ZW50Qm94U2l6ZSkuaW5saW5lU2l6ZTtcbiAgICAgICAgbmV3SGVpZ2h0ID0gY29udGVudFJlY3QgPyBjb250ZW50UmVjdC5oZWlnaHQgOiAoY29udGVudEJveFNpemVbMF0gfHwgY29udGVudEJveFNpemUpLmJsb2NrU2l6ZTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAobmV3V2lkdGggIT09IHdpZHRoIHx8IG5ld0hlaWdodCAhPT0gaGVpZ2h0KSB7XG4gICAgICAgIHJlc2l6ZUhhbmRsZXIoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKHN3aXBlci5lbCk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlT2JzZXJ2ZXIgPSAoKSA9PiB7XG4gICAgaWYgKG9ic2VydmVyICYmIG9ic2VydmVyLnVub2JzZXJ2ZSAmJiBzd2lwZXIuZWwpIHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShzd2lwZXIuZWwpO1xuICAgICAgb2JzZXJ2ZXIgPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBvcmllbnRhdGlvbkNoYW5nZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgaWYgKCFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZCB8fCAhc3dpcGVyLmluaXRpYWxpemVkKSByZXR1cm47XG4gICAgZW1pdCgnb3JpZW50YXRpb25jaGFuZ2UnKTtcbiAgfTtcblxuICBvbignaW5pdCcsICgpID0+IHtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5yZXNpemVPYnNlcnZlciAmJiB0eXBlb2Ygd2luZG93LlJlc2l6ZU9ic2VydmVyICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY3JlYXRlT2JzZXJ2ZXIoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplSGFuZGxlcik7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ29yaWVudGF0aW9uY2hhbmdlJywgb3JpZW50YXRpb25DaGFuZ2VIYW5kbGVyKTtcbiAgfSk7XG4gIG9uKCdkZXN0cm95JywgKCkgPT4ge1xuICAgIHJlbW92ZU9ic2VydmVyKCk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUhhbmRsZXIpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbmNoYW5nZScsIG9yaWVudGF0aW9uQ2hhbmdlSGFuZGxlcik7XG4gIH0pO1xufSIsImltcG9ydCBzbGlkZVRvIGZyb20gJy4vc2xpZGVUby5qcyc7XG5pbXBvcnQgc2xpZGVUb0xvb3AgZnJvbSAnLi9zbGlkZVRvTG9vcC5qcyc7XG5pbXBvcnQgc2xpZGVOZXh0IGZyb20gJy4vc2xpZGVOZXh0LmpzJztcbmltcG9ydCBzbGlkZVByZXYgZnJvbSAnLi9zbGlkZVByZXYuanMnO1xuaW1wb3J0IHNsaWRlUmVzZXQgZnJvbSAnLi9zbGlkZVJlc2V0LmpzJztcbmltcG9ydCBzbGlkZVRvQ2xvc2VzdCBmcm9tICcuL3NsaWRlVG9DbG9zZXN0LmpzJztcbmltcG9ydCBzbGlkZVRvQ2xpY2tlZFNsaWRlIGZyb20gJy4vc2xpZGVUb0NsaWNrZWRTbGlkZS5qcyc7XG5leHBvcnQgZGVmYXVsdCB7XG4gIHNsaWRlVG8sXG4gIHNsaWRlVG9Mb29wLFxuICBzbGlkZU5leHQsXG4gIHNsaWRlUHJldixcbiAgc2xpZGVSZXNldCxcbiAgc2xpZGVUb0Nsb3Nlc3QsXG4gIHNsaWRlVG9DbGlja2VkU2xpZGVcbn07IiwiLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBcIm9mZlwiICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzbGlkZU5leHQoc3BlZWQgPSB0aGlzLnBhcmFtcy5zcGVlZCwgcnVuQ2FsbGJhY2tzID0gdHJ1ZSwgaW50ZXJuYWwpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3Qge1xuICAgIGFuaW1hdGluZyxcbiAgICBlbmFibGVkLFxuICAgIHBhcmFtc1xuICB9ID0gc3dpcGVyO1xuICBpZiAoIWVuYWJsZWQpIHJldHVybiBzd2lwZXI7XG4gIGxldCBwZXJHcm91cCA9IHBhcmFtcy5zbGlkZXNQZXJHcm91cDtcblxuICBpZiAocGFyYW1zLnNsaWRlc1BlclZpZXcgPT09ICdhdXRvJyAmJiBwYXJhbXMuc2xpZGVzUGVyR3JvdXAgPT09IDEgJiYgcGFyYW1zLnNsaWRlc1Blckdyb3VwQXV0bykge1xuICAgIHBlckdyb3VwID0gTWF0aC5tYXgoc3dpcGVyLnNsaWRlc1BlclZpZXdEeW5hbWljKCdjdXJyZW50JywgdHJ1ZSksIDEpO1xuICB9XG5cbiAgY29uc3QgaW5jcmVtZW50ID0gc3dpcGVyLmFjdGl2ZUluZGV4IDwgcGFyYW1zLnNsaWRlc1Blckdyb3VwU2tpcCA/IDEgOiBwZXJHcm91cDtcblxuICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICBpZiAoYW5pbWF0aW5nICYmIHBhcmFtcy5sb29wUHJldmVudHNTbGlkZSkgcmV0dXJuIGZhbHNlO1xuICAgIHN3aXBlci5sb29wRml4KCk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXG4gICAgc3dpcGVyLl9jbGllbnRMZWZ0ID0gc3dpcGVyLiR3cmFwcGVyRWxbMF0uY2xpZW50TGVmdDtcbiAgfVxuXG4gIHJldHVybiBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuYWN0aXZlSW5kZXggKyBpbmNyZW1lbnQsIHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsKTtcbn0iLCIvKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFwib2ZmXCIgKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNsaWRlUHJldihzcGVlZCA9IHRoaXMucGFyYW1zLnNwZWVkLCBydW5DYWxsYmFja3MgPSB0cnVlLCBpbnRlcm5hbCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCB7XG4gICAgcGFyYW1zLFxuICAgIGFuaW1hdGluZyxcbiAgICBzbmFwR3JpZCxcbiAgICBzbGlkZXNHcmlkLFxuICAgIHJ0bFRyYW5zbGF0ZSxcbiAgICBlbmFibGVkXG4gIH0gPSBzd2lwZXI7XG4gIGlmICghZW5hYmxlZCkgcmV0dXJuIHN3aXBlcjtcblxuICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICBpZiAoYW5pbWF0aW5nICYmIHBhcmFtcy5sb29wUHJldmVudHNTbGlkZSkgcmV0dXJuIGZhbHNlO1xuICAgIHN3aXBlci5sb29wRml4KCk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXG4gICAgc3dpcGVyLl9jbGllbnRMZWZ0ID0gc3dpcGVyLiR3cmFwcGVyRWxbMF0uY2xpZW50TGVmdDtcbiAgfVxuXG4gIGNvbnN0IHRyYW5zbGF0ZSA9IHJ0bFRyYW5zbGF0ZSA/IHN3aXBlci50cmFuc2xhdGUgOiAtc3dpcGVyLnRyYW5zbGF0ZTtcblxuICBmdW5jdGlvbiBub3JtYWxpemUodmFsKSB7XG4gICAgaWYgKHZhbCA8IDApIHJldHVybiAtTWF0aC5mbG9vcihNYXRoLmFicyh2YWwpKTtcbiAgICByZXR1cm4gTWF0aC5mbG9vcih2YWwpO1xuICB9XG5cbiAgY29uc3Qgbm9ybWFsaXplZFRyYW5zbGF0ZSA9IG5vcm1hbGl6ZSh0cmFuc2xhdGUpO1xuICBjb25zdCBub3JtYWxpemVkU25hcEdyaWQgPSBzbmFwR3JpZC5tYXAodmFsID0+IG5vcm1hbGl6ZSh2YWwpKTtcbiAgbGV0IHByZXZTbmFwID0gc25hcEdyaWRbbm9ybWFsaXplZFNuYXBHcmlkLmluZGV4T2Yobm9ybWFsaXplZFRyYW5zbGF0ZSkgLSAxXTtcblxuICBpZiAodHlwZW9mIHByZXZTbmFwID09PSAndW5kZWZpbmVkJyAmJiBwYXJhbXMuY3NzTW9kZSkge1xuICAgIGxldCBwcmV2U25hcEluZGV4O1xuICAgIHNuYXBHcmlkLmZvckVhY2goKHNuYXAsIHNuYXBJbmRleCkgPT4ge1xuICAgICAgaWYgKG5vcm1hbGl6ZWRUcmFuc2xhdGUgPj0gc25hcCkge1xuICAgICAgICAvLyBwcmV2U25hcCA9IHNuYXA7XG4gICAgICAgIHByZXZTbmFwSW5kZXggPSBzbmFwSW5kZXg7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodHlwZW9mIHByZXZTbmFwSW5kZXggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBwcmV2U25hcCA9IHNuYXBHcmlkW3ByZXZTbmFwSW5kZXggPiAwID8gcHJldlNuYXBJbmRleCAtIDEgOiBwcmV2U25hcEluZGV4XTtcbiAgICB9XG4gIH1cblxuICBsZXQgcHJldkluZGV4ID0gMDtcblxuICBpZiAodHlwZW9mIHByZXZTbmFwICE9PSAndW5kZWZpbmVkJykge1xuICAgIHByZXZJbmRleCA9IHNsaWRlc0dyaWQuaW5kZXhPZihwcmV2U25hcCk7XG4gICAgaWYgKHByZXZJbmRleCA8IDApIHByZXZJbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleCAtIDE7XG5cbiAgICBpZiAocGFyYW1zLnNsaWRlc1BlclZpZXcgPT09ICdhdXRvJyAmJiBwYXJhbXMuc2xpZGVzUGVyR3JvdXAgPT09IDEgJiYgcGFyYW1zLnNsaWRlc1Blckdyb3VwQXV0bykge1xuICAgICAgcHJldkluZGV4ID0gcHJldkluZGV4IC0gc3dpcGVyLnNsaWRlc1BlclZpZXdEeW5hbWljKCdwcmV2aW91cycsIHRydWUpICsgMTtcbiAgICAgIHByZXZJbmRleCA9IE1hdGgubWF4KHByZXZJbmRleCwgMCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN3aXBlci5zbGlkZVRvKHByZXZJbmRleCwgc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpO1xufSIsIi8qIGVzbGludCBuby11bnVzZWQtdmFyczogXCJvZmZcIiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2xpZGVSZXNldChzcGVlZCA9IHRoaXMucGFyYW1zLnNwZWVkLCBydW5DYWxsYmFja3MgPSB0cnVlLCBpbnRlcm5hbCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICByZXR1cm4gc3dpcGVyLnNsaWRlVG8oc3dpcGVyLmFjdGl2ZUluZGV4LCBzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCk7XG59IiwiaW1wb3J0IHsgYW5pbWF0ZUNTU01vZGVTY3JvbGwgfSBmcm9tICcuLi8uLi9zaGFyZWQvdXRpbHMuanMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2xpZGVUbyhpbmRleCA9IDAsIHNwZWVkID0gdGhpcy5wYXJhbXMuc3BlZWQsIHJ1bkNhbGxiYWNrcyA9IHRydWUsIGludGVybmFsLCBpbml0aWFsKSB7XG4gIGlmICh0eXBlb2YgaW5kZXggIT09ICdudW1iZXInICYmIHR5cGVvZiBpbmRleCAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnaW5kZXgnIGFyZ3VtZW50IGNhbm5vdCBoYXZlIHR5cGUgb3RoZXIgdGhhbiAnbnVtYmVyJyBvciAnc3RyaW5nJy4gWyR7dHlwZW9mIGluZGV4fV0gZ2l2ZW4uYCk7XG4gIH1cblxuICBpZiAodHlwZW9mIGluZGV4ID09PSAnc3RyaW5nJykge1xuICAgIC8qKlxuICAgICAqIFRoZSBgaW5kZXhgIGFyZ3VtZW50IGNvbnZlcnRlZCBmcm9tIGBzdHJpbmdgIHRvIGBudW1iZXJgLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgY29uc3QgaW5kZXhBc051bWJlciA9IHBhcnNlSW50KGluZGV4LCAxMCk7XG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBgaW5kZXhgIGFyZ3VtZW50IGlzIGEgdmFsaWQgYG51bWJlcmBcbiAgICAgKiBhZnRlciBiZWluZyBjb252ZXJ0ZWQgZnJvbSB0aGUgYHN0cmluZ2AgdHlwZS5cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cblxuICAgIGNvbnN0IGlzVmFsaWROdW1iZXIgPSBpc0Zpbml0ZShpbmRleEFzTnVtYmVyKTtcblxuICAgIGlmICghaXNWYWxpZE51bWJlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgcGFzc2VkLWluICdpbmRleCcgKHN0cmluZykgY291bGRuJ3QgYmUgY29udmVydGVkIHRvICdudW1iZXInLiBbJHtpbmRleH1dIGdpdmVuLmApO1xuICAgIH0gLy8gS25vd2luZyB0aGF0IHRoZSBjb252ZXJ0ZWQgYGluZGV4YCBpcyBhIHZhbGlkIG51bWJlcixcbiAgICAvLyB3ZSBjYW4gdXBkYXRlIHRoZSBvcmlnaW5hbCBhcmd1bWVudCdzIHZhbHVlLlxuXG5cbiAgICBpbmRleCA9IGluZGV4QXNOdW1iZXI7XG4gIH1cblxuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBsZXQgc2xpZGVJbmRleCA9IGluZGV4O1xuICBpZiAoc2xpZGVJbmRleCA8IDApIHNsaWRlSW5kZXggPSAwO1xuICBjb25zdCB7XG4gICAgcGFyYW1zLFxuICAgIHNuYXBHcmlkLFxuICAgIHNsaWRlc0dyaWQsXG4gICAgcHJldmlvdXNJbmRleCxcbiAgICBhY3RpdmVJbmRleCxcbiAgICBydGxUcmFuc2xhdGU6IHJ0bCxcbiAgICB3cmFwcGVyRWwsXG4gICAgZW5hYmxlZFxuICB9ID0gc3dpcGVyO1xuXG4gIGlmIChzd2lwZXIuYW5pbWF0aW5nICYmIHBhcmFtcy5wcmV2ZW50SW50ZXJhY3Rpb25PblRyYW5zaXRpb24gfHwgIWVuYWJsZWQgJiYgIWludGVybmFsICYmICFpbml0aWFsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3Qgc2tpcCA9IE1hdGgubWluKHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyR3JvdXBTa2lwLCBzbGlkZUluZGV4KTtcbiAgbGV0IHNuYXBJbmRleCA9IHNraXAgKyBNYXRoLmZsb29yKChzbGlkZUluZGV4IC0gc2tpcCkgLyBzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwKTtcbiAgaWYgKHNuYXBJbmRleCA+PSBzbmFwR3JpZC5sZW5ndGgpIHNuYXBJbmRleCA9IHNuYXBHcmlkLmxlbmd0aCAtIDE7XG5cbiAgaWYgKChhY3RpdmVJbmRleCB8fCBwYXJhbXMuaW5pdGlhbFNsaWRlIHx8IDApID09PSAocHJldmlvdXNJbmRleCB8fCAwKSAmJiBydW5DYWxsYmFja3MpIHtcbiAgICBzd2lwZXIuZW1pdCgnYmVmb3JlU2xpZGVDaGFuZ2VTdGFydCcpO1xuICB9XG5cbiAgY29uc3QgdHJhbnNsYXRlID0gLXNuYXBHcmlkW3NuYXBJbmRleF07IC8vIFVwZGF0ZSBwcm9ncmVzc1xuXG4gIHN3aXBlci51cGRhdGVQcm9ncmVzcyh0cmFuc2xhdGUpOyAvLyBOb3JtYWxpemUgc2xpZGVJbmRleFxuXG4gIGlmIChwYXJhbXMubm9ybWFsaXplU2xpZGVJbmRleCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2xpZGVzR3JpZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3Qgbm9ybWFsaXplZFRyYW5zbGF0ZSA9IC1NYXRoLmZsb29yKHRyYW5zbGF0ZSAqIDEwMCk7XG4gICAgICBjb25zdCBub3JtYWxpemVkR3JpZCA9IE1hdGguZmxvb3Ioc2xpZGVzR3JpZFtpXSAqIDEwMCk7XG4gICAgICBjb25zdCBub3JtYWxpemVkR3JpZE5leHQgPSBNYXRoLmZsb29yKHNsaWRlc0dyaWRbaSArIDFdICogMTAwKTtcblxuICAgICAgaWYgKHR5cGVvZiBzbGlkZXNHcmlkW2kgKyAxXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgaWYgKG5vcm1hbGl6ZWRUcmFuc2xhdGUgPj0gbm9ybWFsaXplZEdyaWQgJiYgbm9ybWFsaXplZFRyYW5zbGF0ZSA8IG5vcm1hbGl6ZWRHcmlkTmV4dCAtIChub3JtYWxpemVkR3JpZE5leHQgLSBub3JtYWxpemVkR3JpZCkgLyAyKSB7XG4gICAgICAgICAgc2xpZGVJbmRleCA9IGk7XG4gICAgICAgIH0gZWxzZSBpZiAobm9ybWFsaXplZFRyYW5zbGF0ZSA+PSBub3JtYWxpemVkR3JpZCAmJiBub3JtYWxpemVkVHJhbnNsYXRlIDwgbm9ybWFsaXplZEdyaWROZXh0KSB7XG4gICAgICAgICAgc2xpZGVJbmRleCA9IGkgKyAxO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG5vcm1hbGl6ZWRUcmFuc2xhdGUgPj0gbm9ybWFsaXplZEdyaWQpIHtcbiAgICAgICAgc2xpZGVJbmRleCA9IGk7XG4gICAgICB9XG4gICAgfVxuICB9IC8vIERpcmVjdGlvbnMgbG9ja3NcblxuXG4gIGlmIChzd2lwZXIuaW5pdGlhbGl6ZWQgJiYgc2xpZGVJbmRleCAhPT0gYWN0aXZlSW5kZXgpIHtcbiAgICBpZiAoIXN3aXBlci5hbGxvd1NsaWRlTmV4dCAmJiB0cmFuc2xhdGUgPCBzd2lwZXIudHJhbnNsYXRlICYmIHRyYW5zbGF0ZSA8IHN3aXBlci5taW5UcmFuc2xhdGUoKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghc3dpcGVyLmFsbG93U2xpZGVQcmV2ICYmIHRyYW5zbGF0ZSA+IHN3aXBlci50cmFuc2xhdGUgJiYgdHJhbnNsYXRlID4gc3dpcGVyLm1heFRyYW5zbGF0ZSgpKSB7XG4gICAgICBpZiAoKGFjdGl2ZUluZGV4IHx8IDApICE9PSBzbGlkZUluZGV4KSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgbGV0IGRpcmVjdGlvbjtcbiAgaWYgKHNsaWRlSW5kZXggPiBhY3RpdmVJbmRleCkgZGlyZWN0aW9uID0gJ25leHQnO2Vsc2UgaWYgKHNsaWRlSW5kZXggPCBhY3RpdmVJbmRleCkgZGlyZWN0aW9uID0gJ3ByZXYnO2Vsc2UgZGlyZWN0aW9uID0gJ3Jlc2V0JzsgLy8gVXBkYXRlIEluZGV4XG5cbiAgaWYgKHJ0bCAmJiAtdHJhbnNsYXRlID09PSBzd2lwZXIudHJhbnNsYXRlIHx8ICFydGwgJiYgdHJhbnNsYXRlID09PSBzd2lwZXIudHJhbnNsYXRlKSB7XG4gICAgc3dpcGVyLnVwZGF0ZUFjdGl2ZUluZGV4KHNsaWRlSW5kZXgpOyAvLyBVcGRhdGUgSGVpZ2h0XG5cbiAgICBpZiAocGFyYW1zLmF1dG9IZWlnaHQpIHtcbiAgICAgIHN3aXBlci51cGRhdGVBdXRvSGVpZ2h0KCk7XG4gICAgfVxuXG4gICAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcblxuICAgIGlmIChwYXJhbXMuZWZmZWN0ICE9PSAnc2xpZGUnKSB7XG4gICAgICBzd2lwZXIuc2V0VHJhbnNsYXRlKHRyYW5zbGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKGRpcmVjdGlvbiAhPT0gJ3Jlc2V0Jykge1xuICAgICAgc3dpcGVyLnRyYW5zaXRpb25TdGFydChydW5DYWxsYmFja3MsIGRpcmVjdGlvbik7XG4gICAgICBzd2lwZXIudHJhbnNpdGlvbkVuZChydW5DYWxsYmFja3MsIGRpcmVjdGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5jc3NNb2RlKSB7XG4gICAgY29uc3QgaXNIID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpO1xuICAgIGNvbnN0IHQgPSBydGwgPyB0cmFuc2xhdGUgOiAtdHJhbnNsYXRlO1xuXG4gICAgaWYgKHNwZWVkID09PSAwKSB7XG4gICAgICBjb25zdCBpc1ZpcnR1YWwgPSBzd2lwZXIudmlydHVhbCAmJiBzd2lwZXIucGFyYW1zLnZpcnR1YWwuZW5hYmxlZDtcblxuICAgICAgaWYgKGlzVmlydHVhbCkge1xuICAgICAgICBzd2lwZXIud3JhcHBlckVsLnN0eWxlLnNjcm9sbFNuYXBUeXBlID0gJ25vbmUnO1xuICAgICAgfVxuXG4gICAgICB3cmFwcGVyRWxbaXNIID8gJ3Njcm9sbExlZnQnIDogJ3Njcm9sbFRvcCddID0gdDtcblxuICAgICAgaWYgKGlzVmlydHVhbCkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgIHN3aXBlci53cmFwcGVyRWwuc3R5bGUuc2Nyb2xsU25hcFR5cGUgPSAnJztcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghc3dpcGVyLnN1cHBvcnQuc21vb3RoU2Nyb2xsKSB7XG4gICAgICAgIGFuaW1hdGVDU1NNb2RlU2Nyb2xsKHtcbiAgICAgICAgICBzd2lwZXIsXG4gICAgICAgICAgdGFyZ2V0UG9zaXRpb246IHQsXG4gICAgICAgICAgc2lkZTogaXNIID8gJ2xlZnQnIDogJ3RvcCdcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICB3cmFwcGVyRWwuc2Nyb2xsVG8oe1xuICAgICAgICBbaXNIID8gJ2xlZnQnIDogJ3RvcCddOiB0LFxuICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHNwZWVkID09PSAwKSB7XG4gICAgc3dpcGVyLnNldFRyYW5zaXRpb24oMCk7XG4gICAgc3dpcGVyLnNldFRyYW5zbGF0ZSh0cmFuc2xhdGUpO1xuICAgIHN3aXBlci51cGRhdGVBY3RpdmVJbmRleChzbGlkZUluZGV4KTtcbiAgICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuICAgIHN3aXBlci5lbWl0KCdiZWZvcmVUcmFuc2l0aW9uU3RhcnQnLCBzcGVlZCwgaW50ZXJuYWwpO1xuICAgIHN3aXBlci50cmFuc2l0aW9uU3RhcnQocnVuQ2FsbGJhY2tzLCBkaXJlY3Rpb24pO1xuICAgIHN3aXBlci50cmFuc2l0aW9uRW5kKHJ1bkNhbGxiYWNrcywgZGlyZWN0aW9uKTtcbiAgfSBlbHNlIHtcbiAgICBzd2lwZXIuc2V0VHJhbnNpdGlvbihzcGVlZCk7XG4gICAgc3dpcGVyLnNldFRyYW5zbGF0ZSh0cmFuc2xhdGUpO1xuICAgIHN3aXBlci51cGRhdGVBY3RpdmVJbmRleChzbGlkZUluZGV4KTtcbiAgICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuICAgIHN3aXBlci5lbWl0KCdiZWZvcmVUcmFuc2l0aW9uU3RhcnQnLCBzcGVlZCwgaW50ZXJuYWwpO1xuICAgIHN3aXBlci50cmFuc2l0aW9uU3RhcnQocnVuQ2FsbGJhY2tzLCBkaXJlY3Rpb24pO1xuXG4gICAgaWYgKCFzd2lwZXIuYW5pbWF0aW5nKSB7XG4gICAgICBzd2lwZXIuYW5pbWF0aW5nID0gdHJ1ZTtcblxuICAgICAgaWYgKCFzd2lwZXIub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpIHtcbiAgICAgICAgc3dpcGVyLm9uU2xpZGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kID0gZnVuY3Rpb24gdHJhbnNpdGlvbkVuZChlKSB7XG4gICAgICAgICAgaWYgKCFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZCkgcmV0dXJuO1xuICAgICAgICAgIGlmIChlLnRhcmdldCAhPT0gdGhpcykgcmV0dXJuO1xuICAgICAgICAgIHN3aXBlci4kd3JhcHBlckVsWzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBzd2lwZXIub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpO1xuICAgICAgICAgIHN3aXBlci4kd3JhcHBlckVsWzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCBzd2lwZXIub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpO1xuICAgICAgICAgIHN3aXBlci5vblNsaWRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCA9IG51bGw7XG4gICAgICAgICAgZGVsZXRlIHN3aXBlci5vblNsaWRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZDtcbiAgICAgICAgICBzd2lwZXIudHJhbnNpdGlvbkVuZChydW5DYWxsYmFja3MsIGRpcmVjdGlvbik7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHN3aXBlci4kd3JhcHBlckVsWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBzd2lwZXIub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpO1xuICAgICAgc3dpcGVyLiR3cmFwcGVyRWxbMF0uYWRkRXZlbnRMaXN0ZW5lcignd2Via2l0VHJhbnNpdGlvbkVuZCcsIHN3aXBlci5vblNsaWRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59IiwiaW1wb3J0ICQgZnJvbSAnLi4vLi4vc2hhcmVkL2RvbS5qcyc7XG5pbXBvcnQgeyBuZXh0VGljayB9IGZyb20gJy4uLy4uL3NoYXJlZC91dGlscy5qcyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzbGlkZVRvQ2xpY2tlZFNsaWRlKCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCB7XG4gICAgcGFyYW1zLFxuICAgICR3cmFwcGVyRWxcbiAgfSA9IHN3aXBlcjtcbiAgY29uc3Qgc2xpZGVzUGVyVmlldyA9IHBhcmFtcy5zbGlkZXNQZXJWaWV3ID09PSAnYXV0bycgPyBzd2lwZXIuc2xpZGVzUGVyVmlld0R5bmFtaWMoKSA6IHBhcmFtcy5zbGlkZXNQZXJWaWV3O1xuICBsZXQgc2xpZGVUb0luZGV4ID0gc3dpcGVyLmNsaWNrZWRJbmRleDtcbiAgbGV0IHJlYWxJbmRleDtcblxuICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICBpZiAoc3dpcGVyLmFuaW1hdGluZykgcmV0dXJuO1xuICAgIHJlYWxJbmRleCA9IHBhcnNlSW50KCQoc3dpcGVyLmNsaWNrZWRTbGlkZSkuYXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKSwgMTApO1xuXG4gICAgaWYgKHBhcmFtcy5jZW50ZXJlZFNsaWRlcykge1xuICAgICAgaWYgKHNsaWRlVG9JbmRleCA8IHN3aXBlci5sb29wZWRTbGlkZXMgLSBzbGlkZXNQZXJWaWV3IC8gMiB8fCBzbGlkZVRvSW5kZXggPiBzd2lwZXIuc2xpZGVzLmxlbmd0aCAtIHN3aXBlci5sb29wZWRTbGlkZXMgKyBzbGlkZXNQZXJWaWV3IC8gMikge1xuICAgICAgICBzd2lwZXIubG9vcEZpeCgpO1xuICAgICAgICBzbGlkZVRvSW5kZXggPSAkd3JhcHBlckVsLmNoaWxkcmVuKGAuJHtwYXJhbXMuc2xpZGVDbGFzc31bZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XCIke3JlYWxJbmRleH1cIl06bm90KC4ke3BhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzfSlgKS5lcSgwKS5pbmRleCgpO1xuICAgICAgICBuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgc3dpcGVyLnNsaWRlVG8oc2xpZGVUb0luZGV4KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzd2lwZXIuc2xpZGVUbyhzbGlkZVRvSW5kZXgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc2xpZGVUb0luZGV4ID4gc3dpcGVyLnNsaWRlcy5sZW5ndGggLSBzbGlkZXNQZXJWaWV3KSB7XG4gICAgICBzd2lwZXIubG9vcEZpeCgpO1xuICAgICAgc2xpZGVUb0luZGV4ID0gJHdyYXBwZXJFbC5jaGlsZHJlbihgLiR7cGFyYW1zLnNsaWRlQ2xhc3N9W2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJHtyZWFsSW5kZXh9XCJdOm5vdCguJHtwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzc30pYCkuZXEoMCkuaW5kZXgoKTtcbiAgICAgIG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgc3dpcGVyLnNsaWRlVG8oc2xpZGVUb0luZGV4KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzd2lwZXIuc2xpZGVUbyhzbGlkZVRvSW5kZXgpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzd2lwZXIuc2xpZGVUbyhzbGlkZVRvSW5kZXgpO1xuICB9XG59IiwiLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBcIm9mZlwiICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzbGlkZVRvQ2xvc2VzdChzcGVlZCA9IHRoaXMucGFyYW1zLnNwZWVkLCBydW5DYWxsYmFja3MgPSB0cnVlLCBpbnRlcm5hbCwgdGhyZXNob2xkID0gMC41KSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGxldCBpbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleDtcbiAgY29uc3Qgc2tpcCA9IE1hdGgubWluKHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyR3JvdXBTa2lwLCBpbmRleCk7XG4gIGNvbnN0IHNuYXBJbmRleCA9IHNraXAgKyBNYXRoLmZsb29yKChpbmRleCAtIHNraXApIC8gc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJHcm91cCk7XG4gIGNvbnN0IHRyYW5zbGF0ZSA9IHN3aXBlci5ydGxUcmFuc2xhdGUgPyBzd2lwZXIudHJhbnNsYXRlIDogLXN3aXBlci50cmFuc2xhdGU7XG5cbiAgaWYgKHRyYW5zbGF0ZSA+PSBzd2lwZXIuc25hcEdyaWRbc25hcEluZGV4XSkge1xuICAgIC8vIFRoZSBjdXJyZW50IHRyYW5zbGF0ZSBpcyBvbiBvciBhZnRlciB0aGUgY3VycmVudCBzbmFwIGluZGV4LCBzbyB0aGUgY2hvaWNlXG4gICAgLy8gaXMgYmV0d2VlbiB0aGUgY3VycmVudCBpbmRleCBhbmQgdGhlIG9uZSBhZnRlciBpdC5cbiAgICBjb25zdCBjdXJyZW50U25hcCA9IHN3aXBlci5zbmFwR3JpZFtzbmFwSW5kZXhdO1xuICAgIGNvbnN0IG5leHRTbmFwID0gc3dpcGVyLnNuYXBHcmlkW3NuYXBJbmRleCArIDFdO1xuXG4gICAgaWYgKHRyYW5zbGF0ZSAtIGN1cnJlbnRTbmFwID4gKG5leHRTbmFwIC0gY3VycmVudFNuYXApICogdGhyZXNob2xkKSB7XG4gICAgICBpbmRleCArPSBzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBUaGUgY3VycmVudCB0cmFuc2xhdGUgaXMgYmVmb3JlIHRoZSBjdXJyZW50IHNuYXAgaW5kZXgsIHNvIHRoZSBjaG9pY2VcbiAgICAvLyBpcyBiZXR3ZWVuIHRoZSBjdXJyZW50IGluZGV4IGFuZCB0aGUgb25lIGJlZm9yZSBpdC5cbiAgICBjb25zdCBwcmV2U25hcCA9IHN3aXBlci5zbmFwR3JpZFtzbmFwSW5kZXggLSAxXTtcbiAgICBjb25zdCBjdXJyZW50U25hcCA9IHN3aXBlci5zbmFwR3JpZFtzbmFwSW5kZXhdO1xuXG4gICAgaWYgKHRyYW5zbGF0ZSAtIHByZXZTbmFwIDw9IChjdXJyZW50U25hcCAtIHByZXZTbmFwKSAqIHRocmVzaG9sZCkge1xuICAgICAgaW5kZXggLT0gc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJHcm91cDtcbiAgICB9XG4gIH1cblxuICBpbmRleCA9IE1hdGgubWF4KGluZGV4LCAwKTtcbiAgaW5kZXggPSBNYXRoLm1pbihpbmRleCwgc3dpcGVyLnNsaWRlc0dyaWQubGVuZ3RoIC0gMSk7XG4gIHJldHVybiBzd2lwZXIuc2xpZGVUbyhpbmRleCwgc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNsaWRlVG9Mb29wKGluZGV4ID0gMCwgc3BlZWQgPSB0aGlzLnBhcmFtcy5zcGVlZCwgcnVuQ2FsbGJhY2tzID0gdHJ1ZSwgaW50ZXJuYWwpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgbGV0IG5ld0luZGV4ID0gaW5kZXg7XG5cbiAgaWYgKHN3aXBlci5wYXJhbXMubG9vcCkge1xuICAgIG5ld0luZGV4ICs9IHN3aXBlci5sb29wZWRTbGlkZXM7XG4gIH1cblxuICByZXR1cm4gc3dpcGVyLnNsaWRlVG8obmV3SW5kZXgsIHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsKTtcbn0iLCJpbXBvcnQgc2V0VHJhbnNpdGlvbiBmcm9tICcuL3NldFRyYW5zaXRpb24uanMnO1xuaW1wb3J0IHRyYW5zaXRpb25TdGFydCBmcm9tICcuL3RyYW5zaXRpb25TdGFydC5qcyc7XG5pbXBvcnQgdHJhbnNpdGlvbkVuZCBmcm9tICcuL3RyYW5zaXRpb25FbmQuanMnO1xuZXhwb3J0IGRlZmF1bHQge1xuICBzZXRUcmFuc2l0aW9uLFxuICB0cmFuc2l0aW9uU3RhcnQsXG4gIHRyYW5zaXRpb25FbmRcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0VHJhbnNpdGlvbihkdXJhdGlvbiwgYnlDb250cm9sbGVyKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG5cbiAgaWYgKCFzd2lwZXIucGFyYW1zLmNzc01vZGUpIHtcbiAgICBzd2lwZXIuJHdyYXBwZXJFbC50cmFuc2l0aW9uKGR1cmF0aW9uKTtcbiAgfVxuXG4gIHN3aXBlci5lbWl0KCdzZXRUcmFuc2l0aW9uJywgZHVyYXRpb24sIGJ5Q29udHJvbGxlcik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdHJhbnNpdGlvbkVtaXQoe1xuICBzd2lwZXIsXG4gIHJ1bkNhbGxiYWNrcyxcbiAgZGlyZWN0aW9uLFxuICBzdGVwXG59KSB7XG4gIGNvbnN0IHtcbiAgICBhY3RpdmVJbmRleCxcbiAgICBwcmV2aW91c0luZGV4XG4gIH0gPSBzd2lwZXI7XG4gIGxldCBkaXIgPSBkaXJlY3Rpb247XG5cbiAgaWYgKCFkaXIpIHtcbiAgICBpZiAoYWN0aXZlSW5kZXggPiBwcmV2aW91c0luZGV4KSBkaXIgPSAnbmV4dCc7ZWxzZSBpZiAoYWN0aXZlSW5kZXggPCBwcmV2aW91c0luZGV4KSBkaXIgPSAncHJldic7ZWxzZSBkaXIgPSAncmVzZXQnO1xuICB9XG5cbiAgc3dpcGVyLmVtaXQoYHRyYW5zaXRpb24ke3N0ZXB9YCk7XG5cbiAgaWYgKHJ1bkNhbGxiYWNrcyAmJiBhY3RpdmVJbmRleCAhPT0gcHJldmlvdXNJbmRleCkge1xuICAgIGlmIChkaXIgPT09ICdyZXNldCcpIHtcbiAgICAgIHN3aXBlci5lbWl0KGBzbGlkZVJlc2V0VHJhbnNpdGlvbiR7c3RlcH1gKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzd2lwZXIuZW1pdChgc2xpZGVDaGFuZ2VUcmFuc2l0aW9uJHtzdGVwfWApO1xuXG4gICAgaWYgKGRpciA9PT0gJ25leHQnKSB7XG4gICAgICBzd2lwZXIuZW1pdChgc2xpZGVOZXh0VHJhbnNpdGlvbiR7c3RlcH1gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpcGVyLmVtaXQoYHNsaWRlUHJldlRyYW5zaXRpb24ke3N0ZXB9YCk7XG4gICAgfVxuICB9XG59IiwiaW1wb3J0IHRyYW5zaXRpb25FbWl0IGZyb20gJy4vdHJhbnNpdGlvbkVtaXQuanMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdHJhbnNpdGlvbkVuZChydW5DYWxsYmFja3MgPSB0cnVlLCBkaXJlY3Rpb24pIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3Qge1xuICAgIHBhcmFtc1xuICB9ID0gc3dpcGVyO1xuICBzd2lwZXIuYW5pbWF0aW5nID0gZmFsc2U7XG4gIGlmIChwYXJhbXMuY3NzTW9kZSkgcmV0dXJuO1xuICBzd2lwZXIuc2V0VHJhbnNpdGlvbigwKTtcbiAgdHJhbnNpdGlvbkVtaXQoe1xuICAgIHN3aXBlcixcbiAgICBydW5DYWxsYmFja3MsXG4gICAgZGlyZWN0aW9uLFxuICAgIHN0ZXA6ICdFbmQnXG4gIH0pO1xufSIsImltcG9ydCB0cmFuc2l0aW9uRW1pdCBmcm9tICcuL3RyYW5zaXRpb25FbWl0LmpzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRyYW5zaXRpb25TdGFydChydW5DYWxsYmFja3MgPSB0cnVlLCBkaXJlY3Rpb24pIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3Qge1xuICAgIHBhcmFtc1xuICB9ID0gc3dpcGVyO1xuICBpZiAocGFyYW1zLmNzc01vZGUpIHJldHVybjtcblxuICBpZiAocGFyYW1zLmF1dG9IZWlnaHQpIHtcbiAgICBzd2lwZXIudXBkYXRlQXV0b0hlaWdodCgpO1xuICB9XG5cbiAgdHJhbnNpdGlvbkVtaXQoe1xuICAgIHN3aXBlcixcbiAgICBydW5DYWxsYmFja3MsXG4gICAgZGlyZWN0aW9uLFxuICAgIHN0ZXA6ICdTdGFydCdcbiAgfSk7XG59IiwiaW1wb3J0IHsgZ2V0VHJhbnNsYXRlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3V0aWxzLmpzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFN3aXBlclRyYW5zbGF0ZShheGlzID0gdGhpcy5pc0hvcml6b250YWwoKSA/ICd4JyA6ICd5Jykge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCB7XG4gICAgcGFyYW1zLFxuICAgIHJ0bFRyYW5zbGF0ZTogcnRsLFxuICAgIHRyYW5zbGF0ZSxcbiAgICAkd3JhcHBlckVsXG4gIH0gPSBzd2lwZXI7XG5cbiAgaWYgKHBhcmFtcy52aXJ0dWFsVHJhbnNsYXRlKSB7XG4gICAgcmV0dXJuIHJ0bCA/IC10cmFuc2xhdGUgOiB0cmFuc2xhdGU7XG4gIH1cblxuICBpZiAocGFyYW1zLmNzc01vZGUpIHtcbiAgICByZXR1cm4gdHJhbnNsYXRlO1xuICB9XG5cbiAgbGV0IGN1cnJlbnRUcmFuc2xhdGUgPSBnZXRUcmFuc2xhdGUoJHdyYXBwZXJFbFswXSwgYXhpcyk7XG4gIGlmIChydGwpIGN1cnJlbnRUcmFuc2xhdGUgPSAtY3VycmVudFRyYW5zbGF0ZTtcbiAgcmV0dXJuIGN1cnJlbnRUcmFuc2xhdGUgfHwgMDtcbn0iLCJpbXBvcnQgZ2V0VHJhbnNsYXRlIGZyb20gJy4vZ2V0VHJhbnNsYXRlLmpzJztcbmltcG9ydCBzZXRUcmFuc2xhdGUgZnJvbSAnLi9zZXRUcmFuc2xhdGUuanMnO1xuaW1wb3J0IG1pblRyYW5zbGF0ZSBmcm9tICcuL21pblRyYW5zbGF0ZS5qcyc7XG5pbXBvcnQgbWF4VHJhbnNsYXRlIGZyb20gJy4vbWF4VHJhbnNsYXRlLmpzJztcbmltcG9ydCB0cmFuc2xhdGVUbyBmcm9tICcuL3RyYW5zbGF0ZVRvLmpzJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0VHJhbnNsYXRlLFxuICBzZXRUcmFuc2xhdGUsXG4gIG1pblRyYW5zbGF0ZSxcbiAgbWF4VHJhbnNsYXRlLFxuICB0cmFuc2xhdGVUb1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYXhUcmFuc2xhdGUoKSB7XG4gIHJldHVybiAtdGhpcy5zbmFwR3JpZFt0aGlzLnNuYXBHcmlkLmxlbmd0aCAtIDFdO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pblRyYW5zbGF0ZSgpIHtcbiAgcmV0dXJuIC10aGlzLnNuYXBHcmlkWzBdO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldFRyYW5zbGF0ZSh0cmFuc2xhdGUsIGJ5Q29udHJvbGxlcikge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCB7XG4gICAgcnRsVHJhbnNsYXRlOiBydGwsXG4gICAgcGFyYW1zLFxuICAgICR3cmFwcGVyRWwsXG4gICAgd3JhcHBlckVsLFxuICAgIHByb2dyZXNzXG4gIH0gPSBzd2lwZXI7XG4gIGxldCB4ID0gMDtcbiAgbGV0IHkgPSAwO1xuICBjb25zdCB6ID0gMDtcblxuICBpZiAoc3dpcGVyLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgeCA9IHJ0bCA/IC10cmFuc2xhdGUgOiB0cmFuc2xhdGU7XG4gIH0gZWxzZSB7XG4gICAgeSA9IHRyYW5zbGF0ZTtcbiAgfVxuXG4gIGlmIChwYXJhbXMucm91bmRMZW5ndGhzKSB7XG4gICAgeCA9IE1hdGguZmxvb3IoeCk7XG4gICAgeSA9IE1hdGguZmxvb3IoeSk7XG4gIH1cblxuICBpZiAocGFyYW1zLmNzc01vZGUpIHtcbiAgICB3cmFwcGVyRWxbc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gJ3Njcm9sbExlZnQnIDogJ3Njcm9sbFRvcCddID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gLXggOiAteTtcbiAgfSBlbHNlIGlmICghcGFyYW1zLnZpcnR1YWxUcmFuc2xhdGUpIHtcbiAgICAkd3JhcHBlckVsLnRyYW5zZm9ybShgdHJhbnNsYXRlM2QoJHt4fXB4LCAke3l9cHgsICR7en1weClgKTtcbiAgfVxuXG4gIHN3aXBlci5wcmV2aW91c1RyYW5zbGF0ZSA9IHN3aXBlci50cmFuc2xhdGU7XG4gIHN3aXBlci50cmFuc2xhdGUgPSBzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyB4IDogeTsgLy8gQ2hlY2sgaWYgd2UgbmVlZCB0byB1cGRhdGUgcHJvZ3Jlc3NcblxuICBsZXQgbmV3UHJvZ3Jlc3M7XG4gIGNvbnN0IHRyYW5zbGF0ZXNEaWZmID0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpIC0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpO1xuXG4gIGlmICh0cmFuc2xhdGVzRGlmZiA9PT0gMCkge1xuICAgIG5ld1Byb2dyZXNzID0gMDtcbiAgfSBlbHNlIHtcbiAgICBuZXdQcm9ncmVzcyA9ICh0cmFuc2xhdGUgLSBzd2lwZXIubWluVHJhbnNsYXRlKCkpIC8gdHJhbnNsYXRlc0RpZmY7XG4gIH1cblxuICBpZiAobmV3UHJvZ3Jlc3MgIT09IHByb2dyZXNzKSB7XG4gICAgc3dpcGVyLnVwZGF0ZVByb2dyZXNzKHRyYW5zbGF0ZSk7XG4gIH1cblxuICBzd2lwZXIuZW1pdCgnc2V0VHJhbnNsYXRlJywgc3dpcGVyLnRyYW5zbGF0ZSwgYnlDb250cm9sbGVyKTtcbn0iLCJpbXBvcnQgeyBhbmltYXRlQ1NTTW9kZVNjcm9sbCB9IGZyb20gJy4uLy4uL3NoYXJlZC91dGlscy5qcyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0cmFuc2xhdGVUbyh0cmFuc2xhdGUgPSAwLCBzcGVlZCA9IHRoaXMucGFyYW1zLnNwZWVkLCBydW5DYWxsYmFja3MgPSB0cnVlLCB0cmFuc2xhdGVCb3VuZHMgPSB0cnVlLCBpbnRlcm5hbCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCB7XG4gICAgcGFyYW1zLFxuICAgIHdyYXBwZXJFbFxuICB9ID0gc3dpcGVyO1xuXG4gIGlmIChzd2lwZXIuYW5pbWF0aW5nICYmIHBhcmFtcy5wcmV2ZW50SW50ZXJhY3Rpb25PblRyYW5zaXRpb24pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBtaW5UcmFuc2xhdGUgPSBzd2lwZXIubWluVHJhbnNsYXRlKCk7XG4gIGNvbnN0IG1heFRyYW5zbGF0ZSA9IHN3aXBlci5tYXhUcmFuc2xhdGUoKTtcbiAgbGV0IG5ld1RyYW5zbGF0ZTtcbiAgaWYgKHRyYW5zbGF0ZUJvdW5kcyAmJiB0cmFuc2xhdGUgPiBtaW5UcmFuc2xhdGUpIG5ld1RyYW5zbGF0ZSA9IG1pblRyYW5zbGF0ZTtlbHNlIGlmICh0cmFuc2xhdGVCb3VuZHMgJiYgdHJhbnNsYXRlIDwgbWF4VHJhbnNsYXRlKSBuZXdUcmFuc2xhdGUgPSBtYXhUcmFuc2xhdGU7ZWxzZSBuZXdUcmFuc2xhdGUgPSB0cmFuc2xhdGU7IC8vIFVwZGF0ZSBwcm9ncmVzc1xuXG4gIHN3aXBlci51cGRhdGVQcm9ncmVzcyhuZXdUcmFuc2xhdGUpO1xuXG4gIGlmIChwYXJhbXMuY3NzTW9kZSkge1xuICAgIGNvbnN0IGlzSCA9IHN3aXBlci5pc0hvcml6b250YWwoKTtcblxuICAgIGlmIChzcGVlZCA9PT0gMCkge1xuICAgICAgd3JhcHBlckVsW2lzSCA/ICdzY3JvbGxMZWZ0JyA6ICdzY3JvbGxUb3AnXSA9IC1uZXdUcmFuc2xhdGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghc3dpcGVyLnN1cHBvcnQuc21vb3RoU2Nyb2xsKSB7XG4gICAgICAgIGFuaW1hdGVDU1NNb2RlU2Nyb2xsKHtcbiAgICAgICAgICBzd2lwZXIsXG4gICAgICAgICAgdGFyZ2V0UG9zaXRpb246IC1uZXdUcmFuc2xhdGUsXG4gICAgICAgICAgc2lkZTogaXNIID8gJ2xlZnQnIDogJ3RvcCdcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICB3cmFwcGVyRWwuc2Nyb2xsVG8oe1xuICAgICAgICBbaXNIID8gJ2xlZnQnIDogJ3RvcCddOiAtbmV3VHJhbnNsYXRlLFxuICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHNwZWVkID09PSAwKSB7XG4gICAgc3dpcGVyLnNldFRyYW5zaXRpb24oMCk7XG4gICAgc3dpcGVyLnNldFRyYW5zbGF0ZShuZXdUcmFuc2xhdGUpO1xuXG4gICAgaWYgKHJ1bkNhbGxiYWNrcykge1xuICAgICAgc3dpcGVyLmVtaXQoJ2JlZm9yZVRyYW5zaXRpb25TdGFydCcsIHNwZWVkLCBpbnRlcm5hbCk7XG4gICAgICBzd2lwZXIuZW1pdCgndHJhbnNpdGlvbkVuZCcpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzd2lwZXIuc2V0VHJhbnNpdGlvbihzcGVlZCk7XG4gICAgc3dpcGVyLnNldFRyYW5zbGF0ZShuZXdUcmFuc2xhdGUpO1xuXG4gICAgaWYgKHJ1bkNhbGxiYWNrcykge1xuICAgICAgc3dpcGVyLmVtaXQoJ2JlZm9yZVRyYW5zaXRpb25TdGFydCcsIHNwZWVkLCBpbnRlcm5hbCk7XG4gICAgICBzd2lwZXIuZW1pdCgndHJhbnNpdGlvblN0YXJ0Jyk7XG4gICAgfVxuXG4gICAgaWYgKCFzd2lwZXIuYW5pbWF0aW5nKSB7XG4gICAgICBzd2lwZXIuYW5pbWF0aW5nID0gdHJ1ZTtcblxuICAgICAgaWYgKCFzd2lwZXIub25UcmFuc2xhdGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kKSB7XG4gICAgICAgIHN3aXBlci5vblRyYW5zbGF0ZVRvV3JhcHBlclRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbiB0cmFuc2l0aW9uRW5kKGUpIHtcbiAgICAgICAgICBpZiAoIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkKSByZXR1cm47XG4gICAgICAgICAgaWYgKGUudGFyZ2V0ICE9PSB0aGlzKSByZXR1cm47XG4gICAgICAgICAgc3dpcGVyLiR3cmFwcGVyRWxbMF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHN3aXBlci5vblRyYW5zbGF0ZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpO1xuICAgICAgICAgIHN3aXBlci4kd3JhcHBlckVsWzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCBzd2lwZXIub25UcmFuc2xhdGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kKTtcbiAgICAgICAgICBzd2lwZXIub25UcmFuc2xhdGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kID0gbnVsbDtcbiAgICAgICAgICBkZWxldGUgc3dpcGVyLm9uVHJhbnNsYXRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZDtcblxuICAgICAgICAgIGlmIChydW5DYWxsYmFja3MpIHtcbiAgICAgICAgICAgIHN3aXBlci5lbWl0KCd0cmFuc2l0aW9uRW5kJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBzd2lwZXIuJHdyYXBwZXJFbFswXS5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgc3dpcGVyLm9uVHJhbnNsYXRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCk7XG4gICAgICBzd2lwZXIuJHdyYXBwZXJFbFswXS5hZGRFdmVudExpc3RlbmVyKCd3ZWJraXRUcmFuc2l0aW9uRW5kJywgc3dpcGVyLm9uVHJhbnNsYXRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59IiwiaW1wb3J0IHVwZGF0ZVNpemUgZnJvbSAnLi91cGRhdGVTaXplLmpzJztcbmltcG9ydCB1cGRhdGVTbGlkZXMgZnJvbSAnLi91cGRhdGVTbGlkZXMuanMnO1xuaW1wb3J0IHVwZGF0ZUF1dG9IZWlnaHQgZnJvbSAnLi91cGRhdGVBdXRvSGVpZ2h0LmpzJztcbmltcG9ydCB1cGRhdGVTbGlkZXNPZmZzZXQgZnJvbSAnLi91cGRhdGVTbGlkZXNPZmZzZXQuanMnO1xuaW1wb3J0IHVwZGF0ZVNsaWRlc1Byb2dyZXNzIGZyb20gJy4vdXBkYXRlU2xpZGVzUHJvZ3Jlc3MuanMnO1xuaW1wb3J0IHVwZGF0ZVByb2dyZXNzIGZyb20gJy4vdXBkYXRlUHJvZ3Jlc3MuanMnO1xuaW1wb3J0IHVwZGF0ZVNsaWRlc0NsYXNzZXMgZnJvbSAnLi91cGRhdGVTbGlkZXNDbGFzc2VzLmpzJztcbmltcG9ydCB1cGRhdGVBY3RpdmVJbmRleCBmcm9tICcuL3VwZGF0ZUFjdGl2ZUluZGV4LmpzJztcbmltcG9ydCB1cGRhdGVDbGlja2VkU2xpZGUgZnJvbSAnLi91cGRhdGVDbGlja2VkU2xpZGUuanMnO1xuZXhwb3J0IGRlZmF1bHQge1xuICB1cGRhdGVTaXplLFxuICB1cGRhdGVTbGlkZXMsXG4gIHVwZGF0ZUF1dG9IZWlnaHQsXG4gIHVwZGF0ZVNsaWRlc09mZnNldCxcbiAgdXBkYXRlU2xpZGVzUHJvZ3Jlc3MsXG4gIHVwZGF0ZVByb2dyZXNzLFxuICB1cGRhdGVTbGlkZXNDbGFzc2VzLFxuICB1cGRhdGVBY3RpdmVJbmRleCxcbiAgdXBkYXRlQ2xpY2tlZFNsaWRlXG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZUFjdGl2ZUluZGV4KG5ld0FjdGl2ZUluZGV4KSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IHRyYW5zbGF0ZSA9IHN3aXBlci5ydGxUcmFuc2xhdGUgPyBzd2lwZXIudHJhbnNsYXRlIDogLXN3aXBlci50cmFuc2xhdGU7XG4gIGNvbnN0IHtcbiAgICBzbGlkZXNHcmlkLFxuICAgIHNuYXBHcmlkLFxuICAgIHBhcmFtcyxcbiAgICBhY3RpdmVJbmRleDogcHJldmlvdXNJbmRleCxcbiAgICByZWFsSW5kZXg6IHByZXZpb3VzUmVhbEluZGV4LFxuICAgIHNuYXBJbmRleDogcHJldmlvdXNTbmFwSW5kZXhcbiAgfSA9IHN3aXBlcjtcbiAgbGV0IGFjdGl2ZUluZGV4ID0gbmV3QWN0aXZlSW5kZXg7XG4gIGxldCBzbmFwSW5kZXg7XG5cbiAgaWYgKHR5cGVvZiBhY3RpdmVJbmRleCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNsaWRlc0dyaWQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmICh0eXBlb2Ygc2xpZGVzR3JpZFtpICsgMV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGlmICh0cmFuc2xhdGUgPj0gc2xpZGVzR3JpZFtpXSAmJiB0cmFuc2xhdGUgPCBzbGlkZXNHcmlkW2kgKyAxXSAtIChzbGlkZXNHcmlkW2kgKyAxXSAtIHNsaWRlc0dyaWRbaV0pIC8gMikge1xuICAgICAgICAgIGFjdGl2ZUluZGV4ID0gaTtcbiAgICAgICAgfSBlbHNlIGlmICh0cmFuc2xhdGUgPj0gc2xpZGVzR3JpZFtpXSAmJiB0cmFuc2xhdGUgPCBzbGlkZXNHcmlkW2kgKyAxXSkge1xuICAgICAgICAgIGFjdGl2ZUluZGV4ID0gaSArIDE7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHJhbnNsYXRlID49IHNsaWRlc0dyaWRbaV0pIHtcbiAgICAgICAgYWN0aXZlSW5kZXggPSBpO1xuICAgICAgfVxuICAgIH0gLy8gTm9ybWFsaXplIHNsaWRlSW5kZXhcblxuXG4gICAgaWYgKHBhcmFtcy5ub3JtYWxpemVTbGlkZUluZGV4KSB7XG4gICAgICBpZiAoYWN0aXZlSW5kZXggPCAwIHx8IHR5cGVvZiBhY3RpdmVJbmRleCA9PT0gJ3VuZGVmaW5lZCcpIGFjdGl2ZUluZGV4ID0gMDtcbiAgICB9XG4gIH1cblxuICBpZiAoc25hcEdyaWQuaW5kZXhPZih0cmFuc2xhdGUpID49IDApIHtcbiAgICBzbmFwSW5kZXggPSBzbmFwR3JpZC5pbmRleE9mKHRyYW5zbGF0ZSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgc2tpcCA9IE1hdGgubWluKHBhcmFtcy5zbGlkZXNQZXJHcm91cFNraXAsIGFjdGl2ZUluZGV4KTtcbiAgICBzbmFwSW5kZXggPSBza2lwICsgTWF0aC5mbG9vcigoYWN0aXZlSW5kZXggLSBza2lwKSAvIHBhcmFtcy5zbGlkZXNQZXJHcm91cCk7XG4gIH1cblxuICBpZiAoc25hcEluZGV4ID49IHNuYXBHcmlkLmxlbmd0aCkgc25hcEluZGV4ID0gc25hcEdyaWQubGVuZ3RoIC0gMTtcblxuICBpZiAoYWN0aXZlSW5kZXggPT09IHByZXZpb3VzSW5kZXgpIHtcbiAgICBpZiAoc25hcEluZGV4ICE9PSBwcmV2aW91c1NuYXBJbmRleCkge1xuICAgICAgc3dpcGVyLnNuYXBJbmRleCA9IHNuYXBJbmRleDtcbiAgICAgIHN3aXBlci5lbWl0KCdzbmFwSW5kZXhDaGFuZ2UnKTtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH0gLy8gR2V0IHJlYWwgaW5kZXhcblxuXG4gIGNvbnN0IHJlYWxJbmRleCA9IHBhcnNlSW50KHN3aXBlci5zbGlkZXMuZXEoYWN0aXZlSW5kZXgpLmF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JykgfHwgYWN0aXZlSW5kZXgsIDEwKTtcbiAgT2JqZWN0LmFzc2lnbihzd2lwZXIsIHtcbiAgICBzbmFwSW5kZXgsXG4gICAgcmVhbEluZGV4LFxuICAgIHByZXZpb3VzSW5kZXgsXG4gICAgYWN0aXZlSW5kZXhcbiAgfSk7XG4gIHN3aXBlci5lbWl0KCdhY3RpdmVJbmRleENoYW5nZScpO1xuICBzd2lwZXIuZW1pdCgnc25hcEluZGV4Q2hhbmdlJyk7XG5cbiAgaWYgKHByZXZpb3VzUmVhbEluZGV4ICE9PSByZWFsSW5kZXgpIHtcbiAgICBzd2lwZXIuZW1pdCgncmVhbEluZGV4Q2hhbmdlJyk7XG4gIH1cblxuICBpZiAoc3dpcGVyLmluaXRpYWxpemVkIHx8IHN3aXBlci5wYXJhbXMucnVuQ2FsbGJhY2tzT25Jbml0KSB7XG4gICAgc3dpcGVyLmVtaXQoJ3NsaWRlQ2hhbmdlJyk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGRhdGVBdXRvSGVpZ2h0KHNwZWVkKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IGFjdGl2ZVNsaWRlcyA9IFtdO1xuICBjb25zdCBpc1ZpcnR1YWwgPSBzd2lwZXIudmlydHVhbCAmJiBzd2lwZXIucGFyYW1zLnZpcnR1YWwuZW5hYmxlZDtcbiAgbGV0IG5ld0hlaWdodCA9IDA7XG4gIGxldCBpO1xuXG4gIGlmICh0eXBlb2Ygc3BlZWQgPT09ICdudW1iZXInKSB7XG4gICAgc3dpcGVyLnNldFRyYW5zaXRpb24oc3BlZWQpO1xuICB9IGVsc2UgaWYgKHNwZWVkID09PSB0cnVlKSB7XG4gICAgc3dpcGVyLnNldFRyYW5zaXRpb24oc3dpcGVyLnBhcmFtcy5zcGVlZCk7XG4gIH1cblxuICBjb25zdCBnZXRTbGlkZUJ5SW5kZXggPSBpbmRleCA9PiB7XG4gICAgaWYgKGlzVmlydHVhbCkge1xuICAgICAgcmV0dXJuIHN3aXBlci5zbGlkZXMuZmlsdGVyKGVsID0+IHBhcnNlSW50KGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKSwgMTApID09PSBpbmRleClbMF07XG4gICAgfVxuXG4gICAgcmV0dXJuIHN3aXBlci5zbGlkZXMuZXEoaW5kZXgpWzBdO1xuICB9OyAvLyBGaW5kIHNsaWRlcyBjdXJyZW50bHkgaW4gdmlld1xuXG5cbiAgaWYgKHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyVmlldyAhPT0gJ2F1dG8nICYmIHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyVmlldyA+IDEpIHtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5jZW50ZXJlZFNsaWRlcykge1xuICAgICAgc3dpcGVyLnZpc2libGVTbGlkZXMuZWFjaChzbGlkZSA9PiB7XG4gICAgICAgIGFjdGl2ZVNsaWRlcy5wdXNoKHNsaWRlKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgTWF0aC5jZWlsKHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyVmlldyk7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleCArIGk7XG4gICAgICAgIGlmIChpbmRleCA+IHN3aXBlci5zbGlkZXMubGVuZ3RoICYmICFpc1ZpcnR1YWwpIGJyZWFrO1xuICAgICAgICBhY3RpdmVTbGlkZXMucHVzaChnZXRTbGlkZUJ5SW5kZXgoaW5kZXgpKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgYWN0aXZlU2xpZGVzLnB1c2goZ2V0U2xpZGVCeUluZGV4KHN3aXBlci5hY3RpdmVJbmRleCkpO1xuICB9IC8vIEZpbmQgbmV3IGhlaWdodCBmcm9tIGhpZ2hlc3Qgc2xpZGUgaW4gdmlld1xuXG5cbiAgZm9yIChpID0gMDsgaSA8IGFjdGl2ZVNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmICh0eXBlb2YgYWN0aXZlU2xpZGVzW2ldICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc3QgaGVpZ2h0ID0gYWN0aXZlU2xpZGVzW2ldLm9mZnNldEhlaWdodDtcbiAgICAgIG5ld0hlaWdodCA9IGhlaWdodCA+IG5ld0hlaWdodCA/IGhlaWdodCA6IG5ld0hlaWdodDtcbiAgICB9XG4gIH0gLy8gVXBkYXRlIEhlaWdodFxuXG5cbiAgaWYgKG5ld0hlaWdodCkgc3dpcGVyLiR3cmFwcGVyRWwuY3NzKCdoZWlnaHQnLCBgJHtuZXdIZWlnaHR9cHhgKTtcbn0iLCJpbXBvcnQgJCBmcm9tICcuLi8uLi9zaGFyZWQvZG9tLmpzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZUNsaWNrZWRTbGlkZShlKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG4gIGNvbnN0IHBhcmFtcyA9IHN3aXBlci5wYXJhbXM7XG4gIGNvbnN0IHNsaWRlID0gJChlLnRhcmdldCkuY2xvc2VzdChgLiR7cGFyYW1zLnNsaWRlQ2xhc3N9YClbMF07XG4gIGxldCBzbGlkZUZvdW5kID0gZmFsc2U7XG4gIGxldCBzbGlkZUluZGV4O1xuXG4gIGlmIChzbGlkZSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3dpcGVyLnNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHN3aXBlci5zbGlkZXNbaV0gPT09IHNsaWRlKSB7XG4gICAgICAgIHNsaWRlRm91bmQgPSB0cnVlO1xuICAgICAgICBzbGlkZUluZGV4ID0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHNsaWRlICYmIHNsaWRlRm91bmQpIHtcbiAgICBzd2lwZXIuY2xpY2tlZFNsaWRlID0gc2xpZGU7XG5cbiAgICBpZiAoc3dpcGVyLnZpcnR1YWwgJiYgc3dpcGVyLnBhcmFtcy52aXJ0dWFsLmVuYWJsZWQpIHtcbiAgICAgIHN3aXBlci5jbGlja2VkSW5kZXggPSBwYXJzZUludCgkKHNsaWRlKS5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpLCAxMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXBlci5jbGlja2VkSW5kZXggPSBzbGlkZUluZGV4O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzd2lwZXIuY2xpY2tlZFNsaWRlID0gdW5kZWZpbmVkO1xuICAgIHN3aXBlci5jbGlja2VkSW5kZXggPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5zbGlkZVRvQ2xpY2tlZFNsaWRlICYmIHN3aXBlci5jbGlja2VkSW5kZXggIT09IHVuZGVmaW5lZCAmJiBzd2lwZXIuY2xpY2tlZEluZGV4ICE9PSBzd2lwZXIuYWN0aXZlSW5kZXgpIHtcbiAgICBzd2lwZXIuc2xpZGVUb0NsaWNrZWRTbGlkZSgpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlUHJvZ3Jlc3ModHJhbnNsYXRlKSB7XG4gIGNvbnN0IHN3aXBlciA9IHRoaXM7XG5cbiAgaWYgKHR5cGVvZiB0cmFuc2xhdGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgY29uc3QgbXVsdGlwbGllciA9IHN3aXBlci5ydGxUcmFuc2xhdGUgPyAtMSA6IDE7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXG4gICAgdHJhbnNsYXRlID0gc3dpcGVyICYmIHN3aXBlci50cmFuc2xhdGUgJiYgc3dpcGVyLnRyYW5zbGF0ZSAqIG11bHRpcGxpZXIgfHwgMDtcbiAgfVxuXG4gIGNvbnN0IHBhcmFtcyA9IHN3aXBlci5wYXJhbXM7XG4gIGNvbnN0IHRyYW5zbGF0ZXNEaWZmID0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpIC0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpO1xuICBsZXQge1xuICAgIHByb2dyZXNzLFxuICAgIGlzQmVnaW5uaW5nLFxuICAgIGlzRW5kXG4gIH0gPSBzd2lwZXI7XG4gIGNvbnN0IHdhc0JlZ2lubmluZyA9IGlzQmVnaW5uaW5nO1xuICBjb25zdCB3YXNFbmQgPSBpc0VuZDtcblxuICBpZiAodHJhbnNsYXRlc0RpZmYgPT09IDApIHtcbiAgICBwcm9ncmVzcyA9IDA7XG4gICAgaXNCZWdpbm5pbmcgPSB0cnVlO1xuICAgIGlzRW5kID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBwcm9ncmVzcyA9ICh0cmFuc2xhdGUgLSBzd2lwZXIubWluVHJhbnNsYXRlKCkpIC8gdHJhbnNsYXRlc0RpZmY7XG4gICAgaXNCZWdpbm5pbmcgPSBwcm9ncmVzcyA8PSAwO1xuICAgIGlzRW5kID0gcHJvZ3Jlc3MgPj0gMTtcbiAgfVxuXG4gIE9iamVjdC5hc3NpZ24oc3dpcGVyLCB7XG4gICAgcHJvZ3Jlc3MsXG4gICAgaXNCZWdpbm5pbmcsXG4gICAgaXNFbmRcbiAgfSk7XG4gIGlmIChwYXJhbXMud2F0Y2hTbGlkZXNQcm9ncmVzcyB8fCBwYXJhbXMuY2VudGVyZWRTbGlkZXMgJiYgcGFyYW1zLmF1dG9IZWlnaHQpIHN3aXBlci51cGRhdGVTbGlkZXNQcm9ncmVzcyh0cmFuc2xhdGUpO1xuXG4gIGlmIChpc0JlZ2lubmluZyAmJiAhd2FzQmVnaW5uaW5nKSB7XG4gICAgc3dpcGVyLmVtaXQoJ3JlYWNoQmVnaW5uaW5nIHRvRWRnZScpO1xuICB9XG5cbiAgaWYgKGlzRW5kICYmICF3YXNFbmQpIHtcbiAgICBzd2lwZXIuZW1pdCgncmVhY2hFbmQgdG9FZGdlJyk7XG4gIH1cblxuICBpZiAod2FzQmVnaW5uaW5nICYmICFpc0JlZ2lubmluZyB8fCB3YXNFbmQgJiYgIWlzRW5kKSB7XG4gICAgc3dpcGVyLmVtaXQoJ2Zyb21FZGdlJyk7XG4gIH1cblxuICBzd2lwZXIuZW1pdCgncHJvZ3Jlc3MnLCBwcm9ncmVzcyk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlU2l6ZSgpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgbGV0IHdpZHRoO1xuICBsZXQgaGVpZ2h0O1xuICBjb25zdCAkZWwgPSBzd2lwZXIuJGVsO1xuXG4gIGlmICh0eXBlb2Ygc3dpcGVyLnBhcmFtcy53aWR0aCAhPT0gJ3VuZGVmaW5lZCcgJiYgc3dpcGVyLnBhcmFtcy53aWR0aCAhPT0gbnVsbCkge1xuICAgIHdpZHRoID0gc3dpcGVyLnBhcmFtcy53aWR0aDtcbiAgfSBlbHNlIHtcbiAgICB3aWR0aCA9ICRlbFswXS5jbGllbnRXaWR0aDtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygc3dpcGVyLnBhcmFtcy5oZWlnaHQgIT09ICd1bmRlZmluZWQnICYmIHN3aXBlci5wYXJhbXMuaGVpZ2h0ICE9PSBudWxsKSB7XG4gICAgaGVpZ2h0ID0gc3dpcGVyLnBhcmFtcy5oZWlnaHQ7XG4gIH0gZWxzZSB7XG4gICAgaGVpZ2h0ID0gJGVsWzBdLmNsaWVudEhlaWdodDtcbiAgfVxuXG4gIGlmICh3aWR0aCA9PT0gMCAmJiBzd2lwZXIuaXNIb3Jpem9udGFsKCkgfHwgaGVpZ2h0ID09PSAwICYmIHN3aXBlci5pc1ZlcnRpY2FsKCkpIHtcbiAgICByZXR1cm47XG4gIH0gLy8gU3VidHJhY3QgcGFkZGluZ3NcblxuXG4gIHdpZHRoID0gd2lkdGggLSBwYXJzZUludCgkZWwuY3NzKCdwYWRkaW5nLWxlZnQnKSB8fCAwLCAxMCkgLSBwYXJzZUludCgkZWwuY3NzKCdwYWRkaW5nLXJpZ2h0JykgfHwgMCwgMTApO1xuICBoZWlnaHQgPSBoZWlnaHQgLSBwYXJzZUludCgkZWwuY3NzKCdwYWRkaW5nLXRvcCcpIHx8IDAsIDEwKSAtIHBhcnNlSW50KCRlbC5jc3MoJ3BhZGRpbmctYm90dG9tJykgfHwgMCwgMTApO1xuICBpZiAoTnVtYmVyLmlzTmFOKHdpZHRoKSkgd2lkdGggPSAwO1xuICBpZiAoTnVtYmVyLmlzTmFOKGhlaWdodCkpIGhlaWdodCA9IDA7XG4gIE9iamVjdC5hc3NpZ24oc3dpcGVyLCB7XG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIHNpemU6IHN3aXBlci5pc0hvcml6b250YWwoKSA/IHdpZHRoIDogaGVpZ2h0XG4gIH0pO1xufSIsImltcG9ydCB7IHNldENTU1Byb3BlcnR5IH0gZnJvbSAnLi4vLi4vc2hhcmVkL3V0aWxzLmpzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZVNsaWRlcygpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcblxuICBmdW5jdGlvbiBnZXREaXJlY3Rpb25MYWJlbChwcm9wZXJ0eSkge1xuICAgIGlmIChzd2lwZXIuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgICB9IC8vIHByZXR0aWVyLWlnbm9yZVxuXG5cbiAgICByZXR1cm4ge1xuICAgICAgJ3dpZHRoJzogJ2hlaWdodCcsXG4gICAgICAnbWFyZ2luLXRvcCc6ICdtYXJnaW4tbGVmdCcsXG4gICAgICAnbWFyZ2luLWJvdHRvbSAnOiAnbWFyZ2luLXJpZ2h0JyxcbiAgICAgICdtYXJnaW4tbGVmdCc6ICdtYXJnaW4tdG9wJyxcbiAgICAgICdtYXJnaW4tcmlnaHQnOiAnbWFyZ2luLWJvdHRvbScsXG4gICAgICAncGFkZGluZy1sZWZ0JzogJ3BhZGRpbmctdG9wJyxcbiAgICAgICdwYWRkaW5nLXJpZ2h0JzogJ3BhZGRpbmctYm90dG9tJyxcbiAgICAgICdtYXJnaW5SaWdodCc6ICdtYXJnaW5Cb3R0b20nXG4gICAgfVtwcm9wZXJ0eV07XG4gIH1cblxuICBmdW5jdGlvbiBnZXREaXJlY3Rpb25Qcm9wZXJ0eVZhbHVlKG5vZGUsIGxhYmVsKSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQobm9kZS5nZXRQcm9wZXJ0eVZhbHVlKGdldERpcmVjdGlvbkxhYmVsKGxhYmVsKSkgfHwgMCk7XG4gIH1cblxuICBjb25zdCBwYXJhbXMgPSBzd2lwZXIucGFyYW1zO1xuICBjb25zdCB7XG4gICAgJHdyYXBwZXJFbCxcbiAgICBzaXplOiBzd2lwZXJTaXplLFxuICAgIHJ0bFRyYW5zbGF0ZTogcnRsLFxuICAgIHdyb25nUlRMXG4gIH0gPSBzd2lwZXI7XG4gIGNvbnN0IGlzVmlydHVhbCA9IHN3aXBlci52aXJ0dWFsICYmIHBhcmFtcy52aXJ0dWFsLmVuYWJsZWQ7XG4gIGNvbnN0IHByZXZpb3VzU2xpZGVzTGVuZ3RoID0gaXNWaXJ0dWFsID8gc3dpcGVyLnZpcnR1YWwuc2xpZGVzLmxlbmd0aCA6IHN3aXBlci5zbGlkZXMubGVuZ3RoO1xuICBjb25zdCBzbGlkZXMgPSAkd3JhcHBlckVsLmNoaWxkcmVuKGAuJHtzd2lwZXIucGFyYW1zLnNsaWRlQ2xhc3N9YCk7XG4gIGNvbnN0IHNsaWRlc0xlbmd0aCA9IGlzVmlydHVhbCA/IHN3aXBlci52aXJ0dWFsLnNsaWRlcy5sZW5ndGggOiBzbGlkZXMubGVuZ3RoO1xuICBsZXQgc25hcEdyaWQgPSBbXTtcbiAgY29uc3Qgc2xpZGVzR3JpZCA9IFtdO1xuICBjb25zdCBzbGlkZXNTaXplc0dyaWQgPSBbXTtcbiAgbGV0IG9mZnNldEJlZm9yZSA9IHBhcmFtcy5zbGlkZXNPZmZzZXRCZWZvcmU7XG5cbiAgaWYgKHR5cGVvZiBvZmZzZXRCZWZvcmUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvZmZzZXRCZWZvcmUgPSBwYXJhbXMuc2xpZGVzT2Zmc2V0QmVmb3JlLmNhbGwoc3dpcGVyKTtcbiAgfVxuXG4gIGxldCBvZmZzZXRBZnRlciA9IHBhcmFtcy5zbGlkZXNPZmZzZXRBZnRlcjtcblxuICBpZiAodHlwZW9mIG9mZnNldEFmdGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb2Zmc2V0QWZ0ZXIgPSBwYXJhbXMuc2xpZGVzT2Zmc2V0QWZ0ZXIuY2FsbChzd2lwZXIpO1xuICB9XG5cbiAgY29uc3QgcHJldmlvdXNTbmFwR3JpZExlbmd0aCA9IHN3aXBlci5zbmFwR3JpZC5sZW5ndGg7XG4gIGNvbnN0IHByZXZpb3VzU2xpZGVzR3JpZExlbmd0aCA9IHN3aXBlci5zbGlkZXNHcmlkLmxlbmd0aDtcbiAgbGV0IHNwYWNlQmV0d2VlbiA9IHBhcmFtcy5zcGFjZUJldHdlZW47XG4gIGxldCBzbGlkZVBvc2l0aW9uID0gLW9mZnNldEJlZm9yZTtcbiAgbGV0IHByZXZTbGlkZVNpemUgPSAwO1xuICBsZXQgaW5kZXggPSAwO1xuXG4gIGlmICh0eXBlb2Ygc3dpcGVyU2l6ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAodHlwZW9mIHNwYWNlQmV0d2VlbiA9PT0gJ3N0cmluZycgJiYgc3BhY2VCZXR3ZWVuLmluZGV4T2YoJyUnKSA+PSAwKSB7XG4gICAgc3BhY2VCZXR3ZWVuID0gcGFyc2VGbG9hdChzcGFjZUJldHdlZW4ucmVwbGFjZSgnJScsICcnKSkgLyAxMDAgKiBzd2lwZXJTaXplO1xuICB9XG5cbiAgc3dpcGVyLnZpcnR1YWxTaXplID0gLXNwYWNlQmV0d2VlbjsgLy8gcmVzZXQgbWFyZ2luc1xuXG4gIGlmIChydGwpIHNsaWRlcy5jc3Moe1xuICAgIG1hcmdpbkxlZnQ6ICcnLFxuICAgIG1hcmdpbkJvdHRvbTogJycsXG4gICAgbWFyZ2luVG9wOiAnJ1xuICB9KTtlbHNlIHNsaWRlcy5jc3Moe1xuICAgIG1hcmdpblJpZ2h0OiAnJyxcbiAgICBtYXJnaW5Cb3R0b206ICcnLFxuICAgIG1hcmdpblRvcDogJydcbiAgfSk7IC8vIHJlc2V0IGNzc01vZGUgb2Zmc2V0c1xuXG4gIGlmIChwYXJhbXMuY2VudGVyZWRTbGlkZXMgJiYgcGFyYW1zLmNzc01vZGUpIHtcbiAgICBzZXRDU1NQcm9wZXJ0eShzd2lwZXIud3JhcHBlckVsLCAnLS1zd2lwZXItY2VudGVyZWQtb2Zmc2V0LWJlZm9yZScsICcnKTtcbiAgICBzZXRDU1NQcm9wZXJ0eShzd2lwZXIud3JhcHBlckVsLCAnLS1zd2lwZXItY2VudGVyZWQtb2Zmc2V0LWFmdGVyJywgJycpO1xuICB9XG5cbiAgY29uc3QgZ3JpZEVuYWJsZWQgPSBwYXJhbXMuZ3JpZCAmJiBwYXJhbXMuZ3JpZC5yb3dzID4gMSAmJiBzd2lwZXIuZ3JpZDtcblxuICBpZiAoZ3JpZEVuYWJsZWQpIHtcbiAgICBzd2lwZXIuZ3JpZC5pbml0U2xpZGVzKHNsaWRlc0xlbmd0aCk7XG4gIH0gLy8gQ2FsYyBzbGlkZXNcblxuXG4gIGxldCBzbGlkZVNpemU7XG4gIGNvbnN0IHNob3VsZFJlc2V0U2xpZGVTaXplID0gcGFyYW1zLnNsaWRlc1BlclZpZXcgPT09ICdhdXRvJyAmJiBwYXJhbXMuYnJlYWtwb2ludHMgJiYgT2JqZWN0LmtleXMocGFyYW1zLmJyZWFrcG9pbnRzKS5maWx0ZXIoa2V5ID0+IHtcbiAgICByZXR1cm4gdHlwZW9mIHBhcmFtcy5icmVha3BvaW50c1trZXldLnNsaWRlc1BlclZpZXcgIT09ICd1bmRlZmluZWQnO1xuICB9KS5sZW5ndGggPiAwO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2xpZGVzTGVuZ3RoOyBpICs9IDEpIHtcbiAgICBzbGlkZVNpemUgPSAwO1xuICAgIGNvbnN0IHNsaWRlID0gc2xpZGVzLmVxKGkpO1xuXG4gICAgaWYgKGdyaWRFbmFibGVkKSB7XG4gICAgICBzd2lwZXIuZ3JpZC51cGRhdGVTbGlkZShpLCBzbGlkZSwgc2xpZGVzTGVuZ3RoLCBnZXREaXJlY3Rpb25MYWJlbCk7XG4gICAgfVxuXG4gICAgaWYgKHNsaWRlLmNzcygnZGlzcGxheScpID09PSAnbm9uZScpIGNvbnRpbnVlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgICBpZiAocGFyYW1zLnNsaWRlc1BlclZpZXcgPT09ICdhdXRvJykge1xuICAgICAgaWYgKHNob3VsZFJlc2V0U2xpZGVTaXplKSB7XG4gICAgICAgIHNsaWRlc1tpXS5zdHlsZVtnZXREaXJlY3Rpb25MYWJlbCgnd2lkdGgnKV0gPSBgYDtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc2xpZGVTdHlsZXMgPSBnZXRDb21wdXRlZFN0eWxlKHNsaWRlWzBdKTtcbiAgICAgIGNvbnN0IGN1cnJlbnRUcmFuc2Zvcm0gPSBzbGlkZVswXS5zdHlsZS50cmFuc2Zvcm07XG4gICAgICBjb25zdCBjdXJyZW50V2ViS2l0VHJhbnNmb3JtID0gc2xpZGVbMF0uc3R5bGUud2Via2l0VHJhbnNmb3JtO1xuXG4gICAgICBpZiAoY3VycmVudFRyYW5zZm9ybSkge1xuICAgICAgICBzbGlkZVswXS5zdHlsZS50cmFuc2Zvcm0gPSAnbm9uZSc7XG4gICAgICB9XG5cbiAgICAgIGlmIChjdXJyZW50V2ViS2l0VHJhbnNmb3JtKSB7XG4gICAgICAgIHNsaWRlWzBdLnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9ICdub25lJztcbiAgICAgIH1cblxuICAgICAgaWYgKHBhcmFtcy5yb3VuZExlbmd0aHMpIHtcbiAgICAgICAgc2xpZGVTaXplID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gc2xpZGUub3V0ZXJXaWR0aCh0cnVlKSA6IHNsaWRlLm91dGVySGVpZ2h0KHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIGNvbnN0IHdpZHRoID0gZ2V0RGlyZWN0aW9uUHJvcGVydHlWYWx1ZShzbGlkZVN0eWxlcywgJ3dpZHRoJyk7XG4gICAgICAgIGNvbnN0IHBhZGRpbmdMZWZ0ID0gZ2V0RGlyZWN0aW9uUHJvcGVydHlWYWx1ZShzbGlkZVN0eWxlcywgJ3BhZGRpbmctbGVmdCcpO1xuICAgICAgICBjb25zdCBwYWRkaW5nUmlnaHQgPSBnZXREaXJlY3Rpb25Qcm9wZXJ0eVZhbHVlKHNsaWRlU3R5bGVzLCAncGFkZGluZy1yaWdodCcpO1xuICAgICAgICBjb25zdCBtYXJnaW5MZWZ0ID0gZ2V0RGlyZWN0aW9uUHJvcGVydHlWYWx1ZShzbGlkZVN0eWxlcywgJ21hcmdpbi1sZWZ0Jyk7XG4gICAgICAgIGNvbnN0IG1hcmdpblJpZ2h0ID0gZ2V0RGlyZWN0aW9uUHJvcGVydHlWYWx1ZShzbGlkZVN0eWxlcywgJ21hcmdpbi1yaWdodCcpO1xuICAgICAgICBjb25zdCBib3hTaXppbmcgPSBzbGlkZVN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdib3gtc2l6aW5nJyk7XG5cbiAgICAgICAgaWYgKGJveFNpemluZyAmJiBib3hTaXppbmcgPT09ICdib3JkZXItYm94Jykge1xuICAgICAgICAgIHNsaWRlU2l6ZSA9IHdpZHRoICsgbWFyZ2luTGVmdCArIG1hcmdpblJpZ2h0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGNsaWVudFdpZHRoLFxuICAgICAgICAgICAgb2Zmc2V0V2lkdGhcbiAgICAgICAgICB9ID0gc2xpZGVbMF07XG4gICAgICAgICAgc2xpZGVTaXplID0gd2lkdGggKyBwYWRkaW5nTGVmdCArIHBhZGRpbmdSaWdodCArIG1hcmdpbkxlZnQgKyBtYXJnaW5SaWdodCArIChvZmZzZXRXaWR0aCAtIGNsaWVudFdpZHRoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoY3VycmVudFRyYW5zZm9ybSkge1xuICAgICAgICBzbGlkZVswXS5zdHlsZS50cmFuc2Zvcm0gPSBjdXJyZW50VHJhbnNmb3JtO1xuICAgICAgfVxuXG4gICAgICBpZiAoY3VycmVudFdlYktpdFRyYW5zZm9ybSkge1xuICAgICAgICBzbGlkZVswXS5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSBjdXJyZW50V2ViS2l0VHJhbnNmb3JtO1xuICAgICAgfVxuXG4gICAgICBpZiAocGFyYW1zLnJvdW5kTGVuZ3Rocykgc2xpZGVTaXplID0gTWF0aC5mbG9vcihzbGlkZVNpemUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzbGlkZVNpemUgPSAoc3dpcGVyU2l6ZSAtIChwYXJhbXMuc2xpZGVzUGVyVmlldyAtIDEpICogc3BhY2VCZXR3ZWVuKSAvIHBhcmFtcy5zbGlkZXNQZXJWaWV3O1xuICAgICAgaWYgKHBhcmFtcy5yb3VuZExlbmd0aHMpIHNsaWRlU2l6ZSA9IE1hdGguZmxvb3Ioc2xpZGVTaXplKTtcblxuICAgICAgaWYgKHNsaWRlc1tpXSkge1xuICAgICAgICBzbGlkZXNbaV0uc3R5bGVbZ2V0RGlyZWN0aW9uTGFiZWwoJ3dpZHRoJyldID0gYCR7c2xpZGVTaXplfXB4YDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc2xpZGVzW2ldKSB7XG4gICAgICBzbGlkZXNbaV0uc3dpcGVyU2xpZGVTaXplID0gc2xpZGVTaXplO1xuICAgIH1cblxuICAgIHNsaWRlc1NpemVzR3JpZC5wdXNoKHNsaWRlU2l6ZSk7XG5cbiAgICBpZiAocGFyYW1zLmNlbnRlcmVkU2xpZGVzKSB7XG4gICAgICBzbGlkZVBvc2l0aW9uID0gc2xpZGVQb3NpdGlvbiArIHNsaWRlU2l6ZSAvIDIgKyBwcmV2U2xpZGVTaXplIC8gMiArIHNwYWNlQmV0d2VlbjtcbiAgICAgIGlmIChwcmV2U2xpZGVTaXplID09PSAwICYmIGkgIT09IDApIHNsaWRlUG9zaXRpb24gPSBzbGlkZVBvc2l0aW9uIC0gc3dpcGVyU2l6ZSAvIDIgLSBzcGFjZUJldHdlZW47XG4gICAgICBpZiAoaSA9PT0gMCkgc2xpZGVQb3NpdGlvbiA9IHNsaWRlUG9zaXRpb24gLSBzd2lwZXJTaXplIC8gMiAtIHNwYWNlQmV0d2VlbjtcbiAgICAgIGlmIChNYXRoLmFicyhzbGlkZVBvc2l0aW9uKSA8IDEgLyAxMDAwKSBzbGlkZVBvc2l0aW9uID0gMDtcbiAgICAgIGlmIChwYXJhbXMucm91bmRMZW5ndGhzKSBzbGlkZVBvc2l0aW9uID0gTWF0aC5mbG9vcihzbGlkZVBvc2l0aW9uKTtcbiAgICAgIGlmIChpbmRleCAlIHBhcmFtcy5zbGlkZXNQZXJHcm91cCA9PT0gMCkgc25hcEdyaWQucHVzaChzbGlkZVBvc2l0aW9uKTtcbiAgICAgIHNsaWRlc0dyaWQucHVzaChzbGlkZVBvc2l0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHBhcmFtcy5yb3VuZExlbmd0aHMpIHNsaWRlUG9zaXRpb24gPSBNYXRoLmZsb29yKHNsaWRlUG9zaXRpb24pO1xuICAgICAgaWYgKChpbmRleCAtIE1hdGgubWluKHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyR3JvdXBTa2lwLCBpbmRleCkpICUgc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJHcm91cCA9PT0gMCkgc25hcEdyaWQucHVzaChzbGlkZVBvc2l0aW9uKTtcbiAgICAgIHNsaWRlc0dyaWQucHVzaChzbGlkZVBvc2l0aW9uKTtcbiAgICAgIHNsaWRlUG9zaXRpb24gPSBzbGlkZVBvc2l0aW9uICsgc2xpZGVTaXplICsgc3BhY2VCZXR3ZWVuO1xuICAgIH1cblxuICAgIHN3aXBlci52aXJ0dWFsU2l6ZSArPSBzbGlkZVNpemUgKyBzcGFjZUJldHdlZW47XG4gICAgcHJldlNsaWRlU2l6ZSA9IHNsaWRlU2l6ZTtcbiAgICBpbmRleCArPSAxO1xuICB9XG5cbiAgc3dpcGVyLnZpcnR1YWxTaXplID0gTWF0aC5tYXgoc3dpcGVyLnZpcnR1YWxTaXplLCBzd2lwZXJTaXplKSArIG9mZnNldEFmdGVyO1xuXG4gIGlmIChydGwgJiYgd3JvbmdSVEwgJiYgKHBhcmFtcy5lZmZlY3QgPT09ICdzbGlkZScgfHwgcGFyYW1zLmVmZmVjdCA9PT0gJ2NvdmVyZmxvdycpKSB7XG4gICAgJHdyYXBwZXJFbC5jc3Moe1xuICAgICAgd2lkdGg6IGAke3N3aXBlci52aXJ0dWFsU2l6ZSArIHBhcmFtcy5zcGFjZUJldHdlZW59cHhgXG4gICAgfSk7XG4gIH1cblxuICBpZiAocGFyYW1zLnNldFdyYXBwZXJTaXplKSB7XG4gICAgJHdyYXBwZXJFbC5jc3Moe1xuICAgICAgW2dldERpcmVjdGlvbkxhYmVsKCd3aWR0aCcpXTogYCR7c3dpcGVyLnZpcnR1YWxTaXplICsgcGFyYW1zLnNwYWNlQmV0d2Vlbn1weGBcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChncmlkRW5hYmxlZCkge1xuICAgIHN3aXBlci5ncmlkLnVwZGF0ZVdyYXBwZXJTaXplKHNsaWRlU2l6ZSwgc25hcEdyaWQsIGdldERpcmVjdGlvbkxhYmVsKTtcbiAgfSAvLyBSZW1vdmUgbGFzdCBncmlkIGVsZW1lbnRzIGRlcGVuZGluZyBvbiB3aWR0aFxuXG5cbiAgaWYgKCFwYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICBjb25zdCBuZXdTbGlkZXNHcmlkID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNuYXBHcmlkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBsZXQgc2xpZGVzR3JpZEl0ZW0gPSBzbmFwR3JpZFtpXTtcbiAgICAgIGlmIChwYXJhbXMucm91bmRMZW5ndGhzKSBzbGlkZXNHcmlkSXRlbSA9IE1hdGguZmxvb3Ioc2xpZGVzR3JpZEl0ZW0pO1xuXG4gICAgICBpZiAoc25hcEdyaWRbaV0gPD0gc3dpcGVyLnZpcnR1YWxTaXplIC0gc3dpcGVyU2l6ZSkge1xuICAgICAgICBuZXdTbGlkZXNHcmlkLnB1c2goc2xpZGVzR3JpZEl0ZW0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHNuYXBHcmlkID0gbmV3U2xpZGVzR3JpZDtcblxuICAgIGlmIChNYXRoLmZsb29yKHN3aXBlci52aXJ0dWFsU2l6ZSAtIHN3aXBlclNpemUpIC0gTWF0aC5mbG9vcihzbmFwR3JpZFtzbmFwR3JpZC5sZW5ndGggLSAxXSkgPiAxKSB7XG4gICAgICBzbmFwR3JpZC5wdXNoKHN3aXBlci52aXJ0dWFsU2l6ZSAtIHN3aXBlclNpemUpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzbmFwR3JpZC5sZW5ndGggPT09IDApIHNuYXBHcmlkID0gWzBdO1xuXG4gIGlmIChwYXJhbXMuc3BhY2VCZXR3ZWVuICE9PSAwKSB7XG4gICAgY29uc3Qga2V5ID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpICYmIHJ0bCA/ICdtYXJnaW5MZWZ0JyA6IGdldERpcmVjdGlvbkxhYmVsKCdtYXJnaW5SaWdodCcpO1xuICAgIHNsaWRlcy5maWx0ZXIoKF8sIHNsaWRlSW5kZXgpID0+IHtcbiAgICAgIGlmICghcGFyYW1zLmNzc01vZGUpIHJldHVybiB0cnVlO1xuXG4gICAgICBpZiAoc2xpZGVJbmRleCA9PT0gc2xpZGVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KS5jc3Moe1xuICAgICAgW2tleV06IGAke3NwYWNlQmV0d2Vlbn1weGBcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChwYXJhbXMuY2VudGVyZWRTbGlkZXMgJiYgcGFyYW1zLmNlbnRlcmVkU2xpZGVzQm91bmRzKSB7XG4gICAgbGV0IGFsbFNsaWRlc1NpemUgPSAwO1xuICAgIHNsaWRlc1NpemVzR3JpZC5mb3JFYWNoKHNsaWRlU2l6ZVZhbHVlID0+IHtcbiAgICAgIGFsbFNsaWRlc1NpemUgKz0gc2xpZGVTaXplVmFsdWUgKyAocGFyYW1zLnNwYWNlQmV0d2VlbiA/IHBhcmFtcy5zcGFjZUJldHdlZW4gOiAwKTtcbiAgICB9KTtcbiAgICBhbGxTbGlkZXNTaXplIC09IHBhcmFtcy5zcGFjZUJldHdlZW47XG4gICAgY29uc3QgbWF4U25hcCA9IGFsbFNsaWRlc1NpemUgLSBzd2lwZXJTaXplO1xuICAgIHNuYXBHcmlkID0gc25hcEdyaWQubWFwKHNuYXAgPT4ge1xuICAgICAgaWYgKHNuYXAgPCAwKSByZXR1cm4gLW9mZnNldEJlZm9yZTtcbiAgICAgIGlmIChzbmFwID4gbWF4U25hcCkgcmV0dXJuIG1heFNuYXAgKyBvZmZzZXRBZnRlcjtcbiAgICAgIHJldHVybiBzbmFwO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5jZW50ZXJJbnN1ZmZpY2llbnRTbGlkZXMpIHtcbiAgICBsZXQgYWxsU2xpZGVzU2l6ZSA9IDA7XG4gICAgc2xpZGVzU2l6ZXNHcmlkLmZvckVhY2goc2xpZGVTaXplVmFsdWUgPT4ge1xuICAgICAgYWxsU2xpZGVzU2l6ZSArPSBzbGlkZVNpemVWYWx1ZSArIChwYXJhbXMuc3BhY2VCZXR3ZWVuID8gcGFyYW1zLnNwYWNlQmV0d2VlbiA6IDApO1xuICAgIH0pO1xuICAgIGFsbFNsaWRlc1NpemUgLT0gcGFyYW1zLnNwYWNlQmV0d2VlbjtcblxuICAgIGlmIChhbGxTbGlkZXNTaXplIDwgc3dpcGVyU2l6ZSkge1xuICAgICAgY29uc3QgYWxsU2xpZGVzT2Zmc2V0ID0gKHN3aXBlclNpemUgLSBhbGxTbGlkZXNTaXplKSAvIDI7XG4gICAgICBzbmFwR3JpZC5mb3JFYWNoKChzbmFwLCBzbmFwSW5kZXgpID0+IHtcbiAgICAgICAgc25hcEdyaWRbc25hcEluZGV4XSA9IHNuYXAgLSBhbGxTbGlkZXNPZmZzZXQ7XG4gICAgICB9KTtcbiAgICAgIHNsaWRlc0dyaWQuZm9yRWFjaCgoc25hcCwgc25hcEluZGV4KSA9PiB7XG4gICAgICAgIHNsaWRlc0dyaWRbc25hcEluZGV4XSA9IHNuYXAgKyBhbGxTbGlkZXNPZmZzZXQ7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBPYmplY3QuYXNzaWduKHN3aXBlciwge1xuICAgIHNsaWRlcyxcbiAgICBzbmFwR3JpZCxcbiAgICBzbGlkZXNHcmlkLFxuICAgIHNsaWRlc1NpemVzR3JpZFxuICB9KTtcblxuICBpZiAocGFyYW1zLmNlbnRlcmVkU2xpZGVzICYmIHBhcmFtcy5jc3NNb2RlICYmICFwYXJhbXMuY2VudGVyZWRTbGlkZXNCb3VuZHMpIHtcbiAgICBzZXRDU1NQcm9wZXJ0eShzd2lwZXIud3JhcHBlckVsLCAnLS1zd2lwZXItY2VudGVyZWQtb2Zmc2V0LWJlZm9yZScsIGAkey1zbmFwR3JpZFswXX1weGApO1xuICAgIHNldENTU1Byb3BlcnR5KHN3aXBlci53cmFwcGVyRWwsICctLXN3aXBlci1jZW50ZXJlZC1vZmZzZXQtYWZ0ZXInLCBgJHtzd2lwZXIuc2l6ZSAvIDIgLSBzbGlkZXNTaXplc0dyaWRbc2xpZGVzU2l6ZXNHcmlkLmxlbmd0aCAtIDFdIC8gMn1weGApO1xuICAgIGNvbnN0IGFkZFRvU25hcEdyaWQgPSAtc3dpcGVyLnNuYXBHcmlkWzBdO1xuICAgIGNvbnN0IGFkZFRvU2xpZGVzR3JpZCA9IC1zd2lwZXIuc2xpZGVzR3JpZFswXTtcbiAgICBzd2lwZXIuc25hcEdyaWQgPSBzd2lwZXIuc25hcEdyaWQubWFwKHYgPT4gdiArIGFkZFRvU25hcEdyaWQpO1xuICAgIHN3aXBlci5zbGlkZXNHcmlkID0gc3dpcGVyLnNsaWRlc0dyaWQubWFwKHYgPT4gdiArIGFkZFRvU2xpZGVzR3JpZCk7XG4gIH1cblxuICBpZiAoc2xpZGVzTGVuZ3RoICE9PSBwcmV2aW91c1NsaWRlc0xlbmd0aCkge1xuICAgIHN3aXBlci5lbWl0KCdzbGlkZXNMZW5ndGhDaGFuZ2UnKTtcbiAgfVxuXG4gIGlmIChzbmFwR3JpZC5sZW5ndGggIT09IHByZXZpb3VzU25hcEdyaWRMZW5ndGgpIHtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy53YXRjaE92ZXJmbG93KSBzd2lwZXIuY2hlY2tPdmVyZmxvdygpO1xuICAgIHN3aXBlci5lbWl0KCdzbmFwR3JpZExlbmd0aENoYW5nZScpO1xuICB9XG5cbiAgaWYgKHNsaWRlc0dyaWQubGVuZ3RoICE9PSBwcmV2aW91c1NsaWRlc0dyaWRMZW5ndGgpIHtcbiAgICBzd2lwZXIuZW1pdCgnc2xpZGVzR3JpZExlbmd0aENoYW5nZScpO1xuICB9XG5cbiAgaWYgKHBhcmFtcy53YXRjaFNsaWRlc1Byb2dyZXNzKSB7XG4gICAgc3dpcGVyLnVwZGF0ZVNsaWRlc09mZnNldCgpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlU2xpZGVzQ2xhc3NlcygpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3Qge1xuICAgIHNsaWRlcyxcbiAgICBwYXJhbXMsXG4gICAgJHdyYXBwZXJFbCxcbiAgICBhY3RpdmVJbmRleCxcbiAgICByZWFsSW5kZXhcbiAgfSA9IHN3aXBlcjtcbiAgY29uc3QgaXNWaXJ0dWFsID0gc3dpcGVyLnZpcnR1YWwgJiYgcGFyYW1zLnZpcnR1YWwuZW5hYmxlZDtcbiAgc2xpZGVzLnJlbW92ZUNsYXNzKGAke3BhcmFtcy5zbGlkZUFjdGl2ZUNsYXNzfSAke3BhcmFtcy5zbGlkZU5leHRDbGFzc30gJHtwYXJhbXMuc2xpZGVQcmV2Q2xhc3N9ICR7cGFyYW1zLnNsaWRlRHVwbGljYXRlQWN0aXZlQ2xhc3N9ICR7cGFyYW1zLnNsaWRlRHVwbGljYXRlTmV4dENsYXNzfSAke3BhcmFtcy5zbGlkZUR1cGxpY2F0ZVByZXZDbGFzc31gKTtcbiAgbGV0IGFjdGl2ZVNsaWRlO1xuXG4gIGlmIChpc1ZpcnR1YWwpIHtcbiAgICBhY3RpdmVTbGlkZSA9IHN3aXBlci4kd3JhcHBlckVsLmZpbmQoYC4ke3BhcmFtcy5zbGlkZUNsYXNzfVtkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIiR7YWN0aXZlSW5kZXh9XCJdYCk7XG4gIH0gZWxzZSB7XG4gICAgYWN0aXZlU2xpZGUgPSBzbGlkZXMuZXEoYWN0aXZlSW5kZXgpO1xuICB9IC8vIEFjdGl2ZSBjbGFzc2VzXG5cblxuICBhY3RpdmVTbGlkZS5hZGRDbGFzcyhwYXJhbXMuc2xpZGVBY3RpdmVDbGFzcyk7XG5cbiAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgLy8gRHVwbGljYXRlIHRvIGFsbCBsb29wZWQgc2xpZGVzXG4gICAgaWYgKGFjdGl2ZVNsaWRlLmhhc0NsYXNzKHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSkge1xuICAgICAgJHdyYXBwZXJFbC5jaGlsZHJlbihgLiR7cGFyYW1zLnNsaWRlQ2xhc3N9Om5vdCguJHtwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzc30pW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJHtyZWFsSW5kZXh9XCJdYCkuYWRkQ2xhc3MocGFyYW1zLnNsaWRlRHVwbGljYXRlQWN0aXZlQ2xhc3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkd3JhcHBlckVsLmNoaWxkcmVuKGAuJHtwYXJhbXMuc2xpZGVDbGFzc30uJHtwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzc31bZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XCIke3JlYWxJbmRleH1cIl1gKS5hZGRDbGFzcyhwYXJhbXMuc2xpZGVEdXBsaWNhdGVBY3RpdmVDbGFzcyk7XG4gICAgfVxuICB9IC8vIE5leHQgU2xpZGVcblxuXG4gIGxldCBuZXh0U2xpZGUgPSBhY3RpdmVTbGlkZS5uZXh0QWxsKGAuJHtwYXJhbXMuc2xpZGVDbGFzc31gKS5lcSgwKS5hZGRDbGFzcyhwYXJhbXMuc2xpZGVOZXh0Q2xhc3MpO1xuXG4gIGlmIChwYXJhbXMubG9vcCAmJiBuZXh0U2xpZGUubGVuZ3RoID09PSAwKSB7XG4gICAgbmV4dFNsaWRlID0gc2xpZGVzLmVxKDApO1xuICAgIG5leHRTbGlkZS5hZGRDbGFzcyhwYXJhbXMuc2xpZGVOZXh0Q2xhc3MpO1xuICB9IC8vIFByZXYgU2xpZGVcblxuXG4gIGxldCBwcmV2U2xpZGUgPSBhY3RpdmVTbGlkZS5wcmV2QWxsKGAuJHtwYXJhbXMuc2xpZGVDbGFzc31gKS5lcSgwKS5hZGRDbGFzcyhwYXJhbXMuc2xpZGVQcmV2Q2xhc3MpO1xuXG4gIGlmIChwYXJhbXMubG9vcCAmJiBwcmV2U2xpZGUubGVuZ3RoID09PSAwKSB7XG4gICAgcHJldlNsaWRlID0gc2xpZGVzLmVxKC0xKTtcbiAgICBwcmV2U2xpZGUuYWRkQ2xhc3MocGFyYW1zLnNsaWRlUHJldkNsYXNzKTtcbiAgfVxuXG4gIGlmIChwYXJhbXMubG9vcCkge1xuICAgIC8vIER1cGxpY2F0ZSB0byBhbGwgbG9vcGVkIHNsaWRlc1xuICAgIGlmIChuZXh0U2xpZGUuaGFzQ2xhc3MocGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MpKSB7XG4gICAgICAkd3JhcHBlckVsLmNoaWxkcmVuKGAuJHtwYXJhbXMuc2xpZGVDbGFzc306bm90KC4ke3BhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzfSlbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XCIke25leHRTbGlkZS5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpfVwiXWApLmFkZENsYXNzKHBhcmFtcy5zbGlkZUR1cGxpY2F0ZU5leHRDbGFzcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICR3cmFwcGVyRWwuY2hpbGRyZW4oYC4ke3BhcmFtcy5zbGlkZUNsYXNzfS4ke3BhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzfVtkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIiR7bmV4dFNsaWRlLmF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4Jyl9XCJdYCkuYWRkQ2xhc3MocGFyYW1zLnNsaWRlRHVwbGljYXRlTmV4dENsYXNzKTtcbiAgICB9XG5cbiAgICBpZiAocHJldlNsaWRlLmhhc0NsYXNzKHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSkge1xuICAgICAgJHdyYXBwZXJFbC5jaGlsZHJlbihgLiR7cGFyYW1zLnNsaWRlQ2xhc3N9Om5vdCguJHtwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzc30pW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJHtwcmV2U2xpZGUuYXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKX1cIl1gKS5hZGRDbGFzcyhwYXJhbXMuc2xpZGVEdXBsaWNhdGVQcmV2Q2xhc3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkd3JhcHBlckVsLmNoaWxkcmVuKGAuJHtwYXJhbXMuc2xpZGVDbGFzc30uJHtwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzc31bZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XCIke3ByZXZTbGlkZS5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpfVwiXWApLmFkZENsYXNzKHBhcmFtcy5zbGlkZUR1cGxpY2F0ZVByZXZDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgc3dpcGVyLmVtaXRTbGlkZXNDbGFzc2VzKCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlU2xpZGVzT2Zmc2V0KCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCBzbGlkZXMgPSBzd2lwZXIuc2xpZGVzO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgc2xpZGVzW2ldLnN3aXBlclNsaWRlT2Zmc2V0ID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gc2xpZGVzW2ldLm9mZnNldExlZnQgOiBzbGlkZXNbaV0ub2Zmc2V0VG9wO1xuICB9XG59IiwiaW1wb3J0ICQgZnJvbSAnLi4vLi4vc2hhcmVkL2RvbS5qcyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGRhdGVTbGlkZXNQcm9ncmVzcyh0cmFuc2xhdGUgPSB0aGlzICYmIHRoaXMudHJhbnNsYXRlIHx8IDApIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3QgcGFyYW1zID0gc3dpcGVyLnBhcmFtcztcbiAgY29uc3Qge1xuICAgIHNsaWRlcyxcbiAgICBydGxUcmFuc2xhdGU6IHJ0bFxuICB9ID0gc3dpcGVyO1xuICBpZiAoc2xpZGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICBpZiAodHlwZW9mIHNsaWRlc1swXS5zd2lwZXJTbGlkZU9mZnNldCA9PT0gJ3VuZGVmaW5lZCcpIHN3aXBlci51cGRhdGVTbGlkZXNPZmZzZXQoKTtcbiAgbGV0IG9mZnNldENlbnRlciA9IC10cmFuc2xhdGU7XG4gIGlmIChydGwpIG9mZnNldENlbnRlciA9IHRyYW5zbGF0ZTsgLy8gVmlzaWJsZSBTbGlkZXNcblxuICBzbGlkZXMucmVtb3ZlQ2xhc3MocGFyYW1zLnNsaWRlVmlzaWJsZUNsYXNzKTtcbiAgc3dpcGVyLnZpc2libGVTbGlkZXNJbmRleGVzID0gW107XG4gIHN3aXBlci52aXNpYmxlU2xpZGVzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBzbGlkZSA9IHNsaWRlc1tpXTtcbiAgICBsZXQgc2xpZGVPZmZzZXQgPSBzbGlkZS5zd2lwZXJTbGlkZU9mZnNldDtcblxuICAgIGlmIChwYXJhbXMuY3NzTW9kZSAmJiBwYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgIHNsaWRlT2Zmc2V0IC09IHNsaWRlc1swXS5zd2lwZXJTbGlkZU9mZnNldDtcbiAgICB9XG5cbiAgICBjb25zdCBzbGlkZVByb2dyZXNzID0gKG9mZnNldENlbnRlciArIChwYXJhbXMuY2VudGVyZWRTbGlkZXMgPyBzd2lwZXIubWluVHJhbnNsYXRlKCkgOiAwKSAtIHNsaWRlT2Zmc2V0KSAvIChzbGlkZS5zd2lwZXJTbGlkZVNpemUgKyBwYXJhbXMuc3BhY2VCZXR3ZWVuKTtcbiAgICBjb25zdCBzbGlkZUJlZm9yZSA9IC0ob2Zmc2V0Q2VudGVyIC0gc2xpZGVPZmZzZXQpO1xuICAgIGNvbnN0IHNsaWRlQWZ0ZXIgPSBzbGlkZUJlZm9yZSArIHN3aXBlci5zbGlkZXNTaXplc0dyaWRbaV07XG4gICAgY29uc3QgaXNWaXNpYmxlID0gc2xpZGVCZWZvcmUgPj0gMCAmJiBzbGlkZUJlZm9yZSA8IHN3aXBlci5zaXplIC0gMSB8fCBzbGlkZUFmdGVyID4gMSAmJiBzbGlkZUFmdGVyIDw9IHN3aXBlci5zaXplIHx8IHNsaWRlQmVmb3JlIDw9IDAgJiYgc2xpZGVBZnRlciA+PSBzd2lwZXIuc2l6ZTtcblxuICAgIGlmIChpc1Zpc2libGUpIHtcbiAgICAgIHN3aXBlci52aXNpYmxlU2xpZGVzLnB1c2goc2xpZGUpO1xuICAgICAgc3dpcGVyLnZpc2libGVTbGlkZXNJbmRleGVzLnB1c2goaSk7XG4gICAgICBzbGlkZXMuZXEoaSkuYWRkQ2xhc3MocGFyYW1zLnNsaWRlVmlzaWJsZUNsYXNzKTtcbiAgICB9XG5cbiAgICBzbGlkZS5wcm9ncmVzcyA9IHJ0bCA/IC1zbGlkZVByb2dyZXNzIDogc2xpZGVQcm9ncmVzcztcbiAgfVxuXG4gIHN3aXBlci52aXNpYmxlU2xpZGVzID0gJChzd2lwZXIudmlzaWJsZVNsaWRlcyk7XG59IiwiaW1wb3J0IGNsYXNzZXNUb1NlbGVjdG9yIGZyb20gJy4uLy4uL3NoYXJlZC9jbGFzc2VzLXRvLXNlbGVjdG9yLmpzJztcbmltcG9ydCAkIGZyb20gJy4uLy4uL3NoYXJlZC9kb20uanMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQTExeSh7XG4gIHN3aXBlcixcbiAgZXh0ZW5kUGFyYW1zLFxuICBvblxufSkge1xuICBleHRlbmRQYXJhbXMoe1xuICAgIGExMXk6IHtcbiAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICBub3RpZmljYXRpb25DbGFzczogJ3N3aXBlci1ub3RpZmljYXRpb24nLFxuICAgICAgcHJldlNsaWRlTWVzc2FnZTogJ1ByZXZpb3VzIHNsaWRlJyxcbiAgICAgIG5leHRTbGlkZU1lc3NhZ2U6ICdOZXh0IHNsaWRlJyxcbiAgICAgIGZpcnN0U2xpZGVNZXNzYWdlOiAnVGhpcyBpcyB0aGUgZmlyc3Qgc2xpZGUnLFxuICAgICAgbGFzdFNsaWRlTWVzc2FnZTogJ1RoaXMgaXMgdGhlIGxhc3Qgc2xpZGUnLFxuICAgICAgcGFnaW5hdGlvbkJ1bGxldE1lc3NhZ2U6ICdHbyB0byBzbGlkZSB7e2luZGV4fX0nLFxuICAgICAgc2xpZGVMYWJlbE1lc3NhZ2U6ICd7e2luZGV4fX0gLyB7e3NsaWRlc0xlbmd0aH19JyxcbiAgICAgIGNvbnRhaW5lck1lc3NhZ2U6IG51bGwsXG4gICAgICBjb250YWluZXJSb2xlRGVzY3JpcHRpb25NZXNzYWdlOiBudWxsLFxuICAgICAgaXRlbVJvbGVEZXNjcmlwdGlvbk1lc3NhZ2U6IG51bGwsXG4gICAgICBzbGlkZVJvbGU6ICdncm91cCdcbiAgICB9XG4gIH0pO1xuICBsZXQgbGl2ZVJlZ2lvbiA9IG51bGw7XG5cbiAgZnVuY3Rpb24gbm90aWZ5KG1lc3NhZ2UpIHtcbiAgICBjb25zdCBub3RpZmljYXRpb24gPSBsaXZlUmVnaW9uO1xuICAgIGlmIChub3RpZmljYXRpb24ubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgbm90aWZpY2F0aW9uLmh0bWwoJycpO1xuICAgIG5vdGlmaWNhdGlvbi5odG1sKG1lc3NhZ2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UmFuZG9tTnVtYmVyKHNpemUgPSAxNikge1xuICAgIGNvbnN0IHJhbmRvbUNoYXIgPSAoKSA9PiBNYXRoLnJvdW5kKDE2ICogTWF0aC5yYW5kb20oKSkudG9TdHJpbmcoMTYpO1xuXG4gICAgcmV0dXJuICd4Jy5yZXBlYXQoc2l6ZSkucmVwbGFjZSgveC9nLCByYW5kb21DaGFyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1ha2VFbEZvY3VzYWJsZSgkZWwpIHtcbiAgICAkZWwuYXR0cigndGFiSW5kZXgnLCAnMCcpO1xuICB9XG5cbiAgZnVuY3Rpb24gbWFrZUVsTm90Rm9jdXNhYmxlKCRlbCkge1xuICAgICRlbC5hdHRyKCd0YWJJbmRleCcsICctMScpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkRWxSb2xlKCRlbCwgcm9sZSkge1xuICAgICRlbC5hdHRyKCdyb2xlJywgcm9sZSk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRFbFJvbGVEZXNjcmlwdGlvbigkZWwsIGRlc2NyaXB0aW9uKSB7XG4gICAgJGVsLmF0dHIoJ2FyaWEtcm9sZWRlc2NyaXB0aW9uJywgZGVzY3JpcHRpb24pO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkRWxDb250cm9scygkZWwsIGNvbnRyb2xzKSB7XG4gICAgJGVsLmF0dHIoJ2FyaWEtY29udHJvbHMnLCBjb250cm9scyk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRFbExhYmVsKCRlbCwgbGFiZWwpIHtcbiAgICAkZWwuYXR0cignYXJpYS1sYWJlbCcsIGxhYmVsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZEVsSWQoJGVsLCBpZCkge1xuICAgICRlbC5hdHRyKCdpZCcsIGlkKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZEVsTGl2ZSgkZWwsIGxpdmUpIHtcbiAgICAkZWwuYXR0cignYXJpYS1saXZlJywgbGl2ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBkaXNhYmxlRWwoJGVsKSB7XG4gICAgJGVsLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCB0cnVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVuYWJsZUVsKCRlbCkge1xuICAgICRlbC5hdHRyKCdhcmlhLWRpc2FibGVkJywgZmFsc2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25FbnRlck9yU3BhY2VLZXkoZSkge1xuICAgIGlmIChlLmtleUNvZGUgIT09IDEzICYmIGUua2V5Q29kZSAhPT0gMzIpIHJldHVybjtcbiAgICBjb25zdCBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLmExMXk7XG4gICAgY29uc3QgJHRhcmdldEVsID0gJChlLnRhcmdldCk7XG5cbiAgICBpZiAoc3dpcGVyLm5hdmlnYXRpb24gJiYgc3dpcGVyLm5hdmlnYXRpb24uJG5leHRFbCAmJiAkdGFyZ2V0RWwuaXMoc3dpcGVyLm5hdmlnYXRpb24uJG5leHRFbCkpIHtcbiAgICAgIGlmICghKHN3aXBlci5pc0VuZCAmJiAhc3dpcGVyLnBhcmFtcy5sb29wKSkge1xuICAgICAgICBzd2lwZXIuc2xpZGVOZXh0KCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzd2lwZXIuaXNFbmQpIHtcbiAgICAgICAgbm90aWZ5KHBhcmFtcy5sYXN0U2xpZGVNZXNzYWdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vdGlmeShwYXJhbXMubmV4dFNsaWRlTWVzc2FnZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN3aXBlci5uYXZpZ2F0aW9uICYmIHN3aXBlci5uYXZpZ2F0aW9uLiRwcmV2RWwgJiYgJHRhcmdldEVsLmlzKHN3aXBlci5uYXZpZ2F0aW9uLiRwcmV2RWwpKSB7XG4gICAgICBpZiAoIShzd2lwZXIuaXNCZWdpbm5pbmcgJiYgIXN3aXBlci5wYXJhbXMubG9vcCkpIHtcbiAgICAgICAgc3dpcGVyLnNsaWRlUHJldigpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3dpcGVyLmlzQmVnaW5uaW5nKSB7XG4gICAgICAgIG5vdGlmeShwYXJhbXMuZmlyc3RTbGlkZU1lc3NhZ2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm90aWZ5KHBhcmFtcy5wcmV2U2xpZGVNZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3dpcGVyLnBhZ2luYXRpb24gJiYgJHRhcmdldEVsLmlzKGNsYXNzZXNUb1NlbGVjdG9yKHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbi5idWxsZXRDbGFzcykpKSB7XG4gICAgICAkdGFyZ2V0RWxbMF0uY2xpY2soKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVOYXZpZ2F0aW9uKCkge1xuICAgIGlmIChzd2lwZXIucGFyYW1zLmxvb3AgfHwgIXN3aXBlci5uYXZpZ2F0aW9uKSByZXR1cm47XG4gICAgY29uc3Qge1xuICAgICAgJG5leHRFbCxcbiAgICAgICRwcmV2RWxcbiAgICB9ID0gc3dpcGVyLm5hdmlnYXRpb247XG5cbiAgICBpZiAoJHByZXZFbCAmJiAkcHJldkVsLmxlbmd0aCA+IDApIHtcbiAgICAgIGlmIChzd2lwZXIuaXNCZWdpbm5pbmcpIHtcbiAgICAgICAgZGlzYWJsZUVsKCRwcmV2RWwpO1xuICAgICAgICBtYWtlRWxOb3RGb2N1c2FibGUoJHByZXZFbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbmFibGVFbCgkcHJldkVsKTtcbiAgICAgICAgbWFrZUVsRm9jdXNhYmxlKCRwcmV2RWwpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICgkbmV4dEVsICYmICRuZXh0RWwubGVuZ3RoID4gMCkge1xuICAgICAgaWYgKHN3aXBlci5pc0VuZCkge1xuICAgICAgICBkaXNhYmxlRWwoJG5leHRFbCk7XG4gICAgICAgIG1ha2VFbE5vdEZvY3VzYWJsZSgkbmV4dEVsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVuYWJsZUVsKCRuZXh0RWwpO1xuICAgICAgICBtYWtlRWxGb2N1c2FibGUoJG5leHRFbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFzUGFnaW5hdGlvbigpIHtcbiAgICByZXR1cm4gc3dpcGVyLnBhZ2luYXRpb24gJiYgc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uLmNsaWNrYWJsZSAmJiBzd2lwZXIucGFnaW5hdGlvbi5idWxsZXRzICYmIHN3aXBlci5wYWdpbmF0aW9uLmJ1bGxldHMubGVuZ3RoO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlUGFnaW5hdGlvbigpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLmExMXk7XG5cbiAgICBpZiAoaGFzUGFnaW5hdGlvbigpKSB7XG4gICAgICBzd2lwZXIucGFnaW5hdGlvbi5idWxsZXRzLmVhY2goYnVsbGV0RWwgPT4ge1xuICAgICAgICBjb25zdCAkYnVsbGV0RWwgPSAkKGJ1bGxldEVsKTtcbiAgICAgICAgbWFrZUVsRm9jdXNhYmxlKCRidWxsZXRFbCk7XG5cbiAgICAgICAgaWYgKCFzd2lwZXIucGFyYW1zLnBhZ2luYXRpb24ucmVuZGVyQnVsbGV0KSB7XG4gICAgICAgICAgYWRkRWxSb2xlKCRidWxsZXRFbCwgJ2J1dHRvbicpO1xuICAgICAgICAgIGFkZEVsTGFiZWwoJGJ1bGxldEVsLCBwYXJhbXMucGFnaW5hdGlvbkJ1bGxldE1lc3NhZ2UucmVwbGFjZSgvXFx7XFx7aW5kZXhcXH1cXH0vLCAkYnVsbGV0RWwuaW5kZXgoKSArIDEpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgaW5pdE5hdkVsID0gKCRlbCwgd3JhcHBlcklkLCBtZXNzYWdlKSA9PiB7XG4gICAgbWFrZUVsRm9jdXNhYmxlKCRlbCk7XG5cbiAgICBpZiAoJGVsWzBdLnRhZ05hbWUgIT09ICdCVVRUT04nKSB7XG4gICAgICBhZGRFbFJvbGUoJGVsLCAnYnV0dG9uJyk7XG4gICAgICAkZWwub24oJ2tleWRvd24nLCBvbkVudGVyT3JTcGFjZUtleSk7XG4gICAgfVxuXG4gICAgYWRkRWxMYWJlbCgkZWwsIG1lc3NhZ2UpO1xuICAgIGFkZEVsQ29udHJvbHMoJGVsLCB3cmFwcGVySWQpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgY29uc3QgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy5hMTF5O1xuICAgIHN3aXBlci4kZWwuYXBwZW5kKGxpdmVSZWdpb24pOyAvLyBDb250YWluZXJcblxuICAgIGNvbnN0ICRjb250YWluZXJFbCA9IHN3aXBlci4kZWw7XG5cbiAgICBpZiAocGFyYW1zLmNvbnRhaW5lclJvbGVEZXNjcmlwdGlvbk1lc3NhZ2UpIHtcbiAgICAgIGFkZEVsUm9sZURlc2NyaXB0aW9uKCRjb250YWluZXJFbCwgcGFyYW1zLmNvbnRhaW5lclJvbGVEZXNjcmlwdGlvbk1lc3NhZ2UpO1xuICAgIH1cblxuICAgIGlmIChwYXJhbXMuY29udGFpbmVyTWVzc2FnZSkge1xuICAgICAgYWRkRWxMYWJlbCgkY29udGFpbmVyRWwsIHBhcmFtcy5jb250YWluZXJNZXNzYWdlKTtcbiAgICB9IC8vIFdyYXBwZXJcblxuXG4gICAgY29uc3QgJHdyYXBwZXJFbCA9IHN3aXBlci4kd3JhcHBlckVsO1xuICAgIGNvbnN0IHdyYXBwZXJJZCA9ICR3cmFwcGVyRWwuYXR0cignaWQnKSB8fCBgc3dpcGVyLXdyYXBwZXItJHtnZXRSYW5kb21OdW1iZXIoMTYpfWA7XG4gICAgY29uc3QgbGl2ZSA9IHN3aXBlci5wYXJhbXMuYXV0b3BsYXkgJiYgc3dpcGVyLnBhcmFtcy5hdXRvcGxheS5lbmFibGVkID8gJ29mZicgOiAncG9saXRlJztcbiAgICBhZGRFbElkKCR3cmFwcGVyRWwsIHdyYXBwZXJJZCk7XG4gICAgYWRkRWxMaXZlKCR3cmFwcGVyRWwsIGxpdmUpOyAvLyBTbGlkZVxuXG4gICAgaWYgKHBhcmFtcy5pdGVtUm9sZURlc2NyaXB0aW9uTWVzc2FnZSkge1xuICAgICAgYWRkRWxSb2xlRGVzY3JpcHRpb24oJChzd2lwZXIuc2xpZGVzKSwgcGFyYW1zLml0ZW1Sb2xlRGVzY3JpcHRpb25NZXNzYWdlKTtcbiAgICB9XG5cbiAgICBhZGRFbFJvbGUoJChzd2lwZXIuc2xpZGVzKSwgcGFyYW1zLnNsaWRlUm9sZSk7XG4gICAgY29uc3Qgc2xpZGVzTGVuZ3RoID0gc3dpcGVyLnBhcmFtcy5sb29wID8gc3dpcGVyLnNsaWRlcy5maWx0ZXIoZWwgPT4gIWVsLmNsYXNzTGlzdC5jb250YWlucyhzd2lwZXIucGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MpKS5sZW5ndGggOiBzd2lwZXIuc2xpZGVzLmxlbmd0aDtcbiAgICBzd2lwZXIuc2xpZGVzLmVhY2goKHNsaWRlRWwsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCAkc2xpZGVFbCA9ICQoc2xpZGVFbCk7XG4gICAgICBjb25zdCBzbGlkZUluZGV4ID0gc3dpcGVyLnBhcmFtcy5sb29wID8gcGFyc2VJbnQoJHNsaWRlRWwuYXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKSwgMTApIDogaW5kZXg7XG4gICAgICBjb25zdCBhcmlhTGFiZWxNZXNzYWdlID0gcGFyYW1zLnNsaWRlTGFiZWxNZXNzYWdlLnJlcGxhY2UoL1xce1xce2luZGV4XFx9XFx9Lywgc2xpZGVJbmRleCArIDEpLnJlcGxhY2UoL1xce1xce3NsaWRlc0xlbmd0aFxcfVxcfS8sIHNsaWRlc0xlbmd0aCk7XG4gICAgICBhZGRFbExhYmVsKCRzbGlkZUVsLCBhcmlhTGFiZWxNZXNzYWdlKTtcbiAgICB9KTsgLy8gTmF2aWdhdGlvblxuXG4gICAgbGV0ICRuZXh0RWw7XG4gICAgbGV0ICRwcmV2RWw7XG5cbiAgICBpZiAoc3dpcGVyLm5hdmlnYXRpb24gJiYgc3dpcGVyLm5hdmlnYXRpb24uJG5leHRFbCkge1xuICAgICAgJG5leHRFbCA9IHN3aXBlci5uYXZpZ2F0aW9uLiRuZXh0RWw7XG4gICAgfVxuXG4gICAgaWYgKHN3aXBlci5uYXZpZ2F0aW9uICYmIHN3aXBlci5uYXZpZ2F0aW9uLiRwcmV2RWwpIHtcbiAgICAgICRwcmV2RWwgPSBzd2lwZXIubmF2aWdhdGlvbi4kcHJldkVsO1xuICAgIH1cblxuICAgIGlmICgkbmV4dEVsICYmICRuZXh0RWwubGVuZ3RoKSB7XG4gICAgICBpbml0TmF2RWwoJG5leHRFbCwgd3JhcHBlcklkLCBwYXJhbXMubmV4dFNsaWRlTWVzc2FnZSk7XG4gICAgfVxuXG4gICAgaWYgKCRwcmV2RWwgJiYgJHByZXZFbC5sZW5ndGgpIHtcbiAgICAgIGluaXROYXZFbCgkcHJldkVsLCB3cmFwcGVySWQsIHBhcmFtcy5wcmV2U2xpZGVNZXNzYWdlKTtcbiAgICB9IC8vIFBhZ2luYXRpb25cblxuXG4gICAgaWYgKGhhc1BhZ2luYXRpb24oKSkge1xuICAgICAgc3dpcGVyLnBhZ2luYXRpb24uJGVsLm9uKCdrZXlkb3duJywgY2xhc3Nlc1RvU2VsZWN0b3Ioc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uLmJ1bGxldENsYXNzKSwgb25FbnRlck9yU3BhY2VLZXkpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgaWYgKGxpdmVSZWdpb24gJiYgbGl2ZVJlZ2lvbi5sZW5ndGggPiAwKSBsaXZlUmVnaW9uLnJlbW92ZSgpO1xuICAgIGxldCAkbmV4dEVsO1xuICAgIGxldCAkcHJldkVsO1xuXG4gICAgaWYgKHN3aXBlci5uYXZpZ2F0aW9uICYmIHN3aXBlci5uYXZpZ2F0aW9uLiRuZXh0RWwpIHtcbiAgICAgICRuZXh0RWwgPSBzd2lwZXIubmF2aWdhdGlvbi4kbmV4dEVsO1xuICAgIH1cblxuICAgIGlmIChzd2lwZXIubmF2aWdhdGlvbiAmJiBzd2lwZXIubmF2aWdhdGlvbi4kcHJldkVsKSB7XG4gICAgICAkcHJldkVsID0gc3dpcGVyLm5hdmlnYXRpb24uJHByZXZFbDtcbiAgICB9XG5cbiAgICBpZiAoJG5leHRFbCkge1xuICAgICAgJG5leHRFbC5vZmYoJ2tleWRvd24nLCBvbkVudGVyT3JTcGFjZUtleSk7XG4gICAgfVxuXG4gICAgaWYgKCRwcmV2RWwpIHtcbiAgICAgICRwcmV2RWwub2ZmKCdrZXlkb3duJywgb25FbnRlck9yU3BhY2VLZXkpO1xuICAgIH0gLy8gUGFnaW5hdGlvblxuXG5cbiAgICBpZiAoaGFzUGFnaW5hdGlvbigpKSB7XG4gICAgICBzd2lwZXIucGFnaW5hdGlvbi4kZWwub2ZmKCdrZXlkb3duJywgY2xhc3Nlc1RvU2VsZWN0b3Ioc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uLmJ1bGxldENsYXNzKSwgb25FbnRlck9yU3BhY2VLZXkpO1xuICAgIH1cbiAgfVxuXG4gIG9uKCdiZWZvcmVJbml0JywgKCkgPT4ge1xuICAgIGxpdmVSZWdpb24gPSAkKGA8c3BhbiBjbGFzcz1cIiR7c3dpcGVyLnBhcmFtcy5hMTF5Lm5vdGlmaWNhdGlvbkNsYXNzfVwiIGFyaWEtbGl2ZT1cImFzc2VydGl2ZVwiIGFyaWEtYXRvbWljPVwidHJ1ZVwiPjwvc3Bhbj5gKTtcbiAgfSk7XG4gIG9uKCdhZnRlckluaXQnLCAoKSA9PiB7XG4gICAgaWYgKCFzd2lwZXIucGFyYW1zLmExMXkuZW5hYmxlZCkgcmV0dXJuO1xuICAgIGluaXQoKTtcbiAgICB1cGRhdGVOYXZpZ2F0aW9uKCk7XG4gIH0pO1xuICBvbigndG9FZGdlJywgKCkgPT4ge1xuICAgIGlmICghc3dpcGVyLnBhcmFtcy5hMTF5LmVuYWJsZWQpIHJldHVybjtcbiAgICB1cGRhdGVOYXZpZ2F0aW9uKCk7XG4gIH0pO1xuICBvbignZnJvbUVkZ2UnLCAoKSA9PiB7XG4gICAgaWYgKCFzd2lwZXIucGFyYW1zLmExMXkuZW5hYmxlZCkgcmV0dXJuO1xuICAgIHVwZGF0ZU5hdmlnYXRpb24oKTtcbiAgfSk7XG4gIG9uKCdwYWdpbmF0aW9uVXBkYXRlJywgKCkgPT4ge1xuICAgIGlmICghc3dpcGVyLnBhcmFtcy5hMTF5LmVuYWJsZWQpIHJldHVybjtcbiAgICB1cGRhdGVQYWdpbmF0aW9uKCk7XG4gIH0pO1xuICBvbignZGVzdHJveScsICgpID0+IHtcbiAgICBpZiAoIXN3aXBlci5wYXJhbXMuYTExeS5lbmFibGVkKSByZXR1cm47XG4gICAgZGVzdHJveSgpO1xuICB9KTtcbn0iLCIvKiBlc2xpbnQgbm8tdW5kZXJzY29yZS1kYW5nbGU6IFwib2ZmXCIgKi9cblxuLyogZXNsaW50IG5vLXVzZS1iZWZvcmUtZGVmaW5lOiBcIm9mZlwiICovXG5pbXBvcnQgeyBnZXREb2N1bWVudCB9IGZyb20gJ3Nzci13aW5kb3cnO1xuaW1wb3J0IHsgbmV4dFRpY2sgfSBmcm9tICcuLi8uLi9zaGFyZWQvdXRpbHMuanMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXV0b3BsYXkoe1xuICBzd2lwZXIsXG4gIGV4dGVuZFBhcmFtcyxcbiAgb24sXG4gIGVtaXRcbn0pIHtcbiAgbGV0IHRpbWVvdXQ7XG4gIHN3aXBlci5hdXRvcGxheSA9IHtcbiAgICBydW5uaW5nOiBmYWxzZSxcbiAgICBwYXVzZWQ6IGZhbHNlXG4gIH07XG4gIGV4dGVuZFBhcmFtcyh7XG4gICAgYXV0b3BsYXk6IHtcbiAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgZGVsYXk6IDMwMDAsXG4gICAgICB3YWl0Rm9yVHJhbnNpdGlvbjogdHJ1ZSxcbiAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiB0cnVlLFxuICAgICAgc3RvcE9uTGFzdFNsaWRlOiBmYWxzZSxcbiAgICAgIHJldmVyc2VEaXJlY3Rpb246IGZhbHNlLFxuICAgICAgcGF1c2VPbk1vdXNlRW50ZXI6IGZhbHNlXG4gICAgfVxuICB9KTtcblxuICBmdW5jdGlvbiBydW4oKSB7XG4gICAgY29uc3QgJGFjdGl2ZVNsaWRlRWwgPSBzd2lwZXIuc2xpZGVzLmVxKHN3aXBlci5hY3RpdmVJbmRleCk7XG4gICAgbGV0IGRlbGF5ID0gc3dpcGVyLnBhcmFtcy5hdXRvcGxheS5kZWxheTtcblxuICAgIGlmICgkYWN0aXZlU2xpZGVFbC5hdHRyKCdkYXRhLXN3aXBlci1hdXRvcGxheScpKSB7XG4gICAgICBkZWxheSA9ICRhY3RpdmVTbGlkZUVsLmF0dHIoJ2RhdGEtc3dpcGVyLWF1dG9wbGF5JykgfHwgc3dpcGVyLnBhcmFtcy5hdXRvcGxheS5kZWxheTtcbiAgICB9XG5cbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgdGltZW91dCA9IG5leHRUaWNrKCgpID0+IHtcbiAgICAgIGxldCBhdXRvcGxheVJlc3VsdDtcblxuICAgICAgaWYgKHN3aXBlci5wYXJhbXMuYXV0b3BsYXkucmV2ZXJzZURpcmVjdGlvbikge1xuICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy5sb29wKSB7XG4gICAgICAgICAgc3dpcGVyLmxvb3BGaXgoKTtcbiAgICAgICAgICBhdXRvcGxheVJlc3VsdCA9IHN3aXBlci5zbGlkZVByZXYoc3dpcGVyLnBhcmFtcy5zcGVlZCwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgZW1pdCgnYXV0b3BsYXknKTtcbiAgICAgICAgfSBlbHNlIGlmICghc3dpcGVyLmlzQmVnaW5uaW5nKSB7XG4gICAgICAgICAgYXV0b3BsYXlSZXN1bHQgPSBzd2lwZXIuc2xpZGVQcmV2KHN3aXBlci5wYXJhbXMuc3BlZWQsIHRydWUsIHRydWUpO1xuICAgICAgICAgIGVtaXQoJ2F1dG9wbGF5Jyk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXN3aXBlci5wYXJhbXMuYXV0b3BsYXkuc3RvcE9uTGFzdFNsaWRlKSB7XG4gICAgICAgICAgYXV0b3BsYXlSZXN1bHQgPSBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuc2xpZGVzLmxlbmd0aCAtIDEsIHN3aXBlci5wYXJhbXMuc3BlZWQsIHRydWUsIHRydWUpO1xuICAgICAgICAgIGVtaXQoJ2F1dG9wbGF5Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHN3aXBlci5wYXJhbXMubG9vcCkge1xuICAgICAgICBzd2lwZXIubG9vcEZpeCgpO1xuICAgICAgICBhdXRvcGxheVJlc3VsdCA9IHN3aXBlci5zbGlkZU5leHQoc3dpcGVyLnBhcmFtcy5zcGVlZCwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIGVtaXQoJ2F1dG9wbGF5Jyk7XG4gICAgICB9IGVsc2UgaWYgKCFzd2lwZXIuaXNFbmQpIHtcbiAgICAgICAgYXV0b3BsYXlSZXN1bHQgPSBzd2lwZXIuc2xpZGVOZXh0KHN3aXBlci5wYXJhbXMuc3BlZWQsIHRydWUsIHRydWUpO1xuICAgICAgICBlbWl0KCdhdXRvcGxheScpO1xuICAgICAgfSBlbHNlIGlmICghc3dpcGVyLnBhcmFtcy5hdXRvcGxheS5zdG9wT25MYXN0U2xpZGUpIHtcbiAgICAgICAgYXV0b3BsYXlSZXN1bHQgPSBzd2lwZXIuc2xpZGVUbygwLCBzd2lwZXIucGFyYW1zLnNwZWVkLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgZW1pdCgnYXV0b3BsYXknKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0b3AoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN3aXBlci5wYXJhbXMuY3NzTW9kZSAmJiBzd2lwZXIuYXV0b3BsYXkucnVubmluZykgcnVuKCk7ZWxzZSBpZiAoYXV0b3BsYXlSZXN1bHQgPT09IGZhbHNlKSB7XG4gICAgICAgIHJ1bigpO1xuICAgICAgfVxuICAgIH0sIGRlbGF5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgIGlmICh0eXBlb2YgdGltZW91dCAhPT0gJ3VuZGVmaW5lZCcpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoc3dpcGVyLmF1dG9wbGF5LnJ1bm5pbmcpIHJldHVybiBmYWxzZTtcbiAgICBzd2lwZXIuYXV0b3BsYXkucnVubmluZyA9IHRydWU7XG4gICAgZW1pdCgnYXV0b3BsYXlTdGFydCcpO1xuICAgIHJ1bigpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RvcCgpIHtcbiAgICBpZiAoIXN3aXBlci5hdXRvcGxheS5ydW5uaW5nKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHR5cGVvZiB0aW1lb3V0ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYgKHRpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgIHRpbWVvdXQgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgc3dpcGVyLmF1dG9wbGF5LnJ1bm5pbmcgPSBmYWxzZTtcbiAgICBlbWl0KCdhdXRvcGxheVN0b3AnKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhdXNlKHNwZWVkKSB7XG4gICAgaWYgKCFzd2lwZXIuYXV0b3BsYXkucnVubmluZykgcmV0dXJuO1xuICAgIGlmIChzd2lwZXIuYXV0b3BsYXkucGF1c2VkKSByZXR1cm47XG4gICAgaWYgKHRpbWVvdXQpIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICBzd2lwZXIuYXV0b3BsYXkucGF1c2VkID0gdHJ1ZTtcblxuICAgIGlmIChzcGVlZCA9PT0gMCB8fCAhc3dpcGVyLnBhcmFtcy5hdXRvcGxheS53YWl0Rm9yVHJhbnNpdGlvbikge1xuICAgICAgc3dpcGVyLmF1dG9wbGF5LnBhdXNlZCA9IGZhbHNlO1xuICAgICAgcnVuKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFsndHJhbnNpdGlvbmVuZCcsICd3ZWJraXRUcmFuc2l0aW9uRW5kJ10uZm9yRWFjaChldmVudCA9PiB7XG4gICAgICAgIHN3aXBlci4kd3JhcHBlckVsWzBdLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIG9uVHJhbnNpdGlvbkVuZCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvblZpc2liaWxpdHlDaGFuZ2UoKSB7XG4gICAgY29uc3QgZG9jdW1lbnQgPSBnZXREb2N1bWVudCgpO1xuXG4gICAgaWYgKGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSA9PT0gJ2hpZGRlbicgJiYgc3dpcGVyLmF1dG9wbGF5LnJ1bm5pbmcpIHtcbiAgICAgIHBhdXNlKCk7XG4gICAgfVxuXG4gICAgaWYgKGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSA9PT0gJ3Zpc2libGUnICYmIHN3aXBlci5hdXRvcGxheS5wYXVzZWQpIHtcbiAgICAgIHJ1bigpO1xuICAgICAgc3dpcGVyLmF1dG9wbGF5LnBhdXNlZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uVHJhbnNpdGlvbkVuZChlKSB7XG4gICAgaWYgKCFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZCB8fCAhc3dpcGVyLiR3cmFwcGVyRWwpIHJldHVybjtcbiAgICBpZiAoZS50YXJnZXQgIT09IHN3aXBlci4kd3JhcHBlckVsWzBdKSByZXR1cm47XG4gICAgWyd0cmFuc2l0aW9uZW5kJywgJ3dlYmtpdFRyYW5zaXRpb25FbmQnXS5mb3JFYWNoKGV2ZW50ID0+IHtcbiAgICAgIHN3aXBlci4kd3JhcHBlckVsWzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIG9uVHJhbnNpdGlvbkVuZCk7XG4gICAgfSk7XG4gICAgc3dpcGVyLmF1dG9wbGF5LnBhdXNlZCA9IGZhbHNlO1xuXG4gICAgaWYgKCFzd2lwZXIuYXV0b3BsYXkucnVubmluZykge1xuICAgICAgc3RvcCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBydW4oKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbk1vdXNlRW50ZXIoKSB7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMuYXV0b3BsYXkuZGlzYWJsZU9uSW50ZXJhY3Rpb24pIHtcbiAgICAgIHN0b3AoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGF1c2UoKTtcbiAgICB9XG5cbiAgICBbJ3RyYW5zaXRpb25lbmQnLCAnd2Via2l0VHJhbnNpdGlvbkVuZCddLmZvckVhY2goZXZlbnQgPT4ge1xuICAgICAgc3dpcGVyLiR3cmFwcGVyRWxbMF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgb25UcmFuc2l0aW9uRW5kKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uTW91c2VMZWF2ZSgpIHtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5hdXRvcGxheS5kaXNhYmxlT25JbnRlcmFjdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHN3aXBlci5hdXRvcGxheS5wYXVzZWQgPSBmYWxzZTtcbiAgICBydW4oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGF0dGFjaE1vdXNlRXZlbnRzKCkge1xuICAgIGlmIChzd2lwZXIucGFyYW1zLmF1dG9wbGF5LnBhdXNlT25Nb3VzZUVudGVyKSB7XG4gICAgICBzd2lwZXIuJGVsLm9uKCdtb3VzZWVudGVyJywgb25Nb3VzZUVudGVyKTtcbiAgICAgIHN3aXBlci4kZWwub24oJ21vdXNlbGVhdmUnLCBvbk1vdXNlTGVhdmUpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRldGFjaE1vdXNlRXZlbnRzKCkge1xuICAgIHN3aXBlci4kZWwub2ZmKCdtb3VzZWVudGVyJywgb25Nb3VzZUVudGVyKTtcbiAgICBzd2lwZXIuJGVsLm9mZignbW91c2VsZWF2ZScsIG9uTW91c2VMZWF2ZSk7XG4gIH1cblxuICBvbignaW5pdCcsICgpID0+IHtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5hdXRvcGxheS5lbmFibGVkKSB7XG4gICAgICBzdGFydCgpO1xuICAgICAgY29uc3QgZG9jdW1lbnQgPSBnZXREb2N1bWVudCgpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsIG9uVmlzaWJpbGl0eUNoYW5nZSk7XG4gICAgICBhdHRhY2hNb3VzZUV2ZW50cygpO1xuICAgIH1cbiAgfSk7XG4gIG9uKCdiZWZvcmVUcmFuc2l0aW9uU3RhcnQnLCAoX3MsIHNwZWVkLCBpbnRlcm5hbCkgPT4ge1xuICAgIGlmIChzd2lwZXIuYXV0b3BsYXkucnVubmluZykge1xuICAgICAgaWYgKGludGVybmFsIHx8ICFzd2lwZXIucGFyYW1zLmF1dG9wbGF5LmRpc2FibGVPbkludGVyYWN0aW9uKSB7XG4gICAgICAgIHN3aXBlci5hdXRvcGxheS5wYXVzZShzcGVlZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdG9wKCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgb24oJ3NsaWRlckZpcnN0TW92ZScsICgpID0+IHtcbiAgICBpZiAoc3dpcGVyLmF1dG9wbGF5LnJ1bm5pbmcpIHtcbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLmF1dG9wbGF5LmRpc2FibGVPbkludGVyYWN0aW9uKSB7XG4gICAgICAgIHN0b3AoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhdXNlKCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgb24oJ3RvdWNoRW5kJywgKCkgPT4ge1xuICAgIGlmIChzd2lwZXIucGFyYW1zLmNzc01vZGUgJiYgc3dpcGVyLmF1dG9wbGF5LnBhdXNlZCAmJiAhc3dpcGVyLnBhcmFtcy5hdXRvcGxheS5kaXNhYmxlT25JbnRlcmFjdGlvbikge1xuICAgICAgcnVuKCk7XG4gICAgfVxuICB9KTtcbiAgb24oJ2Rlc3Ryb3knLCAoKSA9PiB7XG4gICAgZGV0YWNoTW91c2VFdmVudHMoKTtcblxuICAgIGlmIChzd2lwZXIuYXV0b3BsYXkucnVubmluZykge1xuICAgICAgc3RvcCgpO1xuICAgIH1cblxuICAgIGNvbnN0IGRvY3VtZW50ID0gZ2V0RG9jdW1lbnQoKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgb25WaXNpYmlsaXR5Q2hhbmdlKTtcbiAgfSk7XG4gIE9iamVjdC5hc3NpZ24oc3dpcGVyLmF1dG9wbGF5LCB7XG4gICAgcGF1c2UsXG4gICAgcnVuLFxuICAgIHN0YXJ0LFxuICAgIHN0b3BcbiAgfSk7XG59IiwiLyogZXNsaW50IG5vLWJpdHdpc2U6IFtcImVycm9yXCIsIHsgXCJhbGxvd1wiOiBbXCI+PlwiXSB9XSAqL1xuaW1wb3J0IHsgbmV4dFRpY2sgfSBmcm9tICcuLi8uLi9zaGFyZWQvdXRpbHMuanMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udHJvbGxlcih7XG4gIHN3aXBlcixcbiAgZXh0ZW5kUGFyYW1zLFxuICBvblxufSkge1xuICBleHRlbmRQYXJhbXMoe1xuICAgIGNvbnRyb2xsZXI6IHtcbiAgICAgIGNvbnRyb2w6IHVuZGVmaW5lZCxcbiAgICAgIGludmVyc2U6IGZhbHNlLFxuICAgICAgYnk6ICdzbGlkZScgLy8gb3IgJ2NvbnRhaW5lcidcblxuICAgIH1cbiAgfSk7XG4gIHN3aXBlci5jb250cm9sbGVyID0ge1xuICAgIGNvbnRyb2w6IHVuZGVmaW5lZFxuICB9O1xuXG4gIGZ1bmN0aW9uIExpbmVhclNwbGluZSh4LCB5KSB7XG4gICAgY29uc3QgYmluYXJ5U2VhcmNoID0gZnVuY3Rpb24gc2VhcmNoKCkge1xuICAgICAgbGV0IG1heEluZGV4O1xuICAgICAgbGV0IG1pbkluZGV4O1xuICAgICAgbGV0IGd1ZXNzO1xuICAgICAgcmV0dXJuIChhcnJheSwgdmFsKSA9PiB7XG4gICAgICAgIG1pbkluZGV4ID0gLTE7XG4gICAgICAgIG1heEluZGV4ID0gYXJyYXkubGVuZ3RoO1xuXG4gICAgICAgIHdoaWxlIChtYXhJbmRleCAtIG1pbkluZGV4ID4gMSkge1xuICAgICAgICAgIGd1ZXNzID0gbWF4SW5kZXggKyBtaW5JbmRleCA+PiAxO1xuXG4gICAgICAgICAgaWYgKGFycmF5W2d1ZXNzXSA8PSB2YWwpIHtcbiAgICAgICAgICAgIG1pbkluZGV4ID0gZ3Vlc3M7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1heEluZGV4ID0gZ3Vlc3M7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1heEluZGV4O1xuICAgICAgfTtcbiAgICB9KCk7XG5cbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5sYXN0SW5kZXggPSB4Lmxlbmd0aCAtIDE7IC8vIEdpdmVuIGFuIHggdmFsdWUgKHgyKSwgcmV0dXJuIHRoZSBleHBlY3RlZCB5MiB2YWx1ZTpcbiAgICAvLyAoeDEseTEpIGlzIHRoZSBrbm93biBwb2ludCBiZWZvcmUgZ2l2ZW4gdmFsdWUsXG4gICAgLy8gKHgzLHkzKSBpcyB0aGUga25vd24gcG9pbnQgYWZ0ZXIgZ2l2ZW4gdmFsdWUuXG5cbiAgICBsZXQgaTE7XG4gICAgbGV0IGkzO1xuXG4gICAgdGhpcy5pbnRlcnBvbGF0ZSA9IGZ1bmN0aW9uIGludGVycG9sYXRlKHgyKSB7XG4gICAgICBpZiAoIXgyKSByZXR1cm4gMDsgLy8gR2V0IHRoZSBpbmRleGVzIG9mIHgxIGFuZCB4MyAodGhlIGFycmF5IGluZGV4ZXMgYmVmb3JlIGFuZCBhZnRlciBnaXZlbiB4Mik6XG5cbiAgICAgIGkzID0gYmluYXJ5U2VhcmNoKHRoaXMueCwgeDIpO1xuICAgICAgaTEgPSBpMyAtIDE7IC8vIFdlIGhhdmUgb3VyIGluZGV4ZXMgaTEgJiBpMywgc28gd2UgY2FuIGNhbGN1bGF0ZSBhbHJlYWR5OlxuICAgICAgLy8geTIgOj0gKCh4MuKIkngxKSDDlyAoeTPiiJJ5MSkpIMO3ICh4M+KIkngxKSArIHkxXG5cbiAgICAgIHJldHVybiAoeDIgLSB0aGlzLnhbaTFdKSAqICh0aGlzLnlbaTNdIC0gdGhpcy55W2kxXSkgLyAodGhpcy54W2kzXSAtIHRoaXMueFtpMV0pICsgdGhpcy55W2kxXTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0gLy8geHh4OiBmb3Igbm93IGkgd2lsbCBqdXN0IHNhdmUgb25lIHNwbGluZSBmdW5jdGlvbiB0byB0b1xuXG5cbiAgZnVuY3Rpb24gZ2V0SW50ZXJwb2xhdGVGdW5jdGlvbihjKSB7XG4gICAgaWYgKCFzd2lwZXIuY29udHJvbGxlci5zcGxpbmUpIHtcbiAgICAgIHN3aXBlci5jb250cm9sbGVyLnNwbGluZSA9IHN3aXBlci5wYXJhbXMubG9vcCA/IG5ldyBMaW5lYXJTcGxpbmUoc3dpcGVyLnNsaWRlc0dyaWQsIGMuc2xpZGVzR3JpZCkgOiBuZXcgTGluZWFyU3BsaW5lKHN3aXBlci5zbmFwR3JpZCwgYy5zbmFwR3JpZCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0VHJhbnNsYXRlKF90LCBieUNvbnRyb2xsZXIpIHtcbiAgICBjb25zdCBjb250cm9sbGVkID0gc3dpcGVyLmNvbnRyb2xsZXIuY29udHJvbDtcbiAgICBsZXQgbXVsdGlwbGllcjtcbiAgICBsZXQgY29udHJvbGxlZFRyYW5zbGF0ZTtcbiAgICBjb25zdCBTd2lwZXIgPSBzd2lwZXIuY29uc3RydWN0b3I7XG5cbiAgICBmdW5jdGlvbiBzZXRDb250cm9sbGVkVHJhbnNsYXRlKGMpIHtcbiAgICAgIC8vIHRoaXMgd2lsbCBjcmVhdGUgYW4gSW50ZXJwb2xhdGUgZnVuY3Rpb24gYmFzZWQgb24gdGhlIHNuYXBHcmlkc1xuICAgICAgLy8geCBpcyB0aGUgR3JpZCBvZiB0aGUgc2Nyb2xsZWQgc2Nyb2xsZXIgYW5kIHkgd2lsbCBiZSB0aGUgY29udHJvbGxlZCBzY3JvbGxlclxuICAgICAgLy8gaXQgbWFrZXMgc2Vuc2UgdG8gY3JlYXRlIHRoaXMgb25seSBvbmNlIGFuZCByZWNhbGwgaXQgZm9yIHRoZSBpbnRlcnBvbGF0aW9uXG4gICAgICAvLyB0aGUgZnVuY3Rpb24gZG9lcyBhIGxvdCBvZiB2YWx1ZSBjYWNoaW5nIGZvciBwZXJmb3JtYW5jZVxuICAgICAgY29uc3QgdHJhbnNsYXRlID0gc3dpcGVyLnJ0bFRyYW5zbGF0ZSA/IC1zd2lwZXIudHJhbnNsYXRlIDogc3dpcGVyLnRyYW5zbGF0ZTtcblxuICAgICAgaWYgKHN3aXBlci5wYXJhbXMuY29udHJvbGxlci5ieSA9PT0gJ3NsaWRlJykge1xuICAgICAgICBnZXRJbnRlcnBvbGF0ZUZ1bmN0aW9uKGMpOyAvLyBpIGFtIG5vdCBzdXJlIHdoeSB0aGUgdmFsdWVzIGhhdmUgdG8gYmUgbXVsdGlwbGljYXRlZCB0aGlzIHdheSwgdHJpZWQgdG8gaW52ZXJ0IHRoZSBzbmFwR3JpZFxuICAgICAgICAvLyBidXQgaXQgZGlkIG5vdCB3b3JrIG91dFxuXG4gICAgICAgIGNvbnRyb2xsZWRUcmFuc2xhdGUgPSAtc3dpcGVyLmNvbnRyb2xsZXIuc3BsaW5lLmludGVycG9sYXRlKC10cmFuc2xhdGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWNvbnRyb2xsZWRUcmFuc2xhdGUgfHwgc3dpcGVyLnBhcmFtcy5jb250cm9sbGVyLmJ5ID09PSAnY29udGFpbmVyJykge1xuICAgICAgICBtdWx0aXBsaWVyID0gKGMubWF4VHJhbnNsYXRlKCkgLSBjLm1pblRyYW5zbGF0ZSgpKSAvIChzd2lwZXIubWF4VHJhbnNsYXRlKCkgLSBzd2lwZXIubWluVHJhbnNsYXRlKCkpO1xuICAgICAgICBjb250cm9sbGVkVHJhbnNsYXRlID0gKHRyYW5zbGF0ZSAtIHN3aXBlci5taW5UcmFuc2xhdGUoKSkgKiBtdWx0aXBsaWVyICsgYy5taW5UcmFuc2xhdGUoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN3aXBlci5wYXJhbXMuY29udHJvbGxlci5pbnZlcnNlKSB7XG4gICAgICAgIGNvbnRyb2xsZWRUcmFuc2xhdGUgPSBjLm1heFRyYW5zbGF0ZSgpIC0gY29udHJvbGxlZFRyYW5zbGF0ZTtcbiAgICAgIH1cblxuICAgICAgYy51cGRhdGVQcm9ncmVzcyhjb250cm9sbGVkVHJhbnNsYXRlKTtcbiAgICAgIGMuc2V0VHJhbnNsYXRlKGNvbnRyb2xsZWRUcmFuc2xhdGUsIHN3aXBlcik7XG4gICAgICBjLnVwZGF0ZUFjdGl2ZUluZGV4KCk7XG4gICAgICBjLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShjb250cm9sbGVkKSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250cm9sbGVkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChjb250cm9sbGVkW2ldICE9PSBieUNvbnRyb2xsZXIgJiYgY29udHJvbGxlZFtpXSBpbnN0YW5jZW9mIFN3aXBlcikge1xuICAgICAgICAgIHNldENvbnRyb2xsZWRUcmFuc2xhdGUoY29udHJvbGxlZFtpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGNvbnRyb2xsZWQgaW5zdGFuY2VvZiBTd2lwZXIgJiYgYnlDb250cm9sbGVyICE9PSBjb250cm9sbGVkKSB7XG4gICAgICBzZXRDb250cm9sbGVkVHJhbnNsYXRlKGNvbnRyb2xsZWQpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFRyYW5zaXRpb24oZHVyYXRpb24sIGJ5Q29udHJvbGxlcikge1xuICAgIGNvbnN0IFN3aXBlciA9IHN3aXBlci5jb25zdHJ1Y3RvcjtcbiAgICBjb25zdCBjb250cm9sbGVkID0gc3dpcGVyLmNvbnRyb2xsZXIuY29udHJvbDtcbiAgICBsZXQgaTtcblxuICAgIGZ1bmN0aW9uIHNldENvbnRyb2xsZWRUcmFuc2l0aW9uKGMpIHtcbiAgICAgIGMuc2V0VHJhbnNpdGlvbihkdXJhdGlvbiwgc3dpcGVyKTtcblxuICAgICAgaWYgKGR1cmF0aW9uICE9PSAwKSB7XG4gICAgICAgIGMudHJhbnNpdGlvblN0YXJ0KCk7XG5cbiAgICAgICAgaWYgKGMucGFyYW1zLmF1dG9IZWlnaHQpIHtcbiAgICAgICAgICBuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICBjLnVwZGF0ZUF1dG9IZWlnaHQoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGMuJHdyYXBwZXJFbC50cmFuc2l0aW9uRW5kKCgpID0+IHtcbiAgICAgICAgICBpZiAoIWNvbnRyb2xsZWQpIHJldHVybjtcblxuICAgICAgICAgIGlmIChjLnBhcmFtcy5sb29wICYmIHN3aXBlci5wYXJhbXMuY29udHJvbGxlci5ieSA9PT0gJ3NsaWRlJykge1xuICAgICAgICAgICAgYy5sb29wRml4KCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYy50cmFuc2l0aW9uRW5kKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KGNvbnRyb2xsZWQpKSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgY29udHJvbGxlZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoY29udHJvbGxlZFtpXSAhPT0gYnlDb250cm9sbGVyICYmIGNvbnRyb2xsZWRbaV0gaW5zdGFuY2VvZiBTd2lwZXIpIHtcbiAgICAgICAgICBzZXRDb250cm9sbGVkVHJhbnNpdGlvbihjb250cm9sbGVkW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY29udHJvbGxlZCBpbnN0YW5jZW9mIFN3aXBlciAmJiBieUNvbnRyb2xsZXIgIT09IGNvbnRyb2xsZWQpIHtcbiAgICAgIHNldENvbnRyb2xsZWRUcmFuc2l0aW9uKGNvbnRyb2xsZWQpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZVNwbGluZSgpIHtcbiAgICBpZiAoIXN3aXBlci5jb250cm9sbGVyLmNvbnRyb2wpIHJldHVybjtcblxuICAgIGlmIChzd2lwZXIuY29udHJvbGxlci5zcGxpbmUpIHtcbiAgICAgIHN3aXBlci5jb250cm9sbGVyLnNwbGluZSA9IHVuZGVmaW5lZDtcbiAgICAgIGRlbGV0ZSBzd2lwZXIuY29udHJvbGxlci5zcGxpbmU7XG4gICAgfVxuICB9XG5cbiAgb24oJ2JlZm9yZUluaXQnLCAoKSA9PiB7XG4gICAgc3dpcGVyLmNvbnRyb2xsZXIuY29udHJvbCA9IHN3aXBlci5wYXJhbXMuY29udHJvbGxlci5jb250cm9sO1xuICB9KTtcbiAgb24oJ3VwZGF0ZScsICgpID0+IHtcbiAgICByZW1vdmVTcGxpbmUoKTtcbiAgfSk7XG4gIG9uKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgcmVtb3ZlU3BsaW5lKCk7XG4gIH0pO1xuICBvbignb2JzZXJ2ZXJVcGRhdGUnLCAoKSA9PiB7XG4gICAgcmVtb3ZlU3BsaW5lKCk7XG4gIH0pO1xuICBvbignc2V0VHJhbnNsYXRlJywgKF9zLCB0cmFuc2xhdGUsIGJ5Q29udHJvbGxlcikgPT4ge1xuICAgIGlmICghc3dpcGVyLmNvbnRyb2xsZXIuY29udHJvbCkgcmV0dXJuO1xuICAgIHN3aXBlci5jb250cm9sbGVyLnNldFRyYW5zbGF0ZSh0cmFuc2xhdGUsIGJ5Q29udHJvbGxlcik7XG4gIH0pO1xuICBvbignc2V0VHJhbnNpdGlvbicsIChfcywgZHVyYXRpb24sIGJ5Q29udHJvbGxlcikgPT4ge1xuICAgIGlmICghc3dpcGVyLmNvbnRyb2xsZXIuY29udHJvbCkgcmV0dXJuO1xuICAgIHN3aXBlci5jb250cm9sbGVyLnNldFRyYW5zaXRpb24oZHVyYXRpb24sIGJ5Q29udHJvbGxlcik7XG4gIH0pO1xuICBPYmplY3QuYXNzaWduKHN3aXBlci5jb250cm9sbGVyLCB7XG4gICAgc2V0VHJhbnNsYXRlLFxuICAgIHNldFRyYW5zaXRpb25cbiAgfSk7XG59IiwiaW1wb3J0IGNyZWF0ZVNoYWRvdyBmcm9tICcuLi8uLi9zaGFyZWQvY3JlYXRlLXNoYWRvdy5qcyc7XG5pbXBvcnQgZWZmZWN0SW5pdCBmcm9tICcuLi8uLi9zaGFyZWQvZWZmZWN0LWluaXQuanMnO1xuaW1wb3J0IGVmZmVjdFRhcmdldCBmcm9tICcuLi8uLi9zaGFyZWQvZWZmZWN0LXRhcmdldC5qcyc7XG5pbXBvcnQgZWZmZWN0VmlydHVhbFRyYW5zaXRpb25FbmQgZnJvbSAnLi4vLi4vc2hhcmVkL2VmZmVjdC12aXJ0dWFsLXRyYW5zaXRpb24tZW5kLmpzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVmZmVjdENhcmRzKHtcbiAgc3dpcGVyLFxuICBleHRlbmRQYXJhbXMsXG4gIG9uXG59KSB7XG4gIGV4dGVuZFBhcmFtcyh7XG4gICAgY2FyZHNFZmZlY3Q6IHtcbiAgICAgIHNsaWRlU2hhZG93czogdHJ1ZSxcbiAgICAgIHRyYW5zZm9ybUVsOiBudWxsXG4gICAgfVxuICB9KTtcblxuICBjb25zdCBzZXRUcmFuc2xhdGUgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgc2xpZGVzLFxuICAgICAgYWN0aXZlSW5kZXhcbiAgICB9ID0gc3dpcGVyO1xuICAgIGNvbnN0IHBhcmFtcyA9IHN3aXBlci5wYXJhbXMuY2FyZHNFZmZlY3Q7XG4gICAgY29uc3Qge1xuICAgICAgc3RhcnRUcmFuc2xhdGUsXG4gICAgICBpc1RvdWNoZWRcbiAgICB9ID0gc3dpcGVyLnRvdWNoRXZlbnRzRGF0YTtcbiAgICBjb25zdCBjdXJyZW50VHJhbnNsYXRlID0gc3dpcGVyLnRyYW5zbGF0ZTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCAkc2xpZGVFbCA9IHNsaWRlcy5lcShpKTtcbiAgICAgIGNvbnN0IHNsaWRlUHJvZ3Jlc3MgPSAkc2xpZGVFbFswXS5wcm9ncmVzcztcbiAgICAgIGNvbnN0IHByb2dyZXNzID0gTWF0aC5taW4oTWF0aC5tYXgoc2xpZGVQcm9ncmVzcywgLTQpLCA0KTtcbiAgICAgIGxldCBvZmZzZXQgPSAkc2xpZGVFbFswXS5zd2lwZXJTbGlkZU9mZnNldDtcblxuICAgICAgaWYgKHN3aXBlci5wYXJhbXMuY2VudGVyZWRTbGlkZXMgJiYgIXN3aXBlci5wYXJhbXMuY3NzTW9kZSkge1xuICAgICAgICBzd2lwZXIuJHdyYXBwZXJFbC50cmFuc2Zvcm0oYHRyYW5zbGF0ZVgoJHtzd2lwZXIubWluVHJhbnNsYXRlKCl9cHgpYCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLmNlbnRlcmVkU2xpZGVzICYmIHN3aXBlci5wYXJhbXMuY3NzTW9kZSkge1xuICAgICAgICBvZmZzZXQgLT0gc2xpZGVzWzBdLnN3aXBlclNsaWRlT2Zmc2V0O1xuICAgICAgfVxuXG4gICAgICBsZXQgdFggPSBzd2lwZXIucGFyYW1zLmNzc01vZGUgPyAtb2Zmc2V0IC0gc3dpcGVyLnRyYW5zbGF0ZSA6IC1vZmZzZXQ7XG4gICAgICBsZXQgdFkgPSAwO1xuICAgICAgY29uc3QgdFogPSAtMTAwICogTWF0aC5hYnMocHJvZ3Jlc3MpO1xuICAgICAgbGV0IHNjYWxlID0gMTtcbiAgICAgIGxldCByb3RhdGUgPSAtMiAqIHByb2dyZXNzO1xuICAgICAgbGV0IHRYQWRkID0gOCAtIE1hdGguYWJzKHByb2dyZXNzKSAqIDAuNzU7XG4gICAgICBjb25zdCBpc1N3aXBlVG9OZXh0ID0gKGkgPT09IGFjdGl2ZUluZGV4IHx8IGkgPT09IGFjdGl2ZUluZGV4IC0gMSkgJiYgcHJvZ3Jlc3MgPiAwICYmIHByb2dyZXNzIDwgMSAmJiAoaXNUb3VjaGVkIHx8IHN3aXBlci5wYXJhbXMuY3NzTW9kZSkgJiYgY3VycmVudFRyYW5zbGF0ZSA8IHN0YXJ0VHJhbnNsYXRlO1xuICAgICAgY29uc3QgaXNTd2lwZVRvUHJldiA9IChpID09PSBhY3RpdmVJbmRleCB8fCBpID09PSBhY3RpdmVJbmRleCArIDEpICYmIHByb2dyZXNzIDwgMCAmJiBwcm9ncmVzcyA+IC0xICYmIChpc1RvdWNoZWQgfHwgc3dpcGVyLnBhcmFtcy5jc3NNb2RlKSAmJiBjdXJyZW50VHJhbnNsYXRlID4gc3RhcnRUcmFuc2xhdGU7XG5cbiAgICAgIGlmIChpc1N3aXBlVG9OZXh0IHx8IGlzU3dpcGVUb1ByZXYpIHtcbiAgICAgICAgY29uc3Qgc3ViUHJvZ3Jlc3MgPSAoMSAtIE1hdGguYWJzKChNYXRoLmFicyhwcm9ncmVzcykgLSAwLjUpIC8gMC41KSkgKiogMC41O1xuICAgICAgICByb3RhdGUgKz0gLTI4ICogcHJvZ3Jlc3MgKiBzdWJQcm9ncmVzcztcbiAgICAgICAgc2NhbGUgKz0gLTAuNSAqIHN1YlByb2dyZXNzO1xuICAgICAgICB0WEFkZCArPSA5NiAqIHN1YlByb2dyZXNzO1xuICAgICAgICB0WSA9IGAkey0yNSAqIHN1YlByb2dyZXNzICogTWF0aC5hYnMocHJvZ3Jlc3MpfSVgO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvZ3Jlc3MgPCAwKSB7XG4gICAgICAgIC8vIG5leHRcbiAgICAgICAgdFggPSBgY2FsYygke3RYfXB4ICsgKCR7dFhBZGQgKiBNYXRoLmFicyhwcm9ncmVzcyl9JSkpYDtcbiAgICAgIH0gZWxzZSBpZiAocHJvZ3Jlc3MgPiAwKSB7XG4gICAgICAgIC8vIHByZXZcbiAgICAgICAgdFggPSBgY2FsYygke3RYfXB4ICsgKC0ke3RYQWRkICogTWF0aC5hYnMocHJvZ3Jlc3MpfSUpKWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0WCA9IGAke3RYfXB4YDtcbiAgICAgIH1cblxuICAgICAgaWYgKCFzd2lwZXIuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgICAgY29uc3QgcHJldlkgPSB0WTtcbiAgICAgICAgdFkgPSB0WDtcbiAgICAgICAgdFggPSBwcmV2WTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc2NhbGVTdHJpbmcgPSBwcm9ncmVzcyA8IDAgPyBgJHsxICsgKDEgLSBzY2FsZSkgKiBwcm9ncmVzc31gIDogYCR7MSAtICgxIC0gc2NhbGUpICogcHJvZ3Jlc3N9YDtcbiAgICAgIGNvbnN0IHRyYW5zZm9ybSA9IGBcbiAgICAgICAgdHJhbnNsYXRlM2QoJHt0WH0sICR7dFl9LCAke3RafXB4KVxuICAgICAgICByb3RhdGVaKCR7cm90YXRlfWRlZylcbiAgICAgICAgc2NhbGUoJHtzY2FsZVN0cmluZ30pXG4gICAgICBgO1xuXG4gICAgICBpZiAocGFyYW1zLnNsaWRlU2hhZG93cykge1xuICAgICAgICAvLyBTZXQgc2hhZG93c1xuICAgICAgICBsZXQgJHNoYWRvd0VsID0gJHNsaWRlRWwuZmluZCgnLnN3aXBlci1zbGlkZS1zaGFkb3cnKTtcblxuICAgICAgICBpZiAoJHNoYWRvd0VsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICRzaGFkb3dFbCA9IGNyZWF0ZVNoYWRvdyhwYXJhbXMsICRzbGlkZUVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkc2hhZG93RWwubGVuZ3RoKSAkc2hhZG93RWxbMF0uc3R5bGUub3BhY2l0eSA9IE1hdGgubWluKE1hdGgubWF4KChNYXRoLmFicyhwcm9ncmVzcykgLSAwLjUpIC8gMC41LCAwKSwgMSk7XG4gICAgICB9XG5cbiAgICAgICRzbGlkZUVsWzBdLnN0eWxlLnpJbmRleCA9IC1NYXRoLmFicyhNYXRoLnJvdW5kKHNsaWRlUHJvZ3Jlc3MpKSArIHNsaWRlcy5sZW5ndGg7XG4gICAgICBjb25zdCAkdGFyZ2V0RWwgPSBlZmZlY3RUYXJnZXQocGFyYW1zLCAkc2xpZGVFbCk7XG4gICAgICAkdGFyZ2V0RWwudHJhbnNmb3JtKHRyYW5zZm9ybSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNldFRyYW5zaXRpb24gPSBkdXJhdGlvbiA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgdHJhbnNmb3JtRWxcbiAgICB9ID0gc3dpcGVyLnBhcmFtcy5jYXJkc0VmZmVjdDtcbiAgICBjb25zdCAkdHJhbnNpdGlvbkVsZW1lbnRzID0gdHJhbnNmb3JtRWwgPyBzd2lwZXIuc2xpZGVzLmZpbmQodHJhbnNmb3JtRWwpIDogc3dpcGVyLnNsaWRlcztcbiAgICAkdHJhbnNpdGlvbkVsZW1lbnRzLnRyYW5zaXRpb24oZHVyYXRpb24pLmZpbmQoJy5zd2lwZXItc2xpZGUtc2hhZG93JykudHJhbnNpdGlvbihkdXJhdGlvbik7XG4gICAgZWZmZWN0VmlydHVhbFRyYW5zaXRpb25FbmQoe1xuICAgICAgc3dpcGVyLFxuICAgICAgZHVyYXRpb24sXG4gICAgICB0cmFuc2Zvcm1FbFxuICAgIH0pO1xuICB9O1xuXG4gIGVmZmVjdEluaXQoe1xuICAgIGVmZmVjdDogJ2NhcmRzJyxcbiAgICBzd2lwZXIsXG4gICAgb24sXG4gICAgc2V0VHJhbnNsYXRlLFxuICAgIHNldFRyYW5zaXRpb24sXG4gICAgcGVyc3BlY3RpdmU6ICgpID0+IHRydWUsXG4gICAgb3ZlcndyaXRlUGFyYW1zOiAoKSA9PiAoe1xuICAgICAgd2F0Y2hTbGlkZXNQcm9ncmVzczogdHJ1ZSxcbiAgICAgIHZpcnR1YWxUcmFuc2xhdGU6ICFzd2lwZXIucGFyYW1zLmNzc01vZGVcbiAgICB9KVxuICB9KTtcbn0iLCJpbXBvcnQgY3JlYXRlU2hhZG93IGZyb20gJy4uLy4uL3NoYXJlZC9jcmVhdGUtc2hhZG93LmpzJztcbmltcG9ydCBlZmZlY3RJbml0IGZyb20gJy4uLy4uL3NoYXJlZC9lZmZlY3QtaW5pdC5qcyc7XG5pbXBvcnQgZWZmZWN0VGFyZ2V0IGZyb20gJy4uLy4uL3NoYXJlZC9lZmZlY3QtdGFyZ2V0LmpzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVmZmVjdENvdmVyZmxvdyh7XG4gIHN3aXBlcixcbiAgZXh0ZW5kUGFyYW1zLFxuICBvblxufSkge1xuICBleHRlbmRQYXJhbXMoe1xuICAgIGNvdmVyZmxvd0VmZmVjdDoge1xuICAgICAgcm90YXRlOiA1MCxcbiAgICAgIHN0cmV0Y2g6IDAsXG4gICAgICBkZXB0aDogMTAwLFxuICAgICAgc2NhbGU6IDEsXG4gICAgICBtb2RpZmllcjogMSxcbiAgICAgIHNsaWRlU2hhZG93czogdHJ1ZSxcbiAgICAgIHRyYW5zZm9ybUVsOiBudWxsXG4gICAgfVxuICB9KTtcblxuICBjb25zdCBzZXRUcmFuc2xhdGUgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgd2lkdGg6IHN3aXBlcldpZHRoLFxuICAgICAgaGVpZ2h0OiBzd2lwZXJIZWlnaHQsXG4gICAgICBzbGlkZXMsXG4gICAgICBzbGlkZXNTaXplc0dyaWRcbiAgICB9ID0gc3dpcGVyO1xuICAgIGNvbnN0IHBhcmFtcyA9IHN3aXBlci5wYXJhbXMuY292ZXJmbG93RWZmZWN0O1xuICAgIGNvbnN0IGlzSG9yaXpvbnRhbCA9IHN3aXBlci5pc0hvcml6b250YWwoKTtcbiAgICBjb25zdCB0cmFuc2Zvcm0gPSBzd2lwZXIudHJhbnNsYXRlO1xuICAgIGNvbnN0IGNlbnRlciA9IGlzSG9yaXpvbnRhbCA/IC10cmFuc2Zvcm0gKyBzd2lwZXJXaWR0aCAvIDIgOiAtdHJhbnNmb3JtICsgc3dpcGVySGVpZ2h0IC8gMjtcbiAgICBjb25zdCByb3RhdGUgPSBpc0hvcml6b250YWwgPyBwYXJhbXMucm90YXRlIDogLXBhcmFtcy5yb3RhdGU7XG4gICAgY29uc3QgdHJhbnNsYXRlID0gcGFyYW1zLmRlcHRoOyAvLyBFYWNoIHNsaWRlIG9mZnNldCBmcm9tIGNlbnRlclxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbmd0aCA9IHNsaWRlcy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgJHNsaWRlRWwgPSBzbGlkZXMuZXEoaSk7XG4gICAgICBjb25zdCBzbGlkZVNpemUgPSBzbGlkZXNTaXplc0dyaWRbaV07XG4gICAgICBjb25zdCBzbGlkZU9mZnNldCA9ICRzbGlkZUVsWzBdLnN3aXBlclNsaWRlT2Zmc2V0O1xuICAgICAgY29uc3Qgb2Zmc2V0TXVsdGlwbGllciA9IChjZW50ZXIgLSBzbGlkZU9mZnNldCAtIHNsaWRlU2l6ZSAvIDIpIC8gc2xpZGVTaXplICogcGFyYW1zLm1vZGlmaWVyO1xuICAgICAgbGV0IHJvdGF0ZVkgPSBpc0hvcml6b250YWwgPyByb3RhdGUgKiBvZmZzZXRNdWx0aXBsaWVyIDogMDtcbiAgICAgIGxldCByb3RhdGVYID0gaXNIb3Jpem9udGFsID8gMCA6IHJvdGF0ZSAqIG9mZnNldE11bHRpcGxpZXI7IC8vIHZhciByb3RhdGVaID0gMFxuXG4gICAgICBsZXQgdHJhbnNsYXRlWiA9IC10cmFuc2xhdGUgKiBNYXRoLmFicyhvZmZzZXRNdWx0aXBsaWVyKTtcbiAgICAgIGxldCBzdHJldGNoID0gcGFyYW1zLnN0cmV0Y2g7IC8vIEFsbG93IHBlcmNlbnRhZ2UgdG8gbWFrZSBhIHJlbGF0aXZlIHN0cmV0Y2ggZm9yIHJlc3BvbnNpdmUgc2xpZGVyc1xuXG4gICAgICBpZiAodHlwZW9mIHN0cmV0Y2ggPT09ICdzdHJpbmcnICYmIHN0cmV0Y2guaW5kZXhPZignJScpICE9PSAtMSkge1xuICAgICAgICBzdHJldGNoID0gcGFyc2VGbG9hdChwYXJhbXMuc3RyZXRjaCkgLyAxMDAgKiBzbGlkZVNpemU7XG4gICAgICB9XG5cbiAgICAgIGxldCB0cmFuc2xhdGVZID0gaXNIb3Jpem9udGFsID8gMCA6IHN0cmV0Y2ggKiBvZmZzZXRNdWx0aXBsaWVyO1xuICAgICAgbGV0IHRyYW5zbGF0ZVggPSBpc0hvcml6b250YWwgPyBzdHJldGNoICogb2Zmc2V0TXVsdGlwbGllciA6IDA7XG4gICAgICBsZXQgc2NhbGUgPSAxIC0gKDEgLSBwYXJhbXMuc2NhbGUpICogTWF0aC5hYnMob2Zmc2V0TXVsdGlwbGllcik7IC8vIEZpeCBmb3IgdWx0cmEgc21hbGwgdmFsdWVzXG5cbiAgICAgIGlmIChNYXRoLmFicyh0cmFuc2xhdGVYKSA8IDAuMDAxKSB0cmFuc2xhdGVYID0gMDtcbiAgICAgIGlmIChNYXRoLmFicyh0cmFuc2xhdGVZKSA8IDAuMDAxKSB0cmFuc2xhdGVZID0gMDtcbiAgICAgIGlmIChNYXRoLmFicyh0cmFuc2xhdGVaKSA8IDAuMDAxKSB0cmFuc2xhdGVaID0gMDtcbiAgICAgIGlmIChNYXRoLmFicyhyb3RhdGVZKSA8IDAuMDAxKSByb3RhdGVZID0gMDtcbiAgICAgIGlmIChNYXRoLmFicyhyb3RhdGVYKSA8IDAuMDAxKSByb3RhdGVYID0gMDtcbiAgICAgIGlmIChNYXRoLmFicyhzY2FsZSkgPCAwLjAwMSkgc2NhbGUgPSAwO1xuICAgICAgY29uc3Qgc2xpZGVUcmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHt0cmFuc2xhdGVYfXB4LCR7dHJhbnNsYXRlWX1weCwke3RyYW5zbGF0ZVp9cHgpICByb3RhdGVYKCR7cm90YXRlWH1kZWcpIHJvdGF0ZVkoJHtyb3RhdGVZfWRlZykgc2NhbGUoJHtzY2FsZX0pYDtcbiAgICAgIGNvbnN0ICR0YXJnZXRFbCA9IGVmZmVjdFRhcmdldChwYXJhbXMsICRzbGlkZUVsKTtcbiAgICAgICR0YXJnZXRFbC50cmFuc2Zvcm0oc2xpZGVUcmFuc2Zvcm0pO1xuICAgICAgJHNsaWRlRWxbMF0uc3R5bGUuekluZGV4ID0gLU1hdGguYWJzKE1hdGgucm91bmQob2Zmc2V0TXVsdGlwbGllcikpICsgMTtcblxuICAgICAgaWYgKHBhcmFtcy5zbGlkZVNoYWRvd3MpIHtcbiAgICAgICAgLy8gU2V0IHNoYWRvd3NcbiAgICAgICAgbGV0ICRzaGFkb3dCZWZvcmVFbCA9IGlzSG9yaXpvbnRhbCA/ICRzbGlkZUVsLmZpbmQoJy5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnQnKSA6ICRzbGlkZUVsLmZpbmQoJy5zd2lwZXItc2xpZGUtc2hhZG93LXRvcCcpO1xuICAgICAgICBsZXQgJHNoYWRvd0FmdGVyRWwgPSBpc0hvcml6b250YWwgPyAkc2xpZGVFbC5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCcpIDogJHNsaWRlRWwuZmluZCgnLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tJyk7XG5cbiAgICAgICAgaWYgKCRzaGFkb3dCZWZvcmVFbC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAkc2hhZG93QmVmb3JlRWwgPSBjcmVhdGVTaGFkb3cocGFyYW1zLCAkc2xpZGVFbCwgaXNIb3Jpem9udGFsID8gJ2xlZnQnIDogJ3RvcCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRzaGFkb3dBZnRlckVsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICRzaGFkb3dBZnRlckVsID0gY3JlYXRlU2hhZG93KHBhcmFtcywgJHNsaWRlRWwsIGlzSG9yaXpvbnRhbCA/ICdyaWdodCcgOiAnYm90dG9tJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJHNoYWRvd0JlZm9yZUVsLmxlbmd0aCkgJHNoYWRvd0JlZm9yZUVsWzBdLnN0eWxlLm9wYWNpdHkgPSBvZmZzZXRNdWx0aXBsaWVyID4gMCA/IG9mZnNldE11bHRpcGxpZXIgOiAwO1xuICAgICAgICBpZiAoJHNoYWRvd0FmdGVyRWwubGVuZ3RoKSAkc2hhZG93QWZ0ZXJFbFswXS5zdHlsZS5vcGFjaXR5ID0gLW9mZnNldE11bHRpcGxpZXIgPiAwID8gLW9mZnNldE11bHRpcGxpZXIgOiAwO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBzZXRUcmFuc2l0aW9uID0gZHVyYXRpb24gPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIHRyYW5zZm9ybUVsXG4gICAgfSA9IHN3aXBlci5wYXJhbXMuY292ZXJmbG93RWZmZWN0O1xuICAgIGNvbnN0ICR0cmFuc2l0aW9uRWxlbWVudHMgPSB0cmFuc2Zvcm1FbCA/IHN3aXBlci5zbGlkZXMuZmluZCh0cmFuc2Zvcm1FbCkgOiBzd2lwZXIuc2xpZGVzO1xuICAgICR0cmFuc2l0aW9uRWxlbWVudHMudHJhbnNpdGlvbihkdXJhdGlvbikuZmluZCgnLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wLCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCwgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tLCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0JykudHJhbnNpdGlvbihkdXJhdGlvbik7XG4gIH07XG5cbiAgZWZmZWN0SW5pdCh7XG4gICAgZWZmZWN0OiAnY292ZXJmbG93JyxcbiAgICBzd2lwZXIsXG4gICAgb24sXG4gICAgc2V0VHJhbnNsYXRlLFxuICAgIHNldFRyYW5zaXRpb24sXG4gICAgcGVyc3BlY3RpdmU6ICgpID0+IHRydWUsXG4gICAgb3ZlcndyaXRlUGFyYW1zOiAoKSA9PiAoe1xuICAgICAgd2F0Y2hTbGlkZXNQcm9ncmVzczogdHJ1ZVxuICAgIH0pXG4gIH0pO1xufSIsImltcG9ydCBjcmVhdGVTaGFkb3cgZnJvbSAnLi4vLi4vc2hhcmVkL2NyZWF0ZS1zaGFkb3cuanMnO1xuaW1wb3J0IGVmZmVjdEluaXQgZnJvbSAnLi4vLi4vc2hhcmVkL2VmZmVjdC1pbml0LmpzJztcbmltcG9ydCBlZmZlY3RUYXJnZXQgZnJvbSAnLi4vLi4vc2hhcmVkL2VmZmVjdC10YXJnZXQuanMnO1xuaW1wb3J0IGVmZmVjdFZpcnR1YWxUcmFuc2l0aW9uRW5kIGZyb20gJy4uLy4uL3NoYXJlZC9lZmZlY3QtdmlydHVhbC10cmFuc2l0aW9uLWVuZC5qcyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZmZlY3RDcmVhdGl2ZSh7XG4gIHN3aXBlcixcbiAgZXh0ZW5kUGFyYW1zLFxuICBvblxufSkge1xuICBleHRlbmRQYXJhbXMoe1xuICAgIGNyZWF0aXZlRWZmZWN0OiB7XG4gICAgICB0cmFuc2Zvcm1FbDogbnVsbCxcbiAgICAgIGxpbWl0UHJvZ3Jlc3M6IDEsXG4gICAgICBzaGFkb3dQZXJQcm9ncmVzczogZmFsc2UsXG4gICAgICBwcm9ncmVzc011bHRpcGxpZXI6IDEsXG4gICAgICBwZXJzcGVjdGl2ZTogdHJ1ZSxcbiAgICAgIHByZXY6IHtcbiAgICAgICAgdHJhbnNsYXRlOiBbMCwgMCwgMF0sXG4gICAgICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICBzY2FsZTogMVxuICAgICAgfSxcbiAgICAgIG5leHQ6IHtcbiAgICAgICAgdHJhbnNsYXRlOiBbMCwgMCwgMF0sXG4gICAgICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICBzY2FsZTogMVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgZ2V0VHJhbnNsYXRlVmFsdWUgPSB2YWx1ZSA9PiB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHJldHVybiB2YWx1ZTtcbiAgICByZXR1cm4gYCR7dmFsdWV9cHhgO1xuICB9O1xuXG4gIGNvbnN0IHNldFRyYW5zbGF0ZSA9ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBzbGlkZXNcbiAgICB9ID0gc3dpcGVyO1xuICAgIGNvbnN0IHBhcmFtcyA9IHN3aXBlci5wYXJhbXMuY3JlYXRpdmVFZmZlY3Q7XG4gICAgY29uc3Qge1xuICAgICAgcHJvZ3Jlc3NNdWx0aXBsaWVyOiBtdWx0aXBsaWVyXG4gICAgfSA9IHBhcmFtcztcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCAkc2xpZGVFbCA9IHNsaWRlcy5lcShpKTtcbiAgICAgIGNvbnN0IHNsaWRlUHJvZ3Jlc3MgPSAkc2xpZGVFbFswXS5wcm9ncmVzcztcbiAgICAgIGNvbnN0IHByb2dyZXNzID0gTWF0aC5taW4oTWF0aC5tYXgoJHNsaWRlRWxbMF0ucHJvZ3Jlc3MsIC1wYXJhbXMubGltaXRQcm9ncmVzcyksIHBhcmFtcy5saW1pdFByb2dyZXNzKTtcbiAgICAgIGNvbnN0IG9mZnNldCA9ICRzbGlkZUVsWzBdLnN3aXBlclNsaWRlT2Zmc2V0O1xuICAgICAgY29uc3QgdCA9IFtzd2lwZXIucGFyYW1zLmNzc01vZGUgPyAtb2Zmc2V0IC0gc3dpcGVyLnRyYW5zbGF0ZSA6IC1vZmZzZXQsIDAsIDBdO1xuICAgICAgY29uc3QgciA9IFswLCAwLCAwXTtcbiAgICAgIGxldCBjdXN0b20gPSBmYWxzZTtcblxuICAgICAgaWYgKCFzd2lwZXIuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgICAgdFsxXSA9IHRbMF07XG4gICAgICAgIHRbMF0gPSAwO1xuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgdHJhbnNsYXRlOiBbMCwgMCwgMF0sXG4gICAgICAgIHJvdGF0ZTogWzAsIDAsIDBdLFxuICAgICAgICBzY2FsZTogMSxcbiAgICAgICAgb3BhY2l0eTogMVxuICAgICAgfTtcblxuICAgICAgaWYgKHByb2dyZXNzIDwgMCkge1xuICAgICAgICBkYXRhID0gcGFyYW1zLm5leHQ7XG4gICAgICAgIGN1c3RvbSA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKHByb2dyZXNzID4gMCkge1xuICAgICAgICBkYXRhID0gcGFyYW1zLnByZXY7XG4gICAgICAgIGN1c3RvbSA9IHRydWU7XG4gICAgICB9IC8vIHNldCB0cmFuc2xhdGVcblxuXG4gICAgICB0LmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgICB0W2luZGV4XSA9IGBjYWxjKCR7dmFsdWV9cHggKyAoJHtnZXRUcmFuc2xhdGVWYWx1ZShkYXRhLnRyYW5zbGF0ZVtpbmRleF0pfSAqICR7TWF0aC5hYnMocHJvZ3Jlc3MgKiBtdWx0aXBsaWVyKX0pKWA7XG4gICAgICB9KTsgLy8gc2V0IHJvdGF0ZXNcblxuICAgICAgci5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgICAgcltpbmRleF0gPSBkYXRhLnJvdGF0ZVtpbmRleF0gKiBNYXRoLmFicyhwcm9ncmVzcyAqIG11bHRpcGxpZXIpO1xuICAgICAgfSk7XG4gICAgICAkc2xpZGVFbFswXS5zdHlsZS56SW5kZXggPSAtTWF0aC5hYnMoTWF0aC5yb3VuZChzbGlkZVByb2dyZXNzKSkgKyBzbGlkZXMubGVuZ3RoO1xuICAgICAgY29uc3QgdHJhbnNsYXRlU3RyaW5nID0gdC5qb2luKCcsICcpO1xuICAgICAgY29uc3Qgcm90YXRlU3RyaW5nID0gYHJvdGF0ZVgoJHtyWzBdfWRlZykgcm90YXRlWSgke3JbMV19ZGVnKSByb3RhdGVaKCR7clsyXX1kZWcpYDtcbiAgICAgIGNvbnN0IHNjYWxlU3RyaW5nID0gcHJvZ3Jlc3MgPCAwID8gYHNjYWxlKCR7MSArICgxIC0gZGF0YS5zY2FsZSkgKiBwcm9ncmVzcyAqIG11bHRpcGxpZXJ9KWAgOiBgc2NhbGUoJHsxIC0gKDEgLSBkYXRhLnNjYWxlKSAqIHByb2dyZXNzICogbXVsdGlwbGllcn0pYDtcbiAgICAgIGNvbnN0IG9wYWNpdHlTdHJpbmcgPSBwcm9ncmVzcyA8IDAgPyAxICsgKDEgLSBkYXRhLm9wYWNpdHkpICogcHJvZ3Jlc3MgKiBtdWx0aXBsaWVyIDogMSAtICgxIC0gZGF0YS5vcGFjaXR5KSAqIHByb2dyZXNzICogbXVsdGlwbGllcjtcbiAgICAgIGNvbnN0IHRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgke3RyYW5zbGF0ZVN0cmluZ30pICR7cm90YXRlU3RyaW5nfSAke3NjYWxlU3RyaW5nfWA7IC8vIFNldCBzaGFkb3dzXG5cbiAgICAgIGlmIChjdXN0b20gJiYgZGF0YS5zaGFkb3cgfHwgIWN1c3RvbSkge1xuICAgICAgICBsZXQgJHNoYWRvd0VsID0gJHNsaWRlRWwuY2hpbGRyZW4oJy5zd2lwZXItc2xpZGUtc2hhZG93Jyk7XG5cbiAgICAgICAgaWYgKCRzaGFkb3dFbC5sZW5ndGggPT09IDAgJiYgZGF0YS5zaGFkb3cpIHtcbiAgICAgICAgICAkc2hhZG93RWwgPSBjcmVhdGVTaGFkb3cocGFyYW1zLCAkc2xpZGVFbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJHNoYWRvd0VsLmxlbmd0aCkge1xuICAgICAgICAgIGNvbnN0IHNoYWRvd09wYWNpdHkgPSBwYXJhbXMuc2hhZG93UGVyUHJvZ3Jlc3MgPyBwcm9ncmVzcyAqICgxIC8gcGFyYW1zLmxpbWl0UHJvZ3Jlc3MpIDogcHJvZ3Jlc3M7XG4gICAgICAgICAgJHNoYWRvd0VsWzBdLnN0eWxlLm9wYWNpdHkgPSBNYXRoLm1pbihNYXRoLm1heChNYXRoLmFicyhzaGFkb3dPcGFjaXR5KSwgMCksIDEpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0ICR0YXJnZXRFbCA9IGVmZmVjdFRhcmdldChwYXJhbXMsICRzbGlkZUVsKTtcbiAgICAgICR0YXJnZXRFbC50cmFuc2Zvcm0odHJhbnNmb3JtKS5jc3Moe1xuICAgICAgICBvcGFjaXR5OiBvcGFjaXR5U3RyaW5nXG4gICAgICB9KTtcblxuICAgICAgaWYgKGRhdGEub3JpZ2luKSB7XG4gICAgICAgICR0YXJnZXRFbC5jc3MoJ3RyYW5zZm9ybS1vcmlnaW4nLCBkYXRhLm9yaWdpbik7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNldFRyYW5zaXRpb24gPSBkdXJhdGlvbiA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgdHJhbnNmb3JtRWxcbiAgICB9ID0gc3dpcGVyLnBhcmFtcy5jcmVhdGl2ZUVmZmVjdDtcbiAgICBjb25zdCAkdHJhbnNpdGlvbkVsZW1lbnRzID0gdHJhbnNmb3JtRWwgPyBzd2lwZXIuc2xpZGVzLmZpbmQodHJhbnNmb3JtRWwpIDogc3dpcGVyLnNsaWRlcztcbiAgICAkdHJhbnNpdGlvbkVsZW1lbnRzLnRyYW5zaXRpb24oZHVyYXRpb24pLmZpbmQoJy5zd2lwZXItc2xpZGUtc2hhZG93JykudHJhbnNpdGlvbihkdXJhdGlvbik7XG4gICAgZWZmZWN0VmlydHVhbFRyYW5zaXRpb25FbmQoe1xuICAgICAgc3dpcGVyLFxuICAgICAgZHVyYXRpb24sXG4gICAgICB0cmFuc2Zvcm1FbCxcbiAgICAgIGFsbFNsaWRlczogdHJ1ZVxuICAgIH0pO1xuICB9O1xuXG4gIGVmZmVjdEluaXQoe1xuICAgIGVmZmVjdDogJ2NyZWF0aXZlJyxcbiAgICBzd2lwZXIsXG4gICAgb24sXG4gICAgc2V0VHJhbnNsYXRlLFxuICAgIHNldFRyYW5zaXRpb24sXG4gICAgcGVyc3BlY3RpdmU6ICgpID0+IHN3aXBlci5wYXJhbXMuY3JlYXRpdmVFZmZlY3QucGVyc3BlY3RpdmUsXG4gICAgb3ZlcndyaXRlUGFyYW1zOiAoKSA9PiAoe1xuICAgICAgd2F0Y2hTbGlkZXNQcm9ncmVzczogdHJ1ZSxcbiAgICAgIHZpcnR1YWxUcmFuc2xhdGU6ICFzd2lwZXIucGFyYW1zLmNzc01vZGVcbiAgICB9KVxuICB9KTtcbn0iLCJpbXBvcnQgJCBmcm9tICcuLi8uLi9zaGFyZWQvZG9tLmpzJztcbmltcG9ydCBlZmZlY3RJbml0IGZyb20gJy4uLy4uL3NoYXJlZC9lZmZlY3QtaW5pdC5qcyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZmZlY3RDdWJlKHtcbiAgc3dpcGVyLFxuICBleHRlbmRQYXJhbXMsXG4gIG9uXG59KSB7XG4gIGV4dGVuZFBhcmFtcyh7XG4gICAgY3ViZUVmZmVjdDoge1xuICAgICAgc2xpZGVTaGFkb3dzOiB0cnVlLFxuICAgICAgc2hhZG93OiB0cnVlLFxuICAgICAgc2hhZG93T2Zmc2V0OiAyMCxcbiAgICAgIHNoYWRvd1NjYWxlOiAwLjk0XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBzZXRUcmFuc2xhdGUgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgJGVsLFxuICAgICAgJHdyYXBwZXJFbCxcbiAgICAgIHNsaWRlcyxcbiAgICAgIHdpZHRoOiBzd2lwZXJXaWR0aCxcbiAgICAgIGhlaWdodDogc3dpcGVySGVpZ2h0LFxuICAgICAgcnRsVHJhbnNsYXRlOiBydGwsXG4gICAgICBzaXplOiBzd2lwZXJTaXplLFxuICAgICAgYnJvd3NlclxuICAgIH0gPSBzd2lwZXI7XG4gICAgY29uc3QgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy5jdWJlRWZmZWN0O1xuICAgIGNvbnN0IGlzSG9yaXpvbnRhbCA9IHN3aXBlci5pc0hvcml6b250YWwoKTtcbiAgICBjb25zdCBpc1ZpcnR1YWwgPSBzd2lwZXIudmlydHVhbCAmJiBzd2lwZXIucGFyYW1zLnZpcnR1YWwuZW5hYmxlZDtcbiAgICBsZXQgd3JhcHBlclJvdGF0ZSA9IDA7XG4gICAgbGV0ICRjdWJlU2hhZG93RWw7XG5cbiAgICBpZiAocGFyYW1zLnNoYWRvdykge1xuICAgICAgaWYgKGlzSG9yaXpvbnRhbCkge1xuICAgICAgICAkY3ViZVNoYWRvd0VsID0gJHdyYXBwZXJFbC5maW5kKCcuc3dpcGVyLWN1YmUtc2hhZG93Jyk7XG5cbiAgICAgICAgaWYgKCRjdWJlU2hhZG93RWwubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgJGN1YmVTaGFkb3dFbCA9ICQoJzxkaXYgY2xhc3M9XCJzd2lwZXItY3ViZS1zaGFkb3dcIj48L2Rpdj4nKTtcbiAgICAgICAgICAkd3JhcHBlckVsLmFwcGVuZCgkY3ViZVNoYWRvd0VsKTtcbiAgICAgICAgfVxuXG4gICAgICAgICRjdWJlU2hhZG93RWwuY3NzKHtcbiAgICAgICAgICBoZWlnaHQ6IGAke3N3aXBlcldpZHRofXB4YFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRjdWJlU2hhZG93RWwgPSAkZWwuZmluZCgnLnN3aXBlci1jdWJlLXNoYWRvdycpO1xuXG4gICAgICAgIGlmICgkY3ViZVNoYWRvd0VsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICRjdWJlU2hhZG93RWwgPSAkKCc8ZGl2IGNsYXNzPVwic3dpcGVyLWN1YmUtc2hhZG93XCI+PC9kaXY+Jyk7XG4gICAgICAgICAgJGVsLmFwcGVuZCgkY3ViZVNoYWRvd0VsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCAkc2xpZGVFbCA9IHNsaWRlcy5lcShpKTtcbiAgICAgIGxldCBzbGlkZUluZGV4ID0gaTtcblxuICAgICAgaWYgKGlzVmlydHVhbCkge1xuICAgICAgICBzbGlkZUluZGV4ID0gcGFyc2VJbnQoJHNsaWRlRWwuYXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKSwgMTApO1xuICAgICAgfVxuXG4gICAgICBsZXQgc2xpZGVBbmdsZSA9IHNsaWRlSW5kZXggKiA5MDtcbiAgICAgIGxldCByb3VuZCA9IE1hdGguZmxvb3Ioc2xpZGVBbmdsZSAvIDM2MCk7XG5cbiAgICAgIGlmIChydGwpIHtcbiAgICAgICAgc2xpZGVBbmdsZSA9IC1zbGlkZUFuZ2xlO1xuICAgICAgICByb3VuZCA9IE1hdGguZmxvb3IoLXNsaWRlQW5nbGUgLyAzNjApO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9ncmVzcyA9IE1hdGgubWF4KE1hdGgubWluKCRzbGlkZUVsWzBdLnByb2dyZXNzLCAxKSwgLTEpO1xuICAgICAgbGV0IHR4ID0gMDtcbiAgICAgIGxldCB0eSA9IDA7XG4gICAgICBsZXQgdHogPSAwO1xuXG4gICAgICBpZiAoc2xpZGVJbmRleCAlIDQgPT09IDApIHtcbiAgICAgICAgdHggPSAtcm91bmQgKiA0ICogc3dpcGVyU2l6ZTtcbiAgICAgICAgdHogPSAwO1xuICAgICAgfSBlbHNlIGlmICgoc2xpZGVJbmRleCAtIDEpICUgNCA9PT0gMCkge1xuICAgICAgICB0eCA9IDA7XG4gICAgICAgIHR6ID0gLXJvdW5kICogNCAqIHN3aXBlclNpemU7XG4gICAgICB9IGVsc2UgaWYgKChzbGlkZUluZGV4IC0gMikgJSA0ID09PSAwKSB7XG4gICAgICAgIHR4ID0gc3dpcGVyU2l6ZSArIHJvdW5kICogNCAqIHN3aXBlclNpemU7XG4gICAgICAgIHR6ID0gc3dpcGVyU2l6ZTtcbiAgICAgIH0gZWxzZSBpZiAoKHNsaWRlSW5kZXggLSAzKSAlIDQgPT09IDApIHtcbiAgICAgICAgdHggPSAtc3dpcGVyU2l6ZTtcbiAgICAgICAgdHogPSAzICogc3dpcGVyU2l6ZSArIHN3aXBlclNpemUgKiA0ICogcm91bmQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChydGwpIHtcbiAgICAgICAgdHggPSAtdHg7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNIb3Jpem9udGFsKSB7XG4gICAgICAgIHR5ID0gdHg7XG4gICAgICAgIHR4ID0gMDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdHJhbnNmb3JtID0gYHJvdGF0ZVgoJHtpc0hvcml6b250YWwgPyAwIDogLXNsaWRlQW5nbGV9ZGVnKSByb3RhdGVZKCR7aXNIb3Jpem9udGFsID8gc2xpZGVBbmdsZSA6IDB9ZGVnKSB0cmFuc2xhdGUzZCgke3R4fXB4LCAke3R5fXB4LCAke3R6fXB4KWA7XG5cbiAgICAgIGlmIChwcm9ncmVzcyA8PSAxICYmIHByb2dyZXNzID4gLTEpIHtcbiAgICAgICAgd3JhcHBlclJvdGF0ZSA9IHNsaWRlSW5kZXggKiA5MCArIHByb2dyZXNzICogOTA7XG4gICAgICAgIGlmIChydGwpIHdyYXBwZXJSb3RhdGUgPSAtc2xpZGVJbmRleCAqIDkwIC0gcHJvZ3Jlc3MgKiA5MDtcbiAgICAgIH1cblxuICAgICAgJHNsaWRlRWwudHJhbnNmb3JtKHRyYW5zZm9ybSk7XG5cbiAgICAgIGlmIChwYXJhbXMuc2xpZGVTaGFkb3dzKSB7XG4gICAgICAgIC8vIFNldCBzaGFkb3dzXG4gICAgICAgIGxldCBzaGFkb3dCZWZvcmUgPSBpc0hvcml6b250YWwgPyAkc2xpZGVFbC5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0JykgOiAkc2xpZGVFbC5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3AnKTtcbiAgICAgICAgbGV0IHNoYWRvd0FmdGVyID0gaXNIb3Jpem9udGFsID8gJHNsaWRlRWwuZmluZCgnLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQnKSA6ICRzbGlkZUVsLmZpbmQoJy5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbScpO1xuXG4gICAgICAgIGlmIChzaGFkb3dCZWZvcmUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgc2hhZG93QmVmb3JlID0gJChgPGRpdiBjbGFzcz1cInN3aXBlci1zbGlkZS1zaGFkb3ctJHtpc0hvcml6b250YWwgPyAnbGVmdCcgOiAndG9wJ31cIj48L2Rpdj5gKTtcbiAgICAgICAgICAkc2xpZGVFbC5hcHBlbmQoc2hhZG93QmVmb3JlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzaGFkb3dBZnRlci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBzaGFkb3dBZnRlciA9ICQoYDxkaXYgY2xhc3M9XCJzd2lwZXItc2xpZGUtc2hhZG93LSR7aXNIb3Jpem9udGFsID8gJ3JpZ2h0JyA6ICdib3R0b20nfVwiPjwvZGl2PmApO1xuICAgICAgICAgICRzbGlkZUVsLmFwcGVuZChzaGFkb3dBZnRlcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2hhZG93QmVmb3JlLmxlbmd0aCkgc2hhZG93QmVmb3JlWzBdLnN0eWxlLm9wYWNpdHkgPSBNYXRoLm1heCgtcHJvZ3Jlc3MsIDApO1xuICAgICAgICBpZiAoc2hhZG93QWZ0ZXIubGVuZ3RoKSBzaGFkb3dBZnRlclswXS5zdHlsZS5vcGFjaXR5ID0gTWF0aC5tYXgocHJvZ3Jlc3MsIDApO1xuICAgICAgfVxuICAgIH1cblxuICAgICR3cmFwcGVyRWwuY3NzKHtcbiAgICAgICctd2Via2l0LXRyYW5zZm9ybS1vcmlnaW4nOiBgNTAlIDUwJSAtJHtzd2lwZXJTaXplIC8gMn1weGAsXG4gICAgICAndHJhbnNmb3JtLW9yaWdpbic6IGA1MCUgNTAlIC0ke3N3aXBlclNpemUgLyAyfXB4YFxuICAgIH0pO1xuXG4gICAgaWYgKHBhcmFtcy5zaGFkb3cpIHtcbiAgICAgIGlmIChpc0hvcml6b250YWwpIHtcbiAgICAgICAgJGN1YmVTaGFkb3dFbC50cmFuc2Zvcm0oYHRyYW5zbGF0ZTNkKDBweCwgJHtzd2lwZXJXaWR0aCAvIDIgKyBwYXJhbXMuc2hhZG93T2Zmc2V0fXB4LCAkey1zd2lwZXJXaWR0aCAvIDJ9cHgpIHJvdGF0ZVgoOTBkZWcpIHJvdGF0ZVooMGRlZykgc2NhbGUoJHtwYXJhbXMuc2hhZG93U2NhbGV9KWApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgc2hhZG93QW5nbGUgPSBNYXRoLmFicyh3cmFwcGVyUm90YXRlKSAtIE1hdGguZmxvb3IoTWF0aC5hYnMod3JhcHBlclJvdGF0ZSkgLyA5MCkgKiA5MDtcbiAgICAgICAgY29uc3QgbXVsdGlwbGllciA9IDEuNSAtIChNYXRoLnNpbihzaGFkb3dBbmdsZSAqIDIgKiBNYXRoLlBJIC8gMzYwKSAvIDIgKyBNYXRoLmNvcyhzaGFkb3dBbmdsZSAqIDIgKiBNYXRoLlBJIC8gMzYwKSAvIDIpO1xuICAgICAgICBjb25zdCBzY2FsZTEgPSBwYXJhbXMuc2hhZG93U2NhbGU7XG4gICAgICAgIGNvbnN0IHNjYWxlMiA9IHBhcmFtcy5zaGFkb3dTY2FsZSAvIG11bHRpcGxpZXI7XG4gICAgICAgIGNvbnN0IG9mZnNldCA9IHBhcmFtcy5zaGFkb3dPZmZzZXQ7XG4gICAgICAgICRjdWJlU2hhZG93RWwudHJhbnNmb3JtKGBzY2FsZTNkKCR7c2NhbGUxfSwgMSwgJHtzY2FsZTJ9KSB0cmFuc2xhdGUzZCgwcHgsICR7c3dpcGVySGVpZ2h0IC8gMiArIG9mZnNldH1weCwgJHstc3dpcGVySGVpZ2h0IC8gMiAvIHNjYWxlMn1weCkgcm90YXRlWCgtOTBkZWcpYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgekZhY3RvciA9IGJyb3dzZXIuaXNTYWZhcmkgfHwgYnJvd3Nlci5pc1dlYlZpZXcgPyAtc3dpcGVyU2l6ZSAvIDIgOiAwO1xuICAgICR3cmFwcGVyRWwudHJhbnNmb3JtKGB0cmFuc2xhdGUzZCgwcHgsMCwke3pGYWN0b3J9cHgpIHJvdGF0ZVgoJHtzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyAwIDogd3JhcHBlclJvdGF0ZX1kZWcpIHJvdGF0ZVkoJHtzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyAtd3JhcHBlclJvdGF0ZSA6IDB9ZGVnKWApO1xuICB9O1xuXG4gIGNvbnN0IHNldFRyYW5zaXRpb24gPSBkdXJhdGlvbiA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgJGVsLFxuICAgICAgc2xpZGVzXG4gICAgfSA9IHN3aXBlcjtcbiAgICBzbGlkZXMudHJhbnNpdGlvbihkdXJhdGlvbikuZmluZCgnLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wLCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCwgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tLCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0JykudHJhbnNpdGlvbihkdXJhdGlvbik7XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5jdWJlRWZmZWN0LnNoYWRvdyAmJiAhc3dpcGVyLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICAkZWwuZmluZCgnLnN3aXBlci1jdWJlLXNoYWRvdycpLnRyYW5zaXRpb24oZHVyYXRpb24pO1xuICAgIH1cbiAgfTtcblxuICBlZmZlY3RJbml0KHtcbiAgICBlZmZlY3Q6ICdjdWJlJyxcbiAgICBzd2lwZXIsXG4gICAgb24sXG4gICAgc2V0VHJhbnNsYXRlLFxuICAgIHNldFRyYW5zaXRpb24sXG4gICAgcGVyc3BlY3RpdmU6ICgpID0+IHRydWUsXG4gICAgb3ZlcndyaXRlUGFyYW1zOiAoKSA9PiAoe1xuICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgIHNsaWRlc1Blckdyb3VwOiAxLFxuICAgICAgd2F0Y2hTbGlkZXNQcm9ncmVzczogdHJ1ZSxcbiAgICAgIHJlc2lzdGFuY2VSYXRpbzogMCxcbiAgICAgIHNwYWNlQmV0d2VlbjogMCxcbiAgICAgIGNlbnRlcmVkU2xpZGVzOiBmYWxzZSxcbiAgICAgIHZpcnR1YWxUcmFuc2xhdGU6IHRydWVcbiAgICB9KVxuICB9KTtcbn0iLCJpbXBvcnQgZWZmZWN0SW5pdCBmcm9tICcuLi8uLi9zaGFyZWQvZWZmZWN0LWluaXQuanMnO1xuaW1wb3J0IGVmZmVjdFRhcmdldCBmcm9tICcuLi8uLi9zaGFyZWQvZWZmZWN0LXRhcmdldC5qcyc7XG5pbXBvcnQgZWZmZWN0VmlydHVhbFRyYW5zaXRpb25FbmQgZnJvbSAnLi4vLi4vc2hhcmVkL2VmZmVjdC12aXJ0dWFsLXRyYW5zaXRpb24tZW5kLmpzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVmZmVjdEZhZGUoe1xuICBzd2lwZXIsXG4gIGV4dGVuZFBhcmFtcyxcbiAgb25cbn0pIHtcbiAgZXh0ZW5kUGFyYW1zKHtcbiAgICBmYWRlRWZmZWN0OiB7XG4gICAgICBjcm9zc0ZhZGU6IGZhbHNlLFxuICAgICAgdHJhbnNmb3JtRWw6IG51bGxcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IHNldFRyYW5zbGF0ZSA9ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBzbGlkZXNcbiAgICB9ID0gc3dpcGVyO1xuICAgIGNvbnN0IHBhcmFtcyA9IHN3aXBlci5wYXJhbXMuZmFkZUVmZmVjdDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCAkc2xpZGVFbCA9IHN3aXBlci5zbGlkZXMuZXEoaSk7XG4gICAgICBjb25zdCBvZmZzZXQgPSAkc2xpZGVFbFswXS5zd2lwZXJTbGlkZU9mZnNldDtcbiAgICAgIGxldCB0eCA9IC1vZmZzZXQ7XG4gICAgICBpZiAoIXN3aXBlci5wYXJhbXMudmlydHVhbFRyYW5zbGF0ZSkgdHggLT0gc3dpcGVyLnRyYW5zbGF0ZTtcbiAgICAgIGxldCB0eSA9IDA7XG5cbiAgICAgIGlmICghc3dpcGVyLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICAgIHR5ID0gdHg7XG4gICAgICAgIHR4ID0gMDtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc2xpZGVPcGFjaXR5ID0gc3dpcGVyLnBhcmFtcy5mYWRlRWZmZWN0LmNyb3NzRmFkZSA/IE1hdGgubWF4KDEgLSBNYXRoLmFicygkc2xpZGVFbFswXS5wcm9ncmVzcyksIDApIDogMSArIE1hdGgubWluKE1hdGgubWF4KCRzbGlkZUVsWzBdLnByb2dyZXNzLCAtMSksIDApO1xuICAgICAgY29uc3QgJHRhcmdldEVsID0gZWZmZWN0VGFyZ2V0KHBhcmFtcywgJHNsaWRlRWwpO1xuICAgICAgJHRhcmdldEVsLmNzcyh7XG4gICAgICAgIG9wYWNpdHk6IHNsaWRlT3BhY2l0eVxuICAgICAgfSkudHJhbnNmb3JtKGB0cmFuc2xhdGUzZCgke3R4fXB4LCAke3R5fXB4LCAwcHgpYCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNldFRyYW5zaXRpb24gPSBkdXJhdGlvbiA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgdHJhbnNmb3JtRWxcbiAgICB9ID0gc3dpcGVyLnBhcmFtcy5mYWRlRWZmZWN0O1xuICAgIGNvbnN0ICR0cmFuc2l0aW9uRWxlbWVudHMgPSB0cmFuc2Zvcm1FbCA/IHN3aXBlci5zbGlkZXMuZmluZCh0cmFuc2Zvcm1FbCkgOiBzd2lwZXIuc2xpZGVzO1xuICAgICR0cmFuc2l0aW9uRWxlbWVudHMudHJhbnNpdGlvbihkdXJhdGlvbik7XG4gICAgZWZmZWN0VmlydHVhbFRyYW5zaXRpb25FbmQoe1xuICAgICAgc3dpcGVyLFxuICAgICAgZHVyYXRpb24sXG4gICAgICB0cmFuc2Zvcm1FbCxcbiAgICAgIGFsbFNsaWRlczogdHJ1ZVxuICAgIH0pO1xuICB9O1xuXG4gIGVmZmVjdEluaXQoe1xuICAgIGVmZmVjdDogJ2ZhZGUnLFxuICAgIHN3aXBlcixcbiAgICBvbixcbiAgICBzZXRUcmFuc2xhdGUsXG4gICAgc2V0VHJhbnNpdGlvbixcbiAgICBvdmVyd3JpdGVQYXJhbXM6ICgpID0+ICh7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgc2xpZGVzUGVyR3JvdXA6IDEsXG4gICAgICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAwLFxuICAgICAgdmlydHVhbFRyYW5zbGF0ZTogIXN3aXBlci5wYXJhbXMuY3NzTW9kZVxuICAgIH0pXG4gIH0pO1xufSIsImltcG9ydCBjcmVhdGVTaGFkb3cgZnJvbSAnLi4vLi4vc2hhcmVkL2NyZWF0ZS1zaGFkb3cuanMnO1xuaW1wb3J0IGVmZmVjdEluaXQgZnJvbSAnLi4vLi4vc2hhcmVkL2VmZmVjdC1pbml0LmpzJztcbmltcG9ydCBlZmZlY3RUYXJnZXQgZnJvbSAnLi4vLi4vc2hhcmVkL2VmZmVjdC10YXJnZXQuanMnO1xuaW1wb3J0IGVmZmVjdFZpcnR1YWxUcmFuc2l0aW9uRW5kIGZyb20gJy4uLy4uL3NoYXJlZC9lZmZlY3QtdmlydHVhbC10cmFuc2l0aW9uLWVuZC5qcyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZmZlY3RGbGlwKHtcbiAgc3dpcGVyLFxuICBleHRlbmRQYXJhbXMsXG4gIG9uXG59KSB7XG4gIGV4dGVuZFBhcmFtcyh7XG4gICAgZmxpcEVmZmVjdDoge1xuICAgICAgc2xpZGVTaGFkb3dzOiB0cnVlLFxuICAgICAgbGltaXRSb3RhdGlvbjogdHJ1ZSxcbiAgICAgIHRyYW5zZm9ybUVsOiBudWxsXG4gICAgfVxuICB9KTtcblxuICBjb25zdCBzZXRUcmFuc2xhdGUgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgc2xpZGVzLFxuICAgICAgcnRsVHJhbnNsYXRlOiBydGxcbiAgICB9ID0gc3dpcGVyO1xuICAgIGNvbnN0IHBhcmFtcyA9IHN3aXBlci5wYXJhbXMuZmxpcEVmZmVjdDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCAkc2xpZGVFbCA9IHNsaWRlcy5lcShpKTtcbiAgICAgIGxldCBwcm9ncmVzcyA9ICRzbGlkZUVsWzBdLnByb2dyZXNzO1xuXG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5mbGlwRWZmZWN0LmxpbWl0Um90YXRpb24pIHtcbiAgICAgICAgcHJvZ3Jlc3MgPSBNYXRoLm1heChNYXRoLm1pbigkc2xpZGVFbFswXS5wcm9ncmVzcywgMSksIC0xKTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgb2Zmc2V0ID0gJHNsaWRlRWxbMF0uc3dpcGVyU2xpZGVPZmZzZXQ7XG4gICAgICBjb25zdCByb3RhdGUgPSAtMTgwICogcHJvZ3Jlc3M7XG4gICAgICBsZXQgcm90YXRlWSA9IHJvdGF0ZTtcbiAgICAgIGxldCByb3RhdGVYID0gMDtcbiAgICAgIGxldCB0eCA9IHN3aXBlci5wYXJhbXMuY3NzTW9kZSA/IC1vZmZzZXQgLSBzd2lwZXIudHJhbnNsYXRlIDogLW9mZnNldDtcbiAgICAgIGxldCB0eSA9IDA7XG5cbiAgICAgIGlmICghc3dpcGVyLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICAgIHR5ID0gdHg7XG4gICAgICAgIHR4ID0gMDtcbiAgICAgICAgcm90YXRlWCA9IC1yb3RhdGVZO1xuICAgICAgICByb3RhdGVZID0gMDtcbiAgICAgIH0gZWxzZSBpZiAocnRsKSB7XG4gICAgICAgIHJvdGF0ZVkgPSAtcm90YXRlWTtcbiAgICAgIH1cblxuICAgICAgJHNsaWRlRWxbMF0uc3R5bGUuekluZGV4ID0gLU1hdGguYWJzKE1hdGgucm91bmQocHJvZ3Jlc3MpKSArIHNsaWRlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChwYXJhbXMuc2xpZGVTaGFkb3dzKSB7XG4gICAgICAgIC8vIFNldCBzaGFkb3dzXG4gICAgICAgIGxldCBzaGFkb3dCZWZvcmUgPSBzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyAkc2xpZGVFbC5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0JykgOiAkc2xpZGVFbC5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3AnKTtcbiAgICAgICAgbGV0IHNoYWRvd0FmdGVyID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gJHNsaWRlRWwuZmluZCgnLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQnKSA6ICRzbGlkZUVsLmZpbmQoJy5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbScpO1xuXG4gICAgICAgIGlmIChzaGFkb3dCZWZvcmUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgc2hhZG93QmVmb3JlID0gY3JlYXRlU2hhZG93KHBhcmFtcywgJHNsaWRlRWwsIHN3aXBlci5pc0hvcml6b250YWwoKSA/ICdsZWZ0JyA6ICd0b3AnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzaGFkb3dBZnRlci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBzaGFkb3dBZnRlciA9IGNyZWF0ZVNoYWRvdyhwYXJhbXMsICRzbGlkZUVsLCBzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyAncmlnaHQnIDogJ2JvdHRvbScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNoYWRvd0JlZm9yZS5sZW5ndGgpIHNoYWRvd0JlZm9yZVswXS5zdHlsZS5vcGFjaXR5ID0gTWF0aC5tYXgoLXByb2dyZXNzLCAwKTtcbiAgICAgICAgaWYgKHNoYWRvd0FmdGVyLmxlbmd0aCkgc2hhZG93QWZ0ZXJbMF0uc3R5bGUub3BhY2l0eSA9IE1hdGgubWF4KHByb2dyZXNzLCAwKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7dHh9cHgsICR7dHl9cHgsIDBweCkgcm90YXRlWCgke3JvdGF0ZVh9ZGVnKSByb3RhdGVZKCR7cm90YXRlWX1kZWcpYDtcbiAgICAgIGNvbnN0ICR0YXJnZXRFbCA9IGVmZmVjdFRhcmdldChwYXJhbXMsICRzbGlkZUVsKTtcbiAgICAgICR0YXJnZXRFbC50cmFuc2Zvcm0odHJhbnNmb3JtKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2V0VHJhbnNpdGlvbiA9IGR1cmF0aW9uID0+IHtcbiAgICBjb25zdCB7XG4gICAgICB0cmFuc2Zvcm1FbFxuICAgIH0gPSBzd2lwZXIucGFyYW1zLmZsaXBFZmZlY3Q7XG4gICAgY29uc3QgJHRyYW5zaXRpb25FbGVtZW50cyA9IHRyYW5zZm9ybUVsID8gc3dpcGVyLnNsaWRlcy5maW5kKHRyYW5zZm9ybUVsKSA6IHN3aXBlci5zbGlkZXM7XG4gICAgJHRyYW5zaXRpb25FbGVtZW50cy50cmFuc2l0aW9uKGR1cmF0aW9uKS5maW5kKCcuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3AsIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0LCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20sIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnQnKS50cmFuc2l0aW9uKGR1cmF0aW9uKTtcbiAgICBlZmZlY3RWaXJ0dWFsVHJhbnNpdGlvbkVuZCh7XG4gICAgICBzd2lwZXIsXG4gICAgICBkdXJhdGlvbixcbiAgICAgIHRyYW5zZm9ybUVsXG4gICAgfSk7XG4gIH07XG5cbiAgZWZmZWN0SW5pdCh7XG4gICAgZWZmZWN0OiAnZmxpcCcsXG4gICAgc3dpcGVyLFxuICAgIG9uLFxuICAgIHNldFRyYW5zbGF0ZSxcbiAgICBzZXRUcmFuc2l0aW9uLFxuICAgIHBlcnNwZWN0aXZlOiAoKSA9PiB0cnVlLFxuICAgIG92ZXJ3cml0ZVBhcmFtczogKCkgPT4gKHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICBzbGlkZXNQZXJHcm91cDogMSxcbiAgICAgIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXG4gICAgICBzcGFjZUJldHdlZW46IDAsXG4gICAgICB2aXJ0dWFsVHJhbnNsYXRlOiAhc3dpcGVyLnBhcmFtcy5jc3NNb2RlXG4gICAgfSlcbiAgfSk7XG59IiwiaW1wb3J0IHsgbm93IH0gZnJvbSAnLi4vLi4vc2hhcmVkL3V0aWxzLmpzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZyZWVNb2RlKHtcbiAgc3dpcGVyLFxuICBleHRlbmRQYXJhbXMsXG4gIGVtaXQsXG4gIG9uY2Vcbn0pIHtcbiAgZXh0ZW5kUGFyYW1zKHtcbiAgICBmcmVlTW9kZToge1xuICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICBtb21lbnR1bTogdHJ1ZSxcbiAgICAgIG1vbWVudHVtUmF0aW86IDEsXG4gICAgICBtb21lbnR1bUJvdW5jZTogdHJ1ZSxcbiAgICAgIG1vbWVudHVtQm91bmNlUmF0aW86IDEsXG4gICAgICBtb21lbnR1bVZlbG9jaXR5UmF0aW86IDEsXG4gICAgICBzdGlja3k6IGZhbHNlLFxuICAgICAgbWluaW11bVZlbG9jaXR5OiAwLjAyXG4gICAgfVxuICB9KTtcblxuICBmdW5jdGlvbiBvblRvdWNoTW92ZSgpIHtcbiAgICBjb25zdCB7XG4gICAgICB0b3VjaEV2ZW50c0RhdGE6IGRhdGEsXG4gICAgICB0b3VjaGVzXG4gICAgfSA9IHN3aXBlcjsgLy8gVmVsb2NpdHlcblxuICAgIGlmIChkYXRhLnZlbG9jaXRpZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBkYXRhLnZlbG9jaXRpZXMucHVzaCh7XG4gICAgICAgIHBvc2l0aW9uOiB0b3VjaGVzW3N3aXBlci5pc0hvcml6b250YWwoKSA/ICdzdGFydFgnIDogJ3N0YXJ0WSddLFxuICAgICAgICB0aW1lOiBkYXRhLnRvdWNoU3RhcnRUaW1lXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBkYXRhLnZlbG9jaXRpZXMucHVzaCh7XG4gICAgICBwb3NpdGlvbjogdG91Y2hlc1tzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyAnY3VycmVudFgnIDogJ2N1cnJlbnRZJ10sXG4gICAgICB0aW1lOiBub3coKVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gb25Ub3VjaEVuZCh7XG4gICAgY3VycmVudFBvc1xuICB9KSB7XG4gICAgY29uc3Qge1xuICAgICAgcGFyYW1zLFxuICAgICAgJHdyYXBwZXJFbCxcbiAgICAgIHJ0bFRyYW5zbGF0ZTogcnRsLFxuICAgICAgc25hcEdyaWQsXG4gICAgICB0b3VjaEV2ZW50c0RhdGE6IGRhdGFcbiAgICB9ID0gc3dpcGVyOyAvLyBUaW1lIGRpZmZcblxuICAgIGNvbnN0IHRvdWNoRW5kVGltZSA9IG5vdygpO1xuICAgIGNvbnN0IHRpbWVEaWZmID0gdG91Y2hFbmRUaW1lIC0gZGF0YS50b3VjaFN0YXJ0VGltZTtcblxuICAgIGlmIChjdXJyZW50UG9zIDwgLXN3aXBlci5taW5UcmFuc2xhdGUoKSkge1xuICAgICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLmFjdGl2ZUluZGV4KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoY3VycmVudFBvcyA+IC1zd2lwZXIubWF4VHJhbnNsYXRlKCkpIHtcbiAgICAgIGlmIChzd2lwZXIuc2xpZGVzLmxlbmd0aCA8IHNuYXBHcmlkLmxlbmd0aCkge1xuICAgICAgICBzd2lwZXIuc2xpZGVUbyhzbmFwR3JpZC5sZW5ndGggLSAxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN3aXBlci5zbGlkZVRvKHN3aXBlci5zbGlkZXMubGVuZ3RoIC0gMSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLmZyZWVNb2RlLm1vbWVudHVtKSB7XG4gICAgICBpZiAoZGF0YS52ZWxvY2l0aWVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgY29uc3QgbGFzdE1vdmVFdmVudCA9IGRhdGEudmVsb2NpdGllcy5wb3AoKTtcbiAgICAgICAgY29uc3QgdmVsb2NpdHlFdmVudCA9IGRhdGEudmVsb2NpdGllcy5wb3AoKTtcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBsYXN0TW92ZUV2ZW50LnBvc2l0aW9uIC0gdmVsb2NpdHlFdmVudC5wb3NpdGlvbjtcbiAgICAgICAgY29uc3QgdGltZSA9IGxhc3RNb3ZlRXZlbnQudGltZSAtIHZlbG9jaXR5RXZlbnQudGltZTtcbiAgICAgICAgc3dpcGVyLnZlbG9jaXR5ID0gZGlzdGFuY2UgLyB0aW1lO1xuICAgICAgICBzd2lwZXIudmVsb2NpdHkgLz0gMjtcblxuICAgICAgICBpZiAoTWF0aC5hYnMoc3dpcGVyLnZlbG9jaXR5KSA8IHBhcmFtcy5mcmVlTW9kZS5taW5pbXVtVmVsb2NpdHkpIHtcbiAgICAgICAgICBzd2lwZXIudmVsb2NpdHkgPSAwO1xuICAgICAgICB9IC8vIHRoaXMgaW1wbGllcyB0aGF0IHRoZSB1c2VyIHN0b3BwZWQgbW92aW5nIGEgZmluZ2VyIHRoZW4gcmVsZWFzZWQuXG4gICAgICAgIC8vIFRoZXJlIHdvdWxkIGJlIG5vIGV2ZW50cyB3aXRoIGRpc3RhbmNlIHplcm8sIHNvIHRoZSBsYXN0IGV2ZW50IGlzIHN0YWxlLlxuXG5cbiAgICAgICAgaWYgKHRpbWUgPiAxNTAgfHwgbm93KCkgLSBsYXN0TW92ZUV2ZW50LnRpbWUgPiAzMDApIHtcbiAgICAgICAgICBzd2lwZXIudmVsb2NpdHkgPSAwO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzd2lwZXIudmVsb2NpdHkgPSAwO1xuICAgICAgfVxuXG4gICAgICBzd2lwZXIudmVsb2NpdHkgKj0gcGFyYW1zLmZyZWVNb2RlLm1vbWVudHVtVmVsb2NpdHlSYXRpbztcbiAgICAgIGRhdGEudmVsb2NpdGllcy5sZW5ndGggPSAwO1xuICAgICAgbGV0IG1vbWVudHVtRHVyYXRpb24gPSAxMDAwICogcGFyYW1zLmZyZWVNb2RlLm1vbWVudHVtUmF0aW87XG4gICAgICBjb25zdCBtb21lbnR1bURpc3RhbmNlID0gc3dpcGVyLnZlbG9jaXR5ICogbW9tZW50dW1EdXJhdGlvbjtcbiAgICAgIGxldCBuZXdQb3NpdGlvbiA9IHN3aXBlci50cmFuc2xhdGUgKyBtb21lbnR1bURpc3RhbmNlO1xuICAgICAgaWYgKHJ0bCkgbmV3UG9zaXRpb24gPSAtbmV3UG9zaXRpb247XG4gICAgICBsZXQgZG9Cb3VuY2UgPSBmYWxzZTtcbiAgICAgIGxldCBhZnRlckJvdW5jZVBvc2l0aW9uO1xuICAgICAgY29uc3QgYm91bmNlQW1vdW50ID0gTWF0aC5hYnMoc3dpcGVyLnZlbG9jaXR5KSAqIDIwICogcGFyYW1zLmZyZWVNb2RlLm1vbWVudHVtQm91bmNlUmF0aW87XG4gICAgICBsZXQgbmVlZHNMb29wRml4O1xuXG4gICAgICBpZiAobmV3UG9zaXRpb24gPCBzd2lwZXIubWF4VHJhbnNsYXRlKCkpIHtcbiAgICAgICAgaWYgKHBhcmFtcy5mcmVlTW9kZS5tb21lbnR1bUJvdW5jZSkge1xuICAgICAgICAgIGlmIChuZXdQb3NpdGlvbiArIHN3aXBlci5tYXhUcmFuc2xhdGUoKSA8IC1ib3VuY2VBbW91bnQpIHtcbiAgICAgICAgICAgIG5ld1Bvc2l0aW9uID0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpIC0gYm91bmNlQW1vdW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGFmdGVyQm91bmNlUG9zaXRpb24gPSBzd2lwZXIubWF4VHJhbnNsYXRlKCk7XG4gICAgICAgICAgZG9Cb3VuY2UgPSB0cnVlO1xuICAgICAgICAgIGRhdGEuYWxsb3dNb21lbnR1bUJvdW5jZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3UG9zaXRpb24gPSBzd2lwZXIubWF4VHJhbnNsYXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyYW1zLmxvb3AgJiYgcGFyYW1zLmNlbnRlcmVkU2xpZGVzKSBuZWVkc0xvb3BGaXggPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChuZXdQb3NpdGlvbiA+IHN3aXBlci5taW5UcmFuc2xhdGUoKSkge1xuICAgICAgICBpZiAocGFyYW1zLmZyZWVNb2RlLm1vbWVudHVtQm91bmNlKSB7XG4gICAgICAgICAgaWYgKG5ld1Bvc2l0aW9uIC0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpID4gYm91bmNlQW1vdW50KSB7XG4gICAgICAgICAgICBuZXdQb3NpdGlvbiA9IHN3aXBlci5taW5UcmFuc2xhdGUoKSArIGJvdW5jZUFtb3VudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhZnRlckJvdW5jZVBvc2l0aW9uID0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpO1xuICAgICAgICAgIGRvQm91bmNlID0gdHJ1ZTtcbiAgICAgICAgICBkYXRhLmFsbG93TW9tZW50dW1Cb3VuY2UgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld1Bvc2l0aW9uID0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcmFtcy5sb29wICYmIHBhcmFtcy5jZW50ZXJlZFNsaWRlcykgbmVlZHNMb29wRml4ID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAocGFyYW1zLmZyZWVNb2RlLnN0aWNreSkge1xuICAgICAgICBsZXQgbmV4dFNsaWRlO1xuXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc25hcEdyaWQubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICBpZiAoc25hcEdyaWRbal0gPiAtbmV3UG9zaXRpb24pIHtcbiAgICAgICAgICAgIG5leHRTbGlkZSA9IGo7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoTWF0aC5hYnMoc25hcEdyaWRbbmV4dFNsaWRlXSAtIG5ld1Bvc2l0aW9uKSA8IE1hdGguYWJzKHNuYXBHcmlkW25leHRTbGlkZSAtIDFdIC0gbmV3UG9zaXRpb24pIHx8IHN3aXBlci5zd2lwZURpcmVjdGlvbiA9PT0gJ25leHQnKSB7XG4gICAgICAgICAgbmV3UG9zaXRpb24gPSBzbmFwR3JpZFtuZXh0U2xpZGVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld1Bvc2l0aW9uID0gc25hcEdyaWRbbmV4dFNsaWRlIC0gMV07XG4gICAgICAgIH1cblxuICAgICAgICBuZXdQb3NpdGlvbiA9IC1uZXdQb3NpdGlvbjtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRzTG9vcEZpeCkge1xuICAgICAgICBvbmNlKCd0cmFuc2l0aW9uRW5kJywgKCkgPT4ge1xuICAgICAgICAgIHN3aXBlci5sb29wRml4KCk7XG4gICAgICAgIH0pO1xuICAgICAgfSAvLyBGaXggZHVyYXRpb25cblxuXG4gICAgICBpZiAoc3dpcGVyLnZlbG9jaXR5ICE9PSAwKSB7XG4gICAgICAgIGlmIChydGwpIHtcbiAgICAgICAgICBtb21lbnR1bUR1cmF0aW9uID0gTWF0aC5hYnMoKC1uZXdQb3NpdGlvbiAtIHN3aXBlci50cmFuc2xhdGUpIC8gc3dpcGVyLnZlbG9jaXR5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtb21lbnR1bUR1cmF0aW9uID0gTWF0aC5hYnMoKG5ld1Bvc2l0aW9uIC0gc3dpcGVyLnRyYW5zbGF0ZSkgLyBzd2lwZXIudmVsb2NpdHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcmFtcy5mcmVlTW9kZS5zdGlja3kpIHtcbiAgICAgICAgICAvLyBJZiBmcmVlTW9kZS5zdGlja3kgaXMgYWN0aXZlIGFuZCB0aGUgdXNlciBlbmRzIGEgc3dpcGUgd2l0aCBhIHNsb3ctdmVsb2NpdHlcbiAgICAgICAgICAvLyBldmVudCwgdGhlbiBkdXJhdGlvbnMgY2FuIGJlIDIwKyBzZWNvbmRzIHRvIHNsaWRlIG9uZSAob3IgemVybyEpIHNsaWRlcy5cbiAgICAgICAgICAvLyBJdCdzIGVhc3kgdG8gc2VlIHRoaXMgd2hlbiBzaW11bGF0aW5nIHRvdWNoIHdpdGggbW91c2UgZXZlbnRzLiBUbyBmaXggdGhpcyxcbiAgICAgICAgICAvLyBsaW1pdCBzaW5nbGUtc2xpZGUgc3dpcGVzIHRvIHRoZSBkZWZhdWx0IHNsaWRlIGR1cmF0aW9uLiBUaGlzIGFsc28gaGFzIHRoZVxuICAgICAgICAgIC8vIG5pY2Ugc2lkZSBlZmZlY3Qgb2YgbWF0Y2hpbmcgc2xpZGUgc3BlZWQgaWYgdGhlIHVzZXIgc3RvcHBlZCBtb3ZpbmcgYmVmb3JlXG4gICAgICAgICAgLy8gbGlmdGluZyBmaW5nZXIgb3IgbW91c2UgdnMuIG1vdmluZyBzbG93bHkgYmVmb3JlIGxpZnRpbmcgdGhlIGZpbmdlci9tb3VzZS5cbiAgICAgICAgICAvLyBGb3IgZmFzdGVyIHN3aXBlcywgYWxzbyBhcHBseSBsaW1pdHMgKGFsYmVpdCBoaWdoZXIgb25lcykuXG4gICAgICAgICAgY29uc3QgbW92ZURpc3RhbmNlID0gTWF0aC5hYnMoKHJ0bCA/IC1uZXdQb3NpdGlvbiA6IG5ld1Bvc2l0aW9uKSAtIHN3aXBlci50cmFuc2xhdGUpO1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnRTbGlkZVNpemUgPSBzd2lwZXIuc2xpZGVzU2l6ZXNHcmlkW3N3aXBlci5hY3RpdmVJbmRleF07XG5cbiAgICAgICAgICBpZiAobW92ZURpc3RhbmNlIDwgY3VycmVudFNsaWRlU2l6ZSkge1xuICAgICAgICAgICAgbW9tZW50dW1EdXJhdGlvbiA9IHBhcmFtcy5zcGVlZDtcbiAgICAgICAgICB9IGVsc2UgaWYgKG1vdmVEaXN0YW5jZSA8IDIgKiBjdXJyZW50U2xpZGVTaXplKSB7XG4gICAgICAgICAgICBtb21lbnR1bUR1cmF0aW9uID0gcGFyYW1zLnNwZWVkICogMS41O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb21lbnR1bUR1cmF0aW9uID0gcGFyYW1zLnNwZWVkICogMi41O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChwYXJhbXMuZnJlZU1vZGUuc3RpY2t5KSB7XG4gICAgICAgIHN3aXBlci5zbGlkZVRvQ2xvc2VzdCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChwYXJhbXMuZnJlZU1vZGUubW9tZW50dW1Cb3VuY2UgJiYgZG9Cb3VuY2UpIHtcbiAgICAgICAgc3dpcGVyLnVwZGF0ZVByb2dyZXNzKGFmdGVyQm91bmNlUG9zaXRpb24pO1xuICAgICAgICBzd2lwZXIuc2V0VHJhbnNpdGlvbihtb21lbnR1bUR1cmF0aW9uKTtcbiAgICAgICAgc3dpcGVyLnNldFRyYW5zbGF0ZShuZXdQb3NpdGlvbik7XG4gICAgICAgIHN3aXBlci50cmFuc2l0aW9uU3RhcnQodHJ1ZSwgc3dpcGVyLnN3aXBlRGlyZWN0aW9uKTtcbiAgICAgICAgc3dpcGVyLmFuaW1hdGluZyA9IHRydWU7XG4gICAgICAgICR3cmFwcGVyRWwudHJhbnNpdGlvbkVuZCgoKSA9PiB7XG4gICAgICAgICAgaWYgKCFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZCB8fCAhZGF0YS5hbGxvd01vbWVudHVtQm91bmNlKSByZXR1cm47XG4gICAgICAgICAgZW1pdCgnbW9tZW50dW1Cb3VuY2UnKTtcbiAgICAgICAgICBzd2lwZXIuc2V0VHJhbnNpdGlvbihwYXJhbXMuc3BlZWQpO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc3dpcGVyLnNldFRyYW5zbGF0ZShhZnRlckJvdW5jZVBvc2l0aW9uKTtcbiAgICAgICAgICAgICR3cmFwcGVyRWwudHJhbnNpdGlvbkVuZCgoKSA9PiB7XG4gICAgICAgICAgICAgIGlmICghc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQpIHJldHVybjtcbiAgICAgICAgICAgICAgc3dpcGVyLnRyYW5zaXRpb25FbmQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sIDApO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoc3dpcGVyLnZlbG9jaXR5KSB7XG4gICAgICAgIGVtaXQoJ19mcmVlTW9kZU5vTW9tZW50dW1SZWxlYXNlJyk7XG4gICAgICAgIHN3aXBlci51cGRhdGVQcm9ncmVzcyhuZXdQb3NpdGlvbik7XG4gICAgICAgIHN3aXBlci5zZXRUcmFuc2l0aW9uKG1vbWVudHVtRHVyYXRpb24pO1xuICAgICAgICBzd2lwZXIuc2V0VHJhbnNsYXRlKG5ld1Bvc2l0aW9uKTtcbiAgICAgICAgc3dpcGVyLnRyYW5zaXRpb25TdGFydCh0cnVlLCBzd2lwZXIuc3dpcGVEaXJlY3Rpb24pO1xuXG4gICAgICAgIGlmICghc3dpcGVyLmFuaW1hdGluZykge1xuICAgICAgICAgIHN3aXBlci5hbmltYXRpbmcgPSB0cnVlO1xuICAgICAgICAgICR3cmFwcGVyRWwudHJhbnNpdGlvbkVuZCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkKSByZXR1cm47XG4gICAgICAgICAgICBzd2lwZXIudHJhbnNpdGlvbkVuZCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzd2lwZXIudXBkYXRlUHJvZ3Jlc3MobmV3UG9zaXRpb24pO1xuICAgICAgfVxuXG4gICAgICBzd2lwZXIudXBkYXRlQWN0aXZlSW5kZXgoKTtcbiAgICAgIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG4gICAgfSBlbHNlIGlmIChwYXJhbXMuZnJlZU1vZGUuc3RpY2t5KSB7XG4gICAgICBzd2lwZXIuc2xpZGVUb0Nsb3Nlc3QoKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKHBhcmFtcy5mcmVlTW9kZSkge1xuICAgICAgZW1pdCgnX2ZyZWVNb2RlTm9Nb21lbnR1bVJlbGVhc2UnKTtcbiAgICB9XG5cbiAgICBpZiAoIXBhcmFtcy5mcmVlTW9kZS5tb21lbnR1bSB8fCB0aW1lRGlmZiA+PSBwYXJhbXMubG9uZ1N3aXBlc01zKSB7XG4gICAgICBzd2lwZXIudXBkYXRlUHJvZ3Jlc3MoKTtcbiAgICAgIHN3aXBlci51cGRhdGVBY3RpdmVJbmRleCgpO1xuICAgICAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcbiAgICB9XG4gIH1cblxuICBPYmplY3QuYXNzaWduKHN3aXBlciwge1xuICAgIGZyZWVNb2RlOiB7XG4gICAgICBvblRvdWNoTW92ZSxcbiAgICAgIG9uVG91Y2hFbmRcbiAgICB9XG4gIH0pO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdyaWQoe1xuICBzd2lwZXIsXG4gIGV4dGVuZFBhcmFtc1xufSkge1xuICBleHRlbmRQYXJhbXMoe1xuICAgIGdyaWQ6IHtcbiAgICAgIHJvd3M6IDEsXG4gICAgICBmaWxsOiAnY29sdW1uJ1xuICAgIH1cbiAgfSk7XG4gIGxldCBzbGlkZXNOdW1iZXJFdmVuVG9Sb3dzO1xuICBsZXQgc2xpZGVzUGVyUm93O1xuICBsZXQgbnVtRnVsbENvbHVtbnM7XG5cbiAgY29uc3QgaW5pdFNsaWRlcyA9IHNsaWRlc0xlbmd0aCA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgc2xpZGVzUGVyVmlld1xuICAgIH0gPSBzd2lwZXIucGFyYW1zO1xuICAgIGNvbnN0IHtcbiAgICAgIHJvd3MsXG4gICAgICBmaWxsXG4gICAgfSA9IHN3aXBlci5wYXJhbXMuZ3JpZDtcbiAgICBzbGlkZXNQZXJSb3cgPSBzbGlkZXNOdW1iZXJFdmVuVG9Sb3dzIC8gcm93cztcbiAgICBudW1GdWxsQ29sdW1ucyA9IE1hdGguZmxvb3Ioc2xpZGVzTGVuZ3RoIC8gcm93cyk7XG5cbiAgICBpZiAoTWF0aC5mbG9vcihzbGlkZXNMZW5ndGggLyByb3dzKSA9PT0gc2xpZGVzTGVuZ3RoIC8gcm93cykge1xuICAgICAgc2xpZGVzTnVtYmVyRXZlblRvUm93cyA9IHNsaWRlc0xlbmd0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgc2xpZGVzTnVtYmVyRXZlblRvUm93cyA9IE1hdGguY2VpbChzbGlkZXNMZW5ndGggLyByb3dzKSAqIHJvd3M7XG4gICAgfVxuXG4gICAgaWYgKHNsaWRlc1BlclZpZXcgIT09ICdhdXRvJyAmJiBmaWxsID09PSAncm93Jykge1xuICAgICAgc2xpZGVzTnVtYmVyRXZlblRvUm93cyA9IE1hdGgubWF4KHNsaWRlc051bWJlckV2ZW5Ub1Jvd3MsIHNsaWRlc1BlclZpZXcgKiByb3dzKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlU2xpZGUgPSAoaSwgc2xpZGUsIHNsaWRlc0xlbmd0aCwgZ2V0RGlyZWN0aW9uTGFiZWwpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBzbGlkZXNQZXJHcm91cCxcbiAgICAgIHNwYWNlQmV0d2VlblxuICAgIH0gPSBzd2lwZXIucGFyYW1zO1xuICAgIGNvbnN0IHtcbiAgICAgIHJvd3MsXG4gICAgICBmaWxsXG4gICAgfSA9IHN3aXBlci5wYXJhbXMuZ3JpZDsgLy8gU2V0IHNsaWRlcyBvcmRlclxuXG4gICAgbGV0IG5ld1NsaWRlT3JkZXJJbmRleDtcbiAgICBsZXQgY29sdW1uO1xuICAgIGxldCByb3c7XG5cbiAgICBpZiAoZmlsbCA9PT0gJ3JvdycgJiYgc2xpZGVzUGVyR3JvdXAgPiAxKSB7XG4gICAgICBjb25zdCBncm91cEluZGV4ID0gTWF0aC5mbG9vcihpIC8gKHNsaWRlc1Blckdyb3VwICogcm93cykpO1xuICAgICAgY29uc3Qgc2xpZGVJbmRleEluR3JvdXAgPSBpIC0gcm93cyAqIHNsaWRlc1Blckdyb3VwICogZ3JvdXBJbmRleDtcbiAgICAgIGNvbnN0IGNvbHVtbnNJbkdyb3VwID0gZ3JvdXBJbmRleCA9PT0gMCA/IHNsaWRlc1Blckdyb3VwIDogTWF0aC5taW4oTWF0aC5jZWlsKChzbGlkZXNMZW5ndGggLSBncm91cEluZGV4ICogcm93cyAqIHNsaWRlc1Blckdyb3VwKSAvIHJvd3MpLCBzbGlkZXNQZXJHcm91cCk7XG4gICAgICByb3cgPSBNYXRoLmZsb29yKHNsaWRlSW5kZXhJbkdyb3VwIC8gY29sdW1uc0luR3JvdXApO1xuICAgICAgY29sdW1uID0gc2xpZGVJbmRleEluR3JvdXAgLSByb3cgKiBjb2x1bW5zSW5Hcm91cCArIGdyb3VwSW5kZXggKiBzbGlkZXNQZXJHcm91cDtcbiAgICAgIG5ld1NsaWRlT3JkZXJJbmRleCA9IGNvbHVtbiArIHJvdyAqIHNsaWRlc051bWJlckV2ZW5Ub1Jvd3MgLyByb3dzO1xuICAgICAgc2xpZGUuY3NzKHtcbiAgICAgICAgJy13ZWJraXQtb3JkZXInOiBuZXdTbGlkZU9yZGVySW5kZXgsXG4gICAgICAgIG9yZGVyOiBuZXdTbGlkZU9yZGVySW5kZXhcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoZmlsbCA9PT0gJ2NvbHVtbicpIHtcbiAgICAgIGNvbHVtbiA9IE1hdGguZmxvb3IoaSAvIHJvd3MpO1xuICAgICAgcm93ID0gaSAtIGNvbHVtbiAqIHJvd3M7XG5cbiAgICAgIGlmIChjb2x1bW4gPiBudW1GdWxsQ29sdW1ucyB8fCBjb2x1bW4gPT09IG51bUZ1bGxDb2x1bW5zICYmIHJvdyA9PT0gcm93cyAtIDEpIHtcbiAgICAgICAgcm93ICs9IDE7XG5cbiAgICAgICAgaWYgKHJvdyA+PSByb3dzKSB7XG4gICAgICAgICAgcm93ID0gMDtcbiAgICAgICAgICBjb2x1bW4gKz0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByb3cgPSBNYXRoLmZsb29yKGkgLyBzbGlkZXNQZXJSb3cpO1xuICAgICAgY29sdW1uID0gaSAtIHJvdyAqIHNsaWRlc1BlclJvdztcbiAgICB9XG5cbiAgICBzbGlkZS5jc3MoZ2V0RGlyZWN0aW9uTGFiZWwoJ21hcmdpbi10b3AnKSwgcm93ICE9PSAwID8gc3BhY2VCZXR3ZWVuICYmIGAke3NwYWNlQmV0d2Vlbn1weGAgOiAnJyk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlV3JhcHBlclNpemUgPSAoc2xpZGVTaXplLCBzbmFwR3JpZCwgZ2V0RGlyZWN0aW9uTGFiZWwpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBzcGFjZUJldHdlZW4sXG4gICAgICBjZW50ZXJlZFNsaWRlcyxcbiAgICAgIHJvdW5kTGVuZ3Roc1xuICAgIH0gPSBzd2lwZXIucGFyYW1zO1xuICAgIGNvbnN0IHtcbiAgICAgIHJvd3NcbiAgICB9ID0gc3dpcGVyLnBhcmFtcy5ncmlkO1xuICAgIHN3aXBlci52aXJ0dWFsU2l6ZSA9IChzbGlkZVNpemUgKyBzcGFjZUJldHdlZW4pICogc2xpZGVzTnVtYmVyRXZlblRvUm93cztcbiAgICBzd2lwZXIudmlydHVhbFNpemUgPSBNYXRoLmNlaWwoc3dpcGVyLnZpcnR1YWxTaXplIC8gcm93cykgLSBzcGFjZUJldHdlZW47XG4gICAgc3dpcGVyLiR3cmFwcGVyRWwuY3NzKHtcbiAgICAgIFtnZXREaXJlY3Rpb25MYWJlbCgnd2lkdGgnKV06IGAke3N3aXBlci52aXJ0dWFsU2l6ZSArIHNwYWNlQmV0d2Vlbn1weGBcbiAgICB9KTtcblxuICAgIGlmIChjZW50ZXJlZFNsaWRlcykge1xuICAgICAgc25hcEdyaWQuc3BsaWNlKDAsIHNuYXBHcmlkLmxlbmd0aCk7XG4gICAgICBjb25zdCBuZXdTbGlkZXNHcmlkID0gW107XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc25hcEdyaWQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgbGV0IHNsaWRlc0dyaWRJdGVtID0gc25hcEdyaWRbaV07XG4gICAgICAgIGlmIChyb3VuZExlbmd0aHMpIHNsaWRlc0dyaWRJdGVtID0gTWF0aC5mbG9vcihzbGlkZXNHcmlkSXRlbSk7XG4gICAgICAgIGlmIChzbmFwR3JpZFtpXSA8IHN3aXBlci52aXJ0dWFsU2l6ZSArIHNuYXBHcmlkWzBdKSBuZXdTbGlkZXNHcmlkLnB1c2goc2xpZGVzR3JpZEl0ZW0pO1xuICAgICAgfVxuXG4gICAgICBzbmFwR3JpZC5wdXNoKC4uLm5ld1NsaWRlc0dyaWQpO1xuICAgIH1cbiAgfTtcblxuICBzd2lwZXIuZ3JpZCA9IHtcbiAgICBpbml0U2xpZGVzLFxuICAgIHVwZGF0ZVNsaWRlLFxuICAgIHVwZGF0ZVdyYXBwZXJTaXplXG4gIH07XG59IiwiaW1wb3J0IHsgZ2V0V2luZG93LCBnZXREb2N1bWVudCB9IGZyb20gJ3Nzci13aW5kb3cnO1xuaW1wb3J0ICQgZnJvbSAnLi4vLi4vc2hhcmVkL2RvbS5qcyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIYXNoTmF2aWdhdGlvbih7XG4gIHN3aXBlcixcbiAgZXh0ZW5kUGFyYW1zLFxuICBlbWl0LFxuICBvblxufSkge1xuICBsZXQgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgY29uc3QgZG9jdW1lbnQgPSBnZXREb2N1bWVudCgpO1xuICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgZXh0ZW5kUGFyYW1zKHtcbiAgICBoYXNoTmF2aWdhdGlvbjoge1xuICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICByZXBsYWNlU3RhdGU6IGZhbHNlLFxuICAgICAgd2F0Y2hTdGF0ZTogZmFsc2VcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IG9uSGFzaENoYW5nZSA9ICgpID0+IHtcbiAgICBlbWl0KCdoYXNoQ2hhbmdlJyk7XG4gICAgY29uc3QgbmV3SGFzaCA9IGRvY3VtZW50LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgnIycsICcnKTtcbiAgICBjb25zdCBhY3RpdmVTbGlkZUhhc2ggPSBzd2lwZXIuc2xpZGVzLmVxKHN3aXBlci5hY3RpdmVJbmRleCkuYXR0cignZGF0YS1oYXNoJyk7XG5cbiAgICBpZiAobmV3SGFzaCAhPT0gYWN0aXZlU2xpZGVIYXNoKSB7XG4gICAgICBjb25zdCBuZXdJbmRleCA9IHN3aXBlci4kd3JhcHBlckVsLmNoaWxkcmVuKGAuJHtzd2lwZXIucGFyYW1zLnNsaWRlQ2xhc3N9W2RhdGEtaGFzaD1cIiR7bmV3SGFzaH1cIl1gKS5pbmRleCgpO1xuICAgICAgaWYgKHR5cGVvZiBuZXdJbmRleCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcbiAgICAgIHN3aXBlci5zbGlkZVRvKG5ld0luZGV4KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2V0SGFzaCA9ICgpID0+IHtcbiAgICBpZiAoIWluaXRpYWxpemVkIHx8ICFzd2lwZXIucGFyYW1zLmhhc2hOYXZpZ2F0aW9uLmVuYWJsZWQpIHJldHVybjtcblxuICAgIGlmIChzd2lwZXIucGFyYW1zLmhhc2hOYXZpZ2F0aW9uLnJlcGxhY2VTdGF0ZSAmJiB3aW5kb3cuaGlzdG9yeSAmJiB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUpIHtcbiAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBudWxsLCBgIyR7c3dpcGVyLnNsaWRlcy5lcShzd2lwZXIuYWN0aXZlSW5kZXgpLmF0dHIoJ2RhdGEtaGFzaCcpfWAgfHwgJycpO1xuICAgICAgZW1pdCgnaGFzaFNldCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzbGlkZSA9IHN3aXBlci5zbGlkZXMuZXEoc3dpcGVyLmFjdGl2ZUluZGV4KTtcbiAgICAgIGNvbnN0IGhhc2ggPSBzbGlkZS5hdHRyKCdkYXRhLWhhc2gnKSB8fCBzbGlkZS5hdHRyKCdkYXRhLWhpc3RvcnknKTtcbiAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhhc2ggPSBoYXNoIHx8ICcnO1xuICAgICAgZW1pdCgnaGFzaFNldCcpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBpbml0ID0gKCkgPT4ge1xuICAgIGlmICghc3dpcGVyLnBhcmFtcy5oYXNoTmF2aWdhdGlvbi5lbmFibGVkIHx8IHN3aXBlci5wYXJhbXMuaGlzdG9yeSAmJiBzd2lwZXIucGFyYW1zLmhpc3RvcnkuZW5hYmxlZCkgcmV0dXJuO1xuICAgIGluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICBjb25zdCBoYXNoID0gZG9jdW1lbnQubG9jYXRpb24uaGFzaC5yZXBsYWNlKCcjJywgJycpO1xuXG4gICAgaWYgKGhhc2gpIHtcbiAgICAgIGNvbnN0IHNwZWVkID0gMDtcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbmd0aCA9IHN3aXBlci5zbGlkZXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3Qgc2xpZGUgPSBzd2lwZXIuc2xpZGVzLmVxKGkpO1xuICAgICAgICBjb25zdCBzbGlkZUhhc2ggPSBzbGlkZS5hdHRyKCdkYXRhLWhhc2gnKSB8fCBzbGlkZS5hdHRyKCdkYXRhLWhpc3RvcnknKTtcblxuICAgICAgICBpZiAoc2xpZGVIYXNoID09PSBoYXNoICYmICFzbGlkZS5oYXNDbGFzcyhzd2lwZXIucGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MpKSB7XG4gICAgICAgICAgY29uc3QgaW5kZXggPSBzbGlkZS5pbmRleCgpO1xuICAgICAgICAgIHN3aXBlci5zbGlkZVRvKGluZGV4LCBzcGVlZCwgc3dpcGVyLnBhcmFtcy5ydW5DYWxsYmFja3NPbkluaXQsIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMuaGFzaE5hdmlnYXRpb24ud2F0Y2hTdGF0ZSkge1xuICAgICAgJCh3aW5kb3cpLm9uKCdoYXNoY2hhbmdlJywgb25IYXNoQ2hhbmdlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZGVzdHJveSA9ICgpID0+IHtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5oYXNoTmF2aWdhdGlvbi53YXRjaFN0YXRlKSB7XG4gICAgICAkKHdpbmRvdykub2ZmKCdoYXNoY2hhbmdlJywgb25IYXNoQ2hhbmdlKTtcbiAgICB9XG4gIH07XG5cbiAgb24oJ2luaXQnLCAoKSA9PiB7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMuaGFzaE5hdmlnYXRpb24uZW5hYmxlZCkge1xuICAgICAgaW5pdCgpO1xuICAgIH1cbiAgfSk7XG4gIG9uKCdkZXN0cm95JywgKCkgPT4ge1xuICAgIGlmIChzd2lwZXIucGFyYW1zLmhhc2hOYXZpZ2F0aW9uLmVuYWJsZWQpIHtcbiAgICAgIGRlc3Ryb3koKTtcbiAgICB9XG4gIH0pO1xuICBvbigndHJhbnNpdGlvbkVuZCBfZnJlZU1vZGVOb01vbWVudHVtUmVsZWFzZScsICgpID0+IHtcbiAgICBpZiAoaW5pdGlhbGl6ZWQpIHtcbiAgICAgIHNldEhhc2goKTtcbiAgICB9XG4gIH0pO1xuICBvbignc2xpZGVDaGFuZ2UnLCAoKSA9PiB7XG4gICAgaWYgKGluaXRpYWxpemVkICYmIHN3aXBlci5wYXJhbXMuY3NzTW9kZSkge1xuICAgICAgc2V0SGFzaCgpO1xuICAgIH1cbiAgfSk7XG59IiwiaW1wb3J0IHsgZ2V0V2luZG93IH0gZnJvbSAnc3NyLXdpbmRvdyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIaXN0b3J5KHtcbiAgc3dpcGVyLFxuICBleHRlbmRQYXJhbXMsXG4gIG9uXG59KSB7XG4gIGV4dGVuZFBhcmFtcyh7XG4gICAgaGlzdG9yeToge1xuICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICByb290OiAnJyxcbiAgICAgIHJlcGxhY2VTdGF0ZTogZmFsc2UsXG4gICAgICBrZXk6ICdzbGlkZXMnXG4gICAgfVxuICB9KTtcbiAgbGV0IGluaXRpYWxpemVkID0gZmFsc2U7XG4gIGxldCBwYXRocyA9IHt9O1xuXG4gIGNvbnN0IHNsdWdpZnkgPSB0ZXh0ID0+IHtcbiAgICByZXR1cm4gdGV4dC50b1N0cmluZygpLnJlcGxhY2UoL1xccysvZywgJy0nKS5yZXBsYWNlKC9bXlxcdy1dKy9nLCAnJykucmVwbGFjZSgvLS0rL2csICctJykucmVwbGFjZSgvXi0rLywgJycpLnJlcGxhY2UoLy0rJC8sICcnKTtcbiAgfTtcblxuICBjb25zdCBnZXRQYXRoVmFsdWVzID0gdXJsT3ZlcnJpZGUgPT4ge1xuICAgIGNvbnN0IHdpbmRvdyA9IGdldFdpbmRvdygpO1xuICAgIGxldCBsb2NhdGlvbjtcblxuICAgIGlmICh1cmxPdmVycmlkZSkge1xuICAgICAgbG9jYXRpb24gPSBuZXcgVVJMKHVybE92ZXJyaWRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb247XG4gICAgfVxuXG4gICAgY29uc3QgcGF0aEFycmF5ID0gbG9jYXRpb24ucGF0aG5hbWUuc2xpY2UoMSkuc3BsaXQoJy8nKS5maWx0ZXIocGFydCA9PiBwYXJ0ICE9PSAnJyk7XG4gICAgY29uc3QgdG90YWwgPSBwYXRoQXJyYXkubGVuZ3RoO1xuICAgIGNvbnN0IGtleSA9IHBhdGhBcnJheVt0b3RhbCAtIDJdO1xuICAgIGNvbnN0IHZhbHVlID0gcGF0aEFycmF5W3RvdGFsIC0gMV07XG4gICAgcmV0dXJuIHtcbiAgICAgIGtleSxcbiAgICAgIHZhbHVlXG4gICAgfTtcbiAgfTtcblxuICBjb25zdCBzZXRIaXN0b3J5ID0gKGtleSwgaW5kZXgpID0+IHtcbiAgICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgICBpZiAoIWluaXRpYWxpemVkIHx8ICFzd2lwZXIucGFyYW1zLmhpc3RvcnkuZW5hYmxlZCkgcmV0dXJuO1xuICAgIGxldCBsb2NhdGlvbjtcblxuICAgIGlmIChzd2lwZXIucGFyYW1zLnVybCkge1xuICAgICAgbG9jYXRpb24gPSBuZXcgVVJMKHN3aXBlci5wYXJhbXMudXJsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb247XG4gICAgfVxuXG4gICAgY29uc3Qgc2xpZGUgPSBzd2lwZXIuc2xpZGVzLmVxKGluZGV4KTtcbiAgICBsZXQgdmFsdWUgPSBzbHVnaWZ5KHNsaWRlLmF0dHIoJ2RhdGEtaGlzdG9yeScpKTtcblxuICAgIGlmIChzd2lwZXIucGFyYW1zLmhpc3Rvcnkucm9vdC5sZW5ndGggPiAwKSB7XG4gICAgICBsZXQgcm9vdCA9IHN3aXBlci5wYXJhbXMuaGlzdG9yeS5yb290O1xuICAgICAgaWYgKHJvb3Rbcm9vdC5sZW5ndGggLSAxXSA9PT0gJy8nKSByb290ID0gcm9vdC5zbGljZSgwLCByb290Lmxlbmd0aCAtIDEpO1xuICAgICAgdmFsdWUgPSBgJHtyb290fS8ke2tleX0vJHt2YWx1ZX1gO1xuICAgIH0gZWxzZSBpZiAoIWxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIHZhbHVlID0gYCR7a2V5fS8ke3ZhbHVlfWA7XG4gICAgfVxuXG4gICAgY29uc3QgY3VycmVudFN0YXRlID0gd2luZG93Lmhpc3Rvcnkuc3RhdGU7XG5cbiAgICBpZiAoY3VycmVudFN0YXRlICYmIGN1cnJlbnRTdGF0ZS52YWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSkge1xuICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKHtcbiAgICAgICAgdmFsdWVcbiAgICAgIH0sIG51bGwsIHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHtcbiAgICAgICAgdmFsdWVcbiAgICAgIH0sIG51bGwsIHZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2Nyb2xsVG9TbGlkZSA9IChzcGVlZCwgdmFsdWUsIHJ1bkNhbGxiYWNrcykgPT4ge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbmd0aCA9IHN3aXBlci5zbGlkZXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3Qgc2xpZGUgPSBzd2lwZXIuc2xpZGVzLmVxKGkpO1xuICAgICAgICBjb25zdCBzbGlkZUhpc3RvcnkgPSBzbHVnaWZ5KHNsaWRlLmF0dHIoJ2RhdGEtaGlzdG9yeScpKTtcblxuICAgICAgICBpZiAoc2xpZGVIaXN0b3J5ID09PSB2YWx1ZSAmJiAhc2xpZGUuaGFzQ2xhc3Moc3dpcGVyLnBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSkge1xuICAgICAgICAgIGNvbnN0IGluZGV4ID0gc2xpZGUuaW5kZXgoKTtcbiAgICAgICAgICBzd2lwZXIuc2xpZGVUbyhpbmRleCwgc3BlZWQsIHJ1bkNhbGxiYWNrcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc3dpcGVyLnNsaWRlVG8oMCwgc3BlZWQsIHJ1bkNhbGxiYWNrcyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNldEhpc3RvcnlQb3BTdGF0ZSA9ICgpID0+IHtcbiAgICBwYXRocyA9IGdldFBhdGhWYWx1ZXMoc3dpcGVyLnBhcmFtcy51cmwpO1xuICAgIHNjcm9sbFRvU2xpZGUoc3dpcGVyLnBhcmFtcy5zcGVlZCwgc3dpcGVyLnBhdGhzLnZhbHVlLCBmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgICBpZiAoIXN3aXBlci5wYXJhbXMuaGlzdG9yeSkgcmV0dXJuO1xuXG4gICAgaWYgKCF3aW5kb3cuaGlzdG9yeSB8fCAhd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKSB7XG4gICAgICBzd2lwZXIucGFyYW1zLmhpc3RvcnkuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgc3dpcGVyLnBhcmFtcy5oYXNoTmF2aWdhdGlvbi5lbmFibGVkID0gdHJ1ZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplZCA9IHRydWU7XG4gICAgcGF0aHMgPSBnZXRQYXRoVmFsdWVzKHN3aXBlci5wYXJhbXMudXJsKTtcbiAgICBpZiAoIXBhdGhzLmtleSAmJiAhcGF0aHMudmFsdWUpIHJldHVybjtcbiAgICBzY3JvbGxUb1NsaWRlKDAsIHBhdGhzLnZhbHVlLCBzd2lwZXIucGFyYW1zLnJ1bkNhbGxiYWNrc09uSW5pdCk7XG5cbiAgICBpZiAoIXN3aXBlci5wYXJhbXMuaGlzdG9yeS5yZXBsYWNlU3RhdGUpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHNldEhpc3RvcnlQb3BTdGF0ZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGRlc3Ryb3kgPSAoKSA9PiB7XG4gICAgY29uc3Qgd2luZG93ID0gZ2V0V2luZG93KCk7XG5cbiAgICBpZiAoIXN3aXBlci5wYXJhbXMuaGlzdG9yeS5yZXBsYWNlU3RhdGUpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHNldEhpc3RvcnlQb3BTdGF0ZSk7XG4gICAgfVxuICB9O1xuXG4gIG9uKCdpbml0JywgKCkgPT4ge1xuICAgIGlmIChzd2lwZXIucGFyYW1zLmhpc3RvcnkuZW5hYmxlZCkge1xuICAgICAgaW5pdCgpO1xuICAgIH1cbiAgfSk7XG4gIG9uKCdkZXN0cm95JywgKCkgPT4ge1xuICAgIGlmIChzd2lwZXIucGFyYW1zLmhpc3RvcnkuZW5hYmxlZCkge1xuICAgICAgZGVzdHJveSgpO1xuICAgIH1cbiAgfSk7XG4gIG9uKCd0cmFuc2l0aW9uRW5kIF9mcmVlTW9kZU5vTW9tZW50dW1SZWxlYXNlJywgKCkgPT4ge1xuICAgIGlmIChpbml0aWFsaXplZCkge1xuICAgICAgc2V0SGlzdG9yeShzd2lwZXIucGFyYW1zLmhpc3Rvcnkua2V5LCBzd2lwZXIuYWN0aXZlSW5kZXgpO1xuICAgIH1cbiAgfSk7XG4gIG9uKCdzbGlkZUNoYW5nZScsICgpID0+IHtcbiAgICBpZiAoaW5pdGlhbGl6ZWQgJiYgc3dpcGVyLnBhcmFtcy5jc3NNb2RlKSB7XG4gICAgICBzZXRIaXN0b3J5KHN3aXBlci5wYXJhbXMuaGlzdG9yeS5rZXksIHN3aXBlci5hY3RpdmVJbmRleCk7XG4gICAgfVxuICB9KTtcbn0iLCIvKiBlc2xpbnQtZGlzYWJsZSBjb25zaXN0ZW50LXJldHVybiAqL1xuaW1wb3J0IHsgZ2V0V2luZG93LCBnZXREb2N1bWVudCB9IGZyb20gJ3Nzci13aW5kb3cnO1xuaW1wb3J0ICQgZnJvbSAnLi4vLi4vc2hhcmVkL2RvbS5qcyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBLZXlib2FyZCh7XG4gIHN3aXBlcixcbiAgZXh0ZW5kUGFyYW1zLFxuICBvbixcbiAgZW1pdFxufSkge1xuICBjb25zdCBkb2N1bWVudCA9IGdldERvY3VtZW50KCk7XG4gIGNvbnN0IHdpbmRvdyA9IGdldFdpbmRvdygpO1xuICBzd2lwZXIua2V5Ym9hcmQgPSB7XG4gICAgZW5hYmxlZDogZmFsc2VcbiAgfTtcbiAgZXh0ZW5kUGFyYW1zKHtcbiAgICBrZXlib2FyZDoge1xuICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICBvbmx5SW5WaWV3cG9ydDogdHJ1ZSxcbiAgICAgIHBhZ2VVcERvd246IHRydWVcbiAgICB9XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZShldmVudCkge1xuICAgIGlmICghc3dpcGVyLmVuYWJsZWQpIHJldHVybjtcbiAgICBjb25zdCB7XG4gICAgICBydGxUcmFuc2xhdGU6IHJ0bFxuICAgIH0gPSBzd2lwZXI7XG4gICAgbGV0IGUgPSBldmVudDtcbiAgICBpZiAoZS5vcmlnaW5hbEV2ZW50KSBlID0gZS5vcmlnaW5hbEV2ZW50OyAvLyBqcXVlcnkgZml4XG5cbiAgICBjb25zdCBrYyA9IGUua2V5Q29kZSB8fCBlLmNoYXJDb2RlO1xuICAgIGNvbnN0IHBhZ2VVcERvd24gPSBzd2lwZXIucGFyYW1zLmtleWJvYXJkLnBhZ2VVcERvd247XG4gICAgY29uc3QgaXNQYWdlVXAgPSBwYWdlVXBEb3duICYmIGtjID09PSAzMztcbiAgICBjb25zdCBpc1BhZ2VEb3duID0gcGFnZVVwRG93biAmJiBrYyA9PT0gMzQ7XG4gICAgY29uc3QgaXNBcnJvd0xlZnQgPSBrYyA9PT0gMzc7XG4gICAgY29uc3QgaXNBcnJvd1JpZ2h0ID0ga2MgPT09IDM5O1xuICAgIGNvbnN0IGlzQXJyb3dVcCA9IGtjID09PSAzODtcbiAgICBjb25zdCBpc0Fycm93RG93biA9IGtjID09PSA0MDsgLy8gRGlyZWN0aW9ucyBsb2Nrc1xuXG4gICAgaWYgKCFzd2lwZXIuYWxsb3dTbGlkZU5leHQgJiYgKHN3aXBlci5pc0hvcml6b250YWwoKSAmJiBpc0Fycm93UmlnaHQgfHwgc3dpcGVyLmlzVmVydGljYWwoKSAmJiBpc0Fycm93RG93biB8fCBpc1BhZ2VEb3duKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghc3dpcGVyLmFsbG93U2xpZGVQcmV2ICYmIChzd2lwZXIuaXNIb3Jpem9udGFsKCkgJiYgaXNBcnJvd0xlZnQgfHwgc3dpcGVyLmlzVmVydGljYWwoKSAmJiBpc0Fycm93VXAgfHwgaXNQYWdlVXApKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGUuc2hpZnRLZXkgfHwgZS5hbHRLZXkgfHwgZS5jdHJsS2V5IHx8IGUubWV0YUtleSkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50Lm5vZGVOYW1lICYmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdpbnB1dCcgfHwgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAndGV4dGFyZWEnKSkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5rZXlib2FyZC5vbmx5SW5WaWV3cG9ydCAmJiAoaXNQYWdlVXAgfHwgaXNQYWdlRG93biB8fCBpc0Fycm93TGVmdCB8fCBpc0Fycm93UmlnaHQgfHwgaXNBcnJvd1VwIHx8IGlzQXJyb3dEb3duKSkge1xuICAgICAgbGV0IGluVmlldyA9IGZhbHNlOyAvLyBDaGVjayB0aGF0IHN3aXBlciBzaG91bGQgYmUgaW5zaWRlIG9mIHZpc2libGUgYXJlYSBvZiB3aW5kb3dcblxuICAgICAgaWYgKHN3aXBlci4kZWwucGFyZW50cyhgLiR7c3dpcGVyLnBhcmFtcy5zbGlkZUNsYXNzfWApLmxlbmd0aCA+IDAgJiYgc3dpcGVyLiRlbC5wYXJlbnRzKGAuJHtzd2lwZXIucGFyYW1zLnNsaWRlQWN0aXZlQ2xhc3N9YCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0ICRlbCA9IHN3aXBlci4kZWw7XG4gICAgICBjb25zdCBzd2lwZXJXaWR0aCA9ICRlbFswXS5jbGllbnRXaWR0aDtcbiAgICAgIGNvbnN0IHN3aXBlckhlaWdodCA9ICRlbFswXS5jbGllbnRIZWlnaHQ7XG4gICAgICBjb25zdCB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgY29uc3Qgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgY29uc3Qgc3dpcGVyT2Zmc2V0ID0gc3dpcGVyLiRlbC5vZmZzZXQoKTtcbiAgICAgIGlmIChydGwpIHN3aXBlck9mZnNldC5sZWZ0IC09IHN3aXBlci4kZWxbMF0uc2Nyb2xsTGVmdDtcbiAgICAgIGNvbnN0IHN3aXBlckNvb3JkID0gW1tzd2lwZXJPZmZzZXQubGVmdCwgc3dpcGVyT2Zmc2V0LnRvcF0sIFtzd2lwZXJPZmZzZXQubGVmdCArIHN3aXBlcldpZHRoLCBzd2lwZXJPZmZzZXQudG9wXSwgW3N3aXBlck9mZnNldC5sZWZ0LCBzd2lwZXJPZmZzZXQudG9wICsgc3dpcGVySGVpZ2h0XSwgW3N3aXBlck9mZnNldC5sZWZ0ICsgc3dpcGVyV2lkdGgsIHN3aXBlck9mZnNldC50b3AgKyBzd2lwZXJIZWlnaHRdXTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzd2lwZXJDb29yZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBwb2ludCA9IHN3aXBlckNvb3JkW2ldO1xuXG4gICAgICAgIGlmIChwb2ludFswXSA+PSAwICYmIHBvaW50WzBdIDw9IHdpbmRvd1dpZHRoICYmIHBvaW50WzFdID49IDAgJiYgcG9pbnRbMV0gPD0gd2luZG93SGVpZ2h0KSB7XG4gICAgICAgICAgaWYgKHBvaW50WzBdID09PSAwICYmIHBvaW50WzFdID09PSAwKSBjb250aW51ZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gICAgICAgICAgaW5WaWV3ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWluVmlldykgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpZiAoc3dpcGVyLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICBpZiAoaXNQYWdlVXAgfHwgaXNQYWdlRG93biB8fCBpc0Fycm93TGVmdCB8fCBpc0Fycm93UmlnaHQpIHtcbiAgICAgICAgaWYgKGUucHJldmVudERlZmF1bHQpIGUucHJldmVudERlZmF1bHQoKTtlbHNlIGUucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKChpc1BhZ2VEb3duIHx8IGlzQXJyb3dSaWdodCkgJiYgIXJ0bCB8fCAoaXNQYWdlVXAgfHwgaXNBcnJvd0xlZnQpICYmIHJ0bCkgc3dpcGVyLnNsaWRlTmV4dCgpO1xuICAgICAgaWYgKChpc1BhZ2VVcCB8fCBpc0Fycm93TGVmdCkgJiYgIXJ0bCB8fCAoaXNQYWdlRG93biB8fCBpc0Fycm93UmlnaHQpICYmIHJ0bCkgc3dpcGVyLnNsaWRlUHJldigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaXNQYWdlVXAgfHwgaXNQYWdlRG93biB8fCBpc0Fycm93VXAgfHwgaXNBcnJvd0Rvd24pIHtcbiAgICAgICAgaWYgKGUucHJldmVudERlZmF1bHQpIGUucHJldmVudERlZmF1bHQoKTtlbHNlIGUucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzUGFnZURvd24gfHwgaXNBcnJvd0Rvd24pIHN3aXBlci5zbGlkZU5leHQoKTtcbiAgICAgIGlmIChpc1BhZ2VVcCB8fCBpc0Fycm93VXApIHN3aXBlci5zbGlkZVByZXYoKTtcbiAgICB9XG5cbiAgICBlbWl0KCdrZXlQcmVzcycsIGtjKTtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgZnVuY3Rpb24gZW5hYmxlKCkge1xuICAgIGlmIChzd2lwZXIua2V5Ym9hcmQuZW5hYmxlZCkgcmV0dXJuO1xuICAgICQoZG9jdW1lbnQpLm9uKCdrZXlkb3duJywgaGFuZGxlKTtcbiAgICBzd2lwZXIua2V5Ym9hcmQuZW5hYmxlZCA9IHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBkaXNhYmxlKCkge1xuICAgIGlmICghc3dpcGVyLmtleWJvYXJkLmVuYWJsZWQpIHJldHVybjtcbiAgICAkKGRvY3VtZW50KS5vZmYoJ2tleWRvd24nLCBoYW5kbGUpO1xuICAgIHN3aXBlci5rZXlib2FyZC5lbmFibGVkID0gZmFsc2U7XG4gIH1cblxuICBvbignaW5pdCcsICgpID0+IHtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5rZXlib2FyZC5lbmFibGVkKSB7XG4gICAgICBlbmFibGUoKTtcbiAgICB9XG4gIH0pO1xuICBvbignZGVzdHJveScsICgpID0+IHtcbiAgICBpZiAoc3dpcGVyLmtleWJvYXJkLmVuYWJsZWQpIHtcbiAgICAgIGRpc2FibGUoKTtcbiAgICB9XG4gIH0pO1xuICBPYmplY3QuYXNzaWduKHN3aXBlci5rZXlib2FyZCwge1xuICAgIGVuYWJsZSxcbiAgICBkaXNhYmxlXG4gIH0pO1xufSIsImltcG9ydCB7IGdldFdpbmRvdyB9IGZyb20gJ3Nzci13aW5kb3cnO1xuaW1wb3J0ICQgZnJvbSAnLi4vLi4vc2hhcmVkL2RvbS5qcyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXp5KHtcbiAgc3dpcGVyLFxuICBleHRlbmRQYXJhbXMsXG4gIG9uLFxuICBlbWl0XG59KSB7XG4gIGV4dGVuZFBhcmFtcyh7XG4gICAgbGF6eToge1xuICAgICAgY2hlY2tJblZpZXc6IGZhbHNlLFxuICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICBsb2FkUHJldk5leHQ6IGZhbHNlLFxuICAgICAgbG9hZFByZXZOZXh0QW1vdW50OiAxLFxuICAgICAgbG9hZE9uVHJhbnNpdGlvblN0YXJ0OiBmYWxzZSxcbiAgICAgIHNjcm9sbGluZ0VsZW1lbnQ6ICcnLFxuICAgICAgZWxlbWVudENsYXNzOiAnc3dpcGVyLWxhenknLFxuICAgICAgbG9hZGluZ0NsYXNzOiAnc3dpcGVyLWxhenktbG9hZGluZycsXG4gICAgICBsb2FkZWRDbGFzczogJ3N3aXBlci1sYXp5LWxvYWRlZCcsXG4gICAgICBwcmVsb2FkZXJDbGFzczogJ3N3aXBlci1sYXp5LXByZWxvYWRlcidcbiAgICB9XG4gIH0pO1xuICBzd2lwZXIubGF6eSA9IHt9O1xuICBsZXQgc2Nyb2xsSGFuZGxlckF0dGFjaGVkID0gZmFsc2U7XG4gIGxldCBpbml0aWFsSW1hZ2VMb2FkZWQgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBsb2FkSW5TbGlkZShpbmRleCwgbG9hZEluRHVwbGljYXRlID0gdHJ1ZSkge1xuICAgIGNvbnN0IHBhcmFtcyA9IHN3aXBlci5wYXJhbXMubGF6eTtcbiAgICBpZiAodHlwZW9mIGluZGV4ID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xuICAgIGlmIChzd2lwZXIuc2xpZGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgIGNvbnN0IGlzVmlydHVhbCA9IHN3aXBlci52aXJ0dWFsICYmIHN3aXBlci5wYXJhbXMudmlydHVhbC5lbmFibGVkO1xuICAgIGNvbnN0ICRzbGlkZUVsID0gaXNWaXJ0dWFsID8gc3dpcGVyLiR3cmFwcGVyRWwuY2hpbGRyZW4oYC4ke3N3aXBlci5wYXJhbXMuc2xpZGVDbGFzc31bZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XCIke2luZGV4fVwiXWApIDogc3dpcGVyLnNsaWRlcy5lcShpbmRleCk7XG4gICAgY29uc3QgJGltYWdlcyA9ICRzbGlkZUVsLmZpbmQoYC4ke3BhcmFtcy5lbGVtZW50Q2xhc3N9Om5vdCguJHtwYXJhbXMubG9hZGVkQ2xhc3N9KTpub3QoLiR7cGFyYW1zLmxvYWRpbmdDbGFzc30pYCk7XG5cbiAgICBpZiAoJHNsaWRlRWwuaGFzQ2xhc3MocGFyYW1zLmVsZW1lbnRDbGFzcykgJiYgISRzbGlkZUVsLmhhc0NsYXNzKHBhcmFtcy5sb2FkZWRDbGFzcykgJiYgISRzbGlkZUVsLmhhc0NsYXNzKHBhcmFtcy5sb2FkaW5nQ2xhc3MpKSB7XG4gICAgICAkaW1hZ2VzLnB1c2goJHNsaWRlRWxbMF0pO1xuICAgIH1cblxuICAgIGlmICgkaW1hZ2VzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgICRpbWFnZXMuZWFjaChpbWFnZUVsID0+IHtcbiAgICAgIGNvbnN0ICRpbWFnZUVsID0gJChpbWFnZUVsKTtcbiAgICAgICRpbWFnZUVsLmFkZENsYXNzKHBhcmFtcy5sb2FkaW5nQ2xhc3MpO1xuICAgICAgY29uc3QgYmFja2dyb3VuZCA9ICRpbWFnZUVsLmF0dHIoJ2RhdGEtYmFja2dyb3VuZCcpO1xuICAgICAgY29uc3Qgc3JjID0gJGltYWdlRWwuYXR0cignZGF0YS1zcmMnKTtcbiAgICAgIGNvbnN0IHNyY3NldCA9ICRpbWFnZUVsLmF0dHIoJ2RhdGEtc3Jjc2V0Jyk7XG4gICAgICBjb25zdCBzaXplcyA9ICRpbWFnZUVsLmF0dHIoJ2RhdGEtc2l6ZXMnKTtcbiAgICAgIGNvbnN0ICRwaWN0dXJlRWwgPSAkaW1hZ2VFbC5wYXJlbnQoJ3BpY3R1cmUnKTtcbiAgICAgIHN3aXBlci5sb2FkSW1hZ2UoJGltYWdlRWxbMF0sIHNyYyB8fCBiYWNrZ3JvdW5kLCBzcmNzZXQsIHNpemVzLCBmYWxzZSwgKCkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHN3aXBlciA9PT0gJ3VuZGVmaW5lZCcgfHwgc3dpcGVyID09PSBudWxsIHx8ICFzd2lwZXIgfHwgc3dpcGVyICYmICFzd2lwZXIucGFyYW1zIHx8IHN3aXBlci5kZXN0cm95ZWQpIHJldHVybjtcblxuICAgICAgICBpZiAoYmFja2dyb3VuZCkge1xuICAgICAgICAgICRpbWFnZUVsLmNzcygnYmFja2dyb3VuZC1pbWFnZScsIGB1cmwoXCIke2JhY2tncm91bmR9XCIpYCk7XG4gICAgICAgICAgJGltYWdlRWwucmVtb3ZlQXR0cignZGF0YS1iYWNrZ3JvdW5kJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHNyY3NldCkge1xuICAgICAgICAgICAgJGltYWdlRWwuYXR0cignc3Jjc2V0Jywgc3Jjc2V0KTtcbiAgICAgICAgICAgICRpbWFnZUVsLnJlbW92ZUF0dHIoJ2RhdGEtc3Jjc2V0Jyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHNpemVzKSB7XG4gICAgICAgICAgICAkaW1hZ2VFbC5hdHRyKCdzaXplcycsIHNpemVzKTtcbiAgICAgICAgICAgICRpbWFnZUVsLnJlbW92ZUF0dHIoJ2RhdGEtc2l6ZXMnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoJHBpY3R1cmVFbC5sZW5ndGgpIHtcbiAgICAgICAgICAgICRwaWN0dXJlRWwuY2hpbGRyZW4oJ3NvdXJjZScpLmVhY2goc291cmNlRWwgPT4ge1xuICAgICAgICAgICAgICBjb25zdCAkc291cmNlID0gJChzb3VyY2VFbCk7XG5cbiAgICAgICAgICAgICAgaWYgKCRzb3VyY2UuYXR0cignZGF0YS1zcmNzZXQnKSkge1xuICAgICAgICAgICAgICAgICRzb3VyY2UuYXR0cignc3Jjc2V0JywgJHNvdXJjZS5hdHRyKCdkYXRhLXNyY3NldCcpKTtcbiAgICAgICAgICAgICAgICAkc291cmNlLnJlbW92ZUF0dHIoJ2RhdGEtc3Jjc2V0Jyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzcmMpIHtcbiAgICAgICAgICAgICRpbWFnZUVsLmF0dHIoJ3NyYycsIHNyYyk7XG4gICAgICAgICAgICAkaW1hZ2VFbC5yZW1vdmVBdHRyKCdkYXRhLXNyYycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICRpbWFnZUVsLmFkZENsYXNzKHBhcmFtcy5sb2FkZWRDbGFzcykucmVtb3ZlQ2xhc3MocGFyYW1zLmxvYWRpbmdDbGFzcyk7XG4gICAgICAgICRzbGlkZUVsLmZpbmQoYC4ke3BhcmFtcy5wcmVsb2FkZXJDbGFzc31gKS5yZW1vdmUoKTtcblxuICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy5sb29wICYmIGxvYWRJbkR1cGxpY2F0ZSkge1xuICAgICAgICAgIGNvbnN0IHNsaWRlT3JpZ2luYWxJbmRleCA9ICRzbGlkZUVsLmF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4Jyk7XG5cbiAgICAgICAgICBpZiAoJHNsaWRlRWwuaGFzQ2xhc3Moc3dpcGVyLnBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSkge1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxTbGlkZSA9IHN3aXBlci4kd3JhcHBlckVsLmNoaWxkcmVuKGBbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XCIke3NsaWRlT3JpZ2luYWxJbmRleH1cIl06bm90KC4ke3N3aXBlci5wYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzc30pYCk7XG4gICAgICAgICAgICBsb2FkSW5TbGlkZShvcmlnaW5hbFNsaWRlLmluZGV4KCksIGZhbHNlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZHVwbGljYXRlZFNsaWRlID0gc3dpcGVyLiR3cmFwcGVyRWwuY2hpbGRyZW4oYC4ke3N3aXBlci5wYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzc31bZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XCIke3NsaWRlT3JpZ2luYWxJbmRleH1cIl1gKTtcbiAgICAgICAgICAgIGxvYWRJblNsaWRlKGR1cGxpY2F0ZWRTbGlkZS5pbmRleCgpLCBmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZW1pdCgnbGF6eUltYWdlUmVhZHknLCAkc2xpZGVFbFswXSwgJGltYWdlRWxbMF0pO1xuXG4gICAgICAgIGlmIChzd2lwZXIucGFyYW1zLmF1dG9IZWlnaHQpIHtcbiAgICAgICAgICBzd2lwZXIudXBkYXRlQXV0b0hlaWdodCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGVtaXQoJ2xhenlJbWFnZUxvYWQnLCAkc2xpZGVFbFswXSwgJGltYWdlRWxbMF0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gbG9hZCgpIHtcbiAgICBjb25zdCB7XG4gICAgICAkd3JhcHBlckVsLFxuICAgICAgcGFyYW1zOiBzd2lwZXJQYXJhbXMsXG4gICAgICBzbGlkZXMsXG4gICAgICBhY3RpdmVJbmRleFxuICAgIH0gPSBzd2lwZXI7XG4gICAgY29uc3QgaXNWaXJ0dWFsID0gc3dpcGVyLnZpcnR1YWwgJiYgc3dpcGVyUGFyYW1zLnZpcnR1YWwuZW5hYmxlZDtcbiAgICBjb25zdCBwYXJhbXMgPSBzd2lwZXJQYXJhbXMubGF6eTtcbiAgICBsZXQgc2xpZGVzUGVyVmlldyA9IHN3aXBlclBhcmFtcy5zbGlkZXNQZXJWaWV3O1xuXG4gICAgaWYgKHNsaWRlc1BlclZpZXcgPT09ICdhdXRvJykge1xuICAgICAgc2xpZGVzUGVyVmlldyA9IDA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2xpZGVFeGlzdChpbmRleCkge1xuICAgICAgaWYgKGlzVmlydHVhbCkge1xuICAgICAgICBpZiAoJHdyYXBwZXJFbC5jaGlsZHJlbihgLiR7c3dpcGVyUGFyYW1zLnNsaWRlQ2xhc3N9W2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJHtpbmRleH1cIl1gKS5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzbGlkZXNbaW5kZXhdKSByZXR1cm4gdHJ1ZTtcblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNsaWRlSW5kZXgoc2xpZGVFbCkge1xuICAgICAgaWYgKGlzVmlydHVhbCkge1xuICAgICAgICByZXR1cm4gJChzbGlkZUVsKS5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gJChzbGlkZUVsKS5pbmRleCgpO1xuICAgIH1cblxuICAgIGlmICghaW5pdGlhbEltYWdlTG9hZGVkKSBpbml0aWFsSW1hZ2VMb2FkZWQgPSB0cnVlO1xuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMud2F0Y2hTbGlkZXNQcm9ncmVzcykge1xuICAgICAgJHdyYXBwZXJFbC5jaGlsZHJlbihgLiR7c3dpcGVyUGFyYW1zLnNsaWRlVmlzaWJsZUNsYXNzfWApLmVhY2goc2xpZGVFbCA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gaXNWaXJ0dWFsID8gJChzbGlkZUVsKS5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpIDogJChzbGlkZUVsKS5pbmRleCgpO1xuICAgICAgICBsb2FkSW5TbGlkZShpbmRleCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHNsaWRlc1BlclZpZXcgPiAxKSB7XG4gICAgICBmb3IgKGxldCBpID0gYWN0aXZlSW5kZXg7IGkgPCBhY3RpdmVJbmRleCArIHNsaWRlc1BlclZpZXc7IGkgKz0gMSkge1xuICAgICAgICBpZiAoc2xpZGVFeGlzdChpKSkgbG9hZEluU2xpZGUoaSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvYWRJblNsaWRlKGFjdGl2ZUluZGV4KTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLmxvYWRQcmV2TmV4dCkge1xuICAgICAgaWYgKHNsaWRlc1BlclZpZXcgPiAxIHx8IHBhcmFtcy5sb2FkUHJldk5leHRBbW91bnQgJiYgcGFyYW1zLmxvYWRQcmV2TmV4dEFtb3VudCA+IDEpIHtcbiAgICAgICAgY29uc3QgYW1vdW50ID0gcGFyYW1zLmxvYWRQcmV2TmV4dEFtb3VudDtcbiAgICAgICAgY29uc3Qgc3B2ID0gc2xpZGVzUGVyVmlldztcbiAgICAgICAgY29uc3QgbWF4SW5kZXggPSBNYXRoLm1pbihhY3RpdmVJbmRleCArIHNwdiArIE1hdGgubWF4KGFtb3VudCwgc3B2KSwgc2xpZGVzLmxlbmd0aCk7XG4gICAgICAgIGNvbnN0IG1pbkluZGV4ID0gTWF0aC5tYXgoYWN0aXZlSW5kZXggLSBNYXRoLm1heChzcHYsIGFtb3VudCksIDApOyAvLyBOZXh0IFNsaWRlc1xuXG4gICAgICAgIGZvciAobGV0IGkgPSBhY3RpdmVJbmRleCArIHNsaWRlc1BlclZpZXc7IGkgPCBtYXhJbmRleDsgaSArPSAxKSB7XG4gICAgICAgICAgaWYgKHNsaWRlRXhpc3QoaSkpIGxvYWRJblNsaWRlKGkpO1xuICAgICAgICB9IC8vIFByZXYgU2xpZGVzXG5cblxuICAgICAgICBmb3IgKGxldCBpID0gbWluSW5kZXg7IGkgPCBhY3RpdmVJbmRleDsgaSArPSAxKSB7XG4gICAgICAgICAgaWYgKHNsaWRlRXhpc3QoaSkpIGxvYWRJblNsaWRlKGkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBuZXh0U2xpZGUgPSAkd3JhcHBlckVsLmNoaWxkcmVuKGAuJHtzd2lwZXJQYXJhbXMuc2xpZGVOZXh0Q2xhc3N9YCk7XG4gICAgICAgIGlmIChuZXh0U2xpZGUubGVuZ3RoID4gMCkgbG9hZEluU2xpZGUoc2xpZGVJbmRleChuZXh0U2xpZGUpKTtcbiAgICAgICAgY29uc3QgcHJldlNsaWRlID0gJHdyYXBwZXJFbC5jaGlsZHJlbihgLiR7c3dpcGVyUGFyYW1zLnNsaWRlUHJldkNsYXNzfWApO1xuICAgICAgICBpZiAocHJldlNsaWRlLmxlbmd0aCA+IDApIGxvYWRJblNsaWRlKHNsaWRlSW5kZXgocHJldlNsaWRlKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tJblZpZXdPbkxvYWQoKSB7XG4gICAgY29uc3Qgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gICAgaWYgKCFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZCkgcmV0dXJuO1xuICAgIGNvbnN0ICRzY3JvbGxFbGVtZW50ID0gc3dpcGVyLnBhcmFtcy5sYXp5LnNjcm9sbGluZ0VsZW1lbnQgPyAkKHN3aXBlci5wYXJhbXMubGF6eS5zY3JvbGxpbmdFbGVtZW50KSA6ICQod2luZG93KTtcbiAgICBjb25zdCBpc1dpbmRvdyA9ICRzY3JvbGxFbGVtZW50WzBdID09PSB3aW5kb3c7XG4gICAgY29uc3Qgc2Nyb2xsRWxlbWVudFdpZHRoID0gaXNXaW5kb3cgPyB3aW5kb3cuaW5uZXJXaWR0aCA6ICRzY3JvbGxFbGVtZW50WzBdLm9mZnNldFdpZHRoO1xuICAgIGNvbnN0IHNjcm9sbEVsZW1lbnRIZWlnaHQgPSBpc1dpbmRvdyA/IHdpbmRvdy5pbm5lckhlaWdodCA6ICRzY3JvbGxFbGVtZW50WzBdLm9mZnNldEhlaWdodDtcbiAgICBjb25zdCBzd2lwZXJPZmZzZXQgPSBzd2lwZXIuJGVsLm9mZnNldCgpO1xuICAgIGNvbnN0IHtcbiAgICAgIHJ0bFRyYW5zbGF0ZTogcnRsXG4gICAgfSA9IHN3aXBlcjtcbiAgICBsZXQgaW5WaWV3ID0gZmFsc2U7XG4gICAgaWYgKHJ0bCkgc3dpcGVyT2Zmc2V0LmxlZnQgLT0gc3dpcGVyLiRlbFswXS5zY3JvbGxMZWZ0O1xuICAgIGNvbnN0IHN3aXBlckNvb3JkID0gW1tzd2lwZXJPZmZzZXQubGVmdCwgc3dpcGVyT2Zmc2V0LnRvcF0sIFtzd2lwZXJPZmZzZXQubGVmdCArIHN3aXBlci53aWR0aCwgc3dpcGVyT2Zmc2V0LnRvcF0sIFtzd2lwZXJPZmZzZXQubGVmdCwgc3dpcGVyT2Zmc2V0LnRvcCArIHN3aXBlci5oZWlnaHRdLCBbc3dpcGVyT2Zmc2V0LmxlZnQgKyBzd2lwZXIud2lkdGgsIHN3aXBlck9mZnNldC50b3AgKyBzd2lwZXIuaGVpZ2h0XV07XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN3aXBlckNvb3JkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBwb2ludCA9IHN3aXBlckNvb3JkW2ldO1xuXG4gICAgICBpZiAocG9pbnRbMF0gPj0gMCAmJiBwb2ludFswXSA8PSBzY3JvbGxFbGVtZW50V2lkdGggJiYgcG9pbnRbMV0gPj0gMCAmJiBwb2ludFsxXSA8PSBzY3JvbGxFbGVtZW50SGVpZ2h0KSB7XG4gICAgICAgIGlmIChwb2ludFswXSA9PT0gMCAmJiBwb2ludFsxXSA9PT0gMCkgY29udGludWU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICAgICAgICBpblZpZXcgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBhc3NpdmVMaXN0ZW5lciA9IHN3aXBlci50b3VjaEV2ZW50cy5zdGFydCA9PT0gJ3RvdWNoc3RhcnQnICYmIHN3aXBlci5zdXBwb3J0LnBhc3NpdmVMaXN0ZW5lciAmJiBzd2lwZXIucGFyYW1zLnBhc3NpdmVMaXN0ZW5lcnMgPyB7XG4gICAgICBwYXNzaXZlOiB0cnVlLFxuICAgICAgY2FwdHVyZTogZmFsc2VcbiAgICB9IDogZmFsc2U7XG5cbiAgICBpZiAoaW5WaWV3KSB7XG4gICAgICBsb2FkKCk7XG4gICAgICAkc2Nyb2xsRWxlbWVudC5vZmYoJ3Njcm9sbCcsIGNoZWNrSW5WaWV3T25Mb2FkLCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgIH0gZWxzZSBpZiAoIXNjcm9sbEhhbmRsZXJBdHRhY2hlZCkge1xuICAgICAgc2Nyb2xsSGFuZGxlckF0dGFjaGVkID0gdHJ1ZTtcbiAgICAgICRzY3JvbGxFbGVtZW50Lm9uKCdzY3JvbGwnLCBjaGVja0luVmlld09uTG9hZCwgcGFzc2l2ZUxpc3RlbmVyKTtcbiAgICB9XG4gIH1cblxuICBvbignYmVmb3JlSW5pdCcsICgpID0+IHtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5sYXp5LmVuYWJsZWQgJiYgc3dpcGVyLnBhcmFtcy5wcmVsb2FkSW1hZ2VzKSB7XG4gICAgICBzd2lwZXIucGFyYW1zLnByZWxvYWRJbWFnZXMgPSBmYWxzZTtcbiAgICB9XG4gIH0pO1xuICBvbignaW5pdCcsICgpID0+IHtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5sYXp5LmVuYWJsZWQpIHtcbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLmxhenkuY2hlY2tJblZpZXcpIHtcbiAgICAgICAgY2hlY2tJblZpZXdPbkxvYWQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvYWQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICBvbignc2Nyb2xsJywgKCkgPT4ge1xuICAgIGlmIChzd2lwZXIucGFyYW1zLmZyZWVNb2RlICYmIHN3aXBlci5wYXJhbXMuZnJlZU1vZGUuZW5hYmxlZCAmJiAhc3dpcGVyLnBhcmFtcy5mcmVlTW9kZS5zdGlja3kpIHtcbiAgICAgIGxvYWQoKTtcbiAgICB9XG4gIH0pO1xuICBvbignc2Nyb2xsYmFyRHJhZ01vdmUgcmVzaXplIF9mcmVlTW9kZU5vTW9tZW50dW1SZWxlYXNlJywgKCkgPT4ge1xuICAgIGlmIChzd2lwZXIucGFyYW1zLmxhenkuZW5hYmxlZCkge1xuICAgICAgaWYgKHN3aXBlci5wYXJhbXMubGF6eS5jaGVja0luVmlldykge1xuICAgICAgICBjaGVja0luVmlld09uTG9hZCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9hZCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIG9uKCd0cmFuc2l0aW9uU3RhcnQnLCAoKSA9PiB7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMubGF6eS5lbmFibGVkKSB7XG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5sYXp5LmxvYWRPblRyYW5zaXRpb25TdGFydCB8fCAhc3dpcGVyLnBhcmFtcy5sYXp5LmxvYWRPblRyYW5zaXRpb25TdGFydCAmJiAhaW5pdGlhbEltYWdlTG9hZGVkKSB7XG4gICAgICAgIGlmIChzd2lwZXIucGFyYW1zLmxhenkuY2hlY2tJblZpZXcpIHtcbiAgICAgICAgICBjaGVja0luVmlld09uTG9hZCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxvYWQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIG9uKCd0cmFuc2l0aW9uRW5kJywgKCkgPT4ge1xuICAgIGlmIChzd2lwZXIucGFyYW1zLmxhenkuZW5hYmxlZCAmJiAhc3dpcGVyLnBhcmFtcy5sYXp5LmxvYWRPblRyYW5zaXRpb25TdGFydCkge1xuICAgICAgaWYgKHN3aXBlci5wYXJhbXMubGF6eS5jaGVja0luVmlldykge1xuICAgICAgICBjaGVja0luVmlld09uTG9hZCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9hZCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIG9uKCdzbGlkZUNoYW5nZScsICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBsYXp5LFxuICAgICAgY3NzTW9kZSxcbiAgICAgIHdhdGNoU2xpZGVzUHJvZ3Jlc3MsXG4gICAgICB0b3VjaFJlbGVhc2VPbkVkZ2VzLFxuICAgICAgcmVzaXN0YW5jZVJhdGlvXG4gICAgfSA9IHN3aXBlci5wYXJhbXM7XG5cbiAgICBpZiAobGF6eS5lbmFibGVkICYmIChjc3NNb2RlIHx8IHdhdGNoU2xpZGVzUHJvZ3Jlc3MgJiYgKHRvdWNoUmVsZWFzZU9uRWRnZXMgfHwgcmVzaXN0YW5jZVJhdGlvID09PSAwKSkpIHtcbiAgICAgIGxvYWQoKTtcbiAgICB9XG4gIH0pO1xuICBPYmplY3QuYXNzaWduKHN3aXBlci5sYXp5LCB7XG4gICAgbG9hZCxcbiAgICBsb2FkSW5TbGlkZVxuICB9KTtcbn0iLCJpbXBvcnQgYXBwZW5kU2xpZGUgZnJvbSAnLi9tZXRob2RzL2FwcGVuZFNsaWRlLmpzJztcbmltcG9ydCBwcmVwZW5kU2xpZGUgZnJvbSAnLi9tZXRob2RzL3ByZXBlbmRTbGlkZS5qcyc7XG5pbXBvcnQgYWRkU2xpZGUgZnJvbSAnLi9tZXRob2RzL2FkZFNsaWRlLmpzJztcbmltcG9ydCByZW1vdmVTbGlkZSBmcm9tICcuL21ldGhvZHMvcmVtb3ZlU2xpZGUuanMnO1xuaW1wb3J0IHJlbW92ZUFsbFNsaWRlcyBmcm9tICcuL21ldGhvZHMvcmVtb3ZlQWxsU2xpZGVzLmpzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hbmlwdWxhdGlvbih7XG4gIHN3aXBlclxufSkge1xuICBPYmplY3QuYXNzaWduKHN3aXBlciwge1xuICAgIGFwcGVuZFNsaWRlOiBhcHBlbmRTbGlkZS5iaW5kKHN3aXBlciksXG4gICAgcHJlcGVuZFNsaWRlOiBwcmVwZW5kU2xpZGUuYmluZChzd2lwZXIpLFxuICAgIGFkZFNsaWRlOiBhZGRTbGlkZS5iaW5kKHN3aXBlciksXG4gICAgcmVtb3ZlU2xpZGU6IHJlbW92ZVNsaWRlLmJpbmQoc3dpcGVyKSxcbiAgICByZW1vdmVBbGxTbGlkZXM6IHJlbW92ZUFsbFNsaWRlcy5iaW5kKHN3aXBlcilcbiAgfSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkU2xpZGUoaW5kZXgsIHNsaWRlcykge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCB7XG4gICAgJHdyYXBwZXJFbCxcbiAgICBwYXJhbXMsXG4gICAgYWN0aXZlSW5kZXhcbiAgfSA9IHN3aXBlcjtcbiAgbGV0IGFjdGl2ZUluZGV4QnVmZmVyID0gYWN0aXZlSW5kZXg7XG5cbiAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgYWN0aXZlSW5kZXhCdWZmZXIgLT0gc3dpcGVyLmxvb3BlZFNsaWRlcztcbiAgICBzd2lwZXIubG9vcERlc3Ryb3koKTtcbiAgICBzd2lwZXIuc2xpZGVzID0gJHdyYXBwZXJFbC5jaGlsZHJlbihgLiR7cGFyYW1zLnNsaWRlQ2xhc3N9YCk7XG4gIH1cblxuICBjb25zdCBiYXNlTGVuZ3RoID0gc3dpcGVyLnNsaWRlcy5sZW5ndGg7XG5cbiAgaWYgKGluZGV4IDw9IDApIHtcbiAgICBzd2lwZXIucHJlcGVuZFNsaWRlKHNsaWRlcyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZGV4ID49IGJhc2VMZW5ndGgpIHtcbiAgICBzd2lwZXIuYXBwZW5kU2xpZGUoc2xpZGVzKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgbmV3QWN0aXZlSW5kZXggPSBhY3RpdmVJbmRleEJ1ZmZlciA+IGluZGV4ID8gYWN0aXZlSW5kZXhCdWZmZXIgKyAxIDogYWN0aXZlSW5kZXhCdWZmZXI7XG4gIGNvbnN0IHNsaWRlc0J1ZmZlciA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSBiYXNlTGVuZ3RoIC0gMTsgaSA+PSBpbmRleDsgaSAtPSAxKSB7XG4gICAgY29uc3QgY3VycmVudFNsaWRlID0gc3dpcGVyLnNsaWRlcy5lcShpKTtcbiAgICBjdXJyZW50U2xpZGUucmVtb3ZlKCk7XG4gICAgc2xpZGVzQnVmZmVyLnVuc2hpZnQoY3VycmVudFNsaWRlKTtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygc2xpZGVzID09PSAnb2JqZWN0JyAmJiAnbGVuZ3RoJyBpbiBzbGlkZXMpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHNsaWRlc1tpXSkgJHdyYXBwZXJFbC5hcHBlbmQoc2xpZGVzW2ldKTtcbiAgICB9XG5cbiAgICBuZXdBY3RpdmVJbmRleCA9IGFjdGl2ZUluZGV4QnVmZmVyID4gaW5kZXggPyBhY3RpdmVJbmRleEJ1ZmZlciArIHNsaWRlcy5sZW5ndGggOiBhY3RpdmVJbmRleEJ1ZmZlcjtcbiAgfSBlbHNlIHtcbiAgICAkd3JhcHBlckVsLmFwcGVuZChzbGlkZXMpO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbGlkZXNCdWZmZXIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAkd3JhcHBlckVsLmFwcGVuZChzbGlkZXNCdWZmZXJbaV0pO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgc3dpcGVyLmxvb3BDcmVhdGUoKTtcbiAgfVxuXG4gIGlmICghcGFyYW1zLm9ic2VydmVyKSB7XG4gICAgc3dpcGVyLnVwZGF0ZSgpO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgc3dpcGVyLnNsaWRlVG8obmV3QWN0aXZlSW5kZXggKyBzd2lwZXIubG9vcGVkU2xpZGVzLCAwLCBmYWxzZSk7XG4gIH0gZWxzZSB7XG4gICAgc3dpcGVyLnNsaWRlVG8obmV3QWN0aXZlSW5kZXgsIDAsIGZhbHNlKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFwcGVuZFNsaWRlKHNsaWRlcykge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCB7XG4gICAgJHdyYXBwZXJFbCxcbiAgICBwYXJhbXNcbiAgfSA9IHN3aXBlcjtcblxuICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICBzd2lwZXIubG9vcERlc3Ryb3koKTtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygc2xpZGVzID09PSAnb2JqZWN0JyAmJiAnbGVuZ3RoJyBpbiBzbGlkZXMpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHNsaWRlc1tpXSkgJHdyYXBwZXJFbC5hcHBlbmQoc2xpZGVzW2ldKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgJHdyYXBwZXJFbC5hcHBlbmQoc2xpZGVzKTtcbiAgfVxuXG4gIGlmIChwYXJhbXMubG9vcCkge1xuICAgIHN3aXBlci5sb29wQ3JlYXRlKCk7XG4gIH1cblxuICBpZiAoIXBhcmFtcy5vYnNlcnZlcikge1xuICAgIHN3aXBlci51cGRhdGUoKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXBlbmRTbGlkZShzbGlkZXMpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3Qge1xuICAgIHBhcmFtcyxcbiAgICAkd3JhcHBlckVsLFxuICAgIGFjdGl2ZUluZGV4XG4gIH0gPSBzd2lwZXI7XG5cbiAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgc3dpcGVyLmxvb3BEZXN0cm95KCk7XG4gIH1cblxuICBsZXQgbmV3QWN0aXZlSW5kZXggPSBhY3RpdmVJbmRleCArIDE7XG5cbiAgaWYgKHR5cGVvZiBzbGlkZXMgPT09ICdvYmplY3QnICYmICdsZW5ndGgnIGluIHNsaWRlcykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoc2xpZGVzW2ldKSAkd3JhcHBlckVsLnByZXBlbmQoc2xpZGVzW2ldKTtcbiAgICB9XG5cbiAgICBuZXdBY3RpdmVJbmRleCA9IGFjdGl2ZUluZGV4ICsgc2xpZGVzLmxlbmd0aDtcbiAgfSBlbHNlIHtcbiAgICAkd3JhcHBlckVsLnByZXBlbmQoc2xpZGVzKTtcbiAgfVxuXG4gIGlmIChwYXJhbXMubG9vcCkge1xuICAgIHN3aXBlci5sb29wQ3JlYXRlKCk7XG4gIH1cblxuICBpZiAoIXBhcmFtcy5vYnNlcnZlcikge1xuICAgIHN3aXBlci51cGRhdGUoKTtcbiAgfVxuXG4gIHN3aXBlci5zbGlkZVRvKG5ld0FjdGl2ZUluZGV4LCAwLCBmYWxzZSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVtb3ZlQWxsU2xpZGVzKCkge1xuICBjb25zdCBzd2lwZXIgPSB0aGlzO1xuICBjb25zdCBzbGlkZXNJbmRleGVzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzd2lwZXIuc2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgc2xpZGVzSW5kZXhlcy5wdXNoKGkpO1xuICB9XG5cbiAgc3dpcGVyLnJlbW92ZVNsaWRlKHNsaWRlc0luZGV4ZXMpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbW92ZVNsaWRlKHNsaWRlc0luZGV4ZXMpIHtcbiAgY29uc3Qgc3dpcGVyID0gdGhpcztcbiAgY29uc3Qge1xuICAgIHBhcmFtcyxcbiAgICAkd3JhcHBlckVsLFxuICAgIGFjdGl2ZUluZGV4XG4gIH0gPSBzd2lwZXI7XG4gIGxldCBhY3RpdmVJbmRleEJ1ZmZlciA9IGFjdGl2ZUluZGV4O1xuXG4gIGlmIChwYXJhbXMubG9vcCkge1xuICAgIGFjdGl2ZUluZGV4QnVmZmVyIC09IHN3aXBlci5sb29wZWRTbGlkZXM7XG4gICAgc3dpcGVyLmxvb3BEZXN0cm95KCk7XG4gICAgc3dpcGVyLnNsaWRlcyA9ICR3cmFwcGVyRWwuY2hpbGRyZW4oYC4ke3BhcmFtcy5zbGlkZUNsYXNzfWApO1xuICB9XG5cbiAgbGV0IG5ld0FjdGl2ZUluZGV4ID0gYWN0aXZlSW5kZXhCdWZmZXI7XG4gIGxldCBpbmRleFRvUmVtb3ZlO1xuXG4gIGlmICh0eXBlb2Ygc2xpZGVzSW5kZXhlcyA9PT0gJ29iamVjdCcgJiYgJ2xlbmd0aCcgaW4gc2xpZGVzSW5kZXhlcykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2xpZGVzSW5kZXhlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaW5kZXhUb1JlbW92ZSA9IHNsaWRlc0luZGV4ZXNbaV07XG4gICAgICBpZiAoc3dpcGVyLnNsaWRlc1tpbmRleFRvUmVtb3ZlXSkgc3dpcGVyLnNsaWRlcy5lcShpbmRleFRvUmVtb3ZlKS5yZW1vdmUoKTtcbiAgICAgIGlmIChpbmRleFRvUmVtb3ZlIDwgbmV3QWN0aXZlSW5kZXgpIG5ld0FjdGl2ZUluZGV4IC09IDE7XG4gICAgfVxuXG4gICAgbmV3QWN0aXZlSW5kZXggPSBNYXRoLm1heChuZXdBY3RpdmVJbmRleCwgMCk7XG4gIH0gZWxzZSB7XG4gICAgaW5kZXhUb1JlbW92ZSA9IHNsaWRlc0luZGV4ZXM7XG4gICAgaWYgKHN3aXBlci5zbGlkZXNbaW5kZXhUb1JlbW92ZV0pIHN3aXBlci5zbGlkZXMuZXEoaW5kZXhUb1JlbW92ZSkucmVtb3ZlKCk7XG4gICAgaWYgKGluZGV4VG9SZW1vdmUgPCBuZXdBY3RpdmVJbmRleCkgbmV3QWN0aXZlSW5kZXggLT0gMTtcbiAgICBuZXdBY3RpdmVJbmRleCA9IE1hdGgubWF4KG5ld0FjdGl2ZUluZGV4LCAwKTtcbiAgfVxuXG4gIGlmIChwYXJhbXMubG9vcCkge1xuICAgIHN3aXBlci5sb29wQ3JlYXRlKCk7XG4gIH1cblxuICBpZiAoIXBhcmFtcy5vYnNlcnZlcikge1xuICAgIHN3aXBlci51cGRhdGUoKTtcbiAgfVxuXG4gIGlmIChwYXJhbXMubG9vcCkge1xuICAgIHN3aXBlci5zbGlkZVRvKG5ld0FjdGl2ZUluZGV4ICsgc3dpcGVyLmxvb3BlZFNsaWRlcywgMCwgZmFsc2UpO1xuICB9IGVsc2Uge1xuICAgIHN3aXBlci5zbGlkZVRvKG5ld0FjdGl2ZUluZGV4LCAwLCBmYWxzZSk7XG4gIH1cbn0iLCIvKiBlc2xpbnQtZGlzYWJsZSBjb25zaXN0ZW50LXJldHVybiAqL1xuaW1wb3J0IHsgZ2V0V2luZG93IH0gZnJvbSAnc3NyLXdpbmRvdyc7XG5pbXBvcnQgJCBmcm9tICcuLi8uLi9zaGFyZWQvZG9tLmpzJztcbmltcG9ydCB7IG5vdywgbmV4dFRpY2sgfSBmcm9tICcuLi8uLi9zaGFyZWQvdXRpbHMuanMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW91c2V3aGVlbCh7XG4gIHN3aXBlcixcbiAgZXh0ZW5kUGFyYW1zLFxuICBvbixcbiAgZW1pdFxufSkge1xuICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgZXh0ZW5kUGFyYW1zKHtcbiAgICBtb3VzZXdoZWVsOiB7XG4gICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgIHJlbGVhc2VPbkVkZ2VzOiBmYWxzZSxcbiAgICAgIGludmVydDogZmFsc2UsXG4gICAgICBmb3JjZVRvQXhpczogZmFsc2UsXG4gICAgICBzZW5zaXRpdml0eTogMSxcbiAgICAgIGV2ZW50c1RhcmdldDogJ2NvbnRhaW5lcicsXG4gICAgICB0aHJlc2hvbGREZWx0YTogbnVsbCxcbiAgICAgIHRocmVzaG9sZFRpbWU6IG51bGxcbiAgICB9XG4gIH0pO1xuICBzd2lwZXIubW91c2V3aGVlbCA9IHtcbiAgICBlbmFibGVkOiBmYWxzZVxuICB9O1xuICBsZXQgdGltZW91dDtcbiAgbGV0IGxhc3RTY3JvbGxUaW1lID0gbm93KCk7XG4gIGxldCBsYXN0RXZlbnRCZWZvcmVTbmFwO1xuICBjb25zdCByZWNlbnRXaGVlbEV2ZW50cyA9IFtdO1xuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZShlKSB7XG4gICAgLy8gUmVhc29uYWJsZSBkZWZhdWx0c1xuICAgIGNvbnN0IFBJWEVMX1NURVAgPSAxMDtcbiAgICBjb25zdCBMSU5FX0hFSUdIVCA9IDQwO1xuICAgIGNvbnN0IFBBR0VfSEVJR0hUID0gODAwO1xuICAgIGxldCBzWCA9IDA7XG4gICAgbGV0IHNZID0gMDsgLy8gc3BpblgsIHNwaW5ZXG5cbiAgICBsZXQgcFggPSAwO1xuICAgIGxldCBwWSA9IDA7IC8vIHBpeGVsWCwgcGl4ZWxZXG4gICAgLy8gTGVnYWN5XG5cbiAgICBpZiAoJ2RldGFpbCcgaW4gZSkge1xuICAgICAgc1kgPSBlLmRldGFpbDtcbiAgICB9XG5cbiAgICBpZiAoJ3doZWVsRGVsdGEnIGluIGUpIHtcbiAgICAgIHNZID0gLWUud2hlZWxEZWx0YSAvIDEyMDtcbiAgICB9XG5cbiAgICBpZiAoJ3doZWVsRGVsdGFZJyBpbiBlKSB7XG4gICAgICBzWSA9IC1lLndoZWVsRGVsdGFZIC8gMTIwO1xuICAgIH1cblxuICAgIGlmICgnd2hlZWxEZWx0YVgnIGluIGUpIHtcbiAgICAgIHNYID0gLWUud2hlZWxEZWx0YVggLyAxMjA7XG4gICAgfSAvLyBzaWRlIHNjcm9sbGluZyBvbiBGRiB3aXRoIERPTU1vdXNlU2Nyb2xsXG5cblxuICAgIGlmICgnYXhpcycgaW4gZSAmJiBlLmF4aXMgPT09IGUuSE9SSVpPTlRBTF9BWElTKSB7XG4gICAgICBzWCA9IHNZO1xuICAgICAgc1kgPSAwO1xuICAgIH1cblxuICAgIHBYID0gc1ggKiBQSVhFTF9TVEVQO1xuICAgIHBZID0gc1kgKiBQSVhFTF9TVEVQO1xuXG4gICAgaWYgKCdkZWx0YVknIGluIGUpIHtcbiAgICAgIHBZID0gZS5kZWx0YVk7XG4gICAgfVxuXG4gICAgaWYgKCdkZWx0YVgnIGluIGUpIHtcbiAgICAgIHBYID0gZS5kZWx0YVg7XG4gICAgfVxuXG4gICAgaWYgKGUuc2hpZnRLZXkgJiYgIXBYKSB7XG4gICAgICAvLyBpZiB1c2VyIHNjcm9sbHMgd2l0aCBzaGlmdCBoZSB3YW50cyBob3Jpem9udGFsIHNjcm9sbFxuICAgICAgcFggPSBwWTtcbiAgICAgIHBZID0gMDtcbiAgICB9XG5cbiAgICBpZiAoKHBYIHx8IHBZKSAmJiBlLmRlbHRhTW9kZSkge1xuICAgICAgaWYgKGUuZGVsdGFNb2RlID09PSAxKSB7XG4gICAgICAgIC8vIGRlbHRhIGluIExJTkUgdW5pdHNcbiAgICAgICAgcFggKj0gTElORV9IRUlHSFQ7XG4gICAgICAgIHBZICo9IExJTkVfSEVJR0hUO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZGVsdGEgaW4gUEFHRSB1bml0c1xuICAgICAgICBwWCAqPSBQQUdFX0hFSUdIVDtcbiAgICAgICAgcFkgKj0gUEFHRV9IRUlHSFQ7XG4gICAgICB9XG4gICAgfSAvLyBGYWxsLWJhY2sgaWYgc3BpbiBjYW5ub3QgYmUgZGV0ZXJtaW5lZFxuXG5cbiAgICBpZiAocFggJiYgIXNYKSB7XG4gICAgICBzWCA9IHBYIDwgMSA/IC0xIDogMTtcbiAgICB9XG5cbiAgICBpZiAocFkgJiYgIXNZKSB7XG4gICAgICBzWSA9IHBZIDwgMSA/IC0xIDogMTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgc3Bpblg6IHNYLFxuICAgICAgc3Bpblk6IHNZLFxuICAgICAgcGl4ZWxYOiBwWCxcbiAgICAgIHBpeGVsWTogcFlcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlTW91c2VFbnRlcigpIHtcbiAgICBpZiAoIXN3aXBlci5lbmFibGVkKSByZXR1cm47XG4gICAgc3dpcGVyLm1vdXNlRW50ZXJlZCA9IHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVNb3VzZUxlYXZlKCkge1xuICAgIGlmICghc3dpcGVyLmVuYWJsZWQpIHJldHVybjtcbiAgICBzd2lwZXIubW91c2VFbnRlcmVkID0gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBhbmltYXRlU2xpZGVyKG5ld0V2ZW50KSB7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMubW91c2V3aGVlbC50aHJlc2hvbGREZWx0YSAmJiBuZXdFdmVudC5kZWx0YSA8IHN3aXBlci5wYXJhbXMubW91c2V3aGVlbC50aHJlc2hvbGREZWx0YSkge1xuICAgICAgLy8gUHJldmVudCBpZiBkZWx0YSBvZiB3aGVlbCBzY3JvbGwgZGVsdGEgaXMgYmVsb3cgY29uZmlndXJlZCB0aHJlc2hvbGRcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5tb3VzZXdoZWVsLnRocmVzaG9sZFRpbWUgJiYgbm93KCkgLSBsYXN0U2Nyb2xsVGltZSA8IHN3aXBlci5wYXJhbXMubW91c2V3aGVlbC50aHJlc2hvbGRUaW1lKSB7XG4gICAgICAvLyBQcmV2ZW50IGlmIHRpbWUgYmV0d2VlbiBzY3JvbGxzIGlzIGJlbG93IGNvbmZpZ3VyZWQgdGhyZXNob2xkXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSAvLyBJZiB0aGUgbW92ZW1lbnQgaXMgTk9UIGJpZyBlbm91Z2ggYW5kXG4gICAgLy8gaWYgdGhlIGxhc3QgdGltZSB0aGUgdXNlciBzY3JvbGxlZCB3YXMgdG9vIGNsb3NlIHRvIHRoZSBjdXJyZW50IG9uZSAoYXZvaWQgY29udGludW91c2x5IHRyaWdnZXJpbmcgdGhlIHNsaWRlcik6XG4gICAgLy8gICBEb24ndCBnbyBhbnkgZnVydGhlciAoYXZvaWQgaW5zaWduaWZpY2FudCBzY3JvbGwgbW92ZW1lbnQpLlxuXG5cbiAgICBpZiAobmV3RXZlbnQuZGVsdGEgPj0gNiAmJiBub3coKSAtIGxhc3RTY3JvbGxUaW1lIDwgNjApIHtcbiAgICAgIC8vIFJldHVybiBmYWxzZSBhcyBhIGRlZmF1bHRcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gLy8gSWYgdXNlciBpcyBzY3JvbGxpbmcgdG93YXJkcyB0aGUgZW5kOlxuICAgIC8vICAgSWYgdGhlIHNsaWRlciBoYXNuJ3QgaGl0IHRoZSBsYXRlc3Qgc2xpZGUgb3JcbiAgICAvLyAgIGlmIHRoZSBzbGlkZXIgaXMgYSBsb29wIGFuZFxuICAgIC8vICAgaWYgdGhlIHNsaWRlciBpc24ndCBtb3ZpbmcgcmlnaHQgbm93OlxuICAgIC8vICAgICBHbyB0byBuZXh0IHNsaWRlIGFuZFxuICAgIC8vICAgICBlbWl0IGEgc2Nyb2xsIGV2ZW50LlxuICAgIC8vIEVsc2UgKHRoZSB1c2VyIGlzIHNjcm9sbGluZyB0b3dhcmRzIHRoZSBiZWdpbm5pbmcpIGFuZFxuICAgIC8vIGlmIHRoZSBzbGlkZXIgaGFzbid0IGhpdCB0aGUgZmlyc3Qgc2xpZGUgb3JcbiAgICAvLyBpZiB0aGUgc2xpZGVyIGlzIGEgbG9vcCBhbmRcbiAgICAvLyBpZiB0aGUgc2xpZGVyIGlzbid0IG1vdmluZyByaWdodCBub3c6XG4gICAgLy8gICBHbyB0byBwcmV2IHNsaWRlIGFuZFxuICAgIC8vICAgZW1pdCBhIHNjcm9sbCBldmVudC5cblxuXG4gICAgaWYgKG5ld0V2ZW50LmRpcmVjdGlvbiA8IDApIHtcbiAgICAgIGlmICgoIXN3aXBlci5pc0VuZCB8fCBzd2lwZXIucGFyYW1zLmxvb3ApICYmICFzd2lwZXIuYW5pbWF0aW5nKSB7XG4gICAgICAgIHN3aXBlci5zbGlkZU5leHQoKTtcbiAgICAgICAgZW1pdCgnc2Nyb2xsJywgbmV3RXZlbnQucmF3KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCghc3dpcGVyLmlzQmVnaW5uaW5nIHx8IHN3aXBlci5wYXJhbXMubG9vcCkgJiYgIXN3aXBlci5hbmltYXRpbmcpIHtcbiAgICAgIHN3aXBlci5zbGlkZVByZXYoKTtcbiAgICAgIGVtaXQoJ3Njcm9sbCcsIG5ld0V2ZW50LnJhdyk7XG4gICAgfSAvLyBJZiB5b3UgZ290IGhlcmUgaXMgYmVjYXVzZSBhbiBhbmltYXRpb24gaGFzIGJlZW4gdHJpZ2dlcmVkIHNvIHN0b3JlIHRoZSBjdXJyZW50IHRpbWVcblxuXG4gICAgbGFzdFNjcm9sbFRpbWUgPSBuZXcgd2luZG93LkRhdGUoKS5nZXRUaW1lKCk7IC8vIFJldHVybiBmYWxzZSBhcyBhIGRlZmF1bHRcblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbGVhc2VTY3JvbGwobmV3RXZlbnQpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLm1vdXNld2hlZWw7XG5cbiAgICBpZiAobmV3RXZlbnQuZGlyZWN0aW9uIDwgMCkge1xuICAgICAgaWYgKHN3aXBlci5pc0VuZCAmJiAhc3dpcGVyLnBhcmFtcy5sb29wICYmIHBhcmFtcy5yZWxlYXNlT25FZGdlcykge1xuICAgICAgICAvLyBSZXR1cm4gdHJ1ZSB0byBhbmltYXRlIHNjcm9sbCBvbiBlZGdlc1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHN3aXBlci5pc0JlZ2lubmluZyAmJiAhc3dpcGVyLnBhcmFtcy5sb29wICYmIHBhcmFtcy5yZWxlYXNlT25FZGdlcykge1xuICAgICAgLy8gUmV0dXJuIHRydWUgdG8gYW5pbWF0ZSBzY3JvbGwgb24gZWRnZXNcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZShldmVudCkge1xuICAgIGxldCBlID0gZXZlbnQ7XG4gICAgbGV0IGRpc2FibGVQYXJlbnRTd2lwZXIgPSB0cnVlO1xuICAgIGlmICghc3dpcGVyLmVuYWJsZWQpIHJldHVybjtcbiAgICBjb25zdCBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLm1vdXNld2hlZWw7XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5jc3NNb2RlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgbGV0IHRhcmdldCA9IHN3aXBlci4kZWw7XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5tb3VzZXdoZWVsLmV2ZW50c1RhcmdldCAhPT0gJ2NvbnRhaW5lcicpIHtcbiAgICAgIHRhcmdldCA9ICQoc3dpcGVyLnBhcmFtcy5tb3VzZXdoZWVsLmV2ZW50c1RhcmdldCk7XG4gICAgfVxuXG4gICAgaWYgKCFzd2lwZXIubW91c2VFbnRlcmVkICYmICF0YXJnZXRbMF0uY29udGFpbnMoZS50YXJnZXQpICYmICFwYXJhbXMucmVsZWFzZU9uRWRnZXMpIHJldHVybiB0cnVlO1xuICAgIGlmIChlLm9yaWdpbmFsRXZlbnQpIGUgPSBlLm9yaWdpbmFsRXZlbnQ7IC8vIGpxdWVyeSBmaXhcblxuICAgIGxldCBkZWx0YSA9IDA7XG4gICAgY29uc3QgcnRsRmFjdG9yID0gc3dpcGVyLnJ0bFRyYW5zbGF0ZSA/IC0xIDogMTtcbiAgICBjb25zdCBkYXRhID0gbm9ybWFsaXplKGUpO1xuXG4gICAgaWYgKHBhcmFtcy5mb3JjZVRvQXhpcykge1xuICAgICAgaWYgKHN3aXBlci5pc0hvcml6b250YWwoKSkge1xuICAgICAgICBpZiAoTWF0aC5hYnMoZGF0YS5waXhlbFgpID4gTWF0aC5hYnMoZGF0YS5waXhlbFkpKSBkZWx0YSA9IC1kYXRhLnBpeGVsWCAqIHJ0bEZhY3RvcjtlbHNlIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChNYXRoLmFicyhkYXRhLnBpeGVsWSkgPiBNYXRoLmFicyhkYXRhLnBpeGVsWCkpIGRlbHRhID0gLWRhdGEucGl4ZWxZO2Vsc2UgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbHRhID0gTWF0aC5hYnMoZGF0YS5waXhlbFgpID4gTWF0aC5hYnMoZGF0YS5waXhlbFkpID8gLWRhdGEucGl4ZWxYICogcnRsRmFjdG9yIDogLWRhdGEucGl4ZWxZO1xuICAgIH1cblxuICAgIGlmIChkZWx0YSA9PT0gMCkgcmV0dXJuIHRydWU7XG4gICAgaWYgKHBhcmFtcy5pbnZlcnQpIGRlbHRhID0gLWRlbHRhOyAvLyBHZXQgdGhlIHNjcm9sbCBwb3NpdGlvbnNcblxuICAgIGxldCBwb3NpdGlvbnMgPSBzd2lwZXIuZ2V0VHJhbnNsYXRlKCkgKyBkZWx0YSAqIHBhcmFtcy5zZW5zaXRpdml0eTtcbiAgICBpZiAocG9zaXRpb25zID49IHN3aXBlci5taW5UcmFuc2xhdGUoKSkgcG9zaXRpb25zID0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpO1xuICAgIGlmIChwb3NpdGlvbnMgPD0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpKSBwb3NpdGlvbnMgPSBzd2lwZXIubWF4VHJhbnNsYXRlKCk7IC8vIFdoZW4gbG9vcCBpcyB0cnVlOlxuICAgIC8vICAgICB0aGUgZGlzYWJsZVBhcmVudFN3aXBlciB3aWxsIGJlIHRydWUuXG4gICAgLy8gV2hlbiBsb29wIGlzIGZhbHNlOlxuICAgIC8vICAgICBpZiB0aGUgc2Nyb2xsIHBvc2l0aW9ucyBpcyBub3Qgb24gZWRnZSxcbiAgICAvLyAgICAgdGhlbiB0aGUgZGlzYWJsZVBhcmVudFN3aXBlciB3aWxsIGJlIHRydWUuXG4gICAgLy8gICAgIGlmIHRoZSBzY3JvbGwgb24gZWRnZSBwb3NpdGlvbnMsXG4gICAgLy8gICAgIHRoZW4gdGhlIGRpc2FibGVQYXJlbnRTd2lwZXIgd2lsbCBiZSBmYWxzZS5cblxuICAgIGRpc2FibGVQYXJlbnRTd2lwZXIgPSBzd2lwZXIucGFyYW1zLmxvb3AgPyB0cnVlIDogIShwb3NpdGlvbnMgPT09IHN3aXBlci5taW5UcmFuc2xhdGUoKSB8fCBwb3NpdGlvbnMgPT09IHN3aXBlci5tYXhUcmFuc2xhdGUoKSk7XG4gICAgaWYgKGRpc2FibGVQYXJlbnRTd2lwZXIgJiYgc3dpcGVyLnBhcmFtcy5uZXN0ZWQpIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBpZiAoIXN3aXBlci5wYXJhbXMuZnJlZU1vZGUgfHwgIXN3aXBlci5wYXJhbXMuZnJlZU1vZGUuZW5hYmxlZCkge1xuICAgICAgLy8gUmVnaXN0ZXIgdGhlIG5ldyBldmVudCBpbiBhIHZhcmlhYmxlIHdoaWNoIHN0b3JlcyB0aGUgcmVsZXZhbnQgZGF0YVxuICAgICAgY29uc3QgbmV3RXZlbnQgPSB7XG4gICAgICAgIHRpbWU6IG5vdygpLFxuICAgICAgICBkZWx0YTogTWF0aC5hYnMoZGVsdGEpLFxuICAgICAgICBkaXJlY3Rpb246IE1hdGguc2lnbihkZWx0YSksXG4gICAgICAgIHJhdzogZXZlbnRcbiAgICAgIH07IC8vIEtlZXAgdGhlIG1vc3QgcmVjZW50IGV2ZW50c1xuXG4gICAgICBpZiAocmVjZW50V2hlZWxFdmVudHMubGVuZ3RoID49IDIpIHtcbiAgICAgICAgcmVjZW50V2hlZWxFdmVudHMuc2hpZnQoKTsgLy8gb25seSBzdG9yZSB0aGUgbGFzdCBOIGV2ZW50c1xuICAgICAgfVxuXG4gICAgICBjb25zdCBwcmV2RXZlbnQgPSByZWNlbnRXaGVlbEV2ZW50cy5sZW5ndGggPyByZWNlbnRXaGVlbEV2ZW50c1tyZWNlbnRXaGVlbEV2ZW50cy5sZW5ndGggLSAxXSA6IHVuZGVmaW5lZDtcbiAgICAgIHJlY2VudFdoZWVsRXZlbnRzLnB1c2gobmV3RXZlbnQpOyAvLyBJZiB0aGVyZSBpcyBhdCBsZWFzdCBvbmUgcHJldmlvdXMgcmVjb3JkZWQgZXZlbnQ6XG4gICAgICAvLyAgIElmIGRpcmVjdGlvbiBoYXMgY2hhbmdlZCBvclxuICAgICAgLy8gICBpZiB0aGUgc2Nyb2xsIGlzIHF1aWNrZXIgdGhhbiB0aGUgcHJldmlvdXMgb25lOlxuICAgICAgLy8gICAgIEFuaW1hdGUgdGhlIHNsaWRlci5cbiAgICAgIC8vIEVsc2UgKHRoaXMgaXMgdGhlIGZpcnN0IHRpbWUgdGhlIHdoZWVsIGlzIG1vdmVkKTpcbiAgICAgIC8vICAgICBBbmltYXRlIHRoZSBzbGlkZXIuXG5cbiAgICAgIGlmIChwcmV2RXZlbnQpIHtcbiAgICAgICAgaWYgKG5ld0V2ZW50LmRpcmVjdGlvbiAhPT0gcHJldkV2ZW50LmRpcmVjdGlvbiB8fCBuZXdFdmVudC5kZWx0YSA+IHByZXZFdmVudC5kZWx0YSB8fCBuZXdFdmVudC50aW1lID4gcHJldkV2ZW50LnRpbWUgKyAxNTApIHtcbiAgICAgICAgICBhbmltYXRlU2xpZGVyKG5ld0V2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYW5pbWF0ZVNsaWRlcihuZXdFdmVudCk7XG4gICAgICB9IC8vIElmIGl0J3MgdGltZSB0byByZWxlYXNlIHRoZSBzY3JvbGw6XG4gICAgICAvLyAgIFJldHVybiBub3cgc28geW91IGRvbid0IGhpdCB0aGUgcHJldmVudERlZmF1bHQuXG5cblxuICAgICAgaWYgKHJlbGVhc2VTY3JvbGwobmV3RXZlbnQpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBGcmVlbW9kZSBvciBzY3JvbGxDb250YWluZXI6XG4gICAgICAvLyBJZiB3ZSByZWNlbnRseSBzbmFwcGVkIGFmdGVyIGEgbW9tZW50dW0gc2Nyb2xsLCB0aGVuIGlnbm9yZSB3aGVlbCBldmVudHNcbiAgICAgIC8vIHRvIGdpdmUgdGltZSBmb3IgdGhlIGRlY2VsZXJhdGlvbiB0byBmaW5pc2guIFN0b3AgaWdub3JpbmcgYWZ0ZXIgNTAwIG1zZWNzXG4gICAgICAvLyBvciBpZiBpdCdzIGEgbmV3IHNjcm9sbCAobGFyZ2VyIGRlbHRhIG9yIGludmVyc2Ugc2lnbiBhcyBsYXN0IGV2ZW50IGJlZm9yZVxuICAgICAgLy8gYW4gZW5kLW9mLW1vbWVudHVtIHNuYXApLlxuICAgICAgY29uc3QgbmV3RXZlbnQgPSB7XG4gICAgICAgIHRpbWU6IG5vdygpLFxuICAgICAgICBkZWx0YTogTWF0aC5hYnMoZGVsdGEpLFxuICAgICAgICBkaXJlY3Rpb246IE1hdGguc2lnbihkZWx0YSlcbiAgICAgIH07XG4gICAgICBjb25zdCBpZ25vcmVXaGVlbEV2ZW50cyA9IGxhc3RFdmVudEJlZm9yZVNuYXAgJiYgbmV3RXZlbnQudGltZSA8IGxhc3RFdmVudEJlZm9yZVNuYXAudGltZSArIDUwMCAmJiBuZXdFdmVudC5kZWx0YSA8PSBsYXN0RXZlbnRCZWZvcmVTbmFwLmRlbHRhICYmIG5ld0V2ZW50LmRpcmVjdGlvbiA9PT0gbGFzdEV2ZW50QmVmb3JlU25hcC5kaXJlY3Rpb247XG5cbiAgICAgIGlmICghaWdub3JlV2hlZWxFdmVudHMpIHtcbiAgICAgICAgbGFzdEV2ZW50QmVmb3JlU25hcCA9IHVuZGVmaW5lZDtcblxuICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy5sb29wKSB7XG4gICAgICAgICAgc3dpcGVyLmxvb3BGaXgoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwb3NpdGlvbiA9IHN3aXBlci5nZXRUcmFuc2xhdGUoKSArIGRlbHRhICogcGFyYW1zLnNlbnNpdGl2aXR5O1xuICAgICAgICBjb25zdCB3YXNCZWdpbm5pbmcgPSBzd2lwZXIuaXNCZWdpbm5pbmc7XG4gICAgICAgIGNvbnN0IHdhc0VuZCA9IHN3aXBlci5pc0VuZDtcbiAgICAgICAgaWYgKHBvc2l0aW9uID49IHN3aXBlci5taW5UcmFuc2xhdGUoKSkgcG9zaXRpb24gPSBzd2lwZXIubWluVHJhbnNsYXRlKCk7XG4gICAgICAgIGlmIChwb3NpdGlvbiA8PSBzd2lwZXIubWF4VHJhbnNsYXRlKCkpIHBvc2l0aW9uID0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpO1xuICAgICAgICBzd2lwZXIuc2V0VHJhbnNpdGlvbigwKTtcbiAgICAgICAgc3dpcGVyLnNldFRyYW5zbGF0ZShwb3NpdGlvbik7XG4gICAgICAgIHN3aXBlci51cGRhdGVQcm9ncmVzcygpO1xuICAgICAgICBzd2lwZXIudXBkYXRlQWN0aXZlSW5kZXgoKTtcbiAgICAgICAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcblxuICAgICAgICBpZiAoIXdhc0JlZ2lubmluZyAmJiBzd2lwZXIuaXNCZWdpbm5pbmcgfHwgIXdhc0VuZCAmJiBzd2lwZXIuaXNFbmQpIHtcbiAgICAgICAgICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMuZnJlZU1vZGUuc3RpY2t5KSB7XG4gICAgICAgICAgLy8gV2hlbiB3aGVlbCBzY3JvbGxpbmcgc3RhcnRzIHdpdGggc3RpY2t5IChha2Egc25hcCkgZW5hYmxlZCwgdGhlbiBkZXRlY3RcbiAgICAgICAgICAvLyB0aGUgZW5kIG9mIGEgbW9tZW50dW0gc2Nyb2xsIGJ5IHN0b3JpbmcgcmVjZW50IChOPTE1Pykgd2hlZWwgZXZlbnRzLlxuICAgICAgICAgIC8vIDEuIGRvIGFsbCBOIGV2ZW50cyBoYXZlIGRlY3JlYXNpbmcgb3Igc2FtZSAoYWJzb2x1dGUgdmFsdWUpIGRlbHRhP1xuICAgICAgICAgIC8vIDIuIGRpZCBhbGwgTiBldmVudHMgYXJyaXZlIGluIHRoZSBsYXN0IE0gKE09NTAwPykgbXNlY3M/XG4gICAgICAgICAgLy8gMy4gZG9lcyB0aGUgZWFybGllc3QgZXZlbnQgaGF2ZSBhbiAoYWJzb2x1dGUgdmFsdWUpIGRlbHRhIHRoYXQnc1xuICAgICAgICAgIC8vICAgIGF0IGxlYXN0IFAgKFA9MT8pIGxhcmdlciB0aGFuIHRoZSBtb3N0IHJlY2VudCBldmVudCdzIGRlbHRhP1xuICAgICAgICAgIC8vIDQuIGRvZXMgdGhlIGxhdGVzdCBldmVudCBoYXZlIGEgZGVsdGEgdGhhdCdzIHNtYWxsZXIgdGhhbiBRIChRPTY/KSBwaXhlbHM/XG4gICAgICAgICAgLy8gSWYgMS00IGFyZSBcInllc1wiIHRoZW4gd2UncmUgbmVhciB0aGUgZW5kIG9mIGEgbW9tZW50dW0gc2Nyb2xsIGRlY2VsZXJhdGlvbi5cbiAgICAgICAgICAvLyBTbmFwIGltbWVkaWF0ZWx5IGFuZCBpZ25vcmUgcmVtYWluaW5nIHdoZWVsIGV2ZW50cyBpbiB0aGlzIHNjcm9sbC5cbiAgICAgICAgICAvLyBTZWUgY29tbWVudCBhYm92ZSBmb3IgXCJyZW1haW5pbmcgd2hlZWwgZXZlbnRzIGluIHRoaXMgc2Nyb2xsXCIgZGV0ZXJtaW5hdGlvbi5cbiAgICAgICAgICAvLyBJZiAxLTQgYXJlbid0IHNhdGlzZmllZCwgdGhlbiB3YWl0IHRvIHNuYXAgdW50aWwgNTAwbXMgYWZ0ZXIgdGhlIGxhc3QgZXZlbnQuXG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICAgIHRpbWVvdXQgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICBpZiAocmVjZW50V2hlZWxFdmVudHMubGVuZ3RoID49IDE1KSB7XG4gICAgICAgICAgICByZWNlbnRXaGVlbEV2ZW50cy5zaGlmdCgpOyAvLyBvbmx5IHN0b3JlIHRoZSBsYXN0IE4gZXZlbnRzXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgcHJldkV2ZW50ID0gcmVjZW50V2hlZWxFdmVudHMubGVuZ3RoID8gcmVjZW50V2hlZWxFdmVudHNbcmVjZW50V2hlZWxFdmVudHMubGVuZ3RoIC0gMV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgY29uc3QgZmlyc3RFdmVudCA9IHJlY2VudFdoZWVsRXZlbnRzWzBdO1xuICAgICAgICAgIHJlY2VudFdoZWVsRXZlbnRzLnB1c2gobmV3RXZlbnQpO1xuXG4gICAgICAgICAgaWYgKHByZXZFdmVudCAmJiAobmV3RXZlbnQuZGVsdGEgPiBwcmV2RXZlbnQuZGVsdGEgfHwgbmV3RXZlbnQuZGlyZWN0aW9uICE9PSBwcmV2RXZlbnQuZGlyZWN0aW9uKSkge1xuICAgICAgICAgICAgLy8gSW5jcmVhc2luZyBvciByZXZlcnNlLXNpZ24gZGVsdGEgbWVhbnMgdGhlIHVzZXIgc3RhcnRlZCBzY3JvbGxpbmcgYWdhaW4uIENsZWFyIHRoZSB3aGVlbCBldmVudCBsb2cuXG4gICAgICAgICAgICByZWNlbnRXaGVlbEV2ZW50cy5zcGxpY2UoMCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChyZWNlbnRXaGVlbEV2ZW50cy5sZW5ndGggPj0gMTUgJiYgbmV3RXZlbnQudGltZSAtIGZpcnN0RXZlbnQudGltZSA8IDUwMCAmJiBmaXJzdEV2ZW50LmRlbHRhIC0gbmV3RXZlbnQuZGVsdGEgPj0gMSAmJiBuZXdFdmVudC5kZWx0YSA8PSA2KSB7XG4gICAgICAgICAgICAvLyBXZSdyZSBhdCB0aGUgZW5kIG9mIHRoZSBkZWNlbGVyYXRpb24gb2YgYSBtb21lbnR1bSBzY3JvbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAgICAgICAgICAgLy8gdG8gd2FpdCBmb3IgbW9yZSBldmVudHMuIFNuYXAgQVNBUCBvbiB0aGUgbmV4dCB0aWNrLlxuICAgICAgICAgICAgLy8gQWxzbywgYmVjYXVzZSB0aGVyZSdzIHNvbWUgcmVtYWluaW5nIG1vbWVudHVtIHdlJ2xsIGJpYXMgdGhlIHNuYXAgaW4gdGhlXG4gICAgICAgICAgICAvLyBkaXJlY3Rpb24gb2YgdGhlIG9uZ29pbmcgc2Nyb2xsIGJlY2F1c2UgaXQncyBiZXR0ZXIgVVggZm9yIHRoZSBzY3JvbGwgdG8gc25hcFxuICAgICAgICAgICAgLy8gaW4gdGhlIHNhbWUgZGlyZWN0aW9uIGFzIHRoZSBzY3JvbGwgaW5zdGVhZCBvZiByZXZlcnNpbmcgdG8gc25hcC4gIFRoZXJlZm9yZSxcbiAgICAgICAgICAgIC8vIGlmIGl0J3MgYWxyZWFkeSBzY3JvbGxlZCBtb3JlIHRoYW4gMjAlIGluIHRoZSBjdXJyZW50IGRpcmVjdGlvbiwga2VlcCBnb2luZy5cbiAgICAgICAgICAgIGNvbnN0IHNuYXBUb1RocmVzaG9sZCA9IGRlbHRhID4gMCA/IDAuOCA6IDAuMjtcbiAgICAgICAgICAgIGxhc3RFdmVudEJlZm9yZVNuYXAgPSBuZXdFdmVudDtcbiAgICAgICAgICAgIHJlY2VudFdoZWVsRXZlbnRzLnNwbGljZSgwKTtcbiAgICAgICAgICAgIHRpbWVvdXQgPSBuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICAgIHN3aXBlci5zbGlkZVRvQ2xvc2VzdChzd2lwZXIucGFyYW1zLnNwZWVkLCB0cnVlLCB1bmRlZmluZWQsIHNuYXBUb1RocmVzaG9sZCk7XG4gICAgICAgICAgICB9LCAwKTsgLy8gbm8gZGVsYXk7IG1vdmUgb24gbmV4dCB0aWNrXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCF0aW1lb3V0KSB7XG4gICAgICAgICAgICAvLyBpZiB3ZSBnZXQgaGVyZSwgdGhlbiB3ZSBoYXZlbid0IGRldGVjdGVkIHRoZSBlbmQgb2YgYSBtb21lbnR1bSBzY3JvbGwsIHNvXG4gICAgICAgICAgICAvLyB3ZSdsbCBjb25zaWRlciBhIHNjcm9sbCBcImNvbXBsZXRlXCIgd2hlbiB0aGVyZSBoYXZlbid0IGJlZW4gYW55IHdoZWVsIGV2ZW50c1xuICAgICAgICAgICAgLy8gZm9yIDUwMG1zLlxuICAgICAgICAgICAgdGltZW91dCA9IG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgc25hcFRvVGhyZXNob2xkID0gMC41O1xuICAgICAgICAgICAgICBsYXN0RXZlbnRCZWZvcmVTbmFwID0gbmV3RXZlbnQ7XG4gICAgICAgICAgICAgIHJlY2VudFdoZWVsRXZlbnRzLnNwbGljZSgwKTtcbiAgICAgICAgICAgICAgc3dpcGVyLnNsaWRlVG9DbG9zZXN0KHN3aXBlci5wYXJhbXMuc3BlZWQsIHRydWUsIHVuZGVmaW5lZCwgc25hcFRvVGhyZXNob2xkKTtcbiAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIEVtaXQgZXZlbnRcblxuXG4gICAgICAgIGlmICghaWdub3JlV2hlZWxFdmVudHMpIGVtaXQoJ3Njcm9sbCcsIGUpOyAvLyBTdG9wIGF1dG9wbGF5XG5cbiAgICAgICAgaWYgKHN3aXBlci5wYXJhbXMuYXV0b3BsYXkgJiYgc3dpcGVyLnBhcmFtcy5hdXRvcGxheURpc2FibGVPbkludGVyYWN0aW9uKSBzd2lwZXIuYXV0b3BsYXkuc3RvcCgpOyAvLyBSZXR1cm4gcGFnZSBzY3JvbGwgb24gZWRnZSBwb3NpdGlvbnNcblxuICAgICAgICBpZiAocG9zaXRpb24gPT09IHN3aXBlci5taW5UcmFuc2xhdGUoKSB8fCBwb3NpdGlvbiA9PT0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpKSByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkgZS5wcmV2ZW50RGVmYXVsdCgpO2Vsc2UgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGV2ZW50cyhtZXRob2QpIHtcbiAgICBsZXQgdGFyZ2V0ID0gc3dpcGVyLiRlbDtcblxuICAgIGlmIChzd2lwZXIucGFyYW1zLm1vdXNld2hlZWwuZXZlbnRzVGFyZ2V0ICE9PSAnY29udGFpbmVyJykge1xuICAgICAgdGFyZ2V0ID0gJChzd2lwZXIucGFyYW1zLm1vdXNld2hlZWwuZXZlbnRzVGFyZ2V0KTtcbiAgICB9XG5cbiAgICB0YXJnZXRbbWV0aG9kXSgnbW91c2VlbnRlcicsIGhhbmRsZU1vdXNlRW50ZXIpO1xuICAgIHRhcmdldFttZXRob2RdKCdtb3VzZWxlYXZlJywgaGFuZGxlTW91c2VMZWF2ZSk7XG4gICAgdGFyZ2V0W21ldGhvZF0oJ3doZWVsJywgaGFuZGxlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVuYWJsZSgpIHtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5jc3NNb2RlKSB7XG4gICAgICBzd2lwZXIud3JhcHBlckVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3doZWVsJywgaGFuZGxlKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzd2lwZXIubW91c2V3aGVlbC5lbmFibGVkKSByZXR1cm4gZmFsc2U7XG4gICAgZXZlbnRzKCdvbicpO1xuICAgIHN3aXBlci5tb3VzZXdoZWVsLmVuYWJsZWQgPSB0cnVlO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gZGlzYWJsZSgpIHtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5jc3NNb2RlKSB7XG4gICAgICBzd2lwZXIud3JhcHBlckVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoIXN3aXBlci5tb3VzZXdoZWVsLmVuYWJsZWQpIHJldHVybiBmYWxzZTtcbiAgICBldmVudHMoJ29mZicpO1xuICAgIHN3aXBlci5tb3VzZXdoZWVsLmVuYWJsZWQgPSBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIG9uKCdpbml0JywgKCkgPT4ge1xuICAgIGlmICghc3dpcGVyLnBhcmFtcy5tb3VzZXdoZWVsLmVuYWJsZWQgJiYgc3dpcGVyLnBhcmFtcy5jc3NNb2RlKSB7XG4gICAgICBkaXNhYmxlKCk7XG4gICAgfVxuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMubW91c2V3aGVlbC5lbmFibGVkKSBlbmFibGUoKTtcbiAgfSk7XG4gIG9uKCdkZXN0cm95JywgKCkgPT4ge1xuICAgIGlmIChzd2lwZXIucGFyYW1zLmNzc01vZGUpIHtcbiAgICAgIGVuYWJsZSgpO1xuICAgIH1cblxuICAgIGlmIChzd2lwZXIubW91c2V3aGVlbC5lbmFibGVkKSBkaXNhYmxlKCk7XG4gIH0pO1xuICBPYmplY3QuYXNzaWduKHN3aXBlci5tb3VzZXdoZWVsLCB7XG4gICAgZW5hYmxlLFxuICAgIGRpc2FibGVcbiAgfSk7XG59IiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnRJZk5vdERlZmluZWQgZnJvbSAnLi4vLi4vc2hhcmVkL2NyZWF0ZS1lbGVtZW50LWlmLW5vdC1kZWZpbmVkLmpzJztcbmltcG9ydCAkIGZyb20gJy4uLy4uL3NoYXJlZC9kb20uanMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2aWdhdGlvbih7XG4gIHN3aXBlcixcbiAgZXh0ZW5kUGFyYW1zLFxuICBvbixcbiAgZW1pdFxufSkge1xuICBleHRlbmRQYXJhbXMoe1xuICAgIG5hdmlnYXRpb246IHtcbiAgICAgIG5leHRFbDogbnVsbCxcbiAgICAgIHByZXZFbDogbnVsbCxcbiAgICAgIGhpZGVPbkNsaWNrOiBmYWxzZSxcbiAgICAgIGRpc2FibGVkQ2xhc3M6ICdzd2lwZXItYnV0dG9uLWRpc2FibGVkJyxcbiAgICAgIGhpZGRlbkNsYXNzOiAnc3dpcGVyLWJ1dHRvbi1oaWRkZW4nLFxuICAgICAgbG9ja0NsYXNzOiAnc3dpcGVyLWJ1dHRvbi1sb2NrJ1xuICAgIH1cbiAgfSk7XG4gIHN3aXBlci5uYXZpZ2F0aW9uID0ge1xuICAgIG5leHRFbDogbnVsbCxcbiAgICAkbmV4dEVsOiBudWxsLFxuICAgIHByZXZFbDogbnVsbCxcbiAgICAkcHJldkVsOiBudWxsXG4gIH07XG5cbiAgZnVuY3Rpb24gZ2V0RWwoZWwpIHtcbiAgICBsZXQgJGVsO1xuXG4gICAgaWYgKGVsKSB7XG4gICAgICAkZWwgPSAkKGVsKTtcblxuICAgICAgaWYgKHN3aXBlci5wYXJhbXMudW5pcXVlTmF2RWxlbWVudHMgJiYgdHlwZW9mIGVsID09PSAnc3RyaW5nJyAmJiAkZWwubGVuZ3RoID4gMSAmJiBzd2lwZXIuJGVsLmZpbmQoZWwpLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAkZWwgPSBzd2lwZXIuJGVsLmZpbmQoZWwpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAkZWw7XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGVFbCgkZWwsIGRpc2FibGVkKSB7XG4gICAgY29uc3QgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy5uYXZpZ2F0aW9uO1xuXG4gICAgaWYgKCRlbCAmJiAkZWwubGVuZ3RoID4gMCkge1xuICAgICAgJGVsW2Rpc2FibGVkID8gJ2FkZENsYXNzJyA6ICdyZW1vdmVDbGFzcyddKHBhcmFtcy5kaXNhYmxlZENsYXNzKTtcbiAgICAgIGlmICgkZWxbMF0gJiYgJGVsWzBdLnRhZ05hbWUgPT09ICdCVVRUT04nKSAkZWxbMF0uZGlzYWJsZWQgPSBkaXNhYmxlZDtcblxuICAgICAgaWYgKHN3aXBlci5wYXJhbXMud2F0Y2hPdmVyZmxvdyAmJiBzd2lwZXIuZW5hYmxlZCkge1xuICAgICAgICAkZWxbc3dpcGVyLmlzTG9ja2VkID8gJ2FkZENsYXNzJyA6ICdyZW1vdmVDbGFzcyddKHBhcmFtcy5sb2NrQ2xhc3MpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICAvLyBVcGRhdGUgTmF2aWdhdGlvbiBCdXR0b25zXG4gICAgaWYgKHN3aXBlci5wYXJhbXMubG9vcCkgcmV0dXJuO1xuICAgIGNvbnN0IHtcbiAgICAgICRuZXh0RWwsXG4gICAgICAkcHJldkVsXG4gICAgfSA9IHN3aXBlci5uYXZpZ2F0aW9uO1xuICAgIHRvZ2dsZUVsKCRwcmV2RWwsIHN3aXBlci5pc0JlZ2lubmluZyk7XG4gICAgdG9nZ2xlRWwoJG5leHRFbCwgc3dpcGVyLmlzRW5kKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uUHJldkNsaWNrKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHN3aXBlci5pc0JlZ2lubmluZyAmJiAhc3dpcGVyLnBhcmFtcy5sb29wKSByZXR1cm47XG4gICAgc3dpcGVyLnNsaWRlUHJldigpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25OZXh0Q2xpY2soZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoc3dpcGVyLmlzRW5kICYmICFzd2lwZXIucGFyYW1zLmxvb3ApIHJldHVybjtcbiAgICBzd2lwZXIuc2xpZGVOZXh0KCk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIGNvbnN0IHBhcmFtcyA9IHN3aXBlci5wYXJhbXMubmF2aWdhdGlvbjtcbiAgICBzd2lwZXIucGFyYW1zLm5hdmlnYXRpb24gPSBjcmVhdGVFbGVtZW50SWZOb3REZWZpbmVkKHN3aXBlciwgc3dpcGVyLm9yaWdpbmFsUGFyYW1zLm5hdmlnYXRpb24sIHN3aXBlci5wYXJhbXMubmF2aWdhdGlvbiwge1xuICAgICAgbmV4dEVsOiAnc3dpcGVyLWJ1dHRvbi1uZXh0JyxcbiAgICAgIHByZXZFbDogJ3N3aXBlci1idXR0b24tcHJldidcbiAgICB9KTtcbiAgICBpZiAoIShwYXJhbXMubmV4dEVsIHx8IHBhcmFtcy5wcmV2RWwpKSByZXR1cm47XG4gICAgY29uc3QgJG5leHRFbCA9IGdldEVsKHBhcmFtcy5uZXh0RWwpO1xuICAgIGNvbnN0ICRwcmV2RWwgPSBnZXRFbChwYXJhbXMucHJldkVsKTtcblxuICAgIGlmICgkbmV4dEVsICYmICRuZXh0RWwubGVuZ3RoID4gMCkge1xuICAgICAgJG5leHRFbC5vbignY2xpY2snLCBvbk5leHRDbGljayk7XG4gICAgfVxuXG4gICAgaWYgKCRwcmV2RWwgJiYgJHByZXZFbC5sZW5ndGggPiAwKSB7XG4gICAgICAkcHJldkVsLm9uKCdjbGljaycsIG9uUHJldkNsaWNrKTtcbiAgICB9XG5cbiAgICBPYmplY3QuYXNzaWduKHN3aXBlci5uYXZpZ2F0aW9uLCB7XG4gICAgICAkbmV4dEVsLFxuICAgICAgbmV4dEVsOiAkbmV4dEVsICYmICRuZXh0RWxbMF0sXG4gICAgICAkcHJldkVsLFxuICAgICAgcHJldkVsOiAkcHJldkVsICYmICRwcmV2RWxbMF1cbiAgICB9KTtcblxuICAgIGlmICghc3dpcGVyLmVuYWJsZWQpIHtcbiAgICAgIGlmICgkbmV4dEVsKSAkbmV4dEVsLmFkZENsYXNzKHBhcmFtcy5sb2NrQ2xhc3MpO1xuICAgICAgaWYgKCRwcmV2RWwpICRwcmV2RWwuYWRkQ2xhc3MocGFyYW1zLmxvY2tDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICBjb25zdCB7XG4gICAgICAkbmV4dEVsLFxuICAgICAgJHByZXZFbFxuICAgIH0gPSBzd2lwZXIubmF2aWdhdGlvbjtcblxuICAgIGlmICgkbmV4dEVsICYmICRuZXh0RWwubGVuZ3RoKSB7XG4gICAgICAkbmV4dEVsLm9mZignY2xpY2snLCBvbk5leHRDbGljayk7XG4gICAgICAkbmV4dEVsLnJlbW92ZUNsYXNzKHN3aXBlci5wYXJhbXMubmF2aWdhdGlvbi5kaXNhYmxlZENsYXNzKTtcbiAgICB9XG5cbiAgICBpZiAoJHByZXZFbCAmJiAkcHJldkVsLmxlbmd0aCkge1xuICAgICAgJHByZXZFbC5vZmYoJ2NsaWNrJywgb25QcmV2Q2xpY2spO1xuICAgICAgJHByZXZFbC5yZW1vdmVDbGFzcyhzd2lwZXIucGFyYW1zLm5hdmlnYXRpb24uZGlzYWJsZWRDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgb24oJ2luaXQnLCAoKSA9PiB7XG4gICAgaW5pdCgpO1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbiAgb24oJ3RvRWRnZSBmcm9tRWRnZSBsb2NrIHVubG9jaycsICgpID0+IHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG4gIG9uKCdkZXN0cm95JywgKCkgPT4ge1xuICAgIGRlc3Ryb3koKTtcbiAgfSk7XG4gIG9uKCdlbmFibGUgZGlzYWJsZScsICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICAkbmV4dEVsLFxuICAgICAgJHByZXZFbFxuICAgIH0gPSBzd2lwZXIubmF2aWdhdGlvbjtcblxuICAgIGlmICgkbmV4dEVsKSB7XG4gICAgICAkbmV4dEVsW3N3aXBlci5lbmFibGVkID8gJ3JlbW92ZUNsYXNzJyA6ICdhZGRDbGFzcyddKHN3aXBlci5wYXJhbXMubmF2aWdhdGlvbi5sb2NrQ2xhc3MpO1xuICAgIH1cblxuICAgIGlmICgkcHJldkVsKSB7XG4gICAgICAkcHJldkVsW3N3aXBlci5lbmFibGVkID8gJ3JlbW92ZUNsYXNzJyA6ICdhZGRDbGFzcyddKHN3aXBlci5wYXJhbXMubmF2aWdhdGlvbi5sb2NrQ2xhc3MpO1xuICAgIH1cbiAgfSk7XG4gIG9uKCdjbGljaycsIChfcywgZSkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgICRuZXh0RWwsXG4gICAgICAkcHJldkVsXG4gICAgfSA9IHN3aXBlci5uYXZpZ2F0aW9uO1xuICAgIGNvbnN0IHRhcmdldEVsID0gZS50YXJnZXQ7XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5uYXZpZ2F0aW9uLmhpZGVPbkNsaWNrICYmICEkKHRhcmdldEVsKS5pcygkcHJldkVsKSAmJiAhJCh0YXJnZXRFbCkuaXMoJG5leHRFbCkpIHtcbiAgICAgIGlmIChzd2lwZXIucGFnaW5hdGlvbiAmJiBzd2lwZXIucGFyYW1zLnBhZ2luYXRpb24gJiYgc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uLmNsaWNrYWJsZSAmJiAoc3dpcGVyLnBhZ2luYXRpb24uZWwgPT09IHRhcmdldEVsIHx8IHN3aXBlci5wYWdpbmF0aW9uLmVsLmNvbnRhaW5zKHRhcmdldEVsKSkpIHJldHVybjtcbiAgICAgIGxldCBpc0hpZGRlbjtcblxuICAgICAgaWYgKCRuZXh0RWwpIHtcbiAgICAgICAgaXNIaWRkZW4gPSAkbmV4dEVsLmhhc0NsYXNzKHN3aXBlci5wYXJhbXMubmF2aWdhdGlvbi5oaWRkZW5DbGFzcyk7XG4gICAgICB9IGVsc2UgaWYgKCRwcmV2RWwpIHtcbiAgICAgICAgaXNIaWRkZW4gPSAkcHJldkVsLmhhc0NsYXNzKHN3aXBlci5wYXJhbXMubmF2aWdhdGlvbi5oaWRkZW5DbGFzcyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0hpZGRlbiA9PT0gdHJ1ZSkge1xuICAgICAgICBlbWl0KCduYXZpZ2F0aW9uU2hvdycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZW1pdCgnbmF2aWdhdGlvbkhpZGUnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCRuZXh0RWwpIHtcbiAgICAgICAgJG5leHRFbC50b2dnbGVDbGFzcyhzd2lwZXIucGFyYW1zLm5hdmlnYXRpb24uaGlkZGVuQ2xhc3MpO1xuICAgICAgfVxuXG4gICAgICBpZiAoJHByZXZFbCkge1xuICAgICAgICAkcHJldkVsLnRvZ2dsZUNsYXNzKHN3aXBlci5wYXJhbXMubmF2aWdhdGlvbi5oaWRkZW5DbGFzcyk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgT2JqZWN0LmFzc2lnbihzd2lwZXIubmF2aWdhdGlvbiwge1xuICAgIHVwZGF0ZSxcbiAgICBpbml0LFxuICAgIGRlc3Ryb3lcbiAgfSk7XG59IiwiaW1wb3J0ICQgZnJvbSAnLi4vLi4vc2hhcmVkL2RvbS5qcyc7XG5pbXBvcnQgY2xhc3Nlc1RvU2VsZWN0b3IgZnJvbSAnLi4vLi4vc2hhcmVkL2NsYXNzZXMtdG8tc2VsZWN0b3IuanMnO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnRJZk5vdERlZmluZWQgZnJvbSAnLi4vLi4vc2hhcmVkL2NyZWF0ZS1lbGVtZW50LWlmLW5vdC1kZWZpbmVkLmpzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2luYXRpb24oe1xuICBzd2lwZXIsXG4gIGV4dGVuZFBhcmFtcyxcbiAgb24sXG4gIGVtaXRcbn0pIHtcbiAgY29uc3QgcGZ4ID0gJ3N3aXBlci1wYWdpbmF0aW9uJztcbiAgZXh0ZW5kUGFyYW1zKHtcbiAgICBwYWdpbmF0aW9uOiB7XG4gICAgICBlbDogbnVsbCxcbiAgICAgIGJ1bGxldEVsZW1lbnQ6ICdzcGFuJyxcbiAgICAgIGNsaWNrYWJsZTogZmFsc2UsXG4gICAgICBoaWRlT25DbGljazogZmFsc2UsXG4gICAgICByZW5kZXJCdWxsZXQ6IG51bGwsXG4gICAgICByZW5kZXJQcm9ncmVzc2JhcjogbnVsbCxcbiAgICAgIHJlbmRlckZyYWN0aW9uOiBudWxsLFxuICAgICAgcmVuZGVyQ3VzdG9tOiBudWxsLFxuICAgICAgcHJvZ3Jlc3NiYXJPcHBvc2l0ZTogZmFsc2UsXG4gICAgICB0eXBlOiAnYnVsbGV0cycsXG4gICAgICAvLyAnYnVsbGV0cycgb3IgJ3Byb2dyZXNzYmFyJyBvciAnZnJhY3Rpb24nIG9yICdjdXN0b20nXG4gICAgICBkeW5hbWljQnVsbGV0czogZmFsc2UsXG4gICAgICBkeW5hbWljTWFpbkJ1bGxldHM6IDEsXG4gICAgICBmb3JtYXRGcmFjdGlvbkN1cnJlbnQ6IG51bWJlciA9PiBudW1iZXIsXG4gICAgICBmb3JtYXRGcmFjdGlvblRvdGFsOiBudW1iZXIgPT4gbnVtYmVyLFxuICAgICAgYnVsbGV0Q2xhc3M6IGAke3BmeH0tYnVsbGV0YCxcbiAgICAgIGJ1bGxldEFjdGl2ZUNsYXNzOiBgJHtwZnh9LWJ1bGxldC1hY3RpdmVgLFxuICAgICAgbW9kaWZpZXJDbGFzczogYCR7cGZ4fS1gLFxuICAgICAgY3VycmVudENsYXNzOiBgJHtwZnh9LWN1cnJlbnRgLFxuICAgICAgdG90YWxDbGFzczogYCR7cGZ4fS10b3RhbGAsXG4gICAgICBoaWRkZW5DbGFzczogYCR7cGZ4fS1oaWRkZW5gLFxuICAgICAgcHJvZ3Jlc3NiYXJGaWxsQ2xhc3M6IGAke3BmeH0tcHJvZ3Jlc3NiYXItZmlsbGAsXG4gICAgICBwcm9ncmVzc2Jhck9wcG9zaXRlQ2xhc3M6IGAke3BmeH0tcHJvZ3Jlc3NiYXItb3Bwb3NpdGVgLFxuICAgICAgY2xpY2thYmxlQ2xhc3M6IGAke3BmeH0tY2xpY2thYmxlYCxcbiAgICAgIGxvY2tDbGFzczogYCR7cGZ4fS1sb2NrYCxcbiAgICAgIGhvcml6b250YWxDbGFzczogYCR7cGZ4fS1ob3Jpem9udGFsYCxcbiAgICAgIHZlcnRpY2FsQ2xhc3M6IGAke3BmeH0tdmVydGljYWxgXG4gICAgfVxuICB9KTtcbiAgc3dpcGVyLnBhZ2luYXRpb24gPSB7XG4gICAgZWw6IG51bGwsXG4gICAgJGVsOiBudWxsLFxuICAgIGJ1bGxldHM6IFtdXG4gIH07XG4gIGxldCBidWxsZXRTaXplO1xuICBsZXQgZHluYW1pY0J1bGxldEluZGV4ID0gMDtcblxuICBmdW5jdGlvbiBpc1BhZ2luYXRpb25EaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gIXN3aXBlci5wYXJhbXMucGFnaW5hdGlvbi5lbCB8fCAhc3dpcGVyLnBhZ2luYXRpb24uZWwgfHwgIXN3aXBlci5wYWdpbmF0aW9uLiRlbCB8fCBzd2lwZXIucGFnaW5hdGlvbi4kZWwubGVuZ3RoID09PSAwO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0U2lkZUJ1bGxldHMoJGJ1bGxldEVsLCBwb3NpdGlvbikge1xuICAgIGNvbnN0IHtcbiAgICAgIGJ1bGxldEFjdGl2ZUNsYXNzXG4gICAgfSA9IHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbjtcbiAgICAkYnVsbGV0RWxbcG9zaXRpb25dKCkuYWRkQ2xhc3MoYCR7YnVsbGV0QWN0aXZlQ2xhc3N9LSR7cG9zaXRpb259YClbcG9zaXRpb25dKCkuYWRkQ2xhc3MoYCR7YnVsbGV0QWN0aXZlQ2xhc3N9LSR7cG9zaXRpb259LSR7cG9zaXRpb259YCk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgLy8gUmVuZGVyIHx8IFVwZGF0ZSBQYWdpbmF0aW9uIGJ1bGxldHMvaXRlbXNcbiAgICBjb25zdCBydGwgPSBzd2lwZXIucnRsO1xuICAgIGNvbnN0IHBhcmFtcyA9IHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbjtcbiAgICBpZiAoaXNQYWdpbmF0aW9uRGlzYWJsZWQoKSkgcmV0dXJuO1xuICAgIGNvbnN0IHNsaWRlc0xlbmd0aCA9IHN3aXBlci52aXJ0dWFsICYmIHN3aXBlci5wYXJhbXMudmlydHVhbC5lbmFibGVkID8gc3dpcGVyLnZpcnR1YWwuc2xpZGVzLmxlbmd0aCA6IHN3aXBlci5zbGlkZXMubGVuZ3RoO1xuICAgIGNvbnN0ICRlbCA9IHN3aXBlci5wYWdpbmF0aW9uLiRlbDsgLy8gQ3VycmVudC9Ub3RhbFxuXG4gICAgbGV0IGN1cnJlbnQ7XG4gICAgY29uc3QgdG90YWwgPSBzd2lwZXIucGFyYW1zLmxvb3AgPyBNYXRoLmNlaWwoKHNsaWRlc0xlbmd0aCAtIHN3aXBlci5sb29wZWRTbGlkZXMgKiAyKSAvIHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyR3JvdXApIDogc3dpcGVyLnNuYXBHcmlkLmxlbmd0aDtcblxuICAgIGlmIChzd2lwZXIucGFyYW1zLmxvb3ApIHtcbiAgICAgIGN1cnJlbnQgPSBNYXRoLmNlaWwoKHN3aXBlci5hY3RpdmVJbmRleCAtIHN3aXBlci5sb29wZWRTbGlkZXMpIC8gc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJHcm91cCk7XG5cbiAgICAgIGlmIChjdXJyZW50ID4gc2xpZGVzTGVuZ3RoIC0gMSAtIHN3aXBlci5sb29wZWRTbGlkZXMgKiAyKSB7XG4gICAgICAgIGN1cnJlbnQgLT0gc2xpZGVzTGVuZ3RoIC0gc3dpcGVyLmxvb3BlZFNsaWRlcyAqIDI7XG4gICAgICB9XG5cbiAgICAgIGlmIChjdXJyZW50ID4gdG90YWwgLSAxKSBjdXJyZW50IC09IHRvdGFsO1xuICAgICAgaWYgKGN1cnJlbnQgPCAwICYmIHN3aXBlci5wYXJhbXMucGFnaW5hdGlvblR5cGUgIT09ICdidWxsZXRzJykgY3VycmVudCA9IHRvdGFsICsgY3VycmVudDtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBzd2lwZXIuc25hcEluZGV4ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY3VycmVudCA9IHN3aXBlci5zbmFwSW5kZXg7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnQgPSBzd2lwZXIuYWN0aXZlSW5kZXggfHwgMDtcbiAgICB9IC8vIFR5cGVzXG5cblxuICAgIGlmIChwYXJhbXMudHlwZSA9PT0gJ2J1bGxldHMnICYmIHN3aXBlci5wYWdpbmF0aW9uLmJ1bGxldHMgJiYgc3dpcGVyLnBhZ2luYXRpb24uYnVsbGV0cy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBidWxsZXRzID0gc3dpcGVyLnBhZ2luYXRpb24uYnVsbGV0cztcbiAgICAgIGxldCBmaXJzdEluZGV4O1xuICAgICAgbGV0IGxhc3RJbmRleDtcbiAgICAgIGxldCBtaWRJbmRleDtcblxuICAgICAgaWYgKHBhcmFtcy5keW5hbWljQnVsbGV0cykge1xuICAgICAgICBidWxsZXRTaXplID0gYnVsbGV0cy5lcSgwKVtzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyAnb3V0ZXJXaWR0aCcgOiAnb3V0ZXJIZWlnaHQnXSh0cnVlKTtcbiAgICAgICAgJGVsLmNzcyhzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyAnd2lkdGgnIDogJ2hlaWdodCcsIGAke2J1bGxldFNpemUgKiAocGFyYW1zLmR5bmFtaWNNYWluQnVsbGV0cyArIDQpfXB4YCk7XG5cbiAgICAgICAgaWYgKHBhcmFtcy5keW5hbWljTWFpbkJ1bGxldHMgPiAxICYmIHN3aXBlci5wcmV2aW91c0luZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBkeW5hbWljQnVsbGV0SW5kZXggKz0gY3VycmVudCAtIHN3aXBlci5wcmV2aW91c0luZGV4O1xuXG4gICAgICAgICAgaWYgKGR5bmFtaWNCdWxsZXRJbmRleCA+IHBhcmFtcy5keW5hbWljTWFpbkJ1bGxldHMgLSAxKSB7XG4gICAgICAgICAgICBkeW5hbWljQnVsbGV0SW5kZXggPSBwYXJhbXMuZHluYW1pY01haW5CdWxsZXRzIC0gMTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGR5bmFtaWNCdWxsZXRJbmRleCA8IDApIHtcbiAgICAgICAgICAgIGR5bmFtaWNCdWxsZXRJbmRleCA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZmlyc3RJbmRleCA9IGN1cnJlbnQgLSBkeW5hbWljQnVsbGV0SW5kZXg7XG4gICAgICAgIGxhc3RJbmRleCA9IGZpcnN0SW5kZXggKyAoTWF0aC5taW4oYnVsbGV0cy5sZW5ndGgsIHBhcmFtcy5keW5hbWljTWFpbkJ1bGxldHMpIC0gMSk7XG4gICAgICAgIG1pZEluZGV4ID0gKGxhc3RJbmRleCArIGZpcnN0SW5kZXgpIC8gMjtcbiAgICAgIH1cblxuICAgICAgYnVsbGV0cy5yZW1vdmVDbGFzcyhbJycsICctbmV4dCcsICctbmV4dC1uZXh0JywgJy1wcmV2JywgJy1wcmV2LXByZXYnLCAnLW1haW4nXS5tYXAoc3VmZml4ID0+IGAke3BhcmFtcy5idWxsZXRBY3RpdmVDbGFzc30ke3N1ZmZpeH1gKS5qb2luKCcgJykpO1xuXG4gICAgICBpZiAoJGVsLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgYnVsbGV0cy5lYWNoKGJ1bGxldCA9PiB7XG4gICAgICAgICAgY29uc3QgJGJ1bGxldCA9ICQoYnVsbGV0KTtcbiAgICAgICAgICBjb25zdCBidWxsZXRJbmRleCA9ICRidWxsZXQuaW5kZXgoKTtcblxuICAgICAgICAgIGlmIChidWxsZXRJbmRleCA9PT0gY3VycmVudCkge1xuICAgICAgICAgICAgJGJ1bGxldC5hZGRDbGFzcyhwYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3MpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChwYXJhbXMuZHluYW1pY0J1bGxldHMpIHtcbiAgICAgICAgICAgIGlmIChidWxsZXRJbmRleCA+PSBmaXJzdEluZGV4ICYmIGJ1bGxldEluZGV4IDw9IGxhc3RJbmRleCkge1xuICAgICAgICAgICAgICAkYnVsbGV0LmFkZENsYXNzKGAke3BhcmFtcy5idWxsZXRBY3RpdmVDbGFzc30tbWFpbmApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYnVsbGV0SW5kZXggPT09IGZpcnN0SW5kZXgpIHtcbiAgICAgICAgICAgICAgc2V0U2lkZUJ1bGxldHMoJGJ1bGxldCwgJ3ByZXYnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGJ1bGxldEluZGV4ID09PSBsYXN0SW5kZXgpIHtcbiAgICAgICAgICAgICAgc2V0U2lkZUJ1bGxldHMoJGJ1bGxldCwgJ25leHQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgJGJ1bGxldCA9IGJ1bGxldHMuZXEoY3VycmVudCk7XG4gICAgICAgIGNvbnN0IGJ1bGxldEluZGV4ID0gJGJ1bGxldC5pbmRleCgpO1xuICAgICAgICAkYnVsbGV0LmFkZENsYXNzKHBhcmFtcy5idWxsZXRBY3RpdmVDbGFzcyk7XG5cbiAgICAgICAgaWYgKHBhcmFtcy5keW5hbWljQnVsbGV0cykge1xuICAgICAgICAgIGNvbnN0ICRmaXJzdERpc3BsYXllZEJ1bGxldCA9IGJ1bGxldHMuZXEoZmlyc3RJbmRleCk7XG4gICAgICAgICAgY29uc3QgJGxhc3REaXNwbGF5ZWRCdWxsZXQgPSBidWxsZXRzLmVxKGxhc3RJbmRleCk7XG5cbiAgICAgICAgICBmb3IgKGxldCBpID0gZmlyc3RJbmRleDsgaSA8PSBsYXN0SW5kZXg7IGkgKz0gMSkge1xuICAgICAgICAgICAgYnVsbGV0cy5lcShpKS5hZGRDbGFzcyhgJHtwYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3N9LW1haW5gKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy5sb29wKSB7XG4gICAgICAgICAgICBpZiAoYnVsbGV0SW5kZXggPj0gYnVsbGV0cy5sZW5ndGggLSBwYXJhbXMuZHluYW1pY01haW5CdWxsZXRzKSB7XG4gICAgICAgICAgICAgIGZvciAobGV0IGkgPSBwYXJhbXMuZHluYW1pY01haW5CdWxsZXRzOyBpID49IDA7IGkgLT0gMSkge1xuICAgICAgICAgICAgICAgIGJ1bGxldHMuZXEoYnVsbGV0cy5sZW5ndGggLSBpKS5hZGRDbGFzcyhgJHtwYXJhbXMuYnVsbGV0QWN0aXZlQ2xhc3N9LW1haW5gKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGJ1bGxldHMuZXEoYnVsbGV0cy5sZW5ndGggLSBwYXJhbXMuZHluYW1pY01haW5CdWxsZXRzIC0gMSkuYWRkQ2xhc3MoYCR7cGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzfS1wcmV2YCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzZXRTaWRlQnVsbGV0cygkZmlyc3REaXNwbGF5ZWRCdWxsZXQsICdwcmV2Jyk7XG4gICAgICAgICAgICAgIHNldFNpZGVCdWxsZXRzKCRsYXN0RGlzcGxheWVkQnVsbGV0LCAnbmV4dCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRTaWRlQnVsbGV0cygkZmlyc3REaXNwbGF5ZWRCdWxsZXQsICdwcmV2Jyk7XG4gICAgICAgICAgICBzZXRTaWRlQnVsbGV0cygkbGFzdERpc3BsYXllZEJ1bGxldCwgJ25leHQnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHBhcmFtcy5keW5hbWljQnVsbGV0cykge1xuICAgICAgICBjb25zdCBkeW5hbWljQnVsbGV0c0xlbmd0aCA9IE1hdGgubWluKGJ1bGxldHMubGVuZ3RoLCBwYXJhbXMuZHluYW1pY01haW5CdWxsZXRzICsgNCk7XG4gICAgICAgIGNvbnN0IGJ1bGxldHNPZmZzZXQgPSAoYnVsbGV0U2l6ZSAqIGR5bmFtaWNCdWxsZXRzTGVuZ3RoIC0gYnVsbGV0U2l6ZSkgLyAyIC0gbWlkSW5kZXggKiBidWxsZXRTaXplO1xuICAgICAgICBjb25zdCBvZmZzZXRQcm9wID0gcnRsID8gJ3JpZ2h0JyA6ICdsZWZ0JztcbiAgICAgICAgYnVsbGV0cy5jc3Moc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gb2Zmc2V0UHJvcCA6ICd0b3AnLCBgJHtidWxsZXRzT2Zmc2V0fXB4YCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy50eXBlID09PSAnZnJhY3Rpb24nKSB7XG4gICAgICAkZWwuZmluZChjbGFzc2VzVG9TZWxlY3RvcihwYXJhbXMuY3VycmVudENsYXNzKSkudGV4dChwYXJhbXMuZm9ybWF0RnJhY3Rpb25DdXJyZW50KGN1cnJlbnQgKyAxKSk7XG4gICAgICAkZWwuZmluZChjbGFzc2VzVG9TZWxlY3RvcihwYXJhbXMudG90YWxDbGFzcykpLnRleHQocGFyYW1zLmZvcm1hdEZyYWN0aW9uVG90YWwodG90YWwpKTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLnR5cGUgPT09ICdwcm9ncmVzc2JhcicpIHtcbiAgICAgIGxldCBwcm9ncmVzc2JhckRpcmVjdGlvbjtcblxuICAgICAgaWYgKHBhcmFtcy5wcm9ncmVzc2Jhck9wcG9zaXRlKSB7XG4gICAgICAgIHByb2dyZXNzYmFyRGlyZWN0aW9uID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2dyZXNzYmFyRGlyZWN0aW9uID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gJ2hvcml6b250YWwnIDogJ3ZlcnRpY2FsJztcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc2NhbGUgPSAoY3VycmVudCArIDEpIC8gdG90YWw7XG4gICAgICBsZXQgc2NhbGVYID0gMTtcbiAgICAgIGxldCBzY2FsZVkgPSAxO1xuXG4gICAgICBpZiAocHJvZ3Jlc3NiYXJEaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICBzY2FsZVggPSBzY2FsZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNjYWxlWSA9IHNjYWxlO1xuICAgICAgfVxuXG4gICAgICAkZWwuZmluZChjbGFzc2VzVG9TZWxlY3RvcihwYXJhbXMucHJvZ3Jlc3NiYXJGaWxsQ2xhc3MpKS50cmFuc2Zvcm0oYHRyYW5zbGF0ZTNkKDAsMCwwKSBzY2FsZVgoJHtzY2FsZVh9KSBzY2FsZVkoJHtzY2FsZVl9KWApLnRyYW5zaXRpb24oc3dpcGVyLnBhcmFtcy5zcGVlZCk7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy50eXBlID09PSAnY3VzdG9tJyAmJiBwYXJhbXMucmVuZGVyQ3VzdG9tKSB7XG4gICAgICAkZWwuaHRtbChwYXJhbXMucmVuZGVyQ3VzdG9tKHN3aXBlciwgY3VycmVudCArIDEsIHRvdGFsKSk7XG4gICAgICBlbWl0KCdwYWdpbmF0aW9uUmVuZGVyJywgJGVsWzBdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZW1pdCgncGFnaW5hdGlvblVwZGF0ZScsICRlbFswXSk7XG4gICAgfVxuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMud2F0Y2hPdmVyZmxvdyAmJiBzd2lwZXIuZW5hYmxlZCkge1xuICAgICAgJGVsW3N3aXBlci5pc0xvY2tlZCA/ICdhZGRDbGFzcycgOiAncmVtb3ZlQ2xhc3MnXShwYXJhbXMubG9ja0NsYXNzKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgLy8gUmVuZGVyIENvbnRhaW5lclxuICAgIGNvbnN0IHBhcmFtcyA9IHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbjtcbiAgICBpZiAoaXNQYWdpbmF0aW9uRGlzYWJsZWQoKSkgcmV0dXJuO1xuICAgIGNvbnN0IHNsaWRlc0xlbmd0aCA9IHN3aXBlci52aXJ0dWFsICYmIHN3aXBlci5wYXJhbXMudmlydHVhbC5lbmFibGVkID8gc3dpcGVyLnZpcnR1YWwuc2xpZGVzLmxlbmd0aCA6IHN3aXBlci5zbGlkZXMubGVuZ3RoO1xuICAgIGNvbnN0ICRlbCA9IHN3aXBlci5wYWdpbmF0aW9uLiRlbDtcbiAgICBsZXQgcGFnaW5hdGlvbkhUTUwgPSAnJztcblxuICAgIGlmIChwYXJhbXMudHlwZSA9PT0gJ2J1bGxldHMnKSB7XG4gICAgICBsZXQgbnVtYmVyT2ZCdWxsZXRzID0gc3dpcGVyLnBhcmFtcy5sb29wID8gTWF0aC5jZWlsKChzbGlkZXNMZW5ndGggLSBzd2lwZXIubG9vcGVkU2xpZGVzICogMikgLyBzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwKSA6IHN3aXBlci5zbmFwR3JpZC5sZW5ndGg7XG5cbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLmZyZWVNb2RlICYmIHN3aXBlci5wYXJhbXMuZnJlZU1vZGUuZW5hYmxlZCAmJiAhc3dpcGVyLnBhcmFtcy5sb29wICYmIG51bWJlck9mQnVsbGV0cyA+IHNsaWRlc0xlbmd0aCkge1xuICAgICAgICBudW1iZXJPZkJ1bGxldHMgPSBzbGlkZXNMZW5ndGg7XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyT2ZCdWxsZXRzOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHBhcmFtcy5yZW5kZXJCdWxsZXQpIHtcbiAgICAgICAgICBwYWdpbmF0aW9uSFRNTCArPSBwYXJhbXMucmVuZGVyQnVsbGV0LmNhbGwoc3dpcGVyLCBpLCBwYXJhbXMuYnVsbGV0Q2xhc3MpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhZ2luYXRpb25IVE1MICs9IGA8JHtwYXJhbXMuYnVsbGV0RWxlbWVudH0gY2xhc3M9XCIke3BhcmFtcy5idWxsZXRDbGFzc31cIj48LyR7cGFyYW1zLmJ1bGxldEVsZW1lbnR9PmA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJGVsLmh0bWwocGFnaW5hdGlvbkhUTUwpO1xuICAgICAgc3dpcGVyLnBhZ2luYXRpb24uYnVsbGV0cyA9ICRlbC5maW5kKGNsYXNzZXNUb1NlbGVjdG9yKHBhcmFtcy5idWxsZXRDbGFzcykpO1xuICAgIH1cblxuICAgIGlmIChwYXJhbXMudHlwZSA9PT0gJ2ZyYWN0aW9uJykge1xuICAgICAgaWYgKHBhcmFtcy5yZW5kZXJGcmFjdGlvbikge1xuICAgICAgICBwYWdpbmF0aW9uSFRNTCA9IHBhcmFtcy5yZW5kZXJGcmFjdGlvbi5jYWxsKHN3aXBlciwgcGFyYW1zLmN1cnJlbnRDbGFzcywgcGFyYW1zLnRvdGFsQ2xhc3MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFnaW5hdGlvbkhUTUwgPSBgPHNwYW4gY2xhc3M9XCIke3BhcmFtcy5jdXJyZW50Q2xhc3N9XCI+PC9zcGFuPmAgKyAnIC8gJyArIGA8c3BhbiBjbGFzcz1cIiR7cGFyYW1zLnRvdGFsQ2xhc3N9XCI+PC9zcGFuPmA7XG4gICAgICB9XG5cbiAgICAgICRlbC5odG1sKHBhZ2luYXRpb25IVE1MKTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLnR5cGUgPT09ICdwcm9ncmVzc2JhcicpIHtcbiAgICAgIGlmIChwYXJhbXMucmVuZGVyUHJvZ3Jlc3NiYXIpIHtcbiAgICAgICAgcGFnaW5hdGlvbkhUTUwgPSBwYXJhbXMucmVuZGVyUHJvZ3Jlc3NiYXIuY2FsbChzd2lwZXIsIHBhcmFtcy5wcm9ncmVzc2JhckZpbGxDbGFzcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYWdpbmF0aW9uSFRNTCA9IGA8c3BhbiBjbGFzcz1cIiR7cGFyYW1zLnByb2dyZXNzYmFyRmlsbENsYXNzfVwiPjwvc3Bhbj5gO1xuICAgICAgfVxuXG4gICAgICAkZWwuaHRtbChwYWdpbmF0aW9uSFRNTCk7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy50eXBlICE9PSAnY3VzdG9tJykge1xuICAgICAgZW1pdCgncGFnaW5hdGlvblJlbmRlcicsIHN3aXBlci5wYWdpbmF0aW9uLiRlbFswXSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBzd2lwZXIucGFyYW1zLnBhZ2luYXRpb24gPSBjcmVhdGVFbGVtZW50SWZOb3REZWZpbmVkKHN3aXBlciwgc3dpcGVyLm9yaWdpbmFsUGFyYW1zLnBhZ2luYXRpb24sIHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbiwge1xuICAgICAgZWw6ICdzd2lwZXItcGFnaW5hdGlvbidcbiAgICB9KTtcbiAgICBjb25zdCBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLnBhZ2luYXRpb247XG4gICAgaWYgKCFwYXJhbXMuZWwpIHJldHVybjtcbiAgICBsZXQgJGVsID0gJChwYXJhbXMuZWwpO1xuICAgIGlmICgkZWwubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy51bmlxdWVOYXZFbGVtZW50cyAmJiB0eXBlb2YgcGFyYW1zLmVsID09PSAnc3RyaW5nJyAmJiAkZWwubGVuZ3RoID4gMSkge1xuICAgICAgJGVsID0gc3dpcGVyLiRlbC5maW5kKHBhcmFtcy5lbCk7IC8vIGNoZWNrIGlmIGl0IGJlbG9uZ3MgdG8gYW5vdGhlciBuZXN0ZWQgU3dpcGVyXG5cbiAgICAgIGlmICgkZWwubGVuZ3RoID4gMSkge1xuICAgICAgICAkZWwgPSAkZWwuZmlsdGVyKGVsID0+IHtcbiAgICAgICAgICBpZiAoJChlbCkucGFyZW50cygnLnN3aXBlcicpWzBdICE9PSBzd2lwZXIuZWwpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy50eXBlID09PSAnYnVsbGV0cycgJiYgcGFyYW1zLmNsaWNrYWJsZSkge1xuICAgICAgJGVsLmFkZENsYXNzKHBhcmFtcy5jbGlja2FibGVDbGFzcyk7XG4gICAgfVxuXG4gICAgJGVsLmFkZENsYXNzKHBhcmFtcy5tb2RpZmllckNsYXNzICsgcGFyYW1zLnR5cGUpO1xuICAgICRlbC5hZGRDbGFzcyhwYXJhbXMubW9kaWZpZXJDbGFzcyArIHN3aXBlci5wYXJhbXMuZGlyZWN0aW9uKTtcblxuICAgIGlmIChwYXJhbXMudHlwZSA9PT0gJ2J1bGxldHMnICYmIHBhcmFtcy5keW5hbWljQnVsbGV0cykge1xuICAgICAgJGVsLmFkZENsYXNzKGAke3BhcmFtcy5tb2RpZmllckNsYXNzfSR7cGFyYW1zLnR5cGV9LWR5bmFtaWNgKTtcbiAgICAgIGR5bmFtaWNCdWxsZXRJbmRleCA9IDA7XG5cbiAgICAgIGlmIChwYXJhbXMuZHluYW1pY01haW5CdWxsZXRzIDwgMSkge1xuICAgICAgICBwYXJhbXMuZHluYW1pY01haW5CdWxsZXRzID0gMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLnR5cGUgPT09ICdwcm9ncmVzc2JhcicgJiYgcGFyYW1zLnByb2dyZXNzYmFyT3Bwb3NpdGUpIHtcbiAgICAgICRlbC5hZGRDbGFzcyhwYXJhbXMucHJvZ3Jlc3NiYXJPcHBvc2l0ZUNsYXNzKTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLmNsaWNrYWJsZSkge1xuICAgICAgJGVsLm9uKCdjbGljaycsIGNsYXNzZXNUb1NlbGVjdG9yKHBhcmFtcy5idWxsZXRDbGFzcyksIGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCBpbmRleCA9ICQodGhpcykuaW5kZXgoKSAqIHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyR3JvdXA7XG4gICAgICAgIGlmIChzd2lwZXIucGFyYW1zLmxvb3ApIGluZGV4ICs9IHN3aXBlci5sb29wZWRTbGlkZXM7XG4gICAgICAgIHN3aXBlci5zbGlkZVRvKGluZGV4KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIE9iamVjdC5hc3NpZ24oc3dpcGVyLnBhZ2luYXRpb24sIHtcbiAgICAgICRlbCxcbiAgICAgIGVsOiAkZWxbMF1cbiAgICB9KTtcblxuICAgIGlmICghc3dpcGVyLmVuYWJsZWQpIHtcbiAgICAgICRlbC5hZGRDbGFzcyhwYXJhbXMubG9ja0NsYXNzKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIGNvbnN0IHBhcmFtcyA9IHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbjtcbiAgICBpZiAoaXNQYWdpbmF0aW9uRGlzYWJsZWQoKSkgcmV0dXJuO1xuICAgIGNvbnN0ICRlbCA9IHN3aXBlci5wYWdpbmF0aW9uLiRlbDtcbiAgICAkZWwucmVtb3ZlQ2xhc3MocGFyYW1zLmhpZGRlbkNsYXNzKTtcbiAgICAkZWwucmVtb3ZlQ2xhc3MocGFyYW1zLm1vZGlmaWVyQ2xhc3MgKyBwYXJhbXMudHlwZSk7XG4gICAgJGVsLnJlbW92ZUNsYXNzKHBhcmFtcy5tb2RpZmllckNsYXNzICsgc3dpcGVyLnBhcmFtcy5kaXJlY3Rpb24pO1xuICAgIGlmIChzd2lwZXIucGFnaW5hdGlvbi5idWxsZXRzICYmIHN3aXBlci5wYWdpbmF0aW9uLmJ1bGxldHMucmVtb3ZlQ2xhc3MpIHN3aXBlci5wYWdpbmF0aW9uLmJ1bGxldHMucmVtb3ZlQ2xhc3MocGFyYW1zLmJ1bGxldEFjdGl2ZUNsYXNzKTtcblxuICAgIGlmIChwYXJhbXMuY2xpY2thYmxlKSB7XG4gICAgICAkZWwub2ZmKCdjbGljaycsIGNsYXNzZXNUb1NlbGVjdG9yKHBhcmFtcy5idWxsZXRDbGFzcykpO1xuICAgIH1cbiAgfVxuXG4gIG9uKCdpbml0JywgKCkgPT4ge1xuICAgIGluaXQoKTtcbiAgICByZW5kZXIoKTtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG4gIG9uKCdhY3RpdmVJbmRleENoYW5nZScsICgpID0+IHtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5sb29wKSB7XG4gICAgICB1cGRhdGUoKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBzd2lwZXIuc25hcEluZGV4ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdXBkYXRlKCk7XG4gICAgfVxuICB9KTtcbiAgb24oJ3NuYXBJbmRleENoYW5nZScsICgpID0+IHtcbiAgICBpZiAoIXN3aXBlci5wYXJhbXMubG9vcCkge1xuICAgICAgdXBkYXRlKCk7XG4gICAgfVxuICB9KTtcbiAgb24oJ3NsaWRlc0xlbmd0aENoYW5nZScsICgpID0+IHtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5sb29wKSB7XG4gICAgICByZW5kZXIoKTtcbiAgICAgIHVwZGF0ZSgpO1xuICAgIH1cbiAgfSk7XG4gIG9uKCdzbmFwR3JpZExlbmd0aENoYW5nZScsICgpID0+IHtcbiAgICBpZiAoIXN3aXBlci5wYXJhbXMubG9vcCkge1xuICAgICAgcmVuZGVyKCk7XG4gICAgICB1cGRhdGUoKTtcbiAgICB9XG4gIH0pO1xuICBvbignZGVzdHJveScsICgpID0+IHtcbiAgICBkZXN0cm95KCk7XG4gIH0pO1xuICBvbignZW5hYmxlIGRpc2FibGUnLCAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgJGVsXG4gICAgfSA9IHN3aXBlci5wYWdpbmF0aW9uO1xuXG4gICAgaWYgKCRlbCkge1xuICAgICAgJGVsW3N3aXBlci5lbmFibGVkID8gJ3JlbW92ZUNsYXNzJyA6ICdhZGRDbGFzcyddKHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbi5sb2NrQ2xhc3MpO1xuICAgIH1cbiAgfSk7XG4gIG9uKCdsb2NrIHVubG9jaycsICgpID0+IHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG4gIG9uKCdjbGljaycsIChfcywgZSkgPT4ge1xuICAgIGNvbnN0IHRhcmdldEVsID0gZS50YXJnZXQ7XG4gICAgY29uc3Qge1xuICAgICAgJGVsXG4gICAgfSA9IHN3aXBlci5wYWdpbmF0aW9uO1xuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbi5lbCAmJiBzd2lwZXIucGFyYW1zLnBhZ2luYXRpb24uaGlkZU9uQ2xpY2sgJiYgJGVsLmxlbmd0aCA+IDAgJiYgISQodGFyZ2V0RWwpLmhhc0NsYXNzKHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbi5idWxsZXRDbGFzcykpIHtcbiAgICAgIGlmIChzd2lwZXIubmF2aWdhdGlvbiAmJiAoc3dpcGVyLm5hdmlnYXRpb24ubmV4dEVsICYmIHRhcmdldEVsID09PSBzd2lwZXIubmF2aWdhdGlvbi5uZXh0RWwgfHwgc3dpcGVyLm5hdmlnYXRpb24ucHJldkVsICYmIHRhcmdldEVsID09PSBzd2lwZXIubmF2aWdhdGlvbi5wcmV2RWwpKSByZXR1cm47XG4gICAgICBjb25zdCBpc0hpZGRlbiA9ICRlbC5oYXNDbGFzcyhzd2lwZXIucGFyYW1zLnBhZ2luYXRpb24uaGlkZGVuQ2xhc3MpO1xuXG4gICAgICBpZiAoaXNIaWRkZW4gPT09IHRydWUpIHtcbiAgICAgICAgZW1pdCgncGFnaW5hdGlvblNob3cnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVtaXQoJ3BhZ2luYXRpb25IaWRlJyk7XG4gICAgICB9XG5cbiAgICAgICRlbC50b2dnbGVDbGFzcyhzd2lwZXIucGFyYW1zLnBhZ2luYXRpb24uaGlkZGVuQ2xhc3MpO1xuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5hc3NpZ24oc3dpcGVyLnBhZ2luYXRpb24sIHtcbiAgICByZW5kZXIsXG4gICAgdXBkYXRlLFxuICAgIGluaXQsXG4gICAgZGVzdHJveVxuICB9KTtcbn0iLCJpbXBvcnQgJCBmcm9tICcuLi8uLi9zaGFyZWQvZG9tLmpzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhcmFsbGF4KHtcbiAgc3dpcGVyLFxuICBleHRlbmRQYXJhbXMsXG4gIG9uXG59KSB7XG4gIGV4dGVuZFBhcmFtcyh7XG4gICAgcGFyYWxsYXg6IHtcbiAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgfVxuICB9KTtcblxuICBjb25zdCBzZXRUcmFuc2Zvcm0gPSAoZWwsIHByb2dyZXNzKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgcnRsXG4gICAgfSA9IHN3aXBlcjtcbiAgICBjb25zdCAkZWwgPSAkKGVsKTtcbiAgICBjb25zdCBydGxGYWN0b3IgPSBydGwgPyAtMSA6IDE7XG4gICAgY29uc3QgcCA9ICRlbC5hdHRyKCdkYXRhLXN3aXBlci1wYXJhbGxheCcpIHx8ICcwJztcbiAgICBsZXQgeCA9ICRlbC5hdHRyKCdkYXRhLXN3aXBlci1wYXJhbGxheC14Jyk7XG4gICAgbGV0IHkgPSAkZWwuYXR0cignZGF0YS1zd2lwZXItcGFyYWxsYXgteScpO1xuICAgIGNvbnN0IHNjYWxlID0gJGVsLmF0dHIoJ2RhdGEtc3dpcGVyLXBhcmFsbGF4LXNjYWxlJyk7XG4gICAgY29uc3Qgb3BhY2l0eSA9ICRlbC5hdHRyKCdkYXRhLXN3aXBlci1wYXJhbGxheC1vcGFjaXR5Jyk7XG5cbiAgICBpZiAoeCB8fCB5KSB7XG4gICAgICB4ID0geCB8fCAnMCc7XG4gICAgICB5ID0geSB8fCAnMCc7XG4gICAgfSBlbHNlIGlmIChzd2lwZXIuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgIHggPSBwO1xuICAgICAgeSA9ICcwJztcbiAgICB9IGVsc2Uge1xuICAgICAgeSA9IHA7XG4gICAgICB4ID0gJzAnO1xuICAgIH1cblxuICAgIGlmICh4LmluZGV4T2YoJyUnKSA+PSAwKSB7XG4gICAgICB4ID0gYCR7cGFyc2VJbnQoeCwgMTApICogcHJvZ3Jlc3MgKiBydGxGYWN0b3J9JWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHggPSBgJHt4ICogcHJvZ3Jlc3MgKiBydGxGYWN0b3J9cHhgO1xuICAgIH1cblxuICAgIGlmICh5LmluZGV4T2YoJyUnKSA+PSAwKSB7XG4gICAgICB5ID0gYCR7cGFyc2VJbnQoeSwgMTApICogcHJvZ3Jlc3N9JWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHkgPSBgJHt5ICogcHJvZ3Jlc3N9cHhgO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb3BhY2l0eSAhPT0gJ3VuZGVmaW5lZCcgJiYgb3BhY2l0eSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY3VycmVudE9wYWNpdHkgPSBvcGFjaXR5IC0gKG9wYWNpdHkgLSAxKSAqICgxIC0gTWF0aC5hYnMocHJvZ3Jlc3MpKTtcbiAgICAgICRlbFswXS5zdHlsZS5vcGFjaXR5ID0gY3VycmVudE9wYWNpdHk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBzY2FsZSA9PT0gJ3VuZGVmaW5lZCcgfHwgc2NhbGUgPT09IG51bGwpIHtcbiAgICAgICRlbC50cmFuc2Zvcm0oYHRyYW5zbGF0ZTNkKCR7eH0sICR7eX0sIDBweClgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY3VycmVudFNjYWxlID0gc2NhbGUgLSAoc2NhbGUgLSAxKSAqICgxIC0gTWF0aC5hYnMocHJvZ3Jlc3MpKTtcbiAgICAgICRlbC50cmFuc2Zvcm0oYHRyYW5zbGF0ZTNkKCR7eH0sICR7eX0sIDBweCkgc2NhbGUoJHtjdXJyZW50U2NhbGV9KWApO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzZXRUcmFuc2xhdGUgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgJGVsLFxuICAgICAgc2xpZGVzLFxuICAgICAgcHJvZ3Jlc3MsXG4gICAgICBzbmFwR3JpZFxuICAgIH0gPSBzd2lwZXI7XG4gICAgJGVsLmNoaWxkcmVuKCdbZGF0YS1zd2lwZXItcGFyYWxsYXhdLCBbZGF0YS1zd2lwZXItcGFyYWxsYXgteF0sIFtkYXRhLXN3aXBlci1wYXJhbGxheC15XSwgW2RhdGEtc3dpcGVyLXBhcmFsbGF4LW9wYWNpdHldLCBbZGF0YS1zd2lwZXItcGFyYWxsYXgtc2NhbGVdJykuZWFjaChlbCA9PiB7XG4gICAgICBzZXRUcmFuc2Zvcm0oZWwsIHByb2dyZXNzKTtcbiAgICB9KTtcbiAgICBzbGlkZXMuZWFjaCgoc2xpZGVFbCwgc2xpZGVJbmRleCkgPT4ge1xuICAgICAgbGV0IHNsaWRlUHJvZ3Jlc3MgPSBzbGlkZUVsLnByb2dyZXNzO1xuXG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJHcm91cCA+IDEgJiYgc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJWaWV3ICE9PSAnYXV0bycpIHtcbiAgICAgICAgc2xpZGVQcm9ncmVzcyArPSBNYXRoLmNlaWwoc2xpZGVJbmRleCAvIDIpIC0gcHJvZ3Jlc3MgKiAoc25hcEdyaWQubGVuZ3RoIC0gMSk7XG4gICAgICB9XG5cbiAgICAgIHNsaWRlUHJvZ3Jlc3MgPSBNYXRoLm1pbihNYXRoLm1heChzbGlkZVByb2dyZXNzLCAtMSksIDEpO1xuICAgICAgJChzbGlkZUVsKS5maW5kKCdbZGF0YS1zd2lwZXItcGFyYWxsYXhdLCBbZGF0YS1zd2lwZXItcGFyYWxsYXgteF0sIFtkYXRhLXN3aXBlci1wYXJhbGxheC15XSwgW2RhdGEtc3dpcGVyLXBhcmFsbGF4LW9wYWNpdHldLCBbZGF0YS1zd2lwZXItcGFyYWxsYXgtc2NhbGVdJykuZWFjaChlbCA9PiB7XG4gICAgICAgIHNldFRyYW5zZm9ybShlbCwgc2xpZGVQcm9ncmVzcyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBzZXRUcmFuc2l0aW9uID0gKGR1cmF0aW9uID0gc3dpcGVyLnBhcmFtcy5zcGVlZCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgICRlbFxuICAgIH0gPSBzd2lwZXI7XG4gICAgJGVsLmZpbmQoJ1tkYXRhLXN3aXBlci1wYXJhbGxheF0sIFtkYXRhLXN3aXBlci1wYXJhbGxheC14XSwgW2RhdGEtc3dpcGVyLXBhcmFsbGF4LXldLCBbZGF0YS1zd2lwZXItcGFyYWxsYXgtb3BhY2l0eV0sIFtkYXRhLXN3aXBlci1wYXJhbGxheC1zY2FsZV0nKS5lYWNoKHBhcmFsbGF4RWwgPT4ge1xuICAgICAgY29uc3QgJHBhcmFsbGF4RWwgPSAkKHBhcmFsbGF4RWwpO1xuICAgICAgbGV0IHBhcmFsbGF4RHVyYXRpb24gPSBwYXJzZUludCgkcGFyYWxsYXhFbC5hdHRyKCdkYXRhLXN3aXBlci1wYXJhbGxheC1kdXJhdGlvbicpLCAxMCkgfHwgZHVyYXRpb247XG4gICAgICBpZiAoZHVyYXRpb24gPT09IDApIHBhcmFsbGF4RHVyYXRpb24gPSAwO1xuICAgICAgJHBhcmFsbGF4RWwudHJhbnNpdGlvbihwYXJhbGxheER1cmF0aW9uKTtcbiAgICB9KTtcbiAgfTtcblxuICBvbignYmVmb3JlSW5pdCcsICgpID0+IHtcbiAgICBpZiAoIXN3aXBlci5wYXJhbXMucGFyYWxsYXguZW5hYmxlZCkgcmV0dXJuO1xuICAgIHN3aXBlci5wYXJhbXMud2F0Y2hTbGlkZXNQcm9ncmVzcyA9IHRydWU7XG4gICAgc3dpcGVyLm9yaWdpbmFsUGFyYW1zLndhdGNoU2xpZGVzUHJvZ3Jlc3MgPSB0cnVlO1xuICB9KTtcbiAgb24oJ2luaXQnLCAoKSA9PiB7XG4gICAgaWYgKCFzd2lwZXIucGFyYW1zLnBhcmFsbGF4LmVuYWJsZWQpIHJldHVybjtcbiAgICBzZXRUcmFuc2xhdGUoKTtcbiAgfSk7XG4gIG9uKCdzZXRUcmFuc2xhdGUnLCAoKSA9PiB7XG4gICAgaWYgKCFzd2lwZXIucGFyYW1zLnBhcmFsbGF4LmVuYWJsZWQpIHJldHVybjtcbiAgICBzZXRUcmFuc2xhdGUoKTtcbiAgfSk7XG4gIG9uKCdzZXRUcmFuc2l0aW9uJywgKF9zd2lwZXIsIGR1cmF0aW9uKSA9PiB7XG4gICAgaWYgKCFzd2lwZXIucGFyYW1zLnBhcmFsbGF4LmVuYWJsZWQpIHJldHVybjtcbiAgICBzZXRUcmFuc2l0aW9uKGR1cmF0aW9uKTtcbiAgfSk7XG59IiwiaW1wb3J0IHsgZ2V0RG9jdW1lbnQgfSBmcm9tICdzc3Itd2luZG93JztcbmltcG9ydCAkIGZyb20gJy4uLy4uL3NoYXJlZC9kb20uanMnO1xuaW1wb3J0IHsgbmV4dFRpY2sgfSBmcm9tICcuLi8uLi9zaGFyZWQvdXRpbHMuanMnO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnRJZk5vdERlZmluZWQgZnJvbSAnLi4vLi4vc2hhcmVkL2NyZWF0ZS1lbGVtZW50LWlmLW5vdC1kZWZpbmVkLmpzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNjcm9sbGJhcih7XG4gIHN3aXBlcixcbiAgZXh0ZW5kUGFyYW1zLFxuICBvbixcbiAgZW1pdFxufSkge1xuICBjb25zdCBkb2N1bWVudCA9IGdldERvY3VtZW50KCk7XG4gIGxldCBpc1RvdWNoZWQgPSBmYWxzZTtcbiAgbGV0IHRpbWVvdXQgPSBudWxsO1xuICBsZXQgZHJhZ1RpbWVvdXQgPSBudWxsO1xuICBsZXQgZHJhZ1N0YXJ0UG9zO1xuICBsZXQgZHJhZ1NpemU7XG4gIGxldCB0cmFja1NpemU7XG4gIGxldCBkaXZpZGVyO1xuICBleHRlbmRQYXJhbXMoe1xuICAgIHNjcm9sbGJhcjoge1xuICAgICAgZWw6IG51bGwsXG4gICAgICBkcmFnU2l6ZTogJ2F1dG8nLFxuICAgICAgaGlkZTogZmFsc2UsXG4gICAgICBkcmFnZ2FibGU6IGZhbHNlLFxuICAgICAgc25hcE9uUmVsZWFzZTogdHJ1ZSxcbiAgICAgIGxvY2tDbGFzczogJ3N3aXBlci1zY3JvbGxiYXItbG9jaycsXG4gICAgICBkcmFnQ2xhc3M6ICdzd2lwZXItc2Nyb2xsYmFyLWRyYWcnXG4gICAgfVxuICB9KTtcbiAgc3dpcGVyLnNjcm9sbGJhciA9IHtcbiAgICBlbDogbnVsbCxcbiAgICBkcmFnRWw6IG51bGwsXG4gICAgJGVsOiBudWxsLFxuICAgICRkcmFnRWw6IG51bGxcbiAgfTtcblxuICBmdW5jdGlvbiBzZXRUcmFuc2xhdGUoKSB7XG4gICAgaWYgKCFzd2lwZXIucGFyYW1zLnNjcm9sbGJhci5lbCB8fCAhc3dpcGVyLnNjcm9sbGJhci5lbCkgcmV0dXJuO1xuICAgIGNvbnN0IHtcbiAgICAgIHNjcm9sbGJhcixcbiAgICAgIHJ0bFRyYW5zbGF0ZTogcnRsLFxuICAgICAgcHJvZ3Jlc3NcbiAgICB9ID0gc3dpcGVyO1xuICAgIGNvbnN0IHtcbiAgICAgICRkcmFnRWwsXG4gICAgICAkZWxcbiAgICB9ID0gc2Nyb2xsYmFyO1xuICAgIGNvbnN0IHBhcmFtcyA9IHN3aXBlci5wYXJhbXMuc2Nyb2xsYmFyO1xuICAgIGxldCBuZXdTaXplID0gZHJhZ1NpemU7XG4gICAgbGV0IG5ld1BvcyA9ICh0cmFja1NpemUgLSBkcmFnU2l6ZSkgKiBwcm9ncmVzcztcblxuICAgIGlmIChydGwpIHtcbiAgICAgIG5ld1BvcyA9IC1uZXdQb3M7XG5cbiAgICAgIGlmIChuZXdQb3MgPiAwKSB7XG4gICAgICAgIG5ld1NpemUgPSBkcmFnU2l6ZSAtIG5ld1BvcztcbiAgICAgICAgbmV3UG9zID0gMDtcbiAgICAgIH0gZWxzZSBpZiAoLW5ld1BvcyArIGRyYWdTaXplID4gdHJhY2tTaXplKSB7XG4gICAgICAgIG5ld1NpemUgPSB0cmFja1NpemUgKyBuZXdQb3M7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChuZXdQb3MgPCAwKSB7XG4gICAgICBuZXdTaXplID0gZHJhZ1NpemUgKyBuZXdQb3M7XG4gICAgICBuZXdQb3MgPSAwO1xuICAgIH0gZWxzZSBpZiAobmV3UG9zICsgZHJhZ1NpemUgPiB0cmFja1NpemUpIHtcbiAgICAgIG5ld1NpemUgPSB0cmFja1NpemUgLSBuZXdQb3M7XG4gICAgfVxuXG4gICAgaWYgKHN3aXBlci5pc0hvcml6b250YWwoKSkge1xuICAgICAgJGRyYWdFbC50cmFuc2Zvcm0oYHRyYW5zbGF0ZTNkKCR7bmV3UG9zfXB4LCAwLCAwKWApO1xuICAgICAgJGRyYWdFbFswXS5zdHlsZS53aWR0aCA9IGAke25ld1NpemV9cHhgO1xuICAgIH0gZWxzZSB7XG4gICAgICAkZHJhZ0VsLnRyYW5zZm9ybShgdHJhbnNsYXRlM2QoMHB4LCAke25ld1Bvc31weCwgMClgKTtcbiAgICAgICRkcmFnRWxbMF0uc3R5bGUuaGVpZ2h0ID0gYCR7bmV3U2l6ZX1weGA7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy5oaWRlKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAkZWxbMF0uc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICRlbFswXS5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgJGVsLnRyYW5zaXRpb24oNDAwKTtcbiAgICAgIH0sIDEwMDApO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFRyYW5zaXRpb24oZHVyYXRpb24pIHtcbiAgICBpZiAoIXN3aXBlci5wYXJhbXMuc2Nyb2xsYmFyLmVsIHx8ICFzd2lwZXIuc2Nyb2xsYmFyLmVsKSByZXR1cm47XG4gICAgc3dpcGVyLnNjcm9sbGJhci4kZHJhZ0VsLnRyYW5zaXRpb24oZHVyYXRpb24pO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlU2l6ZSgpIHtcbiAgICBpZiAoIXN3aXBlci5wYXJhbXMuc2Nyb2xsYmFyLmVsIHx8ICFzd2lwZXIuc2Nyb2xsYmFyLmVsKSByZXR1cm47XG4gICAgY29uc3Qge1xuICAgICAgc2Nyb2xsYmFyXG4gICAgfSA9IHN3aXBlcjtcbiAgICBjb25zdCB7XG4gICAgICAkZHJhZ0VsLFxuICAgICAgJGVsXG4gICAgfSA9IHNjcm9sbGJhcjtcbiAgICAkZHJhZ0VsWzBdLnN0eWxlLndpZHRoID0gJyc7XG4gICAgJGRyYWdFbFswXS5zdHlsZS5oZWlnaHQgPSAnJztcbiAgICB0cmFja1NpemUgPSBzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyAkZWxbMF0ub2Zmc2V0V2lkdGggOiAkZWxbMF0ub2Zmc2V0SGVpZ2h0O1xuICAgIGRpdmlkZXIgPSBzd2lwZXIuc2l6ZSAvIChzd2lwZXIudmlydHVhbFNpemUgKyBzd2lwZXIucGFyYW1zLnNsaWRlc09mZnNldEJlZm9yZSAtIChzd2lwZXIucGFyYW1zLmNlbnRlcmVkU2xpZGVzID8gc3dpcGVyLnNuYXBHcmlkWzBdIDogMCkpO1xuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMuc2Nyb2xsYmFyLmRyYWdTaXplID09PSAnYXV0bycpIHtcbiAgICAgIGRyYWdTaXplID0gdHJhY2tTaXplICogZGl2aWRlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgZHJhZ1NpemUgPSBwYXJzZUludChzd2lwZXIucGFyYW1zLnNjcm9sbGJhci5kcmFnU2l6ZSwgMTApO1xuICAgIH1cblxuICAgIGlmIChzd2lwZXIuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgICRkcmFnRWxbMF0uc3R5bGUud2lkdGggPSBgJHtkcmFnU2l6ZX1weGA7XG4gICAgfSBlbHNlIHtcbiAgICAgICRkcmFnRWxbMF0uc3R5bGUuaGVpZ2h0ID0gYCR7ZHJhZ1NpemV9cHhgO1xuICAgIH1cblxuICAgIGlmIChkaXZpZGVyID49IDEpIHtcbiAgICAgICRlbFswXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0gZWxzZSB7XG4gICAgICAkZWxbMF0uc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgIH1cblxuICAgIGlmIChzd2lwZXIucGFyYW1zLnNjcm9sbGJhci5oaWRlKSB7XG4gICAgICAkZWxbMF0uc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgfVxuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMud2F0Y2hPdmVyZmxvdyAmJiBzd2lwZXIuZW5hYmxlZCkge1xuICAgICAgc2Nyb2xsYmFyLiRlbFtzd2lwZXIuaXNMb2NrZWQgPyAnYWRkQ2xhc3MnIDogJ3JlbW92ZUNsYXNzJ10oc3dpcGVyLnBhcmFtcy5zY3JvbGxiYXIubG9ja0NsYXNzKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRQb2ludGVyUG9zaXRpb24oZSkge1xuICAgIGlmIChzd2lwZXIuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgIHJldHVybiBlLnR5cGUgPT09ICd0b3VjaHN0YXJ0JyB8fCBlLnR5cGUgPT09ICd0b3VjaG1vdmUnID8gZS50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFggOiBlLmNsaWVudFg7XG4gICAgfVxuXG4gICAgcmV0dXJuIGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnIHx8IGUudHlwZSA9PT0gJ3RvdWNobW92ZScgPyBlLnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WSA6IGUuY2xpZW50WTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldERyYWdQb3NpdGlvbihlKSB7XG4gICAgY29uc3Qge1xuICAgICAgc2Nyb2xsYmFyLFxuICAgICAgcnRsVHJhbnNsYXRlOiBydGxcbiAgICB9ID0gc3dpcGVyO1xuICAgIGNvbnN0IHtcbiAgICAgICRlbFxuICAgIH0gPSBzY3JvbGxiYXI7XG4gICAgbGV0IHBvc2l0aW9uUmF0aW87XG4gICAgcG9zaXRpb25SYXRpbyA9IChnZXRQb2ludGVyUG9zaXRpb24oZSkgLSAkZWwub2Zmc2V0KClbc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gJ2xlZnQnIDogJ3RvcCddIC0gKGRyYWdTdGFydFBvcyAhPT0gbnVsbCA/IGRyYWdTdGFydFBvcyA6IGRyYWdTaXplIC8gMikpIC8gKHRyYWNrU2l6ZSAtIGRyYWdTaXplKTtcbiAgICBwb3NpdGlvblJhdGlvID0gTWF0aC5tYXgoTWF0aC5taW4ocG9zaXRpb25SYXRpbywgMSksIDApO1xuXG4gICAgaWYgKHJ0bCkge1xuICAgICAgcG9zaXRpb25SYXRpbyA9IDEgLSBwb3NpdGlvblJhdGlvO1xuICAgIH1cblxuICAgIGNvbnN0IHBvc2l0aW9uID0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpICsgKHN3aXBlci5tYXhUcmFuc2xhdGUoKSAtIHN3aXBlci5taW5UcmFuc2xhdGUoKSkgKiBwb3NpdGlvblJhdGlvO1xuICAgIHN3aXBlci51cGRhdGVQcm9ncmVzcyhwb3NpdGlvbik7XG4gICAgc3dpcGVyLnNldFRyYW5zbGF0ZShwb3NpdGlvbik7XG4gICAgc3dpcGVyLnVwZGF0ZUFjdGl2ZUluZGV4KCk7XG4gICAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRHJhZ1N0YXJ0KGUpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLnNjcm9sbGJhcjtcbiAgICBjb25zdCB7XG4gICAgICBzY3JvbGxiYXIsXG4gICAgICAkd3JhcHBlckVsXG4gICAgfSA9IHN3aXBlcjtcbiAgICBjb25zdCB7XG4gICAgICAkZWwsXG4gICAgICAkZHJhZ0VsXG4gICAgfSA9IHNjcm9sbGJhcjtcbiAgICBpc1RvdWNoZWQgPSB0cnVlO1xuICAgIGRyYWdTdGFydFBvcyA9IGUudGFyZ2V0ID09PSAkZHJhZ0VsWzBdIHx8IGUudGFyZ2V0ID09PSAkZHJhZ0VsID8gZ2V0UG9pbnRlclBvc2l0aW9uKGUpIC0gZS50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClbc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gJ2xlZnQnIDogJ3RvcCddIDogbnVsbDtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAkd3JhcHBlckVsLnRyYW5zaXRpb24oMTAwKTtcbiAgICAkZHJhZ0VsLnRyYW5zaXRpb24oMTAwKTtcbiAgICBzZXREcmFnUG9zaXRpb24oZSk7XG4gICAgY2xlYXJUaW1lb3V0KGRyYWdUaW1lb3V0KTtcbiAgICAkZWwudHJhbnNpdGlvbigwKTtcblxuICAgIGlmIChwYXJhbXMuaGlkZSkge1xuICAgICAgJGVsLmNzcygnb3BhY2l0eScsIDEpO1xuICAgIH1cblxuICAgIGlmIChzd2lwZXIucGFyYW1zLmNzc01vZGUpIHtcbiAgICAgIHN3aXBlci4kd3JhcHBlckVsLmNzcygnc2Nyb2xsLXNuYXAtdHlwZScsICdub25lJyk7XG4gICAgfVxuXG4gICAgZW1pdCgnc2Nyb2xsYmFyRHJhZ1N0YXJ0JywgZSk7XG4gIH1cblxuICBmdW5jdGlvbiBvbkRyYWdNb3ZlKGUpIHtcbiAgICBjb25zdCB7XG4gICAgICBzY3JvbGxiYXIsXG4gICAgICAkd3JhcHBlckVsXG4gICAgfSA9IHN3aXBlcjtcbiAgICBjb25zdCB7XG4gICAgICAkZWwsXG4gICAgICAkZHJhZ0VsXG4gICAgfSA9IHNjcm9sbGJhcjtcbiAgICBpZiAoIWlzVG91Y2hlZCkgcmV0dXJuO1xuICAgIGlmIChlLnByZXZlbnREZWZhdWx0KSBlLnByZXZlbnREZWZhdWx0KCk7ZWxzZSBlLnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgc2V0RHJhZ1Bvc2l0aW9uKGUpO1xuICAgICR3cmFwcGVyRWwudHJhbnNpdGlvbigwKTtcbiAgICAkZWwudHJhbnNpdGlvbigwKTtcbiAgICAkZHJhZ0VsLnRyYW5zaXRpb24oMCk7XG4gICAgZW1pdCgnc2Nyb2xsYmFyRHJhZ01vdmUnLCBlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRHJhZ0VuZChlKSB7XG4gICAgY29uc3QgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy5zY3JvbGxiYXI7XG4gICAgY29uc3Qge1xuICAgICAgc2Nyb2xsYmFyLFxuICAgICAgJHdyYXBwZXJFbFxuICAgIH0gPSBzd2lwZXI7XG4gICAgY29uc3Qge1xuICAgICAgJGVsXG4gICAgfSA9IHNjcm9sbGJhcjtcbiAgICBpZiAoIWlzVG91Y2hlZCkgcmV0dXJuO1xuICAgIGlzVG91Y2hlZCA9IGZhbHNlO1xuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMuY3NzTW9kZSkge1xuICAgICAgc3dpcGVyLiR3cmFwcGVyRWwuY3NzKCdzY3JvbGwtc25hcC10eXBlJywgJycpO1xuICAgICAgJHdyYXBwZXJFbC50cmFuc2l0aW9uKCcnKTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLmhpZGUpIHtcbiAgICAgIGNsZWFyVGltZW91dChkcmFnVGltZW91dCk7XG4gICAgICBkcmFnVGltZW91dCA9IG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgJGVsLmNzcygnb3BhY2l0eScsIDApO1xuICAgICAgICAkZWwudHJhbnNpdGlvbig0MDApO1xuICAgICAgfSwgMTAwMCk7XG4gICAgfVxuXG4gICAgZW1pdCgnc2Nyb2xsYmFyRHJhZ0VuZCcsIGUpO1xuXG4gICAgaWYgKHBhcmFtcy5zbmFwT25SZWxlYXNlKSB7XG4gICAgICBzd2lwZXIuc2xpZGVUb0Nsb3Nlc3QoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBldmVudHMobWV0aG9kKSB7XG4gICAgY29uc3Qge1xuICAgICAgc2Nyb2xsYmFyLFxuICAgICAgdG91Y2hFdmVudHNUb3VjaCxcbiAgICAgIHRvdWNoRXZlbnRzRGVza3RvcCxcbiAgICAgIHBhcmFtcyxcbiAgICAgIHN1cHBvcnRcbiAgICB9ID0gc3dpcGVyO1xuICAgIGNvbnN0ICRlbCA9IHNjcm9sbGJhci4kZWw7XG4gICAgY29uc3QgdGFyZ2V0ID0gJGVsWzBdO1xuICAgIGNvbnN0IGFjdGl2ZUxpc3RlbmVyID0gc3VwcG9ydC5wYXNzaXZlTGlzdGVuZXIgJiYgcGFyYW1zLnBhc3NpdmVMaXN0ZW5lcnMgPyB7XG4gICAgICBwYXNzaXZlOiBmYWxzZSxcbiAgICAgIGNhcHR1cmU6IGZhbHNlXG4gICAgfSA6IGZhbHNlO1xuICAgIGNvbnN0IHBhc3NpdmVMaXN0ZW5lciA9IHN1cHBvcnQucGFzc2l2ZUxpc3RlbmVyICYmIHBhcmFtcy5wYXNzaXZlTGlzdGVuZXJzID8ge1xuICAgICAgcGFzc2l2ZTogdHJ1ZSxcbiAgICAgIGNhcHR1cmU6IGZhbHNlXG4gICAgfSA6IGZhbHNlO1xuICAgIGlmICghdGFyZ2V0KSByZXR1cm47XG4gICAgY29uc3QgZXZlbnRNZXRob2QgPSBtZXRob2QgPT09ICdvbicgPyAnYWRkRXZlbnRMaXN0ZW5lcicgOiAncmVtb3ZlRXZlbnRMaXN0ZW5lcic7XG5cbiAgICBpZiAoIXN1cHBvcnQudG91Y2gpIHtcbiAgICAgIHRhcmdldFtldmVudE1ldGhvZF0odG91Y2hFdmVudHNEZXNrdG9wLnN0YXJ0LCBvbkRyYWdTdGFydCwgYWN0aXZlTGlzdGVuZXIpO1xuICAgICAgZG9jdW1lbnRbZXZlbnRNZXRob2RdKHRvdWNoRXZlbnRzRGVza3RvcC5tb3ZlLCBvbkRyYWdNb3ZlLCBhY3RpdmVMaXN0ZW5lcik7XG4gICAgICBkb2N1bWVudFtldmVudE1ldGhvZF0odG91Y2hFdmVudHNEZXNrdG9wLmVuZCwgb25EcmFnRW5kLCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXJnZXRbZXZlbnRNZXRob2RdKHRvdWNoRXZlbnRzVG91Y2guc3RhcnQsIG9uRHJhZ1N0YXJ0LCBhY3RpdmVMaXN0ZW5lcik7XG4gICAgICB0YXJnZXRbZXZlbnRNZXRob2RdKHRvdWNoRXZlbnRzVG91Y2gubW92ZSwgb25EcmFnTW92ZSwgYWN0aXZlTGlzdGVuZXIpO1xuICAgICAgdGFyZ2V0W2V2ZW50TWV0aG9kXSh0b3VjaEV2ZW50c1RvdWNoLmVuZCwgb25EcmFnRW5kLCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGVuYWJsZURyYWdnYWJsZSgpIHtcbiAgICBpZiAoIXN3aXBlci5wYXJhbXMuc2Nyb2xsYmFyLmVsKSByZXR1cm47XG4gICAgZXZlbnRzKCdvbicpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGlzYWJsZURyYWdnYWJsZSgpIHtcbiAgICBpZiAoIXN3aXBlci5wYXJhbXMuc2Nyb2xsYmFyLmVsKSByZXR1cm47XG4gICAgZXZlbnRzKCdvZmYnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgY29uc3Qge1xuICAgICAgc2Nyb2xsYmFyLFxuICAgICAgJGVsOiAkc3dpcGVyRWxcbiAgICB9ID0gc3dpcGVyO1xuICAgIHN3aXBlci5wYXJhbXMuc2Nyb2xsYmFyID0gY3JlYXRlRWxlbWVudElmTm90RGVmaW5lZChzd2lwZXIsIHN3aXBlci5vcmlnaW5hbFBhcmFtcy5zY3JvbGxiYXIsIHN3aXBlci5wYXJhbXMuc2Nyb2xsYmFyLCB7XG4gICAgICBlbDogJ3N3aXBlci1zY3JvbGxiYXInXG4gICAgfSk7XG4gICAgY29uc3QgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy5zY3JvbGxiYXI7XG4gICAgaWYgKCFwYXJhbXMuZWwpIHJldHVybjtcbiAgICBsZXQgJGVsID0gJChwYXJhbXMuZWwpO1xuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMudW5pcXVlTmF2RWxlbWVudHMgJiYgdHlwZW9mIHBhcmFtcy5lbCA9PT0gJ3N0cmluZycgJiYgJGVsLmxlbmd0aCA+IDEgJiYgJHN3aXBlckVsLmZpbmQocGFyYW1zLmVsKS5sZW5ndGggPT09IDEpIHtcbiAgICAgICRlbCA9ICRzd2lwZXJFbC5maW5kKHBhcmFtcy5lbCk7XG4gICAgfVxuXG4gICAgbGV0ICRkcmFnRWwgPSAkZWwuZmluZChgLiR7c3dpcGVyLnBhcmFtcy5zY3JvbGxiYXIuZHJhZ0NsYXNzfWApO1xuXG4gICAgaWYgKCRkcmFnRWwubGVuZ3RoID09PSAwKSB7XG4gICAgICAkZHJhZ0VsID0gJChgPGRpdiBjbGFzcz1cIiR7c3dpcGVyLnBhcmFtcy5zY3JvbGxiYXIuZHJhZ0NsYXNzfVwiPjwvZGl2PmApO1xuICAgICAgJGVsLmFwcGVuZCgkZHJhZ0VsKTtcbiAgICB9XG5cbiAgICBPYmplY3QuYXNzaWduKHNjcm9sbGJhciwge1xuICAgICAgJGVsLFxuICAgICAgZWw6ICRlbFswXSxcbiAgICAgICRkcmFnRWwsXG4gICAgICBkcmFnRWw6ICRkcmFnRWxbMF1cbiAgICB9KTtcblxuICAgIGlmIChwYXJhbXMuZHJhZ2dhYmxlKSB7XG4gICAgICBlbmFibGVEcmFnZ2FibGUoKTtcbiAgICB9XG5cbiAgICBpZiAoJGVsKSB7XG4gICAgICAkZWxbc3dpcGVyLmVuYWJsZWQgPyAncmVtb3ZlQ2xhc3MnIDogJ2FkZENsYXNzJ10oc3dpcGVyLnBhcmFtcy5zY3JvbGxiYXIubG9ja0NsYXNzKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIGRpc2FibGVEcmFnZ2FibGUoKTtcbiAgfVxuXG4gIG9uKCdpbml0JywgKCkgPT4ge1xuICAgIGluaXQoKTtcbiAgICB1cGRhdGVTaXplKCk7XG4gICAgc2V0VHJhbnNsYXRlKCk7XG4gIH0pO1xuICBvbigndXBkYXRlIHJlc2l6ZSBvYnNlcnZlclVwZGF0ZSBsb2NrIHVubG9jaycsICgpID0+IHtcbiAgICB1cGRhdGVTaXplKCk7XG4gIH0pO1xuICBvbignc2V0VHJhbnNsYXRlJywgKCkgPT4ge1xuICAgIHNldFRyYW5zbGF0ZSgpO1xuICB9KTtcbiAgb24oJ3NldFRyYW5zaXRpb24nLCAoX3MsIGR1cmF0aW9uKSA9PiB7XG4gICAgc2V0VHJhbnNpdGlvbihkdXJhdGlvbik7XG4gIH0pO1xuICBvbignZW5hYmxlIGRpc2FibGUnLCAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgJGVsXG4gICAgfSA9IHN3aXBlci5zY3JvbGxiYXI7XG5cbiAgICBpZiAoJGVsKSB7XG4gICAgICAkZWxbc3dpcGVyLmVuYWJsZWQgPyAncmVtb3ZlQ2xhc3MnIDogJ2FkZENsYXNzJ10oc3dpcGVyLnBhcmFtcy5zY3JvbGxiYXIubG9ja0NsYXNzKTtcbiAgICB9XG4gIH0pO1xuICBvbignZGVzdHJveScsICgpID0+IHtcbiAgICBkZXN0cm95KCk7XG4gIH0pO1xuICBPYmplY3QuYXNzaWduKHN3aXBlci5zY3JvbGxiYXIsIHtcbiAgICB1cGRhdGVTaXplLFxuICAgIHNldFRyYW5zbGF0ZSxcbiAgICBpbml0LFxuICAgIGRlc3Ryb3lcbiAgfSk7XG59IiwiaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tICcuLi8uLi9zaGFyZWQvdXRpbHMuanMnO1xuaW1wb3J0ICQgZnJvbSAnLi4vLi4vc2hhcmVkL2RvbS5qcyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUaHVtYih7XG4gIHN3aXBlcixcbiAgZXh0ZW5kUGFyYW1zLFxuICBvblxufSkge1xuICBleHRlbmRQYXJhbXMoe1xuICAgIHRodW1iczoge1xuICAgICAgc3dpcGVyOiBudWxsLFxuICAgICAgbXVsdGlwbGVBY3RpdmVUaHVtYnM6IHRydWUsXG4gICAgICBhdXRvU2Nyb2xsT2Zmc2V0OiAwLFxuICAgICAgc2xpZGVUaHVtYkFjdGl2ZUNsYXNzOiAnc3dpcGVyLXNsaWRlLXRodW1iLWFjdGl2ZScsXG4gICAgICB0aHVtYnNDb250YWluZXJDbGFzczogJ3N3aXBlci10aHVtYnMnXG4gICAgfVxuICB9KTtcbiAgbGV0IGluaXRpYWxpemVkID0gZmFsc2U7XG4gIGxldCBzd2lwZXJDcmVhdGVkID0gZmFsc2U7XG4gIHN3aXBlci50aHVtYnMgPSB7XG4gICAgc3dpcGVyOiBudWxsXG4gIH07XG5cbiAgZnVuY3Rpb24gb25UaHVtYkNsaWNrKCkge1xuICAgIGNvbnN0IHRodW1ic1N3aXBlciA9IHN3aXBlci50aHVtYnMuc3dpcGVyO1xuICAgIGlmICghdGh1bWJzU3dpcGVyKSByZXR1cm47XG4gICAgY29uc3QgY2xpY2tlZEluZGV4ID0gdGh1bWJzU3dpcGVyLmNsaWNrZWRJbmRleDtcbiAgICBjb25zdCBjbGlja2VkU2xpZGUgPSB0aHVtYnNTd2lwZXIuY2xpY2tlZFNsaWRlO1xuICAgIGlmIChjbGlja2VkU2xpZGUgJiYgJChjbGlja2VkU2xpZGUpLmhhc0NsYXNzKHN3aXBlci5wYXJhbXMudGh1bWJzLnNsaWRlVGh1bWJBY3RpdmVDbGFzcykpIHJldHVybjtcbiAgICBpZiAodHlwZW9mIGNsaWNrZWRJbmRleCA9PT0gJ3VuZGVmaW5lZCcgfHwgY2xpY2tlZEluZGV4ID09PSBudWxsKSByZXR1cm47XG4gICAgbGV0IHNsaWRlVG9JbmRleDtcblxuICAgIGlmICh0aHVtYnNTd2lwZXIucGFyYW1zLmxvb3ApIHtcbiAgICAgIHNsaWRlVG9JbmRleCA9IHBhcnNlSW50KCQodGh1bWJzU3dpcGVyLmNsaWNrZWRTbGlkZSkuYXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKSwgMTApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzbGlkZVRvSW5kZXggPSBjbGlja2VkSW5kZXg7XG4gICAgfVxuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMubG9vcCkge1xuICAgICAgbGV0IGN1cnJlbnRJbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleDtcblxuICAgICAgaWYgKHN3aXBlci5zbGlkZXMuZXEoY3VycmVudEluZGV4KS5oYXNDbGFzcyhzd2lwZXIucGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MpKSB7XG4gICAgICAgIHN3aXBlci5sb29wRml4KCk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXG4gICAgICAgIHN3aXBlci5fY2xpZW50TGVmdCA9IHN3aXBlci4kd3JhcHBlckVsWzBdLmNsaWVudExlZnQ7XG4gICAgICAgIGN1cnJlbnRJbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJldkluZGV4ID0gc3dpcGVyLnNsaWRlcy5lcShjdXJyZW50SW5kZXgpLnByZXZBbGwoYFtkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIiR7c2xpZGVUb0luZGV4fVwiXWApLmVxKDApLmluZGV4KCk7XG4gICAgICBjb25zdCBuZXh0SW5kZXggPSBzd2lwZXIuc2xpZGVzLmVxKGN1cnJlbnRJbmRleCkubmV4dEFsbChgW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJHtzbGlkZVRvSW5kZXh9XCJdYCkuZXEoMCkuaW5kZXgoKTtcbiAgICAgIGlmICh0eXBlb2YgcHJldkluZGV4ID09PSAndW5kZWZpbmVkJykgc2xpZGVUb0luZGV4ID0gbmV4dEluZGV4O2Vsc2UgaWYgKHR5cGVvZiBuZXh0SW5kZXggPT09ICd1bmRlZmluZWQnKSBzbGlkZVRvSW5kZXggPSBwcmV2SW5kZXg7ZWxzZSBpZiAobmV4dEluZGV4IC0gY3VycmVudEluZGV4IDwgY3VycmVudEluZGV4IC0gcHJldkluZGV4KSBzbGlkZVRvSW5kZXggPSBuZXh0SW5kZXg7ZWxzZSBzbGlkZVRvSW5kZXggPSBwcmV2SW5kZXg7XG4gICAgfVxuXG4gICAgc3dpcGVyLnNsaWRlVG8oc2xpZGVUb0luZGV4KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdGh1bWJzOiB0aHVtYnNQYXJhbXNcbiAgICB9ID0gc3dpcGVyLnBhcmFtcztcbiAgICBpZiAoaW5pdGlhbGl6ZWQpIHJldHVybiBmYWxzZTtcbiAgICBpbml0aWFsaXplZCA9IHRydWU7XG4gICAgY29uc3QgU3dpcGVyQ2xhc3MgPSBzd2lwZXIuY29uc3RydWN0b3I7XG5cbiAgICBpZiAodGh1bWJzUGFyYW1zLnN3aXBlciBpbnN0YW5jZW9mIFN3aXBlckNsYXNzKSB7XG4gICAgICBzd2lwZXIudGh1bWJzLnN3aXBlciA9IHRodW1ic1BhcmFtcy5zd2lwZXI7XG4gICAgICBPYmplY3QuYXNzaWduKHN3aXBlci50aHVtYnMuc3dpcGVyLm9yaWdpbmFsUGFyYW1zLCB7XG4gICAgICAgIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXG4gICAgICAgIHNsaWRlVG9DbGlja2VkU2xpZGU6IGZhbHNlXG4gICAgICB9KTtcbiAgICAgIE9iamVjdC5hc3NpZ24oc3dpcGVyLnRodW1icy5zd2lwZXIucGFyYW1zLCB7XG4gICAgICAgIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXG4gICAgICAgIHNsaWRlVG9DbGlja2VkU2xpZGU6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGlzT2JqZWN0KHRodW1ic1BhcmFtcy5zd2lwZXIpKSB7XG4gICAgICBjb25zdCB0aHVtYnNTd2lwZXJQYXJhbXMgPSBPYmplY3QuYXNzaWduKHt9LCB0aHVtYnNQYXJhbXMuc3dpcGVyKTtcbiAgICAgIE9iamVjdC5hc3NpZ24odGh1bWJzU3dpcGVyUGFyYW1zLCB7XG4gICAgICAgIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXG4gICAgICAgIHNsaWRlVG9DbGlja2VkU2xpZGU6IGZhbHNlXG4gICAgICB9KTtcbiAgICAgIHN3aXBlci50aHVtYnMuc3dpcGVyID0gbmV3IFN3aXBlckNsYXNzKHRodW1ic1N3aXBlclBhcmFtcyk7XG4gICAgICBzd2lwZXJDcmVhdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBzd2lwZXIudGh1bWJzLnN3aXBlci4kZWwuYWRkQ2xhc3Moc3dpcGVyLnBhcmFtcy50aHVtYnMudGh1bWJzQ29udGFpbmVyQ2xhc3MpO1xuICAgIHN3aXBlci50aHVtYnMuc3dpcGVyLm9uKCd0YXAnLCBvblRodW1iQ2xpY2spO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlKGluaXRpYWwpIHtcbiAgICBjb25zdCB0aHVtYnNTd2lwZXIgPSBzd2lwZXIudGh1bWJzLnN3aXBlcjtcbiAgICBpZiAoIXRodW1ic1N3aXBlcikgcmV0dXJuO1xuICAgIGNvbnN0IHNsaWRlc1BlclZpZXcgPSB0aHVtYnNTd2lwZXIucGFyYW1zLnNsaWRlc1BlclZpZXcgPT09ICdhdXRvJyA/IHRodW1ic1N3aXBlci5zbGlkZXNQZXJWaWV3RHluYW1pYygpIDogdGh1bWJzU3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJWaWV3O1xuICAgIGNvbnN0IGF1dG9TY3JvbGxPZmZzZXQgPSBzd2lwZXIucGFyYW1zLnRodW1icy5hdXRvU2Nyb2xsT2Zmc2V0O1xuICAgIGNvbnN0IHVzZU9mZnNldCA9IGF1dG9TY3JvbGxPZmZzZXQgJiYgIXRodW1ic1N3aXBlci5wYXJhbXMubG9vcDtcblxuICAgIGlmIChzd2lwZXIucmVhbEluZGV4ICE9PSB0aHVtYnNTd2lwZXIucmVhbEluZGV4IHx8IHVzZU9mZnNldCkge1xuICAgICAgbGV0IGN1cnJlbnRUaHVtYnNJbmRleCA9IHRodW1ic1N3aXBlci5hY3RpdmVJbmRleDtcbiAgICAgIGxldCBuZXdUaHVtYnNJbmRleDtcbiAgICAgIGxldCBkaXJlY3Rpb247XG5cbiAgICAgIGlmICh0aHVtYnNTd2lwZXIucGFyYW1zLmxvb3ApIHtcbiAgICAgICAgaWYgKHRodW1ic1N3aXBlci5zbGlkZXMuZXEoY3VycmVudFRodW1ic0luZGV4KS5oYXNDbGFzcyh0aHVtYnNTd2lwZXIucGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MpKSB7XG4gICAgICAgICAgdGh1bWJzU3dpcGVyLmxvb3BGaXgoKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5cbiAgICAgICAgICB0aHVtYnNTd2lwZXIuX2NsaWVudExlZnQgPSB0aHVtYnNTd2lwZXIuJHdyYXBwZXJFbFswXS5jbGllbnRMZWZ0O1xuICAgICAgICAgIGN1cnJlbnRUaHVtYnNJbmRleCA9IHRodW1ic1N3aXBlci5hY3RpdmVJbmRleDtcbiAgICAgICAgfSAvLyBGaW5kIGFjdHVhbCB0aHVtYnMgaW5kZXggdG8gc2xpZGUgdG9cblxuXG4gICAgICAgIGNvbnN0IHByZXZUaHVtYnNJbmRleCA9IHRodW1ic1N3aXBlci5zbGlkZXMuZXEoY3VycmVudFRodW1ic0luZGV4KS5wcmV2QWxsKGBbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XCIke3N3aXBlci5yZWFsSW5kZXh9XCJdYCkuZXEoMCkuaW5kZXgoKTtcbiAgICAgICAgY29uc3QgbmV4dFRodW1ic0luZGV4ID0gdGh1bWJzU3dpcGVyLnNsaWRlcy5lcShjdXJyZW50VGh1bWJzSW5kZXgpLm5leHRBbGwoYFtkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIiR7c3dpcGVyLnJlYWxJbmRleH1cIl1gKS5lcSgwKS5pbmRleCgpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcHJldlRodW1ic0luZGV4ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIG5ld1RodW1ic0luZGV4ID0gbmV4dFRodW1ic0luZGV4O1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBuZXh0VGh1bWJzSW5kZXggPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgbmV3VGh1bWJzSW5kZXggPSBwcmV2VGh1bWJzSW5kZXg7XG4gICAgICAgIH0gZWxzZSBpZiAobmV4dFRodW1ic0luZGV4IC0gY3VycmVudFRodW1ic0luZGV4ID09PSBjdXJyZW50VGh1bWJzSW5kZXggLSBwcmV2VGh1bWJzSW5kZXgpIHtcbiAgICAgICAgICBuZXdUaHVtYnNJbmRleCA9IHRodW1ic1N3aXBlci5wYXJhbXMuc2xpZGVzUGVyR3JvdXAgPiAxID8gbmV4dFRodW1ic0luZGV4IDogY3VycmVudFRodW1ic0luZGV4O1xuICAgICAgICB9IGVsc2UgaWYgKG5leHRUaHVtYnNJbmRleCAtIGN1cnJlbnRUaHVtYnNJbmRleCA8IGN1cnJlbnRUaHVtYnNJbmRleCAtIHByZXZUaHVtYnNJbmRleCkge1xuICAgICAgICAgIG5ld1RodW1ic0luZGV4ID0gbmV4dFRodW1ic0luZGV4O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld1RodW1ic0luZGV4ID0gcHJldlRodW1ic0luZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgZGlyZWN0aW9uID0gc3dpcGVyLmFjdGl2ZUluZGV4ID4gc3dpcGVyLnByZXZpb3VzSW5kZXggPyAnbmV4dCcgOiAncHJldic7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdUaHVtYnNJbmRleCA9IHN3aXBlci5yZWFsSW5kZXg7XG4gICAgICAgIGRpcmVjdGlvbiA9IG5ld1RodW1ic0luZGV4ID4gc3dpcGVyLnByZXZpb3VzSW5kZXggPyAnbmV4dCcgOiAncHJldic7XG4gICAgICB9XG5cbiAgICAgIGlmICh1c2VPZmZzZXQpIHtcbiAgICAgICAgbmV3VGh1bWJzSW5kZXggKz0gZGlyZWN0aW9uID09PSAnbmV4dCcgPyBhdXRvU2Nyb2xsT2Zmc2V0IDogLTEgKiBhdXRvU2Nyb2xsT2Zmc2V0O1xuICAgICAgfVxuXG4gICAgICBpZiAodGh1bWJzU3dpcGVyLnZpc2libGVTbGlkZXNJbmRleGVzICYmIHRodW1ic1N3aXBlci52aXNpYmxlU2xpZGVzSW5kZXhlcy5pbmRleE9mKG5ld1RodW1ic0luZGV4KSA8IDApIHtcbiAgICAgICAgaWYgKHRodW1ic1N3aXBlci5wYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgICAgICBpZiAobmV3VGh1bWJzSW5kZXggPiBjdXJyZW50VGh1bWJzSW5kZXgpIHtcbiAgICAgICAgICAgIG5ld1RodW1ic0luZGV4ID0gbmV3VGh1bWJzSW5kZXggLSBNYXRoLmZsb29yKHNsaWRlc1BlclZpZXcgLyAyKSArIDE7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld1RodW1ic0luZGV4ID0gbmV3VGh1bWJzSW5kZXggKyBNYXRoLmZsb29yKHNsaWRlc1BlclZpZXcgLyAyKSAtIDE7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKG5ld1RodW1ic0luZGV4ID4gY3VycmVudFRodW1ic0luZGV4ICYmIHRodW1ic1N3aXBlci5wYXJhbXMuc2xpZGVzUGVyR3JvdXAgPT09IDEpIHsvLyBuZXdUaHVtYnNJbmRleCA9IG5ld1RodW1ic0luZGV4IC0gc2xpZGVzUGVyVmlldyArIDE7XG4gICAgICAgIH1cblxuICAgICAgICB0aHVtYnNTd2lwZXIuc2xpZGVUbyhuZXdUaHVtYnNJbmRleCwgaW5pdGlhbCA/IDAgOiB1bmRlZmluZWQpO1xuICAgICAgfVxuICAgIH0gLy8gQWN0aXZhdGUgdGh1bWJzXG5cblxuICAgIGxldCB0aHVtYnNUb0FjdGl2YXRlID0gMTtcbiAgICBjb25zdCB0aHVtYkFjdGl2ZUNsYXNzID0gc3dpcGVyLnBhcmFtcy50aHVtYnMuc2xpZGVUaHVtYkFjdGl2ZUNsYXNzO1xuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyVmlldyA+IDEgJiYgIXN3aXBlci5wYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgIHRodW1ic1RvQWN0aXZhdGUgPSBzd2lwZXIucGFyYW1zLnNsaWRlc1BlclZpZXc7XG4gICAgfVxuXG4gICAgaWYgKCFzd2lwZXIucGFyYW1zLnRodW1icy5tdWx0aXBsZUFjdGl2ZVRodW1icykge1xuICAgICAgdGh1bWJzVG9BY3RpdmF0ZSA9IDE7XG4gICAgfVxuXG4gICAgdGh1bWJzVG9BY3RpdmF0ZSA9IE1hdGguZmxvb3IodGh1bWJzVG9BY3RpdmF0ZSk7XG4gICAgdGh1bWJzU3dpcGVyLnNsaWRlcy5yZW1vdmVDbGFzcyh0aHVtYkFjdGl2ZUNsYXNzKTtcblxuICAgIGlmICh0aHVtYnNTd2lwZXIucGFyYW1zLmxvb3AgfHwgdGh1bWJzU3dpcGVyLnBhcmFtcy52aXJ0dWFsICYmIHRodW1ic1N3aXBlci5wYXJhbXMudmlydHVhbC5lbmFibGVkKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRodW1ic1RvQWN0aXZhdGU7IGkgKz0gMSkge1xuICAgICAgICB0aHVtYnNTd2lwZXIuJHdyYXBwZXJFbC5jaGlsZHJlbihgW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJHtzd2lwZXIucmVhbEluZGV4ICsgaX1cIl1gKS5hZGRDbGFzcyh0aHVtYkFjdGl2ZUNsYXNzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aHVtYnNUb0FjdGl2YXRlOyBpICs9IDEpIHtcbiAgICAgICAgdGh1bWJzU3dpcGVyLnNsaWRlcy5lcShzd2lwZXIucmVhbEluZGV4ICsgaSkuYWRkQ2xhc3ModGh1bWJBY3RpdmVDbGFzcyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb24oJ2JlZm9yZUluaXQnLCAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgdGh1bWJzXG4gICAgfSA9IHN3aXBlci5wYXJhbXM7XG4gICAgaWYgKCF0aHVtYnMgfHwgIXRodW1icy5zd2lwZXIpIHJldHVybjtcbiAgICBpbml0KCk7XG4gICAgdXBkYXRlKHRydWUpO1xuICB9KTtcbiAgb24oJ3NsaWRlQ2hhbmdlIHVwZGF0ZSByZXNpemUgb2JzZXJ2ZXJVcGRhdGUnLCAoKSA9PiB7XG4gICAgaWYgKCFzd2lwZXIudGh1bWJzLnN3aXBlcikgcmV0dXJuO1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbiAgb24oJ3NldFRyYW5zaXRpb24nLCAoX3MsIGR1cmF0aW9uKSA9PiB7XG4gICAgY29uc3QgdGh1bWJzU3dpcGVyID0gc3dpcGVyLnRodW1icy5zd2lwZXI7XG4gICAgaWYgKCF0aHVtYnNTd2lwZXIpIHJldHVybjtcbiAgICB0aHVtYnNTd2lwZXIuc2V0VHJhbnNpdGlvbihkdXJhdGlvbik7XG4gIH0pO1xuICBvbignYmVmb3JlRGVzdHJveScsICgpID0+IHtcbiAgICBjb25zdCB0aHVtYnNTd2lwZXIgPSBzd2lwZXIudGh1bWJzLnN3aXBlcjtcbiAgICBpZiAoIXRodW1ic1N3aXBlcikgcmV0dXJuO1xuXG4gICAgaWYgKHN3aXBlckNyZWF0ZWQgJiYgdGh1bWJzU3dpcGVyKSB7XG4gICAgICB0aHVtYnNTd2lwZXIuZGVzdHJveSgpO1xuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5hc3NpZ24oc3dpcGVyLnRodW1icywge1xuICAgIGluaXQsXG4gICAgdXBkYXRlXG4gIH0pO1xufSIsImltcG9ydCAkIGZyb20gJy4uLy4uL3NoYXJlZC9kb20uanMnO1xuaW1wb3J0IHsgc2V0Q1NTUHJvcGVydHkgfSBmcm9tICcuLi8uLi9zaGFyZWQvdXRpbHMuanMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmlydHVhbCh7XG4gIHN3aXBlcixcbiAgZXh0ZW5kUGFyYW1zLFxuICBvblxufSkge1xuICBleHRlbmRQYXJhbXMoe1xuICAgIHZpcnR1YWw6IHtcbiAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgc2xpZGVzOiBbXSxcbiAgICAgIGNhY2hlOiB0cnVlLFxuICAgICAgcmVuZGVyU2xpZGU6IG51bGwsXG4gICAgICByZW5kZXJFeHRlcm5hbDogbnVsbCxcbiAgICAgIHJlbmRlckV4dGVybmFsVXBkYXRlOiB0cnVlLFxuICAgICAgYWRkU2xpZGVzQmVmb3JlOiAwLFxuICAgICAgYWRkU2xpZGVzQWZ0ZXI6IDBcbiAgICB9XG4gIH0pO1xuICBzd2lwZXIudmlydHVhbCA9IHtcbiAgICBjYWNoZToge30sXG4gICAgZnJvbTogdW5kZWZpbmVkLFxuICAgIHRvOiB1bmRlZmluZWQsXG4gICAgc2xpZGVzOiBbXSxcbiAgICBvZmZzZXQ6IDAsXG4gICAgc2xpZGVzR3JpZDogW11cbiAgfTtcblxuICBmdW5jdGlvbiByZW5kZXJTbGlkZShzbGlkZSwgaW5kZXgpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLnZpcnR1YWw7XG5cbiAgICBpZiAocGFyYW1zLmNhY2hlICYmIHN3aXBlci52aXJ0dWFsLmNhY2hlW2luZGV4XSkge1xuICAgICAgcmV0dXJuIHN3aXBlci52aXJ0dWFsLmNhY2hlW2luZGV4XTtcbiAgICB9XG5cbiAgICBjb25zdCAkc2xpZGVFbCA9IHBhcmFtcy5yZW5kZXJTbGlkZSA/ICQocGFyYW1zLnJlbmRlclNsaWRlLmNhbGwoc3dpcGVyLCBzbGlkZSwgaW5kZXgpKSA6ICQoYDxkaXYgY2xhc3M9XCIke3N3aXBlci5wYXJhbXMuc2xpZGVDbGFzc31cIiBkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cIiR7aW5kZXh9XCI+JHtzbGlkZX08L2Rpdj5gKTtcbiAgICBpZiAoISRzbGlkZUVsLmF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JykpICRzbGlkZUVsLmF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JywgaW5kZXgpO1xuICAgIGlmIChwYXJhbXMuY2FjaGUpIHN3aXBlci52aXJ0dWFsLmNhY2hlW2luZGV4XSA9ICRzbGlkZUVsO1xuICAgIHJldHVybiAkc2xpZGVFbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZShmb3JjZSkge1xuICAgIGNvbnN0IHtcbiAgICAgIHNsaWRlc1BlclZpZXcsXG4gICAgICBzbGlkZXNQZXJHcm91cCxcbiAgICAgIGNlbnRlcmVkU2xpZGVzXG4gICAgfSA9IHN3aXBlci5wYXJhbXM7XG4gICAgY29uc3Qge1xuICAgICAgYWRkU2xpZGVzQmVmb3JlLFxuICAgICAgYWRkU2xpZGVzQWZ0ZXJcbiAgICB9ID0gc3dpcGVyLnBhcmFtcy52aXJ0dWFsO1xuICAgIGNvbnN0IHtcbiAgICAgIGZyb206IHByZXZpb3VzRnJvbSxcbiAgICAgIHRvOiBwcmV2aW91c1RvLFxuICAgICAgc2xpZGVzLFxuICAgICAgc2xpZGVzR3JpZDogcHJldmlvdXNTbGlkZXNHcmlkLFxuICAgICAgb2Zmc2V0OiBwcmV2aW91c09mZnNldFxuICAgIH0gPSBzd2lwZXIudmlydHVhbDtcbiAgICBzd2lwZXIudXBkYXRlQWN0aXZlSW5kZXgoKTtcbiAgICBjb25zdCBhY3RpdmVJbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleCB8fCAwO1xuICAgIGxldCBvZmZzZXRQcm9wO1xuICAgIGlmIChzd2lwZXIucnRsVHJhbnNsYXRlKSBvZmZzZXRQcm9wID0gJ3JpZ2h0JztlbHNlIG9mZnNldFByb3AgPSBzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyAnbGVmdCcgOiAndG9wJztcbiAgICBsZXQgc2xpZGVzQWZ0ZXI7XG4gICAgbGV0IHNsaWRlc0JlZm9yZTtcblxuICAgIGlmIChjZW50ZXJlZFNsaWRlcykge1xuICAgICAgc2xpZGVzQWZ0ZXIgPSBNYXRoLmZsb29yKHNsaWRlc1BlclZpZXcgLyAyKSArIHNsaWRlc1Blckdyb3VwICsgYWRkU2xpZGVzQWZ0ZXI7XG4gICAgICBzbGlkZXNCZWZvcmUgPSBNYXRoLmZsb29yKHNsaWRlc1BlclZpZXcgLyAyKSArIHNsaWRlc1Blckdyb3VwICsgYWRkU2xpZGVzQmVmb3JlO1xuICAgIH0gZWxzZSB7XG4gICAgICBzbGlkZXNBZnRlciA9IHNsaWRlc1BlclZpZXcgKyAoc2xpZGVzUGVyR3JvdXAgLSAxKSArIGFkZFNsaWRlc0FmdGVyO1xuICAgICAgc2xpZGVzQmVmb3JlID0gc2xpZGVzUGVyR3JvdXAgKyBhZGRTbGlkZXNCZWZvcmU7XG4gICAgfVxuXG4gICAgY29uc3QgZnJvbSA9IE1hdGgubWF4KChhY3RpdmVJbmRleCB8fCAwKSAtIHNsaWRlc0JlZm9yZSwgMCk7XG4gICAgY29uc3QgdG8gPSBNYXRoLm1pbigoYWN0aXZlSW5kZXggfHwgMCkgKyBzbGlkZXNBZnRlciwgc2xpZGVzLmxlbmd0aCAtIDEpO1xuICAgIGNvbnN0IG9mZnNldCA9IChzd2lwZXIuc2xpZGVzR3JpZFtmcm9tXSB8fCAwKSAtIChzd2lwZXIuc2xpZGVzR3JpZFswXSB8fCAwKTtcbiAgICBPYmplY3QuYXNzaWduKHN3aXBlci52aXJ0dWFsLCB7XG4gICAgICBmcm9tLFxuICAgICAgdG8sXG4gICAgICBvZmZzZXQsXG4gICAgICBzbGlkZXNHcmlkOiBzd2lwZXIuc2xpZGVzR3JpZFxuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gb25SZW5kZXJlZCgpIHtcbiAgICAgIHN3aXBlci51cGRhdGVTbGlkZXMoKTtcbiAgICAgIHN3aXBlci51cGRhdGVQcm9ncmVzcygpO1xuICAgICAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcblxuICAgICAgaWYgKHN3aXBlci5sYXp5ICYmIHN3aXBlci5wYXJhbXMubGF6eS5lbmFibGVkKSB7XG4gICAgICAgIHN3aXBlci5sYXp5LmxvYWQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocHJldmlvdXNGcm9tID09PSBmcm9tICYmIHByZXZpb3VzVG8gPT09IHRvICYmICFmb3JjZSkge1xuICAgICAgaWYgKHN3aXBlci5zbGlkZXNHcmlkICE9PSBwcmV2aW91c1NsaWRlc0dyaWQgJiYgb2Zmc2V0ICE9PSBwcmV2aW91c09mZnNldCkge1xuICAgICAgICBzd2lwZXIuc2xpZGVzLmNzcyhvZmZzZXRQcm9wLCBgJHtvZmZzZXR9cHhgKTtcbiAgICAgIH1cblxuICAgICAgc3dpcGVyLnVwZGF0ZVByb2dyZXNzKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMudmlydHVhbC5yZW5kZXJFeHRlcm5hbCkge1xuICAgICAgc3dpcGVyLnBhcmFtcy52aXJ0dWFsLnJlbmRlckV4dGVybmFsLmNhbGwoc3dpcGVyLCB7XG4gICAgICAgIG9mZnNldCxcbiAgICAgICAgZnJvbSxcbiAgICAgICAgdG8sXG4gICAgICAgIHNsaWRlczogZnVuY3Rpb24gZ2V0U2xpZGVzKCkge1xuICAgICAgICAgIGNvbnN0IHNsaWRlc1RvUmVuZGVyID0gW107XG5cbiAgICAgICAgICBmb3IgKGxldCBpID0gZnJvbTsgaSA8PSB0bzsgaSArPSAxKSB7XG4gICAgICAgICAgICBzbGlkZXNUb1JlbmRlci5wdXNoKHNsaWRlc1tpXSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHNsaWRlc1RvUmVuZGVyO1xuICAgICAgICB9KClcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy52aXJ0dWFsLnJlbmRlckV4dGVybmFsVXBkYXRlKSB7XG4gICAgICAgIG9uUmVuZGVyZWQoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHByZXBlbmRJbmRleGVzID0gW107XG4gICAgY29uc3QgYXBwZW5kSW5kZXhlcyA9IFtdO1xuXG4gICAgaWYgKGZvcmNlKSB7XG4gICAgICBzd2lwZXIuJHdyYXBwZXJFbC5maW5kKGAuJHtzd2lwZXIucGFyYW1zLnNsaWRlQ2xhc3N9YCkucmVtb3ZlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSBwcmV2aW91c0Zyb207IGkgPD0gcHJldmlvdXNUbzsgaSArPSAxKSB7XG4gICAgICAgIGlmIChpIDwgZnJvbSB8fCBpID4gdG8pIHtcbiAgICAgICAgICBzd2lwZXIuJHdyYXBwZXJFbC5maW5kKGAuJHtzd2lwZXIucGFyYW1zLnNsaWRlQ2xhc3N9W2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVwiJHtpfVwiXWApLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChpID49IGZyb20gJiYgaSA8PSB0bykge1xuICAgICAgICBpZiAodHlwZW9mIHByZXZpb3VzVG8gPT09ICd1bmRlZmluZWQnIHx8IGZvcmNlKSB7XG4gICAgICAgICAgYXBwZW5kSW5kZXhlcy5wdXNoKGkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChpID4gcHJldmlvdXNUbykgYXBwZW5kSW5kZXhlcy5wdXNoKGkpO1xuICAgICAgICAgIGlmIChpIDwgcHJldmlvdXNGcm9tKSBwcmVwZW5kSW5kZXhlcy5wdXNoKGkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgYXBwZW5kSW5kZXhlcy5mb3JFYWNoKGluZGV4ID0+IHtcbiAgICAgIHN3aXBlci4kd3JhcHBlckVsLmFwcGVuZChyZW5kZXJTbGlkZShzbGlkZXNbaW5kZXhdLCBpbmRleCkpO1xuICAgIH0pO1xuICAgIHByZXBlbmRJbmRleGVzLnNvcnQoKGEsIGIpID0+IGIgLSBhKS5mb3JFYWNoKGluZGV4ID0+IHtcbiAgICAgIHN3aXBlci4kd3JhcHBlckVsLnByZXBlbmQocmVuZGVyU2xpZGUoc2xpZGVzW2luZGV4XSwgaW5kZXgpKTtcbiAgICB9KTtcbiAgICBzd2lwZXIuJHdyYXBwZXJFbC5jaGlsZHJlbignLnN3aXBlci1zbGlkZScpLmNzcyhvZmZzZXRQcm9wLCBgJHtvZmZzZXR9cHhgKTtcbiAgICBvblJlbmRlcmVkKCk7XG4gIH1cblxuICBmdW5jdGlvbiBhcHBlbmRTbGlkZShzbGlkZXMpIHtcbiAgICBpZiAodHlwZW9mIHNsaWRlcyA9PT0gJ29iamVjdCcgJiYgJ2xlbmd0aCcgaW4gc2xpZGVzKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoc2xpZGVzW2ldKSBzd2lwZXIudmlydHVhbC5zbGlkZXMucHVzaChzbGlkZXNbaV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzd2lwZXIudmlydHVhbC5zbGlkZXMucHVzaChzbGlkZXMpO1xuICAgIH1cblxuICAgIHVwZGF0ZSh0cnVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByZXBlbmRTbGlkZShzbGlkZXMpIHtcbiAgICBjb25zdCBhY3RpdmVJbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleDtcbiAgICBsZXQgbmV3QWN0aXZlSW5kZXggPSBhY3RpdmVJbmRleCArIDE7XG4gICAgbGV0IG51bWJlck9mTmV3U2xpZGVzID0gMTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KHNsaWRlcykpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChzbGlkZXNbaV0pIHN3aXBlci52aXJ0dWFsLnNsaWRlcy51bnNoaWZ0KHNsaWRlc1tpXSk7XG4gICAgICB9XG5cbiAgICAgIG5ld0FjdGl2ZUluZGV4ID0gYWN0aXZlSW5kZXggKyBzbGlkZXMubGVuZ3RoO1xuICAgICAgbnVtYmVyT2ZOZXdTbGlkZXMgPSBzbGlkZXMubGVuZ3RoO1xuICAgIH0gZWxzZSB7XG4gICAgICBzd2lwZXIudmlydHVhbC5zbGlkZXMudW5zaGlmdChzbGlkZXMpO1xuICAgIH1cblxuICAgIGlmIChzd2lwZXIucGFyYW1zLnZpcnR1YWwuY2FjaGUpIHtcbiAgICAgIGNvbnN0IGNhY2hlID0gc3dpcGVyLnZpcnR1YWwuY2FjaGU7XG4gICAgICBjb25zdCBuZXdDYWNoZSA9IHt9O1xuICAgICAgT2JqZWN0LmtleXMoY2FjaGUpLmZvckVhY2goY2FjaGVkSW5kZXggPT4ge1xuICAgICAgICBjb25zdCAkY2FjaGVkRWwgPSBjYWNoZVtjYWNoZWRJbmRleF07XG4gICAgICAgIGNvbnN0IGNhY2hlZEVsSW5kZXggPSAkY2FjaGVkRWwuYXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKTtcblxuICAgICAgICBpZiAoY2FjaGVkRWxJbmRleCkge1xuICAgICAgICAgICRjYWNoZWRFbC5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcsIHBhcnNlSW50KGNhY2hlZEVsSW5kZXgsIDEwKSArIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV3Q2FjaGVbcGFyc2VJbnQoY2FjaGVkSW5kZXgsIDEwKSArIG51bWJlck9mTmV3U2xpZGVzXSA9ICRjYWNoZWRFbDtcbiAgICAgIH0pO1xuICAgICAgc3dpcGVyLnZpcnR1YWwuY2FjaGUgPSBuZXdDYWNoZTtcbiAgICB9XG5cbiAgICB1cGRhdGUodHJ1ZSk7XG4gICAgc3dpcGVyLnNsaWRlVG8obmV3QWN0aXZlSW5kZXgsIDApO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlU2xpZGUoc2xpZGVzSW5kZXhlcykge1xuICAgIGlmICh0eXBlb2Ygc2xpZGVzSW5kZXhlcyA9PT0gJ3VuZGVmaW5lZCcgfHwgc2xpZGVzSW5kZXhlcyA9PT0gbnVsbCkgcmV0dXJuO1xuICAgIGxldCBhY3RpdmVJbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleDtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KHNsaWRlc0luZGV4ZXMpKSB7XG4gICAgICBmb3IgKGxldCBpID0gc2xpZGVzSW5kZXhlcy5sZW5ndGggLSAxOyBpID49IDA7IGkgLT0gMSkge1xuICAgICAgICBzd2lwZXIudmlydHVhbC5zbGlkZXMuc3BsaWNlKHNsaWRlc0luZGV4ZXNbaV0sIDEpO1xuXG4gICAgICAgIGlmIChzd2lwZXIucGFyYW1zLnZpcnR1YWwuY2FjaGUpIHtcbiAgICAgICAgICBkZWxldGUgc3dpcGVyLnZpcnR1YWwuY2FjaGVbc2xpZGVzSW5kZXhlc1tpXV07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2xpZGVzSW5kZXhlc1tpXSA8IGFjdGl2ZUluZGV4KSBhY3RpdmVJbmRleCAtPSAxO1xuICAgICAgICBhY3RpdmVJbmRleCA9IE1hdGgubWF4KGFjdGl2ZUluZGV4LCAwKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc3dpcGVyLnZpcnR1YWwuc2xpZGVzLnNwbGljZShzbGlkZXNJbmRleGVzLCAxKTtcblxuICAgICAgaWYgKHN3aXBlci5wYXJhbXMudmlydHVhbC5jYWNoZSkge1xuICAgICAgICBkZWxldGUgc3dpcGVyLnZpcnR1YWwuY2FjaGVbc2xpZGVzSW5kZXhlc107XG4gICAgICB9XG5cbiAgICAgIGlmIChzbGlkZXNJbmRleGVzIDwgYWN0aXZlSW5kZXgpIGFjdGl2ZUluZGV4IC09IDE7XG4gICAgICBhY3RpdmVJbmRleCA9IE1hdGgubWF4KGFjdGl2ZUluZGV4LCAwKTtcbiAgICB9XG5cbiAgICB1cGRhdGUodHJ1ZSk7XG4gICAgc3dpcGVyLnNsaWRlVG8oYWN0aXZlSW5kZXgsIDApO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlQWxsU2xpZGVzKCkge1xuICAgIHN3aXBlci52aXJ0dWFsLnNsaWRlcyA9IFtdO1xuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMudmlydHVhbC5jYWNoZSkge1xuICAgICAgc3dpcGVyLnZpcnR1YWwuY2FjaGUgPSB7fTtcbiAgICB9XG5cbiAgICB1cGRhdGUodHJ1ZSk7XG4gICAgc3dpcGVyLnNsaWRlVG8oMCwgMCk7XG4gIH1cblxuICBvbignYmVmb3JlSW5pdCcsICgpID0+IHtcbiAgICBpZiAoIXN3aXBlci5wYXJhbXMudmlydHVhbC5lbmFibGVkKSByZXR1cm47XG4gICAgc3dpcGVyLnZpcnR1YWwuc2xpZGVzID0gc3dpcGVyLnBhcmFtcy52aXJ0dWFsLnNsaWRlcztcbiAgICBzd2lwZXIuY2xhc3NOYW1lcy5wdXNoKGAke3N3aXBlci5wYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzc312aXJ0dWFsYCk7XG4gICAgc3dpcGVyLnBhcmFtcy53YXRjaFNsaWRlc1Byb2dyZXNzID0gdHJ1ZTtcbiAgICBzd2lwZXIub3JpZ2luYWxQYXJhbXMud2F0Y2hTbGlkZXNQcm9ncmVzcyA9IHRydWU7XG5cbiAgICBpZiAoIXN3aXBlci5wYXJhbXMuaW5pdGlhbFNsaWRlKSB7XG4gICAgICB1cGRhdGUoKTtcbiAgICB9XG4gIH0pO1xuICBvbignc2V0VHJhbnNsYXRlJywgKCkgPT4ge1xuICAgIGlmICghc3dpcGVyLnBhcmFtcy52aXJ0dWFsLmVuYWJsZWQpIHJldHVybjtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG4gIG9uKCdpbml0IHVwZGF0ZSByZXNpemUnLCAoKSA9PiB7XG4gICAgaWYgKCFzd2lwZXIucGFyYW1zLnZpcnR1YWwuZW5hYmxlZCkgcmV0dXJuO1xuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMuY3NzTW9kZSkge1xuICAgICAgc2V0Q1NTUHJvcGVydHkoc3dpcGVyLndyYXBwZXJFbCwgJy0tc3dpcGVyLXZpcnR1YWwtc2l6ZScsIGAke3N3aXBlci52aXJ0dWFsU2l6ZX1weGApO1xuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5hc3NpZ24oc3dpcGVyLnZpcnR1YWwsIHtcbiAgICBhcHBlbmRTbGlkZSxcbiAgICBwcmVwZW5kU2xpZGUsXG4gICAgcmVtb3ZlU2xpZGUsXG4gICAgcmVtb3ZlQWxsU2xpZGVzLFxuICAgIHVwZGF0ZVxuICB9KTtcbn0iLCJpbXBvcnQgeyBnZXRXaW5kb3cgfSBmcm9tICdzc3Itd2luZG93JztcbmltcG9ydCAkIGZyb20gJy4uLy4uL3NoYXJlZC9kb20uanMnO1xuaW1wb3J0IHsgZ2V0VHJhbnNsYXRlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3V0aWxzLmpzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFpvb20oe1xuICBzd2lwZXIsXG4gIGV4dGVuZFBhcmFtcyxcbiAgb24sXG4gIGVtaXRcbn0pIHtcbiAgY29uc3Qgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gIGV4dGVuZFBhcmFtcyh7XG4gICAgem9vbToge1xuICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICBtYXhSYXRpbzogMyxcbiAgICAgIG1pblJhdGlvOiAxLFxuICAgICAgdG9nZ2xlOiB0cnVlLFxuICAgICAgY29udGFpbmVyQ2xhc3M6ICdzd2lwZXItem9vbS1jb250YWluZXInLFxuICAgICAgem9vbWVkU2xpZGVDbGFzczogJ3N3aXBlci1zbGlkZS16b29tZWQnXG4gICAgfVxuICB9KTtcbiAgc3dpcGVyLnpvb20gPSB7XG4gICAgZW5hYmxlZDogZmFsc2VcbiAgfTtcbiAgbGV0IGN1cnJlbnRTY2FsZSA9IDE7XG4gIGxldCBpc1NjYWxpbmcgPSBmYWxzZTtcbiAgbGV0IGdlc3R1cmVzRW5hYmxlZDtcbiAgbGV0IGZha2VHZXN0dXJlVG91Y2hlZDtcbiAgbGV0IGZha2VHZXN0dXJlTW92ZWQ7XG4gIGNvbnN0IGdlc3R1cmUgPSB7XG4gICAgJHNsaWRlRWw6IHVuZGVmaW5lZCxcbiAgICBzbGlkZVdpZHRoOiB1bmRlZmluZWQsXG4gICAgc2xpZGVIZWlnaHQ6IHVuZGVmaW5lZCxcbiAgICAkaW1hZ2VFbDogdW5kZWZpbmVkLFxuICAgICRpbWFnZVdyYXBFbDogdW5kZWZpbmVkLFxuICAgIG1heFJhdGlvOiAzXG4gIH07XG4gIGNvbnN0IGltYWdlID0ge1xuICAgIGlzVG91Y2hlZDogdW5kZWZpbmVkLFxuICAgIGlzTW92ZWQ6IHVuZGVmaW5lZCxcbiAgICBjdXJyZW50WDogdW5kZWZpbmVkLFxuICAgIGN1cnJlbnRZOiB1bmRlZmluZWQsXG4gICAgbWluWDogdW5kZWZpbmVkLFxuICAgIG1pblk6IHVuZGVmaW5lZCxcbiAgICBtYXhYOiB1bmRlZmluZWQsXG4gICAgbWF4WTogdW5kZWZpbmVkLFxuICAgIHdpZHRoOiB1bmRlZmluZWQsXG4gICAgaGVpZ2h0OiB1bmRlZmluZWQsXG4gICAgc3RhcnRYOiB1bmRlZmluZWQsXG4gICAgc3RhcnRZOiB1bmRlZmluZWQsXG4gICAgdG91Y2hlc1N0YXJ0OiB7fSxcbiAgICB0b3VjaGVzQ3VycmVudDoge31cbiAgfTtcbiAgY29uc3QgdmVsb2NpdHkgPSB7XG4gICAgeDogdW5kZWZpbmVkLFxuICAgIHk6IHVuZGVmaW5lZCxcbiAgICBwcmV2UG9zaXRpb25YOiB1bmRlZmluZWQsXG4gICAgcHJldlBvc2l0aW9uWTogdW5kZWZpbmVkLFxuICAgIHByZXZUaW1lOiB1bmRlZmluZWRcbiAgfTtcbiAgbGV0IHNjYWxlID0gMTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN3aXBlci56b29tLCAnc2NhbGUnLCB7XG4gICAgZ2V0KCkge1xuICAgICAgcmV0dXJuIHNjYWxlO1xuICAgIH0sXG5cbiAgICBzZXQodmFsdWUpIHtcbiAgICAgIGlmIChzY2FsZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgY29uc3QgaW1hZ2VFbCA9IGdlc3R1cmUuJGltYWdlRWwgPyBnZXN0dXJlLiRpbWFnZUVsWzBdIDogdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCBzbGlkZUVsID0gZ2VzdHVyZS4kc2xpZGVFbCA/IGdlc3R1cmUuJHNsaWRlRWxbMF0gOiB1bmRlZmluZWQ7XG4gICAgICAgIGVtaXQoJ3pvb21DaGFuZ2UnLCB2YWx1ZSwgaW1hZ2VFbCwgc2xpZGVFbCk7XG4gICAgICB9XG5cbiAgICAgIHNjYWxlID0gdmFsdWU7XG4gICAgfVxuXG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGdldERpc3RhbmNlQmV0d2VlblRvdWNoZXMoZSkge1xuICAgIGlmIChlLnRhcmdldFRvdWNoZXMubGVuZ3RoIDwgMikgcmV0dXJuIDE7XG4gICAgY29uc3QgeDEgPSBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVg7XG4gICAgY29uc3QgeTEgPSBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVk7XG4gICAgY29uc3QgeDIgPSBlLnRhcmdldFRvdWNoZXNbMV0ucGFnZVg7XG4gICAgY29uc3QgeTIgPSBlLnRhcmdldFRvdWNoZXNbMV0ucGFnZVk7XG4gICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLnNxcnQoKHgyIC0geDEpICoqIDIgKyAoeTIgLSB5MSkgKiogMik7XG4gICAgcmV0dXJuIGRpc3RhbmNlO1xuICB9IC8vIEV2ZW50c1xuXG5cbiAgZnVuY3Rpb24gb25HZXN0dXJlU3RhcnQoZSkge1xuICAgIGNvbnN0IHN1cHBvcnQgPSBzd2lwZXIuc3VwcG9ydDtcbiAgICBjb25zdCBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLnpvb207XG4gICAgZmFrZUdlc3R1cmVUb3VjaGVkID0gZmFsc2U7XG4gICAgZmFrZUdlc3R1cmVNb3ZlZCA9IGZhbHNlO1xuXG4gICAgaWYgKCFzdXBwb3J0Lmdlc3R1cmVzKSB7XG4gICAgICBpZiAoZS50eXBlICE9PSAndG91Y2hzdGFydCcgfHwgZS50eXBlID09PSAndG91Y2hzdGFydCcgJiYgZS50YXJnZXRUb3VjaGVzLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBmYWtlR2VzdHVyZVRvdWNoZWQgPSB0cnVlO1xuICAgICAgZ2VzdHVyZS5zY2FsZVN0YXJ0ID0gZ2V0RGlzdGFuY2VCZXR3ZWVuVG91Y2hlcyhlKTtcbiAgICB9XG5cbiAgICBpZiAoIWdlc3R1cmUuJHNsaWRlRWwgfHwgIWdlc3R1cmUuJHNsaWRlRWwubGVuZ3RoKSB7XG4gICAgICBnZXN0dXJlLiRzbGlkZUVsID0gJChlLnRhcmdldCkuY2xvc2VzdChgLiR7c3dpcGVyLnBhcmFtcy5zbGlkZUNsYXNzfWApO1xuICAgICAgaWYgKGdlc3R1cmUuJHNsaWRlRWwubGVuZ3RoID09PSAwKSBnZXN0dXJlLiRzbGlkZUVsID0gc3dpcGVyLnNsaWRlcy5lcShzd2lwZXIuYWN0aXZlSW5kZXgpO1xuICAgICAgZ2VzdHVyZS4kaW1hZ2VFbCA9IGdlc3R1cmUuJHNsaWRlRWwuZmluZChgLiR7cGFyYW1zLmNvbnRhaW5lckNsYXNzfWApLmVxKDApLmZpbmQoJ2ltZywgc3ZnLCBjYW52YXMsIHBpY3R1cmUsIC5zd2lwZXItem9vbS10YXJnZXQnKTtcbiAgICAgIGdlc3R1cmUuJGltYWdlV3JhcEVsID0gZ2VzdHVyZS4kaW1hZ2VFbC5wYXJlbnQoYC4ke3BhcmFtcy5jb250YWluZXJDbGFzc31gKTtcbiAgICAgIGdlc3R1cmUubWF4UmF0aW8gPSBnZXN0dXJlLiRpbWFnZVdyYXBFbC5hdHRyKCdkYXRhLXN3aXBlci16b29tJykgfHwgcGFyYW1zLm1heFJhdGlvO1xuXG4gICAgICBpZiAoZ2VzdHVyZS4kaW1hZ2VXcmFwRWwubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGdlc3R1cmUuJGltYWdlRWwgPSB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZ2VzdHVyZS4kaW1hZ2VFbCkge1xuICAgICAgZ2VzdHVyZS4kaW1hZ2VFbC50cmFuc2l0aW9uKDApO1xuICAgIH1cblxuICAgIGlzU2NhbGluZyA9IHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBvbkdlc3R1cmVDaGFuZ2UoZSkge1xuICAgIGNvbnN0IHN1cHBvcnQgPSBzd2lwZXIuc3VwcG9ydDtcbiAgICBjb25zdCBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLnpvb207XG4gICAgY29uc3Qgem9vbSA9IHN3aXBlci56b29tO1xuXG4gICAgaWYgKCFzdXBwb3J0Lmdlc3R1cmVzKSB7XG4gICAgICBpZiAoZS50eXBlICE9PSAndG91Y2htb3ZlJyB8fCBlLnR5cGUgPT09ICd0b3VjaG1vdmUnICYmIGUudGFyZ2V0VG91Y2hlcy5sZW5ndGggPCAyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZmFrZUdlc3R1cmVNb3ZlZCA9IHRydWU7XG4gICAgICBnZXN0dXJlLnNjYWxlTW92ZSA9IGdldERpc3RhbmNlQmV0d2VlblRvdWNoZXMoZSk7XG4gICAgfVxuXG4gICAgaWYgKCFnZXN0dXJlLiRpbWFnZUVsIHx8IGdlc3R1cmUuJGltYWdlRWwubGVuZ3RoID09PSAwKSB7XG4gICAgICBpZiAoZS50eXBlID09PSAnZ2VzdHVyZWNoYW5nZScpIG9uR2VzdHVyZVN0YXJ0KGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChzdXBwb3J0Lmdlc3R1cmVzKSB7XG4gICAgICB6b29tLnNjYWxlID0gZS5zY2FsZSAqIGN1cnJlbnRTY2FsZTtcbiAgICB9IGVsc2Uge1xuICAgICAgem9vbS5zY2FsZSA9IGdlc3R1cmUuc2NhbGVNb3ZlIC8gZ2VzdHVyZS5zY2FsZVN0YXJ0ICogY3VycmVudFNjYWxlO1xuICAgIH1cblxuICAgIGlmICh6b29tLnNjYWxlID4gZ2VzdHVyZS5tYXhSYXRpbykge1xuICAgICAgem9vbS5zY2FsZSA9IGdlc3R1cmUubWF4UmF0aW8gLSAxICsgKHpvb20uc2NhbGUgLSBnZXN0dXJlLm1heFJhdGlvICsgMSkgKiogMC41O1xuICAgIH1cblxuICAgIGlmICh6b29tLnNjYWxlIDwgcGFyYW1zLm1pblJhdGlvKSB7XG4gICAgICB6b29tLnNjYWxlID0gcGFyYW1zLm1pblJhdGlvICsgMSAtIChwYXJhbXMubWluUmF0aW8gLSB6b29tLnNjYWxlICsgMSkgKiogMC41O1xuICAgIH1cblxuICAgIGdlc3R1cmUuJGltYWdlRWwudHJhbnNmb3JtKGB0cmFuc2xhdGUzZCgwLDAsMCkgc2NhbGUoJHt6b29tLnNjYWxlfSlgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uR2VzdHVyZUVuZChlKSB7XG4gICAgY29uc3QgZGV2aWNlID0gc3dpcGVyLmRldmljZTtcbiAgICBjb25zdCBzdXBwb3J0ID0gc3dpcGVyLnN1cHBvcnQ7XG4gICAgY29uc3QgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy56b29tO1xuICAgIGNvbnN0IHpvb20gPSBzd2lwZXIuem9vbTtcblxuICAgIGlmICghc3VwcG9ydC5nZXN0dXJlcykge1xuICAgICAgaWYgKCFmYWtlR2VzdHVyZVRvdWNoZWQgfHwgIWZha2VHZXN0dXJlTW92ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoZS50eXBlICE9PSAndG91Y2hlbmQnIHx8IGUudHlwZSA9PT0gJ3RvdWNoZW5kJyAmJiBlLmNoYW5nZWRUb3VjaGVzLmxlbmd0aCA8IDIgJiYgIWRldmljZS5hbmRyb2lkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZmFrZUdlc3R1cmVUb3VjaGVkID0gZmFsc2U7XG4gICAgICBmYWtlR2VzdHVyZU1vdmVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCFnZXN0dXJlLiRpbWFnZUVsIHx8IGdlc3R1cmUuJGltYWdlRWwubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgem9vbS5zY2FsZSA9IE1hdGgubWF4KE1hdGgubWluKHpvb20uc2NhbGUsIGdlc3R1cmUubWF4UmF0aW8pLCBwYXJhbXMubWluUmF0aW8pO1xuICAgIGdlc3R1cmUuJGltYWdlRWwudHJhbnNpdGlvbihzd2lwZXIucGFyYW1zLnNwZWVkKS50cmFuc2Zvcm0oYHRyYW5zbGF0ZTNkKDAsMCwwKSBzY2FsZSgke3pvb20uc2NhbGV9KWApO1xuICAgIGN1cnJlbnRTY2FsZSA9IHpvb20uc2NhbGU7XG4gICAgaXNTY2FsaW5nID0gZmFsc2U7XG4gICAgaWYgKHpvb20uc2NhbGUgPT09IDEpIGdlc3R1cmUuJHNsaWRlRWwgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBvblRvdWNoU3RhcnQoZSkge1xuICAgIGNvbnN0IGRldmljZSA9IHN3aXBlci5kZXZpY2U7XG4gICAgaWYgKCFnZXN0dXJlLiRpbWFnZUVsIHx8IGdlc3R1cmUuJGltYWdlRWwubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgaWYgKGltYWdlLmlzVG91Y2hlZCkgcmV0dXJuO1xuICAgIGlmIChkZXZpY2UuYW5kcm9pZCAmJiBlLmNhbmNlbGFibGUpIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpbWFnZS5pc1RvdWNoZWQgPSB0cnVlO1xuICAgIGltYWdlLnRvdWNoZXNTdGFydC54ID0gZS50eXBlID09PSAndG91Y2hzdGFydCcgPyBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVggOiBlLnBhZ2VYO1xuICAgIGltYWdlLnRvdWNoZXNTdGFydC55ID0gZS50eXBlID09PSAndG91Y2hzdGFydCcgPyBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVkgOiBlLnBhZ2VZO1xuICB9XG5cbiAgZnVuY3Rpb24gb25Ub3VjaE1vdmUoZSkge1xuICAgIGNvbnN0IHpvb20gPSBzd2lwZXIuem9vbTtcbiAgICBpZiAoIWdlc3R1cmUuJGltYWdlRWwgfHwgZ2VzdHVyZS4kaW1hZ2VFbC5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICBzd2lwZXIuYWxsb3dDbGljayA9IGZhbHNlO1xuICAgIGlmICghaW1hZ2UuaXNUb3VjaGVkIHx8ICFnZXN0dXJlLiRzbGlkZUVsKSByZXR1cm47XG5cbiAgICBpZiAoIWltYWdlLmlzTW92ZWQpIHtcbiAgICAgIGltYWdlLndpZHRoID0gZ2VzdHVyZS4kaW1hZ2VFbFswXS5vZmZzZXRXaWR0aDtcbiAgICAgIGltYWdlLmhlaWdodCA9IGdlc3R1cmUuJGltYWdlRWxbMF0ub2Zmc2V0SGVpZ2h0O1xuICAgICAgaW1hZ2Uuc3RhcnRYID0gZ2V0VHJhbnNsYXRlKGdlc3R1cmUuJGltYWdlV3JhcEVsWzBdLCAneCcpIHx8IDA7XG4gICAgICBpbWFnZS5zdGFydFkgPSBnZXRUcmFuc2xhdGUoZ2VzdHVyZS4kaW1hZ2VXcmFwRWxbMF0sICd5JykgfHwgMDtcbiAgICAgIGdlc3R1cmUuc2xpZGVXaWR0aCA9IGdlc3R1cmUuJHNsaWRlRWxbMF0ub2Zmc2V0V2lkdGg7XG4gICAgICBnZXN0dXJlLnNsaWRlSGVpZ2h0ID0gZ2VzdHVyZS4kc2xpZGVFbFswXS5vZmZzZXRIZWlnaHQ7XG4gICAgICBnZXN0dXJlLiRpbWFnZVdyYXBFbC50cmFuc2l0aW9uKDApO1xuICAgIH0gLy8gRGVmaW5lIGlmIHdlIG5lZWQgaW1hZ2UgZHJhZ1xuXG5cbiAgICBjb25zdCBzY2FsZWRXaWR0aCA9IGltYWdlLndpZHRoICogem9vbS5zY2FsZTtcbiAgICBjb25zdCBzY2FsZWRIZWlnaHQgPSBpbWFnZS5oZWlnaHQgKiB6b29tLnNjYWxlO1xuICAgIGlmIChzY2FsZWRXaWR0aCA8IGdlc3R1cmUuc2xpZGVXaWR0aCAmJiBzY2FsZWRIZWlnaHQgPCBnZXN0dXJlLnNsaWRlSGVpZ2h0KSByZXR1cm47XG4gICAgaW1hZ2UubWluWCA9IE1hdGgubWluKGdlc3R1cmUuc2xpZGVXaWR0aCAvIDIgLSBzY2FsZWRXaWR0aCAvIDIsIDApO1xuICAgIGltYWdlLm1heFggPSAtaW1hZ2UubWluWDtcbiAgICBpbWFnZS5taW5ZID0gTWF0aC5taW4oZ2VzdHVyZS5zbGlkZUhlaWdodCAvIDIgLSBzY2FsZWRIZWlnaHQgLyAyLCAwKTtcbiAgICBpbWFnZS5tYXhZID0gLWltYWdlLm1pblk7XG4gICAgaW1hZ2UudG91Y2hlc0N1cnJlbnQueCA9IGUudHlwZSA9PT0gJ3RvdWNobW92ZScgPyBlLnRhcmdldFRvdWNoZXNbMF0ucGFnZVggOiBlLnBhZ2VYO1xuICAgIGltYWdlLnRvdWNoZXNDdXJyZW50LnkgPSBlLnR5cGUgPT09ICd0b3VjaG1vdmUnID8gZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VZIDogZS5wYWdlWTtcblxuICAgIGlmICghaW1hZ2UuaXNNb3ZlZCAmJiAhaXNTY2FsaW5nKSB7XG4gICAgICBpZiAoc3dpcGVyLmlzSG9yaXpvbnRhbCgpICYmIChNYXRoLmZsb29yKGltYWdlLm1pblgpID09PSBNYXRoLmZsb29yKGltYWdlLnN0YXJ0WCkgJiYgaW1hZ2UudG91Y2hlc0N1cnJlbnQueCA8IGltYWdlLnRvdWNoZXNTdGFydC54IHx8IE1hdGguZmxvb3IoaW1hZ2UubWF4WCkgPT09IE1hdGguZmxvb3IoaW1hZ2Uuc3RhcnRYKSAmJiBpbWFnZS50b3VjaGVzQ3VycmVudC54ID4gaW1hZ2UudG91Y2hlc1N0YXJ0LngpKSB7XG4gICAgICAgIGltYWdlLmlzVG91Y2hlZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghc3dpcGVyLmlzSG9yaXpvbnRhbCgpICYmIChNYXRoLmZsb29yKGltYWdlLm1pblkpID09PSBNYXRoLmZsb29yKGltYWdlLnN0YXJ0WSkgJiYgaW1hZ2UudG91Y2hlc0N1cnJlbnQueSA8IGltYWdlLnRvdWNoZXNTdGFydC55IHx8IE1hdGguZmxvb3IoaW1hZ2UubWF4WSkgPT09IE1hdGguZmxvb3IoaW1hZ2Uuc3RhcnRZKSAmJiBpbWFnZS50b3VjaGVzQ3VycmVudC55ID4gaW1hZ2UudG91Y2hlc1N0YXJ0LnkpKSB7XG4gICAgICAgIGltYWdlLmlzVG91Y2hlZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGUuY2FuY2VsYWJsZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaW1hZ2UuaXNNb3ZlZCA9IHRydWU7XG4gICAgaW1hZ2UuY3VycmVudFggPSBpbWFnZS50b3VjaGVzQ3VycmVudC54IC0gaW1hZ2UudG91Y2hlc1N0YXJ0LnggKyBpbWFnZS5zdGFydFg7XG4gICAgaW1hZ2UuY3VycmVudFkgPSBpbWFnZS50b3VjaGVzQ3VycmVudC55IC0gaW1hZ2UudG91Y2hlc1N0YXJ0LnkgKyBpbWFnZS5zdGFydFk7XG5cbiAgICBpZiAoaW1hZ2UuY3VycmVudFggPCBpbWFnZS5taW5YKSB7XG4gICAgICBpbWFnZS5jdXJyZW50WCA9IGltYWdlLm1pblggKyAxIC0gKGltYWdlLm1pblggLSBpbWFnZS5jdXJyZW50WCArIDEpICoqIDAuODtcbiAgICB9XG5cbiAgICBpZiAoaW1hZ2UuY3VycmVudFggPiBpbWFnZS5tYXhYKSB7XG4gICAgICBpbWFnZS5jdXJyZW50WCA9IGltYWdlLm1heFggLSAxICsgKGltYWdlLmN1cnJlbnRYIC0gaW1hZ2UubWF4WCArIDEpICoqIDAuODtcbiAgICB9XG5cbiAgICBpZiAoaW1hZ2UuY3VycmVudFkgPCBpbWFnZS5taW5ZKSB7XG4gICAgICBpbWFnZS5jdXJyZW50WSA9IGltYWdlLm1pblkgKyAxIC0gKGltYWdlLm1pblkgLSBpbWFnZS5jdXJyZW50WSArIDEpICoqIDAuODtcbiAgICB9XG5cbiAgICBpZiAoaW1hZ2UuY3VycmVudFkgPiBpbWFnZS5tYXhZKSB7XG4gICAgICBpbWFnZS5jdXJyZW50WSA9IGltYWdlLm1heFkgLSAxICsgKGltYWdlLmN1cnJlbnRZIC0gaW1hZ2UubWF4WSArIDEpICoqIDAuODtcbiAgICB9IC8vIFZlbG9jaXR5XG5cblxuICAgIGlmICghdmVsb2NpdHkucHJldlBvc2l0aW9uWCkgdmVsb2NpdHkucHJldlBvc2l0aW9uWCA9IGltYWdlLnRvdWNoZXNDdXJyZW50Lng7XG4gICAgaWYgKCF2ZWxvY2l0eS5wcmV2UG9zaXRpb25ZKSB2ZWxvY2l0eS5wcmV2UG9zaXRpb25ZID0gaW1hZ2UudG91Y2hlc0N1cnJlbnQueTtcbiAgICBpZiAoIXZlbG9jaXR5LnByZXZUaW1lKSB2ZWxvY2l0eS5wcmV2VGltZSA9IERhdGUubm93KCk7XG4gICAgdmVsb2NpdHkueCA9IChpbWFnZS50b3VjaGVzQ3VycmVudC54IC0gdmVsb2NpdHkucHJldlBvc2l0aW9uWCkgLyAoRGF0ZS5ub3coKSAtIHZlbG9jaXR5LnByZXZUaW1lKSAvIDI7XG4gICAgdmVsb2NpdHkueSA9IChpbWFnZS50b3VjaGVzQ3VycmVudC55IC0gdmVsb2NpdHkucHJldlBvc2l0aW9uWSkgLyAoRGF0ZS5ub3coKSAtIHZlbG9jaXR5LnByZXZUaW1lKSAvIDI7XG4gICAgaWYgKE1hdGguYWJzKGltYWdlLnRvdWNoZXNDdXJyZW50LnggLSB2ZWxvY2l0eS5wcmV2UG9zaXRpb25YKSA8IDIpIHZlbG9jaXR5LnggPSAwO1xuICAgIGlmIChNYXRoLmFicyhpbWFnZS50b3VjaGVzQ3VycmVudC55IC0gdmVsb2NpdHkucHJldlBvc2l0aW9uWSkgPCAyKSB2ZWxvY2l0eS55ID0gMDtcbiAgICB2ZWxvY2l0eS5wcmV2UG9zaXRpb25YID0gaW1hZ2UudG91Y2hlc0N1cnJlbnQueDtcbiAgICB2ZWxvY2l0eS5wcmV2UG9zaXRpb25ZID0gaW1hZ2UudG91Y2hlc0N1cnJlbnQueTtcbiAgICB2ZWxvY2l0eS5wcmV2VGltZSA9IERhdGUubm93KCk7XG4gICAgZ2VzdHVyZS4kaW1hZ2VXcmFwRWwudHJhbnNmb3JtKGB0cmFuc2xhdGUzZCgke2ltYWdlLmN1cnJlbnRYfXB4LCAke2ltYWdlLmN1cnJlbnRZfXB4LDApYCk7XG4gIH1cblxuICBmdW5jdGlvbiBvblRvdWNoRW5kKCkge1xuICAgIGNvbnN0IHpvb20gPSBzd2lwZXIuem9vbTtcbiAgICBpZiAoIWdlc3R1cmUuJGltYWdlRWwgfHwgZ2VzdHVyZS4kaW1hZ2VFbC5sZW5ndGggPT09IDApIHJldHVybjtcblxuICAgIGlmICghaW1hZ2UuaXNUb3VjaGVkIHx8ICFpbWFnZS5pc01vdmVkKSB7XG4gICAgICBpbWFnZS5pc1RvdWNoZWQgPSBmYWxzZTtcbiAgICAgIGltYWdlLmlzTW92ZWQgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpbWFnZS5pc1RvdWNoZWQgPSBmYWxzZTtcbiAgICBpbWFnZS5pc01vdmVkID0gZmFsc2U7XG4gICAgbGV0IG1vbWVudHVtRHVyYXRpb25YID0gMzAwO1xuICAgIGxldCBtb21lbnR1bUR1cmF0aW9uWSA9IDMwMDtcbiAgICBjb25zdCBtb21lbnR1bURpc3RhbmNlWCA9IHZlbG9jaXR5LnggKiBtb21lbnR1bUR1cmF0aW9uWDtcbiAgICBjb25zdCBuZXdQb3NpdGlvblggPSBpbWFnZS5jdXJyZW50WCArIG1vbWVudHVtRGlzdGFuY2VYO1xuICAgIGNvbnN0IG1vbWVudHVtRGlzdGFuY2VZID0gdmVsb2NpdHkueSAqIG1vbWVudHVtRHVyYXRpb25ZO1xuICAgIGNvbnN0IG5ld1Bvc2l0aW9uWSA9IGltYWdlLmN1cnJlbnRZICsgbW9tZW50dW1EaXN0YW5jZVk7IC8vIEZpeCBkdXJhdGlvblxuXG4gICAgaWYgKHZlbG9jaXR5LnggIT09IDApIG1vbWVudHVtRHVyYXRpb25YID0gTWF0aC5hYnMoKG5ld1Bvc2l0aW9uWCAtIGltYWdlLmN1cnJlbnRYKSAvIHZlbG9jaXR5LngpO1xuICAgIGlmICh2ZWxvY2l0eS55ICE9PSAwKSBtb21lbnR1bUR1cmF0aW9uWSA9IE1hdGguYWJzKChuZXdQb3NpdGlvblkgLSBpbWFnZS5jdXJyZW50WSkgLyB2ZWxvY2l0eS55KTtcbiAgICBjb25zdCBtb21lbnR1bUR1cmF0aW9uID0gTWF0aC5tYXgobW9tZW50dW1EdXJhdGlvblgsIG1vbWVudHVtRHVyYXRpb25ZKTtcbiAgICBpbWFnZS5jdXJyZW50WCA9IG5ld1Bvc2l0aW9uWDtcbiAgICBpbWFnZS5jdXJyZW50WSA9IG5ld1Bvc2l0aW9uWTsgLy8gRGVmaW5lIGlmIHdlIG5lZWQgaW1hZ2UgZHJhZ1xuXG4gICAgY29uc3Qgc2NhbGVkV2lkdGggPSBpbWFnZS53aWR0aCAqIHpvb20uc2NhbGU7XG4gICAgY29uc3Qgc2NhbGVkSGVpZ2h0ID0gaW1hZ2UuaGVpZ2h0ICogem9vbS5zY2FsZTtcbiAgICBpbWFnZS5taW5YID0gTWF0aC5taW4oZ2VzdHVyZS5zbGlkZVdpZHRoIC8gMiAtIHNjYWxlZFdpZHRoIC8gMiwgMCk7XG4gICAgaW1hZ2UubWF4WCA9IC1pbWFnZS5taW5YO1xuICAgIGltYWdlLm1pblkgPSBNYXRoLm1pbihnZXN0dXJlLnNsaWRlSGVpZ2h0IC8gMiAtIHNjYWxlZEhlaWdodCAvIDIsIDApO1xuICAgIGltYWdlLm1heFkgPSAtaW1hZ2UubWluWTtcbiAgICBpbWFnZS5jdXJyZW50WCA9IE1hdGgubWF4KE1hdGgubWluKGltYWdlLmN1cnJlbnRYLCBpbWFnZS5tYXhYKSwgaW1hZ2UubWluWCk7XG4gICAgaW1hZ2UuY3VycmVudFkgPSBNYXRoLm1heChNYXRoLm1pbihpbWFnZS5jdXJyZW50WSwgaW1hZ2UubWF4WSksIGltYWdlLm1pblkpO1xuICAgIGdlc3R1cmUuJGltYWdlV3JhcEVsLnRyYW5zaXRpb24obW9tZW50dW1EdXJhdGlvbikudHJhbnNmb3JtKGB0cmFuc2xhdGUzZCgke2ltYWdlLmN1cnJlbnRYfXB4LCAke2ltYWdlLmN1cnJlbnRZfXB4LDApYCk7XG4gIH1cblxuICBmdW5jdGlvbiBvblRyYW5zaXRpb25FbmQoKSB7XG4gICAgY29uc3Qgem9vbSA9IHN3aXBlci56b29tO1xuXG4gICAgaWYgKGdlc3R1cmUuJHNsaWRlRWwgJiYgc3dpcGVyLnByZXZpb3VzSW5kZXggIT09IHN3aXBlci5hY3RpdmVJbmRleCkge1xuICAgICAgaWYgKGdlc3R1cmUuJGltYWdlRWwpIHtcbiAgICAgICAgZ2VzdHVyZS4kaW1hZ2VFbC50cmFuc2Zvcm0oJ3RyYW5zbGF0ZTNkKDAsMCwwKSBzY2FsZSgxKScpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZ2VzdHVyZS4kaW1hZ2VXcmFwRWwpIHtcbiAgICAgICAgZ2VzdHVyZS4kaW1hZ2VXcmFwRWwudHJhbnNmb3JtKCd0cmFuc2xhdGUzZCgwLDAsMCknKTtcbiAgICAgIH1cblxuICAgICAgem9vbS5zY2FsZSA9IDE7XG4gICAgICBjdXJyZW50U2NhbGUgPSAxO1xuICAgICAgZ2VzdHVyZS4kc2xpZGVFbCA9IHVuZGVmaW5lZDtcbiAgICAgIGdlc3R1cmUuJGltYWdlRWwgPSB1bmRlZmluZWQ7XG4gICAgICBnZXN0dXJlLiRpbWFnZVdyYXBFbCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB6b29tSW4oZSkge1xuICAgIGNvbnN0IHpvb20gPSBzd2lwZXIuem9vbTtcbiAgICBjb25zdCBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLnpvb207XG5cbiAgICBpZiAoIWdlc3R1cmUuJHNsaWRlRWwpIHtcbiAgICAgIGlmIChlICYmIGUudGFyZ2V0KSB7XG4gICAgICAgIGdlc3R1cmUuJHNsaWRlRWwgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KGAuJHtzd2lwZXIucGFyYW1zLnNsaWRlQ2xhc3N9YCk7XG4gICAgICB9XG5cbiAgICAgIGlmICghZ2VzdHVyZS4kc2xpZGVFbCkge1xuICAgICAgICBpZiAoc3dpcGVyLnBhcmFtcy52aXJ0dWFsICYmIHN3aXBlci5wYXJhbXMudmlydHVhbC5lbmFibGVkICYmIHN3aXBlci52aXJ0dWFsKSB7XG4gICAgICAgICAgZ2VzdHVyZS4kc2xpZGVFbCA9IHN3aXBlci4kd3JhcHBlckVsLmNoaWxkcmVuKGAuJHtzd2lwZXIucGFyYW1zLnNsaWRlQWN0aXZlQ2xhc3N9YCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZ2VzdHVyZS4kc2xpZGVFbCA9IHN3aXBlci5zbGlkZXMuZXEoc3dpcGVyLmFjdGl2ZUluZGV4KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBnZXN0dXJlLiRpbWFnZUVsID0gZ2VzdHVyZS4kc2xpZGVFbC5maW5kKGAuJHtwYXJhbXMuY29udGFpbmVyQ2xhc3N9YCkuZXEoMCkuZmluZCgnaW1nLCBzdmcsIGNhbnZhcywgcGljdHVyZSwgLnN3aXBlci16b29tLXRhcmdldCcpO1xuICAgICAgZ2VzdHVyZS4kaW1hZ2VXcmFwRWwgPSBnZXN0dXJlLiRpbWFnZUVsLnBhcmVudChgLiR7cGFyYW1zLmNvbnRhaW5lckNsYXNzfWApO1xuICAgIH1cblxuICAgIGlmICghZ2VzdHVyZS4kaW1hZ2VFbCB8fCBnZXN0dXJlLiRpbWFnZUVsLmxlbmd0aCA9PT0gMCB8fCAhZ2VzdHVyZS4kaW1hZ2VXcmFwRWwgfHwgZ2VzdHVyZS4kaW1hZ2VXcmFwRWwubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5jc3NNb2RlKSB7XG4gICAgICBzd2lwZXIud3JhcHBlckVsLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICBzd2lwZXIud3JhcHBlckVsLnN0eWxlLnRvdWNoQWN0aW9uID0gJ25vbmUnO1xuICAgIH1cblxuICAgIGdlc3R1cmUuJHNsaWRlRWwuYWRkQ2xhc3MoYCR7cGFyYW1zLnpvb21lZFNsaWRlQ2xhc3N9YCk7XG4gICAgbGV0IHRvdWNoWDtcbiAgICBsZXQgdG91Y2hZO1xuICAgIGxldCBvZmZzZXRYO1xuICAgIGxldCBvZmZzZXRZO1xuICAgIGxldCBkaWZmWDtcbiAgICBsZXQgZGlmZlk7XG4gICAgbGV0IHRyYW5zbGF0ZVg7XG4gICAgbGV0IHRyYW5zbGF0ZVk7XG4gICAgbGV0IGltYWdlV2lkdGg7XG4gICAgbGV0IGltYWdlSGVpZ2h0O1xuICAgIGxldCBzY2FsZWRXaWR0aDtcbiAgICBsZXQgc2NhbGVkSGVpZ2h0O1xuICAgIGxldCB0cmFuc2xhdGVNaW5YO1xuICAgIGxldCB0cmFuc2xhdGVNaW5ZO1xuICAgIGxldCB0cmFuc2xhdGVNYXhYO1xuICAgIGxldCB0cmFuc2xhdGVNYXhZO1xuICAgIGxldCBzbGlkZVdpZHRoO1xuICAgIGxldCBzbGlkZUhlaWdodDtcblxuICAgIGlmICh0eXBlb2YgaW1hZ2UudG91Y2hlc1N0YXJ0LnggPT09ICd1bmRlZmluZWQnICYmIGUpIHtcbiAgICAgIHRvdWNoWCA9IGUudHlwZSA9PT0gJ3RvdWNoZW5kJyA/IGUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVggOiBlLnBhZ2VYO1xuICAgICAgdG91Y2hZID0gZS50eXBlID09PSAndG91Y2hlbmQnID8gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWSA6IGUucGFnZVk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvdWNoWCA9IGltYWdlLnRvdWNoZXNTdGFydC54O1xuICAgICAgdG91Y2hZID0gaW1hZ2UudG91Y2hlc1N0YXJ0Lnk7XG4gICAgfVxuXG4gICAgem9vbS5zY2FsZSA9IGdlc3R1cmUuJGltYWdlV3JhcEVsLmF0dHIoJ2RhdGEtc3dpcGVyLXpvb20nKSB8fCBwYXJhbXMubWF4UmF0aW87XG4gICAgY3VycmVudFNjYWxlID0gZ2VzdHVyZS4kaW1hZ2VXcmFwRWwuYXR0cignZGF0YS1zd2lwZXItem9vbScpIHx8IHBhcmFtcy5tYXhSYXRpbztcblxuICAgIGlmIChlKSB7XG4gICAgICBzbGlkZVdpZHRoID0gZ2VzdHVyZS4kc2xpZGVFbFswXS5vZmZzZXRXaWR0aDtcbiAgICAgIHNsaWRlSGVpZ2h0ID0gZ2VzdHVyZS4kc2xpZGVFbFswXS5vZmZzZXRIZWlnaHQ7XG4gICAgICBvZmZzZXRYID0gZ2VzdHVyZS4kc2xpZGVFbC5vZmZzZXQoKS5sZWZ0ICsgd2luZG93LnNjcm9sbFg7XG4gICAgICBvZmZzZXRZID0gZ2VzdHVyZS4kc2xpZGVFbC5vZmZzZXQoKS50b3AgKyB3aW5kb3cuc2Nyb2xsWTtcbiAgICAgIGRpZmZYID0gb2Zmc2V0WCArIHNsaWRlV2lkdGggLyAyIC0gdG91Y2hYO1xuICAgICAgZGlmZlkgPSBvZmZzZXRZICsgc2xpZGVIZWlnaHQgLyAyIC0gdG91Y2hZO1xuICAgICAgaW1hZ2VXaWR0aCA9IGdlc3R1cmUuJGltYWdlRWxbMF0ub2Zmc2V0V2lkdGg7XG4gICAgICBpbWFnZUhlaWdodCA9IGdlc3R1cmUuJGltYWdlRWxbMF0ub2Zmc2V0SGVpZ2h0O1xuICAgICAgc2NhbGVkV2lkdGggPSBpbWFnZVdpZHRoICogem9vbS5zY2FsZTtcbiAgICAgIHNjYWxlZEhlaWdodCA9IGltYWdlSGVpZ2h0ICogem9vbS5zY2FsZTtcbiAgICAgIHRyYW5zbGF0ZU1pblggPSBNYXRoLm1pbihzbGlkZVdpZHRoIC8gMiAtIHNjYWxlZFdpZHRoIC8gMiwgMCk7XG4gICAgICB0cmFuc2xhdGVNaW5ZID0gTWF0aC5taW4oc2xpZGVIZWlnaHQgLyAyIC0gc2NhbGVkSGVpZ2h0IC8gMiwgMCk7XG4gICAgICB0cmFuc2xhdGVNYXhYID0gLXRyYW5zbGF0ZU1pblg7XG4gICAgICB0cmFuc2xhdGVNYXhZID0gLXRyYW5zbGF0ZU1pblk7XG4gICAgICB0cmFuc2xhdGVYID0gZGlmZlggKiB6b29tLnNjYWxlO1xuICAgICAgdHJhbnNsYXRlWSA9IGRpZmZZICogem9vbS5zY2FsZTtcblxuICAgICAgaWYgKHRyYW5zbGF0ZVggPCB0cmFuc2xhdGVNaW5YKSB7XG4gICAgICAgIHRyYW5zbGF0ZVggPSB0cmFuc2xhdGVNaW5YO1xuICAgICAgfVxuXG4gICAgICBpZiAodHJhbnNsYXRlWCA+IHRyYW5zbGF0ZU1heFgpIHtcbiAgICAgICAgdHJhbnNsYXRlWCA9IHRyYW5zbGF0ZU1heFg7XG4gICAgICB9XG5cbiAgICAgIGlmICh0cmFuc2xhdGVZIDwgdHJhbnNsYXRlTWluWSkge1xuICAgICAgICB0cmFuc2xhdGVZID0gdHJhbnNsYXRlTWluWTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRyYW5zbGF0ZVkgPiB0cmFuc2xhdGVNYXhZKSB7XG4gICAgICAgIHRyYW5zbGF0ZVkgPSB0cmFuc2xhdGVNYXhZO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2xhdGVYID0gMDtcbiAgICAgIHRyYW5zbGF0ZVkgPSAwO1xuICAgIH1cblxuICAgIGdlc3R1cmUuJGltYWdlV3JhcEVsLnRyYW5zaXRpb24oMzAwKS50cmFuc2Zvcm0oYHRyYW5zbGF0ZTNkKCR7dHJhbnNsYXRlWH1weCwgJHt0cmFuc2xhdGVZfXB4LDApYCk7XG4gICAgZ2VzdHVyZS4kaW1hZ2VFbC50cmFuc2l0aW9uKDMwMCkudHJhbnNmb3JtKGB0cmFuc2xhdGUzZCgwLDAsMCkgc2NhbGUoJHt6b29tLnNjYWxlfSlgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHpvb21PdXQoKSB7XG4gICAgY29uc3Qgem9vbSA9IHN3aXBlci56b29tO1xuICAgIGNvbnN0IHBhcmFtcyA9IHN3aXBlci5wYXJhbXMuem9vbTtcblxuICAgIGlmICghZ2VzdHVyZS4kc2xpZGVFbCkge1xuICAgICAgaWYgKHN3aXBlci5wYXJhbXMudmlydHVhbCAmJiBzd2lwZXIucGFyYW1zLnZpcnR1YWwuZW5hYmxlZCAmJiBzd2lwZXIudmlydHVhbCkge1xuICAgICAgICBnZXN0dXJlLiRzbGlkZUVsID0gc3dpcGVyLiR3cmFwcGVyRWwuY2hpbGRyZW4oYC4ke3N3aXBlci5wYXJhbXMuc2xpZGVBY3RpdmVDbGFzc31gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdlc3R1cmUuJHNsaWRlRWwgPSBzd2lwZXIuc2xpZGVzLmVxKHN3aXBlci5hY3RpdmVJbmRleCk7XG4gICAgICB9XG5cbiAgICAgIGdlc3R1cmUuJGltYWdlRWwgPSBnZXN0dXJlLiRzbGlkZUVsLmZpbmQoYC4ke3BhcmFtcy5jb250YWluZXJDbGFzc31gKS5lcSgwKS5maW5kKCdpbWcsIHN2ZywgY2FudmFzLCBwaWN0dXJlLCAuc3dpcGVyLXpvb20tdGFyZ2V0Jyk7XG4gICAgICBnZXN0dXJlLiRpbWFnZVdyYXBFbCA9IGdlc3R1cmUuJGltYWdlRWwucGFyZW50KGAuJHtwYXJhbXMuY29udGFpbmVyQ2xhc3N9YCk7XG4gICAgfVxuXG4gICAgaWYgKCFnZXN0dXJlLiRpbWFnZUVsIHx8IGdlc3R1cmUuJGltYWdlRWwubGVuZ3RoID09PSAwIHx8ICFnZXN0dXJlLiRpbWFnZVdyYXBFbCB8fCBnZXN0dXJlLiRpbWFnZVdyYXBFbC5sZW5ndGggPT09IDApIHJldHVybjtcblxuICAgIGlmIChzd2lwZXIucGFyYW1zLmNzc01vZGUpIHtcbiAgICAgIHN3aXBlci53cmFwcGVyRWwuc3R5bGUub3ZlcmZsb3cgPSAnJztcbiAgICAgIHN3aXBlci53cmFwcGVyRWwuc3R5bGUudG91Y2hBY3Rpb24gPSAnJztcbiAgICB9XG5cbiAgICB6b29tLnNjYWxlID0gMTtcbiAgICBjdXJyZW50U2NhbGUgPSAxO1xuICAgIGdlc3R1cmUuJGltYWdlV3JhcEVsLnRyYW5zaXRpb24oMzAwKS50cmFuc2Zvcm0oJ3RyYW5zbGF0ZTNkKDAsMCwwKScpO1xuICAgIGdlc3R1cmUuJGltYWdlRWwudHJhbnNpdGlvbigzMDApLnRyYW5zZm9ybSgndHJhbnNsYXRlM2QoMCwwLDApIHNjYWxlKDEpJyk7XG4gICAgZ2VzdHVyZS4kc2xpZGVFbC5yZW1vdmVDbGFzcyhgJHtwYXJhbXMuem9vbWVkU2xpZGVDbGFzc31gKTtcbiAgICBnZXN0dXJlLiRzbGlkZUVsID0gdW5kZWZpbmVkO1xuICB9IC8vIFRvZ2dsZSBab29tXG5cblxuICBmdW5jdGlvbiB6b29tVG9nZ2xlKGUpIHtcbiAgICBjb25zdCB6b29tID0gc3dpcGVyLnpvb207XG5cbiAgICBpZiAoem9vbS5zY2FsZSAmJiB6b29tLnNjYWxlICE9PSAxKSB7XG4gICAgICAvLyBab29tIE91dFxuICAgICAgem9vbU91dCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBab29tIEluXG4gICAgICB6b29tSW4oZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IHN1cHBvcnQgPSBzd2lwZXIuc3VwcG9ydDtcbiAgICBjb25zdCBwYXNzaXZlTGlzdGVuZXIgPSBzd2lwZXIudG91Y2hFdmVudHMuc3RhcnQgPT09ICd0b3VjaHN0YXJ0JyAmJiBzdXBwb3J0LnBhc3NpdmVMaXN0ZW5lciAmJiBzd2lwZXIucGFyYW1zLnBhc3NpdmVMaXN0ZW5lcnMgPyB7XG4gICAgICBwYXNzaXZlOiB0cnVlLFxuICAgICAgY2FwdHVyZTogZmFsc2VcbiAgICB9IDogZmFsc2U7XG4gICAgY29uc3QgYWN0aXZlTGlzdGVuZXJXaXRoQ2FwdHVyZSA9IHN1cHBvcnQucGFzc2l2ZUxpc3RlbmVyID8ge1xuICAgICAgcGFzc2l2ZTogZmFsc2UsXG4gICAgICBjYXB0dXJlOiB0cnVlXG4gICAgfSA6IHRydWU7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhc3NpdmVMaXN0ZW5lcixcbiAgICAgIGFjdGl2ZUxpc3RlbmVyV2l0aENhcHR1cmVcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U2xpZGVTZWxlY3RvcigpIHtcbiAgICByZXR1cm4gYC4ke3N3aXBlci5wYXJhbXMuc2xpZGVDbGFzc31gO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlR2VzdHVyZXMobWV0aG9kKSB7XG4gICAgY29uc3Qge1xuICAgICAgcGFzc2l2ZUxpc3RlbmVyXG4gICAgfSA9IGdldExpc3RlbmVycygpO1xuICAgIGNvbnN0IHNsaWRlU2VsZWN0b3IgPSBnZXRTbGlkZVNlbGVjdG9yKCk7XG4gICAgc3dpcGVyLiR3cmFwcGVyRWxbbWV0aG9kXSgnZ2VzdHVyZXN0YXJ0Jywgc2xpZGVTZWxlY3Rvciwgb25HZXN0dXJlU3RhcnQsIHBhc3NpdmVMaXN0ZW5lcik7XG4gICAgc3dpcGVyLiR3cmFwcGVyRWxbbWV0aG9kXSgnZ2VzdHVyZWNoYW5nZScsIHNsaWRlU2VsZWN0b3IsIG9uR2VzdHVyZUNoYW5nZSwgcGFzc2l2ZUxpc3RlbmVyKTtcbiAgICBzd2lwZXIuJHdyYXBwZXJFbFttZXRob2RdKCdnZXN0dXJlZW5kJywgc2xpZGVTZWxlY3Rvciwgb25HZXN0dXJlRW5kLCBwYXNzaXZlTGlzdGVuZXIpO1xuICB9XG5cbiAgZnVuY3Rpb24gZW5hYmxlR2VzdHVyZXMoKSB7XG4gICAgaWYgKGdlc3R1cmVzRW5hYmxlZCkgcmV0dXJuO1xuICAgIGdlc3R1cmVzRW5hYmxlZCA9IHRydWU7XG4gICAgdG9nZ2xlR2VzdHVyZXMoJ29uJyk7XG4gIH1cblxuICBmdW5jdGlvbiBkaXNhYmxlR2VzdHVyZXMoKSB7XG4gICAgaWYgKCFnZXN0dXJlc0VuYWJsZWQpIHJldHVybjtcbiAgICBnZXN0dXJlc0VuYWJsZWQgPSBmYWxzZTtcbiAgICB0b2dnbGVHZXN0dXJlcygnb2ZmJyk7XG4gIH0gLy8gQXR0YWNoL0RldGFjaCBFdmVudHNcblxuXG4gIGZ1bmN0aW9uIGVuYWJsZSgpIHtcbiAgICBjb25zdCB6b29tID0gc3dpcGVyLnpvb207XG4gICAgaWYgKHpvb20uZW5hYmxlZCkgcmV0dXJuO1xuICAgIHpvb20uZW5hYmxlZCA9IHRydWU7XG4gICAgY29uc3Qgc3VwcG9ydCA9IHN3aXBlci5zdXBwb3J0O1xuICAgIGNvbnN0IHtcbiAgICAgIHBhc3NpdmVMaXN0ZW5lcixcbiAgICAgIGFjdGl2ZUxpc3RlbmVyV2l0aENhcHR1cmVcbiAgICB9ID0gZ2V0TGlzdGVuZXJzKCk7XG4gICAgY29uc3Qgc2xpZGVTZWxlY3RvciA9IGdldFNsaWRlU2VsZWN0b3IoKTsgLy8gU2NhbGUgaW1hZ2VcblxuICAgIGlmIChzdXBwb3J0Lmdlc3R1cmVzKSB7XG4gICAgICBzd2lwZXIuJHdyYXBwZXJFbC5vbihzd2lwZXIudG91Y2hFdmVudHMuc3RhcnQsIGVuYWJsZUdlc3R1cmVzLCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgICAgc3dpcGVyLiR3cmFwcGVyRWwub24oc3dpcGVyLnRvdWNoRXZlbnRzLmVuZCwgZGlzYWJsZUdlc3R1cmVzLCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgIH0gZWxzZSBpZiAoc3dpcGVyLnRvdWNoRXZlbnRzLnN0YXJ0ID09PSAndG91Y2hzdGFydCcpIHtcbiAgICAgIHN3aXBlci4kd3JhcHBlckVsLm9uKHN3aXBlci50b3VjaEV2ZW50cy5zdGFydCwgc2xpZGVTZWxlY3Rvciwgb25HZXN0dXJlU3RhcnQsIHBhc3NpdmVMaXN0ZW5lcik7XG4gICAgICBzd2lwZXIuJHdyYXBwZXJFbC5vbihzd2lwZXIudG91Y2hFdmVudHMubW92ZSwgc2xpZGVTZWxlY3Rvciwgb25HZXN0dXJlQ2hhbmdlLCBhY3RpdmVMaXN0ZW5lcldpdGhDYXB0dXJlKTtcbiAgICAgIHN3aXBlci4kd3JhcHBlckVsLm9uKHN3aXBlci50b3VjaEV2ZW50cy5lbmQsIHNsaWRlU2VsZWN0b3IsIG9uR2VzdHVyZUVuZCwgcGFzc2l2ZUxpc3RlbmVyKTtcblxuICAgICAgaWYgKHN3aXBlci50b3VjaEV2ZW50cy5jYW5jZWwpIHtcbiAgICAgICAgc3dpcGVyLiR3cmFwcGVyRWwub24oc3dpcGVyLnRvdWNoRXZlbnRzLmNhbmNlbCwgc2xpZGVTZWxlY3Rvciwgb25HZXN0dXJlRW5kLCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgICAgfVxuICAgIH0gLy8gTW92ZSBpbWFnZVxuXG5cbiAgICBzd2lwZXIuJHdyYXBwZXJFbC5vbihzd2lwZXIudG91Y2hFdmVudHMubW92ZSwgYC4ke3N3aXBlci5wYXJhbXMuem9vbS5jb250YWluZXJDbGFzc31gLCBvblRvdWNoTW92ZSwgYWN0aXZlTGlzdGVuZXJXaXRoQ2FwdHVyZSk7XG4gIH1cblxuICBmdW5jdGlvbiBkaXNhYmxlKCkge1xuICAgIGNvbnN0IHpvb20gPSBzd2lwZXIuem9vbTtcbiAgICBpZiAoIXpvb20uZW5hYmxlZCkgcmV0dXJuO1xuICAgIGNvbnN0IHN1cHBvcnQgPSBzd2lwZXIuc3VwcG9ydDtcbiAgICB6b29tLmVuYWJsZWQgPSBmYWxzZTtcbiAgICBjb25zdCB7XG4gICAgICBwYXNzaXZlTGlzdGVuZXIsXG4gICAgICBhY3RpdmVMaXN0ZW5lcldpdGhDYXB0dXJlXG4gICAgfSA9IGdldExpc3RlbmVycygpO1xuICAgIGNvbnN0IHNsaWRlU2VsZWN0b3IgPSBnZXRTbGlkZVNlbGVjdG9yKCk7IC8vIFNjYWxlIGltYWdlXG5cbiAgICBpZiAoc3VwcG9ydC5nZXN0dXJlcykge1xuICAgICAgc3dpcGVyLiR3cmFwcGVyRWwub2ZmKHN3aXBlci50b3VjaEV2ZW50cy5zdGFydCwgZW5hYmxlR2VzdHVyZXMsIHBhc3NpdmVMaXN0ZW5lcik7XG4gICAgICBzd2lwZXIuJHdyYXBwZXJFbC5vZmYoc3dpcGVyLnRvdWNoRXZlbnRzLmVuZCwgZGlzYWJsZUdlc3R1cmVzLCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgIH0gZWxzZSBpZiAoc3dpcGVyLnRvdWNoRXZlbnRzLnN0YXJ0ID09PSAndG91Y2hzdGFydCcpIHtcbiAgICAgIHN3aXBlci4kd3JhcHBlckVsLm9mZihzd2lwZXIudG91Y2hFdmVudHMuc3RhcnQsIHNsaWRlU2VsZWN0b3IsIG9uR2VzdHVyZVN0YXJ0LCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgICAgc3dpcGVyLiR3cmFwcGVyRWwub2ZmKHN3aXBlci50b3VjaEV2ZW50cy5tb3ZlLCBzbGlkZVNlbGVjdG9yLCBvbkdlc3R1cmVDaGFuZ2UsIGFjdGl2ZUxpc3RlbmVyV2l0aENhcHR1cmUpO1xuICAgICAgc3dpcGVyLiR3cmFwcGVyRWwub2ZmKHN3aXBlci50b3VjaEV2ZW50cy5lbmQsIHNsaWRlU2VsZWN0b3IsIG9uR2VzdHVyZUVuZCwgcGFzc2l2ZUxpc3RlbmVyKTtcblxuICAgICAgaWYgKHN3aXBlci50b3VjaEV2ZW50cy5jYW5jZWwpIHtcbiAgICAgICAgc3dpcGVyLiR3cmFwcGVyRWwub2ZmKHN3aXBlci50b3VjaEV2ZW50cy5jYW5jZWwsIHNsaWRlU2VsZWN0b3IsIG9uR2VzdHVyZUVuZCwgcGFzc2l2ZUxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICB9IC8vIE1vdmUgaW1hZ2VcblxuXG4gICAgc3dpcGVyLiR3cmFwcGVyRWwub2ZmKHN3aXBlci50b3VjaEV2ZW50cy5tb3ZlLCBgLiR7c3dpcGVyLnBhcmFtcy56b29tLmNvbnRhaW5lckNsYXNzfWAsIG9uVG91Y2hNb3ZlLCBhY3RpdmVMaXN0ZW5lcldpdGhDYXB0dXJlKTtcbiAgfVxuXG4gIG9uKCdpbml0JywgKCkgPT4ge1xuICAgIGlmIChzd2lwZXIucGFyYW1zLnpvb20uZW5hYmxlZCkge1xuICAgICAgZW5hYmxlKCk7XG4gICAgfVxuICB9KTtcbiAgb24oJ2Rlc3Ryb3knLCAoKSA9PiB7XG4gICAgZGlzYWJsZSgpO1xuICB9KTtcbiAgb24oJ3RvdWNoU3RhcnQnLCAoX3MsIGUpID0+IHtcbiAgICBpZiAoIXN3aXBlci56b29tLmVuYWJsZWQpIHJldHVybjtcbiAgICBvblRvdWNoU3RhcnQoZSk7XG4gIH0pO1xuICBvbigndG91Y2hFbmQnLCAoX3MsIGUpID0+IHtcbiAgICBpZiAoIXN3aXBlci56b29tLmVuYWJsZWQpIHJldHVybjtcbiAgICBvblRvdWNoRW5kKGUpO1xuICB9KTtcbiAgb24oJ2RvdWJsZVRhcCcsIChfcywgZSkgPT4ge1xuICAgIGlmICghc3dpcGVyLmFuaW1hdGluZyAmJiBzd2lwZXIucGFyYW1zLnpvb20uZW5hYmxlZCAmJiBzd2lwZXIuem9vbS5lbmFibGVkICYmIHN3aXBlci5wYXJhbXMuem9vbS50b2dnbGUpIHtcbiAgICAgIHpvb21Ub2dnbGUoZSk7XG4gICAgfVxuICB9KTtcbiAgb24oJ3RyYW5zaXRpb25FbmQnLCAoKSA9PiB7XG4gICAgaWYgKHN3aXBlci56b29tLmVuYWJsZWQgJiYgc3dpcGVyLnBhcmFtcy56b29tLmVuYWJsZWQpIHtcbiAgICAgIG9uVHJhbnNpdGlvbkVuZCgpO1xuICAgIH1cbiAgfSk7XG4gIG9uKCdzbGlkZUNoYW5nZScsICgpID0+IHtcbiAgICBpZiAoc3dpcGVyLnpvb20uZW5hYmxlZCAmJiBzd2lwZXIucGFyYW1zLnpvb20uZW5hYmxlZCAmJiBzd2lwZXIucGFyYW1zLmNzc01vZGUpIHtcbiAgICAgIG9uVHJhbnNpdGlvbkVuZCgpO1xuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5hc3NpZ24oc3dpcGVyLnpvb20sIHtcbiAgICBlbmFibGUsXG4gICAgZGlzYWJsZSxcbiAgICBpbjogem9vbUluLFxuICAgIG91dDogem9vbU91dCxcbiAgICB0b2dnbGU6IHpvb21Ub2dnbGVcbiAgfSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2xhc3Nlc1RvU2VsZWN0b3IoY2xhc3NlcyA9ICcnKSB7XG4gIHJldHVybiBgLiR7Y2xhc3Nlcy50cmltKCkucmVwbGFjZSgvKFtcXC46IVxcL10pL2csICdcXFxcJDEnKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIC5yZXBsYWNlKC8gL2csICcuJyl9YDtcbn0iLCJpbXBvcnQgeyBnZXREb2N1bWVudCB9IGZyb20gJ3Nzci13aW5kb3cnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudElmTm90RGVmaW5lZChzd2lwZXIsIG9yaWdpbmFsUGFyYW1zLCBwYXJhbXMsIGNoZWNrUHJvcHMpIHtcbiAgY29uc3QgZG9jdW1lbnQgPSBnZXREb2N1bWVudCgpO1xuXG4gIGlmIChzd2lwZXIucGFyYW1zLmNyZWF0ZUVsZW1lbnRzKSB7XG4gICAgT2JqZWN0LmtleXMoY2hlY2tQcm9wcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgaWYgKCFwYXJhbXNba2V5XSAmJiBwYXJhbXMuYXV0byA9PT0gdHJ1ZSkge1xuICAgICAgICBsZXQgZWxlbWVudCA9IHN3aXBlci4kZWwuY2hpbGRyZW4oYC4ke2NoZWNrUHJvcHNba2V5XX1gKVswXTtcblxuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSBjaGVja1Byb3BzW2tleV07XG4gICAgICAgICAgc3dpcGVyLiRlbC5hcHBlbmQoZWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBwYXJhbXNba2V5XSA9IGVsZW1lbnQ7XG4gICAgICAgIG9yaWdpbmFsUGFyYW1zW2tleV0gPSBlbGVtZW50O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHBhcmFtcztcbn0iLCJpbXBvcnQgJCBmcm9tICcuL2RvbS5qcyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTaGFkb3cocGFyYW1zLCAkc2xpZGVFbCwgc2lkZSkge1xuICBjb25zdCBzaGFkb3dDbGFzcyA9IGBzd2lwZXItc2xpZGUtc2hhZG93JHtzaWRlID8gYC0ke3NpZGV9YCA6ICcnfWA7XG4gIGNvbnN0ICRzaGFkb3dDb250YWluZXIgPSBwYXJhbXMudHJhbnNmb3JtRWwgPyAkc2xpZGVFbC5maW5kKHBhcmFtcy50cmFuc2Zvcm1FbCkgOiAkc2xpZGVFbDtcbiAgbGV0ICRzaGFkb3dFbCA9ICRzaGFkb3dDb250YWluZXIuY2hpbGRyZW4oYC4ke3NoYWRvd0NsYXNzfWApO1xuXG4gIGlmICghJHNoYWRvd0VsLmxlbmd0aCkge1xuICAgICRzaGFkb3dFbCA9ICQoYDxkaXYgY2xhc3M9XCJzd2lwZXItc2xpZGUtc2hhZG93JHtzaWRlID8gYC0ke3NpZGV9YCA6ICcnfVwiPjwvZGl2PmApO1xuICAgICRzaGFkb3dDb250YWluZXIuYXBwZW5kKCRzaGFkb3dFbCk7XG4gIH1cblxuICByZXR1cm4gJHNoYWRvd0VsO1xufSIsImltcG9ydCB7ICQsIGFkZENsYXNzLCByZW1vdmVDbGFzcywgaGFzQ2xhc3MsIHRvZ2dsZUNsYXNzLCBhdHRyLCByZW1vdmVBdHRyLCB0cmFuc2Zvcm0sIHRyYW5zaXRpb24sIG9uLCBvZmYsIHRyaWdnZXIsIHRyYW5zaXRpb25FbmQsIG91dGVyV2lkdGgsIG91dGVySGVpZ2h0LCBzdHlsZXMsIG9mZnNldCwgY3NzLCBlYWNoLCBodG1sLCB0ZXh0LCBpcywgaW5kZXgsIGVxLCBhcHBlbmQsIHByZXBlbmQsIG5leHQsIG5leHRBbGwsIHByZXYsIHByZXZBbGwsIHBhcmVudCwgcGFyZW50cywgY2xvc2VzdCwgZmluZCwgY2hpbGRyZW4sIGZpbHRlciwgcmVtb3ZlIH0gZnJvbSAnZG9tNyc7XG5jb25zdCBNZXRob2RzID0ge1xuICBhZGRDbGFzcyxcbiAgcmVtb3ZlQ2xhc3MsXG4gIGhhc0NsYXNzLFxuICB0b2dnbGVDbGFzcyxcbiAgYXR0cixcbiAgcmVtb3ZlQXR0cixcbiAgdHJhbnNmb3JtLFxuICB0cmFuc2l0aW9uLFxuICBvbixcbiAgb2ZmLFxuICB0cmlnZ2VyLFxuICB0cmFuc2l0aW9uRW5kLFxuICBvdXRlcldpZHRoLFxuICBvdXRlckhlaWdodCxcbiAgc3R5bGVzLFxuICBvZmZzZXQsXG4gIGNzcyxcbiAgZWFjaCxcbiAgaHRtbCxcbiAgdGV4dCxcbiAgaXMsXG4gIGluZGV4LFxuICBlcSxcbiAgYXBwZW5kLFxuICBwcmVwZW5kLFxuICBuZXh0LFxuICBuZXh0QWxsLFxuICBwcmV2LFxuICBwcmV2QWxsLFxuICBwYXJlbnQsXG4gIHBhcmVudHMsXG4gIGNsb3Nlc3QsXG4gIGZpbmQsXG4gIGNoaWxkcmVuLFxuICBmaWx0ZXIsXG4gIHJlbW92ZVxufTtcbk9iamVjdC5rZXlzKE1ldGhvZHMpLmZvckVhY2gobWV0aG9kTmFtZSA9PiB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSgkLmZuLCBtZXRob2ROYW1lLCB7XG4gICAgdmFsdWU6IE1ldGhvZHNbbWV0aG9kTmFtZV0sXG4gICAgd3JpdGFibGU6IHRydWVcbiAgfSk7XG59KTtcbmV4cG9ydCBkZWZhdWx0ICQ7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZWZmZWN0SW5pdChwYXJhbXMpIHtcbiAgY29uc3Qge1xuICAgIGVmZmVjdCxcbiAgICBzd2lwZXIsXG4gICAgb24sXG4gICAgc2V0VHJhbnNsYXRlLFxuICAgIHNldFRyYW5zaXRpb24sXG4gICAgb3ZlcndyaXRlUGFyYW1zLFxuICAgIHBlcnNwZWN0aXZlXG4gIH0gPSBwYXJhbXM7XG4gIG9uKCdiZWZvcmVJbml0JywgKCkgPT4ge1xuICAgIGlmIChzd2lwZXIucGFyYW1zLmVmZmVjdCAhPT0gZWZmZWN0KSByZXR1cm47XG4gICAgc3dpcGVyLmNsYXNzTmFtZXMucHVzaChgJHtzd2lwZXIucGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3N9JHtlZmZlY3R9YCk7XG5cbiAgICBpZiAocGVyc3BlY3RpdmUgJiYgcGVyc3BlY3RpdmUoKSkge1xuICAgICAgc3dpcGVyLmNsYXNzTmFtZXMucHVzaChgJHtzd2lwZXIucGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3N9M2RgKTtcbiAgICB9XG5cbiAgICBjb25zdCBvdmVyd3JpdGVQYXJhbXNSZXN1bHQgPSBvdmVyd3JpdGVQYXJhbXMgPyBvdmVyd3JpdGVQYXJhbXMoKSA6IHt9O1xuICAgIE9iamVjdC5hc3NpZ24oc3dpcGVyLnBhcmFtcywgb3ZlcndyaXRlUGFyYW1zUmVzdWx0KTtcbiAgICBPYmplY3QuYXNzaWduKHN3aXBlci5vcmlnaW5hbFBhcmFtcywgb3ZlcndyaXRlUGFyYW1zUmVzdWx0KTtcbiAgfSk7XG4gIG9uKCdzZXRUcmFuc2xhdGUnLCAoKSA9PiB7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMuZWZmZWN0ICE9PSBlZmZlY3QpIHJldHVybjtcbiAgICBzZXRUcmFuc2xhdGUoKTtcbiAgfSk7XG4gIG9uKCdzZXRUcmFuc2l0aW9uJywgKF9zLCBkdXJhdGlvbikgPT4ge1xuICAgIGlmIChzd2lwZXIucGFyYW1zLmVmZmVjdCAhPT0gZWZmZWN0KSByZXR1cm47XG4gICAgc2V0VHJhbnNpdGlvbihkdXJhdGlvbik7XG4gIH0pO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVmZmVjdFRhcmdldChlZmZlY3RQYXJhbXMsICRzbGlkZUVsKSB7XG4gIGlmIChlZmZlY3RQYXJhbXMudHJhbnNmb3JtRWwpIHtcbiAgICByZXR1cm4gJHNsaWRlRWwuZmluZChlZmZlY3RQYXJhbXMudHJhbnNmb3JtRWwpLmNzcyh7XG4gICAgICAnYmFja2ZhY2UtdmlzaWJpbGl0eSc6ICdoaWRkZW4nLFxuICAgICAgJy13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eSc6ICdoaWRkZW4nXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gJHNsaWRlRWw7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZWZmZWN0VmlydHVhbFRyYW5zaXRpb25FbmQoe1xuICBzd2lwZXIsXG4gIGR1cmF0aW9uLFxuICB0cmFuc2Zvcm1FbCxcbiAgYWxsU2xpZGVzXG59KSB7XG4gIGNvbnN0IHtcbiAgICBzbGlkZXMsXG4gICAgYWN0aXZlSW5kZXgsXG4gICAgJHdyYXBwZXJFbFxuICB9ID0gc3dpcGVyO1xuXG4gIGlmIChzd2lwZXIucGFyYW1zLnZpcnR1YWxUcmFuc2xhdGUgJiYgZHVyYXRpb24gIT09IDApIHtcbiAgICBsZXQgZXZlbnRUcmlnZ2VyZWQgPSBmYWxzZTtcbiAgICBsZXQgJHRyYW5zaXRpb25FbmRUYXJnZXQ7XG5cbiAgICBpZiAoYWxsU2xpZGVzKSB7XG4gICAgICAkdHJhbnNpdGlvbkVuZFRhcmdldCA9IHRyYW5zZm9ybUVsID8gc2xpZGVzLmZpbmQodHJhbnNmb3JtRWwpIDogc2xpZGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICAkdHJhbnNpdGlvbkVuZFRhcmdldCA9IHRyYW5zZm9ybUVsID8gc2xpZGVzLmVxKGFjdGl2ZUluZGV4KS5maW5kKHRyYW5zZm9ybUVsKSA6IHNsaWRlcy5lcShhY3RpdmVJbmRleCk7XG4gICAgfVxuXG4gICAgJHRyYW5zaXRpb25FbmRUYXJnZXQudHJhbnNpdGlvbkVuZCgoKSA9PiB7XG4gICAgICBpZiAoZXZlbnRUcmlnZ2VyZWQpIHJldHVybjtcbiAgICAgIGlmICghc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQpIHJldHVybjtcbiAgICAgIGV2ZW50VHJpZ2dlcmVkID0gdHJ1ZTtcbiAgICAgIHN3aXBlci5hbmltYXRpbmcgPSBmYWxzZTtcbiAgICAgIGNvbnN0IHRyaWdnZXJFdmVudHMgPSBbJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCAndHJhbnNpdGlvbmVuZCddO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRyaWdnZXJFdmVudHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgJHdyYXBwZXJFbC50cmlnZ2VyKHRyaWdnZXJFdmVudHNbaV0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59IiwiaW1wb3J0IHsgZ2V0V2luZG93IH0gZnJvbSAnc3NyLXdpbmRvdyc7XG5sZXQgYnJvd3NlcjtcblxuZnVuY3Rpb24gY2FsY0Jyb3dzZXIoKSB7XG4gIGNvbnN0IHdpbmRvdyA9IGdldFdpbmRvdygpO1xuXG4gIGZ1bmN0aW9uIGlzU2FmYXJpKCkge1xuICAgIGNvbnN0IHVhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcbiAgICByZXR1cm4gdWEuaW5kZXhPZignc2FmYXJpJykgPj0gMCAmJiB1YS5pbmRleE9mKCdjaHJvbWUnKSA8IDAgJiYgdWEuaW5kZXhPZignYW5kcm9pZCcpIDwgMDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaXNTYWZhcmk6IGlzU2FmYXJpKCksXG4gICAgaXNXZWJWaWV3OiAvKGlQaG9uZXxpUG9kfGlQYWQpLipBcHBsZVdlYktpdCg/IS4qU2FmYXJpKS9pLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldEJyb3dzZXIoKSB7XG4gIGlmICghYnJvd3Nlcikge1xuICAgIGJyb3dzZXIgPSBjYWxjQnJvd3NlcigpO1xuICB9XG5cbiAgcmV0dXJuIGJyb3dzZXI7XG59XG5cbmV4cG9ydCB7IGdldEJyb3dzZXIgfTsiLCJpbXBvcnQgeyBnZXRXaW5kb3cgfSBmcm9tICdzc3Itd2luZG93JztcbmltcG9ydCB7IGdldFN1cHBvcnQgfSBmcm9tICcuL2dldC1zdXBwb3J0LmpzJztcbmxldCBkZXZpY2VDYWNoZWQ7XG5cbmZ1bmN0aW9uIGNhbGNEZXZpY2Uoe1xuICB1c2VyQWdlbnRcbn0gPSB7fSkge1xuICBjb25zdCBzdXBwb3J0ID0gZ2V0U3VwcG9ydCgpO1xuICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgY29uc3QgcGxhdGZvcm0gPSB3aW5kb3cubmF2aWdhdG9yLnBsYXRmb3JtO1xuICBjb25zdCB1YSA9IHVzZXJBZ2VudCB8fCB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgY29uc3QgZGV2aWNlID0ge1xuICAgIGlvczogZmFsc2UsXG4gICAgYW5kcm9pZDogZmFsc2VcbiAgfTtcbiAgY29uc3Qgc2NyZWVuV2lkdGggPSB3aW5kb3cuc2NyZWVuLndpZHRoO1xuICBjb25zdCBzY3JlZW5IZWlnaHQgPSB3aW5kb3cuc2NyZWVuLmhlaWdodDtcbiAgY29uc3QgYW5kcm9pZCA9IHVhLm1hdGNoKC8oQW5kcm9pZCk7P1tcXHNcXC9dKyhbXFxkLl0rKT8vKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gIGxldCBpcGFkID0gdWEubWF0Y2goLyhpUGFkKS4qT1NcXHMoW1xcZF9dKykvKTtcbiAgY29uc3QgaXBvZCA9IHVhLm1hdGNoKC8oaVBvZCkoLipPU1xccyhbXFxkX10rKSk/Lyk7XG4gIGNvbnN0IGlwaG9uZSA9ICFpcGFkICYmIHVhLm1hdGNoKC8oaVBob25lXFxzT1N8aU9TKVxccyhbXFxkX10rKS8pO1xuICBjb25zdCB3aW5kb3dzID0gcGxhdGZvcm0gPT09ICdXaW4zMic7XG4gIGxldCBtYWNvcyA9IHBsYXRmb3JtID09PSAnTWFjSW50ZWwnOyAvLyBpUGFkT3MgMTMgZml4XG5cbiAgY29uc3QgaVBhZFNjcmVlbnMgPSBbJzEwMjR4MTM2NicsICcxMzY2eDEwMjQnLCAnODM0eDExOTQnLCAnMTE5NHg4MzQnLCAnODM0eDExMTInLCAnMTExMng4MzQnLCAnNzY4eDEwMjQnLCAnMTAyNHg3NjgnLCAnODIweDExODAnLCAnMTE4MHg4MjAnLCAnODEweDEwODAnLCAnMTA4MHg4MTAnXTtcblxuICBpZiAoIWlwYWQgJiYgbWFjb3MgJiYgc3VwcG9ydC50b3VjaCAmJiBpUGFkU2NyZWVucy5pbmRleE9mKGAke3NjcmVlbldpZHRofXgke3NjcmVlbkhlaWdodH1gKSA+PSAwKSB7XG4gICAgaXBhZCA9IHVhLm1hdGNoKC8oVmVyc2lvbilcXC8oW1xcZC5dKykvKTtcbiAgICBpZiAoIWlwYWQpIGlwYWQgPSBbMCwgMSwgJzEzXzBfMCddO1xuICAgIG1hY29zID0gZmFsc2U7XG4gIH0gLy8gQW5kcm9pZFxuXG5cbiAgaWYgKGFuZHJvaWQgJiYgIXdpbmRvd3MpIHtcbiAgICBkZXZpY2Uub3MgPSAnYW5kcm9pZCc7XG4gICAgZGV2aWNlLmFuZHJvaWQgPSB0cnVlO1xuICB9XG5cbiAgaWYgKGlwYWQgfHwgaXBob25lIHx8IGlwb2QpIHtcbiAgICBkZXZpY2Uub3MgPSAnaW9zJztcbiAgICBkZXZpY2UuaW9zID0gdHJ1ZTtcbiAgfSAvLyBFeHBvcnQgb2JqZWN0XG5cblxuICByZXR1cm4gZGV2aWNlO1xufVxuXG5mdW5jdGlvbiBnZXREZXZpY2Uob3ZlcnJpZGVzID0ge30pIHtcbiAgaWYgKCFkZXZpY2VDYWNoZWQpIHtcbiAgICBkZXZpY2VDYWNoZWQgPSBjYWxjRGV2aWNlKG92ZXJyaWRlcyk7XG4gIH1cblxuICByZXR1cm4gZGV2aWNlQ2FjaGVkO1xufVxuXG5leHBvcnQgeyBnZXREZXZpY2UgfTsiLCJpbXBvcnQgeyBnZXRXaW5kb3csIGdldERvY3VtZW50IH0gZnJvbSAnc3NyLXdpbmRvdyc7XG5sZXQgc3VwcG9ydDtcblxuZnVuY3Rpb24gY2FsY1N1cHBvcnQoKSB7XG4gIGNvbnN0IHdpbmRvdyA9IGdldFdpbmRvdygpO1xuICBjb25zdCBkb2N1bWVudCA9IGdldERvY3VtZW50KCk7XG4gIHJldHVybiB7XG4gICAgc21vb3RoU2Nyb2xsOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgJ3Njcm9sbEJlaGF2aW9yJyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUsXG4gICAgdG91Y2g6ICEhKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyB8fCB3aW5kb3cuRG9jdW1lbnRUb3VjaCAmJiBkb2N1bWVudCBpbnN0YW5jZW9mIHdpbmRvdy5Eb2N1bWVudFRvdWNoKSxcbiAgICBwYXNzaXZlTGlzdGVuZXI6IGZ1bmN0aW9uIGNoZWNrUGFzc2l2ZUxpc3RlbmVyKCkge1xuICAgICAgbGV0IHN1cHBvcnRzUGFzc2l2ZSA9IGZhbHNlO1xuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBvcHRzID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAncGFzc2l2ZScsIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICBzdXBwb3J0c1Bhc3NpdmUgPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3RQYXNzaXZlTGlzdGVuZXInLCBudWxsLCBvcHRzKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsvLyBObyBzdXBwb3J0XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdXBwb3J0c1Bhc3NpdmU7XG4gICAgfSgpLFxuICAgIGdlc3R1cmVzOiBmdW5jdGlvbiBjaGVja0dlc3R1cmVzKCkge1xuICAgICAgcmV0dXJuICdvbmdlc3R1cmVzdGFydCcgaW4gd2luZG93O1xuICAgIH0oKVxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRTdXBwb3J0KCkge1xuICBpZiAoIXN1cHBvcnQpIHtcbiAgICBzdXBwb3J0ID0gY2FsY1N1cHBvcnQoKTtcbiAgfVxuXG4gIHJldHVybiBzdXBwb3J0O1xufVxuXG5leHBvcnQgeyBnZXRTdXBwb3J0IH07IiwiaW1wb3J0IHsgZ2V0V2luZG93IH0gZnJvbSAnc3NyLXdpbmRvdyc7XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb3BzKG9iaikge1xuICBjb25zdCBvYmplY3QgPSBvYmo7XG4gIE9iamVjdC5rZXlzKG9iamVjdCkuZm9yRWFjaChrZXkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYmplY3Rba2V5XSA9IG51bGw7XG4gICAgfSBjYXRjaCAoZSkgey8vIG5vIGdldHRlciBmb3Igb2JqZWN0XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGRlbGV0ZSBvYmplY3Rba2V5XTtcbiAgICB9IGNhdGNoIChlKSB7Ly8gc29tZXRoaW5nIGdvdCB3cm9uZ1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG5leHRUaWNrKGNhbGxiYWNrLCBkZWxheSA9IDApIHtcbiAgcmV0dXJuIHNldFRpbWVvdXQoY2FsbGJhY2ssIGRlbGF5KTtcbn1cblxuZnVuY3Rpb24gbm93KCkge1xuICByZXR1cm4gRGF0ZS5ub3coKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29tcHV0ZWRTdHlsZShlbCkge1xuICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgbGV0IHN0eWxlO1xuXG4gIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSkge1xuICAgIHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwsIG51bGwpO1xuICB9XG5cbiAgaWYgKCFzdHlsZSAmJiBlbC5jdXJyZW50U3R5bGUpIHtcbiAgICBzdHlsZSA9IGVsLmN1cnJlbnRTdHlsZTtcbiAgfVxuXG4gIGlmICghc3R5bGUpIHtcbiAgICBzdHlsZSA9IGVsLnN0eWxlO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBnZXRUcmFuc2xhdGUoZWwsIGF4aXMgPSAneCcpIHtcbiAgY29uc3Qgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gIGxldCBtYXRyaXg7XG4gIGxldCBjdXJUcmFuc2Zvcm07XG4gIGxldCB0cmFuc2Zvcm1NYXRyaXg7XG4gIGNvbnN0IGN1clN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbCwgbnVsbCk7XG5cbiAgaWYgKHdpbmRvdy5XZWJLaXRDU1NNYXRyaXgpIHtcbiAgICBjdXJUcmFuc2Zvcm0gPSBjdXJTdHlsZS50cmFuc2Zvcm0gfHwgY3VyU3R5bGUud2Via2l0VHJhbnNmb3JtO1xuXG4gICAgaWYgKGN1clRyYW5zZm9ybS5zcGxpdCgnLCcpLmxlbmd0aCA+IDYpIHtcbiAgICAgIGN1clRyYW5zZm9ybSA9IGN1clRyYW5zZm9ybS5zcGxpdCgnLCAnKS5tYXAoYSA9PiBhLnJlcGxhY2UoJywnLCAnLicpKS5qb2luKCcsICcpO1xuICAgIH0gLy8gU29tZSBvbGQgdmVyc2lvbnMgb2YgV2Via2l0IGNob2tlIHdoZW4gJ25vbmUnIGlzIHBhc3NlZDsgcGFzc1xuICAgIC8vIGVtcHR5IHN0cmluZyBpbnN0ZWFkIGluIHRoaXMgY2FzZVxuXG5cbiAgICB0cmFuc2Zvcm1NYXRyaXggPSBuZXcgd2luZG93LldlYktpdENTU01hdHJpeChjdXJUcmFuc2Zvcm0gPT09ICdub25lJyA/ICcnIDogY3VyVHJhbnNmb3JtKTtcbiAgfSBlbHNlIHtcbiAgICB0cmFuc2Zvcm1NYXRyaXggPSBjdXJTdHlsZS5Nb3pUcmFuc2Zvcm0gfHwgY3VyU3R5bGUuT1RyYW5zZm9ybSB8fCBjdXJTdHlsZS5Nc1RyYW5zZm9ybSB8fCBjdXJTdHlsZS5tc1RyYW5zZm9ybSB8fCBjdXJTdHlsZS50cmFuc2Zvcm0gfHwgY3VyU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgndHJhbnNmb3JtJykucmVwbGFjZSgndHJhbnNsYXRlKCcsICdtYXRyaXgoMSwgMCwgMCwgMSwnKTtcbiAgICBtYXRyaXggPSB0cmFuc2Zvcm1NYXRyaXgudG9TdHJpbmcoKS5zcGxpdCgnLCcpO1xuICB9XG5cbiAgaWYgKGF4aXMgPT09ICd4Jykge1xuICAgIC8vIExhdGVzdCBDaHJvbWUgYW5kIHdlYmtpdHMgRml4XG4gICAgaWYgKHdpbmRvdy5XZWJLaXRDU1NNYXRyaXgpIGN1clRyYW5zZm9ybSA9IHRyYW5zZm9ybU1hdHJpeC5tNDE7IC8vIENyYXp5IElFMTAgTWF0cml4XG4gICAgZWxzZSBpZiAobWF0cml4Lmxlbmd0aCA9PT0gMTYpIGN1clRyYW5zZm9ybSA9IHBhcnNlRmxvYXQobWF0cml4WzEyXSk7IC8vIE5vcm1hbCBCcm93c2Vyc1xuICAgIGVsc2UgY3VyVHJhbnNmb3JtID0gcGFyc2VGbG9hdChtYXRyaXhbNF0pO1xuICB9XG5cbiAgaWYgKGF4aXMgPT09ICd5Jykge1xuICAgIC8vIExhdGVzdCBDaHJvbWUgYW5kIHdlYmtpdHMgRml4XG4gICAgaWYgKHdpbmRvdy5XZWJLaXRDU1NNYXRyaXgpIGN1clRyYW5zZm9ybSA9IHRyYW5zZm9ybU1hdHJpeC5tNDI7IC8vIENyYXp5IElFMTAgTWF0cml4XG4gICAgZWxzZSBpZiAobWF0cml4Lmxlbmd0aCA9PT0gMTYpIGN1clRyYW5zZm9ybSA9IHBhcnNlRmxvYXQobWF0cml4WzEzXSk7IC8vIE5vcm1hbCBCcm93c2Vyc1xuICAgIGVsc2UgY3VyVHJhbnNmb3JtID0gcGFyc2VGbG9hdChtYXRyaXhbNV0pO1xuICB9XG5cbiAgcmV0dXJuIGN1clRyYW5zZm9ybSB8fCAwO1xufVxuXG5mdW5jdGlvbiBpc09iamVjdChvKSB7XG4gIHJldHVybiB0eXBlb2YgbyA9PT0gJ29iamVjdCcgJiYgbyAhPT0gbnVsbCAmJiBvLmNvbnN0cnVjdG9yICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSkgPT09ICdPYmplY3QnO1xufVxuXG5mdW5jdGlvbiBpc05vZGUobm9kZSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cuSFRNTEVsZW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudDtcbiAgfVxuXG4gIHJldHVybiBub2RlICYmIChub2RlLm5vZGVUeXBlID09PSAxIHx8IG5vZGUubm9kZVR5cGUgPT09IDExKTtcbn1cblxuZnVuY3Rpb24gZXh0ZW5kKC4uLmFyZ3MpIHtcbiAgY29uc3QgdG8gPSBPYmplY3QoYXJnc1swXSk7XG4gIGNvbnN0IG5vRXh0ZW5kID0gWydfX3Byb3RvX18nLCAnY29uc3RydWN0b3InLCAncHJvdG90eXBlJ107XG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBhcmdzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgbmV4dFNvdXJjZSA9IGFyZ3NbaV07XG5cbiAgICBpZiAobmV4dFNvdXJjZSAhPT0gdW5kZWZpbmVkICYmIG5leHRTb3VyY2UgIT09IG51bGwgJiYgIWlzTm9kZShuZXh0U291cmNlKSkge1xuICAgICAgY29uc3Qga2V5c0FycmF5ID0gT2JqZWN0LmtleXMoT2JqZWN0KG5leHRTb3VyY2UpKS5maWx0ZXIoa2V5ID0+IG5vRXh0ZW5kLmluZGV4T2Yoa2V5KSA8IDApO1xuXG4gICAgICBmb3IgKGxldCBuZXh0SW5kZXggPSAwLCBsZW4gPSBrZXlzQXJyYXkubGVuZ3RoOyBuZXh0SW5kZXggPCBsZW47IG5leHRJbmRleCArPSAxKSB7XG4gICAgICAgIGNvbnN0IG5leHRLZXkgPSBrZXlzQXJyYXlbbmV4dEluZGV4XTtcbiAgICAgICAgY29uc3QgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobmV4dFNvdXJjZSwgbmV4dEtleSk7XG5cbiAgICAgICAgaWYgKGRlc2MgIT09IHVuZGVmaW5lZCAmJiBkZXNjLmVudW1lcmFibGUpIHtcbiAgICAgICAgICBpZiAoaXNPYmplY3QodG9bbmV4dEtleV0pICYmIGlzT2JqZWN0KG5leHRTb3VyY2VbbmV4dEtleV0pKSB7XG4gICAgICAgICAgICBpZiAobmV4dFNvdXJjZVtuZXh0S2V5XS5fX3N3aXBlcl9fKSB7XG4gICAgICAgICAgICAgIHRvW25leHRLZXldID0gbmV4dFNvdXJjZVtuZXh0S2V5XTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGV4dGVuZCh0b1tuZXh0S2V5XSwgbmV4dFNvdXJjZVtuZXh0S2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmICghaXNPYmplY3QodG9bbmV4dEtleV0pICYmIGlzT2JqZWN0KG5leHRTb3VyY2VbbmV4dEtleV0pKSB7XG4gICAgICAgICAgICB0b1tuZXh0S2V5XSA9IHt9O1xuXG4gICAgICAgICAgICBpZiAobmV4dFNvdXJjZVtuZXh0S2V5XS5fX3N3aXBlcl9fKSB7XG4gICAgICAgICAgICAgIHRvW25leHRLZXldID0gbmV4dFNvdXJjZVtuZXh0S2V5XTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGV4dGVuZCh0b1tuZXh0S2V5XSwgbmV4dFNvdXJjZVtuZXh0S2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRvW25leHRLZXldID0gbmV4dFNvdXJjZVtuZXh0S2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdG87XG59XG5cbmZ1bmN0aW9uIHNldENTU1Byb3BlcnR5KGVsLCB2YXJOYW1lLCB2YXJWYWx1ZSkge1xuICBlbC5zdHlsZS5zZXRQcm9wZXJ0eSh2YXJOYW1lLCB2YXJWYWx1ZSk7XG59XG5cbmZ1bmN0aW9uIGFuaW1hdGVDU1NNb2RlU2Nyb2xsKHtcbiAgc3dpcGVyLFxuICB0YXJnZXRQb3NpdGlvbixcbiAgc2lkZVxufSkge1xuICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgY29uc3Qgc3RhcnRQb3NpdGlvbiA9IC1zd2lwZXIudHJhbnNsYXRlO1xuICBsZXQgc3RhcnRUaW1lID0gbnVsbDtcbiAgbGV0IHRpbWU7XG4gIGNvbnN0IGR1cmF0aW9uID0gc3dpcGVyLnBhcmFtcy5zcGVlZDtcbiAgc3dpcGVyLndyYXBwZXJFbC5zdHlsZS5zY3JvbGxTbmFwVHlwZSA9ICdub25lJztcbiAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHN3aXBlci5jc3NNb2RlRnJhbWVJRCk7XG4gIGNvbnN0IGRpciA9IHRhcmdldFBvc2l0aW9uID4gc3RhcnRQb3NpdGlvbiA/ICduZXh0JyA6ICdwcmV2JztcblxuICBjb25zdCBpc091dE9mQm91bmQgPSAoY3VycmVudCwgdGFyZ2V0KSA9PiB7XG4gICAgcmV0dXJuIGRpciA9PT0gJ25leHQnICYmIGN1cnJlbnQgPj0gdGFyZ2V0IHx8IGRpciA9PT0gJ3ByZXYnICYmIGN1cnJlbnQgPD0gdGFyZ2V0O1xuICB9O1xuXG4gIGNvbnN0IGFuaW1hdGUgPSAoKSA9PiB7XG4gICAgdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gICAgaWYgKHN0YXJ0VGltZSA9PT0gbnVsbCkge1xuICAgICAgc3RhcnRUaW1lID0gdGltZTtcbiAgICB9XG5cbiAgICBjb25zdCBwcm9ncmVzcyA9IE1hdGgubWF4KE1hdGgubWluKCh0aW1lIC0gc3RhcnRUaW1lKSAvIGR1cmF0aW9uLCAxKSwgMCk7XG4gICAgY29uc3QgZWFzZVByb2dyZXNzID0gMC41IC0gTWF0aC5jb3MocHJvZ3Jlc3MgKiBNYXRoLlBJKSAvIDI7XG4gICAgbGV0IGN1cnJlbnRQb3NpdGlvbiA9IHN0YXJ0UG9zaXRpb24gKyBlYXNlUHJvZ3Jlc3MgKiAodGFyZ2V0UG9zaXRpb24gLSBzdGFydFBvc2l0aW9uKTtcblxuICAgIGlmIChpc091dE9mQm91bmQoY3VycmVudFBvc2l0aW9uLCB0YXJnZXRQb3NpdGlvbikpIHtcbiAgICAgIGN1cnJlbnRQb3NpdGlvbiA9IHRhcmdldFBvc2l0aW9uO1xuICAgIH1cblxuICAgIHN3aXBlci53cmFwcGVyRWwuc2Nyb2xsVG8oe1xuICAgICAgW3NpZGVdOiBjdXJyZW50UG9zaXRpb25cbiAgICB9KTtcblxuICAgIGlmIChpc091dE9mQm91bmQoY3VycmVudFBvc2l0aW9uLCB0YXJnZXRQb3NpdGlvbikpIHtcbiAgICAgIHN3aXBlci53cmFwcGVyRWwuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgIHN3aXBlci53cmFwcGVyRWwuc3R5bGUuc2Nyb2xsU25hcFR5cGUgPSAnJztcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzd2lwZXIud3JhcHBlckVsLnN0eWxlLm92ZXJmbG93ID0gJyc7XG4gICAgICAgIHN3aXBlci53cmFwcGVyRWwuc2Nyb2xsVG8oe1xuICAgICAgICAgIFtzaWRlXTogY3VycmVudFBvc2l0aW9uXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoc3dpcGVyLmNzc01vZGVGcmFtZUlEKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzd2lwZXIuY3NzTW9kZUZyYW1lSUQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICB9O1xuXG4gIGFuaW1hdGUoKTtcbn1cblxuZXhwb3J0IHsgYW5pbWF0ZUNTU01vZGVTY3JvbGwsIGRlbGV0ZVByb3BzLCBuZXh0VGljaywgbm93LCBnZXRUcmFuc2xhdGUsIGlzT2JqZWN0LCBleHRlbmQsIGdldENvbXB1dGVkU3R5bGUsIHNldENTU1Byb3BlcnR5IH07IiwiLyoqXG4gKiBTd2lwZXIgNy4wLjZcbiAqIE1vc3QgbW9kZXJuIG1vYmlsZSB0b3VjaCBzbGlkZXIgYW5kIGZyYW1ld29yayB3aXRoIGhhcmR3YXJlIGFjY2VsZXJhdGVkIHRyYW5zaXRpb25zXG4gKiBodHRwczovL3N3aXBlcmpzLmNvbVxuICpcbiAqIENvcHlyaWdodCAyMDE0LTIwMjEgVmxhZGltaXIgS2hhcmxhbXBpZGlcbiAqXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2VcbiAqXG4gKiBSZWxlYXNlZCBvbjogU2VwdGVtYmVyIDE2LCAyMDIxXG4gKi9cblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTd2lwZXIsIGRlZmF1bHQgfSBmcm9tICcuL2NvcmUvY29yZS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFZpcnR1YWwgfSBmcm9tICcuL21vZHVsZXMvdmlydHVhbC92aXJ0dWFsLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgS2V5Ym9hcmQgfSBmcm9tICcuL21vZHVsZXMva2V5Ym9hcmQva2V5Ym9hcmQuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNb3VzZXdoZWVsIH0gZnJvbSAnLi9tb2R1bGVzL21vdXNld2hlZWwvbW91c2V3aGVlbC5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE5hdmlnYXRpb24gfSBmcm9tICcuL21vZHVsZXMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUGFnaW5hdGlvbiB9IGZyb20gJy4vbW9kdWxlcy9wYWdpbmF0aW9uL3BhZ2luYXRpb24uanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTY3JvbGxiYXIgfSBmcm9tICcuL21vZHVsZXMvc2Nyb2xsYmFyL3Njcm9sbGJhci5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFBhcmFsbGF4IH0gZnJvbSAnLi9tb2R1bGVzL3BhcmFsbGF4L3BhcmFsbGF4LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgWm9vbSB9IGZyb20gJy4vbW9kdWxlcy96b29tL3pvb20uanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMYXp5IH0gZnJvbSAnLi9tb2R1bGVzL2xhenkvbGF6eS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENvbnRyb2xsZXIgfSBmcm9tICcuL21vZHVsZXMvY29udHJvbGxlci9jb250cm9sbGVyLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQTExeSB9IGZyb20gJy4vbW9kdWxlcy9hMTF5L2ExMXkuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBIaXN0b3J5IH0gZnJvbSAnLi9tb2R1bGVzL2hpc3RvcnkvaGlzdG9yeS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEhhc2hOYXZpZ2F0aW9uIH0gZnJvbSAnLi9tb2R1bGVzL2hhc2gtbmF2aWdhdGlvbi9oYXNoLW5hdmlnYXRpb24uanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBBdXRvcGxheSB9IGZyb20gJy4vbW9kdWxlcy9hdXRvcGxheS9hdXRvcGxheS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRodW1icyB9IGZyb20gJy4vbW9kdWxlcy90aHVtYnMvdGh1bWJzLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRnJlZU1vZGUgfSBmcm9tICcuL21vZHVsZXMvZnJlZS1tb2RlL2ZyZWUtbW9kZS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEdyaWQgfSBmcm9tICcuL21vZHVsZXMvZ3JpZC9ncmlkLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWFuaXB1bGF0aW9uIH0gZnJvbSAnLi9tb2R1bGVzL21hbmlwdWxhdGlvbi9tYW5pcHVsYXRpb24uanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBFZmZlY3RGYWRlIH0gZnJvbSAnLi9tb2R1bGVzL2VmZmVjdC1mYWRlL2VmZmVjdC1mYWRlLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRWZmZWN0Q3ViZSB9IGZyb20gJy4vbW9kdWxlcy9lZmZlY3QtY3ViZS9lZmZlY3QtY3ViZS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEVmZmVjdEZsaXAgfSBmcm9tICcuL21vZHVsZXMvZWZmZWN0LWZsaXAvZWZmZWN0LWZsaXAuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBFZmZlY3RDb3ZlcmZsb3cgfSBmcm9tICcuL21vZHVsZXMvZWZmZWN0LWNvdmVyZmxvdy9lZmZlY3QtY292ZXJmbG93LmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRWZmZWN0Q3JlYXRpdmUgfSBmcm9tICcuL21vZHVsZXMvZWZmZWN0LWNyZWF0aXZlL2VmZmVjdC1jcmVhdGl2ZS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEVmZmVjdENhcmRzIH0gZnJvbSAnLi9tb2R1bGVzL2VmZmVjdC1jYXJkcy9lZmZlY3QtY2FyZHMuanMnOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGltcG9ydCBTd2lwZXIgSlNcbi8vIGltcG9ydCBTd2lwZXIgZnJvbSBcInN3aXBlci9idW5kbGVcIjtcbi8vLS1cbmltcG9ydCBTd2lwZXIsIHsgTmF2aWdhdGlvbiwgUGFnaW5hdGlvbiwgUGFyYWxsYXgsIEF1dG9wbGF5IH0gZnJvbSBcInN3aXBlclwiO1xuLy8gY29uZmlndXJlIFN3aXBlciB0byB1c2UgbW9kdWxlc1xuU3dpcGVyLnVzZShbTmF2aWdhdGlvbiwgUGFnaW5hdGlvbiwgUGFyYWxsYXgsIEF1dG9wbGF5XSk7XG4vLyBpbXBvcnQgU3dpcGVyIHN0eWxlc1xuaW1wb3J0IFwic3dpcGVyL2Nzcy9idW5kbGVcIjtcblxuLy9jdXN0b20gc3R5bGVcbmltcG9ydCBcIi4uLy4uL3Njc3Mvc2VjdGlvbnMvZm9ybWF0YWdlX21vZGVsc19zd2lwZXIuc2Nzc1wiO1xuLyoqXG4gKiAtLVxuICovXG52YXIgbXlTd2lwZXIgPSBuZXcgU3dpcGVyKFwiLnN3aXBlclwiLCB7XG4gIGRpcmVjdGlvbjogXCJ2ZXJ0aWNhbFwiLFxuICBsb29wOiB0cnVlLFxuICBwYWdpbmF0aW9uOiB7IGVsOiBcIi5zd2lwZXItcGFnaW5hdGlvblwiLCB0eXBlOiBcImJ1bGxldHNcIiwgY2xpY2thYmxlOiB0cnVlIH0sXG4gIC8vZ3JhYkN1cnNvcjogdHJ1ZSxcbiAgc3BlZWQ6IDEwMDAsXG4gIHBhcmFsbGF4OiB0cnVlLFxuICAvL2VmZmVjdDogXCJzbGlkZVwiLFxuICAvL21vdXNld2hlZWxDb250cm9sOiAxLFxuICBhdXRvcGxheToge1xuICAgIGRlbGF5OiA4MDAwLFxuICB9LFxufSk7XG5cbi8qKlxuICogLS1cbiAqL1xuLy8gY29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcihcIi5zd2lwZXJcIiwge1xuLy8gICAvLyBPcHRpb25hbCBwYXJhbWV0ZXJzXG4vLyAgIGRpcmVjdGlvbjogXCJ2ZXJ0aWNhbFwiLFxuLy8gICBsb29wOiB0cnVlLFxuXG4vLyAgIC8vIElmIHdlIG5lZWQgcGFnaW5hdGlvblxuLy8gICBwYWdpbmF0aW9uOiB7XG4vLyAgICAgZWw6IFwiLnN3aXBlci1wYWdpbmF0aW9uXCIsXG4vLyAgIH0sXG5cbi8vICAgLy8gTmF2aWdhdGlvbiBhcnJvd3Ncbi8vICAgbmF2aWdhdGlvbjoge1xuLy8gICAgIG5leHRFbDogXCIuc3dpcGVyLWJ1dHRvbi1uZXh0XCIsXG4vLyAgICAgcHJldkVsOiBcIi5zd2lwZXItYnV0dG9uLXByZXZcIixcbi8vICAgfSxcblxuLy8gICAvLyBBbmQgaWYgd2UgbmVlZCBzY3JvbGxiYXJcbi8vICAgc2Nyb2xsYmFyOiB7XG4vLyAgICAgZWw6IFwiLnN3aXBlci1zY3JvbGxiYXJcIixcbi8vICAgfSxcbi8vIH0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==