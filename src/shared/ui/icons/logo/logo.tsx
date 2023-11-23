import { FC } from "react";

import { rem } from "@mantine/core";

interface AddressBookIconProps extends React.ComponentPropsWithoutRef<"svg"> {
  size?: number | string;
  currentColor?: string;
}

export const Logo: FC<AddressBookIconProps> = ({
  size,
  style,
  currentColor = "var(--mantine-primary-color-filled)",
  ...others
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 50"
      style={{ width: rem(size), height: rem(size), ...style }}
      {...others}
    >
      <text
        fill={currentColor}
        fontFamily="Arial, sans-serif"
        fontSize={36}
        x={7}
        y={36}
      >
        AP
      </text>
      <ellipse
        fill="transparent"
        stroke={currentColor}
        cx="30"
        cy="25"
        rx="27"
        ry="22"
      ></ellipse>
    </svg>
  );
};
