import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth-service";
import { logout } from "../../features/authSlice";
import { useNavigate } from "react-router-dom";

function LogoutButton() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutHandler = () => {
    console.log("Logout called");
    authService.logout().then(() => {
      dispatch(logout());
    });
    navigate("/");
  };
  return (
    <button
      className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutButton;
