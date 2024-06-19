import React from 'react'
import { Magnetic_button } from "../compnents";

function Contact() {
    return (
        <div id='connect'  className=' lg:p-[2.5rem] xl:p-[3rem] h-[50rem]  flex flex-col justify-center gap-6 items-center '>
            <div className=" font-[NIKEA] text-[1.8rem] xl:text-[2.2rem] 2xl:text-[2.8rem]  text-center overflow-scroll xl:overflow-hidden hide_scrollbar group">
                Let's turn <span className="text-stone-400">ideas into</span>  <span className="xl:text-[2.4rem] underline underline-offset-[8px] decoration-amber-700 font-bold">conversations</span>, <span className="bg-stone-400 group-hover:bg-amber-400 p-2 rounded-xl xl:text-[2.2rem] 2xl:text-[2.5rem]">dreams</span> into plans, and possibilities into <span className="bg-stone-400 group-hover:bg-amber-800 transition-all p-2 rounded-xl xl:text-[2.2rem] 2xl:text-[2.5rem]">realities.</span> Reach out and <span className="underline underline-offset-[.5rem] text-stone-600 ">let's make it happen <span className="text-red-900 group-hover:text-red-600">together</span></span> 
            </div>
            <div>
                <div className='font-[TRANSFORMA] text-[1.8rem] xl:text-[2rem] 2xl:text-[1.8rem]  text-center  text-stone-600'>Lets Connect</div>
                <Magnetic_button/>
            </div>
        </div>
    )
}

export default Contact