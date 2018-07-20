import { expect } from 'chai';
import jsdom from 'jsdom-global';
import React from 'react';
jsdom();
const innerText = require('../react-innertext');

describe('react-innertext', () => {

	it('should be blank for null', () => {
		expect(innerText(null)).to.equal('');
	});

	it('should be blank for boolean', () => {
		expect(innerText(true)).to.equal('');
		expect(innerText(false)).to.equal('');
	});

	it('should convert numbers to strings', () => {
		expect(innerText(123)).to.equal('123');
		expect(innerText(420.69)).to.equal('420.69');
	});

	it('should convert JSX objects to strings', () => {
		expect(innerText(<div>This is a div.</div>)).to.equal('This is a div.');
	});

	it('should convert nested JSX objects to strings', () => {
		expect(innerText(<div><p>Paragraph 1.</p><p>Paragraph 2.</p></div>)).to.equal('Paragraph 1.Paragraph 2.');
	});

	it('should concatenate array items', () => {
		expect(innerText([
			null,
			123,
			true,
			<p>1</p>,
			[ 'te', 'st' ],
			420.69,
			<div><span>2</span><span>three</span><p>4</p></div>
		])).to.equal('1231test420.692three4');
	});
});
