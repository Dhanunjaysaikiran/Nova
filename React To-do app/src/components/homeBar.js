import React, { useEffect, useState } from 'react';
import images from '../images/images.svg';
import prof from '../images/prof.svg';
import search from '../images/search.svg'
import close from '../images/close.svg'
import '../App.css';

function HomeBar() {
  const [users, setData] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users').then((result) => {
      result.json().then((resp) => {
        setData(resp)
      })
    })
  }, [])

  function toggle() {
    let a = document.getElementById('tab');

    if (a.style.display == 'none') {
      a.style.display = 'block';

    }
    else {
      a.style.display = 'none';
    }

  }
  return (
    <div className='search-bar'>
      <div className='sec1'>
        <img src={search} alt='Search' />
        <input placeholder='Search'></input>
      </div>
      <img id='click-img' src={images} onClick={toggle} />
      <div className='profile'>
        <span>Hi Soundary</span>
        <img src={prof} />
      </div>
      <div className='members' id='tab'>
        <div className='flex bet'>
          <span>Project Members
            <div id='line'></div>
          </span>
          <img src={close} id="end" onClick={toggle} />
        </div>
        <div className='grid-box'>
          {users.sort((a, b) => a.id > b.id ? 1 : -1).map((users) => {
            return (
              <div className='flex' key={users.id}>
                <img src={prof} />
                <div className='info'>
                  <h1 className='profilename'>{users.name}</h1>
                  <h1 className='email'>{users.email}</h1>
                </div>
              </div>
            )
          })}

        </div>

      </div>
    </div>
  )
}
export default HomeBar;