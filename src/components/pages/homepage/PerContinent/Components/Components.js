import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

import "./Components.css"
import 'swiper/swiper.min.css';
import Component from "../Component/Component";

SwiperCore.use([ Navigation ]);

export default function Components() {
    return (
        <div>
            <Swiper spaceBetween={50} slidesPerView={3} navigation={{ nextEl: ".prev-btn", prevEl: ".next-btn" }}>
                <SwiperSlide>
                    <Component/>
                </SwiperSlide>
                <SwiperSlide>
                    <Component/>
                </SwiperSlide>
                <SwiperSlide>
                    <Component/>
                </SwiperSlide>
                <SwiperSlide>
                    <Component/>
                </SwiperSlide>
                <div className="_navigation-buttons">
                    <div className="_btn prev-btn d-flex justify-content-center align-items-center">
                        <img src={"/svgs/ic-arrows-left.svg"} width={30} height={40}/>
                    </div>
                    <div className="_btn next-btn d-flex justify-content-center align-items-center">
                        <img src={"/svgs/ic-arrows-left.svg"} width={30} height={40}/>
                    </div>
                </div>
            </Swiper>
        </div>
    )
}