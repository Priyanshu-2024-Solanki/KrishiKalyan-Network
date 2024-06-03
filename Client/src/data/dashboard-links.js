import { ACCOUNT_TYPE } from "../utils/constants";
export const sidebarLinks = [
  {
    id: 1,
    name: "Profile",
    path: "/dashboard/my-profile",
    icon: "VscAccount",
  },
  {
    id: 2,
    name: "My Status",
    path: "/dashboard/my-courses",
    type: ACCOUNT_TYPE.INSTRUCTOR,
    icon: "VscVm",
  },
  {
    id: 4,
    name: "Booked Appointment",
    path: "/dashboard/cart",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscHistory",
  },
];
