import React from 'react';
import { Link } from 'react-router-dom'; // Correct import for Link
import './styles.css';

const movies = [
  { id: 1, title: 'Guardians of the Galaxy Vol. 3', imgSrc: 'https://sm.ign.com/t/ign_in/cover/g/guardians-/guardians-of-the-galaxy-vol-3_9c7f.300.jpg' },
  { id: 2, title: 'Spider Man : No Way Home', imgSrc: 'https://assets.gadgets360cdn.com/pricee/assets/product/202111/spider_man_no_way_home_india_1638191040.jpg' },
  { id: 3, title: 'Pokemon : Volcanion And The Mechanical Marvel', imgSrc: 'https://m.media-amazon.com/images/M/MV5BZTUwZDEzZGEtYTJlYi00OTRkLWJmMzItODU0ZWViMTUyYjUzXkEyXkFqcGdeQXVyNzEyMDQ1MDA@._V1_.jpg' },
  { id: 4, title: 'Kung Fu Panda Vol. 4', imgSrc: 'https://m.media-amazon.com/images/S/pv-target-images/c6fb58055b3649eae203ec37aa4825594dad40fcaa8360bd2a09a9cffb7c7917.jpg' },
];

const MovieList = () => {
  return (
    <div>
      <h1>Royal Cinema</h1>
    <div className="movie-list">
      
      {movies.map((movie) => (
        <div className="movie-item" key={movie.id}>
          <img src={movie.imgSrc} alt={movie.title} />
          <h3>{movie.title}</h3>
          <Link to={`/details/${movie.id}`}>View Details</Link>
        </div>
      ))}
    </div>
    </div>
  );
};

export default MovieList;
