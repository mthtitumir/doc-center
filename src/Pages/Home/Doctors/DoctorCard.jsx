import React from 'react';
import Rating from 'react-rating';
import { AiFillStar, AiOutlineStar, AiOutlineDollar } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';
import { TiShoppingBag } from 'react-icons/ti';
import ButtonOutline from '../../../Componants/ButtonOutline';

const DoctorCard = () => {
    return (
        <div className='border p-5 rounded-xl'>
            <img className='w-full' src="doctor.png" alt="" />
            <h2 className='text-xl mt-5 mb-1 font-semibold'>Dr. Sajul Islam</h2>
            <p>BTP - Senior Physiotherapist</p>

            <Rating
                className='text-xl mt-3 text-orange-600'
                placeholderRating={3.5}
                emptySymbol={<AiOutlineStar></AiOutlineStar>}
                placeholderSymbol={<AiFillStar></AiFillStar>}
                fullSymbol={<AiFillStar></AiFillStar>}
                readonly
            />
            <hr className='my-6' />
            <div className='flex gap-4 items-center mb-2'>
                <CiLocationOn className='text-lg text-orange-600'>
                </CiLocationOn>
                <p>Dhanmondi, Dhaka, Bangladesh</p>
            </div>
            <div className='flex gap-4 items-center mb-2'>
                <TiShoppingBag className='text-lg text-orange-600'>
                </TiShoppingBag>
                <p>Available On Mon, 22 December</p>
            </div>
            <div className='flex gap-4 items-center mb-2'>
                <AiOutlineDollar className='text-lg text-orange-600'>
                </AiOutlineDollar>
                <p>$15</p>
            </div>
            <ButtonOutline text={"view profile"}></ButtonOutline>
        </div>
    );
};

export default DoctorCard;