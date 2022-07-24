
import React from 'react';
import home from '../images/home.svg';
import stat from '../images/stats.svg';
import chat from '../images/chat.svg';
import folder from '../images/folder.svg';
import calender from '../images/calendar.svg';
import settings from '../images/settings.svg';
import logout from '../images/logout.svg'
import '../App.css';

function SideNav() {
  return (
    <div className='sidenav'>
      <div className='title'>.taskez</div>
      <div className='grid'>
        <div className='part'><img src={home} /> <span className='normal'>Overview</span></div>
        <div className='part' id='space'><img src={stat} /> <span className='normal'>Stats</span></div>
        <div className='part select' id='space'><img src={folder} /> <span className='dark'>Projects</span></div>
        <div className='part' id='space'><img src={chat} /> <span className='normal'>Chat</span></div>
        <div className='part' id='space'><img src={calender} /> <span className='normal'>Calendar</span></div>

      </div>
      <div className='grid' id='sett'>
      <div className='part'><img src={settings} /> <span className='normal'>Settings</span></div>
        <div className='part logout' id='space'><img src={logout} /> <span className='normal'>Log Out</span></div>
      </div>
    </div>
  )
}
export default SideNav;