
// auto import
// use this module as a plugin for stylus.
function plugin() {
	return function (style) {
		style
			.include(__dirname)
			.import('brush')
	}
}

module.exports = plugin
