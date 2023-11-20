import React, { useState, useEffect } from 'react';

function UserData() {
const [userData, setUserData] = useState([]);

  useEffect(() => {           
      fetch('https://reqres.in/api/users?page=2') // Replace with your backend API endpoint
      .then((response)=> response.json())
      .then((data)=> setUserData(data.data))
      .catch(err=>console.log(err))
  },[])
  return (
   <div>
    <h1>Fetch Data</h1>
    <ul>
      {userData.map((list,index)=>(
        <li key={index}> <img src={list.avatar}/> <br/>{list.id}  <br/>{list.first_name}<br/> {list.last_name} <br/> {list.email}</li>
      ))}
    </ul>
   </div>
  )
}
export default UserData;