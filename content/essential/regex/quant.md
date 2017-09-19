# 量词

量词允许您指定要在匹配中出现的次数。为方便起见，Pattern API规范描述的贪婪，不情愿，和占有量词如下所示。乍一看，它可能会出现的量词X?，X？？和X?+做同样的事，因为他们都承诺匹配”X，一次或根本没有”。有细微的差异，将在本节结尾附近加以解释


| 贪婪	| 不情愿的|占有|含义
|--------------------------
| X?	| X??	| X?+	X，一次或根本没有
| X*	| X*?	| X*+	X，零次或多次
| X+	| X+?	| X++	X，一次或多次
| X{n}	| X{n}?	| X{n}+	X，正好是n时间
| X{n,}	| X{n,}?| 	X{n,}+	X，至少n时间
| X{n,m}| X{n,m}?| 	X{n,m}+	X，至少n但不超过m次数

让我们从创建三个不同的正则表达式开始我们看看贪婪量词：字母“A”，然后要么?，*或+。让我们看看当这些表达式对输入空字符（""）串进行测试时会发生什么：

```java
---- Test code ----
System.out.println("=== a?");
regexTest("a?", "");
System.out.println("=== a*");
regexTest("a*", "");
System.out.println("=== a+");
regexTest("a+", "");
        
---- Output ----
=== a?
我发现文本中的 "" 在开始索引 0 和 结束索引 0.
=== a*
我发现文本中的 "" 在开始索引 0 和 结束索引 0.
=== a+
No match found.
        
```

## 零长度匹配
在上述示例中，匹配在前两种情况下成功，因为表达式a?和a*两者都允许零出现该字母a。您还会注意到，起始和结束索引都为零，这与我们迄今为止看到的任何示例不同。空输入字符串""没有长度，因此测试在索引0上完全不匹配。这种匹配被称为零长度匹配。在几个情况下可能会发生零长度匹配：
1. 在输入字符串的开头，
2. 输入字符串的最后一个字符之后
3. 输入字符串的任意两个字符之间的空输入字符串。

零长度匹配很容易识别，因为它们总是在相同的索引位置开始和结束。

我们再来一些例子来探索零长度的匹配。将输入字符串更改为单个字母“a”，您会注意到有趣的东西：

