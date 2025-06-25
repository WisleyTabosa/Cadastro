import React from "react";
import EquipamentoForm from "./EquipamentoForm";

const CadastroEquipamento = () => {
  const handleSubmit = (values) => {
    console.log("Dados cadastrados:", values);
    // aqui você pode integrar com API ou salvar no banco
  };

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: 24 }}>
      <h1>Cadastro de Equipamento</h1>
      <EquipamentoForm onFinish={handleSubmit} />
    </div>
  );
};

export default CadastroEquipamento;
