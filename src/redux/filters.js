import { createSlice } from '@reduxjs/toolkit'

export const filter = createSlice({
    name: 'filter',
    initialState: {
        categories: 'Все',
        filters: 'id'
    },
    reducers: {
        setCategories(state, actions) {
            state.categories = actions.payload
        },
        setFilters(state, actions) {
            state.filters = actions.payload
        }
    }
}) 

export const {setCategories, setFilters} = filter.actions
export default filter.reducer
