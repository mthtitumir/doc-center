import React from 'react';
import SectionHeader from '../../../Componants/SectionHeader';
import DoctorCard from './DoctorCard';

const Doctors = () => {
    return (
        <div className='mt-20 container mx-auto'>
            <SectionHeader heading={"Our Expert Doctors"} subHeading={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo."}></SectionHeader>
            <div className='grid md:grid-cols-2 lg:grid-cols-3'>
                <DoctorCard></DoctorCard>
            </div>
        </div>
    );
};

export default Doctors;