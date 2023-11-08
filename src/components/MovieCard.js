import React from 'react';
import { Link } from "react-router-dom";
import { Card } from 'react-bootstrap';

const MovieCard = (props) => {
  const { data } = props;
  return (
<Link to={`/movie/${data.imdbID}`}>
    <Card  style={{ marginTop: "50px", width: '300px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <Card.Img style={{ height: "200px", width: '300px' }} variant="top" src={data.Poster} alt={data.Title} />
      <Card.Body>
        <Card.Title>{data.Title}</Card.Title>
        <Card.Text>{data.Year}</Card.Text>
      </Card.Body>
    </Card>
    </Link>
  )
}

export default MovieCard
