
import React from "react";
import { Card, Typography, Layout, message } from "antd"; 
import EquipamentoForm from "../components/EquipamentoForm";
import './CadastroEquipamento.css';
import { supabase } from '../supabaseClient'; 

const { Title } = Typography;
const { Content } = Layout;

const CadastroEquipamento = () => {
  
  const handleSubmit = async (values) => {
    try {
      
      const formattedValues = {
        ...values,
        dataCompra: values.dataCompra ? values.dataCompra.format('YYYY-MM-DD') : null,
      };

            
      const { data, error } = await supabase
        .from('equipamentos') 
        .insert([formattedValues]); 

      
      if (error) {
        
        message.error('Falha ao cadastrar: ' + error.message);
        throw error; 
      }

      
      message.success('Equipamento cadastrado com sucesso!');
      console.log("Dados que foram salvos:", formattedValues);

    } catch (error) {
      console.error("Ocorreu um erro:", error);
    }
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
