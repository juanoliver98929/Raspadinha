import "./chunk-GEBOS5IE.js";
import {
  Teleport,
  computed,
  createBlock,
  createVNode,
  defineComponent,
  mergeProps,
  openBlock,
  reactive,
  ref,
  renderSlot,
  toRefs,
  watch
} from "./chunk-I23O6PSR.js";
import "./chunk-6NOISVLF.js";

// node_modules/vue-fullscreen/dist/index.es.js
var e = Object.defineProperty;
var t = Object.defineProperties;
var n = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty;
var l = Object.prototype.propertyIsEnumerable;
var i = (t2, n2, r2) => n2 in t2 ? e(t2, n2, { enumerable: true, configurable: true, writable: true, value: r2 }) : t2[n2] = r2;
var m = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
var w = function(e2) {
  return e2;
};
var j = function(e2, t2, n2) {
  switch (n2.length) {
    case 0:
      return e2.call(t2);
    case 1:
      return e2.call(t2, n2[0]);
    case 2:
      return e2.call(t2, n2[0], n2[1]);
    case 3:
      return e2.call(t2, n2[0], n2[1], n2[2]);
  }
  return e2.apply(t2, n2);
};
var F = Math.max;
var O = function(e2, t2, n2) {
  return t2 = F(void 0 === t2 ? e2.length - 1 : t2, 0), function() {
    for (var r2 = arguments, o2 = -1, l2 = F(r2.length - t2, 0), i2 = Array(l2); ++o2 < l2; )
      i2[o2] = r2[t2 + o2];
    o2 = -1;
    for (var c = Array(t2 + 1); ++o2 < t2; )
      c[o2] = r2[o2];
    return c[t2] = n2(i2), j(e2, this, c);
  };
};
var E = function(e2) {
  return function() {
    return e2;
  };
};
var x = "object" == typeof m && m && m.Object === Object && m;
var k = x;
var S = "object" == typeof self && self && self.Object === Object && self;
var P = k || S || Function("return this")();
var C = P.Symbol;
var A = C;
var _ = Object.prototype;
var q = _.hasOwnProperty;
var I = _.toString;
var B = A ? A.toStringTag : void 0;
var L = function(e2) {
  var t2 = q.call(e2, B), n2 = e2[B];
  try {
    e2[B] = void 0;
    var r2 = true;
  } catch (l2) {
  }
  var o2 = I.call(e2);
  return r2 && (t2 ? e2[B] = n2 : delete e2[B]), o2;
};
var T = Object.prototype.toString;
var $ = L;
var R = function(e2) {
  return T.call(e2);
};
var z = C ? C.toStringTag : void 0;
var M = function(e2) {
  return null == e2 ? void 0 === e2 ? "[object Undefined]" : "[object Null]" : z && z in Object(e2) ? $(e2) : R(e2);
};
var U = function(e2) {
  var t2 = typeof e2;
  return null != e2 && ("object" == t2 || "function" == t2);
};
var V = M;
var D = U;
var N;
var W = function(e2) {
  if (!D(e2))
    return false;
  var t2 = V(e2);
  return "[object Function]" == t2 || "[object GeneratorFunction]" == t2 || "[object AsyncFunction]" == t2 || "[object Proxy]" == t2;
};
var G = P["__core-js_shared__"];
var H = (N = /[^.]+$/.exec(G && G.keys && G.keys.IE_PROTO || "")) ? "Symbol(src)_1." + N : "";
var J = function(e2) {
  return !!H && H in e2;
};
var K = Function.prototype.toString;
var Q = W;
var X = J;
var Y = U;
var Z = function(e2) {
  if (null != e2) {
    try {
      return K.call(e2);
    } catch (t2) {
    }
    try {
      return e2 + "";
    } catch (t2) {
    }
  }
  return "";
};
var ee = /^\[object .+?Constructor\]$/;
var te = Function.prototype;
var ne = Object.prototype;
var re = te.toString;
var oe = ne.hasOwnProperty;
var le = RegExp("^" + re.call(oe).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
var ie = function(e2) {
  return !(!Y(e2) || X(e2)) && (Q(e2) ? le : ee).test(Z(e2));
};
var ce = function(e2, t2) {
  return null == e2 ? void 0 : e2[t2];
};
var se = function(e2, t2) {
  var n2 = ce(e2, t2);
  return ie(n2) ? n2 : void 0;
};
var ue = function() {
  try {
    var e2 = se(Object, "defineProperty");
    return e2({}, "", {}), e2;
  } catch (t2) {
  }
}();
var ae = E;
var fe = ue;
var pe = fe ? function(e2, t2) {
  return fe(e2, "toString", { configurable: true, enumerable: false, value: ae(t2), writable: true });
} : w;
var de = Date.now;
var be = function(e2) {
  var t2 = 0, n2 = 0;
  return function() {
    var r2 = de(), o2 = 16 - (r2 - n2);
    if (n2 = r2, o2 > 0) {
      if (++t2 >= 800)
        return arguments[0];
    } else
      t2 = 0;
    return e2.apply(void 0, arguments);
  };
}(pe);
var ye = w;
var he = O;
var ve = be;
var ge = function(e2, t2) {
  return ve(he(e2, t2, ye), e2 + "");
};
var me = function(e2, t2) {
  return e2 === t2 || e2 != e2 && t2 != t2;
};
var we = function(e2) {
  return "number" == typeof e2 && e2 > -1 && e2 % 1 == 0 && e2 <= 9007199254740991;
};
var je = W;
var Fe = we;
var Oe = function(e2) {
  return null != e2 && Fe(e2.length) && !je(e2);
};
var Ee = /^(?:0|[1-9]\d*)$/;
var xe = function(e2, t2) {
  var n2 = typeof e2;
  return !!(t2 = null == t2 ? 9007199254740991 : t2) && ("number" == n2 || "symbol" != n2 && Ee.test(e2)) && e2 > -1 && e2 % 1 == 0 && e2 < t2;
};
var ke = me;
var Se = Oe;
var Pe = xe;
var Ce = U;
var Ae = function(e2, t2, n2) {
  if (!Ce(n2))
    return false;
  var r2 = typeof t2;
  return !!("number" == r2 ? Se(n2) && Pe(t2, n2.length) : "string" == r2 && t2 in n2) && ke(n2[t2], e2);
};
var _e = function(e2, t2) {
  for (var n2 = -1, r2 = Array(e2); ++n2 < e2; )
    r2[n2] = t2(n2);
  return r2;
};
var qe = function(e2) {
  return null != e2 && "object" == typeof e2;
};
var Ie = M;
var Be = qe;
var Le;
var Te;
var $e;
var Re;
var ze;
var Me;
var Ue;
var Ve;
var De = function(e2) {
  return Be(e2) && "[object Arguments]" == Ie(e2);
};
var Ne = qe;
var We = Object.prototype;
var Ge = We.hasOwnProperty;
var He = We.propertyIsEnumerable;
var Je = De(function() {
  return arguments;
}()) ? De : function(e2) {
  return Ne(e2) && Ge.call(e2, "callee") && !He.call(e2, "callee");
};
var Ke = Array.isArray;
var Qe = { exports: {} };
Le = Qe, $e = P, Re = function() {
  return false;
}, ze = (Te = Qe.exports) && !Te.nodeType && Te, Me = ze && Le && !Le.nodeType && Le, Ue = Me && Me.exports === ze ? $e.Buffer : void 0, Ve = (Ue ? Ue.isBuffer : void 0) || Re, Le.exports = Ve;
var Xe = M;
var Ye = we;
var Ze = qe;
var et = {};
et["[object Float32Array]"] = et["[object Float64Array]"] = et["[object Int8Array]"] = et["[object Int16Array]"] = et["[object Int32Array]"] = et["[object Uint8Array]"] = et["[object Uint8ClampedArray]"] = et["[object Uint16Array]"] = et["[object Uint32Array]"] = true, et["[object Arguments]"] = et["[object Array]"] = et["[object ArrayBuffer]"] = et["[object Boolean]"] = et["[object DataView]"] = et["[object Date]"] = et["[object Error]"] = et["[object Function]"] = et["[object Map]"] = et["[object Number]"] = et["[object Object]"] = et["[object RegExp]"] = et["[object Set]"] = et["[object String]"] = et["[object WeakMap]"] = false;
var tt = function(e2) {
  return Ze(e2) && Ye(e2.length) && !!et[Xe(e2)];
};
var nt = function(e2) {
  return function(t2) {
    return e2(t2);
  };
};
var rt = { exports: {} };
!function(e2, t2) {
  var n2 = x, r2 = t2 && !t2.nodeType && t2, o2 = r2 && e2 && !e2.nodeType && e2, l2 = o2 && o2.exports === r2 && n2.process, i2 = function() {
    try {
      var e3 = o2 && o2.require && o2.require("util").types;
      return e3 || l2 && l2.binding && l2.binding("util");
    } catch (t3) {
    }
  }();
  e2.exports = i2;
}(rt, rt.exports);
var ot = tt;
var lt = nt;
var it = rt.exports;
var ct = it && it.isTypedArray;
var st = ct ? lt(ct) : ot;
var ut = _e;
var at = Je;
var ft = Ke;
var pt = Qe.exports;
var dt = xe;
var bt = st;
var yt = Object.prototype.hasOwnProperty;
var ht = function(e2, t2) {
  var n2 = ft(e2), r2 = !n2 && at(e2), o2 = !n2 && !r2 && pt(e2), l2 = !n2 && !r2 && !o2 && bt(e2), i2 = n2 || r2 || o2 || l2, c = i2 ? ut(e2.length, String) : [], s = c.length;
  for (var u in e2)
    !t2 && !yt.call(e2, u) || i2 && ("length" == u || o2 && ("offset" == u || "parent" == u) || l2 && ("buffer" == u || "byteLength" == u || "byteOffset" == u) || dt(u, s)) || c.push(u);
  return c;
};
var vt = Object.prototype;
var gt = U;
var mt = function(e2) {
  var t2 = e2 && e2.constructor;
  return e2 === ("function" == typeof t2 && t2.prototype || vt);
};
var wt = function(e2) {
  var t2 = [];
  if (null != e2)
    for (var n2 in Object(e2))
      t2.push(n2);
  return t2;
};
var jt = Object.prototype.hasOwnProperty;
var Ft = ht;
var Ot = function(e2) {
  if (!gt(e2))
    return wt(e2);
  var t2 = mt(e2), n2 = [];
  for (var r2 in e2)
    ("constructor" != r2 || !t2 && jt.call(e2, r2)) && n2.push(r2);
  return n2;
};
var Et = Oe;
var xt = ge;
var kt = me;
var St = Ae;
var Pt = function(e2) {
  return Et(e2) ? Ft(e2, true) : Ot(e2);
};
var Ct = Object.prototype;
var At = Ct.hasOwnProperty;
var _t = xt(function(e2, t2) {
  e2 = Object(e2);
  var n2 = -1, r2 = t2.length, o2 = r2 > 2 ? t2[2] : void 0;
  for (o2 && St(t2[0], t2[1], o2) && (r2 = 1); ++n2 < r2; )
    for (var l2 = t2[n2], i2 = Pt(l2), c = -1, s = i2.length; ++c < s; ) {
      var u = i2[c], a = e2[u];
      (void 0 === a || kt(a, Ct[u]) && !At.call(e2, u)) && (e2[u] = l2[u]);
    }
  return e2;
});
var qt = { exports: {} };
!function(e2) {
  var t2, n2, r2, o2, l2;
  t2 = "undefined" != typeof window && void 0 !== window.document ? window.document : {}, n2 = e2.exports, r2 = function() {
    for (var e3, n3 = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], r3 = 0, o3 = n3.length, l3 = {}; r3 < o3; r3++)
      if ((e3 = n3[r3]) && e3[1] in t2) {
        for (r3 = 0; r3 < e3.length; r3++)
          l3[n3[0][r3]] = e3[r3];
        return l3;
      }
    return false;
  }(), o2 = { change: r2.fullscreenchange, error: r2.fullscreenerror }, l2 = { request: function(e3, n3) {
    return new Promise((function(o3, l3) {
      var i2 = (function() {
        this.off("change", i2), o3();
      }).bind(this);
      this.on("change", i2);
      var c = (e3 = e3 || t2.documentElement)[r2.requestFullscreen](n3);
      c instanceof Promise && c.then(i2).catch(l3);
    }).bind(this));
  }, exit: function() {
    return new Promise((function(e3, n3) {
      if (this.isFullscreen) {
        var o3 = (function() {
          this.off("change", o3), e3();
        }).bind(this);
        this.on("change", o3);
        var l3 = t2[r2.exitFullscreen]();
        l3 instanceof Promise && l3.then(o3).catch(n3);
      } else
        e3();
    }).bind(this));
  }, toggle: function(e3, t3) {
    return this.isFullscreen ? this.exit() : this.request(e3, t3);
  }, onchange: function(e3) {
    this.on("change", e3);
  }, onerror: function(e3) {
    this.on("error", e3);
  }, on: function(e3, n3) {
    var r3 = o2[e3];
    r3 && t2.addEventListener(r3, n3, false);
  }, off: function(e3, n3) {
    var r3 = o2[e3];
    r3 && t2.removeEventListener(r3, n3, false);
  }, raw: r2 }, r2 ? (Object.defineProperties(l2, { isFullscreen: { get: function() {
    return Boolean(t2[r2.fullscreenElement]);
  } }, element: { enumerable: true, get: function() {
    return t2[r2.fullscreenElement];
  } }, isEnabled: { enumerable: true, get: function() {
    return Boolean(t2[r2.fullscreenEnabled]);
  } } }), n2 ? e2.exports = l2 : window.screenfull = l2) : n2 ? e2.exports = { isEnabled: false } : window.screenfull = { isEnabled: false };
}(qt);
var It = qt.exports;
var Bt = It;
var Lt = defineComponent({ props: { modelValue: { type: Boolean, default: false }, fullscreen: { type: Boolean, default: false }, exitOnClickWrapper: { type: Boolean, default: true }, fullscreenClass: { type: String, default: "fullscreen" }, pageOnly: { type: Boolean, default: false }, teleport: { type: Boolean, default: false } }, emits: ["change", "update:modelValue", "update:fullscreen"], setup(e2, { emit: c }) {
  const d = ref(), b = reactive({ isFullscreen: false, isEnabled: Bt.isEnabled }), y = computed(() => e2.pageOnly || !Bt.isEnabled), h = computed(() => (y.value || e2.teleport) && b.isFullscreen ? { position: "fixed", left: "0", top: "0", width: "100%", height: "100%" } : void 0);
  function v() {
    c("change", b.isFullscreen), c("update:modelValue", b.isFullscreen), c("update:fullscreen", b.isFullscreen);
  }
  function g() {
    Bt.isFullscreen || Bt.off("change", g), b.isFullscreen = Bt.isFullscreen, v();
  }
  function m2(e3) {
    "Escape" === e3.key && j2();
  }
  function w2() {
    y.value ? (b.isFullscreen = true, v(), document.removeEventListener("keyup", m2), document.addEventListener("keyup", m2)) : (Bt.off("change", g), Bt.on("change", g), Bt.request(e2.teleport ? document.body : d.value));
  }
  function j2() {
    b.isFullscreen && (y.value ? (b.isFullscreen = false, v(), document.removeEventListener("keyup", m2)) : Bt.exit());
  }
  return watch(() => e2.fullscreen, (e3) => {
    e3 !== b.isFullscreen && (e3 ? w2() : j2());
  }), watch(() => e2.modelValue, (e3) => {
    e3 !== b.isFullscreen && (e3 ? w2() : j2());
  }), F2 = ((e3, t2) => {
    for (var n2 in t2 || (t2 = {}))
      o.call(t2, n2) && i(e3, n2, t2[n2]);
    if (r)
      for (var n2 of r(t2))
        l.call(t2, n2) && i(e3, n2, t2[n2]);
    return e3;
  })({ wrapper: d, wrapperStyle: h }, toRefs(b)), t(F2, n({ toggle: function(e3) {
    void 0 === e3 ? b.isFullscreen ? j2() : w2() : e3 ? w2() : j2();
  }, request: w2, exit: j2, shadeClick: function(t2) {
    t2.target === d.value && e2.exitOnClickWrapper && j2();
  } }));
  var F2;
} });
Lt.render = function(e2, t2, n2, r2, o2, l2) {
  return openBlock(), createBlock(Teleport, { to: "body", disabled: !e2.teleport || !e2.fullscreen }, [createVNode("div", mergeProps({ ref: "wrapper" }, e2.$attrs, { style: e2.wrapperStyle, class: { [e2.fullscreenClass]: e2.isFullscreen }, onClick: t2[1] || (t2[1] = (t3) => e2.shadeClick(t3)) }), [renderSlot(e2.$slots, "default")], 16)], 8, ["disabled"]);
};
var Tt = "undefined" != typeof window && null !== window;
!function() {
  if (Tt && "IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype)
    return "isIntersecting" in window.IntersectionObserverEntry.prototype || Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", { get() {
      return this.intersectionRatio > 0;
    } }), true;
}();
var $t = Object.prototype.propertyIsEnumerable;
var Rt = Object.getOwnPropertySymbols;
function zt(e2) {
  return "function" == typeof e2 || "[object Object]" === toString.call(e2);
}
function Mt(e2) {
  return "__proto__" !== e2 && "constructor" !== e2 && "prototype" !== e2;
}
function Ut(e2, ...t2) {
  if (!zt(e2))
    throw new TypeError("expected the first argument to be an object");
  if (0 === t2.length || "function" != typeof Symbol || "function" != typeof Rt)
    return e2;
  for (const n2 of t2) {
    const t3 = Rt(n2);
    for (const r2 of t3)
      $t.call(n2, r2) && (e2[r2] = n2[r2]);
  }
  return e2;
}
function Vt(e2, ...t2) {
  let n2 = 0;
  var r2;
  for (("object" == typeof (r2 = e2) ? null === r2 : "function" != typeof r2) && (e2 = t2[n2++]), e2 || (e2 = {}); n2 < t2.length; n2++)
    if (zt(t2[n2])) {
      for (const r3 of Object.keys(t2[n2]))
        Mt(r3) && (zt(e2[r3]) && zt(t2[n2][r3]) ? Vt(e2[r3], t2[n2][r3]) : e2[r3] = t2[n2][r3]);
      Ut(e2, t2[n2]);
    }
  return e2;
}
var Dt = It;
var Nt = class {
  constructor(e2) {
    this.fullscreenClass = "fullscreen", this.teleport = false, this.pageOnly = false, e2 && Vt(this, e2);
  }
};
var Wt;
var Gt;
function Ht(e2, t2) {
  e2.style.position = t2.position, e2.style.left = t2.left, e2.style.top = t2.top, e2.style.width = t2.width, e2.style.height = t2.height;
}
function Jt(e2) {
  const t2 = e2.element;
  t2 && (t2.classList.remove(e2.options.fullscreenClass), (e2.options.teleport || e2.options.pageOnly) && (e2.options.teleport && Gt && (Gt.insertBefore(t2, Wt), Gt.removeChild(Wt)), t2.__styleCache && Ht(t2, t2.__styleCache)));
}
var Kt = { options: new Nt(), element: null, isFullscreen: false, isEnabled: Dt.isEnabled, toggle(e2, t2, n2) {
  return void 0 === n2 ? this.isFullscreen ? this.exit() : this.request(e2, t2) : n2 ? this.request(e2, t2) : this.exit();
}, request(e2, t2) {
  if (this.isFullscreen)
    return Promise.resolve();
  if (e2 || (e2 = document.body), this.options = new Nt(t2), e2 === document.body && (this.options.teleport = false), Dt.isEnabled || (this.options.pageOnly = true), e2.classList.add(this.options.fullscreenClass), this.options.teleport || this.options.pageOnly) {
    const { position: t3, left: n2, top: r2, width: o2, height: l2 } = e2.style;
    e2.__styleCache = { position: t3, left: n2, top: r2, width: o2, height: l2 }, Ht(e2, { position: "fixed", left: "0", top: "0", width: "100%", height: "100%" });
  }
  if (this.options.teleport && (Gt = e2.parentNode, Gt && (Wt = document.createComment("fullscreen-token"), Gt.insertBefore(Wt, e2), document.body.appendChild(e2))), this.options.pageOnly) {
    const t3 = (e3) => {
      "Escape" === e3.key && (document.removeEventListener("keyup", t3), this.exit());
    };
    return this.isFullscreen = true, this.element = e2, document.removeEventListener("keyup", t3), document.addEventListener("keyup", t3), this.options.callback && this.options.callback(this.isFullscreen), Promise.resolve();
  }
  {
    const t3 = () => {
      Dt.isFullscreen || (Dt.off("change", t3), Jt(this)), this.isFullscreen = Dt.isFullscreen, this.options.teleport ? this.element = e2 || null : this.element = Dt.element, this.options.callback && this.options.callback(Dt.isFullscreen);
    };
    return Dt.on("change", t3), Dt.request(this.options.teleport ? document.body : e2);
  }
}, exit() {
  return this.isFullscreen ? this.options.pageOnly ? (Jt(this), this.isFullscreen = false, this.element = null, this.options.callback && this.options.callback(this.isFullscreen), Promise.resolve()) : Dt.exit() : Promise.resolve();
} };
var Qt = (e2, t2, n2) => {
  const i2 = () => {
    let e3;
    const n3 = { teleport: t2.modifiers.teleport, pageOnly: t2.modifiers.pageOnly };
    if (t2.value)
      if ("string" == typeof t2.value)
        e3 = t2.value;
      else {
        const i3 = t2.value, { target: c } = i3, s = ((e4, t3) => {
          var n4 = {};
          for (var i4 in e4)
            o.call(e4, i4) && t3.indexOf(i4) < 0 && (n4[i4] = e4[i4]);
          if (null != e4 && r)
            for (var i4 of r(e4))
              t3.indexOf(i4) < 0 && l.call(e4, i4) && (n4[i4] = e4[i4]);
          return n4;
        })(i3, ["target"]);
        e3 = c, Vt(n3, s);
      }
    "string" == typeof e3 && (e3 = document.querySelector(e3)), Kt.toggle(e3, n3);
  };
  e2._onClickFullScreen && e2.removeEventListener("click", e2._onClickFullScreen), e2.addEventListener("click", i2), e2._onClickFullScreen = i2;
};
var Xt = { install(e2, { name: t2 = "fullscreen" } = {}) {
  e2.config.globalProperties[`$${t2}`] = Kt, e2.component(t2, _t(Lt, { name: t2 })), e2.directive(t2, Qt);
} };
var index_es_default = Xt;
export {
  Kt as api,
  Lt as component,
  index_es_default as default,
  Qt as directive,
  It as screenfull
};
/*! Bundled license information:

vue-fullscreen/dist/index.es.js:
  (*!
   * vue-fullscreen v3.1.1
   * https://github.com/mirari/vue-fullscreen#readme
   *
   * Copyright 2021 mirari
   * Released under the MIT license
   *
   * Date: 2021-11-16T11:04:32.608Z
   *)
  (*!
  * screenfull
  * v5.1.0 - 2020-12-24
  * (c) Sindre Sorhus; MIT License
  *)
*/
//# sourceMappingURL=vue-fullscreen.js.map
