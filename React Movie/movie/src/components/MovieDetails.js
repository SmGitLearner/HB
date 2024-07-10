import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './styles.css';

const movies = [
  { id: 1, title: 'Guardians Of The Galaxy', description: 'Price - Rs 200' },
  { id: 2, title: 'Spider Man : No Way Home', description: 'Price - Rs 200' },
  { id: 3, title: 'Pokemon : Volcanion And The Mechanical Marvel', description: 'Price - Rs 250' },
  { id: 4, title: 'Kung Fu Panda Vol. 4', description: 'Price - Rs 250' },
];

const MovieDetails = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  return (
    <div>
      <h1>Movie Details</h1>
    <div className="movie-details">
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <Link to={`/book/${movie.id}`}>Book Seat</Link>
    </div>
    </div>
  );
};

export default MovieDetails;