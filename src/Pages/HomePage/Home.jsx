import SideNavCompo from "../../Components/SideNavContainer/SideNavCompo";
import NavBar from "../../Components/NavBar/NavBar";
import ArticleSidesContainer from "../../Components/SideArticles/ArticleSidesContainer";
import Posts from "../../Components/Posts/Posts";
import NewPosts from "../../Components/newPosts/NewPosts";
import "./Home.css";

function Home() {
  return (
    <div>
      <NavBar />
      <div className="homeContainer">
        <SideNavCompo />
        <div className="post">
          <NewPosts />
          <div className="articlePosts">
            <Posts />
            <Posts />
          </div>
        </div>
        <ArticleSidesContainer />
      </div>
    </div>
  );
}

export default Home;
