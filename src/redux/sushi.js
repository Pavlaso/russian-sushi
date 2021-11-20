import { getSushiAPI } from "../api/sushi"
import { createSlice } from '@reduxjs/toolkit'

export const getSushi = (categories, filters) => async(dispath) => {
  dispath(setLoaded(false))
  const date =  await getSushiAPI(categories, filters)
  dispath(setSushi(date))
}


export const sushi = createSlice({
    name: 'sushi',
    initialState: {
        sushiArr: [],
        isLoaded: false
    },
    reducers: {
      setSushi(state, action) {
        state.sushiArr = action.payload
        state.isLoaded = true

      },
      setLoaded(state, action) {
        state.isLoaded = action.payload
      }
    }
})

export const {setSushi, setLoaded} = sushi.actions
export default sushi.reducer