(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{545:function(n,a,s){"use strict";s.r(a);var e=s(15),t=Object(e.a)({},(function(){var n=this,a=n.$createElement,s=n._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h2",{attrs:{id:"冒泡排序原理和实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#冒泡排序原理和实现"}},[n._v("#")]),n._v(" 冒泡排序原理和实现")]),n._v(" "),s("h2",{attrs:{id:"算法的概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#算法的概念"}},[n._v("#")]),n._v(" 算法的概念")]),n._v(" "),s("p",[n._v("解决特定问题求解步骤的描述，在计算机中表现为指令的有限序列，并且每条指令表示一个或多个操作\n一个问题有多种算法，每种算法有不同的效率。")]),n._v(" "),s("p",[n._v("一个算法有五个特征：")]),n._v(" "),s("ul",[s("li",[n._v("有穷性：算法可以计算完，不能无穷尽的计算下去")]),n._v(" "),s("li",[n._v("确切性：每一步都是有意义的")]),n._v(" "),s("li",[n._v("输入项：可以输入")]),n._v(" "),s("li",[n._v("输出项：给一个结果")]),n._v(" "),s("li",[n._v("可行性：可以执行")])]),n._v(" "),s("h2",{attrs:{id:"时间复杂度和空间复杂度的概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#时间复杂度和空间复杂度的概念"}},[n._v("#")]),n._v(" 时间复杂度和空间复杂度的概念")]),n._v(" "),s("p",[n._v("算法分析的目的在于选择合适的算法和改进算法，一个算法的评价主要在于时间复杂度和空间复杂度")]),n._v(" "),s("h3",{attrs:{id:"时间复杂度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#时间复杂度"}},[n._v("#")]),n._v(" 时间复杂度")]),n._v(" "),s("p",[n._v("执行算法所需要的计算工作量，一般来说计算算法是问题规模n的函数f(n),算法的时间复杂度也因此记做T(n)=O(f(n))")]),n._v(" "),s("p",[n._v("问题规模n越大，算法执行的时间的增长率与f(n)的增长率正相关，称做渐进时间复杂度(Asymptotic Time Complexity)")]),n._v(" "),s("p",[n._v("时间复杂度的计算方式 ：O(n^2)、O(1)、O(n)")]),n._v(" "),s("p",[n._v("比如：从1到n进行累加，计算了n次，则时间复杂度为O(n)")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("# 1+2+3+4....+n\n$sum = 0; \nfor($i=1;$i<=$n;$i++) {\n    $sum+=$i;\n}\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br")])]),s("p",[n._v("用常数1来取代所有时间中的加法常数，对于计算次数固定的不论次数是多少，则使用O(1)来进行表示")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("# 1+2+3+4....+n\n$sum = 0; \nfor($i=1;$i<=3;$i++) {\n    $sum+=$i;\n}\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br")])]),s("p",[n._v("在修改后的运行函数中，只保留最高阶项，对于计算次数如果为n^2+n+1，则使用最高阶来表示O(n^2)")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("# 1+2+3+4....+n\n$sum = 0; \n// 里层循环n次，外层循环n次，计做n^2\nfor($i=1;$i<=$n;$i++) {\n    // 计算n次\n    for($j=$i;$j<=$n;$j++) {\n        $sum+=$i;\n    }\n}\n\n// n\nfor($i=1;$i<=$n;$i++) {\n    // 计算n次\n    $sum+=1;\n}\n\n// 1\necho $n;\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br")])]),s("p",[n._v("如果最高阶存在且不是1，则去除以与这个项相乘的常数。对于计算次数为2n^2+3n+1,则时间复杂度为O(n^2)")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("# 1+2+3+4....+n\n$sum = 0; \n// \nfor($i=1;$i<=$n;$i++) {\n    $sum+=$i;\n}\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br")])]),s("p",[n._v("常见的时间复杂度")]),n._v(" "),s("ul",[s("li",[n._v("常数阶 O(1)")]),n._v(" "),s("li",[n._v("线性阶O(n)")]),n._v(" "),s("li",[n._v("平(立)方阶O(n^2)/O(n^3)")]),n._v(" "),s("li",[n._v("特殊平方阶：O(n^2/2+n/2)计做O(n^2)")]),n._v(" "),s("li",[n._v("对数阶：O(log2n)")]),n._v(" "),s("li",[n._v("指数阶")])]),n._v(" "),s("p",[n._v("效率：值越小，代表效率越高,如下是各个算法的效率排行")]),n._v(" "),s("p",[n._v("O(1) > O(log2n) > O(n) > O(nlog2n) > O(n^2) > O(n>3) > O(2^n) > O(n!) > O(n^n)")]),n._v(" "),s("p",[n._v("最坏情况：最坏情况时的运行时间，一种保证，如果没有特别说明，说的时间复杂度即为最坏情况的时间复杂度\n平均情况：期望的运行时间")]),n._v(" "),s("h3",{attrs:{id:"空间复杂度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#空间复杂度"}},[n._v("#")]),n._v(" 空间复杂度")]),n._v(" "),s("p",[n._v("算法需要消耗的内存空间 ，记作S(n)=O(f(n))。包括程序代码所占用的空间，输入数据所占用的内存空间和辅助变量所占用的内存空间。计算和表达方式与时间复杂度类似，一般用复杂度的渐进性来表示。 有时用空间换时间")]),n._v(" "),s("h2",{attrs:{id:"常见的排序算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见的排序算法"}},[n._v("#")]),n._v(" 常见的排序算法")]),n._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://baike.baidu.com/item/%E5%86%92%E6%B3%A1%E6%8E%92%E5%BA%8F",target:"_blank",rel:"noopener noreferrer"}},[n._v("冒泡排序"),s("OutboundLink")],1)]),n._v(" "),s("li",[s("a",{attrs:{href:"https://baike.baidu.com/item/%E7%9B%B4%E6%8E%A5%E6%8F%92%E5%85%A5%E6%8E%92%E5%BA%8F",target:"_blank",rel:"noopener noreferrer"}},[n._v("直接插入排序"),s("OutboundLink")],1)]),n._v(" "),s("li",[s("a",{attrs:{href:"https://baike.baidu.com/item/%E5%B8%8C%E5%B0%94%E6%8E%92%E5%BA%8F",target:"_blank",rel:"noopener noreferrer"}},[n._v("希尔排序"),s("OutboundLink")],1)]),n._v(" "),s("li",[s("a",{attrs:{href:"https://baike.baidu.com/item/%E9%80%89%E6%8B%A9%E6%8E%92%E5%BA%8F",target:"_blank",rel:"noopener noreferrer"}},[n._v("选择排序"),s("OutboundLink")],1)]),n._v(" "),s("li",[s("a",{attrs:{href:"https://baike.baidu.com/item/%E5%BF%AB%E9%80%9F%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95?fromtitle=%E5%BF%AB%E9%80%9F%E6%8E%92%E5%BA%8F&fromid=2084344",target:"_blank",rel:"noopener noreferrer"}},[n._v("快速排序"),s("OutboundLink")],1)]),n._v(" "),s("li",[s("a",{attrs:{href:"https://baike.baidu.com/item/%E5%A0%86%E6%8E%92%E5%BA%8F",target:"_blank",rel:"noopener noreferrer"}},[n._v("堆排序"),s("OutboundLink")],1)]),n._v(" "),s("li",[s("a",{attrs:{href:"https://baike.baidu.com/item/%E5%BD%92%E5%B9%B6%E6%8E%92%E5%BA%8F",target:"_blank",rel:"noopener noreferrer"}},[n._v("归并排序"),s("OutboundLink")],1)])]),n._v(" "),s("h2",{attrs:{id:"常见的查找算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见的查找算法"}},[n._v("#")]),n._v(" 常见的查找算法")]),n._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://baike.baidu.com/item/%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE",target:"_blank",rel:"noopener noreferrer"}},[n._v("二分查找"),s("OutboundLink")],1)]),n._v(" "),s("li",[s("a",{attrs:{href:"https://baike.baidu.com/item/%E9%A1%BA%E5%BA%8F%E6%9F%A5%E6%89%BE",target:"_blank",rel:"noopener noreferrer"}},[n._v("顺序查找"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=t.exports}}]);