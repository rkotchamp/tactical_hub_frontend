import "./PostsOnProfilePage.css";
function PostsOnProfilePage({ img, alt, svgImg, click }) {
  return (
    <div
      className="Posts__On__Profile__Page__container"
      onClick={click ? click : null}
    >
      {img ? <img src={img} alt={alt} className="imgDiv" /> : null}
      {svgImg ? <img src={svgImg} alt={alt} /> : null}
    </div>
  );
}

export default PostsOnProfilePage;
