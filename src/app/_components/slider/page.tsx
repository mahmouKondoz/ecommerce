'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import { Autoplay } from 'swiper/modules';
import { CategoriesTypes } from '../../../../Types/categoriesType';


export default function Slider({ data }:{data:CategoriesTypes[]}) {
    

    return <>


        <Swiper
            spaceBetween={12}
           
            modules={[Autoplay]}
            autoplay={{
                delay: 1000,
                disableOnInteraction: false

            }}
            breakpoints={{
                0: {
                    slidesPerView: 2,
                },
                640: {
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: 4,
                },
                1024: {
                    slidesPerView: 6,
                },
                1280: {
                    slidesPerView: 7,
                },
            }}
            loop={true}
            


        >
            {data?.map((slid) => {

                return <SwiperSlide>

                    <img className=' h-60 w-full ' src={slid.image} alt="" />

                </SwiperSlide>

            })}

        </Swiper>




    </>
}
