// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta} from '@storybook/angular/types-6-0';
import { moduleMetadata, componentWrapperDecorator } from '@storybook/angular';
import { ButtonComponent } from '../../projects/ngx-ds-secret-house/src/lib/components/buttons/button/button.component';

import { CommonModule } from '@angular/common';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
	title: 'Buttons/Button',
	component: ButtonComponent,
	decorators: [
		moduleMetadata({
			//👇 Imports both components to allow component composition with Storybook
			declarations: [ButtonComponent],
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
const Template: Story<ButtonComponent> = (args) => ({
	props: args,
});

// More on args: https://storybook.js.org/docs/angular/writing-stories/args

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [
	componentWrapperDecorator((story) =>
		`<sh-button [color]="'primary'"> Click Me </sh-button>`
	),
];

export const PrimaryOutline = Template.bind({})
PrimaryOutline.args = {}
PrimaryOutline.decorators = [
	componentWrapperDecorator((story) =>
		`<sh-button [color]="'primary'" [outline]="true"> Click Me </sh-button>`
	)
]

export const PrimaryDisabled = Template.bind({})
PrimaryDisabled.args = {}
PrimaryDisabled.decorators = [
	componentWrapperDecorator((story) =>
		`<sh-button [color]="'primary'" [disabled]="true"> Click Me </sh-button>`
	)
]

export const Secondary = Template.bind({})
Secondary.args = {}
Secondary.decorators = [
	componentWrapperDecorator((story) =>
		`<sh-button [color]="'secondary'"> Click Me </sh-button>`
	)
]

export const SecondaryOutline = Template.bind({})
SecondaryOutline.args = {}
SecondaryOutline.decorators = [
	componentWrapperDecorator((story) =>
		`<sh-button [color]="'secondary'" [outline]="true"> Click Me </sh-button>`
	)
]
