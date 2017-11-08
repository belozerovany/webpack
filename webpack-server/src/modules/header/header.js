import builder from './../elementBuilder';
import'./header.scss';

export const header = () => {
	const content = '<a href="/">Logo</a><ul class="ul"><li>test</li><li>test</li><li>test</li></ul>';
	return builder('header', content, 'header');
};
