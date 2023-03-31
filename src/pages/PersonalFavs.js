import React from 'react'
import { Slide } from 'react-slideshow-image';
import { useNavigate } from "react-router-dom";
import FavFighterProfile from '../components/FavFighterProfile';
import ConorProfile from '../imgs/ConorProfile.png';
import KhamzatProfile from '../imgs/KhamzatProfile.png';
import JiriProfile from '../imgs/JiriProfile.png';
import HenryProfile from '../imgs/HenryProfile.png';
import CharlesProfile from '../imgs/CharlesProfile.png';
import ConorSlideshow from '../imgs/ConorSlideshow.png';
import KhamzatSlideShow from '../imgs/KhamzatSlideshow.png';
import JiriSlideshow from '../imgs/JiriSlideshow.png';
import HenrySlideshow from '../imgs/HenrySlideshow.jpg';
import CharlesSlideshow from '../imgs/CharlesSlideshow.png';

const PersonalFavs = () => {
    const navigate = useNavigate();

    const navigateToFighterPage = (fightID) => {
        navigate(`/FighterPage/${fightID}`);
    };

    return (
        <div>
            <div className='bg-black p-16 font-NavBarFont text-center'>
                <div className='text-red-600 text-6xl font-bold '>
                    PERSONAL FAVORITE FIGHTERS
                </div>
                
                <div className='text-white pt-4'>
                    My top five fighters. Only active fightes count. The rankings depends on how the fighter affected me
                    as a fan. How well was I entertained? Do I respect their drive as a fighter? How great were they? And 
                    so on.
                </div>
            </div>
            
            <div className='m-32 '>
                <Slide >
                <div className='bg-RedBlackBackground bg-no-repeat bg-cover h-screen flex justify-between px-8 text-white'>
                    <div className='pt-64 text-4xl text-center font-Table font-bold w-1/3 text-gray-800'>
                        Weight Class: LightWeight
                    </div>
                    <div className='w-1/3 '>
                        <div className='pt-6  text-6xl text-center font-Table font-bold '>
                            CONOR MCGREGOR
                        </div>
                        <div className='bottom fixed pt-48'>
                            <img src={ConorSlideshow} className='object-contain ' alt="fighterIcon" />
                        </div>
                    </div>
                    <div className='mt-64 rounded-md text-3xl text-center font-Table font-semibold  text-gray-800 hover:text-gray-300 duration-500 w-1/3 flex justify-center'
                        onClick={()=> navigateToFighterPage(140000867)}
                        >
                            <div className='bg-red-600 w-fit h-fit p-4'>
                              Full Bio  
                            </div>
                        
                    </div>
                </div>
                <div className='bg-RedBlackBackground bg-no-repeat bg-cover h-screen flex justify-between px-8 text-white'>
                    <div className='pt-64 text-4xl text-center font-Table font-bold w-1/3 text-gray-800'>
                        Weight Class: Welterweight
                    </div>
                    <div className='w-1/3 '>
                        <div className='pt-6  text-6xl text-center font-Table font-bold '>
                            KHAMZAT CHIMAEV
                        </div>
                        <div className='bottom fixed pt-48'>
                            <img src={KhamzatSlideShow} className='object-contain ' alt="fighterIcon" />
                        </div>
                    </div>
                    <div className='mt-64 rounded-md text-3xl text-center font-Table font-semibold  text-gray-800 hover:text-gray-300 duration-500 w-1/3 flex justify-center'
                        onClick={()=> navigateToFighterPage(140000941)}
                        >
                            <div className='bg-red-600 w-fit h-fit p-4'>
                              Full Bio  
                            </div>
                        
                    </div>
                </div>
                <div className='bg-RedBlackBackground bg-no-repeat bg-cover h-screen flex justify-between px-8 text-white'>
                    <div className='pt-64 text-4xl text-center font-Table font-bold w-1/3 text-gray-800'>
                        Weight Class: Light Heavyweight
                    </div>
                    <div className='w-1/3 '>
                        <div className='pt-6  text-6xl text-center font-Table font-bold '>
                            JIRI PROCHAZKA
                        </div>
                        <div className='bottom fixed pt-48'>
                            <img src={JiriSlideshow} className='object-contain ' alt="fighterIcon" />
                        </div>
                    </div>
                    <div className='mt-64 rounded-md text-3xl text-center font-Table font-semibold  text-gray-800 hover:text-gray-300 duration-500 w-1/3 flex justify-center'
                        onClick={()=> navigateToFighterPage(140000918)}
                        >
                            <div className='bg-red-600 w-fit h-fit p-4'>
                              Full Bio  
                            </div>
                        
                    </div>
                </div>
                <div className='bg-RedBlackBackground bg-no-repeat bg-cover h-screen flex justify-between px-8 text-white'>
                    <div className='pt-64 text-4xl text-center font-Table font-bold w-1/3 text-gray-800'>
                        Weight Class: Bantamweight
                    </div>
                    <div className='w-1/3 '>
                        <div className='pt-6  text-6xl text-center font-Table font-bold '>
                            HENRY CEJUDO
                        </div>
                        <div className='bottom fixed pt-48'>
                            <img src={HenrySlideshow} className='object-contain ' alt="fighterIcon" />
                        </div>
                    </div>
                    <div className='mt-64 rounded-md text-3xl text-center font-Table font-semibold  text-gray-800 hover:text-gray-300 duration-500 w-1/3 flex justify-center'
                        onClick={()=> navigateToFighterPage(140000026)}
                        >
                            <div className='bg-red-600 w-fit h-fit p-4'>
                              Full Bio  
                            </div>
                        
                    </div>
                </div>
                <div className='bg-RedBlackBackground bg-no-repeat bg-cover h-screen flex justify-between px-8 text-white'>
                    <div className='pt-64 text-4xl text-center font-Table font-bold w-1/3 text-gray-800'>
                        Weight Class: LightWeight
                    </div>
                    <div className='w-1/3 '>
                        <div className='pt-6  text-6xl text-center font-Table font-bold '>
                            CHARLES OLIVEIRA
                        </div>
                        <div className='bottom fixed pt-48'>
                            <img src={CharlesSlideshow} className='object-contain ' alt="fighterIcon" />
                        </div>
                    </div>
                    <div className='mt-64 rounded-md text-3xl text-center font-Table font-semibold  text-gray-800 hover:text-gray-300 duration-500 w-1/3 flex justify-center'
                        onClick={()=> navigateToFighterPage(140000045)}
                        >
                            <div className='bg-red-600 w-fit h-fit p-4'>
                              Full Bio  
                            </div>
                        
                    </div>
                </div>
            </Slide>
            </div>

            <div className='px-32 pb-32'>
                <div onClick={()=> navigateToFighterPage(140000867)} className='mb-8'>
                    <FavFighterProfile 
                        name="CONOR MCGREGOR" 
                        rank="1"
                        Profile={ConorProfile}
                        summary="He is a former Ultimate Fighting Championship (UFC) featherweight and lightweight double-champion. 
                        He is the first UFC fighter to hold UFC championships in two weight classes simultaneously. He is also 
                        the former Cage Warriors featherweight and lightweight champion. "/>
                </div>
                <div onClick={()=> navigateToFighterPage(140000941)} className='mb-8'>
                    <FavFighterProfile 
                        name="KHAMZAT CHIMAEV" 
                        rank="2"
                        Profile={KhamzatProfile}
                        summary="A Swedish professional mixed martial artist and freestyle wrestler who competes in the Welterweight 
                        division of the Ultimate Fighting Championship (UFC). He formerly competed in Brave Combat Federation. 
                        In wrestling, Chimaev is a three-time Swedish National champion"/>
                </div>
                <div onClick={()=> navigateToFighterPage(140000918)} className='mb-8'>
                    <FavFighterProfile 
                        name="JIRI PROCHAZKA" 
                        rank="3"
                        Profile={JiriProfile}
                        summary="He currently competes in the Light Heavyweight division in the Ultimate Fighting Championship (UFC),
                        where he is the former UFC Light Heavyweight Champion. He was the inaugural Rizin Fighting Federation 
                        Light Heavyweight Champion and the inaugural Gladiator Fighting Championship Light Heavyweight Champion.
                        "/>
                </div>
                <div onClick={()=> navigateToFighterPage(140000026)} className='mb-8'>
                    <FavFighterProfile 
                        name="HENRY CEJUDO" 
                        rank="4"
                        Profile={HenryProfile}
                        summary=" He is the former Ultimate Fighting Championship (UFC) Flyweight Champion and Bantamweight Champion. 
                        He is the fourth UFC fighter to hold titles in two different weight classes simultaneously, and the second 
                        to defend titles in two different weight divisions. He is the only person to win an Olympic gold medal 
                        and a UFC title. He is considered to be among the greatest combat athletes of all time due to his 
                        accomplishments in MMA and freestyle wrestling"/>
                </div>
                <div onClick={()=> navigateToFighterPage(140000045)}>
                    <FavFighterProfile 
                        name="CHARLES OLIVEIRA" 
                        rank="5"
                        Profile={CharlesProfile}
                        summary="Brazilian professional mixed martial artist and Brazilian jiu-jitsu practitioner. He currently 
                        competes in the Lightweight division in the Ultimate Fighting Championship (UFC), where he is a 
                        former UFC Lightweight Champion. Oliveira holds multiple UFC records, notably the most submission wins 
                        in the organization's history at 16, and most finishes at 19."/>
                </div>

            </div>
            
            
        </div>
    )
}

export default PersonalFavs