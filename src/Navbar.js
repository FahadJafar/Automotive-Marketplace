import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { clear } from "./Log";

const Navbar = () => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState("Login");
  const { token } = useSelector((state) => state.log);
  const { NAME } = useSelector((state) => state.log);
  useEffect(() => {
    if (token === 0) {
      setLogin("Login");
    } else {
      setLogin(NAME + " / Logout");
    }
  }, [NAME, token]);

  const handleLogout = () => {
    if (token === 1) {
      dispatch(clear());
    }
  };

  return (
    <div className="Navbar">
      <h2>AutoMobiles</h2>
      <div className="Links">
        <nav>      
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/new">New Cars</NavLink>
          <NavLink to="/u">Used Cars</NavLink>
          <NavLink to="/sell">Sell</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
          <NavLink onClick={handleLogout} to="/Login">
            {login}
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
