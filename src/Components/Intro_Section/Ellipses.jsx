
function Ellipses({classes}) {
    return (
        <div
            className={`
            ${classes}
                backdrop-blur-lg 
                rounded-full 
                z-[-5]
                absolute
                md:flex
                hidden
            `}
        />
    )
}

export default Ellipses