import {Typewriter} from 'react-simple-typewriter'
import {Button, Magnetic_button ,Ellipses} from '../compnents'
import { liquid } from '../../Assets/assets'
// import CustomCursor from '../Custome_Cursor/CustomCursor';


function Introsection() {
    const handleButtonClick = () => window.open('https://drive.google.com/file/d/1j_fxoW2E98Wu7e2q6fO17GmN871rQpH1/view?usp=drive_link', '_blank');
    return (
        <div id='home' className='w-full h-[20rem] flex justify-start items-start flex-col gap-2 relative py-16 md:py-44
        md:h-[40rem] md:gap-4
        xl:h-[50rem] xl:gap-5
        '>
            {/* <CustomCursor /> */}
            <p className=' font-[TRANSFORMA] text-[.8rem] md:text-[1.7rem] lg:text-[2rem]'>Hey there! I am</p>
            <div className='font-[NIKEA] ' >
                <p className='FName  text-[1.4rem] md:text-[3.4rem] lg:text-[4rem] xl:text-[5rem]' >Debojeet</p>
                <p className='md:leading-[4.4rem] text-[1.6rem] md:text-[3.8rem] lg:text-[5rem] xl:text-[6rem]'>Karmakar</p>
            </div>
            <p className='font-[TRANSFORMA] text-[.8rem] md:text-[1.4rem]  xl:text-[1.8rem] tracking-[.3rem]  text-stone-400 '>
                <Typewriter
                    words={['Designer', 'Developer', 'Engineer', 'Ambivert!','Human :)']}
                    loop={true}
                    cursor
                    cursorStyle=' |'
                    typeSpeed={70}
                    deleteSpeed={60}
                    delaySpeed={1000}
                    // onLoopDone={handleDone}
                    // onType={handleType}
                />
            </p>
            <Button onClick={handleButtonClick}>Resume</Button>
            <div className='py-8'>
            <Magnetic_button/>
            </div>
            <img src={liquid} alt="" className='absolute w-[15rem] h-[15rem] md:w-[30rem] md:h-[30rem] lg:w-[40rem] lg:h-[40rem] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  lg:left-[30rem] lg:top-[22em] xl:top-[24em] xl:left-[60rem]  z-[-2] opacity-20 blur-[.3rem]'/>
            <Ellipses classes={`
                w-[20rem] 
                h-[20rem] 
                blur-[13rem]
                top-[1rem] 
                right-[0rem]
                opacity-50 
                bg-fuchsia-500 
            `}/>
            <Ellipses classes={`
                w-[10rem] 
                h-[10rem] 
                blur-[10rem]
                bottom-[10rem] 
                left-[-8rem]
                opacity-40 
                bg-sky-400 
            `}/>
        </div>
    )
}

export default Introsection
