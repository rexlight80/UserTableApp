import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom';

const Table = () => {

  const[users, setUsers] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {

    const abortController = new AbortController();
    fetch('https://dummyjson.com/users')
    .then(res => res.json())
    .then(data => setUsers(data.users));

    return () => abortController.abort()
  }, []);

  const onHandleClick = (e, id) => {
       e.preventDefault();
       navigate(`/${id}`)
  }
  

return (
    <table className='userTableContainer'>

        <thead>
          <th>FirstName</th>  
          <th>LastName</th>
          <th>Age</th>
          <th>Gender</th>  
        </thead>
        <tbody>
          {
            users.length > 0 ?
            users.map((user,index) => (
              <tr onClick={((e) => onHandleClick(e, user.id))} key={index}>
                <td>
                 
                   {user.firstName}
              
              </td>
              
                  <td>
                     {user.lastName}
                  </td>
                   <td>
                   
                  {user.age}
                   
                  </td>
                   <td>
                   
                    {user.gender}
                  
                    </td>
               </tr>
            )):
            <span className='loading'>Loading...</span>

          }
           
        </tbody>
    </table>
  )
}

export default Table