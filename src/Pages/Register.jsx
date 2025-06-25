// import { useState } from 'react'
// import { Form, Input, Button, Upload, Typography, Card, message } from 'antd'
// import { UploadOutlined } from '@ant-design/icons'
// import imageCompression from 'browser-image-compression'

// export default function Register() {
//   const [imagem, setImagem] = useState(null)

//   const redimensionarImagem = async (arquivo) => {
//     try {
//       const options = {
//         maxWidthOrHeight: 300,
//         useWebWorker: true
//       }
//       const imagemRedimensionada = await imageCompression(arquivo, options)
//       setImagem(imagemRedimensionada)
//       message.success('Imagem redimensionada com sucesso!')
//     } catch (error) {
//       message.error('Erro ao redimensionar imagem.')
//     }
//     return false
//   }

//   const aoFinalizar = (valores) => {
//     const formData = new FormData()
//     formData.append('nome', valores.nome)
//     formData.append('email', valores.email)
//     formData.append('senha', valores.senha)
//     if (imagem) {
//       formData.append('imagem', imagem, imagem.name)
//     }

//     console.log([...formData.entries()])
//     message.success('Cadastro realizado com sucesso (simulado).')
//   }

//   return (
//     <div style={{
//       height: '100vh',
//       backgroundColor: '#5cdbd3',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center'
//     }}>
//       <Card
//         title={<Typography.Title level={3} style={{ marginBottom: 0 }}>Criar Conta</Typography.Title>}
//         style={{
//           width: 400,
//           padding: '20px 0',
//           borderRadius: 8,
//           boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
//         }}
//       >
//         <Form layout="vertical" onFinish={aoFinalizar} style={{ padding: '0 24px' }}>
//           <Form.Item label="Nome completo" name="nome" rules={[{ required: true, message: 'Informe seu nome.' }]}>
//             <Input />
//           </Form.Item>
//           <Form.Item label="E-mail" name="email" rules={[{ required: true, type: 'email', message: 'Informe um e-mail válido.' }]}>
//             <Input />
//           </Form.Item>
//           <Form.Item label="Senha" name="senha" rules={[{ required: true, message: 'Informe uma senha.' }]}>
//             <Input.Password />
//           </Form.Item>
//           <Form.Item label="Foto de perfil">
//             <Upload
//               beforeUpload={redimensionarImagem}
//               showUploadList={{ showRemoveIcon: true }}
//               maxCount={1}
//             >
//               <Button icon={<UploadOutlined />}>Selecionar imagem</Button>
//             </Upload>
//           </Form.Item>
//           <Form.Item>
//             <Button type="primary" htmlType="submit" block>Cadastrar</Button>
//           </Form.Item>
//         </Form>
//       </Card>
//     </div>
//   )
// }
import { useState } from 'react';
import { Form, Input, Button, Upload, Typography, Card, message } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined, UploadOutlined } from '@ant-design/icons';
import imageCompression from 'browser-image-compression';
import AuthLayout from '../components/AuthLayout'; // Importe o layout

export default function Register() {
  const [imagem, setImagem] = useState(null);

  const redimensionarImagem = async (arquivo) => {
    try {
      const options = {
        maxWidthOrHeight: 300,
        useWebWorker: true,
      };
      const imagemRedimensionada = await imageCompression(arquivo, options);
      setImagem(imagemRedimensionada);
      message.success('Imagem selecionada com sucesso!');
    } catch (error) {
      message.error('Erro ao processar imagem.');
    }
    return false; // Impede o upload automático do Ant Design
  };

  const aoFinalizar = (valores) => {
    // Sua lógica de envio aqui
    console.log('Dados do formulário:', valores);
    console.log('Imagem processada:', imagem);
    message.success('Cadastro realizado com sucesso (simulado).');
  };

  return (
    <AuthLayout>
      <Card
        className="auth-card" // Aplica o estilo do CSS
        bordered={false}
      >
        <Typography.Title level={2} style={{ textAlign: 'center', marginBottom: '24px' }}>
          Criar Conta
        </Typography.Title>
        <Form layout="vertical" onFinish={aoFinalizar} requiredMark={false}>
          <Form.Item
            label="Nome completo"
            name="nome"
            rules={[{ required: true, message: 'Informe seu nome.' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Seu nome completo" size="large" />
          </Form.Item>
          <Form.Item
            label="E-mail"
            name="email"
            rules={[{ required: true, type: 'email', message: 'Informe um e-mail válido.' }]}
          >
            <Input prefix={<MailOutlined />} placeholder="seu.email@exemplo.com" size="large" />
          </Form.Item>
          <Form.Item
            label="Senha"
            name="senha"
            rules={[{ required: true, message: 'Informe uma senha.' }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Crie uma senha forte" size="large" />
          </Form.Item>
          <Form.Item label="Foto de perfil">
            <Upload beforeUpload={redimensionarImagem} showUploadList={true} maxCount={1}>
              <Button icon={<UploadOutlined />} style={{ width: '100%' }} size="large">
                Selecionar imagem
              </Button>
            </Upload>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block size="large">
              Cadastrar
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </AuthLayout>
  );
}