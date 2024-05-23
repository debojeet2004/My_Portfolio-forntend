import React from 'react'
import { Link } from 'react-router-dom'

function ExperienceCard({ title,subtitle,date, description, linkto }) {
    return (
        <Link
            to={`/experiences/${linkto}`} 
            className='border font-[TRANSFORMA] border-stone-800 p-4 bg-stone-950 w-full h-[18rem] md:min-h-[20rem] rounded-md flex flex-col justify-around hover:scale-[1.01] hover:shadow-md hover:shadow-black transition-transform ease '>
            <div className='p-4 rounded-md bg-stone-900 h-[10rem]  flex flex-col md:flex-row justify-between items-start md:items-center'>
                <div className=' w-full md:w-[80%]  flex flex-col gap-1'>
                    <p className='text-[.9rem] md:text-[1.4rem] lg:text-[1.6rem] font-bold'>{title}</p>
                    <p className='text-[.8rem] md:text-[1.2rem]'>{subtitle}</p>
                </div>
                <p className='  w-full md:w-[20%] text-left md:text-right  py-1 text-[.6rem] md:text-[1.2rem] font-thin'>{date}</p>
            </div>
            {/* <p className='bg-stone-900 opacity-55 md:h-[4rem]  text-justify overflow-clip  hide_scrollbar px-4 text-stone-400  line-clamp-2'>{description}</p> */}
            <p className=' line-clamp-3 md:text-justify text-[.9rem] md:text-[1rem] px-2 md:py-1 md:px-4 text-stone-500 bg-stone-900 rounded-md  '>{description}</p>

        </Link>
    )
}

export default ExperienceCard
