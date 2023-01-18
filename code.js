import { registerIconLibrary } from '%SHOELACE_CDN%/dist/utilities/icon-library.js';

registerIconLibrary('fa', {
	resolver: (name) => {
		const icon = name.replace(/^fa([rsltdb]|(ss))-/, '');
		const sub = name.substring(0, 4);
		const dir = (sub === 'fas-') ? 'solid' : (sub === 'fal-') ? 'light' : (sub === 'fat-') ? 'thin' : (sub === 'fad-') ? 'duotone' : (sub === 'fab-') ? 'brands' : (name.substring(0, 5) === 'fass-') ? 'sharp-solid' : 'regular';
		return `%FONT_AWESOME_CDN%/svgs/${dir}/${icon}.svg`;
	},
	mutator: svg => svg.setAttribute('fill', 'currentColor')
});