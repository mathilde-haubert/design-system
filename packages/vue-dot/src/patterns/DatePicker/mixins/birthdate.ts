import Vue from 'vue';
import Component, { mixins } from 'vue-class-component';

import { Refs } from '../../../types';

const Props = Vue.extend({
	props: {
		/** Enables birthdate mode */
		birthdate: {
			type: Boolean,
			default: false
		}
	}
});

const MixinsDeclaration = mixins(Props);

/** Add birthdate prop: select year, month then day */
@Component<Birthdate>({
	watch: {
		menu(val: boolean): void {
			// If birthdate mode is activated
			if (this.birthdate && val) {
				this.setActivePicker();
			}
		}
	}
})
export class Birthdate extends MixinsDeclaration {
	// Extend $refs
	$refs!: Refs<{
		picker: {
			activePicker: string;
		};
	}>;

	/** If birthdate is enabled, max is the current date */
	max = this.birthdate ? new Date().toISOString().substr(0, 10) : null;

	/** If birthdate is enabled, min is 01/01/1900 */
	min = this.birthdate ? '1900-01-01' : null;

	/**
	 * Set active picker on VDatePicker
	 * See https://vuetifyjs.com/en/components/date-pickers#date-pickers-birthday-picker
	 */
	setActivePicker(): void {
		setTimeout(() => {
			// Set the active picker to year
			this.$refs.picker.activePicker = 'YEAR';
		});
	}
}
