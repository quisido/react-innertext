eval(
	require('babel-core')
	.transformFileSync(
		'es6.js',
		{
			presets: ['es2015', 'react']
		}
	)
	.code
);
