import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import { Link } from "react-router-dom";

// 컴포넌트에 state가 필요 없으면 className 컴포넌트일 필요가 없다.
function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <Link
      to={{
        pathname: `/movie/${id}`,
        state: {
          year,
          title,
          summary,
          poster,
          genres,
        },
      }}
    >
      <div className="movie">
        <img
          className="movie__poster"
          src={poster}
          alt={title}
          title={title}
          loading="lazy"
        />
        <div className="movie__date">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <ul className="movie__genres">
            {
              // map 에는 key가 필요하기 때문에 movies 의 id가 아닌
              // map을 이용한 genres에 index 값을 지정하여 key값으로 사용
              genres.map((genre, index) => (
                <li key={index} className="genres__genre">
                  {genre}
                </li>
              ))
            }
          </ul>
          {
            // array 에서 텍스트를 자르는 방법. .slice(시작자리, 끝자리)
          }
          <p className="movie__summary">{summary.slice(0, 100)}...</p>
        </div>
      </div>
    </Link>
  );
}

// Movie에 우리가 필요한 propTypes을 정해준다.
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
