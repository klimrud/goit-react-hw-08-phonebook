import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  link: {
  display: 'inline-block',
  textDecoration: 'none',
  padding: 12,
  fontWeight: 700,
  color: '#fff',
},
  activeLink: {
color: '#FFD700'
}
}

export const AuthNav =() =>{
  return (
    <div>
<NavLink to="/register"  style={styles.link} 
// activeStyle={styles.activeLink}
>
Sing Up
</NavLink>
<NavLink to="/login" style={styles.link} 
// activeStyle={styles.activeLink}
>Log in
</NavLink>
    </div>
  )
}