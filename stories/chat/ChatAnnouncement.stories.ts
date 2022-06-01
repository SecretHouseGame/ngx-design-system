// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {Meta, Story} from "@storybook/angular";
import { ChatAnnouncementComponent } from "../../projects/ngx-ds-secret-house/src/lib/components/chat/chat-announcement/chat-announcement.component";

export default {
	title: "Chat Announcement",
	component: ChatAnnouncementComponent
} as Meta;

const Template: Story = (args)  => ({
	props: args,
});

export const Announcement = Template.bind({});
Announcement.args = {
	type: "announcement",
	content: "Le jeu a commencé !"
}

export const Dare = Template.bind({});
Dare.args = {
	type: "dare",
	targetName: "luigi",
	dare: "manger du citron",
	cashPrize: "10000"
}

export const Vote = Template.bind({});
Vote.args = {
	type: "vote"
}

export const Elimination = Template.bind({});
Elimination.args = {
	type: "elimination",
	targetName: "luigi",
	secret: "Je suis allergique au citron"
}
