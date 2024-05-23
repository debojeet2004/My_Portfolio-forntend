import React, { useState } from 'react'
import { AboutSection, Footer, Introsection, MainCard, Navbar } from '../../Components/compnents'
import {Link} from 'react-scroll'

function Home() {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    return (
        <>
        <div className='effect rounded-lg sticky top-5 w-full z-10 backdrop-blur-md backdrop-brightness-150 mix-blend-difference '>
            <Navbar isChecked={isChecked} handleCheckboxChange={handleCheckboxChange} />
            {isChecked && (
                <div className=' h-[30rem] w-full mt-2 flex flex-col justify-evenly items-center z-20 transition-transform ease-in  '>
                    <Link to='home' spy={true} smooth={true} duration={1000} offset={-200}  className='hover:font-bold cursor-pointer '>Home</Link>
                    <Link to='about' spy={true} smooth={true} duration={1000} className='hover:font-bold cursor-pointer'>About</Link>
                    <Link to='edu' spy={true} smooth={true} duration={1500} className='hover:font-bold cursor-pointer'>Academics</Link>
                    <Link to='project' spy={true} smooth={true} duration={1500} className='hover:font-bold cursor-pointer'>work</Link>
                </div>
            )}
        </div>
        <div className='w-full flex  flex-col '>
            
            <Introsection/> 
            <div className='w-full flex flex-col md:gap-[4rem]'>
                <AboutSection/>
                <MainCard text={`Academics`} bgtext={`Education`} edu='edu'/>
                <MainCard text={`Journey`} bgtext={`Experience`} exp/>
                <MainCard text={`Tech Stack`} bgtext={`Technology`}tech='tech' />
                <MainCard text={`Projects`} bgtext={`Compositions`}project='project'/>
                <MainCard text={`Say hello_`} bgtext={`get in touch`} connect='connect'/>
            </div>
        </div>
        <Footer />
        
        </>
    )
}

export default Home