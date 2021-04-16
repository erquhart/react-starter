import React from 'react';
import Button from './button';

export default {
  title: 'Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Base = Template.bind({});
Base.args = {
  children: 'Button Text',
};
