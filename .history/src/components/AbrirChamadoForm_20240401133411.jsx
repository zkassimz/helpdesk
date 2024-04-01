import React, { useState } from 'react';

const OpenChamadoDialog = ({ isOpen, onClose, onSubmit }) => {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [setor, setSetor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ nome, descricao, setor });
    setNome('');
    setDescricao('');
    setSetor('');

    onClose();
  };

  return (
    <div className={`dialog ${isOpen ? 'open' : ''}`}>
      <div className="dialog-content">
        <span className="close-button" onClick={onClose}>X</span>
        <h2>Abrir Chamado</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="descricao">Descrição do Problema:</label>
            <textarea id="descricao" value={descricao} onChange={(e) => setDescricao(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="setor">Setor:</label>
            <input type="text" id="setor" value={setor} onChange={(e) => setSetor(e.target.value)} required />
          </div>
          <button type="submit">Abrir Chamado</button>
        </form>
      </div>
    </div>
  );
};

export default OpenChamadoDialog;
