import React from 'react';
import { FiPhoneCall } from 'react-icons/fi'
import { CiLocationOn } from 'react-icons/ci'
import { useForm } from "react-hook-form";
import Button from '../../../Componants/Button';

const ContactUs = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data =>{
        console.log(data)
        reset();
    };
    return (
        <div className='container mx-auto p-20 bg-teal-900 rounded-xl my-20 flex items-center'>
            <div className='w-2/5 text-white'>
                <h2 className='text-3xl font-semibold'>Contact with Us</h2>
                <p className='my-3'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi. </p>
                <div className='my-3 flex gap-5 items-center'>
                    <FiPhoneCall className='text-lg text-white'></FiPhoneCall>
                    <p>+88 01750 14 14 14</p>
                </div>
                <div className='my-3 flex gap-5 items-center'>
                    <CiLocationOn className='text-lg text-white'></CiLocationOn>
                    <p>Dhanmondi, Dhaka, Bangladesh</p>
                </div>
            </div>
            {/* form  */}

            <form className='w-3/5' onSubmit={handleSubmit(onSubmit)}>
                <div className='grid grid-cols-2 mb-3 gap-3'>
                    {/* register your input into the hook by invoking the "register" function */}
                    <input type='text' placeholder='your name' className='input' {...register("name")} />
                    <input type='text' placeholder='your email' className='input' {...register("email")} />
                    <input type='text' placeholder='your phone' className='input' {...register("phone")} />
                    <input type='text' placeholder='Doctor Name' className='input' {...register("doctor")} />
                    <input type='date' placeholder='Date' className='input' {...register("date")} />
                    <input type='time' placeholder='Time' className='input' {...register("time")} />
                </div>
                <Button text={"Book Now"}></Button>
            </form>




        </div>
    );
};

export default ContactUs;