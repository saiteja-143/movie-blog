import "./App.css";
import { Redirect, Switch, Route, Link } from "react-router-dom";

import React from "react";
import Button from "@mui/material/Button";
import { useState } from "react";
import { Movielist } from "./Movieslist.js";
import { MovieDetails } from "./MovieDetails";
import { Notfound } from "./Notfound";
import { Home } from "./Home";
import { Addmovie } from "./Addmovie";

function App() {
  const Initialmovies = [
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
  ];
  const [Movies, setMovies] = useState(Initialmovies);

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
          <Addmovie Movies={Movies} setMovies={setMovies} />
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
