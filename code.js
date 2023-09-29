import { registerIconLibrary } from '%SHOELACE_CDN%/cdn/utilities/icon-library.js';

registerIconLibrary('fa', {
	resolver: (name) => {
		const icon = name.replace(/^fa([rsltdb]|(s[srl]))-/, '');
		const sub = name.substring(0, 4);
		const ssub = name.substring(0, 5); // Used for Sharp style parsing
		const dir = (sub === 'fas-') ? 'solid' : (sub === 'fal-') ? 'light' : (sub === 'fat-') ? 'thin' : (sub === 'fad-') ? 'duotone' : (sub === 'fab-') ? 'brands'
			: (ssub === 'fass-') ? 'sharp-solid' : (ssub === 'fasr-') ? 'sharp-regular' : (ssub === 'fasl-') ? 'sharp-light'
				: 'regular';
		return `%FONT_AWESOME_CDN%/svgs/${dir}/${icon}.svg`;
	},
	mutator: svg => svg.setAttribute('fill', 'currentColor')
});