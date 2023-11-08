import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    console.log("New response", response.data)
    return response.data;
});
export const addProduct = createAsyncThunk('products/addProduct', async (newProduct) => {
    const response = await axios.post('https://fakestoreapi.com/products', newProduct);
    console.log("Add Product", response.data)
    return response.data;
});

export const updateProduct = createAsyncThunk(
    'products/updateProduct',
    async ({ productId, updatedData }) => {
        const response = await axios.put(`https://fakestoreapi.com/products/${productId}`, updatedData);
        return response.data;
    }
);
export const DeleteProduct = createAsyncThunk(
    'products/DeleteProduct',
    async ({ productId }) => {
        const response = await axios.delete(`https://fakestoreapi.com/products/${productId}`);
        console.log(response);
        return productId;
    }

);
const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        error: null,
    },
    reducers: {},
    extraReducers: {
        [fetchProducts.pending]: () => {
            console.log("Pending")
        },
        [fetchProducts.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully!")
            console.log(payload);
            state.products = payload;
        },
        [fetchProducts.rejected]: () => {
            console.log("Rejected")
        },
        [addProduct.pending]: () => {
            console.log("Adding Product - Pending");
        },
        [addProduct.fulfilled]: (state, { payload }) => {
            console.log("Product Added Successfully!");
            return { ...state, products: [...state.products, payload] };
        },
        [addProduct.rejected]: () => {
            console.log("Adding Product - Rejected");
        },
        [updateProduct.fulfilled]: (state, { payload }) => {
            const updatedProductIndex = state.products.findIndex(product => product.id === payload.id);

            if (updatedProductIndex !== -1) {
                state.products[updatedProductIndex] = payload;
            }
        },
        [DeleteProduct.fulfilled]: (state, { payload }) => {
            const productId = payload; 
            state.products = state.products.filter(product => product.id !== productId);
        },
        


    }
});



export default productSlice.reducer;
