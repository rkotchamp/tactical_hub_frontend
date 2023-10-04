import LinksNav from "../LinksNav/LinksNav";

import "./SideNavCompo.css";

function SideNavCompo() {
  return (
    <div className="sideNavContainer">
      <LinksNav text={"SWAT Tactics"} />
      <LinksNav text={"Police Office"} />
      <LinksNav text={"Cyber Attacks"} />
      <LinksNav text={"New Recruits"} />
      <LinksNav text={"Agriculture"} />
      <LinksNav text={"Others"} />
    </div>
  );
}

export default SideNavCompo;
