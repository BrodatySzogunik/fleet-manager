/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/common/Vehicle.class.js":
/*!*************************************!*\
  !*** ./src/common/Vehicle.class.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Vehicle\": () => (/* binding */ Vehicle)\n/* harmony export */ });\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ \"./src/common/helpers.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Vehicle = /*#__PURE__*/function () {\n  function Vehicle(type, brand, model, course, price, condition) {\n    _classCallCheck(this, Vehicle);\n\n    this.type = type;\n    this.brand = brand;\n    this.model = model;\n    this.course = Number(course);\n    this.price = Number(price);\n    this.condition = condition;\n    this.id = (0,uuid__WEBPACK_IMPORTED_MODULE_1__.default)();\n  }\n\n  _createClass(Vehicle, [{\n    key: \"chooseIcon\",\n    value: function chooseIcon() {\n      switch (this.type) {\n        case 'Car':\n          return \"fa-car\";\n\n        case 'Truck':\n          return \"fa-truck\";\n\n        case 'Motor':\n          return \"fa-motorcycle\";\n\n        default:\n          return \"\";\n      }\n    }\n  }, {\n    key: \"generateItem\",\n    value: function generateItem() {\n      return \"\\n            <div id=\\\"\".concat(this.id, \"\\\" class=\\\"col-md-12 my-md-2 col-lg-4\\\">\\n                <div class=\\\"card border border-secondary\\\">\\n                    <div class=\\\"card-title text-center\\\"><h3 class=\\\"my-2\\\">\").concat(this.brand, \" \").concat(this.model, \" <i class=\\\"fas \").concat(this.chooseIcon(), \"\\\"></i></h3></div>\\n                    <ul class=\\\"list-group list-group-flush\\\">\\n                        <li class=\\\"list-group-item test\\\">Type: \").concat(this.type, \"</li>\\n                        <li class=\\\"list-group-item\\\">Course: \").concat(this.course, \" km</li>\\n                        <li class=\\\"list-group-item\\\">Price: \").concat(this.price, \" z\\u0142</li>\\n                        <li class=\\\"list-group-item\\\">Condition: \").concat(this.condition, \"</li>\\n                    </ul>\\n                    <div class=\\\"card-footer row bg-transparent\\\">\\n                        <div class=\\\"col-md-6 col-lg-4\\\">\\n                            <button id=\\\"\").concat(this.id, \"-edit-button\\\" class=\\\"btn btn-secondary w-100\\\">Edit <i class=\\\"fas fa-edit\\\"></i></button>\\n                        </div>\\n                        <div class=\\\"col-md-6 col-lg-4 offset-lg-4\\\">\\n                            <button id=\\\"\").concat(this.id, \"-delete-button\\\" class=\\\"btn btn-danger w-100\\\">Delete <i class=\\\"fas fa-trash-alt\\\"></i></button>\\n                        </div>\\n                    </div>\\n                    <div id=\\\"settings-container\\\" class=\\\"d-none p-2\\\">\\n                        <div class=\\\"d-flex\\\">\\n                            <input id=\\\"\").concat(this.id, \"-new-price-input\\\" placeholder=\\\"New Price\\\" class=\\\"form-control\\\" type=\\\"number\\\"/>\\n                            <button id=\\\"\").concat(this.id, \"-change-price-button\\\" class=\\\"ml-2 btn btn-success\\\" style=\\\"width: 150px;\\\">Edit price</button>\\n                        </div>\\n                        <div class=\\\"mt-1\\\">\\n                            <select id=\\\"\").concat(this.id, \"-condition-select\\\" class=\\\"form-control\\\">\\n                                \").concat(_helpers_js__WEBPACK_IMPORTED_MODULE_0__.vehicleConditions.map(function (condition) {\n        return \"<option>\".concat(condition.label, \"</option>\");\n      }).join(\"\"), \"\\n                            </select>\\n                        </div>\\n                        </div class=\\\"d-flex\\\">\\n                            <input id=\\\"\").concat(this.id, \"-new-course-input\\\" placeholder=\\\"New Course\\\" class=\\\"form-control\\\" type=\\\"number\\\"/>\\n                            <button id=\\\"\").concat(this.id, \"-change-course-button\\\" class=\\\"ml-2 btn btn-success\\\" style=\\\"width: 150px;\\\">Edit Course</button>\\n                        </div>\\n                    </div>\\n                </div>\\n            </div>\\n        \");\n    }\n  }, {\n    key: \"assignDefaultInputValue\",\n    value: function assignDefaultInputValue() {\n      var newPriceInput = document.getElementById(\"\".concat(this.id, \"-new-price-input\"));\n      var newCourseInput = document.getElementById(\"\".concat(this.id, \"-new-course-input\"));\n      newPriceInput.value = this.price;\n      newCourseInput.value = this.course;\n    }\n  }, {\n    key: \"changePrice\",\n    value: function changePrice() {\n      var newPriceInput = document.getElementById(\"\".concat(this.id, \"-new-price-input\"));\n      this.price = Number(newPriceInput.value).toFixed(0);\n      var liElements = Array.from(document.getElementById(this.id).querySelector(\"ul\").getElementsByTagName(\"li\"));\n      var priceElement = liElements.find(function (li) {\n        return li.innerHTML.includes(\"Price:\");\n      });\n\n      if (priceElement) {\n        priceElement.innerHTML = \"Price: \".concat(this.price, \" z\\u0142\");\n      }\n    }\n  }, {\n    key: \"changeCourse\",\n    value: function changeCourse() {\n      this.course = document.getElementById(\"\".concat(this.id, \"-new-course-input\"));\n      var liElements = Array.from(document.getElementById(this.id).querySelector(\"ul\").getElementsByTagName(\"li\"));\n      var courseElement = liElements.find(function (li) {\n        return li.innerHTML.includes(\"Course:\");\n      });\n\n      if (courseElement) {\n        courseElement.innerHTML = \"Course: \".concat(this.course.toString(), \" km\");\n      }\n    }\n  }, {\n    key: \"changeCondition\",\n    value: function changeCondition(newCondition) {\n      this.condition = newCondition;\n      var ulElements = document.getElementById(this.id).querySelector(\"ul\");\n      var liElements = (ulElements === null || ulElements === void 0 ? void 0 : ulElements.children) && Array.from(ulElements.children);\n      liElements === null || liElements === void 0 ? void 0 : liElements.forEach(function (li) {\n        if (li.innerHTML.includes(\"Condition:\")) {\n          li.innerHTML = \"Condition: \".concat(newCondition);\n        }\n      });\n    }\n  }]);\n\n  return Vehicle;\n}();\n\n//# sourceURL=webpack:///./src/common/Vehicle.class.js?");

/***/ }),

/***/ "./src/common/helpers.js":
/*!*******************************!*\
  !*** ./src/common/helpers.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"vehicleConditions\": () => (/* binding */ vehicleConditions),\n/* harmony export */   \"addInputsValidation\": () => (/* binding */ addInputsValidation),\n/* harmony export */   \"removeInputsValidation\": () => (/* binding */ removeInputsValidation),\n/* harmony export */   \"setDefaultInputsValue\": () => (/* binding */ setDefaultInputsValue)\n/* harmony export */ });\nvar vehicleConditions = [{\n  key: \"Used\",\n  label: \"Used\"\n}, {\n  key: \"New\",\n  label: \"New\"\n}, {\n  key: \"Wrecked\",\n  label: \"Wrecked\"\n}];\nvar addInputsValidation = function addInputsValidation(inputErrors) {\n  console.log(\"Put validations here <---\", {\n    inputErrors: inputErrors\n  });\n};\nvar removeInputsValidation = function removeInputsValidation() {\n  console.log(\"Remove validations here <---\");\n};\nvar setDefaultInputsValue = function setDefaultInputsValue() {\n  var newVehicleType = document.getElementById(\"type-select\");\n  var newVehicleCondition = document.getElementById(\"condition-select\");\n  var inputs = [document.getElementById(\"brand-input\"), document.getElementById(\"model-input\"), document.getElementById(\"course-input\"), document.getElementById(\"price-input\")];\n  inputs.forEach(function (input) {\n    return input.value = \"\";\n  });\n  newVehicleType.value = \"Truck\";\n  newVehicleCondition.value = \"New\";\n};\n\n//# sourceURL=webpack:///./src/common/helpers.js?");

/***/ }),

/***/ "./src/common/validation.js":
/*!**********************************!*\
  !*** ./src/common/validation.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"validateFulfilledData\": () => (/* binding */ validateFulfilledData)\n/* harmony export */ });\nvar validateFulfilledData = function validateFulfilledData() {\n  var newVehicleType = document.getElementById(\"type-select\");\n  var newVehicleBrand = document.getElementById(\"brand-input\");\n  var newVehicleModel = document.getElementById(\"model-input\");\n  var newVehicleCourse = document.getElementById(\"course-input\");\n  var newVehiclePrice = document.getElementById(\"price-input\");\n  var newVehicleCondition = document.getElementById(\"condition-select\");\n  var errors = [newVehicleBrand, newVehicleModel, newVehicleCourse, newVehiclePrice].reduce(function (acc, inputEl) {\n    !inputEl.value && acc.push(inputEl);\n    return acc;\n  }, []);\n  var data = [newVehicleType.value, newVehicleBrand.value, newVehicleModel.value, newVehicleCourse.value, newVehiclePrice.value, newVehicleCondition.value];\n  return {\n    errors: errors,\n    data: data\n  };\n};\n\n//# sourceURL=webpack:///./src/common/validation.js?");

/***/ }),

/***/ "./src/components/App/App.js":
/*!***********************************!*\
  !*** ./src/components/App/App.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"refreshView\": () => (/* binding */ refreshView)\n/* harmony export */ });\n/* harmony import */ var _common_Vehicle_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../common/Vehicle.class.js */ \"./src/common/Vehicle.class.js\");\n/* harmony import */ var _common_helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../common/helpers.js */ \"./src/common/helpers.js\");\n/* harmony import */ var _common_validation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../common/validation.js */ \"./src/common/validation.js\");\nfunction _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\nvar fleet = [new _common_Vehicle_class_js__WEBPACK_IMPORTED_MODULE_0__.Vehicle(\"Truck\", \"Iveco\", \"Daily\", 4343125, 15000, \"Used\"), new _common_Vehicle_class_js__WEBPACK_IMPORTED_MODULE_0__.Vehicle(\"Car\", \"Skoda\", \"Octavia\", 2343875, 5000, \"Used\"), new _common_Vehicle_class_js__WEBPACK_IMPORTED_MODULE_0__.Vehicle(\"Motor\", \"Suzuki\", \"Hayabusa\", 9, 85000, \"New\"), new _common_Vehicle_class_js__WEBPACK_IMPORTED_MODULE_0__.Vehicle(\"Car\", \"VW\", \"Passat B5\", 784390, 200, \"Wrecked\")];\n\nvar generateMainContent = function generateMainContent() {\n  var mainContentElement = document.getElementById(\"main-content\");\n  mainContentElement.innerHTML = \"<div class=\\\"row mt-2 g-2\\\">\".concat(fleet.map(function (item) {\n    return item.generateItem();\n  }).join(\"\"), \"</div>\");\n  fleet.forEach(function (item) {\n    return item.assignDefaultInputValue();\n  });\n};\n\nvar generateHeader = function generateHeader() {\n  var headerElement = document.querySelector(\"#header\");\n  var header = document.createElement(\"div\");\n  header.classList.add(\"bg-secondary\", \"bg-gradient\", \"bg-opacity-10\", \"w-100\", \"d-flex\", \"justify-content-center\", \"align-items-center\");\n  header.style.height = \"100px\";\n  var headerContent = document.createElement(\"h1\");\n  headerContent.innerHTML = \"Fleet Manager\";\n  header.append(headerContent);\n  headerElement.append(header);\n};\n\nvar generateSummary = function generateSummary() {\n  var summaryElement = document.querySelector(\".container\").querySelector(\"#summary\");\n  var fleetPrice = fleet.reduce(function (accSum, vehicle) {\n    accSum += Number(vehicle.price);\n    return accSum;\n  }, 0);\n  var summarySpanElement = document.createElement(\"h2\");\n  summarySpanElement.classList.add(\"mt-2\");\n  summarySpanElement.classList.add(\"w-100\");\n  summarySpanElement.classList.add(\"d-flex\");\n  summarySpanElement.classList.add(\"justify-content-center\");\n  summarySpanElement.classList.add(\"align-items-center\"); // summarySpanElement.className = \"mt-2 w-100 d-flex justify-content-center align-items-center\"\n\n  summarySpanElement.innerHTML = \"Fleet worth: \".concat(fleetPrice, \" z\\u0142\");\n\n  if (summaryElement.firstChild) {\n    // summaryElement.replaceChild(summarySpanElement, summaryElement.firstChild)\n    summaryElement.firstChild.replaceWith(summarySpanElement);\n  } else {\n    summaryElement.append(summarySpanElement);\n  }\n};\n\nvar deleteEventListeners = function deleteEventListeners() {\n  return fleet.forEach(function (vehicle) {\n    return deleteEventListener(vehicle);\n  });\n};\n\nvar editMenuEventListeners = function editMenuEventListeners() {\n  return fleet.forEach(function (vehicle) {\n    return editMenuListener(vehicle);\n  });\n};\n\nvar editPriceEventListeners = function editPriceEventListeners() {\n  return fleet.forEach(function (vehicle) {\n    return editPriceListener(vehicle);\n  });\n};\n\nvar editConditionEventListeners = function editConditionEventListeners() {\n  return fleet.forEach(function (vehicle) {\n    return editConditionListener(vehicle);\n  });\n};\n\nvar editCourseEventListeners = function editCourseEventListeners() {\n  return fleet.forEach(function (vehicle) {\n    return editCourseListener(vehicle);\n  });\n};\n\nvar editCourseListener = function editCourseListener(vehicle) {\n  var courseButton = document.getElementById(\"\".concat(vehicle.id, \"-change-course-button\"));\n  courseButton.addEventListener(\"click\", function () {\n    vehicle.changeCourse();\n    generateSummary();\n  });\n};\n\nvar editPriceListener = function editPriceListener(vehicle) {\n  var priceButton = document.getElementById(\"\".concat(vehicle.id, \"-change-price-button\"));\n  priceButton.addEventListener(\"click\", function () {\n    vehicle.changePrice();\n    generateSummary();\n  });\n};\n\nvar editConditionListener = function editConditionListener(vehicle) {\n  var priceButton = document.getElementById(\"\".concat(vehicle.id, \"-condition-select\"));\n  priceButton.addEventListener(\"change\", function (event) {\n    var newValue = event.target.value;\n    vehicle.changeCondition(newValue);\n  });\n};\n\nvar editMenuListener = function editMenuListener(vehicle) {\n  var editButton = document.getElementById(\"\".concat(vehicle.id, \"-edit-button\"));\n  editButton.addEventListener(\"click\", function () {\n    var settingsElement = document.getElementById(vehicle.id).querySelector(\"#settings-container\");\n    var areSettingsHidden = settingsElement.classList.contains(\"d-none\");\n\n    if (areSettingsHidden) {\n      settingsElement.classList.add(\"d-block\");\n      settingsElement.classList.remove(\"d-none\");\n    } else {\n      settingsElement.classList.remove(\"d-block\");\n      settingsElement.classList.add(\"d-none\");\n    }\n  });\n};\n\nvar deleteEventListener = function deleteEventListener(vehicle) {\n  var deleteButton = document.getElementById(\"\".concat(vehicle.id, \"-delete-button\"));\n  deleteButton.addEventListener(\"click\", function () {\n    var elementToDelete = document.getElementById(vehicle.id);\n    elementToDelete.parentElement.removeChild(elementToDelete);\n    fleet = fleet.filter(function (vahicleInState) {\n      return vahicleInState.id !== vehicle.id;\n    });\n    generateSummary();\n  });\n};\n\nvar addVehicleProcess = function addVehicleProcess() {\n  var _validateFulfilledDat = (0,_common_validation_js__WEBPACK_IMPORTED_MODULE_2__.validateFulfilledData)(),\n      errors = _validateFulfilledDat.errors,\n      data = _validateFulfilledDat.data;\n\n  if (errors.length > 0) {\n    (0,_common_helpers_js__WEBPACK_IMPORTED_MODULE_1__.addInputsValidation)(errors);\n  } else {\n    (0,_common_helpers_js__WEBPACK_IMPORTED_MODULE_1__.removeInputsValidation)();\n\n    var newVehicle = _construct(_common_Vehicle_class_js__WEBPACK_IMPORTED_MODULE_0__.Vehicle, _toConsumableArray(data));\n\n    fleet = [newVehicle].concat(_toConsumableArray(fleet));\n    var rowElement = document.getElementById(\"main-content\").querySelector(\"div.row\");\n    rowElement.insertAdjacentHTML(\"afterbegin\", newVehicle.generateItem());\n    generateSummary();\n    editMenuListener(newVehicle);\n    editPriceListener(newVehicle);\n    editConditionListener(newVehicle);\n    deleteEventListener(newVehicle);\n    newVehicle.assignDefaultInputValue();\n    (0,_common_helpers_js__WEBPACK_IMPORTED_MODULE_1__.setDefaultInputsValue)();\n  }\n};\n\nvar addNewVehicleListener = function addNewVehicleListener() {\n  var addButton = document.getElementById(\"add-vehicle-button\");\n  addButton.addEventListener(\"click\", function (event) {\n    event.preventDefault();\n    addVehicleProcess();\n  });\n};\n\nvar formSubmitListener = function formSubmitListener() {\n  var formEl = document.getElementById(\"add-form\");\n  formEl.addEventListener(\"submit\", function (event) {\n    event.preventDefault();\n    addVehicleProcess();\n  });\n};\n\nvar refreshView = function refreshView() {\n  generateMainContent();\n  generateHeader();\n  generateSummary();\n  deleteEventListeners();\n  editMenuEventListeners();\n  editPriceEventListeners();\n  editConditionEventListeners();\n  editCourseEventListeners();\n  addNewVehicleListener();\n  formSubmitListener();\n};\n\n//# sourceURL=webpack:///./src/components/App/App.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_App_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/App/App */ \"./src/components/App/App.js\");\n\n(0,_components_App_App__WEBPACK_IMPORTED_MODULE_0__.refreshView)(); // User can edit vehicle. Please add additional fields: Type and Course.\n// On card after vehicle brand and model, there is static Car icon, please make it dynamic, based on Vehicle.type property.\n// You can use already embedded icons.\n// https://fontawesome.com/v5.15/icons?d=gallery&p=2&m=free\n// Every Vehicle has condition property, please add dynamic card borders depending on that variable:\n// New – green border,\n// Used – yellow border,\n// Wrecked – red border.\n// There is implemented easy and simple validation (src/common/helpers) during adding new vehicle process.\n// Please implement mechanism to style inputs during that process - for example use borders classes from bootstrap\n// Please in settings container for each Vehicle, in condition-select – make one of option as selected – depending on selected type.\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);\n\n//# sourceURL=webpack:///./node_modules/uuid/dist/esm-browser/regex.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rng)\n/* harmony export */ });\n// Unique ID creation requires a high quality random # generator. In the browser we therefore\n// require the crypto API and do not support built-in fallback to lower quality random number\n// generators (like Math.random()).\nvar getRandomValues;\nvar rnds8 = new Uint8Array(16);\nfunction rng() {\n  // lazy load so that environments that need to polyfill have a chance to do so\n  if (!getRandomValues) {\n    // getRandomValues needs to be invoked in a context where \"this\" is a Crypto implementation. Also,\n    // find the complete implementation of crypto (msCrypto) on IE11.\n    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);\n\n    if (!getRandomValues) {\n      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');\n    }\n  }\n\n  return getRandomValues(rnds8);\n}\n\n//# sourceURL=webpack:///./node_modules/uuid/dist/esm-browser/rng.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-browser/validate.js\");\n\n/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\n\nvar byteToHex = [];\n\nfor (var i = 0; i < 256; ++i) {\n  byteToHex.push((i + 0x100).toString(16).substr(1));\n}\n\nfunction stringify(arr) {\n  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  // Note: Be careful editing this code!  It's been tuned for performance\n  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434\n  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one\n  // of the following:\n  // - One or more input array values don't map to a hex octet (leading to\n  // \"undefined\" in the uuid)\n  // - Invalid input values for the RFC `version` or `variant` fields\n\n  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__.default)(uuid)) {\n    throw TypeError('Stringified UUID is invalid');\n  }\n\n  return uuid;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);\n\n//# sourceURL=webpack:///./node_modules/uuid/dist/esm-browser/stringify.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/esm-browser/rng.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-browser/stringify.js\");\n\n\n\nfunction v4(options, buf, offset) {\n  options = options || {};\n  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__.default)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n\n  rnds[6] = rnds[6] & 0x0f | 0x40;\n  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided\n\n  if (buf) {\n    offset = offset || 0;\n\n    for (var i = 0; i < 16; ++i) {\n      buf[offset + i] = rnds[i];\n    }\n\n    return buf;\n  }\n\n  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__.default)(rnds);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);\n\n//# sourceURL=webpack:///./node_modules/uuid/dist/esm-browser/v4.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ \"./node_modules/uuid/dist/esm-browser/regex.js\");\n\n\nfunction validate(uuid) {\n  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__.default.test(uuid);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack:///./node_modules/uuid/dist/esm-browser/validate.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;