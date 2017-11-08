import builder from './../elementBuilder';
import './footer.scss';

export default  () => {
	const content = '<p>Esea code <a href="/"> home</a></p>';
	return builder('footer', content, 'footer');
};