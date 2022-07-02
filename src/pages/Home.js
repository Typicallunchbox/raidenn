import { React, useEffect, useState } from "react";
import "../index.scss";
import axios from "axios";
import HomeTopOption from "../components/home-top-option/HomeTopOption";
import ItemCatalogueList from "../components/item-catalogue-list/ItemCatalogueList";

export const Home = () => {
  const [movies, setMovies] = useState([]);

  //get popular movies
  //get popular series
  // get genres
  // get upcoming
  //get similiar movies
  // api rate endpoint available
  //discover movies endpoint available

  //example : https://api.themoviedb.org/3/movie/popular?api_key=120fe4d587d5f86c44f0a6e599f01734
  
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=120fe4d587d5f86c44f0a6e599f01734"
      )
      .then((resp) => {
        setMovies(resp.data.results);
        console.log("response:", resp.data.results);
      });
  }, []);

  const popularMovies = movies.map((movie) => (
    <>
      <p>{movie.title}</p>
      <p>{movie.popularity}</p>
    </>
  ));
  return (
    <div className="home container">
      <HomeTopOption/>
      <ItemCatalogueList/>
      <div className="showcase"></div>
      {/* {popularMovies && <p>{popularMovies}</p>} */}
      <div className="catalogue"></div>
    </div>
  );
};
