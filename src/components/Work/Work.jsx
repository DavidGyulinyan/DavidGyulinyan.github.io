import React from 'react';
import "./Work.css";
import Works from "./Works"
import Section from "../Section/Section";

const Work = () => {
    return (
        <Section
            id="portfolio"
            title="Portfolio"
            subtitle="Most recent works"
        >
            <Works/>
        </Section>
    );
}

export default Work;