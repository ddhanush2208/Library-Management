import { useState, useEffect } from "react";
import '../styles/userList.css'
const UserList = () => {
  let [cust, setCust] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await (await fetch(" http://localhost:1000/users")).json();
      setCust(res);
    };
    fetchData();
  }, []);
  return (
    <div className="userlist">
      <div className="sum">
        <marquee behavior="slide" direction="" scrollamount="70" >
        <h1>Total Users : {cust.length}</h1>
        </marquee>
      </div>
      <div className="main">
        <div className="Ulist">
          {cust.map((user) => {
            return (
              <div className="sheet">
                <div className="first">
                  First Name:{user.firstname} <br />
                  Last Name: {user.lastname} <br />
                  Email: {user.email}
                </div>
                <div className="gender">
                  Gender: {user.gender} <br />
                  Date of Birth: {user.DOB}
                </div>
                <div className="contact">
                  Contact: {user.contact} <br />
                  User ID: {user.userID}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UserList;
