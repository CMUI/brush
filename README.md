# Brush

> Lightweight utility library for Stylus.

> Inspired by [nib](https://github.com/tj/nib).

Stylus 是一款 CSS 预处理器，与 Sass 和 Less 相比，它更像是一门编程语言，功能强大，语法灵活。同时，Stylus 完全由 JavaScript 实现，对 Node.js 工具链极为友好。

而 Brush 是专为 Stylus 编写的工具库，充分利用 Stylus 的变量、Mixin、插值等特性，为现代 CSS 开发提供更舒适的编程体验。

## 安装

通过 npm 安装：

```sh
$ npm install cmui-brush
```

## 使用

#### 在源码中使用

0. 在你的样式文件中导入 Brush：
	
	```stylus
	@import './node_modules/cmui-brush/brush'
	```

0. 随后即可使用 Brush 提供的各项 API。

#### 在构建环节中使用

如果你使用 [`gulp-stylus`](https://github.com/stevelacy/gulp-stylus) 来处理 Stylus 的编译，则可以在编译过程中以插件的方式来加载 Brush。请参考以下代码：

```js
var gulp = require('gulp')
var stylus = require('gulp-stylus')
var brush = require('cmui-brush')

gulp.task('css', function () {
	return gulp.src('./path/to/src/*.styl')
		.pipe(stylus({
			use: [brush()],
		}))
		.pipe(gulp.dest('./path/to/dest/'))
})

```

## 谁在用？

移动 UI 框架 [CMUI](https://github.com/CMUI/CMUI) v2 采用 Brush 作为全局的样式工具库，因此所有 CMUI v2 的用户都在使用它：

* [百姓网 - 手机版](http://m.baixing.com/)

***

## License

[MIT License](http://www.opensource.org/licenses/mit-license.php)
