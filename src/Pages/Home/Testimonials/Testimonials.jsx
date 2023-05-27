import React from 'react';
import SectionHeader from '../../../Componants/SectionHeader';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import {RiDoubleQuotesL} from 'react-icons/ri';

const Testimonials = () => {
    return (
        <div className='container mx-auto'>
            <SectionHeader heading={"What Our Patients Says"} subHeading={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo."}></SectionHeader>
            <div className='mt-10'>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">
                    <SwiperSlide>
                        <div className="w-1/2 border border-orange-400 rounded-lg p-9">
                            <div className='flex items-center gap-5'>
                                <img className='w-1/12 rounded-[50%]' src="https://i.ibb.co/3Mrx6Fg/blank-profile.webp" alt="" />
                                <div className='flex-grow'>
                                    <h1 className='text-lg font-semibold'>Awlad Hossain</h1>
                                    <p>Product Designer</p>
                                </div>
                                <div className=''>
                                    <RiDoubleQuotesL className='text-7xl text-orange-400'></RiDoubleQuotesL>
                                </div>

                            </div>
                            <p className='mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit harum, qui, illo temporibus molestias animi velit esse voluptatibus doloremque saepe cupiditate ex! Optio nemo rerum eveniet minima, deserunt, incidunt accusamus eligendi ullam officiis, corrupti architecto!</p>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>hello</SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;