import React from 'react'

function Title({text, bgtext, bgclasses, classes, style}) {
  return (
    <div style={{transform: "translateZ(1rem)",transformStyle: "preserve-3d"}} className=' font-[NIKEA] p-1 relative'>
        <p className={`w-full text-transparent opacity-30 md:opacity-80 text_stroke ${bgclasses}`}>{bgtext}</p>
        <p style={{transform: "translateZ(6rem)"}} className={`w-full absolute top-6 lg:top-10 left-3  ${classes}`}>{text}</p>
    </div>
  )
}

export default Title