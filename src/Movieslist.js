import { Movie } from "./Movie_App.js";

export function Movielist({ Movies }) {
  return (
    <section className="Movie-list">
      {Movies.map(({ Movie_name, poster, Rating, Summary }, index) => (
        <Movie
          Movie_name={Movie_name}
          poster={poster}
          Rating={Rating}
          Summary={Summary}
          index={index}
        />
      ))}
    </section>
  );
}
