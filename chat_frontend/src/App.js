import './App.css';
import Rooms from './pages/Rooms';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route exact path='/rooms' element={<Rooms/>}/>
          </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
