(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{519:function(e,a,s){"use strict";s.r(a);var t=s(21),n=Object(t.a)({},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"了解签名和验证"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#了解签名和验证","aria-hidden":"true"}},[e._v("#")]),e._v(" 了解签名和验证")]),e._v(" "),s("p",[e._v("Java™ 平台使您能够对 JAR 文件进行数字签名。您出于同样的原因对文件进行数字签名，您可以使用钢笔和墨水签署纸质文档 - 让读者知道您编写了文档，\n或者至少文档已获得您的批准。")]),e._v(" "),s("p",[e._v("例如，当你签署一封信时，每个认可你签名的人都可以确认你写了这封信。同样，当您对文件进行数字签名时，\n任何“识别”您的数字签名的人都知道该文件来自您。“识别”电子签名的过程称为 "),s("strong",[e._v("验证")]),e._v("。")]),e._v(" "),s("p",[e._v("当 JAR 文件被签名时，您也可以选择为签名加上时间戳。与在纸质文档上添加日期类似，对签名加上时间标记标识了 JAR 文件签名的时间。\n时间戳可用于验证用于签署 JAR 文件的证书在签名时是否有效。")]),e._v(" "),s("p",[e._v("签名和验证文件的能力是 Java 平台安全架构的重要组成部分。安全性由运行时有效的安全策略控制。\n您可以配置该策略以将安全权限授予小程序和应用程序。例如，您可以授予 applet 执行正常禁止操作的权限，\n例如读取和写入本地文件或运行本地可执行程序。如果您已经下载了一些由可信实体签署的代码，\n那么您可以将此事实用作决定分配给代码的安全权限的标准。")]),e._v(" "),s("p",[e._v("一旦您（或您的浏览器）确认小程序来自可信来源，您可以让平台放松安全限制，让小程序执行通常会被禁止的操作。\n受信任的小程序可以具有由有效的策略文件指定的自由。")]),e._v(" "),s("p",[e._v("Java 平台能够签名和验证通过使用特殊的数字称为公共和私有密钥。公钥和私钥是成对出现的，它们扮演着互补的角色。")]),e._v(" "),s("p",[e._v("私钥是可以用来签名文件的电子“笔”。顾名思义，您的私钥只有您自己知道，因此其他人无法“伪造”您的签名。\n使用您的私钥签名的文件只能通过相应的公钥验证。")]),e._v(" "),s("p",[e._v("但是，公钥和私钥本身不足以真正验证签名。即使您已验证签名文件包含匹配的密钥对，\n仍然需要某种方法来确认公钥实际上来自它声称来自的签名者。")]),e._v(" "),s("p",[e._v("因此，需要另外一个元素来进行签名和验证工作。该附加元素是签名者在签名的 JAR 文件中包含的证书。\n证书是来自公认证书颁发机构的数字签名声明，表明谁拥有特定的公钥。认证机构是实体（通常是专门从事数字安全的公司），\n在整个行业中都受到信任，为密钥及其所有者签发证书。对于签名的 JAR 文件，证书指示谁拥有 JAR 文件中包含的公钥。")]),e._v(" "),s("p",[e._v("当您签署一个 JAR 文件时，您的公钥将与相关证书一起放入存档中，以便任何想要验证您的签名的人都可以轻松使用它。")]),e._v(" "),s("p",[e._v("总结数字签名：")]),e._v(" "),s("ul",[s("li",[e._v("签名者使用私钥签名 JAR 文件。")]),e._v(" "),s("li",[e._v("相应的公钥和它的证书一起被放置在 JAR 文件中，以便任何想要验证签名的人都可以使用它。")])]),e._v(" "),s("h2",{attrs:{id:"digests-and-the-signature-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#digests-and-the-signature-file","aria-hidden":"true"}},[e._v("#")]),e._v(" Digests and the Signature File")]),e._v(" "),s("p",[e._v("在签署 JAR 文件时，归档文件中的每个文件都会在归档文件清单中给出一个摘要条目。以下是这样一个条目的例子：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Name: test/classes/ClassOne.class\nSHA1-Digest: TD1GZt8G11dXY2p4olSZPc5Rj64=\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("摘要值是文件内容的哈希或编码表示，就像它们在签名时一样。当且仅当文件本身发生更改时，文件的摘要才会更改。")]),e._v(" "),s("p",[e._v("当签名 JAR 文件时，会自动生成签名文件并将其放入 JAR 文件的 META-INF 目录中，该目录是包含该存档清单的相同目录。\n签名文件具有扩展名为 .SF 的文件名。这是一个签名文件内容的例子：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Signature-Version: 1.0\nSHA1-Digest-Manifest: h1yS+K9T7DyHtZrtI+LxvgqaMYM=\nCreated-By: 1.7.0_06 (Oracle Corporation)\n\nName: test/classes/ClassOne.class\nSHA1-Digest: fcav7ShIG6i86xPepmitOVo4vWY=\n\nName: test/classes/ClassTwo.class\nSHA1-Digest: xrQem9snnPhLySDiZyclMlsFdtM=\n\nName: test/images/ImageOne.gif\nSHA1-Digest: kdHbE7kL9ZHLgK7akHttYV4XIa0=\n\nName: test/images/ImageTwo.gif\nSHA1-Digest: mF0D5zpk68R4oaxEqoS9Q7nhm60=\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br")])]),s("p",[e._v("如您所见，签名文件包含归档文件的摘要条目，它们与清单中的摘要值条目类似。但是，虽然清单中的摘要值是从文件本身计算的，\n但签名文件中的摘要值是根据清单中的相应条目计算得出的。签名文件还包含整个清单的摘要值（请参阅上例中的 SHA1-Digest-Manifest 标题）。")]),e._v(" "),s("p",[e._v("当正在验证已签名的 JAR 文件时，将重新计算每个文件的摘要并与清单中记录的摘要进行比较，\n以确保 JAR 文件的内容自签名以来未发生更改。作为附加检查，重新计算清单文件本身的摘要值，并将其与签名文件中记录的值进行比较。")]),e._v(" "),s("p",[e._v("您可以在 JDK™ 文档的 "),s("a",{attrs:{href:"https://docs.oracle.com/javase/8/docs/technotes/guides/jar/jar.html#JAR_Manifest",target:"_blank",rel:"noopener noreferrer"}},[e._v("Manifest Format"),s("OutboundLink")],1),e._v("\n页面上阅读有关签名文件的附加信息 。")]),e._v(" "),s("h2",{attrs:{id:"签名块文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#签名块文件","aria-hidden":"true"}},[e._v("#")]),e._v(" 签名块文件")]),e._v(" "),s("p",[e._v("除签名文件外，在签名 JAR 文件时，签名块文件自动放置在 META-INF 目录中。与清单文件或签名文件不同，签名块文件不可读。")]),e._v(" "),s("p",[e._v("签名块文件包含验证所必需的两个元素：")]),e._v(" "),s("ul",[s("li",[e._v("用签名者的私钥生成的 JAR 文件的数字签名")]),e._v(" "),s("li",[e._v("包含签名者公钥的证书，供任何想验证签名 JAR 文件的人使用")])]),e._v(" "),s("p",[e._v("签名块文件名通常会有一个 .DSA 扩展名，表明它们是由默认的数字签名算法创建的。\n如果使用与某些其他标准算法相关的密钥进行签名，则可以使用其他文件扩展名。")]),e._v(" "),s("h2",{attrs:{id:"相关文档"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相关文档","aria-hidden":"true"}},[e._v("#")]),e._v(" 相关文档")]),e._v(" "),s("p",[e._v("有关密钥，证书和证书颁发机构的更多信息，请参阅")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://docs.oracle.com/javase/8/docs/technotes/tools/index.html#security",target:"_blank",rel:"noopener noreferrer"}},[e._v("JDK 安全工具"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://docs.oracle.com/javase/8/docs/technotes/guides/security/cert3.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("X.509 证书"),s("OutboundLink")],1)])]),e._v(" "),s("p",[e._v("有关 Java 平台安全体系结构的更多信息，请参阅此相关文档：")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://docs.oracle.com/javase/tutorial/security/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Java SE 中的安全特性"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"http://www.oracle.com/technetwork/java/javase/tech/index-jsp-136007.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Java SE 安全性"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://docs.oracle.com/javase/8/docs/technotes/tools/index.html#security",target:"_blank",rel:"noopener noreferrer"}},[e._v("安全工具"),s("OutboundLink")],1)])])])},[],!1,null,null,null);a.default=n.exports}}]);