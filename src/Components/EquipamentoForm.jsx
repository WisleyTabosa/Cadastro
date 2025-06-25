import React from "react";
import {
  Form,
  Input,
  Select,
  Button,
  DatePicker,
  Upload,
  InputNumber,
  Divider,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import dayjs from "dayjs";

const { Option } = Select;

const EquipamentoForm = ({ initialValues = {}, onFinish, submitText = "Cadastrar Equipamento" }) => {
  const [form] = Form.useForm();

  return (
    <Form
      layout="vertical"
      form={form}
      onFinish={onFinish}
      initialValues={{ dataCompra: dayjs(), ...initialValues }}
    >
      <Divider orientation="left">Informações Gerais</Divider>
      <Form.Item label="Tipo de Equipamento" name="tipoEquipamento" rules={[{ required: true }]}>
        <Select placeholder="Selecione o tipo">
          <Option value="computador">Computador</Option>
          <Option value="notebook">Notebook</Option>
          <Option value="monitor">Monitor</Option>
          <Option value="impressora">Impressora</Option>
        </Select>
      </Form.Item>
      <Form.Item label="Fabricante" name="fabricante" rules={[{ required: true }]}>
        <Select placeholder="Selecione o fabricante">
          <Option value="dell">Dell</Option>
          <Option value="hp">HP</Option>
        </Select>
      </Form.Item>
      <Form.Item label="Etiqueta" name="etiqueta" rules={[{ required: true }]}>
        <Input type="number" />
      </Form.Item>
      <Form.Item label="Número de Série" name="numeroSerie" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Modelo" name="modelo" rules={[{ required: true }]}>
        <Select placeholder="Selecione o modelo">
          <Option value="optiplex">Optiplex GX 370</Option>
        </Select>
      </Form.Item>
      <Form.Item label="Local" name="local" rules={[{ required: true }]}>
        <Select placeholder="Selecione o local">
          <Option value="TI">Sala TI</Option>
          <Option value="ADM">Administração</Option>
        </Select>
      </Form.Item>
      <Form.Item label="Situação" name="situacao" rules={[{ required: true }]}>
        <Select placeholder="Selecione a situação">
          <Option value="operacional">Operacional</Option>
          <Option value="sucateado">Sucateado</Option>
        </Select>
      </Form.Item>

      <Form.Item label="Anexar imagem" name="imagem">
        <Upload beforeUpload={() => false} maxCount={1}>
          <Button icon={<UploadOutlined />}>Selecionar Arquivo</Button>
        </Upload>
      </Form.Item>

      <Divider orientation="left">Configuração do Equipamento</Divider>
      <Form.Item label="Nome do Computador" name="nomeComputador">
        <Input />
      </Form.Item>
      <Form.Item label="Placa Mãe" name="placaMae">
        <Select placeholder="Selecione o modelo">
          <Option value="asrock">ASRock</Option>
        </Select>
      </Form.Item>
      <Form.Item label="Processador" name="processador">
        <Select placeholder="Selecione o modelo">
          <Option value="i5">Intel i5</Option>
        </Select>
      </Form.Item>
      <Form.Item label="Memória" name="memoria">
        <Select placeholder="Selecione o modelo">
          <Option value="8gb">8GB</Option>
        </Select>
      </Form.Item>
      <Form.Item label="Placa de Vídeo" name="placaVideo">
        <Select placeholder="Selecione o modelo" />
      </Form.Item>
      <Form.Item label="Placa de Rede" name="placaRede">
        <Select placeholder="Selecione o modelo" />
      </Form.Item>
      <Form.Item label="Placa de Som" name="placaSom">
        <Select placeholder="Selecione o modelo" />
      </Form.Item>
      <Form.Item label="Placa de Fax/Modem" name="placaFax">
        <Select placeholder="Selecione o modelo" />
      </Form.Item>
      <Form.Item label="HD" name="hd">
        <Select placeholder="Selecione o modelo" />
      </Form.Item>
      <Form.Item label="Gravador de CD" name="gravadorCd">
        <Select placeholder="Selecione o modelo" />
      </Form.Item>
      <Form.Item label="CD-ROM" name="cdRom">
        <Select placeholder="Selecione o modelo" />
      </Form.Item>
      <Form.Item label="DVD" name="dvd">
        <Select placeholder="Selecione o modelo" />
      </Form.Item>
      <Form.Item label="Monitor" name="monitor">
        <Select placeholder="Selecione o tamanho" />
      </Form.Item>

      <Divider orientation="left">Itens Específicos</Divider>
      <Form.Item label="Tipo de Impressora" name="impressora">
        <Select placeholder="Selecione o tipo" />
      </Form.Item>
      <Form.Item label="Scanner" name="scanner">
        <Select placeholder="Selecione a resolução" />
      </Form.Item>

      <Divider orientation="left">Informações Contábeis</Divider>
      <Form.Item label="Unidade" name="unidade">
        <Select placeholder="Selecione a unidade" />
      </Form.Item>
      <Form.Item label="Centro de Custo" name="centroCusto">
        <Select placeholder="Selecione o centro de custo" />
      </Form.Item>
      <Form.Item label="Fornecedor" name="fornecedor">
        <Select placeholder="Selecione o fornecedor" />
      </Form.Item>
      <Form.Item label="Nota Fiscal" name="notaFiscal">
        <Input />
      </Form.Item>
      <Form.Item label="Valor R$" name="valor">
        <InputNumber min={0} style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item label="Data da Compra" name="dataCompra">
        <DatePicker format="DD/MM/YYYY" style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item label="Tipo de Garantia" name="tipoGarantia">
        <Select placeholder="Selecione o tipo" />
      </Form.Item>
      <Form.Item label="Tempo de Garantia" name="tempoGarantia">
        <Select placeholder="Selecione o tempo" />
      </Form.Item>

      <Divider orientation="left">Comentário</Divider>
      <Form.Item label="Comentário" name="comentario">
        <Input.TextArea rows={4} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          {submitText}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EquipamentoForm;
