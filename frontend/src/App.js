import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/register';
import Login from './components/login';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <div>
      <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route exact path="/register" element={<Register/>}/>
              <Route exact path="/login" element={<Login/>}/>
            </Routes>
          </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
