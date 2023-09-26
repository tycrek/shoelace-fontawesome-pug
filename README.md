<div align="center">

shoelace-fontawesome-pug
===

[![NPMCBT badge]][NPMCBT link]

*A [Pug] mixin to make it easier to load [Font Awesome] Pro icons with [Shoelace].*

</div>

[NPMCBT badge]: https://img.shields.io/npm/v/shoelace-fontawesome-pug?color=CB3837&label=%20View%20on%20NPM&logo=npm&style=for-the-badge
[NPMCBT link]: https://www.npmjs.com/package/shoelace-fontawesome-pug

## Usage

1. Install with NPM: `npm i shoelace-fontawesome-pug`
2. Anywhere in your Pug file, include this line:
   ```pug
   include ../node_modules/shoelace-fontawesome-pug/sl-fa-mixin.pug
   ```
3. When using a [Shoelace Icon] in Pug, ensure to set the correct library:
   ```pug
   sl-icon(library='fa' name='fab-github')
   ```

### What is this doing?

This mixin really just wraps the [code recommended by Shoelace](https://shoelace.style/components/icon/#font-awesome) with a preset CDN for Font Awesome 6.4.0 icons.

[Pug]: https://pugjs.org/api/getting-started.html
[Font Awesome]: https://fontawesome.com/
[Shoelace]: https://shoelace.style/
[Shoelace Icon]: https://shoelace.style/components/icon/
