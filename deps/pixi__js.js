import {
  __commonJS,
  __esm,
  __export,
  __toCommonJS
} from "./chunk-6NOISVLF.js";

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to;
    };
  }
});

// node_modules/pixi.js/lib/polyfill/Object.assign.js
var require_Object_assign = __commonJS({
  "node_modules/pixi.js/lib/polyfill/Object.assign.js"() {
    "use strict";
    var _objectAssign = require_object_assign();
    var _objectAssign2 = _interopRequireDefault(_objectAssign);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    if (!Object.assign) {
      Object.assign = _objectAssign2.default;
    }
  }
});

// node_modules/pixi.js/lib/polyfill/requestAnimationFrame.js
var require_requestAnimationFrame = __commonJS({
  "node_modules/pixi.js/lib/polyfill/requestAnimationFrame.js"() {
    "use strict";
    if (global === void 0) {
      global = window;
    }
    var global;
    var ONE_FRAME_TIME = 16;
    if (!(Date.now && Date.prototype.getTime)) {
      Date.now = function now() {
        return (/* @__PURE__ */ new Date()).getTime();
      };
    }
    if (!(global.performance && global.performance.now)) {
      startTime = Date.now();
      if (!global.performance) {
        global.performance = {};
      }
      global.performance.now = function() {
        return Date.now() - startTime;
      };
    }
    var startTime;
    var lastTime = Date.now();
    var vendors = ["ms", "moz", "webkit", "o"];
    for (x = 0; x < vendors.length && !global.requestAnimationFrame; ++x) {
      p = vendors[x];
      global.requestAnimationFrame = global[p + "RequestAnimationFrame"];
      global.cancelAnimationFrame = global[p + "CancelAnimationFrame"] || global[p + "CancelRequestAnimationFrame"];
    }
    var p;
    var x;
    if (!global.requestAnimationFrame) {
      global.requestAnimationFrame = function(callback) {
        if (typeof callback !== "function") {
          throw new TypeError(callback + "is not a function");
        }
        var currentTime = Date.now();
        var delay = ONE_FRAME_TIME + lastTime - currentTime;
        if (delay < 0) {
          delay = 0;
        }
        lastTime = currentTime;
        return setTimeout(function() {
          lastTime = Date.now();
          callback(performance.now());
        }, delay);
      };
    }
    if (!global.cancelAnimationFrame) {
      global.cancelAnimationFrame = function(id) {
        return clearTimeout(id);
      };
    }
  }
});

// node_modules/pixi.js/lib/polyfill/Math.sign.js
var require_Math_sign = __commonJS({
  "node_modules/pixi.js/lib/polyfill/Math.sign.js"() {
    "use strict";
    if (!Math.sign) {
      Math.sign = function mathSign(x) {
        x = Number(x);
        if (x === 0 || isNaN(x)) {
          return x;
        }
        return x > 0 ? 1 : -1;
      };
    }
  }
});

// node_modules/pixi.js/lib/polyfill/Number.isInteger.js
var require_Number_isInteger = __commonJS({
  "node_modules/pixi.js/lib/polyfill/Number.isInteger.js"() {
    "use strict";
    if (!Number.isInteger) {
      Number.isInteger = function numberIsInteger(value) {
        return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
      };
    }
  }
});

// node_modules/pixi.js/lib/polyfill/index.js
var require_polyfill = __commonJS({
  "node_modules/pixi.js/lib/polyfill/index.js"() {
    "use strict";
    if (global === void 0) {
      global = window;
    }
    var global;
    require_Object_assign();
    require_requestAnimationFrame();
    require_Math_sign();
    require_Number_isInteger();
    if (!window.ArrayBuffer) {
      window.ArrayBuffer = Array;
    }
    if (!window.Float32Array) {
      window.Float32Array = Array;
    }
    if (!window.Uint32Array) {
      window.Uint32Array = Array;
    }
    if (!window.Uint16Array) {
      window.Uint16Array = Array;
    }
  }
});

// node_modules/pixi.js/lib/core/const.js
var require_const = __commonJS({
  "node_modules/pixi.js/lib/core/const.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var VERSION = exports.VERSION = "4.8.9";
    var PI_2 = exports.PI_2 = Math.PI * 2;
    var RAD_TO_DEG = exports.RAD_TO_DEG = 180 / Math.PI;
    var DEG_TO_RAD = exports.DEG_TO_RAD = Math.PI / 180;
    var RENDERER_TYPE = exports.RENDERER_TYPE = {
      UNKNOWN: 0,
      WEBGL: 1,
      CANVAS: 2
    };
    var BLEND_MODES = exports.BLEND_MODES = {
      NORMAL: 0,
      ADD: 1,
      MULTIPLY: 2,
      SCREEN: 3,
      OVERLAY: 4,
      DARKEN: 5,
      LIGHTEN: 6,
      COLOR_DODGE: 7,
      COLOR_BURN: 8,
      HARD_LIGHT: 9,
      SOFT_LIGHT: 10,
      DIFFERENCE: 11,
      EXCLUSION: 12,
      HUE: 13,
      SATURATION: 14,
      COLOR: 15,
      LUMINOSITY: 16,
      NORMAL_NPM: 17,
      ADD_NPM: 18,
      SCREEN_NPM: 19
    };
    var DRAW_MODES = exports.DRAW_MODES = {
      POINTS: 0,
      LINES: 1,
      LINE_LOOP: 2,
      LINE_STRIP: 3,
      TRIANGLES: 4,
      TRIANGLE_STRIP: 5,
      TRIANGLE_FAN: 6
    };
    var SCALE_MODES = exports.SCALE_MODES = {
      LINEAR: 0,
      NEAREST: 1
    };
    var WRAP_MODES = exports.WRAP_MODES = {
      CLAMP: 0,
      REPEAT: 1,
      MIRRORED_REPEAT: 2
    };
    var GC_MODES = exports.GC_MODES = {
      AUTO: 0,
      MANUAL: 1
    };
    var URL_FILE_EXTENSION = exports.URL_FILE_EXTENSION = /\.(\w{3,4})(?:$|\?|#)/i;
    var DATA_URI = exports.DATA_URI = /^\s*data:(?:([\w-]+)\/([\w+.-]+))?(?:;charset=([\w-]+))?(?:;(base64))?,(.*)/i;
    var SVG_SIZE = exports.SVG_SIZE = /<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i;
    var SHAPES = exports.SHAPES = {
      POLY: 0,
      RECT: 1,
      CIRC: 2,
      ELIP: 3,
      RREC: 4
    };
    var PRECISION = exports.PRECISION = {
      LOW: "lowp",
      MEDIUM: "mediump",
      HIGH: "highp"
    };
    var TRANSFORM_MODE = exports.TRANSFORM_MODE = {
      STATIC: 0,
      DYNAMIC: 1
    };
    var TEXT_GRADIENT = exports.TEXT_GRADIENT = {
      LINEAR_VERTICAL: 0,
      LINEAR_HORIZONTAL: 1
    };
    var UPDATE_PRIORITY = exports.UPDATE_PRIORITY = {
      INTERACTION: 50,
      HIGH: 25,
      NORMAL: 0,
      LOW: -25,
      UTILITY: -50
    };
  }
});

// node_modules/pixi.js/lib/core/math/Point.js
var require_Point = __commonJS({
  "node_modules/pixi.js/lib/core/math/Point.js"(exports) {
    "use strict";
    exports.__esModule = true;
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var Point = function() {
      function Point2() {
        var x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        _classCallCheck(this, Point2);
        this.x = x;
        this.y = y;
      }
      Point2.prototype.clone = function clone() {
        return new Point2(this.x, this.y);
      };
      Point2.prototype.copy = function copy(p) {
        this.set(p.x, p.y);
      };
      Point2.prototype.equals = function equals(p) {
        return p.x === this.x && p.y === this.y;
      };
      Point2.prototype.set = function set(x, y) {
        this.x = x || 0;
        this.y = y || (y !== 0 ? this.x : 0);
      };
      return Point2;
    }();
    exports.default = Point;
  }
});

// node_modules/pixi.js/lib/core/math/ObservablePoint.js
var require_ObservablePoint = __commonJS({
  "node_modules/pixi.js/lib/core/math/ObservablePoint.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var ObservablePoint = function() {
      function ObservablePoint2(cb, scope) {
        var x = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
        var y = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
        _classCallCheck(this, ObservablePoint2);
        this._x = x;
        this._y = y;
        this.cb = cb;
        this.scope = scope;
      }
      ObservablePoint2.prototype.clone = function clone() {
        var cb = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
        var scope = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        var _cb = cb || this.cb;
        var _scope = scope || this.scope;
        return new ObservablePoint2(_cb, _scope, this._x, this._y);
      };
      ObservablePoint2.prototype.set = function set(x, y) {
        var _x = x || 0;
        var _y = y || (y !== 0 ? _x : 0);
        if (this._x !== _x || this._y !== _y) {
          this._x = _x;
          this._y = _y;
          this.cb.call(this.scope);
        }
      };
      ObservablePoint2.prototype.copy = function copy(point) {
        if (this._x !== point.x || this._y !== point.y) {
          this._x = point.x;
          this._y = point.y;
          this.cb.call(this.scope);
        }
      };
      ObservablePoint2.prototype.equals = function equals(p) {
        return p.x === this._x && p.y === this._y;
      };
      _createClass(ObservablePoint2, [{
        key: "x",
        get: function get() {
          return this._x;
        },
        set: function set(value) {
          if (this._x !== value) {
            this._x = value;
            this.cb.call(this.scope);
          }
        }
        /**
         * The position of the displayObject on the x axis relative to the local coordinates of the parent.
         *
         * @member {number}
         */
      }, {
        key: "y",
        get: function get() {
          return this._y;
        },
        set: function set(value) {
          if (this._y !== value) {
            this._y = value;
            this.cb.call(this.scope);
          }
        }
      }]);
      return ObservablePoint2;
    }();
    exports.default = ObservablePoint;
  }
});

// node_modules/pixi.js/lib/core/math/Matrix.js
var require_Matrix = __commonJS({
  "node_modules/pixi.js/lib/core/math/Matrix.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _Point = require_Point();
    var _Point2 = _interopRequireDefault(_Point);
    var _const = require_const();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var Matrix = function() {
      function Matrix2() {
        var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
        var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        var c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
        var d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
        var tx = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
        var ty = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
        _classCallCheck(this, Matrix2);
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.tx = tx;
        this.ty = ty;
        this.array = null;
      }
      Matrix2.prototype.fromArray = function fromArray(array) {
        this.a = array[0];
        this.b = array[1];
        this.c = array[3];
        this.d = array[4];
        this.tx = array[2];
        this.ty = array[5];
      };
      Matrix2.prototype.set = function set(a, b, c, d, tx, ty) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.tx = tx;
        this.ty = ty;
        return this;
      };
      Matrix2.prototype.toArray = function toArray(transpose, out) {
        if (!this.array) {
          this.array = new Float32Array(9);
        }
        var array = out || this.array;
        if (transpose) {
          array[0] = this.a;
          array[1] = this.b;
          array[2] = 0;
          array[3] = this.c;
          array[4] = this.d;
          array[5] = 0;
          array[6] = this.tx;
          array[7] = this.ty;
          array[8] = 1;
        } else {
          array[0] = this.a;
          array[1] = this.c;
          array[2] = this.tx;
          array[3] = this.b;
          array[4] = this.d;
          array[5] = this.ty;
          array[6] = 0;
          array[7] = 0;
          array[8] = 1;
        }
        return array;
      };
      Matrix2.prototype.apply = function apply(pos, newPos) {
        newPos = newPos || new _Point2.default();
        var x = pos.x;
        var y = pos.y;
        newPos.x = this.a * x + this.c * y + this.tx;
        newPos.y = this.b * x + this.d * y + this.ty;
        return newPos;
      };
      Matrix2.prototype.applyInverse = function applyInverse(pos, newPos) {
        newPos = newPos || new _Point2.default();
        var id = 1 / (this.a * this.d + this.c * -this.b);
        var x = pos.x;
        var y = pos.y;
        newPos.x = this.d * id * x + -this.c * id * y + (this.ty * this.c - this.tx * this.d) * id;
        newPos.y = this.a * id * y + -this.b * id * x + (-this.ty * this.a + this.tx * this.b) * id;
        return newPos;
      };
      Matrix2.prototype.translate = function translate(x, y) {
        this.tx += x;
        this.ty += y;
        return this;
      };
      Matrix2.prototype.scale = function scale(x, y) {
        this.a *= x;
        this.d *= y;
        this.c *= x;
        this.b *= y;
        this.tx *= x;
        this.ty *= y;
        return this;
      };
      Matrix2.prototype.rotate = function rotate(angle) {
        var cos = Math.cos(angle);
        var sin = Math.sin(angle);
        var a1 = this.a;
        var c1 = this.c;
        var tx1 = this.tx;
        this.a = a1 * cos - this.b * sin;
        this.b = a1 * sin + this.b * cos;
        this.c = c1 * cos - this.d * sin;
        this.d = c1 * sin + this.d * cos;
        this.tx = tx1 * cos - this.ty * sin;
        this.ty = tx1 * sin + this.ty * cos;
        return this;
      };
      Matrix2.prototype.append = function append(matrix) {
        var a1 = this.a;
        var b1 = this.b;
        var c1 = this.c;
        var d1 = this.d;
        this.a = matrix.a * a1 + matrix.b * c1;
        this.b = matrix.a * b1 + matrix.b * d1;
        this.c = matrix.c * a1 + matrix.d * c1;
        this.d = matrix.c * b1 + matrix.d * d1;
        this.tx = matrix.tx * a1 + matrix.ty * c1 + this.tx;
        this.ty = matrix.tx * b1 + matrix.ty * d1 + this.ty;
        return this;
      };
      Matrix2.prototype.setTransform = function setTransform(x, y, pivotX, pivotY, scaleX, scaleY, rotation, skewX, skewY) {
        this.a = Math.cos(rotation + skewY) * scaleX;
        this.b = Math.sin(rotation + skewY) * scaleX;
        this.c = -Math.sin(rotation - skewX) * scaleY;
        this.d = Math.cos(rotation - skewX) * scaleY;
        this.tx = x - (pivotX * this.a + pivotY * this.c);
        this.ty = y - (pivotX * this.b + pivotY * this.d);
        return this;
      };
      Matrix2.prototype.prepend = function prepend(matrix) {
        var tx1 = this.tx;
        if (matrix.a !== 1 || matrix.b !== 0 || matrix.c !== 0 || matrix.d !== 1) {
          var a1 = this.a;
          var c1 = this.c;
          this.a = a1 * matrix.a + this.b * matrix.c;
          this.b = a1 * matrix.b + this.b * matrix.d;
          this.c = c1 * matrix.a + this.d * matrix.c;
          this.d = c1 * matrix.b + this.d * matrix.d;
        }
        this.tx = tx1 * matrix.a + this.ty * matrix.c + matrix.tx;
        this.ty = tx1 * matrix.b + this.ty * matrix.d + matrix.ty;
        return this;
      };
      Matrix2.prototype.decompose = function decompose(transform) {
        var a = this.a;
        var b = this.b;
        var c = this.c;
        var d = this.d;
        var skewX = -Math.atan2(-c, d);
        var skewY = Math.atan2(b, a);
        var delta = Math.abs(skewX + skewY);
        if (delta < 1e-5 || Math.abs(_const.PI_2 - delta) < 1e-5) {
          transform.rotation = skewY;
          transform.skew.x = transform.skew.y = 0;
        } else {
          transform.rotation = 0;
          transform.skew.x = skewX;
          transform.skew.y = skewY;
        }
        transform.scale.x = Math.sqrt(a * a + b * b);
        transform.scale.y = Math.sqrt(c * c + d * d);
        transform.position.x = this.tx;
        transform.position.y = this.ty;
        return transform;
      };
      Matrix2.prototype.invert = function invert() {
        var a1 = this.a;
        var b1 = this.b;
        var c1 = this.c;
        var d1 = this.d;
        var tx1 = this.tx;
        var n = a1 * d1 - b1 * c1;
        this.a = d1 / n;
        this.b = -b1 / n;
        this.c = -c1 / n;
        this.d = a1 / n;
        this.tx = (c1 * this.ty - d1 * tx1) / n;
        this.ty = -(a1 * this.ty - b1 * tx1) / n;
        return this;
      };
      Matrix2.prototype.identity = function identity() {
        this.a = 1;
        this.b = 0;
        this.c = 0;
        this.d = 1;
        this.tx = 0;
        this.ty = 0;
        return this;
      };
      Matrix2.prototype.clone = function clone() {
        var matrix = new Matrix2();
        matrix.a = this.a;
        matrix.b = this.b;
        matrix.c = this.c;
        matrix.d = this.d;
        matrix.tx = this.tx;
        matrix.ty = this.ty;
        return matrix;
      };
      Matrix2.prototype.copy = function copy(matrix) {
        matrix.a = this.a;
        matrix.b = this.b;
        matrix.c = this.c;
        matrix.d = this.d;
        matrix.tx = this.tx;
        matrix.ty = this.ty;
        return matrix;
      };
      _createClass(Matrix2, null, [{
        key: "IDENTITY",
        get: function get() {
          return new Matrix2();
        }
        /**
         * A temp matrix
         *
         * @static
         * @const
         */
      }, {
        key: "TEMP_MATRIX",
        get: function get() {
          return new Matrix2();
        }
      }]);
      return Matrix2;
    }();
    exports.default = Matrix;
  }
});

// node_modules/pixi.js/lib/core/math/GroupD8.js
var require_GroupD8 = __commonJS({
  "node_modules/pixi.js/lib/core/math/GroupD8.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _Matrix = require_Matrix();
    var _Matrix2 = _interopRequireDefault(_Matrix);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var ux = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1];
    var uy = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1];
    var vx = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1];
    var vy = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1];
    var tempMatrices = [];
    var mul = [];
    function signum(x) {
      if (x < 0) {
        return -1;
      }
      if (x > 0) {
        return 1;
      }
      return 0;
    }
    function init() {
      for (var i = 0; i < 16; i++) {
        var row = [];
        mul.push(row);
        for (var j = 0; j < 16; j++) {
          var _ux = signum(ux[i] * ux[j] + vx[i] * uy[j]);
          var _uy = signum(uy[i] * ux[j] + vy[i] * uy[j]);
          var _vx = signum(ux[i] * vx[j] + vx[i] * vy[j]);
          var _vy = signum(uy[i] * vx[j] + vy[i] * vy[j]);
          for (var k = 0; k < 16; k++) {
            if (ux[k] === _ux && uy[k] === _uy && vx[k] === _vx && vy[k] === _vy) {
              row.push(k);
              break;
            }
          }
        }
      }
      for (var _i = 0; _i < 16; _i++) {
        var mat = new _Matrix2.default();
        mat.set(ux[_i], uy[_i], vx[_i], vy[_i], 0, 0);
        tempMatrices.push(mat);
      }
    }
    init();
    var GroupD8 = {
      E: 0,
      SE: 1,
      S: 2,
      SW: 3,
      W: 4,
      NW: 5,
      N: 6,
      NE: 7,
      MIRROR_VERTICAL: 8,
      MIRROR_HORIZONTAL: 12,
      uX: function uX(ind) {
        return ux[ind];
      },
      uY: function uY(ind) {
        return uy[ind];
      },
      vX: function vX(ind) {
        return vx[ind];
      },
      vY: function vY(ind) {
        return vy[ind];
      },
      inv: function inv(rotation) {
        if (rotation & 8) {
          return rotation & 15;
        }
        return -rotation & 7;
      },
      add: function add(rotationSecond, rotationFirst) {
        return mul[rotationSecond][rotationFirst];
      },
      sub: function sub(rotationSecond, rotationFirst) {
        return mul[rotationSecond][GroupD8.inv(rotationFirst)];
      },
      /**
       * Adds 180 degrees to rotation. Commutative operation.
       *
       * @memberof PIXI.GroupD8
       * @param {number} rotation - The number to rotate.
       * @returns {number} rotated number
       */
      rotate180: function rotate180(rotation) {
        return rotation ^ 4;
      },
      /**
       * Direction of main vector can be horizontal, vertical or diagonal.
       * Some objects work with vertical directions different.
       *
       * @memberof PIXI.GroupD8
       * @param {number} rotation - The number to check.
       * @returns {boolean} Whether or not the direction is vertical
       */
      isVertical: function isVertical(rotation) {
        return (rotation & 3) === 2;
      },
      /**
       * @memberof PIXI.GroupD8
       * @param {number} dx - TODO
       * @param {number} dy - TODO
       *
       * @return {number} TODO
       */
      byDirection: function byDirection(dx, dy) {
        if (Math.abs(dx) * 2 <= Math.abs(dy)) {
          if (dy >= 0) {
            return GroupD8.S;
          }
          return GroupD8.N;
        } else if (Math.abs(dy) * 2 <= Math.abs(dx)) {
          if (dx > 0) {
            return GroupD8.E;
          }
          return GroupD8.W;
        } else if (dy > 0) {
          if (dx > 0) {
            return GroupD8.SE;
          }
          return GroupD8.SW;
        } else if (dx > 0) {
          return GroupD8.NE;
        }
        return GroupD8.NW;
      },
      /**
       * Helps sprite to compensate texture packer rotation.
       *
       * @memberof PIXI.GroupD8
       * @param {PIXI.Matrix} matrix - sprite world matrix
       * @param {number} rotation - The rotation factor to use.
       * @param {number} tx - sprite anchoring
       * @param {number} ty - sprite anchoring
       */
      matrixAppendRotationInv: function matrixAppendRotationInv(matrix, rotation) {
        var tx = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
        var ty = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
        var mat = tempMatrices[GroupD8.inv(rotation)];
        mat.tx = tx;
        mat.ty = ty;
        matrix.append(mat);
      }
    };
    exports.default = GroupD8;
  }
});

// node_modules/pixi.js/lib/core/math/shapes/Rectangle.js
var require_Rectangle = __commonJS({
  "node_modules/pixi.js/lib/core/math/shapes/Rectangle.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _const = require_const();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var Rectangle = function() {
      function Rectangle2() {
        var x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        var width = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
        var height = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
        _classCallCheck(this, Rectangle2);
        this.x = Number(x);
        this.y = Number(y);
        this.width = Number(width);
        this.height = Number(height);
        this.type = _const.SHAPES.RECT;
      }
      Rectangle2.prototype.clone = function clone() {
        return new Rectangle2(this.x, this.y, this.width, this.height);
      };
      Rectangle2.prototype.copy = function copy(rectangle) {
        this.x = rectangle.x;
        this.y = rectangle.y;
        this.width = rectangle.width;
        this.height = rectangle.height;
        return this;
      };
      Rectangle2.prototype.contains = function contains(x, y) {
        if (this.width <= 0 || this.height <= 0) {
          return false;
        }
        if (x >= this.x && x < this.x + this.width) {
          if (y >= this.y && y < this.y + this.height) {
            return true;
          }
        }
        return false;
      };
      Rectangle2.prototype.pad = function pad(paddingX, paddingY) {
        paddingX = paddingX || 0;
        paddingY = paddingY || (paddingY !== 0 ? paddingX : 0);
        this.x -= paddingX;
        this.y -= paddingY;
        this.width += paddingX * 2;
        this.height += paddingY * 2;
      };
      Rectangle2.prototype.fit = function fit(rectangle) {
        var x1 = Math.max(this.x, rectangle.x);
        var x2 = Math.min(this.x + this.width, rectangle.x + rectangle.width);
        var y1 = Math.max(this.y, rectangle.y);
        var y2 = Math.min(this.y + this.height, rectangle.y + rectangle.height);
        this.x = x1;
        this.width = Math.max(x2 - x1, 0);
        this.y = y1;
        this.height = Math.max(y2 - y1, 0);
      };
      Rectangle2.prototype.enlarge = function enlarge(rectangle) {
        var x1 = Math.min(this.x, rectangle.x);
        var x2 = Math.max(this.x + this.width, rectangle.x + rectangle.width);
        var y1 = Math.min(this.y, rectangle.y);
        var y2 = Math.max(this.y + this.height, rectangle.y + rectangle.height);
        this.x = x1;
        this.width = x2 - x1;
        this.y = y1;
        this.height = y2 - y1;
      };
      Rectangle2.prototype.ceil = function ceil() {
        var resolution = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
        var eps = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e-3;
        var x2 = Math.ceil((this.x + this.width - eps) * resolution) / resolution;
        var y2 = Math.ceil((this.y + this.height - eps) * resolution) / resolution;
        this.x = Math.floor((this.x + eps) * resolution) / resolution;
        this.y = Math.floor((this.y + eps) * resolution) / resolution;
        this.width = x2 - this.x;
        this.height = y2 - this.y;
      };
      _createClass(Rectangle2, [{
        key: "left",
        get: function get() {
          return this.x;
        }
        /**
         * returns the right edge of the rectangle
         *
         * @member {number}
         */
      }, {
        key: "right",
        get: function get() {
          return this.x + this.width;
        }
        /**
         * returns the top edge of the rectangle
         *
         * @member {number}
         */
      }, {
        key: "top",
        get: function get() {
          return this.y;
        }
        /**
         * returns the bottom edge of the rectangle
         *
         * @member {number}
         */
      }, {
        key: "bottom",
        get: function get() {
          return this.y + this.height;
        }
        /**
         * A constant empty rectangle.
         *
         * @static
         * @constant
         */
      }], [{
        key: "EMPTY",
        get: function get() {
          return new Rectangle2(0, 0, 0, 0);
        }
      }]);
      return Rectangle2;
    }();
    exports.default = Rectangle;
  }
});

// node_modules/pixi.js/lib/core/math/shapes/Circle.js
var require_Circle = __commonJS({
  "node_modules/pixi.js/lib/core/math/shapes/Circle.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _Rectangle = require_Rectangle();
    var _Rectangle2 = _interopRequireDefault(_Rectangle);
    var _const = require_const();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var Circle = function() {
      function Circle2() {
        var x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        var radius = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
        _classCallCheck(this, Circle2);
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.type = _const.SHAPES.CIRC;
      }
      Circle2.prototype.clone = function clone() {
        return new Circle2(this.x, this.y, this.radius);
      };
      Circle2.prototype.contains = function contains(x, y) {
        if (this.radius <= 0) {
          return false;
        }
        var r2 = this.radius * this.radius;
        var dx = this.x - x;
        var dy = this.y - y;
        dx *= dx;
        dy *= dy;
        return dx + dy <= r2;
      };
      Circle2.prototype.getBounds = function getBounds() {
        return new _Rectangle2.default(this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
      };
      return Circle2;
    }();
    exports.default = Circle;
  }
});

// node_modules/pixi.js/lib/core/math/shapes/Ellipse.js
var require_Ellipse = __commonJS({
  "node_modules/pixi.js/lib/core/math/shapes/Ellipse.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _Rectangle = require_Rectangle();
    var _Rectangle2 = _interopRequireDefault(_Rectangle);
    var _const = require_const();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var Ellipse = function() {
      function Ellipse2() {
        var x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        var halfWidth = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
        var halfHeight = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
        _classCallCheck(this, Ellipse2);
        this.x = x;
        this.y = y;
        this.width = halfWidth;
        this.height = halfHeight;
        this.type = _const.SHAPES.ELIP;
      }
      Ellipse2.prototype.clone = function clone() {
        return new Ellipse2(this.x, this.y, this.width, this.height);
      };
      Ellipse2.prototype.contains = function contains(x, y) {
        if (this.width <= 0 || this.height <= 0) {
          return false;
        }
        var normx = (x - this.x) / this.width;
        var normy = (y - this.y) / this.height;
        normx *= normx;
        normy *= normy;
        return normx + normy <= 1;
      };
      Ellipse2.prototype.getBounds = function getBounds() {
        return new _Rectangle2.default(this.x - this.width, this.y - this.height, this.width, this.height);
      };
      return Ellipse2;
    }();
    exports.default = Ellipse;
  }
});

// node_modules/pixi.js/lib/core/math/shapes/Polygon.js
var require_Polygon = __commonJS({
  "node_modules/pixi.js/lib/core/math/shapes/Polygon.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _Point = require_Point();
    var _Point2 = _interopRequireDefault(_Point);
    var _const = require_const();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var Polygon = function() {
      function Polygon2() {
        for (var _len = arguments.length, points = Array(_len), _key = 0; _key < _len; _key++) {
          points[_key] = arguments[_key];
        }
        _classCallCheck(this, Polygon2);
        if (Array.isArray(points[0])) {
          points = points[0];
        }
        if (points[0] instanceof _Point2.default) {
          var p = [];
          for (var i = 0, il = points.length; i < il; i++) {
            p.push(points[i].x, points[i].y);
          }
          points = p;
        }
        this.closed = true;
        this.points = points;
        this.type = _const.SHAPES.POLY;
      }
      Polygon2.prototype.clone = function clone() {
        return new Polygon2(this.points.slice());
      };
      Polygon2.prototype.close = function close() {
        var points = this.points;
        if (points[0] !== points[points.length - 2] || points[1] !== points[points.length - 1]) {
          points.push(points[0], points[1]);
        }
      };
      Polygon2.prototype.contains = function contains(x, y) {
        var inside = false;
        var length = this.points.length / 2;
        for (var i = 0, j = length - 1; i < length; j = i++) {
          var xi = this.points[i * 2];
          var yi = this.points[i * 2 + 1];
          var xj = this.points[j * 2];
          var yj = this.points[j * 2 + 1];
          var intersect = yi > y !== yj > y && x < (xj - xi) * ((y - yi) / (yj - yi)) + xi;
          if (intersect) {
            inside = !inside;
          }
        }
        return inside;
      };
      return Polygon2;
    }();
    exports.default = Polygon;
  }
});

// node_modules/pixi.js/lib/core/math/shapes/RoundedRectangle.js
var require_RoundedRectangle = __commonJS({
  "node_modules/pixi.js/lib/core/math/shapes/RoundedRectangle.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _const = require_const();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var RoundedRectangle = function() {
      function RoundedRectangle2() {
        var x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        var width = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
        var height = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
        var radius = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 20;
        _classCallCheck(this, RoundedRectangle2);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.radius = radius;
        this.type = _const.SHAPES.RREC;
      }
      RoundedRectangle2.prototype.clone = function clone() {
        return new RoundedRectangle2(this.x, this.y, this.width, this.height, this.radius);
      };
      RoundedRectangle2.prototype.contains = function contains(x, y) {
        if (this.width <= 0 || this.height <= 0) {
          return false;
        }
        if (x >= this.x && x <= this.x + this.width) {
          if (y >= this.y && y <= this.y + this.height) {
            if (y >= this.y + this.radius && y <= this.y + this.height - this.radius || x >= this.x + this.radius && x <= this.x + this.width - this.radius) {
              return true;
            }
            var dx = x - (this.x + this.radius);
            var dy = y - (this.y + this.radius);
            var radius2 = this.radius * this.radius;
            if (dx * dx + dy * dy <= radius2) {
              return true;
            }
            dx = x - (this.x + this.width - this.radius);
            if (dx * dx + dy * dy <= radius2) {
              return true;
            }
            dy = y - (this.y + this.height - this.radius);
            if (dx * dx + dy * dy <= radius2) {
              return true;
            }
            dx = x - (this.x + this.radius);
            if (dx * dx + dy * dy <= radius2) {
              return true;
            }
          }
        }
        return false;
      };
      return RoundedRectangle2;
    }();
    exports.default = RoundedRectangle;
  }
});

// node_modules/pixi.js/lib/core/math/index.js
var require_math = __commonJS({
  "node_modules/pixi.js/lib/core/math/index.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _Point = require_Point();
    Object.defineProperty(exports, "Point", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_Point).default;
      }
    });
    var _ObservablePoint = require_ObservablePoint();
    Object.defineProperty(exports, "ObservablePoint", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_ObservablePoint).default;
      }
    });
    var _Matrix = require_Matrix();
    Object.defineProperty(exports, "Matrix", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_Matrix).default;
      }
    });
    var _GroupD = require_GroupD8();
    Object.defineProperty(exports, "GroupD8", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_GroupD).default;
      }
    });
    var _Circle = require_Circle();
    Object.defineProperty(exports, "Circle", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_Circle).default;
      }
    });
    var _Ellipse = require_Ellipse();
    Object.defineProperty(exports, "Ellipse", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_Ellipse).default;
      }
    });
    var _Polygon = require_Polygon();
    Object.defineProperty(exports, "Polygon", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_Polygon).default;
      }
    });
    var _Rectangle = require_Rectangle();
    Object.defineProperty(exports, "Rectangle", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_Rectangle).default;
      }
    });
    var _RoundedRectangle = require_RoundedRectangle();
    Object.defineProperty(exports, "RoundedRectangle", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_RoundedRectangle).default;
      }
    });
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
  }
});

// node_modules/pixi-gl-core/src/createContext.js
var require_createContext = __commonJS({
  "node_modules/pixi-gl-core/src/createContext.js"(exports, module) {
    var createContext = function(canvas, options) {
      var gl2 = canvas.getContext("webgl", options) || canvas.getContext("experimental-webgl", options);
      if (!gl2) {
        throw new Error("This browser does not support webGL. Try using the canvas renderer");
      }
      return gl2;
    };
    module.exports = createContext;
  }
});

// node_modules/pixi-gl-core/src/setVertexAttribArrays.js
var require_setVertexAttribArrays = __commonJS({
  "node_modules/pixi-gl-core/src/setVertexAttribArrays.js"(exports, module) {
    var setVertexAttribArrays = function(gl2, attribs, state) {
      var i;
      if (state) {
        var tempAttribState = state.tempAttribState, attribState = state.attribState;
        for (i = 0; i < tempAttribState.length; i++) {
          tempAttribState[i] = false;
        }
        for (i = 0; i < attribs.length; i++) {
          tempAttribState[attribs[i].attribute.location] = true;
        }
        for (i = 0; i < attribState.length; i++) {
          if (attribState[i] !== tempAttribState[i]) {
            attribState[i] = tempAttribState[i];
            if (state.attribState[i]) {
              gl2.enableVertexAttribArray(i);
            } else {
              gl2.disableVertexAttribArray(i);
            }
          }
        }
      } else {
        for (i = 0; i < attribs.length; i++) {
          var attrib = attribs[i];
          gl2.enableVertexAttribArray(attrib.attribute.location);
        }
      }
    };
    module.exports = setVertexAttribArrays;
  }
});

// node_modules/pixi-gl-core/src/GLBuffer.js
var require_GLBuffer = __commonJS({
  "node_modules/pixi-gl-core/src/GLBuffer.js"(exports, module) {
    var EMPTY_ARRAY_BUFFER = new ArrayBuffer(0);
    var Buffer = function(gl2, type, data, drawType) {
      this.gl = gl2;
      this.buffer = gl2.createBuffer();
      this.type = type || gl2.ARRAY_BUFFER;
      this.drawType = drawType || gl2.STATIC_DRAW;
      this.data = EMPTY_ARRAY_BUFFER;
      if (data) {
        this.upload(data);
      }
      this._updateID = 0;
    };
    Buffer.prototype.upload = function(data, offset, dontBind) {
      if (!dontBind)
        this.bind();
      var gl2 = this.gl;
      data = data || this.data;
      offset = offset || 0;
      if (this.data.byteLength >= data.byteLength) {
        gl2.bufferSubData(this.type, offset, data);
      } else {
        gl2.bufferData(this.type, data, this.drawType);
      }
      this.data = data;
    };
    Buffer.prototype.bind = function() {
      var gl2 = this.gl;
      gl2.bindBuffer(this.type, this.buffer);
    };
    Buffer.createVertexBuffer = function(gl2, data, drawType) {
      return new Buffer(gl2, gl2.ARRAY_BUFFER, data, drawType);
    };
    Buffer.createIndexBuffer = function(gl2, data, drawType) {
      return new Buffer(gl2, gl2.ELEMENT_ARRAY_BUFFER, data, drawType);
    };
    Buffer.create = function(gl2, type, data, drawType) {
      return new Buffer(gl2, type, data, drawType);
    };
    Buffer.prototype.destroy = function() {
      this.gl.deleteBuffer(this.buffer);
    };
    module.exports = Buffer;
  }
});

// node_modules/pixi-gl-core/src/GLTexture.js
var require_GLTexture = __commonJS({
  "node_modules/pixi-gl-core/src/GLTexture.js"(exports, module) {
    var Texture = function(gl2, width, height, format, type) {
      this.gl = gl2;
      this.texture = gl2.createTexture();
      this.mipmap = false;
      this.premultiplyAlpha = false;
      this.width = width || -1;
      this.height = height || -1;
      this.format = format || gl2.RGBA;
      this.type = type || gl2.UNSIGNED_BYTE;
    };
    Texture.prototype.upload = function(source) {
      this.bind();
      var gl2 = this.gl;
      gl2.pixelStorei(gl2.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha);
      var newWidth = source.videoWidth || source.width;
      var newHeight = source.videoHeight || source.height;
      if (newHeight !== this.height || newWidth !== this.width) {
        gl2.texImage2D(gl2.TEXTURE_2D, 0, this.format, this.format, this.type, source);
      } else {
        gl2.texSubImage2D(gl2.TEXTURE_2D, 0, 0, 0, this.format, this.type, source);
      }
      this.width = newWidth;
      this.height = newHeight;
    };
    var FLOATING_POINT_AVAILABLE = false;
    Texture.prototype.uploadData = function(data, width, height) {
      this.bind();
      var gl2 = this.gl;
      if (data instanceof Float32Array) {
        if (!FLOATING_POINT_AVAILABLE) {
          var ext = gl2.getExtension("OES_texture_float");
          if (ext) {
            FLOATING_POINT_AVAILABLE = true;
          } else {
            throw new Error("floating point textures not available");
          }
        }
        this.type = gl2.FLOAT;
      } else {
        this.type = this.type || gl2.UNSIGNED_BYTE;
      }
      gl2.pixelStorei(gl2.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha);
      if (width !== this.width || height !== this.height) {
        gl2.texImage2D(gl2.TEXTURE_2D, 0, this.format, width, height, 0, this.format, this.type, data || null);
      } else {
        gl2.texSubImage2D(gl2.TEXTURE_2D, 0, 0, 0, width, height, this.format, this.type, data || null);
      }
      this.width = width;
      this.height = height;
    };
    Texture.prototype.bind = function(location) {
      var gl2 = this.gl;
      if (location !== void 0) {
        gl2.activeTexture(gl2.TEXTURE0 + location);
      }
      gl2.bindTexture(gl2.TEXTURE_2D, this.texture);
    };
    Texture.prototype.unbind = function() {
      var gl2 = this.gl;
      gl2.bindTexture(gl2.TEXTURE_2D, null);
    };
    Texture.prototype.minFilter = function(linear) {
      var gl2 = this.gl;
      this.bind();
      if (this.mipmap) {
        gl2.texParameteri(gl2.TEXTURE_2D, gl2.TEXTURE_MIN_FILTER, linear ? gl2.LINEAR_MIPMAP_LINEAR : gl2.NEAREST_MIPMAP_NEAREST);
      } else {
        gl2.texParameteri(gl2.TEXTURE_2D, gl2.TEXTURE_MIN_FILTER, linear ? gl2.LINEAR : gl2.NEAREST);
      }
    };
    Texture.prototype.magFilter = function(linear) {
      var gl2 = this.gl;
      this.bind();
      gl2.texParameteri(gl2.TEXTURE_2D, gl2.TEXTURE_MAG_FILTER, linear ? gl2.LINEAR : gl2.NEAREST);
    };
    Texture.prototype.enableMipmap = function() {
      var gl2 = this.gl;
      this.bind();
      this.mipmap = true;
      gl2.generateMipmap(gl2.TEXTURE_2D);
    };
    Texture.prototype.enableLinearScaling = function() {
      this.minFilter(true);
      this.magFilter(true);
    };
    Texture.prototype.enableNearestScaling = function() {
      this.minFilter(false);
      this.magFilter(false);
    };
    Texture.prototype.enableWrapClamp = function() {
      var gl2 = this.gl;
      this.bind();
      gl2.texParameteri(gl2.TEXTURE_2D, gl2.TEXTURE_WRAP_S, gl2.CLAMP_TO_EDGE);
      gl2.texParameteri(gl2.TEXTURE_2D, gl2.TEXTURE_WRAP_T, gl2.CLAMP_TO_EDGE);
    };
    Texture.prototype.enableWrapRepeat = function() {
      var gl2 = this.gl;
      this.bind();
      gl2.texParameteri(gl2.TEXTURE_2D, gl2.TEXTURE_WRAP_S, gl2.REPEAT);
      gl2.texParameteri(gl2.TEXTURE_2D, gl2.TEXTURE_WRAP_T, gl2.REPEAT);
    };
    Texture.prototype.enableWrapMirrorRepeat = function() {
      var gl2 = this.gl;
      this.bind();
      gl2.texParameteri(gl2.TEXTURE_2D, gl2.TEXTURE_WRAP_S, gl2.MIRRORED_REPEAT);
      gl2.texParameteri(gl2.TEXTURE_2D, gl2.TEXTURE_WRAP_T, gl2.MIRRORED_REPEAT);
    };
    Texture.prototype.destroy = function() {
      var gl2 = this.gl;
      gl2.deleteTexture(this.texture);
    };
    Texture.fromSource = function(gl2, source, premultiplyAlpha) {
      var texture = new Texture(gl2);
      texture.premultiplyAlpha = premultiplyAlpha || false;
      texture.upload(source);
      return texture;
    };
    Texture.fromData = function(gl2, data, width, height) {
      var texture = new Texture(gl2);
      texture.uploadData(data, width, height);
      return texture;
    };
    module.exports = Texture;
  }
});

// node_modules/pixi-gl-core/src/GLFramebuffer.js
var require_GLFramebuffer = __commonJS({
  "node_modules/pixi-gl-core/src/GLFramebuffer.js"(exports, module) {
    var Texture = require_GLTexture();
    var Framebuffer = function(gl2, width, height) {
      this.gl = gl2;
      this.framebuffer = gl2.createFramebuffer();
      this.stencil = null;
      this.texture = null;
      this.width = width || 100;
      this.height = height || 100;
    };
    Framebuffer.prototype.enableTexture = function(texture) {
      var gl2 = this.gl;
      this.texture = texture || new Texture(gl2);
      this.texture.bind();
      this.bind();
      gl2.framebufferTexture2D(gl2.FRAMEBUFFER, gl2.COLOR_ATTACHMENT0, gl2.TEXTURE_2D, this.texture.texture, 0);
    };
    Framebuffer.prototype.enableStencil = function() {
      if (this.stencil)
        return;
      var gl2 = this.gl;
      this.stencil = gl2.createRenderbuffer();
      gl2.bindRenderbuffer(gl2.RENDERBUFFER, this.stencil);
      gl2.framebufferRenderbuffer(gl2.FRAMEBUFFER, gl2.DEPTH_STENCIL_ATTACHMENT, gl2.RENDERBUFFER, this.stencil);
      gl2.renderbufferStorage(gl2.RENDERBUFFER, gl2.DEPTH_STENCIL, this.width, this.height);
    };
    Framebuffer.prototype.clear = function(r, g, b, a) {
      this.bind();
      var gl2 = this.gl;
      gl2.clearColor(r, g, b, a);
      gl2.clear(gl2.COLOR_BUFFER_BIT | gl2.DEPTH_BUFFER_BIT);
    };
    Framebuffer.prototype.bind = function() {
      var gl2 = this.gl;
      gl2.bindFramebuffer(gl2.FRAMEBUFFER, this.framebuffer);
    };
    Framebuffer.prototype.unbind = function() {
      var gl2 = this.gl;
      gl2.bindFramebuffer(gl2.FRAMEBUFFER, null);
    };
    Framebuffer.prototype.resize = function(width, height) {
      var gl2 = this.gl;
      this.width = width;
      this.height = height;
      if (this.texture) {
        this.texture.uploadData(null, width, height);
      }
      if (this.stencil) {
        gl2.bindRenderbuffer(gl2.RENDERBUFFER, this.stencil);
        gl2.renderbufferStorage(gl2.RENDERBUFFER, gl2.DEPTH_STENCIL, width, height);
      }
    };
    Framebuffer.prototype.destroy = function() {
      var gl2 = this.gl;
      if (this.texture) {
        this.texture.destroy();
      }
      gl2.deleteFramebuffer(this.framebuffer);
      this.gl = null;
      this.stencil = null;
      this.texture = null;
    };
    Framebuffer.createRGBA = function(gl2, width, height, data) {
      var texture = Texture.fromData(gl2, null, width, height);
      texture.enableNearestScaling();
      texture.enableWrapClamp();
      var fbo = new Framebuffer(gl2, width, height);
      fbo.enableTexture(texture);
      fbo.unbind();
      return fbo;
    };
    Framebuffer.createFloat32 = function(gl2, width, height, data) {
      var texture = new Texture.fromData(gl2, data, width, height);
      texture.enableNearestScaling();
      texture.enableWrapClamp();
      var fbo = new Framebuffer(gl2, width, height);
      fbo.enableTexture(texture);
      fbo.unbind();
      return fbo;
    };
    module.exports = Framebuffer;
  }
});

// node_modules/pixi-gl-core/src/shader/compileProgram.js
var require_compileProgram = __commonJS({
  "node_modules/pixi-gl-core/src/shader/compileProgram.js"(exports, module) {
    var compileProgram = function(gl2, vertexSrc, fragmentSrc, attributeLocations) {
      var glVertShader = compileShader(gl2, gl2.VERTEX_SHADER, vertexSrc);
      var glFragShader = compileShader(gl2, gl2.FRAGMENT_SHADER, fragmentSrc);
      var program = gl2.createProgram();
      gl2.attachShader(program, glVertShader);
      gl2.attachShader(program, glFragShader);
      if (attributeLocations) {
        for (var i in attributeLocations) {
          gl2.bindAttribLocation(program, attributeLocations[i], i);
        }
      }
      gl2.linkProgram(program);
      if (!gl2.getProgramParameter(program, gl2.LINK_STATUS)) {
        console.error("Pixi.js Error: Could not initialize shader.");
        console.error("gl.VALIDATE_STATUS", gl2.getProgramParameter(program, gl2.VALIDATE_STATUS));
        console.error("gl.getError()", gl2.getError());
        if (gl2.getProgramInfoLog(program) !== "") {
          console.warn("Pixi.js Warning: gl.getProgramInfoLog()", gl2.getProgramInfoLog(program));
        }
        gl2.deleteProgram(program);
        program = null;
      }
      gl2.deleteShader(glVertShader);
      gl2.deleteShader(glFragShader);
      return program;
    };
    var compileShader = function(gl2, type, src) {
      var shader = gl2.createShader(type);
      gl2.shaderSource(shader, src);
      gl2.compileShader(shader);
      if (!gl2.getShaderParameter(shader, gl2.COMPILE_STATUS)) {
        console.log(gl2.getShaderInfoLog(shader));
        return null;
      }
      return shader;
    };
    module.exports = compileProgram;
  }
});

// node_modules/pixi-gl-core/src/shader/mapType.js
var require_mapType = __commonJS({
  "node_modules/pixi-gl-core/src/shader/mapType.js"(exports, module) {
    var mapType = function(gl2, type) {
      if (!GL_TABLE) {
        var typeNames = Object.keys(GL_TO_GLSL_TYPES);
        GL_TABLE = {};
        for (var i = 0; i < typeNames.length; ++i) {
          var tn = typeNames[i];
          GL_TABLE[gl2[tn]] = GL_TO_GLSL_TYPES[tn];
        }
      }
      return GL_TABLE[type];
    };
    var GL_TABLE = null;
    var GL_TO_GLSL_TYPES = {
      "FLOAT": "float",
      "FLOAT_VEC2": "vec2",
      "FLOAT_VEC3": "vec3",
      "FLOAT_VEC4": "vec4",
      "INT": "int",
      "INT_VEC2": "ivec2",
      "INT_VEC3": "ivec3",
      "INT_VEC4": "ivec4",
      "BOOL": "bool",
      "BOOL_VEC2": "bvec2",
      "BOOL_VEC3": "bvec3",
      "BOOL_VEC4": "bvec4",
      "FLOAT_MAT2": "mat2",
      "FLOAT_MAT3": "mat3",
      "FLOAT_MAT4": "mat4",
      "SAMPLER_2D": "sampler2D"
    };
    module.exports = mapType;
  }
});

// node_modules/pixi-gl-core/src/shader/mapSize.js
var require_mapSize = __commonJS({
  "node_modules/pixi-gl-core/src/shader/mapSize.js"(exports, module) {
    var mapSize = function(type) {
      return GLSL_TO_SIZE[type];
    };
    var GLSL_TO_SIZE = {
      "float": 1,
      "vec2": 2,
      "vec3": 3,
      "vec4": 4,
      "int": 1,
      "ivec2": 2,
      "ivec3": 3,
      "ivec4": 4,
      "bool": 1,
      "bvec2": 2,
      "bvec3": 3,
      "bvec4": 4,
      "mat2": 4,
      "mat3": 9,
      "mat4": 16,
      "sampler2D": 1
    };
    module.exports = mapSize;
  }
});

// node_modules/pixi-gl-core/src/shader/extractAttributes.js
var require_extractAttributes = __commonJS({
  "node_modules/pixi-gl-core/src/shader/extractAttributes.js"(exports, module) {
    var mapType = require_mapType();
    var mapSize = require_mapSize();
    var extractAttributes = function(gl2, program) {
      var attributes = {};
      var totalAttributes = gl2.getProgramParameter(program, gl2.ACTIVE_ATTRIBUTES);
      for (var i = 0; i < totalAttributes; i++) {
        var attribData = gl2.getActiveAttrib(program, i);
        var type = mapType(gl2, attribData.type);
        attributes[attribData.name] = {
          type,
          size: mapSize(type),
          location: gl2.getAttribLocation(program, attribData.name),
          //TODO - make an attribute object
          pointer
        };
      }
      return attributes;
    };
    var pointer = function(type, normalized, stride, start) {
      gl.vertexAttribPointer(this.location, this.size, type || gl.FLOAT, normalized || false, stride || 0, start || 0);
    };
    module.exports = extractAttributes;
  }
});

// node_modules/pixi-gl-core/src/shader/defaultValue.js
var require_defaultValue = __commonJS({
  "node_modules/pixi-gl-core/src/shader/defaultValue.js"(exports, module) {
    var defaultValue = function(type, size) {
      switch (type) {
        case "float":
          return 0;
        case "vec2":
          return new Float32Array(2 * size);
        case "vec3":
          return new Float32Array(3 * size);
        case "vec4":
          return new Float32Array(4 * size);
        case "int":
        case "sampler2D":
          return 0;
        case "ivec2":
          return new Int32Array(2 * size);
        case "ivec3":
          return new Int32Array(3 * size);
        case "ivec4":
          return new Int32Array(4 * size);
        case "bool":
          return false;
        case "bvec2":
          return booleanArray(2 * size);
        case "bvec3":
          return booleanArray(3 * size);
        case "bvec4":
          return booleanArray(4 * size);
        case "mat2":
          return new Float32Array([
            1,
            0,
            0,
            1
          ]);
        case "mat3":
          return new Float32Array([
            1,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            1
          ]);
        case "mat4":
          return new Float32Array([
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
          ]);
      }
    };
    var booleanArray = function(size) {
      var array = new Array(size);
      for (var i = 0; i < array.length; i++) {
        array[i] = false;
      }
      return array;
    };
    module.exports = defaultValue;
  }
});

// node_modules/pixi-gl-core/src/shader/extractUniforms.js
var require_extractUniforms = __commonJS({
  "node_modules/pixi-gl-core/src/shader/extractUniforms.js"(exports, module) {
    var mapType = require_mapType();
    var defaultValue = require_defaultValue();
    var extractUniforms = function(gl2, program) {
      var uniforms = {};
      var totalUniforms = gl2.getProgramParameter(program, gl2.ACTIVE_UNIFORMS);
      for (var i = 0; i < totalUniforms; i++) {
        var uniformData = gl2.getActiveUniform(program, i);
        var name = uniformData.name.replace(/\[.*?\]/, "");
        var type = mapType(gl2, uniformData.type);
        uniforms[name] = {
          type,
          size: uniformData.size,
          location: gl2.getUniformLocation(program, name),
          value: defaultValue(type, uniformData.size)
        };
      }
      return uniforms;
    };
    module.exports = extractUniforms;
  }
});

// node_modules/pixi-gl-core/src/shader/setPrecision.js
var require_setPrecision = __commonJS({
  "node_modules/pixi-gl-core/src/shader/setPrecision.js"(exports, module) {
    var setPrecision = function(src, precision) {
      if (src.substring(0, 9) !== "precision") {
        return "precision " + precision + " float;\n" + src;
      }
      return src;
    };
    module.exports = setPrecision;
  }
});

// node_modules/pixi-gl-core/src/shader/generateUniformAccessObject.js
var require_generateUniformAccessObject = __commonJS({
  "node_modules/pixi-gl-core/src/shader/generateUniformAccessObject.js"(exports, module) {
    var generateUniformAccessObject = function(gl2, uniformData) {
      var uniforms = { data: {} };
      uniforms.gl = gl2;
      var uniformKeys = Object.keys(uniformData);
      for (var i = 0; i < uniformKeys.length; i++) {
        var fullName = uniformKeys[i];
        var nameTokens = fullName.split(".");
        var name = nameTokens[nameTokens.length - 1];
        var uniformGroup = getUniformGroup(nameTokens, uniforms);
        var uniform = uniformData[fullName];
        uniformGroup.data[name] = uniform;
        uniformGroup.gl = gl2;
        Object.defineProperty(uniformGroup, name, {
          get: generateGetter(name),
          set: generateSetter(name, uniform)
        });
      }
      return uniforms;
    };
    var generateGetter = function(name) {
      return function() {
        return this.data[name].value;
      };
    };
    var GLSL_SINGLE_SETTERS = {
      float: function setSingleFloat(gl2, location, value) {
        gl2.uniform1f(location, value);
      },
      vec2: function setSingleVec2(gl2, location, value) {
        gl2.uniform2f(location, value[0], value[1]);
      },
      vec3: function setSingleVec3(gl2, location, value) {
        gl2.uniform3f(location, value[0], value[1], value[2]);
      },
      vec4: function setSingleVec4(gl2, location, value) {
        gl2.uniform4f(location, value[0], value[1], value[2], value[3]);
      },
      int: function setSingleInt(gl2, location, value) {
        gl2.uniform1i(location, value);
      },
      ivec2: function setSingleIvec2(gl2, location, value) {
        gl2.uniform2i(location, value[0], value[1]);
      },
      ivec3: function setSingleIvec3(gl2, location, value) {
        gl2.uniform3i(location, value[0], value[1], value[2]);
      },
      ivec4: function setSingleIvec4(gl2, location, value) {
        gl2.uniform4i(location, value[0], value[1], value[2], value[3]);
      },
      bool: function setSingleBool(gl2, location, value) {
        gl2.uniform1i(location, value);
      },
      bvec2: function setSingleBvec2(gl2, location, value) {
        gl2.uniform2i(location, value[0], value[1]);
      },
      bvec3: function setSingleBvec3(gl2, location, value) {
        gl2.uniform3i(location, value[0], value[1], value[2]);
      },
      bvec4: function setSingleBvec4(gl2, location, value) {
        gl2.uniform4i(location, value[0], value[1], value[2], value[3]);
      },
      mat2: function setSingleMat2(gl2, location, value) {
        gl2.uniformMatrix2fv(location, false, value);
      },
      mat3: function setSingleMat3(gl2, location, value) {
        gl2.uniformMatrix3fv(location, false, value);
      },
      mat4: function setSingleMat4(gl2, location, value) {
        gl2.uniformMatrix4fv(location, false, value);
      },
      sampler2D: function setSingleSampler2D(gl2, location, value) {
        gl2.uniform1i(location, value);
      }
    };
    var GLSL_ARRAY_SETTERS = {
      float: function setFloatArray(gl2, location, value) {
        gl2.uniform1fv(location, value);
      },
      vec2: function setVec2Array(gl2, location, value) {
        gl2.uniform2fv(location, value);
      },
      vec3: function setVec3Array(gl2, location, value) {
        gl2.uniform3fv(location, value);
      },
      vec4: function setVec4Array(gl2, location, value) {
        gl2.uniform4fv(location, value);
      },
      int: function setIntArray(gl2, location, value) {
        gl2.uniform1iv(location, value);
      },
      ivec2: function setIvec2Array(gl2, location, value) {
        gl2.uniform2iv(location, value);
      },
      ivec3: function setIvec3Array(gl2, location, value) {
        gl2.uniform3iv(location, value);
      },
      ivec4: function setIvec4Array(gl2, location, value) {
        gl2.uniform4iv(location, value);
      },
      bool: function setBoolArray(gl2, location, value) {
        gl2.uniform1iv(location, value);
      },
      bvec2: function setBvec2Array(gl2, location, value) {
        gl2.uniform2iv(location, value);
      },
      bvec3: function setBvec3Array(gl2, location, value) {
        gl2.uniform3iv(location, value);
      },
      bvec4: function setBvec4Array(gl2, location, value) {
        gl2.uniform4iv(location, value);
      },
      sampler2D: function setSampler2DArray(gl2, location, value) {
        gl2.uniform1iv(location, value);
      }
    };
    function generateSetter(name, uniform) {
      return function(value) {
        this.data[name].value = value;
        var location = this.data[name].location;
        if (uniform.size === 1) {
          GLSL_SINGLE_SETTERS[uniform.type](this.gl, location, value);
        } else {
          GLSL_ARRAY_SETTERS[uniform.type](this.gl, location, value);
        }
      };
    }
    function getUniformGroup(nameTokens, uniform) {
      var cur = uniform;
      for (var i = 0; i < nameTokens.length - 1; i++) {
        var o = cur[nameTokens[i]] || { data: {} };
        cur[nameTokens[i]] = o;
        cur = o;
      }
      return cur;
    }
    module.exports = generateUniformAccessObject;
  }
});

// node_modules/pixi-gl-core/src/GLShader.js
var require_GLShader = __commonJS({
  "node_modules/pixi-gl-core/src/GLShader.js"(exports, module) {
    var compileProgram = require_compileProgram();
    var extractAttributes = require_extractAttributes();
    var extractUniforms = require_extractUniforms();
    var setPrecision = require_setPrecision();
    var generateUniformAccessObject = require_generateUniformAccessObject();
    var Shader = function(gl2, vertexSrc, fragmentSrc, precision, attributeLocations) {
      this.gl = gl2;
      if (precision) {
        vertexSrc = setPrecision(vertexSrc, precision);
        fragmentSrc = setPrecision(fragmentSrc, precision);
      }
      this.program = compileProgram(gl2, vertexSrc, fragmentSrc, attributeLocations);
      this.attributes = extractAttributes(gl2, this.program);
      this.uniformData = extractUniforms(gl2, this.program);
      this.uniforms = generateUniformAccessObject(gl2, this.uniformData);
    };
    Shader.prototype.bind = function() {
      this.gl.useProgram(this.program);
      return this;
    };
    Shader.prototype.destroy = function() {
      this.attributes = null;
      this.uniformData = null;
      this.uniforms = null;
      var gl2 = this.gl;
      gl2.deleteProgram(this.program);
    };
    module.exports = Shader;
  }
});

// node_modules/pixi-gl-core/src/VertexArrayObject.js
var require_VertexArrayObject = __commonJS({
  "node_modules/pixi-gl-core/src/VertexArrayObject.js"(exports, module) {
    var setVertexAttribArrays = require_setVertexAttribArrays();
    function VertexArrayObject(gl2, state) {
      this.nativeVaoExtension = null;
      if (!VertexArrayObject.FORCE_NATIVE) {
        this.nativeVaoExtension = gl2.getExtension("OES_vertex_array_object") || gl2.getExtension("MOZ_OES_vertex_array_object") || gl2.getExtension("WEBKIT_OES_vertex_array_object");
      }
      this.nativeState = state;
      if (this.nativeVaoExtension) {
        this.nativeVao = this.nativeVaoExtension.createVertexArrayOES();
        var maxAttribs = gl2.getParameter(gl2.MAX_VERTEX_ATTRIBS);
        this.nativeState = {
          tempAttribState: new Array(maxAttribs),
          attribState: new Array(maxAttribs)
        };
      }
      this.gl = gl2;
      this.attributes = [];
      this.indexBuffer = null;
      this.dirty = false;
    }
    VertexArrayObject.prototype.constructor = VertexArrayObject;
    module.exports = VertexArrayObject;
    VertexArrayObject.FORCE_NATIVE = false;
    VertexArrayObject.prototype.bind = function() {
      if (this.nativeVao) {
        this.nativeVaoExtension.bindVertexArrayOES(this.nativeVao);
        if (this.dirty) {
          this.dirty = false;
          this.activate();
          return this;
        }
        if (this.indexBuffer) {
          this.indexBuffer.bind();
        }
      } else {
        this.activate();
      }
      return this;
    };
    VertexArrayObject.prototype.unbind = function() {
      if (this.nativeVao) {
        this.nativeVaoExtension.bindVertexArrayOES(null);
      }
      return this;
    };
    VertexArrayObject.prototype.activate = function() {
      var gl2 = this.gl;
      var lastBuffer = null;
      for (var i = 0; i < this.attributes.length; i++) {
        var attrib = this.attributes[i];
        if (lastBuffer !== attrib.buffer) {
          attrib.buffer.bind();
          lastBuffer = attrib.buffer;
        }
        gl2.vertexAttribPointer(
          attrib.attribute.location,
          attrib.attribute.size,
          attrib.type || gl2.FLOAT,
          attrib.normalized || false,
          attrib.stride || 0,
          attrib.start || 0
        );
      }
      setVertexAttribArrays(gl2, this.attributes, this.nativeState);
      if (this.indexBuffer) {
        this.indexBuffer.bind();
      }
      return this;
    };
    VertexArrayObject.prototype.addAttribute = function(buffer, attribute, type, normalized, stride, start) {
      this.attributes.push({
        buffer,
        attribute,
        location: attribute.location,
        type: type || this.gl.FLOAT,
        normalized: normalized || false,
        stride: stride || 0,
        start: start || 0
      });
      this.dirty = true;
      return this;
    };
    VertexArrayObject.prototype.addIndex = function(buffer) {
      this.indexBuffer = buffer;
      this.dirty = true;
      return this;
    };
    VertexArrayObject.prototype.clear = function() {
      if (this.nativeVao) {
        this.nativeVaoExtension.bindVertexArrayOES(this.nativeVao);
      }
      this.attributes.length = 0;
      this.indexBuffer = null;
      return this;
    };
    VertexArrayObject.prototype.draw = function(type, size, start) {
      var gl2 = this.gl;
      if (this.indexBuffer) {
        gl2.drawElements(type, size || this.indexBuffer.data.length, gl2.UNSIGNED_SHORT, (start || 0) * 2);
      } else {
        gl2.drawArrays(type, start, size || this.getSize());
      }
      return this;
    };
    VertexArrayObject.prototype.destroy = function() {
      this.gl = null;
      this.indexBuffer = null;
      this.attributes = null;
      this.nativeState = null;
      if (this.nativeVao) {
        this.nativeVaoExtension.deleteVertexArrayOES(this.nativeVao);
      }
      this.nativeVaoExtension = null;
      this.nativeVao = null;
    };
    VertexArrayObject.prototype.getSize = function() {
      var attrib = this.attributes[0];
      return attrib.buffer.data.length / (attrib.stride / 4 || attrib.attribute.size);
    };
  }
});

// node_modules/pixi-gl-core/src/shader/index.js
var require_shader = __commonJS({
  "node_modules/pixi-gl-core/src/shader/index.js"(exports, module) {
    module.exports = {
      compileProgram: require_compileProgram(),
      defaultValue: require_defaultValue(),
      extractAttributes: require_extractAttributes(),
      extractUniforms: require_extractUniforms(),
      generateUniformAccessObject: require_generateUniformAccessObject(),
      setPrecision: require_setPrecision(),
      mapSize: require_mapSize(),
      mapType: require_mapType()
    };
  }
});

// node_modules/pixi-gl-core/src/index.js
var require_src = __commonJS({
  "node_modules/pixi-gl-core/src/index.js"(exports, module) {
    var gl2 = {
      createContext: require_createContext(),
      setVertexAttribArrays: require_setVertexAttribArrays(),
      GLBuffer: require_GLBuffer(),
      GLFramebuffer: require_GLFramebuffer(),
      GLShader: require_GLShader(),
      GLTexture: require_GLTexture(),
      VertexArrayObject: require_VertexArrayObject(),
      shader: require_shader()
    };
    if (typeof module !== "undefined" && module.exports) {
      module.exports = gl2;
    }
    if (typeof window !== "undefined") {
      window.PIXI = window.PIXI || {};
      window.PIXI.glCore = gl2;
    }
  }
});

// node_modules/pixi.js/lib/core/display/Bounds.js
var require_Bounds = __commonJS({
  "node_modules/pixi.js/lib/core/display/Bounds.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _math = require_math();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var Bounds = function() {
      function Bounds2() {
        _classCallCheck(this, Bounds2);
        this.minX = Infinity;
        this.minY = Infinity;
        this.maxX = -Infinity;
        this.maxY = -Infinity;
        this.rect = null;
      }
      Bounds2.prototype.isEmpty = function isEmpty() {
        return this.minX > this.maxX || this.minY > this.maxY;
      };
      Bounds2.prototype.clear = function clear() {
        this.updateID++;
        this.minX = Infinity;
        this.minY = Infinity;
        this.maxX = -Infinity;
        this.maxY = -Infinity;
      };
      Bounds2.prototype.getRectangle = function getRectangle(rect) {
        if (this.minX > this.maxX || this.minY > this.maxY) {
          return _math.Rectangle.EMPTY;
        }
        rect = rect || new _math.Rectangle(0, 0, 1, 1);
        rect.x = this.minX;
        rect.y = this.minY;
        rect.width = this.maxX - this.minX;
        rect.height = this.maxY - this.minY;
        return rect;
      };
      Bounds2.prototype.addPoint = function addPoint(point) {
        this.minX = Math.min(this.minX, point.x);
        this.maxX = Math.max(this.maxX, point.x);
        this.minY = Math.min(this.minY, point.y);
        this.maxY = Math.max(this.maxY, point.y);
      };
      Bounds2.prototype.addQuad = function addQuad(vertices) {
        var minX = this.minX;
        var minY = this.minY;
        var maxX = this.maxX;
        var maxY = this.maxY;
        var x = vertices[0];
        var y = vertices[1];
        minX = x < minX ? x : minX;
        minY = y < minY ? y : minY;
        maxX = x > maxX ? x : maxX;
        maxY = y > maxY ? y : maxY;
        x = vertices[2];
        y = vertices[3];
        minX = x < minX ? x : minX;
        minY = y < minY ? y : minY;
        maxX = x > maxX ? x : maxX;
        maxY = y > maxY ? y : maxY;
        x = vertices[4];
        y = vertices[5];
        minX = x < minX ? x : minX;
        minY = y < minY ? y : minY;
        maxX = x > maxX ? x : maxX;
        maxY = y > maxY ? y : maxY;
        x = vertices[6];
        y = vertices[7];
        minX = x < minX ? x : minX;
        minY = y < minY ? y : minY;
        maxX = x > maxX ? x : maxX;
        maxY = y > maxY ? y : maxY;
        this.minX = minX;
        this.minY = minY;
        this.maxX = maxX;
        this.maxY = maxY;
      };
      Bounds2.prototype.addFrame = function addFrame(transform, x0, y0, x1, y1) {
        var matrix = transform.worldTransform;
        var a = matrix.a;
        var b = matrix.b;
        var c = matrix.c;
        var d = matrix.d;
        var tx = matrix.tx;
        var ty = matrix.ty;
        var minX = this.minX;
        var minY = this.minY;
        var maxX = this.maxX;
        var maxY = this.maxY;
        var x = a * x0 + c * y0 + tx;
        var y = b * x0 + d * y0 + ty;
        minX = x < minX ? x : minX;
        minY = y < minY ? y : minY;
        maxX = x > maxX ? x : maxX;
        maxY = y > maxY ? y : maxY;
        x = a * x1 + c * y0 + tx;
        y = b * x1 + d * y0 + ty;
        minX = x < minX ? x : minX;
        minY = y < minY ? y : minY;
        maxX = x > maxX ? x : maxX;
        maxY = y > maxY ? y : maxY;
        x = a * x0 + c * y1 + tx;
        y = b * x0 + d * y1 + ty;
        minX = x < minX ? x : minX;
        minY = y < minY ? y : minY;
        maxX = x > maxX ? x : maxX;
        maxY = y > maxY ? y : maxY;
        x = a * x1 + c * y1 + tx;
        y = b * x1 + d * y1 + ty;
        minX = x < minX ? x : minX;
        minY = y < minY ? y : minY;
        maxX = x > maxX ? x : maxX;
        maxY = y > maxY ? y : maxY;
        this.minX = minX;
        this.minY = minY;
        this.maxX = maxX;
        this.maxY = maxY;
      };
      Bounds2.prototype.addVertices = function addVertices(transform, vertices, beginOffset, endOffset) {
        var matrix = transform.worldTransform;
        var a = matrix.a;
        var b = matrix.b;
        var c = matrix.c;
        var d = matrix.d;
        var tx = matrix.tx;
        var ty = matrix.ty;
        var minX = this.minX;
        var minY = this.minY;
        var maxX = this.maxX;
        var maxY = this.maxY;
        for (var i = beginOffset; i < endOffset; i += 2) {
          var rawX = vertices[i];
          var rawY = vertices[i + 1];
          var x = a * rawX + c * rawY + tx;
          var y = d * rawY + b * rawX + ty;
          minX = x < minX ? x : minX;
          minY = y < minY ? y : minY;
          maxX = x > maxX ? x : maxX;
          maxY = y > maxY ? y : maxY;
        }
        this.minX = minX;
        this.minY = minY;
        this.maxX = maxX;
        this.maxY = maxY;
      };
      Bounds2.prototype.addBounds = function addBounds(bounds) {
        var minX = this.minX;
        var minY = this.minY;
        var maxX = this.maxX;
        var maxY = this.maxY;
        this.minX = bounds.minX < minX ? bounds.minX : minX;
        this.minY = bounds.minY < minY ? bounds.minY : minY;
        this.maxX = bounds.maxX > maxX ? bounds.maxX : maxX;
        this.maxY = bounds.maxY > maxY ? bounds.maxY : maxY;
      };
      Bounds2.prototype.addBoundsMask = function addBoundsMask(bounds, mask) {
        var _minX = bounds.minX > mask.minX ? bounds.minX : mask.minX;
        var _minY = bounds.minY > mask.minY ? bounds.minY : mask.minY;
        var _maxX = bounds.maxX < mask.maxX ? bounds.maxX : mask.maxX;
        var _maxY = bounds.maxY < mask.maxY ? bounds.maxY : mask.maxY;
        if (_minX <= _maxX && _minY <= _maxY) {
          var minX = this.minX;
          var minY = this.minY;
          var maxX = this.maxX;
          var maxY = this.maxY;
          this.minX = _minX < minX ? _minX : minX;
          this.minY = _minY < minY ? _minY : minY;
          this.maxX = _maxX > maxX ? _maxX : maxX;
          this.maxY = _maxY > maxY ? _maxY : maxY;
        }
      };
      Bounds2.prototype.addBoundsArea = function addBoundsArea(bounds, area) {
        var _minX = bounds.minX > area.x ? bounds.minX : area.x;
        var _minY = bounds.minY > area.y ? bounds.minY : area.y;
        var _maxX = bounds.maxX < area.x + area.width ? bounds.maxX : area.x + area.width;
        var _maxY = bounds.maxY < area.y + area.height ? bounds.maxY : area.y + area.height;
        if (_minX <= _maxX && _minY <= _maxY) {
          var minX = this.minX;
          var minY = this.minY;
          var maxX = this.maxX;
          var maxY = this.maxY;
          this.minX = _minX < minX ? _minX : minX;
          this.minY = _minY < minY ? _minY : minY;
          this.maxX = _maxX > maxX ? _maxX : maxX;
          this.maxY = _maxY > maxY ? _maxY : maxY;
        }
      };
      return Bounds2;
    }();
    exports.default = Bounds;
  }
});

// node_modules/eventemitter3/index.js
var require_eventemitter3 = __commonJS({
  "node_modules/eventemitter3/index.js"(exports, module) {
    "use strict";
    var has = Object.prototype.hasOwnProperty;
    var prefix = "~";
    function Events() {
    }
    if (Object.create) {
      Events.prototype = /* @__PURE__ */ Object.create(null);
      if (!new Events().__proto__)
        prefix = false;
    }
    function EE(fn, context, once) {
      this.fn = fn;
      this.context = context;
      this.once = once || false;
    }
    function EventEmitter() {
      this._events = new Events();
      this._eventsCount = 0;
    }
    EventEmitter.prototype.eventNames = function eventNames() {
      var names = [], events, name;
      if (this._eventsCount === 0)
        return names;
      for (name in events = this._events) {
        if (has.call(events, name))
          names.push(prefix ? name.slice(1) : name);
      }
      if (Object.getOwnPropertySymbols) {
        return names.concat(Object.getOwnPropertySymbols(events));
      }
      return names;
    };
    EventEmitter.prototype.listeners = function listeners(event, exists) {
      var evt = prefix ? prefix + event : event, available = this._events[evt];
      if (exists)
        return !!available;
      if (!available)
        return [];
      if (available.fn)
        return [available.fn];
      for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
        ee[i] = available[i].fn;
      }
      return ee;
    };
    EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt])
        return false;
      var listeners = this._events[evt], len = arguments.length, args, i;
      if (listeners.fn) {
        if (listeners.once)
          this.removeListener(event, listeners.fn, void 0, true);
        switch (len) {
          case 1:
            return listeners.fn.call(listeners.context), true;
          case 2:
            return listeners.fn.call(listeners.context, a1), true;
          case 3:
            return listeners.fn.call(listeners.context, a1, a2), true;
          case 4:
            return listeners.fn.call(listeners.context, a1, a2, a3), true;
          case 5:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
          case 6:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
        }
        for (i = 1, args = new Array(len - 1); i < len; i++) {
          args[i - 1] = arguments[i];
        }
        listeners.fn.apply(listeners.context, args);
      } else {
        var length = listeners.length, j;
        for (i = 0; i < length; i++) {
          if (listeners[i].once)
            this.removeListener(event, listeners[i].fn, void 0, true);
          switch (len) {
            case 1:
              listeners[i].fn.call(listeners[i].context);
              break;
            case 2:
              listeners[i].fn.call(listeners[i].context, a1);
              break;
            case 3:
              listeners[i].fn.call(listeners[i].context, a1, a2);
              break;
            case 4:
              listeners[i].fn.call(listeners[i].context, a1, a2, a3);
              break;
            default:
              if (!args)
                for (j = 1, args = new Array(len - 1); j < len; j++) {
                  args[j - 1] = arguments[j];
                }
              listeners[i].fn.apply(listeners[i].context, args);
          }
        }
      }
      return true;
    };
    EventEmitter.prototype.on = function on(event, fn, context) {
      var listener = new EE(fn, context || this), evt = prefix ? prefix + event : event;
      if (!this._events[evt])
        this._events[evt] = listener, this._eventsCount++;
      else if (!this._events[evt].fn)
        this._events[evt].push(listener);
      else
        this._events[evt] = [this._events[evt], listener];
      return this;
    };
    EventEmitter.prototype.once = function once(event, fn, context) {
      var listener = new EE(fn, context || this, true), evt = prefix ? prefix + event : event;
      if (!this._events[evt])
        this._events[evt] = listener, this._eventsCount++;
      else if (!this._events[evt].fn)
        this._events[evt].push(listener);
      else
        this._events[evt] = [this._events[evt], listener];
      return this;
    };
    EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt])
        return this;
      if (!fn) {
        if (--this._eventsCount === 0)
          this._events = new Events();
        else
          delete this._events[evt];
        return this;
      }
      var listeners = this._events[evt];
      if (listeners.fn) {
        if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
          if (--this._eventsCount === 0)
            this._events = new Events();
          else
            delete this._events[evt];
        }
      } else {
        for (var i = 0, events = [], length = listeners.length; i < length; i++) {
          if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
            events.push(listeners[i]);
          }
        }
        if (events.length)
          this._events[evt] = events.length === 1 ? events[0] : events;
        else if (--this._eventsCount === 0)
          this._events = new Events();
        else
          delete this._events[evt];
      }
      return this;
    };
    EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
      var evt;
      if (event) {
        evt = prefix ? prefix + event : event;
        if (this._events[evt]) {
          if (--this._eventsCount === 0)
            this._events = new Events();
          else
            delete this._events[evt];
        }
      } else {
        this._events = new Events();
        this._eventsCount = 0;
      }
      return this;
    };
    EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
    EventEmitter.prototype.addListener = EventEmitter.prototype.on;
    EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
      return this;
    };
    EventEmitter.prefixed = prefix;
    EventEmitter.EventEmitter = EventEmitter;
    if ("undefined" !== typeof module) {
      module.exports = EventEmitter;
    }
  }
});

// node_modules/ismobilejs/dist/isMobile.min.js
var require_isMobile_min = __commonJS({
  "node_modules/ismobilejs/dist/isMobile.min.js"(exports, module) {
    !function(e) {
      var n = /iPhone/i, t = /iPod/i, r = /iPad/i, a = /\bAndroid(?:.+)Mobile\b/i, p = /Android/i, b = /\bAndroid(?:.+)SD4930UR\b/i, l = /\bAndroid(?:.+)(?:KF[A-Z]{2,4})\b/i, f = /Windows Phone/i, s = /\bWindows(?:.+)ARM\b/i, u = /BlackBerry/i, c = /BB10/i, h = /Opera Mini/i, v = /\b(CriOS|Chrome)(?:.+)Mobile/i, w = /Mobile(?:.+)Firefox\b/i;
      function m(e2, i2) {
        return e2.test(i2);
      }
      function i(e2) {
        var i2 = e2 || ("undefined" != typeof navigator ? navigator.userAgent : ""), o = i2.split("[FBAN");
        void 0 !== o[1] && (i2 = o[0]), void 0 !== (o = i2.split("Twitter"))[1] && (i2 = o[0]);
        var d = { apple: { phone: m(n, i2) && !m(f, i2), ipod: m(t, i2), tablet: !m(n, i2) && m(r, i2) && !m(f, i2), device: (m(n, i2) || m(t, i2) || m(r, i2)) && !m(f, i2) }, amazon: { phone: m(b, i2), tablet: !m(b, i2) && m(l, i2), device: m(b, i2) || m(l, i2) }, android: { phone: !m(f, i2) && m(b, i2) || !m(f, i2) && m(a, i2), tablet: !m(f, i2) && !m(b, i2) && !m(a, i2) && (m(l, i2) || m(p, i2)), device: !m(f, i2) && (m(b, i2) || m(l, i2) || m(a, i2) || m(p, i2)) || m(/\bokhttp\b/i, i2) }, windows: { phone: m(f, i2), tablet: m(s, i2), device: m(f, i2) || m(s, i2) }, other: { blackberry: m(u, i2), blackberry10: m(c, i2), opera: m(h, i2), firefox: m(w, i2), chrome: m(v, i2), device: m(u, i2) || m(c, i2) || m(h, i2) || m(w, i2) || m(v, i2) } };
        return d.any = d.apple.device || d.android.device || d.windows.device || d.other.device, d.phone = d.apple.phone || d.android.phone || d.windows.phone, d.tablet = d.apple.tablet || d.android.tablet || d.windows.tablet, d;
      }
      "undefined" != typeof module && module.exports && "undefined" == typeof window ? module.exports = i : "undefined" != typeof module && module.exports && "undefined" != typeof window ? (module.exports = i(), module.exports.isMobile = i) : "function" == typeof define && define.amd ? define([], e.isMobile = i()) : e.isMobile = i();
    }(exports);
  }
});

// node_modules/pixi.js/lib/core/utils/maxRecommendedTextures.js
var require_maxRecommendedTextures = __commonJS({
  "node_modules/pixi.js/lib/core/utils/maxRecommendedTextures.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.default = maxRecommendedTextures;
    var _ismobilejs = require_isMobile_min();
    var _ismobilejs2 = _interopRequireDefault(_ismobilejs);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function maxRecommendedTextures(max) {
      if (_ismobilejs2.default.tablet || _ismobilejs2.default.phone) {
        return 4;
      }
      return max;
    }
  }
});

// node_modules/pixi.js/lib/core/utils/canUploadSameBuffer.js
var require_canUploadSameBuffer = __commonJS({
  "node_modules/pixi.js/lib/core/utils/canUploadSameBuffer.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.default = canUploadSameBuffer;
    function canUploadSameBuffer() {
      var ios = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
      return !ios;
    }
  }
});

// node_modules/pixi.js/lib/core/settings.js
var require_settings = __commonJS({
  "node_modules/pixi.js/lib/core/settings.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _maxRecommendedTextures = require_maxRecommendedTextures();
    var _maxRecommendedTextures2 = _interopRequireDefault(_maxRecommendedTextures);
    var _canUploadSameBuffer = require_canUploadSameBuffer();
    var _canUploadSameBuffer2 = _interopRequireDefault(_canUploadSameBuffer);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = {
      /**
       * Target frames per millisecond.
       *
       * @static
       * @memberof PIXI.settings
       * @type {number}
       * @default 0.06
       */
      TARGET_FPMS: 0.06,
      /**
       * If set to true WebGL will attempt make textures mimpaped by default.
       * Mipmapping will only succeed if the base texture uploaded has power of two dimensions.
       *
       * @static
       * @memberof PIXI.settings
       * @type {boolean}
       * @default true
       */
      MIPMAP_TEXTURES: true,
      /**
       * Default resolution / device pixel ratio of the renderer.
       *
       * @static
       * @memberof PIXI.settings
       * @type {number}
       * @default 1
       */
      RESOLUTION: 1,
      /**
       * Default filter resolution.
       *
       * @static
       * @memberof PIXI.settings
       * @type {number}
       * @default 1
       */
      FILTER_RESOLUTION: 1,
      /**
       * The maximum textures that this device supports.
       *
       * @static
       * @memberof PIXI.settings
       * @type {number}
       * @default 32
       */
      SPRITE_MAX_TEXTURES: (0, _maxRecommendedTextures2.default)(32),
      // TODO: maybe change to SPRITE.BATCH_SIZE: 2000
      // TODO: maybe add PARTICLE.BATCH_SIZE: 15000
      /**
       * The default sprite batch size.
       *
       * The default aims to balance desktop and mobile devices.
       *
       * @static
       * @memberof PIXI.settings
       * @type {number}
       * @default 4096
       */
      SPRITE_BATCH_SIZE: 4096,
      /**
       * The prefix that denotes a URL is for a retina asset.
       *
       * @static
       * @memberof PIXI.settings
       * @type {RegExp}
       * @example `@2x`
       * @default /@([0-9\.]+)x/
       */
      RETINA_PREFIX: /@([0-9\.]+)x/,
      /**
       * The default render options if none are supplied to {@link PIXI.WebGLRenderer}
       * or {@link PIXI.CanvasRenderer}.
       *
       * @static
       * @constant
       * @memberof PIXI.settings
       * @type {object}
       * @property {HTMLCanvasElement} view=null
       * @property {number} resolution=1
       * @property {boolean} antialias=false
       * @property {boolean} forceFXAA=false
       * @property {boolean} autoResize=false
       * @property {boolean} transparent=false
       * @property {number} backgroundColor=0x000000
       * @property {boolean} clearBeforeRender=true
       * @property {boolean} preserveDrawingBuffer=false
       * @property {boolean} roundPixels=false
       * @property {number} width=800
       * @property {number} height=600
       * @property {boolean} legacy=false
       */
      RENDER_OPTIONS: {
        view: null,
        antialias: false,
        forceFXAA: false,
        autoResize: false,
        transparent: false,
        backgroundColor: 0,
        clearBeforeRender: true,
        preserveDrawingBuffer: false,
        roundPixels: false,
        width: 800,
        height: 600,
        legacy: false
      },
      /**
       * Default transform type.
       *
       * @static
       * @memberof PIXI.settings
       * @type {PIXI.TRANSFORM_MODE}
       * @default PIXI.TRANSFORM_MODE.STATIC
       */
      TRANSFORM_MODE: 0,
      /**
       * Default Garbage Collection mode.
       *
       * @static
       * @memberof PIXI.settings
       * @type {PIXI.GC_MODES}
       * @default PIXI.GC_MODES.AUTO
       */
      GC_MODE: 0,
      /**
       * Default Garbage Collection max idle.
       *
       * @static
       * @memberof PIXI.settings
       * @type {number}
       * @default 3600
       */
      GC_MAX_IDLE: 60 * 60,
      /**
       * Default Garbage Collection maximum check count.
       *
       * @static
       * @memberof PIXI.settings
       * @type {number}
       * @default 600
       */
      GC_MAX_CHECK_COUNT: 60 * 10,
      /**
       * Default wrap modes that are supported by pixi.
       *
       * @static
       * @memberof PIXI.settings
       * @type {PIXI.WRAP_MODES}
       * @default PIXI.WRAP_MODES.CLAMP
       */
      WRAP_MODE: 0,
      /**
       * The scale modes that are supported by pixi.
       *
       * @static
       * @memberof PIXI.settings
       * @type {PIXI.SCALE_MODES}
       * @default PIXI.SCALE_MODES.LINEAR
       */
      SCALE_MODE: 0,
      /**
       * Default specify float precision in vertex shader.
       *
       * @static
       * @memberof PIXI.settings
       * @type {PIXI.PRECISION}
       * @default PIXI.PRECISION.HIGH
       */
      PRECISION_VERTEX: "highp",
      /**
       * Default specify float precision in fragment shader.
       *
       * @static
       * @memberof PIXI.settings
       * @type {PIXI.PRECISION}
       * @default PIXI.PRECISION.MEDIUM
       */
      PRECISION_FRAGMENT: "mediump",
      /**
       * Can we upload the same buffer in a single frame?
       *
       * @static
       * @constant
       * @memberof PIXI.settings
       * @type {boolean}
       */
      CAN_UPLOAD_SAME_BUFFER: (0, _canUploadSameBuffer2.default)(),
      /**
       * Default Mesh `canvasPadding`.
       *
       * @see PIXI.mesh.Mesh#canvasPadding
       * @static
       * @constant
       * @memberof PIXI.settings
       * @type {number}
       */
      MESH_CANVAS_PADDING: 0
    };
  }
});

// node_modules/pixi.js/lib/core/display/TransformBase.js
var require_TransformBase = __commonJS({
  "node_modules/pixi.js/lib/core/display/TransformBase.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _math = require_math();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var TransformBase = function() {
      function TransformBase2() {
        _classCallCheck(this, TransformBase2);
        this.worldTransform = new _math.Matrix();
        this.localTransform = new _math.Matrix();
        this._worldID = 0;
        this._parentID = 0;
      }
      TransformBase2.prototype.updateLocalTransform = function updateLocalTransform() {
      };
      TransformBase2.prototype.updateTransform = function updateTransform(parentTransform) {
        var pt = parentTransform.worldTransform;
        var wt = this.worldTransform;
        var lt = this.localTransform;
        wt.a = lt.a * pt.a + lt.b * pt.c;
        wt.b = lt.a * pt.b + lt.b * pt.d;
        wt.c = lt.c * pt.a + lt.d * pt.c;
        wt.d = lt.c * pt.b + lt.d * pt.d;
        wt.tx = lt.tx * pt.a + lt.ty * pt.c + pt.tx;
        wt.ty = lt.tx * pt.b + lt.ty * pt.d + pt.ty;
        this._worldID++;
      };
      return TransformBase2;
    }();
    exports.default = TransformBase;
    TransformBase.prototype.updateWorldTransform = TransformBase.prototype.updateTransform;
    TransformBase.IDENTITY = new TransformBase();
  }
});

// node_modules/pixi.js/lib/core/display/TransformStatic.js
var require_TransformStatic = __commonJS({
  "node_modules/pixi.js/lib/core/display/TransformStatic.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _math = require_math();
    var _TransformBase2 = require_TransformBase();
    var _TransformBase3 = _interopRequireDefault(_TransformBase2);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var TransformStatic = function(_TransformBase) {
      _inherits(TransformStatic2, _TransformBase);
      function TransformStatic2() {
        _classCallCheck(this, TransformStatic2);
        var _this = _possibleConstructorReturn(this, _TransformBase.call(this));
        _this.position = new _math.ObservablePoint(_this.onChange, _this, 0, 0);
        _this.scale = new _math.ObservablePoint(_this.onChange, _this, 1, 1);
        _this.pivot = new _math.ObservablePoint(_this.onChange, _this, 0, 0);
        _this.skew = new _math.ObservablePoint(_this.updateSkew, _this, 0, 0);
        _this._rotation = 0;
        _this._cx = 1;
        _this._sx = 0;
        _this._cy = 0;
        _this._sy = 1;
        _this._localID = 0;
        _this._currentLocalID = 0;
        return _this;
      }
      TransformStatic2.prototype.onChange = function onChange() {
        this._localID++;
      };
      TransformStatic2.prototype.updateSkew = function updateSkew() {
        this._cx = Math.cos(this._rotation + this.skew._y);
        this._sx = Math.sin(this._rotation + this.skew._y);
        this._cy = -Math.sin(this._rotation - this.skew._x);
        this._sy = Math.cos(this._rotation - this.skew._x);
        this._localID++;
      };
      TransformStatic2.prototype.updateLocalTransform = function updateLocalTransform() {
        var lt = this.localTransform;
        if (this._localID !== this._currentLocalID) {
          lt.a = this._cx * this.scale._x;
          lt.b = this._sx * this.scale._x;
          lt.c = this._cy * this.scale._y;
          lt.d = this._sy * this.scale._y;
          lt.tx = this.position._x - (this.pivot._x * lt.a + this.pivot._y * lt.c);
          lt.ty = this.position._y - (this.pivot._x * lt.b + this.pivot._y * lt.d);
          this._currentLocalID = this._localID;
          this._parentID = -1;
        }
      };
      TransformStatic2.prototype.updateTransform = function updateTransform(parentTransform) {
        var lt = this.localTransform;
        if (this._localID !== this._currentLocalID) {
          lt.a = this._cx * this.scale._x;
          lt.b = this._sx * this.scale._x;
          lt.c = this._cy * this.scale._y;
          lt.d = this._sy * this.scale._y;
          lt.tx = this.position._x - (this.pivot._x * lt.a + this.pivot._y * lt.c);
          lt.ty = this.position._y - (this.pivot._x * lt.b + this.pivot._y * lt.d);
          this._currentLocalID = this._localID;
          this._parentID = -1;
        }
        if (this._parentID !== parentTransform._worldID) {
          var pt = parentTransform.worldTransform;
          var wt = this.worldTransform;
          wt.a = lt.a * pt.a + lt.b * pt.c;
          wt.b = lt.a * pt.b + lt.b * pt.d;
          wt.c = lt.c * pt.a + lt.d * pt.c;
          wt.d = lt.c * pt.b + lt.d * pt.d;
          wt.tx = lt.tx * pt.a + lt.ty * pt.c + pt.tx;
          wt.ty = lt.tx * pt.b + lt.ty * pt.d + pt.ty;
          this._parentID = parentTransform._worldID;
          this._worldID++;
        }
      };
      TransformStatic2.prototype.setFromMatrix = function setFromMatrix(matrix) {
        matrix.decompose(this);
        this._localID++;
      };
      _createClass(TransformStatic2, [{
        key: "rotation",
        get: function get() {
          return this._rotation;
        },
        set: function set(value) {
          if (this._rotation !== value) {
            this._rotation = value;
            this.updateSkew();
          }
        }
      }]);
      return TransformStatic2;
    }(_TransformBase3.default);
    exports.default = TransformStatic;
  }
});

// node_modules/pixi.js/lib/core/display/Transform.js
var require_Transform = __commonJS({
  "node_modules/pixi.js/lib/core/display/Transform.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _math = require_math();
    var _TransformBase2 = require_TransformBase();
    var _TransformBase3 = _interopRequireDefault(_TransformBase2);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var Transform = function(_TransformBase) {
      _inherits(Transform2, _TransformBase);
      function Transform2() {
        _classCallCheck(this, Transform2);
        var _this = _possibleConstructorReturn(this, _TransformBase.call(this));
        _this.position = new _math.Point(0, 0);
        _this.scale = new _math.Point(1, 1);
        _this.skew = new _math.ObservablePoint(_this.updateSkew, _this, 0, 0);
        _this.pivot = new _math.Point(0, 0);
        _this._rotation = 0;
        _this._cx = 1;
        _this._sx = 0;
        _this._cy = 0;
        _this._sy = 1;
        return _this;
      }
      Transform2.prototype.updateSkew = function updateSkew() {
        this._cx = Math.cos(this._rotation + this.skew._y);
        this._sx = Math.sin(this._rotation + this.skew._y);
        this._cy = -Math.sin(this._rotation - this.skew._x);
        this._sy = Math.cos(this._rotation - this.skew._x);
      };
      Transform2.prototype.updateLocalTransform = function updateLocalTransform() {
        var lt = this.localTransform;
        lt.a = this._cx * this.scale.x;
        lt.b = this._sx * this.scale.x;
        lt.c = this._cy * this.scale.y;
        lt.d = this._sy * this.scale.y;
        lt.tx = this.position.x - (this.pivot.x * lt.a + this.pivot.y * lt.c);
        lt.ty = this.position.y - (this.pivot.x * lt.b + this.pivot.y * lt.d);
      };
      Transform2.prototype.updateTransform = function updateTransform(parentTransform) {
        var lt = this.localTransform;
        lt.a = this._cx * this.scale.x;
        lt.b = this._sx * this.scale.x;
        lt.c = this._cy * this.scale.y;
        lt.d = this._sy * this.scale.y;
        lt.tx = this.position.x - (this.pivot.x * lt.a + this.pivot.y * lt.c);
        lt.ty = this.position.y - (this.pivot.x * lt.b + this.pivot.y * lt.d);
        var pt = parentTransform.worldTransform;
        var wt = this.worldTransform;
        wt.a = lt.a * pt.a + lt.b * pt.c;
        wt.b = lt.a * pt.b + lt.b * pt.d;
        wt.c = lt.c * pt.a + lt.d * pt.c;
        wt.d = lt.c * pt.b + lt.d * pt.d;
        wt.tx = lt.tx * pt.a + lt.ty * pt.c + pt.tx;
        wt.ty = lt.tx * pt.b + lt.ty * pt.d + pt.ty;
        this._worldID++;
      };
      Transform2.prototype.setFromMatrix = function setFromMatrix(matrix) {
        matrix.decompose(this);
      };
      _createClass(Transform2, [{
        key: "rotation",
        get: function get() {
          return this._rotation;
        },
        set: function set(value) {
          this._rotation = value;
          this.updateSkew();
        }
      }]);
      return Transform2;
    }(_TransformBase3.default);
    exports.default = Transform;
  }
});

// node_modules/pixi.js/lib/core/display/DisplayObject.js
var require_DisplayObject = __commonJS({
  "node_modules/pixi.js/lib/core/display/DisplayObject.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _eventemitter = require_eventemitter3();
    var _eventemitter2 = _interopRequireDefault(_eventemitter);
    var _const = require_const();
    var _settings = require_settings();
    var _settings2 = _interopRequireDefault(_settings);
    var _TransformStatic = require_TransformStatic();
    var _TransformStatic2 = _interopRequireDefault(_TransformStatic);
    var _Transform = require_Transform();
    var _Transform2 = _interopRequireDefault(_Transform);
    var _Bounds = require_Bounds();
    var _Bounds2 = _interopRequireDefault(_Bounds);
    var _math = require_math();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var DisplayObject = function(_EventEmitter) {
      _inherits(DisplayObject2, _EventEmitter);
      function DisplayObject2() {
        _classCallCheck(this, DisplayObject2);
        var _this = _possibleConstructorReturn(this, _EventEmitter.call(this));
        var TransformClass = _settings2.default.TRANSFORM_MODE === _const.TRANSFORM_MODE.STATIC ? _TransformStatic2.default : _Transform2.default;
        _this.tempDisplayObjectParent = null;
        _this.transform = new TransformClass();
        _this.alpha = 1;
        _this.visible = true;
        _this.renderable = true;
        _this.parent = null;
        _this.worldAlpha = 1;
        _this.filterArea = null;
        _this._filters = null;
        _this._enabledFilters = null;
        _this._bounds = new _Bounds2.default();
        _this._boundsID = 0;
        _this._lastBoundsID = -1;
        _this._boundsRect = null;
        _this._localBoundsRect = null;
        _this._mask = null;
        _this._destroyed = false;
        return _this;
      }
      DisplayObject2.prototype.updateTransform = function updateTransform() {
        this.transform.updateTransform(this.parent.transform);
        this.worldAlpha = this.alpha * this.parent.worldAlpha;
        this._bounds.updateID++;
      };
      DisplayObject2.prototype._recursivePostUpdateTransform = function _recursivePostUpdateTransform() {
        if (this.parent) {
          this.parent._recursivePostUpdateTransform();
          this.transform.updateTransform(this.parent.transform);
        } else {
          this.transform.updateTransform(this._tempDisplayObjectParent.transform);
        }
      };
      DisplayObject2.prototype.getBounds = function getBounds(skipUpdate, rect) {
        if (!skipUpdate) {
          if (!this.parent) {
            this.parent = this._tempDisplayObjectParent;
            this.updateTransform();
            this.parent = null;
          } else {
            this._recursivePostUpdateTransform();
            this.updateTransform();
          }
        }
        if (this._boundsID !== this._lastBoundsID) {
          this.calculateBounds();
        }
        if (!rect) {
          if (!this._boundsRect) {
            this._boundsRect = new _math.Rectangle();
          }
          rect = this._boundsRect;
        }
        return this._bounds.getRectangle(rect);
      };
      DisplayObject2.prototype.getLocalBounds = function getLocalBounds(rect) {
        var transformRef = this.transform;
        var parentRef = this.parent;
        this.parent = null;
        this.transform = this._tempDisplayObjectParent.transform;
        if (!rect) {
          if (!this._localBoundsRect) {
            this._localBoundsRect = new _math.Rectangle();
          }
          rect = this._localBoundsRect;
        }
        var bounds = this.getBounds(false, rect);
        this.parent = parentRef;
        this.transform = transformRef;
        return bounds;
      };
      DisplayObject2.prototype.toGlobal = function toGlobal(position, point) {
        var skipUpdate = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
        if (!skipUpdate) {
          this._recursivePostUpdateTransform();
          if (!this.parent) {
            this.parent = this._tempDisplayObjectParent;
            this.displayObjectUpdateTransform();
            this.parent = null;
          } else {
            this.displayObjectUpdateTransform();
          }
        }
        return this.worldTransform.apply(position, point);
      };
      DisplayObject2.prototype.toLocal = function toLocal(position, from, point, skipUpdate) {
        if (from) {
          position = from.toGlobal(position, point, skipUpdate);
        }
        if (!skipUpdate) {
          this._recursivePostUpdateTransform();
          if (!this.parent) {
            this.parent = this._tempDisplayObjectParent;
            this.displayObjectUpdateTransform();
            this.parent = null;
          } else {
            this.displayObjectUpdateTransform();
          }
        }
        return this.worldTransform.applyInverse(position, point);
      };
      DisplayObject2.prototype.renderWebGL = function renderWebGL(renderer) {
      };
      DisplayObject2.prototype.renderCanvas = function renderCanvas(renderer) {
      };
      DisplayObject2.prototype.setParent = function setParent(container) {
        if (!container || !container.addChild) {
          throw new Error("setParent: Argument must be a Container");
        }
        container.addChild(this);
        return container;
      };
      DisplayObject2.prototype.setTransform = function setTransform() {
        var x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        var scaleX = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
        var scaleY = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
        var rotation = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
        var skewX = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
        var skewY = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : 0;
        var pivotX = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : 0;
        var pivotY = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : 0;
        this.position.x = x;
        this.position.y = y;
        this.scale.x = !scaleX ? 1 : scaleX;
        this.scale.y = !scaleY ? 1 : scaleY;
        this.rotation = rotation;
        this.skew.x = skewX;
        this.skew.y = skewY;
        this.pivot.x = pivotX;
        this.pivot.y = pivotY;
        return this;
      };
      DisplayObject2.prototype.destroy = function destroy() {
        this.removeAllListeners();
        if (this.parent) {
          this.parent.removeChild(this);
        }
        this.transform = null;
        this.parent = null;
        this._bounds = null;
        this._currentBounds = null;
        this._mask = null;
        this.filterArea = null;
        this.interactive = false;
        this.interactiveChildren = false;
        this._destroyed = true;
      };
      _createClass(DisplayObject2, [{
        key: "_tempDisplayObjectParent",
        get: function get() {
          if (this.tempDisplayObjectParent === null) {
            this.tempDisplayObjectParent = new DisplayObject2();
          }
          return this.tempDisplayObjectParent;
        }
      }, {
        key: "x",
        get: function get() {
          return this.position.x;
        },
        set: function set(value) {
          this.transform.position.x = value;
        }
        /**
         * The position of the displayObject on the y axis relative to the local coordinates of the parent.
         * An alias to position.y
         *
         * @member {number}
         */
      }, {
        key: "y",
        get: function get() {
          return this.position.y;
        },
        set: function set(value) {
          this.transform.position.y = value;
        }
        /**
         * Current transform of the object based on world (parent) factors
         *
         * @member {PIXI.Matrix}
         * @readonly
         */
      }, {
        key: "worldTransform",
        get: function get() {
          return this.transform.worldTransform;
        }
        /**
         * Current transform of the object based on local factors: position, scale, other stuff
         *
         * @member {PIXI.Matrix}
         * @readonly
         */
      }, {
        key: "localTransform",
        get: function get() {
          return this.transform.localTransform;
        }
        /**
         * The coordinate of the object relative to the local coordinates of the parent.
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.Point|PIXI.ObservablePoint}
         */
      }, {
        key: "position",
        get: function get() {
          return this.transform.position;
        },
        set: function set(value) {
          this.transform.position.copy(value);
        }
        /**
         * The scale factor of the object.
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.Point|PIXI.ObservablePoint}
         */
      }, {
        key: "scale",
        get: function get() {
          return this.transform.scale;
        },
        set: function set(value) {
          this.transform.scale.copy(value);
        }
        /**
         * The pivot point of the displayObject that it rotates around.
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.Point|PIXI.ObservablePoint}
         */
      }, {
        key: "pivot",
        get: function get() {
          return this.transform.pivot;
        },
        set: function set(value) {
          this.transform.pivot.copy(value);
        }
        /**
         * The skew factor for the object in radians.
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.ObservablePoint}
         */
      }, {
        key: "skew",
        get: function get() {
          return this.transform.skew;
        },
        set: function set(value) {
          this.transform.skew.copy(value);
        }
        /**
         * The rotation of the object in radians.
         *
         * @member {number}
         */
      }, {
        key: "rotation",
        get: function get() {
          return this.transform.rotation;
        },
        set: function set(value) {
          this.transform.rotation = value;
        }
        /**
         * Indicates if the object is globally visible.
         *
         * @member {boolean}
         * @readonly
         */
      }, {
        key: "worldVisible",
        get: function get() {
          var item = this;
          do {
            if (!item.visible) {
              return false;
            }
            item = item.parent;
          } while (item);
          return true;
        }
        /**
         * Sets a mask for the displayObject. A mask is an object that limits the visibility of an
         * object to the shape of the mask applied to it. In PIXI a regular mask must be a
         * PIXI.Graphics or a PIXI.Sprite object. This allows for much faster masking in canvas as it
         * utilises shape clipping. To remove a mask, set this property to null.
         *
         * @todo For the moment, PIXI.CanvasRenderer doesn't support PIXI.Sprite as mask.
         *
         * @member {PIXI.Graphics|PIXI.Sprite}
         */
      }, {
        key: "mask",
        get: function get() {
          return this._mask;
        },
        set: function set(value) {
          if (this._mask) {
            this._mask.renderable = true;
            this._mask.isMask = false;
          }
          this._mask = value;
          if (this._mask) {
            this._mask.renderable = false;
            this._mask.isMask = true;
          }
        }
        /**
         * Sets the filters for the displayObject.
         * * IMPORTANT: This is a webGL only feature and will be ignored by the canvas renderer.
         * To remove filters simply set this property to 'null'
         *
         * @member {PIXI.Filter[]}
         */
      }, {
        key: "filters",
        get: function get() {
          return this._filters && this._filters.slice();
        },
        set: function set(value) {
          this._filters = value && value.slice();
        }
      }]);
      return DisplayObject2;
    }(_eventemitter2.default);
    exports.default = DisplayObject;
    DisplayObject.prototype.displayObjectUpdateTransform = DisplayObject.prototype.updateTransform;
  }
});

// node_modules/pixi.js/lib/core/utils/pluginTarget.js
var require_pluginTarget = __commonJS({
  "node_modules/pixi.js/lib/core/utils/pluginTarget.js"(exports) {
    "use strict";
    exports.__esModule = true;
    function pluginTarget(obj) {
      obj.__plugins = {};
      obj.registerPlugin = function registerPlugin(pluginName, ctor) {
        obj.__plugins[pluginName] = ctor;
      };
      obj.prototype.initPlugins = function initPlugins() {
        this.plugins = this.plugins || {};
        for (var o in obj.__plugins) {
          this.plugins[o] = new obj.__plugins[o](this);
        }
      };
      obj.prototype.destroyPlugins = function destroyPlugins() {
        for (var o in this.plugins) {
          this.plugins[o].destroy();
          this.plugins[o] = null;
        }
        this.plugins = null;
      };
    }
    exports.default = {
      /**
       * Mixes in the properties of the pluginTarget into another object
       *
       * @param {object} obj - The obj to mix into
       */
      mixin: function mixin(obj) {
        pluginTarget(obj);
      }
    };
  }
});

// node_modules/pixi.js/lib/core/utils/mixin.js
var require_mixin = __commonJS({
  "node_modules/pixi.js/lib/core/utils/mixin.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.mixin = mixin;
    exports.delayMixin = delayMixin;
    exports.performMixins = performMixins;
    function mixin(target, source) {
      if (!target || !source)
        return;
      var keys = Object.keys(source);
      for (var i = 0; i < keys.length; ++i) {
        var propertyName = keys[i];
        Object.defineProperty(target, propertyName, Object.getOwnPropertyDescriptor(source, propertyName));
      }
    }
    var mixins = [];
    function delayMixin(target, source) {
      mixins.push(target, source);
    }
    function performMixins() {
      for (var i = 0; i < mixins.length; i += 2) {
        mixin(mixins[i], mixins[i + 1]);
      }
      mixins.length = 0;
    }
  }
});

// node_modules/remove-array-items/index.js
var require_remove_array_items = __commonJS({
  "node_modules/remove-array-items/index.js"(exports, module) {
    "use strict";
    module.exports = function removeItems(arr, startIdx, removeCount) {
      var i, length = arr.length;
      if (startIdx >= length || removeCount === 0) {
        return;
      }
      removeCount = startIdx + removeCount > length ? length - startIdx : removeCount;
      var len = length - removeCount;
      for (i = startIdx; i < len; ++i) {
        arr[i] = arr[i + removeCount];
      }
      arr.length = len;
    };
  }
});

// node_modules/pixi.js/lib/core/utils/mapPremultipliedBlendModes.js
var require_mapPremultipliedBlendModes = __commonJS({
  "node_modules/pixi.js/lib/core/utils/mapPremultipliedBlendModes.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.default = mapPremultipliedBlendModes;
    var _const = require_const();
    function mapPremultipliedBlendModes() {
      var pm = [];
      var npm = [];
      for (var i = 0; i < 32; i++) {
        pm[i] = i;
        npm[i] = i;
      }
      pm[_const.BLEND_MODES.NORMAL_NPM] = _const.BLEND_MODES.NORMAL;
      pm[_const.BLEND_MODES.ADD_NPM] = _const.BLEND_MODES.ADD;
      pm[_const.BLEND_MODES.SCREEN_NPM] = _const.BLEND_MODES.SCREEN;
      npm[_const.BLEND_MODES.NORMAL] = _const.BLEND_MODES.NORMAL_NPM;
      npm[_const.BLEND_MODES.ADD] = _const.BLEND_MODES.ADD_NPM;
      npm[_const.BLEND_MODES.SCREEN] = _const.BLEND_MODES.SCREEN_NPM;
      var array = [];
      array.push(npm);
      array.push(pm);
      return array;
    }
  }
});

// node_modules/earcut/src/earcut.js
var require_earcut = __commonJS({
  "node_modules/earcut/src/earcut.js"(exports, module) {
    "use strict";
    module.exports = earcut;
    module.exports.default = earcut;
    function earcut(data, holeIndices, dim) {
      dim = dim || 2;
      var hasHoles = holeIndices && holeIndices.length, outerLen = hasHoles ? holeIndices[0] * dim : data.length, outerNode = linkedList(data, 0, outerLen, dim, true), triangles = [];
      if (!outerNode || outerNode.next === outerNode.prev)
        return triangles;
      var minX, minY, maxX, maxY, x, y, invSize;
      if (hasHoles)
        outerNode = eliminateHoles(data, holeIndices, outerNode, dim);
      if (data.length > 80 * dim) {
        minX = maxX = data[0];
        minY = maxY = data[1];
        for (var i = dim; i < outerLen; i += dim) {
          x = data[i];
          y = data[i + 1];
          if (x < minX)
            minX = x;
          if (y < minY)
            minY = y;
          if (x > maxX)
            maxX = x;
          if (y > maxY)
            maxY = y;
        }
        invSize = Math.max(maxX - minX, maxY - minY);
        invSize = invSize !== 0 ? 32767 / invSize : 0;
      }
      earcutLinked(outerNode, triangles, dim, minX, minY, invSize, 0);
      return triangles;
    }
    function linkedList(data, start, end, dim, clockwise) {
      var i, last;
      if (clockwise === signedArea(data, start, end, dim) > 0) {
        for (i = start; i < end; i += dim)
          last = insertNode(i, data[i], data[i + 1], last);
      } else {
        for (i = end - dim; i >= start; i -= dim)
          last = insertNode(i, data[i], data[i + 1], last);
      }
      if (last && equals(last, last.next)) {
        removeNode(last);
        last = last.next;
      }
      return last;
    }
    function filterPoints(start, end) {
      if (!start)
        return start;
      if (!end)
        end = start;
      var p = start, again;
      do {
        again = false;
        if (!p.steiner && (equals(p, p.next) || area(p.prev, p, p.next) === 0)) {
          removeNode(p);
          p = end = p.prev;
          if (p === p.next)
            break;
          again = true;
        } else {
          p = p.next;
        }
      } while (again || p !== end);
      return end;
    }
    function earcutLinked(ear, triangles, dim, minX, minY, invSize, pass) {
      if (!ear)
        return;
      if (!pass && invSize)
        indexCurve(ear, minX, minY, invSize);
      var stop = ear, prev, next;
      while (ear.prev !== ear.next) {
        prev = ear.prev;
        next = ear.next;
        if (invSize ? isEarHashed(ear, minX, minY, invSize) : isEar(ear)) {
          triangles.push(prev.i / dim | 0);
          triangles.push(ear.i / dim | 0);
          triangles.push(next.i / dim | 0);
          removeNode(ear);
          ear = next.next;
          stop = next.next;
          continue;
        }
        ear = next;
        if (ear === stop) {
          if (!pass) {
            earcutLinked(filterPoints(ear), triangles, dim, minX, minY, invSize, 1);
          } else if (pass === 1) {
            ear = cureLocalIntersections(filterPoints(ear), triangles, dim);
            earcutLinked(ear, triangles, dim, minX, minY, invSize, 2);
          } else if (pass === 2) {
            splitEarcut(ear, triangles, dim, minX, minY, invSize);
          }
          break;
        }
      }
    }
    function isEar(ear) {
      var a = ear.prev, b = ear, c = ear.next;
      if (area(a, b, c) >= 0)
        return false;
      var ax = a.x, bx = b.x, cx = c.x, ay = a.y, by = b.y, cy = c.y;
      var x0 = ax < bx ? ax < cx ? ax : cx : bx < cx ? bx : cx, y0 = ay < by ? ay < cy ? ay : cy : by < cy ? by : cy, x1 = ax > bx ? ax > cx ? ax : cx : bx > cx ? bx : cx, y1 = ay > by ? ay > cy ? ay : cy : by > cy ? by : cy;
      var p = c.next;
      while (p !== a) {
        if (p.x >= x0 && p.x <= x1 && p.y >= y0 && p.y <= y1 && pointInTriangle(ax, ay, bx, by, cx, cy, p.x, p.y) && area(p.prev, p, p.next) >= 0)
          return false;
        p = p.next;
      }
      return true;
    }
    function isEarHashed(ear, minX, minY, invSize) {
      var a = ear.prev, b = ear, c = ear.next;
      if (area(a, b, c) >= 0)
        return false;
      var ax = a.x, bx = b.x, cx = c.x, ay = a.y, by = b.y, cy = c.y;
      var x0 = ax < bx ? ax < cx ? ax : cx : bx < cx ? bx : cx, y0 = ay < by ? ay < cy ? ay : cy : by < cy ? by : cy, x1 = ax > bx ? ax > cx ? ax : cx : bx > cx ? bx : cx, y1 = ay > by ? ay > cy ? ay : cy : by > cy ? by : cy;
      var minZ = zOrder(x0, y0, minX, minY, invSize), maxZ = zOrder(x1, y1, minX, minY, invSize);
      var p = ear.prevZ, n = ear.nextZ;
      while (p && p.z >= minZ && n && n.z <= maxZ) {
        if (p.x >= x0 && p.x <= x1 && p.y >= y0 && p.y <= y1 && p !== a && p !== c && pointInTriangle(ax, ay, bx, by, cx, cy, p.x, p.y) && area(p.prev, p, p.next) >= 0)
          return false;
        p = p.prevZ;
        if (n.x >= x0 && n.x <= x1 && n.y >= y0 && n.y <= y1 && n !== a && n !== c && pointInTriangle(ax, ay, bx, by, cx, cy, n.x, n.y) && area(n.prev, n, n.next) >= 0)
          return false;
        n = n.nextZ;
      }
      while (p && p.z >= minZ) {
        if (p.x >= x0 && p.x <= x1 && p.y >= y0 && p.y <= y1 && p !== a && p !== c && pointInTriangle(ax, ay, bx, by, cx, cy, p.x, p.y) && area(p.prev, p, p.next) >= 0)
          return false;
        p = p.prevZ;
      }
      while (n && n.z <= maxZ) {
        if (n.x >= x0 && n.x <= x1 && n.y >= y0 && n.y <= y1 && n !== a && n !== c && pointInTriangle(ax, ay, bx, by, cx, cy, n.x, n.y) && area(n.prev, n, n.next) >= 0)
          return false;
        n = n.nextZ;
      }
      return true;
    }
    function cureLocalIntersections(start, triangles, dim) {
      var p = start;
      do {
        var a = p.prev, b = p.next.next;
        if (!equals(a, b) && intersects(a, p, p.next, b) && locallyInside(a, b) && locallyInside(b, a)) {
          triangles.push(a.i / dim | 0);
          triangles.push(p.i / dim | 0);
          triangles.push(b.i / dim | 0);
          removeNode(p);
          removeNode(p.next);
          p = start = b;
        }
        p = p.next;
      } while (p !== start);
      return filterPoints(p);
    }
    function splitEarcut(start, triangles, dim, minX, minY, invSize) {
      var a = start;
      do {
        var b = a.next.next;
        while (b !== a.prev) {
          if (a.i !== b.i && isValidDiagonal(a, b)) {
            var c = splitPolygon(a, b);
            a = filterPoints(a, a.next);
            c = filterPoints(c, c.next);
            earcutLinked(a, triangles, dim, minX, minY, invSize, 0);
            earcutLinked(c, triangles, dim, minX, minY, invSize, 0);
            return;
          }
          b = b.next;
        }
        a = a.next;
      } while (a !== start);
    }
    function eliminateHoles(data, holeIndices, outerNode, dim) {
      var queue = [], i, len, start, end, list;
      for (i = 0, len = holeIndices.length; i < len; i++) {
        start = holeIndices[i] * dim;
        end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
        list = linkedList(data, start, end, dim, false);
        if (list === list.next)
          list.steiner = true;
        queue.push(getLeftmost(list));
      }
      queue.sort(compareX);
      for (i = 0; i < queue.length; i++) {
        outerNode = eliminateHole(queue[i], outerNode);
      }
      return outerNode;
    }
    function compareX(a, b) {
      return a.x - b.x;
    }
    function eliminateHole(hole, outerNode) {
      var bridge = findHoleBridge(hole, outerNode);
      if (!bridge) {
        return outerNode;
      }
      var bridgeReverse = splitPolygon(bridge, hole);
      filterPoints(bridgeReverse, bridgeReverse.next);
      return filterPoints(bridge, bridge.next);
    }
    function findHoleBridge(hole, outerNode) {
      var p = outerNode, hx = hole.x, hy = hole.y, qx = -Infinity, m;
      do {
        if (hy <= p.y && hy >= p.next.y && p.next.y !== p.y) {
          var x = p.x + (hy - p.y) * (p.next.x - p.x) / (p.next.y - p.y);
          if (x <= hx && x > qx) {
            qx = x;
            m = p.x < p.next.x ? p : p.next;
            if (x === hx)
              return m;
          }
        }
        p = p.next;
      } while (p !== outerNode);
      if (!m)
        return null;
      var stop = m, mx = m.x, my = m.y, tanMin = Infinity, tan;
      p = m;
      do {
        if (hx >= p.x && p.x >= mx && hx !== p.x && pointInTriangle(hy < my ? hx : qx, hy, mx, my, hy < my ? qx : hx, hy, p.x, p.y)) {
          tan = Math.abs(hy - p.y) / (hx - p.x);
          if (locallyInside(p, hole) && (tan < tanMin || tan === tanMin && (p.x > m.x || p.x === m.x && sectorContainsSector(m, p)))) {
            m = p;
            tanMin = tan;
          }
        }
        p = p.next;
      } while (p !== stop);
      return m;
    }
    function sectorContainsSector(m, p) {
      return area(m.prev, m, p.prev) < 0 && area(p.next, m, m.next) < 0;
    }
    function indexCurve(start, minX, minY, invSize) {
      var p = start;
      do {
        if (p.z === 0)
          p.z = zOrder(p.x, p.y, minX, minY, invSize);
        p.prevZ = p.prev;
        p.nextZ = p.next;
        p = p.next;
      } while (p !== start);
      p.prevZ.nextZ = null;
      p.prevZ = null;
      sortLinked(p);
    }
    function sortLinked(list) {
      var i, p, q, e, tail, numMerges, pSize, qSize, inSize = 1;
      do {
        p = list;
        list = null;
        tail = null;
        numMerges = 0;
        while (p) {
          numMerges++;
          q = p;
          pSize = 0;
          for (i = 0; i < inSize; i++) {
            pSize++;
            q = q.nextZ;
            if (!q)
              break;
          }
          qSize = inSize;
          while (pSize > 0 || qSize > 0 && q) {
            if (pSize !== 0 && (qSize === 0 || !q || p.z <= q.z)) {
              e = p;
              p = p.nextZ;
              pSize--;
            } else {
              e = q;
              q = q.nextZ;
              qSize--;
            }
            if (tail)
              tail.nextZ = e;
            else
              list = e;
            e.prevZ = tail;
            tail = e;
          }
          p = q;
        }
        tail.nextZ = null;
        inSize *= 2;
      } while (numMerges > 1);
      return list;
    }
    function zOrder(x, y, minX, minY, invSize) {
      x = (x - minX) * invSize | 0;
      y = (y - minY) * invSize | 0;
      x = (x | x << 8) & 16711935;
      x = (x | x << 4) & 252645135;
      x = (x | x << 2) & 858993459;
      x = (x | x << 1) & 1431655765;
      y = (y | y << 8) & 16711935;
      y = (y | y << 4) & 252645135;
      y = (y | y << 2) & 858993459;
      y = (y | y << 1) & 1431655765;
      return x | y << 1;
    }
    function getLeftmost(start) {
      var p = start, leftmost = start;
      do {
        if (p.x < leftmost.x || p.x === leftmost.x && p.y < leftmost.y)
          leftmost = p;
        p = p.next;
      } while (p !== start);
      return leftmost;
    }
    function pointInTriangle(ax, ay, bx, by, cx, cy, px, py) {
      return (cx - px) * (ay - py) >= (ax - px) * (cy - py) && (ax - px) * (by - py) >= (bx - px) * (ay - py) && (bx - px) * (cy - py) >= (cx - px) * (by - py);
    }
    function isValidDiagonal(a, b) {
      return a.next.i !== b.i && a.prev.i !== b.i && !intersectsPolygon(a, b) && // dones't intersect other edges
      (locallyInside(a, b) && locallyInside(b, a) && middleInside(a, b) && // locally visible
      (area(a.prev, a, b.prev) || area(a, b.prev, b)) || // does not create opposite-facing sectors
      equals(a, b) && area(a.prev, a, a.next) > 0 && area(b.prev, b, b.next) > 0);
    }
    function area(p, q, r) {
      return (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
    }
    function equals(p1, p2) {
      return p1.x === p2.x && p1.y === p2.y;
    }
    function intersects(p1, q1, p2, q2) {
      var o1 = sign(area(p1, q1, p2));
      var o2 = sign(area(p1, q1, q2));
      var o3 = sign(area(p2, q2, p1));
      var o4 = sign(area(p2, q2, q1));
      if (o1 !== o2 && o3 !== o4)
        return true;
      if (o1 === 0 && onSegment(p1, p2, q1))
        return true;
      if (o2 === 0 && onSegment(p1, q2, q1))
        return true;
      if (o3 === 0 && onSegment(p2, p1, q2))
        return true;
      if (o4 === 0 && onSegment(p2, q1, q2))
        return true;
      return false;
    }
    function onSegment(p, q, r) {
      return q.x <= Math.max(p.x, r.x) && q.x >= Math.min(p.x, r.x) && q.y <= Math.max(p.y, r.y) && q.y >= Math.min(p.y, r.y);
    }
    function sign(num) {
      return num > 0 ? 1 : num < 0 ? -1 : 0;
    }
    function intersectsPolygon(a, b) {
      var p = a;
      do {
        if (p.i !== a.i && p.next.i !== a.i && p.i !== b.i && p.next.i !== b.i && intersects(p, p.next, a, b))
          return true;
        p = p.next;
      } while (p !== a);
      return false;
    }
    function locallyInside(a, b) {
      return area(a.prev, a, a.next) < 0 ? area(a, b, a.next) >= 0 && area(a, a.prev, b) >= 0 : area(a, b, a.prev) < 0 || area(a, a.next, b) < 0;
    }
    function middleInside(a, b) {
      var p = a, inside = false, px = (a.x + b.x) / 2, py = (a.y + b.y) / 2;
      do {
        if (p.y > py !== p.next.y > py && p.next.y !== p.y && px < (p.next.x - p.x) * (py - p.y) / (p.next.y - p.y) + p.x)
          inside = !inside;
        p = p.next;
      } while (p !== a);
      return inside;
    }
    function splitPolygon(a, b) {
      var a2 = new Node(a.i, a.x, a.y), b2 = new Node(b.i, b.x, b.y), an = a.next, bp = b.prev;
      a.next = b;
      b.prev = a;
      a2.next = an;
      an.prev = a2;
      b2.next = a2;
      a2.prev = b2;
      bp.next = b2;
      b2.prev = bp;
      return b2;
    }
    function insertNode(i, x, y, last) {
      var p = new Node(i, x, y);
      if (!last) {
        p.prev = p;
        p.next = p;
      } else {
        p.next = last.next;
        p.prev = last;
        last.next.prev = p;
        last.next = p;
      }
      return p;
    }
    function removeNode(p) {
      p.next.prev = p.prev;
      p.prev.next = p.next;
      if (p.prevZ)
        p.prevZ.nextZ = p.nextZ;
      if (p.nextZ)
        p.nextZ.prevZ = p.prevZ;
    }
    function Node(i, x, y) {
      this.i = i;
      this.x = x;
      this.y = y;
      this.prev = null;
      this.next = null;
      this.z = 0;
      this.prevZ = null;
      this.nextZ = null;
      this.steiner = false;
    }
    earcut.deviation = function(data, holeIndices, dim, triangles) {
      var hasHoles = holeIndices && holeIndices.length;
      var outerLen = hasHoles ? holeIndices[0] * dim : data.length;
      var polygonArea = Math.abs(signedArea(data, 0, outerLen, dim));
      if (hasHoles) {
        for (var i = 0, len = holeIndices.length; i < len; i++) {
          var start = holeIndices[i] * dim;
          var end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
          polygonArea -= Math.abs(signedArea(data, start, end, dim));
        }
      }
      var trianglesArea = 0;
      for (i = 0; i < triangles.length; i += 3) {
        var a = triangles[i] * dim;
        var b = triangles[i + 1] * dim;
        var c = triangles[i + 2] * dim;
        trianglesArea += Math.abs(
          (data[a] - data[c]) * (data[b + 1] - data[a + 1]) - (data[a] - data[b]) * (data[c + 1] - data[a + 1])
        );
      }
      return polygonArea === 0 && trianglesArea === 0 ? 0 : Math.abs((trianglesArea - polygonArea) / polygonArea);
    };
    function signedArea(data, start, end, dim) {
      var sum = 0;
      for (var i = start, j = end - dim; i < end; i += dim) {
        sum += (data[j] - data[i]) * (data[i + 1] + data[j + 1]);
        j = i;
      }
      return sum;
    }
    earcut.flatten = function(data) {
      var dim = data[0][0].length, result = { vertices: [], holes: [], dimensions: dim }, holeIndex = 0;
      for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data[i].length; j++) {
          for (var d = 0; d < dim; d++)
            result.vertices.push(data[i][j][d]);
        }
        if (i > 0) {
          holeIndex += data[i - 1].length;
          result.holes.push(holeIndex);
        }
      }
      return result;
    };
  }
});

// node_modules/pixi.js/lib/core/utils/index.js
var require_utils = __commonJS({
  "node_modules/pixi.js/lib/core/utils/index.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.premultiplyBlendMode = exports.BaseTextureCache = exports.TextureCache = exports.earcut = exports.mixins = exports.pluginTarget = exports.EventEmitter = exports.removeItems = exports.isMobile = void 0;
    exports.uid = uid;
    exports.hex2rgb = hex2rgb;
    exports.hex2string = hex2string;
    exports.rgb2hex = rgb2hex;
    exports.getResolutionOfUrl = getResolutionOfUrl;
    exports.decomposeDataUri = decomposeDataUri;
    exports.getUrlFileExtension = getUrlFileExtension;
    exports.getSvgSize = getSvgSize;
    exports.skipHello = skipHello;
    exports.sayHello = sayHello;
    exports.isWebGLSupported = isWebGLSupported;
    exports.sign = sign;
    exports.destroyTextureCache = destroyTextureCache;
    exports.clearTextureCache = clearTextureCache;
    exports.correctBlendMode = correctBlendMode;
    exports.premultiplyTint = premultiplyTint;
    exports.premultiplyRgba = premultiplyRgba;
    exports.premultiplyTintToRgba = premultiplyTintToRgba;
    var _const = require_const();
    var _settings = require_settings();
    var _settings2 = _interopRequireDefault(_settings);
    var _eventemitter = require_eventemitter3();
    var _eventemitter2 = _interopRequireDefault(_eventemitter);
    var _pluginTarget = require_pluginTarget();
    var _pluginTarget2 = _interopRequireDefault(_pluginTarget);
    var _mixin = require_mixin();
    var mixins = _interopRequireWildcard(_mixin);
    var _ismobilejs = require_isMobile_min();
    var isMobile = _interopRequireWildcard(_ismobilejs);
    var _removeArrayItems = require_remove_array_items();
    var _removeArrayItems2 = _interopRequireDefault(_removeArrayItems);
    var _mapPremultipliedBlendModes = require_mapPremultipliedBlendModes();
    var _mapPremultipliedBlendModes2 = _interopRequireDefault(_mapPremultipliedBlendModes);
    var _earcut = require_earcut();
    var _earcut2 = _interopRequireDefault(_earcut);
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var nextUid = 0;
    var saidHello = false;
    exports.isMobile = isMobile;
    exports.removeItems = _removeArrayItems2.default;
    exports.EventEmitter = _eventemitter2.default;
    exports.pluginTarget = _pluginTarget2.default;
    exports.mixins = mixins;
    exports.earcut = _earcut2.default;
    function uid() {
      return ++nextUid;
    }
    function hex2rgb(hex, out) {
      out = out || [];
      out[0] = (hex >> 16 & 255) / 255;
      out[1] = (hex >> 8 & 255) / 255;
      out[2] = (hex & 255) / 255;
      return out;
    }
    function hex2string(hex) {
      hex = hex.toString(16);
      hex = "000000".substr(0, 6 - hex.length) + hex;
      return "#" + hex;
    }
    function rgb2hex(rgb) {
      return (rgb[0] * 255 << 16) + (rgb[1] * 255 << 8) + (rgb[2] * 255 | 0);
    }
    function getResolutionOfUrl(url, defaultValue) {
      var resolution = _settings2.default.RETINA_PREFIX.exec(url);
      if (resolution) {
        return parseFloat(resolution[1]);
      }
      return defaultValue !== void 0 ? defaultValue : 1;
    }
    function decomposeDataUri(dataUri) {
      var dataUriMatch = _const.DATA_URI.exec(dataUri);
      if (dataUriMatch) {
        return {
          mediaType: dataUriMatch[1] ? dataUriMatch[1].toLowerCase() : void 0,
          subType: dataUriMatch[2] ? dataUriMatch[2].toLowerCase() : void 0,
          charset: dataUriMatch[3] ? dataUriMatch[3].toLowerCase() : void 0,
          encoding: dataUriMatch[4] ? dataUriMatch[4].toLowerCase() : void 0,
          data: dataUriMatch[5]
        };
      }
      return void 0;
    }
    function getUrlFileExtension(url) {
      var extension = _const.URL_FILE_EXTENSION.exec(url);
      if (extension) {
        return extension[1].toLowerCase();
      }
      return void 0;
    }
    function getSvgSize(svgString) {
      var sizeMatch = _const.SVG_SIZE.exec(svgString);
      var size = {};
      if (sizeMatch) {
        size[sizeMatch[1]] = Math.round(parseFloat(sizeMatch[3]));
        size[sizeMatch[5]] = Math.round(parseFloat(sizeMatch[7]));
      }
      return size;
    }
    function skipHello() {
      saidHello = true;
    }
    function sayHello(type) {
      if (saidHello) {
        return;
      }
      if (navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
        var args = ["\n %c %c %c PixiJS " + _const.VERSION + " - ✰ " + type + " ✰  %c  %c  http://www.pixijs.com/  %c %c ♥%c♥%c♥ \n\n", "background: #ff66a5; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "color: #ff66a5; background: #030307; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "background: #ffc3dc; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;"];
        window.console.log.apply(console, args);
      } else if (window.console) {
        window.console.log("PixiJS " + _const.VERSION + " - " + type + " - http://www.pixijs.com/");
      }
      saidHello = true;
    }
    function isWebGLSupported() {
      var contextOptions = { stencil: true, failIfMajorPerformanceCaveat: true };
      try {
        if (!window.WebGLRenderingContext) {
          return false;
        }
        var canvas = document.createElement("canvas");
        var gl2 = canvas.getContext("webgl", contextOptions) || canvas.getContext("experimental-webgl", contextOptions);
        var success = !!(gl2 && gl2.getContextAttributes().stencil);
        if (gl2) {
          var loseContext = gl2.getExtension("WEBGL_lose_context");
          if (loseContext) {
            loseContext.loseContext();
          }
        }
        gl2 = null;
        return success;
      } catch (e) {
        return false;
      }
    }
    function sign(n) {
      if (n === 0)
        return 0;
      return n < 0 ? -1 : 1;
    }
    var TextureCache = exports.TextureCache = /* @__PURE__ */ Object.create(null);
    var BaseTextureCache = exports.BaseTextureCache = /* @__PURE__ */ Object.create(null);
    function destroyTextureCache() {
      var key = void 0;
      for (key in TextureCache) {
        TextureCache[key].destroy();
      }
      for (key in BaseTextureCache) {
        BaseTextureCache[key].destroy();
      }
    }
    function clearTextureCache() {
      var key = void 0;
      for (key in TextureCache) {
        delete TextureCache[key];
      }
      for (key in BaseTextureCache) {
        delete BaseTextureCache[key];
      }
    }
    var premultiplyBlendMode = exports.premultiplyBlendMode = (0, _mapPremultipliedBlendModes2.default)();
    function correctBlendMode(blendMode, premultiplied) {
      return premultiplyBlendMode[premultiplied ? 1 : 0][blendMode];
    }
    function premultiplyTint(tint, alpha) {
      if (alpha === 1) {
        return (alpha * 255 << 24) + tint;
      }
      if (alpha === 0) {
        return 0;
      }
      var R = tint >> 16 & 255;
      var G = tint >> 8 & 255;
      var B = tint & 255;
      R = R * alpha + 0.5 | 0;
      G = G * alpha + 0.5 | 0;
      B = B * alpha + 0.5 | 0;
      return (alpha * 255 << 24) + (R << 16) + (G << 8) + B;
    }
    function premultiplyRgba(rgb, alpha, out, premultiply) {
      out = out || new Float32Array(4);
      if (premultiply || premultiply === void 0) {
        out[0] = rgb[0] * alpha;
        out[1] = rgb[1] * alpha;
        out[2] = rgb[2] * alpha;
      } else {
        out[0] = rgb[0];
        out[1] = rgb[1];
        out[2] = rgb[2];
      }
      out[3] = alpha;
      return out;
    }
    function premultiplyTintToRgba(tint, alpha, out, premultiply) {
      out = out || new Float32Array(4);
      out[0] = (tint >> 16 & 255) / 255;
      out[1] = (tint >> 8 & 255) / 255;
      out[2] = (tint & 255) / 255;
      if (premultiply || premultiply === void 0) {
        out[0] *= alpha;
        out[1] *= alpha;
        out[2] *= alpha;
      }
      out[3] = alpha;
      return out;
    }
  }
});

// node_modules/pixi.js/lib/core/display/Container.js
var require_Container = __commonJS({
  "node_modules/pixi.js/lib/core/display/Container.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _utils = require_utils();
    var _DisplayObject2 = require_DisplayObject();
    var _DisplayObject3 = _interopRequireDefault(_DisplayObject2);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var Container = function(_DisplayObject) {
      _inherits(Container2, _DisplayObject);
      function Container2() {
        _classCallCheck(this, Container2);
        var _this = _possibleConstructorReturn(this, _DisplayObject.call(this));
        _this.children = [];
        return _this;
      }
      Container2.prototype.onChildrenChange = function onChildrenChange() {
      };
      Container2.prototype.addChild = function addChild(child) {
        var argumentsLength = arguments.length;
        if (argumentsLength > 1) {
          for (var i = 0; i < argumentsLength; i++) {
            this.addChild(arguments[i]);
          }
        } else {
          if (child.parent) {
            child.parent.removeChild(child);
          }
          child.parent = this;
          child.transform._parentID = -1;
          this.children.push(child);
          this._boundsID++;
          this.onChildrenChange(this.children.length - 1);
          child.emit("added", this);
        }
        return child;
      };
      Container2.prototype.addChildAt = function addChildAt(child, index) {
        if (index < 0 || index > this.children.length) {
          throw new Error(child + "addChildAt: The index " + index + " supplied is out of bounds " + this.children.length);
        }
        if (child.parent) {
          child.parent.removeChild(child);
        }
        child.parent = this;
        child.transform._parentID = -1;
        this.children.splice(index, 0, child);
        this._boundsID++;
        this.onChildrenChange(index);
        child.emit("added", this);
        return child;
      };
      Container2.prototype.swapChildren = function swapChildren(child, child2) {
        if (child === child2) {
          return;
        }
        var index1 = this.getChildIndex(child);
        var index2 = this.getChildIndex(child2);
        this.children[index1] = child2;
        this.children[index2] = child;
        this.onChildrenChange(index1 < index2 ? index1 : index2);
      };
      Container2.prototype.getChildIndex = function getChildIndex(child) {
        var index = this.children.indexOf(child);
        if (index === -1) {
          throw new Error("The supplied DisplayObject must be a child of the caller");
        }
        return index;
      };
      Container2.prototype.setChildIndex = function setChildIndex(child, index) {
        if (index < 0 || index >= this.children.length) {
          throw new Error("The index " + index + " supplied is out of bounds " + this.children.length);
        }
        var currentIndex = this.getChildIndex(child);
        (0, _utils.removeItems)(this.children, currentIndex, 1);
        this.children.splice(index, 0, child);
        this.onChildrenChange(index);
      };
      Container2.prototype.getChildAt = function getChildAt(index) {
        if (index < 0 || index >= this.children.length) {
          throw new Error("getChildAt: Index (" + index + ") does not exist.");
        }
        return this.children[index];
      };
      Container2.prototype.removeChild = function removeChild(child) {
        var argumentsLength = arguments.length;
        if (argumentsLength > 1) {
          for (var i = 0; i < argumentsLength; i++) {
            this.removeChild(arguments[i]);
          }
        } else {
          var index = this.children.indexOf(child);
          if (index === -1)
            return null;
          child.parent = null;
          child.transform._parentID = -1;
          (0, _utils.removeItems)(this.children, index, 1);
          this._boundsID++;
          this.onChildrenChange(index);
          child.emit("removed", this);
        }
        return child;
      };
      Container2.prototype.removeChildAt = function removeChildAt(index) {
        var child = this.getChildAt(index);
        child.parent = null;
        child.transform._parentID = -1;
        (0, _utils.removeItems)(this.children, index, 1);
        this._boundsID++;
        this.onChildrenChange(index);
        child.emit("removed", this);
        return child;
      };
      Container2.prototype.removeChildren = function removeChildren() {
        var beginIndex = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        var endIndex = arguments[1];
        var begin = beginIndex;
        var end = typeof endIndex === "number" ? endIndex : this.children.length;
        var range = end - begin;
        var removed = void 0;
        if (range > 0 && range <= end) {
          removed = this.children.splice(begin, range);
          for (var i = 0; i < removed.length; ++i) {
            removed[i].parent = null;
            if (removed[i].transform) {
              removed[i].transform._parentID = -1;
            }
          }
          this._boundsID++;
          this.onChildrenChange(beginIndex);
          for (var _i = 0; _i < removed.length; ++_i) {
            removed[_i].emit("removed", this);
          }
          return removed;
        } else if (range === 0 && this.children.length === 0) {
          return [];
        }
        throw new RangeError("removeChildren: numeric values are outside the acceptable range.");
      };
      Container2.prototype.updateTransform = function updateTransform() {
        this._boundsID++;
        this.transform.updateTransform(this.parent.transform);
        this.worldAlpha = this.alpha * this.parent.worldAlpha;
        for (var i = 0, j = this.children.length; i < j; ++i) {
          var child = this.children[i];
          if (child.visible) {
            child.updateTransform();
          }
        }
      };
      Container2.prototype.calculateBounds = function calculateBounds() {
        this._bounds.clear();
        this._calculateBounds();
        for (var i = 0; i < this.children.length; i++) {
          var child = this.children[i];
          if (!child.visible || !child.renderable) {
            continue;
          }
          child.calculateBounds();
          if (child._mask) {
            child._mask.calculateBounds();
            this._bounds.addBoundsMask(child._bounds, child._mask._bounds);
          } else if (child.filterArea) {
            this._bounds.addBoundsArea(child._bounds, child.filterArea);
          } else {
            this._bounds.addBounds(child._bounds);
          }
        }
        this._lastBoundsID = this._boundsID;
      };
      Container2.prototype._calculateBounds = function _calculateBounds() {
      };
      Container2.prototype.renderWebGL = function renderWebGL(renderer) {
        if (!this.visible || this.worldAlpha <= 0 || !this.renderable) {
          return;
        }
        if (this._mask || this.filters && this.filters.length) {
          this.renderAdvancedWebGL(renderer);
        } else {
          this._renderWebGL(renderer);
          for (var i = 0, j = this.children.length; i < j; ++i) {
            this.children[i].renderWebGL(renderer);
          }
        }
      };
      Container2.prototype.renderAdvancedWebGL = function renderAdvancedWebGL(renderer) {
        renderer.flush();
        var filters = this._filters;
        var mask = this._mask;
        if (filters) {
          if (!this._enabledFilters) {
            this._enabledFilters = [];
          }
          this._enabledFilters.length = 0;
          for (var i = 0; i < filters.length; i++) {
            if (filters[i].enabled) {
              this._enabledFilters.push(filters[i]);
            }
          }
          if (this._enabledFilters.length) {
            renderer.filterManager.pushFilter(this, this._enabledFilters);
          }
        }
        if (mask) {
          renderer.maskManager.pushMask(this, this._mask);
        }
        this._renderWebGL(renderer);
        for (var _i2 = 0, j = this.children.length; _i2 < j; _i2++) {
          this.children[_i2].renderWebGL(renderer);
        }
        renderer.flush();
        if (mask) {
          renderer.maskManager.popMask(this, this._mask);
        }
        if (filters && this._enabledFilters && this._enabledFilters.length) {
          renderer.filterManager.popFilter();
        }
      };
      Container2.prototype._renderWebGL = function _renderWebGL(renderer) {
      };
      Container2.prototype._renderCanvas = function _renderCanvas(renderer) {
      };
      Container2.prototype.renderCanvas = function renderCanvas(renderer) {
        if (!this.visible || this.worldAlpha <= 0 || !this.renderable) {
          return;
        }
        if (this._mask) {
          renderer.maskManager.pushMask(this._mask);
        }
        this._renderCanvas(renderer);
        for (var i = 0, j = this.children.length; i < j; ++i) {
          this.children[i].renderCanvas(renderer);
        }
        if (this._mask) {
          renderer.maskManager.popMask(renderer);
        }
      };
      Container2.prototype.destroy = function destroy(options) {
        _DisplayObject.prototype.destroy.call(this);
        var destroyChildren = typeof options === "boolean" ? options : options && options.children;
        var oldChildren = this.removeChildren(0, this.children.length);
        if (destroyChildren) {
          for (var i = 0; i < oldChildren.length; ++i) {
            oldChildren[i].destroy(options);
          }
        }
      };
      _createClass(Container2, [{
        key: "width",
        get: function get() {
          return this.scale.x * this.getLocalBounds().width;
        },
        set: function set(value) {
          var width = this.getLocalBounds().width;
          if (width !== 0) {
            this.scale.x = value / width;
          } else {
            this.scale.x = 1;
          }
          this._width = value;
        }
        /**
         * The height of the Container, setting this will actually modify the scale to achieve the value set
         *
         * @member {number}
         */
      }, {
        key: "height",
        get: function get() {
          return this.scale.y * this.getLocalBounds().height;
        },
        set: function set(value) {
          var height = this.getLocalBounds().height;
          if (height !== 0) {
            this.scale.y = value / height;
          } else {
            this.scale.y = 1;
          }
          this._height = value;
        }
      }]);
      return Container2;
    }(_DisplayObject3.default);
    exports.default = Container;
    Container.prototype.containerUpdateTransform = Container.prototype.updateTransform;
  }
});

// browser-external:url
var require_url = __commonJS({
  "browser-external:url"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "url" has been externalized for browser compatibility. Cannot access "url.${key}" in client code. See http://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// node_modules/pixi.js/lib/core/utils/determineCrossOrigin.js
var require_determineCrossOrigin = __commonJS({
  "node_modules/pixi.js/lib/core/utils/determineCrossOrigin.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.default = determineCrossOrigin;
    var _url2 = require_url();
    var _url3 = _interopRequireDefault(_url2);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var tempAnchor = void 0;
    function determineCrossOrigin(url) {
      var loc = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : window.location;
      if (url.indexOf("data:") === 0) {
        return "";
      }
      loc = loc || window.location;
      if (!tempAnchor) {
        tempAnchor = document.createElement("a");
      }
      tempAnchor.href = url;
      url = _url3.default.parse(tempAnchor.href);
      var samePort = !url.port && loc.port === "" || url.port === loc.port;
      if (url.hostname !== loc.hostname || !samePort || url.protocol !== loc.protocol) {
        return "anonymous";
      }
      return "";
    }
  }
});

// node_modules/bit-twiddle/twiddle.js
var require_twiddle = __commonJS({
  "node_modules/bit-twiddle/twiddle.js"(exports) {
    "use strict";
    "use restrict";
    var INT_BITS = 32;
    exports.INT_BITS = INT_BITS;
    exports.INT_MAX = 2147483647;
    exports.INT_MIN = -1 << INT_BITS - 1;
    exports.sign = function(v) {
      return (v > 0) - (v < 0);
    };
    exports.abs = function(v) {
      var mask = v >> INT_BITS - 1;
      return (v ^ mask) - mask;
    };
    exports.min = function(x, y) {
      return y ^ (x ^ y) & -(x < y);
    };
    exports.max = function(x, y) {
      return x ^ (x ^ y) & -(x < y);
    };
    exports.isPow2 = function(v) {
      return !(v & v - 1) && !!v;
    };
    exports.log2 = function(v) {
      var r, shift;
      r = (v > 65535) << 4;
      v >>>= r;
      shift = (v > 255) << 3;
      v >>>= shift;
      r |= shift;
      shift = (v > 15) << 2;
      v >>>= shift;
      r |= shift;
      shift = (v > 3) << 1;
      v >>>= shift;
      r |= shift;
      return r | v >> 1;
    };
    exports.log10 = function(v) {
      return v >= 1e9 ? 9 : v >= 1e8 ? 8 : v >= 1e7 ? 7 : v >= 1e6 ? 6 : v >= 1e5 ? 5 : v >= 1e4 ? 4 : v >= 1e3 ? 3 : v >= 100 ? 2 : v >= 10 ? 1 : 0;
    };
    exports.popCount = function(v) {
      v = v - (v >>> 1 & 1431655765);
      v = (v & 858993459) + (v >>> 2 & 858993459);
      return (v + (v >>> 4) & 252645135) * 16843009 >>> 24;
    };
    function countTrailingZeros(v) {
      var c = 32;
      v &= -v;
      if (v)
        c--;
      if (v & 65535)
        c -= 16;
      if (v & 16711935)
        c -= 8;
      if (v & 252645135)
        c -= 4;
      if (v & 858993459)
        c -= 2;
      if (v & 1431655765)
        c -= 1;
      return c;
    }
    exports.countTrailingZeros = countTrailingZeros;
    exports.nextPow2 = function(v) {
      v += v === 0;
      --v;
      v |= v >>> 1;
      v |= v >>> 2;
      v |= v >>> 4;
      v |= v >>> 8;
      v |= v >>> 16;
      return v + 1;
    };
    exports.prevPow2 = function(v) {
      v |= v >>> 1;
      v |= v >>> 2;
      v |= v >>> 4;
      v |= v >>> 8;
      v |= v >>> 16;
      return v - (v >>> 1);
    };
    exports.parity = function(v) {
      v ^= v >>> 16;
      v ^= v >>> 8;
      v ^= v >>> 4;
      v &= 15;
      return 27030 >>> v & 1;
    };
    var REVERSE_TABLE = new Array(256);
    (function(tab) {
      for (var i = 0; i < 256; ++i) {
        var v = i, r = i, s = 7;
        for (v >>>= 1; v; v >>>= 1) {
          r <<= 1;
          r |= v & 1;
          --s;
        }
        tab[i] = r << s & 255;
      }
    })(REVERSE_TABLE);
    exports.reverse = function(v) {
      return REVERSE_TABLE[v & 255] << 24 | REVERSE_TABLE[v >>> 8 & 255] << 16 | REVERSE_TABLE[v >>> 16 & 255] << 8 | REVERSE_TABLE[v >>> 24 & 255];
    };
    exports.interleave2 = function(x, y) {
      x &= 65535;
      x = (x | x << 8) & 16711935;
      x = (x | x << 4) & 252645135;
      x = (x | x << 2) & 858993459;
      x = (x | x << 1) & 1431655765;
      y &= 65535;
      y = (y | y << 8) & 16711935;
      y = (y | y << 4) & 252645135;
      y = (y | y << 2) & 858993459;
      y = (y | y << 1) & 1431655765;
      return x | y << 1;
    };
    exports.deinterleave2 = function(v, n) {
      v = v >>> n & 1431655765;
      v = (v | v >>> 1) & 858993459;
      v = (v | v >>> 2) & 252645135;
      v = (v | v >>> 4) & 16711935;
      v = (v | v >>> 16) & 65535;
      return v << 16 >> 16;
    };
    exports.interleave3 = function(x, y, z) {
      x &= 1023;
      x = (x | x << 16) & 4278190335;
      x = (x | x << 8) & 251719695;
      x = (x | x << 4) & 3272356035;
      x = (x | x << 2) & 1227133513;
      y &= 1023;
      y = (y | y << 16) & 4278190335;
      y = (y | y << 8) & 251719695;
      y = (y | y << 4) & 3272356035;
      y = (y | y << 2) & 1227133513;
      x |= y << 1;
      z &= 1023;
      z = (z | z << 16) & 4278190335;
      z = (z | z << 8) & 251719695;
      z = (z | z << 4) & 3272356035;
      z = (z | z << 2) & 1227133513;
      return x | z << 2;
    };
    exports.deinterleave3 = function(v, n) {
      v = v >>> n & 1227133513;
      v = (v | v >>> 2) & 3272356035;
      v = (v | v >>> 4) & 251719695;
      v = (v | v >>> 8) & 4278190335;
      v = (v | v >>> 16) & 1023;
      return v << 22 >> 22;
    };
    exports.nextCombination = function(v) {
      var t = v | v - 1;
      return t + 1 | (~t & -~t) - 1 >>> countTrailingZeros(v) + 1;
    };
  }
});

// node_modules/pixi.js/lib/core/textures/BaseTexture.js
var require_BaseTexture = __commonJS({
  "node_modules/pixi.js/lib/core/textures/BaseTexture.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _utils = require_utils();
    var _settings = require_settings();
    var _settings2 = _interopRequireDefault(_settings);
    var _eventemitter = require_eventemitter3();
    var _eventemitter2 = _interopRequireDefault(_eventemitter);
    var _determineCrossOrigin = require_determineCrossOrigin();
    var _determineCrossOrigin2 = _interopRequireDefault(_determineCrossOrigin);
    var _bitTwiddle = require_twiddle();
    var _bitTwiddle2 = _interopRequireDefault(_bitTwiddle);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var BaseTexture = function(_EventEmitter) {
      _inherits(BaseTexture2, _EventEmitter);
      function BaseTexture2(source, scaleMode, resolution) {
        _classCallCheck(this, BaseTexture2);
        var _this = _possibleConstructorReturn(this, _EventEmitter.call(this));
        _this.uid = (0, _utils.uid)();
        _this.touched = 0;
        _this.resolution = resolution || _settings2.default.RESOLUTION;
        _this.width = 100;
        _this.height = 100;
        _this.realWidth = 100;
        _this.realHeight = 100;
        _this.scaleMode = scaleMode !== void 0 ? scaleMode : _settings2.default.SCALE_MODE;
        _this.hasLoaded = false;
        _this.isLoading = false;
        _this.source = null;
        _this.origSource = null;
        _this.imageType = null;
        _this.sourceScale = 1;
        _this.premultipliedAlpha = true;
        _this.imageUrl = null;
        _this.isPowerOfTwo = false;
        _this.mipmap = _settings2.default.MIPMAP_TEXTURES;
        _this.wrapMode = _settings2.default.WRAP_MODE;
        _this._glTextures = {};
        _this._enabled = 0;
        _this._virtalBoundId = -1;
        _this._destroyed = false;
        _this.textureCacheIds = [];
        if (source) {
          _this.loadSource(source);
        }
        return _this;
      }
      BaseTexture2.prototype.update = function update() {
        if (this.imageType !== "svg") {
          this.realWidth = this.source.naturalWidth || this.source.videoWidth || this.source.width;
          this.realHeight = this.source.naturalHeight || this.source.videoHeight || this.source.height;
          this._updateDimensions();
        }
        this.emit("update", this);
      };
      BaseTexture2.prototype._updateDimensions = function _updateDimensions() {
        this.width = this.realWidth / this.resolution;
        this.height = this.realHeight / this.resolution;
        this.isPowerOfTwo = _bitTwiddle2.default.isPow2(this.realWidth) && _bitTwiddle2.default.isPow2(this.realHeight);
      };
      BaseTexture2.prototype.loadSource = function loadSource(source) {
        var wasLoading = this.isLoading;
        this.hasLoaded = false;
        this.isLoading = false;
        if (wasLoading && this.source) {
          this.source.onload = null;
          this.source.onerror = null;
        }
        var firstSourceLoaded = !this.source;
        this.source = source;
        if ((source.src && source.complete || source.getContext) && source.width && source.height) {
          this._updateImageType();
          if (this.imageType === "svg") {
            this._loadSvgSource();
          } else {
            this._sourceLoaded();
          }
          if (firstSourceLoaded) {
            this.emit("loaded", this);
          }
        } else if (!source.getContext) {
          this.isLoading = true;
          var scope = this;
          source.onload = function() {
            scope._updateImageType();
            source.onload = null;
            source.onerror = null;
            if (!scope.isLoading) {
              return;
            }
            scope.isLoading = false;
            scope._sourceLoaded();
            if (scope.imageType === "svg") {
              scope._loadSvgSource();
              return;
            }
            scope.emit("loaded", scope);
          };
          source.onerror = function() {
            source.onload = null;
            source.onerror = null;
            if (!scope.isLoading) {
              return;
            }
            scope.isLoading = false;
            scope.emit("error", scope);
          };
          if (source.complete && source.src) {
            source.onload = null;
            source.onerror = null;
            if (scope.imageType === "svg") {
              scope._loadSvgSource();
              return;
            }
            this.isLoading = false;
            if (source.width && source.height) {
              this._sourceLoaded();
              if (wasLoading) {
                this.emit("loaded", this);
              }
            } else if (wasLoading) {
              this.emit("error", this);
            }
          }
        }
      };
      BaseTexture2.prototype._updateImageType = function _updateImageType() {
        if (!this.imageUrl) {
          return;
        }
        var dataUri = (0, _utils.decomposeDataUri)(this.imageUrl);
        var imageType = void 0;
        if (dataUri && dataUri.mediaType === "image") {
          var firstSubType = dataUri.subType.split("+")[0];
          imageType = (0, _utils.getUrlFileExtension)("." + firstSubType);
          if (!imageType) {
            throw new Error("Invalid image type in data URI.");
          }
        } else {
          imageType = (0, _utils.getUrlFileExtension)(this.imageUrl);
          if (!imageType) {
            imageType = "png";
          }
        }
        this.imageType = imageType;
      };
      BaseTexture2.prototype._loadSvgSource = function _loadSvgSource() {
        if (this.imageType !== "svg") {
          return;
        }
        var dataUri = (0, _utils.decomposeDataUri)(this.imageUrl);
        if (dataUri) {
          this._loadSvgSourceUsingDataUri(dataUri);
        } else {
          this._loadSvgSourceUsingXhr();
        }
      };
      BaseTexture2.prototype._loadSvgSourceUsingDataUri = function _loadSvgSourceUsingDataUri(dataUri) {
        var svgString = void 0;
        if (dataUri.encoding === "base64") {
          if (!atob) {
            throw new Error("Your browser doesn't support base64 conversions.");
          }
          svgString = atob(dataUri.data);
        } else {
          svgString = dataUri.data;
        }
        this._loadSvgSourceUsingString(svgString);
      };
      BaseTexture2.prototype._loadSvgSourceUsingXhr = function _loadSvgSourceUsingXhr() {
        var _this2 = this;
        var svgXhr = new XMLHttpRequest();
        svgXhr.onload = function() {
          if (svgXhr.readyState !== svgXhr.DONE || svgXhr.status !== 200) {
            throw new Error("Failed to load SVG using XHR.");
          }
          _this2._loadSvgSourceUsingString(svgXhr.response);
        };
        svgXhr.onerror = function() {
          return _this2.emit("error", _this2);
        };
        svgXhr.open("GET", this.imageUrl, true);
        svgXhr.send();
      };
      BaseTexture2.prototype._loadSvgSourceUsingString = function _loadSvgSourceUsingString(svgString) {
        var svgSize = (0, _utils.getSvgSize)(svgString);
        var svgWidth = svgSize.width;
        var svgHeight = svgSize.height;
        if (!svgWidth || !svgHeight) {
          throw new Error("The SVG image must have width and height defined (in pixels), canvas API needs them.");
        }
        this.realWidth = Math.round(svgWidth * this.sourceScale);
        this.realHeight = Math.round(svgHeight * this.sourceScale);
        this._updateDimensions();
        var canvas = document.createElement("canvas");
        canvas.width = this.realWidth;
        canvas.height = this.realHeight;
        canvas._pixiId = "canvas_" + (0, _utils.uid)();
        canvas.getContext("2d").drawImage(this.source, 0, 0, svgWidth, svgHeight, 0, 0, this.realWidth, this.realHeight);
        this.origSource = this.source;
        this.source = canvas;
        BaseTexture2.addToCache(this, canvas._pixiId);
        this.isLoading = false;
        this._sourceLoaded();
        this.emit("loaded", this);
      };
      BaseTexture2.prototype._sourceLoaded = function _sourceLoaded() {
        this.hasLoaded = true;
        this.update();
      };
      BaseTexture2.prototype.destroy = function destroy() {
        if (this.imageUrl) {
          delete _utils.TextureCache[this.imageUrl];
          this.imageUrl = null;
          if (!navigator.isCocoonJS) {
            this.source.src = "";
          }
        }
        this.source = null;
        this.dispose();
        BaseTexture2.removeFromCache(this);
        this.textureCacheIds = null;
        this._destroyed = true;
      };
      BaseTexture2.prototype.dispose = function dispose() {
        this.emit("dispose", this);
      };
      BaseTexture2.prototype.updateSourceImage = function updateSourceImage(newSrc) {
        this.source.src = newSrc;
        this.loadSource(this.source);
      };
      BaseTexture2.fromImage = function fromImage(imageUrl, crossorigin, scaleMode, sourceScale) {
        var baseTexture = _utils.BaseTextureCache[imageUrl];
        if (!baseTexture) {
          var image = new Image();
          if (crossorigin === void 0 && imageUrl.indexOf("data:") !== 0) {
            image.crossOrigin = (0, _determineCrossOrigin2.default)(imageUrl);
          } else if (crossorigin) {
            image.crossOrigin = typeof crossorigin === "string" ? crossorigin : "anonymous";
          }
          baseTexture = new BaseTexture2(image, scaleMode);
          baseTexture.imageUrl = imageUrl;
          if (sourceScale) {
            baseTexture.sourceScale = sourceScale;
          }
          baseTexture.resolution = (0, _utils.getResolutionOfUrl)(imageUrl);
          image.src = imageUrl;
          BaseTexture2.addToCache(baseTexture, imageUrl);
        }
        return baseTexture;
      };
      BaseTexture2.fromCanvas = function fromCanvas(canvas, scaleMode) {
        var origin = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "canvas";
        if (!canvas._pixiId) {
          canvas._pixiId = origin + "_" + (0, _utils.uid)();
        }
        var baseTexture = _utils.BaseTextureCache[canvas._pixiId];
        if (!baseTexture) {
          baseTexture = new BaseTexture2(canvas, scaleMode);
          BaseTexture2.addToCache(baseTexture, canvas._pixiId);
        }
        return baseTexture;
      };
      BaseTexture2.from = function from(source, scaleMode, sourceScale) {
        if (typeof source === "string") {
          return BaseTexture2.fromImage(source, void 0, scaleMode, sourceScale);
        } else if (source instanceof HTMLImageElement) {
          var imageUrl = source.src;
          var baseTexture = _utils.BaseTextureCache[imageUrl];
          if (!baseTexture) {
            baseTexture = new BaseTexture2(source, scaleMode);
            baseTexture.imageUrl = imageUrl;
            if (sourceScale) {
              baseTexture.sourceScale = sourceScale;
            }
            baseTexture.resolution = (0, _utils.getResolutionOfUrl)(imageUrl);
            BaseTexture2.addToCache(baseTexture, imageUrl);
          }
          return baseTexture;
        } else if (source instanceof HTMLCanvasElement) {
          return BaseTexture2.fromCanvas(source, scaleMode);
        }
        return source;
      };
      BaseTexture2.addToCache = function addToCache(baseTexture, id) {
        if (id) {
          if (baseTexture.textureCacheIds.indexOf(id) === -1) {
            baseTexture.textureCacheIds.push(id);
          }
          if (_utils.BaseTextureCache[id]) {
            console.warn("BaseTexture added to the cache with an id [" + id + "] that already had an entry");
          }
          _utils.BaseTextureCache[id] = baseTexture;
        }
      };
      BaseTexture2.removeFromCache = function removeFromCache(baseTexture) {
        if (typeof baseTexture === "string") {
          var baseTextureFromCache = _utils.BaseTextureCache[baseTexture];
          if (baseTextureFromCache) {
            var index = baseTextureFromCache.textureCacheIds.indexOf(baseTexture);
            if (index > -1) {
              baseTextureFromCache.textureCacheIds.splice(index, 1);
            }
            delete _utils.BaseTextureCache[baseTexture];
            return baseTextureFromCache;
          }
        } else if (baseTexture && baseTexture.textureCacheIds) {
          for (var i = 0; i < baseTexture.textureCacheIds.length; ++i) {
            delete _utils.BaseTextureCache[baseTexture.textureCacheIds[i]];
          }
          baseTexture.textureCacheIds.length = 0;
          return baseTexture;
        }
        return null;
      };
      return BaseTexture2;
    }(_eventemitter2.default);
    exports.default = BaseTexture;
  }
});

// node_modules/pixi.js/lib/core/ticker/TickerListener.js
var require_TickerListener = __commonJS({
  "node_modules/pixi.js/lib/core/ticker/TickerListener.js"(exports) {
    "use strict";
    exports.__esModule = true;
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var TickerListener = function() {
      function TickerListener2(fn) {
        var context = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        var priority = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
        var once = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
        _classCallCheck(this, TickerListener2);
        this.fn = fn;
        this.context = context;
        this.priority = priority;
        this.once = once;
        this.next = null;
        this.previous = null;
        this._destroyed = false;
      }
      TickerListener2.prototype.match = function match(fn, context) {
        context = context || null;
        return this.fn === fn && this.context === context;
      };
      TickerListener2.prototype.emit = function emit(deltaTime) {
        if (this.fn) {
          if (this.context) {
            this.fn.call(this.context, deltaTime);
          } else {
            this.fn(deltaTime);
          }
        }
        var redirect = this.next;
        if (this.once) {
          this.destroy(true);
        }
        if (this._destroyed) {
          this.next = null;
        }
        return redirect;
      };
      TickerListener2.prototype.connect = function connect(previous) {
        this.previous = previous;
        if (previous.next) {
          previous.next.previous = this;
        }
        this.next = previous.next;
        previous.next = this;
      };
      TickerListener2.prototype.destroy = function destroy() {
        var hard = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
        this._destroyed = true;
        this.fn = null;
        this.context = null;
        if (this.previous) {
          this.previous.next = this.next;
        }
        if (this.next) {
          this.next.previous = this.previous;
        }
        var redirect = this.next;
        this.next = hard ? null : redirect;
        this.previous = null;
        return redirect;
      };
      return TickerListener2;
    }();
    exports.default = TickerListener;
  }
});

// node_modules/pixi.js/lib/core/ticker/Ticker.js
var require_Ticker = __commonJS({
  "node_modules/pixi.js/lib/core/ticker/Ticker.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _settings = require_settings();
    var _settings2 = _interopRequireDefault(_settings);
    var _const = require_const();
    var _TickerListener = require_TickerListener();
    var _TickerListener2 = _interopRequireDefault(_TickerListener);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var Ticker = function() {
      function Ticker2() {
        var _this = this;
        _classCallCheck(this, Ticker2);
        this._head = new _TickerListener2.default(null, null, Infinity);
        this._requestId = null;
        this._maxElapsedMS = 100;
        this.autoStart = false;
        this.deltaTime = 1;
        this.elapsedMS = 1 / _settings2.default.TARGET_FPMS;
        this.lastTime = -1;
        this.speed = 1;
        this.started = false;
        this._tick = function(time) {
          _this._requestId = null;
          if (_this.started) {
            _this.update(time);
            if (_this.started && _this._requestId === null && _this._head.next) {
              _this._requestId = requestAnimationFrame(_this._tick);
            }
          }
        };
      }
      Ticker2.prototype._requestIfNeeded = function _requestIfNeeded() {
        if (this._requestId === null && this._head.next) {
          this.lastTime = performance.now();
          this._requestId = requestAnimationFrame(this._tick);
        }
      };
      Ticker2.prototype._cancelIfNeeded = function _cancelIfNeeded() {
        if (this._requestId !== null) {
          cancelAnimationFrame(this._requestId);
          this._requestId = null;
        }
      };
      Ticker2.prototype._startIfPossible = function _startIfPossible() {
        if (this.started) {
          this._requestIfNeeded();
        } else if (this.autoStart) {
          this.start();
        }
      };
      Ticker2.prototype.add = function add(fn, context) {
        var priority = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : _const.UPDATE_PRIORITY.NORMAL;
        return this._addListener(new _TickerListener2.default(fn, context, priority));
      };
      Ticker2.prototype.addOnce = function addOnce(fn, context) {
        var priority = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : _const.UPDATE_PRIORITY.NORMAL;
        return this._addListener(new _TickerListener2.default(fn, context, priority, true));
      };
      Ticker2.prototype._addListener = function _addListener(listener) {
        var current = this._head.next;
        var previous = this._head;
        if (!current) {
          listener.connect(previous);
        } else {
          while (current) {
            if (listener.priority > current.priority) {
              listener.connect(previous);
              break;
            }
            previous = current;
            current = current.next;
          }
          if (!listener.previous) {
            listener.connect(previous);
          }
        }
        this._startIfPossible();
        return this;
      };
      Ticker2.prototype.remove = function remove(fn, context) {
        var listener = this._head.next;
        while (listener) {
          if (listener.match(fn, context)) {
            listener = listener.destroy();
          } else {
            listener = listener.next;
          }
        }
        if (!this._head.next) {
          this._cancelIfNeeded();
        }
        return this;
      };
      Ticker2.prototype.start = function start() {
        if (!this.started) {
          this.started = true;
          this._requestIfNeeded();
        }
      };
      Ticker2.prototype.stop = function stop() {
        if (this.started) {
          this.started = false;
          this._cancelIfNeeded();
        }
      };
      Ticker2.prototype.destroy = function destroy() {
        this.stop();
        var listener = this._head.next;
        while (listener) {
          listener = listener.destroy(true);
        }
        this._head.destroy();
        this._head = null;
      };
      Ticker2.prototype.update = function update() {
        var currentTime = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : performance.now();
        var elapsedMS = void 0;
        if (currentTime > this.lastTime) {
          elapsedMS = this.elapsedMS = currentTime - this.lastTime;
          if (elapsedMS > this._maxElapsedMS) {
            elapsedMS = this._maxElapsedMS;
          }
          this.deltaTime = elapsedMS * _settings2.default.TARGET_FPMS * this.speed;
          var head = this._head;
          var listener = head.next;
          while (listener) {
            listener = listener.emit(this.deltaTime);
          }
          if (!head.next) {
            this._cancelIfNeeded();
          }
        } else {
          this.deltaTime = this.elapsedMS = 0;
        }
        this.lastTime = currentTime;
      };
      _createClass(Ticker2, [{
        key: "FPS",
        get: function get() {
          return 1e3 / this.elapsedMS;
        }
        /**
         * Manages the maximum amount of milliseconds allowed to
         * elapse between invoking {@link PIXI.ticker.Ticker#update}.
         * This value is used to cap {@link PIXI.ticker.Ticker#deltaTime},
         * but does not effect the measured value of {@link PIXI.ticker.Ticker#FPS}.
         * When setting this property it is clamped to a value between
         * `0` and `PIXI.settings.TARGET_FPMS * 1000`.
         *
         * @member {number}
         * @default 10
         */
      }, {
        key: "minFPS",
        get: function get() {
          return 1e3 / this._maxElapsedMS;
        },
        set: function set(fps) {
          var minFPMS = Math.min(Math.max(0, fps) / 1e3, _settings2.default.TARGET_FPMS);
          this._maxElapsedMS = 1 / minFPMS;
        }
      }]);
      return Ticker2;
    }();
    exports.default = Ticker;
  }
});

// node_modules/pixi.js/lib/core/ticker/index.js
var require_ticker = __commonJS({
  "node_modules/pixi.js/lib/core/ticker/index.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.Ticker = exports.shared = void 0;
    var _Ticker = require_Ticker();
    var _Ticker2 = _interopRequireDefault(_Ticker);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var shared = new _Ticker2.default();
    shared.autoStart = true;
    shared.destroy = function() {
    };
    exports.shared = shared;
    exports.Ticker = _Ticker2.default;
  }
});

// node_modules/pixi.js/lib/core/textures/VideoBaseTexture.js
var require_VideoBaseTexture = __commonJS({
  "node_modules/pixi.js/lib/core/textures/VideoBaseTexture.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _BaseTexture2 = require_BaseTexture();
    var _BaseTexture3 = _interopRequireDefault(_BaseTexture2);
    var _utils = require_utils();
    var _ticker = require_ticker();
    var _const = require_const();
    var _determineCrossOrigin = require_determineCrossOrigin();
    var _determineCrossOrigin2 = _interopRequireDefault(_determineCrossOrigin);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var VideoBaseTexture = function(_BaseTexture) {
      _inherits(VideoBaseTexture2, _BaseTexture);
      function VideoBaseTexture2(source, scaleMode) {
        var autoPlay = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
        _classCallCheck(this, VideoBaseTexture2);
        if (!source) {
          throw new Error("No video source element specified.");
        }
        if ((source.readyState === source.HAVE_ENOUGH_DATA || source.readyState === source.HAVE_FUTURE_DATA) && source.width && source.height) {
          source.complete = true;
        }
        var _this = _possibleConstructorReturn(this, _BaseTexture.call(this, source, scaleMode));
        _this.width = source.videoWidth;
        _this.height = source.videoHeight;
        _this._autoUpdate = true;
        _this._isAutoUpdating = false;
        _this.autoPlay = autoPlay;
        _this.update = _this.update.bind(_this);
        _this._onCanPlay = _this._onCanPlay.bind(_this);
        source.addEventListener("play", _this._onPlayStart.bind(_this));
        source.addEventListener("pause", _this._onPlayStop.bind(_this));
        _this.hasLoaded = false;
        _this.__loaded = false;
        if (!_this._isSourceReady()) {
          source.addEventListener("canplay", _this._onCanPlay);
          source.addEventListener("canplaythrough", _this._onCanPlay);
        } else {
          _this._onCanPlay();
        }
        return _this;
      }
      VideoBaseTexture2.prototype._isSourcePlaying = function _isSourcePlaying() {
        var source = this.source;
        return source.currentTime > 0 && source.paused === false && source.ended === false && source.readyState > 2;
      };
      VideoBaseTexture2.prototype._isSourceReady = function _isSourceReady() {
        return this.source.readyState === 3 || this.source.readyState === 4;
      };
      VideoBaseTexture2.prototype._onPlayStart = function _onPlayStart() {
        if (!this.hasLoaded) {
          this._onCanPlay();
        }
        if (!this._isAutoUpdating && this.autoUpdate) {
          _ticker.shared.add(this.update, this, _const.UPDATE_PRIORITY.HIGH);
          this._isAutoUpdating = true;
        }
      };
      VideoBaseTexture2.prototype._onPlayStop = function _onPlayStop() {
        if (this._isAutoUpdating) {
          _ticker.shared.remove(this.update, this);
          this._isAutoUpdating = false;
        }
      };
      VideoBaseTexture2.prototype._onCanPlay = function _onCanPlay() {
        this.hasLoaded = true;
        if (this.source) {
          this.source.removeEventListener("canplay", this._onCanPlay);
          this.source.removeEventListener("canplaythrough", this._onCanPlay);
          this.width = this.source.videoWidth;
          this.height = this.source.videoHeight;
          if (!this.__loaded) {
            this.__loaded = true;
            this.emit("loaded", this);
          }
          if (this._isSourcePlaying()) {
            this._onPlayStart();
          } else if (this.autoPlay) {
            this.source.play();
          }
        }
      };
      VideoBaseTexture2.prototype.destroy = function destroy() {
        if (this._isAutoUpdating) {
          _ticker.shared.remove(this.update, this);
        }
        if (this.source && this.source._pixiId) {
          _BaseTexture3.default.removeFromCache(this.source._pixiId);
          delete this.source._pixiId;
          this.source.pause();
          this.source.src = "";
          this.source.load();
        }
        _BaseTexture.prototype.destroy.call(this);
      };
      VideoBaseTexture2.fromVideo = function fromVideo(video, scaleMode, autoPlay) {
        if (!video._pixiId) {
          video._pixiId = "video_" + (0, _utils.uid)();
        }
        var baseTexture = _utils.BaseTextureCache[video._pixiId];
        if (!baseTexture) {
          baseTexture = new VideoBaseTexture2(video, scaleMode, autoPlay);
          _BaseTexture3.default.addToCache(baseTexture, video._pixiId);
        }
        return baseTexture;
      };
      VideoBaseTexture2.fromUrl = function fromUrl(videoSrc, scaleMode, crossorigin, autoPlay) {
        var video = document.createElement("video");
        video.setAttribute("webkit-playsinline", "");
        video.setAttribute("playsinline", "");
        var url = Array.isArray(videoSrc) ? videoSrc[0].src || videoSrc[0] : videoSrc.src || videoSrc;
        if (crossorigin === void 0 && url.indexOf("data:") !== 0) {
          video.crossOrigin = (0, _determineCrossOrigin2.default)(url);
        } else if (crossorigin) {
          video.crossOrigin = typeof crossorigin === "string" ? crossorigin : "anonymous";
        }
        if (Array.isArray(videoSrc)) {
          for (var i = 0; i < videoSrc.length; ++i) {
            video.appendChild(createSource(videoSrc[i].src || videoSrc[i], videoSrc[i].mime));
          }
        } else {
          video.appendChild(createSource(url, videoSrc.mime));
        }
        video.load();
        return VideoBaseTexture2.fromVideo(video, scaleMode, autoPlay);
      };
      _createClass(VideoBaseTexture2, [{
        key: "autoUpdate",
        get: function get() {
          return this._autoUpdate;
        },
        set: function set(value) {
          if (value !== this._autoUpdate) {
            this._autoUpdate = value;
            if (!this._autoUpdate && this._isAutoUpdating) {
              _ticker.shared.remove(this.update, this);
              this._isAutoUpdating = false;
            } else if (this._autoUpdate && !this._isAutoUpdating) {
              _ticker.shared.add(this.update, this, _const.UPDATE_PRIORITY.HIGH);
              this._isAutoUpdating = true;
            }
          }
        }
      }]);
      return VideoBaseTexture2;
    }(_BaseTexture3.default);
    exports.default = VideoBaseTexture;
    VideoBaseTexture.fromUrls = VideoBaseTexture.fromUrl;
    function createSource(path, type) {
      if (!type) {
        var purePath = path.split("?").shift().toLowerCase();
        type = "video/" + purePath.substr(purePath.lastIndexOf(".") + 1);
      }
      var source = document.createElement("source");
      source.src = path;
      source.type = type;
      return source;
    }
  }
});

// node_modules/pixi.js/lib/core/textures/TextureUvs.js
var require_TextureUvs = __commonJS({
  "node_modules/pixi.js/lib/core/textures/TextureUvs.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _GroupD = require_GroupD8();
    var _GroupD2 = _interopRequireDefault(_GroupD);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var TextureUvs = function() {
      function TextureUvs2() {
        _classCallCheck(this, TextureUvs2);
        this.x0 = 0;
        this.y0 = 0;
        this.x1 = 1;
        this.y1 = 0;
        this.x2 = 1;
        this.y2 = 1;
        this.x3 = 0;
        this.y3 = 1;
        this.uvsUint32 = new Uint32Array(4);
      }
      TextureUvs2.prototype.set = function set(frame, baseFrame, rotate) {
        var tw = baseFrame.width;
        var th = baseFrame.height;
        if (rotate) {
          var w2 = frame.width / 2 / tw;
          var h2 = frame.height / 2 / th;
          var cX = frame.x / tw + w2;
          var cY = frame.y / th + h2;
          rotate = _GroupD2.default.add(rotate, _GroupD2.default.NW);
          this.x0 = cX + w2 * _GroupD2.default.uX(rotate);
          this.y0 = cY + h2 * _GroupD2.default.uY(rotate);
          rotate = _GroupD2.default.add(rotate, 2);
          this.x1 = cX + w2 * _GroupD2.default.uX(rotate);
          this.y1 = cY + h2 * _GroupD2.default.uY(rotate);
          rotate = _GroupD2.default.add(rotate, 2);
          this.x2 = cX + w2 * _GroupD2.default.uX(rotate);
          this.y2 = cY + h2 * _GroupD2.default.uY(rotate);
          rotate = _GroupD2.default.add(rotate, 2);
          this.x3 = cX + w2 * _GroupD2.default.uX(rotate);
          this.y3 = cY + h2 * _GroupD2.default.uY(rotate);
        } else {
          this.x0 = frame.x / tw;
          this.y0 = frame.y / th;
          this.x1 = (frame.x + frame.width) / tw;
          this.y1 = frame.y / th;
          this.x2 = (frame.x + frame.width) / tw;
          this.y2 = (frame.y + frame.height) / th;
          this.x3 = frame.x / tw;
          this.y3 = (frame.y + frame.height) / th;
        }
        this.uvsUint32[0] = (Math.round(this.y0 * 65535) & 65535) << 16 | Math.round(this.x0 * 65535) & 65535;
        this.uvsUint32[1] = (Math.round(this.y1 * 65535) & 65535) << 16 | Math.round(this.x1 * 65535) & 65535;
        this.uvsUint32[2] = (Math.round(this.y2 * 65535) & 65535) << 16 | Math.round(this.x2 * 65535) & 65535;
        this.uvsUint32[3] = (Math.round(this.y3 * 65535) & 65535) << 16 | Math.round(this.x3 * 65535) & 65535;
      };
      return TextureUvs2;
    }();
    exports.default = TextureUvs;
  }
});

// node_modules/pixi.js/lib/core/textures/Texture.js
var require_Texture = __commonJS({
  "node_modules/pixi.js/lib/core/textures/Texture.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _BaseTexture = require_BaseTexture();
    var _BaseTexture2 = _interopRequireDefault(_BaseTexture);
    var _VideoBaseTexture = require_VideoBaseTexture();
    var _VideoBaseTexture2 = _interopRequireDefault(_VideoBaseTexture);
    var _TextureUvs = require_TextureUvs();
    var _TextureUvs2 = _interopRequireDefault(_TextureUvs);
    var _eventemitter = require_eventemitter3();
    var _eventemitter2 = _interopRequireDefault(_eventemitter);
    var _math = require_math();
    var _utils = require_utils();
    var _settings = require_settings();
    var _settings2 = _interopRequireDefault(_settings);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var Texture = function(_EventEmitter) {
      _inherits(Texture2, _EventEmitter);
      function Texture2(baseTexture, frame, orig, trim, rotate, anchor) {
        _classCallCheck(this, Texture2);
        var _this = _possibleConstructorReturn(this, _EventEmitter.call(this));
        _this.noFrame = false;
        if (!frame) {
          _this.noFrame = true;
          frame = new _math.Rectangle(0, 0, 1, 1);
        }
        if (baseTexture instanceof Texture2) {
          baseTexture = baseTexture.baseTexture;
        }
        _this.baseTexture = baseTexture;
        _this._frame = frame;
        _this.trim = trim;
        _this.valid = false;
        _this.requiresUpdate = false;
        _this._uvs = null;
        _this.orig = orig || frame;
        _this._rotate = Number(rotate || 0);
        if (rotate === true) {
          _this._rotate = 2;
        } else if (_this._rotate % 2 !== 0) {
          throw new Error("attempt to use diamond-shaped UVs. If you are sure, set rotation manually");
        }
        if (baseTexture.hasLoaded) {
          if (_this.noFrame) {
            frame = new _math.Rectangle(0, 0, baseTexture.width, baseTexture.height);
            baseTexture.on("update", _this.onBaseTextureUpdated, _this);
          }
          _this.frame = frame;
        } else {
          baseTexture.once("loaded", _this.onBaseTextureLoaded, _this);
        }
        _this.defaultAnchor = anchor ? new _math.Point(anchor.x, anchor.y) : new _math.Point(0, 0);
        _this._updateID = 0;
        _this.transform = null;
        _this.textureCacheIds = [];
        return _this;
      }
      Texture2.prototype.update = function update() {
        this.baseTexture.update();
      };
      Texture2.prototype.onBaseTextureLoaded = function onBaseTextureLoaded(baseTexture) {
        this._updateID++;
        if (this.noFrame) {
          this.frame = new _math.Rectangle(0, 0, baseTexture.width, baseTexture.height);
        } else {
          this.frame = this._frame;
        }
        this.baseTexture.on("update", this.onBaseTextureUpdated, this);
        this.emit("update", this);
      };
      Texture2.prototype.onBaseTextureUpdated = function onBaseTextureUpdated(baseTexture) {
        this._updateID++;
        this._frame.width = baseTexture.width;
        this._frame.height = baseTexture.height;
        this.emit("update", this);
      };
      Texture2.prototype.destroy = function destroy(destroyBase) {
        if (this.baseTexture) {
          if (destroyBase) {
            if (_utils.TextureCache[this.baseTexture.imageUrl]) {
              Texture2.removeFromCache(this.baseTexture.imageUrl);
            }
            this.baseTexture.destroy();
          }
          this.baseTexture.off("update", this.onBaseTextureUpdated, this);
          this.baseTexture.off("loaded", this.onBaseTextureLoaded, this);
          this.baseTexture = null;
        }
        this._frame = null;
        this._uvs = null;
        this.trim = null;
        this.orig = null;
        this.valid = false;
        Texture2.removeFromCache(this);
        this.textureCacheIds = null;
      };
      Texture2.prototype.clone = function clone() {
        return new Texture2(this.baseTexture, this.frame, this.orig, this.trim, this.rotate, this.defaultAnchor);
      };
      Texture2.prototype._updateUvs = function _updateUvs() {
        if (!this._uvs) {
          this._uvs = new _TextureUvs2.default();
        }
        this._uvs.set(this._frame, this.baseTexture, this.rotate);
        this._updateID++;
      };
      Texture2.fromImage = function fromImage(imageUrl, crossorigin, scaleMode, sourceScale) {
        var texture = _utils.TextureCache[imageUrl];
        if (!texture) {
          texture = new Texture2(_BaseTexture2.default.fromImage(imageUrl, crossorigin, scaleMode, sourceScale));
          Texture2.addToCache(texture, imageUrl);
        }
        return texture;
      };
      Texture2.fromFrame = function fromFrame(frameId) {
        var texture = _utils.TextureCache[frameId];
        if (!texture) {
          throw new Error('The frameId "' + frameId + '" does not exist in the texture cache');
        }
        return texture;
      };
      Texture2.fromCanvas = function fromCanvas(canvas, scaleMode) {
        var origin = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "canvas";
        return new Texture2(_BaseTexture2.default.fromCanvas(canvas, scaleMode, origin));
      };
      Texture2.fromVideo = function fromVideo(video, scaleMode, crossorigin, autoPlay) {
        if (typeof video === "string") {
          return Texture2.fromVideoUrl(video, scaleMode, crossorigin, autoPlay);
        }
        return new Texture2(_VideoBaseTexture2.default.fromVideo(video, scaleMode, autoPlay));
      };
      Texture2.fromVideoUrl = function fromVideoUrl(videoUrl, scaleMode, crossorigin, autoPlay) {
        return new Texture2(_VideoBaseTexture2.default.fromUrl(videoUrl, scaleMode, crossorigin, autoPlay));
      };
      Texture2.from = function from(source) {
        if (typeof source === "string") {
          var texture = _utils.TextureCache[source];
          if (!texture) {
            var isVideo = source.match(/\.(mp4|webm|ogg|h264|avi|mov)$/) !== null;
            if (isVideo) {
              return Texture2.fromVideoUrl(source);
            }
            return Texture2.fromImage(source);
          }
          return texture;
        } else if (source instanceof HTMLImageElement) {
          return new Texture2(_BaseTexture2.default.from(source));
        } else if (source instanceof HTMLCanvasElement) {
          return Texture2.fromCanvas(source, _settings2.default.SCALE_MODE, "HTMLCanvasElement");
        } else if (source instanceof HTMLVideoElement) {
          return Texture2.fromVideo(source);
        } else if (source instanceof _BaseTexture2.default) {
          return new Texture2(source);
        }
        return source;
      };
      Texture2.fromLoader = function fromLoader(source, imageUrl, name) {
        var baseTexture = new _BaseTexture2.default(source, void 0, (0, _utils.getResolutionOfUrl)(imageUrl));
        var texture = new Texture2(baseTexture);
        baseTexture.imageUrl = imageUrl;
        if (!name) {
          name = imageUrl;
        }
        _BaseTexture2.default.addToCache(texture.baseTexture, name);
        Texture2.addToCache(texture, name);
        if (name !== imageUrl) {
          _BaseTexture2.default.addToCache(texture.baseTexture, imageUrl);
          Texture2.addToCache(texture, imageUrl);
        }
        return texture;
      };
      Texture2.addToCache = function addToCache(texture, id) {
        if (id) {
          if (texture.textureCacheIds.indexOf(id) === -1) {
            texture.textureCacheIds.push(id);
          }
          if (_utils.TextureCache[id]) {
            console.warn("Texture added to the cache with an id [" + id + "] that already had an entry");
          }
          _utils.TextureCache[id] = texture;
        }
      };
      Texture2.removeFromCache = function removeFromCache(texture) {
        if (typeof texture === "string") {
          var textureFromCache = _utils.TextureCache[texture];
          if (textureFromCache) {
            var index = textureFromCache.textureCacheIds.indexOf(texture);
            if (index > -1) {
              textureFromCache.textureCacheIds.splice(index, 1);
            }
            delete _utils.TextureCache[texture];
            return textureFromCache;
          }
        } else if (texture && texture.textureCacheIds) {
          for (var i = 0; i < texture.textureCacheIds.length; ++i) {
            if (_utils.TextureCache[texture.textureCacheIds[i]] === texture) {
              delete _utils.TextureCache[texture.textureCacheIds[i]];
            }
          }
          texture.textureCacheIds.length = 0;
          return texture;
        }
        return null;
      };
      _createClass(Texture2, [{
        key: "frame",
        get: function get() {
          return this._frame;
        },
        set: function set(frame) {
          this._frame = frame;
          this.noFrame = false;
          var x = frame.x, y = frame.y, width = frame.width, height = frame.height;
          var xNotFit = x + width > this.baseTexture.width;
          var yNotFit = y + height > this.baseTexture.height;
          if (xNotFit || yNotFit) {
            var relationship = xNotFit && yNotFit ? "and" : "or";
            var errorX = "X: " + x + " + " + width + " = " + (x + width) + " > " + this.baseTexture.width;
            var errorY = "Y: " + y + " + " + height + " = " + (y + height) + " > " + this.baseTexture.height;
            throw new Error("Texture Error: frame does not fit inside the base Texture dimensions: " + (errorX + " " + relationship + " " + errorY));
          }
          this.valid = width && height && this.baseTexture.hasLoaded;
          if (!this.trim && !this.rotate) {
            this.orig = frame;
          }
          if (this.valid) {
            this._updateUvs();
          }
        }
        /**
         * Indicates whether the texture is rotated inside the atlas
         * set to 2 to compensate for texture packer rotation
         * set to 6 to compensate for spine packer rotation
         * can be used to rotate or mirror sprites
         * See {@link PIXI.GroupD8} for explanation
         *
         * @member {number}
         */
      }, {
        key: "rotate",
        get: function get() {
          return this._rotate;
        },
        set: function set(rotate) {
          this._rotate = rotate;
          if (this.valid) {
            this._updateUvs();
          }
        }
        /**
         * The width of the Texture in pixels.
         *
         * @member {number}
         */
      }, {
        key: "width",
        get: function get() {
          return this.orig.width;
        }
        /**
         * The height of the Texture in pixels.
         *
         * @member {number}
         */
      }, {
        key: "height",
        get: function get() {
          return this.orig.height;
        }
      }]);
      return Texture2;
    }(_eventemitter2.default);
    exports.default = Texture;
    function createWhiteTexture() {
      var canvas = document.createElement("canvas");
      canvas.width = 10;
      canvas.height = 10;
      var context = canvas.getContext("2d");
      context.fillStyle = "white";
      context.fillRect(0, 0, 10, 10);
      return new Texture(new _BaseTexture2.default(canvas));
    }
    function removeAllHandlers(tex) {
      tex.destroy = function _emptyDestroy() {
      };
      tex.on = function _emptyOn() {
      };
      tex.once = function _emptyOnce() {
      };
      tex.emit = function _emptyEmit() {
      };
    }
    Texture.EMPTY = new Texture(new _BaseTexture2.default());
    removeAllHandlers(Texture.EMPTY);
    removeAllHandlers(Texture.EMPTY.baseTexture);
    Texture.WHITE = createWhiteTexture();
    removeAllHandlers(Texture.WHITE);
    removeAllHandlers(Texture.WHITE.baseTexture);
  }
});

// node_modules/pixi.js/lib/core/sprites/Sprite.js
var require_Sprite = __commonJS({
  "node_modules/pixi.js/lib/core/sprites/Sprite.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _math = require_math();
    var _utils = require_utils();
    var _const = require_const();
    var _Texture = require_Texture();
    var _Texture2 = _interopRequireDefault(_Texture);
    var _Container2 = require_Container();
    var _Container3 = _interopRequireDefault(_Container2);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var tempPoint = new _math.Point();
    var Sprite = function(_Container) {
      _inherits(Sprite2, _Container);
      function Sprite2(texture) {
        _classCallCheck(this, Sprite2);
        var _this = _possibleConstructorReturn(this, _Container.call(this));
        _this._anchor = new _math.ObservablePoint(_this._onAnchorUpdate, _this, texture ? texture.defaultAnchor.x : 0, texture ? texture.defaultAnchor.y : 0);
        _this._texture = null;
        _this._width = 0;
        _this._height = 0;
        _this._tint = null;
        _this._tintRGB = null;
        _this.tint = 16777215;
        _this.blendMode = _const.BLEND_MODES.NORMAL;
        _this.shader = null;
        _this.cachedTint = 16777215;
        _this.texture = texture || _Texture2.default.EMPTY;
        _this.vertexData = new Float32Array(8);
        _this.vertexTrimmedData = null;
        _this._transformID = -1;
        _this._textureID = -1;
        _this._transformTrimmedID = -1;
        _this._textureTrimmedID = -1;
        _this.pluginName = "sprite";
        return _this;
      }
      Sprite2.prototype._onTextureUpdate = function _onTextureUpdate() {
        this._textureID = -1;
        this._textureTrimmedID = -1;
        this.cachedTint = 16777215;
        if (this._width) {
          this.scale.x = (0, _utils.sign)(this.scale.x) * this._width / this._texture.orig.width;
        }
        if (this._height) {
          this.scale.y = (0, _utils.sign)(this.scale.y) * this._height / this._texture.orig.height;
        }
      };
      Sprite2.prototype._onAnchorUpdate = function _onAnchorUpdate() {
        this._transformID = -1;
        this._transformTrimmedID = -1;
      };
      Sprite2.prototype.calculateVertices = function calculateVertices() {
        if (this._transformID === this.transform._worldID && this._textureID === this._texture._updateID) {
          return;
        }
        this._transformID = this.transform._worldID;
        this._textureID = this._texture._updateID;
        var texture = this._texture;
        var wt = this.transform.worldTransform;
        var a = wt.a;
        var b = wt.b;
        var c = wt.c;
        var d = wt.d;
        var tx = wt.tx;
        var ty = wt.ty;
        var vertexData = this.vertexData;
        var trim = texture.trim;
        var orig = texture.orig;
        var anchor = this._anchor;
        var w0 = 0;
        var w1 = 0;
        var h0 = 0;
        var h1 = 0;
        if (trim) {
          w1 = trim.x - anchor._x * orig.width;
          w0 = w1 + trim.width;
          h1 = trim.y - anchor._y * orig.height;
          h0 = h1 + trim.height;
        } else {
          w1 = -anchor._x * orig.width;
          w0 = w1 + orig.width;
          h1 = -anchor._y * orig.height;
          h0 = h1 + orig.height;
        }
        vertexData[0] = a * w1 + c * h1 + tx;
        vertexData[1] = d * h1 + b * w1 + ty;
        vertexData[2] = a * w0 + c * h1 + tx;
        vertexData[3] = d * h1 + b * w0 + ty;
        vertexData[4] = a * w0 + c * h0 + tx;
        vertexData[5] = d * h0 + b * w0 + ty;
        vertexData[6] = a * w1 + c * h0 + tx;
        vertexData[7] = d * h0 + b * w1 + ty;
      };
      Sprite2.prototype.calculateTrimmedVertices = function calculateTrimmedVertices() {
        if (!this.vertexTrimmedData) {
          this.vertexTrimmedData = new Float32Array(8);
        } else if (this._transformTrimmedID === this.transform._worldID && this._textureTrimmedID === this._texture._updateID) {
          return;
        }
        this._transformTrimmedID = this.transform._worldID;
        this._textureTrimmedID = this._texture._updateID;
        var texture = this._texture;
        var vertexData = this.vertexTrimmedData;
        var orig = texture.orig;
        var anchor = this._anchor;
        var wt = this.transform.worldTransform;
        var a = wt.a;
        var b = wt.b;
        var c = wt.c;
        var d = wt.d;
        var tx = wt.tx;
        var ty = wt.ty;
        var w1 = -anchor._x * orig.width;
        var w0 = w1 + orig.width;
        var h1 = -anchor._y * orig.height;
        var h0 = h1 + orig.height;
        vertexData[0] = a * w1 + c * h1 + tx;
        vertexData[1] = d * h1 + b * w1 + ty;
        vertexData[2] = a * w0 + c * h1 + tx;
        vertexData[3] = d * h1 + b * w0 + ty;
        vertexData[4] = a * w0 + c * h0 + tx;
        vertexData[5] = d * h0 + b * w0 + ty;
        vertexData[6] = a * w1 + c * h0 + tx;
        vertexData[7] = d * h0 + b * w1 + ty;
      };
      Sprite2.prototype._renderWebGL = function _renderWebGL(renderer) {
        this.calculateVertices();
        renderer.setObjectRenderer(renderer.plugins[this.pluginName]);
        renderer.plugins[this.pluginName].render(this);
      };
      Sprite2.prototype._renderCanvas = function _renderCanvas(renderer) {
        renderer.plugins[this.pluginName].render(this);
      };
      Sprite2.prototype._calculateBounds = function _calculateBounds() {
        var trim = this._texture.trim;
        var orig = this._texture.orig;
        if (!trim || trim.width === orig.width && trim.height === orig.height) {
          this.calculateVertices();
          this._bounds.addQuad(this.vertexData);
        } else {
          this.calculateTrimmedVertices();
          this._bounds.addQuad(this.vertexTrimmedData);
        }
      };
      Sprite2.prototype.getLocalBounds = function getLocalBounds(rect) {
        if (this.children.length === 0) {
          this._bounds.minX = this._texture.orig.width * -this._anchor._x;
          this._bounds.minY = this._texture.orig.height * -this._anchor._y;
          this._bounds.maxX = this._texture.orig.width * (1 - this._anchor._x);
          this._bounds.maxY = this._texture.orig.height * (1 - this._anchor._y);
          if (!rect) {
            if (!this._localBoundsRect) {
              this._localBoundsRect = new _math.Rectangle();
            }
            rect = this._localBoundsRect;
          }
          return this._bounds.getRectangle(rect);
        }
        return _Container.prototype.getLocalBounds.call(this, rect);
      };
      Sprite2.prototype.containsPoint = function containsPoint(point) {
        this.worldTransform.applyInverse(point, tempPoint);
        var width = this._texture.orig.width;
        var height = this._texture.orig.height;
        var x1 = -width * this.anchor.x;
        var y1 = 0;
        if (tempPoint.x >= x1 && tempPoint.x < x1 + width) {
          y1 = -height * this.anchor.y;
          if (tempPoint.y >= y1 && tempPoint.y < y1 + height) {
            return true;
          }
        }
        return false;
      };
      Sprite2.prototype.destroy = function destroy(options) {
        _Container.prototype.destroy.call(this, options);
        this._texture.off("update", this._onTextureUpdate, this);
        this._anchor = null;
        var destroyTexture = typeof options === "boolean" ? options : options && options.texture;
        if (destroyTexture) {
          var destroyBaseTexture = typeof options === "boolean" ? options : options && options.baseTexture;
          this._texture.destroy(!!destroyBaseTexture);
        }
        this._texture = null;
        this.shader = null;
      };
      Sprite2.from = function from(source) {
        return new Sprite2(_Texture2.default.from(source));
      };
      Sprite2.fromFrame = function fromFrame(frameId) {
        var texture = _utils.TextureCache[frameId];
        if (!texture) {
          throw new Error('The frameId "' + frameId + '" does not exist in the texture cache');
        }
        return new Sprite2(texture);
      };
      Sprite2.fromImage = function fromImage(imageId, crossorigin, scaleMode) {
        return new Sprite2(_Texture2.default.fromImage(imageId, crossorigin, scaleMode));
      };
      _createClass(Sprite2, [{
        key: "width",
        get: function get() {
          return Math.abs(this.scale.x) * this._texture.orig.width;
        },
        set: function set(value) {
          var s = (0, _utils.sign)(this.scale.x) || 1;
          this.scale.x = s * value / this._texture.orig.width;
          this._width = value;
        }
        /**
         * The height of the sprite, setting this will actually modify the scale to achieve the value set
         *
         * @member {number}
         */
      }, {
        key: "height",
        get: function get() {
          return Math.abs(this.scale.y) * this._texture.orig.height;
        },
        set: function set(value) {
          var s = (0, _utils.sign)(this.scale.y) || 1;
          this.scale.y = s * value / this._texture.orig.height;
          this._height = value;
        }
        /**
         * The anchor sets the origin point of the texture.
         * The default is 0,0 or taken from the {@link PIXI.Texture|Texture} passed to the constructor.
         * Setting the texture at a later point of time does not change the anchor.
         *
         * 0,0 means the texture's origin is the top left, 0.5,0.5 is the center, 1,1 the bottom right corner.
         *
         * @member {PIXI.ObservablePoint}
         */
      }, {
        key: "anchor",
        get: function get() {
          return this._anchor;
        },
        set: function set(value) {
          this._anchor.copy(value);
        }
        /**
         * The tint applied to the sprite. This is a hex value.
         * A value of 0xFFFFFF will remove any tint effect.
         *
         * @member {number}
         * @default 0xFFFFFF
         */
      }, {
        key: "tint",
        get: function get() {
          return this._tint;
        },
        set: function set(value) {
          this._tint = value;
          this._tintRGB = (value >> 16) + (value & 65280) + ((value & 255) << 16);
        }
        /**
         * The texture that the sprite is using
         *
         * @member {PIXI.Texture}
         */
      }, {
        key: "texture",
        get: function get() {
          return this._texture;
        },
        set: function set(value) {
          if (this._texture === value) {
            return;
          }
          this._texture = value || _Texture2.default.EMPTY;
          this.cachedTint = 16777215;
          this._textureID = -1;
          this._textureTrimmedID = -1;
          if (value) {
            if (value.baseTexture.hasLoaded) {
              this._onTextureUpdate();
            } else {
              value.once("update", this._onTextureUpdate, this);
            }
          }
        }
      }]);
      return Sprite2;
    }(_Container3.default);
    exports.default = Sprite;
  }
});

// node_modules/pixi.js/lib/core/textures/BaseRenderTexture.js
var require_BaseRenderTexture = __commonJS({
  "node_modules/pixi.js/lib/core/textures/BaseRenderTexture.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _BaseTexture2 = require_BaseTexture();
    var _BaseTexture3 = _interopRequireDefault(_BaseTexture2);
    var _settings = require_settings();
    var _settings2 = _interopRequireDefault(_settings);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var BaseRenderTexture = function(_BaseTexture) {
      _inherits(BaseRenderTexture2, _BaseTexture);
      function BaseRenderTexture2() {
        var width = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 100;
        var height = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
        var scaleMode = arguments[2];
        var resolution = arguments[3];
        _classCallCheck(this, BaseRenderTexture2);
        var _this = _possibleConstructorReturn(this, _BaseTexture.call(this, null, scaleMode));
        _this.resolution = resolution || _settings2.default.RESOLUTION;
        _this.width = Math.ceil(width);
        _this.height = Math.ceil(height);
        _this.realWidth = _this.width * _this.resolution;
        _this.realHeight = _this.height * _this.resolution;
        _this.scaleMode = scaleMode !== void 0 ? scaleMode : _settings2.default.SCALE_MODE;
        _this.hasLoaded = true;
        _this._glRenderTargets = {};
        _this._canvasRenderTarget = null;
        _this.valid = false;
        return _this;
      }
      BaseRenderTexture2.prototype.resize = function resize(width, height) {
        width = Math.ceil(width);
        height = Math.ceil(height);
        if (width === this.width && height === this.height) {
          return;
        }
        this.valid = width > 0 && height > 0;
        this.width = width;
        this.height = height;
        this.realWidth = this.width * this.resolution;
        this.realHeight = this.height * this.resolution;
        if (!this.valid) {
          return;
        }
        this.emit("update", this);
      };
      BaseRenderTexture2.prototype.destroy = function destroy() {
        _BaseTexture.prototype.destroy.call(this, true);
        this.renderer = null;
      };
      return BaseRenderTexture2;
    }(_BaseTexture3.default);
    exports.default = BaseRenderTexture;
  }
});

// node_modules/pixi.js/lib/core/textures/RenderTexture.js
var require_RenderTexture = __commonJS({
  "node_modules/pixi.js/lib/core/textures/RenderTexture.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _BaseRenderTexture = require_BaseRenderTexture();
    var _BaseRenderTexture2 = _interopRequireDefault(_BaseRenderTexture);
    var _Texture2 = require_Texture();
    var _Texture3 = _interopRequireDefault(_Texture2);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var RenderTexture = function(_Texture) {
      _inherits(RenderTexture2, _Texture);
      function RenderTexture2(baseRenderTexture, frame) {
        _classCallCheck(this, RenderTexture2);
        var _legacyRenderer = null;
        if (!(baseRenderTexture instanceof _BaseRenderTexture2.default)) {
          var width = arguments[1];
          var height = arguments[2];
          var scaleMode = arguments[3];
          var resolution = arguments[4];
          console.warn("Please use RenderTexture.create(" + width + ", " + height + ") instead of the ctor directly.");
          _legacyRenderer = arguments[0];
          frame = null;
          baseRenderTexture = new _BaseRenderTexture2.default(width, height, scaleMode, resolution);
        }
        var _this = _possibleConstructorReturn(this, _Texture.call(this, baseRenderTexture, frame));
        _this.legacyRenderer = _legacyRenderer;
        _this.valid = true;
        _this._updateUvs();
        return _this;
      }
      RenderTexture2.prototype.resize = function resize(width, height, doNotResizeBaseTexture) {
        width = Math.ceil(width);
        height = Math.ceil(height);
        this.valid = width > 0 && height > 0;
        this._frame.width = this.orig.width = width;
        this._frame.height = this.orig.height = height;
        if (!doNotResizeBaseTexture) {
          this.baseTexture.resize(width, height);
        }
        this._updateUvs();
      };
      RenderTexture2.create = function create(width, height, scaleMode, resolution) {
        return new RenderTexture2(new _BaseRenderTexture2.default(width, height, scaleMode, resolution));
      };
      return RenderTexture2;
    }(_Texture3.default);
    exports.default = RenderTexture;
  }
});

// node_modules/pixi.js/lib/core/renderers/SystemRenderer.js
var require_SystemRenderer = __commonJS({
  "node_modules/pixi.js/lib/core/renderers/SystemRenderer.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _utils = require_utils();
    var _math = require_math();
    var _const = require_const();
    var _settings = require_settings();
    var _settings2 = _interopRequireDefault(_settings);
    var _Container = require_Container();
    var _Container2 = _interopRequireDefault(_Container);
    var _RenderTexture = require_RenderTexture();
    var _RenderTexture2 = _interopRequireDefault(_RenderTexture);
    var _eventemitter = require_eventemitter3();
    var _eventemitter2 = _interopRequireDefault(_eventemitter);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var tempMatrix = new _math.Matrix();
    var SystemRenderer = function(_EventEmitter) {
      _inherits(SystemRenderer2, _EventEmitter);
      function SystemRenderer2(system, options, arg2, arg3) {
        _classCallCheck(this, SystemRenderer2);
        var _this = _possibleConstructorReturn(this, _EventEmitter.call(this));
        (0, _utils.sayHello)(system);
        if (typeof options === "number") {
          options = Object.assign({
            width: options,
            height: arg2 || _settings2.default.RENDER_OPTIONS.height
          }, arg3);
        }
        options = Object.assign({}, _settings2.default.RENDER_OPTIONS, options);
        _this.options = options;
        _this.type = _const.RENDERER_TYPE.UNKNOWN;
        _this.screen = new _math.Rectangle(0, 0, options.width, options.height);
        _this.view = options.view || document.createElement("canvas");
        _this.resolution = options.resolution || _settings2.default.RESOLUTION;
        _this.transparent = options.transparent;
        _this.autoResize = options.autoResize || false;
        _this.blendModes = null;
        _this.preserveDrawingBuffer = options.preserveDrawingBuffer;
        _this.clearBeforeRender = options.clearBeforeRender;
        _this.roundPixels = options.roundPixels;
        _this._backgroundColor = 0;
        _this._backgroundColorRgba = [0, 0, 0, 0];
        _this._backgroundColorString = "#000000";
        _this.backgroundColor = options.backgroundColor || _this._backgroundColor;
        _this._tempDisplayObjectParent = new _Container2.default();
        _this._lastObjectRendered = _this._tempDisplayObjectParent;
        return _this;
      }
      SystemRenderer2.prototype.resize = function resize(screenWidth, screenHeight) {
        this.screen.width = screenWidth;
        this.screen.height = screenHeight;
        this.view.width = screenWidth * this.resolution;
        this.view.height = screenHeight * this.resolution;
        if (this.autoResize) {
          this.view.style.width = screenWidth + "px";
          this.view.style.height = screenHeight + "px";
        }
      };
      SystemRenderer2.prototype.generateTexture = function generateTexture(displayObject, scaleMode, resolution, region) {
        region = region || displayObject.getLocalBounds();
        var renderTexture = _RenderTexture2.default.create(region.width | 0, region.height | 0, scaleMode, resolution);
        tempMatrix.tx = -region.x;
        tempMatrix.ty = -region.y;
        this.render(displayObject, renderTexture, false, tempMatrix, !!displayObject.parent);
        return renderTexture;
      };
      SystemRenderer2.prototype.destroy = function destroy(removeView) {
        if (removeView && this.view.parentNode) {
          this.view.parentNode.removeChild(this.view);
        }
        this.type = _const.RENDERER_TYPE.UNKNOWN;
        this.view = null;
        this.screen = null;
        this.resolution = 0;
        this.transparent = false;
        this.autoResize = false;
        this.blendModes = null;
        this.options = null;
        this.preserveDrawingBuffer = false;
        this.clearBeforeRender = false;
        this.roundPixels = false;
        this._backgroundColor = 0;
        this._backgroundColorRgba = null;
        this._backgroundColorString = null;
        this._tempDisplayObjectParent = null;
        this._lastObjectRendered = null;
      };
      _createClass(SystemRenderer2, [{
        key: "width",
        get: function get() {
          return this.view.width;
        }
        /**
         * Same as view.height, actual number of pixels in the canvas by vertical
         *
         * @member {number}
         * @readonly
         * @default 600
         */
      }, {
        key: "height",
        get: function get() {
          return this.view.height;
        }
      }, {
        key: "backgroundColor",
        get: function get() {
          return this._backgroundColor;
        },
        set: function set(value) {
          this._backgroundColor = value;
          this._backgroundColorString = (0, _utils.hex2string)(value);
          (0, _utils.hex2rgb)(value, this._backgroundColorRgba);
        }
      }]);
      return SystemRenderer2;
    }(_eventemitter2.default);
    exports.default = SystemRenderer;
  }
});

// node_modules/pixi.js/lib/core/renderers/canvas/utils/CanvasMaskManager.js
var require_CanvasMaskManager = __commonJS({
  "node_modules/pixi.js/lib/core/renderers/canvas/utils/CanvasMaskManager.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _const = require_const();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var CanvasMaskManager = function() {
      function CanvasMaskManager2(renderer) {
        _classCallCheck(this, CanvasMaskManager2);
        this.renderer = renderer;
      }
      CanvasMaskManager2.prototype.pushMask = function pushMask(maskData) {
        var renderer = this.renderer;
        renderer.context.save();
        var cacheAlpha = maskData.alpha;
        var transform = maskData.transform.worldTransform;
        var resolution = renderer.resolution;
        renderer.context.setTransform(transform.a * resolution, transform.b * resolution, transform.c * resolution, transform.d * resolution, transform.tx * resolution, transform.ty * resolution);
        if (!maskData._texture) {
          this.renderGraphicsShape(maskData);
          renderer.context.clip();
        }
        maskData.worldAlpha = cacheAlpha;
      };
      CanvasMaskManager2.prototype.renderGraphicsShape = function renderGraphicsShape(graphics) {
        var context = this.renderer.context;
        var len = graphics.graphicsData.length;
        if (len === 0) {
          return;
        }
        context.beginPath();
        for (var i = 0; i < len; i++) {
          var data = graphics.graphicsData[i];
          var shape = data.shape;
          if (data.type === _const.SHAPES.POLY) {
            var points = shape.points;
            var holes = data.holes;
            var outerArea = void 0;
            var innerArea = void 0;
            context.moveTo(points[0], points[1]);
            for (var j = 2; j < points.length; j += 2) {
              context.lineTo(points[j], points[j + 1]);
            }
            if (points[0] === points[points.length - 2] && points[1] === points[points.length - 1]) {
              context.closePath();
            }
            if (holes.length > 0) {
              outerArea = 0;
              for (var _j = 0; _j < points.length; _j += 2) {
                outerArea += points[_j] * points[_j + 3] - points[_j + 1] * points[_j + 2];
              }
              for (var k = 0; k < holes.length; k++) {
                points = holes[k].points;
                innerArea = 0;
                for (var _j2 = 0; _j2 < points.length; _j2 += 2) {
                  innerArea += points[_j2] * points[_j2 + 3] - points[_j2 + 1] * points[_j2 + 2];
                }
                context.moveTo(points[0], points[1]);
                if (innerArea * outerArea < 0) {
                  for (var _j3 = 2; _j3 < points.length; _j3 += 2) {
                    context.lineTo(points[_j3], points[_j3 + 1]);
                  }
                } else {
                  for (var _j4 = points.length - 2; _j4 >= 2; _j4 -= 2) {
                    context.lineTo(points[_j4], points[_j4 + 1]);
                  }
                }
              }
            }
          } else if (data.type === _const.SHAPES.RECT) {
            context.rect(shape.x, shape.y, shape.width, shape.height);
            context.closePath();
          } else if (data.type === _const.SHAPES.CIRC) {
            context.arc(shape.x, shape.y, shape.radius, 0, 2 * Math.PI);
            context.closePath();
          } else if (data.type === _const.SHAPES.ELIP) {
            var w = shape.width * 2;
            var h = shape.height * 2;
            var x = shape.x - w / 2;
            var y = shape.y - h / 2;
            var kappa = 0.5522848;
            var ox = w / 2 * kappa;
            var oy = h / 2 * kappa;
            var xe = x + w;
            var ye = y + h;
            var xm = x + w / 2;
            var ym = y + h / 2;
            context.moveTo(x, ym);
            context.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
            context.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
            context.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
            context.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
            context.closePath();
          } else if (data.type === _const.SHAPES.RREC) {
            var rx = shape.x;
            var ry = shape.y;
            var width = shape.width;
            var height = shape.height;
            var radius = shape.radius;
            var maxRadius = Math.min(width, height) / 2 | 0;
            radius = radius > maxRadius ? maxRadius : radius;
            context.moveTo(rx, ry + radius);
            context.lineTo(rx, ry + height - radius);
            context.quadraticCurveTo(rx, ry + height, rx + radius, ry + height);
            context.lineTo(rx + width - radius, ry + height);
            context.quadraticCurveTo(rx + width, ry + height, rx + width, ry + height - radius);
            context.lineTo(rx + width, ry + radius);
            context.quadraticCurveTo(rx + width, ry, rx + width - radius, ry);
            context.lineTo(rx + radius, ry);
            context.quadraticCurveTo(rx, ry, rx, ry + radius);
            context.closePath();
          }
        }
      };
      CanvasMaskManager2.prototype.popMask = function popMask(renderer) {
        renderer.context.restore();
        renderer.invalidateBlendMode();
      };
      CanvasMaskManager2.prototype.destroy = function destroy() {
      };
      return CanvasMaskManager2;
    }();
    exports.default = CanvasMaskManager;
  }
});

// node_modules/pixi.js/lib/core/renderers/canvas/utils/CanvasRenderTarget.js
var require_CanvasRenderTarget = __commonJS({
  "node_modules/pixi.js/lib/core/renderers/canvas/utils/CanvasRenderTarget.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _settings = require_settings();
    var _settings2 = _interopRequireDefault(_settings);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var CanvasRenderTarget = function() {
      function CanvasRenderTarget2(width, height, resolution) {
        _classCallCheck(this, CanvasRenderTarget2);
        this.canvas = document.createElement("canvas");
        this.context = this.canvas.getContext("2d");
        this.resolution = resolution || _settings2.default.RESOLUTION;
        this.resize(width, height);
      }
      CanvasRenderTarget2.prototype.clear = function clear() {
        this.context.setTransform(1, 0, 0, 1, 0, 0);
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      };
      CanvasRenderTarget2.prototype.resize = function resize(width, height) {
        this.canvas.width = width * this.resolution;
        this.canvas.height = height * this.resolution;
      };
      CanvasRenderTarget2.prototype.destroy = function destroy() {
        this.context = null;
        this.canvas = null;
      };
      _createClass(CanvasRenderTarget2, [{
        key: "width",
        get: function get() {
          return this.canvas.width;
        },
        set: function set(val) {
          this.canvas.width = val;
        }
        /**
         * The height of the canvas buffer in pixels.
         *
         * @member {number}
         */
      }, {
        key: "height",
        get: function get() {
          return this.canvas.height;
        },
        set: function set(val) {
          this.canvas.height = val;
        }
      }]);
      return CanvasRenderTarget2;
    }();
    exports.default = CanvasRenderTarget;
  }
});

// node_modules/pixi.js/lib/core/renderers/canvas/utils/canUseNewCanvasBlendModes.js
var require_canUseNewCanvasBlendModes = __commonJS({
  "node_modules/pixi.js/lib/core/renderers/canvas/utils/canUseNewCanvasBlendModes.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.default = canUseNewCanvasBlendModes;
    function createColoredCanvas(color) {
      var canvas = document.createElement("canvas");
      canvas.width = 6;
      canvas.height = 1;
      var context = canvas.getContext("2d");
      context.fillStyle = color;
      context.fillRect(0, 0, 6, 1);
      return canvas;
    }
    function canUseNewCanvasBlendModes() {
      if (typeof document === "undefined") {
        return false;
      }
      var magenta = createColoredCanvas("#ff00ff");
      var yellow = createColoredCanvas("#ffff00");
      var canvas = document.createElement("canvas");
      canvas.width = 6;
      canvas.height = 1;
      var context = canvas.getContext("2d");
      context.globalCompositeOperation = "multiply";
      context.drawImage(magenta, 0, 0);
      context.drawImage(yellow, 2, 0);
      var imageData = context.getImageData(2, 0, 1, 1);
      if (!imageData) {
        return false;
      }
      var data = imageData.data;
      return data[0] === 255 && data[1] === 0 && data[2] === 0;
    }
  }
});

// node_modules/pixi.js/lib/core/renderers/canvas/utils/mapCanvasBlendModesToPixi.js
var require_mapCanvasBlendModesToPixi = __commonJS({
  "node_modules/pixi.js/lib/core/renderers/canvas/utils/mapCanvasBlendModesToPixi.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.default = mapCanvasBlendModesToPixi;
    var _const = require_const();
    var _canUseNewCanvasBlendModes = require_canUseNewCanvasBlendModes();
    var _canUseNewCanvasBlendModes2 = _interopRequireDefault(_canUseNewCanvasBlendModes);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function mapCanvasBlendModesToPixi() {
      var array = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      if ((0, _canUseNewCanvasBlendModes2.default)()) {
        array[_const.BLEND_MODES.NORMAL] = "source-over";
        array[_const.BLEND_MODES.ADD] = "lighter";
        array[_const.BLEND_MODES.MULTIPLY] = "multiply";
        array[_const.BLEND_MODES.SCREEN] = "screen";
        array[_const.BLEND_MODES.OVERLAY] = "overlay";
        array[_const.BLEND_MODES.DARKEN] = "darken";
        array[_const.BLEND_MODES.LIGHTEN] = "lighten";
        array[_const.BLEND_MODES.COLOR_DODGE] = "color-dodge";
        array[_const.BLEND_MODES.COLOR_BURN] = "color-burn";
        array[_const.BLEND_MODES.HARD_LIGHT] = "hard-light";
        array[_const.BLEND_MODES.SOFT_LIGHT] = "soft-light";
        array[_const.BLEND_MODES.DIFFERENCE] = "difference";
        array[_const.BLEND_MODES.EXCLUSION] = "exclusion";
        array[_const.BLEND_MODES.HUE] = "hue";
        array[_const.BLEND_MODES.SATURATION] = "saturate";
        array[_const.BLEND_MODES.COLOR] = "color";
        array[_const.BLEND_MODES.LUMINOSITY] = "luminosity";
      } else {
        array[_const.BLEND_MODES.NORMAL] = "source-over";
        array[_const.BLEND_MODES.ADD] = "lighter";
        array[_const.BLEND_MODES.MULTIPLY] = "source-over";
        array[_const.BLEND_MODES.SCREEN] = "source-over";
        array[_const.BLEND_MODES.OVERLAY] = "source-over";
        array[_const.BLEND_MODES.DARKEN] = "source-over";
        array[_const.BLEND_MODES.LIGHTEN] = "source-over";
        array[_const.BLEND_MODES.COLOR_DODGE] = "source-over";
        array[_const.BLEND_MODES.COLOR_BURN] = "source-over";
        array[_const.BLEND_MODES.HARD_LIGHT] = "source-over";
        array[_const.BLEND_MODES.SOFT_LIGHT] = "source-over";
        array[_const.BLEND_MODES.DIFFERENCE] = "source-over";
        array[_const.BLEND_MODES.EXCLUSION] = "source-over";
        array[_const.BLEND_MODES.HUE] = "source-over";
        array[_const.BLEND_MODES.SATURATION] = "source-over";
        array[_const.BLEND_MODES.COLOR] = "source-over";
        array[_const.BLEND_MODES.LUMINOSITY] = "source-over";
      }
      array[_const.BLEND_MODES.NORMAL_NPM] = array[_const.BLEND_MODES.NORMAL];
      array[_const.BLEND_MODES.ADD_NPM] = array[_const.BLEND_MODES.ADD];
      array[_const.BLEND_MODES.SCREEN_NPM] = array[_const.BLEND_MODES.SCREEN];
      return array;
    }
  }
});

// node_modules/pixi.js/lib/core/renderers/canvas/CanvasRenderer.js
var require_CanvasRenderer = __commonJS({
  "node_modules/pixi.js/lib/core/renderers/canvas/CanvasRenderer.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _SystemRenderer2 = require_SystemRenderer();
    var _SystemRenderer3 = _interopRequireDefault(_SystemRenderer2);
    var _CanvasMaskManager = require_CanvasMaskManager();
    var _CanvasMaskManager2 = _interopRequireDefault(_CanvasMaskManager);
    var _CanvasRenderTarget = require_CanvasRenderTarget();
    var _CanvasRenderTarget2 = _interopRequireDefault(_CanvasRenderTarget);
    var _mapCanvasBlendModesToPixi = require_mapCanvasBlendModesToPixi();
    var _mapCanvasBlendModesToPixi2 = _interopRequireDefault(_mapCanvasBlendModesToPixi);
    var _utils = require_utils();
    var _const = require_const();
    var _settings = require_settings();
    var _settings2 = _interopRequireDefault(_settings);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var CanvasRenderer = function(_SystemRenderer) {
      _inherits(CanvasRenderer2, _SystemRenderer);
      function CanvasRenderer2(options, arg2, arg3) {
        _classCallCheck(this, CanvasRenderer2);
        var _this = _possibleConstructorReturn(this, _SystemRenderer.call(this, "Canvas", options, arg2, arg3));
        _this.type = _const.RENDERER_TYPE.CANVAS;
        _this.rootContext = _this.view.getContext("2d", { alpha: _this.transparent });
        _this.context = _this.rootContext;
        _this.refresh = true;
        _this.maskManager = new _CanvasMaskManager2.default(_this);
        _this.smoothProperty = "imageSmoothingEnabled";
        if (!_this.rootContext.imageSmoothingEnabled) {
          if (_this.rootContext.webkitImageSmoothingEnabled) {
            _this.smoothProperty = "webkitImageSmoothingEnabled";
          } else if (_this.rootContext.mozImageSmoothingEnabled) {
            _this.smoothProperty = "mozImageSmoothingEnabled";
          } else if (_this.rootContext.oImageSmoothingEnabled) {
            _this.smoothProperty = "oImageSmoothingEnabled";
          } else if (_this.rootContext.msImageSmoothingEnabled) {
            _this.smoothProperty = "msImageSmoothingEnabled";
          }
        }
        _this.initPlugins();
        _this.blendModes = (0, _mapCanvasBlendModesToPixi2.default)();
        _this._activeBlendMode = null;
        _this.renderingToScreen = false;
        _this.resize(_this.options.width, _this.options.height);
        return _this;
      }
      CanvasRenderer2.prototype.render = function render(displayObject, renderTexture, clear, transform, skipUpdateTransform) {
        if (!this.view) {
          return;
        }
        this.renderingToScreen = !renderTexture;
        this.emit("prerender");
        var rootResolution = this.resolution;
        if (renderTexture) {
          renderTexture = renderTexture.baseTexture || renderTexture;
          if (!renderTexture._canvasRenderTarget) {
            renderTexture._canvasRenderTarget = new _CanvasRenderTarget2.default(renderTexture.width, renderTexture.height, renderTexture.resolution);
            renderTexture.source = renderTexture._canvasRenderTarget.canvas;
            renderTexture.valid = true;
          }
          this.context = renderTexture._canvasRenderTarget.context;
          this.resolution = renderTexture._canvasRenderTarget.resolution;
        } else {
          this.context = this.rootContext;
        }
        var context = this.context;
        if (!renderTexture) {
          this._lastObjectRendered = displayObject;
        }
        if (!skipUpdateTransform) {
          var cacheParent = displayObject.parent;
          var tempWt = this._tempDisplayObjectParent.transform.worldTransform;
          if (transform) {
            transform.copy(tempWt);
            this._tempDisplayObjectParent.transform._worldID = -1;
          } else {
            tempWt.identity();
          }
          displayObject.parent = this._tempDisplayObjectParent;
          displayObject.updateTransform();
          displayObject.parent = cacheParent;
        }
        context.save();
        context.setTransform(1, 0, 0, 1, 0, 0);
        context.globalAlpha = 1;
        this._activeBlendMode = _const.BLEND_MODES.NORMAL;
        context.globalCompositeOperation = this.blendModes[_const.BLEND_MODES.NORMAL];
        if (navigator.isCocoonJS && this.view.screencanvas) {
          context.fillStyle = "black";
          context.clear();
        }
        if (clear !== void 0 ? clear : this.clearBeforeRender) {
          if (this.renderingToScreen) {
            if (this.transparent) {
              context.clearRect(0, 0, this.width, this.height);
            } else {
              context.fillStyle = this._backgroundColorString;
              context.fillRect(0, 0, this.width, this.height);
            }
          }
        }
        var tempContext = this.context;
        this.context = context;
        displayObject.renderCanvas(this);
        this.context = tempContext;
        context.restore();
        this.resolution = rootResolution;
        this.emit("postrender");
      };
      CanvasRenderer2.prototype.clear = function clear(clearColor) {
        var context = this.context;
        clearColor = clearColor || this._backgroundColorString;
        if (!this.transparent && clearColor) {
          context.fillStyle = clearColor;
          context.fillRect(0, 0, this.width, this.height);
        } else {
          context.clearRect(0, 0, this.width, this.height);
        }
      };
      CanvasRenderer2.prototype.setBlendMode = function setBlendMode(blendMode) {
        if (this._activeBlendMode === blendMode) {
          return;
        }
        this._activeBlendMode = blendMode;
        this.context.globalCompositeOperation = this.blendModes[blendMode];
      };
      CanvasRenderer2.prototype.destroy = function destroy(removeView) {
        this.destroyPlugins();
        _SystemRenderer.prototype.destroy.call(this, removeView);
        this.context = null;
        this.refresh = true;
        this.maskManager.destroy();
        this.maskManager = null;
        this.smoothProperty = null;
      };
      CanvasRenderer2.prototype.resize = function resize(screenWidth, screenHeight) {
        _SystemRenderer.prototype.resize.call(this, screenWidth, screenHeight);
        if (this.smoothProperty) {
          this.rootContext[this.smoothProperty] = _settings2.default.SCALE_MODE === _const.SCALE_MODES.LINEAR;
        }
      };
      CanvasRenderer2.prototype.invalidateBlendMode = function invalidateBlendMode() {
        this._activeBlendMode = this.blendModes.indexOf(this.context.globalCompositeOperation);
      };
      return CanvasRenderer2;
    }(_SystemRenderer3.default);
    exports.default = CanvasRenderer;
    _utils.pluginTarget.mixin(CanvasRenderer);
  }
});

// node_modules/pixi.js/lib/core/sprites/canvas/CanvasTinter.js
var require_CanvasTinter = __commonJS({
  "node_modules/pixi.js/lib/core/sprites/canvas/CanvasTinter.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _utils = require_utils();
    var _canUseNewCanvasBlendModes = require_canUseNewCanvasBlendModes();
    var _canUseNewCanvasBlendModes2 = _interopRequireDefault(_canUseNewCanvasBlendModes);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var CanvasTinter = {
      /**
       * Basically this method just needs a sprite and a color and tints the sprite with the given color.
       *
       * @memberof PIXI.CanvasTinter
       * @param {PIXI.Sprite} sprite - the sprite to tint
       * @param {number} color - the color to use to tint the sprite with
       * @return {HTMLCanvasElement} The tinted canvas
       */
      getTintedTexture: function getTintedTexture(sprite, color) {
        var texture = sprite._texture;
        color = CanvasTinter.roundColor(color);
        var stringColor = "#" + ("00000" + (color | 0).toString(16)).substr(-6);
        texture.tintCache = texture.tintCache || {};
        var cachedTexture = texture.tintCache[stringColor];
        var canvas = void 0;
        if (cachedTexture) {
          if (cachedTexture.tintId === texture._updateID) {
            return texture.tintCache[stringColor];
          }
          canvas = texture.tintCache[stringColor];
        } else {
          canvas = CanvasTinter.canvas || document.createElement("canvas");
        }
        CanvasTinter.tintMethod(texture, color, canvas);
        canvas.tintId = texture._updateID;
        if (CanvasTinter.convertTintToImage) {
          var tintImage = new Image();
          tintImage.src = canvas.toDataURL();
          texture.tintCache[stringColor] = tintImage;
        } else {
          texture.tintCache[stringColor] = canvas;
          CanvasTinter.canvas = null;
        }
        return canvas;
      },
      /**
       * Tint a texture using the 'multiply' operation.
       *
       * @memberof PIXI.CanvasTinter
       * @param {PIXI.Texture} texture - the texture to tint
       * @param {number} color - the color to use to tint the sprite with
       * @param {HTMLCanvasElement} canvas - the current canvas
       */
      tintWithMultiply: function tintWithMultiply(texture, color, canvas) {
        var context = canvas.getContext("2d");
        var crop = texture._frame.clone();
        var resolution = texture.baseTexture.resolution;
        crop.x *= resolution;
        crop.y *= resolution;
        crop.width *= resolution;
        crop.height *= resolution;
        canvas.width = Math.ceil(crop.width);
        canvas.height = Math.ceil(crop.height);
        context.save();
        context.fillStyle = "#" + ("00000" + (color | 0).toString(16)).substr(-6);
        context.fillRect(0, 0, crop.width, crop.height);
        context.globalCompositeOperation = "multiply";
        context.drawImage(texture.baseTexture.source, crop.x, crop.y, crop.width, crop.height, 0, 0, crop.width, crop.height);
        context.globalCompositeOperation = "destination-atop";
        context.drawImage(texture.baseTexture.source, crop.x, crop.y, crop.width, crop.height, 0, 0, crop.width, crop.height);
        context.restore();
      },
      /**
       * Tint a texture using the 'overlay' operation.
       *
       * @memberof PIXI.CanvasTinter
       * @param {PIXI.Texture} texture - the texture to tint
       * @param {number} color - the color to use to tint the sprite with
       * @param {HTMLCanvasElement} canvas - the current canvas
       */
      tintWithOverlay: function tintWithOverlay(texture, color, canvas) {
        var context = canvas.getContext("2d");
        var crop = texture._frame.clone();
        var resolution = texture.baseTexture.resolution;
        crop.x *= resolution;
        crop.y *= resolution;
        crop.width *= resolution;
        crop.height *= resolution;
        canvas.width = Math.ceil(crop.width);
        canvas.height = Math.ceil(crop.height);
        context.save();
        context.globalCompositeOperation = "copy";
        context.fillStyle = "#" + ("00000" + (color | 0).toString(16)).substr(-6);
        context.fillRect(0, 0, crop.width, crop.height);
        context.globalCompositeOperation = "destination-atop";
        context.drawImage(texture.baseTexture.source, crop.x, crop.y, crop.width, crop.height, 0, 0, crop.width, crop.height);
        context.restore();
      },
      /**
       * Tint a texture pixel per pixel.
       *
       * @memberof PIXI.CanvasTinter
       * @param {PIXI.Texture} texture - the texture to tint
       * @param {number} color - the color to use to tint the sprite with
       * @param {HTMLCanvasElement} canvas - the current canvas
       */
      tintWithPerPixel: function tintWithPerPixel(texture, color, canvas) {
        var context = canvas.getContext("2d");
        var crop = texture._frame.clone();
        var resolution = texture.baseTexture.resolution;
        crop.x *= resolution;
        crop.y *= resolution;
        crop.width *= resolution;
        crop.height *= resolution;
        canvas.width = Math.ceil(crop.width);
        canvas.height = Math.ceil(crop.height);
        context.save();
        context.globalCompositeOperation = "copy";
        context.drawImage(texture.baseTexture.source, crop.x, crop.y, crop.width, crop.height, 0, 0, crop.width, crop.height);
        context.restore();
        var rgbValues = (0, _utils.hex2rgb)(color);
        var r = rgbValues[0];
        var g = rgbValues[1];
        var b = rgbValues[2];
        var pixelData = context.getImageData(0, 0, crop.width, crop.height);
        var pixels = pixelData.data;
        for (var i = 0; i < pixels.length; i += 4) {
          pixels[i + 0] *= r;
          pixels[i + 1] *= g;
          pixels[i + 2] *= b;
        }
        context.putImageData(pixelData, 0, 0);
      },
      /**
       * Rounds the specified color according to the CanvasTinter.cacheStepsPerColorChannel.
       *
       * @memberof PIXI.CanvasTinter
       * @param {number} color - the color to round, should be a hex color
       * @return {number} The rounded color.
       */
      roundColor: function roundColor(color) {
        var step = CanvasTinter.cacheStepsPerColorChannel;
        var rgbValues = (0, _utils.hex2rgb)(color);
        rgbValues[0] = Math.min(255, rgbValues[0] / step * step);
        rgbValues[1] = Math.min(255, rgbValues[1] / step * step);
        rgbValues[2] = Math.min(255, rgbValues[2] / step * step);
        return (0, _utils.rgb2hex)(rgbValues);
      },
      /**
       * Number of steps which will be used as a cap when rounding colors.
       *
       * @memberof PIXI.CanvasTinter
       * @type {number}
       */
      cacheStepsPerColorChannel: 8,
      /**
       * Tint cache boolean flag.
       *
       * @memberof PIXI.CanvasTinter
       * @type {boolean}
       */
      convertTintToImage: false,
      /**
       * Whether or not the Canvas BlendModes are supported, consequently the ability to tint using the multiply method.
       *
       * @memberof PIXI.CanvasTinter
       * @type {boolean}
       */
      canUseMultiply: (0, _canUseNewCanvasBlendModes2.default)(),
      /**
       * The tinting method that will be used.
       *
       * @memberof PIXI.CanvasTinter
       * @type {tintMethodFunctionType}
       */
      tintMethod: 0
    };
    CanvasTinter.tintMethod = CanvasTinter.canUseMultiply ? CanvasTinter.tintWithMultiply : CanvasTinter.tintWithPerPixel;
    exports.default = CanvasTinter;
  }
});

// node_modules/pixi.js/lib/core/sprites/canvas/CanvasSpriteRenderer.js
var require_CanvasSpriteRenderer = __commonJS({
  "node_modules/pixi.js/lib/core/sprites/canvas/CanvasSpriteRenderer.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _CanvasRenderer = require_CanvasRenderer();
    var _CanvasRenderer2 = _interopRequireDefault(_CanvasRenderer);
    var _const = require_const();
    var _math = require_math();
    var _CanvasTinter = require_CanvasTinter();
    var _CanvasTinter2 = _interopRequireDefault(_CanvasTinter);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var canvasRenderWorldTransform = new _math.Matrix();
    var CanvasSpriteRenderer = function() {
      function CanvasSpriteRenderer2(renderer) {
        _classCallCheck(this, CanvasSpriteRenderer2);
        this.renderer = renderer;
      }
      CanvasSpriteRenderer2.prototype.render = function render(sprite) {
        var texture = sprite._texture;
        var renderer = this.renderer;
        var width = texture._frame.width;
        var height = texture._frame.height;
        var wt = sprite.transform.worldTransform;
        var dx = 0;
        var dy = 0;
        if (texture.orig.width <= 0 || texture.orig.height <= 0 || !texture.baseTexture.source) {
          return;
        }
        renderer.setBlendMode(sprite.blendMode);
        if (texture.valid) {
          renderer.context.globalAlpha = sprite.worldAlpha;
          var smoothingEnabled = texture.baseTexture.scaleMode === _const.SCALE_MODES.LINEAR;
          if (renderer.smoothProperty && renderer.context[renderer.smoothProperty] !== smoothingEnabled) {
            renderer.context[renderer.smoothProperty] = smoothingEnabled;
          }
          if (texture.trim) {
            dx = texture.trim.width / 2 + texture.trim.x - sprite.anchor.x * texture.orig.width;
            dy = texture.trim.height / 2 + texture.trim.y - sprite.anchor.y * texture.orig.height;
          } else {
            dx = (0.5 - sprite.anchor.x) * texture.orig.width;
            dy = (0.5 - sprite.anchor.y) * texture.orig.height;
          }
          if (texture.rotate) {
            wt.copy(canvasRenderWorldTransform);
            wt = canvasRenderWorldTransform;
            _math.GroupD8.matrixAppendRotationInv(wt, texture.rotate, dx, dy);
            dx = 0;
            dy = 0;
          }
          dx -= width / 2;
          dy -= height / 2;
          if (renderer.roundPixels) {
            renderer.context.setTransform(wt.a, wt.b, wt.c, wt.d, wt.tx * renderer.resolution | 0, wt.ty * renderer.resolution | 0);
            dx = dx | 0;
            dy = dy | 0;
          } else {
            renderer.context.setTransform(wt.a, wt.b, wt.c, wt.d, wt.tx * renderer.resolution, wt.ty * renderer.resolution);
          }
          var resolution = texture.baseTexture.resolution;
          if (sprite.tint !== 16777215) {
            if (sprite.cachedTint !== sprite.tint || sprite.tintedTexture.tintId !== sprite._texture._updateID) {
              sprite.cachedTint = sprite.tint;
              sprite.tintedTexture = _CanvasTinter2.default.getTintedTexture(sprite, sprite.tint);
            }
            renderer.context.drawImage(sprite.tintedTexture, 0, 0, width * resolution, height * resolution, dx * renderer.resolution, dy * renderer.resolution, width * renderer.resolution, height * renderer.resolution);
          } else {
            renderer.context.drawImage(texture.baseTexture.source, texture._frame.x * resolution, texture._frame.y * resolution, width * resolution, height * resolution, dx * renderer.resolution, dy * renderer.resolution, width * renderer.resolution, height * renderer.resolution);
          }
        }
      };
      CanvasSpriteRenderer2.prototype.destroy = function destroy() {
        this.renderer = null;
      };
      return CanvasSpriteRenderer2;
    }();
    exports.default = CanvasSpriteRenderer;
    _CanvasRenderer2.default.registerPlugin("sprite", CanvasSpriteRenderer);
  }
});

// node_modules/pixi.js/lib/core/renderers/webgl/managers/WebGLManager.js
var require_WebGLManager = __commonJS({
  "node_modules/pixi.js/lib/core/renderers/webgl/managers/WebGLManager.js"(exports) {
    "use strict";
    exports.__esModule = true;
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var WebGLManager = function() {
      function WebGLManager2(renderer) {
        _classCallCheck(this, WebGLManager2);
        this.renderer = renderer;
        this.renderer.on("context", this.onContextChange, this);
      }
      WebGLManager2.prototype.onContextChange = function onContextChange() {
      };
      WebGLManager2.prototype.destroy = function destroy() {
        this.renderer.off("context", this.onContextChange, this);
        this.renderer = null;
      };
      return WebGLManager2;
    }();
    exports.default = WebGLManager;
  }
});

// node_modules/pixi.js/lib/core/renderers/webgl/utils/ObjectRenderer.js
var require_ObjectRenderer = __commonJS({
  "node_modules/pixi.js/lib/core/renderers/webgl/utils/ObjectRenderer.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _WebGLManager2 = require_WebGLManager();
    var _WebGLManager3 = _interopRequireDefault(_WebGLManager2);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var ObjectRenderer = function(_WebGLManager) {
      _inherits(ObjectRenderer2, _WebGLManager);
      function ObjectRenderer2() {
        _classCallCheck(this, ObjectRenderer2);
        return _possibleConstructorReturn(this, _WebGLManager.apply(this, arguments));
      }
      ObjectRenderer2.prototype.start = function start() {
      };
      ObjectRenderer2.prototype.stop = function stop() {
        this.flush();
      };
      ObjectRenderer2.prototype.flush = function flush() {
      };
      ObjectRenderer2.prototype.render = function render(object) {
      };
      return ObjectRenderer2;
    }(_WebGLManager3.default);
    exports.default = ObjectRenderer;
  }
});

// node_modules/pixi.js/lib/core/renderers/webgl/filters/extractUniformsFromSrc.js
var require_extractUniformsFromSrc = __commonJS({
  "node_modules/pixi.js/lib/core/renderers/webgl/filters/extractUniformsFromSrc.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.default = extractUniformsFromSrc;
    var _pixiGlCore = require_src();
    var _pixiGlCore2 = _interopRequireDefault(_pixiGlCore);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var defaultValue = _pixiGlCore2.default.shader.defaultValue;
    function extractUniformsFromSrc(vertexSrc, fragmentSrc, mask) {
      var vertUniforms = extractUniformsFromString(vertexSrc, mask);
      var fragUniforms = extractUniformsFromString(fragmentSrc, mask);
      return Object.assign(vertUniforms, fragUniforms);
    }
    function extractUniformsFromString(string) {
      var maskRegex = new RegExp("^(projectionMatrix|uSampler|filterArea|filterClamp)$");
      var uniforms = {};
      var nameSplit = void 0;
      var lines = string.replace(/\s+/g, " ").split(/\s*;\s*/);
      for (var i = 0; i < lines.length; i++) {
        var line = lines[i].trim();
        if (line.indexOf("uniform") > -1) {
          var splitLine = line.split(" ");
          var type = splitLine[1];
          var name = splitLine[2];
          var size = 1;
          if (name.indexOf("[") > -1) {
            nameSplit = name.split(/\[|]/);
            name = nameSplit[0];
            size *= Number(nameSplit[1]);
          }
          if (!name.match(maskRegex)) {
            uniforms[name] = {
              value: defaultValue(type, size),
              name,
              type
            };
          }
        }
      }
      return uniforms;
    }
  }
});

// node_modules/pixi.js/lib/core/renderers/webgl/filters/Filter.js
var require_Filter = __commonJS({
  "node_modules/pixi.js/lib/core/renderers/webgl/filters/Filter.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _extractUniformsFromSrc = require_extractUniformsFromSrc();
    var _extractUniformsFromSrc2 = _interopRequireDefault(_extractUniformsFromSrc);
    var _utils = require_utils();
    var _const = require_const();
    var _settings = require_settings();
    var _settings2 = _interopRequireDefault(_settings);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var SOURCE_KEY_MAP = {};
    var Filter = function() {
      function Filter2(vertexSrc, fragmentSrc, uniformData) {
        _classCallCheck(this, Filter2);
        this.vertexSrc = vertexSrc || Filter2.defaultVertexSrc;
        this.fragmentSrc = fragmentSrc || Filter2.defaultFragmentSrc;
        this._blendMode = _const.BLEND_MODES.NORMAL;
        this.uniformData = uniformData || (0, _extractUniformsFromSrc2.default)(this.vertexSrc, this.fragmentSrc, "projectionMatrix|uSampler");
        this.uniforms = {};
        for (var i in this.uniformData) {
          this.uniforms[i] = this.uniformData[i].value;
          if (this.uniformData[i].type) {
            this.uniformData[i].type = this.uniformData[i].type.toLowerCase();
          }
        }
        this.glShaders = {};
        if (!SOURCE_KEY_MAP[this.vertexSrc + this.fragmentSrc]) {
          SOURCE_KEY_MAP[this.vertexSrc + this.fragmentSrc] = (0, _utils.uid)();
        }
        this.glShaderKey = SOURCE_KEY_MAP[this.vertexSrc + this.fragmentSrc];
        this.padding = 4;
        this.resolution = _settings2.default.FILTER_RESOLUTION;
        this.enabled = true;
        this.autoFit = true;
      }
      Filter2.prototype.apply = function apply(filterManager, input, output, clear, currentState) {
        filterManager.applyFilter(this, input, output, clear);
      };
      _createClass(Filter2, [{
        key: "blendMode",
        get: function get() {
          return this._blendMode;
        },
        set: function set(value) {
          this._blendMode = value;
        }
        /**
         * The default vertex shader source
         *
         * @static
         * @constant
         */
      }], [{
        key: "defaultVertexSrc",
        get: function get() {
          return ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "uniform mat3 projectionMatrix;", "uniform mat3 filterMatrix;", "varying vec2 vTextureCoord;", "varying vec2 vFilterCoord;", "void main(void){", "   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);", "   vFilterCoord = ( filterMatrix * vec3( aTextureCoord, 1.0)  ).xy;", "   vTextureCoord = aTextureCoord ;", "}"].join("\n");
        }
        /**
         * The default fragment shader source
         *
         * @static
         * @constant
         */
      }, {
        key: "defaultFragmentSrc",
        get: function get() {
          return [
            "varying vec2 vTextureCoord;",
            "varying vec2 vFilterCoord;",
            "uniform sampler2D uSampler;",
            "uniform sampler2D filterSampler;",
            "void main(void){",
            "   vec4 masky = texture2D(filterSampler, vFilterCoord);",
            "   vec4 sample = texture2D(uSampler, vTextureCoord);",
            "   vec4 color;",
            "   if(mod(vFilterCoord.x, 1.0) > 0.5)",
            "   {",
            "     color = vec4(1.0, 0.0, 0.0, 1.0);",
            "   }",
            "   else",
            "   {",
            "     color = vec4(0.0, 1.0, 0.0, 1.0);",
            "   }",
            // '   gl_FragColor = vec4(mod(vFilterCoord.x, 1.5), vFilterCoord.y,0.0,1.0);',
            "   gl_FragColor = mix(sample, masky, 0.5);",
            "   gl_FragColor *= sample.a;",
            "}"
          ].join("\n");
        }
      }]);
      return Filter2;
    }();
    exports.default = Filter;
  }
});

// browser-external:path
var require_path = __commonJS({
  "browser-external:path"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "path" has been externalized for browser compatibility. Cannot access "path.${key}" in client code. See http://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// node_modules/pixi.js/lib/core/textures/TextureMatrix.js
var require_TextureMatrix = __commonJS({
  "node_modules/pixi.js/lib/core/textures/TextureMatrix.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _Matrix = require_Matrix();
    var _Matrix2 = _interopRequireDefault(_Matrix);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var tempMat = new _Matrix2.default();
    var TextureMatrix = function() {
      function TextureMatrix2(texture, clampMargin) {
        _classCallCheck(this, TextureMatrix2);
        this._texture = texture;
        this.mapCoord = new _Matrix2.default();
        this.uClampFrame = new Float32Array(4);
        this.uClampOffset = new Float32Array(2);
        this._lastTextureID = -1;
        this.clampOffset = 0;
        this.clampMargin = typeof clampMargin === "undefined" ? 0.5 : clampMargin;
      }
      TextureMatrix2.prototype.multiplyUvs = function multiplyUvs(uvs, out) {
        if (out === void 0) {
          out = uvs;
        }
        var mat = this.mapCoord;
        for (var i = 0; i < uvs.length; i += 2) {
          var x = uvs[i];
          var y = uvs[i + 1];
          out[i] = x * mat.a + y * mat.c + mat.tx;
          out[i + 1] = x * mat.b + y * mat.d + mat.ty;
        }
        return out;
      };
      TextureMatrix2.prototype.update = function update(forceUpdate) {
        var tex = this._texture;
        if (!tex || !tex.valid) {
          return false;
        }
        if (!forceUpdate && this._lastTextureID === tex._updateID) {
          return false;
        }
        this._lastTextureID = tex._updateID;
        var uvs = tex._uvs;
        this.mapCoord.set(uvs.x1 - uvs.x0, uvs.y1 - uvs.y0, uvs.x3 - uvs.x0, uvs.y3 - uvs.y0, uvs.x0, uvs.y0);
        var orig = tex.orig;
        var trim = tex.trim;
        if (trim) {
          tempMat.set(orig.width / trim.width, 0, 0, orig.height / trim.height, -trim.x / trim.width, -trim.y / trim.height);
          this.mapCoord.append(tempMat);
        }
        var texBase = tex.baseTexture;
        var frame = this.uClampFrame;
        var margin = this.clampMargin / texBase.resolution;
        var offset = this.clampOffset;
        frame[0] = (tex._frame.x + margin + offset) / texBase.width;
        frame[1] = (tex._frame.y + margin + offset) / texBase.height;
        frame[2] = (tex._frame.x + tex._frame.width - margin + offset) / texBase.width;
        frame[3] = (tex._frame.y + tex._frame.height - margin + offset) / texBase.height;
        this.uClampOffset[0] = offset / texBase.realWidth;
        this.uClampOffset[1] = offset / texBase.realHeight;
        return true;
      };
      _createClass(TextureMatrix2, [{
        key: "texture",
        get: function get() {
          return this._texture;
        },
        set: function set(value) {
          this._texture = value;
          this._lastTextureID = -1;
        }
      }]);
      return TextureMatrix2;
    }();
    exports.default = TextureMatrix;
  }
});

// node_modules/pixi.js/lib/core/renderers/webgl/filters/spriteMask/SpriteMaskFilter.js
var require_SpriteMaskFilter = __commonJS({
  "node_modules/pixi.js/lib/core/renderers/webgl/filters/spriteMask/SpriteMaskFilter.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _Filter2 = require_Filter();
    var _Filter3 = _interopRequireDefault(_Filter2);
    var _math = require_math();
    var _path = require_path();
    var _TextureMatrix = require_TextureMatrix();
    var _TextureMatrix2 = _interopRequireDefault(_TextureMatrix);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var SpriteMaskFilter = function(_Filter) {
      _inherits(SpriteMaskFilter2, _Filter);
      function SpriteMaskFilter2(sprite) {
        _classCallCheck(this, SpriteMaskFilter2);
        var maskMatrix = new _math.Matrix();
        var _this = _possibleConstructorReturn(this, _Filter.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n}\n", "varying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform sampler2D mask;\nuniform float alpha;\nuniform vec4 maskClamp;\n\nvoid main(void)\n{\n    float clip = step(3.5,\n        step(maskClamp.x, vMaskCoord.x) +\n        step(maskClamp.y, vMaskCoord.y) +\n        step(vMaskCoord.x, maskClamp.z) +\n        step(vMaskCoord.y, maskClamp.w));\n\n    vec4 original = texture2D(uSampler, vTextureCoord);\n    vec4 masky = texture2D(mask, vMaskCoord);\n\n    original *= (masky.r * masky.a * alpha * clip);\n\n    gl_FragColor = original;\n}\n"));
        sprite.renderable = false;
        _this.maskSprite = sprite;
        _this.maskMatrix = maskMatrix;
        return _this;
      }
      SpriteMaskFilter2.prototype.apply = function apply(filterManager, input, output, clear) {
        var maskSprite = this.maskSprite;
        var tex = this.maskSprite.texture;
        if (!tex.valid) {
          return;
        }
        if (!tex.transform) {
          tex.transform = new _TextureMatrix2.default(tex, 0);
        }
        tex.transform.update();
        this.uniforms.mask = tex;
        this.uniforms.otherMatrix = filterManager.calculateSpriteMatrix(this.maskMatrix, maskSprite).prepend(tex.transform.mapCoord);
        this.uniforms.alpha = maskSprite.worldAlpha;
        this.uniforms.maskClamp = tex.transform.uClampFrame;
        filterManager.applyFilter(this, input, output, clear);
      };
      return SpriteMaskFilter2;
    }(_Filter3.default);
    exports.default = SpriteMaskFilter;
  }
});

// node_modules/pixi.js/lib/core/renderers/webgl/managers/MaskManager.js
var require_MaskManager = __commonJS({
  "node_modules/pixi.js/lib/core/renderers/webgl/managers/MaskManager.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _WebGLManager2 = require_WebGLManager();
    var _WebGLManager3 = _interopRequireDefault(_WebGLManager2);
    var _SpriteMaskFilter = require_SpriteMaskFilter();
    var _SpriteMaskFilter2 = _interopRequireDefault(_SpriteMaskFilter);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var MaskManager = function(_WebGLManager) {
      _inherits(MaskManager2, _WebGLManager);
      function MaskManager2(renderer) {
        _classCallCheck(this, MaskManager2);
        var _this = _possibleConstructorReturn(this, _WebGLManager.call(this, renderer));
        _this.scissor = false;
        _this.scissorData = null;
        _this.scissorRenderTarget = null;
        _this.enableScissor = true;
        _this.alphaMaskPool = [];
        _this.alphaMaskIndex = 0;
        return _this;
      }
      MaskManager2.prototype.pushMask = function pushMask(target, maskData) {
        if (maskData.texture) {
          this.pushSpriteMask(target, maskData);
        } else if (this.enableScissor && !this.scissor && this.renderer._activeRenderTarget.root && !this.renderer.stencilManager.stencilMaskStack.length && maskData.isFastRect()) {
          var matrix = maskData.worldTransform;
          var rot = Math.atan2(matrix.b, matrix.a);
          rot = Math.round(rot * (180 / Math.PI));
          if (rot % 90) {
            this.pushStencilMask(maskData);
          } else {
            this.pushScissorMask(target, maskData);
          }
        } else {
          this.pushStencilMask(maskData);
        }
      };
      MaskManager2.prototype.popMask = function popMask(target, maskData) {
        if (maskData.texture) {
          this.popSpriteMask(target, maskData);
        } else if (this.enableScissor && !this.renderer.stencilManager.stencilMaskStack.length) {
          this.popScissorMask(target, maskData);
        } else {
          this.popStencilMask(target, maskData);
        }
      };
      MaskManager2.prototype.pushSpriteMask = function pushSpriteMask(target, maskData) {
        var alphaMaskFilter = this.alphaMaskPool[this.alphaMaskIndex];
        if (!alphaMaskFilter) {
          alphaMaskFilter = this.alphaMaskPool[this.alphaMaskIndex] = [new _SpriteMaskFilter2.default(maskData)];
        }
        alphaMaskFilter[0].resolution = this.renderer.resolution;
        alphaMaskFilter[0].maskSprite = maskData;
        var stashFilterArea = target.filterArea;
        target.filterArea = maskData.getBounds(true);
        this.renderer.filterManager.pushFilter(target, alphaMaskFilter);
        target.filterArea = stashFilterArea;
        this.alphaMaskIndex++;
      };
      MaskManager2.prototype.popSpriteMask = function popSpriteMask() {
        this.renderer.filterManager.popFilter();
        this.alphaMaskIndex--;
      };
      MaskManager2.prototype.pushStencilMask = function pushStencilMask(maskData) {
        this.renderer.currentRenderer.stop();
        this.renderer.stencilManager.pushStencil(maskData);
      };
      MaskManager2.prototype.popStencilMask = function popStencilMask() {
        this.renderer.currentRenderer.stop();
        this.renderer.stencilManager.popStencil();
      };
      MaskManager2.prototype.pushScissorMask = function pushScissorMask(target, maskData) {
        maskData.renderable = true;
        var renderTarget = this.renderer._activeRenderTarget;
        var bounds = maskData.getBounds();
        bounds.fit(renderTarget.size);
        maskData.renderable = false;
        this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST);
        var resolution = this.renderer.resolution;
        this.renderer.gl.scissor(bounds.x * resolution, (renderTarget.root ? renderTarget.size.height - bounds.y - bounds.height : bounds.y) * resolution, bounds.width * resolution, bounds.height * resolution);
        this.scissorRenderTarget = renderTarget;
        this.scissorData = maskData;
        this.scissor = true;
      };
      MaskManager2.prototype.popScissorMask = function popScissorMask() {
        this.scissorRenderTarget = null;
        this.scissorData = null;
        this.scissor = false;
        var gl2 = this.renderer.gl;
        gl2.disable(gl2.SCISSOR_TEST);
      };
      return MaskManager2;
    }(_WebGLManager3.default);
    exports.default = MaskManager;
  }
});

// node_modules/pixi.js/lib/core/renderers/webgl/managers/StencilManager.js
var require_StencilManager = __commonJS({
  "node_modules/pixi.js/lib/core/renderers/webgl/managers/StencilManager.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _WebGLManager2 = require_WebGLManager();
    var _WebGLManager3 = _interopRequireDefault(_WebGLManager2);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var StencilManager = function(_WebGLManager) {
      _inherits(StencilManager2, _WebGLManager);
      function StencilManager2(renderer) {
        _classCallCheck(this, StencilManager2);
        var _this = _possibleConstructorReturn(this, _WebGLManager.call(this, renderer));
        _this.stencilMaskStack = null;
        return _this;
      }
      StencilManager2.prototype.setMaskStack = function setMaskStack(stencilMaskStack) {
        this.stencilMaskStack = stencilMaskStack;
        var gl2 = this.renderer.gl;
        if (stencilMaskStack.length === 0) {
          gl2.disable(gl2.STENCIL_TEST);
        } else {
          gl2.enable(gl2.STENCIL_TEST);
        }
      };
      StencilManager2.prototype.pushStencil = function pushStencil(graphics) {
        this.renderer.setObjectRenderer(this.renderer.plugins.graphics);
        this.renderer._activeRenderTarget.attachStencilBuffer();
        var gl2 = this.renderer.gl;
        var prevMaskCount = this.stencilMaskStack.length;
        if (prevMaskCount === 0) {
          gl2.enable(gl2.STENCIL_TEST);
        }
        this.stencilMaskStack.push(graphics);
        gl2.colorMask(false, false, false, false);
        gl2.stencilFunc(gl2.EQUAL, prevMaskCount, this._getBitwiseMask());
        gl2.stencilOp(gl2.KEEP, gl2.KEEP, gl2.INCR);
        this.renderer.plugins.graphics.render(graphics);
        this._useCurrent();
      };
      StencilManager2.prototype.popStencil = function popStencil() {
        this.renderer.setObjectRenderer(this.renderer.plugins.graphics);
        var gl2 = this.renderer.gl;
        var graphics = this.stencilMaskStack.pop();
        if (this.stencilMaskStack.length === 0) {
          gl2.disable(gl2.STENCIL_TEST);
          gl2.clear(gl2.STENCIL_BUFFER_BIT);
          gl2.clearStencil(0);
        } else {
          gl2.colorMask(false, false, false, false);
          gl2.stencilOp(gl2.KEEP, gl2.KEEP, gl2.DECR);
          this.renderer.plugins.graphics.render(graphics);
          this._useCurrent();
        }
      };
      StencilManager2.prototype._useCurrent = function _useCurrent() {
        var gl2 = this.renderer.gl;
        gl2.colorMask(true, true, true, true);
        gl2.stencilFunc(gl2.EQUAL, this.stencilMaskStack.length, this._getBitwiseMask());
        gl2.stencilOp(gl2.KEEP, gl2.KEEP, gl2.KEEP);
      };
      StencilManager2.prototype._getBitwiseMask = function _getBitwiseMask() {
        return (1 << this.stencilMaskStack.length) - 1;
      };
      StencilManager2.prototype.destroy = function destroy() {
        _WebGLManager3.default.prototype.destroy.call(this);
        this.stencilMaskStack.stencilStack = null;
      };
      return StencilManager2;
    }(_WebGLManager3.default);
    exports.default = StencilManager;
  }
});

// node_modules/pixi.js/lib/core/renderers/webgl/utils/RenderTarget.js
var require_RenderTarget = __commonJS({
  "node_modules/pixi.js/lib/core/renderers/webgl/utils/RenderTarget.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _math = require_math();
    var _const = require_const();
    var _settings = require_settings();
    var _settings2 = _interopRequireDefault(_settings);
    var _pixiGlCore = require_src();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var RenderTarget = function() {
      function RenderTarget2(gl2, width, height, scaleMode, resolution, root) {
        _classCallCheck(this, RenderTarget2);
        this.gl = gl2;
        this.frameBuffer = null;
        this.texture = null;
        this.clearColor = [0, 0, 0, 0];
        this.size = new _math.Rectangle(0, 0, 1, 1);
        this.resolution = resolution || _settings2.default.RESOLUTION;
        this.projectionMatrix = new _math.Matrix();
        this.transform = null;
        this.frame = null;
        this.defaultFrame = new _math.Rectangle();
        this.destinationFrame = null;
        this.sourceFrame = null;
        this.stencilBuffer = null;
        this.stencilMaskStack = [];
        this.filterData = null;
        this.filterPoolKey = "";
        this.scaleMode = scaleMode !== void 0 ? scaleMode : _settings2.default.SCALE_MODE;
        this.root = root || false;
        if (!this.root) {
          this.frameBuffer = _pixiGlCore.GLFramebuffer.createRGBA(gl2, 100, 100);
          if (this.scaleMode === _const.SCALE_MODES.NEAREST) {
            this.frameBuffer.texture.enableNearestScaling();
          } else {
            this.frameBuffer.texture.enableLinearScaling();
          }
          this.texture = this.frameBuffer.texture;
        } else {
          this.frameBuffer = new _pixiGlCore.GLFramebuffer(gl2, 100, 100);
          this.frameBuffer.framebuffer = null;
        }
        this.setFrame();
        this.resize(width, height);
      }
      RenderTarget2.prototype.clear = function clear(clearColor) {
        var cc = clearColor || this.clearColor;
        this.frameBuffer.clear(cc[0], cc[1], cc[2], cc[3]);
      };
      RenderTarget2.prototype.attachStencilBuffer = function attachStencilBuffer() {
        if (!this.root) {
          this.frameBuffer.enableStencil();
        }
      };
      RenderTarget2.prototype.setFrame = function setFrame(destinationFrame, sourceFrame) {
        this.destinationFrame = destinationFrame || this.destinationFrame || this.defaultFrame;
        this.sourceFrame = sourceFrame || this.sourceFrame || this.destinationFrame;
      };
      RenderTarget2.prototype.activate = function activate() {
        var gl2 = this.gl;
        this.frameBuffer.bind();
        this.calculateProjection(this.destinationFrame, this.sourceFrame);
        if (this.transform) {
          this.projectionMatrix.append(this.transform);
        }
        if (this.destinationFrame !== this.sourceFrame) {
          gl2.enable(gl2.SCISSOR_TEST);
          gl2.scissor(this.destinationFrame.x | 0, this.destinationFrame.y | 0, this.destinationFrame.width * this.resolution | 0, this.destinationFrame.height * this.resolution | 0);
        } else {
          gl2.disable(gl2.SCISSOR_TEST);
        }
        gl2.viewport(this.destinationFrame.x | 0, this.destinationFrame.y | 0, this.destinationFrame.width * this.resolution | 0, this.destinationFrame.height * this.resolution | 0);
      };
      RenderTarget2.prototype.calculateProjection = function calculateProjection(destinationFrame, sourceFrame) {
        var pm = this.projectionMatrix;
        sourceFrame = sourceFrame || destinationFrame;
        pm.identity();
        if (!this.root) {
          pm.a = 1 / destinationFrame.width * 2;
          pm.d = 1 / destinationFrame.height * 2;
          pm.tx = -1 - sourceFrame.x * pm.a;
          pm.ty = -1 - sourceFrame.y * pm.d;
        } else {
          pm.a = 1 / destinationFrame.width * 2;
          pm.d = -1 / destinationFrame.height * 2;
          pm.tx = -1 - sourceFrame.x * pm.a;
          pm.ty = 1 - sourceFrame.y * pm.d;
        }
      };
      RenderTarget2.prototype.resize = function resize(width, height) {
        width = width | 0;
        height = height | 0;
        if (this.size.width === width && this.size.height === height) {
          return;
        }
        this.size.width = width;
        this.size.height = height;
        this.defaultFrame.width = width;
        this.defaultFrame.height = height;
        this.frameBuffer.resize(width * this.resolution, height * this.resolution);
        var projectionFrame = this.frame || this.size;
        this.calculateProjection(projectionFrame);
      };
      RenderTarget2.prototype.destroy = function destroy() {
        if (this.frameBuffer.stencil) {
          this.gl.deleteRenderbuffer(this.frameBuffer.stencil);
        }
        this.frameBuffer.destroy();
        this.frameBuffer = null;
        this.texture = null;
      };
      return RenderTarget2;
    }();
    exports.default = RenderTarget;
  }
});

// node_modules/pixi.js/lib/core/utils/createIndicesForQuads.js
var require_createIndicesForQuads = __commonJS({
  "node_modules/pixi.js/lib/core/utils/createIndicesForQuads.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.default = createIndicesForQuads;
    function createIndicesForQuads(size) {
      var totalIndices = size * 6;
      var indices = new Uint16Array(totalIndices);
      for (var i = 0, j = 0; i < totalIndices; i += 6, j += 4) {
        indices[i + 0] = j + 0;
        indices[i + 1] = j + 1;
        indices[i + 2] = j + 2;
        indices[i + 3] = j + 0;
        indices[i + 4] = j + 2;
        indices[i + 5] = j + 3;
      }
      return indices;
    }
  }
});

// node_modules/pixi.js/lib/core/renderers/webgl/utils/Quad.js
var require_Quad = __commonJS({
  "node_modules/pixi.js/lib/core/renderers/webgl/utils/Quad.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _pixiGlCore = require_src();
    var _pixiGlCore2 = _interopRequireDefault(_pixiGlCore);
    var _createIndicesForQuads = require_createIndicesForQuads();
    var _createIndicesForQuads2 = _interopRequireDefault(_createIndicesForQuads);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var Quad = function() {
      function Quad2(gl2, state) {
        _classCallCheck(this, Quad2);
        this.gl = gl2;
        this.vertices = new Float32Array([-1, -1, 1, -1, 1, 1, -1, 1]);
        this.uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]);
        this.interleaved = new Float32Array(8 * 2);
        for (var i = 0; i < 4; i++) {
          this.interleaved[i * 4] = this.vertices[i * 2];
          this.interleaved[i * 4 + 1] = this.vertices[i * 2 + 1];
          this.interleaved[i * 4 + 2] = this.uvs[i * 2];
          this.interleaved[i * 4 + 3] = this.uvs[i * 2 + 1];
        }
        this.indices = (0, _createIndicesForQuads2.default)(1);
        this.vertexBuffer = _pixiGlCore2.default.GLBuffer.createVertexBuffer(gl2, this.interleaved, gl2.STATIC_DRAW);
        this.indexBuffer = _pixiGlCore2.default.GLBuffer.createIndexBuffer(gl2, this.indices, gl2.STATIC_DRAW);
        this.vao = new _pixiGlCore2.default.VertexArrayObject(gl2, state);
      }
      Quad2.prototype.initVao = function initVao(shader) {
        this.vao.clear().addIndex(this.indexBuffer).addAttribute(this.vertexBuffer, shader.attributes.aVertexPosition, this.gl.FLOAT, false, 4 * 4, 0).addAttribute(this.vertexBuffer, shader.attributes.aTextureCoord, this.gl.FLOAT, false, 4 * 4, 2 * 4);
      };
      Quad2.prototype.map = function map(targetTextureFrame, destinationFrame) {
        var x = 0;
        var y = 0;
        this.uvs[0] = x;
        this.uvs[1] = y;
        this.uvs[2] = x + destinationFrame.width / targetTextureFrame.width;
        this.uvs[3] = y;
        this.uvs[4] = x + destinationFrame.width / targetTextureFrame.width;
        this.uvs[5] = y + destinationFrame.height / targetTextureFrame.height;
        this.uvs[6] = x;
        this.uvs[7] = y + destinationFrame.height / targetTextureFrame.height;
        x = destinationFrame.x;
        y = destinationFrame.y;
        this.vertices[0] = x;
        this.vertices[1] = y;
        this.vertices[2] = x + destinationFrame.width;
        this.vertices[3] = y;
        this.vertices[4] = x + destinationFrame.width;
        this.vertices[5] = y + destinationFrame.height;
        this.vertices[6] = x;
        this.vertices[7] = y + destinationFrame.height;
        return this;
      };
      Quad2.prototype.upload = function upload() {
        for (var i = 0; i < 4; i++) {
          this.interleaved[i * 4] = this.vertices[i * 2];
          this.interleaved[i * 4 + 1] = this.vertices[i * 2 + 1];
          this.interleaved[i * 4 + 2] = this.uvs[i * 2];
          this.interleaved[i * 4 + 3] = this.uvs[i * 2 + 1];
        }
        this.vertexBuffer.upload(this.interleaved);
        return this;
      };
      Quad2.prototype.destroy = function destroy() {
        var gl2 = this.gl;
        gl2.deleteBuffer(this.vertexBuffer);
        gl2.deleteBuffer(this.indexBuffer);
      };
      return Quad2;
    }();
    exports.default = Quad;
  }
});

// node_modules/pixi.js/lib/core/Shader.js
var require_Shader = __commonJS({
  "node_modules/pixi.js/lib/core/Shader.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _pixiGlCore = require_src();
    var _settings = require_settings();
    var _settings2 = _interopRequireDefault(_settings);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    function checkPrecision(src, def) {
      if (src instanceof Array) {
        if (src[0].substring(0, 9) !== "precision") {
          var copy = src.slice(0);
          copy.unshift("precision " + def + " float;");
          return copy;
        }
      } else if (src.trim().substring(0, 9) !== "precision") {
        return "precision " + def + " float;\n" + src;
      }
      return src;
    }
    var Shader = function(_GLShader) {
      _inherits(Shader2, _GLShader);
      function Shader2(gl2, vertexSrc, fragmentSrc, attributeLocations, precision) {
        _classCallCheck(this, Shader2);
        return _possibleConstructorReturn(this, _GLShader.call(this, gl2, checkPrecision(vertexSrc, precision || _settings2.default.PRECISION_VERTEX), checkPrecision(fragmentSrc, precision || _settings2.default.PRECISION_FRAGMENT), void 0, attributeLocations));
      }
      return Shader2;
    }(_pixiGlCore.GLShader);
    exports.default = Shader;
  }
});

// node_modules/pixi.js/lib/core/renderers/webgl/filters/filterTransforms.js
var require_filterTransforms = __commonJS({
  "node_modules/pixi.js/lib/core/renderers/webgl/filters/filterTransforms.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.calculateScreenSpaceMatrix = calculateScreenSpaceMatrix;
    exports.calculateNormalizedScreenSpaceMatrix = calculateNormalizedScreenSpaceMatrix;
    exports.calculateSpriteMatrix = calculateSpriteMatrix;
    var _math = require_math();
    function calculateScreenSpaceMatrix(outputMatrix, filterArea, textureSize) {
      var mappedMatrix = outputMatrix.identity();
      mappedMatrix.translate(filterArea.x / textureSize.width, filterArea.y / textureSize.height);
      mappedMatrix.scale(textureSize.width, textureSize.height);
      return mappedMatrix;
    }
    function calculateNormalizedScreenSpaceMatrix(outputMatrix, filterArea, textureSize) {
      var mappedMatrix = outputMatrix.identity();
      mappedMatrix.translate(filterArea.x / textureSize.width, filterArea.y / textureSize.height);
      var translateScaleX = textureSize.width / filterArea.width;
      var translateScaleY = textureSize.height / filterArea.height;
      mappedMatrix.scale(translateScaleX, translateScaleY);
      return mappedMatrix;
    }
    function calculateSpriteMatrix(outputMatrix, filterArea, textureSize, sprite) {
      var orig = sprite._texture.orig;
      var mappedMatrix = outputMatrix.set(textureSize.width, 0, 0, textureSize.height, filterArea.x, filterArea.y);
      var worldTransform = sprite.worldTransform.copy(_math.Matrix.TEMP_MATRIX);
      worldTransform.invert();
      mappedMatrix.prepend(worldTransform);
      mappedMatrix.scale(1 / orig.width, 1 / orig.height);
      mappedMatrix.translate(sprite.anchor.x, sprite.anchor.y);
      return mappedMatrix;
    }
  }
});

// node_modules/pixi.js/lib/core/renderers/webgl/managers/FilterManager.js
var require_FilterManager = __commonJS({
  "node_modules/pixi.js/lib/core/renderers/webgl/managers/FilterManager.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _WebGLManager2 = require_WebGLManager();
    var _WebGLManager3 = _interopRequireDefault(_WebGLManager2);
    var _RenderTarget = require_RenderTarget();
    var _RenderTarget2 = _interopRequireDefault(_RenderTarget);
    var _Quad = require_Quad();
    var _Quad2 = _interopRequireDefault(_Quad);
    var _math = require_math();
    var _Shader = require_Shader();
    var _Shader2 = _interopRequireDefault(_Shader);
    var _filterTransforms = require_filterTransforms();
    var filterTransforms = _interopRequireWildcard(_filterTransforms);
    var _bitTwiddle = require_twiddle();
    var _bitTwiddle2 = _interopRequireDefault(_bitTwiddle);
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var FilterState = function() {
      function FilterState2() {
        _classCallCheck(this, FilterState2);
        this.renderTarget = null;
        this.target = null;
        this.resolution = 1;
        this.sourceFrame = new _math.Rectangle();
        this.destinationFrame = new _math.Rectangle();
        this.filters = [];
      }
      FilterState2.prototype.clear = function clear() {
        this.filters = null;
        this.target = null;
        this.renderTarget = null;
      };
      return FilterState2;
    }();
    var screenKey = "screen";
    var FilterManager = function(_WebGLManager) {
      _inherits(FilterManager2, _WebGLManager);
      function FilterManager2(renderer) {
        _classCallCheck(this, FilterManager2);
        var _this = _possibleConstructorReturn(this, _WebGLManager.call(this, renderer));
        _this.gl = _this.renderer.gl;
        _this.quad = new _Quad2.default(_this.gl, renderer.state.attribState);
        _this.shaderCache = {};
        _this.pool = {};
        _this.filterData = null;
        _this.managedFilters = [];
        _this.renderer.on("prerender", _this.onPrerender, _this);
        _this._screenWidth = renderer.view.width;
        _this._screenHeight = renderer.view.height;
        return _this;
      }
      FilterManager2.prototype.pushFilter = function pushFilter(target, filters) {
        var renderer = this.renderer;
        var filterData = this.filterData;
        if (!filterData) {
          filterData = this.renderer._activeRenderTarget.filterStack;
          var filterState = new FilterState();
          filterState.sourceFrame = filterState.destinationFrame = this.renderer._activeRenderTarget.size;
          filterState.renderTarget = renderer._activeRenderTarget;
          this.renderer._activeRenderTarget.filterData = filterData = {
            index: 0,
            stack: [filterState]
          };
          this.filterData = filterData;
        }
        var currentState = filterData.stack[++filterData.index];
        var renderTargetFrame = filterData.stack[0].destinationFrame;
        if (!currentState) {
          currentState = filterData.stack[filterData.index] = new FilterState();
        }
        var fullScreen = target.filterArea && target.filterArea.x === 0 && target.filterArea.y === 0 && target.filterArea.width === renderer.screen.width && target.filterArea.height === renderer.screen.height;
        var resolution = filters[0].resolution;
        var padding = filters[0].padding | 0;
        var targetBounds = fullScreen ? renderer.screen : target.filterArea || target.getBounds(true);
        var sourceFrame = currentState.sourceFrame;
        var destinationFrame = currentState.destinationFrame;
        sourceFrame.x = (targetBounds.x * resolution | 0) / resolution;
        sourceFrame.y = (targetBounds.y * resolution | 0) / resolution;
        sourceFrame.width = (targetBounds.width * resolution | 0) / resolution;
        sourceFrame.height = (targetBounds.height * resolution | 0) / resolution;
        if (!fullScreen) {
          if (filterData.stack[0].renderTarget.transform) {
          } else if (filters[0].autoFit) {
            sourceFrame.fit(renderTargetFrame);
          }
          sourceFrame.pad(padding);
        }
        destinationFrame.width = sourceFrame.width;
        destinationFrame.height = sourceFrame.height;
        var renderTarget = this.getPotRenderTarget(renderer.gl, sourceFrame.width, sourceFrame.height, resolution);
        currentState.target = target;
        currentState.filters = filters;
        currentState.resolution = resolution;
        currentState.renderTarget = renderTarget;
        renderTarget.setFrame(destinationFrame, sourceFrame);
        renderer.bindRenderTarget(renderTarget);
        renderTarget.clear();
      };
      FilterManager2.prototype.popFilter = function popFilter() {
        var filterData = this.filterData;
        var lastState = filterData.stack[filterData.index - 1];
        var currentState = filterData.stack[filterData.index];
        this.quad.map(currentState.renderTarget.size, currentState.sourceFrame).upload();
        var filters = currentState.filters;
        if (filters.length === 1) {
          filters[0].apply(this, currentState.renderTarget, lastState.renderTarget, false, currentState);
          this.freePotRenderTarget(currentState.renderTarget);
        } else {
          var flip = currentState.renderTarget;
          var flop = this.getPotRenderTarget(this.renderer.gl, currentState.sourceFrame.width, currentState.sourceFrame.height, currentState.resolution);
          flop.setFrame(currentState.destinationFrame, currentState.sourceFrame);
          flop.clear();
          var i = 0;
          for (i = 0; i < filters.length - 1; ++i) {
            filters[i].apply(this, flip, flop, true, currentState);
            var t = flip;
            flip = flop;
            flop = t;
          }
          filters[i].apply(this, flip, lastState.renderTarget, false, currentState);
          this.freePotRenderTarget(flip);
          this.freePotRenderTarget(flop);
        }
        currentState.clear();
        filterData.index--;
        if (filterData.index === 0) {
          this.filterData = null;
        }
      };
      FilterManager2.prototype.applyFilter = function applyFilter(filter, input, output, clear) {
        var renderer = this.renderer;
        var gl2 = renderer.gl;
        var shader = filter.glShaders[renderer.CONTEXT_UID];
        if (!shader) {
          if (filter.glShaderKey) {
            shader = this.shaderCache[filter.glShaderKey];
            if (!shader) {
              shader = new _Shader2.default(this.gl, filter.vertexSrc, filter.fragmentSrc);
              filter.glShaders[renderer.CONTEXT_UID] = this.shaderCache[filter.glShaderKey] = shader;
              this.managedFilters.push(filter);
            }
          } else {
            shader = filter.glShaders[renderer.CONTEXT_UID] = new _Shader2.default(this.gl, filter.vertexSrc, filter.fragmentSrc);
            this.managedFilters.push(filter);
          }
          renderer.bindVao(null);
          this.quad.initVao(shader);
        }
        renderer.bindVao(this.quad.vao);
        renderer.bindRenderTarget(output);
        if (clear) {
          gl2.disable(gl2.SCISSOR_TEST);
          renderer.clear();
          gl2.enable(gl2.SCISSOR_TEST);
        }
        if (output === renderer.maskManager.scissorRenderTarget) {
          renderer.maskManager.pushScissorMask(null, renderer.maskManager.scissorData);
        }
        renderer.bindShader(shader);
        var tex = this.renderer.emptyTextures[0];
        this.renderer.boundTextures[0] = tex;
        this.syncUniforms(shader, filter);
        renderer.state.setBlendMode(filter.blendMode);
        gl2.activeTexture(gl2.TEXTURE0);
        gl2.bindTexture(gl2.TEXTURE_2D, input.texture.texture);
        this.quad.vao.draw(this.renderer.gl.TRIANGLES, 6, 0);
        gl2.bindTexture(gl2.TEXTURE_2D, tex._glTextures[this.renderer.CONTEXT_UID].texture);
      };
      FilterManager2.prototype.syncUniforms = function syncUniforms(shader, filter) {
        var uniformData = filter.uniformData;
        var uniforms = filter.uniforms;
        var textureCount = 1;
        var currentState = void 0;
        if (shader.uniforms.filterArea) {
          currentState = this.filterData.stack[this.filterData.index];
          var filterArea = shader.uniforms.filterArea;
          filterArea[0] = currentState.renderTarget.size.width;
          filterArea[1] = currentState.renderTarget.size.height;
          filterArea[2] = currentState.sourceFrame.x;
          filterArea[3] = currentState.sourceFrame.y;
          shader.uniforms.filterArea = filterArea;
        }
        if (shader.uniforms.filterClamp) {
          currentState = currentState || this.filterData.stack[this.filterData.index];
          var filterClamp = shader.uniforms.filterClamp;
          filterClamp[0] = 0;
          filterClamp[1] = 0;
          filterClamp[2] = (currentState.sourceFrame.width - 1) / currentState.renderTarget.size.width;
          filterClamp[3] = (currentState.sourceFrame.height - 1) / currentState.renderTarget.size.height;
          shader.uniforms.filterClamp = filterClamp;
        }
        for (var i in uniformData) {
          if (!shader.uniforms.data[i]) {
            continue;
          }
          var type = uniformData[i].type;
          if (type === "sampler2d" && uniforms[i] !== 0) {
            if (uniforms[i].baseTexture) {
              shader.uniforms[i] = this.renderer.bindTexture(uniforms[i].baseTexture, textureCount);
            } else {
              shader.uniforms[i] = textureCount;
              var gl2 = this.renderer.gl;
              this.renderer.boundTextures[textureCount] = this.renderer.emptyTextures[textureCount];
              gl2.activeTexture(gl2.TEXTURE0 + textureCount);
              uniforms[i].texture.bind();
            }
            textureCount++;
          } else if (type === "mat3") {
            if (uniforms[i].a !== void 0) {
              shader.uniforms[i] = uniforms[i].toArray(true);
            } else {
              shader.uniforms[i] = uniforms[i];
            }
          } else if (type === "vec2") {
            if (uniforms[i].x !== void 0) {
              var val = shader.uniforms[i] || new Float32Array(2);
              val[0] = uniforms[i].x;
              val[1] = uniforms[i].y;
              shader.uniforms[i] = val;
            } else {
              shader.uniforms[i] = uniforms[i];
            }
          } else if (type === "float") {
            if (shader.uniforms.data[i].value !== uniformData[i]) {
              shader.uniforms[i] = uniforms[i];
            }
          } else {
            shader.uniforms[i] = uniforms[i];
          }
        }
      };
      FilterManager2.prototype.getRenderTarget = function getRenderTarget(clear, resolution) {
        var currentState = this.filterData.stack[this.filterData.index];
        var renderTarget = this.getPotRenderTarget(this.renderer.gl, currentState.sourceFrame.width, currentState.sourceFrame.height, resolution || currentState.resolution);
        renderTarget.setFrame(currentState.destinationFrame, currentState.sourceFrame);
        return renderTarget;
      };
      FilterManager2.prototype.returnRenderTarget = function returnRenderTarget(renderTarget) {
        this.freePotRenderTarget(renderTarget);
      };
      FilterManager2.prototype.calculateScreenSpaceMatrix = function calculateScreenSpaceMatrix(outputMatrix) {
        var currentState = this.filterData.stack[this.filterData.index];
        return filterTransforms.calculateScreenSpaceMatrix(outputMatrix, currentState.sourceFrame, currentState.renderTarget.size);
      };
      FilterManager2.prototype.calculateNormalizedScreenSpaceMatrix = function calculateNormalizedScreenSpaceMatrix(outputMatrix) {
        var currentState = this.filterData.stack[this.filterData.index];
        return filterTransforms.calculateNormalizedScreenSpaceMatrix(outputMatrix, currentState.sourceFrame, currentState.renderTarget.size, currentState.destinationFrame);
      };
      FilterManager2.prototype.calculateSpriteMatrix = function calculateSpriteMatrix(outputMatrix, sprite) {
        var currentState = this.filterData.stack[this.filterData.index];
        return filterTransforms.calculateSpriteMatrix(outputMatrix, currentState.sourceFrame, currentState.renderTarget.size, sprite);
      };
      FilterManager2.prototype.destroy = function destroy() {
        var contextLost = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
        var renderer = this.renderer;
        var filters = this.managedFilters;
        renderer.off("prerender", this.onPrerender, this);
        for (var i = 0; i < filters.length; i++) {
          if (!contextLost) {
            filters[i].glShaders[renderer.CONTEXT_UID].destroy();
          }
          delete filters[i].glShaders[renderer.CONTEXT_UID];
        }
        this.shaderCache = {};
        if (!contextLost) {
          this.emptyPool();
        } else {
          this.pool = {};
        }
      };
      FilterManager2.prototype.getPotRenderTarget = function getPotRenderTarget(gl2, minWidth, minHeight, resolution) {
        var key = screenKey;
        minWidth *= resolution;
        minHeight *= resolution;
        if (minWidth !== this._screenWidth || minHeight !== this._screenHeight) {
          minWidth = _bitTwiddle2.default.nextPow2(minWidth);
          minHeight = _bitTwiddle2.default.nextPow2(minHeight);
          key = (minWidth & 65535) << 16 | minHeight & 65535;
        }
        if (!this.pool[key]) {
          this.pool[key] = [];
        }
        var renderTarget = this.pool[key].pop();
        if (!renderTarget) {
          var tex = this.renderer.boundTextures[0];
          gl2.activeTexture(gl2.TEXTURE0);
          renderTarget = new _RenderTarget2.default(gl2, minWidth, minHeight, null, 1);
          gl2.bindTexture(gl2.TEXTURE_2D, tex._glTextures[this.renderer.CONTEXT_UID].texture);
        }
        renderTarget.resolution = resolution;
        renderTarget.defaultFrame.width = renderTarget.size.width = minWidth / resolution;
        renderTarget.defaultFrame.height = renderTarget.size.height = minHeight / resolution;
        renderTarget.filterPoolKey = key;
        return renderTarget;
      };
      FilterManager2.prototype.emptyPool = function emptyPool() {
        for (var i in this.pool) {
          var textures = this.pool[i];
          if (textures) {
            for (var j = 0; j < textures.length; j++) {
              textures[j].destroy(true);
            }
          }
        }
        this.pool = {};
      };
      FilterManager2.prototype.freePotRenderTarget = function freePotRenderTarget(renderTarget) {
        this.pool[renderTarget.filterPoolKey].push(renderTarget);
      };
      FilterManager2.prototype.onPrerender = function onPrerender() {
        if (this._screenWidth !== this.renderer.view.width || this._screenHeight !== this.renderer.view.height) {
          this._screenWidth = this.renderer.view.width;
          this._screenHeight = this.renderer.view.height;
          var textures = this.pool[screenKey];
          if (textures) {
            for (var j = 0; j < textures.length; j++) {
              textures[j].destroy(true);
            }
          }
          this.pool[screenKey] = [];
        }
      };
      return FilterManager2;
    }(_WebGLManager3.default);
    exports.default = FilterManager;
  }
});

// node_modules/pixi.js/lib/core/renderers/webgl/TextureManager.js
var require_TextureManager = __commonJS({
  "node_modules/pixi.js/lib/core/renderers/webgl/TextureManager.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _pixiGlCore = require_src();
    var _const = require_const();
    var _RenderTarget = require_RenderTarget();
    var _RenderTarget2 = _interopRequireDefault(_RenderTarget);
    var _utils = require_utils();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var TextureManager = function() {
      function TextureManager2(renderer) {
        _classCallCheck(this, TextureManager2);
        this.renderer = renderer;
        this.gl = renderer.gl;
        this._managedTextures = [];
      }
      TextureManager2.prototype.bindTexture = function bindTexture() {
      };
      TextureManager2.prototype.getTexture = function getTexture() {
      };
      TextureManager2.prototype.updateTexture = function updateTexture(texture, location) {
        var gl2 = this.gl;
        var isRenderTexture = !!texture._glRenderTargets;
        if (!texture.hasLoaded) {
          return null;
        }
        var boundTextures = this.renderer.boundTextures;
        if (location === void 0) {
          location = 0;
          for (var i = 0; i < boundTextures.length; ++i) {
            if (boundTextures[i] === texture) {
              location = i;
              break;
            }
          }
        }
        boundTextures[location] = texture;
        gl2.activeTexture(gl2.TEXTURE0 + location);
        var glTexture = texture._glTextures[this.renderer.CONTEXT_UID];
        if (!glTexture) {
          if (isRenderTexture) {
            var renderTarget = new _RenderTarget2.default(this.gl, texture.width, texture.height, texture.scaleMode, texture.resolution);
            renderTarget.resize(texture.width, texture.height);
            texture._glRenderTargets[this.renderer.CONTEXT_UID] = renderTarget;
            glTexture = renderTarget.texture;
            if (!this.renderer._activeRenderTarget.root) {
              this.renderer._activeRenderTarget.frameBuffer.bind();
            }
          } else {
            glTexture = new _pixiGlCore.GLTexture(this.gl, null, null, null, null);
            glTexture.bind(location);
            glTexture.premultiplyAlpha = true;
            glTexture.upload(texture.source);
          }
          texture._glTextures[this.renderer.CONTEXT_UID] = glTexture;
          texture.on("update", this.updateTexture, this);
          texture.on("dispose", this.destroyTexture, this);
          this._managedTextures.push(texture);
          if (texture.isPowerOfTwo) {
            if (texture.mipmap) {
              glTexture.enableMipmap();
            }
            if (texture.wrapMode === _const.WRAP_MODES.CLAMP) {
              glTexture.enableWrapClamp();
            } else if (texture.wrapMode === _const.WRAP_MODES.REPEAT) {
              glTexture.enableWrapRepeat();
            } else {
              glTexture.enableWrapMirrorRepeat();
            }
          } else {
            glTexture.enableWrapClamp();
          }
          if (texture.scaleMode === _const.SCALE_MODES.NEAREST) {
            glTexture.enableNearestScaling();
          } else {
            glTexture.enableLinearScaling();
          }
        } else if (isRenderTexture) {
          texture._glRenderTargets[this.renderer.CONTEXT_UID].resize(texture.width, texture.height);
        } else {
          glTexture.upload(texture.source);
        }
        return glTexture;
      };
      TextureManager2.prototype.destroyTexture = function destroyTexture(texture, skipRemove) {
        texture = texture.baseTexture || texture;
        if (!texture.hasLoaded) {
          return;
        }
        var renderer = this.renderer;
        var uid = renderer.CONTEXT_UID;
        var glTextures = texture._glTextures;
        var glRenderTargets = texture._glRenderTargets;
        if (glTextures[uid]) {
          renderer.unbindTexture(texture);
          glTextures[uid].destroy();
          texture.off("update", this.updateTexture, this);
          texture.off("dispose", this.destroyTexture, this);
          delete glTextures[uid];
          if (!skipRemove) {
            var i = this._managedTextures.indexOf(texture);
            if (i !== -1) {
              (0, _utils.removeItems)(this._managedTextures, i, 1);
            }
          }
        }
        if (glRenderTargets && glRenderTargets[uid]) {
          if (renderer._activeRenderTarget === glRenderTargets[uid]) {
            renderer.bindRenderTarget(renderer.rootRenderTarget);
          }
          glRenderTargets[uid].destroy();
          delete glRenderTargets[uid];
        }
      };
      TextureManager2.prototype.removeAll = function removeAll() {
        for (var i = 0; i < this._managedTextures.length; ++i) {
          var texture = this._managedTextures[i];
          if (texture._glTextures[this.renderer.CONTEXT_UID]) {
            delete texture._glTextures[this.renderer.CONTEXT_UID];
          }
        }
      };
      TextureManager2.prototype.destroy = function destroy() {
        for (var i = 0; i < this._managedTextures.length; ++i) {
          var texture = this._managedTextures[i];
          this.destroyTexture(texture, true);
          texture.off("update", this.updateTexture, this);
          texture.off("dispose", this.destroyTexture, this);
        }
        this._managedTextures = null;
      };
      return TextureManager2;
    }();
    exports.default = TextureManager;
  }
});

// node_modules/pixi.js/lib/core/renderers/webgl/TextureGarbageCollector.js
var require_TextureGarbageCollector = __commonJS({
  "node_modules/pixi.js/lib/core/renderers/webgl/TextureGarbageCollector.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _const = require_const();
    var _settings = require_settings();
    var _settings2 = _interopRequireDefault(_settings);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var TextureGarbageCollector = function() {
      function TextureGarbageCollector2(renderer) {
        _classCallCheck(this, TextureGarbageCollector2);
        this.renderer = renderer;
        this.count = 0;
        this.checkCount = 0;
        this.maxIdle = _settings2.default.GC_MAX_IDLE;
        this.checkCountMax = _settings2.default.GC_MAX_CHECK_COUNT;
        this.mode = _settings2.default.GC_MODE;
      }
      TextureGarbageCollector2.prototype.update = function update() {
        this.count++;
        if (this.mode === _const.GC_MODES.MANUAL) {
          return;
        }
        this.checkCount++;
        if (this.checkCount > this.checkCountMax) {
          this.checkCount = 0;
          this.run();
        }
      };
      TextureGarbageCollector2.prototype.run = function run() {
        var tm = this.renderer.textureManager;
        var managedTextures = tm._managedTextures;
        var wasRemoved = false;
        for (var i = 0; i < managedTextures.length; i++) {
          var texture = managedTextures[i];
          if (!texture._glRenderTargets && this.count - texture.touched > this.maxIdle) {
            tm.destroyTexture(texture, true);
            managedTextures[i] = null;
            wasRemoved = true;
          }
        }
        if (wasRemoved) {
          var j = 0;
          for (var _i = 0; _i < managedTextures.length; _i++) {
            if (managedTextures[_i] !== null) {
              managedTextures[j++] = managedTextures[_i];
            }
          }
          managedTextures.length = j;
        }
      };
      TextureGarbageCollector2.prototype.unload = function unload(displayObject) {
        var tm = this.renderer.textureManager;
        if (displayObject._texture && displayObject._texture._glRenderTargets) {
          tm.destroyTexture(displayObject._texture, true);
        }
        for (var i = displayObject.children.length - 1; i >= 0; i--) {
          this.unload(displayObject.children[i]);
        }
      };
      return TextureGarbageCollector2;
    }();
    exports.default = TextureGarbageCollector;
  }
});

// node_modules/pixi.js/lib/core/renderers/webgl/utils/mapWebGLBlendModesToPixi.js
var require_mapWebGLBlendModesToPixi = __commonJS({
  "node_modules/pixi.js/lib/core/renderers/webgl/utils/mapWebGLBlendModesToPixi.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.default = mapWebGLBlendModesToPixi;
    var _const = require_const();
    function mapWebGLBlendModesToPixi(gl2) {
      var array = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
      array[_const.BLEND_MODES.NORMAL] = [gl2.ONE, gl2.ONE_MINUS_SRC_ALPHA];
      array[_const.BLEND_MODES.ADD] = [gl2.ONE, gl2.ONE];
      array[_const.BLEND_MODES.MULTIPLY] = [gl2.DST_COLOR, gl2.ONE_MINUS_SRC_ALPHA, gl2.ONE, gl2.ONE_MINUS_SRC_ALPHA];
      array[_const.BLEND_MODES.SCREEN] = [gl2.ONE, gl2.ONE_MINUS_SRC_COLOR, gl2.ONE, gl2.ONE_MINUS_SRC_ALPHA];
      array[_const.BLEND_MODES.OVERLAY] = [gl2.ONE, gl2.ONE_MINUS_SRC_ALPHA];
      array[_const.BLEND_MODES.DARKEN] = [gl2.ONE, gl2.ONE_MINUS_SRC_ALPHA];
      array[_const.BLEND_MODES.LIGHTEN] = [gl2.ONE, gl2.ONE_MINUS_SRC_ALPHA];
      array[_const.BLEND_MODES.COLOR_DODGE] = [gl2.ONE, gl2.ONE_MINUS_SRC_ALPHA];
      array[_const.BLEND_MODES.COLOR_BURN] = [gl2.ONE, gl2.ONE_MINUS_SRC_ALPHA];
      array[_const.BLEND_MODES.HARD_LIGHT] = [gl2.ONE, gl2.ONE_MINUS_SRC_ALPHA];
      array[_const.BLEND_MODES.SOFT_LIGHT] = [gl2.ONE, gl2.ONE_MINUS_SRC_ALPHA];
      array[_const.BLEND_MODES.DIFFERENCE] = [gl2.ONE, gl2.ONE_MINUS_SRC_ALPHA];
      array[_const.BLEND_MODES.EXCLUSION] = [gl2.ONE, gl2.ONE_MINUS_SRC_ALPHA];
      array[_const.BLEND_MODES.HUE] = [gl2.ONE, gl2.ONE_MINUS_SRC_ALPHA];
      array[_const.BLEND_MODES.SATURATION] = [gl2.ONE, gl2.ONE_MINUS_SRC_ALPHA];
      array[_const.BLEND_MODES.COLOR] = [gl2.ONE, gl2.ONE_MINUS_SRC_ALPHA];
      array[_const.BLEND_MODES.LUMINOSITY] = [gl2.ONE, gl2.ONE_MINUS_SRC_ALPHA];
      array[_const.BLEND_MODES.NORMAL_NPM] = [gl2.SRC_ALPHA, gl2.ONE_MINUS_SRC_ALPHA, gl2.ONE, gl2.ONE_MINUS_SRC_ALPHA];
      array[_const.BLEND_MODES.ADD_NPM] = [gl2.SRC_ALPHA, gl2.ONE, gl2.ONE, gl2.ONE];
      array[_const.BLEND_MODES.SCREEN_NPM] = [gl2.SRC_ALPHA, gl2.ONE_MINUS_SRC_COLOR, gl2.ONE, gl2.ONE_MINUS_SRC_ALPHA];
      return array;
    }
  }
});

// node_modules/pixi.js/lib/core/renderers/webgl/WebGLState.js
var require_WebGLState = __commonJS({
  "node_modules/pixi.js/lib/core/renderers/webgl/WebGLState.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _mapWebGLBlendModesToPixi = require_mapWebGLBlendModesToPixi();
    var _mapWebGLBlendModesToPixi2 = _interopRequireDefault(_mapWebGLBlendModesToPixi);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var BLEND = 0;
    var DEPTH_TEST = 1;
    var FRONT_FACE = 2;
    var CULL_FACE = 3;
    var BLEND_FUNC = 4;
    var WebGLState = function() {
      function WebGLState2(gl2) {
        _classCallCheck(this, WebGLState2);
        this.activeState = new Uint8Array(16);
        this.defaultState = new Uint8Array(16);
        this.defaultState[0] = 1;
        this.stackIndex = 0;
        this.stack = [];
        this.gl = gl2;
        this.maxAttribs = gl2.getParameter(gl2.MAX_VERTEX_ATTRIBS);
        this.attribState = {
          tempAttribState: new Array(this.maxAttribs),
          attribState: new Array(this.maxAttribs)
        };
        this.blendModes = (0, _mapWebGLBlendModesToPixi2.default)(gl2);
        this.nativeVaoExtension = gl2.getExtension("OES_vertex_array_object") || gl2.getExtension("MOZ_OES_vertex_array_object") || gl2.getExtension("WEBKIT_OES_vertex_array_object");
      }
      WebGLState2.prototype.push = function push() {
        var state = this.stack[this.stackIndex];
        if (!state) {
          state = this.stack[this.stackIndex] = new Uint8Array(16);
        }
        ++this.stackIndex;
        for (var i = 0; i < this.activeState.length; i++) {
          state[i] = this.activeState[i];
        }
      };
      WebGLState2.prototype.pop = function pop() {
        var state = this.stack[--this.stackIndex];
        this.setState(state);
      };
      WebGLState2.prototype.setState = function setState(state) {
        this.setBlend(state[BLEND]);
        this.setDepthTest(state[DEPTH_TEST]);
        this.setFrontFace(state[FRONT_FACE]);
        this.setCullFace(state[CULL_FACE]);
        this.setBlendMode(state[BLEND_FUNC]);
      };
      WebGLState2.prototype.setBlend = function setBlend(value) {
        value = value ? 1 : 0;
        if (this.activeState[BLEND] === value) {
          return;
        }
        this.activeState[BLEND] = value;
        this.gl[value ? "enable" : "disable"](this.gl.BLEND);
      };
      WebGLState2.prototype.setBlendMode = function setBlendMode(value) {
        if (value === this.activeState[BLEND_FUNC]) {
          return;
        }
        this.activeState[BLEND_FUNC] = value;
        var mode = this.blendModes[value];
        if (mode.length === 2) {
          this.gl.blendFunc(mode[0], mode[1]);
        } else {
          this.gl.blendFuncSeparate(mode[0], mode[1], mode[2], mode[3]);
        }
      };
      WebGLState2.prototype.setDepthTest = function setDepthTest(value) {
        value = value ? 1 : 0;
        if (this.activeState[DEPTH_TEST] === value) {
          return;
        }
        this.activeState[DEPTH_TEST] = value;
        this.gl[value ? "enable" : "disable"](this.gl.DEPTH_TEST);
      };
      WebGLState2.prototype.setCullFace = function setCullFace(value) {
        value = value ? 1 : 0;
        if (this.activeState[CULL_FACE] === value) {
          return;
        }
        this.activeState[CULL_FACE] = value;
        this.gl[value ? "enable" : "disable"](this.gl.CULL_FACE);
      };
      WebGLState2.prototype.setFrontFace = function setFrontFace(value) {
        value = value ? 1 : 0;
        if (this.activeState[FRONT_FACE] === value) {
          return;
        }
        this.activeState[FRONT_FACE] = value;
        this.gl.frontFace(this.gl[value ? "CW" : "CCW"]);
      };
      WebGLState2.prototype.resetAttributes = function resetAttributes() {
        for (var i = 0; i < this.attribState.tempAttribState.length; i++) {
          this.attribState.tempAttribState[i] = 0;
        }
        for (var _i = 0; _i < this.attribState.attribState.length; _i++) {
          this.attribState.attribState[_i] = 0;
        }
        for (var _i2 = 1; _i2 < this.maxAttribs; _i2++) {
          this.gl.disableVertexAttribArray(_i2);
        }
      };
      WebGLState2.prototype.resetToDefault = function resetToDefault() {
        if (this.nativeVaoExtension) {
          this.nativeVaoExtension.bindVertexArrayOES(null);
        }
        this.resetAttributes();
        for (var i = 0; i < this.activeState.length; ++i) {
          this.activeState[i] = 32;
        }
        this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, false);
        this.setState(this.defaultState);
      };
      return WebGLState2;
    }();
    exports.default = WebGLState;
  }
});

// node_modules/pixi.js/lib/core/renderers/webgl/utils/mapWebGLDrawModesToPixi.js
var require_mapWebGLDrawModesToPixi = __commonJS({
  "node_modules/pixi.js/lib/core/renderers/webgl/utils/mapWebGLDrawModesToPixi.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.default = mapWebGLDrawModesToPixi;
    var _const = require_const();
    function mapWebGLDrawModesToPixi(gl2) {
      var object = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      object[_const.DRAW_MODES.POINTS] = gl2.POINTS;
      object[_const.DRAW_MODES.LINES] = gl2.LINES;
      object[_const.DRAW_MODES.LINE_LOOP] = gl2.LINE_LOOP;
      object[_const.DRAW_MODES.LINE_STRIP] = gl2.LINE_STRIP;
      object[_const.DRAW_MODES.TRIANGLES] = gl2.TRIANGLES;
      object[_const.DRAW_MODES.TRIANGLE_STRIP] = gl2.TRIANGLE_STRIP;
      object[_const.DRAW_MODES.TRIANGLE_FAN] = gl2.TRIANGLE_FAN;
      return object;
    }
  }
});

// node_modules/pixi.js/lib/core/renderers/webgl/utils/validateContext.js
var require_validateContext = __commonJS({
  "node_modules/pixi.js/lib/core/renderers/webgl/utils/validateContext.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.default = validateContext;
    function validateContext(gl2) {
      var attributes = gl2.getContextAttributes();
      if (!attributes.stencil) {
        console.warn("Provided WebGL context does not have a stencil buffer, masks may not render correctly");
      }
    }
  }
});

// node_modules/pixi.js/lib/core/renderers/webgl/WebGLRenderer.js
var require_WebGLRenderer = __commonJS({
  "node_modules/pixi.js/lib/core/renderers/webgl/WebGLRenderer.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _SystemRenderer2 = require_SystemRenderer();
    var _SystemRenderer3 = _interopRequireDefault(_SystemRenderer2);
    var _MaskManager = require_MaskManager();
    var _MaskManager2 = _interopRequireDefault(_MaskManager);
    var _StencilManager = require_StencilManager();
    var _StencilManager2 = _interopRequireDefault(_StencilManager);
    var _FilterManager = require_FilterManager();
    var _FilterManager2 = _interopRequireDefault(_FilterManager);
    var _RenderTarget = require_RenderTarget();
    var _RenderTarget2 = _interopRequireDefault(_RenderTarget);
    var _ObjectRenderer = require_ObjectRenderer();
    var _ObjectRenderer2 = _interopRequireDefault(_ObjectRenderer);
    var _TextureManager = require_TextureManager();
    var _TextureManager2 = _interopRequireDefault(_TextureManager);
    var _BaseTexture = require_BaseTexture();
    var _BaseTexture2 = _interopRequireDefault(_BaseTexture);
    var _TextureGarbageCollector = require_TextureGarbageCollector();
    var _TextureGarbageCollector2 = _interopRequireDefault(_TextureGarbageCollector);
    var _WebGLState = require_WebGLState();
    var _WebGLState2 = _interopRequireDefault(_WebGLState);
    var _mapWebGLDrawModesToPixi = require_mapWebGLDrawModesToPixi();
    var _mapWebGLDrawModesToPixi2 = _interopRequireDefault(_mapWebGLDrawModesToPixi);
    var _validateContext = require_validateContext();
    var _validateContext2 = _interopRequireDefault(_validateContext);
    var _utils = require_utils();
    var _pixiGlCore = require_src();
    var _pixiGlCore2 = _interopRequireDefault(_pixiGlCore);
    var _const = require_const();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var CONTEXT_UID = 0;
    var WebGLRenderer = function(_SystemRenderer) {
      _inherits(WebGLRenderer2, _SystemRenderer);
      function WebGLRenderer2(options, arg2, arg3) {
        _classCallCheck(this, WebGLRenderer2);
        var _this = _possibleConstructorReturn(this, _SystemRenderer.call(this, "WebGL", options, arg2, arg3));
        _this.legacy = _this.options.legacy;
        if (_this.legacy) {
          _pixiGlCore2.default.VertexArrayObject.FORCE_NATIVE = true;
        }
        _this.type = _const.RENDERER_TYPE.WEBGL;
        _this.handleContextLost = _this.handleContextLost.bind(_this);
        _this.handleContextRestored = _this.handleContextRestored.bind(_this);
        _this.view.addEventListener("webglcontextlost", _this.handleContextLost, false);
        _this.view.addEventListener("webglcontextrestored", _this.handleContextRestored, false);
        _this._contextOptions = {
          alpha: _this.transparent,
          antialias: _this.options.antialias,
          premultipliedAlpha: _this.transparent && _this.transparent !== "notMultiplied",
          stencil: true,
          preserveDrawingBuffer: _this.options.preserveDrawingBuffer,
          powerPreference: _this.options.powerPreference
        };
        _this._backgroundColorRgba[3] = _this.transparent ? 0 : 1;
        _this.maskManager = new _MaskManager2.default(_this);
        _this.stencilManager = new _StencilManager2.default(_this);
        _this.emptyRenderer = new _ObjectRenderer2.default(_this);
        _this.currentRenderer = _this.emptyRenderer;
        _this.textureManager = null;
        _this.filterManager = null;
        _this.initPlugins();
        if (_this.options.context) {
          (0, _validateContext2.default)(_this.options.context);
        }
        _this.gl = _this.options.context || _pixiGlCore2.default.createContext(_this.view, _this._contextOptions);
        _this.CONTEXT_UID = CONTEXT_UID++;
        _this.state = new _WebGLState2.default(_this.gl);
        _this.renderingToScreen = true;
        _this.boundTextures = null;
        _this._activeShader = null;
        _this._activeVao = null;
        _this._activeRenderTarget = null;
        _this._initContext();
        _this.drawModes = (0, _mapWebGLDrawModesToPixi2.default)(_this.gl);
        _this._nextTextureLocation = 0;
        _this.setBlendMode(0);
        return _this;
      }
      WebGLRenderer2.prototype._initContext = function _initContext() {
        var gl2 = this.gl;
        if (gl2.isContextLost() && gl2.getExtension("WEBGL_lose_context")) {
          gl2.getExtension("WEBGL_lose_context").restoreContext();
        }
        var maxTextures = gl2.getParameter(gl2.MAX_TEXTURE_IMAGE_UNITS);
        this._activeShader = null;
        this._activeVao = null;
        this.boundTextures = new Array(maxTextures);
        this.emptyTextures = new Array(maxTextures);
        this._unknownBoundTextures = false;
        this.textureManager = new _TextureManager2.default(this);
        this.filterManager = new _FilterManager2.default(this);
        this.textureGC = new _TextureGarbageCollector2.default(this);
        this.state.resetToDefault();
        this.rootRenderTarget = new _RenderTarget2.default(gl2, this.width, this.height, null, this.resolution, true);
        this.rootRenderTarget.clearColor = this._backgroundColorRgba;
        this.bindRenderTarget(this.rootRenderTarget);
        var emptyGLTexture = new _pixiGlCore2.default.GLTexture.fromData(gl2, null, 1, 1);
        var tempObj = { _glTextures: {} };
        tempObj._glTextures[this.CONTEXT_UID] = {};
        for (var i = 0; i < maxTextures; i++) {
          var empty = new _BaseTexture2.default();
          empty._glTextures[this.CONTEXT_UID] = emptyGLTexture;
          this.boundTextures[i] = tempObj;
          this.emptyTextures[i] = empty;
          this.bindTexture(null, i);
        }
        this.emit("context", gl2);
        this.resize(this.screen.width, this.screen.height);
      };
      WebGLRenderer2.prototype.render = function render(displayObject, renderTexture, clear, transform, skipUpdateTransform) {
        this.renderingToScreen = !renderTexture;
        this.emit("prerender");
        if (!this.gl || this.gl.isContextLost()) {
          return;
        }
        this._nextTextureLocation = 0;
        if (!renderTexture) {
          this._lastObjectRendered = displayObject;
        }
        if (!skipUpdateTransform) {
          var cacheParent = displayObject.parent;
          displayObject.parent = this._tempDisplayObjectParent;
          displayObject.updateTransform();
          displayObject.parent = cacheParent;
        }
        this.bindRenderTexture(renderTexture, transform);
        this.currentRenderer.start();
        if (clear !== void 0 ? clear : this.clearBeforeRender) {
          this._activeRenderTarget.clear();
        }
        displayObject.renderWebGL(this);
        this.currentRenderer.flush();
        this.textureGC.update();
        this.emit("postrender");
      };
      WebGLRenderer2.prototype.setObjectRenderer = function setObjectRenderer(objectRenderer) {
        if (this.currentRenderer === objectRenderer) {
          return;
        }
        this.currentRenderer.stop();
        this.currentRenderer = objectRenderer;
        this.currentRenderer.start();
      };
      WebGLRenderer2.prototype.flush = function flush() {
        this.setObjectRenderer(this.emptyRenderer);
      };
      WebGLRenderer2.prototype.resize = function resize(screenWidth, screenHeight) {
        _SystemRenderer3.default.prototype.resize.call(this, screenWidth, screenHeight);
        this.rootRenderTarget.resize(screenWidth, screenHeight);
        if (this._activeRenderTarget === this.rootRenderTarget) {
          this.rootRenderTarget.activate();
          if (this._activeShader) {
            this._activeShader.uniforms.projectionMatrix = this.rootRenderTarget.projectionMatrix.toArray(true);
          }
        }
      };
      WebGLRenderer2.prototype.setBlendMode = function setBlendMode(blendMode) {
        this.state.setBlendMode(blendMode);
      };
      WebGLRenderer2.prototype.clear = function clear(clearColor) {
        this._activeRenderTarget.clear(clearColor);
      };
      WebGLRenderer2.prototype.setTransform = function setTransform(matrix) {
        this._activeRenderTarget.transform = matrix;
      };
      WebGLRenderer2.prototype.clearRenderTexture = function clearRenderTexture(renderTexture, clearColor) {
        var baseTexture = renderTexture.baseTexture;
        var renderTarget = baseTexture._glRenderTargets[this.CONTEXT_UID];
        if (renderTarget) {
          renderTarget.clear(clearColor);
        }
        return this;
      };
      WebGLRenderer2.prototype.bindRenderTexture = function bindRenderTexture(renderTexture, transform) {
        var renderTarget = void 0;
        if (renderTexture) {
          var baseTexture = renderTexture.baseTexture;
          if (!baseTexture._glRenderTargets[this.CONTEXT_UID]) {
            this.textureManager.updateTexture(baseTexture, 0);
          }
          this.unbindTexture(baseTexture);
          renderTarget = baseTexture._glRenderTargets[this.CONTEXT_UID];
          renderTarget.setFrame(renderTexture.frame);
        } else {
          renderTarget = this.rootRenderTarget;
        }
        renderTarget.transform = transform;
        this.bindRenderTarget(renderTarget);
        return this;
      };
      WebGLRenderer2.prototype.bindRenderTarget = function bindRenderTarget(renderTarget) {
        if (renderTarget !== this._activeRenderTarget) {
          this._activeRenderTarget = renderTarget;
          renderTarget.activate();
          if (this._activeShader) {
            this._activeShader.uniforms.projectionMatrix = renderTarget.projectionMatrix.toArray(true);
          }
          this.stencilManager.setMaskStack(renderTarget.stencilMaskStack);
        }
        return this;
      };
      WebGLRenderer2.prototype.bindShader = function bindShader(shader, autoProject) {
        if (this._activeShader !== shader) {
          this._activeShader = shader;
          shader.bind();
          if (autoProject !== false) {
            shader.uniforms.projectionMatrix = this._activeRenderTarget.projectionMatrix.toArray(true);
          }
        }
        return this;
      };
      WebGLRenderer2.prototype.bindTexture = function bindTexture(texture, location, forceLocation) {
        texture = texture || this.emptyTextures[location];
        texture = texture.baseTexture || texture;
        texture.touched = this.textureGC.count;
        if (!forceLocation) {
          for (var i = 0; i < this.boundTextures.length; i++) {
            if (this.boundTextures[i] === texture) {
              return i;
            }
          }
          if (location === void 0) {
            this._nextTextureLocation++;
            this._nextTextureLocation %= this.boundTextures.length;
            location = this.boundTextures.length - this._nextTextureLocation - 1;
          }
        } else {
          location = location || 0;
        }
        var gl2 = this.gl;
        var glTexture = texture._glTextures[this.CONTEXT_UID];
        if (!glTexture) {
          this.textureManager.updateTexture(texture, location);
        } else {
          this.boundTextures[location] = texture;
          gl2.activeTexture(gl2.TEXTURE0 + location);
          gl2.bindTexture(gl2.TEXTURE_2D, glTexture.texture);
        }
        return location;
      };
      WebGLRenderer2.prototype.unbindTexture = function unbindTexture(texture) {
        var gl2 = this.gl;
        texture = texture.baseTexture || texture;
        if (this._unknownBoundTextures) {
          this._unknownBoundTextures = false;
          for (var i = 0; i < this.boundTextures.length; i++) {
            if (this.boundTextures[i] === this.emptyTextures[i]) {
              gl2.activeTexture(gl2.TEXTURE0 + i);
              gl2.bindTexture(gl2.TEXTURE_2D, this.emptyTextures[i]._glTextures[this.CONTEXT_UID].texture);
            }
          }
        }
        for (var _i = 0; _i < this.boundTextures.length; _i++) {
          if (this.boundTextures[_i] === texture) {
            this.boundTextures[_i] = this.emptyTextures[_i];
            gl2.activeTexture(gl2.TEXTURE0 + _i);
            gl2.bindTexture(gl2.TEXTURE_2D, this.emptyTextures[_i]._glTextures[this.CONTEXT_UID].texture);
          }
        }
        return this;
      };
      WebGLRenderer2.prototype.createVao = function createVao() {
        return new _pixiGlCore2.default.VertexArrayObject(this.gl, this.state.attribState);
      };
      WebGLRenderer2.prototype.bindVao = function bindVao(vao) {
        if (this._activeVao === vao) {
          return this;
        }
        if (vao) {
          vao.bind();
        } else if (this._activeVao) {
          this._activeVao.unbind();
        }
        this._activeVao = vao;
        return this;
      };
      WebGLRenderer2.prototype.reset = function reset() {
        this.setObjectRenderer(this.emptyRenderer);
        this.bindVao(null);
        this._activeShader = null;
        this._activeRenderTarget = this.rootRenderTarget;
        this._unknownBoundTextures = true;
        for (var i = 0; i < this.boundTextures.length; i++) {
          this.boundTextures[i] = this.emptyTextures[i];
        }
        this.rootRenderTarget.activate();
        this.state.resetToDefault();
        return this;
      };
      WebGLRenderer2.prototype.handleContextLost = function handleContextLost(event) {
        event.preventDefault();
      };
      WebGLRenderer2.prototype.handleContextRestored = function handleContextRestored() {
        this.textureManager.removeAll();
        this.filterManager.destroy(true);
        this._initContext();
      };
      WebGLRenderer2.prototype.destroy = function destroy(removeView) {
        this.destroyPlugins();
        this.view.removeEventListener("webglcontextlost", this.handleContextLost);
        this.view.removeEventListener("webglcontextrestored", this.handleContextRestored);
        this.textureManager.destroy();
        _SystemRenderer.prototype.destroy.call(this, removeView);
        this.uid = 0;
        this.maskManager.destroy();
        this.stencilManager.destroy();
        this.filterManager.destroy();
        this.maskManager = null;
        this.filterManager = null;
        this.textureManager = null;
        this.currentRenderer = null;
        this.handleContextLost = null;
        this.handleContextRestored = null;
        this._contextOptions = null;
        this.gl.useProgram(null);
        if (this.gl.getExtension("WEBGL_lose_context")) {
          this.gl.getExtension("WEBGL_lose_context").loseContext();
        }
        this.gl = null;
      };
      return WebGLRenderer2;
    }(_SystemRenderer3.default);
    exports.default = WebGLRenderer;
    _utils.pluginTarget.mixin(WebGLRenderer);
  }
});

// node_modules/pixi.js/lib/core/sprites/webgl/generateMultiTextureShader.js
var require_generateMultiTextureShader = __commonJS({
  "node_modules/pixi.js/lib/core/sprites/webgl/generateMultiTextureShader.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.default = generateMultiTextureShader;
    var _Shader = require_Shader();
    var _Shader2 = _interopRequireDefault(_Shader);
    var _path = require_path();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var fragTemplate = ["varying vec2 vTextureCoord;", "varying vec4 vColor;", "varying float vTextureId;", "uniform sampler2D uSamplers[%count%];", "void main(void){", "vec4 color;", "%forloop%", "gl_FragColor = color * vColor;", "}"].join("\n");
    function generateMultiTextureShader(gl2, maxTextures) {
      var vertexSrc = "precision highp float;\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\nattribute float aTextureId;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\n\nvoid main(void){\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vTextureId = aTextureId;\n    vColor = aColor;\n}\n";
      var fragmentSrc = fragTemplate;
      fragmentSrc = fragmentSrc.replace(/%count%/gi, maxTextures);
      fragmentSrc = fragmentSrc.replace(/%forloop%/gi, generateSampleSrc(maxTextures));
      var shader = new _Shader2.default(gl2, vertexSrc, fragmentSrc);
      var sampleValues = [];
      for (var i = 0; i < maxTextures; i++) {
        sampleValues[i] = i;
      }
      shader.bind();
      shader.uniforms.uSamplers = sampleValues;
      return shader;
    }
    function generateSampleSrc(maxTextures) {
      var src = "";
      src += "\n";
      src += "\n";
      for (var i = 0; i < maxTextures; i++) {
        if (i > 0) {
          src += "\nelse ";
        }
        if (i < maxTextures - 1) {
          src += "if(vTextureId < " + i + ".5)";
        }
        src += "\n{";
        src += "\n	color = texture2D(uSamplers[" + i + "], vTextureCoord);";
        src += "\n}";
      }
      src += "\n";
      src += "\n";
      return src;
    }
  }
});

// node_modules/pixi.js/lib/core/renderers/webgl/utils/checkMaxIfStatmentsInShader.js
var require_checkMaxIfStatmentsInShader = __commonJS({
  "node_modules/pixi.js/lib/core/renderers/webgl/utils/checkMaxIfStatmentsInShader.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.default = checkMaxIfStatmentsInShader;
    var _pixiGlCore = require_src();
    var _pixiGlCore2 = _interopRequireDefault(_pixiGlCore);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var fragTemplate = ["precision mediump float;", "void main(void){", "float test = 0.1;", "%forloop%", "gl_FragColor = vec4(0.0);", "}"].join("\n");
    function checkMaxIfStatmentsInShader(maxIfs, gl2) {
      var createTempContext = !gl2;
      if (maxIfs === 0) {
        throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");
      }
      if (createTempContext) {
        var tinyCanvas = document.createElement("canvas");
        tinyCanvas.width = 1;
        tinyCanvas.height = 1;
        gl2 = _pixiGlCore2.default.createContext(tinyCanvas);
      }
      var shader = gl2.createShader(gl2.FRAGMENT_SHADER);
      while (true) {
        var fragmentSrc = fragTemplate.replace(/%forloop%/gi, generateIfTestSrc(maxIfs));
        gl2.shaderSource(shader, fragmentSrc);
        gl2.compileShader(shader);
        if (!gl2.getShaderParameter(shader, gl2.COMPILE_STATUS)) {
          maxIfs = maxIfs / 2 | 0;
        } else {
          break;
        }
      }
      if (createTempContext) {
        if (gl2.getExtension("WEBGL_lose_context")) {
          gl2.getExtension("WEBGL_lose_context").loseContext();
        }
      }
      return maxIfs;
    }
    function generateIfTestSrc(maxIfs) {
      var src = "";
      for (var i = 0; i < maxIfs; ++i) {
        if (i > 0) {
          src += "\nelse ";
        }
        if (i < maxIfs - 1) {
          src += "if(test == " + i + ".0){}";
        }
      }
      return src;
    }
  }
});

// node_modules/pixi.js/lib/core/sprites/webgl/BatchBuffer.js
var require_BatchBuffer = __commonJS({
  "node_modules/pixi.js/lib/core/sprites/webgl/BatchBuffer.js"(exports) {
    "use strict";
    exports.__esModule = true;
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var Buffer = function() {
      function Buffer2(size) {
        _classCallCheck(this, Buffer2);
        this.vertices = new ArrayBuffer(size);
        this.float32View = new Float32Array(this.vertices);
        this.uint32View = new Uint32Array(this.vertices);
      }
      Buffer2.prototype.destroy = function destroy() {
        this.vertices = null;
        this.positions = null;
        this.uvs = null;
        this.colors = null;
      };
      return Buffer2;
    }();
    exports.default = Buffer;
  }
});

// node_modules/pixi.js/lib/core/sprites/webgl/SpriteRenderer.js
var require_SpriteRenderer = __commonJS({
  "node_modules/pixi.js/lib/core/sprites/webgl/SpriteRenderer.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _ObjectRenderer2 = require_ObjectRenderer();
    var _ObjectRenderer3 = _interopRequireDefault(_ObjectRenderer2);
    var _WebGLRenderer = require_WebGLRenderer();
    var _WebGLRenderer2 = _interopRequireDefault(_WebGLRenderer);
    var _createIndicesForQuads = require_createIndicesForQuads();
    var _createIndicesForQuads2 = _interopRequireDefault(_createIndicesForQuads);
    var _generateMultiTextureShader = require_generateMultiTextureShader();
    var _generateMultiTextureShader2 = _interopRequireDefault(_generateMultiTextureShader);
    var _checkMaxIfStatmentsInShader = require_checkMaxIfStatmentsInShader();
    var _checkMaxIfStatmentsInShader2 = _interopRequireDefault(_checkMaxIfStatmentsInShader);
    var _BatchBuffer = require_BatchBuffer();
    var _BatchBuffer2 = _interopRequireDefault(_BatchBuffer);
    var _settings = require_settings();
    var _settings2 = _interopRequireDefault(_settings);
    var _utils = require_utils();
    var _pixiGlCore = require_src();
    var _pixiGlCore2 = _interopRequireDefault(_pixiGlCore);
    var _bitTwiddle = require_twiddle();
    var _bitTwiddle2 = _interopRequireDefault(_bitTwiddle);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var TICK = 0;
    var TEXTURE_TICK = 0;
    var SpriteRenderer = function(_ObjectRenderer) {
      _inherits(SpriteRenderer2, _ObjectRenderer);
      function SpriteRenderer2(renderer) {
        _classCallCheck(this, SpriteRenderer2);
        var _this = _possibleConstructorReturn(this, _ObjectRenderer.call(this, renderer));
        _this.vertSize = 5;
        _this.vertByteSize = _this.vertSize * 4;
        _this.size = _settings2.default.SPRITE_BATCH_SIZE;
        _this.buffers = [];
        for (var i = 1; i <= _bitTwiddle2.default.nextPow2(_this.size); i *= 2) {
          _this.buffers.push(new _BatchBuffer2.default(i * 4 * _this.vertByteSize));
        }
        _this.indices = (0, _createIndicesForQuads2.default)(_this.size);
        _this.shader = null;
        _this.currentIndex = 0;
        _this.groups = [];
        for (var k = 0; k < _this.size; k++) {
          _this.groups[k] = { textures: [], textureCount: 0, ids: [], size: 0, start: 0, blend: 0 };
        }
        _this.sprites = [];
        _this.vertexBuffers = [];
        _this.vaos = [];
        _this.vaoMax = 2;
        _this.vertexCount = 0;
        _this.renderer.on("prerender", _this.onPrerender, _this);
        return _this;
      }
      SpriteRenderer2.prototype.onContextChange = function onContextChange() {
        var gl2 = this.renderer.gl;
        if (this.renderer.legacy) {
          this.MAX_TEXTURES = 1;
        } else {
          this.MAX_TEXTURES = Math.min(gl2.getParameter(gl2.MAX_TEXTURE_IMAGE_UNITS), _settings2.default.SPRITE_MAX_TEXTURES);
          this.MAX_TEXTURES = (0, _checkMaxIfStatmentsInShader2.default)(this.MAX_TEXTURES, gl2);
        }
        this.shader = (0, _generateMultiTextureShader2.default)(gl2, this.MAX_TEXTURES);
        this.indexBuffer = _pixiGlCore2.default.GLBuffer.createIndexBuffer(gl2, this.indices, gl2.STATIC_DRAW);
        this.renderer.bindVao(null);
        var attrs = this.shader.attributes;
        for (var i = 0; i < this.vaoMax; i++) {
          var vertexBuffer = this.vertexBuffers[i] = _pixiGlCore2.default.GLBuffer.createVertexBuffer(gl2, null, gl2.STREAM_DRAW);
          var vao = this.renderer.createVao().addIndex(this.indexBuffer).addAttribute(vertexBuffer, attrs.aVertexPosition, gl2.FLOAT, false, this.vertByteSize, 0).addAttribute(vertexBuffer, attrs.aTextureCoord, gl2.UNSIGNED_SHORT, true, this.vertByteSize, 2 * 4).addAttribute(vertexBuffer, attrs.aColor, gl2.UNSIGNED_BYTE, true, this.vertByteSize, 3 * 4);
          if (attrs.aTextureId) {
            vao.addAttribute(vertexBuffer, attrs.aTextureId, gl2.FLOAT, false, this.vertByteSize, 4 * 4);
          }
          this.vaos[i] = vao;
        }
        this.vao = this.vaos[0];
        this.currentBlendMode = 99999;
        this.boundTextures = new Array(this.MAX_TEXTURES);
      };
      SpriteRenderer2.prototype.onPrerender = function onPrerender() {
        this.vertexCount = 0;
      };
      SpriteRenderer2.prototype.render = function render(sprite) {
        if (this.currentIndex >= this.size) {
          this.flush();
        }
        if (!sprite._texture._uvs) {
          return;
        }
        this.sprites[this.currentIndex++] = sprite;
      };
      SpriteRenderer2.prototype.flush = function flush() {
        if (this.currentIndex === 0) {
          return;
        }
        var gl2 = this.renderer.gl;
        var MAX_TEXTURES = this.MAX_TEXTURES;
        var np2 = _bitTwiddle2.default.nextPow2(this.currentIndex);
        var log2 = _bitTwiddle2.default.log2(np2);
        var buffer = this.buffers[log2];
        var sprites = this.sprites;
        var groups = this.groups;
        var float32View = buffer.float32View;
        var uint32View = buffer.uint32View;
        var boundTextures = this.boundTextures;
        var rendererBoundTextures = this.renderer.boundTextures;
        var touch = this.renderer.textureGC.count;
        var index = 0;
        var nextTexture = void 0;
        var currentTexture = void 0;
        var groupCount = 1;
        var textureCount = 0;
        var currentGroup = groups[0];
        var vertexData = void 0;
        var uvs = void 0;
        var blendMode = _utils.premultiplyBlendMode[sprites[0]._texture.baseTexture.premultipliedAlpha ? 1 : 0][sprites[0].blendMode];
        currentGroup.textureCount = 0;
        currentGroup.start = 0;
        currentGroup.blend = blendMode;
        TICK++;
        var i = void 0;
        for (i = 0; i < MAX_TEXTURES; ++i) {
          var bt = rendererBoundTextures[i];
          if (bt._enabled === TICK) {
            boundTextures[i] = this.renderer.emptyTextures[i];
            continue;
          }
          boundTextures[i] = bt;
          bt._virtalBoundId = i;
          bt._enabled = TICK;
        }
        TICK++;
        for (i = 0; i < this.currentIndex; ++i) {
          var sprite = sprites[i];
          sprites[i] = null;
          nextTexture = sprite._texture.baseTexture;
          var spriteBlendMode = _utils.premultiplyBlendMode[Number(nextTexture.premultipliedAlpha)][sprite.blendMode];
          if (blendMode !== spriteBlendMode) {
            blendMode = spriteBlendMode;
            currentTexture = null;
            textureCount = MAX_TEXTURES;
            TICK++;
          }
          if (currentTexture !== nextTexture) {
            currentTexture = nextTexture;
            if (nextTexture._enabled !== TICK) {
              if (textureCount === MAX_TEXTURES) {
                TICK++;
                currentGroup.size = i - currentGroup.start;
                textureCount = 0;
                currentGroup = groups[groupCount++];
                currentGroup.blend = blendMode;
                currentGroup.textureCount = 0;
                currentGroup.start = i;
              }
              nextTexture.touched = touch;
              if (nextTexture._virtalBoundId === -1) {
                for (var j = 0; j < MAX_TEXTURES; ++j) {
                  var tIndex = (j + TEXTURE_TICK) % MAX_TEXTURES;
                  var t = boundTextures[tIndex];
                  if (t._enabled !== TICK) {
                    TEXTURE_TICK++;
                    t._virtalBoundId = -1;
                    nextTexture._virtalBoundId = tIndex;
                    boundTextures[tIndex] = nextTexture;
                    break;
                  }
                }
              }
              nextTexture._enabled = TICK;
              currentGroup.textureCount++;
              currentGroup.ids[textureCount] = nextTexture._virtalBoundId;
              currentGroup.textures[textureCount++] = nextTexture;
            }
          }
          vertexData = sprite.vertexData;
          uvs = sprite._texture._uvs.uvsUint32;
          if (this.renderer.roundPixels) {
            var resolution = this.renderer.resolution;
            float32View[index] = (vertexData[0] * resolution | 0) / resolution;
            float32View[index + 1] = (vertexData[1] * resolution | 0) / resolution;
            float32View[index + 5] = (vertexData[2] * resolution | 0) / resolution;
            float32View[index + 6] = (vertexData[3] * resolution | 0) / resolution;
            float32View[index + 10] = (vertexData[4] * resolution | 0) / resolution;
            float32View[index + 11] = (vertexData[5] * resolution | 0) / resolution;
            float32View[index + 15] = (vertexData[6] * resolution | 0) / resolution;
            float32View[index + 16] = (vertexData[7] * resolution | 0) / resolution;
          } else {
            float32View[index] = vertexData[0];
            float32View[index + 1] = vertexData[1];
            float32View[index + 5] = vertexData[2];
            float32View[index + 6] = vertexData[3];
            float32View[index + 10] = vertexData[4];
            float32View[index + 11] = vertexData[5];
            float32View[index + 15] = vertexData[6];
            float32View[index + 16] = vertexData[7];
          }
          uint32View[index + 2] = uvs[0];
          uint32View[index + 7] = uvs[1];
          uint32View[index + 12] = uvs[2];
          uint32View[index + 17] = uvs[3];
          var alpha = Math.min(sprite.worldAlpha, 1);
          var argb = alpha < 1 && nextTexture.premultipliedAlpha ? (0, _utils.premultiplyTint)(sprite._tintRGB, alpha) : sprite._tintRGB + (alpha * 255 << 24);
          uint32View[index + 3] = uint32View[index + 8] = uint32View[index + 13] = uint32View[index + 18] = argb;
          float32View[index + 4] = float32View[index + 9] = float32View[index + 14] = float32View[index + 19] = nextTexture._virtalBoundId;
          index += 20;
        }
        currentGroup.size = i - currentGroup.start;
        if (!_settings2.default.CAN_UPLOAD_SAME_BUFFER) {
          if (this.vaoMax <= this.vertexCount) {
            this.vaoMax++;
            var attrs = this.shader.attributes;
            var vertexBuffer = this.vertexBuffers[this.vertexCount] = _pixiGlCore2.default.GLBuffer.createVertexBuffer(gl2, null, gl2.STREAM_DRAW);
            var vao = this.renderer.createVao().addIndex(this.indexBuffer).addAttribute(vertexBuffer, attrs.aVertexPosition, gl2.FLOAT, false, this.vertByteSize, 0).addAttribute(vertexBuffer, attrs.aTextureCoord, gl2.UNSIGNED_SHORT, true, this.vertByteSize, 2 * 4).addAttribute(vertexBuffer, attrs.aColor, gl2.UNSIGNED_BYTE, true, this.vertByteSize, 3 * 4);
            if (attrs.aTextureId) {
              vao.addAttribute(vertexBuffer, attrs.aTextureId, gl2.FLOAT, false, this.vertByteSize, 4 * 4);
            }
            this.vaos[this.vertexCount] = vao;
          }
          this.renderer.bindVao(this.vaos[this.vertexCount]);
          this.vertexBuffers[this.vertexCount].upload(buffer.vertices, 0, false);
          this.vertexCount++;
        } else {
          this.vertexBuffers[this.vertexCount].upload(buffer.vertices, 0, true);
        }
        for (i = 0; i < MAX_TEXTURES; ++i) {
          rendererBoundTextures[i]._virtalBoundId = -1;
        }
        for (i = 0; i < groupCount; ++i) {
          var group = groups[i];
          var groupTextureCount = group.textureCount;
          for (var _j = 0; _j < groupTextureCount; _j++) {
            currentTexture = group.textures[_j];
            if (rendererBoundTextures[group.ids[_j]] !== currentTexture) {
              this.renderer.bindTexture(currentTexture, group.ids[_j], true);
            }
            currentTexture._virtalBoundId = -1;
          }
          this.renderer.state.setBlendMode(group.blend);
          gl2.drawElements(gl2.TRIANGLES, group.size * 6, gl2.UNSIGNED_SHORT, group.start * 6 * 2);
        }
        this.currentIndex = 0;
      };
      SpriteRenderer2.prototype.start = function start() {
        this.renderer.bindShader(this.shader);
        if (_settings2.default.CAN_UPLOAD_SAME_BUFFER) {
          this.renderer.bindVao(this.vaos[this.vertexCount]);
          this.vertexBuffers[this.vertexCount].bind();
        }
      };
      SpriteRenderer2.prototype.stop = function stop() {
        this.flush();
      };
      SpriteRenderer2.prototype.destroy = function destroy() {
        for (var i = 0; i < this.vaoMax; i++) {
          if (this.vertexBuffers[i]) {
            this.vertexBuffers[i].destroy();
          }
          if (this.vaos[i]) {
            this.vaos[i].destroy();
          }
        }
        if (this.indexBuffer) {
          this.indexBuffer.destroy();
        }
        this.renderer.off("prerender", this.onPrerender, this);
        _ObjectRenderer.prototype.destroy.call(this);
        if (this.shader) {
          this.shader.destroy();
          this.shader = null;
        }
        this.vertexBuffers = null;
        this.vaos = null;
        this.indexBuffer = null;
        this.indices = null;
        this.sprites = null;
        for (var _i = 0; _i < this.buffers.length; ++_i) {
          this.buffers[_i].destroy();
        }
      };
      return SpriteRenderer2;
    }(_ObjectRenderer3.default);
    exports.default = SpriteRenderer;
    _WebGLRenderer2.default.registerPlugin("sprite", SpriteRenderer);
  }
});

// node_modules/pixi.js/lib/core/text/TextStyle.js
var require_TextStyle = __commonJS({
  "node_modules/pixi.js/lib/core/text/TextStyle.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _const = require_const();
    var _utils = require_utils();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var defaultStyle = {
      align: "left",
      breakWords: false,
      dropShadow: false,
      dropShadowAlpha: 1,
      dropShadowAngle: Math.PI / 6,
      dropShadowBlur: 0,
      dropShadowColor: "black",
      dropShadowDistance: 5,
      fill: "black",
      fillGradientType: _const.TEXT_GRADIENT.LINEAR_VERTICAL,
      fillGradientStops: [],
      fontFamily: "Arial",
      fontSize: 26,
      fontStyle: "normal",
      fontVariant: "normal",
      fontWeight: "normal",
      letterSpacing: 0,
      lineHeight: 0,
      lineJoin: "miter",
      miterLimit: 10,
      padding: 0,
      stroke: "black",
      strokeThickness: 0,
      textBaseline: "alphabetic",
      trim: false,
      whiteSpace: "pre",
      wordWrap: false,
      wordWrapWidth: 100,
      leading: 0
    };
    var genericFontFamilies = ["serif", "sans-serif", "monospace", "cursive", "fantasy", "system-ui"];
    var TextStyle = function() {
      function TextStyle2(style) {
        _classCallCheck(this, TextStyle2);
        this.styleID = 0;
        this.reset();
        deepCopyProperties(this, style, style);
      }
      TextStyle2.prototype.clone = function clone() {
        var clonedProperties = {};
        deepCopyProperties(clonedProperties, this, defaultStyle);
        return new TextStyle2(clonedProperties);
      };
      TextStyle2.prototype.reset = function reset() {
        deepCopyProperties(this, defaultStyle, defaultStyle);
      };
      TextStyle2.prototype.toFontString = function toFontString() {
        var fontSizeString = typeof this.fontSize === "number" ? this.fontSize + "px" : this.fontSize;
        var fontFamilies = this.fontFamily;
        if (!Array.isArray(this.fontFamily)) {
          fontFamilies = this.fontFamily.split(",");
        }
        for (var i = fontFamilies.length - 1; i >= 0; i--) {
          var fontFamily = fontFamilies[i].trim();
          if (!/([\"\'])[^\'\"]+\1/.test(fontFamily) && genericFontFamilies.indexOf(fontFamily) < 0) {
            fontFamily = '"' + fontFamily + '"';
          }
          fontFamilies[i] = fontFamily;
        }
        return this.fontStyle + " " + this.fontVariant + " " + this.fontWeight + " " + fontSizeString + " " + fontFamilies.join(",");
      };
      _createClass(TextStyle2, [{
        key: "align",
        get: function get() {
          return this._align;
        },
        set: function set(align) {
          if (this._align !== align) {
            this._align = align;
            this.styleID++;
          }
        }
        /**
         * Indicates if lines can be wrapped within words, it needs wordWrap to be set to true
         *
         * @member {boolean}
         */
      }, {
        key: "breakWords",
        get: function get() {
          return this._breakWords;
        },
        set: function set(breakWords) {
          if (this._breakWords !== breakWords) {
            this._breakWords = breakWords;
            this.styleID++;
          }
        }
        /**
         * Set a drop shadow for the text
         *
         * @member {boolean}
         */
      }, {
        key: "dropShadow",
        get: function get() {
          return this._dropShadow;
        },
        set: function set(dropShadow) {
          if (this._dropShadow !== dropShadow) {
            this._dropShadow = dropShadow;
            this.styleID++;
          }
        }
        /**
         * Set alpha for the drop shadow
         *
         * @member {number}
         */
      }, {
        key: "dropShadowAlpha",
        get: function get() {
          return this._dropShadowAlpha;
        },
        set: function set(dropShadowAlpha) {
          if (this._dropShadowAlpha !== dropShadowAlpha) {
            this._dropShadowAlpha = dropShadowAlpha;
            this.styleID++;
          }
        }
        /**
         * Set a angle of the drop shadow
         *
         * @member {number}
         */
      }, {
        key: "dropShadowAngle",
        get: function get() {
          return this._dropShadowAngle;
        },
        set: function set(dropShadowAngle) {
          if (this._dropShadowAngle !== dropShadowAngle) {
            this._dropShadowAngle = dropShadowAngle;
            this.styleID++;
          }
        }
        /**
         * Set a shadow blur radius
         *
         * @member {number}
         */
      }, {
        key: "dropShadowBlur",
        get: function get() {
          return this._dropShadowBlur;
        },
        set: function set(dropShadowBlur) {
          if (this._dropShadowBlur !== dropShadowBlur) {
            this._dropShadowBlur = dropShadowBlur;
            this.styleID++;
          }
        }
        /**
         * A fill style to be used on the dropshadow e.g 'red', '#00FF00'
         *
         * @member {string|number}
         */
      }, {
        key: "dropShadowColor",
        get: function get() {
          return this._dropShadowColor;
        },
        set: function set(dropShadowColor) {
          var outputColor = getColor(dropShadowColor);
          if (this._dropShadowColor !== outputColor) {
            this._dropShadowColor = outputColor;
            this.styleID++;
          }
        }
        /**
         * Set a distance of the drop shadow
         *
         * @member {number}
         */
      }, {
        key: "dropShadowDistance",
        get: function get() {
          return this._dropShadowDistance;
        },
        set: function set(dropShadowDistance) {
          if (this._dropShadowDistance !== dropShadowDistance) {
            this._dropShadowDistance = dropShadowDistance;
            this.styleID++;
          }
        }
        /**
         * A canvas fillstyle that will be used on the text e.g 'red', '#00FF00'.
         * Can be an array to create a gradient eg ['#000000','#FFFFFF']
         * {@link https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle|MDN}
         *
         * @member {string|string[]|number|number[]|CanvasGradient|CanvasPattern}
         */
      }, {
        key: "fill",
        get: function get() {
          return this._fill;
        },
        set: function set(fill) {
          var outputColor = getColor(fill);
          if (this._fill !== outputColor) {
            this._fill = outputColor;
            this.styleID++;
          }
        }
        /**
         * If fill is an array of colours to create a gradient, this can change the type/direction of the gradient.
         * See {@link PIXI.TEXT_GRADIENT}
         *
         * @member {number}
         */
      }, {
        key: "fillGradientType",
        get: function get() {
          return this._fillGradientType;
        },
        set: function set(fillGradientType) {
          if (this._fillGradientType !== fillGradientType) {
            this._fillGradientType = fillGradientType;
            this.styleID++;
          }
        }
        /**
         * If fill is an array of colours to create a gradient, this array can set the stop points
         * (numbers between 0 and 1) for the color, overriding the default behaviour of evenly spacing them.
         *
         * @member {number[]}
         */
      }, {
        key: "fillGradientStops",
        get: function get() {
          return this._fillGradientStops;
        },
        set: function set(fillGradientStops) {
          if (!areArraysEqual(this._fillGradientStops, fillGradientStops)) {
            this._fillGradientStops = fillGradientStops;
            this.styleID++;
          }
        }
        /**
         * The font family
         *
         * @member {string|string[]}
         */
      }, {
        key: "fontFamily",
        get: function get() {
          return this._fontFamily;
        },
        set: function set(fontFamily) {
          if (this.fontFamily !== fontFamily) {
            this._fontFamily = fontFamily;
            this.styleID++;
          }
        }
        /**
         * The font size
         * (as a number it converts to px, but as a string, equivalents are '26px','20pt','160%' or '1.6em')
         *
         * @member {number|string}
         */
      }, {
        key: "fontSize",
        get: function get() {
          return this._fontSize;
        },
        set: function set(fontSize) {
          if (this._fontSize !== fontSize) {
            this._fontSize = fontSize;
            this.styleID++;
          }
        }
        /**
         * The font style
         * ('normal', 'italic' or 'oblique')
         *
         * @member {string}
         */
      }, {
        key: "fontStyle",
        get: function get() {
          return this._fontStyle;
        },
        set: function set(fontStyle) {
          if (this._fontStyle !== fontStyle) {
            this._fontStyle = fontStyle;
            this.styleID++;
          }
        }
        /**
         * The font variant
         * ('normal' or 'small-caps')
         *
         * @member {string}
         */
      }, {
        key: "fontVariant",
        get: function get() {
          return this._fontVariant;
        },
        set: function set(fontVariant) {
          if (this._fontVariant !== fontVariant) {
            this._fontVariant = fontVariant;
            this.styleID++;
          }
        }
        /**
         * The font weight
         * ('normal', 'bold', 'bolder', 'lighter' and '100', '200', '300', '400', '500', '600', '700', 800' or '900')
         *
         * @member {string}
         */
      }, {
        key: "fontWeight",
        get: function get() {
          return this._fontWeight;
        },
        set: function set(fontWeight) {
          if (this._fontWeight !== fontWeight) {
            this._fontWeight = fontWeight;
            this.styleID++;
          }
        }
        /**
         * The amount of spacing between letters, default is 0
         *
         * @member {number}
         */
      }, {
        key: "letterSpacing",
        get: function get() {
          return this._letterSpacing;
        },
        set: function set(letterSpacing) {
          if (this._letterSpacing !== letterSpacing) {
            this._letterSpacing = letterSpacing;
            this.styleID++;
          }
        }
        /**
         * The line height, a number that represents the vertical space that a letter uses
         *
         * @member {number}
         */
      }, {
        key: "lineHeight",
        get: function get() {
          return this._lineHeight;
        },
        set: function set(lineHeight) {
          if (this._lineHeight !== lineHeight) {
            this._lineHeight = lineHeight;
            this.styleID++;
          }
        }
        /**
         * The space between lines
         *
         * @member {number}
         */
      }, {
        key: "leading",
        get: function get() {
          return this._leading;
        },
        set: function set(leading) {
          if (this._leading !== leading) {
            this._leading = leading;
            this.styleID++;
          }
        }
        /**
         * The lineJoin property sets the type of corner created, it can resolve spiked text issues.
         * Default is 'miter' (creates a sharp corner).
         *
         * @member {string}
         */
      }, {
        key: "lineJoin",
        get: function get() {
          return this._lineJoin;
        },
        set: function set(lineJoin) {
          if (this._lineJoin !== lineJoin) {
            this._lineJoin = lineJoin;
            this.styleID++;
          }
        }
        /**
         * The miter limit to use when using the 'miter' lineJoin mode
         * This can reduce or increase the spikiness of rendered text.
         *
         * @member {number}
         */
      }, {
        key: "miterLimit",
        get: function get() {
          return this._miterLimit;
        },
        set: function set(miterLimit) {
          if (this._miterLimit !== miterLimit) {
            this._miterLimit = miterLimit;
            this.styleID++;
          }
        }
        /**
         * Occasionally some fonts are cropped. Adding some padding will prevent this from happening
         * by adding padding to all sides of the text.
         *
         * @member {number}
         */
      }, {
        key: "padding",
        get: function get() {
          return this._padding;
        },
        set: function set(padding) {
          if (this._padding !== padding) {
            this._padding = padding;
            this.styleID++;
          }
        }
        /**
         * A canvas fillstyle that will be used on the text stroke
         * e.g 'blue', '#FCFF00'
         *
         * @member {string|number}
         */
      }, {
        key: "stroke",
        get: function get() {
          return this._stroke;
        },
        set: function set(stroke) {
          var outputColor = getColor(stroke);
          if (this._stroke !== outputColor) {
            this._stroke = outputColor;
            this.styleID++;
          }
        }
        /**
         * A number that represents the thickness of the stroke.
         * Default is 0 (no stroke)
         *
         * @member {number}
         */
      }, {
        key: "strokeThickness",
        get: function get() {
          return this._strokeThickness;
        },
        set: function set(strokeThickness) {
          if (this._strokeThickness !== strokeThickness) {
            this._strokeThickness = strokeThickness;
            this.styleID++;
          }
        }
        /**
         * The baseline of the text that is rendered.
         *
         * @member {string}
         */
      }, {
        key: "textBaseline",
        get: function get() {
          return this._textBaseline;
        },
        set: function set(textBaseline) {
          if (this._textBaseline !== textBaseline) {
            this._textBaseline = textBaseline;
            this.styleID++;
          }
        }
        /**
         * Trim transparent borders
         *
         * @member {boolean}
         */
      }, {
        key: "trim",
        get: function get() {
          return this._trim;
        },
        set: function set(trim) {
          if (this._trim !== trim) {
            this._trim = trim;
            this.styleID++;
          }
        }
        /**
         * How newlines and spaces should be handled.
         * Default is 'pre' (preserve, preserve).
         *
         *  value       | New lines     |   Spaces
         *  ---         | ---           |   ---
         * 'normal'     | Collapse      |   Collapse
         * 'pre'        | Preserve      |   Preserve
         * 'pre-line'   | Preserve      |   Collapse
         *
         * @member {string}
         */
      }, {
        key: "whiteSpace",
        get: function get() {
          return this._whiteSpace;
        },
        set: function set(whiteSpace) {
          if (this._whiteSpace !== whiteSpace) {
            this._whiteSpace = whiteSpace;
            this.styleID++;
          }
        }
        /**
         * Indicates if word wrap should be used
         *
         * @member {boolean}
         */
      }, {
        key: "wordWrap",
        get: function get() {
          return this._wordWrap;
        },
        set: function set(wordWrap) {
          if (this._wordWrap !== wordWrap) {
            this._wordWrap = wordWrap;
            this.styleID++;
          }
        }
        /**
         * The width at which text will wrap, it needs wordWrap to be set to true
         *
         * @member {number}
         */
      }, {
        key: "wordWrapWidth",
        get: function get() {
          return this._wordWrapWidth;
        },
        set: function set(wordWrapWidth) {
          if (this._wordWrapWidth !== wordWrapWidth) {
            this._wordWrapWidth = wordWrapWidth;
            this.styleID++;
          }
        }
      }]);
      return TextStyle2;
    }();
    exports.default = TextStyle;
    function getSingleColor(color) {
      if (typeof color === "number") {
        return (0, _utils.hex2string)(color);
      } else if (typeof color === "string") {
        if (color.indexOf("0x") === 0) {
          color = color.replace("0x", "#");
        }
      }
      return color;
    }
    function getColor(color) {
      if (!Array.isArray(color)) {
        return getSingleColor(color);
      } else {
        for (var i = 0; i < color.length; ++i) {
          color[i] = getSingleColor(color[i]);
        }
        return color;
      }
    }
    function areArraysEqual(array1, array2) {
      if (!Array.isArray(array1) || !Array.isArray(array2)) {
        return false;
      }
      if (array1.length !== array2.length) {
        return false;
      }
      for (var i = 0; i < array1.length; ++i) {
        if (array1[i] !== array2[i]) {
          return false;
        }
      }
      return true;
    }
    function deepCopyProperties(target, source, propertyObj) {
      for (var prop in propertyObj) {
        if (Array.isArray(source[prop])) {
          target[prop] = source[prop].slice();
        } else {
          target[prop] = source[prop];
        }
      }
    }
  }
});

// node_modules/pixi.js/lib/core/text/TextMetrics.js
var require_TextMetrics = __commonJS({
  "node_modules/pixi.js/lib/core/text/TextMetrics.js"(exports) {
    "use strict";
    exports.__esModule = true;
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var TextMetrics = function() {
      function TextMetrics2(text, style, width, height, lines, lineWidths, lineHeight, maxLineWidth, fontProperties) {
        _classCallCheck(this, TextMetrics2);
        this.text = text;
        this.style = style;
        this.width = width;
        this.height = height;
        this.lines = lines;
        this.lineWidths = lineWidths;
        this.lineHeight = lineHeight;
        this.maxLineWidth = maxLineWidth;
        this.fontProperties = fontProperties;
      }
      TextMetrics2.measureText = function measureText(text, style, wordWrap) {
        var canvas2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : TextMetrics2._canvas;
        wordWrap = wordWrap === void 0 || wordWrap === null ? style.wordWrap : wordWrap;
        var font = style.toFontString();
        var fontProperties = TextMetrics2.measureFont(font);
        var context = canvas2.getContext("2d");
        context.font = font;
        var outputText = wordWrap ? TextMetrics2.wordWrap(text, style, canvas2) : text;
        var lines = outputText.split(/(?:\r\n|\r|\n)/);
        var lineWidths = new Array(lines.length);
        var maxLineWidth = 0;
        for (var i = 0; i < lines.length; i++) {
          var lineWidth = context.measureText(lines[i]).width + (lines[i].length - 1) * style.letterSpacing;
          lineWidths[i] = lineWidth;
          maxLineWidth = Math.max(maxLineWidth, lineWidth);
        }
        var width = maxLineWidth + style.strokeThickness;
        if (style.dropShadow) {
          width += style.dropShadowDistance;
        }
        var lineHeight = style.lineHeight || fontProperties.fontSize + style.strokeThickness;
        var height = Math.max(lineHeight, fontProperties.fontSize + style.strokeThickness) + (lines.length - 1) * (lineHeight + style.leading);
        if (style.dropShadow) {
          height += style.dropShadowDistance;
        }
        return new TextMetrics2(text, style, width, height, lines, lineWidths, lineHeight + style.leading, maxLineWidth, fontProperties);
      };
      TextMetrics2.wordWrap = function wordWrap(text, style) {
        var canvas2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : TextMetrics2._canvas;
        var context = canvas2.getContext("2d");
        var width = 0;
        var line = "";
        var lines = "";
        var cache = {};
        var letterSpacing = style.letterSpacing, whiteSpace = style.whiteSpace;
        var collapseSpaces = TextMetrics2.collapseSpaces(whiteSpace);
        var collapseNewlines = TextMetrics2.collapseNewlines(whiteSpace);
        var canPrependSpaces = !collapseSpaces;
        var wordWrapWidth = style.wordWrapWidth + letterSpacing;
        var tokens = TextMetrics2.tokenize(text);
        for (var i = 0; i < tokens.length; i++) {
          var token = tokens[i];
          if (TextMetrics2.isNewline(token)) {
            if (!collapseNewlines) {
              lines += TextMetrics2.addLine(line);
              canPrependSpaces = !collapseSpaces;
              line = "";
              width = 0;
              continue;
            }
            token = " ";
          }
          if (collapseSpaces) {
            var currIsBreakingSpace = TextMetrics2.isBreakingSpace(token);
            var lastIsBreakingSpace = TextMetrics2.isBreakingSpace(line[line.length - 1]);
            if (currIsBreakingSpace && lastIsBreakingSpace) {
              continue;
            }
          }
          var tokenWidth = TextMetrics2.getFromCache(token, letterSpacing, cache, context);
          if (tokenWidth > wordWrapWidth) {
            if (line !== "") {
              lines += TextMetrics2.addLine(line);
              line = "";
              width = 0;
            }
            if (TextMetrics2.canBreakWords(token, style.breakWords)) {
              var characters = token.split("");
              for (var j = 0; j < characters.length; j++) {
                var char = characters[j];
                var k = 1;
                while (characters[j + k]) {
                  var nextChar = characters[j + k];
                  var lastChar = char[char.length - 1];
                  if (!TextMetrics2.canBreakChars(lastChar, nextChar, token, j, style.breakWords)) {
                    char += nextChar;
                  } else {
                    break;
                  }
                  k++;
                }
                j += char.length - 1;
                var characterWidth = TextMetrics2.getFromCache(char, letterSpacing, cache, context);
                if (characterWidth + width > wordWrapWidth) {
                  lines += TextMetrics2.addLine(line);
                  canPrependSpaces = false;
                  line = "";
                  width = 0;
                }
                line += char;
                width += characterWidth;
              }
            } else {
              if (line.length > 0) {
                lines += TextMetrics2.addLine(line);
                line = "";
                width = 0;
              }
              var isLastToken = i === tokens.length - 1;
              lines += TextMetrics2.addLine(token, !isLastToken);
              canPrependSpaces = false;
              line = "";
              width = 0;
            }
          } else {
            if (tokenWidth + width > wordWrapWidth) {
              canPrependSpaces = false;
              lines += TextMetrics2.addLine(line);
              line = "";
              width = 0;
            }
            if (line.length > 0 || !TextMetrics2.isBreakingSpace(token) || canPrependSpaces) {
              line += token;
              width += tokenWidth;
            }
          }
        }
        lines += TextMetrics2.addLine(line, false);
        return lines;
      };
      TextMetrics2.addLine = function addLine(line) {
        var newLine = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
        line = TextMetrics2.trimRight(line);
        line = newLine ? line + "\n" : line;
        return line;
      };
      TextMetrics2.getFromCache = function getFromCache(key, letterSpacing, cache, context) {
        var width = cache[key];
        if (width === void 0) {
          var spacing = key.length * letterSpacing;
          width = context.measureText(key).width + spacing;
          cache[key] = width;
        }
        return width;
      };
      TextMetrics2.collapseSpaces = function collapseSpaces(whiteSpace) {
        return whiteSpace === "normal" || whiteSpace === "pre-line";
      };
      TextMetrics2.collapseNewlines = function collapseNewlines(whiteSpace) {
        return whiteSpace === "normal";
      };
      TextMetrics2.trimRight = function trimRight(text) {
        if (typeof text !== "string") {
          return "";
        }
        for (var i = text.length - 1; i >= 0; i--) {
          var char = text[i];
          if (!TextMetrics2.isBreakingSpace(char)) {
            break;
          }
          text = text.slice(0, -1);
        }
        return text;
      };
      TextMetrics2.isNewline = function isNewline(char) {
        if (typeof char !== "string") {
          return false;
        }
        return TextMetrics2._newlines.indexOf(char.charCodeAt(0)) >= 0;
      };
      TextMetrics2.isBreakingSpace = function isBreakingSpace(char) {
        if (typeof char !== "string") {
          return false;
        }
        return TextMetrics2._breakingSpaces.indexOf(char.charCodeAt(0)) >= 0;
      };
      TextMetrics2.tokenize = function tokenize(text) {
        var tokens = [];
        var token = "";
        if (typeof text !== "string") {
          return tokens;
        }
        for (var i = 0; i < text.length; i++) {
          var char = text[i];
          if (TextMetrics2.isBreakingSpace(char) || TextMetrics2.isNewline(char)) {
            if (token !== "") {
              tokens.push(token);
              token = "";
            }
            tokens.push(char);
            continue;
          }
          token += char;
        }
        if (token !== "") {
          tokens.push(token);
        }
        return tokens;
      };
      TextMetrics2.canBreakWords = function canBreakWords(token, breakWords) {
        return breakWords;
      };
      TextMetrics2.canBreakChars = function canBreakChars(char, nextChar, token, index, breakWords) {
        return true;
      };
      TextMetrics2.measureFont = function measureFont(font) {
        if (TextMetrics2._fonts[font]) {
          return TextMetrics2._fonts[font];
        }
        var properties = {};
        var canvas2 = TextMetrics2._canvas;
        var context = TextMetrics2._context;
        context.font = font;
        var metricsString = TextMetrics2.METRICS_STRING + TextMetrics2.BASELINE_SYMBOL;
        var width = Math.ceil(context.measureText(metricsString).width);
        var baseline = Math.ceil(context.measureText(TextMetrics2.BASELINE_SYMBOL).width);
        var height = 2 * baseline;
        baseline = baseline * TextMetrics2.BASELINE_MULTIPLIER | 0;
        canvas2.width = width;
        canvas2.height = height;
        context.fillStyle = "#f00";
        context.fillRect(0, 0, width, height);
        context.font = font;
        context.textBaseline = "alphabetic";
        context.fillStyle = "#000";
        context.fillText(metricsString, 0, baseline);
        var imagedata = context.getImageData(0, 0, width, height).data;
        var pixels = imagedata.length;
        var line = width * 4;
        var i = 0;
        var idx = 0;
        var stop = false;
        for (i = 0; i < baseline; ++i) {
          for (var j = 0; j < line; j += 4) {
            if (imagedata[idx + j] !== 255) {
              stop = true;
              break;
            }
          }
          if (!stop) {
            idx += line;
          } else {
            break;
          }
        }
        properties.ascent = baseline - i;
        idx = pixels - line;
        stop = false;
        for (i = height; i > baseline; --i) {
          for (var _j = 0; _j < line; _j += 4) {
            if (imagedata[idx + _j] !== 255) {
              stop = true;
              break;
            }
          }
          if (!stop) {
            idx -= line;
          } else {
            break;
          }
        }
        properties.descent = i - baseline;
        properties.fontSize = properties.ascent + properties.descent;
        TextMetrics2._fonts[font] = properties;
        return properties;
      };
      TextMetrics2.clearMetrics = function clearMetrics() {
        var font = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
        if (font) {
          delete TextMetrics2._fonts[font];
        } else {
          TextMetrics2._fonts = {};
        }
      };
      return TextMetrics2;
    }();
    exports.default = TextMetrics;
    var canvas = document.createElement("canvas");
    canvas.width = canvas.height = 10;
    TextMetrics._canvas = canvas;
    TextMetrics._context = canvas.getContext("2d");
    TextMetrics._fonts = {};
    TextMetrics.METRICS_STRING = "|Éq";
    TextMetrics.BASELINE_SYMBOL = "M";
    TextMetrics.BASELINE_MULTIPLIER = 1.4;
    TextMetrics._newlines = [
      10,
      // line feed
      13
    ];
    TextMetrics._breakingSpaces = [
      9,
      // character tabulation
      32,
      // space
      8192,
      // en quad
      8193,
      // em quad
      8194,
      // en space
      8195,
      // em space
      8196,
      // three-per-em space
      8197,
      // four-per-em space
      8198,
      // six-per-em space
      8200,
      // punctuation space
      8201,
      // thin space
      8202,
      // hair space
      8287,
      // medium mathematical space
      12288
    ];
  }
});

// node_modules/pixi.js/lib/core/utils/trimCanvas.js
var require_trimCanvas = __commonJS({
  "node_modules/pixi.js/lib/core/utils/trimCanvas.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.default = trimCanvas;
    function trimCanvas(canvas) {
      var width = canvas.width;
      var height = canvas.height;
      var context = canvas.getContext("2d");
      var imageData = context.getImageData(0, 0, width, height);
      var pixels = imageData.data;
      var len = pixels.length;
      var bound = {
        top: null,
        left: null,
        right: null,
        bottom: null
      };
      var data = null;
      var i = void 0;
      var x = void 0;
      var y = void 0;
      for (i = 0; i < len; i += 4) {
        if (pixels[i + 3] !== 0) {
          x = i / 4 % width;
          y = ~~(i / 4 / width);
          if (bound.top === null) {
            bound.top = y;
          }
          if (bound.left === null) {
            bound.left = x;
          } else if (x < bound.left) {
            bound.left = x;
          }
          if (bound.right === null) {
            bound.right = x + 1;
          } else if (bound.right < x) {
            bound.right = x + 1;
          }
          if (bound.bottom === null) {
            bound.bottom = y;
          } else if (bound.bottom < y) {
            bound.bottom = y;
          }
        }
      }
      if (bound.top !== null) {
        width = bound.right - bound.left;
        height = bound.bottom - bound.top + 1;
        data = context.getImageData(bound.left, bound.top, width, height);
      }
      return {
        height,
        width,
        data
      };
    }
  }
});

// node_modules/pixi.js/lib/core/text/Text.js
var require_Text = __commonJS({
  "node_modules/pixi.js/lib/core/text/Text.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _Sprite2 = require_Sprite();
    var _Sprite3 = _interopRequireDefault(_Sprite2);
    var _Texture = require_Texture();
    var _Texture2 = _interopRequireDefault(_Texture);
    var _math = require_math();
    var _utils = require_utils();
    var _const = require_const();
    var _settings = require_settings();
    var _settings2 = _interopRequireDefault(_settings);
    var _TextStyle = require_TextStyle();
    var _TextStyle2 = _interopRequireDefault(_TextStyle);
    var _TextMetrics = require_TextMetrics();
    var _TextMetrics2 = _interopRequireDefault(_TextMetrics);
    var _trimCanvas = require_trimCanvas();
    var _trimCanvas2 = _interopRequireDefault(_trimCanvas);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var defaultDestroyOptions = {
      texture: true,
      children: false,
      baseTexture: true
    };
    var Text = function(_Sprite) {
      _inherits(Text2, _Sprite);
      function Text2(text, style, canvas) {
        _classCallCheck(this, Text2);
        canvas = canvas || document.createElement("canvas");
        canvas.width = 3;
        canvas.height = 3;
        var texture = _Texture2.default.fromCanvas(canvas, _settings2.default.SCALE_MODE, "text");
        texture.orig = new _math.Rectangle();
        texture.trim = new _math.Rectangle();
        var _this = _possibleConstructorReturn(this, _Sprite.call(this, texture));
        _Texture2.default.addToCache(_this._texture, _this._texture.baseTexture.textureCacheIds[0]);
        _this.canvas = canvas;
        _this.context = _this.canvas.getContext("2d");
        _this.resolution = _settings2.default.RESOLUTION;
        _this._text = null;
        _this._style = null;
        _this._styleListener = null;
        _this._font = "";
        _this.text = text;
        _this.style = style;
        _this.localStyleID = -1;
        return _this;
      }
      Text2.prototype.updateText = function updateText(respectDirty) {
        var style = this._style;
        if (this.localStyleID !== style.styleID) {
          this.dirty = true;
          this.localStyleID = style.styleID;
        }
        if (!this.dirty && respectDirty) {
          return;
        }
        this._font = this._style.toFontString();
        var context = this.context;
        var measured = _TextMetrics2.default.measureText(this._text, this._style, this._style.wordWrap, this.canvas);
        var width = measured.width;
        var height = measured.height;
        var lines = measured.lines;
        var lineHeight = measured.lineHeight;
        var lineWidths = measured.lineWidths;
        var maxLineWidth = measured.maxLineWidth;
        var fontProperties = measured.fontProperties;
        this.canvas.width = Math.ceil((Math.max(1, width) + style.padding * 2) * this.resolution);
        this.canvas.height = Math.ceil((Math.max(1, height) + style.padding * 2) * this.resolution);
        context.scale(this.resolution, this.resolution);
        context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        context.font = this._font;
        context.strokeStyle = style.stroke;
        context.lineWidth = style.strokeThickness;
        context.textBaseline = style.textBaseline;
        context.lineJoin = style.lineJoin;
        context.miterLimit = style.miterLimit;
        var linePositionX = void 0;
        var linePositionY = void 0;
        if (style.dropShadow) {
          context.fillStyle = style.dropShadowColor;
          context.globalAlpha = style.dropShadowAlpha;
          context.shadowBlur = style.dropShadowBlur;
          if (style.dropShadowBlur > 0) {
            context.shadowColor = style.dropShadowColor;
          }
          var xShadowOffset = Math.cos(style.dropShadowAngle) * style.dropShadowDistance;
          var yShadowOffset = Math.sin(style.dropShadowAngle) * style.dropShadowDistance;
          for (var i = 0; i < lines.length; i++) {
            linePositionX = style.strokeThickness / 2;
            linePositionY = style.strokeThickness / 2 + i * lineHeight + fontProperties.ascent;
            if (style.align === "right") {
              linePositionX += maxLineWidth - lineWidths[i];
            } else if (style.align === "center") {
              linePositionX += (maxLineWidth - lineWidths[i]) / 2;
            }
            if (style.fill) {
              this.drawLetterSpacing(lines[i], linePositionX + xShadowOffset + style.padding, linePositionY + yShadowOffset + style.padding);
              if (style.stroke && style.strokeThickness) {
                context.strokeStyle = style.dropShadowColor;
                this.drawLetterSpacing(lines[i], linePositionX + xShadowOffset + style.padding, linePositionY + yShadowOffset + style.padding, true);
                context.strokeStyle = style.stroke;
              }
            }
          }
        }
        context.shadowBlur = 0;
        context.globalAlpha = 1;
        context.fillStyle = this._generateFillStyle(style, lines);
        for (var _i = 0; _i < lines.length; _i++) {
          linePositionX = style.strokeThickness / 2;
          linePositionY = style.strokeThickness / 2 + _i * lineHeight + fontProperties.ascent;
          if (style.align === "right") {
            linePositionX += maxLineWidth - lineWidths[_i];
          } else if (style.align === "center") {
            linePositionX += (maxLineWidth - lineWidths[_i]) / 2;
          }
          if (style.stroke && style.strokeThickness) {
            this.drawLetterSpacing(lines[_i], linePositionX + style.padding, linePositionY + style.padding, true);
          }
          if (style.fill) {
            this.drawLetterSpacing(lines[_i], linePositionX + style.padding, linePositionY + style.padding);
          }
        }
        this.updateTexture();
      };
      Text2.prototype.drawLetterSpacing = function drawLetterSpacing(text, x, y) {
        var isStroke = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
        var style = this._style;
        var letterSpacing = style.letterSpacing;
        if (letterSpacing === 0) {
          if (isStroke) {
            this.context.strokeText(text, x, y);
          } else {
            this.context.fillText(text, x, y);
          }
          return;
        }
        var characters = String.prototype.split.call(text, "");
        var currentPosition = x;
        var index = 0;
        var current = "";
        var previousWidth = this.context.measureText(text).width;
        var currentWidth = 0;
        while (index < text.length) {
          current = characters[index++];
          if (isStroke) {
            this.context.strokeText(current, currentPosition, y);
          } else {
            this.context.fillText(current, currentPosition, y);
          }
          currentWidth = this.context.measureText(text.substring(index)).width;
          currentPosition += previousWidth - currentWidth + letterSpacing;
          previousWidth = currentWidth;
        }
      };
      Text2.prototype.updateTexture = function updateTexture() {
        var canvas = this.canvas;
        if (this._style.trim) {
          var trimmed = (0, _trimCanvas2.default)(canvas);
          if (trimmed.data) {
            canvas.width = trimmed.width;
            canvas.height = trimmed.height;
            this.context.putImageData(trimmed.data, 0, 0);
          }
        }
        var texture = this._texture;
        var style = this._style;
        var padding = style.trim ? 0 : style.padding;
        var baseTexture = texture.baseTexture;
        baseTexture.hasLoaded = true;
        baseTexture.resolution = this.resolution;
        baseTexture.realWidth = canvas.width;
        baseTexture.realHeight = canvas.height;
        baseTexture.width = canvas.width / this.resolution;
        baseTexture.height = canvas.height / this.resolution;
        texture.trim.width = texture._frame.width = canvas.width / this.resolution;
        texture.trim.height = texture._frame.height = canvas.height / this.resolution;
        texture.trim.x = -padding;
        texture.trim.y = -padding;
        texture.orig.width = texture._frame.width - padding * 2;
        texture.orig.height = texture._frame.height - padding * 2;
        this._onTextureUpdate();
        baseTexture.emit("update", baseTexture);
        this.dirty = false;
      };
      Text2.prototype.renderWebGL = function renderWebGL(renderer) {
        if (this.resolution !== renderer.resolution) {
          this.resolution = renderer.resolution;
          this.dirty = true;
        }
        this.updateText(true);
        _Sprite.prototype.renderWebGL.call(this, renderer);
      };
      Text2.prototype._renderCanvas = function _renderCanvas(renderer) {
        if (this.resolution !== renderer.resolution) {
          this.resolution = renderer.resolution;
          this.dirty = true;
        }
        this.updateText(true);
        _Sprite.prototype._renderCanvas.call(this, renderer);
      };
      Text2.prototype.getLocalBounds = function getLocalBounds(rect) {
        this.updateText(true);
        return _Sprite.prototype.getLocalBounds.call(this, rect);
      };
      Text2.prototype._calculateBounds = function _calculateBounds() {
        this.updateText(true);
        this.calculateVertices();
        this._bounds.addQuad(this.vertexData);
      };
      Text2.prototype._onStyleChange = function _onStyleChange() {
        this.dirty = true;
      };
      Text2.prototype._generateFillStyle = function _generateFillStyle(style, lines) {
        if (!Array.isArray(style.fill)) {
          return style.fill;
        }
        if (navigator.isCocoonJS) {
          return style.fill[0];
        }
        var gradient = void 0;
        var totalIterations = void 0;
        var currentIteration = void 0;
        var stop = void 0;
        var width = this.canvas.width / this.resolution;
        var height = this.canvas.height / this.resolution;
        var fill = style.fill.slice();
        var fillGradientStops = style.fillGradientStops.slice();
        if (!fillGradientStops.length) {
          var lengthPlus1 = fill.length + 1;
          for (var i = 1; i < lengthPlus1; ++i) {
            fillGradientStops.push(i / lengthPlus1);
          }
        }
        fill.unshift(style.fill[0]);
        fillGradientStops.unshift(0);
        fill.push(style.fill[style.fill.length - 1]);
        fillGradientStops.push(1);
        if (style.fillGradientType === _const.TEXT_GRADIENT.LINEAR_VERTICAL) {
          gradient = this.context.createLinearGradient(width / 2, 0, width / 2, height);
          totalIterations = (fill.length + 1) * lines.length;
          currentIteration = 0;
          for (var _i2 = 0; _i2 < lines.length; _i2++) {
            currentIteration += 1;
            for (var j = 0; j < fill.length; j++) {
              if (typeof fillGradientStops[j] === "number") {
                stop = fillGradientStops[j] / lines.length + _i2 / lines.length;
              } else {
                stop = currentIteration / totalIterations;
              }
              gradient.addColorStop(stop, fill[j]);
              currentIteration++;
            }
          }
        } else {
          gradient = this.context.createLinearGradient(0, height / 2, width, height / 2);
          totalIterations = fill.length + 1;
          currentIteration = 1;
          for (var _i3 = 0; _i3 < fill.length; _i3++) {
            if (typeof fillGradientStops[_i3] === "number") {
              stop = fillGradientStops[_i3];
            } else {
              stop = currentIteration / totalIterations;
            }
            gradient.addColorStop(stop, fill[_i3]);
            currentIteration++;
          }
        }
        return gradient;
      };
      Text2.prototype.destroy = function destroy(options) {
        if (typeof options === "boolean") {
          options = { children: options };
        }
        options = Object.assign({}, defaultDestroyOptions, options);
        _Sprite.prototype.destroy.call(this, options);
        this.context = null;
        this.canvas = null;
        this._style = null;
      };
      _createClass(Text2, [{
        key: "width",
        get: function get() {
          this.updateText(true);
          return Math.abs(this.scale.x) * this._texture.orig.width;
        },
        set: function set(value) {
          this.updateText(true);
          var s = (0, _utils.sign)(this.scale.x) || 1;
          this.scale.x = s * value / this._texture.orig.width;
          this._width = value;
        }
        /**
         * The height of the Text, setting this will actually modify the scale to achieve the value set
         *
         * @member {number}
         */
      }, {
        key: "height",
        get: function get() {
          this.updateText(true);
          return Math.abs(this.scale.y) * this._texture.orig.height;
        },
        set: function set(value) {
          this.updateText(true);
          var s = (0, _utils.sign)(this.scale.y) || 1;
          this.scale.y = s * value / this._texture.orig.height;
          this._height = value;
        }
        /**
         * Set the style of the text. Set up an event listener to listen for changes on the style
         * object and mark the text as dirty.
         *
         * @member {object|PIXI.TextStyle}
         */
      }, {
        key: "style",
        get: function get() {
          return this._style;
        },
        set: function set(style) {
          style = style || {};
          if (style instanceof _TextStyle2.default) {
            this._style = style;
          } else {
            this._style = new _TextStyle2.default(style);
          }
          this.localStyleID = -1;
          this.dirty = true;
        }
        /**
         * Set the copy for the text object. To split a line you can use '\n'.
         *
         * @member {string}
         */
      }, {
        key: "text",
        get: function get() {
          return this._text;
        },
        set: function set(text) {
          text = String(text === "" || text === null || text === void 0 ? " " : text);
          if (this._text === text) {
            return;
          }
          this._text = text;
          this.dirty = true;
        }
      }]);
      return Text2;
    }(_Sprite3.default);
    exports.default = Text;
  }
});

// node_modules/pixi.js/lib/core/graphics/GraphicsData.js
var require_GraphicsData = __commonJS({
  "node_modules/pixi.js/lib/core/graphics/GraphicsData.js"(exports) {
    "use strict";
    exports.__esModule = true;
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var GraphicsData = function() {
      function GraphicsData2(lineWidth, lineColor, lineAlpha, fillColor, fillAlpha, fill, nativeLines, shape, lineAlignment) {
        _classCallCheck(this, GraphicsData2);
        this.lineWidth = lineWidth;
        this.lineAlignment = lineAlignment;
        this.nativeLines = nativeLines;
        this.lineColor = lineColor;
        this.lineAlpha = lineAlpha;
        this._lineTint = lineColor;
        this.fillColor = fillColor;
        this.fillAlpha = fillAlpha;
        this._fillTint = fillColor;
        this.fill = fill;
        this.holes = [];
        this.shape = shape;
        this.type = shape.type;
      }
      GraphicsData2.prototype.clone = function clone() {
        return new GraphicsData2(this.lineWidth, this.lineColor, this.lineAlpha, this.fillColor, this.fillAlpha, this.fill, this.nativeLines, this.shape, this.lineAlignment);
      };
      GraphicsData2.prototype.addHole = function addHole(shape) {
        this.holes.push(shape);
      };
      GraphicsData2.prototype.destroy = function destroy() {
        this.shape = null;
        this.holes = null;
      };
      return GraphicsData2;
    }();
    exports.default = GraphicsData;
  }
});

// node_modules/pixi.js/lib/core/graphics/utils/bezierCurveTo.js
var require_bezierCurveTo = __commonJS({
  "node_modules/pixi.js/lib/core/graphics/utils/bezierCurveTo.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.default = bezierCurveTo;
    function bezierCurveTo(fromX, fromY, cpX, cpY, cpX2, cpY2, toX, toY, n) {
      var path = arguments.length > 9 && arguments[9] !== void 0 ? arguments[9] : [];
      var dt = 0;
      var dt2 = 0;
      var dt3 = 0;
      var t2 = 0;
      var t3 = 0;
      path.push(fromX, fromY);
      for (var i = 1, j = 0; i <= n; ++i) {
        j = i / n;
        dt = 1 - j;
        dt2 = dt * dt;
        dt3 = dt2 * dt;
        t2 = j * j;
        t3 = t2 * j;
        path.push(dt3 * fromX + 3 * dt2 * j * cpX + 3 * dt * t2 * cpX2 + t3 * toX, dt3 * fromY + 3 * dt2 * j * cpY + 3 * dt * t2 * cpY2 + t3 * toY);
      }
      return path;
    }
  }
});

// node_modules/pixi.js/lib/core/graphics/Graphics.js
var require_Graphics = __commonJS({
  "node_modules/pixi.js/lib/core/graphics/Graphics.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _Container2 = require_Container();
    var _Container3 = _interopRequireDefault(_Container2);
    var _RenderTexture = require_RenderTexture();
    var _RenderTexture2 = _interopRequireDefault(_RenderTexture);
    var _Texture = require_Texture();
    var _Texture2 = _interopRequireDefault(_Texture);
    var _GraphicsData = require_GraphicsData();
    var _GraphicsData2 = _interopRequireDefault(_GraphicsData);
    var _Sprite = require_Sprite();
    var _Sprite2 = _interopRequireDefault(_Sprite);
    var _math = require_math();
    var _utils = require_utils();
    var _const = require_const();
    var _Bounds = require_Bounds();
    var _Bounds2 = _interopRequireDefault(_Bounds);
    var _bezierCurveTo2 = require_bezierCurveTo();
    var _bezierCurveTo3 = _interopRequireDefault(_bezierCurveTo2);
    var _CanvasRenderer = require_CanvasRenderer();
    var _CanvasRenderer2 = _interopRequireDefault(_CanvasRenderer);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var canvasRenderer = void 0;
    var tempMatrix = new _math.Matrix();
    var tempPoint = new _math.Point();
    var tempColor1 = new Float32Array(4);
    var tempColor2 = new Float32Array(4);
    var Graphics = function(_Container) {
      _inherits(Graphics2, _Container);
      function Graphics2() {
        var nativeLines = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
        _classCallCheck(this, Graphics2);
        var _this = _possibleConstructorReturn(this, _Container.call(this));
        _this.fillAlpha = 1;
        _this.lineWidth = 0;
        _this.nativeLines = nativeLines;
        _this.lineColor = 0;
        _this.lineAlignment = 0.5;
        _this.graphicsData = [];
        _this.tint = 16777215;
        _this._prevTint = 16777215;
        _this.blendMode = _const.BLEND_MODES.NORMAL;
        _this.currentPath = null;
        _this._webGL = {};
        _this.isMask = false;
        _this.boundsPadding = 0;
        _this._localBounds = new _Bounds2.default();
        _this.dirty = 0;
        _this.fastRectDirty = -1;
        _this.clearDirty = 0;
        _this.boundsDirty = -1;
        _this.cachedSpriteDirty = false;
        _this._spriteRect = null;
        _this._fastRect = false;
        _this._prevRectTint = null;
        _this._prevRectFillColor = null;
        return _this;
      }
      Graphics2.prototype.clone = function clone() {
        var clone2 = new Graphics2();
        clone2.renderable = this.renderable;
        clone2.fillAlpha = this.fillAlpha;
        clone2.lineWidth = this.lineWidth;
        clone2.lineColor = this.lineColor;
        clone2.lineAlignment = this.lineAlignment;
        clone2.tint = this.tint;
        clone2.blendMode = this.blendMode;
        clone2.isMask = this.isMask;
        clone2.boundsPadding = this.boundsPadding;
        clone2.dirty = 0;
        clone2.cachedSpriteDirty = this.cachedSpriteDirty;
        for (var i = 0; i < this.graphicsData.length; ++i) {
          clone2.graphicsData.push(this.graphicsData[i].clone());
        }
        clone2.currentPath = clone2.graphicsData[clone2.graphicsData.length - 1];
        clone2.updateLocalBounds();
        return clone2;
      };
      Graphics2.prototype._quadraticCurveLength = function _quadraticCurveLength(fromX, fromY, cpX, cpY, toX, toY) {
        var ax = fromX - 2 * cpX + toX;
        var ay = fromY - 2 * cpY + toY;
        var bx = 2 * cpX - 2 * fromX;
        var by = 2 * cpY - 2 * fromY;
        var a = 4 * (ax * ax + ay * ay);
        var b = 4 * (ax * bx + ay * by);
        var c = bx * bx + by * by;
        var s = 2 * Math.sqrt(a + b + c);
        var a2 = Math.sqrt(a);
        var a32 = 2 * a * a2;
        var c2 = 2 * Math.sqrt(c);
        var ba = b / a2;
        return (a32 * s + a2 * b * (s - c2) + (4 * c * a - b * b) * Math.log((2 * a2 + ba + s) / (ba + c2))) / (4 * a32);
      };
      Graphics2.prototype._bezierCurveLength = function _bezierCurveLength(fromX, fromY, cpX, cpY, cpX2, cpY2, toX, toY) {
        var n = 10;
        var result = 0;
        var t = 0;
        var t2 = 0;
        var t3 = 0;
        var nt = 0;
        var nt2 = 0;
        var nt3 = 0;
        var x = 0;
        var y = 0;
        var dx = 0;
        var dy = 0;
        var prevX = fromX;
        var prevY = fromY;
        for (var i = 1; i <= n; ++i) {
          t = i / n;
          t2 = t * t;
          t3 = t2 * t;
          nt = 1 - t;
          nt2 = nt * nt;
          nt3 = nt2 * nt;
          x = nt3 * fromX + 3 * nt2 * t * cpX + 3 * nt * t2 * cpX2 + t3 * toX;
          y = nt3 * fromY + 3 * nt2 * t * cpY + 3 * nt * t2 * cpY2 + t3 * toY;
          dx = prevX - x;
          dy = prevY - y;
          prevX = x;
          prevY = y;
          result += Math.sqrt(dx * dx + dy * dy);
        }
        return result;
      };
      Graphics2.prototype._segmentsCount = function _segmentsCount(length) {
        var result = Math.ceil(length / Graphics2.CURVES.maxLength);
        if (result < Graphics2.CURVES.minSegments) {
          result = Graphics2.CURVES.minSegments;
        } else if (result > Graphics2.CURVES.maxSegments) {
          result = Graphics2.CURVES.maxSegments;
        }
        return result;
      };
      Graphics2.prototype.lineStyle = function lineStyle() {
        var lineWidth = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        var color = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        var alpha = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
        var alignment = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0.5;
        this.lineWidth = lineWidth;
        this.lineColor = color;
        this.lineAlpha = alpha;
        this.lineAlignment = alignment;
        if (this.currentPath) {
          if (this.currentPath.shape.points.length) {
            var shape = new _math.Polygon(this.currentPath.shape.points.slice(-2));
            shape.closed = false;
            this.drawShape(shape);
          } else {
            this.currentPath.lineWidth = this.lineWidth;
            this.currentPath.lineColor = this.lineColor;
            this.currentPath.lineAlpha = this.lineAlpha;
            this.currentPath.lineAlignment = this.lineAlignment;
          }
        }
        return this;
      };
      Graphics2.prototype.moveTo = function moveTo(x, y) {
        var shape = new _math.Polygon([x, y]);
        shape.closed = false;
        this.drawShape(shape);
        return this;
      };
      Graphics2.prototype.lineTo = function lineTo(x, y) {
        var points = this.currentPath.shape.points;
        var fromX = points[points.length - 2];
        var fromY = points[points.length - 1];
        if (fromX !== x || fromY !== y) {
          points.push(x, y);
          this.dirty++;
        }
        return this;
      };
      Graphics2.prototype.quadraticCurveTo = function quadraticCurveTo(cpX, cpY, toX, toY) {
        if (this.currentPath) {
          if (this.currentPath.shape.points.length === 0) {
            this.currentPath.shape.points = [0, 0];
          }
        } else {
          this.moveTo(0, 0);
        }
        var points = this.currentPath.shape.points;
        var xa = 0;
        var ya = 0;
        if (points.length === 0) {
          this.moveTo(0, 0);
        }
        var fromX = points[points.length - 2];
        var fromY = points[points.length - 1];
        var n = Graphics2.CURVES.adaptive ? this._segmentsCount(this._quadraticCurveLength(fromX, fromY, cpX, cpY, toX, toY)) : 20;
        for (var i = 1; i <= n; ++i) {
          var j = i / n;
          xa = fromX + (cpX - fromX) * j;
          ya = fromY + (cpY - fromY) * j;
          points.push(xa + (cpX + (toX - cpX) * j - xa) * j, ya + (cpY + (toY - cpY) * j - ya) * j);
        }
        this.dirty++;
        return this;
      };
      Graphics2.prototype.bezierCurveTo = function bezierCurveTo(cpX, cpY, cpX2, cpY2, toX, toY) {
        if (this.currentPath) {
          if (this.currentPath.shape.points.length === 0) {
            this.currentPath.shape.points = [0, 0];
          }
        } else {
          this.moveTo(0, 0);
        }
        var points = this.currentPath.shape.points;
        var fromX = points[points.length - 2];
        var fromY = points[points.length - 1];
        points.length -= 2;
        var n = Graphics2.CURVES.adaptive ? this._segmentsCount(this._bezierCurveLength(fromX, fromY, cpX, cpY, cpX2, cpY2, toX, toY)) : 20;
        (0, _bezierCurveTo3.default)(fromX, fromY, cpX, cpY, cpX2, cpY2, toX, toY, n, points);
        this.dirty++;
        return this;
      };
      Graphics2.prototype.arcTo = function arcTo(x1, y1, x2, y2, radius) {
        if (this.currentPath) {
          if (this.currentPath.shape.points.length === 0) {
            this.currentPath.shape.points.push(x1, y1);
          }
        } else {
          this.moveTo(x1, y1);
        }
        var points = this.currentPath.shape.points;
        var fromX = points[points.length - 2];
        var fromY = points[points.length - 1];
        var a1 = fromY - y1;
        var b1 = fromX - x1;
        var a2 = y2 - y1;
        var b2 = x2 - x1;
        var mm = Math.abs(a1 * b2 - b1 * a2);
        if (mm < 1e-8 || radius === 0) {
          if (points[points.length - 2] !== x1 || points[points.length - 1] !== y1) {
            points.push(x1, y1);
          }
        } else {
          var dd = a1 * a1 + b1 * b1;
          var cc = a2 * a2 + b2 * b2;
          var tt = a1 * a2 + b1 * b2;
          var k1 = radius * Math.sqrt(dd) / mm;
          var k2 = radius * Math.sqrt(cc) / mm;
          var j1 = k1 * tt / dd;
          var j2 = k2 * tt / cc;
          var cx = k1 * b2 + k2 * b1;
          var cy = k1 * a2 + k2 * a1;
          var px = b1 * (k2 + j1);
          var py = a1 * (k2 + j1);
          var qx = b2 * (k1 + j2);
          var qy = a2 * (k1 + j2);
          var startAngle = Math.atan2(py - cy, px - cx);
          var endAngle = Math.atan2(qy - cy, qx - cx);
          this.arc(cx + x1, cy + y1, radius, startAngle, endAngle, b1 * a2 > b2 * a1);
        }
        this.dirty++;
        return this;
      };
      Graphics2.prototype.arc = function arc(cx, cy, radius, startAngle, endAngle) {
        var anticlockwise = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : false;
        if (startAngle === endAngle) {
          return this;
        }
        if (!anticlockwise && endAngle <= startAngle) {
          endAngle += _const.PI_2;
        } else if (anticlockwise && startAngle <= endAngle) {
          startAngle += _const.PI_2;
        }
        var sweep = endAngle - startAngle;
        var segs = Graphics2.CURVES.adaptive ? this._segmentsCount(Math.abs(sweep) * radius) : Math.ceil(Math.abs(sweep) / _const.PI_2) * 40;
        if (sweep === 0) {
          return this;
        }
        var startX = cx + Math.cos(startAngle) * radius;
        var startY = cy + Math.sin(startAngle) * radius;
        var points = this.currentPath ? this.currentPath.shape.points : null;
        if (points) {
          var xDiff = Math.abs(points[points.length - 2] - startX);
          var yDiff = Math.abs(points[points.length - 1] - startY);
          if (xDiff < 1e-3 && yDiff < 1e-3) {
          } else {
            points.push(startX, startY);
          }
        } else {
          this.moveTo(startX, startY);
          points = this.currentPath.shape.points;
        }
        var theta = sweep / (segs * 2);
        var theta2 = theta * 2;
        var cTheta = Math.cos(theta);
        var sTheta = Math.sin(theta);
        var segMinus = segs - 1;
        var remainder = segMinus % 1 / segMinus;
        for (var i = 0; i <= segMinus; ++i) {
          var real = i + remainder * i;
          var angle = theta + startAngle + theta2 * real;
          var c = Math.cos(angle);
          var s = -Math.sin(angle);
          points.push((cTheta * c + sTheta * s) * radius + cx, (cTheta * -s + sTheta * c) * radius + cy);
        }
        this.dirty++;
        return this;
      };
      Graphics2.prototype.beginFill = function beginFill() {
        var color = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        var alpha = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
        this.filling = true;
        this.fillColor = color;
        this.fillAlpha = alpha;
        if (this.currentPath) {
          if (this.currentPath.shape.points.length <= 2) {
            this.currentPath.fill = this.filling;
            this.currentPath.fillColor = this.fillColor;
            this.currentPath.fillAlpha = this.fillAlpha;
          }
        }
        return this;
      };
      Graphics2.prototype.endFill = function endFill() {
        this.filling = false;
        this.fillColor = null;
        this.fillAlpha = 1;
        return this;
      };
      Graphics2.prototype.drawRect = function drawRect(x, y, width, height) {
        this.drawShape(new _math.Rectangle(x, y, width, height));
        return this;
      };
      Graphics2.prototype.drawRoundedRect = function drawRoundedRect(x, y, width, height, radius) {
        this.drawShape(new _math.RoundedRectangle(x, y, width, height, radius));
        return this;
      };
      Graphics2.prototype.drawCircle = function drawCircle(x, y, radius) {
        this.drawShape(new _math.Circle(x, y, radius));
        return this;
      };
      Graphics2.prototype.drawEllipse = function drawEllipse(x, y, width, height) {
        this.drawShape(new _math.Ellipse(x, y, width, height));
        return this;
      };
      Graphics2.prototype.drawPolygon = function drawPolygon(path) {
        var points = path;
        var closed = true;
        if (points instanceof _math.Polygon) {
          closed = points.closed;
          points = points.points;
        }
        if (!Array.isArray(points)) {
          points = new Array(arguments.length);
          for (var i = 0; i < points.length; ++i) {
            points[i] = arguments[i];
          }
        }
        var shape = new _math.Polygon(points);
        shape.closed = closed;
        this.drawShape(shape);
        return this;
      };
      Graphics2.prototype.drawStar = function drawStar(x, y, points, radius, innerRadius) {
        var rotation = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
        innerRadius = innerRadius || radius / 2;
        var startAngle = -1 * Math.PI / 2 + rotation;
        var len = points * 2;
        var delta = _const.PI_2 / len;
        var polygon = [];
        for (var i = 0; i < len; i++) {
          var r = i % 2 ? innerRadius : radius;
          var angle = i * delta + startAngle;
          polygon.push(x + r * Math.cos(angle), y + r * Math.sin(angle));
        }
        return this.drawPolygon(polygon);
      };
      Graphics2.prototype.clear = function clear() {
        if (this.lineWidth || this.filling || this.graphicsData.length > 0) {
          this.lineWidth = 0;
          this.lineAlignment = 0.5;
          this.filling = false;
          this.boundsDirty = -1;
          this.canvasTintDirty = -1;
          this.dirty++;
          this.clearDirty++;
          this.graphicsData.length = 0;
        }
        this.currentPath = null;
        this._spriteRect = null;
        return this;
      };
      Graphics2.prototype.isFastRect = function isFastRect() {
        return this.graphicsData.length === 1 && this.graphicsData[0].shape.type === _const.SHAPES.RECT && !this.graphicsData[0].lineWidth;
      };
      Graphics2.prototype._renderWebGL = function _renderWebGL(renderer) {
        if (this.dirty !== this.fastRectDirty) {
          this.fastRectDirty = this.dirty;
          this._fastRect = this.isFastRect();
        }
        if (this._fastRect) {
          this._renderSpriteRect(renderer);
        } else {
          renderer.setObjectRenderer(renderer.plugins.graphics);
          renderer.plugins.graphics.render(this);
        }
      };
      Graphics2.prototype._renderSpriteRect = function _renderSpriteRect(renderer) {
        var rect = this.graphicsData[0].shape;
        if (!this._spriteRect) {
          this._spriteRect = new _Sprite2.default(new _Texture2.default(_Texture2.default.WHITE));
        }
        var sprite = this._spriteRect;
        var fillColor = this.graphicsData[0].fillColor;
        if (this.tint === 16777215) {
          sprite.tint = fillColor;
        } else if (this.tint !== this._prevRectTint || fillColor !== this._prevRectFillColor) {
          var t1 = tempColor1;
          var t2 = tempColor2;
          (0, _utils.hex2rgb)(fillColor, t1);
          (0, _utils.hex2rgb)(this.tint, t2);
          t1[0] *= t2[0];
          t1[1] *= t2[1];
          t1[2] *= t2[2];
          sprite.tint = (0, _utils.rgb2hex)(t1);
          this._prevRectTint = this.tint;
          this._prevRectFillColor = fillColor;
        }
        sprite.alpha = this.graphicsData[0].fillAlpha;
        sprite.worldAlpha = this.worldAlpha * sprite.alpha;
        sprite.blendMode = this.blendMode;
        sprite._texture._frame.width = rect.width;
        sprite._texture._frame.height = rect.height;
        sprite.transform.worldTransform = this.transform.worldTransform;
        sprite.anchor.set(-rect.x / rect.width, -rect.y / rect.height);
        sprite._onAnchorUpdate();
        sprite._renderWebGL(renderer);
      };
      Graphics2.prototype._renderCanvas = function _renderCanvas(renderer) {
        if (this.isMask === true) {
          return;
        }
        renderer.plugins.graphics.render(this);
      };
      Graphics2.prototype._calculateBounds = function _calculateBounds() {
        if (this.boundsDirty !== this.dirty) {
          this.boundsDirty = this.dirty;
          this.updateLocalBounds();
          this.cachedSpriteDirty = true;
        }
        var lb = this._localBounds;
        this._bounds.addFrame(this.transform, lb.minX, lb.minY, lb.maxX, lb.maxY);
      };
      Graphics2.prototype.containsPoint = function containsPoint(point) {
        this.worldTransform.applyInverse(point, tempPoint);
        var graphicsData = this.graphicsData;
        for (var i = 0; i < graphicsData.length; ++i) {
          var data = graphicsData[i];
          if (!data.fill) {
            continue;
          }
          if (data.shape) {
            if (data.shape.contains(tempPoint.x, tempPoint.y)) {
              var hitHole = false;
              if (data.holes) {
                for (var _i = 0; _i < data.holes.length; _i++) {
                  var hole = data.holes[_i];
                  if (hole.contains(tempPoint.x, tempPoint.y)) {
                    hitHole = true;
                    break;
                  }
                }
              }
              if (!hitHole) {
                return true;
              }
            }
          }
        }
        return false;
      };
      Graphics2.prototype.updateLocalBounds = function updateLocalBounds() {
        var minX = Infinity;
        var maxX = -Infinity;
        var minY = Infinity;
        var maxY = -Infinity;
        if (this.graphicsData.length) {
          var shape = 0;
          var x = 0;
          var y = 0;
          var w = 0;
          var h = 0;
          for (var i = 0; i < this.graphicsData.length; i++) {
            var data = this.graphicsData[i];
            var type = data.type;
            var lineWidth = data.lineWidth;
            var lineAlignment = data.lineAlignment;
            var lineOffset = lineWidth * lineAlignment;
            shape = data.shape;
            if (type === _const.SHAPES.RECT || type === _const.SHAPES.RREC) {
              x = shape.x - lineOffset;
              y = shape.y - lineOffset;
              w = shape.width + lineOffset * 2;
              h = shape.height + lineOffset * 2;
              minX = x < minX ? x : minX;
              maxX = x + w > maxX ? x + w : maxX;
              minY = y < minY ? y : minY;
              maxY = y + h > maxY ? y + h : maxY;
            } else if (type === _const.SHAPES.CIRC) {
              x = shape.x;
              y = shape.y;
              w = shape.radius + lineOffset;
              h = shape.radius + lineOffset;
              minX = x - w < minX ? x - w : minX;
              maxX = x + w > maxX ? x + w : maxX;
              minY = y - h < minY ? y - h : minY;
              maxY = y + h > maxY ? y + h : maxY;
            } else if (type === _const.SHAPES.ELIP) {
              x = shape.x;
              y = shape.y;
              w = shape.width + lineOffset;
              h = shape.height + lineOffset;
              minX = x - w < minX ? x - w : minX;
              maxX = x + w > maxX ? x + w : maxX;
              minY = y - h < minY ? y - h : minY;
              maxY = y + h > maxY ? y + h : maxY;
            } else {
              var points = shape.points;
              var x2 = 0;
              var y2 = 0;
              var dx = 0;
              var dy = 0;
              var rw = 0;
              var rh = 0;
              var cx = 0;
              var cy = 0;
              for (var j = 0; j + 2 < points.length; j += 2) {
                x = points[j];
                y = points[j + 1];
                x2 = points[j + 2];
                y2 = points[j + 3];
                dx = Math.abs(x2 - x);
                dy = Math.abs(y2 - y);
                h = lineOffset * 2;
                w = Math.sqrt(dx * dx + dy * dy);
                if (w < 1e-9) {
                  continue;
                }
                rw = (h / w * dy + dx) / 2;
                rh = (h / w * dx + dy) / 2;
                cx = (x2 + x) / 2;
                cy = (y2 + y) / 2;
                minX = cx - rw < minX ? cx - rw : minX;
                maxX = cx + rw > maxX ? cx + rw : maxX;
                minY = cy - rh < minY ? cy - rh : minY;
                maxY = cy + rh > maxY ? cy + rh : maxY;
              }
            }
          }
        } else {
          minX = 0;
          maxX = 0;
          minY = 0;
          maxY = 0;
        }
        var padding = this.boundsPadding;
        this._localBounds.minX = minX - padding;
        this._localBounds.maxX = maxX + padding;
        this._localBounds.minY = minY - padding;
        this._localBounds.maxY = maxY + padding;
      };
      Graphics2.prototype.drawShape = function drawShape(shape) {
        if (this.currentPath) {
          if (this.currentPath.shape.points.length <= 2) {
            this.graphicsData.pop();
          }
        }
        this.currentPath = null;
        var data = new _GraphicsData2.default(this.lineWidth, this.lineColor, this.lineAlpha, this.fillColor, this.fillAlpha, this.filling, this.nativeLines, shape, this.lineAlignment);
        this.graphicsData.push(data);
        if (data.type === _const.SHAPES.POLY) {
          data.shape.closed = data.shape.closed;
          this.currentPath = data;
        }
        this.dirty++;
        return data;
      };
      Graphics2.prototype.generateCanvasTexture = function generateCanvasTexture(scaleMode) {
        var resolution = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
        var bounds = this.getLocalBounds();
        var canvasBuffer = _RenderTexture2.default.create(bounds.width, bounds.height, scaleMode, resolution);
        if (!canvasRenderer) {
          canvasRenderer = new _CanvasRenderer2.default();
        }
        this.transform.updateLocalTransform();
        this.transform.localTransform.copy(tempMatrix);
        tempMatrix.invert();
        tempMatrix.tx -= bounds.x;
        tempMatrix.ty -= bounds.y;
        canvasRenderer.render(this, canvasBuffer, true, tempMatrix);
        var texture = _Texture2.default.fromCanvas(canvasBuffer.baseTexture._canvasRenderTarget.canvas, scaleMode, "graphics");
        texture.baseTexture.resolution = resolution;
        texture.baseTexture.update();
        return texture;
      };
      Graphics2.prototype.closePath = function closePath() {
        var currentPath = this.currentPath;
        if (currentPath && currentPath.shape) {
          currentPath.shape.close();
        }
        return this;
      };
      Graphics2.prototype.addHole = function addHole() {
        var hole = this.graphicsData.pop();
        this.currentPath = this.graphicsData[this.graphicsData.length - 1];
        this.currentPath.addHole(hole.shape);
        this.currentPath = null;
        return this;
      };
      Graphics2.prototype.destroy = function destroy(options) {
        _Container.prototype.destroy.call(this, options);
        for (var i = 0; i < this.graphicsData.length; ++i) {
          this.graphicsData[i].destroy();
        }
        for (var id in this._webGL) {
          for (var j = 0; j < this._webGL[id].data.length; ++j) {
            this._webGL[id].data[j].destroy();
          }
        }
        if (this._spriteRect) {
          this._spriteRect.destroy();
        }
        this.graphicsData = null;
        this.currentPath = null;
        this._webGL = null;
        this._localBounds = null;
      };
      return Graphics2;
    }(_Container3.default);
    exports.default = Graphics;
    Graphics._SPRITE_TEXTURE = null;
    Graphics.CURVES = {
      adaptive: false,
      maxLength: 10,
      minSegments: 8,
      maxSegments: 2048
    };
  }
});

// node_modules/pixi.js/lib/core/graphics/webgl/WebGLGraphicsData.js
var require_WebGLGraphicsData = __commonJS({
  "node_modules/pixi.js/lib/core/graphics/webgl/WebGLGraphicsData.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _pixiGlCore = require_src();
    var _pixiGlCore2 = _interopRequireDefault(_pixiGlCore);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var WebGLGraphicsData = function() {
      function WebGLGraphicsData2(gl2, shader, attribsState) {
        _classCallCheck(this, WebGLGraphicsData2);
        this.gl = gl2;
        this.color = [0, 0, 0];
        this.points = [];
        this.indices = [];
        this.buffer = _pixiGlCore2.default.GLBuffer.createVertexBuffer(gl2);
        this.indexBuffer = _pixiGlCore2.default.GLBuffer.createIndexBuffer(gl2);
        this.dirty = true;
        this.nativeLines = false;
        this.glPoints = null;
        this.glIndices = null;
        this.shader = shader;
        this.vao = new _pixiGlCore2.default.VertexArrayObject(gl2, attribsState).addIndex(this.indexBuffer).addAttribute(this.buffer, shader.attributes.aVertexPosition, gl2.FLOAT, false, 4 * 6, 0).addAttribute(this.buffer, shader.attributes.aColor, gl2.FLOAT, false, 4 * 6, 2 * 4);
      }
      WebGLGraphicsData2.prototype.reset = function reset() {
        this.points.length = 0;
        this.indices.length = 0;
      };
      WebGLGraphicsData2.prototype.upload = function upload() {
        this.glPoints = new Float32Array(this.points);
        this.buffer.upload(this.glPoints);
        this.glIndices = new Uint16Array(this.indices);
        this.indexBuffer.upload(this.glIndices);
        this.dirty = false;
      };
      WebGLGraphicsData2.prototype.destroy = function destroy() {
        this.color = null;
        this.points = null;
        this.indices = null;
        this.vao.destroy();
        this.buffer.destroy();
        this.indexBuffer.destroy();
        this.gl = null;
        this.buffer = null;
        this.indexBuffer = null;
        this.glPoints = null;
        this.glIndices = null;
      };
      return WebGLGraphicsData2;
    }();
    exports.default = WebGLGraphicsData;
  }
});

// node_modules/pixi.js/lib/core/graphics/webgl/shaders/PrimitiveShader.js
var require_PrimitiveShader = __commonJS({
  "node_modules/pixi.js/lib/core/graphics/webgl/shaders/PrimitiveShader.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _Shader2 = require_Shader();
    var _Shader3 = _interopRequireDefault(_Shader2);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var PrimitiveShader = function(_Shader) {
      _inherits(PrimitiveShader2, _Shader);
      function PrimitiveShader2(gl2) {
        _classCallCheck(this, PrimitiveShader2);
        return _possibleConstructorReturn(this, _Shader.call(
          this,
          gl2,
          // vertex shader
          ["attribute vec2 aVertexPosition;", "attribute vec4 aColor;", "uniform mat3 translationMatrix;", "uniform mat3 projectionMatrix;", "uniform float alpha;", "uniform vec3 tint;", "varying vec4 vColor;", "void main(void){", "   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);", "   vColor = aColor * vec4(tint * alpha, alpha);", "}"].join("\n"),
          // fragment shader
          ["varying vec4 vColor;", "void main(void){", "   gl_FragColor = vColor;", "}"].join("\n")
        ));
      }
      return PrimitiveShader2;
    }(_Shader3.default);
    exports.default = PrimitiveShader;
  }
});

// node_modules/pixi.js/lib/core/graphics/webgl/utils/buildLine.js
var require_buildLine = __commonJS({
  "node_modules/pixi.js/lib/core/graphics/webgl/utils/buildLine.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.default = function(graphicsData, webGLData, webGLDataNativeLines) {
      if (graphicsData.nativeLines) {
        buildNativeLine(graphicsData, webGLDataNativeLines);
      } else {
        buildLine(graphicsData, webGLData);
      }
    };
    var _math = require_math();
    var _utils = require_utils();
    function buildLine(graphicsData, webGLData) {
      var points = graphicsData.points;
      if (points.length === 0) {
        return;
      }
      var firstPoint = new _math.Point(points[0], points[1]);
      var lastPoint = new _math.Point(points[points.length - 2], points[points.length - 1]);
      if (firstPoint.x === lastPoint.x && firstPoint.y === lastPoint.y) {
        points = points.slice();
        points.pop();
        points.pop();
        lastPoint = new _math.Point(points[points.length - 2], points[points.length - 1]);
        var midPointX = lastPoint.x + (firstPoint.x - lastPoint.x) * 0.5;
        var midPointY = lastPoint.y + (firstPoint.y - lastPoint.y) * 0.5;
        points.unshift(midPointX, midPointY);
        points.push(midPointX, midPointY);
      }
      var verts = webGLData.points;
      var indices = webGLData.indices;
      var length = points.length / 2;
      var indexCount = points.length;
      var indexStart = verts.length / 6;
      var width = graphicsData.lineWidth / 2;
      var color = (0, _utils.hex2rgb)(graphicsData.lineColor);
      var alpha = graphicsData.lineAlpha;
      var r = color[0] * alpha;
      var g = color[1] * alpha;
      var b = color[2] * alpha;
      var p1x = points[0];
      var p1y = points[1];
      var p2x = points[2];
      var p2y = points[3];
      var p3x = 0;
      var p3y = 0;
      var perpx = -(p1y - p2y);
      var perpy = p1x - p2x;
      var perp2x = 0;
      var perp2y = 0;
      var perp3x = 0;
      var perp3y = 0;
      var dist = Math.sqrt(perpx * perpx + perpy * perpy);
      perpx /= dist;
      perpy /= dist;
      perpx *= width;
      perpy *= width;
      var ratio = graphicsData.lineAlignment;
      var r1 = (1 - ratio) * 2;
      var r2 = ratio * 2;
      verts.push(p1x - perpx * r1, p1y - perpy * r1, r, g, b, alpha);
      verts.push(p1x + perpx * r2, p1y + perpy * r2, r, g, b, alpha);
      for (var i = 1; i < length - 1; ++i) {
        p1x = points[(i - 1) * 2];
        p1y = points[(i - 1) * 2 + 1];
        p2x = points[i * 2];
        p2y = points[i * 2 + 1];
        p3x = points[(i + 1) * 2];
        p3y = points[(i + 1) * 2 + 1];
        perpx = -(p1y - p2y);
        perpy = p1x - p2x;
        dist = Math.sqrt(perpx * perpx + perpy * perpy);
        perpx /= dist;
        perpy /= dist;
        perpx *= width;
        perpy *= width;
        perp2x = -(p2y - p3y);
        perp2y = p2x - p3x;
        dist = Math.sqrt(perp2x * perp2x + perp2y * perp2y);
        perp2x /= dist;
        perp2y /= dist;
        perp2x *= width;
        perp2y *= width;
        var a1 = -perpy + p1y - (-perpy + p2y);
        var b1 = -perpx + p2x - (-perpx + p1x);
        var c1 = (-perpx + p1x) * (-perpy + p2y) - (-perpx + p2x) * (-perpy + p1y);
        var a2 = -perp2y + p3y - (-perp2y + p2y);
        var b2 = -perp2x + p2x - (-perp2x + p3x);
        var c2 = (-perp2x + p3x) * (-perp2y + p2y) - (-perp2x + p2x) * (-perp2y + p3y);
        var denom = a1 * b2 - a2 * b1;
        if (Math.abs(denom) < 0.1) {
          denom += 10.1;
          verts.push(p2x - perpx * r1, p2y - perpy * r1, r, g, b, alpha);
          verts.push(p2x + perpx * r2, p2y + perpy * r2, r, g, b, alpha);
          continue;
        }
        var px = (b1 * c2 - b2 * c1) / denom;
        var py = (a2 * c1 - a1 * c2) / denom;
        var pdist = (px - p2x) * (px - p2x) + (py - p2y) * (py - p2y);
        if (pdist > 196 * width * width) {
          perp3x = perpx - perp2x;
          perp3y = perpy - perp2y;
          dist = Math.sqrt(perp3x * perp3x + perp3y * perp3y);
          perp3x /= dist;
          perp3y /= dist;
          perp3x *= width;
          perp3y *= width;
          verts.push(p2x - perp3x * r1, p2y - perp3y * r1);
          verts.push(r, g, b, alpha);
          verts.push(p2x + perp3x * r2, p2y + perp3y * r2);
          verts.push(r, g, b, alpha);
          verts.push(p2x - perp3x * r2 * r1, p2y - perp3y * r1);
          verts.push(r, g, b, alpha);
          indexCount++;
        } else {
          verts.push(p2x + (px - p2x) * r1, p2y + (py - p2y) * r1);
          verts.push(r, g, b, alpha);
          verts.push(p2x - (px - p2x) * r2, p2y - (py - p2y) * r2);
          verts.push(r, g, b, alpha);
        }
      }
      p1x = points[(length - 2) * 2];
      p1y = points[(length - 2) * 2 + 1];
      p2x = points[(length - 1) * 2];
      p2y = points[(length - 1) * 2 + 1];
      perpx = -(p1y - p2y);
      perpy = p1x - p2x;
      dist = Math.sqrt(perpx * perpx + perpy * perpy);
      perpx /= dist;
      perpy /= dist;
      perpx *= width;
      perpy *= width;
      verts.push(p2x - perpx * r1, p2y - perpy * r1);
      verts.push(r, g, b, alpha);
      verts.push(p2x + perpx * r2, p2y + perpy * r2);
      verts.push(r, g, b, alpha);
      indices.push(indexStart);
      for (var _i = 0; _i < indexCount; ++_i) {
        indices.push(indexStart++);
      }
      indices.push(indexStart - 1);
    }
    function buildNativeLine(graphicsData, webGLData) {
      var i = 0;
      var points = graphicsData.points;
      if (points.length === 0)
        return;
      var verts = webGLData.points;
      var length = points.length / 2;
      var color = (0, _utils.hex2rgb)(graphicsData.lineColor);
      var alpha = graphicsData.lineAlpha;
      var r = color[0] * alpha;
      var g = color[1] * alpha;
      var b = color[2] * alpha;
      for (i = 1; i < length; i++) {
        var p1x = points[(i - 1) * 2];
        var p1y = points[(i - 1) * 2 + 1];
        var p2x = points[i * 2];
        var p2y = points[i * 2 + 1];
        verts.push(p1x, p1y);
        verts.push(r, g, b, alpha);
        verts.push(p2x, p2y);
        verts.push(r, g, b, alpha);
      }
    }
  }
});

// node_modules/pixi.js/lib/core/graphics/webgl/utils/buildPoly.js
var require_buildPoly = __commonJS({
  "node_modules/pixi.js/lib/core/graphics/webgl/utils/buildPoly.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.default = buildPoly;
    var _buildLine = require_buildLine();
    var _buildLine2 = _interopRequireDefault(_buildLine);
    var _utils = require_utils();
    var _earcut = require_earcut();
    var _earcut2 = _interopRequireDefault(_earcut);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function buildPoly(graphicsData, webGLData, webGLDataNativeLines) {
      graphicsData.points = graphicsData.shape.points.slice();
      var points = graphicsData.points;
      if (graphicsData.fill && points.length >= 6) {
        var holeArray = [];
        var holes = graphicsData.holes;
        for (var i = 0; i < holes.length; i++) {
          var hole = holes[i];
          holeArray.push(points.length / 2);
          points = points.concat(hole.points);
        }
        var verts = webGLData.points;
        var indices = webGLData.indices;
        var length = points.length / 2;
        var color = (0, _utils.hex2rgb)(graphicsData.fillColor);
        var alpha = graphicsData.fillAlpha;
        var r = color[0] * alpha;
        var g = color[1] * alpha;
        var b = color[2] * alpha;
        var triangles = (0, _earcut2.default)(points, holeArray, 2);
        if (!triangles) {
          return;
        }
        var vertPos = verts.length / 6;
        for (var _i = 0; _i < triangles.length; _i += 3) {
          indices.push(triangles[_i] + vertPos);
          indices.push(triangles[_i] + vertPos);
          indices.push(triangles[_i + 1] + vertPos);
          indices.push(triangles[_i + 2] + vertPos);
          indices.push(triangles[_i + 2] + vertPos);
        }
        for (var _i2 = 0; _i2 < length; _i2++) {
          verts.push(points[_i2 * 2], points[_i2 * 2 + 1], r, g, b, alpha);
        }
      }
      if (graphicsData.lineWidth > 0) {
        (0, _buildLine2.default)(graphicsData, webGLData, webGLDataNativeLines);
      }
    }
  }
});

// node_modules/pixi.js/lib/core/graphics/webgl/utils/buildRectangle.js
var require_buildRectangle = __commonJS({
  "node_modules/pixi.js/lib/core/graphics/webgl/utils/buildRectangle.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.default = buildRectangle;
    var _buildLine = require_buildLine();
    var _buildLine2 = _interopRequireDefault(_buildLine);
    var _utils = require_utils();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function buildRectangle(graphicsData, webGLData, webGLDataNativeLines) {
      var rectData = graphicsData.shape;
      var x = rectData.x;
      var y = rectData.y;
      var width = rectData.width;
      var height = rectData.height;
      if (graphicsData.fill) {
        var color = (0, _utils.hex2rgb)(graphicsData.fillColor);
        var alpha = graphicsData.fillAlpha;
        var r = color[0] * alpha;
        var g = color[1] * alpha;
        var b = color[2] * alpha;
        var verts = webGLData.points;
        var indices = webGLData.indices;
        var vertPos = verts.length / 6;
        verts.push(x, y);
        verts.push(r, g, b, alpha);
        verts.push(x + width, y);
        verts.push(r, g, b, alpha);
        verts.push(x, y + height);
        verts.push(r, g, b, alpha);
        verts.push(x + width, y + height);
        verts.push(r, g, b, alpha);
        indices.push(vertPos, vertPos, vertPos + 1, vertPos + 2, vertPos + 3, vertPos + 3);
      }
      if (graphicsData.lineWidth) {
        var tempPoints = graphicsData.points;
        graphicsData.points = [x, y, x + width, y, x + width, y + height, x, y + height, x, y];
        (0, _buildLine2.default)(graphicsData, webGLData, webGLDataNativeLines);
        graphicsData.points = tempPoints;
      }
    }
  }
});

// node_modules/pixi.js/lib/core/graphics/webgl/utils/buildRoundedRectangle.js
var require_buildRoundedRectangle = __commonJS({
  "node_modules/pixi.js/lib/core/graphics/webgl/utils/buildRoundedRectangle.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.default = buildRoundedRectangle;
    var _earcut = require_earcut();
    var _earcut2 = _interopRequireDefault(_earcut);
    var _buildLine = require_buildLine();
    var _buildLine2 = _interopRequireDefault(_buildLine);
    var _utils = require_utils();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function buildRoundedRectangle(graphicsData, webGLData, webGLDataNativeLines) {
      var rrectData = graphicsData.shape;
      var x = rrectData.x;
      var y = rrectData.y;
      var width = rrectData.width;
      var height = rrectData.height;
      var radius = rrectData.radius;
      var recPoints = [];
      recPoints.push(x + radius, y);
      quadraticBezierCurve(x + width - radius, y, x + width, y, x + width, y + radius, recPoints);
      quadraticBezierCurve(x + width, y + height - radius, x + width, y + height, x + width - radius, y + height, recPoints);
      quadraticBezierCurve(x + radius, y + height, x, y + height, x, y + height - radius, recPoints);
      quadraticBezierCurve(x, y + radius, x, y, x + radius + 1e-10, y, recPoints);
      if (graphicsData.fill) {
        var color = (0, _utils.hex2rgb)(graphicsData.fillColor);
        var alpha = graphicsData.fillAlpha;
        var r = color[0] * alpha;
        var g = color[1] * alpha;
        var b = color[2] * alpha;
        var verts = webGLData.points;
        var indices = webGLData.indices;
        var vecPos = verts.length / 6;
        var triangles = (0, _earcut2.default)(recPoints, null, 2);
        for (var i = 0, j = triangles.length; i < j; i += 3) {
          indices.push(triangles[i] + vecPos);
          indices.push(triangles[i] + vecPos);
          indices.push(triangles[i + 1] + vecPos);
          indices.push(triangles[i + 2] + vecPos);
          indices.push(triangles[i + 2] + vecPos);
        }
        for (var _i = 0, _j = recPoints.length; _i < _j; _i++) {
          verts.push(recPoints[_i], recPoints[++_i], r, g, b, alpha);
        }
      }
      if (graphicsData.lineWidth) {
        var tempPoints = graphicsData.points;
        graphicsData.points = recPoints;
        (0, _buildLine2.default)(graphicsData, webGLData, webGLDataNativeLines);
        graphicsData.points = tempPoints;
      }
    }
    function getPt(n1, n2, perc) {
      var diff = n2 - n1;
      return n1 + diff * perc;
    }
    function quadraticBezierCurve(fromX, fromY, cpX, cpY, toX, toY) {
      var out = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : [];
      var n = 20;
      var points = out;
      var xa = 0;
      var ya = 0;
      var xb = 0;
      var yb = 0;
      var x = 0;
      var y = 0;
      for (var i = 0, j = 0; i <= n; ++i) {
        j = i / n;
        xa = getPt(fromX, cpX, j);
        ya = getPt(fromY, cpY, j);
        xb = getPt(cpX, toX, j);
        yb = getPt(cpY, toY, j);
        x = getPt(xa, xb, j);
        y = getPt(ya, yb, j);
        points.push(x, y);
      }
      return points;
    }
  }
});

// node_modules/pixi.js/lib/core/graphics/webgl/utils/buildCircle.js
var require_buildCircle = __commonJS({
  "node_modules/pixi.js/lib/core/graphics/webgl/utils/buildCircle.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.default = buildCircle;
    var _buildLine = require_buildLine();
    var _buildLine2 = _interopRequireDefault(_buildLine);
    var _const = require_const();
    var _utils = require_utils();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function buildCircle(graphicsData, webGLData, webGLDataNativeLines) {
      var circleData = graphicsData.shape;
      var x = circleData.x;
      var y = circleData.y;
      var width = void 0;
      var height = void 0;
      if (graphicsData.type === _const.SHAPES.CIRC) {
        width = circleData.radius;
        height = circleData.radius;
      } else {
        width = circleData.width;
        height = circleData.height;
      }
      if (width === 0 || height === 0) {
        return;
      }
      var totalSegs = Math.floor(30 * Math.sqrt(circleData.radius)) || Math.floor(15 * Math.sqrt(circleData.width + circleData.height));
      var seg = Math.PI * 2 / totalSegs;
      if (graphicsData.fill) {
        var color = (0, _utils.hex2rgb)(graphicsData.fillColor);
        var alpha = graphicsData.fillAlpha;
        var r = color[0] * alpha;
        var g = color[1] * alpha;
        var b = color[2] * alpha;
        var verts = webGLData.points;
        var indices = webGLData.indices;
        var vecPos = verts.length / 6;
        indices.push(vecPos);
        for (var i = 0; i < totalSegs + 1; i++) {
          verts.push(x, y, r, g, b, alpha);
          verts.push(x + Math.sin(seg * i) * width, y + Math.cos(seg * i) * height, r, g, b, alpha);
          indices.push(vecPos++, vecPos++);
        }
        indices.push(vecPos - 1);
      }
      if (graphicsData.lineWidth) {
        var tempPoints = graphicsData.points;
        graphicsData.points = [];
        for (var _i = 0; _i < totalSegs; _i++) {
          graphicsData.points.push(x + Math.sin(seg * -_i) * width, y + Math.cos(seg * -_i) * height);
        }
        graphicsData.points.push(graphicsData.points[0], graphicsData.points[1]);
        (0, _buildLine2.default)(graphicsData, webGLData, webGLDataNativeLines);
        graphicsData.points = tempPoints;
      }
    }
  }
});

// node_modules/pixi.js/lib/core/graphics/webgl/GraphicsRenderer.js
var require_GraphicsRenderer = __commonJS({
  "node_modules/pixi.js/lib/core/graphics/webgl/GraphicsRenderer.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _utils = require_utils();
    var _const = require_const();
    var _ObjectRenderer2 = require_ObjectRenderer();
    var _ObjectRenderer3 = _interopRequireDefault(_ObjectRenderer2);
    var _WebGLRenderer = require_WebGLRenderer();
    var _WebGLRenderer2 = _interopRequireDefault(_WebGLRenderer);
    var _WebGLGraphicsData = require_WebGLGraphicsData();
    var _WebGLGraphicsData2 = _interopRequireDefault(_WebGLGraphicsData);
    var _PrimitiveShader = require_PrimitiveShader();
    var _PrimitiveShader2 = _interopRequireDefault(_PrimitiveShader);
    var _buildPoly = require_buildPoly();
    var _buildPoly2 = _interopRequireDefault(_buildPoly);
    var _buildRectangle = require_buildRectangle();
    var _buildRectangle2 = _interopRequireDefault(_buildRectangle);
    var _buildRoundedRectangle = require_buildRoundedRectangle();
    var _buildRoundedRectangle2 = _interopRequireDefault(_buildRoundedRectangle);
    var _buildCircle = require_buildCircle();
    var _buildCircle2 = _interopRequireDefault(_buildCircle);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var GraphicsRenderer = function(_ObjectRenderer) {
      _inherits(GraphicsRenderer2, _ObjectRenderer);
      function GraphicsRenderer2(renderer) {
        _classCallCheck(this, GraphicsRenderer2);
        var _this = _possibleConstructorReturn(this, _ObjectRenderer.call(this, renderer));
        _this.graphicsDataPool = [];
        _this.primitiveShader = null;
        _this.gl = renderer.gl;
        _this.CONTEXT_UID = 0;
        return _this;
      }
      GraphicsRenderer2.prototype.onContextChange = function onContextChange() {
        this.gl = this.renderer.gl;
        this.CONTEXT_UID = this.renderer.CONTEXT_UID;
        this.primitiveShader = new _PrimitiveShader2.default(this.gl);
      };
      GraphicsRenderer2.prototype.destroy = function destroy() {
        _ObjectRenderer3.default.prototype.destroy.call(this);
        for (var i = 0; i < this.graphicsDataPool.length; ++i) {
          this.graphicsDataPool[i].destroy();
        }
        this.graphicsDataPool = null;
      };
      GraphicsRenderer2.prototype.render = function render(graphics) {
        var renderer = this.renderer;
        var gl2 = renderer.gl;
        var webGLData = void 0;
        var webGL = graphics._webGL[this.CONTEXT_UID];
        if (!webGL || graphics.dirty !== webGL.dirty) {
          this.updateGraphics(graphics);
          webGL = graphics._webGL[this.CONTEXT_UID];
        }
        var shader = this.primitiveShader;
        renderer.bindShader(shader);
        renderer.state.setBlendMode(graphics.blendMode);
        for (var i = 0, n = webGL.data.length; i < n; i++) {
          webGLData = webGL.data[i];
          var shaderTemp = webGLData.shader;
          renderer.bindShader(shaderTemp);
          shaderTemp.uniforms.translationMatrix = graphics.transform.worldTransform.toArray(true);
          shaderTemp.uniforms.tint = (0, _utils.hex2rgb)(graphics.tint);
          shaderTemp.uniforms.alpha = graphics.worldAlpha;
          renderer.bindVao(webGLData.vao);
          if (webGLData.nativeLines) {
            gl2.drawArrays(gl2.LINES, 0, webGLData.points.length / 6);
          } else {
            webGLData.vao.draw(gl2.TRIANGLE_STRIP, webGLData.indices.length);
          }
        }
      };
      GraphicsRenderer2.prototype.updateGraphics = function updateGraphics(graphics) {
        var gl2 = this.renderer.gl;
        var webGL = graphics._webGL[this.CONTEXT_UID];
        if (!webGL) {
          webGL = graphics._webGL[this.CONTEXT_UID] = { lastIndex: 0, data: [], gl: gl2, clearDirty: -1, dirty: -1 };
        }
        webGL.dirty = graphics.dirty;
        if (graphics.clearDirty !== webGL.clearDirty) {
          webGL.clearDirty = graphics.clearDirty;
          for (var i = 0; i < webGL.data.length; i++) {
            this.graphicsDataPool.push(webGL.data[i]);
          }
          webGL.data.length = 0;
          webGL.lastIndex = 0;
        }
        var webGLData = void 0;
        var webGLDataNativeLines = void 0;
        for (var _i = webGL.lastIndex; _i < graphics.graphicsData.length; _i++) {
          var data = graphics.graphicsData[_i];
          webGLData = this.getWebGLData(webGL, 0);
          if (data.nativeLines && data.lineWidth) {
            webGLDataNativeLines = this.getWebGLData(webGL, 0, true);
            webGL.lastIndex++;
          }
          if (data.type === _const.SHAPES.POLY) {
            (0, _buildPoly2.default)(data, webGLData, webGLDataNativeLines);
          }
          if (data.type === _const.SHAPES.RECT) {
            (0, _buildRectangle2.default)(data, webGLData, webGLDataNativeLines);
          } else if (data.type === _const.SHAPES.CIRC || data.type === _const.SHAPES.ELIP) {
            (0, _buildCircle2.default)(data, webGLData, webGLDataNativeLines);
          } else if (data.type === _const.SHAPES.RREC) {
            (0, _buildRoundedRectangle2.default)(data, webGLData, webGLDataNativeLines);
          }
          webGL.lastIndex++;
        }
        this.renderer.bindVao(null);
        for (var _i2 = 0; _i2 < webGL.data.length; _i2++) {
          webGLData = webGL.data[_i2];
          if (webGLData.dirty) {
            webGLData.upload();
          }
        }
      };
      GraphicsRenderer2.prototype.getWebGLData = function getWebGLData(gl2, type, nativeLines) {
        var webGLData = gl2.data[gl2.data.length - 1];
        if (!webGLData || webGLData.nativeLines !== nativeLines || webGLData.points.length > 32e4) {
          webGLData = this.graphicsDataPool.pop() || new _WebGLGraphicsData2.default(this.renderer.gl, this.primitiveShader, this.renderer.state.attribsState);
          webGLData.nativeLines = nativeLines;
          webGLData.reset(type);
          gl2.data.push(webGLData);
        }
        webGLData.dirty = true;
        return webGLData;
      };
      return GraphicsRenderer2;
    }(_ObjectRenderer3.default);
    exports.default = GraphicsRenderer;
    _WebGLRenderer2.default.registerPlugin("graphics", GraphicsRenderer);
  }
});

// node_modules/pixi.js/lib/core/graphics/canvas/CanvasGraphicsRenderer.js
var require_CanvasGraphicsRenderer = __commonJS({
  "node_modules/pixi.js/lib/core/graphics/canvas/CanvasGraphicsRenderer.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _CanvasRenderer = require_CanvasRenderer();
    var _CanvasRenderer2 = _interopRequireDefault(_CanvasRenderer);
    var _const = require_const();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var CanvasGraphicsRenderer = function() {
      function CanvasGraphicsRenderer2(renderer) {
        _classCallCheck(this, CanvasGraphicsRenderer2);
        this.renderer = renderer;
      }
      CanvasGraphicsRenderer2.prototype.render = function render(graphics) {
        var renderer = this.renderer;
        var context = renderer.context;
        var worldAlpha = graphics.worldAlpha;
        var transform = graphics.transform.worldTransform;
        var resolution = renderer.resolution;
        context.setTransform(transform.a * resolution, transform.b * resolution, transform.c * resolution, transform.d * resolution, transform.tx * resolution, transform.ty * resolution);
        if (graphics.canvasTintDirty !== graphics.dirty || graphics._prevTint !== graphics.tint) {
          this.updateGraphicsTint(graphics);
        }
        renderer.setBlendMode(graphics.blendMode);
        for (var i = 0; i < graphics.graphicsData.length; i++) {
          var data = graphics.graphicsData[i];
          var shape = data.shape;
          var fillColor = data._fillTint;
          var lineColor = data._lineTint;
          context.lineWidth = data.lineWidth;
          if (data.type === _const.SHAPES.POLY) {
            context.beginPath();
            var points = shape.points;
            var holes = data.holes;
            var outerArea = void 0;
            var innerArea = void 0;
            var px = void 0;
            var py = void 0;
            context.moveTo(points[0], points[1]);
            for (var j = 2; j < points.length; j += 2) {
              context.lineTo(points[j], points[j + 1]);
            }
            if (shape.closed) {
              context.closePath();
            }
            if (holes.length > 0) {
              outerArea = 0;
              px = points[0];
              py = points[1];
              for (var _j = 2; _j + 2 < points.length; _j += 2) {
                outerArea += (points[_j] - px) * (points[_j + 3] - py) - (points[_j + 2] - px) * (points[_j + 1] - py);
              }
              for (var k = 0; k < holes.length; k++) {
                points = holes[k].points;
                if (!points) {
                  continue;
                }
                innerArea = 0;
                px = points[0];
                py = points[1];
                for (var _j2 = 2; _j2 + 2 < points.length; _j2 += 2) {
                  innerArea += (points[_j2] - px) * (points[_j2 + 3] - py) - (points[_j2 + 2] - px) * (points[_j2 + 1] - py);
                }
                if (innerArea * outerArea < 0) {
                  context.moveTo(points[0], points[1]);
                  for (var _j3 = 2; _j3 < points.length; _j3 += 2) {
                    context.lineTo(points[_j3], points[_j3 + 1]);
                  }
                } else {
                  context.moveTo(points[points.length - 2], points[points.length - 1]);
                  for (var _j4 = points.length - 4; _j4 >= 0; _j4 -= 2) {
                    context.lineTo(points[_j4], points[_j4 + 1]);
                  }
                }
                if (holes[k].close) {
                  context.closePath();
                }
              }
            }
            if (data.fill) {
              context.globalAlpha = data.fillAlpha * worldAlpha;
              context.fillStyle = "#" + ("00000" + (fillColor | 0).toString(16)).substr(-6);
              context.fill();
            }
            if (data.lineWidth) {
              context.globalAlpha = data.lineAlpha * worldAlpha;
              context.strokeStyle = "#" + ("00000" + (lineColor | 0).toString(16)).substr(-6);
              context.stroke();
            }
          } else if (data.type === _const.SHAPES.RECT) {
            if (data.fillColor || data.fillColor === 0) {
              context.globalAlpha = data.fillAlpha * worldAlpha;
              context.fillStyle = "#" + ("00000" + (fillColor | 0).toString(16)).substr(-6);
              context.fillRect(shape.x, shape.y, shape.width, shape.height);
            }
            if (data.lineWidth) {
              context.globalAlpha = data.lineAlpha * worldAlpha;
              context.strokeStyle = "#" + ("00000" + (lineColor | 0).toString(16)).substr(-6);
              context.strokeRect(shape.x, shape.y, shape.width, shape.height);
            }
          } else if (data.type === _const.SHAPES.CIRC) {
            context.beginPath();
            context.arc(shape.x, shape.y, shape.radius, 0, 2 * Math.PI);
            context.closePath();
            if (data.fill) {
              context.globalAlpha = data.fillAlpha * worldAlpha;
              context.fillStyle = "#" + ("00000" + (fillColor | 0).toString(16)).substr(-6);
              context.fill();
            }
            if (data.lineWidth) {
              context.globalAlpha = data.lineAlpha * worldAlpha;
              context.strokeStyle = "#" + ("00000" + (lineColor | 0).toString(16)).substr(-6);
              context.stroke();
            }
          } else if (data.type === _const.SHAPES.ELIP) {
            var w = shape.width * 2;
            var h = shape.height * 2;
            var x = shape.x - w / 2;
            var y = shape.y - h / 2;
            context.beginPath();
            var kappa = 0.5522848;
            var ox = w / 2 * kappa;
            var oy = h / 2 * kappa;
            var xe = x + w;
            var ye = y + h;
            var xm = x + w / 2;
            var ym = y + h / 2;
            context.moveTo(x, ym);
            context.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
            context.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
            context.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
            context.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
            context.closePath();
            if (data.fill) {
              context.globalAlpha = data.fillAlpha * worldAlpha;
              context.fillStyle = "#" + ("00000" + (fillColor | 0).toString(16)).substr(-6);
              context.fill();
            }
            if (data.lineWidth) {
              context.globalAlpha = data.lineAlpha * worldAlpha;
              context.strokeStyle = "#" + ("00000" + (lineColor | 0).toString(16)).substr(-6);
              context.stroke();
            }
          } else if (data.type === _const.SHAPES.RREC) {
            var rx = shape.x;
            var ry = shape.y;
            var width = shape.width;
            var height = shape.height;
            var radius = shape.radius;
            var maxRadius = Math.min(width, height) / 2 | 0;
            radius = radius > maxRadius ? maxRadius : radius;
            context.beginPath();
            context.moveTo(rx, ry + radius);
            context.lineTo(rx, ry + height - radius);
            context.quadraticCurveTo(rx, ry + height, rx + radius, ry + height);
            context.lineTo(rx + width - radius, ry + height);
            context.quadraticCurveTo(rx + width, ry + height, rx + width, ry + height - radius);
            context.lineTo(rx + width, ry + radius);
            context.quadraticCurveTo(rx + width, ry, rx + width - radius, ry);
            context.lineTo(rx + radius, ry);
            context.quadraticCurveTo(rx, ry, rx, ry + radius);
            context.closePath();
            if (data.fillColor || data.fillColor === 0) {
              context.globalAlpha = data.fillAlpha * worldAlpha;
              context.fillStyle = "#" + ("00000" + (fillColor | 0).toString(16)).substr(-6);
              context.fill();
            }
            if (data.lineWidth) {
              context.globalAlpha = data.lineAlpha * worldAlpha;
              context.strokeStyle = "#" + ("00000" + (lineColor | 0).toString(16)).substr(-6);
              context.stroke();
            }
          }
        }
      };
      CanvasGraphicsRenderer2.prototype.updateGraphicsTint = function updateGraphicsTint(graphics) {
        graphics._prevTint = graphics.tint;
        graphics.canvasTintDirty = graphics.dirty;
        var tintR = (graphics.tint >> 16 & 255) / 255;
        var tintG = (graphics.tint >> 8 & 255) / 255;
        var tintB = (graphics.tint & 255) / 255;
        for (var i = 0; i < graphics.graphicsData.length; ++i) {
          var data = graphics.graphicsData[i];
          var fillColor = data.fillColor | 0;
          var lineColor = data.lineColor | 0;
          data._fillTint = ((fillColor >> 16 & 255) / 255 * tintR * 255 << 16) + ((fillColor >> 8 & 255) / 255 * tintG * 255 << 8) + (fillColor & 255) / 255 * tintB * 255;
          data._lineTint = ((lineColor >> 16 & 255) / 255 * tintR * 255 << 16) + ((lineColor >> 8 & 255) / 255 * tintG * 255 << 8) + (lineColor & 255) / 255 * tintB * 255;
        }
      };
      CanvasGraphicsRenderer2.prototype.renderPolygon = function renderPolygon(points, close, context) {
        context.moveTo(points[0], points[1]);
        for (var j = 1; j < points.length / 2; ++j) {
          context.lineTo(points[j * 2], points[j * 2 + 1]);
        }
        if (close) {
          context.closePath();
        }
      };
      CanvasGraphicsRenderer2.prototype.destroy = function destroy() {
        this.renderer = null;
      };
      return CanvasGraphicsRenderer2;
    }();
    exports.default = CanvasGraphicsRenderer;
    _CanvasRenderer2.default.registerPlugin("graphics", CanvasGraphicsRenderer);
  }
});

// node_modules/pixi.js/lib/core/textures/Spritesheet.js
var require_Spritesheet = __commonJS({
  "node_modules/pixi.js/lib/core/textures/Spritesheet.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _ = require_core();
    var _utils = require_utils();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var Spritesheet = function() {
      _createClass(Spritesheet2, null, [{
        key: "BATCH_SIZE",
        /**
         * The maximum number of Textures to build per process.
         *
         * @type {number}
         * @default 1000
         */
        get: function get() {
          return 1e3;
        }
        /**
         * @param {PIXI.BaseTexture} baseTexture Reference to the source BaseTexture object.
         * @param {Object} data - Spritesheet image data.
         * @param {string} [resolutionFilename] - The filename to consider when determining
         *        the resolution of the spritesheet. If not provided, the imageUrl will
         *        be used on the BaseTexture.
         */
      }]);
      function Spritesheet2(baseTexture, data) {
        var resolutionFilename = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
        _classCallCheck(this, Spritesheet2);
        this.baseTexture = baseTexture;
        this.textures = {};
        this.animations = {};
        this.data = data;
        this.resolution = this._updateResolution(resolutionFilename || this.baseTexture.imageUrl);
        this._frames = this.data.frames;
        this._frameKeys = Object.keys(this._frames);
        this._batchIndex = 0;
        this._callback = null;
      }
      Spritesheet2.prototype._updateResolution = function _updateResolution(resolutionFilename) {
        var scale = this.data.meta.scale;
        var resolution = (0, _utils.getResolutionOfUrl)(resolutionFilename, null);
        if (resolution === null) {
          resolution = scale !== void 0 ? parseFloat(scale) : 1;
        }
        if (resolution !== 1) {
          this.baseTexture.resolution = resolution;
          this.baseTexture.update();
        }
        return resolution;
      };
      Spritesheet2.prototype.parse = function parse(callback) {
        this._batchIndex = 0;
        this._callback = callback;
        if (this._frameKeys.length <= Spritesheet2.BATCH_SIZE) {
          this._processFrames(0);
          this._processAnimations();
          this._parseComplete();
        } else {
          this._nextBatch();
        }
      };
      Spritesheet2.prototype._processFrames = function _processFrames(initialFrameIndex) {
        var frameIndex = initialFrameIndex;
        var maxFrames = Spritesheet2.BATCH_SIZE;
        var sourceScale = this.baseTexture.sourceScale;
        while (frameIndex - initialFrameIndex < maxFrames && frameIndex < this._frameKeys.length) {
          var i = this._frameKeys[frameIndex];
          var data = this._frames[i];
          var rect = data.frame;
          if (rect) {
            var frame = null;
            var trim = null;
            var sourceSize = data.trimmed !== false && data.sourceSize ? data.sourceSize : data.frame;
            var orig = new _.Rectangle(0, 0, Math.floor(sourceSize.w * sourceScale) / this.resolution, Math.floor(sourceSize.h * sourceScale) / this.resolution);
            if (data.rotated) {
              frame = new _.Rectangle(Math.floor(rect.x * sourceScale) / this.resolution, Math.floor(rect.y * sourceScale) / this.resolution, Math.floor(rect.h * sourceScale) / this.resolution, Math.floor(rect.w * sourceScale) / this.resolution);
            } else {
              frame = new _.Rectangle(Math.floor(rect.x * sourceScale) / this.resolution, Math.floor(rect.y * sourceScale) / this.resolution, Math.floor(rect.w * sourceScale) / this.resolution, Math.floor(rect.h * sourceScale) / this.resolution);
            }
            if (data.trimmed !== false && data.spriteSourceSize) {
              trim = new _.Rectangle(Math.floor(data.spriteSourceSize.x * sourceScale) / this.resolution, Math.floor(data.spriteSourceSize.y * sourceScale) / this.resolution, Math.floor(rect.w * sourceScale) / this.resolution, Math.floor(rect.h * sourceScale) / this.resolution);
            }
            this.textures[i] = new _.Texture(this.baseTexture, frame, orig, trim, data.rotated ? 2 : 0, data.anchor);
            _.Texture.addToCache(this.textures[i], i);
          }
          frameIndex++;
        }
      };
      Spritesheet2.prototype._processAnimations = function _processAnimations() {
        var animations = this.data.animations || {};
        for (var animName in animations) {
          this.animations[animName] = [];
          for (var _iterator = animations[animName], _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ; ) {
            var _ref;
            if (_isArray) {
              if (_i >= _iterator.length)
                break;
              _ref = _iterator[_i++];
            } else {
              _i = _iterator.next();
              if (_i.done)
                break;
              _ref = _i.value;
            }
            var frameName = _ref;
            this.animations[animName].push(this.textures[frameName]);
          }
        }
      };
      Spritesheet2.prototype._parseComplete = function _parseComplete() {
        var callback = this._callback;
        this._callback = null;
        this._batchIndex = 0;
        callback.call(this, this.textures);
      };
      Spritesheet2.prototype._nextBatch = function _nextBatch() {
        var _this = this;
        this._processFrames(this._batchIndex * Spritesheet2.BATCH_SIZE);
        this._batchIndex++;
        setTimeout(function() {
          if (_this._batchIndex * Spritesheet2.BATCH_SIZE < _this._frameKeys.length) {
            _this._nextBatch();
          } else {
            _this._processAnimations();
            _this._parseComplete();
          }
        }, 0);
      };
      Spritesheet2.prototype.destroy = function destroy() {
        var destroyBase = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
        for (var i in this.textures) {
          this.textures[i].destroy();
        }
        this._frames = null;
        this._frameKeys = null;
        this.data = null;
        this.textures = null;
        if (destroyBase) {
          this.baseTexture.destroy();
        }
        this.baseTexture = null;
      };
      return Spritesheet2;
    }();
    exports.default = Spritesheet;
  }
});

// node_modules/pixi.js/lib/core/autoDetectRenderer.js
var require_autoDetectRenderer = __commonJS({
  "node_modules/pixi.js/lib/core/autoDetectRenderer.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.autoDetectRenderer = autoDetectRenderer;
    var _utils = require_utils();
    var utils = _interopRequireWildcard(_utils);
    var _CanvasRenderer = require_CanvasRenderer();
    var _CanvasRenderer2 = _interopRequireDefault(_CanvasRenderer);
    var _WebGLRenderer = require_WebGLRenderer();
    var _WebGLRenderer2 = _interopRequireDefault(_WebGLRenderer);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function autoDetectRenderer(options, arg1, arg2, arg3) {
      var forceCanvas = options && options.forceCanvas;
      if (arg3 !== void 0) {
        forceCanvas = arg3;
      }
      if (!forceCanvas && utils.isWebGLSupported()) {
        return new _WebGLRenderer2.default(options, arg1, arg2);
      }
      return new _CanvasRenderer2.default(options, arg1, arg2);
    }
  }
});

// node_modules/pixi.js/lib/core/Application.js
var require_Application = __commonJS({
  "node_modules/pixi.js/lib/core/Application.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _autoDetectRenderer = require_autoDetectRenderer();
    var _Container = require_Container();
    var _Container2 = _interopRequireDefault(_Container);
    var _ticker = require_ticker();
    var _settings = require_settings();
    var _settings2 = _interopRequireDefault(_settings);
    var _const = require_const();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var Application = function() {
      function Application2(options, arg2, arg3, arg4, arg5) {
        _classCallCheck(this, Application2);
        if (typeof options === "number") {
          options = Object.assign({
            width: options,
            height: arg2 || _settings2.default.RENDER_OPTIONS.height,
            forceCanvas: !!arg4,
            sharedTicker: !!arg5
          }, arg3);
        }
        this._options = options = Object.assign({
          autoStart: true,
          sharedTicker: false,
          forceCanvas: false,
          sharedLoader: false
        }, options);
        this.renderer = (0, _autoDetectRenderer.autoDetectRenderer)(options);
        this.stage = new _Container2.default();
        this._ticker = null;
        this.ticker = options.sharedTicker ? _ticker.shared : new _ticker.Ticker();
        if (options.autoStart) {
          this.start();
        }
      }
      Application2.prototype.render = function render() {
        this.renderer.render(this.stage);
      };
      Application2.prototype.stop = function stop() {
        this._ticker.stop();
      };
      Application2.prototype.start = function start() {
        this._ticker.start();
      };
      Application2.prototype.destroy = function destroy(removeView, stageOptions) {
        if (this._ticker) {
          var oldTicker = this._ticker;
          this.ticker = null;
          oldTicker.destroy();
        }
        this.stage.destroy(stageOptions);
        this.stage = null;
        this.renderer.destroy(removeView);
        this.renderer = null;
        this._options = null;
      };
      _createClass(Application2, [{
        key: "ticker",
        set: function set(ticker) {
          if (this._ticker) {
            this._ticker.remove(this.render, this);
          }
          this._ticker = ticker;
          if (ticker) {
            ticker.add(this.render, this, _const.UPDATE_PRIORITY.LOW);
          }
        },
        get: function get() {
          return this._ticker;
        }
      }, {
        key: "view",
        get: function get() {
          return this.renderer.view;
        }
        /**
         * Reference to the renderer's screen rectangle. Its safe to use as filterArea or hitArea for whole screen
         * @member {PIXI.Rectangle}
         * @readonly
         */
      }, {
        key: "screen",
        get: function get() {
          return this.renderer.screen;
        }
      }]);
      return Application2;
    }();
    exports.default = Application;
  }
});

// node_modules/pixi.js/lib/core/index.js
var require_core = __commonJS({
  "node_modules/pixi.js/lib/core/index.js"(exports) {
    "use strict";
    if (global === void 0) {
      global = window;
    }
    var global;
    exports.__esModule = true;
    exports.autoDetectRenderer = exports.Application = exports.Filter = exports.SpriteMaskFilter = exports.Quad = exports.RenderTarget = exports.ObjectRenderer = exports.WebGLManager = exports.Shader = exports.CanvasRenderTarget = exports.TextureUvs = exports.VideoBaseTexture = exports.BaseRenderTexture = exports.RenderTexture = exports.BaseTexture = exports.TextureMatrix = exports.Texture = exports.Spritesheet = exports.CanvasGraphicsRenderer = exports.GraphicsRenderer = exports.GraphicsData = exports.Graphics = exports.TextMetrics = exports.TextStyle = exports.Text = exports.SpriteRenderer = exports.CanvasTinter = exports.CanvasSpriteRenderer = exports.Sprite = exports.TransformBase = exports.TransformStatic = exports.Transform = exports.Container = exports.DisplayObject = exports.Bounds = exports.glCore = exports.WebGLRenderer = exports.CanvasRenderer = exports.ticker = exports.utils = exports.settings = void 0;
    var _const = require_const();
    Object.keys(_const).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
          return _const[key];
        }
      });
    });
    var _math = require_math();
    Object.keys(_math).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
          return _math[key];
        }
      });
    });
    var _pixiGlCore = require_src();
    Object.defineProperty(exports, "glCore", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_pixiGlCore).default;
      }
    });
    var _Bounds = require_Bounds();
    Object.defineProperty(exports, "Bounds", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_Bounds).default;
      }
    });
    var _DisplayObject = require_DisplayObject();
    Object.defineProperty(exports, "DisplayObject", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_DisplayObject).default;
      }
    });
    var _Container = require_Container();
    Object.defineProperty(exports, "Container", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_Container).default;
      }
    });
    var _Transform = require_Transform();
    Object.defineProperty(exports, "Transform", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_Transform).default;
      }
    });
    var _TransformStatic = require_TransformStatic();
    Object.defineProperty(exports, "TransformStatic", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_TransformStatic).default;
      }
    });
    var _TransformBase = require_TransformBase();
    Object.defineProperty(exports, "TransformBase", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_TransformBase).default;
      }
    });
    var _Sprite = require_Sprite();
    Object.defineProperty(exports, "Sprite", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_Sprite).default;
      }
    });
    var _CanvasSpriteRenderer = require_CanvasSpriteRenderer();
    Object.defineProperty(exports, "CanvasSpriteRenderer", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_CanvasSpriteRenderer).default;
      }
    });
    var _CanvasTinter = require_CanvasTinter();
    Object.defineProperty(exports, "CanvasTinter", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_CanvasTinter).default;
      }
    });
    var _SpriteRenderer = require_SpriteRenderer();
    Object.defineProperty(exports, "SpriteRenderer", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_SpriteRenderer).default;
      }
    });
    var _Text = require_Text();
    Object.defineProperty(exports, "Text", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_Text).default;
      }
    });
    var _TextStyle = require_TextStyle();
    Object.defineProperty(exports, "TextStyle", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_TextStyle).default;
      }
    });
    var _TextMetrics = require_TextMetrics();
    Object.defineProperty(exports, "TextMetrics", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_TextMetrics).default;
      }
    });
    var _Graphics = require_Graphics();
    Object.defineProperty(exports, "Graphics", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_Graphics).default;
      }
    });
    var _GraphicsData = require_GraphicsData();
    Object.defineProperty(exports, "GraphicsData", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_GraphicsData).default;
      }
    });
    var _GraphicsRenderer = require_GraphicsRenderer();
    Object.defineProperty(exports, "GraphicsRenderer", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_GraphicsRenderer).default;
      }
    });
    var _CanvasGraphicsRenderer = require_CanvasGraphicsRenderer();
    Object.defineProperty(exports, "CanvasGraphicsRenderer", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_CanvasGraphicsRenderer).default;
      }
    });
    var _Spritesheet = require_Spritesheet();
    Object.defineProperty(exports, "Spritesheet", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_Spritesheet).default;
      }
    });
    var _Texture = require_Texture();
    Object.defineProperty(exports, "Texture", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_Texture).default;
      }
    });
    var _TextureMatrix = require_TextureMatrix();
    Object.defineProperty(exports, "TextureMatrix", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_TextureMatrix).default;
      }
    });
    var _BaseTexture = require_BaseTexture();
    Object.defineProperty(exports, "BaseTexture", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_BaseTexture).default;
      }
    });
    var _RenderTexture = require_RenderTexture();
    Object.defineProperty(exports, "RenderTexture", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_RenderTexture).default;
      }
    });
    var _BaseRenderTexture = require_BaseRenderTexture();
    Object.defineProperty(exports, "BaseRenderTexture", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_BaseRenderTexture).default;
      }
    });
    var _VideoBaseTexture = require_VideoBaseTexture();
    Object.defineProperty(exports, "VideoBaseTexture", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_VideoBaseTexture).default;
      }
    });
    var _TextureUvs = require_TextureUvs();
    Object.defineProperty(exports, "TextureUvs", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_TextureUvs).default;
      }
    });
    var _CanvasRenderTarget = require_CanvasRenderTarget();
    Object.defineProperty(exports, "CanvasRenderTarget", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_CanvasRenderTarget).default;
      }
    });
    var _Shader = require_Shader();
    Object.defineProperty(exports, "Shader", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_Shader).default;
      }
    });
    var _WebGLManager = require_WebGLManager();
    Object.defineProperty(exports, "WebGLManager", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_WebGLManager).default;
      }
    });
    var _ObjectRenderer = require_ObjectRenderer();
    Object.defineProperty(exports, "ObjectRenderer", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_ObjectRenderer).default;
      }
    });
    var _RenderTarget = require_RenderTarget();
    Object.defineProperty(exports, "RenderTarget", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_RenderTarget).default;
      }
    });
    var _Quad = require_Quad();
    Object.defineProperty(exports, "Quad", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_Quad).default;
      }
    });
    var _SpriteMaskFilter = require_SpriteMaskFilter();
    Object.defineProperty(exports, "SpriteMaskFilter", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_SpriteMaskFilter).default;
      }
    });
    var _Filter = require_Filter();
    Object.defineProperty(exports, "Filter", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_Filter).default;
      }
    });
    var _Application = require_Application();
    Object.defineProperty(exports, "Application", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_Application).default;
      }
    });
    var _autoDetectRenderer = require_autoDetectRenderer();
    Object.defineProperty(exports, "autoDetectRenderer", {
      enumerable: true,
      get: function get() {
        return _autoDetectRenderer.autoDetectRenderer;
      }
    });
    var _utils = require_utils();
    var utils = _interopRequireWildcard(_utils);
    var _ticker = require_ticker();
    var ticker = _interopRequireWildcard(_ticker);
    var _settings = require_settings();
    var _settings2 = _interopRequireDefault(_settings);
    var _CanvasRenderer = require_CanvasRenderer();
    var _CanvasRenderer2 = _interopRequireDefault(_CanvasRenderer);
    var _WebGLRenderer = require_WebGLRenderer();
    var _WebGLRenderer2 = _interopRequireDefault(_WebGLRenderer);
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.settings = _settings2.default;
    exports.utils = utils;
    exports.ticker = ticker;
    exports.CanvasRenderer = _CanvasRenderer2.default;
    exports.WebGLRenderer = _WebGLRenderer2.default;
  }
});

// node_modules/pixi.js/lib/deprecation.js
var require_deprecation = __commonJS({
  "node_modules/pixi.js/lib/deprecation.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.default = deprecation;
    var warnings = {};
    function warn(msg) {
      if (warnings[msg]) {
        return;
      }
      var stack = new Error().stack;
      if (typeof stack === "undefined") {
        console.warn("Deprecation Warning: ", msg);
      } else {
        stack = stack.split("\n").splice(3).join("\n");
        if (console.groupCollapsed) {
          console.groupCollapsed("%cDeprecation Warning: %c%s", "color:#614108;background:#fffbe6", "font-weight:normal;color:#614108;background:#fffbe6", msg);
          console.warn(stack);
          console.groupEnd();
        } else {
          console.warn("Deprecation Warning: ", msg);
          console.warn(stack);
        }
      }
      warnings[msg] = true;
    }
    function deprecation(core) {
      var mesh = core.mesh, particles = core.particles, extras = core.extras, filters = core.filters, prepare = core.prepare, loaders = core.loaders, interaction = core.interaction;
      Object.defineProperties(core, {
        /**
         * @class
         * @private
         * @name SpriteBatch
         * @memberof PIXI
         * @see PIXI.ParticleContainer
         * @throws {ReferenceError} SpriteBatch does not exist any more, please use the new ParticleContainer instead.
         * @deprecated since version 3.0.0
         */
        SpriteBatch: {
          get: function get() {
            throw new ReferenceError("SpriteBatch does not exist any more, please use the new ParticleContainer instead.");
          }
        },
        /**
         * @class
         * @private
         * @name AssetLoader
         * @memberof PIXI
         * @see PIXI.loaders.Loader
         * @throws {ReferenceError} The loader system was overhauled in PixiJS v3,
         * please see the new PIXI.loaders.Loader class.
         * @deprecated since version 3.0.0
         */
        AssetLoader: {
          get: function get() {
            throw new ReferenceError("The loader system was overhauled in PixiJS v3, please see the new PIXI.loaders.Loader class.");
          }
        },
        /**
         * @class
         * @private
         * @name Stage
         * @memberof PIXI
         * @see PIXI.Container
         * @deprecated since version 3.0.0
         */
        Stage: {
          get: function get() {
            warn("You do not need to use a PIXI Stage any more, you can simply render any container.");
            return core.Container;
          }
        },
        /**
         * @class
         * @private
         * @name DisplayObjectContainer
         * @memberof PIXI
         * @see PIXI.Container
         * @deprecated since version 3.0.0
         */
        DisplayObjectContainer: {
          get: function get() {
            warn("DisplayObjectContainer has been shortened to Container, please use Container from now on.");
            return core.Container;
          }
        },
        /**
         * @class
         * @private
         * @name Strip
         * @memberof PIXI
         * @see PIXI.mesh.Mesh
         * @deprecated since version 3.0.0
         */
        Strip: {
          get: function get() {
            warn("The Strip class has been renamed to Mesh and moved to mesh.Mesh, please use mesh.Mesh from now on.");
            return mesh.Mesh;
          }
        },
        /**
         * @class
         * @private
         * @name Rope
         * @memberof PIXI
         * @see PIXI.mesh.Rope
         * @deprecated since version 3.0.0
         */
        Rope: {
          get: function get() {
            warn("The Rope class has been moved to mesh.Rope, please use mesh.Rope from now on.");
            return mesh.Rope;
          }
        },
        /**
         * @class
         * @private
         * @name ParticleContainer
         * @memberof PIXI
         * @see PIXI.particles.ParticleContainer
         * @deprecated since version 4.0.0
         */
        ParticleContainer: {
          get: function get() {
            warn("The ParticleContainer class has been moved to particles.ParticleContainer, please use particles.ParticleContainer from now on.");
            return particles.ParticleContainer;
          }
        },
        /**
         * @class
         * @private
         * @name MovieClip
         * @memberof PIXI
         * @see PIXI.extras.MovieClip
         * @deprecated since version 3.0.0
         */
        MovieClip: {
          get: function get() {
            warn("The MovieClip class has been moved to extras.AnimatedSprite, please use extras.AnimatedSprite.");
            return extras.AnimatedSprite;
          }
        },
        /**
         * @class
         * @private
         * @name TilingSprite
         * @memberof PIXI
         * @see PIXI.extras.TilingSprite
         * @deprecated since version 3.0.0
         */
        TilingSprite: {
          get: function get() {
            warn("The TilingSprite class has been moved to extras.TilingSprite, please use extras.TilingSprite from now on.");
            return extras.TilingSprite;
          }
        },
        /**
         * @class
         * @private
         * @name BitmapText
         * @memberof PIXI
         * @see PIXI.extras.BitmapText
         * @deprecated since version 3.0.0
         */
        BitmapText: {
          get: function get() {
            warn("The BitmapText class has been moved to extras.BitmapText, please use extras.BitmapText from now on.");
            return extras.BitmapText;
          }
        },
        /**
         * @class
         * @private
         * @name blendModes
         * @memberof PIXI
         * @see PIXI.BLEND_MODES
         * @deprecated since version 3.0.0
         */
        blendModes: {
          get: function get() {
            warn("The blendModes has been moved to BLEND_MODES, please use BLEND_MODES from now on.");
            return core.BLEND_MODES;
          }
        },
        /**
         * @class
         * @private
         * @name scaleModes
         * @memberof PIXI
         * @see PIXI.SCALE_MODES
         * @deprecated since version 3.0.0
         */
        scaleModes: {
          get: function get() {
            warn("The scaleModes has been moved to SCALE_MODES, please use SCALE_MODES from now on.");
            return core.SCALE_MODES;
          }
        },
        /**
         * @class
         * @private
         * @name BaseTextureCache
         * @memberof PIXI
         * @see PIXI.utils.BaseTextureCache
         * @deprecated since version 3.0.0
         */
        BaseTextureCache: {
          get: function get() {
            warn("The BaseTextureCache class has been moved to utils.BaseTextureCache, please use utils.BaseTextureCache from now on.");
            return core.utils.BaseTextureCache;
          }
        },
        /**
         * @class
         * @private
         * @name TextureCache
         * @memberof PIXI
         * @see PIXI.utils.TextureCache
         * @deprecated since version 3.0.0
         */
        TextureCache: {
          get: function get() {
            warn("The TextureCache class has been moved to utils.TextureCache, please use utils.TextureCache from now on.");
            return core.utils.TextureCache;
          }
        },
        /**
         * @namespace
         * @private
         * @name math
         * @memberof PIXI
         * @see PIXI
         * @deprecated since version 3.0.6
         */
        math: {
          get: function get() {
            warn("The math namespace is deprecated, please access members already accessible on PIXI.");
            return core;
          }
        },
        /**
         * @class
         * @private
         * @name PIXI.AbstractFilter
         * @see PIXI.Filter
         * @deprecated since version 3.0.6
         */
        AbstractFilter: {
          get: function get() {
            warn("AstractFilter has been renamed to Filter, please use PIXI.Filter");
            return core.Filter;
          }
        },
        /**
         * @class
         * @private
         * @name PIXI.TransformManual
         * @see PIXI.TransformBase
         * @deprecated since version 4.0.0
         */
        TransformManual: {
          get: function get() {
            warn("TransformManual has been renamed to TransformBase, please update your pixi-spine");
            return core.TransformBase;
          }
        },
        /**
         * @static
         * @constant
         * @name PIXI.TARGET_FPMS
         * @see PIXI.settings.TARGET_FPMS
         * @deprecated since version 4.2.0
         */
        TARGET_FPMS: {
          get: function get() {
            warn("PIXI.TARGET_FPMS has been deprecated, please use PIXI.settings.TARGET_FPMS");
            return core.settings.TARGET_FPMS;
          },
          set: function set(value) {
            warn("PIXI.TARGET_FPMS has been deprecated, please use PIXI.settings.TARGET_FPMS");
            core.settings.TARGET_FPMS = value;
          }
        },
        /**
         * @static
         * @constant
         * @name PIXI.FILTER_RESOLUTION
         * @see PIXI.settings.FILTER_RESOLUTION
         * @deprecated since version 4.2.0
         */
        FILTER_RESOLUTION: {
          get: function get() {
            warn("PIXI.FILTER_RESOLUTION has been deprecated, please use PIXI.settings.FILTER_RESOLUTION");
            return core.settings.FILTER_RESOLUTION;
          },
          set: function set(value) {
            warn("PIXI.FILTER_RESOLUTION has been deprecated, please use PIXI.settings.FILTER_RESOLUTION");
            core.settings.FILTER_RESOLUTION = value;
          }
        },
        /**
         * @static
         * @constant
         * @name PIXI.RESOLUTION
         * @see PIXI.settings.RESOLUTION
         * @deprecated since version 4.2.0
         */
        RESOLUTION: {
          get: function get() {
            warn("PIXI.RESOLUTION has been deprecated, please use PIXI.settings.RESOLUTION");
            return core.settings.RESOLUTION;
          },
          set: function set(value) {
            warn("PIXI.RESOLUTION has been deprecated, please use PIXI.settings.RESOLUTION");
            core.settings.RESOLUTION = value;
          }
        },
        /**
         * @static
         * @constant
         * @name PIXI.MIPMAP_TEXTURES
         * @see PIXI.settings.MIPMAP_TEXTURES
         * @deprecated since version 4.2.0
         */
        MIPMAP_TEXTURES: {
          get: function get() {
            warn("PIXI.MIPMAP_TEXTURES has been deprecated, please use PIXI.settings.MIPMAP_TEXTURES");
            return core.settings.MIPMAP_TEXTURES;
          },
          set: function set(value) {
            warn("PIXI.MIPMAP_TEXTURES has been deprecated, please use PIXI.settings.MIPMAP_TEXTURES");
            core.settings.MIPMAP_TEXTURES = value;
          }
        },
        /**
         * @static
         * @constant
         * @name PIXI.SPRITE_BATCH_SIZE
         * @see PIXI.settings.SPRITE_BATCH_SIZE
         * @deprecated since version 4.2.0
         */
        SPRITE_BATCH_SIZE: {
          get: function get() {
            warn("PIXI.SPRITE_BATCH_SIZE has been deprecated, please use PIXI.settings.SPRITE_BATCH_SIZE");
            return core.settings.SPRITE_BATCH_SIZE;
          },
          set: function set(value) {
            warn("PIXI.SPRITE_BATCH_SIZE has been deprecated, please use PIXI.settings.SPRITE_BATCH_SIZE");
            core.settings.SPRITE_BATCH_SIZE = value;
          }
        },
        /**
         * @static
         * @constant
         * @name PIXI.SPRITE_MAX_TEXTURES
         * @see PIXI.settings.SPRITE_MAX_TEXTURES
         * @deprecated since version 4.2.0
         */
        SPRITE_MAX_TEXTURES: {
          get: function get() {
            warn("PIXI.SPRITE_MAX_TEXTURES has been deprecated, please use PIXI.settings.SPRITE_MAX_TEXTURES");
            return core.settings.SPRITE_MAX_TEXTURES;
          },
          set: function set(value) {
            warn("PIXI.SPRITE_MAX_TEXTURES has been deprecated, please use PIXI.settings.SPRITE_MAX_TEXTURES");
            core.settings.SPRITE_MAX_TEXTURES = value;
          }
        },
        /**
         * @static
         * @constant
         * @name PIXI.RETINA_PREFIX
         * @see PIXI.settings.RETINA_PREFIX
         * @deprecated since version 4.2.0
         */
        RETINA_PREFIX: {
          get: function get() {
            warn("PIXI.RETINA_PREFIX has been deprecated, please use PIXI.settings.RETINA_PREFIX");
            return core.settings.RETINA_PREFIX;
          },
          set: function set(value) {
            warn("PIXI.RETINA_PREFIX has been deprecated, please use PIXI.settings.RETINA_PREFIX");
            core.settings.RETINA_PREFIX = value;
          }
        },
        /**
         * @static
         * @constant
         * @name PIXI.DEFAULT_RENDER_OPTIONS
         * @see PIXI.settings.RENDER_OPTIONS
         * @deprecated since version 4.2.0
         */
        DEFAULT_RENDER_OPTIONS: {
          get: function get() {
            warn("PIXI.DEFAULT_RENDER_OPTIONS has been deprecated, please use PIXI.settings.DEFAULT_RENDER_OPTIONS");
            return core.settings.RENDER_OPTIONS;
          }
        }
      });
      var defaults = [{ parent: "TRANSFORM_MODE", target: "TRANSFORM_MODE" }, { parent: "GC_MODES", target: "GC_MODE" }, { parent: "WRAP_MODES", target: "WRAP_MODE" }, { parent: "SCALE_MODES", target: "SCALE_MODE" }, { parent: "PRECISION", target: "PRECISION_FRAGMENT" }];
      var _loop = function _loop2(i2) {
        var deprecation2 = defaults[i2];
        Object.defineProperty(core[deprecation2.parent], "DEFAULT", {
          get: function get() {
            warn("PIXI." + deprecation2.parent + ".DEFAULT has been deprecated, " + ("please use PIXI.settings." + deprecation2.target));
            return core.settings[deprecation2.target];
          },
          set: function set(value) {
            warn("PIXI." + deprecation2.parent + ".DEFAULT has been deprecated, " + ("please use PIXI.settings." + deprecation2.target));
            core.settings[deprecation2.target] = value;
          }
        });
      };
      for (var i = 0; i < defaults.length; i++) {
        _loop(i);
      }
      Object.defineProperties(core.settings, {
        /**
         * @static
         * @name PRECISION
         * @memberof PIXI.settings
         * @see PIXI.PRECISION
         * @deprecated since version 4.4.0
         */
        PRECISION: {
          get: function get() {
            warn("PIXI.settings.PRECISION has been deprecated, please use PIXI.settings.PRECISION_FRAGMENT");
            return core.settings.PRECISION_FRAGMENT;
          },
          set: function set(value) {
            warn("PIXI.settings.PRECISION has been deprecated, please use PIXI.settings.PRECISION_FRAGMENT");
            core.settings.PRECISION_FRAGMENT = value;
          }
        }
      });
      if (extras.AnimatedSprite) {
        Object.defineProperties(extras, {
          /**
           * @class
           * @name MovieClip
           * @memberof PIXI.extras
           * @see PIXI.extras.AnimatedSprite
           * @deprecated since version 4.2.0
           */
          MovieClip: {
            get: function get() {
              warn("The MovieClip class has been renamed to AnimatedSprite, please use AnimatedSprite from now on.");
              return extras.AnimatedSprite;
            }
          }
        });
      }
      if (extras) {
        Object.defineProperties(extras, {
          /**
           * @class
           * @name TextureTransform
           * @memberof PIXI.extras
           * @see PIXI.TextureMatrix
           * @deprecated since version 4.6.0
           */
          TextureTransform: {
            get: function get() {
              warn("The TextureTransform class has been renamed to TextureMatrix, please use PIXI.TextureMatrix from now on.");
              return core.TextureMatrix;
            }
          }
        });
      }
      core.DisplayObject.prototype.generateTexture = function generateTexture(renderer, scaleMode, resolution) {
        warn("generateTexture has moved to the renderer, please use renderer.generateTexture(displayObject)");
        return renderer.generateTexture(this, scaleMode, resolution);
      };
      core.Graphics.prototype.generateTexture = function generateTexture(scaleMode, resolution) {
        warn("graphics generate texture has moved to the renderer. Or to render a graphics to a texture using canvas please use generateCanvasTexture");
        return this.generateCanvasTexture(scaleMode, resolution);
      };
      core.GroupD8.isSwapWidthHeight = function isSwapWidthHeight(rotation) {
        warn("GroupD8.isSwapWidthHeight was renamed to GroupD8.isVertical");
        return core.GroupD8.isVertical(rotation);
      };
      core.RenderTexture.prototype.render = function render(displayObject, matrix, clear, updateTransform) {
        this.legacyRenderer.render(displayObject, this, clear, matrix, !updateTransform);
        warn("RenderTexture.render is now deprecated, please use renderer.render(displayObject, renderTexture)");
      };
      core.RenderTexture.prototype.getImage = function getImage(target) {
        warn("RenderTexture.getImage is now deprecated, please use renderer.extract.image(target)");
        return this.legacyRenderer.extract.image(target);
      };
      core.RenderTexture.prototype.getBase64 = function getBase64(target) {
        warn("RenderTexture.getBase64 is now deprecated, please use renderer.extract.base64(target)");
        return this.legacyRenderer.extract.base64(target);
      };
      core.RenderTexture.prototype.getCanvas = function getCanvas(target) {
        warn("RenderTexture.getCanvas is now deprecated, please use renderer.extract.canvas(target)");
        return this.legacyRenderer.extract.canvas(target);
      };
      core.RenderTexture.prototype.getPixels = function getPixels(target) {
        warn("RenderTexture.getPixels is now deprecated, please use renderer.extract.pixels(target)");
        return this.legacyRenderer.pixels(target);
      };
      core.Sprite.prototype.setTexture = function setTexture(texture) {
        this.texture = texture;
        warn("setTexture is now deprecated, please use the texture property, e.g : sprite.texture = texture;");
      };
      if (extras.BitmapText) {
        extras.BitmapText.prototype.setText = function setText(text) {
          this.text = text;
          warn("setText is now deprecated, please use the text property, e.g : myBitmapText.text = 'my text';");
        };
      }
      core.Text.prototype.setText = function setText(text) {
        this.text = text;
        warn("setText is now deprecated, please use the text property, e.g : myText.text = 'my text';");
      };
      core.Text.calculateFontProperties = function calculateFontProperties(font) {
        warn("Text.calculateFontProperties is now deprecated, please use the TextMetrics.measureFont");
        return core.TextMetrics.measureFont(font);
      };
      Object.defineProperties(core.Text, {
        fontPropertiesCache: {
          get: function get() {
            warn("Text.fontPropertiesCache is deprecated");
            return core.TextMetrics._fonts;
          }
        },
        fontPropertiesCanvas: {
          get: function get() {
            warn("Text.fontPropertiesCanvas is deprecated");
            return core.TextMetrics._canvas;
          }
        },
        fontPropertiesContext: {
          get: function get() {
            warn("Text.fontPropertiesContext is deprecated");
            return core.TextMetrics._context;
          }
        }
      });
      core.Text.prototype.setStyle = function setStyle(style) {
        this.style = style;
        warn("setStyle is now deprecated, please use the style property, e.g : myText.style = style;");
      };
      core.Text.prototype.determineFontProperties = function determineFontProperties(fontStyle) {
        warn("determineFontProperties is now deprecated, please use TextMetrics.measureFont method");
        return core.TextMetrics.measureFont(fontStyle);
      };
      core.Text.getFontStyle = function getFontStyle(style) {
        warn("getFontStyle is now deprecated, please use TextStyle.toFontString() instead");
        style = style || {};
        if (!(style instanceof core.TextStyle)) {
          style = new core.TextStyle(style);
        }
        return style.toFontString();
      };
      Object.defineProperties(core.TextStyle.prototype, {
        /**
         * Set all properties of a font as a single string
         *
         * @name PIXI.TextStyle#font
         * @deprecated since version 4.0.0
         */
        font: {
          get: function get() {
            warn("text style property 'font' is now deprecated, please use the 'fontFamily', 'fontSize', 'fontStyle', 'fontVariant' and 'fontWeight' properties from now on");
            var fontSizeString = typeof this._fontSize === "number" ? this._fontSize + "px" : this._fontSize;
            return this._fontStyle + " " + this._fontVariant + " " + this._fontWeight + " " + fontSizeString + " " + this._fontFamily;
          },
          set: function set(font) {
            warn("text style property 'font' is now deprecated, please use the 'fontFamily','fontSize',fontStyle','fontVariant' and 'fontWeight' properties from now on");
            if (font.indexOf("italic") > 1) {
              this._fontStyle = "italic";
            } else if (font.indexOf("oblique") > -1) {
              this._fontStyle = "oblique";
            } else {
              this._fontStyle = "normal";
            }
            if (font.indexOf("small-caps") > -1) {
              this._fontVariant = "small-caps";
            } else {
              this._fontVariant = "normal";
            }
            var splits = font.split(" ");
            var fontSizeIndex = -1;
            this._fontSize = 26;
            for (var i2 = 0; i2 < splits.length; ++i2) {
              if (splits[i2].match(/(px|pt|em|%)/)) {
                fontSizeIndex = i2;
                this._fontSize = splits[i2];
                break;
              }
            }
            this._fontWeight = "normal";
            for (var _i = 0; _i < fontSizeIndex; ++_i) {
              if (splits[_i].match(/(bold|bolder|lighter|100|200|300|400|500|600|700|800|900)/)) {
                this._fontWeight = splits[_i];
                break;
              }
            }
            if (fontSizeIndex > -1 && fontSizeIndex < splits.length - 1) {
              this._fontFamily = "";
              for (var _i2 = fontSizeIndex + 1; _i2 < splits.length; ++_i2) {
                this._fontFamily += splits[_i2] + " ";
              }
              this._fontFamily = this._fontFamily.slice(0, -1);
            } else {
              this._fontFamily = "Arial";
            }
            this.styleID++;
          }
        }
      });
      core.Texture.prototype.setFrame = function setFrame(frame) {
        this.frame = frame;
        warn("setFrame is now deprecated, please use the frame property, e.g: myTexture.frame = frame;");
      };
      core.Texture.addTextureToCache = function addTextureToCache(texture, id) {
        core.Texture.addToCache(texture, id);
        warn("Texture.addTextureToCache is deprecated, please use Texture.addToCache from now on.");
      };
      core.Texture.removeTextureFromCache = function removeTextureFromCache(id) {
        warn("Texture.removeTextureFromCache is deprecated, please use Texture.removeFromCache from now on. Be aware that Texture.removeFromCache does not automatically its BaseTexture from the BaseTextureCache. For that, use BaseTexture.removeFromCache");
        core.BaseTexture.removeFromCache(id);
        return core.Texture.removeFromCache(id);
      };
      Object.defineProperties(filters, {
        /**
         * @class
         * @private
         * @name PIXI.filters.AbstractFilter
         * @see PIXI.AbstractFilter
         * @deprecated since version 3.0.6
         */
        AbstractFilter: {
          get: function get() {
            warn("AstractFilter has been renamed to Filter, please use PIXI.Filter");
            return core.AbstractFilter;
          }
        },
        /**
         * @class
         * @private
         * @name PIXI.filters.SpriteMaskFilter
         * @see PIXI.SpriteMaskFilter
         * @deprecated since version 3.0.6
         */
        SpriteMaskFilter: {
          get: function get() {
            warn("filters.SpriteMaskFilter is an undocumented alias, please use SpriteMaskFilter from now on.");
            return core.SpriteMaskFilter;
          }
        },
        /**
         * @class
         * @private
         * @name PIXI.filters.VoidFilter
         * @see PIXI.filters.AlphaFilter
         * @deprecated since version 4.5.7
         */
        VoidFilter: {
          get: function get() {
            warn("VoidFilter has been renamed to AlphaFilter, please use PIXI.filters.AlphaFilter");
            return filters.AlphaFilter;
          }
        }
      });
      core.utils.uuid = function() {
        warn("utils.uuid() is deprecated, please use utils.uid() from now on.");
        return core.utils.uid();
      };
      core.utils.canUseNewCanvasBlendModes = function() {
        warn("utils.canUseNewCanvasBlendModes() is deprecated, please use CanvasTinter.canUseMultiply from now on");
        return core.CanvasTinter.canUseMultiply;
      };
      var saidHello = true;
      Object.defineProperty(core.utils, "_saidHello", {
        set: function set(bool) {
          if (bool) {
            warn("PIXI.utils._saidHello is deprecated, please use PIXI.utils.skipHello()");
            this.skipHello();
          }
          saidHello = bool;
        },
        get: function get() {
          return saidHello;
        }
      });
      if (prepare.BasePrepare) {
        prepare.BasePrepare.prototype.register = function register(addHook, uploadHook) {
          warn("renderer.plugins.prepare.register is now deprecated, please use renderer.plugins.prepare.registerFindHook & renderer.plugins.prepare.registerUploadHook");
          if (addHook) {
            this.registerFindHook(addHook);
          }
          if (uploadHook) {
            this.registerUploadHook(uploadHook);
          }
          return this;
        };
      }
      if (prepare.canvas) {
        Object.defineProperty(prepare.canvas, "UPLOADS_PER_FRAME", {
          set: function set() {
            warn("PIXI.CanvasPrepare.UPLOADS_PER_FRAME has been removed. Please set renderer.plugins.prepare.limiter.maxItemsPerFrame on your renderer");
          },
          get: function get() {
            warn("PIXI.CanvasPrepare.UPLOADS_PER_FRAME has been removed. Please use renderer.plugins.prepare.limiter");
            return NaN;
          }
        });
      }
      if (prepare.webgl) {
        Object.defineProperty(prepare.webgl, "UPLOADS_PER_FRAME", {
          set: function set() {
            warn("PIXI.WebGLPrepare.UPLOADS_PER_FRAME has been removed. Please set renderer.plugins.prepare.limiter.maxItemsPerFrame on your renderer");
          },
          get: function get() {
            warn("PIXI.WebGLPrepare.UPLOADS_PER_FRAME has been removed. Please use renderer.plugins.prepare.limiter");
            return NaN;
          }
        });
      }
      if (loaders.Loader) {
        var Resource = loaders.Resource;
        var Loader = loaders.Loader;
        Object.defineProperties(Resource.prototype, {
          isJson: {
            get: function get() {
              warn("The isJson property is deprecated, please use `resource.type === Resource.TYPE.JSON`.");
              return this.type === Resource.TYPE.JSON;
            }
          },
          isXml: {
            get: function get() {
              warn("The isXml property is deprecated, please use `resource.type === Resource.TYPE.XML`.");
              return this.type === Resource.TYPE.XML;
            }
          },
          isImage: {
            get: function get() {
              warn("The isImage property is deprecated, please use `resource.type === Resource.TYPE.IMAGE`.");
              return this.type === Resource.TYPE.IMAGE;
            }
          },
          isAudio: {
            get: function get() {
              warn("The isAudio property is deprecated, please use `resource.type === Resource.TYPE.AUDIO`.");
              return this.type === Resource.TYPE.AUDIO;
            }
          },
          isVideo: {
            get: function get() {
              warn("The isVideo property is deprecated, please use `resource.type === Resource.TYPE.VIDEO`.");
              return this.type === Resource.TYPE.VIDEO;
            }
          }
        });
        Object.defineProperties(Loader.prototype, {
          before: {
            get: function get() {
              warn("The before() method is deprecated, please use pre().");
              return this.pre;
            }
          },
          after: {
            get: function get() {
              warn("The after() method is deprecated, please use use().");
              return this.use;
            }
          }
        });
      }
      if (interaction.interactiveTarget) {
        Object.defineProperty(interaction.interactiveTarget, "defaultCursor", {
          set: function set(value) {
            warn("Property defaultCursor has been replaced with 'cursor'. ");
            this.cursor = value;
          },
          get: function get() {
            warn("Property defaultCursor has been replaced with 'cursor'. ");
            return this.cursor;
          }
        });
      }
      if (interaction.InteractionManager) {
        Object.defineProperty(interaction.InteractionManager, "defaultCursorStyle", {
          set: function set(value) {
            warn("Property defaultCursorStyle has been replaced with 'cursorStyles.default'. ");
            this.cursorStyles.default = value;
          },
          get: function get() {
            warn("Property defaultCursorStyle has been replaced with 'cursorStyles.default'. ");
            return this.cursorStyles.default;
          }
        });
        Object.defineProperty(interaction.InteractionManager, "currentCursorStyle", {
          set: function set(value) {
            warn("Property currentCursorStyle has been removed.See the currentCursorMode property, which works differently.");
            this.currentCursorMode = value;
          },
          get: function get() {
            warn("Property currentCursorStyle has been removed.See the currentCursorMode property, which works differently.");
            return this.currentCursorMode;
          }
        });
      }
    }
  }
});

// node_modules/pixi.js/lib/accessibility/accessibleTarget.js
var require_accessibleTarget = __commonJS({
  "node_modules/pixi.js/lib/accessibility/accessibleTarget.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.default = {
      /**
       *  Flag for if the object is accessible. If true AccessibilityManager will overlay a
       *   shadow div with attributes set
       *
       * @member {boolean}
       */
      accessible: false,
      /**
       * Sets the title attribute of the shadow div
       * If accessibleTitle AND accessibleHint has not been this will default to 'displayObject [tabIndex]'
       *
       * @member {string}
       */
      accessibleTitle: null,
      /**
       * Sets the aria-label attribute of the shadow div
       *
       * @member {string}
       */
      accessibleHint: null,
      /**
       * @todo Needs docs.
       */
      tabIndex: 0,
      /**
       * @todo Needs docs.
       */
      _accessibleActive: false,
      /**
       * @todo Needs docs.
       */
      _accessibleDiv: false
    };
  }
});

// node_modules/pixi.js/lib/accessibility/AccessibilityManager.js
var require_AccessibilityManager = __commonJS({
  "node_modules/pixi.js/lib/accessibility/AccessibilityManager.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _core = require_core();
    var core = _interopRequireWildcard(_core);
    var _ismobilejs = require_isMobile_min();
    var _ismobilejs2 = _interopRequireDefault(_ismobilejs);
    var _accessibleTarget = require_accessibleTarget();
    var _accessibleTarget2 = _interopRequireDefault(_accessibleTarget);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    core.utils.mixins.delayMixin(core.DisplayObject.prototype, _accessibleTarget2.default);
    var KEY_CODE_TAB = 9;
    var DIV_TOUCH_SIZE = 100;
    var DIV_TOUCH_POS_X = 0;
    var DIV_TOUCH_POS_Y = 0;
    var DIV_TOUCH_ZINDEX = 2;
    var DIV_HOOK_SIZE = 1;
    var DIV_HOOK_POS_X = -1e3;
    var DIV_HOOK_POS_Y = -1e3;
    var DIV_HOOK_ZINDEX = 2;
    var AccessibilityManager = function() {
      function AccessibilityManager2(renderer) {
        _classCallCheck(this, AccessibilityManager2);
        if ((_ismobilejs2.default.tablet || _ismobilejs2.default.phone) && !navigator.isCocoonJS) {
          this.createTouchHook();
        }
        var div = document.createElement("div");
        div.style.width = DIV_TOUCH_SIZE + "px";
        div.style.height = DIV_TOUCH_SIZE + "px";
        div.style.position = "absolute";
        div.style.top = DIV_TOUCH_POS_X + "px";
        div.style.left = DIV_TOUCH_POS_Y + "px";
        div.style.zIndex = DIV_TOUCH_ZINDEX;
        this.div = div;
        this.pool = [];
        this.renderId = 0;
        this.debug = false;
        this.renderer = renderer;
        this.children = [];
        this._onKeyDown = this._onKeyDown.bind(this);
        this._onMouseMove = this._onMouseMove.bind(this);
        this.isActive = false;
        this.isMobileAccessabillity = false;
        window.addEventListener("keydown", this._onKeyDown, false);
      }
      AccessibilityManager2.prototype.createTouchHook = function createTouchHook() {
        var _this = this;
        var hookDiv = document.createElement("button");
        hookDiv.style.width = DIV_HOOK_SIZE + "px";
        hookDiv.style.height = DIV_HOOK_SIZE + "px";
        hookDiv.style.position = "absolute";
        hookDiv.style.top = DIV_HOOK_POS_X + "px";
        hookDiv.style.left = DIV_HOOK_POS_Y + "px";
        hookDiv.style.zIndex = DIV_HOOK_ZINDEX;
        hookDiv.style.backgroundColor = "#FF0000";
        hookDiv.title = "HOOK DIV";
        hookDiv.addEventListener("focus", function() {
          _this.isMobileAccessabillity = true;
          _this.activate();
          document.body.removeChild(hookDiv);
        });
        document.body.appendChild(hookDiv);
      };
      AccessibilityManager2.prototype.activate = function activate() {
        if (this.isActive) {
          return;
        }
        this.isActive = true;
        window.document.addEventListener("mousemove", this._onMouseMove, true);
        window.removeEventListener("keydown", this._onKeyDown, false);
        this.renderer.on("postrender", this.update, this);
        if (this.renderer.view.parentNode) {
          this.renderer.view.parentNode.appendChild(this.div);
        }
      };
      AccessibilityManager2.prototype.deactivate = function deactivate() {
        if (!this.isActive || this.isMobileAccessabillity) {
          return;
        }
        this.isActive = false;
        window.document.removeEventListener("mousemove", this._onMouseMove, true);
        window.addEventListener("keydown", this._onKeyDown, false);
        this.renderer.off("postrender", this.update);
        if (this.div.parentNode) {
          this.div.parentNode.removeChild(this.div);
        }
      };
      AccessibilityManager2.prototype.updateAccessibleObjects = function updateAccessibleObjects(displayObject) {
        if (!displayObject.visible) {
          return;
        }
        if (displayObject.accessible && displayObject.interactive) {
          if (!displayObject._accessibleActive) {
            this.addChild(displayObject);
          }
          displayObject.renderId = this.renderId;
        }
        var children = displayObject.children;
        for (var i = 0; i < children.length; i++) {
          this.updateAccessibleObjects(children[i]);
        }
      };
      AccessibilityManager2.prototype.update = function update() {
        if (!this.renderer.renderingToScreen) {
          return;
        }
        this.updateAccessibleObjects(this.renderer._lastObjectRendered);
        var rect = this.renderer.view.getBoundingClientRect();
        var sx = rect.width / this.renderer.width;
        var sy = rect.height / this.renderer.height;
        var div = this.div;
        div.style.left = rect.left + "px";
        div.style.top = rect.top + "px";
        div.style.width = this.renderer.width + "px";
        div.style.height = this.renderer.height + "px";
        for (var i = 0; i < this.children.length; i++) {
          var child = this.children[i];
          if (child.renderId !== this.renderId) {
            child._accessibleActive = false;
            core.utils.removeItems(this.children, i, 1);
            this.div.removeChild(child._accessibleDiv);
            this.pool.push(child._accessibleDiv);
            child._accessibleDiv = null;
            i--;
            if (this.children.length === 0) {
              this.deactivate();
            }
          } else {
            div = child._accessibleDiv;
            var hitArea = child.hitArea;
            var wt = child.worldTransform;
            if (child.hitArea) {
              div.style.left = (wt.tx + hitArea.x * wt.a) * sx + "px";
              div.style.top = (wt.ty + hitArea.y * wt.d) * sy + "px";
              div.style.width = hitArea.width * wt.a * sx + "px";
              div.style.height = hitArea.height * wt.d * sy + "px";
            } else {
              hitArea = child.getBounds();
              this.capHitArea(hitArea);
              div.style.left = hitArea.x * sx + "px";
              div.style.top = hitArea.y * sy + "px";
              div.style.width = hitArea.width * sx + "px";
              div.style.height = hitArea.height * sy + "px";
              if (div.title !== child.accessibleTitle && child.accessibleTitle !== null) {
                div.title = child.accessibleTitle;
              }
              if (div.getAttribute("aria-label") !== child.accessibleHint && child.accessibleHint !== null) {
                div.setAttribute("aria-label", child.accessibleHint);
              }
            }
          }
        }
        this.renderId++;
      };
      AccessibilityManager2.prototype.capHitArea = function capHitArea(hitArea) {
        if (hitArea.x < 0) {
          hitArea.width += hitArea.x;
          hitArea.x = 0;
        }
        if (hitArea.y < 0) {
          hitArea.height += hitArea.y;
          hitArea.y = 0;
        }
        if (hitArea.x + hitArea.width > this.renderer.width) {
          hitArea.width = this.renderer.width - hitArea.x;
        }
        if (hitArea.y + hitArea.height > this.renderer.height) {
          hitArea.height = this.renderer.height - hitArea.y;
        }
      };
      AccessibilityManager2.prototype.addChild = function addChild(displayObject) {
        var div = this.pool.pop();
        if (!div) {
          div = document.createElement("button");
          div.style.width = DIV_TOUCH_SIZE + "px";
          div.style.height = DIV_TOUCH_SIZE + "px";
          div.style.backgroundColor = this.debug ? "rgba(255,0,0,0.5)" : "transparent";
          div.style.position = "absolute";
          div.style.zIndex = DIV_TOUCH_ZINDEX;
          div.style.borderStyle = "none";
          if (navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
            div.setAttribute("aria-live", "off");
          } else {
            div.setAttribute("aria-live", "polite");
          }
          if (navigator.userAgent.match(/rv:.*Gecko\//)) {
            div.setAttribute("aria-relevant", "additions");
          } else {
            div.setAttribute("aria-relevant", "text");
          }
          div.addEventListener("click", this._onClick.bind(this));
          div.addEventListener("focus", this._onFocus.bind(this));
          div.addEventListener("focusout", this._onFocusOut.bind(this));
        }
        if (displayObject.accessibleTitle && displayObject.accessibleTitle !== null) {
          div.title = displayObject.accessibleTitle;
        } else if (!displayObject.accessibleHint || displayObject.accessibleHint === null) {
          div.title = "displayObject " + displayObject.tabIndex;
        }
        if (displayObject.accessibleHint && displayObject.accessibleHint !== null) {
          div.setAttribute("aria-label", displayObject.accessibleHint);
        }
        displayObject._accessibleActive = true;
        displayObject._accessibleDiv = div;
        div.displayObject = displayObject;
        this.children.push(displayObject);
        this.div.appendChild(displayObject._accessibleDiv);
        displayObject._accessibleDiv.tabIndex = displayObject.tabIndex;
      };
      AccessibilityManager2.prototype._onClick = function _onClick(e) {
        var interactionManager = this.renderer.plugins.interaction;
        interactionManager.dispatchEvent(e.target.displayObject, "click", interactionManager.eventData);
      };
      AccessibilityManager2.prototype._onFocus = function _onFocus(e) {
        if (!e.target.getAttribute("aria-live", "off")) {
          e.target.setAttribute("aria-live", "assertive");
        }
        var interactionManager = this.renderer.plugins.interaction;
        interactionManager.dispatchEvent(e.target.displayObject, "mouseover", interactionManager.eventData);
      };
      AccessibilityManager2.prototype._onFocusOut = function _onFocusOut(e) {
        if (!e.target.getAttribute("aria-live", "off")) {
          e.target.setAttribute("aria-live", "polite");
        }
        var interactionManager = this.renderer.plugins.interaction;
        interactionManager.dispatchEvent(e.target.displayObject, "mouseout", interactionManager.eventData);
      };
      AccessibilityManager2.prototype._onKeyDown = function _onKeyDown(e) {
        if (e.keyCode !== KEY_CODE_TAB) {
          return;
        }
        this.activate();
      };
      AccessibilityManager2.prototype._onMouseMove = function _onMouseMove(e) {
        if (e.movementX === 0 && e.movementY === 0) {
          return;
        }
        this.deactivate();
      };
      AccessibilityManager2.prototype.destroy = function destroy() {
        this.div = null;
        for (var i = 0; i < this.children.length; i++) {
          this.children[i].div = null;
        }
        window.document.removeEventListener("mousemove", this._onMouseMove, true);
        window.removeEventListener("keydown", this._onKeyDown);
        this.pool = null;
        this.children = null;
        this.renderer = null;
      };
      return AccessibilityManager2;
    }();
    exports.default = AccessibilityManager;
    core.WebGLRenderer.registerPlugin("accessibility", AccessibilityManager);
    core.CanvasRenderer.registerPlugin("accessibility", AccessibilityManager);
  }
});

// node_modules/pixi.js/lib/accessibility/index.js
var require_accessibility = __commonJS({
  "node_modules/pixi.js/lib/accessibility/index.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _accessibleTarget = require_accessibleTarget();
    Object.defineProperty(exports, "accessibleTarget", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_accessibleTarget).default;
      }
    });
    var _AccessibilityManager = require_AccessibilityManager();
    Object.defineProperty(exports, "AccessibilityManager", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_AccessibilityManager).default;
      }
    });
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
  }
});

// node_modules/pixi.js/lib/extract/webgl/WebGLExtract.js
var require_WebGLExtract = __commonJS({
  "node_modules/pixi.js/lib/extract/webgl/WebGLExtract.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _core = require_core();
    var core = _interopRequireWildcard(_core);
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var TEMP_RECT = new core.Rectangle();
    var BYTES_PER_PIXEL = 4;
    var WebGLExtract = function() {
      function WebGLExtract2(renderer) {
        _classCallCheck(this, WebGLExtract2);
        this.renderer = renderer;
        renderer.extract = this;
      }
      WebGLExtract2.prototype.image = function image(target) {
        var image2 = new Image();
        image2.src = this.base64(target);
        return image2;
      };
      WebGLExtract2.prototype.base64 = function base64(target) {
        return this.canvas(target).toDataURL();
      };
      WebGLExtract2.prototype.canvas = function canvas(target) {
        var renderer = this.renderer;
        var textureBuffer = void 0;
        var resolution = void 0;
        var frame = void 0;
        var flipY = false;
        var renderTexture = void 0;
        var generated = false;
        if (target) {
          if (target instanceof core.RenderTexture) {
            renderTexture = target;
          } else {
            renderTexture = this.renderer.generateTexture(target);
            generated = true;
          }
        }
        if (renderTexture) {
          textureBuffer = renderTexture.baseTexture._glRenderTargets[this.renderer.CONTEXT_UID];
          resolution = textureBuffer.resolution;
          frame = renderTexture.frame;
          flipY = false;
        } else {
          textureBuffer = this.renderer.rootRenderTarget;
          resolution = textureBuffer.resolution;
          flipY = true;
          frame = TEMP_RECT;
          frame.width = textureBuffer.size.width;
          frame.height = textureBuffer.size.height;
        }
        var width = Math.floor(frame.width * resolution + 1e-4);
        var height = Math.floor(frame.height * resolution + 1e-4);
        var canvasBuffer = new core.CanvasRenderTarget(width, height, 1);
        if (textureBuffer) {
          renderer.bindRenderTarget(textureBuffer);
          var webglPixels = new Uint8Array(BYTES_PER_PIXEL * width * height);
          var gl2 = renderer.gl;
          gl2.readPixels(frame.x * resolution, frame.y * resolution, width, height, gl2.RGBA, gl2.UNSIGNED_BYTE, webglPixels);
          var canvasData = canvasBuffer.context.getImageData(0, 0, width, height);
          canvasData.data.set(webglPixels);
          canvasBuffer.context.putImageData(canvasData, 0, 0);
          if (flipY) {
            canvasBuffer.context.scale(1, -1);
            canvasBuffer.context.drawImage(canvasBuffer.canvas, 0, -height);
          }
        }
        if (generated) {
          renderTexture.destroy(true);
        }
        return canvasBuffer.canvas;
      };
      WebGLExtract2.prototype.pixels = function pixels(target) {
        var renderer = this.renderer;
        var textureBuffer = void 0;
        var resolution = void 0;
        var frame = void 0;
        var renderTexture = void 0;
        var generated = false;
        if (target) {
          if (target instanceof core.RenderTexture) {
            renderTexture = target;
          } else {
            renderTexture = this.renderer.generateTexture(target);
            generated = true;
          }
        }
        if (renderTexture) {
          textureBuffer = renderTexture.baseTexture._glRenderTargets[this.renderer.CONTEXT_UID];
          resolution = textureBuffer.resolution;
          frame = renderTexture.frame;
        } else {
          textureBuffer = this.renderer.rootRenderTarget;
          resolution = textureBuffer.resolution;
          frame = TEMP_RECT;
          frame.width = textureBuffer.size.width;
          frame.height = textureBuffer.size.height;
        }
        var width = frame.width * resolution;
        var height = frame.height * resolution;
        var webglPixels = new Uint8Array(BYTES_PER_PIXEL * width * height);
        if (textureBuffer) {
          renderer.bindRenderTarget(textureBuffer);
          var gl2 = renderer.gl;
          gl2.readPixels(frame.x * resolution, frame.y * resolution, width, height, gl2.RGBA, gl2.UNSIGNED_BYTE, webglPixels);
        }
        if (generated) {
          renderTexture.destroy(true);
        }
        return webglPixels;
      };
      WebGLExtract2.prototype.destroy = function destroy() {
        this.renderer.extract = null;
        this.renderer = null;
      };
      return WebGLExtract2;
    }();
    exports.default = WebGLExtract;
    core.WebGLRenderer.registerPlugin("extract", WebGLExtract);
  }
});

// node_modules/pixi.js/lib/extract/canvas/CanvasExtract.js
var require_CanvasExtract = __commonJS({
  "node_modules/pixi.js/lib/extract/canvas/CanvasExtract.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _core = require_core();
    var core = _interopRequireWildcard(_core);
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var TEMP_RECT = new core.Rectangle();
    var CanvasExtract = function() {
      function CanvasExtract2(renderer) {
        _classCallCheck(this, CanvasExtract2);
        this.renderer = renderer;
        renderer.extract = this;
      }
      CanvasExtract2.prototype.image = function image(target) {
        var image2 = new Image();
        image2.src = this.base64(target);
        return image2;
      };
      CanvasExtract2.prototype.base64 = function base64(target) {
        return this.canvas(target).toDataURL();
      };
      CanvasExtract2.prototype.canvas = function canvas(target) {
        var renderer = this.renderer;
        var context = void 0;
        var resolution = void 0;
        var frame = void 0;
        var renderTexture = void 0;
        if (target) {
          if (target instanceof core.RenderTexture) {
            renderTexture = target;
          } else {
            renderTexture = renderer.generateTexture(target);
          }
        }
        if (renderTexture) {
          context = renderTexture.baseTexture._canvasRenderTarget.context;
          resolution = renderTexture.baseTexture._canvasRenderTarget.resolution;
          frame = renderTexture.frame;
        } else {
          context = renderer.rootContext;
          resolution = renderer.resolution;
          frame = TEMP_RECT;
          frame.width = this.renderer.width;
          frame.height = this.renderer.height;
        }
        var width = Math.floor(frame.width * resolution + 1e-4);
        var height = Math.floor(frame.height * resolution + 1e-4);
        var canvasBuffer = new core.CanvasRenderTarget(width, height, 1);
        var canvasData = context.getImageData(frame.x * resolution, frame.y * resolution, width, height);
        canvasBuffer.context.putImageData(canvasData, 0, 0);
        return canvasBuffer.canvas;
      };
      CanvasExtract2.prototype.pixels = function pixels(target) {
        var renderer = this.renderer;
        var context = void 0;
        var resolution = void 0;
        var frame = void 0;
        var renderTexture = void 0;
        if (target) {
          if (target instanceof core.RenderTexture) {
            renderTexture = target;
          } else {
            renderTexture = renderer.generateTexture(target);
          }
        }
        if (renderTexture) {
          context = renderTexture.baseTexture._canvasRenderTarget.context;
          resolution = renderTexture.baseTexture._canvasRenderTarget.resolution;
          frame = renderTexture.frame;
        } else {
          context = renderer.rootContext;
          frame = TEMP_RECT;
          frame.width = renderer.width;
          frame.height = renderer.height;
        }
        return context.getImageData(0, 0, frame.width * resolution, frame.height * resolution).data;
      };
      CanvasExtract2.prototype.destroy = function destroy() {
        this.renderer.extract = null;
        this.renderer = null;
      };
      return CanvasExtract2;
    }();
    exports.default = CanvasExtract;
    core.CanvasRenderer.registerPlugin("extract", CanvasExtract);
  }
});

// node_modules/pixi.js/lib/extract/index.js
var require_extract = __commonJS({
  "node_modules/pixi.js/lib/extract/index.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _WebGLExtract = require_WebGLExtract();
    Object.defineProperty(exports, "webgl", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_WebGLExtract).default;
      }
    });
    var _CanvasExtract = require_CanvasExtract();
    Object.defineProperty(exports, "canvas", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_CanvasExtract).default;
      }
    });
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
  }
});

// node_modules/pixi.js/lib/extras/AnimatedSprite.js
var require_AnimatedSprite = __commonJS({
  "node_modules/pixi.js/lib/extras/AnimatedSprite.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _core = require_core();
    var core = _interopRequireWildcard(_core);
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var AnimatedSprite = function(_core$Sprite) {
      _inherits(AnimatedSprite2, _core$Sprite);
      function AnimatedSprite2(textures, autoUpdate) {
        _classCallCheck(this, AnimatedSprite2);
        var _this = _possibleConstructorReturn(this, _core$Sprite.call(this, textures[0] instanceof core.Texture ? textures[0] : textures[0].texture));
        _this._textures = null;
        _this._durations = null;
        _this.textures = textures;
        _this._autoUpdate = autoUpdate !== false;
        _this.animationSpeed = 1;
        _this.loop = true;
        _this.updateAnchor = false;
        _this.onComplete = null;
        _this.onFrameChange = null;
        _this.onLoop = null;
        _this._currentTime = 0;
        _this.playing = false;
        return _this;
      }
      AnimatedSprite2.prototype.stop = function stop() {
        if (!this.playing) {
          return;
        }
        this.playing = false;
        if (this._autoUpdate) {
          core.ticker.shared.remove(this.update, this);
        }
      };
      AnimatedSprite2.prototype.play = function play() {
        if (this.playing) {
          return;
        }
        this.playing = true;
        if (this._autoUpdate) {
          core.ticker.shared.add(this.update, this, core.UPDATE_PRIORITY.HIGH);
        }
      };
      AnimatedSprite2.prototype.gotoAndStop = function gotoAndStop(frameNumber) {
        this.stop();
        var previousFrame = this.currentFrame;
        this._currentTime = frameNumber;
        if (previousFrame !== this.currentFrame) {
          this.updateTexture();
        }
      };
      AnimatedSprite2.prototype.gotoAndPlay = function gotoAndPlay(frameNumber) {
        var previousFrame = this.currentFrame;
        this._currentTime = frameNumber;
        if (previousFrame !== this.currentFrame) {
          this.updateTexture();
        }
        this.play();
      };
      AnimatedSprite2.prototype.update = function update(deltaTime) {
        var elapsed = this.animationSpeed * deltaTime;
        var previousFrame = this.currentFrame;
        if (this._durations !== null) {
          var lag = this._currentTime % 1 * this._durations[this.currentFrame];
          lag += elapsed / 60 * 1e3;
          while (lag < 0) {
            this._currentTime--;
            lag += this._durations[this.currentFrame];
          }
          var sign = Math.sign(this.animationSpeed * deltaTime);
          this._currentTime = Math.floor(this._currentTime);
          while (lag >= this._durations[this.currentFrame]) {
            lag -= this._durations[this.currentFrame] * sign;
            this._currentTime += sign;
          }
          this._currentTime += lag / this._durations[this.currentFrame];
        } else {
          this._currentTime += elapsed;
        }
        if (this._currentTime < 0 && !this.loop) {
          this.gotoAndStop(0);
          if (this.onComplete) {
            this.onComplete();
          }
        } else if (this._currentTime >= this._textures.length && !this.loop) {
          this.gotoAndStop(this._textures.length - 1);
          if (this.onComplete) {
            this.onComplete();
          }
        } else if (previousFrame !== this.currentFrame) {
          if (this.loop && this.onLoop) {
            if (this.animationSpeed > 0 && this.currentFrame < previousFrame) {
              this.onLoop();
            } else if (this.animationSpeed < 0 && this.currentFrame > previousFrame) {
              this.onLoop();
            }
          }
          this.updateTexture();
        }
      };
      AnimatedSprite2.prototype.updateTexture = function updateTexture() {
        this._texture = this._textures[this.currentFrame];
        this._textureID = -1;
        this.cachedTint = 16777215;
        if (this.updateAnchor) {
          this._anchor.copy(this._texture.defaultAnchor);
        }
        if (this.onFrameChange) {
          this.onFrameChange(this.currentFrame);
        }
      };
      AnimatedSprite2.prototype.destroy = function destroy(options) {
        this.stop();
        _core$Sprite.prototype.destroy.call(this, options);
      };
      AnimatedSprite2.fromFrames = function fromFrames(frames) {
        var textures = [];
        for (var i = 0; i < frames.length; ++i) {
          textures.push(core.Texture.fromFrame(frames[i]));
        }
        return new AnimatedSprite2(textures);
      };
      AnimatedSprite2.fromImages = function fromImages(images) {
        var textures = [];
        for (var i = 0; i < images.length; ++i) {
          textures.push(core.Texture.fromImage(images[i]));
        }
        return new AnimatedSprite2(textures);
      };
      _createClass(AnimatedSprite2, [{
        key: "totalFrames",
        get: function get() {
          return this._textures.length;
        }
        /**
         * The array of textures used for this AnimatedSprite
         *
         * @member {PIXI.Texture[]}
         */
      }, {
        key: "textures",
        get: function get() {
          return this._textures;
        },
        set: function set(value) {
          if (value[0] instanceof core.Texture) {
            this._textures = value;
            this._durations = null;
          } else {
            this._textures = [];
            this._durations = [];
            for (var i = 0; i < value.length; i++) {
              this._textures.push(value[i].texture);
              this._durations.push(value[i].time);
            }
          }
          this.gotoAndStop(0);
          this.updateTexture();
        }
        /**
        * The AnimatedSprites current frame index
        *
        * @member {number}
        * @readonly
        */
      }, {
        key: "currentFrame",
        get: function get() {
          var currentFrame = Math.floor(this._currentTime) % this._textures.length;
          if (currentFrame < 0) {
            currentFrame += this._textures.length;
          }
          return currentFrame;
        }
      }]);
      return AnimatedSprite2;
    }(core.Sprite);
    exports.default = AnimatedSprite;
  }
});

// node_modules/pixi.js/lib/extras/TilingSprite.js
var require_TilingSprite = __commonJS({
  "node_modules/pixi.js/lib/extras/TilingSprite.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _core = require_core();
    var core = _interopRequireWildcard(_core);
    var _CanvasTinter = require_CanvasTinter();
    var _CanvasTinter2 = _interopRequireDefault(_CanvasTinter);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var tempPoint = new core.Point();
    var TilingSprite = function(_core$Sprite) {
      _inherits(TilingSprite2, _core$Sprite);
      function TilingSprite2(texture) {
        var width = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
        var height = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 100;
        _classCallCheck(this, TilingSprite2);
        var _this = _possibleConstructorReturn(this, _core$Sprite.call(this, texture));
        _this.tileTransform = new core.TransformStatic();
        _this._width = width;
        _this._height = height;
        _this._canvasPattern = null;
        _this.uvTransform = texture.transform || new core.TextureMatrix(texture);
        _this.pluginName = "tilingSprite";
        _this.uvRespectAnchor = false;
        return _this;
      }
      TilingSprite2.prototype._onTextureUpdate = function _onTextureUpdate() {
        if (this.uvTransform) {
          this.uvTransform.texture = this._texture;
        }
        this.cachedTint = 16777215;
      };
      TilingSprite2.prototype._renderWebGL = function _renderWebGL(renderer) {
        var texture = this._texture;
        if (!texture || !texture.valid) {
          return;
        }
        this.tileTransform.updateLocalTransform();
        this.uvTransform.update();
        renderer.setObjectRenderer(renderer.plugins[this.pluginName]);
        renderer.plugins[this.pluginName].render(this);
      };
      TilingSprite2.prototype._renderCanvas = function _renderCanvas(renderer) {
        var texture = this._texture;
        if (!texture.baseTexture.hasLoaded) {
          return;
        }
        var context = renderer.context;
        var transform = this.worldTransform;
        var resolution = renderer.resolution;
        var isTextureRotated = texture.rotate === 2;
        var baseTexture = texture.baseTexture;
        var baseTextureResolution = baseTexture.resolution;
        var modX = this.tilePosition.x / this.tileScale.x % texture.orig.width * baseTextureResolution;
        var modY = this.tilePosition.y / this.tileScale.y % texture.orig.height * baseTextureResolution;
        if (this._textureID !== this._texture._updateID || this.cachedTint !== this.tint) {
          this._textureID = this._texture._updateID;
          var tempCanvas = new core.CanvasRenderTarget(texture.orig.width, texture.orig.height, baseTextureResolution);
          if (this.tint !== 16777215) {
            this.tintedTexture = _CanvasTinter2.default.getTintedTexture(this, this.tint);
            tempCanvas.context.drawImage(this.tintedTexture, 0, 0);
          } else {
            var sx = texture._frame.x * baseTextureResolution;
            var sy = texture._frame.y * baseTextureResolution;
            var sWidth = texture._frame.width * baseTextureResolution;
            var sHeight = texture._frame.height * baseTextureResolution;
            var dWidth = (texture.trim ? texture.trim.width : texture.orig.width) * baseTextureResolution;
            var dHeight = (texture.trim ? texture.trim.height : texture.orig.height) * baseTextureResolution;
            var dx = (texture.trim ? texture.trim.x : 0) * baseTextureResolution;
            var dy = (texture.trim ? texture.trim.y : 0) * baseTextureResolution;
            if (isTextureRotated) {
              tempCanvas.context.rotate(-Math.PI / 2);
              tempCanvas.context.translate(-dHeight, 0);
              tempCanvas.context.drawImage(baseTexture.source, sx, sy, sWidth, sHeight, -dy, dx, dHeight, dWidth);
            } else {
              tempCanvas.context.drawImage(baseTexture.source, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
            }
          }
          this.cachedTint = this.tint;
          this._canvasPattern = tempCanvas.context.createPattern(tempCanvas.canvas, "repeat");
        }
        context.globalAlpha = this.worldAlpha;
        context.setTransform(transform.a * resolution, transform.b * resolution, transform.c * resolution, transform.d * resolution, transform.tx * resolution, transform.ty * resolution);
        renderer.setBlendMode(this.blendMode);
        context.fillStyle = this._canvasPattern;
        context.scale(this.tileScale.x / baseTextureResolution, this.tileScale.y / baseTextureResolution);
        var anchorX = this.anchor.x * -this._width * baseTextureResolution;
        var anchorY = this.anchor.y * -this._height * baseTextureResolution;
        if (this.uvRespectAnchor) {
          context.translate(modX, modY);
          context.fillRect(-modX + anchorX, -modY + anchorY, this._width / this.tileScale.x * baseTextureResolution, this._height / this.tileScale.y * baseTextureResolution);
        } else {
          context.translate(modX + anchorX, modY + anchorY);
          context.fillRect(-modX, -modY, this._width / this.tileScale.x * baseTextureResolution, this._height / this.tileScale.y * baseTextureResolution);
        }
      };
      TilingSprite2.prototype._calculateBounds = function _calculateBounds() {
        var minX = this._width * -this._anchor._x;
        var minY = this._height * -this._anchor._y;
        var maxX = this._width * (1 - this._anchor._x);
        var maxY = this._height * (1 - this._anchor._y);
        this._bounds.addFrame(this.transform, minX, minY, maxX, maxY);
      };
      TilingSprite2.prototype.getLocalBounds = function getLocalBounds(rect) {
        if (this.children.length === 0) {
          this._bounds.minX = this._width * -this._anchor._x;
          this._bounds.minY = this._height * -this._anchor._y;
          this._bounds.maxX = this._width * (1 - this._anchor._x);
          this._bounds.maxY = this._height * (1 - this._anchor._y);
          if (!rect) {
            if (!this._localBoundsRect) {
              this._localBoundsRect = new core.Rectangle();
            }
            rect = this._localBoundsRect;
          }
          return this._bounds.getRectangle(rect);
        }
        return _core$Sprite.prototype.getLocalBounds.call(this, rect);
      };
      TilingSprite2.prototype.containsPoint = function containsPoint(point) {
        this.worldTransform.applyInverse(point, tempPoint);
        var width = this._width;
        var height = this._height;
        var x1 = -width * this.anchor._x;
        if (tempPoint.x >= x1 && tempPoint.x < x1 + width) {
          var y1 = -height * this.anchor._y;
          if (tempPoint.y >= y1 && tempPoint.y < y1 + height) {
            return true;
          }
        }
        return false;
      };
      TilingSprite2.prototype.destroy = function destroy(options) {
        _core$Sprite.prototype.destroy.call(this, options);
        this.tileTransform = null;
        this.uvTransform = null;
      };
      TilingSprite2.from = function from(source, width, height) {
        return new TilingSprite2(core.Texture.from(source), width, height);
      };
      TilingSprite2.fromFrame = function fromFrame(frameId, width, height) {
        var texture = core.utils.TextureCache[frameId];
        if (!texture) {
          throw new Error('The frameId "' + frameId + '" does not exist in the texture cache ' + this);
        }
        return new TilingSprite2(texture, width, height);
      };
      TilingSprite2.fromImage = function fromImage(imageId, width, height, crossorigin, scaleMode) {
        return new TilingSprite2(core.Texture.fromImage(imageId, crossorigin, scaleMode), width, height);
      };
      _createClass(TilingSprite2, [{
        key: "clampMargin",
        get: function get() {
          return this.uvTransform.clampMargin;
        },
        set: function set(value) {
          this.uvTransform.clampMargin = value;
          this.uvTransform.update(true);
        }
        /**
         * The scaling of the image that is being tiled
         *
         * @member {PIXI.ObservablePoint}
         */
      }, {
        key: "tileScale",
        get: function get() {
          return this.tileTransform.scale;
        },
        set: function set(value) {
          this.tileTransform.scale.copy(value);
        }
        /**
         * The offset of the image that is being tiled
         *
         * @member {PIXI.ObservablePoint}
         */
      }, {
        key: "tilePosition",
        get: function get() {
          return this.tileTransform.position;
        },
        set: function set(value) {
          this.tileTransform.position.copy(value);
        }
      }, {
        key: "width",
        get: function get() {
          return this._width;
        },
        set: function set(value) {
          this._width = value;
        }
        /**
         * The height of the TilingSprite, setting this will actually modify the scale to achieve the value set
         *
         * @member {number}
         */
      }, {
        key: "height",
        get: function get() {
          return this._height;
        },
        set: function set(value) {
          this._height = value;
        }
      }]);
      return TilingSprite2;
    }(core.Sprite);
    exports.default = TilingSprite;
  }
});

// node_modules/pixi.js/lib/extras/webgl/TilingSpriteRenderer.js
var require_TilingSpriteRenderer = __commonJS({
  "node_modules/pixi.js/lib/extras/webgl/TilingSpriteRenderer.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _core = require_core();
    var core = _interopRequireWildcard(_core);
    var _const = require_const();
    var _path = require_path();
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var tempMat = new core.Matrix();
    var TilingSpriteRenderer = function(_core$ObjectRenderer) {
      _inherits(TilingSpriteRenderer2, _core$ObjectRenderer);
      function TilingSpriteRenderer2(renderer) {
        _classCallCheck(this, TilingSpriteRenderer2);
        var _this = _possibleConstructorReturn(this, _core$ObjectRenderer.call(this, renderer));
        _this.shader = null;
        _this.simpleShader = null;
        _this.quad = null;
        return _this;
      }
      TilingSpriteRenderer2.prototype.onContextChange = function onContextChange() {
        var gl2 = this.renderer.gl;
        this.shader = new core.Shader(gl2, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\n}\n", "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\nuniform mat3 uMapCoord;\nuniform vec4 uClampFrame;\nuniform vec2 uClampOffset;\n\nvoid main(void)\n{\n    vec2 coord = mod(vTextureCoord - uClampOffset, vec2(1.0, 1.0)) + uClampOffset;\n    coord = (uMapCoord * vec3(coord, 1.0)).xy;\n    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);\n\n    vec4 sample = texture2D(uSampler, coord);\n    gl_FragColor = sample * uColor;\n}\n");
        this.simpleShader = new core.Shader(gl2, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\n}\n", "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\n\nvoid main(void)\n{\n    vec4 sample = texture2D(uSampler, vTextureCoord);\n    gl_FragColor = sample * uColor;\n}\n");
        this.renderer.bindVao(null);
        this.quad = new core.Quad(gl2, this.renderer.state.attribState);
        this.quad.initVao(this.shader);
      };
      TilingSpriteRenderer2.prototype.render = function render(ts) {
        var renderer = this.renderer;
        var quad = this.quad;
        renderer.bindVao(quad.vao);
        var vertices = quad.vertices;
        vertices[0] = vertices[6] = ts._width * -ts.anchor.x;
        vertices[1] = vertices[3] = ts._height * -ts.anchor.y;
        vertices[2] = vertices[4] = ts._width * (1 - ts.anchor.x);
        vertices[5] = vertices[7] = ts._height * (1 - ts.anchor.y);
        if (ts.uvRespectAnchor) {
          vertices = quad.uvs;
          vertices[0] = vertices[6] = -ts.anchor.x;
          vertices[1] = vertices[3] = -ts.anchor.y;
          vertices[2] = vertices[4] = 1 - ts.anchor.x;
          vertices[5] = vertices[7] = 1 - ts.anchor.y;
        }
        quad.upload();
        var tex = ts._texture;
        var baseTex = tex.baseTexture;
        var lt = ts.tileTransform.localTransform;
        var uv = ts.uvTransform;
        var isSimple = baseTex.isPowerOfTwo && tex.frame.width === baseTex.width && tex.frame.height === baseTex.height;
        if (isSimple) {
          if (!baseTex._glTextures[renderer.CONTEXT_UID]) {
            if (baseTex.wrapMode === _const.WRAP_MODES.CLAMP) {
              baseTex.wrapMode = _const.WRAP_MODES.REPEAT;
            }
          } else {
            isSimple = baseTex.wrapMode !== _const.WRAP_MODES.CLAMP;
          }
        }
        var shader = isSimple ? this.simpleShader : this.shader;
        renderer.bindShader(shader);
        var w = tex.width;
        var h = tex.height;
        var W = ts._width;
        var H = ts._height;
        tempMat.set(lt.a * w / W, lt.b * w / H, lt.c * h / W, lt.d * h / H, lt.tx / W, lt.ty / H);
        tempMat.invert();
        if (isSimple) {
          tempMat.prepend(uv.mapCoord);
        } else {
          shader.uniforms.uMapCoord = uv.mapCoord.toArray(true);
          shader.uniforms.uClampFrame = uv.uClampFrame;
          shader.uniforms.uClampOffset = uv.uClampOffset;
        }
        shader.uniforms.uTransform = tempMat.toArray(true);
        shader.uniforms.uColor = core.utils.premultiplyTintToRgba(ts.tint, ts.worldAlpha, shader.uniforms.uColor, baseTex.premultipliedAlpha);
        shader.uniforms.translationMatrix = ts.transform.worldTransform.toArray(true);
        shader.uniforms.uSampler = renderer.bindTexture(tex);
        renderer.setBlendMode(core.utils.correctBlendMode(ts.blendMode, baseTex.premultipliedAlpha));
        quad.vao.draw(this.renderer.gl.TRIANGLES, 6, 0);
      };
      return TilingSpriteRenderer2;
    }(core.ObjectRenderer);
    exports.default = TilingSpriteRenderer;
    core.WebGLRenderer.registerPlugin("tilingSprite", TilingSpriteRenderer);
  }
});

// node_modules/pixi.js/lib/extras/BitmapText.js
var require_BitmapText = __commonJS({
  "node_modules/pixi.js/lib/extras/BitmapText.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _core = require_core();
    var core = _interopRequireWildcard(_core);
    var _ObservablePoint = require_ObservablePoint();
    var _ObservablePoint2 = _interopRequireDefault(_ObservablePoint);
    var _utils = require_utils();
    var _settings = require_settings();
    var _settings2 = _interopRequireDefault(_settings);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var BitmapText = function(_core$Container) {
      _inherits(BitmapText2, _core$Container);
      function BitmapText2(text) {
        var style = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        _classCallCheck(this, BitmapText2);
        var _this = _possibleConstructorReturn(this, _core$Container.call(this));
        _this._textWidth = 0;
        _this._textHeight = 0;
        _this._glyphs = [];
        _this._font = {
          tint: style.tint !== void 0 ? style.tint : 16777215,
          align: style.align || "left",
          name: null,
          size: 0
        };
        _this.font = style.font;
        _this._text = text;
        _this._maxWidth = 0;
        _this._maxLineHeight = 0;
        _this._letterSpacing = 0;
        _this._anchor = new _ObservablePoint2.default(function() {
          _this.dirty = true;
        }, _this, 0, 0);
        _this.dirty = false;
        _this.updateText();
        return _this;
      }
      BitmapText2.prototype.updateText = function updateText() {
        var data = BitmapText2.fonts[this._font.name];
        var scale = this._font.size / data.size;
        var pos = new core.Point();
        var chars = [];
        var lineWidths = [];
        var text = this.text.replace(/(?:\r\n|\r)/g, "\n");
        var textLength = text.length;
        var maxWidth = this._maxWidth * data.size / this._font.size;
        var prevCharCode = null;
        var lastLineWidth = 0;
        var maxLineWidth = 0;
        var line = 0;
        var lastBreakPos = -1;
        var lastBreakWidth = 0;
        var spacesRemoved = 0;
        var maxLineHeight = 0;
        for (var i = 0; i < textLength; i++) {
          var charCode = text.charCodeAt(i);
          var char = text.charAt(i);
          if (/(?:\s)/.test(char)) {
            lastBreakPos = i;
            lastBreakWidth = lastLineWidth;
          }
          if (char === "\r" || char === "\n") {
            lineWidths.push(lastLineWidth);
            maxLineWidth = Math.max(maxLineWidth, lastLineWidth);
            ++line;
            ++spacesRemoved;
            pos.x = 0;
            pos.y += data.lineHeight;
            prevCharCode = null;
            continue;
          }
          var charData = data.chars[charCode];
          if (!charData) {
            continue;
          }
          if (prevCharCode && charData.kerning[prevCharCode]) {
            pos.x += charData.kerning[prevCharCode];
          }
          chars.push({
            texture: charData.texture,
            line,
            charCode,
            position: new core.Point(pos.x + charData.xOffset + this._letterSpacing / 2, pos.y + charData.yOffset)
          });
          pos.x += charData.xAdvance + this._letterSpacing;
          lastLineWidth = pos.x;
          maxLineHeight = Math.max(maxLineHeight, charData.yOffset + charData.texture.height);
          prevCharCode = charCode;
          if (lastBreakPos !== -1 && maxWidth > 0 && pos.x > maxWidth) {
            ++spacesRemoved;
            core.utils.removeItems(chars, 1 + lastBreakPos - spacesRemoved, 1 + i - lastBreakPos);
            i = lastBreakPos;
            lastBreakPos = -1;
            lineWidths.push(lastBreakWidth);
            maxLineWidth = Math.max(maxLineWidth, lastBreakWidth);
            line++;
            pos.x = 0;
            pos.y += data.lineHeight;
            prevCharCode = null;
          }
        }
        var lastChar = text.charAt(text.length - 1);
        if (lastChar !== "\r" && lastChar !== "\n") {
          if (/(?:\s)/.test(lastChar)) {
            lastLineWidth = lastBreakWidth;
          }
          lineWidths.push(lastLineWidth);
          maxLineWidth = Math.max(maxLineWidth, lastLineWidth);
        }
        var lineAlignOffsets = [];
        for (var _i = 0; _i <= line; _i++) {
          var alignOffset = 0;
          if (this._font.align === "right") {
            alignOffset = maxLineWidth - lineWidths[_i];
          } else if (this._font.align === "center") {
            alignOffset = (maxLineWidth - lineWidths[_i]) / 2;
          }
          lineAlignOffsets.push(alignOffset);
        }
        var lenChars = chars.length;
        var tint = this.tint;
        for (var _i2 = 0; _i2 < lenChars; _i2++) {
          var c = this._glyphs[_i2];
          if (c) {
            c.texture = chars[_i2].texture;
          } else {
            c = new core.Sprite(chars[_i2].texture);
            this._glyphs.push(c);
          }
          c.position.x = (chars[_i2].position.x + lineAlignOffsets[chars[_i2].line]) * scale;
          c.position.y = chars[_i2].position.y * scale;
          c.scale.x = c.scale.y = scale;
          c.tint = tint;
          if (!c.parent) {
            this.addChild(c);
          }
        }
        for (var _i3 = lenChars; _i3 < this._glyphs.length; ++_i3) {
          this.removeChild(this._glyphs[_i3]);
        }
        this._textWidth = maxLineWidth * scale;
        this._textHeight = (pos.y + data.lineHeight) * scale;
        if (this.anchor.x !== 0 || this.anchor.y !== 0) {
          for (var _i4 = 0; _i4 < lenChars; _i4++) {
            this._glyphs[_i4].x -= this._textWidth * this.anchor.x;
            this._glyphs[_i4].y -= this._textHeight * this.anchor.y;
          }
        }
        this._maxLineHeight = maxLineHeight * scale;
      };
      BitmapText2.prototype.updateTransform = function updateTransform() {
        this.validate();
        this.containerUpdateTransform();
      };
      BitmapText2.prototype.getLocalBounds = function getLocalBounds() {
        this.validate();
        return _core$Container.prototype.getLocalBounds.call(this);
      };
      BitmapText2.prototype.validate = function validate() {
        if (this.dirty) {
          this.updateText();
          this.dirty = false;
        }
      };
      BitmapText2.registerFont = function registerFont(xml, textures) {
        var data = {};
        var info = xml.getElementsByTagName("info")[0];
        var common = xml.getElementsByTagName("common")[0];
        var pages = xml.getElementsByTagName("page");
        var res = (0, _utils.getResolutionOfUrl)(pages[0].getAttribute("file"), _settings2.default.RESOLUTION);
        var pagesTextures = {};
        data.font = info.getAttribute("face");
        data.size = parseInt(info.getAttribute("size"), 10);
        data.lineHeight = parseInt(common.getAttribute("lineHeight"), 10) / res;
        data.chars = {};
        if (textures instanceof core.Texture) {
          textures = [textures];
        }
        for (var i = 0; i < pages.length; i++) {
          var id = pages[i].getAttribute("id");
          var file = pages[i].getAttribute("file");
          pagesTextures[id] = textures instanceof Array ? textures[i] : textures[file];
        }
        var letters = xml.getElementsByTagName("char");
        for (var _i5 = 0; _i5 < letters.length; _i5++) {
          var letter = letters[_i5];
          var charCode = parseInt(letter.getAttribute("id"), 10);
          var page = letter.getAttribute("page") || 0;
          var textureRect = new core.Rectangle(parseInt(letter.getAttribute("x"), 10) / res + pagesTextures[page].frame.x / res, parseInt(letter.getAttribute("y"), 10) / res + pagesTextures[page].frame.y / res, parseInt(letter.getAttribute("width"), 10) / res, parseInt(letter.getAttribute("height"), 10) / res);
          data.chars[charCode] = {
            xOffset: parseInt(letter.getAttribute("xoffset"), 10) / res,
            yOffset: parseInt(letter.getAttribute("yoffset"), 10) / res,
            xAdvance: parseInt(letter.getAttribute("xadvance"), 10) / res,
            kerning: {},
            texture: new core.Texture(pagesTextures[page].baseTexture, textureRect),
            page
          };
        }
        var kernings = xml.getElementsByTagName("kerning");
        for (var _i6 = 0; _i6 < kernings.length; _i6++) {
          var kerning = kernings[_i6];
          var first = parseInt(kerning.getAttribute("first"), 10) / res;
          var second = parseInt(kerning.getAttribute("second"), 10) / res;
          var amount = parseInt(kerning.getAttribute("amount"), 10) / res;
          if (data.chars[second]) {
            data.chars[second].kerning[first] = amount;
          }
        }
        BitmapText2.fonts[data.font] = data;
        return data;
      };
      _createClass(BitmapText2, [{
        key: "tint",
        get: function get() {
          return this._font.tint;
        },
        set: function set(value) {
          this._font.tint = typeof value === "number" && value >= 0 ? value : 16777215;
          this.dirty = true;
        }
        /**
         * The alignment of the BitmapText object
         *
         * @member {string}
         * @default 'left'
         */
      }, {
        key: "align",
        get: function get() {
          return this._font.align;
        },
        set: function set(value) {
          this._font.align = value || "left";
          this.dirty = true;
        }
        /**
         * The anchor sets the origin point of the text.
         * The default is 0,0 this means the text's origin is the top left
         * Setting the anchor to 0.5,0.5 means the text's origin is centered
         * Setting the anchor to 1,1 would mean the text's origin point will be the bottom right corner
         *
         * @member {PIXI.Point | number}
         */
      }, {
        key: "anchor",
        get: function get() {
          return this._anchor;
        },
        set: function set(value) {
          if (typeof value === "number") {
            this._anchor.set(value);
          } else {
            this._anchor.copy(value);
          }
        }
        /**
         * The font descriptor of the BitmapText object
         *
         * @member {string|object}
         */
      }, {
        key: "font",
        get: function get() {
          return this._font;
        },
        set: function set(value) {
          if (!value) {
            return;
          }
          if (typeof value === "string") {
            value = value.split(" ");
            this._font.name = value.length === 1 ? value[0] : value.slice(1).join(" ");
            this._font.size = value.length >= 2 ? parseInt(value[0], 10) : BitmapText2.fonts[this._font.name].size;
          } else {
            this._font.name = value.name;
            this._font.size = typeof value.size === "number" ? value.size : parseInt(value.size, 10);
          }
          this.dirty = true;
        }
        /**
         * The text of the BitmapText object
         *
         * @member {string}
         */
      }, {
        key: "text",
        get: function get() {
          return this._text;
        },
        set: function set(value) {
          value = value.toString() || " ";
          if (this._text === value) {
            return;
          }
          this._text = value;
          this.dirty = true;
        }
        /**
         * The max width of this bitmap text in pixels. If the text provided is longer than the
         * value provided, line breaks will be automatically inserted in the last whitespace.
         * Disable by setting value to 0
         *
         * @member {number}
         */
      }, {
        key: "maxWidth",
        get: function get() {
          return this._maxWidth;
        },
        set: function set(value) {
          if (this._maxWidth === value) {
            return;
          }
          this._maxWidth = value;
          this.dirty = true;
        }
        /**
         * The max line height. This is useful when trying to use the total height of the Text,
         * ie: when trying to vertically align.
         *
         * @member {number}
         * @readonly
         */
      }, {
        key: "maxLineHeight",
        get: function get() {
          this.validate();
          return this._maxLineHeight;
        }
        /**
         * The width of the overall text, different from fontSize,
         * which is defined in the style object
         *
         * @member {number}
         * @readonly
         */
      }, {
        key: "textWidth",
        get: function get() {
          this.validate();
          return this._textWidth;
        }
        /**
         * Additional space between characters.
         *
         * @member {number}
         */
      }, {
        key: "letterSpacing",
        get: function get() {
          return this._letterSpacing;
        },
        set: function set(value) {
          if (this._letterSpacing !== value) {
            this._letterSpacing = value;
            this.dirty = true;
          }
        }
        /**
         * The height of the overall text, different from fontSize,
         * which is defined in the style object
         *
         * @member {number}
         * @readonly
         */
      }, {
        key: "textHeight",
        get: function get() {
          this.validate();
          return this._textHeight;
        }
      }]);
      return BitmapText2;
    }(core.Container);
    exports.default = BitmapText;
    BitmapText.fonts = {};
  }
});

// node_modules/pixi.js/lib/extras/cacheAsBitmap.js
var require_cacheAsBitmap = __commonJS({
  "node_modules/pixi.js/lib/extras/cacheAsBitmap.js"() {
    "use strict";
    var _core = require_core();
    var core = _interopRequireWildcard(_core);
    var _Texture = require_Texture();
    var _Texture2 = _interopRequireDefault(_Texture);
    var _BaseTexture = require_BaseTexture();
    var _BaseTexture2 = _interopRequireDefault(_BaseTexture);
    var _utils = require_utils();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var DisplayObject = core.DisplayObject;
    var _tempMatrix = new core.Matrix();
    DisplayObject.prototype._cacheAsBitmap = false;
    DisplayObject.prototype._cacheData = false;
    var CacheData = (
      /**
       *
       */
      function CacheData2() {
        _classCallCheck(this, CacheData2);
        this.textureCacheId = null;
        this.originalRenderWebGL = null;
        this.originalRenderCanvas = null;
        this.originalCalculateBounds = null;
        this.originalGetLocalBounds = null;
        this.originalUpdateTransform = null;
        this.originalHitTest = null;
        this.originalDestroy = null;
        this.originalMask = null;
        this.originalFilterArea = null;
        this.sprite = null;
      }
    );
    Object.defineProperties(DisplayObject.prototype, {
      /**
       * Set this to true if you want this display object to be cached as a bitmap.
       * This basically takes a snap shot of the display object as it is at that moment. It can
       * provide a performance benefit for complex static displayObjects.
       * To remove simply set this property to 'false'
       *
       * IMPORTANT GOTCHA - make sure that all your textures are preloaded BEFORE setting this property to true
       * as it will take a snapshot of what is currently there. If the textures have not loaded then they will not appear.
       *
       * @member {boolean}
       * @memberof PIXI.DisplayObject#
       */
      cacheAsBitmap: {
        get: function get() {
          return this._cacheAsBitmap;
        },
        set: function set(value) {
          if (this._cacheAsBitmap === value) {
            return;
          }
          this._cacheAsBitmap = value;
          var data = void 0;
          if (value) {
            if (!this._cacheData) {
              this._cacheData = new CacheData();
            }
            data = this._cacheData;
            data.originalRenderWebGL = this.renderWebGL;
            data.originalRenderCanvas = this.renderCanvas;
            data.originalUpdateTransform = this.updateTransform;
            data.originalCalculateBounds = this.calculateBounds;
            data.originalGetLocalBounds = this.getLocalBounds;
            data.originalDestroy = this.destroy;
            data.originalContainsPoint = this.containsPoint;
            data.originalMask = this._mask;
            data.originalFilterArea = this.filterArea;
            this.renderWebGL = this._renderCachedWebGL;
            this.renderCanvas = this._renderCachedCanvas;
            this.destroy = this._cacheAsBitmapDestroy;
          } else {
            data = this._cacheData;
            if (data.sprite) {
              this._destroyCachedDisplayObject();
            }
            this.renderWebGL = data.originalRenderWebGL;
            this.renderCanvas = data.originalRenderCanvas;
            this.calculateBounds = data.originalCalculateBounds;
            this.getLocalBounds = data.originalGetLocalBounds;
            this.destroy = data.originalDestroy;
            this.updateTransform = data.originalUpdateTransform;
            this.containsPoint = data.originalContainsPoint;
            this._mask = data.originalMask;
            this.filterArea = data.originalFilterArea;
          }
        }
      }
    });
    DisplayObject.prototype._renderCachedWebGL = function _renderCachedWebGL(renderer) {
      if (!this.visible || this.worldAlpha <= 0 || !this.renderable) {
        return;
      }
      this._initCachedDisplayObject(renderer);
      this._cacheData.sprite.transform._worldID = this.transform._worldID;
      this._cacheData.sprite.worldAlpha = this.worldAlpha;
      this._cacheData.sprite._renderWebGL(renderer);
    };
    DisplayObject.prototype._initCachedDisplayObject = function _initCachedDisplayObject(renderer) {
      if (this._cacheData && this._cacheData.sprite) {
        return;
      }
      var cacheAlpha = this.alpha;
      this.alpha = 1;
      renderer.currentRenderer.flush();
      var bounds = this.getLocalBounds().clone();
      if (this._filters && this._filters.length) {
        var padding = this._filters[0].padding;
        bounds.pad(padding);
      }
      bounds.ceil(core.settings.RESOLUTION);
      var cachedRenderTarget = renderer._activeRenderTarget;
      var stack = renderer.filterManager.filterStack;
      var renderTexture = core.RenderTexture.create(bounds.width, bounds.height);
      var textureCacheId = "cacheAsBitmap_" + (0, _utils.uid)();
      this._cacheData.textureCacheId = textureCacheId;
      _BaseTexture2.default.addToCache(renderTexture.baseTexture, textureCacheId);
      _Texture2.default.addToCache(renderTexture, textureCacheId);
      var m = _tempMatrix;
      m.tx = -bounds.x;
      m.ty = -bounds.y;
      this.transform.worldTransform.identity();
      this.renderWebGL = this._cacheData.originalRenderWebGL;
      renderer.render(this, renderTexture, true, m, true);
      renderer.bindRenderTarget(cachedRenderTarget);
      renderer.filterManager.filterStack = stack;
      this.renderWebGL = this._renderCachedWebGL;
      this.updateTransform = this.displayObjectUpdateTransform;
      this.calculateBounds = this._calculateCachedBounds;
      this.getLocalBounds = this._getCachedLocalBounds;
      this._mask = null;
      this.filterArea = null;
      var cachedSprite = new core.Sprite(renderTexture);
      cachedSprite.transform.worldTransform = this.transform.worldTransform;
      cachedSprite.anchor.x = -(bounds.x / bounds.width);
      cachedSprite.anchor.y = -(bounds.y / bounds.height);
      cachedSprite.alpha = cacheAlpha;
      cachedSprite._bounds = this._bounds;
      this._cacheData.sprite = cachedSprite;
      this.transform._parentID = -1;
      if (!this.parent) {
        this.parent = renderer._tempDisplayObjectParent;
        this.updateTransform();
        this.parent = null;
      } else {
        this.updateTransform();
      }
      this.containsPoint = cachedSprite.containsPoint.bind(cachedSprite);
    };
    DisplayObject.prototype._renderCachedCanvas = function _renderCachedCanvas(renderer) {
      if (!this.visible || this.worldAlpha <= 0 || !this.renderable) {
        return;
      }
      this._initCachedDisplayObjectCanvas(renderer);
      this._cacheData.sprite.worldAlpha = this.worldAlpha;
      this._cacheData.sprite._renderCanvas(renderer);
    };
    DisplayObject.prototype._initCachedDisplayObjectCanvas = function _initCachedDisplayObjectCanvas(renderer) {
      if (this._cacheData && this._cacheData.sprite) {
        return;
      }
      var bounds = this.getLocalBounds();
      var cacheAlpha = this.alpha;
      this.alpha = 1;
      var cachedRenderTarget = renderer.context;
      bounds.ceil(core.settings.RESOLUTION);
      var renderTexture = core.RenderTexture.create(bounds.width, bounds.height);
      var textureCacheId = "cacheAsBitmap_" + (0, _utils.uid)();
      this._cacheData.textureCacheId = textureCacheId;
      _BaseTexture2.default.addToCache(renderTexture.baseTexture, textureCacheId);
      _Texture2.default.addToCache(renderTexture, textureCacheId);
      var m = _tempMatrix;
      this.transform.localTransform.copy(m);
      m.invert();
      m.tx -= bounds.x;
      m.ty -= bounds.y;
      this.renderCanvas = this._cacheData.originalRenderCanvas;
      renderer.render(this, renderTexture, true, m, false);
      renderer.context = cachedRenderTarget;
      this.renderCanvas = this._renderCachedCanvas;
      this.updateTransform = this.displayObjectUpdateTransform;
      this.calculateBounds = this._calculateCachedBounds;
      this.getLocalBounds = this._getCachedLocalBounds;
      this._mask = null;
      this.filterArea = null;
      var cachedSprite = new core.Sprite(renderTexture);
      cachedSprite.transform.worldTransform = this.transform.worldTransform;
      cachedSprite.anchor.x = -(bounds.x / bounds.width);
      cachedSprite.anchor.y = -(bounds.y / bounds.height);
      cachedSprite.alpha = cacheAlpha;
      cachedSprite._bounds = this._bounds;
      this._cacheData.sprite = cachedSprite;
      this.transform._parentID = -1;
      if (!this.parent) {
        this.parent = renderer._tempDisplayObjectParent;
        this.updateTransform();
        this.parent = null;
      } else {
        this.updateTransform();
      }
      this.containsPoint = cachedSprite.containsPoint.bind(cachedSprite);
    };
    DisplayObject.prototype._calculateCachedBounds = function _calculateCachedBounds() {
      this._bounds.clear();
      this._cacheData.sprite.transform._worldID = this.transform._worldID;
      this._cacheData.sprite._calculateBounds();
      this._lastBoundsID = this._boundsID;
    };
    DisplayObject.prototype._getCachedLocalBounds = function _getCachedLocalBounds() {
      return this._cacheData.sprite.getLocalBounds();
    };
    DisplayObject.prototype._destroyCachedDisplayObject = function _destroyCachedDisplayObject() {
      this._cacheData.sprite._texture.destroy(true);
      this._cacheData.sprite = null;
      _BaseTexture2.default.removeFromCache(this._cacheData.textureCacheId);
      _Texture2.default.removeFromCache(this._cacheData.textureCacheId);
      this._cacheData.textureCacheId = null;
    };
    DisplayObject.prototype._cacheAsBitmapDestroy = function _cacheAsBitmapDestroy(options) {
      this.cacheAsBitmap = false;
      this.destroy(options);
    };
  }
});

// node_modules/pixi.js/lib/extras/getChildByName.js
var require_getChildByName = __commonJS({
  "node_modules/pixi.js/lib/extras/getChildByName.js"() {
    "use strict";
    var _core = require_core();
    var core = _interopRequireWildcard(_core);
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    core.DisplayObject.prototype.name = null;
    core.Container.prototype.getChildByName = function getChildByName(name) {
      for (var i = 0; i < this.children.length; i++) {
        if (this.children[i].name === name) {
          return this.children[i];
        }
      }
      return null;
    };
  }
});

// node_modules/pixi.js/lib/extras/getGlobalPosition.js
var require_getGlobalPosition = __commonJS({
  "node_modules/pixi.js/lib/extras/getGlobalPosition.js"() {
    "use strict";
    var _core = require_core();
    var core = _interopRequireWildcard(_core);
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    core.DisplayObject.prototype.getGlobalPosition = function getGlobalPosition() {
      var point = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : new core.Point();
      var skipUpdate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      if (this.parent) {
        this.parent.toGlobal(this.position, point, skipUpdate);
      } else {
        point.x = this.position.x;
        point.y = this.position.y;
      }
      return point;
    };
  }
});

// node_modules/pixi.js/lib/extras/index.js
var require_extras = __commonJS({
  "node_modules/pixi.js/lib/extras/index.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.BitmapText = exports.TilingSpriteRenderer = exports.TilingSprite = exports.AnimatedSprite = void 0;
    var _AnimatedSprite = require_AnimatedSprite();
    Object.defineProperty(exports, "AnimatedSprite", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_AnimatedSprite).default;
      }
    });
    var _TilingSprite = require_TilingSprite();
    Object.defineProperty(exports, "TilingSprite", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_TilingSprite).default;
      }
    });
    var _TilingSpriteRenderer = require_TilingSpriteRenderer();
    Object.defineProperty(exports, "TilingSpriteRenderer", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_TilingSpriteRenderer).default;
      }
    });
    var _BitmapText = require_BitmapText();
    Object.defineProperty(exports, "BitmapText", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_BitmapText).default;
      }
    });
    require_cacheAsBitmap();
    require_getChildByName();
    require_getGlobalPosition();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
  }
});

// node_modules/pixi.js/lib/filters/fxaa/FXAAFilter.js
var require_FXAAFilter = __commonJS({
  "node_modules/pixi.js/lib/filters/fxaa/FXAAFilter.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _core = require_core();
    var core = _interopRequireWildcard(_core);
    var _path = require_path();
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var FXAAFilter = function(_core$Filter) {
      _inherits(FXAAFilter2, _core$Filter);
      function FXAAFilter2() {
        _classCallCheck(this, FXAAFilter2);
        return _possibleConstructorReturn(this, _core$Filter.call(
          this,
          // vertex shader
          "\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nuniform vec4 filterArea;\n\nvarying vec2 vTextureCoord;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvoid texcoords(vec2 fragCoord, vec2 resolution,\n               out vec2 v_rgbNW, out vec2 v_rgbNE,\n               out vec2 v_rgbSW, out vec2 v_rgbSE,\n               out vec2 v_rgbM) {\n    vec2 inverseVP = 1.0 / resolution.xy;\n    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;\n    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;\n    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;\n    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;\n    v_rgbM = vec2(fragCoord * inverseVP);\n}\n\nvoid main(void) {\n\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n   vTextureCoord = aTextureCoord;\n\n   vec2 fragCoord = vTextureCoord * filterArea.xy;\n\n   texcoords(fragCoord, filterArea.xy, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n}",
          // fragment shader
          `varying vec2 v_rgbNW;
varying vec2 v_rgbNE;
varying vec2 v_rgbSW;
varying vec2 v_rgbSE;
varying vec2 v_rgbM;

varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;

/**
 Basic FXAA implementation based on the code on geeks3d.com with the
 modification that the texture2DLod stuff was removed since it's
 unsupported by WebGL.
 
 --
 
 From:
 https://github.com/mitsuhiko/webgl-meincraft
 
 Copyright (c) 2011 by Armin Ronacher.
 
 Some rights reserved.
 
 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are
 met:
 
 * Redistributions of source code must retain the above copyright
 notice, this list of conditions and the following disclaimer.
 
 * Redistributions in binary form must reproduce the above
 copyright notice, this list of conditions and the following
 disclaimer in the documentation and/or other materials provided
 with the distribution.
 
 * The names of the contributors may not be used to endorse or
 promote products derived from this software without specific
 prior written permission.
 
 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

#ifndef FXAA_REDUCE_MIN
#define FXAA_REDUCE_MIN   (1.0/ 128.0)
#endif
#ifndef FXAA_REDUCE_MUL
#define FXAA_REDUCE_MUL   (1.0 / 8.0)
#endif
#ifndef FXAA_SPAN_MAX
#define FXAA_SPAN_MAX     8.0
#endif

//optimized version for mobile, where dependent
//texture reads can be a bottleneck
vec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 resolution,
          vec2 v_rgbNW, vec2 v_rgbNE,
          vec2 v_rgbSW, vec2 v_rgbSE,
          vec2 v_rgbM) {
    vec4 color;
    mediump vec2 inverseVP = vec2(1.0 / resolution.x, 1.0 / resolution.y);
    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;
    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;
    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;
    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;
    vec4 texColor = texture2D(tex, v_rgbM);
    vec3 rgbM  = texColor.xyz;
    vec3 luma = vec3(0.299, 0.587, 0.114);
    float lumaNW = dot(rgbNW, luma);
    float lumaNE = dot(rgbNE, luma);
    float lumaSW = dot(rgbSW, luma);
    float lumaSE = dot(rgbSE, luma);
    float lumaM  = dot(rgbM,  luma);
    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));
    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));
    
    mediump vec2 dir;
    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));
    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));
    
    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *
                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);
    
    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);
    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),
              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),
                  dir * rcpDirMin)) * inverseVP;
    
    vec3 rgbA = 0.5 * (
                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +
                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);
    vec3 rgbB = rgbA * 0.5 + 0.25 * (
                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +
                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);
    
    float lumaB = dot(rgbB, luma);
    if ((lumaB < lumaMin) || (lumaB > lumaMax))
        color = vec4(rgbA, texColor.a);
    else
        color = vec4(rgbB, texColor.a);
    return color;
}

void main() {

      vec2 fragCoord = vTextureCoord * filterArea.xy;

      vec4 color;

    color = fxaa(uSampler, fragCoord, filterArea.xy, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);

      gl_FragColor = color;
}
`
        ));
      }
      return FXAAFilter2;
    }(core.Filter);
    exports.default = FXAAFilter;
  }
});

// node_modules/pixi.js/lib/filters/noise/NoiseFilter.js
var require_NoiseFilter = __commonJS({
  "node_modules/pixi.js/lib/filters/noise/NoiseFilter.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _core = require_core();
    var core = _interopRequireWildcard(_core);
    var _path = require_path();
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var NoiseFilter = function(_core$Filter) {
      _inherits(NoiseFilter2, _core$Filter);
      function NoiseFilter2() {
        var noise = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0.5;
        var seed = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Math.random();
        _classCallCheck(this, NoiseFilter2);
        var _this = _possibleConstructorReturn(this, _core$Filter.call(
          this,
          // vertex shader
          "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}",
          // fragment shader
          "precision highp float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform float uNoise;\nuniform float uSeed;\nuniform sampler2D uSampler;\n\nfloat rand(vec2 co)\n{\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main()\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n    float randomValue = rand(gl_FragCoord.xy * uSeed);\n    float diff = (randomValue - 0.5) * uNoise;\n\n    // Un-premultiply alpha before applying the color matrix. See issue #3539.\n    if (color.a > 0.0) {\n        color.rgb /= color.a;\n    }\n\n    color.r += diff;\n    color.g += diff;\n    color.b += diff;\n\n    // Premultiply alpha again.\n    color.rgb *= color.a;\n\n    gl_FragColor = color;\n}\n"
        ));
        _this.noise = noise;
        _this.seed = seed;
        return _this;
      }
      _createClass(NoiseFilter2, [{
        key: "noise",
        get: function get() {
          return this.uniforms.uNoise;
        },
        set: function set(value) {
          this.uniforms.uNoise = value;
        }
        /**
         * A seed value to apply to the random noise generation. `Math.random()` is a good value to use.
         *
         * @member {number}
         */
      }, {
        key: "seed",
        get: function get() {
          return this.uniforms.uSeed;
        },
        set: function set(value) {
          this.uniforms.uSeed = value;
        }
      }]);
      return NoiseFilter2;
    }(core.Filter);
    exports.default = NoiseFilter;
  }
});

// node_modules/pixi.js/lib/filters/displacement/DisplacementFilter.js
var require_DisplacementFilter = __commonJS({
  "node_modules/pixi.js/lib/filters/displacement/DisplacementFilter.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _core = require_core();
    var core = _interopRequireWildcard(_core);
    var _path = require_path();
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var DisplacementFilter = function(_core$Filter) {
      _inherits(DisplacementFilter2, _core$Filter);
      function DisplacementFilter2(sprite, scale) {
        _classCallCheck(this, DisplacementFilter2);
        var maskMatrix = new core.Matrix();
        sprite.renderable = false;
        var _this = _possibleConstructorReturn(this, _core$Filter.call(
          this,
          // vertex shader
          "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 filterMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vFilterCoord;\n\nvoid main(void)\n{\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vFilterCoord = ( filterMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n   vTextureCoord = aTextureCoord;\n}",
          // fragment shader
          "varying vec2 vFilterCoord;\nvarying vec2 vTextureCoord;\n\nuniform vec2 scale;\n\nuniform sampler2D uSampler;\nuniform sampler2D mapSampler;\n\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\n\nvoid main(void)\n{\n  vec4 map =  texture2D(mapSampler, vFilterCoord);\n\n  map -= 0.5;\n  map.xy *= scale / filterArea.xy;\n\n  gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), filterClamp.xy, filterClamp.zw));\n}\n"
        ));
        _this.maskSprite = sprite;
        _this.maskMatrix = maskMatrix;
        _this.uniforms.mapSampler = sprite._texture;
        _this.uniforms.filterMatrix = maskMatrix;
        _this.uniforms.scale = { x: 1, y: 1 };
        if (scale === null || scale === void 0) {
          scale = 20;
        }
        _this.scale = new core.Point(scale, scale);
        return _this;
      }
      DisplacementFilter2.prototype.apply = function apply(filterManager, input, output) {
        this.uniforms.filterMatrix = filterManager.calculateSpriteMatrix(this.maskMatrix, this.maskSprite);
        this.uniforms.scale.x = this.scale.x;
        this.uniforms.scale.y = this.scale.y;
        filterManager.applyFilter(this, input, output);
      };
      _createClass(DisplacementFilter2, [{
        key: "map",
        get: function get() {
          return this.uniforms.mapSampler;
        },
        set: function set(value) {
          this.uniforms.mapSampler = value;
        }
      }]);
      return DisplacementFilter2;
    }(core.Filter);
    exports.default = DisplacementFilter;
  }
});

// node_modules/pixi.js/lib/filters/blur/generateBlurVertSource.js
var require_generateBlurVertSource = __commonJS({
  "node_modules/pixi.js/lib/filters/blur/generateBlurVertSource.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.default = generateVertBlurSource;
    var vertTemplate = ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "uniform float strength;", "uniform mat3 projectionMatrix;", "varying vec2 vBlurTexCoords[%size%];", "void main(void)", "{", "gl_Position = vec4((projectionMatrix * vec3((aVertexPosition), 1.0)).xy, 0.0, 1.0);", "%blur%", "}"].join("\n");
    function generateVertBlurSource(kernelSize, x) {
      var halfLength = Math.ceil(kernelSize / 2);
      var vertSource = vertTemplate;
      var blurLoop = "";
      var template = void 0;
      if (x) {
        template = "vBlurTexCoords[%index%] = aTextureCoord + vec2(%sampleIndex% * strength, 0.0);";
      } else {
        template = "vBlurTexCoords[%index%] = aTextureCoord + vec2(0.0, %sampleIndex% * strength);";
      }
      for (var i = 0; i < kernelSize; i++) {
        var blur = template.replace("%index%", i);
        blur = blur.replace("%sampleIndex%", i - (halfLength - 1) + ".0");
        blurLoop += blur;
        blurLoop += "\n";
      }
      vertSource = vertSource.replace("%blur%", blurLoop);
      vertSource = vertSource.replace("%size%", kernelSize);
      return vertSource;
    }
  }
});

// node_modules/pixi.js/lib/filters/blur/generateBlurFragSource.js
var require_generateBlurFragSource = __commonJS({
  "node_modules/pixi.js/lib/filters/blur/generateBlurFragSource.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.default = generateFragBlurSource;
    var GAUSSIAN_VALUES = {
      5: [0.153388, 0.221461, 0.250301],
      7: [0.071303, 0.131514, 0.189879, 0.214607],
      9: [0.028532, 0.067234, 0.124009, 0.179044, 0.20236],
      11: [93e-4, 0.028002, 0.065984, 0.121703, 0.175713, 0.198596],
      13: [2406e-6, 9255e-6, 0.027867, 0.065666, 0.121117, 0.174868, 0.197641],
      15: [489e-6, 2403e-6, 9246e-6, 0.02784, 0.065602, 0.120999, 0.174697, 0.197448]
    };
    var fragTemplate = ["varying vec2 vBlurTexCoords[%size%];", "uniform sampler2D uSampler;", "void main(void)", "{", "    gl_FragColor = vec4(0.0);", "    %blur%", "}"].join("\n");
    function generateFragBlurSource(kernelSize) {
      var kernel = GAUSSIAN_VALUES[kernelSize];
      var halfLength = kernel.length;
      var fragSource = fragTemplate;
      var blurLoop = "";
      var template = "gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;";
      var value = void 0;
      for (var i = 0; i < kernelSize; i++) {
        var blur = template.replace("%index%", i);
        value = i;
        if (i >= halfLength) {
          value = kernelSize - i - 1;
        }
        blur = blur.replace("%value%", kernel[value]);
        blurLoop += blur;
        blurLoop += "\n";
      }
      fragSource = fragSource.replace("%blur%", blurLoop);
      fragSource = fragSource.replace("%size%", kernelSize);
      return fragSource;
    }
  }
});

// node_modules/pixi.js/lib/filters/blur/getMaxBlurKernelSize.js
var require_getMaxBlurKernelSize = __commonJS({
  "node_modules/pixi.js/lib/filters/blur/getMaxBlurKernelSize.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.default = getMaxKernelSize;
    function getMaxKernelSize(gl2) {
      var maxVaryings = gl2.getParameter(gl2.MAX_VARYING_VECTORS);
      var kernelSize = 15;
      while (kernelSize > maxVaryings) {
        kernelSize -= 2;
      }
      return kernelSize;
    }
  }
});

// node_modules/pixi.js/lib/filters/blur/BlurXFilter.js
var require_BlurXFilter = __commonJS({
  "node_modules/pixi.js/lib/filters/blur/BlurXFilter.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _core = require_core();
    var core = _interopRequireWildcard(_core);
    var _generateBlurVertSource = require_generateBlurVertSource();
    var _generateBlurVertSource2 = _interopRequireDefault(_generateBlurVertSource);
    var _generateBlurFragSource = require_generateBlurFragSource();
    var _generateBlurFragSource2 = _interopRequireDefault(_generateBlurFragSource);
    var _getMaxBlurKernelSize = require_getMaxBlurKernelSize();
    var _getMaxBlurKernelSize2 = _interopRequireDefault(_getMaxBlurKernelSize);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var BlurXFilter = function(_core$Filter) {
      _inherits(BlurXFilter2, _core$Filter);
      function BlurXFilter2(strength, quality, resolution, kernelSize) {
        _classCallCheck(this, BlurXFilter2);
        kernelSize = kernelSize || 5;
        var vertSrc = (0, _generateBlurVertSource2.default)(kernelSize, true);
        var fragSrc = (0, _generateBlurFragSource2.default)(kernelSize);
        var _this = _possibleConstructorReturn(this, _core$Filter.call(
          this,
          // vertex shader
          vertSrc,
          // fragment shader
          fragSrc
        ));
        _this.resolution = resolution || core.settings.RESOLUTION;
        _this._quality = 0;
        _this.quality = quality || 4;
        _this.strength = strength || 8;
        _this.firstRun = true;
        return _this;
      }
      BlurXFilter2.prototype.apply = function apply(filterManager, input, output, clear) {
        if (this.firstRun) {
          var gl2 = filterManager.renderer.gl;
          var kernelSize = (0, _getMaxBlurKernelSize2.default)(gl2);
          this.vertexSrc = (0, _generateBlurVertSource2.default)(kernelSize, true);
          this.fragmentSrc = (0, _generateBlurFragSource2.default)(kernelSize);
          this.firstRun = false;
        }
        this.uniforms.strength = 1 / output.size.width * (output.size.width / input.size.width);
        this.uniforms.strength *= this.strength;
        this.uniforms.strength /= this.passes;
        if (this.passes === 1) {
          filterManager.applyFilter(this, input, output, clear);
        } else {
          var renderTarget = filterManager.getRenderTarget(true);
          var flip = input;
          var flop = renderTarget;
          for (var i = 0; i < this.passes - 1; i++) {
            filterManager.applyFilter(this, flip, flop, true);
            var temp = flop;
            flop = flip;
            flip = temp;
          }
          filterManager.applyFilter(this, flip, output, clear);
          filterManager.returnRenderTarget(renderTarget);
        }
      };
      _createClass(BlurXFilter2, [{
        key: "blur",
        get: function get() {
          return this.strength;
        },
        set: function set(value) {
          this.padding = Math.abs(value) * 2;
          this.strength = value;
        }
        /**
        * Sets the quality of the blur by modifying the number of passes. More passes means higher
        * quaility bluring but the lower the performance.
        *
        * @member {number}
        * @default 4
        */
      }, {
        key: "quality",
        get: function get() {
          return this._quality;
        },
        set: function set(value) {
          this._quality = value;
          this.passes = value;
        }
      }]);
      return BlurXFilter2;
    }(core.Filter);
    exports.default = BlurXFilter;
  }
});

// node_modules/pixi.js/lib/filters/blur/BlurYFilter.js
var require_BlurYFilter = __commonJS({
  "node_modules/pixi.js/lib/filters/blur/BlurYFilter.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _core = require_core();
    var core = _interopRequireWildcard(_core);
    var _generateBlurVertSource = require_generateBlurVertSource();
    var _generateBlurVertSource2 = _interopRequireDefault(_generateBlurVertSource);
    var _generateBlurFragSource = require_generateBlurFragSource();
    var _generateBlurFragSource2 = _interopRequireDefault(_generateBlurFragSource);
    var _getMaxBlurKernelSize = require_getMaxBlurKernelSize();
    var _getMaxBlurKernelSize2 = _interopRequireDefault(_getMaxBlurKernelSize);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var BlurYFilter = function(_core$Filter) {
      _inherits(BlurYFilter2, _core$Filter);
      function BlurYFilter2(strength, quality, resolution, kernelSize) {
        _classCallCheck(this, BlurYFilter2);
        kernelSize = kernelSize || 5;
        var vertSrc = (0, _generateBlurVertSource2.default)(kernelSize, false);
        var fragSrc = (0, _generateBlurFragSource2.default)(kernelSize);
        var _this = _possibleConstructorReturn(this, _core$Filter.call(
          this,
          // vertex shader
          vertSrc,
          // fragment shader
          fragSrc
        ));
        _this.resolution = resolution || core.settings.RESOLUTION;
        _this._quality = 0;
        _this.quality = quality || 4;
        _this.strength = strength || 8;
        _this.firstRun = true;
        return _this;
      }
      BlurYFilter2.prototype.apply = function apply(filterManager, input, output, clear) {
        if (this.firstRun) {
          var gl2 = filterManager.renderer.gl;
          var kernelSize = (0, _getMaxBlurKernelSize2.default)(gl2);
          this.vertexSrc = (0, _generateBlurVertSource2.default)(kernelSize, false);
          this.fragmentSrc = (0, _generateBlurFragSource2.default)(kernelSize);
          this.firstRun = false;
        }
        this.uniforms.strength = 1 / output.size.height * (output.size.height / input.size.height);
        this.uniforms.strength *= this.strength;
        this.uniforms.strength /= this.passes;
        if (this.passes === 1) {
          filterManager.applyFilter(this, input, output, clear);
        } else {
          var renderTarget = filterManager.getRenderTarget(true);
          var flip = input;
          var flop = renderTarget;
          for (var i = 0; i < this.passes - 1; i++) {
            filterManager.applyFilter(this, flip, flop, true);
            var temp = flop;
            flop = flip;
            flip = temp;
          }
          filterManager.applyFilter(this, flip, output, clear);
          filterManager.returnRenderTarget(renderTarget);
        }
      };
      _createClass(BlurYFilter2, [{
        key: "blur",
        get: function get() {
          return this.strength;
        },
        set: function set(value) {
          this.padding = Math.abs(value) * 2;
          this.strength = value;
        }
        /**
         * Sets the quality of the blur by modifying the number of passes. More passes means higher
         * quaility bluring but the lower the performance.
         *
         * @member {number}
         * @default 4
         */
      }, {
        key: "quality",
        get: function get() {
          return this._quality;
        },
        set: function set(value) {
          this._quality = value;
          this.passes = value;
        }
      }]);
      return BlurYFilter2;
    }(core.Filter);
    exports.default = BlurYFilter;
  }
});

// node_modules/pixi.js/lib/filters/blur/BlurFilter.js
var require_BlurFilter = __commonJS({
  "node_modules/pixi.js/lib/filters/blur/BlurFilter.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _core = require_core();
    var core = _interopRequireWildcard(_core);
    var _BlurXFilter = require_BlurXFilter();
    var _BlurXFilter2 = _interopRequireDefault(_BlurXFilter);
    var _BlurYFilter = require_BlurYFilter();
    var _BlurYFilter2 = _interopRequireDefault(_BlurYFilter);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var BlurFilter = function(_core$Filter) {
      _inherits(BlurFilter2, _core$Filter);
      function BlurFilter2(strength, quality, resolution, kernelSize) {
        _classCallCheck(this, BlurFilter2);
        var _this = _possibleConstructorReturn(this, _core$Filter.call(this));
        _this.blurXFilter = new _BlurXFilter2.default(strength, quality, resolution, kernelSize);
        _this.blurYFilter = new _BlurYFilter2.default(strength, quality, resolution, kernelSize);
        _this.padding = 0;
        _this.resolution = resolution || core.settings.RESOLUTION;
        _this.quality = quality || 4;
        _this.blur = strength || 8;
        return _this;
      }
      BlurFilter2.prototype.apply = function apply(filterManager, input, output) {
        var renderTarget = filterManager.getRenderTarget(true);
        this.blurXFilter.apply(filterManager, input, renderTarget, true);
        this.blurYFilter.apply(filterManager, renderTarget, output, false);
        filterManager.returnRenderTarget(renderTarget);
      };
      _createClass(BlurFilter2, [{
        key: "blur",
        get: function get() {
          return this.blurXFilter.blur;
        },
        set: function set(value) {
          this.blurXFilter.blur = this.blurYFilter.blur = value;
          this.padding = Math.max(Math.abs(this.blurXFilter.strength), Math.abs(this.blurYFilter.strength)) * 2;
        }
        /**
         * Sets the number of passes for blur. More passes means higher quaility bluring.
         *
         * @member {number}
         * @default 1
         */
      }, {
        key: "quality",
        get: function get() {
          return this.blurXFilter.quality;
        },
        set: function set(value) {
          this.blurXFilter.quality = this.blurYFilter.quality = value;
        }
        /**
         * Sets the strength of the blurX property
         *
         * @member {number}
         * @default 2
         */
      }, {
        key: "blurX",
        get: function get() {
          return this.blurXFilter.blur;
        },
        set: function set(value) {
          this.blurXFilter.blur = value;
          this.padding = Math.max(Math.abs(this.blurXFilter.strength), Math.abs(this.blurYFilter.strength)) * 2;
        }
        /**
         * Sets the strength of the blurY property
         *
         * @member {number}
         * @default 2
         */
      }, {
        key: "blurY",
        get: function get() {
          return this.blurYFilter.blur;
        },
        set: function set(value) {
          this.blurYFilter.blur = value;
          this.padding = Math.max(Math.abs(this.blurXFilter.strength), Math.abs(this.blurYFilter.strength)) * 2;
        }
        /**
         * Sets the blendmode of the filter
         *
         * @member {number}
         * @default PIXI.BLEND_MODES.NORMAL
         */
      }, {
        key: "blendMode",
        get: function get() {
          return this.blurYFilter._blendMode;
        },
        set: function set(value) {
          this.blurYFilter._blendMode = value;
        }
      }]);
      return BlurFilter2;
    }(core.Filter);
    exports.default = BlurFilter;
  }
});

// node_modules/pixi.js/lib/filters/colormatrix/ColorMatrixFilter.js
var require_ColorMatrixFilter = __commonJS({
  "node_modules/pixi.js/lib/filters/colormatrix/ColorMatrixFilter.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _core = require_core();
    var core = _interopRequireWildcard(_core);
    var _path = require_path();
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var ColorMatrixFilter = function(_core$Filter) {
      _inherits(ColorMatrixFilter2, _core$Filter);
      function ColorMatrixFilter2() {
        _classCallCheck(this, ColorMatrixFilter2);
        var _this = _possibleConstructorReturn(this, _core$Filter.call(
          this,
          // vertex shader
          "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}",
          // fragment shader
          "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float m[20];\nuniform float uAlpha;\n\nvoid main(void)\n{\n    vec4 c = texture2D(uSampler, vTextureCoord);\n\n    if (uAlpha == 0.0) {\n        gl_FragColor = c;\n        return;\n    }\n\n    // Un-premultiply alpha before applying the color matrix. See issue #3539.\n    if (c.a > 0.0) {\n      c.rgb /= c.a;\n    }\n\n    vec4 result;\n\n    result.r = (m[0] * c.r);\n        result.r += (m[1] * c.g);\n        result.r += (m[2] * c.b);\n        result.r += (m[3] * c.a);\n        result.r += m[4];\n\n    result.g = (m[5] * c.r);\n        result.g += (m[6] * c.g);\n        result.g += (m[7] * c.b);\n        result.g += (m[8] * c.a);\n        result.g += m[9];\n\n    result.b = (m[10] * c.r);\n       result.b += (m[11] * c.g);\n       result.b += (m[12] * c.b);\n       result.b += (m[13] * c.a);\n       result.b += m[14];\n\n    result.a = (m[15] * c.r);\n       result.a += (m[16] * c.g);\n       result.a += (m[17] * c.b);\n       result.a += (m[18] * c.a);\n       result.a += m[19];\n\n    vec3 rgb = mix(c.rgb, result.rgb, uAlpha);\n\n    // Premultiply alpha again.\n    rgb *= result.a;\n\n    gl_FragColor = vec4(rgb, result.a);\n}\n"
        ));
        _this.uniforms.m = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];
        _this.alpha = 1;
        return _this;
      }
      ColorMatrixFilter2.prototype._loadMatrix = function _loadMatrix(matrix) {
        var multiply = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        var newMatrix = matrix;
        if (multiply) {
          this._multiply(newMatrix, this.uniforms.m, matrix);
          newMatrix = this._colorMatrix(newMatrix);
        }
        this.uniforms.m = newMatrix;
      };
      ColorMatrixFilter2.prototype._multiply = function _multiply(out, a, b) {
        out[0] = a[0] * b[0] + a[1] * b[5] + a[2] * b[10] + a[3] * b[15];
        out[1] = a[0] * b[1] + a[1] * b[6] + a[2] * b[11] + a[3] * b[16];
        out[2] = a[0] * b[2] + a[1] * b[7] + a[2] * b[12] + a[3] * b[17];
        out[3] = a[0] * b[3] + a[1] * b[8] + a[2] * b[13] + a[3] * b[18];
        out[4] = a[0] * b[4] + a[1] * b[9] + a[2] * b[14] + a[3] * b[19] + a[4];
        out[5] = a[5] * b[0] + a[6] * b[5] + a[7] * b[10] + a[8] * b[15];
        out[6] = a[5] * b[1] + a[6] * b[6] + a[7] * b[11] + a[8] * b[16];
        out[7] = a[5] * b[2] + a[6] * b[7] + a[7] * b[12] + a[8] * b[17];
        out[8] = a[5] * b[3] + a[6] * b[8] + a[7] * b[13] + a[8] * b[18];
        out[9] = a[5] * b[4] + a[6] * b[9] + a[7] * b[14] + a[8] * b[19] + a[9];
        out[10] = a[10] * b[0] + a[11] * b[5] + a[12] * b[10] + a[13] * b[15];
        out[11] = a[10] * b[1] + a[11] * b[6] + a[12] * b[11] + a[13] * b[16];
        out[12] = a[10] * b[2] + a[11] * b[7] + a[12] * b[12] + a[13] * b[17];
        out[13] = a[10] * b[3] + a[11] * b[8] + a[12] * b[13] + a[13] * b[18];
        out[14] = a[10] * b[4] + a[11] * b[9] + a[12] * b[14] + a[13] * b[19] + a[14];
        out[15] = a[15] * b[0] + a[16] * b[5] + a[17] * b[10] + a[18] * b[15];
        out[16] = a[15] * b[1] + a[16] * b[6] + a[17] * b[11] + a[18] * b[16];
        out[17] = a[15] * b[2] + a[16] * b[7] + a[17] * b[12] + a[18] * b[17];
        out[18] = a[15] * b[3] + a[16] * b[8] + a[17] * b[13] + a[18] * b[18];
        out[19] = a[15] * b[4] + a[16] * b[9] + a[17] * b[14] + a[18] * b[19] + a[19];
        return out;
      };
      ColorMatrixFilter2.prototype._colorMatrix = function _colorMatrix(matrix) {
        var m = new Float32Array(matrix);
        m[4] /= 255;
        m[9] /= 255;
        m[14] /= 255;
        m[19] /= 255;
        return m;
      };
      ColorMatrixFilter2.prototype.brightness = function brightness(b, multiply) {
        var matrix = [b, 0, 0, 0, 0, 0, b, 0, 0, 0, 0, 0, b, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(matrix, multiply);
      };
      ColorMatrixFilter2.prototype.greyscale = function greyscale(scale, multiply) {
        var matrix = [scale, scale, scale, 0, 0, scale, scale, scale, 0, 0, scale, scale, scale, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(matrix, multiply);
      };
      ColorMatrixFilter2.prototype.blackAndWhite = function blackAndWhite(multiply) {
        var matrix = [0.3, 0.6, 0.1, 0, 0, 0.3, 0.6, 0.1, 0, 0, 0.3, 0.6, 0.1, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(matrix, multiply);
      };
      ColorMatrixFilter2.prototype.hue = function hue(rotation, multiply) {
        rotation = (rotation || 0) / 180 * Math.PI;
        var cosR = Math.cos(rotation);
        var sinR = Math.sin(rotation);
        var sqrt = Math.sqrt;
        var w = 1 / 3;
        var sqrW = sqrt(w);
        var a00 = cosR + (1 - cosR) * w;
        var a01 = w * (1 - cosR) - sqrW * sinR;
        var a02 = w * (1 - cosR) + sqrW * sinR;
        var a10 = w * (1 - cosR) + sqrW * sinR;
        var a11 = cosR + w * (1 - cosR);
        var a12 = w * (1 - cosR) - sqrW * sinR;
        var a20 = w * (1 - cosR) - sqrW * sinR;
        var a21 = w * (1 - cosR) + sqrW * sinR;
        var a22 = cosR + w * (1 - cosR);
        var matrix = [a00, a01, a02, 0, 0, a10, a11, a12, 0, 0, a20, a21, a22, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(matrix, multiply);
      };
      ColorMatrixFilter2.prototype.contrast = function contrast(amount, multiply) {
        var v = (amount || 0) + 1;
        var o = -0.5 * (v - 1);
        var matrix = [v, 0, 0, 0, o, 0, v, 0, 0, o, 0, 0, v, 0, o, 0, 0, 0, 1, 0];
        this._loadMatrix(matrix, multiply);
      };
      ColorMatrixFilter2.prototype.saturate = function saturate() {
        var amount = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        var multiply = arguments[1];
        var x = amount * 2 / 3 + 1;
        var y = (x - 1) * -0.5;
        var matrix = [x, y, y, 0, 0, y, x, y, 0, 0, y, y, x, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(matrix, multiply);
      };
      ColorMatrixFilter2.prototype.desaturate = function desaturate() {
        this.saturate(-1);
      };
      ColorMatrixFilter2.prototype.negative = function negative(multiply) {
        var matrix = [-1, 0, 0, 1, 0, 0, -1, 0, 1, 0, 0, 0, -1, 1, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(matrix, multiply);
      };
      ColorMatrixFilter2.prototype.sepia = function sepia(multiply) {
        var matrix = [0.393, 0.7689999, 0.18899999, 0, 0, 0.349, 0.6859999, 0.16799999, 0, 0, 0.272, 0.5339999, 0.13099999, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(matrix, multiply);
      };
      ColorMatrixFilter2.prototype.technicolor = function technicolor(multiply) {
        var matrix = [1.9125277891456083, -0.8545344976951645, -0.09155508482755585, 0, 11.793603434377337, -0.3087833385928097, 1.7658908555458428, -0.10601743074722245, 0, -70.35205161461398, -0.231103377548616, -0.7501899197440212, 1.847597816108189, 0, 30.950940869491138, 0, 0, 0, 1, 0];
        this._loadMatrix(matrix, multiply);
      };
      ColorMatrixFilter2.prototype.polaroid = function polaroid(multiply) {
        var matrix = [1.438, -0.062, -0.062, 0, 0, -0.122, 1.378, -0.122, 0, 0, -0.016, -0.016, 1.483, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(matrix, multiply);
      };
      ColorMatrixFilter2.prototype.toBGR = function toBGR(multiply) {
        var matrix = [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(matrix, multiply);
      };
      ColorMatrixFilter2.prototype.kodachrome = function kodachrome(multiply) {
        var matrix = [1.1285582396593525, -0.3967382283601348, -0.03992559172921793, 0, 63.72958762196502, -0.16404339962244616, 1.0835251566291304, -0.05498805115633132, 0, 24.732407896706203, -0.16786010706155763, -0.5603416277695248, 1.6014850761964943, 0, 35.62982807460946, 0, 0, 0, 1, 0];
        this._loadMatrix(matrix, multiply);
      };
      ColorMatrixFilter2.prototype.browni = function browni(multiply) {
        var matrix = [0.5997023498159715, 0.34553243048391263, -0.2708298674538042, 0, 47.43192855600873, -0.037703249837783157, 0.8609577587992641, 0.15059552388459913, 0, -36.96841498319127, 0.24113635128153335, -0.07441037908422492, 0.44972182064877153, 0, -7.562075277591283, 0, 0, 0, 1, 0];
        this._loadMatrix(matrix, multiply);
      };
      ColorMatrixFilter2.prototype.vintage = function vintage(multiply) {
        var matrix = [0.6279345635605994, 0.3202183420819367, -0.03965408211312453, 0, 9.651285835294123, 0.02578397704808868, 0.6441188644374771, 0.03259127616149294, 0, 7.462829176470591, 0.0466055556782719, -0.0851232987247891, 0.5241648018700465, 0, 5.159190588235296, 0, 0, 0, 1, 0];
        this._loadMatrix(matrix, multiply);
      };
      ColorMatrixFilter2.prototype.colorTone = function colorTone(desaturation, toned, lightColor, darkColor, multiply) {
        desaturation = desaturation || 0.2;
        toned = toned || 0.15;
        lightColor = lightColor || 16770432;
        darkColor = darkColor || 3375104;
        var lR = (lightColor >> 16 & 255) / 255;
        var lG = (lightColor >> 8 & 255) / 255;
        var lB = (lightColor & 255) / 255;
        var dR = (darkColor >> 16 & 255) / 255;
        var dG = (darkColor >> 8 & 255) / 255;
        var dB = (darkColor & 255) / 255;
        var matrix = [0.3, 0.59, 0.11, 0, 0, lR, lG, lB, desaturation, 0, dR, dG, dB, toned, 0, lR - dR, lG - dG, lB - dB, 0, 0];
        this._loadMatrix(matrix, multiply);
      };
      ColorMatrixFilter2.prototype.night = function night(intensity, multiply) {
        intensity = intensity || 0.1;
        var matrix = [intensity * -2, -intensity, 0, 0, 0, -intensity, 0, intensity, 0, 0, 0, intensity, intensity * 2, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(matrix, multiply);
      };
      ColorMatrixFilter2.prototype.predator = function predator(amount, multiply) {
        var matrix = [
          // row 1
          11.224130630493164 * amount,
          -4.794486999511719 * amount,
          -2.8746118545532227 * amount,
          0 * amount,
          0.40342438220977783 * amount,
          // row 2
          -3.6330697536468506 * amount,
          9.193157196044922 * amount,
          -2.951810836791992 * amount,
          0 * amount,
          -1.316135048866272 * amount,
          // row 3
          -3.2184197902679443 * amount,
          -4.2375030517578125 * amount,
          7.476448059082031 * amount,
          0 * amount,
          0.8044459223747253 * amount,
          // row 4
          0,
          0,
          0,
          1,
          0
        ];
        this._loadMatrix(matrix, multiply);
      };
      ColorMatrixFilter2.prototype.lsd = function lsd(multiply) {
        var matrix = [2, -0.4, 0.5, 0, 0, -0.5, 2, -0.4, 0, 0, -0.4, -0.5, 3, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(matrix, multiply);
      };
      ColorMatrixFilter2.prototype.reset = function reset() {
        var matrix = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(matrix, false);
      };
      _createClass(ColorMatrixFilter2, [{
        key: "matrix",
        get: function get() {
          return this.uniforms.m;
        },
        set: function set(value) {
          this.uniforms.m = value;
        }
        /**
         * The opacity value to use when mixing the original and resultant colors.
         *
         * When the value is 0, the original color is used without modification.
         * When the value is 1, the result color is used.
         * When in the range (0, 1) the color is interpolated between the original and result by this amount.
         *
         * @member {number}
         * @default 1
         */
      }, {
        key: "alpha",
        get: function get() {
          return this.uniforms.uAlpha;
        },
        set: function set(value) {
          this.uniforms.uAlpha = value;
        }
      }]);
      return ColorMatrixFilter2;
    }(core.Filter);
    exports.default = ColorMatrixFilter;
    ColorMatrixFilter.prototype.grayscale = ColorMatrixFilter.prototype.greyscale;
  }
});

// node_modules/pixi.js/lib/filters/alpha/AlphaFilter.js
var require_AlphaFilter = __commonJS({
  "node_modules/pixi.js/lib/filters/alpha/AlphaFilter.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _core = require_core();
    var core = _interopRequireWildcard(_core);
    var _path = require_path();
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var AlphaFilter = function(_core$Filter) {
      _inherits(AlphaFilter2, _core$Filter);
      function AlphaFilter2() {
        var alpha = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
        _classCallCheck(this, AlphaFilter2);
        var _this = _possibleConstructorReturn(this, _core$Filter.call(
          this,
          // vertex shader
          "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}",
          // fragment shader
          "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float uAlpha;\n\nvoid main(void)\n{\n   gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;\n}\n"
        ));
        _this.alpha = alpha;
        _this.glShaderKey = "alpha";
        return _this;
      }
      _createClass(AlphaFilter2, [{
        key: "alpha",
        get: function get() {
          return this.uniforms.uAlpha;
        },
        set: function set(value) {
          this.uniforms.uAlpha = value;
        }
      }]);
      return AlphaFilter2;
    }(core.Filter);
    exports.default = AlphaFilter;
  }
});

// node_modules/pixi.js/lib/filters/index.js
var require_filters = __commonJS({
  "node_modules/pixi.js/lib/filters/index.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _FXAAFilter = require_FXAAFilter();
    Object.defineProperty(exports, "FXAAFilter", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_FXAAFilter).default;
      }
    });
    var _NoiseFilter = require_NoiseFilter();
    Object.defineProperty(exports, "NoiseFilter", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_NoiseFilter).default;
      }
    });
    var _DisplacementFilter = require_DisplacementFilter();
    Object.defineProperty(exports, "DisplacementFilter", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_DisplacementFilter).default;
      }
    });
    var _BlurFilter = require_BlurFilter();
    Object.defineProperty(exports, "BlurFilter", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_BlurFilter).default;
      }
    });
    var _BlurXFilter = require_BlurXFilter();
    Object.defineProperty(exports, "BlurXFilter", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_BlurXFilter).default;
      }
    });
    var _BlurYFilter = require_BlurYFilter();
    Object.defineProperty(exports, "BlurYFilter", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_BlurYFilter).default;
      }
    });
    var _ColorMatrixFilter = require_ColorMatrixFilter();
    Object.defineProperty(exports, "ColorMatrixFilter", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_ColorMatrixFilter).default;
      }
    });
    var _AlphaFilter = require_AlphaFilter();
    Object.defineProperty(exports, "AlphaFilter", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_AlphaFilter).default;
      }
    });
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
  }
});

// node_modules/pixi.js/lib/interaction/InteractionData.js
var require_InteractionData = __commonJS({
  "node_modules/pixi.js/lib/interaction/InteractionData.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _core = require_core();
    var core = _interopRequireWildcard(_core);
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var InteractionData = function() {
      function InteractionData2() {
        _classCallCheck(this, InteractionData2);
        this.global = new core.Point();
        this.target = null;
        this.originalEvent = null;
        this.identifier = null;
        this.isPrimary = false;
        this.button = 0;
        this.buttons = 0;
        this.width = 0;
        this.height = 0;
        this.tiltX = 0;
        this.tiltY = 0;
        this.pointerType = null;
        this.pressure = 0;
        this.rotationAngle = 0;
        this.twist = 0;
        this.tangentialPressure = 0;
      }
      InteractionData2.prototype.getLocalPosition = function getLocalPosition(displayObject, point, globalPos) {
        return displayObject.worldTransform.applyInverse(globalPos || this.global, point);
      };
      InteractionData2.prototype.copyEvent = function copyEvent(event) {
        if (event.isPrimary) {
          this.isPrimary = true;
        }
        this.button = event.button;
        this.buttons = Number.isInteger(event.buttons) ? event.buttons : event.which;
        this.width = event.width;
        this.height = event.height;
        this.tiltX = event.tiltX;
        this.tiltY = event.tiltY;
        this.pointerType = event.pointerType;
        this.pressure = event.pressure;
        this.rotationAngle = event.rotationAngle;
        this.twist = event.twist || 0;
        this.tangentialPressure = event.tangentialPressure || 0;
      };
      InteractionData2.prototype.reset = function reset() {
        this.isPrimary = false;
      };
      _createClass(InteractionData2, [{
        key: "pointerId",
        get: function get() {
          return this.identifier;
        }
      }]);
      return InteractionData2;
    }();
    exports.default = InteractionData;
  }
});

// node_modules/pixi.js/lib/interaction/InteractionEvent.js
var require_InteractionEvent = __commonJS({
  "node_modules/pixi.js/lib/interaction/InteractionEvent.js"(exports) {
    "use strict";
    exports.__esModule = true;
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var InteractionEvent = function() {
      function InteractionEvent2() {
        _classCallCheck(this, InteractionEvent2);
        this.stopped = false;
        this.target = null;
        this.currentTarget = null;
        this.type = null;
        this.data = null;
      }
      InteractionEvent2.prototype.stopPropagation = function stopPropagation() {
        this.stopped = true;
      };
      InteractionEvent2.prototype.reset = function reset() {
        this.stopped = false;
        this.currentTarget = null;
        this.target = null;
      };
      return InteractionEvent2;
    }();
    exports.default = InteractionEvent;
  }
});

// node_modules/pixi.js/lib/interaction/InteractionTrackingData.js
var require_InteractionTrackingData = __commonJS({
  "node_modules/pixi.js/lib/interaction/InteractionTrackingData.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var InteractionTrackingData = function() {
      function InteractionTrackingData2(pointerId) {
        _classCallCheck(this, InteractionTrackingData2);
        this._pointerId = pointerId;
        this._flags = InteractionTrackingData2.FLAGS.NONE;
      }
      InteractionTrackingData2.prototype._doSet = function _doSet(flag, yn) {
        if (yn) {
          this._flags = this._flags | flag;
        } else {
          this._flags = this._flags & ~flag;
        }
      };
      _createClass(InteractionTrackingData2, [{
        key: "pointerId",
        get: function get() {
          return this._pointerId;
        }
        /**
         * State of the tracking data, expressed as bit flags
         *
         * @member {number}
         * @memberof PIXI.interaction.InteractionTrackingData#
         */
      }, {
        key: "flags",
        get: function get() {
          return this._flags;
        },
        set: function set(flags) {
          this._flags = flags;
        }
        /**
         * Is the tracked event inactive (not over or down)?
         *
         * @member {number}
         * @memberof PIXI.interaction.InteractionTrackingData#
         */
      }, {
        key: "none",
        get: function get() {
          return this._flags === this.constructor.FLAGS.NONE;
        }
        /**
         * Is the tracked event over the DisplayObject?
         *
         * @member {boolean}
         * @memberof PIXI.interaction.InteractionTrackingData#
         */
      }, {
        key: "over",
        get: function get() {
          return (this._flags & this.constructor.FLAGS.OVER) !== 0;
        },
        set: function set(yn) {
          this._doSet(this.constructor.FLAGS.OVER, yn);
        }
        /**
         * Did the right mouse button come down in the DisplayObject?
         *
         * @member {boolean}
         * @memberof PIXI.interaction.InteractionTrackingData#
         */
      }, {
        key: "rightDown",
        get: function get() {
          return (this._flags & this.constructor.FLAGS.RIGHT_DOWN) !== 0;
        },
        set: function set(yn) {
          this._doSet(this.constructor.FLAGS.RIGHT_DOWN, yn);
        }
        /**
         * Did the left mouse button come down in the DisplayObject?
         *
         * @member {boolean}
         * @memberof PIXI.interaction.InteractionTrackingData#
         */
      }, {
        key: "leftDown",
        get: function get() {
          return (this._flags & this.constructor.FLAGS.LEFT_DOWN) !== 0;
        },
        set: function set(yn) {
          this._doSet(this.constructor.FLAGS.LEFT_DOWN, yn);
        }
      }]);
      return InteractionTrackingData2;
    }();
    exports.default = InteractionTrackingData;
    InteractionTrackingData.FLAGS = Object.freeze({
      NONE: 0,
      OVER: 1 << 0,
      LEFT_DOWN: 1 << 1,
      RIGHT_DOWN: 1 << 2
    });
  }
});

// node_modules/pixi.js/lib/interaction/interactiveTarget.js
var require_interactiveTarget = __commonJS({
  "node_modules/pixi.js/lib/interaction/interactiveTarget.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.default = {
      /**
       * Enable interaction events for the DisplayObject. Touch, pointer and mouse
       * events will not be emitted unless `interactive` is set to `true`.
       *
       * @example
       * const sprite = new PIXI.Sprite(texture);
       * sprite.interactive = true;
       * sprite.on('tap', (event) => {
       *    //handle event
       * });
       * @member {boolean}
       * @memberof PIXI.DisplayObject#
       */
      interactive: false,
      /**
       * Determines if the children to the displayObject can be clicked/touched
       * Setting this to false allows PixiJS to bypass a recursive `hitTest` function
       *
       * @member {boolean}
       * @memberof PIXI.Container#
       */
      interactiveChildren: true,
      /**
       * Interaction shape. Children will be hit first, then this shape will be checked.
       * Setting this will cause this shape to be checked in hit tests rather than the displayObject's bounds.
       *
       * @example
       * const sprite = new PIXI.Sprite(texture);
       * sprite.interactive = true;
       * sprite.hitArea = new PIXI.Rectangle(0, 0, 100, 100);
       * @member {PIXI.Rectangle|PIXI.Circle|PIXI.Ellipse|PIXI.Polygon|PIXI.RoundedRectangle}
       * @memberof PIXI.DisplayObject#
       */
      hitArea: null,
      /**
       * If enabled, the mouse cursor use the pointer behavior when hovered over the displayObject if it is interactive
       * Setting this changes the 'cursor' property to `'pointer'`.
       *
       * @example
       * const sprite = new PIXI.Sprite(texture);
       * sprite.interactive = true;
       * sprite.buttonMode = true;
       * @member {boolean}
       * @memberof PIXI.DisplayObject#
       */
      get buttonMode() {
        return this.cursor === "pointer";
      },
      set buttonMode(value) {
        if (value) {
          this.cursor = "pointer";
        } else if (this.cursor === "pointer") {
          this.cursor = null;
        }
      },
      /**
       * This defines what cursor mode is used when the mouse cursor
       * is hovered over the displayObject.
       *
       * @example
       * const sprite = new PIXI.Sprite(texture);
       * sprite.interactive = true;
       * sprite.cursor = 'wait';
       * @see https://developer.mozilla.org/en/docs/Web/CSS/cursor
       *
       * @member {string}
       * @memberof PIXI.DisplayObject#
       */
      cursor: null,
      /**
       * Internal set of all active pointers, by identifier
       *
       * @member {Map<number, InteractionTrackingData>}
       * @memberof PIXI.DisplayObject#
       * @private
       */
      get trackedPointers() {
        if (this._trackedPointers === void 0)
          this._trackedPointers = {};
        return this._trackedPointers;
      },
      /**
       * Map of all tracked pointers, by identifier. Use trackedPointers to access.
       *
       * @private
       * @type {Map<number, InteractionTrackingData>}
       */
      _trackedPointers: void 0
    };
  }
});

// node_modules/pixi.js/lib/interaction/InteractionManager.js
var require_InteractionManager = __commonJS({
  "node_modules/pixi.js/lib/interaction/InteractionManager.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    var _core = require_core();
    var core = _interopRequireWildcard(_core);
    var _InteractionData = require_InteractionData();
    var _InteractionData2 = _interopRequireDefault(_InteractionData);
    var _InteractionEvent = require_InteractionEvent();
    var _InteractionEvent2 = _interopRequireDefault(_InteractionEvent);
    var _InteractionTrackingData = require_InteractionTrackingData();
    var _InteractionTrackingData2 = _interopRequireDefault(_InteractionTrackingData);
    var _eventemitter = require_eventemitter3();
    var _eventemitter2 = _interopRequireDefault(_eventemitter);
    var _interactiveTarget = require_interactiveTarget();
    var _interactiveTarget2 = _interopRequireDefault(_interactiveTarget);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    core.utils.mixins.delayMixin(core.DisplayObject.prototype, _interactiveTarget2.default);
    var MOUSE_POINTER_ID = 1;
    var hitTestEvent = {
      target: null,
      data: {
        global: null
      }
    };
    var InteractionManager = function(_EventEmitter) {
      _inherits(InteractionManager2, _EventEmitter);
      function InteractionManager2(renderer, options) {
        _classCallCheck(this, InteractionManager2);
        var _this = _possibleConstructorReturn(this, _EventEmitter.call(this));
        options = options || {};
        _this.renderer = renderer;
        _this.autoPreventDefault = options.autoPreventDefault !== void 0 ? options.autoPreventDefault : true;
        _this.interactionFrequency = options.interactionFrequency || 10;
        _this.mouse = new _InteractionData2.default();
        _this.mouse.identifier = MOUSE_POINTER_ID;
        _this.mouse.global.set(-999999);
        _this.activeInteractionData = {};
        _this.activeInteractionData[MOUSE_POINTER_ID] = _this.mouse;
        _this.interactionDataPool = [];
        _this.eventData = new _InteractionEvent2.default();
        _this.interactionDOMElement = null;
        _this.moveWhenInside = false;
        _this.eventsAdded = false;
        _this.mouseOverRenderer = false;
        _this.supportsTouchEvents = "ontouchstart" in window;
        _this.supportsPointerEvents = !!window.PointerEvent;
        _this.onPointerUp = _this.onPointerUp.bind(_this);
        _this.processPointerUp = _this.processPointerUp.bind(_this);
        _this.onPointerCancel = _this.onPointerCancel.bind(_this);
        _this.processPointerCancel = _this.processPointerCancel.bind(_this);
        _this.onPointerDown = _this.onPointerDown.bind(_this);
        _this.processPointerDown = _this.processPointerDown.bind(_this);
        _this.onPointerMove = _this.onPointerMove.bind(_this);
        _this.processPointerMove = _this.processPointerMove.bind(_this);
        _this.onPointerOut = _this.onPointerOut.bind(_this);
        _this.processPointerOverOut = _this.processPointerOverOut.bind(_this);
        _this.onPointerOver = _this.onPointerOver.bind(_this);
        _this.cursorStyles = {
          default: "inherit",
          pointer: "pointer"
        };
        _this.currentCursorMode = null;
        _this.cursor = null;
        _this._tempPoint = new core.Point();
        _this.resolution = 1;
        _this.setTargetElement(_this.renderer.view, _this.renderer.resolution);
        return _this;
      }
      InteractionManager2.prototype.hitTest = function hitTest(globalPoint, root) {
        hitTestEvent.target = null;
        hitTestEvent.data.global = globalPoint;
        if (!root) {
          root = this.renderer._lastObjectRendered;
        }
        this.processInteractive(hitTestEvent, root, null, true);
        return hitTestEvent.target;
      };
      InteractionManager2.prototype.setTargetElement = function setTargetElement(element) {
        var resolution = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
        this.removeEvents();
        this.interactionDOMElement = element;
        this.resolution = resolution;
        this.addEvents();
      };
      InteractionManager2.prototype.addEvents = function addEvents() {
        if (!this.interactionDOMElement) {
          return;
        }
        core.ticker.shared.add(this.update, this, core.UPDATE_PRIORITY.INTERACTION);
        if (window.navigator.msPointerEnabled) {
          this.interactionDOMElement.style["-ms-content-zooming"] = "none";
          this.interactionDOMElement.style["-ms-touch-action"] = "none";
        } else if (this.supportsPointerEvents) {
          this.interactionDOMElement.style["touch-action"] = "none";
        }
        if (this.supportsPointerEvents) {
          window.document.addEventListener("pointermove", this.onPointerMove, true);
          this.interactionDOMElement.addEventListener("pointerdown", this.onPointerDown, true);
          this.interactionDOMElement.addEventListener("pointerleave", this.onPointerOut, true);
          this.interactionDOMElement.addEventListener("pointerover", this.onPointerOver, true);
          window.addEventListener("pointercancel", this.onPointerCancel, true);
          window.addEventListener("pointerup", this.onPointerUp, true);
        } else {
          window.document.addEventListener("mousemove", this.onPointerMove, true);
          this.interactionDOMElement.addEventListener("mousedown", this.onPointerDown, true);
          this.interactionDOMElement.addEventListener("mouseout", this.onPointerOut, true);
          this.interactionDOMElement.addEventListener("mouseover", this.onPointerOver, true);
          window.addEventListener("mouseup", this.onPointerUp, true);
        }
        if (this.supportsTouchEvents) {
          this.interactionDOMElement.addEventListener("touchstart", this.onPointerDown, true);
          this.interactionDOMElement.addEventListener("touchcancel", this.onPointerCancel, true);
          this.interactionDOMElement.addEventListener("touchend", this.onPointerUp, true);
          this.interactionDOMElement.addEventListener("touchmove", this.onPointerMove, true);
        }
        this.eventsAdded = true;
      };
      InteractionManager2.prototype.removeEvents = function removeEvents() {
        if (!this.interactionDOMElement) {
          return;
        }
        core.ticker.shared.remove(this.update, this);
        if (window.navigator.msPointerEnabled) {
          this.interactionDOMElement.style["-ms-content-zooming"] = "";
          this.interactionDOMElement.style["-ms-touch-action"] = "";
        } else if (this.supportsPointerEvents) {
          this.interactionDOMElement.style["touch-action"] = "";
        }
        if (this.supportsPointerEvents) {
          window.document.removeEventListener("pointermove", this.onPointerMove, true);
          this.interactionDOMElement.removeEventListener("pointerdown", this.onPointerDown, true);
          this.interactionDOMElement.removeEventListener("pointerleave", this.onPointerOut, true);
          this.interactionDOMElement.removeEventListener("pointerover", this.onPointerOver, true);
          window.removeEventListener("pointercancel", this.onPointerCancel, true);
          window.removeEventListener("pointerup", this.onPointerUp, true);
        } else {
          window.document.removeEventListener("mousemove", this.onPointerMove, true);
          this.interactionDOMElement.removeEventListener("mousedown", this.onPointerDown, true);
          this.interactionDOMElement.removeEventListener("mouseout", this.onPointerOut, true);
          this.interactionDOMElement.removeEventListener("mouseover", this.onPointerOver, true);
          window.removeEventListener("mouseup", this.onPointerUp, true);
        }
        if (this.supportsTouchEvents) {
          this.interactionDOMElement.removeEventListener("touchstart", this.onPointerDown, true);
          this.interactionDOMElement.removeEventListener("touchcancel", this.onPointerCancel, true);
          this.interactionDOMElement.removeEventListener("touchend", this.onPointerUp, true);
          this.interactionDOMElement.removeEventListener("touchmove", this.onPointerMove, true);
        }
        this.interactionDOMElement = null;
        this.eventsAdded = false;
      };
      InteractionManager2.prototype.update = function update(deltaTime) {
        this._deltaTime += deltaTime;
        if (this._deltaTime < this.interactionFrequency) {
          return;
        }
        this._deltaTime = 0;
        if (!this.interactionDOMElement) {
          return;
        }
        if (this.didMove) {
          this.didMove = false;
          return;
        }
        this.cursor = null;
        for (var k in this.activeInteractionData) {
          if (this.activeInteractionData.hasOwnProperty(k)) {
            var interactionData = this.activeInteractionData[k];
            if (interactionData.originalEvent && interactionData.pointerType !== "touch") {
              var interactionEvent = this.configureInteractionEventForDOMEvent(this.eventData, interactionData.originalEvent, interactionData);
              this.processInteractive(interactionEvent, this.renderer._lastObjectRendered, this.processPointerOverOut, true);
            }
          }
        }
        this.setCursorMode(this.cursor);
      };
      InteractionManager2.prototype.setCursorMode = function setCursorMode(mode) {
        mode = mode || "default";
        if (this.currentCursorMode === mode) {
          return;
        }
        this.currentCursorMode = mode;
        var style = this.cursorStyles[mode];
        if (style) {
          switch (typeof style === "undefined" ? "undefined" : _typeof(style)) {
            case "string":
              this.interactionDOMElement.style.cursor = style;
              break;
            case "function":
              style(mode);
              break;
            case "object":
              Object.assign(this.interactionDOMElement.style, style);
              break;
          }
        } else if (typeof mode === "string" && !Object.prototype.hasOwnProperty.call(this.cursorStyles, mode)) {
          this.interactionDOMElement.style.cursor = mode;
        }
      };
      InteractionManager2.prototype.dispatchEvent = function dispatchEvent(displayObject, eventString, eventData) {
        if (!eventData.stopped) {
          eventData.currentTarget = displayObject;
          eventData.type = eventString;
          displayObject.emit(eventString, eventData);
          if (displayObject[eventString]) {
            displayObject[eventString](eventData);
          }
        }
      };
      InteractionManager2.prototype.mapPositionToPoint = function mapPositionToPoint(point, x, y) {
        var rect = void 0;
        if (!this.interactionDOMElement.parentElement) {
          rect = { x: 0, y: 0, width: 0, height: 0 };
        } else {
          rect = this.interactionDOMElement.getBoundingClientRect();
        }
        var resolutionMultiplier = navigator.isCocoonJS ? this.resolution : 1 / this.resolution;
        point.x = (x - rect.left) * (this.interactionDOMElement.width / rect.width) * resolutionMultiplier;
        point.y = (y - rect.top) * (this.interactionDOMElement.height / rect.height) * resolutionMultiplier;
      };
      InteractionManager2.prototype.processInteractive = function processInteractive(interactionEvent, displayObject, func, hitTest, interactive) {
        if (!displayObject || !displayObject.visible) {
          return false;
        }
        var point = interactionEvent.data.global;
        interactive = displayObject.interactive || interactive;
        var hit = false;
        var interactiveParent = interactive;
        var hitTestChildren = true;
        if (displayObject.hitArea) {
          if (hitTest) {
            displayObject.worldTransform.applyInverse(point, this._tempPoint);
            if (!displayObject.hitArea.contains(this._tempPoint.x, this._tempPoint.y)) {
              hitTest = false;
              hitTestChildren = false;
            } else {
              hit = true;
            }
          }
          interactiveParent = false;
        } else if (displayObject._mask) {
          if (hitTest) {
            if (!displayObject._mask.containsPoint(point)) {
              hitTest = false;
              hitTestChildren = false;
            }
          }
        }
        if (hitTestChildren && displayObject.interactiveChildren && displayObject.children) {
          var children = displayObject.children;
          for (var i = children.length - 1; i >= 0; i--) {
            var child = children[i];
            var childHit = this.processInteractive(interactionEvent, child, func, hitTest, interactiveParent);
            if (childHit) {
              if (!child.parent) {
                continue;
              }
              interactiveParent = false;
              if (childHit) {
                if (interactionEvent.target) {
                  hitTest = false;
                }
                hit = true;
              }
            }
          }
        }
        if (interactive) {
          if (hitTest && !interactionEvent.target) {
            if (!displayObject.hitArea && displayObject.containsPoint) {
              if (displayObject.containsPoint(point)) {
                hit = true;
              }
            }
          }
          if (displayObject.interactive) {
            if (hit && !interactionEvent.target) {
              interactionEvent.target = displayObject;
            }
            if (func) {
              func(interactionEvent, displayObject, !!hit);
            }
          }
        }
        return hit;
      };
      InteractionManager2.prototype.onPointerDown = function onPointerDown(originalEvent) {
        if (this.supportsTouchEvents && originalEvent.pointerType === "touch")
          return;
        var events = this.normalizeToPointerData(originalEvent);
        if (this.autoPreventDefault && events[0].isNormalized) {
          originalEvent.preventDefault();
        }
        var eventLen = events.length;
        for (var i = 0; i < eventLen; i++) {
          var event = events[i];
          var interactionData = this.getInteractionDataForPointerId(event);
          var interactionEvent = this.configureInteractionEventForDOMEvent(this.eventData, event, interactionData);
          interactionEvent.data.originalEvent = originalEvent;
          this.processInteractive(interactionEvent, this.renderer._lastObjectRendered, this.processPointerDown, true);
          this.emit("pointerdown", interactionEvent);
          if (event.pointerType === "touch") {
            this.emit("touchstart", interactionEvent);
          } else if (event.pointerType === "mouse" || event.pointerType === "pen") {
            var isRightButton = event.button === 2;
            this.emit(isRightButton ? "rightdown" : "mousedown", this.eventData);
          }
        }
      };
      InteractionManager2.prototype.processPointerDown = function processPointerDown(interactionEvent, displayObject, hit) {
        var data = interactionEvent.data;
        var id = interactionEvent.data.identifier;
        if (hit) {
          if (!displayObject.trackedPointers[id]) {
            displayObject.trackedPointers[id] = new _InteractionTrackingData2.default(id);
          }
          this.dispatchEvent(displayObject, "pointerdown", interactionEvent);
          if (data.pointerType === "touch") {
            this.dispatchEvent(displayObject, "touchstart", interactionEvent);
          } else if (data.pointerType === "mouse" || data.pointerType === "pen") {
            var isRightButton = data.button === 2;
            if (isRightButton) {
              displayObject.trackedPointers[id].rightDown = true;
            } else {
              displayObject.trackedPointers[id].leftDown = true;
            }
            this.dispatchEvent(displayObject, isRightButton ? "rightdown" : "mousedown", interactionEvent);
          }
        }
      };
      InteractionManager2.prototype.onPointerComplete = function onPointerComplete(originalEvent, cancelled, func) {
        var events = this.normalizeToPointerData(originalEvent);
        var eventLen = events.length;
        var eventAppend = originalEvent.target !== this.interactionDOMElement ? "outside" : "";
        for (var i = 0; i < eventLen; i++) {
          var event = events[i];
          var interactionData = this.getInteractionDataForPointerId(event);
          var interactionEvent = this.configureInteractionEventForDOMEvent(this.eventData, event, interactionData);
          interactionEvent.data.originalEvent = originalEvent;
          this.processInteractive(interactionEvent, this.renderer._lastObjectRendered, func, cancelled || !eventAppend);
          this.emit(cancelled ? "pointercancel" : "pointerup" + eventAppend, interactionEvent);
          if (event.pointerType === "mouse" || event.pointerType === "pen") {
            var isRightButton = event.button === 2;
            this.emit(isRightButton ? "rightup" + eventAppend : "mouseup" + eventAppend, interactionEvent);
          } else if (event.pointerType === "touch") {
            this.emit(cancelled ? "touchcancel" : "touchend" + eventAppend, interactionEvent);
            this.releaseInteractionDataForPointerId(event.pointerId, interactionData);
          }
        }
      };
      InteractionManager2.prototype.onPointerCancel = function onPointerCancel(event) {
        if (this.supportsTouchEvents && event.pointerType === "touch")
          return;
        this.onPointerComplete(event, true, this.processPointerCancel);
      };
      InteractionManager2.prototype.processPointerCancel = function processPointerCancel(interactionEvent, displayObject) {
        var data = interactionEvent.data;
        var id = interactionEvent.data.identifier;
        if (displayObject.trackedPointers[id] !== void 0) {
          delete displayObject.trackedPointers[id];
          this.dispatchEvent(displayObject, "pointercancel", interactionEvent);
          if (data.pointerType === "touch") {
            this.dispatchEvent(displayObject, "touchcancel", interactionEvent);
          }
        }
      };
      InteractionManager2.prototype.onPointerUp = function onPointerUp(event) {
        if (this.supportsTouchEvents && event.pointerType === "touch")
          return;
        this.onPointerComplete(event, false, this.processPointerUp);
      };
      InteractionManager2.prototype.processPointerUp = function processPointerUp(interactionEvent, displayObject, hit) {
        var data = interactionEvent.data;
        var id = interactionEvent.data.identifier;
        var trackingData = displayObject.trackedPointers[id];
        var isTouch = data.pointerType === "touch";
        var isMouse = data.pointerType === "mouse" || data.pointerType === "pen";
        var isMouseTap = false;
        if (isMouse) {
          var isRightButton = data.button === 2;
          var flags = _InteractionTrackingData2.default.FLAGS;
          var test = isRightButton ? flags.RIGHT_DOWN : flags.LEFT_DOWN;
          var isDown = trackingData !== void 0 && trackingData.flags & test;
          if (hit) {
            this.dispatchEvent(displayObject, isRightButton ? "rightup" : "mouseup", interactionEvent);
            if (isDown) {
              this.dispatchEvent(displayObject, isRightButton ? "rightclick" : "click", interactionEvent);
              isMouseTap = true;
            }
          } else if (isDown) {
            this.dispatchEvent(displayObject, isRightButton ? "rightupoutside" : "mouseupoutside", interactionEvent);
          }
          if (trackingData) {
            if (isRightButton) {
              trackingData.rightDown = false;
            } else {
              trackingData.leftDown = false;
            }
          }
        }
        if (hit) {
          this.dispatchEvent(displayObject, "pointerup", interactionEvent);
          if (isTouch)
            this.dispatchEvent(displayObject, "touchend", interactionEvent);
          if (trackingData) {
            if (!isMouse || isMouseTap) {
              this.dispatchEvent(displayObject, "pointertap", interactionEvent);
            }
            if (isTouch) {
              this.dispatchEvent(displayObject, "tap", interactionEvent);
              trackingData.over = false;
            }
          }
        } else if (trackingData) {
          this.dispatchEvent(displayObject, "pointerupoutside", interactionEvent);
          if (isTouch)
            this.dispatchEvent(displayObject, "touchendoutside", interactionEvent);
        }
        if (trackingData && trackingData.none) {
          delete displayObject.trackedPointers[id];
        }
      };
      InteractionManager2.prototype.onPointerMove = function onPointerMove(originalEvent) {
        if (this.supportsTouchEvents && originalEvent.pointerType === "touch")
          return;
        var events = this.normalizeToPointerData(originalEvent);
        if (events[0].pointerType === "mouse" || events[0].pointerType === "pen") {
          this.didMove = true;
          this.cursor = null;
        }
        var eventLen = events.length;
        for (var i = 0; i < eventLen; i++) {
          var event = events[i];
          var interactionData = this.getInteractionDataForPointerId(event);
          var interactionEvent = this.configureInteractionEventForDOMEvent(this.eventData, event, interactionData);
          interactionEvent.data.originalEvent = originalEvent;
          var interactive = event.pointerType === "touch" ? this.moveWhenInside : true;
          this.processInteractive(interactionEvent, this.renderer._lastObjectRendered, this.processPointerMove, interactive);
          this.emit("pointermove", interactionEvent);
          if (event.pointerType === "touch")
            this.emit("touchmove", interactionEvent);
          if (event.pointerType === "mouse" || event.pointerType === "pen")
            this.emit("mousemove", interactionEvent);
        }
        if (events[0].pointerType === "mouse") {
          this.setCursorMode(this.cursor);
        }
      };
      InteractionManager2.prototype.processPointerMove = function processPointerMove(interactionEvent, displayObject, hit) {
        var data = interactionEvent.data;
        var isTouch = data.pointerType === "touch";
        var isMouse = data.pointerType === "mouse" || data.pointerType === "pen";
        if (isMouse) {
          this.processPointerOverOut(interactionEvent, displayObject, hit);
        }
        if (!this.moveWhenInside || hit) {
          this.dispatchEvent(displayObject, "pointermove", interactionEvent);
          if (isTouch)
            this.dispatchEvent(displayObject, "touchmove", interactionEvent);
          if (isMouse)
            this.dispatchEvent(displayObject, "mousemove", interactionEvent);
        }
      };
      InteractionManager2.prototype.onPointerOut = function onPointerOut(originalEvent) {
        if (this.supportsTouchEvents && originalEvent.pointerType === "touch")
          return;
        var events = this.normalizeToPointerData(originalEvent);
        var event = events[0];
        if (event.pointerType === "mouse") {
          this.mouseOverRenderer = false;
          this.setCursorMode(null);
        }
        var interactionData = this.getInteractionDataForPointerId(event);
        var interactionEvent = this.configureInteractionEventForDOMEvent(this.eventData, event, interactionData);
        interactionEvent.data.originalEvent = event;
        this.processInteractive(interactionEvent, this.renderer._lastObjectRendered, this.processPointerOverOut, false);
        this.emit("pointerout", interactionEvent);
        if (event.pointerType === "mouse" || event.pointerType === "pen") {
          this.emit("mouseout", interactionEvent);
        } else {
          this.releaseInteractionDataForPointerId(interactionData.identifier);
        }
      };
      InteractionManager2.prototype.processPointerOverOut = function processPointerOverOut(interactionEvent, displayObject, hit) {
        var data = interactionEvent.data;
        var id = interactionEvent.data.identifier;
        var isMouse = data.pointerType === "mouse" || data.pointerType === "pen";
        var trackingData = displayObject.trackedPointers[id];
        if (hit && !trackingData) {
          trackingData = displayObject.trackedPointers[id] = new _InteractionTrackingData2.default(id);
        }
        if (trackingData === void 0)
          return;
        if (hit && this.mouseOverRenderer) {
          if (!trackingData.over) {
            trackingData.over = true;
            this.dispatchEvent(displayObject, "pointerover", interactionEvent);
            if (isMouse) {
              this.dispatchEvent(displayObject, "mouseover", interactionEvent);
            }
          }
          if (isMouse && this.cursor === null) {
            this.cursor = displayObject.cursor;
          }
        } else if (trackingData.over) {
          trackingData.over = false;
          this.dispatchEvent(displayObject, "pointerout", this.eventData);
          if (isMouse) {
            this.dispatchEvent(displayObject, "mouseout", interactionEvent);
          }
          if (trackingData.none) {
            delete displayObject.trackedPointers[id];
          }
        }
      };
      InteractionManager2.prototype.onPointerOver = function onPointerOver(originalEvent) {
        var events = this.normalizeToPointerData(originalEvent);
        var event = events[0];
        var interactionData = this.getInteractionDataForPointerId(event);
        var interactionEvent = this.configureInteractionEventForDOMEvent(this.eventData, event, interactionData);
        interactionEvent.data.originalEvent = event;
        if (event.pointerType === "mouse") {
          this.mouseOverRenderer = true;
        }
        this.emit("pointerover", interactionEvent);
        if (event.pointerType === "mouse" || event.pointerType === "pen") {
          this.emit("mouseover", interactionEvent);
        }
      };
      InteractionManager2.prototype.getInteractionDataForPointerId = function getInteractionDataForPointerId(event) {
        var pointerId = event.pointerId;
        var interactionData = void 0;
        if (pointerId === MOUSE_POINTER_ID || event.pointerType === "mouse") {
          interactionData = this.mouse;
        } else if (this.activeInteractionData[pointerId]) {
          interactionData = this.activeInteractionData[pointerId];
        } else {
          interactionData = this.interactionDataPool.pop() || new _InteractionData2.default();
          interactionData.identifier = pointerId;
          this.activeInteractionData[pointerId] = interactionData;
        }
        interactionData.copyEvent(event);
        return interactionData;
      };
      InteractionManager2.prototype.releaseInteractionDataForPointerId = function releaseInteractionDataForPointerId(pointerId) {
        var interactionData = this.activeInteractionData[pointerId];
        if (interactionData) {
          delete this.activeInteractionData[pointerId];
          interactionData.reset();
          this.interactionDataPool.push(interactionData);
        }
      };
      InteractionManager2.prototype.configureInteractionEventForDOMEvent = function configureInteractionEventForDOMEvent(interactionEvent, pointerEvent, interactionData) {
        interactionEvent.data = interactionData;
        this.mapPositionToPoint(interactionData.global, pointerEvent.clientX, pointerEvent.clientY);
        if (navigator.isCocoonJS && pointerEvent.pointerType === "touch") {
          interactionData.global.x = interactionData.global.x / this.resolution;
          interactionData.global.y = interactionData.global.y / this.resolution;
        }
        if (pointerEvent.pointerType === "touch") {
          pointerEvent.globalX = interactionData.global.x;
          pointerEvent.globalY = interactionData.global.y;
        }
        interactionData.originalEvent = pointerEvent;
        interactionEvent.reset();
        return interactionEvent;
      };
      InteractionManager2.prototype.normalizeToPointerData = function normalizeToPointerData(event) {
        var normalizedEvents = [];
        if (this.supportsTouchEvents && event instanceof TouchEvent) {
          for (var i = 0, li = event.changedTouches.length; i < li; i++) {
            var touch = event.changedTouches[i];
            if (typeof touch.button === "undefined")
              touch.button = event.touches.length ? 1 : 0;
            if (typeof touch.buttons === "undefined")
              touch.buttons = event.touches.length ? 1 : 0;
            if (typeof touch.isPrimary === "undefined") {
              touch.isPrimary = event.touches.length === 1 && event.type === "touchstart";
            }
            if (typeof touch.width === "undefined")
              touch.width = touch.radiusX || 1;
            if (typeof touch.height === "undefined")
              touch.height = touch.radiusY || 1;
            if (typeof touch.tiltX === "undefined")
              touch.tiltX = 0;
            if (typeof touch.tiltY === "undefined")
              touch.tiltY = 0;
            if (typeof touch.pointerType === "undefined")
              touch.pointerType = "touch";
            if (typeof touch.pointerId === "undefined")
              touch.pointerId = touch.identifier || 0;
            if (typeof touch.pressure === "undefined")
              touch.pressure = touch.force || 0.5;
            if (typeof touch.twist === "undefined")
              touch.twist = 0;
            if (typeof touch.tangentialPressure === "undefined")
              touch.tangentialPressure = 0;
            if (typeof touch.layerX === "undefined")
              touch.layerX = touch.offsetX = touch.clientX;
            if (typeof touch.layerY === "undefined")
              touch.layerY = touch.offsetY = touch.clientY;
            touch.isNormalized = true;
            normalizedEvents.push(touch);
          }
        } else if (event instanceof MouseEvent && (!this.supportsPointerEvents || !(event instanceof window.PointerEvent))) {
          if (typeof event.isPrimary === "undefined")
            event.isPrimary = true;
          if (typeof event.width === "undefined")
            event.width = 1;
          if (typeof event.height === "undefined")
            event.height = 1;
          if (typeof event.tiltX === "undefined")
            event.tiltX = 0;
          if (typeof event.tiltY === "undefined")
            event.tiltY = 0;
          if (typeof event.pointerType === "undefined")
            event.pointerType = "mouse";
          if (typeof event.pointerId === "undefined")
            event.pointerId = MOUSE_POINTER_ID;
          if (typeof event.pressure === "undefined")
            event.pressure = 0.5;
          if (typeof event.twist === "undefined")
            event.twist = 0;
          if (typeof event.tangentialPressure === "undefined")
            event.tangentialPressure = 0;
          event.isNormalized = true;
          normalizedEvents.push(event);
        } else {
          normalizedEvents.push(event);
        }
        return normalizedEvents;
      };
      InteractionManager2.prototype.destroy = function destroy() {
        this.removeEvents();
        this.removeAllListeners();
        this.renderer = null;
        this.mouse = null;
        this.eventData = null;
        this.interactionDOMElement = null;
        this.onPointerDown = null;
        this.processPointerDown = null;
        this.onPointerUp = null;
        this.processPointerUp = null;
        this.onPointerCancel = null;
        this.processPointerCancel = null;
        this.onPointerMove = null;
        this.processPointerMove = null;
        this.onPointerOut = null;
        this.processPointerOverOut = null;
        this.onPointerOver = null;
        this._tempPoint = null;
      };
      return InteractionManager2;
    }(_eventemitter2.default);
    exports.default = InteractionManager;
    core.WebGLRenderer.registerPlugin("interaction", InteractionManager);
    core.CanvasRenderer.registerPlugin("interaction", InteractionManager);
  }
});

// node_modules/pixi.js/lib/interaction/index.js
var require_interaction = __commonJS({
  "node_modules/pixi.js/lib/interaction/index.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _InteractionData = require_InteractionData();
    Object.defineProperty(exports, "InteractionData", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_InteractionData).default;
      }
    });
    var _InteractionManager = require_InteractionManager();
    Object.defineProperty(exports, "InteractionManager", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_InteractionManager).default;
      }
    });
    var _interactiveTarget = require_interactiveTarget();
    Object.defineProperty(exports, "interactiveTarget", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_interactiveTarget).default;
      }
    });
    var _InteractionTrackingData = require_InteractionTrackingData();
    Object.defineProperty(exports, "InteractionTrackingData", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_InteractionTrackingData).default;
      }
    });
    var _InteractionEvent = require_InteractionEvent();
    Object.defineProperty(exports, "InteractionEvent", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_InteractionEvent).default;
      }
    });
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
  }
});

// node_modules/mini-signals/src/mini-signals.js
var mini_signals_exports = {};
__export(mini_signals_exports, {
  MiniSignal: () => MiniSignal,
  MiniSignalBinding: () => MiniSignalBinding,
  default: () => mini_signals_default
});
function _addMiniSignalBinding(self, node) {
  if (!self._head) {
    self._head = node;
    self._tail = node;
  } else {
    self._tail._next = node;
    node._prev = self._tail;
    self._tail = node;
  }
  node._owner = self;
  return node;
}
var MiniSignalBinding, MiniSignal, mini_signals_default;
var init_mini_signals = __esm({
  "node_modules/mini-signals/src/mini-signals.js"() {
    MiniSignalBinding = class {
      /**
      * MiniSignalBinding constructor.
      * @constructs MiniSignalBinding
      * @param {Function} fn Event handler to be called.
      * @param {Boolean} [once=false] Should this listener be removed after dispatch
      * @param {Mixed} [thisArg] The context of the callback function.
      * @api private
      */
      constructor(fn, once = false, thisArg) {
        this._fn = fn;
        this._once = once;
        this._thisArg = thisArg;
        this._next = this._prev = this._owner = null;
      }
      detach() {
        if (this._owner === null)
          return false;
        this._owner.detach(this);
        return true;
      }
    };
    MiniSignal = class {
      /**
      * MiniSignal constructor.
      * @constructs MiniSignal
      * @api public
      *
      * @example
      * let mySignal = new MiniSignal();
      * let binding = mySignal.add(onSignal);
      * mySignal.dispatch('foo', 'bar');
      * mySignal.detach(binding);
      */
      constructor() {
        this._head = this._tail = void 0;
      }
      /**
      * Return an array of attached MiniSignalBinding.
      *
      * @param {Boolean} [exists=false] We only need to know if there are handlers.
      * @returns {MiniSignalBinding[]|Boolean} Array of attached MiniSignalBinding or Boolean if called with exists = true
      * @api public
      */
      handlers(exists = false) {
        let node = this._head;
        if (exists)
          return !!node;
        const ee = [];
        while (node) {
          ee.push(node);
          node = node._next;
        }
        return ee;
      }
      /**
      * Return true if node is a MiniSignalBinding attached to this MiniSignal
      *
      * @param {MiniSignalBinding} node Node to check.
      * @returns {Boolean} True if node is attache to mini-signal
      * @api public
      */
      has(node) {
        if (!(node instanceof MiniSignalBinding)) {
          throw new Error("MiniSignal#has(): First arg must be a MiniSignalBinding object.");
        }
        return node._owner === this;
      }
      /**
      * Dispaches a signal to all registered listeners.
      *
      * @returns {Boolean} Indication if we've emitted an event.
      * @api public
      */
      dispatch() {
        let node = this._head;
        if (!node)
          return false;
        while (node) {
          if (node._once)
            this.detach(node);
          node._fn.apply(node._thisArg, arguments);
          node = node._next;
        }
        return true;
      }
      /**
      * Register a new listener.
      *
      * @param {Function} fn Callback function.
      * @param {Mixed} [thisArg] The context of the callback function.
      * @returns {MiniSignalBinding} The MiniSignalBinding node that was added.
      * @api public
      */
      add(fn, thisArg = null) {
        if (typeof fn !== "function") {
          throw new Error("MiniSignal#add(): First arg must be a Function.");
        }
        return _addMiniSignalBinding(this, new MiniSignalBinding(fn, false, thisArg));
      }
      /**
      * Register a new listener that will be executed only once.
      *
      * @param {Function} fn Callback function.
      * @param {Mixed} [thisArg] The context of the callback function.
      * @returns {MiniSignalBinding} The MiniSignalBinding node that was added.
      * @api public
      */
      once(fn, thisArg = null) {
        if (typeof fn !== "function") {
          throw new Error("MiniSignal#once(): First arg must be a Function.");
        }
        return _addMiniSignalBinding(this, new MiniSignalBinding(fn, true, thisArg));
      }
      /**
      * Remove binding object.
      *
      * @param {MiniSignalBinding} node The binding node that will be removed.
      * @returns {MiniSignal} The instance on which this method was called.
      * @api public */
      detach(node) {
        if (!(node instanceof MiniSignalBinding)) {
          throw new Error("MiniSignal#detach(): First arg must be a MiniSignalBinding object.");
        }
        if (node._owner !== this)
          return this;
        if (node._prev)
          node._prev._next = node._next;
        if (node._next)
          node._next._prev = node._prev;
        if (node === this._head) {
          this._head = node._next;
          if (node._next === null) {
            this._tail = null;
          }
        } else if (node === this._tail) {
          this._tail = node._prev;
          this._tail._next = null;
        }
        node._owner = null;
        return this;
      }
      /**
      * Detach all listeners.
      *
      * @returns {MiniSignal} The instance on which this method was called.
      * @api public
      */
      detachAll() {
        let node = this._head;
        if (!node)
          return this;
        this._head = this._tail = null;
        while (node) {
          node._owner = null;
          node = node._next;
        }
        return this;
      }
    };
    mini_signals_default = MiniSignal;
  }
});

// node_modules/parse-uri/src/index.js
var require_src2 = __commonJS({
  "node_modules/parse-uri/src/index.js"(exports, module) {
    "use strict";
    module.exports = (str, opts = {}) => {
      if (!str)
        return void 0;
      const o = {
        key: [
          "source",
          "protocol",
          "authority",
          "userInfo",
          "user",
          "password",
          "host",
          "port",
          "relative",
          "path",
          "directory",
          "file",
          "query",
          "anchor"
        ],
        q: {
          name: "queryKey",
          parser: /(?:^|&)([^&=]*)=?([^&]*)/g
        },
        parser: {
          strict: /^(?:([^:/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:/?#]*)(?::(\d*))?))?((((?:[^?#/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
          loose: /^(?:(?![^:@]+:[^:@/]*@)([^:/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#/]*\.[^?#/.]+(?:[?#]|$)))*\/?)?([^?#/]*))(?:\?([^#]*))?(?:#(.*))?)/
        }
      };
      const m = o.parser[opts.strictMode ? "strict" : "loose"].exec(str);
      const uri = {};
      let i = 14;
      while (i--)
        uri[o.key[i]] = m[i] || "";
      uri[o.q.name] = {};
      uri[o.key[12]].replace(o.q.parser, function($0, $1, $2) {
        if ($1)
          uri[o.q.name][$1] = $2;
      });
      return uri;
    };
  }
});

// node_modules/resource-loader/lib/async.js
var require_async = __commonJS({
  "node_modules/resource-loader/lib/async.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.eachSeries = eachSeries;
    exports.queue = queue;
    function _noop() {
    }
    function eachSeries(array, iterator, callback, deferNext) {
      var i = 0;
      var len = array.length;
      (function next(err) {
        if (err || i === len) {
          if (callback) {
            callback(err);
          }
          return;
        }
        if (deferNext) {
          setTimeout(function() {
            iterator(array[i++], next);
          }, 1);
        } else {
          iterator(array[i++], next);
        }
      })();
    }
    function onlyOnce(fn) {
      return function onceWrapper() {
        if (fn === null) {
          throw new Error("Callback was already called.");
        }
        var callFn = fn;
        fn = null;
        callFn.apply(this, arguments);
      };
    }
    function queue(worker, concurrency) {
      if (concurrency == null) {
        concurrency = 1;
      } else if (concurrency === 0) {
        throw new Error("Concurrency must not be zero");
      }
      var workers = 0;
      var q = {
        _tasks: [],
        concurrency,
        saturated: _noop,
        unsaturated: _noop,
        buffer: concurrency / 4,
        empty: _noop,
        drain: _noop,
        error: _noop,
        started: false,
        paused: false,
        push: function push(data, callback) {
          _insert(data, false, callback);
        },
        kill: function kill() {
          workers = 0;
          q.drain = _noop;
          q.started = false;
          q._tasks = [];
        },
        unshift: function unshift(data, callback) {
          _insert(data, true, callback);
        },
        process: function process() {
          while (!q.paused && workers < q.concurrency && q._tasks.length) {
            var task = q._tasks.shift();
            if (q._tasks.length === 0) {
              q.empty();
            }
            workers += 1;
            if (workers === q.concurrency) {
              q.saturated();
            }
            worker(task.data, onlyOnce(_next(task)));
          }
        },
        length: function length() {
          return q._tasks.length;
        },
        running: function running() {
          return workers;
        },
        idle: function idle() {
          return q._tasks.length + workers === 0;
        },
        pause: function pause() {
          if (q.paused === true) {
            return;
          }
          q.paused = true;
        },
        resume: function resume() {
          if (q.paused === false) {
            return;
          }
          q.paused = false;
          for (var w = 1; w <= q.concurrency; w++) {
            q.process();
          }
        }
      };
      function _insert(data, insertAtFront, callback) {
        if (callback != null && typeof callback !== "function") {
          throw new Error("task callback must be a function");
        }
        q.started = true;
        if (data == null && q.idle()) {
          setTimeout(function() {
            return q.drain();
          }, 1);
          return;
        }
        var item = {
          data,
          callback: typeof callback === "function" ? callback : _noop
        };
        if (insertAtFront) {
          q._tasks.unshift(item);
        } else {
          q._tasks.push(item);
        }
        setTimeout(function() {
          return q.process();
        }, 1);
      }
      function _next(task) {
        return function next() {
          workers -= 1;
          task.callback.apply(task, arguments);
          if (arguments[0] != null) {
            q.error(arguments[0], task.data);
          }
          if (workers <= q.concurrency - q.buffer) {
            q.unsaturated();
          }
          if (q.idle()) {
            q.drain();
          }
          q.process();
        };
      }
      return q;
    }
  }
});

// node_modules/resource-loader/lib/Resource.js
var require_Resource = __commonJS({
  "node_modules/resource-loader/lib/Resource.js"(exports, module) {
    "use strict";
    exports.__esModule = true;
    exports.Resource = void 0;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _parseUri = require_src2();
    var _parseUri2 = _interopRequireDefault(_parseUri);
    var _miniSignals = (init_mini_signals(), __toCommonJS(mini_signals_exports));
    var _miniSignals2 = _interopRequireDefault(_miniSignals);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var useXdr = !!(window.XDomainRequest && !("withCredentials" in new XMLHttpRequest()));
    var tempAnchor = null;
    var STATUS_NONE = 0;
    var STATUS_OK = 200;
    var STATUS_EMPTY = 204;
    var STATUS_IE_BUG_EMPTY = 1223;
    var STATUS_TYPE_OK = 2;
    function _noop() {
    }
    var Resource = exports.Resource = function() {
      Resource2.setExtensionLoadType = function setExtensionLoadType(extname, loadType) {
        setExtMap(Resource2._loadTypeMap, extname, loadType);
      };
      Resource2.setExtensionXhrType = function setExtensionXhrType(extname, xhrType) {
        setExtMap(Resource2._xhrTypeMap, extname, xhrType);
      };
      function Resource2(name, url, options) {
        _classCallCheck(this, Resource2);
        if (typeof name !== "string" || typeof url !== "string") {
          throw new Error("Both name and url are required for constructing a resource.");
        }
        options = options || {};
        this._flags = 0;
        this._setFlag(Resource2.STATUS_FLAGS.DATA_URL, url.indexOf("data:") === 0);
        this.name = name;
        this.url = url;
        this.extension = this._getExtension();
        this.data = null;
        this.crossOrigin = options.crossOrigin === true ? "anonymous" : options.crossOrigin;
        this.timeout = options.timeout || 0;
        this.loadType = options.loadType || this._determineLoadType();
        this.xhrType = options.xhrType;
        this.metadata = options.metadata || {};
        this.error = null;
        this.xhr = null;
        this.children = [];
        this.type = Resource2.TYPE.UNKNOWN;
        this.progressChunk = 0;
        this._dequeue = _noop;
        this._onLoadBinding = null;
        this._elementTimer = 0;
        this._boundComplete = this.complete.bind(this);
        this._boundOnError = this._onError.bind(this);
        this._boundOnProgress = this._onProgress.bind(this);
        this._boundOnTimeout = this._onTimeout.bind(this);
        this._boundXhrOnError = this._xhrOnError.bind(this);
        this._boundXhrOnTimeout = this._xhrOnTimeout.bind(this);
        this._boundXhrOnAbort = this._xhrOnAbort.bind(this);
        this._boundXhrOnLoad = this._xhrOnLoad.bind(this);
        this.onStart = new _miniSignals2.default();
        this.onProgress = new _miniSignals2.default();
        this.onComplete = new _miniSignals2.default();
        this.onAfterMiddleware = new _miniSignals2.default();
      }
      Resource2.prototype.complete = function complete() {
        this._clearEvents();
        this._finish();
      };
      Resource2.prototype.abort = function abort(message) {
        if (this.error) {
          return;
        }
        this.error = new Error(message);
        this._clearEvents();
        if (this.xhr) {
          this.xhr.abort();
        } else if (this.xdr) {
          this.xdr.abort();
        } else if (this.data) {
          if (this.data.src) {
            this.data.src = Resource2.EMPTY_GIF;
          } else {
            while (this.data.firstChild) {
              this.data.removeChild(this.data.firstChild);
            }
          }
        }
        this._finish();
      };
      Resource2.prototype.load = function load(cb) {
        var _this = this;
        if (this.isLoading) {
          return;
        }
        if (this.isComplete) {
          if (cb) {
            setTimeout(function() {
              return cb(_this);
            }, 1);
          }
          return;
        } else if (cb) {
          this.onComplete.once(cb);
        }
        this._setFlag(Resource2.STATUS_FLAGS.LOADING, true);
        this.onStart.dispatch(this);
        if (this.crossOrigin === false || typeof this.crossOrigin !== "string") {
          this.crossOrigin = this._determineCrossOrigin(this.url);
        }
        switch (this.loadType) {
          case Resource2.LOAD_TYPE.IMAGE:
            this.type = Resource2.TYPE.IMAGE;
            this._loadElement("image");
            break;
          case Resource2.LOAD_TYPE.AUDIO:
            this.type = Resource2.TYPE.AUDIO;
            this._loadSourceElement("audio");
            break;
          case Resource2.LOAD_TYPE.VIDEO:
            this.type = Resource2.TYPE.VIDEO;
            this._loadSourceElement("video");
            break;
          case Resource2.LOAD_TYPE.XHR:
          default:
            if (useXdr && this.crossOrigin) {
              this._loadXdr();
            } else {
              this._loadXhr();
            }
            break;
        }
      };
      Resource2.prototype._hasFlag = function _hasFlag(flag) {
        return (this._flags & flag) !== 0;
      };
      Resource2.prototype._setFlag = function _setFlag(flag, value) {
        this._flags = value ? this._flags | flag : this._flags & ~flag;
      };
      Resource2.prototype._clearEvents = function _clearEvents() {
        clearTimeout(this._elementTimer);
        if (this.data && this.data.removeEventListener) {
          this.data.removeEventListener("error", this._boundOnError, false);
          this.data.removeEventListener("load", this._boundComplete, false);
          this.data.removeEventListener("progress", this._boundOnProgress, false);
          this.data.removeEventListener("canplaythrough", this._boundComplete, false);
        }
        if (this.xhr) {
          if (this.xhr.removeEventListener) {
            this.xhr.removeEventListener("error", this._boundXhrOnError, false);
            this.xhr.removeEventListener("timeout", this._boundXhrOnTimeout, false);
            this.xhr.removeEventListener("abort", this._boundXhrOnAbort, false);
            this.xhr.removeEventListener("progress", this._boundOnProgress, false);
            this.xhr.removeEventListener("load", this._boundXhrOnLoad, false);
          } else {
            this.xhr.onerror = null;
            this.xhr.ontimeout = null;
            this.xhr.onprogress = null;
            this.xhr.onload = null;
          }
        }
      };
      Resource2.prototype._finish = function _finish() {
        if (this.isComplete) {
          throw new Error("Complete called again for an already completed resource.");
        }
        this._setFlag(Resource2.STATUS_FLAGS.COMPLETE, true);
        this._setFlag(Resource2.STATUS_FLAGS.LOADING, false);
        this.onComplete.dispatch(this);
      };
      Resource2.prototype._loadElement = function _loadElement(type) {
        if (this.metadata.loadElement) {
          this.data = this.metadata.loadElement;
        } else if (type === "image" && typeof window.Image !== "undefined") {
          this.data = new Image();
        } else {
          this.data = document.createElement(type);
        }
        if (this.crossOrigin) {
          this.data.crossOrigin = this.crossOrigin;
        }
        if (!this.metadata.skipSource) {
          this.data.src = this.url;
        }
        this.data.addEventListener("error", this._boundOnError, false);
        this.data.addEventListener("load", this._boundComplete, false);
        this.data.addEventListener("progress", this._boundOnProgress, false);
        if (this.timeout) {
          this._elementTimer = setTimeout(this._boundOnTimeout, this.timeout);
        }
      };
      Resource2.prototype._loadSourceElement = function _loadSourceElement(type) {
        if (this.metadata.loadElement) {
          this.data = this.metadata.loadElement;
        } else if (type === "audio" && typeof window.Audio !== "undefined") {
          this.data = new Audio();
        } else {
          this.data = document.createElement(type);
        }
        if (this.data === null) {
          this.abort("Unsupported element: " + type);
          return;
        }
        if (this.crossOrigin) {
          this.data.crossOrigin = this.crossOrigin;
        }
        if (!this.metadata.skipSource) {
          if (navigator.isCocoonJS) {
            this.data.src = Array.isArray(this.url) ? this.url[0] : this.url;
          } else if (Array.isArray(this.url)) {
            var mimeTypes = this.metadata.mimeType;
            for (var i = 0; i < this.url.length; ++i) {
              this.data.appendChild(this._createSource(type, this.url[i], Array.isArray(mimeTypes) ? mimeTypes[i] : mimeTypes));
            }
          } else {
            var _mimeTypes = this.metadata.mimeType;
            this.data.appendChild(this._createSource(type, this.url, Array.isArray(_mimeTypes) ? _mimeTypes[0] : _mimeTypes));
          }
        }
        this.data.addEventListener("error", this._boundOnError, false);
        this.data.addEventListener("load", this._boundComplete, false);
        this.data.addEventListener("progress", this._boundOnProgress, false);
        this.data.addEventListener("canplaythrough", this._boundComplete, false);
        this.data.load();
        if (this.timeout) {
          this._elementTimer = setTimeout(this._boundOnTimeout, this.timeout);
        }
      };
      Resource2.prototype._loadXhr = function _loadXhr() {
        if (typeof this.xhrType !== "string") {
          this.xhrType = this._determineXhrType();
        }
        var xhr = this.xhr = new XMLHttpRequest();
        xhr.open("GET", this.url, true);
        xhr.timeout = this.timeout;
        if (this.xhrType === Resource2.XHR_RESPONSE_TYPE.JSON || this.xhrType === Resource2.XHR_RESPONSE_TYPE.DOCUMENT) {
          xhr.responseType = Resource2.XHR_RESPONSE_TYPE.TEXT;
        } else {
          xhr.responseType = this.xhrType;
        }
        xhr.addEventListener("error", this._boundXhrOnError, false);
        xhr.addEventListener("timeout", this._boundXhrOnTimeout, false);
        xhr.addEventListener("abort", this._boundXhrOnAbort, false);
        xhr.addEventListener("progress", this._boundOnProgress, false);
        xhr.addEventListener("load", this._boundXhrOnLoad, false);
        xhr.send();
      };
      Resource2.prototype._loadXdr = function _loadXdr() {
        if (typeof this.xhrType !== "string") {
          this.xhrType = this._determineXhrType();
        }
        var xdr = this.xhr = new XDomainRequest();
        xdr.timeout = this.timeout || 5e3;
        xdr.onerror = this._boundXhrOnError;
        xdr.ontimeout = this._boundXhrOnTimeout;
        xdr.onprogress = this._boundOnProgress;
        xdr.onload = this._boundXhrOnLoad;
        xdr.open("GET", this.url, true);
        setTimeout(function() {
          return xdr.send();
        }, 1);
      };
      Resource2.prototype._createSource = function _createSource(type, url, mime) {
        if (!mime) {
          mime = type + "/" + this._getExtension(url);
        }
        var source = document.createElement("source");
        source.src = url;
        source.type = mime;
        return source;
      };
      Resource2.prototype._onError = function _onError(event) {
        this.abort("Failed to load element using: " + event.target.nodeName);
      };
      Resource2.prototype._onProgress = function _onProgress(event) {
        if (event && event.lengthComputable) {
          this.onProgress.dispatch(this, event.loaded / event.total);
        }
      };
      Resource2.prototype._onTimeout = function _onTimeout() {
        this.abort("Load timed out.");
      };
      Resource2.prototype._xhrOnError = function _xhrOnError() {
        var xhr = this.xhr;
        this.abort(reqType(xhr) + " Request failed. Status: " + xhr.status + ', text: "' + xhr.statusText + '"');
      };
      Resource2.prototype._xhrOnTimeout = function _xhrOnTimeout() {
        var xhr = this.xhr;
        this.abort(reqType(xhr) + " Request timed out.");
      };
      Resource2.prototype._xhrOnAbort = function _xhrOnAbort() {
        var xhr = this.xhr;
        this.abort(reqType(xhr) + " Request was aborted by the user.");
      };
      Resource2.prototype._xhrOnLoad = function _xhrOnLoad() {
        var xhr = this.xhr;
        var text = "";
        var status = typeof xhr.status === "undefined" ? STATUS_OK : xhr.status;
        if (xhr.responseType === "" || xhr.responseType === "text" || typeof xhr.responseType === "undefined") {
          text = xhr.responseText;
        }
        if (status === STATUS_NONE && (text.length > 0 || xhr.responseType === Resource2.XHR_RESPONSE_TYPE.BUFFER)) {
          status = STATUS_OK;
        } else if (status === STATUS_IE_BUG_EMPTY) {
          status = STATUS_EMPTY;
        }
        var statusType = status / 100 | 0;
        if (statusType === STATUS_TYPE_OK) {
          if (this.xhrType === Resource2.XHR_RESPONSE_TYPE.TEXT) {
            this.data = text;
            this.type = Resource2.TYPE.TEXT;
          } else if (this.xhrType === Resource2.XHR_RESPONSE_TYPE.JSON) {
            try {
              this.data = JSON.parse(text);
              this.type = Resource2.TYPE.JSON;
            } catch (e) {
              this.abort("Error trying to parse loaded json: " + e);
              return;
            }
          } else if (this.xhrType === Resource2.XHR_RESPONSE_TYPE.DOCUMENT) {
            try {
              if (window.DOMParser) {
                var domparser = new DOMParser();
                this.data = domparser.parseFromString(text, "text/xml");
              } else {
                var div = document.createElement("div");
                div.innerHTML = text;
                this.data = div;
              }
              this.type = Resource2.TYPE.XML;
            } catch (e) {
              this.abort("Error trying to parse loaded xml: " + e);
              return;
            }
          } else {
            this.data = xhr.response || text;
          }
        } else {
          this.abort("[" + xhr.status + "] " + xhr.statusText + ": " + xhr.responseURL);
          return;
        }
        this.complete();
      };
      Resource2.prototype._determineCrossOrigin = function _determineCrossOrigin(url, loc) {
        if (url.indexOf("data:") === 0) {
          return "";
        }
        if (window.origin !== window.location.origin) {
          return "anonymous";
        }
        loc = loc || window.location;
        if (!tempAnchor) {
          tempAnchor = document.createElement("a");
        }
        tempAnchor.href = url;
        url = (0, _parseUri2.default)(tempAnchor.href, { strictMode: true });
        var samePort = !url.port && loc.port === "" || url.port === loc.port;
        var protocol = url.protocol ? url.protocol + ":" : "";
        if (url.host !== loc.hostname || !samePort || protocol !== loc.protocol) {
          return "anonymous";
        }
        return "";
      };
      Resource2.prototype._determineXhrType = function _determineXhrType() {
        return Resource2._xhrTypeMap[this.extension] || Resource2.XHR_RESPONSE_TYPE.TEXT;
      };
      Resource2.prototype._determineLoadType = function _determineLoadType() {
        return Resource2._loadTypeMap[this.extension] || Resource2.LOAD_TYPE.XHR;
      };
      Resource2.prototype._getExtension = function _getExtension() {
        var url = this.url;
        var ext = "";
        if (this.isDataUrl) {
          var slashIndex = url.indexOf("/");
          ext = url.substring(slashIndex + 1, url.indexOf(";", slashIndex));
        } else {
          var queryStart = url.indexOf("?");
          var hashStart = url.indexOf("#");
          var index = Math.min(queryStart > -1 ? queryStart : url.length, hashStart > -1 ? hashStart : url.length);
          url = url.substring(0, index);
          ext = url.substring(url.lastIndexOf(".") + 1);
        }
        return ext.toLowerCase();
      };
      Resource2.prototype._getMimeFromXhrType = function _getMimeFromXhrType(type) {
        switch (type) {
          case Resource2.XHR_RESPONSE_TYPE.BUFFER:
            return "application/octet-binary";
          case Resource2.XHR_RESPONSE_TYPE.BLOB:
            return "application/blob";
          case Resource2.XHR_RESPONSE_TYPE.DOCUMENT:
            return "application/xml";
          case Resource2.XHR_RESPONSE_TYPE.JSON:
            return "application/json";
          case Resource2.XHR_RESPONSE_TYPE.DEFAULT:
          case Resource2.XHR_RESPONSE_TYPE.TEXT:
          default:
            return "text/plain";
        }
      };
      _createClass(Resource2, [{
        key: "isDataUrl",
        get: function get() {
          return this._hasFlag(Resource2.STATUS_FLAGS.DATA_URL);
        }
        /**
         * Describes if this resource has finished loading. Is true when the resource has completely
         * loaded.
         *
         * @readonly
         * @member {boolean}
         */
      }, {
        key: "isComplete",
        get: function get() {
          return this._hasFlag(Resource2.STATUS_FLAGS.COMPLETE);
        }
        /**
         * Describes if this resource is currently loading. Is true when the resource starts loading,
         * and is false again when complete.
         *
         * @readonly
         * @member {boolean}
         */
      }, {
        key: "isLoading",
        get: function get() {
          return this._hasFlag(Resource2.STATUS_FLAGS.LOADING);
        }
      }]);
      return Resource2;
    }();
    Resource.STATUS_FLAGS = {
      NONE: 0,
      DATA_URL: 1 << 0,
      COMPLETE: 1 << 1,
      LOADING: 1 << 2
    };
    Resource.TYPE = {
      UNKNOWN: 0,
      JSON: 1,
      XML: 2,
      IMAGE: 3,
      AUDIO: 4,
      VIDEO: 5,
      TEXT: 6
    };
    Resource.LOAD_TYPE = {
      /** Uses XMLHttpRequest to load the resource. */
      XHR: 1,
      /** Uses an `Image` object to load the resource. */
      IMAGE: 2,
      /** Uses an `Audio` object to load the resource. */
      AUDIO: 3,
      /** Uses a `Video` object to load the resource. */
      VIDEO: 4
    };
    Resource.XHR_RESPONSE_TYPE = {
      /** string */
      DEFAULT: "text",
      /** ArrayBuffer */
      BUFFER: "arraybuffer",
      /** Blob */
      BLOB: "blob",
      /** Document */
      DOCUMENT: "document",
      /** Object */
      JSON: "json",
      /** String */
      TEXT: "text"
    };
    Resource._loadTypeMap = {
      // images
      gif: Resource.LOAD_TYPE.IMAGE,
      png: Resource.LOAD_TYPE.IMAGE,
      bmp: Resource.LOAD_TYPE.IMAGE,
      jpg: Resource.LOAD_TYPE.IMAGE,
      jpeg: Resource.LOAD_TYPE.IMAGE,
      tif: Resource.LOAD_TYPE.IMAGE,
      tiff: Resource.LOAD_TYPE.IMAGE,
      webp: Resource.LOAD_TYPE.IMAGE,
      tga: Resource.LOAD_TYPE.IMAGE,
      svg: Resource.LOAD_TYPE.IMAGE,
      "svg+xml": Resource.LOAD_TYPE.IMAGE,
      // for SVG data urls
      // audio
      mp3: Resource.LOAD_TYPE.AUDIO,
      ogg: Resource.LOAD_TYPE.AUDIO,
      wav: Resource.LOAD_TYPE.AUDIO,
      // videos
      mp4: Resource.LOAD_TYPE.VIDEO,
      webm: Resource.LOAD_TYPE.VIDEO
    };
    Resource._xhrTypeMap = {
      // xml
      xhtml: Resource.XHR_RESPONSE_TYPE.DOCUMENT,
      html: Resource.XHR_RESPONSE_TYPE.DOCUMENT,
      htm: Resource.XHR_RESPONSE_TYPE.DOCUMENT,
      xml: Resource.XHR_RESPONSE_TYPE.DOCUMENT,
      tmx: Resource.XHR_RESPONSE_TYPE.DOCUMENT,
      svg: Resource.XHR_RESPONSE_TYPE.DOCUMENT,
      // This was added to handle Tiled Tileset XML, but .tsx is also a TypeScript React Component.
      // Since it is way less likely for people to be loading TypeScript files instead of Tiled files,
      // this should probably be fine.
      tsx: Resource.XHR_RESPONSE_TYPE.DOCUMENT,
      // images
      gif: Resource.XHR_RESPONSE_TYPE.BLOB,
      png: Resource.XHR_RESPONSE_TYPE.BLOB,
      bmp: Resource.XHR_RESPONSE_TYPE.BLOB,
      jpg: Resource.XHR_RESPONSE_TYPE.BLOB,
      jpeg: Resource.XHR_RESPONSE_TYPE.BLOB,
      tif: Resource.XHR_RESPONSE_TYPE.BLOB,
      tiff: Resource.XHR_RESPONSE_TYPE.BLOB,
      webp: Resource.XHR_RESPONSE_TYPE.BLOB,
      tga: Resource.XHR_RESPONSE_TYPE.BLOB,
      // json
      json: Resource.XHR_RESPONSE_TYPE.JSON,
      // text
      text: Resource.XHR_RESPONSE_TYPE.TEXT,
      txt: Resource.XHR_RESPONSE_TYPE.TEXT,
      // fonts
      ttf: Resource.XHR_RESPONSE_TYPE.BUFFER,
      otf: Resource.XHR_RESPONSE_TYPE.BUFFER
    };
    Resource.EMPTY_GIF = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
    function setExtMap(map, extname, val) {
      if (extname && extname.indexOf(".") === 0) {
        extname = extname.substring(1);
      }
      if (!extname) {
        return;
      }
      map[extname] = val;
    }
    function reqType(xhr) {
      return xhr.toString().replace("object ", "");
    }
    if (typeof module !== "undefined") {
      module.exports.default = Resource;
    }
  }
});

// node_modules/resource-loader/lib/Loader.js
var require_Loader = __commonJS({
  "node_modules/resource-loader/lib/Loader.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.Loader = void 0;
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _miniSignals = (init_mini_signals(), __toCommonJS(mini_signals_exports));
    var _miniSignals2 = _interopRequireDefault(_miniSignals);
    var _parseUri = require_src2();
    var _parseUri2 = _interopRequireDefault(_parseUri);
    var _async = require_async();
    var async = _interopRequireWildcard(_async);
    var _Resource = require_Resource();
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var MAX_PROGRESS = 100;
    var rgxExtractUrlHash = /(#[\w-]+)?$/;
    var Loader = exports.Loader = function() {
      function Loader2() {
        var _this = this;
        var baseUrl = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
        var concurrency = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 10;
        _classCallCheck(this, Loader2);
        this.baseUrl = baseUrl;
        this.progress = 0;
        this.loading = false;
        this.defaultQueryString = "";
        this._beforeMiddleware = [];
        this._afterMiddleware = [];
        this._resourcesParsing = [];
        this._boundLoadResource = function(r, d) {
          return _this._loadResource(r, d);
        };
        this._queue = async.queue(this._boundLoadResource, concurrency);
        this._queue.pause();
        this.resources = {};
        this.onProgress = new _miniSignals2.default();
        this.onError = new _miniSignals2.default();
        this.onLoad = new _miniSignals2.default();
        this.onStart = new _miniSignals2.default();
        this.onComplete = new _miniSignals2.default();
        for (var i = 0; i < Loader2._defaultBeforeMiddleware.length; ++i) {
          this.pre(Loader2._defaultBeforeMiddleware[i]);
        }
        for (var _i = 0; _i < Loader2._defaultAfterMiddleware.length; ++_i) {
          this.use(Loader2._defaultAfterMiddleware[_i]);
        }
      }
      Loader2.prototype.add = function add(name, url, options, cb) {
        if (Array.isArray(name)) {
          for (var i = 0; i < name.length; ++i) {
            this.add(name[i]);
          }
          return this;
        }
        if ((typeof name === "undefined" ? "undefined" : _typeof(name)) === "object") {
          cb = url || name.callback || name.onComplete;
          options = name;
          url = name.url;
          name = name.name || name.key || name.url;
        }
        if (typeof url !== "string") {
          cb = options;
          options = url;
          url = name;
        }
        if (typeof url !== "string") {
          throw new Error("No url passed to add resource to loader.");
        }
        if (typeof options === "function") {
          cb = options;
          options = null;
        }
        if (this.loading && (!options || !options.parentResource)) {
          throw new Error("Cannot add resources while the loader is running.");
        }
        if (this.resources[name]) {
          throw new Error('Resource named "' + name + '" already exists.');
        }
        url = this._prepareUrl(url);
        this.resources[name] = new _Resource.Resource(name, url, options);
        if (typeof cb === "function") {
          this.resources[name].onAfterMiddleware.once(cb);
        }
        if (this.loading) {
          var parent = options.parentResource;
          var incompleteChildren = [];
          for (var _i2 = 0; _i2 < parent.children.length; ++_i2) {
            if (!parent.children[_i2].isComplete) {
              incompleteChildren.push(parent.children[_i2]);
            }
          }
          var fullChunk = parent.progressChunk * (incompleteChildren.length + 1);
          var eachChunk = fullChunk / (incompleteChildren.length + 2);
          parent.children.push(this.resources[name]);
          parent.progressChunk = eachChunk;
          for (var _i3 = 0; _i3 < incompleteChildren.length; ++_i3) {
            incompleteChildren[_i3].progressChunk = eachChunk;
          }
          this.resources[name].progressChunk = eachChunk;
        }
        this._queue.push(this.resources[name]);
        return this;
      };
      Loader2.prototype.pre = function pre(fn) {
        this._beforeMiddleware.push(fn);
        return this;
      };
      Loader2.prototype.use = function use(fn) {
        this._afterMiddleware.push(fn);
        return this;
      };
      Loader2.prototype.reset = function reset() {
        this.progress = 0;
        this.loading = false;
        this._queue.kill();
        this._queue.pause();
        for (var k in this.resources) {
          var res = this.resources[k];
          if (res._onLoadBinding) {
            res._onLoadBinding.detach();
          }
          if (res.isLoading) {
            res.abort();
          }
        }
        this.resources = {};
        return this;
      };
      Loader2.prototype.load = function load(cb) {
        if (typeof cb === "function") {
          this.onComplete.once(cb);
        }
        if (this.loading) {
          return this;
        }
        if (this._queue.idle()) {
          this._onStart();
          this._onComplete();
        } else {
          var numTasks = this._queue._tasks.length;
          var chunk = MAX_PROGRESS / numTasks;
          for (var i = 0; i < this._queue._tasks.length; ++i) {
            this._queue._tasks[i].data.progressChunk = chunk;
          }
          this._onStart();
          this._queue.resume();
        }
        return this;
      };
      Loader2.prototype._prepareUrl = function _prepareUrl(url) {
        var parsedUrl = (0, _parseUri2.default)(url, { strictMode: true });
        var result = void 0;
        if (parsedUrl.protocol || !parsedUrl.path || url.indexOf("//") === 0) {
          result = url;
        } else if (this.baseUrl.length && this.baseUrl.lastIndexOf("/") !== this.baseUrl.length - 1 && url.charAt(0) !== "/") {
          result = this.baseUrl + "/" + url;
        } else {
          result = this.baseUrl + url;
        }
        if (this.defaultQueryString) {
          var hash = rgxExtractUrlHash.exec(result)[0];
          result = result.substr(0, result.length - hash.length);
          if (result.indexOf("?") !== -1) {
            result += "&" + this.defaultQueryString;
          } else {
            result += "?" + this.defaultQueryString;
          }
          result += hash;
        }
        return result;
      };
      Loader2.prototype._loadResource = function _loadResource(resource, dequeue) {
        var _this2 = this;
        resource._dequeue = dequeue;
        async.eachSeries(this._beforeMiddleware, function(fn, next) {
          fn.call(_this2, resource, function() {
            next(resource.isComplete ? {} : null);
          });
        }, function() {
          if (resource.isComplete) {
            _this2._onLoad(resource);
          } else {
            resource._onLoadBinding = resource.onComplete.once(_this2._onLoad, _this2);
            resource.load();
          }
        }, true);
      };
      Loader2.prototype._onStart = function _onStart() {
        this.progress = 0;
        this.loading = true;
        this.onStart.dispatch(this);
      };
      Loader2.prototype._onComplete = function _onComplete() {
        this.progress = MAX_PROGRESS;
        this.loading = false;
        this.onComplete.dispatch(this, this.resources);
      };
      Loader2.prototype._onLoad = function _onLoad(resource) {
        var _this3 = this;
        resource._onLoadBinding = null;
        this._resourcesParsing.push(resource);
        resource._dequeue();
        async.eachSeries(this._afterMiddleware, function(fn, next) {
          fn.call(_this3, resource, next);
        }, function() {
          resource.onAfterMiddleware.dispatch(resource);
          _this3.progress = Math.min(MAX_PROGRESS, _this3.progress + resource.progressChunk);
          _this3.onProgress.dispatch(_this3, resource);
          if (resource.error) {
            _this3.onError.dispatch(resource.error, _this3, resource);
          } else {
            _this3.onLoad.dispatch(_this3, resource);
          }
          _this3._resourcesParsing.splice(_this3._resourcesParsing.indexOf(resource), 1);
          if (_this3._queue.idle() && _this3._resourcesParsing.length === 0) {
            _this3._onComplete();
          }
        }, true);
      };
      _createClass(Loader2, [{
        key: "concurrency",
        get: function get() {
          return this._queue.concurrency;
        },
        set: function set(concurrency) {
          this._queue.concurrency = concurrency;
        }
      }]);
      return Loader2;
    }();
    Loader._defaultBeforeMiddleware = [];
    Loader._defaultAfterMiddleware = [];
    Loader.pre = function LoaderPreStatic(fn) {
      Loader._defaultBeforeMiddleware.push(fn);
      return Loader;
    };
    Loader.use = function LoaderUseStatic(fn) {
      Loader._defaultAfterMiddleware.push(fn);
      return Loader;
    };
  }
});

// node_modules/resource-loader/lib/b64.js
var require_b64 = __commonJS({
  "node_modules/resource-loader/lib/b64.js"(exports, module) {
    "use strict";
    exports.__esModule = true;
    exports.encodeBinary = encodeBinary;
    var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    function encodeBinary(input) {
      var output = "";
      var inx = 0;
      while (inx < input.length) {
        var bytebuffer = [0, 0, 0];
        var encodedCharIndexes = [0, 0, 0, 0];
        for (var jnx = 0; jnx < bytebuffer.length; ++jnx) {
          if (inx < input.length) {
            bytebuffer[jnx] = input.charCodeAt(inx++) & 255;
          } else {
            bytebuffer[jnx] = 0;
          }
        }
        encodedCharIndexes[0] = bytebuffer[0] >> 2;
        encodedCharIndexes[1] = (bytebuffer[0] & 3) << 4 | bytebuffer[1] >> 4;
        encodedCharIndexes[2] = (bytebuffer[1] & 15) << 2 | bytebuffer[2] >> 6;
        encodedCharIndexes[3] = bytebuffer[2] & 63;
        var paddingBytes = inx - (input.length - 1);
        switch (paddingBytes) {
          case 2:
            encodedCharIndexes[3] = 64;
            encodedCharIndexes[2] = 64;
            break;
          case 1:
            encodedCharIndexes[3] = 64;
            break;
          default:
            break;
        }
        for (var _jnx = 0; _jnx < encodedCharIndexes.length; ++_jnx) {
          output += _keyStr.charAt(encodedCharIndexes[_jnx]);
        }
      }
      return output;
    }
    if (typeof module !== "undefined") {
      module.exports.default = encodeBinary;
    }
  }
});

// node_modules/resource-loader/lib/index.js
var require_lib = __commonJS({
  "node_modules/resource-loader/lib/index.js"(exports, module) {
    "use strict";
    var Loader = require_Loader().Loader;
    var Resource = require_Resource().Resource;
    var async = require_async();
    var b64 = require_b64();
    Loader.Resource = Resource;
    Loader.async = async;
    Loader.encodeBinary = b64;
    Loader.base64 = b64;
    module.exports = Loader;
    module.exports.Loader = Loader;
    module.exports.default = Loader;
  }
});

// node_modules/pixi.js/lib/loaders/bitmapFontParser.js
var require_bitmapFontParser = __commonJS({
  "node_modules/pixi.js/lib/loaders/bitmapFontParser.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.parse = parse;
    exports.default = function() {
      return function bitmapFontParser(resource, next) {
        if (!resource.data || resource.type !== _resourceLoader.Resource.TYPE.XML) {
          next();
          return;
        }
        if (resource.data.getElementsByTagName("page").length === 0 || resource.data.getElementsByTagName("info").length === 0 || resource.data.getElementsByTagName("info")[0].getAttribute("face") === null) {
          next();
          return;
        }
        var xmlUrl = !resource.isDataUrl ? path.dirname(resource.url) : "";
        if (resource.isDataUrl) {
          if (xmlUrl === ".") {
            xmlUrl = "";
          }
          if (this.baseUrl && xmlUrl) {
            if (this.baseUrl.charAt(this.baseUrl.length - 1) === "/") {
              xmlUrl += "/";
            }
          }
        }
        xmlUrl = xmlUrl.replace(this.baseUrl, "");
        if (xmlUrl && xmlUrl.charAt(xmlUrl.length - 1) !== "/") {
          xmlUrl += "/";
        }
        var pages = resource.data.getElementsByTagName("page");
        var textures = {};
        var completed = function completed2(page) {
          textures[page.metadata.pageFile] = page.texture;
          if (Object.keys(textures).length === pages.length) {
            parse(resource, textures);
            next();
          }
        };
        for (var i = 0; i < pages.length; ++i) {
          var pageFile = pages[i].getAttribute("file");
          var url = xmlUrl + pageFile;
          var exists = false;
          for (var name in this.resources) {
            var bitmapResource = this.resources[name];
            if (bitmapResource.url === url) {
              bitmapResource.metadata.pageFile = pageFile;
              if (bitmapResource.texture) {
                completed(bitmapResource);
              } else {
                bitmapResource.onAfterMiddleware.add(completed);
              }
              exists = true;
              break;
            }
          }
          if (!exists) {
            var options = {
              crossOrigin: resource.crossOrigin,
              loadType: _resourceLoader.Resource.LOAD_TYPE.IMAGE,
              metadata: Object.assign({ pageFile }, resource.metadata.imageMetadata),
              parentResource: resource
            };
            this.add(url, options, completed);
          }
        }
      };
    };
    var _path = require_path();
    var path = _interopRequireWildcard(_path);
    var _resourceLoader = require_lib();
    var _extras = require_extras();
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function parse(resource, textures) {
      resource.bitmapFont = _extras.BitmapText.registerFont(resource.data, textures);
    }
  }
});

// node_modules/pixi.js/lib/loaders/spritesheetParser.js
var require_spritesheetParser = __commonJS({
  "node_modules/pixi.js/lib/loaders/spritesheetParser.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.default = function() {
      return function spritesheetParser(resource, next) {
        var imageResourceName = resource.name + "_image";
        if (!resource.data || resource.type !== _resourceLoader.Resource.TYPE.JSON || !resource.data.frames || this.resources[imageResourceName]) {
          next();
          return;
        }
        var loadOptions = {
          crossOrigin: resource.crossOrigin,
          metadata: resource.metadata.imageMetadata,
          parentResource: resource
        };
        var resourcePath = getResourcePath(resource, this.baseUrl);
        this.add(imageResourceName, resourcePath, loadOptions, function onImageLoad(res) {
          if (res.error) {
            next(res.error);
            return;
          }
          var spritesheet = new _core.Spritesheet(res.texture.baseTexture, resource.data, resource.url);
          spritesheet.parse(function() {
            resource.spritesheet = spritesheet;
            resource.textures = spritesheet.textures;
            next();
          });
        });
      };
    };
    exports.getResourcePath = getResourcePath;
    var _resourceLoader = require_lib();
    var _url = require_url();
    var _url2 = _interopRequireDefault(_url);
    var _core = require_core();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function getResourcePath(resource, baseUrl) {
      if (resource.isDataUrl) {
        return resource.data.meta.image;
      }
      return _url2.default.resolve(resource.url.replace(baseUrl, ""), resource.data.meta.image);
    }
  }
});

// node_modules/pixi.js/lib/loaders/textureParser.js
var require_textureParser = __commonJS({
  "node_modules/pixi.js/lib/loaders/textureParser.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.default = function() {
      return function textureParser(resource, next) {
        if (resource.data && resource.type === _resourceLoader.Resource.TYPE.IMAGE) {
          resource.texture = _Texture2.default.fromLoader(resource.data, resource.url, resource.name);
        }
        next();
      };
    };
    var _resourceLoader = require_lib();
    var _Texture = require_Texture();
    var _Texture2 = _interopRequireDefault(_Texture);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
  }
});

// node_modules/resource-loader/lib/middlewares/parsing/blob.js
var require_blob = __commonJS({
  "node_modules/resource-loader/lib/middlewares/parsing/blob.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.blobMiddlewareFactory = blobMiddlewareFactory;
    var _Resource = require_Resource();
    var _b = require_b64();
    var Url = window.URL || window.webkitURL;
    function blobMiddlewareFactory() {
      return function blobMiddleware(resource, next) {
        if (!resource.data) {
          next();
          return;
        }
        if (resource.xhr && resource.xhrType === _Resource.Resource.XHR_RESPONSE_TYPE.BLOB) {
          if (!window.Blob || typeof resource.data === "string") {
            var type = resource.xhr.getResponseHeader("content-type");
            if (type && type.indexOf("image") === 0) {
              resource.data = new Image();
              resource.data.src = "data:" + type + ";base64," + (0, _b.encodeBinary)(resource.xhr.responseText);
              resource.type = _Resource.Resource.TYPE.IMAGE;
              resource.data.onload = function() {
                resource.data.onload = null;
                next();
              };
              return;
            }
          } else if (resource.data.type.indexOf("image") === 0) {
            var src = Url.createObjectURL(resource.data);
            resource.blob = resource.data;
            resource.data = new Image();
            resource.data.src = src;
            resource.type = _Resource.Resource.TYPE.IMAGE;
            resource.data.onload = function() {
              Url.revokeObjectURL(src);
              resource.data.onload = null;
              next();
            };
            return;
          }
        }
        next();
      };
    }
  }
});

// node_modules/pixi.js/lib/loaders/loader.js
var require_loader = __commonJS({
  "node_modules/pixi.js/lib/loaders/loader.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _resourceLoader = require_lib();
    var _resourceLoader2 = _interopRequireDefault(_resourceLoader);
    var _blob = require_blob();
    var _eventemitter = require_eventemitter3();
    var _eventemitter2 = _interopRequireDefault(_eventemitter);
    var _textureParser = require_textureParser();
    var _textureParser2 = _interopRequireDefault(_textureParser);
    var _spritesheetParser = require_spritesheetParser();
    var _spritesheetParser2 = _interopRequireDefault(_spritesheetParser);
    var _bitmapFontParser = require_bitmapFontParser();
    var _bitmapFontParser2 = _interopRequireDefault(_bitmapFontParser);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var Loader = function(_ResourceLoader) {
      _inherits(Loader2, _ResourceLoader);
      function Loader2(baseUrl, concurrency) {
        _classCallCheck(this, Loader2);
        var _this = _possibleConstructorReturn(this, _ResourceLoader.call(this, baseUrl, concurrency));
        _eventemitter2.default.call(_this);
        for (var i = 0; i < Loader2._pixiMiddleware.length; ++i) {
          _this.use(Loader2._pixiMiddleware[i]());
        }
        _this.onStart.add(function(l) {
          return _this.emit("start", l);
        });
        _this.onProgress.add(function(l, r) {
          return _this.emit("progress", l, r);
        });
        _this.onError.add(function(e, l, r) {
          return _this.emit("error", e, l, r);
        });
        _this.onLoad.add(function(l, r) {
          return _this.emit("load", l, r);
        });
        _this.onComplete.add(function(l, r) {
          return _this.emit("complete", l, r);
        });
        return _this;
      }
      Loader2.addPixiMiddleware = function addPixiMiddleware(fn) {
        Loader2._pixiMiddleware.push(fn);
      };
      Loader2.prototype.destroy = function destroy() {
        this.removeAllListeners();
        this.reset();
      };
      return Loader2;
    }(_resourceLoader2.default);
    exports.default = Loader;
    for (k in _eventemitter2.default.prototype) {
      Loader.prototype[k] = _eventemitter2.default.prototype[k];
    }
    var k;
    Loader._pixiMiddleware = [
      // parse any blob into more usable objects (e.g. Image)
      _blob.blobMiddlewareFactory,
      // parse any Image objects into textures
      _textureParser2.default,
      // parse any spritesheet data into multiple textures
      _spritesheetParser2.default,
      // parse bitmap font data into multiple textures
      _bitmapFontParser2.default
    ];
    var Resource = _resourceLoader2.default.Resource;
    Resource.setExtensionXhrType("fnt", Resource.XHR_RESPONSE_TYPE.DOCUMENT);
  }
});

// node_modules/pixi.js/lib/loaders/index.js
var require_loaders = __commonJS({
  "node_modules/pixi.js/lib/loaders/index.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.shared = exports.Resource = exports.textureParser = exports.getResourcePath = exports.spritesheetParser = exports.parseBitmapFontData = exports.bitmapFontParser = exports.Loader = void 0;
    var _bitmapFontParser = require_bitmapFontParser();
    Object.defineProperty(exports, "bitmapFontParser", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_bitmapFontParser).default;
      }
    });
    Object.defineProperty(exports, "parseBitmapFontData", {
      enumerable: true,
      get: function get() {
        return _bitmapFontParser.parse;
      }
    });
    var _spritesheetParser = require_spritesheetParser();
    Object.defineProperty(exports, "spritesheetParser", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_spritesheetParser).default;
      }
    });
    Object.defineProperty(exports, "getResourcePath", {
      enumerable: true,
      get: function get() {
        return _spritesheetParser.getResourcePath;
      }
    });
    var _textureParser = require_textureParser();
    Object.defineProperty(exports, "textureParser", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_textureParser).default;
      }
    });
    var _resourceLoader = require_lib();
    Object.defineProperty(exports, "Resource", {
      enumerable: true,
      get: function get() {
        return _resourceLoader.Resource;
      }
    });
    var _Application = require_Application();
    var _Application2 = _interopRequireDefault(_Application);
    var _loader = require_loader();
    var _loader2 = _interopRequireDefault(_loader);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.Loader = _loader2.default;
    var shared = new _loader2.default();
    shared.destroy = function() {
    };
    exports.shared = shared;
    var AppPrototype = _Application2.default.prototype;
    AppPrototype._loader = null;
    Object.defineProperty(AppPrototype, "loader", {
      get: function get() {
        if (!this._loader) {
          var sharedLoader = this._options.sharedLoader;
          this._loader = sharedLoader ? shared : new _loader2.default();
        }
        return this._loader;
      }
    });
    AppPrototype._parentDestroy = AppPrototype.destroy;
    AppPrototype.destroy = function destroy(removeView, stageOptions) {
      if (this._loader) {
        this._loader.destroy();
        this._loader = null;
      }
      this._parentDestroy(removeView, stageOptions);
    };
  }
});

// node_modules/pixi.js/lib/mesh/Mesh.js
var require_Mesh = __commonJS({
  "node_modules/pixi.js/lib/mesh/Mesh.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _core = require_core();
    var core = _interopRequireWildcard(_core);
    var _Texture = require_Texture();
    var _Texture2 = _interopRequireDefault(_Texture);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var tempPoint = new core.Point();
    var tempPolygon = new core.Polygon();
    var Mesh = function(_core$Container) {
      _inherits(Mesh2, _core$Container);
      function Mesh2(texture, vertices, uvs, indices, drawMode) {
        _classCallCheck(this, Mesh2);
        var _this = _possibleConstructorReturn(this, _core$Container.call(this));
        _this._texture = texture || _Texture2.default.EMPTY;
        _this.uvs = uvs || new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]);
        _this.vertices = vertices || new Float32Array([0, 0, 100, 0, 100, 100, 0, 100]);
        _this.indices = indices || new Uint16Array([0, 1, 3, 2]);
        _this.dirty = 0;
        _this.indexDirty = 0;
        _this.vertexDirty = 0;
        _this.autoUpdate = true;
        _this.blendMode = core.BLEND_MODES.NORMAL;
        _this.canvasPadding = core.settings.MESH_CANVAS_PADDING;
        _this.drawMode = drawMode || Mesh2.DRAW_MODES.TRIANGLE_MESH;
        _this.shader = null;
        _this.tintRgb = new Float32Array([1, 1, 1]);
        _this._glDatas = {};
        _this._uvTransform = new core.TextureMatrix(_this._texture);
        _this.uploadUvTransform = false;
        _this.pluginName = "mesh";
        return _this;
      }
      Mesh2.prototype._renderWebGL = function _renderWebGL(renderer) {
        this.refresh();
        renderer.setObjectRenderer(renderer.plugins[this.pluginName]);
        renderer.plugins[this.pluginName].render(this);
      };
      Mesh2.prototype._renderCanvas = function _renderCanvas(renderer) {
        this.refresh();
        renderer.plugins[this.pluginName].render(this);
      };
      Mesh2.prototype._onTextureUpdate = function _onTextureUpdate() {
        this._uvTransform.texture = this._texture;
        this.refresh();
      };
      Mesh2.prototype.multiplyUvs = function multiplyUvs() {
        if (!this.uploadUvTransform) {
          this._uvTransform.multiplyUvs(this.uvs);
        }
      };
      Mesh2.prototype.refresh = function refresh(forceUpdate) {
        if (this.autoUpdate) {
          this.vertexDirty++;
        }
        if (this._uvTransform.update(forceUpdate)) {
          this._refresh();
        }
      };
      Mesh2.prototype._refresh = function _refresh() {
      };
      Mesh2.prototype._calculateBounds = function _calculateBounds() {
        this._bounds.addVertices(this.transform, this.vertices, 0, this.vertices.length);
      };
      Mesh2.prototype.containsPoint = function containsPoint(point) {
        if (!this.getBounds().contains(point.x, point.y)) {
          return false;
        }
        this.worldTransform.applyInverse(point, tempPoint);
        var vertices = this.vertices;
        var points = tempPolygon.points;
        var indices = this.indices;
        var len = this.indices.length;
        var step = this.drawMode === Mesh2.DRAW_MODES.TRIANGLES ? 3 : 1;
        for (var i = 0; i + 2 < len; i += step) {
          var ind0 = indices[i] * 2;
          var ind1 = indices[i + 1] * 2;
          var ind2 = indices[i + 2] * 2;
          points[0] = vertices[ind0];
          points[1] = vertices[ind0 + 1];
          points[2] = vertices[ind1];
          points[3] = vertices[ind1 + 1];
          points[4] = vertices[ind2];
          points[5] = vertices[ind2 + 1];
          if (tempPolygon.contains(tempPoint.x, tempPoint.y)) {
            return true;
          }
        }
        return false;
      };
      Mesh2.prototype.destroy = function destroy(options) {
        for (var id in this._glDatas) {
          var data = this._glDatas[id];
          if (data.destroy) {
            data.destroy();
          } else {
            if (data.vertexBuffer) {
              data.vertexBuffer.destroy();
              data.vertexBuffer = null;
            }
            if (data.indexBuffer) {
              data.indexBuffer.destroy();
              data.indexBuffer = null;
            }
            if (data.uvBuffer) {
              data.uvBuffer.destroy();
              data.uvBuffer = null;
            }
            if (data.vao) {
              data.vao.destroy();
              data.vao = null;
            }
          }
        }
        this._glDatas = null;
        _core$Container.prototype.destroy.call(this, options);
      };
      _createClass(Mesh2, [{
        key: "texture",
        get: function get() {
          return this._texture;
        },
        set: function set(value) {
          if (this._texture === value) {
            return;
          }
          this._texture = value;
          if (value) {
            if (value.baseTexture.hasLoaded) {
              this._onTextureUpdate();
            } else {
              value.once("update", this._onTextureUpdate, this);
            }
          }
        }
        /**
         * The tint applied to the mesh. This is a hex value. A value of 0xFFFFFF will remove any tint effect.
         *
         * @member {number}
         * @default 0xFFFFFF
         */
      }, {
        key: "tint",
        get: function get() {
          return core.utils.rgb2hex(this.tintRgb);
        },
        set: function set(value) {
          this.tintRgb = core.utils.hex2rgb(value, this.tintRgb);
        }
      }]);
      return Mesh2;
    }(core.Container);
    exports.default = Mesh;
    Mesh.DRAW_MODES = {
      TRIANGLE_MESH: 0,
      TRIANGLES: 1
    };
  }
});

// node_modules/pixi.js/lib/mesh/webgl/MeshRenderer.js
var require_MeshRenderer = __commonJS({
  "node_modules/pixi.js/lib/mesh/webgl/MeshRenderer.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _core = require_core();
    var core = _interopRequireWildcard(_core);
    var _pixiGlCore = require_src();
    var _pixiGlCore2 = _interopRequireDefault(_pixiGlCore);
    var _Mesh = require_Mesh();
    var _Mesh2 = _interopRequireDefault(_Mesh);
    var _path = require_path();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var matrixIdentity = core.Matrix.IDENTITY;
    var MeshRenderer = function(_core$ObjectRenderer) {
      _inherits(MeshRenderer2, _core$ObjectRenderer);
      function MeshRenderer2(renderer) {
        _classCallCheck(this, MeshRenderer2);
        var _this = _possibleConstructorReturn(this, _core$ObjectRenderer.call(this, renderer));
        _this.shader = null;
        return _this;
      }
      MeshRenderer2.prototype.onContextChange = function onContextChange() {
        var gl2 = this.renderer.gl;
        this.shader = new core.Shader(gl2, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\n}\n", "varying vec2 vTextureCoord;\nuniform vec4 uColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord) * uColor;\n}\n");
      };
      MeshRenderer2.prototype.render = function render(mesh) {
        var renderer = this.renderer;
        var gl2 = renderer.gl;
        var texture = mesh._texture;
        if (!texture.valid) {
          return;
        }
        var glData = mesh._glDatas[renderer.CONTEXT_UID];
        if (!glData) {
          renderer.bindVao(null);
          glData = {
            shader: this.shader,
            vertexBuffer: _pixiGlCore2.default.GLBuffer.createVertexBuffer(gl2, mesh.vertices, gl2.STREAM_DRAW),
            uvBuffer: _pixiGlCore2.default.GLBuffer.createVertexBuffer(gl2, mesh.uvs, gl2.STREAM_DRAW),
            indexBuffer: _pixiGlCore2.default.GLBuffer.createIndexBuffer(gl2, mesh.indices, gl2.STATIC_DRAW),
            // build the vao object that will render..
            vao: null,
            dirty: mesh.dirty,
            indexDirty: mesh.indexDirty,
            vertexDirty: mesh.vertexDirty
          };
          glData.vao = new _pixiGlCore2.default.VertexArrayObject(gl2).addIndex(glData.indexBuffer).addAttribute(glData.vertexBuffer, glData.shader.attributes.aVertexPosition, gl2.FLOAT, false, 2 * 4, 0).addAttribute(glData.uvBuffer, glData.shader.attributes.aTextureCoord, gl2.FLOAT, false, 2 * 4, 0);
          mesh._glDatas[renderer.CONTEXT_UID] = glData;
        }
        renderer.bindVao(glData.vao);
        if (mesh.dirty !== glData.dirty) {
          glData.dirty = mesh.dirty;
          glData.uvBuffer.upload(mesh.uvs);
        }
        if (mesh.indexDirty !== glData.indexDirty) {
          glData.indexDirty = mesh.indexDirty;
          glData.indexBuffer.upload(mesh.indices);
        }
        if (mesh.vertexDirty !== glData.vertexDirty) {
          glData.vertexDirty = mesh.vertexDirty;
          glData.vertexBuffer.upload(mesh.vertices);
        }
        renderer.bindShader(glData.shader);
        glData.shader.uniforms.uSampler = renderer.bindTexture(texture);
        renderer.state.setBlendMode(core.utils.correctBlendMode(mesh.blendMode, texture.baseTexture.premultipliedAlpha));
        if (glData.shader.uniforms.uTransform) {
          if (mesh.uploadUvTransform) {
            glData.shader.uniforms.uTransform = mesh._uvTransform.mapCoord.toArray(true);
          } else {
            glData.shader.uniforms.uTransform = matrixIdentity.toArray(true);
          }
        }
        glData.shader.uniforms.translationMatrix = mesh.worldTransform.toArray(true);
        glData.shader.uniforms.uColor = core.utils.premultiplyRgba(mesh.tintRgb, mesh.worldAlpha, glData.shader.uniforms.uColor, texture.baseTexture.premultipliedAlpha);
        var drawMode = mesh.drawMode === _Mesh2.default.DRAW_MODES.TRIANGLE_MESH ? gl2.TRIANGLE_STRIP : gl2.TRIANGLES;
        glData.vao.draw(drawMode, mesh.indices.length, 0);
      };
      return MeshRenderer2;
    }(core.ObjectRenderer);
    exports.default = MeshRenderer;
    core.WebGLRenderer.registerPlugin("mesh", MeshRenderer);
  }
});

// node_modules/pixi.js/lib/mesh/canvas/CanvasMeshRenderer.js
var require_CanvasMeshRenderer = __commonJS({
  "node_modules/pixi.js/lib/mesh/canvas/CanvasMeshRenderer.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _core = require_core();
    var core = _interopRequireWildcard(_core);
    var _Mesh = require_Mesh();
    var _Mesh2 = _interopRequireDefault(_Mesh);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var MeshSpriteRenderer = function() {
      function MeshSpriteRenderer2(renderer) {
        _classCallCheck(this, MeshSpriteRenderer2);
        this.renderer = renderer;
      }
      MeshSpriteRenderer2.prototype.render = function render(mesh) {
        var renderer = this.renderer;
        var context = renderer.context;
        var transform = mesh.worldTransform;
        var res = renderer.resolution;
        if (renderer.roundPixels) {
          context.setTransform(transform.a * res, transform.b * res, transform.c * res, transform.d * res, transform.tx * res | 0, transform.ty * res | 0);
        } else {
          context.setTransform(transform.a * res, transform.b * res, transform.c * res, transform.d * res, transform.tx * res, transform.ty * res);
        }
        renderer.context.globalAlpha = mesh.worldAlpha;
        renderer.setBlendMode(mesh.blendMode);
        if (mesh.drawMode === _Mesh2.default.DRAW_MODES.TRIANGLE_MESH) {
          this._renderTriangleMesh(mesh);
        } else {
          this._renderTriangles(mesh);
        }
      };
      MeshSpriteRenderer2.prototype._renderTriangleMesh = function _renderTriangleMesh(mesh) {
        var length = mesh.vertices.length / 2;
        for (var i = 0; i < length - 2; i++) {
          var index = i * 2;
          this._renderDrawTriangle(mesh, index, index + 2, index + 4);
        }
      };
      MeshSpriteRenderer2.prototype._renderTriangles = function _renderTriangles(mesh) {
        var indices = mesh.indices;
        var length = indices.length;
        for (var i = 0; i < length; i += 3) {
          var index0 = indices[i] * 2;
          var index1 = indices[i + 1] * 2;
          var index2 = indices[i + 2] * 2;
          this._renderDrawTriangle(mesh, index0, index1, index2);
        }
      };
      MeshSpriteRenderer2.prototype._renderDrawTriangle = function _renderDrawTriangle(mesh, index0, index1, index2) {
        var context = this.renderer.context;
        var uvs = mesh.uvs;
        var vertices = mesh.vertices;
        var texture = mesh._texture;
        if (!texture.valid) {
          return;
        }
        var base = texture.baseTexture;
        var textureSource = base.source;
        var textureWidth = base.width;
        var textureHeight = base.height;
        var u0 = void 0;
        var u1 = void 0;
        var u2 = void 0;
        var v0 = void 0;
        var v1 = void 0;
        var v2 = void 0;
        if (mesh.uploadUvTransform) {
          var ut = mesh._uvTransform.mapCoord;
          u0 = (uvs[index0] * ut.a + uvs[index0 + 1] * ut.c + ut.tx) * base.width;
          u1 = (uvs[index1] * ut.a + uvs[index1 + 1] * ut.c + ut.tx) * base.width;
          u2 = (uvs[index2] * ut.a + uvs[index2 + 1] * ut.c + ut.tx) * base.width;
          v0 = (uvs[index0] * ut.b + uvs[index0 + 1] * ut.d + ut.ty) * base.height;
          v1 = (uvs[index1] * ut.b + uvs[index1 + 1] * ut.d + ut.ty) * base.height;
          v2 = (uvs[index2] * ut.b + uvs[index2 + 1] * ut.d + ut.ty) * base.height;
        } else {
          u0 = uvs[index0] * base.width;
          u1 = uvs[index1] * base.width;
          u2 = uvs[index2] * base.width;
          v0 = uvs[index0 + 1] * base.height;
          v1 = uvs[index1 + 1] * base.height;
          v2 = uvs[index2 + 1] * base.height;
        }
        var x0 = vertices[index0];
        var x1 = vertices[index1];
        var x2 = vertices[index2];
        var y0 = vertices[index0 + 1];
        var y1 = vertices[index1 + 1];
        var y2 = vertices[index2 + 1];
        var canvasPadding = mesh.canvasPadding / this.renderer.resolution;
        if (canvasPadding > 0) {
          var paddingX = canvasPadding / Math.abs(mesh.worldTransform.a);
          var paddingY = canvasPadding / Math.abs(mesh.worldTransform.d);
          var centerX = (x0 + x1 + x2) / 3;
          var centerY = (y0 + y1 + y2) / 3;
          var normX = x0 - centerX;
          var normY = y0 - centerY;
          var dist = Math.sqrt(normX * normX + normY * normY);
          x0 = centerX + normX / dist * (dist + paddingX);
          y0 = centerY + normY / dist * (dist + paddingY);
          normX = x1 - centerX;
          normY = y1 - centerY;
          dist = Math.sqrt(normX * normX + normY * normY);
          x1 = centerX + normX / dist * (dist + paddingX);
          y1 = centerY + normY / dist * (dist + paddingY);
          normX = x2 - centerX;
          normY = y2 - centerY;
          dist = Math.sqrt(normX * normX + normY * normY);
          x2 = centerX + normX / dist * (dist + paddingX);
          y2 = centerY + normY / dist * (dist + paddingY);
        }
        context.save();
        context.beginPath();
        context.moveTo(x0, y0);
        context.lineTo(x1, y1);
        context.lineTo(x2, y2);
        context.closePath();
        context.clip();
        var delta = u0 * v1 + v0 * u2 + u1 * v2 - v1 * u2 - v0 * u1 - u0 * v2;
        var deltaA = x0 * v1 + v0 * x2 + x1 * v2 - v1 * x2 - v0 * x1 - x0 * v2;
        var deltaB = u0 * x1 + x0 * u2 + u1 * x2 - x1 * u2 - x0 * u1 - u0 * x2;
        var deltaC = u0 * v1 * x2 + v0 * x1 * u2 + x0 * u1 * v2 - x0 * v1 * u2 - v0 * u1 * x2 - u0 * x1 * v2;
        var deltaD = y0 * v1 + v0 * y2 + y1 * v2 - v1 * y2 - v0 * y1 - y0 * v2;
        var deltaE = u0 * y1 + y0 * u2 + u1 * y2 - y1 * u2 - y0 * u1 - u0 * y2;
        var deltaF = u0 * v1 * y2 + v0 * y1 * u2 + y0 * u1 * v2 - y0 * v1 * u2 - v0 * u1 * y2 - u0 * y1 * v2;
        context.transform(deltaA / delta, deltaD / delta, deltaB / delta, deltaE / delta, deltaC / delta, deltaF / delta);
        context.drawImage(textureSource, 0, 0, textureWidth * base.resolution, textureHeight * base.resolution, 0, 0, textureWidth, textureHeight);
        context.restore();
        this.renderer.invalidateBlendMode();
      };
      MeshSpriteRenderer2.prototype.renderMeshFlat = function renderMeshFlat(mesh) {
        var context = this.renderer.context;
        var vertices = mesh.vertices;
        var length = vertices.length / 2;
        context.beginPath();
        for (var i = 1; i < length - 2; ++i) {
          var index = i * 2;
          var x0 = vertices[index];
          var y0 = vertices[index + 1];
          var x1 = vertices[index + 2];
          var y1 = vertices[index + 3];
          var x2 = vertices[index + 4];
          var y2 = vertices[index + 5];
          context.moveTo(x0, y0);
          context.lineTo(x1, y1);
          context.lineTo(x2, y2);
        }
        context.fillStyle = "#FF0000";
        context.fill();
        context.closePath();
      };
      MeshSpriteRenderer2.prototype.destroy = function destroy() {
        this.renderer = null;
      };
      return MeshSpriteRenderer2;
    }();
    exports.default = MeshSpriteRenderer;
    core.CanvasRenderer.registerPlugin("mesh", MeshSpriteRenderer);
  }
});

// node_modules/pixi.js/lib/mesh/Plane.js
var require_Plane = __commonJS({
  "node_modules/pixi.js/lib/mesh/Plane.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _Mesh2 = require_Mesh();
    var _Mesh3 = _interopRequireDefault(_Mesh2);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var Plane = function(_Mesh) {
      _inherits(Plane2, _Mesh);
      function Plane2(texture, verticesX, verticesY) {
        _classCallCheck(this, Plane2);
        var _this = _possibleConstructorReturn(this, _Mesh.call(this, texture));
        _this._ready = true;
        _this.verticesX = verticesX || 10;
        _this.verticesY = verticesY || 10;
        _this.drawMode = _Mesh3.default.DRAW_MODES.TRIANGLES;
        _this.refresh();
        return _this;
      }
      Plane2.prototype._refresh = function _refresh() {
        var texture = this._texture;
        var total = this.verticesX * this.verticesY;
        var verts = [];
        var colors = [];
        var uvs = [];
        var indices = [];
        var segmentsX = this.verticesX - 1;
        var segmentsY = this.verticesY - 1;
        var sizeX = texture.width / segmentsX;
        var sizeY = texture.height / segmentsY;
        for (var i = 0; i < total; i++) {
          var x = i % this.verticesX;
          var y = i / this.verticesX | 0;
          verts.push(x * sizeX, y * sizeY);
          uvs.push(x / segmentsX, y / segmentsY);
        }
        var totalSub = segmentsX * segmentsY;
        for (var _i = 0; _i < totalSub; _i++) {
          var xpos = _i % segmentsX;
          var ypos = _i / segmentsX | 0;
          var value = ypos * this.verticesX + xpos;
          var value2 = ypos * this.verticesX + xpos + 1;
          var value3 = (ypos + 1) * this.verticesX + xpos;
          var value4 = (ypos + 1) * this.verticesX + xpos + 1;
          indices.push(value, value2, value3);
          indices.push(value2, value4, value3);
        }
        this.vertices = new Float32Array(verts);
        this.uvs = new Float32Array(uvs);
        this.colors = new Float32Array(colors);
        this.indices = new Uint16Array(indices);
        this.dirty++;
        this.indexDirty++;
        this.multiplyUvs();
      };
      Plane2.prototype._onTextureUpdate = function _onTextureUpdate() {
        _Mesh3.default.prototype._onTextureUpdate.call(this);
        if (this._ready) {
          this.refresh();
        }
      };
      return Plane2;
    }(_Mesh3.default);
    exports.default = Plane;
  }
});

// node_modules/pixi.js/lib/mesh/NineSlicePlane.js
var require_NineSlicePlane = __commonJS({
  "node_modules/pixi.js/lib/mesh/NineSlicePlane.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _Plane2 = require_Plane();
    var _Plane3 = _interopRequireDefault(_Plane2);
    var _CanvasTinter = require_CanvasTinter();
    var _CanvasTinter2 = _interopRequireDefault(_CanvasTinter);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var DEFAULT_BORDER_SIZE = 10;
    var NineSlicePlane = function(_Plane) {
      _inherits(NineSlicePlane2, _Plane);
      function NineSlicePlane2(texture, leftWidth, topHeight, rightWidth, bottomHeight) {
        _classCallCheck(this, NineSlicePlane2);
        var _this = _possibleConstructorReturn(this, _Plane.call(this, texture, 4, 4));
        _this._origWidth = texture.orig.width;
        _this._origHeight = texture.orig.height;
        _this._width = _this._origWidth;
        _this._height = _this._origHeight;
        _this._leftWidth = typeof leftWidth !== "undefined" ? leftWidth : DEFAULT_BORDER_SIZE;
        _this._rightWidth = typeof rightWidth !== "undefined" ? rightWidth : DEFAULT_BORDER_SIZE;
        _this._topHeight = typeof topHeight !== "undefined" ? topHeight : DEFAULT_BORDER_SIZE;
        _this._bottomHeight = typeof bottomHeight !== "undefined" ? bottomHeight : DEFAULT_BORDER_SIZE;
        _this._cachedTint = 16777215;
        _this._tintedTexture = null;
        _this._canvasUvs = null;
        _this.refresh(true);
        return _this;
      }
      NineSlicePlane2.prototype.updateHorizontalVertices = function updateHorizontalVertices() {
        var vertices = this.vertices;
        var h = this._topHeight + this._bottomHeight;
        var scale = this._height > h ? 1 : this._height / h;
        vertices[9] = vertices[11] = vertices[13] = vertices[15] = this._topHeight * scale;
        vertices[17] = vertices[19] = vertices[21] = vertices[23] = this._height - this._bottomHeight * scale;
        vertices[25] = vertices[27] = vertices[29] = vertices[31] = this._height;
      };
      NineSlicePlane2.prototype.updateVerticalVertices = function updateVerticalVertices() {
        var vertices = this.vertices;
        var w = this._leftWidth + this._rightWidth;
        var scale = this._width > w ? 1 : this._width / w;
        vertices[2] = vertices[10] = vertices[18] = vertices[26] = this._leftWidth * scale;
        vertices[4] = vertices[12] = vertices[20] = vertices[28] = this._width - this._rightWidth * scale;
        vertices[6] = vertices[14] = vertices[22] = vertices[30] = this._width;
      };
      NineSlicePlane2.prototype._renderCanvas = function _renderCanvas(renderer) {
        var context = renderer.context;
        var transform = this.worldTransform;
        var res = renderer.resolution;
        var isTinted = this.tint !== 16777215;
        var texture = this._texture;
        if (isTinted) {
          if (this._cachedTint !== this.tint) {
            this._cachedTint = this.tint;
            this._tintedTexture = _CanvasTinter2.default.getTintedTexture(this, this.tint);
          }
        }
        var textureSource = !isTinted ? texture.baseTexture.source : this._tintedTexture;
        if (!this._canvasUvs) {
          this._canvasUvs = [0, 0, 0, 0, 0, 0, 0, 0];
        }
        var vertices = this.vertices;
        var uvs = this._canvasUvs;
        var u0 = isTinted ? 0 : texture.frame.x;
        var v0 = isTinted ? 0 : texture.frame.y;
        var u1 = u0 + texture.frame.width;
        var v1 = v0 + texture.frame.height;
        uvs[0] = u0;
        uvs[1] = u0 + this._leftWidth;
        uvs[2] = u1 - this._rightWidth;
        uvs[3] = u1;
        uvs[4] = v0;
        uvs[5] = v0 + this._topHeight;
        uvs[6] = v1 - this._bottomHeight;
        uvs[7] = v1;
        for (var i = 0; i < 8; i++) {
          uvs[i] *= texture.baseTexture.resolution;
        }
        context.globalAlpha = this.worldAlpha;
        renderer.setBlendMode(this.blendMode);
        if (renderer.roundPixels) {
          context.setTransform(transform.a * res, transform.b * res, transform.c * res, transform.d * res, transform.tx * res | 0, transform.ty * res | 0);
        } else {
          context.setTransform(transform.a * res, transform.b * res, transform.c * res, transform.d * res, transform.tx * res, transform.ty * res);
        }
        for (var row = 0; row < 3; row++) {
          for (var col = 0; col < 3; col++) {
            var ind = col * 2 + row * 8;
            var sw = Math.max(1, uvs[col + 1] - uvs[col]);
            var sh = Math.max(1, uvs[row + 5] - uvs[row + 4]);
            var dw = Math.max(1, vertices[ind + 10] - vertices[ind]);
            var dh = Math.max(1, vertices[ind + 11] - vertices[ind + 1]);
            context.drawImage(textureSource, uvs[col], uvs[row + 4], sw, sh, vertices[ind], vertices[ind + 1], dw, dh);
          }
        }
      };
      NineSlicePlane2.prototype._refresh = function _refresh() {
        _Plane.prototype._refresh.call(this);
        var uvs = this.uvs;
        var texture = this._texture;
        this._origWidth = texture.orig.width;
        this._origHeight = texture.orig.height;
        var _uvw = 1 / this._origWidth;
        var _uvh = 1 / this._origHeight;
        uvs[0] = uvs[8] = uvs[16] = uvs[24] = 0;
        uvs[1] = uvs[3] = uvs[5] = uvs[7] = 0;
        uvs[6] = uvs[14] = uvs[22] = uvs[30] = 1;
        uvs[25] = uvs[27] = uvs[29] = uvs[31] = 1;
        uvs[2] = uvs[10] = uvs[18] = uvs[26] = _uvw * this._leftWidth;
        uvs[4] = uvs[12] = uvs[20] = uvs[28] = 1 - _uvw * this._rightWidth;
        uvs[9] = uvs[11] = uvs[13] = uvs[15] = _uvh * this._topHeight;
        uvs[17] = uvs[19] = uvs[21] = uvs[23] = 1 - _uvh * this._bottomHeight;
        this.updateHorizontalVertices();
        this.updateVerticalVertices();
        this.dirty++;
        this.multiplyUvs();
      };
      _createClass(NineSlicePlane2, [{
        key: "width",
        get: function get() {
          return this._width;
        },
        set: function set(value) {
          this._width = value;
          this._refresh();
        }
        /**
         * The height of the NineSlicePlane, setting this will actually modify the vertices and UV's of this plane
         *
         * @member {number}
         */
      }, {
        key: "height",
        get: function get() {
          return this._height;
        },
        set: function set(value) {
          this._height = value;
          this._refresh();
        }
        /**
         * The width of the left column
         *
         * @member {number}
         */
      }, {
        key: "leftWidth",
        get: function get() {
          return this._leftWidth;
        },
        set: function set(value) {
          this._leftWidth = value;
          this._refresh();
        }
        /**
         * The width of the right column
         *
         * @member {number}
         */
      }, {
        key: "rightWidth",
        get: function get() {
          return this._rightWidth;
        },
        set: function set(value) {
          this._rightWidth = value;
          this._refresh();
        }
        /**
         * The height of the top row
         *
         * @member {number}
         */
      }, {
        key: "topHeight",
        get: function get() {
          return this._topHeight;
        },
        set: function set(value) {
          this._topHeight = value;
          this._refresh();
        }
        /**
         * The height of the bottom row
         *
         * @member {number}
         */
      }, {
        key: "bottomHeight",
        get: function get() {
          return this._bottomHeight;
        },
        set: function set(value) {
          this._bottomHeight = value;
          this._refresh();
        }
      }]);
      return NineSlicePlane2;
    }(_Plane3.default);
    exports.default = NineSlicePlane;
  }
});

// node_modules/pixi.js/lib/mesh/Rope.js
var require_Rope = __commonJS({
  "node_modules/pixi.js/lib/mesh/Rope.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _Mesh2 = require_Mesh();
    var _Mesh3 = _interopRequireDefault(_Mesh2);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var Rope = function(_Mesh) {
      _inherits(Rope2, _Mesh);
      function Rope2(texture, points) {
        _classCallCheck(this, Rope2);
        var _this = _possibleConstructorReturn(this, _Mesh.call(this, texture));
        _this.points = points;
        _this.vertices = new Float32Array(points.length * 4);
        _this.uvs = new Float32Array(points.length * 4);
        _this.colors = new Float32Array(points.length * 2);
        _this.indices = new Uint16Array(points.length * 2);
        _this.autoUpdate = true;
        _this.refresh();
        return _this;
      }
      Rope2.prototype._refresh = function _refresh() {
        var points = this.points;
        if (points.length < 1 || !this._texture._uvs) {
          return;
        }
        if (this.vertices.length / 4 !== points.length) {
          this.vertices = new Float32Array(points.length * 4);
          this.uvs = new Float32Array(points.length * 4);
          this.colors = new Float32Array(points.length * 2);
          this.indices = new Uint16Array(points.length * 2);
        }
        var uvs = this.uvs;
        var indices = this.indices;
        var colors = this.colors;
        uvs[0] = 0;
        uvs[1] = 0;
        uvs[2] = 0;
        uvs[3] = 1;
        colors[0] = 1;
        colors[1] = 1;
        indices[0] = 0;
        indices[1] = 1;
        var total = points.length;
        for (var i = 1; i < total; i++) {
          var index = i * 4;
          var amount = i / (total - 1);
          uvs[index] = amount;
          uvs[index + 1] = 0;
          uvs[index + 2] = amount;
          uvs[index + 3] = 1;
          index = i * 2;
          colors[index] = 1;
          colors[index + 1] = 1;
          index = i * 2;
          indices[index] = index;
          indices[index + 1] = index + 1;
        }
        this.dirty++;
        this.indexDirty++;
        this.multiplyUvs();
        this.refreshVertices();
      };
      Rope2.prototype.refreshVertices = function refreshVertices() {
        var points = this.points;
        if (points.length < 1) {
          return;
        }
        var lastPoint = points[0];
        var nextPoint = void 0;
        var perpX = 0;
        var perpY = 0;
        var vertices = this.vertices;
        var total = points.length;
        for (var i = 0; i < total; i++) {
          var point = points[i];
          var index = i * 4;
          if (i < points.length - 1) {
            nextPoint = points[i + 1];
          } else {
            nextPoint = point;
          }
          perpY = -(nextPoint.x - lastPoint.x);
          perpX = nextPoint.y - lastPoint.y;
          var ratio = (1 - i / (total - 1)) * 10;
          if (ratio > 1) {
            ratio = 1;
          }
          var perpLength = Math.sqrt(perpX * perpX + perpY * perpY);
          var num = this._texture.height / 2;
          perpX /= perpLength;
          perpY /= perpLength;
          perpX *= num;
          perpY *= num;
          vertices[index] = point.x + perpX;
          vertices[index + 1] = point.y + perpY;
          vertices[index + 2] = point.x - perpX;
          vertices[index + 3] = point.y - perpY;
          lastPoint = point;
        }
      };
      Rope2.prototype.updateTransform = function updateTransform() {
        if (this.autoUpdate) {
          this.refreshVertices();
        }
        this.containerUpdateTransform();
      };
      return Rope2;
    }(_Mesh3.default);
    exports.default = Rope;
  }
});

// node_modules/pixi.js/lib/mesh/index.js
var require_mesh = __commonJS({
  "node_modules/pixi.js/lib/mesh/index.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _Mesh = require_Mesh();
    Object.defineProperty(exports, "Mesh", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_Mesh).default;
      }
    });
    var _MeshRenderer = require_MeshRenderer();
    Object.defineProperty(exports, "MeshRenderer", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_MeshRenderer).default;
      }
    });
    var _CanvasMeshRenderer = require_CanvasMeshRenderer();
    Object.defineProperty(exports, "CanvasMeshRenderer", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_CanvasMeshRenderer).default;
      }
    });
    var _Plane = require_Plane();
    Object.defineProperty(exports, "Plane", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_Plane).default;
      }
    });
    var _NineSlicePlane = require_NineSlicePlane();
    Object.defineProperty(exports, "NineSlicePlane", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_NineSlicePlane).default;
      }
    });
    var _Rope = require_Rope();
    Object.defineProperty(exports, "Rope", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_Rope).default;
      }
    });
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
  }
});

// node_modules/pixi.js/lib/particles/ParticleContainer.js
var require_ParticleContainer = __commonJS({
  "node_modules/pixi.js/lib/particles/ParticleContainer.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _core = require_core();
    var core = _interopRequireWildcard(_core);
    var _utils = require_utils();
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var ParticleContainer = function(_core$Container) {
      _inherits(ParticleContainer2, _core$Container);
      function ParticleContainer2() {
        var maxSize = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1500;
        var properties = arguments[1];
        var batchSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 16384;
        var autoResize = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
        _classCallCheck(this, ParticleContainer2);
        var _this = _possibleConstructorReturn(this, _core$Container.call(this));
        var maxBatchSize = 16384;
        if (batchSize > maxBatchSize) {
          batchSize = maxBatchSize;
        }
        if (batchSize > maxSize) {
          batchSize = maxSize;
        }
        _this._properties = [false, true, false, false, false];
        _this._maxSize = maxSize;
        _this._batchSize = batchSize;
        _this._glBuffers = {};
        _this._bufferUpdateIDs = [];
        _this._updateID = 0;
        _this.interactiveChildren = false;
        _this.blendMode = core.BLEND_MODES.NORMAL;
        _this.autoResize = autoResize;
        _this.roundPixels = true;
        _this.baseTexture = null;
        _this.setProperties(properties);
        _this._tint = 0;
        _this.tintRgb = new Float32Array(4);
        _this.tint = 16777215;
        return _this;
      }
      ParticleContainer2.prototype.setProperties = function setProperties(properties) {
        if (properties) {
          this._properties[0] = "vertices" in properties || "scale" in properties ? !!properties.vertices || !!properties.scale : this._properties[0];
          this._properties[1] = "position" in properties ? !!properties.position : this._properties[1];
          this._properties[2] = "rotation" in properties ? !!properties.rotation : this._properties[2];
          this._properties[3] = "uvs" in properties ? !!properties.uvs : this._properties[3];
          this._properties[4] = "tint" in properties || "alpha" in properties ? !!properties.tint || !!properties.alpha : this._properties[4];
        }
      };
      ParticleContainer2.prototype.updateTransform = function updateTransform() {
        this.displayObjectUpdateTransform();
      };
      ParticleContainer2.prototype.renderWebGL = function renderWebGL(renderer) {
        var _this2 = this;
        if (!this.visible || this.worldAlpha <= 0 || !this.children.length || !this.renderable) {
          return;
        }
        if (!this.baseTexture) {
          this.baseTexture = this.children[0]._texture.baseTexture;
          if (!this.baseTexture.hasLoaded) {
            this.baseTexture.once("update", function() {
              return _this2.onChildrenChange(0);
            });
          }
        }
        renderer.setObjectRenderer(renderer.plugins.particle);
        renderer.plugins.particle.render(this);
      };
      ParticleContainer2.prototype.onChildrenChange = function onChildrenChange(smallestChildIndex) {
        var bufferIndex = Math.floor(smallestChildIndex / this._batchSize);
        while (this._bufferUpdateIDs.length < bufferIndex) {
          this._bufferUpdateIDs.push(0);
        }
        this._bufferUpdateIDs[bufferIndex] = ++this._updateID;
      };
      ParticleContainer2.prototype.renderCanvas = function renderCanvas(renderer) {
        if (!this.visible || this.worldAlpha <= 0 || !this.children.length || !this.renderable) {
          return;
        }
        var context = renderer.context;
        var transform = this.worldTransform;
        var isRotated = true;
        var positionX = 0;
        var positionY = 0;
        var finalWidth = 0;
        var finalHeight = 0;
        renderer.setBlendMode(this.blendMode);
        context.globalAlpha = this.worldAlpha;
        this.displayObjectUpdateTransform();
        for (var i = 0; i < this.children.length; ++i) {
          var child = this.children[i];
          if (!child.visible) {
            continue;
          }
          var frame = child._texture.frame;
          context.globalAlpha = this.worldAlpha * child.alpha;
          if (child.rotation % (Math.PI * 2) === 0) {
            if (isRotated) {
              context.setTransform(transform.a, transform.b, transform.c, transform.d, transform.tx * renderer.resolution, transform.ty * renderer.resolution);
              isRotated = false;
            }
            positionX = child.anchor.x * (-frame.width * child.scale.x) + child.position.x + 0.5;
            positionY = child.anchor.y * (-frame.height * child.scale.y) + child.position.y + 0.5;
            finalWidth = frame.width * child.scale.x;
            finalHeight = frame.height * child.scale.y;
          } else {
            if (!isRotated) {
              isRotated = true;
            }
            child.displayObjectUpdateTransform();
            var childTransform = child.worldTransform;
            if (renderer.roundPixels) {
              context.setTransform(childTransform.a, childTransform.b, childTransform.c, childTransform.d, childTransform.tx * renderer.resolution | 0, childTransform.ty * renderer.resolution | 0);
            } else {
              context.setTransform(childTransform.a, childTransform.b, childTransform.c, childTransform.d, childTransform.tx * renderer.resolution, childTransform.ty * renderer.resolution);
            }
            positionX = child.anchor.x * -frame.width + 0.5;
            positionY = child.anchor.y * -frame.height + 0.5;
            finalWidth = frame.width;
            finalHeight = frame.height;
          }
          var resolution = child._texture.baseTexture.resolution;
          context.drawImage(child._texture.baseTexture.source, frame.x * resolution, frame.y * resolution, frame.width * resolution, frame.height * resolution, positionX * renderer.resolution, positionY * renderer.resolution, finalWidth * renderer.resolution, finalHeight * renderer.resolution);
        }
      };
      ParticleContainer2.prototype.destroy = function destroy(options) {
        _core$Container.prototype.destroy.call(this, options);
        if (this._buffers) {
          for (var i = 0; i < this._buffers.length; ++i) {
            this._buffers[i].destroy();
          }
        }
        this._properties = null;
        this._buffers = null;
        this._bufferUpdateIDs = null;
      };
      _createClass(ParticleContainer2, [{
        key: "tint",
        get: function get() {
          return this._tint;
        },
        set: function set(value) {
          this._tint = value;
          (0, _utils.hex2rgb)(value, this.tintRgb);
        }
      }]);
      return ParticleContainer2;
    }(core.Container);
    exports.default = ParticleContainer;
  }
});

// node_modules/pixi.js/lib/particles/webgl/ParticleShader.js
var require_ParticleShader = __commonJS({
  "node_modules/pixi.js/lib/particles/webgl/ParticleShader.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _Shader2 = require_Shader();
    var _Shader3 = _interopRequireDefault(_Shader2);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var ParticleShader = function(_Shader) {
      _inherits(ParticleShader2, _Shader);
      function ParticleShader2(gl2) {
        _classCallCheck(this, ParticleShader2);
        return _possibleConstructorReturn(this, _Shader.call(
          this,
          gl2,
          // vertex shader
          ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "attribute vec4 aColor;", "attribute vec2 aPositionCoord;", "attribute float aRotation;", "uniform mat3 projectionMatrix;", "uniform vec4 uColor;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "void main(void){", "   float x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);", "   float y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);", "   vec2 v = vec2(x, y);", "   v = v + aPositionCoord;", "   gl_Position = vec4((projectionMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);", "   vTextureCoord = aTextureCoord;", "   vColor = aColor * uColor;", "}"].join("\n"),
          // hello
          ["varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform sampler2D uSampler;", "void main(void){", "  vec4 color = texture2D(uSampler, vTextureCoord) * vColor;", "  gl_FragColor = color;", "}"].join("\n")
        ));
      }
      return ParticleShader2;
    }(_Shader3.default);
    exports.default = ParticleShader;
  }
});

// node_modules/pixi.js/lib/particles/webgl/ParticleBuffer.js
var require_ParticleBuffer = __commonJS({
  "node_modules/pixi.js/lib/particles/webgl/ParticleBuffer.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _pixiGlCore = require_src();
    var _pixiGlCore2 = _interopRequireDefault(_pixiGlCore);
    var _createIndicesForQuads = require_createIndicesForQuads();
    var _createIndicesForQuads2 = _interopRequireDefault(_createIndicesForQuads);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var ParticleBuffer = function() {
      function ParticleBuffer2(gl2, properties, dynamicPropertyFlags, size) {
        _classCallCheck(this, ParticleBuffer2);
        this.gl = gl2;
        this.size = size;
        this.dynamicProperties = [];
        this.staticProperties = [];
        for (var i = 0; i < properties.length; ++i) {
          var property = properties[i];
          property = {
            attribute: property.attribute,
            size: property.size,
            uploadFunction: property.uploadFunction,
            unsignedByte: property.unsignedByte,
            offset: property.offset
          };
          if (dynamicPropertyFlags[i]) {
            this.dynamicProperties.push(property);
          } else {
            this.staticProperties.push(property);
          }
        }
        this.staticStride = 0;
        this.staticBuffer = null;
        this.staticData = null;
        this.staticDataUint32 = null;
        this.dynamicStride = 0;
        this.dynamicBuffer = null;
        this.dynamicData = null;
        this.dynamicDataUint32 = null;
        this._updateID = 0;
        this.initBuffers();
      }
      ParticleBuffer2.prototype.initBuffers = function initBuffers() {
        var gl2 = this.gl;
        var dynamicOffset = 0;
        this.indices = (0, _createIndicesForQuads2.default)(this.size);
        this.indexBuffer = _pixiGlCore2.default.GLBuffer.createIndexBuffer(gl2, this.indices, gl2.STATIC_DRAW);
        this.dynamicStride = 0;
        for (var i = 0; i < this.dynamicProperties.length; ++i) {
          var property = this.dynamicProperties[i];
          property.offset = dynamicOffset;
          dynamicOffset += property.size;
          this.dynamicStride += property.size;
        }
        var dynBuffer = new ArrayBuffer(this.size * this.dynamicStride * 4 * 4);
        this.dynamicData = new Float32Array(dynBuffer);
        this.dynamicDataUint32 = new Uint32Array(dynBuffer);
        this.dynamicBuffer = _pixiGlCore2.default.GLBuffer.createVertexBuffer(gl2, dynBuffer, gl2.STREAM_DRAW);
        var staticOffset = 0;
        this.staticStride = 0;
        for (var _i = 0; _i < this.staticProperties.length; ++_i) {
          var _property = this.staticProperties[_i];
          _property.offset = staticOffset;
          staticOffset += _property.size;
          this.staticStride += _property.size;
        }
        var statBuffer = new ArrayBuffer(this.size * this.staticStride * 4 * 4);
        this.staticData = new Float32Array(statBuffer);
        this.staticDataUint32 = new Uint32Array(statBuffer);
        this.staticBuffer = _pixiGlCore2.default.GLBuffer.createVertexBuffer(gl2, statBuffer, gl2.STATIC_DRAW);
        this.vao = new _pixiGlCore2.default.VertexArrayObject(gl2).addIndex(this.indexBuffer);
        for (var _i2 = 0; _i2 < this.dynamicProperties.length; ++_i2) {
          var _property2 = this.dynamicProperties[_i2];
          if (_property2.unsignedByte) {
            this.vao.addAttribute(this.dynamicBuffer, _property2.attribute, gl2.UNSIGNED_BYTE, true, this.dynamicStride * 4, _property2.offset * 4);
          } else {
            this.vao.addAttribute(this.dynamicBuffer, _property2.attribute, gl2.FLOAT, false, this.dynamicStride * 4, _property2.offset * 4);
          }
        }
        for (var _i3 = 0; _i3 < this.staticProperties.length; ++_i3) {
          var _property3 = this.staticProperties[_i3];
          if (_property3.unsignedByte) {
            this.vao.addAttribute(this.staticBuffer, _property3.attribute, gl2.UNSIGNED_BYTE, true, this.staticStride * 4, _property3.offset * 4);
          } else {
            this.vao.addAttribute(this.staticBuffer, _property3.attribute, gl2.FLOAT, false, this.staticStride * 4, _property3.offset * 4);
          }
        }
      };
      ParticleBuffer2.prototype.uploadDynamic = function uploadDynamic(children, startIndex, amount) {
        for (var i = 0; i < this.dynamicProperties.length; i++) {
          var property = this.dynamicProperties[i];
          property.uploadFunction(children, startIndex, amount, property.unsignedByte ? this.dynamicDataUint32 : this.dynamicData, this.dynamicStride, property.offset);
        }
        this.dynamicBuffer.upload();
      };
      ParticleBuffer2.prototype.uploadStatic = function uploadStatic(children, startIndex, amount) {
        for (var i = 0; i < this.staticProperties.length; i++) {
          var property = this.staticProperties[i];
          property.uploadFunction(children, startIndex, amount, property.unsignedByte ? this.staticDataUint32 : this.staticData, this.staticStride, property.offset);
        }
        this.staticBuffer.upload();
      };
      ParticleBuffer2.prototype.destroy = function destroy() {
        this.dynamicProperties = null;
        this.dynamicBuffer.destroy();
        this.dynamicBuffer = null;
        this.dynamicData = null;
        this.dynamicDataUint32 = null;
        this.staticProperties = null;
        this.staticBuffer.destroy();
        this.staticBuffer = null;
        this.staticData = null;
        this.staticDataUint32 = null;
      };
      return ParticleBuffer2;
    }();
    exports.default = ParticleBuffer;
  }
});

// node_modules/pixi.js/lib/particles/webgl/ParticleRenderer.js
var require_ParticleRenderer = __commonJS({
  "node_modules/pixi.js/lib/particles/webgl/ParticleRenderer.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _core = require_core();
    var core = _interopRequireWildcard(_core);
    var _ParticleShader = require_ParticleShader();
    var _ParticleShader2 = _interopRequireDefault(_ParticleShader);
    var _ParticleBuffer = require_ParticleBuffer();
    var _ParticleBuffer2 = _interopRequireDefault(_ParticleBuffer);
    var _utils = require_utils();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var ParticleRenderer = function(_core$ObjectRenderer) {
      _inherits(ParticleRenderer2, _core$ObjectRenderer);
      function ParticleRenderer2(renderer) {
        _classCallCheck(this, ParticleRenderer2);
        var _this = _possibleConstructorReturn(this, _core$ObjectRenderer.call(this, renderer));
        _this.shader = null;
        _this.indexBuffer = null;
        _this.properties = null;
        _this.tempMatrix = new core.Matrix();
        _this.CONTEXT_UID = 0;
        return _this;
      }
      ParticleRenderer2.prototype.onContextChange = function onContextChange() {
        var gl2 = this.renderer.gl;
        this.CONTEXT_UID = this.renderer.CONTEXT_UID;
        this.shader = new _ParticleShader2.default(gl2);
        this.properties = [
          // verticesData
          {
            attribute: this.shader.attributes.aVertexPosition,
            size: 2,
            uploadFunction: this.uploadVertices,
            offset: 0
          },
          // positionData
          {
            attribute: this.shader.attributes.aPositionCoord,
            size: 2,
            uploadFunction: this.uploadPosition,
            offset: 0
          },
          // rotationData
          {
            attribute: this.shader.attributes.aRotation,
            size: 1,
            uploadFunction: this.uploadRotation,
            offset: 0
          },
          // uvsData
          {
            attribute: this.shader.attributes.aTextureCoord,
            size: 2,
            uploadFunction: this.uploadUvs,
            offset: 0
          },
          // tintData
          {
            attribute: this.shader.attributes.aColor,
            size: 1,
            unsignedByte: true,
            uploadFunction: this.uploadTint,
            offset: 0
          }
        ];
      };
      ParticleRenderer2.prototype.start = function start() {
        this.renderer.bindShader(this.shader);
      };
      ParticleRenderer2.prototype.render = function render(container) {
        var children = container.children;
        var maxSize = container._maxSize;
        var batchSize = container._batchSize;
        var renderer = this.renderer;
        var totalChildren = children.length;
        if (totalChildren === 0) {
          return;
        } else if (totalChildren > maxSize) {
          totalChildren = maxSize;
        }
        var buffers = container._glBuffers[renderer.CONTEXT_UID];
        if (!buffers) {
          buffers = container._glBuffers[renderer.CONTEXT_UID] = this.generateBuffers(container);
        }
        var baseTexture = children[0]._texture.baseTexture;
        this.renderer.setBlendMode(core.utils.correctBlendMode(container.blendMode, baseTexture.premultipliedAlpha));
        var gl2 = renderer.gl;
        var m = container.worldTransform.copy(this.tempMatrix);
        m.prepend(renderer._activeRenderTarget.projectionMatrix);
        this.shader.uniforms.projectionMatrix = m.toArray(true);
        this.shader.uniforms.uColor = core.utils.premultiplyRgba(container.tintRgb, container.worldAlpha, this.shader.uniforms.uColor, baseTexture.premultipliedAlpha);
        this.shader.uniforms.uSampler = renderer.bindTexture(baseTexture);
        var updateStatic = false;
        for (var i = 0, j = 0; i < totalChildren; i += batchSize, j += 1) {
          var amount = totalChildren - i;
          if (amount > batchSize) {
            amount = batchSize;
          }
          if (j >= buffers.length) {
            if (!container.autoResize) {
              break;
            }
            buffers.push(this._generateOneMoreBuffer(container));
          }
          var buffer = buffers[j];
          buffer.uploadDynamic(children, i, amount);
          var bid = container._bufferUpdateIDs[j] || 0;
          updateStatic = updateStatic || buffer._updateID < bid;
          if (updateStatic) {
            buffer._updateID = container._updateID;
            buffer.uploadStatic(children, i, amount);
          }
          renderer.bindVao(buffer.vao);
          buffer.vao.draw(gl2.TRIANGLES, amount * 6);
        }
      };
      ParticleRenderer2.prototype.generateBuffers = function generateBuffers(container) {
        var gl2 = this.renderer.gl;
        var buffers = [];
        var size = container._maxSize;
        var batchSize = container._batchSize;
        var dynamicPropertyFlags = container._properties;
        for (var i = 0; i < size; i += batchSize) {
          buffers.push(new _ParticleBuffer2.default(gl2, this.properties, dynamicPropertyFlags, batchSize));
        }
        return buffers;
      };
      ParticleRenderer2.prototype._generateOneMoreBuffer = function _generateOneMoreBuffer(container) {
        var gl2 = this.renderer.gl;
        var batchSize = container._batchSize;
        var dynamicPropertyFlags = container._properties;
        return new _ParticleBuffer2.default(gl2, this.properties, dynamicPropertyFlags, batchSize);
      };
      ParticleRenderer2.prototype.uploadVertices = function uploadVertices(children, startIndex, amount, array, stride, offset) {
        var w0 = 0;
        var w1 = 0;
        var h0 = 0;
        var h1 = 0;
        for (var i = 0; i < amount; ++i) {
          var sprite = children[startIndex + i];
          var texture = sprite._texture;
          var sx = sprite.scale.x;
          var sy = sprite.scale.y;
          var trim = texture.trim;
          var orig = texture.orig;
          if (trim) {
            w1 = trim.x - sprite.anchor.x * orig.width;
            w0 = w1 + trim.width;
            h1 = trim.y - sprite.anchor.y * orig.height;
            h0 = h1 + trim.height;
          } else {
            w0 = orig.width * (1 - sprite.anchor.x);
            w1 = orig.width * -sprite.anchor.x;
            h0 = orig.height * (1 - sprite.anchor.y);
            h1 = orig.height * -sprite.anchor.y;
          }
          array[offset] = w1 * sx;
          array[offset + 1] = h1 * sy;
          array[offset + stride] = w0 * sx;
          array[offset + stride + 1] = h1 * sy;
          array[offset + stride * 2] = w0 * sx;
          array[offset + stride * 2 + 1] = h0 * sy;
          array[offset + stride * 3] = w1 * sx;
          array[offset + stride * 3 + 1] = h0 * sy;
          offset += stride * 4;
        }
      };
      ParticleRenderer2.prototype.uploadPosition = function uploadPosition(children, startIndex, amount, array, stride, offset) {
        for (var i = 0; i < amount; i++) {
          var spritePosition = children[startIndex + i].position;
          array[offset] = spritePosition.x;
          array[offset + 1] = spritePosition.y;
          array[offset + stride] = spritePosition.x;
          array[offset + stride + 1] = spritePosition.y;
          array[offset + stride * 2] = spritePosition.x;
          array[offset + stride * 2 + 1] = spritePosition.y;
          array[offset + stride * 3] = spritePosition.x;
          array[offset + stride * 3 + 1] = spritePosition.y;
          offset += stride * 4;
        }
      };
      ParticleRenderer2.prototype.uploadRotation = function uploadRotation(children, startIndex, amount, array, stride, offset) {
        for (var i = 0; i < amount; i++) {
          var spriteRotation = children[startIndex + i].rotation;
          array[offset] = spriteRotation;
          array[offset + stride] = spriteRotation;
          array[offset + stride * 2] = spriteRotation;
          array[offset + stride * 3] = spriteRotation;
          offset += stride * 4;
        }
      };
      ParticleRenderer2.prototype.uploadUvs = function uploadUvs(children, startIndex, amount, array, stride, offset) {
        for (var i = 0; i < amount; ++i) {
          var textureUvs = children[startIndex + i]._texture._uvs;
          if (textureUvs) {
            array[offset] = textureUvs.x0;
            array[offset + 1] = textureUvs.y0;
            array[offset + stride] = textureUvs.x1;
            array[offset + stride + 1] = textureUvs.y1;
            array[offset + stride * 2] = textureUvs.x2;
            array[offset + stride * 2 + 1] = textureUvs.y2;
            array[offset + stride * 3] = textureUvs.x3;
            array[offset + stride * 3 + 1] = textureUvs.y3;
            offset += stride * 4;
          } else {
            array[offset] = 0;
            array[offset + 1] = 0;
            array[offset + stride] = 0;
            array[offset + stride + 1] = 0;
            array[offset + stride * 2] = 0;
            array[offset + stride * 2 + 1] = 0;
            array[offset + stride * 3] = 0;
            array[offset + stride * 3 + 1] = 0;
            offset += stride * 4;
          }
        }
      };
      ParticleRenderer2.prototype.uploadTint = function uploadTint(children, startIndex, amount, array, stride, offset) {
        for (var i = 0; i < amount; ++i) {
          var sprite = children[startIndex + i];
          var premultiplied = sprite._texture.baseTexture.premultipliedAlpha;
          var alpha = sprite.alpha;
          var argb = alpha < 1 && premultiplied ? (0, _utils.premultiplyTint)(sprite._tintRGB, alpha) : sprite._tintRGB + (alpha * 255 << 24);
          array[offset] = argb;
          array[offset + stride] = argb;
          array[offset + stride * 2] = argb;
          array[offset + stride * 3] = argb;
          offset += stride * 4;
        }
      };
      ParticleRenderer2.prototype.destroy = function destroy() {
        if (this.renderer.gl) {
          this.renderer.gl.deleteBuffer(this.indexBuffer);
        }
        _core$ObjectRenderer.prototype.destroy.call(this);
        this.shader.destroy();
        this.indices = null;
        this.tempMatrix = null;
      };
      return ParticleRenderer2;
    }(core.ObjectRenderer);
    exports.default = ParticleRenderer;
    core.WebGLRenderer.registerPlugin("particle", ParticleRenderer);
  }
});

// node_modules/pixi.js/lib/particles/index.js
var require_particles = __commonJS({
  "node_modules/pixi.js/lib/particles/index.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _ParticleContainer = require_ParticleContainer();
    Object.defineProperty(exports, "ParticleContainer", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_ParticleContainer).default;
      }
    });
    var _ParticleRenderer = require_ParticleRenderer();
    Object.defineProperty(exports, "ParticleRenderer", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_ParticleRenderer).default;
      }
    });
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
  }
});

// node_modules/pixi.js/lib/prepare/limiters/CountLimiter.js
var require_CountLimiter = __commonJS({
  "node_modules/pixi.js/lib/prepare/limiters/CountLimiter.js"(exports) {
    "use strict";
    exports.__esModule = true;
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var CountLimiter = function() {
      function CountLimiter2(maxItemsPerFrame) {
        _classCallCheck(this, CountLimiter2);
        this.maxItemsPerFrame = maxItemsPerFrame;
        this.itemsLeft = 0;
      }
      CountLimiter2.prototype.beginFrame = function beginFrame() {
        this.itemsLeft = this.maxItemsPerFrame;
      };
      CountLimiter2.prototype.allowedToUpload = function allowedToUpload() {
        return this.itemsLeft-- > 0;
      };
      return CountLimiter2;
    }();
    exports.default = CountLimiter;
  }
});

// node_modules/pixi.js/lib/prepare/BasePrepare.js
var require_BasePrepare = __commonJS({
  "node_modules/pixi.js/lib/prepare/BasePrepare.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _core = require_core();
    var core = _interopRequireWildcard(_core);
    var _CountLimiter = require_CountLimiter();
    var _CountLimiter2 = _interopRequireDefault(_CountLimiter);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var SharedTicker = core.ticker.shared;
    core.settings.UPLOADS_PER_FRAME = 4;
    var BasePrepare = function() {
      function BasePrepare2(renderer) {
        var _this = this;
        _classCallCheck(this, BasePrepare2);
        this.limiter = new _CountLimiter2.default(core.settings.UPLOADS_PER_FRAME);
        this.renderer = renderer;
        this.uploadHookHelper = null;
        this.queue = [];
        this.addHooks = [];
        this.uploadHooks = [];
        this.completes = [];
        this.ticking = false;
        this.delayedTick = function() {
          if (!_this.queue) {
            return;
          }
          _this.prepareItems();
        };
        this.registerFindHook(findText);
        this.registerFindHook(findTextStyle);
        this.registerFindHook(findMultipleBaseTextures);
        this.registerFindHook(findBaseTexture);
        this.registerFindHook(findTexture);
        this.registerUploadHook(drawText);
        this.registerUploadHook(calculateTextStyle);
      }
      BasePrepare2.prototype.upload = function upload(item, done) {
        if (typeof item === "function") {
          done = item;
          item = null;
        }
        if (item) {
          this.add(item);
        }
        if (this.queue.length) {
          if (done) {
            this.completes.push(done);
          }
          if (!this.ticking) {
            this.ticking = true;
            SharedTicker.addOnce(this.tick, this, core.UPDATE_PRIORITY.UTILITY);
          }
        } else if (done) {
          done();
        }
      };
      BasePrepare2.prototype.tick = function tick() {
        setTimeout(this.delayedTick, 0);
      };
      BasePrepare2.prototype.prepareItems = function prepareItems() {
        this.limiter.beginFrame();
        while (this.queue.length && this.limiter.allowedToUpload()) {
          var item = this.queue[0];
          var uploaded = false;
          if (item && !item._destroyed) {
            for (var i = 0, len = this.uploadHooks.length; i < len; i++) {
              if (this.uploadHooks[i](this.uploadHookHelper, item)) {
                this.queue.shift();
                uploaded = true;
                break;
              }
            }
          }
          if (!uploaded) {
            this.queue.shift();
          }
        }
        if (!this.queue.length) {
          this.ticking = false;
          var completes = this.completes.slice(0);
          this.completes.length = 0;
          for (var _i = 0, _len = completes.length; _i < _len; _i++) {
            completes[_i]();
          }
        } else {
          SharedTicker.addOnce(this.tick, this, core.UPDATE_PRIORITY.UTILITY);
        }
      };
      BasePrepare2.prototype.registerFindHook = function registerFindHook(addHook) {
        if (addHook) {
          this.addHooks.push(addHook);
        }
        return this;
      };
      BasePrepare2.prototype.registerUploadHook = function registerUploadHook(uploadHook) {
        if (uploadHook) {
          this.uploadHooks.push(uploadHook);
        }
        return this;
      };
      BasePrepare2.prototype.add = function add(item) {
        for (var i = 0, len = this.addHooks.length; i < len; i++) {
          if (this.addHooks[i](item, this.queue)) {
            break;
          }
        }
        if (item instanceof core.Container) {
          for (var _i2 = item.children.length - 1; _i2 >= 0; _i2--) {
            this.add(item.children[_i2]);
          }
        }
        return this;
      };
      BasePrepare2.prototype.destroy = function destroy() {
        if (this.ticking) {
          SharedTicker.remove(this.tick, this);
        }
        this.ticking = false;
        this.addHooks = null;
        this.uploadHooks = null;
        this.renderer = null;
        this.completes = null;
        this.queue = null;
        this.limiter = null;
        this.uploadHookHelper = null;
      };
      return BasePrepare2;
    }();
    exports.default = BasePrepare;
    function findMultipleBaseTextures(item, queue) {
      var result = false;
      if (item && item._textures && item._textures.length) {
        for (var i = 0; i < item._textures.length; i++) {
          if (item._textures[i] instanceof core.Texture) {
            var baseTexture = item._textures[i].baseTexture;
            if (queue.indexOf(baseTexture) === -1) {
              queue.push(baseTexture);
              result = true;
            }
          }
        }
      }
      return result;
    }
    function findBaseTexture(item, queue) {
      if (item instanceof core.BaseTexture) {
        if (queue.indexOf(item) === -1) {
          queue.push(item);
        }
        return true;
      }
      return false;
    }
    function findTexture(item, queue) {
      if (item._texture && item._texture instanceof core.Texture) {
        var texture = item._texture.baseTexture;
        if (queue.indexOf(texture) === -1) {
          queue.push(texture);
        }
        return true;
      }
      return false;
    }
    function drawText(helper, item) {
      if (item instanceof core.Text) {
        item.updateText(true);
        return true;
      }
      return false;
    }
    function calculateTextStyle(helper, item) {
      if (item instanceof core.TextStyle) {
        var font = item.toFontString();
        core.TextMetrics.measureFont(font);
        return true;
      }
      return false;
    }
    function findText(item, queue) {
      if (item instanceof core.Text) {
        if (queue.indexOf(item.style) === -1) {
          queue.push(item.style);
        }
        if (queue.indexOf(item) === -1) {
          queue.push(item);
        }
        var texture = item._texture.baseTexture;
        if (queue.indexOf(texture) === -1) {
          queue.push(texture);
        }
        return true;
      }
      return false;
    }
    function findTextStyle(item, queue) {
      if (item instanceof core.TextStyle) {
        if (queue.indexOf(item) === -1) {
          queue.push(item);
        }
        return true;
      }
      return false;
    }
  }
});

// node_modules/pixi.js/lib/prepare/webgl/WebGLPrepare.js
var require_WebGLPrepare = __commonJS({
  "node_modules/pixi.js/lib/prepare/webgl/WebGLPrepare.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _core = require_core();
    var core = _interopRequireWildcard(_core);
    var _BasePrepare2 = require_BasePrepare();
    var _BasePrepare3 = _interopRequireDefault(_BasePrepare2);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var WebGLPrepare = function(_BasePrepare) {
      _inherits(WebGLPrepare2, _BasePrepare);
      function WebGLPrepare2(renderer) {
        _classCallCheck(this, WebGLPrepare2);
        var _this = _possibleConstructorReturn(this, _BasePrepare.call(this, renderer));
        _this.uploadHookHelper = _this.renderer;
        _this.registerFindHook(findGraphics);
        _this.registerUploadHook(uploadBaseTextures);
        _this.registerUploadHook(uploadGraphics);
        return _this;
      }
      return WebGLPrepare2;
    }(_BasePrepare3.default);
    exports.default = WebGLPrepare;
    function uploadBaseTextures(renderer, item) {
      if (item instanceof core.BaseTexture) {
        if (!item._glTextures[renderer.CONTEXT_UID]) {
          renderer.textureManager.updateTexture(item);
        }
        return true;
      }
      return false;
    }
    function uploadGraphics(renderer, item) {
      if (item instanceof core.Graphics) {
        if (item.dirty || item.clearDirty || !item._webGL[renderer.plugins.graphics.CONTEXT_UID]) {
          renderer.plugins.graphics.updateGraphics(item);
        }
        return true;
      }
      return false;
    }
    function findGraphics(item, queue) {
      if (item instanceof core.Graphics) {
        queue.push(item);
        return true;
      }
      return false;
    }
    core.WebGLRenderer.registerPlugin("prepare", WebGLPrepare);
  }
});

// node_modules/pixi.js/lib/prepare/canvas/CanvasPrepare.js
var require_CanvasPrepare = __commonJS({
  "node_modules/pixi.js/lib/prepare/canvas/CanvasPrepare.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _core = require_core();
    var core = _interopRequireWildcard(_core);
    var _BasePrepare2 = require_BasePrepare();
    var _BasePrepare3 = _interopRequireDefault(_BasePrepare2);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var CANVAS_START_SIZE = 16;
    var CanvasPrepare = function(_BasePrepare) {
      _inherits(CanvasPrepare2, _BasePrepare);
      function CanvasPrepare2(renderer) {
        _classCallCheck(this, CanvasPrepare2);
        var _this = _possibleConstructorReturn(this, _BasePrepare.call(this, renderer));
        _this.uploadHookHelper = _this;
        _this.canvas = document.createElement("canvas");
        _this.canvas.width = CANVAS_START_SIZE;
        _this.canvas.height = CANVAS_START_SIZE;
        _this.ctx = _this.canvas.getContext("2d");
        _this.registerUploadHook(uploadBaseTextures);
        return _this;
      }
      CanvasPrepare2.prototype.destroy = function destroy() {
        _BasePrepare.prototype.destroy.call(this);
        this.ctx = null;
        this.canvas = null;
      };
      return CanvasPrepare2;
    }(_BasePrepare3.default);
    exports.default = CanvasPrepare;
    function uploadBaseTextures(prepare, item) {
      if (item instanceof core.BaseTexture) {
        var image = item.source;
        var imageWidth = image.width === 0 ? prepare.canvas.width : Math.min(prepare.canvas.width, image.width);
        var imageHeight = image.height === 0 ? prepare.canvas.height : Math.min(prepare.canvas.height, image.height);
        prepare.ctx.drawImage(image, 0, 0, imageWidth, imageHeight, 0, 0, prepare.canvas.width, prepare.canvas.height);
        return true;
      }
      return false;
    }
    core.CanvasRenderer.registerPlugin("prepare", CanvasPrepare);
  }
});

// node_modules/pixi.js/lib/prepare/limiters/TimeLimiter.js
var require_TimeLimiter = __commonJS({
  "node_modules/pixi.js/lib/prepare/limiters/TimeLimiter.js"(exports) {
    "use strict";
    exports.__esModule = true;
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var TimeLimiter = function() {
      function TimeLimiter2(maxMilliseconds) {
        _classCallCheck(this, TimeLimiter2);
        this.maxMilliseconds = maxMilliseconds;
        this.frameStart = 0;
      }
      TimeLimiter2.prototype.beginFrame = function beginFrame() {
        this.frameStart = Date.now();
      };
      TimeLimiter2.prototype.allowedToUpload = function allowedToUpload() {
        return Date.now() - this.frameStart < this.maxMilliseconds;
      };
      return TimeLimiter2;
    }();
    exports.default = TimeLimiter;
  }
});

// node_modules/pixi.js/lib/prepare/index.js
var require_prepare = __commonJS({
  "node_modules/pixi.js/lib/prepare/index.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _WebGLPrepare = require_WebGLPrepare();
    Object.defineProperty(exports, "webgl", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_WebGLPrepare).default;
      }
    });
    var _CanvasPrepare = require_CanvasPrepare();
    Object.defineProperty(exports, "canvas", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_CanvasPrepare).default;
      }
    });
    var _BasePrepare = require_BasePrepare();
    Object.defineProperty(exports, "BasePrepare", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_BasePrepare).default;
      }
    });
    var _CountLimiter = require_CountLimiter();
    Object.defineProperty(exports, "CountLimiter", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_CountLimiter).default;
      }
    });
    var _TimeLimiter = require_TimeLimiter();
    Object.defineProperty(exports, "TimeLimiter", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_TimeLimiter).default;
      }
    });
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
  }
});

// node_modules/pixi.js/lib/index.js
var require_lib2 = __commonJS({
  "node_modules/pixi.js/lib/index.js"(exports) {
    if (global === void 0) {
      global = window;
    }
    var global;
    exports.__esModule = true;
    exports.loader = exports.prepare = exports.particles = exports.mesh = exports.loaders = exports.interaction = exports.filters = exports.extras = exports.extract = exports.accessibility = void 0;
    var _polyfill = require_polyfill();
    Object.keys(_polyfill).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
          return _polyfill[key];
        }
      });
    });
    var _core = require_core();
    Object.keys(_core).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
          return _core[key];
        }
      });
    });
    var _deprecation = require_deprecation();
    var _deprecation2 = _interopRequireDefault(_deprecation);
    var _accessibility = require_accessibility();
    var accessibility = _interopRequireWildcard(_accessibility);
    var _extract = require_extract();
    var extract = _interopRequireWildcard(_extract);
    var _extras = require_extras();
    var extras = _interopRequireWildcard(_extras);
    var _filters = require_filters();
    var filters = _interopRequireWildcard(_filters);
    var _interaction = require_interaction();
    var interaction = _interopRequireWildcard(_interaction);
    var _loaders = require_loaders();
    var loaders = _interopRequireWildcard(_loaders);
    var _mesh = require_mesh();
    var mesh = _interopRequireWildcard(_mesh);
    var _particles = require_particles();
    var particles = _interopRequireWildcard(_particles);
    var _prepare = require_prepare();
    var prepare = _interopRequireWildcard(_prepare);
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    _core.utils.mixins.performMixins();
    var loader = loaders.shared || null;
    exports.accessibility = accessibility;
    exports.extract = extract;
    exports.extras = extras;
    exports.filters = filters;
    exports.interaction = interaction;
    exports.loaders = loaders;
    exports.mesh = mesh;
    exports.particles = particles;
    exports.prepare = prepare;
    exports.loader = loader;
    if (typeof _deprecation2.default === "function") {
      (0, _deprecation2.default)(exports);
    }
    global.PIXI = exports;
  }
});
export default require_lib2();
/*! Bundled license information:

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)
*/
//# sourceMappingURL=pixi__js.js.map
