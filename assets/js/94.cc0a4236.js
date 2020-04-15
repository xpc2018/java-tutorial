(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{513:function(a,s,e){"use strict";e.r(s);var t=e(21),r=Object(t.a)({},function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"将类添加到-jar-文件的类路径"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#将类添加到-jar-文件的类路径","aria-hidden":"true"}},[a._v("#")]),a._v(" 将类添加到 JAR 文件的类路径")]),a._v(" "),e("p",[a._v("您可能需要从 JAR 文件中引用其他 JAR 文件中的类。")]),a._v(" "),e("p",[a._v("例如，在一个典型的情况下，一个 applet 捆绑在一个 JAR 文件中，该 JAR 文件的清单引用了一个不同的 JAR 文件（或几个不同的 JAR 文件），作为该 applet 的用途。")]),a._v(" "),e("p",[a._v("您可以指定要包含在 Applet 或应用程序的清单文件的 Class-Path 头字段中的类。类路径报头的形式如下：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("Class-Path: jar1-name jar2-name directory-name/jar3-name\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("通过配置清单中的 Class-Path，在运行 jar 文件时就不需要制定 "),e("code",[a._v("-classpath")]),a._v(" 标志来 设置类路径")]),a._v(" "),e("p",[a._v("这一段话不是很明白是什么意思：")]),a._v(" "),e("p",[a._v("Note: The Class-Path header points to classes or JAR files on the local network, not JAR files within the JAR file or classes accessible over Internet protocols. To load classes in JAR files within a JAR file into the class path, you must write custom code to load those classes. For example, if MyJar.jar contains another JAR file called MyUtils.jar, you cannot use the Class-Path header in MyJar.jar's manifest to load classes in MyUtils.jar into the class path.")]),a._v(" "),e("h2",{attrs:{id:"一个例子"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一个例子","aria-hidden":"true"}},[a._v("#")]),a._v(" 一个例子")]),a._v(" "),e("p",[a._v("我们希望把 "),e("strong",[a._v("同目录下")]),a._v(" 的 MyUtils.jar 添加到 Class-Path 中；\n我们首先创建一个名为 Manifest.txt 的文本文件，内容如下：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("Class-Path: MyUtils.jar\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("然后我们通过输入以下命令创建一个名为 MyJar.jar 的 JAR 文件：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("jar cfm MyJar.jar Manifest.txt MyPackage/*.class\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("这会创建具有以下内容的清单的 JAR 文件：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("Manifest-Version: 1.0\nClass-Path: MyUtils.jar\nCreated-By: 1.7.0_06 (Oracle Corporation)\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("p",[a._v("当运行 MyJar.jar 时，Myutils.jar 将会被加载")])])},[],!1,null,null,null);s.default=r.exports}}]);