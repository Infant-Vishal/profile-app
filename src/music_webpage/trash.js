
<div className="col-12 card-container shadow mb-3">
                        <div>
                            <img src={imageUrl} className="album-image"/>
                            <div>
                                <p className="album-name">{albumName}</p>
                                <p className="album-amount">{albumAmount}</p>
                                <p className="album-copyright">{albumCopyright}</p>
                            </div>
                        </div>
                    </div>

return (
    <>
        <div className="container-fluid main-bg">
            <div className="row">
                
            </div>
        </div>
    </>
)

import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../../styles/Home.module.css";

const ViewData = ({ apiData }) => {
  console.log("View Data", apiData);
  // const arrayData = [...apiData];
  const data = Object.entries(apiData);
  console.log("--------->", data);
  return (
    <>
      <div className={styles.main_style}>
        {data.map((d, index) => {
          // const item = Object.keys(d);
          // console.log("@@@------>", d[1]);

          const {
            artist,
            name,
            image,
            itemCount,
            price,
            releaseDate,
            author,
            icon,
            title,
          } = d[1];
          console.log(
            artist,
            name,
            image,
            itemCount,
            price,
            releaseDate,
            author,
            icon,
            title,
            "->data"
          );
          return (
            <>
              <div className={styles.card} key={index}>
                <div className={styles.image_card}>
                  <img src={image} alt={name} />
                </div>
                <div className={styles.item_text}>
                  <div className={styles.title_head}></div>
                  {name}
                </div>
                <div className={styles.author}>{author}</div>
                <div style={{ flexDirection: "row" }}>
                  <img
                    className={styles.author}
                    width={30}
                    height={30}
                    src={icon}
                    alt={title}
                  ></img>
                  <div
                    style={{
                      fontSize: 10,
                      justifyContent: "center",
                      marginLeft: "30px",
                      padding: "10px",
                    }}
                  >
                    {title}
                  </div>
                </div>
              </div>
            </>
          );
        })}
        ;
      </div>
    </>
  );
};

const Movie = () => {
  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await axios
      .get("https://itunes.apple.com/in/rss/topalbums/limit=25/json")
      .then(function (response) {
        console.log("response", response);

        return response.data;
      })
      .then(function (myJson) {
        const author = myJson.feed.author["name"].label;
        const icon = myJson.feed.icon.label;
        const title = myJson.feed.title.label;
        const data = myJson.feed.entry.map((item) => {
          return {
            artist: item["im:artist"].label,
            name: item["im:name"].label,
            image: item["im:image"][2].label,
            itemCount: item["im:itemCount"].label,
            price: ["im:price"].label,
            releaseDate: ["im:releaseDate"].label,
            author: author,
            icon: icon,
            title: title,
          };
        });
        console.log("data------->", data);
        setMovieData(data);
        //return data;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  // console.log("movie=>", movieData);
  return <>{movieData ? <ViewData apiData={movieData}></ViewData> : null}</>;
};
export default Movie;