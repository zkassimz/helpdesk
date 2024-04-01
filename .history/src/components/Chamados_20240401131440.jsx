import React, { useState } from 'react';
import './css/Chamados.css';

const Chamados = () => {
  const [chamados, setChamados] = useState([
    { id: 1, cliente: 'Cliente 1', setor: 'Setor 1', descricao: 'Descrição do chamado 1', ticket: 'ABC123', data:  '19/11/2024'},
    { id: 2, cliente: 'Cliente 2', setor: 'Setor 2', descricao: 'Descrição do chamado 2', ticket: 'DEF456' ,data:  '19/11/2024' },
    { id: 3, cliente: 'Cliente 3', setor: 'Setor 3', descricao: 'Descrição do chamado 3', ticket: 'GHI789' , data:  '19/11/2024' },
  ]);

  const pageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize - 1, chamados.length - 1);

  const renderChamados = () => {
    return chamados.slice(startIndex, endIndex + 1).map(chamado => (
      <tr key={chamado.id}>
          <td>{chamado.ticket}</td>
          <td>{chamado.data}</td>


        <td>{chamado.cliente}</td>
        <td>{chamado.setor}</td>
        <td>{chamado.descricao}</td>
      
        <td><button onClick={() => atenderChamado(chamado)}>Atender Chamado</button></td>
      </tr>
    ));
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const atenderChamado = (chamado) => {
    console.log(`Chamado ${chamado.id} atendido`);
  };

  return (
    <div className="chamados">
      <h2>Chamados</h2>
      <table className="chamados-table">
        <thead>
          <tr>
          <th>Número do Ticket</th>
          <th>Data</th>         
          <th>Cliente</th>
            <th>Setor</th>
            <th>Descrição do Problema</th>         
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {renderChamados()}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>Anterior</button>
        <span className=''>Página {currentPage}</span>
        <button onClick={nextPage} disabled={endIndex === chamados.length - 1}>Próxima</button>
      </div>
    </div>
  );
};

export default Chamados;
