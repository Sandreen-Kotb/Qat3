import { createSlice } from '@reduxjs/toolkit'

const updateData = (cart, amount, price) => {

    sessionStorage.setItem('cart', JSON.stringify(cart))

    sessionStorage.setItem('amount', JSON.stringify(amount))

    sessionStorage.setItem('price', JSON.stringify(price))
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: JSON.parse(sessionStorage.getItem('cart')) || [],
        totalAmount: JSON.parse(sessionStorage.getItem('amount')) || 0,
        totalPrice: JSON.parse(sessionStorage.getItem('price')) || 0,
    },
    reducers: {
        addToCart: (state, action) => {

            const addedProduct = action.payload

            try {
                const exist = state.cart.find((product) => product.id === addedProduct.id)

                if (exist) {
                    const quantityToAdd = addedProduct.amount || 1;
                    exist.amount += quantityToAdd;
                    exist.totalPrice += addedProduct.price * quantityToAdd;
                    state.totalAmount += quantityToAdd;
                    state.totalPrice += addedProduct.price * quantityToAdd;
                    updateData(state.cart, state.totalAmount, state.totalPrice)
                } else {
                    const quantityToAdd = addedProduct.amount || 1;
                    state.cart.push({
                        id: addedProduct.id,
                        price: addedProduct.price,
                        amount: quantityToAdd,
                        totalPrice: addedProduct.price * quantityToAdd,
                        name: addedProduct.name,
                        color: addedProduct.color,
                        img: addedProduct.img,
                        text: addedProduct.text
                    })
                    state.totalAmount += quantityToAdd;
                    state.totalPrice += addedProduct.price * quantityToAdd;
                    updateData(state.cart, state.totalAmount, state.totalPrice)
                }

            } catch (error) {
                return error
            }

        },
        removeFromCart: (state, action) => {
            const removedProduct = action.payload;
            try {
                const exist = state.cart.find((product) => product.id === removedProduct.id);
                if (exist) {
                    state.cart = state.cart.filter((product) => product.id !== removedProduct.id);
                    state.totalAmount -= exist.amount;
                    state.totalPrice -= exist.totalPrice;
                    updateData(state.cart, state.totalAmount, state.totalPrice);
                }
            } catch (error) {
                return error;
            }
        },
        incrementQuantity: (state, action) => {
            const product = state.cart.find((item) => item.id === action.payload.id);
            if (product) {
                product.amount++;
                product.totalPrice += product.price;
                state.totalAmount++;
                state.totalPrice += product.price;
                updateData(state.cart, state.totalAmount, state.totalPrice);
            }
        },
        decrementQuantity: (state, action) => {
            const product = state.cart.find((item) => item.id === action.payload.id);
            if (product && product.amount > 1) {
                product.amount--;
                product.totalPrice -= product.price;
                state.totalAmount--;
                state.totalPrice -= product.price;
                updateData(state.cart, state.totalAmount, state.totalPrice);
            }
        }
    }
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;

export default cartSlice.reducer;