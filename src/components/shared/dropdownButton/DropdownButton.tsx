import React, { useState } from 'react';
import "./DropdownButton.css";
import { CaretDownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';

const items: MenuProps['items'] = [
  {
    label: <p>Today</p>,
    key: '0',
  },
  {
    type: 'divider',
  },
  {
    label: <p>This Week</p>,
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: <p>This Month</p>,
    key: '2',
  },
];

// Define the DropdownButton component
const DropdownButton: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string>('This Week');

  // Function to handle the menu item click
  const handleMenuClick = (key: string) => {
    const selectedItem = items.find(item => 
      item && 'key' in item && item.key === key && 'label' in item
    );

    if (selectedItem && 'label' in selectedItem) {
      const selectedLabel = selectedItem.label;

      // Check if selectedLabel is a React element and extract its text content
      const labelText = React.isValidElement(selectedLabel)
        ? selectedLabel.props.children
        : selectedLabel;

      if (typeof labelText === 'string') {
        setSelectedValue(labelText); // Update state only if it's a string
      }
    }
  };

  return (
    <Dropdown
      className='btn-dropdown'
      menu={{
        items: items.map(item => {
          // Ensure item has a label before adding onClick
          if (item && 'label' in item) {
            return {
              ...item,
              onClick: () => handleMenuClick(String(item.key)), // Attach the click handler
            };
          }
          return null; // Ignore items without a label
        }).filter(Boolean), // Remove any null values
      }}
      trigger={['click']}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          {selectedValue} {/* Display the selected value */}
          <CaretDownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
}

export default DropdownButton;