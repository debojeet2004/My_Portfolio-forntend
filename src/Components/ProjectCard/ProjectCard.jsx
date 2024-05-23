import React from 'react';
import { Link } from 'react-router-dom';

function ProjectCard({ title, description, cardimage, linkto }) {
    return (
        <Link 
            to={`/project/${linkto}`} 
            className='border border-stone-900 w-[15rem] h-[12rem] md:w-[18rem] md:h-[14rem] lg:w-[25rem] lg:h-[18rem] p-2 md:p-4 flex flex-col justify-between items-center bg-stone-950 rounded-xl hover:scale-[1.02] hover:shadow-xl hover:shadow-black transition-transform ease group'
        >
            <img src={cardimage} alt="img" className='w-full h-[70%] border border-stone-800 bg-center bg-cover rounded-md opacity-70 group-hover:opacity-80' />
            <div className='w-full h-[25%] flex justify-start items-center bg-stone-900 rounded-lg'>
                <div className='w-full h-full rounded-lg px-2 p-2 flex flex-col justify-center items-start'>
                <p className='font-[TRANSFORMA] font-bold text-[1.2rem] md:text-[1.3rem]'>{title}</p>
                <p className='hidden md:inline-flex  font-[TRANSFORMA] text-xs line-clamp-1 opacity-70'>{description}</p>
                </div>
            </div>
        </Link>
    );
}

export default ProjectCard;
