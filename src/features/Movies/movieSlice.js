import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apikey } from '../../api/api';
import movieapi from '../../api/movieapi';


export const fetchAsyncMovies = createAsyncThunk(
    "Movies/fetchAsyncMovies",
    async () => {
        const movieText = "tom";
        const response = await movieapi.get(
            `?apiKey=${apikey}&s=${movieText}&type=series`
        );
        console.log("The Response", response.data);
        return response.data;
    }
);
export const fetchAsyncMovieDetail = createAsyncThunk(
    "movies/fetchAsyncMovieDetail",
    async (id) => {
        const response = await movieapi.get(`?apiKey=${apikey}&i=${id}&Plot=full`);
        return response.data;
    }
);

const initialState = {
    movies: {},
    selectMovie: {},
}
const movieSlice = createSlice({
    name: "Movies",
    initialState,
    reducers: {
        removeSelectedMovie: (state) => {
            state.selectMovie = {};
        },
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log("Pending")
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully!")
            return { ...state, movies: payload };
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log("Rejected")
        },
        [fetchAsyncMovieDetail.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully!");
            return { ...state, selectMovie: payload };
        },
    }

});

export const { removeSelectedMovie } = movieSlice.actions;
export const getallMovies = (state) => state.Movies.movies;
export const getSelectedMovie = (state) => state.Movies.selectMovie;
export default movieSlice.reducer;