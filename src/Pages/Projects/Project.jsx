import React from 'react';
import { ProjectCard, Title } from '@/Components/compnents';
import { projectsdata } from './ProjectsData'; // Import your projects data
import {BreadCrumb} from '../../Components/compnents'

function Project() {
    return (
        <div className=' w-full p-4 min-h-[50rem] flex flex-col justify-start items-center gap-6'>
        <div className='border-b-2 border-stone-800 w-full'>
            <Title 
            text="Projects" 
            bgtext="Compositions"
            classes="text-[1.2rem] md:text-[2rem] lg:text-[3.4rem]"
            bgclasses="text-[1.3rem] md:text-[2.4rem] lg:text-[4.4rem]"
            />
        </div>
        <div className='px-4 w-full'>
            <BreadCrumb linkname="Project" secondlinkname=".." />
        </div>
        <div className=' h-[40rem] w-full overflow-scroll hide_scrollbar flex flex-wrap justify-center md:justify-start items-start gap-4 md:gap-[2rem]'>
            {projectsdata.map((data, index) => (
            <ProjectCard 
                key={index} 
                title={data.title} 
                description={data.description} 
                cardimage={data.cardimage} 
                linkto={data.linkto}
                techstack={data.techstack}
                Linkedin={data.linkedin}
                Github={data.github}
                images={data.images}
            />
            ))}
        </div>
        </div>
    );
}

export default Project;
