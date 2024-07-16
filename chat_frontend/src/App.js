import './App.css';
import Rooms from './pages/Rooms';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="bg-slate-800">
      <BrowserRouter>
        <Routes>
            <Route exact path='/rooms' element={<Rooms/>}/>
          </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
