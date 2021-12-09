import React from "react";
import Button from "@mui/material/Button";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

export function Editmovie({ movies, setMovies }) {
  // const [movie, nomovies] = useState(true);
  const { id } = useParams();
  // console.log(id);
  // console.log(movies);
  const movie = movies[id];
  // const movie = Movies[id];
  const history = useHistory();
  const [Movie_name, setMovieName] = useState(movie.Movie_name);
  const [poster, setposter] = useState(movie.poster);
  const [Rating, setRating] = useState(movie.Rating);
  const [Summary, setdescription] = useState(movie.Summary);
  const [trailer, setMovieTrailer] = useState(movie.trailer);
  const editmovie = () => {
    const updatedmovie = {
      Movie_name,
      poster,
      Rating,
      Summary,
      trailer,
    };
    const copymovies = [...movies];
    copymovies[id] = updatedmovie;
    setMovies(copymovies);
    // setMovies([...movies, updatedmovie]);
    // nomovies(!movie);
    history.push("/movies");
  };
  return (
    <div className="dataform">
      <p>
        <TextField
          id="outlined-basic"
          label="Movie Name"
          value={Movie_name}
          variant="outlined"
          onChange={(event) => setMovieName(event.target.value)}
        ></TextField>
      </p>
      <p>
        <TextField
          id="outlined-basic"
          label="Poster"
          value={poster}
          variant="outlined"
          onChange={(event) => setposter(event.target.value)}
        />
      </p>
      <p>
        {" "}
        <TextField
          id="outlined-basic"
          label="Rating"
          value={Rating}
          variant="outlined"
          onChange={(event) => setRating(event.target.value)}
        />
      </p>
      <p>
        {" "}
        <TextField
          id="outlined-basic"
          label="Summary"
          value={Summary}
          variant="outlined"
          onChange={(event) => setdescription(event.target.value)}
        />
      </p>
      <p>
        <TextField
          id="outlined-basic"
          label="Movie Trailer"
          value={trailer}
          variant="outlined"
          onChange={(event) => setMovieTrailer(event.target.value)}
        ></TextField>
      </p>

      <Button
        variant="contained"
        onClick={editmovie}
        className="submit"
        color="success"
      >
        Save
      </Button>
    </div>
    // <h1>HTML</h1>
  );
}
