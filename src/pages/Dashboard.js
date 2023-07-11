
import React from 'react';

import Auth from '../utils/auth';
import DemoPie from '../Components/Chart';

export default function Dashboard() {

  
  if(Auth.loggedIn()) {
    return(
      <>
        <h2>Dashboard</h2>

        <DemoPie />
      </>
    );
  }
  else {
    window.location.assign('/login');
  }

}