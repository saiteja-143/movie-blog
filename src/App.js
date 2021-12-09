import "./App.css";
import { Redirect, Switch, Route, Link } from "react-router-dom";

import React from "react";
import Button from "@mui/material/Button";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Movielist } from "./Movieslist.js";
import { MovieDetails } from "./MovieDetails";
import { Notfound } from "./Notfound";
import { Home } from "./Home";
import { useHistory } from "react-router-dom";

function App() {
  const history = useHistory();
  const [Movies, setMovies] = useState([
    {
      Movie_name: "Avengers EndGame",
      poster:
        "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810",
      Rating: 8.4,
      Summary:
        "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
      trailer: "https://www.youtube.com/embed/TcMBFSGVi1c",
    },
    {
      Movie_name: "Interstellar",
      poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      Rating: 8.6,
      Summary:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
    },
    {
      Movie_name: "Justice League",
      poster:
        "https://images-na.ssl-images-amazon.com/images/I/81KX513BQxL.jpg",
      Rating: 6.1,
      Summary:
        "Steppenwolf and his Parademons return after eons to capture Earth. However, Batman seeks the help of Wonder Woman to recruit and assemble Flash, Cyborg and Aquaman to fight the powerful new enemy.",
      trailer: "https://www.youtube.com/embed/3cxixDgHUYw",
    },
    {
      Movie_name: "Mission: Impossible - Fallout",
      poster: "https://m.media-amazon.com/images/I/81RfxadikXL._SL1500_.jpg",
      Rating: 7.7,
      Summary:
        "A group of terrorists plans to detonate three plutonium cores for a simultaneous nuclear attack on different cities. Ethan Hunt, along with his IMF team, sets out to stop the carnage.",
      trailer: "https://www.youtube.com/embed/wb49-oV0F78",
    },
    {
      Movie_name: "Thor: The Dark World",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTQyNzAwOTUxOF5BMl5BanBnXkFtZTcwMTE0OTc5OQ@@._V1_FMjpg_UX1000_.jpg",
      Rating: 6.8,
      Summary:
        "Thor sets out on a journey to defeat Malekith, the leader of the Dark Elves when he returns to Asgard to retrieve a dangerous weapon and fulfill his desire of destroying the Nine Realms.",
      trailer: "https://www.youtube.com/embed/npvJ9FTgZbM",
    },
  ]);

  const [movie, nomovies] = useState(true);
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
    nomovies(!movie);
    history.push("/movies");
  };
  return (
    <div>
      <ul className="nav">
        <li>
          <Link to="/" style={{ textDecoration: "none" }} className="home">
            <Button variant="contained" className="button">
              {" "}
              Home
            </Button>
          </Link>
        </li>
        <li>
          <Link to="/movies" style={{ textDecoration: "none" }}>
            <Button variant="contained" className="button">
              {" "}
              Movies
            </Button>
          </Link>
        </li>

        <li>
          <Link to="/add" style={{ textDecoration: "none" }}>
            <Button variant="contained" className="button">
              {" "}
              AddMovie
            </Button>
          </Link>
        </li>
      </ul>

      <Switch>
        {/* Each route is case, eg. - case '/about': */}
        <Route exact path="/movies">
          {/* Match url display the below component */}
          <div className="App">
            <Movielist Movies={Movies} />
          </div>
        </Route>
        <Route path="/movies/:id">
          <MovieDetails movies={Movies} />
        </Route>

        <Route exact path="/add">
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

            <Button
              variant="contained"
              onClick={addnewmovie}
              className="submit"
            >
              AddMovie
            </Button>
          </div>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/films">
          <Redirect to="/movies"></Redirect>
        </Route>

        <Route exact path="**">
          <Notfound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
