import * as types from './actionTypes';

const initialState = {
    products: [],
    loading: false,
    error: null,
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.READ_PRODUCTS_REQUEST:
        case types.CREATE_PRODUCT_REQUEST:
        case types.UPDATE_PRODUCT_REQUEST:
        case types.DELETE_PRODUCT_REQUEST:
            return { ...state, loading: true };

        case types.READ_PRODUCTS_SUCCESS:
            return { ...state, loading: false, products: action.payload };

        case types.CREATE_PRODUCT_SUCCESS:
            return { ...state, loading: false, products: [...state.products, action.payload] };

        case types.UPDATE_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                products: state.products.map(p => p.id === action.payload.id ? action.payload : p),
            };

        case types.DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                products: state.products.filter(p => p.id !== action.payload),
            };

        case types.READ_PRODUCTS_FAILURE:
        case types.CREATE_PRODUCT_FAILURE:
        case types.UPDATE_PRODUCT_FAILURE:
        case types.DELETE_PRODUCT_FAILURE:
            return { ...state, loading: false, error: 'Something went wrong' };

        default:
            return state;
    }
};

export default productReducer;
