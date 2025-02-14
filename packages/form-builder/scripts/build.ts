/**
 * [Build script]
 *
 * Build assets in /dist folder
 * Use vue-cli-service in lib mode to build Vue Dot
 * Execute generate tokens script
 * Transpile TypeScript to JavaScript
 * Remove demo.html and empty folders
 */

import * as fs from 'fs-extra';

import { renderHeader, info, done, log } from '@cnamts/cli-helpers';

import { author } from '../package.json';

import { execSync, StdioOptions } from 'child_process';

const execOpts = {
	stdio: 'inherit' as StdioOptions
};

const DIST_FOLDER = './dist';

renderHeader('Self Build', author.name);

// Create dist folder if not exists
if (!fs.existsSync(DIST_FOLDER)) {
	info('Creating dist folder');

	fs.mkdirSync(DIST_FOLDER);
} else {
	info('Removing dist folder content');

	// Clear the content of dist folder
	fs.emptyDirSync(`./${DIST_FOLDER}`);
}

const vueCliServicePath = './node_modules/.bin/vue-cli-service';

log();
info('Building full bundle');

// Build the full bundle
execSync(
	`LIB_MODE=true ${vueCliServicePath} build --target lib --name form-builder ./src/index.ts`,
	execOpts
);

log();
info('Transpiling TypeScript');

// Remove demo.html file
fs.removeSync(`${DIST_FOLDER}/demo.html`);

// Transpile TypeScript
execSync(`tsc -p tsconfig.build.json --outDir ${DIST_FOLDER}`, execOpts);

// Remove playground folder
fs.removeSync(`${DIST_FOLDER}/playground`);

// Remove component folders because we don't compile
// them individually at the moment
fs.removeSync(`${DIST_FOLDER}/src/components`);
fs.removeSync(`${DIST_FOLDER}/src/registerAllComponents.js`);
fs.removeSync(`${DIST_FOLDER}/src/index.js`);

log();
done('Build completed');
