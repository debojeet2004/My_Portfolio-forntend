import React from 'react'
import {Link} from 'react-scroll'
import {Container} from '../compnents'
import Hamburger from './Hamburger'

function Navbar({ isChecked, handleCheckboxChange }) {
    return (
        <Container 
            classes={`2xl:hidden w-full  items-center font-['TRANSFORMA'] h-[3rem] rounded-[.6rem] bg-zinc-900 shadow-xl shadow-stone-950 overflow-hidden z-20  opacity-100`}
        >
        <div className='w-full flex justify-end lg:justify-center p-4 relative   h-[3rem] rounded-[.6rem] opacity-100'>
            <div className='flex justify-center items-center gap-6   lg:hidden'>
                <Hamburger isChecked={isChecked} handleCheckboxChange={handleCheckboxChange}/>
            </div>
            <div 
                className='hidden lg:flex justify-center items-center gap-6     
                lg:gap-14 '
            >
                <Link to='home' spy={true} smooth={true} duration={1500} offset={-200}  className='hover:font-bold cursor-pointer'>Home</Link>
                <Link to='about' spy={true} smooth={true} duration={1500} className='hover:font-bold cursor-pointer'>About</Link>
                <Link to='edu' spy={true} smooth={true} duration={1500} className='hover:font-bold cursor-pointer'>Education</Link>
                <Link to='exp' spy={true} smooth={true} duration={1500} className='hover:font-bold cursor-pointer'>Experience</Link>
                <Link to='tech' spy={true} smooth={true} duration={1500} className='hover:font-bold cursor-pointer'>Skills</Link>
                <Link to='project' spy={true} smooth={true} duration={1500} className='hover:font-bold cursor-pointer'>Projects</Link>
                <Link to='connect' spy={true} smooth={true} duration={1500} className='hover:font-bold cursor-pointer'>Contact</Link>
            </div>
        </div>
    </Container>
    
    )
}

export default Navbar