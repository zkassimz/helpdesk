import React, { useState } from 'react';
import './OpenChamadoDialog.css'; // Importe o arquivo CSS para estilização

const OpenChamadoDialog = ({ isOpen, onClose, onSubmit }) => {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [setor, setSetor] = useState('TI'); // Valor padrão definido como 'TI'

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ nome, descricao, setor });
    setNome('');
    setDescricao('');
    setSetor('TI'); // Reinicia o setor para 'TI'
    // Fechar o diálogo
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
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
            <select id="setor" value={setor} onChange={(e) => setSetor(e.target.value)} required>
              <option value="TI">T.I</option>
              <option value="FINANCEIRO">Financeiro</option>
              <option value="RH">RH</option>
            </select>
          </div>
          <button type="submit">Abrir Chamado</button>
        </form>
      </div>
    </div>
  );
};

export default OpenChamadoDialog;
