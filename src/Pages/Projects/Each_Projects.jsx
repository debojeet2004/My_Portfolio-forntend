import React, { useEffect, useState } from 'react';
import { GsapMagnetic } from '../../Components/compnents';
import { linkedin as linkedinIcon, github_2 as githubIcon } from '../../Assets/assets';
import BreadCrumb from '../../Components/BreadCrumbs/BreadCrumb';
import { useParams } from 'react-router-dom';
import { projectsdata } from './ProjectsData'; // Import your projects data

function Each_Projects() {
  const { projectname } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const projectData = projectsdata.find(p => p.linkto === projectname);
    setProject(projectData);
  }, [projectname]);

  if (!project) {
    return <div className='h-[30rem] w-full flex justify-center items-center border text-[4rem] font-[TRANSFORMA] font-bold'>Project not found</div>;
  }

  const { title, techstack, description, images, linkedin, github, linkto } = project;

  return (
    <div className='min-h-[55em] font-[TRANSFORMA] w-full flex flex-col justify-start items-start gap-[2rem] p-4'>
      <div className=''>
        <BreadCrumb linkname="Project" linkto="/project" secondlinkname={linkto} />
      </div>
      <div className='border-b  border-stone-700 font-[NIKEA] w-full text-[1.5rem] md:text-[2.5rem]'>{title}</div>
      <div className='w-full text-[1rem] md:text-[1.2rem] flex flex-col md:flex-row gap-2'>
        <p>Tech stack:</p>
        <p>{techstack}</p>
      </div>
      <div className='w-full flex flex-col-reverse md:flex-row justify-between gap-[2rem]'>
        <div className='w-full md:w-[60%] gap-[2rem] flex flex-col justify-start'>
          <p className='max-h-[10rem] md:max-h-[20rem] lg:max-h-[35rem] overflow-scroll hide_scrollbar'>{description}</p>
          {(linkedin || github) &&
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
              {github && 
              <GsapMagnetic> 
                <a href={github} target='_blank' rel="noopener noreferrer">
                  <img src={githubIcon} alt="GitHub" className='w-8'/>
                </a>
              </GsapMagnetic>
              }
            </div>
          </div>) 
          }
        </div>
        <div className=' w-[100%] md:w-[35%] lg:px-8 lg:max-h-[40rem] overflow-scroll hide_scrollbar flex flex-col justify-start items-start gap-[1rem]'>
          {images && images.map((img, index) => (
            <img key={index} src={img} alt={`Project ${index + 1}`} className='border-4 opacity-70 hover:opacity-100 border-stone-800 w-[10rem] h-[5rem] md:w-[100%] md:h-[10rem] lg:h-[15rem]' />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Each_Projects;
