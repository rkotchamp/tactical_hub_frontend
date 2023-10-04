import SideNavCompo from "../../Components/SideNavContainer/SideNavCompo";
import NavBar from "../../Components/NavBar/NavBar";
import ArticleSidesContainer from "../../Components/SideArticles/ArticleSidesContainer";
import "./Home.css";

function Home() {
  return (
    <div>
      <NavBar />
      <SideNavCompo />
      <ArticleSidesContainer />
    </div>
  );
}

export default Home;
