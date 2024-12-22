import { useState } from "react";
import { useDispatch } from "react-redux";
import { showPopUp } from "../../features/logoutPopup";

function LogoutButton() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(showPopUp());
  };
  return (
    <>
      <button
        className="inline-bock px-6 py-2 duration-200 hover:bg-[#890620] rounded-full"
        onClick={logoutHandler}
      >
        Logout
      </button>
    </>
  );
}

export default LogoutButton;
