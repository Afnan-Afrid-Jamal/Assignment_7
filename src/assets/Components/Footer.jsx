import React from 'react';
import xIcon from '../xIcon.png'
import fbIcon from '../fbIcon.svg'
import linkedInIcon from '../linkedInIcon.svg'
import mailIcon from '../mailIcon.svg'


const Footer = () => {
    return (
        <div className='bg-black py-18'>
            <div className='grid grid-cols-5 max-w-[1440px] mx-auto gap-8'>
                <div>
                    <h2 className='text-2xl font-bold text-white'>CS — Ticket System</h2>
                    <p className='text-[#A1A1AA] mt-3 text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div>
                    <h3>Company</h3>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Our Mission</a></li>
                        <li><a href="#">Contact Saled</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Services</h3>
                    <ul>
                        <li><a href="#">Products & Services</a></li>
                        <li><a href="#">Customer Stories</a></li>
                        <li><a href="#">Download Apps</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Information</h3>
                    <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Join Us</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Social Links</h3>
                    <ul>
                        <li>
                            <a href="#" className='flex gap-2'><img src={xIcon} alt="" className='w-8 h-8' />@CS — Ticket System</a>
                        </li>
                        <li>
                            <a href="#" className='flex gap-2'><img src={fbIcon} alt="" className='w-8 h-8' />@CS — Ticket System</a>
                        </li>
                        <li>
                            <a href="#" className='flex gap-2'><img src={linkedInIcon} alt="" className='w-8 h-8' />@CS — Ticket System</a>
                        </li>
                        <li>
                            <a href="#" className='flex gap-2'><img src={mailIcon} alt="" className='w-8 h-8' />@CS — Ticket System</a>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;