import React, { useState } from 'react';
import { MdAdd, MdSearch, MdExitToApp } from 'react-icons/md';
import './css/AppBar.css';
import CreateTicketPage from '..//CreateTicketPage'; // Importe sua página de criação de chamados aqui

const AppBar = () => {
  // State para controlar qual página está sendo exibida
  const [currentPage, setCurrentPage] = useState(null);

  // Função para abrir a página de criação de chamados
  const handleOpenCreateTicketPage = () => {
    setCurrentPage('createTicket');
  };

  // Função para voltar à página padrão (página inicial)
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
      {/* Se currentPage for 'createTicket', exibe a página de criação de chamados */}
      {currentPage === 'createTicket' && <CreateTicketPage />}
    </div>
  );
};

export default AppBar;
