import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './styles.css';

const movies = [
  { id: 1, title: 'Guardians Of The Galaxy', description: 'Price - rs300' },
  { id: 2, title: 'Munjya', description: 'Price - Rs 350' },
  { id: 3, title: 'Deadpool & Wolverine', description: 'Price - Rs 400' },
  { id: 4, title: 'Kalki 2898 AD', description: 'Price - Rs 370' },
];

const MovieDetails = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  return (
    <div className="movie-details">
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <Link to={`/book/${movie.id}`}>Book Seat</Link>
    </div>
  );
};

export default MovieDetails;