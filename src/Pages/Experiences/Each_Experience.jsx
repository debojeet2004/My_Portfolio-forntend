import React, { useEffect, useState } from 'react'
import { BreadCrumb, GsapMagnetic } from '../../Components/compnents';
import {expdata} from './ExperienceData'
import { useParams } from 'react-router-dom';
import { linkedin as linkedinIcon, github_2 as githubIcon } from '../../Assets/assets';

import { ecom } from '../Projects/images/imgs'

function Each_Experience() {
    const { experiencename } = useParams();
    const [experience, setexperience] = useState(null);

    useEffect(() => {
        const experienceData = expdata.find(e => e.linkto === experiencename);
        setexperience(experienceData);
        }, [experiencename]);
    
        if (!experience) {
        return <div>page not found</div>;
        }
    
    const { title, subtitle , description,date, images, linkedin, company,companylink, linkto } = experience;
    return (
        <div className='capitalize h-[58em] font-[TRANSFORMA] w-full flex flex-col justify-start items-start gap-[2rem] p-4'>
            <div className=''>
                <BreadCrumb linkname="Experiences" linkto="/Experiences" secondlinkname={linkto} />
            </div>
            <div className='border-b  border-stone-700 font-[NIKEA] w-full text-[1.5rem] md:text-[2.5rem]'>{title}</div>
            <div className=' w-[60%] text-[1rem] md:text-[1.2rem]  flex-col justify-between opacity-70 gap-10 md:flex-row '>
                <a href={companylink} target='blank' className='text-sky-400 hover:underline font-bold underline-offset-4 decoration-[2px]'>{company} 🔗</a>
                <p>{subtitle}</p>
                <p>{date}</p>
            </div>
            <div className=' p-1 w-full flex flex-col-reverse md:flex-row justify-between gap-[2rem] overflow-hidden'>
                <div className=' w-full md:w-[60%] gap-[2rem] flex flex-col justify-start'>
                    <p className=' max-h-[20rem] md:max-h-[20rem] lg:max-h-[40rem] overflow-scroll lg:overflow-auto hide_scrollbar text-left md:text-justify leading-[1.6rem]'>{description}</p>
                    {
                    (linkedin ) &&
                        (<div className='w-full flex justify-start py-2 items-center'>
                        <p>Links:</p>
                        <div className='w-[8rem] flex justify-start gap-5 px-4'>
                            {linkedin &&  
                            <GsapMagnetic> 
                                <a href={linkedin} target='_blank' rel="noopener noreferrer">
                                    <img src={linkedinIcon} alt="LinkedIn" className='w-8'/>
                                </a>
                            </GsapMagnetic>
                            }
                        </div>
                        </div>) 
                    }
                </div>
                <div className=' w-[100%] max-h-[20rem] md:w-[35%] lg:px-8  lg:max-h-[40rem] overflow-scroll hide_scrollbar flex flex-col justify-start items-start gap-[1rem]'>
                    {/* <img  src={ecom} alt='imgss' className='border w-[10rem] h-[5rem] md:w-[100%] md:h-[10rem] lg:h-[15rem]' /> */}
                    {images && images.map((img, index) => (
                        <img key={index} src={img} alt={`exp ${index + 1}`} className='border-4 opacity-70 hover:opacity-100 border-stone-800 w-[10rem] h-[5rem] md:w-[100%] md:h-[10rem] lg:h-[15rem]' />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Each_Experience



