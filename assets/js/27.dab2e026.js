(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{357:function(t,s,a){t.exports=a.p+"assets/img/objects-numberHierarchy.9dc4ffbf.gif"},711:function(t,s,a){"use strict";a.r(s);var n=a(21),e=Object(n.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"number-类"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#number-类","aria-hidden":"true"}},[t._v("#")]),t._v(" Number 类")]),t._v(" "),n("p",[t._v("使用数字时，大部分时间在代码中使用原始类型。例如：")]),t._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" gpa "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.65f")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("byte")]),t._v(" mask "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xff")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])]),n("p",[t._v("然而，有理由使用对象代替原始类型，Java 平台为每个基本数据类型提供 "),n("strong",[t._v("包装类")]),t._v(" 。这些类将原始类型包装起来。通常情况下，包装是由编译器完成的。")]),t._v(" "),n("p",[t._v("所有数字包装类都是 Number 抽象类的子类：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(357),alt:""}})]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[t._v("这里 Number 没有讨论其他四个子类。BigDecimal 和 BigInteger 用于高精度计算。AtomicInteger 和 AtomicLong 用于多线程应用程序。")])]),t._v(" "),n("p",[t._v("有三个原因可以使用一个 Number 对象而不是原始的：")]),t._v(" "),n("ol",[n("li",[t._v("作为一个期望对象的方法的参数（在处理数字集合时经常使用）。")]),t._v(" "),n("li",[t._v("要使用由类定义的常量（如 MIN_VALUE 和 MAX_VALUE），它们提供数据类型的上限和下限。")]),t._v(" "),n("li",[t._v("使用类方法将值转换为其他基本类型以及从其他基本类型转换值，转换为字符串和从字符串转换，以及在数字系统（十进制，八进制，十六进制，二进制）之间进行转换。")])]),t._v(" "),n("p",[t._v("下表列出了所有子类实现 Number 类的实例方法（Markdown 不支持表格合并我也是没有办法）")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("将此 Number 对象的值转换为返回的原始数据类型。")]),t._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("byte")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("byteValue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("short")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("shortValue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("intValue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("longValue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("floatValue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("doubleValue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br")])])]),t._v(" "),n("li",[n("p",[t._v("将这个 Number 对象与参数进行比较。")]),t._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("compareTo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Byte anotherByte"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("compareTo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Double anotherDouble"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("compareTo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Float anotherFloat"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("compareTo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Integer anotherInteger"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("compareTo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Long anotherLong"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("compareTo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Short anotherShort"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br")])])]),t._v(" "),n("li",[n("p",[t._v("确定这个数字对象是否等于参数。")]),t._v(" "),n("p",[t._v("如果参数不是 null 并且是相同类型的对象并具有相同的数值，则方法返回 true。\n对 Java API 文档中描述的 Double 和 Float 对象有一些额外的要求。")]),t._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("equals")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Object obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])])])]),t._v(" "),n("p",[t._v("每个 Number 类都包含其他方法，这些方法可用于将数字转换为字符串以及在数字系统之间进行转换。\n下表列出了 Integer 类中的方法。其他 Number 类的方法是相似的：")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("方法")]),t._v(" "),n("th",[t._v("描述")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("static Integer decode(String s)")]),t._v(" "),n("td",[t._v("将字符串解码为整数。可以接受十进制，八进制或十六进制数字的字符串表示作为输入。")])]),t._v(" "),n("tr",[n("td",[t._v("static int parseInt(String s)")]),t._v(" "),n("td",[t._v("返回一个整数（仅限十进制）。")])]),t._v(" "),n("tr",[n("td",[t._v("static int parseInt(String s, int radix)")]),t._v(" "),n("td",[t._v("以给定的十进制，二进制，八进制或十六进制（radix 分别等于 10、2、8 或 16）数字的字符串表示形式返回一个整数作为输入。")])]),t._v(" "),n("tr",[n("td",[t._v("String toString()")]),t._v(" "),n("td",[t._v("返回 Integer 的 String 表示形式。")])]),t._v(" "),n("tr",[n("td",[t._v("static String toString(int i)")]),t._v(" "),n("td",[t._v("返回 String 表示指定整数的对象。")])]),t._v(" "),n("tr",[n("td",[t._v("static Integer valueOf(int i)")]),t._v(" "),n("td",[t._v("返回一个 Integer 持有指定基元的值的对象。")])]),t._v(" "),n("tr",[n("td",[t._v("static Integer valueOf(String s)")]),t._v(" "),n("td",[t._v("返回一个 Integer 持有指定字符串表示的值的对象。")])]),t._v(" "),n("tr",[n("td",[t._v("static Integer valueOf(String s, int radix)")]),t._v(" "),n("td",[t._v("返回一个 Integer 持有指定字符串表示形式的整数值的对象，用 radix 的值进行解析。例如，如果 s=“333” 且 radix = 8，则该方法返回八进制数 333 的十进制整数等效值。")])])])])])},[],!1,null,null,null);s.default=e.exports}}]);