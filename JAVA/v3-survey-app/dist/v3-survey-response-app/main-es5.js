function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/"./$$_lazy_route_resource lazy recursive": (
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/
  /*! no static exports found */
  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }
    webpackEmptyAsyncContext.keys = function () {
      return [];
    };
    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": (
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<router-outlet></router-outlet> ";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/survey-response/survey-response.component.html": (
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/survey-response/survey-response.component.html ***!
    \******************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSurveyResponseSurveyResponseComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<omoto-survey-lib *ngIf=\"showSurvey\" [surveyContent]=\"survey\" [testMode]=\"false\"\n(surveyResponseEmitter)=\"emitResponse($event)\"></omoto-survey-lib>\n\n<omoto-survey-lib *ngIf=\"!showSurvey\" [surveyContent]=\"newSurveyContent\" [testMode]=\"false\" (surveyResponseEmitter)=\"emitResponse($event)\"></omoto-survey-lib>";

    /***/
  }),
  /***/"./node_modules/tslib/tslib.es6.js": (
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/
  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };
      return _extendStatics(d, b);
    };
    function __extends(d, b) {
      _extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }
        return t;
      };
      return _assign.apply(this, arguments);
    };
    function __rest(s, e) {
      var t = {};
      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }
      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }
    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }
    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }
    function __generator(thisArg, body) {
      var _ = {
          label: 0,
          sent: function sent() {
            if (t[0] & 1) throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        },
        f,
        y,
        t,
        g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;
      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2]) _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }
        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }
    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }
    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
        m = s && o[s],
        i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
        r,
        ar = [],
        e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }
      return ar;
    }
    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }
      return ar;
    }
    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }
      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }
      return r;
    }
    ;
    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
        i,
        q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;
      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }
      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }
      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }
      function fulfill(value) {
        resume("next", value);
      }
      function reject(value) {
        resume("throw", value);
      }
      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }
    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;
      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }
    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
        i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);
      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }
      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }
    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }
      return cooked;
    }
    ;
    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }
    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }
      return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }
      privateMap.set(receiver, value);
      return value;
    }

    /***/
  }),
  /***/"./src/app/app-routing.module.ts": (
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/
  /*! exports provided: AppRoutingModule */
  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _survey_response_survey_response_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./survey-response/survey-response.component */"./src/app/survey-response/survey-response.component.ts");
    var routes = [{
      path: '',
      redirectTo: '/feedback',
      pathMatch: 'full'
    }, {
      path: 'feedback/:surveyIdentifier',
      component: _survey_response_survey_response_component__WEBPACK_IMPORTED_MODULE_3__["SurveyResponseComponent"]
    }, {
      path: 'feedback/:surveyIdentifier/:respondentIdentifier',
      component: _survey_response_survey_response_component__WEBPACK_IMPORTED_MODULE_3__["SurveyResponseComponent"]
    }];
    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);

    /***/
  }),
  /***/"./src/app/app.component.css": (
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/
  /*! exports provided: default */
  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\r\n.bg-image-container {\r\n  height: 100%;\r\n  background-color: #f2f3f5;\r\n}\r\n\r\n.sign-in-up-wrapper{\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 100%;\r\n}\r\n\r\n.cont {\r\n  overflow: hidden;\r\n  position: relative;\r\n  width: 710px;\r\n  height: 443px;\r\n  background: #fff;\r\n  border-radius: 10px;\r\n}\r\n\r\n.form {\r\n  position: relative;\r\n  width: 416px;\r\n  height: 100%;\r\n  transition: transform 0.8s ease-in-out;\r\n  padding: 32px 49px 0;\r\n}\r\n\r\n.sub-cont {\r\n  overflow: hidden;\r\n  position: absolute;\r\n  left: 416px;\r\n  top: 0;\r\n  width: 710px;\r\n  height: 100%;\r\n  padding-left: 260px;\r\n  background: #fff;\r\n  transition: transform 0.8s ease-in-out;\r\n}\r\n\r\n.cont.s--signup .sub-cont {\r\n  transform: translate3d(-416px, 0, 0);\r\n}\r\n\r\n.overlay {\r\n  overflow: hidden;\r\n  z-index: 2;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  width: 294px;\r\n  height: 100%;\r\n  padding-top: 300px;\r\n}\r\n\r\n.overlay:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  width: 980px;\r\n  height: 100%;\r\n  background-image: linear-gradient(to right, #56ccf2, #2f80ed);\r\n  background-size: cover;\r\n  transition: transform 0.8s ease-in-out;\r\n}\r\n\r\n.overlay:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.cont.s--signup .overlay:before {\r\n  transform: translate3d(640px, 0, 0);\r\n}\r\n\r\n.overlay-text {\r\n  z-index: 2;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 115px;\r\n  width: 100%;\r\n  padding: 0 24px;\r\n  text-align: center;\r\n  color: #fff;\r\n  transition: transform 0.8s ease-in-out;\r\n}\r\n\r\n.cont.s--signup .overlay-text.overlay-signup {\r\n  transform: translateX(520px);\r\n}\r\n\r\n.overlay-text.overlay-signin {\r\n  transform: translateX(-520px);\r\n}\r\n\r\n.cont.s--signup .overlay-text.overlay-signin {\r\n  transform: translateX(0);\r\n}\r\n\r\n.overlay-btn {\r\n  overflow: hidden;\r\n  z-index: 2;\r\n  position: relative;\r\n  width: 148px;\r\n  height: 40px;\r\n  margin: 0 auto;\r\n  background: transparent;\r\n  color: #fff;\r\n  font-size: 16px;\r\n  cursor: pointer;\r\n  border: 0.5px solid #fff;\r\n  border-radius: 4px;\r\n}\r\n\r\n.overlay-btn:after {\r\n  content: \"\";\r\n  z-index: 2;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.overlay-btn span {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 100%;\r\n  transition: transform 0.8s;\r\n}\r\n\r\n.overlay-btn span.overlay-signin {\r\n  transform: translateY(-72px);\r\n}\r\n\r\n.cont.s--signup .overlay-btn span.overlay-signin {\r\n  transform: translateY(0);\r\n}\r\n\r\n.cont.s--signup .overlay-btn span.overlay-signup {\r\n  transform: translateY(72px);\r\n}\r\n\r\n.sign-in {\r\n  transition-timing-function: ease-out;\r\n}\r\n\r\n.cont.s--signup .sign-in {\r\n  transition-timing-function: ease-in-out;\r\n  transition-duration: 0.8s;\r\n  transform: translate3d(416px, 0, 0);\r\n}\r\n\r\n.sign-up {\r\n  transform: translate3d(-900px, 0, 0);\r\n}\r\n\r\n.cont.s--signup .sign-up {\r\n  transform: translate3d(32px, 0, 0);\r\n}\r\n\r\n.organisation-logo{\r\n  display: block;\r\n  margin: 0 auto;\r\n  width: 189px;\r\n}\r\n\r\n.social-btn-container{\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-top: 15px;\r\n\r\n}\r\n\r\n.social-btn-container i{\r\n  font-size: 20px;\r\n  margin-right:22px;\r\n  cursor: pointer;\r\n}\r\n\r\n.social-btn-container i:nth-last-child(1){\r\n  margin-right: 0;\r\n}\r\n\r\n.form-item{\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.form-button{\r\n  width: 100%;\r\n}\r\n\r\n.invalid-input.ng-invalid.ng-touched {\r\n  color: #f5222d;\r\n}\r\n\r\n.checkmar-icon-container{\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.checkmark {\r\n  width: 57px;\r\n  height: 57px;\r\n  border-radius: 50%;\r\n  display: block;\r\n  stroke-width: 3;\r\n  stroke: #fff;\r\n  stroke-miterlimit: 10;\r\n  box-shadow: inset 0px 0px 0px #7ac142;\r\n  -webkit-animation: fill 0.4s ease-in-out 0.4s forwards, scale 0.3s ease-in-out 0.9s both;\r\n          animation: fill 0.4s ease-in-out 0.4s forwards, scale 0.3s ease-in-out 0.9s both;\r\n}\r\n\r\n.checkmark__circle {\r\n  stroke-dasharray: 166;\r\n  stroke-dashoffset: 166;\r\n  stroke-width: 2;\r\n  stroke-miterlimit: 10;\r\n  stroke: #7ac142;\r\n  fill: none;\r\n  -webkit-animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;\r\n          animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;\r\n}\r\n\r\n.checkmark__check {\r\n  transform-origin: 50% 50%;\r\n  stroke-dasharray: 48;\r\n  stroke-dashoffset: 48;\r\n  -webkit-animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;\r\n          animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;\r\n}\r\n\r\n@-webkit-keyframes stroke {\r\n  100% {\r\n    stroke-dashoffset: 0;\r\n  }\r\n}\r\n\r\n@keyframes stroke {\r\n  100% {\r\n    stroke-dashoffset: 0;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes scale {\r\n  0%, 100% {\r\n    transform: none;\r\n  }\r\n  50% {\r\n    transform: scale3d(1.1, 1.1, 1);\r\n  }\r\n}\r\n\r\n@keyframes scale {\r\n  0%, 100% {\r\n    transform: none;\r\n  }\r\n  50% {\r\n    transform: scale3d(1.1, 1.1, 1);\r\n  }\r\n}\r\n\r\n@-webkit-keyframes fill {\r\n  100% {\r\n    box-shadow: inset 0px 0px 0px 30px #7ac142;\r\n  }\r\n}\r\n\r\n@keyframes fill {\r\n  100% {\r\n    box-shadow: inset 0px 0px 0px 30px #7ac142;\r\n  }\r\n}\r\n\r\n.password-recovery-card-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding: 12px 0 25px;\r\n}\r\n\r\n.password-recovery-card {\r\n  width: 145px;\r\n  height: 130px;\r\n  padding-top: 20px;\r\n  cursor: pointer;\r\n  border: 1px solid #e8e8e8;\r\n}\r\n\r\n/*end of sign in up page*/\r\n\r\n/*\r\n.logo {\r\n  width: 120px;\r\n  height: 31px;\r\n  margin: 16px 24px 16px 0;\r\n  float: left;\r\n  content:url(../assets/image/omoto-logo.png);\r\n}\r\n\r\n.right-headers{\r\n  float: right;\r\n}\r\n\r\n.user-name{\r\n  margin-left: 5px;\r\n  width: 35px;\r\n  height: 22px;\r\n  opacity: 0.85;\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n  font-style: normal;\r\n  font-stretch: normal;\r\n  line-height: 1.57;\r\n  letter-spacing: normal;\r\n  color: #ffffff;\r\n}\r\n\r\n.user-icon{\r\n  color: #ffffff;\r\n  opacity: 0.45;\r\n}\r\n\r\n.notification-icon{\r\n  color: #ffffff;\r\n  margin-right: 15px;\r\n  margin-left: 17px;\r\n}\r\n\r\n.search-icon{\r\n  color: #ffffff;\r\n}\r\n\r\n.user-icon-bg{\r\n  width: 200px;\r\n  height: 200px;\r\n  opacity: 0.75;\r\n  background-color: #ddcc6b;\r\n  border-radius: 50%;\r\n}\r\n\r\n.workspace{\r\n  background: #ffffff;\r\n  height: 100%;\r\n  !*margin-top: 3.1%;*!\r\n}\r\n\r\n.workspace-background{\r\n  background: #f5f6fa;\r\n  height: 100%;\r\n}\r\n\r\n\r\n\r\n!*@media screen and (min-width: 320px) {\r\n  .main-menu-bar {\r\n    background: #ffffff;\r\n    height: 65px;\r\n    border-style: solid;\r\n    border-color: #ffffff;\r\n    border-width: 0;\r\n    border-bottom-color: #d7d7d7;\r\n    border-bottom-width: 2px;\r\n  }\r\n\r\n  .ant-main-menu-horizontal{\r\n    border-bottom: 0 #ffffff;\r\n    line-height: 63px;\r\n  }\r\n\r\n  .ant-main-menu-item:hover {\r\n    color: #4a4a4a;\r\n    border-bottom-color: #4a4a4a;\r\n    border-bottom-width: 2px;\r\n  }\r\n\r\n  .ant-main-menu-item-selected{\r\n    border-bottom-color: #4a4a4a;\r\n  }\r\n\r\n\r\n  .organization-logo{\r\n    width: 120px;\r\n    height: 31px;\r\n    margin: 8px 0 2px 21px;\r\n    float: left;\r\n    content:url(https://cdn.zeplin.io/5b8cc3d60d73ba623b1417b8/assets/E4163CB0-1ACB-4FD3-B06A-C4AAC032EFBC.png);\r\n  }\r\n\r\n  .menus{\r\n    background: #ffffff;\r\n    width: 25.4%;\r\n    height: 43.5%;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  }\r\n\r\n  .main-menu-items{\r\n    font-size: 17px;\r\n    color: #3e3e3c;\r\n\r\n  }\r\n\r\n  .right-menus{\r\n    width: 22.6%;\r\n    display: block;\r\n    margin-left: auto;\r\n  }\r\n\r\n  .search-box{\r\n    width: 260px;\r\n  }\r\n}*!\r\n\r\n!*@media screen and (max-width: 320px) {\r\n  .main-menu-bar {\r\n    background: #b4c6e0;\r\n    height: 50px;\r\n  }\r\n}*!\r\n*/\r\n\r\n.bg {\r\n  height: 100%;\r\n  width: 100%;\r\n  background: #f2f3f5;\r\n  overflow: auto;\r\n  padding-top: 65px;\r\n  padding-bottom: 45px;\r\n}\r\n\r\n.bg-2 {\r\n  height: 100%;\r\n  width: 100%;\r\n  background: #141617;\r\n}\r\n\r\n.container{\r\n  margin: auto;\r\n  max-width: 1152px;\r\n  height: 100%;\r\n}\r\n\r\n.container-2{\r\n  margin: auto;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.workspace{\r\n  background: #ffffff;\r\n  min-height: 95%;\r\n}\r\n\r\n.nav-header {\r\n  position: fixed;\r\n  width: 100vw;\r\n  background: #fff;\r\n  z-index: 999\r\n}\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osc0NBQXNDO0VBQ3RDLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLE1BQU07RUFDTixZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsc0NBQXNDO0FBQ3hDOztBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE1BQU07RUFDTixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLE1BQU07RUFDTixZQUFZO0VBQ1osWUFBWTtFQUNaLDZEQUE2RDtFQUM3RCxzQkFBc0I7RUFDdEIsc0NBQXNDO0FBQ3hDOztBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxVQUFVO0VBQ1YsV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFDQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osY0FBYztFQUNkLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsZUFBZTtFQUNmLGVBQWU7RUFDZix3QkFBd0I7RUFDeEIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxNQUFNO0VBQ04sYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWiwwQkFBMEI7QUFDNUI7O0FBQ0E7RUFDRSw0QkFBNEI7QUFDOUI7O0FBQ0E7RUFDRSx3QkFBd0I7QUFDMUI7O0FBQ0E7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBQ0E7RUFDRSx1Q0FBdUM7RUFDdkMseUJBQXlCO0VBQ3pCLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFDQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFHQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2QsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixnQkFBZ0I7O0FBRWxCOztBQUNBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBSUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixxQ0FBcUM7RUFDckMsd0ZBQWdGO1VBQWhGLGdGQUFnRjtBQUNsRjs7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsVUFBVTtFQUNWLHNFQUE4RDtVQUE5RCw4REFBOEQ7QUFDaEU7O0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQiwyRUFBbUU7VUFBbkUsbUVBQW1FO0FBQ3JFOztBQUNBO0VBQ0U7SUFDRSxvQkFBb0I7RUFDdEI7QUFDRjs7QUFKQTtFQUNFO0lBQ0Usb0JBQW9CO0VBQ3RCO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLCtCQUErQjtFQUNqQztBQUNGOztBQVBBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSwrQkFBK0I7RUFDakM7QUFDRjs7QUFDQTtFQUNFO0lBQ0UsMENBQTBDO0VBQzVDO0FBQ0Y7O0FBSkE7RUFDRTtJQUNFLDBDQUEwQztFQUM1QztBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YseUJBQXlCO0FBQzNCOztBQUVBLHlCQUF5Qjs7QUFtQnpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBa0lDOztBQUVEO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uYmctaW1hZ2UtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjNmNTtcclxufVxyXG5cclxuLnNpZ24taW4tdXAtd3JhcHBlcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY29udCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDcxMHB4O1xyXG4gIGhlaWdodDogNDQzcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uZm9ybSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA0MTZweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuOHMgZWFzZS1pbi1vdXQ7XHJcbiAgcGFkZGluZzogMzJweCA0OXB4IDA7XHJcbn1cclxuXHJcbi5zdWItY29udCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNDE2cHg7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiA3MTBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZy1sZWZ0OiAyNjBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjhzIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5jb250LnMtLXNpZ251cCAuc3ViLWNvbnQge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTQxNnB4LCAwLCAwKTtcclxufVxyXG5cclxuLm92ZXJsYXkge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgei1pbmRleDogMjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDI5NHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogMzAwcHg7XHJcbn1cclxuLm92ZXJsYXk6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDk4MHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM1NmNjZjIsICMyZjgwZWQpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuOHMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLm92ZXJsYXk6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4uY29udC5zLS1zaWdudXAgLm92ZXJsYXk6YmVmb3JlIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDY0MHB4LCAwLCAwKTtcclxufVxyXG5cclxuLm92ZXJsYXktdGV4dCB7XHJcbiAgei1pbmRleDogMjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDExNXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDAgMjRweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuOHMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5jb250LnMtLXNpZ251cCAub3ZlcmxheS10ZXh0Lm92ZXJsYXktc2lnbnVwIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTIwcHgpO1xyXG59XHJcbi5vdmVybGF5LXRleHQub3ZlcmxheS1zaWduaW4ge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTIwcHgpO1xyXG59XHJcbi5jb250LnMtLXNpZ251cCAub3ZlcmxheS10ZXh0Lm92ZXJsYXktc2lnbmluIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbn1cclxuLm92ZXJsYXktYnRuIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxNDhweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXI6IDAuNXB4IHNvbGlkICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5vdmVybGF5LWJ0bjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB6LWluZGV4OiAyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLm92ZXJsYXktYnRuIHNwYW4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjhzO1xyXG59XHJcbi5vdmVybGF5LWJ0biBzcGFuLm92ZXJsYXktc2lnbmluIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTcycHgpO1xyXG59XHJcbi5jb250LnMtLXNpZ251cCAub3ZlcmxheS1idG4gc3Bhbi5vdmVybGF5LXNpZ25pbiB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG59XHJcbi5jb250LnMtLXNpZ251cCAub3ZlcmxheS1idG4gc3Bhbi5vdmVybGF5LXNpZ251cCB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDcycHgpO1xyXG59XHJcblxyXG4uc2lnbi1pbiB7XHJcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG59XHJcbi5jb250LnMtLXNpZ251cCAuc2lnbi1pbiB7XHJcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuOHM7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg0MTZweCwgMCwgMCk7XHJcbn1cclxuXHJcbi5zaWduLXVwIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC05MDBweCwgMCwgMCk7XHJcbn1cclxuLmNvbnQucy0tc2lnbnVwIC5zaWduLXVwIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDMycHgsIDAsIDApO1xyXG59XHJcblxyXG5cclxuLm9yZ2FuaXNhdGlvbi1sb2dve1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHdpZHRoOiAxODlweDtcclxufVxyXG5cclxuLnNvY2lhbC1idG4tY29udGFpbmVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuXHJcbn1cclxuLnNvY2lhbC1idG4tY29udGFpbmVyIGl7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIG1hcmdpbi1yaWdodDoyMnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uc29jaWFsLWJ0bi1jb250YWluZXIgaTpudGgtbGFzdC1jaGlsZCgxKXtcclxuICBtYXJnaW4tcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5mb3JtLWl0ZW17XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4uZm9ybS1idXR0b257XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5pbnZhbGlkLWlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCB7XHJcbiAgY29sb3I6ICNmNTIyMmQ7XHJcbn1cclxuXHJcblxyXG5cclxuLmNoZWNrbWFyLWljb24tY29udGFpbmVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmNoZWNrbWFyayB7XHJcbiAgd2lkdGg6IDU3cHg7XHJcbiAgaGVpZ2h0OiA1N3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBzdHJva2Utd2lkdGg6IDM7XHJcbiAgc3Ryb2tlOiAjZmZmO1xyXG4gIHN0cm9rZS1taXRlcmxpbWl0OiAxMDtcclxuICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDBweCAjN2FjMTQyO1xyXG4gIGFuaW1hdGlvbjogZmlsbCAwLjRzIGVhc2UtaW4tb3V0IDAuNHMgZm9yd2FyZHMsIHNjYWxlIDAuM3MgZWFzZS1pbi1vdXQgMC45cyBib3RoO1xyXG59XHJcbi5jaGVja21hcmtfX2NpcmNsZSB7XHJcbiAgc3Ryb2tlLWRhc2hhcnJheTogMTY2O1xyXG4gIHN0cm9rZS1kYXNob2Zmc2V0OiAxNjY7XHJcbiAgc3Ryb2tlLXdpZHRoOiAyO1xyXG4gIHN0cm9rZS1taXRlcmxpbWl0OiAxMDtcclxuICBzdHJva2U6ICM3YWMxNDI7XHJcbiAgZmlsbDogbm9uZTtcclxuICBhbmltYXRpb246IHN0cm9rZSAwLjZzIGN1YmljLWJlemllcigwLjY1LCAwLCAwLjQ1LCAxKSBmb3J3YXJkcztcclxufVxyXG4uY2hlY2ttYXJrX19jaGVjayB7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcclxuICBzdHJva2UtZGFzaGFycmF5OiA0ODtcclxuICBzdHJva2UtZGFzaG9mZnNldDogNDg7XHJcbiAgYW5pbWF0aW9uOiBzdHJva2UgMC4zcyBjdWJpYy1iZXppZXIoMC42NSwgMCwgMC40NSwgMSkgMC44cyBmb3J3YXJkcztcclxufVxyXG5Aa2V5ZnJhbWVzIHN0cm9rZSB7XHJcbiAgMTAwJSB7XHJcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBzY2FsZSB7XHJcbiAgMCUsIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiBub25lO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMSwgMS4xLCAxKTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBmaWxsIHtcclxuICAxMDAlIHtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMHB4IDMwcHggIzdhYzE0MjtcclxuICB9XHJcbn1cclxuXHJcbi5wYXNzd29yZC1yZWNvdmVyeS1jYXJkLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMnB4IDAgMjVweDtcclxufVxyXG5cclxuLnBhc3N3b3JkLXJlY292ZXJ5LWNhcmQge1xyXG4gIHdpZHRoOiAxNDVweDtcclxuICBoZWlnaHQ6IDEzMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZThlOGU4O1xyXG59XHJcblxyXG4vKmVuZCBvZiBzaWduIGluIHVwIHBhZ2UqL1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vKlxyXG4ubG9nbyB7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIGhlaWdodDogMzFweDtcclxuICBtYXJnaW46IDE2cHggMjRweCAxNnB4IDA7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgY29udGVudDp1cmwoLi4vYXNzZXRzL2ltYWdlL29tb3RvLWxvZ28ucG5nKTtcclxufVxyXG5cclxuLnJpZ2h0LWhlYWRlcnN7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4udXNlci1uYW1le1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgd2lkdGg6IDM1cHg7XHJcbiAgaGVpZ2h0OiAyMnB4O1xyXG4gIG9wYWNpdHk6IDAuODU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU3O1xyXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi51c2VyLWljb257XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgb3BhY2l0eTogMC40NTtcclxufVxyXG5cclxuLm5vdGlmaWNhdGlvbi1pY29ue1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxuICBtYXJnaW4tbGVmdDogMTdweDtcclxufVxyXG5cclxuLnNlYXJjaC1pY29ue1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4udXNlci1pY29uLWJne1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIG9wYWNpdHk6IDAuNzU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkY2M2YjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi53b3Jrc3BhY2V7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgISptYXJnaW4tdG9wOiAzLjElOyohXHJcbn1cclxuXHJcbi53b3Jrc3BhY2UtYmFja2dyb3VuZHtcclxuICBiYWNrZ3JvdW5kOiAjZjVmNmZhO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuXHJcblxyXG4hKkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSB7XHJcbiAgLm1haW4tbWVudS1iYXIge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGhlaWdodDogNjVweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItd2lkdGg6IDA7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZDdkN2Q3O1xyXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xyXG4gIH1cclxuXHJcbiAgLmFudC1tYWluLW1lbnUtaG9yaXpvbnRhbHtcclxuICAgIGJvcmRlci1ib3R0b206IDAgI2ZmZmZmZjtcclxuICAgIGxpbmUtaGVpZ2h0OiA2M3B4O1xyXG4gIH1cclxuXHJcbiAgLmFudC1tYWluLW1lbnUtaXRlbTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzRhNGE0YTtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICM0YTRhNGE7XHJcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XHJcbiAgfVxyXG5cclxuICAuYW50LW1haW4tbWVudS1pdGVtLXNlbGVjdGVke1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzRhNGE0YTtcclxuICB9XHJcblxyXG5cclxuICAub3JnYW5pemF0aW9uLWxvZ297XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBoZWlnaHQ6IDMxcHg7XHJcbiAgICBtYXJnaW46IDhweCAwIDJweCAyMXB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBjb250ZW50OnVybChodHRwczovL2Nkbi56ZXBsaW4uaW8vNWI4Y2MzZDYwZDczYmE2MjNiMTQxN2I4L2Fzc2V0cy9FNDE2M0NCMC0xQUNCLTRGRDMtQjA2QS1DNEFBQzAzMkVGQkMucG5nKTtcclxuICB9XHJcblxyXG4gIC5tZW51c3tcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICB3aWR0aDogMjUuNCU7XHJcbiAgICBoZWlnaHQ6IDQzLjUlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB9XHJcblxyXG4gIC5tYWluLW1lbnUtaXRlbXN7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBjb2xvcjogIzNlM2UzYztcclxuXHJcbiAgfVxyXG5cclxuICAucmlnaHQtbWVudXN7XHJcbiAgICB3aWR0aDogMjIuNiU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLnNlYXJjaC1ib3h7XHJcbiAgICB3aWR0aDogMjYwcHg7XHJcbiAgfVxyXG59KiFcclxuXHJcbiEqQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcclxuICAubWFpbi1tZW51LWJhciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYjRjNmUwO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gIH1cclxufSohXHJcbiovXHJcblxyXG4uYmcge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjZjJmM2Y1O1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIHBhZGRpbmctdG9wOiA2NXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA0NXB4O1xyXG59XHJcblxyXG4uYmctMiB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICMxNDE2MTc7XHJcbn1cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1heC13aWR0aDogMTE1MnB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmNvbnRhaW5lci0ye1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi53b3Jrc3BhY2V7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBtaW4taGVpZ2h0OiA5NSU7XHJcbn1cclxuXHJcbi5uYXYtaGVhZGVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgei1pbmRleDogOTk5XHJcbn1cclxuXHJcblxyXG5cclxuIl19 */";

    /***/
  }),
  /***/"./src/app/app.component.ts": (
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/
  /*! exports provided: AppComponent */
  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./common.service */"./src/app/common.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(commonService, activatedRoute, cdRef) {
        _classCallCheck(this, AppComponent);
        this.commonService = commonService;
        this.activatedRoute = activatedRoute;
        this.cdRef = cdRef;
      }
      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;
          this.commonService.changeBaseLayoutEvent.subscribe(function (value) {
            _this.commonService.baseLayout = value;
            _this.cdRef.detectChanges();
          });
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this.cdRef.detectChanges();
        }
      }]);
      return AppComponent;
    }();
    AppComponent.ctorParameters = function () {
      return [{
        type: _common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./app.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./app.component.css */"./src/app/app.component.css"))["default"]]
    })], AppComponent);

    /***/
  }),
  /***/"./src/app/app.module.ts": (
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/
  /*! exports provided: AppModule */
  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/platform-browser */"./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/platform-browser/animations */"./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */
    var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @ngrx/store */"./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */
    var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @ngrx/store-devtools */"./node_modules/@ngrx/store-devtools/fesm2015/store-devtools.js");
    /* harmony import */
    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @ngrx/effects */"./node_modules/@ngrx/effects/fesm2015/effects.js");
    /* harmony import */
    var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! @ngrx/router-store */"./node_modules/@ngrx/router-store/fesm2015/router-store.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */
    var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! @angular/common/locales/en */"./node_modules/@angular/common/locales/en.js");
    /* harmony import */
    var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony import */
    var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! @ant-design/icons-angular/icons */"./node_modules/@ant-design/icons-angular/fesm2015/ant-design-icons-angular-icons.js");
    /* harmony import */
    var _ngx_share_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__( /*! @ngx-share/core */"./node_modules/@ngx-share/core/fesm2015/ngx-share-core.js");
    /* harmony import */
    var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__( /*! ./app.component */"./src/app/app.component.ts");
    /* harmony import */
    var _app_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__( /*! ./app-routing.module */"./src/app/app-routing.module.ts");
    /* harmony import */
    var _store_app_reducer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__( /*! ./store/app.reducer */"./src/app/store/app.reducer.ts");
    /* harmony import */
    var _environments_environment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__( /*! ../environments/environment */"./src/environments/environment.ts");
    /* harmony import */
    var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__( /*! ng-zorro-antd */"./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
    /* harmony import */
    var _common_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__( /*! ./common.service */"./src/app/common.service.ts");
    /* harmony import */
    var survey_lib__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__( /*! survey-lib */"./node_modules/survey-lib/fesm2015/survey-lib.js");
    /* harmony import */
    var _survey_response_survey_response_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__( /*! ./survey-response/survey-response.component */"./src/app/survey-response/survey-response.component.ts");
    /* harmony import */
    var _pages_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__( /*! ./pages.service */"./src/app/pages.service.ts");
    Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_11___default.a);
    var antDesignIcons = _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_12__;
    var icons = Object.keys(antDesignIcons).map(function (key) {
      return antDesignIcons[key];
    });
    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"], _survey_response_survey_response_component__WEBPACK_IMPORTED_MODULE_21__["SurveyResponseComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"], _ngx_share_core__WEBPACK_IMPORTED_MODULE_13__["ShareModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forRoot(_store_app_reducer__WEBPACK_IMPORTED_MODULE_16__["REDUCER_TOKEN"]), _ngrx_router_store__WEBPACK_IMPORTED_MODULE_8__["StoreRouterConnectingModule"], !_environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__["StoreDevtoolsModule"].instrument() : [], _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsModule"].forRoot([]), ng_zorro_antd__WEBPACK_IMPORTED_MODULE_18__["NgZorroAntdModule"], survey_lib__WEBPACK_IMPORTED_MODULE_20__["SurveyLibModule"]],
      exports: [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_18__["NgZorroAntdModule"]],
      providers: [{
        provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_18__["NZ_I18N"],
        useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_18__["en_US"]
      }, {
        provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_18__["NZ_ICONS"],
        useValue: icons
      }, _common_service__WEBPACK_IMPORTED_MODULE_19__["CommonService"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"], _pages_service__WEBPACK_IMPORTED_MODULE_22__["PagesService"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]]
    })], AppModule);

    /***/
  }),
  /***/"./src/app/common.service.ts": (
  /*!***********************************!*\
    !*** ./src/app/common.service.ts ***!
    \***********************************/
  /*! exports provided: CommonService */
  /***/
  function srcAppCommonServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "CommonService", function () {
      return CommonService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var CommonService = function CommonService() {
      _classCallCheck(this, CommonService);
      this.changeBaseLayoutEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      this.baseLayout = 1;
    };
    CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], CommonService);

    /***/
  }),
  /***/"./src/app/pages.service.ts": (
  /*!**********************************!*\
    !*** ./src/app/pages.service.ts ***!
    \**********************************/
  /*! exports provided: PagesService */
  /***/
  function srcAppPagesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "PagesService", function () {
      return PagesService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! rxjs/operators */"./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */
    var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! src/environments/environment */"./src/environments/environment.ts");
    var PagesService_1;
    var PagesService = PagesService_1 = /*#__PURE__*/function () {
      function PagesService(httpClient) {
        _classCallCheck(this, PagesService);
        this.httpClient = httpClient;
        this.surveyUrl = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl, "/public/survey/getSurvey?");
        this.previousQuestion = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nextQuestion = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nextPageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }
      _createClass(PagesService, [{
        key: "getSurvey",
        value: function getSurvey(surveyIdentifier, respondentIdentifier, testMode) {
          return this.httpClient.get(this.surveyUrl, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('surveyIdentifier', '' + surveyIdentifier).append('respondentIdentifier', respondentIdentifier).append('testMode', testMode)
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return PagesService_1.processResponse(response);
          }));
        }
      }, {
        key: "submitResponse",
        value: function submitResponse(surveyResponse) {
          var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + "/public/response/submit";
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
          return this.httpClient.post(url, surveyResponse, {
            headers: headers
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }], [{
        key: "processResponse",
        value: function processResponse(response) {
          return response.data.result;
        }
      }]);
      return PagesService;
    }();
    PagesService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };
    PagesService = PagesService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], PagesService);

    /***/
  }),
  /***/"./src/app/store/app.reducer.ts": (
  /*!**************************************!*\
    !*** ./src/app/store/app.reducer.ts ***!
    \**************************************/
  /*! exports provided: reducers, REDUCER_TOKEN */
  /***/
  function srcAppStoreAppReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "reducers", function () {
      return reducers;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "REDUCER_TOKEN", function () {
      return REDUCER_TOKEN;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @ngrx/router-store */"./node_modules/@ngrx/router-store/fesm2015/router-store.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var reducers = {
      router: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_1__["routerReducer"]
    };
    var REDUCER_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('table', {
      factory: function factory() {
        return reducers;
      }
    });

    /***/
  }),
  /***/"./src/app/survey-response/survey-response.component.css": (
  /*!***************************************************************!*\
    !*** ./src/app/survey-response/survey-response.component.css ***!
    \***************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppSurveyResponseSurveyResponseComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cnZleS1yZXNwb25zZS9zdXJ2ZXktcmVzcG9uc2UuY29tcG9uZW50LmNzcyJ9 */";

    /***/
  }),
  /***/"./src/app/survey-response/survey-response.component.ts": (
  /*!**************************************************************!*\
    !*** ./src/app/survey-response/survey-response.component.ts ***!
    \**************************************************************/
  /*! exports provided: SurveyResponseComponent */
  /***/
  function srcAppSurveyResponseSurveyResponseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SurveyResponseComponent", function () {
      return SurveyResponseComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _pages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../pages.service */"./src/app/pages.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var SurveyResponseComponent = /*#__PURE__*/function () {
      function SurveyResponseComponent(pagesService, activatedRoute) {
        _classCallCheck(this, SurveyResponseComponent);
        this.pagesService = pagesService;
        this.activatedRoute = activatedRoute;
        this.showSurvey = true;
        this.survey = {
          name: "Maiden survey",
          description: "",
          pages: [{
            "pageId": null,
            "pageName": "Welcome page",
            "properties": {
              "headingValue": "Welcome!",
              "subHeadingValue": "This is a sample survey design for us to visualise how the welcome page on the survey would look like. The welcome text could be as big as a paragraph like this or it could be just a couple of lines. The design must be minimalist and would focus on the use of great typeface to create beautiful design. Of course, the colour and theme is configurable.",
              "backgroundImage": "",
              "buttonText": "Let's Start!"
            },
            "questions": null
          }, {
            "pageId": null,
            "pageName": "Questionnaire page",
            "properties": null,
            "questions": [{
              "questionId": -983398130,
              "questionType": "Nps",
              "question": "This is first question",
              "identifier": "1575269599502",
              "attributes": {
                "required": true,
                "description": null,
                "image": null,
                "video": null,
                "startScaleAt": 0,
                "leftLabel": "Unlikely",
                "centerLabel": "",
                "rightLabel": "Likely",
                "multipleChoice": false,
                "randomize": false,
                "others": false,
                "vertical": false,
                "alphabeticalSort": false,
                "defaultCountryCode": null,
                "ratingIcon": null,
                "maxCharacter": 0,
                "steps": null,
                "selection": null,
                "maxCharacterCount": 0,
                "minCharacterCount": 0
              },
              "choices": null,
              "rating": 4,
              "logicJumps": {
                "blocks": [],
                "defaultJump": null,
                "defaultJumpIndex": null
              }
            }, {
              "questionId": -983397665,
              "questionType": "Choice",
              "question": "This is second question",
              "identifier": "1575269599967",
              "attributes": {
                "required": false,
                "description": null,
                "image": null,
                "video": null,
                "startScaleAt": 0,
                "leftLabel": null,
                "centerLabel": null,
                "rightLabel": null,
                "multipleChoice": true,
                "randomize": false,
                "others": false,
                "vertical": true,
                "alphabeticalSort": false,
                "defaultCountryCode": null,
                "ratingIcon": null,
                "maxCharacter": 0,
                "steps": null,
                "selection": {
                  "type": "Unlimited"
                },
                "maxCharacterCount": 0,
                "minCharacterCount": 0
              },
              "choices": [{
                "choiceId": 0,
                "text": "Option 1",
                "identifier": "1575269599967"
              }, {
                "choiceId": 0,
                "text": "Option 2",
                "identifier": "1575269599967"
              }, {
                "choiceId": 0,
                "text": "Option 3",
                "identifier": "1575269599967"
              }, {
                "choiceId": 0,
                "text": "Option 4",
                "identifier": "1575269599967"
              }],
              "logicJumps": {
                "blocks": [],
                "defaultJump": null,
                "defaultJumpIndex": null
              }
            }]
          }, {
            "pageId": null,
            "pageName": "Thank you page",
            "properties": {
              "headingValue": "Thank you !",
              "subHeadingValue": "This is a sample survey design for us to visualise how the welcome page on the survey would look like. The welcome text could be as big as a paragraph like this or it could be just a couple of lines. The design must be minimalist and would focus on the use of great typeface to create beautiful design. Of course, the colour and theme is configurable.",
              "backgroundImage": "",
              "buttonText": "Close"
            },
            "questions": null
          }],
          selectedTheme: {
            "name": "Omoto Default",
            "isSelected": true,
            "colors": {
              "backgroundColor": "#ffffff",
              "primaryColor": "#4a4a4a",
              "primaryColorDark": "#3e3e3c",
              "footerBackgroundColor": "#f7f8f9",
              "primaryButtonTextColor": "#ffffff",
              "footerPrimaryColor": "#b8b9ba",
              "footerSecondaryColor": "#ffffff",
              "textColorPrimary": "#ffffff",
              "textColorSecondary": "#4a4a4a"
            },
            "font": {
              "name": "Muli",
              "url": "https://fonts.googleapis.com/css?family=Muli&display=swap"
            }
          },
          organizationLogo: ""
        };
        this.newSurveyContent = {};
        this.testMode = false;
      }
      _createClass(SurveyResponseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;
          this.startedAt = new Date();
          this.surveyIdentifier = this.activatedRoute.snapshot.params.surveyIdentifier;
          this.respondentIdentifier = this.activatedRoute.snapshot.params.respondentIdentifier;
          this.activatedRoute.queryParams.subscribe(function (params) {
            _this2.value = params['value'];
          });
          this.pagesService.getSurvey(this.surveyIdentifier, this.respondentIdentifier, this.testMode).subscribe(function (response) {
            if (response.surveyContent) {
              if (_this2.value) {
                var newSurveyContent2 = JSON.parse(JSON.stringify(response.surveyContent));
                newSurveyContent2.pages = newSurveyContent2.pages.filter(function (page) {
                  return page.pageName !== 'Welcome page';
                });
                _this2.newSurveyContent = newSurveyContent2;
                _this2.showSurvey = false;
              } else {
                _this2.newSurveyContent = response.surveyContent;
                _this2.showSurvey = false;
              }
            }
          }, function (e) {
            console.log("error", e);
          });
        }
      }, {
        key: "submitSurvey",
        value: function submitSurvey(response) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var ipAddress, respondentDetails, metaInfo, appendedObject;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.completedAt = new Date();
                    _context.next = 3;
                    return fetch('https://api.ipify.org?format=json').then(function (response) {
                      return response.json();
                    }).then(function (data) {
                      ipAddress = data.ip;
                    });
                  case 3:
                    respondentDetails = {
                      "firstName": null,
                      "lastName": null,
                      "email": null,
                      "phone": null,
                      "ipAddress": ipAddress
                    };
                    response.forEach(function (res) {
                      if (res.questionType === "Short text") {
                        respondentDetails.firstName = res.answer;
                      }
                      if (res.questionType === "Email") {
                        respondentDetails.email = res.answer;
                      }
                      if (res.questionType === "Phone number") {
                        respondentDetails.phone = res.answer;
                      }
                    });
                    metaInfo = {
                      "completedAt": this.completedAt,
                      "noOfQuestionAnswered": response.length,
                      "platform": "string",
                      "respondentId": 0,
                      "responseDate": this.completedAt,
                      "startedAt": this.startedAt,
                      "surveyId": this.surveyIdentifier,
                      "timeTakenInSeconds": 0
                    };
                    appendedObject = {
                      responseMetaInformation: metaInfo,
                      responses: response,
                      respondent: respondentDetails
                    };
                    console.log("appendedObject", appendedObject);
                    this.pagesService.submitResponse(appendedObject).subscribe(function (response) {}, function (error) {
                      console.log("error", error);
                    });
                  case 9:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "emitResponse",
        value: function emitResponse(response) {
          this.submitSurvey(response);
        }
      }]);
      return SurveyResponseComponent;
    }();
    SurveyResponseComponent.ctorParameters = function () {
      return [{
        type: _pages_service__WEBPACK_IMPORTED_MODULE_2__["PagesService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };
    SurveyResponseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-survey-response',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./survey-response.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/survey-response/survey-response.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./survey-response.component.css */"./src/app/survey-response/survey-response.component.css"))["default"]]
    })], SurveyResponseComponent);

    /***/
  }),
  /***/"./src/environments/environment.ts": (
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/
  /*! exports provided: environment */
  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.

    var environment = {
      production: false,
      clientId: 'gigy',
      secretKey: 'secret',
      //baseUrl: 'http://localhost:8081'
      baseUrl: 'http://testv3.omoto.io:8081'
    };
    /*
     * In development mode, to ignore zone related error stack frames such as
     * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
     * import the following file, but please comment it out in production mode
     * because it will have performance impact when throw error
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  }),
  /***/"./src/main.ts": (
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/
  /*! no exports provided */
  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/platform-browser-dynamic */"./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */
    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./app/app.module */"./src/app/app.module.ts");
    /* harmony import */
    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./environments/environment */"./src/environments/environment.ts");
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });

    /***/
  }),
  /***/0: (
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/
  /*! no static exports found */
  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__( /*! /home/abhinay/Desktop/OMOTO_06May(Backend+Frontend)/omoto-v3-survey-application/src/main.ts */"./src/main.ts");

    /***/
  })
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map