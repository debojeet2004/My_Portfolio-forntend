import React from 'react'
import {Link} from 'react-scroll'
import {a,tech,g,h,home,about,contact} from './assets/assets'

function Navbar2() {
    return (
        <div className="hidden 2xl:flex 2xl:right-[2%] 3xl:right-[4%]  fixed  h-[50rem] w-[2rem]  flex-col justify-start items-center gap-6  ">
            <div className="flex flex-col  justify-center items-center">
                <div className="w-[1px] h-[2rem]  bg-white"/>
                <Link to='home' spy={true} smooth={true} duration={1500} className="cursor-default rounded-lg w-[1.8rem] h-[2rem]  transition-all ease-linear border flex justify-center items-center"></Link>
                <div className="w-[1px] h-[12rem] bg-white"/>
                <Link to='home' spy={true} smooth={true} duration={1500} className="cursor-default  rounded-md hover:rounded-lg w-[1.8rem] h-[2rem] hover:border-stone-200 hover:scale-[1.4] hover:shadow-[0_0px_13px_2px] hover:shadow-stone-400 backdrop-blur-lg transition-all ease-linear border flex justify-center items-center p-[4px]"><img src={home} alt="" /></Link>
            </div>
            <Link to='about' spy={true} smooth={true} duration={1500}   className="cursor-default rounded-md hover:rounded-lg w-[1.8rem] h-[2rem] hover:scale-[1.4]  hover:border-stone-200 transition-all ease-linear   hover:shadow-[0_0px_13px_2px] hover:shadow-stone-400 border flex justify-center items-center p-[5px]"><img src={about} alt="" /></Link>
            <Link to='edu' spy={true} smooth={true} duration={1500}     className="cursor-default rounded-md hover:rounded-lg w-[1.8rem] h-[2rem] hover:scale-[1.4]  hover:border-stone-200 transition-all ease-linear   hover:shadow-[0_0px_13px_2px] hover:shadow-stone-400 border flex justify-center items-center p-[5px]"><img src={a} alt="" /></Link>
            <Link to='exp' spy={true} smooth={true} duration={1500}     className="cursor-default rounded-md hover:rounded-lg w-[1.8rem] h-[2rem] hover:scale-[1.4]  hover:border-stone-200 transition-all ease-linear   hover:shadow-[0_0px_13px_2px] hover:shadow-stone-400 border flex justify-center items-center p-[5px]"><img src={h} alt="" /></Link>
            <Link to='tech' spy={true} smooth={true} duration={1500}    className="cursor-default rounded-md hover:rounded-lg w-[1.8rem] h-[2rem] hover:scale-[1.4]  hover:border-stone-200 transition-all ease-linear   hover:shadow-[0_0px_13px_2px] hover:shadow-stone-400 border flex justify-center items-center p-[5px]"><img src={tech} alt="" /></Link>
            <Link to='project' spy={true} smooth={true} duration={1500} className="cursor-default rounded-md hover:rounded-lg w-[1.8rem] h-[2rem] hover:scale-[1.4]  hover:border-stone-200 transition-all ease-linear   hover:shadow-[0_0px_13px_2px] hover:shadow-stone-400 border flex justify-center items-center p-[5px]"><img src={g} alt="" /></Link>
            <Link to='connect' spy={true} smooth={true} duration={1500} className="cursor-default rounded-md hover:rounded-lg w-[1.8rem] h-[2rem] hover:scale-[1.4]  hover:border-stone-200 transition-all ease-linear   hover:shadow-[0_0px_13px_2px] hover:shadow-stone-400 border flex justify-center items-center p-[5px]"><img src={contact} alt="" /></Link>
            <div className="w-[1px] h-[2rem] bg-white"/>
        </div>
    )
}

export default Navbar2

