import React from 'react'
import {Link} from 'react-scroll'
import {Container} from '../compnents'
import Hamburger from './Hamburger'

function Navbar({ isChecked, handleCheckboxChange }) {
    return (
        <Container 
            classes={`w-full items-center font-['TRANSFORMA'] h-[3rem] rounded-[.6rem] bg-zinc-900 shadow-xl shadow-stone-950 overflow-hidden z-20  opacity-100`}
        >
        <div className='w-full flex justify-end md:justify-center p-4 relative   h-[3rem] rounded-[.6rem] opacity-100'>
            <div className='flex justify-center items-center gap-6   md:hidden'>
                <Hamburger isChecked={isChecked} handleCheckboxChange={handleCheckboxChange}/>
            </div>
            <div 
                className='hidden md:flex justify-center items-center gap-6     
                lg:gap-20 '
            >
                <Link to='home' spy={true} smooth={true} duration={1000} offset={-200}  className='hover:font-bold cursor-pointer'>Home</Link>
                <Link to='about' spy={true} smooth={true} duration={1000} className='hover:font-bold cursor-pointer'>About</Link>
                <Link to='edu' spy={true} smooth={true} duration={1500} className='hover:font-bold cursor-pointer'>Academics</Link>
                <Link to='project' spy={true} smooth={true} duration={1500} className='hover:font-bold cursor-pointer'>work</Link>
            </div>
        </div>
    </Container>
    
    )
}

export default Navbar