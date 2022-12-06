import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import axios from "axios";

function Profile() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleSignOut = () => {
    const signOutURL = "http://localhost:8080/auth/signout";
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .post(signOutURL, config)
      .then((response) => {
        console.log("Success");
        console.log(response);
        window.location.href = "/login";
        localStorage.setItem("token", null);
      })
      .catch((err) => {
        console.log("Fail");
        console.log(err);
        window.location.href = "/login";
        localStorage.setItem("token", null);
      });
  };

  return (
    <div>
      <div className="ProfileContainer" onClick={handleOpen}>
        <CgProfile size={30} />
      </div>
      {open ? (
        <div className="signout" onClick={handleSignOut}>
          Sign out
        </div>
      ) : null}
    </div>
  );
}

export default Profile;
