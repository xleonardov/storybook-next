import type { Meta, StoryObj } from '@storybook/react';

import { Container } from './Container';

const sampleContent = (
	<>
		<h2>Container</h2>
		<p>
			Kale chips typewriter direct trade, migas etsy williamsburg distillery
			synth. Kale chips poutine air plant gorpcore neutra 90s marfa aesthetic
			tote bag stumptown meh cred. Farm-to-table hell of snackwave flannel,
			everyday carry gochujang street art. Raw denim cloud bread crucifix
			portland aesthetic, dreamcatcher thundercats vexillologist health goth
			sriracha fixie neutral milk hotel cornhole.
		</p>
		<p>
			Etsy green juice mixtape hella DIY vinyl, yr artisan fanny pack
			letterpress salvia kinfolk fingerstache tattooed. Enamel pin pop-up
			austin, hell of cornhole hammock artisan polaroid offal messenger bag
			vegan.
		</p>
	</>
);

const meta = {
	title: 'Components/Container',
	component: Container,
	tags: ['autodocs'],
	parameters: { layout: 'fullscreen' },
	argTypes: {
		width: {
			control: {
				type: 'select',
			},
		},
	},
	args: {},
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: { children: sampleContent, width: 'standard' },
	decorators: [
		(Story) => (
			<div style={{ backgroundColor: 'var(--mm-color-primary-lightest)' }}>
				<Story />
			</div>
		),
	],
};
