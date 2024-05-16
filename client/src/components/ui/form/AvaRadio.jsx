import React from "react";
import { Radio as AntdRadio, Space } from "antd";

const Wrapper = ({ children, direction }) => {
  if (direction === "vertical") {
    return <Space direction={direction}>{children}</Space>;
  }
  return <>{children}</>;
};

const AvaRadio = ({
  onChange,
  value,
  ref,
  style = {},
  className = "",
  options = [],
  direction,
  ...props
}) => {
  return (
    <AntdRadio.Group
      {...props}
      value={value}
      className={className}
      style={style}
      onChange={onChange}
      ref={ref}
    >
      <Wrapper direction={direction}>
        {options.map(({ value, label }) => {
          return (
            <AntdRadio value={value} key={value}>
              {label}
            </AntdRadio>
          );
        })}
      </Wrapper>
    </AntdRadio.Group>
  );
};

export default AvaRadio;
