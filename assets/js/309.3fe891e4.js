(window.webpackJsonp=window.webpackJsonp||[]).push([[309],{463:function(s,a,t){"use strict";t.r(a);var n=t(21),e=Object(n.a)({},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"原始数据类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#原始数据类型","aria-hidden":"true"}},[s._v("#")]),s._v(" 原始数据类型")]),s._v(" "),t("p",[s._v("Java 编程语言是强类型的，这意味着所有变量必须先被声明才能使用。这包括声明变量的类型和名称，如您已经看到的:"),t("code",[s._v("int gear = 1")])]),s._v(" "),t("p",[s._v("这样做会告诉你的程序，一个名为“gear”的字段存在，保存数字数据，初始值为“1”。变量的数据类型确定其可能包含的值，以及可能对其执行的操作。除了 int 外，Java 编程语言支持七种其他原始数据类型。原始类型由语言预定义，并由保留关键字命名。原始值不与其他原始值共享状态。Java 编程语言支持的八个基本数据类型有：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("byte")]),s._v(" "),t("p",[s._v("byte 数据类型是 8位 有符号二进制补码整数。它的最小值为 -128,最大值为 127(含)。这种数据类型在大数组中能节省内存。他们也可以被用来代替 int，变量范围有限的限制有助于澄清你的代码；")])]),s._v(" "),t("li",[t("p",[s._v("short")]),s._v(" "),t("p",[s._v("short 数据类型是 16位 有符号二进制补码整数。最小值为 -32,768，最大值为 32,767（含）,与 byte 相同的指导原则适用：在内存节省实际重要的情况下,您可以使用 short 在大数组中节省内存。")])]),s._v(" "),t("li",[t("p",[s._v("int")]),s._v(" "),t("p",[s._v("默认情况下，int 数据类型为 32位 有符号二进制补码整数，最小值为 "),t("code",[s._v("-2^{31}")]),s._v("，最大值为 "),t("code",[s._v("2^{31}-1")]),s._v(";")]),s._v(" "),t("p",[s._v("在 Java SE 8 及更高版本中，您可以使用 int 数据类型来表示无符号的 32位 整数，其最小值为 0，最大值为 "),t("code",[s._v("2^{31}-1")]),s._v(".使用 Integer 类将 int 数据类型用作无符号整数。有关详细信息，请参阅“Number”一节。像静态方法"),t("code",[s._v("compareUnsigned，divideUnsigned")]),s._v("等已被添加到 Integer 类，以支持算术运算的无符号整数。")])]),s._v(" "),t("li",[t("p",[s._v("long")]),s._v(" "),t("p",[s._v("long数据类型是64位二进制补码整数。有符号的long最小值为$$-2^{63}$$，最大值为$$2^{63}$$-1")]),s._v(" "),t("p",[s._v("在Java SE 8及更高版本中，可以使用long数据类型表示无符号的64位长，最小值为0，最大值为$$2^{63}$$-1。如果int提供的数值范围在您的需求中，那么可以使用int。 Long类也包含类似的方法"),t("code",[s._v("compareUnsigned，divideUnsigned")]),s._v("等支持算术运算的无符号整数。")])]),s._v(" "),t("li",[t("p",[s._v("float")]),s._v(" "),t("p",[s._v("float 数据类型是单精度 32位 IEEE 754 浮点数,其范围范围超出了本讨论范围.但在"),t("a",{attrs:{href:"https://docs.oracle.com/javase/specs/jls/se7/html/jls-4.html#jls-4.2.3",target:"_blank",rel:"noopener noreferrer"}},[s._v("Java 语言规范的 浮点类型，格式和值"),t("OutboundLink")],1),s._v("部分中指定.如果您需要节省内存，正如所提建议使用 byte 和 short，而不是使用 float 和 double；不应将此数据类型用于精确值，例如货币。为此，您将需要使用 java.math.BigDecimal 类。")])]),s._v(" "),t("li",[t("p",[s._v("double")]),s._v(" "),t("p",[s._v("double 数据类型是双精度 64位 IEEE 754 浮点数。其范围范围超出了本讨论范围；对于十进制值，这种数据类型通常是默认选择。如上所述，这种数据类型不应该用于精确的值，例如货币。")])]),s._v(" "),t("li",[t("p",[s._v("boolean")]),s._v(" "),t("p",[s._v("boolean 数据类型只有两个可能的值：true 和 false。将此数据类型用于跟踪 true / false 条件的简单标志。该数据类型表示一位信息，但其“大小”不是精确定义的。")])]),s._v(" "),t("li",[t("p",[s._v("char")]),s._v(" "),t("p",[s._v("char 数据类型是一个 16位 Unicode 字符。它的最小值为 "),t("code",[s._v("\\u0000")]),s._v("（0），最大值为 "),t("code",[s._v("\\uffff")]),s._v("（65,535）。")])])]),s._v(" "),t("p",[s._v("除了上面列出的八个基本数据类型之外，Java 编程语言还通过 "),t("code",[s._v("java.lang.String")]),s._v(" 类提供对字符串的特殊支持 。将您的字符串包含在双引号内将自动创建一个新 String 对象; 例如，"),t("code",[s._v('String s = "this is a string";')]),s._v(" String 对象是不可变的，这意味着一旦创建，它们的值不能被改变。.String 类在技术上不是一个原始数据类型，但考虑由语言所赋予的特殊支持，你可能会倾向于认为它是这样的。您将在 "),t("RouterLink",{attrs:{to:"/java/data/"}},[s._v("数字和字符串")]),s._v(" 中了解 String 类的更多信息")],1),s._v(" "),t("h2",{attrs:{id:"默认值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#默认值","aria-hidden":"true"}},[s._v("#")]),s._v(" 默认值")]),s._v(" "),t("p",[s._v("当声明一个字段时，并不总是需要赋值。声明但未初始化的字段将被编译器设置为合理的默认值。一般来说根据数据类型，这个默认值为 0 或 null.\n然而，依赖于这样的默认值通常被认为是坏的编程风格。")]),s._v(" "),t("p",[s._v("以下图表总结了上述数据类型的默认值。")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("数据类型")]),s._v(" "),t("th",[s._v("默认值（字段）")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("byte")]),s._v(" "),t("td",[s._v("0")])]),s._v(" "),t("tr",[t("td",[s._v("short")]),s._v(" "),t("td",[s._v("0")])]),s._v(" "),t("tr",[t("td",[s._v("int")]),s._v(" "),t("td",[s._v("0")])]),s._v(" "),t("tr",[t("td",[s._v("long")]),s._v(" "),t("td",[s._v("0L")])]),s._v(" "),t("tr",[t("td",[s._v("float")]),s._v(" "),t("td",[s._v("0.0F")])]),s._v(" "),t("tr",[t("td",[s._v("double")]),s._v(" "),t("td",[s._v("0.0D")])]),s._v(" "),t("tr",[t("td",[s._v("char")]),s._v(" "),t("td",[t("code",[s._v("\\u0000")])])]),s._v(" "),t("tr",[t("td",[s._v("String（或任何对象）")]),s._v(" "),t("td",[s._v("null")])]),s._v(" "),t("tr",[t("td",[s._v("boolean")]),s._v(" "),t("td",[s._v("false")])])])]),s._v(" "),t("p",[s._v("局部变量略有不同; 编译器从不将默认值分配给未初始化的局部变量。如果您无法初始化本地变量的声明，请确保在尝试使用该变量之前为其分配一个值。访问未初始化的局部变量将导致编译时错误。")]),s._v(" "),t("h2",{attrs:{id:"字面量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#字面量","aria-hidden":"true"}},[s._v("#")]),s._v(" 字面量")]),s._v(" "),t("p",[s._v("您可能已经注意到，在初始化原始类型的变量时，不使用"),t("code",[s._v("new")]),s._v("关键字。原始类型是语言内置的特殊数据类型；它们不是从类创建的对象。一个字面量是固定值的源代码表示，文字自己代表您的代码，而不需要计算。如下所示，可以为原始类型的变量分配文字：")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v(" result "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" capitalC "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'C'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("byte")]),s._v(" b "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("short")]),s._v(" s "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"整型字面量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#整型字面量","aria-hidden":"true"}},[s._v("#")]),s._v(" 整型字面量")]),s._v(" "),t("p",[s._v("一个整数类型，如果它以字母 L 或 l 结尾，则是 long; 否则是 int 类型。建议您使用大写字母 L ，因为小写字母 l 很难与数字 1 区分开来。")]),s._v(" "),t("p",[s._v("byte、short、int 和 long 可以从创造 int 字面量。超过范围的类型值可以使用长文字创建。整型字面量可以通过这些数组系统表达：")]),s._v(" "),t("ul",[t("li",[s._v("十进制：基数 10，其数字由数字 0 到 9 组成")]),s._v(" "),t("li",[s._v("十六禁止：基数 16，其数字由数字 0-9 和字母 A-F 组成")]),s._v(" "),t("li",[s._v("二进制：基数 2，其数字由数字 0 和 1 组成（您可以在 Java SE 7 及更高版本中创建二进制文字）")])]),s._v(" "),t("p",[s._v("对于通用编程，十进制系统可能是您将要使用的唯一数字系统。但是，如果需要使用另一个数字系统，以下示例显示正确的语法。前缀"),t("code",[s._v("0x")]),s._v("表示十六进制，"),t("code",[s._v("0b")]),s._v("表示二进制：")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 十进制 26")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" decVal "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("26")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 十六进制 26")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" hexVal "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x1a")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 二进制 26")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" binVal "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0b11010")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"浮点字面量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浮点字面量","aria-hidden":"true"}},[s._v("#")]),s._v(" 浮点字面量")]),s._v(" "),t("p",[s._v("一个浮点字面量，它以字母 F 或 f 结尾，则是 float；否则它的类型是 double，它可选以字母 D 或 d 形式结尾。")]),s._v(" "),t("p",[s._v("浮点类型（float 和 double）也可以使用 E 或 e（用于科学计数），F 或 f（32位浮点数字），D 或 d（64位双精度浮点数）表示;这是默认值，按照惯例中省略")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("double")]),s._v(" d1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("123.4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 与d1相同的值，但是用科学计数法表示")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("double")]),s._v(" d2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.234e2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("float")]),s._v(" f1  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("123.4f")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"字符和字符串字面量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#字符和字符串字面量","aria-hidden":"true"}},[s._v("#")]),s._v(" 字符和字符串字面量")]),s._v(" "),t("p",[s._v("字符串类型 char，String 可能包含任何 Unicode（UTF-16）字符。如果您的编辑器和文件系统允许，您可以直接在代码中使用这些字符。如果没有，您可以使用“Unicode 转义”，例如 "),t("code",[s._v("\\u0108")]),s._v('（Ĉ），或 "S\\u00ED Se\\u00F1or" (Sí Señor in Spanish).。始终对 char 文字使用“单引号”，对  String 文字使用“双引号”。 Unicode 转义序列可能在程序中的其他位置（例如，例如字段名称）中使用，而不仅仅是文字 char 或 String 文字。')]),s._v(" "),t("p",[s._v("Java 编程语言还支持一些特殊的转义序列 char 和 String 文字：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("\\b")]),s._v("（backspace）")]),s._v(" "),t("li",[t("code",[s._v("\\t")]),s._v("（tab）")]),s._v(" "),t("li",[t("code",[s._v("\\n")]),s._v("（换行）")]),s._v(" "),t("li",[t("code",[s._v("\\f")]),s._v("（form feed）")]),s._v(" "),t("li",[t("code",[s._v("\\r")]),s._v("（回车），")]),s._v(" "),t("li",[t("code",[s._v('\\"')]),s._v("（双引号）")]),s._v(" "),t("li",[t("code",[s._v("\\'")]),s._v("（单引号）")]),s._v(" "),t("li",[t("code",[s._v("\\\\")]),s._v("（反斜杠）")])]),s._v(" "),t("p",[s._v("还有一个特殊的 null 文字可以用作任何参考类型的值。除了原始类型的变量，null 可以被分配给任何变量。null 除了测试其存在之外的价值，没有什么可以做的。因此，null 通常在程序中用作标记来指示某些对象不可用。")]),s._v(" "),t("p",[s._v('最后，还有一种特殊的文字称为类文字，通过获取类型名称并附加 “.class" ；例如，String.class 这是指 Class 代表类型本身的对象（类型）。')]),s._v(" "),t("h2",{attrs:{id:"在数字文本中使用下划线字符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在数字文本中使用下划线字符","aria-hidden":"true"}},[s._v("#")]),s._v(" 在数字文本中使用下划线字符")]),s._v(" "),t("p",[s._v("在 Java SE 7 及更高版本中，任何数量的下划线字符 "),t("code",[s._v("_")]),s._v(" 都可以出现在数字文字的数字之间的任何位置。此功能使您能够在数字文字中分隔数字组，这可以提高代码的可读性。")]),s._v(" "),t("p",[s._v("例如，如果您的代码包含多个数字的数字，则可以使用下划线字符将三位数字分隔，与使用逗号或空格的标点符号作为分隔符类似。")]),s._v(" "),t("p",[s._v("以下示例显示了可以在数字文字中使用下划线的其他方法：")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),s._v(" creditCardNumber "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1234")]),s._v("_5678_9012_3456L"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),s._v(" socialSecurityNumber "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("999")]),s._v("_99_9999L"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("float")]),s._v(" pi "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.14")]),s._v("_15F"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),s._v(" hexBytes "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("xFF_EC_DE_5E"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),s._v(" hexWords "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("xCAFE_BABE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),s._v(" maxLong "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("x7fff_ffff_ffff_ffffL"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("byte")]),s._v(" nybbles "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("b0010_0101"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),s._v(" bytes "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("b11010010_01101001_10010100_10010010"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("您可以在数字之间放置下划线；您不能在以下地方放置下划线：")]),s._v(" "),t("ul",[t("li",[s._v("在数字的开头或结尾")]),s._v(" "),t("li",[s._v("与浮点文字的小数点相邻")]),s._v(" "),t("li",[s._v("F 之前或 L 之后")]),s._v(" "),t("li",[s._v("在需要一串数位的位置")])]),s._v(" "),t("p",[s._v("以下示例说明了数字文字中有效和无效的下划线展示位置：")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 无法将下划线和小数点链接")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("float")]),s._v(" pi1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("_"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1415F")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("float")]),s._v(" pi2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.")]),s._v("_1415F"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 无法将下划线和后缀 L 相链接")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),s._v(" socialSecurityNumber1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("999")]),s._v("_99_9999_L"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这是可以的")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" x1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("_2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 无法将下划线放置末尾")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" x2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("52")]),s._v("_"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这也是可以的")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" x3 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("_______2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 无法在特殊的 0x(二进制表示法) 中加下划线")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" x4 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("_x52"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 无法将下划线放置数字的开头")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" x5 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("x_52"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这是可以的")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" x6 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("x5_2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 无法将下划线放置末尾")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" x7 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("x52_"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br")])])])},[],!1,null,null,null);a.default=e.exports}}]);