import { Story, Meta} from '@storybook/angular/types-6-0';
import { moduleMetadata, componentWrapperDecorator } from '@storybook/angular';

import { CommonModule } from '@angular/common';
import {
	ButtonActionComponent
} from "../../projects/ngx-ds-secret-house/src/lib/components/buttons/button-action/button-action.component";

export default {
	title: 'Buttons/Button-action',
	component: ButtonActionComponent,
	decorators: [
		moduleMetadata({
			declarations: [ButtonActionComponent],
			imports: [CommonModule],
		}),
		componentWrapperDecorator(story => `<div>${story}</div>`),
	],
} as Meta;

const Template: Story<ButtonActionComponent> = (args) => ({
	props: args,
});

export const Success = Template.bind({});
Success.args = {};
Success.decorators = [
	componentWrapperDecorator((story) =>
		`<sh-button-action [type]="'success'" [icon]="'checkmark-outline'"> Success </sh-button-action>`
	),
];

export const Danger = Template.bind({})
Danger.args = {}
Danger.decorators = [
	componentWrapperDecorator((story) =>
		`<sh-button-action [type]="'danger'"  [icon]="'sad-outline'">Danger</sh-button-action>`
	)
]

export const SuccessLoading = Template.bind({})
SuccessLoading.args = {}
SuccessLoading.decorators = [
	componentWrapperDecorator((story) =>
		`<sh-button-action [type]="'success'" [loading]="true" [icon]="'checkmark-outline'">Success loading</sh-button-action>`
	)
]

export const SuccessDisabled = Template.bind({})
SuccessDisabled.args = {}
SuccessDisabled.decorators = [
	componentWrapperDecorator((story) =>
		`<sh-button-action [type]="'success'" [disabled]="true" [icon]="'checkmark-outline'">Success disabled</sh-button-action>`
	)
]
