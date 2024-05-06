
import React from 'react';
import { MdAdd, MdSearch, MdExitToApp, MdSettings } from 'react-icons/md';
import './css/AppBar.css';

const AppBar = () => {

  
  return (
    <div className="appbar">
      <div className="appbar-left">
       
       
        <div className="appbar-item" onClick={() => console.log("Consultar/Atender")}>
          <MdSettings size={} />
          <span>Help Desk</span>
        </div>
      </div>
      <div className="appbar-right">
        <span>Kássio </span>
        <div className="logout-button" onClick={() => console.log("Logout")}>
          <MdExitToApp size={24} />
        </div>
      </div>
    </div>
  );
};

export default AppBar;
