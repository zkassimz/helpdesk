import React from 'react';
import './css/SideBar.css';
import {  MdAddCircle, MdList, MdPerson, MdSettingsAccessibility } from 'react-icons/md';
const Sidebar = ({ setCurrentPage }) => {
  const handleClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
       
      </div>
      <ul className="menu">
        <li onClick={() => handleClick('OpenCall')}>
        <MdAddCircle size={20}></MdAddCircle>
          <span>Abrir Chamado</span>
        </li>
        <li onClick={() => handleClick('Chamados')}> 
        <MdList size={20}></MdList>
        Chamados</li>
        <li onClick={() => handleClick('Clientes')}>
          
        <MdPerson size={20}></MdPerson>
          Clientes</li>
        <li onClick={() => handleClick('Configurações')}>
          
        <MdSettingsAccessibility size={20}></MdSettingsAccessibility>

          Configurações</li>
      </ul>
    </div>
  );
};

export default Sidebar;
