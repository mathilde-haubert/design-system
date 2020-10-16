module.exports = {
	plugins: [
		[
			'vuepress-plugin-typescript'
		]
	],
	title: 'Design System Digital',
	dest: 'dist',
	themeConfig: {
		sidebar: [
			{
				title: 'Directives',
				group: 'directives',
				items: [
					{
						title: 'Debounce',
						to: '/directives/debounce/'
					}
				]
			},
			{
				title: 'Composants',
				group: 'composants',
				items: [
					{
						title: 'CopyBtn',
						to: '/composants/copy-btn'
					},
					{
						title: 'CustomIcon',
						to: '/composants/custom-icon'
					},
					{
						title: 'DataList',
						to: '/composants/data-list'
					},
					{
						title: 'DatePicker',
						to: '/composants/date-picker'
					},
					{
						title: 'DialogBox',
						to: '/composants/dialog-box'
					},
					{
						title: 'FileUpload',
						to: '/composants/file-upload'
					},
					{
						title: 'FormBuilder',
						to: '/composants/form-builder'
					},
					{
						title: 'FormFieldList',
						to: '/composants/form-field-list'
					},
					{
						title: 'FooterWrapper',
						to: '/composants/footer-wrapper'
					},
					{
						title: 'HeaderLoading',
						to: '/composants/header-loading'
					},
					{
						title: 'LangBtn',
						to: '/composants/lang-btn'
					},
					{
						title: 'PageCard',
						to: '/composants/page-card'
					},
					{
						title: 'PaginatedTable',
						to: '/composants/paginated-table'
					},
					{
						title: 'SubHeader',
						to: '/composants/sub-header'
					},
					{
						title: 'UploadWorkflow',
						to: '/composants/upload-workflow'
					}
				]
			}
		]
	},
	chainWebpack(config) {
		// Fix sass incompatibility,
		// see https://github.com/vuejs/vuepress/issues/2148
		for (const lang of ['sass', 'scss']) {
			for (const name of ['modules', 'normal']) {
				const rule = config.module.rule(lang).oneOf(name);
				rule.uses.delete('sass-loader');

				rule
					.use('sass-loader')
					.loader('sass-loader')
					.options({
						implementation: require('sass'),
						sassOptions: {
							indentedSyntax: lang === 'sass'
						}
					});
			}
		}
	}
};
