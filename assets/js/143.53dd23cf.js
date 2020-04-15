(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{582:function(a,t,e){"use strict";e.r(t);var n=e(21),s=Object(n.a)({},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"并发随机数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#并发随机数","aria-hidden":"true"}},[a._v("#")]),a._v(" 并发随机数")]),a._v(" "),e("p",[a._v("在 JDK 7 中， "),e("code",[a._v("java.util.concurrent")]),a._v(" 包括一个方便类， "),e("code",[a._v("ThreadLocalRandom")]),a._v(" 用于期望从多个线程 "),e("code",[a._v("ForkJoinTask")]),a._v(" 使用随机数的应用程序。")]),a._v(" "),e("p",[a._v("对于并发访问，使用 "),e("code",[a._v("ThreadLocalRandom")]),a._v(" 而不是 "),e("code",[a._v("Math.random()")]),a._v(" 更少的争用的结果，并最终使更好的性能。")]),a._v(" "),e("p",[a._v("所有你需要做的是 "),e("code",[a._v("ThreadLocalRandom.current()")]),a._v("，然后调用其中一个方法来检索一个随机数。这是一个例子：")]),a._v(" "),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" r "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" ThreadLocalRandom"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("current（）"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("nextInt（"),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),a._v("，"),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("77")]),a._v("）"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])])])},[],!1,null,null,null);t.default=s.exports}}]);