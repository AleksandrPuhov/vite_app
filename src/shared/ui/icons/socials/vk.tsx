import { FC } from "react";

import { rem } from "@mantine/core";

interface AddressBookIconProps extends React.ComponentPropsWithoutRef<"svg"> {
  size?: number | string;
}

export const VKIcon: FC<AddressBookIconProps> = ({
  size,
  style,
  ...others
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 19 11"
      style={{ width: rem(size), height: rem(size), ...style }}
      {...others}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.3426 10.6919C10.3426 10.6919 10.6776 10.656 10.8491 10.4779C11.0062 10.3147 11.0007 10.0067 11.0007 10.0067C11.0007 10.0067 10.9798 8.56873 11.6707 8.35641C12.3515 8.1476 13.2257 9.74702 14.1534 10.3621C14.8542 10.8271 15.3862 10.7253 15.3862 10.7253L17.8653 10.6919C17.8653 10.6919 19.1616 10.6147 18.547 9.62946C18.4962 9.54874 18.1885 8.90037 16.7043 7.56854C15.1492 6.17442 15.358 6.3999 17.2299 3.98804C18.37 2.51934 18.8257 1.62268 18.6832 1.23928C18.5479 0.87254 17.7092 0.969927 17.7092 0.969927L14.9187 0.986596C14.9187 0.986596 14.7117 0.959398 14.5583 1.04801C14.4085 1.13487 14.3114 1.33754 14.3114 1.33754C14.3114 1.33754 13.8702 2.47372 13.281 3.44057C12.0383 5.47955 11.5418 5.58746 11.3384 5.46112C10.8655 5.16545 10.9835 4.27494 10.9835 3.64236C10.9835 1.66567 11.2939 0.841832 10.3798 0.628634C10.0766 0.557568 9.8533 0.511068 9.07715 0.503172C8.08132 0.493521 7.23891 0.506681 6.76142 0.732162C6.4437 0.882191 6.1986 1.21734 6.34838 1.23664C6.53266 1.26033 6.95024 1.34544 7.17173 1.63672C7.45768 2.01311 7.4477 2.85712 7.4477 2.85712C7.4477 2.85712 7.612 5.18388 7.06371 5.47253C6.68789 5.67081 6.17228 5.26635 5.06389 3.416C4.49653 2.46845 4.06806 1.42089 4.06806 1.42089C4.06806 1.42089 3.98545 1.22524 3.83748 1.11995C3.65865 0.992738 3.40901 0.953257 3.40901 0.953257L0.757409 0.969927C0.757409 0.969927 0.358897 0.980455 0.212745 1.14803C0.0829339 1.2963 0.20276 1.60426 0.20276 1.60426C0.20276 1.60426 2.27884 6.299 4.62997 8.66524C6.78593 10.8341 9.23329 10.6919 9.23329 10.6919H10.3426Z"
      />
    </svg>
  );
};
