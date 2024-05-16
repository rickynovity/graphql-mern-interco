import React, { forwardRef } from 'react';
import { Tag } from 'antd';
import PropTypes from 'prop-types';

const AvaCheckbox = forwardRef(({ data, onChange, ...restProps }, ref) => {
  const handleChange = (tag, checked) => {
    if (onChange) {
      onChange(tag, checked);
    }
  };

  return (
    <div>
      {data.map((tag) => (
        <Tag.CheckableTag
          ref={ref}
          key={tag}
          checked={tag.checked}
          onChange={(checked) => handleChange(tag, checked)}
          {...restProps}
        >
          {tag.label}
        </Tag.CheckableTag>
      ))}
    </div>
  );
});

AvaCheckbox.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onChange: PropTypes.func,
};

export default AvaCheckbox;
