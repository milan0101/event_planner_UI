import React from 'react';
import './Navbar.scss';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';

function Navbar() {
    return (
        <div className='nav'>
            <SearchIcon className='search'></SearchIcon>
            <input className='inputs'></input>
            <PersonIcon className='user'></PersonIcon>
        </div>
    )
}

export default Navbar