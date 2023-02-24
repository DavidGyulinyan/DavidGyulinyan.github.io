import React from "react"
import "./ModalServices.css"

const ModalServices = ({services}) => {
    return (
        <ul className="services__modal-services grid">
            {
                services.map(service => {
                    return (
                        <li
                            key={service.id}
                            className="services__modal-service"
                        >
                            <i className="uil uil-check-circle services__modal-icon"/>
                            <p className="services__modal-info">{service.text}</p>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default ModalServices