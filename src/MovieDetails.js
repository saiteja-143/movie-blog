import { useParams } from "react-router-dom";
import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useHistory } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";

export function MovieDetails({ movies }) {
  const history = useHistory();
  const edithistory = useHistory();
  const { id } = useParams();
  const movie = movies[id];
  const deletemovie = () => {
    alert("This Action will permenantly Delete the Movie");
    movies.splice(id, 1);

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
      </div>
    </div>
  );
}
