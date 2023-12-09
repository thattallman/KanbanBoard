import { HiChartBar } from "react-icons/hi";
import { FcHighPriority } from "react-icons/fc";
import { PiCellSignalMediumLight } from "react-icons/pi";
import { BsBarChart } from "react-icons/bs";
import { FcLowPriority } from "react-icons/fc";
import { FcClock } from "react-icons/fc";
import { FcApproval } from "react-icons/fc";
import { FcCancel } from "react-icons/fc";
import { FaClockRotateLeft } from "react-icons/fa6";
import { FcTodoList } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";
const renderIcon = (status) => {
  switch (status) {
    case "Urgent":
      return <FcHighPriority />;
    case "High":
      return <HiChartBar />;
    case "Medium":
      return <PiCellSignalMediumLight />;
    case "Low":
      return <BsBarChart />;
    case "No priority":
      return <FcLowPriority />;
    case "In progress":
      return <FcClock />;
    case "Done":
      return <FcApproval />;
    case "Cancelled":
      return <FcCancel />;
    case "Backlog":
      return <FaClockRotateLeft />;
    case "Todo":
      return <FcTodoList />;
    case "Todo":
      return <FcTodoList />;
    case "Other":
      return <FcBusinessman />;
    default:
      return null;
  }
};
export default renderIcon;
