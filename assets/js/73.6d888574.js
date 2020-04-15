(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{482:function(t,a,s){"use strict";s.r(a);var n=s(21),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"dayofweek-和-month-枚举"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dayofweek-和-month-枚举","aria-hidden":"true"}},[t._v("#")]),t._v(" DayOfWeek 和 Month 枚举")]),t._v(" "),s("p",[t._v("日期时间 API 提供了用于指定一周中的几天和一年中的几个月的枚举。")]),t._v(" "),s("h2",{attrs:{id:"dayofweek"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dayofweek","aria-hidden":"true"}},[t._v("#")]),t._v(" DayOfWeek")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://docs.oracle.com/javase/8/docs/api/java/time/DayOfWeek.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("DayOfWeek"),s("OutboundLink")],1),t._v("\n由七个常量形容一周的日子：星期一至星期日。DayOfWeek 常量的整数值范围从 1（星期一）到 7（星期日）。\n使用定义的常量（DayOfWeek.FRIDAY）使您的代码更具可读性。")]),t._v(" "),s("p",[t._v("此枚举还提供了许多方法，类似于基于时间的类提供的方法。例如，以下代码将“周一”添加 3 天并打印结果。输出是 “THURSDAY”：")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("System"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%s%n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" DayOfWeek"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MONDAY"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("plus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("使用  "),s("a",{attrs:{href:"https://docs.oracle.com/javase/8/docs/api/java/time/DayOfWeek.html#getDisplayName-java.time.format.TextStyle-java.util.Locale-",target:"_blank",rel:"noopener noreferrer"}},[t._v("getDisplayName(TextStyle, Locale) "),s("OutboundLink")],1),t._v(" 方法，\n相当于使用指定的语言环境进行翻译，TextStyle 枚举允许您指定要显示什么样的字符串；\n以下示例为“星期一” 打印 TextStyle 的三种主要形式：")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("DayOfWeek dow "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" DayOfWeek"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MONDAY"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nLocale locale "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Locale"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDefault")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 星期一")]),t._v("\nSystem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDisplayName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TextStyle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FULL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" locale"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 一")]),t._v("\nSystem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDisplayName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TextStyle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NARROW"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" locale"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 星期一")]),t._v("\nSystem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDisplayName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TextStyle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SHORT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" locale"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("p",[t._v("在其他语言环境下 有可能是下面这样")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("Monday\nM\nMon\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h2",{attrs:{id:"month"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#month","aria-hidden":"true"}},[t._v("#")]),t._v(" Month")]),t._v(" "),s("p",[t._v("Month 枚举包含 一月（1）至十二月（12），使用定义的常量（Month.SEPTEMBER）使您的代码更具可读性。")]),t._v(" "),s("p",[t._v("该枚举还包括了一些方法；如下，打印了 2 月份最大可能的天数")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("System"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%d%n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Month"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FEBRUARY"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("maxLength")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("该类也实现了 getDisplayName(TextStyle, Locale) 方法；")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("Month month "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Month"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AUGUST"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nLocale locale "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Locale"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDefault")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nSystem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("month"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDisplayName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TextStyle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FULL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" locale"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nSystem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("month"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDisplayName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TextStyle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NARROW"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" locale"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nSystem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("month"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDisplayName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TextStyle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SHORT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" locale"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("输出如下：")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("八月\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\n八月\n\n其他语言环境下可能是\n\nAugust\nA\nAug\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])])])},[],!1,null,null,null);a.default=e.exports}}]);