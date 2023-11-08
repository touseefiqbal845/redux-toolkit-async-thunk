import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MovieListing from '../components/MovieListing';
import { fetchAsyncMovies } from '../features/Movies/movieSlice';


const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAsyncMovies());
    }, [dispatch]);

    return (
        <div >
            <MovieListing />
        </div>
    );
};

export default Home;
