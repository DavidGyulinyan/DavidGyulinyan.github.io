import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Services from "./components/Services/Services";
import Qualification from "./components/Qualification/Qualification";
import Work from "./components/Work/Work";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollUp from "./components/ScrollUp/ScrollUp";

function App() {
    return (<div className="App">
            <Header/>
            <main className="main">
                <Home/>
                <About/>
                <Skills/>
                <Services/>
                <Qualification/>
                <Work/>
                <Testimonials/>
                <Contact/>
            </main>
        <Footer/>
        <ScrollUp/>
        </div>);
}

export default App;
