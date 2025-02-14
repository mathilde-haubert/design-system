<template>
	<VLayout
		v-bind="options.layout"
		class="vd-data-list-item flex-grow-0"
		tag="li"
	>
		<slot name="icon">
			<VIcon
				v-if="icon"
				v-bind="options.icon"
			>
				{{ icon }}
			</VIcon>
		</slot>

		<div class="vd-data-list-item-content">
			<div :class="{ 'vd-row': row }">
				<div
					class="vd-data-list-item-label text-caption"
					:style="{ color: labelColor }"
				>
					{{ label }}
				</div>

				<!-- Show value or fallback to placeholder -->
				<div class="vd-data-list-item-value">
					<slot
						name="value"
						v-bind="{ itemValue }"
					>
						<VChip
							v-if="chip"
							v-bind="options.chip"
						>
							{{ itemValue }}
						</VChip>

						<span
							v-else-if="renderHtmlValue"
							class="text-body-1"
							v-html="itemValue"
						/>

						<span
							v-else
							class="text-body-1"
							v-text="itemValue"
						/>
					</slot>
				</div>
			</div>

			<slot name="action">
				<VBtn
					v-if="action"
					v-bind="options.actionBtn"
					class="vd-data-list-item-action-btn"
					@click="$emit('click:action')"
				>
					{{ action }}
				</VBtn>
			</slot>
		</div>
	</VLayout>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { config } from './config';
	import { locales } from './locales';

	import { customizable } from '../../../mixins/customizable';

	const Props = Vue.extend({
		props: {
			/** Label of the value */
			label: {
				type: String,
				required: true
			},
			/** Value to display */
			value: {
				type: [String, Number],
				default: undefined
			},
			/** Action to display */
			action: {
				type: String,
				default: undefined
			},
			/** Text to display as fallback of value */
			placeholder: {
				type: String,
				default: locales.placeholder
			},
			/** Display the value in a VChip */
			chip: {
				type: Boolean,
				default: false
			},
			/** SVG icon to display */
			icon: {
				type: String,
				default: undefined
			},
			/** Display label & value on a single line */
			row: {
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

	const MixinsDeclaration = mixins(Props, customizable(config));

	/**
	 * DataListItem is a component that displays a
	 * label associated with a value
	 */
	@Component
	export default class DataListItem extends MixinsDeclaration {
		get labelColor(): string {
			return this.$vuetify.theme.dark ? 'rgba(255, 255, 255, .7)' : 'rgba(0, 0, 0, .6)';
		}

		get itemValue(): string {
			if (typeof this.value === 'number') {
				return isNaN(this.value) ? this.placeholder : this.value.toString();
			}

			return this.value || this.placeholder;
		}
	}
</script>

<style lang="scss" scoped>
	.vd-row {
		display: flex;
		flex-wrap: wrap;

		.vd-data-list-item-label {
			align-self: center;

			&::after {
				content: ":";
				margin-right: 4px;
			}
		}
	}

	.vd-data-list-item-action-btn.v-btn {
		min-width: 0;
		margin: 0 -1px;
	}
</style>
