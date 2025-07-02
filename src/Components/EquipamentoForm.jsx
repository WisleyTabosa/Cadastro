// src/components/EquipamentoForm.jsx

import React from "react";
import {
  Form,
  Input,
  Select,
  Button,
  DatePicker,
  Upload,
  InputNumber,
  Card,
  Row,
  Col,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import dayjs from "dayjs";

const { Option } = Select;

const EquipamentoForm = ({ initialValues = {}, onFinish, submitText = "Cadastrar Equipamento" }) => {
  const [form] = Form.useForm();
  
 
  const tipoEquipamento = Form.useWatch('tipoEquipamento', form);

 
  const renderConfiguracaoFields = () => {
    if (tipoEquipamento === 'computador' || tipoEquipamento === 'notebook') {
      return (
        <Card title="Configuração do Equipamento" bordered={false} style={{ marginBottom: 24 }}>
          <Row gutter={16}>
            <Col xs={24} sm={12}><Form.Item label="Nome do Computador" name="nomeComputador"><Input placeholder="Ex: TI-FINANCEIRO-01" /></Form.Item></Col>
            <Col xs={24} sm={12}><Form.Item label="Placa Mãe" name="placaMae"><Input placeholder="Ex: Gigabyte B450M" /></Form.Item></Col>
            <Col xs={24} sm={12}><Form.Item label="Processador" name="processador"><Input placeholder="Ex: Intel Core i5-10400" /></Form.Item></Col>
            <Col xs={24} sm={12}><Form.Item label="Memória RAM" name="memoria"><Input placeholder="Ex: 16GB DDR4 3200MHz" /></Form.Item></Col>
            <Col xs={24} sm={12}><Form.Item label="Armazenamento (HD/SSD)" name="hd"><Input placeholder="Ex: SSD 512GB NVMe" /></Form.Item></Col>
            <Col xs={24} sm={12}><Form.Item label="Placa de Vídeo" name="placaVideo"><Input placeholder="Ex: NVIDIA GeForce GTX 1650" /></Form.Item></Col>
            <Col xs={24} sm={12}><Form.Item label="Monitor" name="monitor"><Input placeholder="Ex: Dell 24' P2419H" /></Form.Item></Col>
          </Row>
        </Card>
      );
    }
    return null;
  };

  
  const renderImpressoraFields = () => {
    if (tipoEquipamento === 'impressora') {
      return (
        <Card title="Itens Específicos da Impressora" bordered={false} style={{ marginBottom: 24 }}>
          <Row gutter={16}>
            <Col xs={24} sm={12}><Form.Item label="Tipo de Impressora" name="tipoImpressora"><Input placeholder="Ex: Laser Monocromática" /></Form.Item></Col>
            <Col xs={24} sm={12}><Form.Item label="Possui Scanner?" name="scanner"><Select placeholder="Selecione"><Option value={true}>Sim</Option><Option value={false}>Não</Option></Select></Form.Item></Col>
          </Row>
        </Card>
      );
    }
    return null;
  };

  return (
    <Form
      layout="vertical"
      form={form}
      onFinish={onFinish}
      initialValues={{ dataCompra: dayjs(), ...initialValues }}
    >
      <Card title="Informações Gerais" bordered={false} style={{ marginBottom: 24 }}>
        <Row gutter={16}>
          <Col xs={24} sm={12} md={8}>
            <Form.Item label="Tipo de Equipamento" name="tipoEquipamento" rules={[{ required: true }]}>
              <Select placeholder="Selecione o tipo">
                <Option value="computador">Computador</Option>
                <Option value="notebook">Notebook</Option>
                <Option value="monitor">Monitor</Option>
                <Option value="impressora">Impressora</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={8}><Form.Item label="Fabricante" name="fabricante" rules={[{ required: true }]}><Input placeholder="Ex: Dell, HP, Lenovo" /></Form.Item></Col>
          <Col xs={24} sm={12} md={8}><Form.Item label="Modelo" name="modelo" rules={[{ required: true }]}><Input placeholder="Ex: Optiplex 3080" /></Form.Item></Col>
          <Col xs={24} sm={12} md={8}><Form.Item label="Patrimônio" name="patrimonio" rules={[{ required: true }]}><Input placeholder="Nº do patrimônio" /></Form.Item></Col>
          <Col xs={24} sm={12} md={8}><Form.Item label="Número de Série" name="numeroSerie" rules={[{ required: true }]}><Input placeholder="S/N do equipamento" /></Form.Item></Col>
          <Col xs={24} sm={12} md={8}>
            <Form.Item label="Situação" name="situacao" rules={[{ required: true }]}>
              <Select placeholder="Selecione a situação">
                <Option value="operacional">Operacional</Option>
                <Option value="manutencao">Em Manutenção</Option>
                <Option value="backup">Backup</Option>
                <Option value="sucateado">Sucateado</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={8}><Form.Item label="Local" name="local" rules={[{ required: true }]}><Input placeholder="Ex: Sala TI, Almoxarifado" /></Form.Item></Col>
        </Row>
      </Card>

      {}
      {renderConfiguracaoFields()}
      {renderImpressoraFields()}

      <Card title="Informações Contábeis e Comentários" bordered={false} style={{ marginBottom: 24 }}>
        <Row gutter={16}>
          <Col xs={24} sm={12} md={8}><Form.Item label="Fornecedor" name="fornecedor"><Input placeholder="Nome do fornecedor" /></Form.Item></Col>
          <Col xs={24} sm={12} md={8}><Form.Item label="Nota Fiscal" name="notaFiscal"><Input placeholder="Nº da nota fiscal" /></Form.Item></Col>
          <Col xs={24} sm={12} md={8}><Form.Item label="Valor R$" name="valor"><InputNumber min={0} style={{ width: "100%" }} placeholder="Ex: 1500.00" /></Form.Item></Col>
          <Col xs={24} sm={12} md={8}><Form.Item label="Data da Compra" name="dataCompra"><DatePicker format="DD/MM/YYYY" style={{ width: "100%" }} /></Form.Item></Col>
          <Col xs={24} sm={12} md={8}><Form.Item label="Tempo de Garantia" name="tempoGarantia"><Input placeholder="Ex: 12 meses, 3 anos" /></Form.Item></Col>
          <Col xs={24}><Form.Item label="Comentário" name="comentario"><Input.TextArea rows={4} placeholder="Adicione qualquer observação relevante aqui..." /></Form.Item></Col>
          <Col xs={24}><Form.Item label="Anexar imagem" name="imagem"><Upload beforeUpload={() => false} maxCount={1}><Button icon={<UploadOutlined />}>Selecionar Arquivo</Button></Upload></Form.Item></Col>
        </Row>
      </Card>

      <Form.Item>
        <Button type="primary" htmlType="submit" size="large">
          {submitText}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EquipamentoForm;
