/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var bootstrap_dist_js_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap */ \"./node_modules/bootstrap/dist/js/bootstrap.js\");\n/* harmony import */ var bootstrap_dist_js_bootstrap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sass/style.scss */ \"./sass/style.scss\");\n\r\n\r\n\n\n//# sourceURL=webpack://moveslider/./js/app.js?");

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/createPopper.js":
/*!*********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/createPopper.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createPopper\": () => (/* binding */ createPopper),\n/* harmony export */   \"detectOverflow\": () => (/* reexport safe */ _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_13__[\"default\"]),\n/* harmony export */   \"popperGenerator\": () => (/* binding */ popperGenerator)\n/* harmony export */ });\n/* harmony import */ var _dom_utils_getCompositeRect_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dom-utils/getCompositeRect.js */ \"./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js\");\n/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dom-utils/getLayoutRect.js */ \"./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js\");\n/* harmony import */ var _dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-utils/listScrollParents.js */ \"./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js\");\n/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dom-utils/getOffsetParent.js */ \"./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js\");\n/* harmony import */ var _dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dom-utils/getComputedStyle.js */ \"./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js\");\n/* harmony import */ var _utils_orderModifiers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/orderModifiers.js */ \"./node_modules/@popperjs/core/lib/utils/orderModifiers.js\");\n/* harmony import */ var _utils_debounce_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/debounce.js */ \"./node_modules/@popperjs/core/lib/utils/debounce.js\");\n/* harmony import */ var _utils_validateModifiers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/validateModifiers.js */ \"./node_modules/@popperjs/core/lib/utils/validateModifiers.js\");\n/* harmony import */ var _utils_uniqueBy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/uniqueBy.js */ \"./node_modules/@popperjs/core/lib/utils/uniqueBy.js\");\n/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/getBasePlacement.js */ \"./node_modules/@popperjs/core/lib/utils/getBasePlacement.js\");\n/* harmony import */ var _utils_mergeByName_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/mergeByName.js */ \"./node_modules/@popperjs/core/lib/utils/mergeByName.js\");\n/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils/detectOverflow.js */ \"./node_modules/@popperjs/core/lib/utils/detectOverflow.js\");\n/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-utils/instanceOf.js */ \"./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js\");\n/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./enums.js */ \"./node_modules/@popperjs/core/lib/enums.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';\nvar INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';\nvar DEFAULT_OPTIONS = {\n  placement: 'bottom',\n  modifiers: [],\n  strategy: 'absolute'\n};\n\nfunction areValidElements() {\n  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  return !args.some(function (element) {\n    return !(element && typeof element.getBoundingClientRect === 'function');\n  });\n}\n\nfunction popperGenerator(generatorOptions) {\n  if (generatorOptions === void 0) {\n    generatorOptions = {};\n  }\n\n  var _generatorOptions = generatorOptions,\n      _generatorOptions$def = _generatorOptions.defaultModifiers,\n      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,\n      _generatorOptions$def2 = _generatorOptions.defaultOptions,\n      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;\n  return function createPopper(reference, popper, options) {\n    if (options === void 0) {\n      options = defaultOptions;\n    }\n\n    var state = {\n      placement: 'bottom',\n      orderedModifiers: [],\n      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),\n      modifiersData: {},\n      elements: {\n        reference: reference,\n        popper: popper\n      },\n      attributes: {},\n      styles: {}\n    };\n    var effectCleanupFns = [];\n    var isDestroyed = false;\n    var instance = {\n      state: state,\n      setOptions: function setOptions(setOptionsAction) {\n        var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;\n        cleanupModifierEffects();\n        state.options = Object.assign({}, defaultOptions, state.options, options);\n        state.scrollParents = {\n          reference: (0,_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isElement)(reference) ? (0,_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(reference) : reference.contextElement ? (0,_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(reference.contextElement) : [],\n          popper: (0,_dom_utils_listScrollParents_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(popper)\n        }; // Orders the modifiers based on their dependencies and `phase`\n        // properties\n\n        var orderedModifiers = (0,_utils_orderModifiers_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,_utils_mergeByName_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers\n\n        state.orderedModifiers = orderedModifiers.filter(function (m) {\n          return m.enabled;\n        }); // Validate the provided modifiers so that the consumer will get warned\n        // if one of the modifiers is invalid for any reason\n\n        if (true) {\n          var modifiers = (0,_utils_uniqueBy_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])([].concat(orderedModifiers, state.options.modifiers), function (_ref) {\n            var name = _ref.name;\n            return name;\n          });\n          (0,_utils_validateModifiers_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(modifiers);\n\n          if ((0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(state.options.placement) === _enums_js__WEBPACK_IMPORTED_MODULE_7__.auto) {\n            var flipModifier = state.orderedModifiers.find(function (_ref2) {\n              var name = _ref2.name;\n              return name === 'flip';\n            });\n\n            if (!flipModifier) {\n              console.error(['Popper: \"auto\" placements require the \"flip\" modifier be', 'present and enabled to work.'].join(' '));\n            }\n          }\n\n          var _getComputedStyle = (0,_dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(popper),\n              marginTop = _getComputedStyle.marginTop,\n              marginRight = _getComputedStyle.marginRight,\n              marginBottom = _getComputedStyle.marginBottom,\n              marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can\n          // cause bugs with positioning, so we'll warn the consumer\n\n\n          if ([marginTop, marginRight, marginBottom, marginLeft].some(function (margin) {\n            return parseFloat(margin);\n          })) {\n            console.warn(['Popper: CSS \"margin\" styles cannot be used to apply padding', 'between the popper and its reference element or boundary.', 'To replicate margin, use the `offset` modifier, as well as', 'the `padding` option in the `preventOverflow` and `flip`', 'modifiers.'].join(' '));\n          }\n        }\n\n        runModifierEffects();\n        return instance.update();\n      },\n      // Sync update – it will always be executed, even if not necessary. This\n      // is useful for low frequency updates where sync behavior simplifies the\n      // logic.\n      // For high frequency updates (e.g. `resize` and `scroll` events), always\n      // prefer the async Popper#update method\n      forceUpdate: function forceUpdate() {\n        if (isDestroyed) {\n          return;\n        }\n\n        var _state$elements = state.elements,\n            reference = _state$elements.reference,\n            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements\n        // anymore\n\n        if (!areValidElements(reference, popper)) {\n          if (true) {\n            console.error(INVALID_ELEMENT_ERROR);\n          }\n\n          return;\n        } // Store the reference and popper rects to be read by modifiers\n\n\n        state.rects = {\n          reference: (0,_dom_utils_getCompositeRect_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(reference, (0,_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(popper), state.options.strategy === 'fixed'),\n          popper: (0,_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(popper)\n        }; // Modifiers have the ability to reset the current update cycle. The\n        // most common use case for this is the `flip` modifier changing the\n        // placement, which then needs to re-run all the modifiers, because the\n        // logic was previously ran for the previous placement and is therefore\n        // stale/incorrect\n\n        state.reset = false;\n        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier\n        // is filled with the initial data specified by the modifier. This means\n        // it doesn't persist and is fresh on each update.\n        // To ensure persistent data, use `${name}#persistent`\n\n        state.orderedModifiers.forEach(function (modifier) {\n          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);\n        });\n        var __debug_loops__ = 0;\n\n        for (var index = 0; index < state.orderedModifiers.length; index++) {\n          if (true) {\n            __debug_loops__ += 1;\n\n            if (__debug_loops__ > 100) {\n              console.error(INFINITE_LOOP_ERROR);\n              break;\n            }\n          }\n\n          if (state.reset === true) {\n            state.reset = false;\n            index = -1;\n            continue;\n          }\n\n          var _state$orderedModifie = state.orderedModifiers[index],\n              fn = _state$orderedModifie.fn,\n              _state$orderedModifie2 = _state$orderedModifie.options,\n              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,\n              name = _state$orderedModifie.name;\n\n          if (typeof fn === 'function') {\n            state = fn({\n              state: state,\n              options: _options,\n              name: name,\n              instance: instance\n            }) || state;\n          }\n        }\n      },\n      // Async and optimistically optimized update – it will not be executed if\n      // not necessary (debounced to run at most once-per-tick)\n      update: (0,_utils_debounce_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"])(function () {\n        return new Promise(function (resolve) {\n          instance.forceUpdate();\n          resolve(state);\n        });\n      }),\n      destroy: function destroy() {\n        cleanupModifierEffects();\n        isDestroyed = true;\n      }\n    };\n\n    if (!areValidElements(reference, popper)) {\n      if (true) {\n        console.error(INVALID_ELEMENT_ERROR);\n      }\n\n      return instance;\n    }\n\n    instance.setOptions(options).then(function (state) {\n      if (!isDestroyed && options.onFirstUpdate) {\n        options.onFirstUpdate(state);\n      }\n    }); // Modifiers have the ability to execute arbitrary code before the first\n    // update cycle runs. They will be executed in the same order as the update\n    // cycle. This is useful when a modifier adds some persistent data that\n    // other modifiers need to use, but the modifier is run after the dependent\n    // one.\n\n    function runModifierEffects() {\n      state.orderedModifiers.forEach(function (_ref3) {\n        var name = _ref3.name,\n            _ref3$options = _ref3.options,\n            options = _ref3$options === void 0 ? {} : _ref3$options,\n            effect = _ref3.effect;\n\n        if (typeof effect === 'function') {\n          var cleanupFn = effect({\n            state: state,\n            name: name,\n            instance: instance,\n            options: options\n          });\n\n          var noopFn = function noopFn() {};\n\n          effectCleanupFns.push(cleanupFn || noopFn);\n        }\n      });\n    }\n\n    function cleanupModifierEffects() {\n      effectCleanupFns.forEach(function (fn) {\n        return fn();\n      });\n      effectCleanupFns = [];\n    }\n\n    return instance;\n  };\n}\nvar createPopper = /*#__PURE__*/popperGenerator(); // eslint-disable-next-line import/no-unused-modules\n\n\n\n//# sourceURL=webpack://moveslider/./node_modules/@popperjs/core/lib/createPopper.js?");

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/contains.js":
/*!***************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/contains.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contains)\n/* harmony export */ });\n/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceOf.js */ \"./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js\");\n\nfunction contains(parent, child) {\n  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method\n\n  if (parent.contains(child)) {\n    return true;\n  } // then fallback to custom implementation with Shadow DOM support\n  else if (rootNode && (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isShadowRoot)(rootNode)) {\n      var next = child;\n\n      do {\n        if (next && parent.isSameNode(next)) {\n          return true;\n        } // $FlowFixMe[prop-missing]: need a better way to handle this...\n\n\n        next = next.parentNode || next.host;\n      } while (next);\n    } // Give up, the result is false\n\n\n  return false;\n}\n\n//# sourceURL=webpack://moveslider/./node_modules/@popperjs/core/lib/dom-utils/contains.js?");

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getBoundingClientRect)\n/* harmony export */ });\n/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceOf.js */ \"./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js\");\n/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/math.js */ \"./node_modules/@popperjs/core/lib/utils/math.js\");\n/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindow.js */ \"./node_modules/@popperjs/core/lib/dom-utils/getWindow.js\");\n/* harmony import */ var _isLayoutViewport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isLayoutViewport.js */ \"./node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js\");\n\n\n\n\nfunction getBoundingClientRect(element, includeScale, isFixedStrategy) {\n  if (includeScale === void 0) {\n    includeScale = false;\n  }\n\n  if (isFixedStrategy === void 0) {\n    isFixedStrategy = false;\n  }\n\n  var clientRect = element.getBoundingClientRect();\n  var scaleX = 1;\n  var scaleY = 1;\n\n  if (includeScale && (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element)) {\n    scaleX = element.offsetWidth > 0 ? (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_1__.round)(clientRect.width) / element.offsetWidth || 1 : 1;\n    scaleY = element.offsetHeight > 0 ? (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_1__.round)(clientRect.height) / element.offsetHeight || 1 : 1;\n  }\n\n  var _ref = (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isElement)(element) ? (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(element) : window,\n      visualViewport = _ref.visualViewport;\n\n  var addVisualOffsets = !(0,_isLayoutViewport_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])() && isFixedStrategy;\n  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;\n  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;\n  var width = clientRect.width / scaleX;\n  var height = clientRect.height / scaleY;\n  return {\n    width: width,\n    height: height,\n    top: y,\n    right: x + width,\n    bottom: y + height,\n    left: x,\n    x: x,\n    y: y\n  };\n}\n\n//# sourceURL=webpack://moveslider/./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js?");

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getClippingRect)\n/* harmony export */ });\n/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ \"./node_modules/@popperjs/core/lib/enums.js\");\n/* harmony import */ var _getViewportRect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getViewportRect.js */ \"./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js\");\n/* harmony import */ var _getDocumentRect_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getDocumentRect.js */ \"./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js\");\n/* harmony import */ var _listScrollParents_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./listScrollParents.js */ \"./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js\");\n/* harmony import */ var _getOffsetParent_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./getOffsetParent.js */ \"./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js\");\n/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getDocumentElement.js */ \"./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js\");\n/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./getComputedStyle.js */ \"./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js\");\n/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./instanceOf.js */ \"./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js\");\n/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBoundingClientRect.js */ \"./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js\");\n/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./getParentNode.js */ \"./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js\");\n/* harmony import */ var _contains_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contains.js */ \"./node_modules/@popperjs/core/lib/dom-utils/contains.js\");\n/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./getNodeName.js */ \"./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js\");\n/* harmony import */ var _utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/rectToClientRect.js */ \"./node_modules/@popperjs/core/lib/utils/rectToClientRect.js\");\n/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/math.js */ \"./node_modules/@popperjs/core/lib/utils/math.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction getInnerBoundingClientRect(element, strategy) {\n  var rect = (0,_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element, false, strategy === 'fixed');\n  rect.top = rect.top + element.clientTop;\n  rect.left = rect.left + element.clientLeft;\n  rect.bottom = rect.top + element.clientHeight;\n  rect.right = rect.left + element.clientWidth;\n  rect.width = element.clientWidth;\n  rect.height = element.clientHeight;\n  rect.x = rect.left;\n  rect.y = rect.top;\n  return rect;\n}\n\nfunction getClientRectFromMixedType(element, clippingParent, strategy) {\n  return clippingParent === _enums_js__WEBPACK_IMPORTED_MODULE_1__.viewport ? (0,_utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,_getViewportRect_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(element, strategy)) : (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__.isElement)(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : (0,_utils_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,_getDocumentRect_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(element)));\n} // A \"clipping parent\" is an overflowable container with the characteristic of\n// clipping (or hiding) overflowing elements with a position different from\n// `initial`\n\n\nfunction getClippingParents(element) {\n  var clippingParents = (0,_listScrollParents_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,_getParentNode_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(element));\n  var canEscapeClipping = ['absolute', 'fixed'].indexOf((0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(element).position) >= 0;\n  var clipperElement = canEscapeClipping && (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__.isHTMLElement)(element) ? (0,_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(element) : element;\n\n  if (!(0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__.isElement)(clipperElement)) {\n    return [];\n  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414\n\n\n  return clippingParents.filter(function (clippingParent) {\n    return (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__.isElement)(clippingParent) && (0,_contains_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(clippingParent, clipperElement) && (0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"])(clippingParent) !== 'body';\n  });\n} // Gets the maximum area that the element is visible in due to any number of\n// clipping parents\n\n\nfunction getClippingRect(element, boundary, rootBoundary, strategy) {\n  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);\n  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);\n  var firstClippingParent = clippingParents[0];\n  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {\n    var rect = getClientRectFromMixedType(element, clippingParent, strategy);\n    accRect.top = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_13__.max)(rect.top, accRect.top);\n    accRect.right = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_13__.min)(rect.right, accRect.right);\n    accRect.bottom = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_13__.min)(rect.bottom, accRect.bottom);\n    accRect.left = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_13__.max)(rect.left, accRect.left);\n    return accRect;\n  }, getClientRectFromMixedType(element, firstClippingParent, strategy));\n  clippingRect.width = clippingRect.right - clippingRect.left;\n  clippingRect.height = clippingRect.bottom - clippingRect.top;\n  clippingRect.x = clippingRect.left;\n  clippingRect.y = clippingRect.top;\n  return clippingRect;\n}\n\n//# sourceURL=webpack://moveslider/./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js?");

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getCompositeRect)\n/* harmony export */ });\n/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getBoundingClientRect.js */ \"./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js\");\n/* harmony import */ var _getNodeScroll_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getNodeScroll.js */ \"./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js\");\n/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getNodeName.js */ \"./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js\");\n/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instanceOf.js */ \"./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js\");\n/* harmony import */ var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./getWindowScrollBarX.js */ \"./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js\");\n/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getDocumentElement.js */ \"./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js\");\n/* harmony import */ var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isScrollParent.js */ \"./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js\");\n/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/math.js */ \"./node_modules/@popperjs/core/lib/utils/math.js\");\n\n\n\n\n\n\n\n\n\nfunction isElementScaled(element) {\n  var rect = element.getBoundingClientRect();\n  var scaleX = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_0__.round)(rect.width) / element.offsetWidth || 1;\n  var scaleY = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_0__.round)(rect.height) / element.offsetHeight || 1;\n  return scaleX !== 1 || scaleY !== 1;\n} // Returns the composite rect of an element relative to its offsetParent.\n// Composite means it takes into account transforms as well as layout.\n\n\nfunction getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {\n  if (isFixed === void 0) {\n    isFixed = false;\n  }\n\n  var isOffsetParentAnElement = (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__.isHTMLElement)(offsetParent);\n  var offsetParentIsScaled = (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__.isHTMLElement)(offsetParent) && isElementScaled(offsetParent);\n  var documentElement = (0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(offsetParent);\n  var rect = (0,_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(elementOrVirtualElement, offsetParentIsScaled, isFixed);\n  var scroll = {\n    scrollLeft: 0,\n    scrollTop: 0\n  };\n  var offsets = {\n    x: 0,\n    y: 0\n  };\n\n  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {\n    if ((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078\n    (0,_isScrollParent_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(documentElement)) {\n      scroll = (0,_getNodeScroll_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(offsetParent);\n    }\n\n    if ((0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__.isHTMLElement)(offsetParent)) {\n      offsets = (0,_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(offsetParent, true);\n      offsets.x += offsetParent.clientLeft;\n      offsets.y += offsetParent.clientTop;\n    } else if (documentElement) {\n      offsets.x = (0,_getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(documentElement);\n    }\n  }\n\n  return {\n    x: rect.left + scroll.scrollLeft - offsets.x,\n    y: rect.top + scroll.scrollTop - offsets.y,\n    width: rect.width,\n    height: rect.height\n  };\n}\n\n//# sourceURL=webpack://moveslider/./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js?");

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getComputedStyle)\n/* harmony export */ });\n/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ \"./node_modules/@popperjs/core/lib/dom-utils/getWindow.js\");\n\nfunction getComputedStyle(element) {\n  return (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element).getComputedStyle(element);\n}\n\n//# sourceURL=webpack://moveslider/./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js?");

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getDocumentElement)\n/* harmony export */ });\n/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceOf.js */ \"./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js\");\n\nfunction getDocumentElement(element) {\n  // $FlowFixMe[incompatible-return]: assume body is always available\n  return (((0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isElement)(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]\n  element.document) || window.document).documentElement;\n}\n\n//# sourceURL=webpack://moveslider/./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js?");

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getDocumentRect)\n/* harmony export */ });\n/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDocumentElement.js */ \"./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js\");\n/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getComputedStyle.js */ \"./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js\");\n/* harmony import */ var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getWindowScrollBarX.js */ \"./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js\");\n/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWindowScroll.js */ \"./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js\");\n/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/math.js */ \"./node_modules/@popperjs/core/lib/utils/math.js\");\n\n\n\n\n // Gets the entire size of the scrollable document area, even extending outside\n// of the `<html>` and `<body>` rect bounds if horizontally scrollable\n\nfunction getDocumentRect(element) {\n  var _element$ownerDocumen;\n\n  var html = (0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element);\n  var winScroll = (0,_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(element);\n  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;\n  var width = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_2__.max)(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);\n  var height = (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_2__.max)(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);\n  var x = -winScroll.scrollLeft + (0,_getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(element);\n  var y = -winScroll.scrollTop;\n\n  if ((0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(body || html).direction === 'rtl') {\n    x += (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_2__.max)(html.clientWidth, body ? body.clientWidth : 0) - width;\n  }\n\n  return {\n    width: width,\n    height: height,\n    x: x,\n    y: y\n  };\n}\n\n//# sourceURL=webpack://moveslider/./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js?");

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getHTMLElementScroll)\n/* harmony export */ });\nfunction getHTMLElementScroll(element) {\n  return {\n    scrollLeft: element.scrollLeft,\n    scrollTop: element.scrollTop\n  };\n}\n\n//# sourceURL=webpack://moveslider/./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js?");

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getLayoutRect)\n/* harmony export */ });\n/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBoundingClientRect.js */ \"./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js\");\n // Returns the layout rect of an element relative to its offsetParent. Layout\n// means it doesn't take into account transforms.\n\nfunction getLayoutRect(element) {\n  var clientRect = (0,_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element); // Use the clientRect sizes if it's not been transformed.\n  // Fixes https://github.com/popperjs/popper-core/issues/1223\n\n  var width = element.offsetWidth;\n  var height = element.offsetHeight;\n\n  if (Math.abs(clientRect.width - width) <= 1) {\n    width = clientRect.width;\n  }\n\n  if (Math.abs(clientRect.height - height) <= 1) {\n    height = clientRect.height;\n  }\n\n  return {\n    x: element.offsetLeft,\n    y: element.offsetTop,\n    width: width,\n    height: height\n  };\n}\n\n//# sourceURL=webpack://moveslider/./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js?");

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js":
/*!******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getNodeName)\n/* harmony export */ });\nfunction getNodeName(element) {\n  return element ? (element.nodeName || '').toLowerCase() : null;\n}\n\n//# sourceURL=webpack://moveslider/./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js?");

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getNodeScroll)\n/* harmony export */ });\n/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindowScroll.js */ \"./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js\");\n/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ \"./node_modules/@popperjs/core/lib/dom-utils/getWindow.js\");\n/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instanceOf.js */ \"./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js\");\n/* harmony import */ var _getHTMLElementScroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getHTMLElementScroll.js */ \"./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js\");\n\n\n\n\nfunction getNodeScroll(node) {\n  if (node === (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(node) || !(0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__.isHTMLElement)(node)) {\n    return (0,_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(node);\n  } else {\n    return (0,_getHTMLElementScroll_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(node);\n  }\n}\n\n//# sourceURL=webpack://moveslider/./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js?");

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getOffsetParent)\n/* harmony export */ });\n/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getWindow.js */ \"./node_modules/@popperjs/core/lib/dom-utils/getWindow.js\");\n/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getNodeName.js */ \"./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js\");\n/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getComputedStyle.js */ \"./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js\");\n/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instanceOf.js */ \"./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js\");\n/* harmony import */ var _isTableElement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isTableElement.js */ \"./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js\");\n/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getParentNode.js */ \"./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js\");\n/* harmony import */ var _utils_userAgent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/userAgent.js */ \"./node_modules/@popperjs/core/lib/utils/userAgent.js\");\n\n\n\n\n\n\n\n\nfunction getTrueOffsetParent(element) {\n  if (!(0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element) || // https://github.com/popperjs/popper-core/issues/837\n  (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(element).position === 'fixed') {\n    return null;\n  }\n\n  return element.offsetParent;\n} // `.offsetParent` reports `null` for fixed elements, while absolute elements\n// return the containing block\n\n\nfunction getContainingBlock(element) {\n  var isFirefox = /firefox/i.test((0,_utils_userAgent_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n  var isIE = /Trident/i.test((0,_utils_userAgent_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n\n  if (isIE && (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element)) {\n    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport\n    var elementCss = (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(element);\n\n    if (elementCss.position === 'fixed') {\n      return null;\n    }\n  }\n\n  var currentNode = (0,_getParentNode_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(element);\n\n  if ((0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isShadowRoot)(currentNode)) {\n    currentNode = currentNode.host;\n  }\n\n  while ((0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(currentNode) && ['html', 'body'].indexOf((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(currentNode)) < 0) {\n    var css = (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(currentNode); // This is non-exhaustive but covers the most common CSS properties that\n    // create a containing block.\n    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block\n\n    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {\n      return currentNode;\n    } else {\n      currentNode = currentNode.parentNode;\n    }\n  }\n\n  return null;\n} // Gets the closest ancestor positioned element. Handles some edge cases,\n// such as table ancestors and cross browser bugs.\n\n\nfunction getOffsetParent(element) {\n  var window = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(element);\n  var offsetParent = getTrueOffsetParent(element);\n\n  while (offsetParent && (0,_isTableElement_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(offsetParent) && (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(offsetParent).position === 'static') {\n    offsetParent = getTrueOffsetParent(offsetParent);\n  }\n\n  if (offsetParent && ((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(offsetParent) === 'html' || (0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(offsetParent) === 'body' && (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(offsetParent).position === 'static')) {\n    return window;\n  }\n\n  return offsetParent || getContainingBlock(element) || window;\n}\n\n//# sourceURL=webpack://moveslider/./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js?");

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getParentNode)\n/* harmony export */ });\n/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNodeName.js */ \"./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js\");\n/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getDocumentElement.js */ \"./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js\");\n/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instanceOf.js */ \"./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js\");\n\n\n\nfunction getParentNode(element) {\n  if ((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element) === 'html') {\n    return element;\n  }\n\n  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle\n    // $FlowFixMe[incompatible-return]\n    // $FlowFixMe[prop-missing]\n    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node\n    element.parentNode || ( // DOM Element detected\n    (0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__.isShadowRoot)(element) ? element.host : null) || // ShadowRoot detected\n    // $FlowFixMe[incompatible-call]: HTMLElement is a Node\n    (0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(element) // fallback\n\n  );\n}\n\n//# sourceURL=webpack://moveslider/./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js?");

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getScrollParent)\n/* harmony export */ });\n/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getParentNode.js */ \"./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js\");\n/* harmony import */ var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isScrollParent.js */ \"./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js\");\n/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNodeName.js */ \"./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js\");\n/* harmony import */ var _instanceOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instanceOf.js */ \"./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js\");\n\n\n\n\nfunction getScrollParent(node) {\n  if (['html', 'body', '#document'].indexOf((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(node)) >= 0) {\n    // $FlowFixMe[incompatible-return]: assume body is always available\n    return node.ownerDocument.body;\n  }\n\n  if ((0,_instanceOf_js__WEBPACK_IMPORTED_MODULE_1__.isHTMLElement)(node) && (0,_isScrollParent_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(node)) {\n    return node;\n  }\n\n  return getScrollParent((0,_getParentNode_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(node));\n}\n\n//# sourceURL=webpack://moveslider/./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js?");

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getViewportRect)\n/* harmony export */ });\n/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ \"./node_modules/@popperjs/core/lib/dom-utils/getWindow.js\");\n/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDocumentElement.js */ \"./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js\");\n/* harmony import */ var _getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getWindowScrollBarX.js */ \"./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js\");\n/* harmony import */ var _isLayoutViewport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isLayoutViewport.js */ \"./node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js\");\n\n\n\n\nfunction getViewportRect(element, strategy) {\n  var win = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element);\n  var html = (0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(element);\n  var visualViewport = win.visualViewport;\n  var width = html.clientWidth;\n  var height = html.clientHeight;\n  var x = 0;\n  var y = 0;\n\n  if (visualViewport) {\n    width = visualViewport.width;\n    height = visualViewport.height;\n    var layoutViewport = (0,_isLayoutViewport_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n    if (layoutViewport || !layoutViewport && strategy === 'fixed') {\n      x = visualViewport.offsetLeft;\n      y = visualViewport.offsetTop;\n    }\n  }\n\n  return {\n    width: width,\n    height: height,\n    x: x + (0,_getWindowScrollBarX_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(element),\n    y: y\n  };\n}\n\n//# sourceURL=webpack://moveslider/./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js?");

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getWindow.js":
/*!****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getWindow.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getWindow)\n/* harmony export */ });\nfunction getWindow(node) {\n  if (node == null) {\n    return window;\n  }\n\n  if (node.toString() !== '[object Window]') {\n    var ownerDocument = node.ownerDocument;\n    return ownerDocument ? ownerDocument.defaultView || window : window;\n  }\n\n  return node;\n}\n\n//# sourceURL=webpack://moveslider/./node_modules/@popperjs/core/lib/dom-utils/getWindow.js?");

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getWindowScroll)\n/* harmony export */ });\n/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ \"./node_modules/@popperjs/core/lib/dom-utils/getWindow.js\");\n\nfunction getWindowScroll(node) {\n  var win = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(node);\n  var scrollLeft = win.pageXOffset;\n  var scrollTop = win.pageYOffset;\n  return {\n    scrollLeft: scrollLeft,\n    scrollTop: scrollTop\n  };\n}\n\n//# sourceURL=webpack://moveslider/./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js?");

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getWindowScrollBarX)\n/* harmony export */ });\n/* harmony import */ var _getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBoundingClientRect.js */ \"./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js\");\n/* harmony import */ var _getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDocumentElement.js */ \"./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js\");\n/* harmony import */ var _getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWindowScroll.js */ \"./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js\");\n\n\n\nfunction getWindowScrollBarX(element) {\n  // If <html> has a CSS width greater than the viewport, then this will be\n  // incorrect for RTL.\n  // Popper 1 is broken in this case and never had a bug report so let's assume\n  // it's not an issue. I don't think anyone ever specifies width on <html>\n  // anyway.\n  // Browsers where the left scrollbar doesn't cause an issue report `0` for\n  // this (e.g. Edge 2019, IE11, Safari)\n  return (0,_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])((0,_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(element)).left + (0,_getWindowScroll_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(element).scrollLeft;\n}\n\n//# sourceURL=webpack://moveslider/./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js?");

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isElement\": () => (/* binding */ isElement),\n/* harmony export */   \"isHTMLElement\": () => (/* binding */ isHTMLElement),\n/* harmony export */   \"isShadowRoot\": () => (/* binding */ isShadowRoot)\n/* harmony export */ });\n/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWindow.js */ \"./node_modules/@popperjs/core/lib/dom-utils/getWindow.js\");\n\n\nfunction isElement(node) {\n  var OwnElement = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(node).Element;\n  return node instanceof OwnElement || node instanceof Element;\n}\n\nfunction isHTMLElement(node) {\n  var OwnElement = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(node).HTMLElement;\n  return node instanceof OwnElement || node instanceof HTMLElement;\n}\n\nfunction isShadowRoot(node) {\n  // IE 11 has no ShadowRoot\n  if (typeof ShadowRoot === 'undefined') {\n    return false;\n  }\n\n  var OwnElement = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(node).ShadowRoot;\n  return node instanceof OwnElement || node instanceof ShadowRoot;\n}\n\n\n\n//# sourceURL=webpack://moveslider/./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js?");

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isLayoutViewport)\n/* harmony export */ });\n/* harmony import */ var _utils_userAgent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/userAgent.js */ \"./node_modules/@popperjs/core/lib/utils/userAgent.js\");\n\nfunction isLayoutViewport() {\n  return !/^((?!chrome|android).)*safari/i.test((0,_utils_userAgent_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n}\n\n//# sourceURL=webpack://moveslider/./node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js?");

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isScrollParent)\n/* harmony export */ });\n/* harmony import */ var _getComputedStyle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getComputedStyle.js */ \"./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js\");\n\nfunction isScrollParent(element) {\n  // Firefox wants us to check `-x` and `-y` variations as well\n  var _getComputedStyle = (0,_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element),\n      overflow = _getComputedStyle.overflow,\n      overflowX = _getComputedStyle.overflowX,\n      overflowY = _getComputedStyle.overflowY;\n\n  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);\n}\n\n//# sourceURL=webpack://moveslider/./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js?");

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isTableElement)\n/* harmony export */ });\n/* harmony import */ var _getNodeName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNodeName.js */ \"./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js\");\n\nfunction isTableElement(element) {\n  return ['table', 'td', 'th'].indexOf((0,_getNodeName_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element)) >= 0;\n}\n\n//# sourceURL=webpack://moveslider/./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js?");

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js":
/*!************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ listScrollParents)\n/* harmony export */ });\n/* harmony import */ var _getScrollParent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getScrollParent.js */ \"./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js\");\n/* harmony import */ var _getParentNode_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getParentNode.js */ \"./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js\");\n/* harmony import */ var _getWindow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWindow.js */ \"./node_modules/@popperjs/core/lib/dom-utils/getWindow.js\");\n/* harmony import */ var _isScrollParent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isScrollParent.js */ \"./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js\");\n\n\n\n\n/*\ngiven a DOM element, return the list of all scroll parents, up the list of ancesors\nuntil we get to the top window object. This list is what we attach scroll listeners\nto, because if any of these parent elements scroll, we'll need to re-calculate the\nreference element's position.\n*/\n\nfunction listScrollParents(element, list) {\n  var _element$ownerDocumen;\n\n  if (list === void 0) {\n    list = [];\n  }\n\n  var scrollParent = (0,_getScrollParent_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element);\n  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);\n  var win = (0,_getWindow_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(scrollParent);\n  var target = isBody ? [win].concat(win.visualViewport || [], (0,_isScrollParent_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(scrollParent) ? scrollParent : []) : scrollParent;\n  var updatedList = list.concat(target);\n  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here\n  updatedList.concat(listScrollParents((0,_getParentNode_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(target)));\n}\n\n//# sourceURL=webpack://moveslider/./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js?");

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/enums.js":
/*!**************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/enums.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"afterMain\": () => (/* binding */ afterMain),\n/* harmony export */   \"afterRead\": () => (/* binding */ afterRead),\n/* harmony export */   \"afterWrite\": () => (/* binding */ afterWrite),\n/* harmony export */   \"auto\": () => (/* binding */ auto),\n/* harmony export */   \"basePlacements\": () => (/* binding */ basePlacements),\n/* harmony export */   \"beforeMain\": () => (/* binding */ beforeMain),\n/* harmony export */   \"beforeRead\": () => (/* binding */ beforeRead),\n/* harmony export */   \"beforeWrite\": () => (/* binding */ beforeWrite),\n/* harmony export */   \"bottom\": () => (/* binding */ bottom),\n/* harmony export */   \"clippingParents\": () => (/* binding */ clippingParents),\n/* harmony export */   \"end\": () => (/* binding */ end),\n/* harmony export */   \"left\": () => (/* binding */ left),\n/* harmony export */   \"main\": () => (/* binding */ main),\n/* harmony export */   \"modifierPhases\": () => (/* binding */ modifierPhases),\n/* harmony export */   \"placements\": () => (/* binding */ placements),\n/* harmony export */   \"popper\": () => (/* binding */ popper),\n/* harmony export */   \"read\": () => (/* binding */ read),\n/* harmony export */   \"reference\": () => (/* binding */ reference),\n/* harmony export */   \"right\": () => (/* binding */ right),\n/* harmony export */   \"start\": () => (/* binding */ start),\n/* harmony export */   \"top\": () => (/* binding */ top),\n/* harmony export */   \"variationPlacements\": () => (/* binding */ variationPlacements),\n/* harmony export */   \"viewport\": () => (/* binding */ viewport),\n/* harmony export */   \"write\": () => (/* binding */ write)\n/* harmony export */ });\nvar top = 'top';\nvar bottom = 'bottom';\nvar right = 'right';\nvar left = 'left';\nvar auto = 'auto';\nvar basePlacements = [top, bottom, right, left];\nvar start = 'start';\nvar end = 'end';\nvar clippingParents = 'clippingParents';\nvar viewport = 'viewport';\nvar popper = 'popper';\nvar reference = 'reference';\nvar variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {\n  return acc.concat([placement + \"-\" + start, placement + \"-\" + end]);\n}, []);\nvar placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {\n  return acc.concat([placement, placement + \"-\" + start, placement + \"-\" + end]);\n}, []); // modifiers that need to read the DOM\n\nvar beforeRead = 'beforeRead';\nvar read = 'read';\nvar afterRead = 'afterRead'; // pure-logic modifiers\n\nvar beforeMain = 'beforeMain';\nvar main = 'main';\nvar afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)\n\nvar beforeWrite = 'beforeWrite';\nvar write = 'write';\nvar afterWrite = 'afterWrite';\nvar modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];\n\n//# sourceURL=webpack://moveslider/./node_modules/@popperjs/core/lib/enums.js?");

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"afterMain\": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.afterMain),\n/* harmony export */   \"afterRead\": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.afterRead),\n/* harmony export */   \"afterWrite\": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.afterWrite),\n/* harmony export */   \"applyStyles\": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.applyStyles),\n/* harmony export */   \"arrow\": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.arrow),\n/* harmony export */   \"auto\": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.auto),\n/* harmony export */   \"basePlacements\": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.basePlacements),\n/* harmony export */   \"beforeMain\": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.beforeMain),\n/* harmony export */   \"beforeRead\": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.beforeRead),\n/* harmony export */   \"beforeWrite\": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.beforeWrite),\n/* harmony export */   \"bottom\": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.bottom),\n/* harmony export */   \"clippingParents\": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.clippingParents),\n/* harmony export */   \"computeStyles\": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.computeStyles),\n/* harmony export */   \"createPopper\": () => (/* reexport safe */ _popper_js__WEBPACK_IMPORTED_MODULE_4__.createPopper),\n/* harmony export */   \"createPopperBase\": () => (/* reexport safe */ _createPopper_js__WEBPACK_IMPORTED_MODULE_2__.createPopper),\n/* harmony export */   \"createPopperLite\": () => (/* reexport safe */ _popper_lite_js__WEBPACK_IMPORTED_MODULE_5__.createPopper),\n/* harmony export */   \"detectOverflow\": () => (/* reexport safe */ _createPopper_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n/* harmony export */   \"end\": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.end),\n/* harmony export */   \"eventListeners\": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.eventListeners),\n/* harmony export */   \"flip\": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.flip),\n/* harmony export */   \"hide\": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.hide),\n/* harmony export */   \"left\": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.left),\n/* harmony export */   \"main\": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.main),\n/* harmony export */   \"modifierPhases\": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.modifierPhases),\n/* harmony export */   \"offset\": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.offset),\n/* harmony export */   \"placements\": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.placements),\n/* harmony export */   \"popper\": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper),\n/* harmony export */   \"popperGenerator\": () => (/* reexport safe */ _createPopper_js__WEBPACK_IMPORTED_MODULE_2__.popperGenerator),\n/* harmony export */   \"popperOffsets\": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.popperOffsets),\n/* harmony export */   \"preventOverflow\": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.preventOverflow),\n/* harmony export */   \"read\": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.read),\n/* harmony export */   \"reference\": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.reference),\n/* harmony export */   \"right\": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.right),\n/* harmony export */   \"start\": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.start),\n/* harmony export */   \"top\": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.top),\n/* harmony export */   \"variationPlacements\": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.variationPlacements),\n/* harmony export */   \"viewport\": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.viewport),\n/* harmony export */   \"write\": () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.write)\n/* harmony export */ });\n/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums.js */ \"./node_modules/@popperjs/core/lib/enums.js\");\n/* harmony import */ var _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifiers/index.js */ \"./node_modules/@popperjs/core/lib/modifiers/index.js\");\n/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createPopper.js */ \"./node_modules/@popperjs/core/lib/createPopper.js\");\n/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createPopper.js */ \"./node_modules/@popperjs/core/lib/utils/detectOverflow.js\");\n/* harmony import */ var _popper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popper.js */ \"./node_modules/@popperjs/core/lib/popper.js\");\n/* harmony import */ var _popper_lite_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popper-lite.js */ \"./node_modules/@popperjs/core/lib/popper-lite.js\");\n\n // eslint-disable-next-line import/no-unused-modules\n\n // eslint-disable-next-line import/no-unused-modules\n\n // eslint-disable-next-line import/no-unused-modules\n\n\n\n//# sourceURL=webpack://moveslider/./node_modules/@popperjs/core/lib/index.js?");

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/applyStyles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/applyStyles.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom-utils/getNodeName.js */ \"./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js\");\n/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-utils/instanceOf.js */ \"./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js\");\n\n // This modifier takes the styles prepared by the `computeStyles` modifier\n// and applies them to the HTMLElements such as popper and arrow\n\nfunction applyStyles(_ref) {\n  var state = _ref.state;\n  Object.keys(state.elements).forEach(function (name) {\n    var style = state.styles[name] || {};\n    var attributes = state.attributes[name] || {};\n    var element = state.elements[name]; // arrow is optional + virtual elements\n\n    if (!(0,_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element) || !(0,_dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(element)) {\n      return;\n    } // Flow doesn't support to extend this property, but it's the most\n    // effective way to apply styles to an HTMLElement\n    // $FlowFixMe[cannot-write]\n\n\n    Object.assign(element.style, style);\n    Object.keys(attributes).forEach(function (name) {\n      var value = attributes[name];\n\n      if (value === false) {\n        element.removeAttribute(name);\n      } else {\n        element.setAttribute(name, value === true ? '' : value);\n      }\n    });\n  });\n}\n\nfunction effect(_ref2) {\n  var state = _ref2.state;\n  var initialStyles = {\n    popper: {\n      position: state.options.strategy,\n      left: '0',\n      top: '0',\n      margin: '0'\n    },\n    arrow: {\n      position: 'absolute'\n    },\n    reference: {}\n  };\n  Object.assign(state.elements.popper.style, initialStyles.popper);\n  state.styles = initialStyles;\n\n  if (state.elements.arrow) {\n    Object.assign(state.elements.arrow.style, initialStyles.arrow);\n  }\n\n  return function () {\n    Object.keys(state.elements).forEach(function (name) {\n      var element = state.elements[name];\n      var attributes = state.attributes[name] || {};\n      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them\n\n      var style = styleProperties.reduce(function (style, property) {\n        style[property] = '';\n        return style;\n      }, {}); // arrow is optional + virtual elements\n\n      if (!(0,_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element) || !(0,_dom_utils_getNodeName_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(element)) {\n        return;\n      }\n\n      Object.assign(element.style, style);\n      Object.keys(attributes).forEach(function (attribute) {\n        element.removeAttribute(attribute);\n      });\n    });\n  };\n} // eslint-disable-next-line import/no-unused-modules\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  name: 'applyStyles',\n  enabled: true,\n  phase: 'write',\n  fn: applyStyles,\n  effect: effect,\n  requires: ['computeStyles']\n});\n\n//# sourceURL=webpack://moveslider/./node_modules/@popperjs/core/lib/modifiers/applyStyles.js?");

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/arrow.js":
/*!************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/arrow.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ \"./node_modules/@popperjs/core/lib/utils/getBasePlacement.js\");\n/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dom-utils/getLayoutRect.js */ \"./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js\");\n/* harmony import */ var _dom_utils_contains_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dom-utils/contains.js */ \"./node_modules/@popperjs/core/lib/dom-utils/contains.js\");\n/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom-utils/getOffsetParent.js */ \"./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js\");\n/* harmony import */ var _utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getMainAxisFromPlacement.js */ \"./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js\");\n/* harmony import */ var _utils_within_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/within.js */ \"./node_modules/@popperjs/core/lib/utils/within.js\");\n/* harmony import */ var _utils_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/mergePaddingObject.js */ \"./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js\");\n/* harmony import */ var _utils_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/expandToHashMap.js */ \"./node_modules/@popperjs/core/lib/utils/expandToHashMap.js\");\n/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums.js */ \"./node_modules/@popperjs/core/lib/enums.js\");\n/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dom-utils/instanceOf.js */ \"./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js\");\n\n\n\n\n\n\n\n\n\n // eslint-disable-next-line import/no-unused-modules\n\nvar toPaddingObject = function toPaddingObject(padding, state) {\n  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {\n    placement: state.placement\n  })) : padding;\n  return (0,_utils_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(typeof padding !== 'number' ? padding : (0,_utils_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(padding, _enums_js__WEBPACK_IMPORTED_MODULE_2__.basePlacements));\n};\n\nfunction arrow(_ref) {\n  var _state$modifiersData$;\n\n  var state = _ref.state,\n      name = _ref.name,\n      options = _ref.options;\n  var arrowElement = state.elements.arrow;\n  var popperOffsets = state.modifiersData.popperOffsets;\n  var basePlacement = (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(state.placement);\n  var axis = (0,_utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(basePlacement);\n  var isVertical = [_enums_js__WEBPACK_IMPORTED_MODULE_2__.left, _enums_js__WEBPACK_IMPORTED_MODULE_2__.right].indexOf(basePlacement) >= 0;\n  var len = isVertical ? 'height' : 'width';\n\n  if (!arrowElement || !popperOffsets) {\n    return;\n  }\n\n  var paddingObject = toPaddingObject(options.padding, state);\n  var arrowRect = (0,_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(arrowElement);\n  var minProp = axis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_2__.top : _enums_js__WEBPACK_IMPORTED_MODULE_2__.left;\n  var maxProp = axis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_2__.bottom : _enums_js__WEBPACK_IMPORTED_MODULE_2__.right;\n  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];\n  var startDiff = popperOffsets[axis] - state.rects.reference[axis];\n  var arrowOffsetParent = (0,_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(arrowElement);\n  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;\n  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is\n  // outside of the popper bounds\n\n  var min = paddingObject[minProp];\n  var max = clientSize - arrowRect[len] - paddingObject[maxProp];\n  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;\n  var offset = (0,_utils_within_js__WEBPACK_IMPORTED_MODULE_7__.within)(min, center, max); // Prevents breaking syntax highlighting...\n\n  var axisProp = axis;\n  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);\n}\n\nfunction effect(_ref2) {\n  var state = _ref2.state,\n      options = _ref2.options;\n  var _options$element = options.element,\n      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;\n\n  if (arrowElement == null) {\n    return;\n  } // CSS selector\n\n\n  if (typeof arrowElement === 'string') {\n    arrowElement = state.elements.popper.querySelector(arrowElement);\n\n    if (!arrowElement) {\n      return;\n    }\n  }\n\n  if (true) {\n    if (!(0,_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_8__.isHTMLElement)(arrowElement)) {\n      console.error(['Popper: \"arrow\" element must be an HTMLElement (not an SVGElement).', 'To use an SVG arrow, wrap it in an HTMLElement that will be used as', 'the arrow.'].join(' '));\n    }\n  }\n\n  if (!(0,_dom_utils_contains_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(state.elements.popper, arrowElement)) {\n    if (true) {\n      console.error(['Popper: \"arrow\" modifier\\'s `element` must be a child of the popper', 'element.'].join(' '));\n    }\n\n    return;\n  }\n\n  state.elements.arrow = arrowElement;\n} // eslint-disable-next-line import/no-unused-modules\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  name: 'arrow',\n  enabled: true,\n  phase: 'main',\n  fn: arrow,\n  effect: effect,\n  requires: ['popperOffsets'],\n  requiresIfExists: ['preventOverflow']\n});\n\n//# sourceURL=webpack://moveslider/./node_modules/@popperjs/core/lib/modifiers/arrow.js?");

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/computeStyles.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/computeStyles.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"mapToStyles\": () => (/* binding */ mapToStyles)\n/* harmony export */ });\n/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ \"./node_modules/@popperjs/core/lib/enums.js\");\n/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom-utils/getOffsetParent.js */ \"./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js\");\n/* harmony import */ var _dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom-utils/getWindow.js */ \"./node_modules/@popperjs/core/lib/dom-utils/getWindow.js\");\n/* harmony import */ var _dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dom-utils/getDocumentElement.js */ \"./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js\");\n/* harmony import */ var _dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dom-utils/getComputedStyle.js */ \"./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js\");\n/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ \"./node_modules/@popperjs/core/lib/utils/getBasePlacement.js\");\n/* harmony import */ var _utils_getVariation_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/getVariation.js */ \"./node_modules/@popperjs/core/lib/utils/getVariation.js\");\n/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/math.js */ \"./node_modules/@popperjs/core/lib/utils/math.js\");\n\n\n\n\n\n\n\n // eslint-disable-next-line import/no-unused-modules\n\nvar unsetSides = {\n  top: 'auto',\n  right: 'auto',\n  bottom: 'auto',\n  left: 'auto'\n}; // Round the offsets to the nearest suitable subpixel based on the DPR.\n// Zooming can change the DPR, but it seems to report a value that will\n// cleanly divide the values into the appropriate subpixels.\n\nfunction roundOffsetsByDPR(_ref) {\n  var x = _ref.x,\n      y = _ref.y;\n  var win = window;\n  var dpr = win.devicePixelRatio || 1;\n  return {\n    x: (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_0__.round)(x * dpr) / dpr || 0,\n    y: (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_0__.round)(y * dpr) / dpr || 0\n  };\n}\n\nfunction mapToStyles(_ref2) {\n  var _Object$assign2;\n\n  var popper = _ref2.popper,\n      popperRect = _ref2.popperRect,\n      placement = _ref2.placement,\n      variation = _ref2.variation,\n      offsets = _ref2.offsets,\n      position = _ref2.position,\n      gpuAcceleration = _ref2.gpuAcceleration,\n      adaptive = _ref2.adaptive,\n      roundOffsets = _ref2.roundOffsets,\n      isFixed = _ref2.isFixed;\n  var _offsets$x = offsets.x,\n      x = _offsets$x === void 0 ? 0 : _offsets$x,\n      _offsets$y = offsets.y,\n      y = _offsets$y === void 0 ? 0 : _offsets$y;\n\n  var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({\n    x: x,\n    y: y\n  }) : {\n    x: x,\n    y: y\n  };\n\n  x = _ref3.x;\n  y = _ref3.y;\n  var hasX = offsets.hasOwnProperty('x');\n  var hasY = offsets.hasOwnProperty('y');\n  var sideX = _enums_js__WEBPACK_IMPORTED_MODULE_1__.left;\n  var sideY = _enums_js__WEBPACK_IMPORTED_MODULE_1__.top;\n  var win = window;\n\n  if (adaptive) {\n    var offsetParent = (0,_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(popper);\n    var heightProp = 'clientHeight';\n    var widthProp = 'clientWidth';\n\n    if (offsetParent === (0,_dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(popper)) {\n      offsetParent = (0,_dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(popper);\n\n      if ((0,_dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(offsetParent).position !== 'static' && position === 'absolute') {\n        heightProp = 'scrollHeight';\n        widthProp = 'scrollWidth';\n      }\n    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it\n\n\n    offsetParent = offsetParent;\n\n    if (placement === _enums_js__WEBPACK_IMPORTED_MODULE_1__.top || (placement === _enums_js__WEBPACK_IMPORTED_MODULE_1__.left || placement === _enums_js__WEBPACK_IMPORTED_MODULE_1__.right) && variation === _enums_js__WEBPACK_IMPORTED_MODULE_1__.end) {\n      sideY = _enums_js__WEBPACK_IMPORTED_MODULE_1__.bottom;\n      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : // $FlowFixMe[prop-missing]\n      offsetParent[heightProp];\n      y -= offsetY - popperRect.height;\n      y *= gpuAcceleration ? 1 : -1;\n    }\n\n    if (placement === _enums_js__WEBPACK_IMPORTED_MODULE_1__.left || (placement === _enums_js__WEBPACK_IMPORTED_MODULE_1__.top || placement === _enums_js__WEBPACK_IMPORTED_MODULE_1__.bottom) && variation === _enums_js__WEBPACK_IMPORTED_MODULE_1__.end) {\n      sideX = _enums_js__WEBPACK_IMPORTED_MODULE_1__.right;\n      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : // $FlowFixMe[prop-missing]\n      offsetParent[widthProp];\n      x -= offsetX - popperRect.width;\n      x *= gpuAcceleration ? 1 : -1;\n    }\n  }\n\n  var commonStyles = Object.assign({\n    position: position\n  }, adaptive && unsetSides);\n\n  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({\n    x: x,\n    y: y\n  }) : {\n    x: x,\n    y: y\n  };\n\n  x = _ref4.x;\n  y = _ref4.y;\n\n  if (gpuAcceleration) {\n    var _Object$assign;\n\n    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? \"translate(\" + x + \"px, \" + y + \"px)\" : \"translate3d(\" + x + \"px, \" + y + \"px, 0)\", _Object$assign));\n  }\n\n  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + \"px\" : '', _Object$assign2[sideX] = hasX ? x + \"px\" : '', _Object$assign2.transform = '', _Object$assign2));\n}\n\nfunction computeStyles(_ref5) {\n  var state = _ref5.state,\n      options = _ref5.options;\n  var _options$gpuAccelerat = options.gpuAcceleration,\n      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,\n      _options$adaptive = options.adaptive,\n      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,\n      _options$roundOffsets = options.roundOffsets,\n      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;\n\n  if (true) {\n    var transitionProperty = (0,_dom_utils_getComputedStyle_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(state.elements.popper).transitionProperty || '';\n\n    if (adaptive && ['transform', 'top', 'right', 'bottom', 'left'].some(function (property) {\n      return transitionProperty.indexOf(property) >= 0;\n    })) {\n      console.warn(['Popper: Detected CSS transitions on at least one of the following', 'CSS properties: \"transform\", \"top\", \"right\", \"bottom\", \"left\".', '\\n\\n', 'Disable the \"computeStyles\" modifier\\'s `adaptive` option to allow', 'for smooth transitions, or remove these properties from the CSS', 'transition declaration on the popper element if only transitioning', 'opacity or background-color for example.', '\\n\\n', 'We recommend using the popper element as a wrapper around an inner', 'element that can have any CSS property transitioned for animations.'].join(' '));\n    }\n  }\n\n  var commonStyles = {\n    placement: (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(state.placement),\n    variation: (0,_utils_getVariation_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(state.placement),\n    popper: state.elements.popper,\n    popperRect: state.rects.popper,\n    gpuAcceleration: gpuAcceleration,\n    isFixed: state.options.strategy === 'fixed'\n  };\n\n  if (state.modifiersData.popperOffsets != null) {\n    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {\n      offsets: state.modifiersData.popperOffsets,\n      position: state.options.strategy,\n      adaptive: adaptive,\n      roundOffsets: roundOffsets\n    })));\n  }\n\n  if (state.modifiersData.arrow != null) {\n    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {\n      offsets: state.modifiersData.arrow,\n      position: 'absolute',\n      adaptive: false,\n      roundOffsets: roundOffsets\n    })));\n  }\n\n  state.attributes.popper = Object.assign({}, state.attributes.popper, {\n    'data-popper-placement': state.placement\n  });\n} // eslint-disable-next-line import/no-unused-modules\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  name: 'computeStyles',\n  enabled: true,\n  phase: 'beforeWrite',\n  fn: computeStyles,\n  data: {}\n});\n\n//# sourceURL=webpack://moveslider/./node_modules/@popperjs/core/lib/modifiers/computeStyles.js?");

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/eventListeners.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/eventListeners.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-utils/getWindow.js */ \"./node_modules/@popperjs/core/lib/dom-utils/getWindow.js\");\n // eslint-disable-next-line import/no-unused-modules\n\nvar passive = {\n  passive: true\n};\n\nfunction effect(_ref) {\n  var state = _ref.state,\n      instance = _ref.instance,\n      options = _ref.options;\n  var _options$scroll = options.scroll,\n      scroll = _options$scroll === void 0 ? true : _options$scroll,\n      _options$resize = options.resize,\n      resize = _options$resize === void 0 ? true : _options$resize;\n  var window = (0,_dom_utils_getWindow_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.elements.popper);\n  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);\n\n  if (scroll) {\n    scrollParents.forEach(function (scrollParent) {\n      scrollParent.addEventListener('scroll', instance.update, passive);\n    });\n  }\n\n  if (resize) {\n    window.addEventListener('resize', instance.update, passive);\n  }\n\n  return function () {\n    if (scroll) {\n      scrollParents.forEach(function (scrollParent) {\n        scrollParent.removeEventListener('scroll', instance.update, passive);\n      });\n    }\n\n    if (resize) {\n      window.removeEventListener('resize', instance.update, passive);\n    }\n  };\n} // eslint-disable-next-line import/no-unused-modules\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  name: 'eventListeners',\n  enabled: true,\n  phase: 'write',\n  fn: function fn() {},\n  effect: effect,\n  data: {}\n});\n\n//# sourceURL=webpack://moveslider/./node_modules/@popperjs/core/lib/modifiers/eventListeners.js?");

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/flip.js":
/*!***********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/flip.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getOppositePlacement.js */ \"./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js\");\n/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ \"./node_modules/@popperjs/core/lib/utils/getBasePlacement.js\");\n/* harmony import */ var _utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getOppositeVariationPlacement.js */ \"./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js\");\n/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/detectOverflow.js */ \"./node_modules/@popperjs/core/lib/utils/detectOverflow.js\");\n/* harmony import */ var _utils_computeAutoPlacement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/computeAutoPlacement.js */ \"./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js\");\n/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ \"./node_modules/@popperjs/core/lib/enums.js\");\n/* harmony import */ var _utils_getVariation_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getVariation.js */ \"./node_modules/@popperjs/core/lib/utils/getVariation.js\");\n\n\n\n\n\n\n // eslint-disable-next-line import/no-unused-modules\n\nfunction getExpandedFallbackPlacements(placement) {\n  if ((0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_1__.auto) {\n    return [];\n  }\n\n  var oppositePlacement = (0,_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(placement);\n  return [(0,_utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(placement), oppositePlacement, (0,_utils_getOppositeVariationPlacement_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(oppositePlacement)];\n}\n\nfunction flip(_ref) {\n  var state = _ref.state,\n      options = _ref.options,\n      name = _ref.name;\n\n  if (state.modifiersData[name]._skip) {\n    return;\n  }\n\n  var _options$mainAxis = options.mainAxis,\n      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,\n      _options$altAxis = options.altAxis,\n      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,\n      specifiedFallbackPlacements = options.fallbackPlacements,\n      padding = options.padding,\n      boundary = options.boundary,\n      rootBoundary = options.rootBoundary,\n      altBoundary = options.altBoundary,\n      _options$flipVariatio = options.flipVariations,\n      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,\n      allowedAutoPlacements = options.allowedAutoPlacements;\n  var preferredPlacement = state.options.placement;\n  var basePlacement = (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(preferredPlacement);\n  var isBasePlacement = basePlacement === preferredPlacement;\n  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [(0,_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));\n  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {\n    return acc.concat((0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_1__.auto ? (0,_utils_computeAutoPlacement_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(state, {\n      placement: placement,\n      boundary: boundary,\n      rootBoundary: rootBoundary,\n      padding: padding,\n      flipVariations: flipVariations,\n      allowedAutoPlacements: allowedAutoPlacements\n    }) : placement);\n  }, []);\n  var referenceRect = state.rects.reference;\n  var popperRect = state.rects.popper;\n  var checksMap = new Map();\n  var makeFallbackChecks = true;\n  var firstFittingPlacement = placements[0];\n\n  for (var i = 0; i < placements.length; i++) {\n    var placement = placements[i];\n\n    var _basePlacement = (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(placement);\n\n    var isStartVariation = (0,_utils_getVariation_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(placement) === _enums_js__WEBPACK_IMPORTED_MODULE_1__.start;\n    var isVertical = [_enums_js__WEBPACK_IMPORTED_MODULE_1__.top, _enums_js__WEBPACK_IMPORTED_MODULE_1__.bottom].indexOf(_basePlacement) >= 0;\n    var len = isVertical ? 'width' : 'height';\n    var overflow = (0,_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(state, {\n      placement: placement,\n      boundary: boundary,\n      rootBoundary: rootBoundary,\n      altBoundary: altBoundary,\n      padding: padding\n    });\n    var mainVariationSide = isVertical ? isStartVariation ? _enums_js__WEBPACK_IMPORTED_MODULE_1__.right : _enums_js__WEBPACK_IMPORTED_MODULE_1__.left : isStartVariation ? _enums_js__WEBPACK_IMPORTED_MODULE_1__.bottom : _enums_js__WEBPACK_IMPORTED_MODULE_1__.top;\n\n    if (referenceRect[len] > popperRect[len]) {\n      mainVariationSide = (0,_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(mainVariationSide);\n    }\n\n    var altVariationSide = (0,_utils_getOppositePlacement_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(mainVariationSide);\n    var checks = [];\n\n    if (checkMainAxis) {\n      checks.push(overflow[_basePlacement] <= 0);\n    }\n\n    if (checkAltAxis) {\n      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);\n    }\n\n    if (checks.every(function (check) {\n      return check;\n    })) {\n      firstFittingPlacement = placement;\n      makeFallbackChecks = false;\n      break;\n    }\n\n    checksMap.set(placement, checks);\n  }\n\n  if (makeFallbackChecks) {\n    // `2` may be desired in some cases – research later\n    var numberOfChecks = flipVariations ? 3 : 1;\n\n    var _loop = function _loop(_i) {\n      var fittingPlacement = placements.find(function (placement) {\n        var checks = checksMap.get(placement);\n\n        if (checks) {\n          return checks.slice(0, _i).every(function (check) {\n            return check;\n          });\n        }\n      });\n\n      if (fittingPlacement) {\n        firstFittingPlacement = fittingPlacement;\n        return \"break\";\n      }\n    };\n\n    for (var _i = numberOfChecks; _i > 0; _i--) {\n      var _ret = _loop(_i);\n\n      if (_ret === \"break\") break;\n    }\n  }\n\n  if (state.placement !== firstFittingPlacement) {\n    state.modifiersData[name]._skip = true;\n    state.placement = firstFittingPlacement;\n    state.reset = true;\n  }\n} // eslint-disable-next-line import/no-unused-modules\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  name: 'flip',\n  enabled: true,\n  phase: 'main',\n  fn: flip,\n  requiresIfExists: ['offset'],\n  data: {\n    _skip: false\n  }\n});\n\n//# sourceURL=webpack://moveslider/./node_modules/@popperjs/core/lib/modifiers/flip.js?");

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/hide.js":
/*!***********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/hide.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ \"./node_modules/@popperjs/core/lib/enums.js\");\n/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/detectOverflow.js */ \"./node_modules/@popperjs/core/lib/utils/detectOverflow.js\");\n\n\n\nfunction getSideOffsets(overflow, rect, preventedOffsets) {\n  if (preventedOffsets === void 0) {\n    preventedOffsets = {\n      x: 0,\n      y: 0\n    };\n  }\n\n  return {\n    top: overflow.top - rect.height - preventedOffsets.y,\n    right: overflow.right - rect.width + preventedOffsets.x,\n    bottom: overflow.bottom - rect.height + preventedOffsets.y,\n    left: overflow.left - rect.width - preventedOffsets.x\n  };\n}\n\nfunction isAnySideFullyClipped(overflow) {\n  return [_enums_js__WEBPACK_IMPORTED_MODULE_0__.top, _enums_js__WEBPACK_IMPORTED_MODULE_0__.right, _enums_js__WEBPACK_IMPORTED_MODULE_0__.bottom, _enums_js__WEBPACK_IMPORTED_MODULE_0__.left].some(function (side) {\n    return overflow[side] >= 0;\n  });\n}\n\nfunction hide(_ref) {\n  var state = _ref.state,\n      name = _ref.name;\n  var referenceRect = state.rects.reference;\n  var popperRect = state.rects.popper;\n  var preventedOffsets = state.modifiersData.preventOverflow;\n  var referenceOverflow = (0,_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(state, {\n    elementContext: 'reference'\n  });\n  var popperAltOverflow = (0,_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(state, {\n    altBoundary: true\n  });\n  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);\n  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);\n  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);\n  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);\n  state.modifiersData[name] = {\n    referenceClippingOffsets: referenceClippingOffsets,\n    popperEscapeOffsets: popperEscapeOffsets,\n    isReferenceHidden: isReferenceHidden,\n    hasPopperEscaped: hasPopperEscaped\n  };\n  state.attributes.popper = Object.assign({}, state.attributes.popper, {\n    'data-popper-reference-hidden': isReferenceHidden,\n    'data-popper-escaped': hasPopperEscaped\n  });\n} // eslint-disable-next-line import/no-unused-modules\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  name: 'hide',\n  enabled: true,\n  phase: 'main',\n  requiresIfExists: ['preventOverflow'],\n  fn: hide\n});\n\n//# sourceURL=webpack://moveslider/./node_modules/@popperjs/core/lib/modifiers/hide.js?");

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"applyStyles\": () => (/* reexport safe */ _applyStyles_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"arrow\": () => (/* reexport safe */ _arrow_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   \"computeStyles\": () => (/* reexport safe */ _computeStyles_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   \"eventListeners\": () => (/* reexport safe */ _eventListeners_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n/* harmony export */   \"flip\": () => (/* reexport safe */ _flip_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n/* harmony export */   \"hide\": () => (/* reexport safe */ _hide_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n/* harmony export */   \"offset\": () => (/* reexport safe */ _offset_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]),\n/* harmony export */   \"popperOffsets\": () => (/* reexport safe */ _popperOffsets_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]),\n/* harmony export */   \"preventOverflow\": () => (/* reexport safe */ _preventOverflow_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _applyStyles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./applyStyles.js */ \"./node_modules/@popperjs/core/lib/modifiers/applyStyles.js\");\n/* harmony import */ var _arrow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arrow.js */ \"./node_modules/@popperjs/core/lib/modifiers/arrow.js\");\n/* harmony import */ var _computeStyles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./computeStyles.js */ \"./node_modules/@popperjs/core/lib/modifiers/computeStyles.js\");\n/* harmony import */ var _eventListeners_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eventListeners.js */ \"./node_modules/@popperjs/core/lib/modifiers/eventListeners.js\");\n/* harmony import */ var _flip_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./flip.js */ \"./node_modules/@popperjs/core/lib/modifiers/flip.js\");\n/* harmony import */ var _hide_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hide.js */ \"./node_modules/@popperjs/core/lib/modifiers/hide.js\");\n/* harmony import */ var _offset_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./offset.js */ \"./node_modules/@popperjs/core/lib/modifiers/offset.js\");\n/* harmony import */ var _popperOffsets_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./popperOffsets.js */ \"./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js\");\n/* harmony import */ var _preventOverflow_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./preventOverflow.js */ \"./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js\");\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://moveslider/./node_modules/@popperjs/core/lib/modifiers/index.js?");

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/offset.js":
/*!*************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/offset.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"distanceAndSkiddingToXY\": () => (/* binding */ distanceAndSkiddingToXY)\n/* harmony export */ });\n/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ \"./node_modules/@popperjs/core/lib/utils/getBasePlacement.js\");\n/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ \"./node_modules/@popperjs/core/lib/enums.js\");\n\n // eslint-disable-next-line import/no-unused-modules\n\nfunction distanceAndSkiddingToXY(placement, rects, offset) {\n  var basePlacement = (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(placement);\n  var invertDistance = [_enums_js__WEBPACK_IMPORTED_MODULE_1__.left, _enums_js__WEBPACK_IMPORTED_MODULE_1__.top].indexOf(basePlacement) >= 0 ? -1 : 1;\n\n  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {\n    placement: placement\n  })) : offset,\n      skidding = _ref[0],\n      distance = _ref[1];\n\n  skidding = skidding || 0;\n  distance = (distance || 0) * invertDistance;\n  return [_enums_js__WEBPACK_IMPORTED_MODULE_1__.left, _enums_js__WEBPACK_IMPORTED_MODULE_1__.right].indexOf(basePlacement) >= 0 ? {\n    x: distance,\n    y: skidding\n  } : {\n    x: skidding,\n    y: distance\n  };\n}\n\nfunction offset(_ref2) {\n  var state = _ref2.state,\n      options = _ref2.options,\n      name = _ref2.name;\n  var _options$offset = options.offset,\n      offset = _options$offset === void 0 ? [0, 0] : _options$offset;\n  var data = _enums_js__WEBPACK_IMPORTED_MODULE_1__.placements.reduce(function (acc, placement) {\n    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);\n    return acc;\n  }, {});\n  var _data$state$placement = data[state.placement],\n      x = _data$state$placement.x,\n      y = _data$state$placement.y;\n\n  if (state.modifiersData.popperOffsets != null) {\n    state.modifiersData.popperOffsets.x += x;\n    state.modifiersData.popperOffsets.y += y;\n  }\n\n  state.modifiersData[name] = data;\n} // eslint-disable-next-line import/no-unused-modules\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  name: 'offset',\n  enabled: true,\n  phase: 'main',\n  requires: ['popperOffsets'],\n  fn: offset\n});\n\n//# sourceURL=webpack://moveslider/./node_modules/@popperjs/core/lib/modifiers/offset.js?");

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_computeOffsets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/computeOffsets.js */ \"./node_modules/@popperjs/core/lib/utils/computeOffsets.js\");\n\n\nfunction popperOffsets(_ref) {\n  var state = _ref.state,\n      name = _ref.name;\n  // Offsets are the actual position the popper needs to have to be\n  // properly positioned near its reference element\n  // This is the most basic placement, and will be adjusted by\n  // the modifiers in the next step\n  state.modifiersData[name] = (0,_utils_computeOffsets_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    reference: state.rects.reference,\n    element: state.rects.popper,\n    strategy: 'absolute',\n    placement: state.placement\n  });\n} // eslint-disable-next-line import/no-unused-modules\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  name: 'popperOffsets',\n  enabled: true,\n  phase: 'read',\n  fn: popperOffsets,\n  data: {}\n});\n\n//# sourceURL=webpack://moveslider/./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js?");

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../enums.js */ \"./node_modules/@popperjs/core/lib/enums.js\");\n/* harmony import */ var _utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getBasePlacement.js */ \"./node_modules/@popperjs/core/lib/utils/getBasePlacement.js\");\n/* harmony import */ var _utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getMainAxisFromPlacement.js */ \"./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js\");\n/* harmony import */ var _utils_getAltAxis_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getAltAxis.js */ \"./node_modules/@popperjs/core/lib/utils/getAltAxis.js\");\n/* harmony import */ var _utils_within_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/within.js */ \"./node_modules/@popperjs/core/lib/utils/within.js\");\n/* harmony import */ var _dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom-utils/getLayoutRect.js */ \"./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js\");\n/* harmony import */ var _dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dom-utils/getOffsetParent.js */ \"./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js\");\n/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/detectOverflow.js */ \"./node_modules/@popperjs/core/lib/utils/detectOverflow.js\");\n/* harmony import */ var _utils_getVariation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getVariation.js */ \"./node_modules/@popperjs/core/lib/utils/getVariation.js\");\n/* harmony import */ var _utils_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/getFreshSideObject.js */ \"./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js\");\n/* harmony import */ var _utils_math_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/math.js */ \"./node_modules/@popperjs/core/lib/utils/math.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nfunction preventOverflow(_ref) {\n  var state = _ref.state,\n      options = _ref.options,\n      name = _ref.name;\n  var _options$mainAxis = options.mainAxis,\n      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,\n      _options$altAxis = options.altAxis,\n      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,\n      boundary = options.boundary,\n      rootBoundary = options.rootBoundary,\n      altBoundary = options.altBoundary,\n      padding = options.padding,\n      _options$tether = options.tether,\n      tether = _options$tether === void 0 ? true : _options$tether,\n      _options$tetherOffset = options.tetherOffset,\n      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;\n  var overflow = (0,_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state, {\n    boundary: boundary,\n    rootBoundary: rootBoundary,\n    padding: padding,\n    altBoundary: altBoundary\n  });\n  var basePlacement = (0,_utils_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(state.placement);\n  var variation = (0,_utils_getVariation_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(state.placement);\n  var isBasePlacement = !variation;\n  var mainAxis = (0,_utils_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(basePlacement);\n  var altAxis = (0,_utils_getAltAxis_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(mainAxis);\n  var popperOffsets = state.modifiersData.popperOffsets;\n  var referenceRect = state.rects.reference;\n  var popperRect = state.rects.popper;\n  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {\n    placement: state.placement\n  })) : tetherOffset;\n  var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {\n    mainAxis: tetherOffsetValue,\n    altAxis: tetherOffsetValue\n  } : Object.assign({\n    mainAxis: 0,\n    altAxis: 0\n  }, tetherOffsetValue);\n  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;\n  var data = {\n    x: 0,\n    y: 0\n  };\n\n  if (!popperOffsets) {\n    return;\n  }\n\n  if (checkMainAxis) {\n    var _offsetModifierState$;\n\n    var mainSide = mainAxis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_5__.top : _enums_js__WEBPACK_IMPORTED_MODULE_5__.left;\n    var altSide = mainAxis === 'y' ? _enums_js__WEBPACK_IMPORTED_MODULE_5__.bottom : _enums_js__WEBPACK_IMPORTED_MODULE_5__.right;\n    var len = mainAxis === 'y' ? 'height' : 'width';\n    var offset = popperOffsets[mainAxis];\n    var min = offset + overflow[mainSide];\n    var max = offset - overflow[altSide];\n    var additive = tether ? -popperRect[len] / 2 : 0;\n    var minLen = variation === _enums_js__WEBPACK_IMPORTED_MODULE_5__.start ? referenceRect[len] : popperRect[len];\n    var maxLen = variation === _enums_js__WEBPACK_IMPORTED_MODULE_5__.start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go\n    // outside the reference bounds\n\n    var arrowElement = state.elements.arrow;\n    var arrowRect = tether && arrowElement ? (0,_dom_utils_getLayoutRect_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(arrowElement) : {\n      width: 0,\n      height: 0\n    };\n    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : (0,_utils_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n    var arrowPaddingMin = arrowPaddingObject[mainSide];\n    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want\n    // to include its full size in the calculation. If the reference is small\n    // and near the edge of a boundary, the popper can overflow even if the\n    // reference is not overflowing as well (e.g. virtual elements with no\n    // width or height)\n\n    var arrowLen = (0,_utils_within_js__WEBPACK_IMPORTED_MODULE_8__.within)(0, referenceRect[len], arrowRect[len]);\n    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;\n    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;\n    var arrowOffsetParent = state.elements.arrow && (0,_dom_utils_getOffsetParent_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(state.elements.arrow);\n    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;\n    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;\n    var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;\n    var tetherMax = offset + maxOffset - offsetModifierValue;\n    var preventedOffset = (0,_utils_within_js__WEBPACK_IMPORTED_MODULE_8__.within)(tether ? (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_10__.min)(min, tetherMin) : min, offset, tether ? (0,_utils_math_js__WEBPACK_IMPORTED_MODULE_10__.max)(max, tetherMax) : max);\n    popperOffsets[mainAxis] = preventedOffset;\n    data[mainAxis] = preventedOffset - offset;\n  }\n\n  if (checkAltAxis) {\n    var _offsetModifierState$2;\n\n    var _mainSide = mainAxis === 'x' ? _enums_js__WEBPACK_IMPORTED_MODULE_5__.top : _enums_js__WEBPACK_IMPORTED_MODULE_5__.left;\n\n    var _altSide = mainAxis === 'x' ? _enums_js__WEBPACK_IMPORTED_MODULE_5__.bottom : _enums_js__WEBPACK_IMPORTED_MODULE_5__.right;\n\n    var _offset = popperOffsets[altAxis];\n\n    var _len = altAxis === 'y' ? 'height' : 'width';\n\n    var _min = _offset + overflow[_mainSide];\n\n    var _max = _offset - overflow[_altSide];\n\n    var isOriginSide = [_enums_js__WEBPACK_IMPORTED_MODULE_5__.top, _enums_js__WEBPACK_IMPORTED_MODULE_5__.left].indexOf(basePlacement) !== -1;\n\n    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;\n\n    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;\n\n    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;\n\n    var _preventedOffset = tether && isOriginSide ? (0,_utils_within_js__WEBPACK_IMPORTED_MODULE_8__.withinMaxClamp)(_tetherMin, _offset, _tetherMax) : (0,_utils_within_js__WEBPACK_IMPORTED_MODULE_8__.within)(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);\n\n    popperOffsets[altAxis] = _preventedOffset;\n    data[altAxis] = _preventedOffset - _offset;\n  }\n\n  state.modifiersData[name] = data;\n} // eslint-disable-next-line import/no-unused-modules\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  name: 'preventOverflow',\n  enabled: true,\n  phase: 'main',\n  fn: preventOverflow,\n  requiresIfExists: ['offset']\n});\n\n//# sourceURL=webpack://moveslider/./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js?");

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/popper-lite.js":
/*!********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/popper-lite.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createPopper\": () => (/* binding */ createPopper),\n/* harmony export */   \"defaultModifiers\": () => (/* binding */ defaultModifiers),\n/* harmony export */   \"detectOverflow\": () => (/* reexport safe */ _createPopper_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n/* harmony export */   \"popperGenerator\": () => (/* reexport safe */ _createPopper_js__WEBPACK_IMPORTED_MODULE_4__.popperGenerator)\n/* harmony export */ });\n/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createPopper.js */ \"./node_modules/@popperjs/core/lib/createPopper.js\");\n/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createPopper.js */ \"./node_modules/@popperjs/core/lib/utils/detectOverflow.js\");\n/* harmony import */ var _modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modifiers/eventListeners.js */ \"./node_modules/@popperjs/core/lib/modifiers/eventListeners.js\");\n/* harmony import */ var _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifiers/popperOffsets.js */ \"./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js\");\n/* harmony import */ var _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modifiers/computeStyles.js */ \"./node_modules/@popperjs/core/lib/modifiers/computeStyles.js\");\n/* harmony import */ var _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modifiers/applyStyles.js */ \"./node_modules/@popperjs/core/lib/modifiers/applyStyles.js\");\n\n\n\n\n\nvar defaultModifiers = [_modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\nvar createPopper = /*#__PURE__*/(0,_createPopper_js__WEBPACK_IMPORTED_MODULE_4__.popperGenerator)({\n  defaultModifiers: defaultModifiers\n}); // eslint-disable-next-line import/no-unused-modules\n\n\n\n//# sourceURL=webpack://moveslider/./node_modules/@popperjs/core/lib/popper-lite.js?");

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/popper.js":
/*!***************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/popper.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"applyStyles\": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.applyStyles),\n/* harmony export */   \"arrow\": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.arrow),\n/* harmony export */   \"computeStyles\": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.computeStyles),\n/* harmony export */   \"createPopper\": () => (/* binding */ createPopper),\n/* harmony export */   \"createPopperLite\": () => (/* reexport safe */ _popper_lite_js__WEBPACK_IMPORTED_MODULE_11__.createPopper),\n/* harmony export */   \"defaultModifiers\": () => (/* binding */ defaultModifiers),\n/* harmony export */   \"detectOverflow\": () => (/* reexport safe */ _createPopper_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"]),\n/* harmony export */   \"eventListeners\": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.eventListeners),\n/* harmony export */   \"flip\": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.flip),\n/* harmony export */   \"hide\": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.hide),\n/* harmony export */   \"offset\": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.offset),\n/* harmony export */   \"popperGenerator\": () => (/* reexport safe */ _createPopper_js__WEBPACK_IMPORTED_MODULE_9__.popperGenerator),\n/* harmony export */   \"popperOffsets\": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.popperOffsets),\n/* harmony export */   \"preventOverflow\": () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.preventOverflow)\n/* harmony export */ });\n/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./createPopper.js */ \"./node_modules/@popperjs/core/lib/createPopper.js\");\n/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./createPopper.js */ \"./node_modules/@popperjs/core/lib/utils/detectOverflow.js\");\n/* harmony import */ var _modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modifiers/eventListeners.js */ \"./node_modules/@popperjs/core/lib/modifiers/eventListeners.js\");\n/* harmony import */ var _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifiers/popperOffsets.js */ \"./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js\");\n/* harmony import */ var _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modifiers/computeStyles.js */ \"./node_modules/@popperjs/core/lib/modifiers/computeStyles.js\");\n/* harmony import */ var _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modifiers/applyStyles.js */ \"./node_modules/@popperjs/core/lib/modifiers/applyStyles.js\");\n/* harmony import */ var _modifiers_offset_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modifiers/offset.js */ \"./node_modules/@popperjs/core/lib/modifiers/offset.js\");\n/* harmony import */ var _modifiers_flip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modifiers/flip.js */ \"./node_modules/@popperjs/core/lib/modifiers/flip.js\");\n/* harmony import */ var _modifiers_preventOverflow_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modifiers/preventOverflow.js */ \"./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js\");\n/* harmony import */ var _modifiers_arrow_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modifiers/arrow.js */ \"./node_modules/@popperjs/core/lib/modifiers/arrow.js\");\n/* harmony import */ var _modifiers_hide_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modifiers/hide.js */ \"./node_modules/@popperjs/core/lib/modifiers/hide.js\");\n/* harmony import */ var _popper_lite_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./popper-lite.js */ \"./node_modules/@popperjs/core/lib/popper-lite.js\");\n/* harmony import */ var _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modifiers/index.js */ \"./node_modules/@popperjs/core/lib/modifiers/index.js\");\n\n\n\n\n\n\n\n\n\n\nvar defaultModifiers = [_modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _modifiers_offset_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _modifiers_flip_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _modifiers_preventOverflow_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"], _modifiers_arrow_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"], _modifiers_hide_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"]];\nvar createPopper = /*#__PURE__*/(0,_createPopper_js__WEBPACK_IMPORTED_MODULE_9__.popperGenerator)({\n  defaultModifiers: defaultModifiers\n}); // eslint-disable-next-line import/no-unused-modules\n\n // eslint-disable-next-line import/no-unused-modules\n\n // eslint-disable-next-line import/no-unused-modules\n\n\n\n//# sourceURL=webpack://moveslider/./node_modules/@popperjs/core/lib/popper.js?");

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ computeAutoPlacement)\n/* harmony export */ });\n/* harmony import */ var _getVariation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getVariation.js */ \"./node_modules/@popperjs/core/lib/utils/getVariation.js\");\n/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ \"./node_modules/@popperjs/core/lib/enums.js\");\n/* harmony import */ var _detectOverflow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detectOverflow.js */ \"./node_modules/@popperjs/core/lib/utils/detectOverflow.js\");\n/* harmony import */ var _getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getBasePlacement.js */ \"./node_modules/@popperjs/core/lib/utils/getBasePlacement.js\");\n\n\n\n\nfunction computeAutoPlacement(state, options) {\n  if (options === void 0) {\n    options = {};\n  }\n\n  var _options = options,\n      placement = _options.placement,\n      boundary = _options.boundary,\n      rootBoundary = _options.rootBoundary,\n      padding = _options.padding,\n      flipVariations = _options.flipVariations,\n      _options$allowedAutoP = _options.allowedAutoPlacements,\n      allowedAutoPlacements = _options$allowedAutoP === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.placements : _options$allowedAutoP;\n  var variation = (0,_getVariation_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(placement);\n  var placements = variation ? flipVariations ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.variationPlacements : _enums_js__WEBPACK_IMPORTED_MODULE_0__.variationPlacements.filter(function (placement) {\n    return (0,_getVariation_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(placement) === variation;\n  }) : _enums_js__WEBPACK_IMPORTED_MODULE_0__.basePlacements;\n  var allowedPlacements = placements.filter(function (placement) {\n    return allowedAutoPlacements.indexOf(placement) >= 0;\n  });\n\n  if (allowedPlacements.length === 0) {\n    allowedPlacements = placements;\n\n    if (true) {\n      console.error(['Popper: The `allowedAutoPlacements` option did not allow any', 'placements. Ensure the `placement` option matches the variation', 'of the allowed placements.', 'For example, \"auto\" cannot be used to allow \"bottom-start\".', 'Use \"auto-start\" instead.'].join(' '));\n    }\n  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...\n\n\n  var overflows = allowedPlacements.reduce(function (acc, placement) {\n    acc[placement] = (0,_detectOverflow_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(state, {\n      placement: placement,\n      boundary: boundary,\n      rootBoundary: rootBoundary,\n      padding: padding\n    })[(0,_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(placement)];\n    return acc;\n  }, {});\n  return Object.keys(overflows).sort(function (a, b) {\n    return overflows[a] - overflows[b];\n  });\n}\n\n//# sourceURL=webpack://moveslider/./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js?");

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/computeOffsets.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/computeOffsets.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ computeOffsets)\n/* harmony export */ });\n/* harmony import */ var _getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBasePlacement.js */ \"./node_modules/@popperjs/core/lib/utils/getBasePlacement.js\");\n/* harmony import */ var _getVariation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getVariation.js */ \"./node_modules/@popperjs/core/lib/utils/getVariation.js\");\n/* harmony import */ var _getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getMainAxisFromPlacement.js */ \"./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js\");\n/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums.js */ \"./node_modules/@popperjs/core/lib/enums.js\");\n\n\n\n\nfunction computeOffsets(_ref) {\n  var reference = _ref.reference,\n      element = _ref.element,\n      placement = _ref.placement;\n  var basePlacement = placement ? (0,_getBasePlacement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(placement) : null;\n  var variation = placement ? (0,_getVariation_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(placement) : null;\n  var commonX = reference.x + reference.width / 2 - element.width / 2;\n  var commonY = reference.y + reference.height / 2 - element.height / 2;\n  var offsets;\n\n  switch (basePlacement) {\n    case _enums_js__WEBPACK_IMPORTED_MODULE_2__.top:\n      offsets = {\n        x: commonX,\n        y: reference.y - element.height\n      };\n      break;\n\n    case _enums_js__WEBPACK_IMPORTED_MODULE_2__.bottom:\n      offsets = {\n        x: commonX,\n        y: reference.y + reference.height\n      };\n      break;\n\n    case _enums_js__WEBPACK_IMPORTED_MODULE_2__.right:\n      offsets = {\n        x: reference.x + reference.width,\n        y: commonY\n      };\n      break;\n\n    case _enums_js__WEBPACK_IMPORTED_MODULE_2__.left:\n      offsets = {\n        x: reference.x - element.width,\n        y: commonY\n      };\n      break;\n\n    default:\n      offsets = {\n        x: reference.x,\n        y: reference.y\n      };\n  }\n\n  var mainAxis = basePlacement ? (0,_getMainAxisFromPlacement_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(basePlacement) : null;\n\n  if (mainAxis != null) {\n    var len = mainAxis === 'y' ? 'height' : 'width';\n\n    switch (variation) {\n      case _enums_js__WEBPACK_IMPORTED_MODULE_2__.start:\n        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);\n        break;\n\n      case _enums_js__WEBPACK_IMPORTED_MODULE_2__.end:\n        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);\n        break;\n\n      default:\n    }\n  }\n\n  return offsets;\n}\n\n//# sourceURL=webpack://moveslider/./node_modules/@popperjs/core/lib/utils/computeOffsets.js?");

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/debounce.js":
/*!***********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/debounce.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ debounce)\n/* harmony export */ });\nfunction debounce(fn) {\n  var pending;\n  return function () {\n    if (!pending) {\n      pending = new Promise(function (resolve) {\n        Promise.resolve().then(function () {\n          pending = undefined;\n          resolve(fn());\n        });\n      });\n    }\n\n    return pending;\n  };\n}\n\n//# sourceURL=webpack://moveslider/./node_modules/@popperjs/core/lib/utils/debounce.js?");

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/detectOverflow.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/detectOverflow.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ detectOverflow)\n/* harmony export */ });\n/* harmony import */ var _dom_utils_getClippingRect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom-utils/getClippingRect.js */ \"./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js\");\n/* harmony import */ var _dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dom-utils/getDocumentElement.js */ \"./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js\");\n/* harmony import */ var _dom_utils_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dom-utils/getBoundingClientRect.js */ \"./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js\");\n/* harmony import */ var _computeOffsets_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./computeOffsets.js */ \"./node_modules/@popperjs/core/lib/utils/computeOffsets.js\");\n/* harmony import */ var _rectToClientRect_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rectToClientRect.js */ \"./node_modules/@popperjs/core/lib/utils/rectToClientRect.js\");\n/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ \"./node_modules/@popperjs/core/lib/enums.js\");\n/* harmony import */ var _dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dom-utils/instanceOf.js */ \"./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js\");\n/* harmony import */ var _mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mergePaddingObject.js */ \"./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js\");\n/* harmony import */ var _expandToHashMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expandToHashMap.js */ \"./node_modules/@popperjs/core/lib/utils/expandToHashMap.js\");\n\n\n\n\n\n\n\n\n // eslint-disable-next-line import/no-unused-modules\n\nfunction detectOverflow(state, options) {\n  if (options === void 0) {\n    options = {};\n  }\n\n  var _options = options,\n      _options$placement = _options.placement,\n      placement = _options$placement === void 0 ? state.placement : _options$placement,\n      _options$strategy = _options.strategy,\n      strategy = _options$strategy === void 0 ? state.strategy : _options$strategy,\n      _options$boundary = _options.boundary,\n      boundary = _options$boundary === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.clippingParents : _options$boundary,\n      _options$rootBoundary = _options.rootBoundary,\n      rootBoundary = _options$rootBoundary === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.viewport : _options$rootBoundary,\n      _options$elementConte = _options.elementContext,\n      elementContext = _options$elementConte === void 0 ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper : _options$elementConte,\n      _options$altBoundary = _options.altBoundary,\n      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,\n      _options$padding = _options.padding,\n      padding = _options$padding === void 0 ? 0 : _options$padding;\n  var paddingObject = (0,_mergePaddingObject_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(typeof padding !== 'number' ? padding : (0,_expandToHashMap_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(padding, _enums_js__WEBPACK_IMPORTED_MODULE_0__.basePlacements));\n  var altContext = elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper ? _enums_js__WEBPACK_IMPORTED_MODULE_0__.reference : _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper;\n  var popperRect = state.rects.popper;\n  var element = state.elements[altBoundary ? altContext : elementContext];\n  var clippingClientRect = (0,_dom_utils_getClippingRect_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,_dom_utils_instanceOf_js__WEBPACK_IMPORTED_MODULE_4__.isElement)(element) ? element : element.contextElement || (0,_dom_utils_getDocumentElement_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(state.elements.popper), boundary, rootBoundary, strategy);\n  var referenceClientRect = (0,_dom_utils_getBoundingClientRect_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(state.elements.reference);\n  var popperOffsets = (0,_computeOffsets_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\n    reference: referenceClientRect,\n    element: popperRect,\n    strategy: 'absolute',\n    placement: placement\n  });\n  var popperClientRect = (0,_rectToClientRect_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object.assign({}, popperRect, popperOffsets));\n  var elementClientRect = elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect\n  // 0 or negative = within the clipping rect\n\n  var overflowOffsets = {\n    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,\n    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,\n    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,\n    right: elementClientRect.right - clippingClientRect.right + paddingObject.right\n  };\n  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element\n\n  if (elementContext === _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper && offsetData) {\n    var offset = offsetData[placement];\n    Object.keys(overflowOffsets).forEach(function (key) {\n      var multiply = [_enums_js__WEBPACK_IMPORTED_MODULE_0__.right, _enums_js__WEBPACK_IMPORTED_MODULE_0__.bottom].indexOf(key) >= 0 ? 1 : -1;\n      var axis = [_enums_js__WEBPACK_IMPORTED_MODULE_0__.top, _enums_js__WEBPACK_IMPORTED_MODULE_0__.bottom].indexOf(key) >= 0 ? 'y' : 'x';\n      overflowOffsets[key] += offset[axis] * multiply;\n    });\n  }\n\n  return overflowOffsets;\n}\n\n//# sourceURL=webpack://moveslider/./node_modules/@popperjs/core/lib/utils/detectOverflow.js?");

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/expandToHashMap.js":
/*!******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/expandToHashMap.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ expandToHashMap)\n/* harmony export */ });\nfunction expandToHashMap(value, keys) {\n  return keys.reduce(function (hashMap, key) {\n    hashMap[key] = value;\n    return hashMap;\n  }, {});\n}\n\n//# sourceURL=webpack://moveslider/./node_modules/@popperjs/core/lib/utils/expandToHashMap.js?");

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/format.js":
/*!*********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/format.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ format)\n/* harmony export */ });\nfunction format(str) {\n  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n    args[_key - 1] = arguments[_key];\n  }\n\n  return [].concat(args).reduce(function (p, c) {\n    return p.replace(/%s/, c);\n  }, str);\n}\n\n//# sourceURL=webpack://moveslider/./node_modules/@popperjs/core/lib/utils/format.js?");

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getAltAxis.js":
/*!*************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getAltAxis.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getAltAxis)\n/* harmony export */ });\nfunction getAltAxis(axis) {\n  return axis === 'x' ? 'y' : 'x';\n}\n\n//# sourceURL=webpack://moveslider/./node_modules/@popperjs/core/lib/utils/getAltAxis.js?");

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getBasePlacement.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getBasePlacement.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getBasePlacement)\n/* harmony export */ });\n\nfunction getBasePlacement(placement) {\n  return placement.split('-')[0];\n}\n\n//# sourceURL=webpack://moveslider/./node_modules/@popperjs/core/lib/utils/getBasePlacement.js?");

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getFreshSideObject)\n/* harmony export */ });\nfunction getFreshSideObject() {\n  return {\n    top: 0,\n    right: 0,\n    bottom: 0,\n    left: 0\n  };\n}\n\n//# sourceURL=webpack://moveslider/./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js?");

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getMainAxisFromPlacement)\n/* harmony export */ });\nfunction getMainAxisFromPlacement(placement) {\n  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';\n}\n\n//# sourceURL=webpack://moveslider/./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js?");

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getOppositePlacement)\n/* harmony export */ });\nvar hash = {\n  left: 'right',\n  right: 'left',\n  bottom: 'top',\n  top: 'bottom'\n};\nfunction getOppositePlacement(placement) {\n  return placement.replace(/left|right|bottom|top/g, function (matched) {\n    return hash[matched];\n  });\n}\n\n//# sourceURL=webpack://moveslider/./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js?");

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getOppositeVariationPlacement)\n/* harmony export */ });\nvar hash = {\n  start: 'end',\n  end: 'start'\n};\nfunction getOppositeVariationPlacement(placement) {\n  return placement.replace(/start|end/g, function (matched) {\n    return hash[matched];\n  });\n}\n\n//# sourceURL=webpack://moveslider/./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js?");

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/getVariation.js":
/*!***************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/getVariation.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getVariation)\n/* harmony export */ });\nfunction getVariation(placement) {\n  return placement.split('-')[1];\n}\n\n//# sourceURL=webpack://moveslider/./node_modules/@popperjs/core/lib/utils/getVariation.js?");

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/math.js":
/*!*******************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/math.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"max\": () => (/* binding */ max),\n/* harmony export */   \"min\": () => (/* binding */ min),\n/* harmony export */   \"round\": () => (/* binding */ round)\n/* harmony export */ });\nvar max = Math.max;\nvar min = Math.min;\nvar round = Math.round;\n\n//# sourceURL=webpack://moveslider/./node_modules/@popperjs/core/lib/utils/math.js?");

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/mergeByName.js":
/*!**************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/mergeByName.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ mergeByName)\n/* harmony export */ });\nfunction mergeByName(modifiers) {\n  var merged = modifiers.reduce(function (merged, current) {\n    var existing = merged[current.name];\n    merged[current.name] = existing ? Object.assign({}, existing, current, {\n      options: Object.assign({}, existing.options, current.options),\n      data: Object.assign({}, existing.data, current.data)\n    }) : current;\n    return merged;\n  }, {}); // IE11 does not support Object.values\n\n  return Object.keys(merged).map(function (key) {\n    return merged[key];\n  });\n}\n\n//# sourceURL=webpack://moveslider/./node_modules/@popperjs/core/lib/utils/mergeByName.js?");

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ mergePaddingObject)\n/* harmony export */ });\n/* harmony import */ var _getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getFreshSideObject.js */ \"./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js\");\n\nfunction mergePaddingObject(paddingObject) {\n  return Object.assign({}, (0,_getFreshSideObject_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(), paddingObject);\n}\n\n//# sourceURL=webpack://moveslider/./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js?");

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/orderModifiers.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/orderModifiers.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ orderModifiers)\n/* harmony export */ });\n/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ \"./node_modules/@popperjs/core/lib/enums.js\");\n // source: https://stackoverflow.com/questions/49875255\n\nfunction order(modifiers) {\n  var map = new Map();\n  var visited = new Set();\n  var result = [];\n  modifiers.forEach(function (modifier) {\n    map.set(modifier.name, modifier);\n  }); // On visiting object, check for its dependencies and visit them recursively\n\n  function sort(modifier) {\n    visited.add(modifier.name);\n    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);\n    requires.forEach(function (dep) {\n      if (!visited.has(dep)) {\n        var depModifier = map.get(dep);\n\n        if (depModifier) {\n          sort(depModifier);\n        }\n      }\n    });\n    result.push(modifier);\n  }\n\n  modifiers.forEach(function (modifier) {\n    if (!visited.has(modifier.name)) {\n      // check for visited object\n      sort(modifier);\n    }\n  });\n  return result;\n}\n\nfunction orderModifiers(modifiers) {\n  // order based on dependencies\n  var orderedModifiers = order(modifiers); // order based on phase\n\n  return _enums_js__WEBPACK_IMPORTED_MODULE_0__.modifierPhases.reduce(function (acc, phase) {\n    return acc.concat(orderedModifiers.filter(function (modifier) {\n      return modifier.phase === phase;\n    }));\n  }, []);\n}\n\n//# sourceURL=webpack://moveslider/./node_modules/@popperjs/core/lib/utils/orderModifiers.js?");

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/rectToClientRect.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/rectToClientRect.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rectToClientRect)\n/* harmony export */ });\nfunction rectToClientRect(rect) {\n  return Object.assign({}, rect, {\n    left: rect.x,\n    top: rect.y,\n    right: rect.x + rect.width,\n    bottom: rect.y + rect.height\n  });\n}\n\n//# sourceURL=webpack://moveslider/./node_modules/@popperjs/core/lib/utils/rectToClientRect.js?");

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/uniqueBy.js":
/*!***********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/uniqueBy.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ uniqueBy)\n/* harmony export */ });\nfunction uniqueBy(arr, fn) {\n  var identifiers = new Set();\n  return arr.filter(function (item) {\n    var identifier = fn(item);\n\n    if (!identifiers.has(identifier)) {\n      identifiers.add(identifier);\n      return true;\n    }\n  });\n}\n\n//# sourceURL=webpack://moveslider/./node_modules/@popperjs/core/lib/utils/uniqueBy.js?");

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/userAgent.js":
/*!************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/userAgent.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getUAString)\n/* harmony export */ });\nfunction getUAString() {\n  var uaData = navigator.userAgentData;\n\n  if (uaData != null && uaData.brands) {\n    return uaData.brands.map(function (item) {\n      return item.brand + \"/\" + item.version;\n    }).join(' ');\n  }\n\n  return navigator.userAgent;\n}\n\n//# sourceURL=webpack://moveslider/./node_modules/@popperjs/core/lib/utils/userAgent.js?");

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/validateModifiers.js":
/*!********************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/validateModifiers.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ validateModifiers)\n/* harmony export */ });\n/* harmony import */ var _format_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./format.js */ \"./node_modules/@popperjs/core/lib/utils/format.js\");\n/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ \"./node_modules/@popperjs/core/lib/enums.js\");\n\n\nvar INVALID_MODIFIER_ERROR = 'Popper: modifier \"%s\" provided an invalid %s property, expected %s but got %s';\nvar MISSING_DEPENDENCY_ERROR = 'Popper: modifier \"%s\" requires \"%s\", but \"%s\" modifier is not available';\nvar VALID_PROPERTIES = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];\nfunction validateModifiers(modifiers) {\n  modifiers.forEach(function (modifier) {\n    [].concat(Object.keys(modifier), VALID_PROPERTIES) // IE11-compatible replacement for `new Set(iterable)`\n    .filter(function (value, index, self) {\n      return self.indexOf(value) === index;\n    }).forEach(function (key) {\n      switch (key) {\n        case 'name':\n          if (typeof modifier.name !== 'string') {\n            console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(INVALID_MODIFIER_ERROR, String(modifier.name), '\"name\"', '\"string\"', \"\\\"\" + String(modifier.name) + \"\\\"\"));\n          }\n\n          break;\n\n        case 'enabled':\n          if (typeof modifier.enabled !== 'boolean') {\n            console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(INVALID_MODIFIER_ERROR, modifier.name, '\"enabled\"', '\"boolean\"', \"\\\"\" + String(modifier.enabled) + \"\\\"\"));\n          }\n\n          break;\n\n        case 'phase':\n          if (_enums_js__WEBPACK_IMPORTED_MODULE_1__.modifierPhases.indexOf(modifier.phase) < 0) {\n            console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(INVALID_MODIFIER_ERROR, modifier.name, '\"phase\"', \"either \" + _enums_js__WEBPACK_IMPORTED_MODULE_1__.modifierPhases.join(', '), \"\\\"\" + String(modifier.phase) + \"\\\"\"));\n          }\n\n          break;\n\n        case 'fn':\n          if (typeof modifier.fn !== 'function') {\n            console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(INVALID_MODIFIER_ERROR, modifier.name, '\"fn\"', '\"function\"', \"\\\"\" + String(modifier.fn) + \"\\\"\"));\n          }\n\n          break;\n\n        case 'effect':\n          if (modifier.effect != null && typeof modifier.effect !== 'function') {\n            console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(INVALID_MODIFIER_ERROR, modifier.name, '\"effect\"', '\"function\"', \"\\\"\" + String(modifier.fn) + \"\\\"\"));\n          }\n\n          break;\n\n        case 'requires':\n          if (modifier.requires != null && !Array.isArray(modifier.requires)) {\n            console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(INVALID_MODIFIER_ERROR, modifier.name, '\"requires\"', '\"array\"', \"\\\"\" + String(modifier.requires) + \"\\\"\"));\n          }\n\n          break;\n\n        case 'requiresIfExists':\n          if (!Array.isArray(modifier.requiresIfExists)) {\n            console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(INVALID_MODIFIER_ERROR, modifier.name, '\"requiresIfExists\"', '\"array\"', \"\\\"\" + String(modifier.requiresIfExists) + \"\\\"\"));\n          }\n\n          break;\n\n        case 'options':\n        case 'data':\n          break;\n\n        default:\n          console.error(\"PopperJS: an invalid property has been provided to the \\\"\" + modifier.name + \"\\\" modifier, valid properties are \" + VALID_PROPERTIES.map(function (s) {\n            return \"\\\"\" + s + \"\\\"\";\n          }).join(', ') + \"; but \\\"\" + key + \"\\\" was provided.\");\n      }\n\n      modifier.requires && modifier.requires.forEach(function (requirement) {\n        if (modifiers.find(function (mod) {\n          return mod.name === requirement;\n        }) == null) {\n          console.error((0,_format_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));\n        }\n      });\n    });\n  });\n}\n\n//# sourceURL=webpack://moveslider/./node_modules/@popperjs/core/lib/utils/validateModifiers.js?");

/***/ }),

/***/ "./node_modules/@popperjs/core/lib/utils/within.js":
/*!*********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/utils/within.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"within\": () => (/* binding */ within),\n/* harmony export */   \"withinMaxClamp\": () => (/* binding */ withinMaxClamp)\n/* harmony export */ });\n/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math.js */ \"./node_modules/@popperjs/core/lib/utils/math.js\");\n\nfunction within(min, value, max) {\n  return (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.max)(min, (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.min)(value, max));\n}\nfunction withinMaxClamp(min, value, max) {\n  var v = within(min, value, max);\n  return v > max ? max : v;\n}\n\n//# sourceURL=webpack://moveslider/./node_modules/@popperjs/core/lib/utils/within.js?");

/***/ }),

/***/ "./node_modules/bootstrap/dist/js/bootstrap.js":
/*!*****************************************************!*\
  !*** ./node_modules/bootstrap/dist/js/bootstrap.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("/*!\n  * Bootstrap v5.2.2 (https://getbootstrap.com/)\n  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)\n  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n  */\n(function (global, factory) {\n   true ? module.exports = factory(__webpack_require__(/*! @popperjs/core */ \"./node_modules/@popperjs/core/lib/index.js\")) :\n  0;\n})(this, (function (Popper) { 'use strict';\n\n  function _interopNamespace(e) {\n    if (e && e.__esModule) return e;\n    const n = Object.create(null, { [Symbol.toStringTag]: { value: 'Module' } });\n    if (e) {\n      for (const k in e) {\n        if (k !== 'default') {\n          const d = Object.getOwnPropertyDescriptor(e, k);\n          Object.defineProperty(n, k, d.get ? d : {\n            enumerable: true,\n            get: () => e[k]\n          });\n        }\n      }\n    }\n    n.default = e;\n    return Object.freeze(n);\n  }\n\n  const Popper__namespace = /*#__PURE__*/_interopNamespace(Popper);\n\n  /**\n   * --------------------------------------------------------------------------\n   * Bootstrap (v5.2.2): util/index.js\n   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n   * --------------------------------------------------------------------------\n   */\n  const MAX_UID = 1000000;\n  const MILLISECONDS_MULTIPLIER = 1000;\n  const TRANSITION_END = 'transitionend'; // Shout-out Angus Croll (https://goo.gl/pxwQGp)\n\n  const toType = object => {\n    if (object === null || object === undefined) {\n      return `${object}`;\n    }\n\n    return Object.prototype.toString.call(object).match(/\\s([a-z]+)/i)[1].toLowerCase();\n  };\n  /**\n   * Public Util API\n   */\n\n\n  const getUID = prefix => {\n    do {\n      prefix += Math.floor(Math.random() * MAX_UID);\n    } while (document.getElementById(prefix));\n\n    return prefix;\n  };\n\n  const getSelector = element => {\n    let selector = element.getAttribute('data-bs-target');\n\n    if (!selector || selector === '#') {\n      let hrefAttribute = element.getAttribute('href'); // The only valid content that could double as a selector are IDs or classes,\n      // so everything starting with `#` or `.`. If a \"real\" URL is used as the selector,\n      // `document.querySelector` will rightfully complain it is invalid.\n      // See https://github.com/twbs/bootstrap/issues/32273\n\n      if (!hrefAttribute || !hrefAttribute.includes('#') && !hrefAttribute.startsWith('.')) {\n        return null;\n      } // Just in case some CMS puts out a full URL with the anchor appended\n\n\n      if (hrefAttribute.includes('#') && !hrefAttribute.startsWith('#')) {\n        hrefAttribute = `#${hrefAttribute.split('#')[1]}`;\n      }\n\n      selector = hrefAttribute && hrefAttribute !== '#' ? hrefAttribute.trim() : null;\n    }\n\n    return selector;\n  };\n\n  const getSelectorFromElement = element => {\n    const selector = getSelector(element);\n\n    if (selector) {\n      return document.querySelector(selector) ? selector : null;\n    }\n\n    return null;\n  };\n\n  const getElementFromSelector = element => {\n    const selector = getSelector(element);\n    return selector ? document.querySelector(selector) : null;\n  };\n\n  const getTransitionDurationFromElement = element => {\n    if (!element) {\n      return 0;\n    } // Get transition-duration of the element\n\n\n    let {\n      transitionDuration,\n      transitionDelay\n    } = window.getComputedStyle(element);\n    const floatTransitionDuration = Number.parseFloat(transitionDuration);\n    const floatTransitionDelay = Number.parseFloat(transitionDelay); // Return 0 if element or transition duration is not found\n\n    if (!floatTransitionDuration && !floatTransitionDelay) {\n      return 0;\n    } // If multiple durations are defined, take the first\n\n\n    transitionDuration = transitionDuration.split(',')[0];\n    transitionDelay = transitionDelay.split(',')[0];\n    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;\n  };\n\n  const triggerTransitionEnd = element => {\n    element.dispatchEvent(new Event(TRANSITION_END));\n  };\n\n  const isElement = object => {\n    if (!object || typeof object !== 'object') {\n      return false;\n    }\n\n    if (typeof object.jquery !== 'undefined') {\n      object = object[0];\n    }\n\n    return typeof object.nodeType !== 'undefined';\n  };\n\n  const getElement = object => {\n    // it's a jQuery object or a node element\n    if (isElement(object)) {\n      return object.jquery ? object[0] : object;\n    }\n\n    if (typeof object === 'string' && object.length > 0) {\n      return document.querySelector(object);\n    }\n\n    return null;\n  };\n\n  const isVisible = element => {\n    if (!isElement(element) || element.getClientRects().length === 0) {\n      return false;\n    }\n\n    const elementIsVisible = getComputedStyle(element).getPropertyValue('visibility') === 'visible'; // Handle `details` element as its content may falsie appear visible when it is closed\n\n    const closedDetails = element.closest('details:not([open])');\n\n    if (!closedDetails) {\n      return elementIsVisible;\n    }\n\n    if (closedDetails !== element) {\n      const summary = element.closest('summary');\n\n      if (summary && summary.parentNode !== closedDetails) {\n        return false;\n      }\n\n      if (summary === null) {\n        return false;\n      }\n    }\n\n    return elementIsVisible;\n  };\n\n  const isDisabled = element => {\n    if (!element || element.nodeType !== Node.ELEMENT_NODE) {\n      return true;\n    }\n\n    if (element.classList.contains('disabled')) {\n      return true;\n    }\n\n    if (typeof element.disabled !== 'undefined') {\n      return element.disabled;\n    }\n\n    return element.hasAttribute('disabled') && element.getAttribute('disabled') !== 'false';\n  };\n\n  const findShadowRoot = element => {\n    if (!document.documentElement.attachShadow) {\n      return null;\n    } // Can find the shadow root otherwise it'll return the document\n\n\n    if (typeof element.getRootNode === 'function') {\n      const root = element.getRootNode();\n      return root instanceof ShadowRoot ? root : null;\n    }\n\n    if (element instanceof ShadowRoot) {\n      return element;\n    } // when we don't find a shadow root\n\n\n    if (!element.parentNode) {\n      return null;\n    }\n\n    return findShadowRoot(element.parentNode);\n  };\n\n  const noop = () => {};\n  /**\n   * Trick to restart an element's animation\n   *\n   * @param {HTMLElement} element\n   * @return void\n   *\n   * @see https://www.charistheo.io/blog/2021/02/restart-a-css-animation-with-javascript/#restarting-a-css-animation\n   */\n\n\n  const reflow = element => {\n    element.offsetHeight; // eslint-disable-line no-unused-expressions\n  };\n\n  const getjQuery = () => {\n    if (window.jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {\n      return window.jQuery;\n    }\n\n    return null;\n  };\n\n  const DOMContentLoadedCallbacks = [];\n\n  const onDOMContentLoaded = callback => {\n    if (document.readyState === 'loading') {\n      // add listener on the first call when the document is in loading state\n      if (!DOMContentLoadedCallbacks.length) {\n        document.addEventListener('DOMContentLoaded', () => {\n          for (const callback of DOMContentLoadedCallbacks) {\n            callback();\n          }\n        });\n      }\n\n      DOMContentLoadedCallbacks.push(callback);\n    } else {\n      callback();\n    }\n  };\n\n  const isRTL = () => document.documentElement.dir === 'rtl';\n\n  const defineJQueryPlugin = plugin => {\n    onDOMContentLoaded(() => {\n      const $ = getjQuery();\n      /* istanbul ignore if */\n\n      if ($) {\n        const name = plugin.NAME;\n        const JQUERY_NO_CONFLICT = $.fn[name];\n        $.fn[name] = plugin.jQueryInterface;\n        $.fn[name].Constructor = plugin;\n\n        $.fn[name].noConflict = () => {\n          $.fn[name] = JQUERY_NO_CONFLICT;\n          return plugin.jQueryInterface;\n        };\n      }\n    });\n  };\n\n  const execute = callback => {\n    if (typeof callback === 'function') {\n      callback();\n    }\n  };\n\n  const executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {\n    if (!waitForTransition) {\n      execute(callback);\n      return;\n    }\n\n    const durationPadding = 5;\n    const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;\n    let called = false;\n\n    const handler = ({\n      target\n    }) => {\n      if (target !== transitionElement) {\n        return;\n      }\n\n      called = true;\n      transitionElement.removeEventListener(TRANSITION_END, handler);\n      execute(callback);\n    };\n\n    transitionElement.addEventListener(TRANSITION_END, handler);\n    setTimeout(() => {\n      if (!called) {\n        triggerTransitionEnd(transitionElement);\n      }\n    }, emulatedDuration);\n  };\n  /**\n   * Return the previous/next element of a list.\n   *\n   * @param {array} list    The list of elements\n   * @param activeElement   The active element\n   * @param shouldGetNext   Choose to get next or previous element\n   * @param isCycleAllowed\n   * @return {Element|elem} The proper element\n   */\n\n\n  const getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed) => {\n    const listLength = list.length;\n    let index = list.indexOf(activeElement); // if the element does not exist in the list return an element\n    // depending on the direction and if cycle is allowed\n\n    if (index === -1) {\n      return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0];\n    }\n\n    index += shouldGetNext ? 1 : -1;\n\n    if (isCycleAllowed) {\n      index = (index + listLength) % listLength;\n    }\n\n    return list[Math.max(0, Math.min(index, listLength - 1))];\n  };\n\n  /**\n   * --------------------------------------------------------------------------\n   * Bootstrap (v5.2.2): dom/event-handler.js\n   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n   * --------------------------------------------------------------------------\n   */\n  /**\n   * Constants\n   */\n\n  const namespaceRegex = /[^.]*(?=\\..*)\\.|.*/;\n  const stripNameRegex = /\\..*/;\n  const stripUidRegex = /::\\d+$/;\n  const eventRegistry = {}; // Events storage\n\n  let uidEvent = 1;\n  const customEvents = {\n    mouseenter: 'mouseover',\n    mouseleave: 'mouseout'\n  };\n  const nativeEvents = new Set(['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll']);\n  /**\n   * Private methods\n   */\n\n  function makeEventUid(element, uid) {\n    return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;\n  }\n\n  function getElementEvents(element) {\n    const uid = makeEventUid(element);\n    element.uidEvent = uid;\n    eventRegistry[uid] = eventRegistry[uid] || {};\n    return eventRegistry[uid];\n  }\n\n  function bootstrapHandler(element, fn) {\n    return function handler(event) {\n      hydrateObj(event, {\n        delegateTarget: element\n      });\n\n      if (handler.oneOff) {\n        EventHandler.off(element, event.type, fn);\n      }\n\n      return fn.apply(element, [event]);\n    };\n  }\n\n  function bootstrapDelegationHandler(element, selector, fn) {\n    return function handler(event) {\n      const domElements = element.querySelectorAll(selector);\n\n      for (let {\n        target\n      } = event; target && target !== this; target = target.parentNode) {\n        for (const domElement of domElements) {\n          if (domElement !== target) {\n            continue;\n          }\n\n          hydrateObj(event, {\n            delegateTarget: target\n          });\n\n          if (handler.oneOff) {\n            EventHandler.off(element, event.type, selector, fn);\n          }\n\n          return fn.apply(target, [event]);\n        }\n      }\n    };\n  }\n\n  function findHandler(events, callable, delegationSelector = null) {\n    return Object.values(events).find(event => event.callable === callable && event.delegationSelector === delegationSelector);\n  }\n\n  function normalizeParameters(originalTypeEvent, handler, delegationFunction) {\n    const isDelegated = typeof handler === 'string'; // todo: tooltip passes `false` instead of selector, so we need to check\n\n    const callable = isDelegated ? delegationFunction : handler || delegationFunction;\n    let typeEvent = getTypeEvent(originalTypeEvent);\n\n    if (!nativeEvents.has(typeEvent)) {\n      typeEvent = originalTypeEvent;\n    }\n\n    return [isDelegated, callable, typeEvent];\n  }\n\n  function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {\n    if (typeof originalTypeEvent !== 'string' || !element) {\n      return;\n    }\n\n    let [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction); // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position\n    // this prevents the handler from being dispatched the same way as mouseover or mouseout does\n\n    if (originalTypeEvent in customEvents) {\n      const wrapFunction = fn => {\n        return function (event) {\n          if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {\n            return fn.call(this, event);\n          }\n        };\n      };\n\n      callable = wrapFunction(callable);\n    }\n\n    const events = getElementEvents(element);\n    const handlers = events[typeEvent] || (events[typeEvent] = {});\n    const previousFunction = findHandler(handlers, callable, isDelegated ? handler : null);\n\n    if (previousFunction) {\n      previousFunction.oneOff = previousFunction.oneOff && oneOff;\n      return;\n    }\n\n    const uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ''));\n    const fn = isDelegated ? bootstrapDelegationHandler(element, handler, callable) : bootstrapHandler(element, callable);\n    fn.delegationSelector = isDelegated ? handler : null;\n    fn.callable = callable;\n    fn.oneOff = oneOff;\n    fn.uidEvent = uid;\n    handlers[uid] = fn;\n    element.addEventListener(typeEvent, fn, isDelegated);\n  }\n\n  function removeHandler(element, events, typeEvent, handler, delegationSelector) {\n    const fn = findHandler(events[typeEvent], handler, delegationSelector);\n\n    if (!fn) {\n      return;\n    }\n\n    element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));\n    delete events[typeEvent][fn.uidEvent];\n  }\n\n  function removeNamespacedHandlers(element, events, typeEvent, namespace) {\n    const storeElementEvent = events[typeEvent] || {};\n\n    for (const handlerKey of Object.keys(storeElementEvent)) {\n      if (handlerKey.includes(namespace)) {\n        const event = storeElementEvent[handlerKey];\n        removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);\n      }\n    }\n  }\n\n  function getTypeEvent(event) {\n    // allow to get the native events from namespaced events ('click.bs.button' --> 'click')\n    event = event.replace(stripNameRegex, '');\n    return customEvents[event] || event;\n  }\n\n  const EventHandler = {\n    on(element, event, handler, delegationFunction) {\n      addHandler(element, event, handler, delegationFunction, false);\n    },\n\n    one(element, event, handler, delegationFunction) {\n      addHandler(element, event, handler, delegationFunction, true);\n    },\n\n    off(element, originalTypeEvent, handler, delegationFunction) {\n      if (typeof originalTypeEvent !== 'string' || !element) {\n        return;\n      }\n\n      const [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);\n      const inNamespace = typeEvent !== originalTypeEvent;\n      const events = getElementEvents(element);\n      const storeElementEvent = events[typeEvent] || {};\n      const isNamespace = originalTypeEvent.startsWith('.');\n\n      if (typeof callable !== 'undefined') {\n        // Simplest case: handler is passed, remove that listener ONLY.\n        if (!Object.keys(storeElementEvent).length) {\n          return;\n        }\n\n        removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null);\n        return;\n      }\n\n      if (isNamespace) {\n        for (const elementEvent of Object.keys(events)) {\n          removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));\n        }\n      }\n\n      for (const keyHandlers of Object.keys(storeElementEvent)) {\n        const handlerKey = keyHandlers.replace(stripUidRegex, '');\n\n        if (!inNamespace || originalTypeEvent.includes(handlerKey)) {\n          const event = storeElementEvent[keyHandlers];\n          removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);\n        }\n      }\n    },\n\n    trigger(element, event, args) {\n      if (typeof event !== 'string' || !element) {\n        return null;\n      }\n\n      const $ = getjQuery();\n      const typeEvent = getTypeEvent(event);\n      const inNamespace = event !== typeEvent;\n      let jQueryEvent = null;\n      let bubbles = true;\n      let nativeDispatch = true;\n      let defaultPrevented = false;\n\n      if (inNamespace && $) {\n        jQueryEvent = $.Event(event, args);\n        $(element).trigger(jQueryEvent);\n        bubbles = !jQueryEvent.isPropagationStopped();\n        nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();\n        defaultPrevented = jQueryEvent.isDefaultPrevented();\n      }\n\n      let evt = new Event(event, {\n        bubbles,\n        cancelable: true\n      });\n      evt = hydrateObj(evt, args);\n\n      if (defaultPrevented) {\n        evt.preventDefault();\n      }\n\n      if (nativeDispatch) {\n        element.dispatchEvent(evt);\n      }\n\n      if (evt.defaultPrevented && jQueryEvent) {\n        jQueryEvent.preventDefault();\n      }\n\n      return evt;\n    }\n\n  };\n\n  function hydrateObj(obj, meta) {\n    for (const [key, value] of Object.entries(meta || {})) {\n      try {\n        obj[key] = value;\n      } catch (_unused) {\n        Object.defineProperty(obj, key, {\n          configurable: true,\n\n          get() {\n            return value;\n          }\n\n        });\n      }\n    }\n\n    return obj;\n  }\n\n  /**\n   * --------------------------------------------------------------------------\n   * Bootstrap (v5.2.2): dom/data.js\n   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n   * --------------------------------------------------------------------------\n   */\n\n  /**\n   * Constants\n   */\n  const elementMap = new Map();\n  const Data = {\n    set(element, key, instance) {\n      if (!elementMap.has(element)) {\n        elementMap.set(element, new Map());\n      }\n\n      const instanceMap = elementMap.get(element); // make it clear we only want one instance per element\n      // can be removed later when multiple key/instances are fine to be used\n\n      if (!instanceMap.has(key) && instanceMap.size !== 0) {\n        // eslint-disable-next-line no-console\n        console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);\n        return;\n      }\n\n      instanceMap.set(key, instance);\n    },\n\n    get(element, key) {\n      if (elementMap.has(element)) {\n        return elementMap.get(element).get(key) || null;\n      }\n\n      return null;\n    },\n\n    remove(element, key) {\n      if (!elementMap.has(element)) {\n        return;\n      }\n\n      const instanceMap = elementMap.get(element);\n      instanceMap.delete(key); // free up element references if there are no instances left for an element\n\n      if (instanceMap.size === 0) {\n        elementMap.delete(element);\n      }\n    }\n\n  };\n\n  /**\n   * --------------------------------------------------------------------------\n   * Bootstrap (v5.2.2): dom/manipulator.js\n   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n   * --------------------------------------------------------------------------\n   */\n  function normalizeData(value) {\n    if (value === 'true') {\n      return true;\n    }\n\n    if (value === 'false') {\n      return false;\n    }\n\n    if (value === Number(value).toString()) {\n      return Number(value);\n    }\n\n    if (value === '' || value === 'null') {\n      return null;\n    }\n\n    if (typeof value !== 'string') {\n      return value;\n    }\n\n    try {\n      return JSON.parse(decodeURIComponent(value));\n    } catch (_unused) {\n      return value;\n    }\n  }\n\n  function normalizeDataKey(key) {\n    return key.replace(/[A-Z]/g, chr => `-${chr.toLowerCase()}`);\n  }\n\n  const Manipulator = {\n    setDataAttribute(element, key, value) {\n      element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);\n    },\n\n    removeDataAttribute(element, key) {\n      element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);\n    },\n\n    getDataAttributes(element) {\n      if (!element) {\n        return {};\n      }\n\n      const attributes = {};\n      const bsKeys = Object.keys(element.dataset).filter(key => key.startsWith('bs') && !key.startsWith('bsConfig'));\n\n      for (const key of bsKeys) {\n        let pureKey = key.replace(/^bs/, '');\n        pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);\n        attributes[pureKey] = normalizeData(element.dataset[key]);\n      }\n\n      return attributes;\n    },\n\n    getDataAttribute(element, key) {\n      return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));\n    }\n\n  };\n\n  /**\n   * --------------------------------------------------------------------------\n   * Bootstrap (v5.2.2): util/config.js\n   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n   * --------------------------------------------------------------------------\n   */\n  /**\n   * Class definition\n   */\n\n  class Config {\n    // Getters\n    static get Default() {\n      return {};\n    }\n\n    static get DefaultType() {\n      return {};\n    }\n\n    static get NAME() {\n      throw new Error('You have to implement the static method \"NAME\", for each component!');\n    }\n\n    _getConfig(config) {\n      config = this._mergeConfigObj(config);\n      config = this._configAfterMerge(config);\n\n      this._typeCheckConfig(config);\n\n      return config;\n    }\n\n    _configAfterMerge(config) {\n      return config;\n    }\n\n    _mergeConfigObj(config, element) {\n      const jsonConfig = isElement(element) ? Manipulator.getDataAttribute(element, 'config') : {}; // try to parse\n\n      return { ...this.constructor.Default,\n        ...(typeof jsonConfig === 'object' ? jsonConfig : {}),\n        ...(isElement(element) ? Manipulator.getDataAttributes(element) : {}),\n        ...(typeof config === 'object' ? config : {})\n      };\n    }\n\n    _typeCheckConfig(config, configTypes = this.constructor.DefaultType) {\n      for (const property of Object.keys(configTypes)) {\n        const expectedTypes = configTypes[property];\n        const value = config[property];\n        const valueType = isElement(value) ? 'element' : toType(value);\n\n        if (!new RegExp(expectedTypes).test(valueType)) {\n          throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option \"${property}\" provided type \"${valueType}\" but expected type \"${expectedTypes}\".`);\n        }\n      }\n    }\n\n  }\n\n  /**\n   * --------------------------------------------------------------------------\n   * Bootstrap (v5.2.2): base-component.js\n   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n   * --------------------------------------------------------------------------\n   */\n  /**\n   * Constants\n   */\n\n  const VERSION = '5.2.2';\n  /**\n   * Class definition\n   */\n\n  class BaseComponent extends Config {\n    constructor(element, config) {\n      super();\n      element = getElement(element);\n\n      if (!element) {\n        return;\n      }\n\n      this._element = element;\n      this._config = this._getConfig(config);\n      Data.set(this._element, this.constructor.DATA_KEY, this);\n    } // Public\n\n\n    dispose() {\n      Data.remove(this._element, this.constructor.DATA_KEY);\n      EventHandler.off(this._element, this.constructor.EVENT_KEY);\n\n      for (const propertyName of Object.getOwnPropertyNames(this)) {\n        this[propertyName] = null;\n      }\n    }\n\n    _queueCallback(callback, element, isAnimated = true) {\n      executeAfterTransition(callback, element, isAnimated);\n    }\n\n    _getConfig(config) {\n      config = this._mergeConfigObj(config, this._element);\n      config = this._configAfterMerge(config);\n\n      this._typeCheckConfig(config);\n\n      return config;\n    } // Static\n\n\n    static getInstance(element) {\n      return Data.get(getElement(element), this.DATA_KEY);\n    }\n\n    static getOrCreateInstance(element, config = {}) {\n      return this.getInstance(element) || new this(element, typeof config === 'object' ? config : null);\n    }\n\n    static get VERSION() {\n      return VERSION;\n    }\n\n    static get DATA_KEY() {\n      return `bs.${this.NAME}`;\n    }\n\n    static get EVENT_KEY() {\n      return `.${this.DATA_KEY}`;\n    }\n\n    static eventName(name) {\n      return `${name}${this.EVENT_KEY}`;\n    }\n\n  }\n\n  /**\n   * --------------------------------------------------------------------------\n   * Bootstrap (v5.2.2): util/component-functions.js\n   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n   * --------------------------------------------------------------------------\n   */\n\n  const enableDismissTrigger = (component, method = 'hide') => {\n    const clickEvent = `click.dismiss${component.EVENT_KEY}`;\n    const name = component.NAME;\n    EventHandler.on(document, clickEvent, `[data-bs-dismiss=\"${name}\"]`, function (event) {\n      if (['A', 'AREA'].includes(this.tagName)) {\n        event.preventDefault();\n      }\n\n      if (isDisabled(this)) {\n        return;\n      }\n\n      const target = getElementFromSelector(this) || this.closest(`.${name}`);\n      const instance = component.getOrCreateInstance(target); // Method argument is left, for Alert and only, as it doesn't implement the 'hide' method\n\n      instance[method]();\n    });\n  };\n\n  /**\n   * --------------------------------------------------------------------------\n   * Bootstrap (v5.2.2): alert.js\n   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n   * --------------------------------------------------------------------------\n   */\n  /**\n   * Constants\n   */\n\n  const NAME$f = 'alert';\n  const DATA_KEY$a = 'bs.alert';\n  const EVENT_KEY$b = `.${DATA_KEY$a}`;\n  const EVENT_CLOSE = `close${EVENT_KEY$b}`;\n  const EVENT_CLOSED = `closed${EVENT_KEY$b}`;\n  const CLASS_NAME_FADE$5 = 'fade';\n  const CLASS_NAME_SHOW$8 = 'show';\n  /**\n   * Class definition\n   */\n\n  class Alert extends BaseComponent {\n    // Getters\n    static get NAME() {\n      return NAME$f;\n    } // Public\n\n\n    close() {\n      const closeEvent = EventHandler.trigger(this._element, EVENT_CLOSE);\n\n      if (closeEvent.defaultPrevented) {\n        return;\n      }\n\n      this._element.classList.remove(CLASS_NAME_SHOW$8);\n\n      const isAnimated = this._element.classList.contains(CLASS_NAME_FADE$5);\n\n      this._queueCallback(() => this._destroyElement(), this._element, isAnimated);\n    } // Private\n\n\n    _destroyElement() {\n      this._element.remove();\n\n      EventHandler.trigger(this._element, EVENT_CLOSED);\n      this.dispose();\n    } // Static\n\n\n    static jQueryInterface(config) {\n      return this.each(function () {\n        const data = Alert.getOrCreateInstance(this);\n\n        if (typeof config !== 'string') {\n          return;\n        }\n\n        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {\n          throw new TypeError(`No method named \"${config}\"`);\n        }\n\n        data[config](this);\n      });\n    }\n\n  }\n  /**\n   * Data API implementation\n   */\n\n\n  enableDismissTrigger(Alert, 'close');\n  /**\n   * jQuery\n   */\n\n  defineJQueryPlugin(Alert);\n\n  /**\n   * --------------------------------------------------------------------------\n   * Bootstrap (v5.2.2): button.js\n   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n   * --------------------------------------------------------------------------\n   */\n  /**\n   * Constants\n   */\n\n  const NAME$e = 'button';\n  const DATA_KEY$9 = 'bs.button';\n  const EVENT_KEY$a = `.${DATA_KEY$9}`;\n  const DATA_API_KEY$6 = '.data-api';\n  const CLASS_NAME_ACTIVE$3 = 'active';\n  const SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle=\"button\"]';\n  const EVENT_CLICK_DATA_API$6 = `click${EVENT_KEY$a}${DATA_API_KEY$6}`;\n  /**\n   * Class definition\n   */\n\n  class Button extends BaseComponent {\n    // Getters\n    static get NAME() {\n      return NAME$e;\n    } // Public\n\n\n    toggle() {\n      // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method\n      this._element.setAttribute('aria-pressed', this._element.classList.toggle(CLASS_NAME_ACTIVE$3));\n    } // Static\n\n\n    static jQueryInterface(config) {\n      return this.each(function () {\n        const data = Button.getOrCreateInstance(this);\n\n        if (config === 'toggle') {\n          data[config]();\n        }\n      });\n    }\n\n  }\n  /**\n   * Data API implementation\n   */\n\n\n  EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, event => {\n    event.preventDefault();\n    const button = event.target.closest(SELECTOR_DATA_TOGGLE$5);\n    const data = Button.getOrCreateInstance(button);\n    data.toggle();\n  });\n  /**\n   * jQuery\n   */\n\n  defineJQueryPlugin(Button);\n\n  /**\n   * --------------------------------------------------------------------------\n   * Bootstrap (v5.2.2): dom/selector-engine.js\n   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n   * --------------------------------------------------------------------------\n   */\n  /**\n   * Constants\n   */\n\n  const SelectorEngine = {\n    find(selector, element = document.documentElement) {\n      return [].concat(...Element.prototype.querySelectorAll.call(element, selector));\n    },\n\n    findOne(selector, element = document.documentElement) {\n      return Element.prototype.querySelector.call(element, selector);\n    },\n\n    children(element, selector) {\n      return [].concat(...element.children).filter(child => child.matches(selector));\n    },\n\n    parents(element, selector) {\n      const parents = [];\n      let ancestor = element.parentNode.closest(selector);\n\n      while (ancestor) {\n        parents.push(ancestor);\n        ancestor = ancestor.parentNode.closest(selector);\n      }\n\n      return parents;\n    },\n\n    prev(element, selector) {\n      let previous = element.previousElementSibling;\n\n      while (previous) {\n        if (previous.matches(selector)) {\n          return [previous];\n        }\n\n        previous = previous.previousElementSibling;\n      }\n\n      return [];\n    },\n\n    // TODO: this is now unused; remove later along with prev()\n    next(element, selector) {\n      let next = element.nextElementSibling;\n\n      while (next) {\n        if (next.matches(selector)) {\n          return [next];\n        }\n\n        next = next.nextElementSibling;\n      }\n\n      return [];\n    },\n\n    focusableChildren(element) {\n      const focusables = ['a', 'button', 'input', 'textarea', 'select', 'details', '[tabindex]', '[contenteditable=\"true\"]'].map(selector => `${selector}:not([tabindex^=\"-\"])`).join(',');\n      return this.find(focusables, element).filter(el => !isDisabled(el) && isVisible(el));\n    }\n\n  };\n\n  /**\n   * --------------------------------------------------------------------------\n   * Bootstrap (v5.2.2): util/swipe.js\n   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n   * --------------------------------------------------------------------------\n   */\n  /**\n   * Constants\n   */\n\n  const NAME$d = 'swipe';\n  const EVENT_KEY$9 = '.bs.swipe';\n  const EVENT_TOUCHSTART = `touchstart${EVENT_KEY$9}`;\n  const EVENT_TOUCHMOVE = `touchmove${EVENT_KEY$9}`;\n  const EVENT_TOUCHEND = `touchend${EVENT_KEY$9}`;\n  const EVENT_POINTERDOWN = `pointerdown${EVENT_KEY$9}`;\n  const EVENT_POINTERUP = `pointerup${EVENT_KEY$9}`;\n  const POINTER_TYPE_TOUCH = 'touch';\n  const POINTER_TYPE_PEN = 'pen';\n  const CLASS_NAME_POINTER_EVENT = 'pointer-event';\n  const SWIPE_THRESHOLD = 40;\n  const Default$c = {\n    endCallback: null,\n    leftCallback: null,\n    rightCallback: null\n  };\n  const DefaultType$c = {\n    endCallback: '(function|null)',\n    leftCallback: '(function|null)',\n    rightCallback: '(function|null)'\n  };\n  /**\n   * Class definition\n   */\n\n  class Swipe extends Config {\n    constructor(element, config) {\n      super();\n      this._element = element;\n\n      if (!element || !Swipe.isSupported()) {\n        return;\n      }\n\n      this._config = this._getConfig(config);\n      this._deltaX = 0;\n      this._supportPointerEvents = Boolean(window.PointerEvent);\n\n      this._initEvents();\n    } // Getters\n\n\n    static get Default() {\n      return Default$c;\n    }\n\n    static get DefaultType() {\n      return DefaultType$c;\n    }\n\n    static get NAME() {\n      return NAME$d;\n    } // Public\n\n\n    dispose() {\n      EventHandler.off(this._element, EVENT_KEY$9);\n    } // Private\n\n\n    _start(event) {\n      if (!this._supportPointerEvents) {\n        this._deltaX = event.touches[0].clientX;\n        return;\n      }\n\n      if (this._eventIsPointerPenTouch(event)) {\n        this._deltaX = event.clientX;\n      }\n    }\n\n    _end(event) {\n      if (this._eventIsPointerPenTouch(event)) {\n        this._deltaX = event.clientX - this._deltaX;\n      }\n\n      this._handleSwipe();\n\n      execute(this._config.endCallback);\n    }\n\n    _move(event) {\n      this._deltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this._deltaX;\n    }\n\n    _handleSwipe() {\n      const absDeltaX = Math.abs(this._deltaX);\n\n      if (absDeltaX <= SWIPE_THRESHOLD) {\n        return;\n      }\n\n      const direction = absDeltaX / this._deltaX;\n      this._deltaX = 0;\n\n      if (!direction) {\n        return;\n      }\n\n      execute(direction > 0 ? this._config.rightCallback : this._config.leftCallback);\n    }\n\n    _initEvents() {\n      if (this._supportPointerEvents) {\n        EventHandler.on(this._element, EVENT_POINTERDOWN, event => this._start(event));\n        EventHandler.on(this._element, EVENT_POINTERUP, event => this._end(event));\n\n        this._element.classList.add(CLASS_NAME_POINTER_EVENT);\n      } else {\n        EventHandler.on(this._element, EVENT_TOUCHSTART, event => this._start(event));\n        EventHandler.on(this._element, EVENT_TOUCHMOVE, event => this._move(event));\n        EventHandler.on(this._element, EVENT_TOUCHEND, event => this._end(event));\n      }\n    }\n\n    _eventIsPointerPenTouch(event) {\n      return this._supportPointerEvents && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH);\n    } // Static\n\n\n    static isSupported() {\n      return 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;\n    }\n\n  }\n\n  /**\n   * --------------------------------------------------------------------------\n   * Bootstrap (v5.2.2): carousel.js\n   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n   * --------------------------------------------------------------------------\n   */\n  /**\n   * Constants\n   */\n\n  const NAME$c = 'carousel';\n  const DATA_KEY$8 = 'bs.carousel';\n  const EVENT_KEY$8 = `.${DATA_KEY$8}`;\n  const DATA_API_KEY$5 = '.data-api';\n  const ARROW_LEFT_KEY$1 = 'ArrowLeft';\n  const ARROW_RIGHT_KEY$1 = 'ArrowRight';\n  const TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch\n\n  const ORDER_NEXT = 'next';\n  const ORDER_PREV = 'prev';\n  const DIRECTION_LEFT = 'left';\n  const DIRECTION_RIGHT = 'right';\n  const EVENT_SLIDE = `slide${EVENT_KEY$8}`;\n  const EVENT_SLID = `slid${EVENT_KEY$8}`;\n  const EVENT_KEYDOWN$1 = `keydown${EVENT_KEY$8}`;\n  const EVENT_MOUSEENTER$1 = `mouseenter${EVENT_KEY$8}`;\n  const EVENT_MOUSELEAVE$1 = `mouseleave${EVENT_KEY$8}`;\n  const EVENT_DRAG_START = `dragstart${EVENT_KEY$8}`;\n  const EVENT_LOAD_DATA_API$3 = `load${EVENT_KEY$8}${DATA_API_KEY$5}`;\n  const EVENT_CLICK_DATA_API$5 = `click${EVENT_KEY$8}${DATA_API_KEY$5}`;\n  const CLASS_NAME_CAROUSEL = 'carousel';\n  const CLASS_NAME_ACTIVE$2 = 'active';\n  const CLASS_NAME_SLIDE = 'slide';\n  const CLASS_NAME_END = 'carousel-item-end';\n  const CLASS_NAME_START = 'carousel-item-start';\n  const CLASS_NAME_NEXT = 'carousel-item-next';\n  const CLASS_NAME_PREV = 'carousel-item-prev';\n  const SELECTOR_ACTIVE = '.active';\n  const SELECTOR_ITEM = '.carousel-item';\n  const SELECTOR_ACTIVE_ITEM = SELECTOR_ACTIVE + SELECTOR_ITEM;\n  const SELECTOR_ITEM_IMG = '.carousel-item img';\n  const SELECTOR_INDICATORS = '.carousel-indicators';\n  const SELECTOR_DATA_SLIDE = '[data-bs-slide], [data-bs-slide-to]';\n  const SELECTOR_DATA_RIDE = '[data-bs-ride=\"carousel\"]';\n  const KEY_TO_DIRECTION = {\n    [ARROW_LEFT_KEY$1]: DIRECTION_RIGHT,\n    [ARROW_RIGHT_KEY$1]: DIRECTION_LEFT\n  };\n  const Default$b = {\n    interval: 5000,\n    keyboard: true,\n    pause: 'hover',\n    ride: false,\n    touch: true,\n    wrap: true\n  };\n  const DefaultType$b = {\n    interval: '(number|boolean)',\n    // TODO:v6 remove boolean support\n    keyboard: 'boolean',\n    pause: '(string|boolean)',\n    ride: '(boolean|string)',\n    touch: 'boolean',\n    wrap: 'boolean'\n  };\n  /**\n   * Class definition\n   */\n\n  class Carousel extends BaseComponent {\n    constructor(element, config) {\n      super(element, config);\n      this._interval = null;\n      this._activeElement = null;\n      this._isSliding = false;\n      this.touchTimeout = null;\n      this._swipeHelper = null;\n      this._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, this._element);\n\n      this._addEventListeners();\n\n      if (this._config.ride === CLASS_NAME_CAROUSEL) {\n        this.cycle();\n      }\n    } // Getters\n\n\n    static get Default() {\n      return Default$b;\n    }\n\n    static get DefaultType() {\n      return DefaultType$b;\n    }\n\n    static get NAME() {\n      return NAME$c;\n    } // Public\n\n\n    next() {\n      this._slide(ORDER_NEXT);\n    }\n\n    nextWhenVisible() {\n      // FIXME TODO use `document.visibilityState`\n      // Don't call next when the page isn't visible\n      // or the carousel or its parent isn't visible\n      if (!document.hidden && isVisible(this._element)) {\n        this.next();\n      }\n    }\n\n    prev() {\n      this._slide(ORDER_PREV);\n    }\n\n    pause() {\n      if (this._isSliding) {\n        triggerTransitionEnd(this._element);\n      }\n\n      this._clearInterval();\n    }\n\n    cycle() {\n      this._clearInterval();\n\n      this._updateInterval();\n\n      this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);\n    }\n\n    _maybeEnableCycle() {\n      if (!this._config.ride) {\n        return;\n      }\n\n      if (this._isSliding) {\n        EventHandler.one(this._element, EVENT_SLID, () => this.cycle());\n        return;\n      }\n\n      this.cycle();\n    }\n\n    to(index) {\n      const items = this._getItems();\n\n      if (index > items.length - 1 || index < 0) {\n        return;\n      }\n\n      if (this._isSliding) {\n        EventHandler.one(this._element, EVENT_SLID, () => this.to(index));\n        return;\n      }\n\n      const activeIndex = this._getItemIndex(this._getActive());\n\n      if (activeIndex === index) {\n        return;\n      }\n\n      const order = index > activeIndex ? ORDER_NEXT : ORDER_PREV;\n\n      this._slide(order, items[index]);\n    }\n\n    dispose() {\n      if (this._swipeHelper) {\n        this._swipeHelper.dispose();\n      }\n\n      super.dispose();\n    } // Private\n\n\n    _configAfterMerge(config) {\n      config.defaultInterval = config.interval;\n      return config;\n    }\n\n    _addEventListeners() {\n      if (this._config.keyboard) {\n        EventHandler.on(this._element, EVENT_KEYDOWN$1, event => this._keydown(event));\n      }\n\n      if (this._config.pause === 'hover') {\n        EventHandler.on(this._element, EVENT_MOUSEENTER$1, () => this.pause());\n        EventHandler.on(this._element, EVENT_MOUSELEAVE$1, () => this._maybeEnableCycle());\n      }\n\n      if (this._config.touch && Swipe.isSupported()) {\n        this._addTouchEventListeners();\n      }\n    }\n\n    _addTouchEventListeners() {\n      for (const img of SelectorEngine.find(SELECTOR_ITEM_IMG, this._element)) {\n        EventHandler.on(img, EVENT_DRAG_START, event => event.preventDefault());\n      }\n\n      const endCallBack = () => {\n        if (this._config.pause !== 'hover') {\n          return;\n        } // If it's a touch-enabled device, mouseenter/leave are fired as\n        // part of the mouse compatibility events on first tap - the carousel\n        // would stop cycling until user tapped out of it;\n        // here, we listen for touchend, explicitly pause the carousel\n        // (as if it's the second time we tap on it, mouseenter compat event\n        // is NOT fired) and after a timeout (to allow for mouse compatibility\n        // events to fire) we explicitly restart cycling\n\n\n        this.pause();\n\n        if (this.touchTimeout) {\n          clearTimeout(this.touchTimeout);\n        }\n\n        this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), TOUCHEVENT_COMPAT_WAIT + this._config.interval);\n      };\n\n      const swipeConfig = {\n        leftCallback: () => this._slide(this._directionToOrder(DIRECTION_LEFT)),\n        rightCallback: () => this._slide(this._directionToOrder(DIRECTION_RIGHT)),\n        endCallback: endCallBack\n      };\n      this._swipeHelper = new Swipe(this._element, swipeConfig);\n    }\n\n    _keydown(event) {\n      if (/input|textarea/i.test(event.target.tagName)) {\n        return;\n      }\n\n      const direction = KEY_TO_DIRECTION[event.key];\n\n      if (direction) {\n        event.preventDefault();\n\n        this._slide(this._directionToOrder(direction));\n      }\n    }\n\n    _getItemIndex(element) {\n      return this._getItems().indexOf(element);\n    }\n\n    _setActiveIndicatorElement(index) {\n      if (!this._indicatorsElement) {\n        return;\n      }\n\n      const activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE, this._indicatorsElement);\n      activeIndicator.classList.remove(CLASS_NAME_ACTIVE$2);\n      activeIndicator.removeAttribute('aria-current');\n      const newActiveIndicator = SelectorEngine.findOne(`[data-bs-slide-to=\"${index}\"]`, this._indicatorsElement);\n\n      if (newActiveIndicator) {\n        newActiveIndicator.classList.add(CLASS_NAME_ACTIVE$2);\n        newActiveIndicator.setAttribute('aria-current', 'true');\n      }\n    }\n\n    _updateInterval() {\n      const element = this._activeElement || this._getActive();\n\n      if (!element) {\n        return;\n      }\n\n      const elementInterval = Number.parseInt(element.getAttribute('data-bs-interval'), 10);\n      this._config.interval = elementInterval || this._config.defaultInterval;\n    }\n\n    _slide(order, element = null) {\n      if (this._isSliding) {\n        return;\n      }\n\n      const activeElement = this._getActive();\n\n      const isNext = order === ORDER_NEXT;\n      const nextElement = element || getNextActiveElement(this._getItems(), activeElement, isNext, this._config.wrap);\n\n      if (nextElement === activeElement) {\n        return;\n      }\n\n      const nextElementIndex = this._getItemIndex(nextElement);\n\n      const triggerEvent = eventName => {\n        return EventHandler.trigger(this._element, eventName, {\n          relatedTarget: nextElement,\n          direction: this._orderToDirection(order),\n          from: this._getItemIndex(activeElement),\n          to: nextElementIndex\n        });\n      };\n\n      const slideEvent = triggerEvent(EVENT_SLIDE);\n\n      if (slideEvent.defaultPrevented) {\n        return;\n      }\n\n      if (!activeElement || !nextElement) {\n        // Some weirdness is happening, so we bail\n        // todo: change tests that use empty divs to avoid this check\n        return;\n      }\n\n      const isCycling = Boolean(this._interval);\n      this.pause();\n      this._isSliding = true;\n\n      this._setActiveIndicatorElement(nextElementIndex);\n\n      this._activeElement = nextElement;\n      const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;\n      const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;\n      nextElement.classList.add(orderClassName);\n      reflow(nextElement);\n      activeElement.classList.add(directionalClassName);\n      nextElement.classList.add(directionalClassName);\n\n      const completeCallBack = () => {\n        nextElement.classList.remove(directionalClassName, orderClassName);\n        nextElement.classList.add(CLASS_NAME_ACTIVE$2);\n        activeElement.classList.remove(CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);\n        this._isSliding = false;\n        triggerEvent(EVENT_SLID);\n      };\n\n      this._queueCallback(completeCallBack, activeElement, this._isAnimated());\n\n      if (isCycling) {\n        this.cycle();\n      }\n    }\n\n    _isAnimated() {\n      return this._element.classList.contains(CLASS_NAME_SLIDE);\n    }\n\n    _getActive() {\n      return SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);\n    }\n\n    _getItems() {\n      return SelectorEngine.find(SELECTOR_ITEM, this._element);\n    }\n\n    _clearInterval() {\n      if (this._interval) {\n        clearInterval(this._interval);\n        this._interval = null;\n      }\n    }\n\n    _directionToOrder(direction) {\n      if (isRTL()) {\n        return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;\n      }\n\n      return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;\n    }\n\n    _orderToDirection(order) {\n      if (isRTL()) {\n        return order === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;\n      }\n\n      return order === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;\n    } // Static\n\n\n    static jQueryInterface(config) {\n      return this.each(function () {\n        const data = Carousel.getOrCreateInstance(this, config);\n\n        if (typeof config === 'number') {\n          data.to(config);\n          return;\n        }\n\n        if (typeof config === 'string') {\n          if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {\n            throw new TypeError(`No method named \"${config}\"`);\n          }\n\n          data[config]();\n        }\n      });\n    }\n\n  }\n  /**\n   * Data API implementation\n   */\n\n\n  EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, function (event) {\n    const target = getElementFromSelector(this);\n\n    if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {\n      return;\n    }\n\n    event.preventDefault();\n    const carousel = Carousel.getOrCreateInstance(target);\n    const slideIndex = this.getAttribute('data-bs-slide-to');\n\n    if (slideIndex) {\n      carousel.to(slideIndex);\n\n      carousel._maybeEnableCycle();\n\n      return;\n    }\n\n    if (Manipulator.getDataAttribute(this, 'slide') === 'next') {\n      carousel.next();\n\n      carousel._maybeEnableCycle();\n\n      return;\n    }\n\n    carousel.prev();\n\n    carousel._maybeEnableCycle();\n  });\n  EventHandler.on(window, EVENT_LOAD_DATA_API$3, () => {\n    const carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);\n\n    for (const carousel of carousels) {\n      Carousel.getOrCreateInstance(carousel);\n    }\n  });\n  /**\n   * jQuery\n   */\n\n  defineJQueryPlugin(Carousel);\n\n  /**\n   * --------------------------------------------------------------------------\n   * Bootstrap (v5.2.2): collapse.js\n   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n   * --------------------------------------------------------------------------\n   */\n  /**\n   * Constants\n   */\n\n  const NAME$b = 'collapse';\n  const DATA_KEY$7 = 'bs.collapse';\n  const EVENT_KEY$7 = `.${DATA_KEY$7}`;\n  const DATA_API_KEY$4 = '.data-api';\n  const EVENT_SHOW$6 = `show${EVENT_KEY$7}`;\n  const EVENT_SHOWN$6 = `shown${EVENT_KEY$7}`;\n  const EVENT_HIDE$6 = `hide${EVENT_KEY$7}`;\n  const EVENT_HIDDEN$6 = `hidden${EVENT_KEY$7}`;\n  const EVENT_CLICK_DATA_API$4 = `click${EVENT_KEY$7}${DATA_API_KEY$4}`;\n  const CLASS_NAME_SHOW$7 = 'show';\n  const CLASS_NAME_COLLAPSE = 'collapse';\n  const CLASS_NAME_COLLAPSING = 'collapsing';\n  const CLASS_NAME_COLLAPSED = 'collapsed';\n  const CLASS_NAME_DEEPER_CHILDREN = `:scope .${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`;\n  const CLASS_NAME_HORIZONTAL = 'collapse-horizontal';\n  const WIDTH = 'width';\n  const HEIGHT = 'height';\n  const SELECTOR_ACTIVES = '.collapse.show, .collapse.collapsing';\n  const SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle=\"collapse\"]';\n  const Default$a = {\n    parent: null,\n    toggle: true\n  };\n  const DefaultType$a = {\n    parent: '(null|element)',\n    toggle: 'boolean'\n  };\n  /**\n   * Class definition\n   */\n\n  class Collapse extends BaseComponent {\n    constructor(element, config) {\n      super(element, config);\n      this._isTransitioning = false;\n      this._triggerArray = [];\n      const toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);\n\n      for (const elem of toggleList) {\n        const selector = getSelectorFromElement(elem);\n        const filterElement = SelectorEngine.find(selector).filter(foundElement => foundElement === this._element);\n\n        if (selector !== null && filterElement.length) {\n          this._triggerArray.push(elem);\n        }\n      }\n\n      this._initializeChildren();\n\n      if (!this._config.parent) {\n        this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());\n      }\n\n      if (this._config.toggle) {\n        this.toggle();\n      }\n    } // Getters\n\n\n    static get Default() {\n      return Default$a;\n    }\n\n    static get DefaultType() {\n      return DefaultType$a;\n    }\n\n    static get NAME() {\n      return NAME$b;\n    } // Public\n\n\n    toggle() {\n      if (this._isShown()) {\n        this.hide();\n      } else {\n        this.show();\n      }\n    }\n\n    show() {\n      if (this._isTransitioning || this._isShown()) {\n        return;\n      }\n\n      let activeChildren = []; // find active children\n\n      if (this._config.parent) {\n        activeChildren = this._getFirstLevelChildren(SELECTOR_ACTIVES).filter(element => element !== this._element).map(element => Collapse.getOrCreateInstance(element, {\n          toggle: false\n        }));\n      }\n\n      if (activeChildren.length && activeChildren[0]._isTransitioning) {\n        return;\n      }\n\n      const startEvent = EventHandler.trigger(this._element, EVENT_SHOW$6);\n\n      if (startEvent.defaultPrevented) {\n        return;\n      }\n\n      for (const activeInstance of activeChildren) {\n        activeInstance.hide();\n      }\n\n      const dimension = this._getDimension();\n\n      this._element.classList.remove(CLASS_NAME_COLLAPSE);\n\n      this._element.classList.add(CLASS_NAME_COLLAPSING);\n\n      this._element.style[dimension] = 0;\n\n      this._addAriaAndCollapsedClass(this._triggerArray, true);\n\n      this._isTransitioning = true;\n\n      const complete = () => {\n        this._isTransitioning = false;\n\n        this._element.classList.remove(CLASS_NAME_COLLAPSING);\n\n        this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);\n\n        this._element.style[dimension] = '';\n        EventHandler.trigger(this._element, EVENT_SHOWN$6);\n      };\n\n      const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);\n      const scrollSize = `scroll${capitalizedDimension}`;\n\n      this._queueCallback(complete, this._element, true);\n\n      this._element.style[dimension] = `${this._element[scrollSize]}px`;\n    }\n\n    hide() {\n      if (this._isTransitioning || !this._isShown()) {\n        return;\n      }\n\n      const startEvent = EventHandler.trigger(this._element, EVENT_HIDE$6);\n\n      if (startEvent.defaultPrevented) {\n        return;\n      }\n\n      const dimension = this._getDimension();\n\n      this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;\n      reflow(this._element);\n\n      this._element.classList.add(CLASS_NAME_COLLAPSING);\n\n      this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);\n\n      for (const trigger of this._triggerArray) {\n        const element = getElementFromSelector(trigger);\n\n        if (element && !this._isShown(element)) {\n          this._addAriaAndCollapsedClass([trigger], false);\n        }\n      }\n\n      this._isTransitioning = true;\n\n      const complete = () => {\n        this._isTransitioning = false;\n\n        this._element.classList.remove(CLASS_NAME_COLLAPSING);\n\n        this._element.classList.add(CLASS_NAME_COLLAPSE);\n\n        EventHandler.trigger(this._element, EVENT_HIDDEN$6);\n      };\n\n      this._element.style[dimension] = '';\n\n      this._queueCallback(complete, this._element, true);\n    }\n\n    _isShown(element = this._element) {\n      return element.classList.contains(CLASS_NAME_SHOW$7);\n    } // Private\n\n\n    _configAfterMerge(config) {\n      config.toggle = Boolean(config.toggle); // Coerce string values\n\n      config.parent = getElement(config.parent);\n      return config;\n    }\n\n    _getDimension() {\n      return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;\n    }\n\n    _initializeChildren() {\n      if (!this._config.parent) {\n        return;\n      }\n\n      const children = this._getFirstLevelChildren(SELECTOR_DATA_TOGGLE$4);\n\n      for (const element of children) {\n        const selected = getElementFromSelector(element);\n\n        if (selected) {\n          this._addAriaAndCollapsedClass([element], this._isShown(selected));\n        }\n      }\n    }\n\n    _getFirstLevelChildren(selector) {\n      const children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent); // remove children if greater depth\n\n      return SelectorEngine.find(selector, this._config.parent).filter(element => !children.includes(element));\n    }\n\n    _addAriaAndCollapsedClass(triggerArray, isOpen) {\n      if (!triggerArray.length) {\n        return;\n      }\n\n      for (const element of triggerArray) {\n        element.classList.toggle(CLASS_NAME_COLLAPSED, !isOpen);\n        element.setAttribute('aria-expanded', isOpen);\n      }\n    } // Static\n\n\n    static jQueryInterface(config) {\n      const _config = {};\n\n      if (typeof config === 'string' && /show|hide/.test(config)) {\n        _config.toggle = false;\n      }\n\n      return this.each(function () {\n        const data = Collapse.getOrCreateInstance(this, _config);\n\n        if (typeof config === 'string') {\n          if (typeof data[config] === 'undefined') {\n            throw new TypeError(`No method named \"${config}\"`);\n          }\n\n          data[config]();\n        }\n      });\n    }\n\n  }\n  /**\n   * Data API implementation\n   */\n\n\n  EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, function (event) {\n    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element\n    if (event.target.tagName === 'A' || event.delegateTarget && event.delegateTarget.tagName === 'A') {\n      event.preventDefault();\n    }\n\n    const selector = getSelectorFromElement(this);\n    const selectorElements = SelectorEngine.find(selector);\n\n    for (const element of selectorElements) {\n      Collapse.getOrCreateInstance(element, {\n        toggle: false\n      }).toggle();\n    }\n  });\n  /**\n   * jQuery\n   */\n\n  defineJQueryPlugin(Collapse);\n\n  /**\n   * --------------------------------------------------------------------------\n   * Bootstrap (v5.2.2): dropdown.js\n   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n   * --------------------------------------------------------------------------\n   */\n  /**\n   * Constants\n   */\n\n  const NAME$a = 'dropdown';\n  const DATA_KEY$6 = 'bs.dropdown';\n  const EVENT_KEY$6 = `.${DATA_KEY$6}`;\n  const DATA_API_KEY$3 = '.data-api';\n  const ESCAPE_KEY$2 = 'Escape';\n  const TAB_KEY$1 = 'Tab';\n  const ARROW_UP_KEY$1 = 'ArrowUp';\n  const ARROW_DOWN_KEY$1 = 'ArrowDown';\n  const RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button\n\n  const EVENT_HIDE$5 = `hide${EVENT_KEY$6}`;\n  const EVENT_HIDDEN$5 = `hidden${EVENT_KEY$6}`;\n  const EVENT_SHOW$5 = `show${EVENT_KEY$6}`;\n  const EVENT_SHOWN$5 = `shown${EVENT_KEY$6}`;\n  const EVENT_CLICK_DATA_API$3 = `click${EVENT_KEY$6}${DATA_API_KEY$3}`;\n  const EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY$6}${DATA_API_KEY$3}`;\n  const EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY$6}${DATA_API_KEY$3}`;\n  const CLASS_NAME_SHOW$6 = 'show';\n  const CLASS_NAME_DROPUP = 'dropup';\n  const CLASS_NAME_DROPEND = 'dropend';\n  const CLASS_NAME_DROPSTART = 'dropstart';\n  const CLASS_NAME_DROPUP_CENTER = 'dropup-center';\n  const CLASS_NAME_DROPDOWN_CENTER = 'dropdown-center';\n  const SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle=\"dropdown\"]:not(.disabled):not(:disabled)';\n  const SELECTOR_DATA_TOGGLE_SHOWN = `${SELECTOR_DATA_TOGGLE$3}.${CLASS_NAME_SHOW$6}`;\n  const SELECTOR_MENU = '.dropdown-menu';\n  const SELECTOR_NAVBAR = '.navbar';\n  const SELECTOR_NAVBAR_NAV = '.navbar-nav';\n  const SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';\n  const PLACEMENT_TOP = isRTL() ? 'top-end' : 'top-start';\n  const PLACEMENT_TOPEND = isRTL() ? 'top-start' : 'top-end';\n  const PLACEMENT_BOTTOM = isRTL() ? 'bottom-end' : 'bottom-start';\n  const PLACEMENT_BOTTOMEND = isRTL() ? 'bottom-start' : 'bottom-end';\n  const PLACEMENT_RIGHT = isRTL() ? 'left-start' : 'right-start';\n  const PLACEMENT_LEFT = isRTL() ? 'right-start' : 'left-start';\n  const PLACEMENT_TOPCENTER = 'top';\n  const PLACEMENT_BOTTOMCENTER = 'bottom';\n  const Default$9 = {\n    autoClose: true,\n    boundary: 'clippingParents',\n    display: 'dynamic',\n    offset: [0, 2],\n    popperConfig: null,\n    reference: 'toggle'\n  };\n  const DefaultType$9 = {\n    autoClose: '(boolean|string)',\n    boundary: '(string|element)',\n    display: 'string',\n    offset: '(array|string|function)',\n    popperConfig: '(null|object|function)',\n    reference: '(string|element|object)'\n  };\n  /**\n   * Class definition\n   */\n\n  class Dropdown extends BaseComponent {\n    constructor(element, config) {\n      super(element, config);\n      this._popper = null;\n      this._parent = this._element.parentNode; // dropdown wrapper\n      // todo: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.2/forms/input-group/\n\n      this._menu = SelectorEngine.next(this._element, SELECTOR_MENU)[0] || SelectorEngine.prev(this._element, SELECTOR_MENU)[0] || SelectorEngine.findOne(SELECTOR_MENU, this._parent);\n      this._inNavbar = this._detectNavbar();\n    } // Getters\n\n\n    static get Default() {\n      return Default$9;\n    }\n\n    static get DefaultType() {\n      return DefaultType$9;\n    }\n\n    static get NAME() {\n      return NAME$a;\n    } // Public\n\n\n    toggle() {\n      return this._isShown() ? this.hide() : this.show();\n    }\n\n    show() {\n      if (isDisabled(this._element) || this._isShown()) {\n        return;\n      }\n\n      const relatedTarget = {\n        relatedTarget: this._element\n      };\n      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$5, relatedTarget);\n\n      if (showEvent.defaultPrevented) {\n        return;\n      }\n\n      this._createPopper(); // If this is a touch-enabled device we add extra\n      // empty mouseover listeners to the body's immediate children;\n      // only needed because of broken event delegation on iOS\n      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html\n\n\n      if ('ontouchstart' in document.documentElement && !this._parent.closest(SELECTOR_NAVBAR_NAV)) {\n        for (const element of [].concat(...document.body.children)) {\n          EventHandler.on(element, 'mouseover', noop);\n        }\n      }\n\n      this._element.focus();\n\n      this._element.setAttribute('aria-expanded', true);\n\n      this._menu.classList.add(CLASS_NAME_SHOW$6);\n\n      this._element.classList.add(CLASS_NAME_SHOW$6);\n\n      EventHandler.trigger(this._element, EVENT_SHOWN$5, relatedTarget);\n    }\n\n    hide() {\n      if (isDisabled(this._element) || !this._isShown()) {\n        return;\n      }\n\n      const relatedTarget = {\n        relatedTarget: this._element\n      };\n\n      this._completeHide(relatedTarget);\n    }\n\n    dispose() {\n      if (this._popper) {\n        this._popper.destroy();\n      }\n\n      super.dispose();\n    }\n\n    update() {\n      this._inNavbar = this._detectNavbar();\n\n      if (this._popper) {\n        this._popper.update();\n      }\n    } // Private\n\n\n    _completeHide(relatedTarget) {\n      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$5, relatedTarget);\n\n      if (hideEvent.defaultPrevented) {\n        return;\n      } // If this is a touch-enabled device we remove the extra\n      // empty mouseover listeners we added for iOS support\n\n\n      if ('ontouchstart' in document.documentElement) {\n        for (const element of [].concat(...document.body.children)) {\n          EventHandler.off(element, 'mouseover', noop);\n        }\n      }\n\n      if (this._popper) {\n        this._popper.destroy();\n      }\n\n      this._menu.classList.remove(CLASS_NAME_SHOW$6);\n\n      this._element.classList.remove(CLASS_NAME_SHOW$6);\n\n      this._element.setAttribute('aria-expanded', 'false');\n\n      Manipulator.removeDataAttribute(this._menu, 'popper');\n      EventHandler.trigger(this._element, EVENT_HIDDEN$5, relatedTarget);\n    }\n\n    _getConfig(config) {\n      config = super._getConfig(config);\n\n      if (typeof config.reference === 'object' && !isElement(config.reference) && typeof config.reference.getBoundingClientRect !== 'function') {\n        // Popper virtual elements require a getBoundingClientRect method\n        throw new TypeError(`${NAME$a.toUpperCase()}: Option \"reference\" provided type \"object\" without a required \"getBoundingClientRect\" method.`);\n      }\n\n      return config;\n    }\n\n    _createPopper() {\n      if (typeof Popper__namespace === 'undefined') {\n        throw new TypeError('Bootstrap\\'s dropdowns require Popper (https://popper.js.org)');\n      }\n\n      let referenceElement = this._element;\n\n      if (this._config.reference === 'parent') {\n        referenceElement = this._parent;\n      } else if (isElement(this._config.reference)) {\n        referenceElement = getElement(this._config.reference);\n      } else if (typeof this._config.reference === 'object') {\n        referenceElement = this._config.reference;\n      }\n\n      const popperConfig = this._getPopperConfig();\n\n      this._popper = Popper__namespace.createPopper(referenceElement, this._menu, popperConfig);\n    }\n\n    _isShown() {\n      return this._menu.classList.contains(CLASS_NAME_SHOW$6);\n    }\n\n    _getPlacement() {\n      const parentDropdown = this._parent;\n\n      if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {\n        return PLACEMENT_RIGHT;\n      }\n\n      if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {\n        return PLACEMENT_LEFT;\n      }\n\n      if (parentDropdown.classList.contains(CLASS_NAME_DROPUP_CENTER)) {\n        return PLACEMENT_TOPCENTER;\n      }\n\n      if (parentDropdown.classList.contains(CLASS_NAME_DROPDOWN_CENTER)) {\n        return PLACEMENT_BOTTOMCENTER;\n      } // We need to trim the value because custom properties can also include spaces\n\n\n      const isEnd = getComputedStyle(this._menu).getPropertyValue('--bs-position').trim() === 'end';\n\n      if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {\n        return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;\n      }\n\n      return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;\n    }\n\n    _detectNavbar() {\n      return this._element.closest(SELECTOR_NAVBAR) !== null;\n    }\n\n    _getOffset() {\n      const {\n        offset\n      } = this._config;\n\n      if (typeof offset === 'string') {\n        return offset.split(',').map(value => Number.parseInt(value, 10));\n      }\n\n      if (typeof offset === 'function') {\n        return popperData => offset(popperData, this._element);\n      }\n\n      return offset;\n    }\n\n    _getPopperConfig() {\n      const defaultBsPopperConfig = {\n        placement: this._getPlacement(),\n        modifiers: [{\n          name: 'preventOverflow',\n          options: {\n            boundary: this._config.boundary\n          }\n        }, {\n          name: 'offset',\n          options: {\n            offset: this._getOffset()\n          }\n        }]\n      }; // Disable Popper if we have a static display or Dropdown is in Navbar\n\n      if (this._inNavbar || this._config.display === 'static') {\n        Manipulator.setDataAttribute(this._menu, 'popper', 'static'); // todo:v6 remove\n\n        defaultBsPopperConfig.modifiers = [{\n          name: 'applyStyles',\n          enabled: false\n        }];\n      }\n\n      return { ...defaultBsPopperConfig,\n        ...(typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig)\n      };\n    }\n\n    _selectMenuItem({\n      key,\n      target\n    }) {\n      const items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter(element => isVisible(element));\n\n      if (!items.length) {\n        return;\n      } // if target isn't included in items (e.g. when expanding the dropdown)\n      // allow cycling to get the last item in case key equals ARROW_UP_KEY\n\n\n      getNextActiveElement(items, target, key === ARROW_DOWN_KEY$1, !items.includes(target)).focus();\n    } // Static\n\n\n    static jQueryInterface(config) {\n      return this.each(function () {\n        const data = Dropdown.getOrCreateInstance(this, config);\n\n        if (typeof config !== 'string') {\n          return;\n        }\n\n        if (typeof data[config] === 'undefined') {\n          throw new TypeError(`No method named \"${config}\"`);\n        }\n\n        data[config]();\n      });\n    }\n\n    static clearMenus(event) {\n      if (event.button === RIGHT_MOUSE_BUTTON || event.type === 'keyup' && event.key !== TAB_KEY$1) {\n        return;\n      }\n\n      const openToggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE_SHOWN);\n\n      for (const toggle of openToggles) {\n        const context = Dropdown.getInstance(toggle);\n\n        if (!context || context._config.autoClose === false) {\n          continue;\n        }\n\n        const composedPath = event.composedPath();\n        const isMenuTarget = composedPath.includes(context._menu);\n\n        if (composedPath.includes(context._element) || context._config.autoClose === 'inside' && !isMenuTarget || context._config.autoClose === 'outside' && isMenuTarget) {\n          continue;\n        } // Tab navigation through the dropdown menu or events from contained inputs shouldn't close the menu\n\n\n        if (context._menu.contains(event.target) && (event.type === 'keyup' && event.key === TAB_KEY$1 || /input|select|option|textarea|form/i.test(event.target.tagName))) {\n          continue;\n        }\n\n        const relatedTarget = {\n          relatedTarget: context._element\n        };\n\n        if (event.type === 'click') {\n          relatedTarget.clickEvent = event;\n        }\n\n        context._completeHide(relatedTarget);\n      }\n    }\n\n    static dataApiKeydownHandler(event) {\n      // If not an UP | DOWN | ESCAPE key => not a dropdown command\n      // If input/textarea && if key is other than ESCAPE => not a dropdown command\n      const isInput = /input|textarea/i.test(event.target.tagName);\n      const isEscapeEvent = event.key === ESCAPE_KEY$2;\n      const isUpOrDownEvent = [ARROW_UP_KEY$1, ARROW_DOWN_KEY$1].includes(event.key);\n\n      if (!isUpOrDownEvent && !isEscapeEvent) {\n        return;\n      }\n\n      if (isInput && !isEscapeEvent) {\n        return;\n      }\n\n      event.preventDefault(); // todo: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.2/forms/input-group/\n\n      const getToggleButton = this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.next(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.findOne(SELECTOR_DATA_TOGGLE$3, event.delegateTarget.parentNode);\n      const instance = Dropdown.getOrCreateInstance(getToggleButton);\n\n      if (isUpOrDownEvent) {\n        event.stopPropagation();\n        instance.show();\n\n        instance._selectMenuItem(event);\n\n        return;\n      }\n\n      if (instance._isShown()) {\n        // else is escape and we check if it is shown\n        event.stopPropagation();\n        instance.hide();\n        getToggleButton.focus();\n      }\n    }\n\n  }\n  /**\n   * Data API implementation\n   */\n\n\n  EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler);\n  EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);\n  EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus);\n  EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);\n  EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function (event) {\n    event.preventDefault();\n    Dropdown.getOrCreateInstance(this).toggle();\n  });\n  /**\n   * jQuery\n   */\n\n  defineJQueryPlugin(Dropdown);\n\n  /**\n   * --------------------------------------------------------------------------\n   * Bootstrap (v5.2.2): util/scrollBar.js\n   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n   * --------------------------------------------------------------------------\n   */\n  /**\n   * Constants\n   */\n\n  const SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';\n  const SELECTOR_STICKY_CONTENT = '.sticky-top';\n  const PROPERTY_PADDING = 'padding-right';\n  const PROPERTY_MARGIN = 'margin-right';\n  /**\n   * Class definition\n   */\n\n  class ScrollBarHelper {\n    constructor() {\n      this._element = document.body;\n    } // Public\n\n\n    getWidth() {\n      // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes\n      const documentWidth = document.documentElement.clientWidth;\n      return Math.abs(window.innerWidth - documentWidth);\n    }\n\n    hide() {\n      const width = this.getWidth();\n\n      this._disableOverFlow(); // give padding to element to balance the hidden scrollbar width\n\n\n      this._setElementAttributes(this._element, PROPERTY_PADDING, calculatedValue => calculatedValue + width); // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth\n\n\n      this._setElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING, calculatedValue => calculatedValue + width);\n\n      this._setElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN, calculatedValue => calculatedValue - width);\n    }\n\n    reset() {\n      this._resetElementAttributes(this._element, 'overflow');\n\n      this._resetElementAttributes(this._element, PROPERTY_PADDING);\n\n      this._resetElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING);\n\n      this._resetElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN);\n    }\n\n    isOverflowing() {\n      return this.getWidth() > 0;\n    } // Private\n\n\n    _disableOverFlow() {\n      this._saveInitialAttribute(this._element, 'overflow');\n\n      this._element.style.overflow = 'hidden';\n    }\n\n    _setElementAttributes(selector, styleProperty, callback) {\n      const scrollbarWidth = this.getWidth();\n\n      const manipulationCallBack = element => {\n        if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) {\n          return;\n        }\n\n        this._saveInitialAttribute(element, styleProperty);\n\n        const calculatedValue = window.getComputedStyle(element).getPropertyValue(styleProperty);\n        element.style.setProperty(styleProperty, `${callback(Number.parseFloat(calculatedValue))}px`);\n      };\n\n      this._applyManipulationCallback(selector, manipulationCallBack);\n    }\n\n    _saveInitialAttribute(element, styleProperty) {\n      const actualValue = element.style.getPropertyValue(styleProperty);\n\n      if (actualValue) {\n        Manipulator.setDataAttribute(element, styleProperty, actualValue);\n      }\n    }\n\n    _resetElementAttributes(selector, styleProperty) {\n      const manipulationCallBack = element => {\n        const value = Manipulator.getDataAttribute(element, styleProperty); // We only want to remove the property if the value is `null`; the value can also be zero\n\n        if (value === null) {\n          element.style.removeProperty(styleProperty);\n          return;\n        }\n\n        Manipulator.removeDataAttribute(element, styleProperty);\n        element.style.setProperty(styleProperty, value);\n      };\n\n      this._applyManipulationCallback(selector, manipulationCallBack);\n    }\n\n    _applyManipulationCallback(selector, callBack) {\n      if (isElement(selector)) {\n        callBack(selector);\n        return;\n      }\n\n      for (const sel of SelectorEngine.find(selector, this._element)) {\n        callBack(sel);\n      }\n    }\n\n  }\n\n  /**\n   * --------------------------------------------------------------------------\n   * Bootstrap (v5.2.2): util/backdrop.js\n   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n   * --------------------------------------------------------------------------\n   */\n  /**\n   * Constants\n   */\n\n  const NAME$9 = 'backdrop';\n  const CLASS_NAME_FADE$4 = 'fade';\n  const CLASS_NAME_SHOW$5 = 'show';\n  const EVENT_MOUSEDOWN = `mousedown.bs.${NAME$9}`;\n  const Default$8 = {\n    className: 'modal-backdrop',\n    clickCallback: null,\n    isAnimated: false,\n    isVisible: true,\n    // if false, we use the backdrop helper without adding any element to the dom\n    rootElement: 'body' // give the choice to place backdrop under different elements\n\n  };\n  const DefaultType$8 = {\n    className: 'string',\n    clickCallback: '(function|null)',\n    isAnimated: 'boolean',\n    isVisible: 'boolean',\n    rootElement: '(element|string)'\n  };\n  /**\n   * Class definition\n   */\n\n  class Backdrop extends Config {\n    constructor(config) {\n      super();\n      this._config = this._getConfig(config);\n      this._isAppended = false;\n      this._element = null;\n    } // Getters\n\n\n    static get Default() {\n      return Default$8;\n    }\n\n    static get DefaultType() {\n      return DefaultType$8;\n    }\n\n    static get NAME() {\n      return NAME$9;\n    } // Public\n\n\n    show(callback) {\n      if (!this._config.isVisible) {\n        execute(callback);\n        return;\n      }\n\n      this._append();\n\n      const element = this._getElement();\n\n      if (this._config.isAnimated) {\n        reflow(element);\n      }\n\n      element.classList.add(CLASS_NAME_SHOW$5);\n\n      this._emulateAnimation(() => {\n        execute(callback);\n      });\n    }\n\n    hide(callback) {\n      if (!this._config.isVisible) {\n        execute(callback);\n        return;\n      }\n\n      this._getElement().classList.remove(CLASS_NAME_SHOW$5);\n\n      this._emulateAnimation(() => {\n        this.dispose();\n        execute(callback);\n      });\n    }\n\n    dispose() {\n      if (!this._isAppended) {\n        return;\n      }\n\n      EventHandler.off(this._element, EVENT_MOUSEDOWN);\n\n      this._element.remove();\n\n      this._isAppended = false;\n    } // Private\n\n\n    _getElement() {\n      if (!this._element) {\n        const backdrop = document.createElement('div');\n        backdrop.className = this._config.className;\n\n        if (this._config.isAnimated) {\n          backdrop.classList.add(CLASS_NAME_FADE$4);\n        }\n\n        this._element = backdrop;\n      }\n\n      return this._element;\n    }\n\n    _configAfterMerge(config) {\n      // use getElement() with the default \"body\" to get a fresh Element on each instantiation\n      config.rootElement = getElement(config.rootElement);\n      return config;\n    }\n\n    _append() {\n      if (this._isAppended) {\n        return;\n      }\n\n      const element = this._getElement();\n\n      this._config.rootElement.append(element);\n\n      EventHandler.on(element, EVENT_MOUSEDOWN, () => {\n        execute(this._config.clickCallback);\n      });\n      this._isAppended = true;\n    }\n\n    _emulateAnimation(callback) {\n      executeAfterTransition(callback, this._getElement(), this._config.isAnimated);\n    }\n\n  }\n\n  /**\n   * --------------------------------------------------------------------------\n   * Bootstrap (v5.2.2): util/focustrap.js\n   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n   * --------------------------------------------------------------------------\n   */\n  /**\n   * Constants\n   */\n\n  const NAME$8 = 'focustrap';\n  const DATA_KEY$5 = 'bs.focustrap';\n  const EVENT_KEY$5 = `.${DATA_KEY$5}`;\n  const EVENT_FOCUSIN$2 = `focusin${EVENT_KEY$5}`;\n  const EVENT_KEYDOWN_TAB = `keydown.tab${EVENT_KEY$5}`;\n  const TAB_KEY = 'Tab';\n  const TAB_NAV_FORWARD = 'forward';\n  const TAB_NAV_BACKWARD = 'backward';\n  const Default$7 = {\n    autofocus: true,\n    trapElement: null // The element to trap focus inside of\n\n  };\n  const DefaultType$7 = {\n    autofocus: 'boolean',\n    trapElement: 'element'\n  };\n  /**\n   * Class definition\n   */\n\n  class FocusTrap extends Config {\n    constructor(config) {\n      super();\n      this._config = this._getConfig(config);\n      this._isActive = false;\n      this._lastTabNavDirection = null;\n    } // Getters\n\n\n    static get Default() {\n      return Default$7;\n    }\n\n    static get DefaultType() {\n      return DefaultType$7;\n    }\n\n    static get NAME() {\n      return NAME$8;\n    } // Public\n\n\n    activate() {\n      if (this._isActive) {\n        return;\n      }\n\n      if (this._config.autofocus) {\n        this._config.trapElement.focus();\n      }\n\n      EventHandler.off(document, EVENT_KEY$5); // guard against infinite focus loop\n\n      EventHandler.on(document, EVENT_FOCUSIN$2, event => this._handleFocusin(event));\n      EventHandler.on(document, EVENT_KEYDOWN_TAB, event => this._handleKeydown(event));\n      this._isActive = true;\n    }\n\n    deactivate() {\n      if (!this._isActive) {\n        return;\n      }\n\n      this._isActive = false;\n      EventHandler.off(document, EVENT_KEY$5);\n    } // Private\n\n\n    _handleFocusin(event) {\n      const {\n        trapElement\n      } = this._config;\n\n      if (event.target === document || event.target === trapElement || trapElement.contains(event.target)) {\n        return;\n      }\n\n      const elements = SelectorEngine.focusableChildren(trapElement);\n\n      if (elements.length === 0) {\n        trapElement.focus();\n      } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {\n        elements[elements.length - 1].focus();\n      } else {\n        elements[0].focus();\n      }\n    }\n\n    _handleKeydown(event) {\n      if (event.key !== TAB_KEY) {\n        return;\n      }\n\n      this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;\n    }\n\n  }\n\n  /**\n   * --------------------------------------------------------------------------\n   * Bootstrap (v5.2.2): modal.js\n   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n   * --------------------------------------------------------------------------\n   */\n  /**\n   * Constants\n   */\n\n  const NAME$7 = 'modal';\n  const DATA_KEY$4 = 'bs.modal';\n  const EVENT_KEY$4 = `.${DATA_KEY$4}`;\n  const DATA_API_KEY$2 = '.data-api';\n  const ESCAPE_KEY$1 = 'Escape';\n  const EVENT_HIDE$4 = `hide${EVENT_KEY$4}`;\n  const EVENT_HIDE_PREVENTED$1 = `hidePrevented${EVENT_KEY$4}`;\n  const EVENT_HIDDEN$4 = `hidden${EVENT_KEY$4}`;\n  const EVENT_SHOW$4 = `show${EVENT_KEY$4}`;\n  const EVENT_SHOWN$4 = `shown${EVENT_KEY$4}`;\n  const EVENT_RESIZE$1 = `resize${EVENT_KEY$4}`;\n  const EVENT_CLICK_DISMISS = `click.dismiss${EVENT_KEY$4}`;\n  const EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${EVENT_KEY$4}`;\n  const EVENT_KEYDOWN_DISMISS$1 = `keydown.dismiss${EVENT_KEY$4}`;\n  const EVENT_CLICK_DATA_API$2 = `click${EVENT_KEY$4}${DATA_API_KEY$2}`;\n  const CLASS_NAME_OPEN = 'modal-open';\n  const CLASS_NAME_FADE$3 = 'fade';\n  const CLASS_NAME_SHOW$4 = 'show';\n  const CLASS_NAME_STATIC = 'modal-static';\n  const OPEN_SELECTOR$1 = '.modal.show';\n  const SELECTOR_DIALOG = '.modal-dialog';\n  const SELECTOR_MODAL_BODY = '.modal-body';\n  const SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle=\"modal\"]';\n  const Default$6 = {\n    backdrop: true,\n    focus: true,\n    keyboard: true\n  };\n  const DefaultType$6 = {\n    backdrop: '(boolean|string)',\n    focus: 'boolean',\n    keyboard: 'boolean'\n  };\n  /**\n   * Class definition\n   */\n\n  class Modal extends BaseComponent {\n    constructor(element, config) {\n      super(element, config);\n      this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, this._element);\n      this._backdrop = this._initializeBackDrop();\n      this._focustrap = this._initializeFocusTrap();\n      this._isShown = false;\n      this._isTransitioning = false;\n      this._scrollBar = new ScrollBarHelper();\n\n      this._addEventListeners();\n    } // Getters\n\n\n    static get Default() {\n      return Default$6;\n    }\n\n    static get DefaultType() {\n      return DefaultType$6;\n    }\n\n    static get NAME() {\n      return NAME$7;\n    } // Public\n\n\n    toggle(relatedTarget) {\n      return this._isShown ? this.hide() : this.show(relatedTarget);\n    }\n\n    show(relatedTarget) {\n      if (this._isShown || this._isTransitioning) {\n        return;\n      }\n\n      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4, {\n        relatedTarget\n      });\n\n      if (showEvent.defaultPrevented) {\n        return;\n      }\n\n      this._isShown = true;\n      this._isTransitioning = true;\n\n      this._scrollBar.hide();\n\n      document.body.classList.add(CLASS_NAME_OPEN);\n\n      this._adjustDialog();\n\n      this._backdrop.show(() => this._showElement(relatedTarget));\n    }\n\n    hide() {\n      if (!this._isShown || this._isTransitioning) {\n        return;\n      }\n\n      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4);\n\n      if (hideEvent.defaultPrevented) {\n        return;\n      }\n\n      this._isShown = false;\n      this._isTransitioning = true;\n\n      this._focustrap.deactivate();\n\n      this._element.classList.remove(CLASS_NAME_SHOW$4);\n\n      this._queueCallback(() => this._hideModal(), this._element, this._isAnimated());\n    }\n\n    dispose() {\n      for (const htmlElement of [window, this._dialog]) {\n        EventHandler.off(htmlElement, EVENT_KEY$4);\n      }\n\n      this._backdrop.dispose();\n\n      this._focustrap.deactivate();\n\n      super.dispose();\n    }\n\n    handleUpdate() {\n      this._adjustDialog();\n    } // Private\n\n\n    _initializeBackDrop() {\n      return new Backdrop({\n        isVisible: Boolean(this._config.backdrop),\n        // 'static' option will be translated to true, and booleans will keep their value,\n        isAnimated: this._isAnimated()\n      });\n    }\n\n    _initializeFocusTrap() {\n      return new FocusTrap({\n        trapElement: this._element\n      });\n    }\n\n    _showElement(relatedTarget) {\n      // try to append dynamic modal\n      if (!document.body.contains(this._element)) {\n        document.body.append(this._element);\n      }\n\n      this._element.style.display = 'block';\n\n      this._element.removeAttribute('aria-hidden');\n\n      this._element.setAttribute('aria-modal', true);\n\n      this._element.setAttribute('role', 'dialog');\n\n      this._element.scrollTop = 0;\n      const modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);\n\n      if (modalBody) {\n        modalBody.scrollTop = 0;\n      }\n\n      reflow(this._element);\n\n      this._element.classList.add(CLASS_NAME_SHOW$4);\n\n      const transitionComplete = () => {\n        if (this._config.focus) {\n          this._focustrap.activate();\n        }\n\n        this._isTransitioning = false;\n        EventHandler.trigger(this._element, EVENT_SHOWN$4, {\n          relatedTarget\n        });\n      };\n\n      this._queueCallback(transitionComplete, this._dialog, this._isAnimated());\n    }\n\n    _addEventListeners() {\n      EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS$1, event => {\n        if (event.key !== ESCAPE_KEY$1) {\n          return;\n        }\n\n        if (this._config.keyboard) {\n          event.preventDefault();\n          this.hide();\n          return;\n        }\n\n        this._triggerBackdropTransition();\n      });\n      EventHandler.on(window, EVENT_RESIZE$1, () => {\n        if (this._isShown && !this._isTransitioning) {\n          this._adjustDialog();\n        }\n      });\n      EventHandler.on(this._element, EVENT_MOUSEDOWN_DISMISS, event => {\n        // a bad trick to segregate clicks that may start inside dialog but end outside, and avoid listen to scrollbar clicks\n        EventHandler.one(this._element, EVENT_CLICK_DISMISS, event2 => {\n          if (this._element !== event.target || this._element !== event2.target) {\n            return;\n          }\n\n          if (this._config.backdrop === 'static') {\n            this._triggerBackdropTransition();\n\n            return;\n          }\n\n          if (this._config.backdrop) {\n            this.hide();\n          }\n        });\n      });\n    }\n\n    _hideModal() {\n      this._element.style.display = 'none';\n\n      this._element.setAttribute('aria-hidden', true);\n\n      this._element.removeAttribute('aria-modal');\n\n      this._element.removeAttribute('role');\n\n      this._isTransitioning = false;\n\n      this._backdrop.hide(() => {\n        document.body.classList.remove(CLASS_NAME_OPEN);\n\n        this._resetAdjustments();\n\n        this._scrollBar.reset();\n\n        EventHandler.trigger(this._element, EVENT_HIDDEN$4);\n      });\n    }\n\n    _isAnimated() {\n      return this._element.classList.contains(CLASS_NAME_FADE$3);\n    }\n\n    _triggerBackdropTransition() {\n      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED$1);\n\n      if (hideEvent.defaultPrevented) {\n        return;\n      }\n\n      const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;\n      const initialOverflowY = this._element.style.overflowY; // return if the following background transition hasn't yet completed\n\n      if (initialOverflowY === 'hidden' || this._element.classList.contains(CLASS_NAME_STATIC)) {\n        return;\n      }\n\n      if (!isModalOverflowing) {\n        this._element.style.overflowY = 'hidden';\n      }\n\n      this._element.classList.add(CLASS_NAME_STATIC);\n\n      this._queueCallback(() => {\n        this._element.classList.remove(CLASS_NAME_STATIC);\n\n        this._queueCallback(() => {\n          this._element.style.overflowY = initialOverflowY;\n        }, this._dialog);\n      }, this._dialog);\n\n      this._element.focus();\n    }\n    /**\n     * The following methods are used to handle overflowing modals\n     */\n\n\n    _adjustDialog() {\n      const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;\n\n      const scrollbarWidth = this._scrollBar.getWidth();\n\n      const isBodyOverflowing = scrollbarWidth > 0;\n\n      if (isBodyOverflowing && !isModalOverflowing) {\n        const property = isRTL() ? 'paddingLeft' : 'paddingRight';\n        this._element.style[property] = `${scrollbarWidth}px`;\n      }\n\n      if (!isBodyOverflowing && isModalOverflowing) {\n        const property = isRTL() ? 'paddingRight' : 'paddingLeft';\n        this._element.style[property] = `${scrollbarWidth}px`;\n      }\n    }\n\n    _resetAdjustments() {\n      this._element.style.paddingLeft = '';\n      this._element.style.paddingRight = '';\n    } // Static\n\n\n    static jQueryInterface(config, relatedTarget) {\n      return this.each(function () {\n        const data = Modal.getOrCreateInstance(this, config);\n\n        if (typeof config !== 'string') {\n          return;\n        }\n\n        if (typeof data[config] === 'undefined') {\n          throw new TypeError(`No method named \"${config}\"`);\n        }\n\n        data[config](relatedTarget);\n      });\n    }\n\n  }\n  /**\n   * Data API implementation\n   */\n\n\n  EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function (event) {\n    const target = getElementFromSelector(this);\n\n    if (['A', 'AREA'].includes(this.tagName)) {\n      event.preventDefault();\n    }\n\n    EventHandler.one(target, EVENT_SHOW$4, showEvent => {\n      if (showEvent.defaultPrevented) {\n        // only register focus restorer if modal will actually get shown\n        return;\n      }\n\n      EventHandler.one(target, EVENT_HIDDEN$4, () => {\n        if (isVisible(this)) {\n          this.focus();\n        }\n      });\n    }); // avoid conflict when clicking modal toggler while another one is open\n\n    const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR$1);\n\n    if (alreadyOpen) {\n      Modal.getInstance(alreadyOpen).hide();\n    }\n\n    const data = Modal.getOrCreateInstance(target);\n    data.toggle(this);\n  });\n  enableDismissTrigger(Modal);\n  /**\n   * jQuery\n   */\n\n  defineJQueryPlugin(Modal);\n\n  /**\n   * --------------------------------------------------------------------------\n   * Bootstrap (v5.2.2): offcanvas.js\n   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n   * --------------------------------------------------------------------------\n   */\n  /**\n   * Constants\n   */\n\n  const NAME$6 = 'offcanvas';\n  const DATA_KEY$3 = 'bs.offcanvas';\n  const EVENT_KEY$3 = `.${DATA_KEY$3}`;\n  const DATA_API_KEY$1 = '.data-api';\n  const EVENT_LOAD_DATA_API$2 = `load${EVENT_KEY$3}${DATA_API_KEY$1}`;\n  const ESCAPE_KEY = 'Escape';\n  const CLASS_NAME_SHOW$3 = 'show';\n  const CLASS_NAME_SHOWING$1 = 'showing';\n  const CLASS_NAME_HIDING = 'hiding';\n  const CLASS_NAME_BACKDROP = 'offcanvas-backdrop';\n  const OPEN_SELECTOR = '.offcanvas.show';\n  const EVENT_SHOW$3 = `show${EVENT_KEY$3}`;\n  const EVENT_SHOWN$3 = `shown${EVENT_KEY$3}`;\n  const EVENT_HIDE$3 = `hide${EVENT_KEY$3}`;\n  const EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY$3}`;\n  const EVENT_HIDDEN$3 = `hidden${EVENT_KEY$3}`;\n  const EVENT_RESIZE = `resize${EVENT_KEY$3}`;\n  const EVENT_CLICK_DATA_API$1 = `click${EVENT_KEY$3}${DATA_API_KEY$1}`;\n  const EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY$3}`;\n  const SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle=\"offcanvas\"]';\n  const Default$5 = {\n    backdrop: true,\n    keyboard: true,\n    scroll: false\n  };\n  const DefaultType$5 = {\n    backdrop: '(boolean|string)',\n    keyboard: 'boolean',\n    scroll: 'boolean'\n  };\n  /**\n   * Class definition\n   */\n\n  class Offcanvas extends BaseComponent {\n    constructor(element, config) {\n      super(element, config);\n      this._isShown = false;\n      this._backdrop = this._initializeBackDrop();\n      this._focustrap = this._initializeFocusTrap();\n\n      this._addEventListeners();\n    } // Getters\n\n\n    static get Default() {\n      return Default$5;\n    }\n\n    static get DefaultType() {\n      return DefaultType$5;\n    }\n\n    static get NAME() {\n      return NAME$6;\n    } // Public\n\n\n    toggle(relatedTarget) {\n      return this._isShown ? this.hide() : this.show(relatedTarget);\n    }\n\n    show(relatedTarget) {\n      if (this._isShown) {\n        return;\n      }\n\n      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {\n        relatedTarget\n      });\n\n      if (showEvent.defaultPrevented) {\n        return;\n      }\n\n      this._isShown = true;\n\n      this._backdrop.show();\n\n      if (!this._config.scroll) {\n        new ScrollBarHelper().hide();\n      }\n\n      this._element.setAttribute('aria-modal', true);\n\n      this._element.setAttribute('role', 'dialog');\n\n      this._element.classList.add(CLASS_NAME_SHOWING$1);\n\n      const completeCallBack = () => {\n        if (!this._config.scroll || this._config.backdrop) {\n          this._focustrap.activate();\n        }\n\n        this._element.classList.add(CLASS_NAME_SHOW$3);\n\n        this._element.classList.remove(CLASS_NAME_SHOWING$1);\n\n        EventHandler.trigger(this._element, EVENT_SHOWN$3, {\n          relatedTarget\n        });\n      };\n\n      this._queueCallback(completeCallBack, this._element, true);\n    }\n\n    hide() {\n      if (!this._isShown) {\n        return;\n      }\n\n      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);\n\n      if (hideEvent.defaultPrevented) {\n        return;\n      }\n\n      this._focustrap.deactivate();\n\n      this._element.blur();\n\n      this._isShown = false;\n\n      this._element.classList.add(CLASS_NAME_HIDING);\n\n      this._backdrop.hide();\n\n      const completeCallback = () => {\n        this._element.classList.remove(CLASS_NAME_SHOW$3, CLASS_NAME_HIDING);\n\n        this._element.removeAttribute('aria-modal');\n\n        this._element.removeAttribute('role');\n\n        if (!this._config.scroll) {\n          new ScrollBarHelper().reset();\n        }\n\n        EventHandler.trigger(this._element, EVENT_HIDDEN$3);\n      };\n\n      this._queueCallback(completeCallback, this._element, true);\n    }\n\n    dispose() {\n      this._backdrop.dispose();\n\n      this._focustrap.deactivate();\n\n      super.dispose();\n    } // Private\n\n\n    _initializeBackDrop() {\n      const clickCallback = () => {\n        if (this._config.backdrop === 'static') {\n          EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);\n          return;\n        }\n\n        this.hide();\n      }; // 'static' option will be translated to true, and booleans will keep their value\n\n\n      const isVisible = Boolean(this._config.backdrop);\n      return new Backdrop({\n        className: CLASS_NAME_BACKDROP,\n        isVisible,\n        isAnimated: true,\n        rootElement: this._element.parentNode,\n        clickCallback: isVisible ? clickCallback : null\n      });\n    }\n\n    _initializeFocusTrap() {\n      return new FocusTrap({\n        trapElement: this._element\n      });\n    }\n\n    _addEventListeners() {\n      EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, event => {\n        if (event.key !== ESCAPE_KEY) {\n          return;\n        }\n\n        if (!this._config.keyboard) {\n          EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);\n          return;\n        }\n\n        this.hide();\n      });\n    } // Static\n\n\n    static jQueryInterface(config) {\n      return this.each(function () {\n        const data = Offcanvas.getOrCreateInstance(this, config);\n\n        if (typeof config !== 'string') {\n          return;\n        }\n\n        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {\n          throw new TypeError(`No method named \"${config}\"`);\n        }\n\n        data[config](this);\n      });\n    }\n\n  }\n  /**\n   * Data API implementation\n   */\n\n\n  EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function (event) {\n    const target = getElementFromSelector(this);\n\n    if (['A', 'AREA'].includes(this.tagName)) {\n      event.preventDefault();\n    }\n\n    if (isDisabled(this)) {\n      return;\n    }\n\n    EventHandler.one(target, EVENT_HIDDEN$3, () => {\n      // focus on trigger when it is closed\n      if (isVisible(this)) {\n        this.focus();\n      }\n    }); // avoid conflict when clicking a toggler of an offcanvas, while another is open\n\n    const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);\n\n    if (alreadyOpen && alreadyOpen !== target) {\n      Offcanvas.getInstance(alreadyOpen).hide();\n    }\n\n    const data = Offcanvas.getOrCreateInstance(target);\n    data.toggle(this);\n  });\n  EventHandler.on(window, EVENT_LOAD_DATA_API$2, () => {\n    for (const selector of SelectorEngine.find(OPEN_SELECTOR)) {\n      Offcanvas.getOrCreateInstance(selector).show();\n    }\n  });\n  EventHandler.on(window, EVENT_RESIZE, () => {\n    for (const element of SelectorEngine.find('[aria-modal][class*=show][class*=offcanvas-]')) {\n      if (getComputedStyle(element).position !== 'fixed') {\n        Offcanvas.getOrCreateInstance(element).hide();\n      }\n    }\n  });\n  enableDismissTrigger(Offcanvas);\n  /**\n   * jQuery\n   */\n\n  defineJQueryPlugin(Offcanvas);\n\n  /**\n   * --------------------------------------------------------------------------\n   * Bootstrap (v5.2.2): util/sanitizer.js\n   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n   * --------------------------------------------------------------------------\n   */\n  const uriAttributes = new Set(['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href']);\n  const ARIA_ATTRIBUTE_PATTERN = /^aria-[\\w-]*$/i;\n  /**\n   * A pattern that recognizes a commonly useful subset of URLs that are safe.\n   *\n   * Shout-out to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts\n   */\n\n  const SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i;\n  /**\n   * A pattern that matches safe data URLs. Only matches image, video and audio types.\n   *\n   * Shout-out to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts\n   */\n\n  const DATA_URL_PATTERN = /^data:(?:image\\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\\/(?:mpeg|mp4|ogg|webm)|audio\\/(?:mp3|oga|ogg|opus));base64,[\\d+/a-z]+=*$/i;\n\n  const allowedAttribute = (attribute, allowedAttributeList) => {\n    const attributeName = attribute.nodeName.toLowerCase();\n\n    if (allowedAttributeList.includes(attributeName)) {\n      if (uriAttributes.has(attributeName)) {\n        return Boolean(SAFE_URL_PATTERN.test(attribute.nodeValue) || DATA_URL_PATTERN.test(attribute.nodeValue));\n      }\n\n      return true;\n    } // Check if a regular expression validates the attribute.\n\n\n    return allowedAttributeList.filter(attributeRegex => attributeRegex instanceof RegExp).some(regex => regex.test(attributeName));\n  };\n\n  const DefaultAllowlist = {\n    // Global attributes allowed on any supplied element below.\n    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],\n    a: ['target', 'href', 'title', 'rel'],\n    area: [],\n    b: [],\n    br: [],\n    col: [],\n    code: [],\n    div: [],\n    em: [],\n    hr: [],\n    h1: [],\n    h2: [],\n    h3: [],\n    h4: [],\n    h5: [],\n    h6: [],\n    i: [],\n    img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],\n    li: [],\n    ol: [],\n    p: [],\n    pre: [],\n    s: [],\n    small: [],\n    span: [],\n    sub: [],\n    sup: [],\n    strong: [],\n    u: [],\n    ul: []\n  };\n  function sanitizeHtml(unsafeHtml, allowList, sanitizeFunction) {\n    if (!unsafeHtml.length) {\n      return unsafeHtml;\n    }\n\n    if (sanitizeFunction && typeof sanitizeFunction === 'function') {\n      return sanitizeFunction(unsafeHtml);\n    }\n\n    const domParser = new window.DOMParser();\n    const createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');\n    const elements = [].concat(...createdDocument.body.querySelectorAll('*'));\n\n    for (const element of elements) {\n      const elementName = element.nodeName.toLowerCase();\n\n      if (!Object.keys(allowList).includes(elementName)) {\n        element.remove();\n        continue;\n      }\n\n      const attributeList = [].concat(...element.attributes);\n      const allowedAttributes = [].concat(allowList['*'] || [], allowList[elementName] || []);\n\n      for (const attribute of attributeList) {\n        if (!allowedAttribute(attribute, allowedAttributes)) {\n          element.removeAttribute(attribute.nodeName);\n        }\n      }\n    }\n\n    return createdDocument.body.innerHTML;\n  }\n\n  /**\n   * --------------------------------------------------------------------------\n   * Bootstrap (v5.2.2): util/template-factory.js\n   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n   * --------------------------------------------------------------------------\n   */\n  /**\n   * Constants\n   */\n\n  const NAME$5 = 'TemplateFactory';\n  const Default$4 = {\n    allowList: DefaultAllowlist,\n    content: {},\n    // { selector : text ,  selector2 : text2 , }\n    extraClass: '',\n    html: false,\n    sanitize: true,\n    sanitizeFn: null,\n    template: '<div></div>'\n  };\n  const DefaultType$4 = {\n    allowList: 'object',\n    content: 'object',\n    extraClass: '(string|function)',\n    html: 'boolean',\n    sanitize: 'boolean',\n    sanitizeFn: '(null|function)',\n    template: 'string'\n  };\n  const DefaultContentType = {\n    entry: '(string|element|function|null)',\n    selector: '(string|element)'\n  };\n  /**\n   * Class definition\n   */\n\n  class TemplateFactory extends Config {\n    constructor(config) {\n      super();\n      this._config = this._getConfig(config);\n    } // Getters\n\n\n    static get Default() {\n      return Default$4;\n    }\n\n    static get DefaultType() {\n      return DefaultType$4;\n    }\n\n    static get NAME() {\n      return NAME$5;\n    } // Public\n\n\n    getContent() {\n      return Object.values(this._config.content).map(config => this._resolvePossibleFunction(config)).filter(Boolean);\n    }\n\n    hasContent() {\n      return this.getContent().length > 0;\n    }\n\n    changeContent(content) {\n      this._checkContent(content);\n\n      this._config.content = { ...this._config.content,\n        ...content\n      };\n      return this;\n    }\n\n    toHtml() {\n      const templateWrapper = document.createElement('div');\n      templateWrapper.innerHTML = this._maybeSanitize(this._config.template);\n\n      for (const [selector, text] of Object.entries(this._config.content)) {\n        this._setContent(templateWrapper, text, selector);\n      }\n\n      const template = templateWrapper.children[0];\n\n      const extraClass = this._resolvePossibleFunction(this._config.extraClass);\n\n      if (extraClass) {\n        template.classList.add(...extraClass.split(' '));\n      }\n\n      return template;\n    } // Private\n\n\n    _typeCheckConfig(config) {\n      super._typeCheckConfig(config);\n\n      this._checkContent(config.content);\n    }\n\n    _checkContent(arg) {\n      for (const [selector, content] of Object.entries(arg)) {\n        super._typeCheckConfig({\n          selector,\n          entry: content\n        }, DefaultContentType);\n      }\n    }\n\n    _setContent(template, content, selector) {\n      const templateElement = SelectorEngine.findOne(selector, template);\n\n      if (!templateElement) {\n        return;\n      }\n\n      content = this._resolvePossibleFunction(content);\n\n      if (!content) {\n        templateElement.remove();\n        return;\n      }\n\n      if (isElement(content)) {\n        this._putElementInTemplate(getElement(content), templateElement);\n\n        return;\n      }\n\n      if (this._config.html) {\n        templateElement.innerHTML = this._maybeSanitize(content);\n        return;\n      }\n\n      templateElement.textContent = content;\n    }\n\n    _maybeSanitize(arg) {\n      return this._config.sanitize ? sanitizeHtml(arg, this._config.allowList, this._config.sanitizeFn) : arg;\n    }\n\n    _resolvePossibleFunction(arg) {\n      return typeof arg === 'function' ? arg(this) : arg;\n    }\n\n    _putElementInTemplate(element, templateElement) {\n      if (this._config.html) {\n        templateElement.innerHTML = '';\n        templateElement.append(element);\n        return;\n      }\n\n      templateElement.textContent = element.textContent;\n    }\n\n  }\n\n  /**\n   * --------------------------------------------------------------------------\n   * Bootstrap (v5.2.2): tooltip.js\n   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n   * --------------------------------------------------------------------------\n   */\n  /**\n   * Constants\n   */\n\n  const NAME$4 = 'tooltip';\n  const DISALLOWED_ATTRIBUTES = new Set(['sanitize', 'allowList', 'sanitizeFn']);\n  const CLASS_NAME_FADE$2 = 'fade';\n  const CLASS_NAME_MODAL = 'modal';\n  const CLASS_NAME_SHOW$2 = 'show';\n  const SELECTOR_TOOLTIP_INNER = '.tooltip-inner';\n  const SELECTOR_MODAL = `.${CLASS_NAME_MODAL}`;\n  const EVENT_MODAL_HIDE = 'hide.bs.modal';\n  const TRIGGER_HOVER = 'hover';\n  const TRIGGER_FOCUS = 'focus';\n  const TRIGGER_CLICK = 'click';\n  const TRIGGER_MANUAL = 'manual';\n  const EVENT_HIDE$2 = 'hide';\n  const EVENT_HIDDEN$2 = 'hidden';\n  const EVENT_SHOW$2 = 'show';\n  const EVENT_SHOWN$2 = 'shown';\n  const EVENT_INSERTED = 'inserted';\n  const EVENT_CLICK$1 = 'click';\n  const EVENT_FOCUSIN$1 = 'focusin';\n  const EVENT_FOCUSOUT$1 = 'focusout';\n  const EVENT_MOUSEENTER = 'mouseenter';\n  const EVENT_MOUSELEAVE = 'mouseleave';\n  const AttachmentMap = {\n    AUTO: 'auto',\n    TOP: 'top',\n    RIGHT: isRTL() ? 'left' : 'right',\n    BOTTOM: 'bottom',\n    LEFT: isRTL() ? 'right' : 'left'\n  };\n  const Default$3 = {\n    allowList: DefaultAllowlist,\n    animation: true,\n    boundary: 'clippingParents',\n    container: false,\n    customClass: '',\n    delay: 0,\n    fallbackPlacements: ['top', 'right', 'bottom', 'left'],\n    html: false,\n    offset: [0, 0],\n    placement: 'top',\n    popperConfig: null,\n    sanitize: true,\n    sanitizeFn: null,\n    selector: false,\n    template: '<div class=\"tooltip\" role=\"tooltip\">' + '<div class=\"tooltip-arrow\"></div>' + '<div class=\"tooltip-inner\"></div>' + '</div>',\n    title: '',\n    trigger: 'hover focus'\n  };\n  const DefaultType$3 = {\n    allowList: 'object',\n    animation: 'boolean',\n    boundary: '(string|element)',\n    container: '(string|element|boolean)',\n    customClass: '(string|function)',\n    delay: '(number|object)',\n    fallbackPlacements: 'array',\n    html: 'boolean',\n    offset: '(array|string|function)',\n    placement: '(string|function)',\n    popperConfig: '(null|object|function)',\n    sanitize: 'boolean',\n    sanitizeFn: '(null|function)',\n    selector: '(string|boolean)',\n    template: 'string',\n    title: '(string|element|function)',\n    trigger: 'string'\n  };\n  /**\n   * Class definition\n   */\n\n  class Tooltip extends BaseComponent {\n    constructor(element, config) {\n      if (typeof Popper__namespace === 'undefined') {\n        throw new TypeError('Bootstrap\\'s tooltips require Popper (https://popper.js.org)');\n      }\n\n      super(element, config); // Private\n\n      this._isEnabled = true;\n      this._timeout = 0;\n      this._isHovered = null;\n      this._activeTrigger = {};\n      this._popper = null;\n      this._templateFactory = null;\n      this._newContent = null; // Protected\n\n      this.tip = null;\n\n      this._setListeners();\n\n      if (!this._config.selector) {\n        this._fixTitle();\n      }\n    } // Getters\n\n\n    static get Default() {\n      return Default$3;\n    }\n\n    static get DefaultType() {\n      return DefaultType$3;\n    }\n\n    static get NAME() {\n      return NAME$4;\n    } // Public\n\n\n    enable() {\n      this._isEnabled = true;\n    }\n\n    disable() {\n      this._isEnabled = false;\n    }\n\n    toggleEnabled() {\n      this._isEnabled = !this._isEnabled;\n    }\n\n    toggle() {\n      if (!this._isEnabled) {\n        return;\n      }\n\n      this._activeTrigger.click = !this._activeTrigger.click;\n\n      if (this._isShown()) {\n        this._leave();\n\n        return;\n      }\n\n      this._enter();\n    }\n\n    dispose() {\n      clearTimeout(this._timeout);\n      EventHandler.off(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);\n\n      if (this.tip) {\n        this.tip.remove();\n      }\n\n      if (this._element.getAttribute('data-bs-original-title')) {\n        this._element.setAttribute('title', this._element.getAttribute('data-bs-original-title'));\n      }\n\n      this._disposePopper();\n\n      super.dispose();\n    }\n\n    show() {\n      if (this._element.style.display === 'none') {\n        throw new Error('Please use show on visible elements');\n      }\n\n      if (!(this._isWithContent() && this._isEnabled)) {\n        return;\n      }\n\n      const showEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOW$2));\n      const shadowRoot = findShadowRoot(this._element);\n\n      const isInTheDom = (shadowRoot || this._element.ownerDocument.documentElement).contains(this._element);\n\n      if (showEvent.defaultPrevented || !isInTheDom) {\n        return;\n      } // todo v6 remove this OR make it optional\n\n\n      if (this.tip) {\n        this.tip.remove();\n        this.tip = null;\n      }\n\n      const tip = this._getTipElement();\n\n      this._element.setAttribute('aria-describedby', tip.getAttribute('id'));\n\n      const {\n        container\n      } = this._config;\n\n      if (!this._element.ownerDocument.documentElement.contains(this.tip)) {\n        container.append(tip);\n        EventHandler.trigger(this._element, this.constructor.eventName(EVENT_INSERTED));\n      }\n\n      if (this._popper) {\n        this._popper.update();\n      } else {\n        this._popper = this._createPopper(tip);\n      }\n\n      tip.classList.add(CLASS_NAME_SHOW$2); // If this is a touch-enabled device we add extra\n      // empty mouseover listeners to the body's immediate children;\n      // only needed because of broken event delegation on iOS\n      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html\n\n      if ('ontouchstart' in document.documentElement) {\n        for (const element of [].concat(...document.body.children)) {\n          EventHandler.on(element, 'mouseover', noop);\n        }\n      }\n\n      const complete = () => {\n        EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOWN$2));\n\n        if (this._isHovered === false) {\n          this._leave();\n        }\n\n        this._isHovered = false;\n      };\n\n      this._queueCallback(complete, this.tip, this._isAnimated());\n    }\n\n    hide() {\n      if (!this._isShown()) {\n        return;\n      }\n\n      const hideEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDE$2));\n\n      if (hideEvent.defaultPrevented) {\n        return;\n      }\n\n      const tip = this._getTipElement();\n\n      tip.classList.remove(CLASS_NAME_SHOW$2); // If this is a touch-enabled device we remove the extra\n      // empty mouseover listeners we added for iOS support\n\n      if ('ontouchstart' in document.documentElement) {\n        for (const element of [].concat(...document.body.children)) {\n          EventHandler.off(element, 'mouseover', noop);\n        }\n      }\n\n      this._activeTrigger[TRIGGER_CLICK] = false;\n      this._activeTrigger[TRIGGER_FOCUS] = false;\n      this._activeTrigger[TRIGGER_HOVER] = false;\n      this._isHovered = null; // it is a trick to support manual triggering\n\n      const complete = () => {\n        if (this._isWithActiveTrigger()) {\n          return;\n        }\n\n        if (!this._isHovered) {\n          tip.remove();\n        }\n\n        this._element.removeAttribute('aria-describedby');\n\n        EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDDEN$2));\n\n        this._disposePopper();\n      };\n\n      this._queueCallback(complete, this.tip, this._isAnimated());\n    }\n\n    update() {\n      if (this._popper) {\n        this._popper.update();\n      }\n    } // Protected\n\n\n    _isWithContent() {\n      return Boolean(this._getTitle());\n    }\n\n    _getTipElement() {\n      if (!this.tip) {\n        this.tip = this._createTipElement(this._newContent || this._getContentForTemplate());\n      }\n\n      return this.tip;\n    }\n\n    _createTipElement(content) {\n      const tip = this._getTemplateFactory(content).toHtml(); // todo: remove this check on v6\n\n\n      if (!tip) {\n        return null;\n      }\n\n      tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$2); // todo: on v6 the following can be achieved with CSS only\n\n      tip.classList.add(`bs-${this.constructor.NAME}-auto`);\n      const tipId = getUID(this.constructor.NAME).toString();\n      tip.setAttribute('id', tipId);\n\n      if (this._isAnimated()) {\n        tip.classList.add(CLASS_NAME_FADE$2);\n      }\n\n      return tip;\n    }\n\n    setContent(content) {\n      this._newContent = content;\n\n      if (this._isShown()) {\n        this._disposePopper();\n\n        this.show();\n      }\n    }\n\n    _getTemplateFactory(content) {\n      if (this._templateFactory) {\n        this._templateFactory.changeContent(content);\n      } else {\n        this._templateFactory = new TemplateFactory({ ...this._config,\n          // the `content` var has to be after `this._config`\n          // to override config.content in case of popover\n          content,\n          extraClass: this._resolvePossibleFunction(this._config.customClass)\n        });\n      }\n\n      return this._templateFactory;\n    }\n\n    _getContentForTemplate() {\n      return {\n        [SELECTOR_TOOLTIP_INNER]: this._getTitle()\n      };\n    }\n\n    _getTitle() {\n      return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute('data-bs-original-title');\n    } // Private\n\n\n    _initializeOnDelegatedTarget(event) {\n      return this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());\n    }\n\n    _isAnimated() {\n      return this._config.animation || this.tip && this.tip.classList.contains(CLASS_NAME_FADE$2);\n    }\n\n    _isShown() {\n      return this.tip && this.tip.classList.contains(CLASS_NAME_SHOW$2);\n    }\n\n    _createPopper(tip) {\n      const placement = typeof this._config.placement === 'function' ? this._config.placement.call(this, tip, this._element) : this._config.placement;\n      const attachment = AttachmentMap[placement.toUpperCase()];\n      return Popper__namespace.createPopper(this._element, tip, this._getPopperConfig(attachment));\n    }\n\n    _getOffset() {\n      const {\n        offset\n      } = this._config;\n\n      if (typeof offset === 'string') {\n        return offset.split(',').map(value => Number.parseInt(value, 10));\n      }\n\n      if (typeof offset === 'function') {\n        return popperData => offset(popperData, this._element);\n      }\n\n      return offset;\n    }\n\n    _resolvePossibleFunction(arg) {\n      return typeof arg === 'function' ? arg.call(this._element) : arg;\n    }\n\n    _getPopperConfig(attachment) {\n      const defaultBsPopperConfig = {\n        placement: attachment,\n        modifiers: [{\n          name: 'flip',\n          options: {\n            fallbackPlacements: this._config.fallbackPlacements\n          }\n        }, {\n          name: 'offset',\n          options: {\n            offset: this._getOffset()\n          }\n        }, {\n          name: 'preventOverflow',\n          options: {\n            boundary: this._config.boundary\n          }\n        }, {\n          name: 'arrow',\n          options: {\n            element: `.${this.constructor.NAME}-arrow`\n          }\n        }, {\n          name: 'preSetPlacement',\n          enabled: true,\n          phase: 'beforeMain',\n          fn: data => {\n            // Pre-set Popper's placement attribute in order to read the arrow sizes properly.\n            // Otherwise, Popper mixes up the width and height dimensions since the initial arrow style is for top placement\n            this._getTipElement().setAttribute('data-popper-placement', data.state.placement);\n          }\n        }]\n      };\n      return { ...defaultBsPopperConfig,\n        ...(typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig)\n      };\n    }\n\n    _setListeners() {\n      const triggers = this._config.trigger.split(' ');\n\n      for (const trigger of triggers) {\n        if (trigger === 'click') {\n          EventHandler.on(this._element, this.constructor.eventName(EVENT_CLICK$1), this._config.selector, event => {\n            const context = this._initializeOnDelegatedTarget(event);\n\n            context.toggle();\n          });\n        } else if (trigger !== TRIGGER_MANUAL) {\n          const eventIn = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSEENTER) : this.constructor.eventName(EVENT_FOCUSIN$1);\n          const eventOut = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSELEAVE) : this.constructor.eventName(EVENT_FOCUSOUT$1);\n          EventHandler.on(this._element, eventIn, this._config.selector, event => {\n            const context = this._initializeOnDelegatedTarget(event);\n\n            context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;\n\n            context._enter();\n          });\n          EventHandler.on(this._element, eventOut, this._config.selector, event => {\n            const context = this._initializeOnDelegatedTarget(event);\n\n            context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);\n\n            context._leave();\n          });\n        }\n      }\n\n      this._hideModalHandler = () => {\n        if (this._element) {\n          this.hide();\n        }\n      };\n\n      EventHandler.on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);\n    }\n\n    _fixTitle() {\n      const title = this._element.getAttribute('title');\n\n      if (!title) {\n        return;\n      }\n\n      if (!this._element.getAttribute('aria-label') && !this._element.textContent.trim()) {\n        this._element.setAttribute('aria-label', title);\n      }\n\n      this._element.setAttribute('data-bs-original-title', title); // DO NOT USE IT. Is only for backwards compatibility\n\n\n      this._element.removeAttribute('title');\n    }\n\n    _enter() {\n      if (this._isShown() || this._isHovered) {\n        this._isHovered = true;\n        return;\n      }\n\n      this._isHovered = true;\n\n      this._setTimeout(() => {\n        if (this._isHovered) {\n          this.show();\n        }\n      }, this._config.delay.show);\n    }\n\n    _leave() {\n      if (this._isWithActiveTrigger()) {\n        return;\n      }\n\n      this._isHovered = false;\n\n      this._setTimeout(() => {\n        if (!this._isHovered) {\n          this.hide();\n        }\n      }, this._config.delay.hide);\n    }\n\n    _setTimeout(handler, timeout) {\n      clearTimeout(this._timeout);\n      this._timeout = setTimeout(handler, timeout);\n    }\n\n    _isWithActiveTrigger() {\n      return Object.values(this._activeTrigger).includes(true);\n    }\n\n    _getConfig(config) {\n      const dataAttributes = Manipulator.getDataAttributes(this._element);\n\n      for (const dataAttribute of Object.keys(dataAttributes)) {\n        if (DISALLOWED_ATTRIBUTES.has(dataAttribute)) {\n          delete dataAttributes[dataAttribute];\n        }\n      }\n\n      config = { ...dataAttributes,\n        ...(typeof config === 'object' && config ? config : {})\n      };\n      config = this._mergeConfigObj(config);\n      config = this._configAfterMerge(config);\n\n      this._typeCheckConfig(config);\n\n      return config;\n    }\n\n    _configAfterMerge(config) {\n      config.container = config.container === false ? document.body : getElement(config.container);\n\n      if (typeof config.delay === 'number') {\n        config.delay = {\n          show: config.delay,\n          hide: config.delay\n        };\n      }\n\n      if (typeof config.title === 'number') {\n        config.title = config.title.toString();\n      }\n\n      if (typeof config.content === 'number') {\n        config.content = config.content.toString();\n      }\n\n      return config;\n    }\n\n    _getDelegateConfig() {\n      const config = {};\n\n      for (const key in this._config) {\n        if (this.constructor.Default[key] !== this._config[key]) {\n          config[key] = this._config[key];\n        }\n      }\n\n      config.selector = false;\n      config.trigger = 'manual'; // In the future can be replaced with:\n      // const keysWithDifferentValues = Object.entries(this._config).filter(entry => this.constructor.Default[entry[0]] !== this._config[entry[0]])\n      // `Object.fromEntries(keysWithDifferentValues)`\n\n      return config;\n    }\n\n    _disposePopper() {\n      if (this._popper) {\n        this._popper.destroy();\n\n        this._popper = null;\n      }\n    } // Static\n\n\n    static jQueryInterface(config) {\n      return this.each(function () {\n        const data = Tooltip.getOrCreateInstance(this, config);\n\n        if (typeof config !== 'string') {\n          return;\n        }\n\n        if (typeof data[config] === 'undefined') {\n          throw new TypeError(`No method named \"${config}\"`);\n        }\n\n        data[config]();\n      });\n    }\n\n  }\n  /**\n   * jQuery\n   */\n\n\n  defineJQueryPlugin(Tooltip);\n\n  /**\n   * --------------------------------------------------------------------------\n   * Bootstrap (v5.2.2): popover.js\n   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n   * --------------------------------------------------------------------------\n   */\n  /**\n   * Constants\n   */\n\n  const NAME$3 = 'popover';\n  const SELECTOR_TITLE = '.popover-header';\n  const SELECTOR_CONTENT = '.popover-body';\n  const Default$2 = { ...Tooltip.Default,\n    content: '',\n    offset: [0, 8],\n    placement: 'right',\n    template: '<div class=\"popover\" role=\"tooltip\">' + '<div class=\"popover-arrow\"></div>' + '<h3 class=\"popover-header\"></h3>' + '<div class=\"popover-body\"></div>' + '</div>',\n    trigger: 'click'\n  };\n  const DefaultType$2 = { ...Tooltip.DefaultType,\n    content: '(null|string|element|function)'\n  };\n  /**\n   * Class definition\n   */\n\n  class Popover extends Tooltip {\n    // Getters\n    static get Default() {\n      return Default$2;\n    }\n\n    static get DefaultType() {\n      return DefaultType$2;\n    }\n\n    static get NAME() {\n      return NAME$3;\n    } // Overrides\n\n\n    _isWithContent() {\n      return this._getTitle() || this._getContent();\n    } // Private\n\n\n    _getContentForTemplate() {\n      return {\n        [SELECTOR_TITLE]: this._getTitle(),\n        [SELECTOR_CONTENT]: this._getContent()\n      };\n    }\n\n    _getContent() {\n      return this._resolvePossibleFunction(this._config.content);\n    } // Static\n\n\n    static jQueryInterface(config) {\n      return this.each(function () {\n        const data = Popover.getOrCreateInstance(this, config);\n\n        if (typeof config !== 'string') {\n          return;\n        }\n\n        if (typeof data[config] === 'undefined') {\n          throw new TypeError(`No method named \"${config}\"`);\n        }\n\n        data[config]();\n      });\n    }\n\n  }\n  /**\n   * jQuery\n   */\n\n\n  defineJQueryPlugin(Popover);\n\n  /**\n   * --------------------------------------------------------------------------\n   * Bootstrap (v5.2.2): scrollspy.js\n   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n   * --------------------------------------------------------------------------\n   */\n  /**\n   * Constants\n   */\n\n  const NAME$2 = 'scrollspy';\n  const DATA_KEY$2 = 'bs.scrollspy';\n  const EVENT_KEY$2 = `.${DATA_KEY$2}`;\n  const DATA_API_KEY = '.data-api';\n  const EVENT_ACTIVATE = `activate${EVENT_KEY$2}`;\n  const EVENT_CLICK = `click${EVENT_KEY$2}`;\n  const EVENT_LOAD_DATA_API$1 = `load${EVENT_KEY$2}${DATA_API_KEY}`;\n  const CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';\n  const CLASS_NAME_ACTIVE$1 = 'active';\n  const SELECTOR_DATA_SPY = '[data-bs-spy=\"scroll\"]';\n  const SELECTOR_TARGET_LINKS = '[href]';\n  const SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';\n  const SELECTOR_NAV_LINKS = '.nav-link';\n  const SELECTOR_NAV_ITEMS = '.nav-item';\n  const SELECTOR_LIST_ITEMS = '.list-group-item';\n  const SELECTOR_LINK_ITEMS = `${SELECTOR_NAV_LINKS}, ${SELECTOR_NAV_ITEMS} > ${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`;\n  const SELECTOR_DROPDOWN = '.dropdown';\n  const SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';\n  const Default$1 = {\n    offset: null,\n    // TODO: v6 @deprecated, keep it for backwards compatibility reasons\n    rootMargin: '0px 0px -25%',\n    smoothScroll: false,\n    target: null,\n    threshold: [0.1, 0.5, 1]\n  };\n  const DefaultType$1 = {\n    offset: '(number|null)',\n    // TODO v6 @deprecated, keep it for backwards compatibility reasons\n    rootMargin: 'string',\n    smoothScroll: 'boolean',\n    target: 'element',\n    threshold: 'array'\n  };\n  /**\n   * Class definition\n   */\n\n  class ScrollSpy extends BaseComponent {\n    constructor(element, config) {\n      super(element, config); // this._element is the observablesContainer and config.target the menu links wrapper\n\n      this._targetLinks = new Map();\n      this._observableSections = new Map();\n      this._rootElement = getComputedStyle(this._element).overflowY === 'visible' ? null : this._element;\n      this._activeTarget = null;\n      this._observer = null;\n      this._previousScrollData = {\n        visibleEntryTop: 0,\n        parentScrollTop: 0\n      };\n      this.refresh(); // initialize\n    } // Getters\n\n\n    static get Default() {\n      return Default$1;\n    }\n\n    static get DefaultType() {\n      return DefaultType$1;\n    }\n\n    static get NAME() {\n      return NAME$2;\n    } // Public\n\n\n    refresh() {\n      this._initializeTargetsAndObservables();\n\n      this._maybeEnableSmoothScroll();\n\n      if (this._observer) {\n        this._observer.disconnect();\n      } else {\n        this._observer = this._getNewObserver();\n      }\n\n      for (const section of this._observableSections.values()) {\n        this._observer.observe(section);\n      }\n    }\n\n    dispose() {\n      this._observer.disconnect();\n\n      super.dispose();\n    } // Private\n\n\n    _configAfterMerge(config) {\n      // TODO: on v6 target should be given explicitly & remove the {target: 'ss-target'} case\n      config.target = getElement(config.target) || document.body; // TODO: v6 Only for backwards compatibility reasons. Use rootMargin only\n\n      config.rootMargin = config.offset ? `${config.offset}px 0px -30%` : config.rootMargin;\n\n      if (typeof config.threshold === 'string') {\n        config.threshold = config.threshold.split(',').map(value => Number.parseFloat(value));\n      }\n\n      return config;\n    }\n\n    _maybeEnableSmoothScroll() {\n      if (!this._config.smoothScroll) {\n        return;\n      } // unregister any previous listeners\n\n\n      EventHandler.off(this._config.target, EVENT_CLICK);\n      EventHandler.on(this._config.target, EVENT_CLICK, SELECTOR_TARGET_LINKS, event => {\n        const observableSection = this._observableSections.get(event.target.hash);\n\n        if (observableSection) {\n          event.preventDefault();\n          const root = this._rootElement || window;\n          const height = observableSection.offsetTop - this._element.offsetTop;\n\n          if (root.scrollTo) {\n            root.scrollTo({\n              top: height,\n              behavior: 'smooth'\n            });\n            return;\n          } // Chrome 60 doesn't support `scrollTo`\n\n\n          root.scrollTop = height;\n        }\n      });\n    }\n\n    _getNewObserver() {\n      const options = {\n        root: this._rootElement,\n        threshold: this._config.threshold,\n        rootMargin: this._config.rootMargin\n      };\n      return new IntersectionObserver(entries => this._observerCallback(entries), options);\n    } // The logic of selection\n\n\n    _observerCallback(entries) {\n      const targetElement = entry => this._targetLinks.get(`#${entry.target.id}`);\n\n      const activate = entry => {\n        this._previousScrollData.visibleEntryTop = entry.target.offsetTop;\n\n        this._process(targetElement(entry));\n      };\n\n      const parentScrollTop = (this._rootElement || document.documentElement).scrollTop;\n      const userScrollsDown = parentScrollTop >= this._previousScrollData.parentScrollTop;\n      this._previousScrollData.parentScrollTop = parentScrollTop;\n\n      for (const entry of entries) {\n        if (!entry.isIntersecting) {\n          this._activeTarget = null;\n\n          this._clearActiveClass(targetElement(entry));\n\n          continue;\n        }\n\n        const entryIsLowerThanPrevious = entry.target.offsetTop >= this._previousScrollData.visibleEntryTop; // if we are scrolling down, pick the bigger offsetTop\n\n        if (userScrollsDown && entryIsLowerThanPrevious) {\n          activate(entry); // if parent isn't scrolled, let's keep the first visible item, breaking the iteration\n\n          if (!parentScrollTop) {\n            return;\n          }\n\n          continue;\n        } // if we are scrolling up, pick the smallest offsetTop\n\n\n        if (!userScrollsDown && !entryIsLowerThanPrevious) {\n          activate(entry);\n        }\n      }\n    }\n\n    _initializeTargetsAndObservables() {\n      this._targetLinks = new Map();\n      this._observableSections = new Map();\n      const targetLinks = SelectorEngine.find(SELECTOR_TARGET_LINKS, this._config.target);\n\n      for (const anchor of targetLinks) {\n        // ensure that the anchor has an id and is not disabled\n        if (!anchor.hash || isDisabled(anchor)) {\n          continue;\n        }\n\n        const observableSection = SelectorEngine.findOne(anchor.hash, this._element); // ensure that the observableSection exists & is visible\n\n        if (isVisible(observableSection)) {\n          this._targetLinks.set(anchor.hash, anchor);\n\n          this._observableSections.set(anchor.hash, observableSection);\n        }\n      }\n    }\n\n    _process(target) {\n      if (this._activeTarget === target) {\n        return;\n      }\n\n      this._clearActiveClass(this._config.target);\n\n      this._activeTarget = target;\n      target.classList.add(CLASS_NAME_ACTIVE$1);\n\n      this._activateParents(target);\n\n      EventHandler.trigger(this._element, EVENT_ACTIVATE, {\n        relatedTarget: target\n      });\n    }\n\n    _activateParents(target) {\n      // Activate dropdown parents\n      if (target.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {\n        SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, target.closest(SELECTOR_DROPDOWN)).classList.add(CLASS_NAME_ACTIVE$1);\n        return;\n      }\n\n      for (const listGroup of SelectorEngine.parents(target, SELECTOR_NAV_LIST_GROUP)) {\n        // Set triggered links parents as active\n        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor\n        for (const item of SelectorEngine.prev(listGroup, SELECTOR_LINK_ITEMS)) {\n          item.classList.add(CLASS_NAME_ACTIVE$1);\n        }\n      }\n    }\n\n    _clearActiveClass(parent) {\n      parent.classList.remove(CLASS_NAME_ACTIVE$1);\n      const activeNodes = SelectorEngine.find(`${SELECTOR_TARGET_LINKS}.${CLASS_NAME_ACTIVE$1}`, parent);\n\n      for (const node of activeNodes) {\n        node.classList.remove(CLASS_NAME_ACTIVE$1);\n      }\n    } // Static\n\n\n    static jQueryInterface(config) {\n      return this.each(function () {\n        const data = ScrollSpy.getOrCreateInstance(this, config);\n\n        if (typeof config !== 'string') {\n          return;\n        }\n\n        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {\n          throw new TypeError(`No method named \"${config}\"`);\n        }\n\n        data[config]();\n      });\n    }\n\n  }\n  /**\n   * Data API implementation\n   */\n\n\n  EventHandler.on(window, EVENT_LOAD_DATA_API$1, () => {\n    for (const spy of SelectorEngine.find(SELECTOR_DATA_SPY)) {\n      ScrollSpy.getOrCreateInstance(spy);\n    }\n  });\n  /**\n   * jQuery\n   */\n\n  defineJQueryPlugin(ScrollSpy);\n\n  /**\n   * --------------------------------------------------------------------------\n   * Bootstrap (v5.2.2): tab.js\n   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n   * --------------------------------------------------------------------------\n   */\n  /**\n   * Constants\n   */\n\n  const NAME$1 = 'tab';\n  const DATA_KEY$1 = 'bs.tab';\n  const EVENT_KEY$1 = `.${DATA_KEY$1}`;\n  const EVENT_HIDE$1 = `hide${EVENT_KEY$1}`;\n  const EVENT_HIDDEN$1 = `hidden${EVENT_KEY$1}`;\n  const EVENT_SHOW$1 = `show${EVENT_KEY$1}`;\n  const EVENT_SHOWN$1 = `shown${EVENT_KEY$1}`;\n  const EVENT_CLICK_DATA_API = `click${EVENT_KEY$1}`;\n  const EVENT_KEYDOWN = `keydown${EVENT_KEY$1}`;\n  const EVENT_LOAD_DATA_API = `load${EVENT_KEY$1}`;\n  const ARROW_LEFT_KEY = 'ArrowLeft';\n  const ARROW_RIGHT_KEY = 'ArrowRight';\n  const ARROW_UP_KEY = 'ArrowUp';\n  const ARROW_DOWN_KEY = 'ArrowDown';\n  const CLASS_NAME_ACTIVE = 'active';\n  const CLASS_NAME_FADE$1 = 'fade';\n  const CLASS_NAME_SHOW$1 = 'show';\n  const CLASS_DROPDOWN = 'dropdown';\n  const SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';\n  const SELECTOR_DROPDOWN_MENU = '.dropdown-menu';\n  const NOT_SELECTOR_DROPDOWN_TOGGLE = ':not(.dropdown-toggle)';\n  const SELECTOR_TAB_PANEL = '.list-group, .nav, [role=\"tablist\"]';\n  const SELECTOR_OUTER = '.nav-item, .list-group-item';\n  const SELECTOR_INNER = `.nav-link${NOT_SELECTOR_DROPDOWN_TOGGLE}, .list-group-item${NOT_SELECTOR_DROPDOWN_TOGGLE}, [role=\"tab\"]${NOT_SELECTOR_DROPDOWN_TOGGLE}`;\n  const SELECTOR_DATA_TOGGLE = '[data-bs-toggle=\"tab\"], [data-bs-toggle=\"pill\"], [data-bs-toggle=\"list\"]'; // todo:v6: could be only `tab`\n\n  const SELECTOR_INNER_ELEM = `${SELECTOR_INNER}, ${SELECTOR_DATA_TOGGLE}`;\n  const SELECTOR_DATA_TOGGLE_ACTIVE = `.${CLASS_NAME_ACTIVE}[data-bs-toggle=\"tab\"], .${CLASS_NAME_ACTIVE}[data-bs-toggle=\"pill\"], .${CLASS_NAME_ACTIVE}[data-bs-toggle=\"list\"]`;\n  /**\n   * Class definition\n   */\n\n  class Tab extends BaseComponent {\n    constructor(element) {\n      super(element);\n      this._parent = this._element.closest(SELECTOR_TAB_PANEL);\n\n      if (!this._parent) {\n        return; // todo: should Throw exception on v6\n        // throw new TypeError(`${element.outerHTML} has not a valid parent ${SELECTOR_INNER_ELEM}`)\n      } // Set up initial aria attributes\n\n\n      this._setInitialAttributes(this._parent, this._getChildren());\n\n      EventHandler.on(this._element, EVENT_KEYDOWN, event => this._keydown(event));\n    } // Getters\n\n\n    static get NAME() {\n      return NAME$1;\n    } // Public\n\n\n    show() {\n      // Shows this elem and deactivate the active sibling if exists\n      const innerElem = this._element;\n\n      if (this._elemIsActive(innerElem)) {\n        return;\n      } // Search for active tab on same parent to deactivate it\n\n\n      const active = this._getActiveElem();\n\n      const hideEvent = active ? EventHandler.trigger(active, EVENT_HIDE$1, {\n        relatedTarget: innerElem\n      }) : null;\n      const showEvent = EventHandler.trigger(innerElem, EVENT_SHOW$1, {\n        relatedTarget: active\n      });\n\n      if (showEvent.defaultPrevented || hideEvent && hideEvent.defaultPrevented) {\n        return;\n      }\n\n      this._deactivate(active, innerElem);\n\n      this._activate(innerElem, active);\n    } // Private\n\n\n    _activate(element, relatedElem) {\n      if (!element) {\n        return;\n      }\n\n      element.classList.add(CLASS_NAME_ACTIVE);\n\n      this._activate(getElementFromSelector(element)); // Search and activate/show the proper section\n\n\n      const complete = () => {\n        if (element.getAttribute('role') !== 'tab') {\n          element.classList.add(CLASS_NAME_SHOW$1);\n          return;\n        }\n\n        element.removeAttribute('tabindex');\n        element.setAttribute('aria-selected', true);\n\n        this._toggleDropDown(element, true);\n\n        EventHandler.trigger(element, EVENT_SHOWN$1, {\n          relatedTarget: relatedElem\n        });\n      };\n\n      this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));\n    }\n\n    _deactivate(element, relatedElem) {\n      if (!element) {\n        return;\n      }\n\n      element.classList.remove(CLASS_NAME_ACTIVE);\n      element.blur();\n\n      this._deactivate(getElementFromSelector(element)); // Search and deactivate the shown section too\n\n\n      const complete = () => {\n        if (element.getAttribute('role') !== 'tab') {\n          element.classList.remove(CLASS_NAME_SHOW$1);\n          return;\n        }\n\n        element.setAttribute('aria-selected', false);\n        element.setAttribute('tabindex', '-1');\n\n        this._toggleDropDown(element, false);\n\n        EventHandler.trigger(element, EVENT_HIDDEN$1, {\n          relatedTarget: relatedElem\n        });\n      };\n\n      this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));\n    }\n\n    _keydown(event) {\n      if (![ARROW_LEFT_KEY, ARROW_RIGHT_KEY, ARROW_UP_KEY, ARROW_DOWN_KEY].includes(event.key)) {\n        return;\n      }\n\n      event.stopPropagation(); // stopPropagation/preventDefault both added to support up/down keys without scrolling the page\n\n      event.preventDefault();\n      const isNext = [ARROW_RIGHT_KEY, ARROW_DOWN_KEY].includes(event.key);\n      const nextActiveElement = getNextActiveElement(this._getChildren().filter(element => !isDisabled(element)), event.target, isNext, true);\n\n      if (nextActiveElement) {\n        nextActiveElement.focus({\n          preventScroll: true\n        });\n        Tab.getOrCreateInstance(nextActiveElement).show();\n      }\n    }\n\n    _getChildren() {\n      // collection of inner elements\n      return SelectorEngine.find(SELECTOR_INNER_ELEM, this._parent);\n    }\n\n    _getActiveElem() {\n      return this._getChildren().find(child => this._elemIsActive(child)) || null;\n    }\n\n    _setInitialAttributes(parent, children) {\n      this._setAttributeIfNotExists(parent, 'role', 'tablist');\n\n      for (const child of children) {\n        this._setInitialAttributesOnChild(child);\n      }\n    }\n\n    _setInitialAttributesOnChild(child) {\n      child = this._getInnerElement(child);\n\n      const isActive = this._elemIsActive(child);\n\n      const outerElem = this._getOuterElement(child);\n\n      child.setAttribute('aria-selected', isActive);\n\n      if (outerElem !== child) {\n        this._setAttributeIfNotExists(outerElem, 'role', 'presentation');\n      }\n\n      if (!isActive) {\n        child.setAttribute('tabindex', '-1');\n      }\n\n      this._setAttributeIfNotExists(child, 'role', 'tab'); // set attributes to the related panel too\n\n\n      this._setInitialAttributesOnTargetPanel(child);\n    }\n\n    _setInitialAttributesOnTargetPanel(child) {\n      const target = getElementFromSelector(child);\n\n      if (!target) {\n        return;\n      }\n\n      this._setAttributeIfNotExists(target, 'role', 'tabpanel');\n\n      if (child.id) {\n        this._setAttributeIfNotExists(target, 'aria-labelledby', `#${child.id}`);\n      }\n    }\n\n    _toggleDropDown(element, open) {\n      const outerElem = this._getOuterElement(element);\n\n      if (!outerElem.classList.contains(CLASS_DROPDOWN)) {\n        return;\n      }\n\n      const toggle = (selector, className) => {\n        const element = SelectorEngine.findOne(selector, outerElem);\n\n        if (element) {\n          element.classList.toggle(className, open);\n        }\n      };\n\n      toggle(SELECTOR_DROPDOWN_TOGGLE, CLASS_NAME_ACTIVE);\n      toggle(SELECTOR_DROPDOWN_MENU, CLASS_NAME_SHOW$1);\n      outerElem.setAttribute('aria-expanded', open);\n    }\n\n    _setAttributeIfNotExists(element, attribute, value) {\n      if (!element.hasAttribute(attribute)) {\n        element.setAttribute(attribute, value);\n      }\n    }\n\n    _elemIsActive(elem) {\n      return elem.classList.contains(CLASS_NAME_ACTIVE);\n    } // Try to get the inner element (usually the .nav-link)\n\n\n    _getInnerElement(elem) {\n      return elem.matches(SELECTOR_INNER_ELEM) ? elem : SelectorEngine.findOne(SELECTOR_INNER_ELEM, elem);\n    } // Try to get the outer element (usually the .nav-item)\n\n\n    _getOuterElement(elem) {\n      return elem.closest(SELECTOR_OUTER) || elem;\n    } // Static\n\n\n    static jQueryInterface(config) {\n      return this.each(function () {\n        const data = Tab.getOrCreateInstance(this);\n\n        if (typeof config !== 'string') {\n          return;\n        }\n\n        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {\n          throw new TypeError(`No method named \"${config}\"`);\n        }\n\n        data[config]();\n      });\n    }\n\n  }\n  /**\n   * Data API implementation\n   */\n\n\n  EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {\n    if (['A', 'AREA'].includes(this.tagName)) {\n      event.preventDefault();\n    }\n\n    if (isDisabled(this)) {\n      return;\n    }\n\n    Tab.getOrCreateInstance(this).show();\n  });\n  /**\n   * Initialize on focus\n   */\n\n  EventHandler.on(window, EVENT_LOAD_DATA_API, () => {\n    for (const element of SelectorEngine.find(SELECTOR_DATA_TOGGLE_ACTIVE)) {\n      Tab.getOrCreateInstance(element);\n    }\n  });\n  /**\n   * jQuery\n   */\n\n  defineJQueryPlugin(Tab);\n\n  /**\n   * --------------------------------------------------------------------------\n   * Bootstrap (v5.2.2): toast.js\n   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n   * --------------------------------------------------------------------------\n   */\n  /**\n   * Constants\n   */\n\n  const NAME = 'toast';\n  const DATA_KEY = 'bs.toast';\n  const EVENT_KEY = `.${DATA_KEY}`;\n  const EVENT_MOUSEOVER = `mouseover${EVENT_KEY}`;\n  const EVENT_MOUSEOUT = `mouseout${EVENT_KEY}`;\n  const EVENT_FOCUSIN = `focusin${EVENT_KEY}`;\n  const EVENT_FOCUSOUT = `focusout${EVENT_KEY}`;\n  const EVENT_HIDE = `hide${EVENT_KEY}`;\n  const EVENT_HIDDEN = `hidden${EVENT_KEY}`;\n  const EVENT_SHOW = `show${EVENT_KEY}`;\n  const EVENT_SHOWN = `shown${EVENT_KEY}`;\n  const CLASS_NAME_FADE = 'fade';\n  const CLASS_NAME_HIDE = 'hide'; // @deprecated - kept here only for backwards compatibility\n\n  const CLASS_NAME_SHOW = 'show';\n  const CLASS_NAME_SHOWING = 'showing';\n  const DefaultType = {\n    animation: 'boolean',\n    autohide: 'boolean',\n    delay: 'number'\n  };\n  const Default = {\n    animation: true,\n    autohide: true,\n    delay: 5000\n  };\n  /**\n   * Class definition\n   */\n\n  class Toast extends BaseComponent {\n    constructor(element, config) {\n      super(element, config);\n      this._timeout = null;\n      this._hasMouseInteraction = false;\n      this._hasKeyboardInteraction = false;\n\n      this._setListeners();\n    } // Getters\n\n\n    static get Default() {\n      return Default;\n    }\n\n    static get DefaultType() {\n      return DefaultType;\n    }\n\n    static get NAME() {\n      return NAME;\n    } // Public\n\n\n    show() {\n      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW);\n\n      if (showEvent.defaultPrevented) {\n        return;\n      }\n\n      this._clearTimeout();\n\n      if (this._config.animation) {\n        this._element.classList.add(CLASS_NAME_FADE);\n      }\n\n      const complete = () => {\n        this._element.classList.remove(CLASS_NAME_SHOWING);\n\n        EventHandler.trigger(this._element, EVENT_SHOWN);\n\n        this._maybeScheduleHide();\n      };\n\n      this._element.classList.remove(CLASS_NAME_HIDE); // @deprecated\n\n\n      reflow(this._element);\n\n      this._element.classList.add(CLASS_NAME_SHOW, CLASS_NAME_SHOWING);\n\n      this._queueCallback(complete, this._element, this._config.animation);\n    }\n\n    hide() {\n      if (!this.isShown()) {\n        return;\n      }\n\n      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);\n\n      if (hideEvent.defaultPrevented) {\n        return;\n      }\n\n      const complete = () => {\n        this._element.classList.add(CLASS_NAME_HIDE); // @deprecated\n\n\n        this._element.classList.remove(CLASS_NAME_SHOWING, CLASS_NAME_SHOW);\n\n        EventHandler.trigger(this._element, EVENT_HIDDEN);\n      };\n\n      this._element.classList.add(CLASS_NAME_SHOWING);\n\n      this._queueCallback(complete, this._element, this._config.animation);\n    }\n\n    dispose() {\n      this._clearTimeout();\n\n      if (this.isShown()) {\n        this._element.classList.remove(CLASS_NAME_SHOW);\n      }\n\n      super.dispose();\n    }\n\n    isShown() {\n      return this._element.classList.contains(CLASS_NAME_SHOW);\n    } // Private\n\n\n    _maybeScheduleHide() {\n      if (!this._config.autohide) {\n        return;\n      }\n\n      if (this._hasMouseInteraction || this._hasKeyboardInteraction) {\n        return;\n      }\n\n      this._timeout = setTimeout(() => {\n        this.hide();\n      }, this._config.delay);\n    }\n\n    _onInteraction(event, isInteracting) {\n      switch (event.type) {\n        case 'mouseover':\n        case 'mouseout':\n          {\n            this._hasMouseInteraction = isInteracting;\n            break;\n          }\n\n        case 'focusin':\n        case 'focusout':\n          {\n            this._hasKeyboardInteraction = isInteracting;\n            break;\n          }\n      }\n\n      if (isInteracting) {\n        this._clearTimeout();\n\n        return;\n      }\n\n      const nextElement = event.relatedTarget;\n\n      if (this._element === nextElement || this._element.contains(nextElement)) {\n        return;\n      }\n\n      this._maybeScheduleHide();\n    }\n\n    _setListeners() {\n      EventHandler.on(this._element, EVENT_MOUSEOVER, event => this._onInteraction(event, true));\n      EventHandler.on(this._element, EVENT_MOUSEOUT, event => this._onInteraction(event, false));\n      EventHandler.on(this._element, EVENT_FOCUSIN, event => this._onInteraction(event, true));\n      EventHandler.on(this._element, EVENT_FOCUSOUT, event => this._onInteraction(event, false));\n    }\n\n    _clearTimeout() {\n      clearTimeout(this._timeout);\n      this._timeout = null;\n    } // Static\n\n\n    static jQueryInterface(config) {\n      return this.each(function () {\n        const data = Toast.getOrCreateInstance(this, config);\n\n        if (typeof config === 'string') {\n          if (typeof data[config] === 'undefined') {\n            throw new TypeError(`No method named \"${config}\"`);\n          }\n\n          data[config](this);\n        }\n      });\n    }\n\n  }\n  /**\n   * Data API implementation\n   */\n\n\n  enableDismissTrigger(Toast);\n  /**\n   * jQuery\n   */\n\n  defineJQueryPlugin(Toast);\n\n  /**\n   * --------------------------------------------------------------------------\n   * Bootstrap (v5.2.2): index.umd.js\n   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n   * --------------------------------------------------------------------------\n   */\n  const index_umd = {\n    Alert,\n    Button,\n    Carousel,\n    Collapse,\n    Dropdown,\n    Modal,\n    Offcanvas,\n    Popover,\n    ScrollSpy,\n    Tab,\n    Toast,\n    Tooltip\n  };\n\n  return index_umd;\n\n}));\n//# sourceMappingURL=bootstrap.js.map\n\n\n//# sourceURL=webpack://moveslider/./node_modules/bootstrap/dist/js/bootstrap.js?");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* eslint-env browser */\n\n/*\n  eslint-disable\n  no-console,\n  func-names\n*/\n\n/** @typedef {any} TODO */\nvar normalizeUrl = __webpack_require__(/*! ./normalize-url */ \"./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js\");\n\nvar srcByModuleId = Object.create(null);\nvar noDocument = typeof document === \"undefined\";\nvar forEach = Array.prototype.forEach;\n/**\n * @param {function} fn\n * @param {number} time\n * @returns {(function(): void)|*}\n */\n\nfunction debounce(fn, time) {\n  var timeout = 0;\n  return function () {\n    // @ts-ignore\n    var self = this; // eslint-disable-next-line prefer-rest-params\n\n    var args = arguments;\n\n    var functionCall = function functionCall() {\n      return fn.apply(self, args);\n    };\n\n    clearTimeout(timeout); // @ts-ignore\n\n    timeout = setTimeout(functionCall, time);\n  };\n}\n\nfunction noop() {}\n/**\n * @param {TODO} moduleId\n * @returns {TODO}\n */\n\n\nfunction getCurrentScriptUrl(moduleId) {\n  var src = srcByModuleId[moduleId];\n\n  if (!src) {\n    if (document.currentScript) {\n      src =\n      /** @type {HTMLScriptElement} */\n      document.currentScript.src;\n    } else {\n      var scripts = document.getElementsByTagName(\"script\");\n      var lastScriptTag = scripts[scripts.length - 1];\n\n      if (lastScriptTag) {\n        src = lastScriptTag.src;\n      }\n    }\n\n    srcByModuleId[moduleId] = src;\n  }\n  /**\n   * @param {string} fileMap\n   * @returns {null | string[]}\n   */\n\n\n  return function (fileMap) {\n    if (!src) {\n      return null;\n    }\n\n    var splitResult = src.split(/([^\\\\/]+)\\.js$/);\n    var filename = splitResult && splitResult[1];\n\n    if (!filename) {\n      return [src.replace(\".js\", \".css\")];\n    }\n\n    if (!fileMap) {\n      return [src.replace(\".js\", \".css\")];\n    }\n\n    return fileMap.split(\",\").map(function (mapRule) {\n      var reg = new RegExp(\"\".concat(filename, \"\\\\.js$\"), \"g\");\n      return normalizeUrl(src.replace(reg, \"\".concat(mapRule.replace(/{fileName}/g, filename), \".css\")));\n    });\n  };\n}\n/**\n * @param {TODO} el\n * @param {string} [url]\n */\n\n\nfunction updateCss(el, url) {\n  if (!url) {\n    if (!el.href) {\n      return;\n    } // eslint-disable-next-line\n\n\n    url = el.href.split(\"?\")[0];\n  }\n\n  if (!isUrlRequest(\n  /** @type {string} */\n  url)) {\n    return;\n  }\n\n  if (el.isLoaded === false) {\n    // We seem to be about to replace a css link that hasn't loaded yet.\n    // We're probably changing the same file more than once.\n    return;\n  }\n\n  if (!url || !(url.indexOf(\".css\") > -1)) {\n    return;\n  } // eslint-disable-next-line no-param-reassign\n\n\n  el.visited = true;\n  var newEl = el.cloneNode();\n  newEl.isLoaded = false;\n  newEl.addEventListener(\"load\", function () {\n    if (newEl.isLoaded) {\n      return;\n    }\n\n    newEl.isLoaded = true;\n    el.parentNode.removeChild(el);\n  });\n  newEl.addEventListener(\"error\", function () {\n    if (newEl.isLoaded) {\n      return;\n    }\n\n    newEl.isLoaded = true;\n    el.parentNode.removeChild(el);\n  });\n  newEl.href = \"\".concat(url, \"?\").concat(Date.now());\n\n  if (el.nextSibling) {\n    el.parentNode.insertBefore(newEl, el.nextSibling);\n  } else {\n    el.parentNode.appendChild(newEl);\n  }\n}\n/**\n * @param {string} href\n * @param {TODO} src\n * @returns {TODO}\n */\n\n\nfunction getReloadUrl(href, src) {\n  var ret; // eslint-disable-next-line no-param-reassign\n\n  href = normalizeUrl(href);\n  src.some(\n  /**\n   * @param {string} url\n   */\n  // eslint-disable-next-line array-callback-return\n  function (url) {\n    if (href.indexOf(src) > -1) {\n      ret = url;\n    }\n  });\n  return ret;\n}\n/**\n * @param {string} [src]\n * @returns {boolean}\n */\n\n\nfunction reloadStyle(src) {\n  if (!src) {\n    return false;\n  }\n\n  var elements = document.querySelectorAll(\"link\");\n  var loaded = false;\n  forEach.call(elements, function (el) {\n    if (!el.href) {\n      return;\n    }\n\n    var url = getReloadUrl(el.href, src);\n\n    if (!isUrlRequest(url)) {\n      return;\n    }\n\n    if (el.visited === true) {\n      return;\n    }\n\n    if (url) {\n      updateCss(el, url);\n      loaded = true;\n    }\n  });\n  return loaded;\n}\n\nfunction reloadAll() {\n  var elements = document.querySelectorAll(\"link\");\n  forEach.call(elements, function (el) {\n    if (el.visited === true) {\n      return;\n    }\n\n    updateCss(el);\n  });\n}\n/**\n * @param {string} url\n * @returns {boolean}\n */\n\n\nfunction isUrlRequest(url) {\n  // An URL is not an request if\n  // It is not http or https\n  if (!/^[a-zA-Z][a-zA-Z\\d+\\-.]*:/.test(url)) {\n    return false;\n  }\n\n  return true;\n}\n/**\n * @param {TODO} moduleId\n * @param {TODO} options\n * @returns {TODO}\n */\n\n\nmodule.exports = function (moduleId, options) {\n  if (noDocument) {\n    console.log(\"no window.document found, will not HMR CSS\");\n    return noop;\n  }\n\n  var getScriptSrc = getCurrentScriptUrl(moduleId);\n\n  function update() {\n    var src = getScriptSrc(options.filename);\n    var reloaded = reloadStyle(src);\n\n    if (options.locals) {\n      console.log(\"[HMR] Detected local css modules. Reload all css\");\n      reloadAll();\n      return;\n    }\n\n    if (reloaded) {\n      console.log(\"[HMR] css reload %s\", src.join(\" \"));\n    } else {\n      console.log(\"[HMR] Reload all css\");\n      reloadAll();\n    }\n  }\n\n  return debounce(update, 50);\n};\n\n//# sourceURL=webpack://moveslider/./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js?");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js":
/*!************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* eslint-disable */\n\n/**\n * @param {string[]} pathComponents\n * @returns {string}\n */\nfunction normalizeUrl(pathComponents) {\n  return pathComponents.reduce(function (accumulator, item) {\n    switch (item) {\n      case \"..\":\n        accumulator.pop();\n        break;\n\n      case \".\":\n        break;\n\n      default:\n        accumulator.push(item);\n    }\n\n    return accumulator;\n  },\n  /** @type {string[]} */\n  []).join(\"/\");\n}\n/**\n * @param {string} urlString\n * @returns {string}\n */\n\n\nmodule.exports = function (urlString) {\n  urlString = urlString.trim();\n\n  if (/^data:/i.test(urlString)) {\n    return urlString;\n  }\n\n  var protocol = urlString.indexOf(\"//\") !== -1 ? urlString.split(\"//\")[0] + \"//\" : \"\";\n  var components = urlString.replace(new RegExp(protocol, \"i\"), \"\").split(\"/\");\n  var host = components[0].toLowerCase().replace(/\\.$/, \"\");\n  components[0] = \"\";\n  var path = normalizeUrl(components);\n  return protocol + host + path;\n};\n\n//# sourceURL=webpack://moveslider/./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js?");

/***/ }),

/***/ "./sass/style.scss":
/*!*************************!*\
  !*** ./sass/style.scss ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n    if(true) {\n      // 1668196810707\n      var cssReload = __webpack_require__(/*! ../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {\"locals\":false});\n      module.hot.dispose(cssReload);\n      module.hot.accept(undefined, cssReload);\n    }\n  \n\n//# sourceURL=webpack://moveslider/./sass/style.scss?");

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
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
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
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
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
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("e3c6e96e168de05235e9")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "moveslider:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			};
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	(() => {
/******/ 		var createStylesheet = (chunkId, fullhref, resolve, reject) => {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = (event) => {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			document.head.appendChild(linkTag);
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = (href, fullhref) => {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = (chunkId) => {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// no chunk loading
/******/ 		
/******/ 		var oldTags = [];
/******/ 		var newTags = [];
/******/ 		var applyHandler = (options) => {
/******/ 			return { dispose: () => {
/******/ 				for(var i = 0; i < oldTags.length; i++) {
/******/ 					var oldTag = oldTags[i];
/******/ 					if(oldTag.parentNode) oldTag.parentNode.removeChild(oldTag);
/******/ 				}
/******/ 				oldTags.length = 0;
/******/ 			}, apply: () => {
/******/ 				for(var i = 0; i < newTags.length; i++) newTags[i].rel = "stylesheet";
/******/ 				newTags.length = 0;
/******/ 			} };
/******/ 		}
/******/ 		__webpack_require__.hmrC.miniCss = (chunkIds, removedChunks, removedModules, promises, applyHandlers, updatedModulesList) => {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			chunkIds.forEach((chunkId) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var oldTag = findStylesheet(href, fullhref);
/******/ 				if(!oldTag) return;
/******/ 				promises.push(new Promise((resolve, reject) => {
/******/ 					var tag = createStylesheet(chunkId, fullhref, () => {
/******/ 						tag.as = "style";
/******/ 						tag.rel = "preload";
/******/ 						resolve();
/******/ 					}, reject);
/******/ 					oldTags.push(oldTag);
/******/ 					newTags.push(tag);
/******/ 				}));
/******/ 			});
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatemoveslider"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./js/app.js");
/******/ 	
/******/ })()
;