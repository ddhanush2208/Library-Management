import { Link } from "react-router-dom";
import "../styles/homepage.css";
import img1 from "../images/adminbtn.jpg";
import img2 from "../images/userbtn.png";
// import img3 from "../images/admin.png";
// import img4 from "../images/user.png";

const HomePage = () => {

  let a1 = document.getElementsByClassName("adminbtn");
  let b1 = document.getElementsByClassName("userbtn");
  let abc = document.getElementsByClassName("id1")
  let two = document.getElementsByClassName("id2")

  function click1(){
    a1[0].style.opacity = "1";
    a1[0].style.transition = "opacity 1s ease-in-out"
    abc[0].style.visiibility = "hidden"
  }
  function click2(){
    b1[0].style.opacity = "1";
    b1[0].style.transition = "opacity 1s ease-in-out"
    two[0].style.display = "none"
  }

  return (
    <section className="homepage">
      <h1>Welcome to D's Library</h1>
      <button onClick={click1} id="id1">
            For Admin
          </button>
          <button onClick={click2} id="id2">
          For User
        </button>

      <div className="homepagedisp">
        <div className="adminbtn">
          

          <img src={img1} alt="" />
          <button>
            <Link to="/admin-login">Admin Login</Link>
          </button>
        </div>
       
        <div className="userbtn">
          <img src={img2} alt="" /> <br />
          <button>
            <Link to="/user-login">User Login</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
