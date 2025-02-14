import Vue, { VueConstructor } from 'vue';

import CopyBtnEx from './CopyBtnEx.vue';
import DataListEx from './DataListEx.vue';
import DatePickerEx from './DatePickerEx.vue';
import LangBtnEx from './LangBtnEx.vue';
import CustomIconEx from './CustomIconEx.vue';
import DebounceEx from './DebounceEx.vue';
import DialogBoxEx from './DialogBoxEx.vue';
import ErrorPageEx from './ErrorPageEx.vue';
import FileUploadEx from './FileUploadEx.vue';
import FooterEx from './FooterEx.vue';
import NotificationEx from './NotificationEx.vue';
import PaginatedTableEx from './PaginatedTableEx.vue';
import RulesEx from './RulesEx.vue';
import SubHeaderEx from './SubHeaderEx.vue';
import TableToolbarEx from './TableToolbarEx.vue';
import UploadWorkflowEx from './UploadWorkflowEx.vue';

interface Components {
	[name: string]: VueConstructor;
}

const components: Components = {
	CopyBtnEx,
	DataListEx,
	DatePickerEx,
	LangBtnEx,
	CustomIconEx,
	DebounceEx,
	DialogBoxEx,
	ErrorPageEx,
	FileUploadEx,
	FooterEx,
	NotificationEx,
	PaginatedTableEx,
	RulesEx,
	SubHeaderEx,
	TableToolbarEx,
	UploadWorkflowEx
};

/** Globally register all components */
Object.keys(components).forEach((name: string) => {
	Vue.component(name, components[name]);
});
