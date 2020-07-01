// step 2.
const allReducers = (state = {}, action) => {
    const { cart, products } = state;
    const { product } = action;
    const { id, productName, price } = product || {};
    let quantity, inventory;
    switch (action.type) {
        case "ADD_PRODUCT":
            quantity = cart[id] ? cart[id].quantity : 0;
            inventory =
                product.inventory > 0 ? product.inventory - 1 : product.inventory;
            return {
                ...state,
                products: {
                    ...product,
                    [id]: {
                        ...product,
                        inventory,
                    },
                },
                cart: {
                    ...cart,
                    [id]: {
                        id,
                        productName,
                        price,
                        quantity: quantity + 1,
                    },
                },
            };
        default:
            return state;
    }
};

export default allReducers;