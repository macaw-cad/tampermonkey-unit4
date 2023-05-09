# Macaw Unit4 Enhancements

This project has been created to improve the UX/UI of the existing Unit4 web application
and add additional features not available by default.

You need Tampermonkey to use it in your browser, please
visit https://www.tampermonkey.net/ to get an extension
for your browser

Once you have installed Tampermonkey, you can install this
script by opening the URL to the production version.
Tampermonkey will pick up the download and create a new
userscript for you.

Link: https://github.com/macaw-cad/tampermonkey-unit4/raw/main/dist/index.prod.user.js

# Features

The script enhances the time entry screen with these features:

* resize columns to better fit their relevamce (e.g. larger description colulm)
* hide some unused columns
* always show workorder and project titles
* experimental: add more than 1 row at once
* experimental: import data using JSON

When the script is active, a "config" button is rendered in the bottom right corner.
Using this, you can enable or disable some features of this script.

More documentation is available in the ```docs``` folder.

# Development

The userscript is build using the Webpack + TypeScript
template script from https://github.com/Trim21/webpack-userscript-template

## prepare Tampermonkey in your browser

1. Allow Tampermonkey's access to local file URIs [tampermonkey/faq](https://tampermonkey.net/faq.php?ext=dhdg#Q204)
2. install node dependencies with `npm i`
3. start development server with `npm run dev`
4. open `webpack-userscript-template/dist/index.dev.user.js` in your Chrome and install it with your userscript manager.
   <br>this userscript's meta contains `// @require file://path/to/dist/index.debug.user.js`,
   which take [src/index.ts](./src/index.ts) as entry point.
5. every time you edit your metadata, you'll have to restart
   webpack watch server and (maybe even) install new UserScript
   in your browser again, because Tampermonkey don't read it
   from dist every time.

## create a production build

Make sure you have no uncommitted changed, otherwise the
build process will stop during version increase.

Start a new build using `npm`:

```bash
npm run package
```

This will first increase the patch number of your packages
version and then run a production build.

`dist/index.prod.user.js` is the finally script - if you commit it, the new file will be
available using the URL shown above.
