import { createSlice } from '@reduxjs/toolkit'
import { products } from '../../assets/data';

const productSlice = createSlice({
    name: "products",
    initialState: {
        filteredProducts: JSON.parse(sessionStorage.getItem('filterData')) || [],
        SingleProduct: JSON.parse(sessionStorage.getItem('singleProduct')) || null,
        filterOn: false,
        error: false
    },
    reducers: {
        filterProduct(state, action) {
            const query = action.payload.toLowerCase();

            if (query === "all categories") {
                state.filterOn = false;
                state.error = false;
                sessionStorage.removeItem('filterData');
            } else {
                try {
                    const filter = products.filter((product) => 
                        product.category.toLowerCase().includes(query) ||
                        product.name.toLowerCase().includes(query) ||
                        product.brand.toLowerCase().includes(query) ||
                        product.text.toLowerCase().includes(query)
                    );

                    state.filteredProducts = filter;
                    state.filterOn = true;
                    state.error = filter.length === 0;

                    if (filter.length > 0) {
                        sessionStorage.setItem('filterData', JSON.stringify(filter));
                    } else {
                        sessionStorage.removeItem('filterData');
                    }
                } catch (err) {
                    state.error = true;
                    return err;
                }
            }
        },
        singleProduct(state, action) {
            try {
                const oneProduct = products.filter((product) => product.id === action.payload)
                if (oneProduct.length > 0) {
                    state.SingleProduct = oneProduct;
                    state.error = false;
                    sessionStorage.setItem('singleProduct', JSON.stringify(oneProduct))
                } else {
                    state.error = true;
                }
            } catch (error) {
                state.error = true;
            }
        }
    }
})

export const { filterProduct, singleProduct } = productSlice.actions;

export default productSlice.reducer;