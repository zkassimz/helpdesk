// src/App.js
import React, { useState } from 'react';
import AppBar from './components/AppBar'; // Importando o componente AppBar
import Sidebar from './components/Sidebar';
import Chamados from './components/Chamados';
import Clientes from './components/Clientes';
import Configuracoes from './components/Configuracoes';
import Configuracoes from './components/AbrirChamadoForm';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('Dashboard');

  const renderPage = () => {
    switch (currentPage) {

      case 'OpenCall':
        return <CreateTicketPage />;
      case 'Chamados':
        return <Chamados />;
      case 'Clientes':
        return <Clientes />;
      case 'Configuracoes':
        return <Configuracoes />;
      default:
        return <div>Página não encontrada</div>;
    }
  };

  return (
    <div className="app">
      <AppBar />
      <div className="content">
        <Sidebar setCurrentPage={setCurrentPage} />
        <div className="main-content">
          {renderPage()}
        </div>
      </div>
    </div>
  );
}

export default App;
