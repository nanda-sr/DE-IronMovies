import React, { Component } from 'react';
import './App.css';
// import Action from './components/Action';


class App extends Component {
  state = {
    title: this.props.title,
    image: this.props.image,
    description: this.props.description,
    genre: this.props.genre,
    movie: [],
    movieDrama: [],
    movieComedy: []

  }

  componentWillMount(){
    fetch('https://api.themoviedb.org/3/genre/28/movies?api_key=488fd9ef8067ac8018d3e589faaeea82&language=en-US&include_adult=false&sort_by=created_at.asc')
    .then(r=>r.json())
    .then(movie=>{
      this.setState({movie:movie.results})
    });
  }
render(){
  const link = 'https://image.tmdb.org/t/p/w500/';
  return(
    <div className="moviesInfo">
      <a href="#/action">Action</a>
      <span href="#">Comedy</span>
      <span href="#">Drama</span>
      <div className="movies">
      {this.state.movie.map(m=>{
        return (   
        <div className="movie-info"> 
          <img className="poster" src= {link + m.poster_path} alt="Poster" />
          <h2 className="movie-title">{m.original_title}</h2>
        </div>
        )
      })}
      </div>
    </div>
  )
}
}
export default App;
