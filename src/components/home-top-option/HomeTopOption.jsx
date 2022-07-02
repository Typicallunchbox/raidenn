import { React, useEffect, useState } from "react";
import axios from "axios";


const HomeTopOption = () => {

  const [movie, setMovie] = useState({});

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/551?api_key=120fe4d587d5f86c44f0a6e599f01734"
      )
      .then((resp) => {
        setMovie(resp.data);
        console.log("HomeTope Movie response:", resp.data);
      });
  }, []);

  let image_path = 'https://image.tmdb.org/t/p/original';
  console.log('location:',image_path + movie.backdrop_path)
  return (
    <div className='fullscreen_window'>
        <img src="https://image.tmdb.org/t/p/original/v1QEIuBM1vvpvfqalahhIyXY0Cm.jpg"></img>
        <div className="spacer"></div>
    </div>
  )
}

export default HomeTopOption