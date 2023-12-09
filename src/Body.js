import useGetData from "./utils/useGetData";
import UserCard from "./UserCard";
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
import { FaPlus } from "react-icons/fa6";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
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

const Body = ({ control, sort }) => {
  const { tickets, users } = useGetData();

  if (sort == "true") {
    tickets.sort((a, b) => b.priority - a.priority);
  } else {
    tickets.sort((a, b) => a.title.localeCompare(b.title));
  }
  const statusColumns = {
    Todo: [],
    "In progress": [],
    Backlog: [],
    Done: [],
    Cancelled: [],
  };
  const priorityColumn = {
    Urgent: [],
    High: [],
    Medium: [],
    Low: [],
    "No priority": [],
  };
  const nameColumn = {};
  users.forEach((user) => {
    nameColumn[user.id] = [];
  });

  tickets.forEach((ticket) => {
    const userAssigned = users.find((user) => ticket.userId == user.id);
    if (statusColumns.hasOwnProperty(ticket.status)) {
      statusColumns[ticket.status].push(
        <UserCard key={ticket.id} ticket={ticket} user={userAssigned} />
      );
    }
    switch (ticket.priority) {
      case 4:
        priorityColumn["Urgent"].push(
          <UserCard key={ticket.id} ticket={ticket} user={userAssigned} />
        );
        break;
      case 3:
        priorityColumn["High"].push(
          <UserCard key={ticket.id} ticket={ticket} user={userAssigned} />
        );
        break;
      case 2:
        priorityColumn["Medium"].push(
          <UserCard key={ticket.id} ticket={ticket} user={userAssigned} />
        );
        break;
      case 1:
        priorityColumn["Low"].push(
          <UserCard key={ticket.id} ticket={ticket} user={userAssigned} />
        );
        break;
      case 0:
        priorityColumn["No priority"].push(
          <UserCard key={ticket.id} ticket={ticket} user={userAssigned} />
        );
        break;
      default:
        console.error(`Unknown priority value for ticket ${ticket.id}`);
    }
    if (nameColumn.hasOwnProperty(ticket.userId)) {
      nameColumn[ticket.userId].push(
        <UserCard key={ticket.id} ticket={ticket} user={userAssigned} />
      );
    }
  });

  if (control == "priority") {
    return (
      <div className="Body">
        {Object.entries(priorityColumn).map(([status, cards]) => (
          <div key={status} className="statusColumn">
            <h2 className="columnHead">
              <div>
              {renderIcon(status)}
              {status} <span className="countBadge">{cards.length}</span>
              </div>
              <div>
              <FaPlus/>
              <HiOutlineDotsHorizontal />

              </div>
              
            </h2>
            {cards}
          </div>
        ))}
      </div>
    );
  } else if (control == "status") {
    return (
      <div className="Body">
        {Object.entries(statusColumns).map(([status, cards]) => (
          <div key={status} className="statusColumn">
            
            <h2  className="columnHead">
              <div  >
              {renderIcon(status)}
              {status} 
              <span className="countBadge">{cards.length}</span>

              </div>
              <div >
              <FaPlus/>
              <HiOutlineDotsHorizontal />
              </div>
              
              
              
            </h2>
            {cards}
          </div>
        ))}
      </div>
    );
  } else if (control === "name") {
    return (
      <div className="Body">
        {Object.entries(nameColumn).map(([userId, cards]) => {
          const user = users.find((u) => u.id === userId);
          return (
            <div key={userId} className="statusColumn">
              <h2 className="columnHead">
               <div>
              {renderIcon("Other")} {user ? user.name : "Unknown"}{" "}
                <span className="countBadge">{cards.length}</span>
                </div> 
                <div>
                  <FaPlus/>
                  <HiOutlineDotsHorizontal />
                </div>
               
              </h2>
              {cards}
            </div>
          );
        })}
      </div>
    );
  }
};
export default Body;
