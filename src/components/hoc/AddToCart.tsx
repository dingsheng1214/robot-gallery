import React, {useContext} from 'react';
import {appSetStateContext} from '../../context/AppState';
import { RobotProps} from '../RobotDiscount';

export const withAddToCart = (ChildComponent: React.ComponentType<RobotProps>) => {
    // return class extends React.Component {};
    return (props) => {
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
        return <ChildComponent {...props} addToCart={addToCart}/>;
    };
}
