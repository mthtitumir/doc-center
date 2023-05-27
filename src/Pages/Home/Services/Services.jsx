import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { BsClock } from 'react-icons/bs';

const Services = () => {
    return (
        <div className='container mx-auto'>
            <div className='grid md: grid-cols-2 gap-3'>
                <div className='border'>
                    <img className='w-full' src="https://i.ibb.co/pdV4cwp/doctor.jpg" alt="" />
                </div>
                <div className='border'>
                    <h2 className='text-3xl font-semibold'>Our Services</h2>
                    <p className='my-5'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    <Tabs>
                        <TabList>
                            <Tab>Title 1</Tab>
                            <Tab>Title 2</Tab>
                            <Tab>Title 2</Tab>
                        </TabList>

                        <TabPanel>
                            <h2>Any content 1</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 2</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 2</h2>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3 mt-20'>
                <div className='flex items-center justify-center bg-teal-800 rounded-lg'>
                    <div>
                        <BsClock className='text-4xl text-white'></BsClock>
                    </div>
                    <div className='p-5 text-white'>
                        <h2 className='text-xl font-semibold'>Opening Hours</h2>
                        <p>Open 9.00 am to 5.00 pm Everyday</p>
                    </div>
                </div>
                <div className='bg-red-800 rounded-lg'>
                    <div className='p-5 text-white'>
                        <h2 className='text-xl font-semibold'>Opening Hours</h2>
                        <p>Open 9.00 am to 5.00 pm Everyday</p>
                        <p>Open 9.00 am to 5.00 pm Everyday</p>
                        <p>Open 9.00 am to 5.00 pm Everyday</p>
                    </div>
                </div>
                <div className='bg-teal-800 rounded-lg'>
                    <div className='p-5 text-white'>
                        <h2 className='text-xl font-semibold'>Opening Hours</h2>
                        <p>Open 9.00 am to 5.00 pm Everyday</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;