import React from 'react';
import { Layout, Row, Col, Typography } from 'antd';
import './Auth.css'; // Vamos criar este arquivo de CSS a seguir

const { Title, Text } = Typography;

export default function AuthLayout({ children }) {
  return (
    <Layout className="auth-layout">
      <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
        
        {/* Coluna para o GIF (escondida em telas pequenas) */}
        <Col lg={8} md={10} className="gif-container">
          <img 
            src="https://media.tenor.com/e085CmdjhFYAAAAC/%D0%BD%D0%B5%D1%80%D0%B2%D0%BD%D1%8B%D0%B5%D0%BA%D0%BB%D0%B5%D1%82%D0%BA%D0%B8-%D0%BD%D0%B5%D0%B9%D1%80%D0%BE%D0%BD%D1%8B.gif" 
            alt="Animação de neurônios"
            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/300x300/ffffff/c2c2c2?text=GIF+Indisponível'; }}
          />
          <Title level={3} style={{ color: '#333', marginTop: '16px' }}>
            Suporte e Técnico
          </Title>
          <Text type="secondary">
            Cadastro e relatorio de Equipametos.
          </Text>
        </Col>
        
        {/* Coluna para o formulário (Login ou Cadastro) */}
        <Col lg={8} md={12} sm={20} xs={24}>
          {children} {/* Aqui é onde o seu formulário será renderizado */}
        </Col>
        
      </Row>
    </Layout>
  );
}