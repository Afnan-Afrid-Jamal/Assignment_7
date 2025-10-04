import React from 'react';
import xIcon from '../xIcon.png'
import fbIcon from '../fbIcon.svg'
import linkedInIcon from '../linkedInIcon.svg'
import mailIcon from '../mailIcon.svg'

const Footer = () => {
    return (
        <div className='bg-black py-6 mt-16 overflow-x-hidden'>
            <div className='max-w-[1440px] mx-auto px-6'>
                <div className='grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-10 py-10 text-center md:text-left'>
                    <div>
                        <h2 className='text-2xl font-bold text-white mb-4'>CS — Ticket System</h2>
                        <p className='text-[#A1A1AA] mt-3 text-justify'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                    <div>
                        <h3 className='text-[20px] font-medium text-white mb-4'>Company</h3>
                        <ul className='text-[#A1A1AA]'>
                            <li className='mb-4'><a href="#">About Us</a></li>
                            <li className='mb-4'><a href="#">Our Mission</a></li>
                            <li className='mb-4'><a href="#">Contact Sale</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-[20px] font-medium text-white mb-4'>Services</h3>
                        <ul className='text-[#A1A1AA]'>
                            <li className='mb-4'><a href="#">Products & Services</a></li>
                            <li className='mb-4'><a href="#">Customer Stories</a></li>
                            <li className='mb-4'><a href="#">Download Apps</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-[20px] font-medium text-white mb-4'>Information</h3>
                        <ul className='text-[#A1A1AA]'>
                            <li className='mb-4'><a href="#">Privacy Policy</a></li>
                            <li className='mb-4'><a href="#">Terms & Conditions</a></li>
                            <li className='mb-4'><a href="#">Join Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-[20px] font-medium text-white mb-4'>Social Links</h3>
                        <ul className='text-[#A1A1AA] space-y-4'>
                            <li>
                                <a href="#" className='flex justify-center md:justify-start gap-2 items-center'>
                                    <img src={xIcon} alt="" className='w-6 h-6' />@CS — Ticket System
                                </a>
                            </li>
                            <li>
                                <a href="#" className='flex justify-center md:justify-start gap-2 items-center'>
                                    <img src={fbIcon} alt="" className='w-6 h-6' />@CS — Ticket System
                                </a>
                            </li>
                            <li>
                                <a href="#" className='flex justify-center md:justify-start gap-2 items-center'>
                                    <img src={linkedInIcon} alt="" className='w-6 h-6 invert' />@CS — Ticket System
                                </a>
                            </li>
                            <li>
                                <a href="#" className='flex justify-center md:justify-start gap-2 items-center'>
                                    <img src={mailIcon} alt="" className='w-6 h-6 invert' />support@cst.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='text-center'>
                    <hr className="border-t border-gray-700 mt-3 mb-5" />
                    <p className='text-white text-sm md:text-base'>
                        ©2025 CS — Ticket System. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
