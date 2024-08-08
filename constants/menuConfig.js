import { RiDashboardHorizontalLine } from "react-icons/ri";
import { MdManageAccounts, MdOutlineSummarize } from "react-icons/md";
import { GiHangingSign } from "react-icons/gi";
import { FaNoteSticky } from "react-icons/fa6";
import { CiBank } from "react-icons/ci";
import { CgNotes } from "react-icons/cg";

export const menuItemsTop = [
  {
    id: 1,
    icon: RiDashboardHorizontalLine,
    label: "Dashboard",
  },
  {
    id: 2,
    icon: MdManageAccounts,
    label: "Accounts",
  },
  {
    id: 3,
    icon: FaNoteSticky,
    label: "Batches",
  },
  {
    id: 4,
    icon: GiHangingSign,
    label: "Resolution",
  },
  {
    id: 5,
    icon: CgNotes,
    label: "Assesments",
  },
  {
    id: 6,
    icon: CiBank,
    label: "Appeals Letter",
  },
  {
    id: 7,
    icon: MdOutlineSummarize,
    label: "Summary",
  },
];
