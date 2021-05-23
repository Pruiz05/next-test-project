import  Router  from "next/router";
import React from "react";


const Users = (props) => {
  // console.log(props.users)
  return (
    <div>
      <ul className="list-group">
        {props.users.map((user, index) => (
          <li className="list-group-item   list-group-item-action" key={index} onClick={()=>{
            Router.push('/users/[id]',`/users/${user.id}`)
          }}>
            <div class="d-flex justify-content-between align-center">
              <div className="flex-grow-1 ms-3">
                <h5>
                  {user.id}. {user.first_name} {user.last_name}
                </h5>
                <p>{user.email}</p>
              </div>

              <div class="flex-shrink-0">
                <img
                  src={user.avatar}
                  alt={user.first_name + user.last_name}
                  style={{ borderRadius: "50%" }}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
