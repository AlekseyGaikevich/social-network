import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='https://www.w3schools.com/howto/img_snow.jpg' />
      </div>
      <div className = {s.discriptionBlock}>
        ava + discription
      </div>
    </div>
  )
}

export default ProfileInfo; 