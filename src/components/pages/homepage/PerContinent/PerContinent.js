import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import "./PerContinent.css"
import 'swiper/swiper.min.css';

import Components from "./Components/Components";

export default function PerContinent() {
    return (
        <div className="text-center">
            <h1 className="title _title-per-continents">PER CONTINENTS</h1>
            <div className="_body-per-continent">
                <Components/>
            </div>
        </div>
    )
}