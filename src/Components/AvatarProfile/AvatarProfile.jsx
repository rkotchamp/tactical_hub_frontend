import "./AvatarProfile.css";

// eslint-disable-next-line react/prop-types
function AvatarProfile({ avatar }) {
  return (
    <div className="profile">
      <img src={avatar} alt="" />
    </div>
  );
}

export default AvatarProfile;
