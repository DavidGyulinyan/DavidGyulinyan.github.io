import React from "react";
import "./Testimonials.css";
import {store} from "../../store/store";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Pagination} from "swiper";


const {testimonials} = store

function Testimonials() {
    return (
        <section className="testimonial container section">
            <h2 className="section__title">My clients say</h2>
            <span className="section__subtitle">Reviewes</span>

            <Swiper
                className="testimonials__container"
                loop={true}
                grabCursor={true}
                spaceBetween={24}
                pagination={{clickable: true}}
                breakpoints={
                    {
                        576: {slidesPerView: 1},
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 48,
                        },
                    }
                }
                modules={[Pagination]}
            >
                {
                    testimonials.map(testimonial => {
                        return (
                            <SwiperSlide className="testimonial__card" key={testimonial.id}>
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.image + testimonial.id}
                                    className="testimonial__img"
                                />

                                <h3 className="testimonial__name">{testimonial.title}</h3>
                                <p className="testimonial__description">
                                    {testimonial.description}
                                </p>
                            </SwiperSlide>
                        );
                    })}
            </Swiper>
        </section>
    );
}

export default Testimonials;
