// src/pages/CadastroEquipamento.jsx

import React from "react";
import { Card, Typography, Layout } from "antd";
import EquipamentoForm from "../components/EquipamentoForm";
import './CadastroEquipamento.css'; 

const { Title } = Typography;
const { Content } = Layout;

const CadastroEquipamento = () => {
  const handleSubmit = (values) => {
   
    const formattedValues = {
      ...values,
      dataCompra: values.dataCompra ? values.dataCompra.format('YYYY-MM-DD') : null,
    };
    console.log("Dados para salvar:", formattedValues);
   // banco de dados aqui
  };

  return (
    
    <Content className="site-layout-content">
      <Card bordered={false} className="page-card">
        <Title level={2} style={{ marginBottom: '24px', textAlign: 'center' }}>
          Cadastro de Novo Equipamento
        </Title>
        <EquipamentoForm onFinish={handleSubmit} />
      </Card>
    </Content>
  );
};

export default CadastroEquipamento;