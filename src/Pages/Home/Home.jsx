import React, { useState } from 'react'
import { AboutSection, Footer, Introsection, MainCard, Navbar } from '../../Components/compnents'
import {Link} from 'react-scroll'
import Contact from '../../Components/Contact_Section/Contact';

function Home() {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    return (
        <>
        <div className=' rounded-lg sticky top-5 w-full z-10 backdrop-blur-md backdrop-brightness-150 mix-blend-exclusion '>
            <Navbar isChecked={isChecked} handleCheckboxChange={handleCheckboxChange} />
            {isChecked && (
                <div className=' h-[40rem] w-full mt-6 flex flex-col justify-evenly  items-center z-20 transition-transform ease-in  '>
                    <Link to='home' spy={true} smooth={true} duration={1000} offset={-200}  className='hover:font-bold cursor-pointer '>Home</Link>
                    <Link to='about' spy={true} smooth={true} duration={1000} className='hover:font-bold cursor-pointer'>About</Link>
                    <Link to='edu' spy={true} smooth={true} duration={1500} className='hover:font-bold cursor-pointer'>Academics</Link>
                    <Link to='project' spy={true} smooth={true} duration={1500} className='hover:font-bold cursor-pointer'>work</Link>
                    <Link to='exp' spy={true} smooth={true} duration={1500} className='hover:font-bold cursor-pointer'>Experience</Link>
                    <Link to='tech' spy={true} smooth={true} duration={1500} className='hover:font-bold cursor-pointer'>Skills</Link>
                    <Link to='connect' spy={true} smooth={true} duration={1500} className='hover:font-bold cursor-pointer'>Contact</Link>
                </div>
            )}
        </div>
        
        <div className='w-full flex  flex-col '>
            
            <Introsection/> 
            <div className='w-full flex flex-col gap-[3rem] '>
                <AboutSection/>
                <MainCard text={`Academics`} bgtext={`Education`} edu='edu'/>
                <MainCard text={`Journey`} bgtext={`Experience`} exp='exp'/>
                <MainCard text={`Tech Stack`} bgtext={`Technology`}tech='tech' />
                <MainCard text={`Projects`} bgtext={`Compositions`}project='project'/>
                <Contact/>
                
            </div>
        </div>
        <Footer />
        
        </>
    )
}

export default Home