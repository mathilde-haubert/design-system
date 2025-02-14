<template>
	<VLayout
		wrap
		row
		class="mx-n3"
	>
		<DatePicker
			v-model="periodValue.from"
			v-bind="fieldOptionsFrom"
			:vuetify-options="fieldOptionsFrom"
			text-field-class="mx-3 vd-form-input no-flex"
			@change="dateUpdated"
		/>

		<DatePicker
			v-model="periodValue.to"
			v-bind="fieldOptionsTo"
			:vuetify-options="fieldOptionsTo"
			:start-date="periodValue.from"
			text-field-class="mx-3 vd-form-input no-flex"
			@change="dateUpdated"
		/>
	</VLayout>
</template>

<script lang="ts">
	import Component, { mixins } from 'vue-class-component';

	import DatePicker from '@cnamts/vue-dot/src/patterns/DatePicker';

	import { PeriodValue } from '../types';

	import { FieldComponent } from '../mixins/fieldComponent';

	import { Options } from '@cnamts/vue-dot/src/mixins/customizable';

	const MixinsDeclaration = mixins(FieldComponent);

	/** Form period field to enter a period */
	@Component<PeriodField>({
		components: {
			DatePicker
		},
		watch: {
			// Listen the current field value for the component
			'field.value': {
				handler(value: PeriodValue | null): void {
					if (value) {
						this.periodValue = value;
					}
				},
				immediate: true,
				deep: true
			}
		}
	})
	export default class PeriodField extends MixinsDeclaration {
		periodValue: PeriodValue = {
			from: null,
			to: null
		};

		get fieldOptionsTo(): Options {
			const datePicker = {
				min: this.periodValue.from
			};

			const fieldOptionsTo = this.field.fieldOptions?.to as Record<string, unknown> | undefined;

			return {
				datePicker,
				...fieldOptionsTo
			};
		}

		get fieldOptionsFrom(): Options {
			return this.field.fieldOptions?.from as unknown as Options;
		}

		/** Emit the new value when started or ended date change */
		dateUpdated(): void {
			const fromGreaterThanTo = (
				this.periodValue.from &&
				this.periodValue.to &&
				new Date(this.periodValue.from) > new Date(this.periodValue.to)
			);

			// Reset the end date if selected start date greater
			if (fromGreaterThanTo) {
				this.periodValue.to = null;
			}

			this.$nextTick(() => {
				this.emitChangeEvent(this.periodValue);
			});
		}
	}
</script>
