import React from 'react'
import "./Services.css"
import {store} from "../../store/store";
import Modal from "../Modal/Modal";

const {modalService} = store;

const Services = () => {

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What I offer</span>

            <div className="services__container container grid">
                {
                    modalService.map(product => {
                        return (
                            <React.Fragment key={product.id}>
                                <Modal product={product}/>
                            </React.Fragment>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Services