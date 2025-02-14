<template>
	<div
		:style="widthStyles"
		class="vd-sub-header secondary white--text py-6 px-8"
	>
		<slot name="back-btn">
			<VFadeTransition
				v-if="!hideBackBtn"
				mode="out-in"
			>
				<VSkeletonLoader
					v-if="loading"
					height="28"
					type="button"
					width="100"
					dark
				/>

				<VBtn
					v-else
					v-bind="options.backBtn"
					@click="$emit('back')"
				>
					<slot name="back-btn-icon">
						<VIcon class="mr-2">
							{{ backArrowIcon }}
						</VIcon>
					</slot>

					{{ backBtnText }}
				</VBtn>
			</VFadeTransition>
		</slot>

		<VLayout
			v-bind="options.contentLayout"
			class="vd-sub-header-content"
		>
			<VLayout
				class="vd-sub-header-informations mt-1"
				column
			>
				<slot name="title">
					<VFadeTransition mode="out-in">
						<HeaderLoading
							v-if="loading"
							width="300"
							height="2rem"
							dark
						/>

						<h2
							v-else-if="titleText"
							class="text-h5 font-weight-bold"
						>
							{{ titleText }}
						</h2>
					</VFadeTransition>
				</slot>

				<slot name="sub-title">
					<VFadeTransition
						v-if="subTitleText"
						mode="out-in"
					>
						<HeaderLoading
							v-if="loading"
							class="mt-1"
							width="250"
							height="2rem"
							dark
						/>

						<p
							v-else
							class="text-h6 font-weight-bold mt-1 mb-0"
							:style="{ color: fadeWhite }"
						>
							{{ subTitleText }}
						</p>
					</VFadeTransition>
				</slot>

				<slot name="additional-informations" />
			</VLayout>

			<slot name="right-content">
				<VThemeProvider dark>
					<VLayout
						v-if="dataLists"
						v-bind="options.dataListsLayout"
						class="vd-sub-header-data-list"
					>
						<DataList
							v-for="(dataList, index) in dataLists"
							:key="'vd-sub-header-data-list' + index"
							:loading="loading"
							:render-html-value="renderHtmlValue"
							:list-title="dataList.title"
							:items="dataList.items"
							:items-number-loading="dataList.itemsNumberLoading"
							:heading-loading="dataList.headingLoading"
							item-width="auto"
							title-class="text-subtitle-1 font-weight-bold mb-2 mt-2"
							@click:item-action="dataListItemAction(index, $event)"
						/>
					</VLayout>
				</VThemeProvider>
			</slot>
		</VLayout>
	</div>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { config } from './config';
	import { locales } from './locales';
	import { IDataListAction, DataListsItem } from './types';

	import { customizable } from '../../mixins/customizable';
	import { Widthable } from '../../mixins/widthable';

	import DataList from '../../elements/DataList';

	import { mdiKeyboardBackspace } from '@mdi/js';

	const Props = Vue.extend({
		props: {
			/** Hide the back button */
			hideBackBtn: {
				type: Boolean,
				default: false
			},
			/** Customize the text inside back button */
			backBtnText: {
				type: String,
				default: locales.backBtnText
			},
			/** Title of the SubHeader */
			titleText: {
				type: String,
				default: undefined
			},
			/** Sub-title of the SubHeader */
			subTitleText: {
				type: String,
				default: undefined
			},
			/** List of DataList components in column mode */
			dataLists: {
				type: Array as PropType<DataListsItem[]>,
				default: undefined
			},
			/** Loading mode */
			loading: {
				type: Boolean,
				default: false
			},
			/** Render the value as plain HTML */
			renderHtmlValue: {
				type: Boolean,
				default: false
			}
		}
	});

	const MixinsDeclaration = mixins(Props, customizable(config), Widthable);

	/**
	 * SubHeader is a component that displays
	 * informations below the main header
	 */
	@Component({
		components: {
			DataList
		}
	})
	export default class SubHeader extends MixinsDeclaration {
		backArrowIcon = mdiKeyboardBackspace;

		/** Semi-transparent white */
		get fadeWhite(): string {
			return 'rgba(255, 255, 255, .7)';
		}

		/**
		 * Emit the dataList item object when user clicked on the corresponding action
		 *
		 * @param {number} dataListIndex The index of the selected data list
		 * @param {number} itemIndex The index of the item into the selected data list
		 */
		dataListItemAction(dataListIndex: number, itemIndex: number): void {
			this.$emit('click:list-item', { dataListIndex, itemIndex } as IDataListAction);
		}
	}
</script>

<style lang="scss" scoped>
	.vd-sub-header {
		overflow-x: auto;

		::v-deep {
			.v-skeleton-loader__heading {
				width: 100%;
				height: 100%;
				border-radius: 20px;
			}
		}
	}

	.vd-sub-header-data-list,
	.vd-sub-header-informations {
		// Don't take all available space
		flex: none;
		max-width: none;
	}

	.vd-sub-header-data-list ::v-deep .vd-data-list {
		max-width: 200px;
		margin-left: 8px;

		// Apply margin right to avoid empty
		// space on smaller screens
		&:not(:last-child) {
			margin-right: 80px;
		}

		.vd-key {
			display: inline-block;
			font-size: .75rem !important;
		}

		.vd-data-list-item-label {
			opacity: .8;
			color: #fff !important;
		}
	}
</style>
