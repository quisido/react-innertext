import React from 'react';
import innerText from '../jsx-inner-text';

const examples = [
	['1990', 1990],
	['Collection of elements', <p><b>Collection</b> <i>of</i> <u>elements</u></p>],
	['div', <div>div</div>],
	['Hello world!', <span>Hello <strong>world</strong>!</span>],
	['string', 'string']
];

let error = false;
const examplesLength = examples.length;
for (let x = 0; x < examplesLength; ++x) {
	const expected = examples[x][0];
	const jsx = examples[x][1];
	const it = innerText(jsx);
	if (typeof it !== 'string') {
		console.error('Invalid innerText type (' + (typeof it) + ') for ' + expected);
		error = true;
	}
	else if (it !== expected) {
		console.error('innerText expected ' + expected + ' but received ' + it + ' on test #' + (x + 1));
		error = true;
	}
}

if (!error) {
	console.log('Success');
}
