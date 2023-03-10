import fs from 'fs';

// read the mixin from sl-fa-mixin.pug
const mixin = fs.readFileSync('sl-fa-mixin.pug', 'utf8');

// print it
console.log(mixin.replace(/\t/gm, '    '));

// print instructions
console.log('\n\n// Save the above code to a file and `include` it, or copy/paste directly into your Pug file.');
console.log('// Alternatively, you can just `include` through node_modules, e.g. `include ../node_modules/shoelace-fontawesome-pug/sl-fa-mixin.pug`');
