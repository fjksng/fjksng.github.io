(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{591:function(t,a,s){"use strict";s.r(a);var n=s(9),p=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("介绍")]),t._v(" "),s("p",[t._v("小程序学习笔记第三天")])]),t._v(" "),s("p",[s("strong",[t._v("1.什么是页面导航")])]),t._v(" "),s("p",[t._v("页面导航指的是页面之间的相互跳转。例如，浏览器中实现页面导航的方式有如下两种:")]),t._v(" "),s("p",[t._v("①"),s("a",[t._v(" 链接")])]),t._v(" "),s("p",[t._v("②location.href")]),t._v(" "),s("p",[s("strong",[t._v("2.小程序中实现页面导航的两种方式")])]),t._v(" "),s("p",[t._v("①声明式导航")]),t._v(" "),s("ul",[s("li",[t._v("在页面上声明一个"),s("navigator",[t._v("导航组件")])],1),t._v(" "),s("li",[t._v("通过点击"),s("navigator",[t._v("组件实现页面跳转")])],1)]),t._v(" "),s("p",[t._v("②编程式导航")]),t._v(" "),s("ul",[s("li",[t._v("调用小程序的导航API,实现页面的跳转")])]),t._v(" "),s("h2",{attrs:{id:"_1-声明式导航"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-声明式导航"}},[t._v("#")]),t._v(" 1.声明式导航")]),t._v(" "),s("p",[s("strong",[t._v("1.导航到tabBar页面")])]),t._v(" "),s("p",[t._v("tabBar页面指的是被配置为tabBar的页面。")]),t._v(" "),s("p",[t._v("在使用**"),s("navigator",[t._v("**组件跳转到指定的tabBar页面时，需要指定url属性和open-type属性,其中:")])],1),t._v(" "),s("ul",[s("li",[t._v("url表示要跳转的页面的地址，必须以/开头")]),t._v(" "),s("li",[t._v("open-type表示跳转的方式，必须为switchTab")])]),t._v(" "),s("p",[t._v("示例代码如下:")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("navigator")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ur1")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v(" /pages/ message/message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("open-type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v(" switchTab"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("导航到消息页面"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("navigator")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[s("strong",[t._v("2.导航到非tabBar页面")])]),t._v(" "),s("p",[t._v("非tabBar页面指的是没有被配置为tabBar的页面。")]),t._v(" "),s("p",[t._v("在使用"),s("navigator",[t._v("组件跳转到普通的非tabBar页面时，则需要指定url属性和open-type属性,其中:")])],1),t._v(" "),s("ul",[s("li",[t._v("url 表示要跳转的页面的地址，必须以/开头")]),t._v(" "),s("li",[t._v("open-type 表示跳转的方式,必须为navigate")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("navigator")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/pages/test/test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("open-type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("navigate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("跳转到test页面"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("navigator")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[s("strong",[t._v('注意:为了简便,在导航到非tabBar页面时，open-type="navigate" 属性可以省略。')])]),t._v(" "),s("p",[s("strong",[t._v("3.后退导航")])]),t._v(" "),s("p",[t._v("如果要后退到.上一页面或多级页面,则需要指定open-type属性和delta属性，其中:")]),t._v(" "),s("ul",[s("li",[t._v("open-type的值必须是navigateBack, 表示要进行后退导航")]),t._v(" "),s("li",[t._v("delta 的值必须是数字，表示要后退的层级")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("navigator")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("open-type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("navigateBack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("delta")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("返回上一页"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("navigator")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[s("strong",[t._v("注意:为了简便,如果只是后退到上一页面，则可以省略delta属性，因为其默认值就是1。")])]),t._v(" "),s("h2",{attrs:{id:"_2-编程式导航"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-编程式导航"}},[t._v("#")]),t._v(" 2.编程式导航")]),t._v(" "),s("p",[s("strong",[t._v("1.导航到tabBar页面")])]),t._v(" "),s("p",[t._v("调用"),s("strong",[t._v("wx.switchTab(Object object)方法")]),t._v(",可以跳转到tabBar页面。其中Object参数对象的属性列表如下:")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2022/06/11/bYa5ECAGJV6k2N7.png",alt:"image-20220611101322590"}})]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("//页面结构\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("bindtap")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("gotoContact"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("跳转到联系我们"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//home.ts")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("gotoContact")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     wx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("switchTab")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     \turl"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/pages/contact/contact"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("p",[s("strong",[t._v("2.导航到非tabBar页面")])]),t._v(" "),s("p",[t._v("调用wx.navigateTo(Object object)方法，可以跳转到非tabBar的页面。其中Object参数对象的属性列表")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2022/06/11/GPY3ZMIs5Tjw1Ax.png",alt:"image-20220611101942583"}})]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[t._v("wx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("navigateTo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    url"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/pages/study/study"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[s("strong",[t._v("3.后退导航")])]),t._v(" "),s("p",[t._v("调用wx.navigateBack(Object object)方法，可以返回.上一页面或多级页面。其中Object参数对象可选的")]),t._v(" "),s("p",[t._v("属性列表如下:")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2022/06/11/SXuG5vTbgowxH7s.png",alt:"image-20220611102911722"}})]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onBack")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\twx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("navigateBack")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("h2",{attrs:{id:"_3-导航传参"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-导航传参"}},[t._v("#")]),t._v(" 3.导航传参")]),t._v(" "),s("p",[s("strong",[t._v("1.声明式导航传参")])]),t._v(" "),s("p",[t._v("navigator组件的url属性用来指定将要跳转到的页面的路径。同时，路径的后面还可以携带参数:")]),t._v(" "),s("ul",[s("li",[t._v("参数与路径之间使用 ?分隔")]),t._v(" "),s("li",[t._v("参数键与参数值用 =相连")]),t._v(" "),s("li",[t._v("不同参数用&分隔")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("navigator")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/pages/test/test?username=yeshifu&age=18"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("open-type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("navigate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("跳转到test页面"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("navigator")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[s("strong",[t._v("2.编程式导航传参")])]),t._v(" "),s("p",[t._v("调用wx.navigateTo(Object object)方法跳转页面时，也可以携带参数,代码示例如下:")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v('//页面结构\n <button bindtap= ”gotoInfo2">跳转到info页面'),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//通过编程式导航，跳转到info 页面，并携带参数")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("gotoInfo2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    wx "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("navigateTo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \turl"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("' /pages/info/info?name=ls&gender=男'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("3.在onLoad中接收导航参数")])]),t._v(" "),s("p",[t._v("通过声明式导航传参或编程式导航传参所携带的参数，可以直接在onLoad事件中直接获取到，示例代码如下:")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onLoad")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            query"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("options\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"_4-节流"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-节流"}},[t._v("#")]),t._v(" 4.节流")]),t._v(" "),s("p",[t._v("①在data中定义isloading节流阀")]),t._v(" "),s("ul",[s("li",[t._v("false 表示当前没有进行任何数据请求")]),t._v(" "),s("li",[t._v("true 表示当前正在进行数据请求")])]),t._v(" "),s("p",[t._v("②在getColors()方法中修改isloading节流阀的值")]),t._v(" "),s("ul",[s("li",[t._v("在刚调用getColors时将节流阀设置true")]),t._v(" "),s("li",[t._v("在网络请求的complete回调函数中，将节流阀重置为false")])]),t._v(" "),s("p",[t._v("③在onReachBottom中判断节流阀的值，从而对数据请求进行节流控制")]),t._v(" "),s("ul",[s("li",[t._v("如果节流阀的值为true,则阻止当前请求")]),t._v(" "),s("li",[t._v("如果节流阀的值为false,则发起数据请求")])]),t._v(" "),s("h2",{attrs:{id:"_5-生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-生命周期"}},[t._v("#")]),t._v(" 5.生命周期")]),t._v(" "),s("p",[s("strong",[t._v("2.生命周期的分类")])]),t._v(" "),s("p",[t._v("在小程序中，生命周期分为两类,分别是:")]),t._v(" "),s("p",[t._v("①应用生命周期")]),t._v(" "),s("ul",[s("li",[t._v("特指小程序从启动->运行->销毁的过程")])]),t._v(" "),s("p",[t._v("②页面生命周期")]),t._v(" "),s("ul",[s("li",[t._v("特指小程序中，每个页面的加载->渲染->销毁的过程")])]),t._v(" "),s("p",[t._v("其中，页面的生命周期范围较小，应用程序的生命周期范围较大，如图所示:")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2022/06/11/dWFD6rON3uEX5q4.png",alt:"image-20220611155538549"}})]),t._v(" "),s("p",[s("strong",[t._v("3.什么是生命周期函数")])]),t._v(" "),s("p",[t._v("生命周期函数:是由小程序框架提供的内置函数,会伴随着生命周期，"),s("strong",[t._v("自动按次序执行")]),t._v("。")]),t._v(" "),s("p",[t._v("生命周期函数的作用:"),s("strong",[t._v("允许程序员在特定的时间点，执行某些特定的操作")]),t._v("。例如，页面刚加载的时候，可以在onLoad生命周期函数中初始化页面的数据。")]),t._v(" "),s("p",[s("strong",[t._v("注意:生命周期强调的是时间段，生命周期函数强调的是时间点。")])]),t._v(" "),s("p",[s("strong",[t._v("4.生命周期函数的分类")])]),t._v(" "),s("p",[t._v("小程序中的生命周期函数分为两类，分别是:")]),t._v(" "),s("p",[s("strong",[t._v("①应用的生命周期函数")])]),t._v(" "),s("ul",[s("li",[t._v("特指小程序从启动->运行->销毁期间依次调用的那些函数")])]),t._v(" "),s("p",[s("strong",[t._v("②页面的生命周期函数")])]),t._v(" "),s("ul",[s("li",[t._v("特指小程序中，每个页面从加载->渲染->销毁期间依次调用的那些函数")])]),t._v(" "),s("p",[s("strong",[t._v("5.应用的生命周期函数")])]),t._v(" "),s("p",[t._v("小程序的应用生命周期函数需要在app.js中进行声明，示例代码如下:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("App")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//小程序初始化完成时，执行此函数，全局只触发一次。 可以做 一些初始化的工作。")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onLaunch")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("options")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//小程序启动，或从后台进入前台显示时触发。")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onShow")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("options")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("，\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//小程序从前台进入后台时触发。")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onHide")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("6.页面的生命周期函数")]),t._v(" "),s("p",[t._v("小程序的页面生命周期函数需要在页面的js文件中进行声明，示例代码如下:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//页面的.js文件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Page")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onLoad")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("options")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//监听页面加载，一个页面只调用1次")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onShow")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//监听页面显示")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onReady")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//监听页面初次渲染完成，一个页面只调用1次")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onHide")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//监听页面隐藏")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onUnload")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//监听页面卸载，一个页面只调用1次")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=p.exports}}]);