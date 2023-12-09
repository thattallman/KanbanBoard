import useGetData from "./utils/useGetData";
import renderIcon from "./utils/useRenderIcons";
import { FaPlus } from "react-icons/fa6";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import useSetData from "./utils/useSetData";

const Body = ({ control, sort }) => {
  const { tickets, users } = useGetData();
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

  useSetData(statusColumns, priorityColumn, nameColumn, sort);

  if (control == "priority") {
    return (
      <div className="Body">
        {Object.entries(priorityColumn).map(([status, cards]) => (
          <div key={status} className="statusColumn">
            <h2 className="columnHead">
              <div>
                {renderIcon(status)}
                {status} 
                <span className="countBadge">{cards.length}</span>
              </div>
              <div>
                <FaPlus />
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
            <h2 className="columnHead">
              <div>
                {renderIcon(status)}
                {status}
                <span className="countBadge">{cards.length}</span>
              </div>
              <div>
                <FaPlus />
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
                  <FaPlus />
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
