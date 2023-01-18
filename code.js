import { registerIconLibrary } from '%SHOELACE_CDN%/dist/utilities/icon-library.js';

registerIconLibrary('fa', {
	resolver: (name) => {
		const icon = name.replace(/^fa([rsltdb]|(ss))-/, '');
		const sub = name.substring(0, 4);
		const dir = (sub === 'fas-') ? dir = 'solid' : (sub === 'fal-') ? dir = 'light' : (sub === 'fat-') ? dir = 'thin' : (sub === 'fad-') ? dir = 'duotone' : (sub === 'fab-') ? dir = 'brands' : (name.substring(0, 5) === 'fass-') ? dir = 'sharp-solid' : 'regular';
		return `%FONT_AWESOME_CDN%/svgs/${dir}/${icon}.svg`;
	},
	mutator: svg => svg.setAttribute('fill', 'currentColor')
});