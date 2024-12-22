import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth-service";
import { login, logout } from "./features/authSlice";
import { Header, Footer, LogOutModal } from "./components";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const popUpStatus = useSelector((state) => state.popUp.isVisible);

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        {popUpStatus && <LogOutModal />}
        <main className="bg-[white] p-10">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : (
    <div className="block w-full">
      <div className="h-screen bg-white flex justify-center items-center">
        <div className="relative flex justify-center items-center">
          <div className="absolute h-20 w-20 rounded-full shadow-[inset_0_0_10px_2px_rgba(211,211,211,0.6)]"></div>
          <div className="absolute h-20 w-20 animate-spin rounded-full shadow-[inset_0_2px_0_#000]"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
