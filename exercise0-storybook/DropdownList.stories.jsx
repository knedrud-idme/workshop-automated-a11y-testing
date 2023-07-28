import React from 'react'

import DropdownList from 'components/dropdown-list'

export default {
  title: 'Components/DropdownList',
  component: DropdownList,
}

const Template = (args) => <DropdownList {...args} />;

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
  defaultItemText: 'Choose One',
  items: ['Uno', 'Dos', 'Tres']
};
