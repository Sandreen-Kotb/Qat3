import { createSlice } from '@reduxjs/toolkit'

const mainSlice = createSlice({
    name: 'main',
    initialState: {},
    reducers: {
        scrollToTop(state) {
            // side effect removed to maintain reducer purity
            // components will call window.scrollTo separately
        },
    }
})

export const { scrollToTop } = mainSlice.actions;

export default mainSlice.reducer;