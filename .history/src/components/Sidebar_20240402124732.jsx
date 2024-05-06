import React from 'react';
import './css/SideBar.css';
import { MdAdd, MdSearch, MdExitToApp, MdSettings, MdSelectAll, MdTimer10Select, Md30FpsSelect, MdSend, MdAddCircle, MdList, MdPerson } from 'react-icons/md';
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
        <MdList size={20}></MdList>
        Chamados</li>
        <li onClick={() => handleClick('Clientes')}>
          
        <MdPerson size={20}></MdPerson>
          Clientes</li>
        <li onClick={() => handleClick('Configurações')}>Configurações</li>
      </ul>
    </div>
  );
};

export default Sidebar;
