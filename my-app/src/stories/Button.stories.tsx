import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentProps } from 'react';
import { fn } from 'storybook/test'

import Button from '../components/Button/Button';

type StoryProps = ComponentProps<typeof Button>;

const meta: Meta<StoryProps> = {
  title: 'Example/Button',
  component: Button,
  args: {
    onClick: fn()
  }
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  args: {
    size: 'medium',
    variant: 'danger',
  }, 
  render: (args) => <Button {...args}>Save</Button>
};
