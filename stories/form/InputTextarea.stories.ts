// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta} from '@storybook/angular/types-6-0';
import { moduleMetadata, componentWrapperDecorator } from '@storybook/angular';
import { InputTextareaComponent } from '../../projects/ngx-ds-secret-house/src/lib/components/form/input-textarea/input-textarea.component';
import { FieldContainerComponent } from '../../projects/ngx-ds-secret-house/src/lib/components/form/field-container/field-container.component';

import { CommonModule } from '@angular/common';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Form/Input Textarea',
  component: InputTextareaComponent,
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations: [FieldContainerComponent, InputTextareaComponent],
      imports: [CommonModule],
    }),
    //👇 Wraps our stories with a decorator
    componentWrapperDecorator(story => `<div>${story}</div>`),
  ],
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<InputTextareaComponent> = (args) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
	label: 'Label exemple',
	placeholder: 'Placeholder exemple',
	help: 'Help exemple',
	disabled: false,
	success: false,
	error: false
}
Default.decorators = [
	componentWrapperDecorator((story) =>
		`<sh-field-container [disabled]="true"> ${story} </sh-field-container>`
	),
];

export const Success = Template.bind({});
Success.args = {
	label: 'Label exemple',
	placeholder: 'Placeholder exemple',
	help: 'Help exemple',
	disabled: false,
	success: true,
	error: false,
}
Success.decorators = [
	componentWrapperDecorator((story) =>
		`<sh-field-container [success]="true" [error]="false" [disabled]="true"> ${story} </sh-field-container>`
	),
];

export const Error = Template.bind({});
Error.args = {
	label: 'Label exemple',
	placeholder: 'Placeholder exemple',
	help: 'Help exemple',
	disabled: false,
	success: false,
	error: true,
}
Error.decorators = [
	componentWrapperDecorator((story) =>
		`<sh-field-container [success]="false" [error]="true" [disabled]="true"> ${story} </sh-field-container>`
	),
];

export const Disabled = Template.bind({});
Disabled.args = {
	label: 'Label exemple',
	placeholder: 'Placeholder exemple',
	help: 'Help exemple',
	disabled: true
}
Disabled.decorators = [
	componentWrapperDecorator((story) =>
		`<sh-field-container [success]="false" [error]="false" [disabled]="true"> ${story} </sh-field-container>`
	),
];
