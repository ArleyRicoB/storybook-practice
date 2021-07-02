import React from 'react';
import Button from './Button';
import { action, actions } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';

// import Center from '../Center/Center';

export default {
	title: 'Story/button',
	component: Button,
	args: {
		children: 'Button',
	},
	// using default decorators, important: story as a function or as a component
	// decorators: [ (story) => (<Center>{story()}</Center>) ]
	// decorators: [ (Story) => (<Center><Story /></Center>) ]
}

/** Center is a decorator to center a component */
// export const Primary = () => <Center><Button variant="primary">Primary</Button></Center>;

export const Primary = () => <Button onClick={action('Click handler')} variant="primary">Primary</Button>;
export const Secondary = () => <Button {...actions('onClick', 'onMouseOver')} variant="secondary">Secondary</Button>;
export const Success = () => <Button variant="success">Success</Button>;
export const Danger = () => <Button variant="danger">Danger</Button>;
export const Console = () => <Button variant="primary" onClick={() => console.log('here is a log', process.env.STORYBOOK_THEME)}>Log</Button>;
export const Knobs = () => (
	<Button disabled={boolean('Disabled', false)} variant="primary" onClick={() => console.log('here is a log')}>
		{text('Label', 'Button Label')}
	</Button>
);


const Template = (args) => <Button {...args} />;

export const PrimaryA = Template.bind({});
PrimaryA.args = {
	variant: 'primary',
	children: 'Primary args'
};

export const LongPrimaryA = Template.bind({});
LongPrimaryA.args = {
	...PrimaryA.args,
	// children: 'Long Primary args'
};

export const SecondaryA = Template.bind({});
SecondaryA.args = {
	variant: 'secondary',
	// children: 'Secondary args'
};

export const SuccessA = Template.bind({});
SuccessA.args = {
	variant: 'success',
	// children: 'Success args'
};

export const DangerA = Template.bind({});
DangerA.args = {
	variant: 'danger',
	// children: 'Darger args'
};
