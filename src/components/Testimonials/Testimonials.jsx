import React from "react";
import "./Testimonials.css";
import {store} from "../../store/store";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import {Pagination} from "swiper";

function Testimonials() {
    return (<section className="testimonial container section">
            <h2 className="section__title">My clients say</h2>
            <span className="section__subtitle">Reviewes</span>

            <Swiper
                className="testimonials__container"
                loop={true}
                grabCursor={true}
                spaceBetween={24}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    576: {
                        slidesPerView: 2,
                    }, 768: {
                        slidesPerView: 2, spaceBetween: 48,
                    },
                }}
                modules={[Pagination]}
            >
                {store.testimonials.map(testimonials => {
                    return (<SwiperSlide className="testimonial__card" key={testimonials.id}>
                            <img
                                src={testimonials.image}
                                alt=""
                                className="testimonail__img"
                            />

                            <h3 className="testimonial__name">{testimonials.title}</h3>
                            <p className="testimonial__description">
                                {testimonials.description}
                            </p>
                        </SwiperSlide>);
                })}
            </Swiper>
        </section>);
}

export default Testimonials;
