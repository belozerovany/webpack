'use strict';
export default  (tag = 'div', conent = '', className = 'box') => {
	const element = document.createElement(tag);
	element.className = className;
	element.innerHTML = conent;
	
	return element;
};