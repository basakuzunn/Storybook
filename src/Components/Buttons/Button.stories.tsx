import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: 'primary',
  label: 'Action Title',
  disable: false,
  size: 'large',
  
};

export const BluePrimary = Template.bind({});
BluePrimary.args = {
  label: 'Action Title',
  variant: 'bluePrimary',
  disable: false,
  
};

export const BlueSecondary = Template.bind({});
BlueSecondary.args = {
  label: 'Action Title',
  variant :'blueSecondary',
  disable: false,
};
export const  BlackPrimary = Template.bind({});
BlackPrimary.args = {
  label: 'Action Title',
  variant:'blackPrimary',
  disable: false,
};
export const BlackSecondary = Template.bind({});
BlackSecondary.args = {
  label: 'Action Title',
  variant:'blackSecondary',
  disable: false,
};
export const WhitePrimary = Template.bind({});
WhitePrimary.args = {
  label: 'Action Title',
  variant: 'whitePrimary',
  disable: false,
};
export const WhiteSecondary = Template.bind({});
WhiteSecondary.args = {
  label: 'Action Title',
  variant: 'whiteSecondary',
  disable: false,
};

