// moment.min.jsminPrice=5000
!function (e, t) { "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.moment = t() }(this, function () { "use strict"; var e, i; function f() { return e.apply(null, arguments) } function o(e) { return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e) } function u(e) { return null != e && "[object Object]" === Object.prototype.toString.call(e) } function m(e, t) { return Object.prototype.hasOwnProperty.call(e, t) } function l(e) { if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length; for (var t in e) if (m(e, t)) return; return 1 } function r(e) { return void 0 === e } function h(e) { return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e) } function a(e) { return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e) } function d(e, t) { for (var n = [], s = 0; s < e.length; ++s)n.push(t(e[s], s)); return n } function c(e, t) { for (var n in t) m(t, n) && (e[n] = t[n]); return m(t, "toString") && (e.toString = t.toString), m(t, "valueOf") && (e.valueOf = t.valueOf), e } function _(e, t, n, s) { return xt(e, t, n, s, !0).utc() } function y(e) { return null == e._pf && (e._pf = { empty: !1, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: !1, invalidEra: null, invalidMonth: null, invalidFormat: !1, userInvalidated: !1, iso: !1, parsedDateParts: [], era: null, meridiem: null, rfc2822: !1, weekdayMismatch: !1 }), e._pf } function g(e) { if (null == e._isValid) { var t = y(e), n = i.call(t.parsedDateParts, function (e) { return null != e }), s = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n); if (e._strict && (s = s && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return s; e._isValid = s } return e._isValid } function w(e) { var t = _(NaN); return null != e ? c(y(t), e) : y(t).userInvalidated = !0, t } i = Array.prototype.some ? Array.prototype.some : function (e) { for (var t = Object(this), n = t.length >>> 0, s = 0; s < n; s++)if (s in t && e.call(this, t[s], s, t)) return !0; return !1 }; var p = f.momentProperties = [], t = !1; function v(e, t) { var n, s, i; if (r(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), r(t._i) || (e._i = t._i), r(t._f) || (e._f = t._f), r(t._l) || (e._l = t._l), r(t._strict) || (e._strict = t._strict), r(t._tzm) || (e._tzm = t._tzm), r(t._isUTC) || (e._isUTC = t._isUTC), r(t._offset) || (e._offset = t._offset), r(t._pf) || (e._pf = y(t)), r(t._locale) || (e._locale = t._locale), 0 < p.length) for (n = 0; n < p.length; n++)r(i = t[s = p[n]]) || (e[s] = i); return e } function k(e) { v(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === t && (t = !0, f.updateOffset(this), t = !1) } function M(e) { return e instanceof k || null != e && null != e._isAMomentObject } function D(e) { !1 === f.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e) } function n(i, r) { var a = !0; return c(function () { if (null != f.deprecationHandler && f.deprecationHandler(null, i), a) { for (var e, t, n = [], s = 0; s < arguments.length; s++) { if (e = "", "object" == typeof arguments[s]) { for (t in e += "\n[" + s + "] ", arguments[0]) m(arguments[0], t) && (e += t + ": " + arguments[0][t] + ", "); e = e.slice(0, -2) } else e = arguments[s]; n.push(e) } D(i + "\nArguments: " + Array.prototype.slice.call(n).join("") + "\n" + (new Error).stack), a = !1 } return r.apply(this, arguments) }, r) } var s, S = {}; function Y(e, t) { null != f.deprecationHandler && f.deprecationHandler(e, t), S[e] || (D(t), S[e] = !0) } function O(e) { return "undefined" != typeof Function && e instanceof Function || "[object Function]" === Object.prototype.toString.call(e) } function b(e, t) { var n, s = c({}, e); for (n in t) m(t, n) && (u(e[n]) && u(t[n]) ? (s[n] = {}, c(s[n], e[n]), c(s[n], t[n])) : null != t[n] ? s[n] = t[n] : delete s[n]); for (n in e) m(e, n) && !m(t, n) && u(e[n]) && (s[n] = c({}, s[n])); return s } function x(e) { null != e && this.set(e) } f.suppressDeprecationWarnings = !1, f.deprecationHandler = null, s = Object.keys ? Object.keys : function (e) { var t, n = []; for (t in e) m(e, t) && n.push(t); return n }; function T(e, t, n) { var s = "" + Math.abs(e), i = t - s.length; return (0 <= e ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + s } var N = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, P = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, R = {}, W = {}; function C(e, t, n, s) { var i = "string" == typeof s ? function () { return this[s]() } : s; e && (W[e] = i), t && (W[t[0]] = function () { return T(i.apply(this, arguments), t[1], t[2]) }), n && (W[n] = function () { return this.localeData().ordinal(i.apply(this, arguments), e) }) } function U(e, t) { return e.isValid() ? (t = H(t, e.localeData()), R[t] = R[t] || function (s) { for (var e, i = s.match(N), t = 0, r = i.length; t < r; t++)W[i[t]] ? i[t] = W[i[t]] : i[t] = (e = i[t]).match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, ""); return function (e) { for (var t = "", n = 0; n < r; n++)t += O(i[n]) ? i[n].call(e, s) : i[n]; return t } }(t), R[t](e)) : e.localeData().invalidDate() } function H(e, t) { var n = 5; function s(e) { return t.longDateFormat(e) || e } for (P.lastIndex = 0; 0 <= n && P.test(e);)e = e.replace(P, s), P.lastIndex = 0, --n; return e } var F = {}; function L(e, t) { var n = e.toLowerCase(); F[n] = F[n + "s"] = F[t] = e } function V(e) { return "string" == typeof e ? F[e] || F[e.toLowerCase()] : void 0 } function G(e) { var t, n, s = {}; for (n in e) m(e, n) && (t = V(n)) && (s[t] = e[n]); return s } var E = {}; function A(e, t) { E[e] = t } function j(e) { return e % 4 == 0 && e % 100 != 0 || e % 400 == 0 } function I(e) { return e < 0 ? Math.ceil(e) || 0 : Math.floor(e) } function Z(e) { var t = +e, n = 0; return 0 != t && isFinite(t) && (n = I(t)), n } function z(t, n) { return function (e) { return null != e ? (q(this, t, e), f.updateOffset(this, n), this) : $(this, t) } } function $(e, t) { return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN } function q(e, t, n) { e.isValid() && !isNaN(n) && ("FullYear" === t && j(e.year()) && 1 === e.month() && 29 === e.date() ? (n = Z(n), e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), xe(n, e.month()))) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n)) } var B, J = /\d/, Q = /\d\d/, X = /\d{3}/, K = /\d{4}/, ee = /[+-]?\d{6}/, te = /\d\d?/, ne = /\d\d\d\d?/, se = /\d\d\d\d\d\d?/, ie = /\d{1,3}/, re = /\d{1,4}/, ae = /[+-]?\d{1,6}/, oe = /\d+/, ue = /[+-]?\d+/, le = /Z|[+-]\d\d:?\d\d/gi, he = /Z|[+-]\d\d(?::?\d\d)?/gi, de = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i; function ce(e, n, s) { B[e] = O(n) ? n : function (e, t) { return e && s ? s : n } } function fe(e, t) { return m(B, e) ? B[e](t._strict, t._locale) : new RegExp(me(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (e, t, n, s, i) { return t || n || s || i }))) } function me(e) { return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") } B = {}; var _e = {}; function ye(e, n) { var t, s = n; for ("string" == typeof e && (e = [e]), h(n) && (s = function (e, t) { t[n] = Z(e) }), t = 0; t < e.length; t++)_e[e[t]] = s } function ge(e, i) { ye(e, function (e, t, n, s) { n._w = n._w || {}, i(e, n._w, n, s) }) } var we, pe = 0, ve = 1, ke = 2, Me = 3, De = 4, Se = 5, Ye = 6, Oe = 7, be = 8; function xe(e, t) { if (isNaN(e) || isNaN(t)) return NaN; var n, s = (t % (n = 12) + n) % n; return e += (t - s) / 12, 1 == s ? j(e) ? 29 : 28 : 31 - s % 7 % 2 } we = Array.prototype.indexOf ? Array.prototype.indexOf : function (e) { for (var t = 0; t < this.length; ++t)if (this[t] === e) return t; return -1 }, C("M", ["MM", 2], "Mo", function () { return this.month() + 1 }), C("MMM", 0, 0, function (e) { return this.localeData().monthsShort(this, e) }), C("MMMM", 0, 0, function (e) { return this.localeData().months(this, e) }), L("month", "M"), A("month", 8), ce("M", te), ce("MM", te, Q), ce("MMM", function (e, t) { return t.monthsShortRegex(e) }), ce("MMMM", function (e, t) { return t.monthsRegex(e) }), ye(["M", "MM"], function (e, t) { t[ve] = Z(e) - 1 }), ye(["MMM", "MMMM"], function (e, t, n, s) { var i = n._locale.monthsParse(e, s, n._strict); null != i ? t[ve] = i : y(n).invalidMonth = e }); var Te = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), Ne = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), Pe = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, Re = de, We = de; function Ce(e, t) { var n; if (!e.isValid()) return e; if ("string" == typeof t) if (/^\d+$/.test(t)) t = Z(t); else if (!h(t = e.localeData().monthsParse(t))) return e; return n = Math.min(e.date(), xe(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e } function Ue(e) { return null != e ? (Ce(this, e), f.updateOffset(this, !0), this) : $(this, "Month") } function He() { function e(e, t) { return t.length - e.length } for (var t, n = [], s = [], i = [], r = 0; r < 12; r++)t = _([2e3, r]), n.push(this.monthsShort(t, "")), s.push(this.months(t, "")), i.push(this.months(t, "")), i.push(this.monthsShort(t, "")); for (n.sort(e), s.sort(e), i.sort(e), r = 0; r < 12; r++)n[r] = me(n[r]), s[r] = me(s[r]); for (r = 0; r < 24; r++)i[r] = me(i[r]); this._monthsRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + n.join("|") + ")", "i") } function Fe(e) { return j(e) ? 366 : 365 } C("Y", 0, 0, function () { var e = this.year(); return e <= 9999 ? T(e, 4) : "+" + e }), C(0, ["YY", 2], 0, function () { return this.year() % 100 }), C(0, ["YYYY", 4], 0, "year"), C(0, ["YYYYY", 5], 0, "year"), C(0, ["YYYYYY", 6, !0], 0, "year"), L("year", "y"), A("year", 1), ce("Y", ue), ce("YY", te, Q), ce("YYYY", re, K), ce("YYYYY", ae, ee), ce("YYYYYY", ae, ee), ye(["YYYYY", "YYYYYY"], pe), ye("YYYY", function (e, t) { t[pe] = 2 === e.length ? f.parseTwoDigitYear(e) : Z(e) }), ye("YY", function (e, t) { t[pe] = f.parseTwoDigitYear(e) }), ye("Y", function (e, t) { t[pe] = parseInt(e, 10) }), f.parseTwoDigitYear = function (e) { return Z(e) + (68 < Z(e) ? 1900 : 2e3) }; var Le = z("FullYear", !0); function Ve(e) { var t, n; return e < 100 && 0 <= e ? ((n = Array.prototype.slice.call(arguments))[0] = e + 400, t = new Date(Date.UTC.apply(null, n)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t } function Ge(e, t, n) { var s = 7 + t - n; return s - (7 + Ve(e, 0, s).getUTCDay() - t) % 7 - 1 } function Ee(e, t, n, s, i) { var r, a = 1 + 7 * (t - 1) + (7 + n - s) % 7 + Ge(e, s, i), o = a <= 0 ? Fe(r = e - 1) + a : a > Fe(e) ? (r = e + 1, a - Fe(e)) : (r = e, a); return { year: r, dayOfYear: o } } function Ae(e, t, n) { var s, i, r = Ge(e.year(), t, n), a = Math.floor((e.dayOfYear() - r - 1) / 7) + 1; return a < 1 ? s = a + je(i = e.year() - 1, t, n) : a > je(e.year(), t, n) ? (s = a - je(e.year(), t, n), i = e.year() + 1) : (i = e.year(), s = a), { week: s, year: i } } function je(e, t, n) { var s = Ge(e, t, n), i = Ge(e + 1, t, n); return (Fe(e) - s + i) / 7 } C("w", ["ww", 2], "wo", "week"), C("W", ["WW", 2], "Wo", "isoWeek"), L("week", "w"), L("isoWeek", "W"), A("week", 5), A("isoWeek", 5), ce("w", te), ce("ww", te, Q), ce("W", te), ce("WW", te, Q), ge(["w", "ww", "W", "WW"], function (e, t, n, s) { t[s.substr(0, 1)] = Z(e) }); function Ie(e, t) { return e.slice(t, 7).concat(e.slice(0, t)) } C("d", 0, "do", "day"), C("dd", 0, 0, function (e) { return this.localeData().weekdaysMin(this, e) }), C("ddd", 0, 0, function (e) { return this.localeData().weekdaysShort(this, e) }), C("dddd", 0, 0, function (e) { return this.localeData().weekdays(this, e) }), C("e", 0, 0, "weekday"), C("E", 0, 0, "isoWeekday"), L("day", "d"), L("weekday", "e"), L("isoWeekday", "E"), A("day", 11), A("weekday", 11), A("isoWeekday", 11), ce("d", te), ce("e", te), ce("E", te), ce("dd", function (e, t) { return t.weekdaysMinRegex(e) }), ce("ddd", function (e, t) { return t.weekdaysShortRegex(e) }), ce("dddd", function (e, t) { return t.weekdaysRegex(e) }), ge(["dd", "ddd", "dddd"], function (e, t, n, s) { var i = n._locale.weekdaysParse(e, s, n._strict); null != i ? t.d = i : y(n).invalidWeekday = e }), ge(["d", "e", "E"], function (e, t, n, s) { t[s] = Z(e) }); var Ze = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), ze = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), $e = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), qe = de, Be = de, Je = de; function Qe() { function e(e, t) { return t.length - e.length } for (var t, n, s, i, r = [], a = [], o = [], u = [], l = 0; l < 7; l++)t = _([2e3, 1]).day(l), n = me(this.weekdaysMin(t, "")), s = me(this.weekdaysShort(t, "")), i = me(this.weekdays(t, "")), r.push(n), a.push(s), o.push(i), u.push(n), u.push(s), u.push(i); r.sort(e), a.sort(e), o.sort(e), u.sort(e), this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + r.join("|") + ")", "i") } function Xe() { return this.hours() % 12 || 12 } function Ke(e, t) { C(e, 0, 0, function () { return this.localeData().meridiem(this.hours(), this.minutes(), t) }) } function et(e, t) { return t._meridiemParse } C("H", ["HH", 2], 0, "hour"), C("h", ["hh", 2], 0, Xe), C("k", ["kk", 2], 0, function () { return this.hours() || 24 }), C("hmm", 0, 0, function () { return "" + Xe.apply(this) + T(this.minutes(), 2) }), C("hmmss", 0, 0, function () { return "" + Xe.apply(this) + T(this.minutes(), 2) + T(this.seconds(), 2) }), C("Hmm", 0, 0, function () { return "" + this.hours() + T(this.minutes(), 2) }), C("Hmmss", 0, 0, function () { return "" + this.hours() + T(this.minutes(), 2) + T(this.seconds(), 2) }), Ke("a", !0), Ke("A", !1), L("hour", "h"), A("hour", 13), ce("a", et), ce("A", et), ce("H", te), ce("h", te), ce("k", te), ce("HH", te, Q), ce("hh", te, Q), ce("kk", te, Q), ce("hmm", ne), ce("hmmss", se), ce("Hmm", ne), ce("Hmmss", se), ye(["H", "HH"], Me), ye(["k", "kk"], function (e, t, n) { var s = Z(e); t[Me] = 24 === s ? 0 : s }), ye(["a", "A"], function (e, t, n) { n._isPm = n._locale.isPM(e), n._meridiem = e }), ye(["h", "hh"], function (e, t, n) { t[Me] = Z(e), y(n).bigHour = !0 }), ye("hmm", function (e, t, n) { var s = e.length - 2; t[Me] = Z(e.substr(0, s)), t[De] = Z(e.substr(s)), y(n).bigHour = !0 }), ye("hmmss", function (e, t, n) { var s = e.length - 4, i = e.length - 2; t[Me] = Z(e.substr(0, s)), t[De] = Z(e.substr(s, 2)), t[Se] = Z(e.substr(i)), y(n).bigHour = !0 }), ye("Hmm", function (e, t, n) { var s = e.length - 2; t[Me] = Z(e.substr(0, s)), t[De] = Z(e.substr(s)) }), ye("Hmmss", function (e, t, n) { var s = e.length - 4, i = e.length - 2; t[Me] = Z(e.substr(0, s)), t[De] = Z(e.substr(s, 2)), t[Se] = Z(e.substr(i)) }); var tt = z("Hours", !0); var nt, st = { calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, longDateFormat: { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, invalidDate: "Invalid date", ordinal: "%d", dayOfMonthOrdinalParse: /\d{1,2}/, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", w: "a week", ww: "%d weeks", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, months: Te, monthsShort: Ne, week: { dow: 0, doy: 6 }, weekdays: Ze, weekdaysMin: $e, weekdaysShort: ze, meridiemParse: /[ap]\.?m?\.?/i }, it = {}, rt = {}; function at(e) { return e ? e.toLowerCase().replace("_", "-") : e } function ot(e) { for (var t, n, s, i, r = 0; r < e.length;) { for (t = (i = at(e[r]).split("-")).length, n = (n = at(e[r + 1])) ? n.split("-") : null; 0 < t;) { if (s = ut(i.slice(0, t).join("-"))) return s; if (n && n.length >= t && function (e, t) { for (var n = Math.min(e.length, t.length), s = 0; s < n; s += 1)if (e[s] !== t[s]) return s; return n }(i, n) >= t - 1) break; t-- } r++ } return nt } function ut(t) { var e; if (void 0 === it[t] && "undefined" != typeof module && module && module.exports) try { e = nt._abbr, require("./locale/" + t), lt(e) } catch (e) { it[t] = null } return it[t] } function lt(e, t) { var n; return e && ((n = r(t) ? dt(e) : ht(e, t)) ? nt = n : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), nt._abbr } function ht(e, t) { if (null === t) return delete it[e], null; var n, s = st; if (t.abbr = e, null != it[e]) Y("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), s = it[e]._config; else if (null != t.parentLocale) if (null != it[t.parentLocale]) s = it[t.parentLocale]._config; else { if (null == (n = ut(t.parentLocale))) return rt[t.parentLocale] || (rt[t.parentLocale] = []), rt[t.parentLocale].push({ name: e, config: t }), null; s = n._config } return it[e] = new x(b(s, t)), rt[e] && rt[e].forEach(function (e) { ht(e.name, e.config) }), lt(e), it[e] } function dt(e) { var t; if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return nt; if (!o(e)) { if (t = ut(e)) return t; e = [e] } return ot(e) } function ct(e) { var t, n = e._a; return n && -2 === y(e).overflow && (t = n[ve] < 0 || 11 < n[ve] ? ve : n[ke] < 1 || n[ke] > xe(n[pe], n[ve]) ? ke : n[Me] < 0 || 24 < n[Me] || 24 === n[Me] && (0 !== n[De] || 0 !== n[Se] || 0 !== n[Ye]) ? Me : n[De] < 0 || 59 < n[De] ? De : n[Se] < 0 || 59 < n[Se] ? Se : n[Ye] < 0 || 999 < n[Ye] ? Ye : -1, y(e)._overflowDayOfYear && (t < pe || ke < t) && (t = ke), y(e)._overflowWeeks && -1 === t && (t = Oe), y(e)._overflowWeekday && -1 === t && (t = be), y(e).overflow = t), e } var ft = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, mt = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, _t = /Z|[+-]\d\d(?::?\d\d)?/, yt = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/], ["YYYYMM", /\d{6}/, !1], ["YYYY", /\d{4}/, !1]], gt = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]], wt = /^\/?Date\((-?\d+)/i, pt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, vt = { UT: 0, GMT: 0, EDT: -240, EST: -300, CDT: -300, CST: -360, MDT: -360, MST: -420, PDT: -420, PST: -480 }; function kt(e) { var t, n, s, i, r, a, o = e._i, u = ft.exec(o) || mt.exec(o); if (u) { for (y(e).iso = !0, t = 0, n = yt.length; t < n; t++)if (yt[t][1].exec(u[1])) { i = yt[t][0], s = !1 !== yt[t][2]; break } if (null == i) return void (e._isValid = !1); if (u[3]) { for (t = 0, n = gt.length; t < n; t++)if (gt[t][1].exec(u[3])) { r = (u[2] || " ") + gt[t][0]; break } if (null == r) return void (e._isValid = !1) } if (!s && null != r) return void (e._isValid = !1); if (u[4]) { if (!_t.exec(u[4])) return void (e._isValid = !1); a = "Z" } e._f = i + (r || "") + (a || ""), Ot(e) } else e._isValid = !1 } function Mt(e, t, n, s, i, r) { var a = [function (e) { var t = parseInt(e, 10); { if (t <= 49) return 2e3 + t; if (t <= 999) return 1900 + t } return t }(e), Ne.indexOf(t), parseInt(n, 10), parseInt(s, 10), parseInt(i, 10)]; return r && a.push(parseInt(r, 10)), a } function Dt(e) { var t, n, s, i, r = pt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")); if (r) { if (t = Mt(r[4], r[3], r[2], r[5], r[6], r[7]), n = r[1], s = t, i = e, n && ze.indexOf(n) !== new Date(s[0], s[1], s[2]).getDay() && (y(i).weekdayMismatch = !0, !void (i._isValid = !1))) return; e._a = t, e._tzm = function (e, t, n) { if (e) return vt[e]; if (t) return 0; var s = parseInt(n, 10), i = s % 100; return 60 * ((s - i) / 100) + i }(r[8], r[9], r[10]), e._d = Ve.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), y(e).rfc2822 = !0 } else e._isValid = !1 } function St(e, t, n) { return null != e ? e : null != t ? t : n } function Yt(e) { var t, n, s, i, r, a, o, u = []; if (!e._d) { for (a = e, o = new Date(f.now()), s = a._useUTC ? [o.getUTCFullYear(), o.getUTCMonth(), o.getUTCDate()] : [o.getFullYear(), o.getMonth(), o.getDate()], e._w && null == e._a[ke] && null == e._a[ve] && function (e) { var t, n, s, i, r, a, o, u, l; null != (t = e._w).GG || null != t.W || null != t.E ? (r = 1, a = 4, n = St(t.GG, e._a[pe], Ae(Tt(), 1, 4).year), s = St(t.W, 1), ((i = St(t.E, 1)) < 1 || 7 < i) && (u = !0)) : (r = e._locale._week.dow, a = e._locale._week.doy, l = Ae(Tt(), r, a), n = St(t.gg, e._a[pe], l.year), s = St(t.w, l.week), null != t.d ? ((i = t.d) < 0 || 6 < i) && (u = !0) : null != t.e ? (i = t.e + r, (t.e < 0 || 6 < t.e) && (u = !0)) : i = r); s < 1 || s > je(n, r, a) ? y(e)._overflowWeeks = !0 : null != u ? y(e)._overflowWeekday = !0 : (o = Ee(n, s, i, r, a), e._a[pe] = o.year, e._dayOfYear = o.dayOfYear) }(e), null != e._dayOfYear && (r = St(e._a[pe], s[pe]), (e._dayOfYear > Fe(r) || 0 === e._dayOfYear) && (y(e)._overflowDayOfYear = !0), n = Ve(r, 0, e._dayOfYear), e._a[ve] = n.getUTCMonth(), e._a[ke] = n.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t)e._a[t] = u[t] = s[t]; for (; t < 7; t++)e._a[t] = u[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t]; 24 === e._a[Me] && 0 === e._a[De] && 0 === e._a[Se] && 0 === e._a[Ye] && (e._nextDay = !0, e._a[Me] = 0), e._d = (e._useUTC ? Ve : function (e, t, n, s, i, r, a) { var o; return e < 100 && 0 <= e ? (o = new Date(e + 400, t, n, s, i, r, a), isFinite(o.getFullYear()) && o.setFullYear(e)) : o = new Date(e, t, n, s, i, r, a), o }).apply(null, u), i = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[Me] = 24), e._w && void 0 !== e._w.d && e._w.d !== i && (y(e).weekdayMismatch = !0) } } function Ot(e) { if (e._f !== f.ISO_8601) if (e._f !== f.RFC_2822) { e._a = [], y(e).empty = !0; for (var t, n, s, i, r, a, o, u = "" + e._i, l = u.length, h = 0, d = H(e._f, e._locale).match(N) || [], c = 0; c < d.length; c++)n = d[c], (t = (u.match(fe(n, e)) || [])[0]) && (0 < (s = u.substr(0, u.indexOf(t))).length && y(e).unusedInput.push(s), u = u.slice(u.indexOf(t) + t.length), h += t.length), W[n] ? (t ? y(e).empty = !1 : y(e).unusedTokens.push(n), r = n, o = e, null != (a = t) && m(_e, r) && _e[r](a, o._a, o, r)) : e._strict && !t && y(e).unusedTokens.push(n); y(e).charsLeftOver = l - h, 0 < u.length && y(e).unusedInput.push(u), e._a[Me] <= 12 && !0 === y(e).bigHour && 0 < e._a[Me] && (y(e).bigHour = void 0), y(e).parsedDateParts = e._a.slice(0), y(e).meridiem = e._meridiem, e._a[Me] = function (e, t, n) { var s; if (null == n) return t; return null != e.meridiemHour ? e.meridiemHour(t, n) : (null != e.isPM && ((s = e.isPM(n)) && t < 12 && (t += 12), s || 12 !== t || (t = 0)), t) }(e._locale, e._a[Me], e._meridiem), null !== (i = y(e).era) && (e._a[pe] = e._locale.erasConvertYear(i, e._a[pe])), Yt(e), ct(e) } else Dt(e); else kt(e) } function bt(e) { var t, n, s = e._i, i = e._f; return e._locale = e._locale || dt(e._l), null === s || void 0 === i && "" === s ? w({ nullInput: !0 }) : ("string" == typeof s && (e._i = s = e._locale.preparse(s)), M(s) ? new k(ct(s)) : (a(s) ? e._d = s : o(i) ? function (e) { var t, n, s, i, r, a, o = !1; if (0 === e._f.length) return y(e).invalidFormat = !0, e._d = new Date(NaN); for (i = 0; i < e._f.length; i++)r = 0, a = !1, t = v({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[i], Ot(t), g(t) && (a = !0), r += y(t).charsLeftOver, r += 10 * y(t).unusedTokens.length, y(t).score = r, o ? r < s && (s = r, n = t) : (null == s || r < s || a) && (s = r, n = t, a && (o = !0)); c(e, n || t) }(e) : i ? Ot(e) : r(n = (t = e)._i) ? t._d = new Date(f.now()) : a(n) ? t._d = new Date(n.valueOf()) : "string" == typeof n ? function (e) { var t = wt.exec(e._i); null === t ? (kt(e), !1 === e._isValid && (delete e._isValid, Dt(e), !1 === e._isValid && (delete e._isValid, e._strict ? e._isValid = !1 : f.createFromInputFallback(e)))) : e._d = new Date(+t[1]) }(t) : o(n) ? (t._a = d(n.slice(0), function (e) { return parseInt(e, 10) }), Yt(t)) : u(n) ? function (e) { var t, n; e._d || (n = void 0 === (t = G(e._i)).day ? t.date : t.day, e._a = d([t.year, t.month, n, t.hour, t.minute, t.second, t.millisecond], function (e) { return e && parseInt(e, 10) }), Yt(e)) }(t) : h(n) ? t._d = new Date(n) : f.createFromInputFallback(t), g(e) || (e._d = null), e)) } function xt(e, t, n, s, i) { var r, a = {}; return !0 !== t && !1 !== t || (s = t, t = void 0), !0 !== n && !1 !== n || (s = n, n = void 0), (u(e) && l(e) || o(e) && 0 === e.length) && (e = void 0), a._isAMomentObject = !0, a._useUTC = a._isUTC = i, a._l = n, a._i = e, a._f = t, a._strict = s, (r = new k(ct(bt(a))))._nextDay && (r.add(1, "d"), r._nextDay = void 0), r } function Tt(e, t, n, s) { return xt(e, t, n, s, !1) } f.createFromInputFallback = n("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (e) { e._d = new Date(e._i + (e._useUTC ? " UTC" : "")) }), f.ISO_8601 = function () { }, f.RFC_2822 = function () { }; var Nt = n("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () { var e = Tt.apply(null, arguments); return this.isValid() && e.isValid() ? e < this ? this : e : w() }), Pt = n("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () { var e = Tt.apply(null, arguments); return this.isValid() && e.isValid() ? this < e ? this : e : w() }); function Rt(e, t) { var n, s; if (1 === t.length && o(t[0]) && (t = t[0]), !t.length) return Tt(); for (n = t[0], s = 1; s < t.length; ++s)t[s].isValid() && !t[s][e](n) || (n = t[s]); return n } var Wt = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"]; function Ct(e) { var t = G(e), n = t.year || 0, s = t.quarter || 0, i = t.month || 0, r = t.week || t.isoWeek || 0, a = t.day || 0, o = t.hour || 0, u = t.minute || 0, l = t.second || 0, h = t.millisecond || 0; this._isValid = function (e) { var t, n, s = !1; for (t in e) if (m(e, t) && (-1 === we.call(Wt, t) || null != e[t] && isNaN(e[t]))) return !1; for (n = 0; n < Wt.length; ++n)if (e[Wt[n]]) { if (s) return !1; parseFloat(e[Wt[n]]) !== Z(e[Wt[n]]) && (s = !0) } return !0 }(t), this._milliseconds = +h + 1e3 * l + 6e4 * u + 1e3 * o * 60 * 60, this._days = +a + 7 * r, this._months = +i + 3 * s + 12 * n, this._data = {}, this._locale = dt(), this._bubble() } function Ut(e) { return e instanceof Ct } function Ht(e) { return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e) } function Ft(e, n) { C(e, 0, 0, function () { var e = this.utcOffset(), t = "+"; return e < 0 && (e = -e, t = "-"), t + T(~~(e / 60), 2) + n + T(~~e % 60, 2) }) } Ft("Z", ":"), Ft("ZZ", ""), ce("Z", he), ce("ZZ", he), ye(["Z", "ZZ"], function (e, t, n) { n._useUTC = !0, n._tzm = Vt(he, e) }); var Lt = /([\+\-]|\d\d)/gi; function Vt(e, t) { var n, s, i = (t || "").match(e); return null === i ? null : 0 === (s = 60 * (n = ((i[i.length - 1] || []) + "").match(Lt) || ["-", 0, 0])[1] + Z(n[2])) ? 0 : "+" === n[0] ? s : -s } function Gt(e, t) { var n, s; return t._isUTC ? (n = t.clone(), s = (M(e) || a(e) ? e.valueOf() : Tt(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + s), f.updateOffset(n, !1), n) : Tt(e).local() } function Et(e) { return -Math.round(e._d.getTimezoneOffset()) } function At() { return !!this.isValid() && (this._isUTC && 0 === this._offset) } f.updateOffset = function () { }; var jt = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, It = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/; function Zt(e, t) { var n, s, i, r = e, a = null; return Ut(e) ? r = { ms: e._milliseconds, d: e._days, M: e._months } : h(e) || !isNaN(+e) ? (r = {}, t ? r[t] = +e : r.milliseconds = +e) : (a = jt.exec(e)) ? (n = "-" === a[1] ? -1 : 1, r = { y: 0, d: Z(a[ke]) * n, h: Z(a[Me]) * n, m: Z(a[De]) * n, s: Z(a[Se]) * n, ms: Z(Ht(1e3 * a[Ye])) * n }) : (a = It.exec(e)) ? (n = "-" === a[1] ? -1 : 1, r = { y: zt(a[2], n), M: zt(a[3], n), w: zt(a[4], n), d: zt(a[5], n), h: zt(a[6], n), m: zt(a[7], n), s: zt(a[8], n) }) : null == r ? r = {} : "object" == typeof r && ("from" in r || "to" in r) && (i = function (e, t) { var n; if (!e.isValid() || !t.isValid()) return { milliseconds: 0, months: 0 }; t = Gt(t, e), e.isBefore(t) ? n = $t(e, t) : ((n = $t(t, e)).milliseconds = -n.milliseconds, n.months = -n.months); return n }(Tt(r.from), Tt(r.to)), (r = {}).ms = i.milliseconds, r.M = i.months), s = new Ct(r), Ut(e) && m(e, "_locale") && (s._locale = e._locale), Ut(e) && m(e, "_isValid") && (s._isValid = e._isValid), s } function zt(e, t) { var n = e && parseFloat(e.replace(",", ".")); return (isNaN(n) ? 0 : n) * t } function $t(e, t) { var n = {}; return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = t - e.clone().add(n.months, "M"), n } function qt(s, i) { return function (e, t) { var n; return null === t || isNaN(+t) || (Y(i, "moment()." + i + "(period, number) is deprecated. Please use moment()." + i + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), n = e, e = t, t = n), Bt(this, Zt(e, t), s), this } } function Bt(e, t, n, s) { var i = t._milliseconds, r = Ht(t._days), a = Ht(t._months); e.isValid() && (s = null == s || s, a && Ce(e, $(e, "Month") + a * n), r && q(e, "Date", $(e, "Date") + r * n), i && e._d.setTime(e._d.valueOf() + i * n), s && f.updateOffset(e, r || a)) } Zt.fn = Ct.prototype, Zt.invalid = function () { return Zt(NaN) }; var Jt = qt(1, "add"), Qt = qt(-1, "subtract"); function Xt(e) { return "string" == typeof e || e instanceof String } function Kt(e) { return M(e) || a(e) || Xt(e) || h(e) || function (t) { var e = o(t), n = !1; e && (n = 0 === t.filter(function (e) { return !h(e) && Xt(t) }).length); return e && n }(e) || function (e) { var t, n, s = u(e) && !l(e), i = !1, r = ["years", "year", "y", "months", "month", "M", "days", "day", "d", "dates", "date", "D", "hours", "hour", "h", "minutes", "minute", "m", "seconds", "second", "s", "milliseconds", "millisecond", "ms"]; for (t = 0; t < r.length; t += 1)n = r[t], i = i || m(e, n); return s && i }(e) || null == e } function en(e, t) { if (e.date() < t.date()) return -en(t, e); var n = 12 * (t.year() - e.year()) + (t.month() - e.month()), s = e.clone().add(n, "months"), i = t - s < 0 ? (t - s) / (s - e.clone().add(n - 1, "months")) : (t - s) / (e.clone().add(1 + n, "months") - s); return -(n + i) || 0 } function tn(e) { var t; return void 0 === e ? this._locale._abbr : (null != (t = dt(e)) && (this._locale = t), this) } f.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", f.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]"; var nn = n("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (e) { return void 0 === e ? this.localeData() : this.locale(e) }); function sn() { return this._locale } var rn = 126227808e5; function an(e, t) { return (e % t + t) % t } function on(e, t, n) { return e < 100 && 0 <= e ? new Date(e + 400, t, n) - rn : new Date(e, t, n).valueOf() } function un(e, t, n) { return e < 100 && 0 <= e ? Date.UTC(e + 400, t, n) - rn : Date.UTC(e, t, n) } function ln(e, t) { return t.erasAbbrRegex(e) } function hn() { for (var e = [], t = [], n = [], s = [], i = this.eras(), r = 0, a = i.length; r < a; ++r)t.push(me(i[r].name)), e.push(me(i[r].abbr)), n.push(me(i[r].narrow)), s.push(me(i[r].name)), s.push(me(i[r].abbr)), s.push(me(i[r].narrow)); this._erasRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp("^(" + n.join("|") + ")", "i") } function dn(e, t) { C(0, [e, e.length], 0, t) } function cn(e, t, n, s, i) { var r; return null == e ? Ae(this, s, i).year : ((r = je(e, s, i)) < t && (t = r), function (e, t, n, s, i) { var r = Ee(e, t, n, s, i), a = Ve(r.year, 0, r.dayOfYear); return this.year(a.getUTCFullYear()), this.month(a.getUTCMonth()), this.date(a.getUTCDate()), this }.call(this, e, t, n, s, i)) } C("N", 0, 0, "eraAbbr"), C("NN", 0, 0, "eraAbbr"), C("NNN", 0, 0, "eraAbbr"), C("NNNN", 0, 0, "eraName"), C("NNNNN", 0, 0, "eraNarrow"), C("y", ["y", 1], "yo", "eraYear"), C("y", ["yy", 2], 0, "eraYear"), C("y", ["yyy", 3], 0, "eraYear"), C("y", ["yyyy", 4], 0, "eraYear"), ce("N", ln), ce("NN", ln), ce("NNN", ln), ce("NNNN", function (e, t) { return t.erasNameRegex(e) }), ce("NNNNN", function (e, t) { return t.erasNarrowRegex(e) }), ye(["N", "NN", "NNN", "NNNN", "NNNNN"], function (e, t, n, s) { var i = n._locale.erasParse(e, s, n._strict); i ? y(n).era = i : y(n).invalidEra = e }), ce("y", oe), ce("yy", oe), ce("yyy", oe), ce("yyyy", oe), ce("yo", function (e, t) { return t._eraYearOrdinalRegex || oe }), ye(["y", "yy", "yyy", "yyyy"], pe), ye(["yo"], function (e, t, n, s) { var i; n._locale._eraYearOrdinalRegex && (i = e.match(n._locale._eraYearOrdinalRegex)), n._locale.eraYearOrdinalParse ? t[pe] = n._locale.eraYearOrdinalParse(e, i) : t[pe] = parseInt(e, 10) }), C(0, ["gg", 2], 0, function () { return this.weekYear() % 100 }), C(0, ["GG", 2], 0, function () { return this.isoWeekYear() % 100 }), dn("gggg", "weekYear"), dn("ggggg", "weekYear"), dn("GGGG", "isoWeekYear"), dn("GGGGG", "isoWeekYear"), L("weekYear", "gg"), L("isoWeekYear", "GG"), A("weekYear", 1), A("isoWeekYear", 1), ce("G", ue), ce("g", ue), ce("GG", te, Q), ce("gg", te, Q), ce("GGGG", re, K), ce("gggg", re, K), ce("GGGGG", ae, ee), ce("ggggg", ae, ee), ge(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, n, s) { t[s.substr(0, 2)] = Z(e) }), ge(["gg", "GG"], function (e, t, n, s) { t[s] = f.parseTwoDigitYear(e) }), C("Q", 0, "Qo", "quarter"), L("quarter", "Q"), A("quarter", 7), ce("Q", J), ye("Q", function (e, t) { t[ve] = 3 * (Z(e) - 1) }), C("D", ["DD", 2], "Do", "date"), L("date", "D"), A("date", 9), ce("D", te), ce("DD", te, Q), ce("Do", function (e, t) { return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient }), ye(["D", "DD"], ke), ye("Do", function (e, t) { t[ke] = Z(e.match(te)[0]) }); var fn = z("Date", !0); C("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), L("dayOfYear", "DDD"), A("dayOfYear", 4), ce("DDD", ie), ce("DDDD", X), ye(["DDD", "DDDD"], function (e, t, n) { n._dayOfYear = Z(e) }), C("m", ["mm", 2], 0, "minute"), L("minute", "m"), A("minute", 14), ce("m", te), ce("mm", te, Q), ye(["m", "mm"], De); var mn = z("Minutes", !1); C("s", ["ss", 2], 0, "second"), L("second", "s"), A("second", 15), ce("s", te), ce("ss", te, Q), ye(["s", "ss"], Se); var _n, yn, gn = z("Seconds", !1); for (C("S", 0, 0, function () { return ~~(this.millisecond() / 100) }), C(0, ["SS", 2], 0, function () { return ~~(this.millisecond() / 10) }), C(0, ["SSS", 3], 0, "millisecond"), C(0, ["SSSS", 4], 0, function () { return 10 * this.millisecond() }), C(0, ["SSSSS", 5], 0, function () { return 100 * this.millisecond() }), C(0, ["SSSSSS", 6], 0, function () { return 1e3 * this.millisecond() }), C(0, ["SSSSSSS", 7], 0, function () { return 1e4 * this.millisecond() }), C(0, ["SSSSSSSS", 8], 0, function () { return 1e5 * this.millisecond() }), C(0, ["SSSSSSSSS", 9], 0, function () { return 1e6 * this.millisecond() }), L("millisecond", "ms"), A("millisecond", 16), ce("S", ie, J), ce("SS", ie, Q), ce("SSS", ie, X), _n = "SSSS"; _n.length <= 9; _n += "S")ce(_n, oe); function wn(e, t) { t[Ye] = Z(1e3 * ("0." + e)) } for (_n = "S"; _n.length <= 9; _n += "S")ye(_n, wn); yn = z("Milliseconds", !1), C("z", 0, 0, "zoneAbbr"), C("zz", 0, 0, "zoneName"); var pn = k.prototype; function vn(e) { return e } pn.add = Jt, pn.calendar = function (e, t) { 1 === arguments.length && (arguments[0] ? Kt(arguments[0]) ? (e = arguments[0], t = void 0) : function (e) { for (var t = u(e) && !l(e), n = !1, s = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"], i = 0; i < s.length; i += 1)n = n || m(e, s[i]); return t && n }(arguments[0]) && (t = arguments[0], e = void 0) : t = e = void 0); var n = e || Tt(), s = Gt(n, this).startOf("day"), i = f.calendarFormat(this, s) || "sameElse", r = t && (O(t[i]) ? t[i].call(this, n) : t[i]); return this.format(r || this.localeData().calendar(i, this, Tt(n))) }, pn.clone = function () { return new k(this) }, pn.diff = function (e, t, n) { var s, i, r; if (!this.isValid()) return NaN; if (!(s = Gt(e, this)).isValid()) return NaN; switch (i = 6e4 * (s.utcOffset() - this.utcOffset()), t = V(t)) { case "year": r = en(this, s) / 12; break; case "month": r = en(this, s); break; case "quarter": r = en(this, s) / 3; break; case "second": r = (this - s) / 1e3; break; case "minute": r = (this - s) / 6e4; break; case "hour": r = (this - s) / 36e5; break; case "day": r = (this - s - i) / 864e5; break; case "week": r = (this - s - i) / 6048e5; break; default: r = this - s }return n ? r : I(r) }, pn.endOf = function (e) { var t, n; if (void 0 === (e = V(e)) || "millisecond" === e || !this.isValid()) return this; switch (n = this._isUTC ? un : on, e) { case "year": t = n(this.year() + 1, 0, 1) - 1; break; case "quarter": t = n(this.year(), this.month() - this.month() % 3 + 3, 1) - 1; break; case "month": t = n(this.year(), this.month() + 1, 1) - 1; break; case "week": t = n(this.year(), this.month(), this.date() - this.weekday() + 7) - 1; break; case "isoWeek": t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1; break; case "day": case "date": t = n(this.year(), this.month(), this.date() + 1) - 1; break; case "hour": t = this._d.valueOf(), t += 36e5 - an(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5) - 1; break; case "minute": t = this._d.valueOf(), t += 6e4 - an(t, 6e4) - 1; break; case "second": t = this._d.valueOf(), t += 1e3 - an(t, 1e3) - 1; break }return this._d.setTime(t), f.updateOffset(this, !0), this }, pn.format = function (e) { e = e || (this.isUtc() ? f.defaultFormatUtc : f.defaultFormat); var t = U(this, e); return this.localeData().postformat(t) }, pn.from = function (e, t) { return this.isValid() && (M(e) && e.isValid() || Tt(e).isValid()) ? Zt({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate() }, pn.fromNow = function (e) { return this.from(Tt(), e) }, pn.to = function (e, t) { return this.isValid() && (M(e) && e.isValid() || Tt(e).isValid()) ? Zt({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate() }, pn.toNow = function (e) { return this.to(Tt(), e) }, pn.get = function (e) { return O(this[e = V(e)]) ? this[e]() : this }, pn.invalidAt = function () { return y(this).overflow }, pn.isAfter = function (e, t) { var n = M(e) ? e : Tt(e); return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = V(t) || "millisecond") ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf()) }, pn.isBefore = function (e, t) { var n = M(e) ? e : Tt(e); return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = V(t) || "millisecond") ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf()) }, pn.isBetween = function (e, t, n, s) { var i = M(e) ? e : Tt(e), r = M(t) ? t : Tt(t); return !!(this.isValid() && i.isValid() && r.isValid()) && (("(" === (s = s || "()")[0] ? this.isAfter(i, n) : !this.isBefore(i, n)) && (")" === s[1] ? this.isBefore(r, n) : !this.isAfter(r, n))) }, pn.isSame = function (e, t) { var n, s = M(e) ? e : Tt(e); return !(!this.isValid() || !s.isValid()) && ("millisecond" === (t = V(t) || "millisecond") ? this.valueOf() === s.valueOf() : (n = s.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf())) }, pn.isSameOrAfter = function (e, t) { return this.isSame(e, t) || this.isAfter(e, t) }, pn.isSameOrBefore = function (e, t) { return this.isSame(e, t) || this.isBefore(e, t) }, pn.isValid = function () { return g(this) }, pn.lang = nn, pn.locale = tn, pn.localeData = sn, pn.max = Pt, pn.min = Nt, pn.parsingFlags = function () { return c({}, y(this)) }, pn.set = function (e, t) { if ("object" == typeof e) for (var n = function (e) { var t, n = []; for (t in e) m(e, t) && n.push({ unit: t, priority: E[t] }); return n.sort(function (e, t) { return e.priority - t.priority }), n }(e = G(e)), s = 0; s < n.length; s++)this[n[s].unit](e[n[s].unit]); else if (O(this[e = V(e)])) return this[e](t); return this }, pn.startOf = function (e) { var t, n; if (void 0 === (e = V(e)) || "millisecond" === e || !this.isValid()) return this; switch (n = this._isUTC ? un : on, e) { case "year": t = n(this.year(), 0, 1); break; case "quarter": t = n(this.year(), this.month() - this.month() % 3, 1); break; case "month": t = n(this.year(), this.month(), 1); break; case "week": t = n(this.year(), this.month(), this.date() - this.weekday()); break; case "isoWeek": t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1)); break; case "day": case "date": t = n(this.year(), this.month(), this.date()); break; case "hour": t = this._d.valueOf(), t -= an(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5); break; case "minute": t = this._d.valueOf(), t -= an(t, 6e4); break; case "second": t = this._d.valueOf(), t -= an(t, 1e3); break }return this._d.setTime(t), f.updateOffset(this, !0), this }, pn.subtract = Qt, pn.toArray = function () { var e = this; return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()] }, pn.toObject = function () { var e = this; return { years: e.year(), months: e.month(), date: e.date(), hours: e.hours(), minutes: e.minutes(), seconds: e.seconds(), milliseconds: e.milliseconds() } }, pn.toDate = function () { return new Date(this.valueOf()) }, pn.toISOString = function (e) { if (!this.isValid()) return null; var t = !0 !== e, n = t ? this.clone().utc() : this; return n.year() < 0 || 9999 < n.year() ? U(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : O(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", U(n, "Z")) : U(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ") }, pn.inspect = function () { if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)"; var e, t, n, s = "moment", i = ""; return this.isLocal() || (s = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", i = "Z"), e = "[" + s + '("]', t = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", n = i + '[")]', this.format(e + t + "-MM-DD[T]HH:mm:ss.SSS" + n) }, "undefined" != typeof Symbol && null != Symbol.for && (pn[Symbol.for("nodejs.util.inspect.custom")] = function () { return "Moment<" + this.format() + ">" }), pn.toJSON = function () { return this.isValid() ? this.toISOString() : null }, pn.toString = function () { return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ") }, pn.unix = function () { return Math.floor(this.valueOf() / 1e3) }, pn.valueOf = function () { return this._d.valueOf() - 6e4 * (this._offset || 0) }, pn.creationData = function () { return { input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict } }, pn.eraName = function () { for (var e, t = this.localeData().eras(), n = 0, s = t.length; n < s; ++n) { if (e = this.clone().startOf("day").valueOf(), t[n].since <= e && e <= t[n].until) return t[n].name; if (t[n].until <= e && e <= t[n].since) return t[n].name } return "" }, pn.eraNarrow = function () { for (var e, t = this.localeData().eras(), n = 0, s = t.length; n < s; ++n) { if (e = this.clone().startOf("day").valueOf(), t[n].since <= e && e <= t[n].until) return t[n].narrow; if (t[n].until <= e && e <= t[n].since) return t[n].narrow } return "" }, pn.eraAbbr = function () { for (var e, t = this.localeData().eras(), n = 0, s = t.length; n < s; ++n) { if (e = this.clone().startOf("day").valueOf(), t[n].since <= e && e <= t[n].until) return t[n].abbr; if (t[n].until <= e && e <= t[n].since) return t[n].abbr } return "" }, pn.eraYear = function () { for (var e, t, n = this.localeData().eras(), s = 0, i = n.length; s < i; ++s)if (e = n[s].since <= n[s].until ? 1 : -1, t = this.clone().startOf("day").valueOf(), n[s].since <= t && t <= n[s].until || n[s].until <= t && t <= n[s].since) return (this.year() - f(n[s].since).year()) * e + n[s].offset; return this.year() }, pn.year = Le, pn.isLeapYear = function () { return j(this.year()) }, pn.weekYear = function (e) { return cn.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy) }, pn.isoWeekYear = function (e) { return cn.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4) }, pn.quarter = pn.quarters = function (e) { return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3) }, pn.month = Ue, pn.daysInMonth = function () { return xe(this.year(), this.month()) }, pn.week = pn.weeks = function (e) { var t = this.localeData().week(this); return null == e ? t : this.add(7 * (e - t), "d") }, pn.isoWeek = pn.isoWeeks = function (e) { var t = Ae(this, 1, 4).week; return null == e ? t : this.add(7 * (e - t), "d") }, pn.weeksInYear = function () { var e = this.localeData()._week; return je(this.year(), e.dow, e.doy) }, pn.weeksInWeekYear = function () { var e = this.localeData()._week; return je(this.weekYear(), e.dow, e.doy) }, pn.isoWeeksInYear = function () { return je(this.year(), 1, 4) }, pn.isoWeeksInISOWeekYear = function () { return je(this.isoWeekYear(), 1, 4) }, pn.date = fn, pn.day = pn.days = function (e) { if (!this.isValid()) return null != e ? this : NaN; var t, n, s = this._isUTC ? this._d.getUTCDay() : this._d.getDay(); return null != e ? (t = e, n = this.localeData(), e = "string" != typeof t ? t : isNaN(t) ? "number" == typeof (t = n.weekdaysParse(t)) ? t : null : parseInt(t, 10), this.add(e - s, "d")) : s }, pn.weekday = function (e) { if (!this.isValid()) return null != e ? this : NaN; var t = (this.day() + 7 - this.localeData()._week.dow) % 7; return null == e ? t : this.add(e - t, "d") }, pn.isoWeekday = function (e) { if (!this.isValid()) return null != e ? this : NaN; if (null == e) return this.day() || 7; var t, n, s = (t = e, n = this.localeData(), "string" == typeof t ? n.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t); return this.day(this.day() % 7 ? s : s - 7) }, pn.dayOfYear = function (e) { var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1; return null == e ? t : this.add(e - t, "d") }, pn.hour = pn.hours = tt, pn.minute = pn.minutes = mn, pn.second = pn.seconds = gn, pn.millisecond = pn.milliseconds = yn, pn.utcOffset = function (e, t, n) { var s, i = this._offset || 0; if (!this.isValid()) return null != e ? this : NaN; if (null == e) return this._isUTC ? i : Et(this); if ("string" == typeof e) { if (null === (e = Vt(he, e))) return this } else Math.abs(e) < 16 && !n && (e *= 60); return !this._isUTC && t && (s = Et(this)), this._offset = e, this._isUTC = !0, null != s && this.add(s, "m"), i !== e && (!t || this._changeInProgress ? Bt(this, Zt(e - i, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, f.updateOffset(this, !0), this._changeInProgress = null)), this }, pn.utc = function (e) { return this.utcOffset(0, e) }, pn.local = function (e) { return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Et(this), "m")), this }, pn.parseZone = function () { var e; return null != this._tzm ? this.utcOffset(this._tzm, !1, !0) : "string" == typeof this._i && (null != (e = Vt(le, this._i)) ? this.utcOffset(e) : this.utcOffset(0, !0)), this }, pn.hasAlignedHourOffset = function (e) { return !!this.isValid() && (e = e ? Tt(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0) }, pn.isDST = function () { return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset() }, pn.isLocal = function () { return !!this.isValid() && !this._isUTC }, pn.isUtcOffset = function () { return !!this.isValid() && this._isUTC }, pn.isUtc = At, pn.isUTC = At, pn.zoneAbbr = function () { return this._isUTC ? "UTC" : "" }, pn.zoneName = function () { return this._isUTC ? "Coordinated Universal Time" : "" }, pn.dates = n("dates accessor is deprecated. Use date instead.", fn), pn.months = n("months accessor is deprecated. Use month instead", Ue), pn.years = n("years accessor is deprecated. Use year instead", Le), pn.zone = n("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function (e, t) { return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset() }), pn.isDSTShifted = n("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function () { if (!r(this._isDSTShifted)) return this._isDSTShifted; var e, t = {}; return v(t, this), (t = bt(t))._a ? (e = (t._isUTC ? _ : Tt)(t._a), this._isDSTShifted = this.isValid() && 0 < function (e, t, n) { for (var s = Math.min(e.length, t.length), i = Math.abs(e.length - t.length), r = 0, a = 0; a < s; a++)(n && e[a] !== t[a] || !n && Z(e[a]) !== Z(t[a])) && r++; return r + i }(t._a, e.toArray())) : this._isDSTShifted = !1, this._isDSTShifted }); var kn = x.prototype; function Mn(e, t, n, s) { var i = dt(), r = _().set(s, t); return i[n](r, e) } function Dn(e, t, n) { if (h(e) && (t = e, e = void 0), e = e || "", null != t) return Mn(e, t, n, "month"); for (var s = [], i = 0; i < 12; i++)s[i] = Mn(e, i, n, "month"); return s } function Sn(e, t, n, s) { t = ("boolean" == typeof e ? h(t) && (n = t, t = void 0) : (t = e, e = !1, h(n = t) && (n = t, t = void 0)), t || ""); var i, r = dt(), a = e ? r._week.dow : 0, o = []; if (null != n) return Mn(t, (n + a) % 7, s, "day"); for (i = 0; i < 7; i++)o[i] = Mn(t, (i + a) % 7, s, "day"); return o } kn.calendar = function (e, t, n) { var s = this._calendar[e] || this._calendar.sameElse; return O(s) ? s.call(t, n) : s }, kn.longDateFormat = function (e) { var t = this._longDateFormat[e], n = this._longDateFormat[e.toUpperCase()]; return t || !n ? t : (this._longDateFormat[e] = n.match(N).map(function (e) { return "MMMM" === e || "MM" === e || "DD" === e || "dddd" === e ? e.slice(1) : e }).join(""), this._longDateFormat[e]) }, kn.invalidDate = function () { return this._invalidDate }, kn.ordinal = function (e) { return this._ordinal.replace("%d", e) }, kn.preparse = vn, kn.postformat = vn, kn.relativeTime = function (e, t, n, s) { var i = this._relativeTime[n]; return O(i) ? i(e, t, n, s) : i.replace(/%d/i, e) }, kn.pastFuture = function (e, t) { var n = this._relativeTime[0 < e ? "future" : "past"]; return O(n) ? n(t) : n.replace(/%s/i, t) }, kn.set = function (e) { var t, n; for (n in e) m(e, n) && (O(t = e[n]) ? this[n] = t : this["_" + n] = t); this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source) }, kn.eras = function (e, t) { for (var n, s = this._eras || dt("en")._eras, i = 0, r = s.length; i < r; ++i) { switch (typeof s[i].since) { case "string": n = f(s[i].since).startOf("day"), s[i].since = n.valueOf(); break }switch (typeof s[i].until) { case "undefined": s[i].until = 1 / 0; break; case "string": n = f(s[i].until).startOf("day").valueOf(), s[i].until = n.valueOf(); break } } return s }, kn.erasParse = function (e, t, n) { var s, i, r, a, o, u = this.eras(); for (e = e.toUpperCase(), s = 0, i = u.length; s < i; ++s)if (r = u[s].name.toUpperCase(), a = u[s].abbr.toUpperCase(), o = u[s].narrow.toUpperCase(), n) switch (t) { case "N": case "NN": case "NNN": if (a === e) return u[s]; break; case "NNNN": if (r === e) return u[s]; break; case "NNNNN": if (o === e) return u[s]; break } else if (0 <= [r, a, o].indexOf(e)) return u[s] }, kn.erasConvertYear = function (e, t) { var n = e.since <= e.until ? 1 : -1; return void 0 === t ? f(e.since).year() : f(e.since).year() + (t - e.offset) * n }, kn.erasAbbrRegex = function (e) { return m(this, "_erasAbbrRegex") || hn.call(this), e ? this._erasAbbrRegex : this._erasRegex }, kn.erasNameRegex = function (e) { return m(this, "_erasNameRegex") || hn.call(this), e ? this._erasNameRegex : this._erasRegex }, kn.erasNarrowRegex = function (e) { return m(this, "_erasNarrowRegex") || hn.call(this), e ? this._erasNarrowRegex : this._erasRegex }, kn.months = function (e, t) { return e ? o(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Pe).test(t) ? "format" : "standalone"][e.month()] : o(this._months) ? this._months : this._months.standalone }, kn.monthsShort = function (e, t) { return e ? o(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Pe.test(t) ? "format" : "standalone"][e.month()] : o(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone }, kn.monthsParse = function (e, t, n) { var s, i, r; if (this._monthsParseExact) return function (e, t, n) { var s, i, r, a = e.toLocaleLowerCase(); if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], s = 0; s < 12; ++s)r = _([2e3, s]), this._shortMonthsParse[s] = this.monthsShort(r, "").toLocaleLowerCase(), this._longMonthsParse[s] = this.months(r, "").toLocaleLowerCase(); return n ? "MMM" === t ? -1 !== (i = we.call(this._shortMonthsParse, a)) ? i : null : -1 !== (i = we.call(this._longMonthsParse, a)) ? i : null : "MMM" === t ? -1 !== (i = we.call(this._shortMonthsParse, a)) || -1 !== (i = we.call(this._longMonthsParse, a)) ? i : null : -1 !== (i = we.call(this._longMonthsParse, a)) || -1 !== (i = we.call(this._shortMonthsParse, a)) ? i : null }.call(this, e, t, n); for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), s = 0; s < 12; s++) { if (i = _([2e3, s]), n && !this._longMonthsParse[s] && (this._longMonthsParse[s] = new RegExp("^" + this.months(i, "").replace(".", "") + "$", "i"), this._shortMonthsParse[s] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$", "i")), n || this._monthsParse[s] || (r = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), this._monthsParse[s] = new RegExp(r.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[s].test(e)) return s; if (n && "MMM" === t && this._shortMonthsParse[s].test(e)) return s; if (!n && this._monthsParse[s].test(e)) return s } }, kn.monthsRegex = function (e) { return this._monthsParseExact ? (m(this, "_monthsRegex") || He.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (m(this, "_monthsRegex") || (this._monthsRegex = We), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex) }, kn.monthsShortRegex = function (e) { return this._monthsParseExact ? (m(this, "_monthsRegex") || He.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (m(this, "_monthsShortRegex") || (this._monthsShortRegex = Re), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex) }, kn.week = function (e) { return Ae(e, this._week.dow, this._week.doy).week }, kn.firstDayOfYear = function () { return this._week.doy }, kn.firstDayOfWeek = function () { return this._week.dow }, kn.weekdays = function (e, t) { var n = o(this._weekdays) ? this._weekdays : this._weekdays[e && !0 !== e && this._weekdays.isFormat.test(t) ? "format" : "standalone"]; return !0 === e ? Ie(n, this._week.dow) : e ? n[e.day()] : n }, kn.weekdaysMin = function (e) { return !0 === e ? Ie(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin }, kn.weekdaysShort = function (e) { return !0 === e ? Ie(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort }, kn.weekdaysParse = function (e, t, n) { var s, i, r; if (this._weekdaysParseExact) return function (e, t, n) { var s, i, r, a = e.toLocaleLowerCase(); if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], s = 0; s < 7; ++s)r = _([2e3, 1]).day(s), this._minWeekdaysParse[s] = this.weekdaysMin(r, "").toLocaleLowerCase(), this._shortWeekdaysParse[s] = this.weekdaysShort(r, "").toLocaleLowerCase(), this._weekdaysParse[s] = this.weekdays(r, "").toLocaleLowerCase(); return n ? "dddd" === t ? -1 !== (i = we.call(this._weekdaysParse, a)) ? i : null : "ddd" === t ? -1 !== (i = we.call(this._shortWeekdaysParse, a)) ? i : null : -1 !== (i = we.call(this._minWeekdaysParse, a)) ? i : null : "dddd" === t ? -1 !== (i = we.call(this._weekdaysParse, a)) || -1 !== (i = we.call(this._shortWeekdaysParse, a)) || -1 !== (i = we.call(this._minWeekdaysParse, a)) ? i : null : "ddd" === t ? -1 !== (i = we.call(this._shortWeekdaysParse, a)) || -1 !== (i = we.call(this._weekdaysParse, a)) || -1 !== (i = we.call(this._minWeekdaysParse, a)) ? i : null : -1 !== (i = we.call(this._minWeekdaysParse, a)) || -1 !== (i = we.call(this._weekdaysParse, a)) || -1 !== (i = we.call(this._shortWeekdaysParse, a)) ? i : null }.call(this, e, t, n); for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), s = 0; s < 7; s++) { if (i = _([2e3, 1]).day(s), n && !this._fullWeekdaysParse[s] && (this._fullWeekdaysParse[s] = new RegExp("^" + this.weekdays(i, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[s] = new RegExp("^" + this.weekdaysShort(i, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[s] = new RegExp("^" + this.weekdaysMin(i, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[s] || (r = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""), this._weekdaysParse[s] = new RegExp(r.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[s].test(e)) return s; if (n && "ddd" === t && this._shortWeekdaysParse[s].test(e)) return s; if (n && "dd" === t && this._minWeekdaysParse[s].test(e)) return s; if (!n && this._weekdaysParse[s].test(e)) return s } }, kn.weekdaysRegex = function (e) { return this._weekdaysParseExact ? (m(this, "_weekdaysRegex") || Qe.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (m(this, "_weekdaysRegex") || (this._weekdaysRegex = qe), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex) }, kn.weekdaysShortRegex = function (e) { return this._weekdaysParseExact ? (m(this, "_weekdaysRegex") || Qe.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (m(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Be), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) }, kn.weekdaysMinRegex = function (e) { return this._weekdaysParseExact ? (m(this, "_weekdaysRegex") || Qe.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (m(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Je), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) }, kn.isPM = function (e) { return "p" === (e + "").toLowerCase().charAt(0) }, kn.meridiem = function (e, t, n) { return 11 < e ? n ? "pm" : "PM" : n ? "am" : "AM" }, lt("en", { eras: [{ since: "0001-01-01", until: 1 / 0, offset: 1, name: "Anno Domini", narrow: "AD", abbr: "AD" }, { since: "0000-12-31", until: -1 / 0, offset: 1, name: "Before Christ", narrow: "BC", abbr: "BC" }], dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function (e) { var t = e % 10; return e + (1 === Z(e % 100 / 10) ? "th" : 1 == t ? "st" : 2 == t ? "nd" : 3 == t ? "rd" : "th") } }), f.lang = n("moment.lang is deprecated. Use moment.locale instead.", lt), f.langData = n("moment.langData is deprecated. Use moment.localeData instead.", dt); var Yn = Math.abs; function On(e, t, n, s) { var i = Zt(t, n); return e._milliseconds += s * i._milliseconds, e._days += s * i._days, e._months += s * i._months, e._bubble() } function bn(e) { return e < 0 ? Math.floor(e) : Math.ceil(e) } function xn(e) { return 4800 * e / 146097 } function Tn(e) { return 146097 * e / 4800 } function Nn(e) { return function () { return this.as(e) } } var Pn = Nn("ms"), Rn = Nn("s"), Wn = Nn("m"), Cn = Nn("h"), Un = Nn("d"), Hn = Nn("w"), Fn = Nn("M"), Ln = Nn("Q"), Vn = Nn("y"); function Gn(e) { return function () { return this.isValid() ? this._data[e] : NaN } } var En = Gn("milliseconds"), An = Gn("seconds"), jn = Gn("minutes"), In = Gn("hours"), Zn = Gn("days"), zn = Gn("months"), $n = Gn("years"); var qn = Math.round, Bn = { ss: 44, s: 45, m: 45, h: 22, d: 26, w: null, M: 11 }; function Jn(e, t, n, s) { var i = Zt(e).abs(), r = qn(i.as("s")), a = qn(i.as("m")), o = qn(i.as("h")), u = qn(i.as("d")), l = qn(i.as("M")), h = qn(i.as("w")), d = qn(i.as("y")), c = (r <= n.ss ? ["s", r] : r < n.s && ["ss", r]) || a <= 1 && ["m"] || a < n.m && ["mm", a] || o <= 1 && ["h"] || o < n.h && ["hh", o] || u <= 1 && ["d"] || u < n.d && ["dd", u]; return null != n.w && (c = c || h <= 1 && ["w"] || h < n.w && ["ww", h]), (c = c || l <= 1 && ["M"] || l < n.M && ["MM", l] || d <= 1 && ["y"] || ["yy", d])[2] = t, c[3] = 0 < +e, c[4] = s, function (e, t, n, s, i) { return i.relativeTime(t || 1, !!n, e, s) }.apply(null, c) } var Qn = Math.abs; function Xn(e) { return (0 < e) - (e < 0) || +e } function Kn() { if (!this.isValid()) return this.localeData().invalidDate(); var e, t, n, s, i, r, a, o, u = Qn(this._milliseconds) / 1e3, l = Qn(this._days), h = Qn(this._months), d = this.asSeconds(); return d ? (e = I(u / 60), t = I(e / 60), u %= 60, e %= 60, n = I(h / 12), h %= 12, s = u ? u.toFixed(3).replace(/\.?0+$/, "") : "", i = d < 0 ? "-" : "", r = Xn(this._months) !== Xn(d) ? "-" : "", a = Xn(this._days) !== Xn(d) ? "-" : "", o = Xn(this._milliseconds) !== Xn(d) ? "-" : "", i + "P" + (n ? r + n + "Y" : "") + (h ? r + h + "M" : "") + (l ? a + l + "D" : "") + (t || e || u ? "T" : "") + (t ? o + t + "H" : "") + (e ? o + e + "M" : "") + (u ? o + s + "S" : "")) : "P0D" } var es = Ct.prototype; return es.isValid = function () { return this._isValid }, es.abs = function () { var e = this._data; return this._milliseconds = Yn(this._milliseconds), this._days = Yn(this._days), this._months = Yn(this._months), e.milliseconds = Yn(e.milliseconds), e.seconds = Yn(e.seconds), e.minutes = Yn(e.minutes), e.hours = Yn(e.hours), e.months = Yn(e.months), e.years = Yn(e.years), this }, es.add = function (e, t) { return On(this, e, t, 1) }, es.subtract = function (e, t) { return On(this, e, t, -1) }, es.as = function (e) { if (!this.isValid()) return NaN; var t, n, s = this._milliseconds; if ("month" === (e = V(e)) || "quarter" === e || "year" === e) switch (t = this._days + s / 864e5, n = this._months + xn(t), e) { case "month": return n; case "quarter": return n / 3; case "year": return n / 12 } else switch (t = this._days + Math.round(Tn(this._months)), e) { case "week": return t / 7 + s / 6048e5; case "day": return t + s / 864e5; case "hour": return 24 * t + s / 36e5; case "minute": return 1440 * t + s / 6e4; case "second": return 86400 * t + s / 1e3; case "millisecond": return Math.floor(864e5 * t) + s; default: throw new Error("Unknown unit " + e) } }, es.asMilliseconds = Pn, es.asSeconds = Rn, es.asMinutes = Wn, es.asHours = Cn, es.asDays = Un, es.asWeeks = Hn, es.asMonths = Fn, es.asQuarters = Ln, es.asYears = Vn, es.valueOf = function () { return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * Z(this._months / 12) : NaN }, es._bubble = function () { var e, t, n, s, i, r = this._milliseconds, a = this._days, o = this._months, u = this._data; return 0 <= r && 0 <= a && 0 <= o || r <= 0 && a <= 0 && o <= 0 || (r += 864e5 * bn(Tn(o) + a), o = a = 0), u.milliseconds = r % 1e3, e = I(r / 1e3), u.seconds = e % 60, t = I(e / 60), u.minutes = t % 60, n = I(t / 60), u.hours = n % 24, a += I(n / 24), o += i = I(xn(a)), a -= bn(Tn(i)), s = I(o / 12), o %= 12, u.days = a, u.months = o, u.years = s, this }, es.clone = function () { return Zt(this) }, es.get = function (e) { return e = V(e), this.isValid() ? this[e + "s"]() : NaN }, es.milliseconds = En, es.seconds = An, es.minutes = jn, es.hours = In, es.days = Zn, es.weeks = function () { return I(this.days() / 7) }, es.months = zn, es.years = $n, es.humanize = function (e, t) { if (!this.isValid()) return this.localeData().invalidDate(); var n, s, i = !1, r = Bn; return "object" == typeof e && (t = e, e = !1), "boolean" == typeof e && (i = e), "object" == typeof t && (r = Object.assign({}, Bn, t), null != t.s && null == t.ss && (r.ss = t.s - 1)), n = this.localeData(), s = Jn(this, !i, r, n), i && (s = n.pastFuture(+this, s)), n.postformat(s) }, es.toISOString = Kn, es.toString = Kn, es.toJSON = Kn, es.locale = tn, es.localeData = sn, es.toIsoString = n("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Kn), es.lang = nn, C("X", 0, 0, "unix"), C("x", 0, 0, "valueOf"), ce("x", ue), ce("X", /[+-]?\d+(\.\d{1,3})?/), ye("X", function (e, t, n) { n._d = new Date(1e3 * parseFloat(e)) }), ye("x", function (e, t, n) { n._d = new Date(Z(e)) }), f.version = "2.29.1", e = Tt, f.fn = pn, f.min = function () { return Rt("isBefore", [].slice.call(arguments, 0)) }, f.max = function () { return Rt("isAfter", [].slice.call(arguments, 0)) }, f.now = function () { return Date.now ? Date.now() : +new Date }, f.utc = _, f.unix = function (e) { return Tt(1e3 * e) }, f.months = function (e, t) { return Dn(e, t, "months") }, f.isDate = a, f.locale = lt, f.invalid = w, f.duration = Zt, f.isMoment = M, f.weekdays = function (e, t, n) { return Sn(e, t, n, "weekdays") }, f.parseZone = function () { return Tt.apply(null, arguments).parseZone() }, f.localeData = dt, f.isDuration = Ut, f.monthsShort = function (e, t) { return Dn(e, t, "monthsShort") }, f.weekdaysMin = function (e, t, n) { return Sn(e, t, n, "weekdaysMin") }, f.defineLocale = ht, f.updateLocale = function (e, t) { var n, s, i; return null != t ? (i = st, null != it[e] && null != it[e].parentLocale ? it[e].set(b(it[e]._config, t)) : (null != (s = ut(e)) && (i = s._config), t = b(i, t), null == s && (t.abbr = e), (n = new x(t)).parentLocale = it[e], it[e] = n), lt(e)) : null != it[e] && (null != it[e].parentLocale ? (it[e] = it[e].parentLocale, e === lt() && lt(e)) : null != it[e] && delete it[e]), it[e] }, f.locales = function () { return s(it) }, f.weekdaysShort = function (e, t, n) { return Sn(e, t, n, "weekdaysShort") }, f.normalizeUnits = V, f.relativeTimeRounding = function (e) { return void 0 === e ? qn : "function" == typeof e && (qn = e, !0) }, f.relativeTimeThreshold = function (e, t) { return void 0 !== Bn[e] && (void 0 === t ? Bn[e] : (Bn[e] = t, "s" === e && (Bn.ss = t - 1), !0)) }, f.calendarFormat = function (e, t) { var n = e.diff(t, "days", !0); return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse" }, f.prototype = pn, f.HTML5_FMT = { DATETIME_LOCAL: "YYYY-MM-DDTHH:mm", DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss", DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS", DATE: "YYYY-MM-DD", TIME: "HH:mm", TIME_SECONDS: "HH:mm:ss", TIME_MS: "HH:mm:ss.SSS", WEEK: "GGGG-[W]WW", MONTH: "YYYY-MM" }, f });
//jquery.min.js
!function (e, t) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) { if (!e.document) throw new Error("jQuery requires a window with a document"); return t(e) } : t(e) }("undefined" != typeof window ? window : this, function (C, e) { "use strict"; var t = [], r = Object.getPrototypeOf, s = t.slice, g = t.flat ? function (e) { return t.flat.call(e) } : function (e) { return t.concat.apply([], e) }, u = t.push, i = t.indexOf, n = {}, o = n.toString, v = n.hasOwnProperty, a = v.toString, l = a.call(Object), y = {}, m = function (e) { return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item }, x = function (e) { return null != e && e === e.window }, E = C.document, c = { type: !0, src: !0, nonce: !0, noModule: !0 }; function b(e, t, n) { var r, i, o = (n = n || E).createElement("script"); if (o.text = e, t) for (r in c) (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i); n.head.appendChild(o).parentNode.removeChild(o) } function w(e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e } var f = "3.6.0", S = function (e, t) { return new S.fn.init(e, t) }; function p(e) { var t = !!e && "length" in e && e.length, n = w(e); return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e) } S.fn = S.prototype = { jquery: f, constructor: S, length: 0, toArray: function () { return s.call(this) }, get: function (e) { return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e] }, pushStack: function (e) { var t = S.merge(this.constructor(), e); return t.prevObject = this, t }, each: function (e) { return S.each(this, e) }, map: function (n) { return this.pushStack(S.map(this, function (e, t) { return n.call(e, t, e) })) }, slice: function () { return this.pushStack(s.apply(this, arguments)) }, first: function () { return this.eq(0) }, last: function () { return this.eq(-1) }, even: function () { return this.pushStack(S.grep(this, function (e, t) { return (t + 1) % 2 })) }, odd: function () { return this.pushStack(S.grep(this, function (e, t) { return t % 2 })) }, eq: function (e) { var t = this.length, n = +e + (e < 0 ? t : 0); return this.pushStack(0 <= n && n < t ? [this[n]] : []) }, end: function () { return this.prevObject || this.constructor() }, push: u, sort: t.sort, splice: t.splice }, S.extend = S.fn.extend = function () { var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1; for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++)if (null != (e = arguments[s])) for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}, i = !1, a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r)); return a }, S.extend({ expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) { throw new Error(e) }, noop: function () { }, isPlainObject: function (e) { var t, n; return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l) }, isEmptyObject: function (e) { var t; for (t in e) return !1; return !0 }, globalEval: function (e, t, n) { b(e, { nonce: t && t.nonce }, n) }, each: function (e, t) { var n, r = 0; if (p(e)) { for (n = e.length; r < n; r++)if (!1 === t.call(e[r], r, e[r])) break } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break; return e }, makeArray: function (e, t) { var n = t || []; return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n }, inArray: function (e, t, n) { return null == t ? -1 : i.call(t, e, n) }, merge: function (e, t) { for (var n = +t.length, r = 0, i = e.length; r < n; r++)e[i++] = t[r]; return e.length = i, e }, grep: function (e, t, n) { for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)!t(e[i], i) !== a && r.push(e[i]); return r }, map: function (e, t, n) { var r, i, o = 0, a = []; if (p(e)) for (r = e.length; o < r; o++)null != (i = t(e[o], o, n)) && a.push(i); else for (o in e) null != (i = t(e[o], o, n)) && a.push(i); return g(a) }, guid: 1, support: y }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) { n["[object " + t + "]"] = t.toLowerCase() }); var d = function (n) { var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, S = "sizzle" + 1 * new Date, p = n.document, k = 0, r = 0, m = ue(), x = ue(), A = ue(), N = ue(), j = function (e, t) { return e === t && (l = !0), 0 }, D = {}.hasOwnProperty, t = [], q = t.pop, L = t.push, H = t.push, O = t.slice, P = function (e, t) { for (var n = 0, r = e.length; n < r; n++)if (e[n] === t) return n; return -1 }, R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]", F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)", B = new RegExp(M + "+", "g"), $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"), _ = new RegExp("^" + M + "*," + M + "*"), z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = new RegExp(M + "|>"), X = new RegExp(F), V = new RegExp("^" + I + "$"), G = { ID: new RegExp("^#(" + I + ")"), CLASS: new RegExp("^\\.(" + I + ")"), TAG: new RegExp("^(" + I + "|[*])"), ATTR: new RegExp("^" + W), PSEUDO: new RegExp("^" + F), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"), bool: new RegExp("^(?:" + R + ")$", "i"), needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i") }, Y = /HTML$/i, Q = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"), ne = function (e, t) { var n = "0x" + e.slice(1) - 65536; return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)) }, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function (e, t) { return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e }, oe = function () { T() }, ae = be(function (e) { return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase() }, { dir: "parentNode", next: "legend" }); try { H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType } catch (e) { H = { apply: t.length ? function (e, t) { L.apply(e, O.call(t)) } : function (e, t) { var n = e.length, r = 0; while (e[n++] = t[r++]); e.length = n - 1 } } } function se(t, e, n, r) { var i, o, a, s, u, l, c, f = e && e.ownerDocument, p = e ? e.nodeType : 9; if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n; if (!r && (T(e), e = e || C, E)) { if (11 !== p && (u = Z.exec(t))) if (i = u[1]) { if (9 === p) { if (!(a = e.getElementById(i))) return n; if (a.id === i) return n.push(a), n } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n } else { if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n; if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n } if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) { if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) { (f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)), o = (l = h(t)).length; while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]); c = l.join(",") } try { return H.apply(n, f.querySelectorAll(c)), n } catch (e) { N(t, !0) } finally { s === S && e.removeAttribute("id") } } } return g(t.replace($, "$1"), e, n, r) } function ue() { var r = []; return function e(t, n) { return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n } } function le(e) { return e[S] = !0, e } function ce(e) { var t = C.createElement("fieldset"); try { return !!e(t) } catch (e) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } } function fe(e, t) { var n = e.split("|"), r = n.length; while (r--) b.attrHandle[n[r]] = t } function pe(e, t) { var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex; if (r) return r; if (n) while (n = n.nextSibling) if (n === t) return -1; return e ? 1 : -1 } function de(t) { return function (e) { return "input" === e.nodeName.toLowerCase() && e.type === t } } function he(n) { return function (e) { var t = e.nodeName.toLowerCase(); return ("input" === t || "button" === t) && e.type === n } } function ge(t) { return function (e) { return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t } } function ve(a) { return le(function (o) { return o = +o, le(function (e, t) { var n, r = a([], e.length, o), i = r.length; while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n])) }) }) } function ye(e) { return e && "undefined" != typeof e.getElementsByTagName && e } for (e in d = se.support = {}, i = se.isXML = function (e) { var t = e && e.namespaceURI, n = e && (e.ownerDocument || e).documentElement; return !Y.test(t || n && n.nodeName || "HTML") }, T = se.setDocument = function (e) { var t, n, r = e ? e.ownerDocument || e : p; return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function (e) { return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length }), d.attributes = ce(function (e) { return e.className = "i", !e.getAttribute("className") }), d.getElementsByTagName = ce(function (e) { return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function (e) { return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length }), d.getById ? (b.filter.ID = function (e) { var t = e.replace(te, ne); return function (e) { return e.getAttribute("id") === t } }, b.find.ID = function (e, t) { if ("undefined" != typeof t.getElementById && E) { var n = t.getElementById(e); return n ? [n] : [] } }) : (b.filter.ID = function (e) { var n = e.replace(te, ne); return function (e) { var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id"); return t && t.value === n } }, b.find.ID = function (e, t) { if ("undefined" != typeof t.getElementById && E) { var n, r, i, o = t.getElementById(e); if (o) { if ((n = o.getAttributeNode("id")) && n.value === e) return [o]; i = t.getElementsByName(e), r = 0; while (o = i[r++]) if ((n = o.getAttributeNode("id")) && n.value === e) return [o] } return [] } }), b.find.TAG = d.getElementsByTagName ? function (e, t) { return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0 } : function (e, t) { var n, r = [], i = 0, o = t.getElementsByTagName(e); if ("*" === e) { while (n = o[i++]) 1 === n.nodeType && r.push(n); return r } return o }, b.find.CLASS = d.getElementsByClassName && function (e, t) { if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e) }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function (e) { var t; a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]") }), ce(function (e) { e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"; var t = C.createElement("input"); t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:") })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function (e) { d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F) }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function (e, t) { var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode; return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r))) } : function (e, t) { if (t) while (t = t.parentNode) if (t === e) return !0; return !1 }, j = t ? function (e, t) { if (e === t) return l = !0, 0; var n = !e.compareDocumentPosition - !t.compareDocumentPosition; return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1) } : function (e, t) { if (e === t) return l = !0, 0; var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t]; if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0; if (i === o) return pe(e, t); n = e; while (n = n.parentNode) a.unshift(n); n = t; while (n = n.parentNode) s.unshift(n); while (a[r] === s[r]) r++; return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0 }), C }, se.matches = function (e, t) { return se(e, null, null, t) }, se.matchesSelector = function (e, t) { if (T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try { var n = c.call(e, t); if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n } catch (e) { N(t, !0) } return 0 < se(t, C, null, [e]).length }, se.contains = function (e, t) { return (e.ownerDocument || e) != C && T(e), y(e, t) }, se.attr = function (e, t) { (e.ownerDocument || e) != C && T(e); var n = b.attrHandle[t.toLowerCase()], r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0; return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null }, se.escape = function (e) { return (e + "").replace(re, ie) }, se.error = function (e) { throw new Error("Syntax error, unrecognized expression: " + e) }, se.uniqueSort = function (e) { var t, n = [], r = 0, i = 0; if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(j), l) { while (t = e[i++]) t === e[i] && (r = n.push(i)); while (r--) e.splice(n[r], 1) } return u = null, e }, o = se.getText = function (e) { var t, n = "", r = 0, i = e.nodeType; if (i) { if (1 === i || 9 === i || 11 === i) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling)n += o(e) } else if (3 === i || 4 === i) return e.nodeValue } else while (t = e[r++]) n += o(t); return n }, (b = se.selectors = { cacheLength: 50, createPseudo: le, match: G, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function (e) { return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function (e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e }, PSEUDO: function (e) { var t, n = !e[6] && e[2]; return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } }, filter: { TAG: function (e) { var t = e.replace(te, ne).toLowerCase(); return "*" === e ? function () { return !0 } : function (e) { return e.nodeName && e.nodeName.toLowerCase() === t } }, CLASS: function (e) { var t = m[e + " "]; return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function (e) { return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "") }) }, ATTR: function (n, r, i) { return function (e) { var t = se.attr(e, n); return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-")) } }, CHILD: function (h, e, t, g, v) { var y = "nth" !== h.slice(0, 3), m = "last" !== h.slice(-4), x = "of-type" === e; return 1 === g && 0 === v ? function (e) { return !!e.parentNode } : function (e, t, n) { var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling", c = e.parentNode, f = x && e.nodeName.toLowerCase(), p = !n && !x, d = !1; if (c) { if (y) { while (l) { a = e; while (a = a[l]) if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1; u = l = "only" === h && !u && "nextSibling" } return !0 } if (u = [m ? c.firstChild : c.lastChild], m && p) { d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s]; while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) if (1 === a.nodeType && ++d && a === e) { i[h] = [k, s, d]; break } } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d) while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break; return (d -= v) === g || d % g == 0 && 0 <= d / g } } }, PSEUDO: function (e, o) { var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e); return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) { var n, r = a(e, o), i = r.length; while (i--) e[n = P(e, r[i])] = !(t[n] = r[i]) }) : function (e) { return a(e, 0, t) }) : a } }, pseudos: { not: le(function (e) { var r = [], i = [], s = f(e.replace($, "$1")); return s[S] ? le(function (e, t, n, r) { var i, o = s(e, null, r, []), a = e.length; while (a--) (i = o[a]) && (e[a] = !(t[a] = i)) }) : function (e, t, n) { return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop() } }), has: le(function (t) { return function (e) { return 0 < se(t, e).length } }), contains: le(function (t) { return t = t.replace(te, ne), function (e) { return -1 < (e.textContent || o(e)).indexOf(t) } }), lang: le(function (n) { return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(), function (e) { var t; do { if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-") } while ((e = e.parentNode) && 1 === e.nodeType); return !1 } }), target: function (e) { var t = n.location && n.location.hash; return t && t.slice(1) === e.id }, root: function (e) { return e === a }, focus: function (e) { return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) }, enabled: ge(!1), disabled: ge(!0), checked: function (e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected }, selected: function (e) { return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected }, empty: function (e) { for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeType < 6) return !1; return !0 }, parent: function (e) { return !b.pseudos.empty(e) }, header: function (e) { return J.test(e.nodeName) }, input: function (e) { return Q.test(e.nodeName) }, button: function (e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t }, text: function (e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()) }, first: ve(function () { return [0] }), last: ve(function (e, t) { return [t - 1] }), eq: ve(function (e, t, n) { return [n < 0 ? n + t : n] }), even: ve(function (e, t) { for (var n = 0; n < t; n += 2)e.push(n); return e }), odd: ve(function (e, t) { for (var n = 1; n < t; n += 2)e.push(n); return e }), lt: ve(function (e, t, n) { for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;)e.push(r); return e }), gt: ve(function (e, t, n) { for (var r = n < 0 ? n + t : n; ++r < t;)e.push(r); return e }) } }).pseudos.nth = b.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) b.pseudos[e] = de(e); for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e); function me() { } function xe(e) { for (var t = 0, n = e.length, r = ""; t < n; t++)r += e[t].value; return r } function be(s, e, t) { var u = e.dir, l = e.next, c = l || u, f = t && "parentNode" === c, p = r++; return e.first ? function (e, t, n) { while (e = e[u]) if (1 === e.nodeType || f) return s(e, t, n); return !1 } : function (e, t, n) { var r, i, o, a = [k, p]; if (n) { while (e = e[u]) if ((1 === e.nodeType || f) && s(e, t, n)) return !0 } else while (e = e[u]) if (1 === e.nodeType || f) if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e; else { if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2]; if ((i[c] = a)[2] = s(e, t, n)) return !0 } return !1 } } function we(i) { return 1 < i.length ? function (e, t, n) { var r = i.length; while (r--) if (!i[r](e, t, n)) return !1; return !0 } : i[0] } function Te(e, t, n, r, i) { for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s))); return a } function Ce(d, h, g, v, y, e) { return v && !v[S] && (v = Ce(v)), y && !y[S] && (y = Ce(y, e)), le(function (e, t, n, r) { var i, o, a, s = [], u = [], l = t.length, c = e || function (e, t, n) { for (var r = 0, i = t.length; r < i; r++)se(e, t[r], n); return n }(h || "*", n.nodeType ? [n] : n, []), f = !d || !e && h ? c : Te(c, s, d, n, r), p = g ? y || (e ? d : l || v) ? [] : t : f; if (g && g(f, p, n, r), v) { i = Te(p, u), v(i, [], n, r), o = i.length; while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a)) } if (e) { if (y || d) { if (y) { i = [], o = p.length; while (o--) (a = p[o]) && i.push(f[o] = a); y(null, p = [], i, r) } o = p.length; while (o--) (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a)) } } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p) }) } function Ee(e) { for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function (e) { return e === i }, a, !0), l = be(function (e) { return -1 < P(i, e) }, a, !0), c = [function (e, t, n) { var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n)); return i = null, r }]; s < r; s++)if (t = b.relative[e[s].type]) c = [be(we(c), t)]; else { if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) { for (n = ++s; n < r; n++)if (b.relative[e[n].type]) break; return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e)) } c.push(t) } return we(c) } return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = se.tokenize = function (e, t) { var n, r, i, o, a, s, u, l = x[e + " "]; if (l) return t ? 0 : l.slice(0); a = e, s = [], u = b.preFilter; while (a) { for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({ value: n, type: r[0].replace($, " ") }), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({ value: n, type: o, matches: r }), a = a.slice(n.length)); if (!n) break } return t ? a.length : a ? se.error(e) : x(e, s).slice(0) }, f = se.compile = function (e, t) { var n, v, y, m, x, r, i = [], o = [], a = A[e + " "]; if (!a) { t || (t = h(e)), n = t.length; while (n--) (a = Ee(t[n]))[S] ? i.push(a) : o.push(a); (a = A(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function (e, t, n, r, i) { var o, a, s, u = 0, l = "0", c = e && [], f = [], p = w, d = e || x && b.find.TAG("*", i), h = k += null == p ? 1 : Math.random() || .1, g = d.length; for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) { if (x && o) { a = 0, t || o.ownerDocument == C || (T(o), n = !E); while (s = v[a++]) if (s(o, t || C, n)) { r.push(o); break } i && (k = h) } m && ((o = !s && o) && u--, e && c.push(o)) } if (u += l, m && l !== u) { a = 0; while (s = y[a++]) s(c, f, t, n); if (e) { if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r)); f = Te(f) } H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r) } return i && (k = h, w = p), c }, m ? le(r) : r))).selector = e } return a }, g = se.select = function (e, t, n, r) { var i, o, a, s, u, l = "function" == typeof e && e, c = !r && h(e = l.selector || e); if (n = n || [], 1 === c.length) { if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) { if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n; l && (t = t.parentNode), e = e.slice(o.shift().value.length) } i = G.needsContext.test(e) ? 0 : o.length; while (i--) { if (a = o[i], b.relative[s = a.type]) break; if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) { if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n; break } } } return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n }, d.sortStable = S.split("").sort(j).join("") === S, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function (e) { return 1 & e.compareDocumentPosition(C.createElement("fieldset")) }), ce(function (e) { return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") }) || fe("type|href|height|width", function (e, t, n) { if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) }), d.attributes && ce(function (e) { return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }) || fe("value", function (e, t, n) { if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue }), ce(function (e) { return null == e.getAttribute("disabled") }) || fe(R, function (e, t, n) { var r; if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null }), se }(C); S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape; var h = function (e, t, n) { var r = [], i = void 0 !== n; while ((e = e[t]) && 9 !== e.nodeType) if (1 === e.nodeType) { if (i && S(e).is(n)) break; r.push(e) } return r }, T = function (e, t) { for (var n = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e); return n }, k = S.expr.match.needsContext; function A(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() } var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i; function j(e, n, r) { return m(n) ? S.grep(e, function (e, t) { return !!n.call(e, t, e) !== r }) : n.nodeType ? S.grep(e, function (e) { return e === n !== r }) : "string" != typeof n ? S.grep(e, function (e) { return -1 < i.call(n, e) !== r }) : S.filter(n, e, r) } S.filter = function (e, t, n) { var r = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function (e) { return 1 === e.nodeType })) }, S.fn.extend({ find: function (e) { var t, n, r = this.length, i = this; if ("string" != typeof e) return this.pushStack(S(e).filter(function () { for (t = 0; t < r; t++)if (S.contains(i[t], this)) return !0 })); for (n = this.pushStack([]), t = 0; t < r; t++)S.find(e, i[t], n); return 1 < r ? S.uniqueSort(n) : n }, filter: function (e) { return this.pushStack(j(this, e || [], !1)) }, not: function (e) { return this.pushStack(j(this, e || [], !0)) }, is: function (e) { return !!j(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length } }); var D, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/; (S.fn.init = function (e, t, n) { var r, i; if (!e) return this; if (n = n || D, "string" == typeof e) { if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e); if (r[1]) { if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && S.isPlainObject(t)) for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]); return this } return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this } return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this) }).prototype = S.fn, D = S(E); var L = /^(?:parents|prev(?:Until|All))/, H = { children: !0, contents: !0, next: !0, prev: !0 }; function O(e, t) { while ((e = e[t]) && 1 !== e.nodeType); return e } S.fn.extend({ has: function (e) { var t = S(e, this), n = t.length; return this.filter(function () { for (var e = 0; e < n; e++)if (S.contains(this, t[e])) return !0 }) }, closest: function (e, t) { var n, r = 0, i = this.length, o = [], a = "string" != typeof e && S(e); if (!k.test(e)) for (; r < i; r++)for (n = this[r]; n && n !== t; n = n.parentNode)if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) { o.push(n); break } return this.pushStack(1 < o.length ? S.uniqueSort(o) : o) }, index: function (e) { return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function (e, t) { return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t)))) }, addBack: function (e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) } }), S.each({ parent: function (e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function (e) { return h(e, "parentNode") }, parentsUntil: function (e, t, n) { return h(e, "parentNode", n) }, next: function (e) { return O(e, "nextSibling") }, prev: function (e) { return O(e, "previousSibling") }, nextAll: function (e) { return h(e, "nextSibling") }, prevAll: function (e) { return h(e, "previousSibling") }, nextUntil: function (e, t, n) { return h(e, "nextSibling", n) }, prevUntil: function (e, t, n) { return h(e, "previousSibling", n) }, siblings: function (e) { return T((e.parentNode || {}).firstChild, e) }, children: function (e) { return T(e.firstChild) }, contents: function (e) { return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes)) } }, function (r, i) { S.fn[r] = function (e, t) { var n = S.map(this, i, e); return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n) } }); var P = /[^\x20\t\r\n\f]+/g; function R(e) { return e } function M(e) { throw e } function I(e, t, n, r) { var i; try { e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r)) } catch (e) { n.apply(void 0, [e]) } } S.Callbacks = function (r) { var e, n; r = "string" == typeof r ? (e = r, n = {}, S.each(e.match(P) || [], function (e, t) { n[t] = !0 }), n) : S.extend({}, r); var i, t, o, a, s = [], u = [], l = -1, c = function () { for (a = a || r.once, o = i = !0; u.length; l = -1) { t = u.shift(); while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1) } r.memory || (t = !1), i = !1, a && (s = t ? [] : "") }, f = { add: function () { return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) { S.each(e, function (e, t) { m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t) }) }(arguments), t && !i && c()), this }, remove: function () { return S.each(arguments, function (e, t) { var n; while (-1 < (n = S.inArray(t, s, n))) s.splice(n, 1), n <= l && l-- }), this }, has: function (e) { return e ? -1 < S.inArray(e, s) : 0 < s.length }, empty: function () { return s && (s = []), this }, disable: function () { return a = u = [], s = t = "", this }, disabled: function () { return !s }, lock: function () { return a = u = [], t || i || (s = t = ""), this }, locked: function () { return !!a }, fireWith: function (e, t) { return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this }, fire: function () { return f.fireWith(this, arguments), this }, fired: function () { return !!o } }; return f }, S.extend({ Deferred: function (e) { var o = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]], i = "pending", a = { state: function () { return i }, always: function () { return s.done(arguments).fail(arguments), this }, "catch": function (e) { return a.then(null, e) }, pipe: function () { var i = arguments; return S.Deferred(function (r) { S.each(o, function (e, t) { var n = m(i[t[4]]) && i[t[4]]; s[t[1]](function () { var e = n && n.apply(this, arguments); e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments) }) }), i = null }).promise() }, then: function (t, n, r) { var u = 0; function l(i, o, a, s) { return function () { var n = this, r = arguments, e = function () { var e, t; if (!(i < u)) { if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution"); t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r)) } }, t = s ? e : function () { try { e() } catch (e) { S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r)) } }; i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t)) } } return S.Deferred(function (e) { o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M)) }).promise() }, promise: function (e) { return null != e ? S.extend(e, a) : a } }, s = {}; return S.each(o, function (e, t) { var n = t[2], r = t[5]; a[t[1]] = n.add, r && n.add(function () { i = r }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () { return s[t[0] + "With"](this === s ? void 0 : this, arguments), this }, s[t[0] + "With"] = n.fireWith }), a.promise(s), e && e.call(s, s), s }, when: function (e) { var n = arguments.length, t = n, r = Array(t), i = s.call(arguments), o = S.Deferred(), a = function (t) { return function (e) { r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i) } }; if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then(); while (t--) I(i[t], a(t), o.reject); return o.promise() } }); var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/; S.Deferred.exceptionHook = function (e, t) { C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t) }, S.readyException = function (e) { C.setTimeout(function () { throw e }) }; var F = S.Deferred(); function B() { E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready() } S.fn.ready = function (e) { return F.then(e)["catch"](function (e) { S.readyException(e) }), this }, S.extend({ isReady: !1, readyWait: 1, ready: function (e) { (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S]) } }), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B)); var $ = function (e, t, n, r, i, o, a) { var s = 0, u = e.length, l = null == n; if ("object" === w(n)) for (s in i = !0, n) $(e, t, s, n[s], !0, o, a); else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) { return l.call(S(e), n) })), t)) for (; s < u; s++)t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n))); return i ? e : l ? t.call(e) : u ? t(e[0], n) : o }, _ = /^-ms-/, z = /-([a-z])/g; function U(e, t) { return t.toUpperCase() } function X(e) { return e.replace(_, "ms-").replace(z, U) } var V = function (e) { return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType }; function G() { this.expando = S.expando + G.uid++ } G.uid = 1, G.prototype = { cache: function (e) { var t = e[this.expando]; return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t }, set: function (e, t, n) { var r, i = this.cache(e); if ("string" == typeof t) i[X(t)] = n; else for (r in t) i[X(r)] = t[r]; return i }, get: function (e, t) { return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)] }, access: function (e, t, n) { return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t) }, remove: function (e, t) { var n, r = e[this.expando]; if (void 0 !== r) { if (void 0 !== t) { n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length; while (n--) delete r[t[n]] } (void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]) } }, hasData: function (e) { var t = e[this.expando]; return void 0 !== t && !S.isEmptyObject(t) } }; var Y = new G, Q = new G, J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, K = /[A-Z]/g; function Z(e, t, n) { var r, i; if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) { try { n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i) } catch (e) { } Q.set(e, t, n) } else n = void 0; return n } S.extend({ hasData: function (e) { return Q.hasData(e) || Y.hasData(e) }, data: function (e, t, n) { return Q.access(e, t, n) }, removeData: function (e, t) { Q.remove(e, t) }, _data: function (e, t, n) { return Y.access(e, t, n) }, _removeData: function (e, t) { Y.remove(e, t) } }), S.fn.extend({ data: function (n, e) { var t, r, i, o = this[0], a = o && o.attributes; if (void 0 === n) { if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) { t = a.length; while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r])); Y.set(o, "hasDataAttrs", !0) } return i } return "object" == typeof n ? this.each(function () { Q.set(this, n) }) : $(this, function (e) { var t; if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0; this.each(function () { Q.set(this, n, e) }) }, null, e, 1 < arguments.length, null, !0) }, removeData: function (e) { return this.each(function () { Q.remove(this, e) }) } }), S.extend({ queue: function (e, t, n) { var r; if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)), r || [] }, dequeue: function (e, t) { t = t || "fx"; var n = S.queue(e, t), r = n.length, i = n.shift(), o = S._queueHooks(e, t); "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () { S.dequeue(e, t) }, o)), !r && o && o.empty.fire() }, _queueHooks: function (e, t) { var n = t + "queueHooks"; return Y.get(e, n) || Y.access(e, n, { empty: S.Callbacks("once memory").add(function () { Y.remove(e, [t + "queue", n]) }) }) } }), S.fn.extend({ queue: function (t, n) { var e = 2; return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function () { var e = S.queue(this, t, n); S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t) }) }, dequeue: function (e) { return this.each(function () { S.dequeue(this, e) }) }, clearQueue: function (e) { return this.queue(e || "fx", []) }, promise: function (e, t) { var n, r = 1, i = S.Deferred(), o = this, a = this.length, s = function () { --r || i.resolveWith(o, [o]) }; "string" != typeof e && (t = e, e = void 0), e = e || "fx"; while (a--) (n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s)); return s(), i.promise(t) } }); var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"), ne = ["Top", "Right", "Bottom", "Left"], re = E.documentElement, ie = function (e) { return S.contains(e.ownerDocument, e) }, oe = { composed: !0 }; re.getRootNode && (ie = function (e) { return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument }); var ae = function (e, t) { return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display") }; function se(e, t, n, r) { var i, o, a = 20, s = r ? function () { return r.cur() } : function () { return S.css(e, t, "") }, u = s(), l = n && n[3] || (S.cssNumber[t] ? "" : "px"), c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t)); if (c && c[3] !== l) { u /= 2, l = l || c[3], c = +u || 1; while (a--) S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o; c *= 2, S.style(e, t, c + l), n = n || [] } return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i } var ue = {}; function le(e, t) { for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = S.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n))); for (c = 0; c < f; c++)null != l[c] && (e[c].style.display = l[c]); return e } S.fn.extend({ show: function () { return le(this, !0) }, hide: function () { return le(this) }, toggle: function (e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () { ae(this) ? S(this).show() : S(this).hide() }) } }); var ce, fe, pe = /^(?:checkbox|radio)$/i, de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, he = /^$|^module$|\/(?:java|ecma)script/i; ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", y.option = !!ce.lastChild; var ge = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] }; function ve(e, t) { var n; return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? S.merge([e], n) : n } function ye(e, t) { for (var n = 0, r = e.length; n < r; n++)Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval")) } ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]); var me = /<|&#?\w+;/; function xe(e, t, n, r, i) { for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)if ((o = e[d]) || 0 === o) if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o); else if (me.test(o)) { a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], c = u[0]; while (c--) a = a.lastChild; S.merge(p, a.childNodes), (a = f.firstChild).textContent = "" } else p.push(t.createTextNode(o)); f.textContent = "", d = 0; while (o = p[d++]) if (r && -1 < S.inArray(o, r)) i && i.push(o); else if (l = ie(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) { c = 0; while (o = a[c++]) he.test(o.type || "") && n.push(o) } return f } var be = /^([^.]*)(?:\.(.+)|)/; function we() { return !0 } function Te() { return !1 } function Ce(e, t) { return e === function () { try { return E.activeElement } catch (e) { } }() == ("focus" === t) } function Ee(e, t, n, r, i, o) { var a, s; if ("object" == typeof t) { for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ee(e, s, n, r, t[s], o); return e } if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Te; else if (!i) return e; return 1 === o && (a = i, (i = function (e) { return S().off(e), a.apply(this, arguments) }).guid = a.guid || (a.guid = S.guid++)), e.each(function () { S.event.add(this, t, i, r, n) }) } function Se(e, i, o) { o ? (Y.set(e, i, !1), S.event.add(e, i, { namespace: !1, handler: function (e) { var t, n, r = Y.get(this, i); if (1 & e.isTrigger && this[i]) { if (r.length) (S.event.special[i] || {}).delegateType && e.stopPropagation(); else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n && n.value } else r.length && (Y.set(this, i, { value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this) }), e.stopImmediatePropagation()) } })) : void 0 === Y.get(e, i) && S.event.add(e, i, we) } S.event = { global: {}, add: function (t, e, n, r, i) { var o, a, s, u, l, c, f, p, d, h, g, v = Y.get(t); if (V(t)) { n.handler && (n = (o = n).handler, i = o.selector), i && S.find.matchesSelector(re, i), n.guid || (n.guid = S.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function (e) { return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0 }), l = (e = (e || "").match(P) || [""]).length; while (l--) d = g = (s = be.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = S.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = S.event.special[d] || {}, c = S.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && S.expr.match.needsContext.test(i), namespace: h.join(".") }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[d] = !0) } }, remove: function (e, t, n, r, i) { var o, a, s, u, l, c, f, p, d, h, g, v = Y.hasData(e) && Y.get(e); if (v && (u = v.events)) { l = (t = (t || "").match(P) || [""]).length; while (l--) if (d = g = (s = be.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) { f = S.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c)); a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle), delete u[d]) } else for (d in u) S.event.remove(e, d + t[l], n, r, !0); S.isEmptyObject(u) && Y.remove(e, "handle events") } }, dispatch: function (e) { var t, n, r, i, o, a, s = new Array(arguments.length), u = S.event.fix(e), l = (Y.get(this, "events") || Object.create(null))[u.type] || [], c = S.event.special[u.type] || {}; for (s[0] = u, t = 1; t < arguments.length; t++)s[t] = arguments[t]; if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) { a = S.event.handlers.call(this, u, l), t = 0; while ((i = a[t++]) && !u.isPropagationStopped()) { u.currentTarget = i.elem, n = 0; while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation())) } return c.postDispatch && c.postDispatch.call(this, u), u.result } }, handlers: function (e, t) { var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target; if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this)if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) { for (o = [], a = {}, n = 0; n < u; n++)void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r); o.length && s.push({ elem: l, handlers: o }) } return l = this, u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s }, addProp: function (t, e) { Object.defineProperty(S.Event.prototype, t, { enumerable: !0, configurable: !0, get: m(e) ? function () { if (this.originalEvent) return e(this.originalEvent) } : function () { if (this.originalEvent) return this.originalEvent[t] }, set: function (e) { Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) } }) }, fix: function (e) { return e[S.expando] ? e : new S.Event(e) }, special: { load: { noBubble: !0 }, click: { setup: function (e) { var t = this || e; return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click", we), !1 }, trigger: function (e) { var t = this || e; return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click"), !0 }, _default: function (e) { var t = e.target; return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a") } }, beforeunload: { postDispatch: function (e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result) } } } }, S.removeEvent = function (e, t, n) { e.removeEventListener && e.removeEventListener(t, n) }, S.Event = function (e, t) { if (!(this instanceof S.Event)) return new S.Event(e, t); e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : Te, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0 }, S.Event.prototype = { constructor: S.Event, isDefaultPrevented: Te, isPropagationStopped: Te, isImmediatePropagationStopped: Te, isSimulated: !1, preventDefault: function () { var e = this.originalEvent; this.isDefaultPrevented = we, e && !this.isSimulated && e.preventDefault() }, stopPropagation: function () { var e = this.originalEvent; this.isPropagationStopped = we, e && !this.isSimulated && e.stopPropagation() }, stopImmediatePropagation: function () { var e = this.originalEvent; this.isImmediatePropagationStopped = we, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation() } }, S.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, code: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: !0 }, S.event.addProp), S.each({ focus: "focusin", blur: "focusout" }, function (e, t) { S.event.special[e] = { setup: function () { return Se(this, e, Ce), !1 }, trigger: function () { return Se(this, e), !0 }, _default: function () { return !0 }, delegateType: t } }), S.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, i) { S.event.special[e] = { delegateType: i, bindType: i, handle: function (e) { var t, n = e.relatedTarget, r = e.handleObj; return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t } } }), S.fn.extend({ on: function (e, t, n, r) { return Ee(this, e, t, n, r) }, one: function (e, t, n, r) { return Ee(this, e, t, n, r, 1) }, off: function (e, t, n) { var r, i; if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this; if ("object" == typeof e) { for (i in e) this.off(i, t, e[i]); return this } return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Te), this.each(function () { S.event.remove(this, e, n, t) }) } }); var ke = /<script|<style|<link/i, Ae = /checked\s*(?:[^=]|=\s*.checked.)/i, Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g; function je(e, t) { return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e } function De(e) { return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e } function qe(e) { return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e } function Le(e, t) { var n, r, i, o, a, s; if (1 === t.nodeType) { if (Y.hasData(e) && (s = Y.get(e).events)) for (i in Y.remove(t, "handle events"), s) for (n = 0, r = s[i].length; n < r; n++)S.event.add(t, i, s[i][n]); Q.hasData(e) && (o = Q.access(e), a = S.extend({}, o), Q.set(t, a)) } } function He(n, r, i, o) { r = g(r); var e, t, a, s, u, l, c = 0, f = n.length, p = f - 1, d = r[0], h = m(d); if (h || 1 < f && "string" == typeof d && !y.checkClone && Ae.test(d)) return n.each(function (e) { var t = n.eq(e); h && (r[0] = d.call(this, e, t.html())), He(t, r, i, o) }); if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) { for (s = (a = S.map(ve(e, "script"), De)).length; c < f; c++)u = e, c !== p && (u = S.clone(u, !0, !0), s && S.merge(a, ve(u, "script"))), i.call(n[c], u, c); if (s) for (l = a[a.length - 1].ownerDocument, S.map(a, qe), c = 0; c < s; c++)u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, { nonce: u.nonce || u.getAttribute("nonce") }, l) : b(u.textContent.replace(Ne, ""), u, l)) } return n } function Oe(e, t, n) { for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++)n || 1 !== r.nodeType || S.cleanData(ve(r)), r.parentNode && (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r)); return e } S.extend({ htmlPrefilter: function (e) { return e }, clone: function (e, t, n) { var r, i, o, a, s, u, l, c = e.cloneNode(!0), f = ie(e); if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e))) for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++)s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue); if (t) if (n) for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++)Le(o[r], a[r]); else Le(e, c); return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c }, cleanData: function (e) { for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)if (V(n)) { if (t = n[Y.expando]) { if (t.events) for (r in t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle); n[Y.expando] = void 0 } n[Q.expando] && (n[Q.expando] = void 0) } } }), S.fn.extend({ detach: function (e) { return Oe(this, e, !0) }, remove: function (e) { return Oe(this, e) }, text: function (e) { return $(this, function (e) { return void 0 === e ? S.text(this) : this.empty().each(function () { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e) }) }, null, e, arguments.length) }, append: function () { return He(this, arguments, function (e) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e) }) }, prepend: function () { return He(this, arguments, function (e) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var t = je(this, e); t.insertBefore(e, t.firstChild) } }) }, before: function () { return He(this, arguments, function (e) { this.parentNode && this.parentNode.insertBefore(e, this) }) }, after: function () { return He(this, arguments, function (e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) }, empty: function () { for (var e, t = 0; null != (e = this[t]); t++)1 === e.nodeType && (S.cleanData(ve(e, !1)), e.textContent = ""); return this }, clone: function (e, t) { return e = null != e && e, t = null == t ? e : t, this.map(function () { return S.clone(this, e, t) }) }, html: function (e) { return $(this, function (e) { var t = this[0] || {}, n = 0, r = this.length; if (void 0 === e && 1 === t.nodeType) return t.innerHTML; if ("string" == typeof e && !ke.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) { e = S.htmlPrefilter(e); try { for (; n < r; n++)1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)), t.innerHTML = e); t = 0 } catch (e) { } } t && this.empty().append(e) }, null, e, arguments.length) }, replaceWith: function () { var n = []; return He(this, arguments, function (e) { var t = this.parentNode; S.inArray(this, n) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this)) }, n) } }), S.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, a) { S.fn[e] = function (e) { for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++)t = o === i ? this : this.clone(!0), S(r[o])[a](t), u.apply(n, t.get()); return this.pushStack(n) } }); var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"), Re = function (e) { var t = e.ownerDocument.defaultView; return t && t.opener || (t = C), t.getComputedStyle(e) }, Me = function (e, t, n) { var r, i, o = {}; for (i in t) o[i] = e.style[i], e.style[i] = t[i]; for (i in r = n.call(e), t) e.style[i] = o[i]; return r }, Ie = new RegExp(ne.join("|"), "i"); function We(e, t, n) { var r, i, o, a, s = e.style; return (n = n || Re(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)), !y.pixelBoxStyles() && Pe.test(a) && Ie.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a } function Fe(e, t) { return { get: function () { if (!e()) return (this.get = t).apply(this, arguments); delete this.get } } } !function () { function e() { if (l) { u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l); var e = C.getComputedStyle(l); n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null } } function t(e) { return Math.round(parseFloat(e)) } var n, r, i, o, a, s, u = E.createElement("div"), l = E.createElement("div"); l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(y, { boxSizingReliable: function () { return e(), r }, pixelBoxStyles: function () { return e(), o }, pixelPosition: function () { return e(), n }, reliableMarginLeft: function () { return e(), s }, scrollboxSize: function () { return e(), i }, reliableTrDimensions: function () { var e, t, n, r; return null == a && (e = E.createElement("table"), t = E.createElement("tr"), n = E.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight, re.removeChild(e)), a } })) }(); var Be = ["Webkit", "Moz", "ms"], $e = E.createElement("div").style, _e = {}; function ze(e) { var t = S.cssProps[e] || _e[e]; return t || (e in $e ? e : _e[e] = function (e) { var t = e[0].toUpperCase() + e.slice(1), n = Be.length; while (n--) if ((e = Be[n] + t) in $e) return e }(e) || e) } var Ue = /^(none|table(?!-c[ea]).+)/, Xe = /^--/, Ve = { position: "absolute", visibility: "hidden", display: "block" }, Ge = { letterSpacing: "0", fontWeight: "400" }; function Ye(e, t, n) { var r = te.exec(t); return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t } function Qe(e, t, n, r, i, o) { var a = "width" === t ? 1 : 0, s = 0, u = 0; if (n === (r ? "border" : "content")) return 0; for (; a < 4; a += 2)"margin" === n && (u += S.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i)); return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u } function Je(e, t, n) { var r = Re(e), i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r), o = i, a = We(e, t, r), s = "offset" + t[0].toUpperCase() + t.slice(1); if (Pe.test(a)) { if (!n) return a; a = "auto" } return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Qe(e, t, n || (i ? "border" : "content"), o, r, a) + "px" } function Ke(e, t, n, r, i) { return new Ke.prototype.init(e, t, n, r, i) } S.extend({ cssHooks: { opacity: { get: function (e, t) { if (t) { var n = We(e, "opacity"); return "" === n ? "1" : n } } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, gridArea: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnStart: !0, gridRow: !0, gridRowEnd: !0, gridRowStart: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: {}, style: function (e, t, n, r) { if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) { var i, o, a, s = X(t), u = Xe.test(t), l = e.style; if (u || (t = ze(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t]; "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n)) } }, css: function (e, t, n, r) { var i, o, a, s = X(t); return Xe.test(t) || (t = ze(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = We(e, t, r)), "normal" === i && t in Ge && (i = Ge[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i } }), S.each(["height", "width"], function (e, u) { S.cssHooks[u] = { get: function (e, t, n) { if (t) return !Ue.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Je(e, u, n) : Me(e, Ve, function () { return Je(e, u, n) }) }, set: function (e, t, n) { var r, i = Re(e), o = !y.scrollboxSize() && "absolute" === i.position, a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i), s = n ? Qe(e, u, n, a, i) : 0; return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Qe(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = S.css(e, u)), Ye(0, t, s) } } }), S.cssHooks.marginLeft = Fe(y.reliableMarginLeft, function (e, t) { if (t) return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - Me(e, { marginLeft: 0 }, function () { return e.getBoundingClientRect().left })) + "px" }), S.each({ margin: "", padding: "", border: "Width" }, function (i, o) { S.cssHooks[i + o] = { expand: function (e) { for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)n[i + ne[t] + o] = r[t] || r[t - 2] || r[0]; return n } }, "margin" !== i && (S.cssHooks[i + o].set = Ye) }), S.fn.extend({ css: function (e, t) { return $(this, function (e, t, n) { var r, i, o = {}, a = 0; if (Array.isArray(t)) { for (r = Re(e), i = t.length; a < i; a++)o[t[a]] = S.css(e, t[a], !1, r); return o } return void 0 !== n ? S.style(e, t, n) : S.css(e, t) }, e, t, 1 < arguments.length) } }), ((S.Tween = Ke).prototype = { constructor: Ke, init: function (e, t, n, r, i, o) { this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? "" : "px") }, cur: function () { var e = Ke.propHooks[this.prop]; return e && e.get ? e.get(this) : Ke.propHooks._default.get(this) }, run: function (e) { var t, n = Ke.propHooks[this.prop]; return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ke.propHooks._default.set(this), this } }).init.prototype = Ke.prototype, (Ke.propHooks = { _default: { get: function (e) { var t; return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 }, set: function (e) { S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[ze(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit) } } }).scrollTop = Ke.propHooks.scrollLeft = { set: function (e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, S.easing = { linear: function (e) { return e }, swing: function (e) { return .5 - Math.cos(e * Math.PI) / 2 }, _default: "swing" }, S.fx = Ke.prototype.init, S.fx.step = {}; var Ze, et, tt, nt, rt = /^(?:toggle|show|hide)$/, it = /queueHooks$/; function ot() { et && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(ot) : C.setTimeout(ot, S.fx.interval), S.fx.tick()) } function at() { return C.setTimeout(function () { Ze = void 0 }), Ze = Date.now() } function st(e, t) { var n, r = 0, i = { height: e }; for (t = t ? 1 : 0; r < 4; r += 2 - t)i["margin" + (n = ne[r])] = i["padding" + n] = e; return t && (i.opacity = i.width = e), i } function ut(e, t, n) { for (var r, i = (lt.tweeners[t] || []).concat(lt.tweeners["*"]), o = 0, a = i.length; o < a; o++)if (r = i[o].call(n, t, e)) return r } function lt(o, e, t) { var n, a, r = 0, i = lt.prefilters.length, s = S.Deferred().always(function () { delete u.elem }), u = function () { if (a) return !1; for (var e = Ze || at(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++)l.tweens[r].run(n); return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1) }, l = s.promise({ elem: o, props: S.extend({}, e), opts: S.extend(!0, { specialEasing: {}, easing: S.easing._default }, t), originalProperties: e, originalOptions: t, startTime: Ze || at(), duration: t.duration, tweens: [], createTween: function (e, t) { var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing); return l.tweens.push(n), n }, stop: function (e) { var t = 0, n = e ? l.tweens.length : 0; if (a) return this; for (a = !0; t < n; t++)l.tweens[t].run(1); return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this } }), c = l.props; for (!function (e, t) { var n, r, i, o, a; for (n in e) if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = S.cssHooks[r]) && "expand" in a) for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i); else t[r] = i }(c, l.opts.specialEasing); r < i; r++)if (n = lt.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n; return S.map(c, ut, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(u, { elem: o, anim: l, queue: l.opts.queue })), l } S.Animation = S.extend(lt, { tweeners: { "*": [function (e, t) { var n = this.createTween(e, t); return se(n.elem, e, te.exec(t), n), n }] }, tweener: function (e, t) { m(e) ? (t = e, e = ["*"]) : e = e.match(P); for (var n, r = 0, i = e.length; r < i; r++)n = e[r], lt.tweeners[n] = lt.tweeners[n] || [], lt.tweeners[n].unshift(t) }, prefilters: [function (e, t, n) { var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t, p = this, d = {}, h = e.style, g = e.nodeType && ae(e), v = Y.get(e, "fxshow"); for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () { a.unqueued || s() }), a.unqueued++, p.always(function () { p.always(function () { a.unqueued--, S.queue(e, "fx").length || a.empty.fire() }) })), t) if (i = t[r], rt.test(i)) { if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) { if ("show" !== i || !v || void 0 === v[r]) continue; g = !0 } d[r] = v && v[r] || S.style(e, r) } if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Y.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = S.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function () { h.display = l }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () { h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2] })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", { display: l }), o && (v.hidden = !g), g && le([e], !0), p.done(function () { for (r in g || le([e]), Y.remove(e, "fxshow"), d) S.style(e, r, d[r]) })), u = ut(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0)) }], prefilter: function (e, t) { t ? lt.prefilters.unshift(e) : lt.prefilters.push(e) } }), S.speed = function (e, t, n) { var r = e && "object" == typeof e ? S.extend({}, e) : { complete: n || !n && t || m(e) && e, duration: e, easing: n && t || t && !m(t) && t }; return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () { m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue) }, r }, S.fn.extend({ fadeTo: function (e, t, n, r) { return this.filter(ae).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r) }, animate: function (t, e, n, r) { var i = S.isEmptyObject(t), o = S.speed(e, n, r), a = function () { var e = lt(this, S.extend({}, t), o); (i || Y.get(this, "finish")) && e.stop(!0) }; return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a) }, stop: function (i, e, o) { var a = function (e) { var t = e.stop; delete e.stop, t(o) }; return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function () { var e = !0, t = null != i && i + "queueHooks", n = S.timers, r = Y.get(this); if (t) r[t] && r[t].stop && a(r[t]); else for (t in r) r[t] && r[t].stop && it.test(t) && a(r[t]); for (t = n.length; t--;)n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1)); !e && o || S.dequeue(this, i) }) }, finish: function (a) { return !1 !== a && (a = a || "fx"), this.each(function () { var e, t = Y.get(this), n = t[a + "queue"], r = t[a + "queueHooks"], i = S.timers, o = n ? n.length : 0; for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;)i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1)); for (e = 0; e < o; e++)n[e] && n[e].finish && n[e].finish.call(this); delete t.finish }) } }), S.each(["toggle", "show", "hide"], function (e, r) { var i = S.fn[r]; S.fn[r] = function (e, t, n) { return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(st(r, !0), e, t, n) } }), S.each({ slideDown: st("show"), slideUp: st("hide"), slideToggle: st("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, r) { S.fn[e] = function (e, t, n) { return this.animate(r, e, t, n) } }), S.timers = [], S.fx.tick = function () { var e, t = 0, n = S.timers; for (Ze = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1); n.length || S.fx.stop(), Ze = void 0 }, S.fx.timer = function (e) { S.timers.push(e), S.fx.start() }, S.fx.interval = 13, S.fx.start = function () { et || (et = !0, ot()) }, S.fx.stop = function () { et = null }, S.fx.speeds = { slow: 600, fast: 200, _default: 400 }, S.fn.delay = function (r, e) { return r = S.fx && S.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) { var n = C.setTimeout(e, r); t.stop = function () { C.clearTimeout(n) } }) }, tt = E.createElement("input"), nt = E.createElement("select").appendChild(E.createElement("option")), tt.type = "checkbox", y.checkOn = "" !== tt.value, y.optSelected = nt.selected, (tt = E.createElement("input")).value = "t", tt.type = "radio", y.radioValue = "t" === tt.value; var ct, ft = S.expr.attrHandle; S.fn.extend({ attr: function (e, t) { return $(this, S.attr, e, t, 1 < arguments.length) }, removeAttr: function (e) { return this.each(function () { S.removeAttr(this, e) }) } }), S.extend({ attr: function (e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? ct : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r) }, attrHooks: { type: { set: function (e, t) { if (!y.radioValue && "radio" === t && A(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } }, removeAttr: function (e, t) { var n, r = 0, i = t && t.match(P); if (i && 1 === e.nodeType) while (n = i[r++]) e.removeAttribute(n) } }), ct = { set: function (e, t, n) { return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n } }, S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) { var a = ft[t] || S.find.attr; ft[t] = function (e, t, n) { var r, i, o = t.toLowerCase(); return n || (i = ft[o], ft[o] = r, r = null != a(e, t, n) ? o : null, ft[o] = i), r } }); var pt = /^(?:input|select|textarea|button)$/i, dt = /^(?:a|area)$/i; function ht(e) { return (e.match(P) || []).join(" ") } function gt(e) { return e.getAttribute && e.getAttribute("class") || "" } function vt(e) { return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || [] } S.fn.extend({ prop: function (e, t) { return $(this, S.prop, e, t, 1 < arguments.length) }, removeProp: function (e) { return this.each(function () { delete this[S.propFix[e] || e] }) } }), S.extend({ prop: function (e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t] }, propHooks: { tabIndex: { get: function (e) { var t = S.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : pt.test(e.nodeName) || dt.test(e.nodeName) && e.href ? 0 : -1 } } }, propFix: { "for": "htmlFor", "class": "className" } }), y.optSelected || (S.propHooks.selected = { get: function (e) { var t = e.parentNode; return t && t.parentNode && t.parentNode.selectedIndex, null }, set: function (e) { var t = e.parentNode; t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex) } }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () { S.propFix[this.toLowerCase()] = this }), S.fn.extend({ addClass: function (t) { var e, n, r, i, o, a, s, u = 0; if (m(t)) return this.each(function (e) { S(this).addClass(t.call(this, e, gt(this))) }); if ((e = vt(t)).length) while (n = this[u++]) if (i = gt(n), r = 1 === n.nodeType && " " + ht(i) + " ") { a = 0; while (o = e[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " "); i !== (s = ht(r)) && n.setAttribute("class", s) } return this }, removeClass: function (t) { var e, n, r, i, o, a, s, u = 0; if (m(t)) return this.each(function (e) { S(this).removeClass(t.call(this, e, gt(this))) }); if (!arguments.length) return this.attr("class", ""); if ((e = vt(t)).length) while (n = this[u++]) if (i = gt(n), r = 1 === n.nodeType && " " + ht(i) + " ") { a = 0; while (o = e[a++]) while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " + o + " ", " "); i !== (s = ht(r)) && n.setAttribute("class", s) } return this }, toggleClass: function (i, t) { var o = typeof i, a = "string" === o || Array.isArray(i); return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function (e) { S(this).toggleClass(i.call(this, e, gt(this), t), t) }) : this.each(function () { var e, t, n, r; if (a) { t = 0, n = S(this), r = vt(i); while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e) } else void 0 !== i && "boolean" !== o || ((e = gt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || "")) }) }, hasClass: function (e) { var t, n, r = 0; t = " " + e + " "; while (n = this[r++]) if (1 === n.nodeType && -1 < (" " + ht(gt(n)) + " ").indexOf(t)) return !0; return !1 } }); var yt = /\r/g; S.fn.extend({ val: function (n) { var r, e, i, t = this[0]; return arguments.length ? (i = m(n), this.each(function (e) { var t; 1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function (e) { return null == e ? "" : e + "" })), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t)) })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(yt, "") : null == e ? "" : e : void 0 } }), S.extend({ valHooks: { option: { get: function (e) { var t = S.find.attr(e, "value"); return null != t ? t : ht(S.text(e)) } }, select: { get: function (e) { var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length; for (r = o < 0 ? u : a ? o : 0; r < u; r++)if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) { if (t = S(n).val(), a) return t; s.push(t) } return s }, set: function (e, t) { var n, r, i = e.options, o = S.makeArray(t), a = i.length; while (a--) ((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0); return n || (e.selectedIndex = -1), o } } } }), S.each(["radio", "checkbox"], function () { S.valHooks[this] = { set: function (e, t) { if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t) } }, y.checkOn || (S.valHooks[this].get = function (e) { return null === e.getAttribute("value") ? "on" : e.value }) }), y.focusin = "onfocusin" in C; var mt = /^(?:focusinfocus|focusoutblur)$/, xt = function (e) { e.stopPropagation() }; S.extend(S.event, { trigger: function (e, t, n, r) { var i, o, a, s, u, l, c, f, p = [n || E], d = v.call(e, "type") ? e.type : e, h = v.call(e, "namespace") ? e.namespace.split(".") : []; if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !mt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[S.expando] ? e : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) { if (!r && !c.noBubble && !x(n)) { for (s = c.delegateType || d, mt.test(s + d) || (o = o.parentNode); o; o = o.parentNode)p.push(o), a = o; a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C) } i = 0; while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault()); return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), S.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, xt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, xt), S.event.triggered = void 0, a && (n[u] = a)), e.result } }, simulate: function (e, t, n) { var r = S.extend(new S.Event, n, { type: e, isSimulated: !0 }); S.event.trigger(r, null, t) } }), S.fn.extend({ trigger: function (e, t) { return this.each(function () { S.event.trigger(e, t, this) }) }, triggerHandler: function (e, t) { var n = this[0]; if (n) return S.event.trigger(e, t, n, !0) } }), y.focusin || S.each({ focus: "focusin", blur: "focusout" }, function (n, r) { var i = function (e) { S.event.simulate(r, e.target, S.event.fix(e)) }; S.event.special[r] = { setup: function () { var e = this.ownerDocument || this.document || this, t = Y.access(e, r); t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1) }, teardown: function () { var e = this.ownerDocument || this.document || this, t = Y.access(e, r) - 1; t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r)) } } }); var bt = C.location, wt = { guid: Date.now() }, Tt = /\?/; S.parseXML = function (e) { var t, n; if (!e || "string" != typeof e) return null; try { t = (new C.DOMParser).parseFromString(e, "text/xml") } catch (e) { } return n = t && t.getElementsByTagName("parsererror")[0], t && !n || S.error("Invalid XML: " + (n ? S.map(n.childNodes, function (e) { return e.textContent }).join("\n") : e)), t }; var Ct = /\[\]$/, Et = /\r?\n/g, St = /^(?:submit|button|image|reset|file)$/i, kt = /^(?:input|select|textarea|keygen)/i; function At(n, e, r, i) { var t; if (Array.isArray(e)) S.each(e, function (e, t) { r || Ct.test(n) ? i(n, t) : At(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i) }); else if (r || "object" !== w(e)) i(n, e); else for (t in e) At(n + "[" + t + "]", e[t], r, i) } S.param = function (e, t) { var n, r = [], i = function (e, t) { var n = m(t) ? t() : t; r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n) }; if (null == e) return ""; if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function () { i(this.name, this.value) }); else for (n in e) At(n, e[n], t, i); return r.join("&") }, S.fn.extend({ serialize: function () { return S.param(this.serializeArray()) }, serializeArray: function () { return this.map(function () { var e = S.prop(this, "elements"); return e ? S.makeArray(e) : this }).filter(function () { var e = this.type; return this.name && !S(this).is(":disabled") && kt.test(this.nodeName) && !St.test(e) && (this.checked || !pe.test(e)) }).map(function (e, t) { var n = S(this).val(); return null == n ? null : Array.isArray(n) ? S.map(n, function (e) { return { name: t.name, value: e.replace(Et, "\r\n") } }) : { name: t.name, value: n.replace(Et, "\r\n") } }).get() } }); var Nt = /%20/g, jt = /#.*$/, Dt = /([?&])_=[^&]*/, qt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Lt = /^(?:GET|HEAD)$/, Ht = /^\/\//, Ot = {}, Pt = {}, Rt = "*/".concat("*"), Mt = E.createElement("a"); function It(o) { return function (e, t) { "string" != typeof e && (t = e, e = "*"); var n, r = 0, i = e.toLowerCase().match(P) || []; if (m(t)) while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t) } } function Wt(t, i, o, a) { var s = {}, u = t === Pt; function l(e) { var r; return s[e] = !0, S.each(t[e] || [], function (e, t) { var n = t(i, o, a); return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1) }), r } return l(i.dataTypes[0]) || !s["*"] && l("*") } function Ft(e, t) { var n, r, i = S.ajaxSettings.flatOptions || {}; for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]); return r && S.extend(!0, e, r), e } Mt.href = bt.href, S.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: bt.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Rt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": S.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function (e, t) { return t ? Ft(Ft(e, S.ajaxSettings), t) : Ft(S.ajaxSettings, e) }, ajaxPrefilter: It(Ot), ajaxTransport: It(Pt), ajax: function (e, t) { "object" == typeof e && (t = e, e = void 0), t = t || {}; var c, f, p, n, d, r, h, g, i, o, v = S.ajaxSetup({}, t), y = v.context || v, m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event, x = S.Deferred(), b = S.Callbacks("once memory"), w = v.statusCode || {}, a = {}, s = {}, u = "canceled", T = { readyState: 0, getResponseHeader: function (e) { var t; if (h) { if (!n) { n = {}; while (t = qt.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]) } t = n[e.toLowerCase() + " "] } return null == t ? null : t.join(", ") }, getAllResponseHeaders: function () { return h ? p : null }, setRequestHeader: function (e, t) { return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this }, overrideMimeType: function (e) { return null == h && (v.mimeType = e), this }, statusCode: function (e) { var t; if (e) if (h) T.always(e[T.status]); else for (t in e) w[t] = [w[t], e[t]]; return this }, abort: function (e) { var t = e || u; return c && c.abort(t), l(0, t), this } }; if (x.promise(T), v.url = ((e || v.url || bt.href) + "").replace(Ht, bt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""], null == v.crossDomain) { r = E.createElement("a"); try { r.href = v.url, r.href = r.href, v.crossDomain = Mt.protocol + "//" + Mt.host != r.protocol + "//" + r.host } catch (e) { v.crossDomain = !0 } } if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)), Wt(Ot, v, t, T), h) return T; for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Lt.test(v.type), f = v.url.replace(jt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Nt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (Tt.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Dt, "$1"), o = (Tt.test(f) ? "&" : "?") + "_=" + wt.guid++ + o), v.url = f + o), v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]); if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort(); if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Wt(Pt, v, t, T)) { if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T; v.async && 0 < v.timeout && (d = C.setTimeout(function () { T.abort("timeout") }, v.timeout)); try { h = !1, c.send(a, l) } catch (e) { if (h) throw e; l(-1, e) } } else l(-1, "No Transport"); function l(e, t, n, r) { var i, o, a, s, u, l = t; h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) { var r, i, o, a, s = e.contents, u = e.dataTypes; while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type")); if (r) for (i in s) if (s[i] && s[i].test(r)) { u.unshift(i); break } if (u[0] in n) o = u[0]; else { for (i in n) { if (!u[0] || e.converters[i + " " + u[0]]) { o = i; break } a || (a = i) } o = o || a } if (o) return o !== u[0] && u.unshift(o), n[o] }(v, T, n)), !i && -1 < S.inArray("script", v.dataTypes) && S.inArray("json", v.dataTypes) < 0 && (v.converters["text script"] = function () { }), s = function (e, t, n, r) { var i, o, a, s, u, l = {}, c = e.dataTypes.slice(); if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a]; o = c.shift(); while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) { if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) { !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1])); break } if (!0 !== a) if (a && e["throws"]) t = a(t); else try { t = a(t) } catch (e) { return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o } } } return { state: "success", data: t } }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (S.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --S.active || S.event.trigger("ajaxStop"))) } return T }, getJSON: function (e, t, n) { return S.get(e, t, n, "json") }, getScript: function (e, t) { return S.get(e, void 0, t, "script") } }), S.each(["get", "post"], function (e, i) { S[i] = function (e, t, n, r) { return m(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend({ url: e, type: i, dataType: r, data: t, success: n }, S.isPlainObject(e) && e)) } }), S.ajaxPrefilter(function (e) { var t; for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "") }), S._evalUrl = function (e, t, n) { return S.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, converters: { "text script": function () { } }, dataFilter: function (e) { S.globalEval(e, t, n) } }) }, S.fn.extend({ wrapAll: function (e) { var t; return this[0] && (m(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () { var e = this; while (e.firstElementChild) e = e.firstElementChild; return e }).append(this)), this }, wrapInner: function (n) { return m(n) ? this.each(function (e) { S(this).wrapInner(n.call(this, e)) }) : this.each(function () { var e = S(this), t = e.contents(); t.length ? t.wrapAll(n) : e.append(n) }) }, wrap: function (t) { var n = m(t); return this.each(function (e) { S(this).wrapAll(n ? t.call(this, e) : t) }) }, unwrap: function (e) { return this.parent(e).not("body").each(function () { S(this).replaceWith(this.childNodes) }), this } }), S.expr.pseudos.hidden = function (e) { return !S.expr.pseudos.visible(e) }, S.expr.pseudos.visible = function (e) { return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length) }, S.ajaxSettings.xhr = function () { try { return new C.XMLHttpRequest } catch (e) { } }; var Bt = { 0: 200, 1223: 204 }, $t = S.ajaxSettings.xhr(); y.cors = !!$t && "withCredentials" in $t, y.ajax = $t = !!$t, S.ajaxTransport(function (i) { var o, a; if (y.cors || $t && !i.crossDomain) return { send: function (e, t) { var n, r = i.xhr(); if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) r[n] = i.xhrFields[n]; for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]); o = function (e) { return function () { o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Bt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? { binary: r.response } : { text: r.responseText }, r.getAllResponseHeaders())) } }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () { 4 === r.readyState && C.setTimeout(function () { o && a() }) }, o = o("abort"); try { r.send(i.hasContent && i.data || null) } catch (e) { if (o) throw e } }, abort: function () { o && o() } } }), S.ajaxPrefilter(function (e) { e.crossDomain && (e.contents.script = !1) }), S.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function (e) { return S.globalEval(e), e } } }), S.ajaxPrefilter("script", function (e) { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET") }), S.ajaxTransport("script", function (n) { var r, i; if (n.crossDomain || n.scriptAttrs) return { send: function (e, t) { r = S("<script>").attr(n.scriptAttrs || {}).prop({ charset: n.scriptCharset, src: n.url }).on("load error", i = function (e) { r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type) }), E.head.appendChild(r[0]) }, abort: function () { i && i() } } }); var _t, zt = [], Ut = /(=)\?(?=&|$)|\?\?/; S.ajaxSetup({ jsonp: "callback", jsonpCallback: function () { var e = zt.pop() || S.expando + "_" + wt.guid++; return this[e] = !0, e } }), S.ajaxPrefilter("json jsonp", function (e, t, n) { var r, i, o, a = !1 !== e.jsonp && (Ut.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(e.data) && "data"); if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ut, "$1" + r) : !1 !== e.jsonp && (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () { return o || S.error(r + " was not called"), o[0] }, e.dataTypes[0] = "json", i = C[r], C[r] = function () { o = arguments }, n.always(function () { void 0 === i ? S(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, zt.push(r)), o && m(i) && i(o[0]), o = i = void 0 }), "script" }), y.createHTMLDocument = ((_t = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === _t.childNodes.length), S.parseHTML = function (e, t, n) { return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && S(o).remove(), S.merge([], i.childNodes))); var r, i, o }, S.fn.load = function (e, t, n) { var r, i, o, a = this, s = e.indexOf(" "); return -1 < s && (r = ht(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && S.ajax({ url: e, type: i || "GET", dataType: "html", data: t }).done(function (e) { o = arguments, a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e) }).always(n && function (e, t) { a.each(function () { n.apply(this, o || [e.responseText, t, e]) }) }), this }, S.expr.pseudos.animated = function (t) { return S.grep(S.timers, function (e) { return t === e.elem }).length }, S.offset = { setOffset: function (e, t, n) { var r, i, o, a, s, u, l = S.css(e, "position"), c = S(e), f = {}; "static" === l && (e.style.position = "relative"), s = c.offset(), o = S.css(e, "top"), u = S.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, S.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f) } }, S.fn.extend({ offset: function (t) { if (arguments.length) return void 0 === t ? this : this.each(function (e) { S.offset.setOffset(this, t, e) }); var e, n, r = this[0]; return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset }) : { top: 0, left: 0 } : void 0 }, position: function () { if (this[0]) { var e, t, n, r = this[0], i = { top: 0, left: 0 }; if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect(); else { t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position")) e = e.parentNode; e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0), i.left += S.css(e, "borderLeftWidth", !0)) } return { top: t.top - i.top - S.css(r, "marginTop", !0), left: t.left - i.left - S.css(r, "marginLeft", !0) } } }, offsetParent: function () { return this.map(function () { var e = this.offsetParent; while (e && "static" === S.css(e, "position")) e = e.offsetParent; return e || re }) } }), S.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (t, i) { var o = "pageYOffset" === i; S.fn[t] = function (e) { return $(this, function (e, t, n) { var r; if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t]; r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n }, t, e, arguments.length) } }), S.each(["top", "left"], function (e, n) { S.cssHooks[n] = Fe(y.pixelPosition, function (e, t) { if (t) return t = We(e, n), Pe.test(t) ? S(e).position()[n] + "px" : t }) }), S.each({ Height: "height", Width: "width" }, function (a, s) { S.each({ padding: "inner" + a, content: s, "": "outer" + a }, function (r, o) { S.fn[o] = function (e, t) { var n = arguments.length && (r || "boolean" != typeof e), i = r || (!0 === e || !0 === t ? "margin" : "border"); return $(this, function (e, t, n) { var r; return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i) }, s, n ? e : void 0, n) } }) }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) { S.fn[t] = function (e) { return this.on(t, e) } }), S.fn.extend({ bind: function (e, t, n) { return this.on(e, null, t, n) }, unbind: function (e, t) { return this.off(e, null, t) }, delegate: function (e, t, n, r) { return this.on(t, e, n, r) }, undelegate: function (e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) }, hover: function (e, t) { return this.mouseenter(e).mouseleave(t || e) } }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) { S.fn[n] = function (e, t) { return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n) } }); var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g; S.proxy = function (e, t) { var n, r, i; if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function () { return e.apply(t || this, r.concat(s.call(arguments))) }).guid = e.guid = e.guid || S.guid++, i }, S.holdReady = function (e) { e ? S.readyWait++ : S.ready(!0) }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function (e) { var t = S.type(e); return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e)) }, S.trim = function (e) { return null == e ? "" : (e + "").replace(Xt, "") }, "function" == typeof define && define.amd && define("jquery", [], function () { return S }); var Vt = C.jQuery, Gt = C.$; return S.noConflict = function (e) { return C.$ === S && (C.$ = Gt), e && C.jQuery === S && (C.jQuery = Vt), S }, "undefined" == typeof e && (C.jQuery = C.$ = S), S });

// [{"slot":"second","name":"Bruce Crossing, Michigan","urlKey":"108467702518462","radius":"80"},{"slot":"second","name":"Big Rapids, Michigan","urlKey":"112244325457447","radius":"80"},{"slot":"second","name":"Imlay City, Michigan","urlKey":"105537582813375","radius":"80"},{"slot":"second","name":"Harris, Michigan","urlKey":"112827815401400","radius":"80"},{"slot":"second","name":"Battle Creek, Michigan","urlKey":"107374972619298","radius":"80"},{"slot":"second","name":"Naubinway, Michigan","urlKey":"111881735502926","radius":"60"},{"slot":"second","name":"Cadiz, Kentucky","urlKey":"107475745949201","radius":"100"},{"slot":"second","name":"Lexington, Kentucky","urlKey":"lexington","radius":"80"},{"slot":"second","name":"Glasgow, Kentucky","urlKey":"107861109243288","radius":"60"},{"slot":"second","name":"Somerset, Kentucky","urlKey":"112674218747903","radius":"20"},{"slot":"second","name":"Grayson, Kentucky","urlKey":"108475775846412","radius":"20"},{"slot":"second","name":"Jackson, Kentucky","urlKey":"108107442544202","radius":"40"},{"slot":"second","name":"Blackstone, Virginia","urlKey":"105576896143431","radius":"100"},{"slot":"second","name":"Roanoke, Virginia","urlKey":"roanoke-va","radius":"80"},{"slot":"second","name":"Luray, Virginia","urlKey":"112382815445338","radius":"80"},{"slot":"second","name":"Bristol, Virginia","urlKey":"112291928782910","radius":"60"},{"slot":"second","name":"Cape Charles, Virginia","urlKey":"108626165826144","radius":"40"},{"slot":"second","name":"Henderson, Tennessee","urlKey":"113167585363432","radius":"80"},{"slot":"second","name":"Tazewell, Tennessee","urlKey":"107908652571107","radius":"60"},{"slot":"second","name":"Shelbyville, Tennessee","urlKey":"108050902550376","radius":"60"},{"slot":"second","name":"Union City, Tennessee","urlKey":"112625145419282","radius":"40"},{"slot":"second","name":"Arlington, Tennessee","urlKey":"113883398622295","radius":"40"},{"slot":"second","name":"Lenoir City, Tennessee","urlKey":"104091942961425","radius":"40"},{"slot":"second","name":"Dayton, Tennessee","urlKey":"106079242756717","radius":"40"},{"slot":"second","name":"Cookeville, Tennessee","urlKey":"112692998743372","radius":"40"},{"slot":"second","name":"Jamestown, Tennessee","urlKey":"105539926147338","radius":"40"},{"slot":"second","name":"Lawrenceburg, Tennessee","urlKey":"105620656138984","radius":"40"},{"slot":"second","name":"Madison, Georgia","urlKey":"112506942094106","radius":"80"},{"slot":"second","name":"Jesup, Georgia","urlKey":"103996876304859","radius":"80"},{"slot":"second","name":"Americus, Georgia","urlKey":"108466782511927","radius":"80"},{"slot":"second","name":"Blue Ridge, Georgia","urlKey":"108108919218127","radius":"60"},{"slot":"second","name":"Thomasville, Georgia","urlKey":"107812089240090","radius":"60"},{"slot":"second","name":"Valdosta, Georgia","urlKey":"103975982970946","radius":"40"},{"slot":"second","name":"Dublin, Georgia","urlKey":"108758395814738","radius":"40"},{"slot":"second","name":"Carrollton, Georgia","urlKey":"112487615432050","radius":"40"},{"slot":"second","name":"Rome, Georgia","urlKey":"107963899224102","radius":"40"},{"slot":"second","name":"Ringgold, Georgia","urlKey":"104022859635638","radius":"40"},{"slot":"second","name":"Grenada, Mississippi","urlKey":"112431062106458","radius":"80"},{"slot":"second","name":"Brandon, Mississippi","urlKey":"104021926301761","radius":"80"},{"slot":"second","name":"Lucedale, Mississippi","urlKey":"111967038820116","radius":"80"},{"slot":"second","name":"Woodville, Mississippi","urlKey":"111873852157988","radius":"60"},{"slot":"second","name":"Columbia, Mississippi","urlKey":"112167362129862","radius":"40"},{"slot":"second","name":"Greenville, Mississippi","urlKey":"109540295731390","radius":"40"},{"slot":"second","name":"Fulton, Mississippi","urlKey":"103119093062290","radius":"40"},{"slot":"second","name":"Columbus, Mississippi","urlKey":"105532462814111","radius":"40"},{"slot":"second","name":"Louisville, Mississippi","urlKey":"108154785880124","radius":"40"},{"slot":"second","name":"Meridian, Mississippi","urlKey":"108168579207374","radius":"40"},{"slot":"second","name":"Southaven, Mississippi","urlKey":"104034969634202","radius":"20"},{"slot":"second","name":"Pelham, Alabama","urlKey":"104129119623782","radius":"80"},{"slot":"second","name":"Russellville, Alabama","urlKey":"108817435809827","radius":"40"},{"slot":"second","name":"Hartselle, Alabama","urlKey":"108136349208118","radius":"40"},{"slot":"second","name":"Fort Payne, Alabama","urlKey":"108018039221410","radius":"40"},{"slot":"second","name":"Eutaw, Alabama","urlKey":"108052195883580","radius":"40"},{"slot":"second","name":"Auburn, Alabama","urlKey":"108417995849344","radius":"40"},{"slot":"second","name":"Thomasville, Alabama","urlKey":"108217175865346","radius":"40"},{"slot":"second","name":"Goldsboro, North Carolina","urlKey":"108361105854270","radius":"40"},{"slot":"second","name":"Evergreen, Alabama","urlKey":"108466412517561","radius":"40"},{"slot":"second","name":"Troy, Alabama","urlKey":"113096688703739","radius":"40"},{"slot":"second","name":"Immokalee, Florida","urlKey":"103111633062107","radius":"100"},{"slot":"second","name":"Clermont, Florida","urlKey":"109263879093610","radius":"100"},{"slot":"second","name":"Panama City Beach, Florida","urlKey":"112008322147785","radius":"100"},{"slot":"second","name":"Lake City, Florida","urlKey":"113262008687508","radius":"80"},{"slot":"first","name":"Chetek, Wisconsin","urlKey":"109185802440364","radius":"80"},{"slot":"first","name":"Merrill, Wisconsin","urlKey":"112247702125089","radius":"80"},{"slot":"first","name":"Black River Falls, Wisconsin","urlKey":"108011149227310","radius":"60"},{"slot":"first","name":"Boscobel, Wisconsin","urlKey":"105482689484121","radius":"60"},{"slot":"first","name":"Menomonee Falls, Wisconsin","urlKey":"104104952958193","radius":"60"},{"slot":"first","name":"Montello, Wisconsin","urlKey":"112732548741244","radius":"60"},{"slot":"first","name":"Green Bay, Wisconsin","urlKey":"greenbay","radius":"60"},{"slot":"first","name":"Solon Springs, Wisconsin","urlKey":"112608472087070","radius":"40"},{"slot":"first","name":"Ashland, Wisconsin","urlKey":"112297378785565","radius":"40"},{"slot":"first","name":"Park Falls, Wisconsin","urlKey":"108721529152456","radius":"40"},{"slot":"first","name":"Madison, Wisconsin","urlKey":"madison","radius":"20"},{"slot":"first","name":"Bruce Crossing, Michigan","urlKey":"108467702518462","radius":"80"},{"slot":"first","name":"Big Rapids, Michigan","urlKey":"112244325457447","radius":"80"},{"slot":"first","name":"Imlay City, Michigan","urlKey":"105537582813375","radius":"80"},{"slot":"first","name":"Harris, Michigan","urlKey":"112827815401400","radius":"80"},{"slot":"first","name":"Battle Creek, Michigan","urlKey":"107374972619298","radius":"80"},{"slot":"first","name":"Naubinway, Michigan","urlKey":"111881735502926","radius":"60"},{"slot":"first","name":"Suttons Bay, Michigan","urlKey":"108397589184193","radius":"60"},{"slot":"first","name":"Lewiston, Michigan","urlKey":"109435205742556","radius":"60"},{"slot":"first","name":"De Tour Village, Michigan","urlKey":"108365935851557","radius":"40"},{"slot":"first","name":"Mackinaw City, Michigan","urlKey":"106151279416134","radius":"40"},{"slot":"first","name":"Tawas City, Michigan","urlKey":"112808158733249","radius":"40"},{"slot":"first","name":"Standish, Michigan","urlKey":"112098985473637","radius":"40"},{"slot":"first","name":"Ypsilanti, Michigan","urlKey":"112358675446636","radius":"40"},{"slot":"first","name":"Shingleton, Michigan","urlKey":"110970478926958","radius":"20"},{"slot":"first","name":"Paradise, Michigan","urlKey":"108227819202350","radius":"20"},{"slot":"first","name":"Port Austin, Michigan","urlKey":"112898765391290","radius":"20"},{"slot":"first","name":"Benton Harbor, Michigan","urlKey":"104034996298452","radius":"20"},{"slot":"first","name":"Copper Harbor, Michigan","urlKey":"114471041896953","radius":"40"},{"slot":"first","name":"Ishpeming, Michigan","urlKey":"112114465468515","radius":"40"},{"slot":"first","name":"Grand Marais, Michigan","urlKey":"108132592543186","radius":"40"},{"slot":"first","name":"Brimley, Michigan","urlKey":"107879469245956","radius":"40"},{"slot":"first","name":"Joliet, Illinois","urlKey":"112387862106695","radius":"80"},{"slot":"first","name":"Kewanee, Illinois","urlKey":"108297845858468","radius":"80"},{"slot":"first","name":"Danville, Illinois","urlKey":"109512592400452","radius":"80"},{"slot":"first","name":"Centralia, Illinois","urlKey":"103116343061909","radius":"80"},{"slot":"first","name":"Freeport, Illinois","urlKey":"112298095453768","radius":"60"},{"slot":"first","name":"Macomb, Illinois","urlKey":"105650692803199","radius":"60"},{"slot":"first","name":"Bloomington, Illinois","urlKey":"109425945743563","radius":"60"},{"slot":"first","name":"Springfield, Illinois","urlKey":"104023752968315","radius":"60"},{"slot":"first","name":"Pittsfield, Illinois","urlKey":"104077756295752","radius":"60"},{"slot":"first","name":"Mattoon, Illinois","urlKey":"108199815875302","radius":"40"},{"slot":"first","name":"Harrisburg, Illinois","urlKey":"107988969224646","radius":"40"},{"slot":"first","name":"Robinson, Illinois","urlKey":"108158555878332","radius":"20"},{"slot":"first","name":"Olney, Illinois","urlKey":"103126896394953","radius":"20"},{"slot":"first","name":"Jasper, Indiana","urlKey":"105979206100835","radius":"80"},{"slot":"first","name":"Greensburg, Indiana","urlKey":"107798935916829","radius":"80"},{"slot":"first","name":"Wabash, Indiana","urlKey":"109350795751180","radius":"80"},{"slot":"first","name":"Michigan City, Indiana","urlKey":"103138573060234","radius":"40"},{"slot":"first","name":"Saint Marys, Pennsylvania","urlKey":"106263302743287","radius":"40"},{"slot":"first","name":"Coudersport, Pennsylvania","urlKey":"106142242750808","radius":"20"},{"slot":"first","name":"Washington, Pennsylvania","urlKey":"104003396301893","radius":"20"},{"slot":"first","name":"Scranton, Pennsylvania","urlKey":"104088049626788","radius":"80"},{"slot":"first","name":"Williamsport, Pennsylvania","urlKey":"108718759152288","radius":"80"},{"slot":"first","name":"Philadelphia, Pennsylvania","urlKey":"philly","radius":"80"},{"slot":"first","name":"Hanover, Pennsylvania","urlKey":"105507776149184","radius":"80"},{"slot":"first","name":"Johnstown, Pennsylvania","urlKey":"109355635757858","radius":"80"},{"slot":"first","name":"Titusville, Pennsylvania","urlKey":"109420865751709","radius":"80"},{"slot":"first","name":"Weston, West Virginia","urlKey":"109368989081574","radius":"80"},{"slot":"first","name":"Logan, West Virginia","urlKey":"109653005727639","radius":"80"},{"slot":"first","name":"Concord, New Hampshire","urlKey":"103703779667744","radius":"80"},{"slot":"first","name":"Montpelier, Vermont","urlKey":"104085679627002","radius":"80"},{"slot":"first","name":"Findlay, Ohio","urlKey":"109179582434220","radius":"80"},{"slot":"first","name":"Canton, Ohio","urlKey":"107686305921065","radius":"80"},{"slot":"first","name":"Chillicothe, Ohio","urlKey":"112298928786424","radius":"80"},{"slot":"first","name":"Greer, South Carolina","urlKey":"103703819668542","radius":"80"},{"slot":"first","name":"Wilkesboro, North Carolina","urlKey":"108533802503839","radius":"60"},{"slot":"first","name":"Burlington, North Carolina","urlKey":"105983586099873","radius":"60"},{"slot":"first","name":"Oak Island, North Carolina","urlKey":"108066922555681","radius":"60"},{"slot":"first","name":"Morehead City, North Carolina","urlKey":"109819579043640","radius":"60"},{"slot":"first","name":"Ocracoke, North Carolina","urlKey":"107988815891053","radius":"60"},{"slot":"first","name":"Goldsboro, North Carolina","urlKey":"108361105854270","radius":"60"},{"slot":"first","name":"Cherokee, North Carolina","urlKey":"112354685446271","radius":"40"},{"slot":"first","name":"Southern Pines, North Carolina","urlKey":"109841785701653","radius":"40"},{"slot":"first","name":"Concord, North Carolina","urlKey":"105696062797469","radius":"40"},{"slot":"first","name":"Elizabeth City, North Carolina","urlKey":"112341352111008","radius":"40"},{"slot":"first","name":"Plymouth, North Carolina","urlKey":"104019322968722","radius":"40"},{"slot":"first","name":"Hilton Head Island, South Carolina","urlKey":"112538935424993","radius":"40"},{"slot":"first","name":"Summerville, South Carolina","urlKey":"106051496092284","radius":"40"},{"slot":"first","name":"Rock Hill, South Carolina","urlKey":"107588489271016","radius":"20"},{"slot":"first","name":"Florence, South Carolina","urlKey":"108629215828322","radius":"80"},{"slot":"first","name":"Barnwell, South Carolina","urlKey":"104089312960408","radius":"80"},{"slot":"first","name":"Ashland, Maine","urlKey":"109083262443660","radius":"100"},{"slot":"first","name":"Rockwood, Maine","urlKey":"110175172333742","radius":"60"},{"slot":"first","name":"Portland, Maine","urlKey":"portland_maine","radius":"40"},{"slot":"first","name":"Rockland, Maine","urlKey":"107647959265181","radius":"40"},{"slot":"first","name":"Machias, Maine","urlKey":"112215165462113","radius":"40"},{"slot":"first","name":"Rumford, Maine","urlKey":"106273972737298","radius":"80"},{"slot":"first","name":"Old Town, Maine","urlKey":"112434268771975","radius":"80"},{"slot":"first","name":"Tupper Lake, New York","urlKey":"106158159420359","radius":"80"},{"slot":"first","name":"Hamilton, New York","urlKey":"249852841804761","radius":"80"},{"slot":"first","name":"Geneseo, New York","urlKey":"103102666397050","radius":"80"},{"slot":"first","name":"Newburgh, New York","urlKey":"110616528960082","radius":"80"},{"slot":"first","name":"Elmira, New York","urlKey":"104088489629138","radius":"80"},{"slot":"first","name":"Saratoga Springs, New York","urlKey":"108057199217180","radius":"60"},{"slot":"first","name":"Montauk, New York","urlKey":"108236039204718","radius":"40"},{"slot":"first","name":"Riverhead, New York","urlKey":"111956225497502","radius":"40"},{"slot":"first","name":"Springfield, Massachusetts","urlKey":"112781448736001","radius":"60"},{"slot":"first","name":"Yarmouth, Massachusetts","urlKey":"103106726395610","radius":"40"},{"slot":"first","name":"Providence, Rhode Island","urlKey":"providence","radius":"80"},{"slot":"first","name":"Cambridge, Maryland","urlKey":"105565586143189","radius":"80"},{"slot":"first","name":"Brattleboro, Vermont","urlKey":"108333559194371","radius":"60"},{"slot":"first","name":"Greenville, Ohio","urlKey":"105716376130028","radius":"40"},{"slot":"first","name":"Zanesville, Ohio","urlKey":"112099355467948","radius":"40"},{"slot":"first","name":"Mason, Ohio","urlKey":"113805941962934","radius":"20"},{"slot":"first","name":"Mount Vernon, Ohio","urlKey":"111990698816711","radius":"20"},{"slot":"first","name":"Mentor, Ohio","urlKey":"108177469202553","radius":"20"},{"slot":"first","name":"Ashtabula, Ohio","urlKey":"104136239622333","radius":"20"}]
const facebookCollectionUrlsOld = [
    "https://www.facebook.com/marketplace/category/buick-cascada/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/buick-century/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/buick-electra/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/buick-enclave/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/buick-encore/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/buick-envision/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/buick-lacrosse/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/buick-lesabre/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/buick-lucerne/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/buick-park-avenue/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/buick-rainier/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/buick-regal/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/buick-rendezvous/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/chevrolet-astro/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/chevrolet-avalanche/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/chevrolet-aveo/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/chevrolet-beretta/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/chevrolet-blazer/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/chevrolet-camaro/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/chevrolet-caprice/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/chevrolet-captiva/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/chevrolet-cavalier/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/chevrolet-city-express/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/chevrolet-colorado/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/chevrolet-corsica/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/chevrolet-corvette/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/chevrolet-cruze/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/chevrolet-equinox/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/chevrolet-express/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/chevrolet-g-10/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/chevrolet-g-20/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/chevrolet-g-30/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/chevrolet-impala/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/chevrolet-lumina/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/chevrolet-malibu/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/chevrolet-monte-carlo/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/chevrolet-silverado/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/chevrolet-silverado-1500/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/chevrolet-silverado-2500/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/chevrolet-silverado-3500/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/chevrolet-sonic/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/chevrolet-spark/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/chevrolet-sportvan-g10/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/chevrolet-sportvan-g20/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/chevrolet-sportvan-g30/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/chevrolet-ss/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/chevrolet-ssr/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/chevrolet-suburban/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/chevrolet-tahoe/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/chevrolet-tracker/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/chevrolet-trailblazer/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/chevrolet-traverse/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/chevrolet-trax/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/chevrolet-uplander/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/chevrolet-venture/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/chevrolet-volt/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/chrysler-200/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/chrysler-300/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/chrysler-300m/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/chrysler-aspen/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/chrysler-cirrus/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/chrysler-concorde/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/chrysler-crossfire/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/chrysler-delta/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/chrysler-imperial/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/chrysler-lebaron/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/chrysler-lhs/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/chrysler-new-yorker/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/chrysler-pacifica/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/chrysler-prowler/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/chrysler-pt-cruiser/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/chrysler-sebring/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/chrysler-town-&-country/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/chrysler-voyager/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/dodge-avenger/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/dodge-caliber/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/dodge-caravan/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/dodge-challenger/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/dodge-charger/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/dodge-colt/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/dodge-d-150/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/dodge-d-250/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/dodge-d-350/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/dodge-dakota/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/dodge-dart/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/dodge-daytona/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/dodge-durango/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/dodge-dynasty/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/dodge-grand-caravan/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/dodge-intrepid/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/dodge-magnum/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/dodge-monaco/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/dodge-neon/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/dodge-nitro/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/dodge-ram-1500/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/dodge-ram-2500/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/dodge-ram-3500/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/dodge-ram-4500/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/dodge-ram-50/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/dodge-ram-5500/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/dodge-ram-charger/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/dodge-shadow/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/dodge-spirit/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/dodge-sprinter-2500/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/dodge-sprinter-3500/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/dodge-stealth/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/dodge-stratus/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/dodge-viper/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/fiat-124-spider/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/fiat-500/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/fiat-500-abarth/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/fiat-500c/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/fiat-500c-abarth/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/fiat-500e/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/fiat-500l/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/fiat-500x/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/ford-aerostar/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/ford-aspire/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/ford-bronco/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/ford-c-max/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/ford-contour/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/ford-crown-victoria/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/ford-econoline/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/ford-ecosport/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/ford-edge/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/ford-escape/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/ford-escort/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/ford-excursion/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/ford-expedition/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/gmc-acadia/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/gmc-canyon/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/gmc-envoy/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/gmc-jimmy/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/gmc-rally-wagon-1500/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/gmc-rally-wagon-2500/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/gmc-rally-wagon-3500/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/gmc-rally-wagon-g2500/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/gmc-rally-wagon-g3500/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/gmc-safari/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/gmc-savana-cutaway/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/gmc-sierra/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/gmc-sonoma/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/gmc-terrain/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/gmc-vandura-1500/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/gmc-vandura-2500/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/gmc-vandura-3500/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/gmc-vandura-g2500/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/gmc-vandura-g3500/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/gmc-yukon/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/honda-accord/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/honda-accord-crosstour/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/honda-civic/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/honda-clarity/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/honda-cr-v/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/honda-cr-z/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/honda-element/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/honda-fit/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/honda-hr-v/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/honda-insight/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/honda-odyssey/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/honda-passport/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/hyundai-accent/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/hyundai-azera/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/hyundai-elantra/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/hyundai-entourage/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/hyundai-equus/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/hyundai-excel/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/hyundai-ioniq/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/hyundai-ix35/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/hyundai-kona/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/hyundai-nexo/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/hyundai-santa-fe/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/hyundai-scoupe/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/hyundai-sonata/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/hyundai-tiburon/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/hyundai-tucson/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/hyundai-veloster/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/hyundai-veracruz/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/jeep-cherokee/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/jeep-comanche/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/jeep-commander/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/jeep-compass/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/jeep-gladiator/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/jeep-grand-cherokee/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/jeep-liberty/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/jeep-patriot/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/jeep-renegade/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/jeep-wrangler/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/jeep-wrangler-unlimited/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/lincoln-aviator/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/lincoln-blackwood/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/lincoln-continental/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/lincoln-ls/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/lincoln-mark-lt/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/lincoln-mark-vii/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/lincoln-mark-viii/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/lincoln-mkc/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/lincoln-mks/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/lincoln-mkt/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/lincoln-mkx/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/lincoln-mkz/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/lincoln-nautilus/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/lincoln-navigator/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/mazda-2/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/mazda-3/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/mazda-5/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/mazda-6/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/mazda-626/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/mazda-929/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/mazda-cx-3/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/mazda-cx-5/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/mazda-cx-7/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/mazda-cx-9/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/mazda-millenia/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/mazda-mpv/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/mazda-mx-3/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/mazda-mx-5/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/mazda-mx-6/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/mazda-navajo/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/mazda-protege/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/mazda-rx-7/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/mazda-rx-8/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/mazda-tribute/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/nissan-200sx/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/nissan-240-sx/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/nissan-300zx/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/nissan-350z/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/nissan-almera/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/nissan-altima/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/nissan-armada/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/nissan-cube/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/nissan-frontier/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/nissan-gt-r/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/nissan-juke/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/nissan-kicks/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/nissan-leaf/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/nissan-maxima/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/nissan-murano/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/nissan-nv/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/nissan-nv200/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/nissan-nx/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/nissan-pathfinder/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/nissan-quest/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/nissan-rogue/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/nissan-sentra/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/nissan-stanza/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/nissan-titan/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/nissan-versa/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/nissan-xterra/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/scion-fr-s/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/scion-ia/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/scion-im/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/scion-iq/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/scion-tc/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/scion-xa/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/scion-xb/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/scion-xd/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/subaru-ascent/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/subaru-baja/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/subaru-brz/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/subaru-crosstrek/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/subaru-forester/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/subaru-impreza/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/subaru-justy/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/subaru-legacy/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/subaru-outback/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/subaru-sambar/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/subaru-svx/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/subaru-tribeca/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/subaru-wrx/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/toyota-4runner/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/toyota-86/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/toyota-avalon/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/toyota-c-hr/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/toyota-camry/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/toyota-corolla/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/toyota-cressida/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/toyota-echo/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/toyota-fj-cruiser/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/toyota-gr-supra/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/toyota-highlander/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/toyota-landcruiser/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/toyota-mirai/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/toyota-mr2/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/toyota-paseo/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/toyota-previa/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/toyota-prius/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/toyota-prius-c/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/toyota-prius-v/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/toyota-rav4/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/toyota-sequoia/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/toyota-sienna/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/toyota-supra/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/toyota-t100/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/toyota-tacoma/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/toyota-tercel/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/toyota-tundra/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/toyota-venza/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/toyota-yaris/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/volkswagen-arteon/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/volkswagen-atlas/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/volkswagen-beetle/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/volkswagen-cabrio/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/volkswagen-cabriolet/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/volkswagen-cc/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/volkswagen-corrado/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/volkswagen-e-golf/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/volkswagen-eos/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/volkswagen-eurovan/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/volkswagen-fox/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/volkswagen-golf/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/volkswagen-gti/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/volkswagen-jetta/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/volkswagen-new-beetle/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/volkswagen-passat/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/volkswagen-phaeton/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/volkswagen-r32/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/volkswagen-tiguan/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
    "https://www.facebook.com/marketplace/category/volkswagen-touareg/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true"
];
// const facebookCollectionUrls = [
//     "https://www.facebook.com/marketplace/category/vehicles?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true"
// ];

// only makes
// Buick,Chevrolet,Chrysler,Dodge,Fiat,Ford,GMC,Honda,Hyundai,Jeep,Kia,Lincoln,Mazda,Mitsubishi,Nissan,Ram,Scion,Smart,Subaru,Toyota,Volkswagen"
const facebookCollectionUrlsMode = {
    all: [
        "https://www.facebook.com/marketplace/category/vehicles?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true"
    ],
    byType: [
        "https://www.facebook.com/marketplace/category/cars?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
        "https://www.facebook.com/marketplace/category/suvs?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true",
        "https://www.facebook.com/marketplace/category/trucks?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true"

    ],
    byModel: [
        // buick
        "https://www.facebook.com/marketplace/category/vehicles/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true&make=436791410393181",
        // Chevrolet
        "https://www.facebook.com/marketplace/category/vehicles/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true&make=1914016008726893",
        // Chrysler
        "https://www.facebook.com/marketplace/category/vehicles/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true&make=398368117562414",
        // Dodge
        "https://www.facebook.com/marketplace/category/vehicles/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true&make=402915273826151",
        // Fiat
        "https://www.facebook.com/marketplace/category/vehicles/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true&make=973850736337551",
        // Ford
        "https://www.facebook.com/marketplace/category/vehicles/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true&make=297354680962030",
        // GMC
        "https://www.facebook.com/marketplace/category/vehicles/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true&make=304317923578325",
        // Honda
        "https://www.facebook.com/marketplace/category/vehicles/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true&make=308436969822020",
        // Hyundai
        "https://www.facebook.com/marketplace/category/vehicles/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true&make=590755841400441",
        // Jeep
        "https://www.facebook.com/marketplace/category/vehicles/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true&make=408221723080125",
        // Kia
        "https://www.facebook.com/marketplace/category/vehicles/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true&make=417670842327686",
        // Lincoln
        "https://www.facebook.com/marketplace/category/vehicles/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true&make=1928095167294293",
        // Mazda
        "https://www.facebook.com/marketplace/category/vehicles/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true&make=410067716491465",
        // Mitsubishi
        "https://www.facebook.com/marketplace/category/vehicles/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true&make=343841119808433",
        // Nissan
        "https://www.facebook.com/marketplace/category/vehicles/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true&make=2621742507840619",
        // Ram
        "https://www.facebook.com/marketplace/category/vehicles/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true&make=262465364692582",
        // Scion
        "https://www.facebook.com/marketplace/category/vehicles/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true&make=1546786558785480",
        // smart
        "https://www.facebook.com/marketplace/category/vehicles/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true&make=573131263170521",
        // Subaru
        "https://www.facebook.com/marketplace/category/vehicles/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true&make=2571870739551112",
        // Toyota
        "https://www.facebook.com/marketplace/category/vehicles/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true&make=2318041991806363",
        // Volkswagen
        "https://www.facebook.com/marketplace/category/vehicles/?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true&make=523665818157652",
    ]
};
const getCollectionModeUrls = async ()=>{
   const collectionMode =  await getStorageSingleData('ex_mode')||"all";
   return facebookCollectionUrlsMode[collectionMode];
}
const facebookCollectionUrls = facebookCollectionUrlsMode.all;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const getElementBySelector= async ({parent,data, instant, maxTimeOut=1, required,name,debug=true}) => {
    const {type, isMonoExpected, selector, innerText, value, validator} = data;
    let count = 0;
    let result = null;
    do{
        count++;
        if(count<=maxTimeOut){
            if(!instant){
                await sleep(1000);
            }
            if(debug){
                // contentScripts.showDataOnConsoleDynamic(`${count} Seconds Waiting for element : ${name || selector}`)
                console.log(`${count} Seconds Waiting for element : ${name || selector}`)
            }
        }else{
            break;
        }
        let elements = null;
        if(parent){
            elements = parent[type](selector);
        }else{
            elements = document[type](selector);
        }

        if(isMonoExpected){
            if(elements.length==1){  
                if(validator){
                    if(validator(elements[0])){
                        result = elements[0];
                        break;
                    }
                }else if(innerText){
                    if(elements[0].innerText.includes(innerText)){
                        result = elements[0];
                        break;
                    }
                }else if(value){
                    if(elements[0].value.includes(value)){
                        result = elements[0];
                        break;
                    }
                }else{
                    result = elements[0];
                    break;
                }
            }else if(elements.length>1){
                if(validator){
                    const filteredElements = [];
                    for(let i=0;i<elements.length;i++){
                        // console.log(elements)
                        if(validator(elements[i])){
                            filteredElements.push(elements[i]);
                        }
                    }
                    if(filteredElements.length===1){
                        result = filteredElements[0];
                        break;
                    }
                }else if(innerText){
                    const filteredElements = [];
                    for(let i=0;i<elements.length;i++){
                        // console.log(elements[i].innerText,innerText)
                        if(elements[i].innerText.includes(innerText)){
                            filteredElements.push(elements[i]);
                        }
                    }
                    if(filteredElements.length===1){
                        result = filteredElements[0];
                        break;
                    }
                }else if(value){
                    const filteredElements = [];
                    for(let i=0;i<elements.length;i++){
                        if(elements[i].value.includes(value)){
                            filteredElements.push(elements[i]);
                        }
                    }
                    if(filteredElements.length===1){
                        result = filteredElements[0];
                        break;
                    }
                }
            }
        }else{
            if(elements.length>0){
                if(validator){
                    const filteredElements = [];
                    for(let i=0;i<elements.length;i++){
                        if(validator(elements[i])){
                            filteredElements.push(elements[i]);
                        }
                    }
                    if(filteredElements.length>0){
                        result = filteredElements;
                        break;
                    }
                }else if(innerText){
                    const filteredElements = [];
                    for(let i=0;i<elements.length;i++){
                        if(elements[i].innerText.includes(innerText)){
                            filteredElements.push(elements[i]);
                        }
                    }
                    if(filteredElements.length>0){
                        result = filteredElements;
                        break;
                    }
                }else if(value){
                    const filteredElements = [];
                    for(let i=0;i<elements.length;i++){
                        if(elements[i].value.includes(value)){
                            filteredElements.push(elements[i]);
                        }
                    }
                    if(filteredElements.length>0){
                        result = filteredElements;
                        break;
                    }
                }else{
                    result = elements;
                    break;
                }
            }
        }
    }while(!instant);
    if(required && !result){
        // contentScripts.showDataOnConsoleDynamic(`Element not found and required: ${name ||selector}`);
        // contentScripts.showConsoleError();
        console.log(`Element not found and required: ${name ||selector}`)
        throw new Error({parent,data, instant, maxTimeOut, required,name});
    }else{
        if(!result){
            // contentScripts.showDataOnConsoleDynamic(`Element not found: ${name ||selector}`);
            console.log(`Element not found: ${name ||selector}`)
            return null;
        }else{
            if(debug){
                // contentScripts.showDataOnConsoleDynamic(``)

            }
            return result;
        }
    }
};
async function pageBypassWork(action){
    await setStorageSingleData('pageBypassWork', action);
    window.location.href= await getStorageSingleData('ex_apiUrl');
};
$(document).ready(async function () {
    await preload_content_setup();
    await eventListenerMethods();







    // console.log(JSON.stringify(data));
    // var ex_listed = await getStorageSingleData('ex_listed');
    // ex_listed = ex_listed.splice(0,1);
    // await setStorageSingleData('ex_listed',ex_listed);
    // JSON.stringify(data);
    // console.log(ex_listed.length);
    // console.log(ex_listed);
    // console.log(typeof(ex_listed));
        //await showHTMLOnContentConsole('SERVER:'+response.message);






    await mainProcess();  
    
});

async function mainProcess(){
    if(await notReadyToGo()){
        await showInitialInputForm();
    }else{
        if(await isUserLoggedIn()){
            if(await idDisabledCheck()){
                await showHTMLOnContentConsole('account disabled');
                // await idGotDisabled();
            }else{
                await dataCollectionProcess();
            }
        }else{
            if(await idDisabledCheck()){
                await showHTMLOnContentConsole('account disabled');
                // await idGotDisabled();
            }else{
                await userLoginProcess();
            }  
        }
    }
}
async function temporaryBlockCheck(){
    const isTemporaryBlocked  = await getElementBySelector({
        data: {
            type: 'querySelectorAll',
            selector: "h2 span:not(:has(*)):not(:empty)",
            isMonoExpected: false,
            innerText: 'You’re Temporarily Blocked',
        },
        instant: true,
        required: false,
        name: 'temporaryBlockCheck'
    });
    if(isTemporaryBlocked){
        // stop program propagation and wait 1 hour then refresh the page
        const totalWaitingSeconds = 3600;
        // for(let i=0;i<totalWaitingMinutes;i++){
        //     showDataOnConsoleDynamic(`Temporary Blocked for ${i+1}/${totalWaitingMinutes} minutes`);
        //     await ex_sleep(1000*60);
        // }
        // showDataOnConsoleDynamic(`DONE WAITING FOR ${totalWaitingMinutes} MINUTES`);
        for(let i=0;i<totalWaitingSeconds;i++){
            showDataOnConsoleDynamic(`Temporary Blocked for ${i+1}/${totalWaitingSeconds} seconds`);
            await ex_sleep(1000);
        }
        showDataOnConsoleDynamic(`DONE WAITING FOR ${totalWaitingSeconds} SECONDS`);
        window.location.reload();
        await ex_sleep(1000*60*5);
    }
}
async function dataCollectionProcess(){
    const facebookCollectionUrls = await getCollectionModeUrls();
    await temporaryBlockCheck();
    if(!await localStorageGotArea()){
        const action = await getStorageSingleData('pageBypassWork');
        if(action!='workCompleted'){
            await getAreaFromWebStorage();
            return;
        }else{
            await setStorageSingleData('pageBypassWork','');
        }
    }
    if(await localStorageGotArea()){
        if(await isAreaVerified()){
            var ex_area = await getStorageSingleData('ex_area');
            switch(ex_area.status){
                case 'selected':
                    let currentLocationIndex = await getStorageSingleData('currentLocationIndex');
                    if(currentLocationIndex == null){
                        await setStorageSingleData('currentLocationIndex',0);
                    }
                    if(facebookCollectionUrls[currentLocationIndex] == null){
                        ex_area.status = 'collected';
                        await setStorageSingleData('ex_area',ex_area);
                        await setStorageSingleData('currentLocationIndex',0);
                        await ex_redirection('https://www.facebook.com/','Redirection to home need to upload collected');
                        return;
                    }
                    await dataCollectionProcessCollection();
                break;
                case 'collected':
                    await dataCollectionProcessListing();
                break;
                case 'listed':
                    await dataCollectionProcessScraping();
                break;
                case 'scraped':
                    await dataCollectionProcessSaving();
                break;
            }
        }else{
            if(await isMarketPlaceUrl()){
                // console.log(await getStorageSingleData('ex_listed'));
                await areaChange();
                await areaVerification();
            }else{
                await ex_redirection(await marketPlaceUrl(),'Redirection to Marketplace Url to verify location');
            }
        }
    }else{
        await setStorageSingleData('ex_switch',null);
        await showHTMLOnContentConsole('Maybe work is done!');
        await playSound();
    }
}
async function dataCollectionProcessSaving(){
    var ex_listed = await getStorageSingleData('ex_listed');
    var ex_workId = await getStorageSingleData('ex_workId');
    // await sendActionTOBackground('productSaving');
    await pageBypassWork('productSaving');
    // await $.ajax({
    //     type: 'post',
    //     url: webApiUrl(),
    //     dataType: 'json',
    //     data: {
    //         action: 'productSaving',
    //         info: {
    //             list: JSON.stringify(ex_listed),
    //             workId: ex_workId
    //         }
    //     },
    //     success: async function (response) {
    //         if(response.type=='success'){
    //             await setStorageSingleData('ex_area',null);
    //             await ex_redirection('https://www.facebook.com/','Redirection to Home just saved full');
    //         }else if(response.type=='error'){
    //             console.log(response.message);
    //             await showHTMLOnContentConsole('SERVER:'+response.message);
    //         }
    //     },
    //     error: async function()
    //     {
    //         await showHTMLOnContentConsole('communication error');
    //     }
    // });
}
async function dataCollectionProcessScraping(){
    if(await isUrlIncludesUnavailavle()){
        await skipCurrentProductScraping();
    }else{
        var currentIndex = await currentScrapingIndex();
        if(currentIndex != null){
            var ex_listed = await getStorageSingleData('ex_listed');
            var number = ex_listed[currentIndex].number;
            var scraped = null;
            if(window.location.href=='https://www.facebook.com/marketplace/item/'+number){
                try{
                    showHTMLOnContentConsole('scraping item:'+number);
                    await showHTMLOnContentConsole('total:'+ex_listed.length);
                    await showHTMLOnContentConsole('current:'+currentIndex);
                    try{
                        scraped = getItemInformationFromMarketplaceItemPage();
                    }catch(e){
                        scraped = null;
                    }
                    // await ex_sleep(3000);
                    if(scraped==null){
                        scraped = await getItemInformationFromMarketplaceItemPageBySelector();
                    }
                    if(scraped!=null){
                        // throw new Error(e);
                        
                        ex_listed[currentIndex] = scraped;
                        await setStorageSingleData('ex_listed',ex_listed);
                        currentIndex = await currentScrapingIndex();
                        ex_listed = await getStorageSingleData('ex_listed');
                        if(currentIndex != null){
                            ex_redirection('https://www.facebook.com/marketplace/item/'+ex_listed[currentIndex].number,'item scraping redirection '+ex_listed[currentIndex].number);
                        }else{
                            var ex_area = await getStorageSingleData('ex_area');
                            ex_area.status = "scraped";
                            await setStorageSingleData('ex_area',ex_area);
                            ex_redirection('https://www.facebook.com/','to home scraping just done')
                        }
                    }else{
                        
                        throw new Error('scraped is null');
                    }
                }catch(e){
                    console.log(e);
                    await ex_sleep(3000);
                    if(temporaryBlockSelector().length==0){
                        // if(await redirectionAllowed(`item:${number}`)){
                        //     showHTMLOnContentConsole("trying again");
                        //     ex_redirection('https://www.facebook.com/marketplace/item/'+number,`item:${number}`);
                        //     return;
                        // }
                        // XAVVV
                        console.log(e)
                        // sett button
                        const dataConsole = document.querySelector('#ex_console_div');
                        const button = document.createElement('button');
                        button.innerText = 'Skip';
                        button.id = 'ex_skip_button';
                        button.style = 'background-color: #4CAF50; /* Green */border: none;color: white;padding: 15px 32px;text-align: center;text-decoration: none;display: inline-block;font-size: 16px;';
                        button.addEventListener('click',async function(){
                            console.log('skipping this item');
                            await skipCurrentProductScraping();
                        });
                        dataConsole.append(button);
                        // skip rest
                        const skipAllButton = document.createElement('button');
                        skipAllButton.innerText = 'Skip Rest';
                        skipAllButton.id = 'ex_skip_rest_button';
                        skipAllButton.style = 'background-color: #4CAF50; /* Green */border: none;color: white;padding: 15px 32px;text-align: center;text-decoration: none;display: inline-block;font-size: 16px;';
                        skipAllButton.addEventListener('click',async function(){
                            console.log('skipping all items');
                            await skipRestProductScraping();
                        })
                        dataConsole.append(skipAllButton);
                        throw new Error(e);

                        await skipCurrentProductScraping();
                    }else{
                        await setStorageSingleData('ex_id',null);
                        await userLogout();
                        await ex_redirection('https://www.facebook.com/','redirect to homepage for logout disabled');
                    }
                }
                console.log(scraped);
            }else{
                ex_redirection('https://www.facebook.com/marketplace/item/'+ex_listed[currentIndex].number,'item scraping redirection '+ex_listed[currentIndex].number);
            }
        }else{
            var ex_area = await getStorageSingleData('ex_area');
            ex_area.status = "scraped";
            await setStorageSingleData('ex_area',ex_area);
            ex_redirection('https://www.facebook.com/','to home scraping just done')
        }
    }
}
function classesToSelector(classes){
    classes = classes.split(' ');
    let selector = '';
    for(i=0;i<classes.length;i++){
        selector += '.'+classes[i];
    }
    return selector;
}
async function scrapingLevelZero(index,number){
    let holderParentClasses = 'xb57i2i x1q594ok x5lxg6s x78zum5 xdt5ytf x6ikm8r x1ja2u2z x1pq812k x1rohswg xfk6m8 x1yqm8si xjx87ck x1l7klhg xs83m0k x2lwn1j xx8ngbg xwo3gff x1oyok0e x1odjw0f x1e4zzel x1n2onr6 xq1qtft x1iyjqo2 xqtp20y xx6bls6 xh8yej3 xiylbte';
    let holderParent = document.querySelector(`[class="${holderParentClasses}"]`);
    let holderClasses = 'x78zum5 x1iyjqo2 x1n2onr6 xdt5ytf';
    let holder = holderParent.querySelector(`${classesToSelector(holderClasses)}`);
    //year vehicle
    let yearNameClasses = 'x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x1lliihq x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x14z4hjw x3x7a5m xngnso2 x1qb5hxa x1xlr1w8 xzsf02u';
    let year;
    try{
        year = holder.querySelector(`${classesToSelector(yearNameClasses)}`).innerText.match(/^\d{4}/).toString().replace(/,/g, "")
    }catch(err){
        console.log(err);
        year = "";
    }
    let name = holder.querySelector(`${classesToSelector(yearNameClasses)}`).innerText.replace(/^\d{4}/, '').trim().replace(/,/g, "");
    //price
    let priceClasses = 'x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x1lliihq x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x xudqn12 x676frb x1lkfr7t x1lbecb7 x1s688f xzsf02u';
    // const priceClasses2 = 'x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x1lliihq x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x xudqn12 x676frb x1jchvi3 x1lbecb7 x1s688f xzsf02u';
    const priceElement = holder.querySelector(`${classesToSelector(priceClasses)}`);// || holder.querySelector(`${classesToSelector(priceClasses2)}`);
    let price = priceElement.innerText.match(/\d+/g).join('');
    //state city time
    let stateCityTimeClasses = 'x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x1lliihq x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x4zkp8e x676frb x1nxh6w3 x1sibtaa xo1l8bm xi81zsa';
    let stateCityTime = holder.querySelector(`${classesToSelector(stateCityTimeClasses)}`).innerText;
    const stateCityBeforeIn = stateCityTime.split(' in ')[0];
    const stateCityWithoutBeforeIn =  stateCityTime.replace(stateCityBeforeIn,'').trim();
    let state = stateCityWithoutBeforeIn.match(/[A-Z]{2}/).toString().trim().replace(/,/g, "");
    let city = stateCityWithoutBeforeIn.replace(/, [A-Z]{2}/, '').trim().replace(/,/g, "").replace(/^in /g, '');
    let time = stateCityBeforeIn.replace('VehiclesListed', '').replace('Listed', '').replace('ago', '').trim().replace(/,/g, "");
    //mileage
    let mileageHolderClasses = 'xeuugli xs83m0k x1iyjqo2 x1r8uery xamitd3';
    let mileageClasses = 'x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x1lliihq x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x xudqn12 x3x7a5m x6prxxf xvq8zen xo1l8bm xzsf02u';
    let mileage = holder.querySelector(`${classesToSelector(mileageHolderClasses)}>${classesToSelector(mileageClasses)}`).innerText.match(/\d+/g).join('').replace(/,/g, "");
    //seller
    let sellerHolderClasses = 'x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz xt0b8zv xzsf02u x1s688f';
    let sellerClasses = 'x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x6prxxf xvq8zen x1s688f xzsf02u';
    let seller = holder.querySelector(`${classesToSelector(sellerHolderClasses)}>${classesToSelector(sellerClasses)}`).innerText.trim().replace(/,/g, "");
    console.log([year,name,price,state,city,time,mileage,seller].join('|'));
    return {
        city,mileage,name,number,price,year,seller,
        state:await stateConverter(state),
        time:await referenceToTimeStamp(time),
        status:'done'
    } 
}
const getItemInformationFromMarketplaceItemPage = ()=>{
    const jsonScripts = document.querySelectorAll('script[type="application/json"]');
    let jsonData = null;
    let jsonDatas = [];
    for(let i=0;i<jsonScripts.length;i++){
        const fullText = jsonScripts[i].textContent;
        // find "marketplace_product_details_page"
        if(fullText.includes('marketplace_product_details_page')){
            jsonDatas.push(JSON.parse(fullText));
            // break;
        }
    }
    if(jsonDatas.length>0){ 
        jsonDatas.length>1?jsonData = jsonDatas[1]:jsonData = jsonDatas[0];
        const findNestedKeyValue = (obj, targetKey)=>{
            for (const key in obj) {
              if (obj.hasOwnProperty(key)) {
                const value = obj[key];
                if (key === targetKey) {
                  return value;
                } else if (typeof value === 'object') {
                  const result = findNestedKeyValue(value, targetKey);
                  if (result !== undefined) {
                    return result;
                  }
                }
              }
            }
            return undefined;
        }
        
        const stateConverter = (shortState)=>{
            // var shortStates = ['WI','IL','TN','MS','AL','FL','GA','SC','NC','KY','VA','IN','MI','OH','PA','NY','ME','NH','VT','MA','RI','CT','NJ','DE','MD','WV'];
            var shortStates = ['WI','IL','TN','FL','GA','SC','NC','KY','VA','IN','MI','OH','PA','NY','ME','NH','VT','MA','RI','CT','NJ','DE','MD','WV','MN',"IA","MO","AR","TX","OK",'KS','ND'];
            var states = ['Wisconsin','Illinois','Tennessee','Florida','Georgia','South Carolina','North Carolina','Kentucky','Virginia','Indiana','Michigan','Ohio','Pennsylvania','New York','Maine','New Hampshire','Vermont','Massachusetts','Rhode Island','Connecticut','New Jersey','Delaware','Maryland','West Virginia','Minnesota','Iowa','Missouri','Arkansas','Texas','Oklahoma','Kansas','North Dakota'];
            // var states = ['Wisconsin','Illinois','Tennessee','Mississippi','Alabama','Florida','Georgia','South Carolina','North Carolina','Kentucky','Virginia','Indiana','Michigan','Ohio','Pennsylvania','New York','Maine','New Hampshire','Vermont','Massachusetts','Rhode Island','Connecticut','New Jersey','Delaware','Maryland','West Virginia'];
            // var states = ['Minnesota','Iowa','Missouri','Arkansas','Texas'];
            return shortStates.indexOf(shortState)==-1?shortState:states[shortStates.indexOf(shortState)];
        };
        const timeStampConverter = (timeStamp)=>{
            return (new Date(timeStamp)).toLocaleString('en-US', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                timeZoneName: 'short',
                hour12: false,
              });
        };
        const marketplaceProductDetailsPage = findNestedKeyValue(jsonData, 'marketplace_product_details_page');
        if(marketplaceProductDetailsPage) {
            const item = marketplaceProductDetailsPage.target;
            const yearName = (item.custom_title || item.marketplace_listing_title).replace(/(^SUV )|(^CAR )/g,'');
            const year = yearName.match(/^\d{4}/).toString();
            const name = yearName.replace(/^\d{4}/, '').trim();
            const price = item.listing_price.amount.replace('.00', '');
            const cityState = item.location_text.text;
            const city = (cityState.split(',').length==1?"":cityState.split(',')[0]).trim();
            const state = stateConverter(cityState.split(',').length==1?cityState.split(',')[0].trim():cityState.split(',')[1].trim());
            const mileage = item.vehicle_odometer_data.value.toString();
            const seller = item.marketplace_listing_seller.name;
            const seller_id = item.marketplace_listing_seller.id;
            const number = item.id;
            const data = {
                year: year.replace(/,/g, ""),
                name: name.replace(/,/g, ""),
                price: price.replace(/,/g, ""),
                city: city.replace(/,/g, ""),
                state: state.replace(/,/g, ""),
                mileage: mileage.replace(/,/g, ""),
                seller: seller.replace(/,/g, ""),
                time: seller_id,
                number: number,
                status:'done'
            }
            console.log(data);
            return data;
        }else{
            console.log('marketplace_product_details_page not found')
            return null;
        }
    }else{
        console.log('script not found')
        return null;
    }
    
    



};

const getItemInformationFromMarketplaceItemPageBySelector = async ()=>{
    document.getElementById("ex_console_div").style.backgroundColor = "green";
    const stateConverter = (shortState)=>{
        // var shortStates = ['WI','IL','TN','MS','AL','FL','GA','SC','NC','KY','VA','IN','MI','OH','PA','NY','ME','NH','VT','MA','RI','CT','NJ','DE','MD','WV'];
        var shortStates = ['WI','IL','TN','FL','GA','SC','NC','KY','VA','IN','MI','OH','PA','NY','ME','NH','VT','MA','RI','CT','NJ','DE','MD','WV','MN',"IA","MO","AR","TX","OK",'KS','ND'];
        var states = ['Wisconsin','Illinois','Tennessee','Florida','Georgia','South Carolina','North Carolina','Kentucky','Virginia','Indiana','Michigan','Ohio','Pennsylvania','New York','Maine','New Hampshire','Vermont','Massachusetts','Rhode Island','Connecticut','New Jersey','Delaware','Maryland','West Virginia','Minnesota','Iowa','Missouri','Arkansas','Texas','Oklahoma','Kansas','North Dakota'];
        // var states = ['Wisconsin','Illinois','Tennessee','Mississippi','Alabama','Florida','Georgia','South Carolina','North Carolina','Kentucky','Virginia','Indiana','Michigan','Ohio','Pennsylvania','New York','Maine','New Hampshire','Vermont','Massachusetts','Rhode Island','Connecticut','New Jersey','Delaware','Maryland','West Virginia'];
        // var states = ['Minnesota','Iowa','Missouri','Arkansas','Texas'];
        return shortStates.indexOf(shortState)==-1?shortState:states[shortStates.indexOf(shortState)];
    };

    let yearName = await getElementBySelector({
        parent: null,
        data: {
            type: 'querySelectorAll',
            selector: "h1 span",
            isMonoExpected: false,
            validator: (element)=>{
                // starts with year 
                return element.innerText.match(/^\d{4}/);
            }
        },
        instant: false,
        maxTimeOut: 10,
        required: false,
        name: 'yearName'
    });
    yearName = yearName[0]
    const soldElm = await getElementBySelector({
        parent: null,
        data: {
            type: 'querySelectorAll',
            selector: "h1 span",
            isMonoExpected: true,
            validator: (element)=>{
                // starts with year 
                return element.innerText.trim() == "Sold";
            }
        },
        instant: true,
        required: false,
        name: 'isSold'
    })
    if(soldElm){
        return {
            status: "skip"
        }
    }
    if(yearName==null) return null;
    
    const parent = yearName.parentElement.parentElement.parentElement.parentElement;
    const year = yearName.innerText.match(/^\d{4}/).toString();
    const name = yearName.innerText.replace(/^\d{4}/, '').trim();
    const price = await getElementBySelector({
        parent: parent,
        data: {
            type: 'querySelectorAll',
            // span that has only text no child elements
            selector: "span:not(:has(*)):not(:empty)",
            isMonoExpected: true,
            validator: (element)=>{
                // starts with $
                return element.innerText.trim().match(/^\$/);
            }
        },
        instant: true,
        required: false,
        name: 'price'
    });
    if(price==null) return null;
    const priceText = price.innerText.replace(/^\$/, '').replace(/,/g, '');
    // Farmington, NY city state
    let cityState = await getElementBySelector({
        parent: parent,
        data: {
            type: 'querySelectorAll',
            selector: "span:not(:has(*)):not(:empty)",
            isMonoExpected: false,
            validator: (element)=>{
                // contains city and state in th end
                return element.innerText.match(/,\s[A-Z]{2}$/);
            }
        },
        instant: true,
        required: false,
        name: 'cityState'
    });
    if(cityState==null) return null;
    cityState = cityState[0];
    const cityStateText = cityState.innerText;
    const city = (cityStateText.split(',').length==1?"":cityStateText.split(',')[0]).trim();
    const state = (cityStateText.split(',').length==1?cityStateText.split(',')[0].trim():cityStateText.split(',')[1].trim()).replace(/,/g, "");
    // Driven 149,027 miles
    const mileage = await getElementBySelector({
        parent: parent,
        data: {
            type: 'querySelectorAll',
            selector: "span:not(:has(*)):not(:empty)",
            isMonoExpected: true,
            validator: (element)=>{
                console.log(element)
                // contains Driven
                return element.innerText.match(/Driven/);
            }
        },
        instant: true,
        required: false,
        name: 'mileage'
    });
    if(mileage==null) return null;
    const mileageText = mileage.innerText.replace('Driven', '').replace(/,/g, '').replace('miles', '').trim();
    //a href="/marketplace/profile/692297852/?product_id=1858734591608839" > span {seller name}
    const seller = await getElementBySelector({
        parent: parent,
        data: {
            type: 'querySelectorAll',
            // a href starts with /marketplace/profile/692297852/?product_id=
            selector: "a[href^='/marketplace/profile/']>span:not(:has(*)):not(:empty)",
            isMonoExpected: true,
            validator: (element)=>{
                // contains profile
                // has innerText
                // not Seller details innerText
                return element.innerText.trim() != "Seller details";
            }
        },
        instant: true,
        required: false,
        name: 'seller'
    });
    if(seller==null) return null;
    const sellerText = seller.innerText.trim();
    // seller id
    console.log(seller.parentElement.getAttribute("href"));
    console.log(seller.parentElement.getAttribute("href").split('/'));

    const seller_id = seller.parentElement.getAttribute("href").split('/')[3];
    // number
    const number = window.location.href.split('/')[5];



    // return

    const data = {
        year: year.replace(/,/g, ""),
        name: name.replace(/,/g, ""),
        price: priceText.replace(/,/g, ""),
        city: city.replace(/,/g, ""),
        state: stateConverter(state.replace(/,/g, ""),),
        mileage: mileageText.replace(/,/g, ""),
        seller: sellerText.replace(/,/g, ""),
        time: seller_id,
        number: number,
        status:'done'
    }
    // check if any key is null
    for(let key in data){
        if(data[key]==null){
            console.log(key+' is null');
            return null;
        }
    }
    return data;
};
// async function scrapingLevelZero(index,number){
//     $all_holder = $('[name=google-site-verification').parent().children().eq(index).children('div').children().eq(1).children('div').children('div').eq(0).children('div').eq(0).children();
//     data_price = $all_holder.eq(0).find('.d2edcug0.hpfvmrgz.qv66sw1b.c1et5uql.lr9zc1uh.a8c37x1j.keod5gw0.nxhoafnm.aigsh9s9.d3f4x2em.fe6kdd0r.mau55g9w.c8b282yb.mdeji52x.a5q79mjw.g1cxx5fr.lrazzd5p.oo9gr5id').eq(0).text();
//     data_price = data_price.match(/\d/g).join("") + '';
//     data_vehicle = $all_holder.eq(0).find('.d2edcug0.hpfvmrgz.qv66sw1b.c1et5uql.lr9zc1uh.a8c37x1j.keod5gw0.nxhoafnm.aigsh9s9.qg6bub1s.fe6kdd0r.mau55g9w.c8b282yb.iv3no6db.o0t2es00.f530mmz5.hnhda86s.oo9gr5id').eq(0).text();
//     data_year = data_vehicle.match(/^\d+|\d+\b|\d+(?=\w)/g)[0] + '';
//     data_vehicle = data_vehicle.replace(data_year + '', '').trim();
//     data_vehicle = data_vehicle.replace(/,/g, " ");
//     data_state = $all_holder.eq(0).find('a').text().replace('Vehicles', '');
//     data_time = $all_holder.eq(0).find('a').parent().text();
//     data_time = data_time.replace(data_state, '').replace('VehiclesListed', '').replace('Listed', '').replace('ago', '').replace(' in', '').trim();
//     data_seller = $all_holder.eq($all_holder.length - 1).find('.d2edcug0.hpfvmrgz.qv66sw1b.c1et5uql.lr9zc1uh.jq4qci2q.a3bd9o3v.lrazzd5p.oo9gr5id').text();
//     data_mileage = $all_holder.find('.hpfvmrgz.g5gj957u.buofh1pr.rj1gh0hx.o8rfisnq > .d2edcug0.hpfvmrgz.qv66sw1b.c1et5uql.lr9zc1uh.a8c37x1j.keod5gw0.nxhoafnm.aigsh9s9.d3f4x2em.fe6kdd0r.mau55g9w.c8b282yb.iv3no6db.jq4qci2q.a3bd9o3v.b1v8xokw.oo9gr5id').eq(0).text();
//     address = data_state.replace(/,/g, '');
//     address1 = address.split(' ');
//     data_state = address1[address1.length - 1];
//     data_city = address.replace(' ' + data_state, '');
//     data_mileage = data_mileage.replace('Driven', '').replace(/,/g, '').replace('miles', '').trim();
//     return {
//         'city':data_city,
//         'mileage':data_mileage,
//         'name':data_vehicle,
//         'number':number,
//         'price':data_price,
//         'seller':data_seller,
//         'state':await stateConverter(data_state),
//         'status': 'done',
//         'time': await referenceToTimeStamp(data_time),
//         'year': data_year
//     }
// }
async function timeStampTOReference(timeStamp){
    diff = moment().diff(moment(timeStamp),'y');
    if(diff!=0) return 'Listed '+diff+' years ago';
    diff = moment().diff(moment(timeStamp),'w');
    if(diff!=0) return 'Listed '+diff+' weeks ago';
    diff = moment().diff(moment(timeStamp),'d');
    if(diff!=0) return 'Listed '+diff+' days ago';
    diff = moment().diff(moment(timeStamp),'h');
    if(diff!=0) return 'Listed '+diff+' hours ago';
    diff = moment().diff(moment(timeStamp),'m');
    if(diff!=0) return 'Listed '+diff+' minutes ago';
    return 'Listed Few moments ago';
}
async function referenceToTimeStamp(reference){
    digit =1;
    if(reference.replace ( /[^\d.]/g,'')!=''){
        digit = parseInt(reference.replace ( /[^\d.]/g,''));
    }
    subtractKey = 's';
    if(reference.includes('minute')){
        subtractKey = 'm';
    }else if(reference.includes('hour')){
        subtractKey = 'h';
    }else if(reference.includes('day')){
        subtractKey = 'd';
    }else if(reference.includes('week')){
        subtractKey = 'w';
    }else if(reference.includes('year')){
        subtractKey = 'y';
    }
    return moment().subtract(digit, subtractKey).format();
}
async function stateConverter(shortState){
    // var shortStates = ['WI','IL','TN','MS','AL','FL','GA','SC','NC','KY','VA','IN','MI','OH','PA','NY','ME','NH','VT','MA','RI','CT','NJ','DE','MD','WV'];
    var shortStates = ['WI','IL','TN','MS','AL','FL','GA','SC','NC','KY','VA','IN','MI','OH','PA','NY','ME','NH','VT','MA','RI','CT','NJ','DE','MD','WV','MN',"IA","MO","AR","TX","OK",'KS','ND'];
    var states = ['Wisconsin','Illinois','Tennessee','Mississippi','Alabama','Florida','Georgia','South Carolina','North Carolina','Kentucky','Virginia','Indiana','Michigan','Ohio','Pennsylvania','New York','Maine','New Hampshire','Vermont','Massachusetts','Rhode Island','Connecticut','New Jersey','Delaware','Maryland','West Virginia','Minnesota','Iowa','Missouri','Arkansas','Texas','Oklahoma','Kansas','North Dakota'];
    // var states = ['Wisconsin','Illinois','Tennessee','Mississippi','Alabama','Florida','Georgia','South Carolina','North Carolina','Kentucky','Virginia','Indiana','Michigan','Ohio','Pennsylvania','New York','Maine','New Hampshire','Vermont','Massachusetts','Rhode Island','Connecticut','New Jersey','Delaware','Maryland','West Virginia'];
    // var states = ['Minnesota','Iowa','Missouri','Arkansas','Texas'];
    return shortStates.indexOf(shortState)==-1?shortState:states[shortStates.indexOf(shortState)];
}
async function currentScrapingIndex(){
    var ex_listed = await getStorageSingleData('ex_listed');
    var total = ex_listed.length;
    var index=null;
    for(i=0;i<total;i++){
        if(ex_listed[i].status==''){
            index = i;
            break;
        }
    }
    return index;
}
async function skipCurrentProductScraping(){
    var ex_listed = await getStorageSingleData('ex_listed');
    var total = ex_listed.length;
    var i=0;//have great reason
    for(i;i<total;i++){
        if(ex_listed[i].status==''){
            ex_listed[i].status = 'skip';
            await setStorageSingleData('ex_listed',ex_listed);
            break;
        }
    }
    await ex_redirection('https://www.facebook.com/','to home page just skipped an item');
}
async function skipRestProductScraping(){
    var ex_listed = await getStorageSingleData('ex_listed');
    var total = ex_listed.length;
    for(i=0;i<total;i++){
        if(ex_listed[i].status==''){
            ex_listed[i].status = 'skip';
        }
    }
    await setStorageSingleData('ex_listed',ex_listed);
    await ex_redirection('https://www.facebook.com/','to home page just skipped all items');
}
async function isUrlIncludesUnavailavle(){
    return window.location.href.includes('unavailable_product');
}
async function dataCollectionProcessListing(){
    await pageBypassWork('productListing');
    // var ex_collected = await getStorageSingleData('ex_collected');
    // var ex_workId = await getStorageSingleData('ex_workId');
    // await $.ajax({
    //     type: 'post',
    //     url: webApiUrl(),
    //     dataType: 'json',
    //     data: {
    //         action: 'productListing',
    //         info: {
    //             numbers: ex_collected,
    //             workId: ex_workId
    //         }
    //     },
    //     success: async function (response) {
    //         if(response.type=='success'){
    //             await setStorageSingleData('ex_listed',response.info);
    //             var ex_area = await getStorageSingleData('ex_area');
    //             ex_area.status = 'listed';
    //             await setStorageSingleData('ex_area',ex_area);
    //             await ex_redirection('https://www.facebook.com/','Redirection to Home just Listed');
    //             await setStorageSingleData('ex_collected',null);
    //         }else if(response.type=='error'){
    //             await showHTMLOnContentConsole('SERVER:'+response.message);
    //         }

    //     },
    //     error: async function()
    //     {
    //         await showHTMLOnContentConsole('communication error');
    //     }
    // });
}
async function dataCollectionProcessCollection(){
    const facebookCollectionUrls = await getCollectionModeUrls();
    if(await isCollectingPageUrl()){
        const alreadyCollected = await getStorageSingleData('ex_collected');
        let currentLocationIndex = await getStorageSingleData('currentLocationIndex');
        
        await showHTMLOnContentConsole(`<div class="consoleAlert">already collected : ${alreadyCollected==null?'0':alreadyCollected.length}</div>`);
        await showHTMLOnContentConsole(`<div class="consoleAlert">current index : ${facebookCollectionUrls.indexOf(window.location.href)}</div>`);
        await showHTMLOnContentConsole(`<div class="consoleAlert">local db locationindex: ${currentLocationIndex}</div>`);
        await showHTMLOnContentConsole('<div class="consoleAlert">wait..plugin will scroll</div>');
        await scrollPage();
        await collectDataFromPage();
    }else{
        let currentLocationIndex = await getStorageSingleData('currentLocationIndex');
        await ex_redirection(facebookCollectionUrls[currentLocationIndex],'Redirection to listing Url to make list');
    }
}
function isValidListing(item,index) {
        // console.log(index,item)
        const dealerShip = item.innerText.search('Dealership');
        if (dealerShip != -1) {
            console.log("dealership")
            return false;
        }
        // const details = item.querySelectorAll("span:not(:has(*)):not(:empty)");
        // if (details.length >= 4) {
        //     console.log("not 4 line details")
        //     return false;
        // }
        // // const [priceText, yearNameText, stateCityText, mileageText] = details.map(elm => elm.innerText);
        // let priceText, yearNameText, stateCityText, mileageText;
        // if(details.length==4){
        //     [priceText, yearNameText, stateCityText, mileageText] = Array.from(details).map(elm => elm.innerText);
        // }else{
        //     [priceText, ,yearNameText, stateCityText, mileageText] = Array.from(details).map(elm => elm.innerText);
        // }
        // const price = priceText.replace('$', '').replace(',', '')
        // // yearNameText = 2012 Land Rover range rover evoque
        // const year = yearNameText.match(/^\d{4}/);
        // const make = yearNameText.replace(/^\d{4}/, '').trim().split(" ")[0];
        // const state = stateCityText.split(',')[1].trim();
        // // 77K miles
        // const mileage = mileageText.match(/\d+/)[0] * 1000;

        // const validStates = ['WI', 'IL', 'TN', 'MS', 'AL', 'FL', 'GA', 'SC', 'NC', 'KY', 'VA', 'IN', 'MI', 'OH', 'PA', 'NY', 'ME', 'NH', 'VT', 'MA', 'RI', 'CT', 'NJ', 'DE', 'MD', 'WV', 'MN', "IA", "MO", "AR", "TX", "OK", 'KS', 'ND'];
        // const validMakes = [
        //     "BUICK",
        //     "CHEVROLET",
        //     "CHEVY",
        //     "CHRYSLER",
        //     "FIAT",
        //     "FORD",
        //     "GMC",
        //     "HONDA",
        //     "HYUNDAI",
        //     "JEEP",
        //     "KIA",
        //     "LINCOLN",
        //     "MAZDA",
        //     "MITSUBISHI",
        //     "NISSAN",
        //     "RAM",
        //     "SCION",
        //     "SMART",
        //     "SUBARU",
        //     "TOYOTA",
        //     "VOLKSWAGEN"
        // ];

        // // 10000-120000 mileage
        // // 5000 - 50000 price
        // // 2016 - 2025 year
        // if (price < 5000 || price > 50000) {
        //     console.log("invalid price")
        //     return false;
        // }
        // if (year < 2016 || year > 2025) {
        //     console.log("invalid year")
        //     return false;
        // }
        // if (mileage < 10000 || mileage > 120000) {
        //     console.log("invalid mileage")
        //     return false;
        // }
        // if (!validMakes.includes(make.toUpperCase())) {
        //     console.log("invalid make")
        //     return false;
        // }
        // if (!validStates.includes(state)) {
        //     console.log("invalid state")
        //     return false;
        // }

        // console.log(item)
        return true;
    }
function isSpecifiedState(shortForm) {
        const shortStates = ['WI', 'IL', 'TN', 'MS', 'AL', 'FL', 'GA', 'SC', 'NC', 'KY', 'VA', 'IN', 'MI', 'OH', 'PA', 'NY', 'ME', 'NH', 'VT', 'MA', 'RI', 'CT', 'NJ', 'DE', 'MD', 'WV', 'MN', "IA", "MO", "AR", "TX", "OK", 'KS', 'ND'];
        const states = ['Wisconsin', 'Illinois', 'Tennessee', 'Mississippi', 'Alabama', 'Florida', 'Georgia', 'South Carolina', 'North Carolina', 'Kentucky', 'Virginia', 'Indiana', 'Michigan', 'Ohio', 'Pennsylvania', 'New York', 'Maine', 'New Hampshire', 'Vermont', 'Massachusetts', 'Rhode Island', 'Connecticut', 'New Jersey', 'Delaware', 'Maryland', 'West Virginia', 'Minnesota', 'Iowa', 'Missouri', 'Arkansas', 'Texas', 'Oklahoma', 'Kansas', 'North Dakota'];
        return shortStates.includes(shortForm) || states.includes(shortForm);
}
async function collectDataFromPage(){
    const facebookCollectionUrls = await getCollectionModeUrls();
    try{
        //    var items = $('#ssrb_feed_start').parent().children('div').children().last().children().children().last().children();
        let items = document.querySelectorAll('[href^="/marketplace/item"]'); 
        let numbers = (await getStorageSingleData('ex_collected'))==null?[]:await getStorageSingleData('ex_collected');
        console.log(`total items: ${items.length}`);
        for(i=0;i<items.length;i++){
            if(isValidListing(items[i],i)){
                numbers.push(items[i].getAttribute('href').split('/')[3]);
            }
        }
        numbers = [...new Set(numbers)];

        
        console.log(`total collected: ${numbers.length}`);
        // throw new Error('test');
        await setStorageSingleData('ex_collected',numbers);
        const currentDirectoryIndex = facebookCollectionUrls.indexOf(window.location.href);
        await setStorageSingleData('currentLocationIndex',currentDirectoryIndex);
        if(currentDirectoryIndex==facebookCollectionUrls.length-1){
            var ex_area = await getStorageSingleData('ex_area');
            ex_area.status = 'collected';
            await setStorageSingleData('ex_area',ex_area);
            await setStorageSingleData('currentLocationIndex',0);
            await ex_redirection('https://www.facebook.com/','Redirection to home need to upload collected'); 
        }else{
            console.log('redirecting to another collection url');
            let currentLocationIndex = await getStorageSingleData('currentLocationIndex');
            await ex_redirection(facebookCollectionUrls[currentLocationIndex+1],(currentLocationIndex+1)+' Redirection to next page');
        }
        
    }catch(e){
        console.log(e);
        // throw new Error(e);
        if(noProductSelector().text().includes('There are currently no products in your area'))
        await showHTMLOnContentConsole('empty');
        await setEmptyAreaWebDb();
    }
    
}

async function scrollPage(){

    await ex_sleep(5000);
    var attemptCount = 0;
    let totalTry = 0;

    const collectionMode =  await getStorageSingleData('ex_mode')||"all";
    const maxAttempt = collectionMode=="all"?300:collectionMode=="byType"?150:30;
    // while(listingEndingDefineSelector().length!=0){
    while(true){
        totalTry++;
        // if(temporaryBlockCrossSelector().length!=0){
        //     temporaryBlockCrossSelector().click();
        //     attemptCount++;
        //     if(attemptCount>10){
        //         await setStorageSingleData('ex_id',null);
        //         await userLogout();
        //         await ex_redirection('https://www.facebook.com/','redirect to homepage for logout disabled');
        //         await ex_sleep(2000);
        //     }
        // }
        // COLLECT WHILE SCROLLING START
        const  items = document.querySelectorAll('[href^="/marketplace/item"]'); 
        let numbers = (await getStorageSingleData('ex_collected'))==null?[]:await getStorageSingleData('ex_collected');
        console.log(`total items: ${items.length}`);
        for(i=0;i<items.length;i++){
            if(isValidListing(items[i],i)){
                numbers.push(items[i].getAttribute('href').split('/')[3]);
            }
        }
        numbers = [...new Set(numbers)];
        // console.log(`total collected: ${numbers.length}`);
        showDataOnConsoleDynamic(`total collected: ${numbers.length}`)
        await setStorageSingleData('ex_collected',numbers);
        // COLLECT WHILE SCROLLING END
        await ex_sleep(1000);
        document.documentElement.scrollTop+=1000;
        if(totalTry>maxAttempt){
            break;
        }
    }
    console.log('scrolling done');
}
async function isCollectingPageUrl(){
    const facebookCollectionUrls = await getCollectionModeUrls();
    return (facebookCollectionUrls.indexOf(window.location.href)!=-1)
}
async function collectingPageUrl(){
    var ex_area = await getStorageSingleData('ex_area');
    return 'https://www.facebook.com/marketplace/'+ex_area.urlKey+'/vehicles?minPrice=5000&maxPrice=50000&maxMileage=120000&maxYear=2025&minMileage=10000&minYear=2016&sortBy=creation_time_descend&exact=true';
}
async function areaVerification(){
    await ex_sleep(5000);
    var ex_area = await getStorageSingleData('ex_area');
    var nameOnPage = mapConfigurationMainButtonSelector().text().split('·')[0].trim();
    var nameSupposedTo = ex_area.name;
    var radiusOnPage = mapConfigurationMainButtonSelector().text().split('·')[1].trim();
    var radiusSupposedTo = 'Within '+ex_area.radius+' mi';
    if(radiusOnPage == radiusSupposedTo && nameOnPage == nameSupposedTo)
    {
        ex_area.verified = true;
        await setStorageSingleData('ex_area',ex_area);
        ex_redirection('https://www.facebook.com/','to home page.. just verified area');
    }else{
        if(radiusOnPage != radiusSupposedTo){
            console.log(`radius mismatch: ${radiusOnPage} != ${radiusSupposedTo}`);
            await showHTMLOnContentConsole('radius mismatch'); 
        }
        if(nameOnPage != nameSupposedTo){
            console.log(`name mismatch: ${nameOnPage} != ${nameSupposedTo}`);
            await showHTMLOnContentConsole('name mismatch');
        }
        await showHTMLOnContentConsole('<input value="'+ex_area.name+'">');
        await showHTMLOnContentConsole('<input value="'+ex_area.radius+'">');
        await showHTMLOnContentConsole('set the name and miles...then refresh');
        // await setSkipAreaWebDb();
    }
    
}
async function setSkipAreaWebDb(){
    await pageBypassWork('setSkipAreaWebDb');
    // var ex_area = await getStorageSingleData('ex_area');
    // await $.ajax({
    //     type: 'post',
    //     url: webApiUrl(),
    //     dataType: 'json',
    //     data: {
    //         action: 'setSkipAreaWebDb',
    //         info: {
    //             radius: ex_area.radius,
    //             urlKey: ex_area.urlKey,
    //         }
    //     },
    //     success: async function (response) {
    //         if(response.type=='success'){
    //             await setStorageSingleData('ex_area',null);
    //             ex_redirection('https://www.facebook.com/','to home page.. just skipped the area');
    //         }else{
    //             await showHTMLOnContentConsole('server error');
    //         }
    
    //     },
    //     error: async function()
    //     {
    //         await showHTMLOnContentConsole('communication error');
    //     }
    // });
}
async function setEmptyAreaWebDb(){
    await pageBypassWork('setEmptyAreaWebDb');
    // var ex_area = await getStorageSingleData('ex_area');
    // await $.ajax({
    //     type: 'post',
    //     url: webApiUrl(),
    //     dataType: 'json',
    //     data: {
    //         action: 'setEmptyAreaWebDb',
    //         info: {
    //             radius: ex_area.radius,
    //             urlKey: ex_area.urlKey,
    //         }
    //     },
    //     success: async function (response) {
    //         if(response.type=='success'){
    //             await setStorageSingleData('ex_area',null);
    //             ex_redirection('https://www.facebook.com/','to home page.. just got empty the area');
    //         }else{
    //             await showHTMLOnContentConsole('server error');
    //         }
    
    //     },
    //     error: async function()
    //     {
    //         await showHTMLOnContentConsole('communication error');
    //     }
    // });
}
async function areaChange(){
    await showHTMLOnContentConsole('<div class="consoleAlert">Wait..plugin changing miles</div>');
    await ex_sleep(10000);
    var miles = mapConfigurationMainButtonSelector().text().split('·')[1].includes(' mi');
    var kilometers = mapConfigurationMainButtonSelector().text().split('·')[1].includes('kilometer') || mapConfigurationMainButtonSelector().text().split('·')[1].includes('kilometres');
    if(miles){
        console.log('miles');
        mapConfigurationMainButtonSelector().click();
        await ex_sleep(5000);
        mapConfigurationMilesMainButtonSelector().click();
        await ex_sleep(5000);
        var ex_area = await getStorageSingleData('ex_area');
        console.log(ex_area.radius)
        console.log(milesToAreaButtonNumber(ex_area.radius))
        console.log(mapConfigurationMilesButtonSelector());
        console.log(mapConfigurationMilesButtonSelector()[milesToAreaButtonNumber(ex_area.radius)]);
        mapConfigurationMilesButtonSelector()[milesToAreaButtonNumber(ex_area.radius)].click();
        console.log(mapConfigurationMilesButtonSelector()[milesToAreaButtonNumber(ex_area.radius)]);
        await ex_sleep(5000);
        mapConfigugationMilesSubmitButtonSelector().click();
    }else if(kilometers){
        console.log('kilometers');
        mapConfigurationMainButtonSelector().click();
        await ex_sleep(5000);
        mapConfigurationMilesMainButtonSelector().click();
        await ex_sleep(5000);
        mapConfigurationMilesButtonSelector()[0].click();
        await ex_sleep(5000);
        mapConfigugationMilesSubmitButtonSelector().click();

        await ex_sleep(5000);
        mapConfigurationMainButtonSelector().click();
        await ex_sleep(5000);
        mapConfigugationMilesSubmitButtonSelector().click();

        await ex_sleep(5000);
        mapConfigurationMainButtonSelector().click();
        await ex_sleep(5000);
        mapConfigugationMilesSubmitButtonSelector().click();

        await ex_sleep(5000);
        mapConfigurationMainButtonSelector().click();
        await ex_sleep(5000);
        mapConfigurationMilesMainButtonSelector().click();
        await ex_sleep(5000);
        var ex_area = await getStorageSingleData('ex_area');
        mapConfigurationMilesButtonSelector()[milesToAreaButtonNumber(ex_area.radius)].click();
        await ex_sleep(5000);
        mapConfigugationMilesSubmitButtonSelector().click();
    }else{
        await showHTMLOnContentConsole('<div class="consoleAlert">km/mi issue</div>');
        throw new Error('miles or kilometers not found');
    }
    
}
function milesToAreaButtonNumber(miles){
    switch(miles){
        case '1':
            return 0;
        break;
        case '2':
            return 1;
        break;
        case '5':
            return 2;
        break;
        case '10':
            return 3;
        break;
        case '20':
            return 4;
        break;
        case '40':
            return 5;
        break;
        case '60':
            return 6;
        break;
        case '80':
            return 7;
        break;
        case '100':
            return 8;
        break;
        case '250':
            return 9;
        break;
        case '500':
            return 10;
        break;

    }
}
async function marketPlaceUrl(){
    var ex_area = await getStorageSingleData('ex_area');
    return 'https://www.facebook.com/marketplace/'+ex_area.urlKey;
}
async function isMarketPlaceUrl(){
    return (await marketPlaceUrl())==window.location.href;
}
async function isAreaVerified(){
    var ex_area = await getStorageSingleData('ex_area');
    return ex_area.verified;
}
async function playSound(){
    // var myAudio = new Audio(chrome.runtime.getURL("notify.mp3"));
    // myAudio.play();
}
async function getAreaFromWebStorage(){
    await pageBypassWork('getAreaForCurrentInfo');
    // var ex_user = await getStorageSingleData('ex_user');
    // var ex_slot = await getStorageSingleData('ex_slot');
    // var ex_workId = await getStorageSingleData('ex_workId');
    // await $.ajax({
    //     type: 'post',
    //     url: webApiUrl(),
    //     dataType: 'json',
    //     data: {
    //         action: 'getAreaForCurrentInfo',
    //         info: {
    //             user: ex_user,
    //             slot: ex_slot,
    //             workId: ex_workId,
    //         }
    //     },
    //     success: async function (response) {
    //         if(response.type=='success'){
    //             var urlKey = response.info.urlKey;
    //             var radius = response.info.radius;
    //             var name = response.info.name;
    //             await setStorageSingleData('ex_area',{'urlKey': urlKey,'radius': radius,'name': name,'status': 'selected','verified': false});
    //             console.log(await getStorageSingleData('ex_area'));
    //         }else if(response.type=='error'){
    //             await showHTMLOnContentConsole('Server:'+response.message);
    //         }else{
    //             await showHTMLOnContentConsole('server error');
    //         }
    
    //     },
    //     error: async function()
    //     {
    //         await showHTMLOnContentConsole('communication error');
    //     }
    // });
}
async function localStorageGotArea(){
    var ex_area = await getStorageSingleData('ex_area');
    return ex_area==null?false:true;
}
async function notReadyToGo(){
    var initialDatas = await getInitialStorageDatas();
    var ex_switch = initialDatas['ex_switch'];
    var ex_user = initialDatas['ex_user'];
    var ex_slot = initialDatas['ex_slot'];
    var ex_mode = initialDatas['ex_mode'];
    var ex_workId = initialDatas['ex_workId'];
    var ex_apiUrl = initialDatas['ex_apiUrl'];
    return (!ex_switch || !ex_user || !ex_slot || !ex_workId || !ex_apiUrl || !ex_mode)
}
async function idGotDisabled(){
    if(await localStorageGotId()){
        await setCurrentIdDisableWebStorage();
        await ex_sleep(2000);
        await setStorageSingleData('ex_id',null);
        await userLogout();
        await ex_redirection('https://www.facebook.com/','redirect to homepage for logout disabled');
    }
}
async function idGotTemporarilyBlocked(){
    if(await localStorageGotId()){
        // await setCurrentIdDisableWebStorage();
        await ex_sleep(2000);
        await setStorageSingleData('ex_id',null);
        await ex_redirection('https://www.facebook.com/','redirect to homepage for logout disabled');
        await userLogout();
    }
}
async function userLogout(){
    await sendActionTOBackground('userLogout');
}
async function sendActionTOBackground(action){
    console.log('lol')
    return new Promise((resolve,reject)=>{
        chrome.runtime.sendMessage({action: action}, function(response) {
            resolve();
        });
    });
}
async function setCurrentIdDisableWebStorage(){
    await pageBypassWork('setIdToDisabledForUser');
    // var ex_user = await getStorageSingleData('ex_user');
    // var ex_id = await getStorageSingleData('ex_id');
    // await $.ajax({
    //     type: 'post',
    //     url: webApiUrl(),
    //     dataType: 'json',
    //     data: {
    //         action: 'setIdToDisabledForUser',
    //         info: {
    //             user: ex_user,
    //             email: ex_id.email,
    //             password: ex_id.password,
    //         }
    //     },
    //     success: async function (response) {
    //         if(response.type=='success'){
    //             await showHTMLOnContentConsole('ID status changed to disabled');
    //         }else if(response.type=='error'){
    //             await showHTMLOnContentConsole('SERVER:'+response.message);
    //         }
    //     },
    //     error: async function()
    //     {
    //         await showHTMLOnContentConsole('communication error');
    //     }
    // });
}
async function idDisabledCheck(){
    let url = window.location.href;
    let checkpoint = url.includes('checkpoint');
    let ineligible = url.includes('ineligible');
    let wrongPassword = url.includes('privacy_mutation_token');
    let confirmemail = url.includes('confirmemail');
    let deviceBased = url.includes('login/device-based/');
    return checkpoint || ineligible || wrongPassword ||confirmemail || deviceBased;
}
async function userLoginProcess(){
    if(await isCurrentUrlFacebookHomePage()){
        if(!await localStorageGotId()){
            await getIdFromWebStorage();
        }
        if(await localStorageGotId()){
            if(await loginFormVerified()){
                await autoLogin();
            }else{
                await showHTMLOnContentConsole('supposed to have a login form!');
                await ex_redirection('https://www.facebook.com/','redirect to homepage for loginForm');
            }
        }else{
            await showHTMLOnContentConsole('no id to work with!');
        }
    }else{
        await ex_redirection('https://www.facebook.com/','redirect to homepage for logging');
    }
}
async function autoLogin(){
    var ex_area = await getStorageSingleData('ex_area');
    if(ex_area!=null){
        ex_area.verified = false;
        await setStorageSingleData('ex_area',ex_area);
    }
    var data = await getStorageSingleData('ex_id');
    loginFromEmailInputSelector().val(data.email);
    loginFromPasswordInputSelector().val(data.password);
    loginFromSubmitButtonSelector()?.click();
    loginFromSubmitButtonLoginPageSelector()?.click();
}
async function loginFormVerified(){
    await showHTMLOnContentConsole('<div class="consoleAlert">Wait.plugin trying to login</div>');
    await ex_sleep(5000);
    var email = loginFromEmailInputSelector().prop("tagName").toLowerCase()=='input';
    var pass = loginFromPasswordInputSelector().prop("tagName").toLowerCase()=='input';
    var submit = loginFromSubmitButtonSelector().prop("tagName")?.toLowerCase()=='button' ||  loginFromSubmitButtonLoginPageSelector().prop("tagName")?.toLowerCase()=='button';
    return email && pass && submit;
}
async function ex_sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
async function webApiUrl(){
    // return 'https://taxi5.nl/wp-secure.php';
    // return 'https://giant-pumpkin.xentola.xyz';
    return await getStorageSingleData('ex_apiUrl');

}
async function getIdFromWebStorage(){
    await pageBypassWork('getIdForCurrentUser');
    // var ex_user = await getStorageSingleData('ex_user');
    // await $.ajax({
    //     type: 'post',
    //     url: webApiUrl(),
    //     dataType: 'json',
    //     data: {
    //         action: 'getIdForCurrentUser',
    //         info: {
    //             user: ex_user,
    //         }
    //     },
    //     success: async function (response) {
    //         if(response.type=='success'){
    //             var email = response.info.email;
    //             var password = response.info.password;
    //             setStorageSingleData('ex_id',{'email': email,'password': password});
    //         }else if(response.type=='actionNeeded'){
    //             if(response.message=='noAvailableId'){
    //                 await showIdStatusClearButton();
    //             }else{
    //                 await showHTMLOnContentConsole('Server:'+response.type);
    //                 await showHTMLOnContentConsole('Server:'+response.message);
    //             }
    //         }
    //         else if(response.type=='error'){
    //             await showHTMLOnContentConsole('Server:'+response.message);
    //         }else{
    //             await showHTMLOnContentConsole('server error');
    //         }
    
    //     },
    //     error: async function()
    //     {
    //         await showHTMLOnContentConsole('communication error');
    //     }
    // });
}
async function showIdStatusClearButton(){
    var content = '<button class="buttons" type="button" id="clearUsedStatusForUserButton">Clear Used Status</button>';
    await showHTMLOnContentConsole(content);
}
async function localStorageGotId(){
    var ex_id = await getStorageSingleData('ex_id');
    return ex_id==null?false:true;
}
async function ex_redirection(url,message){
    await showHTMLOnContentConsole('Redirection:'+url);
    await showHTMLOnContentConsole('Reason:'+message);
    if(await redirectionAllowed(message)){
        window.location.href=url;
    }else{
        await showRedirectionError();
    }
}
async function showRedirectionError(){
    var messages = await getStorageSingleData('ex_redirectionMessages');
    for(i=0;i<messages.length;i++){
        await showHTMLOnContentConsole(messages[i]);
    }
    await showHTMLOnContentConsole('<button type="button" class="buttons" id="clearErrorButton">Continue / Try again</button> ');
}
async function redirectionAllowed(message){
    var messages = await getStorageSingleData('ex_redirectionMessages');
    if(messages!=null){
        messages.unshift(message);
        messages = messages.slice(0,10);
        await setStorageSingleData('ex_redirectionMessages',messages)
        if(messages.length>5){
            if(messages[0]==message && messages[1]==message && messages[2]==message && messages[3]==message && messages[4]==message ){
                return false;
            }else{
                return true;
            }
        }else{
            return true;
        }
    }else{
        await setStorageSingleData('ex_redirectionMessages',[message])
        return true;
    }
}
async function isCurrentUrlFacebookHomePage(){
    return window.location.href=='https://www.facebook.com/' || window.location.href.includes('https://www.facebook.com/login')?true:false;
}
async function isUserLoggedIn(){
    return getCookie('c_user')==''?false:true;
    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }
}
async function eventListenerMethods(){
    $('body').on('click','#mainButtonSubmit',async function(){
        var ex_user = $('#mainInputuser').val();
        var ex_slot = $('#mainInputSlot').val();
        var ex_mode = $('#mainInputMode').val();
        var ex_workId = $('#mainInputWorkId').val();
        var ex_apiUrl = $('#mainInputApiUrl').val();
        await setStorageSingleData('ex_user',ex_user);
        await setStorageSingleData('ex_slot',ex_slot);
        await setStorageSingleData('ex_mode',ex_mode);
        await setStorageSingleData('ex_workId',ex_workId);
        await setStorageSingleData('ex_apiUrl',ex_apiUrl);
        await showHTMLOnContentConsole('data saved');
    });
    $('body').on('click','#removeAccount',async function(){
        await idGotDisabled();
    });
    // idGotTemporarilyBlocked
    $('body').on('click','#changeAccount',async function(){
        console.log('change account');
        await idGotTemporarilyBlocked();
    });
    $('body').on('click','#clearErrorButton',async function(){
        await setStorageSingleData('ex_redirectionMessages',null);
        await showHTMLOnContentConsole('error data cleared');
        await ex_redirection('https://www.facebook.com/','redirect to homepage to get login form');
    });
    // $('body').on('click','#clearUsedStatusForUserButton',async function(){
    //     var ex_user = await getStorageSingleData('ex_user');
    //     await $.ajax({
    //         type: 'post',
    //         url: webApiUrl(),
    //         dataType: 'json',
    //         data: {
    //             action: 'resetIdForCurrentUser',
    //             info: {
    //                 user: ex_user,
    //             }
    //         },
    //         success: async function (response) {
    //             if(response.type=='success'){
    //                 await showHTMLOnContentConsole('Ready to be used');
    //                 await ex_redirection('https://www.facebook.com/','redirect to homepage cause used Id are ready to use again');
    //             }else if(response.type=='error'){
    //                 await showHTMLOnContentConsole('Server:'+response.message);
    //             }else{
    //                 await showHTMLOnContentConsole('server error');
    //             }
        
    //         },
    //         error: async function()
    //         {
    //             await showHTMLOnContentConsole('communication error');
    //         }
    //     });
    // });
}
async function showHTMLOnContentConsole(content){
    $('#ex_console_div').append('<div>'+content+'</div>');
    document.getElementById("ex_console_div").scrollTop = document.getElementById("ex_console_div").scrollHeight+1000;
}
function showDataOnConsoleDynamic(data){
    const consoleBoardDynamic = document.getElementById('dynamic_section');
    consoleBoardDynamic.innerText = data;
    console.log(data);
}
async function showInitialInputForm(){
    var initialDatas = await getInitialStorageDatas();
    var ex_switch = initialDatas['ex_switch'];
    var ex_user = initialDatas['ex_user'];
    var ex_slot = initialDatas['ex_slot'];
    var ex_mode = initialDatas['ex_mode']
    var ex_workId = initialDatas['ex_workId'];
    var ex_apiUrl = initialDatas['ex_apiUrl'];
    content = '';
    if(ex_switch==null) {content += '<div>Turn on the main switch to start working</div>';}
    content += '<button type="button" class="buttons" id="removeAccount">remove Account</button>';
    content += '<button type="button" class="buttons" id="changeAccount">change Account</button>';
    content += '<div><input type="text" class="inputFields" id="mainInputuser" value="'+ex_user+'" placeholder="user: silver/red/green/blue"><div>';
    content += '<div><input type="text" class="inputFields" id="mainInputSlot" value="'+ex_slot+'" placeholder="slot: first/second"></div>';
    content += '<div><input type="text" class="inputFields" id="mainInputMode" value="'+ex_mode+'" placeholder="mode: all/byModel"></div>';
    content += '<div><input type="text" class="inputFields" id="mainInputWorkId" value="'+ex_workId+'" placeholder="workId: 22-3/22-5/23-4..."></div>';
    content += '<div><input type="text" class="inputFields" id="mainInputApiUrl" value="'+ex_apiUrl+'" placeholder="http://127.0.0.1/giantPumpkin/index.php"></div>';
    content += '<button type="button" class="buttons" id="mainButtonSubmit">Save Data</button>';
    showHTMLOnContentConsole(content);
}
async function getInitialStorageDatas(){
    return new Promise((resolve,reject)=>{
        chrome.storage.local.get(['ex_switch','ex_user','ex_mode','ex_slot','ex_workId','ex_apiUrl'], function (result) {
            resolve({'ex_switch':result['ex_switch'],'ex_apiUrl':result['ex_apiUrl'],'ex_user':result['ex_user'],'ex_mode':result['ex_mode'],'ex_slot':result['ex_slot'],'ex_workId':result['ex_workId'],});
        });
    })
}
async function getStorageSingleData(name) {
    return new Promise((resolve, reject) => {
        chrome.storage.local.get(name, function (result) { resolve(result[name]); }); 
    }); 
}
async function setStorageSingleData(name,value) {
    return new Promise((resolve, reject) => {
        let obj = {};obj[name]=value;
        chrome.storage.local.set(obj, function() {resolve();});
    }); 
}
async function preload_content_setup()
{
    $('body').prepend('<div id="ex_console_div"><div id="dynamic_section"></div></div>')
    dragElement(document.getElementById("ex_console_div"));
    function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (document.getElementById(elmnt.id + "header")) {
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
        } else {
        elmnt.onmousedown = dragMouseDown;
        }
    
        function dragMouseDown(e) {
        e = e || window.event;
        // e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
        }
    
        function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }
    
        function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
        }
    }
}
function loginFromEmailInputSelector(){return $('#email');}
function loginFromPasswordInputSelector(){return $('#pass');}
function loginFromSubmitButtonSelector(){return $('._42ft._4jy0._6lth._4jy6._4jy1.selected._51sy');}
function loginFromSubmitButtonLoginPageSelector(){return $('#loginbutton')}
function mapConfigurationMainButtonSelector(){
    //a button on click will open change location popup
    return $(`.${'x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xc5r6h4 xqeqjp1 x1phubyo x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x972fbf x10w94by x1qhh985 x14e42zd x9f619 x1ypdohk xdl72j9 x2lah0s x3ct3a4 x14z9mp xat24cr x1lziwak x2lwn1j xeuugli xexx8yu xyri2b x18d9i69 x1c1uobl x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x1fmog5m xu25z0z x140muxe xo1y3bh x1q0g3np x87ps6o x1lku1pv x78zum5 x1a2a7pz x1xmf6yo'.split(' ').join('.')}`);}
function mapConfigurationMilesMainButtonSelector(){
    // a button on click will open all miles options
    return $(`.${'xjyslct xjbqb8w x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x972fbf x10w94by x1qhh985 x14e42zd x9f619 xzsf02u x78zum5 x1jchvi3 x1fcty0u x132q4wb xdj266r x14z9mp xat24cr x1lziwak x1a2a7pz x1a8lsjc xv54qhq xf7dkkf x9desvi x1n2onr6 x16tdsg8 xh8yej3 x1ja2u2z'.split(' ').join('.')}`)}
function mapConfigurationMilesButtonSelector(){
    // a button on click will choose a mile from other options
    // x1i10hfl xjbqb8w x1ejq31n xd10rxx x1sy0etr x17r0tee x972fbf xcfux6l x1qhh985 xm0m39n xe8uvvx x1hl2dhg xggy1nq x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x87ps6o x1lku1pv x1a2a7pz x6s0dn4 xjyslct x9f619 x1ypdohk x78zum5 x1q0g3np x2lah0s xnqzcj9 x1gh759c x1i6fsjq xfvfia3 x1344otq x1de53dj x10wwi4t x1x7e7qh x1n2onr6 x16tdsg8 x1ja2u2z
    return document.querySelectorAll(`.${'x1i10hfl xjbqb8w x1ejq31n x18oe1m7 x1sy0etr xstzfhl x972fbf x10w94by x1qhh985 x14e42zd x3ct3a4 x1hl2dhg xggy1nq x1fmog5m xu25z0z x140muxe xo1y3bh x87ps6o x1lku1pv x1a2a7pz x6s0dn4 xjyslct x9f619 x1ypdohk x78zum5 x1q0g3np x2lah0s x1i6fsjq xfvfia3 x8e7100 x1a16bkn x10wwi4t x1x7e7qh xgm7xcn x1ynn3ck x1n2onr6 x16tdsg8 x1ja2u2z'.split(' ').join('.')}`);
}
function mapConfigugationMilesSubmitButtonSelector(){
    // a button that confirms the mile choice
    // return $(`.${'x1i10hfl xjbqb8w x1ejq31n x18oe1m7 x1sy0etr xstzfhl x972fbf x10w94by x1qhh985 x14e42zd x1ypdohk xe8uvvx xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x16tdsg8 x1hl2dhg xggy1nq x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x87ps6o x1lku1pv x1a2a7pz x9f619 x3nfvp2 xdt5ytf xl56j7k x1n2onr6 xh8yej3'.split(' ').join('.')}`);
    return $('[aria-label="Apply"]');
}
    
function listingEndingDefineSelector(){return $('.pybr56ya.ihqw7lf3.cbu4d94t.j83agx80.rq0escxv');}
function temporaryBlockSelector(){
    return $(`.${'gvxzyvdx aeinzg81 t7p7dqev gh25dzvf exr7barw b6ax4al1 gem102v4 ncib64c9 mrvwc6qr sx8pxkcf f597kf1v cpcgwwas bx1hu7np hxfwr5lz rq8durfe luz166fr o48pnaf2 rtxb060y hsphh064'.split(' ').join('.')}`);}
function noProductSelector(){return $('.d2edcug0.hpfvmrgz.qv66sw1b.c1et5uql.lr9zc1uh.a8c37x1j.keod5gw0.nxhoafnm.aigsh9s9.ns63r2gh.fe6kdd0r.mau55g9w.c8b282yb.iv3no6db.o3w64lxj.b2s5l15y.hnhda86s.m9osqain.oqcyycmt');}
function temporaryBlockCrossSelector(){return $(`.${'qi72231t n3hqoq4p r86q59rh b3qcqh3k fq87ekyn fsf7x5fv s5oniofx m8h3af8h l7ghb35v kjdc1dyq kmwttqpk cr00lzj9 rn8ck1ys s3jn8y49 f14ij5to l3ldwz01 icdlwmnq i85zmo3j qmqpeqxj e7u6y3za qwcclf47 nmlomj2f frfouenu bonavkto djs4p424 r7bn319e bdao358l alzwoclg jcxyg2ei srn514ro oxkhqvkx rl78xhln nch0832m om3e55n1 jvc6uz2b g90fjkqk a5wdgl2o'.split(' ').join('.')}`);}
var data = [

    { 'slot': 'second', 'name': 'Cadiz, Kentucky', 'urlKey': '107475745949201', 'radius': '100'},
    { 'slot': 'second', 'name': 'Lexington, Kentucky', 'urlKey': 'lexington', 'radius': '80'},
    { 'slot': 'second', 'name': 'Glasgow, Kentucky', 'urlKey': '107861109243288', 'radius': '60'},
    { 'slot': 'second', 'name': 'Somerset, Kentucky', 'urlKey': '112674218747903', 'radius': '20'},
    { 'slot': 'second', 'name': 'Grayson, Kentucky', 'urlKey': '108475775846412', 'radius': '20'},
    { 'slot': 'second', 'name': 'Jackson, Kentucky', 'urlKey': '108107442544202', 'radius': '40'},

    
    { 'slot': 'second', 'name': 'Blackstone, Virginia', 'urlKey': '105576896143431', 'radius': '100'},
    { 'slot': 'second', 'name': 'Roanoke, Virginia', 'urlKey': 'roanoke-va', 'radius': '80'},
    { 'slot': 'second', 'name': 'Luray, Virginia', 'urlKey': '112382815445338', 'radius': '80'},
    { 'slot': 'second', 'name': 'Bristol, Virginia', 'urlKey': '112291928782910', 'radius': '60'},
    { 'slot': 'second', 'name': 'Cape Charles, Virginia', 'urlKey': '108626165826144', 'radius': '40'},


    { 'slot': 'second', 'name': 'Henderson, Tennessee', 'urlKey': '113167585363432', 'radius': '80'},
    { 'slot': 'second', 'name': 'Tazewell, Tennessee', 'urlKey': '107908652571107', 'radius': '60'},
    { 'slot': 'second', 'name': 'Shelbyville, Tennessee', 'urlKey': '108050902550376', 'radius': '60'},
    { 'slot': 'second', 'name': 'Union City, Tennessee', 'urlKey': '112625145419282', 'radius': '40'},
    { 'slot': 'second', 'name': 'Arlington, Tennessee', 'urlKey': '113883398622295', 'radius': '40'},
    { 'slot': 'second', 'name': 'Lenoir City, Tennessee', 'urlKey': '104091942961425', 'radius': '40'},
    { 'slot': 'second', 'name': 'Dayton, Tennessee', 'urlKey': '106079242756717', 'radius': '40'},
    { 'slot': 'second', 'name': 'Cookeville, Tennessee', 'urlKey': '112692998743372', 'radius': '40'},
    { 'slot': 'second', 'name': 'Jamestown, Tennessee', 'urlKey': '105539926147338', 'radius': '40'},
    { 'slot': 'second', 'name': 'Lawrenceburg, Tennessee', 'urlKey': '105620656138984', 'radius': '40'},

    { 'slot': 'second', 'name': 'Madison, Georgia', 'urlKey': '112506942094106', 'radius': '80'},
    { 'slot': 'second', 'name': 'Jesup, Georgia', 'urlKey': '103996876304859', 'radius': '80'},
    { 'slot': 'second', 'name': 'Americus, Georgia', 'urlKey': '108466782511927', 'radius': '80'},
    { 'slot': 'second', 'name': 'Blue Ridge, Georgia', 'urlKey': '108108919218127', 'radius': '60'},
    { 'slot': 'second', 'name': 'Thomasville, Georgia', 'urlKey': '107812089240090', 'radius': '60'},
    { 'slot': 'second', 'name': 'Valdosta, Georgia', 'urlKey': '103975982970946', 'radius': '40'},
    { 'slot': 'second', 'name': 'Dublin, Georgia', 'urlKey': '108758395814738', 'radius': '40'},
    { 'slot': 'second', 'name': 'Carrollton, Georgia', 'urlKey': '112487615432050', 'radius': '40'},
    { 'slot': 'second', 'name': 'Rome, Georgia', 'urlKey': '107963899224102', 'radius': '40'},
    { 'slot': 'second', 'name': 'Ringgold, Georgia', 'urlKey': '104022859635638', 'radius': '40'},


    // { 'slot': 'second', 'name': 'Grenada, Mississippi', 'urlKey': '112431062106458', 'radius': '80'},
    // { 'slot': 'second', 'name': 'Brandon, Mississippi', 'urlKey': '104021926301761', 'radius': '80'},
    // { 'slot': 'second', 'name': 'Lucedale, Mississippi', 'urlKey': '111967038820116', 'radius': '80'},
    // { 'slot': 'second', 'name': 'Woodville, Mississippi', 'urlKey': '111873852157988', 'radius': '60'},
    // { 'slot': 'second', 'name': 'Columbia, Mississippi', 'urlKey': '112167362129862', 'radius': '40'},
    // { 'slot': 'second', 'name': 'Greenville, Mississippi', 'urlKey': '109540295731390', 'radius': '40'},
    // { 'slot': 'second', 'name': 'Fulton, Mississippi', 'urlKey': '103119093062290', 'radius': '40'},
    // { 'slot': 'second', 'name': 'Columbus, Mississippi', 'urlKey': '105532462814111', 'radius': '40'},
    // { 'slot': 'second', 'name': 'Louisville, Mississippi', 'urlKey': '108154785880124', 'radius': '40'},
    // { 'slot': 'second', 'name': 'Meridian, Mississippi', 'urlKey': '108168579207374', 'radius': '40'},
    // { 'slot': 'second', 'name': 'Southaven, Mississippi', 'urlKey': '104034969634202', 'radius': '20'},

    // { 'slot': 'second', 'name': 'Pelham, Alabama', 'urlKey': '104129119623782', 'radius': '80'},
    // { 'slot': 'second', 'name': 'Russellville, Alabama', 'urlKey': '108817435809827', 'radius': '40'},
    // { 'slot': 'second', 'name': 'Hartselle, Alabama', 'urlKey': '108136349208118', 'radius': '40'},
    // { 'slot': 'second', 'name': 'Fort Payne, Alabama', 'urlKey': '108018039221410', 'radius': '40'},
    // { 'slot': 'second', 'name': 'Eutaw, Alabama', 'urlKey': '108052195883580', 'radius': '40'},
    // { 'slot': 'second', 'name': 'Auburn, Alabama', 'urlKey': '108417995849344', 'radius': '40'},
    // { 'slot': 'second', 'name': 'Thomasville, Alabama', 'urlKey': '108217175865346', 'radius': '40'},
    // { 'slot': 'second', 'name': 'Goldsboro, North Carolina', 'urlKey': '108361105854270', 'radius': '40'},
    // { 'slot': 'second', 'name': 'Evergreen, Alabama', 'urlKey': '108466412517561', 'radius': '40'},
    // { 'slot': 'second', 'name': 'Troy, Alabama', 'urlKey': '113096688703739', 'radius': '40'},

    { 'slot': 'second', 'name': 'Immokalee, Florida', 'urlKey': '103111633062107', 'radius': '100'},
    { 'slot': 'second', 'name': 'Clermont, Florida', 'urlKey': '109263879093610', 'radius': '100'},
    { 'slot': 'second', 'name': 'Panama City Beach, Florida', 'urlKey': '112008322147785', 'radius': '100'},
    { 'slot': 'second', 'name': 'Lake City, Florida', 'urlKey': '113262008687508', 'radius': '80'},

    

    
    














    { 'slot': 'first', 'name': 'Chetek, Wisconsin', 'urlKey': '109185802440364', 'radius': '80'},
    { 'slot': 'first', 'name': 'Merrill, Wisconsin', 'urlKey': '112247702125089', 'radius': '80'},
    { 'slot': 'first', 'name': 'Black River Falls, Wisconsin', 'urlKey': '108011149227310', 'radius': '60'},
    { 'slot': 'first', 'name': 'Boscobel, Wisconsin', 'urlKey': '105482689484121', 'radius': '60'},
    { 'slot': 'first', 'name': 'Menomonee Falls, Wisconsin', 'urlKey': '104104952958193', 'radius': '60'},
    { 'slot': 'first', 'name': 'Montello, Wisconsin', 'urlKey': '112732548741244', 'radius': '60'},
    { 'slot': 'first', 'name': 'Green Bay, Wisconsin', 'urlKey': 'greenbay', 'radius': '60'},
    { 'slot': 'first', 'name': 'Solon Springs, Wisconsin', 'urlKey': '112608472087070', 'radius': '40'},
    { 'slot': 'first', 'name': 'Ashland, Wisconsin', 'urlKey': '112297378785565', 'radius': '40'},
    { 'slot': 'first', 'name': 'Park Falls, Wisconsin', 'urlKey': '108721529152456', 'radius': '40'},
    { 'slot': 'first', 'name': 'Madison, Wisconsin', 'urlKey': 'madison', 'radius': '20'},

    { 'slot': 'first', 'name': 'Bruce Crossing, Michigan', 'urlKey': '108467702518462', 'radius': '80'},
    { 'slot': 'first', 'name': 'Big Rapids, Michigan', 'urlKey': '112244325457447', 'radius': '80'},
    { 'slot': 'first', 'name': 'Imlay City, Michigan', 'urlKey': '105537582813375', 'radius': '80'},
    { 'slot': 'first', 'name': 'Harris, Michigan', 'urlKey': '112827815401400', 'radius': '80'},
    { 'slot': 'first', 'name': 'Battle Creek, Michigan', 'urlKey': '107374972619298', 'radius': '80'},
    { 'slot': 'first', 'name': 'Naubinway, Michigan', 'urlKey': '111881735502926', 'radius': '60'},
    { 'slot': 'first', 'name': 'Suttons Bay, Michigan', 'urlKey': '108397589184193', 'radius': '60'},
    { 'slot': 'first', 'name': 'Lewiston, Michigan', 'urlKey': '109435205742556', 'radius': '60'},
    { 'slot': 'first', 'name': 'De Tour Village, Michigan', 'urlKey': '108365935851557', 'radius': '40'},
    { 'slot': 'first', 'name': 'Mackinaw City, Michigan', 'urlKey': '106151279416134', 'radius': '40'},
    { 'slot': 'first', 'name': 'Tawas City, Michigan', 'urlKey': '112808158733249', 'radius': '40'},
    { 'slot': 'first', 'name': 'Standish, Michigan', 'urlKey': '112098985473637', 'radius': '40'},
    { 'slot': 'first', 'name': 'Ypsilanti, Michigan', 'urlKey': '112358675446636', 'radius': '40'},
    { 'slot': 'first', 'name': 'Shingleton, Michigan', 'urlKey': '110970478926958', 'radius': '20'},
    { 'slot': 'first', 'name': 'Paradise, Michigan', 'urlKey': '108227819202350', 'radius': '20'},
    { 'slot': 'first', 'name': 'Port Austin, Michigan', 'urlKey': '112898765391290', 'radius': '20'},
    { 'slot': 'first', 'name': 'Benton Harbor, Michigan', 'urlKey': '104034996298452', 'radius': '20'},
    { 'slot': 'first', 'name': 'Copper Harbor, Michigan', 'urlKey': '114471041896953', 'radius': '40'},
    { 'slot': 'first', 'name': 'Ishpeming, Michigan', 'urlKey': '112114465468515', 'radius': '40'},
    { 'slot': 'first', 'name': 'Grand Marais, Michigan', 'urlKey': '108132592543186', 'radius': '40'},
    { 'slot': 'first', 'name': 'Brimley, Michigan', 'urlKey': '107879469245956', 'radius': '40'},
    
    { 'slot': 'first', 'name': 'Joliet, Illinois', 'urlKey': '112387862106695', 'radius': '80'},
    { 'slot': 'first', 'name': 'Kewanee, Illinois', 'urlKey': '108297845858468', 'radius': '80'},
    { 'slot': 'first', 'name': 'Danville, Illinois', 'urlKey': '109512592400452', 'radius': '80'},
    { 'slot': 'first', 'name': 'Centralia, Illinois', 'urlKey': '103116343061909', 'radius': '80'},
    { 'slot': 'first', 'name': 'Freeport, Illinois', 'urlKey': '112298095453768', 'radius': '60'},
    { 'slot': 'first', 'name': 'Macomb, Illinois', 'urlKey': '105650692803199', 'radius': '60'},
    { 'slot': 'first', 'name': 'Bloomington, Illinois', 'urlKey': '109425945743563', 'radius': '60'},
    { 'slot': 'first', 'name': 'Springfield, Illinois', 'urlKey': '104023752968315', 'radius': '60'},
    { 'slot': 'first', 'name': 'Pittsfield, Illinois', 'urlKey': '104077756295752', 'radius': '60'},
    { 'slot': 'first', 'name': 'Mattoon, Illinois', 'urlKey': '108199815875302', 'radius': '40'},
    { 'slot': 'first', 'name': 'Harrisburg, Illinois', 'urlKey': '107988969224646', 'radius': '40'},
    { 'slot': 'first', 'name': 'Robinson, Illinois', 'urlKey': '108158555878332', 'radius': '20'},
    { 'slot': 'first', 'name': 'Olney, Illinois', 'urlKey': '103126896394953', 'radius': '20'},

    { 'slot': 'first', 'name': 'Jasper, Indiana', 'urlKey': '105979206100835', 'radius': '80'},
    { 'slot': 'first', 'name': 'Greensburg, Indiana', 'urlKey': '107798935916829', 'radius': '80'},
    { 'slot': 'first', 'name': 'Wabash, Indiana', 'urlKey': '109350795751180', 'radius': '80'},
    { 'slot': 'first', 'name': 'Michigan City, Indiana', 'urlKey': '103138573060234', 'radius': '40'},

    { 'slot': 'first', 'name': 'Saint Marys, Pennsylvania', 'urlKey': '106263302743287', 'radius': '40'},
    { 'slot': 'first', 'name': 'Coudersport, Pennsylvania', 'urlKey': '106142242750808', 'radius': '20'},
    { 'slot': 'first', 'name': 'Washington, Pennsylvania', 'urlKey': '104003396301893', 'radius': '20'},
    { 'slot': 'first', 'name': 'Scranton, Pennsylvania', 'urlKey': '104088049626788', 'radius': '80'},
    { 'slot': 'first', 'name': 'Williamsport, Pennsylvania', 'urlKey': '108718759152288', 'radius': '80'},
    { 'slot': 'first', 'name': 'Philadelphia, Pennsylvania', 'urlKey': 'philly', 'radius': '80'},
    { 'slot': 'first', 'name': 'Hanover, Pennsylvania', 'urlKey': '105507776149184', 'radius': '80'},
    { 'slot': 'first', 'name': 'Johnstown, Pennsylvania', 'urlKey': '109355635757858', 'radius': '80'},
    { 'slot': 'first', 'name': 'Titusville, Pennsylvania', 'urlKey': '109420865751709', 'radius': '80'},
 

    { 'slot': 'first', 'name': 'Weston, West Virginia', 'urlKey': '109368989081574', 'radius': '80'},
    { 'slot': 'first', 'name': 'Logan, West Virginia', 'urlKey': '109653005727639', 'radius': '80'},
    { 'slot': 'first', 'name': 'Concord, New Hampshire', 'urlKey': '103703779667744', 'radius': '80'},
    { 'slot': 'first', 'name': 'Montpelier, Vermont', 'urlKey': '104085679627002', 'radius': '80'},
    { 'slot': 'first', 'name': 'Findlay, Ohio', 'urlKey': '109179582434220', 'radius': '80'},
    { 'slot': 'first', 'name': 'Canton, Ohio', 'urlKey': '107686305921065', 'radius': '80'},
    { 'slot': 'first', 'name': 'Chillicothe, Ohio', 'urlKey': '112298928786424', 'radius': '80'},
    { 'slot': 'first', 'name': 'Greer, South Carolina', 'urlKey': '103703819668542', 'radius': '80'},

    { 'slot': 'first', 'name': 'Wilkesboro, North Carolina', 'urlKey': '108533802503839', 'radius': '60'},
    { 'slot': 'first', 'name': 'Burlington, North Carolina', 'urlKey': '105983586099873', 'radius': '60'},
    { 'slot': 'first', 'name': 'Oak Island, North Carolina', 'urlKey': '108066922555681', 'radius': '60'},
    { 'slot': 'first', 'name': 'Morehead City, North Carolina', 'urlKey': '109819579043640', 'radius': '60'},
    { 'slot': 'first', 'name': 'Ocracoke, North Carolina', 'urlKey': '107988815891053', 'radius': '60'},
    { 'slot': 'first', 'name': 'Goldsboro, North Carolina', 'urlKey': '108361105854270', 'radius': '60'},
    { 'slot': 'first', 'name': 'Cherokee, North Carolina', 'urlKey': '112354685446271', 'radius': '40'},
    { 'slot': 'first', 'name': 'Southern Pines, North Carolina', 'urlKey': '109841785701653', 'radius': '40'},
    { 'slot': 'first', 'name': 'Concord, North Carolina', 'urlKey': '105696062797469', 'radius': '40'},
    { 'slot': 'first', 'name': 'Elizabeth City, North Carolina', 'urlKey': '112341352111008', 'radius': '40'},
    { 'slot': 'first', 'name': 'Plymouth, North Carolina', 'urlKey': '104019322968722', 'radius': '40'},
    

    { 'slot': 'first', 'name': 'Hilton Head Island, South Carolina', 'urlKey': '112538935424993', 'radius': '40'},
    { 'slot': 'first', 'name': 'Summerville, South Carolina', 'urlKey': '106051496092284', 'radius': '40'},
    { 'slot': 'first', 'name': 'Rock Hill, South Carolina', 'urlKey': '107588489271016', 'radius': '20'},
    { 'slot': 'first', 'name': 'Florence, South Carolina', 'urlKey': '108629215828322', 'radius': '80'},
    { 'slot': 'first', 'name': 'Barnwell, South Carolina', 'urlKey': '104089312960408', 'radius': '80'},

    { 'slot': 'first', 'name': 'Ashland, Maine', 'urlKey': '109083262443660', 'radius': '100'},
    { 'slot': 'first', 'name': 'Rockwood, Maine', 'urlKey': '110175172333742', 'radius': '60'},
    { 'slot': 'first', 'name': 'Portland, Maine', 'urlKey': 'portland_maine', 'radius': '40'},
    { 'slot': 'first', 'name': 'Rockland, Maine', 'urlKey': '107647959265181', 'radius': '40'},
    { 'slot': 'first', 'name': 'Machias, Maine', 'urlKey': '112215165462113', 'radius': '40'},
    { 'slot': 'first', 'name': 'Rumford, Maine', 'urlKey': '106273972737298', 'radius': '80'},
    { 'slot': 'first', 'name': 'Old Town, Maine', 'urlKey': '112434268771975', 'radius': '80'},

    { 'slot': 'first', 'name': 'Tupper Lake, New York', 'urlKey': '106158159420359', 'radius': '80'},
    { 'slot': 'first', 'name': 'Hamilton, New York', 'urlKey': '249852841804761', 'radius': '80'},
    { 'slot': 'first', 'name': 'Geneseo, New York', 'urlKey': '103102666397050', 'radius': '80'},
    { 'slot': 'first', 'name': 'Newburgh, New York', 'urlKey': '110616528960082', 'radius': '80'},
    { 'slot': 'first', 'name': 'Elmira, New York', 'urlKey': '104088489629138', 'radius': '80'},
    { 'slot': 'first', 'name': 'Saratoga Springs, New York', 'urlKey': '108057199217180', 'radius': '60'},
    { 'slot': 'first', 'name': 'Montauk, New York', 'urlKey': '108236039204718', 'radius': '40'},
    { 'slot': 'first', 'name': 'Riverhead, New York', 'urlKey': '111956225497502', 'radius': '40'},

    { 'slot': 'first', 'name': 'Springfield, Massachusetts', 'urlKey': '112781448736001', 'radius': '60'},
    { 'slot': 'first', 'name': 'Yarmouth, Massachusetts', 'urlKey': '103106726395610', 'radius': '40'},
    

    { 'slot': 'first', 'name': 'Providence, Rhode Island', 'urlKey': 'providence', 'radius': '80'},

    { 'slot': 'first', 'name': 'Cambridge, Maryland', 'urlKey': '105565586143189', 'radius': '80'},

    { 'slot': 'first', 'name': 'Brattleboro, Vermont', 'urlKey': '108333559194371', 'radius': '60'},
    

    { 'slot': 'first', 'name': 'Greenville, Ohio', 'urlKey': '105716376130028', 'radius': '40'},
    { 'slot': 'first', 'name': 'Zanesville, Ohio', 'urlKey': '112099355467948', 'radius': '40'},
    { 'slot': 'first', 'name': 'Mason, Ohio', 'urlKey': '113805941962934', 'radius': '20'},
    { 'slot': 'first', 'name': 'Mount Vernon, Ohio', 'urlKey': '111990698816711', 'radius': '20'},
    { 'slot': 'first', 'name': 'Mentor, Ohio', 'urlKey': '108177469202553', 'radius': '20'},
    { 'slot': 'first', 'name': 'Ashtabula, Ohio', 'urlKey': '104136239622333', 'radius': '20'},
  ];


