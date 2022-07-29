import Star from '../star.svg';
import Star2 from '../star-2.svg';
import React from 'react';

function StarTwo (){
    return(
        <div className='starts'>
            <img src={Star} /><img src={Star} /><img src={Star2} /><img src={Star2} /><img src={Star2} />
        </div>
    )
}
export default StarTwo;