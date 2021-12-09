import React from "react";
import Button from "@mui/material/Button";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom";

export function Addmovie({ Movies, setMovies }) {
  // const [movie, nomovies] = useState(true);
  const history = useHistory();
  const [MovieName, setMovieName] = useState("");
  const [Poster, setposter] = useState("");
  const [rating, setRating] = useState("");
  const [Moviedescription, setdescription] = useState("");
  const [MovieTrailer, setMovieTrailer] = useState("");
  const addnewmovie = () => {
    const newmovie = {
      Movie_name: MovieName,
      poster: Poster,
      Rating: rating,
      Summary: Moviedescription,
      trailer: MovieTrailer,
    };
    setMovies([...Movies, newmovie]);
    // nomovies(!movie);
    history.push("/movies");
  };
  return (
    <div className="dataform">
      <p>
        <TextField
          id="outlined-basic"
          label="Movie Name"
          variant="outlined"
          onChange={(event) => setMovieName(event.target.value)}
        ></TextField>
      </p>
      <p>
        <TextField
          id="outlined-basic"
          label="Poster"
          variant="outlined"
          onChange={(event) => setposter(event.target.value)}
        />
      </p>
      <p>
        {" "}
        <TextField
          id="outlined-basic"
          label="Rating"
          variant="outlined"
          onChange={(event) => setRating(event.target.value)}
        />
      </p>
      <p>
        {" "}
        <TextField
          id="outlined-basic"
          label="Summary"
          variant="outlined"
          onChange={(event) => setdescription(event.target.value)}
        />
      </p>
      <p>
        <TextField
          id="outlined-basic"
          label="Movie Trailer"
          variant="outlined"
          onChange={(event) => setMovieTrailer(event.target.value)}
        ></TextField>
      </p>

      <Button variant="contained" onClick={addnewmovie} className="submit">
        AddMovie
      </Button>
    </div>
  );
}
