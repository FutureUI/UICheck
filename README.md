# uiCheck

* 无需javascript和图片文件
* 简单统一的dom结构
* 多套定制皮肤样式
* 基于SASS开发，可深度定制

### 1.引入css文件
```html
<link rel="stylesheet" href="uicheck-normal.css" type="text/css">
```
下载需要的样式文件，并引入到你的html中。

只能同时使用一个皮肤样式，同时引入多个皮肤文件会产生冲突。

### 2.创建一个radio控件，代码示例：
```html
<div class="ui-check">
	<input type="radio" name="radio"  id="ID11">
	<label for="ID11"></label>
</div>
```
上例代码中的input标签必须具有id属性，并添为label添加for属性指向该id

上例代码中的label内不能添加文本内容，如果需要为控件创建一个内容表达，需要在ui-check外额外创建一个label标签来指向该控件。

### 3.创建一个checkbox控件，代码示例：
```html
<div class="ui-check">
	<input type="checkbox" name="checkbox"  id="ID20">
	<label for="ID20"></label>
</div>
```
上例代码中的input标签必须具有id属性，并添为label添加for属性指向该id

上例代码中的label内不能添加文本内容，如果需要为控件创建一个内容表达，需要在ui-check外额外创建一个label标签来指向该控件。

### 4.创建一个switch控件，代码示例
```html
<div class="ui-switch">
	<input type="checkbox" id="ID00">
	<label for="ID00">
		<b>&#10004;</b>
		<b>&#10005;</b>
	</label>
</div>
```
可将
```html
<b>&#10004;</b>
<b>&#10005;</b>
```
替换为
```html
<span>是</span>
<span>否</span>
```
以便用文字来代替符号显示。

### 5.选中状态(checked)和只读状态(disabled)

为input标签设置checked="checked"或disabled="disabled"则可对应生成选中状态或只读状态样式。

### 6.自定义样式

可通过修改./SASS文件夹下scss文件中的参数和样式，来自定义样式。
