import { configureStore } from "@reduxjs/toolkit"

import cart from "./cart"
import filter  from "./filters"
import sushi  from "./sushi"

export const store = configureStore({ reducer: { sushi, filter, cart } })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch