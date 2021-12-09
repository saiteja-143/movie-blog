import { useState } from "react";
import { Counter } from "./L&D_Counter.js";
import IconButton from "@mui/material/IconButton";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CardContent from "@mui/material/CardContent";
import InfoIcon from "@mui/icons-material/Info";
import Card from "@mui/material/Card";
import { useHistory } from "react-router-dom";
function Movie({ Movie_name, poster, Rating, Summary, index }) {
  const [show, setshow] = useState(true);

  const styles = { display: show ? "block" : "none" };
  const history = useHistory();
  return (
    <Card className="Movie_container">
      <img className="Movie_poster" src={poster} />
      <CardContent>
        <div className="Movie_specs">
          <h3 className="Movie_name">
            {Movie_name}
            <IconButton onClick={() => setshow(!show)} color="primary">
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </h3>
          <IconButton
            onClick={() => history.push("/movies/" + index)}
            color="primary"
          >
            <InfoIcon />
          </IconButton>
          <p className="Rating">⭐{Rating}</p>
        </div>

        {show ? (
          <p style={styles} className="Movie_Summary">
            {Summary}
          </p>
        ) : (
          ""
        )}
        <Counter />
      </CardContent>
    </Card>
  );
}
export { Movie };
