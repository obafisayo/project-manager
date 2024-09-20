import React from 'react'

interface HamburgerProps {
    clicked: boolean,
    handler: () => void;
}
const Hamburger:React.FC<HamburgerProps> = ({clicked, handler = () => {}}) => {
    return (
        <div className="sm:hidden ml-5 w-11 h-11 flex flex-col justify-center gap-3 items-center cursor-pointer"
            onClick={handler}>
            <span className={`border-2 border-black dark:border-brandOffwhite w-8 transition-transform duration-300 ${clicked ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`border-2 border-black dark:border-brandOffwhite w-8 transition-transform duration-300 ${clicked ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </div>
    )
}

export default Hamburger;
