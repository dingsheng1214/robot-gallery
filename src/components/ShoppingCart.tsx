import React, {useContext, useState} from 'react';
import styles from './ShoppingCart.module.css';
import { FiShoppingCart } from 'react-icons/fi';
import { appContext } from '../context/AppState';

interface Props {

}

const ShoppingCart: React.FC<Props> = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const {shoppingCart} = useContext(appContext)

    // arrow function fix the problem of 'this'
    const toggleCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log(e.target); // 点击的元素
        console.log(e.currentTarget); // 绑定事件的元素
        if ((e.target as HTMLElement).nodeName === 'SPAN') {
            setIsOpen(!isOpen)
        }
    }

        return (
            <div className={styles.cartContainer}>
                <button className={styles.button} onClick={toggleCart}>
                    <FiShoppingCart />
                    <span>购物车 {shoppingCart.items.length} (件)</span>
                </button>
                <div className={styles.cartDropDown} style={{display: isOpen ? 'block' : 'none'}}>
                    <ul>
                        {
                            shoppingCart.items.map(item => (<li key={item.id}>{item.name}</li>))
                        }
                    </ul>
                </div>
            </div>
        )
}
export default ShoppingCart
