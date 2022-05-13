// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta} from '@storybook/angular/types-6-0';
import { moduleMetadata, componentWrapperDecorator } from '@storybook/angular';
import { BtnPrimaryComponent } from '../../projects/ngx-ds-secret-house/src/lib/components/buttons/btn-primary/btn-primary.component';

import { CommonModule } from '@angular/common';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
	title: 'Buttons/Primary',
	component: BtnPrimaryComponent,
	decorators: [
		moduleMetadata({
			//👇 Imports both components to allow component composition with Storybook
			declarations: [BtnPrimaryComponent],
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
const Template: Story<BtnPrimaryComponent> = (args) => ({
	props: args,
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Default.args = {

};

Default.decorators = [
	componentWrapperDecorator((story) => `<sh-btn-primary> oui </sh-btn-primary>`),
];
