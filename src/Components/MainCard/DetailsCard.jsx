import React from 'react'
import { Link } from 'react-router-dom'

export default function DetailsCard(
    {
    Title, 
    subtitle, 
    Location, 
    timestamp, 
    borderrad , 
    description,
    style1, style2,
    bulletpoints,
    project_title,
    tech_used,
    project_description,
    linkto,
    }) 
    {
    
    
    return (
        <div 
            className={` full font-[TRANSFORMA] border-2 rounded-lg ${!borderrad ? ('md:rounded-full') : ('md:rounded-2xl')} border-zinc-900 flex flex-col items-start px-4 md:px-20 py-4 group-hover:bg-stone-800  group-hover:bg-opacity-55 text-stone-400 hover:scale-[1.009] transition-transform ease  hover:text-stone-100 active:opacity-60 `}>
            {style1 && (
                <Link to={linkto ? linkto : '/'}  className='w-full'>
                    <p className=' w-full text-[1rem] md:text-2xl font-bold'>{Title}</p>
                    <div className='w-full flex flex-col justify-between items-start p-1'>
                        <div className='md:w-full flex flex-col md:flex-row justify-between items-center p-1'>
                            <div className='flex p-1'>
                                <div className='hidden md:flex w-[2rem] h-[2rem]  justify-center items-center'>
                                    <div className='bg-stone-300 h-2 w-2 rounded-full' />
                                </div>
                                <div className=''>
                                    <p className='text-sm md:text-lg font-semibold uppercase'>{subtitle}</p>
                                    <p className='text-[.7rem] text-sm'>{Location}</p>
                                    <p className='text-[.6rem] md:hidden'>{timestamp}</p>
                                </div>
                            </div>
                            <div className='sm:hidden md:flex'>
                                <p>{timestamp}</p>
                            </div>
                        </div>
                        {description && (
                            <p className='p-2 md:px-10 w-full text-justify overflow-scroll text-[.5rem] md:text-[.8rem] xl:text-[.9rem] opacity-60 max-h-[10rem] md:max-h-[20rem] hide_scrollbar line-clamp-4'>
                                {description}
                            </p>
                        )}
                    </div>
                </Link>
            )}
            {style2 && (
                <Link
                    to={'/project'}
                    className=' w-full flex justify-start p-2  gap-6 '>
                    <div className=' flex flex-col w-full '>
                        <p className=' text-[.9rem] md:text-[1.5rem] capitalize  font-bold'>{project_title}</p>
                        <p className=' text-[.7rem] md:text-[1rem]'>{tech_used}</p>
                        {!bulletpoints ? (
                            <p className='  text-[.5rem] md:text-[.8rem] text-justify line-clamp-2 max-h-[3rem] font-thin hide_scrollbar opacity-60'>
                            {project_description}
                        </p>
                        ) :  ('work in progress')}
                    </div>
                </Link>
            )}
        </div>
    )
}
