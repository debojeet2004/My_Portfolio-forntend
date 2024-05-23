import { motion, useMotionTemplate, useMotionValue, useSpring} from "framer-motion";
import {profileimg} from '../../Assets/assets'
import {Title} from '../compnents'
import { useRef } from "react";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;
export default function AboutSection() {

    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const xSpring = useSpring(x);
    const ySpring = useSpring(y);
    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e) => {
        if (!ref.current) return [0, 0];
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;
        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / width - HALF_ROTATION_RANGE;
        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };


    const screenWidth = window.innerWidth;

    // Conditionally apply styles based on screen size
    const style = screenWidth >= 1024 ? { transformStyle: "preserve-3d", transform } : {};

    return (
        <div id='about'  className="h-screen flex justify-center items-center">
            <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={style}
            className="relative w-full rounded-2xl text-white hover:bg-stone-800 "
            >
            <div
                style={{transform: "translateZ(4rem)", transformStyle: "preserve-3d",}}
                className='   w-full rounded-2xl flex flex-col justify-between hover:bg-stone-950  group'
            >
                <div 
                    style={{ transformStyle: "preserve-3d",}}
                    className='border-2 border-zinc-900 rounded-xl w-full min-h-[30rem] flex flex-col md:flex-row justify-between md:justify-evenly md:px-10 items-center md:items-start lg:items-center py-10 '>
                    <div 
                    style={{transform: "translateZ(2rem)", transformStyle: "preserve-3d",}}
                    className='border border-zinc-800 rounded-bl-xl rounded-tr-xl w-[6rem] h-[8rem] md:h-[18rem] md:w-[14rem] lg:h-[22rem] lg:w-[18rem] relative'>
                            <div  className='bg-gray-300 blur-xl  opacity-15 group-hover:opacity-40   absolute top-[-1.8rem] left-[-1.5rem] rounded-bl-xl rounded-tr-xl w-[6rem] h-[8rem] md:h-[18rem] md:w-[14rem] lg:h-[22rem] lg:w-[18rem] '/>
                            <img style={{transform: "translateZ(4rem)", transformStyle: "preserve-3d",}} src={profileimg} className=' grayscale   absolute top-[-1.8rem] left-[-1.5rem] rounded-bl-xl rounded-tr-xl w-[6rem] h-[8rem] md:h-[18rem] md:w-[14rem] lg:h-[22rem] lg:w-[18rem] '/>
                    </div>
                    <div
                    style={{transform: "translateZ(2rem)", transformStyle: "preserve-3d",}}
                    className='md:border-2 border-stone-700 p-6 border-opacity-30 rounded-md h-[50%] md:h-[100%] md:w-[60%]  flex flex-col justify-evenly gap-4'>
                        <div style={{ transformStyle: "preserve-3d",}} className='border-b border-stone-700'>
                            <Title 
                                text= 'About' 
                                bgtext='About' 
                                classes="text-[1.2rem] md:text-[2rem] lg:text-[3.4rem]"
                                bgclasses="text-[1.8rem] md:text-[2.4rem] lg:text-[4.4rem]"
                            />
                        </div>
                        <div style={{transform: "translateZ(5rem)", transformStyle: "preserve-3d",}} className='group-hover:bg-stone-900 opacity-80 hover:opacity-100  rounded-md text-[.6rem] md:text-[.7rem] lg:text-[1rem] p-1 sm:overflow-scroll max-h-[18rem] font-[TRANSFORMA] hide_scrollbar'>
                            <p className='text-justify font-normal leading-[1.1rem] lg:leading-[1.5rem]'>
                            Hey there! 👋 I'm Debojeet Karmakar, a passionate 3rd-year <span className="underline decoration-red-500 decoration-2">B.Tech</span> student majoring in <span className="text-red-500 font-bold bg-stone-300 p-[2px] md:p-1 rounded-md">Computer Science</span> with a love for <span className="underline decoration-teal-500 font-bold decoration-2 md:decoration-[3px]"> web development</span>. I enjoy creating captivating digital experiences through <span className="bg-amber-400 p-[3px] md:text-[.9rem] text-black font-bold rounded-full">frontend development</span>. When I'm not coding, you'll find me <span className="text-amber-400">painting or sketching</span>, as I love expressing creativity on both canvas and screen. Nature also inspires me, and I often seek tranquility in the mountains and the gentle caress of the wind. Whether designing intuitive UIs or coding responsive layouts, <span className="underline decoration-[2px] underline-offset-4">I thrive in peaceful environments where I can let my creativity flow</span>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
        </motion.div>
        </div>
    )
}

