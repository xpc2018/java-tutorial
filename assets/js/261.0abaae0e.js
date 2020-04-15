(window.webpackJsonp=window.webpackJsonp||[]).push([[261],{623:function(s,t,a){"use strict";a.r(t);var n=a(21),e=Object(n.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"通配符使用指南"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通配符使用指南","aria-hidden":"true"}},[s._v("#")]),s._v(" 通配符使用指南")]),s._v(" "),a("p",[s._v("学习使用泛型进行编程时，更令人困惑的一个方面是确定何时使用上界有界的通配符，\n何时使用下界有界的通配符。本页面提供了设计代码时要遵循的一些指导原则。")]),s._v(" "),a("p",[s._v("为了讨论的目的，将变量看作提供以下两个函数之一是有帮助的：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("一个 「in」 变量")]),s._v(" "),a("p",[s._v("一个 in 变量将数据提供给代码。想象一下有两个参数的的复制方法 "),a("code",[s._v("copy(src,dest)")]),s._v("\n该 src 参数提供的数据被复制，因此它是 in 参数。")])]),s._v(" "),a("li",[a("p",[s._v("一个 「out」 变量")]),s._v(" "),a("p",[s._v("out 变量保存用于其他地方的数据。在复制示例 "),a("code",[s._v("copy(src,dest)")]),s._v(" 中，dest 参数接受数据，所以它是 out 参数。")])])]),s._v(" "),a("p",[s._v("当然，一些变量既用于 in 也用于 out 的目的 - 这个方案在准则中也有说明。")]),s._v(" "),a("p",[s._v("在决定是否使用通配符时，可以使用 in 和 out 原则，以及使用哪种类型的通配符。以下列表提供了遵循的准则：")]),s._v(" "),a("p",[s._v("通配符指南：")]),s._v(" "),a("ul",[a("li",[s._v("一个 in 变量用一个上界的通配符来定义，使用 extends 关键字。")]),s._v(" "),a("li",[s._v("使用 super 关键字定义一个 out 变量，其下界为通配符。")]),s._v(" "),a("li",[s._v("在可以使用 Object 类中定义的方法访问 in 变量的情况下，使用无界通配符。")]),s._v(" "),a("li",[s._v("在代码需要以 in 和 out 变量访问变量的情况下，不要使用通配符。")])]),s._v(" "),a("p",[s._v("这些准则不适用于方法的返回类型。应避免使用通配符作为返回类型，因为它强制程序员使用代码来处理通配符。")]),s._v(" "),a("p",[s._v("由 "),a("code",[s._v("List<? extends ...>")]),s._v(" 可以非正式地认为是只读的，但这不是一个严格的保证。假设你有以下两个类：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("NaturalNumber")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("NaturalNumber")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("EvenNumber")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("NaturalNumber")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("EvenNumber")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("考虑下面的代码：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[s._v("List"),a("span",{pre:!0,attrs:{class:"token generics function"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("EvenNumber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" le "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ArrayList")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nList"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("NaturalNumber")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ln "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" le"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nln"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("NaturalNumber")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("35")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// compile-time error")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("因为 "),a("code",[s._v("List <EvenNumber>")]),s._v(" 是 "),a("code",[s._v("List<? extends NaturalNumber>")]),s._v("，您可以将文件分配给 ln。\n但是，您不能使用 ln 将自然数添加到偶数列表中。列表中的以下操作是可能的：")]),s._v(" "),a("ul",[a("li",[s._v("你可以添加 null。")]),s._v(" "),a("li",[s._v("你可以调用清除。")]),s._v(" "),a("li",[s._v("你可以得到迭代器并调用 remove。")]),s._v(" "),a("li",[s._v("您可以捕获通配符，并写入您从列表中读取的元素。")])])])},[],!1,null,null,null);t.default=e.exports}}]);