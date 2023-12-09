import { IoPeople } from "react-icons/io5";
import { BsFillExclamationSquareFill } from "react-icons/bs";
import { GoDot } from "react-icons/go";

const UserCard = ({ ticket, user }) => {
  return (
    <div className="userCard">
      <div className="top">
        <div>
          <h2>{ticket.id}</h2>
        </div>
        <IoPeople />
      </div>
      <div>
        <h1>{ticket.title}</h1>
      </div>

      <h2>Assigned to : {user.name}</h2>

      <div className="bottom">
        <div>
          <h2>
            <BsFillExclamationSquareFill className="icon-container" />
          </h2>
        </div>
        <h2 className="feature-request-box">
          <GoDot />
          Feature Request
        </h2>
      </div>
    </div>
  );
};
export default UserCard;
