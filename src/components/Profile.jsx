import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";

function Profile() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div className="ProfileContainer" onClick={handleOpen}>
        <CgProfile size={30} />
      </div>
      {open ? <div className="signout">Sign out</div> : null}
    </div>
  );
}

export default Profile;
