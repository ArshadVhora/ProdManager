import axios from 'axios';
import * as types from './actionTypes';
import { toast } from 'react-toastify';

const API_URL = 'http://localhost:5000/api/products';

export const fetchProducts = () => async dispatch => {
    dispatch({ type: types.READ_PRODUCTS_REQUEST });
    try {
        const res = await axios.get(API_URL);
        dispatch({ type: types.READ_PRODUCTS_SUCCESS, payload: res.data });
    } catch (error) {
        dispatch({ type: types.READ_PRODUCTS_FAILURE });
        toast.error('Failed to load products');
    }
};

export const createProduct = (product) => async dispatch => {
    dispatch({ type: types.CREATE_PRODUCT_REQUEST });
    try {
        const res = await axios.post(API_URL, product);
        dispatch({ type: types.CREATE_PRODUCT_SUCCESS, payload: res.data });
        toast.success('Product created');
    } catch (error) {
        dispatch({ type: types.CREATE_PRODUCT_FAILURE });
        toast.error('Failed to create product');
    }
};

export const updateProduct = (id, product) => async dispatch => {
    dispatch({ type: types.UPDATE_PRODUCT_REQUEST });
    try {
        const res = await axios.put(`${API_URL}/${id}`, product);
        dispatch({ type: types.UPDATE_PRODUCT_SUCCESS, payload: res.data });
        toast.success('Product updated');
    } catch (error) {
        dispatch({ type: types.UPDATE_PRODUCT_FAILURE });
        toast.error('Failed to update product');
    }
};

export const deleteProduct = (id) => async dispatch => {
    dispatch({ type: types.DELETE_PRODUCT_REQUEST });
    try {
        await axios.delete(`${API_URL}/${id}`);
        dispatch({ type: types.DELETE_PRODUCT_SUCCESS, payload: id });
        toast.success('Product deleted');
    } catch (error) {
        dispatch({ type: types.DELETE_PRODUCT_FAILURE });
        toast.error('Failed to delete product');
    }
};
