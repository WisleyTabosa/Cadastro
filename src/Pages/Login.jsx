// import { Button, Form, Input, Typography, Card } from 'antd'
// import { useNavigate } from 'react-router-dom'

// export default function Login() {
//   const navigate = useNavigate()

//   const onFinish = (valores) => {
//     console.log('Login com:', valores)
//   }

//   return (
//     <div style={{
//       minHeight: '100vh',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center'
//     }}>
//       <Card
//         title={<Typography.Title level={3} style={{ marginBottom: 0 }}>Entrar</Typography.Title>}
//         style={{
//           width: 400,
//           borderRadius: 8,
//           boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
//         }}
//       >
//         <Form layout="vertical" onFinish={onFinish}>
//           <Form.Item label="E-mail" name="email" rules={[{ required: true, message: 'Informe seu e-mail.' }]}>
//             <Input />
//           </Form.Item>
//           <Form.Item label="Senha" name="senha" rules={[{ required: true, message: 'Informe sua senha.' }]}>
//             <Input.Password />
//           </Form.Item>
//           <Form.Item>
//             <Button type="primary" htmlType="submit" block>Entrar</Button>
//           </Form.Item>
//           <Form.Item>
//             <Button type="link" block onClick={() => navigate('/cadastrar')}>
//               Criar conta
//             </Button>
//           </Form.Item>
//         </Form>
//       </Card>
//     </div>
//   )
// }
import { Button, Form, Input, Typography, Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import AuthLayout from '../components/AuthLayout'; 

export default function Login() {
  const navigate = useNavigate();

  const onFinish = (valores) => {
    console.log('Login com:', valores);
    navigate('/equipamentoform')
  };

  return (
    <AuthLayout>
      <Card
        className="auth-card" 
        bordered={false}
      >
        <Typography.Title level={2} style={{ textAlign: 'center', marginBottom: '24px' }}>
          Entrar
        </Typography.Title>
        <Form layout="vertical" onFinish={onFinish} requiredMark={false}>
          <Form.Item
            label="E-mail"
            name="email"
            rules={[{ required: true, message: 'Informe seu e-mail.' }]}
          >
            <Input 
              prefix={<MailOutlined />} 
              placeholder="seu.email@exemplo.com"
              size="large"
            />
          </Form.Item>
          <Form.Item
            label="Senha"
            name="senha"
            rules={[{ required: true, message: 'Informe sua senha.' }]}
          >
            <Input.Password 
              prefix={<LockOutlined />}
              placeholder="Sua senha"
              size="large"
            />
          </Form.Item>
          <Form.Item style={{ marginBottom: '8px' }}>
            <Button type="primary" htmlType="submit" block size="large">
              Entrar
            </Button>
          </Form.Item>
          <Form.Item>
            <Button type="link" block onClick={() => navigate('/cadastrar')}>
              Não tem uma conta? Crie agora!
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </AuthLayout>
  );
}