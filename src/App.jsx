import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import CadastroEquipamento from './Pages/CadastroEquipamento';



function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cadastrar" element={<Register />} />
      <Route path="/equipamentoform" element={<CadastroEquipamento />} />

    </Routes>
  )
}

export default App
