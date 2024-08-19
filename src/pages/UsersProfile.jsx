import React, { useEffect, useState } from 'react'
import Profile from '../components/Profile';
import { useParams } from 'react-router-dom';

const UsersProfile = () => {

    const param = useParams();
    const[userDetail, setUserDetail] = useState({})

    useEffect(() => {
    const abortController = new AbortController();

        fetch(`https://dummyjson.com/users/${param.id}`)
        .then(res => res.json())
        .then(data => setUserDetail(data));

        return () => abortController.abort();
    }, [param.id]);

    console.log('userDatail', userDetail);
    
    
  return (
    <div className='userProfileWrapper'>
        {
            userDetail ?
            <Profile userDetail={userDetail}/>:
            <span className='loading'>Loading...</span>

        }
    </div>
  )
}

export default UsersProfile