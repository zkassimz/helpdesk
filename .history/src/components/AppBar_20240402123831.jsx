import React, { useState } from 'react';
import { MdAdd, MdSearch, MdExitToApp } from 'react-icons/md';
import './css/AppBar.css';
import CreateTicketPage from '../components/AbrirChamadoForm.jsx'; // Importe sua página de criação de chamados aqui

const AppBar = () => {
  const [currentPage, setCurrentPage] = useState(null);

  const handleOpenCreateTicketPage = () => {
    setCurrentPage('createTicket');
  };

  const handleBackToDefaultPage = () => {
    setCurrentPage(null);
  };

  return (
    <div className="appbar">
      <div className="appbar-left">
        {/* Se currentPage for null, exibe o botão "Abrir Chamado" */}
        {currentPage === null && (
          <div className="appbar-item" onClick={handleOpenCreateTicketPage}>
            <MdAdd size={24} />
            <span>Abrir Chamado</span>
          </div>
        )}
        {/* Se currentPage for null, exibe o botão "Consultar/Atender" */}
        {currentPage === null && (
          <div className="appbar-item" onClick={() => console.log("Consultar/Atender")}>
            <MdSearch size={24} />
            <span>Consultar/Atender</span>
          </div>
        )}
        {/* Se currentPage for diferente de null, exibe o botão de voltar */}
        {currentPage !== null && (
          <div className="appbar-item" onClick={handleBackToDefaultPage}>
            <MdSearch size={24} />
            <span>Voltar</span>
          </div>
        )}
      </div>
      <div className="appbar-right">
        <span>Kássio </span>
        <div className="logout-button" onClick={() => console.log("Logout")}>
          <MdExitToApp size={24} />
        </div>
      </div>
      {currentPage === 'createTicket' && <CreateTicketPage />}
    </div>
  );
};

export default AppBar;
