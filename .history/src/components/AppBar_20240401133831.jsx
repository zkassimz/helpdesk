
import React from 'react';
import { MdAdd, MdSearch, MdExitToApp } from 'react-icons/md';
import './css/AppBar.css';
import OpenChamadoDialog from './components/'; 

const AppBar = () => {

  
  return (
    <div className="appbar">
      <div className="appbar-left">
        <div className="appbar-item" onClick={AbrirChamados}>
          <MdAdd size={24} />
          <span>Abrir Chamado</span>
        </div>
        <div className="appbar-item" onClick={() => console.log("Consultar/Atender")}>
          <MdSearch size={24} />
          <span>Consultar/Atender</span>
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
