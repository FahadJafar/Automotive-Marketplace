import IMGB from "./gg.jpg";
import { setName, setToken } from "./Log";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
const Login = () => {
  const NAV = useNavigate();
  const dispatch = useDispatch();

  const handleit = () => {
    dispatch(setToken(1));
    NAV("/home");
  };

  return (
    <div className="Login">
      <img src={IMGB} alt="Imagee" />
      <form onSubmit={handleit}>
        <h2>Username: </h2>
        <input
          type="text"
          required
          placeholder="Username...."
          onChange={(e) => {
            dispatch(setName(e.target.value));
          }}
        ></input>
        <h3>Password: </h3>
        <input type="password" required placeholder="Password...."></input>
        <br></br>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
