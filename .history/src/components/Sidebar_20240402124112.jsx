import React from 'react';
import './css/SideBar.css';

const Sidebar = ({ setCurrentPage }) => {
  const handleClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
       
      </div>
      <ul className="menu">
        <li onClick={() => handleClick('Chamados')}><div >
         
          <span>Abrir Chamado</span>
        </div></li>
        <li onClick={() => handleClick('Chamados')}>Chamados</li>
        <li onClick={() => handleClick('Clientes')}>Clientes</li>
        <li onClick={() => handleClick('Configurações')}>Configurações</li>
      </ul>
    </div>
  );
};

export default Sidebar;
