import React from 'react';
import './css/SideBar.css';
import { MdAdd, MdSearch, MdExitToApp, MdSettings, MdSelectAll, MdTimer10Select, Md30FpsSelect, MdSend, MdAddCircle } from 'react-icons/md';
const Sidebar = ({ setCurrentPage }) => {
  const handleClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
       
      </div>
      <ul className="menu">
        <li onClick={() => handleClick('OpenCall')}><div >
        <MdAddCircle size={20}></MdAddCircle>
          <span>Abrir Chamado</span>
        </div></li>
        <li onClick={() => handleClick('Chamados')}> 
        <Md size={20}></MdAddCircle>
        Chamados</li>
        <li onClick={() => handleClick('Clientes')}>Clientes</li>
        <li onClick={() => handleClick('Configurações')}>Configurações</li>
      </ul>
    </div>
  );
};

export default Sidebar;
