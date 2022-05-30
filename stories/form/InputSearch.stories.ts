// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta} from '@storybook/angular/types-6-0';
import { moduleMetadata, componentWrapperDecorator } from '@storybook/angular';
import { InputSearchComponent } from '../../projects/ngx-ds-secret-house/src/lib/components/form/input-search/input-search.component';
import { FieldContainerComponent } from '../../projects/ngx-ds-secret-house/src/lib/components/form/field-container/field-container.component';

import { CommonModule } from '@angular/common';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Form/Input Search',
  component: InputSearchComponent,
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations: [FieldContainerComponent, InputSearchComponent],
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
const Template: Story<InputSearchComponent> = (args) => ({
  props: args,
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Default.args = {
  placeholder: 'Que cherchez-vous ?',
  name: 'form-search',
};

Default.decorators = [
  componentWrapperDecorator((story) => `<sh-field-container> ${story} </sh-field-container>`),
];