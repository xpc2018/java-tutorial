(window.webpackJsonp=window.webpackJsonp||[]).push([[255],{647:function(s,a,t){"use strict";t.r(a);var n=t(21),e=Object(n.a)({},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"原始类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#原始类型","aria-hidden":"true"}},[s._v("#")]),s._v(" 原始类型")]),s._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#未经检查的错误消息"}},[s._v("未经检查的错误消息")])])])]),t("p"),s._v(" "),t("p",[s._v("原始类型是一个通用的类或接口没有任何类型的参数的名称。例如，给定通用 Box 类：")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Box")]),t("span",{pre:!0,attrs:{class:"token generics function"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("T"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("T t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* ... */")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("要创建 "),t("code",[s._v("Box <T>")]),s._v(" 的参数化类型，可以为形式类型参数 T 提供实际的类型参数：")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[s._v("Box"),t("span",{pre:!0,attrs:{class:"token generics function"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("Integer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" intBox "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Box")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("如果省略实际的类型参数，则创建一个原始类型的 "),t("code",[s._v("Box <T>")]),s._v("：")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[s._v("Box rawBox "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Box")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("因此，Box 是泛型 "),t("code",[s._v("Box <T>")]),s._v(" 的原始类型。但是，非泛型类或接口类型不是原始类型。")]),s._v(" "),t("p",[s._v("原始类型显示在传统代码中，因为很多 API 类（如 Collections 类）在 JDK 5.0 之前不是通用的。\n使用原始类型时，您基本上会获得预泛型的行为 - 一个 Box 会为您提供对象。为了向后兼容，允许将参数化类型分配给其原始类型：")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[s._v("Box"),t("span",{pre:!0,attrs:{class:"token generics function"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("String"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" stringBox "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Box")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nBox rawBox "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" stringBox"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("               "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// OK")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("但是，如果将原始类型分配给参数化类型，则会收到警告：")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[s._v("Box rawBox "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Box")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("           "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 原始类型")]),s._v("\nBox"),t("span",{pre:!0,attrs:{class:"token generics function"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("Integer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" intBox "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" rawBox"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 警告：未检查的转换异常")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("如果使用原始类型来调用在相应泛型中定义的泛型方法，也会得到警告：")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[s._v("Box"),t("span",{pre:!0,attrs:{class:"token generics function"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("String"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" stringBox "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Box")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nBox rawBox "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" stringBox"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nrawBox"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// warning: unchecked invocation to set(T)")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("该警告显示原始类型绕过了泛型类型检查，将不安全代码的捕获推迟到运行时。因此，你应该避免使用原始类型。")]),s._v(" "),t("p",[t("RouterLink",{attrs:{to:"/java/generics/erasure.html"}},[s._v("类型擦除")]),s._v(" 部分包含有关 Java 编译器如何使用原始类型的更多信息。")],1),s._v(" "),t("h2",{attrs:{id:"未经检查的错误消息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#未经检查的错误消息","aria-hidden":"true"}},[s._v("#")]),s._v(" 未经检查的错误消息")]),s._v(" "),t("p",[s._v("如前所述，将遗留代码与通用代码混合在一起时，可能会遇到类似于以下内容的警告消息：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("Note: Example.java uses unchecked or unsafe operations.\nNote: Recompile with -Xlint:unchecked "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" details.\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("在使用原始类型的旧 API 时，可能会发生这种情况，如以下示例所示：")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("WarningDemo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("String"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        Box"),t("span",{pre:!0,attrs:{class:"token generics function"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("Integer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" bi"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        bi "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("createBox")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" Box "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("createBox")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Box")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("术语 “unchecked” 表示编译器没有足够的类型信息来执行确保类型安全所需的所有类型的检查。\n虽然编译器提供了一个提示，但是默认情况下，“unchecked”警 告被禁用。要查看所有 “unchecked” 警告，请使用 -Xlint：unchecked 进行重新编译。")]),s._v(" "),t("p",[s._v("使用 -Xlint：unchecked 重新编译前面的示例会显示以下附加信息：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("WarningDemo.java:4: warning: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("unchecked"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" unchecked conversion\nfound   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),s._v(" Box\nrequired: Box"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("java.lang.Integer"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        bi "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" createBox"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                      ^\n1 warning\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("要完全禁用未经检查的警告，请使用 -Xlint：-unchecked 标志。该 "),t("code",[s._v("@SuppressWarnings(“unchecked”)")]),s._v(" 标注抑制 unchecked 警告。\n如果您对 "),t("code",[s._v("@SuppressWarnings")]),s._v(" 语法不熟悉，请参阅 "),t("RouterLink",{attrs:{to:"/java/annotations/"}},[s._v("注解")]),s._v("。")],1)])},[],!1,null,null,null);a.default=e.exports}}]);