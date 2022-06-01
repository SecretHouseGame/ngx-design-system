// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta} from '@storybook/angular/types-6-0';
import { moduleMetadata, componentWrapperDecorator } from '@storybook/angular';
import { InputPasswordComponent } from '../../projects/ngx-ds-secret-house/src/lib/components/form/input-password/input-password.component';
import { FieldContainerComponent } from '../../projects/ngx-ds-secret-house/src/lib/components/form/field-container/field-container.component';

import { CommonModule } from '@angular/common';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Form/Input Password',
  component: InputPasswordComponent,
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations: [FieldContainerComponent, InputPasswordComponent],
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
const Template: Story<InputPasswordComponent> = (args) => ({
  props: args,
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Default.args = {
  placeholder: 'Ceci est le placeholder',
  label: 'Quel est votre mot de passe ?',
  id: 'form-id',
  help: "Le bouton de droite vous permet d'afficher ou de masquer votre mot de passe",
  disabled: false,
};

Default.decorators = [
  componentWrapperDecorator((story) =>
	  `<sh-field-container [disabled]="disabled"> ${story} </sh-field-container>`
  ),
];
