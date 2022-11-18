const X = () => ({
  currentVideo: !1,
  videoType: null,
  init() {
    Alpine.effect(() => {
      const r = this.$store.videoModal.currentVideo;
      r ? r.includes("youtu") ? this.videoType = "youtube" : r.includes("vimeo") && (this.videoType = "vimeo") : this.videoType = null, this.currentVideo = this.$store.videoModal.currentVideo;
    });
  },
  close() {
    this.$store.videoModal.close();
  }
}), G = (r) => ({
  player: null,
  videoId: null,
  init() {
    this.videoId = this.getVideoId(r), window.onYouTubeIframeAPIReady ? this.initPlayer() : this.createPlayer();
  },
  createPlayer() {
    const e = document.createElement("script");
    e.src = "https://www.youtube.com/iframe_api";
    const t = document.getElementsByTagName("script")[0];
    t.parentNode.insertBefore(e, t), window.onYouTubeIframeAPIReady = () => {
      this.initPlayer();
    };
  },
  initPlayer() {
    if (window.YT === void 0 || !window.YT) {
      window.onYouTubeIframeAPIReady = null, this.createPlayer();
      return;
    }
    this.player = new window.YT.Player("videoModalYoutube", {
      height: 1080,
      width: 1920,
      videoId: this.videoId,
      playerVars: {
        playsinline: 1
      },
      events: {
        onReady: this.onPlayerReady
      }
    });
  },
  getVideoId(e) {
    const t = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/, n = e.match(t);
    return n && n[7].length == 11 ? n[7] : !1;
  },
  onPlayerReady(e) {
    e.target.playVideo();
  },
  stopVideo() {
    this.player.stopVideo();
  }
});
/*! @vimeo/player v2.18.0 | (c) 2022 Vimeo | MIT License | https://github.com/vimeo/player.js */
function K(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function W(r, e) {
  for (var t = 0; t < e.length; t++) {
    var n = e[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, n.key, n);
  }
}
function Z(r, e, t) {
  return e && W(r.prototype, e), t && W(r, t), r;
}
var z = typeof global < "u" && {}.toString.call(global) === "[object global]";
function $(r, e) {
  return r.indexOf(e.toLowerCase()) === 0 ? r : "".concat(e.toLowerCase()).concat(r.substr(0, 1).toUpperCase()).concat(r.substr(1));
}
function ee(r) {
  return Boolean(r && r.nodeType === 1 && "nodeName" in r && r.ownerDocument && r.ownerDocument.defaultView);
}
function te(r) {
  return !isNaN(parseFloat(r)) && isFinite(r) && Math.floor(r) == r;
}
function C(r) {
  return /^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(r);
}
function Y(r) {
  var e = /^https:\/\/player\.vimeo\.com\/video\/\d+/;
  return e.test(r);
}
function Q() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = r.id, t = r.url, n = e || t;
  if (!n)
    throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");
  if (te(n))
    return "https://vimeo.com/".concat(n);
  if (C(n))
    return n.replace("http:", "https:");
  throw e ? new TypeError("\u201C".concat(e, "\u201D is not a valid video id.")) : new TypeError("\u201C".concat(n, "\u201D is not a vimeo.com url."));
}
var ne = typeof Array.prototype.indexOf < "u", re = typeof window < "u" && typeof window.postMessage < "u";
if (!z && (!ne || !re))
  throw new Error("Sorry, the Vimeo Player API is not available in this browser.");
var x = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ie(r, e) {
  return e = { exports: {} }, r(e, e.exports), e.exports;
}
/*!
 * weakmap-polyfill v2.0.4 - ECMAScript6 WeakMap polyfill
 * https://github.com/polygonplanet/weakmap-polyfill
 * Copyright (c) 2015-2021 polygonplanet <polygon.planet.aqua@gmail.com>
 * @license MIT
 */
(function(r) {
  if (r.WeakMap)
    return;
  var e = Object.prototype.hasOwnProperty, t = Object.defineProperty && function() {
    try {
      return Object.defineProperty({}, "x", {
        value: 1
      }).x === 1;
    } catch {
    }
  }(), n = function(o, u, l) {
    t ? Object.defineProperty(o, u, {
      configurable: !0,
      writable: !0,
      value: l
    }) : o[u] = l;
  };
  r.WeakMap = function() {
    function o() {
      if (this === void 0)
        throw new TypeError("Constructor WeakMap requires 'new'");
      if (n(this, "_id", l("_WeakMap")), arguments.length > 0)
        throw new TypeError("WeakMap iterable is not supported");
    }
    n(o.prototype, "delete", function(c) {
      if (u(this, "delete"), !i(c))
        return !1;
      var p = c[this._id];
      return p && p[0] === c ? (delete c[this._id], !0) : !1;
    }), n(o.prototype, "get", function(c) {
      if (u(this, "get"), !!i(c)) {
        var p = c[this._id];
        if (p && p[0] === c)
          return p[1];
      }
    }), n(o.prototype, "has", function(c) {
      if (u(this, "has"), !i(c))
        return !1;
      var p = c[this._id];
      return !!(p && p[0] === c);
    }), n(o.prototype, "set", function(c, p) {
      if (u(this, "set"), !i(c))
        throw new TypeError("Invalid value used as weak map key");
      var w = c[this._id];
      return w && w[0] === c ? (w[1] = p, this) : (n(c, this._id, [c, p]), this);
    });
    function u(c, p) {
      if (!i(c) || !e.call(c, "_id"))
        throw new TypeError(p + " method called on incompatible receiver " + typeof c);
    }
    function l(c) {
      return c + "_" + g() + "." + g();
    }
    function g() {
      return Math.random().toString().substring(2);
    }
    return n(o, "_polyfill", !0), o;
  }();
  function i(o) {
    return Object(o) === o;
  }
})(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : x);
var M = ie(function(r) {
  /*! Native Promise Only
      v0.8.1 (c) Kyle Simpson
      MIT License: http://getify.mit-license.org
  */
  (function(t, n, i) {
    n[t] = n[t] || i(), r.exports && (r.exports = n[t]);
  })("Promise", x, function() {
    var t, n, i, o = Object.prototype.toString, u = typeof setImmediate < "u" ? function(a) {
      return setImmediate(a);
    } : setTimeout;
    try {
      Object.defineProperty({}, "x", {}), t = function(a, s, d, h) {
        return Object.defineProperty(a, s, {
          value: d,
          writable: !0,
          configurable: h !== !1
        });
      };
    } catch {
      t = function(s, d, h) {
        return s[d] = h, s;
      };
    }
    i = function() {
      var a, s, d;
      function h(m, y) {
        this.fn = m, this.self = y, this.next = void 0;
      }
      return {
        add: function(y, k) {
          d = new h(y, k), s ? s.next = d : a = d, s = d, d = void 0;
        },
        drain: function() {
          var y = a;
          for (a = s = n = void 0; y; )
            y.fn.call(y.self), y = y.next;
        }
      };
    }();
    function l(f, a) {
      i.add(f, a), n || (n = u(i.drain));
    }
    function g(f) {
      var a, s = typeof f;
      return f != null && (s == "object" || s == "function") && (a = f.then), typeof a == "function" ? a : !1;
    }
    function c() {
      for (var f = 0; f < this.chain.length; f++)
        p(this, this.state === 1 ? this.chain[f].success : this.chain[f].failure, this.chain[f]);
      this.chain.length = 0;
    }
    function p(f, a, s) {
      var d, h;
      try {
        a === !1 ? s.reject(f.msg) : (a === !0 ? d = f.msg : d = a.call(void 0, f.msg), d === s.promise ? s.reject(TypeError("Promise-chain cycle")) : (h = g(d)) ? h.call(d, s.resolve, s.reject) : s.resolve(d));
      } catch (m) {
        s.reject(m);
      }
    }
    function w(f) {
      var a, s = this;
      if (!s.triggered) {
        s.triggered = !0, s.def && (s = s.def);
        try {
          (a = g(f)) ? l(function() {
            var d = new N(s);
            try {
              a.call(f, function() {
                w.apply(d, arguments);
              }, function() {
                v.apply(d, arguments);
              });
            } catch (h) {
              v.call(d, h);
            }
          }) : (s.msg = f, s.state = 1, s.chain.length > 0 && l(c, s));
        } catch (d) {
          v.call(new N(s), d);
        }
      }
    }
    function v(f) {
      var a = this;
      a.triggered || (a.triggered = !0, a.def && (a = a.def), a.msg = f, a.state = 2, a.chain.length > 0 && l(c, a));
    }
    function _(f, a, s, d) {
      for (var h = 0; h < a.length; h++)
        (function(y) {
          f.resolve(a[y]).then(function(T) {
            s(y, T);
          }, d);
        })(h);
    }
    function N(f) {
      this.def = f, this.triggered = !1;
    }
    function A(f) {
      this.promise = f, this.state = 0, this.triggered = !1, this.chain = [], this.msg = void 0;
    }
    function E(f) {
      if (typeof f != "function")
        throw TypeError("Not a function");
      if (this.__NPO__ !== 0)
        throw TypeError("Not a promise");
      this.__NPO__ = 1;
      var a = new A(this);
      this.then = function(d, h) {
        var m = {
          success: typeof d == "function" ? d : !0,
          failure: typeof h == "function" ? h : !1
        };
        return m.promise = new this.constructor(function(k, T) {
          if (typeof k != "function" || typeof T != "function")
            throw TypeError("Not a function");
          m.resolve = k, m.reject = T;
        }), a.chain.push(m), a.state !== 0 && l(c, a), m.promise;
      }, this.catch = function(d) {
        return this.then(void 0, d);
      };
      try {
        f.call(void 0, function(d) {
          w.call(a, d);
        }, function(d) {
          v.call(a, d);
        });
      } catch (s) {
        v.call(a, s);
      }
    }
    var S = t(
      {},
      "constructor",
      E,
      !1
    );
    return E.prototype = S, t(
      S,
      "__NPO__",
      0,
      !1
    ), t(E, "resolve", function(a) {
      var s = this;
      return a && typeof a == "object" && a.__NPO__ === 1 ? a : new s(function(h, m) {
        if (typeof h != "function" || typeof m != "function")
          throw TypeError("Not a function");
        h(a);
      });
    }), t(E, "reject", function(a) {
      return new this(function(d, h) {
        if (typeof d != "function" || typeof h != "function")
          throw TypeError("Not a function");
        h(a);
      });
    }), t(E, "all", function(a) {
      var s = this;
      return o.call(a) != "[object Array]" ? s.reject(TypeError("Not an array")) : a.length === 0 ? s.resolve([]) : new s(function(h, m) {
        if (typeof h != "function" || typeof m != "function")
          throw TypeError("Not a function");
        var y = a.length, k = Array(y), T = 0;
        _(s, a, function(H, J) {
          k[H] = J, ++T === y && h(k);
        }, m);
      });
    }), t(E, "race", function(a) {
      var s = this;
      return o.call(a) != "[object Array]" ? s.reject(TypeError("Not an array")) : new s(function(h, m) {
        if (typeof h != "function" || typeof m != "function")
          throw TypeError("Not a function");
        _(s, a, function(k, T) {
          h(T);
        }, m);
      });
    }), E;
  });
}), P = /* @__PURE__ */ new WeakMap();
function F(r, e, t) {
  var n = P.get(r.element) || {};
  e in n || (n[e] = []), n[e].push(t), P.set(r.element, n);
}
function R(r, e) {
  var t = P.get(r.element) || {};
  return t[e] || [];
}
function q(r, e, t) {
  var n = P.get(r.element) || {};
  if (!n[e])
    return !0;
  if (!t)
    return n[e] = [], P.set(r.element, n), !0;
  var i = n[e].indexOf(t);
  return i !== -1 && n[e].splice(i, 1), P.set(r.element, n), n[e] && n[e].length === 0;
}
function oe(r, e) {
  var t = R(r, e);
  if (t.length < 1)
    return !1;
  var n = t.shift();
  return q(r, e, n), n;
}
function ae(r, e) {
  var t = P.get(r);
  P.set(e, t), P.delete(r);
}
function O(r) {
  if (typeof r == "string")
    try {
      r = JSON.parse(r);
    } catch (e) {
      return console.warn(e), {};
    }
  return r;
}
function I(r, e, t) {
  if (!(!r.element.contentWindow || !r.element.contentWindow.postMessage)) {
    var n = {
      method: e
    };
    t !== void 0 && (n.value = t);
    var i = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1"));
    i >= 8 && i < 10 && (n = JSON.stringify(n)), r.element.contentWindow.postMessage(n, r.origin);
  }
}
function ue(r, e) {
  e = O(e);
  var t = [], n;
  if (e.event) {
    if (e.event === "error") {
      var i = R(r, e.data.method);
      i.forEach(function(u) {
        var l = new Error(e.data.message);
        l.name = e.data.name, u.reject(l), q(r, e.data.method, u);
      });
    }
    t = R(r, "event:".concat(e.event)), n = e.data;
  } else if (e.method) {
    var o = oe(r, e.method);
    o && (t.push(o), n = e.value);
  }
  t.forEach(function(u) {
    try {
      if (typeof u == "function") {
        u.call(r, n);
        return;
      }
      u.resolve(n);
    } catch {
    }
  });
}
var se = ["autopause", "autoplay", "background", "byline", "color", "controls", "dnt", "height", "id", "interactive_params", "keyboard", "loop", "maxheight", "maxwidth", "muted", "playsinline", "portrait", "responsive", "speed", "texttrack", "title", "transparent", "url", "width"];
function U(r) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return se.reduce(function(t, n) {
    var i = r.getAttribute("data-vimeo-".concat(n));
    return (i || i === "") && (t[n] = i === "" ? 1 : i), t;
  }, e);
}
function D(r, e) {
  var t = r.html;
  if (!e)
    throw new TypeError("An element must be provided");
  if (e.getAttribute("data-vimeo-initialized") !== null)
    return e.querySelector("iframe");
  var n = document.createElement("div");
  return n.innerHTML = t, e.appendChild(n.firstChild), e.setAttribute("data-vimeo-initialized", "true"), e.querySelector("iframe");
}
function B(r) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = arguments.length > 2 ? arguments[2] : void 0;
  return new Promise(function(n, i) {
    if (!C(r))
      throw new TypeError("\u201C".concat(r, "\u201D is not a vimeo.com url."));
    var o = "https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(r));
    for (var u in e)
      e.hasOwnProperty(u) && (o += "&".concat(u, "=").concat(encodeURIComponent(e[u])));
    var l = "XDomainRequest" in window ? new XDomainRequest() : new XMLHttpRequest();
    l.open("GET", o, !0), l.onload = function() {
      if (l.status === 404) {
        i(new Error("\u201C".concat(r, "\u201D was not found.")));
        return;
      }
      if (l.status === 403) {
        i(new Error("\u201C".concat(r, "\u201D is not embeddable.")));
        return;
      }
      try {
        var g = JSON.parse(l.responseText);
        if (g.domain_status_code === 403) {
          D(g, t), i(new Error("\u201C".concat(r, "\u201D is not embeddable.")));
          return;
        }
        n(g);
      } catch (c) {
        i(c);
      }
    }, l.onerror = function() {
      var g = l.status ? " (".concat(l.status, ")") : "";
      i(new Error("There was an error fetching the embed code from Vimeo".concat(g, ".")));
    }, l.send();
  });
}
function le() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document, e = [].slice.call(r.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")), t = function(i) {
    "console" in window && console.error && console.error("There was an error creating an embed: ".concat(i));
  };
  e.forEach(function(n) {
    try {
      if (n.getAttribute("data-vimeo-defer") !== null)
        return;
      var i = U(n), o = Q(i);
      B(o, i, n).then(function(u) {
        return D(u, n);
      }).catch(t);
    } catch (u) {
      t(u);
    }
  });
}
function ce() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
  if (!window.VimeoPlayerResizeEmbeds_) {
    window.VimeoPlayerResizeEmbeds_ = !0;
    var e = function(n) {
      if (!!C(n.origin) && !(!n.data || n.data.event !== "spacechange")) {
        for (var i = r.querySelectorAll("iframe"), o = 0; o < i.length; o++)
          if (i[o].contentWindow === n.source) {
            var u = i[o].parentElement;
            u.style.paddingBottom = "".concat(n.data.data[0].bottom, "px");
            break;
          }
      }
    };
    window.addEventListener("message", e);
  }
}
function fe() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
  if (!window.VimeoSeoMetadataAppended) {
    window.VimeoSeoMetadataAppended = !0;
    var e = function(n) {
      if (!!C(n.origin)) {
        var i = O(n.data);
        if (!(!i || i.event !== "ready"))
          for (var o = r.querySelectorAll("iframe"), u = 0; u < o.length; u++) {
            var l = o[u], g = l.contentWindow === n.source;
            if (Y(l.src) && g) {
              var c = new L(l);
              c.callMethod("appendVideoMetadata", window.location.href);
            }
          }
      }
    };
    window.addEventListener("message", e);
  }
}
function de() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
  if (!window.VimeoCheckedUrlTimeParam) {
    window.VimeoCheckedUrlTimeParam = !0;
    var e = function(i) {
      "console" in window && console.error && console.error("There was an error getting video Id: ".concat(i));
    }, t = function(i) {
      if (!!C(i.origin)) {
        var o = O(i.data);
        if (!(!o || o.event !== "ready"))
          for (var u = r.querySelectorAll("iframe"), l = 0; l < u.length; l++) {
            var g = u[l], c = g.contentWindow === i.source;
            Y(g.src) && c && function() {
              var p = new L(g);
              p.getVideoId().then(function(w) {
                var v = new RegExp("[?&]vimeo_t_".concat(w, "=([^&#]*)")).exec(window.location.href);
                if (v && v[1]) {
                  var _ = decodeURI(v[1]);
                  p.setCurrentTime(_);
                }
              }).catch(e);
            }();
          }
      }
    };
    window.addEventListener("message", t);
  }
}
function he() {
  var r = function() {
    for (var n, i = [
      ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
      ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
      ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
      ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
      ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
    ], o = 0, u = i.length, l = {}; o < u; o++)
      if (n = i[o], n && n[1] in document) {
        for (o = 0; o < n.length; o++)
          l[i[0][o]] = n[o];
        return l;
      }
    return !1;
  }(), e = {
    fullscreenchange: r.fullscreenchange,
    fullscreenerror: r.fullscreenerror
  }, t = {
    request: function(i) {
      return new Promise(function(o, u) {
        var l = function c() {
          t.off("fullscreenchange", c), o();
        };
        t.on("fullscreenchange", l), i = i || document.documentElement;
        var g = i[r.requestFullscreen]();
        g instanceof Promise && g.then(l).catch(u);
      });
    },
    exit: function() {
      return new Promise(function(i, o) {
        if (!t.isFullscreen) {
          i();
          return;
        }
        var u = function g() {
          t.off("fullscreenchange", g), i();
        };
        t.on("fullscreenchange", u);
        var l = document[r.exitFullscreen]();
        l instanceof Promise && l.then(u).catch(o);
      });
    },
    on: function(i, o) {
      var u = e[i];
      u && document.addEventListener(u, o);
    },
    off: function(i, o) {
      var u = e[i];
      u && document.removeEventListener(u, o);
    }
  };
  return Object.defineProperties(t, {
    isFullscreen: {
      get: function() {
        return Boolean(document[r.fullscreenElement]);
      }
    },
    element: {
      enumerable: !0,
      get: function() {
        return document[r.fullscreenElement];
      }
    },
    isEnabled: {
      enumerable: !0,
      get: function() {
        return Boolean(document[r.fullscreenEnabled]);
      }
    }
  }), t;
}
var V = /* @__PURE__ */ new WeakMap(), j = /* @__PURE__ */ new WeakMap(), b = {}, L = /* @__PURE__ */ function() {
  function r(e) {
    var t = this, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (K(this, r), window.jQuery && e instanceof jQuery && (e.length > 1 && window.console && console.warn && console.warn("A jQuery object with multiple elements was passed, using the first element."), e = e[0]), typeof document < "u" && typeof e == "string" && (e = document.getElementById(e)), !ee(e))
      throw new TypeError("You must pass either a valid element or a valid id.");
    if (e.nodeName !== "IFRAME") {
      var i = e.querySelector("iframe");
      i && (e = i);
    }
    if (e.nodeName === "IFRAME" && !C(e.getAttribute("src") || ""))
      throw new Error("The player element passed isn\u2019t a Vimeo embed.");
    if (V.has(e))
      return V.get(e);
    this._window = e.ownerDocument.defaultView, this.element = e, this.origin = "*";
    var o = new M(function(l, g) {
      if (t._onMessage = function(w) {
        if (!(!C(w.origin) || t.element.contentWindow !== w.source)) {
          t.origin === "*" && (t.origin = w.origin);
          var v = O(w.data), _ = v && v.event === "error", N = _ && v.data && v.data.method === "ready";
          if (N) {
            var A = new Error(v.data.message);
            A.name = v.data.name, g(A);
            return;
          }
          var E = v && v.event === "ready", S = v && v.method === "ping";
          if (E || S) {
            t.element.setAttribute("data-ready", "true"), l();
            return;
          }
          ue(t, v);
        }
      }, t._window.addEventListener("message", t._onMessage), t.element.nodeName !== "IFRAME") {
        var c = U(e, n), p = Q(c);
        B(p, c, e).then(function(w) {
          var v = D(w, e);
          return t.element = v, t._originalElement = e, ae(e, v), V.set(t.element, t), w;
        }).catch(g);
      }
    });
    if (j.set(this, o), V.set(this.element, this), this.element.nodeName === "IFRAME" && I(this, "ping"), b.isEnabled) {
      var u = function() {
        return b.exit();
      };
      this.fullscreenchangeHandler = function() {
        b.isFullscreen ? F(t, "event:exitFullscreen", u) : q(t, "event:exitFullscreen", u), t.ready().then(function() {
          I(t, "fullscreenchange", b.isFullscreen);
        });
      }, b.on("fullscreenchange", this.fullscreenchangeHandler);
    }
    return this;
  }
  return Z(r, [{
    key: "callMethod",
    value: function(t) {
      var n = this, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return new M(function(o, u) {
        return n.ready().then(function() {
          F(n, t, {
            resolve: o,
            reject: u
          }), I(n, t, i);
        }).catch(u);
      });
    }
  }, {
    key: "get",
    value: function(t) {
      var n = this;
      return new M(function(i, o) {
        return t = $(t, "get"), n.ready().then(function() {
          F(n, t, {
            resolve: i,
            reject: o
          }), I(n, t);
        }).catch(o);
      });
    }
  }, {
    key: "set",
    value: function(t, n) {
      var i = this;
      return new M(function(o, u) {
        if (t = $(t, "set"), n == null)
          throw new TypeError("There must be a value to set.");
        return i.ready().then(function() {
          F(i, t, {
            resolve: o,
            reject: u
          }), I(i, t, n);
        }).catch(u);
      });
    }
  }, {
    key: "on",
    value: function(t, n) {
      if (!t)
        throw new TypeError("You must pass an event name.");
      if (!n)
        throw new TypeError("You must pass a callback function.");
      if (typeof n != "function")
        throw new TypeError("The callback must be a function.");
      var i = R(this, "event:".concat(t));
      i.length === 0 && this.callMethod("addEventListener", t).catch(function() {
      }), F(this, "event:".concat(t), n);
    }
  }, {
    key: "off",
    value: function(t, n) {
      if (!t)
        throw new TypeError("You must pass an event name.");
      if (n && typeof n != "function")
        throw new TypeError("The callback must be a function.");
      var i = q(this, "event:".concat(t), n);
      i && this.callMethod("removeEventListener", t).catch(function(o) {
      });
    }
  }, {
    key: "loadVideo",
    value: function(t) {
      return this.callMethod("loadVideo", t);
    }
  }, {
    key: "ready",
    value: function() {
      var t = j.get(this) || new M(function(n, i) {
        i(new Error("Unknown player. Probably unloaded."));
      });
      return M.resolve(t);
    }
  }, {
    key: "addCuePoint",
    value: function(t) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this.callMethod("addCuePoint", {
        time: t,
        data: n
      });
    }
  }, {
    key: "removeCuePoint",
    value: function(t) {
      return this.callMethod("removeCuePoint", t);
    }
  }, {
    key: "enableTextTrack",
    value: function(t, n) {
      if (!t)
        throw new TypeError("You must pass a language.");
      return this.callMethod("enableTextTrack", {
        language: t,
        kind: n
      });
    }
  }, {
    key: "disableTextTrack",
    value: function() {
      return this.callMethod("disableTextTrack");
    }
  }, {
    key: "pause",
    value: function() {
      return this.callMethod("pause");
    }
  }, {
    key: "play",
    value: function() {
      return this.callMethod("play");
    }
  }, {
    key: "requestFullscreen",
    value: function() {
      return b.isEnabled ? b.request(this.element) : this.callMethod("requestFullscreen");
    }
  }, {
    key: "exitFullscreen",
    value: function() {
      return b.isEnabled ? b.exit() : this.callMethod("exitFullscreen");
    }
  }, {
    key: "getFullscreen",
    value: function() {
      return b.isEnabled ? M.resolve(b.isFullscreen) : this.get("fullscreen");
    }
  }, {
    key: "requestPictureInPicture",
    value: function() {
      return this.callMethod("requestPictureInPicture");
    }
  }, {
    key: "exitPictureInPicture",
    value: function() {
      return this.callMethod("exitPictureInPicture");
    }
  }, {
    key: "getPictureInPicture",
    value: function() {
      return this.get("pictureInPicture");
    }
  }, {
    key: "unload",
    value: function() {
      return this.callMethod("unload");
    }
  }, {
    key: "destroy",
    value: function() {
      var t = this;
      return new M(function(n) {
        if (j.delete(t), V.delete(t.element), t._originalElement && (V.delete(t._originalElement), t._originalElement.removeAttribute("data-vimeo-initialized")), t.element && t.element.nodeName === "IFRAME" && t.element.parentNode && (t.element.parentNode.parentNode && t._originalElement && t._originalElement !== t.element.parentNode ? t.element.parentNode.parentNode.removeChild(t.element.parentNode) : t.element.parentNode.removeChild(t.element)), t.element && t.element.nodeName === "DIV" && t.element.parentNode) {
          t.element.removeAttribute("data-vimeo-initialized");
          var i = t.element.querySelector("iframe");
          i && i.parentNode && (i.parentNode.parentNode && t._originalElement && t._originalElement !== i.parentNode ? i.parentNode.parentNode.removeChild(i.parentNode) : i.parentNode.removeChild(i));
        }
        t._window.removeEventListener("message", t._onMessage), b.isEnabled && b.off("fullscreenchange", t.fullscreenchangeHandler), n();
      });
    }
  }, {
    key: "getAutopause",
    value: function() {
      return this.get("autopause");
    }
  }, {
    key: "setAutopause",
    value: function(t) {
      return this.set("autopause", t);
    }
  }, {
    key: "getBuffered",
    value: function() {
      return this.get("buffered");
    }
  }, {
    key: "getCameraProps",
    value: function() {
      return this.get("cameraProps");
    }
  }, {
    key: "setCameraProps",
    value: function(t) {
      return this.set("cameraProps", t);
    }
  }, {
    key: "getChapters",
    value: function() {
      return this.get("chapters");
    }
  }, {
    key: "getCurrentChapter",
    value: function() {
      return this.get("currentChapter");
    }
  }, {
    key: "getColor",
    value: function() {
      return this.get("color");
    }
  }, {
    key: "setColor",
    value: function(t) {
      return this.set("color", t);
    }
  }, {
    key: "getCuePoints",
    value: function() {
      return this.get("cuePoints");
    }
  }, {
    key: "getCurrentTime",
    value: function() {
      return this.get("currentTime");
    }
  }, {
    key: "setCurrentTime",
    value: function(t) {
      return this.set("currentTime", t);
    }
  }, {
    key: "getDuration",
    value: function() {
      return this.get("duration");
    }
  }, {
    key: "getEnded",
    value: function() {
      return this.get("ended");
    }
  }, {
    key: "getLoop",
    value: function() {
      return this.get("loop");
    }
  }, {
    key: "setLoop",
    value: function(t) {
      return this.set("loop", t);
    }
  }, {
    key: "setMuted",
    value: function(t) {
      return this.set("muted", t);
    }
  }, {
    key: "getMuted",
    value: function() {
      return this.get("muted");
    }
  }, {
    key: "getPaused",
    value: function() {
      return this.get("paused");
    }
  }, {
    key: "getPlaybackRate",
    value: function() {
      return this.get("playbackRate");
    }
  }, {
    key: "setPlaybackRate",
    value: function(t) {
      return this.set("playbackRate", t);
    }
  }, {
    key: "getPlayed",
    value: function() {
      return this.get("played");
    }
  }, {
    key: "getQualities",
    value: function() {
      return this.get("qualities");
    }
  }, {
    key: "getQuality",
    value: function() {
      return this.get("quality");
    }
  }, {
    key: "setQuality",
    value: function(t) {
      return this.set("quality", t);
    }
  }, {
    key: "getSeekable",
    value: function() {
      return this.get("seekable");
    }
  }, {
    key: "getSeeking",
    value: function() {
      return this.get("seeking");
    }
  }, {
    key: "getTextTracks",
    value: function() {
      return this.get("textTracks");
    }
  }, {
    key: "getVideoEmbedCode",
    value: function() {
      return this.get("videoEmbedCode");
    }
  }, {
    key: "getVideoId",
    value: function() {
      return this.get("videoId");
    }
  }, {
    key: "getVideoTitle",
    value: function() {
      return this.get("videoTitle");
    }
  }, {
    key: "getVideoWidth",
    value: function() {
      return this.get("videoWidth");
    }
  }, {
    key: "getVideoHeight",
    value: function() {
      return this.get("videoHeight");
    }
  }, {
    key: "getVideoUrl",
    value: function() {
      return this.get("videoUrl");
    }
  }, {
    key: "getVolume",
    value: function() {
      return this.get("volume");
    }
  }, {
    key: "setVolume",
    value: function(t) {
      return this.set("volume", t);
    }
  }]), r;
}();
z || (b = he(), le(), ce(), fe(), de());
const ge = (r) => ({
  player: null,
  init() {
    this.player = new L("videoModalVimeo", {
      url: r,
      width: 1920,
      loop: !1,
      autoplay: !0
    });
  }
}), ve = {
  currentVideo: !1,
  init() {
    document.addEventListener("keydown", (r) => {
      !this.currentVideo || r.key === "Escape" && this.close();
    });
  },
  play(r) {
    this.currentVideo = r;
  },
  close() {
    this.currentVideo = !1;
  }
};
document.addEventListener("alpine:init", () => {
  window.Alpine.data("videoModal", X), window.Alpine.data("youtubePlayer", G), window.Alpine.data("vimeoPlayer", ge), window.Alpine.store("videoModal", ve);
});
