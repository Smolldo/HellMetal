import React from 'react'
import LoginControl from './LoginControl'
export default function Header(){
    
    return (
        <header>
            <div>
            <span className='logo'>Hell Metal</span>
                <ul className='nav'>
                <li><a target='_blank' rel='noopener noreferrer' href='https://www.youtube.com/watch?v=NX-Sx64z8O8&list=RDMMNX-Sx64z8O8&start_radio=1'>SUFFER</a></li>
                <li><a target='_blank' rel='noopener noreferrer' href='https://www.youtube.com/watch?v=eqfZkLntTsA'>PAIN</a></li>
                <li><a target='_blank' rel='noopener noreferrer' href='https://www.youtube.com/watch?v=oqdZpxkzNvc&list=RDMMNX-Sx64z8O8&index=4'>ALCOHOL</a></li>
                </ul>
            </div>
            <div className='baner'></div>
        </header>
        
    )
}