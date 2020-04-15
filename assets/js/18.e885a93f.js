(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{339:function(t,a,s){t.exports=s.p+"assets/img/exceptions-throwable.0a69d0e4.png"},630:function(t,a,s){"use strict";s.r(a);var n=s(21),e=Object(n.a)({},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"如何抛出异常"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如何抛出异常","aria-hidden":"true"}},[t._v("#")]),t._v(" 如何抛出异常")]),t._v(" "),n("p",[t._v("一些代码必须抛出一个异常，任何代码都有可能抛出异常，无论什么引发异常，它总是抛出与 throw 语句。")]),t._v(" "),n("p",[t._v("您可能已经注意到，Java 平台提供了许多异常类。所有类都是 "),n("code",[t._v("Throwable")]),t._v(" 的子类。并且都允许程序区分在程序执行期间可能发生的各种类型的异常。")]),t._v(" "),n("p",[t._v("你还可以创建自己的异常类来表示在你编写的类中可能发生的问题。事实上，如果你是包开发人员，\n您可能必须创建一组自己的异常类，以允许用户区分包中可能发生的错误与 Java 平台或则其他包中发生的错误。")]),t._v(" "),n("p",[t._v("你还可以创建 "),n("strong",[t._v("异常链")]),t._v("，更多信息请参阅 "),n("RouterLink",{attrs:{to:"/essential/exceptions/chained.html"}},[t._v("异常链")]),t._v(" 部分")],1),t._v(" "),n("h2",{attrs:{id:"throw-语句"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#throw-语句","aria-hidden":"true"}},[t._v("#")]),t._v(" throw 语句")]),t._v(" "),n("p",[t._v("所有方法都可以使用 "),n("code",[t._v("throw")]),t._v(" 语句。语法是：")]),t._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" Throwable 对象\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[t._v("让我们来看看 throw 上下文中的语句。以下 pop 方法来自实现公共堆栈对象的类。\n该方法从堆栈中删除顶层元素并返回对象。")]),t._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" Object "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("pop")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Object obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("size "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EmptyStackException")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    obj "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("objectAt")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("size "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setObjectAt")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("size "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" null"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    size"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br")])]),n("p",[t._v("该 pop 方法查看堆栈上是否有元素，没有则抛出一个异常对象，你需要记住的是：只可以抛出 java.lang.Throwable 的实例")]),t._v(" "),n("p",[t._v("请注意：pop 方法的声明不包含 "),n("code",[t._v("throws")]),t._v(" 子句。"),n("code",[t._v("EmptyStackException")]),t._v(" 是非检查异常。\n因此 pop 方法可以不声明它")]),t._v(" "),n("h2",{attrs:{id:"throwable-类及其子类"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#throwable-类及其子类","aria-hidden":"true"}},[t._v("#")]),t._v(" Throwable 类及其子类")]),t._v(" "),n("p",[t._v("下图说明了 Throwable 类的类层次结构及其最重要的子类。正如你可以看到的，Throwable 有两个直接的后代： Error 和 Exception。")]),t._v(" "),n("p",[n("img",{attrs:{src:s(339),alt:""}})]),t._v(" "),n("h2",{attrs:{id:"error-类"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#error-类","aria-hidden":"true"}},[t._v("#")]),t._v(" Error 类")]),t._v(" "),n("p",[t._v("当 Java 虚拟机中发生动态链接失败或其他硬故障时，虚拟机抛出 Error。简单的程序通常不捕获或抛出 Error。")]),t._v(" "),n("h2",{attrs:{id:"exception-类"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#exception-类","aria-hidden":"true"}},[t._v("#")]),t._v(" Exception 类")]),t._v(" "),n("p",[t._v("大多数程序抛出和捕获从 Exception 类派生的对象。一个 Exception 表示出现一个问题，但它不是一个严重的系统的问题。你写的大多数程序会抛出和捕捉 Exceptions 而不是 Errors。")]),t._v(" "),n("p",[t._v("Java 平台定义了 Exception 类的许多后代。这些后代表示可能发生的各种类型的异常。例如:")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("IllegalAccessException")]),t._v(" "),n("p",[t._v("当应用程序试图反射性地创建一个实例（而不是数组）、设置或获取一个字段，或者调用一个方法，但当前正在执行的方法无法访问指定类、字段、方法或构造方法的定义时")])]),t._v(" "),n("li",[n("p",[t._v("NegativeArraySizeException 如果应用程序试图创建大小为负的数组，则抛出该异常。")])])]),t._v(" "),n("p",[t._v("一个 Exception 子类：RuntimeException 是那些可能在 Java 虚拟机正常运行期间抛出的异常的超类。")]),t._v(" "),n("p",[t._v("运行时异常的一个示例是：NullPointerException 当方法尝试通过引用访问对象的成员时发生 null。")]),t._v(" "),n("p",[n("code",[t._v("Unchecked 异常 - 争议")]),t._v(" 章节将讨论为什么大多数程序不应该抛出运行时异常。")])])},[],!1,null,null,null);a.default=e.exports}}]);