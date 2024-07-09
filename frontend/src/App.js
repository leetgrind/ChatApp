import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/register';
import { AuthProvider } from './contexts/AuthContext';
import LoginComponent from './components/login';
import Home from './pages/Home';
import ProfilePage from './pages/Profile';
import ApiTest from './ApiTest';

function App() {
  return (
    <div>
      <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route exact path='/' element={<Home/>}/>
              <Route exact path='/api' element={<ApiTest/>}/>
              <Route exact path="/register" element={<Register/>}/>
              <Route exact path='/profile' element={<ProfilePage/>}/>
              <Route exact path="/login" element={<LoginComponent/>}/>
            </Routes>
          </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
