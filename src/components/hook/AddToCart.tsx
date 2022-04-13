import {useContext} from 'react';
import {appSetStateContext} from '../../context/AppState';

const useAddToCart = () => {
    const setState = useContext(appSetStateContext);
    const addToCart = (id, name, email) => {
        if (setState) {
            setState((state) => {
                return {
                    ...state,
                    shoppingCart: {
                        ...state.shoppingCart,
                        items: [...state.shoppingCart.items, {id, name, email}]
                    }
                }
            })
        }
    }
    return addToCart
}
export default useAddToCart
