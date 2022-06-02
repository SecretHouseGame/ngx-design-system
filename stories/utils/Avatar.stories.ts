// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta} from '@storybook/angular/types-6-0';
import { moduleMetadata, componentWrapperDecorator } from '@storybook/angular';
import { AvatarComponent } from '../../projects/ngx-ds-secret-house/src/lib/components/utils/avatar/avatar.component';

import { CommonModule } from '@angular/common';

import PropTypes from 'prop-types';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Utils/Avatar',
  component: AvatarComponent,
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations: [AvatarComponent],
      imports: [CommonModule],
    }),
    //👇 Wraps our stories with a decorator
    componentWrapperDecorator(story => `<div>${story}</div>`),
  ],
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
} as Meta;
// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<AvatarComponent> = (args) => ({
  props: args,
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Default.args = {
  link: "https://resize.elle.fr/article/var/plain_site/storage/images/loisirs/cinema/news/avatar-2-une-premiere-bande-annonce-en-mai-4010741/96462268-1-fre-FR/Avatar-2-une-premiere-bande-annonce-en-mai.jpg",
  avatarAlt: "Avatar Icon"
};

Default.decorators = [
  componentWrapperDecorator((story) => `<sh-field-container> ${story} </sh-field-container>`),
];