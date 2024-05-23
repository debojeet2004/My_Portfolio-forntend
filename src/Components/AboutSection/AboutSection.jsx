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
                    className='border-2 border-stone-900 border-opacity-30 rounded-md h-[50%] md:h-[100%] md:w-[60%] p-2 flex flex-col justify-evenly gap-4'>
                        <div style={{ transformStyle: "preserve-3d",}} className='border-b border-stone-700'>
                            <Title 
                                text= 'About' 
                                bgtext='About' 
                                classes="text-[1.2rem] md:text-[2rem] lg:text-[3.4rem]"
                                bgclasses="text-[1.8rem] md:text-[2.4rem] lg:text-[4.4rem]"
                            />
                        </div>
                        <div style={{transform: "translateZ(5rem)", transformStyle: "preserve-3d",}} className='group-hover:bg-stone-900 opacity-80 hover:opacity-100  rounded-md text-[.6rem] md:text-[.7rem] lg:text-[1rem] p-1 sm:overflow-scroll max-h-[18rem] font-[TRANSFORMA] hide_scrollbar'>
                            <p className='text-justify'>
                            Hey there! 👋 I'm Debojeet Karmakar, a passionate 3rd-year <span className='underline decoration-[.2rem] decoration-red-600'>B.Tech</span> student majoring in <span className='underline decoration-[3px] decoration-sky-500'>Computer Science</span> with a keen interest in web development. Exploring the world of technology, I've found my calling in crafting captivating digital experiences through <span className='bg-amber-500 p-1 rounded-full text-black font-bold'>frontend development</span>.
                            When I'm not diving into the depths of code, you'll likely find me lost in the strokes of my paintbrush, indulging in my love for drawing and painting. Creativity fuels my soul, whether I'm bringing a website to life with intuitive <span className='bg-yellow-200 rounded-full p-[2px] text-black font-bold'>UI designs</span> or expressing myself on canvas.
                            In addition to my digital endeavors, <span className='decoration-2px underline decoration-green-600 decoration-[3px]'>Nature's embrace offers me solace and inspiration.</span> There's something magical about the tranquility of mountains and the gentle caress of the wind. I'm often drawn to the great outdoors, seeking moments of serenity amidst the beauty of Mother Nature.
                            One of my favorite things about my craft is the tranquility it brings. I thrive in peaceful environments, where I can immerse myself in my work and let my creativity flow freely. Whether it's designing a sleek user interface or coding a responsive layout, I find solace in the process.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
        </motion.div>
        </div>
    )
}



{/* <div id='about' className='border-2 mt-[20rem] border-zinc-900 rounded-xl w-full min-h-[30rem] flex flex-col md:flex-row justify-between md:justify-evenly md:px-10 items-center md:items-start lg:items-center py-10 '>
        <div className='border border-zinc-500 rounded-bl-xl rounded-tr-xl w-[6rem] h-[8rem] md:h-[18rem] md:w-[14rem] lg:h-[22rem] lg:w-[18rem] relative'>
                <div  className='bg-gray-300 blur-xl opacity-15   absolute top-[-1.8rem] left-[-1.5rem] rounded-bl-xl rounded-tr-xl w-[6rem] h-[8rem] md:h-[18rem] md:w-[14rem] lg:h-[22rem] lg:w-[18rem] '/>
                <img src={profileimg} className='grayscale   absolute top-[-1.8rem] left-[-1.5rem] rounded-bl-xl rounded-tr-xl w-[6rem] h-[8rem] md:h-[18rem] md:w-[14rem] lg:h-[22rem] lg:w-[18rem] '/>
        </div>
        <div className=' h-[50%] md:h-[100%] md:w-[60%] p-2 flex flex-col justify-evenly gap-4'>
            <div className='border-b border-stone-700'>
                <Title 
                    text= 'About' 
                    bgtext='About' 
                    classes="text-[1.2rem] md:text-[2rem] lg:text-[3.4rem]"
                    bgclasses="text-[1.8rem] md:text-[2.4rem] lg:text-[4.4rem]"
                />
            </div>
            <div className=' text-[.6rem] md:text-[.7rem] lg:text-[1rem] p-1 sm:overflow-scroll max-h-[18rem] font-[TRANSFORMA] hide_scrollbar'>
                <p className='text-justify'>
                Hey there! 👋 I'm Debojeet Karmakar, a passionate 3rd-year <span className='underline decoration-[.2rem] decoration-red-600'>B.Tech</span> student majoring in <span className='underline decoration-[3px] decoration-sky-500'>Computer Science</span> with a keen interest in web development. Exploring the world of technology, I've found my calling in crafting captivating digital experiences through <span className='bg-amber-500 p-1 rounded-full text-black font-bold'>frontend development</span>.
                When I'm not diving into the depths of code, you'll likely find me lost in the strokes of my paintbrush, indulging in my love for drawing and painting. Creativity fuels my soul, whether I'm bringing a website to life with intuitive <span className='bg-yellow-200 rounded-full p-[2px] text-black font-bold'>UI designs</span> or expressing myself on canvas.
                In addition to my digital endeavors, <span className='decoration-2px underline decoration-green-600 decoration-[3px]'>Nature's embrace offers me solace and inspiration.</span> There's something magical about the tranquility of mountains and the gentle caress of the wind. I'm often drawn to the great outdoors, seeking moments of serenity amidst the beauty of Mother Nature.
                One of my favorite things about my craft is the tranquility it brings. I thrive in peaceful environments, where I can immerse myself in my work and let my creativity flow freely. Whether it's designing a sleek user interface or coding a responsive layout, I find solace in the process.
                </p>
            </div>
        </div>
</div> */}