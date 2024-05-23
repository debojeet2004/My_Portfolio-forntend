function Technology_Card({text, img}) {
    return (
        <div 
            style={{transform: "translateZ(13rem)",transformStyle: "preserve-3d"}} 
            className='cursor-default bg-stone-900 hover:bg-black relative overflow-hidden border min-w-[10rem] min-h-[3rem] md:w-[14rem] md:h-[5rem] lg:w-[18rem] lg:h-[6rem] rounded-xl border-stone-800 group flex  justify-start items-center p-4 gap-4 hover:shadow-md hover:shadow-stone-900'
        >

            <img style={{transform: "translateZ(10rem)",transformStyle: "preserve-3d"}}  src={img} className='md:grayscale group-hover:grayscale-0 w-[1.6rem] h-[1.6rem] lg:w-[3rem] lg:h-[2.6rem] hidden md:inline-block' />
            <p className='text-[.8rem] md:text-[1rem] font-[NIKEA] bg-cover bg-center'>{text}</p>
            <div className='absolute top-1/2 left-3 transform -translate-x-1/2 -translate-y-1/2 w-[3rem] h-[3rem] group-hover:w-[4rem] group-hover:h-[4rem] bg-stone-500 blur-xl rounded-full opacity-50 group-hover:opacity-80 z-[-2] transition-all duration-300 ease-in-out'/>
        </div>
    )
}

export default Technology_Card