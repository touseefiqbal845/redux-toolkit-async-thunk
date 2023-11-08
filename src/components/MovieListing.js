import React from 'react';
import { useSelector } from 'react-redux';
import { getallMovies } from '../features/Movies/movieSlice';
import MovieCard from './MovieCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MovieListing = () => {
  const movies = useSelector(getallMovies);

  if (!movies || !movies.Search) {
    return <div>Loading...</div>;
  }

  const renderMovies = movies.Search.map((movie, index) => (
    <Col key={index} md={4} className="mb-4">
    <MovieCard data={movie} />
  </Col>
  ));

  return (
    <Container>
      <Row>
        {renderMovies}
      </Row>
    </Container>
  );
};

export default MovieListing;
