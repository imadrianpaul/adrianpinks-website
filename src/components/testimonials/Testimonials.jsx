import React from "react";
import './Testimonials.css';

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {

     const data = [
        {
            id: 1,
            title: "Adrian",
            subtitle: "Gamer",
            comment: "I am the strongest",
        },
        {
            id: 2,
            title: "Paul",
            subtitle: "Gamer too",
            comment: "Hello World!",
        },
    ];


    return (
        <section className="testimonials container section">

            <h2 className="section__title">Testimonials</h2>

            <Swiper className="testimonial++container grid"
                modules={[Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                grabCursor={true}
                pagination={{clickable: true }}>
                {data.map(({id, title, subtitle, comment}) => {
                    return (
                        <SwiperSlide className="testimonial__item" key={id}>
                            <div className="thumb">

                                
                            {/* <img src={image} alt="" />            */}
                            </div>
                            <h3 className="testimonial__title">{title}</h3>
                            <span className="subtitle">{subtitle}</span>
                            <div className="comment">{comment}</div>
                        </SwiperSlide>
                    )
                })}
                </Swiper>
        </section>
    )
};

export default Testimonials