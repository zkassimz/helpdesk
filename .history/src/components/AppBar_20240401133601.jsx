import React, { useState } from 'react'; // Importando useState
import { MdAdd, MdSearch, MdExitToApp } from 'react-icons/md';
import './css/AppBar.css';
import OpenChamadoDialog from './OpenChamadoDialog'; // Importando o componente

const AppBar = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAbrirChamado = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="appbar">
      <div className="appbar-left">
        <div className="appbar-item" onClick={handleAbrirChamado}> {/* Alterando a função chamada no clique */}
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
      {/* Renderizando o componente OpenChamadoDialog condicionalmente */}
      <OpenChamadoDialog isOpen={isDialogOpen} onClose={handleCloseDialog} onSubmit={handleSubmit} />
    </div>
  );
};

export default AppBar;
