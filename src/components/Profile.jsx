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
    axios
      .post(signOutURL)
      .then((response) => {
        console.log(response);
        window.location.href = "/login";
      })
      .catch((err) => {
        console.log(err);
        window.location.href = "/login";
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
