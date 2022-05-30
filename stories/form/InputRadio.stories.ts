// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta} from '@storybook/angular/types-6-0';
import { moduleMetadata, componentWrapperDecorator } from '@storybook/angular';
import { InputRadioComponent } from '../../projects/ngx-ds-secret-house/src/lib/components/form/input-radio/input-radio.component';
import { FieldContainerComponent } from '../../projects/ngx-ds-secret-house/src/lib/components/form/field-container/field-container.component';

import { CommonModule } from '@angular/common';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Form/Input Radio',
  component: InputRadioComponent,
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations: [FieldContainerComponent, InputRadioComponent],
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
const Template: Story<InputRadioComponent> = (args) => ({
  props: args,
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Default.args = {
  legend: 'Quelle option choisir ?',
  id: 'form-id',
  help: "Ceci est une indication pour aider l'utilisateur",
  name: "option-select",
  options: [
    {
      id: "option-one",
      value: "option-one",
      text: "Option 1",
    },
    {
      id: "option-two",
      value: "option-two",
      text: "Option 2",
    },
    {
      id: "option-three",
      value: "option-three",
      text: "Option 3",
    },
  ]
};

Default.decorators = [
  componentWrapperDecorator((story) => `<sh-field-container> ${story} </sh-field-container>`),
];