(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{658:function(t,s,a){"use strict";a.r(s);var n=a(21),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"符号链接或其他"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#符号链接或其他","aria-hidden":"true"}},[t._v("#")]),t._v(" 符号链接或其他")]),t._v(" "),a("p",[t._v("如前所述，"),a("code",[t._v("java.nio.file")]),t._v(" 包，特别是 "),a("code",[t._v("Path")]),t._v(" 类，是“链接感知”。每个 "),a("code",[t._v("Path")]),t._v(" 方法或者检测到遇到符号链接时该怎么做，\n或者提供一个选项，使您能够在遇到符号链接时配置该行为。")]),t._v(" "),a("p",[t._v("迄今为止的讨论一直是关于 "),a("RouterLink",{attrs:{to:"/essential/io/path.html"}},[t._v("该章节中的-符号软链接")]),t._v(" ，但是一些文件系统也支持"),a("code",[t._v("硬链接")]),t._v("。\n硬链接比象征性链接更具限制性，如下所示：")],1),t._v(" "),a("ul",[a("li",[t._v("链接的目标必须存在。")]),t._v(" "),a("li",[t._v("目录下通常不允许使用硬链接。")]),t._v(" "),a("li",[t._v("硬链接不允许跨越分区或卷。因此，它们不能跨文件系统存在。")]),t._v(" "),a("li",[t._v("一个硬链接看起来，像一个普通文件，所以他们很难找到。")]),t._v(" "),a("li",[t._v("对于所有意图和目的，硬链接与原始文件相同的实体。它们具有相同的文件权限，时间戳等。所有属性相同。")])]),t._v(" "),a("p",[t._v("由于这些限制，硬链接不像符号链接那样经常使用，但 Path 方法与硬链接无缝连接。")]),t._v(" "),a("p",[t._v("几种方法专门针对链接进行处理，并在以下部分中介绍：")]),t._v(" "),a("ul",[a("li",[t._v("创建符号链接")]),t._v(" "),a("li",[t._v("创建硬链接")]),t._v(" "),a("li",[t._v("检测符号链接")]),t._v(" "),a("li",[t._v("查找链接的目标")])]),t._v(" "),a("h2",{attrs:{id:"创建符号链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建符号链接","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建符号链接")]),t._v(" "),a("p",[t._v("如果您的文件系统支持它，您可以使用该 "),a("code",[t._v("createSymbolicLink(Path, Path, FileAttribute<?>)")]),t._v(" 方法创建一个符号链接 。\n第二个 Path 参数表示目标文件或目录，可能或可能不存在。以下代码片段将创建具有默认权限的符号链接：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("  Path newLink "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Paths"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"d:/server2.xml"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  Path target "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Paths"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"d:/server.xml"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      Files"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createSymbolicLink")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newLink"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IOException")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      System"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UnsupportedOperationException")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//某些文件系统不支持符号链接。")]),t._v("\n      System"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("p",[t._v("上面生成的文件我查看了一下，在 windos 中就是一个快捷图标文件，文件类型是 "),a("code",[t._v(".symlink")])]),t._v(" "),a("p",[t._v("该 FileAttributes 可变参数，可以指定被原子设置在创建链接时初始文件属性。但是，这个论点是为了将来的使用而进行的，目前还没有实现。")]),t._v(" "),a("h2",{attrs:{id:"创建硬链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建硬链接","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建硬链接")]),t._v(" "),a("p",[t._v("您可以使用该方法创建到现有文件的硬（或常规）链接 "),a("code",[t._v("createLink(Path, Path)")]),t._v("。第二个 Path 参数定位现有文件，它必须存在或抛出一个 "),a("code",[t._v("NoSuchFileException")]),t._v(" 。\n以下代码片段显示了如何创建链接：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("Path newLink "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nPath existingFile "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Files"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createLink")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newLink"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" existingFile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IOException")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    System"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UnsupportedOperationException")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 某些文件系统不支持硬链接")]),t._v("\n    System"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("p",[t._v("上面代码在 windows 中生成的文件我看了一下，最直观的感受就是：貌似是一个复制出来的文件，文件类型和源文件一样。没有看出来有什么区别")]),t._v(" "),a("h2",{attrs:{id:"检测符号链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#检测符号链接","aria-hidden":"true"}},[t._v("#")]),t._v(" 检测符号链接")]),t._v(" "),a("p",[t._v("要确定 Path 实例是否是符号链接，可以使用该 "),a("code",[t._v("isSymbolicLink(Path)")]),t._v(" 方法。以下代码片段：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("boolean isSymbolicLink = Files.isSymbolicLink(newLink)\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("注：该方法不能判断硬链接")]),t._v(" "),a("h2",{attrs:{id:"查找链接的目标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查找链接的目标","aria-hidden":"true"}},[t._v("#")]),t._v(" 查找链接的目标")]),t._v(" "),a("p",[t._v("您可以使用以下 "),a("code",[t._v("readSymbolicLink(Path)")]),t._v(" 方法获取符号链接的目标 ：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("  Path newLink "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Paths"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"d:/server2.xml"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  Path target "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Paths"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"d:/server.xml"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      System"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"该link文件"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n                                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\" '%s' 的目标文件是 '%s'%n\"")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" newLink"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        Files"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("readSymbolicLink")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newLink"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IOException")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      System"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("p",[t._v("这里使用上面创建链接后的文件来测试：输出如下：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("该 link 文件 "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'d:\\server2.xml'")]),t._v(" 的目标文件是 "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'d:\\server.xml'")]),t._v("\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("如果 Path 不是一个符号链接，这个方法会抛出一个 NotLinkException。")])])},[],!1,null,null,null);s.default=e.exports}}]);