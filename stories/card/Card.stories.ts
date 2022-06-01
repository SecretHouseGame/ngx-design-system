import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata, componentWrapperDecorator } from '@storybook/angular';
import { CardComponent } from '../../projects/ngx-ds-secret-house/src/lib/components/card/card.component';

import { CommonModule } from '@angular/common';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
	title: 'Card/Card',
	component: CardComponent,
	decorators: [
		moduleMetadata({
			//👇 Imports both components to allow component composition with Storybook
			declarations: [CardComponent],
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
const Template: Story<CardComponent> = (args) => ({
	props: args,
});

// More on args: https://storybook.js.org/docs/angular/writing-stories/args

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [
	componentWrapperDecorator((story) =>
		`<sh-card>
		 	Zetas sunt burguss de noster hydra.
			Mori mechanice ducunt ad ferox calceus.
			Ignigenas sunt lactas de castus acipenser.
			Sunt finises promissio peritus, azureus advenaes.
			Turpiss sunt capios de brevis secula.
			Canis de fatalis visus, anhelare hibrida!
			Cacula de fidelis detrius, attrahendam luna!
			Neuter axona grauiter quaestios bursa est.
			Bullas sunt absolutios de mirabilis solem.
		 </sh-card>`
	),
];

export const Default_shadow = Template.bind({})
Default_shadow.args = {}
Default_shadow.decorators = [
	componentWrapperDecorator((story) =>
		`<sh-card [class]="'shadow'">
			Alter domina sensim vitares lamia est.
			Cadunt superbe ducunt ad barbatus era.
			Sunt voxes transferre noster, barbatus calceuses.
			Lumen de rusticus silva, quaestio solem!
			Cobaltums sunt heuretess de peritus contencio.
			Candidatuss sunt cannabiss de regius domus.
			Sunt mineralises demitto castus, primus capioes.
			Crescere sed mire ducunt ad ferox pars.
			Regius turpis aliquando contactuss ratione est.
		</sh-card>`
	)
]

export const Default_bigShadow = Template.bind({})
Default_bigShadow.args = {}
Default_bigShadow.decorators = [
	componentWrapperDecorator((story) =>
		`<sh-card [class]="'bigShadow'">
			Fly bravely like a remarkable proton.
			Walk rudely like a cloudy crewmate.
			Yell rudely like an evasive dosi.
			The adventure is a greatly exaggerated species.
			The vision is an evasive phenomenan.
			The faith is a dead parasite.
			Fly cunningly like a devastated ship.
			The modern captain mechanically dissolves the machine.
			The tragedy is a cloudy particle.
		</sh-card>`
	)
]

export const Active = Template.bind({})
Active.args = {}
Active.decorators = [
	componentWrapperDecorator((story) =>
		`<sh-card [class]="'active'">
			Lentils combines greatly with old eggs.
			Turkey combines greatly with aged mackerel.
			Tofu combines greatly with dried pork butt.
			Strawberries combines greatly with melted rice.
			Carrots combines greatly with juicy eggs.
			Tuna combines greatly with large meatloaf.
			Pork butt combines greatly with grey ground beef.
			Try breaking zucchini smoothie mixed with condensed milk.
			Strudel combines greatly with mild leek.
		</sh-card>`
	)
]
