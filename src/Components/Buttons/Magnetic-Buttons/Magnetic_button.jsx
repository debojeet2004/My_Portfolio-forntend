import GsapMagnetic from './gsap';
import {instagram, linkedin,  github_2, twitter, email } from '../../../Assets/assets'


export default function Magnetic_button() {
    return (
        <div className='lg:h-[5rem] flex justify-between items-center min-w-[6rem] md:w-[15rem] lg:w-[22rem] '>
            <GsapMagnetic>
                <a href="https://www.instagram.com/debojeet_2004/?next=%2Faccounts%2Fpassword%2Freset%2F&hl=en" target='_blank'>
                    <img src={instagram} alt="" className=' w-[1rem] md:w-[2rem] lg:w-[2.5rem] hover:lg:w-[3.4rem] transition-all ease-linear '/>
                </a>
            </GsapMagnetic>
            <GsapMagnetic>
                <a href="https://www.linkedin.com/in/debojeet-karmakar-852820210/" target='_blank'>
                    <img src={linkedin} alt="" className=' w-[1rem] md:w-[2rem] lg:w-[2.5rem] hover:lg:w-[3.4rem] transition-all ease-linear '/>
                </a>
            </GsapMagnetic>
            <GsapMagnetic>
                <a href="https://twitter.com/debojeetKarmkar" target='_blank'>
                    <img src={twitter} alt="" className=' w-[1rem] md:w-[2rem] lg:w-[2.5rem] hover:lg:w-[3.4rem] transition-all ease-linear '/>
                </a>
            </GsapMagnetic>
            <GsapMagnetic>
                <a href="https://github.com/debojeet2004 " target='_blank'>
                    <img src={github_2} alt="" className=' w-[1rem] md:w-[2rem] lg:w-[2.5rem] hover:lg:w-[3.4rem] transition-all ease-linear '/>
                </a>
            </GsapMagnetic>
            <GsapMagnetic>
                <a href="mailto:debojeetkarmakar2020@gmail.com" target='_blank'>
                    <img src={email} alt="" className=' w-[1rem] md:w-[2rem] lg:w-[2.5rem] hover:lg:w-[3.4rem] transition-all ease-linear '/>
                </a>
            </GsapMagnetic>
        </div>
    )
}