import { motion, useMotionTemplate, useMotionValue, useSpring} from "framer-motion";
import {Title, DetailsCard, Technology_Card} from "../compnents";
import React, { useRef } from "react";
import {skills} from "./techstack";




// const ROTATION_RANGE = 32.5; //original value
const ROTATION_RANGE = 23;
const HALF_ROTATION_RANGE = 23 / 2;

export default  function MainCard ({text, bgtext, edu, tech, exp, project,connect}) {
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
    const style = screenWidth >= 1024 ? { transformStyle: "preserve-3d", transform } : {};
    const ids = [edu, tech, exp, project].filter(Boolean).join(' ');

    return (
        <div id={ids} className={` lg:p-[2.5rem] xl:p-[3rem] h-screen flex justify-center items-center `}>
        <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={style}
        className="relative h-fit w-full rounded-2xl text-white hover:bg-stone-900 ">
        <div
            style={{transform: "translateZ(3rem)", transformStyle: "preserve-3d",}}
            className=' border-2 border-stone-900  w-full p-4 rounded-2xl flex flex-col justify-between hover:bg-stone-950  group'>
            <div
                style={{transform: "translateZ(5rem)",transformStyle: "preserve-3d"}}
                className='border-b-2  border-stone-800 h-[4rem] md:h-[8rem]  flex justify-start items-center '>
                <Title text={text} bgtext={bgtext} 
                    classes="text-[1.2rem] md:text-[2rem] lg:text-[3.4rem]"
                    bgclasses="text-[1.3rem] md:text-[2.4rem] lg:text-[4.4rem] "
                    style
                />
            </div>
            {
            (edu) ? (
            <div
                style={{transform: "translateZ(12rem)",transformStyle: "preserve-3d"}}
                className=' w-full overflow-scroll hide_scrollbar h-[25rem] lg:h-[35rem] p-4 font-[TRANSFORMA] flex flex-col justify-evenly gap-10'
            >
                <DetailsCard 
                    timestamp={`2021-2025`} 
                    Title={`Bachler's In Computer Science Engineering`} 
                    subtitle={'Jis University'} 
                    Location={'Kolkata, West Bengal'}
                    // linkto={''}
                    style1 
                />
                <DetailsCard 
                    timestamp={`2019-2021`} 
                    Title={'Higher Secondary Schooling'} 
                    subtitle={'Rajkamal Saraswati Vidya mandir [Rsvm]'} 
                    Location={'Dhanbad, Jharkhand'}
                    // linkto={''}
                    style1 
                />
                <DetailsCard 
                    timestamp={`2005-2019`} 
                    Title={'Schooling'} 
                    subtitle={'Kids Garden '} 
                    Location={'Dhanbad, Jharkhand'}
                    // linkto={''}
                    style1 
                />
            </div>
            ) : (null)
            }
            {
            (exp) ? (
            <div 
                style={{transformStyle: "preserve-3d"}} 
                className=' w-full font-[TRANSFORMA] flex flex-col justify-evenly  rounded-xl gap-10 '
            >
                <div 
                    style={{transform: "translateZ(12rem)",transformStyle: "preserve-3d"}}
                    className=' w-full  max-h-[20rem] md:max-h-[45rem] flex flex-wrap justify-center md:justify-center xl:justify-center rounded-xl p-6 xl:p-4 gap-10 xl:gap-6 h-[20rem] lg:h-[40rem] xl:h-fit items-center overflow-scroll   hide_scrollbar '
                >
                    <DetailsCard 
                        borderrad 
                        description="Responsible for crafting visually captivating content, utilizing tools such as Figma for web design, and Adobe software like Photoshop and Premiere Pro for creating stunning graphics. Additionally, I excel in frontend development and design, ensuring seamless integration of visual elements into digital platforms." 
                        timestamp={`2023-2024`} 
                        Title={`Google Developer Student's Club {GDSC}`} 
                        subtitle={'Design and Content Head'} 
                        Location={'Jis University'}
                        classes={'transform- translateZ50px'}
                        linkto={'experiences'}
                        style1
                    />
                    <DetailsCard 
                        borderrad 
                        description="Led multiple teams within the core group, honing skills in teamwork, coordination, multitasking, and time management. Effectively tackled immediate team challenges, enhancing problem-solving and leadership capabilities." 
                        timestamp={`2022-2023`} 
                        Title={`Google Developer Student's Club {GDSC}`} 
                        subtitle={'Management Head'} 
                        Location={'Jis University'}
                        linkto={'experiences'}
                        style1
                    />
                </div>
            </div>
                ) : (null)
            }
            {
            (tech) ? (
            <div 
                style={{transformStyle: "preserve-3d"}}
                className=' w-full '>
                <div 
                    style={{transform: "translateZ(11rem)",transformStyle: "preserve-3d"}}
                    className=' w-full  maxh-[20rem] md:max-h-[40rem] flex flex-wrap justify-center md:justify-center xl:justify-center rounded-xl p-6 xl:p-4 gap-10 xl:gap-6 h-[20rem] lg:h-[40rem] xl:h-fit items-center overflow-scroll   hide_scrollbar '>
                {
                skills.map((skill,index) => {
                    return <Technology_Card
                        style
                        key={index}
                        img={skill.img}
                        text={skill.text}
                    />
                })
                }
                </div>
                
            </div>
            ) : (null)
            }
            {
            (project) ? (
            <div 
                style={{transformStyle: "preserve-3d"}}
                className=' w-full  flex  justify-center items-center md:justify-start   '>
                <div 
                    style={{transform: "translateZ(12rem)",transformStyle: "preserve-3d"}}
                    className=' p-6 flex flex-col gap-10 overflow-scroll max-h-[30rem] md:max-h-[40rem]  hide_scrollbar'>
                    <DetailsCard style2 project_title={`Sample-Ecom`} tech_used={`React-js, React-router, Redux-tookit, Axios, json-data Manupulation`} project_description={`Experience the future of online shopping with our Sample E-commerce Project. Powered by React.js and React Router, it offers a smooth, single-page application experience. Utilizing Redux Toolkit for state management and Axios for efficient API calls, coupled with seamless JSON data manipulation, this project provides a robust platform for building modern e-commerce solutions.`} />
                    <DetailsCard style2 project_title={`Currency Convertor`} tech_used={`Javascript, React-js, Json_data, Axois, Api-data Handling `} project_description={`Our Currency Converter leverages JavaScript and React.js to deliver a seamless user experience, enabling swift currency conversions. With Axios for API data handling and JSON data integration, users can effortlessly fetch real-time exchange rates, making it an essential tool for travelers and finance enthusiasts alike.`} />
                    <DetailsCard style2 project_title={`25+ javascript mini projects`} tech_used={`Html, css, javascript, vscode`} project_description={`Explore JavaScript fundamentals with our Interactive Weather Dashboard project, mastering API data handling, Axios for fetching, and dynamic DOM manipulation. This hands-on experience immerses you in real-world scenarios, reinforcing core concepts while crafting engaging user interfaces. Elevate your skills and showcase your expertise with this portfolio-worthy project, perfect for both beginners and experienced developers alike.`} />
                </div>
            </div>
            ) : (null)
            }
        </div>
        </motion.div>
    </div>
    );
}

