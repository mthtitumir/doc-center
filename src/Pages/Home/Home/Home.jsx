import React from 'react';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Doctors from '../Doctors/Doctors';
import ContactUs from '../ContactUs/ContactUs';

const Home = () => {
    return (
        <div>
            <Services></Services>
            <Testimonials></Testimonials>
            <Doctors></Doctors>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;