import React from 'react'
import { Link } from 'react-router-dom'

function Button({children,onClick, NavigateTo}) {
    return (
        <Link 
            to={NavigateTo} 
            onClick={onClick}
            className="
            flex justify-center items-center
            text-zinc-500  
            font-[TRANSFORMA]  font-bold
            text-[.6rem] md:text-[1.2rem] lg:text-[1.3rem]
            w-[5rem] md:w-[10rem] lg:w-[11rem] xl:w-[12rem]
            h-[2rem] md:h-[3rem] 
            rounded-[2rem] 
            hover:text-white 
            transition-all 
            duration-300 
            ease-in-out
            border-[.2rem] border-zinc-800 hover:border-zinc-800 border-opacity-35 active:border-zinc-600
            md:p-6
            hover:shadow-[0_0px_10px_2px] hover:shadow-stone-800
            "
        > {children}
        </Link>
    )
}

export default Button

// bg-gradient-to-r from-cyan-950 to-zinc-950  
// hover:bg-zinc-800 
// shadow-sm shadow-cyan-900 

