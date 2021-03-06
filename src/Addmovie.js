import React from "react";
import Button from "@mui/material/Button";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom";

export function Addmovie({ Movies, setMovies }) {
  // const [movie, nomovies] = useState(true);
  const history = useHistory();
  const [Movie_name, setMovieName] = useState("");
  const [poster, setposter] = useState("");
  const [Rating, setRating] = useState("");
  const [Summary, setdescription] = useState("");
  const [trailer, setMovieTrailer] = useState("");
  const addnewmovie = () => {
    const newmovie = {
      Movie_name,
      poster,
      Rating,
      Summary,
      trailer,
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
          variant="outlined"
          value={trailer}
          onChange={(event) => setMovieTrailer(event.target.value)}
        ></TextField>
      </p>

      <Button variant="contained" onClick={addnewmovie} className="submit">
        AddMovie
      </Button>
    </div>
  );
}
