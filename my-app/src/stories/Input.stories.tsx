import type { Meta, StoryObj } from "@storybook/react-vite";
import Input from "../components/Input/Input";
import type { ComponentProps } from "react";

type StoryProps = ComponentProps<typeof Input>;

const meta: Meta<StoryProps> = {
  title: "Example/Input",
  component: Input,
  argTypes: {
    error: { control: "text" },
    helperText: { control: "text" },
    fullWidth: { control: "boolean" },
    disabled: { control: "boolean" },
  }
};

export default meta;

type Story = StoryObj<StoryProps>;

export const ErrorInput: Story = {
  args: {
    fullWidth: true,
    label: "Email",
    type: 'email',
    placeholder: "Enter your email",
    error: "Invalid email address",
  },
  render: (args) => <Input {...args} />,
};
