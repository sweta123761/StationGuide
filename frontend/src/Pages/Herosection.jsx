import React from 'react';
import './Herosection.css' ;
import logo from '../assets/stationsaarthi.svg';
import navigationsvg from '../assets/svg/navigation.svg';
// import navigation from './navigation';
import bookingsvg from '../assets/svg/bookings.svg';
import stationsvg from '../assets/svg/station.svg';
import noticationsvg from '../assets/svg/notification.svg';
import mapsvg from '../assets/svg/3dmap.svg';
import schedulesvg from '../assets/svg/schedule.svg';
import searchsvg from '../assets/svg/search.svg';
import { useNavigate } from 'react-router-dom';
import HamburgerMenu from './hamburger';

   
const Herosection = () => {
    const navigate = useNavigate();

    const LoginClick = () => {
        navigate('/login'); // Navigates to the login page
    };
    const RegisterClick = () => {
        navigate('/Register'); // Navigates to the login page
    };
    return (
        <>
        
        <div className='relative z-50 flex items-center justify-betweenv'>
        <div><HamburgerMenu /></div>
        <div className='cursor-pointer ml-auto mr-8'>
            <img src={searchsvg} alt="" srcset="" /></div>
        </div>
        <h1 className='pl-4 text-2xl font-extrabold text-center text-white  '>Namaste !! Yatree </h1>
        <div className="relative flex items-center justify-center bg-center bg-cover herosection">
           
            <div className='relative z-10 grid justify-items-center'>
                <img src={logo} alt="" srcset="" style={{height:"40vh" }}/>
                <h1 className='text-xl font-extrabold text-white'>Station Saarthi : Your Platform Guide</h1>
            </div>
            {/* <img src={bg} alt="whitishbg" style={{ position: "absolute", bottom: 0 }} />
            <img src={bgmobile} alt="" style={{ position: "absolute", bottom: 0, zIndex: "10" }} className="md:hidden" /> */}
        </div> 
        <br></br>
        <div className='flex items-center justify-center'>
            <button type="submit" onClick={LoginClick} className="w-20 py-2 font-semibold text-white transition-all duration-300 ease-in-out bg-blue-500 rounded-lg shadow-md cursor-pointer hover:bg-blue-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50">Login</button>
            <button type="submit" onClick={RegisterClick} className="w-20 py-2 ml-8 font-semibold text-white transition-all duration-300 ease-in-out bg-blue-500 rounded-lg shadow-md cursor-pointer hover:bg-blue-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50">Register</button>
        </div>

        <div className='grid grid-cols-3 gap-4 mt-32 md:flex md:flex-row md:justify-evenly justify-items-center'>
             <div className='flex flex-col items-center justify-center w-16 h-16 bg-blue-200 border-2 border-blue-200 rounded-full cursor-pointer'><img src={navigationsvg} alt="" srcset="" /> <h1 className='font-bold text-black'>Navigation</h1></div>
                <div className='flex flex-col items-center justify-center w-16 h-16 bg-blue-200 border-2 border-blue-200 rounded-full cursor-pointer'><img src={bookingsvg} alt="" srcset="" /> <h1 className='font-bold text-black'>Booking</h1></div>
                <div className='flex flex-col items-center justify-center w-16 h-16 bg-blue-200 border-2 border-blue-200 rounded-full cursor-pointer'><img src={stationsvg} alt="" srcset="" />  <h1 className='font-bold text-black'>Station</h1></div>
                
                <div className='flex flex-col items-center justify-center w-16 h-16 bg-blue-200 border-2 border-blue-200 rounded-full cursor-pointer'><img src={mapsvg} alt="" srcset="" /> <h1 className='font-bold text-black'>3D Map</h1></div>
                <div className='flex flex-col items-center justify-center w-16 h-16 bg-blue-200 border-2 border-blue-200 rounded-full cursor-pointer'><img src={schedulesvg} alt="" srcset="" /> <h1 className='font-bold text-black'>Schedule</h1></div>
                <div className='flex flex-col items-center justify-center w-16 h-16 bg-blue-200 border-2 border-blue-200 rounded-full cursor-pointer'><img src={noticationsvg} alt="" srcset="" /> <h1 className='font-bold text-black'>Notification</h1></div>

        </div>
        </>
    );
};

export default Herosection;