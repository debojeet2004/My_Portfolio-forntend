import {BreadCrumb, Container, ExperienceCard, Title} from '../../Components/compnents'

import {expdata} from './ExperienceData'

function Experiences() {
    return (
    <Container>
        <div className=' w-full p-4 h-[58rem] flex flex-col justify-start items-center gap-6'>
            <div className='border-b-2 border-stone-800 w-full'>
                <Title 
                    text="Journey" 
                    bgtext="Experiences"
                    classes="text-[1.2rem] md:text-[2rem] lg:text-[3.4rem]"
                    bgclasses="text-[1.3rem] md:text-[2.4rem] lg:text-[4.4rem]"
                />
            </div>
            <div className='px-4 w-full'>
                <BreadCrumb linkname="Experiences" secondlinkname=".." />
            </div>
            <div className='p-2  w-full overflow-scroll hide_scrollbar flex flex-wrap justify-center md:justify-start items-start gap-4 md:gap-[2rem]'>
                {
                    expdata.map((exp, index) => (
                        <ExperienceCard
                        key={index}
                        title={exp.title}
                        subtitle={exp.subtitle}
                        date={exp.date}
                        description={exp.description}
                        linkto={exp.linkto}
                        />
                    ))
                }
            </div>
        </div>
    </Container>
    )
}

export default Experiences