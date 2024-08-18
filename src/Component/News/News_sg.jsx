import { useEffect, useState } from "react";
import Nav from "../nav/Nav";
import NewsCard_sg from "../NewsCard/NewsCard_sg";
import "./News.scss";
import { useUserAuth } from "../../context/UserAuthContext";
import Weather from "../Weather/Weather";
import { useNavigate } from "react-router";

const News_sg = () => {
  const navigate = useNavigate();

  const [newsContent, setnewsContent] = useState([]);
  const [value, setValue] = useState("News");
  const [article, setArticle] = useState("");
  const handleChange = (e) => setValue(e.target.value);
  const [page, setPage] = useState(1);
  const {getArticle, getNews } = useUserAuth();

  useEffect(() => {
    fetchNews();
    fetchArticle();
  }, [page]);

  const fetchNews = async () => {
    const data = await getNews()
      setnewsContent(data);
  };

  const fetchArticle = async () => {
    const data = await getArticle();
      setArticle(data);
  };

  const menuItems = ["News", "Article"];

  return (
    <div>
      <Nav />
      {/* <div className="newsbanner">
          <CarouselList/>
      </div> */}

      <div className="news-main">
        <Weather/>
        <div className="news-filter">
          <div className="newswrap">

          <div
            className={value == "News" ? "newsbtnactive" : "newsbtn"}
            onClick={() => setValue("News")}
          >
            <h5>
              News <hr />
            </h5>
          </div>
          <div
            className={value == "Article" ? "newsbtnactive" : "newsbtn"}
            onClick={() => setValue("Article")}
          >
            <h5>
              Article <hr />
            </h5>
          </div>
          </div>

          <div className="addcrop"  onClick={() => {navigate("/crowdsourcing");
              }}>
            <h5>Crowdsourcing</h5>
          </div>
        </div>
        {value === "News" &&
          newsContent &&
          newsContent.map((c) => {
            return (
              <NewsCard_sg
                key={c.title}
                title={c.title}
                description={c.description}
                image_url={c.imgUrl}
                link={c.link}
                content={c.content}
              />
            );
          })}
        {value === "Article" &&
          article &&
          article.map((c) => {
            return (
              <NewsCard_sg
                key={c.title}
                title={c.title}
                description={c.description}
                image_url={c.imgUrl}
                link={c.link}
                content={c.content}
              />
            );
          })}
      </div>
      {/* {value === "News" && newsContent.length > 0 ? (
        <CustomPagination setPage={setPage} />
      ) : (
        ""
      )} */}
    </div>
  );
};
export default News_sg;
