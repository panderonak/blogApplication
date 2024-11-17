import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth-service";
import { login, logout } from "./features/authSlice";
import { Header, Footer } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

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
        <main className="bg-[#6B5CA5] p-10">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : (
    <div className="w-full block">
      <div className="min-h-screen bg-[#6B5CA5] text-center font-mono text-3xl">
        <div className="flex h-screen w-full items-center justify-center gap-x-2">
          <div className="border-r[#00A896]  flex h-5 w-60 items-center justify-center rounded-full p-5 animate-bounce">
            <div className="border-r[#00A896] bg-black h-20 w-20 animate-spin rounded-full border-e-8 border-l-8 border-b-[#6B5CA5] shadow-2xl flex justify-center items-center">
              <div className="border-r[#00A896] bg-green-950 h-10 w-20 animate-spin rounded-full border-e-8 border-l-8 border-b-[#6B5CA5] shadow-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
