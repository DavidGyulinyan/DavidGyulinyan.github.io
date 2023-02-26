import React from 'react'
import "./Services.css"
import {store} from "../../store/store";
import Modal from "../Modal/Modal";
import Section from "../Section/Section";

const {modalService} = store;

const Services = () => {

    return (
        <Section
            id="services"
            title="Services"
            subtitle="What I offer"
        >
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
        </Section>
    )
}

export default Services