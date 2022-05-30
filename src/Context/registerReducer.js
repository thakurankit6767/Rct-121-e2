import axios from "axios";
import { useContext } from "react";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function registerReducer() {
  const [state, dispatch] = useContext(AuthContext);
  const navigate = useNavigate();

  if (state.isAuth) {
    return <Navigate to="/dashboard" />;
  }
  

  return (
    <>
      <button onClick={RegisterUser}>Register</button>
    </>
  );
}
export default registerReducer;
