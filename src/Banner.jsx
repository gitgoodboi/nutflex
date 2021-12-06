import React, { useEffect, useState } from "react";
import Row from "./Row";
import useSWR from "swr";
import fetcher from "./fetcher";
import requests from "./requests";
import './Banner.css';

function Banner() {
  const { data, error } = useSWR(requests.fetchNetflixOriginals, fetcher);
  const [bannerMovie, setbannerMovie] = useState();

  useEffect(() => {
    if (data)
      setbannerMovie(
        data.results[Math.floor(Math.random() * data.results.length)]
      );
  }, [data]);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  function truncate(str, n){
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header className="banner"
    style={{
        backgroundSize: "cover",
        backgroundImage: `url(
            https://image.tmdb.org/t/p/original/${bannerMovie?.backdrop_path}
        )`,
        backgroundPosition:"center center",
    }}
    
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {bannerMovie?.title || bannerMovie?.name || bannerMovie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(bannerMovie?.overview, 150)}
        </h1>
      </div>
    </header>
  );
}
export default Banner;
