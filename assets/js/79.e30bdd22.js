(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{491:function(t,v,_){"use strict";_.r(v);var d=_(21),e=Object(d.a)({},function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"概述"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#概述","aria-hidden":"true"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),_("p",[t._v("有两种表示时间的基本方法。")]),t._v(" "),_("ul",[_("li",[t._v("人类时间：比如年、月、日、时、分和秒。")]),t._v(" "),_("li",[t._v("机器时间：以时间线连续测量时间，从一个称为时代的起点开始，以纳秒为单位。")])]),t._v(" "),_("p",[t._v("Date-Time 包提供了丰富的表示日期和时间的类。Date-Time API 中的某些类用于表示机器时间，其他类更适合表示人类时间。")]),t._v(" "),_("p",[t._v("首先确定您需要的日期和时间的哪些方面，然后选择满足这些需求的课程或课程。选择基于时间的课程时，\n首先要确定是否需要表示人类时间或机器时间。然后，您可以确定需要表示的时间。你需要一个时区吗？\n日期和时间？仅限日期？如果你需要一个日期，你需要月，日和年，或者一个子集？")]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),_("p",[t._v("术语：在本教程中，Date-Time API 中用于捕获和处理日期或时间值（如 Instant，LocalDateTime 和 ZonedDateTime）\n的类称为基于时间的类（或类型）。支持类型，如 TemporalAdjuster 接口或 DayOfWeek 枚举，不包含在此定义中。")])]),t._v(" "),_("p",[t._v("例如，您可以使用 LocalDate 对象来表示出生日期，因为大多数人在同一天观察他们的生日，\n无论他们是在其出生城市还是在国际日期线的另一侧的全球范围内。如果您正在追踪占星术时间，\n那么您可能需要使用 LocalDateTime 对象来表示出生日期和时间，或者使用 ZonedDateTime（其中还包括时区）。\n如果你正在创建一个时间戳，那么你很可能会使用一个 Instant，它允许你将时间线上的一个瞬时点与另一个点进行比较。")]),t._v(" "),_("p",[t._v("下表总结了 java.time 包中存储日期或时间信息或可用于测量时间量的基于时间的类。\n列中的复选标记表示该类使用该特定类型的数据，而 toString 列显示使用 toString 方法打印的实例。")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("类或枚举")]),t._v(" "),_("th",[t._v("Year")]),t._v(" "),_("th",[t._v("Month")]),t._v(" "),_("th",[t._v("Day")]),t._v(" "),_("th",[t._v("Hours")]),t._v(" "),_("th",[t._v("Minutes")]),t._v(" "),_("th",[t._v("Seconds*")]),t._v(" "),_("th",[t._v("区域偏移 / Zone Offset")]),t._v(" "),_("th",[t._v("区域 ID / Zone ID")]),t._v(" "),_("th",[t._v("toString 输出")]),t._v(" "),_("th",[t._v("相关课程")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Instant")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("✔")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("2013-08-20T15：16：26.355Z")]),t._v(" "),_("td",[_("RouterLink",{attrs:{to:"/datetime/iso/instant.html"}},[t._v("瞬时")])],1)]),t._v(" "),_("tr",[_("td",[t._v("LocalDate")]),t._v(" "),_("td",[t._v("✔")]),t._v(" "),_("td",[t._v("✔")]),t._v(" "),_("td",[t._v("✔")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("2013-08-20")]),t._v(" "),_("td",[_("RouterLink",{attrs:{to:"/datetime/iso/date.html"}},[t._v("日期类 ")])],1)]),t._v(" "),_("tr",[_("td",[t._v("LocalDateTime")]),t._v(" "),_("td",[t._v("✔")]),t._v(" "),_("td",[t._v("✔")]),t._v(" "),_("td",[t._v("✔")]),t._v(" "),_("td",[t._v("✔")]),t._v(" "),_("td",[t._v("✔")]),t._v(" "),_("td",[t._v("✔")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("2013-08-20T08:16:26.937")]),t._v(" "),_("td",[_("RouterLink",{attrs:{to:"/datetime/iso/datetime.html"}},[t._v("日期和时间类 ")])],1)]),t._v(" "),_("tr",[_("td",[t._v("ZonedDateTime")]),t._v(" "),_("td",[t._v("✔")]),t._v(" "),_("td",[t._v("✔")]),t._v(" "),_("td",[t._v("✔")]),t._v(" "),_("td",[t._v("✔")]),t._v(" "),_("td",[t._v("✔")]),t._v(" "),_("td",[t._v("✔")]),t._v(" "),_("td",[t._v("✔")]),t._v(" "),_("td",[t._v("✔")]),t._v(" "),_("td",[t._v("2013-08-21T00:16:26.941+09:00[Asia/Tokyo]")]),t._v(" "),_("td",[_("RouterLink",{attrs:{to:"/datetime/iso/timezones.html"}},[t._v("时区和偏移类")])],1)]),t._v(" "),_("tr",[_("td",[t._v("LocalTime")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("✔")]),t._v(" "),_("td",[t._v("✔")]),t._v(" "),_("td",[t._v("✔")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("08:16:26.943")]),t._v(" "),_("td",[_("RouterLink",{attrs:{to:"/datetime/iso/iso/datetime.html"}},[t._v("日期和时间类 ")])],1)]),t._v(" "),_("tr",[_("td",[t._v("MonthDay")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("✔")]),t._v(" "),_("td",[t._v("✔")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("--08-20")]),t._v(" "),_("td",[_("RouterLink",{attrs:{to:"/datetime/iso/date.html"}},[t._v("日期类 ")])],1)]),t._v(" "),_("tr",[_("td",[t._v("Year")]),t._v(" "),_("td",[t._v("✔")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("2013")]),t._v(" "),_("td",[_("RouterLink",{attrs:{to:"/datetime/iso/date.html"}},[t._v("日期类 ")])],1)]),t._v(" "),_("tr",[_("td",[t._v("YearMonth")]),t._v(" "),_("td",[t._v("✔")]),t._v(" "),_("td",[t._v("✔")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("2013-08")]),t._v(" "),_("td",[_("RouterLink",{attrs:{to:"/datetime/iso/date.html"}},[t._v("日期类 ")])],1)]),t._v(" "),_("tr",[_("td",[t._v("Month")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("✔")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("AUGUST")]),t._v(" "),_("td",[_("RouterLink",{attrs:{to:"/datetime/iso/enum.html"}},[t._v("DayOfWeek and Month Enums")])],1)]),t._v(" "),_("tr",[_("td",[t._v("OffsetDateTime")]),t._v(" "),_("td",[t._v("✔")]),t._v(" "),_("td",[t._v("✔")]),t._v(" "),_("td",[t._v("✔")]),t._v(" "),_("td",[t._v("✔")]),t._v(" "),_("td",[t._v("✔")]),t._v(" "),_("td",[t._v("✔")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("2013-08-20T08:16:26.954-07:00")]),t._v(" "),_("td",[_("RouterLink",{attrs:{to:"/datetime/iso/timezones.html"}},[t._v("时区和偏移类")])],1)]),t._v(" "),_("tr",[_("td",[t._v("OffsetTime")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("✔")]),t._v(" "),_("td",[t._v("✔")]),t._v(" "),_("td",[t._v("✔")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[_("RouterLink",{attrs:{to:"/datetime/iso/timezones.html"}},[t._v("时区和偏移类")])],1)]),t._v(" "),_("tr",[_("td",[t._v("Duration")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[_("code",[t._v("**")])]),t._v(" "),_("td",[_("code",[t._v("**")])]),t._v(" "),_("td",[_("code",[t._v("**")])]),t._v(" "),_("td",[t._v("✔")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("PT20H (20 hours)")]),t._v(" "),_("td",[_("RouterLink",{attrs:{to:"/datetime/iso/period.html"}},[t._v("周期和持续时间")])],1)]),t._v(" "),_("tr",[_("td",[t._v("Period")]),t._v(" "),_("td",[t._v("✔")]),t._v(" "),_("td",[t._v("✔")]),t._v(" "),_("td",[t._v("✔")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[_("code",[t._v("***")])]),t._v(" "),_("td",[_("code",[t._v("***")])]),t._v(" "),_("td",[t._v("P10D (10 days)")]),t._v(" "),_("td",[_("RouterLink",{attrs:{to:"/datetime/iso/period.html"}},[t._v("周期和持续时间")])],1)])])]),t._v(" "),_("ul",[_("li",[_("code",[t._v("*")]),t._v(" 秒被捕获到纳秒精度。")]),t._v(" "),_("li",[_("code",[t._v("**")]),t._v(" 这个类不存储这些信息，但有方法在这些单元中提供时间。")]),t._v(" "),_("li",[_("code",[t._v("***")]),t._v(" 将周期添加到 ZonedDateTime 时，会观察到夏令时或其他本地时差。")])])])},[],!1,null,null,null);v.default=e.exports}}]);