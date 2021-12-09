import { useParams } from "react-router-dom";
import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useHistory } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export function MovieDetails({ movies, setMovies }) {
  const history = useHistory();
  const edithistory = useHistory();
  const backhistory = useHistory();
  const forwardhistory = useHistory();
  const { id } = useParams();
  const movie = movies[id];
  console.log(id);
  const deletemovie = () => {
    const remain = movies.filter((idx) => idx != movies[id]);
    alert("This Action will permenantly Delete the Movie");

    setMovies(remain);

    history.push("/movies");
  };
  const editmovie = () => {
    movies.splice(id, 1);
    edithistory.push("/add");
  };

  return (
    <div>
      <iframe
        width="100%"
        height="720"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="movie-details-contgainer">
        <h3 className="Movie_name">{movie.Movie_name}</h3>
        <div className="edit-delete">
          <IconButton
            aria-label="delete"
            size="small"
            onClick={editmovie}
            color="primary"
          >
            <EditIcon className="edit-button" />
          </IconButton>
          <IconButton
            aria-label="delete"
            size="small"
            onClick={deletemovie}
            color="error"
          >
            <DeleteIcon fontSize="inherit" />
          </IconButton>

          <p className="Rating">⭐{movie.Rating}</p>
        </div>
      </div>
      <div>
        <p className="Movie_Summary">{movie.Summary}</p>
        <div className="f-b-button">
          <Button
            onClick={() => backhistory.goBack()}
            startIcon={<ArrowBackIcon />}
            variant="contained"
          >
            Back
          </Button>
          <Button
            onClick={() => forwardhistory.goForward()}
            startIcon={<ArrowForwardIcon />}
            variant="contained"
          >
            Forward
          </Button>
        </div>
      </div>
    </div>
  );
}
