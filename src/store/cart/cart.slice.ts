import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import type {
	IAddToCartPayload,
	ICartInitialState,
	IChangeQuantityPayload
} from './cart.types'

const initialState: ICartInitialState = {
	items: []
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<IAddToCartPayload>) => {
			const isExist = state.items.some(
				item => item.product.id === action.payload.product.id
			)

			if (!isExist)
				state.items.push({ ...action.payload, id: state.items.length })
		},
		removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
			state.items = state.items.filter(
				item => item.id !== action.payload.id
			)
		},
		changeQuantity: (
			state,
			action: PayloadAction<IChangeQuantityPayload>
		) => {
			const { id, type } = action.payload
			const item = state.items.find(item => item.id === id)
			if (item) {
				if (type === 'minus') {
					if (item.quantity === 1) {
						state.items = state.items.filter(
							item => item.id !== action.payload.id
						)
					} else {
						// Otherwise, just decrement the quantity
						item.quantity--;
					}
				} else if (type === 'plus') {
					// Increment the quantity
					item.quantity++;
				}
			}
		},
		reset: state => {
			state.items = []
		}
	}
})

export const { addToCart, removeFromCart, changeQuantity, reset } = cartSlice.actions;
export default cartSlice.reducer;