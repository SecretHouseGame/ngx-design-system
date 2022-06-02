// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {Meta, Story} from "@storybook/angular";
import { ChatMessageComponent } from "../../projects/ngx-ds-secret-house/src/lib/components/chat/chat-message/chat-message.component";
// import defaultProfilePicture from "./stories/assets/images/default-pp.jpg";

export default {
	title: "Chat/Chat Message",
	component: ChatMessageComponent
} as Meta;

const Template: Story = (args)  => ({
	props: args,
});

export const TalkFromUser = Template.bind({});
TalkFromUser.args = {
	type: "talk",
	isTalking: true,
	imageUrl: "https://this-person-does-not-exist.com/img/avatar-2a661c7e6cdb36ec1765447edcd7fabc.jpg",
	content: "Tu as mangé ?",
	isCurrentUser: true
}

export const ActionFromUser = Template.bind({});
ActionFromUser.args = {
	type: "acting",
	isActing: true,
	content: "*imite le canard*",
	isCurrentUser: true
}

export const TalkToUser = Template.bind({});
TalkToUser.args = {
	type: "talk",
	isTalking: true,
	content: "Non, pas encore",
	isCurrentUser: false
}

export const ActionToUser = Template.bind({});
ActionToUser.args = {
	type: "acting",
	isActing: true,
	content: "*imite le cochon*",
	isCurrentUser: false
}
