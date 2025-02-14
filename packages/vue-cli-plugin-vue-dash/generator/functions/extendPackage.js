const { devDependencies } = require('../../package.json');

/**
 * Pin version for alpha and beta and default to `next`
 *
 * @param {string|undefined} version The version to normalize
 * @returns {string} The normalized version
 */
function normalizeVersion(version) {
	if (!version) {
		return 'next';
	}

	// If the version is an alpha or a beta
	if (version.includes('alpha') || version.includes('beta')) {
		// Remove ^ char to avoid version auto-bump
		return version.replace('^', '');
	}

	return version;
}

// Use dev dependencies to get packages versions
const VueDotVersion = normalizeVersion(devDependencies['@cnamts/vue-dot']);
const DesignTokensVersion = normalizeVersion(devDependencies['@cnamts/design-tokens']);
const FormBuilderVersion = normalizeVersion(devDependencies['@cnamts/form-builder']);

/**
 * Extend package.json
 *
 * @param {object} api The plugin API
 * @param {object} options The plugin options
 * @returns {void}
 */
function extendPackage(api, options) {
	const newPackageProperties = {
		scripts: {},
		dependencies: {
			'@cnamts/design-tokens': DesignTokensVersion,
			'@cnamts/vue-dot': VueDotVersion,
			'axios': '^0.21.1',
			'core-js': '^3.8.2',
			'custom-event-polyfill': '^1.0.7',
			'dayjs': '^1.10.3',
			'languages': '^0.1.3',
			'vue': '^2.6.12',
			'vue-input-facade': '^1.3.2',
			'vue-meta': '^2.4.0',
			'vue-router': '^3.4.9',
			'vuetify': '^2.4.2'
		},
		devDependencies: {
			'@babel/core': '^7.12.10',
			'@mdi/js': '^5.9.55',
			'@types/jest': '^26.0.20',
			'@types/webfontloader': '^1.6.32',
			'@typescript-eslint/eslint-plugin': '^4.13.0',
			'@typescript-eslint/parser': '^4.13.0',
			'@vue/cli-plugin-babel': '~4.5.10',
			'@vue/cli-plugin-eslint': '~4.5.10',
			'@vue/cli-plugin-router': '~4.5.10',
			'@vue/cli-plugin-typescript': '~4.5.10',
			'@vue/cli-plugin-unit-jest': '~4.5.10',
			'@vue/cli-plugin-vuex': '~4.5.10',
			'@vue/cli-service': '~4.5.10',
			'@vue/eslint-config-standard': '^6.0.0',
			'@vue/eslint-config-typescript': '^7.0.0',
			'@vue/test-utils': '^1.1.2',
			'eslint': '^7.18.0',
			'eslint-plugin-import': '^2.22.1',
			'eslint-plugin-node': '^11.1.0',
			'eslint-plugin-promise': '^4.2.1',
			'eslint-plugin-vue': '^7.4.1',
			'jest-serializer-vue': '^2.0.2',
			'sass': '^1.32.4',
			'sass-loader': '^10.1.1',
			'typescript': '~4.1.3',
			'vue-class-component': '^7.2.6',
			'vue-cli-plugin-vuetify': '^2.0.9',
			'vue-template-compiler': '^2.6.12',
			'vuetify-loader': '^1.6.0',
			'webfontloader': '^1.6.28',
			'webpack': '^4.46.0'
		},
		resolutions: {
			'jest': '^26.6.3',
			'ts-jest': '^26.4.4',
			'babel-jest': '^26.6.3'
		}
	};

	if (options.i18n) {
		newPackageProperties.dependencies['vue-i18n'] = '^8.22.4';
	}

	if (options.formBuilder) {
		newPackageProperties.dependencies['@cnamts/form-builder'] = FormBuilderVersion;
	}

	if (options.vuexPersist) {
		// We need 2.0.1 specifically since in
		// later version there is a bug with
		// Internet Explorer
		newPackageProperties.dependencies['vuex-persist'] = '2.0.1';
	}

	if (options.cypress) {
		newPackageProperties.devDependencies['@vue/cli-plugin-e2e-cypress'] = '~4.5.10';

		newPackageProperties.scripts = {};
		newPackageProperties.scripts['test:e2e'] = 'vue-cli-service test:e2e --headless';
		newPackageProperties.scripts['test:e2e:gui'] = 'vue-cli-service test:e2e';

		newPackageProperties.resolutions['cypress'] = '^6.2.1';
	}

	api.extendPackage(newPackageProperties);
}

module.exports = { extendPackage };
