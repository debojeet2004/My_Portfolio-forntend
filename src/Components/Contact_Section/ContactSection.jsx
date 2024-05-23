import React from 'react';
import { Magnetic_button } from "../compnents";
import Form from './Form';

export default function ContactSection() {
    

return ( 
    <div 
    style={{ transform: "translateZ(0rem)", transformStyle: "preserve-3d" }} 
    className="rounded-lg w-full p-2 h-[20rem] md:h-[30rem] lg:h-[40rem] flex flex-col md:flex-row justify-between">
        <div style={{ transformStyle: "preserve-3d" }} className=" w-full p-2 flex items-center lg:justify-between justify-center">
            <Form/>
            <div style={{ transform: "translateZ(8rem)", transformStyle: "preserve-3d" }} 
            className="hidden lg:flex border rounded-lg border-stone-900 h-full w-[50%] xl:w-[55%] p-4 text-stone-700 flex-col justify-center items-start" >
                <p 
                style={{ transform: "translateZ(4rem)" }} 
                className=" font-[NIKEA] text-[1.8rem] xl:text-[2.2rem] 2xl:text-[2.6rem]  h-[86%] overflow-scroll xl:overflow-visible hide_scrollbar">
                Let's turn <span className="text-stone-400">ideas into</span>  <span className="xl:text-[2.4rem] underline underline-offset-[8px] decoration-amber-700 font-bold">conversations</span>, <span className="bg-stone-400 p-2 rounded-xl xl:text-[2.2rem] 2xl:text-[2.5rem]">dreams</span> into plans, and possibilities into <span className="bg-stone-400 p-2 rounded-xl xl:text-[2.2rem] 2xl:text-[2.5rem]">realities..</span> Reach out and <span className="underline underline-offset-[.5rem] text-stone-600 ">let's make it happen <span className="text-red-900">together</span></span> 
                </p>
                <div style={{ transform: "translateZ(5rem)" }} className="font-[TRANSFORMA] capitalize text-stone-400 text-2xl opacity-30"><Magnetic_button /></div> 
            </div>
        </div>
    </div>
);
}


