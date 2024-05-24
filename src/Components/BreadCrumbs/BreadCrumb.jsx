import React from 'react';
import { Link } from 'react-router-dom';

function BreadCrumb({ linkto, linkname, secondlinkto, secondlinkname }) {
    return (
        <div className=' text-[1rem]  md:text-xl py-2 flex justify-start w-fit gap-2'>
            <div className='flex gap-1'>
                <Link to="/">Home</Link>
                <div>/</div>
            </div>
            <div className='flex gap-1'>
                <Link to={linkto ? linkto : ''}>{linkname}</Link>
                {secondlinkto || secondlinkname && <div>/</div>}
            </div>
            {secondlinkto || secondlinkname && (
                <div className='flex gap-1'>
                    <Link to={secondlinkto ? secondlinkto : ''}>{secondlinkname}</Link>
                </div>
            )}
        </div>
    );
}

export default BreadCrumb;
