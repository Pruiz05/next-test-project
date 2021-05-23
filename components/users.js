import React from "react";

const Users = (props) => {
  // console.log(props.users)
  return (
    <div>
      <ul>
        {props.users.map((user, index) => (
          <li className="list-group-item list-group-item-action" key={index}>
            <h5>{user.first_name} {user.last_name}</h5>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
