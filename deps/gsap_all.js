import {
  AttrPlugin,
  Back,
  BezierPlugin,
  Bounce,
  CSSPlugin,
  Circ,
  DirectionalRotationPlugin,
  Ease,
  Elastic,
  EventDispatcher,
  Expo,
  ExpoScaleEase,
  Linear,
  Power0,
  Power1,
  Power2,
  Power3,
  Power4,
  RoughEase,
  RoundPropsPlugin,
  Sine,
  SlowMo,
  SteppedEase,
  TimelineLite,
  TimelineMax,
  TweenLite as TweenLite2,
  TweenMax,
  TweenPlugin,
  _gsScope,
  globals
} from "./chunk-EXHVEC2E.js";
import "./chunk-6NOISVLF.js";

// node_modules/gsap/ColorPropsPlugin.js
var _numExp = /(\d|\.)+/g;
var _relNumExp = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g;
var _colorLookup = {
  aqua: [0, 255, 255],
  lime: [0, 255, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, 255],
  navy: [0, 0, 128],
  white: [255, 255, 255],
  fuchsia: [255, 0, 255],
  olive: [128, 128, 0],
  yellow: [255, 255, 0],
  orange: [255, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [255, 0, 0],
  pink: [255, 192, 203],
  cyan: [0, 255, 255],
  transparent: [255, 255, 255, 0]
};
var _hue = function(h, m1, m2) {
  h = h < 0 ? h + 1 : h > 1 ? h - 1 : h;
  return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < 0.5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * 255 + 0.5 | 0;
};
var _parseColor = function(v, toHSL) {
  var a, r, g, b, h, s, l, max, min, d, wasHSL;
  if (!v) {
    a = _colorLookup.black;
  } else if (typeof v === "number") {
    a = [v >> 16, v >> 8 & 255, v & 255];
  } else {
    if (v.charAt(v.length - 1) === ",") {
      v = v.substr(0, v.length - 1);
    }
    if (_colorLookup[v]) {
      a = _colorLookup[v];
    } else if (v.charAt(0) === "#") {
      if (v.length === 4) {
        r = v.charAt(1);
        g = v.charAt(2);
        b = v.charAt(3);
        v = "#" + r + r + g + g + b + b;
      }
      v = parseInt(v.substr(1), 16);
      a = [v >> 16, v >> 8 & 255, v & 255];
    } else if (v.substr(0, 3) === "hsl") {
      a = wasHSL = v.match(_numExp);
      if (!toHSL) {
        h = Number(a[0]) % 360 / 360;
        s = Number(a[1]) / 100;
        l = Number(a[2]) / 100;
        g = l <= 0.5 ? l * (s + 1) : l + s - l * s;
        r = l * 2 - g;
        if (a.length > 3) {
          a[3] = Number(a[3]);
        }
        a[0] = _hue(h + 1 / 3, r, g);
        a[1] = _hue(h, r, g);
        a[2] = _hue(h - 1 / 3, r, g);
      } else if (v.indexOf("=") !== -1) {
        return v.match(_relNumExp);
      }
    } else {
      a = v.match(_numExp) || _colorLookup.transparent;
    }
    a[0] = Number(a[0]);
    a[1] = Number(a[1]);
    a[2] = Number(a[2]);
    if (a.length > 3) {
      a[3] = Number(a[3]);
    }
  }
  if (toHSL && !wasHSL) {
    r = a[0] / 255;
    g = a[1] / 255;
    b = a[2] / 255;
    max = Math.max(r, g, b);
    min = Math.min(r, g, b);
    l = (max + min) / 2;
    if (max === min) {
      h = s = 0;
    } else {
      d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
      h *= 60;
    }
    a[0] = h + 0.5 | 0;
    a[1] = s * 100 + 0.5 | 0;
    a[2] = l * 100 + 0.5 | 0;
  }
  return a;
};
var _formatColors = function(s, toHSL) {
  var colors = (s + "").match(_colorExp) || [], charIndex = 0, parsed = "", i2, color, temp;
  if (!colors.length) {
    return s;
  }
  for (i2 = 0; i2 < colors.length; i2++) {
    color = colors[i2];
    temp = s.substr(charIndex, s.indexOf(color, charIndex) - charIndex);
    charIndex += temp.length + color.length;
    color = _parseColor(color, toHSL);
    if (color.length === 3) {
      color.push(1);
    }
    parsed += temp + (toHSL ? "hsla(" + color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : "rgba(" + color.join(",")) + ")";
  }
  return parsed + s.substr(charIndex);
};
var p;
var _colorStringFilter;
var TweenLite3 = (_gsScope.GreenSockGlobals || _gsScope).TweenLite;
var _colorExp = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
var ColorPropsPlugin = _gsScope._gsDefine.plugin({
  propName: "colorProps",
  version: "1.5.3",
  priority: -1,
  API: 2,
  global: true,
  //called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
  init: function(target, value, tween, index) {
    var p6, proxy, pt, val;
    this._target = target;
    this._proxy = proxy = (value.format + "").toUpperCase() === "NUMBER" ? {} : 0;
    for (p6 in value) {
      if (p6 !== "format") {
        if (proxy) {
          this._firstNumPT = pt = { _next: this._firstNumPT, t: target, p: p6, f: typeof target[p6] === "function" };
          proxy[p6] = "rgb(" + _parseColor(!pt.f ? target[p6] : target[p6.indexOf("set") || typeof target["get" + p6.substr(3)] !== "function" ? p6 : "get" + p6.substr(3)]()).join(",") + ")";
          val = value[p6];
          if (typeof val === "function") {
            val = val(index, target);
          }
          this._addTween(proxy, p6, "get", typeof val === "number" ? "rgb(" + _parseColor(val, false).join(",") + ")" : val, p6, null, null, _colorStringFilter);
        } else {
          this._addTween(target, p6, "get", value[p6], p6, null, null, _colorStringFilter, index);
        }
      }
    }
    return true;
  },
  //called each time the values should be updated, and the ratio gets passed as the only parameter (typically it's a value between 0 and 1, but it can exceed those when using an ease like Elastic.easeOut or Back.easeOut, etc.)
  set: function(v) {
    var pt = this._firstNumPT, val;
    this._super.setRatio.call(this, v);
    while (pt) {
      val = _parseColor(this._proxy[pt.p], false);
      val = val[0] << 16 | val[1] << 8 | val[2];
      if (pt.f) {
        this._target[pt.p](val);
      } else {
        this._target[pt.p] = val;
      }
      pt = pt._next;
    }
  }
});
for (p in _colorLookup) {
  _colorExp += "|" + p + "\\b";
}
_colorExp = new RegExp(_colorExp + ")", "gi");
ColorPropsPlugin.colorStringFilter = _colorStringFilter = function(a) {
  var combined = a[0] + " " + a[1], toHSL;
  _colorExp.lastIndex = 0;
  if (_colorExp.test(combined)) {
    toHSL = combined.indexOf("hsl(") !== -1 || combined.indexOf("hsla(") !== -1;
    a[0] = _formatColors(a[0], toHSL);
    a[1] = _formatColors(a[1], toHSL);
  }
};
if (!TweenLite3.defaultStringFilter) {
  TweenLite3.defaultStringFilter = ColorPropsPlugin.colorStringFilter;
}
ColorPropsPlugin.parseColor = _parseColor;
p = ColorPropsPlugin.prototype;
p._firstNumPT = null;
p._kill = function(lookup) {
  var pt = this._firstNumPT, prev;
  while (pt) {
    if (pt.p in lookup) {
      if (pt === p._firstNumPT) {
        this._firstNumPT = pt._next;
      }
      if (prev) {
        prev._next = pt._next;
      }
    } else {
      prev = pt;
    }
    pt = pt._next;
  }
  return this._super._kill(lookup);
};

// node_modules/gsap/CSSRulePlugin.js
_gsScope._gsDefine("plugins.CSSRulePlugin", ["plugins.TweenPlugin", "TweenLite", "plugins.CSSPlugin"], function() {
  var CSSRulePlugin2 = function() {
    TweenPlugin.call(this, "cssRule");
    this._overwriteProps.length = 0;
  }, _doc2 = _gsScope.document, _superSetRatio = CSSPlugin.prototype.setRatio, p6 = CSSRulePlugin2.prototype = new CSSPlugin();
  p6._propName = "cssRule";
  p6.constructor = CSSRulePlugin2;
  CSSRulePlugin2.version = "0.6.8";
  CSSRulePlugin2.API = 2;
  CSSRulePlugin2.getRule = function(selector) {
    var ruleProp = _doc2.all ? "rules" : "cssRules", ss = _doc2.styleSheets, i2 = ss.length, pseudo = selector.charAt(0) === ":", j, curSS, cs, a;
    selector = (pseudo ? "" : ",") + selector.split("::").join(":").toLowerCase() + ",";
    if (pseudo) {
      a = [];
    }
    while (--i2 > -1) {
      try {
        curSS = ss[i2][ruleProp];
        if (!curSS) {
          continue;
        }
        j = curSS.length;
      } catch (e) {
        console.log(e);
        continue;
      }
      while (--j > -1) {
        cs = curSS[j];
        if (cs.selectorText && ("," + cs.selectorText.split("::").join(":").toLowerCase() + ",").indexOf(selector) !== -1) {
          if (pseudo) {
            a.push(cs.style);
          } else {
            return cs.style;
          }
        }
      }
    }
    return a;
  };
  p6._onInitTween = function(target, value, tween) {
    if (target.cssText === void 0) {
      return false;
    }
    var div = target._gsProxy = target._gsProxy || _doc2.createElement("div");
    this._ss = target;
    this._proxy = div.style;
    div.style.cssText = target.cssText;
    CSSPlugin.prototype._onInitTween.call(this, div, value, tween);
    return true;
  };
  p6.setRatio = function(v) {
    _superSetRatio.call(this, v);
    var proxy = this._proxy, ss = this._ss, i2 = proxy.length;
    while (--i2 > -1) {
      ss[proxy[i2]] = proxy[proxy[i2]];
    }
  };
  TweenPlugin.activate([CSSRulePlugin2]);
  return CSSRulePlugin2;
}, true);
var CSSRulePlugin = globals.CSSRulePlugin;

// node_modules/gsap/EaselPlugin.js
var _numExp2 = /(\d|\.)+/g;
var _ColorFilter;
var _ColorMatrixFilter;
var _colorProps = ["redMultiplier", "greenMultiplier", "blueMultiplier", "alphaMultiplier", "redOffset", "greenOffset", "blueOffset", "alphaOffset"];
var _colorLookup2 = {
  aqua: [0, 255, 255],
  lime: [0, 255, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, 255],
  navy: [0, 0, 128],
  white: [255, 255, 255],
  fuchsia: [255, 0, 255],
  olive: [128, 128, 0],
  yellow: [255, 255, 0],
  orange: [255, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [255, 0, 0],
  pink: [255, 192, 203],
  cyan: [0, 255, 255],
  transparent: [255, 255, 255, 0]
};
var _parseColor2 = function(color) {
  if (color === "" || color == null || color === "none") {
    return _colorLookup2.transparent;
  } else if (_colorLookup2[color]) {
    return _colorLookup2[color];
  } else if (typeof color === "number") {
    return [color >> 16, color >> 8 & 255, color & 255];
  } else if (color.charAt(0) === "#") {
    if (color.length === 4) {
      color = "#" + color.charAt(1) + color.charAt(1) + color.charAt(2) + color.charAt(2) + color.charAt(3) + color.charAt(3);
    }
    color = parseInt(color.substr(1), 16);
    return [color >> 16, color >> 8 & 255, color & 255];
  }
  return color.match(_numExp2) || _colorLookup2.transparent;
};
var _parseColorFilter = function(t, v, pg) {
  if (!_ColorFilter) {
    _ColorFilter = _gsScope.ColorFilter || _gsScope.createjs.ColorFilter;
    if (!_ColorFilter) {
      throw "EaselPlugin error: The EaselJS ColorFilter JavaScript file wasn't loaded.";
    }
  }
  var filters = t.filters || [], i2 = filters.length, c, s, e, a, p6;
  while (--i2 > -1) {
    if (filters[i2] instanceof _ColorFilter) {
      s = filters[i2];
      break;
    }
  }
  if (!s) {
    s = new _ColorFilter();
    filters.push(s);
    t.filters = filters;
  }
  e = s.clone();
  if (v.tint != null) {
    c = _parseColor2(v.tint);
    a = v.tintAmount != null ? Number(v.tintAmount) : 1;
    e.redOffset = Number(c[0]) * a;
    e.greenOffset = Number(c[1]) * a;
    e.blueOffset = Number(c[2]) * a;
    e.redMultiplier = e.greenMultiplier = e.blueMultiplier = 1 - a;
  } else {
    for (p6 in v) {
      if (p6 !== "exposure") {
        if (p6 !== "brightness") {
          e[p6] = Number(v[p6]);
        }
      }
    }
  }
  if (v.exposure != null) {
    e.redOffset = e.greenOffset = e.blueOffset = 255 * (Number(v.exposure) - 1);
    e.redMultiplier = e.greenMultiplier = e.blueMultiplier = 1;
  } else if (v.brightness != null) {
    a = Number(v.brightness) - 1;
    e.redOffset = e.greenOffset = e.blueOffset = a > 0 ? a * 255 : 0;
    e.redMultiplier = e.greenMultiplier = e.blueMultiplier = 1 - Math.abs(a);
  }
  i2 = 8;
  while (--i2 > -1) {
    p6 = _colorProps[i2];
    if (s[p6] !== e[p6]) {
      pg._addTween(s, p6, s[p6], e[p6], "easel_colorFilter");
    }
  }
  pg._overwriteProps.push("easel_colorFilter");
  if (!t.cacheID) {
    throw "EaselPlugin warning: for filters to display in EaselJS, you must call the object's cache() method first. " + t;
  }
};
var _idMatrix = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];
var _lumR = 0.212671;
var _lumG = 0.71516;
var _lumB = 0.072169;
var _applyMatrix = function(m, m2) {
  if (!(m instanceof Array) || !(m2 instanceof Array)) {
    return m2;
  }
  var temp = [], i2 = 0, z = 0, y, x;
  for (y = 0; y < 4; y++) {
    for (x = 0; x < 5; x++) {
      z = x === 4 ? m[i2 + 4] : 0;
      temp[i2 + x] = m[i2] * m2[x] + m[i2 + 1] * m2[x + 5] + m[i2 + 2] * m2[x + 10] + m[i2 + 3] * m2[x + 15] + z;
    }
    i2 += 5;
  }
  return temp;
};
var _setSaturation = function(m, n) {
  if (isNaN(n)) {
    return m;
  }
  var inv = 1 - n, r = inv * _lumR, g = inv * _lumG, b = inv * _lumB;
  return _applyMatrix([r + n, g, b, 0, 0, r, g + n, b, 0, 0, r, g, b + n, 0, 0, 0, 0, 0, 1, 0], m);
};
var _colorize = function(m, color, amount) {
  if (isNaN(amount)) {
    amount = 1;
  }
  var c = _parseColor2(color), r = c[0] / 255, g = c[1] / 255, b = c[2] / 255, inv = 1 - amount;
  return _applyMatrix([inv + amount * r * _lumR, amount * r * _lumG, amount * r * _lumB, 0, 0, amount * g * _lumR, inv + amount * g * _lumG, amount * g * _lumB, 0, 0, amount * b * _lumR, amount * b * _lumG, inv + amount * b * _lumB, 0, 0, 0, 0, 0, 1, 0], m);
};
var _setHue = function(m, n) {
  if (isNaN(n)) {
    return m;
  }
  n *= Math.PI / 180;
  var c = Math.cos(n), s = Math.sin(n);
  return _applyMatrix([_lumR + c * (1 - _lumR) + s * -_lumR, _lumG + c * -_lumG + s * -_lumG, _lumB + c * -_lumB + s * (1 - _lumB), 0, 0, _lumR + c * -_lumR + s * 0.143, _lumG + c * (1 - _lumG) + s * 0.14, _lumB + c * -_lumB + s * -0.283, 0, 0, _lumR + c * -_lumR + s * -(1 - _lumR), _lumG + c * -_lumG + s * _lumG, _lumB + c * (1 - _lumB) + s * _lumB, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], m);
};
var _setContrast = function(m, n) {
  if (isNaN(n)) {
    return m;
  }
  n += 0.01;
  return _applyMatrix([n, 0, 0, 0, 128 * (1 - n), 0, n, 0, 0, 128 * (1 - n), 0, 0, n, 0, 128 * (1 - n), 0, 0, 0, 1, 0], m);
};
var _parseColorMatrixFilter = function(t, v, pg) {
  if (!_ColorMatrixFilter) {
    _ColorMatrixFilter = _gsScope.ColorMatrixFilter || _gsScope.createjs.ColorMatrixFilter;
    if (!_ColorMatrixFilter) {
      throw "EaselPlugin error: The EaselJS ColorMatrixFilter JavaScript file wasn't loaded.";
    }
  }
  var filters = t.filters || [], i2 = filters.length, matrix, startMatrix, s;
  while (--i2 > -1) {
    if (filters[i2] instanceof _ColorMatrixFilter) {
      s = filters[i2];
      break;
    }
  }
  if (!s) {
    s = new _ColorMatrixFilter(_idMatrix.slice());
    filters.push(s);
    t.filters = filters;
  }
  startMatrix = s.matrix;
  matrix = _idMatrix.slice();
  if (v.colorize != null) {
    matrix = _colorize(matrix, v.colorize, Number(v.colorizeAmount));
  }
  if (v.contrast != null) {
    matrix = _setContrast(matrix, Number(v.contrast));
  }
  if (v.hue != null) {
    matrix = _setHue(matrix, Number(v.hue));
  }
  if (v.saturation != null) {
    matrix = _setSaturation(matrix, Number(v.saturation));
  }
  i2 = matrix.length;
  while (--i2 > -1) {
    if (matrix[i2] !== startMatrix[i2]) {
      pg._addTween(startMatrix, i2, startMatrix[i2], matrix[i2], "easel_colorMatrixFilter");
    }
  }
  pg._overwriteProps.push("easel_colorMatrixFilter");
  if (!t.cacheID) {
    throw "EaselPlugin warning: for filters to display in EaselJS, you must call the object's cache() method first. " + t;
  }
  pg._matrix = startMatrix;
};
var EaselPlugin = _gsScope._gsDefine.plugin({
  propName: "easel",
  priority: -1,
  version: "0.2.2",
  API: 2,
  //called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
  init: function(target, value, tween, index) {
    this._target = target;
    var p6, pt, tint, colorMatrix, end, labels, i2;
    for (p6 in value) {
      end = value[p6];
      if (typeof end === "function") {
        end = end(index, target);
      }
      if (p6 === "colorFilter" || p6 === "tint" || p6 === "tintAmount" || p6 === "exposure" || p6 === "brightness") {
        if (!tint) {
          _parseColorFilter(target, value.colorFilter || value, this);
          tint = true;
        }
      } else if (p6 === "saturation" || p6 === "contrast" || p6 === "hue" || p6 === "colorize" || p6 === "colorizeAmount") {
        if (!colorMatrix) {
          _parseColorMatrixFilter(target, value.colorMatrixFilter || value, this);
          colorMatrix = true;
        }
      } else if (p6 === "frame") {
        this._firstPT = pt = { _next: this._firstPT, t: target, p: "gotoAndStop", s: target.currentFrame, f: true, n: "frame", pr: 0, type: 0, m: Math.round };
        if (typeof end === "string" && end.charAt(1) !== "=" && (labels = target.labels)) {
          for (i2 = 0; i2 < labels.length; i2++) {
            if (labels[i2].label === end) {
              end = labels[i2].position;
            }
          }
        }
        pt.c = typeof end === "number" ? end - pt.s : parseFloat((end + "").split("=").join(""));
        if (pt._next) {
          pt._next._prev = pt;
        }
      } else if (target[p6] != null) {
        this._firstPT = pt = { _next: this._firstPT, t: target, p: p6, f: typeof target[p6] === "function", n: p6, pr: 0, type: 0 };
        pt.s = !pt.f ? parseFloat(target[p6]) : target[p6.indexOf("set") || typeof target["get" + p6.substr(3)] !== "function" ? p6 : "get" + p6.substr(3)]();
        pt.c = typeof end === "number" ? end - pt.s : typeof end === "string" ? parseFloat(end.split("=").join("")) : 0;
        if (pt._next) {
          pt._next._prev = pt;
        }
      }
    }
    return true;
  },
  //called each time the values should be updated, and the ratio gets passed as the only parameter (typically it's a value between 0 and 1, but it can exceed those when using an ease like Elastic.easeOut or Back.easeOut, etc.)
  set: function(v) {
    var pt = this._firstPT, min = 1e-6, val;
    while (pt) {
      val = pt.c * v + pt.s;
      if (pt.m) {
        val = pt.m(val, pt.t);
      } else if (val < min && val > -min) {
        val = 0;
      }
      if (pt.f) {
        pt.t[pt.p](val);
      } else {
        pt.t[pt.p] = val;
      }
      pt = pt._next;
    }
    if (this._target.cacheID) {
      this._target.updateCache();
    }
  }
});

// node_modules/gsap/EndArrayPlugin.js
var EndArrayPlugin = _gsScope._gsDefine.plugin({
  propName: "endArray",
  API: 2,
  version: "0.1.3",
  //called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
  init: function(target, value, tween) {
    var i2 = value.length, a = this.a = [], start, end;
    this.target = target;
    this._mod = 0;
    if (!i2) {
      return false;
    }
    while (--i2 > -1) {
      start = target[i2];
      end = value[i2];
      if (start !== end) {
        a.push({ i: i2, s: start, c: end - start });
      }
    }
    return true;
  },
  mod: function(lookup) {
    if (typeof lookup.endArray === "function") {
      this._mod = lookup.endArray;
    }
  },
  //called each time the values should be updated, and the ratio gets passed as the only parameter (typically it's a value between 0 and 1, but it can exceed those when using an ease like Elastic.easeOut or Back.easeOut, etc.)
  set: function(ratio) {
    var target = this.target, a = this.a, i2 = a.length, mod = this._mod, e, val;
    if (mod) {
      while (--i2 > -1) {
        e = a[i2];
        target[e.i] = mod(e.s + e.c * ratio, target);
      }
    } else {
      while (--i2 > -1) {
        e = a[i2];
        val = e.s + e.c * ratio;
        target[e.i] = val < 1e-6 && val > -1e-6 ? 0 : val;
      }
    }
  }
});

// node_modules/gsap/ModifiersPlugin.js
var _cssRatioSetter = function(pt, cssp, mod) {
  var type = pt.type, oldSetRatio = pt.setRatio, tween = cssp._tween, target = cssp._target;
  pt.type = 2;
  pt.m = mod;
  pt.setRatio = function(v) {
    var min = 1e-6, val, str, i2;
    if (v === 1 && (tween._time === tween._duration || tween._time === 0)) {
      if (type !== 2) {
        if (pt.r && type !== -1) {
          val = Math.round(pt.s + pt.c);
          if (!type) {
            pt.t[pt.p] = mod.call(tween, val + pt.xs0, target, tween);
          } else if (type === 1) {
            str = pt.xs0 + val + pt.xs1;
            for (i2 = 1; i2 < pt.l; i2++) {
              str += pt["xn" + i2] + pt["xs" + (i2 + 1)];
            }
            pt.t[pt.p] = mod.call(tween, str, target, tween);
          }
        } else {
          pt.t[pt.p] = mod.call(tween, pt.e, target, tween);
        }
      } else {
        oldSetRatio.call(pt, v);
      }
    } else if (v || !(tween._time === tween._duration || tween._time === 0) || tween._rawPrevTime === -1e-6) {
      val = pt.c * v + pt.s;
      if (pt.r) {
        val = Math.round(val);
      } else if (val < min) {
        if (val > -min) {
          val = 0;
        }
      }
      if (!type) {
        pt.t[pt.p] = mod.call(tween, val + pt.xs0, target, tween);
      } else if (type === 1) {
        str = pt.xs0 + val + pt.xs1;
        for (i2 = 1; i2 < pt.l; i2++) {
          str += pt["xn" + i2] + pt["xs" + (i2 + 1)];
        }
        pt.t[pt.p] = mod.call(tween, str, target, tween);
      } else if (type === -1) {
        pt.t[pt.p] = mod.call(tween, pt.xs0, target, tween);
      } else if (oldSetRatio) {
        oldSetRatio.call(pt, v);
      }
    } else {
      if (type !== 2) {
        pt.t[pt.p] = mod.call(tween, pt.b, target, tween);
      } else {
        oldSetRatio.call(pt, v);
      }
    }
  };
};
var _modCSS = function(lookup, cssp) {
  var pt = cssp._firstPT, hasBezier = lookup.rotation && cssp._overwriteProps.join("").indexOf("bezier") !== -1;
  if (lookup.scale) {
    lookup.scaleX = lookup.scaleY = lookup.scale;
  } else if (lookup.rotationZ) {
    lookup.rotation = lookup.rotationZ;
  }
  while (pt) {
    if (typeof lookup[pt.p] === "function") {
      _cssRatioSetter(pt, cssp, lookup[pt.p]);
    } else if (hasBezier && pt.n === "bezier" && pt.plugin._overwriteProps.join("").indexOf("rotation") !== -1) {
      pt.data.mod = lookup.rotation;
    }
    pt = pt._next;
  }
};
var ModifiersPlugin = _gsScope._gsDefine.plugin({
  propName: "modifiers",
  version: "0.0.4",
  API: 2,
  //called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
  init: function(target, value, tween) {
    this._tween = tween;
    this._vars = value;
    return true;
  },
  initAll: function() {
    var tween = this._tween, lookup = this._vars, mpt = this, pt = tween._firstPT, val, next;
    if (pt._modInitted) {
      return false;
    } else {
      pt._modInitted = 1;
    }
    while (pt) {
      next = pt._next;
      val = lookup[pt.n];
      if (pt.pg) {
        if (pt.t._propName === "css") {
          _modCSS(lookup, pt.t);
        } else if (pt.t !== mpt) {
          val = lookup[pt.t._propName];
          pt.t._tween = tween;
          pt.t._mod(typeof val === "object" ? val : lookup);
        }
      } else if (typeof val === "function") {
        if (pt.f === 2 && pt.t) {
          pt.t._applyPT.m = val;
          pt.t._tween = tween;
        } else {
          this._add(pt.t, pt.p, pt.s, pt.c, val);
          if (next) {
            next._prev = pt._prev;
          }
          if (pt._prev) {
            pt._prev._next = next;
          } else if (tween._firstPT === pt) {
            tween._firstPT = next;
          }
          pt._next = pt._prev = null;
          tween._propLookup[pt.n] = mpt;
        }
      }
      pt = next;
    }
    return false;
  }
});
var p2 = ModifiersPlugin.prototype;
p2._add = function(target, p6, s, c, mod) {
  this._addTween(target, p6, s, s + c, p6, mod);
  this._overwriteProps.push(p6);
};
p2 = _gsScope._gsDefine.globals.TweenLite.version.split(".");
if (Number(p2[0]) <= 1 && Number(p2[1]) < 19 && _gsScope.console) {
  console.log("ModifiersPlugin requires GSAP 1.19.0 or later.");
}

// node_modules/gsap/PixiPlugin.js
var _numExp3 = /(\d|\.)+/g;
var _relNumExp2 = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g;
var _colorLookup3 = {
  aqua: [0, 255, 255],
  lime: [0, 255, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, 255],
  navy: [0, 0, 128],
  white: [255, 255, 255],
  fuchsia: [255, 0, 255],
  olive: [128, 128, 0],
  yellow: [255, 255, 0],
  orange: [255, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [255, 0, 0],
  pink: [255, 192, 203],
  cyan: [0, 255, 255],
  transparent: [255, 255, 255, 0]
};
var _hue2 = function(h, m1, m2) {
  h = h < 0 ? h + 1 : h > 1 ? h - 1 : h;
  return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < 0.5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * 255 + 0.5 | 0;
};
var _parseColor3 = function(v, format) {
  var toHSL = format === "hsl", a, r, g, b, h, s, l, max, min, d, wasHSL;
  if (!v) {
    a = _colorLookup3.black;
  } else if (typeof v === "number") {
    a = [v >> 16, v >> 8 & 255, v & 255];
  } else {
    if (v.charAt(v.length - 1) === ",") {
      v = v.substr(0, v.length - 1);
    }
    if (_colorLookup3[v]) {
      a = _colorLookup3[v];
    } else if (v.charAt(0) === "#") {
      if (v.length === 4) {
        r = v.charAt(1);
        g = v.charAt(2);
        b = v.charAt(3);
        v = "#" + r + r + g + g + b + b;
      }
      v = parseInt(v.substr(1), 16);
      a = [v >> 16, v >> 8 & 255, v & 255];
    } else if (v.substr(0, 3) === "hsl") {
      a = wasHSL = v.match(_numExp3);
      if (!toHSL) {
        h = Number(a[0]) % 360 / 360;
        s = Number(a[1]) / 100;
        l = Number(a[2]) / 100;
        g = l <= 0.5 ? l * (s + 1) : l + s - l * s;
        r = l * 2 - g;
        if (a.length > 3) {
          a[3] = Number(v[3]);
        }
        a[0] = _hue2(h + 1 / 3, r, g);
        a[1] = _hue2(h, r, g);
        a[2] = _hue2(h - 1 / 3, r, g);
      } else if (v.indexOf("=") !== -1) {
        return v.match(_relNumExp2);
      }
    } else {
      a = v.match(_numExp3) || _colorLookup3.transparent;
    }
    a[0] = Number(a[0]);
    a[1] = Number(a[1]);
    a[2] = Number(a[2]);
    if (a.length > 3) {
      a[3] = Number(a[3]);
    }
  }
  if (toHSL && !wasHSL) {
    r = a[0] / 255;
    g = a[1] / 255;
    b = a[2] / 255;
    max = Math.max(r, g, b);
    min = Math.min(r, g, b);
    l = (max + min) / 2;
    if (max === min) {
      h = s = 0;
    } else {
      d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
      h *= 60;
    }
    a[0] = h + 0.5 | 0;
    a[1] = s * 100 + 0.5 | 0;
    a[2] = l * 100 + 0.5 | 0;
  }
  return format === "number" ? a[0] << 16 | a[1] << 8 | a[2] : a;
};
var _formatColors2 = function(s, toHSL) {
  var colors = (s + "").match(_colorExp2) || [], charIndex = 0, parsed = "", i2, color, temp;
  if (!colors.length) {
    return s;
  }
  for (i2 = 0; i2 < colors.length; i2++) {
    color = colors[i2];
    temp = s.substr(charIndex, s.indexOf(color, charIndex) - charIndex);
    charIndex += temp.length + color.length;
    color = _parseColor3(color, toHSL ? "hsl" : "rgb");
    if (color.length === 3) {
      color.push(1);
    }
    parsed += temp + (toHSL ? "hsla(" + color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : "rgba(" + color.join(",")) + ")";
  }
  return parsed + s.substr(charIndex);
};
var _colorStringFilter2;
var TweenLite4 = (_gsScope.GreenSockGlobals || _gsScope).TweenLite;
var _colorExp2 = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
var _idMatrix2 = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];
var _lumR2 = 0.212671;
var _lumG2 = 0.71516;
var _lumB2 = 0.072169;
var _applyMatrix2 = function(m, m2) {
  var temp = [], i2 = 0, z = 0, y, x;
  for (y = 0; y < 4; y++) {
    for (x = 0; x < 5; x++) {
      z = x === 4 ? m[i2 + 4] : 0;
      temp[i2 + x] = m[i2] * m2[x] + m[i2 + 1] * m2[x + 5] + m[i2 + 2] * m2[x + 10] + m[i2 + 3] * m2[x + 15] + z;
    }
    i2 += 5;
  }
  return temp;
};
var _setSaturation2 = function(m, n) {
  var inv = 1 - n, r = inv * _lumR2, g = inv * _lumG2, b = inv * _lumB2;
  return _applyMatrix2([r + n, g, b, 0, 0, r, g + n, b, 0, 0, r, g, b + n, 0, 0, 0, 0, 0, 1, 0], m);
};
var _colorize2 = function(m, color, amount) {
  var c = _parseColor3(color), r = c[0] / 255, g = c[1] / 255, b = c[2] / 255, inv = 1 - amount;
  return _applyMatrix2([inv + amount * r * _lumR2, amount * r * _lumG2, amount * r * _lumB2, 0, 0, amount * g * _lumR2, inv + amount * g * _lumG2, amount * g * _lumB2, 0, 0, amount * b * _lumR2, amount * b * _lumG2, inv + amount * b * _lumB2, 0, 0, 0, 0, 0, 1, 0], m);
};
var _setHue2 = function(m, n) {
  n *= Math.PI / 180;
  var c = Math.cos(n), s = Math.sin(n);
  return _applyMatrix2([_lumR2 + c * (1 - _lumR2) + s * -_lumR2, _lumG2 + c * -_lumG2 + s * -_lumG2, _lumB2 + c * -_lumB2 + s * (1 - _lumB2), 0, 0, _lumR2 + c * -_lumR2 + s * 0.143, _lumG2 + c * (1 - _lumG2) + s * 0.14, _lumB2 + c * -_lumB2 + s * -0.283, 0, 0, _lumR2 + c * -_lumR2 + s * -(1 - _lumR2), _lumG2 + c * -_lumG2 + s * _lumG2, _lumB2 + c * (1 - _lumB2) + s * _lumB2, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], m);
};
var _setContrast2 = function(m, n) {
  return _applyMatrix2([n, 0, 0, 0, 0.5 * (1 - n), 0, n, 0, 0, 0.5 * (1 - n), 0, 0, n, 0, 0.5 * (1 - n), 0, 0, 0, 1, 0], m);
};
var _getFilter = function(t, type) {
  var filterClass = _gsScope.PIXI.filters[type], filters = t.filters || [], i2 = filters.length, filter;
  if (!filterClass) {
    throw "PixiPlugin error: " + type + " isn't present.";
  }
  while (--i2 > -1) {
    if (filters[i2] instanceof filterClass) {
      return filters[i2];
    }
  }
  filter = new filterClass();
  if (type === "BlurFilter") {
    filter.blur = 0;
  }
  filters.push(filter);
  t.filters = filters;
  return filter;
};
var _addColorMatrixFilterCacheTween = function(p6, pg, cache, vars) {
  pg._addTween(cache, p6, cache[p6], vars[p6], p6);
  pg._overwriteProps.push(p6);
};
var _applyBrightnessToMatrix = function(brightness, matrix) {
  var temp = new _gsScope.PIXI.filters.ColorMatrixFilter();
  temp.matrix = matrix;
  temp.brightness(brightness, true);
  return temp.matrix;
};
var _CMFdefaults = { contrast: 1, saturation: 1, colorizeAmount: 0, colorize: "rgb(255,255,255)", hue: 0, brightness: 1 };
var _parseColorMatrixFilter2 = function(t, v, pg) {
  var filter = _getFilter(t, "ColorMatrixFilter"), cache = t._gsColorMatrixFilter = t._gsColorMatrixFilter || { contrast: 1, saturation: 1, colorizeAmount: 0, colorize: "rgb(255,255,255)", hue: 0, brightness: 1 }, combine = v.combineCMF && !("colorMatrixFilter" in v && !v.colorMatrixFilter), i2, matrix, startMatrix;
  startMatrix = filter.matrix;
  if (v.resolution) {
    filter.resolution = v.resolution;
  }
  if (v.matrix && v.matrix.length === startMatrix.length) {
    matrix = v.matrix;
    if (cache.contrast !== 1) {
      _addColorMatrixFilterCacheTween("contrast", pg, cache, _CMFdefaults);
    }
    if (cache.hue) {
      _addColorMatrixFilterCacheTween("hue", pg, cache, _CMFdefaults);
    }
    if (cache.brightness !== 1) {
      _addColorMatrixFilterCacheTween("brightness", pg, cache, _CMFdefaults);
    }
    if (cache.colorizeAmount) {
      _addColorMatrixFilterCacheTween("colorize", pg, cache, _CMFdefaults);
      _addColorMatrixFilterCacheTween("colorizeAmount", pg, cache, _CMFdefaults);
    }
    if (cache.saturation !== 1) {
      _addColorMatrixFilterCacheTween("saturation", pg, cache, _CMFdefaults);
    }
  } else {
    matrix = _idMatrix2.slice();
    if (v.contrast != null) {
      matrix = _setContrast2(matrix, Number(v.contrast));
      _addColorMatrixFilterCacheTween("contrast", pg, cache, v);
    } else if (cache.contrast !== 1) {
      if (combine) {
        matrix = _setContrast2(matrix, cache.contrast);
      } else {
        _addColorMatrixFilterCacheTween("contrast", pg, cache, _CMFdefaults);
      }
    }
    if (v.hue != null) {
      matrix = _setHue2(matrix, Number(v.hue));
      _addColorMatrixFilterCacheTween("hue", pg, cache, v);
    } else if (cache.hue) {
      if (combine) {
        matrix = _setHue2(matrix, cache.hue);
      } else {
        _addColorMatrixFilterCacheTween("hue", pg, cache, _CMFdefaults);
      }
    }
    if (v.brightness != null) {
      matrix = _applyBrightnessToMatrix(Number(v.brightness), matrix);
      _addColorMatrixFilterCacheTween("brightness", pg, cache, v);
    } else if (cache.brightness !== 1) {
      if (combine) {
        matrix = _applyBrightnessToMatrix(cache.brightness, matrix);
      } else {
        _addColorMatrixFilterCacheTween("brightness", pg, cache, _CMFdefaults);
      }
    }
    if (v.colorize != null) {
      v.colorizeAmount = "colorizeAmount" in v ? Number(v.colorizeAmount) : 1;
      matrix = _colorize2(matrix, v.colorize, v.colorizeAmount);
      _addColorMatrixFilterCacheTween("colorize", pg, cache, v);
      _addColorMatrixFilterCacheTween("colorizeAmount", pg, cache, v);
    } else if (cache.colorizeAmount) {
      if (combine) {
        matrix = _colorize2(matrix, cache.colorize, cache.colorizeAmount);
      } else {
        _addColorMatrixFilterCacheTween("colorize", pg, cache, _CMFdefaults);
        _addColorMatrixFilterCacheTween("colorizeAmount", pg, cache, _CMFdefaults);
      }
    }
    if (v.saturation != null) {
      matrix = _setSaturation2(matrix, Number(v.saturation));
      _addColorMatrixFilterCacheTween("saturation", pg, cache, v);
    } else if (cache.saturation !== 1) {
      if (combine) {
        matrix = _setSaturation2(matrix, cache.saturation);
      } else {
        _addColorMatrixFilterCacheTween("saturation", pg, cache, _CMFdefaults);
      }
    }
  }
  i2 = matrix.length;
  while (--i2 > -1) {
    if (matrix[i2] !== startMatrix[i2]) {
      pg._addTween(startMatrix, i2, startMatrix[i2], matrix[i2], "colorMatrixFilter");
    }
  }
  pg._overwriteProps.push("colorMatrixFilter");
};
var _addColorTween = function(target, p6, value, colorSetter, plugin) {
  var pt = colorSetter._firstPT = { _next: colorSetter._firstPT, t: target, p: p6, proxy: {}, f: typeof target[p6] === "function" };
  pt.proxy[p6] = "rgb(" + _parseColor3(!pt.f ? target[p6] : target[p6.indexOf("set") || typeof target["get" + p6.substr(3)] !== "function" ? p6 : "get" + p6.substr(3)]()).join(",") + ")";
  plugin._addTween(pt.proxy, p6, "get", typeof value === "number" ? "rgb(" + _parseColor3(value, false).join(",") + ")" : value, p6, null, null, _colorStringFilter2);
};
var _buildColorSetter = function(tween, plugin) {
  var setRatio = plugin.setRatio, func = function(v) {
    var pt = func._firstPT, val;
    setRatio.call(plugin, v);
    while (pt) {
      val = _parseColor3(pt.proxy[pt.p], "number");
      if (pt.f) {
        pt.t[pt.p](val);
      } else {
        pt.t[pt.p] = val;
      }
      pt = pt._next;
    }
    if (func.graphics) {
      func.graphics.dirty++;
      func.graphics.clearDirty++;
    }
  };
  plugin.setRatio = func;
  return func;
};
var _colorProps2 = { tint: 1, lineColor: 1, fillColor: 1 };
var _xyContexts = "position,scale,skew,pivot,anchor,tilePosition,tileScale".split(",");
var _contexts = { x: "position", y: "position", tileX: "tilePosition", tileY: "tilePosition" };
var _colorMatrixFilterProps = { colorMatrixFilter: 1, saturation: 1, contrast: 1, hue: 1, colorize: 1, colorizeAmount: 1, brightness: 1, combineCMF: 1 };
var _DEG2RAD = Math.PI / 180;
var _degreesToRadians = function(value) {
  return typeof value === "string" && value.charAt(1) === "=" ? value.substr(0, 2) + parseFloat(value.substr(2)) * _DEG2RAD : value * _DEG2RAD;
};
var i;
var p3;
for (i = 0; i < _xyContexts.length; i++) {
  p3 = _xyContexts[i];
  _contexts[p3 + "X"] = p3;
  _contexts[p3 + "Y"] = p3;
}
for (p3 in _colorLookup3) {
  _colorExp2 += "|" + p3 + "\\b";
}
_colorExp2 = new RegExp(_colorExp2 + ")", "gi");
_colorStringFilter2 = function(a) {
  var combined = a[0] + " " + a[1], toHSL;
  _colorExp2.lastIndex = 0;
  if (_colorExp2.test(combined)) {
    toHSL = combined.indexOf("hsl(") !== -1 || combined.indexOf("hsla(") !== -1;
    a[0] = _formatColors2(a[0], toHSL);
    a[1] = _formatColors2(a[1], toHSL);
  }
};
if (!TweenLite4.defaultStringFilter) {
  TweenLite4.defaultStringFilter = _colorStringFilter2;
}
var PixiPlugin = _gsScope._gsDefine.plugin({
  propName: "pixi",
  priority: 0,
  API: 2,
  global: true,
  version: "0.3.0",
  init: function(target, values, tween, index) {
    if (!target instanceof _gsScope.PIXI.DisplayObject) {
      return false;
    }
    var isV4 = _gsScope.PIXI.VERSION.charAt(0) === "4", context, axis, value, colorMatrix, filter, p6, padding, colorSetter, i2, data, pt;
    for (p6 in values) {
      context = _contexts[p6];
      value = values[p6];
      if (typeof value === "function") {
        value = value(index || 0, target);
      }
      if (context) {
        axis = p6.charAt(p6.length - 1).toLowerCase().indexOf("x") !== -1 ? "x" : "y";
        this._addTween(target[context], axis, target[context][axis], context === "skew" ? _degreesToRadians(value) : value, p6);
      } else if (p6 === "scale" || p6 === "anchor" || p6 === "pivot" || p6 === "tileScale") {
        this._addTween(target[p6], "x", target[p6].x, value, p6 + "X");
        this._addTween(target[p6], "y", target[p6].y, value, p6 + "Y");
      } else if (p6 === "rotation") {
        this._addTween(target, p6, target.rotation, _degreesToRadians(value), p6);
      } else if (_colorMatrixFilterProps[p6]) {
        if (!colorMatrix) {
          _parseColorMatrixFilter2(target, values.colorMatrixFilter || values, this);
          colorMatrix = true;
        }
      } else if (p6 === "blur" || p6 === "blurX" || p6 === "blurY" || p6 === "blurPadding") {
        filter = _getFilter(target, "BlurFilter");
        this._addTween(filter, p6, filter[p6], value, p6);
        if (values.blurPadding !== 0) {
          padding = values.blurPadding || Math.max(filter[p6], value) * 2;
          i2 = target.filters.length;
          while (--i2 > -1) {
            target.filters[i2].padding = Math.max(target.filters[i2].padding, padding);
          }
        }
      } else if (_colorProps2[p6]) {
        if (!colorSetter) {
          colorSetter = _buildColorSetter(tween, this);
        }
        if ((p6 === "lineColor" || p6 === "fillColor") && target instanceof _gsScope.PIXI.Graphics) {
          data = (target.geometry || target).graphicsData;
          i2 = data.length;
          while (--i2 > -1) {
            _addColorTween(isV4 ? data[i2] : data[i2][p6.substr(0, 4) + "Style"], isV4 ? p6 : "color", value, colorSetter, this);
          }
          colorSetter.graphics = target.geometry || target;
        } else {
          _addColorTween(target, p6, value, colorSetter, this);
        }
      } else if (p6 === "autoAlpha") {
        this._firstPT = pt = { t: { setRatio: function() {
          target.visible = !!target.alpha;
        } }, p: "setRatio", s: 0, c: 1, f: 1, pg: 0, n: "visible", pr: 0, m: 0, _next: this._firstPT };
        if (pt._next) {
          pt._next._prev = pt;
        }
        this._addTween(target, "alpha", target.alpha, value, "alpha");
        this._overwriteProps.push("alpha", "visible");
      } else {
        this._addTween(target, p6, target[p6], value, p6);
      }
      this._overwriteProps.push(p6);
    }
    return true;
  }
});
PixiPlugin.colorProps = _colorProps2;
PixiPlugin.parseColor = _parseColor3;
PixiPlugin.formatColors = _formatColors2;
PixiPlugin.colorStringFilter = _colorStringFilter2;
PixiPlugin.registerPIXI = function(PIXI) {
  _gsScope.PIXI = PIXI;
};

// node_modules/gsap/ScrollToPlugin.js
var _doc = (_gsScope.document || {}).documentElement;
var _window = _gsScope;
var _max = function(element, axis) {
  var dim = axis === "x" ? "Width" : "Height", scroll = "scroll" + dim, client = "client" + dim, body = document.body;
  return element === _window || element === _doc || element === body ? Math.max(_doc[scroll], body[scroll]) - (_window["inner" + dim] || _doc[client] || body[client]) : element[scroll] - element["offset" + dim];
};
var _unwrapElement = function(value) {
  if (typeof value === "string") {
    value = TweenLite.selector(value);
  }
  if (value.length && value !== _window && value[0] && value[0].style && !value.nodeType) {
    value = value[0];
  }
  return value === _window || value.nodeType && value.style ? value : null;
};
var _buildGetter = function(e, axis) {
  var p6 = "scroll" + (axis === "x" ? "Left" : "Top");
  if (e === _window) {
    if (e.pageXOffset != null) {
      p6 = "page" + axis.toUpperCase() + "Offset";
    } else if (_doc[p6] != null) {
      e = _doc;
    } else {
      e = document.body;
    }
  }
  return function() {
    return e[p6];
  };
};
var _getOffset = function(element, container) {
  var rect = _unwrapElement(element).getBoundingClientRect(), b = document.body, isRoot = !container || container === _window || container === b, cRect = isRoot ? { top: _doc.clientTop - (window.pageYOffset || _doc.scrollTop || b.scrollTop || 0), left: _doc.clientLeft - (window.pageXOffset || _doc.scrollLeft || b.scrollLeft || 0) } : container.getBoundingClientRect(), offsets = { x: rect.left - cRect.left, y: rect.top - cRect.top };
  if (!isRoot && container) {
    offsets.x += _buildGetter(container, "x")();
    offsets.y += _buildGetter(container, "y")();
  }
  return offsets;
};
var _parseVal = function(value, target, axis, currentVal) {
  var type = typeof value;
  return !isNaN(value) ? parseFloat(value) : type === "string" && value.charAt(1) === "=" ? parseInt(value.charAt(0) + "1", 10) * parseFloat(value.substr(2)) + currentVal : value === "max" ? _max(target, axis) : Math.min(_max(target, axis), _getOffset(value, target)[axis]);
};
var ScrollToPlugin = _gsScope._gsDefine.plugin({
  propName: "scrollTo",
  API: 2,
  global: true,
  version: "1.9.2",
  //called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
  init: function(target, value, tween) {
    this._wdw = target === _window;
    this._target = target;
    this._tween = tween;
    if (typeof value !== "object") {
      value = { y: value };
      if (typeof value.y === "string" && value.y !== "max" && value.y.charAt(1) !== "=") {
        value.x = value.y;
      }
    } else if (value.nodeType) {
      value = { y: value, x: value };
    }
    this.vars = value;
    this._autoKill = value.autoKill !== false;
    this.getX = _buildGetter(target, "x");
    this.getY = _buildGetter(target, "y");
    this.x = this.xPrev = this.getX();
    this.y = this.yPrev = this.getY();
    if (value.x != null) {
      this._addTween(this, "x", this.x, _parseVal(value.x, target, "x", this.x) - (value.offsetX || 0), "scrollTo_x", true);
      this._overwriteProps.push("scrollTo_x");
    } else {
      this.skipX = true;
    }
    if (value.y != null) {
      this._addTween(this, "y", this.y, _parseVal(value.y, target, "y", this.y) - (value.offsetY || 0), "scrollTo_y", true);
      this._overwriteProps.push("scrollTo_y");
    } else {
      this.skipY = true;
    }
    return true;
  },
  //called each time the values should be updated, and the ratio gets passed as the only parameter (typically it's a value between 0 and 1, but it can exceed those when using an ease like Elastic.easeOut or Back.easeOut, etc.)
  set: function(v) {
    this._super.setRatio.call(this, v);
    var x = this._wdw || !this.skipX ? this.getX() : this.xPrev, y = this._wdw || !this.skipY ? this.getY() : this.yPrev, yDif = y - this.yPrev, xDif = x - this.xPrev, threshold = ScrollToPlugin.autoKillThreshold;
    if (this.x < 0) {
      this.x = 0;
    }
    if (this.y < 0) {
      this.y = 0;
    }
    if (this._autoKill) {
      if (!this.skipX && (xDif > threshold || xDif < -threshold) && x < _max(this._target, "x")) {
        this.skipX = true;
      }
      if (!this.skipY && (yDif > threshold || yDif < -threshold) && y < _max(this._target, "y")) {
        this.skipY = true;
      }
      if (this.skipX && this.skipY) {
        this._tween.kill();
        if (this.vars.onAutoKill) {
          this.vars.onAutoKill.apply(this.vars.onAutoKillScope || this._tween, this.vars.onAutoKillParams || []);
        }
      }
    }
    if (this._wdw) {
      _window.scrollTo(!this.skipX ? this.x : x, !this.skipY ? this.y : y);
    } else {
      if (!this.skipY) {
        this._target.scrollTop = this.y;
      }
      if (!this.skipX) {
        this._target.scrollLeft = this.x;
      }
    }
    this.xPrev = this.x;
    this.yPrev = this.y;
  }
});
var p4 = ScrollToPlugin.prototype;
ScrollToPlugin.max = _max;
ScrollToPlugin.getOffset = _getOffset;
ScrollToPlugin.buildGetter = _buildGetter;
ScrollToPlugin.autoKillThreshold = 7;
p4._kill = function(lookup) {
  if (lookup.scrollTo_x) {
    this.skipX = true;
  }
  if (lookup.scrollTo_y) {
    this.skipY = true;
  }
  return this._super._kill.call(this, lookup);
};

// node_modules/gsap/TextPlugin.js
var _getText = function(e) {
  var type = e.nodeType, result = "";
  if (type === 1 || type === 9 || type === 11) {
    if (typeof e.textContent === "string") {
      return e.textContent;
    } else {
      for (e = e.firstChild; e; e = e.nextSibling) {
        result += _getText(e);
      }
    }
  } else if (type === 3 || type === 4) {
    return e.nodeValue;
  }
  return result;
};
var _emoji = "[-]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[⚔-⚗]|\uD83E[\uDD10-\uDD5D]|[\uD800-\uDBFF][\uDC00-\uDFFF]";
var _emojiExp = new RegExp(_emoji);
var _emojiAndCharsExp = new RegExp(_emoji + "|.", "g");
var _emojiSafeSplit = function(text, delimiter) {
  return (delimiter === "" || !delimiter) && _emojiExp.test(text) ? text.match(_emojiAndCharsExp) : text.split(delimiter || "");
};
var TextPlugin = _gsScope._gsDefine.plugin({
  propName: "text",
  API: 2,
  version: "0.6.2",
  //called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
  init: function(target, value, tween, index) {
    var i2 = target.nodeName.toUpperCase(), shrt;
    if (typeof value === "function") {
      value = value(index, target);
    }
    this._svg = target.getBBox && (i2 === "TEXT" || i2 === "TSPAN");
    if (!("innerHTML" in target) && !this._svg) {
      return false;
    }
    this._target = target;
    if (typeof value !== "object") {
      value = { value };
    }
    if (value.value === void 0) {
      this._text = this._original = [""];
      return true;
    }
    this._delimiter = value.delimiter || "";
    this._original = _emojiSafeSplit(_getText(target).replace(/\s+/g, " "), this._delimiter);
    this._text = _emojiSafeSplit(value.value.replace(/\s+/g, " "), this._delimiter);
    this._runBackwards = tween.vars.runBackwards === true;
    if (this._runBackwards) {
      i2 = this._original;
      this._original = this._text;
      this._text = i2;
    }
    if (typeof value.newClass === "string") {
      this._newClass = value.newClass;
      this._hasClass = true;
    }
    if (typeof value.oldClass === "string") {
      this._oldClass = value.oldClass;
      this._hasClass = true;
    }
    i2 = this._original.length - this._text.length;
    shrt = i2 < 0 ? this._original : this._text;
    this._fillChar = value.fillChar || (value.padSpace ? "&nbsp;" : "");
    if (i2 < 0) {
      i2 = -i2;
    }
    while (--i2 > -1) {
      shrt.push(this._fillChar);
    }
    return true;
  },
  //called each time the values should be updated, and the ratio gets passed as the only parameter (typically it's a value between 0 and 1, but it can exceed those when using an ease like Elastic.easeOut or Back.easeOut, etc.)
  set: function(ratio) {
    if (ratio > 1) {
      ratio = 1;
    } else if (ratio < 0) {
      ratio = 0;
    }
    if (this._runBackwards) {
      ratio = 1 - ratio;
    }
    var l = this._text.length, i2 = ratio * l + 0.5 | 0, applyNew, applyOld, str;
    if (this._hasClass) {
      applyNew = this._newClass && i2 !== 0;
      applyOld = this._oldClass && i2 !== l;
      str = (applyNew ? "<span class='" + this._newClass + "'>" : "") + this._text.slice(0, i2).join(this._delimiter) + (applyNew ? "</span>" : "") + (applyOld ? "<span class='" + this._oldClass + "'>" : "") + this._delimiter + this._original.slice(i2).join(this._delimiter) + (applyOld ? "</span>" : "");
    } else {
      str = this._text.slice(0, i2).join(this._delimiter) + this._delimiter + this._original.slice(i2).join(this._delimiter);
    }
    if (this._svg) {
      this._target.textContent = str;
    } else {
      this._target.innerHTML = this._fillChar === "&nbsp;" && str.indexOf("  ") !== -1 ? str.split("  ").join("&nbsp;&nbsp;") : str;
    }
  }
});
var p5 = TextPlugin.prototype;
p5._newClass = p5._oldClass = p5._delimiter = "";

// node_modules/gsap/Draggable.js
_gsScope._gsDefine("utils.Draggable", ["events.EventDispatcher", "TweenLite", "plugins.CSSPlugin"], function() {
  var _tempVarsXY = { css: {}, data: "_draggable" }, _tempVarsX = { css: {}, data: "_draggable" }, _tempVarsY = { css: {}, data: "_draggable" }, _tempVarsRotation = { css: {} }, _globals = _gsScope._gsDefine.globals, _tempEvent = {}, _emptyFunc = function() {
    return false;
  }, _dummyElement = { style: {}, appendChild: _emptyFunc, removeChild: _emptyFunc }, _doc2 = _gsScope.document || { createElement: function() {
    return _dummyElement;
  } }, _docElement = _doc2.documentElement || {}, _createElement = function(type) {
    return _doc2.createElementNS ? _doc2.createElementNS("http://www.w3.org/1999/xhtml", type) : _doc2.createElement(type);
  }, _tempDiv = _createElement("div"), _emptyArray = [], _RAD2DEG = 180 / Math.PI, _max2 = 999999999999999, _getTime = Date.now || function() {
    return (/* @__PURE__ */ new Date()).getTime();
  }, _isOldIE = !!(!_doc2.addEventListener && _doc2.all), _placeholderDiv = _doc2.createElement("div"), _renderQueue = [], _lookup = {}, _lookupCount = 0, _clickableTagExp = /^(?:a|input|textarea|button|select)$/i, _dragCount = 0, _prefix, _isMultiTouching, _isAndroid = _gsScope.navigator && _gsScope.navigator.userAgent.toLowerCase().indexOf("android") !== -1, _lastDragTime = 0, _temp1 = {}, _windowProxy = {}, _supportsPassive, _slice = function(a) {
    if (typeof a === "string") {
      a = TweenLite2.selector(a);
    }
    if (!a || a.nodeType) {
      return [a];
    }
    var b = [], l = a.length, i2;
    for (i2 = 0; i2 !== l; b.push(a[i2++]))
      ;
    return b;
  }, _copy = function(obj, factor) {
    var copy = {}, p7;
    if (factor) {
      for (p7 in obj) {
        copy[p7] = obj[p7] * factor;
      }
    } else {
      for (p7 in obj) {
        copy[p7] = obj[p7];
      }
    }
    return copy;
  }, ThrowPropsPlugin, _renderQueueTick = function() {
    var i2 = _renderQueue.length;
    while (--i2 > -1) {
      _renderQueue[i2]();
    }
  }, _addToRenderQueue = function(func) {
    _renderQueue.push(func);
    if (_renderQueue.length === 1) {
      TweenLite2.ticker.addEventListener("tick", _renderQueueTick, this, false, 1);
    }
  }, _removeFromRenderQueue = function(func) {
    var i2 = _renderQueue.length;
    while (--i2 > -1) {
      if (_renderQueue[i2] === func) {
        _renderQueue.splice(i2, 1);
      }
    }
    TweenLite2.to(_renderQueueTimeout, 0, { overwrite: "all", delay: 15, onComplete: _renderQueueTimeout, data: "_draggable" });
  }, _renderQueueTimeout = function() {
    if (!_renderQueue.length) {
      TweenLite2.ticker.removeEventListener("tick", _renderQueueTick);
    }
  }, _extend = function(obj, defaults) {
    var p7;
    for (p7 in defaults) {
      if (obj[p7] === void 0) {
        obj[p7] = defaults[p7];
      }
    }
    return obj;
  }, _getDocScrollTop = function() {
    return window.pageYOffset != null ? window.pageYOffset : _doc2.scrollTop != null ? _doc2.scrollTop : _docElement.scrollTop || _doc2.body.scrollTop || 0;
  }, _getDocScrollLeft = function() {
    return window.pageXOffset != null ? window.pageXOffset : _doc2.scrollLeft != null ? _doc2.scrollLeft : _docElement.scrollLeft || _doc2.body.scrollLeft || 0;
  }, _addScrollListener = function(e, callback) {
    _addListener(e, "scroll", callback);
    if (!_isRoot(e.parentNode)) {
      _addScrollListener(e.parentNode, callback);
    }
  }, _removeScrollListener = function(e, callback) {
    _removeListener(e, "scroll", callback);
    if (!_isRoot(e.parentNode)) {
      _removeScrollListener(e.parentNode, callback);
    }
  }, _isRoot = function(e) {
    return !!(!e || e === _docElement || e === _doc2 || e === _doc2.body || e === window || !e.nodeType || !e.parentNode);
  }, _getMaxScroll = function(element, axis) {
    var dim = axis === "x" ? "Width" : "Height", scroll = "scroll" + dim, client = "client" + dim, body = _doc2.body;
    return Math.max(0, _isRoot(element) ? Math.max(_docElement[scroll], body[scroll]) - (window["inner" + dim] || _docElement[client] || body[client]) : element[scroll] - element[client]);
  }, _recordMaxScrolls = function(e) {
    var isRoot = _isRoot(e), x = _getMaxScroll(e, "x"), y = _getMaxScroll(e, "y");
    if (isRoot) {
      e = _windowProxy;
    } else {
      _recordMaxScrolls(e.parentNode);
    }
    e._gsMaxScrollX = x;
    e._gsMaxScrollY = y;
    e._gsScrollX = e.scrollLeft || 0;
    e._gsScrollY = e.scrollTop || 0;
  }, _populateIEEvent = function(e, preventDefault) {
    e = e || window.event;
    _tempEvent.pageX = e.clientX + _doc2.body.scrollLeft + _docElement.scrollLeft;
    _tempEvent.pageY = e.clientY + _doc2.body.scrollTop + _docElement.scrollTop;
    if (preventDefault) {
      e.returnValue = false;
    }
    return _tempEvent;
  }, _unwrapElement2 = function(value) {
    if (!value) {
      return value;
    }
    if (typeof value === "string") {
      value = TweenLite2.selector(value);
    }
    if (value.length && value !== window && value[0] && value[0].style && !value.nodeType) {
      value = value[0];
    }
    return value === window || value.nodeType && value.style ? value : null;
  }, _checkPrefix = function(e, p7) {
    var s = e.style, capped, i2, a;
    if (s[p7] === void 0) {
      a = ["O", "Moz", "ms", "Ms", "Webkit"];
      i2 = 5;
      capped = p7.charAt(0).toUpperCase() + p7.substr(1);
      while (--i2 > -1 && s[a[i2] + capped] === void 0) {
      }
      if (i2 < 0) {
        return "";
      }
      _prefix = i2 === 3 ? "ms" : a[i2];
      p7 = _prefix + capped;
    }
    return p7;
  }, _setStyle = function(e, p7, value) {
    var s = e.style;
    if (!s) {
      return;
    }
    if (s[p7] === void 0) {
      p7 = _checkPrefix(e, p7);
    }
    if (value == null) {
      if (s.removeProperty) {
        s.removeProperty(p7.replace(/([A-Z])/g, "-$1").toLowerCase());
      } else {
        s.removeAttribute(p7);
      }
    } else if (s[p7] !== void 0) {
      s[p7] = value;
    }
  }, _computedStyleScope = typeof window !== "undefined" ? window : _doc2.defaultView || { getComputedStyle: function() {
  } }, _getComputedStyle = function(e, s) {
    return _computedStyleScope.getComputedStyle(e instanceof Element ? e : e.host || (e.parentNode || {}).host || e, s);
  }, _horizExp = /(?:Left|Right|Width)/i, _suffixExp = /(?:\d|\-|\+|=|#|\.)*/g, _convertToPixels = function(t, p7, v, sfx, recurse) {
    if (sfx === "px" || !sfx) {
      return v;
    }
    if (sfx === "auto" || !v) {
      return 0;
    }
    var horiz = _horizExp.test(p7), node = t, style = _tempDiv.style, neg = v < 0, pix;
    if (neg) {
      v = -v;
    }
    if (sfx === "%" && p7.indexOf("border") !== -1) {
      pix = v / 100 * (horiz ? t.clientWidth : t.clientHeight);
    } else {
      style.cssText = "border:0 solid red;position:" + _getStyle(t, "position", true) + ";line-height:0;";
      if (sfx === "%" || !node.appendChild) {
        node = t.parentNode || _doc2.body;
        style[horiz ? "width" : "height"] = v + sfx;
      } else {
        style[horiz ? "borderLeftWidth" : "borderTopWidth"] = v + sfx;
      }
      node.appendChild(_tempDiv);
      pix = parseFloat(_tempDiv[horiz ? "offsetWidth" : "offsetHeight"]);
      node.removeChild(_tempDiv);
      if (pix === 0 && !recurse) {
        pix = _convertToPixels(t, p7, v, sfx, true);
      }
    }
    return neg ? -pix : pix;
  }, _calculateOffset = function(t, p7) {
    if (_getStyle(t, "position", true) !== "absolute") {
      return 0;
    }
    var dim = p7 === "left" ? "Left" : "Top", v = _getStyle(t, "margin" + dim, true);
    return t["offset" + dim] - (_convertToPixels(t, p7, parseFloat(v), (v + "").replace(_suffixExp, "")) || 0);
  }, _getStyle = function(element, prop, keepUnits) {
    var rv = (element._gsTransform || {})[prop], cs;
    if (rv || rv === 0) {
      return rv;
    } else if (element.style && element.style[prop]) {
      rv = element.style[prop];
    } else if (cs = _getComputedStyle(element)) {
      rv = cs.getPropertyValue(prop.replace(/([A-Z])/g, "-$1").toLowerCase());
      rv = rv || cs.length ? rv : cs[prop];
    } else if (element.currentStyle) {
      rv = element.currentStyle[prop];
    }
    if (rv === "auto" && (prop === "top" || prop === "left")) {
      rv = _calculateOffset(element, prop);
    }
    return keepUnits ? rv : parseFloat(rv) || 0;
  }, _dispatchEvent = function(instance, type, callbackName) {
    var vars = instance.vars, callback = vars[callbackName], listeners = instance._listeners[type];
    if (typeof callback === "function") {
      callback.apply(vars[callbackName + "Scope"] || vars.callbackScope || instance, vars[callbackName + "Params"] || [instance.pointerEvent]);
    }
    if (listeners) {
      instance.dispatchEvent(type);
    }
  }, _getBounds = function(obj, context) {
    var e = _unwrapElement2(obj), top, left, offset;
    if (!e) {
      if (obj.left !== void 0) {
        offset = _getOffsetTransformOrigin(context);
        return { left: obj.left - offset.x, top: obj.top - offset.y, width: obj.width, height: obj.height };
      }
      left = obj.min || obj.minX || obj.minRotation || 0;
      top = obj.min || obj.minY || 0;
      return { left, top, width: (obj.max || obj.maxX || obj.maxRotation || 0) - left, height: (obj.max || obj.maxY || 0) - top };
    }
    return _getElementBounds(e, context);
  }, _svgBorderFactor, _svgBorderScales, _svgScrollOffset, _hasBorderBug, _hasReparentBug, _setEnvironmentVariables = function() {
    if (!_doc2.createElementNS) {
      _svgBorderFactor = 0;
      _svgBorderScales = false;
      return;
    }
    var div = _createElement("div"), svg = _doc2.createElementNS("http://www.w3.org/2000/svg", "svg"), wrapper = _createElement("div"), style = div.style, parent = _doc2.body || _docElement, isFlex = _getStyle(parent, "display", true) === "flex", matrix, e1, point, oldValue;
    if (_doc2.body && _transformProp) {
      style.position = "absolute";
      parent.appendChild(wrapper);
      wrapper.appendChild(div);
      oldValue = div.offsetParent;
      wrapper.style[_transformProp] = "rotate(1deg)";
      _hasReparentBug = div.offsetParent === oldValue;
      wrapper.style.position = "absolute";
      style.height = "10px";
      oldValue = div.offsetTop;
      wrapper.style.border = "5px solid red";
      _hasBorderBug = oldValue !== div.offsetTop;
      parent.removeChild(wrapper);
    }
    style = svg.style;
    svg.setAttributeNS(null, "width", "400px");
    svg.setAttributeNS(null, "height", "400px");
    svg.setAttributeNS(null, "viewBox", "0 0 400 400");
    style.display = "block";
    style.boxSizing = "border-box";
    style.border = "0px solid red";
    style.transform = "none";
    div.style.cssText = "width:100px;height:100px;overflow:scroll;-ms-overflow-style:none;";
    parent.appendChild(div);
    div.appendChild(svg);
    point = svg.createSVGPoint().matrixTransform(svg.getScreenCTM());
    e1 = point.y;
    div.scrollTop = 100;
    point.x = point.y = 0;
    point = point.matrixTransform(svg.getScreenCTM());
    _svgScrollOffset = e1 - point.y < 100.1 ? 0 : e1 - point.y - 150;
    div.removeChild(svg);
    parent.removeChild(div);
    parent.appendChild(svg);
    if (isFlex) {
      parent.style.display = "block";
    }
    matrix = svg.getScreenCTM();
    e1 = matrix.e;
    style.border = "50px solid red";
    matrix = svg.getScreenCTM();
    if (e1 === 0 && matrix.e === 0 && matrix.f === 0 && matrix.a === 1) {
      _svgBorderFactor = 1;
      _svgBorderScales = true;
    } else {
      _svgBorderFactor = e1 !== matrix.e ? 1 : 0;
      _svgBorderScales = matrix.a !== 1;
    }
    if (isFlex) {
      parent.style.display = "flex";
    }
    parent.removeChild(svg);
  }, _supports3D = _checkPrefix(_tempDiv, "perspective") !== "", _transformOriginProp = _checkPrefix(_tempDiv, "transformOrigin").replace(/^ms/g, "Ms").replace(/([A-Z])/g, "-$1").toLowerCase(), _transformProp = _checkPrefix(_tempDiv, "transform"), _transformPropCSS = _transformProp.replace(/^ms/g, "Ms").replace(/([A-Z])/g, "-$1").toLowerCase(), _point1 = {}, _point2 = {}, _SVGElement = _gsScope.SVGElement, _isSVG = function(e) {
    return !!(_SVGElement && typeof e.getBBox === "function" && e.getCTM && (!e.parentNode || e.parentNode.getBBox && e.parentNode.getCTM));
  }, _isIE10orBelow = _gsScope.navigator && ((/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(_gsScope.navigator.userAgent) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(_gsScope.navigator.userAgent)) && parseFloat(RegExp.$1) < 11), _tempTransforms = [], _tempElements = [], _getSVGOffsets = function(e) {
    if (!e.getBoundingClientRect || !e.parentNode || !_transformProp) {
      return { offsetTop: 0, offsetLeft: 0, scaleX: 1, scaleY: 1, offsetParent: _docElement };
    }
    if (Draggable2.cacheSVGData !== false && e._dCache && e._dCache.lastUpdate === TweenLite2.ticker.frame) {
      return e._dCache;
    }
    var curElement = e, cache = _cache(e), eRect, parentRect, offsetParent, cs, m, i2, point1, point2, borderWidth, borderHeight, width, height;
    cache.lastUpdate = TweenLite2.ticker.frame;
    if (e.getBBox && !cache.isSVGRoot) {
      curElement = e.parentNode;
      eRect = e.getBBox();
      while (curElement && (curElement.nodeName + "").toLowerCase() !== "svg") {
        curElement = curElement.parentNode;
      }
      cs = _getSVGOffsets(curElement);
      cache.offsetTop = eRect.y * cs.scaleY;
      cache.offsetLeft = eRect.x * cs.scaleX;
      cache.scaleX = cs.scaleX;
      cache.scaleY = cs.scaleY;
      cache.offsetParent = curElement || _docElement;
      return cache;
    }
    offsetParent = cache.offsetParent;
    if (offsetParent === _doc2.body) {
      offsetParent = _docElement;
    }
    _tempElements.length = _tempTransforms.length = 0;
    while (curElement && curElement.parentNode) {
      m = _getStyle(curElement, _transformProp, true);
      if (m !== "matrix(1, 0, 0, 1, 0, 0)" && m !== "none" && m !== "translate3d(0px, 0px, 0px)") {
        _tempElements.push(curElement);
        _tempTransforms.push(curElement.style[_transformProp]);
        curElement.style[_transformProp] = "none";
      }
      curElement = curElement.parentNode;
    }
    parentRect = offsetParent.getBoundingClientRect();
    m = e.getScreenCTM();
    point2 = e.createSVGPoint();
    point1 = point2.matrixTransform(m);
    cache.scaleX = Math.sqrt(m.a * m.a + m.b * m.b);
    cache.scaleY = Math.sqrt(m.d * m.d + m.c * m.c);
    if (_svgBorderFactor === void 0) {
      _setEnvironmentVariables();
    }
    if (cache.borderBox && !_svgBorderScales && e.getAttribute("width")) {
      cs = _getComputedStyle(e) || {};
      borderWidth = parseFloat(cs.borderLeftWidth) + parseFloat(cs.borderRightWidth) || 0;
      borderHeight = parseFloat(cs.borderTopWidth) + parseFloat(cs.borderBottomWidth) || 0;
      width = parseFloat(cs.width) || 0;
      height = parseFloat(cs.height) || 0;
      cache.scaleX *= (width - borderWidth) / width;
      cache.scaleY *= (height - borderHeight) / height;
    }
    if (_svgScrollOffset) {
      eRect = e.getBoundingClientRect();
      cache.offsetLeft = eRect.left - parentRect.left;
      cache.offsetTop = eRect.top - parentRect.top;
    } else {
      cache.offsetLeft = point1.x - parentRect.left;
      cache.offsetTop = point1.y - parentRect.top;
    }
    cache.offsetParent = offsetParent;
    i2 = _tempElements.length;
    while (--i2 > -1) {
      _tempElements[i2].style[_transformProp] = _tempTransforms[i2];
    }
    return cache;
  }, _getOffsetTransformOrigin = function(e, decoratee) {
    decoratee = decoratee || {};
    if (!e || e === _docElement || !e.parentNode || e === window) {
      return { x: 0, y: 0 };
    }
    var cs = _getComputedStyle(e), v = _transformOriginProp && cs ? cs.getPropertyValue(_transformOriginProp) : "50% 50%", a = v.split(" "), x = v.indexOf("left") !== -1 ? "0%" : v.indexOf("right") !== -1 ? "100%" : a[0], y = v.indexOf("top") !== -1 ? "0%" : v.indexOf("bottom") !== -1 ? "100%" : a[1];
    if (y === "center" || y == null) {
      y = "50%";
    }
    if (x === "center" || isNaN(parseFloat(x))) {
      x = "50%";
    }
    if (e.getBBox && _isSVG(e)) {
      if (!e._gsTransform) {
        TweenLite2.set(e, { x: "+=0", overwrite: false });
        if (e._gsTransform.xOrigin === void 0) {
          console.log("Draggable requires at least GSAP 1.17.0");
        }
      }
      v = e.getBBox();
      decoratee.x = e._gsTransform.xOrigin - v.x;
      decoratee.y = e._gsTransform.yOrigin - v.y;
    } else {
      if (e.getBBox && (x + y).indexOf("%") !== -1) {
        e = e.getBBox();
        e = { offsetWidth: e.width, offsetHeight: e.height };
      }
      decoratee.x = x.indexOf("%") !== -1 ? e.offsetWidth * parseFloat(x) / 100 : parseFloat(x);
      decoratee.y = y.indexOf("%") !== -1 ? e.offsetHeight * parseFloat(y) / 100 : parseFloat(y);
    }
    return decoratee;
  }, _cache = function(e) {
    if (Draggable2.cacheSVGData !== false && e._dCache && e._dCache.lastUpdate === TweenLite2.ticker.frame) {
      return e._dCache;
    }
    var cache = e._dCache = e._dCache || {}, cs = _getComputedStyle(e), isSVG = e.getBBox && _isSVG(e), isSVGRoot = (e.nodeName + "").toLowerCase() === "svg", curSVG;
    cache.isSVG = isSVG;
    cache.isSVGRoot = isSVGRoot;
    cache.borderBox = cs.boxSizing === "border-box";
    cache.computedStyle = cs;
    if (isSVGRoot) {
      curSVG = e.parentNode || _docElement;
      curSVG.insertBefore(_tempDiv, e);
      cache.offsetParent = _tempDiv.offsetParent || _docElement;
      curSVG.removeChild(_tempDiv);
    } else if (isSVG) {
      curSVG = e.parentNode;
      while (curSVG && (curSVG.nodeName + "").toLowerCase() !== "svg") {
        curSVG = curSVG.parentNode;
      }
      cache.offsetParent = curSVG;
    } else {
      cache.offsetParent = e.offsetParent;
    }
    return cache;
  }, _getOffset2DMatrix = function(e, offsetOrigin, parentOffsetOrigin, zeroOrigin, isBase) {
    if (e === window || !e || !e.style || !e.parentNode) {
      return [1, 0, 0, 1, 0, 0];
    }
    var cache = e._dCache || _cache(e), parent = e.parentNode, parentCache = parent._dCache || _cache(parent), cs = cache.computedStyle, parentOffsetParent = cache.isSVG ? parentCache.offsetParent : parent.offsetParent, m, isRoot, offsets, rect, t, sx, sy, offsetX, offsetY, parentRect, borderTop, borderLeft, borderTranslateX, borderTranslateY;
    m = cache.isSVG && (e.style[_transformProp] + "").indexOf("matrix") !== -1 ? e.style[_transformProp] : cs ? cs.getPropertyValue(_transformPropCSS) : e.currentStyle ? e.currentStyle[_transformProp] : "1,0,0,1,0,0";
    if (e.getBBox && (e.getAttribute("transform") + "").indexOf("matrix") !== -1) {
      m = e.getAttribute("transform");
    }
    m = (m + "").match(/(?:\-|\.|\b)(\d|\.|e\-)+/g) || [1, 0, 0, 1, 0, 0];
    if (m.length > 6) {
      m = [m[0], m[1], m[4], m[5], m[12], m[13]];
    }
    if (zeroOrigin) {
      m[4] = m[5] = 0;
    } else if (cache.isSVG && (t = e._gsTransform) && (t.xOrigin || t.yOrigin)) {
      m[0] = parseFloat(m[0]);
      m[1] = parseFloat(m[1]);
      m[2] = parseFloat(m[2]);
      m[3] = parseFloat(m[3]);
      m[4] = parseFloat(m[4]) - (t.xOrigin - (t.xOrigin * m[0] + t.yOrigin * m[2]));
      m[5] = parseFloat(m[5]) - (t.yOrigin - (t.xOrigin * m[1] + t.yOrigin * m[3]));
    }
    if (offsetOrigin) {
      if (_svgBorderFactor === void 0) {
        _setEnvironmentVariables();
      }
      offsets = cache.isSVG || cache.isSVGRoot ? _getSVGOffsets(e) : e;
      if (cache.isSVG) {
        rect = e.getBBox();
        parentRect = parentCache.isSVGRoot ? { x: 0, y: 0 } : parent.getBBox();
        offsets = { offsetLeft: rect.x - parentRect.x, offsetTop: rect.y - parentRect.y, offsetParent: cache.offsetParent };
      } else if (cache.isSVGRoot) {
        borderTop = parseInt(cs.borderTopWidth, 10) || 0;
        borderLeft = parseInt(cs.borderLeftWidth, 10) || 0;
        borderTranslateX = (m[0] - _svgBorderFactor) * borderLeft + m[2] * borderTop;
        borderTranslateY = m[1] * borderLeft + (m[3] - _svgBorderFactor) * borderTop;
        sx = offsetOrigin.x;
        sy = offsetOrigin.y;
        offsetX = sx - (sx * m[0] + sy * m[2]);
        offsetY = sy - (sx * m[1] + sy * m[3]);
        m[4] = parseFloat(m[4]) + offsetX;
        m[5] = parseFloat(m[5]) + offsetY;
        offsetOrigin.x -= offsetX;
        offsetOrigin.y -= offsetY;
        sx = offsets.scaleX;
        sy = offsets.scaleY;
        if (!isBase) {
          offsetOrigin.x *= sx;
          offsetOrigin.y *= sy;
        }
        m[0] *= sx;
        m[1] *= sy;
        m[2] *= sx;
        m[3] *= sy;
        if (!_isIE10orBelow) {
          offsetOrigin.x += borderTranslateX;
          offsetOrigin.y += borderTranslateY;
        }
        if (parentOffsetParent === _doc2.body && offsets.offsetParent === _docElement) {
          parentOffsetParent = _docElement;
        }
      } else if (!_hasBorderBug && e.offsetParent) {
        offsetOrigin.x += parseInt(_getStyle(e.offsetParent, "borderLeftWidth"), 10) || 0;
        offsetOrigin.y += parseInt(_getStyle(e.offsetParent, "borderTopWidth"), 10) || 0;
      }
      isRoot = parent === _docElement || parent === _doc2.body;
      m[4] = Number(m[4]) + offsetOrigin.x + (offsets.offsetLeft || 0) - parentOffsetOrigin.x - (isRoot ? 0 : parent.scrollLeft || 0);
      m[5] = Number(m[5]) + offsetOrigin.y + (offsets.offsetTop || 0) - parentOffsetOrigin.y - (isRoot ? 0 : parent.scrollTop || 0);
      if (parent && _getStyle(e, "position", true) === "fixed") {
        m[4] += _getDocScrollLeft();
        m[5] += _getDocScrollTop();
        parent = parent.offsetParent;
        while (parent) {
          m[4] -= parent.offsetLeft;
          m[5] -= parent.offsetTop;
          parent = parent.offsetParent;
        }
      } else if (parent && parent !== _docElement && parentOffsetParent === offsets.offsetParent && !parentCache.isSVG && (!_hasReparentBug || _getOffset2DMatrix(parent).join("") === "100100")) {
        offsets = parentCache.isSVGRoot ? _getSVGOffsets(parent) : parent;
        m[4] -= offsets.offsetLeft || 0;
        m[5] -= offsets.offsetTop || 0;
        if (!_hasBorderBug && parentCache.offsetParent && !cache.isSVG && !cache.isSVGRoot) {
          m[4] -= parseInt(_getStyle(parentCache.offsetParent, "borderLeftWidth"), 10) || 0;
          m[5] -= parseInt(_getStyle(parentCache.offsetParent, "borderTopWidth"), 10) || 0;
        }
      }
    }
    return m;
  }, _getConcatenatedMatrix = function(e, invert) {
    if (!e || e === window || !e.parentNode) {
      return [1, 0, 0, 1, 0, 0];
    }
    var originOffset = _getOffsetTransformOrigin(e, _point1), parentOriginOffset = _getOffsetTransformOrigin(e.parentNode, _point2), m = _getOffset2DMatrix(e, originOffset, parentOriginOffset, false, !invert), a, b, c, d, tx, ty, m2, determinant;
    while ((e = e.parentNode) && e.parentNode && e !== _docElement) {
      originOffset = parentOriginOffset;
      parentOriginOffset = _getOffsetTransformOrigin(e.parentNode, originOffset === _point1 ? _point2 : _point1);
      m2 = _getOffset2DMatrix(e, originOffset, parentOriginOffset);
      a = m[0];
      b = m[1];
      c = m[2];
      d = m[3];
      tx = m[4];
      ty = m[5];
      m[0] = a * m2[0] + b * m2[2];
      m[1] = a * m2[1] + b * m2[3];
      m[2] = c * m2[0] + d * m2[2];
      m[3] = c * m2[1] + d * m2[3];
      m[4] = tx * m2[0] + ty * m2[2] + m2[4];
      m[5] = tx * m2[1] + ty * m2[3] + m2[5];
    }
    if (invert) {
      a = m[0];
      b = m[1];
      c = m[2];
      d = m[3];
      tx = m[4];
      ty = m[5];
      determinant = a * d - b * c;
      m[0] = d / determinant;
      m[1] = -b / determinant;
      m[2] = -c / determinant;
      m[3] = a / determinant;
      m[4] = (c * ty - d * tx) / determinant;
      m[5] = -(a * ty - b * tx) / determinant;
    }
    return m;
  }, _localToGlobal = function(e, p7, fromTopLeft, decoratee) {
    e = _unwrapElement2(e);
    var m = _getConcatenatedMatrix(e, false), x = p7.x, y = p7.y;
    if (fromTopLeft) {
      _getOffsetTransformOrigin(e, p7);
      x -= p7.x;
      y -= p7.y;
    }
    decoratee = decoratee === true ? p7 : decoratee || {};
    decoratee.x = x * m[0] + y * m[2] + m[4];
    decoratee.y = x * m[1] + y * m[3] + m[5];
    return decoratee;
  }, _localizePoint = function(p7, localToGlobal, globalToLocal) {
    var x = p7.x * localToGlobal[0] + p7.y * localToGlobal[2] + localToGlobal[4], y = p7.x * localToGlobal[1] + p7.y * localToGlobal[3] + localToGlobal[5];
    p7.x = x * globalToLocal[0] + y * globalToLocal[2] + globalToLocal[4];
    p7.y = x * globalToLocal[1] + y * globalToLocal[3] + globalToLocal[5];
    return p7;
  }, _getElementBounds = function(e, context, fromTopLeft) {
    if (!(e = _unwrapElement2(e))) {
      return null;
    }
    context = _unwrapElement2(context);
    var isSVG = e.getBBox && _isSVG(e), origin, left, right, top, bottom, mLocalToGlobal, mGlobalToLocal, p1, p22, p32, p42, bbox, width, height, cache, borderLeft, borderTop, viewBox, viewBoxX, viewBoxY, computedDimensions, cs;
    if (e === window) {
      top = _getDocScrollTop();
      left = _getDocScrollLeft();
      right = left + (_docElement.clientWidth || e.innerWidth || _doc2.body.clientWidth || 0);
      bottom = top + ((e.innerHeight || 0) - 20 < _docElement.clientHeight ? _docElement.clientHeight : e.innerHeight || _doc2.body.clientHeight || 0);
    } else if (context === void 0 || context === window) {
      return e.getBoundingClientRect();
    } else {
      origin = _getOffsetTransformOrigin(e);
      left = -origin.x;
      top = -origin.y;
      if (isSVG) {
        bbox = e.getBBox();
        width = bbox.width;
        height = bbox.height;
      } else if ((e.nodeName + "").toLowerCase() !== "svg" && e.offsetWidth) {
        width = e.offsetWidth;
        height = e.offsetHeight;
      } else {
        computedDimensions = _getComputedStyle(e);
        width = parseFloat(computedDimensions.width);
        height = parseFloat(computedDimensions.height);
      }
      right = left + width;
      bottom = top + height;
      if (e.nodeName.toLowerCase() === "svg" && !_isOldIE) {
        cache = _getSVGOffsets(e);
        cs = cache.computedStyle || {};
        viewBox = (e.getAttribute("viewBox") || "0 0").split(" ");
        viewBoxX = parseFloat(viewBox[0]);
        viewBoxY = parseFloat(viewBox[1]);
        borderLeft = parseFloat(cs.borderLeftWidth) || 0;
        borderTop = parseFloat(cs.borderTopWidth) || 0;
        left /= cache.scaleX;
        top /= cache.scaleY;
        right = left + width - (width - (width - borderLeft) / cache.scaleX - viewBoxX);
        bottom = top + height - (height - (height - borderTop) / cache.scaleY - viewBoxY);
        left -= borderLeft / cache.scaleX - viewBoxX;
        top -= borderTop / cache.scaleY - viewBoxY;
        if (computedDimensions) {
          right += (parseFloat(cs.borderRightWidth) + borderLeft) / cache.scaleX;
          bottom += (borderTop + parseFloat(cs.borderBottomWidth)) / cache.scaleY;
        }
      }
    }
    if (e === context) {
      return { left, top, width: right - left, height: bottom - top };
    }
    mLocalToGlobal = _getConcatenatedMatrix(e);
    mGlobalToLocal = _getConcatenatedMatrix(context, true);
    p1 = _localizePoint({ x: left, y: top }, mLocalToGlobal, mGlobalToLocal);
    p22 = _localizePoint({ x: right, y: top }, mLocalToGlobal, mGlobalToLocal);
    p32 = _localizePoint({ x: right, y: bottom }, mLocalToGlobal, mGlobalToLocal);
    p42 = _localizePoint({ x: left, y: bottom }, mLocalToGlobal, mGlobalToLocal);
    left = Math.min(p1.x, p22.x, p32.x, p42.x);
    top = Math.min(p1.y, p22.y, p32.y, p42.y);
    _temp1.x = _temp1.y = 0;
    if (fromTopLeft) {
      _getOffsetTransformOrigin(context, _temp1);
    }
    return { left: left + _temp1.x, top: top + _temp1.y, width: Math.max(p1.x, p22.x, p32.x, p42.x) - left, height: Math.max(p1.y, p22.y, p32.y, p42.y) - top };
  }, _isArrayLike = function(e) {
    return e && e.length && e[0] && (e[0].nodeType && e[0].style && !e.nodeType || e[0].length && e[0][0]) ? true : false;
  }, _flattenArray = function(a) {
    var result = [], l = a.length, i2, e, j;
    for (i2 = 0; i2 < l; i2++) {
      e = a[i2];
      if (_isArrayLike(e)) {
        j = e.length;
        for (j = 0; j < e.length; j++) {
          result.push(e[j]);
        }
      } else if (e && e.length !== 0) {
        result.push(e);
      }
    }
    return result;
  }, _isTouchDevice = typeof window !== "undefined" && "ontouchstart" in _docElement && "orientation" in window, _touchEventLookup = function(types) {
    var standard = types.split(","), converted = (_tempDiv.onpointerdown !== void 0 ? "pointerdown,pointermove,pointerup,pointercancel" : _tempDiv.onmspointerdown !== void 0 ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : types).split(","), obj = {}, i2 = 4;
    while (--i2 > -1) {
      obj[standard[i2]] = converted[i2];
      obj[converted[i2]] = standard[i2];
    }
    try {
      _docElement.addEventListener("test", null, Object.defineProperty({}, "passive", {
        get: function() {
          _supportsPassive = 1;
        }
      }));
    } catch (e) {
    }
    return obj;
  }("touchstart,touchmove,touchend,touchcancel"), _addListener = function(element, type, func, capture) {
    if (element.addEventListener) {
      var touchType = _touchEventLookup[type];
      capture = capture || (_supportsPassive ? { passive: false } : null);
      element.addEventListener(touchType || type, func, capture);
      if (touchType && type !== touchType) {
        element.addEventListener(type, func, capture);
      }
    } else if (element.attachEvent) {
      element.attachEvent("on" + type, func);
    }
  }, _removeListener = function(element, type, func) {
    if (element.removeEventListener) {
      var touchType = _touchEventLookup[type];
      element.removeEventListener(touchType || type, func);
      if (touchType && type !== touchType) {
        element.removeEventListener(type, func);
      }
    } else if (element.detachEvent) {
      element.detachEvent("on" + type, func);
    }
  }, _hasTouchID = function(list, ID) {
    var i2 = list.length;
    while (--i2 > -1) {
      if (list[i2].identifier === ID) {
        return true;
      }
    }
    return false;
  }, _onMultiTouchDocumentEnd = function(e) {
    _isMultiTouching = e.touches && _dragCount < e.touches.length;
    _removeListener(e.target, "touchend", _onMultiTouchDocumentEnd);
  }, _onMultiTouchDocument = function(e) {
    _isMultiTouching = e.touches && _dragCount < e.touches.length;
    _addListener(e.target, "touchend", _onMultiTouchDocumentEnd);
  }, _parseThrowProps = function(draggable, snap, max, min, factor, forceZeroVelocity) {
    var vars = {}, a, i2, l;
    if (snap) {
      if (factor !== 1 && snap instanceof Array) {
        vars.end = a = [];
        l = snap.length;
        if (typeof snap[0] === "object") {
          for (i2 = 0; i2 < l; i2++) {
            a[i2] = _copy(snap[i2], factor);
          }
        } else {
          for (i2 = 0; i2 < l; i2++) {
            a[i2] = snap[i2] * factor;
          }
        }
        max += 1.1;
        min -= 1.1;
      } else if (typeof snap === "function") {
        vars.end = function(value) {
          var result = snap.call(draggable, value), copy, p7;
          if (factor !== 1) {
            if (typeof result === "object") {
              copy = {};
              for (p7 in result) {
                copy[p7] = result[p7] * factor;
              }
              result = copy;
            } else {
              result *= factor;
            }
          }
          return result;
        };
      } else {
        vars.end = snap;
      }
    }
    if (max || max === 0) {
      vars.max = max;
    }
    if (min || min === 0) {
      vars.min = min;
    }
    if (forceZeroVelocity) {
      vars.velocity = 0;
    }
    return vars;
  }, _isClickable = function(e) {
    var data;
    return !e || !e.getAttribute || e.nodeName === "BODY" ? false : (data = e.getAttribute("data-clickable")) === "true" || data !== "false" && (e.onclick || _clickableTagExp.test(e.nodeName + "") || e.getAttribute("contentEditable") === "true") ? true : _isClickable(e.parentNode);
  }, _setSelectable = function(elements, selectable) {
    var i2 = elements.length, e;
    while (--i2 > -1) {
      e = elements[i2];
      e.ondragstart = e.onselectstart = selectable ? null : _emptyFunc;
      _setStyle(e, "userSelect", selectable ? "text" : "none");
    }
  }, _addPaddingBR = function() {
    var div = _doc2.createElement("div"), child = _doc2.createElement("div"), childStyle = child.style, parent = _doc2.body || _tempDiv, val;
    childStyle.display = "inline-block";
    childStyle.position = "relative";
    div.style.cssText = child.innerHTML = "width:90px; height:40px; padding:10px; overflow:auto; visibility: hidden";
    div.appendChild(child);
    parent.appendChild(div);
    val = child.offsetHeight + 18 > div.scrollHeight;
    parent.removeChild(div);
    return val;
  }(), ScrollProxy = function(element, vars) {
    element = _unwrapElement2(element);
    vars = vars || {};
    var content = _doc2.createElement("div"), style = content.style, node = element.firstChild, offsetTop = 0, offsetLeft = 0, prevTop = element.scrollTop, prevLeft = element.scrollLeft, scrollWidth = element.scrollWidth, scrollHeight = element.scrollHeight, extraPadRight = 0, maxLeft = 0, maxTop = 0, elementWidth, elementHeight, contentHeight, nextNode, transformStart, transformEnd;
    if (_supports3D && vars.force3D !== false) {
      transformStart = "translate3d(";
      transformEnd = "px,0px)";
    } else if (_transformProp) {
      transformStart = "translate(";
      transformEnd = "px)";
    }
    this.scrollTop = function(value, force) {
      if (!arguments.length) {
        return -this.top();
      }
      this.top(-value, force);
    };
    this.scrollLeft = function(value, force) {
      if (!arguments.length) {
        return -this.left();
      }
      this.left(-value, force);
    };
    this.left = function(value, force) {
      if (!arguments.length) {
        return -(element.scrollLeft + offsetLeft);
      }
      var dif = element.scrollLeft - prevLeft, oldOffset = offsetLeft;
      if ((dif > 2 || dif < -2) && !force) {
        prevLeft = element.scrollLeft;
        TweenLite2.killTweensOf(this, true, { left: 1, scrollLeft: 1 });
        this.left(-prevLeft);
        if (vars.onKill) {
          vars.onKill();
        }
        return;
      }
      value = -value;
      if (value < 0) {
        offsetLeft = value - 0.5 | 0;
        value = 0;
      } else if (value > maxLeft) {
        offsetLeft = value - maxLeft | 0;
        value = maxLeft;
      } else {
        offsetLeft = 0;
      }
      if (offsetLeft || oldOffset) {
        if (transformStart) {
          if (!this._suspendTransforms) {
            style[_transformProp] = transformStart + -offsetLeft + "px," + -offsetTop + transformEnd;
          }
        } else {
          style.left = -offsetLeft + "px";
        }
        if (offsetLeft + extraPadRight >= 0) {
          style.paddingRight = offsetLeft + extraPadRight + "px";
        }
      }
      element.scrollLeft = value | 0;
      prevLeft = element.scrollLeft;
    };
    this.top = function(value, force) {
      if (!arguments.length) {
        return -(element.scrollTop + offsetTop);
      }
      var dif = element.scrollTop - prevTop, oldOffset = offsetTop;
      if ((dif > 2 || dif < -2) && !force) {
        prevTop = element.scrollTop;
        TweenLite2.killTweensOf(this, true, { top: 1, scrollTop: 1 });
        this.top(-prevTop);
        if (vars.onKill) {
          vars.onKill();
        }
        return;
      }
      value = -value;
      if (value < 0) {
        offsetTop = value - 0.5 | 0;
        value = 0;
      } else if (value > maxTop) {
        offsetTop = value - maxTop | 0;
        value = maxTop;
      } else {
        offsetTop = 0;
      }
      if (offsetTop || oldOffset) {
        if (transformStart) {
          if (!this._suspendTransforms) {
            style[_transformProp] = transformStart + -offsetLeft + "px," + -offsetTop + transformEnd;
          }
        } else {
          style.top = -offsetTop + "px";
        }
      }
      element.scrollTop = value | 0;
      prevTop = element.scrollTop;
    };
    this.maxScrollTop = function() {
      return maxTop;
    };
    this.maxScrollLeft = function() {
      return maxLeft;
    };
    this.disable = function() {
      node = content.firstChild;
      while (node) {
        nextNode = node.nextSibling;
        element.appendChild(node);
        node = nextNode;
      }
      if (element === content.parentNode) {
        element.removeChild(content);
      }
    };
    this.enable = function() {
      node = element.firstChild;
      if (node === content) {
        return;
      }
      while (node) {
        nextNode = node.nextSibling;
        content.appendChild(node);
        node = nextNode;
      }
      element.appendChild(content);
      this.calibrate();
    };
    this.calibrate = function(force) {
      var widthMatches = element.clientWidth === elementWidth, x, y;
      prevTop = element.scrollTop;
      prevLeft = element.scrollLeft;
      if (widthMatches && element.clientHeight === elementHeight && content.offsetHeight === contentHeight && scrollWidth === element.scrollWidth && scrollHeight === element.scrollHeight && !force) {
        return;
      }
      if (offsetTop || offsetLeft) {
        x = this.left();
        y = this.top();
        this.left(-element.scrollLeft);
        this.top(-element.scrollTop);
      }
      if (!widthMatches || force) {
        style.display = "block";
        style.width = "auto";
        style.paddingRight = "0px";
        extraPadRight = Math.max(0, element.scrollWidth - element.clientWidth);
        if (extraPadRight) {
          extraPadRight += _getStyle(element, "paddingLeft") + (_addPaddingBR ? _getStyle(element, "paddingRight") : 0);
        }
      }
      style.display = "inline-block";
      style.position = "relative";
      style.overflow = "visible";
      style.verticalAlign = "top";
      style.width = "100%";
      style.paddingRight = extraPadRight + "px";
      if (_addPaddingBR) {
        style.paddingBottom = _getStyle(element, "paddingBottom", true);
      }
      if (_isOldIE) {
        style.zoom = "1";
      }
      elementWidth = element.clientWidth;
      elementHeight = element.clientHeight;
      scrollWidth = element.scrollWidth;
      scrollHeight = element.scrollHeight;
      maxLeft = element.scrollWidth - elementWidth;
      maxTop = element.scrollHeight - elementHeight;
      contentHeight = content.offsetHeight;
      style.display = "block";
      if (x || y) {
        this.left(x);
        this.top(y);
      }
    };
    this.content = content;
    this.element = element;
    this._suspendTransforms = false;
    this.enable();
  }, Draggable2 = function(target, vars) {
    EventDispatcher.call(this, target);
    target = _unwrapElement2(target);
    if (!ThrowPropsPlugin) {
      ThrowPropsPlugin = _globals.com.greensock.plugins.ThrowPropsPlugin;
    }
    this.vars = vars = _copy(vars || {});
    this.target = target;
    this.x = this.y = this.rotation = 0;
    this.dragResistance = parseFloat(vars.dragResistance) || 0;
    this.edgeResistance = isNaN(vars.edgeResistance) ? 1 : parseFloat(vars.edgeResistance) || 0;
    this.lockAxis = vars.lockAxis;
    this.autoScroll = vars.autoScroll || 0;
    this.lockedAxis = null;
    this.allowEventDefault = !!vars.allowEventDefault;
    var type = (vars.type || (_isOldIE ? "top,left" : "x,y")).toLowerCase(), xyMode = type.indexOf("x") !== -1 || type.indexOf("y") !== -1, rotationMode = type.indexOf("rotation") !== -1, xProp = rotationMode ? "rotation" : xyMode ? "x" : "left", yProp = xyMode ? "y" : "top", allowX = type.indexOf("x") !== -1 || type.indexOf("left") !== -1 || type === "scroll", allowY = type.indexOf("y") !== -1 || type.indexOf("top") !== -1 || type === "scroll", minimumMovement = vars.minimumMovement || 2, self = this, triggers = _slice(vars.trigger || vars.handle || target), killProps = {}, dragEndTime = 0, checkAutoScrollBounds = false, autoScrollMarginTop = vars.autoScrollMarginTop || 40, autoScrollMarginRight = vars.autoScrollMarginRight || 40, autoScrollMarginBottom = vars.autoScrollMarginBottom || 40, autoScrollMarginLeft = vars.autoScrollMarginLeft || 40, isClickable = vars.clickableTest || _isClickable, clickTime = 0, enabled, scrollProxy, startPointerX, startPointerY, startElementX, startElementY, hasBounds, hasDragCallback, maxX, minX, maxY, minY, tempVars, cssVars, touch, touchID, rotationOrigin, dirty, old, snapX, snapY, snapXY, isClicking, touchEventTarget, matrix, interrupted, startScrollTop, startScrollLeft, applyObj, allowNativeTouchScrolling, touchDragAxis, isDispatching, clickDispatch, trustedClickDispatch, onContextMenu = function(e) {
      if (self.isPressed && e.which < 2) {
        self.endDrag();
      } else {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    }, render = function(suppressEvents) {
      if (self.autoScroll && self.isDragging && (checkAutoScrollBounds || dirty)) {
        var e = target, autoScrollFactor = self.autoScroll * 15, parent, isRoot, rect, pointerX, pointerY, changeX, changeY, gap;
        checkAutoScrollBounds = false;
        _windowProxy.scrollTop = window.pageYOffset != null ? window.pageYOffset : _docElement.scrollTop != null ? _docElement.scrollTop : _doc2.body.scrollTop;
        _windowProxy.scrollLeft = window.pageXOffset != null ? window.pageXOffset : _docElement.scrollLeft != null ? _docElement.scrollLeft : _doc2.body.scrollLeft;
        pointerX = self.pointerX - _windowProxy.scrollLeft;
        pointerY = self.pointerY - _windowProxy.scrollTop;
        while (e && !isRoot) {
          isRoot = _isRoot(e.parentNode);
          parent = isRoot ? _windowProxy : e.parentNode;
          rect = isRoot ? { bottom: Math.max(_docElement.clientHeight, window.innerHeight || 0), right: Math.max(_docElement.clientWidth, window.innerWidth || 0), left: 0, top: 0 } : parent.getBoundingClientRect();
          changeX = changeY = 0;
          if (allowY) {
            gap = parent._gsMaxScrollY - parent.scrollTop;
            if (gap < 0) {
              changeY = gap;
            } else if (pointerY > rect.bottom - autoScrollMarginBottom && gap) {
              checkAutoScrollBounds = true;
              changeY = Math.min(gap, autoScrollFactor * (1 - Math.max(0, rect.bottom - pointerY) / autoScrollMarginBottom) | 0);
            } else if (pointerY < rect.top + autoScrollMarginTop && parent.scrollTop) {
              checkAutoScrollBounds = true;
              changeY = -Math.min(parent.scrollTop, autoScrollFactor * (1 - Math.max(0, pointerY - rect.top) / autoScrollMarginTop) | 0);
            }
            if (changeY) {
              parent.scrollTop += changeY;
            }
          }
          if (allowX) {
            gap = parent._gsMaxScrollX - parent.scrollLeft;
            if (gap < 0) {
              changeX = gap;
            } else if (pointerX > rect.right - autoScrollMarginRight && gap) {
              checkAutoScrollBounds = true;
              changeX = Math.min(gap, autoScrollFactor * (1 - Math.max(0, rect.right - pointerX) / autoScrollMarginRight) | 0);
            } else if (pointerX < rect.left + autoScrollMarginLeft && parent.scrollLeft) {
              checkAutoScrollBounds = true;
              changeX = -Math.min(parent.scrollLeft, autoScrollFactor * (1 - Math.max(0, pointerX - rect.left) / autoScrollMarginLeft) | 0);
            }
            if (changeX) {
              parent.scrollLeft += changeX;
            }
          }
          if (isRoot && (changeX || changeY)) {
            window.scrollTo(parent.scrollLeft, parent.scrollTop);
            setPointerPosition(self.pointerX + changeX, self.pointerY + changeY);
          }
          e = parent;
        }
      }
      if (dirty) {
        var x = self.x, y = self.y, min = 1e-6;
        if (x < min && x > -min) {
          x = 0;
        }
        if (y < min && y > -min) {
          y = 0;
        }
        if (rotationMode) {
          self.deltaX = x - applyObj.data.rotation;
          applyObj.data.rotation = self.rotation = x;
          applyObj.setRatio(1);
        } else {
          if (scrollProxy) {
            if (allowY) {
              self.deltaY = y - scrollProxy.top();
              scrollProxy.top(y);
            }
            if (allowX) {
              self.deltaX = x - scrollProxy.left();
              scrollProxy.left(x);
            }
          } else if (xyMode) {
            if (allowY) {
              self.deltaY = y - applyObj.data.y;
              applyObj.data.y = y;
            }
            if (allowX) {
              self.deltaX = x - applyObj.data.x;
              applyObj.data.x = x;
            }
            applyObj.setRatio(1);
          } else {
            if (allowY) {
              self.deltaY = y - parseFloat(target.style.top || 0);
              target.style.top = y + "px";
            }
            if (allowX) {
              self.deltaY = x - parseFloat(target.style.left || 0);
              target.style.left = x + "px";
            }
          }
        }
        if (hasDragCallback && !suppressEvents && !isDispatching) {
          isDispatching = true;
          _dispatchEvent(self, "drag", "onDrag");
          isDispatching = false;
        }
      }
      dirty = false;
    }, syncXY = function(skipOnUpdate, skipSnap) {
      var x = self.x, y = self.y, snappedValue;
      if (!target._gsTransform && (xyMode || rotationMode)) {
        TweenLite2.set(target, { x: "+=0", overwrite: false, data: "_draggable" });
      }
      if (xyMode) {
        self.y = target._gsTransform.y;
        self.x = target._gsTransform.x;
      } else if (rotationMode) {
        self.x = self.rotation = target._gsTransform.rotation;
      } else if (scrollProxy) {
        self.y = scrollProxy.top();
        self.x = scrollProxy.left();
      } else {
        self.y = parseInt(target.style.top, 10) || 0;
        self.x = parseInt(target.style.left, 10) || 0;
      }
      if ((snapX || snapY || snapXY) && !skipSnap && (self.isDragging || self.isThrowing)) {
        if (snapXY) {
          _temp1.x = self.x;
          _temp1.y = self.y;
          snappedValue = snapXY(_temp1);
          if (snappedValue.x !== self.x) {
            self.x = snappedValue.x;
            dirty = true;
          }
          if (snappedValue.y !== self.y) {
            self.y = snappedValue.y;
            dirty = true;
          }
        }
        if (snapX) {
          snappedValue = snapX(self.x);
          if (snappedValue !== self.x) {
            self.x = snappedValue;
            if (rotationMode) {
              self.rotation = snappedValue;
            }
            dirty = true;
          }
        }
        if (snapY) {
          snappedValue = snapY(self.y);
          if (snappedValue !== self.y) {
            self.y = snappedValue;
          }
          dirty = true;
        }
      }
      if (dirty) {
        render(true);
      }
      if (!skipOnUpdate) {
        self.deltaX = self.x - x;
        self.deltaY = self.y - y;
        _dispatchEvent(self, "throwupdate", "onThrowUpdate");
      }
    }, calculateBounds = function() {
      var bounds, targetBounds, snap, snapIsRaw;
      hasBounds = false;
      if (scrollProxy) {
        scrollProxy.calibrate();
        self.minX = minX = -scrollProxy.maxScrollLeft();
        self.minY = minY = -scrollProxy.maxScrollTop();
        self.maxX = maxX = self.maxY = maxY = 0;
        hasBounds = true;
      } else if (!!vars.bounds) {
        bounds = _getBounds(vars.bounds, target.parentNode);
        if (rotationMode) {
          self.minX = minX = bounds.left;
          self.maxX = maxX = bounds.left + bounds.width;
          self.minY = minY = self.maxY = maxY = 0;
        } else if (vars.bounds.maxX !== void 0 || vars.bounds.maxY !== void 0) {
          bounds = vars.bounds;
          self.minX = minX = bounds.minX;
          self.minY = minY = bounds.minY;
          self.maxX = maxX = bounds.maxX;
          self.maxY = maxY = bounds.maxY;
        } else {
          targetBounds = _getBounds(target, target.parentNode);
          self.minX = minX = _getStyle(target, xProp) + bounds.left - targetBounds.left;
          self.minY = minY = _getStyle(target, yProp) + bounds.top - targetBounds.top;
          self.maxX = maxX = minX + (bounds.width - targetBounds.width);
          self.maxY = maxY = minY + (bounds.height - targetBounds.height);
        }
        if (minX > maxX) {
          self.minX = maxX;
          self.maxX = maxX = minX;
          minX = self.minX;
        }
        if (minY > maxY) {
          self.minY = maxY;
          self.maxY = maxY = minY;
          minY = self.minY;
        }
        if (rotationMode) {
          self.minRotation = minX;
          self.maxRotation = maxX;
        }
        hasBounds = true;
      }
      if (vars.liveSnap) {
        snap = vars.liveSnap === true ? vars.snap || {} : vars.liveSnap;
        snapIsRaw = snap instanceof Array || typeof snap === "function";
        if (rotationMode) {
          snapX = buildSnapFunc(snapIsRaw ? snap : snap.rotation, minX, maxX, 1);
          snapY = null;
        } else {
          if (snap.points) {
            snapXY = buildPointSnapFunc(snapIsRaw ? snap : snap.points, minX, maxX, minY, maxY, snap.radius, scrollProxy ? -1 : 1);
          } else {
            if (allowX) {
              snapX = buildSnapFunc(snapIsRaw ? snap : snap.x || snap.left || snap.scrollLeft, minX, maxX, scrollProxy ? -1 : 1);
            }
            if (allowY) {
              snapY = buildSnapFunc(snapIsRaw ? snap : snap.y || snap.top || snap.scrollTop, minY, maxY, scrollProxy ? -1 : 1);
            }
          }
        }
      }
    }, onThrowComplete = function() {
      self.isThrowing = false;
      _dispatchEvent(self, "throwcomplete", "onThrowComplete");
    }, onThrowOverwrite = function() {
      self.isThrowing = false;
    }, animate = function(throwProps, forceZeroVelocity) {
      var snap, snapIsRaw, tween, overshootTolerance;
      if (throwProps && ThrowPropsPlugin) {
        if (throwProps === true) {
          snap = vars.snap || vars.liveSnap || {};
          snapIsRaw = snap instanceof Array || typeof snap === "function";
          throwProps = { resistance: (vars.throwResistance || vars.resistance || 1e3) / (rotationMode ? 10 : 1) };
          if (rotationMode) {
            throwProps.rotation = _parseThrowProps(self, snapIsRaw ? snap : snap.rotation, maxX, minX, 1, forceZeroVelocity);
          } else {
            if (allowX) {
              throwProps[xProp] = _parseThrowProps(self, snapIsRaw ? snap : snap.points || snap.x || snap.left || snap.scrollLeft, maxX, minX, scrollProxy ? -1 : 1, forceZeroVelocity || self.lockedAxis === "x");
            }
            if (allowY) {
              throwProps[yProp] = _parseThrowProps(self, snapIsRaw ? snap : snap.points || snap.y || snap.top || snap.scrollTop, maxY, minY, scrollProxy ? -1 : 1, forceZeroVelocity || self.lockedAxis === "y");
            }
            if (snap.points || snap instanceof Array && typeof snap[0] === "object") {
              throwProps.linkedProps = xProp + "," + yProp;
              throwProps.radius = snap.radius;
            }
          }
        }
        self.isThrowing = true;
        overshootTolerance = !isNaN(vars.overshootTolerance) ? vars.overshootTolerance : vars.edgeResistance === 1 ? 0 : 1 - self.edgeResistance + 0.2;
        self.tween = tween = ThrowPropsPlugin.to(scrollProxy || target, { throwProps, data: "_draggable", ease: vars.ease || _globals.Power3.easeOut, onComplete: onThrowComplete, onOverwrite: onThrowOverwrite, onUpdate: vars.fastMode ? _dispatchEvent : syncXY, onUpdateParams: vars.fastMode ? [self, "onthrowupdate", "onThrowUpdate"] : snap && snap.radius ? [false, true] : _emptyArray }, Math.max(vars.minDuration || 0, vars.maxDuration || 0) || 2, !isNaN(vars.minDuration) ? vars.minDuration : overshootTolerance === 0 || typeof throwProps === "object" && throwProps.resistance > 1e3 ? 0 : 0.5, overshootTolerance);
        if (!vars.fastMode) {
          if (scrollProxy) {
            scrollProxy._suspendTransforms = true;
          }
          tween.render(tween.duration(), true, true);
          syncXY(true, true);
          self.endX = self.x;
          self.endY = self.y;
          if (rotationMode) {
            self.endRotation = self.x;
          }
          tween.play(0);
          syncXY(true, true);
          if (scrollProxy) {
            scrollProxy._suspendTransforms = false;
          }
        }
      } else if (hasBounds) {
        self.applyBounds();
      }
    }, updateMatrix = function(shiftStart) {
      var start = matrix || [1, 0, 0, 1, 0, 0], a, b, c, d, tx, ty, determinant, pointerX, pointerY;
      matrix = _getConcatenatedMatrix(target.parentNode, true);
      if (shiftStart && self.isPressed && start.join(",") !== matrix.join(",")) {
        a = start[0];
        b = start[1];
        c = start[2];
        d = start[3];
        tx = start[4];
        ty = start[5];
        determinant = a * d - b * c;
        pointerX = startPointerX * (d / determinant) + startPointerY * (-c / determinant) + (c * ty - d * tx) / determinant;
        pointerY = startPointerX * (-b / determinant) + startPointerY * (a / determinant) + -(a * ty - b * tx) / determinant;
        startPointerY = pointerX * matrix[1] + pointerY * matrix[3] + matrix[5];
        startPointerX = pointerX * matrix[0] + pointerY * matrix[2] + matrix[4];
      }
      if (!matrix[1] && !matrix[2] && matrix[0] == 1 && matrix[3] == 1 && matrix[4] == 0 && matrix[5] == 0) {
        matrix = null;
      }
    }, recordStartPositions = function() {
      var edgeTolerance = 1 - self.edgeResistance;
      updateMatrix(false);
      if (matrix) {
        startPointerX = self.pointerX * matrix[0] + self.pointerY * matrix[2] + matrix[4];
        startPointerY = self.pointerX * matrix[1] + self.pointerY * matrix[3] + matrix[5];
      }
      if (dirty) {
        setPointerPosition(self.pointerX, self.pointerY);
        render(true);
      }
      if (scrollProxy) {
        calculateBounds();
        startElementY = scrollProxy.top();
        startElementX = scrollProxy.left();
      } else {
        if (isTweening()) {
          syncXY(true, true);
          calculateBounds();
        } else {
          self.applyBounds();
        }
        if (rotationMode) {
          rotationOrigin = self.rotationOrigin = _localToGlobal(target, { x: 0, y: 0 });
          syncXY(true, true);
          startElementX = self.x;
          startElementY = self.y = Math.atan2(rotationOrigin.y - self.pointerY, self.pointerX - rotationOrigin.x) * _RAD2DEG;
        } else {
          startScrollTop = target.parentNode ? target.parentNode.scrollTop || 0 : 0;
          startScrollLeft = target.parentNode ? target.parentNode.scrollLeft || 0 : 0;
          startElementY = _getStyle(target, yProp);
          startElementX = _getStyle(target, xProp);
        }
      }
      if (hasBounds && edgeTolerance) {
        if (startElementX > maxX) {
          startElementX = maxX + (startElementX - maxX) / edgeTolerance;
        } else if (startElementX < minX) {
          startElementX = minX - (minX - startElementX) / edgeTolerance;
        }
        if (!rotationMode) {
          if (startElementY > maxY) {
            startElementY = maxY + (startElementY - maxY) / edgeTolerance;
          } else if (startElementY < minY) {
            startElementY = minY - (minY - startElementY) / edgeTolerance;
          }
        }
      }
      self.startX = startElementX;
      self.startY = startElementY;
    }, isTweening = function() {
      return self.tween && self.tween.isActive();
    }, removePlaceholder = function() {
      if (_placeholderDiv.parentNode && !isTweening() && !self.isDragging) {
        _placeholderDiv.parentNode.removeChild(_placeholderDiv);
      }
    }, buildSnapFunc = function(snap, min, max, factor) {
      if (min == null) {
        min = -_max2;
      }
      if (max == null) {
        max = _max2;
      }
      if (typeof snap === "function") {
        return function(n) {
          var edgeTolerance = !self.isPressed ? 1 : 1 - self.edgeResistance;
          return snap.call(self, n > max ? max + (n - max) * edgeTolerance : n < min ? min + (n - min) * edgeTolerance : n) * factor;
        };
      }
      if (snap instanceof Array) {
        return function(n) {
          var i2 = snap.length, closest = 0, absDif = _max2, val, dif;
          while (--i2 > -1) {
            val = snap[i2];
            dif = val - n;
            if (dif < 0) {
              dif = -dif;
            }
            if (dif < absDif && val >= min && val <= max) {
              closest = i2;
              absDif = dif;
            }
          }
          return snap[closest];
        };
      }
      return isNaN(snap) ? function(n) {
        return n;
      } : function() {
        return snap * factor;
      };
    }, buildPointSnapFunc = function(snap, minX2, maxX2, minY2, maxY2, radius, factor) {
      radius = radius && radius < _max2 ? radius * radius : _max2;
      if (typeof snap === "function") {
        return function(point) {
          var edgeTolerance = !self.isPressed ? 1 : 1 - self.edgeResistance, x = point.x, y = point.y, result, dx, dy;
          point.x = x = x > maxX2 ? maxX2 + (x - maxX2) * edgeTolerance : x < minX2 ? minX2 + (x - minX2) * edgeTolerance : x;
          point.y = y = y > maxY2 ? maxY2 + (y - maxY2) * edgeTolerance : y < minY2 ? minY2 + (y - minY2) * edgeTolerance : y;
          result = snap.call(self, point);
          if (result !== point) {
            point.x = result.x;
            point.y = result.y;
          }
          if (factor !== 1) {
            point.x *= factor;
            point.y *= factor;
          }
          if (radius < _max2) {
            dx = point.x - x;
            dy = point.y - y;
            if (dx * dx + dy * dy > radius) {
              point.x = x;
              point.y = y;
            }
          }
          return point;
        };
      }
      if (snap instanceof Array) {
        return function(p7) {
          var i2 = snap.length, closest = 0, minDist = _max2, x, y, point, dist;
          while (--i2 > -1) {
            point = snap[i2];
            x = point.x - p7.x;
            y = point.y - p7.y;
            dist = x * x + y * y;
            if (dist < minDist) {
              closest = i2;
              minDist = dist;
            }
          }
          return minDist <= radius ? snap[closest] : p7;
        };
      }
      return function(n) {
        return n;
      };
    }, onPress = function(e, force) {
      var i2;
      if (!enabled || self.isPressed || !e || (e.type === "mousedown" || e.type === "pointerdown") && !force && _getTime() - clickTime < 30 && _touchEventLookup[self.pointerEvent.type]) {
        return;
      }
      interrupted = isTweening();
      self.pointerEvent = e;
      if (_touchEventLookup[e.type]) {
        touchEventTarget = e.type.indexOf("touch") !== -1 ? e.currentTarget || e.target : _doc2;
        _addListener(touchEventTarget, "touchend", onRelease);
        _addListener(touchEventTarget, "touchmove", onMove);
        _addListener(touchEventTarget, "touchcancel", onRelease);
        _addListener(_doc2, "touchstart", _onMultiTouchDocument);
      } else {
        touchEventTarget = null;
        _addListener(_doc2, "mousemove", onMove);
      }
      touchDragAxis = null;
      _addListener(_doc2, "mouseup", onRelease);
      if (e && e.target) {
        _addListener(e.target, "mouseup", onRelease);
      }
      isClicking = isClickable.call(self, e.target) && vars.dragClickables === false && !force;
      if (isClicking) {
        _addListener(e.target, "change", onRelease);
        _dispatchEvent(self, "pressInit", "onPressInit");
        _dispatchEvent(self, "press", "onPress");
        _setSelectable(triggers, true);
        return;
      }
      allowNativeTouchScrolling = !touchEventTarget || allowX === allowY || self.vars.allowNativeTouchScrolling === false || self.vars.allowContextMenu && e && (e.ctrlKey || e.which > 2) ? false : allowX ? "y" : "x";
      if (_isOldIE) {
        e = _populateIEEvent(e, true);
      } else if (!allowNativeTouchScrolling && !self.allowEventDefault) {
        e.preventDefault();
        if (e.preventManipulation) {
          e.preventManipulation();
        }
      }
      if (e.changedTouches) {
        e = touch = e.changedTouches[0];
        touchID = e.identifier;
      } else if (e.pointerId) {
        touchID = e.pointerId;
      } else {
        touch = touchID = null;
      }
      _dragCount++;
      _addToRenderQueue(render);
      startPointerY = self.pointerY = e.pageY;
      startPointerX = self.pointerX = e.pageX;
      _dispatchEvent(self, "pressInit", "onPressInit");
      if (allowNativeTouchScrolling || self.autoScroll) {
        _recordMaxScrolls(target.parentNode);
      }
      if (target.parentNode && self.autoScroll && !scrollProxy && !rotationMode && target.parentNode._gsMaxScrollX && !_placeholderDiv.parentNode && !target.getBBox) {
        _placeholderDiv.style.width = target.parentNode.scrollWidth + "px";
        target.parentNode.appendChild(_placeholderDiv);
      }
      recordStartPositions();
      if (self.tween) {
        self.tween.kill();
      }
      self.isThrowing = false;
      TweenLite2.killTweensOf(scrollProxy || target, true, killProps);
      if (scrollProxy) {
        TweenLite2.killTweensOf(target, true, { scrollTo: 1 });
      }
      self.tween = self.lockedAxis = null;
      if (vars.zIndexBoost || !rotationMode && !scrollProxy && vars.zIndexBoost !== false) {
        target.style.zIndex = Draggable2.zIndex++;
      }
      self.isPressed = true;
      hasDragCallback = !!(vars.onDrag || self._listeners.drag);
      if (!rotationMode && (vars.cursor !== false || vars.activeCursor)) {
        i2 = triggers.length;
        while (--i2 > -1) {
          _setStyle(triggers[i2], "cursor", vars.activeCursor || vars.cursor || "move");
        }
      }
      _dispatchEvent(self, "press", "onPress");
    }, onMove = function(e) {
      var originalEvent = e, touches, pointerX, pointerY, i2, dx, dy;
      if (!enabled || _isMultiTouching || !self.isPressed || !e) {
        return;
      }
      self.pointerEvent = e;
      touches = e.changedTouches;
      if (touches) {
        e = touches[0];
        if (e !== touch && e.identifier !== touchID) {
          i2 = touches.length;
          while (--i2 > -1 && (e = touches[i2]).identifier !== touchID) {
          }
          if (i2 < 0) {
            return;
          }
        }
      } else if (e.pointerId && touchID && e.pointerId !== touchID) {
        return;
      }
      if (_isOldIE) {
        e = _populateIEEvent(e, true);
      } else {
        if (touchEventTarget && allowNativeTouchScrolling && !touchDragAxis) {
          pointerX = e.pageX;
          pointerY = e.pageY;
          if (matrix) {
            i2 = pointerX * matrix[0] + pointerY * matrix[2] + matrix[4];
            pointerY = pointerX * matrix[1] + pointerY * matrix[3] + matrix[5];
            pointerX = i2;
          }
          dx = Math.abs(pointerX - startPointerX);
          dy = Math.abs(pointerY - startPointerY);
          if (dx !== dy && (dx > minimumMovement || dy > minimumMovement) || _isAndroid && allowNativeTouchScrolling === touchDragAxis) {
            touchDragAxis = dx > dy && allowX ? "x" : "y";
            if (self.vars.lockAxisOnTouchScroll !== false) {
              self.lockedAxis = touchDragAxis === "x" ? "y" : "x";
              if (typeof self.vars.onLockAxis === "function") {
                self.vars.onLockAxis.call(self, originalEvent);
              }
            }
            if (_isAndroid && allowNativeTouchScrolling === touchDragAxis) {
              onRelease(originalEvent);
              return;
            }
          }
        }
        if (!self.allowEventDefault && (!allowNativeTouchScrolling || touchDragAxis && allowNativeTouchScrolling !== touchDragAxis) && originalEvent.cancelable !== false) {
          originalEvent.preventDefault();
          if (originalEvent.preventManipulation) {
            originalEvent.preventManipulation();
          }
        }
      }
      if (self.autoScroll) {
        checkAutoScrollBounds = true;
      }
      setPointerPosition(e.pageX, e.pageY);
    }, setPointerPosition = function(pointerX, pointerY) {
      var dragTolerance = 1 - self.dragResistance, edgeTolerance = 1 - self.edgeResistance, xChange, yChange, x, y, dif, temp;
      self.pointerX = pointerX;
      self.pointerY = pointerY;
      if (rotationMode) {
        y = Math.atan2(rotationOrigin.y - pointerY, pointerX - rotationOrigin.x) * _RAD2DEG;
        dif = self.y - y;
        if (dif > 180) {
          startElementY -= 360;
          self.y = y;
        } else if (dif < -180) {
          startElementY += 360;
          self.y = y;
        }
        if (self.x !== startElementX || Math.abs(startElementY - y) > minimumMovement) {
          self.y = y;
          x = startElementX + (startElementY - y) * dragTolerance;
        } else {
          x = startElementX;
        }
      } else {
        if (matrix) {
          temp = pointerX * matrix[0] + pointerY * matrix[2] + matrix[4];
          pointerY = pointerX * matrix[1] + pointerY * matrix[3] + matrix[5];
          pointerX = temp;
        }
        yChange = pointerY - startPointerY;
        xChange = pointerX - startPointerX;
        if (yChange < minimumMovement && yChange > -minimumMovement) {
          yChange = 0;
        }
        if (xChange < minimumMovement && xChange > -minimumMovement) {
          xChange = 0;
        }
        if ((self.lockAxis || self.lockedAxis) && (xChange || yChange)) {
          temp = self.lockedAxis;
          if (!temp) {
            self.lockedAxis = temp = allowX && Math.abs(xChange) > Math.abs(yChange) ? "y" : allowY ? "x" : null;
            if (temp && typeof self.vars.onLockAxis === "function") {
              self.vars.onLockAxis.call(self, self.pointerEvent);
            }
          }
          if (temp === "y") {
            yChange = 0;
          } else if (temp === "x") {
            xChange = 0;
          }
        }
        x = startElementX + xChange * dragTolerance;
        y = startElementY + yChange * dragTolerance;
      }
      if ((snapX || snapY || snapXY) && (self.x !== x || self.y !== y && !rotationMode)) {
        if (snapXY) {
          _temp1.x = x;
          _temp1.y = y;
          temp = snapXY(_temp1);
          x = temp.x;
          y = temp.y;
        }
        if (snapX) {
          x = snapX(x);
        }
        if (snapY) {
          y = snapY(y);
        }
      } else if (hasBounds) {
        if (x > maxX) {
          x = maxX + (x - maxX) * edgeTolerance;
        } else if (x < minX) {
          x = minX + (x - minX) * edgeTolerance;
        }
        if (!rotationMode) {
          if (y > maxY) {
            y = maxY + (y - maxY) * edgeTolerance;
          } else if (y < minY) {
            y = minY + (y - minY) * edgeTolerance;
          }
        }
      }
      if (!rotationMode && !matrix) {
        x = Math.round(x);
        y = Math.round(y);
      }
      if (self.x !== x || self.y !== y && !rotationMode) {
        if (rotationMode) {
          self.endRotation = self.x = self.endX = x;
          dirty = true;
        } else {
          if (allowY) {
            self.y = self.endY = y;
            dirty = true;
          }
          if (allowX) {
            self.x = self.endX = x;
            dirty = true;
          }
        }
        if (!self.isDragging && self.isPressed) {
          self.isDragging = true;
          _dispatchEvent(self, "dragstart", "onDragStart");
        }
      }
    }, onRelease = function(e, force) {
      if (!enabled || !self.isPressed || e && touchID != null && !force && (e.pointerId && e.pointerId !== touchID || e.changedTouches && !_hasTouchID(e.changedTouches, touchID))) {
        return;
      }
      self.isPressed = false;
      var originalEvent = e, wasDragging = self.isDragging, isContextMenuRelease = self.vars.allowContextMenu && e && (e.ctrlKey || e.which > 2), placeholderDelayedCall = TweenLite2.delayedCall(1e-3, removePlaceholder), touches, i2, syntheticEvent, eventTarget, syntheticClick;
      if (touchEventTarget) {
        _removeListener(touchEventTarget, "touchend", onRelease);
        _removeListener(touchEventTarget, "touchmove", onMove);
        _removeListener(touchEventTarget, "touchcancel", onRelease);
        _removeListener(_doc2, "touchstart", _onMultiTouchDocument);
      } else {
        _removeListener(_doc2, "mousemove", onMove);
      }
      _removeListener(_doc2, "mouseup", onRelease);
      if (e && e.target) {
        _removeListener(e.target, "mouseup", onRelease);
      }
      dirty = false;
      if (isClicking && !isContextMenuRelease) {
        if (e) {
          _removeListener(e.target, "change", onRelease);
          self.pointerEvent = originalEvent;
        }
        _setSelectable(triggers, false);
        _dispatchEvent(self, "release", "onRelease");
        _dispatchEvent(self, "click", "onClick");
        isClicking = false;
        return;
      }
      _removeFromRenderQueue(render);
      if (!rotationMode) {
        i2 = triggers.length;
        while (--i2 > -1) {
          _setStyle(triggers[i2], "cursor", vars.cursor || (vars.cursor !== false ? "move" : null));
        }
      }
      if (wasDragging) {
        dragEndTime = _lastDragTime = _getTime();
        self.isDragging = false;
      }
      _dragCount--;
      if (e) {
        if (_isOldIE) {
          e = _populateIEEvent(e, false);
        }
        touches = e.changedTouches;
        if (touches) {
          e = touches[0];
          if (e !== touch && e.identifier !== touchID) {
            i2 = touches.length;
            while (--i2 > -1 && (e = touches[i2]).identifier !== touchID) {
            }
            if (i2 < 0) {
              return;
            }
          }
        }
        self.pointerEvent = originalEvent;
        self.pointerX = e.pageX;
        self.pointerY = e.pageY;
      }
      if (isContextMenuRelease && originalEvent) {
        originalEvent.preventDefault();
        if (originalEvent.preventManipulation) {
          originalEvent.preventManipulation();
        }
        _dispatchEvent(self, "release", "onRelease");
      } else if (originalEvent && !wasDragging) {
        if (interrupted && (vars.snap || vars.bounds)) {
          animate(vars.throwProps);
        }
        _dispatchEvent(self, "release", "onRelease");
        if ((!_isAndroid || originalEvent.type !== "touchmove") && originalEvent.type.indexOf("cancel") === -1) {
          _dispatchEvent(self, "click", "onClick");
          if (_getTime() - clickTime < 300) {
            _dispatchEvent(self, "doubleclick", "onDoubleClick");
          }
          eventTarget = originalEvent.target || originalEvent.srcElement || target;
          clickTime = _getTime();
          syntheticClick = function() {
            if (clickTime !== clickDispatch && self.enabled() && !self.isPressed) {
              if (eventTarget.click) {
                eventTarget.click();
              } else if (_doc2.createEvent) {
                syntheticEvent = _doc2.createEvent("MouseEvents");
                syntheticEvent.initMouseEvent("click", true, true, window, 1, self.pointerEvent.screenX, self.pointerEvent.screenY, self.pointerX, self.pointerY, false, false, false, false, 0, null);
                eventTarget.dispatchEvent(syntheticEvent);
              }
            }
          };
          if (!_isAndroid && !originalEvent.defaultPrevented) {
            TweenLite2.delayedCall(1e-5, syntheticClick);
          }
        }
      } else {
        animate(vars.throwProps);
        if (!_isOldIE && !self.allowEventDefault && originalEvent && (vars.dragClickables !== false || !isClickable.call(self, originalEvent.target)) && wasDragging && (!allowNativeTouchScrolling || touchDragAxis && allowNativeTouchScrolling === touchDragAxis) && originalEvent.cancelable !== false) {
          originalEvent.preventDefault();
          if (originalEvent.preventManipulation) {
            originalEvent.preventManipulation();
          }
        }
        _dispatchEvent(self, "release", "onRelease");
      }
      if (isTweening()) {
        placeholderDelayedCall.duration(self.tween.duration());
      }
      if (wasDragging) {
        _dispatchEvent(self, "dragend", "onDragEnd");
      }
      return true;
    }, updateScroll = function(e) {
      if (e && self.isDragging && !scrollProxy) {
        var parent = e.target || e.srcElement || target.parentNode, deltaX = parent.scrollLeft - parent._gsScrollX, deltaY = parent.scrollTop - parent._gsScrollY;
        if (deltaX || deltaY) {
          if (matrix) {
            startPointerX -= deltaX * matrix[0] + deltaY * matrix[2];
            startPointerY -= deltaY * matrix[3] + deltaX * matrix[1];
          } else {
            startPointerX -= deltaX;
            startPointerY -= deltaY;
          }
          parent._gsScrollX += deltaX;
          parent._gsScrollY += deltaY;
          setPointerPosition(self.pointerX, self.pointerY);
        }
      }
    }, onClick = function(e) {
      var time = _getTime(), recentlyClicked = time - clickTime < 40, recentlyDragged = time - dragEndTime < 40, alreadyDispatched = recentlyClicked && clickDispatch === clickTime, isModern = !!e.preventDefault, defaultPrevented = self.pointerEvent && self.pointerEvent.defaultPrevented, alreadyDispatchedTrusted = recentlyClicked && trustedClickDispatch === clickTime, trusted = e.isTrusted || e.isTrusted == null && recentlyClicked && alreadyDispatched;
      if (isModern && (alreadyDispatched || recentlyDragged && self.vars.suppressClickOnDrag !== false)) {
        e.stopImmediatePropagation();
      }
      if (recentlyClicked && !(self.pointerEvent && self.pointerEvent.defaultPrevented) && (!alreadyDispatched || trusted !== alreadyDispatchedTrusted)) {
        if (trusted && alreadyDispatched) {
          trustedClickDispatch = clickTime;
        }
        clickDispatch = clickTime;
        return;
      }
      if (self.isPressed || recentlyDragged || recentlyClicked) {
        if (!isModern) {
          e.returnValue = false;
        } else if (!trusted || !e.detail || !recentlyClicked || defaultPrevented) {
          e.preventDefault();
          if (e.preventManipulation) {
            e.preventManipulation();
          }
        }
      }
    }, localizePoint = function(p7) {
      return matrix ? { x: p7.x * matrix[0] + p7.y * matrix[2] + matrix[4], y: p7.x * matrix[1] + p7.y * matrix[3] + matrix[5] } : { x: p7.x, y: p7.y };
    };
    old = Draggable2.get(this.target);
    if (old) {
      old.kill();
    }
    this.startDrag = function(e, align) {
      var r1, r2, p1, p22;
      onPress(e || self.pointerEvent, true);
      if (align && !self.hitTest(e || self.pointerEvent)) {
        r1 = _parseRect(e || self.pointerEvent);
        r2 = _parseRect(target);
        p1 = localizePoint({ x: r1.left + r1.width / 2, y: r1.top + r1.height / 2 });
        p22 = localizePoint({ x: r2.left + r2.width / 2, y: r2.top + r2.height / 2 });
        startPointerX -= p1.x - p22.x;
        startPointerY -= p1.y - p22.y;
      }
      if (!self.isDragging) {
        self.isDragging = true;
        _dispatchEvent(self, "dragstart", "onDragStart");
      }
    };
    this.drag = onMove;
    this.endDrag = function(e) {
      onRelease(e || self.pointerEvent, true);
    };
    this.timeSinceDrag = function() {
      return self.isDragging ? 0 : (_getTime() - dragEndTime) / 1e3;
    };
    this.timeSinceClick = function() {
      return (_getTime() - clickTime) / 1e3;
    };
    this.hitTest = function(target2, threshold) {
      return Draggable2.hitTest(self.target, target2, threshold);
    };
    this.getDirection = function(from, diagonalThreshold) {
      var mode = from === "velocity" && ThrowPropsPlugin ? from : typeof from === "object" && !rotationMode ? "element" : "start", xChange, yChange, ratio, direction, r1, r2;
      if (mode === "element") {
        r1 = _parseRect(self.target);
        r2 = _parseRect(from);
      }
      xChange = mode === "start" ? self.x - startElementX : mode === "velocity" ? ThrowPropsPlugin.getVelocity(this.target, xProp) : r1.left + r1.width / 2 - (r2.left + r2.width / 2);
      if (rotationMode) {
        return xChange < 0 ? "counter-clockwise" : "clockwise";
      } else {
        diagonalThreshold = diagonalThreshold || 2;
        yChange = mode === "start" ? self.y - startElementY : mode === "velocity" ? ThrowPropsPlugin.getVelocity(this.target, yProp) : r1.top + r1.height / 2 - (r2.top + r2.height / 2);
        ratio = Math.abs(xChange / yChange);
        direction = ratio < 1 / diagonalThreshold ? "" : xChange < 0 ? "left" : "right";
        if (ratio < diagonalThreshold) {
          if (direction !== "") {
            direction += "-";
          }
          direction += yChange < 0 ? "up" : "down";
        }
      }
      return direction;
    };
    this.applyBounds = function(newBounds) {
      var x, y, forceZeroVelocity, e, parent, isRoot;
      if (newBounds && vars.bounds !== newBounds) {
        vars.bounds = newBounds;
        return self.update(true);
      }
      syncXY(true);
      calculateBounds();
      if (hasBounds) {
        x = self.x;
        y = self.y;
        if (x > maxX) {
          x = maxX;
        } else if (x < minX) {
          x = minX;
        }
        if (y > maxY) {
          y = maxY;
        } else if (y < minY) {
          y = minY;
        }
        if (self.x !== x || self.y !== y) {
          forceZeroVelocity = true;
          self.x = self.endX = x;
          if (rotationMode) {
            self.endRotation = x;
          } else {
            self.y = self.endY = y;
          }
          dirty = true;
          render(true);
          if (self.autoScroll && !self.isDragging) {
            _recordMaxScrolls(target.parentNode);
            e = target;
            _windowProxy.scrollTop = window.pageYOffset != null ? window.pageYOffset : _docElement.scrollTop != null ? _docElement.scrollTop : _doc2.body.scrollTop;
            _windowProxy.scrollLeft = window.pageXOffset != null ? window.pageXOffset : _docElement.scrollLeft != null ? _docElement.scrollLeft : _doc2.body.scrollLeft;
            while (e && !isRoot) {
              isRoot = _isRoot(e.parentNode);
              parent = isRoot ? _windowProxy : e.parentNode;
              if (allowY && parent.scrollTop > parent._gsMaxScrollY) {
                parent.scrollTop = parent._gsMaxScrollY;
              }
              if (allowX && parent.scrollLeft > parent._gsMaxScrollX) {
                parent.scrollLeft = parent._gsMaxScrollX;
              }
              e = parent;
            }
          }
        }
        if (self.isThrowing && (forceZeroVelocity || self.endX > maxX || self.endX < minX || self.endY > maxY || self.endY < minY)) {
          animate(vars.throwProps, forceZeroVelocity);
        }
      }
      return self;
    };
    this.update = function(applyBounds, sticky, ignoreExternalChanges) {
      var x = self.x, y = self.y;
      updateMatrix(!sticky);
      if (applyBounds) {
        self.applyBounds();
      } else {
        if (dirty && ignoreExternalChanges) {
          render(true);
        }
        syncXY(true);
      }
      if (sticky) {
        setPointerPosition(self.pointerX, self.pointerY);
        if (dirty) {
          render(true);
        }
      }
      if (self.isPressed && !sticky && (allowX && Math.abs(x - self.x) > 0.01 || allowY && (Math.abs(y - self.y) > 0.01 && !rotationMode))) {
        recordStartPositions();
      }
      if (self.autoScroll) {
        _recordMaxScrolls(target.parentNode);
        checkAutoScrollBounds = self.isDragging;
        render(true);
      }
      if (self.autoScroll) {
        _removeScrollListener(target, updateScroll);
        _addScrollListener(target, updateScroll);
      }
      return self;
    };
    this.enable = function(type2) {
      var id, i2, trigger;
      if (type2 !== "soft") {
        i2 = triggers.length;
        while (--i2 > -1) {
          trigger = triggers[i2];
          _addListener(trigger, "mousedown", onPress);
          _addListener(trigger, "touchstart", onPress);
          _addListener(trigger, "click", onClick, true);
          if (!rotationMode && vars.cursor !== false) {
            _setStyle(trigger, "cursor", vars.cursor || "move");
          }
          _setStyle(trigger, "touchCallout", "none");
          _setStyle(trigger, "touchAction", allowX === allowY ? "none" : allowX ? "pan-y" : "pan-x");
          if (_isSVG(trigger)) {
            _setStyle(trigger.ownerSVGElement || trigger, "touchAction", allowX === allowY ? "none" : allowX ? "pan-y" : "pan-x");
          }
          if (!this.vars.allowContextMenu) {
            _addListener(trigger, "contextmenu", onContextMenu);
          }
        }
        _setSelectable(triggers, false);
      }
      _addScrollListener(target, updateScroll);
      enabled = true;
      if (ThrowPropsPlugin && type2 !== "soft") {
        ThrowPropsPlugin.track(scrollProxy || target, xyMode ? "x,y" : rotationMode ? "rotation" : "top,left");
      }
      if (scrollProxy) {
        scrollProxy.enable();
      }
      target._gsDragID = id = "d" + _lookupCount++;
      _lookup[id] = this;
      if (scrollProxy) {
        scrollProxy.element._gsDragID = id;
      }
      TweenLite2.set(target, { x: "+=0", overwrite: false, data: "_draggable" });
      applyObj = {
        t: target,
        data: _isOldIE ? cssVars : target._gsTransform,
        tween: {},
        setRatio: _isOldIE ? function() {
          TweenLite2.set(target, tempVars);
        } : CSSPlugin._internals.setTransformRatio || CSSPlugin._internals.set3DTransformRatio
      };
      recordStartPositions();
      self.update(true);
      return self;
    };
    this.disable = function(type2) {
      var dragging = self.isDragging, i2, trigger;
      if (!rotationMode) {
        i2 = triggers.length;
        while (--i2 > -1) {
          _setStyle(triggers[i2], "cursor", null);
        }
      }
      if (type2 !== "soft") {
        i2 = triggers.length;
        while (--i2 > -1) {
          trigger = triggers[i2];
          _setStyle(trigger, "touchCallout", null);
          _setStyle(trigger, "touchAction", null);
          _removeListener(trigger, "mousedown", onPress);
          _removeListener(trigger, "touchstart", onPress);
          _removeListener(trigger, "click", onClick);
          _removeListener(trigger, "contextmenu", onContextMenu);
        }
        _setSelectable(triggers, true);
        if (touchEventTarget) {
          _removeListener(touchEventTarget, "touchcancel", onRelease);
          _removeListener(touchEventTarget, "touchend", onRelease);
          _removeListener(touchEventTarget, "touchmove", onMove);
        }
        _removeListener(_doc2, "mouseup", onRelease);
        _removeListener(_doc2, "mousemove", onMove);
      }
      _removeScrollListener(target, updateScroll);
      enabled = false;
      if (ThrowPropsPlugin && type2 !== "soft") {
        ThrowPropsPlugin.untrack(scrollProxy || target, xyMode ? "x,y" : rotationMode ? "rotation" : "top,left");
      }
      if (scrollProxy) {
        scrollProxy.disable();
      }
      _removeFromRenderQueue(render);
      self.isDragging = self.isPressed = isClicking = false;
      if (dragging) {
        _dispatchEvent(self, "dragend", "onDragEnd");
      }
      return self;
    };
    this.enabled = function(value, type2) {
      return arguments.length ? value ? self.enable(type2) : self.disable(type2) : enabled;
    };
    this.kill = function() {
      self.isThrowing = false;
      TweenLite2.killTweensOf(scrollProxy || target, true, killProps);
      self.disable();
      TweenLite2.set(triggers, { clearProps: "userSelect" });
      delete _lookup[target._gsDragID];
      return self;
    };
    if (type.indexOf("scroll") !== -1) {
      scrollProxy = this.scrollProxy = new ScrollProxy(target, _extend({ onKill: function() {
        if (self.isPressed) {
          onRelease(null);
        }
      } }, vars));
      target.style.overflowY = allowY && !_isTouchDevice ? "auto" : "hidden";
      target.style.overflowX = allowX && !_isTouchDevice ? "auto" : "hidden";
      target = scrollProxy.content;
    }
    if (vars.force3D !== false) {
      TweenLite2.set(target, { force3D: true });
    }
    if (rotationMode) {
      killProps.rotation = 1;
    } else {
      if (allowX) {
        killProps[xProp] = 1;
      }
      if (allowY) {
        killProps[yProp] = 1;
      }
    }
    if (rotationMode) {
      tempVars = _tempVarsRotation;
      cssVars = tempVars.css;
      tempVars.overwrite = false;
    } else if (xyMode) {
      tempVars = allowX && allowY ? _tempVarsXY : allowX ? _tempVarsX : _tempVarsY;
      cssVars = tempVars.css;
      tempVars.overwrite = false;
    }
    this.enable();
  }, p6 = Draggable2.prototype = new EventDispatcher();
  p6.constructor = Draggable2;
  p6.pointerX = p6.pointerY = p6.startX = p6.startY = p6.deltaX = p6.deltaY = 0;
  p6.isDragging = p6.isPressed = false;
  Draggable2.version = "0.17.1";
  Draggable2.zIndex = 1e3;
  _addListener(_doc2, "touchcancel", function() {
  });
  _addListener(_doc2, "contextmenu", function(e) {
    var p7;
    for (p7 in _lookup) {
      if (_lookup[p7].isPressed) {
        _lookup[p7].endDrag();
      }
    }
  });
  Draggable2.create = function(targets, vars) {
    if (typeof targets === "string") {
      targets = TweenLite2.selector(targets);
    }
    var a = !targets || targets.length === 0 ? [] : _isArrayLike(targets) ? _flattenArray(targets) : [targets], i2 = a.length;
    while (--i2 > -1) {
      a[i2] = new Draggable2(a[i2], vars);
    }
    return a;
  };
  Draggable2.get = function(target) {
    return _lookup[(_unwrapElement2(target) || {})._gsDragID];
  };
  Draggable2.timeSinceDrag = function() {
    return (_getTime() - _lastDragTime) / 1e3;
  };
  var _tempRect = {}, _oldIERect = function(e) {
    var top = 0, left = 0, width, height;
    e = _unwrapElement2(e);
    width = e.offsetWidth;
    height = e.offsetHeight;
    while (e) {
      top += e.offsetTop;
      left += e.offsetLeft;
      e = e.offsetParent;
    }
    return { top, left, width, height };
  }, _parseRect = function(e, undefined2) {
    if (e === window) {
      _tempRect.left = _tempRect.top = 0;
      _tempRect.width = _tempRect.right = _docElement.clientWidth || e.innerWidth || _doc2.body.clientWidth || 0;
      _tempRect.height = _tempRect.bottom = (e.innerHeight || 0) - 20 < _docElement.clientHeight ? _docElement.clientHeight : e.innerHeight || _doc2.body.clientHeight || 0;
      return _tempRect;
    }
    var r = e.pageX !== undefined2 ? { left: e.pageX - _getDocScrollLeft(), top: e.pageY - _getDocScrollTop(), right: e.pageX - _getDocScrollLeft() + 1, bottom: e.pageY - _getDocScrollTop() + 1 } : !e.nodeType && e.left !== undefined2 && e.top !== undefined2 ? e : _isOldIE ? _oldIERect(e) : _unwrapElement2(e).getBoundingClientRect();
    if (r.right === undefined2 && r.width !== undefined2) {
      r.right = r.left + r.width;
      r.bottom = r.top + r.height;
    } else if (r.width === undefined2) {
      r = { width: r.right - r.left, height: r.bottom - r.top, right: r.right, left: r.left, bottom: r.bottom, top: r.top };
    }
    return r;
  };
  Draggable2.hitTest = function(obj1, obj2, threshold) {
    if (obj1 === obj2) {
      return false;
    }
    var r1 = _parseRect(obj1), r2 = _parseRect(obj2), isOutside = r2.left > r1.right || r2.right < r1.left || r2.top > r1.bottom || r2.bottom < r1.top, overlap, area, isRatio;
    if (isOutside || !threshold) {
      return !isOutside;
    }
    isRatio = (threshold + "").indexOf("%") !== -1;
    threshold = parseFloat(threshold) || 0;
    overlap = { left: Math.max(r1.left, r2.left), top: Math.max(r1.top, r2.top) };
    overlap.width = Math.min(r1.right, r2.right) - overlap.left;
    overlap.height = Math.min(r1.bottom, r2.bottom) - overlap.top;
    if (overlap.width < 0 || overlap.height < 0) {
      return false;
    }
    if (isRatio) {
      threshold *= 0.01;
      area = overlap.width * overlap.height;
      return area >= r1.width * r1.height * threshold || area >= r2.width * r2.height * threshold;
    }
    return overlap.width > threshold && overlap.height > threshold;
  };
  _placeholderDiv.style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;";
  return Draggable2;
}, true);
var Draggable = globals.Draggable;
export {
  AttrPlugin,
  Back,
  BezierPlugin,
  Bounce,
  CSSPlugin,
  CSSRulePlugin,
  Circ,
  ColorPropsPlugin,
  DirectionalRotationPlugin,
  Draggable,
  Ease,
  EaselPlugin,
  Elastic,
  EndArrayPlugin,
  Expo,
  ExpoScaleEase,
  Linear,
  ModifiersPlugin,
  PixiPlugin,
  Power0,
  Power1,
  Power2,
  Power3,
  Power4,
  RoughEase,
  RoundPropsPlugin,
  ScrollToPlugin,
  Sine,
  SlowMo,
  SteppedEase,
  TextPlugin,
  TimelineLite,
  TimelineMax,
  TweenLite2 as TweenLite,
  TweenMax,
  _gsScope
};
/*! Bundled license information:

gsap/ColorPropsPlugin.js:
  (*!
   * VERSION: 1.5.3
   * DATE: 2018-05-30
   * UPDATES AND DOCS AT: http://greensock.com
   *
   * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
   * This work is subject to the terms at http://greensock.com/standard-license or for
   * Club GreenSock members, the software agreement that was issued with your membership.
   * 
   * @author: Jack Doyle, jack@greensock.com
   **)

gsap/CSSRulePlugin.js:
  (*!
   * VERSION: 0.6.8
   * DATE: 2019-02-22
   * UPDATES AND DOCS AT: http://greensock.com
   *
   * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
   * This work is subject to the terms at http://greensock.com/standard-license or for
   * Club GreenSock members, the software agreement that was issued with your membership.
   * 
   * @author: Jack Doyle, jack@greensock.com
   *)

gsap/EaselPlugin.js:
  (*!
   * VERSION: 0.2.2
   * DATE: 2018-05-30
   * UPDATES AND DOCS AT: http://greensock.com
   *
   * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
   * This work is subject to the terms at http://greensock.com/standard-license or for
   * Club GreenSock members, the software agreement that was issued with your membership.
   * 
   * @author: Jack Doyle, jack@greensock.com
   **)

gsap/EndArrayPlugin.js:
  (*!
   * VERSION: 0.1.3
   * DATE: 2018-08-27
   * UPDATES AND DOCS AT: http://greensock.com
   *
   * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
   * This work is subject to the terms at http://greensock.com/standard-license or for
   * Club GreenSock members, the software agreement that was issued with your membership.
   *
   * @author: Jack Doyle, jack@greensock.com
   *)

gsap/ModifiersPlugin.js:
  (*!
   * VERSION: 0.0.4
   * DATE: 2018-05-30
   * UPDATES AND DOCS AT: http://greensock.com
   *
   * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
   * This work is subject to the terms at http://greensock.com/standard-license or for
   * Club GreenSock members, the software agreement that was issued with your membership.
   * 
   * @author: Jack Doyle, jack@greensock.com
   *)

gsap/PixiPlugin.js:
  (*!
   * VERSION: 0.3.0
   * DATE: 2019-05-13
   * UPDATES AND DOCS AT: http://greensock.com
   *
   * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
   * PixiPlugin is subject to the terms at http://greensock.com/standard-license or for
   * Club GreenSock members, the software agreement that was issued with your membership.
   *
   * @author: Jack Doyle, jack@greensock.com
   *)

gsap/ScrollToPlugin.js:
  (*!
   * VERSION: 1.9.2
   * DATE: 2019-02-07
   * UPDATES AND DOCS AT: http://greensock.com
   *
   * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
   * This work is subject to the terms at http://greensock.com/standard-license or for
   * Club GreenSock members, the software agreement that was issued with your membership.
   * 
   * @author: Jack Doyle, jack@greensock.com
   **)

gsap/TextPlugin.js:
  (*!
   * VERSION: 0.6.2
   * DATE: 2018-05-30
   * UPDATES AND DOCS AT: http://greensock.com
   *
   * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
   * This work is subject to the terms at http://greensock.com/standard-license or for
   * Club GreenSock members, the software agreement that was issued with your membership.
   *
   * @author: Jack Doyle, jack@greensock.com
   *)

gsap/Draggable.js:
  (*!
   * VERSION: 0.17.1
   * DATE: 2019-02-28
   * UPDATES AND DOCS AT: http://greensock.com
   *
   * Requires TweenLite and CSSPlugin version 1.17.0 or later (TweenMax contains both TweenLite and CSSPlugin). ThrowPropsPlugin is required for momentum-based continuation of movement after the mouse/touch is released (ThrowPropsPlugin is a membership benefit of Club GreenSock - http://greensock.com/club/).
   *
   * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
   * This work is subject to the terms at http://greensock.com/standard-license or for
   * Club GreenSock members, the software agreement that was issued with your membership.
   *
   * @author: Jack Doyle, jack@greensock.com
   *)

gsap/all.js:
  (*!
   * VERSION: 2.1.3
   * DATE: 2019-05-17
   * UPDATES AND DOCS AT: http://greensock.com
   *
   * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
   * This work is subject to the terms at http://greensock.com/standard-license or for
   * Club GreenSock members, the software agreement that was issued with your membership.
   *
   * @author: Jack Doyle, jack@greensock.com
   **)
*/
//# sourceMappingURL=gsap_all.js.map
