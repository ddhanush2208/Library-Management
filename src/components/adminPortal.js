import SideBar from "./sideBar";
import { Routes, Route } from "react-router-dom";
import HomePortal from "./homePortal";
import AddBooks from "./addBooks";
import BookList from "./bookList";
import AddUsers from "./addUsers";
import UserList from "./userList";


const AdminPortal = (probs) => {

    return ( 
        <div className="adminPortal">
          <div className="sideBarcomp">
          <SideBar data={probs.data} />

          </div>
         <div className="restDisp">
         <Routes>
        <Route path="/" element={<HomePortal />} />
        <Route path="/book-list" element={<BookList />} />
        <Route path="/user-list" element={<UserList />} />
        <Route path="/add-book" element={<AddBooks />} />
        <Route path="/add-user" element={<AddUsers />} />
      </Routes>
         </div>

        </div>
     );
}
 
export default AdminPortal;