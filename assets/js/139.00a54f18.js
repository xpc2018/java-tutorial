(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{580:function(t,a,e){"use strict";e.r(a);var n=e(21),r=Object(n.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"饥饿和活锁"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#饥饿和活锁","aria-hidden":"true"}},[t._v("#")]),t._v(" 饥饿和活锁")]),t._v(" "),e("p",[t._v("饥饿和活锁不是死锁的常见问题，但仍然是并发软件的每个设计者都可能遇到的问题。")]),t._v(" "),e("h2",{attrs:{id:"饥饿"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#饥饿","aria-hidden":"true"}},[t._v("#")]),t._v(" 饥饿")]),t._v(" "),e("p",[e("strong",[t._v("饥饿")]),t._v(" 描述了线程无法获得对共享资源的定期访问并且无法进行的情况。当共享资源由“贪心”线程长时间不可用时，\n会发生这种情况。例如，假设一个对象提供了一个经常需要很长时间返回的 "),e("code",[t._v("synchronized")]),t._v(" 方法。\n如果一个线程频繁调用此方法，那么也需要频繁同步访问同一对象的其他线程将被阻止。")]),t._v(" "),e("h2",{attrs:{id:"活锁"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#活锁","aria-hidden":"true"}},[t._v("#")]),t._v(" 活锁")]),t._v(" "),e("p",[t._v("线程通常作用于响应另一个线程的动作。如果另一个线程的动作也是对另一个线程的动作的响应，\n则可能会导致活动锁定。与死锁一样，活锁线程无法取得进一步进展。但是，线程不被阻止 - 它们相互之间的响应太忙了以恢复工作。\n这与两个试图在走廊中相互通过的人相媲美：Alphonse 向左移动让 Gaston 通过，而 Gaston 向右移动让 Alphonse 通过。\n看到他们仍然相互阻挠，Alphone 移动到右边，而 Gaston 向左移动。所以...他们还是相互阻拦。")]),t._v(" "),e("p",[t._v("没有太明白这一段讲的是什么")])])},[],!1,null,null,null);a.default=r.exports}}]);