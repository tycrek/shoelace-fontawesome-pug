import fs from 'fs';

// Header for the mixin
const header = `
//- Authored by: tycrek <t@tycrek.com> (https://tycrek.com)
//- Font Awesome self-hosted SVGs via Cloudflare Workers+R2
script(type='module').`;

// Read the code and replace all tabs with spaces (ughghh)
const base = fs.readFileSync('code.js', 'utf8').split('\n').map(line => `\t${line}`).join('\n');

// Read the JSON data with CDN info
const json = JSON.parse(fs.readFileSync('build.json', 'utf8'));

// Replace the placeholders with the CDN info
const code = base.replace('%SHOELACE_CDN%', json.shoelace).replace('%FONT_AWESOME_CDN%', json.fontAwesome);

// Save the mixin
fs.writeFileSync('sl-fa-mixin.pug', `${header}\n${code}`);
