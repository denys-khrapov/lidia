module.exports = {
	plugins: [
		require('autoprefixer'),
		require('postcss-sort-media-queries')({
			sort: 'desktop-first',
		}),
		require('cssnano')(), // Додає мініфікацію
	],
}
