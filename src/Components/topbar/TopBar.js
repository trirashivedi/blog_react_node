
import { Link } from "react-router-dom";
import "./topbar.css";

export default function TopBar() {
  const user = true;
  return (
    <div className='top'>
        <div className="topLeft">
        <i className=" topIcon fa-brands fa-facebook-f"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-pinterest-p"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
               <Link to="/" className="link" >HOME</Link>
            </li>
            <li className="topListItem">
            <Link to="/about" className="link" >ABOUT</Link>
            </li>
            <li className="topListItem">
            <Link to="/contact" className="link" >CONTACT</Link>
            </li>
            <li className="topListItem">
              <Link to="/write" className="link" >WRITE</Link>
              </li>
            <li className="topListItem">
              {user && "LOGOUT"}</li>
          </ul>
        </div>
        <div className="topRight">
          {user ? (  <img className="topImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoKJPxxwPeNvISnBbZsZHe887Ws0FnrL7o0w&usqp=CAU" alt="" />):(

           <>
            <ul className="topList">
              <li className="topListItem">
              <Link to="/login" className="link" >LOGIN</Link>
              </li>
              <li className="topListItem">
              <Link to="/register" className="link" >REGISTER</Link>
              </li>
            </ul>
           </>
          )
          }
          
            <i className=" topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
