import "./PostsOnProfilePage.css";
function PostsOnProfilePage({ img, alt, svgImg }) {
  return (
    <div className="Posts__On__Profile__Page__container">
      {img ? <img src={img} alt={alt} className="imgDiv" /> : null}
      {svgImg ? <img src={svgImg} alt={alt} /> : null}
    </div>
  );
}

export default PostsOnProfilePage;
