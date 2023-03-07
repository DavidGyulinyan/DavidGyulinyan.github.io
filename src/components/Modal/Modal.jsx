import React, { useState, useEffect } from "react";
import "./Modal.css";
import ModalServices from "../ModalServices/ModalServices";

const Modal = ({ product }) => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    useEffect(() => {
        // Add overflow: hidden to body element when modal is open
        if (toggleState === product.id) {
            document.body.style.overflow = "hidden";
        } else {
            // Remove overflow: hidden when modal is closed
            document.body.style.overflow = "";
        }
    }, [toggleState, product.id]);

    return (
        <div className="services__content">
            <div>
                <i className={`uil ${product.classType} services__icon`}>
                    <h3 className="services__title">{product.title}</h3>
                </i>
            </div>
            <span className="services__button" onClick={() => toggleTab(product.id)}>
        View More
        <i className="uil uil-arrow-right services__button-icon" />
      </span>
            <div
                className={
                    toggleState === product.id ? "services__modal active-modal" : "services__modal"
                }
            >
                <div className="services__modal-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close" />
                    <h3 className="services__modal-title">{product.title2}</h3>
                    <p className="services__modal-description">{product.description}</p>
                    <ModalServices services={product.modalServiceItems} />
                </div>
            </div>
        </div>
    );
};

export default Modal;
