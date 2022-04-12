import React from 'react';
import styles from './ShoppingCart.module.css';
import { FiShoppingCart } from 'react-icons/fi';
interface props {

}
interface state {
    isOpen: boolean
}
export default class ShoppingCart extends React.Component<props, state> {
    constructor(props: props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    // arrow function fix the problem of 'this'
    toggleCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log(e.target); // 点击的元素
        console.log(e.currentTarget); // 绑定事件的元素
        if ((e.target as HTMLElement).nodeName === 'SPAN') {
            this.setState({
                isOpen: !this.state.isOpen
            })
        }
    }

    render() {
        const {isOpen} = this.state
        return (
            <div className={styles.cartContainer}>
                <button className={styles.button} onClick={this.toggleCart}>
                    <FiShoppingCart />
                    <span>购物车 2 (件)</span>
                </button>
                <div className={styles.cartDropDown} style={{display: isOpen ? 'block' : 'none'}}>
                    <ul>
                        <li>robot 1</li>
                        <li>robot 2</li>
                    </ul>
                </div>
            </div>
        )
    }
}
