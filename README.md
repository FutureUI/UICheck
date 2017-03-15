# uiCheck

-无需javascript和图片文件
-简单统一的dom结构
-多套定制皮肤样式
-基于SASS开发，可深度定制

### 1.引入css文件

<pre><code>&lt;link rel=&quot;stylesheet&quot; href=&quot;uicheck-normal.css&quot; type=&quot;text/css&quot;&gt;</code></pre>

下载需要的样式文件，并引入到你的html中。

只能同时使用一个皮肤样式，同时引入多个皮肤文件会产生冲突。

### 2.创建一个radio控件，代码示例：

<pre><code>&lt;div class=&quot;ui-check&quot;&gt;
	&lt;input type=&quot;radio&quot; name=&quot;radio&quot;  id=&quot;ID11&quot;&gt;
	&lt;label for=&quot;ID11&quot;&gt;&lt;/label&gt;
&lt;/div&gt;</code></pre>

上例代码中的input标签必须具有id属性，并添为label添加for属性指向该id

上例代码中的label内不能添加文本内容，如果需要为控件创建一个内容表达，需要在ui-check外额外创建一个label标签来指向该控件。

### 3.创建一个checkbox控件，代码示例：

<pre><code class="language-markup">&lt;div class=&quot;ui-check&quot;&gt;
	&lt;input type=&quot;checkbox&quot; name=&quot;checkbox&quot;  id=&quot;ID20&quot;&gt;
	&lt;label for=&quot;ID20&quot;&gt;&lt;/label&gt;
&lt;/div&gt;</code></pre>

上例代码中的input标签必须具有id属性，并添为label添加for属性指向该id

上例代码中的label内不能添加文本内容，如果需要为控件创建一个内容表达，需要在ui-check外额外创建一个label标签来指向该控件。

### 4.创建一个switch控件，代码示例

<pre><code>&lt;div class=&quot;ui-switch&quot;&gt;
	&lt;input type=&quot;checkbox&quot; id=&quot;ID00&quot;&gt;
	&lt;label for=&quot;ID00&quot;&gt;
		&lt;b&gt;&amp;#10004;&lt;/b&gt;
		&lt;b&gt;&amp;#10005;&lt;/b&gt;
	&lt;/label&gt;
&lt;/div&gt;</code></pre>

可将<pre><code>&lt;b&gt;&amp;#10004;&lt;/b&gt;
	&lt;b&gt;&amp;#10005;&lt;/b&gt;</code></pre>替换为<pre><code>&lt;span&gt;&amp;#10004;&lt;/span&gt;
	&lt;span&gt;&amp;#10005;&lt;/span&gt;</code></pre>以便用文字来代替符号显示。

### 5.选中状态(checked)和只读状态(disabled)

为input标签设置checked="checked"或disabled="disabled"则可对应生成选中状态或只读状态样式。

### 6.自定义样式

可通过修改./SASS文件夹下scss文件中的参数和样式，来自定义样式。
