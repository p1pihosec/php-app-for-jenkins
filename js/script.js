! function(t) {
    var e = {};

    function i(n) {
        if (e[n]) return e[n].exports;
        var o = e[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(o.exports, o, o.exports, i), o.l = !0, o.exports
    }
    i.m = t, i.c = e, i.d = function(t, e, n) {
        i.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, i.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, i.t = function(t, e) {
        if (1 & e && (t = i(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t)
            for (var o in t) i.d(n, o, function(e) {
                return t[e]
            }.bind(null, o));
        return n
    }, i.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return i.d(e, "a", e), e
    }, i.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, i.p = "", i(i.s = 75)
}([function(t, e, i) {
    var n = i(1),
        o = i(32),
        r = i(3),
        s = i(33),
        a = i(36),
        h = i(53),
        u = o("wks"),
        c = n.Symbol,
        l = h ? c : c && c.withoutSetter || s;
    t.exports = function(t) {
        return r(u, t) || (a && r(c, t) ? u[t] = c[t] : u[t] = l("Symbol." + t)), u[t]
    }
}, function(t, e, i) {
    (function(e) {
        var i = function(t) {
            return t && t.Math == Math && t
        };
        t.exports = i("object" == typeof globalThis && globalThis) || i("object" == typeof window && window) || i("object" == typeof self && self) || i("object" == typeof e && e) || function() {
            return this
        }() || Function("return this")()
    }).call(this, i(77))
}, function(t, e) {
    t.exports = function(t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }
}, function(t, e) {
    var i = {}.hasOwnProperty;
    t.exports = function(t, e) {
        return i.call(t, e)
    }
}, function(t, e, i) {
    var n = i(1),
        o = i(29).f,
        r = i(7),
        s = i(11),
        a = i(30),
        h = i(48),
        u = i(81);
    t.exports = function(t, e) {
        var i, c, l, d, p, f = t.target,
            _ = t.global,
            m = t.stat;
        if (i = _ ? n : m ? n[f] || a(f, {}) : (n[f] || {}).prototype)
            for (c in e) {
                if (d = e[c], l = t.noTargetGet ? (p = o(i, c)) && p.value : i[c], !u(_ ? c : f + (m ? "." : "#") + c, t.forced) && void 0 !== l) {
                    if (typeof d == typeof l) continue;
                    h(d, l)
                }(t.sham || l && l.sham) && r(d, "sham", !0), s(i, c, d, t)
            }
    }
}, function(t, e, i) {
    var n = i(6);
    t.exports = function(t) {
        if (!n(t)) throw TypeError(String(t) + " is not an object");
        return t
    }
}, function(t, e) {
    t.exports = function(t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
    }
}, function(t, e, i) {
    var n = i(9),
        o = i(8),
        r = i(14);
    t.exports = n ? function(t, e, i) {
        return o.f(t, e, r(1, i))
    } : function(t, e, i) {
        return t[e] = i, t
    }
}, function(t, e, i) {
    var n = i(9),
        o = i(45),
        r = i(5),
        s = i(20),
        a = Object.defineProperty;
    e.f = n ? a : function(t, e, i) {
        if (r(t), e = s(e, !0), r(i), o) try {
            return a(t, e, i)
        } catch (t) {}
        if ("get" in i || "set" in i) throw TypeError("Accessors not supported");
        return "value" in i && (t[e] = i.value), t
    }
}, function(t, e, i) {
    var n = i(2);
    t.exports = !n((function() {
        return 7 != Object.defineProperty({}, 1, {
            get: function() {
                return 7
            }
        })[1]
    }))
}, function(t, e, i) {
    var n = i(44),
        o = i(15);
    t.exports = function(t) {
        return n(o(t))
    }
}, function(t, e, i) {
    var n = i(1),
        o = i(7),
        r = i(3),
        s = i(30),
        a = i(47),
        h = i(21),
        u = h.get,
        c = h.enforce,
        l = String(String).split("String");
    (t.exports = function(t, e, i, a) {
        var h, u = !!a && !!a.unsafe,
            d = !!a && !!a.enumerable,
            p = !!a && !!a.noTargetGet;
        "function" == typeof i && ("string" != typeof e || r(i, "name") || o(i, "name", e), (h = c(i)).source || (h.source = l.join("string" == typeof e ? e : ""))), t !== n ? (u ? !p && t[e] && (d = !0) : delete t[e], d ? t[e] = i : o(t, e, i)) : d ? t[e] = i : s(e, i)
    })(Function.prototype, "toString", (function() {
        return "function" == typeof this && u(this).source || a(this)
    }))
}, function(t, e, i) {
    var n = i(26),
        o = Math.min;
    t.exports = function(t) {
        return t > 0 ? o(n(t), 9007199254740991) : 0
    }
}, function(t, e, i) {
    var n = i(15);
    t.exports = function(t) {
        return Object(n(t))
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
        }
    }
}, function(t, e) {
    t.exports = function(t) {
        if (null == t) throw TypeError("Can't call method on " + t);
        return t
    }
}, function(t, e, i) {
    var n = i(19);
    t.exports = Array.isArray || function(t) {
        return "Array" == n(t)
    }
}, function(t, e) {
    t.exports = {}
}, function(t, e, i) {
    /* @preserve
     * Leaflet 1.7.1, a JS library for interactive maps. http://leafletjs.com
     * (c) 2010-2019 Vladimir Agafonkin, (c) 2010-2011 CloudMade
     */
    ! function(t) {
        "use strict";

        function e(t) {
            var e, i, n, o;
            for (i = 1, n = arguments.length; i < n; i++)
                for (e in o = arguments[i]) t[e] = o[e];
            return t
        }
        var i = Object.create || function() {
            function t() {}
            return function(e) {
                return t.prototype = e, new t
            }
        }();

        function n(t, e) {
            var i = Array.prototype.slice;
            if (t.bind) return t.bind.apply(t, i.call(arguments, 1));
            var n = i.call(arguments, 2);
            return function() {
                return t.apply(e, n.length ? n.concat(i.call(arguments)) : arguments)
            }
        }
        var o = 0;

        function r(t) {
            return t._leaflet_id = t._leaflet_id || ++o, t._leaflet_id
        }

        function s(t, e, i) {
            var n, o, r, s;
            return s = function() {
                n = !1, o && (r.apply(i, o), o = !1)
            }, r = function() {
                n ? o = arguments : (t.apply(i, arguments), setTimeout(s, e), n = !0)
            }
        }

        function a(t, e, i) {
            var n = e[1],
                o = e[0],
                r = n - o;
            return t === n && i ? t : ((t - o) % r + r) % r + o
        }

        function h() {
            return !1
        }

        function u(t, e) {
            var i = Math.pow(10, void 0 === e ? 6 : e);
            return Math.round(t * i) / i
        }

        function c(t) {
            return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
        }

        function l(t) {
            return c(t).split(/\s+/)
        }

        function d(t, e) {
            for (var n in Object.prototype.hasOwnProperty.call(t, "options") || (t.options = t.options ? i(t.options) : {}), e) t.options[n] = e[n];
            return t.options
        }

        function p(t, e, i) {
            var n = [];
            for (var o in t) n.push(encodeURIComponent(i ? o.toUpperCase() : o) + "=" + encodeURIComponent(t[o]));
            return (e && -1 !== e.indexOf("?") ? "&" : "?") + n.join("&")
        }
        var f = /\{ *([\w_-]+) *\}/g;

        function _(t, e) {
            return t.replace(f, (function(t, i) {
                var n = e[i];
                if (void 0 === n) throw new Error("No value provided for variable " + t);
                return "function" == typeof n && (n = n(e)), n
            }))
        }
        var m = Array.isArray || function(t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        };

        function v(t, e) {
            for (var i = 0; i < t.length; i++)
                if (t[i] === e) return i;
            return -1
        }
        var g = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";

        function y(t) {
            return window["webkit" + t] || window["moz" + t] || window["ms" + t]
        }
        var x = 0;

        function w(t) {
            var e = +new Date,
                i = Math.max(0, 16 - (e - x));
            return x = e + i, window.setTimeout(t, i)
        }
        var b = window.requestAnimationFrame || y("RequestAnimationFrame") || w,
            P = window.cancelAnimationFrame || y("CancelAnimationFrame") || y("CancelRequestAnimationFrame") || function(t) {
                window.clearTimeout(t)
            };

        function T(t, e, i) {
            if (!i || b !== w) return b.call(window, n(t, e));
            t.call(e)
        }

        function S(t) {
            t && P.call(window, t)
        }
        var E = {
            extend: e,
            create: i,
            bind: n,
            lastId: o,
            stamp: r,
            throttle: s,
            wrapNum: a,
            falseFn: h,
            formatNum: u,
            trim: c,
            splitWords: l,
            setOptions: d,
            getParamString: p,
            template: _,
            isArray: m,
            indexOf: v,
            emptyImageUrl: g,
            requestFn: b,
            cancelFn: P,
            requestAnimFrame: T,
            cancelAnimFrame: S
        };

        function M() {}
        M.extend = function(t) {
            var n = function() {
                    this.initialize && this.initialize.apply(this, arguments), this.callInitHooks()
                },
                o = n.__super__ = this.prototype,
                r = i(o);
            for (var s in r.constructor = n, n.prototype = r, this) Object.prototype.hasOwnProperty.call(this, s) && "prototype" !== s && "__super__" !== s && (n[s] = this[s]);
            return t.statics && (e(n, t.statics), delete t.statics), t.includes && (function(t) {
                if ("undefined" != typeof L && L && L.Mixin) {
                    t = m(t) ? t : [t];
                    for (var e = 0; e < t.length; e++) t[e] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", (new Error).stack)
                }
            }(t.includes), e.apply(null, [r].concat(t.includes)), delete t.includes), r.options && (t.options = e(i(r.options), t.options)), e(r, t), r._initHooks = [], r.callInitHooks = function() {
                if (!this._initHooksCalled) {
                    o.callInitHooks && o.callInitHooks.call(this), this._initHooksCalled = !0;
                    for (var t = 0, e = r._initHooks.length; t < e; t++) r._initHooks[t].call(this)
                }
            }, n
        }, M.include = function(t) {
            return e(this.prototype, t), this
        }, M.mergeOptions = function(t) {
            return e(this.prototype.options, t), this
        }, M.addInitHook = function(t) {
            var e = Array.prototype.slice.call(arguments, 1),
                i = "function" == typeof t ? t : function() {
                    this[t].apply(this, e)
                };
            return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(i), this
        };
        var z = {
            on: function(t, e, i) {
                if ("object" == typeof t)
                    for (var n in t) this._on(n, t[n], e);
                else
                    for (var o = 0, r = (t = l(t)).length; o < r; o++) this._on(t[o], e, i);
                return this
            },
            off: function(t, e, i) {
                if (t)
                    if ("object" == typeof t)
                        for (var n in t) this._off(n, t[n], e);
                    else
                        for (var o = 0, r = (t = l(t)).length; o < r; o++) this._off(t[o], e, i);
                else delete this._events;
                return this
            },
            _on: function(t, e, i) {
                this._events = this._events || {};
                var n = this._events[t];
                n || (n = [], this._events[t] = n), i === this && (i = void 0);
                for (var o = {
                    fn: e,
                    ctx: i
                }, r = n, s = 0, a = r.length; s < a; s++)
                    if (r[s].fn === e && r[s].ctx === i) return;
                r.push(o)
            },
            _off: function(t, e, i) {
                var n, o, r;
                if (this._events && (n = this._events[t]))
                    if (e) {
                        if (i === this && (i = void 0), n)
                            for (o = 0, r = n.length; o < r; o++) {
                                var s = n[o];
                                if (s.ctx === i && s.fn === e) return s.fn = h, this._firingCount && (this._events[t] = n = n.slice()), void n.splice(o, 1)
                            }
                    } else {
                        for (o = 0, r = n.length; o < r; o++) n[o].fn = h;
                        delete this._events[t]
                    }
            },
            fire: function(t, i, n) {
                if (!this.listens(t, n)) return this;
                var o = e({}, i, {
                    type: t,
                    target: this,
                    sourceTarget: i && i.sourceTarget || this
                });
                if (this._events) {
                    var r = this._events[t];
                    if (r) {
                        this._firingCount = this._firingCount + 1 || 1;
                        for (var s = 0, a = r.length; s < a; s++) {
                            var h = r[s];
                            h.fn.call(h.ctx || this, o)
                        }
                        this._firingCount--
                    }
                }
                return n && this._propagateEvent(o), this
            },
            listens: function(t, e) {
                var i = this._events && this._events[t];
                if (i && i.length) return !0;
                if (e)
                    for (var n in this._eventParents)
                        if (this._eventParents[n].listens(t, e)) return !0;
                return !1
            },
            once: function(t, e, i) {
                if ("object" == typeof t) {
                    for (var o in t) this.once(o, t[o], e);
                    return this
                }
                var r = n((function() {
                    this.off(t, e, i).off(t, r, i)
                }), this);
                return this.on(t, e, i).on(t, r, i)
            },
            addEventParent: function(t) {
                return this._eventParents = this._eventParents || {}, this._eventParents[r(t)] = t, this
            },
            removeEventParent: function(t) {
                return this._eventParents && delete this._eventParents[r(t)], this
            },
            _propagateEvent: function(t) {
                for (var i in this._eventParents) this._eventParents[i].fire(t.type, e({
                    layer: t.target,
                    propagatedFrom: t.target
                }, t), !0)
            }
        };
        z.addEventListener = z.on, z.removeEventListener = z.clearAllEventListeners = z.off, z.addOneTimeEventListener = z.once, z.fireEvent = z.fire, z.hasEventListeners = z.listens;
        var C = M.extend(z);

        function k(t, e, i) {
            this.x = i ? Math.round(t) : t, this.y = i ? Math.round(e) : e
        }
        var A = Math.trunc || function(t) {
            return t > 0 ? Math.floor(t) : Math.ceil(t)
        };

        function O(t, e, i) {
            return t instanceof k ? t : m(t) ? new k(t[0], t[1]) : null == t ? t : "object" == typeof t && "x" in t && "y" in t ? new k(t.x, t.y) : new k(t, e, i)
        }

        function I(t, e) {
            if (t)
                for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++) this.extend(i[n])
        }

        function Z(t, e) {
            return !t || t instanceof I ? t : new I(t, e)
        }

        function B(t, e) {
            if (t)
                for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++) this.extend(i[n])
        }

        function R(t, e) {
            return t instanceof B ? t : new B(t, e)
        }

        function j(t, e, i) {
            if (isNaN(t) || isNaN(e)) throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
            this.lat = +t, this.lng = +e, void 0 !== i && (this.alt = +i)
        }

        function N(t, e, i) {
            return t instanceof j ? t : m(t) && "object" != typeof t[0] ? 3 === t.length ? new j(t[0], t[1], t[2]) : 2 === t.length ? new j(t[0], t[1]) : null : null == t ? t : "object" == typeof t && "lat" in t ? new j(t.lat, "lng" in t ? t.lng : t.lon, t.alt) : void 0 === e ? null : new j(t, e, i)
        }
        k.prototype = {
            clone: function() {
                return new k(this.x, this.y)
            },
            add: function(t) {
                return this.clone()._add(O(t))
            },
            _add: function(t) {
                return this.x += t.x, this.y += t.y, this
            },
            subtract: function(t) {
                return this.clone()._subtract(O(t))
            },
            _subtract: function(t) {
                return this.x -= t.x, this.y -= t.y, this
            },
            divideBy: function(t) {
                return this.clone()._divideBy(t)
            },
            _divideBy: function(t) {
                return this.x /= t, this.y /= t, this
            },
            multiplyBy: function(t) {
                return this.clone()._multiplyBy(t)
            },
            _multiplyBy: function(t) {
                return this.x *= t, this.y *= t, this
            },
            scaleBy: function(t) {
                return new k(this.x * t.x, this.y * t.y)
            },
            unscaleBy: function(t) {
                return new k(this.x / t.x, this.y / t.y)
            },
            round: function() {
                return this.clone()._round()
            },
            _round: function() {
                return this.x = Math.round(this.x), this.y = Math.round(this.y), this
            },
            floor: function() {
                return this.clone()._floor()
            },
            _floor: function() {
                return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
            },
            ceil: function() {
                return this.clone()._ceil()
            },
            _ceil: function() {
                return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
            },
            trunc: function() {
                return this.clone()._trunc()
            },
            _trunc: function() {
                return this.x = A(this.x), this.y = A(this.y), this
            },
            distanceTo: function(t) {
                var e = (t = O(t)).x - this.x,
                    i = t.y - this.y;
                return Math.sqrt(e * e + i * i)
            },
            equals: function(t) {
                return (t = O(t)).x === this.x && t.y === this.y
            },
            contains: function(t) {
                return t = O(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
            },
            toString: function() {
                return "Point(" + u(this.x) + ", " + u(this.y) + ")"
            }
        }, I.prototype = {
            extend: function(t) {
                return t = O(t), this.min || this.max ? (this.min.x = Math.min(t.x, this.min.x), this.max.x = Math.max(t.x, this.max.x), this.min.y = Math.min(t.y, this.min.y), this.max.y = Math.max(t.y, this.max.y)) : (this.min = t.clone(), this.max = t.clone()), this
            },
            getCenter: function(t) {
                return new k((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t)
            },
            getBottomLeft: function() {
                return new k(this.min.x, this.max.y)
            },
            getTopRight: function() {
                return new k(this.max.x, this.min.y)
            },
            getTopLeft: function() {
                return this.min
            },
            getBottomRight: function() {
                return this.max
            },
            getSize: function() {
                return this.max.subtract(this.min)
            },
            contains: function(t) {
                var e, i;
                return (t = "number" == typeof t[0] || t instanceof k ? O(t) : Z(t)) instanceof I ? (e = t.min, i = t.max) : e = i = t, e.x >= this.min.x && i.x <= this.max.x && e.y >= this.min.y && i.y <= this.max.y
            },
            intersects: function(t) {
                t = Z(t);
                var e = this.min,
                    i = this.max,
                    n = t.min,
                    o = t.max,
                    r = o.x >= e.x && n.x <= i.x,
                    s = o.y >= e.y && n.y <= i.y;
                return r && s
            },
            overlaps: function(t) {
                t = Z(t);
                var e = this.min,
                    i = this.max,
                    n = t.min,
                    o = t.max,
                    r = o.x > e.x && n.x < i.x,
                    s = o.y > e.y && n.y < i.y;
                return r && s
            },
            isValid: function() {
                return !(!this.min || !this.max)
            }
        }, B.prototype = {
            extend: function(t) {
                var e, i, n = this._southWest,
                    o = this._northEast;
                if (t instanceof j) e = t, i = t;
                else {
                    if (!(t instanceof B)) return t ? this.extend(N(t) || R(t)) : this;
                    if (e = t._southWest, i = t._northEast, !e || !i) return this
                }
                return n || o ? (n.lat = Math.min(e.lat, n.lat), n.lng = Math.min(e.lng, n.lng), o.lat = Math.max(i.lat, o.lat), o.lng = Math.max(i.lng, o.lng)) : (this._southWest = new j(e.lat, e.lng), this._northEast = new j(i.lat, i.lng)), this
            },
            pad: function(t) {
                var e = this._southWest,
                    i = this._northEast,
                    n = Math.abs(e.lat - i.lat) * t,
                    o = Math.abs(e.lng - i.lng) * t;
                return new B(new j(e.lat - n, e.lng - o), new j(i.lat + n, i.lng + o))
            },
            getCenter: function() {
                return new j((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2)
            },
            getSouthWest: function() {
                return this._southWest
            },
            getNorthEast: function() {
                return this._northEast
            },
            getNorthWest: function() {
                return new j(this.getNorth(), this.getWest())
            },
            getSouthEast: function() {
                return new j(this.getSouth(), this.getEast())
            },
            getWest: function() {
                return this._southWest.lng
            },
            getSouth: function() {
                return this._southWest.lat
            },
            getEast: function() {
                return this._northEast.lng
            },
            getNorth: function() {
                return this._northEast.lat
            },
            contains: function(t) {
                t = "number" == typeof t[0] || t instanceof j || "lat" in t ? N(t) : R(t);
                var e, i, n = this._southWest,
                    o = this._northEast;
                return t instanceof B ? (e = t.getSouthWest(), i = t.getNorthEast()) : e = i = t, e.lat >= n.lat && i.lat <= o.lat && e.lng >= n.lng && i.lng <= o.lng
            },
            intersects: function(t) {
                t = R(t);
                var e = this._southWest,
                    i = this._northEast,
                    n = t.getSouthWest(),
                    o = t.getNorthEast(),
                    r = o.lat >= e.lat && n.lat <= i.lat,
                    s = o.lng >= e.lng && n.lng <= i.lng;
                return r && s
            },
            overlaps: function(t) {
                t = R(t);
                var e = this._southWest,
                    i = this._northEast,
                    n = t.getSouthWest(),
                    o = t.getNorthEast(),
                    r = o.lat > e.lat && n.lat < i.lat,
                    s = o.lng > e.lng && n.lng < i.lng;
                return r && s
            },
            toBBoxString: function() {
                return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",")
            },
            equals: function(t, e) {
                return !!t && (t = R(t), this._southWest.equals(t.getSouthWest(), e) && this._northEast.equals(t.getNorthEast(), e))
            },
            isValid: function() {
                return !(!this._southWest || !this._northEast)
            }
        }, j.prototype = {
            equals: function(t, e) {
                return !!t && (t = N(t), Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng)) <= (void 0 === e ? 1e-9 : e))
            },
            toString: function(t) {
                return "LatLng(" + u(this.lat, t) + ", " + u(this.lng, t) + ")"
            },
            distanceTo: function(t) {
                return W.distance(this, N(t))
            },
            wrap: function() {
                return W.wrapLatLng(this)
            },
            toBounds: function(t) {
                var e = 180 * t / 40075017,
                    i = e / Math.cos(Math.PI / 180 * this.lat);
                return R([this.lat - e, this.lng - i], [this.lat + e, this.lng + i])
            },
            clone: function() {
                return new j(this.lat, this.lng, this.alt)
            }
        };
        var D, F = {
                latLngToPoint: function(t, e) {
                    var i = this.projection.project(t),
                        n = this.scale(e);
                    return this.transformation._transform(i, n)
                },
                pointToLatLng: function(t, e) {
                    var i = this.scale(e),
                        n = this.transformation.untransform(t, i);
                    return this.projection.unproject(n)
                },
                project: function(t) {
                    return this.projection.project(t)
                },
                unproject: function(t) {
                    return this.projection.unproject(t)
                },
                scale: function(t) {
                    return 256 * Math.pow(2, t)
                },
                zoom: function(t) {
                    return Math.log(t / 256) / Math.LN2
                },
                getProjectedBounds: function(t) {
                    if (this.infinite) return null;
                    var e = this.projection.bounds,
                        i = this.scale(t);
                    return new I(this.transformation.transform(e.min, i), this.transformation.transform(e.max, i))
                },
                infinite: !1,
                wrapLatLng: function(t) {
                    var e = this.wrapLng ? a(t.lng, this.wrapLng, !0) : t.lng;
                    return new j(this.wrapLat ? a(t.lat, this.wrapLat, !0) : t.lat, e, t.alt)
                },
                wrapLatLngBounds: function(t) {
                    var e = t.getCenter(),
                        i = this.wrapLatLng(e),
                        n = e.lat - i.lat,
                        o = e.lng - i.lng;
                    if (0 === n && 0 === o) return t;
                    var r = t.getSouthWest(),
                        s = t.getNorthEast();
                    return new B(new j(r.lat - n, r.lng - o), new j(s.lat - n, s.lng - o))
                }
            },
            W = e({}, F, {
                wrapLng: [-180, 180],
                R: 6371e3,
                distance: function(t, e) {
                    var i = Math.PI / 180,
                        n = t.lat * i,
                        o = e.lat * i,
                        r = Math.sin((e.lat - t.lat) * i / 2),
                        s = Math.sin((e.lng - t.lng) * i / 2),
                        a = r * r + Math.cos(n) * Math.cos(o) * s * s,
                        h = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                    return this.R * h
                }
            }),
            H = {
                R: 6378137,
                MAX_LATITUDE: 85.0511287798,
                project: function(t) {
                    var e = Math.PI / 180,
                        i = this.MAX_LATITUDE,
                        n = Math.max(Math.min(i, t.lat), -i),
                        o = Math.sin(n * e);
                    return new k(this.R * t.lng * e, this.R * Math.log((1 + o) / (1 - o)) / 2)
                },
                unproject: function(t) {
                    var e = 180 / Math.PI;
                    return new j((2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * e, t.x * e / this.R)
                },
                bounds: (D = 6378137 * Math.PI, new I([-D, -D], [D, D]))
            };

        function q(t, e, i, n) {
            if (m(t)) return this._a = t[0], this._b = t[1], this._c = t[2], void(this._d = t[3]);
            this._a = t, this._b = e, this._c = i, this._d = n
        }

        function U(t, e, i, n) {
            return new q(t, e, i, n)
        }
        q.prototype = {
            transform: function(t, e) {
                return this._transform(t.clone(), e)
            },
            _transform: function(t, e) {
                return e = e || 1, t.x = e * (this._a * t.x + this._b), t.y = e * (this._c * t.y + this._d), t
            },
            untransform: function(t, e) {
                return e = e || 1, new k((t.x / e - this._b) / this._a, (t.y / e - this._d) / this._c)
            }
        };
        var V = e({}, W, {
                code: "EPSG:3857",
                projection: H,
                transformation: function() {
                    var t = .5 / (Math.PI * H.R);
                    return U(t, .5, -t, .5)
                }()
            }),
            G = e({}, V, {
                code: "EPSG:900913"
            });

        function K(t) {
            return document.createElementNS("http://www.w3.org/2000/svg", t)
        }

        function Y(t, e) {
            var i, n, o, r, s, a, h = "";
            for (i = 0, o = t.length; i < o; i++) {
                for (n = 0, r = (s = t[i]).length; n < r; n++) h += (n ? "L" : "M") + (a = s[n]).x + " " + a.y;
                h += e ? Et ? "z" : "x" : ""
            }
            return h || "M0 0"
        }
        var X = document.documentElement.style,
            J = "ActiveXObject" in window,
            $ = J && !document.addEventListener,
            Q = "msLaunchUri" in navigator && !("documentMode" in document),
            tt = zt("webkit"),
            et = zt("android"),
            it = zt("android 2") || zt("android 3"),
            nt = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10),
            ot = et && zt("Google") && nt < 537 && !("AudioNode" in window),
            rt = !!window.opera,
            st = !Q && zt("chrome"),
            at = zt("gecko") && !tt && !rt && !J,
            ht = !st && zt("safari"),
            ut = zt("phantom"),
            ct = "OTransition" in X,
            lt = 0 === navigator.platform.indexOf("Win"),
            dt = J && "transition" in X,
            pt = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix && !it,
            ft = "MozPerspective" in X,
            _t = !window.L_DISABLE_3D && (dt || pt || ft) && !ct && !ut,
            mt = "undefined" != typeof orientation || zt("mobile"),
            vt = mt && tt,
            gt = mt && pt,
            yt = !window.PointerEvent && window.MSPointerEvent,
            xt = !(!window.PointerEvent && !yt),
            wt = !window.L_NO_TOUCH && (xt || "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
            bt = mt && rt,
            Pt = mt && at,
            Lt = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1,
            Tt = function() {
                var t = !1;
                try {
                    var e = Object.defineProperty({}, "passive", {
                        get: function() {
                            t = !0
                        }
                    });
                    window.addEventListener("testPassiveEventSupport", h, e), window.removeEventListener("testPassiveEventSupport", h, e)
                } catch (t) {}
                return t
            }(),
            St = !!document.createElement("canvas").getContext,
            Et = !(!document.createElementNS || !K("svg").createSVGRect),
            Mt = !Et && function() {
                try {
                    var t = document.createElement("div");
                    t.innerHTML = '<v:shape adj="1"/>';
                    var e = t.firstChild;
                    return e.style.behavior = "url(#default#VML)", e && "object" == typeof e.adj
                } catch (t) {
                    return !1
                }
            }();

        function zt(t) {
            return navigator.userAgent.toLowerCase().indexOf(t) >= 0
        }
        var Ct = {
                ie: J,
                ielt9: $,
                edge: Q,
                webkit: tt,
                android: et,
                android23: it,
                androidStock: ot,
                opera: rt,
                chrome: st,
                gecko: at,
                safari: ht,
                phantom: ut,
                opera12: ct,
                win: lt,
                ie3d: dt,
                webkit3d: pt,
                gecko3d: ft,
                any3d: _t,
                mobile: mt,
                mobileWebkit: vt,
                mobileWebkit3d: gt,
                msPointer: yt,
                pointer: xt,
                touch: wt,
                mobileOpera: bt,
                mobileGecko: Pt,
                retina: Lt,
                passiveEvents: Tt,
                canvas: St,
                svg: Et,
                vml: Mt
            },
            kt = yt ? "MSPointerDown" : "pointerdown",
            At = yt ? "MSPointerMove" : "pointermove",
            Ot = yt ? "MSPointerUp" : "pointerup",
            It = yt ? "MSPointerCancel" : "pointercancel",
            Zt = {},
            Bt = !1;

        function Rt(t, e, i, o) {
            return "touchstart" === e ? function(t, e, i) {
                var o = n((function(t) {
                    t.MSPOINTER_TYPE_TOUCH && t.pointerType === t.MSPOINTER_TYPE_TOUCH && Ie(t), Ft(t, e)
                }));
                t["_leaflet_touchstart" + i] = o, t.addEventListener(kt, o, !1), Bt || (document.addEventListener(kt, jt, !0), document.addEventListener(At, Nt, !0), document.addEventListener(Ot, Dt, !0), document.addEventListener(It, Dt, !0), Bt = !0)
            }(t, i, o) : "touchmove" === e ? function(t, e, i) {
                var n = function(t) {
                    t.pointerType === (t.MSPOINTER_TYPE_MOUSE || "mouse") && 0 === t.buttons || Ft(t, e)
                };
                t["_leaflet_touchmove" + i] = n, t.addEventListener(At, n, !1)
            }(t, i, o) : "touchend" === e && function(t, e, i) {
                var n = function(t) {
                    Ft(t, e)
                };
                t["_leaflet_touchend" + i] = n, t.addEventListener(Ot, n, !1), t.addEventListener(It, n, !1)
            }(t, i, o), this
        }

        function jt(t) {
            Zt[t.pointerId] = t
        }

        function Nt(t) {
            Zt[t.pointerId] && (Zt[t.pointerId] = t)
        }

        function Dt(t) {
            delete Zt[t.pointerId]
        }

        function Ft(t, e) {
            for (var i in t.touches = [], Zt) t.touches.push(Zt[i]);
            t.changedTouches = [t], e(t)
        }
        var Wt, Ht, qt, Ut, Vt, Gt = yt ? "MSPointerDown" : xt ? "pointerdown" : "touchstart",
            Kt = yt ? "MSPointerUp" : xt ? "pointerup" : "touchend",
            Yt = "_leaflet_",
            Xt = de(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]),
            Jt = de(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]),
            $t = "webkitTransition" === Jt || "OTransition" === Jt ? Jt + "End" : "transitionend";

        function Qt(t) {
            return "string" == typeof t ? document.getElementById(t) : t
        }

        function te(t, e) {
            var i = t.style[e] || t.currentStyle && t.currentStyle[e];
            if ((!i || "auto" === i) && document.defaultView) {
                var n = document.defaultView.getComputedStyle(t, null);
                i = n ? n[e] : null
            }
            return "auto" === i ? null : i
        }

        function ee(t, e, i) {
            var n = document.createElement(t);
            return n.className = e || "", i && i.appendChild(n), n
        }

        function ie(t) {
            var e = t.parentNode;
            e && e.removeChild(t)
        }

        function ne(t) {
            for (; t.firstChild;) t.removeChild(t.firstChild)
        }

        function oe(t) {
            var e = t.parentNode;
            e && e.lastChild !== t && e.appendChild(t)
        }

        function re(t) {
            var e = t.parentNode;
            e && e.firstChild !== t && e.insertBefore(t, e.firstChild)
        }

        function se(t, e) {
            if (void 0 !== t.classList) return t.classList.contains(e);
            var i = ce(t);
            return i.length > 0 && new RegExp("(^|\\s)" + e + "(\\s|$)").test(i)
        }

        function ae(t, e) {
            if (void 0 !== t.classList)
                for (var i = l(e), n = 0, o = i.length; n < o; n++) t.classList.add(i[n]);
            else if (!se(t, e)) {
                var r = ce(t);
                ue(t, (r ? r + " " : "") + e)
            }
        }

        function he(t, e) {
            void 0 !== t.classList ? t.classList.remove(e) : ue(t, c((" " + ce(t) + " ").replace(" " + e + " ", " ")))
        }

        function ue(t, e) {
            void 0 === t.className.baseVal ? t.className = e : t.className.baseVal = e
        }

        function ce(t) {
            return t.correspondingElement && (t = t.correspondingElement), void 0 === t.className.baseVal ? t.className : t.className.baseVal
        }

        function le(t, e) {
            "opacity" in t.style ? t.style.opacity = e : "filter" in t.style && function(t, e) {
                var i = !1,
                    n = "DXImageTransform.Microsoft.Alpha";
                try {
                    i = t.filters.item(n)
                } catch (t) {
                    if (1 === e) return
                }
                e = Math.round(100 * e), i ? (i.Enabled = 100 !== e, i.Opacity = e) : t.style.filter += " progid:" + n + "(opacity=" + e + ")"
            }(t, e)
        }

        function de(t) {
            for (var e = document.documentElement.style, i = 0; i < t.length; i++)
                if (t[i] in e) return t[i];
            return !1
        }

        function pe(t, e, i) {
            var n = e || new k(0, 0);
            t.style[Xt] = (dt ? "translate(" + n.x + "px," + n.y + "px)" : "translate3d(" + n.x + "px," + n.y + "px,0)") + (i ? " scale(" + i + ")" : "")
        }

        function fe(t, e) {
            t._leaflet_pos = e, _t ? pe(t, e) : (t.style.left = e.x + "px", t.style.top = e.y + "px")
        }

        function _e(t) {
            return t._leaflet_pos || new k(0, 0)
        }
        if ("onselectstart" in document) Wt = function() {
            Le(window, "selectstart", Ie)
        }, Ht = function() {
            Se(window, "selectstart", Ie)
        };
        else {
            var me = de(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
            Wt = function() {
                if (me) {
                    var t = document.documentElement.style;
                    qt = t[me], t[me] = "none"
                }
            }, Ht = function() {
                me && (document.documentElement.style[me] = qt, qt = void 0)
            }
        }

        function ve() {
            Le(window, "dragstart", Ie)
        }

        function ge() {
            Se(window, "dragstart", Ie)
        }

        function ye(t) {
            for (; - 1 === t.tabIndex;) t = t.parentNode;
            t.style && (xe(), Ut = t, Vt = t.style.outline, t.style.outline = "none", Le(window, "keydown", xe))
        }

        function xe() {
            Ut && (Ut.style.outline = Vt, Ut = void 0, Vt = void 0, Se(window, "keydown", xe))
        }

        function we(t) {
            do {
                t = t.parentNode
            } while (!(t.offsetWidth && t.offsetHeight || t === document.body));
            return t
        }

        function be(t) {
            var e = t.getBoundingClientRect();
            return {
                x: e.width / t.offsetWidth || 1,
                y: e.height / t.offsetHeight || 1,
                boundingClientRect: e
            }
        }
        var Pe = {
            TRANSFORM: Xt,
            TRANSITION: Jt,
            TRANSITION_END: $t,
            get: Qt,
            getStyle: te,
            create: ee,
            remove: ie,
            empty: ne,
            toFront: oe,
            toBack: re,
            hasClass: se,
            addClass: ae,
            removeClass: he,
            setClass: ue,
            getClass: ce,
            setOpacity: le,
            testProp: de,
            setTransform: pe,
            setPosition: fe,
            getPosition: _e,
            disableTextSelection: Wt,
            enableTextSelection: Ht,
            disableImageDrag: ve,
            enableImageDrag: ge,
            preventOutline: ye,
            restoreOutline: xe,
            getSizedParentNode: we,
            getScale: be
        };

        function Le(t, e, i, n) {
            if ("object" == typeof e)
                for (var o in e) ze(t, o, e[o], i);
            else
                for (var r = 0, s = (e = l(e)).length; r < s; r++) ze(t, e[r], i, n);
            return this
        }
        var Te = "_leaflet_events";

        function Se(t, e, i, n) {
            if ("object" == typeof e)
                for (var o in e) Ce(t, o, e[o], i);
            else if (e)
                for (var r = 0, s = (e = l(e)).length; r < s; r++) Ce(t, e[r], i, n);
            else {
                for (var a in t[Te]) Ce(t, a, t[Te][a]);
                delete t[Te]
            }
            return this
        }

        function Ee() {
            if (xt) return !(Q || ht)
        }
        var Me = {
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            wheel: !("onwheel" in window) && "mousewheel"
        };

        function ze(t, e, i, n) {
            var o = e + r(i) + (n ? "_" + r(n) : "");
            if (t[Te] && t[Te][o]) return this;
            var s = function(e) {
                    return i.call(n || t, e || window.event)
                },
                a = s;
            xt && 0 === e.indexOf("touch") ? Rt(t, e, s, o) : wt && "dblclick" === e && !Ee() ? function(t, e, i) {
                var n, o, r = !1;

                function s(t) {
                    if (xt) {
                        if (!t.isPrimary) return;
                        if ("mouse" === t.pointerType) return
                    } else if (t.touches.length > 1) return;
                    var e = Date.now(),
                        i = e - (n || e);
                    o = t.touches ? t.touches[0] : t, r = i > 0 && i <= 250, n = e
                }

                function a(t) {
                    if (r && !o.cancelBubble) {
                        if (xt) {
                            if ("mouse" === t.pointerType) return;
                            var i, s, a = {};
                            for (s in o) i = o[s], a[s] = i && i.bind ? i.bind(o) : i;
                            o = a
                        }
                        o.type = "dblclick", o.button = 0, e(o), n = null
                    }
                }
                t[Yt + Gt + i] = s, t[Yt + Kt + i] = a, t[Yt + "dblclick" + i] = e, t.addEventListener(Gt, s, !!Tt && {
                    passive: !1
                }), t.addEventListener(Kt, a, !!Tt && {
                    passive: !1
                }), t.addEventListener("dblclick", e, !1)
            }(t, s, o) : "addEventListener" in t ? "touchstart" === e || "touchmove" === e || "wheel" === e || "mousewheel" === e ? t.addEventListener(Me[e] || e, s, !!Tt && {
                passive: !1
            }) : "mouseenter" === e || "mouseleave" === e ? (s = function(e) {
                e = e || window.event, We(t, e) && a(e)
            }, t.addEventListener(Me[e], s, !1)) : t.addEventListener(e, a, !1) : "attachEvent" in t && t.attachEvent("on" + e, s), t[Te] = t[Te] || {}, t[Te][o] = s
        }

        function Ce(t, e, i, n) {
            var o = e + r(i) + (n ? "_" + r(n) : ""),
                s = t[Te] && t[Te][o];
            if (!s) return this;
            xt && 0 === e.indexOf("touch") ? function(t, e, i) {
                var n = t["_leaflet_" + e + i];
                "touchstart" === e ? t.removeEventListener(kt, n, !1) : "touchmove" === e ? t.removeEventListener(At, n, !1) : "touchend" === e && (t.removeEventListener(Ot, n, !1), t.removeEventListener(It, n, !1))
            }(t, e, o) : wt && "dblclick" === e && !Ee() ? function(t, e) {
                var i = t[Yt + Gt + e],
                    n = t[Yt + Kt + e],
                    o = t[Yt + "dblclick" + e];
                t.removeEventListener(Gt, i, !!Tt && {
                    passive: !1
                }), t.removeEventListener(Kt, n, !!Tt && {
                    passive: !1
                }), t.removeEventListener("dblclick", o, !1)
            }(t, o) : "removeEventListener" in t ? t.removeEventListener(Me[e] || e, s, !1) : "detachEvent" in t && t.detachEvent("on" + e, s), t[Te][o] = null
        }

        function ke(t) {
            return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0, Fe(t), this
        }

        function Ae(t) {
            return ze(t, "wheel", ke), this
        }

        function Oe(t) {
            return Le(t, "mousedown touchstart dblclick", ke), ze(t, "click", De), this
        }

        function Ie(t) {
            return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this
        }

        function Ze(t) {
            return Ie(t), ke(t), this
        }

        function Be(t, e) {
            if (!e) return new k(t.clientX, t.clientY);
            var i = be(e),
                n = i.boundingClientRect;
            return new k((t.clientX - n.left) / i.x - e.clientLeft, (t.clientY - n.top) / i.y - e.clientTop)
        }
        var Re = lt && st ? 2 * window.devicePixelRatio : at ? window.devicePixelRatio : 1;

        function je(t) {
            return Q ? t.wheelDeltaY / 2 : t.deltaY && 0 === t.deltaMode ? -t.deltaY / Re : t.deltaY && 1 === t.deltaMode ? 20 * -t.deltaY : t.deltaY && 2 === t.deltaMode ? 60 * -t.deltaY : t.deltaX || t.deltaZ ? 0 : t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : t.detail && Math.abs(t.detail) < 32765 ? 20 * -t.detail : t.detail ? t.detail / -32765 * 60 : 0
        }
        var Ne = {};

        function De(t) {
            Ne[t.type] = !0
        }

        function Fe(t) {
            var e = Ne[t.type];
            return Ne[t.type] = !1, e
        }

        function We(t, e) {
            var i = e.relatedTarget;
            if (!i) return !0;
            try {
                for (; i && i !== t;) i = i.parentNode
            } catch (t) {
                return !1
            }
            return i !== t
        }
        var He = {
                on: Le,
                off: Se,
                stopPropagation: ke,
                disableScrollPropagation: Ae,
                disableClickPropagation: Oe,
                preventDefault: Ie,
                stop: Ze,
                getMousePosition: Be,
                getWheelDelta: je,
                fakeStop: De,
                skipped: Fe,
                isExternalTarget: We,
                addListener: Le,
                removeListener: Se
            },
            qe = C.extend({
                run: function(t, e, i, n) {
                    this.stop(), this._el = t, this._inProgress = !0, this._duration = i || .25, this._easeOutPower = 1 / Math.max(n || .5, .2), this._startPos = _e(t), this._offset = e.subtract(this._startPos), this._startTime = +new Date, this.fire("start"), this._animate()
                },
                stop: function() {
                    this._inProgress && (this._step(!0), this._complete())
                },
                _animate: function() {
                    this._animId = T(this._animate, this), this._step()
                },
                _step: function(t) {
                    var e = +new Date - this._startTime,
                        i = 1e3 * this._duration;
                    e < i ? this._runFrame(this._easeOut(e / i), t) : (this._runFrame(1), this._complete())
                },
                _runFrame: function(t, e) {
                    var i = this._startPos.add(this._offset.multiplyBy(t));
                    e && i._round(), fe(this._el, i), this.fire("step")
                },
                _complete: function() {
                    S(this._animId), this._inProgress = !1, this.fire("end")
                },
                _easeOut: function(t) {
                    return 1 - Math.pow(1 - t, this._easeOutPower)
                }
            }),
            Ue = C.extend({
                options: {
                    crs: V,
                    center: void 0,
                    zoom: void 0,
                    minZoom: void 0,
                    maxZoom: void 0,
                    layers: [],
                    maxBounds: void 0,
                    renderer: void 0,
                    zoomAnimation: !0,
                    zoomAnimationThreshold: 4,
                    fadeAnimation: !0,
                    markerZoomAnimation: !0,
                    transform3DLimit: 8388608,
                    zoomSnap: 1,
                    zoomDelta: 1,
                    trackResize: !0
                },
                initialize: function(t, e) {
                    e = d(this, e), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this._initContainer(t), this._initLayout(), this._onResize = n(this._onResize, this), this._initEvents(), e.maxBounds && this.setMaxBounds(e.maxBounds), void 0 !== e.zoom && (this._zoom = this._limitZoom(e.zoom)), e.center && void 0 !== e.zoom && this.setView(N(e.center), e.zoom, {
                        reset: !0
                    }), this.callInitHooks(), this._zoomAnimated = Jt && _t && !bt && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), Le(this._proxy, $t, this._catchTransitionEnd, this)), this._addLayers(this.options.layers)
                },
                setView: function(t, i, n) {
                    return i = void 0 === i ? this._zoom : this._limitZoom(i), t = this._limitCenter(N(t), i, this.options.maxBounds), n = n || {}, this._stop(), this._loaded && !n.reset && !0 !== n && (void 0 !== n.animate && (n.zoom = e({
                        animate: n.animate
                    }, n.zoom), n.pan = e({
                        animate: n.animate,
                        duration: n.duration
                    }, n.pan)), this._zoom !== i ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, i, n.zoom) : this._tryAnimatedPan(t, n.pan)) ? (clearTimeout(this._sizeTimer), this) : (this._resetView(t, i), this)
                },
                setZoom: function(t, e) {
                    return this._loaded ? this.setView(this.getCenter(), t, {
                        zoom: e
                    }) : (this._zoom = t, this)
                },
                zoomIn: function(t, e) {
                    return t = t || (_t ? this.options.zoomDelta : 1), this.setZoom(this._zoom + t, e)
                },
                zoomOut: function(t, e) {
                    return t = t || (_t ? this.options.zoomDelta : 1), this.setZoom(this._zoom - t, e)
                },
                setZoomAround: function(t, e, i) {
                    var n = this.getZoomScale(e),
                        o = this.getSize().divideBy(2),
                        r = (t instanceof k ? t : this.latLngToContainerPoint(t)).subtract(o).multiplyBy(1 - 1 / n),
                        s = this.containerPointToLatLng(o.add(r));
                    return this.setView(s, e, {
                        zoom: i
                    })
                },
                _getBoundsCenterZoom: function(t, e) {
                    e = e || {}, t = t.getBounds ? t.getBounds() : R(t);
                    var i = O(e.paddingTopLeft || e.padding || [0, 0]),
                        n = O(e.paddingBottomRight || e.padding || [0, 0]),
                        o = this.getBoundsZoom(t, !1, i.add(n));
                    if ((o = "number" == typeof e.maxZoom ? Math.min(e.maxZoom, o) : o) === 1 / 0) return {
                        center: t.getCenter(),
                        zoom: o
                    };
                    var r = n.subtract(i).divideBy(2),
                        s = this.project(t.getSouthWest(), o),
                        a = this.project(t.getNorthEast(), o);
                    return {
                        center: this.unproject(s.add(a).divideBy(2).add(r), o),
                        zoom: o
                    }
                },
                fitBounds: function(t, e) {
                    if (!(t = R(t)).isValid()) throw new Error("Bounds are not valid.");
                    var i = this._getBoundsCenterZoom(t, e);
                    return this.setView(i.center, i.zoom, e)
                },
                fitWorld: function(t) {
                    return this.fitBounds([
                        [-90, -180],
                        [90, 180]
                    ], t)
                },
                panTo: function(t, e) {
                    return this.setView(t, this._zoom, {
                        pan: e
                    })
                },
                panBy: function(t, e) {
                    if (e = e || {}, !(t = O(t).round()).x && !t.y) return this.fire("moveend");
                    if (!0 !== e.animate && !this.getSize().contains(t)) return this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()), this;
                    if (this._panAnim || (this._panAnim = new qe, this._panAnim.on({
                        step: this._onPanTransitionStep,
                        end: this._onPanTransitionEnd
                    }, this)), e.noMoveStart || this.fire("movestart"), !1 !== e.animate) {
                        ae(this._mapPane, "leaflet-pan-anim");
                        var i = this._getMapPanePos().subtract(t).round();
                        this._panAnim.run(this._mapPane, i, e.duration || .25, e.easeLinearity)
                    } else this._rawPanBy(t), this.fire("move").fire("moveend");
                    return this
                },
                flyTo: function(t, e, i) {
                    if (!1 === (i = i || {}).animate || !_t) return this.setView(t, e, i);
                    this._stop();
                    var n = this.project(this.getCenter()),
                        o = this.project(t),
                        r = this.getSize(),
                        s = this._zoom;
                    t = N(t), e = void 0 === e ? s : e;
                    var a = Math.max(r.x, r.y),
                        h = a * this.getZoomScale(s, e),
                        u = o.distanceTo(n) || 1;

                    function c(t) {
                        var e = (h * h - a * a + 2.0164 * (t ? -1 : 1) * 2.0164 * u * u) / (2 * (t ? h : a) * 2.0164 * u),
                            i = Math.sqrt(e * e + 1) - e;
                        return i < 1e-9 ? -18 : Math.log(i)
                    }

                    function l(t) {
                        return (Math.exp(t) - Math.exp(-t)) / 2
                    }

                    function d(t) {
                        return (Math.exp(t) + Math.exp(-t)) / 2
                    }
                    var p = c(0);

                    function f(t) {
                        return a * (d(p) * (l(e = p + 1.42 * t) / d(e)) - l(p)) / 2.0164;
                        var e
                    }
                    var _ = Date.now(),
                        m = (c(1) - p) / 1.42,
                        v = i.duration ? 1e3 * i.duration : 1e3 * m * .8;
                    return this._moveStart(!0, i.noMoveStart),
                        function i() {
                            var r = (Date.now() - _) / v,
                                h = function(t) {
                                    return 1 - Math.pow(1 - t, 1.5)
                                }(r) * m;
                            r <= 1 ? (this._flyToFrame = T(i, this), this._move(this.unproject(n.add(o.subtract(n).multiplyBy(f(h) / u)), s), this.getScaleZoom(a / function(t) {
                                return a * (d(p) / d(p + 1.42 * t))
                            }(h), s), {
                                flyTo: !0
                            })) : this._move(t, e)._moveEnd(!0)
                        }.call(this), this
                },
                flyToBounds: function(t, e) {
                    var i = this._getBoundsCenterZoom(t, e);
                    return this.flyTo(i.center, i.zoom, e)
                },
                setMaxBounds: function(t) {
                    return (t = R(t)).isValid() ? (this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this.options.maxBounds = t, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this.off("moveend", this._panInsideMaxBounds))
                },
                setMinZoom: function(t) {
                    var e = this.options.minZoom;
                    return this.options.minZoom = t, this._loaded && e !== t && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(t) : this
                },
                setMaxZoom: function(t) {
                    var e = this.options.maxZoom;
                    return this.options.maxZoom = t, this._loaded && e !== t && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(t) : this
                },
                panInsideBounds: function(t, e) {
                    this._enforcingBounds = !0;
                    var i = this.getCenter(),
                        n = this._limitCenter(i, this._zoom, R(t));
                    return i.equals(n) || this.panTo(n, e), this._enforcingBounds = !1, this
                },
                panInside: function(t, e) {
                    var i = O((e = e || {}).paddingTopLeft || e.padding || [0, 0]),
                        n = O(e.paddingBottomRight || e.padding || [0, 0]),
                        o = this.getCenter(),
                        r = this.project(o),
                        s = this.project(t),
                        a = this.getPixelBounds(),
                        h = a.getSize().divideBy(2),
                        u = Z([a.min.add(i), a.max.subtract(n)]);
                    if (!u.contains(s)) {
                        this._enforcingBounds = !0;
                        var c = r.subtract(s),
                            l = O(s.x + c.x, s.y + c.y);
                        (s.x < u.min.x || s.x > u.max.x) && (l.x = r.x - c.x, c.x > 0 ? l.x += h.x - i.x : l.x -= h.x - n.x), (s.y < u.min.y || s.y > u.max.y) && (l.y = r.y - c.y, c.y > 0 ? l.y += h.y - i.y : l.y -= h.y - n.y), this.panTo(this.unproject(l), e), this._enforcingBounds = !1
                    }
                    return this
                },
                invalidateSize: function(t) {
                    if (!this._loaded) return this;
                    t = e({
                        animate: !1,
                        pan: !0
                    }, !0 === t ? {
                        animate: !0
                    } : t);
                    var i = this.getSize();
                    this._sizeChanged = !0, this._lastCenter = null;
                    var o = this.getSize(),
                        r = i.divideBy(2).round(),
                        s = o.divideBy(2).round(),
                        a = r.subtract(s);
                    return a.x || a.y ? (t.animate && t.pan ? this.panBy(a) : (t.pan && this._rawPanBy(a), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(n(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
                        oldSize: i,
                        newSize: o
                    })) : this
                },
                stop: function() {
                    return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop()
                },
                locate: function(t) {
                    if (t = this._locateOptions = e({
                        timeout: 1e4,
                        watch: !1
                    }, t), !("geolocation" in navigator)) return this._handleGeolocationError({
                        code: 0,
                        message: "Geolocation not supported."
                    }), this;
                    var i = n(this._handleGeolocationResponse, this),
                        o = n(this._handleGeolocationError, this);
                    return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(i, o, t) : navigator.geolocation.getCurrentPosition(i, o, t), this
                },
                stopLocate: function() {
                    return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this
                },
                _handleGeolocationError: function(t) {
                    var e = t.code,
                        i = t.message || (1 === e ? "permission denied" : 2 === e ? "position unavailable" : "timeout");
                    this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
                        code: e,
                        message: "Geolocation error: " + i + "."
                    })
                },
                _handleGeolocationResponse: function(t) {
                    var e = new j(t.coords.latitude, t.coords.longitude),
                        i = e.toBounds(2 * t.coords.accuracy),
                        n = this._locateOptions;
                    if (n.setView) {
                        var o = this.getBoundsZoom(i);
                        this.setView(e, n.maxZoom ? Math.min(o, n.maxZoom) : o)
                    }
                    var r = {
                        latlng: e,
                        bounds: i,
                        timestamp: t.timestamp
                    };
                    for (var s in t.coords) "number" == typeof t.coords[s] && (r[s] = t.coords[s]);
                    this.fire("locationfound", r)
                },
                addHandler: function(t, e) {
                    if (!e) return this;
                    var i = this[t] = new e(this);
                    return this._handlers.push(i), this.options[t] && i.enable(), this
                },
                remove: function() {
                    if (this._initEvents(!0), this.off("moveend", this._panInsideMaxBounds), this._containerId !== this._container._leaflet_id) throw new Error("Map container is being reused by another instance");
                    try {
                        delete this._container._leaflet_id, delete this._containerId
                    } catch (t) {
                        this._container._leaflet_id = void 0, this._containerId = void 0
                    }
                    var t;
                    for (t in void 0 !== this._locationWatchId && this.stopLocate(), this._stop(), ie(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (S(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload"), this._layers) this._layers[t].remove();
                    for (t in this._panes) ie(this._panes[t]);
                    return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this
                },
                createPane: function(t, e) {
                    var i = ee("div", "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""), e || this._mapPane);
                    return t && (this._panes[t] = i), i
                },
                getCenter: function() {
                    return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter : this.layerPointToLatLng(this._getCenterLayerPoint())
                },
                getZoom: function() {
                    return this._zoom
                },
                getBounds: function() {
                    var t = this.getPixelBounds();
                    return new B(this.unproject(t.getBottomLeft()), this.unproject(t.getTopRight()))
                },
                getMinZoom: function() {
                    return void 0 === this.options.minZoom ? this._layersMinZoom || 0 : this.options.minZoom
                },
                getMaxZoom: function() {
                    return void 0 === this.options.maxZoom ? void 0 === this._layersMaxZoom ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom
                },
                getBoundsZoom: function(t, e, i) {
                    t = R(t), i = O(i || [0, 0]);
                    var n = this.getZoom() || 0,
                        o = this.getMinZoom(),
                        r = this.getMaxZoom(),
                        s = t.getNorthWest(),
                        a = t.getSouthEast(),
                        h = this.getSize().subtract(i),
                        u = Z(this.project(a, n), this.project(s, n)).getSize(),
                        c = _t ? this.options.zoomSnap : 1,
                        l = h.x / u.x,
                        d = h.y / u.y,
                        p = e ? Math.max(l, d) : Math.min(l, d);
                    return n = this.getScaleZoom(p, n), c && (n = Math.round(n / (c / 100)) * (c / 100), n = e ? Math.ceil(n / c) * c : Math.floor(n / c) * c), Math.max(o, Math.min(r, n))
                },
                getSize: function() {
                    return this._size && !this._sizeChanged || (this._size = new k(this._container.clientWidth || 0, this._container.clientHeight || 0), this._sizeChanged = !1), this._size.clone()
                },
                getPixelBounds: function(t, e) {
                    var i = this._getTopLeftPoint(t, e);
                    return new I(i, i.add(this.getSize()))
                },
                getPixelOrigin: function() {
                    return this._checkIfLoaded(), this._pixelOrigin
                },
                getPixelWorldBounds: function(t) {
                    return this.options.crs.getProjectedBounds(void 0 === t ? this.getZoom() : t)
                },
                getPane: function(t) {
                    return "string" == typeof t ? this._panes[t] : t
                },
                getPanes: function() {
                    return this._panes
                },
                getContainer: function() {
                    return this._container
                },
                getZoomScale: function(t, e) {
                    var i = this.options.crs;
                    return e = void 0 === e ? this._zoom : e, i.scale(t) / i.scale(e)
                },
                getScaleZoom: function(t, e) {
                    var i = this.options.crs;
                    e = void 0 === e ? this._zoom : e;
                    var n = i.zoom(t * i.scale(e));
                    return isNaN(n) ? 1 / 0 : n
                },
                project: function(t, e) {
                    return e = void 0 === e ? this._zoom : e, this.options.crs.latLngToPoint(N(t), e)
                },
                unproject: function(t, e) {
                    return e = void 0 === e ? this._zoom : e, this.options.crs.pointToLatLng(O(t), e)
                },
                layerPointToLatLng: function(t) {
                    var e = O(t).add(this.getPixelOrigin());
                    return this.unproject(e)
                },
                latLngToLayerPoint: function(t) {
                    return this.project(N(t))._round()._subtract(this.getPixelOrigin())
                },
                wrapLatLng: function(t) {
                    return this.options.crs.wrapLatLng(N(t))
                },
                wrapLatLngBounds: function(t) {
                    return this.options.crs.wrapLatLngBounds(R(t))
                },
                distance: function(t, e) {
                    return this.options.crs.distance(N(t), N(e))
                },
                containerPointToLayerPoint: function(t) {
                    return O(t).subtract(this._getMapPanePos())
                },
                layerPointToContainerPoint: function(t) {
                    return O(t).add(this._getMapPanePos())
                },
                containerPointToLatLng: function(t) {
                    var e = this.containerPointToLayerPoint(O(t));
                    return this.layerPointToLatLng(e)
                },
                latLngToContainerPoint: function(t) {
                    return this.layerPointToContainerPoint(this.latLngToLayerPoint(N(t)))
                },
                mouseEventToContainerPoint: function(t) {
                    return Be(t, this._container)
                },
                mouseEventToLayerPoint: function(t) {
                    return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))
                },
                mouseEventToLatLng: function(t) {
                    return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))
                },
                _initContainer: function(t) {
                    var e = this._container = Qt(t);
                    if (!e) throw new Error("Map container not found.");
                    if (e._leaflet_id) throw new Error("Map container is already initialized.");
                    Le(e, "scroll", this._onScroll, this), this._containerId = r(e)
                },
                _initLayout: function() {
                    var t = this._container;
                    this._fadeAnimated = this.options.fadeAnimation && _t, ae(t, "leaflet-container" + (wt ? " leaflet-touch" : "") + (Lt ? " leaflet-retina" : "") + ($ ? " leaflet-oldie" : "") + (ht ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
                    var e = te(t, "position");
                    "absolute" !== e && "relative" !== e && "fixed" !== e && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos()
                },
                _initPanes: function() {
                    var t = this._panes = {};
                    this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), fe(this._mapPane, new k(0, 0)), this.createPane("tilePane"), this.createPane("shadowPane"), this.createPane("overlayPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (ae(t.markerPane, "leaflet-zoom-hide"), ae(t.shadowPane, "leaflet-zoom-hide"))
                },
                _resetView: function(t, e) {
                    fe(this._mapPane, new k(0, 0));
                    var i = !this._loaded;
                    this._loaded = !0, e = this._limitZoom(e), this.fire("viewprereset");
                    var n = this._zoom !== e;
                    this._moveStart(n, !1)._move(t, e)._moveEnd(n), this.fire("viewreset"), i && this.fire("load")
                },
                _moveStart: function(t, e) {
                    return t && this.fire("zoomstart"), e || this.fire("movestart"), this
                },
                _move: function(t, e, i) {
                    void 0 === e && (e = this._zoom);
                    var n = this._zoom !== e;
                    return this._zoom = e, this._lastCenter = t, this._pixelOrigin = this._getNewPixelOrigin(t), (n || i && i.pinch) && this.fire("zoom", i), this.fire("move", i)
                },
                _moveEnd: function(t) {
                    return t && this.fire("zoomend"), this.fire("moveend")
                },
                _stop: function() {
                    return S(this._flyToFrame), this._panAnim && this._panAnim.stop(), this
                },
                _rawPanBy: function(t) {
                    fe(this._mapPane, this._getMapPanePos().subtract(t))
                },
                _getZoomSpan: function() {
                    return this.getMaxZoom() - this.getMinZoom()
                },
                _panInsideMaxBounds: function() {
                    this._enforcingBounds || this.panInsideBounds(this.options.maxBounds)
                },
                _checkIfLoaded: function() {
                    if (!this._loaded) throw new Error("Set map center and zoom first.")
                },
                _initEvents: function(t) {
                    this._targets = {}, this._targets[r(this._container)] = this;
                    var e = t ? Se : Le;
                    e(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this), this.options.trackResize && e(window, "resize", this._onResize, this), _t && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd)
                },
                _onResize: function() {
                    S(this._resizeRequest), this._resizeRequest = T((function() {
                        this.invalidateSize({
                            debounceMoveend: !0
                        })
                    }), this)
                },
                _onScroll: function() {
                    this._container.scrollTop = 0, this._container.scrollLeft = 0
                },
                _onMoveEnd: function() {
                    var t = this._getMapPanePos();
                    Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom())
                },
                _findEventTargets: function(t, e) {
                    for (var i, n = [], o = "mouseout" === e || "mouseover" === e, s = t.target || t.srcElement, a = !1; s;) {
                        if ((i = this._targets[r(s)]) && ("click" === e || "preclick" === e) && !t._simulated && this._draggableMoved(i)) {
                            a = !0;
                            break
                        }
                        if (i && i.listens(e, !0)) {
                            if (o && !We(s, t)) break;
                            if (n.push(i), o) break
                        }
                        if (s === this._container) break;
                        s = s.parentNode
                    }
                    return n.length || a || o || !We(s, t) || (n = [this]), n
                },
                _handleDOMEvent: function(t) {
                    if (this._loaded && !Fe(t)) {
                        var e = t.type;
                        "mousedown" !== e && "keypress" !== e && "keyup" !== e && "keydown" !== e || ye(t.target || t.srcElement), this._fireDOMEvent(t, e)
                    }
                },
                _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
                _fireDOMEvent: function(t, i, n) {
                    if ("click" === t.type) {
                        var o = e({}, t);
                        o.type = "preclick", this._fireDOMEvent(o, o.type, n)
                    }
                    if (!t._stopped && (n = (n || []).concat(this._findEventTargets(t, i))).length) {
                        var r = n[0];
                        "contextmenu" === i && r.listens(i, !0) && Ie(t);
                        var s = {
                            originalEvent: t
                        };
                        if ("keypress" !== t.type && "keydown" !== t.type && "keyup" !== t.type) {
                            var a = r.getLatLng && (!r._radius || r._radius <= 10);
                            s.containerPoint = a ? this.latLngToContainerPoint(r.getLatLng()) : this.mouseEventToContainerPoint(t), s.layerPoint = this.containerPointToLayerPoint(s.containerPoint), s.latlng = a ? r.getLatLng() : this.layerPointToLatLng(s.layerPoint)
                        }
                        for (var h = 0; h < n.length; h++)
                            if (n[h].fire(i, s, !0), s.originalEvent._stopped || !1 === n[h].options.bubblingMouseEvents && -1 !== v(this._mouseEvents, i)) return
                    }
                },
                _draggableMoved: function(t) {
                    return (t = t.dragging && t.dragging.enabled() ? t : this).dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved()
                },
                _clearHandlers: function() {
                    for (var t = 0, e = this._handlers.length; t < e; t++) this._handlers[t].disable()
                },
                whenReady: function(t, e) {
                    return this._loaded ? t.call(e || this, {
                        target: this
                    }) : this.on("load", t, e), this
                },
                _getMapPanePos: function() {
                    return _e(this._mapPane) || new k(0, 0)
                },
                _moved: function() {
                    var t = this._getMapPanePos();
                    return t && !t.equals([0, 0])
                },
                _getTopLeftPoint: function(t, e) {
                    return (t && void 0 !== e ? this._getNewPixelOrigin(t, e) : this.getPixelOrigin()).subtract(this._getMapPanePos())
                },
                _getNewPixelOrigin: function(t, e) {
                    var i = this.getSize()._divideBy(2);
                    return this.project(t, e)._subtract(i)._add(this._getMapPanePos())._round()
                },
                _latLngToNewLayerPoint: function(t, e, i) {
                    var n = this._getNewPixelOrigin(i, e);
                    return this.project(t, e)._subtract(n)
                },
                _latLngBoundsToNewLayerBounds: function(t, e, i) {
                    var n = this._getNewPixelOrigin(i, e);
                    return Z([this.project(t.getSouthWest(), e)._subtract(n), this.project(t.getNorthWest(), e)._subtract(n), this.project(t.getSouthEast(), e)._subtract(n), this.project(t.getNorthEast(), e)._subtract(n)])
                },
                _getCenterLayerPoint: function() {
                    return this.containerPointToLayerPoint(this.getSize()._divideBy(2))
                },
                _getCenterOffset: function(t) {
                    return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())
                },
                _limitCenter: function(t, e, i) {
                    if (!i) return t;
                    var n = this.project(t, e),
                        o = this.getSize().divideBy(2),
                        r = new I(n.subtract(o), n.add(o)),
                        s = this._getBoundsOffset(r, i, e);
                    return s.round().equals([0, 0]) ? t : this.unproject(n.add(s), e)
                },
                _limitOffset: function(t, e) {
                    if (!e) return t;
                    var i = this.getPixelBounds(),
                        n = new I(i.min.add(t), i.max.add(t));
                    return t.add(this._getBoundsOffset(n, e))
                },
                _getBoundsOffset: function(t, e, i) {
                    var n = Z(this.project(e.getNorthEast(), i), this.project(e.getSouthWest(), i)),
                        o = n.min.subtract(t.min),
                        r = n.max.subtract(t.max);
                    return new k(this._rebound(o.x, -r.x), this._rebound(o.y, -r.y))
                },
                _rebound: function(t, e) {
                    return t + e > 0 ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e))
                },
                _limitZoom: function(t) {
                    var e = this.getMinZoom(),
                        i = this.getMaxZoom(),
                        n = _t ? this.options.zoomSnap : 1;
                    return n && (t = Math.round(t / n) * n), Math.max(e, Math.min(i, t))
                },
                _onPanTransitionStep: function() {
                    this.fire("move")
                },
                _onPanTransitionEnd: function() {
                    he(this._mapPane, "leaflet-pan-anim"), this.fire("moveend")
                },
                _tryAnimatedPan: function(t, e) {
                    var i = this._getCenterOffset(t)._trunc();
                    return !(!0 !== (e && e.animate) && !this.getSize().contains(i) || (this.panBy(i, e), 0))
                },
                _createAnimProxy: function() {
                    var t = this._proxy = ee("div", "leaflet-proxy leaflet-zoom-animated");
                    this._panes.mapPane.appendChild(t), this.on("zoomanim", (function(t) {
                        var e = Xt,
                            i = this._proxy.style[e];
                        pe(this._proxy, this.project(t.center, t.zoom), this.getZoomScale(t.zoom, 1)), i === this._proxy.style[e] && this._animatingZoom && this._onZoomTransitionEnd()
                    }), this), this.on("load moveend", this._animMoveEnd, this), this._on("unload", this._destroyAnimProxy, this)
                },
                _destroyAnimProxy: function() {
                    ie(this._proxy), this.off("load moveend", this._animMoveEnd, this), delete this._proxy
                },
                _animMoveEnd: function() {
                    var t = this.getCenter(),
                        e = this.getZoom();
                    pe(this._proxy, this.project(t, e), this.getZoomScale(e, 1))
                },
                _catchTransitionEnd: function(t) {
                    this._animatingZoom && t.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd()
                },
                _nothingToAnimate: function() {
                    return !this._container.getElementsByClassName("leaflet-zoom-animated").length
                },
                _tryAnimatedZoom: function(t, e, i) {
                    if (this._animatingZoom) return !0;
                    if (i = i || {}, !this._zoomAnimated || !1 === i.animate || this._nothingToAnimate() || Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold) return !1;
                    var n = this.getZoomScale(e),
                        o = this._getCenterOffset(t)._divideBy(1 - 1 / n);
                    return !(!0 !== i.animate && !this.getSize().contains(o) || (T((function() {
                        this._moveStart(!0, !1)._animateZoom(t, e, !0)
                    }), this), 0))
                },
                _animateZoom: function(t, e, i, o) {
                    this._mapPane && (i && (this._animatingZoom = !0, this._animateToCenter = t, this._animateToZoom = e, ae(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
                        center: t,
                        zoom: e,
                        noUpdate: o
                    }), setTimeout(n(this._onZoomTransitionEnd, this), 250))
                },
                _onZoomTransitionEnd: function() {
                    this._animatingZoom && (this._mapPane && he(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom), T((function() {
                        this._moveEnd(!0)
                    }), this))
                }
            }),
            Ve = M.extend({
                options: {
                    position: "topright"
                },
                initialize: function(t) {
                    d(this, t)
                },
                getPosition: function() {
                    return this.options.position
                },
                setPosition: function(t) {
                    var e = this._map;
                    return e && e.removeControl(this), this.options.position = t, e && e.addControl(this), this
                },
                getContainer: function() {
                    return this._container
                },
                addTo: function(t) {
                    this.remove(), this._map = t;
                    var e = this._container = this.onAdd(t),
                        i = this.getPosition(),
                        n = t._controlCorners[i];
                    return ae(e, "leaflet-control"), -1 !== i.indexOf("bottom") ? n.insertBefore(e, n.firstChild) : n.appendChild(e), this._map.on("unload", this.remove, this), this
                },
                remove: function() {
                    return this._map ? (ie(this._container), this.onRemove && this.onRemove(this._map), this._map.off("unload", this.remove, this), this._map = null, this) : this
                },
                _refocusOnMap: function(t) {
                    this._map && t && t.screenX > 0 && t.screenY > 0 && this._map.getContainer().focus()
                }
            }),
            Ge = function(t) {
                return new Ve(t)
            };
        Ue.include({
            addControl: function(t) {
                return t.addTo(this), this
            },
            removeControl: function(t) {
                return t.remove(), this
            },
            _initControlPos: function() {
                var t = this._controlCorners = {},
                    e = "leaflet-",
                    i = this._controlContainer = ee("div", e + "control-container", this._container);

                function n(n, o) {
                    var r = e + n + " " + e + o;
                    t[n + o] = ee("div", r, i)
                }
                n("top", "left"), n("top", "right"), n("bottom", "left"), n("bottom", "right")
            },
            _clearControlPos: function() {
                for (var t in this._controlCorners) ie(this._controlCorners[t]);
                ie(this._controlContainer), delete this._controlCorners, delete this._controlContainer
            }
        });
        var Ke = Ve.extend({
                options: {
                    collapsed: !0,
                    position: "topright",
                    autoZIndex: !0,
                    hideSingleBase: !1,
                    sortLayers: !1,
                    sortFunction: function(t, e, i, n) {
                        return i < n ? -1 : n < i ? 1 : 0
                    }
                },
                initialize: function(t, e, i) {
                    for (var n in d(this, i), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1, t) this._addLayer(t[n], n);
                    for (n in e) this._addLayer(e[n], n, !0)
                },
                onAdd: function(t) {
                    this._initLayout(), this._update(), this._map = t, t.on("zoomend", this._checkDisabledLayers, this);
                    for (var e = 0; e < this._layers.length; e++) this._layers[e].layer.on("add remove", this._onLayerChange, this);
                    return this._container
                },
                addTo: function(t) {
                    return Ve.prototype.addTo.call(this, t), this._expandIfNotCollapsed()
                },
                onRemove: function() {
                    this._map.off("zoomend", this._checkDisabledLayers, this);
                    for (var t = 0; t < this._layers.length; t++) this._layers[t].layer.off("add remove", this._onLayerChange, this)
                },
                addBaseLayer: function(t, e) {
                    return this._addLayer(t, e), this._map ? this._update() : this
                },
                addOverlay: function(t, e) {
                    return this._addLayer(t, e, !0), this._map ? this._update() : this
                },
                removeLayer: function(t) {
                    t.off("add remove", this._onLayerChange, this);
                    var e = this._getLayer(r(t));
                    return e && this._layers.splice(this._layers.indexOf(e), 1), this._map ? this._update() : this
                },
                expand: function() {
                    ae(this._container, "leaflet-control-layers-expanded"), this._section.style.height = null;
                    var t = this._map.getSize().y - (this._container.offsetTop + 50);
                    return t < this._section.clientHeight ? (ae(this._section, "leaflet-control-layers-scrollbar"), this._section.style.height = t + "px") : he(this._section, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this
                },
                collapse: function() {
                    return he(this._container, "leaflet-control-layers-expanded"), this
                },
                _initLayout: function() {
                    var t = "leaflet-control-layers",
                        e = this._container = ee("div", t),
                        i = this.options.collapsed;
                    e.setAttribute("aria-haspopup", !0), Oe(e), Ae(e);
                    var n = this._section = ee("section", t + "-list");
                    i && (this._map.on("click", this.collapse, this), et || Le(e, {
                        mouseenter: this.expand,
                        mouseleave: this.collapse
                    }, this));
                    var o = this._layersLink = ee("a", t + "-toggle", e);
                    o.href = "#", o.title = "Layers", wt ? (Le(o, "click", Ze), Le(o, "click", this.expand, this)) : Le(o, "focus", this.expand, this), i || this.expand(), this._baseLayersList = ee("div", t + "-base", n), this._separator = ee("div", t + "-separator", n), this._overlaysList = ee("div", t + "-overlays", n), e.appendChild(n)
                },
                _getLayer: function(t) {
                    for (var e = 0; e < this._layers.length; e++)
                        if (this._layers[e] && r(this._layers[e].layer) === t) return this._layers[e]
                },
                _addLayer: function(t, e, i) {
                    this._map && t.on("add remove", this._onLayerChange, this), this._layers.push({
                        layer: t,
                        name: e,
                        overlay: i
                    }), this.options.sortLayers && this._layers.sort(n((function(t, e) {
                        return this.options.sortFunction(t.layer, e.layer, t.name, e.name)
                    }), this)), this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed()
                },
                _update: function() {
                    if (!this._container) return this;
                    ne(this._baseLayersList), ne(this._overlaysList), this._layerControlInputs = [];
                    var t, e, i, n, o = 0;
                    for (i = 0; i < this._layers.length; i++) n = this._layers[i], this._addItem(n), e = e || n.overlay, t = t || !n.overlay, o += n.overlay ? 0 : 1;
                    return this.options.hideSingleBase && (t = t && o > 1, this._baseLayersList.style.display = t ? "" : "none"), this._separator.style.display = e && t ? "" : "none", this
                },
                _onLayerChange: function(t) {
                    this._handlingClick || this._update();
                    var e = this._getLayer(r(t.target)),
                        i = e.overlay ? "add" === t.type ? "overlayadd" : "overlayremove" : "add" === t.type ? "baselayerchange" : null;
                    i && this._map.fire(i, e)
                },
                _createRadioElement: function(t, e) {
                    var i = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (e ? ' checked="checked"' : "") + "/>",
                        n = document.createElement("div");
                    return n.innerHTML = i, n.firstChild
                },
                _addItem: function(t) {
                    var e, i = document.createElement("label"),
                        n = this._map.hasLayer(t.layer);
                    t.overlay ? ((e = document.createElement("input")).type = "checkbox", e.className = "leaflet-control-layers-selector", e.defaultChecked = n) : e = this._createRadioElement("leaflet-base-layers_" + r(this), n), this._layerControlInputs.push(e), e.layerId = r(t.layer), Le(e, "click", this._onInputClick, this);
                    var o = document.createElement("span");
                    o.innerHTML = " " + t.name;
                    var s = document.createElement("div");
                    return i.appendChild(s), s.appendChild(e), s.appendChild(o), (t.overlay ? this._overlaysList : this._baseLayersList).appendChild(i), this._checkDisabledLayers(), i
                },
                _onInputClick: function() {
                    var t, e, i = this._layerControlInputs,
                        n = [],
                        o = [];
                    this._handlingClick = !0;
                    for (var r = i.length - 1; r >= 0; r--) t = i[r], e = this._getLayer(t.layerId).layer, t.checked ? n.push(e) : t.checked || o.push(e);
                    for (r = 0; r < o.length; r++) this._map.hasLayer(o[r]) && this._map.removeLayer(o[r]);
                    for (r = 0; r < n.length; r++) this._map.hasLayer(n[r]) || this._map.addLayer(n[r]);
                    this._handlingClick = !1, this._refocusOnMap()
                },
                _checkDisabledLayers: function() {
                    for (var t, e, i = this._layerControlInputs, n = this._map.getZoom(), o = i.length - 1; o >= 0; o--) t = i[o], e = this._getLayer(t.layerId).layer, t.disabled = void 0 !== e.options.minZoom && n < e.options.minZoom || void 0 !== e.options.maxZoom && n > e.options.maxZoom
                },
                _expandIfNotCollapsed: function() {
                    return this._map && !this.options.collapsed && this.expand(), this
                },
                _expand: function() {
                    return this.expand()
                },
                _collapse: function() {
                    return this.collapse()
                }
            }),
            Ye = Ve.extend({
                options: {
                    position: "topleft",
                    zoomInText: "+",
                    zoomInTitle: "Zoom in",
                    zoomOutText: "&#x2212;",
                    zoomOutTitle: "Zoom out"
                },
                onAdd: function(t) {
                    var e = "leaflet-control-zoom",
                        i = ee("div", e + " leaflet-bar"),
                        n = this.options;
                    return this._zoomInButton = this._createButton(n.zoomInText, n.zoomInTitle, e + "-in", i, this._zoomIn), this._zoomOutButton = this._createButton(n.zoomOutText, n.zoomOutTitle, e + "-out", i, this._zoomOut), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), i
                },
                onRemove: function(t) {
                    t.off("zoomend zoomlevelschange", this._updateDisabled, this)
                },
                disable: function() {
                    return this._disabled = !0, this._updateDisabled(), this
                },
                enable: function() {
                    return this._disabled = !1, this._updateDisabled(), this
                },
                _zoomIn: function(t) {
                    !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
                },
                _zoomOut: function(t) {
                    !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
                },
                _createButton: function(t, e, i, n, o) {
                    var r = ee("a", i, n);
                    return r.innerHTML = t, r.href = "#", r.title = e, r.setAttribute("role", "button"), r.setAttribute("aria-label", e), Oe(r), Le(r, "click", Ze), Le(r, "click", o, this), Le(r, "click", this._refocusOnMap, this), r
                },
                _updateDisabled: function() {
                    var t = this._map,
                        e = "leaflet-disabled";
                    he(this._zoomInButton, e), he(this._zoomOutButton, e), (this._disabled || t._zoom === t.getMinZoom()) && ae(this._zoomOutButton, e), (this._disabled || t._zoom === t.getMaxZoom()) && ae(this._zoomInButton, e)
                }
            });
        Ue.mergeOptions({
            zoomControl: !0
        }), Ue.addInitHook((function() {
            this.options.zoomControl && (this.zoomControl = new Ye, this.addControl(this.zoomControl))
        }));
        var Xe = Ve.extend({
                options: {
                    position: "bottomleft",
                    maxWidth: 100,
                    metric: !0,
                    imperial: !0
                },
                onAdd: function(t) {
                    var e = ee("div", "leaflet-control-scale"),
                        i = this.options;
                    return this._addScales(i, "leaflet-control-scale-line", e), t.on(i.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), e
                },
                onRemove: function(t) {
                    t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this)
                },
                _addScales: function(t, e, i) {
                    t.metric && (this._mScale = ee("div", e, i)), t.imperial && (this._iScale = ee("div", e, i))
                },
                _update: function() {
                    var t = this._map,
                        e = t.getSize().y / 2,
                        i = t.distance(t.containerPointToLatLng([0, e]), t.containerPointToLatLng([this.options.maxWidth, e]));
                    this._updateScales(i)
                },
                _updateScales: function(t) {
                    this.options.metric && t && this._updateMetric(t), this.options.imperial && t && this._updateImperial(t)
                },
                _updateMetric: function(t) {
                    var e = this._getRoundNum(t),
                        i = e < 1e3 ? e + " m" : e / 1e3 + " km";
                    this._updateScale(this._mScale, i, e / t)
                },
                _updateImperial: function(t) {
                    var e, i, n, o = 3.2808399 * t;
                    o > 5280 ? (e = o / 5280, i = this._getRoundNum(e), this._updateScale(this._iScale, i + " mi", i / e)) : (n = this._getRoundNum(o), this._updateScale(this._iScale, n + " ft", n / o))
                },
                _updateScale: function(t, e, i) {
                    t.style.width = Math.round(this.options.maxWidth * i) + "px", t.innerHTML = e
                },
                _getRoundNum: function(t) {
                    var e = Math.pow(10, (Math.floor(t) + "").length - 1),
                        i = t / e;
                    return e * (i = i >= 10 ? 10 : i >= 5 ? 5 : i >= 3 ? 3 : i >= 2 ? 2 : 1)
                }
            }),
            Je = Ve.extend({
                options: {
                    position: "bottomright",
                    prefix: '<a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
                },
                initialize: function(t) {
                    d(this, t), this._attributions = {}
                },
                onAdd: function(t) {
                    for (var e in t.attributionControl = this, this._container = ee("div", "leaflet-control-attribution"), Oe(this._container), t._layers) t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
                    return this._update(), this._container
                },
                setPrefix: function(t) {
                    return this.options.prefix = t, this._update(), this
                },
                addAttribution: function(t) {
                    return t ? (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update(), this) : this
                },
                removeAttribution: function(t) {
                    return t ? (this._attributions[t] && (this._attributions[t]--, this._update()), this) : this
                },
                _update: function() {
                    if (this._map) {
                        var t = [];
                        for (var e in this._attributions) this._attributions[e] && t.push(e);
                        var i = [];
                        this.options.prefix && i.push(this.options.prefix), t.length && i.push(t.join(", ")), this._container.innerHTML = i.join(" | ")
                    }
                }
            });
        Ue.mergeOptions({
            attributionControl: !0
        }), Ue.addInitHook((function() {
            this.options.attributionControl && (new Je).addTo(this)
        })), Ve.Layers = Ke, Ve.Zoom = Ye, Ve.Scale = Xe, Ve.Attribution = Je, Ge.layers = function(t, e, i) {
            return new Ke(t, e, i)
        }, Ge.zoom = function(t) {
            return new Ye(t)
        }, Ge.scale = function(t) {
            return new Xe(t)
        }, Ge.attribution = function(t) {
            return new Je(t)
        };
        var $e = M.extend({
            initialize: function(t) {
                this._map = t
            },
            enable: function() {
                return this._enabled || (this._enabled = !0, this.addHooks()), this
            },
            disable: function() {
                return this._enabled ? (this._enabled = !1, this.removeHooks(), this) : this
            },
            enabled: function() {
                return !!this._enabled
            }
        });
        $e.addTo = function(t, e) {
            return t.addHandler(e, this), this
        };
        var Qe, ti = {
                Events: z
            },
            ei = wt ? "touchstart mousedown" : "mousedown",
            ii = {
                mousedown: "mouseup",
                touchstart: "touchend",
                pointerdown: "touchend",
                MSPointerDown: "touchend"
            },
            ni = {
                mousedown: "mousemove",
                touchstart: "touchmove",
                pointerdown: "touchmove",
                MSPointerDown: "touchmove"
            },
            oi = C.extend({
                options: {
                    clickTolerance: 3
                },
                initialize: function(t, e, i, n) {
                    d(this, n), this._element = t, this._dragStartTarget = e || t, this._preventOutline = i
                },
                enable: function() {
                    this._enabled || (Le(this._dragStartTarget, ei, this._onDown, this), this._enabled = !0)
                },
                disable: function() {
                    this._enabled && (oi._dragging === this && this.finishDrag(), Se(this._dragStartTarget, ei, this._onDown, this), this._enabled = !1, this._moved = !1)
                },
                _onDown: function(t) {
                    if (!t._simulated && this._enabled && (this._moved = !1, !se(this._element, "leaflet-zoom-anim") && !(oi._dragging || t.shiftKey || 1 !== t.which && 1 !== t.button && !t.touches || (oi._dragging = this, this._preventOutline && ye(this._element), ve(), Wt(), this._moving)))) {
                        this.fire("down");
                        var e = t.touches ? t.touches[0] : t,
                            i = we(this._element);
                        this._startPoint = new k(e.clientX, e.clientY), this._parentScale = be(i), Le(document, ni[t.type], this._onMove, this), Le(document, ii[t.type], this._onUp, this)
                    }
                },
                _onMove: function(t) {
                    if (!t._simulated && this._enabled)
                        if (t.touches && t.touches.length > 1) this._moved = !0;
                        else {
                            var e = t.touches && 1 === t.touches.length ? t.touches[0] : t,
                                i = new k(e.clientX, e.clientY)._subtract(this._startPoint);
                            (i.x || i.y) && (Math.abs(i.x) + Math.abs(i.y) < this.options.clickTolerance || (i.x /= this._parentScale.x, i.y /= this._parentScale.y, Ie(t), this._moved || (this.fire("dragstart"), this._moved = !0, this._startPos = _e(this._element).subtract(i), ae(document.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), ae(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(i), this._moving = !0, S(this._animRequest), this._lastEvent = t, this._animRequest = T(this._updatePosition, this, !0)))
                        }
                },
                _updatePosition: function() {
                    var t = {
                        originalEvent: this._lastEvent
                    };
                    this.fire("predrag", t), fe(this._element, this._newPos), this.fire("drag", t)
                },
                _onUp: function(t) {
                    !t._simulated && this._enabled && this.finishDrag()
                },
                finishDrag: function() {
                    for (var t in he(document.body, "leaflet-dragging"), this._lastTarget && (he(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), ni) Se(document, ni[t], this._onMove, this), Se(document, ii[t], this._onUp, this);
                    ge(), Ht(), this._moved && this._moving && (S(this._animRequest), this.fire("dragend", {
                        distance: this._newPos.distanceTo(this._startPos)
                    })), this._moving = !1, oi._dragging = !1
                }
            });

        function ri(t, e) {
            if (!e || !t.length) return t.slice();
            var i = e * e;
            return t = function(t, e) {
                var i = t.length,
                    n = new(typeof Uint8Array != void 0 + "" ? Uint8Array : Array)(i);
                n[0] = n[i - 1] = 1,
                    function t(e, i, n, o, r) {
                        var s, a, h, u = 0;
                        for (a = o + 1; a <= r - 1; a++)(h = ci(e[a], e[o], e[r], !0)) > u && (s = a, u = h);
                        u > n && (i[s] = 1, t(e, i, n, o, s), t(e, i, n, s, r))
                    }(t, n, e, 0, i - 1);
                var o, r = [];
                for (o = 0; o < i; o++) n[o] && r.push(t[o]);
                return r
            }(t = function(t, e) {
                for (var i = [t[0]], n = 1, o = 0, r = t.length; n < r; n++) s = t[n], a = t[o], h = void 0, u = void 0, h = a.x - s.x, u = a.y - s.y, h * h + u * u > e && (i.push(t[n]), o = n);
                var s, a, h, u;
                return o < r - 1 && i.push(t[r - 1]), i
            }(t, i), i)
        }

        function si(t, e, i) {
            return Math.sqrt(ci(t, e, i, !0))
        }

        function ai(t, e, i, n, o) {
            var r, s, a, h = n ? Qe : ui(t, i),
                u = ui(e, i);
            for (Qe = u;;) {
                if (!(h | u)) return [t, e];
                if (h & u) return !1;
                a = ui(s = hi(t, e, r = h || u, i, o), i), r === h ? (t = s, h = a) : (e = s, u = a)
            }
        }

        function hi(t, e, i, n, o) {
            var r, s, a = e.x - t.x,
                h = e.y - t.y,
                u = n.min,
                c = n.max;
            return 8 & i ? (r = t.x + a * (c.y - t.y) / h, s = c.y) : 4 & i ? (r = t.x + a * (u.y - t.y) / h, s = u.y) : 2 & i ? (r = c.x, s = t.y + h * (c.x - t.x) / a) : 1 & i && (r = u.x, s = t.y + h * (u.x - t.x) / a), new k(r, s, o)
        }

        function ui(t, e) {
            var i = 0;
            return t.x < e.min.x ? i |= 1 : t.x > e.max.x && (i |= 2), t.y < e.min.y ? i |= 4 : t.y > e.max.y && (i |= 8), i
        }

        function ci(t, e, i, n) {
            var o, r = e.x,
                s = e.y,
                a = i.x - r,
                h = i.y - s,
                u = a * a + h * h;
            return u > 0 && ((o = ((t.x - r) * a + (t.y - s) * h) / u) > 1 ? (r = i.x, s = i.y) : o > 0 && (r += a * o, s += h * o)), a = t.x - r, h = t.y - s, n ? a * a + h * h : new k(r, s)
        }

        function li(t) {
            return !m(t[0]) || "object" != typeof t[0][0] && void 0 !== t[0][0]
        }

        function di(t) {
            return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), li(t)
        }
        var pi = {
            simplify: ri,
            pointToSegmentDistance: si,
            closestPointOnSegment: function(t, e, i) {
                return ci(t, e, i)
            },
            clipSegment: ai,
            _getEdgeIntersection: hi,
            _getBitCode: ui,
            _sqClosestPointOnSegment: ci,
            isFlat: li,
            _flat: di
        };

        function fi(t, e, i) {
            var n, o, r, s, a, h, u, c, l, d = [1, 4, 2, 8];
            for (o = 0, u = t.length; o < u; o++) t[o]._code = ui(t[o], e);
            for (s = 0; s < 4; s++) {
                for (c = d[s], n = [], o = 0, r = (u = t.length) - 1; o < u; r = o++) a = t[o], h = t[r], a._code & c ? h._code & c || ((l = hi(h, a, c, e, i))._code = ui(l, e), n.push(l)) : (h._code & c && ((l = hi(h, a, c, e, i))._code = ui(l, e), n.push(l)), n.push(a));
                t = n
            }
            return t
        }
        var _i = {
                clipPolygon: fi
            },
            mi = {
                project: function(t) {
                    return new k(t.lng, t.lat)
                },
                unproject: function(t) {
                    return new j(t.y, t.x)
                },
                bounds: new I([-180, -90], [180, 90])
            },
            vi = {
                R: 6378137,
                R_MINOR: 6356752.314245179,
                bounds: new I([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]),
                project: function(t) {
                    var e = Math.PI / 180,
                        i = this.R,
                        n = t.lat * e,
                        o = this.R_MINOR / i,
                        r = Math.sqrt(1 - o * o),
                        s = r * Math.sin(n),
                        a = Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - s) / (1 + s), r / 2);
                    return n = -i * Math.log(Math.max(a, 1e-10)), new k(t.lng * e * i, n)
                },
                unproject: function(t) {
                    for (var e, i = 180 / Math.PI, n = this.R, o = this.R_MINOR / n, r = Math.sqrt(1 - o * o), s = Math.exp(-t.y / n), a = Math.PI / 2 - 2 * Math.atan(s), h = 0, u = .1; h < 15 && Math.abs(u) > 1e-7; h++) e = r * Math.sin(a), e = Math.pow((1 - e) / (1 + e), r / 2), a += u = Math.PI / 2 - 2 * Math.atan(s * e) - a;
                    return new j(a * i, t.x * i / n)
                }
            },
            gi = {
                LonLat: mi,
                Mercator: vi,
                SphericalMercator: H
            },
            yi = e({}, W, {
                code: "EPSG:3395",
                projection: vi,
                transformation: function() {
                    var t = .5 / (Math.PI * vi.R);
                    return U(t, .5, -t, .5)
                }()
            }),
            xi = e({}, W, {
                code: "EPSG:4326",
                projection: mi,
                transformation: U(1 / 180, 1, -1 / 180, .5)
            }),
            wi = e({}, F, {
                projection: mi,
                transformation: U(1, 0, -1, 0),
                scale: function(t) {
                    return Math.pow(2, t)
                },
                zoom: function(t) {
                    return Math.log(t) / Math.LN2
                },
                distance: function(t, e) {
                    var i = e.lng - t.lng,
                        n = e.lat - t.lat;
                    return Math.sqrt(i * i + n * n)
                },
                infinite: !0
            });
        F.Earth = W, F.EPSG3395 = yi, F.EPSG3857 = V, F.EPSG900913 = G, F.EPSG4326 = xi, F.Simple = wi;
        var bi = C.extend({
            options: {
                pane: "overlayPane",
                attribution: null,
                bubblingMouseEvents: !0
            },
            addTo: function(t) {
                return t.addLayer(this), this
            },
            remove: function() {
                return this.removeFrom(this._map || this._mapToAdd)
            },
            removeFrom: function(t) {
                return t && t.removeLayer(this), this
            },
            getPane: function(t) {
                return this._map.getPane(t ? this.options[t] || t : this.options.pane)
            },
            addInteractiveTarget: function(t) {
                return this._map._targets[r(t)] = this, this
            },
            removeInteractiveTarget: function(t) {
                return delete this._map._targets[r(t)], this
            },
            getAttribution: function() {
                return this.options.attribution
            },
            _layerAdd: function(t) {
                var e = t.target;
                if (e.hasLayer(this)) {
                    if (this._map = e, this._zoomAnimated = e._zoomAnimated, this.getEvents) {
                        var i = this.getEvents();
                        e.on(i, this), this.once("remove", (function() {
                            e.off(i, this)
                        }), this)
                    }
                    this.onAdd(e), this.getAttribution && e.attributionControl && e.attributionControl.addAttribution(this.getAttribution()), this.fire("add"), e.fire("layeradd", {
                        layer: this
                    })
                }
            }
        });
        Ue.include({
            addLayer: function(t) {
                if (!t._layerAdd) throw new Error("The provided object is not a Layer.");
                var e = r(t);
                return this._layers[e] || (this._layers[e] = t, t._mapToAdd = this, t.beforeAdd && t.beforeAdd(this), this.whenReady(t._layerAdd, t)), this
            },
            removeLayer: function(t) {
                var e = r(t);
                return this._layers[e] ? (this._loaded && t.onRemove(this), t.getAttribution && this.attributionControl && this.attributionControl.removeAttribution(t.getAttribution()), delete this._layers[e], this._loaded && (this.fire("layerremove", {
                    layer: t
                }), t.fire("remove")), t._map = t._mapToAdd = null, this) : this
            },
            hasLayer: function(t) {
                return !!t && r(t) in this._layers
            },
            eachLayer: function(t, e) {
                for (var i in this._layers) t.call(e, this._layers[i]);
                return this
            },
            _addLayers: function(t) {
                for (var e = 0, i = (t = t ? m(t) ? t : [t] : []).length; e < i; e++) this.addLayer(t[e])
            },
            _addZoomLimit: function(t) {
                !isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[r(t)] = t, this._updateZoomLevels())
            },
            _removeZoomLimit: function(t) {
                var e = r(t);
                this._zoomBoundLayers[e] && (delete this._zoomBoundLayers[e], this._updateZoomLevels())
            },
            _updateZoomLevels: function() {
                var t = 1 / 0,
                    e = -1 / 0,
                    i = this._getZoomSpan();
                for (var n in this._zoomBoundLayers) {
                    var o = this._zoomBoundLayers[n].options;
                    t = void 0 === o.minZoom ? t : Math.min(t, o.minZoom), e = void 0 === o.maxZoom ? e : Math.max(e, o.maxZoom)
                }
                this._layersMaxZoom = e === -1 / 0 ? void 0 : e, this._layersMinZoom = t === 1 / 0 ? void 0 : t, i !== this._getZoomSpan() && this.fire("zoomlevelschange"), void 0 === this.options.maxZoom && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), void 0 === this.options.minZoom && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom)
            }
        });
        var Pi = bi.extend({
                initialize: function(t, e) {
                    var i, n;
                    if (d(this, e), this._layers = {}, t)
                        for (i = 0, n = t.length; i < n; i++) this.addLayer(t[i])
                },
                addLayer: function(t) {
                    var e = this.getLayerId(t);
                    return this._layers[e] = t, this._map && this._map.addLayer(t), this
                },
                removeLayer: function(t) {
                    var e = t in this._layers ? t : this.getLayerId(t);
                    return this._map && this._layers[e] && this._map.removeLayer(this._layers[e]), delete this._layers[e], this
                },
                hasLayer: function(t) {
                    return !!t && ("number" == typeof t ? t : this.getLayerId(t)) in this._layers
                },
                clearLayers: function() {
                    return this.eachLayer(this.removeLayer, this)
                },
                invoke: function(t) {
                    var e, i, n = Array.prototype.slice.call(arguments, 1);
                    for (e in this._layers)(i = this._layers[e])[t] && i[t].apply(i, n);
                    return this
                },
                onAdd: function(t) {
                    this.eachLayer(t.addLayer, t)
                },
                onRemove: function(t) {
                    this.eachLayer(t.removeLayer, t)
                },
                eachLayer: function(t, e) {
                    for (var i in this._layers) t.call(e, this._layers[i]);
                    return this
                },
                getLayer: function(t) {
                    return this._layers[t]
                },
                getLayers: function() {
                    var t = [];
                    return this.eachLayer(t.push, t), t
                },
                setZIndex: function(t) {
                    return this.invoke("setZIndex", t)
                },
                getLayerId: function(t) {
                    return r(t)
                }
            }),
            Li = Pi.extend({
                addLayer: function(t) {
                    return this.hasLayer(t) ? this : (t.addEventParent(this), Pi.prototype.addLayer.call(this, t), this.fire("layeradd", {
                        layer: t
                    }))
                },
                removeLayer: function(t) {
                    return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.removeEventParent(this), Pi.prototype.removeLayer.call(this, t), this.fire("layerremove", {
                        layer: t
                    })) : this
                },
                setStyle: function(t) {
                    return this.invoke("setStyle", t)
                },
                bringToFront: function() {
                    return this.invoke("bringToFront")
                },
                bringToBack: function() {
                    return this.invoke("bringToBack")
                },
                getBounds: function() {
                    var t = new B;
                    for (var e in this._layers) {
                        var i = this._layers[e];
                        t.extend(i.getBounds ? i.getBounds() : i.getLatLng())
                    }
                    return t
                }
            }),
            Ti = M.extend({
                options: {
                    popupAnchor: [0, 0],
                    tooltipAnchor: [0, 0]
                },
                initialize: function(t) {
                    d(this, t)
                },
                createIcon: function(t) {
                    return this._createIcon("icon", t)
                },
                createShadow: function(t) {
                    return this._createIcon("shadow", t)
                },
                _createIcon: function(t, e) {
                    var i = this._getIconUrl(t);
                    if (!i) {
                        if ("icon" === t) throw new Error("iconUrl not set in Icon options (see the docs).");
                        return null
                    }
                    var n = this._createImg(i, e && "IMG" === e.tagName ? e : null);
                    return this._setIconStyles(n, t), n
                },
                _setIconStyles: function(t, e) {
                    var i = this.options,
                        n = i[e + "Size"];
                    "number" == typeof n && (n = [n, n]);
                    var o = O(n),
                        r = O("shadow" === e && i.shadowAnchor || i.iconAnchor || o && o.divideBy(2, !0));
                    t.className = "leaflet-marker-" + e + " " + (i.className || ""), r && (t.style.marginLeft = -r.x + "px", t.style.marginTop = -r.y + "px"), o && (t.style.width = o.x + "px", t.style.height = o.y + "px")
                },
                _createImg: function(t, e) {
                    return (e = e || document.createElement("img")).src = t, e
                },
                _getIconUrl: function(t) {
                    return Lt && this.options[t + "RetinaUrl"] || this.options[t + "Url"]
                }
            }),
            Si = Ti.extend({
                options: {
                    iconUrl: "marker-icon.png",
                    iconRetinaUrl: "marker-icon-2x.png",
                    shadowUrl: "marker-shadow.png",
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                    popupAnchor: [1, -34],
                    tooltipAnchor: [16, -28],
                    shadowSize: [41, 41]
                },
                _getIconUrl: function(t) {
                    return Si.imagePath || (Si.imagePath = this._detectIconPath()), (this.options.imagePath || Si.imagePath) + Ti.prototype._getIconUrl.call(this, t)
                },
                _detectIconPath: function() {
                    var t = ee("div", "leaflet-default-icon-path", document.body),
                        e = te(t, "background-image") || te(t, "backgroundImage");
                    return document.body.removeChild(t), e = null === e || 0 !== e.indexOf("url") ? "" : e.replace(/^url\(["']?/, "").replace(/marker-icon\.png["']?\)$/, "")
                }
            }),
            Ei = $e.extend({
                initialize: function(t) {
                    this._marker = t
                },
                addHooks: function() {
                    var t = this._marker._icon;
                    this._draggable || (this._draggable = new oi(t, t, !0)), this._draggable.on({
                        dragstart: this._onDragStart,
                        predrag: this._onPreDrag,
                        drag: this._onDrag,
                        dragend: this._onDragEnd
                    }, this).enable(), ae(t, "leaflet-marker-draggable")
                },
                removeHooks: function() {
                    this._draggable.off({
                        dragstart: this._onDragStart,
                        predrag: this._onPreDrag,
                        drag: this._onDrag,
                        dragend: this._onDragEnd
                    }, this).disable(), this._marker._icon && he(this._marker._icon, "leaflet-marker-draggable")
                },
                moved: function() {
                    return this._draggable && this._draggable._moved
                },
                _adjustPan: function(t) {
                    var e = this._marker,
                        i = e._map,
                        n = this._marker.options.autoPanSpeed,
                        o = this._marker.options.autoPanPadding,
                        r = _e(e._icon),
                        s = i.getPixelBounds(),
                        a = i.getPixelOrigin(),
                        h = Z(s.min._subtract(a).add(o), s.max._subtract(a).subtract(o));
                    if (!h.contains(r)) {
                        var u = O((Math.max(h.max.x, r.x) - h.max.x) / (s.max.x - h.max.x) - (Math.min(h.min.x, r.x) - h.min.x) / (s.min.x - h.min.x), (Math.max(h.max.y, r.y) - h.max.y) / (s.max.y - h.max.y) - (Math.min(h.min.y, r.y) - h.min.y) / (s.min.y - h.min.y)).multiplyBy(n);
                        i.panBy(u, {
                            animate: !1
                        }), this._draggable._newPos._add(u), this._draggable._startPos._add(u), fe(e._icon, this._draggable._newPos), this._onDrag(t), this._panRequest = T(this._adjustPan.bind(this, t))
                    }
                },
                _onDragStart: function() {
                    this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup && this._marker.closePopup(), this._marker.fire("movestart").fire("dragstart")
                },
                _onPreDrag: function(t) {
                    this._marker.options.autoPan && (S(this._panRequest), this._panRequest = T(this._adjustPan.bind(this, t)))
                },
                _onDrag: function(t) {
                    var e = this._marker,
                        i = e._shadow,
                        n = _e(e._icon),
                        o = e._map.layerPointToLatLng(n);
                    i && fe(i, n), e._latlng = o, t.latlng = o, t.oldLatLng = this._oldLatLng, e.fire("move", t).fire("drag", t)
                },
                _onDragEnd: function(t) {
                    S(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t)
                }
            }),
            Mi = bi.extend({
                options: {
                    icon: new Si,
                    interactive: !0,
                    keyboard: !0,
                    title: "",
                    alt: "",
                    zIndexOffset: 0,
                    opacity: 1,
                    riseOnHover: !1,
                    riseOffset: 250,
                    pane: "markerPane",
                    shadowPane: "shadowPane",
                    bubblingMouseEvents: !1,
                    draggable: !1,
                    autoPan: !1,
                    autoPanPadding: [50, 50],
                    autoPanSpeed: 10
                },
                initialize: function(t, e) {
                    d(this, e), this._latlng = N(t)
                },
                onAdd: function(t) {
                    this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation, this._zoomAnimated && t.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update()
                },
                onRemove: function(t) {
                    this.dragging && this.dragging.enabled() && (this.options.draggable = !0, this.dragging.removeHooks()), delete this.dragging, this._zoomAnimated && t.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow()
                },
                getEvents: function() {
                    return {
                        zoom: this.update,
                        viewreset: this.update
                    }
                },
                getLatLng: function() {
                    return this._latlng
                },
                setLatLng: function(t) {
                    var e = this._latlng;
                    return this._latlng = N(t), this.update(), this.fire("move", {
                        oldLatLng: e,
                        latlng: this._latlng
                    })
                },
                setZIndexOffset: function(t) {
                    return this.options.zIndexOffset = t, this.update()
                },
                getIcon: function() {
                    return this.options.icon
                },
                setIcon: function(t) {
                    return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this
                },
                getElement: function() {
                    return this._icon
                },
                update: function() {
                    if (this._icon && this._map) {
                        var t = this._map.latLngToLayerPoint(this._latlng).round();
                        this._setPos(t)
                    }
                    return this
                },
                _initIcon: function() {
                    var t = this.options,
                        e = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"),
                        i = t.icon.createIcon(this._icon),
                        n = !1;
                    i !== this._icon && (this._icon && this._removeIcon(), n = !0, t.title && (i.title = t.title), "IMG" === i.tagName && (i.alt = t.alt || "")), ae(i, e), t.keyboard && (i.tabIndex = "0"), this._icon = i, t.riseOnHover && this.on({
                        mouseover: this._bringToFront,
                        mouseout: this._resetZIndex
                    });
                    var o = t.icon.createShadow(this._shadow),
                        r = !1;
                    o !== this._shadow && (this._removeShadow(), r = !0), o && (ae(o, e), o.alt = ""), this._shadow = o, t.opacity < 1 && this._updateOpacity(), n && this.getPane().appendChild(this._icon), this._initInteraction(), o && r && this.getPane(t.shadowPane).appendChild(this._shadow)
                },
                _removeIcon: function() {
                    this.options.riseOnHover && this.off({
                        mouseover: this._bringToFront,
                        mouseout: this._resetZIndex
                    }), ie(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null
                },
                _removeShadow: function() {
                    this._shadow && ie(this._shadow), this._shadow = null
                },
                _setPos: function(t) {
                    this._icon && fe(this._icon, t), this._shadow && fe(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex()
                },
                _updateZIndex: function(t) {
                    this._icon && (this._icon.style.zIndex = this._zIndex + t)
                },
                _animateZoom: function(t) {
                    var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
                    this._setPos(e)
                },
                _initInteraction: function() {
                    if (this.options.interactive && (ae(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), Ei)) {
                        var t = this.options.draggable;
                        this.dragging && (t = this.dragging.enabled(), this.dragging.disable()), this.dragging = new Ei(this), t && this.dragging.enable()
                    }
                },
                setOpacity: function(t) {
                    return this.options.opacity = t, this._map && this._updateOpacity(), this
                },
                _updateOpacity: function() {
                    var t = this.options.opacity;
                    this._icon && le(this._icon, t), this._shadow && le(this._shadow, t)
                },
                _bringToFront: function() {
                    this._updateZIndex(this.options.riseOffset)
                },
                _resetZIndex: function() {
                    this._updateZIndex(0)
                },
                _getPopupAnchor: function() {
                    return this.options.icon.options.popupAnchor
                },
                _getTooltipAnchor: function() {
                    return this.options.icon.options.tooltipAnchor
                }
            }),
            zi = bi.extend({
                options: {
                    stroke: !0,
                    color: "#3388ff",
                    weight: 3,
                    opacity: 1,
                    lineCap: "round",
                    lineJoin: "round",
                    dashArray: null,
                    dashOffset: null,
                    fill: !1,
                    fillColor: null,
                    fillOpacity: .2,
                    fillRule: "evenodd",
                    interactive: !0,
                    bubblingMouseEvents: !0
                },
                beforeAdd: function(t) {
                    this._renderer = t.getRenderer(this)
                },
                onAdd: function() {
                    this._renderer._initPath(this), this._reset(), this._renderer._addPath(this)
                },
                onRemove: function() {
                    this._renderer._removePath(this)
                },
                redraw: function() {
                    return this._map && this._renderer._updatePath(this), this
                },
                setStyle: function(t) {
                    return d(this, t), this._renderer && (this._renderer._updateStyle(this), this.options.stroke && t && Object.prototype.hasOwnProperty.call(t, "weight") && this._updateBounds()), this
                },
                bringToFront: function() {
                    return this._renderer && this._renderer._bringToFront(this), this
                },
                bringToBack: function() {
                    return this._renderer && this._renderer._bringToBack(this), this
                },
                getElement: function() {
                    return this._path
                },
                _reset: function() {
                    this._project(), this._update()
                },
                _clickTolerance: function() {
                    return (this.options.stroke ? this.options.weight / 2 : 0) + this._renderer.options.tolerance
                }
            }),
            Ci = zi.extend({
                options: {
                    fill: !0,
                    radius: 10
                },
                initialize: function(t, e) {
                    d(this, e), this._latlng = N(t), this._radius = this.options.radius
                },
                setLatLng: function(t) {
                    var e = this._latlng;
                    return this._latlng = N(t), this.redraw(), this.fire("move", {
                        oldLatLng: e,
                        latlng: this._latlng
                    })
                },
                getLatLng: function() {
                    return this._latlng
                },
                setRadius: function(t) {
                    return this.options.radius = this._radius = t, this.redraw()
                },
                getRadius: function() {
                    return this._radius
                },
                setStyle: function(t) {
                    var e = t && t.radius || this._radius;
                    return zi.prototype.setStyle.call(this, t), this.setRadius(e), this
                },
                _project: function() {
                    this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds()
                },
                _updateBounds: function() {
                    var t = this._radius,
                        e = this._radiusY || t,
                        i = this._clickTolerance(),
                        n = [t + i, e + i];
                    this._pxBounds = new I(this._point.subtract(n), this._point.add(n))
                },
                _update: function() {
                    this._map && this._updatePath()
                },
                _updatePath: function() {
                    this._renderer._updateCircle(this)
                },
                _empty: function() {
                    return this._radius && !this._renderer._bounds.intersects(this._pxBounds)
                },
                _containsPoint: function(t) {
                    return t.distanceTo(this._point) <= this._radius + this._clickTolerance()
                }
            }),
            ki = Ci.extend({
                initialize: function(t, i, n) {
                    if ("number" == typeof i && (i = e({}, n, {
                        radius: i
                    })), d(this, i), this._latlng = N(t), isNaN(this.options.radius)) throw new Error("Circle radius cannot be NaN");
                    this._mRadius = this.options.radius
                },
                setRadius: function(t) {
                    return this._mRadius = t, this.redraw()
                },
                getRadius: function() {
                    return this._mRadius
                },
                getBounds: function() {
                    var t = [this._radius, this._radiusY || this._radius];
                    return new B(this._map.layerPointToLatLng(this._point.subtract(t)), this._map.layerPointToLatLng(this._point.add(t)))
                },
                setStyle: zi.prototype.setStyle,
                _project: function() {
                    var t = this._latlng.lng,
                        e = this._latlng.lat,
                        i = this._map,
                        n = i.options.crs;
                    if (n.distance === W.distance) {
                        var o = Math.PI / 180,
                            r = this._mRadius / W.R / o,
                            s = i.project([e + r, t]),
                            a = i.project([e - r, t]),
                            h = s.add(a).divideBy(2),
                            u = i.unproject(h).lat,
                            c = Math.acos((Math.cos(r * o) - Math.sin(e * o) * Math.sin(u * o)) / (Math.cos(e * o) * Math.cos(u * o))) / o;
                        (isNaN(c) || 0 === c) && (c = r / Math.cos(Math.PI / 180 * e)), this._point = h.subtract(i.getPixelOrigin()), this._radius = isNaN(c) ? 0 : h.x - i.project([u, t - c]).x, this._radiusY = h.y - s.y
                    } else {
                        var l = n.unproject(n.project(this._latlng).subtract([this._mRadius, 0]));
                        this._point = i.latLngToLayerPoint(this._latlng), this._radius = this._point.x - i.latLngToLayerPoint(l).x
                    }
                    this._updateBounds()
                }
            }),
            Ai = zi.extend({
                options: {
                    smoothFactor: 1,
                    noClip: !1
                },
                initialize: function(t, e) {
                    d(this, e), this._setLatLngs(t)
                },
                getLatLngs: function() {
                    return this._latlngs
                },
                setLatLngs: function(t) {
                    return this._setLatLngs(t), this.redraw()
                },
                isEmpty: function() {
                    return !this._latlngs.length
                },
                closestLayerPoint: function(t) {
                    for (var e, i, n = 1 / 0, o = null, r = ci, s = 0, a = this._parts.length; s < a; s++)
                        for (var h = this._parts[s], u = 1, c = h.length; u < c; u++) {
                            var l = r(t, e = h[u - 1], i = h[u], !0);
                            l < n && (n = l, o = r(t, e, i))
                        }
                    return o && (o.distance = Math.sqrt(n)), o
                },
                getCenter: function() {
                    if (!this._map) throw new Error("Must add layer to map before using getCenter()");
                    var t, e, i, n, o, r, s, a = this._rings[0],
                        h = a.length;
                    if (!h) return null;
                    for (t = 0, e = 0; t < h - 1; t++) e += a[t].distanceTo(a[t + 1]) / 2;
                    if (0 === e) return this._map.layerPointToLatLng(a[0]);
                    for (t = 0, n = 0; t < h - 1; t++)
                        if (o = a[t], r = a[t + 1], (n += i = o.distanceTo(r)) > e) return s = (n - e) / i, this._map.layerPointToLatLng([r.x - s * (r.x - o.x), r.y - s * (r.y - o.y)])
                },
                getBounds: function() {
                    return this._bounds
                },
                addLatLng: function(t, e) {
                    return e = e || this._defaultShape(), t = N(t), e.push(t), this._bounds.extend(t), this.redraw()
                },
                _setLatLngs: function(t) {
                    this._bounds = new B, this._latlngs = this._convertLatLngs(t)
                },
                _defaultShape: function() {
                    return li(this._latlngs) ? this._latlngs : this._latlngs[0]
                },
                _convertLatLngs: function(t) {
                    for (var e = [], i = li(t), n = 0, o = t.length; n < o; n++) i ? (e[n] = N(t[n]), this._bounds.extend(e[n])) : e[n] = this._convertLatLngs(t[n]);
                    return e
                },
                _project: function() {
                    var t = new I;
                    this._rings = [], this._projectLatlngs(this._latlngs, this._rings, t), this._bounds.isValid() && t.isValid() && (this._rawPxBounds = t, this._updateBounds())
                },
                _updateBounds: function() {
                    var t = this._clickTolerance(),
                        e = new k(t, t);
                    this._pxBounds = new I([this._rawPxBounds.min.subtract(e), this._rawPxBounds.max.add(e)])
                },
                _projectLatlngs: function(t, e, i) {
                    var n, o, r = t[0] instanceof j,
                        s = t.length;
                    if (r) {
                        for (o = [], n = 0; n < s; n++) o[n] = this._map.latLngToLayerPoint(t[n]), i.extend(o[n]);
                        e.push(o)
                    } else
                        for (n = 0; n < s; n++) this._projectLatlngs(t[n], e, i)
                },
                _clipPoints: function() {
                    var t = this._renderer._bounds;
                    if (this._parts = [], this._pxBounds && this._pxBounds.intersects(t))
                        if (this.options.noClip) this._parts = this._rings;
                        else {
                            var e, i, n, o, r, s, a, h = this._parts;
                            for (e = 0, n = 0, o = this._rings.length; e < o; e++)
                                for (i = 0, r = (a = this._rings[e]).length; i < r - 1; i++)(s = ai(a[i], a[i + 1], t, i, !0)) && (h[n] = h[n] || [], h[n].push(s[0]), s[1] === a[i + 1] && i !== r - 2 || (h[n].push(s[1]), n++))
                        }
                },
                _simplifyPoints: function() {
                    for (var t = this._parts, e = this.options.smoothFactor, i = 0, n = t.length; i < n; i++) t[i] = ri(t[i], e)
                },
                _update: function() {
                    this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath())
                },
                _updatePath: function() {
                    this._renderer._updatePoly(this)
                },
                _containsPoint: function(t, e) {
                    var i, n, o, r, s, a, h = this._clickTolerance();
                    if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
                    for (i = 0, r = this._parts.length; i < r; i++)
                        for (n = 0, o = (s = (a = this._parts[i]).length) - 1; n < s; o = n++)
                            if ((e || 0 !== n) && si(t, a[o], a[n]) <= h) return !0;
                    return !1
                }
            });
        Ai._flat = di;
        var Oi = Ai.extend({
                options: {
                    fill: !0
                },
                isEmpty: function() {
                    return !this._latlngs.length || !this._latlngs[0].length
                },
                getCenter: function() {
                    if (!this._map) throw new Error("Must add layer to map before using getCenter()");
                    var t, e, i, n, o, r, s, a, h, u = this._rings[0],
                        c = u.length;
                    if (!c) return null;
                    for (r = s = a = 0, t = 0, e = c - 1; t < c; e = t++) i = u[t], n = u[e], o = i.y * n.x - n.y * i.x, s += (i.x + n.x) * o, a += (i.y + n.y) * o, r += 3 * o;
                    return h = 0 === r ? u[0] : [s / r, a / r], this._map.layerPointToLatLng(h)
                },
                _convertLatLngs: function(t) {
                    var e = Ai.prototype._convertLatLngs.call(this, t),
                        i = e.length;
                    return i >= 2 && e[0] instanceof j && e[0].equals(e[i - 1]) && e.pop(), e
                },
                _setLatLngs: function(t) {
                    Ai.prototype._setLatLngs.call(this, t), li(this._latlngs) && (this._latlngs = [this._latlngs])
                },
                _defaultShape: function() {
                    return li(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0]
                },
                _clipPoints: function() {
                    var t = this._renderer._bounds,
                        e = this.options.weight,
                        i = new k(e, e);
                    if (t = new I(t.min.subtract(i), t.max.add(i)), this._parts = [], this._pxBounds && this._pxBounds.intersects(t))
                        if (this.options.noClip) this._parts = this._rings;
                        else
                            for (var n, o = 0, r = this._rings.length; o < r; o++)(n = fi(this._rings[o], t, !0)).length && this._parts.push(n)
                },
                _updatePath: function() {
                    this._renderer._updatePoly(this, !0)
                },
                _containsPoint: function(t) {
                    var e, i, n, o, r, s, a, h, u = !1;
                    if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
                    for (o = 0, a = this._parts.length; o < a; o++)
                        for (r = 0, s = (h = (e = this._parts[o]).length) - 1; r < h; s = r++) i = e[r], n = e[s], i.y > t.y != n.y > t.y && t.x < (n.x - i.x) * (t.y - i.y) / (n.y - i.y) + i.x && (u = !u);
                    return u || Ai.prototype._containsPoint.call(this, t, !0)
                }
            }),
            Ii = Li.extend({
                initialize: function(t, e) {
                    d(this, e), this._layers = {}, t && this.addData(t)
                },
                addData: function(t) {
                    var e, i, n, o = m(t) ? t : t.features;
                    if (o) {
                        for (e = 0, i = o.length; e < i; e++)((n = o[e]).geometries || n.geometry || n.features || n.coordinates) && this.addData(n);
                        return this
                    }
                    var r = this.options;
                    if (r.filter && !r.filter(t)) return this;
                    var s = Zi(t, r);
                    return s ? (s.feature = Wi(t), s.defaultOptions = s.options, this.resetStyle(s), r.onEachFeature && r.onEachFeature(t, s), this.addLayer(s)) : this
                },
                resetStyle: function(t) {
                    return void 0 === t ? this.eachLayer(this.resetStyle, this) : (t.options = e({}, t.defaultOptions), this._setLayerStyle(t, this.options.style), this)
                },
                setStyle: function(t) {
                    return this.eachLayer((function(e) {
                        this._setLayerStyle(e, t)
                    }), this)
                },
                _setLayerStyle: function(t, e) {
                    t.setStyle && ("function" == typeof e && (e = e(t.feature)), t.setStyle(e))
                }
            });

        function Zi(t, e) {
            var i, n, o, r, s = "Feature" === t.type ? t.geometry : t,
                a = s ? s.coordinates : null,
                h = [],
                u = e && e.pointToLayer,
                c = e && e.coordsToLatLng || Ri;
            if (!a && !s) return null;
            switch (s.type) {
                case "Point":
                    return Bi(u, t, i = c(a), e);
                case "MultiPoint":
                    for (o = 0, r = a.length; o < r; o++) i = c(a[o]), h.push(Bi(u, t, i, e));
                    return new Li(h);
                case "LineString":
                case "MultiLineString":
                    return n = ji(a, "LineString" === s.type ? 0 : 1, c), new Ai(n, e);
                case "Polygon":
                case "MultiPolygon":
                    return n = ji(a, "Polygon" === s.type ? 1 : 2, c), new Oi(n, e);
                case "GeometryCollection":
                    for (o = 0, r = s.geometries.length; o < r; o++) {
                        var l = Zi({
                            geometry: s.geometries[o],
                            type: "Feature",
                            properties: t.properties
                        }, e);
                        l && h.push(l)
                    }
                    return new Li(h);
                default:
                    throw new Error("Invalid GeoJSON object.")
            }
        }

        function Bi(t, e, i, n) {
            return t ? t(e, i) : new Mi(i, n && n.markersInheritOptions && n)
        }

        function Ri(t) {
            return new j(t[1], t[0], t[2])
        }

        function ji(t, e, i) {
            for (var n, o = [], r = 0, s = t.length; r < s; r++) n = e ? ji(t[r], e - 1, i) : (i || Ri)(t[r]), o.push(n);
            return o
        }

        function Ni(t, e) {
            return e = "number" == typeof e ? e : 6, void 0 !== t.alt ? [u(t.lng, e), u(t.lat, e), u(t.alt, e)] : [u(t.lng, e), u(t.lat, e)]
        }

        function Di(t, e, i, n) {
            for (var o = [], r = 0, s = t.length; r < s; r++) o.push(e ? Di(t[r], e - 1, i, n) : Ni(t[r], n));
            return !e && i && o.push(o[0]), o
        }

        function Fi(t, i) {
            return t.feature ? e({}, t.feature, {
                geometry: i
            }) : Wi(i)
        }

        function Wi(t) {
            return "Feature" === t.type || "FeatureCollection" === t.type ? t : {
                type: "Feature",
                properties: {},
                geometry: t
            }
        }
        var Hi = {
            toGeoJSON: function(t) {
                return Fi(this, {
                    type: "Point",
                    coordinates: Ni(this.getLatLng(), t)
                })
            }
        };

        function qi(t, e) {
            return new Ii(t, e)
        }
        Mi.include(Hi), ki.include(Hi), Ci.include(Hi), Ai.include({
            toGeoJSON: function(t) {
                var e = !li(this._latlngs);
                return Fi(this, {
                    type: (e ? "Multi" : "") + "LineString",
                    coordinates: Di(this._latlngs, e ? 1 : 0, !1, t)
                })
            }
        }), Oi.include({
            toGeoJSON: function(t) {
                var e = !li(this._latlngs),
                    i = e && !li(this._latlngs[0]),
                    n = Di(this._latlngs, i ? 2 : e ? 1 : 0, !0, t);
                return e || (n = [n]), Fi(this, {
                    type: (i ? "Multi" : "") + "Polygon",
                    coordinates: n
                })
            }
        }), Pi.include({
            toMultiPoint: function(t) {
                var e = [];
                return this.eachLayer((function(i) {
                    e.push(i.toGeoJSON(t).geometry.coordinates)
                })), Fi(this, {
                    type: "MultiPoint",
                    coordinates: e
                })
            },
            toGeoJSON: function(t) {
                var e = this.feature && this.feature.geometry && this.feature.geometry.type;
                if ("MultiPoint" === e) return this.toMultiPoint(t);
                var i = "GeometryCollection" === e,
                    n = [];
                return this.eachLayer((function(e) {
                    if (e.toGeoJSON) {
                        var o = e.toGeoJSON(t);
                        if (i) n.push(o.geometry);
                        else {
                            var r = Wi(o);
                            "FeatureCollection" === r.type ? n.push.apply(n, r.features) : n.push(r)
                        }
                    }
                })), i ? Fi(this, {
                    geometries: n,
                    type: "GeometryCollection"
                }) : {
                    type: "FeatureCollection",
                    features: n
                }
            }
        });
        var Ui = qi,
            Vi = bi.extend({
                options: {
                    opacity: 1,
                    alt: "",
                    interactive: !1,
                    crossOrigin: !1,
                    errorOverlayUrl: "",
                    zIndex: 1,
                    className: ""
                },
                initialize: function(t, e, i) {
                    this._url = t, this._bounds = R(e), d(this, i)
                },
                onAdd: function() {
                    this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (ae(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset()
                },
                onRemove: function() {
                    ie(this._image), this.options.interactive && this.removeInteractiveTarget(this._image)
                },
                setOpacity: function(t) {
                    return this.options.opacity = t, this._image && this._updateOpacity(), this
                },
                setStyle: function(t) {
                    return t.opacity && this.setOpacity(t.opacity), this
                },
                bringToFront: function() {
                    return this._map && oe(this._image), this
                },
                bringToBack: function() {
                    return this._map && re(this._image), this
                },
                setUrl: function(t) {
                    return this._url = t, this._image && (this._image.src = t), this
                },
                setBounds: function(t) {
                    return this._bounds = R(t), this._map && this._reset(), this
                },
                getEvents: function() {
                    var t = {
                        zoom: this._reset,
                        viewreset: this._reset
                    };
                    return this._zoomAnimated && (t.zoomanim = this._animateZoom), t
                },
                setZIndex: function(t) {
                    return this.options.zIndex = t, this._updateZIndex(), this
                },
                getBounds: function() {
                    return this._bounds
                },
                getElement: function() {
                    return this._image
                },
                _initImage: function() {
                    var t = "IMG" === this._url.tagName,
                        e = this._image = t ? this._url : ee("img");
                    ae(e, "leaflet-image-layer"), this._zoomAnimated && ae(e, "leaflet-zoom-animated"), this.options.className && ae(e, this.options.className), e.onselectstart = h, e.onmousemove = h, e.onload = n(this.fire, this, "load"), e.onerror = n(this._overlayOnError, this, "error"), (this.options.crossOrigin || "" === this.options.crossOrigin) && (e.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), t ? this._url = e.src : (e.src = this._url, e.alt = this.options.alt)
                },
                _animateZoom: function(t) {
                    var e = this._map.getZoomScale(t.zoom),
                        i = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
                    pe(this._image, i, e)
                },
                _reset: function() {
                    var t = this._image,
                        e = new I(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())),
                        i = e.getSize();
                    fe(t, e.min), t.style.width = i.x + "px", t.style.height = i.y + "px"
                },
                _updateOpacity: function() {
                    le(this._image, this.options.opacity)
                },
                _updateZIndex: function() {
                    this._image && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._image.style.zIndex = this.options.zIndex)
                },
                _overlayOnError: function() {
                    this.fire("error");
                    var t = this.options.errorOverlayUrl;
                    t && this._url !== t && (this._url = t, this._image.src = t)
                }
            }),
            Gi = Vi.extend({
                options: {
                    autoplay: !0,
                    loop: !0,
                    keepAspectRatio: !0,
                    muted: !1
                },
                _initImage: function() {
                    var t = "VIDEO" === this._url.tagName,
                        e = this._image = t ? this._url : ee("video");
                    if (ae(e, "leaflet-image-layer"), this._zoomAnimated && ae(e, "leaflet-zoom-animated"), this.options.className && ae(e, this.options.className), e.onselectstart = h, e.onmousemove = h, e.onloadeddata = n(this.fire, this, "load"), t) {
                        for (var i = e.getElementsByTagName("source"), o = [], r = 0; r < i.length; r++) o.push(i[r].src);
                        this._url = i.length > 0 ? o : [e.src]
                    } else {
                        m(this._url) || (this._url = [this._url]), !this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(e.style, "objectFit") && (e.style.objectFit = "fill"), e.autoplay = !!this.options.autoplay, e.loop = !!this.options.loop, e.muted = !!this.options.muted;
                        for (var s = 0; s < this._url.length; s++) {
                            var a = ee("source");
                            a.src = this._url[s], e.appendChild(a)
                        }
                    }
                }
            }),
            Ki = Vi.extend({
                _initImage: function() {
                    var t = this._image = this._url;
                    ae(t, "leaflet-image-layer"), this._zoomAnimated && ae(t, "leaflet-zoom-animated"), this.options.className && ae(t, this.options.className), t.onselectstart = h, t.onmousemove = h
                }
            }),
            Yi = bi.extend({
                options: {
                    offset: [0, 7],
                    className: "",
                    pane: "popupPane"
                },
                initialize: function(t, e) {
                    d(this, t), this._source = e
                },
                onAdd: function(t) {
                    this._zoomAnimated = t._zoomAnimated, this._container || this._initLayout(), t._fadeAnimated && le(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), t._fadeAnimated && le(this._container, 1), this.bringToFront()
                },
                onRemove: function(t) {
                    t._fadeAnimated ? (le(this._container, 0), this._removeTimeout = setTimeout(n(ie, void 0, this._container), 200)) : ie(this._container)
                },
                getLatLng: function() {
                    return this._latlng
                },
                setLatLng: function(t) {
                    return this._latlng = N(t), this._map && (this._updatePosition(), this._adjustPan()), this
                },
                getContent: function() {
                    return this._content
                },
                setContent: function(t) {
                    return this._content = t, this.update(), this
                },
                getElement: function() {
                    return this._container
                },
                update: function() {
                    this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan())
                },
                getEvents: function() {
                    var t = {
                        zoom: this._updatePosition,
                        viewreset: this._updatePosition
                    };
                    return this._zoomAnimated && (t.zoomanim = this._animateZoom), t
                },
                isOpen: function() {
                    return !!this._map && this._map.hasLayer(this)
                },
                bringToFront: function() {
                    return this._map && oe(this._container), this
                },
                bringToBack: function() {
                    return this._map && re(this._container), this
                },
                _prepareOpen: function(t, e, i) {
                    if (e instanceof bi || (i = e, e = t), e instanceof Li)
                        for (var n in t._layers) {
                            e = t._layers[n];
                            break
                        }
                    if (!i)
                        if (e.getCenter) i = e.getCenter();
                        else {
                            if (!e.getLatLng) throw new Error("Unable to get source layer LatLng.");
                            i = e.getLatLng()
                        } return this._source = e, this.update(), i
                },
                _updateContent: function() {
                    if (this._content) {
                        var t = this._contentNode,
                            e = "function" == typeof this._content ? this._content(this._source || this) : this._content;
                        if ("string" == typeof e) t.innerHTML = e;
                        else {
                            for (; t.hasChildNodes();) t.removeChild(t.firstChild);
                            t.appendChild(e)
                        }
                        this.fire("contentupdate")
                    }
                },
                _updatePosition: function() {
                    if (this._map) {
                        var t = this._map.latLngToLayerPoint(this._latlng),
                            e = O(this.options.offset),
                            i = this._getAnchor();
                        this._zoomAnimated ? fe(this._container, t.add(i)) : e = e.add(t).add(i);
                        var n = this._containerBottom = -e.y,
                            o = this._containerLeft = -Math.round(this._containerWidth / 2) + e.x;
                        this._container.style.bottom = n + "px", this._container.style.left = o + "px"
                    }
                },
                _getAnchor: function() {
                    return [0, 0]
                }
            }),
            Xi = Yi.extend({
                options: {
                    maxWidth: 300,
                    minWidth: 50,
                    maxHeight: null,
                    autoPan: !0,
                    autoPanPaddingTopLeft: null,
                    autoPanPaddingBottomRight: null,
                    autoPanPadding: [5, 5],
                    keepInView: !1,
                    closeButton: !0,
                    autoClose: !0,
                    closeOnEscapeKey: !0,
                    className: ""
                },
                openOn: function(t) {
                    return t.openPopup(this), this
                },
                onAdd: function(t) {
                    Yi.prototype.onAdd.call(this, t), t.fire("popupopen", {
                        popup: this
                    }), this._source && (this._source.fire("popupopen", {
                        popup: this
                    }, !0), this._source instanceof zi || this._source.on("preclick", ke))
                },
                onRemove: function(t) {
                    Yi.prototype.onRemove.call(this, t), t.fire("popupclose", {
                        popup: this
                    }), this._source && (this._source.fire("popupclose", {
                        popup: this
                    }, !0), this._source instanceof zi || this._source.off("preclick", ke))
                },
                getEvents: function() {
                    var t = Yi.prototype.getEvents.call(this);
                    return (void 0 !== this.options.closeOnClick ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this._close), this.options.keepInView && (t.moveend = this._adjustPan), t
                },
                _close: function() {
                    this._map && this._map.closePopup(this)
                },
                _initLayout: function() {
                    var t = "leaflet-popup",
                        e = this._container = ee("div", t + " " + (this.options.className || "") + " leaflet-zoom-animated"),
                        i = this._wrapper = ee("div", t + "-content-wrapper", e);
                    if (this._contentNode = ee("div", t + "-content", i), Oe(e), Ae(this._contentNode), Le(e, "contextmenu", ke), this._tipContainer = ee("div", t + "-tip-container", e), this._tip = ee("div", t + "-tip", this._tipContainer), this.options.closeButton) {
                        var n = this._closeButton = ee("a", t + "-close-button", e);
                        n.href = "#close", n.innerHTML = "&#215;", Le(n, "click", this._onCloseButtonClick, this)
                    }
                },
                _updateLayout: function() {
                    var t = this._contentNode,
                        e = t.style;
                    e.width = "", e.whiteSpace = "nowrap";
                    var i = t.offsetWidth;
                    i = Math.min(i, this.options.maxWidth), i = Math.max(i, this.options.minWidth), e.width = i + 1 + "px", e.whiteSpace = "", e.height = "";
                    var n = t.offsetHeight,
                        o = this.options.maxHeight;
                    o && n > o ? (e.height = o + "px", ae(t, "leaflet-popup-scrolled")) : he(t, "leaflet-popup-scrolled"), this._containerWidth = this._container.offsetWidth
                },
                _animateZoom: function(t) {
                    var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center),
                        i = this._getAnchor();
                    fe(this._container, e.add(i))
                },
                _adjustPan: function() {
                    if (this.options.autoPan) {
                        this._map._panAnim && this._map._panAnim.stop();
                        var t = this._map,
                            e = parseInt(te(this._container, "marginBottom"), 10) || 0,
                            i = this._container.offsetHeight + e,
                            n = this._containerWidth,
                            o = new k(this._containerLeft, -i - this._containerBottom);
                        o._add(_e(this._container));
                        var r = t.layerPointToContainerPoint(o),
                            s = O(this.options.autoPanPadding),
                            a = O(this.options.autoPanPaddingTopLeft || s),
                            h = O(this.options.autoPanPaddingBottomRight || s),
                            u = t.getSize(),
                            c = 0,
                            l = 0;
                        r.x + n + h.x > u.x && (c = r.x + n - u.x + h.x), r.x - c - a.x < 0 && (c = r.x - a.x), r.y + i + h.y > u.y && (l = r.y + i - u.y + h.y), r.y - l - a.y < 0 && (l = r.y - a.y), (c || l) && t.fire("autopanstart").panBy([c, l])
                    }
                },
                _onCloseButtonClick: function(t) {
                    this._close(), Ze(t)
                },
                _getAnchor: function() {
                    return O(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0])
                }
            });
        Ue.mergeOptions({
            closePopupOnClick: !0
        }), Ue.include({
            openPopup: function(t, e, i) {
                return t instanceof Xi || (t = new Xi(i).setContent(t)), e && t.setLatLng(e), this.hasLayer(t) ? this : (this._popup && this._popup.options.autoClose && this.closePopup(), this._popup = t, this.addLayer(t))
            },
            closePopup: function(t) {
                return t && t !== this._popup || (t = this._popup, this._popup = null), t && this.removeLayer(t), this
            }
        }), bi.include({
            bindPopup: function(t, e) {
                return t instanceof Xi ? (d(t, e), this._popup = t, t._source = this) : (this._popup && !e || (this._popup = new Xi(e, this)), this._popup.setContent(t)), this._popupHandlersAdded || (this.on({
                    click: this._openPopup,
                    keypress: this._onKeyPress,
                    remove: this.closePopup,
                    move: this._movePopup
                }), this._popupHandlersAdded = !0), this
            },
            unbindPopup: function() {
                return this._popup && (this.off({
                    click: this._openPopup,
                    keypress: this._onKeyPress,
                    remove: this.closePopup,
                    move: this._movePopup
                }), this._popupHandlersAdded = !1, this._popup = null), this
            },
            openPopup: function(t, e) {
                return this._popup && this._map && (e = this._popup._prepareOpen(this, t, e), this._map.openPopup(this._popup, e)), this
            },
            closePopup: function() {
                return this._popup && this._popup._close(), this
            },
            togglePopup: function(t) {
                return this._popup && (this._popup._map ? this.closePopup() : this.openPopup(t)), this
            },
            isPopupOpen: function() {
                return !!this._popup && this._popup.isOpen()
            },
            setPopupContent: function(t) {
                return this._popup && this._popup.setContent(t), this
            },
            getPopup: function() {
                return this._popup
            },
            _openPopup: function(t) {
                var e = t.layer || t.target;
                this._popup && this._map && (Ze(t), e instanceof zi ? this.openPopup(t.layer || t.target, t.latlng) : this._map.hasLayer(this._popup) && this._popup._source === e ? this.closePopup() : this.openPopup(e, t.latlng))
            },
            _movePopup: function(t) {
                this._popup.setLatLng(t.latlng)
            },
            _onKeyPress: function(t) {
                13 === t.originalEvent.keyCode && this._openPopup(t)
            }
        });
        var Ji = Yi.extend({
            options: {
                pane: "tooltipPane",
                offset: [0, 0],
                direction: "auto",
                permanent: !1,
                sticky: !1,
                interactive: !1,
                opacity: .9
            },
            onAdd: function(t) {
                Yi.prototype.onAdd.call(this, t), this.setOpacity(this.options.opacity), t.fire("tooltipopen", {
                    tooltip: this
                }), this._source && this._source.fire("tooltipopen", {
                    tooltip: this
                }, !0)
            },
            onRemove: function(t) {
                Yi.prototype.onRemove.call(this, t), t.fire("tooltipclose", {
                    tooltip: this
                }), this._source && this._source.fire("tooltipclose", {
                    tooltip: this
                }, !0)
            },
            getEvents: function() {
                var t = Yi.prototype.getEvents.call(this);
                return wt && !this.options.permanent && (t.preclick = this._close), t
            },
            _close: function() {
                this._map && this._map.closeTooltip(this)
            },
            _initLayout: function() {
                var t = "leaflet-tooltip " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
                this._contentNode = this._container = ee("div", t)
            },
            _updateLayout: function() {},
            _adjustPan: function() {},
            _setPosition: function(t) {
                var e, i, n = this._map,
                    o = this._container,
                    r = n.latLngToContainerPoint(n.getCenter()),
                    s = n.layerPointToContainerPoint(t),
                    a = this.options.direction,
                    h = o.offsetWidth,
                    u = o.offsetHeight,
                    c = O(this.options.offset),
                    l = this._getAnchor();
                "top" === a ? (e = h / 2, i = u) : "bottom" === a ? (e = h / 2, i = 0) : "center" === a ? (e = h / 2, i = u / 2) : "right" === a ? (e = 0, i = u / 2) : "left" === a ? (e = h, i = u / 2) : s.x < r.x ? (a = "right", e = 0, i = u / 2) : (a = "left", e = h + 2 * (c.x + l.x), i = u / 2), t = t.subtract(O(e, i, !0)).add(c).add(l), he(o, "leaflet-tooltip-right"), he(o, "leaflet-tooltip-left"), he(o, "leaflet-tooltip-top"), he(o, "leaflet-tooltip-bottom"), ae(o, "leaflet-tooltip-" + a), fe(o, t)
            },
            _updatePosition: function() {
                var t = this._map.latLngToLayerPoint(this._latlng);
                this._setPosition(t)
            },
            setOpacity: function(t) {
                this.options.opacity = t, this._container && le(this._container, t)
            },
            _animateZoom: function(t) {
                var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
                this._setPosition(e)
            },
            _getAnchor: function() {
                return O(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0])
            }
        });
        Ue.include({
            openTooltip: function(t, e, i) {
                return t instanceof Ji || (t = new Ji(i).setContent(t)), e && t.setLatLng(e), this.hasLayer(t) ? this : this.addLayer(t)
            },
            closeTooltip: function(t) {
                return t && this.removeLayer(t), this
            }
        }), bi.include({
            bindTooltip: function(t, e) {
                return t instanceof Ji ? (d(t, e), this._tooltip = t, t._source = this) : (this._tooltip && !e || (this._tooltip = new Ji(e, this)), this._tooltip.setContent(t)), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this
            },
            unbindTooltip: function() {
                return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), this._tooltip = null), this
            },
            _initTooltipInteractions: function(t) {
                if (t || !this._tooltipHandlersAdded) {
                    var e = t ? "off" : "on",
                        i = {
                            remove: this.closeTooltip,
                            move: this._moveTooltip
                        };
                    this._tooltip.options.permanent ? i.add = this._openTooltip : (i.mouseover = this._openTooltip, i.mouseout = this.closeTooltip, this._tooltip.options.sticky && (i.mousemove = this._moveTooltip), wt && (i.click = this._openTooltip)), this[e](i), this._tooltipHandlersAdded = !t
                }
            },
            openTooltip: function(t, e) {
                return this._tooltip && this._map && (e = this._tooltip._prepareOpen(this, t, e), this._map.openTooltip(this._tooltip, e), this._tooltip.options.interactive && this._tooltip._container && (ae(this._tooltip._container, "leaflet-clickable"), this.addInteractiveTarget(this._tooltip._container))), this
            },
            closeTooltip: function() {
                return this._tooltip && (this._tooltip._close(), this._tooltip.options.interactive && this._tooltip._container && (he(this._tooltip._container, "leaflet-clickable"), this.removeInteractiveTarget(this._tooltip._container))), this
            },
            toggleTooltip: function(t) {
                return this._tooltip && (this._tooltip._map ? this.closeTooltip() : this.openTooltip(t)), this
            },
            isTooltipOpen: function() {
                return this._tooltip.isOpen()
            },
            setTooltipContent: function(t) {
                return this._tooltip && this._tooltip.setContent(t), this
            },
            getTooltip: function() {
                return this._tooltip
            },
            _openTooltip: function(t) {
                var e = t.layer || t.target;
                this._tooltip && this._map && this.openTooltip(e, this._tooltip.options.sticky ? t.latlng : void 0)
            },
            _moveTooltip: function(t) {
                var e, i, n = t.latlng;
                this._tooltip.options.sticky && t.originalEvent && (e = this._map.mouseEventToContainerPoint(t.originalEvent), i = this._map.containerPointToLayerPoint(e), n = this._map.layerPointToLatLng(i)), this._tooltip.setLatLng(n)
            }
        });
        var $i = Ti.extend({
            options: {
                iconSize: [12, 12],
                html: !1,
                bgPos: null,
                className: "leaflet-div-icon"
            },
            createIcon: function(t) {
                var e = t && "DIV" === t.tagName ? t : document.createElement("div"),
                    i = this.options;
                if (i.html instanceof Element ? (ne(e), e.appendChild(i.html)) : e.innerHTML = !1 !== i.html ? i.html : "", i.bgPos) {
                    var n = O(i.bgPos);
                    e.style.backgroundPosition = -n.x + "px " + -n.y + "px"
                }
                return this._setIconStyles(e, "icon"), e
            },
            createShadow: function() {
                return null
            }
        });
        Ti.Default = Si;
        var Qi = bi.extend({
                options: {
                    tileSize: 256,
                    opacity: 1,
                    updateWhenIdle: mt,
                    updateWhenZooming: !0,
                    updateInterval: 200,
                    zIndex: 1,
                    bounds: null,
                    minZoom: 0,
                    maxZoom: void 0,
                    maxNativeZoom: void 0,
                    minNativeZoom: void 0,
                    noWrap: !1,
                    pane: "tilePane",
                    className: "",
                    keepBuffer: 2
                },
                initialize: function(t) {
                    d(this, t)
                },
                onAdd: function() {
                    this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView(), this._update()
                },
                beforeAdd: function(t) {
                    t._addZoomLimit(this)
                },
                onRemove: function(t) {
                    this._removeAllTiles(), ie(this._container), t._removeZoomLimit(this), this._container = null, this._tileZoom = void 0
                },
                bringToFront: function() {
                    return this._map && (oe(this._container), this._setAutoZIndex(Math.max)), this
                },
                bringToBack: function() {
                    return this._map && (re(this._container), this._setAutoZIndex(Math.min)), this
                },
                getContainer: function() {
                    return this._container
                },
                setOpacity: function(t) {
                    return this.options.opacity = t, this._updateOpacity(), this
                },
                setZIndex: function(t) {
                    return this.options.zIndex = t, this._updateZIndex(), this
                },
                isLoading: function() {
                    return this._loading
                },
                redraw: function() {
                    return this._map && (this._removeAllTiles(), this._update()), this
                },
                getEvents: function() {
                    var t = {
                        viewprereset: this._invalidateAll,
                        viewreset: this._resetView,
                        zoom: this._resetView,
                        moveend: this._onMoveEnd
                    };
                    return this.options.updateWhenIdle || (this._onMove || (this._onMove = s(this._onMoveEnd, this.options.updateInterval, this)), t.move = this._onMove), this._zoomAnimated && (t.zoomanim = this._animateZoom), t
                },
                createTile: function() {
                    return document.createElement("div")
                },
                getTileSize: function() {
                    var t = this.options.tileSize;
                    return t instanceof k ? t : new k(t, t)
                },
                _updateZIndex: function() {
                    this._container && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._container.style.zIndex = this.options.zIndex)
                },
                _setAutoZIndex: function(t) {
                    for (var e, i = this.getPane().children, n = -t(-1 / 0, 1 / 0), o = 0, r = i.length; o < r; o++) e = i[o].style.zIndex, i[o] !== this._container && e && (n = t(n, +e));
                    isFinite(n) && (this.options.zIndex = n + t(-1, 1), this._updateZIndex())
                },
                _updateOpacity: function() {
                    if (this._map && !$) {
                        le(this._container, this.options.opacity);
                        var t = +new Date,
                            e = !1,
                            i = !1;
                        for (var n in this._tiles) {
                            var o = this._tiles[n];
                            if (o.current && o.loaded) {
                                var r = Math.min(1, (t - o.loaded) / 200);
                                le(o.el, r), r < 1 ? e = !0 : (o.active ? i = !0 : this._onOpaqueTile(o), o.active = !0)
                            }
                        }
                        i && !this._noPrune && this._pruneTiles(), e && (S(this._fadeFrame), this._fadeFrame = T(this._updateOpacity, this))
                    }
                },
                _onOpaqueTile: h,
                _initContainer: function() {
                    this._container || (this._container = ee("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container))
                },
                _updateLevels: function() {
                    var t = this._tileZoom,
                        e = this.options.maxZoom;
                    if (void 0 !== t) {
                        for (var i in this._levels) i = Number(i), this._levels[i].el.children.length || i === t ? (this._levels[i].el.style.zIndex = e - Math.abs(t - i), this._onUpdateLevel(i)) : (ie(this._levels[i].el), this._removeTilesAtZoom(i), this._onRemoveLevel(i), delete this._levels[i]);
                        var n = this._levels[t],
                            o = this._map;
                        return n || ((n = this._levels[t] = {}).el = ee("div", "leaflet-tile-container leaflet-zoom-animated", this._container), n.el.style.zIndex = e, n.origin = o.project(o.unproject(o.getPixelOrigin()), t).round(), n.zoom = t, this._setZoomTransform(n, o.getCenter(), o.getZoom()), n.el.offsetWidth, this._onCreateLevel(n)), this._level = n, n
                    }
                },
                _onUpdateLevel: h,
                _onRemoveLevel: h,
                _onCreateLevel: h,
                _pruneTiles: function() {
                    if (this._map) {
                        var t, e, i = this._map.getZoom();
                        if (i > this.options.maxZoom || i < this.options.minZoom) this._removeAllTiles();
                        else {
                            for (t in this._tiles)(e = this._tiles[t]).retain = e.current;
                            for (t in this._tiles)
                                if ((e = this._tiles[t]).current && !e.active) {
                                    var n = e.coords;
                                    this._retainParent(n.x, n.y, n.z, n.z - 5) || this._retainChildren(n.x, n.y, n.z, n.z + 2)
                                } for (t in this._tiles) this._tiles[t].retain || this._removeTile(t)
                        }
                    }
                },
                _removeTilesAtZoom: function(t) {
                    for (var e in this._tiles) this._tiles[e].coords.z === t && this._removeTile(e)
                },
                _removeAllTiles: function() {
                    for (var t in this._tiles) this._removeTile(t)
                },
                _invalidateAll: function() {
                    for (var t in this._levels) ie(this._levels[t].el), this._onRemoveLevel(Number(t)), delete this._levels[t];
                    this._removeAllTiles(), this._tileZoom = void 0
                },
                _retainParent: function(t, e, i, n) {
                    var o = Math.floor(t / 2),
                        r = Math.floor(e / 2),
                        s = i - 1,
                        a = new k(+o, +r);
                    a.z = +s;
                    var h = this._tileCoordsToKey(a),
                        u = this._tiles[h];
                    return u && u.active ? (u.retain = !0, !0) : (u && u.loaded && (u.retain = !0), s > n && this._retainParent(o, r, s, n))
                },
                _retainChildren: function(t, e, i, n) {
                    for (var o = 2 * t; o < 2 * t + 2; o++)
                        for (var r = 2 * e; r < 2 * e + 2; r++) {
                            var s = new k(o, r);
                            s.z = i + 1;
                            var a = this._tileCoordsToKey(s),
                                h = this._tiles[a];
                            h && h.active ? h.retain = !0 : (h && h.loaded && (h.retain = !0), i + 1 < n && this._retainChildren(o, r, i + 1, n))
                        }
                },
                _resetView: function(t) {
                    var e = t && (t.pinch || t.flyTo);
                    this._setView(this._map.getCenter(), this._map.getZoom(), e, e)
                },
                _animateZoom: function(t) {
                    this._setView(t.center, t.zoom, !0, t.noUpdate)
                },
                _clampZoom: function(t) {
                    var e = this.options;
                    return void 0 !== e.minNativeZoom && t < e.minNativeZoom ? e.minNativeZoom : void 0 !== e.maxNativeZoom && e.maxNativeZoom < t ? e.maxNativeZoom : t
                },
                _setView: function(t, e, i, n) {
                    var o = Math.round(e);
                    o = void 0 !== this.options.maxZoom && o > this.options.maxZoom || void 0 !== this.options.minZoom && o < this.options.minZoom ? void 0 : this._clampZoom(o);
                    var r = this.options.updateWhenZooming && o !== this._tileZoom;
                    n && !r || (this._tileZoom = o, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), void 0 !== o && this._update(t), i || this._pruneTiles(), this._noPrune = !!i), this._setZoomTransforms(t, e)
                },
                _setZoomTransforms: function(t, e) {
                    for (var i in this._levels) this._setZoomTransform(this._levels[i], t, e)
                },
                _setZoomTransform: function(t, e, i) {
                    var n = this._map.getZoomScale(i, t.zoom),
                        o = t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(e, i)).round();
                    _t ? pe(t.el, o, n) : fe(t.el, o)
                },
                _resetGrid: function() {
                    var t = this._map,
                        e = t.options.crs,
                        i = this._tileSize = this.getTileSize(),
                        n = this._tileZoom,
                        o = this._map.getPixelWorldBounds(this._tileZoom);
                    o && (this._globalTileRange = this._pxBoundsToTileRange(o)), this._wrapX = e.wrapLng && !this.options.noWrap && [Math.floor(t.project([0, e.wrapLng[0]], n).x / i.x), Math.ceil(t.project([0, e.wrapLng[1]], n).x / i.y)], this._wrapY = e.wrapLat && !this.options.noWrap && [Math.floor(t.project([e.wrapLat[0], 0], n).y / i.x), Math.ceil(t.project([e.wrapLat[1], 0], n).y / i.y)]
                },
                _onMoveEnd: function() {
                    this._map && !this._map._animatingZoom && this._update()
                },
                _getTiledPixelBounds: function(t) {
                    var e = this._map,
                        i = e._animatingZoom ? Math.max(e._animateToZoom, e.getZoom()) : e.getZoom(),
                        n = e.getZoomScale(i, this._tileZoom),
                        o = e.project(t, this._tileZoom).floor(),
                        r = e.getSize().divideBy(2 * n);
                    return new I(o.subtract(r), o.add(r))
                },
                _update: function(t) {
                    var e = this._map;
                    if (e) {
                        var i = this._clampZoom(e.getZoom());
                        if (void 0 === t && (t = e.getCenter()), void 0 !== this._tileZoom) {
                            var n = this._getTiledPixelBounds(t),
                                o = this._pxBoundsToTileRange(n),
                                r = o.getCenter(),
                                s = [],
                                a = this.options.keepBuffer,
                                h = new I(o.getBottomLeft().subtract([a, -a]), o.getTopRight().add([a, -a]));
                            if (!(isFinite(o.min.x) && isFinite(o.min.y) && isFinite(o.max.x) && isFinite(o.max.y))) throw new Error("Attempted to load an infinite number of tiles");
                            for (var u in this._tiles) {
                                var c = this._tiles[u].coords;
                                c.z === this._tileZoom && h.contains(new k(c.x, c.y)) || (this._tiles[u].current = !1)
                            }
                            if (Math.abs(i - this._tileZoom) > 1) this._setView(t, i);
                            else {
                                for (var l = o.min.y; l <= o.max.y; l++)
                                    for (var d = o.min.x; d <= o.max.x; d++) {
                                        var p = new k(d, l);
                                        if (p.z = this._tileZoom, this._isValidTile(p)) {
                                            var f = this._tiles[this._tileCoordsToKey(p)];
                                            f ? f.current = !0 : s.push(p)
                                        }
                                    }
                                if (s.sort((function(t, e) {
                                    return t.distanceTo(r) - e.distanceTo(r)
                                })), 0 !== s.length) {
                                    this._loading || (this._loading = !0, this.fire("loading"));
                                    var _ = document.createDocumentFragment();
                                    for (d = 0; d < s.length; d++) this._addTile(s[d], _);
                                    this._level.el.appendChild(_)
                                }
                            }
                        }
                    }
                },
                _isValidTile: function(t) {
                    var e = this._map.options.crs;
                    if (!e.infinite) {
                        var i = this._globalTileRange;
                        if (!e.wrapLng && (t.x < i.min.x || t.x > i.max.x) || !e.wrapLat && (t.y < i.min.y || t.y > i.max.y)) return !1
                    }
                    if (!this.options.bounds) return !0;
                    var n = this._tileCoordsToBounds(t);
                    return R(this.options.bounds).overlaps(n)
                },
                _keyToBounds: function(t) {
                    return this._tileCoordsToBounds(this._keyToTileCoords(t))
                },
                _tileCoordsToNwSe: function(t) {
                    var e = this._map,
                        i = this.getTileSize(),
                        n = t.scaleBy(i),
                        o = n.add(i);
                    return [e.unproject(n, t.z), e.unproject(o, t.z)]
                },
                _tileCoordsToBounds: function(t) {
                    var e = this._tileCoordsToNwSe(t),
                        i = new B(e[0], e[1]);
                    return this.options.noWrap || (i = this._map.wrapLatLngBounds(i)), i
                },
                _tileCoordsToKey: function(t) {
                    return t.x + ":" + t.y + ":" + t.z
                },
                _keyToTileCoords: function(t) {
                    var e = t.split(":"),
                        i = new k(+e[0], +e[1]);
                    return i.z = +e[2], i
                },
                _removeTile: function(t) {
                    var e = this._tiles[t];
                    e && (ie(e.el), delete this._tiles[t], this.fire("tileunload", {
                        tile: e.el,
                        coords: this._keyToTileCoords(t)
                    }))
                },
                _initTile: function(t) {
                    ae(t, "leaflet-tile");
                    var e = this.getTileSize();
                    t.style.width = e.x + "px", t.style.height = e.y + "px", t.onselectstart = h, t.onmousemove = h, $ && this.options.opacity < 1 && le(t, this.options.opacity), et && !it && (t.style.WebkitBackfaceVisibility = "hidden")
                },
                _addTile: function(t, e) {
                    var i = this._getTilePos(t),
                        o = this._tileCoordsToKey(t),
                        r = this.createTile(this._wrapCoords(t), n(this._tileReady, this, t));
                    this._initTile(r), this.createTile.length < 2 && T(n(this._tileReady, this, t, null, r)), fe(r, i), this._tiles[o] = {
                        el: r,
                        coords: t,
                        current: !0
                    }, e.appendChild(r), this.fire("tileloadstart", {
                        tile: r,
                        coords: t
                    })
                },
                _tileReady: function(t, e, i) {
                    e && this.fire("tileerror", {
                        error: e,
                        tile: i,
                        coords: t
                    });
                    var o = this._tileCoordsToKey(t);
                    (i = this._tiles[o]) && (i.loaded = +new Date, this._map._fadeAnimated ? (le(i.el, 0), S(this._fadeFrame), this._fadeFrame = T(this._updateOpacity, this)) : (i.active = !0, this._pruneTiles()), e || (ae(i.el, "leaflet-tile-loaded"), this.fire("tileload", {
                        tile: i.el,
                        coords: t
                    })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), $ || !this._map._fadeAnimated ? T(this._pruneTiles, this) : setTimeout(n(this._pruneTiles, this), 250)))
                },
                _getTilePos: function(t) {
                    return t.scaleBy(this.getTileSize()).subtract(this._level.origin)
                },
                _wrapCoords: function(t) {
                    var e = new k(this._wrapX ? a(t.x, this._wrapX) : t.x, this._wrapY ? a(t.y, this._wrapY) : t.y);
                    return e.z = t.z, e
                },
                _pxBoundsToTileRange: function(t) {
                    var e = this.getTileSize();
                    return new I(t.min.unscaleBy(e).floor(), t.max.unscaleBy(e).ceil().subtract([1, 1]))
                },
                _noTilesToLoad: function() {
                    for (var t in this._tiles)
                        if (!this._tiles[t].loaded) return !1;
                    return !0
                }
            }),
            tn = Qi.extend({
                options: {
                    minZoom: 0,
                    maxZoom: 18,
                    subdomains: "abc",
                    errorTileUrl: "",
                    zoomOffset: 0,
                    tms: !1,
                    zoomReverse: !1,
                    detectRetina: !1,
                    crossOrigin: !1
                },
                initialize: function(t, e) {
                    this._url = t, (e = d(this, e)).detectRetina && Lt && e.maxZoom > 0 && (e.tileSize = Math.floor(e.tileSize / 2), e.zoomReverse ? (e.zoomOffset--, e.minZoom++) : (e.zoomOffset++, e.maxZoom--), e.minZoom = Math.max(0, e.minZoom)), "string" == typeof e.subdomains && (e.subdomains = e.subdomains.split("")), et || this.on("tileunload", this._onTileRemove)
                },
                setUrl: function(t, e) {
                    return this._url === t && void 0 === e && (e = !0), this._url = t, e || this.redraw(), this
                },
                createTile: function(t, e) {
                    var i = document.createElement("img");
                    return Le(i, "load", n(this._tileOnLoad, this, e, i)), Le(i, "error", n(this._tileOnError, this, e, i)), (this.options.crossOrigin || "" === this.options.crossOrigin) && (i.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin), i.alt = "", i.setAttribute("role", "presentation"), i.src = this.getTileUrl(t), i
                },
                getTileUrl: function(t) {
                    var i = {
                        r: Lt ? "@2x" : "",
                        s: this._getSubdomain(t),
                        x: t.x,
                        y: t.y,
                        z: this._getZoomForUrl()
                    };
                    if (this._map && !this._map.options.crs.infinite) {
                        var n = this._globalTileRange.max.y - t.y;
                        this.options.tms && (i.y = n), i["-y"] = n
                    }
                    return _(this._url, e(i, this.options))
                },
                _tileOnLoad: function(t, e) {
                    $ ? setTimeout(n(t, this, null, e), 0) : t(null, e)
                },
                _tileOnError: function(t, e, i) {
                    var n = this.options.errorTileUrl;
                    n && e.getAttribute("src") !== n && (e.src = n), t(i, e)
                },
                _onTileRemove: function(t) {
                    t.tile.onload = null
                },
                _getZoomForUrl: function() {
                    var t = this._tileZoom,
                        e = this.options.maxZoom;
                    return this.options.zoomReverse && (t = e - t), t + this.options.zoomOffset
                },
                _getSubdomain: function(t) {
                    var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
                    return this.options.subdomains[e]
                },
                _abortLoading: function() {
                    var t, e;
                    for (t in this._tiles) this._tiles[t].coords.z !== this._tileZoom && ((e = this._tiles[t].el).onload = h, e.onerror = h, e.complete || (e.src = g, ie(e), delete this._tiles[t]))
                },
                _removeTile: function(t) {
                    var e = this._tiles[t];
                    if (e) return ot || e.el.setAttribute("src", g), Qi.prototype._removeTile.call(this, t)
                },
                _tileReady: function(t, e, i) {
                    if (this._map && (!i || i.getAttribute("src") !== g)) return Qi.prototype._tileReady.call(this, t, e, i)
                }
            });

        function en(t, e) {
            return new tn(t, e)
        }
        var nn = tn.extend({
            defaultWmsParams: {
                service: "WMS",
                request: "GetMap",
                layers: "",
                styles: "",
                format: "image/jpeg",
                transparent: !1,
                version: "1.1.1"
            },
            options: {
                crs: null,
                uppercase: !1
            },
            initialize: function(t, i) {
                this._url = t;
                var n = e({}, this.defaultWmsParams);
                for (var o in i) o in this.options || (n[o] = i[o]);
                var r = (i = d(this, i)).detectRetina && Lt ? 2 : 1,
                    s = this.getTileSize();
                n.width = s.x * r, n.height = s.y * r, this.wmsParams = n
            },
            onAdd: function(t) {
                this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
                var e = this._wmsVersion >= 1.3 ? "crs" : "srs";
                this.wmsParams[e] = this._crs.code, tn.prototype.onAdd.call(this, t)
            },
            getTileUrl: function(t) {
                var e = this._tileCoordsToNwSe(t),
                    i = this._crs,
                    n = Z(i.project(e[0]), i.project(e[1])),
                    o = n.min,
                    r = n.max,
                    s = (this._wmsVersion >= 1.3 && this._crs === xi ? [o.y, o.x, r.y, r.x] : [o.x, o.y, r.x, r.y]).join(","),
                    a = tn.prototype.getTileUrl.call(this, t);
                return a + p(this.wmsParams, a, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + s
            },
            setParams: function(t, i) {
                return e(this.wmsParams, t), i || this.redraw(), this
            }
        });
        tn.WMS = nn, en.wms = function(t, e) {
            return new nn(t, e)
        };
        var on = bi.extend({
                options: {
                    padding: .1,
                    tolerance: 0
                },
                initialize: function(t) {
                    d(this, t), r(this), this._layers = this._layers || {}
                },
                onAdd: function() {
                    this._container || (this._initContainer(), this._zoomAnimated && ae(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this)
                },
                onRemove: function() {
                    this.off("update", this._updatePaths, this), this._destroyContainer()
                },
                getEvents: function() {
                    var t = {
                        viewreset: this._reset,
                        zoom: this._onZoom,
                        moveend: this._update,
                        zoomend: this._onZoomEnd
                    };
                    return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t
                },
                _onAnimZoom: function(t) {
                    this._updateTransform(t.center, t.zoom)
                },
                _onZoom: function() {
                    this._updateTransform(this._map.getCenter(), this._map.getZoom())
                },
                _updateTransform: function(t, e) {
                    var i = this._map.getZoomScale(e, this._zoom),
                        n = _e(this._container),
                        o = this._map.getSize().multiplyBy(.5 + this.options.padding),
                        r = this._map.project(this._center, e),
                        s = this._map.project(t, e).subtract(r),
                        a = o.multiplyBy(-i).add(n).add(o).subtract(s);
                    _t ? pe(this._container, a, i) : fe(this._container, a)
                },
                _reset: function() {
                    for (var t in this._update(), this._updateTransform(this._center, this._zoom), this._layers) this._layers[t]._reset()
                },
                _onZoomEnd: function() {
                    for (var t in this._layers) this._layers[t]._project()
                },
                _updatePaths: function() {
                    for (var t in this._layers) this._layers[t]._update()
                },
                _update: function() {
                    var t = this.options.padding,
                        e = this._map.getSize(),
                        i = this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();
                    this._bounds = new I(i, i.add(e.multiplyBy(1 + 2 * t)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom()
                }
            }),
            rn = on.extend({
                getEvents: function() {
                    var t = on.prototype.getEvents.call(this);
                    return t.viewprereset = this._onViewPreReset, t
                },
                _onViewPreReset: function() {
                    this._postponeUpdatePaths = !0
                },
                onAdd: function() {
                    on.prototype.onAdd.call(this), this._draw()
                },
                _initContainer: function() {
                    var t = this._container = document.createElement("canvas");
                    Le(t, "mousemove", this._onMouseMove, this), Le(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this), Le(t, "mouseout", this._handleMouseOut, this), this._ctx = t.getContext("2d")
                },
                _destroyContainer: function() {
                    S(this._redrawRequest), delete this._ctx, ie(this._container), Se(this._container), delete this._container
                },
                _updatePaths: function() {
                    if (!this._postponeUpdatePaths) {
                        for (var t in this._redrawBounds = null, this._layers) this._layers[t]._update();
                        this._redraw()
                    }
                },
                _update: function() {
                    if (!this._map._animatingZoom || !this._bounds) {
                        on.prototype._update.call(this);
                        var t = this._bounds,
                            e = this._container,
                            i = t.getSize(),
                            n = Lt ? 2 : 1;
                        fe(e, t.min), e.width = n * i.x, e.height = n * i.y, e.style.width = i.x + "px", e.style.height = i.y + "px", Lt && this._ctx.scale(2, 2), this._ctx.translate(-t.min.x, -t.min.y), this.fire("update")
                    }
                },
                _reset: function() {
                    on.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths())
                },
                _initPath: function(t) {
                    this._updateDashArray(t), this._layers[r(t)] = t;
                    var e = t._order = {
                        layer: t,
                        prev: this._drawLast,
                        next: null
                    };
                    this._drawLast && (this._drawLast.next = e), this._drawLast = e, this._drawFirst = this._drawFirst || this._drawLast
                },
                _addPath: function(t) {
                    this._requestRedraw(t)
                },
                _removePath: function(t) {
                    var e = t._order,
                        i = e.next,
                        n = e.prev;
                    i ? i.prev = n : this._drawLast = n, n ? n.next = i : this._drawFirst = i, delete t._order, delete this._layers[r(t)], this._requestRedraw(t)
                },
                _updatePath: function(t) {
                    this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t)
                },
                _updateStyle: function(t) {
                    this._updateDashArray(t), this._requestRedraw(t)
                },
                _updateDashArray: function(t) {
                    if ("string" == typeof t.options.dashArray) {
                        var e, i, n = t.options.dashArray.split(/[, ]+/),
                            o = [];
                        for (i = 0; i < n.length; i++) {
                            if (e = Number(n[i]), isNaN(e)) return;
                            o.push(e)
                        }
                        t.options._dashArray = o
                    } else t.options._dashArray = t.options.dashArray
                },
                _requestRedraw: function(t) {
                    this._map && (this._extendRedrawBounds(t), this._redrawRequest = this._redrawRequest || T(this._redraw, this))
                },
                _extendRedrawBounds: function(t) {
                    if (t._pxBounds) {
                        var e = (t.options.weight || 0) + 1;
                        this._redrawBounds = this._redrawBounds || new I, this._redrawBounds.extend(t._pxBounds.min.subtract([e, e])), this._redrawBounds.extend(t._pxBounds.max.add([e, e]))
                    }
                },
                _redraw: function() {
                    this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null
                },
                _clear: function() {
                    var t = this._redrawBounds;
                    if (t) {
                        var e = t.getSize();
                        this._ctx.clearRect(t.min.x, t.min.y, e.x, e.y)
                    } else this._ctx.save(), this._ctx.setTransform(1, 0, 0, 1, 0, 0), this._ctx.clearRect(0, 0, this._container.width, this._container.height), this._ctx.restore()
                },
                _draw: function() {
                    var t, e = this._redrawBounds;
                    if (this._ctx.save(), e) {
                        var i = e.getSize();
                        this._ctx.beginPath(), this._ctx.rect(e.min.x, e.min.y, i.x, i.y), this._ctx.clip()
                    }
                    this._drawing = !0;
                    for (var n = this._drawFirst; n; n = n.next) t = n.layer, (!e || t._pxBounds && t._pxBounds.intersects(e)) && t._updatePath();
                    this._drawing = !1, this._ctx.restore()
                },
                _updatePoly: function(t, e) {
                    if (this._drawing) {
                        var i, n, o, r, s = t._parts,
                            a = s.length,
                            h = this._ctx;
                        if (a) {
                            for (h.beginPath(), i = 0; i < a; i++) {
                                for (n = 0, o = s[i].length; n < o; n++) r = s[i][n], h[n ? "lineTo" : "moveTo"](r.x, r.y);
                                e && h.closePath()
                            }
                            this._fillStroke(h, t)
                        }
                    }
                },
                _updateCircle: function(t) {
                    if (this._drawing && !t._empty()) {
                        var e = t._point,
                            i = this._ctx,
                            n = Math.max(Math.round(t._radius), 1),
                            o = (Math.max(Math.round(t._radiusY), 1) || n) / n;
                        1 !== o && (i.save(), i.scale(1, o)), i.beginPath(), i.arc(e.x, e.y / o, n, 0, 2 * Math.PI, !1), 1 !== o && i.restore(), this._fillStroke(i, t)
                    }
                },
                _fillStroke: function(t, e) {
                    var i = e.options;
                    i.fill && (t.globalAlpha = i.fillOpacity, t.fillStyle = i.fillColor || i.color, t.fill(i.fillRule || "evenodd")), i.stroke && 0 !== i.weight && (t.setLineDash && t.setLineDash(e.options && e.options._dashArray || []), t.globalAlpha = i.opacity, t.lineWidth = i.weight, t.strokeStyle = i.color, t.lineCap = i.lineCap, t.lineJoin = i.lineJoin, t.stroke())
                },
                _onClick: function(t) {
                    for (var e, i, n = this._map.mouseEventToLayerPoint(t), o = this._drawFirst; o; o = o.next)(e = o.layer).options.interactive && e._containsPoint(n) && ("click" !== t.type && "preclick" === t.type || !this._map._draggableMoved(e)) && (i = e);
                    i && (De(t), this._fireEvent([i], t))
                },
                _onMouseMove: function(t) {
                    if (this._map && !this._map.dragging.moving() && !this._map._animatingZoom) {
                        var e = this._map.mouseEventToLayerPoint(t);
                        this._handleMouseHover(t, e)
                    }
                },
                _handleMouseOut: function(t) {
                    var e = this._hoveredLayer;
                    e && (he(this._container, "leaflet-interactive"), this._fireEvent([e], t, "mouseout"), this._hoveredLayer = null, this._mouseHoverThrottled = !1)
                },
                _handleMouseHover: function(t, e) {
                    if (!this._mouseHoverThrottled) {
                        for (var i, o, r = this._drawFirst; r; r = r.next)(i = r.layer).options.interactive && i._containsPoint(e) && (o = i);
                        o !== this._hoveredLayer && (this._handleMouseOut(t), o && (ae(this._container, "leaflet-interactive"), this._fireEvent([o], t, "mouseover"), this._hoveredLayer = o)), this._hoveredLayer && this._fireEvent([this._hoveredLayer], t), this._mouseHoverThrottled = !0, setTimeout(n((function() {
                            this._mouseHoverThrottled = !1
                        }), this), 32)
                    }
                },
                _fireEvent: function(t, e, i) {
                    this._map._fireDOMEvent(e, i || e.type, t)
                },
                _bringToFront: function(t) {
                    var e = t._order;
                    if (e) {
                        var i = e.next,
                            n = e.prev;
                        i && (i.prev = n, n ? n.next = i : i && (this._drawFirst = i), e.prev = this._drawLast, this._drawLast.next = e, e.next = null, this._drawLast = e, this._requestRedraw(t))
                    }
                },
                _bringToBack: function(t) {
                    var e = t._order;
                    if (e) {
                        var i = e.next,
                            n = e.prev;
                        n && (n.next = i, i ? i.prev = n : n && (this._drawLast = n), e.prev = null, e.next = this._drawFirst, this._drawFirst.prev = e, this._drawFirst = e, this._requestRedraw(t))
                    }
                }
            });

        function sn(t) {
            return St ? new rn(t) : null
        }
        var an = function() {
                try {
                    return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
                        function(t) {
                            return document.createElement("<lvml:" + t + ' class="lvml">')
                        }
                } catch (t) {
                    return function(t) {
                        return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')
                    }
                }
            }(),
            hn = {
                _initContainer: function() {
                    this._container = ee("div", "leaflet-vml-container")
                },
                _update: function() {
                    this._map._animatingZoom || (on.prototype._update.call(this), this.fire("update"))
                },
                _initPath: function(t) {
                    var e = t._container = an("shape");
                    ae(e, "leaflet-vml-shape " + (this.options.className || "")), e.coordsize = "1 1", t._path = an("path"), e.appendChild(t._path), this._updateStyle(t), this._layers[r(t)] = t
                },
                _addPath: function(t) {
                    var e = t._container;
                    this._container.appendChild(e), t.options.interactive && t.addInteractiveTarget(e)
                },
                _removePath: function(t) {
                    var e = t._container;
                    ie(e), t.removeInteractiveTarget(e), delete this._layers[r(t)]
                },
                _updateStyle: function(t) {
                    var e = t._stroke,
                        i = t._fill,
                        n = t.options,
                        o = t._container;
                    o.stroked = !!n.stroke, o.filled = !!n.fill, n.stroke ? (e || (e = t._stroke = an("stroke")), o.appendChild(e), e.weight = n.weight + "px", e.color = n.color, e.opacity = n.opacity, n.dashArray ? e.dashStyle = m(n.dashArray) ? n.dashArray.join(" ") : n.dashArray.replace(/( *, *)/g, " ") : e.dashStyle = "", e.endcap = n.lineCap.replace("butt", "flat"), e.joinstyle = n.lineJoin) : e && (o.removeChild(e), t._stroke = null), n.fill ? (i || (i = t._fill = an("fill")), o.appendChild(i), i.color = n.fillColor || n.color, i.opacity = n.fillOpacity) : i && (o.removeChild(i), t._fill = null)
                },
                _updateCircle: function(t) {
                    var e = t._point.round(),
                        i = Math.round(t._radius),
                        n = Math.round(t._radiusY || i);
                    this._setPath(t, t._empty() ? "M0 0" : "AL " + e.x + "," + e.y + " " + i + "," + n + " 0,23592600")
                },
                _setPath: function(t, e) {
                    t._path.v = e
                },
                _bringToFront: function(t) {
                    oe(t._container)
                },
                _bringToBack: function(t) {
                    re(t._container)
                }
            },
            un = Mt ? an : K,
            cn = on.extend({
                getEvents: function() {
                    var t = on.prototype.getEvents.call(this);
                    return t.zoomstart = this._onZoomStart, t
                },
                _initContainer: function() {
                    this._container = un("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = un("g"), this._container.appendChild(this._rootGroup)
                },
                _destroyContainer: function() {
                    ie(this._container), Se(this._container), delete this._container, delete this._rootGroup, delete this._svgSize
                },
                _onZoomStart: function() {
                    this._update()
                },
                _update: function() {
                    if (!this._map._animatingZoom || !this._bounds) {
                        on.prototype._update.call(this);
                        var t = this._bounds,
                            e = t.getSize(),
                            i = this._container;
                        this._svgSize && this._svgSize.equals(e) || (this._svgSize = e, i.setAttribute("width", e.x), i.setAttribute("height", e.y)), fe(i, t.min), i.setAttribute("viewBox", [t.min.x, t.min.y, e.x, e.y].join(" ")), this.fire("update")
                    }
                },
                _initPath: function(t) {
                    var e = t._path = un("path");
                    t.options.className && ae(e, t.options.className), t.options.interactive && ae(e, "leaflet-interactive"), this._updateStyle(t), this._layers[r(t)] = t
                },
                _addPath: function(t) {
                    this._rootGroup || this._initContainer(), this._rootGroup.appendChild(t._path), t.addInteractiveTarget(t._path)
                },
                _removePath: function(t) {
                    ie(t._path), t.removeInteractiveTarget(t._path), delete this._layers[r(t)]
                },
                _updatePath: function(t) {
                    t._project(), t._update()
                },
                _updateStyle: function(t) {
                    var e = t._path,
                        i = t.options;
                    e && (i.stroke ? (e.setAttribute("stroke", i.color), e.setAttribute("stroke-opacity", i.opacity), e.setAttribute("stroke-width", i.weight), e.setAttribute("stroke-linecap", i.lineCap), e.setAttribute("stroke-linejoin", i.lineJoin), i.dashArray ? e.setAttribute("stroke-dasharray", i.dashArray) : e.removeAttribute("stroke-dasharray"), i.dashOffset ? e.setAttribute("stroke-dashoffset", i.dashOffset) : e.removeAttribute("stroke-dashoffset")) : e.setAttribute("stroke", "none"), i.fill ? (e.setAttribute("fill", i.fillColor || i.color), e.setAttribute("fill-opacity", i.fillOpacity), e.setAttribute("fill-rule", i.fillRule || "evenodd")) : e.setAttribute("fill", "none"))
                },
                _updatePoly: function(t, e) {
                    this._setPath(t, Y(t._parts, e))
                },
                _updateCircle: function(t) {
                    var e = t._point,
                        i = Math.max(Math.round(t._radius), 1),
                        n = "a" + i + "," + (Math.max(Math.round(t._radiusY), 1) || i) + " 0 1,0 ",
                        o = t._empty() ? "M0 0" : "M" + (e.x - i) + "," + e.y + n + 2 * i + ",0 " + n + 2 * -i + ",0 ";
                    this._setPath(t, o)
                },
                _setPath: function(t, e) {
                    t._path.setAttribute("d", e)
                },
                _bringToFront: function(t) {
                    oe(t._path)
                },
                _bringToBack: function(t) {
                    re(t._path)
                }
            });

        function ln(t) {
            return Et || Mt ? new cn(t) : null
        }
        Mt && cn.include(hn), Ue.include({
            getRenderer: function(t) {
                var e = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer;
                return e || (e = this._renderer = this._createRenderer()), this.hasLayer(e) || this.addLayer(e), e
            },
            _getPaneRenderer: function(t) {
                if ("overlayPane" === t || void 0 === t) return !1;
                var e = this._paneRenderers[t];
                return void 0 === e && (e = this._createRenderer({
                    pane: t
                }), this._paneRenderers[t] = e), e
            },
            _createRenderer: function(t) {
                return this.options.preferCanvas && sn(t) || ln(t)
            }
        });
        var dn = Oi.extend({
            initialize: function(t, e) {
                Oi.prototype.initialize.call(this, this._boundsToLatLngs(t), e)
            },
            setBounds: function(t) {
                return this.setLatLngs(this._boundsToLatLngs(t))
            },
            _boundsToLatLngs: function(t) {
                return [(t = R(t)).getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()]
            }
        });
        cn.create = un, cn.pointsToPath = Y, Ii.geometryToLayer = Zi, Ii.coordsToLatLng = Ri, Ii.coordsToLatLngs = ji, Ii.latLngToCoords = Ni, Ii.latLngsToCoords = Di, Ii.getFeature = Fi, Ii.asFeature = Wi, Ue.mergeOptions({
            boxZoom: !0
        });
        var pn = $e.extend({
            initialize: function(t) {
                this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._resetStateTimeout = 0, t.on("unload", this._destroy, this)
            },
            addHooks: function() {
                Le(this._container, "mousedown", this._onMouseDown, this)
            },
            removeHooks: function() {
                Se(this._container, "mousedown", this._onMouseDown, this)
            },
            moved: function() {
                return this._moved
            },
            _destroy: function() {
                ie(this._pane), delete this._pane
            },
            _resetState: function() {
                this._resetStateTimeout = 0, this._moved = !1
            },
            _clearDeferredResetState: function() {
                0 !== this._resetStateTimeout && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0)
            },
            _onMouseDown: function(t) {
                if (!t.shiftKey || 1 !== t.which && 1 !== t.button) return !1;
                this._clearDeferredResetState(), this._resetState(), Wt(), ve(), this._startPoint = this._map.mouseEventToContainerPoint(t), Le(document, {
                    contextmenu: Ze,
                    mousemove: this._onMouseMove,
                    mouseup: this._onMouseUp,
                    keydown: this._onKeyDown
                }, this)
            },
            _onMouseMove: function(t) {
                this._moved || (this._moved = !0, this._box = ee("div", "leaflet-zoom-box", this._container), ae(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(t);
                var e = new I(this._point, this._startPoint),
                    i = e.getSize();
                fe(this._box, e.min), this._box.style.width = i.x + "px", this._box.style.height = i.y + "px"
            },
            _finish: function() {
                this._moved && (ie(this._box), he(this._container, "leaflet-crosshair")), Ht(), ge(), Se(document, {
                    contextmenu: Ze,
                    mousemove: this._onMouseMove,
                    mouseup: this._onMouseUp,
                    keydown: this._onKeyDown
                }, this)
            },
            _onMouseUp: function(t) {
                if ((1 === t.which || 1 === t.button) && (this._finish(), this._moved)) {
                    this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(n(this._resetState, this), 0);
                    var e = new B(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point));
                    this._map.fitBounds(e).fire("boxzoomend", {
                        boxZoomBounds: e
                    })
                }
            },
            _onKeyDown: function(t) {
                27 === t.keyCode && this._finish()
            }
        });
        Ue.addInitHook("addHandler", "boxZoom", pn), Ue.mergeOptions({
            doubleClickZoom: !0
        });
        var fn = $e.extend({
            addHooks: function() {
                this._map.on("dblclick", this._onDoubleClick, this)
            },
            removeHooks: function() {
                this._map.off("dblclick", this._onDoubleClick, this)
            },
            _onDoubleClick: function(t) {
                var e = this._map,
                    i = e.getZoom(),
                    n = e.options.zoomDelta,
                    o = t.originalEvent.shiftKey ? i - n : i + n;
                "center" === e.options.doubleClickZoom ? e.setZoom(o) : e.setZoomAround(t.containerPoint, o)
            }
        });
        Ue.addInitHook("addHandler", "doubleClickZoom", fn), Ue.mergeOptions({
            dragging: !0,
            inertia: !it,
            inertiaDeceleration: 3400,
            inertiaMaxSpeed: 1 / 0,
            easeLinearity: .2,
            worldCopyJump: !1,
            maxBoundsViscosity: 0
        });
        var _n = $e.extend({
            addHooks: function() {
                if (!this._draggable) {
                    var t = this._map;
                    this._draggable = new oi(t._mapPane, t._container), this._draggable.on({
                        dragstart: this._onDragStart,
                        drag: this._onDrag,
                        dragend: this._onDragEnd
                    }, this), this._draggable.on("predrag", this._onPreDragLimit, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t.on("zoomend", this._onZoomEnd, this), t.whenReady(this._onZoomEnd, this))
                }
                ae(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = []
            },
            removeHooks: function() {
                he(this._map._container, "leaflet-grab"), he(this._map._container, "leaflet-touch-drag"), this._draggable.disable()
            },
            moved: function() {
                return this._draggable && this._draggable._moved
            },
            moving: function() {
                return this._draggable && this._draggable._moving
            },
            _onDragStart: function() {
                var t = this._map;
                if (t._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
                    var e = R(this._map.options.maxBounds);
                    this._offsetLimit = Z(this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity))
                } else this._offsetLimit = null;
                t.fire("movestart").fire("dragstart"), t.options.inertia && (this._positions = [], this._times = [])
            },
            _onDrag: function(t) {
                if (this._map.options.inertia) {
                    var e = this._lastTime = +new Date,
                        i = this._lastPos = this._draggable._absPos || this._draggable._newPos;
                    this._positions.push(i), this._times.push(e), this._prunePositions(e)
                }
                this._map.fire("move", t).fire("drag", t)
            },
            _prunePositions: function(t) {
                for (; this._positions.length > 1 && t - this._times[0] > 50;) this._positions.shift(), this._times.shift()
            },
            _onZoomEnd: function() {
                var t = this._map.getSize().divideBy(2),
                    e = this._map.latLngToLayerPoint([0, 0]);
                this._initialWorldOffset = e.subtract(t).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x
            },
            _viscousLimit: function(t, e) {
                return t - (t - e) * this._viscosity
            },
            _onPreDragLimit: function() {
                if (this._viscosity && this._offsetLimit) {
                    var t = this._draggable._newPos.subtract(this._draggable._startPos),
                        e = this._offsetLimit;
                    t.x < e.min.x && (t.x = this._viscousLimit(t.x, e.min.x)), t.y < e.min.y && (t.y = this._viscousLimit(t.y, e.min.y)), t.x > e.max.x && (t.x = this._viscousLimit(t.x, e.max.x)), t.y > e.max.y && (t.y = this._viscousLimit(t.y, e.max.y)), this._draggable._newPos = this._draggable._startPos.add(t)
                }
            },
            _onPreDragWrap: function() {
                var t = this._worldWidth,
                    e = Math.round(t / 2),
                    i = this._initialWorldOffset,
                    n = this._draggable._newPos.x,
                    o = (n - e + i) % t + e - i,
                    r = (n + e + i) % t - e - i,
                    s = Math.abs(o + i) < Math.abs(r + i) ? o : r;
                this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = s
            },
            _onDragEnd: function(t) {
                var e = this._map,
                    i = e.options,
                    n = !i.inertia || this._times.length < 2;
                if (e.fire("dragend", t), n) e.fire("moveend");
                else {
                    this._prunePositions(+new Date);
                    var o = this._lastPos.subtract(this._positions[0]),
                        r = (this._lastTime - this._times[0]) / 1e3,
                        s = i.easeLinearity,
                        a = o.multiplyBy(s / r),
                        h = a.distanceTo([0, 0]),
                        u = Math.min(i.inertiaMaxSpeed, h),
                        c = a.multiplyBy(u / h),
                        l = u / (i.inertiaDeceleration * s),
                        d = c.multiplyBy(-l / 2).round();
                    d.x || d.y ? (d = e._limitOffset(d, e.options.maxBounds), T((function() {
                        e.panBy(d, {
                            duration: l,
                            easeLinearity: s,
                            noMoveStart: !0,
                            animate: !0
                        })
                    }))) : e.fire("moveend")
                }
            }
        });
        Ue.addInitHook("addHandler", "dragging", _n), Ue.mergeOptions({
            keyboard: !0,
            keyboardPanDelta: 80
        });
        var mn = $e.extend({
            keyCodes: {
                left: [37],
                right: [39],
                down: [40],
                up: [38],
                zoomIn: [187, 107, 61, 171],
                zoomOut: [189, 109, 54, 173]
            },
            initialize: function(t) {
                this._map = t, this._setPanDelta(t.options.keyboardPanDelta), this._setZoomDelta(t.options.zoomDelta)
            },
            addHooks: function() {
                var t = this._map._container;
                t.tabIndex <= 0 && (t.tabIndex = "0"), Le(t, {
                    focus: this._onFocus,
                    blur: this._onBlur,
                    mousedown: this._onMouseDown
                }, this), this._map.on({
                    focus: this._addHooks,
                    blur: this._removeHooks
                }, this)
            },
            removeHooks: function() {
                this._removeHooks(), Se(this._map._container, {
                    focus: this._onFocus,
                    blur: this._onBlur,
                    mousedown: this._onMouseDown
                }, this), this._map.off({
                    focus: this._addHooks,
                    blur: this._removeHooks
                }, this)
            },
            _onMouseDown: function() {
                if (!this._focused) {
                    var t = document.body,
                        e = document.documentElement,
                        i = t.scrollTop || e.scrollTop,
                        n = t.scrollLeft || e.scrollLeft;
                    this._map._container.focus(), window.scrollTo(n, i)
                }
            },
            _onFocus: function() {
                this._focused = !0, this._map.fire("focus")
            },
            _onBlur: function() {
                this._focused = !1, this._map.fire("blur")
            },
            _setPanDelta: function(t) {
                var e, i, n = this._panKeys = {},
                    o = this.keyCodes;
                for (e = 0, i = o.left.length; e < i; e++) n[o.left[e]] = [-1 * t, 0];
                for (e = 0, i = o.right.length; e < i; e++) n[o.right[e]] = [t, 0];
                for (e = 0, i = o.down.length; e < i; e++) n[o.down[e]] = [0, t];
                for (e = 0, i = o.up.length; e < i; e++) n[o.up[e]] = [0, -1 * t]
            },
            _setZoomDelta: function(t) {
                var e, i, n = this._zoomKeys = {},
                    o = this.keyCodes;
                for (e = 0, i = o.zoomIn.length; e < i; e++) n[o.zoomIn[e]] = t;
                for (e = 0, i = o.zoomOut.length; e < i; e++) n[o.zoomOut[e]] = -t
            },
            _addHooks: function() {
                Le(document, "keydown", this._onKeyDown, this)
            },
            _removeHooks: function() {
                Se(document, "keydown", this._onKeyDown, this)
            },
            _onKeyDown: function(t) {
                if (!(t.altKey || t.ctrlKey || t.metaKey)) {
                    var e, i = t.keyCode,
                        n = this._map;
                    if (i in this._panKeys) n._panAnim && n._panAnim._inProgress || (e = this._panKeys[i], t.shiftKey && (e = O(e).multiplyBy(3)), n.panBy(e), n.options.maxBounds && n.panInsideBounds(n.options.maxBounds));
                    else if (i in this._zoomKeys) n.setZoom(n.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[i]);
                    else {
                        if (27 !== i || !n._popup || !n._popup.options.closeOnEscapeKey) return;
                        n.closePopup()
                    }
                    Ze(t)
                }
            }
        });
        Ue.addInitHook("addHandler", "keyboard", mn), Ue.mergeOptions({
            scrollWheelZoom: !0,
            wheelDebounceTime: 40,
            wheelPxPerZoomLevel: 60
        });
        var vn = $e.extend({
            addHooks: function() {
                Le(this._map._container, "wheel", this._onWheelScroll, this), this._delta = 0
            },
            removeHooks: function() {
                Se(this._map._container, "wheel", this._onWheelScroll, this)
            },
            _onWheelScroll: function(t) {
                var e = je(t),
                    i = this._map.options.wheelDebounceTime;
                this._delta += e, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +new Date);
                var o = Math.max(i - (+new Date - this._startTime), 0);
                clearTimeout(this._timer), this._timer = setTimeout(n(this._performZoom, this), o), Ze(t)
            },
            _performZoom: function() {
                var t = this._map,
                    e = t.getZoom(),
                    i = this._map.options.zoomSnap || 0;
                t._stop();
                var n = this._delta / (4 * this._map.options.wheelPxPerZoomLevel),
                    o = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(n)))) / Math.LN2,
                    r = i ? Math.ceil(o / i) * i : o,
                    s = t._limitZoom(e + (this._delta > 0 ? r : -r)) - e;
                this._delta = 0, this._startTime = null, s && ("center" === t.options.scrollWheelZoom ? t.setZoom(e + s) : t.setZoomAround(this._lastMousePos, e + s))
            }
        });
        Ue.addInitHook("addHandler", "scrollWheelZoom", vn), Ue.mergeOptions({
            tap: !0,
            tapTolerance: 15
        });
        var gn = $e.extend({
            addHooks: function() {
                Le(this._map._container, "touchstart", this._onDown, this)
            },
            removeHooks: function() {
                Se(this._map._container, "touchstart", this._onDown, this)
            },
            _onDown: function(t) {
                if (t.touches) {
                    if (Ie(t), this._fireClick = !0, t.touches.length > 1) return this._fireClick = !1, void clearTimeout(this._holdTimeout);
                    var e = t.touches[0],
                        i = e.target;
                    this._startPos = this._newPos = new k(e.clientX, e.clientY), i.tagName && "a" === i.tagName.toLowerCase() && ae(i, "leaflet-active"), this._holdTimeout = setTimeout(n((function() {
                        this._isTapValid() && (this._fireClick = !1, this._onUp(), this._simulateEvent("contextmenu", e))
                    }), this), 1e3), this._simulateEvent("mousedown", e), Le(document, {
                        touchmove: this._onMove,
                        touchend: this._onUp
                    }, this)
                }
            },
            _onUp: function(t) {
                if (clearTimeout(this._holdTimeout), Se(document, {
                    touchmove: this._onMove,
                    touchend: this._onUp
                }, this), this._fireClick && t && t.changedTouches) {
                    var e = t.changedTouches[0],
                        i = e.target;
                    i && i.tagName && "a" === i.tagName.toLowerCase() && he(i, "leaflet-active"), this._simulateEvent("mouseup", e), this._isTapValid() && this._simulateEvent("click", e)
                }
            },
            _isTapValid: function() {
                return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance
            },
            _onMove: function(t) {
                var e = t.touches[0];
                this._newPos = new k(e.clientX, e.clientY), this._simulateEvent("mousemove", e)
            },
            _simulateEvent: function(t, e) {
                var i = document.createEvent("MouseEvents");
                i._simulated = !0, e.target._simulatedClick = !0, i.initMouseEvent(t, !0, !0, window, 1, e.screenX, e.screenY, e.clientX, e.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(i)
            }
        });
        !wt || xt && !ht || Ue.addInitHook("addHandler", "tap", gn), Ue.mergeOptions({
            touchZoom: wt && !it,
            bounceAtZoomLimits: !0
        });
        var yn = $e.extend({
            addHooks: function() {
                ae(this._map._container, "leaflet-touch-zoom"), Le(this._map._container, "touchstart", this._onTouchStart, this)
            },
            removeHooks: function() {
                he(this._map._container, "leaflet-touch-zoom"), Se(this._map._container, "touchstart", this._onTouchStart, this)
            },
            _onTouchStart: function(t) {
                var e = this._map;
                if (t.touches && 2 === t.touches.length && !e._animatingZoom && !this._zooming) {
                    var i = e.mouseEventToContainerPoint(t.touches[0]),
                        n = e.mouseEventToContainerPoint(t.touches[1]);
                    this._centerPoint = e.getSize()._divideBy(2), this._startLatLng = e.containerPointToLatLng(this._centerPoint), "center" !== e.options.touchZoom && (this._pinchStartLatLng = e.containerPointToLatLng(i.add(n)._divideBy(2))), this._startDist = i.distanceTo(n), this._startZoom = e.getZoom(), this._moved = !1, this._zooming = !0, e._stop(), Le(document, "touchmove", this._onTouchMove, this), Le(document, "touchend", this._onTouchEnd, this), Ie(t)
                }
            },
            _onTouchMove: function(t) {
                if (t.touches && 2 === t.touches.length && this._zooming) {
                    var e = this._map,
                        i = e.mouseEventToContainerPoint(t.touches[0]),
                        o = e.mouseEventToContainerPoint(t.touches[1]),
                        r = i.distanceTo(o) / this._startDist;
                    if (this._zoom = e.getScaleZoom(r, this._startZoom), !e.options.bounceAtZoomLimits && (this._zoom < e.getMinZoom() && r < 1 || this._zoom > e.getMaxZoom() && r > 1) && (this._zoom = e._limitZoom(this._zoom)), "center" === e.options.touchZoom) {
                        if (this._center = this._startLatLng, 1 === r) return
                    } else {
                        var s = i._add(o)._divideBy(2)._subtract(this._centerPoint);
                        if (1 === r && 0 === s.x && 0 === s.y) return;
                        this._center = e.unproject(e.project(this._pinchStartLatLng, this._zoom).subtract(s), this._zoom)
                    }
                    this._moved || (e._moveStart(!0, !1), this._moved = !0), S(this._animRequest);
                    var a = n(e._move, e, this._center, this._zoom, {
                        pinch: !0,
                        round: !1
                    });
                    this._animRequest = T(a, this, !0), Ie(t)
                }
            },
            _onTouchEnd: function() {
                this._moved && this._zooming ? (this._zooming = !1, S(this._animRequest), Se(document, "touchmove", this._onTouchMove, this), Se(document, "touchend", this._onTouchEnd, this), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom))) : this._zooming = !1
            }
        });
        Ue.addInitHook("addHandler", "touchZoom", yn), Ue.BoxZoom = pn, Ue.DoubleClickZoom = fn, Ue.Drag = _n, Ue.Keyboard = mn, Ue.ScrollWheelZoom = vn, Ue.Tap = gn, Ue.TouchZoom = yn, t.version = "1.7.1", t.Control = Ve, t.control = Ge, t.Browser = Ct, t.Evented = C, t.Mixin = ti, t.Util = E, t.Class = M, t.Handler = $e, t.extend = e, t.bind = n, t.stamp = r, t.setOptions = d, t.DomEvent = He, t.DomUtil = Pe, t.PosAnimation = qe, t.Draggable = oi, t.LineUtil = pi, t.PolyUtil = _i, t.Point = k, t.point = O, t.Bounds = I, t.bounds = Z, t.Transformation = q, t.transformation = U, t.Projection = gi, t.LatLng = j, t.latLng = N, t.LatLngBounds = B, t.latLngBounds = R, t.CRS = F, t.GeoJSON = Ii, t.geoJSON = qi, t.geoJson = Ui, t.Layer = bi, t.LayerGroup = Pi, t.layerGroup = function(t, e) {
            return new Pi(t, e)
        }, t.FeatureGroup = Li, t.featureGroup = function(t, e) {
            return new Li(t, e)
        }, t.ImageOverlay = Vi, t.imageOverlay = function(t, e, i) {
            return new Vi(t, e, i)
        }, t.VideoOverlay = Gi, t.videoOverlay = function(t, e, i) {
            return new Gi(t, e, i)
        }, t.SVGOverlay = Ki, t.svgOverlay = function(t, e, i) {
            return new Ki(t, e, i)
        }, t.DivOverlay = Yi, t.Popup = Xi, t.popup = function(t, e) {
            return new Xi(t, e)
        }, t.Tooltip = Ji, t.tooltip = function(t, e) {
            return new Ji(t, e)
        }, t.Icon = Ti, t.icon = function(t) {
            return new Ti(t)
        }, t.DivIcon = $i, t.divIcon = function(t) {
            return new $i(t)
        }, t.Marker = Mi, t.marker = function(t, e) {
            return new Mi(t, e)
        }, t.TileLayer = tn, t.tileLayer = en, t.GridLayer = Qi, t.gridLayer = function(t) {
            return new Qi(t)
        }, t.SVG = cn, t.svg = ln, t.Renderer = on, t.Canvas = rn, t.canvas = sn, t.Path = zi, t.CircleMarker = Ci, t.circleMarker = function(t, e) {
            return new Ci(t, e)
        }, t.Circle = ki, t.circle = function(t, e, i) {
            return new ki(t, e, i)
        }, t.Polyline = Ai, t.polyline = function(t, e) {
            return new Ai(t, e)
        }, t.Polygon = Oi, t.polygon = function(t, e) {
            return new Oi(t, e)
        }, t.Rectangle = dn, t.rectangle = function(t, e) {
            return new dn(t, e)
        }, t.Map = Ue, t.map = function(t, e) {
            return new Ue(t, e)
        };
        var xn = window.L;
        t.noConflict = function() {
            return window.L = xn, this
        }, window.L = t
    }(e)
}, function(t, e) {
    var i = {}.toString;
    t.exports = function(t) {
        return i.call(t).slice(8, -1)
    }
}, function(t, e, i) {
    var n = i(6);
    t.exports = function(t, e) {
        if (!n(t)) return t;
        var i, o;
        if (e && "function" == typeof(i = t.toString) && !n(o = i.call(t))) return o;
        if ("function" == typeof(i = t.valueOf) && !n(o = i.call(t))) return o;
        if (!e && "function" == typeof(i = t.toString) && !n(o = i.call(t))) return o;
        throw TypeError("Can't convert object to primitive value")
    }
}, function(t, e, i) {
    var n, o, r, s = i(78),
        a = i(1),
        h = i(6),
        u = i(7),
        c = i(3),
        l = i(31),
        d = i(22),
        p = i(24),
        f = a.WeakMap;
    if (s) {
        var _ = l.state || (l.state = new f),
            m = _.get,
            v = _.has,
            g = _.set;
        n = function(t, e) {
            return e.facade = t, g.call(_, t, e), e
        }, o = function(t) {
            return m.call(_, t) || {}
        }, r = function(t) {
            return v.call(_, t)
        }
    } else {
        var y = d("state");
        p[y] = !0, n = function(t, e) {
            return e.facade = t, u(t, y, e), e
        }, o = function(t) {
            return c(t, y) ? t[y] : {}
        }, r = function(t) {
            return c(t, y)
        }
    }
    t.exports = {
        set: n,
        get: o,
        has: r,
        enforce: function(t) {
            return r(t) ? o(t) : n(t, {})
        },
        getterFor: function(t) {
            return function(e) {
                var i;
                if (!h(e) || (i = o(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
                return i
            }
        }
    }
}, function(t, e, i) {
    var n = i(32),
        o = i(33),
        r = n("keys");
    t.exports = function(t) {
        return r[t] || (r[t] = o(t))
    }
}, function(t, e) {
    t.exports = !1
}, function(t, e) {
    t.exports = {}
}, function(t, e, i) {
    var n = i(49),
        o = i(1),
        r = function(t) {
            return "function" == typeof t ? t : void 0
        };
    t.exports = function(t, e) {
        return arguments.length < 2 ? r(n[t]) || r(o[t]) : n[t] && n[t][e] || o[t] && o[t][e]
    }
}, function(t, e) {
    var i = Math.ceil,
        n = Math.floor;
    t.exports = function(t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? n : i)(t)
    }
}, function(t, e, i) {
    var n = i(57),
        o = i(44),
        r = i(13),
        s = i(12),
        a = i(58),
        h = [].push,
        u = function(t) {
            var e = 1 == t,
                i = 2 == t,
                u = 3 == t,
                c = 4 == t,
                l = 6 == t,
                d = 5 == t || l;
            return function(p, f, _, m) {
                for (var v, g, y = r(p), x = o(y), w = n(f, _, 3), b = s(x.length), P = 0, L = m || a, T = e ? L(p, b) : i ? L(p, 0) : void 0; b > P; P++)
                    if ((d || P in x) && (g = w(v = x[P], P, y), t))
                        if (e) T[P] = g;
                        else if (g) switch (t) {
                            case 3:
                                return !0;
                            case 5:
                                return v;
                            case 6:
                                return P;
                            case 2:
                                h.call(T, v)
                        } else if (c) return !1;
                return l ? -1 : u || c ? c : T
            }
        };
    t.exports = {
        forEach: u(0),
        map: u(1),
        filter: u(2),
        some: u(3),
        every: u(4),
        find: u(5),
        findIndex: u(6)
    }
}, function(t, e, i) {
    var n = i(9),
        o = i(2),
        r = i(3),
        s = Object.defineProperty,
        a = {},
        h = function(t) {
            throw t
        };
    t.exports = function(t, e) {
        if (r(a, t)) return a[t];
        e || (e = {});
        var i = [][t],
            u = !!r(e, "ACCESSORS") && e.ACCESSORS,
            c = r(e, 0) ? e[0] : h,
            l = r(e, 1) ? e[1] : void 0;
        return a[t] = !!i && !o((function() {
            if (u && !n) return !0;
            var t = {
                length: -1
            };
            u ? s(t, 1, {
                enumerable: !0,
                get: h
            }) : t[1] = 1, i.call(t, c, l)
        }))
    }
}, function(t, e, i) {
    var n = i(9),
        o = i(43),
        r = i(14),
        s = i(10),
        a = i(20),
        h = i(3),
        u = i(45),
        c = Object.getOwnPropertyDescriptor;
    e.f = n ? c : function(t, e) {
        if (t = s(t), e = a(e, !0), u) try {
            return c(t, e)
        } catch (t) {}
        if (h(t, e)) return r(!o.f.call(t, e), t[e])
    }
}, function(t, e, i) {
    var n = i(1),
        o = i(7);
    t.exports = function(t, e) {
        try {
            o(n, t, e)
        } catch (i) {
            n[t] = e
        }
        return e
    }
}, function(t, e, i) {
    var n = i(1),
        o = i(30),
        r = n["__core-js_shared__"] || o("__core-js_shared__", {});
    t.exports = r
}, function(t, e, i) {
    var n = i(23),
        o = i(31);
    (t.exports = function(t, e) {
        return o[t] || (o[t] = void 0 !== e ? e : {})
    })("versions", []).push({
        version: "3.7.0",
        mode: n ? "pure" : "global",
        copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
    })
}, function(t, e) {
    var i = 0,
        n = Math.random();
    t.exports = function(t) {
        return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++i + n).toString(36)
    }
}, function(t, e, i) {
    var n = i(50),
        o = i(35).concat("length", "prototype");
    e.f = Object.getOwnPropertyNames || function(t) {
        return n(t, o)
    }
}, function(t, e) {
    t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
}, function(t, e, i) {
    var n = i(2);
    t.exports = !!Object.getOwnPropertySymbols && !n((function() {
        return !String(Symbol())
    }))
}, function(t, e, i) {
    var n, o = i(5),
        r = i(82),
        s = i(35),
        a = i(24),
        h = i(83),
        u = i(46),
        c = i(22),
        l = c("IE_PROTO"),
        d = function() {},
        p = function(t) {
            return "<script>" + t + "<\/script>"
        },
        f = function() {
            try {
                n = document.domain && new ActiveXObject("htmlfile")
            } catch (t) {}
            var t, e;
            f = n ? function(t) {
                t.write(p("")), t.close();
                var e = t.parentWindow.Object;
                return t = null, e
            }(n) : ((e = u("iframe")).style.display = "none", h.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write(p("document.F=Object")), t.close(), t.F);
            for (var i = s.length; i--;) delete f.prototype[s[i]];
            return f()
        };
    a[l] = !0, t.exports = Object.create || function(t, e) {
        var i;
        return null !== t ? (d.prototype = o(t), i = new d, d.prototype = null, i[l] = t) : i = f(), void 0 === e ? i : r(i, e)
    }
}, function(t, e, i) {
    var n = i(8).f,
        o = i(3),
        r = i(0)("toStringTag");
    t.exports = function(t, e, i) {
        t && !o(t = i ? t : t.prototype, r) && n(t, r, {
            configurable: !0,
            value: e
        })
    }
}, function(t, e, i) {
    "use strict";
    var n = i(20),
        o = i(8),
        r = i(14);
    t.exports = function(t, e, i) {
        var s = n(e);
        s in t ? o.f(t, s, r(0, i)) : t[s] = i
    }
}, function(t, e, i) {
    var n = i(2),
        o = i(0),
        r = i(59),
        s = o("species");
    t.exports = function(t) {
        return r >= 51 || !n((function() {
            var e = [];
            return (e.constructor = {})[s] = function() {
                return {
                    foo: 1
                }
            }, 1 !== e[t](Boolean).foo
        }))
    }
}, function(t, e, i) {
    var n = {};
    n[i(0)("toStringTag")] = "z", t.exports = "[object z]" === String(n)
}, function(t, e, i) {
    "use strict";
    var n, o, r = i(69),
        s = i(110),
        a = RegExp.prototype.exec,
        h = String.prototype.replace,
        u = a,
        c = (n = /a/, o = /b*/g, a.call(n, "a"), a.call(o, "a"), 0 !== n.lastIndex || 0 !== o.lastIndex),
        l = s.UNSUPPORTED_Y || s.BROKEN_CARET,
        d = void 0 !== /()??/.exec("")[1];
    (c || d || l) && (u = function(t) {
        var e, i, n, o, s = this,
            u = l && s.sticky,
            p = r.call(s),
            f = s.source,
            _ = 0,
            m = t;
        return u && (-1 === (p = p.replace("y", "")).indexOf("g") && (p += "g"), m = String(t).slice(s.lastIndex), s.lastIndex > 0 && (!s.multiline || s.multiline && "\n" !== t[s.lastIndex - 1]) && (f = "(?: " + f + ")", m = " " + m, _++), i = new RegExp("^(?:" + f + ")", p)), d && (i = new RegExp("^" + f + "$(?!\\s)", p)), c && (e = s.lastIndex), n = a.call(u ? i : s, m), u ? n ? (n.input = n.input.slice(_), n[0] = n[0].slice(_), n.index = s.lastIndex, s.lastIndex += n[0].length) : s.lastIndex = 0 : c && n && (s.lastIndex = s.global ? n.index + n[0].length : e), d && n && n.length > 1 && h.call(n[0], i, (function() {
            for (o = 1; o < arguments.length - 2; o++) void 0 === arguments[o] && (n[o] = void 0)
        })), n
    }), t.exports = u
}, function(t, e, i) {
    "use strict";
    var n = {}.propertyIsEnumerable,
        o = Object.getOwnPropertyDescriptor,
        r = o && !n.call({
            1: 2
        }, 1);
    e.f = r ? function(t) {
        var e = o(this, t);
        return !!e && e.enumerable
    } : n
}, function(t, e, i) {
    var n = i(2),
        o = i(19),
        r = "".split;
    t.exports = n((function() {
        return !Object("z").propertyIsEnumerable(0)
    })) ? function(t) {
        return "String" == o(t) ? r.call(t, "") : Object(t)
    } : Object
}, function(t, e, i) {
    var n = i(9),
        o = i(2),
        r = i(46);
    t.exports = !n && !o((function() {
        return 7 != Object.defineProperty(r("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    }))
}, function(t, e, i) {
    var n = i(1),
        o = i(6),
        r = n.document,
        s = o(r) && o(r.createElement);
    t.exports = function(t) {
        return s ? r.createElement(t) : {}
    }
}, function(t, e, i) {
    var n = i(31),
        o = Function.toString;
    "function" != typeof n.inspectSource && (n.inspectSource = function(t) {
        return o.call(t)
    }), t.exports = n.inspectSource
}, function(t, e, i) {
    var n = i(3),
        o = i(79),
        r = i(29),
        s = i(8);
    t.exports = function(t, e) {
        for (var i = o(e), a = s.f, h = r.f, u = 0; u < i.length; u++) {
            var c = i[u];
            n(t, c) || a(t, c, h(e, c))
        }
    }
}, function(t, e, i) {
    var n = i(1);
    t.exports = n
}, function(t, e, i) {
    var n = i(3),
        o = i(10),
        r = i(80).indexOf,
        s = i(24);
    t.exports = function(t, e) {
        var i, a = o(t),
            h = 0,
            u = [];
        for (i in a) !n(s, i) && n(a, i) && u.push(i);
        for (; e.length > h;) n(a, i = e[h++]) && (~r(u, i) || u.push(i));
        return u
    }
}, function(t, e, i) {
    var n = i(26),
        o = Math.max,
        r = Math.min;
    t.exports = function(t, e) {
        var i = n(t);
        return i < 0 ? o(i + e, 0) : r(i, e)
    }
}, function(t, e) {
    e.f = Object.getOwnPropertySymbols
}, function(t, e, i) {
    var n = i(36);
    t.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator
}, function(t, e, i) {
    var n = i(50),
        o = i(35);
    t.exports = Object.keys || function(t) {
        return n(t, o)
    }
}, function(t, e, i) {
    var n = i(0);
    e.f = n
}, function(t, e, i) {
    var n = i(49),
        o = i(3),
        r = i(55),
        s = i(8).f;
    t.exports = function(t) {
        var e = n.Symbol || (n.Symbol = {});
        o(e, t) || s(e, t, {
            value: r.f(t)
        })
    }
}, function(t, e, i) {
    var n = i(85);
    t.exports = function(t, e, i) {
        if (n(t), void 0 === e) return t;
        switch (i) {
            case 0:
                return function() {
                    return t.call(e)
                };
            case 1:
                return function(i) {
                    return t.call(e, i)
                };
            case 2:
                return function(i, n) {
                    return t.call(e, i, n)
                };
            case 3:
                return function(i, n, o) {
                    return t.call(e, i, n, o)
                }
        }
        return function() {
            return t.apply(e, arguments)
        }
    }
}, function(t, e, i) {
    var n = i(6),
        o = i(16),
        r = i(0)("species");
    t.exports = function(t, e) {
        var i;
        return o(t) && ("function" != typeof(i = t.constructor) || i !== Array && !o(i.prototype) ? n(i) && null === (i = i[r]) && (i = void 0) : i = void 0), new(void 0 === i ? Array : i)(0 === e ? 0 : e)
    }
}, function(t, e, i) {
    var n, o, r = i(1),
        s = i(60),
        a = r.process,
        h = a && a.versions,
        u = h && h.v8;
    u ? o = (n = u.split("."))[0] + n[1] : s && (!(n = s.match(/Edge\/(\d+)/)) || n[1] >= 74) && (n = s.match(/Chrome\/(\d+)/)) && (o = n[1]), t.exports = o && +o
}, function(t, e, i) {
    var n = i(25);
    t.exports = n("navigator", "userAgent") || ""
}, function(t, e, i) {
    var n = i(0),
        o = i(37),
        r = i(8),
        s = n("unscopables"),
        a = Array.prototype;
    null == a[s] && r.f(a, s, {
        configurable: !0,
        value: o(null)
    }), t.exports = function(t) {
        a[s][t] = !0
    }
}, function(t, e, i) {
    "use strict";
    var n = i(27).forEach,
        o = i(91),
        r = i(28),
        s = o("forEach"),
        a = r("forEach");
    t.exports = s && a ? [].forEach : function(t) {
        return n(this, t, arguments.length > 1 ? arguments[1] : void 0)
    }
}, function(t, e, i) {
    var n = i(41),
        o = i(19),
        r = i(0)("toStringTag"),
        s = "Arguments" == o(function() {
            return arguments
        }());
    t.exports = n ? o : function(t) {
        var e, i, n;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(i = function(t, e) {
            try {
                return t[e]
            } catch (t) {}
        }(e = Object(t), r)) ? i : s ? o(e) : "Object" == (n = o(e)) && "function" == typeof e.callee ? "Arguments" : n
    }
}, function(t, e, i) {
    "use strict";
    var n = i(10),
        o = i(61),
        r = i(17),
        s = i(21),
        a = i(65),
        h = s.set,
        u = s.getterFor("Array Iterator");
    t.exports = a(Array, "Array", (function(t, e) {
        h(this, {
            type: "Array Iterator",
            target: n(t),
            index: 0,
            kind: e
        })
    }), (function() {
        var t = u(this),
            e = t.target,
            i = t.kind,
            n = t.index++;
        return !e || n >= e.length ? (t.target = void 0, {
            value: void 0,
            done: !0
        }) : "keys" == i ? {
            value: n,
            done: !1
        } : "values" == i ? {
            value: e[n],
            done: !1
        } : {
            value: [n, e[n]],
            done: !1
        }
    }), "values"), r.Arguments = r.Array, o("keys"), o("values"), o("entries")
}, function(t, e, i) {
    "use strict";
    var n = i(4),
        o = i(100),
        r = i(67),
        s = i(102),
        a = i(38),
        h = i(7),
        u = i(11),
        c = i(0),
        l = i(23),
        d = i(17),
        p = i(66),
        f = p.IteratorPrototype,
        _ = p.BUGGY_SAFARI_ITERATORS,
        m = c("iterator"),
        v = function() {
            return this
        };
    t.exports = function(t, e, i, c, p, g, y) {
        o(i, e, c);
        var x, w, b, P = function(t) {
                if (t === p && M) return M;
                if (!_ && t in S) return S[t];
                switch (t) {
                    case "keys":
                    case "values":
                    case "entries":
                        return function() {
                            return new i(this, t)
                        }
                }
                return function() {
                    return new i(this)
                }
            },
            L = e + " Iterator",
            T = !1,
            S = t.prototype,
            E = S[m] || S["@@iterator"] || p && S[p],
            M = !_ && E || P(p),
            z = "Array" == e && S.entries || E;
        if (z && (x = r(z.call(new t)), f !== Object.prototype && x.next && (l || r(x) === f || (s ? s(x, f) : "function" != typeof x[m] && h(x, m, v)), a(x, L, !0, !0), l && (d[L] = v))), "values" == p && E && "values" !== E.name && (T = !0, M = function() {
            return E.call(this)
        }), l && !y || S[m] === M || h(S, m, M), d[e] = M, p)
            if (w = {
                values: P("values"),
                keys: g ? M : P("keys"),
                entries: P("entries")
            }, y)
                for (b in w)(_ || T || !(b in S)) && u(S, b, w[b]);
            else n({
                target: e,
                proto: !0,
                forced: _ || T
            }, w);
        return w
    }
}, function(t, e, i) {
    "use strict";
    var n, o, r, s = i(67),
        a = i(7),
        h = i(3),
        u = i(0),
        c = i(23),
        l = u("iterator"),
        d = !1;
    [].keys && ("next" in (r = [].keys()) ? (o = s(s(r))) !== Object.prototype && (n = o) : d = !0), null == n && (n = {}), c || h(n, l) || a(n, l, (function() {
        return this
    })), t.exports = {
        IteratorPrototype: n,
        BUGGY_SAFARI_ITERATORS: d
    }
}, function(t, e, i) {
    var n = i(3),
        o = i(13),
        r = i(22),
        s = i(101),
        a = r("IE_PROTO"),
        h = Object.prototype;
    t.exports = s ? Object.getPrototypeOf : function(t) {
        return t = o(t), n(t, a) ? t[a] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? h : null
    }
}, function(t, e, i) {
    "use strict";
    var n = i(4),
        o = i(42);
    n({
        target: "RegExp",
        proto: !0,
        forced: /./.exec !== o
    }, {
        exec: o
    })
}, function(t, e, i) {
    "use strict";
    var n = i(5);
    t.exports = function() {
        var t = n(this),
            e = "";
        return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
    }
}, function(t, e, i) {
    var n = i(26),
        o = i(15),
        r = function(t) {
            return function(e, i) {
                var r, s, a = String(o(e)),
                    h = n(i),
                    u = a.length;
                return h < 0 || h >= u ? t ? "" : void 0 : (r = a.charCodeAt(h)) < 55296 || r > 56319 || h + 1 === u || (s = a.charCodeAt(h + 1)) < 56320 || s > 57343 ? t ? a.charAt(h) : r : t ? a.slice(h, h + 2) : s - 56320 + (r - 55296 << 10) + 65536
            }
        };
    t.exports = {
        codeAt: r(!1),
        charAt: r(!0)
    }
}, function(t, e, i) {
    "use strict";
    i(68);
    var n = i(11),
        o = i(2),
        r = i(0),
        s = i(42),
        a = i(7),
        h = r("species"),
        u = !o((function() {
            var t = /./;
            return t.exec = function() {
                var t = [];
                return t.groups = {
                    a: "7"
                }, t
            }, "7" !== "".replace(t, "$<a>")
        })),
        c = "$0" === "a".replace(/./, "$0"),
        l = r("replace"),
        d = !!/./ [l] && "" === /./ [l]("a", "$0"),
        p = !o((function() {
            var t = /(?:)/,
                e = t.exec;
            t.exec = function() {
                return e.apply(this, arguments)
            };
            var i = "ab".split(t);
            return 2 !== i.length || "a" !== i[0] || "b" !== i[1]
        }));
    t.exports = function(t, e, i, l) {
        var f = r(t),
            _ = !o((function() {
                var e = {};
                return e[f] = function() {
                    return 7
                }, 7 != "" [t](e)
            })),
            m = _ && !o((function() {
                var e = !1,
                    i = /a/;
                return "split" === t && ((i = {}).constructor = {}, i.constructor[h] = function() {
                    return i
                }, i.flags = "", i[f] = /./ [f]), i.exec = function() {
                    return e = !0, null
                }, i[f](""), !e
            }));
        if (!_ || !m || "replace" === t && (!u || !c || d) || "split" === t && !p) {
            var v = /./ [f],
                g = i(f, "" [t], (function(t, e, i, n, o) {
                    return e.exec === s ? _ && !o ? {
                        done: !0,
                        value: v.call(e, i, n)
                    } : {
                        done: !0,
                        value: t.call(i, e, n)
                    } : {
                        done: !1
                    }
                }), {
                    REPLACE_KEEPS_$0: c,
                    REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: d
                }),
                y = g[0],
                x = g[1];
            n(String.prototype, t, y), n(RegExp.prototype, f, 2 == e ? function(t, e) {
                return x.call(t, this, e)
            } : function(t) {
                return x.call(t, this)
            })
        }
        l && a(RegExp.prototype[f], "sham", !0)
    }
}, function(t, e, i) {
    "use strict";
    var n = i(70).charAt;
    t.exports = function(t, e, i) {
        return e + (i ? n(t, e).length : 1)
    }
}, function(t, e, i) {
    var n = i(19),
        o = i(42);
    t.exports = function(t, e) {
        var i = t.exec;
        if ("function" == typeof i) {
            var r = i.call(t, e);
            if ("object" != typeof r) throw TypeError("RegExp exec method returned something other than an Object or null");
            return r
        }
        if ("RegExp" !== n(t)) throw TypeError("RegExp#exec called on incompatible receiver");
        return o.call(t, e)
    }
}, function(t, e) {
    t.exports = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
    }
}, function(t, e, i) {
    "use strict";
    i.r(e);
    i(76), i(86), i(87), i(88), i(89), i(90), i(92), i(99), i(64), i(104), i(105), i(106), i(107), i(108), i(68), i(111), i(112), i(113), i(114), i(115), i(116), i(117);
    var n = i(18),
        o = i.n(n);

    function r(t) {
        return function(t) {
            if (Array.isArray(t)) return s(t)
        }(t) || function(t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
        }(t) || function(t, e) {
            if (!t) return;
            if ("string" == typeof t) return s(t, e);
            var i = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === i && t.constructor && (i = t.constructor.name);
            if ("Map" === i || "Set" === i) return Array.from(t);
            if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return s(t, e)
        }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function s(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
        return n
    }
    document.addEventListener("DOMContentLoaded", (function() {
        var t = document.querySelector(".header__menu"),
            e = document.querySelector(".drop");

        function i(t, e) {
            if (!t) return "Element is not defined";
            if ("open" === e) t.classList.remove("hide");
            else {
                if ("close" !== e) return "Choose the correct method";
                t.classList.add("hide")
            }
        }
        t.addEventListener("click", (function() {
            return i(e, "open")
        })), e.addEventListener("click", (function(t) {
            var n = t.target.dataset.set;
            ("bg" === n || "close" === n || "A" === t.target.tagName) && i(e, "close")
        }));
        var n = document.querySelector(".popup"),
            s = document.querySelector(".aside__btn"),
            a = n.querySelector(".popup__close img");
        s.addEventListener("click", (function() {
            i(n, "open"), document.addEventListener("keydown", (function(t) {
                "Escape" != t.code || n.classList.contains("hide") || i(n, "close")
            }))
        })), n.addEventListener("click", (function(t) {
            t.target !== n && t.target !== a || i(n, "close")
        }));
        var h = document.querySelector(".formfield form"),
            u = document.querySelector(".popup__form form"),
            c = h.querySelectorAll("#initials input "),
            l = h.querySelectorAll(".checkbox"),
            d = h.querySelectorAll(".radio"),
            p = h.querySelectorAll(".formfield__delivery input"),
            f = document.querySelectorAll("#phone-popup");

        function _(t) {
            "text" === t.getAttribute("type") && t.value.match(/[^a-zA-Zа-яА-Я\s]/) || "phone" === t.getAttribute("type") && t.value.match(/[^\d\+\(\)\-]/) ? t.style.borderBottomColor = "red" : t.style.borderBottomColor = "black"
        }

        function m(t) {
            for (var e = 0; e < t.length; e++)
                if (t[e].checked) return void(g(t[e]).style.borderBottom = "");
            g(t[0]).style.borderBottom = "1px solid red"
        }

        function v(t) {
            return "red" === t.style.borderBottomColor ? (t.scrollIntoView({
                block: "center",
                behavior: "smooth"
            }), !1) : "red" !== g(t).style.borderBottomColor || (g(t).scrollIntoView({
                block: "center",
                behavior: "smooth"
            }), !1)
        }

        function g(t) {
            try {
                for (; !t.classList.contains("title");) t = t.parentNode, Array.prototype.forEach.call(t.children, (function(e) {
                    e.classList.contains("title") && (t = e)
                }));
                return t
            } catch (t) {
                return document.body
            }
        }
        c.forEach((function(t) {
            t.addEventListener("input", (function() {
                return _(t)
            }))
        })), f.forEach((function(t) {
            t.addEventListener("input", (function() {
                return _(t)
            }))
        })), h.addEventListener("submit", (function(t) {
            t.preventDefault(), m(l), m(d),
                function(t) {
                    for (var e = 0, i = 0; i < t.length; i++) {
                        var n = t[i].dataset.set;
                        "Задать" === t[i].value && "settime" === n && (t[i].style.borderBottomColor = "red", e++)
                    }
                    e > 0 || t.forEach((function(t) {
                        return t.style.borderBottomColor = "black"
                    }))
                }(p);
            for (var e = [].concat(r(c), r(l), r(d), r(p)), i = 0, n = 0; n < e.length; n++) {
                if (!v(e[n])) {
                    alert("Fill the form correctly!");
                    break
                }
                i++
            }
            i == e.length && (alert("Form is valid!"), t.target.reset())
        })), u.addEventListener("submit", (function(t) {
            t.preventDefault();
            for (var e = r(f), o = 0, s = 0; s < e.length; s++) {
                if (!v(e[s])) {
                    alert("Fill the form correctly!");
                    break
                }
                o++
            }
            o == e.length && (i(n, "close"), t.target.reset())
        })), Date.prototype.daysInMonth = function(t, e) {
            return 33 - new Date(t, e, 33).getDate()
        };
        var y = document.querySelector(".calendar__icon"),
            x = document.querySelector(".clock__icon"),
            w = document.querySelector(".calendar"),
            b = document.querySelector(".calendar__left"),
            P = document.querySelector(".calendar__right"),
            L = document.querySelector(".clock");

        function T(t, e) {
            var n = document.querySelector(".calendar__days");
            document.querySelector(".calendar__month").innerText = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"][t], n.innerHTML = "";
            for (var o = Date.prototype.daysInMonth(e, t), r = 0, s = 0; s < o; s++) {
                var a = document.createElement("li");
                a.innerText += s + 1, n.append(a), s == 6 + 7 * r && (a.style.color = "red", a.previousElementSibling.style.color = "red", r++)
            }
            n.addEventListener("click", (function(n) {
                "LI" === n.target.tagName && (Array.prototype.find.call(p, (function(t) {
                    if ("calendar" === t.getAttribute("id")) return t
                })).value = "".concat(S(n.target.innerText), ".").concat(S(t + 1), ".").concat(e), i(w, "close"))
            }))
        }

        function S(t) {
            return t < 10 ? "0" + t : t
        }
        y.addEventListener("click", (function() {
            if (w.classList.contains("hide")) {
                i(w, "open");
                var t = (new Date).getMonth(),
                    e = (new Date).getFullYear(),
                    n = 0;
                T(t, e), b.addEventListener("click", (function() {
                    n ? (n--, -1 == --t && (t = 11, e--), T(t, e)) : T(t, e)
                })), P.addEventListener("click", (function() {
                    n++, ++t % 12 == 0 ? (e++, T(t = 0, e)) : T(t, e)
                })), w.addEventListener("click", (function(t) {
                    t.target == document && i(w, "close")
                }))
            } else i(w, "close")
        })), x.addEventListener("click", (function() {
            L.classList.contains("hide") ? (i(L, "open"), L.addEventListener("click", (function(t) {
                for (var e = t.target; !e.classList.contains("clock__item");) e = e.parentNode;
                Array.prototype.find.call(p, (function(t) {
                    if ("clock" == t.getAttribute("id")) return t
                })).value = e.innerText, i(L, "close")
            }))) : i(L, "close")
        }));
        var E, M = document.querySelector(".reviews__main"),
            z = document.querySelector(".reviews__left"),
            C = document.querySelector(".reviews__right"),
            k = document.querySelector(".reviews__tape"),
            A = 0,
            O = document.querySelectorAll(".reviews__item");
        setInterval((function() {
            E = +getComputedStyle(O[0]).width.replace(/px/, ""), M.style.width = E + "px"
        }), 50);
        k.style.transition = "transform 0.3s ease-out 0s", z.addEventListener("click", (function() {
            A <= 0 ? (O.length - 1, A = E * (O.length - 1), k.style.transform = "translateX(-".concat(A, "px)")) : (A -= E, k.style.transform = "translateX(-".concat(A, "px)")), z.onselectstart = function() {
                return !1
            }
        })), C.addEventListener("click", (function() {
            A >= E * (O.length - 1) ? (A = 0, 0, k.style.transform = "translateX(".concat(A, "px)")) : (A += E, k.style.transform = "translateX(-".concat(A, "px)")), C.onselectstart = function() {
                return !1
            }
        }));
        var I = document.querySelector("#map"),
            Z = o.a.map(I).setView([53.89436, 27.57974], 16);
        o.a.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoieW91cm5vYm9keSIsImEiOiJja2hxa2FueXEwMTZiMzVsaDRsZ3h2ZzEwIn0.zvDPw-4w26yQXkOow24pyA", {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 19,
            inZoom: 5,
            id: "mapbox/streets-v11",
            tileSize: 512,
            zoomOffset: -1,
            accessToken: "pk.eyJ1IjoieW91cm5vYm9keSIsImEiOiJja2hxa2FueXEwMTZiMzVsaDRsZ3h2ZzEwIn0.zvDPw-4w26yQXkOow24pyA",
            center: [53.89436, 27.57974]
        }).addTo(Z), Z.touchZoom.disable(), Z.scrollWheelZoom.disable(), Z.boxZoom.disable(), Z.keyboard.disable();
        var B = o.a.icon({
            iconUrl: "icons/mapMarker.svg",
            iconSize: [55, 72]
        });
        o.a.marker([53.89436, 27.57974], {
            icon: B
        }).addTo(Z).bindPopup("Букеты");

        function R(t, e, i, n) {
            var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
            t.style.transform = "scale(".concat(o, ")"), t.style.transition = "0.25s ease-in", t.style.opacity = 1, t.addEventListener("transitionend", (function() {
                e.innerText = "╳", e.style.left = +i.replace(/px/, "") / 2 * o - 40 + "px", e.style.bottom = +n.replace(/px/, "") / 2 * o - 33 + "px"
            }))
        }
        document.querySelector(".to__top").addEventListener("click", (function() {
            document.querySelector("header").scrollIntoView({
                block: "start",
                behavior: "smooth"
            })
        })), document.querySelectorAll('[data-show="full"]').forEach((function(t) {
            return t.addEventListener("click", (function() {
                return function(t) {
                    var e = document.createElement("div"),
                        i = document.createElement("img"),
                        n = document.createElement("div");
                    e.classList.add("bgForImg"), i.src = t, i.style.borderRadius = "20px", n.className = "img-close", e.append(i, n), document.body.append(e);
                    var o = window.getComputedStyle(i),
                        r = o.width,
                        s = o.height,
                        a = window.getComputedStyle(document.body),
                        h = a.width,
                        u = a.height; + r.replace("px", "") < +h.replace("px", "") / 3.7 && +s.replace("px", "") < +u.replace("px", "") / 3.7 ? R(i, n, r, s, 2.5) : +r.replace("px", "") < +h.replace("px", "") / 3.2 && +s.replace("px", "") < +u.replace("px", "") / 3.2 ? R(i, n, r, s, 2.1) : +r.replace("px", "") < +h.replace("px", "") / 2.5 && +s.replace("px", "") < +u.replace("px", "") / 2.5 ? R(i, n, r, s, 1.7) : +r.replace("px", "") < +h.replace("px", "") / 2 && +s.replace("px", "") < +u.replace("px", "") / 2 ? R(i, n, r, s, 1.3) : +r.replace("px", "") < +h.replace("px", "") / 1.7 && +s.replace("px", "") < +u.replace("px", "") / 1.7 ? R(i, n, r, s, 1.15) : +r.replace("px", "") > .85 * +h.replace("px", "") || +s.replace("px", "") > .85 * +u.replace("px", "") ? R(i, n, r, s, .85) : R(i, n, r, s);
                    e.addEventListener("click", (function(t) {
                        t.target !== this && t.target !== n || this.remove()
                    }))
                }(t.src)
            }))
        }))
    }))
}, function(t, e, i) {
    "use strict";
    var n = i(4),
        o = i(1),
        r = i(25),
        s = i(23),
        a = i(9),
        h = i(36),
        u = i(53),
        c = i(2),
        l = i(3),
        d = i(16),
        p = i(6),
        f = i(5),
        _ = i(13),
        m = i(10),
        v = i(20),
        g = i(14),
        y = i(37),
        x = i(54),
        w = i(34),
        b = i(84),
        P = i(52),
        L = i(29),
        T = i(8),
        S = i(43),
        E = i(7),
        M = i(11),
        z = i(32),
        C = i(22),
        k = i(24),
        A = i(33),
        O = i(0),
        I = i(55),
        Z = i(56),
        B = i(38),
        R = i(21),
        j = i(27).forEach,
        N = C("hidden"),
        D = O("toPrimitive"),
        F = R.set,
        W = R.getterFor("Symbol"),
        H = Object.prototype,
        q = o.Symbol,
        U = r("JSON", "stringify"),
        V = L.f,
        G = T.f,
        K = b.f,
        Y = S.f,
        X = z("symbols"),
        J = z("op-symbols"),
        $ = z("string-to-symbol-registry"),
        Q = z("symbol-to-string-registry"),
        tt = z("wks"),
        et = o.QObject,
        it = !et || !et.prototype || !et.prototype.findChild,
        nt = a && c((function() {
            return 7 != y(G({}, "a", {
                get: function() {
                    return G(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        })) ? function(t, e, i) {
            var n = V(H, e);
            n && delete H[e], G(t, e, i), n && t !== H && G(H, e, n)
        } : G,
        ot = function(t, e) {
            var i = X[t] = y(q.prototype);
            return F(i, {
                type: "Symbol",
                tag: t,
                description: e
            }), a || (i.description = e), i
        },
        rt = u ? function(t) {
            return "symbol" == typeof t
        } : function(t) {
            return Object(t) instanceof q
        },
        st = function(t, e, i) {
            t === H && st(J, e, i), f(t);
            var n = v(e, !0);
            return f(i), l(X, n) ? (i.enumerable ? (l(t, N) && t[N][n] && (t[N][n] = !1), i = y(i, {
                enumerable: g(0, !1)
            })) : (l(t, N) || G(t, N, g(1, {})), t[N][n] = !0), nt(t, n, i)) : G(t, n, i)
        },
        at = function(t, e) {
            f(t);
            var i = m(e),
                n = x(i).concat(lt(i));
            return j(n, (function(e) {
                a && !ht.call(i, e) || st(t, e, i[e])
            })), t
        },
        ht = function(t) {
            var e = v(t, !0),
                i = Y.call(this, e);
            return !(this === H && l(X, e) && !l(J, e)) && (!(i || !l(this, e) || !l(X, e) || l(this, N) && this[N][e]) || i)
        },
        ut = function(t, e) {
            var i = m(t),
                n = v(e, !0);
            if (i !== H || !l(X, n) || l(J, n)) {
                var o = V(i, n);
                return !o || !l(X, n) || l(i, N) && i[N][n] || (o.enumerable = !0), o
            }
        },
        ct = function(t) {
            var e = K(m(t)),
                i = [];
            return j(e, (function(t) {
                l(X, t) || l(k, t) || i.push(t)
            })), i
        },
        lt = function(t) {
            var e = t === H,
                i = K(e ? J : m(t)),
                n = [];
            return j(i, (function(t) {
                !l(X, t) || e && !l(H, t) || n.push(X[t])
            })), n
        };
    (h || (M((q = function() {
        if (this instanceof q) throw TypeError("Symbol is not a constructor");
        var t = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
            e = A(t),
            i = function(t) {
                this === H && i.call(J, t), l(this, N) && l(this[N], e) && (this[N][e] = !1), nt(this, e, g(1, t))
            };
        return a && it && nt(H, e, {
            configurable: !0,
            set: i
        }), ot(e, t)
    }).prototype, "toString", (function() {
        return W(this).tag
    })), M(q, "withoutSetter", (function(t) {
        return ot(A(t), t)
    })), S.f = ht, T.f = st, L.f = ut, w.f = b.f = ct, P.f = lt, I.f = function(t) {
        return ot(O(t), t)
    }, a && (G(q.prototype, "description", {
        configurable: !0,
        get: function() {
            return W(this).description
        }
    }), s || M(H, "propertyIsEnumerable", ht, {
        unsafe: !0
    }))), n({
        global: !0,
        wrap: !0,
        forced: !h,
        sham: !h
    }, {
        Symbol: q
    }), j(x(tt), (function(t) {
        Z(t)
    })), n({
        target: "Symbol",
        stat: !0,
        forced: !h
    }, {
        for: function(t) {
            var e = String(t);
            if (l($, e)) return $[e];
            var i = q(e);
            return $[e] = i, Q[i] = e, i
        },
        keyFor: function(t) {
            if (!rt(t)) throw TypeError(t + " is not a symbol");
            if (l(Q, t)) return Q[t]
        },
        useSetter: function() {
            it = !0
        },
        useSimple: function() {
            it = !1
        }
    }), n({
        target: "Object",
        stat: !0,
        forced: !h,
        sham: !a
    }, {
        create: function(t, e) {
            return void 0 === e ? y(t) : at(y(t), e)
        },
        defineProperty: st,
        defineProperties: at,
        getOwnPropertyDescriptor: ut
    }), n({
        target: "Object",
        stat: !0,
        forced: !h
    }, {
        getOwnPropertyNames: ct,
        getOwnPropertySymbols: lt
    }), n({
        target: "Object",
        stat: !0,
        forced: c((function() {
            P.f(1)
        }))
    }, {
        getOwnPropertySymbols: function(t) {
            return P.f(_(t))
        }
    }), U) && n({
        target: "JSON",
        stat: !0,
        forced: !h || c((function() {
            var t = q();
            return "[null]" != U([t]) || "{}" != U({
                a: t
            }) || "{}" != U(Object(t))
        }))
    }, {
        stringify: function(t, e, i) {
            for (var n, o = [t], r = 1; arguments.length > r;) o.push(arguments[r++]);
            if (n = e, (p(e) || void 0 !== t) && !rt(t)) return d(e) || (e = function(t, e) {
                if ("function" == typeof n && (e = n.call(this, t, e)), !rt(e)) return e
            }), o[1] = e, U.apply(null, o)
        }
    });
    q.prototype[D] || E(q.prototype, D, q.prototype.valueOf), B(q, "Symbol"), k[N] = !0
}, function(t, e) {
    var i;
    i = function() {
        return this
    }();
    try {
        i = i || new Function("return this")()
    } catch (t) {
        "object" == typeof window && (i = window)
    }
    t.exports = i
}, function(t, e, i) {
    var n = i(1),
        o = i(47),
        r = n.WeakMap;
    t.exports = "function" == typeof r && /native code/.test(o(r))
}, function(t, e, i) {
    var n = i(25),
        o = i(34),
        r = i(52),
        s = i(5);
    t.exports = n("Reflect", "ownKeys") || function(t) {
        var e = o.f(s(t)),
            i = r.f;
        return i ? e.concat(i(t)) : e
    }
}, function(t, e, i) {
    var n = i(10),
        o = i(12),
        r = i(51),
        s = function(t) {
            return function(e, i, s) {
                var a, h = n(e),
                    u = o(h.length),
                    c = r(s, u);
                if (t && i != i) {
                    for (; u > c;)
                        if ((a = h[c++]) != a) return !0
                } else
                    for (; u > c; c++)
                        if ((t || c in h) && h[c] === i) return t || c || 0;
                return !t && -1
            }
        };
    t.exports = {
        includes: s(!0),
        indexOf: s(!1)
    }
}, function(t, e, i) {
    var n = i(2),
        o = /#|\.prototype\./,
        r = function(t, e) {
            var i = a[s(t)];
            return i == u || i != h && ("function" == typeof e ? n(e) : !!e)
        },
        s = r.normalize = function(t) {
            return String(t).replace(o, ".").toLowerCase()
        },
        a = r.data = {},
        h = r.NATIVE = "N",
        u = r.POLYFILL = "P";
    t.exports = r
}, function(t, e, i) {
    var n = i(9),
        o = i(8),
        r = i(5),
        s = i(54);
    t.exports = n ? Object.defineProperties : function(t, e) {
        r(t);
        for (var i, n = s(e), a = n.length, h = 0; a > h;) o.f(t, i = n[h++], e[i]);
        return t
    }
}, function(t, e, i) {
    var n = i(25);
    t.exports = n("document", "documentElement")
}, function(t, e, i) {
    var n = i(10),
        o = i(34).f,
        r = {}.toString,
        s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    t.exports.f = function(t) {
        return s && "[object Window]" == r.call(t) ? function(t) {
            try {
                return o(t)
            } catch (t) {
                return s.slice()
            }
        }(t) : o(n(t))
    }
}, function(t, e) {
    t.exports = function(t) {
        if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
        return t
    }
}, function(t, e, i) {
    "use strict";
    var n = i(4),
        o = i(9),
        r = i(1),
        s = i(3),
        a = i(6),
        h = i(8).f,
        u = i(48),
        c = r.Symbol;
    if (o && "function" == typeof c && (!("description" in c.prototype) || void 0 !== c().description)) {
        var l = {},
            d = function() {
                var t = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
                    e = this instanceof d ? new c(t) : void 0 === t ? c() : c(t);
                return "" === t && (l[e] = !0), e
            };
        u(d, c);
        var p = d.prototype = c.prototype;
        p.constructor = d;
        var f = p.toString,
            _ = "Symbol(test)" == String(c("test")),
            m = /^Symbol\((.*)\)[^)]+$/;
        h(p, "description", {
            configurable: !0,
            get: function() {
                var t = a(this) ? this.valueOf() : this,
                    e = f.call(t);
                if (s(l, t)) return "";
                var i = _ ? e.slice(7, -1) : e.replace(m, "$1");
                return "" === i ? void 0 : i
            }
        }), n({
            global: !0,
            forced: !0
        }, {
            Symbol: d
        })
    }
}, function(t, e, i) {
    i(56)("iterator")
}, function(t, e, i) {
    "use strict";
    var n = i(4),
        o = i(2),
        r = i(16),
        s = i(6),
        a = i(13),
        h = i(12),
        u = i(39),
        c = i(58),
        l = i(40),
        d = i(0),
        p = i(59),
        f = d("isConcatSpreadable"),
        _ = p >= 51 || !o((function() {
            var t = [];
            return t[f] = !1, t.concat()[0] !== t
        })),
        m = l("concat"),
        v = function(t) {
            if (!s(t)) return !1;
            var e = t[f];
            return void 0 !== e ? !!e : r(t)
        };
    n({
        target: "Array",
        proto: !0,
        forced: !_ || !m
    }, {
        concat: function(t) {
            var e, i, n, o, r, s = a(this),
                l = c(s, 0),
                d = 0;
            for (e = -1, n = arguments.length; e < n; e++)
                if (v(r = -1 === e ? s : arguments[e])) {
                    if (d + (o = h(r.length)) > 9007199254740991) throw TypeError("Maximum allowed index exceeded");
                    for (i = 0; i < o; i++, d++) i in r && u(l, d, r[i])
                } else {
                    if (d >= 9007199254740991) throw TypeError("Maximum allowed index exceeded");
                    u(l, d++, r)
                } return l.length = d, l
        }
    })
}, function(t, e, i) {
    "use strict";
    var n = i(4),
        o = i(27).find,
        r = i(61),
        s = i(28),
        a = !0,
        h = s("find");
    "find" in [] && Array(1).find((function() {
        a = !1
    })), n({
        target: "Array",
        proto: !0,
        forced: a || !h
    }, {
        find: function(t) {
            return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), r("find")
}, function(t, e, i) {
    "use strict";
    var n = i(4),
        o = i(62);
    n({
        target: "Array",
        proto: !0,
        forced: [].forEach != o
    }, {
        forEach: o
    })
}, function(t, e, i) {
    "use strict";
    var n = i(2);
    t.exports = function(t, e) {
        var i = [][t];
        return !!i && n((function() {
            i.call(null, e || function() {
                throw 1
            }, 1)
        }))
    }
}, function(t, e, i) {
    var n = i(4),
        o = i(93);
    n({
        target: "Array",
        stat: !0,
        forced: !i(98)((function(t) {
            Array.from(t)
        }))
    }, {
        from: o
    })
}, function(t, e, i) {
    "use strict";
    var n = i(57),
        o = i(13),
        r = i(94),
        s = i(96),
        a = i(12),
        h = i(39),
        u = i(97);
    t.exports = function(t) {
        var e, i, c, l, d, p, f = o(t),
            _ = "function" == typeof this ? this : Array,
            m = arguments.length,
            v = m > 1 ? arguments[1] : void 0,
            g = void 0 !== v,
            y = u(f),
            x = 0;
        if (g && (v = n(v, m > 2 ? arguments[2] : void 0, 2)), null == y || _ == Array && s(y))
            for (i = new _(e = a(f.length)); e > x; x++) p = g ? v(f[x], x) : f[x], h(i, x, p);
        else
            for (d = (l = y.call(f)).next, i = new _; !(c = d.call(l)).done; x++) p = g ? r(l, v, [c.value, x], !0) : c.value, h(i, x, p);
        return i.length = x, i
    }
}, function(t, e, i) {
    var n = i(5),
        o = i(95);
    t.exports = function(t, e, i, r) {
        try {
            return r ? e(n(i)[0], i[1]) : e(i)
        } catch (e) {
            throw o(t), e
        }
    }
}, function(t, e, i) {
    var n = i(5);
    t.exports = function(t) {
        var e = t.return;
        if (void 0 !== e) return n(e.call(t)).value
    }
}, function(t, e, i) {
    var n = i(0),
        o = i(17),
        r = n("iterator"),
        s = Array.prototype;
    t.exports = function(t) {
        return void 0 !== t && (o.Array === t || s[r] === t)
    }
}, function(t, e, i) {
    var n = i(63),
        o = i(17),
        r = i(0)("iterator");
    t.exports = function(t) {
        if (null != t) return t[r] || t["@@iterator"] || o[n(t)]
    }
}, function(t, e, i) {
    var n = i(0)("iterator"),
        o = !1;
    try {
        var r = 0,
            s = {
                next: function() {
                    return {
                        done: !!r++
                    }
                },
                return: function() {
                    o = !0
                }
            };
        s[n] = function() {
            return this
        }, Array.from(s, (function() {
            throw 2
        }))
    } catch (t) {}
    t.exports = function(t, e) {
        if (!e && !o) return !1;
        var i = !1;
        try {
            var r = {};
            r[n] = function() {
                return {
                    next: function() {
                        return {
                            done: i = !0
                        }
                    }
                }
            }, t(r)
        } catch (t) {}
        return i
    }
}, function(t, e, i) {
    i(4)({
        target: "Array",
        stat: !0
    }, {
        isArray: i(16)
    })
}, function(t, e, i) {
    "use strict";
    var n = i(66).IteratorPrototype,
        o = i(37),
        r = i(14),
        s = i(38),
        a = i(17),
        h = function() {
            return this
        };
    t.exports = function(t, e, i) {
        var u = e + " Iterator";
        return t.prototype = o(n, {
            next: r(1, i)
        }), s(t, u, !1, !0), a[u] = h, t
    }
}, function(t, e, i) {
    var n = i(2);
    t.exports = !n((function() {
        function t() {}
        return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
    }))
}, function(t, e, i) {
    var n = i(5),
        o = i(103);
    t.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
        var t, e = !1,
            i = {};
        try {
            (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(i, []), e = i instanceof Array
        } catch (t) {}
        return function(i, r) {
            return n(i), o(r), e ? t.call(i, r) : i.__proto__ = r, i
        }
    }() : void 0)
}, function(t, e, i) {
    var n = i(6);
    t.exports = function(t) {
        if (!n(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype");
        return t
    }
}, function(t, e, i) {
    "use strict";
    var n = i(4),
        o = i(27).map,
        r = i(40),
        s = i(28),
        a = r("map"),
        h = s("map");
    n({
        target: "Array",
        proto: !0,
        forced: !a || !h
    }, {
        map: function(t) {
            return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function(t, e, i) {
    "use strict";
    var n = i(4),
        o = i(6),
        r = i(16),
        s = i(51),
        a = i(12),
        h = i(10),
        u = i(39),
        c = i(0),
        l = i(40),
        d = i(28),
        p = l("slice"),
        f = d("slice", {
            ACCESSORS: !0,
            0: 0,
            1: 2
        }),
        _ = c("species"),
        m = [].slice,
        v = Math.max;
    n({
        target: "Array",
        proto: !0,
        forced: !p || !f
    }, {
        slice: function(t, e) {
            var i, n, c, l = h(this),
                d = a(l.length),
                p = s(t, d),
                f = s(void 0 === e ? d : e, d);
            if (r(l) && ("function" != typeof(i = l.constructor) || i !== Array && !r(i.prototype) ? o(i) && null === (i = i[_]) && (i = void 0) : i = void 0, i === Array || void 0 === i)) return m.call(l, p, f);
            for (n = new(void 0 === i ? Array : i)(v(f - p, 0)), c = 0; p < f; p++, c++) p in l && u(n, c, l[p]);
            return n.length = c, n
        }
    })
}, function(t, e, i) {
    var n = i(11),
        o = Date.prototype,
        r = o.toString,
        s = o.getTime;
    new Date(NaN) + "" != "Invalid Date" && n(o, "toString", (function() {
        var t = s.call(this);
        return t == t ? r.call(this) : "Invalid Date"
    }))
}, function(t, e, i) {
    var n = i(9),
        o = i(8).f,
        r = Function.prototype,
        s = r.toString,
        a = /^\s*function ([^ (]*)/;
    n && !("name" in r) && o(r, "name", {
        configurable: !0,
        get: function() {
            try {
                return s.call(this).match(a)[1]
            } catch (t) {
                return ""
            }
        }
    })
}, function(t, e, i) {
    var n = i(41),
        o = i(11),
        r = i(109);
    n || o(Object.prototype, "toString", r, {
        unsafe: !0
    })
}, function(t, e, i) {
    "use strict";
    var n = i(41),
        o = i(63);
    t.exports = n ? {}.toString : function() {
        return "[object " + o(this) + "]"
    }
}, function(t, e, i) {
    "use strict";
    var n = i(2);

    function o(t, e) {
        return RegExp(t, e)
    }
    e.UNSUPPORTED_Y = n((function() {
        var t = o("a", "y");
        return t.lastIndex = 2, null != t.exec("abcd")
    })), e.BROKEN_CARET = n((function() {
        var t = o("^r", "gy");
        return t.lastIndex = 2, null != t.exec("str")
    }))
}, function(t, e, i) {
    "use strict";
    var n = i(11),
        o = i(5),
        r = i(2),
        s = i(69),
        a = RegExp.prototype,
        h = a.toString,
        u = r((function() {
            return "/a/b" != h.call({
                source: "a",
                flags: "b"
            })
        })),
        c = "toString" != h.name;
    (u || c) && n(RegExp.prototype, "toString", (function() {
        var t = o(this),
            e = String(t.source),
            i = t.flags;
        return "/" + e + "/" + String(void 0 === i && t instanceof RegExp && !("flags" in a) ? s.call(t) : i)
    }), {
        unsafe: !0
    })
}, function(t, e, i) {
    "use strict";
    var n = i(70).charAt,
        o = i(21),
        r = i(65),
        s = o.set,
        a = o.getterFor("String Iterator");
    r(String, "String", (function(t) {
        s(this, {
            type: "String Iterator",
            string: String(t),
            index: 0
        })
    }), (function() {
        var t, e = a(this),
            i = e.string,
            o = e.index;
        return o >= i.length ? {
            value: void 0,
            done: !0
        } : (t = n(i, o), e.index += t.length, {
            value: t,
            done: !1
        })
    }))
}, function(t, e, i) {
    "use strict";
    var n = i(71),
        o = i(5),
        r = i(12),
        s = i(15),
        a = i(72),
        h = i(73);
    n("match", 1, (function(t, e, i) {
        return [function(e) {
            var i = s(this),
                n = null == e ? void 0 : e[t];
            return void 0 !== n ? n.call(e, i) : new RegExp(e)[t](String(i))
        }, function(t) {
            var n = i(e, t, this);
            if (n.done) return n.value;
            var s = o(t),
                u = String(this);
            if (!s.global) return h(s, u);
            var c = s.unicode;
            s.lastIndex = 0;
            for (var l, d = [], p = 0; null !== (l = h(s, u));) {
                var f = String(l[0]);
                d[p] = f, "" === f && (s.lastIndex = a(u, r(s.lastIndex), c)), p++
            }
            return 0 === p ? null : d
        }]
    }))
}, function(t, e, i) {
    "use strict";
    var n = i(71),
        o = i(5),
        r = i(13),
        s = i(12),
        a = i(26),
        h = i(15),
        u = i(72),
        c = i(73),
        l = Math.max,
        d = Math.min,
        p = Math.floor,
        f = /\$([$&'`]|\d\d?|<[^>]*>)/g,
        _ = /\$([$&'`]|\d\d?)/g;
    n("replace", 2, (function(t, e, i, n) {
        var m = n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
            v = n.REPLACE_KEEPS_$0,
            g = m ? "$" : "$0";
        return [function(i, n) {
            var o = h(this),
                r = null == i ? void 0 : i[t];
            return void 0 !== r ? r.call(i, o, n) : e.call(String(o), i, n)
        }, function(t, n) {
            if (!m && v || "string" == typeof n && -1 === n.indexOf(g)) {
                var r = i(e, t, this, n);
                if (r.done) return r.value
            }
            var h = o(t),
                p = String(this),
                f = "function" == typeof n;
            f || (n = String(n));
            var _ = h.global;
            if (_) {
                var x = h.unicode;
                h.lastIndex = 0
            }
            for (var w = [];;) {
                var b = c(h, p);
                if (null === b) break;
                if (w.push(b), !_) break;
                "" === String(b[0]) && (h.lastIndex = u(p, s(h.lastIndex), x))
            }
            for (var P, L = "", T = 0, S = 0; S < w.length; S++) {
                b = w[S];
                for (var E = String(b[0]), M = l(d(a(b.index), p.length), 0), z = [], C = 1; C < b.length; C++) z.push(void 0 === (P = b[C]) ? P : String(P));
                var k = b.groups;
                if (f) {
                    var A = [E].concat(z, M, p);
                    void 0 !== k && A.push(k);
                    var O = String(n.apply(void 0, A))
                } else O = y(E, p, M, z, k, n);
                M >= T && (L += p.slice(T, M) + O, T = M + E.length)
            }
            return L + p.slice(T)
        }];

        function y(t, i, n, o, s, a) {
            var h = n + t.length,
                u = o.length,
                c = _;
            return void 0 !== s && (s = r(s), c = f), e.call(a, c, (function(e, r) {
                var a;
                switch (r.charAt(0)) {
                    case "$":
                        return "$";
                    case "&":
                        return t;
                    case "`":
                        return i.slice(0, n);
                    case "'":
                        return i.slice(h);
                    case "<":
                        a = s[r.slice(1, -1)];
                        break;
                    default:
                        var c = +r;
                        if (0 === c) return e;
                        if (c > u) {
                            var l = p(c / 10);
                            return 0 === l ? e : l <= u ? void 0 === o[l - 1] ? r.charAt(1) : o[l - 1] + r.charAt(1) : e
                        }
                        a = o[c - 1]
                }
                return void 0 === a ? "" : a
            }))
        }
    }))
}, function(t, e, i) {
    var n = i(1),
        o = i(74),
        r = i(62),
        s = i(7);
    for (var a in o) {
        var h = n[a],
            u = h && h.prototype;
        if (u && u.forEach !== r) try {
            s(u, "forEach", r)
        } catch (t) {
            u.forEach = r
        }
    }
}, function(t, e, i) {
    var n = i(1),
        o = i(74),
        r = i(64),
        s = i(7),
        a = i(0),
        h = a("iterator"),
        u = a("toStringTag"),
        c = r.values;
    for (var l in o) {
        var d = n[l],
            p = d && d.prototype;
        if (p) {
            if (p[h] !== c) try {
                s(p, h, c)
            } catch (t) {
                p[h] = c
            }
            if (p[u] || s(p, u, l), o[l])
                for (var f in r)
                    if (p[f] !== r[f]) try {
                        s(p, f, r[f])
                    } catch (t) {
                        p[f] = r[f]
                    }
        }
    }
}, function(t, e, i) {
    var n = i(4),
        o = i(1),
        r = i(60),
        s = [].slice,
        a = function(t) {
            return function(e, i) {
                var n = arguments.length > 2,
                    o = n ? s.call(arguments, 2) : void 0;
                return t(n ? function() {
                    ("function" == typeof e ? e : Function(e)).apply(this, o)
                } : e, i)
            }
        };
    n({
        global: !0,
        bind: !0,
        forced: /MSIE .\./.test(r)
    }, {
        setTimeout: a(o.setTimeout),
        setInterval: a(o.setInterval)
    })
}]);