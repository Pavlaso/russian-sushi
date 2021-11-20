import { createSlice } from '@reduxjs/toolkit'

const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0)

const cart = createSlice ({
    name: 'cart',
    initialState: {
        cartItems: {},
        totalPrice: 0,
        totalCount: 0
    },
    reducers: {
        addItem(state, action) {
            const currentSushiItems = !state.cartItems[action.payload.id]
                ? [action.payload]
                : [...state.cartItems[action.payload.id].cartItems, action.payload]

            const newItems = {
                    ...state.cartItems,
                [action.payload.id]: {
                        cartItems: currentSushiItems,
                    totalPrice: getTotalPrice(currentSushiItems),
            }
                }
                const items = Object.values(newItems).map(obj => obj.cartItems)
            const newSushi = [].concat.apply([], items)
            const totalPrice = getTotalPrice(newSushi)
            return { ...state, cartItems: newItems, totalCount: newSushi.length, totalPrice }
        },
         clearCart(state, action) {
            return { totalPrice: 0, totalCount: 0, cartItems: {} }
        },
        removeCartItem(state, action) {
            const newItem = {...state.cartItems}
            const currentTotalPrice = newItem[action.payload].totalPrice
            const currentTotalCount = newItem[action.payload].cartItems.length
            delete newItem[action.payload]
            return {
                ...state,
                cartItems: newItem,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount
            }
        },
        plusItem(state, action) {
            const newObjectItems = [...state.cartItems[action.payload].cartItems, state.cartItems[action.payload].cartItems[0]]
            const newItems = {
                ...state.cartItems,
                [action.payload]: {
                    cartItems: newObjectItems,
                    totalPrice: getTotalPrice(newObjectItems),
                }
            }
            const items = Object.values(newItems).map(obj => obj.cartItems)
            const newPizzas = [].concat.apply([], items)
            const totalPrice = getTotalPrice(newPizzas)
            return {
                ...state,
                cartItems: newItems,
                totalPrice, totalCount: newPizzas.length
            }
        },
        minusItem(state, action) {
            const oldItems = state.cartItems[action.payload].cartItems
            const newObjectItems = oldItems.length > 1 ? state.cartItems[action.payload].cartItems.slice(1) : oldItems
            const newItems = {
                ...state.cartItems,
                [action.payload]: {
                    cartItems: newObjectItems,
                    totalPrice: getTotalPrice(newObjectItems),
                }
            }
            const items = Object.values(newItems).map(obj => obj.cartItems)
            const newPizzas = [].concat.apply([], items)
            const totalPrice = getTotalPrice(newPizzas)
            return {
                ...state,
                cartItems: newItems,
                totalPrice, totalCount: newPizzas.length
            }
        }

    }
})

export const {addItem, clearCart, removeCartItem, plusItem, minusItem} = cart.actions
export default cart.reducer
