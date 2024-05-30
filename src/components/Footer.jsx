import React, { useContext } from 'react';
import UserContext from '../context/UserContext';
import "../css/home.css";

function Footer() {
  const { user } = useContext(UserContext);

  if (!user) return <h1>Not logged in</h1>;

  return (
    <div className='cen'>
      <h1>Hi! I am {user.username}</h1>
      <h1>{user.password}</h1>
    </div>
  );
}

export default Footer;
