import React from 'react'

const Profile = ({userDetail}) => {
  return (
    <div className='ProfileWrapper'>
        <div className='imageWrapper'>
        <img src={userDetail.image} alt='image'/>

        </div>
        <span className='userName'>{userDetail.firstName} <span>{userDetail.lastName}</span></span>
        <span className='userRole'>{userDetail.role}</span>

        <span className='userEmail'>{userDetail.email}</span>
        <span className='userPhone'>{userDetail.phone}</span>
    </div>
  )
}

export default Profile;