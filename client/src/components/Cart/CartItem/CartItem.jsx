import React, { useContext } from "react";
import { Context } from "../../../utils/context";
import { MdClose } from "react-icons/md";

import "./CartItem.scss";

const CartItem = () => {
    const { cartItems, handleRemoveFromCart, handleCartProductQuantity } =
        useContext(Context);

    return (
        <div className="cart-products">
            {cartItems?.map((item) => (
                <div className="search-result-item" key={item.id} onClick={() => {}}>
                    <div className="image-container">
                        <img 
                            src={item.attributes.img?.data[0]?.attributes?.url ? process.env.REACT_APP_DEV_URL + item.attributes.img.data[0].attributes.url : ""}
                            alt=""
                        />
                    </div>
                    <div className="prod-details">
                        <span className="name">{item.attributes.title}</span>
                        <MdClose
                            className="close-btn"
                            onClick={() => handleRemoveFromCart(item)}
                        />
                        <div className="quantity-buttons">
                            <span onClick={() => handleCartProductQuantity("dec", item)}>-</span>
                            <span>{item.attributes.quantity}</span>
                            <span onClick={() => handleCartProductQuantity("inc", item)}>+</span>
                        </div>
                        <div className="text">
                            <span>{item.attributes.quantity}x</span>
                            <span className="highlight">&#8377;{item.attributes.price * item.attributes.quantity}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CartItem;
