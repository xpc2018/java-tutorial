(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{598:function(a,e,t){"use strict";t.r(e);var r=t(21),s=Object(r.a)({},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"安全管理器-（security-manager）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安全管理器-（security-manager）","aria-hidden":"true"}},[a._v("#")]),a._v(" 安全管理器 （Security Manager）")]),a._v(" "),t("p",[a._v("安全管理器 是一个定义安全策略的对象。此策略指定不安全或敏感的操作。安全策略不允许的任何操作都会抛出 "),t("a",{attrs:{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/SecurityException.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("SecurityException"),t("OutboundLink")],1),a._v(" 异常。\n应用程序还可以查询其安全管理器允许哪些操作。")]),a._v(" "),t("p",[a._v("通常，Web 小程序与由浏览器或 Java Web Start 插件提供的安全管理器一起运行。其他类型的应用程序通常运行没有安全管理器，\n除非应用程序本身定义一个。如果没有安全管理员，应用程序没有安全策略，没有限制。")]),a._v(" "),t("p",[a._v("本节介绍应用程序如何与现有安全管理器进行交互。有关详细信息，包括有关如何设计安全管理器的信息，\n请参阅“ "),t("a",{attrs:{href:"https://docs.oracle.com/javase/8/docs/technotes/guides/security/index.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("安全指南"),t("OutboundLink")],1),a._v("”。")]),a._v(" "),t("h2",{attrs:{id:"与安全管理器进行交互"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#与安全管理器进行交互","aria-hidden":"true"}},[a._v("#")]),a._v(" 与安全管理器进行交互")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/SecurityManager.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("SecurityManager"),t("OutboundLink")],1),a._v(" 是一个安全管理器，\n通过调用 System.getSecurityManager 来获得实例")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("SecurityManager appsm "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" System"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getSecurityManager")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("如果没有安全管理器，则此方法返回 null。")]),a._v(" "),t("p",[a._v("一旦应用程序对安全管理器对象的引用，它可以请求许可来执行特定的事情。标准库中的许多类都这样做。\n例如，"),t("code",[a._v("System.exit")]),a._v(" 它终止具有退出状态的 Java 虚拟机，调用 "),t("code",[a._v("SecurityManager.checkExit")]),a._v(" 以确保当前线程有权关闭应用程序。")]),a._v(" "),t("p",[t("code",[a._v("SecurityManager")]),a._v(" 类定义了许多用于验证其他类型操作的其他方法。例如，"),t("code",[a._v("SecurityManager.checkAccess")]),a._v(" 验证线程访问，\n"),t("code",[a._v("SecurityManager.checkPropertyAccess")]),a._v(" 验证对指定属性的访问。每个操作或一组操作有自己的 checkXXX() 方法，\n此外，该组方法标识已经收到安全管理器保护的一组操作。通常，应用程序不需要直接调用任何 checkXXX（）方法.")]),a._v(" "),t("h2",{attrs:{id:"认识违反安全的行为"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#认识违反安全的行为","aria-hidden":"true"}},[a._v("#")]),a._v(" 认识违反安全的行为")]),a._v(" "),t("p",[a._v("许多没有安全管理器的常规操作可能会抛出 "),t("code",[a._v("SecurityException")]),a._v(" 运行时异常。例如，考虑以下用于读取文件的代码：")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("reader "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("FileReader")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"xanadu.txt"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("在没有安全管理器的情况下，此语句无错误地执行，只要 xanadu.txt 存在并且是可读的。\n但是假设这个语句被插入到一个 web applet 中，该 applet 通常在不允许文件输入的安全管理器下运行。\n可能会导致以下错误消息：")]),a._v(" "),t("p",[a._v("applet 没有接触过，不深入了。")])])},[],!1,null,null,null);e.default=s.exports}}]);