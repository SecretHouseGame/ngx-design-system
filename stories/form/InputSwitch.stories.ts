// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta} from '@storybook/angular/types-6-0';
import { moduleMetadata, componentWrapperDecorator } from '@storybook/angular';
import { InputSwitchComponent } from '../../projects/ngx-ds-secret-house/src/lib/components/form/input-switch/input-switch.component';
import { FieldContainerComponent } from '../../projects/ngx-ds-secret-house/src/lib/components/form/field-container/field-container.component';

import { CommonModule } from '@angular/common';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Form/Input Switch',
  component: InputSwitchComponent,
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations: [FieldContainerComponent, InputSwitchComponent],
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
const Template: Story<InputSwitchComponent> = (args) => ({
  props: args,
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Default.args = {
	label: 'Accepter les cookies ?',
	id: 'form-id',
	help: "Ceci est une indication pour aider l'utilisateur",
};

Default.decorators = [
	componentWrapperDecorator((story) =>
		`<sh-field-container> ${story} </sh-field-container>`
	),
];

export const Active = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Active.args = {
	label: 'Accepter les cookies ?',
	id: 'form-id',
	help: "Ceci est une indication pour aider l'utilisateur",
	isChecked: true
};

Active.decorators = [
	componentWrapperDecorator((story) =>
		`<sh-field-container> ${story} </sh-field-container>`
	),
];


export const DefaultDisabled = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
DefaultDisabled.args = {
	label: 'Accepter les cookies ?',
	id: 'form-id',
	help: "Ceci est une indication pour aider l'utilisateur",
	disabled: true
};

DefaultDisabled.decorators = [
	componentWrapperDecorator((story) =>
		`<sh-field-container > ${story} </sh-field-container>`
	),
];

export const ActiveDisabled = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
ActiveDisabled.args = {
	label: 'Accepter les cookies ?',
	id: 'form-id',
	help: "Ceci est une indication pour aider l'utilisateur",
	isChecked: true,
	disabled: true
};

ActiveDisabled.decorators = [
	componentWrapperDecorator((story) =>
		`<sh-field-container > ${story} </sh-field-container>`
	),
];
