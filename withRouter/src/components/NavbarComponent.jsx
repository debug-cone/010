import React from 'react'
import { Link, NavLink } from 'react-router-dom';


function NavbarComponent() {
    let routers = ['Products', 'About', 'Contact'];
    // let pathName = window.location.pathname.slice(1);

    return (
        <div className='container mx-auto flex items-center justify-between h-[120px]'>
            <h1>Without Router</h1>

            <ul className='flex gap-[20px]'>
                {routers.map((el, ind) => {
                    return (
                        <li key={ind}>
                            {/* <a 
                                href={`/${el.toLowerCase()}`}
                                className={pathName === el.toLowerCase() ? 'active' : ''}
                            >
                                {el}
                            </a> */}

                            <NavLink to={`/${el.toLowerCase()}`}>{el}</NavLink>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default NavbarComponent