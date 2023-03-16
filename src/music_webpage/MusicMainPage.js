import React from "react";
import './music.css';


const MusicMainPage = ( { AlbumData }) => {
    console.log("++++++++",AlbumData);
    return (
        <div>
           <div className="d-flex flex-row justify-content-center container-fluid main-bg">
               <div className="row">
        {AlbumData.map((userData) => {
          return (
            <>
              <div className="col-12 col-lg-3 card-container m-3">
                <a href={userData["im:image"][2].label} target="_blank">
                  <img
                    src={userData["im:image"][2].label}
                    className="album-name"
                  />
                </a>
                <div>
                  <h5 className="album-name">{userData["title"].label}</h5>
                  <p className="album-amount">
                    {userData["im:price"].label}
                  </p>
                  <h6 className="album-copyright">
                    {userData["rights"].label}
                  </h6>
                </div>
              </div>
            </>
          );
        })}
        </div>
      </div>
        </div>
    )
}

export default MusicMainPage;