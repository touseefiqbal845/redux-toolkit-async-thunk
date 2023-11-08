import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
  fetchAsyncMovieDetail,
  getSelectedMovie,
  removeSelectedMovie,
} from '../features/Movies/movieSlice';

const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovie);
  console.log(data);
  useEffect(() => {
    dispatch(fetchAsyncMovieDetail(imdbID));
    return () => {
      dispatch(removeSelectedMovie());
    };
  }, [dispatch, imdbID]);
  return (
    <Container className="my-5" >
      {Object.keys(data).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <Row className="justify-content-center">
          <Col md={8}>
            <Card>
              <Row>
                <Col md={4}>
                  <Card.Img variant="top" src={data.Poster} alt={data.Title} />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>{data.Title}</Card.Title>
                    <Card.Text>
                      IMDB Rating: {data.imdbRating}
                      <br />
                      IMDB Votes: {data.imdbVotes}
                      <br />
                      Runtime: {data.Runtime}
                      <br />
                      Year: {data.Year}
                    </Card.Text>
                    <Card.Text>{data.Plot}</Card.Text>
                    <Card.Text>
                      Director: {data.Director}
                      <br />
                      Stars: {data.Actors}
                      <br />
                      Genres: {data.Genre}
                      <br />
                      Languages: {data.Language}
                      <br />
                      Awards: {data.Awards}
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default MovieDetail;