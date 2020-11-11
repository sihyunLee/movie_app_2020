import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";
//JSX , prop-types
// 리액트는 자동으로 클래스 컴포넌트의 render 메소드를 실행한다.
// 펑션컴포넌트를 사용안하고 클래스 컴포넌트를 사용하는 이유는 state 때문이다.
// state는 오브젝트며 컴포넌트의 데이터를 넣을 공간이 있고 데이터는 변할수있다.
// setState를 호출할 때 마다 리액트는 새로운 state와 함께 렌더 함수를 호출한다.

// React.Component의 life cycle.

// Mounting 순서. 생겨나는것. 살아있는것.
// constructor()
// render()
// componentDidMount()

// Update 순서. (setState와 같은 업데이트 발생 시) 변하는 것.
// render()
// componentDidUpdate()

// componentWillUnmount() 끊는 함수.
class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  // axios는 fatch함수 위에 있는 작은 layer다.
  // axios는 HTTP 클라이언트 라이브러리로써, 비동기 방식으로 HTTP 데이터 요청을 실행합니다.
  // axios를 사용해서 url에 있는 데이터를 setState 한다.
  // axios는 느리기떄문에 async await를 사용해서 처리가 될때까지 기다린다.
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    console.log(movies);

    // 추출한 movies 를 state에 set 한다.
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state; // this.state.isLoading 과 같다.
    return (
      // JS class 안에 JSX에 대한 class가 혼란을 주기때문에 className이라고 지정해준다.
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
              // map은 무조건 key와 리턴이 있어야한다.
              <Movie
                //데이터에 있는 고유의 값으로 key를 정해줘야한다.
                //movies.js 에서 받아온 prop 타입을 토대로 state에 있는
                // movies[] 값들을 배열에 내장함수 .map을 사용해서 넣어준다.
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
