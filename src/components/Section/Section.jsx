import React from 'react';
import "./Section.css";

const Section = ({title, subtitle, children, id}) => {
    return (
        <section className="section" id={id}>
            <h2 className="section__title">{title}</h2>
            <span className="section__subtitle">{subtitle}</span>
            {children}
        </section>
    );
}

export default Section;