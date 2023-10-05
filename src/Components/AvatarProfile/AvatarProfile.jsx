import "./AvatarProfile.css";

function AvatarProfile({ avatar }) {
  return (
    <div className="profile">
      <img src={avatar} alt="" />
    </div>
  );
}

export default AvatarProfile;
