import React, { useState } from 'react';
import './css/CreateTicketPage.css';

const CreateTicketPage = () => {
  const [formData, setFormData] = useState({
    setor: '',
    descricaoProblema: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
    setFormData({
      setor: '',
      descricaoProblema: ''
    });
  };

  return (
    
    <div className="create-ticket-page">
      <h1>Abrir Chamado</h1>
      <form onSubmit={handleSubmit} className="ticket-form">
        <div className="form-group">
          <label htmlFor="setor">Setor:</label>
          <input
            type="text"
            id="setor"
            name="setor"
            value={formData.setor}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="descricaoProblema">Descrição do Problema:</label>
          <textarea
            id="descricaoProblema"
            name="descricaoProblema"
            value={formData.descricaoProblema}
            onChange={handleChange}
            required
            className="textarea-field"
          />
        </div>
        <button type="submit" className="submit-button">Criar Chamado</button>
      </form>
    </div>
  );
};

export default CreateTicketPage;
