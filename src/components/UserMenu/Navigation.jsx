import React from 'react';
import { NavLink } from "react-router-dom";

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

export const Navigation =()=> (
  <nav>
    <NavLink
     to="/"  style={styles.link} 
    //  activeStyle={styles.activeLink}
    >
      Home
    </NavLink>
    <NavLink
     to="/contacts" style={styles.link} 
    //  activeStyle={styles.activeLink}
    >
    ContactsUser
    </NavLink>
  </nav>
)