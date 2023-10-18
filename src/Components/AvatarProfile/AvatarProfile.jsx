import Avatar from "@mui/material/Avatar";

import "./AvatarProfile.css";

// eslint-disable-next-line react/prop-types
function AvatarProfile({ avatar }) {
  return (
    <div className="profile">
      <Avatar sx={{ width: 50, height: 50 }} src={avatar ? avatar : null} />
    </div>
  );
}

export default AvatarProfile;
