import { Link } from "react-router-dom";
import "../styles/sideBar.css";
import img1 from "../images/adminbtn.jpg"
const SideBar = (probs) => {
    let adName= probs.data
    return (
        <div className="sideBar">
  <div className="head">
        <img
          src={img1}
          alt=""
        />
        <div className="ad-detail">
          <h2>@dmin</h2>
          <p>{adName}</p>
        </div>
      </div>
      <div className="links">
        <ul>
          <li>
            <Link to="/admin-portal/">Admin Page </Link>
          </li>
          <li>
            <Link to="/admin-portal/add-book">Add Book</Link>
          </li>
          <li>
            <Link to="/admin-portal/book-list">Book List</Link>
          </li>
          <li>
            <Link to="/admin-portal/add-user">Add User</Link>
          </li>
          <li>
            <Link to="/admin-portal/user-list">User List</Link>
          </li>
          <li>
            <Link to="/admin-login">LogOut</Link>
          </li>
        </ul>
      </div>

        </div>
    );
}
 
export default SideBar;