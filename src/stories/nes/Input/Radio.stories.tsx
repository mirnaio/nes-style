import { Meta, StoryFn } from '@storybook/react';
import { Radios } from 'components/Radios';
import React from 'react';

export default {
  title: 'Components/Input/Radios',
  component: Radios
} as Meta;

const Template: StoryFn<any> = (args) => {
  return <Radios {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
  children: ['hi']
};
