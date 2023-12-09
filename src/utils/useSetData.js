import UserCard from "../UserCard";
import useGetData from "./useGetData";

const useSetData = (statusColumns, priorityColumn, nameColumn,sort) => {
 const{tickets,users} = useGetData();
  if (sort == "true") {
    tickets.sort((a, b) => b.priority - a.priority);
  } else {
    tickets.sort((a, b) => a.title.localeCompare(b.title));
  }

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
 
};
export default useSetData;