import React from 'react';
import './Volunteering.scss';
import FavoriteIcon from '@mui/icons-material/Favorite';
function Volunteering() {
    return (
        <div className='vbody'>
            <div className='content'>
                <p className='vhead'>Volunteering</p>
                <div className='icon'>
                    <FavoriteIcon className='fav'></FavoriteIcon>
                </div>
            </div>
        </div>
    )
}

export default Volunteering